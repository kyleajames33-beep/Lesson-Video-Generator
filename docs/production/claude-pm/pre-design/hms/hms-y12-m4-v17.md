# HMS pre-design: How does biomechanics make movement more efficient, so an athlete lasts longer and performs better?

Video **hms-y12-m4-v17** (route order 79). Site lesson: Year 12 L17, Biomechanics for efficient, sustained movement. [Page](https://hscscience.com.au/subjects/health-movement-science/year12/module4/lesson17.sa); local file `C:\Users\kygs\teaching-app-fix\subjects\health-movement-science\year12\module4\lesson17.sa.html` (sha256 `7616732853e6152c`, read-only).

## 1. Exact syllabus content

- **hms-y12-fa2-g5-d1** (p33, inquiry question: "How do individuals train for sustained movement and performance?"): "Explain how biomechanics can be used to develop efficient movements for sustained movement and improved performance"
  - Syllabus examples: "Physical activity. / Sport-specific movements. / Functional movements."

Source: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.

## 2. Site order, ideas, examples and practice

- **Efficiency is the whole point of this dot point:** The dot point asks how biomechanics develops efficient movements for sustained movement, and efficiency is the word to define precisely: the useful work produced relative to the energy it cost. Two athletes moving at the same speed can differ substantially in what that speed costs them, and in a long event the cheaper athlete is the one still moving well at the end. This is why biomechanics belongs in a training modu...
- **Anatomical structure, muscle output, and the two directions of force:** Anatomical structures set what is mechanically possible. Bones act as levers rotating about joints, and the length of a segment together with where a muscle attaches determines both the force a movement can produce and the speed at which the far end travels. A longer limb moves its end point faster for the same joint rotation, which favours throwing and striking, and costs more to swing, which is a disadvantage in re...
- **Projectile motion: three variables, one of them dominant:** Once an object or body leaves the ground or the hand it is a projectile, and its flight is determined by three things at the moment of release: speed, angle and height . Everything a coach can change about a throw, a jump, a kick or a shot is one of those three. The three release variables Variable Effect How much it matters Speed of release The dominant determinant of distance; because both the time in flight and th...
- **Fluid dynamics: drag, thrust, and why speed makes it worse:** Air and water are both fluids, so an athlete moving through either meets drag, the resistive force opposing motion, and generates thrust, the propulsive force pushing them forward. Net progress is what remains, so a performance can be improved either by increasing thrust or by reducing drag, and for a sustained performance, reducing drag is frequently the better investment because it costs nothing to maintain. The re...
- **Measuring efficiency, and turning a change into an explanation:** The syllabus support material specifically mentions the measurement of force absorption and application to assess efficiency, so knowing what can be measured is part of the content. Each measure answers a different question and none answers all of them. What can be measured, and what each measure shows Measure What it shows Limitation Video, from a fixed position and angle Joint angles, body position, timing and sequ...
- **Activity 1 · Complete the four-link chain:** 2 A runner's foot lands well ahead of their centre of gravity on each stride. 3 A cyclist rides upright rather than in a lower position, at 40 km per hour. 4 A netballer lands from a rebound with very little flexion at the ankle, knee and hip, and does so 40 times a match.
- **Activity 2 · Choose the intervention:** 
- **Worked response we-hms-y12-m4-l17-b1** (6 marks): "Explain how biomechanical analysis can be used to develop more efficient movement and improve performance."
- **Worked response we-hms-y12-m4-l17-b2** (5 marks): "Analyse the relationship between movement efficiency, fatigue and injury risk over the course of a competition."
- **Page "In your book":** In your book. Write the definition of efficiency. Under it draw the four sources of waste with one example each from a sport you know. Then write the sustained-movement sentence: inefficiency causes earlier fatigue, and fatigue causes further inefficiency .
- **Page "In your book":** In your book. Draw a stiff landing and a flexed landing side by side. Under each write what happens to the time over which force is received and therefore to the peak force. Then write the application principle as one sentence: direction, range, and sequence from largest segment to smallest .

## 3. Number and science check

Figures the page states (to be independently checked in the design; current statistics must come from a dated report):
- In the shot put, the shot is released from around shoulder height and lands on the ground, so release is well above landing and the optimum angle is meaningfully below 45 degrees.
- Maximum distance, maximum accuracy and maximum chance of scoring are three different objectives and give three different answers, and an answer that recites "45 degrees is optimal" without asking what the athlete is trying to achieve has missed the question.
- Draw three flight paths from the same release speed at 30, 45 and 60 degrees.

Independent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.

## 4. Exam traps and student mistakes (from the page)

- Air resistance complicates all of this The clean relationships above assume gravity is the only force acting in flight. Real projectiles meet air resistance, which matters more for light objects with a large surface area, such as a shuttlecock or a table tennis ball, and for anything spinning. So treat the three variables as the framework and the air as a re...
- No NESA marking-trend claim is made.

## 5. Visual plan, real objects and plates

Field-motion projectile sim (src/explainer/sims/field-motion.ts) with live range readout as speed, angle and height change; coded drag arrows on a painted swimmer-free pool lane and a cyclist-free bike plate; no people.

New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.
Site diagrams on this page (coded on the site; ideas may be redrawn, not copied): `dx-hms-y12-m4-l17-biomechanics`.

## 6. Course coherence

- **Entry knowledge:** Year 11 HMS (recalled in one sentence; do not assume our Year 11 video was watched): Levers, stability and force, recalled in a sentence.
- **Opens on:** the PCr link from v16 hands over to how efficiently that energy is used (the final frame of hms-y12-m4-v16).
- **Start:** Start from efficiency defined precisely (useful output for energy cost).
- **Stop:** Stop when students can explain anatomical leverage and force direction, projectile motion (release speed, angle, height, with speed dominant), fluid dynamics (drag and thrust), and how efficiency is measured, applied to physical activity, sport-specific and functional movements.
- **Next handoff:** hms-y12-m4-v18: opens on the efficiency readout from v17 drops as fatigue builds: recovery.
- **Later homes:** Recovery: hms-y12-m4-v18.
- **Recurring models:** reuse:lever (pivot, effort, load), intro:release speed, angle, height
- **Cross-year overlap:** Recalls Year 11 v03.

## 7. Open questions for the designer

- Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?
- Which page activity, if any, can become a short on-screen task without a long hold?
- Every on-screen statistic needs a dated source; prefer trend shapes labelled as patterns.
