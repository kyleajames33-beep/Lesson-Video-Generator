# phys-y11-fa1-v18: How do forces pass between bodies that touch or are tied together?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ciecc7b5bd`: Analyse the forces acting on connected bodies in physical contact and linked by ropes using vector diagrams and Newton’s laws of motion
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson17.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `one-acceleration-for-the-whole-system`, `finding-the-tension-in-the-rope`, `apply-what-you-have-learned`, `bodies-in-direct-contact`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · ACCELERATION AND TENSION A $2.0\ \text{kg}$ block (front) and a $3.0\ \text{kg}$ block (back) sit on a frictionless table joined by a light string. A horizontal force of $20\ \text{N}$ pulls the $2.0\ \text{kg}$ block forward, dragging the $3.0\ \text{kg}$ block behind it. Find the acceleration and the tension in the string. 1 GIVEN: $m_1 = 2.0\ \text{kg}$ (pulled), $m_2 = 3.0\ \text{kg}$ (trailing), $F = 20\ \text{N}$, frictionless. FIND: acceleration $a$ and string tension $T$. The string drags the $3.0\ \text{kg}$ block, so the tension only needs to accelerate that block. 2 METHOD (whole system): $$a = \frac{F}{m_1 + m_2} = \frac{20}{5.0} = 4.0\ \text{m s}^{-2}$$ Total mass is $2.0 + 3.0 = 5.0\ \text{kg}$; internal tension cancels for the whole system. 3 ANSWER (one body, the trailing block): The only horizontal force on $m_2$ is $T$, so $$T = m_2 a = 3.0 \times 4.0 = 12\ \text{N}$$ Check: $T = 12\ \text{N}$ is less than the $20\ \text{N}$ applied force, as expected, it only drags the $3.0\ \text{kg}$ block. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

a = 20/(2.0+3.0) = 4.0 m/s²; T = 3.0 x 4.0 = 12 N. Tension is internal to the combined two-block system.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Tension is an external force on the entire connected system; each block has the same net force.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: To find the acceleration of one block, use only that block's mass. ✓ Right: Connected bodies share one acceleration found from the total mass and the external driving force. ✗ Wrong: The tension in the rope equals the applied force. ✓ Right: The tension only has to accelerate the mass on the other side of the rope, so it is usually less than the applied force. 

## 5. Objects, apparatus and drawing needs

New two blocks, rope and aligned individual FBDs, then combined system; physics vector heads and maths grouped working.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v17
- Main learner question: How do forces pass between bodies that touch or are tied together?
- Route start: Start with Connected Bodies. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply connected bodies? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v19: How can I explain and apply friction: static vs kinetic?
- Proposed route refinement: Start with third-law pairs and individual free-body diagrams. Stop after system acceleration and tension in ideal connected bodies. Hand contact resistance to v19.

## 7. Candidate practice and questions for Claude

### Candidate 1
Two frictionless blocks 1.0 kg and 2.0 kg are pulled together by 9.0 N on the first block. Find acceleration and rope tension.

Worked answer: a=9.0/3.0=3.0 m/s²; T=2.0 x 3.0=6.0 N.

### Candidate 2
A 4.0 kg block is pulled by a 12 N tension on a frictionless floor. Find acceleration.

Worked answer: a=12/4.0=3.0 m/s² along the tension.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
