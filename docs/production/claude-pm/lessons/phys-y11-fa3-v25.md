# Year 11 Physics FA3 V25 (Physics 2025, Year 11, Focus Area 3): How strong is the magnetic field near a current-carrying wire, and why does it only halve when you move twice as far away? (design)

Status: Revision 2 (5 Nov 2026), brief 164 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v25`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (`phys-y11-wire-card-stand-v1.png`, `phys-y11-field-sensor-v1.png`); the bench supply (delivered), the data logger (delivered) and the plotting compass (requested in FA2) reused by name.

Narration 5,938 characters, 17 scenes, about 548 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-fifth video of the Year 11 Physics (2025) Focus Area 3 route: the strength of the magnetic field around a long straight current-carrying wire; the tesla and the microtesla; measured fields at 5, 10 and 20 cm (halving with doubled distance) and at doubled current (doubling); the cause of the 1/r fall-off (the field wraps round circles whose length 2πr grows with r; contrasted with the point charge's sphere, 4πr², from v04); the syllabus equation B = μ₀I/2πr with every symbol, r as the perpendicular distance, μ₀ and its plain meaning; the shortcut μ₀/2π = 2 × 10⁻⁷ T m A⁻¹; calculating B; predicting changes by scaling; rearranging for r. Templates: `phys-y11-fa3-v13.md` to `phys-y11-fa3-v15.md` (concept format, section list, calculations as task, equation and grouped givens), with `phys-y11-fa3-v14.md` as the closest model; FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v20.md` (Revision 1). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson23.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 the equation and what it says, true or false, card 2 calculating the field with `we-1`, its figure description and the quick check, activity 1 field at two distances, fill the blanks, card 3 reading the relationships, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 23 ("Thumb along the current, fingers curl the field. And μ₀/2π is just 2 × 10⁻⁷."; the shortcut half used, see "Memory aid check"). Related design read: `phys-y11-fa3-v04.md` (the sphere picture for 1/r²; recalled, not re-taught). Route entry: `phys-y11-fa3-v25` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Magnetic Field of a Current-Carrying Wire, B = μ₀I/2πr. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply magnetic field of a current-carrying wire, b = μ₀i/2πr? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v26: How can I explain and apply the solenoid, structure and field?" (v26 is designed in the same session and words it "How does winding a wire into a long coil turn its weak, curved field into a strong, even one with a north and a south end?").

**Opening frame (v24's actual handoff, Revision 1, 3 Nov; Revision 2 replaces the earlier assumed frame).** v24's scene 21 ends with its memory lines small at the top; the long straight wire seen end-on (an ink circle with a dot, current out of the page, "I" beside it) with three plum dashed concentric field circles at increasing spacing; two coded probe points at "r" and "2r" on one side of the wire, each with a plum field arrow, the outer one shorter; chips "twice the current?", "twice as far away?" and "how strong, in numbers?"; and the chip "Next: Why does a wire's magnetic field grow with the current and fade with distance, and by how much?". This video opens on that frame. Scene 1's first sentence already matches v24's closing narration, so no narration changes.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the sensor slides by code; no grip-rule hand is drawn); the wire on its card stand, the field sensor, the data logger, the bench supply and the plotting compasses painted (apparatus); field lines, the wire seen end-on, circles, spheres, circuits, graphs and working coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original questions; key-notes hold; Australian spelling; no em dashes; v04 (field lines spread over a sphere, area 4πr², so E falls as 1/r²), v11 (current as charge flowing each second) and v24 (circular field lines round a wire, their direction, spacing showing strength) recalled in a phrase each; Stage 5 Mathematics (circumference 2πr; scientific notation; rearranging) recalled in a phrase.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Magnetism"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (the stacked fraction written inline, FA2 root decision 11):

- P25-FA3-G3-03 `ci6de98fee`: "Calculate the strength of the magnetic field produced by a current-carrying wire using B = μ₀I/2πr"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v24's handoff (above); the hook (twice as far: a half, or a quarter like a charge's field?); measured readings (sensor zeroed, so Earth's field is not counted) at 5, 10 and 20 cm from a 5.0 A wire: 20, 10 and 5.0 μT; the tesla and microtesla with Earth's field (about 50 μT) for scale; the cause: a charge's lines spread over a sphere (v04, one sentence), a wire's field wraps round circles, and the field times the circle's length is the same for every circle (Ampère's idea, grey tag), so twice the radius, twice the length, half the field; doubling the current doubles the field (10 A gives 20 μT at 10 cm); the equation with r as the perpendicular distance and μ₀ in plain words; the shortcut 2 × 10⁻⁷; the site's `we-1` (1.0 × 10⁻⁵ T, matching the bench reading); a prediction from the site quick check (10 A at 0.20 m: the same field); scaling by any factor; rearranging for r (the site's Q2 numbers, 0.080 m); memory aid; two attempts. Stops at calculating B near a long straight wire, predicting changes and rearranging for r or I. Not taught: the field's direction beyond one recalled phrase (v24); field lines of a loop (v24); solenoids (v26, v27); forces between wires or on a wire in a field (not Year 11 2025; author note f); Ampère's law as an equation to use (grey tag only).

## Decisions

- **Learner question (route placeholder rewritten).** "How strong is the magnetic field near a current-carrying wire, and why does it only halve when you move twice as far away?" One causal question: the cause (the field shared round a circle that grows in proportion to r) is the 2πr on the bottom of the syllabus equation, so answering "why only half" explains the equation, and "how strong" is the calculation the point asks for. Answer, built in order: hook and prediction (1); measure it (2); why only half (3); why more current gives more field (4); the equation (5); the shortcut (6); `we-1` (7); prediction and scaling (8, 9); rearranging for r (10); memory aid (11).
- **Measure before the equation (owner quality bar: show the organism, apparatus or process).** Scene 2 uses a painted bench set-up: a long vertical copper wire through a horizontal card on a retort stand (new plate), the bench supply (delivered) with a coded ammeter readout "5.0 A", a magnetic field sensor on a rod (new plate) wired to the delivered data logger (`phys-y11-data-logger-v1.png`), its coded screen reading in μT. The sensor slides by code to 5.0, 10 and 20 cm marks on a coded scale on the card. The readings (20, 10, 5.0 μT) are tagged "illustrative readings: long wire, Earth's field zeroed". "Zeroed" is spoken: the logger is set to zero with the current off, so it shows only the wire's field.
- **The cause made visible (owner quality bar).** **`CircleShare`** (new): the wire end-on (a dot in a circle: current out of the page); two plum dashed field circles at r and 2r; a coded "amount" readout "B × circle length" pinned beside each, equal on both ("same for every circle"); the circle at 2r unrolls into a straight grey bar twice as long as the r circle's bar, and the B readout on it halves. Beside it, a small ghost of v04's `LineSphereCount` (sphere at r and 2r, "area × 4") for the contrast; "circle: length × 2: B ÷ 2"; "sphere: area × 4: E ÷ 4". Then the circle's length labels "2πr", and the 2πr glows in the boxed equation in 5, so the symbols are the picture.
- **Ampère named once, as the source of the idea.** "Ampère found" is spoken; a grey tag "Ampère's law: beyond this course; it shows where 2πr comes from". The video never asks students to use it. (Author note a.)
- **Why B ∝ I (scene 4).** Twice the current means twice the charge flowing past each second (v11), so twice as much field round every circle. The bench readout shows 10 A giving 20 μT at 10 cm.
- **r is the perpendicular distance (site misconception 2).** In 5 a grey dimension line runs straight out from the wire at right angles; a second line along the wire takes a grey scribble cross ("not along the wire").
- **μ₀ in plain words.** "Permeability of free space: a measured constant for empty space that sets how strong magnetic effects are in our units" (mirrors v04's ε₀). Shown once: "μ₀ = 4π × 10⁻⁷ T m A⁻¹". Spoken "mu nought".
- **The shortcut (site card 2 and memory hook).** μ₀/2π = 2 × 10⁻⁷ T m A⁻¹, because the π cancels and 4 ÷ 2 = 2; written "B = (2 × 10⁻⁷) I / r". Shown after the full equation, never in place of it; the boxed equation stays the syllabus form.
- **Worked example 1 (site `we-1`, numbers unchanged).** 5.0 A at 0.10 m: 1.0 × 10⁻⁵ T. It matches the bench reading of 10 μT, so the equation is seen to predict the measurement. **Worked example 2 (site Q2, numbers unchanged, turned into a worked rearrangement).** 12 A, 3.0 × 10⁻⁵ T: r = 0.080 m. "No square root, unlike the charge" (site Q2 note; v04 contrast).
- **Prediction (site quick check, numbers unchanged).** 10 A at 0.20 m: "bigger, smaller or the same as five amps at ten centimetres?": the same (doubling I doubles B, doubling r halves it). Then the general scaling rule (triple the current, triple the field; three times as far, a third).
- **"Long" kept as a condition in learner copy.** The equation is for a long straight wire, at distances small compared with its length; the condition is spoken once in 5 and kept on the boxed equation's tag ("long straight wire") and on both attempt cards, because dropping it would teach that any wire obeys it (AGENTS caveat rule). Finite-length detail stays in author note b.
- **Attempts (original, HSC style).** (A1, calculate and scale; site Q1 type, new numbers) "A long straight wire carries a current of 6.0 A. (a) Calculate the magnetic field strength at a perpendicular distance of 4.0 cm from the wire. (b) Without substituting into the equation again, state the magnetic field strength at a perpendicular distance of 12 cm from the wire, and justify your answer. (3 marks)" Answer: 3.0 × 10⁻⁵ T; 1.0 × 10⁻⁵ T, a third, because B ∝ 1/r. Crossed: "a ninth: 3.3 × 10⁻⁶ T". (A2, rearrange for I; site Q2 type, new numbers) "A magnetic field sensor is placed at a perpendicular distance of 5.0 cm from a long straight wire. The wire's current produces a magnetic field of 4.0 × 10⁻⁵ T at the sensor. Calculate the current in the wire. (3 marks)" Answer: 10 A. Crossed: "r = 5.0, so I = 1000 A" (centimetres not converted).
- **Mistake scene:** none separate. "A wire's field follows an inverse square law" (3, the sphere and circle contrast; A1 crossed; site misconception 1); "r is measured along the wire" (5; site misconception 2); "centimetres put straight into the equation" (A2 crossed).
- **Memory aid:** "A charge's field spreads over a sphere: twice as far, a quarter. A wire's field wraps round a circle: twice as far, a half." with the shortcut line "μ₀ over 2π is 2 × 10⁻⁷" (see "Memory aid check").
- **Handoff (route next; proposal for v26's question).** Board change: the end-on wire returns to side view and, on cue, bends by code into a coded coil of six turns (a helix drawn as an HSC-style side view, the bold ink "I" arrow along the lead); faint plum dashed circles round two neighbouring turns; chips "what shape is the field?" and "which end acts as north?"; then "Next: How does winding a wire into a long coil turn its weak, curved field into a strong, even one with a north and a south end?". This is the frame v26 opens on.
- **Site sources used:** intro (B grows with I, falls with distance: 2, 3, 4); hook (twice as far: half, not a quarter: 1, 3); warm-up (double the current: 4); intentions (Know 1 to 3: 5, 6; Understand 1 to 3: 3, 4, 5; Can Do 1 to 3: 7, 8, 9, 10, A1, A2); key terms (B in tesla 2, μ₀ 5, perpendicular distance 5, inverse proportion 9); misconceptions 1 and 2 (3, 5); card 1 (5); true or false (false: 3, A1 crossed); card 2, `we-1`, the figure description (7; spacing growing with r: 1); quick check (A, 1.0 × 10⁻⁵ T: 8); activity 1 (the ratio idea: 9); card 3 (9, 10); last check (true: 9); two truths one lie (C is the lie: A1 crossed); Q1 (A1 structure, new numbers); Q2 (10, numbers unchanged; A2 structure); Q3 (3, with correction 1); retrieve (11).
- **Site corrections (quoted from site lesson 23, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Q3 model answer: "The geometrical reason is that the wire's field lines spread over the curved surface of a cylinder, whose area grows in proportion to $r$, whereas the point charge's lines spread over a sphere". A wire's magnetic field lines are closed circles round the wire; they do not run outwards through a cylinder (that picture fits the electric field of a long line of charge). The 1/r comes from the circle's length: the field times the circumference 2πr is fixed by the current (Ampère's law). Suggest: "The geometrical reason is that the wire's field lines are circles round the wire, and the field strength times the circle's length, 2πr, is fixed by the current, so B ∝ 1/r; the point charge's lines spread over a sphere whose area grows as r²."
  2. Intro: "reveals that the field fades in proportion to distance, not to distance squared". "Fades in proportion to distance" can be read as B falling linearly with r. Suggest: "reveals that the field is inversely proportional to the distance, not to the distance squared".
  3. Retrieve and card 1 ("the same μ₀ returns when you calculate the field inside a solenoid with $B = \mu_0 n I$"): the 2025 syllabus writes the solenoid equation as B = μ₀NI/L (logged in full under `phys-y11-fa3-v27.md`). Suggest: "with B = μ₀NI/L (also written μ₀nI, where n = N/L)".
  - Checked and correct: card 1 (B ∝ I, B ∝ 1/r); `we-1` (1.0 × 10⁻⁵ T); the figure description (current out of the page, anticlockwise circles, spacing growing outwards); quick check (A); activity 1 (4.0 × 10⁻⁵ T and 2.0 × 10⁻⁵ T, ratio 2); last check (true); two truths one lie (C); Q1 (1.6 × 10⁻⁵ T; 8.0 × 10⁻⁶ T); Q2 (0.080 m); misconceptions 1 and 2.
- **Cause chain taught, in order:** (1) twice as far from a wire: a half or a quarter? (1); (2) measured: a half; fields of microtesla, smaller than Earth's (2); (3) a wire's field wraps round circles; the field times the circle's length is fixed, so a circle twice as long has half the field; a charge's sphere has four times the area, so a quarter (3); (4) twice the current is twice the charge flowing each second, so twice the field (4); (5) both ideas in one equation, with 2πr the circle's length and μ₀ the constant for empty space (5); (6) the π cancels: 2 × 10⁻⁷ (6); (7) the equation predicts the bench reading (7); (8) changes can be predicted by scaling (8, 9); (9) any one unknown can be found by rearranging (10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v04 (a charge's field lines spread over a sphere; E ∝ 1/r²), v11 (current as charge flowing each second), v24 (field lines round a straight wire are circles; their spacing shows strength; the direction rule), each recalled in a phrase; Stage 5 Mathematics (circumference 2πr; scientific notation; rearranging).
- **Learner-visible vocabulary (plain meaning at first use):** magnetic field strength, B (how strong the magnetic field is at a point, 2); tesla, T (its unit; a microtesla is a millionth of a tesla, 2); zeroed (set to read zero with the current off, 2); perpendicular distance, r (straight out from the wire, at right angles to it, 5); permeability of free space, μ₀ (a measured constant for empty space that sets how strong magnetic effects are in our units, 5); inversely proportional (one halves when the other doubles, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`CircleShare`** (new: field circles at r and 2r with a pinned "B × circle length" readout that stays equal, a circle that unrolls into a length bar, and a B readout that halves); v04's **`LineSphereCount`** (small ghost for the contrast); v24's **end-on wire and `WireFieldCircles`** (dot or cross, plum dashed circles spaced as 1/r); **sensor slide** (the sensor plate glides along a coded cm scale; the logger's coded screen counts to each reading); **`DimensionLine`** (grey, with a crossable "along the wire" variant); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`; HSC-symbol `CircuitDiagram` (supply, ammeter, the wire as a long straight lead; small inset only).
- **Colour key:** as v01 to v20; the magnetic field plum dashed (FA2 root decision 18, kept in FA3); conventional current a bold ink "I" arrow and the end-on dot or cross in ink (root decision 17); distances and dimension lines grey; the sphere ghost teal (it is v04's electric field); readouts ink; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the bench or the field diagram in the left half; the working in the right half; readouts beside the sensor.
- **No human figures.** None. The direction rule is recalled in words only; no hand is drawn.
- **Author notes (not learner copy):**
  (a) Ampère's circuital law for a long straight wire: B × 2πr = μ₀I, so B = μ₀I/2πr. The video states it as "the field times the circle's length is the same for every circle round the wire, set by the current"; this is exact for the symmetric case. It is not on the 2025 Year 11 list, hence the grey tag.
  (b) "Long" matters: for a wire of length L centred on the sensor, B = (μ₀I/2πr) × (L/2)/√((L/2)² + r²). A 1.0 m wire at 5.0 A gives 9.8 μT at 10 cm and 4.6 μT at 20 cm; the shown readings (10 and 5.0 μT) model a wire long compared with 20 cm, with the return leads kept far away. The bench tag "illustrative readings: long wire" covers this.
  (c) Earth's field at the surface is about 25 to 65 μT (about 57 μT near Sydney); "about fifty microtesla" is spoken. The sensor is zeroed with the current off.
  (d) μ₀ = 4π × 10⁻⁷ T m A⁻¹ is the value the syllabus and site use; since 2019 μ₀ is measured (1.000 000 000 55 × 4π × 10⁻⁷), which makes no difference here. The narration says "Mu nought is very close to four pi times ten to the minus seven" and "about two times ten to the minus seven" (brief 164: μ₀ is measured in the current SI, so 4π × 10⁻⁷ is an excellent approximation, not exact); all rounded answers are unchanged.
  (e) Bench safety (screen tag only, not an investigation): a thick wire at 5 to 10 A warms; the supply is switched off between readings (grey tag in 2 and 4).
  (f) Forces on a current in a field and between wires are not Year 11 (2025) points; not mentioned.
  (g) Pronunciations: "mu nought" (mew nort); "tesla" (TESS-la); "Ampère" (AM-pair).

Main question: *Move twice as far from a charge and its field drops to a quarter. Move twice as far from a current-carrying wire and its field only halves. How strong is the magnetic field near a current-carrying wire, and why does it only halve when you move twice as far away?*
Entry knowledge (v04 the sphere and 1/r²; v11 current as charge per second; v24 circular field lines round a wire).
Stops after: B = μ₀I/2πr explained, calculated, scaled and rearranged, for a long straight wire. No solenoids, no forces.
Handoff: v26, the solenoid.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v20, magnetic field plum dashed.

### 1. hook (a half, or a quarter?)
> Last time, we saw that a current wraps a wire in circles of magnetic field, and the circles get further apart as you move out, because the field gets weaker. But how much weaker? Move twice as far from a point charge and its field drops to a quarter. Move twice as far from this wire. Does its field drop to a quarter too, or only to a **half**?

Visual: opens on v24's last frame (see "Opening frame"). The "Next" chip becomes the heading: "The field of a wire: B = μ₀I/2πr"; the memory lines fade. On "circles of magnetic field" the plum dashed circles pulse outwards from the wire; on "further apart" grey spacing ticks appear between neighbouring circles. On "a point charge" a small ghost of v04's charge with spheres at r and 2r fades in at the side, its "a quarter" tag from v04. On "this wire" v24's r and 2r probe points and their two plum arrows pulse; the chip "twice as far away?" brightens while "twice the current?" and "how strong, in numbers?" dim to wait for later scenes. On "half" chips "a quarter?" and "a half?" and a 3-second countdown ring.

### 2. measure it
> Let's measure it. A long straight wire runs up through a card, carrying five amps. A magnetic field sensor sits on the card, and it's been zeroed with the current off, so it shows only the wire's field. Magnetic field strength, B, is measured in tesla. These fields are tiny, so the logger reads in microtesla, millionths of a tesla. Five centimetres away: twenty microtesla. Ten centimetres: ten. Twenty centimetres: five. Each time the distance doubles, the field **halves**. For scale, Earth's own field is about fifty microtesla.

Visual: board change to the bench. The painted wire on its card stand (`phys-y11-wire-card-stand-v1.png`) at centre left; the bench supply (`phys-y11-low-voltage-supply-v1.png`) with coded leads and a coded ammeter readout "5.0 A"; the field sensor (`phys-y11-field-sensor-v1.png`) on the card, its lead to the data logger (`phys-y11-data-logger-v1.png`) with a coded screen. Grey tag on the supply: "switch off between readings". On "zeroed" the logger shows "0.0 μT" with the current off, then the ammeter rises to "5.0 A". On "tesla" chip "B: magnetic field strength, in tesla (T)"; on "microtesla" chip "1 μT = 10⁻⁶ T". On each distance the sensor glides along a coded cm scale on the card to "5.0 cm", "10 cm", "20 cm", and the logger counts to "20 μT", "10 μT", "5.0 μT"; each pair drops into a small table at the right ("r (cm)", "B (μT)"). On "halves" grey arrows "× 2" between the distances and "÷ 2" between the readings. Grey tag: "illustrative readings: long wire, Earth's field zeroed". On "Earth's own field" a grey chip "Earth's field ≈ 50 μT". Chip "a half?" from the hook ticks; "a quarter?" takes a grey scribble cross.

### 3. why only half?
> So why a half, and not a quarter? Think back to the point charge. Its field lines spread out over a sphere, and a sphere's area grows with r squared. A wire's field lines are circles that wrap around it. And here's the key idea, found by Ampère. Take any circle around the wire, and multiply the field strength by the circle's length. You always get the same amount, set by the current. A circle twice as far out is twice as long, so the field along it must be half as **strong**. The circle's length is two pi r. Keep an eye on that.

Visual: board change to the field diagram. Left: the wire end-on (ink dot in a circle, tag "current out of the page"), `CircleShare` with plum dashed circles at r and 2r. Right: the small ghost of v04's sphere at r and 2r (teal), tag "sphere: area × 4: E ÷ 4". On "circles that wrap around it" the two plum circles draw round the wire. On "multiply the field strength by the circle's length" a readout pins beside the r circle: "B × circle length"; on "the same amount" the same readout appears on the 2r circle, both showing one equal coded bar ("same for every circle"). Grey tag: "Ampère's law: beyond this course; it shows where 2πr comes from". On "twice as long" both circles unroll into straight grey bars, the second twice the first; on "half as strong" a B readout on each, the second half the height; tag "circle: length × 2: B ÷ 2". On "two pi r" the r circle's bar labels "2πr" and stays.

### 4. more current, more field
> What about the current? Back at the bench, turn it up from five amps to ten. Twice the current means twice as much charge flowing past every second, and every moving charge adds to the field. So the amount around each circle doubles, and so does B. At ten centimetres, the sensor now reads twenty **microtesla**.

Visual: board change back to the bench, the sensor at "10 cm". On "turn it up" the ammeter counts "5.0 A" to "10 A". On "charge flowing past" small navy dotted electron-flow arrows in the wire speed up and the bold ink "I" arrow thickens (root decision 17). On "doubles" the logger counts "10 μT" to "20 μT"; a row "I × 2: B × 2" in the right column. A small `CircleShare` inset: the "B × circle length" bar doubles. Grey tag on the supply: "switch off between readings".

### 5. the equation
> Put those two ideas together, and you get the equation. B equals mu nought I over two pi r. B is the field strength in tesla, and I is the current in amps. Two pi r is the length of the circle, and r is the perpendicular distance in metres: straight out from the wire, at right angles to it, not along it. Mu nought is called the permeability of free space. It's a measured constant for empty space that sets how strong magnetic effects are in our units: four pi times ten to the minus seven. And this works for a long, straight wire, when you're close compared with its **length**.

Visual: clear change to the equation layout. Boxed "B = μ₀I / 2πr" builds, with the I glowing on "the current" (link to 4) and the 2πr glowing on "the length of the circle" (link to 3; the unrolled bar from 3 slides under it). A small end-on wire at left: on "perpendicular distance" a grey dimension line runs straight out from the wire, labelled "r (m)"; on "not along it" a side-view sketch adds a grey line along the wire that takes a grey scribble cross, chip "not along the wire". Symbol list builds one per cue: "B: field strength (T)"; "I: current (A)"; "r: perpendicular distance (m)"; on "permeability of free space" "μ₀ = 4π × 10⁻⁷ T m A⁻¹ (permeability of free space)". On "long, straight wire" a grey tag on the box: "long straight wire".

### 6. a handy shortcut
> Here's a handy shortcut. Mu nought is very close to four pi times ten to the minus seven. Divide that by two pi. The pis cancel, and four over two is two. So mu nought over two pi is about two times ten to the minus seven, and B is just two times ten to the minus seven, times I over **r**.

Visual: camera continue. Rows, one per cue: "μ₀ ≈ 4π × 10⁻⁷ T m A⁻¹" (grey tag "measured value, very close to this"); on "Divide that by two pi" "μ₀ / 2π ≈ (4π × 10⁻⁷) / 2π"; on "The pis cancel" the two π symbols take a grey strike and "≈ 2 × 10⁻⁷ T m A⁻¹"; on "B is just" the boxed shortcut "B = (2 × 10⁻⁷) × I / r" sits under the syllabus box, which stays boxed above it.

### 7. worked example: the bench reading
> Let's check the bench. Task: a long straight wire carries five point oh amps. Find the field strength at a perpendicular distance of point one oh metres. The givens: I is five point oh amps, and r is point one oh metres, with mu nought over two pi as two times ten to the minus seven. So B is two times ten to the minus seven, times five point oh, over point one oh. That's one point oh times ten to the minus five tesla, or ten microtesla, exactly what the sensor **read**.

Visual: camera continue in the calculation layout. Task strip: "Find B 0.10 m from a long straight wire carrying 5.0 A" (grey tag "site worked example"). Equation strip: "B = μ₀I / 2πr". Givens group: "I = 5.0 A"; "r = 0.10 m"; "μ₀ / 2π = 2 × 10⁻⁷ T m A⁻¹". Rows, one per cue: "B = (2 × 10⁻⁷ × 5.0) / 0.10"; boxed "B = 1.0 × 10⁻⁵ T = 10 μT". On "exactly what the sensor read" a thumbnail of the logger screen "10 μT" from 2 slides in beside the box with a tick.

### 8. prediction: more current, further away
> Now double the current to ten amps, and move out to twenty centimetres. Will the field be bigger than ten microtesla, smaller, or the **same**?

Visual: board change: the end-on wire with its circles; the r = 0.10 m mark ghosts and a new mark at 0.20 m; the "I" readout "5.0 A" becomes "10 A". Chips "bigger?", "smaller?", "the same?" and a 3-second countdown ring.

### 9. scaling without a calculator
> The same. Doubling the current doubles B, and doubling the distance halves it, so the two cancel out. Check it: two times ten to the minus seven, times ten, over point two oh, is one point oh times ten to the minus five tesla. So you can scale by any factor. Triple the current, and the field triples. Move three times as far away, and it falls to a **third**.

Visual: camera continue. On "doubling the current" a row "I × 2: B × 2"; on "doubling the distance" "r × 2: B ÷ 2"; on "cancel out" "× 2 ÷ 2 = same", chip "the same?" glows, the other two take grey scribble crosses. Check row: "B = (2 × 10⁻⁷ × 10) / 0.20 = 1.0 × 10⁻⁵ T" (grey tag "site quick check"). On "Triple the current" a row "I × 3: B × 3"; on "three times as far" "r × 3: B ÷ 3", and the circle at 3r draws with its B readout at a third. Summary chip, boxed: "B ∝ I and B ∝ 1/r".

### 10. finding the distance
> Sometimes you need the distance instead. Task: how far from a long wire carrying twelve amps is the field three point oh times ten to the minus five tesla? Rearrange first: r equals mu nought I over two pi B. The givens: I is twelve amps, and B is three point oh times ten to the minus five tesla. So r is two times ten to the minus seven, times twelve, over three point oh times ten to the minus five. That's point oh eight oh metres, eight centimetres. And notice there's no square root, as there was for the point charge, because r isn't **squared**.

Visual: clear change to the calculation layout. Task strip: "Find r where B = 3.0 × 10⁻⁵ T near a long straight wire carrying 12 A" (grey tag "site practice question"). Equation strip: "B = μ₀I / 2πr", then on "Rearrange" a row "r = μ₀I / 2πB". Givens group: "I = 12 A"; "B = 3.0 × 10⁻⁵ T"; "μ₀ / 2π = 2 × 10⁻⁷ T m A⁻¹". Rows, one per cue: "r = (2 × 10⁻⁷ × 12) / (3.0 × 10⁻⁵)"; boxed "r = 0.080 m = 8.0 cm". On "no square root" a grey chip "charge: r² (square root needed); wire: r (no square root)".

### 11. memory aid
> To remember it: a charge's field spreads over a sphere, so twice as far is a quarter. A wire's field wraps round a circle, so twice as far is a half. And mu nought over two pi is two times ten to the minus **seven**.

Visual: the handwritten line writes large: "Charge: a sphere. Twice as far, a quarter. Wire: a circle. Twice as far, a half." Under it: "μ₀ / 2π = 2 × 10⁻⁷". On "sphere" the teal sphere ghost pulses; on "circle" the plum circle. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A long straight wire carries six point oh amps. Calculate the magnetic field strength four point oh centimetres from it. Then, without substituting again, state the field strength twelve centimetres from the wire, and justify your answer. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A long straight wire carries a current of 6.0 A. (a) Calculate the magnetic field strength at a perpendicular distance of 4.0 cm from the wire. (b) Without substituting into the equation again, state the magnetic field strength at a perpendicular distance of 12 cm from the wire, and justify your answer. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Four centimetres is point oh four oh metres. B is two times ten to the minus seven, times six point oh, over point oh four oh: three point oh times ten to the minus five **tesla**. Twelve centimetres is three times as far, so the field is a third: one point oh times ten to the minus five tesla. Not a ninth. A wire's field isn't an inverse **square**.

Visual: card shrinks to the top; "6.0 A", "4.0 cm", "without substituting" and "12 cm" underlined. Rows: "(a) r = 0.040 m; B = (2 × 10⁻⁷ × 6.0) / 0.040 = 3.0 × 10⁻⁵ T", boxed; "(b) r × 3, so B ÷ 3 (B ∝ 1/r): B = 1.0 × 10⁻⁵ T", boxed. On "Not a ninth" a chip "a ninth: 3.3 × 10⁻⁶ T" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A field sensor is five point oh centimetres from a long straight wire. The wire's current makes a field of four point oh times ten to the minus five tesla at the sensor. Calculate the current in the wire. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A magnetic field sensor is placed at a perpendicular distance of 5.0 cm from a long straight wire. The wire's current produces a magnetic field of 4.0 × 10⁻⁵ T at the sensor. Calculate the current in the wire. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Rearrange for the current: I equals two pi r B over mu nought, which is r B over two times ten to the minus seven. With r as point oh five oh metres, that's point oh five oh times four point oh times ten to the minus five, over two times ten to the minus seven: ten **amps**. Putting in five centimetres as five gives a thousand amps. Convert to metres **first**.

Visual: card shrinks to the top; "5.0 cm", "4.0 × 10⁻⁵ T" and "current" underlined. Rows: "I = 2πrB / μ₀ = rB / (2 × 10⁻⁷)"; "r = 0.050 m"; "I = (0.050 × 4.0 × 10⁻⁵) / (2 × 10⁻⁷) = 10 A", boxed. On "a thousand amps" a chip "r = 5.0: I = 1000 A" fades in and takes a grey scribble cross. Hold about 1 second.

### 16. handoff
> So a long straight wire gives a field that wraps round in circles, grows with the current, and halves every time you double the distance. It's weak, though: just microtesla. So how does an electromagnet get a strong field? Wind the wire into a long coil, so that every turn adds its field to the next. What shape would that field make, and which end would act as **north**?

Visual: board change: the memory line small at the top. The end-on wire turns by code to a side view (a straight ink lead with its bold "I" arrow and two plum dashed circles round it); on "Wind the wire into a long coil" the lead bends into a coded coil of six turns (HSC-style side view), the "I" arrow on the lead in; faint plum dashed circles round two neighbouring turns. On "shape" chip "what shape is the field?"; on "north" chip "which end acts as north?". Then the chip "Next: How does winding a wire into a long coil turn its weak, curved field into a strong, even one with a north and a south end?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The magnetic field strength B near a long straight wire is B = μ₀I/2πr, with B in tesla (T), I in amps and r the perpendicular distance from the wire in metres.
2. μ₀ = 4π × 10⁻⁷ T m A⁻¹ (permeability of free space), so μ₀/2π = 2 × 10⁻⁷ and B = (2 × 10⁻⁷) I / r.
3. B ∝ I: twice the current, twice the field.
4. B ∝ 1/r (not 1/r²): twice as far, half the field. The field wraps round circles of length 2πr, unlike a point charge's field, which spreads over a sphere.
5. Convert cm to m first. Rearranged: r = μ₀I/2πB and I = 2πrB/μ₀.

Memory aid (large, on the notes screen): *Charge: a sphere. Twice as far, a quarter. Wire: a circle. Twice as far, a half.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the field halves when the distance doubles: the field times the circle's length is fixed, and the circle is twice as long (3). Why a charge's field falls faster: its lines spread over a sphere with four times the area (3, v04 recalled). Why doubling the current doubles the field: twice the charge flows each second, and each moving charge adds to the field (4). Why 2πr is on the bottom of the equation: it is the circle's length (3, 5). Why μ₀/2π is 2 × 10⁻⁷: the π cancels (6). Why doubling both I and r leaves B unchanged: the two factors cancel (9). Why no square root is needed for r: r is not squared (10).
- **Misconceptions addressed:** the wire's field is inverse square (3, A1 crossed; site misconception 1, site two truths one lie); r is measured along the wire (5; site misconception 2); centimetres used directly (A2 crossed).
- **One idea at a time:** measurement (2), the distance cause (3), the current cause (4), the equation (5), the shortcut (6), calculating (7), scaling (8, 9), rearranging (10).
- **Video makes it easier:** the student sees the logger halve as the sensor slides from 10 to 20 cm (2), the circle at 2r unroll into a bar twice as long while its B readout halves beside the ghost sphere quartering (3), the logger double as the ammeter doubles (4), the unrolled bar slide under the 2πr in the boxed equation (5), the π symbols strike out (6), and the equation's 10 μT land beside the logger's 10 μT (7).
- **Response opportunity:** two 3 s predictions (1, 8); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("long straight wire", "perpendicular distance", "without substituting", the sensor distance in cm), nothing answer-bearing. One crossed mistake each; feedback about 25 s and 24 s.
- **Avoided double teaching:** v04's sphere recalled in one sentence with a ghost (3); v24's circles and direction recalled in a phrase (1); v11's current in a phrase (4).
- **Syllabus coverage:** `ci6de98fee`: B calculated with the syllabus equation (7, 9, 10, A1, A2), with every symbol explained (5) and its form accounted for (3, 4).
- **Out of scope by design:** the direction rule (v24); loops (v24); solenoids (v26, v27); forces on currents.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A long straight wire carries a current of 6.0 A. (a) Calculate the magnetic field strength at a perpendicular distance of 4.0 cm from the wire. (b) Without substituting into the equation again, state the magnetic field strength at a perpendicular distance of 12 cm from the wire, and justify your answer."
Model answer: (a) r = 0.040 m; B = μ₀I/2πr = (2 × 10⁻⁷ × 6.0)/0.040 = 3.0 × 10⁻⁵ T. (b) 12 cm is three times the distance; B ∝ 1/r for a long straight wire, so B falls to a third: 1.0 × 10⁻⁵ T. Classic mistake (crossed): "a ninth: 3.3 × 10⁻⁶ T" (treating the wire's field as inverse square).

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** "A magnetic field sensor is placed at a perpendicular distance of 5.0 cm from a long straight wire. The wire's current produces a magnetic field of 4.0 × 10⁻⁵ T at the sensor. Calculate the current in the wire."
Model answer: I = 2πrB/μ₀ = rB/(2 × 10⁻⁷); r = 0.050 m; I = (0.050 × 4.0 × 10⁻⁵)/(2 × 10⁻⁷) = 10 A. Classic mistake (crossed): "r = 5.0, so I = 1000 A".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bench, 5.0 A (illustrative) | 5.0 cm, 20 μT; 10 cm, 10 μT; 20 cm, 5.0 μT | 2 |
| Bench, 10 A | 10 cm, 20 μT | 4 |
| Earth's field | about 50 μT | 2 |
| μ₀ | 4π × 10⁻⁷ T m A⁻¹; μ₀/2π = 2 × 10⁻⁷ | 5, 6 |
| `we-1` (site) | 5.0 A, 0.10 m: 1.0 × 10⁻⁵ T = 10 μT | 7 |
| Quick check (site) | 10 A, 0.20 m: 1.0 × 10⁻⁵ T | 8, 9 |
| Scaling | I × 3: B × 3; r × 3: B ÷ 3 | 9 |
| Site Q2 | 12 A, 3.0 × 10⁻⁵ T: r = 0.080 m = 8.0 cm | 10 |
| A1 | 6.0 A; 0.040 m: 3.0 × 10⁻⁵ T; 0.12 m: 1.0 × 10⁻⁵ T; crossed 3.3 × 10⁻⁶ T | 12, 13 |
| A2 | 0.050 m, 4.0 × 10⁻⁵ T: 10 A; crossed 1000 A | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 4π × 10⁻⁷ ÷ 2π = 2.0 × 10⁻⁷.
- 2 × 10⁻⁷ × 5.0 ÷ 0.050 = 2.0 × 10⁻⁵; ÷ 0.10 = 1.0 × 10⁻⁵; ÷ 0.20 = 5.0 × 10⁻⁶.
- 2 × 10⁻⁷ × 10 ÷ 0.10 = 2.0 × 10⁻⁵; ÷ 0.20 = 1.0 × 10⁻⁵.
- 2 × 10⁻⁷ × 12 ÷ 3.0 × 10⁻⁵ = 0.080.
- 2 × 10⁻⁷ × 6.0 ÷ 0.040 = 3.0 × 10⁻⁵; ÷ 0.12 = 1.0 × 10⁻⁵; 3.0 × 10⁻⁵ ÷ 9 = 3.3 × 10⁻⁶ (crossed).
- 0.050 × 4.0 × 10⁻⁵ ÷ 2 × 10⁻⁷ = 10; 5.0 × 4.0 × 10⁻⁵ ÷ 2 × 10⁻⁷ = 1000 (crossed).
- Finite wire (author note b): 1.0 m wire, 5.0 A: 9.8 μT at 0.10 m, 4.6 μT at 0.20 m.

## Memory aid check

- **"Charge: a sphere. Twice as far, a quarter. Wire: a circle. Twice as far, a half."** Meaning, as said in scene 11: a point charge's field spreads over a sphere (area ∝ r²), so E ∝ 1/r²; a wire's field wraps round circles (length ∝ r), so B ∝ 1/r. Assumptions checked: "wire" means a long straight wire at distances small compared with its length (stated in 5 and on the cards); "twice as far" means twice the perpendicular distance; the charge half recalls v04 only. Introduced after the cause (3) and the scaling (9).
- **"μ₀ over 2π is 2 × 10⁻⁷"** (the site hook's arithmetic half, adopted). True for the value 4π × 10⁻⁷ used in the syllabus. The site hook's grip-rule half ("thumb along the current") belongs to v24 and is not repeated, so no hand is described here.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,938 characters** (5,954 joined), 17 scenes. Characters per scene (1 to 17): 341, 529, 530, 308, 578, 276, 470, 139, 356, 549, 212, 271, 344, 236, 355, 369, 75. At 13.3 characters per second the speech is about 446 s; add about 16 s of holds and settling (the sensor slides in 2, the unrolling circles in 3, the ammeter and logger in 4, the symbol list in 5, the π strike in 6, the 3r circle in 9), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 548 s**, inside the owner's 5 to 10 minute target.

## Scene list and build ids

Lesson key `p-y11-fa3-v25` (route phys-y11-fa3-v25). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v25` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v25` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, measure-it, why-half, more-current, equation, shortcut, worked-example-bench, prediction-scaling, scaling, finding-distance, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v24's last frame continues into scene 1 (camera continue: the end-on wire and its circles carry over); 1 to 2 board change to the bench; 2 to 3 board change to the field diagram; 3 to 4 board change back to the bench; 4 to 5 clear change to the equation layout; 5 to 6 camera continue; 6 to 7 camera continue; 7 to 8 board change to the end-on wire; 8 to 9 camera continue; 9 to 10 clear change to the calculation layout; 10 to 11 fade; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v25-learning-review.md`, `science_check` = `checks/p-y11-fa3-v25-physics-check.md`.

## Assets

Checked first (3 Nov): `public/assets/physics/` holds the bench supply (`phys-y11-low-voltage-supply-v1.png`), the data logger (`phys-y11-data-logger-v1.png`, with sidecar), the retort stand and FA1 plates; no wire stand, field sensor or compass is delivered. Reused by name (uniform scaling only, never stretched):
- `phys-y11-low-voltage-supply-v1.png` (delivered; 2, 4).
- `phys-y11-data-logger-v1.png` (delivered; 2, 4, 7 thumbnail; its sidecar's screen rectangle carries the coded μT readout).
- `phys-y11-plotting-compass-v1.png` (requested in `phys-y11-fa2-v13.md`; not needed: v24's handoff frame shows no compasses).

New (requested below): `phys-y11-wire-card-stand-v1.png` (2, 4), `phys-y11-field-sensor-v1.png` (2, 4).

Considered, not used: a painted coil (the handoff coil is a coded HSC-style diagram; v26 requests the painted solenoid); iron filings (v24's field pattern; not needed for strength).

Coded: the end-on wire, dots and crosses, field circles, the unrolling bars, the sphere ghost, the cm scale, leads, the ammeter readout, the logger digits, the table, dimension lines, working, the handoff coil.

Kit gaps (for the next physics kit brief): **`CircleShare`**; **sensor slide** along a coded scale with a logger readout; **`DimensionLine`** with a crossable variant; v24's end-on wire and circles (if v24 does not specify them first).

## Codex asset brief (Year 11 Physics FA3 v25, field of a wire)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, numerals or brand marks, no people or hands, never stretched; no red or navy, FA3 root decision 1). Save to `public/assets/physics/`.

1. `phys-y11-wire-card-stand-v1.png`: a school "field around a straight wire" stand: a flat square of stiff white card (about 25 cm across) held level by a small clamp on a short grey metal rod, three-quarter view from slightly above with a top-left light; a thick straight bare copper wire passes vertically through a small hole in the centre of the card, extending well above and below it (about three times the card's width in total), with a small grey terminal clip at each end of the wire. The card surface is plain and empty (code draws the cm scale and the compasses or sensor on it). About 1600 px tall. Sidecar `phys-y11-wire-card-stand-v1.json`: the wire's top and bottom points, the hole centre, the card's four corners (for perspective placement of coded marks) and both clip points.
2. `phys-y11-field-sensor-v1.png`: a school magnetic field sensor: a slim grey plastic handle about the size of a pen, ending in a thin flat probe tip, with a short grey cable leaving the other end; side view, lying level, top-left light; no lights, labels or markings. About 1200 px wide. Sidecar `phys-y11-field-sensor-v1.json`: the probe tip point (the measuring spot) and the cable end point.

Acceptance: true transparency, no halo; no text, numerals, symbols or brand marks; no red or navy; correct proportions; not stretched. The plotting compass request in `phys-y11-fa2-v13.md` is unchanged.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: B = μ₀I/2πr for a long straight wire at distances small compared with its length, with r the perpendicular distance; μ₀ = 4π × 10⁻⁷ T m A⁻¹ and μ₀/2π = 2 × 10⁻⁷; B ∝ I and B ∝ 1/r; for a long straight wire the field times the circle's length 2πr equals μ₀I (Ampère's law, stated in words); a point charge's field falls as 1/r² because its lines spread over a sphere; a magnetic field sensor zeroed with the current off reads only the wire's field; Earth's surface field is about 50 μT; the illustrative readings are consistent with the equation for a long wire (author note b).
3. Confirm no direction rule is taught beyond the recalled phrase, no hand is drawn or described, and no solenoid or force on a current is taught.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON (the stacked fraction written inline, FA2 root decision 11) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v24.md`'s handoff scene 21 (aligned in Revision 2).
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Magnetic Field of a Wire (B = μ₀I/2πr) | Year 11 Physics

(Title length: 55 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson23.sa.html

Move twice as far from a charge and its field drops to a quarter. Move twice as far from a current-carrying wire and its field only halves. Why? Measure the field around a wire, see why it wraps round circles whose length grows with distance, learn what every symbol in B = μ₀I/2πr means, use the handy 2 × 10⁻⁷ shortcut, predict changes without a calculator and find the distance for a given field. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Calculate the strength of the magnetic field produced by a current-carrying wire using B = μ₀I/2πr" (ci6de98fee)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Magnetic fields and field lines (previous video). Next: The solenoid.

#Year11Physics #Physics #MagneticField #HSCScience

## Open decisions

- **1. Opening frame.** Resolved in Revision 2: the opening frame now carries v24's actual scene 21 frame; scene 1's first sentence already matched.
- **2. Ampère's idea (3).** Stated in words with a grey tag, because it is the cause of the 2πr and the cleanest answer to "why only half". If root prefers no named law, the sentence "found by Ampère" is cut (about 18 characters) and the grey tag reads "a result from a later course".
- **3. The bench (2, 4).** Measuring first makes the equation a prediction that is then confirmed (7). The first cut if the review finds the video crowded is the Earth's-field sentence in 2 (about 55 characters, kept as a screen chip).
- **4. Route refinement (root to record).** Question as above; start "Begin at v24's end-on wire with its circular field lines; recall E ∝ 1/r² for a point charge"; stop "Stop at calculating, scaling and rearranging B = μ₀I/2πr for a long straight wire; hand the coil to v26".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v24 at Year 11 entry; check that the unrolling circle makes "half, not a quarter" feel caused rather than stated; that μ₀ in plain words is enough; that the shortcut does not replace the syllabus form; that the attempts give nothing away), then the Codex physics check and error check.
- The sensor halving as it slides (2), the circle unrolling beside the quartering sphere (3) and the equation's 10 μT landing beside the logger's (7) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): the shortcut no longer calls μ₀/2π "exactly" 2 × 10⁻⁷. Scene 8 now says "Mu nought is very close to four pi times ten to the minus seven. Divide that by two pi. The pis cancel ... So mu nought over two pi is about two times ten to the minus seven", so the approximation sits on μ₀, where it belongs. The rows use "≈" with grey tag "measured value, very close to this"; the syllabus value and all rounded answers are unchanged. Author note d matches.
- Should fix 2 (both reviews, paired handoff check): the superseded assumed opening frame is replaced by v24's actual scene 21 frame (memory lines, the end-on wire with three plum circles, probe points r and 2r with unequal arrows, chips "twice the current?", "twice as far away?" and "how strong, in numbers?", and v24's Next chip). Scene 1's Visual now picks up v24's r and 2r probes; physics-check item 6 records the alignment. Scene 1's narration already follows v24's question.
- Narration count: 5,964 characters (build parser rule), about 550 s with the stated holds (10 characters longer than the reviewed 5,954; within the cap).
