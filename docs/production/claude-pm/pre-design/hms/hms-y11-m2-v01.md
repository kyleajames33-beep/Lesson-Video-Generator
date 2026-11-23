# HMS pre-design: How does the skeleton make movement possible, and why can't a joint be both very mobile and very stable?

Video **hms-y11-m2-v01** (route order 19). Site lesson: Year 11 L01, The skeleton: what it does, where it moves, and the words for how. [Page](https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson01.sa); local file `C:\Users\kygs\teaching-app-fix\subjects\health-movement-science\year11\module2\lesson01.sa.html` (sha256 `a146fa9abd93cb20`, read-only).

## 1. Exact syllabus content

- **hms-y11-fa2-g1-d1** (p20, inquiry question: "How do the systems of the body influence and respond to movement?"): "Explain the interrelationship between the skeletal and muscular systems and movement"
  - hms-y11-fa2-g1-d1-s1: "structure and function" (owned here)
  - hms-y11-fa2-g1-d1-s2: "major bones and synovial joints" (owned here)
  - hms-y11-fa2-g1-d1-s3: "joint actions" (owned here)
  - hms-y11-fa2-g1-d1-s4: "major muscles" (owned by another video)
  - hms-y11-fa2-g1-d1-s5: "characteristics and functions of muscle fibres" (owned by another video)
  - hms-y11-fa2-g1-d1-s6: "types of muscle contractions" (owned by another video)
  - hms-y11-fa2-g1-d1-s7: "muscle relationship" (owned by another video)
  - Syllabus examples: "Joint actions: / Flexion and extension."
  - Syllabus examples: "Characteristics and functions of muscle fibres: / Slow versus fast twitch muscle fibres."
  - Syllabus examples: "Types of muscle contractions: / Isotonic concentric. / Isotonic eccentric. / Isometric contractions."
  - Syllabus examples: "Muscle relationship: / Agonist/antagonist/stabiliser relationship."

Source: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.

## 2. Site order, ideas, examples and practice

- **Five jobs, and only one of them is movement:** The syllabus asks for structure and function, and students reliably give one function, movement, because that is the module's title. There are five, and an answer that gives all five, then says which one this subject is about, is doing more work than an answer that gives one. Support. The skeleton gives the body its shape and holds the soft tissues up against gravity. Without it you would be a puddle with opinions. P...
- **The major bones, grouped so you can actually remember them:** There are 206 bones in the adult skeleton and you are not expected to know them all. You are expected to know the majors, and to place them. Learn them in the two divisions rather than as a list, because the division itself carries meaning: the axial skeleton mostly protects, and the appendicular skeleton mostly moves. The major bones. Learn the common name and the anatomical name together, exam questions use the ana...
- **Three classes of joint, and the trade-off that runs through all of them:** Every joint in the body sits somewhere on a single trade-off: mobility against stability . You cannot maximise both at one joint, and every joint in the body is a settled compromise between them. Once you see that, the three classes stop being a list to memorise and become three points on a scale. Fibrous (immovable). Bones joined directly by dense fibrous tissue, with no joint cavity. The sutures of the cranium are ...
- **Inside a synovial joint, and the six shapes it comes in:** Every synovial joint, whatever its shape, contains the same six components. Learn them as a set, because a question about any synovial joint is answerable from this list. Articular cartilage, hyaline cartilage capping each bone end. Reduces friction to almost nothing and absorbs compressive shock. It has no blood supply, which is why cartilage damage heals so poorly. Joint capsule, a tough fibrous sleeve enclosing th...
- **Joint actions: the vocabulary that makes movement describable:** The syllabus names flexion and extension as its example, and those two carry most of the work. But the whole set is worth holding, because every one of these words replaces a sentence of vague description, and precision is what is being marked. All joint actions are described from the anatomical position, standing upright, facing forward, arms at the sides with palms forward. Every direction term assumes that startin...
- **Activity 1 · Describe a skill in joint actions only:** 2 Mark every action you could not name with a term. Those gaps are the vocabulary to go back for, and they are usually at the ankle, the scapula or the forearm. 3 Now the test. Hand your written description to someone who cannot see you and ask them to perform it. Whatever they get wrong is imprecision in your description, not in their reading. auto-saved
- **Activity 2 · Predict an injury from a joint's structure:** 
- **Worked response we-hms-y11-m2-l01-b1** (5 marks): "Explain how the structure of the skeletal system enables movement."
- **Worked response we-hms-y11-m2-l01-b2** (4 marks): "Describe the joint actions occurring at the hip, knee and ankle during the downward phase of a squat."
- **Page "In your book":** In your book. The five functions, with one example each. Then write Wolff's law in your own words and give one example of loading and one of unloading.
- **Page "In your book":** In your book. Sketch a body outline and label the 18 bones in the table. Do it from memory first, then correct it, the corrections are what you will remember.

## 3. Number and science check

Figures the page states (to be independently checked in the design; current statistics must come from a dated report):
- Sketch a body outline and label the 18 bones in the table.

Independent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.

## 4. Exam traps and student mistakes (from the page)

- The shoulder and the hip are the same shape and not the same joint Both are ball-and-socket. The hip's socket, the acetabulum, is deep and encloses much of the femoral head; the shoulder's socket, the glenoid fossa, is shallow. That single difference explains why the shoulder is the most mobile joint in the body and the most commonly dislocated, while the hi...
- No NESA marking-trend claim is made.

## 5. Visual plan, real objects and plates

Painted regional anatomy plates (no whole-body figure, no hands or faces): knee synovial joint cutaway, shoulder ball-and-socket, hip ball-and-socket, vertebral column segment, leg bones (reuse m8-leg-bones-normal-v1.png); coded segment linkage (thigh, shank, foot as lines with joint circles) for joint actions in a squat with live joint-angle readouts.

Existing plates named above (present in the repo, checked by script): `public/assets/biology/m8-leg-bones-normal-v1.png`. Inspect their actual appearance before use.
New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.
Site diagrams on this page (coded on the site; ideas may be redrawn, not copied): `dx-hms-y11-m2-l01-synovial-joint`.

## 6. Course coherence

- **Entry knowledge:** Stage 5 PDHPE (assumed, not re-taught): Basic body systems and the names of some bones.; Stage 5 PDHPE (assumed, not re-taught): Movement skills and fitness components.
- **Opens on:** a knee joint at rest, then the same knee bending in a squat: what makes this possible? (the final frame of hms-y11-m1-v18).
- **Start:** Start from the five functions of the skeleton (only one is movement).
- **Stop:** Stop when students can name the five functions, locate the major bones by region (axial and appendicular), classify joints on the mobility-stability trade-off, name the six components of a synovial joint and its six shapes, and describe joint actions (flexion, extension and the rest) at the hip, knee and ankle in a squat. Muscles and their roles belong to v02.
- **Next handoff:** hms-y11-m2-v02: opens on the coded leg linkage from v01 holds at the bottom of the squat: something must be pulling.
- **Later homes:** Muscles, fibres, contraction types and roles: hms-y11-m2-v02.
- **Recurring models:** intro:mobility-stability trade-off, intro:joint-action vocabulary
- **Cross-year overlap:** None.

## 7. Open questions for the designer

- Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?
- Which page activity, if any, can become a short on-screen task without a long hold?
