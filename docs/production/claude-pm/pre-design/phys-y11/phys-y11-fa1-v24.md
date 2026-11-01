# phys-y11-fa1-v24: Incline investigation

Research pack, 2 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ci28f5581f`: Conduct a laboratory experiment to analyse the relationship between the angle of an inclined plane and the acceleration of an object
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames identify official content.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson22.sa.html`. Sections: `orient-and-predict`, `intentions-and-key-terms`, `constant-velocity-on-a-slope`, `accelerating-down-a-rough-slope`, `apply-what-you-have-learned`, `reading-the-results`, `independent-practice`, `retrieve-and-reflect`.

### Exact site example `we-1`

WORKED EXAMPLE · SLIDING DOWN A ROUGH RAMP A block is released from rest at the top of a $4.0\ \text{m}$ ramp inclined at $30°$, with coefficient of kinetic friction $\mu = 0.15$. Using $g = 9.8\ \text{m s}^{-2}$, find the acceleration and the block's speed at the bottom. 1 GIVEN: $\theta = 30°$, $\mu = 0.15$, $s = 4.0\ \text{m}$, $u = 0$, $g = 9.8\ \text{m s}^{-2}$. FIND: acceleration $a$ and final speed $v$. Released from rest, so $u = 0$; the block accelerates down the slope. 2 METHOD: $$a = g(\sin\theta - \mu\cos\theta) = 9.8(\sin 30° - 0.15\cos 30°)$$ $$a = 9.8(0.500 - 0.130) = 9.8 \times 0.370 = 3.6\ \text{m s}^{-2}$$ Use the incline formula to get the constant acceleration first. 3 ANSWER: Using $v^2 = u^2 + 2as$: $$v = \sqrt{0 + 2 \times 3.6 \times 4.0} = \sqrt{28.8} = 5.4\ \text{m s}^{-1}$$ Check: the speed is positive and the friction has reduced $a$ below the frictionless $g\sin\theta = 4.9\ \text{m s}^{-2}$. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

The lesson 22 worked example gives 3.62694 m/s² and 5.3866 m/s with its stated kinetic model. It is not an experimental data set.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Angle alone determines every experimental result; a good fit proves the model without uncertainty or repeats.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: An object moving down a slope must be accelerating. ✓ Right: If friction equals $mg\sin\theta$, the net force is zero and the object moves at constant velocity. ✗ Wrong: Acceleration is directly proportional to the angle $\theta$. ✓ Right: It depends on $\sin\theta$ (and $\cos\theta$ via friction), so the relationship is not a straight line through the origin in $\theta$. 

## 5. Objects, apparatus and drawing needs

New adjustable track, angle readout, trolley and two light gates with labelled measurements; reuse maths FunctionGraph and error bars.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v23
- Main learner question: How does ramp angle change acceleration in a measured experiment?
- Route start: Start with Incline investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Complete incline investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.
- Next: phys-y11-fa1-v25: How can I explain and apply first nations use of inclined planes?
- Proposed route refinement: Start with the predicted angle dependence. Stop after a controlled measurement, graph and evaluation of uncertainty; hand on to the next route topic.

### Investigation proposal

Method: raise a secured track to measured angles, release the same low-friction trolley without a push and infer acceleration from a velocity-time fit using two gates or a motion sensor; repeat three times per angle. Independent: angle. Dependent: acceleration. Controls: trolley and track, release point, calibration and method. Hypothetical mean acceleration (±0.05 m/s²), angle (±0.5°): 5° 0.82, 10° 1.68, 15° 2.51, 20° 3.31. Plot acceleration versus sin θ and compare the gradient with g, acknowledging rolling resistance and angle uncertainty. Risk: clamp track, use a padded stop, keep the drop zone and leads clear, prevent pinched fingers.

Suggested just-in-time FA0 points:
- `ci9ce164ec`: Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `cif90164e3`: Assess potential hazards and their associated risks to develop a risk assessment (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `ci0fca96de`: Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, tables and spreadsheets (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `ci914a5e7e`: Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)

## 7. Candidate practice and questions for Claude

### Candidate 1
A trolley starts from rest and travels 0.80 m in 1.00 s at constant acceleration. Find a.

Worked answer: a=2s/t²=1.6 m/s².

### Candidate 2
Three independent acceleration estimates are 1.5, 1.6, 1.7 m/s². Find mean and range.

Worked answer: Mean=1.6 m/s²; range=0.2 m/s². Range is not a full uncertainty budget.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
