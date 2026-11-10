# math-a12-d19 (dQ/dt = kQ; a car losing 15% of its value a year): build notes, 11 Nov 2026

Status: typechecked (scoped tsconfig, clean for the lesson); every cue phrase resolves at load in `cuemap.ts`; no em dashes in the lesson folder. Sheet `work/quality-audit/fixed/math-a12-d19-sheet.jpg`: the grade checker's 16 sheet stills, no stamps. `npm run grade:explainer -- Explainer-math-a12-d19`: PASS WITH WARNINGS (0 failures, 2 warnings). Builder's grade: **A−**. Not watched at playback speed. Not committed.

## Files
`src/explainer/lessons/math-a12-d19/`:
- `common.ts`, `cuemap.ts` (K1 to K14, K3A), `config.ts` (scene-14 `Math.max(1350, d)`; topic "GROWTH AND DECAY"), `assets.ts` (the Biology yellow car), `scenes.tsx`;
- `parts.tsx`: the models with a load-time number check against the brief 238 CAS values (car, savings, sweep, town, substance, A1, A2); role spans (k blue, A amber, rates violet); `CarRig` (the car with a ticking price tag); `CarGraph` (a replica of d18's `CarAxes`, so the join is exact); `CarPoint`; **`DepreciationSim`** (graph, point, violet tangent of gradient −0.15 × V, price tag and a kit `LiveReadoutBoard` with `fmtMoney` rows "value", "rate of change", "rate ÷ value" fixed at −0.15, all from one t); `StubInset`; `QPic` (attempt pictures); `FactorLadder` (memory card and notes);
- `s1.tsx` (1, 2, 3, 3a), `s2.tsx` (4 to 7; the k slider and the A fold on kit `FunctionSimulator` + `ParameterSlider`), `s3.tsx` (8 to 14; exports **`D19FinalFrame`** for i01).
- Read-only imports: `math-a12-d18/s3` (`D18FinalFrame`), `math-a12-d18/s2` (`AID18`), `math-a12-d18/parts` (`T_WIN`, `Attempt`, `AnswerBox`, `Line`, `BoxCard`, `Chip`, `Ring`, colours).
- Registry: one import and one array entry after d18.

## Joins
- Frames 0 to 11 render d18's `D18FinalFrame` itself; from frame 12 the replica takes over. Frames 11 and 12 are pixel-identical (checked). d18's last rendered frame and d19 frame 0 show the same content; they differ only in the engine's header topic label and d18's end fade.
- Final frame (`D19FinalFrame`, also the notes' silent return): heading "Next: from a gradient back to a curve"; i01's empty axes x −2.5 to 2.5, y −3 to 10 at 1100 × 760 (x 40, y 150); chip "gradient: f′(x) = 2x"; "which curve?"; plus a forward/backwards card (f(x) → f′(x); f(x) = ? ← 2x) and "and which one condition picks out just one?". **For root:** the card and the last line are additions to the frame i01's design describes (axes and two chips), added to fill a 65% bare frame. They give no answer. The i01 builder should fade them on its first cue, or root can ask for them to be removed.

## Departures from the design (with reasons)
- Scene 1: the two-point comparison is one table card ("new" and a live "after t yr" column) instead of two boards, because two boards do not fit beside d18's graph. The slide to $15,000 runs on "When the car is worth fifteen thousand", not on "fast", so the tag ticks while the words are spoken. "Half the value, half the rate" is a violet tag; "same −0.15" is a blue tag on the glowing ratio row. The "worth after 8 years?" chip stays in place and is ringed on the question, instead of moving to the top right (where the board sits).
- DepreciationSim draws on d18's own axes code (kit `makePlot`) rather than `FunctionSimulator`, to keep the join exact. It uses kit `LiveReadoutBoard` with `fmtMoney`.
- Scene 2: the "k < 0" inset arrives on "falls" (the moment the car's curve flattens) and the "k > 0" inset on "If k is positive". Captions are "shrinks, slowing" and "grows, speeding up". The trail of stubs was dropped because it disappears under the curve.
- Scene 3: a solid "The check" card (differentiate; is it k × Q?) sits under the first row until "So dQ/dt". The car's answer frame lands on "about nine thousand", not "dollars", because "dollars" is 20 frames before the scene ends.
- Scene 3a: a small board shows "rate" and "rate ÷ value = 0.06" for the savings, mirroring the car's −0.15.
- Scene 4: the slider ticks read −½, 0, ½ because the kit badge prints 0.5 as "½" (kit issue). The k = 0 case is shown on the graph ("k = 0: Q = 2, constant") and kept in the column as a line.
- Scenes 5 and 6: a dashed target line "P = 20,000: when?" from "when will it reach"; a "2010 gives A; 2015 fixes k" card until row 3; a "same steps as for k" card until the answer. Scene 6's slip compares the rounded k (18.990) with the exact value (19.009).
- Scene 7: "after 30 years?" is marked from the first frame; on "halves" a dashed level and a blue drop arrow "× ½ in 12 years"; a "the half-life is a data point" card until the k row.
- Scene 8: the car badge plate is 380 px wide (the minimum for anchor plates); the town's crossing note sits under the curve.
- Feedback 1: a first row "P(10) = 1600, so" on "Doubling means", and a doubling card (800 × 2 1600 × 2 3200) until the slip.
- Key notes: decision 58 layout, 40 px; note 4 runs to two short lines.

## Brief 238 findings
- 238-D19-ASYMPTOTE-SCOPE: scene 4 says "Q = 0 is an asymptote (k ≠ 0)" and shows "k = 0: a flat line, Q = 2 for every t" on the graph and in the column. Key note 4 reads "k ≠ 0: asymptote Q = 0 (k = 0: Q stays A). Models use A > 0 and t ≥ 0."
- 238-D19-STALE-HOOK-REFERENCES: scenes 1 to 3 use the car's V axis from 0 to 32,000 (d18's axes). The savings appear only in scene 3a, with their own B axis from 0 to 12,000.
- 238-D19-NOTES-FIT: decision 58 layout (bullets on the left 1050 px, the card on the right).

## Cue check
All phrases resolve. Repeat checked: scene 5 "Five k is" uses **#2** (907); #1 sits inside "e to the five k is" (764).

## Grade checker report
`out/explainer/Explainer-math-a12-d19/grade/Explainer-math-a12-d19-grade.md`: PASS WITH WARNINGS, 0 failures. Warnings: frame 15 (handoff, 52% bare) and "Few pictures" (the coded graphs are not counted).

## Grade per frame (sheet)
1 hook with car, graph and board, A−; 2 the glide, the board and the rule column, A−; 3 the check opener (rule, first row, check card; the right column is half empty), A−; 4 the check rows, A; 5 savings, A; 6 the k sweep with the car thumbnail, A−; 7 the town opener, A−; 8 time rows, A−; 9 the half-life opener, A−; 10 the memory card before its main line writes, A−; 11 the memory card full, A; 12 feedback 1 early, A−; 13 attempt 2, A−; 14 feedback 2, A; 15 the handoff, A−; 16 the notes, A.

## Kit issues
- `ParameterSlider` badge uses `niceNum`, so 0.5 prints as "½". There is no option to keep decimals.
- `FunctionSimulator` draws vertical asymptotes only. A horizontal asymptote must be added in the overlay.
- The `explainer-stills.mjs` Bash path to `node -e` printed nothing in Git Bash on this machine; PowerShell works.

## Check at playback speed
- The cut at frame 12, and the heading swap.
- The price tag ticking from $30,000 to $15,000 against the live column; the ratio glow on "Half the value".
- The glide 0 to 14 years (212 to 414) against "Watch what that does ... falls".
- The rows in scene 3 against the substitution sentence; the point riding to t = 8 as the tag ticks to $9,036.
- The k sweep through 0 (271 to 443) and back (805 to 869); the fold on "Every value" (987 to 1031), with labels hidden while it moves; the unfold and the shading on "a positive A".
- The town curve drawing on "per year", 25 frames before scene 5 ends.
- The ladder arcs on their cues in scene 8.
- The rings from "Pause here to answer.".
- The cross-fade to i01's axes on "Next"; the notes' return to the final frame.
