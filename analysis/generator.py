import csv
from dataclasses import dataclass
import json
from typing import Dict, List, Optional

URI = str
NodeId = str
Prompt = str
Choice = str
NodeLink = Optional[NodeId]
ExternalLink = Optional[URI]


@dataclass
class Row:
    node_id: NodeId
    prompt: str
    choice: str
    node_link: Optional[NodeId]
    external_link: Optional[URI]
    assist: Optional[str]


def parse_rows() -> List[Row]:
    rows: List[Row] = []
    with open("trees/evictions_tree.tsv") as f:
        reader = csv.DictReader(f, delimiter="\t")
        for row in reader:
            r = Row(
                node_id=row["node"],
                prompt=row["prompt"],
                choice=row["choice"],
                node_link=row["node_link"],
                external_link=row["external_link"],
                assist=row["assist"],
            )
            rows.append(r)
    return rows


def group_rows(rows: List[Row]) -> Dict[NodeId, List[Row]]:
    grouped_rows: Dict[NodeId, List[Row]] = {}
    for row in rows:
        r = grouped_rows.get(row.node_id, [])
        r.append(row)
        grouped_rows[row.node_id] = r
    return grouped_rows


def gen_graph(rows: List[Row]) -> str:
    grouped_rows: Dict[NodeId, List[Row]] = group_rows(rows)

    buffer = []
    buffer.append("digraph decision_tree {")

    # Render Internal Nodes
    for gr in grouped_rows.values():
        row: Row = gr[0]
        buffer.append(
            '  "{}" [label="{}\\n{}"]'.format(row.node_id, row.node_id, row.prompt)
        )

    # Render External Nodes
    external_links = set([row.external_link for row in rows if row.external_link])
    for el in external_links:
        buffer.append('  "{}" [label="{}" shape="diamond"]'.format(el, el))

    # Render Edges
    for (node_id, grs) in grouped_rows.items():
        for row in grs:
            link: str
            if row.node_link:
                link = row.node_link
            elif row.external_link:
                link = row.external_link
            else:
                link = ""
            buffer.append(
                '  "{}" -> "{}" [label="{}"]'.format(node_id, link, row.choice)
            )

    buffer.append("}")
    return "\n".join(buffer)


def gen_data(grouped_rows: Dict[NodeId, List[Row]]) -> str:
    output = dict()
    for (key, rows) in grouped_rows.items():
        cs = []
        for row in rows:
            temp = {"choiceText": row.choice}
            if row.node_link:
                temp["linksTo"] = row.node_link
            if row.external_link:
                temp["linkOut"] = row.external_link
            cs.append(temp)

        d = {"id": key, "promptText": rows[0].prompt, "choices": cs}
        output[key] = d
    return json.dumps(output, indent=2)


def main() -> None:
    rows: List[Row] = parse_rows()
    grouped_rows: Dict[NodeId, List[Row]] = group_rows(rows)

    graph = gen_graph(rows)
    with open("trees/evictions_tree.dot", "w") as f:
        f.write(graph)

    data = gen_data(grouped_rows)
    with open("trees/evictions_tree.json", "w") as f:
        f.write(data)


if __name__ == "__main__":
    main()
