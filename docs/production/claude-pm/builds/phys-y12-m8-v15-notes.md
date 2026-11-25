# phys-y12-m8-v15 build notes (pre-build on provisional timing)

Build agent (Claude), 26 November 2026. Design: `docs/production/claude-pm/lessons/phys-y12-m8-v15.md` (Revision 3 with the 21 November root fix; the last revision wins). No MP4 rendered. Narration untouched.

## Status

- **Timing is provisional.** `src/explainer/lessons/phys-y12-m8-v15/common.ts` imports `work/physics-prebuild/p-y12-m8-v15/lesson.json` (unchanged `make-provisional.py`; marked line), `PROVISIONAL = true`. Every cue resolves (cue check: 0 problems); late cues capped with room for their offsets. Switch to `docs/production/claude-pm/lessons/p-y12-m8-v15/measured/lesson.json` when voiced.
- **Narration check: no mismatch** (prepared `lesson.json`, brief 259 audit and current design identical: 5,636 characters, 18 scenes).
- **Holds.** The design names a 2 s memory-aid hold, attempts 10 s, feedback 1 s, handoff 2 s and notes 45 s; all are in the prepared timing. No hook prediction hold. **Missing holds: none.**
- **Opening frame:** v14's `M8V14FinalFrame` at frame 0; from frame 1 the chip fades into the heading, one more nucleus flashes on "decays at a moment nobody can predict", the painted source and Geiger counter slide in between the grid and the graph with a random count, the dashed halving sketch becomes a solid curve with teal guides, and on "a gram or a tonne" two curves halve at the same times.
- **Plates:** y12p-counter-tray-v1 and the red and yellow counters (scene 3, counters at 34 px), y12p-sealed-source-v1 and y12p-geiger-counter-v1 (scenes 1 and 8), phys-y11-digital-timer-v1 (attempt 2, coded "30:00" in its display). **Plate requests: none.**

## Files

- Lesson: `src/explainer/lessons/phys-y12-m8-v15/` (`common.ts`, `parts.tsx`, `s1.tsx` 1 to 6, `s2.tsx` 7 to 12, `s3.tsx` 13 to 18, `scenes.tsx`, `assets.ts`, `config.ts`). Config `Explainer-phys-y12-m8-v15`, topic "HALF-LIFE". Registry: after m8-v14.
- Shared kit used: `src/explainer/physics/atom/decay.tsx` (new in this wave; `decayRun`, `decayFrames`, `remainingAt` and `NucleiGrid` from the particle-box engine; `clickRun`; `Balance`; the tray and counter plate specs). Lesson parts: `CounterImg`, formula pieces with real sub- and superscripts (`ExpLaw`, `LamLaw`), graph boxes (`Axes`, `curveD`).
- Seeds (found by script against the engines, recorded in `common.ts`): counter throws 2, 1 and 11 give 97, 54 and 22 red-up counters, so the run reads 200, 103, 49, 27; runs of 20 nuclei with seeds 15, 2 and 1 leave 7, 10 and 13 after one half-life.

## Stages built

1 v14's grid and click trace; a flash; the source and counter with random clicks; the halving sketch made solid; two curves with one t½. 2 one nucleus; an age readout from seconds racing to 10⁹ years past a fixed "chance of decay per moment" dial; "wears out with age" crossed; temperature, pressure and chemistry crossed with "λ unchanged"; a "?" circling; the framed λ definition with "short time Δt: chance ≈ λΔt". 3 the painted tray with 200 counters (chance engine, p = ½); red-up counters lifting away on "remove every one"; "chance per throw = ½, so one throw = one half-life" and "a chance per throw, not λ itself"; a marker hovering over counters; throws 2 and 3 with live readouts and a tally (expected 100, 50, 25); a bar chart with the halving curve; "about half, not always exactly half". 4 the staircase on graph paper (1, ½, ¼, ⅛, 1/16) under the curve; "t½: half-life"; brackets to the bar before each; "two half-lives = all gone" crossed ("¼ left, not 0"); "expected number: never reaches 0"; a log half-life ruler (polonium-214 to uranium-238, labelled "log scale"). 5 a grid of nuclei decaying (particle box), a second grid doubling the decays; "decays per second = λN"; the staircase with "−½" per step; steep and shallow tangents; N_t = N₀e^(−λt) framed with the formula-sheet chip. 6 the small curve with its first halving guide; "known: N_t = N₀e^(−λt) / want: λ in terms of t½"; the ln steps one at a time; λ = ln2/t½ framed; two grids flipping fast (short t½) and slowly (long t½). 7 twin N and A curves with shared halving guides; "1 Bq = 1 decay per second"; a nucleus emitting in all directions with a small painted Geiger tube catching some ("count rate ≠ activity", "same set-up: same half-life"); A = λN and A_t = A₀e^(−λt); the unit tags framed; "activity = number of nuclei" crossed. 8 the painted Geiger counter reading 0.5 counts per second with no source; the data table (measured, then corrected); the background band lifting off; points, best fit, halving guides at 70 s; t½ ≈ 70 s framed; "counts per second, not Bq". 9 and 10 the iodine-131 working (task strip, equation strip, grouped givens) beside the activity curve: n = 3, A = 80 Bq framed with the staircase 640, 320, 160, 80 and "640 / 3 = 213 Bq" crossed; then λ = 0.0866 day⁻¹, λt = 0.866, A = 269 Bq framed, the time slider sweeping 0 to 24 days and back to 10 with a live readout, "between 320 and 160 ✓", the units chip and "λ = ln2 × 8.0 → A ≈ 0 Bq" crossed. 11 runs of 20 nuclei (particle box) stepping round the expected curve, live "left" readouts stopping at 7/20, 10/20 and 13/20, "chance matters"; three runs of 2000 close to the curve with the 10¹² tag; "half-life: a property of the population" framed; one nucleus with a 50/50 dial. 12 the staircase with brackets and the framed memory line. 13 to 16 cards and brief feedback. 17 handoff (below). 18 key notes with the memory card.

## Deviations

- **Handoff heading carries v16's learner question** (root rule), switched on "So how does missing mass" (capped).
- R1: every crossed chip and slip tag is slate.
- Scene 1: the source and counter sit between the grid and the graph (there is no room under the click trace), at 170 and 270 px wide.
- Scene 11: the design's "million million" sample cannot be simulated; three particle-box runs of 2000 nuclei are shown and labelled as such, with the tag "10¹² nuclei: within 1 part in 10⁶" (at 10¹² the runs are indistinguishable from the expected curve at any screen resolution).
- Scene 7: the "small Geiger tube icon" is the painted Geiger counter plate at 330 px.
- Attempt 1: the formula chips are not on the card (the Revision 3 rule hides method aids while a countdown runs; the HSC formula sheet carries both relationships). Feedback 1 shows a one-line plan strip instead.
- Scenes 4, 6, 9 and 10 carry graph paper behind their plots (sparse-frame fixes); scene 6 shows the two small grids from its first frame (they start flipping on "more likely to decay each second").
- Scene 17: the balance is drawn from the first frame (level) and the curve is drawn from the first frame; "half-life: the crowd, never one nucleus" and "where does that energy come from?" fill the opening before the nuclei land.

## Final frame (exported as `M8V15FinalFrame` in `s3.tsx`)

`<HandoffBoard15 f={end} final />`: heading "How does missing mass measure nuclear binding energy?"; at the upper left (120, 230, 360 × 200) a navy N against t curve with two teal halving guides; at the left a decaying nucleus (32 discs) with an amber α moved up and right and an orange energy bar, label "energy out"; at the centre the coded two-pan balance (pivot (1080, 440), arm 330, drop 190) labelled "mass comparison (diagram)", tipped 7° down on the right; on the left pan a packed carbon-12 nucleus (6 red "p", 6 grey "n", r 20), "carbon-12 nucleus"; on the right pan the same twelve discs in two spaced rows, "6 p + 6 n, separate"; hand tag "missing mass?"; chip "Next: how does missing mass measure nuclear binding energy?". v16 opens on this frame.

## Numbers (all from `common.ts`, checked against "Numbers used")

Counters 200, 103, 49, 27 (expected 200, 100, 50, 25). Ruler: polonium-214 1.6 × 10⁻⁴ s, iodine-131 8.0 days, carbon-14 5730 years, uranium-238 4.5 × 10⁹ years. Data: measured 40.5, 22.9, 12.4, 7.4, 4.0; background 0.5; corrected 40.0, 22.4, 11.9, 6.9, 3.5 counts per second at 0, 60, 120, 180, 240 s; model 40 × 2^(−t/70); t½ ≈ 70 s. Iodine: n = 3, 80 Bq; λ = 0.0866 day⁻¹, λt = 0.866, e^(−0.866) = 0.421, A = 269 Bq; slider 640, 320, 269, 160, 80 Bq; slips 213 Bq and λ = 5.55 day⁻¹. A1: λ = 0.0485 day⁻¹ (5.61 × 10⁻⁷ s⁻¹), λt = 1.455, N = 1.87 × 10¹⁰ atoms. A2: ½.

## Grade

`npm run -s grade:explainer -- Explainer-phys-y12-m8-v15` (26 November 2026, provisional timing, regraded after the last change): **PASS WITH WARNINGS: 0 failures, 7 warnings** (sparse half-life-trap, exponential-law, lambda-half-life, activity, whole-half-lives and feedback-1 frames; the attempt 1 card). Earlier runs failed on mostly empty half-life-trap, lambda-half-life, whole-half-lives, feedback-1 and handoff frames; all fixed. Spot stills checked the tray at throws 1 and 3 (103 and 27 counters left), the small and large runs and the hook. Report: `out/explainer/Explainer-phys-y12-m8-v15/grade/Explainer-phys-y12-m8-v15-grade.md`.

**Honest grade: B on provisional timing.** The counters leaving the tray, the staircase, the slider on the iodine curve and the small runs wandering against the large ones carry the argument.

## For root

- Calls 1 and 2 from the design: the coded balance is kept as a labelled diagram (decision left to root); the tray run reproduces 200, 103, 49, 27 exactly (seeds in `common.ts`).
- m8-v16 opens on `M8V15FinalFrame`.
