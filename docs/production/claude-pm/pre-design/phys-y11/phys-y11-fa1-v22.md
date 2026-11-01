# phys-y11-fa1-v22: How does splitting weight along a ramp give the acceleration down it?

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci9a2bd04a`: Resolve the weight force into perpendicular and parallel components on inclined planes using F ⊥ = mg cos θ and F ∥ = mg sin θ
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `cib1bb3a58`: Derive a = g sin θ - μg cos θ to describe the acceleration on an object on an inclined plane with friction using Newton’s second law parallel to the plane
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson21.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `splitting-weight-into-two-components`, `deriving-the-incline-acceleration`, `apply-what-you-have-learned`, `what-the-formula-tells-us`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

DERIVATION · INCLINE ACCELERATION Derive an expression for the acceleration of a block of mass $m$ sliding down a rough slope of angle $\theta$ with coefficient of kinetic friction $\mu$. 1 GIVEN / SET-UP: Along the slope, driving force $= mg\sin\theta$ (down); friction $= \mu N = \mu mg\cos\theta$ (up). FIND: acceleration $a$ down the slope. Use $N = mg\cos\theta$ from the perpendicular balance, then $f = \mu N$. 2 METHOD: Newton's second law along the slope: $$F_{net} = mg\sin\theta - \mu mg\cos\theta = ma$$ Take down-slope as positive; friction opposes the motion so it is subtracted. 3 ANSWER: Divide both sides by $m$, the mass cancels: $$a = g(\sin\theta - \mu\cos\theta)$$ Check: with $\mu = 0$ (frictionless) this gives $a = g\sin\theta$, and at $\theta = 90°$, $a = g$. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

For a block already sliding down, N = mg cos θ and a = g(sin θ - μk cos θ). A negative a means it slows while still moving down; the point of impending slip uses μs, not μk.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Heavier blocks accelerate faster in the ideal model; negative acceleration while sliding means the block reverses instantly.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: A heavier block accelerates faster down the same frictionless slope. ✓ Right: Mass cancels, the acceleration is $a = g\sin\theta$ on a frictionless slope, the same for every mass. ✗ Wrong: The driving component of weight is $mg\cos\theta$. ✓ Right: The component along the slope (the one that drives sliding) is $mg\sin\theta$; $mg\cos\theta$ is perpendicular. 

## 5. Objects, apparatus and drawing needs

New ramp FBD with independently resolved weight and friction, tied to moving block; reuse physics vectors and maths equation display.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v21
- Main learner question: How does splitting weight along a ramp give the acceleration down it?
- Route start: Start with Resolving Weight and Incline Acceleration. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Stop after the learner can answer: How can I explain and apply resolving weight and incline acceleration? Teach only the listed actions; the next video owns its separate question.
- Next: phys-y11-fa1-v23: How can I explain and apply solving inclined-plane problems?
- Proposed route refinement: Start with ramp components and kinetic friction. Stop at deriving along-ramp acceleration while already sliding. Hand complete ramp problems to v23.

## 7. Candidate practice and questions for Claude

### Candidate 1
A block slides down a smooth 30° ramp. Take g=9.8 m/s². Find acceleration.

Worked answer: a=g sin 30°=4.9 m/s² down the slope.

### Candidate 2
A block slides down a ramp where mg sin θ=8 N and kinetic friction is 10 N up the slope; mass 2.0 kg. Find acceleration.

Worked answer: Net= -2 N with down positive, so acceleration is 1.0 m/s² up the slope while it slides down.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
