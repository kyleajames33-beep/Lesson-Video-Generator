# phys-y12-m5-v01: Why can one projectile be analysed as two motions with one clock?

Brief 168 research pack,5 November 2026. Physics Stage 6 (2017), Year 12 Modules5 to 8. Research for Claude, not a design, narrated script, build or approval. Target5 to 10 minutes, one learner question. Candidate questions below are original HSC-style practice, not official NESA questions or marking schemes.

## 1. Exact syllabus and boundaries

- `P5-IQ1-01`: analyse the motion of projectiles by resolving the motion into horizontal and vertical components, making the following assumptions:
  - a constant vertical acceleration due to gravity
  - zero air resistance

Local IDs are ledger handles. Official source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Entry knowledge: Year 11 displacement, velocity, acceleration, vectors, resolving right triangles, Newton second law and constant-acceleration equations. No earlier Year 12 video is assumed.

Prerequisite: Year 11 knowledge named above

Start: Start from the physical case in the learner question; recall only the earlier result needed for it.

Stop: Compare a horizontal launch and a simultaneous drop under uniform gravity without drag. Explain ax=0, ay=-g and shared time. Stop before inclined-launch arithmetic.

Next: {'id': 'phys-y12-m5-v02', 'question': 'How does launch angle set the two initial velocity components?'}

Practical: No primary practical is completed by this explanatory video.

## 2. Source and unchanged worked examples

- `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson01.sa.html`, SHA256 `a739198c2342e395b4220c69a481c9d3e2086d5a788c8b83c7e35025b2e3b6d1`. Section IDs: `l01-orient-title`, `l01-components-title`, `l01-trajectory-title`.

### Source example `we-phys-y12-m5-l01-b1`

Source transcription, including errors explicitly corrected below. Givens and numeric values are unchanged. Em dash punctuation is normalised to a comma to meet repository copy rules.

Analyse 6 marks A ball is thrown horizontally from the top of a cliff. Analyse its motion by resolving it into horizontal and vertical components, stating the assumptions your analysis depends on. (6 marks) 1 Unpack the verb Analyse is this dot point's own verb, and the dot point tells you the method: resolve the motion into components. The marks are in the independence of those components and in the assumptions that permit it. Plan: state the assumptions, take each component separately, then show how they combine and what links them. Leading with the assumptions is not padding ,  this dot point names them explicitly, and the whole method collapses if either fails. 2 State the assumptions the model needs The analysis assumes air resistance is negligible and that the vertical acceleration is constant at $g$ downwards throughout the flight. The dot point names both. Without zero air resistance the horizontal motion would not be uniform, and without constant $g$ the vertical equations would not apply. 3 Analyse the horizontal component Horizontally there is no force, so there is no acceleration and the horizontal velocity stays at its launch value $u_x$ for the whole flight. The horizontal displacement is therefore $x = u_x t$. No force, so no acceleration, so constant velocity. Reason forward from the force rather than asserting the constant velocity as a rule to remember. 4 Analyse the vertical component Vertically the only force is weight, so the acceleration is $g$ downwards. The ball is thrown horizontally, so its initial vertical velocity is zero, and $v_y = gt$ with $y = \tfrac{1}{2}gt^2$: the vertical speed grows steadily and the drop grows with the square of the time. The zero initial vertical velocity is what makes this a horizontal launch. Quoting it explicitly shows the component has been taken from the launch conditions. 5 Say what links the two components The two motions are independent ,  neither affects the other ,  but they share the same clock. Time is the only quantity common to both, so it is time that couples the horizontal distance travelled to the height fallen. This is the single most useful sentence in projectile motion. It is also what makes the standard problem solvable: find $t$ from one component, use it in the other. 6 Describe the resultant At any instant the velocity is the vector sum of the constant $u_x$ and the growing $v_y$, so the speed increases and the velocity turns steadily from horizontal towards the vertical, giving the familiar parabolic path. Combining the components back into a resultant closes the analysis. Note the path is parabolic because $y$ grows with $t^2$ while $x$ grows with $t$. 7 The full-mark answer The analysis assumes air resistance is negligible and that the vertical acceleration is constant at $g$ downwards. Horizontally there is then no force and so no acceleration, and the horizontal velocity remains at its launch value $u_x$ throughout, giving $x = u_x t$. Vertically the only force is weight, so the acceleration is $g$ downwards; since the ball is launched horizontally its initial vertical velocity is zero, so $v_y = gt$ and $y = \tfrac{1}{2}gt^2$, and the vertical speed grows steadily while the drop grows with the square of the time. The two motions are entirely independent of each other, but they share the same clock, and it is the time that links the horizontal distance travelled to the height fallen. At any instant the velocity is the vector sum of the constant horizontal component and the growing vertical component, so the speed increases and the direction turns steadily downward, and because the vertical displacement grows as $t^2$ while the horizontal grows as $t$, the path is a parabola. Six marks: the two assumptions, the horizontal component reasoned from the absence of force, the vertical component with its zero initial value, the independence with the shared clock, and the resultant. 1 of 7 Build the next line →

Other extended examples on these pages are source context only. They are not silently added to this focused video. In particular, minimum wall-clearing speed, massive two-support beams and different cliff cases need separate scope decisions.

## 3. Independent recalculation and limits

- For a horizontal launch, uy=0 and h=gt squared/2 determines time. Horizontal speed does not change that time within the ideal model. Both motions share elapsed time, an inertial frame and uniform gravity.
- The source introductory30 m/s at 40 degrees illustration and 20 m/s at 30 degrees worked example are different cases. Keep them separate. The extended example has no numerical givens, so there is no source arithmetic to invent.

Machine arithmetic: `work/brief168/first-ten-calculations.json`. Use unrounded internal values and apply justified rounding only at the result. Tables of supplied illustrative data are not measured primary evidence.

## 4. Misconceptions and HSC-style traps

A horizontal push does not cancel gravity or delay falling. Independence means the component equations are separable under the assumptions, not two unrelated objects or different clocks. A continuing forward force is not needed when ax=0.

Sources: the exact source explanations and worked examples above and the official action wording. These describe reasoning risks, not a statistical claim about mistake frequency.

## 5. Visual reuse and memory

Use two simultaneous coded objects, one dropped and one horizontally launched from the same height. Keep vertical positions and one clock coupled. Reuse original projectile model logic and MovingProjectile only after adapting it: the existing pilot does not already provide the paired experiment. The inspected steel-ball plate can supply object context, but exact position, arrows and trail remain coded.

Inspected: mechanics-details-desktop-contact.png and mechanics-details-phone-contact.png under `src/explainer/physics/artifacts/site/checks/`, plus `work/brief168/asset-contact.png`. Useful shared primitives are Arrow, Dot, Label, Panel, FieldGrid, DataGraph and graphScale in course-kit.tsx. CircuitDiagram and LoopFlow were not found under src; do not invent imports. Preserve useful layouts and calculation logic. Still inspection is not motion playback or learner approval.

Existing steel ball, phone/tripod, launcher housing, metre rule, protractor, slotted masses and stand plates were visually checked. Painted rule/protractor markings are context, not precision measurement scales; code exact ticks/angles. Do not force an unrelated raster or introduce an apparatus that cannot perform the proposed measurement.

Memory-bank decision: existing Module 5 memory aids concern Biology/Chemistry mechanisms, not these Physics calculations. No unrelated mnemonic is transferred. A useful retrieval cue here is one clock, two component equations. Explain its physical meaning before using it; no quota for analogies or tricks.

## 6. Two original candidate questions and worked answers

### Question 1

Two balls start1.25 m above the ground simultaneously. A is dropped, B launched horizontally at 3.0 m/s. Neglect drag, use g=9.8 m/s squared. Find each landing time and B range.

**Worked answer:** Both times=sqrt(2 times 1.25/9.8)=0.5051 s, about 0.51 s. B range=3.0 times 0.5051=1.515 m, about 1.5 m. Horizontal motion does not change the shared vertical equation.

### Question 2

A projectile starts at y=0 with vx=4.0 m/s, vy=0. At t=0.50 s find displacement components and velocity components, taking up positive and g=9.8 m/s squared.

**Worked answer:** x=2.0 m; y=-1.225 m, about-1.2 m. vx=4.0 m/s; vy=-4.9 m/s. These describe one position and one velocity at the same time.

## 7. Decisions before authoring

Read `../../site-corrections-phys-y12.md`. Resolve the relevant logged error while retaining source givens. An approved practical method, complete apparatus and student-generated observations remain distinct from illustrative processing data. Independent student-learning/science review is required on the selected design, followed later by exact voiced preview, playback and listening. No recording approval is implied by this pack.
