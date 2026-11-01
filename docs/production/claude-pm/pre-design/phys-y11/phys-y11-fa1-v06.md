# phys-y11-fa1-v06: Velocity in Two Dimensions

Research pack, 1 November 2026. Claude owns the design. No speech or render approval.

## 1. Exact 2025 syllabus content

- `ciac8fac3d`: Solve problems involving the calculation of velocity in 2 dimensions
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci76393283`: Solve problems to determine speed, velocity, distance, displacement and time
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975
- `ci09919606`: Solve problems in one and 2 dimensions using a ⃗ = Δ v ⃗ Δ t
  Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Exact source HTML and retrieval date are retained in programme/syllabus/phys-new-y11.json. CMS codenames are official content identifiers, not published outcome codes.

## 2. Site sequence and worked example

Read-only source: `C:\Users\kygs\hscscience\subjects\physics\year11\fa1-fundamentals-of-mechanics\lesson06.sa.html`. Sections in teaching order: `orient-and-predict`, `intentions-and-key-terms`, `combining-two-perpendicular-velocities`, `velocity-from-displacement-and-time-in-2d`, `apply-what-you-have-learned`, `solving-for-any-unknown`, `independent-practice`, `retrieve-and-reflect`.

The orientation asks for a prediction; intentions establish terms; three core cards are separated by application; independent practice is followed by retrieval. Use the current source section text rather than stale module labels.

### Exact site example `we-1`

WORKED EXAMPLE · 2D AVERAGE VELOCITY A drone flies $120\ \text{m}$ east, then $160\ \text{m}$ north, taking $40\ \text{s}$ for the whole trip. Find its average velocity (magnitude and direction). 1 GIVEN: $s_x = 120\ \text{m}$ east, $s_y = 160\ \text{m}$ north, $\Delta t = 40\ \text{s}$. FIND: average velocity magnitude and direction. First find the resultant displacement, then divide by time. 2 METHOD: resultant displacement by Pythagoras, then $v_{av} = \dfrac{\Delta s}{\Delta t}$. $$\Delta s = \sqrt{120^2 + 160^2}$$ The east and north legs are perpendicular, so they form a right triangle. 3 ANSWER: $$\Delta s = \sqrt{14400 + 25600} = 200\ \text{m}$$ $$v_{av} = \frac{200}{40} = 5.0\ \text{m s}^{-1}, \quad \theta = \tan^{-1}\!\left(\frac{160}{120}\right) = 53° \text{ N of E}$$ A 3-4-5 triangle again: $5.0\ \text{m s}^{-1}$ at $53°$ north of east. ✓ 1 of 3 Reveal next step →

## 3. Recalculation, units and precision

120 m east then 160 m north in 40 s: displacement components (120,160) m, magnitude 200 m, velocity components (3,4) m/s; magnitude 5.0 m/s at atan(160/120) = 53.130 degrees north of east. Correct. Path distance 280 m would instead give average speed 7.0 m/s. Precision of integer trailing zeros is unstated.

Retain the exact original site values in the research record. In the design, state whether whole-number values are ideal teaching values or measured quantities; do not add significant figures silently.

## 4. Misconceptions and causal teaching

Misconceptions To Fix watch out ✗ Wrong: To get the resultant speed you just add the two perpendicular speeds. ✓ Right: Perpendicular velocities combine by Pythagoras, $v = \sqrt{v_x^2 + v_y^2}$, which is always less than the simple sum. ✗ Wrong: The resultant velocity points along whichever component is bigger. ✓ Right: Its direction is set by both components: $\theta = \tan^{-1}(v_y / v_x)$, somewhere between the two. 

Explain the definition or physical cause before relying on the formula. A direction convention belongs on the task, not only in the answer. A graph is a relation between labelled quantities, not a picture of the road.

## 5. Objects, apparatus and drawing needs

Reuse vector resolution and common axes. New: a two-leg drone route with a persistent displacement triangle and separate time readout; do not pretend the average vector is each instantaneous segment.

The existing Physics kit maps outgoing 2017 Year 12 topics. Reuse only the named drawing parts, with new Year 11 axes, numbers and context. No old-kit syllabus coverage is claimed.

## 6. Entry knowledge, boundaries and handoff

- Stage 5 Science: measurements, fair tests, forces, energy, waves and simple circuits; Stage 5 Mathematics: signed arithmetic, SI conversions, rearrangement, graph gradients, Pythagoras and right-triangle trigonometry.
- phys-y11-fa1-v05
- Main learner question: How do I find average velocity in two dimensions?
- Start: Recall the needed Stage 5 idea using the source orientation; establish the quantity, system and conditions before applying it.
- Stop: Answer the single learner question and practise its source actions; leave the next distinct action to its own video.
- Next: phys-y11-fa1-v07: How can motion data become linked displacement, velocity and acceleration graphs?

## 7. Candidate practice and questions for Claude

### Candidate 1
A drone moves 90.0 m east then 120 m north in 30.0 s. Find average velocity; treat 120 m as three figures.

Worked answer: Components=(3.00,4.00) m/s. Magnitude=5.00 m/s; direction=53.1 degrees north of east.

### Candidate 2
Return to the start after a square trip of side 10.0 m in 20.0 s. Compare averages.

Worked answer: Displacement=0, so average velocity=0 m/s. Distance=40.0 m, so average speed=2.00 m/s.

Keep the answer and diagnostic diagram hidden during the student response. Choose a cut before adding extra explanation. Check the source-corrections log before copying a site assertion; the practical must distinguish measured evidence from a suggested method.
