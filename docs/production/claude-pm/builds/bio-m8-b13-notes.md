# bio-m8-b13 (how prevention campaigns reduce disease): new build, 16 Nov 2026

Sheet: `bio-m8-b13-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-bio-m8-b13`, measured narration `docs/production/claude-pm/lessons/m8b13/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Continuity: b12 (built here) hands off to this lesson ("Next: How can prevention campaigns reduce disease?" with the sun-protection plate); this lesson opens on the design's own hook.

## Files created
- `src/explainer/lessons/bio-m8-b13/`: `common.ts`, `assets.ts` (10 plates, measured boxes), `parts.tsx` (CampaignFrame on b12's SlotStrip, Ladder, LineG, UVScale, ShareRow, DnaMini), `s1.tsx` (1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10a to 12), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b12/parts`, `bio-m8-b08/s1` (Lab), `bio-m8-b11/parts` (FrameStrip), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import and `config_m8b13` entry.

## Plates
All design-named plates exist and were inspected: sun, melanoma skin block, UV on skin, clipboard, shade sail, 1980s television (blank), outdoor work shirt and hat, sun protection, eye (tertiary example), walking shoes (attempt 2). None missing.

## Departures from the design (with reasons)
- Scene 2: the three stage cards show their plates from the first frame; labels write on cue (fill rule).
- Scene 5: the evidence ladder stands at the right; the left half places process, impact and outcome plates on a time axis (months, years, decades) so "takes decades" has a picture.
- Scene 6: the graph, legend and the advertising bars share the left half; all values are shape only (grey tags say so).
- Scene 7: latency is shown with two hand lines (older: damage before 1981; younger: grew up SunSmart, with the sun-protection plate) below the graph, not a bracket inside the graph, to keep text off the lines.
- Scenes 8 and 9: the ladder goes to a compact form (short heads) to give the content room. Scene 8 drops the graph thumbnail.
- Scene 9: per-group measure bars appear beside the dot rows on "measured separately".
- Attempts (root rule): card 1 carries the shade-sail plate and a shape-only "UV in school hours" bar pair with "40% less"; card 2 carries the shoes plate and its givens (knowledge up, activity unchanged, shifts, few footpaths). Nothing answer-bearing.
- Feedback 2 uses four rows (barrier, change 1, change 2, measure) in place of the small campaign frame; framed answer "change the conditions, then measure" added (g01 layout).
- Decision rule: the campaign frame and a horizontal ladder (process, impact, outcome, who was missed); a coded DNA strand on the Next chip.
- Key notes trimmed to five one-line bullets; memory card "Process, impact, outcome: what we did, what people did, what the disease did."

## Cue check
Every cue phrase and question underline resolves (config loads in Node; `marksCheck` passes).

## Check at playback speed
- Scene 1: dated axis chips and the falling line; the "?".
- Scene 4: action chips filling the strip on "Schools adopted", "councils built", "UV alerts", "solariums"; the "does" bar growing on "safe choice".
- Scene 5: rungs lighting with the time bars; the stretch on "takes decades".
- Scenes 6 and 7: line draws against the cue words; Scene 9: the average line and the teen row pulse.

## Grade and ink check
- Grade: PASS WITH WARNINGS (0 failures, 1 warning: dense key notes). Report: `out/explainer/Explainer-bio-m8-b13/grade/Explainer-bio-m8-b13-grade.md`.
- My grade per frame: all 16 A (scene 1 and scene 7 openings are the lightest: the dated axis and the empty graph frame before their cue lines draw).
- Ink check: 5 runs, all 5 the deliberate red crossed mistakes. Earlier real collisions (falling-line label under the melanoma tag; the latency stretch bar under "decades") fixed and re-checked.
