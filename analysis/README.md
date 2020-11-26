# VTU Robot Advice
Building a decision tree to guide tenants through tenancy issues.

Based on: https://tenants-talk.ca/contest

## Structure
* `downloader.py`: Downloads the contents of https://tenants-talk.ca/contest/:id to `/tenants-talk`.
* `extraction.py`: Extracts the decision tree encoded in the https://tenants-talk.ca/contest site.
* `models.py`: Contains data models to represent a decision tree.
* `processing.py`: Utilities for working with decision trees.
* `render.py`: Utilities for rendering decision trees to the `*.dot` format.

* `analysis.py`: Script to generate graphs of the https://tenants-talk.ca/contest decision tree.

## Notes
Some of the html files from https://tenants-talk.ca/contest where malformed and have been manually adjusted to ease processing.

Not all pages of https://tenants-talk.ca/contest are used as some are unreachable based on the https://tenants-talk.ca/contest/1 entry point.

## Rendering .dot Files
`.dot` files can be rendered using [Graphviz](https://graphviz.org/) tooling with

```sh
dot -Tsvg <input>.dot -o <output>.svg
```