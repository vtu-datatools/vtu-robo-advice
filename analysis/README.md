# VTU Robot Advice
Building a decision tree to guide tenants through tenancy issues.

Based on: https://tenants-talk.ca/contest

## Structure
### Shared
* `models.py`: Shared data models for representing a decision tree.

### Analysis
* `downloader.py`: Downloads the contents of https://tenants-talk.ca/contest/:id to `/tenants-talk`.
* `extraction.py`: Extracts the decision tree encoded in the https://tenants-talk.ca/contest site from the downloaded files.
* `processing.py`: Utilities for working with decision trees.
* `render.py`: Utilities for rendering decision trees to the `*.dot` format.
* `analysis.py`: Script to generate graphs of the https://tenants-talk.ca/contest decision trees.

### Generation
* `generator.py`: Generates a JSON encoding of the decision tree encoded in `/trees/evictions_tree.tsv`, as well as a graph visualization. 

## Output
The output of this analyis is the three major decision trees from the https://tenants-talk.ca/contest website for:

* Handling issues with getting secuiryt deposits
* Handling issues with repairs
* Handling issues with evictions

Visualizations of these trees are available in `/graphs`. This information was used to generate a new evictions decision tree in (stored in `/trees/evictions_tree.tsv`). 

## Notes
Some of the html files from https://tenants-talk.ca/contest where malformed and have been manually adjusted to ease processing.

Not all pages of https://tenants-talk.ca/contest are used as some are unreachable based on the https://tenants-talk.ca/contest/1 entry point.

## Rendering .dot Files
`.dot` files can be rendered using [Graphviz](https://graphviz.org/) tooling with

```sh
dot -Tsvg <input>.dot -o <output>.svg
```