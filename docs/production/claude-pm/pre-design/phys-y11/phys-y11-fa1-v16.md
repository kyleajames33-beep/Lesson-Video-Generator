# phys-y11-fa1-v16: How do we find the forces on an object that is speeding up, slowing down or turning?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci014d8672`: Analyse the forces acting on an accelerating object
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `cidf22083b`: Solve problems involving Newton’s second law of motion using F ⃗ net = m a ⃗
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson15.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `net-force-drives-acceleration`, `applying-newtons-second-law`, `apply-what-you-have-learned`, `direction-mass-and-the-lift-effect`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · NET FORCE AND ACCELERATION A $4.0\ \text{kg}$ box is pushed across a floor with a horizontal force of $20\ \text{N}$. Friction opposes the motion with a force of $8.0\ \text{N}$. Find the box's acceleration. 1 GIVEN: $m = 4.0\ \text{kg}$, push $= 20\ \text{N}$ (forward), friction $= 8.0\ \text{N}$ (backward). FIND: acceleration $a$. List every horizontal force and its direction before adding them. 2 METHOD: Net force along the motion: $$F_{net} = 20 - 8.0 = 12\ \text{N (forward)}$$ then $$a = \frac{F_{net}}{m}$$ Take forward as positive; friction is negative because it opposes the push. 3 ANSWER: $$a = \frac{12}{4.0} = 3.0\ \text{m s}^{-2}\ \text{(forward)}$$ Check: the answer is positive, so the box accelerates in the direction of the larger force. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

Net force = 20 - 8.0 = 12 N forward; a = 12/4.0 = 3.0 m/s² forward. Precision of 20 N is unstated.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Acceleration must point with velocity; a moving body must have a force in its direction of motion.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: You put the applied (driving) force into $F = ma$. ✓ Right: You use the net force, the vector sum of every force, including friction and weight components. ✗ Wrong: A moving object must have a forward net force on it. ✓ Right: Motion needs no net force; only a change in motion (acceleration) does. A net force can even oppose the motion to slow it down. 

## 5. Objects, apparatus and drawing needs

New speed-up, brake and bend cart states with separate velocity and acceleration arrows and an isolated FBD. Reuse bounded vector heads.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v15
- Main learner question: How do we find the forces on an object that is speeding up, slowing down or turning?
- Route start: Start with Forces on Accelerating Objects. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply forces on accelerating objects? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v17: How can I explain and apply newton's third law?
- Proposed route refinement: Start from velocity change and free-body diagrams. Stop after identifying net force from a for speeding, slowing and turning; leave interaction pairs to v17.

## 7. Candidate practice and questions for Claude

### Candidate 1
A 2.0 kg cart moving east accelerates at 3.0 m/s² west. Find the net force.

Worked answer: 6.0 N west; it slows while moving east.

### Candidate 2
A 3.0 kg cart turns with acceleration 2.0 m/s² north. Find net force.

Worked answer: 6.0 N north, even if instantaneous velocity is east.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
