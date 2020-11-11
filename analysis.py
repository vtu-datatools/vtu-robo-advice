from extraction import extract
from processing import tree_rooted_at_uri
from render import decision_tree_to_dot

from models import DecisionNode

# This includes inaccessible nodes
full_decision_tree = extract()

# Tree accessible from root node /contest/1
decision_tree = tree_rooted_at_uri("/contest/1", full_decision_tree)

with open("graphs/advice_full.dot", "w") as f:
    f.write(decision_tree_to_dot(decision_tree))

# /contest/1 has three main subgraphs
# /contest/14: I am having issues getting my security deposit back
# /contest/11: I need help getting something repaired
# /contest:29: I need help with an evicition

decision_tree_sec_dep = tree_rooted_at_uri("/contest/14", full_decision_tree)
with open("graphs/advice_sec_dep.dot", "w") as f:
    f.write(decision_tree_to_dot(decision_tree_sec_dep))

decision_tree_repairs = tree_rooted_at_uri("/contest/14", full_decision_tree)
with open("graphs/advice_repairs.dot", "w") as f:
    f.write(decision_tree_to_dot(decision_tree_repairs))

decision_tree_evictions = tree_rooted_at_uri("/contest/29", full_decision_tree)
with open("graphs/advice_evictions.dot", "w") as f:
    f.write(decision_tree_to_dot(decision_tree_evictions))

