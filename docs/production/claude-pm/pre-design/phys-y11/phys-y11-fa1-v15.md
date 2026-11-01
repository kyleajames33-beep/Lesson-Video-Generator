# phys-y11-fa1-v15: Newton investigation

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

The same site example gives (30 - 6.0)/4.0 = 6.0 m/s². It is a calculation, not a measured investigation.

Calculations and unrounded values: `work/brief141/calculate.py` and `numerical-check.json`. Site integer trailing zeros have ambiguous measured precision.

## 4. Misconceptions and causal teaching

Changing force and total mass simultaneously isolates one variable; a single reading establishes reliability.

Site misconceptions: Misconceptions To Fix watch out ✗ Wrong: In $F = ma$, $F$ is any single force acting on the object. ✓ Right: $F$ is the net force, the vector sum of all forces. You must find the net force first, then divide by mass. ✗ Wrong: A bigger force always means a bigger acceleration, no matter the mass. ✓ Right: Acceleration depends on both: $a = F_{net}/m$. The same force gives a heavier object a smaller acceleration. 

## 5. Objects, apparatus and drawing needs

New low-friction trolley, force sensor, masses and motion sensor; reuse maths FunctionGraph and readout. Plot Fnet against a with uncertainty bars.

The 2017 Physics kit is drawing reuse only, not syllabus evidence. No people, hands or faces.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v14
- Main learner question: How can measured data test the separate effects of net force and mass?
- Route start: Start with Newton investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.
- Route stop: Complete newton investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.
- Next: phys-y11-fa1-v16: How can I explain and apply forces on accelerating objects?
- Proposed route refinement: Start with the second-law prediction and measurement skills. Stop at two fair-test series and interpreting fits and uncertainty. Hand force reconstruction to v16.

### Investigation proposal

Method: use a low-friction trolley, calibrated horizontal force sensor and motion sensor. Measure total moving mass; pull horizontally, obtain acceleration from a velocity-time best-fit slope, repeat. Series A: hold total mass 1.00 kg and vary measured net force (correct for measured friction); series B: keep net force 0.60 N while adding carried masses. Independent variables: net force in A, total mass in B. Dependent: acceleration. Controls: track level, friction method, sensor calibration, release and sampling. Hypothetical data, not observations: A, Fnet (±0.02 N), a (±0.05 m/s²): (0.20,0.21), (0.40,0.39), (0.60,0.61), (0.80,0.79); B, mass (±0.01 kg), a (±0.05 m/s²): (1.00,0.61), (1.50,0.40), (2.00,0.29). Graph Fnet versus a for A, then a versus 1/m for B, with uncertainty bars and suitable fit. Risk: secure track and stop trolley before the end; keep masses and leads from falling; avoid pinch points.

Suggested just-in-time FA0 points:
- `ci9ce164ec`: Justify the use of independent , dependent and controlled variables , and experimental controls in a valid scientific investigation (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `cif90164e3`: Assess potential hazards and their associated risks to develop a risk assessment (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `ci0fca96de`: Select and use a range of representations to organise data and information, including graphs, keys, models , diagrams, tables and spreadsheets (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)
- `ci914a5e7e`: Assess error, uncertainty and limitations in data and include calculations of percentage error , range , mean and standard deviation (https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2)

## 7. Candidate practice and questions for Claude

### Candidate 1
At fixed 2.0 kg, a best-fit Fnet against a gradient is 2.1 kg. What does the gradient represent?

Worked answer: The inferred inertial mass, 2.1 kg; compare it with 2.0 kg using uncertainty.

### Candidate 2
At fixed net force, acceleration halves when total mass doubles. What relationship is supported?

Worked answer: The observations support a proportionality to 1/m over the measured range.

Keep answer-bearing working and diagrams hidden during the response. Check the site corrections log before adopting the site example.
