# Brief 228: render and publish chem-m8-p03, chem-m8-p04, bio-m8-g01 and bio-m8-g03 (new Module 8 videos)

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 223 (same method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run after 226.

Claude built all four on their brief 194 measured narration and graded each 16-frame sheet A (commit 47c08ac6). Sheets and notes are in `docs/production/claude-pm/builds/<id>-sheet.jpg` and `-notes.md`. They are new videos, not replacements.

| Lesson | Composition | Playlist |
|---|---|---|
| chem-m8-p03 | Explainer-chem-m8-p03 | Chemistry Module 8 |
| chem-m8-p04 | Explainer-chem-m8-p04 | Chemistry Module 8 |
| bio-m8-g01 | Explainer-bio-m8-g01 | Biology Module 8 |
| bio-m8-g03 | Explainer-bio-m8-g03 | Biology Module 8 |

**For each,** follow brief 223's steps:
1. Pre-render checks.
2. Render v1 and export captions.
3. Run the defect scan and compare the sheets, then do a normal-speed playback check of the items under "Check at playback" in each notes file. In particular:
   - p03: the risk-row glow following the narration, and the wire loop against the flame;
   - p04: the readout falling from 1.52 to 0.845, and the fingerprint beam;
   - g01: the rate bars, and the graph's TAILS items landing on cue;
   - g03: the loop's nerve-impulse dots and the cut link stopping the pulses.
4. Back up the master to Drive.
5. Publish with the design's metadata (dotpoints verbatim, AI disclosure, captions) to the playlist in route order, and read the playlist back. Use `work/youtube-pending.json` if YouTube access is still broken.

**Hand-in:** to `status.md`, one line per video.
