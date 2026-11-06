# Brief 229: render and publish chem-m8-p05, bio-m8-b06, bio-m8-b07 and bio-m8-b08 (new Module 8 videos)

Read `00-standing-rules.md`, `maths-visual-standard.md` (its build gate) and brief 223 (same method). Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run after 228.

Claude built all four on their brief 194 measured narration and graded each 16-frame sheet A (commits 216a57b4 and the b07/b08 build commit). Sheets and notes are in `docs/production/claude-pm/builds/<id>-sheet.jpg` and `-notes.md`. They are new videos, not replacements.

| Lesson | Composition | Playlist |
|---|---|---|
| chem-m8-p05 | Explainer-chem-m8-p05 | Chemistry Module 8 |
| bio-m8-b06 | Explainer-bio-m8-b06 | Biology Module 8 |
| bio-m8-b07 | Explainer-bio-m8-b07 | Biology Module 8 |
| bio-m8-b08 | Explainer-bio-m8-b08 | Biology Module 8 |

**For each,** follow brief 223's steps:
1. Pre-render checks.
2. Render v1 and export captions.
3. Run the defect scan and compare the sheets, then do a normal-speed playback check of the items under "Check at playback" in each notes file. In particular:
   - p05: the limewater turning milky, the dichromate orange-to-green change, and the risk-row glow;
   - b06: the chloride and water dots and the cilia stopping, and the iron bars falling;
   - b07: the copy-before-repair race, the COPD sequence, and the ticket deal;
   - b08: the "fewer transporters" cross-fade (it must read as fewer transporters, not a fault), the iron docking, and the collagen fraying.
4. Back up the master to Drive.
5. Publish with the design's metadata (dotpoints verbatim, AI disclosure, captions) to the playlist in route order, and read the playlist back. Use `work/youtube-pending.json` if YouTube access is still broken.

**Hand-in:** to `status.md`, one line per video.
