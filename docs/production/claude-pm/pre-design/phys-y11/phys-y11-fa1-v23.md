# phys-y11-fa1-v23: How do we solve ramp problems at constant velocity and while accelerating?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci07a3247e`: Solve problems involving objects with constant velocity and objects accelerating on inclined planes
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson22.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `constant-velocity-on-a-slope`, `accelerating-down-a-rough-slope`, `apply-what-you-have-learned`, `reading-the-results`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · SLIDING DOWN A ROUGH RAMP A block is released from rest at the top of a $4.0\ \text{m}$ ramp inclined at $30°$, with coefficient of kinetic friction $\mu = 0.15$. Using $g = 9.8\ \text{m s}^{-2}$, find the acceleration and the block's speed at the bottom. 1 GIVEN: $\theta = 30°$, $\mu = 0.15$, $s = 4.0\ \text{m}$, $u = 0$, $g = 9.8\ \text{m s}^{-2}$. FIND: acceleration $a$ and final speed $v$. Released from rest, so $u = 0$; the block accelerates down the slope. 2 METHOD: $$a = g(\sin\theta - \mu\cos\theta) = 9.8(\sin 30° - 0.15\cos 30°)$$ $$a = 9.8(0.500 - 0.130) = 9.8 \times 0.370 = 3.6\ \text{m s}^{-2}$$ Use the incline formula to get the constant acceleration first. 3 ANSWER: Using $v^2 = u^2 + 2as$: $$v = \sqrt{0 + 2 \times 3.6 \times 4.0} = \sqrt{28.8} = 5.4\ \text{m s}^{-1}$$ Check: the speed is positive and the friction has reduced $a$ below the frictionless $g\sin\theta = 4.9\ \text{m s}^{-2}$. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

a = 9.8(sin 30° - 0.15 cos 30°) = 3.62694 m/s²; v = sqrt(2 x a x 4.0) = 5.3866 m/s, or 3.6 m/s² and 5.4 m/s to two figures. Sliding from rest also requires the static-friction threshold to be exceeded.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

All moving objects accelerate; acceleration is proportional to angle in degrees; kinetic friction determines the initial slip threshold.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: An object moving down a slope must be accelerating. ✓ Right: If friction equals $mg\sin\theta$, the net force is zero and the object moves at constant velocity. ✗ Wrong: Acceleration is directly proportional to the angle $\theta$. ✓ Right: It depends on $\sin\theta$ (and $\cos\theta$ via friction), so the relationship is not a straight line through the origin in $\theta$. 

## 5. Objects, apparatus and drawing needs

New ramp block with signed force sums, separate constant-speed and acceleration states; reuse physics vectors and maths calculation panel.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v22
- Main learner question: How do we solve ramp problems at constant velocity and while accelerating?
- Route start: Start with Solving Inclined-Plane Problems. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply solving inclined-plane problems? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v24: How does ramp angle change acceleration in a measured experiment?
- Proposed route refinement: Start with ramp force sums and kinematics. Stop after constant-speed and accelerated ramp calculations. Hand measurement against angle to v24.

## 7. Candidate practice and questions for Claude

### Candidate 1
A block moves down a ramp at constant speed. Its downslope weight component is 12 N. Find kinetic friction.

Worked answer: 12 N up the ramp, because net force along the ramp is zero.

### Candidate 2
A block starts at 1.0 m/s and accelerates at 2.0 m/s² along a 3.0 m ramp. Find final speed.

Worked answer: v=sqrt(1.0²+2 x 2.0 x 3.0)=3.6 m/s.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
