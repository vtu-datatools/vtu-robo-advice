from typing import List
from extraction import extract
from processing import tree_rooted_at_uri

from models import DecisionNode


def decision_tree_to_dot(decision_tree: List[DecisionNode]):
    buffer = []
    buffer.append("digraph decision_tree {")

    # Render Nodes
    for dn in decision_tree:
        buffer.append('  "{}" [label="{}\\n{}"]'.format(dn.uri, dn.uri, dn.prompt))

    # Render Edges
    for dn in decision_tree:
        for ch in dn.choices:
            buffer.append(
                '  "{}" -> "{}" [label="{}"]'.format(dn.uri, ch.link, ch.decision)
            )

    buffer.append("}")
    return "\n".join(buffer)


if __name__ == "__main__":
    decision_tree = extract()
    decision_tree_1 = tree_rooted_at_uri("/contest/1", decision_tree)
    print(decision_tree_to_dot(decision_tree))
