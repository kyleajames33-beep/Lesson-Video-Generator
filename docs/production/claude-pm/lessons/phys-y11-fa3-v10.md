# Year 11 Physics FA3 V10 (Physics 2025, Year 11, Focus Area 3): What does a voltage really measure, and how does it tell you the energy each coulomb gains or loses? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v10`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (a 1.5 V cell and a 12 V car battery).

Narration 5,630 characters, 15 scenes, about 525 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: three syllabus points, fully taught without repeating v09; not padded.

Scope: tenth video of the Year 11 Physics (2025) Focus Area 3 route: the meaning of the volt (the change in potential energy per coulomb, V = ΔU/q; 1 V = 1 J C⁻¹), voltage as a difference between two places, a battery's voltage as energy per coulomb, why W = qV, and one rule linking W, ΔU and ΔKE (the work done by an outside force equals ΔU + ΔKE), applied to a charge that is pushed and also speeds up. Templates: `phys-y11-fa1-v22.md` (concept format, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions, section list and colour key from `phys-y11-fa3-v04.md` to `phys-y11-fa3-v06.md` and `phys-y11-fa3-v09.md` (Revision 1, final; v09's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson10.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 voltage is energy per charge, true or false, card 2 with `we-1` and its figure description, quick check, activity 1, odd one out, card 3 why W = qV and W = qEd agree, last check, match the pairs, independent practice Q1 to Q3, retrieve). `phys-y11-fa3-v09.md` read for the boundary: it derives W = qV from qEd across the full gap, uses the 250 V electron (site lesson 9 Q2, the same numbers as lesson 10's `we-1`), flips uphill and downhill for negative charges, and accounts for U turning into KE. Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 10 ("A volt is a joule with a price tag: joules PER COULOMB."; adapted, see "Memory aid check"). Route entry: `phys-y11-fa3-v10` in `../../phys-y11-video-route.json` (proposed; placeholder question replaced by v09's proposal, confirmed by root). Route start: "Start with Voltage, Work and Potential Energy. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply voltage, work and potential energy? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v11: How can I explain and apply electric current?" (this design proposes "How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?" for v11's chip; see open decision 1).

**Opening frame (v09's actual handoff, Revision 1 final, 3 Nov).** v09's scene 17 ends with its memory line small at the top; the coded plates with "200 V"; a proton (red "+", "+1e") and a particle with twice the charge (red "+", "+2e", labelled "twice the charge"), having crossed from the positive plate; their arrival bars "3.2 × 10⁻¹⁷ J" and "6.4 × 10⁻¹⁷ J"; both bars feeding one grey row "per coulomb: 200 J C⁻¹"; chips "what is a volt?" and "W, ΔU and ΔKE together?"; chip "Next: What does a voltage really measure, and how does it tell you the energy each coulomb gains or loses?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (every push is an amber "outside push" arrow with no source drawn, as v09); the cell and the car battery painted (apparatus); plates, charges, field lines, energy bars, the hill profile, the circuit in the handoff and working coded (abstract diagrams); one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v05 (F = qE), v07 (E = V/d) and v09 (electric potential energy as energy of position; W = qEd = qV across the gap; uphill and downhill; U lost equals KE gained) recalled in a phrase each; FA1 v26 to v28 (energy bars; work by an outside push stored as potential energy) recalled in a phrase.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (typeset symbols rendered inline, FA2 root decision 11):

- P25-FA3-G1-15 `ci82085d4c`: "Solve problems involving the work done when moving a charge in an electric field using the relationships between W, ΔU and ΔKE"
- P25-FA3-G1-16 `ci281b61d7`: "Analyse the relationships between voltage, potential energy difference and work when changing the position of a charge in a uniform electric field using V = ΔU/q"
- P25-FA3-G1-17 `ci156ac6c8`: "Solve problems relating to changes in position of charges in electric fields using W = qV"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v09's handoff (above); the hook (a 1.5 V cell and a 12 V battery: the same charge, the same energy?); the energy per coulomb from v09's two particles is the voltage, V = ΔU/q, and the volt (1 V = 1 J C⁻¹); voltage is between two points (height difference, using v09's hill; site misconception 2); a battery's voltage as energy per coulomb, the hook answered, voltage is not energy (site misconception 1); why ΔU = qV (q coulombs, V joules each), with v09's W = qV recalled in a phrase; one rule, W = ΔU + ΔKE, for the work done by an outside force, with v09's two cases as special cases (slow push; no outside force); a prediction and a worked example where the push also speeds the charge up; memory aid; two attempts. Stops at energy per coulomb between two points in a field and at a battery's terminals. Not taught again (v09 owns them): the derivation of qEd = qV, uphill and downhill for negative charges, speeds from W = qV, the 250 V electron (site `we-1`). Not taught: current and circuits (v11 on); the electronvolt (author note f); potential at a point with a zero reference.

## Decisions

- **Learner question (v09's proposal adopted, confirmed by root; route placeholder replaced).** "What does a voltage really measure, and how does it tell you the energy each coulomb gains or loses?" One causal question: the answer is that a volt is the change in potential energy per coulomb, so the energy for any charge is the charge times the voltage. Answer, built in order: hook and prediction (1); per coulomb is the volt (2); between two points (3); the batteries (4); why ΔU = qV (5); one rule for W, ΔU and ΔKE (6); a push that speeds the charge up (7, 8); memory aid (9).
- **The volt found from v09's frame, not announced (owner quality bar).** Scene 2 continues on v09's two arrival bars: **`PerCoulombDivider`** splits the +2e particle's 6.4 × 10⁻¹⁷ J bar into two halves, each level with the proton's 3.2 × 10⁻¹⁷ J bar; then the rows "3.2 × 10⁻¹⁷ ÷ 1.6 × 10⁻¹⁹ = 200 J C⁻¹" and "6.4 × 10⁻¹⁷ ÷ 3.2 × 10⁻¹⁹ = 200 J C⁻¹" turn v09's grey "per coulomb" row into ink and box it as V = ΔU/q. The plates' "200 V" label lights: 200 J for every coulomb. The cause of ΔU ∝ q is v05's F = qE (twice the charge, twice the force, over the same gap), said in one phrase.
- **Two places, not one (site misconception 2).** v09's `EnergyHill` returns as a side-on hill with a dimension line "50 m higher than the valley floor" beside the plates' "200 V: positive plate compared with negative plate"; the chip "the voltage at one point" takes a grey scribble cross after the hill. The narration says "a voltage always compares two points" and asks "between which two points?". It does not say a potential at a point is meaningless (author note b).
- **The batteries (hook answered, site misconception 1).** The painted cell and car battery with coded terminal signs; one coded coulomb tile passes through each, gaining a green slice of 1.5 J and 12 J; the readout "× 8". The chip "voltage is energy" takes a grey scribble cross; the row "voltage = energy per coulomb" boxed. A battery's voltage is treated as the energy given to each coulomb between its terminals (author note c).
- **Why ΔU = qV (`ci156ac6c8`), without re-deriving v09.** Rearranging V = ΔU/q gives ΔU = qV: q coulombs, each changing by V joules. One phrase recalls v09 ("the W equals q V you met last time"), with v09's row as a grey thumbnail tagged "last video". Site card 3 (qV = qEd) is not repeated.
- **One rule for W, ΔU and ΔKE (`ci82085d4c`; FA1 root decision 20 sign convention).** On FA1's energy bars (U green, KE blue, work hatched amber, total dashed; FA3 root decision 14): the work done by an outside force goes into potential energy and kinetic energy, **W = ΔU + ΔKE**. Two cases students already know drop out of it: a slow push (ΔKE = 0, so W = ΔU = qV); no outside force (W = 0, so ΔKE = −ΔU: the field's work, v09's W = ΔKE). The bars show W as a hatched block that splits into a green part and a blue part. "W" in this video always means the work done by the outside force; the field's own work is named in words when it appears (author note d).
- **Prediction 2 (3 s, scene 7): a push that speeds it up.** "An outside force pushes a charge across 500 V, and it arrives moving. Is the work more than q V, or exactly q V?" Chips "exactly qV?", "more than qV?". Answered in 8 (more: qV for the climb plus the kinetic energy).
- **Worked example (original; the site's `we-1` electron is already v09's worked example 2, so it is not repeated).** A +2.0 × 10⁻⁶ C charge, at rest at the negative plate, is pushed by an outside force to the positive plate across 500 V, and arrives with 4.0 × 10⁻⁴ J of kinetic energy. ΔU = qV = 1.0 × 10⁻³ J; W = ΔU + ΔKE = 1.4 × 10⁻³ J. Layout: task strip; equation strip (W = ΔU + ΔKE, with ΔU = qV); grouped givens (q; V; starts at rest; KE at the end); one step per cue. Velocity shown as a thin blue arrow (FA3 root decision 13).
- **Attempts (original, HSC style).** (A1, W, ΔU and ΔKE) "A charge of +4.0 × 10⁻⁶ C starts from rest at point P. An outside force moves it to point Q, where its electric potential energy is higher. The potential difference between P and Q is 150 V, and the outside force does 9.0 × 10⁻⁴ J of work on the charge. Only the outside force and the electric force act. (a) Calculate the change in the charge's electric potential energy. (b) Calculate the kinetic energy of the charge at Q. (3 marks)" Answer: increases by 6.0 × 10⁻⁴ J; 3.0 × 10⁻⁴ J. Crossed: "(b) 9.0 × 10⁻⁴ J (all the work became kinetic energy)". (A2, V = ΔU/q and W = qV) "A charge of +2.5 × 10⁻⁶ C is moved slowly from point X to point Y in an electric field, and its electric potential energy increases by 6.0 × 10⁻⁴ J. (a) Calculate the potential difference between X and Y. (b) A charge of +7.5 × 10⁻⁶ C is then moved slowly from X to Y. Calculate the work needed, and explain why the potential difference between X and Y is unchanged. (3 marks)" Answer: 240 V; 1.8 × 10⁻³ J; V is energy per coulomb, set by the two points. Crossed: "(b) V triples to 720 V".
- **Mistake scene:** none separate. "Voltage is energy" (4; site misconception 1); "the voltage at one point" (3; site misconception 2); "all the work becomes kinetic energy" (7, 8, feedback 1 crossed); "voltage depends on the charge moved" (2, feedback 2 crossed).
- **Memory aid:** "Volts are joules per coulomb. Joules = coulombs × volts." (adapted from the site hook; see "Memory aid check").
- **Handoff (route next; proposal for v11's question).** Board change: the painted 1.5 V cell returns; coded wires join its terminals to a coded lamp symbol, making one loop; small navy "−" dots drift slowly round the wire; a dashed counting gate across the wire with a readout "coulombs past here each second?"; two dashed arrows on the wire pointing opposite ways, each with a "?"; chips "how fast?" and "which way?"; then "Next: How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?". This is the frame v11 opens on (`phys-y11-fa3-v11.md` adopts it).
- **Site sources used:** intro (a 9 V battery gives 9 J to every coulomb: 4, as the cell and car battery); hook (12 V and 1.5 V: 1, 4); warm-up (what "9 volts" measures: 1, 4); intentions (Know 1 to 3: 2, 5; Understand 1 and 3: 3, 4, 2; Understand 2, qV and qEd: v09, recalled in 5; Can Do 1 to 3: 5, 8, A1, A2, 6); key terms (voltage, volt, potential energy difference: 2, 5; electronvolt: not used, author note f); misconceptions 1 and 2 (4, 3); card 1 (2, 3, 5); true or false (2); card 2, `we-1` and its figure (v09's worked example 2; not repeated); quick check (2.0 C × 6.0 V = 12 J: the idea of 5); activity 1 (doubling the charge doubles the work: 2, 5); odd one out (D, W = V/q: key note 2); card 3 and last check (v09; recalled in 5); match the pairs (key note 1); Q1 (the work equals the kinetic energy gained and the potential energy lost: 6); Q2 (A2 structure, new numbers); Q3 (v09).
- **Site corrections (quoted from site lesson 10, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Activity 1 and Q1/Q2 dot-point lines: "Dot point: Solve problems involving the work done when moving a charge in an electric field using the relationships between W, q and V". The 2025 syllabus reads "using the relationships between W, ΔU and ΔKE". Suggest quoting the point exactly; the lesson then needs at least one problem in which ΔU and ΔKE both appear (for example a push that also speeds the charge up).
  2. Card 3 and Q3 dot-point lines: "Dot point: Analyse the relationships between voltage, potential energy difference and work when changing the position of a charge in a uniform electric field using W = qV". The 2025 syllabus ends "using V = ΔU/q". Suggest quoting the point exactly and showing V = ΔU/q in card 1 as the definition.
  3. Card 1: "The voltage (or potential difference) between two points is defined as the work done per unit charge in moving a charge between them". This holds only for work done against the field with no change in kinetic energy; the syllabus defines it through the potential energy difference, V = ΔU/q. Suggest: "the change in electric potential energy per unit charge between them, V = ΔU/q; when a charge is moved slowly, this equals the work done per unit charge".
  4. Card 2's worked example (an electron accelerated through 250 V, 4.0 × 10⁻¹⁷ J) repeats lesson 9's Q2 numbers exactly. Suggest a different example in one of the two lessons (owner record; v09 and v10 avoid the repeat).
  - Checked and correct: `we-1` (4.0 × 10⁻¹⁷ J); quick check (B, 12 J); odd one out (D); Q1 (8.0 × 10⁻¹⁷ J); Q2 (60 V, 0.12 J); Q3 model answer; misconceptions; the figure description.
- **Cause chain taught, in order:** (1) the same charge, the same energy from both batteries? (1); (2) twice the charge gains twice the energy (twice the force over the same gap), but the energy per coulomb is fixed: it belongs to the two places, and it is the voltage (2); (3) a voltage compares two points (3); (4) a battery gives each coulomb its voltage in joules, so 12 V gives eight times the energy of 1.5 V (4); (5) q coulombs change by qV (5); (6) an outside force's work goes into potential and kinetic energy: W = ΔU + ΔKE, with the slow push and no outside force as special cases (6); (7) a push that also speeds the charge up does more than qV of work (7, 8); (8) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** v05 (F = qE), v07 (the uniform field between plates), v09 (electric potential energy; W = qEd = qV across the gap; released charges turn U into KE; the energy bars and hill), FA1 v26 to v28 (work by an outside push stored as potential energy; energy bars), each recalled in a phrase; Stage 5 Mathematics (scientific notation, rearranging).
- **Learner-visible vocabulary (plain meaning at first use):** potential difference, voltage, V (the change in potential energy for each coulomb moved between two places, 2); volt, V (one joule per coulomb, 2); delta, Δ (the change in, 2, as FA1); outside force (anything pushing the charge apart from the field, 6, as v09's "outside push"); "slowly" (so it doesn't speed up, 5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v07's coded plates and `UniformField`; v09's **`EnergyBar`** (green U, blue KE, hatched amber work, dashed total) and **`EnergyHill`**; **`PerCoulombDivider`** (new: an energy bar that splits into equal per-charge slices with a "per coulomb" readout); v05's **coulomb tile** (carried through a battery, gaining a green slice); **work-split bar** (new: a hatched amber W block that divides into a green ΔU part and a blue ΔKE part); `AlignedAlgebra` (V = ΔU/q to ΔU = qV; W = ΔU + ΔKE); the **handoff loop** (coded cell-and-lamp loop with drifting navy dots and a dashed counting gate); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v09 and FA3 root decisions 13 and 14 (positive red "+", negative and electrons navy "−", signs always printed; field lines teal; forces and the outside push amber with a dark ink outline; velocity a thin blue arrow; electric potential energy green, kinetic energy blue, work hatched amber, total dashed); the hill warm grey; crossed items grey scribble; the two battery plates in neutral greys with no red or navy.
- **Board layout (constant):** heading top-left; the plates (or the batteries) in the left 60 per cent with energy bars beside them; the equation, givens and working in the right column.
- **No human figures.** None; the push is an arrow.
- **Author notes (not learner copy):**
  (a) Scene 2 uses v09's numbers: 1.6 × 10⁻¹⁹ × 200 = 3.2 × 10⁻¹⁷ J; 3.2 × 10⁻¹⁹ × 200 = 6.4 × 10⁻¹⁷ J; each ÷ its charge = 200 J C⁻¹.
  (b) Potential at a point exists once a zero is chosen (beyond Year 11). The narration says a voltage "always compares two points", which is true for a potential difference, and does not claim a potential is meaningless.
  (c) A real battery's terminal voltage is a little less than its emf when current flows (internal resistance). "The energy it gives each coulomb" is the Year 11 model; emf is not named.
  (d) Sign convention (FA1 root decision 20): W is the work done by the outside force; the field's work is W_field = −ΔU. Work-energy theorem: W + W_field = ΔKE, so W = ΔU + ΔKE. With no outside force, ΔKE = W_field = −ΔU (v09's W = ΔKE). Gravity is neglected (stated in A1 as "only the outside force and the electric force act").
  (e) Scene 5's stacked tiles (3 C × 200 V = 600 J) and the worked example's +2.0 μC charge pushed across 500 V are teaching set-ups; no mass is needed because only energies are asked.
  (f) The electronvolt (site key term) is not in the 2025 point; not used. If root wants it, a grey tag in 2 ("so 1 eV = 1.6 × 10⁻¹⁹ J") is length-neutral.
  (g) Pronunciations: "delta U", "delta K E"; "q V" letter by letter.

Main question: *A 1.5 volt cell and a 12 volt battery each push the same charge. What does a voltage really measure, and how does it tell you the energy each coulomb gains or loses?*
Entry knowledge (v05 F = qE; v07 parallel plates; v09 electric potential energy and W = qV; FA1 work and energy bars).
Stops after: voltage as energy per coulomb between two places; V = ΔU/q, the volt and ΔU = qV; W = ΔU + ΔKE with its two special cases; a push that speeds a charge up. No current, no circuits, no electronvolt; v09's derivations and electron example not repeated.
Handoff: v11, current and its direction.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v09.

### 1. hook (the same charge, the same energy?)
> Last time, a proton and a particle with twice its charge crossed the same two hundred volts. The bigger charge gained twice the energy, but the energy for each coulomb came out the same. Hold on to that. Now here's a one point five volt cell, and a twelve volt car battery. Send the same amount of charge through each one. Does that charge get the same energy from both, or more from the twelve volt **battery**?

Visual: opens on v09's last frame (see "Opening frame"). The "Next" chip becomes the heading: "What does a voltage measure?"; the memory line fades. On "the energy for each coulomb" the grey "per coulomb: 200 J C⁻¹" row pulses; the plates, particles and bars slide small to the upper left. On "one point five volt cell" the painted cell (`phys-y11-aa-cell-v1.png`) enters at centre left with a coded label "1.5 V" and terminal signs; on "twelve volt car battery" the painted car battery (`phys-y11-car-battery-v1.png`) beside it, label "12 V". On "the same amount of charge" one coulomb tile sits above each. On "battery" chips "the same energy?" and "more from 12 V?" and a 3-second countdown ring.

### 2. energy per coulomb: the volt
> To answer that, back to the plates. Twice the charge feels twice the force, over the same gap, so it gains twice the energy. Split the bigger bar in two, and each half matches the proton's. Now divide each energy by its charge. Both give two hundred joules for every coulomb. That number doesn't depend on the charge at all. It belongs to the two plates. It's called the potential difference, or voltage: the change in potential energy for each coulomb moved between two places. So V equals delta U over q, where delta means the change in. And one joule per coulomb is one **volt**.

Visual: board change back to v09's plates at full size, the two arrival bars at the right (each crossing changes U by that amount; label "energy gained crossing the gap"). On "twice the force" the +2e particle's amber "qE" arrow is shown twice the proton's. On "Split the bigger bar" `PerCoulombDivider` splits the 6.4 × 10⁻¹⁷ J bar into two halves, each level with the proton's 3.2 × 10⁻¹⁷ J bar (a level line across). On "divide each energy by its charge" rows, one per cue: "3.2 × 10⁻¹⁷ J ÷ 1.6 × 10⁻¹⁹ C = 200 J C⁻¹"; "6.4 × 10⁻¹⁷ J ÷ 3.2 × 10⁻¹⁹ C = 200 J C⁻¹". On "potential difference, or voltage" the label "potential difference, voltage: V" on a dimension line from the negative plate to the positive plate (gloss "the change in potential energy for each coulomb moved between two places"). On "V equals delta U over q" the boxed row "V = ΔU/q" (syllabus form; gloss "Δ: the change in"). On "volt" the row "1 V = 1 J C⁻¹" and the plates' "200 V" label glows.

### 3. always between two points
> Notice that the voltage is between two places: one plate and the other. It's like a difference in height, on last video's hill. A hilltop isn't simply fifty metres high. It's fifty metres higher than the valley floor. In the same way, a voltage always compares two points. So whenever you see a voltage, ask: between which two **points**?

Visual: v09's `EnergyHill` slides in beside the plates (warm grey; valley floor and hilltop marked, dimension line "50 m higher than the valley floor"). On "In the same way" the plates' dimension line relabels "200 V: positive plate compared with negative plate"; both dimension lines pulse together. On "points" a chip "the voltage at one point" fades in and takes a grey scribble cross; the row "voltage: between two points" boxed.

### 4. the batteries
> Now the batteries. A battery's voltage is the energy it gives each coulomb that passes through it, from one terminal to the other. So the one point five volt cell gives every coulomb one point five joules. The twelve volt battery gives every coulomb twelve joules. Same charge, eight times the energy. But notice, a voltage isn't an energy. It's energy per coulomb. The total energy depends on how many coulombs go **through**.

Visual: board change to the two painted batteries. On "passes through it" a coulomb tile enters each battery at its negative terminal and leaves at its positive terminal, gaining a green slice: "1.5 J" from the cell, "12 J" from the car battery; on "eight times" the readout "× 8" between them; the scene 1 chip "more from 12 V?" glows and "the same energy?" takes a grey scribble cross. On "isn't an energy" a chip "voltage is energy" takes a grey scribble cross; on "energy per coulomb" the row "voltage = energy per coulomb" boxed. On "how many coulombs" three tiles queue at the car battery's terminal, each gaining 12 J (readout "3 C: 36 J").

### 5. why delta U equals q V
> That gives the energy for any charge. If each coulomb's potential energy changes by V joules, then q coulombs change by q times V. So delta U equals q V. That's why the W equals q V you met last time works: when a charge is moved slowly, so it doesn't speed up, all the work goes into potential energy. Charge in coulombs, voltage in volts, and the energy comes out in **joules**.

Visual: board change back to the plates. `AlignedAlgebra` at the right: "V = ΔU/q" rearranges to "ΔU = qV", boxed. On "q coulombs" three coulomb tiles each gain a 200 J slice that stack into one bar "3 C × 200 V = 600 J" (tag "teaching values"). On "the W equals q V you met last time" a small grey thumbnail of v09's "W = qEd = qV" row (tag "last video"). On "moved slowly" an amber "outside push" lifts a red "+" steadily; a hatched amber work bar and a green ΔU bar grow to the same height; the blue KE bar stays at zero; row "slow move: W = ΔU = qV". On "joules" unit tags "C", "V", "J".

### 6. one rule for W, delta U and delta K E
> But what if the charge doesn't move slowly? Here's the one rule that ties it all together. The work done by an outside force goes into two places: potential energy, and kinetic energy. W equals delta U plus delta K E. Push slowly, and there's no kinetic energy change, so the work equals delta U. Take the outside force away, and W is zero. Then the kinetic energy rises by exactly what the potential energy loses, just as you saw last **time**.

Visual: camera continue. The boxed rule writes at the right: "W = ΔU + ΔKE" (gloss "W: work done by the outside force"). Work-split bar: a hatched amber W block divides into a green ΔU part and a blue ΔKE part. On "Push slowly" the blue part shrinks to zero and the green part fills the block; row "slow: ΔKE = 0, so W = ΔU". On "Take the outside force away" the amber push arrow fades and the W block empties to "W = 0"; a red "+" released at the positive plate crosses towards the negative plate, green draining into blue, the dashed total level; row "no outside force: ΔKE = −ΔU" (gloss "−ΔU: the loss in potential energy"; tag "last video: the field's work = ΔKE").

### 7. prediction: pushed and speeding up
> Now a mix of both. An outside force pushes a positive charge from the negative plate up to the positive plate, across five hundred volts. It starts at rest, but it arrives moving. Is the work done more than q V, or exactly q **V**?

Visual: board change: plates labelled "500 V"; a red "+" at rest at the negative plate; an amber "outside push" arrow longer than the amber "qE" arrow; the charge climbs and arrives at the positive plate with a thin blue velocity arrow. On "V" chips "exactly qV?" and "more than qV?" and a 3-second countdown ring.

### 8. worked example: the work for a push that speeds it up
> More. Some of the work raises the potential energy by q V, and the rest becomes kinetic energy. Task: a charge of plus two point oh times ten to the minus six coulombs starts at rest, and arrives with four point oh times ten to the minus four joules of kinetic energy. Find the work done by the outside force. The equation: W equals delta U plus delta K E. The givens: q is two point oh times ten to the minus six coulombs, V is five hundred volts, and delta K E is four point oh times ten to the minus four joules. First, delta U equals q V: one point oh times ten to the minus three joules. Then add the kinetic energy: W is one point four times ten to the minus three **joules**.

Visual: on "More" the chip "more than qV?" glows and "exactly qV?" takes a grey scribble cross; the work-split bar shows a green part with a blue part on top. On "Task" clear change to the calculation layout, the plates small at the left. Task strip: "Find the work done by the outside force". Equation strip: "W = ΔU + ΔKE, with ΔU = qV". Givens group: "q = +2.0 × 10⁻⁶ C"; "V = 500 V (moved towards the positive plate)"; "starts at rest; ΔKE = 4.0 × 10⁻⁴ J". Rows, one per cue: "ΔU = qV = 2.0 × 10⁻⁶ × 500 = 1.0 × 10⁻³ J"; "W = 1.0 × 10⁻³ + 4.0 × 10⁻⁴"; on "joules" "= 1.4 × 10⁻³ J", boxed, with the split bar labelled "1.0 × 10⁻³ J (U)" and "4.0 × 10⁻⁴ J (KE)".

### 9. memory aid
> To remember it: volts are joules per coulomb. So the joules are the coulombs times the **volts**.

Visual: the handwritten line writes large: "Volts are joules per coulomb. Joules = coulombs × volts." On "joules per coulomb" the level slice from scene 2 pulses; on "coulombs times the volts" the three stacked tiles from scene 5. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A charge of plus four point oh times ten to the minus six coulombs starts from rest at point P. An outside force moves it to point Q, where its potential energy is higher. The potential difference between P and Q is one hundred and fifty volts, and the outside force does nine point oh times ten to the minus four joules of work. Calculate the change in the charge's potential energy. Then calculate its kinetic energy at Q. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A charge of +4.0 × 10⁻⁶ C starts from rest at point P. An outside force moves it to point Q, where its electric potential energy is higher. The potential difference between P and Q is 150 V, and the outside force does 9.0 × 10⁻⁴ J of work on the charge. Only the outside force and the electric force act. (a) Calculate the change in the charge's electric potential energy. (b) Calculate the kinetic energy of the charge at Q. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Delta U equals q V: four point oh times ten to the minus six, times one hundred and fifty, is an increase of six point oh times ten to the minus four **joules**. Then W equals delta U plus delta K E, so the kinetic energy is nine point oh minus six point oh, which is three point oh times ten to the minus four **joules**. Saying all the work became kinetic energy forgets the **climb**.

Visual: card shrinks to the top; "from rest", "higher" and "9.0 × 10⁻⁴ J" underlined. Work-split bar at the left: hatched W block "9.0 × 10⁻⁴ J". Rows: "ΔU = qV = 4.0 × 10⁻⁶ × 150"; on the first "joules" "(a) ΔU = +6.0 × 10⁻⁴ J (increase)", boxed, and the green part fills two thirds of the block; "ΔKE = W − ΔU = 9.0 × 10⁻⁴ − 6.0 × 10⁻⁴"; on the second "joules" "(b) KE = 3.0 × 10⁻⁴ J", boxed, the blue part filling the rest. On "climb" a chip "(b) 9.0 × 10⁻⁴ J (all the work became kinetic energy)" fades in and takes a grey scribble cross. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A charge of plus two point five times ten to the minus six coulombs is moved slowly from point X to point Y in an electric field, and its electric potential energy increases by six point oh times ten to the minus four joules. Calculate the potential difference between X and Y. Then a charge of plus seven point five times ten to the minus six coulombs makes the same move, slowly. Calculate the work needed, and explain why the potential difference is unchanged. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A charge of +2.5 × 10⁻⁶ C is moved slowly from point X to point Y in an electric field, and its electric potential energy increases by 6.0 × 10⁻⁴ J. (a) Calculate the potential difference between X and Y. (b) A charge of +7.5 × 10⁻⁶ C is then moved slowly from X to Y. Calculate the work needed, and explain why the potential difference between X and Y is unchanged. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> V equals delta U over q, and dividing gives two hundred and forty **volts**. Three times the charge needs three times the work: W equals q V gives one point eight times ten to the minus three **joules**. The voltage stays two hundred and forty volts, because it's energy per coulomb, set by the two points, not by the charge. Tripling the voltage too is the classic **slip**.

Visual: card shrinks to the top; "slowly", "6.0 × 10⁻⁴ J" and "+7.5 × 10⁻⁶ C" underlined. Rows: "V = ΔU/q = 6.0 × 10⁻⁴ ÷ 2.5 × 10⁻⁶"; on "volts" "(a) V = 240 V", boxed; "W = qV = 7.5 × 10⁻⁶ × 240"; on "joules" "(b) W = 1.8 × 10⁻³ J", boxed; then "V unchanged: energy per coulomb, set by X and Y", boxed. On "slip" a chip "(b) V triples to 720 V" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. handoff
> So a voltage tells you the energy each coulomb gains or loses between two points. In a battery, every coulomb that passes through picks up that energy. But in a circuit, charge doesn't cross one coulomb at a time. It flows, steadily. So how do we measure how fast it flows? And which way is it really **going**?

Visual: board change: the memory line small at the top. The painted 1.5 V cell returns at the left; on "in a circuit" coded wires join its terminals to a coded lamp symbol, making one loop; on "It flows" small navy "−" dots drift slowly round the wire. On "how fast" a dashed counting gate across the wire with the readout "coulombs past here each second?". On "which way" two dashed arrows on the wire pointing opposite ways, each with a "?". Chips write: "how fast?" and "which way?". On "going" the chip "Next: How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Potential difference (voltage): the change in electric potential energy for each coulomb moved between two points, V = ΔU/q. 1 V = 1 J C⁻¹. A voltage always compares two points.
2. So ΔU = qV. Moved slowly, all the work goes into potential energy: W = qV.
3. A battery's voltage is the energy it gives each coulomb passing through it. Voltage is not energy: the energy also depends on the charge.
4. Work by an outside force: W = ΔU + ΔKE. Slow move: W = ΔU. No outside force: ΔKE = −ΔU (the kinetic energy gained equals the potential energy lost).
5. The voltage between two points does not depend on the charge moved; the energy does.

Memory aid (large, on the notes screen): *Volts are joules per coulomb. Joules = coulombs × volts.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why twice the charge gains twice the energy: twice the force over the same gap (2). Why the energy per coulomb is fixed: it depends only on the field and the two places (2). Why a voltage needs two points: it is a difference, like a height difference (3). Why 12 V gives eight times the energy of 1.5 V: each coulomb gets 12 J instead of 1.5 J (4). Why ΔU = qV: q coulombs each change by V joules (5). Why W = ΔU + ΔKE: the outside force's work has to go somewhere, into position energy or motion energy (6). Why a push that speeds the charge up does more than qV: the extra becomes kinetic energy (8).
- **Misconceptions addressed:** voltage is energy (4; site misconception 1); voltage at one point (3; site misconception 2); all the work becomes kinetic energy (7, 8, feedback 1 crossed); voltage depends on the charge moved (2, feedback 2 crossed).
- **One idea at a time:** per coulomb (2), two points (3), the batteries (4), ΔU = qV (5), the rule (6), a mixed case (7, 8).
- **Video makes it easier:** the student sees the +2e bar split into two halves level with the proton's (2), two dimension lines pulse together on a hill and the plates (3), one coulomb gain 1.5 J or 12 J through two batteries (4), three 200 J slices stack (5), and one hatched work block divide into green and blue parts in every case (6, 8, feedback 1).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("starts from rest"; "potential energy is higher"; "only the outside force and the electric force act"; "moved slowly"; both charges; the energy increase), nothing answer-bearing. One crossed mistake each; feedback about 29 s and 28 s.
- **Avoided double teaching:** v09's qEd = qV, uphill and downhill for electrons, speeds and the 250 V electron are not repeated (a grey thumbnail and one phrase in 5; one phrase in 6); v05's F = qE in a phrase (2); FA1's energy bars reused.
- **Syllabus coverage:** `ci281b61d7`: voltage, potential energy difference and work related in a uniform field with V = ΔU/q (2, 3, 5, A2); `ci156ac6c8`: problems with W = qV (5, 8, A1 (a), A2); `ci82085d4c`: problems using the relationships between W, ΔU and ΔKE (6, 7, 8, A1).
- **Out of scope by design:** current and circuits (v11 on); the electronvolt (author note f); potential at a point; v09's content listed above.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A charge of +4.0 × 10⁻⁶ C starts from rest at point P. An outside force moves it to point Q, where its electric potential energy is higher. The potential difference between P and Q is 150 V, and the outside force does 9.0 × 10⁻⁴ J of work on the charge. Only the outside force and the electric force act. (a) Calculate the change in the charge's electric potential energy. (b) Calculate the kinetic energy of the charge at Q."
Model answer: (a) ΔU = qV = (4.0 × 10⁻⁶)(150) = 6.0 × 10⁻⁴ J, an increase. (b) The outside force's work goes into potential and kinetic energy: W = ΔU + ΔKE, so ΔKE = 9.0 × 10⁻⁴ − 6.0 × 10⁻⁴ = 3.0 × 10⁻⁴ J. It started from rest, so KE at Q = 3.0 × 10⁻⁴ J. Classic mistake (crossed): "(b) 9.0 × 10⁻⁴ J (all the work became kinetic energy)".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "A charge of +2.5 × 10⁻⁶ C is moved slowly from point X to point Y in an electric field, and its electric potential energy increases by 6.0 × 10⁻⁴ J. (a) Calculate the potential difference between X and Y. (b) A charge of +7.5 × 10⁻⁶ C is then moved slowly from X to Y. Calculate the work needed, and explain why the potential difference between X and Y is unchanged."
Model answer: (a) V = ΔU/q = 6.0 × 10⁻⁴ ÷ 2.5 × 10⁻⁶ = 240 V. (b) Moved slowly, so W = ΔU = qV = (7.5 × 10⁻⁶)(240) = 1.8 × 10⁻³ J. The potential difference is still 240 V: it is the change in potential energy per coulomb, set by the field and the positions of X and Y, not by the charge moved; three times the charge needs three times the work. Classic mistake (crossed): "(b) V triples to 720 V".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| v09's frame | 200 V; +1e: 3.2 × 10⁻¹⁷ J; +2e: 6.4 × 10⁻¹⁷ J; 200 J C⁻¹ | 1, 2, 3 |
| Hook batteries | 1.5 V and 12 V; 1.5 J and 12 J per coulomb; × 8; 3 C: 36 J | 1, 4 |
| Stacked tiles | 3 C × 200 V = 600 J (teaching values) | 5, 9 |
| Hill | 50 m higher than the valley floor | 3 |
| Worked example | +2.0 × 10⁻⁶ C; 500 V; from rest; ΔKE = 4.0 × 10⁻⁴ J; ΔU = 1.0 × 10⁻³ J; W = 1.4 × 10⁻³ J | 7, 8 |
| A1 | +4.0 × 10⁻⁶ C; 150 V; W = 9.0 × 10⁻⁴ J; ΔU = +6.0 × 10⁻⁴ J; KE = 3.0 × 10⁻⁴ J; crossed 9.0 × 10⁻⁴ J | 10, 11 |
| A2 | +2.5 × 10⁻⁶ C; ΔU = 6.0 × 10⁻⁴ J; V = 240 V; +7.5 × 10⁻⁶ C; W = 1.8 × 10⁻³ J; crossed 720 V | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.2 × 10⁻¹⁷ ÷ 1.6 × 10⁻¹⁹ = 200; 6.4 × 10⁻¹⁷ ÷ 3.2 × 10⁻¹⁹ = 200.
- 12 ÷ 1.5 = 8; 3 × 12 = 36; 3 × 200 = 600.
- 2.0 × 10⁻⁶ × 500 = 1.0 × 10⁻³ J; 1.0 × 10⁻³ + 4.0 × 10⁻⁴ = 1.4 × 10⁻³ J.
- 4.0 × 10⁻⁶ × 150 = 6.0 × 10⁻⁴ J; 9.0 × 10⁻⁴ − 6.0 × 10⁻⁴ = 3.0 × 10⁻⁴ J.
- 6.0 × 10⁻⁴ ÷ 2.5 × 10⁻⁶ = 240 V; 7.5 × 10⁻⁶ × 240 = 1.8 × 10⁻³ J; 3 × 240 = 720 (crossed).

## Memory aid check

- **"Volts are joules per coulomb. Joules = coulombs × volts."** Adapted from the site hook ("A volt is a joule with a price tag: joules PER COULOMB."); the price-tag image is dropped because it would add a second analogy on top of the height difference in 3. Meaning, as said in scene 9: one volt is one joule of potential energy change per coulomb, so the potential energy change is the charge times the voltage (ΔU = qV). Assumptions checked: "joules" means the change in potential energy (equal to the work only for a slow move; scene 6 and A1 show a case where it is not); the voltage is between the two points the charge moves between; for a negative charge the size is used and the direction of the change is stated in words (v09). Introduced after V = ΔU/q (2) and ΔU = qV (5).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,630 characters** (5,644 joined), 15 scenes. Characters per scene (1 to 15): 408, 578, 334, 423, 376, 441, 227, 678, 93, 457, 375, 495, 363, 307, 75. At 13.3 characters per second the speech is about 423 s; add about 20 s of holds and settling (the bar split in 2, the hill in 3, the battery tiles in 4, the stacked slices in 5, the work-split bar in 6 and 8, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 525 s**, inside the owner's 5 to 10 minute target. Feedback about 29 s and 28 s.

## Scene list and build ids

Lesson key `p-y11-fa3-v10` (route phys-y11-fa3-v10). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v10` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v10` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, the-volt, two-points, batteries, delta-u-equals-qv, one-rule, prediction, worked-example, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v09's last frame continues into scene 1 (camera continue: the plates and bars shrink to a corner); 1 to 2 board change back to the plates; 2 to 3 camera continue (the hill slides in); 3 to 4 board change to the batteries; 4 to 5 board change to the plates; 5 to 6 camera continue; 6 to 7 board change (500 V plates); 7 to 8 camera continue, then clear change to the calculation layout at "Task"; 8 to 9 fade; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v10-learning-review.md`, `science_check` = `checks/p-y11-fa3-v10-physics-check.md`.

## Assets

Reused: none painted. Coded parts reused from v05 (coulomb tile), v07 (plates, `UniformField`) and v09 (`EnergyBar`, `EnergyHill`, the handoff plates and bars).

New (requested below): `phys-y11-aa-cell-v1.png` (1, 4, 14) and `phys-y11-car-battery-v1.png` (1, 4). The cell is reused in v11 (the loop).

Checked first (3 Nov): `public/assets/physics/` has `phys-y11-low-voltage-supply-v1.png` (a bench supply with a red switch, one knob and red and black terminals; a lab instrument, not an everyday battery, so not used for the hook; v12 uses it); no cells or batteries. The Chemistry `l9HookBattery.png` is a glowing icon in a different style, not suitable. No FA3 plates are delivered yet.

Coded: plates, charges, field lines, force and push arrows, velocity arrow, energy bars and the split work block, the per-charge slices, the hill, the circuit loop, counting gate and lamp symbol in the handoff, working.

Kit gaps (for the next physics kit brief): `PerCoulombDivider`, the work-split bar, the handoff loop with drifting dots and a counting gate (v11 needs it as a kit part); lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v10, cell and car battery)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-aa-cell-v1.png`: a single AA-size dry cell lying horizontally, three-quarter view from slightly above: a plain matte silver-grey metal casing with a pale cream band round the middle (no brand, no text, no printed "+" or "−"), the raised button terminal at the right and the flat terminal at the left. About 1400 px wide. Code adds "1.5 V" and the terminal signs.
2. `phys-y11-car-battery-v1.png`: a 12 V car battery, three-quarter view from slightly above: a dark charcoal plastic case with a lighter grey lid, two lead-grey cylindrical posts on top near the back corners (no coloured caps, no text, no symbols, no labels), a moulded carry handle folded flat. About 1400 px wide, drawn so that at the same scale on screen it reads much larger than the cell.

Acceptance: true transparency, no halo; no text, numerals or printed signs anywhere; nothing red or navy (code adds the signs); not stretched.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: V = ΔU/q; 1 V = 1 J C⁻¹; the energy per coulomb between two places does not depend on the charge moved; a potential difference compares two points; a battery gives each coulomb passing through it energy equal to its voltage (Year 11 model, author note c); ΔU = qV; for a slow move W = ΔU; the work done by an outside force is W = ΔU + ΔKE; with no outside force, ΔKE = −ΔU; a push that also speeds a charge up does more work than qV.
3. Confirm no current, circuit calculation or electronvolt appears, and that v09's derivation of qEd = qV, its 250 V electron and its speed calculations are not repeated.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the three syllabus quotes match the syllabus JSON exactly (symbols typeset inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v09.md` scene 17.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: What Is a Volt? Voltage, Work and Potential Energy | Year 11 Physics

(Title length: 68 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson10.sa.html

A 1.5 volt cell and a 12 volt car battery: send the same charge through each, and does it get the same energy? Find out what a volt really measures by splitting a charge's energy into equal slices for each coulomb. See why a voltage always compares two points, why a battery's voltage is energy per coulomb rather than energy, and how one rule, W = ΔU + ΔKE, links work, potential energy and kinetic energy, even when a push makes a charge speed up. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving the work done when moving a charge in an electric field using the relationships between W, ΔU and ΔKE" (ci82085d4c)
"Analyse the relationships between voltage, potential energy difference and work when changing the position of a charge in a uniform electric field using V = ΔU/q" (ci281b61d7)
"Solve problems relating to changes in position of charges in electric fields using W = qV" (ci156ac6c8)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electric potential energy and work (previous video). Next: Electric current.

#Year11Physics #Physics #Voltage #HSCScience

## Open decisions

- **1. v11's question (proposal).** The handoff chip uses "How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?" for phys-y11-fa3-v11 (route placeholder "How can I explain and apply electric current?"). It covers both v11 points (`ci9e13ac7f` I = q/t; `cibb4a6f3a` conventional current). `phys-y11-fa3-v11.md` adopts it.
- **2. W = ΔU + ΔKE as the stated rule.** The syllabus names "the relationships between W, ΔU and ΔKE" without a form. This design states one rule for the work done by an outside force, consistent with FA1 root decision 20 and v09's W = ΔKE (the field's work, no outside force). Root to confirm the form, and that "W" in later FA3 videos means the outside force's work unless named otherwise.
- **3. Route refinement (root to record).** Question as above (root confirmed); start "Begin at v09's 200 V plates with the +1e and +2e particles and the per-coulomb row; recall F = qE, W = qV and the energy bars"; stop "Stop at voltage as energy per coulomb between two points: V = ΔU/q, the volt, ΔU = qV, W = ΔU + ΔKE; hand current to v11".
- **4. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v09 at Year 11 entry; check that splitting v09's bars makes "energy per coulomb" feel found rather than defined; that the hill settles "two points" without implying a potential is meaningless; that W = ΔU + ΔKE reads as one rule containing v09's two cases, not as a new formula to memorise; that the prediction in 7 lands before the worked example; that nothing from v09 is re-taught; that the attempts give nothing away), then the Codex physics check and error check.
- The bar splitting into halves level with the proton's (2), the 1.5 J and 12 J slices from the two batteries (4), the stacked slices (5) and the work block dividing into green and blue (6, 8, feedback 1) carry the explanation; judge them at playback speed in the voiced preview.
