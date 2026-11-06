# phys-y12-m5-v08: How can primary measurements test the horizontal-launch model?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ1-03`: conduct a practical investigation to collect primary data in order to validate the relationships derived above.

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v07, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v07, phys-y12-m5-v01, phys-y12-m5-v05

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Plan safe horizontal launch measurements, repeated ranges, height and range uncertainty, linearisation and comparison with the model. Separate supplied processing data from primary results. Stop before claiming a fit proves no systematic error.

Next: {'id': 'phys-y12-m5-v09', 'question': 'Why does a force turn an object more effectively at some angles?'}

Practical: Projectile primary investigation: horizontal launch, repeated range and height measurements

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson05.sa.html`, SHA256 `306416b4f7988dab0e9fa8592142380128e0139ce61e7f3e487843d1c622c0d1`. Section IDs: `l05-design-title`, `l05-collect-title`, `l05-graph-title`, `l05-error-title`.

### Additional source section `collect-and-process`

Read the exact source question/table in context; preserve all givens.

3 You’re here Collect and process the data 3 Results Table +5 XP Record your primary data here We just saw the method, 5 heights, 3 trials each, carbon paper landing marks. That raises a question: how should the results be organised to make analysis straightforward? This card answers it → a table with $\sqrt{h}$ pre-computed and uncertainty as half-spread of the three trials. Trial Height $h$ (m) $\sqrt{h}$ (m ½ ) Range $R_1$ (m) Range $R_2$ (m) Range $R_3$ (m) Mean Range $\bar{R}$ (m) Uncertainty (m) 1 2 3 4 5 Worked sample data (for processing practice only; this does not replace primary data): Height $h$ (m) $\sqrt{h}$ (m ½ ) Mean Range $\bar{R}$ (m) 0.10 0.316 0.32 0.20 0.447 0.45 0.30 0.548 0.55 0.40 0.632 0.64 0.50 0.707 0.71 Record raw distances to the precision justified by the measuring device. For an analogue scale with smallest division $d$, a typical reading uncertainty is $\pm d/2$; repeat half-spread describes trial scatter and is a different quantity. Results table must include: $h$, $\sqrt{h}$, three range trials, mean $\bar{R}$, and uncertainty $\Delta R = (R_\text{max} - R_\text{min})/2$. The $\sqrt{h}$ column is essential, it linearises the relationship for graphing. Pause, draw the results table with these column headings in your book before the next section. Fill the gap: To linearise the relationship $R = v_x\sqrt{2h/g}$, you should plot $R$ (vertical axis) versus (horizontal axis). Interactive Tool, Primary-data Plotter Open fullscreen ↗ Use the plotter to process measured or supplied data. Analysis

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- {"h": [0.1, 0.2, 0.3, 0.4, 0.5], "R": [0.32, 0.45, 0.55, 0.64, 0.71], "sqrtHFullPrecision": [0.31622776601683794, 0.4472135954999579, 0.5477225575051661, 0.6324555320336759, 0.7071067811865476], "originConstrainedSlope": 1.0070025099148079, "inferredSpeed": 2.2290950785859587, "note": "Processing practice, not primary observations. Fit uses unrounded square roots; a free-intercept fit answers a different question."}
- The five supplied heights and mean ranges are processing practice, not observed primary data from the learner. The site square-root values are rounded for display; calculations above use exact roots of the unchanged heights.
- The kit .798,.804,.808,.812,.818 m repetitions have mean 0.808 m and half-range.010 m. They are separately labelled simulated measurements, not the site table. Its h-versus-range-squared slope model is not the site R-versus-square-root-h graph.
- Repeats reduce uncertainty of an independent unbiased mean, not the intrinsic spread of individual trials or a systematic launch-angle/height error. A consistent4 cm shortfall is evidence to investigate model, measurement and conditions, not proof of one cause.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

A straight line is not enough: compare predicted gradient/intercept and uncertainty, control launch speed, state height/range definitions and examine launch angle/drag. Half-range is a rough spread measure, not a standard error or confidence interval.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Use m5-repeat-measurements and m5-slope-intervals only with their own explicit datasets/models or reparameterise. Phone/tripod and steel-ball plates fit context. The inspected spring-launcher plate is only a housing, and the stand plate lacks a full support assembly; neither establishes a functional safe apparatus. Code measurement arrows, table and graph. Ask the school to approve a complete method before filming.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

Three repeated ranges are0.70,0.72 and 0.74 m. Calculate mean and half-range. Does repetition alone establish accuracy?

**Worked answer:** Mean=.72 m; half-range=(.74-.70)/2=.02 m. No: a common offset can bias all readings, and this spread measure is not a confidence interval.

### Question 2

A horizontal-launch investigation plots range R in m against square root of drop height h in square-root m. The origin-constrained gradient is1.00 square-root m. Under R=u sqrt(2h/g), find u for g=9.8 m/s squared.

**Worked answer:** Gradient=u sqrt(2/g), so u=1.00 sqrt(9.8/2)=2.21359 m/s,2.21 m/s. A fit through the origin is an assumption that must be checked against zero offsets and uncertainty.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
