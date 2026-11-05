# Year 12 Physics M6 V01: Charged particles between parallel plates. How does the voltage between parallel plates set a charged particle's acceleration? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,138 characters, 16 scenes, about 549 s, counted by script with the build parser rules (see "Narration length estimate"). First video of Module 6.

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates: `phys-y11-fa1-v01.md` (structure, voice), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief); layout and voice as `phys-y12-m5-v23.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson01.sa.html`, SHA256 `c3cdeb0ba635b7fe5b8207a93d8acd8c3fad7c253462e9ab00df683bdc9f7569` (recomputed 6 Nov; matches the route). Sections used: `model-uniform-field`, `represent-force-vectors`, `calculate-particle-response`. Route entry: `phys-y12-m6-v01`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Connect V/d to uniform field, signed charge force qE and acceleration; distinguish field direction from negative-charge motion. Stop before trajectories." Next: "phys-y12-m6-v02: Why is a charged-particle path between plates like a projectile?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; the high-voltage supply and the oil drop are existing painted plates; plates, field lines, particles, arrows and strips are coded (exam style); every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes. Recalled, not re-taught: Year 11 electric field (force per unit positive charge, direction), the volt as a joule per coulomb, work W = Fd, F = ma; Module 5 (v23's uniform-field bridge; constant acceleration near the ground).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ1-01`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-01`: "investigate and quantitatively derive and analyse the interaction between charged particles and uniform electric fields, including: (ACSPH083)" "electric field between parallel charged plates E=(V)/(d)", "acceleration of charged particles by the electric field vector(F)_(net)=mvector(a), vector(F)=qvector(E)", "work done on the charge W=qV, W=qEd, K=(1)/(2)mv^(2)"

This video covers the first two examples; v03 covers the work and kinetic energy example.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on m5-v23's final frame (two coded parallel plates, uniform field, "+q" particle with "a = ?", "V" across the gap). Teaches: what a uniform field between large plates is (and where the model fails: edges); why E = V/d (work on one coulomb across the gap); the units (V m⁻¹ = N C⁻¹); F = qE with direction set by the sign of q (field direction is the push on a positive charge); a = qE/m, constant because E is uniform; the site's electron worked example (100 V, 2.0 cm); when gravity can be ignored (electron versus oil drop); proton versus electron in the same field; the hook answers (double V, double d, swap charge sign). Stops before any sideways entry or trajectory (v02), and before work and energy (v03).

## Decisions

- **Learner question (route wording, one grammar fix).** "How does the voltage between parallel plates set a charged particle's acceleration?" (route: "How does voltage between parallel plates determine a charged particle acceleration?"; possessive added and "set" for "determine", matching m5-v23's chip). The answer, built in order: a uniform field fills the gap (2); its strength is V/d because the field's work on one coulomb across the gap equals V (3, 4); the force is qE, with the sign of q setting the direction (5); a = qE/m, constant (6); so a = qV/(md) (6, 9).
- **Hook (route start: the physical case).** The v23 plates with a proton; three changes to predict (double V; double d at the same V; swap in an electron). The site hook (Millikan holding a drop still) becomes scene 8's application and attempt 2, because it needs gravity as well as the electric force and is clearer after F = qE.
- **E = V/d derived, not quoted (route entry: "Derive each newly introduced equation").** One coulomb of positive charge moved from the positive to the negative plate: the field does V joules of work (a volt is a joule per coulomb, Year 11) and the work is also force × distance = E × d. Field units V m⁻¹ = N C⁻¹ shown.
- **Uniform-field model and its limit (site card 1, "Assess 5 marks").** Kept in learner copy in one sentence: near the edges the lines bulge, so the model is for the middle region of plates that are wide compared with the gap. Omitting it would teach that the field is uniform everywhere.
- **Direction (route stop: "distinguish field direction from negative-charge motion"; site misconception).** "The arrows show the push on a positive charge" is the anchor sentence; the crossed slip is "the electron goes the way the arrows point".
- **Worked example (site card 3, exact numbers).** 2.0 cm, 100 V, electron near the negative plate: E = 5.0 × 10³ V m⁻¹, F = 8.01 × 10⁻¹⁶ N, a = 8.79 × 10¹⁴ m s⁻² (site 8.0 × 10⁻¹⁶ N and 8.8 × 10¹⁴ m s⁻² with e = 1.60 × 10⁻¹⁹ C and m_e = 9.11 × 10⁻³¹ kg; same to 2 s.f.).
- **Gravity check (site card 3 context and the step-order box).** a/g ≈ 9.0 × 10¹³ for the worked example, said as "about ninety thousand billion times g". The oil drop is the case where gravity matters. The proton's acceleration is 1/1837 of the electron's (data sheet masses: m_p/m_e = 1836.6), said as "about eighteen hundred times".
- **Constants.** HSC data sheet values: e = 1.602 × 10⁻¹⁹ C, m_e = 9.109 × 10⁻³¹ kg, m_p = 1.673 × 10⁻²⁷ kg, g = 9.8 m s⁻². The science check confirms them and the sheet's printed form of the uniform-field relation (open decision 3).
- **Colour key for Module 6 (open decision 1).** Electric field lines blue (`C.blue`); magnetic field dots and crosses slate ink (from v04); velocity teal; forces amber (F_B rose in v06 where both act); acceleration violet; kinetic energy orange and potential energy violet (decision 10); plates ink with "+" and "−" rows; particles are ink-outlined discs carrying "+" or "−" (sign, not colour, shows charge); givens navy; crossed chips red.
- **Memory aid.** "V over d gives the field; times q gives the force; over m gives the acceleration." Plus the direction rule. See "Memory aid check".
- **Attempts.** A1 (original): 150 V, 2.5 cm, proton from rest: E = 6.0 × 10³ V m⁻¹, a = 5.7 × 10¹¹ m s⁻² towards the negative plate; crossed "gap left in centimetres". A2 (original, from the site hook's method): oil drop 1.6 × 10⁻¹⁴ kg, −3.2 × 10⁻¹⁹ C, plates 16 mm apart: V = 7.8 × 10³ V, top plate positive; crossed "field pointing up".
- **Site sources used:** intro and hook (Millikan balance, scene 8 and A2), Think First (dust particle and electron; plate field), vocabulary (electric field, uniform field, potential difference, elementary charge), card 1 (uniform field, E = V/d, Stop & Check "stronger near the positive plate"), card 2 (F = qE, sign rule, misconception), card 3 (worked example and step order), Activity 1 (doubling V; halving d; scenes 4 and 9), Activity 2 (proton versus electron, scene 8), "Analyse 6 marks" (the chain, scene 6), "Assess 5 marks" (edges, scene 2). Not used: the interactive; card 4 (Coulomb contrast and superposition, cut for length); the 600 V 6-mark numbers (left for the site).
- **Site notes (for root to log if accepted):**
  1. Lesson 1, "Analyse 6 marks", step 4 and the full-mark answer: "Gravity is about 10¹⁶ times smaller here". With a = 2.6 × 10¹⁵ m s⁻², a/g = 2.7 × 10¹⁴ (F_E/mg = 2.403 × 10⁻¹⁵ / 8.93 × 10⁻³⁰). Suggest "about 3 × 10¹⁴ times smaller".
  2. Lesson 1, worked example context and short-answer Q2(b): "roughly 10¹³ g" and "approximately 10¹³ times larger" for a = 8.8 × 10¹⁴ m s⁻²; the ratio is 9.0 × 10¹³ (log 13.95), nearer 10¹⁴. Suggest "about 9 × 10¹³".
  3. Lesson 1, review answer: "This is exactly the scale of voltage Millikan used." For a single elementary charge the model gives 1.57 × 10⁴ V; Millikan's drops usually carried several charges and his supply was several thousand volts. Suggest "a voltage of the order Millikan used" (science check to confirm the historical figures; the 1.59 × 10⁻¹⁹ C value comes from the 1913 paper rather than 1909).
  - Checked and correct: card 3 (5.0 × 10³ V m⁻¹, 8.0 × 10⁻¹⁶ N, 8.8 × 10¹⁴ m s⁻²); 6-mark E, F, a and v (1.5 × 10⁴ V m⁻¹, 2.4 × 10⁻¹⁵ N, 2.6 × 10¹⁵ m s⁻², 1.5 × 10⁷ m s⁻¹); short-answer Q1 (2.0 × 10³ V m⁻¹, 3.2 × 10⁻¹⁶ N); review balance (9.8 × 10⁵ V m⁻¹, about 15,700 V with e = 1.6 × 10⁻¹⁹ C).
- **Cause chain taught, in order:** (1) a field is a region where a charge feels a force; its direction is the push on a positive charge (2); (2) large close plates give straight, parallel, evenly spaced lines, so E is uniform in the middle region (2); (3) the field's work on 1 C across the gap is V joules and also E × d, so E = V/d (3); (4) F = qE, along E for positive q, against E for negative q (5); (5) a = F/m = qE/m, constant because E is uniform (6); (6) for an electron a ≫ g, so gravity is neglected; for an oil drop it is not (8); (7) a ∝ V, a ∝ 1/d, direction flips with the sign of q, and a ∝ 1/m (9).
- **Entry knowledge:** Year 11 charge, electric field direction, the volt, work, F = ma; m5-v23's uniform-field bridge.
- **Learner-visible vocabulary:** electric field (a region where a charge feels a force, 2); uniform field (same strength and direction everywhere in the region, 2); potential difference or voltage (joules per coulomb, 3); elementary charge e (7, shown on screen as a data sheet constant).
- **Legacy logic ported:** none. The coded `ElectricPlates` visual (kit family `m6-plates`, `src/explainer/physics/module6/index.tsx`, "Constant force changes one velocity component", limits "uniform interior only; trajectory is schematic; gravity neglected") is the starting point for the plate stage; its trajectory is not used here (v02).
- **New explainer motion:** **plate stage** (kit gap 1, shared with v02, v03 and v06: two coded horizontal plates with "+" and "−" rows, a gap readout, a voltage label and supply leads, field lines that redraw at a density proportional to E when V or d changes, fringing bulges at the edges that can be toggled, particles that accelerate from rest at a chosen a with a slow-motion factor, force and acceleration arrows whose lengths scale with the value); **one-coulomb work strip** (a "1 C" token sliding from the + plate to the − plate while a "W = V joules" counter fills and an "E × d" bracket draws); `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** No experimenter at the Millikan apparatus; only the oil drop plate and coded plates.
- **Author notes (not learner copy):**
  (a) E = V/d holds for the uniform middle region; strictly E = |ΔV|/d. The direction is from higher to lower potential.
  (b) a/g for the worked example: 8.79 × 10¹⁴ / 9.8 = 8.97 × 10¹³ ("about ninety thousand billion times g").
  (c) A1 slip: d = 2.5 (cm left in) gives E = 60 V m⁻¹ and a = 5.7 × 10⁹ m s⁻², a hundred times too small.
  (d) A2: E = mg/|q| = (1.6 × 10⁻¹⁴ × 9.8)/(3.2 × 10⁻¹⁹) = 4.9 × 10⁵ V m⁻¹; V = Ed = 7.84 × 10³ V. The drop's radius (oil density about 900 kg m⁻³) is about 1.6 μm, a realistic Millikan drop. Buoyancy is neglected.
  (e) Pronunciations: "ten to the minus nineteen"; "V over d"; "q E over m".

- **Open decisions for root:**
  - **1. Colour key for Module 6 (root).** Electric field blue, magnetic field slate dots and crosses, velocity teal, forces amber (F_B rose where F_E and F_B are both shown), acceleration violet, K orange, U violet. Particles carry their sign as a symbol. Confirm before v02 to v06 build on it.
  - **2. Opening join (root).** Scene 1 opens on m5-v23's final frame and relabels its "+q" particle "proton"; the Earth-surface inset fades in scene 2. If root edits v23's final frame, this opening follows it.
  - **3. Formula sheet form (science check).** The syllabus prints E = V/d; confirm whether the HSC formula sheet prints E = V/d or E = −V/d, and add a one-line screen tag if the sign form is printed.

Main question: *A proton sits between two charged plates. Double the voltage, pull the plates twice as far apart, or swap the proton for an electron: what happens to its acceleration, and why?*
Entry knowledge: Year 11 field, volt, work and F = ma; m5-v23.
Stops after: E = V/d, F = qE with sign, a = qE/m, gravity check. No trajectories, no energy.
Handoff: v02, why a charged particle's path between plates is like a projectile.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *E*, *V*, *d*, *q*, *F*, *a*, *m*, *e*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (one particle, three changes)
> Here are the two plates we ended Module five with. The top plate is positive, the bottom one negative, and there's a voltage across them. A proton between them accelerates steadily, like a dropped ball. So here's the puzzle. Double the **voltage**, and what happens to its acceleration? Keep the voltage, but pull the plates twice as far **apart**. Or swap the proton for an **electron**. Make your predictions **now**.

Visual: opens on m5-v23's final frame (see "Opening frame"); the "+q" label rewrites as "proton (+)". The proton accelerates from rest towards the bottom plate (violet "a" arrow) and resets. On "voltage" a ghost copy of the plates appears with "2V" and a "?" on its acceleration arrow; on "apart" a second ghost with the gap stretched "2d" and "?"; on "electron" a third ghost with an electron "(−)" and "?" on both the length and direction of its arrow. On "now" the 3 s `Countdown` runs beside chips "a doubles / halves / no change" under each ghost.

### 2. a uniform field between the plates
> An electric field is a region where a charge feels a force. Its direction is the way a positive charge would be pushed, so between these plates it points from the positive plate to the negative one. Between two large plates, the field lines are straight, parallel and evenly **spaced**. That means the field is uniform, the same strength and the same direction everywhere in the gap. Near the edges of the plates the lines bulge, so we use the middle region, where the plates are wide compared with the **gap**.

Visual: camera continue; the ghosts clear and the Earth inset fades. Heading writes on: "How does the voltage between parallel plates set a charged particle's acceleration?". A small "+" test charge appears at three points in the gap with equal amber force arrows. On "spaced" the blue field lines draw top to bottom, equally spaced, with a tag "uniform: same E everywhere in the middle". On "gap" the plate ends show bulging fringe lines in grey, a dashed box marks the middle region, tag "model: plates wide compared with the gap".

### 3. why E equals V over d
> So how strong is the field? The voltage tells us. In Year eleven, a volt was a joule per coulomb. So if one coulomb of positive charge moves from the positive plate to the negative plate, the field does V joules of work on **it**. The field pushes that coulomb with a force of E newtons, across the distance **d**, so the work is also E times d. That means V equals E d, and E equals V over **d**. A wider gap spreads the same voltage over more metres, so the field is **weaker**.

Visual: camera push to the gap; the existing high-voltage supply plate (`phys-y11-eht-supply-v1.png`, scaled uniformly) sits at the left with coded leads to the plates, "V" on its display. One-coulomb work strip: on "it" a "1 C" token slides from the top plate to the bottom plate while a counter fills "W = V joules". On "d" an amber force arrow "E newtons" rides on the token and a navy bracket "d" spans the gap; the strip writes "W = E × d". `AlignedAlgebra`: "V = Ed", then on "d" (second) boxed "E = V/d". On "weaker" the gap stretches to 2d and the field lines thin to half density, tag "same V, double d: E halves". Units chip: "V m⁻¹ = N C⁻¹".

### 4. a field from real numbers
> Try it with real numbers. Two plates two centimetres apart, connected to a hundred volt supply. That's a hundred volts over zero point zero two metres, which is five thousand volts per **metre**, pointing from the top plate down. Double the voltage to two hundred volts, and the field doubles, to **ten thousand**. Keep a hundred volts, but move the plates four centimetres apart, and it halves, to **two and a half thousand**.

Visual: calculation layout. Task strip: "Find E between the plates." Equation strip: "E = V/d". Givens grouped: "V = 100 V", "d = 2.0 cm = 0.020 m". `AlignedAlgebra`: "E = 100/0.020"; on "metre" "= 5.0 × 10³ V m⁻¹ (downwards)" boxed. On "ten thousand" a second row "200 V: E = 1.0 × 10⁴ V m⁻¹" with the plate stage's lines doubling in density. On "two and a half thousand" "d = 0.040 m: E = 2.5 × 10³ V m⁻¹" with the lines halving.

### 5. the force depends on the sign of the charge
> Now put a charge in the field. The force on it is F equals q E, the charge times the field. For a positive charge, the force points the same way as the field, towards the negative **plate**. For a negative charge, like an electron, q is negative, so the force points against the field, towards the positive **plate**. A common slip is to think the electron goes the way the field arrows point. It doesn't. The arrows show the push on a positive charge, so the electron is pushed the opposite **way**.

Visual: camera change back to the plate stage. Equation chip "F = qE". On "plate" (first) a proton at mid-gap gets an amber arrow down, along the field lines. On "plate" (second) an electron beside it gets an equal amber arrow up. A chip "electron moves with the field arrows" writes in and on "way" is crossed; tag "field arrows = push on a + charge". The two arrows pulse together, labelled "|F| equal, directions opposite".

### 6. from force to acceleration
> Newton's second law turns that force into an acceleration. a equals F over m, which is q E over m. And because the field is uniform, the force is the same everywhere in the gap, so the acceleration is constant, just like g near the ground. Put the whole chain **together**. The voltage and the gap set the field. The field and the charge set the force. The force and the mass set the **acceleration**. So a equals q V over m **d**.

Visual: camera continue. The proton accelerates from rest across the gap with strobe images at equal time steps (gaps growing), its violet "a" arrow the same length at every image, tag "uniform E → constant a". On "together" a chain writes across the top: "V, d → E = V/d → F = qE → a = F/m"; on "acceleration" the last link highlights. On "d" the combined line "a = qV/(md)" boxed.

### 7. worked example: an electron between plates
> Now the electron version, in the same field of five thousand volts per metre, pointing down. An electron is released near the bottom plate. The force on the electron is one point six oh two times ten to the minus nineteen, times five thousand, which is eight point oh one times ten to the minus sixteen newtons, upwards, towards the positive **plate**. Divide by the electron's mass, nine point one oh nine times ten to the minus thirty-one kilograms, and the acceleration is eight point eight times ten to the fourteen metres per second squared, also **upwards**.

Visual: calculation layout. Task strip: "Electron released near the negative plate: find F and a." Equation strip: "F = qE, a = F/m". Givens grouped: "E = 5.0 × 10³ V m⁻¹ (from scene 4)", "q = −e = −1.602 × 10⁻¹⁹ C", "m_e = 9.109 × 10⁻³¹ kg (data sheet)". `AlignedAlgebra`: "|F| = 1.602 × 10⁻¹⁹ × 5.0 × 10³"; on "plate" "= 8.01 × 10⁻¹⁶ N, up (towards +)". "a = 8.01 × 10⁻¹⁶ / 9.109 × 10⁻³¹"; on "upwards" "= 8.8 × 10¹⁴ m s⁻², up" boxed. A small plate stage at the right shows the electron with its upward arrows.

### 8. can we ignore gravity?
> That's about ninety thousand billion times g, so for an electron, gravity is far too small to matter. Check it, though. A proton in the same field feels the same size of force, but it's about eighteen hundred times more massive, so its acceleration is that many times **smaller**, and it heads for the negative plate. For a charged oil drop, which is far more massive, gravity really does **matter**. That's how Millikan held oil drops perfectly still, with the electric force upwards balancing the weight **downwards**.

Visual: camera change. A comparison bar "a / g ≈ 9.0 × 10¹³" with a dot for g that is invisible at that scale (tag "g: too small to draw"). On "smaller" the proton appears beside the electron with an equal amber force arrow pointing down and a violet acceleration arrow 1/1837 as long (drawn as a short stub with "a_p = a_e / 1837"). On "matter" camera change to the plate stage with the oil drop plate (`phys-y11-oil-drop-v1.png`, scaled uniformly to about 40 px) in the gap, a "−" sign beside it. On "downwards" an amber "mg" arrow down and an amber "qE" arrow up of equal length; the drop holds still; tag "balance: qE = mg".

### 9. back to the puzzle
> So, back to the puzzle. Double the voltage, and the field doubles, so the force and the acceleration **double**. Pull the plates twice as far apart at the same voltage, and the field halves, so the acceleration **halves**. Swap in an electron, and the force flips, to point against the field. It's also about eighteen hundred times bigger, because the electron is so much **lighter**.

Visual: camera change back to scene 1's three ghosts, now solid. On "double" ghost 1's arrow doubles, "a × 2" ticks; on "halves" ghost 2's arrow halves, "a ÷ 2" ticks; on "lighter" ghost 3's arrow flips upward and grows off the panel edge with "× 1837" and a tick. Prediction chips from scene 1 are marked.

### 10. memory aid
> Here's a chain to remember. V over d gives the field. Times q gives the force. Over m gives the acceleration. And for direction, the field arrows show where a positive charge is pushed, so a negative charge goes the other **way**.

Visual: board clears to the chain "V/d → ×q → ÷m" in large handwriting, with "E", "F", "a" under the links. On "way" a pair of small plates with one "+" and one "−" particle and opposite arrows. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Two parallel plates are two point five centimetres apart, connected to a hundred and fifty volt supply. A proton is released from rest next to the positive plate. Calculate the electric field strength, then the magnitude of the proton's acceleration, and state its direction. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Two parallel plates are 2.5 cm apart and connected to a 150 V supply. A proton is released from rest next to the positive plate. (a) Calculate the electric field strength between the plates. (b) Calculate the magnitude of the proton's acceleration and state its direction. (m_p = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> E equals V over d. A hundred and fifty volts over zero point zero two five metres is six point zero times ten to the three volts per **metre**. Then q E over the proton's mass gives an acceleration of five point seven times ten to the eleven metres per second squared, towards the negative **plate**. The classic slip is leaving the gap in **centimetres**.

Visual: card shrinks to the top. Rows: "E = 150/0.025"; on "metre" "= 6.0 × 10³ V m⁻¹" boxed; "F = qE = 9.61 × 10⁻¹⁶ N"; on "plate" "a = F/m = 5.7 × 10¹¹ m s⁻², towards the negative plate" boxed. On "centimetres" a chip "E = 150/2.5 = 60 V m⁻¹" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. An oil drop has a mass of one point six times ten to the minus fourteen kilograms, and a charge of minus three point two times ten to the minus nineteen coulombs. It sits between two horizontal plates, sixteen millimetres apart. What voltage holds it still, and which plate must be positive? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "An oil drop of mass 1.6 × 10⁻¹⁴ kg carries a charge of −3.2 × 10⁻¹⁹ C. It is between two horizontal parallel plates 16 mm apart. (a) Calculate the potential difference needed to hold the drop stationary. (b) State which plate must be positive. Justify your answer. (g = 9.8 m s⁻²)" Countdown ring for 10 seconds with "Pause here to answer." The oil drop plate sits beside the card between two plain plates with no signs. Nothing answer-bearing.

### 14. feedback 2 (brief)
> To hold still, q E must balance m g, so E equals m g over q, four point nine times ten to the five volts per metre. Then V equals E d, which is seven point eight times ten to the three **volts**. The drop is negative and needs an upward push, so the field must point down, and the top plate must be **positive**. The classic slip is pointing the field **upwards**, the way the drop needs to be pushed.

Visual: card shrinks. Rows: "qE = mg → E = mg/q = (1.6 × 10⁻¹⁴ × 9.8)/(3.2 × 10⁻¹⁹) = 4.9 × 10⁵ V m⁻¹"; on "volts" "V = Ed = 4.9 × 10⁵ × 0.016 = 7.8 × 10³ V" boxed. On "positive" the top plate gains "+" signs, blue field lines point down, the drop's upward amber "qE" arrow balances "mg". On "upwards" a chip "E up, bottom plate +" fades in and is crossed. Hold about 1 second.

### 15. next: firing the electron in sideways
> So the voltage and the gap set the field, and the field sets a constant force and acceleration, with a direction set by the charge's sign. Now let's fire an electron in sideways, parallel to the plates. It still feels that steady upward push, while it keeps moving **across**. So why does its path look like a ball thrown off a **cliff**?

Visual: clear change to the plate stage (2.0 cm gap, top "+"): an electron enters from the left at mid-gap with a teal "v" arrow; on "across" a faint amber upward "F" arrow attaches to it and it pauses at the plate entrance. On "cliff" a small left inset shows a coded exam-style cliff with a dashed parabola of a ball launched horizontally (from m5-v05's style); chip "Next: why is a charged particle's path between plates like a projectile?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Between large parallel plates (away from the edges) the field is uniform: E = V/d, from + to −. Units V m⁻¹ = N C⁻¹.
2. F = qE. Positive charge: force along E. Negative charge: force against E, towards the + plate.
3. a = F/m = qE/m = qV/(md), constant because E is uniform.
4. For electrons and protons a ≫ g, so gravity is neglected. Check it for heavier objects (oil drop: qE = mg).

Memory aid (large, on the notes screen): *V/d gives E; × q gives F; ÷ m gives a.* Second line: *Field arrows show the push on a + charge.*

## Teaching checks

- **Does it explain causes?** Why the field is uniform: straight, parallel, evenly spaced lines between large plates (2). Why E = V/d: work on one coulomb (3). Why the electron goes up: field direction is defined for a positive charge (5). Why a is constant: uniform E (6). Why gravity is dropped for electrons and kept for oil drops (8). Why the hook changes happen (9).
- **Misconceptions addressed:** field stronger near the positive plate (2, site Stop & Check); electron follows the field arrows (5, crossed); the gap does not matter (3, 4, 9); always ignore gravity (8); gap in centimetres (12, crossed); field pointing the way the drop must move (14, crossed).
- **One idea at a time:** field shape (2), field strength (3, 4), force (5), acceleration (6), example (7), gravity check (8), hook answers (9).
- **Video makes it easier:** field lines thinning as the gap widens (3); the 1 C token doing work (3); opposite arrows on a proton and an electron (5); constant-length acceleration arrows on strobe images (6); the oil drop held still (8).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 26 s and 29 s.
- **Avoided double teaching:** Year 11 field and volt ideas recalled in a sentence; v23's uniform-field bridge reused as the opening.
- **Syllabus coverage:** `P6-IQ1-01` "electric field between parallel charged plates E = V/d" derived and applied (3, 4, A1); "acceleration of charged particles by the electric field F_net = ma, F = qE" (5 to 9, A1, A2). The work example is v03.
- **Out of scope by design:** trajectories (v02); work and kinetic energy (v03); Coulomb's law beyond one contrast sentence.

## Practice questions and model answers

**Attempt 1 (scene 11; original, 3 marks suggested).** "Two parallel plates are 2.5 cm apart and connected to a 150 V supply. A proton is released from rest next to the positive plate. (a) Calculate the electric field strength between the plates. (b) Calculate the magnitude of the proton's acceleration and state its direction. (m_p = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)"
Model answer: (a) E = V/d = 150/0.025 = 6.0 × 10³ V m⁻¹. (b) F = qE = 1.602 × 10⁻¹⁹ × 6.0 × 10³ = 9.61 × 10⁻¹⁶ N; a = F/m = 9.61 × 10⁻¹⁶ / 1.673 × 10⁻²⁷ = 5.7 × 10¹¹ m s⁻², towards the negative plate (along the field, since the proton is positive). Classic mistake (crossed): d = 2.5 gives E = 60 V m⁻¹.

**Attempt 2 (scene 13; original, method from the site hook, 3 marks).** "An oil drop of mass 1.6 × 10⁻¹⁴ kg carries a charge of −3.2 × 10⁻¹⁹ C. It is between two horizontal parallel plates 16 mm apart. (a) Calculate the potential difference needed to hold the drop stationary. (b) State which plate must be positive. Justify your answer. (g = 9.8 m s⁻²)"
Model answer: (a) Stationary, so qE = mg: E = mg/|q| = (1.6 × 10⁻¹⁴ × 9.8)/(3.2 × 10⁻¹⁹) = 4.9 × 10⁵ V m⁻¹; V = Ed = 4.9 × 10⁵ × 0.016 = 7.8 × 10³ V. (b) The electric force must be upwards; the drop is negative, so the force is opposite to E, so E points down; the field points from + to −, so the top plate is positive. Classic mistake (crossed): field upwards, bottom plate positive.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; g = 9.8 m s⁻² | throughout |
| Field example | 100/0.020 = 5.0 × 10³ V m⁻¹; 200 V: 1.0 × 10⁴; 0.040 m: 2.5 × 10³ | 4, 7 |
| Worked example | F = 8.01 × 10⁻¹⁶ N; a = 8.79 × 10¹⁴ m s⁻² ("eight point eight") | 7 |
| Gravity ratio | a/g = 8.97 × 10¹³ ("about ninety thousand billion") | 8 |
| Mass ratio | m_p/m_e = 1836.6 ("about eighteen hundred"; screen "1837") | 8, 9 |
| Proton in the 5.0 × 10³ V m⁻¹ field | a = 4.79 × 10¹¹ m s⁻² (screen only if asked by the review) | 8 |
| A1 | E = 6.0 × 10³ V m⁻¹; F = 9.612 × 10⁻¹⁶ N; a = 5.745 × 10¹¹ m s⁻² ("five point seven"); slip 60 V m⁻¹ | 11, 12 |
| A2 | E = 4.90 × 10⁵ V m⁻¹; V = 7,840 V ("seven point eight times ten to the three") | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 100/0.020 = 5,000; 1.602 × 10⁻¹⁹ × 5,000 = 8.010 × 10⁻¹⁶; / 9.109 × 10⁻³¹ = 8.7935 × 10¹⁴; / 9.8 = 8.973 × 10¹³.
- 1.673 × 10⁻²⁷ / 9.109 × 10⁻³¹ = 1,836.65.
- A1: 150/0.025 = 6,000; × 1.602 × 10⁻¹⁹ = 9.612 × 10⁻¹⁶; / 1.673 × 10⁻²⁷ = 5.7454 × 10¹¹.
- A2: 1.6 × 10⁻¹⁴ × 9.8 / 3.2 × 10⁻¹⁹ = 4.90 × 10⁵; × 0.016 = 7,840.
- Site checks: 6-mark a/g = 2.638 × 10¹⁵ / 9.8 = 2.69 × 10¹⁴; F/mg = 2.403 × 10⁻¹⁵ / 8.927 × 10⁻³⁰ = 2.69 × 10¹⁴. Review balance with e = 1.602 × 10⁻¹⁹ C: 1.566 × 10⁴ V.

## Memory aid check

- **"V/d gives E; × q gives F; ÷ m gives a."** From the site's step order ("choose an axis and identify E, use F = qE, use a = F/m") and the 6-mark chain. Meaning, as said in scene 10: the plate values set the field, the charge turns the field into a force, the mass turns the force into an acceleration. Assumptions checked: uniform field (large plates, middle region); only the electric force (gravity neglected unless the check says otherwise, scene 8). Helps A1 directly. Introduced after scenes 3 to 9.
- **"Field arrows show the push on a + charge."** From the site's misconception box. True by the definition of E. Helps A2(b).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,138 characters**, 16 scenes. Characters per scene (1 to 16): 403, 503, 464, 415, 488, 419, 556, 508, 372, 226, 308, 344, 323, 389, 330, 75. At 13.3 characters per second the speech is about 462 s; add 3 s for the prediction countdown, about 4 s for the strobe and drop animations, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 549 s**, inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's Millikan sentence (A2 still carries the balance); scene 9's proton comparison sentence.

## Opening frame

m5-v23's final frame (`phys-y12-m5-v23.md`, "Final frame"): paper background; two coded horizontal parallel plates across the centre (top "+", bottom "−") with parallel equal field arrows between them, tag "E: uniform", a voltage label "V" across the gap; a small coded "+q" particle between the plates with an empty arrow "a = ?"; at the left a small inset of Earth's surface patch with parallel gravitational field arrows, tag "near the surface: uniform"; heading "What minimum launch speed allows escape without further propulsion?"; chip "Next (Module 6): how does voltage between parallel plates determine a charged particle's acceleration?". Scene 1 relabels the particle "proton (+)", starts it moving and builds the three ghosts; the heading changes in scene 2 and the inset fades there.

## Final frame

The last explained frame (end of scene 15): paper background; the plate stage across the centre: two coded horizontal plates 2.0 cm apart on the drawing scale (top row "+", bottom row "−"), blue field lines pointing down, an electron "(−)" at the left entrance at mid-gap with a teal "v" arrow pointing right and a faint amber "F" arrow pointing up; at the left a small inset of an exam-style cliff with a dashed horizontal-launch parabola; heading "How does the voltage between parallel plates set a charged particle's acceleration?"; chip "Next: why is a charged particle's path between plates like a projectile?". v02 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v01` (route phys-y12-m6-v01). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v01`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v01` (root to confirm).

In order (16 scene headings): hook, uniform-field, e-equals-v-over-d, field-numbers, force-sign, acceleration-chain, worked-electron, gravity-check, puzzle-answers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: plate stage (kit gap 1), one-coulomb work strip, `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v23's final frame continues into scene 1 (camera continue); 1 to 2 camera continue; 2 to 3 camera push; 3 to 4 clear change to the calculation layout; 4 to 5 camera change; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera change; 8 to 9 camera change; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v01-learning-review.md`, `checks/p-y12-m6-v01-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only):
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA, bench high-voltage supply with dial and display): scene 3.
- `public/assets/physics/phys-y11-oil-drop-v1.png` (1263 × 1246, RGBA, a single clear yellow drop): scenes 8, 13, 14.

Need (new plates): none.

Coded: plates, field lines, fringe lines, particles, arrows, strobe images, the 1 C token, chains, algebra, chips, cards, countdowns, notes board.

Kit gaps: 1. **Plate stage** (two horizontal plates with sign rows; gap and voltage readouts; supply leads; field lines whose spacing follows E; optional fringe bulges; particles accelerating from rest at a set a with slow motion; scaled force and acceleration arrows; strobe images). Shared with v02, v03 and v06; extends `ElectricPlates` (`m6-plates`).

## Codex asset brief (Year 12 Physics M6 v01)

No new plates. Codex confirms that `phys-y11-eht-supply-v1.png` has a clear spot on its right face for two coded leads (report the two terminal centres in plate coordinates) and that `phys-y11-oil-drop-v1.png` still reads as a drop at 40 px.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: uniform field between large plates away from the edges; E = V/d from the work on one coulomb; V m⁻¹ = N C⁻¹; F = qE with direction by sign; a = qE/m constant; gravity negligible for the electron (ratio about 9 × 10¹³); m_p/m_e about 1837; qE = mg balance and plate polarity in A2.
3. Confirm the HSC data sheet constants and the printed form of the uniform-field relation (open decision 3).
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Charged Particles Between Parallel Plates: E = V/d and F = qE | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson01.sa.html

Double the voltage across two charged plates and a particle's acceleration doubles; pull the plates apart and it halves; swap a proton for an electron and it flips. See why the field between large plates is uniform, derive E = V/d, use F = qE with the charge's sign, find an electron's huge acceleration, and see when gravity can and can't be ignored (Millikan's oil drop). Two exam-style questions at the end. First video of Module 6.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate and quantitatively derive and analyse the interaction between charged particles and uniform electric fields, including: (ACSPH083) electric field between parallel charged plates E = V/d; acceleration of charged particles by the electric field F_net = ma, F = qE; work done on the charge W = qV, W = qEd, K = ½mv²"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: why a charged particle's path between plates is like a projectile.

#HSCPhysics #Physics #ElectricField #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the one-coulomb derivation of E = V/d clear for a student starting Year 12; is the gravity check helpful or a detour), then the physics check and the Codex error check.
- Judge the field-line density change, the opposite force arrows and the oil drop balance at playback speed.
