# HMS pre-design: What does training change inside the body?

Video **hms-y12-m4-v08** (route order 70). Site lesson: Year 12 L08, Physiological adaptations to training. [Page](https://hscscience.com.au/subjects/health-movement-science/year12/module4/lesson08.sa); local file `C:\Users\kygs\teaching-app-fix\subjects\health-movement-science\year12\module4\lesson08.sa.html` (sha256 `4dc0aca4591b8022`, read-only).

## 1. Exact syllabus content

- **hms-y12-fa2-g2-d3** (p32, inquiry question: "How does training influence movement and performance?"): "Examine the relationship between the principles of training, physiological adaptations and improved performance"
  - hms-y12-fa2-g2-d3-s1: "heart rate" (owned here)
  - hms-y12-fa2-g2-d3-s2: "stroke volume and cardiac output" (owned here)
  - hms-y12-fa2-g2-d3-s3: "oxygen uptake and lung capacity" (owned here)
  - hms-y12-fa2-g2-d3-s4: "haemoglobin level" (owned here)
  - hms-y12-fa2-g2-d3-s5: "muscle hypertrophy" (owned here)
  - hms-y12-fa2-g2-d3-s6: "fast/slow twitch muscle fibres" (owned here)

Source: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.

## 2. Site order, ideas, examples and practice

- **Heart rate, stroke volume and cardiac output:** Almost everything examinable about cardiovascular adaptation follows from one relationship: cardiac output equals heart rate multiplied by stroke volume . Learn it as a sentence rather than a formula and it will answer questions you have not seen before. Endurance training thickens and strengthens the wall of the left ventricle and increases the volume of its chamber, so it fills more completely and ejects more force...
- **Oxygen uptake, lung capacity and haemoglobin:** Maximal oxygen uptake is the headline endurance measure, and it rises with aerobic training. It is worth knowing why. Oxygen uptake depends on how much oxygenated blood the heart can deliver and on how much oxygen the muscle can extract from it. Training improves both ends: maximum cardiac output rises, as in card 04, and the trained muscle extracts more oxygen because it has more capillaries, more mitochondria and m...
- **Muscle hypertrophy, and what fibre types can and cannot do:** Hypertrophy is an increase in the size of existing muscle fibres, driven by the mechanical tension and metabolic stress of resistance training, and it raises the force the muscle can produce. Two points matter for a precise answer. Hypertrophy is an increase in fibre size, not in fibre number . And the first four to eight weeks of a beginner's strength gain come largely from neural adaptation, better recruitment, fir...
- **The relationship the dot point asks you to examine:** The verb here is examine the relationship, and the relationship is a three-link chain: a principle is applied, which produces an adaptation, which improves performance . Listing adaptations without the links either side answers a different question. Four complete chains, principle to adaptation to performance Principle applied Adaptation produced Performance outcome Progressive overload of aerobic volume, worked betw...
- **Reading adaptations as evidence, and the traps in doing so:** These adaptations are also the measurements coaches use to check that a program is working, which returns this lesson to the assessment cycle of Lesson 2. Four are practical to monitor, and each has a trap. Four monitorable adaptations, and how each can mislead Measure Expected direction with aerobic training The trap Resting heart rate Falls Also raised by illness, dehydration, poor sleep and accumulated fatigue, so...
- **Activity 1 · Complete the chain:** 2 Principle given: progressive overload of load in resistance training, above the strength threshold, over twelve weeks. 3 Performance given: the athlete's usual training run now feels easy and their heart rate no longer rises above 65 per cent of maximum during it. 4 Adaptation given: plasma volume has risen proportionally more than red cell mass.
- **Activity 2 · Interpret the monitoring data:** 
- **Worked response we-hms-y12-m4-l08-b1** (7 marks): "Examine the relationship between the principles of training, the physiological adaptations they produce, and improved performance."
- **Worked response we-hms-y12-m4-l08-b2** (5 marks): "Explain why a trained athlete has a lower resting heart rate than an untrained person."
- **Page "In your book":** In your book. Write the relationship as a sentence, then draw the three-row table with only two columns, untrained and trained. Under it write two warnings to yourself: maximum heart rate does not rise, and at the same submaximal workload cardiac output is the same in both people .
- **Page "In your book":** In your book. Draw the oxygen pathway as four boxes, lungs, blood, heart, muscle, and write one adaptation under each. Then circle the box that is not the limiting factor and write why beside it. That single annotation prevents the most common error on this sub-point.

## 3. Number and science check

Figures the page states (to be independently checked in the design; current statistics must come from a dated report):
- That is the answer to card 01: resting heart rate falls because stroke volume has risen, and the product of the two is unchanged .
- Training improves both ends: maximum cardiac output rises, as in card 04, and the trained muscle extracts more oxygen because it has more capillaries, more mitochondria and more aerobic enzymes.

Independent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.

## 4. Exam traps and student mistakes (from the page)

- Three claims to avoid Training does not substantially increase lung size or vital capacity. Training does not raise maximum heart rate. A lower haemoglobin concentration in a trained endurance athlete is not automatically a deficiency, because total haemoglobin and total blood volume have both risen. Each of these is a common answer and each is wrong.
- No NESA marking-trend claim is made.

## 5. Visual plan, real objects and plates

Reuse m8-heart-v1.png (trained and untrained comparison by coded overlay), m8-skeletal-muscle-v1.png, m5x-red-blood-cells-v1.png; worked Q = HR x SV in the g01 layout with checked arithmetic.

Existing plates named above (present in the repo, checked by script): `public/assets/biology/m5x-red-blood-cells-v1.png`, `public/assets/biology/m8-heart-v1.png`, `public/assets/biology/m8-skeletal-muscle-v1.png`. Inspect their actual appearance before use.
New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.

## 6. Course coherence

- **Entry knowledge:** Year 11 HMS (recalled in one sentence; do not assume our Year 11 video was watched): Immediate responses and Q = HR x SV, recalled in a sentence.; hms-y12-m4-v06: Principles of training.
- **Opens on:** the warm-up readout from v07 settles to a resting heart rate: 48 against 72 (the final frame of hms-y12-m4-v07).
- **Start:** Start from Q = HR x SV (recalled from Year 11) and the resting heart rate puzzle.
- **Stop:** Stop when students can examine adaptations in heart rate, stroke volume and cardiac output, oxygen uptake and lung capacity, haemoglobin level, muscle hypertrophy and fibre types, and link principle to adaptation to performance, avoiding three common false claims.
- **Next handoff:** hms-y12-m4-v09: opens on the adaptation chain from v08 needs a session to start it.
- **Later homes:** Designing a session: hms-y12-m4-v09.
- **Recurring models:** reuse:cardiac output equation, intro:principle, adaptation, performance chain
- **Cross-year overlap:** Recalls Year 11 v14.

## 7. Open questions for the designer

- Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?
- Which page activity, if any, can become a short on-screen task without a long hold?
- Every on-screen statistic needs a dated source; prefer trend shapes labelled as patterns.
