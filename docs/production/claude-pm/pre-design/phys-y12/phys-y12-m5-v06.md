# phys-y12-m5-v06: Will a projectile clear a wall at a known horizontal position?

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
- `P5-IQ1-04`: solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v05, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v05

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Keep the 18 m/s,35-degree,15 m cliff,25 m wall position and 8 m wall height. Calculate time to wall, displacement, absolute height and clearance without premature rounding. Stop before landing range.

Next: {'id': 'phys-y12-m5-v07', 'question': 'Why can two launch angles reach the same target?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a`. Section IDs: `l03-obstacle-title`.

### Source example `we-3`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

PROBLEM 3 · UNEVEN GROUND A ball is kicked at $18\ \text{m/s}$ at $35°$ above horizontal from the edge of a cliff that is 15 m above sea level. A wall stands 25 m horizontally from the cliff edge and is 8 m high (measured from sea level). Does the ball clear the wall? If so, by how much? 1 GIVEN: $v = 18\ \text{m/s}$, $\theta = 35°$, cliff $= 15\ \text{m}$, wall distance $= 25\ \text{m}$, wall height $= 8\ \text{m}$, $g = 9.8\ \text{m/s}^2$ Components: $v_x = 18\cos(35°) = 14.7\ \text{m/s}$, $v_y = 18\sin(35°) = 10.3\ \text{m/s}$ Launch and landing heights differ, the range equation does NOT apply. Use equations of motion. 2 Step 1, Time to reach wall: $$t = \frac{s_x}{v_x} = \frac{25}{18\cos 35°} = \frac{25}{14.74} = 1.70\ \text{s}$$ Horizontal motion is uniform: $s_x = v_x t$, so $t = s_x/v_x$. 3 Step 2, Vertical displacement at $t = 1.70$ s: $$s_y = 18\sin 35° \times 1.70 + \tfrac{1}{2}(-9.8)(1.70)^2$$$$s_y = 10.32 \times 1.70 - 4.9 \times 2.89 = 17.5 - 14.2 = 3.3\ \text{m}$$The ball is 3.3 m above the cliff edge at the wall. $s_y = v_y t + \frac{1}{2}(-g)t^2$ gives displacement above the launch point. 4 Step 3, Height above sea level: $15 + 3.3 = 18.3\ \text{m}$ Step 4, Clearance above wall: $$\text{Clearance} = 18.3 - 8 = \mathbf{10.3\ \text{m}}$$The ball clears the wall by approximately $\mathbf{10.3\ \text{m}}$. Add the cliff height to get absolute height above sea level, then compare with the wall height. 1 of 4 Reveal next step →

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- {"ux": 14.744736797201853, "uy": 10.324375854318829, "time": 1.695520262168689, "displacement": 3.418722554062299, "absoluteHeight": 18.4187225540623, "clearance": 10.418722554062299}
- The source substitutes rounded 1.70 s and subtracts separately rounded 17.5 and 14.2, giving 3.3 instead of 3.418723 m. Correct absolute height 18.418723 m and clearance 10.418723 m. Report 10.4 m at 3 significant figures. Keep all original givens.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

Time to a wall comes from its horizontal position, not total flight time. Vertical displacement relative to the cliff is not absolute height above sea level. Clearance subtracts wall height only after using a common datum.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse m5-obstacle-clearance, which already uses the exact 18/35/15/25/8 source configuration and correct18.42 m height. Retain the sea-level datum, cliff height and wall top together. Move the projectile to the wall only at the matching physical time.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A ball launches at 20.0 m/s,30 degrees from a platform2.0 m high. A3.0 m wall is20.0 m away horizontally. Use g=9.8 m/s squared. Does it clear the wall, and by how much?

**Worked answer:** ux=17.3205 m/s; t=1.15470 s. Clearance=2+10t-4.9t squared-3=4.01367 m, about 4.01 m. Yes.

### Question 2

A ball launches horizontally at 10.0 m/s from 20.0 m above ground. A10.0 m wall is10.0 m away. With g=9.8 m/s squared find clearance.

**Worked answer:** t=1.00 s; height=20-4.9=15.1 m; clearance=5.1 m. The wall height and launch height use the same ground datum.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
