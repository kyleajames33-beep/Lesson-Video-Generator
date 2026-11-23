# HMS pre-design: What physics are your bones and muscles already obeying, and how does knowing it make lifting and moving safer?

Video **hms-y11-m2-v03** (route order 21). Site lesson: Year 11 L03, Biomechanics: the physics your bones and muscles were already obeying. [Page](https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson03.sa); local file `C:\Users\kygs\teaching-app-fix\subjects\health-movement-science\year11\module2\lesson03.sa.html` (sha256 `028a4b8f41eff07a`, read-only).

## 1. Exact syllabus content

- **hms-y11-fa2-g1-d2** (p20, inquiry question: "How do the systems of the body influence and respond to movement?"): "Outline the interrelationship between biomechanical principles and the muscles, bones and joints of the body for safe movement"
  - hms-y11-fa2-g1-d2-s1: "how biomechanical principles are applied to human movement, including motion, balance and stability, fluid mechanics and force" (owned here)
  - hms-y11-fa2-g1-d2-s2: "how biomechanical principles can be used to enhance safe movements" (owned here)
  - hms-y11-fa2-g1-d2-s3: "how biomechanical principles can be used to increase movement efficiency" (owned here)
  - Syllabus examples: "How biomechanical principles can be used to enhance safe movements: / Walking. / Squatting. / Lifting."
  - Syllabus examples: "How biomechanical principles can be used to increase movement efficiency: / Movements to reduce injury. / People with specific needs such as disability."

Source: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.

## 2. Site order, ideas, examples and practice

- **Motion, and the three laws the body cannot break:** The body produces three kinds of motion, and most skills combine them: Linear motion, the whole body travels as a unit, every part covering the same distance in the same time. A skater gliding; a sprinter's centre of gravity moving down the track. Angular motion, rotation about an axis. A gymnast on a bar, a diver somersaulting, and, importantly, every single joint action from Lesson 1 . Flexion is angular motion. Ge...
- **Balance and stability, and the five things that change them:** Three terms do all the work here, and they must be kept separate: Centre of gravity, the point where the body's mass is evenly distributed. In a standing adult it sits roughly at the level of the navel, slightly in front of the sacrum. It moves when you move: raise your arms and it rises, bend forward and it can travel outside the body entirely. Line of gravity, the vertical line dropping from the centre of gravity t...
- **Force: making it, aiming it, and getting rid of it safely:** Force is a push or a pull that changes an object's motion, and in human movement there are three separate questions about it: how you generate it, where you apply it, and how you absorb it. The third is the one that keeps people uninjured and the one most often left out of an answer. Summation of forces. Maximum force comes from using body parts in sequence, starting with the largest and slowest and finishing with th...
- **Fluid mechanics: moving through air and water:** Air and water are both fluids, and anything moving through a fluid is affected by it. The effects are small in air at walking pace and enormous in water at any pace, which is why swimming technique is overwhelmingly a fluid-mechanics problem. Drag is the resistive force opposing motion, and it comes in three kinds: Form drag, caused by the shape and frontal area presented to the fluid. The biggest single factor for a...
- **Putting it to work: safe lifting, squatting, walking and efficient movement:** This is the half of the dot point that carries the marks, because it is where biomechanics is connected back to specific muscles, bones and joints. Every recommendation below is a principle applied to an anatomical structure, and an answer must show both. Lifting, and here is the answer to Card 01. The critical quantity is torque : the turning force on the lumbar spine, which increases with the horizontal distance be...
- **Activity 1 · Diagnose a lift:** 2 Measure the horizontal distance from the load to the lower back. This is the lever arm generating torque on the lumbar spine, and it is the single most useful number in the whole analysis. 3 For every fault you identify, write the principle it violates and the anatomical structure it puts at risk. "Rounded back" is an observation; "spinal flexion under load concentrating compressive force on the anterior aspect of ...
- **Activity 2 · Redesign a movement for a specific need:** 
- **Worked response we-hms-y11-m2-l03-b1** (5 marks): "Outline how biomechanical principles can be applied to enhance the safety of lifting a heavy object from the floor."
- **Worked response we-hms-y11-m2-l03-b2** (6 marks): "Explain how an understanding of biomechanical principles can be used to increase movement efficiency, including for people with specific needs such as disability."
- **Page "In your book":** In your book. Three laws, one sporting example each, but not the examples above. Then write the sentence linking angular joint motion to linear body motion, because it is the sentence this whole lesson turns on.
- **Page "In your book":** In your book. Copy the five factors. Then write one sporting moment where maximum stability is wanted and one where minimum stability is wanted, and name which factors are being manipulated in each.

## 3. Number and science check

No figures carry the explanation; no calculation is assigned.

Independent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.

## 4. Exam traps and student mistakes (from the page)

- Stability is not always the goal Students learn the five factors and conclude that more stability is better. It is not, stability resists changes in motion, and most sport requires rapid changes in motion. A sprinter in the set position deliberately raises the centre of gravity and shifts the line of gravity towards the front edge of the base, making themsel...
- No NESA marking-trend claim is made.

## 5. Visual plan, real objects and plates

Beam sim (src/explainer/sims/beam.ts) for forearm and lifting levers with live torque readouts; coded centre-of-gravity and base-of-support diagram over a painted lifting-box plate (a crate on the floor, no person); force arrows on a coded leg linkage.

New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.
Site diagrams on this page (coded on the site; ideas may be redrawn, not copied): `dx-hms-y11-m2-l03-levers`.

## 6. Course coherence

- **Entry knowledge:** hms-y11-m2-v01: Joints and joint actions.; hms-y11-m2-v02: Muscles pull on bones.
- **Opens on:** the arm plate from v02: the forearm is a lever, and the elbow is its pivot (the final frame of hms-y11-m2-v02).
- **Start:** Start from motion (linear, angular, general) and Newton's three laws in movement terms.
- **Stop:** Stop when students can describe motion, centre of gravity, base of support and line of gravity, the five factors of stability (and when instability is wanted), how force is generated, aimed and absorbed, the basics of fluid mechanics (drag and buoyancy), and apply them to safe lifting, squatting and walking and to efficient movement for people with specific needs. Projectile motion and performance efficiency belong to hms-y12-m4-v17.
- **Next handoff:** hms-y11-m2-v04: opens on a working thigh muscle from v02 with a supply line drawn back towards the chest.
- **Later homes:** Biomechanics for performance and sustained movement: hms-y12-m4-v17.
- **Recurring models:** intro:lever (pivot, effort, load) on the body, intro:stability triangle (centre of gravity, base, line)
- **Cross-year overlap:** Year 12 hms-y12-m4-v17 recalls levers and stability in a sentence each.

## 7. Open questions for the designer

- Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?
- Which page activity, if any, can become a short on-screen task without a long hold?
