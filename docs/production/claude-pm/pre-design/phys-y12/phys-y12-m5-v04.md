# phys-y12-m5-v04: Why do complementary launch angles have the same level-ground range?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ1-02`: apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:
  - initial velocity
  - launch angle
  - maximum height
  - time of flight
  - final velocity
  - launch height
  - horizontal range of the projectile (ACSPH099)

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v03, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v03

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Derive R=u squared sin(2theta)/g; compare 15 m/s at 30,45,60 degrees and 25 m/s at 25/65 degrees. Explain why times differ. Stop before unequal heights.

Next: {'id': 'phys-y12-m5-v05', 'question': 'How do we find the landing point when launch and landing heights differ?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`. Section IDs: `l02-range-title`, `l02-complementary-title`.

### Source example `we-phys-y12-m5-l02-1`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 1 +5 XP on full reveal Comparing ranges. A point projectile is launched at 15 m/s from and onto level ground. Find its range at 30°, 45° and 60°. Take $g=9.8\ \text{m/s}^2$ and neglect air resistance. 1 Check the formula conditions Launch height equals landing height; $g$ is uniform; drag is neglected. These conditions permit the level-ground shortcut $R=v^2\sin(2\theta)/g$. 2 Calculate the 30° range $R_{30}=\dfrac{15^2\sin60°}{9.8}=\mathbf{19.9\text{ m}}$. The range equation doubles the launch angle inside the sine function. 3 Calculate the 45° range $R_{45}=\dfrac{15^2\sin90°}{9.8}=\mathbf{23.0\text{ m}}$. $\sin90°=1$, the greatest possible value of the sine function. 4 Calculate the 60° range $R_{60}=\dfrac{15^2\sin120°}{9.8}=\mathbf{19.9\text{ m}}$. $\sin120°=\sin60°$, so the complementary launches have equal ranges. 5 Compare and conclude $R_{30}=R_{60}=19.9\text{ m}$; $R_{45}=23.0\text{ m}$ is greatest. At fixed speed on level ground, 45° maximises range. Equal range does not imply equal flight time. Reveal next step Step 1 of 5

### Source example `we-phys-y12-m5-l02-2`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 2 +5 XP on full reveal Complementary angles. A point projectile is launched at 25 m/s from and onto level ground. Show that 25° and 65° give the same range. Take $g=9.8\ \text{m/s}^2$ and neglect air resistance. 1 Identify the relationship $25°+65°=90°$, so the launch angles are complementary. For the level-ground model, complementary angles produce equal values of $\sin(2\theta)$. 2 Calculate at 25° $R_{25}=\dfrac{25^2\sin50°}{9.8}=\mathbf{48.9\text{ m}}$. Use the same initial speed and gravitational acceleration for both launches. 3 Calculate at 65° $R_{65}=\dfrac{25^2\sin130°}{9.8}=\mathbf{48.9\text{ m}}$. $\sin130°=\sin50°=0.766$ to three significant figures. 4 Compare the flight times $t=2v\sin\theta/g$, so $t_{65}>t_{25}$. The 65° launch has the larger vertical component and remains airborne longer. 5 State the conclusion precisely Both ranges are $\mathbf{48.9\text{ m}}$, but their trajectories and flight times differ. Equal horizontal displacement does not mean the two motions are identical. Reveal next step Step 1 of 5

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- 15 m/s: ranges at 30,45,60 degrees are19.883236,22.959184,19.883236 m. 25 m/s at 25/65 degrees gives48.854875 m in each case.
- Equal ranges do not mean equal peak heights or times; the larger angle has larger uy. The angle 45 degrees is optimal only under the equal-level, fixed-speed, no-drag conditions.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

Do not apply the equal-level range formula to a cliff landing. Complementary angles have equal sin2theta, not equal sin theta or cos theta.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

m5-launch-angle and m5-range-derivation provide controlled comparisons. Retain exact equal endpoints and mark different flight durations. Compare separate launches with labelled physical clocks if playback duration is normalised.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

At14.0 m/s on level ground with g=9.8 m/s squared, calculate ranges at 30,45 and 60 degrees.

**Worked answer:** R=20 sin2theta m:17.3205 m,20.0 m,17.3205 m. Thus30/60 are equal,45 greatest.

### Question 2

At a fixed angle and equal launch/landing levels, launch speed doubles. State the ratios of flight time, maximum height and range and justify from the equations.

**Worked answer:** T ratio2, H ratio4, R ratio4. T=2u sin theta/g is linear in u; H=u squared sin squared theta/(2g) and R=u squared sin2theta/g are quadratic.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
