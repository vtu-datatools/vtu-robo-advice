from dataclasses import dataclass
from typing import Optional

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
