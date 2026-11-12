# Learning

Gerd’s personal learning missions, interactive lessons, and reference materials.

[Read the lessons](https://geoberle.github.io/learning/) · [Learning backlog](https://github.com/geoberle/learning/issues)

## Manage learning

Use the project skill `manage-learning` to define missions, organize issues, integrate materials, record progress, or refresh the overview. Its instructions are in [.agents/skills/manage-learning/SKILL.md](.agents/skills/manage-learning/SKILL.md); repository conventions are in [AGENTS.md](AGENTS.md).

Issues form a topic → mission → learning task hierarchy. Topics carry the `topic` label and organize long-term interests. Each mission is a sub-issue of its primary topic, has its own teaching workspace, and can have task sub-issues for questions, exercises, and gaps. Only missions carry lifecycle labels. Matt Pocock’s `teach` skill manages educational materials and learning records; it must be available in the agent environment.

## Workspace layout

Run `teach` from the mission directory, such as `docs/ai/tool-calling-assistant/`. Paths in that skill resolve from that directory. Create artifacts as needed:

```text
docs/
  index.html
  <subject>/<mission>/
    MISSION.md
    RESOURCES.md
    NOTES.md
    lessons/0001-slug.html
    reference/
    assets/
    learning-records/
```

Follow `teach` for artifact formats and shared components. Each workspace has its own shared stylesheet. MISSION.md and the parent issue link to each other.

## Add and publish materials

1. Create or update materials through `teach` in the selected workspace.
2. Link lessons and reference sheets from `docs/index.html`, grouped by subject and mission. Show availability separately from learning status and include the parent issue link. Topic entries link to their topic issues; missions link to their own issues.
3. Include a “Back to learning” link in lesson and reference pages. At the layout above, its target is `../../../index.html`. Use `../assets/` for workspace assets and relative links between materials.
4. Verify links and assets, then commit and push the scoped changes to `main`.
5. Verify the Pages deployment and the affected public URLs.

The overview is refreshed during managed changes or explicit reconciliation. Manual issue changes do not update it automatically. Publishing a lesson does not mean it has been learned.

Use relative URLs rather than paths starting with `/`, so navigation works locally and under `/learning/`. Open `docs/index.html` locally, or use `python3 -m http.server --directory docs 8000` for lessons requiring HTTP.

GitHub Pages publishes `/docs` on `main`. `docs/.nojekyll` bypasses Jekyll processing. Check deployment status in Actions and Settings → Pages.

Both the repository and the website are public, including committed mission metadata and learning records. Keep credentials and private work material out of the repository.
