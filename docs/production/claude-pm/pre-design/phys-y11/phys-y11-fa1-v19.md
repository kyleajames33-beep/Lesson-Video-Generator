# phys-y11-fa1-v19: Why does it take more force to start something sliding than to keep it sliding?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci927ecf47`: Compare static and kinetic friction
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci6eb6311a`: Solve problems using f friction = μ F N
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson18.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `static-vs-kinetic-friction`, `calculating-friction`, `apply-what-you-have-learned`, `why-starting-is-harder-than-sliding`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · FRICTION AND ACCELERATION A $10\ \text{kg}$ crate is pushed across a level floor with a horizontal force of $50\ \text{N}$. The coefficient of kinetic friction between crate and floor is $\mu_k = 0.30$. Take $g = 9.8\ \text{m s}^{-2}$. Find the friction force and the crate's acceleration. 1 GIVEN: $m = 10\ \text{kg}$, push $= 50\ \text{N}$, $\mu_k = 0.30$, $g = 9.8\ \text{m s}^{-2}$. FIND: friction force $F_k$ and acceleration $a$. On a flat floor the normal force balances weight: $N = mg$. 2 METHOD: $$N = mg = 10 \times 9.8 = 98\ \text{N}$$ $$F_k = \mu_k N = 0.30 \times 98 = 29.4\ \text{N}$$ Find the normal force first, then the kinetic friction from $F = \mu N$. 3 ANSWER: Net force $= 50 - 29.4 = 20.6\ \text{N}$, so $$a = \frac{F_{net}}{m} = \frac{20.6}{10} = 2.1\ \text{m s}^{-2}$$ Friction opposes the push, so subtract it before applying $F_{net} = ma$. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

N = 10 x 9.8 = 98 N; kinetic friction = 0.30 x 98 = 29.4 N; a = (50 - 29.4)/10 = 2.06, or 2.1 m/s² under two-figure teaching precision. Trailing zero precision is unstated.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Static friction is always μsN; kinetic friction always opposes the object velocity in every reference frame.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: Static friction always equals its maximum value $\mu_s N$. ✓ Right: Static friction adjusts to exactly balance the applied force, up to a maximum of $\mu_s N$. Below that, friction equals the applied force. ✗ Wrong: A larger contact area means more friction. ✓ Right: Friction depends on the normal force and the surfaces ($F = \mu N$), not on the contact area. 

## 5. Objects, apparatus and drawing needs

New force sensor plot showing static rise, peak and kinetic plateau; reuse maths FunctionGraph and force vectors. Animate relative sliding.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v18
- Main learner question: Why does it take more force to start something sliding than to keep it sliding?
- Route start: Start with Friction: Static vs Kinetic. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply friction: static vs kinetic? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v20: How can I explain and apply applying newton's laws to real situations?
- Proposed route refinement: Start with normal and contact forces. Stop after distinguishing static and kinetic friction and computing simple level cases. Hand multi-force problems to v20.

## 7. Candidate practice and questions for Claude

### Candidate 1
A 2.0 kg block slides on a horizontal surface, μk=0.20 and g=9.8 m/s². Find friction.

Worked answer: N=19.6 N; friction=3.9 N opposite relative sliding.

### Candidate 2
A stationary block has maximum static friction 10 N. A horizontal force of 6.0 N acts, with no other horizontal forces. Find friction.

Worked answer: Static friction is 6.0 N opposite the force; the block remains at rest.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
