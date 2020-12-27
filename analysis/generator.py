import csv
from dataclasses import dataclass
import json
import hashlib
from typing import Any, Dict, List, Optional

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


def main() -> None:
    rows: List[Row] = parse_rows()
    groupedRows: Dict[NodeId, List[Row]] = {}
    for row in rows:
        r = groupedRows.get(row.node_id, [])
        r.append(row)
        groupedRows[row.node_id] = r

    output = dict()
    for (key, rows) in groupedRows.items():
        cs = []
        for row in rows:
            temp = {"choiceText": row.choice}
            if row.node_link:
                temp["linksTo"] = row.node_link
            if row.external_link:
                temp["linkOut"] = row.external_link
            cs.append(temp)

        d = {"id": rows[0].node_id, "promptText": rows[0].prompt, "choices": cs}
        output[rows[0].node_id] = d

    print(json.dumps(output, indent=2))


if __name__ == "__main__":
    main()