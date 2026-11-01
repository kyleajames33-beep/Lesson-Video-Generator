# phys-y11-fa1-v20: How do Newton's laws solve real situations, at rest and in motion?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `cif0b50354`: Solve a variety of problems in static and dynamic real-world situations by applying Newton’s laws of motion
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson19.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `one-recipe-for-every-force-problem`, `a-dynamic-problem-box-with-friction`, `apply-what-you-have-learned`, `static-problems-when-forces-balance`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · DYNAMIC PROBLEM WITH FRICTION A $25\ \text{kg}$ crate is pulled across level ground by a horizontal rope with a tension of $90\ \text{N}$. The coefficient of kinetic friction is $\mu_k = 0.20$. Using $g = 9.8\ \text{m s}^{-2}$, find the crate's acceleration. 1 GIVEN: $m = 25\ \text{kg}$, $T = 90\ \text{N}$, $\mu_k = 0.20$, $g = 9.8\ \text{m s}^{-2}$. FIND: acceleration $a$. (Dynamic, it accelerates.) Vertical forces balance, so $N = mg$; the horizontal direction is dynamic. 2 METHOD: $$N = mg = 25 \times 9.8 = 245\ \text{N}$$ $$F_k = \mu_k N = 0.20 \times 245 = 49\ \text{N}$$ $$F_{net} = T - F_k$$ Take the direction of motion as positive; friction is negative. 3 ANSWER: $$F_{net} = 90 - 49 = 41\ \text{N}$$ $$a = \frac{F_{net}}{m} = \frac{41}{25} = 1.6\ \text{m s}^{-2}$$ Check: positive, so the crate accelerates in the pull direction. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

N = 25 x 9.8 = 245 N; kinetic friction = 0.20 x 245 = 49 N; net = 90 - 49 = 41 N; a = 41/25 = 1.64, or 1.6 m/s² to two figures.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

A moving object must have an unbalanced force; normal always equals weight.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: An object moving at constant velocity must have a net force pushing it along. ✓ Right: Constant velocity is equilibrium, $F_{net} = 0$. Any driving force is exactly balanced by friction or drag. ✗ Wrong: The normal force always equals the weight. ✓ Right: $N = mg$ only on level ground with no vertical acceleration. In a lift or on a slope it changes. 

## 5. Objects, apparatus and drawing needs

New level block and lift with force vectors and net-force working; reuse vector heads and maths grouped equations.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v19
- Main learner question: How do Newton's laws solve real situations, at rest and in motion?
- Route start: Start with Applying Newton's Laws to Real Situations. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply applying newton's laws to real situations? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v21: How can I explain and apply inclined planes: normal force and free-body diagrams?
- Proposed route refinement: Start with free-body diagrams, friction and Newton laws. Stop at level static and dynamic examples. Hand ramp geometry to v21.

## 7. Candidate practice and questions for Claude

### Candidate 1
A 5.0 kg crate moves at constant speed on level ground under a 15 N horizontal pull. Find friction.

Worked answer: Net horizontal force is zero; kinetic friction is 15 N opposite the pull.

### Candidate 2
A 3.0 kg object has 12 N east and 3.0 N west horizontally. Find acceleration.

Worked answer: a=(12-3.0)/3.0=3.0 m/s² east.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
