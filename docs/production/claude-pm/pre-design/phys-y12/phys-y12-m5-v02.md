# phys-y12-m5-v02: How does launch angle set the two initial velocity components?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ1-01`: analyse the motion of projectiles by resolving the motion into horizontal and vertical components, making the following assumptions:
  - a constant vertical acceleration due to gravity
  - zero air resistance
- `P5-IQ1-02`: apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:
  - initial velocity
  - launch angle
  - maximum height
  - time of flight
  - final velocity
  - launch height
  - horizontal range of the projectile (ACSPH099)

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 vectors, Newton laws, trigonometry, constant acceleration and work-energy. Recall the immediately preceding video, phys-y12-m5-v01, and the earlier results named in this boundary. Derive each newly introduced equation before relying on it.

Prerequisite: phys-y12-m5-v01

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Resolve 20 m/s at 30 degrees; use 25 m/s at 40 degrees to find time to the peak. Distinguish zero vertical speed from zero acceleration. Stop before full flight.

Next: {'id': 'phys-y12-m5-v03', 'question': 'What determines height, flight time and landing velocity at the launch level?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson01.sa.html`, SHA256 `a739198c2342e395b4220c69a481c9d3e2086d5a788c8b83c7e35025b2e3b6d1`. Section IDs: `l01-resolve-title`, `l01-apply-title`.

### Source example `we-phys-y12-m5-l01-1`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 1 +5 XP on full reveal Finding launch components. A ball is kicked at 20 m/s, 30° above the horizontal. Find the horizontal and vertical components of its initial velocity. 1 Record the known quantities $v = 20 \text{ m/s}$ and $\theta = 30°$. The speed is the magnitude of the launch vector; the angle is measured above the positive horizontal direction. 2 Select the component equations $v_x = v\cos\theta$ and $v_y = v\sin\theta$. The horizontal component is adjacent to the launch angle, while the vertical component is opposite it. 3 Calculate the horizontal component $v_x = 20\cos30° = 20(0.866) = \mathbf{17.3\text{ m/s}}$. The positive sign means the component points in the chosen positive horizontal direction. 4 Calculate the vertical component $v_y = 20\sin30° = 20(0.500) = \mathbf{10.0\text{ m/s}}$. At launch the ball is travelling upward, so $v_y$ is positive when upward is the positive direction. 5 State the answer with directions $\mathbf{v_x=17.3\text{ m/s}}$ horizontally and $\mathbf{v_y=10.0\text{ m/s}}$ upward. Components are vectors. Including their directions makes the sign convention explicit. Reveal next step Step 1 of 5

### Source example `we-phys-y12-m5-l01-2`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Worked example 2 +5 XP on full reveal Time to maximum height. Find the time to reach maximum height for a projectile launched at 25 m/s, 40° above the horizontal. 1 Choose a reference convention Take upward as positive, so $a_y=-9.8\text{ m/s}^2$. Gravity points downward, opposite the chosen positive vertical direction. 2 Resolve the initial vertical velocity $u_y=25\sin40°=25(0.643)=\mathbf{16.1\text{ m/s}}$. Only the vertical component determines how long the projectile takes to reach its highest point. 3 Use the peak condition At maximum height, the instantaneous vertical velocity is $v_y=0$. The vertical velocity is momentarily zero at the turning point; the acceleration is still $-9.8\text{ m/s}^2$. 4 Substitute into $v_y=u_y+a_yt$ $0=16.1+(-9.8)t$. The signs are consistent with the upward-positive reference convention. 5 Solve and state the result $t=\dfrac{16.1}{9.8}=\mathbf{1.64\text{ s}}$. This is the time to maximum height, not the total flight time. Reveal next step Step 1 of 5

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- 20 m/s at 30 degrees: ux=17.320508076 m/s; uy=10 m/s. 25 m/s at 40 degrees: uy=16.069690242 m/s; time to peak=1.639764310 s.
- The peak has vy=0 but ay=-g; horizontal velocity remains nonzero. Component labels use angle from horizontal, not from vertical.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

The sine component belongs opposite the stated angle. Do not use total launch speed in t=uy/g or imply total velocity is zero at the peak.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Reuse VelocityDecomposition and m5-vector-resolution. The latter configured 20 m/s,30 degrees matches the source. Retain one common vector scale and rotate no artwork to imply a changing magnitude. Switch clearly to the25 m/s,40-degree case for peak time.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

A ball launches at 10.0 m/s,60 degrees above horizontal. Find its initial velocity components.

**Worked answer:** ux=10 cos60=5.00 m/s; uy=10 sin60=8.660... m/s,8.66 m/s. Both are positive under the stated axes.

### Question 2

A projectile starts with uy=14.7 m/s and ux=8.0 m/s. With g=9.8 m/s squared, find time to peak and state velocity and acceleration there.

**Worked answer:** t=14.7/9.8=1.50 s. Velocity=(8.0,0) m/s, acceleration=(0,-9.8) m/s squared.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
