# phys-y12-m5-v09: Why does a force turn an object more effectively at some angles?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ2-05`: investigate the relationship between the rotation of mechanical systems and the applied torque
  - τ=r_(⊥)F=rFsinθ

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v08, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v08

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Define torque through perpendicular moment arm; calculate80 N at 0.25 m for 90,30,180 degrees. Stop before equilibrium of several forces.

Next: {'id': 'phys-y12-m5-v10', 'question': 'How do clockwise and anticlockwise torques balance?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html`, SHA256 `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7`. Section IDs: `l06-define-title`, `l06-represent-title`, `l06-wrench-title`.

### Source example `we-phys-y12-m5-l06-1`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 1 +5 XP on full reveal Wrench on a nut. A mechanic applies 80 N to a 0.25 m wrench. Calculate the torque when the force is (a) perpendicular, (b) at 30° to the wrench and (c) directed along the wrench toward the nut. 1 Identify the quantities $F=80\text{ N}$ and $r=0.25\text{ m}$. The stated angles are measured between the wrench’s lever arm and the force. 2 Perpendicular force $\tau=0.25(80)\sin90°=\mathbf{20\text{ N·m}}$. This is the maximum magnitude. Its sign depends on whether the force tends to turn the nut clockwise or anticlockwise. 3 Force at 30° $\tau=0.25(80)\sin30°=\mathbf{10\text{ N·m}}$. Only the perpendicular force component contributes to the moment. 4 Force along the wrench $\tau=0.25(80)\sin0°=\mathbf{0\text{ N·m}}$. The line of action passes through the pivot, so the moment arm is zero. 5 Report magnitude and direction The magnitudes are $20$, $10$ and $0\text{ N·m}$. Add $+$ or $-$ once the turning direction is known. A torque answer is incomplete if a signed problem supplies a direction but the sign is omitted. Reveal next step Step 1 of 5

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- 80 N at 0.25 m:20 N m at 90 degrees,10 N m at 30 degrees, zero along the line through the pivot. For a radius vector from nut to handle, a force toward the nut makes180 degrees, not0. Either sine gives zero, but use a consistent angle definition.
- Torque magnitude is rF sin theta. A positive/negative sign requires an explicit orientation convention; it is not given by the magnitude formula alone.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

Perpendicular moment arm is the shortest pivot-to-force-line distance, not necessarily the wrench length. Torque and work share dimensions but are different physical quantities.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse m5-moment-arm and Arrow/Label primitives with a coded wrench/lever. Reconfigure from r=.4 m,F=50 N to the source. Keep the force line extended through space and draw the shortest distance at a right angle. The painted protractor can be brief context; exact angles/ticks remain coded.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is force times the shortest pivot-to-force-line distance. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A40 N force acts perpendicular to a0.30 m lever. Find torque, then torque at 30 degrees to the outward radius.

**Worked answer:** At90 degrees tau=.30 times 40=12 N m. At30 degrees tau=.30 times 40 times 0.5=6.0 N m. Direction sign needs a stated turning sense.

### Question 2

A force of 40 N acts along a0.30 m handle toward the pivot. Find its moment arm and torque and state the angle to the outward radius.

**Worked answer:** The force line passes through the pivot, so perpendicular arm=0 and torque=0 N m. The angle to the outward radius is180 degrees.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
