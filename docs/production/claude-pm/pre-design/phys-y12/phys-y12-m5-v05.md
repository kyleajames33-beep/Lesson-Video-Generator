# phys-y12-m5-v05: How do we find the landing point when launch and landing heights differ?

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

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v04, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v04

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Solve the vertical quadratic for the positive landing time at h=30 m, u=20 m/s for 30,45,60 degrees. Explain why 45 degrees need not maximise range; defer calculus optimisation.

Next: {'id': 'phys-y12-m5-v06', 'question': 'Will a projectile clear a wall at a known horizontal position?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`. Section IDs: `l02-height-title`, `l02-evaluate-title`.

### Source example `we-phys-y12-m5-l02-3`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 3 +5 XP on full reveal Launching above the landing point. A point projectile is launched from a 30 m cliff at 20 m/s. Compare its range at 30°, 45° and 60°. Take $g=9.8\ \text{m/s}^2$ and neglect air resistance. 1 Select the unequal-height method $t=\dfrac{v\sin\theta+\sqrt{v^2\sin^2\theta+2gh}}{g}$, then $R=v\cos\theta\,t$. The level-ground range shortcut is invalid because the vertical displacement is $s_y=-30\text{ m}$. 2 Calculate at 30° $t=\dfrac{10.0+\sqrt{100+588}}{9.8}=3.70\text{ s}$ $R=20\cos30°(3.70)=\mathbf{64.0\text{ m}}$. Use the positive root because elapsed time after launch must be positive. 3 Calculate at 45° $t=\dfrac{14.14+\sqrt{200+588}}{9.8}=4.31\text{ s}$ $R=20\cos45°(4.31)=\mathbf{60.9\text{ m}}$. Retaining extra figures during working prevents premature-rounding error. 4 Calculate at 60° $t=\dfrac{17.32+\sqrt{300+588}}{9.8}=4.81\text{ s}$ $R=20\cos60°(4.81)=\mathbf{48.1\text{ m}}$. The longer flight time does not compensate for the much smaller horizontal component. 5 Compare without overclaiming Of the three sampled angles, 30° gives the greatest range. The continuous-model optimum is about $32.5°$. The calculation supports an optimum below 45°; testing three angles alone does not prove the exact optimum is 30°. Reveal next step Step 1 of 5

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- All30 m cliff/20 m/s cases recalculated: {"30": {"ux": 17.320508075688775, "uy": 9.999999999999998, "t": 3.6969136833885714, "range": 64.03242330825609, "heightAboveLaunch": 5.102040816326529, "timeToPeak": 1.020408163265306}, "45": {"ux": 14.142135623730951, "uy": 14.142135623730951, "t": 4.3074972774456475, "range": 60.917210696488176, "heightAboveLaunch": 10.204081632653063, "timeToPeak": 1.4430750636460152}, "60": {"ux": 10.000000000000002, "uy": 17.32050807568877, "t": 4.808146625223617, "range": 48.081466252236176, "heightAboveLaunch": 15.306122448979588, "timeToPeak": 1.767398783233548}}.
- The continuous optimal angle is about 32.468 degrees, whereas30 degrees only wins among the three supplied candidates. Do not claim the sample proves30 degrees is the global optimum.
- Keep the nonphysical negative root visible briefly as a rejected earlier mathematical time. The physical trajectory begins at t=0.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

The displacement at landing is minus30 m relative to launch, not zero. Do not add height into the horizontal equation or automatically double time to peak.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse graph scales, projectileState logic and the elevated-launch context. The existing m5-elevated-launch is a configured horizontal launch, so the inclined30/45/60-degree comparison needs new parameters and a general landing-time model. No raster cannon is necessary.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A ball is launched horizontally at 6.0 m/s from 5.0 m above a level floor. Neglect drag, use g=9.8 m/s squared. Find flight time and range.

**Worked answer:** t=sqrt(10/9.8)=1.01015 s; R=6.06092 m, about 1.0 s and 6.1 m.

### Question 2

A ball launches at 10.0 m/s,30 degrees from 5.0 m above its landing level. Find landing time using g=9.8 m/s squared.

**Worked answer:** -5=5t-4.9t squared, so t=(5+sqrt123)/9.8=1.641891 s. The negative root is outside the post-launch motion. Range is not requested.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
