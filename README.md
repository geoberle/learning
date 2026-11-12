# Learning

Personal learning notes and interactive HTML lessons.

[Read the lessons](https://geoberle.github.io/learning/) · [Learning backlog](https://github.com/geoberle/learning/issues)

## Add a lesson

1. Use a learning issue as input for a teach session.
2. Save its HTML as `docs/<topic>/index.html`, with any assets beside it.
3. Include a navigation link in the lesson: `<a href="../index.html">Back to lessons</a>`.
4. In `docs/index.html`, link the topic title to `<topic>/index.html` and replace its “Planned” label with “Available”. Add a new list entry for a new topic.
5. Commit and push to `main`. GitHub Pages publishes the updated `docs` directory.

Use relative URLs for local assets and navigation, not paths starting with `/`. Keep generated lessons self-contained where possible; there is no build framework or shared JavaScript requirement. Open `docs/index.html` in a browser to read locally. Lessons that require HTTP can be previewed with `python3 -m http.server --directory docs 8000`.

## Publishing

GitHub Pages publishes from the `/docs` folder on `main`. `docs/.nojekyll` ensures HTML and assets are served without Jekyll processing.

Both the repository and the website are public. Everything under `docs/` is served on the website; all other committed files remain visible on GitHub. Keep credentials and private work material out of this repository.

Check deployment status in the repository’s Actions tab and Settings → Pages.
