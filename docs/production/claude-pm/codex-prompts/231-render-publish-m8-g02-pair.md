# Brief 231: render and publish chem-m8-g02 and bio-m8-g02 (new Module 8 videos)

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 223 (same method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run after 230.

Claude built both on their brief 194 measured narration and graded each 16-frame sheet A (the g02 build commit). Sheets and notes are in `docs/production/claude-pm/builds/<id>-sheet.jpg` and `-notes.md`. They are new videos, not replacements.

| Lesson | Composition | Playlist |
|---|---|---|
| chem-m8-g02 | Explainer-chem-m8-g02 | Chemistry Module 8 |
| bio-m8-g02 | Explainer-bio-m8-g02 | Biology Module 8 |

**For each,** follow brief 223's steps:
1. Pre-render checks.
2. Render v1 and export captions.
3. Run the defect scan and compare the sheets, then do a normal-speed playback check of the items under "Check at playback" in each notes file. In particular:
   - chem-m8-g02: the crosses dropping in time with the table underlines, the 0.620 marker dropping to 0.142, the "× 5" arrow between the pipette and flask, and the average marker sliding to 0.007;
   - bio-m8-g02: the vector plate travelling into the retina zoom, 13 of the 20 dots tinting, and the module pills lighting in sequence. Check also whether the shared countdown ring briefly shows "11" before it starts (a known kit behaviour; report it with a timestamp, do not fix).
4. Back up the master to Drive.
5. Publish with the design's metadata (dotpoints verbatim, AI disclosure, captions) to the playlist in route order, and read the playlist back. Use `work/youtube-pending.json` if YouTube access is still broken.

**Hand-in:** to `status.md`, one line per video.
