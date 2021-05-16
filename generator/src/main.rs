use std::collections::HashMap;

extern crate csv;
extern crate serde;

#[macro_use]
extern crate serde_derive;

use csv::Error;

#[derive(Debug, Deserialize)]
struct Record {
    node_id: Option<String>,
    prompt: Option<String>,
    explainer: Option<String>,
    explainer_link: Option<String>,
    choice: String,
    node_link: Option<String>,
    external_link: Option<String>,
}

#[derive(Debug, Serialize)]
struct DecisionNode {
    id: String,
    prompt: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    explainer: Option<Explainer>,
    choices: Vec<ChoiceNode>,
}

#[derive(Debug, Serialize)]
struct Explainer {
    text: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    link: Option<String>,
}

#[derive(Debug, Serialize)]
struct ChoiceNode {
    choice: String,
    link: Link,
}

#[derive(Debug, Serialize)]
#[serde(untagged)]
enum Link {
    Internal { internal: String },
    External { external: String },
}

fn load() -> Result<Vec<Record>, Error> {
    let mut rdr = csv::Reader::from_path("eviction_decision_tree.csv")?;
    let mut records: Vec<Record> = Vec::new();
    for record in rdr.deserialize() {
        records.push(record?);
    }
    Ok(records)
}

fn process(records: &[Record]) -> Vec<DecisionNode> {
    let mut decision_nodes: Vec<DecisionNode> = vec![];
    let mut record_iter = records.iter().peekable();

    // node_id | prompt    | choice    | ...
    // -------------------------------------
    // A       | prompt A  | choice 1  | ...
    //         |           | choice 0  | ...
    // B       | Prompt B  | choice 1  | ...
    // ...
    while let Some(record) = record_iter.next() {
        let id = record.node_id.clone().unwrap();
        let prompt = record.prompt.clone().unwrap();
        let explainer = record.explainer.clone().map(|text| Explainer {
            text,
            link: record.explainer_link.clone(),
        });

        let mut record_set: Vec<&Record> = vec![record];
        while let Some(&record) = record_iter.peek() {
            if record.node_id.is_none() {
                record_set.push(record);
                record_iter.next();
            } else {
                break;
            }
        }

        let choices: Vec<ChoiceNode> = record_set
            .iter()
            .map(|&r| {
                let choice = r.choice.clone();
                let link = match (r.node_link.clone(), r.external_link.clone()) {
                    (Some(link), _) => Link::Internal { internal: link },
                    (_, Some(link)) => Link::External { external: link },
                    (None, None) => panic!(),
                };
                ChoiceNode { choice, link }
            })
            .collect();

        decision_nodes.push(DecisionNode {
            id,
            prompt,
            explainer,
            choices,
        })
    }
    decision_nodes
}

fn output(nodes: &[DecisionNode]) -> serde_json::Result<()> {
    let mut node_map: HashMap<String, &DecisionNode> = std::collections::HashMap::new();
    for node in nodes {
        node_map.insert(node.id.clone(), &node);
    }

    let j = serde_json::to_string_pretty(&node_map)?;
    println!("{}", "/* eslint-disable quote-props */");
    println!("{}", "import { Prompt, Prompts } from \"./types\"");
    println!("export const PROMPTS: Prompts = {}", j);
    Ok(())
}

fn main() -> Result<(), Error> {
    let records = load()?;
    let nodes = process(&records);
    match output(&nodes) {
        Ok(_) => (),
        Err(e) => panic!("{}", e),
    };
    Ok(())
}
