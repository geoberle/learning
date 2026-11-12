# Personal learning

This repository supports Gerd’s personal learning across subjects. Learning happens through the published GitHub Pages site; the repository preserves materials and learning history.

## Workflow

For defining missions, managing learning issues, integrating materials, recording progress, or reconciling the overview, read [.agents/skills/manage-learning/SKILL.md](.agents/skills/manage-learning/SKILL.md).

Use Matt Pocock’s `teach` skill for teaching, lessons, reference sheets, and learning records. Run it in the selected mission workspace, never the repository root. Use grilling to clarify a mission when its purpose or success criteria are unsettled.

## Model

- Organize GitHub issues as topic → mission → learning task. Topic issues carry `topic`, can remain open indefinitely, and have no teach workspace or mission lifecycle label. Each mission belongs to one primary topic; link additional relevant topics.
- One mission has one workspace at `docs/<subject>/<mission>/` and one GitHub issue, nested under its topic and serving as parent for its learning tasks. `MISSION.md` defines its purpose and success criteria; link it and the parent issue in both directions.
- Track individual questions, exercises, and gaps as sub-issues when they need separate discussion. Mission membership comes from the parent relationship, not mission identity labels. Use the lifecycle labels defined in `manage-learning` for mission status.
- GitHub issues own task and mission status. Learning records preserve evidence for future teaching. See [GLOSSARY.md](GLOSSARY.md) for terminology.
- Capture learning progress only from Gerd’s explicit report or evidence established during teaching. Publishing materials establishes availability, not understanding. Close a mission only with Gerd’s confirmation against its success criteria.
- Keep broad interests as topic issues; define separate missions beneath them. Create workspace artifacts when needed; do not scaffold empty courses.

## Publishing

Follow [README.md](README.md) for workspace layout and navigation. Integrating or updating materials includes updating the overview, committing the scoped changes, pushing, and verifying the Pages deployment and affected public URLs.

The overview is a static summary of GitHub issue status, updated during managed changes or an explicit reconciliation. Keep availability separate from learning progress and link the parent issue and published lessons. Do not present task completion percentages as mastery.

Both the repository and the website are public. Keep credentials and private work material out of all committed files.
