# Year 11 Physics FA3 V05 (Physics 2025, Year 11, Focus Area 3): Why does the same electric field push a proton and an electron with equal force, but in opposite directions? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v05`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (oil drop).

Narration 5,391 characters, 16 scenes, about 505 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Below 5,500 by design: one syllabus point, fully taught; not padded (open decision 6).

Scope: fifth video of the Year 11 Physics (2025) Focus Area 3 route: the force on a charge in an electric field, F⃗ = qE⃗, with its size from q and E and its direction from the sign of q; problems in a uniform field, including finding a charge and its sign and a balanced (hovering) charged drop. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v04.md` (Revision 1; v04's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson05.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 the force equation with its figure description, true or false, card 2 solving force problems with `we-1` and the quick check, activity 1 force and direction, two truths one lie, card 3 connecting force, field and source charge, last check, fill the blanks, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 5 ("F = qE has no mass in it. Mass only shows up when you ask how fast it moves."; used as a surprise in scene 7, not as the closing memory line; see "Memory aid check"). Route entry: `phys-y11-fa3-v05` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Force on Charges in an Electric Field. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply force on charges in an electric field? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v06: How can I explain and apply coulomb's law?" (this design proposes "What sets the force between two charges, and why does moving them three times closer make it nine times stronger?" for v06's chip; see open decision 1).

**Opening frame (v04's actual handoff, Revision 1, 3 Nov).** v04's scene 15 ends with the memory line "Twice as far, a quarter as strong. Three times as far, a ninth." small at the top; `we-1`'s positive point charge with its teal lines; point P at "2.0 cm" with the readout "E = 6.7 × 10⁴ N C⁻¹" and a teal field arrow pointing away from the charge; a small red "+" labelled "proton" and a small navy "−" labelled "electron" side by side at P, each with a dashed "?" force arrow; chips "how big a push?" and "which way?"; chip "Next: Why does the same electric field push a proton and an electron with equal force, but in opposite directions?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines; the oil drop painted (an object); charges, protons, electrons, field lines, uniform-field arrows, force arrows, free-body diagrams and working coded (abstract diagrams); one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v01 (q = ne, e), v03 (a negative charge is pushed against the field) and v04 (E as force per coulomb) recalled in a phrase each; FA1 (signed vectors, F = ma, balanced forces, W = mg) recalled in a phrase each.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its vector arrows typeset, FA2 root decision 11):

- P25-FA3-G1-07 `cib6be0599`: "Solve problems involving charges in electric fields using F⃗ = qE⃗"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v04's handoff (above); the hook (a proton and an electron at the same point: same push? same way?); F = qE from the meaning of E (force per coulomb times the number of coulombs); units; E is not a force (site misconception 2); the vector form: F⃗ and E⃗ have directions; multiplying by a negative q flips the arrow (site misconception 1); the hook answered (1.1 × 10⁻¹⁴ N each, opposite ways); the uniform field as a given region (same strength and direction everywhere, tagged "how to make one: a later video"); the site's worked example with a sign convention; a prediction (twice the charge, positive); same force, very different accelerations (F = ma; no mass in F = qE; site memory hook); weight negligible for the particles but not for a drop; a hovering oil drop (balanced forces, q = mg/E, sign from directions); memory aid; two attempts. Stops at solving force problems with F = qE in a given field. Not taught: the force between two point charges (v06; the handoff only sets it up); how a uniform field is made, E = V/d and field lines between plates (v07); the motion of charges between plates, work and energy (later FA3); Millikan's experiment by name (author note f).

## Decisions

- **Learner question (v04's proposal adopted; route placeholder rewritten).** "Why does the same electric field push a proton and an electron with equal force, but in opposite directions?" One causal question from the site's lesson 5 hook (corrected to equal-sized charges, site correction 1). The answer is F⃗ = qE⃗ itself: the size of q sets the size of the force, and the sign of q sets its direction. Answer, built in order: hook and prediction (1); the size from the meaning of E (2); the direction from the vector form, and the hook answered (3); then the equation is used: a uniform field (4), a force (5), a prediction (6), mass and acceleration (7), a balanced drop (8, 9); memory aid (10).
- **F = qE built, not announced (v04 decision carried on).** v04 defined E as "the force on each coulomb". Scene 2 multiplies: "a charge of q coulombs feels q times that force". A coded strip of coulomb tiles under the probe shows "1 C: E newtons", "2 C: 2E", "q C: qE".
- **The direction made visible (owner quality bar).** (3) **`VectorScale`**: the teal E⃗ arrow at a point is copied into an amber F⃗ arrow scaled by q; as q is dragged from positive through zero to negative on a coded number slider, the amber arrow shrinks to nothing and grows again pointing the opposite way. The same flip FA1 used for signed vectors (FA1 root decision 2 colours: force amber). The proton and electron at P then get equal amber arrows, opposite ways.
- **Uniform field as a given (decision for root to confirm, open decision 2).** The site's problems all use uniform fields, which v07 explains. Scene 4 defines one in a plain sentence ("the same strength and direction everywhere") and draws it as evenly spaced parallel teal arrows across a region with no source shown (grey tag "how to make one: a later video"). v07's chip can then answer "how do we make one?".
- **Worked example 1 (site `we-1`, numbers unchanged, sign method).** E = 2.5 × 10⁴ N C⁻¹ east; q = −6.0 × 10⁻⁶ C; answer 0.15 N west. The video takes east as positive and lets the sign come out of F = qE (−0.15 N means west), then checks it against v03's rule ("a negative charge is pushed against the field"). The site uses magnitude then direction; both are on screen (a grey row "or: size 0.15 N; negative, so opposite to E").
- **Prediction (3 s, scene 6; site activity 1 and fill the blanks).** "Swap in a positive charge twice as big, at the same spot: what's the force now?" Chips "twice the force, east?" and "same force, west?". Answered in 7 (0.30 N east).
- **Surprise: same force, very different acceleration (site memory hook, lesson 5; site two truths one lie D).** F = qE has no mass in it. Back to the proton and electron at P: equal forces; the electron's mass is about 1840 times smaller (v01's ratio), so its acceleration (a = F/m, FA1) is about 1840 times bigger. **`AccelRace`**: from rest, the two particles leave P in opposite directions; after the same short time the electron's coded trail is about 1840 times longer (drawn with a scale break, tag "not to scale"). Weight of the particles shown in a grey tag as negligible (author note d).
- **Worked example 2, a hovering drop (original; balanced forces from FA1).** "A tiny oil drop of mass 4.9 × 10⁻¹⁵ kg hangs perfectly still in a uniform field of 3.0 × 10⁴ N C⁻¹ pointing down." Answer: W = mg = 4.8 × 10⁻¹⁴ N; the electric force balances it, upward; q = F/E = 1.6 × 10⁻¹⁸ C; force against the field, so negative. A free-body diagram (FA1 kit part) on the painted drop: weight down, electric force up, equal lengths. It is the problem type HSC questions use most and joins this video to FA1's forces.
- **Attempts (original, HSC style).** (A1, find a charge and its sign; site Q2 type, new numbers) "A small charged sphere is placed in a uniform electric field of strength 1.8 × 10⁴ N C⁻¹ directed east. It experiences an electric force of 0.054 N directed west. (a) Calculate the magnitude of the charge on the sphere. (b) State the sign of the charge and justify your answer. (3 marks)" Answer: 3.0 × 10⁻⁶ C; negative, force opposite to the field. Crossed: "q = E ÷ F = 3.3 × 10⁵ C". (A2, hovering drop with electron count; joins v01) "An oil drop of mass 3.2 × 10⁻¹⁵ kg is held stationary in a uniform electric field of strength 4.9 × 10⁴ N C⁻¹ directed vertically upwards. (a) Calculate the magnitude of the charge on the drop, and state its sign. (b) Determine how many electrons the drop has gained or lost. (Take g = 9.8 m s⁻² and e = 1.6 × 10⁻¹⁹ C.) (4 marks)" Answer: 6.4 × 10⁻¹⁹ C, positive; four electrons lost. Crossed: "gained 4 electrons". A2 reverses the field direction from worked example 2, so the sign reasoning is not copied.
- **Mistake scene:** none separate. "Force and field always point the same way" (3; site misconception 1); "E and F are the same thing" (2; site misconception 2); "a heavier charge feels a bigger electric force" (7; site two truths one lie D); "q = E ÷ F" (feedback 1 crossed); "gained electrons, so positive" (feedback 2 crossed).
- **Memory aid:** "Size: q times E. Plus goes with the field, minus goes against it." (see "Memory aid check").
- **Handoff (route next; proposal for v06's question; site card 3 set up, not solved).** Board change: two point charges, q₁ (red "+") at the left and q₂ (red "+") at the right, a distance r apart (dimension line "r"); q₁'s teal lines reach q₂; at q₂ two rows write: "E at q₂ = kq₁/r² (last video)" and "F on q₂ = q₂E (this video)"; a chip "so F = ?"; chips "both charges matter?" and "three times closer?"; then "Next: What sets the force between two charges, and why does moving them three times closer make it nine times stronger?". This is the frame v06 opens on (open decision 1). The substitution itself is v06's first step.
- **Site sources used:** intro (a field waits for a charge: 1); hook (corrected to a proton and an electron: 1, 3); warm-up (rightward field, + and − forces: 3); intentions (Know 1 to 3; Understand 1 to 3; Can Do 1 to 3: 2 to 8, A1); key terms (electric force, field strength, test charge, elementary charge: 2, 3); misconceptions 1 and 2 (3, 2); card 1 and its figure (2, 3); true or false (false: 3); card 2 and `we-1` (5); quick check (B, 0.60 N: not reused, the prediction in 6 tests the same idea); activity 1 (± charge in the same field: 6, 7); two truths one lie (D, mass: 7); card 3 (the handoff, 15); last check (true: 2); fill the blanks (600 N; opposite: 6); Q1 (structure of 5); Q2 (A1 structure); Q3 (the hook's comparison, 3).
- **Site corrections (quoted from site lesson 5 and its memory hook, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Today's hook: "Place a positive charge and a negative charge at the very same point in a field. They feel forces of equal size but in opposite directions." The sizes are equal only if the two charges have the same magnitude (F = qE). Suggest: "Place a proton and an electron at the very same point in a field. They feel forces of equal size but in opposite directions."
  2. Intro: "A field on its own does nothing you can feel, it is potential, waiting." "Potential" has a specific meaning in electricity (electric potential and potential difference, later in Focus Area 3), so this invites confusion. Suggest: "A field on its own does nothing you can feel; it waits."
  3. Warm-up, card 1 figure, activity 1, Q1 and Q2 use "a uniform electric field" without saying what uniform means; uniform fields are taught in lesson 7. Suggest a gloss at first use: "a uniform field (the same strength and direction everywhere in the region)".
  4. Memory hooks file, lesson 5 explanation: "A proton and an electron feel the SAME force in the same field". The forces are equal in size but opposite in direction, so they are not the same force. Suggest: "A proton and an electron feel forces of the SAME size (in opposite directions) in the same field".
  - Checked and correct: `we-1` (0.15 N west); quick check (B, 0.60 N); activity 1 (0.12 N up and down); fill the blanks (600 N; opposite); Q1 (0.40 N left); Q2 (8.0 × 10⁻⁶ C, negative); Q3 (three times, opposite); card 3 substitution.
- **Cause chain taught, in order:** (1) same spot, same push? (1); (2) E is force per coulomb, so q coulombs feel qE (2); (3) F⃗ and E⃗ are vectors; a negative q flips the force; equal |q| gives equal size (3); (4) in a uniform field the force is the same everywhere (4); (5) a sign convention turns the vector rule into a signed answer (5); (6) force scales with q, direction follows the sign (6, 7); (7) the force has no mass in it, so lighter particles accelerate more (7); (8) a still drop means balanced forces, so qE = mg; the force's direction against the field means negative (8, 9); (9) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** v01 (e = 1.6 × 10⁻¹⁹ C; q = ne; proton about 1840 times the electron's mass), v03 (field direction; a negative charge is pushed against the field), v04 (E as force per coulomb, N C⁻¹, the value at P); FA1 (vectors with signs, F = ma, balanced forces, W = mg with g = 9.8 m s⁻²), each recalled in a phrase.
- **Learner-visible vocabulary (plain meaning at first use):** vector (a quantity with a direction as well as a size, 3; FA1 recall); uniform field (a region where the field has the same strength and direction everywhere, 4); hover or "held stationary" (staying still, so the forces on it balance, 8); oil drop (a tiny drop of oil sprayed from an atomiser; the spray is not shown, 8).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v03's **`FieldLines`** and **`TestChargeProbe`** (reused); **coulomb tiles** (a row of 1 C tiles under the probe, each adding an amber force segment of length E, so the arrow grows to qE); **`VectorScale`** (new: an amber F⃗ arrow equal to q times a teal E⃗ arrow, driven by a q slider through zero, flipping direction at negative q); **`UniformField`** (new: evenly spaced parallel teal arrows filling a rectangle with no source drawn; reused in v07 with plates added); **sign axis** (a small "+ east" arrow beside the working, as FA1); **`AccelRace`** (new: two particles from rest along opposite directions with coded trails proportional to ½at², a scale break on the electron's trail); FA1's **free-body diagram** part (weight and electric force on the drop, equal lengths); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v04 (positive red "+", negative and electrons navy "−", signs always printed); field arrows teal; forces amber with a dark ink outline (weight amber too, FA1 decision); accelerations violet (FA1 decision 2), used only for the race trails' labels; the oil drop plate pale gold-clear (no red or navy); crossed items grey scribble.
- **Board layout (constant):** heading top-left; the field and charges in the left 60 per cent; the equation, givens and working in the right column.
- **No human figures.** The oil drop is shown alone in the field; no atomiser, microscope or observer.
- **Author notes (not learner copy):**
  (a) F⃗ = qE⃗ with q signed. With east positive, F = (−6.0 × 10⁻⁶)(+2.5 × 10⁴) = −0.15 N, i.e. 0.15 N west.
  (b) Proton and electron at P (v04's E = 6.74 × 10⁴ N C⁻¹): F = 1.602 × 10⁻¹⁹ × 6.74 × 10⁴ = 1.08 × 10⁻¹⁴ N, said "one point one times ten to the minus fourteen".
  (c) Accelerations (not said as numbers; on screen in a grey row): a_e = 1.08 × 10⁻¹⁴ ÷ 9.11 × 10⁻³¹ = 1.2 × 10¹⁶ m s⁻²; a_p = 1.08 × 10⁻¹⁴ ÷ 1.67 × 10⁻²⁷ = 6.5 × 10¹² m s⁻²; ratio m_p/m_e = 1836 (v01 says "about 1840"). P's field is not uniform, so these are the accelerations at P only; the race is drawn for a short time and says "at first" (author's display rule).
  (d) Weights: electron 9.11 × 10⁻³¹ × 9.8 = 8.9 × 10⁻³⁰ N; proton 1.6 × 10⁻²⁶ N; both about 10⁻¹² of the electric force or less. The drop's weight (4.8 × 10⁻¹⁴ N) is comparable to the electric forces in 8, which is why it matters there.
  (e) Worked example 2: W = 4.9 × 10⁻¹⁵ × 9.8 = 4.802 × 10⁻¹⁴ N; q = 4.802 × 10⁻¹⁴ ÷ 3.0 × 10⁴ = 1.60 × 10⁻¹⁸ C (ten electrons' worth; not said, A2 asks for the count). Buoyancy of air on the drop ignored (about 0.1 per cent for oil of density about 900 kg m⁻³).
  (f) Millikan's oil-drop experiment is the historical source of the hovering drop; it belongs to Year 12 and is not named.
  (g) Pronunciations: "four point nine times ten to the minus fifteen kilograms"; "point oh five four newtons".

Main question: *Put a proton and then an electron at the same point in an electric field. Why does the same field push them with equal force, but in opposite directions?*
Entry knowledge (v01 e and q = ne; v03 field direction; v04 E as force per coulomb; FA1 vectors, F = ma, balanced forces, W = mg).
Stops after: F⃗ = qE⃗ for size and direction; a uniform field as a given; force, charge and sign problems; no mass in F = qE; a balanced charged drop. No force between two charges and no plates.
Handoff: v06, the force between two charges.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v04.

### 1. hook (same spot, same push?)
> Last time, we found the field strength at a point near a charge: six point seven times ten to the four newtons per coulomb. Now put a proton at that point, and then an electron, at exactly the same spot. They carry the same size of charge, but opposite signs. Do they feel the same push? And in the same **direction**?

Visual: opens on v04's last frame (see "Opening frame"). The "Next" chip becomes the heading: "The force on a charge in a field"; the memory line fades. On "a proton" the proton at P pulses (label "charge +1.6 × 10⁻¹⁹ C"); on "an electron" the electron pulses ("−1.6 × 10⁻¹⁹ C"). Their dashed "?" arrows flicker. On "direction" chips "same push, same way?" and "same push, opposite ways?" and a 3-second countdown ring.

### 2. the size: F equals q E
> Start with what E means: the force on each coulomb of charge. So a charge of q coulombs feels q times that force. That's the equation. F equals q E. Force in newtons, charge in coulombs, and field strength in newtons per coulomb. Double the charge, and the force doubles. Put it in a field twice as strong, and it doubles again. So E isn't a force itself. It's force per coulomb, and F is the actual push on one particular **charge**.

Visual: camera continue; the source charge fades to grey, P stays with its teal arrow. Right column: v04's boxed "E: the force on each coulomb" returns. Coulomb tiles: under P a row "1 C" gains an amber arrow labelled "E newtons"; a second tile "2 C: 2E"; on "q times" the row collapses to "q C: qE". On "F equals q E" boxed "F = qE" with units beneath: "N = C × N C⁻¹". On "Double the charge" the arrow doubles; on "twice as strong" the teal arrow doubles and the amber arrow doubles again. On "isn't a force itself" a chip "E and F are the same thing" takes a grey scribble cross.

### 3. the direction: a negative charge flips the force
> In the syllabus, F and E carry little arrows. That means they're vectors, with a direction as well as a size. For a positive charge, q is positive, so the force points the same way as the field. For a negative charge, q is negative. Multiplying a vector by a negative number flips it round, so the force points opposite to the field. Now, our proton and electron. Both carry a charge of size one point six times ten to the minus nineteen coulombs, so both feel a force of one point one times ten to the minus fourteen newtons. Same size, opposite **directions**.

Visual: the boxed equation rewrites as "F⃗ = qE⃗" with the arrows over F and E pulsing (gloss "vector: size and direction"). `VectorScale`: a teal E⃗ arrow at a point and an amber F⃗ arrow beside it; a coded q slider below runs from "+2" through "0" to "−2": the amber arrow shrinks to nothing at 0 and grows again the opposite way. On "flips it round" a chip "force always points along the field" takes a grey scribble cross. On "our proton and electron" back to P: rows "F = 1.6 × 10⁻¹⁹ × 6.7 × 10⁴ ≈ 1.1 × 10⁻¹⁴ N" (once, for both); the proton's amber arrow points away from the source charge, the electron's equal arrow towards it. On "directions" the scene 1 chip "same push, opposite ways?" glows and "same push, same way?" takes a grey scribble cross.

### 4. a uniform field
> Lots of problems use a uniform field. That's a region where the field has the same strength and direction everywhere. We draw it with evenly spaced, parallel lines. You'll see how to make one in a later video. In a uniform field, a charge feels the same force wherever it **sits**.

Visual: board change: `UniformField`: a rectangle of evenly spaced parallel teal arrows pointing right, no source drawn (grey tag "how to make one: a later video"). Boxed "uniform field: same strength and direction everywhere". On "the same force wherever" a red "+" probe moves to three places in the region; its amber arrow stays the same length and direction at each.

### 5. worked example: force on a negative charge
> Let's solve one. Task: a uniform field of two point five times ten to the four newtons per coulomb points east. Find the force on a charge of minus six point oh times ten to the minus six coulombs. The givens: E is two point five times ten to the four, east, and q is minus six point oh times ten to the minus six. Take east as positive. Then F equals q E, which is minus point one five newtons. The minus sign means west. So the force is point one five newtons, west, opposite to the field, just as a negative charge **should** be.

Visual: clear change to the calculation layout; the uniform field (arrows pointing east) at the left with a navy "−" charge in it. Task strip: "Find the force on the charge" (grey tag "site worked example"). Equation strip: "F⃗ = qE⃗". Givens group: "E = 2.5 × 10⁴ N C⁻¹, east"; "q = −6.0 × 10⁻⁶ C". On "Take east as positive" a small sign axis "+ east" appears. Rows, one per cue: "F = (−6.0 × 10⁻⁶)(+2.5 × 10⁴) = −0.15 N"; on "west" "− means west"; on "should" boxed "F = 0.15 N, west" and an amber arrow on the charge pointing west, against the teal arrows. Grey row beneath: "or: size 0.15 N; negative, so opposite to E".

### 6. prediction: a bigger positive charge
> Quick prediction. Swap in a positive charge, twice as big, at the same spot. What's the force **now**?

Visual: the navy "−" fades and a larger red "+" labelled "+12 × 10⁻⁶ C" takes its place. On "now" chips "twice the force, east?" and "same force, west?" and a 3-second countdown ring.

### 7. same force, different acceleration
> Twice the charge gives twice the force, point three oh newtons, and positive means east, with the field. Now here's something surprising. F equals q E has no mass in it. Back to our proton and electron: the same size of force. But the electron's mass is about eighteen hundred and forty times smaller. And acceleration is force over mass. So the electron's acceleration is about eighteen hundred and forty times bigger. Mass doesn't change the electric force. It changes how fast the charge speeds **up**.

Visual: on "point three oh" row "F = (+12 × 10⁻⁶)(+2.5 × 10⁴) = +0.30 N: east", boxed, and an amber arrow pointing east; chip "twice the force, east?" glows, "same force, west?" takes a grey scribble cross. On "no mass in it" the boxed "F = qE" pulses with a grey note "no m". On "Back to our proton and electron" board change to P with the two equal opposite amber arrows; mass labels "1 mass unit" (electron) and "about 1840 mass units" (proton). On "acceleration is force over mass" row "a = F ÷ m" (tag "from the forces videos"). `AccelRace`: both start from rest and leave P in opposite directions; after a short time the proton's trail is short and the electron's long trail runs off the board with a scale break (tag "not to scale; at first"). Grey row: "a_e ≈ 1.2 × 10¹⁶ m s⁻², a_p ≈ 6.5 × 10¹² m s⁻²" and grey tag "their weights: far too small to matter". On "up" a chip "a heavier charge feels a bigger electric force" takes a grey scribble cross.

### 8. worked example: a hovering drop
> For a proton or an electron, weight is far too tiny to matter. But for something heavier, like a drop of oil, it does. Task: a tiny oil drop, with a mass of four point nine times ten to the minus fifteen kilograms, hangs perfectly still in a uniform field of three point oh times ten to the four newtons per coulomb, pointing down. Find the charge on the drop, and its sign. The givens: m is four point nine times ten to the minus fifteen kilograms, g is nine point eight metres per second squared, and E is three point oh times ten to the four, down. The drop isn't moving, so the forces **balance**.

Visual: clear change to the calculation layout. `UniformField` with arrows pointing down; the oil drop plate (`phys-y11-oil-drop-v1.png`) hangs in the middle (tag "drawn huge: the real drop is far too small to see"). Task strip: "Find the charge on the drop, and its sign". Equation strip: "F⃗ = qE⃗". Givens group: "m = 4.9 × 10⁻¹⁵ kg"; "g = 9.8 m s⁻²"; "E = 3.0 × 10⁴ N C⁻¹, down". On "the forces balance" the FA1 free-body part draws on the drop: amber "W = mg" down, then an amber "F = qE" up of equal length (chip "still: forces balance").

### 9. solving for the drop's charge
> The electric force pushes up, and it's the same size as the weight, m g: four point eight times ten to the minus fourteen newtons. So q is F over E: one point six times ten to the minus eighteen coulombs. The force is up, against the downward field, so the charge is **negative**.

Visual: camera continue; the free-body arrows stay on the drop. Rows, one per cue: "F = mg = 4.9 × 10⁻¹⁵ × 9.8 = 4.8 × 10⁻¹⁴ N"; "q = F ÷ E = 4.8 × 10⁻¹⁴ ÷ 3.0 × 10⁴ = 1.6 × 10⁻¹⁸ C"; on "negative" "force up, field down: opposite, so negative", boxed "q = −1.6 × 10⁻¹⁸ C", and a navy "−" appears on the drop.

### 10. memory aid
> To remember it: the size is q times E. Plus goes with the field, and minus goes **against** it.

Visual: the handwritten line writes large: "Size: q times E. Plus goes with the field, minus goes against it." On "plus" a red "+" in a uniform field gets an amber arrow along the teal arrows; on "against" a navy "−" gets one the other way. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A small charged sphere sits in a uniform electric field of one point eight times ten to the four newtons per coulomb, pointing east. It feels an electric force of point oh five four newtons, pointing west. Calculate the size of the charge on the sphere. Then state its sign, and justify it. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A small charged sphere is placed in a uniform electric field of strength 1.8 × 10⁴ N C⁻¹ directed east. It experiences an electric force of 0.054 N directed west. (a) Calculate the magnitude of the charge on the sphere. (b) State the sign of the charge and justify your answer. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Rearranging F equals q E gives q equals F over E. That's point oh five four, over one point eight times ten to the four: three point oh times ten to the minus six **coulombs**. The force points west, opposite to the eastward field, so the charge is **negative**. Dividing E by F turns the equation upside **down**.

Visual: card shrinks to the top; "east" and "west" underlined. Rows: "q = F ÷ E"; on "coulombs" "(a) q = 0.054 ÷ 1.8 × 10⁴ = 3.0 × 10⁻⁶ C", boxed; on "negative" a small uniform field pointing east with a navy "−" and an amber arrow west, "(b) force opposite to E: negative", boxed. On "down" a chip "q = E ÷ F = 3.3 × 10⁵ C" fades in and takes a grey scribble cross. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. An oil drop with a mass of three point two times ten to the minus fifteen kilograms is held still in a uniform electric field of four point nine times ten to the four newtons per coulomb, pointing straight up. Calculate the size of the charge on the drop, and state its sign. Then work out how many electrons it has gained or lost. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "An oil drop of mass 3.2 × 10⁻¹⁵ kg is held stationary in a uniform electric field of strength 4.9 × 10⁴ N C⁻¹ directed vertically upwards. (a) Calculate the magnitude of the charge on the drop, and state its sign. (b) Determine how many electrons the drop has gained or lost. (Take g = 9.8 m s⁻² and e = 1.6 × 10⁻¹⁹ C.) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The drop is still, so the electric force balances its weight. m g is three point one times ten to the minus fourteen newtons, upward. So q is F over E: six point four times ten to the minus nineteen **coulombs**. The force is up, along the upward field, so the drop is **positive**. Divide by e, and that's four electrons **lost**. Saying it gained four would make it **negative**.

Visual: card shrinks to the top; "held stationary" and "vertically upwards" underlined. A small free-body sketch on the drop (W down, F up, equal). Rows: "F = mg = 3.2 × 10⁻¹⁵ × 9.8 = 3.1 × 10⁻¹⁴ N"; on "coulombs" "(a) q = 3.1 × 10⁻¹⁴ ÷ 4.9 × 10⁴ = 6.4 × 10⁻¹⁹ C"; on "positive" "force along E: positive", boxed; on "lost" "(b) n = 6.4 × 10⁻¹⁹ ÷ 1.6 × 10⁻¹⁹ = 4: four electrons lost", boxed. On "negative" a chip "gained 4 electrons" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. handoff
> So F equals q E gives the size and the direction of the force on any charge in a field. But often, the field comes from another charge. One charge makes the field, and a second charge feels it. So what sets the force between two charges? And what happens when we bring them three times **closer**?

Visual: board change: the memory line small at the top. Two point charges, q₁ (red "+") at the left and q₂ (red "+") at the right, with a dimension line "r"; q₁'s teal lines reach q₂. On "One charge makes the field" a row at q₂: "E at q₂ = kq₁/r² (last video)"; on "a second charge feels it" "F on q₂ = q₂E (this video)"; a chip "so F = ?". Chips write: "both charges matter?" and "three times closer?". On "closer" the chip "Next: What sets the force between two charges, and why does moving them three times closer make it nine times stronger?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The force on a charge q in a field E: F⃗ = qE⃗ (F in N, q in C, E in N C⁻¹). E is force per coulomb; F is the force on this charge.
2. Direction: a positive charge is pushed along the field; a negative charge is pushed opposite to it. Choose a positive direction and let the sign of F tell you which way.
3. A uniform field has the same strength and direction everywhere, so the force on a charge is the same anywhere in it.
4. F = qE has no mass in it: a proton and an electron feel equal-sized forces, but the electron accelerates about 1840 times more (a = F/m).
5. A charged drop held still: qE = mg, so q = mg/E. Force along E: positive; against E: negative.

Memory aid (large, on the notes screen): *Size: q times E. Plus goes with the field, minus goes against it.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why F = qE: E is force per coulomb, so q coulombs feel q times as much (2). Why a negative charge is pushed backwards: multiplying a vector by a negative number flips it (3). Why the proton and electron feel equal forces: the same size of charge in the same field (3). Why the force is the same everywhere in a uniform field: E is (4). Why the minus sign means west: the chosen positive direction (5). Why the electron speeds up far more: same force, much smaller mass (7). Why the drop's charge can be found: it is still, so the forces balance (8). Why it is negative: the force is against the field (9).
- **Misconceptions addressed:** force always along the field (3); E and F the same (2); a heavier charge feels a bigger electric force (7); q = E/F (feedback 1 crossed); gaining electrons makes a drop positive (feedback 2 crossed).
- **One idea at a time:** size (2), direction (3), uniform field (4), a signed calculation (5), scaling (6, 7), mass (7), balance (8), solving the drop (9).
- **Video makes it easier:** the student sees coulomb tiles build qE (2), an amber arrow shrink through zero and flip as q goes negative (3), a probe keep the same arrow everywhere in a uniform field (4), an electron race away from a proton (7) and a drop's two forces match (8, 9).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card (directions of field and force; "held stationary"; "vertically upwards"; g and e given), nothing answer-bearing. One crossed mistake each; feedback about 22 s and 28 s.
- **Avoided double teaching:** v04's E recalled in a phrase (1, 2); v03's direction rule in a phrase (5); FA1's F = ma, balance and W = mg recalled in a phrase each (7 to 9); v01's e and q = ne used without re-teaching (A2).
- **Syllabus coverage:** `cib6be0599`: problems with F⃗ = qE⃗: force from charge and field (3, 5, 6, 7), charge from force and field with its sign (A1), balanced charged drop (8, 9, A2), with direction from the vector form throughout.
- **Out of scope by design:** Coulomb's law (v06, set up in 15); making a uniform field, E = V/d and plate diagrams (v07); motion of charges between plates, work and energy (later FA3); Millikan by name.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A small charged sphere is placed in a uniform electric field of strength 1.8 × 10⁴ N C⁻¹ directed east. It experiences an electric force of 0.054 N directed west. (a) Calculate the magnitude of the charge on the sphere. (b) State the sign of the charge and justify your answer."
Model answer: (a) F = qE, so q = F/E = 0.054 ÷ 1.8 × 10⁴ = 3.0 × 10⁻⁶ C. (b) Negative. The field direction is the direction of the force on a positive charge; this force is opposite to the field (west, against an eastward field), so the charge must be negative. Classic mistake (crossed): "q = E ÷ F = 3.3 × 10⁵ C".

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "An oil drop of mass 3.2 × 10⁻¹⁵ kg is held stationary in a uniform electric field of strength 4.9 × 10⁴ N C⁻¹ directed vertically upwards. (a) Calculate the magnitude of the charge on the drop, and state its sign. (b) Determine how many electrons the drop has gained or lost. (Take g = 9.8 m s⁻² and e = 1.6 × 10⁻¹⁹ C.)"
Model answer: (a) The drop is stationary, so the upward electric force balances its weight: qE = mg = 3.2 × 10⁻¹⁵ × 9.8 = 3.1 × 10⁻¹⁴ N. q = mg/E = 3.136 × 10⁻¹⁴ ÷ 4.9 × 10⁴ = 6.4 × 10⁻¹⁹ C. The electric force is upward, in the same direction as the field, so the drop is positive. (b) n = q/e = 6.4 × 10⁻¹⁹ ÷ 1.6 × 10⁻¹⁹ = 4; a positive charge means electrons were removed: the drop has lost 4 electrons. Classic mistake (crossed): "gained 4 electrons".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| E at P (v04 `we-1`) | 6.7 × 10⁴ N C⁻¹ | 1, 3 |
| e | 1.6 × 10⁻¹⁹ C | 1, 3, 13, 14 |
| Proton and electron force at P | 1.1 × 10⁻¹⁴ N each, opposite | 3, 7 |
| Mass ratio | about 1840 (1836) | 7, notes |
| Accelerations at P (grey row) | a_e ≈ 1.2 × 10¹⁶ m s⁻²; a_p ≈ 6.5 × 10¹² m s⁻² | 7 |
| `we-1` (site) | E = 2.5 × 10⁴ N C⁻¹ east; q = −6.0 × 10⁻⁶ C; F = −0.15 N, i.e. 0.15 N west | 5 |
| Prediction | q = +12 × 10⁻⁶ C; F = +0.30 N, east | 6, 7 |
| Worked example 2 | m = 4.9 × 10⁻¹⁵ kg; g = 9.8 m s⁻²; E = 3.0 × 10⁴ N C⁻¹ down; W = 4.8 × 10⁻¹⁴ N; q = −1.6 × 10⁻¹⁸ C | 8, 9 |
| A1 | E = 1.8 × 10⁴ N C⁻¹ east; F = 0.054 N west; q = 3.0 × 10⁻⁶ C, negative; crossed 3.3 × 10⁵ C | 11, 12 |
| A2 | m = 3.2 × 10⁻¹⁵ kg; E = 4.9 × 10⁴ N C⁻¹ up; W = 3.1 × 10⁻¹⁴ N; q = 6.4 × 10⁻¹⁹ C, positive; 4 electrons lost | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 1.6 × 10⁻¹⁹ × 6.7 × 10⁴ = 1.07 × 10⁻¹⁴; with 1.602 × 10⁻¹⁹ and 6.74 × 10⁴: 1.08 × 10⁻¹⁴ → 1.1 × 10⁻¹⁴ N.
- 1.08 × 10⁻¹⁴ ÷ 9.109 × 10⁻³¹ = 1.19 × 10¹⁶; 1.08 × 10⁻¹⁴ ÷ 1.673 × 10⁻²⁷ = 6.46 × 10¹²; ratio 1836.
- (−6.0 × 10⁻⁶)(2.5 × 10⁴) = −0.15.
- (12 × 10⁻⁶)(2.5 × 10⁴) = 0.30.
- 4.9 × 10⁻¹⁵ × 9.8 = 4.802 × 10⁻¹⁴; ÷ 3.0 × 10⁴ = 1.60 × 10⁻¹⁸ (= 10.0 e).
- 0.054 ÷ 1.8 × 10⁴ = 3.0 × 10⁻⁶; 1.8 × 10⁴ ÷ 0.054 = 3.3 × 10⁵.
- 3.2 × 10⁻¹⁵ × 9.8 = 3.136 × 10⁻¹⁴; ÷ 4.9 × 10⁴ = 6.40 × 10⁻¹⁹; ÷ 1.6 × 10⁻¹⁹ = 4.00.
- Electron weight 8.9 × 10⁻³⁰ N; proton weight 1.6 × 10⁻²⁶ N.

## Memory aid check

- **"Size: q times E. Plus goes with the field, minus goes against it."** Meaning, as said in scene 10: the force's magnitude is the size of the charge times the field strength, and its direction is along the field for a positive charge and opposite for a negative one. Assumptions checked: "the field" means the field at the charge's position (from other charges; a charge does not push itself); "with the field" is the force direction, not necessarily the direction of motion (a charge already moving can travel against the force while slowing); the video only uses charges released from rest or held still, so nothing contradicts it. Consistent with v03's "Out of plus, into minus" (field-line direction). Introduced after the cause (2, 3) and the worked examples (5, 8, 9).
- **Site hook (lesson 5) used as a surprise, not the closing line.** "F = qE has no mass in it" is said in scene 7 with its reason (a = F/m); it is a contrast that prevents a misconception rather than a rule to recall, so the closing line stays on size and direction. Site correction 4 fixes its "SAME force" wording.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,391 characters** (5,406 joined), 16 scenes. Characters per scene (1 to 16): 314, 430, 558, 277, 528, 98, 501, 597, 276, 91, 323, 302, 363, 365, 293, 75. At 13.3 characters per second the speech is about 405 s; add about 18 s of holds and settling (the coulomb tiles in 2, the q slider in 3, the probe in the uniform field in 4, the acceleration race in 7, the free-body draw in 8, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 505 s**, inside the owner's 5 to 10 minute target. The content (one syllabus point: size, direction, a uniform field, a signed calculation, mass, a balanced drop) fills 5,391 characters; the template says stop rather than pad, so it is not lengthened (precedent: FA1 root decision 12, v07 at 5,406 and v12 at 5,329).

## Scene list and build ids

Lesson key `p-y11-fa3-v05` (route phys-y11-fa3-v05). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v05` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v05` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, size-qe, direction-sign, uniform-field, worked-example-1, prediction, mass-acceleration, hovering-drop, drop-charge, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v04's last frame continues into scene 1 (camera continue: P and its two particles carry over); 1 to 2 camera continue; 2 to 3 camera continue; 3 to 4 board change to the uniform field; 4 to 5 clear change to the calculation layout; 5 to 6 camera continue; 6 to 7 camera continue, then board change back to P on "Back to our proton"; 7 to 8 clear change to the calculation layout; 8 to 9 camera continue; 9 to 10 fade; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v05-learning-review.md`, `science_check` = `checks/p-y11-fa3-v05-physics-check.md`.

## Assets

Reused: none painted. Coded parts reused from v03 (`FieldLines`, `TestChargeProbe`), v04 (P and its readout) and FA1 (free-body diagram part, sign axis).

New (requested below): `phys-y11-oil-drop-v1.png` (8, 9, 14).

Checked first (3 Nov): `public/assets/physics/` has no droplet or electrostatics plates (v01 to v03 requests not yet delivered); Chemistry droppers and oil bottles are not suitable (a single free drop is needed).

Coded: charges, protons, electrons, field arrows, uniform field, force arrows, coulomb tiles, the q slider, the acceleration race, free-body arrows, working.

Kit gaps (for the next physics kit brief): `VectorScale`, `UniformField` (needed again in v07 with plates), coulomb tiles, `AccelRace` (plus v03's `FieldLines` and `TestChargeProbe`); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v05, oil drop)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-oil-drop-v1.png`: a single tiny drop of clear, pale straw-coloured oil, drawn hugely magnified as a near-perfect sphere, glossy, with a bright highlight at the upper left and a faint refracted glow at the lower right; no surface, no shadow, floating. About 400 px across.

Acceptance: true transparency, no halo; the colour stays pale straw or clear (nothing red, navy, teal or amber, which carry signs, field and force).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: F⃗ = qE⃗ with units; E is force per coulomb, not a force; a positive charge is pushed along E, a negative charge opposite; a proton and an electron at the same point feel equal-sized, opposite forces; the force is the same everywhere in a uniform field; the sign convention in `we-1`; F = qE has no mass, so the electron's acceleration is about 1836 times the proton's at the same point; particle weights are negligible; a stationary drop has qE = mg; the drop's sign follows from the force direction relative to E.
3. Confirm no Coulomb's law calculation is done (the handoff shows the two rows and "so F = ?" only), and no plates or E = V/d appear.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly (with the vector arrows typeset) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v04.md` scene 15.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: The Force on a Charge in an Electric Field (F = qE) | Year 11 Physics

(Title length: 70 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson05.sa.html

Put a proton and an electron at the same point in an electric field. They feel forces of exactly the same size, pointing in opposite directions. Why? Build F = qE from the meaning of field strength, see how a negative charge flips the force, and solve force problems in a uniform field. Then find out why the electron races away far faster than the proton, and work out the charge on an oil drop hovering in a field. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving charges in electric fields using F⃗ = qE⃗" (cib6be0599)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electric field strength and the inverse square law (previous video). Next: Coulomb's law.

#Year11Physics #Physics #ElectricFields #HSCScience

## Open decisions

- **1. v06's question (proposal).** The handoff chip uses "What sets the force between two charges, and why does moving them three times closer make it nine times stronger?" for phys-y11-fa3-v06 (route placeholder "How can I explain and apply coulomb's law?"). v06's design (written next) adopts it.
- **2. Uniform field before plates.** Defined in one sentence and drawn without a source (4), tagged "how to make one: a later video". Root to confirm, or ask v07 to open by answering "how do we make a uniform field?".
- **3. The hovering drop.** Balanced forces (FA1) make the drop a fair Year 11 problem and the most common HSC form; it is not Millikan's experiment by name (Year 12). Root to confirm the scope.
- **4. Route refinement (root to record).** Question as above; start "Begin at v04's point P with a proton and an electron; recall E as force per coulomb"; stop "Stop at force, charge and sign problems with F = qE in a given field, including a balanced drop; hand the force between two charges to v06".
- **5. Site link form.** As FA1 v08.
- **6. Length.** 5,391 characters (about 505 s) is under the 5,500 floor. Nothing in the point is left untaught; if root wants it nearer 5,500, the honest addition is a short worked comparison of two charges at one point (site Q3: +2.0 μC and −6.0 μC, forces 1 : 3 and opposite) after scene 7, about 250 characters.

## Review notes

- Revision 1 next steps: student learning review (trace from v04 at Year 11 entry; check that F = qE feels built from E rather than announced; that the sign flip lands from the q slider; that the uniform field sentence is enough without plates; that the acceleration race doesn't distract from force; that the balanced drop is not too big a step from FA1; that the attempts give nothing away), then the Codex physics check and error check.
- The coulomb tiles (2), the arrow flipping through zero (3), the acceleration race (7) and the matching drop forces (8) carry the explanation; judge them at playback speed in the voiced preview.
