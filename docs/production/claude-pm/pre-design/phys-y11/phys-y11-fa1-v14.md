# phys-y11-fa1-v14: How do net force and mass together set an object's acceleration?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `cic1d80483`: Conduct a scientific investigation to illustrate the relationship between force, mass and acceleration
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson14.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `net-force-causes-acceleration`, `solving-problems-with-f-ma`, `apply-what-you-have-learned`, `weight-as-a-force-w-mg`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · ACCELERATION FROM A NET FORCE A $4.0\ \text{kg}$ box is pushed with a $30\ \text{N}$ force while a $6.0\ \text{N}$ friction force opposes it. Find the box's acceleration. 1 GIVEN: $m = 4.0\ \text{kg}$, push $= 30\ \text{N}$, friction $= 6.0\ \text{N}$ (opposing). FIND: acceleration $a$. First find the net horizontal force, then apply $F = ma$. 2 METHOD: net force then rearrange. $$F_{net} = 30 - 6.0 = 24\ \text{N}, \qquad a = \frac{F_{net}}{m}$$ Friction acts opposite to the push, so subtract it. 3 ANSWER: $$a = \frac{24}{4.0} = 6.0\ \text{m s}^{-2}$$ The box accelerates at $6.0\ \text{m s}^{-2}$ in the direction of the net force. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

Net force = 30 - 6.0 = 24 N forward; a = 24/4.0 = 6.0 m/s² forward. The trailing zero in 30 N does not establish precision.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Any one force equals ma; greater force alone always means greater acceleration.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: In $F = ma$, $F$ is any single force acting on the object. ✓ Right: $F$ is the net force, the vector sum of all forces. You must find the net force first, then divide by mass. ✗ Wrong: A bigger force always means a bigger acceleration, no matter the mass. ✓ Right: Acceleration depends on both: $a = F_{net}/m$. The same force gives a heavier object a smaller acceleration. 

## 5. Objects, apparatus and drawing needs

Isolate a block and add signed forces; reuse physics vectors and maths ReadoutPanel. New mass/force sliders and acceleration arrow.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v13
- Main learner question: How do net force and mass together set an object's acceleration?
- Route start: Start with Newton's Second Law (F = ma). Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply newton's second law (f = ma)? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v15: How can measured data test the separate effects of net force and mass?
- Proposed route refinement: Start with net-force vectors and acceleration. Stop at applying a = Fnet/m for fixed mass or net force. Hand the controlled measurement of the relationship to v15.

## 7. Candidate practice and questions for Claude

### Candidate 1
A 2.0 kg cart has a net force of 6.0 N east. Find acceleration.

Worked answer: a=6.0/2.0=3.0 m/s² east.

### Candidate 2
A 4.0 kg cart accelerates at 1.5 m/s² west. Find net force.

Worked answer: F=4.0 x 1.5=6.0 N west.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
