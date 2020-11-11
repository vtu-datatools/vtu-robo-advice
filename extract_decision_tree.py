import csv
from dataclasses import dataclass
from typing import Optional

from bs4 import BeautifulSoup

data_path = "tenants-talk/{}.html"

@dataclass
class ChoiceEdge:
    decision: str
    link: str
    assist: Optional[str]

@dataclass
class DecisionNode:
    uri: str
    prompt: str
    choices: list[ChoiceEdge]

def process(uri: str, html_doc: str) -> DecisionNode:
    soup = BeautifulSoup(html_doc, "html.parser")
    jumbotron = soup.find("div", {"class": "jumbotron"})
    prompt = jumbotron.h2.text
    raw_choices = jumbotron.div.ul.find_all("li")
    choices = [process_choice (rc) for rc in raw_choices]
    return DecisionNode(uri, prompt, choices)

def process_choice(raw_choice) -> ChoiceEdge:
    as_ = raw_choice.find_all("a")
    decision = as_[0].text.strip()
    link = as_[0].attrs["href"]
    assist = None
    if len(as_) == 2:
        assist = as_[1].attrs["data-content"].strip()
    return ChoiceEdge(decision, link, assist)

def extract() -> [DecisionNode]:
    decision_nodes = []
    for i in range (1, 45):
        with open(data_path.format(i), 'r') as f:
            html_doc = f.read()

        uri = "/contest/{}".format(i)
        decision_nodes.append(process(uri, html_doc))
    return decision_nodes

if __name__ == "__main__":
    decision_nodes = extract()
    for dn in decision_nodes:
        print(dn)
