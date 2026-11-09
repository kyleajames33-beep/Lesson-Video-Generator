# math-a12-d02 (differentiating aˣ, savings coin jar): Revision 4 build on the maths studio kit, 10 Nov 2026

Sheet: `math-a12-d02-sheet.jpg` (16 evenly spaced stills over 16,215 frames at (i − 0.5)/16; key notes held at 1,350 frames). Rendered at concurrency 1 under the stills lock, three sheet rounds.
Builder's grade: A− overall after root's review round (10 Nov). 14 frames A; frames 5 (ratio panel with one marker) and 15 (handoff left side) are A− (see "Grade per frame"). Not yet watched at playback speed.

## Files
Created in `src/explainer/lessons/math-a12-d02/`:
- `common.ts`: measured lesson lookups (`sc`, `cue`, `dur`, `hold`, LN2 to LN4).
- `parts.tsx`: plate specs (`D02_PLATES`: jar, full jar, coin; `JAR_INTERIOR` read from the plates), `CoinJar` (kit `ContainerFill` with the jar cross-fade and coin drops), `JarThumb` (live account card: balance, growth rate, growth per dollar), `DecadeClock`, `Legend`, `Tick`, `RecallChip`, `CurveLabel`, `WorkingSpace`, `SlotChip` (d01's "2ˣ = e^(? × x)" chip, fills with ln 2), `RatioPanel` (ratio against base on y = ln a), `simRows`, `Ln`, `Rule`.
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 12), `s4.tsx` (13 to 16), `scenes.tsx`, `assets.ts`, `config.ts`.
- Registry: `config_math_a12_d02` added to `src/explainer/registry.ts` (one import, one list entry).

Kit imported read-only: `FunctionSimulator` with `EXP_BASE_FAMILY` (base sweeps through 1 with `logParams`), held-stop secant with an animated zoom factor, `ParameterSlider` with the excluded mark (scene 8: "a ≤ 0 not allowed"), `ContainerFill`, `QuestionCard` with `QuestionAxes` pictures, `GivensStrip`, `WorkingRows`, `MistakeCard`, `KeyNotesBullets`.

## Plates
All used plates exist: `ma12-coin-jar-v1`, `ma12-coin-jar-full-v1`, `ma12-coin-v1` (brief 235). Drawn at native aspect. The jar interior (file px 205..845 across, coin surface 880 part-full to 420 full) was measured by eye from the plates; the manifest gives no interior anchor. The optional `biology/y11-coins-v1` was not used.

## Departures from the design (with reasons)
- Scene 1: layout keeps d01's final graph and chip positions (graph 930 × 640 at (900, 168), chip at (980, 838)); the window is the design's x −2..3 (d01's was −2..2), so the curves do not sit at identical pixels. The label card adds "x in decades, y in $ thousands". "why a logarithm?" writes on "logarithm" (1197) rather than "exponential" (1300, 31 frames before the cut). The decade clock runs 0 → 2 decades from "savings" over 11 s, then holds (coins stop dropping when the clock stops).
- Scene 2: the "Last video" recall chip is on screen from the first frame (fill), not on "Whenever". 2ˣ is a thin grey line labelled "thin line: 2ˣ, measured next".
- Scene 3: a "Secant slopes" history card keeps the three held values (0.828, 0.718, 0.696) and adds "tangent 0.693" on "three". The zoom factor is driven from the secant gap (about ×1 to ×60) so P and Q stay distinct in the inset.
- Scene 4: the sweep stops at e (held from "one" to the end) instead of finishing at 3; the scene ends 25 frames after "e", so the 3ˣ squash tag was dropped. The thumbnail reads "an account: × a a decade" and follows the base. The table shows "? : 1.000" from "Somewhere", rewritten "e" on "e".
- Scene 5: a "base: gradient ÷ height" card under the ratio panel fills in as each marker drops, then gives way to the result card. The blue arrow from the calculator chip to the thumbnail is replaced by a tag "= the account's growth per dollar" plus a glow on the thumbnail's per-dollar row (the arrow would cross the main graph).
- Scene 6: the ratio-panel thumbnail is dropped (it collided with the legend); the result line "gradient of aˣ = (ln a) × height" sits at the lower left and glows on "height". The point, tangent and readout board show from the first frame on 2ˣ at (1, 2) (fill), unstretch on "stretched", and the triangle arrives on "Watch". "Write 2 as a power of e." is a hand line until row 1.
- Scene 7: a "What we found for base 2" card with a two-step plan fills the working area until row 1. Rows split "(ln a) e^(x ln a)" (on "Put the power back") from "= (ln a)aˣ" (on "again"); the green rule frame writes on "So the derivative". Rows 66 px current, 44 px earlier.
- Scene 9: the account card is on screen from the start at "after 0 years" and runs to 30 years on "account" → "decade"; the small graph check is on screen from the start with "slope here?"; the crossed card sits at the lower left (caption "missing ln 2", compare "8 is eˣ's slope at height 8"), because a full-width card would cover the graph.
- Scene 10: the formula line is on screen from the start and glows on "base"; three numbered keyed lines ("aˣ is eˣ scaled sideways (a ≠ 1)", "ln a sets the scale: growth per dollar", "aˣ leaves the y-axis with slope ln a"); "× 1.44 sideways" arrows on "scaled". Main line written as two lines on "copy".
- Scene 12: the crossed card arrives on "If you wrote" (468), not "curve" (738, 47 frames before the end).
- Scene 14: a rule row and a three-step plan card fill the frame until the sign chips.
- Scene 15: the jar thumbnail fades just after "Next"; the left side holds "This video: d/dx(aˣ) = (ln a)aˣ" and the "Next: differentiating ln x" chip. Final-frame geometry (`HANDOFF_PANEL`: 1010 × 720 at (820, 200)) is what d03 opens on.
- Scene 16: five bullets at 38 px in the left 58%, framed card on the right (decision 58).

## Cue check
All 112 `cue()` phrases resolve against `lessons/math-a12-d02/measured/lesson.json` (script check, with every resolved frame listed and checked against the intended occurrence; two wrong occurrences were fixed: scene 4 "one" is the 6th, scene 9 "At x equals" the 2nd). Countdowns use the measured holds (attempt 1: 318 to 618; attempt 2: 329 to 629), ring full from "Pause here to answer.".

## Kit issues found (not edited)
- `ContainerFill` drops spawn at `interior top − 2.2 × size`, which on a lidded jar falls through the lid and can reach the scene heading; worked round by placing the jar lower. A `spawnY` option would help.
- `ParameterSlider` has no way to replace the badge text (wanted "a = e"); a hand circle on the badge is used instead.
- `HandText` never wraps, so `MistakeCard` captions must fit one line; long captions need a narrower wording.
- Not a bug: `FunctionSimulator` `zoom.factor` can be animated simply by passing a per-frame value (used in scene 3), which covers decision 27's "animated zoom factor".

## Typecheck
Scoped tsconfig (this lesson's config and types, `noUnusedLocals`) in the scratchpad `build-d02`: clean (the only error is an unused import in `src/explainer/kit.tsx`, not this lesson).

## Grade per frame (final sheet)
1 hook (jar filling, coins dropping, graph, clock) A; 2 recall A; 3 secant with zoom and history A; 4 base slider A; 5 ratio panel, one marker so far: B+/A borderline (panel still sparse); 6 stretch opening A−; 7 proof opening A; 8 proof rows A; 9 base ½ A; 10 worked example A; 11 memory card at "Except": B+ (card interior right still sparse until later lines); 12 attempt 1 A; 13 feedback 1 A; 14 feedback 2 A; 15 handoff: A− (left side light by design for the d03 join); 16 key notes A.

## Check at playback speed
- Scene 1: coin drops speeding up with the clock; the jar cross-fade (part-full and full plates blend at mid levels, which reads slightly ghosted in stills).
- Scene 3: secant held stops and the zoom factor jump; the point riding to x = 1 and 2.
- Scene 4: the base sweep 2 → e landing on the dashed eˣ (violet flash), ratio reading 1.000.
- Scene 6: unstretch on "stretched", then the stretch with the triangle carried; run label 1 → 1.44.
- Scene 8: sweep through a = 1 (flat line) to ½; the mirror fold of the dashed 2ˣ.
- Scene 15: blue to ink, "base a" to "x" switch on "Next".

## Root review round (10 Nov)
1. Attempts (scenes 11 and 13): the empty working box is gone. A lesson `AttemptStage` holds the full question card (54 px), a "Given" card (44 px, no answer colour), a large answer-free axes picture (720 × 380) and the full countdown ring from "Pause here to answer." until the kit countdown starts (`FullRing`). The sampled frame (scene 11, local 178) is before "Pause here", so the ring is correctly not yet shown there; frame 11,900 confirms the ring.
2. Scene 6: the "Year 11: e^(ln a) = a" line is 44 px from the first frame, and a solid eˣ (dashed) and 2ˣ graph with "stretched × 1.44" arrows fills the left until row 1.
3. Scene 10: no faint placeholders; keyed lines and the jar icon appear solid on their cues; the "× 1.44 sideways" arrows come in just after "Except".
4. Text: jar-card labels 30 px, units 28 px, values 52 px (labels shortened to "balance $k", "growth rate $k per decade", "growth per dollar per decade"; scene 1 card defines "$ thousands ($k)"); clock labels 30 px; legend 28 px. Kit axis titles are 30 px (unchanged, kit file).
5. "× 2 every decade" is 46 px; the "?" chips render at 41 px and above.
