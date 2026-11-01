# phys-y11-fa1-v21: Why is the normal force on a ramp less than the weight?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci85e17ad3`: Determine the normal force on objects on inclined planes
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci90862bda`: Construct free-body diagrams to show the gravitational, normal, frictional and net force acting on an object on an inclined plane
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson20.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `the-four-forces-on-a-slope`, `finding-the-normal-force`, `apply-what-you-have-learned`, `why-tilting-the-axes-helps`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · NORMAL FORCE ON A SLOPE A $12\ \text{kg}$ box rests on a ramp inclined at $30°$ to the horizontal. Using $g = 9.8\ \text{m s}^{-2}$, find the normal force the ramp exerts on the box. 1 GIVEN: $m = 12\ \text{kg}$, $\theta = 30°$, $g = 9.8\ \text{m s}^{-2}$. FIND: normal force $N$. The box stays on the ramp, so there is no acceleration perpendicular to the slope. 2 METHOD: Perpendicular to the slope the forces balance, so $$N = mg\cos\theta$$ The surface supports only the perpendicular component of weight, $mg\cos\theta$. 3 ANSWER: $$N = 12 \times 9.8 \times \cos 30° = 117.6 \times 0.866 = 102\ \text{N}$$ Check: $N = 102\ \text{N}$ is less than the full weight $mg = 117.6\ \text{N}$, as expected on a slope. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

N = 12 x 9.8 cos 30° = 101.8446 N, conventionally 1.0 x 10² N to two figures, if 30° is intended to sufficient precision. The site 102 N keeps three figures despite g = 9.8.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Normal is vertical or always equals mg; weight rotates with the ramp.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: The normal force on a slope equals the weight, $N = mg$. ✓ Right: Only the perpendicular part of weight is supported, so $N = mg\cos\theta$, which is less than $mg$ on a slope. ✗ Wrong: The normal force points straight up, opposite to gravity. ✓ Right: The normal force is always perpendicular to the surface , so on a slope it tilts away from vertical. 

## 5. Objects, apparatus and drawing needs

New adjustable ramp, fixed vertical weight, rotating parallel/perpendicular axes and normal; reuse physics vectors and maths angle construction.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v20
- Main learner question: Why is the normal force on a ramp less than the weight?
- Route start: Start with Inclined Planes: Normal Force and Free-Body Diagrams. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply inclined planes: normal force and free-body diagrams? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v22: How can I explain and apply resolving weight and incline acceleration?
- Proposed route refinement: Start with force components and a tilted surface. Stop at perpendicular weight and normal under no perpendicular acceleration. Hand the parallel component to v22.

## 7. Candidate practice and questions for Claude

### Candidate 1
A 2.0 kg block stays on a 60° ramp with no perpendicular acceleration. With g=9.8 m/s² find N.

Worked answer: N=2.0 x 9.8 cos 60°=9.8 N.

### Candidate 2
A ramp angle increases from 0° to 45° with no extra perpendicular forces. Does N rise or fall?

Worked answer: It falls because mg cos θ decreases.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
