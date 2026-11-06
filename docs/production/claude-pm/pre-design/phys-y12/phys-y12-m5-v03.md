# phys-y12-m5-v03: What determines height, flight time and landing velocity at the launch level?

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

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v02, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v02

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Derive height and equal-level flight time; track signed vertical velocity and unchanged horizontal velocity. Use the 25 m/s at 50 degrees case. Stop before range optimisation.

Next: {'id': 'phys-y12-m5-v04', 'question': 'Why do complementary launch angles have the same level-ground range?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`. Section IDs: `l02-range-title`.
- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a`. Section IDs: `l03-complete-title`.

### Source example `we-2`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

PROBLEM 2 · COMPLETE TRAJECTORY A ball is thrown at $25\ \text{m/s}$ at $50°$ above the horizontal from ground level. Find: (a) the maximum height, (b) the time to reach maximum height, (c) the total flight time, and (d) the horizontal range. Take $g = 9.8\ \text{m/s}^2$. 1 GIVEN & components: $v = 25\ \text{m/s}$, $\theta = 50°$, level ground, $g = 9.8\ \text{m/s}^2$ $v_x = 25\cos(50°) = 16.1\ \text{m/s}$, $\quad v_y = 25\sin(50°) = 19.2\ \text{m/s}$ Resolve components first, this is step 2 of the checklist and enables all subsequent calculations. 2 (a) Maximum height (at max height, $v_y = 0$):$$v_y^2 = u_y^2 - 2gh_{\text{max}} \Rightarrow 0 = (25\sin 50°)^2 - 2(9.8)h_{\text{max}}$$$$h_{\text{max}} = \frac{(25\sin 50°)^2}{2 \times 9.8} = \frac{19.15^2}{19.6} = \frac{366.7}{19.6} = \mathbf{18.7\ \text{m}}$$ Use $v^2 = u^2 + 2as$ with $v = 0$ at maximum height. 3 (b) Time to maximum height: $$v_y = u_y - gt \Rightarrow 0 = 25\sin 50° - 9.8t_{\text{up}}$$$$t_{\text{up}} = \frac{25\sin 50°}{9.8} = \frac{19.15}{9.8} = \mathbf{1.95\ \text{s}}$$ (c) Total flight time (symmetrical): $t_{\text{total}} = 2 \times 1.95 = \mathbf{3.91\ \text{s}}$ Symmetrical flight (level ground): the projectile takes the same time to rise as to fall. 4 (d) Horizontal range: $$R = v_x \times t_{\text{total}} = 25\cos 50° \times 3.91 = 16.07 \times 3.91 = \mathbf{62.8\ \text{m}}$$ Horizontal velocity is constant throughout flight. $R = v_x t$ always gives the correct range. 1 of 4 Reveal next step →

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- 25 m/s at 50 degrees: {"ux": 16.069690242163485, "uy": 19.151111077974452, "t": 3.9083900159131533, "range": 62.80661690128879, "heightAboveLaunch": 18.712502832699784, "timeToPeak": 1.9541950079565766}. Landing vy is negative of initial uy at the same level.
- The source extended L2 example repeats an incorrect speed-squared claim for time. Do not carry it into the derivation: T is linear in u at fixed angle. H and R are quadratic.
- Use full precision internally. The source components displayed to 3 significant figures are labels, not replacement inputs for subsequent arithmetic.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

The root t=0 is launch, not landing. A factor of two for total time relies on equal launch/landing heights under the stated model. Landing speed equals launch speed here, but vertical velocity reverses.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse VelocityTimeGraph and m5-range-derivation structure. Reveal vertical velocity decreasing through zero, keep the horizontal component visible, and couple the graph point to the moving projectile. Configure25 m/s at 50 degrees rather than silently retaining pilot values.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A projectile launches at 14.0 m/s,45 degrees and lands at its launch level. Use g=9.8 m/s squared. Find peak height and total flight time.

**Worked answer:** uy=9.89949 m/s. H=uy squared/(2g)=5.00 m; T=2uy/g=2.02031 s,2.02 s.

### Question 2

A projectile launches at 19.6 m/s,30 degrees and returns to the same level. Find time to peak, total time and landing velocity components.

**Worked answer:** uy=9.8 m/s, ux=16.9741 m/s. tpeak=1.00 s; T=2.00 s. Landing components=(16.97,-9.80) m/s, giving speed 19.6 m/s at 30 degrees below horizontal.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
