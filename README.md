# Bestow Parity ESLint Plugin

This plugin's purpose is to allow all editors to render code as "all green"
from a linter's perspective. It is compiled from rules deduced from the current
state of the code, which was the result of a Prettier run some time ago.

At some point, another Bestow ESLint plugin will contain custom linting rules
for our purposes without compromise, and will be part of a ESLint->Prettier
pipeline.

# Note on discrete "style commits"

In order to not pollute Git history and hide all code changes from ourselves,
changes caused by an editor plugin, CLI ESlint run, etc. that effect every line
should only happen in special, solitary, discrete commits, or preferably PRs.

For example, if a lint or prettier rule is found to be essential, a PR with the
subject "LINT PR" should be created, with _no actual code/business logic
changes_. Again, mixing the two means we lose the ability to find when changes
happened, and rollbacks are potentially complicated or broken.
