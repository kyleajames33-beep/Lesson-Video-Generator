# Brief 199: re-render and replace four public Chemistry videos with render defects (and check chem-m7-p06)

Read `00-standing-rules.md` and brief 196 first. Do not spawn sub-agents. No design, narration or scene-code edits, no new speech, no commits. One render at a time. Run this straight after brief 196, using its diagnosis and its pre-render asset and font guard.

**Problem (Claude, 6 November, audit batch 3).** These public videos have the same fault as bio-m7-b06 and b10: part-way through, the text falls back to a Times-like serif font, and some images show as broken-image icons. Contact sheets are in `work/quality-audit/sheets/<id>.jpg`; frame numbers count 1 to 16 across rows.

| id | link | fault |
|---|---|---|
| chem-m6-g03 | https://youtu.be/Rl7RUILbyHY | serif text in frames 11 to 15; broken images in 11 to 14 |
| chem-m7-c10 | https://youtu.be/_y2Ow9e-0sI | hand font fails in frames 13 to 15 |
| chem-m7-p05 | https://youtu.be/WjCfarquFJ8 | serif text in frames 5 to 15; broken images in 9, 10, 11, 13 and 14 |
| chem-m8-c01 | https://youtu.be/ahwV_6MQqHU | broken burette and flask image in frame 8; serif text in 9 to 15 |

If brief 196's same-session sweep already covered any of these, do not repeat that work; report it.

**For each video,** follow brief 196's steps 1 to 3: find and restore the missing assets, render v2 with `scripts/render-explainer.mjs` on the existing measured lesson and audio, export captions, then run the 16-frame sheet and the automated scan. Then do its YouTube steps (owner approved, 6 November): unlist v1 first, publish v2 with v1's metadata, swap v2 into the playlist position, read the playlist back and record the new links.

**Also check `chem-m7-p06`** (https://youtu.be/3gQQ-hasiw8). Frames 5 to 7 show only a title, and frame 8's results table is nearly empty. Find out whether images failed to load silently, without the broken icon. If so, treat it like the four above. If not, report it as a design or build gap for Claude; do not re-render it.

**Also fix one record.** In the repo records, chem-m5-c10 has two links (https://youtu.be/NJjEgjilgAE and https://youtu.be/PL415_P6F6w), and one of them may be chem-m5-c05's. Read both titles on YouTube and record which link belongs to which video.

**Hand-in:** to `status.md`, for each video: the missing assets and their cause, the v2 path, the scan result, and the new link with the playlist readback. Then the p06 verdict and the c10/c05 link resolution.
