# phys-y11-fa1-v17: If forces come in equal and opposite pairs, why does anything move?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci980c80f2`: Use examples to describe the effects of Newton’s third law of motion
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson16.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `every-force-comes-in-a-pair`, `equal-forces-different-accelerations`, `apply-what-you-have-learned`, `propulsion-how-things-get-going`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · RECOIL AND THE THIRD LAW A $0.020\ \text{kg}$ bullet is fired from a $3.0\ \text{kg}$ rifle. The expanding gas pushes the bullet forward with a force of $1800\ \text{N}$. Find the magnitude of the rifle's recoil acceleration. 1 GIVEN: force on bullet $= 1800\ \text{N}$, rifle mass $m_R = 3.0\ \text{kg}$. FIND: recoil acceleration $a_R$. By the third law, the rifle feels an equal and opposite $1800\ \text{N}$ backward. 2 METHOD: The reaction force on the rifle equals $1800\ \text{N}$, so apply $$a_R = \frac{F}{m_R}$$ Use the rifle's own mass with the equal-and-opposite force acting on it. 3 ANSWER: $$a_R = \frac{1800}{3.0} = 600\ \text{m s}^{-2}$$ The bullet's acceleration is $1800/0.020 = 90\,000\ \text{m s}^{-2}$. Check: equal forces, but the light bullet accelerates 150× more than the rifle. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

1800/3.0 = 600 m/s² and 1800/0.020 = 90,000 m/s²; their magnitudes have ratio 150. The stated gas-on-bullet force does not by itself give the gas-on-rifle force: the actual third-law partner is bullet-on-gas. See the correction log. These calculations need an independent equal net force assumption.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Third-law forces cancel on one object; the more massive body exerts the larger interaction force.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: Action and reaction forces cancel out, so nothing can ever accelerate. ✓ Right: The two forces act on different objects, so they never cancel on one object. Each object responds to the force acting on it . ✗ Wrong: A heavy truck pushes harder on a small car than the car pushes on the truck. ✓ Right: The forces are equal in size. The car accelerates more only because it has a smaller mass ($a = F/m$). 

## 5. Objects, apparatus and drawing needs

New paired carts with force arrows on distinct bodies; reuse vector heads and labelled body boundaries. Keep pair separate from individual net forces.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v16
- Main learner question: If forces come in equal and opposite pairs, why does anything move?
- Route start: Start with Newton's Third Law. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply newton's third law? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v18: How can I explain and apply connected bodies?
- Proposed route refinement: Start with one interaction between two isolated objects. Stop after identifying the equal opposite forces on different bodies and their effects. Hand connected bodies to v18.

## 7. Candidate practice and questions for Claude

### Candidate 1
Cart A pushes cart B east with 5.0 N. State the partner force.

Worked answer: B pushes A west with 5.0 N.

### Candidate 2
Two carts of 2.0 kg and 5.0 kg exert 10 N on each other with no other horizontal forces. Find acceleration magnitudes.

Worked answer: 5.0 m/s² and 2.0 m/s² in opposite directions.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
