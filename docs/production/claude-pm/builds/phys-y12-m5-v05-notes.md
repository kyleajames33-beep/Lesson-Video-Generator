# phys-y12-m5-v05 build notes (pre-build on provisional timing)

Build agent (Claude), 22 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v05.md` (Revision 3 visuals win). No MP4 rendered.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m5-v05/common.ts` imports `work/physics-prebuild/p-y12-m5-v05/lesson.json` on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. The provisional file was current (design hash matches), so it was not regenerated. Every change is keyed to a cue phrase with `cueFrame`. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m5-v05/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the grade check and the dense sweep.
- **Plates:** all present (launcher base and barrel, steel ball). Uniform scale only. None missing.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v05/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 6, `s2.tsx` 7 to 11, `s3.tsx` 12 to 17, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v05`, export `config_phys_y12_m5_v05`, PHYSICS, accent `#9c5a00`. Registry: import and entry after v03 (so after v02).
- Lesson parts: `CliffStage` (coded HSC-style cliff and hatched face, blue sea-level line with waves, dashed launch-level line, the painted launcher in a pit so its muzzle is at the cliff top; matches v04's handoff geometry: launch point (380, 500), sea at 860, 12 px per metre), `AnglePath` (30° orange, 45° green-grey, 60° dashed blue-grey, as v04), `RangeAngleGraph`, `pathT` (also draws the parabola for negative time).
- **Kit addition (new file):** `src/explainer/physics/projectile/height.ts`: `landRoots` (both roots of s_y = −h), `landDisc`, `rangeFrom` (R = u_x t from a height), `belowT` (time spent below the launch level), `bestAngle` (0.01° scan). Additive `tMin` option on `vgraph.tsx` (negative time axis). No existing kit behaviour changed.
- **Tests:** one new test in `scripts/explainer-sims.test.mjs` (20 m s^-1 from 30 m: 3.697 s, −1.656 s, 64.03 m; 45°: 4.307 s, 60.92 m; 60°: 4.808 s, 48.08 m; discriminants 688, 788, 888; time below the launch level 1.656, 1.421, 1.273 s equal to the negative roots; best angle 32.47°, 64.148 m; A1 1.010 s, 6.061 m; A2 1.642 s, −0.621 s). `npm run test:explainer-sims`: 74 of 74 pass.

## Opening and final frames

- **Opening:** v04 exports its handoff scene (`S14` in `phys-y12-m5-v04/s3.tsx`) but no final-frame component, so v05 imports that scene read-only and holds it on its last frame with Remotion's `Freeze` (`V04FinalFrame` in `s1.tsx`, frame `dur('handoff') - 1` from v04's own measured lesson). Nothing in v04 was edited. Scene 1 cross-fades (frames 10 to 34) into v05's own cliff stage at the same geometry: same cliff, launcher at 45°, three paths stopping just above the sea with "?", the boxed range formula with a "level ground only?" stamp, and a "last time, level ground" card in place of v04's card.
- **Final frame, exported as `V05FinalFrame` in `s3.tsx`** (`<HandoffBoard />`): heading "Landing below the launch level: where does it land?"; the cliff stage at 12 px per metre with the launcher at 30° and the steel ball at the muzzle; readout "u = 20 m s^-1, θ = 30°"; the 30° path solid orange to its landing mark; teal bracket "64.0 m" along the sea; navy "−30 m" bracket beside the cliff; a coded hatched wall 40 m out, top 20 m above the sea (no values shown); a teal bracket "x (known)" to the wall's base; a dashed line from the wall's top up to the path with a large "?"; the small ledger top right with the carry arrow pointing teal to blue; the hand line "this time: x known, so find t first"; the chip "Next: will a projectile clear a wall at a known horizontal position?".

## Departures from the design

- No camera push in scene 2: v04's actual handoff is already at 12 px per metre (the design assumed 7).
- Scene 3: the cliff stage is a wide strip across the lower right (not a top thumbnail), so the frame is not empty before the working arrives; the quadratic-formula chip and the a, b, c mapping sit top right; the coefficients are underlined in matching colours instead of pen arrows.
- Scene 4: the roots are labelled at the two crossings on the height against time graph; the long pen arrows from the branch boxes were removed after the sweep because they crossed the graph.
- Scene 5: a time line (−2 to 4 s) across the top shows "launch", "lands: 3.70 s" and "−1.66 s: before launch"; the ghost path is a thin dashed ink line (R2).
- Scene 7: the launcher (200 px wide, not 260) keeps its muzzle at the cliff top as the barrel turns, so its pit floor moves with it; at 260 px the base sank too far at 60°.
- Scene 8: the right-hand "extra time" blocks appear on "adds time"; the blue returning-v_y arrows on "slowly".
- Scene 9: the largest range is framed as "R = 64.1 m" with "at θ ≈ 32.5°" below it; the sweep runs 10° to 80°, then the barrel settles at the best angle.
- Scene 16: a three-step recap card fills the right column until "Next time".
- Mistakes are slate (R1); "only if" style stamps are ink or slate, never red.

## Timing-sensitive scenes (re-check after voicing)

- Scene 1: cross-fade from v04 at frames 10 to 34; the prediction card arrives 40 frames before "extra thirty"; chips on "thirty" (4th), "forty-five" (2nd), "sixty degrees" (2nd).
- Scene 2: the 30° ball replays from "Each ball reaches" to the launch-level crossing on "keeps falling", then lands 30 frames after "So the flight".
- Scene 7: barrel 30° → 45° over 50 frames from "At forty-five", the 45° flight to "out"; 45° → 60° over 40 frames from "At sixty", the 60° flight to "cliff". Short gaps would make the flights fast.
- Scene 9: the sweep runs 200 frames from "try many more" and must pass 32.5° before "degrees" (2nd) (the barrel first drops to 10° over 20 frames).
- Scene 16: the wall rises over 30 frames from "a wall"; the "?" and carry reversal on "clear it", near the end of the scene.
- Repeated phrases keyed to a later occurrence: hook "thirty" (4th), "forty-five" (2nd), "sixty degrees" (2nd); worked-thirty-time "seconds" (2nd); negative-root "seconds" (2nd); three-samples "degrees" (2nd). Check against the measured captions.

## Grade and sweep

**Grade checker** (`npm run grade:explainer -- Explainer-phys-y12-m5-v05`, report `out/explainer/Explainer-phys-y12-m5-v05/grade/Explainer-phys-y12-m5-v05-grade.md`): PASS WITH WARNINGS, 0 failures, 4 warnings, all sparse frames: the quadratic scene's opening (52%), the worked example before the roots (58%), the range-and-check opening before the check card fills (52%) and feedback 2's opening (58%). The first run failed on the quadratic scene (60% bare): fixed by turning the cliff thumbnail into a wide stage strip and moving the formula chip.

**Sheet:** `work/quality-audit/fixed/phys-y12-m5-v05-sheet.jpg` (the checker's 16 sheet frames, no stamps).

**Honest grade: A- on provisional timing.** The join from v04 is exact (v04's own scene frozen on its last frame), the painted launcher stands on the cliff in every stage scene, every number is read from `height.ts` or a field-motion run, and each step changes the set-up (cliff stage, working with the cliff strip, the height against time graph with two crossings, the negative-time ghost and time line, the rise-and-fall check, the angle slider, split range bars, the range against angle sweep, the memory card, the wall handoff). Soft spots are the four openings above, where the working arrives a few seconds after the scene starts. Re-check after voicing (timing list above).

**Dense sweep** (one still every 3 s plus every scene's first and last frame, two passes; montages read per scene). Fixed after pass 1: scene 2's stamp over the shortcuts card, the "last time's rule" tag and the crossing label over the paths, "extra fall" running into the ledger, "keeps falling" over the path; scene 3's method card text overflowing and the sparse first 8 s; scene 4's graph title over the axis label, the branch boxes running into the graph, and the pen arrows crossing it; scene 5's ghost label and "never happened" tag over the ghost path; scene 6's clock value overflowing its box and the "35.1 m" label touching the working; scene 7's sinking launcher; scene 8's small bars and late right column; scene 9's answer frame overflowing its card, the tag over the curve and the odd arc arrow; feedback 2's long row running into the picture and a small picture; the handoff's empty opening right column and the "?" on the level line. Pass 2: no text over text or plates, no clipped labels, no faint main visuals. Note: in the very first look pass (two stills per scene) one v05 batch ran outside the stills lock because a shell `&` in my queued command detached it; every later render held the lock. Motion still needs judging at playback speed once voiced.

## Measured timing switch (22 Nov 2026)

Build agent (Claude). Work done 22 to 23 November; no MP4 rendered, narration untouched. v04's measured import (used for the frozen opening) is unchanged.

- **Switch:** `common.ts` now imports `docs/production/claude-pm/lessons/p-y12-m5-v05/measured/lesson.json` (brief 259 take); the `PROVISIONAL` flag was removed. Nothing under `src/` imports `work/physics-prebuild` (grep is empty).
- **Cue check:** all 98 cue calls resolve; measured tokens match the provisional ones scene by scene, so the repeated-phrase cues (hook "thirty" #4, "forty-five" #2, "sixty degrees" #2; worked-thirty-time and negative-root "seconds" #2; three-samples "degrees" #2) land on the intended words. No fallbacks, no literal frame ranges.
- **What moved:** 17 scenes, 13,423 frames (7.5 min). Attempt 2 is now 1,179 frames (hold 879 to 1,179) and feedback 2 959. Shortcuts-fail replay 528 to 641, landing 713; 45° flight 144 to 306; 60° flight 371 to 562; sweep passes 32.5° at about frame 287, before "degrees" #2 (304).
- **Fixed:** (1) three-samples: with the measured take "So from a height" (380) comes before the sweep ends (400), so the keyframes ran backwards and the barrel would have jumped from 80° to about 56° in one frame (the provisional take had the same fault, 423 against 431). The settle now starts at `max("So from a height", sweep end + 10)`. (2) two-slips: the lower right column was bare for the first 11 s (checker failure, 65%); added a "THE CASE" card (20 m s^-1 at 30°, from a 30 m cliff, lands at sea level) that fades before the explanation arrives. (3) range-and-check: the hand tag "down 2.68 s" sat on the "35.1 m" label; moved below it, left of the path. (4) worked-thirty-time: the components card was an empty panel for 2.4 s; its two rows now show from the first frame and pulse on their cues. (5) feedback 1: the "t = 1.01 s" label sat on the path; moved left. (6) memory-aid motto shown from the first frame; key notes and memory card arrive in the first second.
- **Grade checker:** PASS WITH WARNINGS, 0 failures, 5 warnings: worked-thirty-time opening (52%), two-slips (54%), attempt 1 (60%) and attempt 2 (65%) question cards (question scenes), feedback 2 opening (58%). Report: `out/explainer/Explainer-phys-y12-m5-v05/grade/Explainer-phys-y12-m5-v05-grade.md`.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v05-sheet.jpg` (the checker's 16 frames, no stamps).
- **Dense sweep:** 180 stills, then 41 re-sweep stills of the four edited scenes and a close check of the range-and-check fix. No text over text or plates, no clipped labels, no faint main visuals; the opening is v04's frozen handoff.
- **Grade: A-.** Motion (the angle sweep especially) still needs judging at playback speed.

- **Root v1 playback fix (23 Nov):** why-thirty-wins: the hand note "45° rule: level ground only" moved from the right of the chip row (it ran off the frame) to just under it, at (1180, 252). Verified with a still at frame 5774.
