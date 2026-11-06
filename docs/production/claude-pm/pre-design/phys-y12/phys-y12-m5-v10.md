# phys-y12-m5-v10: How do clockwise and anticlockwise torques balance?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ2-05`: investigate the relationship between the rotation of mechanical systems and the applied torque
  - τ=r_(⊥)F=rFsinθ

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v09, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v09

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Use the uniform 3 m centre-pivot seesaw with 30 kg at 1.2 m and 25 kg at an unknown distance. Explain zero net torque separately from zero net force; do not infer support without beam weight. Stop before two-support beams.

Next: {'id': 'phys-y12-m5-v11', 'question': 'How can speed be constant while velocity keeps changing?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html`, SHA256 `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7`. Section IDs: `l06-equilibrium-title`.

### Source example `we-phys-y12-m5-l06-2`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 2 +5 XP on full reveal Seesaw in equilibrium. A uniform 3.0 m seesaw is pivoted at its centre. A 30 kg child sits 1.2 m left of the pivot. Where must a 25 kg child sit on the right to balance it? 1 Choose signs and a pivot Take anticlockwise as $+$ and moments about the central pivot. The pivot reaction then has zero moment because its line of action passes through the pivot. 2 Write the signed sum $\sum\tau=(30g)(1.2)-(25g)r_2=0$. The children’s weights act on opposite sides and produce opposite turning tendencies. 3 Solve $r_2=\dfrac{30g(1.2)}{25g}=\mathbf{1.44\text{ m}}$. $g$ cancels because both forces are weights in the same gravitational field. 4 Check feasibility The right half is only $1.50\text{ m}$ long, and $1.44\text{ m}<1.50\text{ m}$. A numerical answer outside the physical seesaw would reveal an impossible arrangement. 5 State the result The 25 kg child sits $\mathbf{1.44\text{ m}}$ to the right of the pivot. For complete static equilibrium, the support force must also make $\sum F_y=0$; the moment calculation alone establishes rotational equilibrium. Reveal next step Step 1 of 5

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- Balance magnitudes30g times 1.2=25g timesx, so x=1.44 m, within the1.5 m half-length. Uniform beam weight acts at its central pivot and contributes no torque about it.
- Uniform does not mean massless. The support force includes both children and the unspecified beam weight. Do not infer a numerical reaction from the given child masses alone.
- The existing kit light-beam 30 N at 2 m and 20 N at 3 m is a different dataset, not a substitute for the site seesaw.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

Zero net torque prevents angular acceleration, while zero net force prevents translational acceleration. Equilibrium does not mean every force or individual torque is zero. Choose a pivot before measuring distances.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse m5-beam-equilibrium with source distances and weight forces reconfigured. Represent the stated loads with coded mass markers rather than commissioning people art. The inspected slotted-mass plate can support an analogous apparatus demonstration only, not imply the original child problem had laboratory masses. Keep beam weight at the central pivot and distinguish the reaction.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is force times the shortest pivot-to-force-line distance. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A centre-pivot uniform beam has a20 kg load 0.60 m left of the pivot. Where should a15 kg load sit on the right for rotational equilibrium? Assume sufficient beam length.

**Worked answer:** 20g times 0.60=15g timesx, so x=.80 m. Beam weight has zero torque about its central pivot.

### Question 2

A light beam has a central pivot, a20 N downward force 1.5 m left and 30 N downward1.0 m right. Show rotational equilibrium and calculate support reaction.

**Worked answer:** Opposing torques are both30 N m, so net torque=0. Vertical equilibrium gives reaction=20+30=50 N up. The stated light-beam assumption excludes beam weight.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
