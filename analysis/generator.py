import csv
from dataclasses import dataclass
import json
import hashlib
from typing import Optional

def h(s: str):
  return hashlib.sha512(s.encode()).hexdigest()[0:6]

@dataclass
class Row:
    uri: str
    prompt: str
    choice: str
    link: Optional[str]
    assist: Optional[str]

rows: [Row] = []
with open("trees/evictions_tree.tsv") as f:
  reader = csv.DictReader(f, delimiter="\t")
  for row in reader:
    r = Row(
      uri=row["uri"],
      prompt=row["prompt"],
      choice=row["choice"],
      link=row["link"],
      assist=row["assist"]
    )
    rows.append(r)

groupedRows = {}
for row in rows:
  r = groupedRows.get(row.uri, [])
  r.append(row)
  groupedRows[row.uri] = r

output = dict()
for (key, rows) in groupedRows.items():
  cs = []
  for row in rows:
    cs.append({
      "choiceText": row.choice,
      "linksTo": h(row.link)
    })

  d = {
    "id": h(rows[0].uri),
    "promptText": rows[0].prompt,
    "choices": cs
  }
  output[h(rows[0].uri)] = d

print(json.dumps(output, indent=2))