# phys-y12-m5-v03 build notes (pre-build on provisional timing)

Build agent (Claude), 22 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m5-v03.md` (Revision 3 visuals win). No MP4 rendered.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m5-v03/common.ts` imports `work/physics-prebuild/p-y12-m5-v03/lesson.json` on one marked line (`// PROVISIONAL TIMING: switch to measured/lesson.json when voiced`) and exports `PROVISIONAL = true`. The provisional file was current (its `sourceDesignSha256` matches the design), so it was not regenerated. Every change is keyed to a cue phrase with `cueFrame`. When the measured take lands at `docs/production/claude-pm/lessons/p-y12-m5-v03/measured/lesson.json`, change that import, set `PROVISIONAL = false`, then re-run the grade check and the dense sweep.
- **Plates:** all present (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, `phys-y11-steel-ball-v1.png`). Uniform scale only. None missing.

## Files

- Lesson: `src/explainer/lessons/phys-y12-m5-v03/` (`common.ts`, `parts.tsx`, `s1.tsx` scenes 1 to 5, `s2.tsx` 6 to 10, `s3.tsx` 11 to 16, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m5-v03`, export `config_phys_y12_m5_v03`, PHYSICS, accent `#9c5a00`. Registry: import and entry after v02.
- Lesson parts: `VelTri` (velocity triangle pointing up for launch or down for landing), `Ring`, `Stamp` (ink condition stamp, not a mistake mark), `pathT`, `ptT`. v05 imports `Ring`, `Stamp` read-only.
- **Kit addition (new file):** `src/explainer/physics/projectile/vgraph.tsx`: `VGraph` and `vgGeom`, a coded velocity (or any quantity) against time graph with lines as functions of time, a live dot, shaded areas and an optional negative time axis (`tMin`, added for v05). Nothing in v01, v02 or v04 uses it, and no existing kit file changed. The old pilot `VelocityTimeGraph` was not used because its colours and model (g = 10) do not match the colour key.
- No new physics functions, so no new tests for v03 (v05's are below). `npm run test:explainer-sims`: 74 of 74 pass.

## Physics

All numbers come from `flight.ts` with g = 9.8: u_x 16.07, u_y 19.15, t_up 1.954 s, T 3.908 s, H 18.71 m, R 62.81 m; 40°: T 3.28 s; 50 m s^-1: T 7.82 s, H 74.9 m; scene 5's ball, graph dot and readouts read one field-motion run (`RUN`), so v_y passes zero exactly at the peak; attempts 14.0 at 45° (5.00 m, 2.02 s; crossed 10.0 m, 2.86 s) and 19.6 at 30° (1.00 s, 2.00 s, 17.0 and 9.80 down).

## Opening and final frames

- Opens on `V02FinalFrame` (imported from v02), cross-fading over frames 10 to 34 into an identical stage with the new heading; the v02 chip leaves, a launch card and the ledger stay.
- **Final frame, exported as `V03FinalFrame` in `s3.tsx`** (`<HandoffBoard deg={40} t40={T40} />`): heading "What sets the height, the flight time and the landing velocity?"; the launcher in its pit at 40° on level ground (15 px per metre, launch point (170, 830)); the 25 m s^-1, 50° path solid orange labelled "50°"; the 40° path dashed blue-grey (`#566c82`) labelled "40°"; the steel ball at the shared landing mark 62.8 m out, ringed in ink with a large hand "?"; a teal range bracket "62.8 m" along the ground; the small ledger top right (teal "s_x = u_x T", blue "T = 2u_y ÷ g", one clock); a readout card "flight times, 25 m s^-1: 50° 3.91 s, 40° 3.28 s"; the hand tags "lower" and "sooner"; the chip "Next: why do 40° and 50° land together?". (v04 is already published and opens on its own frame; this export is for any later rebuild.)

## Departures from the design

- Scene 1: a "Still to find" card (H, T, v) and a "Landing speed vs 25 m s^-1?" prompt with the three chips fill the frame; during "we followed it to the top" the ball replays its rise (it starts at the peak, matching v02's frame).
- Scene 2: a "which equation?" card lists the three constant-acceleration equations and marks the one without t, which shows the choice the narration explains.
- Scene 3: a short "Plan" card (u_y, square, divide by 2g) fills the right from the first frame.
- Scene 4: a definition card "Flight time T: the whole time in the air" fills the frame before the working starts.
- Scene 5: a rate card ("up: 19.15 → 0", "down: 0 → −19.15", "same change, same rate: same time") carries the causal sentence; the flight clock runs launch → peak on "Then it gives" → landing on "climb", so the graph dot and v_y reach zero together.
- Scene 6: the launch and landing triangles sit side by side at the same scale; the flip runs from "Only the direction" (the design's "above" is the last word of the scene). The landing triangle is outlined dashed until its sides arrive.
- Scene 8: the stage pulls back from 10 to 5 px per metre as the slider starts, so the 25 m s^-1 path is not tiny for the first 15 s. The "two effects" graph shows both v_y lines with the rising triangles shaded.
- Scene 9: a 20 m cliff (screen only, computed: fall 2.81 s, landing 31.9 m s^-1) shows both shortcuts failing; the cliff stays to the end of the scene instead of fading back (scene 10 opens on level ground). "Only if" stamps are ink, not red (root rule R1).
- Scene 15: a recap card and an 18.7 m height bracket fill the opening summary and leave on "Now launch", so the final frame matches the design.
- All crossings and mistake tags are slate (R1); answers in dark-ink frames.

## Timing-sensitive scenes (re-check after voicing)

- Scene 1: cross-fade from v02 at frames 10 to 34; the rise replay takes 40 frames from "we followed" and must finish before "top"; prediction chips arrive on "faster", "slower", "same speed".
- Scene 5: the flight clock is piecewise linear between "Gravity takes", "Then it gives" and "climb". If the voiced gap between the first two is short, the rise will look fast.
- Scene 6: the flip runs 40 frames from "Only the direction".
- Scene 7: the flight runs from "The ball is in the air" to "lands about"; the range lands on "sixty-two".
- Scene 8: the slider runs 75 frames from "twice as fast"; the stage pull-back runs in the 40 frames before it.
- Scene 9: the cliff opens over 40 frames from "cliff".
- Scene 15: barrel turn 30 frames from "forty degrees"; the 40° flight runs from "It doesn't" to "spot", with its speed computed from that gap.
- Repeated phrases keyed to a later occurrence: worked-height "metres" (2nd), twice-the-climb "seconds" (2nd), what-controls-what "squared" (3rd), feedback-1 "metres" (2nd). Check these against the measured captions.

## Grade and sweep

**Grade checker** (`npm run grade:explainer -- Explainer-phys-y12-m5-v03`, report `out/explainer/Explainer-phys-y12-m5-v03/grade/Explainer-phys-y12-m5-v03-grade.md`): PASS WITH WARNINGS, 0 failures, 4 warnings, all sparse frames (52 to 58% bare paper) in the two attempt cards and the first seconds of both feedback scenes. The first run failed on feedback 2 (65% bare): fixed by enlarging its mirrored path and landing triangle and showing the triangle from the first frame; the attempt pictures were also enlarged.

**Sheet:** `work/quality-audit/fixed/phys-y12-m5-v03-sheet.jpg` (the checker's 16 sheet frames, no stamps).

**Honest grade: A- on provisional timing.** Every teaching scene has the painted launcher and ball, a coded diagram or a live readout read from the field-motion run, a new visual idea at least every minute (stage, equation menu, calculation layout, factorising with the stage strip, coupled velocity graph, triangle flip, clock carry, speed slider with the v_y graph, cliff, mirror fold), framed answers and slate crossed slips, five short notes with the framed memory card. Soft spots: the attempt and feedback openings (52 to 58% bare), the scene 2 vertical column card is mostly empty in its first 9 s, and scene 6's left half is light (path, ball, clock card). Re-check after voicing (timing list above).

**Dense sweep** (one still every 3 s plus every scene's first and last frame, 178 stills, two passes; montages read per scene). Fixed after pass 1: hook prediction text wrapping into its chips; "how high?" and "how fast?" tags over the paths; a static first 15 s in the hook (now the ledger rows box on "components" and the ball replays its rise); scene 2's empty blue column (goal line, larger rows, larger stage) and its "u_x: not in H" note over the path; scene 3's "2g" and "above the launch point" tags away from their marks or over the answer tick; scene 4's empty first 8 s (definition card); the graph title colliding with the axis label (kit title moved right; scene 8's title dropped); scene 5's v_y arrow drawn into the ground after landing and a v_y ring that stayed on; scene 6's "16.1" label under the "at landing" title, rows under the triangle label, and the "same size, flipped" tag over the numbers; scene 7's clock value overflowing its box; scene 8's tiny opening stage; scene 9's "only if" stamps over the chip text and its empty first 10 s (level-ground readout card that switches to the cliff numbers); scene 10's tags over the path and arrows; feedback 2's path running off the right edge and its label collision. Pass 2 found no text over text or plates, no clipped labels, no faint main visuals; cue occurrences as listed above. Motion still needs judging at playback speed once voiced.

## Measured timing switch (22 Nov 2026)

Build agent (Claude). Work done 22 to 23 November; no MP4 rendered, narration untouched.

- **Switch:** `common.ts` now imports `docs/production/claude-pm/lessons/p-y12-m5-v03/measured/lesson.json` (brief 259 take); the `PROVISIONAL` flag was removed. Nothing under `src/` imports `work/physics-prebuild` (grep is empty).
- **Cue check:** all 124 cue calls resolve; measured tokens match the provisional ones scene by scene, so the repeated-phrase cues (worked-height "metres" #2, twice-the-climb "seconds" #2, what-controls-what "squared" #3, feedback-1 "metres" #2) land on the intended words. No fallbacks, no literal frame ranges.
- **What moved:** 16 scenes, 13,247 frames (7.4 min). Twice-the-climb clock: rise 133 to 328 (6.5 s), fall to 471; landing flip from 616 (40 frames, ends before 792); range flight 85 to 344, range on "sixty-two" at 374; speed slider 536 to 611 with the pull-back from 496; cliff from 283; handoff barrel turn 393 to 423, 40° flight 473 to 619.
- **Fixed:** memory-aid motto shown from the first frame with a pulse on "The way down"; key notes and memory card arrive in the first second. No timing defects were found.
- **Grade checker:** PASS WITH WARNINGS, 0 failures, 4 warnings: attempt 1 (56%), feedback 1 (54%), attempt 2 (58%) and feedback 2 (52%) sampled in their first seconds. Report: `out/explainer/Explainer-phys-y12-m5-v03/grade/Explainer-phys-y12-m5-v03-grade.md`.
- **Sheet:** `work/quality-audit/fixed/phys-y12-m5-v03-sheet.jpg` (the checker's 16 frames, no stamps).
- **Dense sweep:** 178 stills, montaged per scene and read. No text over text or plates, no clipped labels, no faint main visuals; the opening is `V02FinalFrame`. Soft spot: the flight-time scene's middle left is light for its first 10 s.
- **Grade: A-.** Motion still needs judging at playback speed.

- **Root v1 playback fixes (23 Nov):** (1) condition scene: both lines of the level-ground / cliff card now wrap inside the card (the last line ran off the frame). (2) Handoff chip "Next: why do 40° and 50° land together?" now has a taller line and bottom padding so both lines sit inside its border (also in `V03FinalFrame`). Verified with full-scale stills at frames 6620, 11800 and 11885.
