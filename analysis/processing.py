from typing import List
from extraction import extract
from models import DecisionNode


def tree_rooted_at_uri(
    uri: str, decision_tree: List[DecisionNode]
) -> List[DecisionNode]:
    decision_node_dict = dict(map(lambda dn: (dn.uri, dn), decision_tree))
    to_include = [uri]
    included_nodes = set()
    while to_include:
        node_uri = to_include.pop()
        node = decision_node_dict.get(node_uri, None)
        if node:
            included_nodes.add(node.uri)
            children = map(lambda ch: ch.link, node.choices)
            to_include.extend(children)

    return list(filter(lambda dn: dn.uri in included_nodes, decision_tree))


if __name__ == "__main__":
    decision_tree = extract()
    for dn in tree_rooted_at_uri("/contest/1", decision_tree):
        print(dn.uri)
