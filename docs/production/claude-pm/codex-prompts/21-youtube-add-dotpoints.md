# Brief 21: add the syllabus dotpoint to every YouTube description

Read `00-standing-rules.md` first. The owner wants each video's description to quote the syllabus dotpoint the video teaches. Edit the descriptions of the seven published videos below (do not re-upload, re-render or change titles, captions, playlists or visibility), then record the change.

## Format

Add one block after the existing "Chemistry 2017: Year 12 Module 5 ..." / "Biology 2017: ..." course line and before the "Official 2017 course" link:

```
Syllabus dotpoint (NSW <Subject> Stage 6, 2017, Module 5):
"<dotpoint quoted word for word from the official syllabus>"
```

Use the words exactly as the official 2017 syllabus prints them (lower-case start, keep "for example:" lists only if the video uses those examples; you may end the quote after the main clause and drop the ACARA codes in brackets). If a video teaches two dotpoints, quote both, each on its own line, most central first. Keep the description under YouTube's limit, no em dashes, no other changes.

## Videos and dotpoints

Chemistry wording below is copied from the official syllabus (cached at `out/research/curriculum/chemistry-2017-paragraphs.json`; check it). For Biology, copy the official wording from the NSW Biology Stage 6 (2017) syllabus, Year 12 Module 5 Heredity, Inquiry question "How does reproduction ensure the continuity of a species?"; the paraphrases below say which point.

| Video | URL | Dotpoint(s) |
| --- | --- | --- |
| C1 dynamic equilibrium | https://youtu.be/zaC5iXuovKg | "model static and dynamic equilibrium and analyse the differences between open and closed systems" (p1057) |
| C2 rates reaching equilibrium | https://youtu.be/vd9Ory9-flE | "investigate the relationship between collision theory and reaction rate in order to analyse chemical equilibrium reactions" (p1062) |
| C3 Le Chatelier: concentration and temperature | https://youtu.be/w0GzgApQhQY | "investigate the effects of temperature, concentration, volume and/or pressure on a system at equilibrium and explain how Le Chatelier's principle can be used to predict such effects" (p1067); second: "explain the overall observations about equilibrium in terms of the collision theory" (p1071) |
| B1 sexual and asexual reproduction | https://youtu.be/44FFfv7RGck | The main reproduction dotpoint: explain the mechanisms of reproduction that ensure the continuity of a species, by analysing sexual and asexual methods in a variety of organisms (quote its stem) |
| Mould (fungi) | https://youtu.be/w7edKqGAUwA | The same stem, plus its sub-point on fungi (budding, spores) |
| B2a animal reproduction | https://youtu.be/0P33z4D2q0E | The same stem, plus its sub-point on animals (advantages of external and internal fertilisation) |
| B2c single-celled organisms | https://youtu.be/kG-KexGgCzc | The same stem, plus its sub-points on bacteria (binary fission) and protists (binary fission, budding) |

For B1, Mould, B2a and B2c write the stem once, then the relevant sub-point(s), for example:

```
Syllabus dotpoint (NSW Biology Stage 6, 2017, Module 5):
"explain the mechanisms of reproduction that ensure the continuity of a species, by analysing sexual and asexual methods of reproduction in a variety of organisms, including but not limited to:
- animals: advantages of external and internal fertilisation"
```

(Check every word of that example against the official text before using it.)

## Record

Add a `syllabusDotpoints` field (the exact quoted text) to each video's entry in `docs/production/claude-pm/youtube/wave1-uploads.json`, `wave2-uploads.json` and `wave3-uploads.json`, and append a short hand-in to `status.md` listing the seven videos updated and anything you could not save. If the browser disconnects, stop and record which descriptions were saved.
