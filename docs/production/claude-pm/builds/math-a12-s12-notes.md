# math-a12-s12 build notes (Revision 5 design, built on the measured narration)

Builder: Claude build agent, 17 November 2026. Not committed. No MP4 rendered. Sheet: `docs/production/claude-pm/builds/math-a12-s12-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,451 frames (448 s), 15 scenes; the notes scene is 1,350 frames (45 s). Header "MATHEMATICS ADVANCED · PROBABILITY".

## Files
- `src/explainer/lessons/math-a12-s12/`: `common.ts`, `cuemap.ts` (122 cue phrases, all resolved at load), `config.ts`, `assets.ts`, `scenes.tsx` (re-exports `S12FinalFrame`), `parts.tsx`, `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11 to 15).
- `parts.tsx` re-exports s11's parts (read-only), `S11FinalFrame` and `BottleHandoff`. Load-time number checks: the 200 stored z values (Python 3.14 `random.Random(1212)`, `gauss(0, 1)`, 4 dp, reproduced: short 19, 6, 2, 2 at μ = 500, 504, 508, 508.64); tails 0.1056, 0.0401, 0.0122, 0.0099; table 0.9898, 0.9901, 0.9949, 0.9951, 0.9938, 0.9798, 0.9803, 0.9207, 0.9599; 490 + 2.33 × 8 = 508.64, exact boundary 508.61078 (508.61 just over 1%); bolts 4.55% and 0.27%; cereal 1.9417, σ = 1.9 tail 0.00425, σ = 2 tail 0.0062, 380.15 tail 0.00501 (just short), 380.16 under 0.005; A1 1006.15 and 993.85; A2 σ = 4. Rigs: `Machine` (the painted filling head over the kit `FillDial`, its pointer on the plate's measured dial, PET bottle sprites filled to μ + 8z against the 490 line), `runShown`, `shortCount`, `TableRow` (one-row table excerpt with chosen columns and highlights).
- `src/explainer/registry.ts`: one import and one entry after math-a12-s11 (already in HEAD via root's commit 714cdd30; the folder is untracked).

## Plates (all exist; never stretched; alpha > 32 boxes measured)
- `maths/ma12-filling-head-v1.png` (1024 × 1536, box [141, 193, 883, 1362]; dial and nozzle anchors from its sidecar), `maths/ma12-cereal-box-v1.png` (1060 × 1484, box [190, 230, 871, 1274]), `maths/ma12-hex-bolt-v1.png` (2048 × 768, box [348, 161, 1701, 617]), reused `chemistry/m7-pet-bottle-v1.png`. No fallback needed.

## Joins
- Frame 0 is s11's final frame exactly (`S11FinalFrame`), with "until now: μ, σ → probability" and "now: the probability is fixed" written under it before "dial"; on "The filling machine" it cross-fades to the machine, the conveyor and the bell at μ = 500.
- Final frame `S12FinalFrame` (scene 14; scene 15 cross-fades back): the fills' bell at 508.64 (marked "μ = 508.64") with its 1% tail at 490, the bottle with its 490 line, the filling head with a coded dial pointer and "dial: 508.64", three tool chips "68, 95, 99.7", "z = (x − μ)/σ", "area → z → μ or σ", chip "Later: mixed practice". No g01 lesson exists yet in the explainer to compare against; later practice should open on this component.

## Departures from the design (with reasons)
- **Scene 2 order:** the narration first turns the dial up, then returns to μ = 500 for the 200-bottle run, so the dial goes 500 → 508 on "Turn the dial", back to 500 for "Fill two hundred bottles" (19 short, pulsing on "come up short"), then 500 → 508.61 on "Keep turning"; the 504 and 508 stops show as grey lines with their counted shorts and tails, not separate conveyor runs.
- **Scene 3:** kit `ZTable` rows 2.0 to 2.4, columns .00 to .03, with its reverse scan to 0.9901; the gaps 0.0002 and 0.0001 are grey rows.
- **Scene 6:** the σ slider is a live readout (σ and "outside the limits") rather than a drawn slider; the squeeze runs on "Shrinking sigma".
- **Scene 7:** a one-row table excerpt (row 2.5, columns .06 to .09) instead of the full kit table (the kit table's cells were too narrow at 34 px); the pass and fail bells replace the z rows on "Round up to two".
- **Scene 8:** both panels' tails are live exact values to 3 decimals in percent (so 380.15 shows no tick and 380.16 does), not table-rounded.
- **Scene 9:** the badge is the bottle and the filling head with "dial: 508.64".
- **Scene 11:** the feedback bell (at 1006.15) is drawn from the start with "μ = ?" until "grams" (an empty plot failed the fill check).

## Cue check
All 122 phrases resolve. Repeated phrases named: "then the mean" (1), "nine nine" (1 in scene 3, 2 in scene 5), "zero one" (1), "minus two point three three" (1), "all over eight" (1), "six four" (1), "millilitres" (1), "below the mean" (1), "are rejected" (1), "Three seventy-five minus" (1), "so mu is" (1), "one six grams" (1), "six point one five" (1), "one five grams" (1), "one point seven five" (1), "can't be negative" (1), "or sigma" (1).

## Live readouts and simulations
- Scenes 1, 2, 5: the dial turning μ with 200 simulated bottles on the conveyor (live "short: n of N"), the bell sliding with its live tail and the σ ruler from 490 to μ.
- Scene 4: the bell sliding to 508.64 with the ruler reading 2.33σ = 18.64 mL.
- Scene 6: σ 0.5 → 1/3 with the outside readout falling from 4.55% to 0.27%.
- Scene 8: the μ lever and the σ lever with live tails.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-s12` (final): **PASS WITH WARNINGS (0 failures, 3 warnings)**: sparse frames at 52 to 58% bare in scenes 3, 7 and 11. Earlier run: 5 failures (scenes 6 and 7 had no 44 px line; scenes 7 and 11 opened mostly empty), fixed with 44 px task strips, a "the unknown spread" card in scene 7 and the scene 11 bell from the start; one duplicate axis label removed in scene 13. After the final grade, scene 5's rows moved 30 px right, clear of the conveyor (no effect on any measured rule).

## Ink check (line through text)
Not run (stills lock held for root's renders). Fixed by eye: the machine under the scene heading (machine moved right), the target chip on the scene 3 table, the scene 4 ruler label on the axis label, the mini-bell labels over their curves, the 380 tick under the μ triangle.

## Check at playback speed
- Scene 1: the cross-fade on "The filling machine" and the first conveyor run.
- Scene 2: the dial's out-and-back against the narration and the 19 red bottles pulsing on "come up short".
- Scene 3: the mirror on "mirrors", the 0.99 region on "percent to the left", the scan on "nine nine", the flip to −2.33 on "Four ninety is below".
- Scene 5: the nudge right and left on "the tail shrinks".
- Scene 6: the squeeze on "Shrinking sigma" with the 3σ marks meeting 49 and 51.
- Scene 8: the μ slide to 380.16 by "grams" and the σ squeeze on "Either move".

## Honest grade
**A** by the brief's rules, with soft spots root may weigh: the filling head's painted dial is covered by the coded dial, whose μ label sits on the metal; scene 7 uses a one-row table excerpt; three sheet frames sit in the 52 to 58% sparse band.
