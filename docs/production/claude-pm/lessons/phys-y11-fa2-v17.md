# Year 11 Physics FA2 V17 (Physics 2025, Year 11, Focus Area 2): Does measured light intensity follow an inverse square relationship? The light intensity investigation (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v17`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (light meter body; light sensor head on its carriage); v13's filament lamp, v11's metre rule and fa1-v10's low-voltage supply reused; v18's ray box and plane mirror requested there (handoff only). All data in this video are illustrative and labelled so.

Narration 6,210 characters, 18 scenes, about 569 s (9.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: seventeenth video of the Year 11 Physics (2025) Focus Area 2 route and the first light investigation; it conducts the practical that v16's model prepared. Templates: `phys-y11-fa1-v24.md` (investigation format, FA0 placement table, risk table showing only the spoken row, illustrative data rules) and `phys-y11-fa1-v22.md` (section list); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v16.md` (Revision 1; v11 and v12 are the FA2 investigations before this one; v16's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file (method, illustrative data from a stated model, FA0 proposals). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson13.sa.html`, sections `concept-three` (reading the distance-intensity graph: I against d is a curve, I against 1/d² a straight line through the origin; last check; the odd one out on controlled variables), activity 1 part (1) (design a practical: variables, two controlled variables, the graph) and short-answer Q3 (variables, controls, the graph, the background offset); the problem-solving sections belong to v16. Route entry: `phys-y11-fa2-v17` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Light intensity investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete light intensity investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next: "phys-y11-fa2-v18: How can I explain and apply the law of reflection?" (placeholder; v18's design rewrites it as "Why does light leave a mirror at the same angle it arrives?", and this video's handoff chip uses that).

**Opening frame (v16's actual handoff, Revision 1, 2 Nov).** v16's scene 16 ends with the memory line "Twice as far, a quarter of the light." small at the top; a dark bench with the filament lamp at the left, low, glowing; the metre rule along the bench from the filament; the light meter with its sensor head on the rule at "0.20 m", its screen showing "?"; above, a dashed grey curve "model prediction: I ∝ 1/r²"; chips "prediction ≠ measurement" and "Next: Does measured light intensity follow an inverse square relationship?". This video opens on that frame.

Owner rules applied: as v11 and v12 (2025 syllabus only; no people, hands, faces or eyes drawn: the sensor carriage slides by code, the lamp switches by a coded switch on the supply, "a gap in the blind" is a coded window strip; apparatus painted at native aspect; graphs, tables and readouts coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v16, fa1-v24 and v12 recalled in a sentence each). Investigation data are illustrative, labelled on screen and said aloud; the model's predictions are labelled "model prediction" and never shown as results.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Light and sound"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G2-11 `ci9327efb9`: "Conduct a laboratory experiment to analyse the relationship between light intensity and distance from a light source"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G5-02 `ci7afa7b23`, P25-FA0-G4-02 `ci21267953`, P25-FA0-G5-05 `ci8856aeb0`, P25-FA0-G3-01 `ci6e7b9681`, P25-FA0-G2-04 `cif90164e3`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v16's handoff (above); the model's prediction at twice the distance; two tests of I ∝ 1/r² (I r² constant; I against 1/r² straight through the origin; "Plot it straight" recalled from fa1-v24); the set-up; independent, dependent and controlled variables with reasons; the light meter's lux with its plain meaning and why ratios still work; the background reading; unit conversion (cm to m, 1/r² in m⁻²); three readings per distance, an outlier found, its cause fixed and the reading repeated; the table; the inconsistency (raw I r² creeping up) explained by the background and removed; I against r (a curve; I r not constant, so not 1/r) and I against 1/r² (straight through the origin); the gradient as I r², and the uncorrected line's intercept as the background; conclusion (supports, not proves, over the tested range); limitations and improvements; a three-row risk assessment; two attempts. Not taught: standard deviation (fa0-v05); uncertainty bars on this graph beyond one sentence (they are smaller than the dots); log-log plots (author note f); converting lux to W m⁻²; the inverse square law's derivation (v16).

## Decisions

- **Learner question kept (route).** "Does measured light intensity follow an inverse square relationship?" It is v16's handoff chip and already a single answerable question (the route's root note asks for a final wording; this one is kept, open decision 1). The answer, built in order: the model predicts a quarter at twice the distance (1, 2); two tests, I r² and the straight line (2); a controlled set-up (3); lux, the background and units (4); repeats and an outlier (5); the raw products creep up (6); the background explains it, and once removed, I r² is constant (7); the curve can't decide, the straight line can (8); gradient and intercept (9); yes, within uncertainty, over this range: supports, not proves (10); limitations (11); risks (12).
- **The hook (v16's frame, made a prediction).** "It reads about six hundred. If the law holds, what should it read at forty centimetres?" 3 s prediction with chips "300?", "150?". Answered by the model in 2 (150, "model prediction") and by the corrected data in 7 (149).
- **Two tests (site card 3, with v16's working form).** Test 1, the products: I r² stays the same (v16's I₁r₁² = I₂r₂², made a column). Test 2, the graph: I against 1/r² straight through the origin (fa1-v24's "Plot it straight, then read the gradient", recalled in one sentence). Test 1 is new to the site and makes the background visible (6, 7); test 2 is the site's method.
- **Illustrative data (labelled; generating model stated).** Model: meter reading = 24.0 lux m² ÷ r² + 6 lux background, with small scatter. Distances 0.20 to 0.70 m in 0.10 m steps (read on the rule in centimetres). Three readings per distance, symmetric about each mean: 0.20 m 601, 604, 607; 0.30 m 271, 274, 277; 0.40 m 153, 155, 157; 0.50 m 101, 103, 105 (after the outlier's repeat); 0.60 m 70, 72, 74; 0.70 m 54, 55, 56 lux. Means 604, 274, 155, 103, 72, 55; half-ranges 3, 3, 2, 2, 2, 1 lux. Background 6 lux before and after. Corrected 598, 268, 149, 97, 66, 49 lux. Raw I r²: 24.2, 24.7, 24.8, 25.8, 25.9, 27.0; corrected: 23.9, 24.1, 23.8, 24.3, 23.8, 24.0 lux m² (author note c). Said aloud in scene 5: "These numbers are illustrative, made up to show the method, not real results." Every table, graph and readout carries the grey tag "illustrative data".
- **The light meter, with its unit said plainly (site correction 2).** "The meter reads in lux. Lux measures brightness as our eyes see it, not watts per square metre. But for one lamp, it's proportional to the intensity, so ratios and graph shapes are the same." Kept in learner copy: without it, a student would read the meter's numbers as W m⁻² and compare them with v16's. Gloss "lux: the unit of a light meter; it follows the intensity of the visible light".
- **Variables and controls, with reasons (`ci9ce164ec` applied).** IV: distance r from the filament to the sensor's face. DV: the meter reading. Controlled, each with its reason: the same lamp and supply voltage (same power); the sensor square-on at the filament's height (catches light the same way; site Q3's "orientation"); the same darkened room with matt black card around the bench (no light from the walls, a steady background; site "background light"). The site's odd-one-out answer (distance is not a controlled variable) is the IV line.
- **Background and units (`ci21267953`, partial).** The lamp-off reading (6 lux) is taken first and again at the end. Distances are read in centimetres and converted to metres; 1/r² is written in m⁻². Said once with one example (20 cm, 0.20 m, 25 m⁻²); A1 makes the student do it.
- **Outlier (`ci8856aeb0`, partial; v10 met outliers in a timing).** At 0.50 m: 101, 131, 105. "Don't just delete it. Look for the cause." The cause, shown: a coded strip of daylight at the window blind's edge; the blind is closed and the reading repeated (103). The rule taught: find the cause, fix it, repeat; don't silently discard.
- **The inconsistency (`ci7afa7b23`, partial; prediction 2).** The raw products creep up, 24.2 to 27.0. Prediction (3 s): "The lamp hasn't changed. So why does I r squared creep up?" Chips "the lamp gets brighter far away?", "the background adds the same 6 lux everywhere?". Explained in 7: the same 6 lux is 1 per cent of the reading at 0.20 m and 11 per cent at 0.70 m, and the larger r² multiplies it more. After subtraction the products are 24.0 within about 1 per cent.
- **Why the curve can't decide (site card 3, made causal).** "Lots of relationships fall like that." The I r column (120 to 34) shows it isn't 1/r; the straight line through the origin on the 1/r² graph is the test that can tell. Least-squares fit on the corrected means: gradient 23.9 lux m², intercept 0.4 lux (zero within the readings' ±1 to ±3 lux). Uncorrected: the same gradient, intercept 6.4 lux, about the background (site Q3's last sentence, made visible).
- **The gradient's meaning (site correction 2).** "That's I r squared, the reading this lamp would give at one metre." The site's "the gradient equals P/(4π)" holds only for a sensor that measures total intensity in W m⁻².
- **Conclusion with its range (`ci5a02ec2a` applied).** "Between twenty and seventy centimetres, the measured intensity follows one over r squared within our uncertainty. That supports the inverse square law. It doesn't prove it. We tested one lamp, over one range of distances." (site correction 1: "confirms" becomes "supports").
- **Limitations and improvements (`ci7e38e278` applied).** (1) Distance to the hidden filament: ±0.5 cm is ±2.5 per cent in r and ±5 per cent in 1/r² at 0.20 m, under ±1.5 per cent at 0.70 m; improve: mark the filament's position on the holder and favour larger distances. (2) Reflections from the bench: matt black cloth. (3) A drifting background: measure it before and after (and repeat a reading at the start distance at the end). Not listed: the lamp as a point source (the filament is about 1 cm, small compared with 20 cm; author note e).
- **Risk assessment (`cif90164e3`, applied from v11 and v12; `ci6e7b9681` partial).** Three spoken rows, hazard, harm and control: (1) the hot bulb (burns: don't touch while on; switch off and let it cool before moving it); (2) the darkened room (trips, knocked equipment: clear the floor and bench first; lights on before moving around); (3) the glass bulb (cuts if it breaks: clamp the holder; if it breaks, tell your teacher and don't pick up the glass). Teacher notes, not shown: low-voltage supply (12 V), no mains at the bench; nobody stares at the filament (bright, uncomfortable; no lasting harm at this power expected). Only the spoken row is shown; earlier rows collapse to one-word grey chips (v05, v10, fa1-v24).
- **Attempts (original, HSC style).** (A1, conversion and the products) 92 lux at 25.0 cm, 26 lux at 50.0 cm, background 4 lux: 0.250 m, 0.500 m; corrected 88 and 22; I r² 5.50 and 5.50 lux m²: equal, so the results support an inverse square relationship (two points are little evidence). Crossed: "the raw products 5.75 and 6.50 differ, so it isn't inverse square". (A2, the intercept) A line of gradient 15 lux m² crossing at 3 lux: the intercept is background light reaching the sensor at every distance; at 0.50 m, 1/r² = 4.0 m⁻², the lamp gives 60 lux and the meter reads 63 lux. Crossed: "the line misses the origin, so the light doesn't follow the inverse square law".
- **Mistake scene:** none separate. "Delete an awkward reading" (5); "the raw products prove the law fails" (6, 7, A1 crossed); "a falling curve shows inverse square" (8); "a line that misses the origin disproves the law" (9, A2 crossed); "a good fit proves the law" (10); "lux is W m⁻²" (4); "predictions reported as results" (all data tagged illustrative; the curve tagged model prediction).
- **Memory aid:** "Subtract the dark, then plot it straight." (see "Memory aid check"), said in scene 10. It extends fa1-v24's "Plot it straight, then read the gradient."
- **Handoff (route next, with v18's rewritten question).** Board change: v18's ray box plate (`phys-y11-ray-box-v1.png`) on a sheet of paper at the left sends a narrow coded beam to v18's plane mirror plate (`phys-y11-plane-mirror-v1.png`) standing on the paper; the beam leaves the mirror; two grey angle arcs, one each side of a dashed grey line at right angles to the mirror, each marked "?"; chip "same angle?"; then "Next: Why does light leave a mirror at the same angle it arrives?". This is the frame v18 opens on.
- **Site sources used:** card 3 (I against d a curve, I against 1/d² a straight line through the origin; the linearising trick: 2, 8, 9; "confirms" corrected); last check (true: 8); odd one out (C, the distance: 3); activity 1 part (1) (IV, DV, two controls, the graph: 3, 8); Q3 (variables, three controls, the graph, the straight line through the origin, and the background offset: 3, 7, 9); misconception 2 (light is spread, not lost: recalled in 2 via v16). v16 owns cards 1 and 2 and `we-1`.
- **Site corrections (quoted from site lesson 13, read 2 Nov; for `../site-corrections-phys-y11.md`; none of these rows is logged yet; v16 logs corrections 1 to 3 for the same lesson, so these continue as 4 to 6):**
  4. Card 3: "A straight-line fit is strong evidence that the data obey the inverse square law" is fine, but the key statement says "confirming the inverse square law" and the last check says "which confirms the inverse square law". A fit within uncertainty supports a model; it does not confirm it (as fa1 lesson 22's logged correction). Suggest "supports" in both.
  5. Card 3: "the gradient equals $P/(4\pi)$". True only when the sensor measures the total radiated intensity in W m⁻². The practical in activity 1 uses "a light meter or phone app", which reads illuminance in lux (visible light weighted to the eye's response), so the gradient is I r² in lux m², proportional to the lamp's visible output, not P/(4π). Suggest: "The gradient equals I r². With a sensor that measures intensity in W m⁻², that is P/(4π); with a light meter in lux, it is the reading the lamp would give at 1 m."
  6. Q3 model answer: "The independent variable is the distance $d$ from the lamp to the sensor ... the level of background light, which is minimised by darkening the room". Two method gaps: the distance should be measured from the filament (the source point), not the lamp's outside, to the sensor's face; and the background should be measured with the lamp off and subtracted from every reading, not only minimised (the answer's final sentence then explains the offset). Suggest adding both.
  - Checked and correct: card 3's curve and straight-line description; the odd one out (C); Q3's three controls (lamp power, background light, sensor orientation) and its last sentence (a straight line not through the origin indicates a constant background offset).
- **Cause chain taught, in order:** (1) the model's prediction (1, 2); (2) two tests (2); (3) controls make distance the only cause (3); (4) lux and the background (4); (5) repeats; an outlier's cause found and fixed (5); (6) the raw products creep up (6); (7) a constant background is a bigger share far away; subtract it (7); (8) a curve can't decide; the straight line can (8); (9) gradient I r²; intercept the background (9); (10) supports within the range, not proof (10); (11) limitations (11); (12) risks (12).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (fair tests, graph gradients). From FA1, recalled in a phrase each: v10 (variables, mean, range, outliers), fa1-v24 (linearising, half-range uncertainty, "supports, not proves"). From FA2: v11 and v12 (FA2 investigations: variables, repeats, risk rows), v16 (I ∝ 1/r², I₁r₁² = I₂r₂², the point-source conditions).
- **Learner-visible vocabulary (plain meaning at first use):** independent, dependent, controlled variable (recalled, scene 3); light meter and lux (a meter that measures brightness as our eyes see it; its unit, lux, follows the intensity of the visible light, scene 4); background light (light reaching the sensor from somewhere other than the lamp, scene 4); outlier (a reading far from the others, scene 5); inconsistency (a pattern in the data the model doesn't expect, scene 6, screen gloss); intercept (where the line meets the vertical axis, recalled, scene 9).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` from `src/explainer/lessons/bio-m5-b13/shared.tsx` (row-at-a-time table; copy lesson-local, as fa1-v24).
- **New explainer motion (coded unless a plate is named):** **sensor carriage** (the sensor head plate slides along the metre rule to each mark; a coded distance line from the filament centre to the sensor face with its centimetre reading, converting to metres in a chip); **meter screen readout** (digits on the meter plate's screen, settling over about half a second to each reading); **background switch** (a coded switch on the supply plate; the lamp's glow fades; the meter reads 6); **window strip** (a thin coded daylight strip at the blind's edge that appears with the outlier and closes); **number line** with three readings and a bracket (v12, fa1-v24); **table fill** (row at a time; columns r (cm), r (m), 1/r² (m⁻²), readings (lux), mean (lux), corrected (lux), I r² (lux m²)); **I r² column comparison** (raw and corrected columns side by side, cells tinting by their difference from 24.0); **background share bars** (a thin bar under the 0.20 m and 0.70 m readings showing 6 lux as 1 per cent and 11 per cent); **two graphs** (I against r, then I against 1/r², the points re-spacing horizontally as the axis changes, a morph rather than a cut; fa1-v24's `ErrorBarPlot`); **fit line** with gradient and intercept readouts; **raw ghost line** (dashed, parallel, crossing at 6.4 lux); **distance uncertainty wedge** (±0.5 cm at the filament with its percentage readouts at 0.20 m and 0.70 m); **risk table, one row at a time**; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small table or graph; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the apparatus across the upper left (lamp, rule, sensor, meter, supply); tables and graphs in the right half; working under the graph.
- **Colour key:** as v11, v12 and fa1-v24: measured points ink; the line of best fit teal; the model prediction dashed grey and labelled "model prediction"; the uncorrected ghost line dashed terracotta; the background grey; the distance line and its wedge ink and amber; light from the lamp warm white with photon dots gold (v16); givens navy; working ink; "illustrative data" tag grey on every data item; crossed items muted red.
- **No human figures.** The sensor slides by itself; the lamp switches by a coded switch; the blind is a coded strip.
- **Author notes (not learner copy):**
  (a) Apparatus: a 12 V clear-glass filament lamp (about 24 W) in a holder on a small stand, on a low-voltage supply; filament centre at the rule's zero line, at the sensor's height; the meter's flat sensor head on a carriage that slides along the rule's edge; matt black card behind the lamp and along the bench. A 12 V 24 W lamp gives roughly 300 lm; spread evenly that is about 24 cd, so about 24 lux at 1 m and 600 lux at 0.20 m (consistent with the model constant).
  (b) Lux: illuminance, the visible intensity weighted by the eye's response (1 lux = 1 lm m⁻²). For one lamp at a fixed voltage its spectrum is fixed, so lux is proportional to W m⁻², and ratios and graph shapes are the same.
  (c) Data: model 24.0 ÷ r² + 6 (600, 266.7, 150, 96, 66.7, 49.0 corrected); means shifted slightly for scatter (604, 274, 155, 103, 72, 55). 1/r²: 25.0, 11.1, 6.25, 4.00, 2.78, 2.04 m⁻². Raw I r²: 24.16, 24.66, 24.80, 25.75, 25.92, 26.95. Corrected I r²: 23.92, 24.12, 23.84, 24.25, 23.76, 24.01 (mean 23.98; within ±1.3 per cent). Corrected I r: 119.6, 80.4, 59.6, 48.5, 39.6, 34.3 (falls, so not 1/r).
  (d) Fits (least squares on the means against 1/r²): corrected gradient 23.93 lux m², intercept 0.41 lux; raw gradient 23.93, intercept 6.41 lux; through-origin fit 23.95. Shown "23.9", "0.4" and "6.4".
  (e) Point source: the filament coil is about 1 cm long; at 0.20 m the coil subtends about 3°, and the inverse square law holds to well under 1 per cent. The glass bulb refracts slightly (no effect on the ratio test along one line). The holder shades the light behind and below the lamp (the sensor stays on one line, so this doesn't matter).
  (f) A log-log plot (log I against log r) would give a gradient of −2.00 on the corrected data; not taught (Year 11 2025 has no log graphs here).
  (g) Background share: 6 ÷ 604 = 1.0 per cent; 6 ÷ 55 = 10.9 per cent.
  (h) Distance uncertainty: 0.005 ÷ 0.20 = 2.5 per cent in r, 5.0 per cent in 1/r²; 0.005 ÷ 0.70 = 0.71 per cent, 1.4 per cent. This uncertainty in 1/r² (horizontal bars) is larger than the readings' ±1 to ±3 lux (vertical bars smaller than the dots); said only as "the bars are smaller than the dots" in scene 9's visual tag.
  (i) A1: 92 − 4 = 88; 88 × 0.250² = 5.50; 26 − 4 = 22; 22 × 0.500² = 5.50; raw 92 × 0.0625 = 5.75 and 26 × 0.25 = 6.50.
  (j) A2: 15 × (1 ÷ 0.50²) = 15 × 4.0 = 60; + 3 = 63 lux.
  (k) Pronunciations: "I r squared"; "lux" (LUCKS); "twenty-three point nine lux metres squared"; "one over r squared"; "zero point two oh metres".

Main question: *The model says twice as far gives a quarter. Does measured light intensity follow an inverse square relationship, and how sure can we be?*
Entry knowledge (Stage 5 fair tests and gradients; v10 and fa1-v24 investigation skills; v11 and v12 FA2 investigations; v16 the inverse square law).
Stops after: the model's prediction and its two tests; variables and controls; lux and the background; unit conversions; repeats and an outlier; the table; the inconsistency explained and removed; the two graphs; gradient and intercept; the conclusion with its range; limitations with improvements; a three-row risk assessment; two attempts. No standard deviation, no log graphs, no lux conversion.
Handoff: v18, the law of reflection.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v17 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G5-02 `ci7afa7b23` | "Explain patterns and trends , including inconsistencies in data and information" | Scenes 6, 7: the raw I r² creeping up, explained by a constant background as a growing share | (continues v11) |
| P25-FA0-G4-02 `ci21267953` | "Apply quantitative processes to data, including unit conversions" | Scenes 4, 6, A1: centimetres to metres; 1/r² in m⁻²; products in lux m²; subtracting a background | Prefix conversions across many units (fa0 skill video; G5-08) |
| P25-FA0-G5-05 `ci8856aeb0` | "Interpret data and information to identify outliers , make predictions , explain results and draw conclusions" | Scenes 5, 10, A2: an outlier's cause found and the reading repeated; a prediction from the gradient (A2); a conclusion limited to the tested range | (continues v10) |
| P25-FA0-G3-01 `ci6e7b9681` | "Apply safe work practices and manage risks while conducting a scientific investigation" | Scene 12: working practices during the run (switch off and let the bulb cool before moving it; lights on before moving around) | Other practices (later investigations; fa0-v02) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 12: three hazard, harm, control rows for this apparatus | Likelihood and consequence rating (fa0-v02) |

Applied, not re-taught: P25-FA0-G2-01 `ci9ce164ec` (variables and controls with reasons, scene 3), P25-FA0-G4-03 `ci0fca96de` (table, two graphs), P25-FA0-G5-03 `ci914a5e7e` (means and half-ranges), P25-FA0-G5-06 `ci7e38e278` (improvements matched to limitations, scene 11), P25-FA0-G6-02 `cibc9c30ac` (v16's model predicts before the data), P25-FA0-G5-04 `ci15366d75` (a fit supports, not proves). Recommendation to root: accept the table and record it in the route as v17's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (what should it read at twice the distance?)
> The model says light from a point source dims as one over r squared. Now we test it. A light meter's sensor sits on a metre rule, twenty centimetres from a small lamp. It reads about six hundred. If the law holds, what should it read at forty **centimetres**?

Visual: opens on v16's last frame (the dark bench, the lamp, the rule, the sensor at "0.20 m" with "?", the dashed curve "model prediction: I ∝ 1/r²", chip "prediction ≠ measurement", the "Next" chip). The "Next" chip becomes the heading: "The light intensity investigation"; the memory line fades. The apparatus assembles at the upper left (author note a): the lamp (`phys-y11-filament-lamp-v1.png`) on the low-voltage supply (`y11p-low-voltage-supply-v1.png`, read as `phys-y11-low-voltage-supply-v1.png` under root decision 4) with a coded lead; the metre rule (`phys-y11-metre-rule-v1.png`) with a coded scale; the sensor head on its carriage (`phys-y11-light-sensor-head-v1.png`) at 20 cm; the meter body (`phys-y11-light-meter-v1.png`) on the bench with a coded lead to the head. On "six hundred" the meter's screen settles on "≈ 600" (grey tag "illustrative data"). On "centimetres" a ghost sensor at "40 cm"; chips "300?", "150?" and a 3-second countdown ring.

### 2. what the model says to test
> Forty centimetres is twice as far, so the model predicts a quarter, about a hundred and fifty. That gives us two tests. If intensity is proportional to one over r squared, then I times r squared should stay the same at every distance. And a graph of I against one over r squared should be a straight line through the origin. Plot it straight, then read the **gradient**.

Visual: on "a quarter" the dashed curve's 40 cm point rings with "150 (model prediction)"; the "150?" chip fills. Two test cards write at the right: "test 1: I × r² stays the same" (with v16's "I₁r₁² = I₂r₂²" in grey beneath) and "test 2: I against 1/r²: straight, through the origin". On "straight line" the dashed curve's horizontal axis relabels from "r" to "1/r²" and the curve straightens into a dashed line through the origin (still "model prediction"). On "gradient" fa1-v24's line "Plot it straight, then read the gradient." writes small under the cards (tag "from the ramp investigation").

### 3. the set-up and its variables
> A low-voltage lamp with a clear bulb, so we can see the filament. A sensor slides along the rule, facing the filament square-on, at the same height. The independent variable is the distance, r, from the filament to the sensor's face. The dependent variable is the meter reading. Controlled: the same lamp and supply voltage, so its power stays the same. The same sensor angle, so it catches the light the same way. And the same darkened room, with black card around the bench, so no light bounces in from the **walls**.

Visual: camera pushes to the apparatus. Labels draw as named: "filament (the source point)" on the lamp, "sensor face", "carriage". A coded distance line runs from the filament centre to the sensor face, labelled "r". A variables panel at the right, one row per sentence: "independent: distance r (filament to sensor face)" (the carriage slides to 30 cm and back); "dependent: meter reading"; "controlled:" with three chips written as spoken, each with its reason and its part pulsing: "same lamp and voltage → same power" (the supply's dial pulses), "sensor square-on, filament height → catches light the same way" (a small right-angle mark at the sensor face), "same dark room, black card → steady background, no reflections" (coded matt black panels slide in behind the lamp and along the bench).

### 4. lux, the background and units
> The meter reads in lux. Lux measures brightness as our eyes see it, not watts per square metre. But for one lamp, it's proportional to the intensity, so ratios and graph shapes are the same. First, switch the lamp off. The meter still reads six lux. That's background light. The rule is marked in centimetres, so convert. Twenty centimetres is zero point two oh metres, and one over r squared is twenty-five per square **metre**.

Visual: the meter's screen shows "lux"; gloss "lux: the light meter's unit; it follows the intensity of the visible light" and a grey tag "not W m⁻²: ratios still work". On "switch the lamp off" a coded switch on the supply flips; the lamp's glow fades; the meter settles on "6 lux" (gloss "background: light from somewhere other than the lamp"; a small chip "background: 6 lux (before)" parks at the top right). On "convert" the sensor at 20 cm: chips "20.0 cm → 0.200 m" and on "metre" "1/r² = 1 ÷ 0.200² = 25.0 m⁻²". The lamp glows again.

### 5. repeats and an outlier
> Each distance gets three readings. These numbers are illustrative, made up to show the method, not real results. At fifty centimetres, we get one hundred and one, one hundred and thirty-one, and one hundred and five. One reading is far from the others. That's an outlier. Don't just delete it. Look for the cause. Here, a gap in the blind was letting daylight in. Close it, and repeat the reading: one hundred and three. So the mean is one hundred and three, plus or minus **two**.

Visual: a large grey banner "illustrative data: not real results" writes first and then shrinks to a corner tag that stays on every data item to the end of scene 11. The carriage slides to 50 cm. Three dots land on a short number line, "101", "131", "105"; on "outlier" the 131 dot rings in red (gloss "outlier: a reading far from the others"). On "Look for the cause" a thin coded strip of daylight appears at a window blind's edge at the top of the board, with a faint warm wash on the bench. On "Close it" the strip closes and the wash fades; the 131 dot greys out with a tag "cause found: daylight; repeated", and a new dot lands at "103". On "two" a bracket spans 101 to 105: "mean = 103 lux; half-range = 2"; boxed "103 ± 2 lux".

### 6. the table, and a puzzle
> Now the first test: I times r squared. At twenty centimetres, it's twenty-four point two. But it creeps up as we move away, to twenty-seven at seventy centimetres. The lamp hasn't changed. So why does I r squared creep **up**?

Visual: the table fills row by row as the scene starts (author note c): headings "r (cm)", "r (m)", "1/r² (m⁻²)", "readings (lux)", "mean (lux)"; the 50 cm row lands from the number line; the others write quickly. On "I times r squared" a new column "I r² (lux m²)" writes: 24.2, 24.7, 24.8, 25.8, 25.9, 27.0, each cell tinting warmer as it rises above 24 (gloss "inconsistency: a pattern the model doesn't expect"). On "up" chips "the lamp gets brighter far away?", "the background adds the same 6 lux everywhere?" and a 3-second countdown ring.

### 7. the background explains it
> It's the background. The same six lux adds to every reading. Close to the lamp, six is only one per cent of the reading. Far away, it's more than ten per cent, and multiplying by a bigger r squared makes it count for more. So subtract the background from every reading first. Now I r squared stays at about twenty-four, within about one per cent, at every distance, just as the inverse square law **predicts**.

Visual: the second chip ticks; the first takes a scribble cross. Background share bars: under the 0.20 m row a thin bar with a 6 lux grey slice "1%"; under the 0.70 m row "11%". The background chip "6 lux (after)" joins "6 lux (before)" at the top right. On "subtract" a new column "corrected (lux)" writes 598, 268, 149, 97, 66, 49, and the I r² column rewrites from corrected values: 23.9, 24.1, 23.8, 24.3, 23.8, 24.0, the tints cooling to neutral; on "predicts" a bracket "24.0 ± 1%", test card 1 ticks, and the hook's "150" ring gains "measured (corrected): 149".

### 8. two graphs
> Now the graphs. Against r, the readings fall in a steep curve. But lots of relationships fall like that. If intensity followed one over r, then I times r would stay the same, and it doesn't. So plot I against one over r squared. The points line up, and the line of best fit passes through the **origin**.

Visual: right half: axes "corrected I (lux)" against "r (m)", 0 to 0.80; the six corrected means plot as a steep falling curve. On "one over r" a grey side column "I × r: 120, 80, 60, 49, 40, 34" writes beside the graph with a cross (tag "not 1/r"). On "So plot" the horizontal axis relabels to "1/r² (m⁻²)" (0 to 26) and the points re-space horizontally (a morph): five crowd near the left, one sits far right at 25. On "origin" the teal line of best fit draws from the far point through the cluster to (0, 0); a small tag "error bars smaller than the dots".

### 9. gradient and intercept
> Its gradient is twenty-three point nine lux metres squared. That's I r squared, the reading this lamp would give at one metre. The intercept is zero point four lux, which is zero within our uncertainty. Without subtracting, the line has the same gradient, but it crosses the vertical axis at about six lux. That's the background, showing up as the **intercept**.

Visual: a rise-run triangle on the teal line; readout "gradient = 23.9 lux m²" boxed, with a grey "= I r² (the reading at 1 m)". An inset zooms near the origin: the line meets the vertical axis at "0.4 lux", ringed, with a grey "≈ 0 within ±2 lux". On "Without subtracting" the raw means plot as hollow points and a dashed terracotta ghost line draws parallel to the teal line, crossing the axis at "6.4 lux" (tag "uncorrected"); on "intercept" a grey arrow joins the crossing to the "background: 6 lux" chips. Test card 2 ticks.

### 10. conclusion and the memory aid
> So between twenty and seventy centimetres, the measured intensity follows one over r squared, within our uncertainty. That supports the inverse square law. It doesn't prove it. We tested one lamp, over one range of distances. The rule for this experiment: subtract the dark, then plot it **straight**.

Visual: a conclusion box writes: "0.20 to 0.70 m: I r² = 24.0 ± 1%; I against 1/r² straight through the origin: supports I ∝ 1/r² (illustrative data)". On "supports" a chip "the law is proved" fades in and is crossed (caption "supports, within uncertainty, over this range"). On "straight" the handwritten line writes large: "Subtract the dark, then plot it straight." Hold about 2 seconds.

### 11. limitations and improvements
> The biggest limitation is the distance. The filament is hidden inside the bulb, so r could be half a centimetre out. At twenty centimetres, that's two and a half per cent in r, and five per cent in one over r squared. So mark the filament's position on the holder, and favour larger distances. Light reflecting off the bench adds to the readings, so cover it with matt black cloth. And the background can drift, so measure it before and **after**.

Visual: the apparatus at 20 cm: a thin amber wedge at the filament, "±0.5 cm", readouts "r: ±2.5%", "1/r²: ±5%"; the carriage slides to 70 cm: "r: ±0.7%", "1/r²: ±1.4%". On "mark the filament's position" a coded tick mark appears on the holder at the filament's height and line. On "reflecting off the bench" a faint coded ray from the lamp bounces off the bench into the sensor (tag "reflection adds light"), then a matt black cloth strip slides over the bench and the ray stops. On "after" the two background chips pulse. A limitations list builds at the right: "hidden filament → mark it; larger r", "bench reflections → matt black cloth", "drifting background → before and after".

### 12. risk assessment
> The risk assessment. The bulb gets **hot** enough to burn, so don't touch it while it's on, and switch it off and let it cool before you move it. A darkened room makes it easy to **trip** or knock things over, so clear the floor and bench first, and turn the lights on before moving around. And the glass bulb can **break**, so clamp the holder, and if it does break, tell your teacher and don't pick up the glass.

Visual: the risk table shows **only the row being spoken**, "Hazard / Harm / Control", in short wording; when the next row writes, the previous row collapses to a one-word grey chip ("hot bulb", "dark room") above it. On "hot" row 1: "hot bulb" / "burns" / "don't touch while on; switch off, let it cool before moving", with the bulb pulsing and a coded switch on the supply. On "trip" row 2: "darkened room" / "trips, knocked equipment" / "clear floor and bench first; lights on before moving", with the room lights coming up briefly. On "break" row 3: "glass bulb" / "cuts if broken" / "clamp the holder; tell your teacher, don't pick up glass", with a coded clamp on the lamp's stand. Footer chip: "follow your school's risk assessment". Hold about 2 seconds; the safety points return in key note 5.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A light meter reads ninety-two lux at twenty-five point oh centimetres from a small lamp, and twenty-six lux at fifty point oh centimetres. With the lamp off, it reads four lux. Convert the distances to metres, find I r squared at each distance after subtracting the background, and explain whether the results support an inverse square relationship. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small table "distance (cm) 25.0, 50.0; reading (lux) 92, 26; lamp off: 4 lux": "In an investigation of light intensity and distance, a light meter gives the readings in the table. With the lamp switched off, the meter reads 4 lux. (a) Convert each distance to metres. (b) Calculate I r² at each distance, after subtracting the background reading. (c) Explain whether these results support an inverse square relationship. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> In metres, that's zero point two five and zero point five. Subtract four, and you get eighty-eight and twenty-two. Eighty-eight times zero point two five squared is five point five, and so is twenty-two times zero point five **squared**. They match, so the results support it, though two points aren't much evidence. The raw readings give five point seven five and six point five, which only seem to **disagree**.

Visual: card shrinks to the top; "lamp switched off" underlined. Rows: "(a) 0.250 m; 0.500 m"; "corrected: 92 − 4 = 88; 26 − 4 = 22"; on "squared" "(b) 88 × 0.250² = 5.50 lux m²; 22 × 0.500² = 5.50 lux m²", boxed; "(c) equal: supports I ∝ 1/r² (only two points)". On "disagree" a chip "raw: 5.75 and 6.50 differ, so it isn't inverse square" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A graph of light meter reading against one over r squared is a straight line, with a gradient of fifteen lux metres squared, that crosses the vertical axis at three lux. Explain what the intercept shows, and predict the meter reading at zero point five oh metres. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small plain graph (axes "reading I (lux)" and "1/r² (m⁻²)", a straight line crossing the vertical axis just above zero, labelled only "gradient 15 lux m²" and "intercept 3 lux"; no other lines): "In a light intensity investigation, a graph of the light meter reading I against 1/r² is a straight line with a gradient of 15 lux m² that crosses the vertical axis at 3 lux. (a) Explain what the intercept shows. (b) Predict the meter reading 0.50 m from the lamp. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The intercept is background light. Three lux reaches the sensor at every distance, but not from the lamp. At zero point five oh metres, one over r squared is four, so the lamp gives fifteen times four, sixty lux, and the meter reads sixty-**three**. Missing the origin doesn't mean the law fails. The lamp's own light still **follows** it.

Visual: card shrinks to the top; "crosses the vertical axis at 3 lux" underlined. Rows: boxed "(a) background light: 3 lux at every distance, not from the lamp"; "1/r² = 1 ÷ 0.50² = 4.0 m⁻²"; on "three" "(b) I = 15 × 4.0 + 3 = 63 lux", boxed. On "follows" a chip "the line misses the origin, so the light doesn't follow the inverse square law" fades in and is crossed. Hold about 1 second.

### 17. conclusion and handoff
> So measured light does follow the inverse square law, once we take away the background. Through all of this, the light travelled in straight lines from the lamp. But what happens when it meets a mirror? Why does it bounce off at the same angle it came **in**?

Visual: the memory line returns small at the top. The graph (illustrative tag) shrinks to the right with its "23.9 lux m²" readout and a conclusion chip "supports I ∝ 1/r² (0.20 to 0.70 m)". On "straight lines" faint gold photon dots run from the filament to the sensor along straight lines. On "a mirror" board change: the ray box plate (`phys-y11-ray-box-v1.png`) on a coded sheet of paper at the left sends a narrow coded beam to the plane mirror plate (`phys-y11-plane-mirror-v1.png`) standing on the paper; the beam leaves the mirror; a dashed grey line at right angles to the mirror at the point where the beam hits, and two grey angle arcs, one each side, each marked "?". On "in" chips "same angle?" and then "Next: Why does light leave a mirror at the same angle it arrives?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Variables: independent, the distance r from the filament to the sensor (in m); dependent, the meter reading; controlled, the same lamp and voltage, the sensor square-on at the filament's height, the same darkened room, black card against reflections.
2. Measure the background with the lamp off, before and after. Subtract it from every reading.
3. Two tests of I ∝ 1/r²: I r² stays the same; I against 1/r² is a straight line through the origin, gradient I r². Without the background subtracted, the line crosses the vertical axis at the background.
4. Outliers: find the cause, fix it, repeat the reading. A good fit supports the law over the tested range; it doesn't prove it.
5. Limitations: the hidden filament's position (worst close up), reflections, a drifting background. Safety: hot bulb, darkened room, glass.

Memory aid (large, on the notes screen): *Subtract the dark, then plot it straight.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why I r² and I against 1/r² test the law: both follow from I ∝ 1/r² (2). Why each control: its reason is said (3). Why ratios still work in lux: for one lamp, lux is proportional to intensity (4). Why an outlier is repeated, not deleted: its cause can be found and fixed (5). Why the raw products creep up: a constant background is a bigger share of a small reading, and a bigger r² multiplies it (6, 7, shown with share bars). Why the curve can't decide: many relationships fall; I r falls, so not 1/r (8). Why the uncorrected line misses the origin: the background (9). Why only "supports": one lamp, one range (10). Why the distance is the biggest limitation: a fixed ±0.5 cm is a large share of a small r, doubled by squaring (11). Why each risk control: tied to its harm (12).
- **Misconceptions addressed:** delete awkward readings (5); raw products disprove the law (6, 7, feedback 1 crossed); a falling curve shows inverse square (8); a line missing the origin disproves the law (9, feedback 2 crossed); a fit proves the law (10, crossed); lux is W m⁻² (4); predictions reported as results (every data item tagged illustrative; the curve tagged model prediction).
- **One idea at a time:** the model (1, 2), the set-up (3), the meter and units (4), repeats (5), the puzzle (6), its cause (7), graphs (8), gradient and intercept (9), conclusion (10), limitations (11), risks (12).
- **Video makes it easier:** the student watches the daylight strip cause the outlier and close (5), watches the I r² column warm, then cool once the background is subtracted (6, 7), watches the points re-space and line up as the axis changes (8), and watches the uncorrected line slide up by the background (9).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style data tasks, 10 seconds each with the full data on the card, nothing answer-bearing (A2's graph has no prediction marked). One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** variables, mean, range and outliers (v10), linearising and "supports, not proves" (fa1-v24), FA2 investigation routine (v11, v12) and the law itself (v16) are recalled with a phrase each.
- **Syllabus coverage:** `ci9327efb9`: conduct (3 to 5, 12), analyse the relationship between light intensity and distance (2, 6 to 10, A1, A2), with limitations (11). FA0 as the placement table.
- **Out of scope by design:** standard deviation (fa0-v05); log graphs; converting lux to W m⁻²; other light sources (LEDs, tubes).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "In an investigation of light intensity and distance, a light meter gives the readings in the table [25.0 cm: 92 lux; 50.0 cm: 26 lux]. With the lamp switched off, the meter reads 4 lux. (a) Convert each distance to metres. (b) Calculate I r² at each distance, after subtracting the background reading. (c) Explain whether these results support an inverse square relationship."
Model answer: (a) 25.0 cm = 0.250 m; 50.0 cm = 0.500 m. (b) Corrected readings 92 − 4 = 88 lux and 26 − 4 = 22 lux; I r² = 88 × 0.250² = 5.50 lux m² and 22 × 0.500² = 5.50 lux m². (c) If I ∝ 1/r², then I r² is the same at every distance; the two corrected values are equal, so the results support an inverse square relationship (doubling the distance gave a quarter of the corrected reading), although two points are not enough to establish it; more distances would test it more strongly. Classic mistake (crossed): "the raw products 5.75 and 6.50 differ, so it isn't inverse square".

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** "In a light intensity investigation, a graph of the light meter reading I against 1/r² is a straight line with a gradient of 15 lux m² that crosses the vertical axis at 3 lux. (a) Explain what the intercept shows. (b) Predict the meter reading 0.50 m from the lamp."
Model answer: (a) The intercept is the reading as 1/r² approaches zero (very far from the lamp): 3 lux reaches the sensor at every distance from sources other than the lamp (background light), so every reading is 3 lux higher than the lamp's own contribution; the lamp's light still follows I ∝ 1/r² (the line is straight). (b) At 0.50 m, 1/r² = 4.0 m⁻²; the lamp contributes 15 × 4.0 = 60 lux, so the meter reads 60 + 3 = 63 lux. Classic mistake (crossed): "the line misses the origin, so the light doesn't follow the inverse square law".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | about 600 at 0.20 m; model 150 at 0.40 m; measured corrected 149 | 1, 2, 7 |
| Background | 6 lux before and after | 4, 7, 9 |
| Units | 20.0 cm = 0.200 m; 1/r² = 25.0 m⁻² | 4 |
| Outlier (0.50 m) | 101, 131, 105; repeat 103; mean 103 ± 2 lux | 5 |
| Table (illustrative) | r 0.20 to 0.70 m; 1/r² 25.0, 11.1, 6.25, 4.00, 2.78, 2.04 m⁻²; means 604, 274, 155, 103, 72, 55 lux; ± 3, 3, 2, 2, 2, 1 | 5, 6, 8 |
| Raw I r² | 24.2, 24.7, 24.8, 25.8, 25.9, 27.0 lux m² | 6 |
| Background share | 1% at 0.20 m; 11% at 0.70 m | 7 |
| Corrected | 598, 268, 149, 97, 66, 49 lux; I r² 23.9, 24.1, 23.8, 24.3, 23.8, 24.0 (24.0 ± 1%) | 7, 10 |
| I × r (corrected) | 120, 80, 60, 49, 40, 34 | 8 |
| Fits | gradient 23.9 lux m²; corrected intercept 0.4 lux; uncorrected intercept 6.4 lux | 9, 17 |
| Distance uncertainty | ±0.5 cm: r ±2.5%, 1/r² ±5% at 0.20 m; ±0.7%, ±1.4% at 0.70 m | 11 |
| A1 | 25.0 cm, 50.0 cm; 92, 26, background 4 lux; 0.250, 0.500 m; 88, 22; 5.50, 5.50 lux m²; raw 5.75, 6.50 | 13, 14 |
| A2 | gradient 15 lux m²; intercept 3 lux; 4.0 m⁻²; 60 + 3 = 63 lux | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 1 ÷ 0.20², 0.30², 0.40², 0.50², 0.60², 0.70² = 25.0, 11.11, 6.25, 4.00, 2.778, 2.041 m⁻².
- Means (601 + 604 + 607) ÷ 3 = 604; 274; 155; 103; 72; 55. Half-ranges 3, 3, 2, 2, 2, 1. Outlier: 131 against (101 + 105) ÷ 2 = 103.
- Raw I r²: 604 × 0.04 = 24.16; 274 × 0.09 = 24.66; 155 × 0.16 = 24.80; 103 × 0.25 = 25.75; 72 × 0.36 = 25.92; 55 × 0.49 = 26.95.
- Corrected: 598 × 0.04 = 23.92; 268 × 0.09 = 24.12; 149 × 0.16 = 23.84; 97 × 0.25 = 24.25; 66 × 0.36 = 23.76; 49 × 0.49 = 24.01; mean 23.98; extremes −0.9% and +1.1%.
- Corrected I × r: 119.6, 80.4, 59.6, 48.5, 39.6, 34.3.
- Least squares against 1/r²: corrected gradient 23.93, intercept 0.413; raw gradient 23.93, intercept 6.413.
- 600 × (0.20 ÷ 0.40)² = 150. 6 ÷ 604 = 0.99%; 6 ÷ 55 = 10.9%.
- 0.005 ÷ 0.20 = 2.5%, × 2 = 5.0%; 0.005 ÷ 0.70 = 0.71%, × 2 = 1.43%.
- A1: 88 × 0.0625 = 5.50; 22 × 0.25 = 5.50; 92 × 0.0625 = 5.75; 26 × 0.25 = 6.50. A2: 1 ÷ 0.25 = 4.0; 15 × 4.0 = 60; + 3 = 63.
- Teacher note: a 12 V 24 W lamp about 300 lm; 300 ÷ 4π = 23.9 cd; 23.9 ÷ 0.20² = 597 lux.

## Safety facts check (self-check, 2 Nov; Codex to confirm)

- **Hot bulb.** A small filament lamp's glass reaches well over 100 °C within a minute of switching on and stays hot for minutes after. Controls: don't touch while on; switch off at the supply and let it cool (about 5 minutes) before moving or adjusting; keep paper and leads away from the bulb. Learner copy as scene 12.
- **Darkened room.** Moving in a dim room risks trips over bags and leads and knocking equipment off benches. Controls: clear the floor and bench before darkening; turn the lights on before moving around; tape leads flat (said in v11's and fa1-v24's rows; not repeated). Learner copy as scene 12.
- **Glass bulb.** A dropped or knocked bulb can shatter; hot glass also cracks if splashed. Controls: clamp the lamp's holder or stand; if it breaks, switch off, tell the teacher, don't pick up the glass (the teacher clears it with a brush and pan). Learner copy as scene 12.
- **Electrical (teacher note).** Use a 12 V school low-voltage supply; no mains-voltage lamp at the bench; check leads are undamaged. Not in learner copy.
- **Bright filament (teacher note).** Looking directly at a bright filament at close range is uncomfortable (glare); look at the meter, not the filament. Not in learner copy (no lasting harm expected from a small filament lamp; a laser would be different and is not used).
- Codex to confirm against NSW Department of Education science safety guidance (no specific prohibitions expected for this practical).

## Memory aid check

- **"Subtract the dark, then plot it straight."** Written for this lesson, extending fa1-v24's "Plot it straight, then read the gradient." Meaning, as said in scene 10: measure the background with the lamp off and take it away from every reading; then choose the axes that make the model a straight line (here I against 1/r²) and read the gradient. Assumptions checked: the background is constant during the run (checked before and after, said in 4 and 11); "the dark" means the lamp-off reading, not total darkness (shown with the 6 lux chip); the straight line tests the model only because I ∝ 1/r² predicts it (said in 2). It helps a new case: any measurement with a steady offset (a zero error on a meter, background counts in a later radiation experiment) can be planned with "subtract the offset, then linearise". Introduced after the background has been seen to explain the puzzle (6, 7) and the graph to work (8, 9).
- **Considered, not used:** "lights off first" (names only half the method).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,210 characters**, 18 scenes. Characters per scene (1 to 18): 255, 366, 515, 425, 477, 222, 406, 300, 358, 297, 443, 402, 383, 405, 295, 331, 255, 75. At 13.3 characters per second the speech is about 467 s; add about 20 s of holds and settling (the apparatus assembly in 1, the axis morph in 2, the meter settling in 4, the outlier and window strip in 5, the column fills in 6 and 7, the graph morph in 8, the ghost line in 9, the 2-second memory hold in 10, the wedge and cloth in 11, the 2-second risk hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 569 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. One practical point and five FA0 points in part fill it without padding. Revision 1 was first counted at 6,593 characters (about 598 s) and trimmed by root-safe cuts (shorter hook, controls, feedback 1 and intercept sentences; the 70 cm uncertainty is now on screen only). If the voiced preview still runs over 570 s, the next cut is the lux sentence pair in scene 4 (about 160 characters, open decision 3), then the bench-reflection sentence in scene 11 (about 85 characters; the cloth animation stays).

## Scene list and build ids

Lesson key `p-y11-fa2-v17` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v17` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v17` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, two-tests, set-up-variables, lux-background-units, repeats-outlier, table-puzzle, background-explained, two-graphs, gradient-intercept, conclusion-memory, limitations, risk, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and table-puzzle carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v16's last frame continues into scene 1 (camera continue: the same bench and curve); 1 to 2 camera continue (the curve's axis morphs); 2 to 3 camera push to the apparatus; 3 to 4 camera continue; 4 to 5 split board (apparatus left, number line right); 5 to 6 camera continue (number line to table); 6 to 7 camera continue (same table); 7 to 8 camera continue (table to graph); 8 to 9 to 10 camera continue (same graph); 10 to 11 split board; 11 to 12 board clear to the risk table; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and table-puzzle (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v17-learning-review.md`, `science_check` = `checks/p-y11-fa2-v17-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v13's `phys-y11-filament-lamp-v1.png` (scenes 1 to 5, 11, 12, 17): the source; its sidecar's filament centre is the distance line's origin.
- v11's `phys-y11-metre-rule-v1.png` (scenes 1, 3 to 5, 11): the distance scale (code draws the graduations).
- fa1-v10's `y11p-low-voltage-supply-v1.png` (read as `phys-y11-low-voltage-supply-v1.png`, root decision 4; scenes 1, 3, 4, 12): the coded switch sits on it.
- v18's `phys-y11-ray-box-v1.png` and `phys-y11-plane-mirror-v1.png` (scene 17; requested in v18's asset brief).
- **Considered, not used:** fa1-v24's `y11p-data-logger-v1.png` (a logger reads a sensor too, but a stand-alone light meter is what schools use for this practical and its screen shows lux directly); fa1-v24's `y11p-light-gate-v1.png` (a different sensor).

Need (new plates, Codex):
1. `phys-y11-light-meter-v1.png`: scenes 1, 3 to 7, 12. Essential (the readings come from its screen).
2. `phys-y11-light-sensor-head-v1.png`: scenes 1, 3 to 5, 11. Essential (it moves along the rule).

Coded: the switch, leads, scale graduations, distance line, carriage motion, meter digits, black card and cloth, window strip, number line, table, share bars, graphs, fit and ghost lines, wedge, reflection ray, risk table, the paper and beam in scene 17, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a table or graph, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **sensor carriage** on a rule (a plate that slides to named marks with a live distance line from a source point and a cm-to-m chip); **meter screen readout** (digits settling on a plate's screen rectangle from its sidecar; reused for later meters); fa1-v24's `ErrorBarPlot` (axis relabel and re-space morph, fit, intercept zoom, ghost lines) and `DataTable`; v16's photon dots.

## Codex asset brief (Year 11 Physics FA2 v17, light intensity investigation)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v17.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v13's filament lamp and v11's metre rule, at least 8 per cent clear margin, no text, labels, numbers, scale markings, logos, brand names, people, hands, faces, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch. Each plate gets a JSON sidecar with the named pixel coordinates.

1. **`phys-y11-light-meter-v1.png`**: a school digital light meter body standing on the bench, three-quarter front view: a small grey or dark blue plastic case with a blank dark rectangular display and two or three plain buttons (no symbols), a lead socket on its top edge. Sidecar: the display rectangle's four corners (the code writes the digits and "lux"); the socket point.
2. **`phys-y11-light-sensor-head-v1.png`**: the meter's separate light sensor, exactly side-on, facing left: a flat round sensor head (a white diffuser disc in a dark rim) held upright on a short post in a small block carriage that sits on a rule's edge; a lead leaving the back. Sidecar: the sensor face's centre (the distance line's end); the carriage's contact line and its front edge (the reading index); the lead's exit point.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the table's columns, the I r² columns and the fit readouts are computed from the same plotted means, and that the graph morph keeps each point's reading.
3. Confirm the physics and analysis claims: I ∝ 1/r² predicts I r² constant and I against 1/r² straight through the origin; lux is proportional to intensity for one lamp; a constant background raises raw I r² more at larger r and shifts the line up without changing its gradient; I against r falling does not by itself show inverse square; I r not constant rules out 1/r; the gradient is I r² (the reading at 1 m); a fit supports, not proves; the distance uncertainty doubles in 1/r².
4. Confirm every data item carries the "illustrative data" tag and is said to be illustrative, and that the model curve is tagged "model prediction" (route stop: predictions not reported as observations).
5. Confirm the safety facts under "Safety facts check" against NSW Department of Education science safety guidance.
6. Confirm the memory aid's assumptions are spoken (scenes 2, 4, 10).
7. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing.
8. Confirm the syllabus and FA0 quotes match the route JSON and the ledger exactly and no 2017-syllabus label appears (no "WS" outcome codes).
9. Confirm no person, hand, eye, face or body outline appears in any scene, card or plate.
10. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
11. Confirm the narration character count by script with the build parser rules.
12. Add site corrections 4 to 6 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Light Intensity and Distance Investigation: Testing the Inverse Square Law | Year 11 Physics

(Title length: 92 characters; root may shorten to "Light Intensity Investigation: Testing the Inverse Square Law | Year 11 Physics", 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson13.sa.html

The model says twice as far from a lamp gives a quarter of the light. Does a real measurement agree? See how to test the inverse square law in the lab: choose and justify the variables, use a light meter (and what lux means), measure and subtract the background light, convert units, deal with an outlier, then test the data two ways: does I r² stay the same, and is the graph of I against 1/r² a straight line through the origin? Learn what the gradient and intercept tell you, why a good fit supports but doesn't prove the law, the main limitations and how to fix them, and the risk assessment. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a laboratory experiment to analyse the relationship between light intensity and distance from a light source" (ci9327efb9)
Working scientifically (in part): "Explain patterns and trends, including inconsistencies in data and information" (ci7afa7b23); "Apply quantitative processes to data, including unit conversions" (ci21267953); "Interpret data and information to identify outliers, make predictions, explain results and draw conclusions" (ci8856aeb0); "Apply safe work practices and manage risks while conducting a scientific investigation" (ci6e7b9681); "Assess potential hazards and their associated risks to develop a risk assessment" (cif90164e3)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: The inverse square law for light (previous video). Next: The law of reflection.

#Year11Physics #Physics #Waves #InverseSquareLaw #HSCScience

## Open decisions

- **1. Route question (root).** The route's "Does measured light intensity follow an inverse square relationship?" is kept: it is v16's handoff chip and a single answerable question. Root to confirm in the route.
- **2. Handoff chip for v18.** v18's route question is a placeholder; v18's design rewrites it as "Why does light leave a mirror at the same angle it arrives?", and this video's chip uses that. Root aligns both if it changes.
- **3. Lux in learner copy.** One sentence keeps lux honest (not W m⁻²) without converting units. If the learning review finds it a distraction, it moves to a grey tag and the sentence is cut (about 160 characters; the video stays above 5,500).
- **4. Two site homes.** v16 and v17 both link to site lesson 13; v17's description could link to the lesson's `concept-three` anchor if the site supports anchors (as v10's link form).
- **5. FA0 placement.** As the table; root records v17's partial coverage.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v16, fa1-v24, v11 and v12 at Year 11 entry; check that the two tests feel like consequences of the law, not new rules; that lux is understood as "a different unit, same ratios"; that the outlier scene teaches "find the cause, then repeat" without implying data can be tidied; that the creeping-product puzzle is fair at 3 s; that the background share bars make the cause visible; that the curve-can't-decide point lands with the I × r column; that "illustrative" is clear and never confused with a result; that the risk rows are specific to this apparatus; that the cards give nothing away), then the Codex physics check (with the safety facts) and error check.
- The window strip (5), the I r² column tints and share bars (6, 7), the graph morph (8) and the parallel ghost line (9) carry the explanation; judge them at playback speed in the voiced preview. All readouts must come from the same data as the plotted points.
