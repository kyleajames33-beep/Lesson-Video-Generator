# Year 12 Physics M6 V09: Magnetic flux. Why does changing loop orientation change magnetic flux? (design)

Status: Revision 2 (7 Nov 2026): brief 189 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,595 characters, 15 scenes, about 511 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v08's final frame.

Scope: ninth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), first video of the inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson12.sa.txt`, hash checked against the live file): orient and predict (loop prediction, warm-up, intentions, vocabulary, boundary), define and represent flux (normal, Φ = BA cos θ, Figure 1, worked example, MC), change flux (three ways, key insight, misconception, true/false, optional preview), convert angle conventions (plane angle α, MC), link and graph flux (signed flux, linkage, Figure 2, MC), apply and consolidate (Activities 1 and 2, synthesis, MC, "Describe 5 marks", "Analyse 5 marks"), practice (Q1, Q2 and model answers), review and revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson12.sa.html`, SHA256 `623e8c2063b841b9eb270be6360877b3a6a14887bb4c6520cedb4059818a4012` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v09`, sections `define-and-represent-flux`, `change-flux`, `convert-angle-conventions`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Define flux BA cos theta with theta to area normal; distinguish area, field and orientation. Stop before induced emf." Next: "phys-y12-m6-v10: What changes create an induced emf?"

Owner rules applied: as v07 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the loop, field, normal, components, rain streaks, graph and calculation strips are coded, as the kit plan's coded-only decision for this lesson and the HSC style require; the handoff's coil, meter and magnet are plates; every number recalculated in Python; data-sheet symbols Φ = B∥A = BA cos θ; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v08's handoff (Faraday's question), Year 11 resolving a vector into components.

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-01`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-01`: "describe how magnetic flux can change, with reference to the relationship Φ=B_(∥)A=BAcosθ (ACSPH083, ACSPH107, ACSPH109)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v08's final frame (a tilted square loop in a uniform field, normal arrow, "?"). Teaches: the observation (turning the loop edge on reduces the field through it to zero); the rain analogy; magnetic flux as the amount of field passing through an area, Φ = BA when the field is at right angles to the surface, unit weber (1 Wb = 1 T m²); the area normal; θ between B and the normal; B split into the part along the normal (passes through) and the part along the surface (skims across), so Φ = BA cos θ = B∥A; flux against angle (maximum face on, half at 60°, zero edge on, negative past 90°, −BA at 180°); the site worked example (1.5 × 10⁻³ Wb and, corrected, 9.7 × 10⁻⁴ Wb); the plane-angle trap (Φ = BA sin α); the three ways to change flux (B, A, θ) and the no-change case (sliding wholly inside a uniform field). Stops before flux linkage, emf and Faraday's law (v10).

## Decisions

- **Learner question (route wording kept).** "Why does changing loop orientation change magnetic flux?" is causal. The answer, built in order: flux is the amount of field passing through the loop (3); only the part of B along the normal passes through, B cos θ (4); turning the loop changes θ, so it changes how much of the field goes through, with B and A unchanged (5).
- **Hook (site "Before you read, predict", unchanged case).** A loop in a uniform field rotated from face on to edge on; 3 s prediction (increase, decrease, same). The arrows passing through the loop are counted visibly (six face on, three at 60°, none edge on), a counting picture that matches cos θ (author note a).
- **Analogy (scene 2, new): a loop held in steady rain.** Rain falling straight down through a ring: flat (facing the sky) catches the most, tilted less, on its edge none. Assumptions in "Memory aid check"; it is introduced before the definition because it carries the "facing" idea, and the narration then says field lines "behave the same way" for the geometry only.
- **Normal first, then components (site Figure 1 and the syllabus's two forms).** The normal is an arrow straight out of the face; θ is between B and the normal. B splits into B cos θ along the normal (through) and B sin θ along the surface (skims across), so Φ = B∥A = BA cos θ, both syllabus forms written.
- **Signed flux (site "Signed flux, linkage and graphs", short).** One sentence: past 90° the field passes through from the other side, so the flux is negative; at 180°, −BA. Kept because v10's emf sign and later generators rely on it; the sign convention depends on the chosen normal (author note b). Flux linkage NΦ is left to v10 (route: v10 distinguishes flux, flux linkage and current).
- **Worked example (site, corrected).** Radius 4.0 cm, 0.30 T, field perpendicular to the plane: A = 5.03 × 10⁻³ m², Φ = 1.5 × 10⁻³ Wb. Plane at 40° to the field: θ = 50°, Φ = 9.7 × 10⁻⁴ Wb (site note 1: the site's 9.6 × 10⁻⁴ comes from rounding Φ to 1.5 × 10⁻³ first). The site's "80 turns" is not mentioned: flux is per turn, and turns belong to v10's linkage.
- **Angle trap (site section 4 and "Describe 5 marks" step 2).** Plane angle α: θ = 90° − α, Φ = BA sin α. Shown with the site's example "plane at 30° → normal at 60° → 0.5BA". It is the main mistake content (no separate mistake scene); the sin and cos slips are crossed in the feedback.
- **Three ways to change flux (site section 3, Activity 2 and "Describe 5 marks").** B (a magnet moved closer, an electromagnet switched on), A within the field (stretching, sliding part-way out), θ (turning). The no-change case (sliding sideways wholly inside a uniform field; site Activity 2 item 4) closes the scene. "Changing flux makes an emf" is held for v10; the scene says only what changes flux.
- **Memory aid (scene 9, new): "Face on, full flux. Edge on, no flux. Measure theta from the normal."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: area 0.020 m², 0.60 T, field perpendicular to the plane (0.012 Wb), then turned through 60° (0.0060 Wb). A2: 10 cm × 5.0 cm, 0.40 T, plane at 30° to the field: 1.0 × 10⁻³ Wb. Crossed: A1 "sin 60° (0.010 Wb)"; A2 "cos 30° (1.7 × 10⁻³ Wb)".
- **Significant figures.** Site data give 5.03 × 10⁻³ m², 1.5 × 10⁻³ Wb and 9.7 × 10⁻⁴ Wb (two significant figures, like the data); A1 0.012 and 0.0060 Wb; A2 1.0 × 10⁻³ Wb.
- **Handoff (route next).** Scene 13 states that changing flux is what Faraday found makes a current and changes to the bench: coil, galvanometer and bar magnet, needle at zero, "?" (v10: "What changes create an induced emf?"). See "Final frame".
- **Colour key:** field slate; the loop's outline ink with a pale fill for its face; the area normal navy (as r in Module 5, root decision 1); the B component along the normal slate, along the surface grey; rain streaks pale blue-grey; angle arcs ink; the flux graph slate.
- **Colour roles (Revision 2, fixed for the whole video).** As the colour key, plus: flux Φ readouts and the arrow counter slate; θ ink; the plane angle α grey-ink with its crossing red when it is wrongly used as θ; areas and givens navy; framed answers in a dark-ink frame; crossed slips and slip tags red; hand-font tags in the colour of the quantity they mark (navy on the normal, slate on field and flux, grey on the skimming part). Grey and pale blue-grey items stay at full opacity.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scene 6 and feedback rows 52 px; framed "Φ = B∥A = BA cos θ" 60 px); live readouts (arrow counter; scene 5 θ, cos θ and Φ) about 52 px; graph axis labels, givens and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px, 30 px on the answer-side strip; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2; audit).** The opening frame is v08's final frame (coded loop). On the first sentence a framed inset (about 35% of the frame) shows the real bench this lesson leads to: the painted coil (`phys-y11-solenoid-coil-v1.png`), bar magnet (`phys-y11-bar-magnet-v1.png`) and galvanometer (`y12p-galvanometer-v1.png` with `y12p-galvanometer-needle-v1.png`, needle at zero), with a pen arrow from one turn of the coil to the coded loop and the tag "every turn is a loop like this". The same bench closes the video in scene 14.
- **Simulation (Revision 2).** Core live control in scene 5: the turning loop with its arrow counter plus live readouts θ, cos θ and Φ for B = 0.50 T and A = 0.040 m² (BA = 0.020 Wb; Python: 0° 0.020 Wb; 30° 0.017; 60° 0.010; 90° 0; 120° −0.010; 180° −0.020), and a dot riding the cos curve. The hook and the rain panel are live counters too.
- **Stage changes (Revision 2).** Revision 1 kept one loop stage through scenes 3 to 5 (about 104 s). Scenes 3 and 4 share the face-on loop and the component split (about 64 s); scene 5 is a clear change to the graph stage with the live readouts. No set-up now runs past about 64 s.
- **Site sources used:** predict box (1); vocabulary "Magnetic flux", "Weber" (3); Φ = BA cos θ, normal and θ definitions (4); Figure 1 (0°, 60°, 90°: BA, 0.5BA, 0) (5); signed flux (5); worked example (6, corrected); angle convention and its example (7); three ways, misconception "a strong field always induces a current" (held for v10), Activity 2 (8); "Describe 5 marks" structure (8); MC 0.40 T and 5.0 cm square (A1 idea); Q1 (A2 idea). Not used: flux linkage and the Φ-t graph (v10), "Analyse 5 marks" (linkage, v10), Activity 1 values, Q2 rate comparison (v10).
- **Site notes (quoted from site lesson 12, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Error (early rounding): worked example part (b) "$\Phi = BA\cos 50° = (1.5 \times 10^{-3})(0.643) = 9.6 \times 10^{-4}$ Wb". With the unrounded Φ = 1.508 × 10⁻³ Wb, BA cos 50° = 9.69 × 10⁻⁴ Wb, which is 9.7 × 10⁻⁴ Wb to two significant figures. Correction: "= 9.7 × 10⁻⁴ Wb" (carry 1.508 × 10⁻³).
  2. Precision note: the worked example says the coil "has 80 turns" but every part asks for the flux, which is per turn; the turn count is never used. Suggest removing it or adding a part asking for the flux linkage (80 × 1.5 × 10⁻³ = 0.12 Wb-turn), with a note that it is linkage, not flux.
  3. Checked and correct: Figure 1 (BA, 0.5BA, 0); part (a) (5.03 × 10⁻³ m², 1.5 × 10⁻³ Wb); MC 5.0 cm square in 0.40 T (1.0 × 10⁻³ Wb); MC plane at 60° (1.73 × 10⁻³ Wb); MC linkage (1.0 × 10⁻² Wb-turn); Q1 (6.0 × 10⁻⁴ and 3.0 × 10⁻⁴ Wb); Q2 (case B twice case A).
- **Cause chain taught, in order:** (1) turning a loop in a fixed uniform field changes how much field passes through it, down to none edge on (1, 2); (2) that amount is magnetic flux, Φ = BA when B passes straight through (3); (3) only the part of B along the normal passes through the loop; the part along the surface skims across (4); (4) so Φ = BA cos θ, with θ between B and the normal (4); (5) turning the loop changes θ, so the flux follows cos θ though B and A are unchanged (5); (6) an angle given to the plane must be converted (7); (7) flux also changes when B or the area in the field changes, and does not change if none of the three changes (8).
- **Entry knowledge (route `entryKnowledge`):** magnetic field strength B in tesla (Year 11 and v04 to v08); area of a rectangle and a circle; resolving a vector into components; cos of 0°, 50°, 60°, 90°, 180°.
- **Learner-visible vocabulary (plain meaning at first use):** magnetic flux Φ (how much magnetic field passes through an area, 3); weber (the unit of flux, one tesla times one square metre, 3); normal (an arrow straight out of a surface, at right angles to it, 4); B parallel, B∥ (the part of the field along the normal, 4); plane of the loop (the flat surface it lies in, 6).
- **Legacy logic ported:** none. The coded family `m6-generator-flux` (area normal and cosine) supplies the rotating loop and normal; its emf graph is not used here (v10, v18).
- **New explainer motion:** **loop in a field** (a coded square loop drawn in perspective in a field of evenly spaced slate arrows, rotating about a vertical axis; the arrows passing through its face brighten and a counter shows how many; a navy normal rotating with it; an arc θ between B and the normal); **component split** (one field arrow at the loop splitting into slate along-normal and grey along-surface parts); **rain panel** (pale streaks falling on a tilting ring, a counter of streaks through it); `DataGraph` (Φ/BA against θ, 0° to 180°, with a dot tracking the rotating loop); **change board** (three mini-loops: field strength rising, area growing or sliding part-way out, loop turning; a fourth sliding wholly inside the field with a steady counter); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the loop stage on the left; working or graph on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Counting field arrows through the loop is a picture of flux, not a definition: drawn line spacing is proportional to B, and the count through the loop is proportional to the projected area A cos θ. The stage uses 6 arrows through face on, 3 at 60°, 0 at 90°, matching cos θ.
  (b) Sign: Φ = B·A with A along the chosen normal; the sign depends on that choice. Rotating the loop (and its normal) past 90° makes Φ negative relative to the starting normal. The narration says "we call the flux negative" for the field passing through from the other side.
  (c) Rotation axis: the loop turns about a vertical axis in the plane of the screen, at right angles to the field (field to the right), so θ runs from 0° to 180°.
  (d) Pronunciations: "phi" as "fye"; "B parallel"; "webers"; "cos" as "coz"; "sine".
- **Open decisions for root:**
  - **1. Signed flux sentence (learning review).** Scene 5's "negative flux" sentences (about 150 characters) may be cut if the review finds them a distraction; v10 or v18 would then introduce the sign.
  - **2. Rain analogy (learning review).** Keep, or replace with a pure field-arrow count if the review finds the rain adds a second picture to hold.
Main question: *Turn a loop in a steady uniform field from face on to edge on, and the field passing through it falls to zero, though the field and the loop are unchanged. Why?*
Entry knowledge: B in tesla; areas; resolving a vector; cos values.
Stops after: flux, weber, normal, Φ = B∥A = BA cos θ, the flux-angle curve, the plane-angle trap, three ways to change flux. No linkage, no emf.
Handoff: v10, what changes create an induced emf.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *Φ*, *B*, *A*, *θ*, *α*.

### 1. hook (turn the loop)
> Here's a square loop of wire in a uniform magnetic field. When the loop faces the field square on, lots of field passes through it. Now turn the loop until it's edge on to the field. What happens to the amount of field passing through it? Make your **prediction**. It falls, all the way to **zero**. The field hasn't changed, and neither has the size of the loop. Only its direction has. So why does turning a loop change the field passing through **it**?

Visual: opens on v08's final frame (see "Opening frame"); the "Next" chip becomes the heading: "Why does changing loop orientation change magnetic flux?"; the Faraday tag fades. On "faces the field square on" the loop turns to face the field (normal along B) and six arrows passing through its face brighten; a counter "through the loop: 6". On "prediction" a 3 s `Countdown` beside three chips "more", "less", "the same". On "zero" the loop turns smoothly to edge on; the counter falls 6, 5, 3 ... 0 and the arrows skim past its edge; the "less" chip ticks. On "it" the loop turns back to 60° and holds (counter 3), with a tag "same B, same loop". Anchor (Revision 2): from "Here's a square loop of wire" a framed inset at the top right (about 35% of the frame) shows the painted coil (`phys-y11-solenoid-coil-v1.png`), bar magnet (`phys-y11-bar-magnet-v1.png`, coded "N") and galvanometer (`y12p-galvanometer-v1.png` with its needle layer at zero) on a bench line, with a pen arrow from one turn of the coil to the coded loop and an ink hand tag "every turn is a loop like this"; the inset fades on "zero". Hand tags: slate "6 through" by the counter at the start, slate "0 through" at edge on, with a pen ring round the counter.

### 2. a loop in the rain
> Picture the same loop held out in steady rain that falls straight down. Hold it flat, facing the sky, and the most rain falls through it. Tilt it, and less gets through. Turn it on its edge, and none does, even though it's the same loop in the same **rain**. Magnetic field passes through a loop in the same way. What matters is how much of the loop's area faces the **field**.

Visual: camera change to the rain panel: pale vertical streaks falling evenly; the same coded loop, horizontal (facing up), with streaks passing through it counted "6". On "Tilt it" the loop tilts to 60° from horizontal; counter "3"; a shadow-like projection of the loop on a line below shows its narrower "face to the rain". On "rain" the loop turns on its edge; counter "0"; streaks pass beside it. On "Magnetic field passes through a loop in the same way" the panel rotates 90° so the streaks become the slate field arrows of scene 1, the loop at 60°. On "field" the projected face (the loop's outline as seen along the field) highlights, tag "what counts: how much of the loop faces the field". Revision 2: the rain panel fills the frame (ring about 420 px); pale blue-grey hand tags "flat: most", "tilted: less", "edge: none" under the three positions, with a pen bracket on the projected face.

### 3. magnetic flux
> That amount has a name, magnetic flux. It measures how much magnetic field passes through an area. When the field goes straight through, at right angles to the loop's surface, the flux is just the field strength times the area. Phi equals B **A**. Flux is measured in webers. One weber is one tesla times one square **metre**.

Visual: the loop turns face on again (six arrows through). On "magnetic flux" a chip "magnetic flux Φ: how much magnetic field passes through an area". On "field strength times the area" the field label "B (T)" and the loop's face "A (m²)" pulse. On "A" the equation strip writes "Φ = BA (B at right angles to the surface)". On "metre" a chip "unit: weber, 1 Wb = 1 T m²" (36 px). Revision 2: "Φ = BA" framed; slate hand tag "straight through" with a pen ring round the six arrows.

### 4. the normal and the part that goes through
> To describe a tilted loop, we use its normal. That's an arrow sticking straight out of the loop's face, at right angles to its **surface**. Theta is the angle between the field and this **normal**. Now split the field into two parts. The part along the normal goes through the loop. The part along the surface just skims across it, and never goes **through**. The part that goes through is B cos theta, so the flux is B A cos **theta**. The syllabus also writes it as B parallel times A, where B parallel is the part of the field parallel to the **normal**.

Visual: the loop turns to 60° and holds. On "normal" a navy arrow "normal" grows straight out of the loop's face; on "surface" a small right-angle mark where it meets the face. On the second "normal" an arc "θ" draws between a slate field arrow and the navy normal (tail to tail at the loop's centre). On "split the field into two parts" one field arrow at the loop resolves: a slate component along the normal "B cos θ" and a grey component along the surface "B sin θ". On "through" the grey component slides along the face and off its edge (tag "along the surface: does not pass through"); the slate component passes through the face. On "theta" `AlignedAlgebra` "Φ = (B cos θ) × A = BA cos θ". On the last "normal" the syllabus form writes and frames "Φ = B∥A = BA cos θ" (60 px), grey-ink tag "Physics Stage 6 (2017)", with "B∥: the part of B along the normal". Revision 2 (audit): grey hand tag "skims across" on the sliding component with a pen arrow along the face; navy hand tag "from the normal" on the θ arc.

### 5. turning the loop
> Now watch the flux as the loop turns. Facing the field square on, theta is zero, cos zero is one, and the flux is the biggest it can be, B A. At sixty degrees, cos is a half, so the flux **halves**. Edge on, theta is ninety degrees, cos is zero, and the flux is **zero**. Keep turning, and the field passes through from the other side, so we call the flux **negative**. Turned right round, it's minus B **A**. That's why orientation matters. Turning the loop changes how much of the field goes through it, even though B and A stay exactly the **same**.

Visual (Revision 2 stage change, the core live control): clear change to the graph stage: the turning loop at the left (about 40% of the frame) and on the right a `DataGraph` "Φ / BA" against "θ (degrees)" from 0 to 180, −1 to 1. A readout panel under the loop updates every frame (52 px): ink "θ", ink "cos θ", slate "Φ" for B = 0.50 T and A = 0.040 m² (0°: 0.020 Wb; 60°: 0.010 Wb; 90°: 0; 180°: −0.020 Wb), beside the arrow counter. On "Facing the field square on" the loop sits at 0°, a dot at (0, 1), counter 6. On "halves" the loop turns to 60°, the dot moves along a slate cos curve to (60, 0.5), counter 3. On "zero" the loop turns to 90°, dot at (90, 0), counter 0. On "negative" the loop turns past 90°; the arrows now pass through its back face (pale red tint on that face, author note b) and the curve goes below the axis. On "A" the loop reaches 180°, dot at (180, −1), "Φ = −BA". On "same" the loop sweeps back to 0° while the dot runs back along the curve; tags "B fixed", "A fixed", "θ changes". Revision 2: slate hand tags "halves" and "zero" at the 60° and 90° points, with a pen ring round each; grey-ink hand tag "other side: minus" on the negative branch.

### 6. a worked example
> Here's an example. A flat circular coil of radius four point zero centimetres sits in a field of zero point three zero tesla, at right angles to the plane of the coil. Its area is pi r squared, about five point zero three times ten to the minus three square metres. The field goes straight through, so theta is zero, and the flux is about one point five times ten to the minus three **webers**. Now turn the coil until its plane makes forty degrees with the field. Careful here. Theta is measured from the normal, not the plane, so theta is ninety minus forty, fifty **degrees**. The flux is B A cos fifty, about nine point seven times ten to the minus four **webers**.

Visual: board change to the working layout, a coded side view of the coil (edge on as a line, about 40% of the frame) with the field arrows at the left. Task strip: "Find the flux through the coil: (a) field perpendicular to its plane, (b) plane at 40° to the field." Equation strip: "Φ = BA cos θ (θ from the normal)". Givens grouped: "r = 4.0 cm = 0.040 m", "B = 0.30 T". On "pi r squared" `AlignedAlgebra` "A = πr² = π × 0.040² = 5.03 × 10⁻³ m²". On "webers" "(a) θ = 0°: Φ = 0.30 × 5.03 × 10⁻³ × 1 = 1.5 × 10⁻³ Wb". On "forty degrees" the small coil's line tilts to 40° from the field, arc "40°" between the plane and B. On "degrees" the navy normal appears with arc "θ = 90° − 40° = 50°". On the last "webers" "(b) Φ = 0.30 × 5.03 × 10⁻³ × cos 50° = 9.7 × 10⁻⁴ Wb" (author note: keep 1.508 × 10⁻³ unrounded; site note 1). Revision 2 (audit): both results (1.5 × 10⁻³ Wb and 9.7 × 10⁻⁴ Wb) framed; crossed classic slip: chip "cos 40° = 1.2 × 10⁻³ Wb" fades in and is crossed in red, red hand tag "40° is to the plane"; navy hand tag "cm → m" with a pen ring round "0.040 m".

### 7. the angle trap
> That's the most common trap in flux questions. If you're given the angle between the field and the plane of the loop, call it alpha. The normal is at ninety degrees minus alpha, so the flux becomes B A sine **alpha**. For example, a plane at thirty degrees to the field has its normal at sixty degrees, and the flux is half of B A. So always ask, what angle does the field make with the normal? Field at right angles to the plane means the most flux. Field along the plane means none at **all**.

Visual: board clears to a large side view: the loop as a line, the field arrows, arc "α" between the plane and B. On "alpha" the navy normal and arc "θ = 90° − α" draw; `AlignedAlgebra` "Φ = BA cos(90° − α) = BA sin α". On "thirty degrees to the field" the line sits at 30° to the field: "α = 30° → θ = 60° → Φ = 0.5 BA". On "what angle does the field make with the normal" a boxed question card "Angle between B and the normal?". On "all" two side views (each about 300 px): plane at right angles to B, "Φ = BA (max)"; plane along B, "Φ = 0". Revision 2 (audit): "Φ = BA sin α" framed; a chip "θ = α" fades in and is crossed in red, red hand tag "from the normal, not the plane"; navy pen arc from the plane to the normal marking the 90°.

### 8. three ways to change flux
> So flux can change in three ways. Change the field strength, for example by moving a magnet closer, or switching on an electromagnet. Change the area inside the field, by stretching the loop, or sliding it part of the way out of the **field**. Or change the angle, by turning the **loop**. But sliding a loop sideways, while it stays completely inside a uniform field, changes **nothing**. Same B, same A inside the field, same angle, so the same **flux**.

Visual: board change to the change board: three mini-stages in a row, each with a flux counter. On "Change the field strength" the first stage's field arrows thicken and crowd (counter rises), tag "B". On "Change the area inside the field" the second loop stretches (counter rises); on "field" a second copy slides half out of a shaded field region (counter halves), tag "A (inside the field)". On "loop" the third loop turns (counter falls), tag "θ". On "nothing" a fourth stage below: a loop slides sideways across a large uniform field region, staying fully inside; its counter stays fixed. On "flux" a chip "B, A and θ unchanged → Φ unchanged", framed. Revision 2: the four stages are each about 420 px wide with counters at 52 px; hand tags slate "B", navy "A inside", ink "θ" on the three changing stages, and a pen ring round the fourth stage's steady counter; a chip "any motion changes flux" fades in and is crossed in red.

### 9. a way to remember
> Here's a way to remember it. Face on, full flux. Edge on, no flux. And always measure theta from the **normal**.

Visual: board clears to two loops side by side, one face on (six arrows through), one edge on (none). On "Face on, full flux" the left loop pulses; on "Edge on, no flux" the right loop pulses. On "normal" the handwritten line writes large above (52 px), inside a framed memory card: "Face on, full flux. Edge on, no flux." with "θ: between B and the normal" under it (36 px) and both navy normals drawn. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A flat loop of area zero point zero two zero square metres is in a uniform magnetic field of zero point six zero tesla, with the field at right angles to the plane of the loop. Calculate the flux through the loop. Then calculate the flux after the loop has turned through sixty degrees from this position. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A flat loop of area 0.020 m² is placed in a uniform magnetic field of 0.60 T, with the field perpendicular to the plane of the loop. (a) Calculate the magnetic flux through the loop. (b) The loop is rotated through 60° from this position about an axis perpendicular to the field. Calculate the new magnetic flux. (2 marks)" A small coded side view: the loop as a line at right angles to the field arrows. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Field at right angles to the plane is along the normal, so theta is zero, and the flux is B A, zero point six zero times zero point zero two zero, which is zero point zero one two **webers**. Turned through sixty degrees, theta is sixty, so the flux halves to zero point zero zero six zero **webers**. The slip is using sine sixty. Theta starts at zero and grows to sixty, so it's **cos**.

Visual: card shrinks to the top; "perpendicular to the plane" and "rotated through 60°" underline. On "zero point zero one two webers" `AlignedAlgebra` "(a) Φ = BA cos 0° = 0.60 × 0.020 = 0.012 Wb". On "zero point zero zero six zero webers" "(b) Φ = BA cos 60° = 0.012 × 0.5 = 0.0060 Wb", with the small side view turning and its normal at 60° to B. Both results framed (audit). Answer side (Revision 2): a navy givens strip "A = 0.020 m², B = 0.60 T, θ = 0° then 60°" and the card's side view enlarged (about 420 px) with the navy normal. On "cos" a chip "Φ = 0.012 × sin 60° = 0.010 Wb" fades in and is crossed in red (caption "θ is from the normal: cos θ"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A rectangular loop measures ten centimetres by five point zero centimetres, in a uniform magnetic field of zero point four zero tesla. The plane of the loop makes an angle of thirty degrees with the field. Calculate the magnetic flux through the loop. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A rectangular loop measuring 10 cm × 5.0 cm is in a uniform magnetic field of 0.40 T. The plane of the loop makes an angle of 30° with the magnetic field. Calculate the magnetic flux through the loop. (2 marks)" A small coded side view: the loop as a line at 30° to the field arrows, arc "30°" between the line and the field. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The area is zero point one zero times zero point zero five zero, five point zero times ten to the minus three square metres. The plane is at thirty degrees, so the normal is at sixty. The flux is zero point four zero times the area times cos sixty, one point zero times ten to the minus three **webers**. The slip is putting thirty straight into cos. Thirty is the angle to the plane, not the **normal**.

Visual: card shrinks to the top; "plane of the loop makes an angle of 30°" underlines. `AlignedAlgebra` "A = 0.10 × 0.050 = 5.0 × 10⁻³ m²"; "θ = 90° − 30° = 60°" with the navy normal drawn on the diagram; on "webers" "Φ = 0.40 × 5.0 × 10⁻³ × cos 60° = 1.0 × 10⁻³ Wb". "1.0 × 10⁻³ Wb" framed (audit). Answer side (Revision 2): a navy givens strip "10 cm × 5.0 cm = 0.10 m × 0.050 m, B = 0.40 T, plane at 30° to B" and the card's side view enlarged with the normal at 60° to B. On "normal" a chip "Φ = 0.40 × 5.0 × 10⁻³ × cos 30° = 1.7 × 10⁻³ Wb" fades in and is crossed in red (caption "30° is to the plane: θ = 60°"). Hold about 1 second.

### 14. handoff
> So flux changes when the field, the area or the angle changes. Michael Faraday found that a changing flux is exactly what makes a current flow. Connect a coil to a sensitive meter, and bring a magnet near it. When does the needle **move**?

Visual: board clears (camera change) to the bench: the coil plate (`phys-y11-solenoid-coil-v1.png`) at the centre, its leads (coded) running to the galvanometer (`y12p-galvanometer-v1.png` with its needle layer `y12p-galvanometer-needle-v1.png`, new, requested in v10) at the right, needle at zero; the bar magnet plate (`phys-y11-bar-magnet-v1.png`, coded "N" on the end facing the coil) at the left, still. On "changing flux" a small chip "changing Φ" with a slate up-down arrow. On "bring a magnet near it" a coded amber motion arrow "→" appears behind the magnet (no movement yet). On "move" a "?" beside the needle and a chip "Next: what changes create an induced emf?". Revision 2: the bench fills the frame (coil about 500 px wide, galvanometer about 320 px); ink hand tag "needle: still" with a pen ring round the zero (it fades before the hold, so the final frame below is unchanged). Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Flux Φ: field through an area; 1 Wb = 1 T m².
2. Φ = B∥A = BA cos θ, θ from the normal.
3. Face on: Φ = BA. Edge on: Φ = 0.
4. Angle α to the plane: θ = 90° − α.
5. Φ changes if B, A or θ changes.

Memory aid (framed card under the notes, hand lettering, 44 px): *Face on, full flux. Edge on, no flux.* Bullets 36 px in the role colours; no paragraphs. The quiet hold is about 60 s (at least 40 s).

## Teaching checks

- **Does it explain causes?** Why turning changes flux: only B's part along the normal passes through (4), so the flux follows cos θ (5). Why edge on gives zero: all of B skims along the surface (4, 5). Why the plane angle needs converting (7). Why sliding inside a uniform field changes nothing (8).
- **Misconceptions addressed:** θ measured from the plane (6, 7, 13, crossed); sin and cos swapped (11, crossed); flux depends only on B (1, 5); any motion of a loop in a field changes flux (8).
- **One idea at a time:** observation (1), picture (2), definition (3), angle (4), the curve (5), a calculation (6), the trap (7), all three changes (8).
- **Video makes it easier:** arrows through the loop counted as it turns (1, 5); rain streaks and the tilted ring (2); the grey component sliding off the edge (4); the dot tracking the cos curve as the loop turns (5); the stretching, sliding and turning mini-loops (8).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 30 s.
- **Avoided double teaching:** resolving vectors (Year 11) in a clause; v08's Faraday question recalled.
- **Syllabus coverage:** `P6-IQ3-01`: Φ = B∥A = BA cos θ (3 to 7); how flux can change (5, 8).
- **Out of scope by design:** flux linkage, emf, Faraday's law (v10); generators (v18).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A flat loop of area 0.020 m² is placed in a uniform magnetic field of 0.60 T, with the field perpendicular to the plane of the loop. (a) Calculate the magnetic flux through the loop. (b) The loop is rotated through 60° from this position about an axis perpendicular to the field. Calculate the new magnetic flux."
Model answer: (a) B is along the normal, θ = 0°: Φ = BA = 0.60 × 0.020 = 0.012 Wb. (b) θ = 60°: Φ = BA cos 60° = 0.012 × 0.5 = 0.0060 Wb. Classic mistake (crossed): using sin 60° (0.010 Wb).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks).** "A rectangular loop measuring 10 cm × 5.0 cm is in a uniform magnetic field of 0.40 T. The plane of the loop makes an angle of 30° with the magnetic field. Calculate the magnetic flux through the loop."
Model answer: A = 0.10 × 0.050 = 5.0 × 10⁻³ m²; θ (to the normal) = 90° − 30° = 60°; Φ = BA cos 60° = 0.40 × 5.0 × 10⁻³ × 0.5 = 1.0 × 10⁻³ Wb (equivalently BA sin 30°). Classic mistake (crossed): BA cos 30° = 1.7 × 10⁻³ Wb.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook counts | 6 arrows face on, 3 at 60°, 0 edge on (cos θ picture) | 1, 2, 5 |
| cos values | cos 0° = 1, cos 60° = 0.5, cos 90° = 0, cos 180° = −1 | 5 |
| Worked example (site, corrected) | r = 0.040 m, B = 0.30 T; A = 5.027 × 10⁻³ m²; Φ = 1.508 × 10⁻³ ≈ 1.5 × 10⁻³ Wb; θ = 50°: Φ = 9.693 × 10⁻⁴ ≈ 9.7 × 10⁻⁴ Wb (site: 9.6) | 6, key notes |
| Trap example (site) | α = 30° → θ = 60° → Φ = 0.5 BA | 7 |
| A1 | 0.60 × 0.020 = 0.012 Wb; × 0.5 = 0.0060 Wb; sin slip 0.012 × sin 60° = 0.0104 Wb | 10, 11 |
| A2 | A = 5.0 × 10⁻³ m²; θ = 60°; Φ = 1.0 × 10⁻³ Wb; cos 30° slip 1.73 × 10⁻³ Wb | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- π × 0.040² = 5.0265 × 10⁻³; × 0.30 = 1.50796 × 10⁻³; × cos 50° (0.642788) = 9.6930 × 10⁻⁴; site's rounded 1.5 × 10⁻³ × 0.643 = 9.645 × 10⁻⁴.
- A1: 0.60 × 0.020 = 0.012; × cos 60° = 0.0060; × sin 60° = 0.010392.
- A2: 0.10 × 0.050 = 5.0 × 10⁻³; × 0.40 = 2.0 × 10⁻³; × cos 60° = 1.0 × 10⁻³; × cos 30° = 1.7321 × 10⁻³.
- Site checks: 0.40 × 0.050² = 1.0 × 10⁻³; 2.0 × 10⁻³ × sin 60° = 1.732 × 10⁻³; 50 × 2.0 × 10⁻⁴ = 1.0 × 10⁻²; Q1 0.25 × 2.4 × 10⁻³ = 6.0 × 10⁻⁴, × 0.5 = 3.0 × 10⁻⁴.

## Memory aid check

- **"Face on, full flux. Edge on, no flux. Measure theta from the normal."** Meaning, as said in scene 9: a loop whose face is at right angles to the field (field along the normal) has the maximum flux BA; a loop whose plane contains the field has zero flux; θ in Φ = BA cos θ is between B and the normal. Assumptions checked: a uniform field over a flat loop; "face on" means facing the field (normal along B), not facing the viewer; magnitude only (the sign past 90° is in key note 3). It helps a new case: A1 (face on: BA), A2 (convert the plane angle), and v18's rotating generator coil (flux maximum when face on). Introduced after the explanation (3 to 7).
- **Rain analogy (scene 2).** Assumptions checked: rain falling uniformly and vertically (a uniform field in one direction); a still loop; the rain through the loop is proportional to its area projected at right angles to the rain, A cos θ, as flux is. Limits (author note, not learner copy): rain is matter that moves and is caught; field does not flow, and flux is not "stuff passing". The narration says the field passes through "in the same way", for the geometry only.
- **Considered, not used:** "Flux counts field lines" as the main aid (a useful picture, used in the hook, but line counts depend on how many lines are drawn).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " inside each scene, joined with a space, bold markers removed; total = sum of the scene strings): **5,595 characters**, 15 scenes; narration unchanged from Revision 1, whose stated 5,609 included the 14 joins. Characters per scene (1 to 15): 443, 369, 318, 537, 532, 657, 487, 440, 108, 338, 377, 283, 396, 235, 75. At 13.3 characters per second the speech is about 421 s; add about 2 s for the scene 5 readouts to settle at each stop; add about 3 s for the prediction countdown, 2 s for the turning loop in scene 1, 2 s for the sweep in scene 5, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 90 s of holds and countdowns; the notes hold is about 60 s in all): **about 511 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's negative-flux sentences (open decision 1); scene 7's example sentence; scene 2's last sentence.

## Opening frame

v08's final frame (designed in this wave, `phys-y12-m6-v08.md`): paper background; evenly spaced slate field arrows pointing to the right, "B"; a square coded wire loop in perspective, tilted about a vertical axis by about 50° from facing the field, the arrows through it brightened; a navy arrow at right angles to its face; a small tag "Michael Faraday, 1831"; a large "?"; heading "Why do parallel currents attract or repel?"; chip "Next: why does changing loop orientation change magnetic flux?". Scene 1 turns the chip into the heading and turns the loop to face the field.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a bench line; the bar magnet plate at the left with a coded "N" on the end facing right and a coded amber motion arrow "→" behind it (the magnet is still); the coil plate at the centre, its axis horizontal and in line with the magnet; coded leads from the coil's terminals to the galvanometer plate at the right, needle at the centre zero; a "?" beside the needle; a chip "changing Φ"; heading unchanged ("Why does changing loop orientation change magnetic flux?"); a chip reads "Next: what changes create an induced emf?". v10 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v09` (route phys-y12-m6-v09). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v09` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v09` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, rain, flux, normal, turning, worked-example, angle-trap, three-ways, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: loop in a field (3D-projected rotation, arrow counter), rain panel, component split, `DataGraph` with a tracking dot, change board, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera change (rain); 2 to 3 camera continue (the panel rotates back to the field); 3 to 4 camera continue; 4 to 5 clear change to the graph stage (Revision 2); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v09-learning-review.md`, `science_check` = `checks/p-y12-m6-v09-science-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-solenoid-coil-v1.png` (1774 × 887, RGBA): the coil in the handoff (14) and the scene 1 inset (Revision 2).
- Revision 2, inspected 7 Nov: `public/assets/physics/y12p-galvanometer-v1.png` and `y12p-galvanometer-needle-v1.png` (delivered by brief 189; meter and needle share one canvas, centre-zero scale with seven ticks, red and black terminals): scenes 1 (inset) and 14.
- `public/assets/physics/phys-y11-bar-magnet-v1.png` (2172 × 724, RGBA; sidecar `phys-y11-bar-magnet-v1.json`, end-face centres (286, 365) and (1885, 365)): the magnet in the handoff (14), red end coded "N".
- **Checked, not used:** `phys-y11-plotting-compass-v1.png` (a field-direction tool; the flux picture uses arrows); `phys-y11-coil-former-v1.png` (the loop in the reasoning stages is a single coded turn).

Need (new plates): none. The galvanometer plates requested through `phys-y12-m6-v10.md` were delivered by brief 189 and are listed under "Have".

Coded: the loop, field arrows, counter, normal, components, arcs, rain streaks, graph, the change board, calculation strips, crossed chips, attempt cards and diagrams, countdowns, key notes board, leads and the motion arrow.

Kit gaps (for the v09 build brief):
1. **Loop in a field.** A coded square loop rendered in perspective rotating about a vertical axis (the `engine3d` projection could serve), with the arrows passing through its face highlighted and counted, a rotating normal and the θ arc.
2. **Rain panel.** Falling streaks, a tilting ring and a streak counter; a 90° panel rotation that turns the streaks into field arrows.
3. **Change board.** Four mini-stages with flux counters (B rising, A stretching or sliding out, θ turning, sliding inside).

## Codex asset brief

No new plates for v09. The galvanometer plates for scene 14 are specified in `phys-y12-m6-v10.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: flux as the amount of field through an area; Φ = BA at right angles; the weber; the normal and θ; Φ = B∥A = BA cos θ; the 0°, 60°, 90°, 180° values and the negative sign past 90° (author note b); the plane-angle conversion; the three ways and the no-change case.
3. Confirm site note 1 (9.7 × 10⁻⁴ Wb, not 9.6) and that scene 6 carries the unrounded value.
4. Confirm the memory aid's and the rain analogy's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (no Faraday portrait).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 and 2 under Decisions to root.

## YouTube metadata (draft)

Title: Magnetic Flux: Why Loop Orientation Matters (Φ = BA cos θ) | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson12.sa.html

Turn a loop in a steady magnetic field from face on to edge on, and the field passing through it falls to zero, though nothing about the field or the loop has changed. See what magnetic flux measures, why only the part of the field along the normal passes through, how to use Φ = BA cos θ, the angle trap that catches most students, and the three ways flux can change. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"describe how magnetic flux can change, with reference to the relationship Φ = B∥A = BA cos θ"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why parallel currents attract or repel. Next: what changes create an induced emf.

#HSCPhysics #Physics #MagneticFlux #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from B in tesla and vector components; check that the counting picture and the rain analogy support rather than compete; that the grey component "skimming off" makes cos θ clear; that the angle trap lands; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The turning loop with its arrow count, the component split and the dot tracking the cos curve carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 189 findings (`checks/p-y12-m6-v09-learning-review.md`, `checks/p-y12-m6-v09-science-check.md`): 0 blocker, 0 should fix, 0 optional. The review's keep notes are followed: the rain analogy with its explicit rain-to-field transition stays (open decision 2 settled: keep), the short negative-flux sentence stays (open decision 1 settled: keep), and the arrow count remains a picture of flux, not its definition (author note a).

Visual upgrade (to `../maths-visual-standard.md`, the build gate and the audit's phys-y12-m6-v09 section):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Scene 1 anchor (audit item 1, adapted to keep the opening join): the opening frame is still v08's Revision 2 final frame (unchanged); a framed inset of the painted coil, bar magnet and galvanometer (delivered by brief 189, inspected 7 Nov) then appears with a pen arrow from one turn of the coil to the coded loop, "every turn is a loop like this". A full cut to the bench was not used because scene 1 must open on v08's frame and its narration is about the coded loop.
- Core live control (scene 5): the turning loop gains live θ, cos θ and Φ readouts (B = 0.50 T, A = 0.040 m²; Python 0.020, 0.017, 0.010, 0, −0.010, −0.020 Wb at 0°, 30°, 60°, 90°, 120°, 180°) beside the arrow counter and the cos graph.
- Stage change: scene 5 becomes a clear change to the graph stage, breaking the Revision 1 run of about 104 s over scenes 3 to 5.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 8 and 14), including the audit's "skims across" (4) and "from the normal, not the plane" (7), plus "every turn is a loop like this", "6 through", "0 through", "flat: most", "tilted: less", "edge: none", "straight through", "from the normal", "halves", "zero", "other side: minus", "40° is to the plane", "cm → m", "A inside", "needle: still".
- Framed answers (audit item 2): Φ = BA (3), the syllabus form (4), 1.5 × 10⁻³ Wb and 9.7 × 10⁻⁴ Wb (6), Φ = BA sin α (7), the no-change chip (8), 0.012 and 0.0060 Wb (11), 1.0 × 10⁻³ Wb (13). New crossed slips: "cos 40° = 1.2 × 10⁻³ Wb" (6, Python 0.30 × 5.027 × 10⁻³ × cos 40° = 1.155 × 10⁻³), the red crossing on "θ = α" (7, audit item 3), "any motion changes flux" (8).
- Larger pictures: scene 6's side view about 40% of the frame; scene 7's views and scene 8's stages about 300 and 420 px; scene 14's bench fills the frame.
- Feedback scenes 11 and 13 keep a full-text strip with a navy givens strip and the enlarged card diagram on the answer side (both cards already carry a picture).
- Scene 9: the memory aid becomes a framed card.
- Key notes: five long items (about 650 characters) cut to five short bullets (about 200 characters) with the framed memory card; quiet hold about 60 s.
- Assets: the galvanometer plates move from "Need" to "Have". Type sizes stated. Review evidence path corrected to the science-check file.

New plate requests: none.

Counts: 5,609 stated (joined; 5,595 scene sum) to 5,595 characters (scene sum, narration unchanged); about 510 s to about 511 s.
