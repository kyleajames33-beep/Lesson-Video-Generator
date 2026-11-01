# phys-y11-fa1-v13: Why does an object keep the same velocity when the forces on it balance?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `cif576e4f9`: Apply Newton’s first law of motion to stationary objects and objects moving with a constant velocity
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci38b8f81e`: Analyse the forces acting on an object moving with constant velocity
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson13.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `the-law-of-inertia`, `equilibrium-two-kinds-of-no-change`, `apply-what-you-have-learned`, `analysing-constant-velocity-motion`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · FORCES ON A CRUISING CAR A car drives at a constant $100\ \text{km h}^{-1}$ on a flat road. The total resistive force (air drag + friction) on it is $600\ \text{N}$ backward. What driving force must the engine provide? 1 GIVEN: constant velocity, resistive force $= 600\ \text{N}$ backward. FIND: driving force. Constant velocity means equilibrium, so $\vec{F}_{net} = 0$. 2 METHOD: horizontal forces balance. $$F_{drive} - F_{resist} = 0$$ For zero net force, the forward force must equal the backward force. 3 ANSWER: $$F_{drive} = 600\ \text{N forward}$$ The engine provides $600\ \text{N}$ just to balance resistance, not to accelerate. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

Constant velocity implies net force zero. Driving force = 600 N forward against 600 N backward. 100 km/h = 27.78 m/s; the speed does not alter the balance. The precision of 600 and 100 is unstated.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Motion needs a net force; zero net force means rest.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: A moving object needs a continuous net force to keep moving. ✓ Right: Constant velocity needs zero net force. A force is only needed to overcome resistance (like friction) so the forces balance, not to maintain the motion itself. ✗ Wrong: Equilibrium means the object must be standing still. ✓ Right: Equilibrium means zero net force. Both an object at rest and one moving at constant velocity are in equilibrium. 

## 5. Objects, apparatus and drawing needs

Two force arrows on a cruising cart and a velocity arrow: reuse bounded physics vectors from course-kit.tsx. New balanced-force cart and resistance display.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v12
- Main learner question: Why does an object keep the same velocity when the forces on it balance?
- Route start: Start with Newton's First Law and Equilibrium. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply newton's first law and equilibrium? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v14: How can I explain and apply newton's second law (f = ma)?
- Proposed route refinement: Start with an isolated body and net force from v12. Stop at constant velocity when net force is zero. Hand off the nonzero net-force case to v14.

## 7. Candidate practice and questions for Claude

### Candidate 1
A cart moves east at constant speed on level ground while drag is 4.0 N west. Find the driving force.

Worked answer: 4.0 N east because the net force is zero.

### Candidate 2
A body is at rest under two horizontal forces. One is 8.0 N east. Find the other.

Worked answer: 8.0 N west for zero net force.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
