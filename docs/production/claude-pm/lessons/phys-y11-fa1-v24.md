# Year 11 Physics FA1 V24 (Physics 2025, Year 11, Focus Area 1): How does ramp angle change acceleration in a measured experiment? The incline investigation (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-v24`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: five new lab plates (track, trolley with flag, light gate, data logger, padded stop); v21's stand, boss and protractor reused (see Assets). All data in this video are illustrative and labelled so.

Narration 6,194 characters, 17 scenes, about 568 s (9.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-fourth video of the Year 11 Physics (2025) Focus Area 1 route, the last of the inclined-plane run (v25, First Nations use of inclined planes, is on cultural hold, so this video hands off to v26), and the third FA1 investigation after v10 and v15. Templates: `phys-y11-fa1-v10.md` (investigation format, FA0 placement table, risk scene), `bio-y11-fa1-v05.md` (practical format; the risk table shows only the spoken row), `phys-y11-fa1-v08.md` (physics format, coded graphs), `math-a12-d10.md` (section list); house conventions from `phys-y11-fa1-v21.md` to `phys-y11-fa1-v23.md` (Revision 1, written just before this one; v23's scene 14 frame is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v24.md` (method, illustrative data and FA0 proposals; every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson22.sa.html`, sections `apply-what-you-have-learned` (the practical design activity), `reading-the-results` (a against sin θ) and short-answer Q3; the problem-solving sections belong to v23. Route entry: `phys-y11-fa1-v24` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route start: "Start with Incline investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete incline investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next: "phys-y11-fa1-v25: How can I explain and apply first nations use of inclined planes?" (cultural hold: this design hands off to phys-y11-fa1-v26, "How can I explain and apply work and kinetic energy?", placeholder wording; open decision 1).

Owner rules applied: as v21 to v23 (2025 syllabus only; no people, hands or faces: the trolley is released by the code from a coded release pin; apparatus painted at native aspect; graphs, tables and readouts coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v22, v23 and v10 recalled in a sentence each). Investigation data are illustrative, labelled on screen and said aloud; predictions are labelled "model prediction" and never shown as results.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion on inclined planes"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA1-G4-07 `ci28f5581f`: "Conduct a laboratory experiment to analyse the relationship between the angle of an inclined plane and the acceleration of an object"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G2-01 `ci9ce164ec`, P25-FA0-G2-04 `cif90164e3`, P25-FA0-G4-03 `ci0fca96de`, P25-FA0-G5-03 `ci914a5e7e`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v23's handoff (the model-prediction curve a = g sin θ against θ, chip "prediction ≠ measurement"); the model's prediction and why it says to plot a against sin θ (linearising; the site's misconception "a is proportional to θ"); the set-up; independent, dependent and controlled variables and validity (`ci9ce164ec`); acceleration from two light gates; three repeats per angle, mean, range and half-range uncertainty (`ci914a5e7e`); a table and two graphs, chosen for purpose (`ci0fca96de`); gradient compared with g by percentage error; the intercept as rolling resistance; limitations and improvements; a three-row risk assessment (`cif90164e3`); two attempts (`ci28f5581f`). Not taught: standard deviation (fa0-v05 owns it, as v10 left it); gradient uncertainty from steepest and shallowest lines (fa0-v05 or a Year 12 investigation); the wheels' rotation and its effect on a (beyond Year 11; author note h); energy on the track (v26 onwards).

## Decisions

- **Learner question kept (route).** "How does ramp angle change acceleration in a measured experiment?" The answer, built in order: the model predicts a = g sin θ, so doubling the angle does not double a (1, 2); plotting a against sin θ turns the model into a straight line through the origin whose gradient should be g, so the experiment can test it with one number (2); a controlled set-up with angle as the only change (3); acceleration from two light gates (4); repeats give a mean and an uncertainty (5); the a against sin θ graph is straight and its gradient is 9.79 m s⁻², 0.1 per cent from g (6, 7); the intercept below the origin shows a small resisting force (7 to 9); limitations and improvements (10); risks (11).
- **The hook (site misconception 2, made a prediction).** "Double the ramp angle from 15° to 30°: does the acceleration double?" 3 s prediction; the model says it rises by sin 30° ÷ sin 15° = 1.93 times. The question leads straight into what to plot. The site's "Acceleration is directly proportional to the angle" misconception is answered by the model, and scene 6 shows honestly that over 5° to 30° the a against θ graph also looks nearly straight (sin θ ≈ θ in radians for small angles), so the reason to plot sin θ is that its gradient means something (g), not that the θ graph is visibly curved.
- **Illustrative data (pack data, extended; labelled).** The pack's hypothetical means are used exactly at 5°, 10°, 15° and 20° (0.82, 1.68, 2.51, 3.31 m s⁻²) and extended to 25° and 30° (4.11, 4.87) on the same model (a = g sin θ − 0.03), so the range of angles is wider. Three repeats per angle, symmetric about each mean, with half-ranges 0.03 to 0.06 m s⁻² (inside the pack's ±0.05 m s⁻², slightly wider at 30°). Said aloud in scene 5: "These numbers are illustrative, made up to show the method, not real results." On screen every table, graph and readout carries the grey tag "illustrative data". The best fit (least squares on the means) gives gradient 9.79 m s⁻² and intercept −0.03 m s⁻².
- **Measuring a (site activity: "a motion sensor or ... timing ... over a measured distance"; pack: two gates).** Two light gates 0.500 m apart; a 5.00 cm flag on the trolley; the logger gives each blocking time and the time between the middles of the two blockings. v = flag length ÷ blocking time; a = (v₂ − v₁) ÷ t (v06's definition). One run at 10° is shown in full (47.88 ms, 30.03 ms, 0.369 s: a = 1.68 m s⁻²). Timing middle to middle makes a = Δv ÷ Δt exact for constant acceleration, because a flag's average speed is the speed at the middle of its passage (author note b; grey tag only).
- **Variables and validity (`ci9ce164ec`, partial).** IV: angle (set with the boss on the stand, read on the protractor). DV: acceleration (from the gates). Controlled, each with its reason: same trolley and track (same rolling resistance), same release point and no push (every run from rest), same gates, positions and flag (same measurement). "Valid" glossed as "it really tests what we claim". "Experimental controls" left to fa0-v02, as v10 did.
- **Representations (`ci0fca96de`, partial; not named as a skill in v10).** The table with units in the headings and a sin θ column (5); the a against θ graph and the a against sin θ graph with uncertainty bars and a line of best fit (6), each chosen for what it shows. Spreadsheets, keys and models are not used here.
- **Uncertainty and error (`ci914a5e7e`, partial).** Mean, range and percentage error recalled from v10 in a phrase each; new here: half the range as a simple uncertainty, written "1.68 ± 0.04 m s⁻²", and drawn as bars on the graph (open decision 2: fa0-v05 placement). Standard deviation is not taught. A good fit is said to support, not prove, the model (pack misconception).
- **The intercept (site correction 1).** A constant resisting force lowers every a by about the same amount, so the line shifts down with about the same gradient and crosses the sin θ axis to the right of the origin. The site's Q3 says friction reduces the gradient; that is not what a constant or nearly constant resistance does (author note g).
- **Prediction 2 (3 s, scene 8).** "A rougher track: what happens to the line?" Shifts down, same gradient, crossing further right (9). It ties the graph to v22's idea that friction takes a share off g sin θ, shown as the shift, with no new algebra.
- **Limitations and improvements (`ci914a5e7e`, `ci7e38e278` applied).** (1) Angle reading: ±0.5° is ±10 per cent at 5° and ±1.7 per cent at 30°; improve by measuring sin θ directly as height ÷ length with a ruler (author note e). (2) Track sag: a long track can sag, so the angle varies along it; support it at a second point. (3) Six angles from 5° to 30°: more angles over a wider range would test the line more strongly. The flag-average issue is handled by middle-to-middle timing, so it is not listed as a limitation (author note b).
- **Risk assessment (`cif90164e3`, partial; site risk line and pack).** Three spoken rows, hazard, harm and control: (1) the raised track and stand (tipping, falling onto feet: clamp the track; stand base flat on the bench); (2) the fast trolley at the bottom (hits feet, leaves the bench, pinched fingers at the stop: clamped padded stop, floor below clear, fingers away from the stop); (3) light-gate leads (snag and drag equipment off the bench, trip: tape them flat, away from the track). Teacher notes, not shown: a low-voltage logger and gates (no mains at the track); keep angles at or below 30° for a 1.2 m track (the trolley reaches about 3.3 m s⁻¹ at the stop at 30°). Only the spoken row is shown; earlier rows collapse to one-word grey chips (v05, v10).
- **Attempts (original, HSC style).** (A1, data) Three trials at 12.0°: 1.95, 2.01, 1.98 m s⁻²: mean 1.98, range 0.06, uncertainty ±0.03 m s⁻²; model 9.80 sin 12.0° = 2.04 m s⁻²; percentage difference about 3 per cent; all three below the prediction beyond their spread, so systematic (rolling resistance). Crossed: "more trials will remove the difference". (A2, graph) Gradient 9.6 m s⁻² and intercept −0.05 m s⁻² for a against sin θ: predicted gradient g = 9.80 m s⁻² (because a = g sin θ); percentage error about 2 per cent; the negative intercept shows a resisting force that lowers every a by about 0.05 m s⁻². Crossed: "the trolley accelerates up the ramp when the track is level" (the intercept read as a real result at θ = 0). The pack's candidates (a = 2s ÷ t² from rest; mean and range of 1.5, 1.6, 1.7) are covered by scene 4's method and A1's data skills respectively; A1 uses new numbers.
- **Mistake scene:** none separate. "a is proportional to θ" (1, 2); "a good fit proves the model" (7); "repeats remove a systematic error" (feedback 1 crossed); "the intercept is a real reading at θ = 0" (feedback 2 crossed); "friction reduces the gradient" (9, site correction 1); "predictions reported as results" (all data labelled illustrative; the curve labelled model prediction).
- **Memory aid:** "Plot it straight, then read the gradient." (see "Memory aid check"), said in scene 9.
- **Handoff (cultural hold; open decision 1).** The trolley at the end of the track, a dashed purple arrow "mg sin θ" along the track and a grey displacement arrow "s" beside it, with "Next: work and kinetic energy". v25 is not designed (cultural hold). The handoff narration is one short sentence, recorded as its own take so it can be replaced if v25 is released before upload.
- **Site sources used:** misconception 2 (a ∝ θ: the hook); key terms (independent variable, dependent variable, reliability: scenes 3, 5); activity 1 (variables, measuring a, three repeats, the expected a against sin θ graph: scenes 3 to 6); card 3 (a against sin θ, gradient g, friction lowers the line: scenes 2, 6, 7, 9); the matching task (repeats improve reliability; light gates remove reaction time; same block and surface holds μ; a against sin θ gives gradient g: scenes 3 to 6); Q3 (variables and the a against sin θ line; its friction sentence corrected). The site's sliding block becomes a low-friction trolley (pack method), so the model is a = g sin θ with a small resistance, not a = g(sin θ − μ cos θ).
- **Site corrections (quoted from site lesson 22, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Short-answer Q3 model answer: "With real friction present the line is still straight but its gradient is reduced and it cuts the $\sin\theta$ axis at $\tan\theta = \mu$". With kinetic friction a = g sin θ − μg cos θ, so a against sin θ is not exactly straight, and its slope is g(1 + μ tan θ), slightly more than g, not less; at small angles it is close to a straight line of gradient g shifted down by about μg. Suggest: "With friction the points lie slightly below the frictionless line: for small angles the line is shifted down by about μg with a gradient close to g, and a = 0 where tan θ = μ."
  2. Card 3 and its key statement: "A consistent straight-line trend confirms that acceleration depends on $\sin\theta$ as the theory predicts." A fit within uncertainty supports a model; it does not confirm it. Suggest "supports".
  3. Key terms, reliability: "How consistent repeated measurements are; improved by repeating trials and averaging." Repeating trials lets you judge reliability (consistency) and averaging reduces the effect of random error on the mean; averaging does not make the individual measurements more consistent. Suggest: "Reliability: how consistent repeated measurements are. Repeat trials to check it; the mean of repeats reduces the effect of random error."
  4. "Where this sits": "(WS03)" and the activity's "WS03" badge. "WS03" is not a 2025 syllabus label (the 2025 Working scientifically content uses CMS codenames, not WS outcome numbers). Suggest removing the label or replacing it with the 2025 point's wording.
  - Checked and correct: the activity's method steps (s = ½at² from rest is valid); card 3's frictionless statement (a against sin θ through the origin with gradient g); the matching pairs; misconception 2 and its correction.
- **Pack questions answered:** the pack's method (secured track, measured angles, same trolley, no push, two gates, three repeats, a against sin θ compared with g, rolling resistance and angle uncertainty acknowledged, the risk controls) is adopted in full; the pack's illustrative means used exactly and extended; candidate questions covered as stated under Attempts.
- **Cause chain taught, in order:** (1) the model predicts sin θ, not θ (1, 2); (2) linearising makes the gradient g, a testable number (2); (3) controlled variables make angle the only cause (3); (4) light gates give two speeds and a time, so a (4); (5) repeats give a mean and an uncertainty (5); (6) the right graph is straight; the other hides the meaning (6); (7) gradient against g, percentage error, support not proof (7); (8) intercept below the origin: a resisting force (7, 8, 9); (9) limitations and improvements (10); (10) risks (11).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (fair tests, graph gradients). From FA1, recalled in a line each: v06 (a = Δv ÷ Δt), v10 (independent, dependent and controlled variables; mean, range, percentage error; random and systematic error; a gradient from a best-fit line), v22 (a = g sin θ on a smooth ramp; friction lowers it), v23 (the model-prediction curve).
- **Learner-visible vocabulary (plain meaning at first use):** linearising (choosing what to plot so the model gives a straight line, scene 2); independent, dependent, controlled variable (the one we change, the one we measure, the ones kept the same, scene 3, recalled from v10); valid (it really tests what we claim, scene 3); light gate (a beam across the track and a sensor; the logger records when and for how long the beam is blocked, scene 4); flag (a card on the trolley that blocks the beam, scene 4); uncertainty (how far the true value could reasonably be from our mean, scene 5); intercept (where the line crosses the vertical axis, scene 7); rolling resistance (a small backward force from the wheels and axles, scene 8); systematic error (recalled from v10: an error that shifts every result the same way, feedback 1).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` from `src/explainer/lessons/bio-m5-b13/shared.tsx` (row-at-a-time table; copy lesson-local, root decides on lifting it).
- **New explainer motion (coded unless a plate is named):** v21's **`TiltRamp`** with the track plate in place of the plank; **light-gate beam** (a thin red beam across each gate; it breaks while the flag passes; a millisecond timer runs during the break and freezes; a third timer runs between the two passage middles); **trolley run** (driven by s = ½at² from the release pin, slowed for readability with a tag); **table fill** (row at a time, cells writing as spoken); **two graphs** (a against θ, then a against sin θ, the points re-spacing horizontally as the axis changes, a morph rather than a cut); **uncertainty bars**; **best-fit line** drawing through the bars, with gradient and intercept readouts and the axis-crossing ringed; **rougher-track ghost line** (shifted down, same gradient); **angle-uncertainty wedge** (a thin amber wedge of ±0.5° at the protractor, its percentage readout at 5° and 30°); **h ÷ L dimension lines**; **risk table, one row at a time** (v05, v10); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small table or graph; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the apparatus across the upper left (track, stand, gates, logger), the logger's readouts beside it; tables and graphs in the right half; working under the graph.
- **No human figures.** The release is a coded pin that lifts; the stop catches the trolley.
- **Author notes (not learner copy):**
  (a) Apparatus geometry: track 1.20 m; release pin at 0; flag front reaches gate 1 at 0.300 m and gate 2 at 0.800 m from its start; padded stop at 1.10 m. Speed at the stop at 30°: √(2 × 4.87 × 1.10) = 3.27 m s⁻¹ (teacher note).
  (b) Light gates at 10° with a = 1.68 m s⁻² from rest, flag L = 0.0500 m: blocking at gate 1 from x = 0.300 to 0.350 m of the flag front: t = (√(2a × 0.350) − √(2a × 0.300)) ÷ a = 47.88 ms, so v₁ = L ÷ t = 1.044 m s⁻¹ (the speed at the middle time of that passage); gate 2 (0.800 to 0.850 m): 30.03 ms, v₂ = 1.665 m s⁻¹; time between the passage middles = (v₂ − v₁) ÷ a = 0.369 s. From the displayed values: (1.665 − 1.044) ÷ 0.369 = 1.682 = 1.68 m s⁻². The logger setting "middle to middle" is a grey tag; start-to-start timing would bias a by about 3 per cent here (not shown).
  (c) Repeats (illustrative): 5° 0.79, 0.82, 0.85; 10° 1.64, 1.68, 1.72; 15° 2.47, 2.51, 2.55; 20° 3.26, 3.31, 3.36; 25° 4.06, 4.11, 4.16; 30° 4.81, 4.87, 4.93 m s⁻². Means 0.82, 1.68, 2.51, 3.31, 4.11, 4.87; ranges 0.06, 0.08, 0.08, 0.10, 0.10, 0.12; half-ranges 0.03, 0.04, 0.04, 0.05, 0.05, 0.06. sin θ: 0.0872, 0.1736, 0.2588, 0.3420, 0.4226, 0.5000. Model g sin θ: 0.854, 1.702, 2.536, 3.352, 4.142, 4.900.
  (d) Fits on the means: a against sin θ: gradient 9.791 m s⁻², intercept −0.028 m s⁻² (shown "9.79" and "−0.03"); residuals within ±0.01 m s⁻². a against θ: gradient 0.162 m s⁻² per degree, intercept +0.05 m s⁻²; residuals up to ±0.04 m s⁻², inside the bars, which is why the θ graph also looks nearly straight. Percentage error (9.80 − 9.79) ÷ 9.80 × 100 = 0.09 per cent, said "about zero point one per cent". Axis crossing: sin θ = 0.028 ÷ 9.79 = 0.0029, θ = 0.17° (not stated).
  (e) Angle uncertainty: ±0.5° ÷ 5° = ±10 per cent; ±0.5° ÷ 30° = ±1.7 per cent (in sin θ: ±0.0087 at 5°, 10 per cent; ±0.0076 at 30°, 1.5 per cent). Improvement: two marks 1.000 m apart along the track, heights measured to ±1 mm: sin θ = Δh ÷ L to ±0.001 (at 5°, Δh = 0.0872 m: about 1 per cent).
  (f) Hook: sin 30° ÷ sin 15° = 1.932; at the data, 4.87 ÷ 2.51 = 1.94, consistent. sin 20° ÷ sin 10° = 1.970 (not shown).
  (g) Rougher track (9): with kinetic friction μ, a = g sin θ − μg cos θ; d a ÷ d(sin θ) = g(1 + μ tan θ) ≥ g; for small angles cos θ ≈ 1, so the line shifts down by about μg with gradient about g. The ghost line in scene 9 is drawn with the same gradient, shifted down by 0.30 m s⁻² (tag "illustrative").
  (h) A trolley's wheels also spin, which takes a small share of the energy and lowers a by a roughly constant fraction (the gradient falls slightly below g); not mentioned (beyond Year 11); the illustrative data are consistent with a negligible effect.
  (i) A1: mean (1.95 + 2.01 + 1.98) ÷ 3 = 1.98; range 0.06; ±0.03; 9.80 sin 12.0° = 2.0375 = 2.04; (2.04 − 1.98) ÷ 2.04 × 100 = 2.9 per cent (2.8 from unrounded values): "about 3 per cent". The difference (0.06) is twice the half-range, and all three trials are below.
  (j) A2: (9.80 − 9.6) ÷ 9.80 × 100 = 2.0 per cent ("about 2 per cent"; 9.6 is given to two figures). Intercept −0.05 m s⁻²: every a about 0.05 m s⁻² below g sin θ; crossing at sin θ = 0.05 ÷ 9.6 = 0.0052, θ = 0.30° (not asked).
  (k) Pronunciations: "a equals g sin theta"; "forty-seven point eight eight milliseconds"; "one point six eight, plus or minus zero point oh four"; "nine point seven nine"; "minus zero point oh three".

Main question: *Does doubling a ramp's angle double the acceleration of a trolley rolling down it? How does the angle change the acceleration when we actually measure it, and how sure can we be?*
Entry knowledge (Stage 5 fair tests and gradients; v06 a = Δv ÷ Δt; v10 investigation skills; v22 a = g sin θ; v23 the prediction curve).
Stops after: the model's prediction and the choice of graph; variables and validity; acceleration from two light gates; repeats, mean, range, half-range uncertainty; the table and both graphs; gradient against g by percentage error; the intercept as resistance; limitations with improvements; a three-row risk assessment; two attempts. No standard deviation, no gradient uncertainty, no energy.
Handoff: v26, work and kinetic energy (v25 on cultural hold).

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations); root fixes exact placement when designing fa1-v10." v10's design proposed partial coverage of nine points with the FA0 videos completing them. This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v24 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G2-01 `ci9ce164ec` | "Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation" | Scene 3: IV, DV, three controlled variables each with its reason; "valid" glossed | "Experimental controls" (fa0-v02, as v10) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 11: three hazard, harm, control rows for this apparatus | Likelihood and consequence rating (fa0-v02, as v10) |
| P25-FA0-G4-03 `ci0fca96de` | "Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, tables and spreadsheets" | Scenes 5 and 6: a table with units and a derived column; two graphs chosen for purpose (linearising); uncertainty bars; the set-up diagram | Keys, models, spreadsheets (fa0 skill video; later investigations) |
| P25-FA0-G5-03 `ci914a5e7e` | "Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation" | Scenes 5, 7, 10: mean, range, half-range uncertainty, percentage error; limitations with improvements; systematic against random error in A1 | Standard deviation and gradient uncertainty (fa0-v05) |

Applied, not re-taught (v10 taught them): P25-FA0-G2-02 `ci6c11c587` (reliable primary data: electronic timing, repeats, a wide range of angles), P25-FA0-G5-04 `ci15366d75` (accuracy against g; reliability from repeats), P25-FA0-G5-06 `ci7e38e278` (improvements matched to limitations, scene 10), P25-FA0-G5-07 `ci5a02ec2a` (three figures from the 5.00 cm flag and millisecond timing). Recommendation to root: accept the table, record it in the route as v24's partial FA0 coverage, and confirm whether fa0-v05 (standard deviation, uncertainty bars) precedes v24 in release; if not, this video's half-range bars are the learner's first uncertainty bars, which is acceptable at the level shown (open decision 2).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v10 and v21 to v23): measured points and their bars ink; the best-fit line teal; the model-prediction curve dashed grey and labelled "model prediction"; the rougher-track ghost line dashed terracotta; the light-gate beam red while unbroken and dark while broken; the angle and its uncertainty wedge amber; the weight component (handoff only) purple; givens navy; working ink; the "illustrative data" tag grey on every data item; crossed items red with a scribble cross.

### 1. hook (does double the angle mean double the acceleration?)
> Last time, our formula predicted how a crate speeds up on a steeper ramp. But a prediction isn't a measurement, so now we test one. A low-friction trolley on a track is almost frictionless, so the model predicts a equals g sin theta. If we double the ramp's angle, from fifteen degrees to thirty, does the acceleration **double**?

Visual: opens on v23's last frame (the dashed grey curve "a = g sin θ" against θ from 0° to 30°, labelled "model prediction (smooth trolley)", chip "prediction ≠ measurement", the "Next" chip). The "Next" chip becomes the heading: "The incline investigation". The graph shrinks to the right; at the upper left the apparatus assembles (author note a): the track plate (`y11p-dynamics-track-v1.png`) on v21's stand and boss, the protractor at the low end, the padded stop, two light gates on the track, the logger with leads; the trolley (`y11p-dynamics-trolley-v1.png`) at the release pin. The track tilts to 15°, then 30° (arcs). On the graph two points on the curve ring "15°" and "30°". On "double" chips "doubles?", "less than double?", "more than double?" and a 3-second countdown ring.

### 2. what the model says to plot
> Not quite. Sin thirty isn't twice sin fifteen, so the model predicts a rise of about one point nine **three** times. Acceleration follows sin theta, not the angle itself. So if a equals g sin theta, a graph of a against sin theta should be a straight line through the origin, with a gradient of g. Choosing what to plot so the model gives a straight line is called **linearising**. It means a trolley on a gentle ramp can measure g.

Visual: rows "sin 15° = 0.259", "sin 30° = 0.500", on "three" "0.500 ÷ 0.259 = 1.93 (not 2)"; the "less than double?" chip fills. A crossed chip "a ∝ θ". On "a graph of a against sin theta" the model curve's horizontal axis relabels from "θ (°)" to "sin θ" and stretches so the dashed curve straightens into a dashed line through the origin (still "model prediction"); a rise-run triangle on it reads "gradient = g = 9.80 m s⁻²". On "linearising" a gloss "linearise: choose axes so the model gives a straight line".

### 3. the set-up and its variables
> Here's the set-up: a track clamped to a stand, with a padded stop at the bottom. The angle is the independent variable, the one we change. The acceleration is the dependent variable, the one we measure. Everything else is controlled. The same trolley and track keep the rolling resistance the same. The same release point, with no push, means every run starts from rest. The same light gates, in the same places, measure every run the same way. So any change in acceleration comes from the angle, and the test is valid: it tests what we **claim**.

Visual: camera pushes to the apparatus. Labels draw as named: "stand and boss (sets the angle)", "protractor", "padded stop". A variables panel at the right, one row per sentence: "independent: angle θ" (the boss slides, the arc and protractor reading change); "dependent: acceleration a"; "controlled:" with three chips written as spoken, each with its reason and its part pulsing on the apparatus: "same trolley and track → same rolling resistance", "same release point, no push → starts from rest" (the release pin glows), "same gates, positions and flag → same measurement" (the gates glow). On "claim" a gloss "valid: it really tests what we claim".

### 4. measuring acceleration with two light gates
> A light gate shines a beam across the track, and a logger records how long a card on the trolley, called a flag, blocks it. The flag is five point oh oh centimetres long. At ten degrees, it blocks the first gate for forty-seven point eight eight milliseconds, so its speed there is one point oh four four metres per second. At the second gate, thirty point oh three milliseconds gives one point six six five metres per **second**. Between the gates, the logger times zero point three six nine seconds. Change in velocity over time gives a, one point six eight metres per second **squared**.

Visual: the track at 10°; a thin red beam across each gate; on "flag" the flag on the trolley glows (gloss "flag: a card that blocks the beam"; dimension "5.00 cm"). The pin lifts and the trolley runs (author note b; tag "slowed down"): at gate 1 the beam goes dark while the flag passes and a timer runs and freezes at "47.88 ms"; row "v₁ = 0.0500 m ÷ 0.04788 s = 1.044 m s⁻¹"; a between-gates timer starts at the passage's middle; at gate 2 "30.03 ms", on "second" "v₂ = 0.0500 ÷ 0.03003 = 1.665 m s⁻¹"; the between timer freezes at "0.369 s" (grey tag "timed middle to middle"). The trolley meets the padded stop. On "squared" `AlignedAlgebra` "a = (v₂ − v₁) ÷ t = (1.665 − 1.044) ÷ 0.369 = 1.68 m s⁻²", boxed, with a grey "illustrative data" tag.

### 5. repeats, the mean and the spread
> Each angle is run three times. These numbers are illustrative, made up to show the method, not real results. At ten degrees, we get one point six four, one point six eight and one point seven two. The mean is one point six eight. The range, highest minus lowest, is zero point oh **eight**. Half the range, zero point oh four, is a simple uncertainty: how far the true value could reasonably be from the mean. The table collects every angle, with units in the headings and a column for sin theta, ready to **plot**.

Visual: a large grey banner "illustrative data: not real results" writes first and then shrinks to a corner tag that stays on every data item to the end of scene 10. Three dots land on a short number line, "1.64", "1.68", "1.72"; a bracket spans them, on "eight" "range = 1.72 − 1.64 = 0.08"; rows "mean = 1.68 m s⁻²", "uncertainty ≈ ½ × range = 0.04 m s⁻²" (gloss "uncertainty: how far the true value could reasonably be from the mean"); boxed "a = 1.68 ± 0.04 m s⁻²". On "The table collects" the table fills row by row (author note c): headings "θ (°)", "sin θ", "trials a (m s⁻²)", "mean a (m s⁻²)", "± (m s⁻²)"; the 10° row lands from the number line; the other five rows write quickly; the sin θ column glows on "plot".

### 6. two graphs
> Plotted against theta, the points look almost straight, because for small angles sin theta is nearly proportional to theta. But that gradient matches nothing in the model. So plot a against sin theta, with each uncertainty as a small bar. The points line **up**, and a line of best fit passes through every bar.

Visual: right half: axes "a (m s⁻²)" against "θ (°)", 0 to 30°; the six means plot; a faint best-fit line with the readout "gradient 0.162 m s⁻² per °" and a grey "?" chip "matches nothing in the model". On "So plot a against sin theta" the horizontal axis relabels to "sin θ" (0 to 0.50) and the points re-space horizontally (a morph, author note d); vertical bars grow on each point (±0.03 to ±0.06). On "up" the teal line of best fit draws through all six bars.

### 7. the gradient and the intercept
> Its gradient is nine point seven nine metres per second **squared**. The accepted g is nine point eight oh, so the percentage error is about zero point one per cent. That supports the model, but it doesn't prove it. Small effects could still hide inside the uncertainty. And the line meets the vertical axis just below zero, at minus zero point oh three. That's the intercept. Every acceleration is a little less than g sin theta, by about the same **amount**.

Visual: a rise-run triangle on the teal line; on "squared" readout "gradient = 9.79 m s⁻²" boxed. Rows: "accepted g = 9.80 m s⁻²"; "percentage error = |9.80 − 9.79| ÷ 9.80 × 100 ≈ 0.1%". On "supports" a chip "the model is proved" fades in and is crossed (caption "supports, within uncertainty"). On "intercept" the region near the origin zooms (inset): the line passes just below (0, 0), ringed, readout "intercept = −0.03 m s⁻²" (gloss "intercept: where the line meets the vertical axis"). On "amount" the dashed grey model line "a = g sin θ" overlays: the teal line runs just under it, parallel, with small equal grey gaps marked at three points.

### 8. prediction: a rougher track
> That's rolling resistance, a small backward force from the wheels and axles. Predict: on a rougher track, what happens to the **line**?

Visual: the apparatus inset: a small terracotta arrow at the trolley's wheels pointing up the track, tag "rolling resistance (small)". On the graph the teal line and the dashed model line stay. On "line" chips "steeper?", "flatter?", "shifted down?" and a 3-second countdown ring.

### 9. reading the line
> It shifts down. Every acceleration drops by about the same amount, so the gradient stays close to g, and the line crosses the axis further right. So the gradient tests the model, and the intercept measures the resistance. The rule to remember: plot it straight, then read the **gradient**.

Visual: on "shifts down" a dashed terracotta ghost line (tag "rougher track, illustrative") draws parallel to the teal line, 0.30 m s⁻² lower (author note g); its crossing of the sin θ axis is ringed on "further right", with a grey arrow from the teal line's crossing to it. Two tags on the graph: "gradient → tests the model (g)" and "intercept → the resistance". On "gradient" the handwritten line writes large: "Plot it straight, then read the gradient." Hold about 2 seconds.

### 10. limitations and improvements
> The biggest limitation is the angle. Reading a protractor to half a degree is a ten per cent uncertainty at five degrees, but under two per cent at thirty. It's better to measure the height and length of the raised track, because sin theta is height over **length**. A long track can also sag in the middle, so support it at a second point. And more angles, over a wider range, would test the line more **strongly**.

Visual: the apparatus at 5°: a thin amber wedge of ±0.5° at the protractor, readout "±0.5° of 5° = ±10%"; the track swings to 30°, the same wedge, "±0.5° of 30° = ±1.7%". On "length" coded dimension lines appear on the track: "L = 1.000 m" along it between two marks, "h" vertically between the marks' heights, row "sin θ = h ÷ L" (tag "improvement: ±1 mm gives sin θ to ±0.001"). On "sag" the track plate's coded centre line bows slightly (exaggerated, tag "exaggerated"), then a second boss and crossbar slide in under its middle and it straightens. On "strongly" the graph gains faint dashed extra columns at 35°, 40° (tag "more angles: test the line further"). A limitations list builds at the right: "angle reading → measure h ÷ L", "track sag → support the middle", "six angles → more, wider range".

### 11. risk assessment
> The risk assessment. A raised track or its stand can **tip** onto feet, so clamp the track and keep the stand's base flat on the bench. At steep angles the trolley arrives **fast**, so clamp a padded stop at the end, keep the floor below clear, and keep fingers away from the stop. Leads can **snag** and drag equipment off the bench, so tape them flat, away from the track.

Visual: the risk table shows **only the row being spoken**, "Hazard / Harm / Control", in short wording; when the next row writes, the previous row collapses to a one-word grey chip ("stand", "trolley") above it. On "tip" row 1: "raised track and stand" / "tips or falls onto feet" / "clamp the track; stand base flat on the bench", with the clamp and the stand's base pulsing on the apparatus. On "fast" row 2: "fast trolley at the bottom" / "hits feet, leaves the bench, pinches fingers" / "clamped padded stop; floor below clear; fingers away from the stop", with the padded stop pulsing. On "snag" row 3: "light-gate leads" / "snag, drag equipment off, trip" / "tape leads flat, away from the track", with coded tape strips appearing on the leads. Footer chip: "follow your school's risk assessment". Hold about 2 seconds; the safety points return in key note 5.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A trolley is released from rest on a low-friction track at twelve point oh degrees. Three trials give one point nine five, two point oh one and one point nine eight metres per second squared. Find the mean, and its uncertainty as half the range. Find the percentage difference from the value predicted by a equals g sin theta, with g as nine point eight oh, and suggest a reason for the difference. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small table "trial 1, 2, 3: a (m s⁻²) 1.95, 2.01, 1.98": "A trolley is released from rest on a low-friction track inclined at 12.0°. Three trials give the accelerations in the table. (a) Calculate the mean acceleration and its uncertainty, taken as half the range. (b) Calculate the percentage difference between the mean and the value predicted by a = g sin θ, using g = 9.80 m s⁻². (c) Suggest a reason for the difference. (5 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The mean is one point nine eight, plus or minus zero point oh three, half the range. The model predicts nine point eight oh times sin twelve, two point oh four, so the difference is about three per **cent**. All three trials sit below the prediction, beyond their spread, so the error is systematic, most likely rolling resistance. More trials won't fix it. Repeats reduce random error, not a steady **bias**.

Visual: card shrinks to the top. Rows: "mean = (1.95 + 2.01 + 1.98) ÷ 3 = 1.98 m s⁻²"; "range = 2.01 − 1.95 = 0.06, so ± 0.03"; boxed "(a) 1.98 ± 0.03 m s⁻²"; "predicted = 9.80 × sin 12.0° = 2.04 m s⁻²"; on "cent" "(2.04 − 1.98) ÷ 2.04 × 100 ≈ 3%", boxed. A number line: the three trials and their bracket sit left of a dashed "2.04 prediction" mark (gloss "systematic: shifts every result the same way"). On "bias" a chip "more trials will remove the difference" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A graph of acceleration against sin theta is a straight line, with a gradient of nine point six metres per second squared and an intercept of minus zero point oh five. State the gradient the model predicts, calculate the percentage error, and explain what the negative intercept shows. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small plain graph (axes "a (m s⁻²)" and "sin θ", a straight line meeting the vertical axis just below zero, labelled only "gradient 9.6 m s⁻²" and "intercept −0.05 m s⁻²"; no model line): "In a similar investigation, a graph of acceleration a against sin θ is a straight line with a gradient of 9.6 m s⁻² and an intercept of −0.05 m s⁻². (a) State the gradient predicted by the model a = g sin θ, and calculate the percentage error of the measured gradient. (b) Explain what the negative intercept shows about the trolley. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The model predicts a gradient of g, nine point eight oh, so the percentage error is about two per **cent**. The negative intercept means every acceleration is less than g sin theta by about the same amount, so a small resisting force acts up the track. It doesn't mean the trolley speeds up the ramp when the track is **level**.

Visual: card shrinks to the top. Rows: "model gradient = g = 9.80 m s⁻²"; on "cent" "|9.80 − 9.6| ÷ 9.80 × 100 ≈ 2%", boxed "(a)". The card's graph gains a dashed grey "a = g sin θ" line just above the given line, equal small gaps marked; boxed "(b) every a is about 0.05 m s⁻² below g sin θ: a small resisting force (rolling resistance) acts up the track". On "level" a chip "at θ = 0 the trolley accelerates up the ramp" fades in and is crossed (caption "below the crossing, it doesn't move at all"). Hold about 1 second.

### 16. conclusion and handoff
> So the acceleration rises with the angle, in proportion to sin theta, not theta, and the gradient matches g within our uncertainty. So far, we've explained ramp motion with forces. Next, a new way to see the same motion: how a force along the motion changes an object's kinetic energy, its energy of **motion**.

Visual: the memory line returns small at the top. The graph (illustrative tag) shrinks to the right with its "9.79 m s⁻²" readout; a conclusion box writes: "a increases with θ, in proportion to sin θ; gradient 9.79 m s⁻², within 0.1% of g; intercept −0.03 m s⁻²: small resistance (illustrative data)". On "So far" the apparatus at 20° returns at the left with the trolley at the bottom; a dashed purple arrow "mg sin θ" along the track and a grey arrow "s" beside it (the distance travelled). On "motion" the chip "Next: work and kinetic energy". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Variables: independent, the angle θ; dependent, the acceleration a; controlled, the same trolley, track, release point (from rest, no push), gates and flag. Then the test is valid: it tests what it claims.
2. Two light gates: v = flag length ÷ blocking time at each gate; a = (v₂ − v₁) ÷ t between the gates.
3. Repeat each angle. Mean; range = highest − lowest; uncertainty ≈ ± half the range. Percentage error = |measured − accepted| ÷ accepted × 100.
4. The model a = g sin θ: plot a against sin θ (linearise). Gradient ≈ g; a small negative intercept shows a resisting force (rolling resistance). A good fit supports a model; it doesn't prove it.
5. Limitations: angle reading (worst at small angles; measure sin θ = h ÷ L), track sag, too few angles. Safety: clamp the track, padded stop, leads taped flat.

Memory aid (large, on the notes screen): *Plot it straight, then read the gradient.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why doubling θ doesn't double a: a follows sin θ (1, 2). Why plot sin θ: the model then predicts a straight line whose gradient is g (2, 6). Why control each variable: each control's reason is said (3). Why a from two gates: two speeds and the time between them (4). Why repeats: one run can't show spread (5). Why the θ graph misleads: it looks straight for small angles but its gradient means nothing in the model (6). Why the intercept is negative: a resisting force lowers every a (7 to 9). Why the angle is the biggest limitation: a fixed ±0.5° is a large share of a small angle (10). Why each risk control: each is tied to its harm (11).
- **Misconceptions addressed:** a ∝ θ (1, 2); a good fit proves the model (7, crossed); repeats remove a systematic error (feedback 1 crossed); the intercept as a reading at θ = 0 (feedback 2 crossed); friction lowers the gradient (9; site correction 1); predictions reported as observations (every data item tagged illustrative; the curve tagged model prediction).
- **One idea at a time:** the model (1, 2), the set-up (3), one measurement (4), repeats (5), graphs (6), gradient and intercept (7), the resistance (8, 9), limitations (10), risks (11).
- **Video makes it easier:** the student watches the model curve straighten as its axis changes to sin θ (2), watches the beam break and the timers freeze (4), watches three trials collapse into a mean and a bracket (5), watches the points re-space and line up between the two graphs (6), and watches the rougher-track line slide down parallel (9).
- **Response opportunity:** two 3 s predictions (1, 8); two unseen HSC-style data tasks, 10 seconds each with the full data on the card, nothing answer-bearing (A2's graph has no model line). One crossed mistake each; feedback about 31 s and 25 s.
- **Avoided double teaching:** variables, mean, range, percentage error and systematic error (v10) are recalled with a phrase each; a = g sin θ (v22) and the prediction curve (v23) are recalled.
- **Syllabus coverage:** `ci28f5581f`: conduct (3, 4, 5, 11), analyse the relationship between angle and acceleration (2, 6, 7, 9, 16, A1, A2). FA0 as the placement table.
- **Out of scope by design:** standard deviation, gradient uncertainty (fa0-v05); wheel rotation effects; energy (v26 onwards).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 5 marks suggested, not an official marking scheme).** "A trolley is released from rest on a low-friction track inclined at 12.0°. Three trials give the accelerations in the table [1.95, 2.01, 1.98 m s⁻²]. (a) Calculate the mean acceleration and its uncertainty, taken as half the range. (b) Calculate the percentage difference between the mean and the value predicted by a = g sin θ, using g = 9.80 m s⁻². (c) Suggest a reason for the difference."
Model answer: (a) Mean = (1.95 + 2.01 + 1.98) ÷ 3 = 1.98 m s⁻²; range = 2.01 − 1.95 = 0.06 m s⁻², so a = 1.98 ± 0.03 m s⁻². (b) Predicted a = 9.80 × sin 12.0° = 2.04 m s⁻²; percentage difference = (2.04 − 1.98) ÷ 2.04 × 100 ≈ 3% (2.8 to 2.9%). (c) All three trials are below the prediction by more than their spread, so the difference is systematic: most likely rolling resistance (or friction in the axles) acting up the track; a systematic error in reading the angle is also possible. Classic mistake (crossed): "more trials will remove the difference".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "In a similar investigation, a graph of acceleration a against sin θ is a straight line with a gradient of 9.6 m s⁻² and an intercept of −0.05 m s⁻². (a) State the gradient predicted by the model a = g sin θ, and calculate the percentage error of the measured gradient. (b) Explain what the negative intercept shows about the trolley."
Model answer: (a) The model predicts a = g sin θ, so the gradient should equal g = 9.80 m s⁻²; percentage error = |9.80 − 9.6| ÷ 9.80 × 100 ≈ 2%. (b) Every measured acceleration is lower than g sin θ by about 0.05 m s⁻², the same at each angle, which shows a small, roughly constant resisting force (rolling resistance, friction) acting up the track; the trolley needs a slight slope before it accelerates at all. Classic mistake (crossed): "at θ = 0 the trolley accelerates up the ramp".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | sin 15° 0.259; sin 30° 0.500; ratio 1.93 | 1, 2 |
| Light gates (10°) | flag 5.00 cm; 47.88 ms → 1.044 m s⁻¹; 30.03 ms → 1.665 m s⁻¹; 0.369 s; a 1.68 m s⁻² | 4 |
| Repeats (10°) | 1.64, 1.68, 1.72; mean 1.68; range 0.08; ± 0.04 | 5 |
| Table (illustrative) | θ 5 to 30°; sin θ 0.0872 to 0.5000; means 0.82, 1.68, 2.51, 3.31, 4.11, 4.87; ± 0.03 to 0.06 | 5, 6 |
| a against θ | gradient 0.162 m s⁻² per ° | 6 |
| a against sin θ | gradient 9.79 m s⁻²; percentage error about 0.1%; intercept −0.03 m s⁻² | 7, 9, 16 |
| Rougher track | ghost line 0.30 m s⁻² lower (illustrative) | 9 |
| Angle uncertainty | ±0.5°: 10% at 5°; 1.7% at 30°; h ÷ L to ±0.001 | 10 |
| A1 | 1.95, 2.01, 1.98; mean 1.98; range 0.06; ±0.03; predicted 2.04; about 3% | 12, 13 |
| A2 | gradient 9.6; intercept −0.05; predicted 9.80; about 2% | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- sin 5°, 10°, 15°, 20°, 25°, 30° = 0.08716, 0.17365, 0.25882, 0.34202, 0.42262, 0.50000; × 9.80 = 0.854, 1.702, 2.536, 3.352, 4.142, 4.900.
- 0.500 ÷ 0.2588 = 1.932; 4.87 ÷ 2.51 = 1.940.
- Gates (a = 1.68, L = 0.0500 m, fronts at 0.300 and 0.800 m): blocking 0.04788 s and 0.03003 s; v₁ = 1.0443, v₂ = 1.6650; Δt (middles) = 0.3693 s; (1.665 − 1.044) ÷ 0.369 = 1.682.
- Means, ranges and half-ranges as author note c.
- Least squares on (sin θ, mean a): gradient 9.7914, intercept −0.0284; on (θ, mean a): 0.16194 per degree, intercept 0.0493; (9.80 − 9.79) ÷ 9.80 = 0.09%.
- ±0.5 ÷ 5 = 10%; ±0.5 ÷ 30 = 1.67%.
- A1: 5.94 ÷ 3 = 1.98; 0.06; 9.80 sin 12° = 2.0375; (2.04 − 1.98) ÷ 2.04 = 2.94%; (2.0375 − 1.98) ÷ 2.0375 = 2.82%.
- A2: 0.2 ÷ 9.80 = 2.04%.
- Teacher note: √(2 × 4.87 × 1.10) = 3.27 m s⁻¹.

## Safety facts check (self-check, 2 Nov; Codex to confirm)

- **Raised track and stand.** An aluminium dynamics track raised on a retort stand can slide or tip the stand, especially at steep angles. Controls: clamp the track to the boss or a bench clamp; stand base flat on the bench, rod upright, base on the side the load leans; check before each angle change. Learner copy as scene 11.
- **Fast trolley at the end.** At 30° on a 1.2 m track the trolley reaches about 3.3 m s⁻¹ at the stop. Controls: a padded end stop clamped to the track; nothing and no one on the floor below the end; fingers away from the stop and wheels while the trolley runs; keep angles at or below 30° (teacher note). Learner copy as scene 11.
- **Leads.** Light-gate and logger leads across the bench can snag and drag apparatus off, and trip people near the bench. Controls: tape flat, route away from the track and the bench edge.
- **Electrical (teacher note).** Light gates and loggers are low-voltage (USB or a low-voltage supply); no mains at the track. Not in learner copy.
- Codex to confirm against NSW Department of Education science safety guidance (no specific prohibitions expected for this practical).

## Memory aid check

- **"Plot it straight, then read the gradient."** Written for this lesson. Meaning, as said in scene 9: when a model predicts a relationship, choose the axes that make the model a straight line (here a against sin θ), then the gradient (and intercept) can be compared with the model's constants. Assumptions checked: it only works when the model has the form y = kx (+ c), which a = g sin θ (with a constant resistance) does; the gradient means g only because of this model (said in scene 2); a straight fit supports the model within uncertainty, not proof (said in scene 7). It helps a new case: any later investigation with a model (v31's momentum, FA2 waves, v10's s against t²) can be planned by asking "what do I plot to make the model straight?". Introduced after the graph has been seen to work (6, 7).
- **Considered, not used:** "sin, not theta" (true here but too narrow to transfer).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,194 characters**, 17 scenes. Characters per scene (1 to 17): 326, 424, 543, 582, 507, 307, 452, 131, 285, 408, 362, 431, 401, 317, 320, 307, 75. At 13.3 characters per second the speech is about 466 s; add about 20 s of holds and settling (the apparatus assembly in 1, the axis morph in 2, the trolley run and timers in 4, the table fill in 5, the graph morph and fit in 6, the ghost line and 2-second memory hold in 9, the wedge and sag in 10, the 2-second risk hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 568 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. One practical point and four FA0 points in part fill it without padding.

## Scene list and build ids

Lesson key `p-y11-v24` (route phys-y11-fa1-v24). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v24` and build folder `docs/production/claude-pm/lessons/p-y11-v24` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, what-to-plot, set-up-variables, light-gates, repeats-uncertainty, two-graphs, gradient-intercept, rougher-prediction, reading-the-line, limitations, risk, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and rougher-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v23's last frame continues into scene 1 (camera continue: the same prediction curve); 1 to 2 camera continue (the curve's axis morphs); 2 to 3 camera push to the apparatus; 3 to 4 camera continue; 4 to 5 split board (apparatus left, number line and table right); 5 to 6 camera continue (table to graph); 6 to 7 to 8 to 9 camera continue (same graph); 9 to 10 split board; 10 to 11 board clear to the risk table; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and rougher-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v24-learning-review.md`, `science_check` = `checks/p-y11-v24-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched):
- v21's `y11p-retort-stand-v1.png`, `y11p-boss-crossbar-v1.png` (two copies in scene 10) and `y11p-protractor-v1.png`: the raised end, the mid support and the angle scale.
- **Considered, not used:** `public/assets/chemistry/m6-burette-clamp-stand-v1.png` (burette clamp: chemistry); v03's requested `phys-y11-cart-side-v1.png` (a wheeled cart for rope pulls, not a low-friction lab trolley with a flag).

Need (new plates, Codex):
1. `y11p-dynamics-track-v1.png`: scenes 1, 3, 4, 10, 11, 16. Essential.
2. `y11p-dynamics-trolley-v1.png`: scenes 1, 3, 4, 8, 16. Essential (with its flag).
3. `y11p-light-gate-v1.png`: scenes 1, 3, 4, 11 (two copies). Essential.
4. `y11p-data-logger-v1.png`: scenes 1, 3, 4, 11. Essential (the source of the readings).
5. `y11p-padded-stop-v1.png`: scenes 1, 3, 4, 11. Essential (a risk control on screen).

Coded: the release pin; the leads and tape strips; the beams and timers; the logger's screen readouts; the number line, bracket and table; both graphs, bars, fit lines, readouts and the ghost line; the angle wedge; the dimension lines; the risk table; the force and displacement arrows in scene 16; `AlignedAlgebra`; `Countdown`; `QuestionCard` with a table or graph; `Chip` with `cross`; `KeyNotes`; `Heading`.

Kit gaps (for the build brief):
1. **`LightGate`** (new, physics; reusable for v31): a beam between the gate plate's arms that breaks while a flag's extent overlaps it, a blocking timer per gate and a between-gates timer (middle to middle), all computed from the same s(t) as the trolley.
2. **`ErrorBarPlot`** (new, maths or physics): points with vertical bars, a least-squares line computed from the plotted data, gradient and intercept readouts, an intercept zoom, an axis relabel and re-space morph between two x-variables, and ghost lines.
3. `TiltRamp` (v21) accepting the track plate; `DataTable` (copy of the bio-m5-b13 lesson-local part) and v05's row-at-a-time risk table, lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA1 v24, incline investigation apparatus)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v24.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png` and v21's ramp kit, at least 8 per cent clear margin, no text, labels, numbers, scale markings, brand names, people, hands, faces, backdrop, bench, floor, glow or ground shadow. Keep the native aspect; never stretch. Each plate gets a JSON sidecar with the named pixel coordinates (the code places and rotates by them). All side views are exactly side-on, so the code can rotate them to the track angle.

1. **`y11p-dynamics-track-v1.png`**: a school aluminium dynamics track, side view, horizontal, long and slim (about 20 : 1), satin grey metal with a shallow running channel along its top edge and one small adjustable foot near the low end; plain ends. Sidecar: the top running line's two end points; the underside line.
2. **`y11p-dynamics-trolley-v1.png`**: a low-friction lab dynamics trolley, side view, facing right, a low rectangular body (blue or red plastic with a metal edge) on two visible wheels, and a plain, upright white card flag fixed in a slot on top (the flag a clean rectangle, about a quarter of the body length, no markings). Sidecar: the wheel contact line; the flag's leading and trailing edges; the body's centre.
3. **`y11p-light-gate-v1.png`**: a U-shaped light gate seen side-on (the opening facing the viewer is not needed: show it from the side as it straddles a track, its two arms above and below the running line), black plastic, on a short metal stem with a small clamp foot that fixes to the track's side; a small round lens mark on each arm. Sidecar: the beam's centre point (between the arms); the clamp foot's contact point.
4. **`y11p-data-logger-v1.png`**: a small school data logger or interface box, three-quarter front view acceptable (it sits on the bench line beside the track), grey with a blank dark rectangular screen and two plain sockets, no buttons with symbols. Sidecar: the screen rectangle; the two socket centres.
5. **`y11p-padded-stop-v1.png`**: a track end stop, side view: a small metal bracket that clamps on the track end with a thick, soft foam pad (dark grey or orange) facing up the track. Sidecar: the pad's contact face; the clamp's fixing point on the track line.

Reused from v21's request (no new request): the stand, boss with crossbar and protractor.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the light-gate run's displayed times are consistent with a = 1.68 m s⁻² from rest (author note b), that the trolley and timers are driven by the same s(t), and that the fit readouts are computed from the plotted means.
3. Confirm the physics and analysis claims: a = g sin θ for a low-friction trolley (small resistance); a against sin θ linear with gradient g; a against θ not proportional; a constant resistance shifts the line down with about the same gradient; middle-to-middle timing gives a = Δv ÷ Δt exactly for constant acceleration; half the range as a simple uncertainty; percentage error as defined; a fit supports, not proves.
4. Confirm every data item carries the "illustrative data" tag and is said to be illustrative, and that the model curve is tagged "model prediction" (route stop: predictions not reported as observations).
5. Confirm the safety facts under "Safety facts check" against NSW Department of Education science safety guidance.
6. Confirm the memory aid's assumptions are spoken (scenes 2, 7, 9).
7. Confirm both attempt questions are original in wording, carry all their data on the card, and show nothing answer-bearing.
8. Confirm the syllabus and FA0 quotes match the route JSON and the ledger exactly and no 2017-syllabus label appears (no "WS" outcome codes).
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.
11. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Inclined Plane Investigation: How Angle Affects Acceleration | Year 11 Physics

(Title length: 78 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson22.sa.html

Does doubling a ramp's angle double the acceleration of a trolley rolling down it? Not quite: the model says a = g sin θ. See how to test it in the lab: choose and justify the variables, measure acceleration with two light gates, repeat each angle and find the mean, range and uncertainty, then plot acceleration against sin θ so the gradient should equal g. Learn why a good fit supports a model but doesn't prove it, what a negative intercept tells you about rolling resistance, the main limitations and how to fix them, and the risk assessment. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a laboratory experiment to analyse the relationship between the angle of an inclined plane and the acceleration of an object" (ci28f5581f)
Working scientifically (in part): "Justify the use of independent, dependent and controlled variables, and experimental controls in a valid scientific investigation" (ci9ce164ec); "Assess potential hazards and their associated risks to develop a risk assessment" (cif90164e3); "Select and use a range of representations to organise data and information, including graphs, keys, models, diagrams, tables and spreadsheets" (ci0fca96de); "Assess error, uncertainty and limitations in data and include calculations of percentage error, range, mean and standard deviation" (ci914a5e7e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Solving ramp problems (previous video). Next: Work and kinetic energy.

#Year11Physics #Physics #InclinedPlanes #HSCScience

## Open decisions

- **1. Handoff past the cultural hold (root and owner).** Route next is phys-y11-fa1-v25 (First Nations use of inclined planes), on cultural hold and not designed. This design hands off to phys-y11-fa1-v26 (work and kinetic energy; its route question is a placeholder, "How can I explain and apply work and kinetic energy?"; proposed causal form for root: "How does a force along the motion change an object's kinetic energy?"). The handoff sentence ("Next, we'll look at the same motion a new way ...") and the "Next" chip are a separate take and a separate chip, so if v25 is released before this video is uploaded, only that sentence and chip change. Playlist order keeps v25 between v24 and v26 regardless.
- **2. Uncertainty bars before fa0-v05.** v10 left uncertainty bars to fa0-v05. This video draws half-range bars because the stop requires evaluating uncertainty and the graph needs them. If root places fa0-v05 before v24's release, scene 6's bars become a recall; if not, they are introduced here at the simple level shown. Standard deviation stays with fa0-v05 either way.
- **3. Route refinement (adopted from the pack; root to record).** The pack proposes "Start with the predicted angle dependence. Stop after a controlled measurement, graph and evaluation of uncertainty; hand on to the next route topic." Adopted, with the next topic being v26 (open decision 1).
- **4. Data extension.** The pack's four illustrative angles are extended to six (25° and 30° added on the same model). Root to confirm.
- **5. Site link form.** As v08; the practical's site home is lesson 22 (shared with v23).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10, v22 and v23 at Year 11 entry; check that the hook's "not quite double" leads naturally to "plot sin θ"; that "linearise" lands with a picture; that each control's reason is heard; that the light-gate arithmetic is followable at speaking pace; that "illustrative" is clear and never confused with a result; that "supports, not proves" is understood; that the rougher-track prediction is fair; that the risk rows are specific to this apparatus; that the cards give nothing away), then the Codex physics check (with the safety facts) and error check.
- The axis morph (2), the beam timers (4), the graph re-spacing (6) and the parallel ghost line (9) carry the explanation; judge them at playback speed in the voiced preview. All readouts must come from the same data and functions as the plotted points.
