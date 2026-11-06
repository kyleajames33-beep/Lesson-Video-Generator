# Year 12 Physics M6 V10: Faraday's law. What changes create an induced emf? (design)

Status: Revision 2 (7 Nov 2026): brief 189 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,187 characters, 14 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v09's final frame.

Scope: tenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson13.sa.txt`, hash checked against the live file): orient and retrieve (galvanometer prediction, warm-up, intentions, vocabulary, misconceptions, boundary), model Faraday's law (observation, ε_avg = −Δ(NΦ)/Δt, key insight, Stop and Check, MC), connect induction contexts (generators, transformers, cooktops, wireless charging, braking, true/false), explore linkage change (interactive), calculate induced emf (three-part worked example, quick drill, essential formula, average and instantaneous), apply and consolidate (Activities 1 and 2, misconceptions, copy-into-books, "Analyse 6 marks", "Account 5 marks"), practice (Q1, Q2 and model answers), review and revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson13.sa.html`, SHA256 `056995e20eb15b27b14bb7b5da4a58fd70d13a6f4a8e720b1003fcd39357c4f9` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v10`, sections `model-faraday-law`, `connect-induction-contexts`, `calculate-induced-emf`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use magnet/solenoid and moving rod observations to connect rate of flux-linkage change to emf magnitude. Distinguish flux, flux linkage and current." Practical: "Primary or secondary induction investigations with magnet, rod, plate and solenoid". Next: "phys-y12-m6-v11: Why does the induced current oppose the flux change?"

Owner rules applied: as v07 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: the magnet is moved by a coded amber motion arrow, never a hand; the coil, magnet, galvanometer and rod are painted plates, the galvanometer new with a separate needle layer; rails, field symbols, flux lines, graph and calculation strips are coded; crosses for B into the screen; every number recalculated in Python; data-sheet symbols ε = −NΔΦ/Δt; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v09 (Φ = BA cos θ and the three ways to change it), Year 11 voltage as energy per coulomb.

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-02`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-02`: "analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε= -N(ΔΦ)/(Δt), including but not limited to: (ACSPH081, ACSPH110)" "the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids", "the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v09's final frame (magnet, coil and galvanometer, needle at zero). Teaches: the observation (needle moves only while the magnet moves, more for faster motion, the other way when the magnet leaves; stationary gives zero); induced emf in plain words (the energy given to each coulomb going round, a voltage, not a force) and why it appears (changing flux); emf versus current (current only in a closed circuit); flux versus flux linkage NΦ (more turns, bigger emf; turns add like cells in series); Faraday's law ε = −NΔΦ/Δt, the minus sign named and deferred; Wb s⁻¹ = V; the linkage-time graph (emf from the steepness, zero on a flat section; site Activity 2 values, magnitudes 3.0, 0, 8.0 V); the site worked example (2.0 V and 20 V); a straight conductor (rod on rails) with an original example (0.20 V); the list of changes that induce an emf. Stops before the direction of the induced current and Lenz's law (v11), two-coil induction (v12), generators (v18) and eddy currents and metal plates (v20).

## Decisions

- **Learner question (route wording kept).** "What changes create an induced emf?" The answer, built in order: a change in the flux through the circuit (2), counted over every turn as flux linkage (3), at a rate that sets the emf's size (4, 5); the change can come from moving a magnet, changing a current nearby, changing the area (the rod) or turning a coil (7, 8). The causal "why" (why a change and not a size) is carried by the graph (5).
- **Hook (site "Before you read, predict", unchanged case).** Magnet still, pushed in slowly, quickly, held, pulled out. The 3 s prediction asks one part only ("slow push or fast push: which swings the needle further?") so it is answerable in 3 s; the playback then shows all five cases. The magnet is moved by a coded amber motion arrow (no hand). Needle deflections are illustrative (author note a).
- **emf in plain words (site vocabulary "Induced emf").** "Electromotive force" is said once with the warning that it is not a force; its meaning is the energy given to each coulomb of charge that goes round the circuit, measured in volts (Year 11 voltage recalled). Current flows only if the circuit is closed (site misconception "an induced emf always means an induced current").
- **Flux linkage (route stop; site vocabulary and "Analyse 5 marks").** Shown by swapping in a coil with more turns (`phys-y11-solenoid-coil-spread-v1.png` versus `phys-y11-solenoid-coil-v1.png`; author note b) and the "cells in series" comparison; flux is through one turn, linkage NΦ through all of them, unit Wb (the site's "Wb-turn" shown once as an alternative label).
- **Faraday's law (site section 2 and the syllabus form).** ε = −NΔΦ/Δt framed; the minus sign is named as a direction rule and deferred to v11 in one sentence; Wb s⁻¹ = V.
- **Graph (site Activity 2 and Q2, used as a teaching graph).** Linkage 0 → 0.060 Wb in 0.020 s, flat for 0.030 s, → −0.020 Wb in 0.010 s: emf magnitudes 3.0 V, 0 and 8.0 V; the screen shows the signed values (−3.0 V, 0, +8.0 V) with a tag "sign: next video". This is the scene that answers "change, not size".
- **Worked example (site, unchanged).** 200 turns, 5.0 × 10⁻³ m², 0.40 T, field reduced to zero in 0.20 s: Φᵢ = 2.0 × 10⁻³ Wb, ε = 2.0 V; in 0.020 s, 20 V. Step order from the site: Φᵢ, ΔΦ, ε.
- **Straight conductor: the rod on rails (route stop and syllabus "straight conductors"; site "Describe 5 marks" mentions it; not calculated on the site).** Original values: B = 0.50 T into the screen, rod 0.20 m, v = 2.0 m s⁻¹; area swept per second 0.40 m², ΔΦ/Δt = 0.20 Wb s⁻¹, ε = 0.20 V. Taught from Faraday's law and the area change only; the shortcut ε = Blv is not introduced (not on the 2017 formula list; author note c). The rod is moved by a coded motion arrow.
- **Metal plates (syllabus example).** Not shown; eddy currents in plates are v20's ("How can a moving conductor be braked without contact?"). Recorded for the coverage check.
- **Memory aid (scene 8, new): "No change, no emf. Faster change, bigger emf."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: 50 turns, flux per turn 2.0 × 10⁻³ → 6.0 × 10⁻³ Wb in 0.10 s (2.0 V), then held at 6.0 × 10⁻³ Wb (0). A2: 0.25 m rod at 4.0 m s⁻¹ in 0.30 T (0.30 V), then stopped (0). Crossed: A1 "using the final flux, 3.0 V"; A2 "0.30 V stays because the field is still there".
- **Significant figures.** Site data give 2.0 × 10⁻³ Wb, 2.0 V, 20 V and 3.0, 0, 8.0 V as the site does; original values to two significant figures.
- **Handoff (route next).** Scene 13 asks which way the induced current flows when the north pole is pushed in, with two curved arrows round the coil (one each way) and "?" (v11: "Why does the induced current oppose the flux change?"). See "Final frame".
- **Colour key:** as v07 and v09 (field and flux slate; motion arrows amber outline; current orange); the induced emf and induced current rose (`#c0466b`; root decision 1); graph linkage slate, emf rose.
- **Colour roles (Revision 2, fixed for the whole video).** As the colour key, plus: N and turn counters navy; Δt and time readouts ink; areas navy; framed answers in a dark-ink frame; crossed slips and slip tags red; hand-font tags in the colour of the quantity they mark (slate on flux, rose on emf, navy on N and area).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 6, 7 and feedback rows 52 px; framed "ε = −N ΔΦ/Δt" 60 px); live readouts (flux counter, emf readout, scene 7 v, area, Φ and ε) about 52 px; graph labels, givens and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px, 30 px on the answer-side strip; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The painted bench (bar magnet, coil, galvanometer with its needle layer, delivered by brief 189 and inspected) carries scenes 1, 3, 8 and 13; the copper rod plate carries scene 7.
- **Simulation (Revision 2).** Core live control in scene 7: a speed slider on the rod with live readouts v, area swept per second, Φ and ε (B = 0.50 T, rod 0.20 m; Python: 1.0 m s⁻¹: 0.20 m² s⁻¹, 0.10 V; 2.0 m s⁻¹: 0.40 m² s⁻¹, 0.20 V; 4.0 m s⁻¹: 0.80 m² s⁻¹, 0.40 V; stopped: 0). Scene 1's magnet pushes, scene 2's flux counter and scene 5's gradient readout are live too.
- **Stage changes (Revision 2).** Revision 1 kept one bench for scenes 1 to 3 (about 117 s). Scene 2 is now a clear change to a close-up cutaway of the coil with threading field lines (the bench as an inset), so the runs are the bench (1, about 42 s), the cutaway (2, about 45 s) and the two-coil bench (3, about 31 s). No set-up now runs past about 50 s.
- **emf, not swing (Revision 2, brief 189).** Doubling the turns doubles the induced emf at the same rate of flux change. The current, and so a current-reading needle, depends on the whole circuit's resistance and the meter's response, so scene 3 narrates the emf, shows a rose emf bar that doubles, and labels the needle "illustrative: current also depends on the circuit's resistance". Author note (a) already called the needle illustrative.
- **Site sources used:** predict box (1); key insight "a small flux changing quickly ... a very large flux that is constant induces no emf" (2, 5); vocabulary "Faraday's Law", "Rate of change of flux", "Induced emf", "Number of turns" (2 to 4); misconceptions "large constant flux" and "the negative sign means small" (2, 4); "emf always means current" (2); formula card and Wb/s = V (4); Activity 2 and Q2 graph (5); worked example (6); applications list (8: transformers and wireless charging named only); "Describe 5 marks" (rod on rails, 7); "Account 5 marks" (memory aid, A1 (b)). Not used: induction cooktops and magnetic braking details (v20), the "Analyse 6 marks" falling magnet (v11's dropped magnet uses a related idea), Activity 1 values, the MC drills.
- **Site notes (quoted from site lesson 13, read 6 Nov):** none to log. Checked and correct: Stop and Check (30 V, 300 V); MC (25 V); worked example (2.0 × 10⁻³ Wb, 2.0 V, 20 V); quick drill and Q1 (16 V, 64 V); Q2 and Activity 2 (−3.0 V, 0, +8.0 V); Activity 1 (10 V, 20 V); "Analyse 6 marks" (emf zero at maximum flux; larger, briefer second pulse).
- **Cause chain taught, in order:** (1) the needle moves only while the magnet moves, more for faster motion, the other way for leaving (1); (2) moving the magnet changes the flux through the coil, and a changing flux induces an emf, which drives a current if the circuit is closed (2); (3) each turn adds its own emf, so the flux linkage NΦ matters (3); (4) ε = −NΔΦ/Δt: bigger change, more turns or less time give a bigger emf (4); (5) on a linkage-time graph the emf is set by the steepness, so a large steady linkage gives zero emf (5); (6) a sliding rod changes the circuit's area, so it changes the flux and induces an emf (7); (7) any change of B, A or θ for the circuit induces an emf (8).
- **Entry knowledge (route `entryKnowledge`):** v09's flux Φ = BA cos θ, the weber, the three ways to change flux; Year 11 voltage (energy per coulomb), current needs a closed circuit; reading a gradient.
- **Learner-visible vocabulary (plain meaning at first use):** galvanometer (a sensitive meter whose needle swings either way from zero, 1); induced emf, electromotive force (the energy given to each coulomb going round, in volts; not a force, 2); flux linkage NΦ (the flux through one turn times the number of turns, 3); rate of change (how fast something changes, 4); rails (two fixed parallel conducting bars, 7).
- **Legacy logic ported:** none. The coded family `m6-sliding-rod` (constant speed, uniform field, one turn) supplies scene 7's rod circuit; the "Lenz direction" and energy parts of that family are held for v11.
- **New explainer motion:** **magnet bench** (bar magnet plate moved along the coil axis by a coded amber motion arrow at set speeds; coil plate; galvanometer plate with a rotating needle layer driven by an illustrative emf; slate field lines from the magnet threading the coil, more lines through it as the magnet approaches); **turn swap** (coil plate exchange with a turn counter); `DataGraph` (linkage against time, three segments, gradient triangles, a linked emf bar graph below); **rod on rails** (top view: a cross grid, two coded rails joined by a fixed end bar, the rod plate sliding, the enclosed area shaded and growing, a swept-area strip per second); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 9 and 11); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the bench across the upper middle or the stage on the left; working or graph on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Needle deflections are illustrative: angle roughly in proportion to emf for display only; no scale values shown. The galvanometer is centre-zero, so its needle swings either way.
  (b) Turn swap: the two existing solenoid plates differ in winding spacing (`phys-y11-solenoid-coil-v1.png` close-wound; `phys-y11-solenoid-coil-spread-v1.png` spread). The narration needs "more turns" with the same size; if the plates do not show a clear turn difference at the same length, use one plate with a coded turn counter "N = 50" and "N = 100" instead (build choice).
  (c) The rod result is ε = BLv (0.50 × 0.20 × 2.0 = 0.20 V), derived in scene 7 as ΔΦ/Δt = B × (area swept per second). The shortcut is not named, to stay with the syllabus form; a later practice video may name it.
  (d) Faraday's law applies to the emf whether or not the circuit is closed; with the circuit open there is no current (scene 8).
  (e) Pronunciations: "emf" letter by letter, "E M F"; "epsilon"; "delta phi over delta t"; "webers per second"; "galvanometer".
- **Open decisions for root:**
  - **1. Galvanometer plates (root, Codex).** Two new plates (body and needle) used in v09's handoff and v10 to v12. Fallback: the digital multimeter plate with a coded signed reading (weaker; the swinging needle shows "either way" at a glance).
  - **2. Practical coverage.** The route lists "Primary or secondary induction investigations with magnet, rod, plate and solenoid". This video shows magnet, solenoid and rod observations as a demonstration with illustrative needle swings; metal plates are left to v20. Record for the coverage check.
  - **3. Induced-quantity colour (Module 6 key):** rose for induced emf, current and field, from v10 on.
Main question: *A magnet sitting inside a coil does nothing to the meter, but the same magnet moving makes the needle swing. What changes create an induced emf?*
Entry knowledge: flux and the three ways it changes (v09); voltage as energy per coulomb; gradients.
Stops after: induced emf, emf versus current, flux linkage, Faraday's law, the graph, the worked example, the rod, the list of changes. No direction.
Handoff: v11, why the induced current opposes the flux change.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *ε*, *N*, *Φ*, *ΔΦ*, *Δt*.

### 1. hook (move the magnet)
> Here's a coil connected to a galvanometer, a sensitive meter whose needle can swing either way from zero. A bar magnet sits still beside the coil, and the needle reads zero. Now think about pushing the magnet into the coil. Which swings the needle further, a slow push or a fast one? Make your **prediction**. A slow push gives a small **swing**. When the magnet stops inside the coil, the needle drops back to **zero**. A fast push gives a much bigger **swing**. And pulling it out swings the needle the other **way**. So the needle only moves while something is **changing**.

Visual: opens on v09's final frame (see "Opening frame"); the chip becomes the heading: "What changes create an induced emf?". On "galvanometer" the meter plate highlights with a tag "galvanometer: needle swings either way from zero". On "needle reads zero" the needle pulses at the centre. On "prediction" a 3 s `Countdown` beside chips "slow", "fast", "the same". On "small swing" the amber motion arrow "slow" pushes the magnet steadily into the coil and the needle swings a little to the right (illustrative, author note a). On "zero" the magnet stops inside the coil and the needle returns to zero (tag "still: zero"). On "A fast push" the magnet is withdrawn off screen-left and pushed in again quickly (motion arrow "fast"); on "much bigger swing" the needle swings much further right and the "fast" chip ticks. On "way" the motion arrow reverses and the magnet is pulled out; the needle swings left. On "changing" a tag "only while the magnet moves", framed. Revision 2: the bench fills the frame (coil about 520 px wide, galvanometer about 320 px); hand tags amber "slow" and "fast" on the motion arrows, ink "still: zero" with a pen ring round the needle at rest, rose "other way" with a pen arc on the reversed swing.

### 2. changing flux, induced emf
> Here's what's going on. As the magnet comes closer, more of its field passes through the coil, so the flux through the coil changes. A changing flux pushes charges around the coil. That push is called an induced emf, short for electromotive force. Despite the name, it isn't a force. It's the energy given to each coulomb of charge that goes around, measured in volts, just like a **voltage**. Because the circuit is closed, the emf drives a current, and the needle **swings**. When the magnet stops, the flux stops changing, so the emf drops to zero, even though plenty of flux still passes through the **coil**.

Visual (Revision 2 stage change): clear change to a close-up cutaway of the coil (about 60% of the frame, turns drawn as coded ink ellipses over the painted coil) with the magnet's end entering from the left, and the bench as an inset at the top right; slate field lines from the magnet thread the coil (full ink). On "more of its field passes through the coil" the magnet approaches and the number of lines through the coil grows, with a flux counter "Φ" ticking up. On "induced emf" a rose chip "induced emf ε: produced by a changing flux". On "voltage" the chip extends "energy per coulomb (V), not a force". On "swings" small rose current dots move round the coil and through the leads to the meter; the needle swings. On "coil" the magnet stops: the lines through the coil stay (counter steady, "Φ large") but the rose dots stop and the needle returns to zero; tag "large Φ, not changing: no emf", framed. Revision 2: slate hand tag "Φ rising" on the counter while it ticks, rose hand tag "push on charges" with a pen arrow along the moving dots; a chip "big flux → emf" fades in and is crossed in red on "coil".

### 3. more turns: flux linkage
> Now give the coil twice as many turns. The same magnet, pushed at the same speed, gives twice the **emf**. Each turn has the same flux through it, and each turn adds its own emf, like cells joined in series. So what really matters is the flux through one turn, times the number of turns. That's called the flux **linkage**, N times phi. Flux is what passes through one turn. Flux linkage counts it for every turn.

Visual: on "twice as many turns" the coil changes to a coil with twice the turns, same length (author note b), turn counter "N = 50" → "N = 100". On "emf" (Revision 2, brief 189) the magnet repeats the slow push; a rose emf bar beside each coil (the 50-turn coil as a ghost at the left, the 100-turn coil at the right) rises, the second exactly twice as tall, "ε × 2" framed. The needle swings further, with a grey-ink tag (30 px) "needle illustrative: current also depends on the circuit's resistance". On "adds its own emf" three turns of the coil highlight in turn, each with a small rose "+ε₁" tag, and a small coded row of cells in series appears beside it. On "linkage" the equation strip "flux linkage = NΦ" (framed) with two labels: "Φ: through one turn (Wb)", "NΦ: through all N turns (Wb, or Wb-turn)". Revision 2: navy hand tag "× N turns" with a pen bracket over the highlighted turns; rose hand tag "emfs add, like cells".

### 4. Faraday's law
> Put those ideas together, and you get Faraday's law. The induced emf is minus N, times the change in flux, divided by the time the change **takes**. Epsilon equals minus N delta phi over delta t. A bigger change, more turns, or a shorter time, all give a bigger **emf**. The minus sign tells us which way the emf pushes, and that's next video's job. And one weber per second is one **volt**.

Visual: board change to the working side, the bench small at the top left. On "takes" the equation strip writes "ε = −N ΔΦ / Δt" (framed), grey tag "Physics Stage 6 (2017)", with "ΔΦ: change in flux through one turn", "Δt: time taken". On "emf" three arrows: "ΔΦ ↑", "N ↑", "Δt ↓" each pointing to "ε ↑". On "The minus sign" the minus sign circles in rose with a tag "direction: next video". On "volt" a chip "1 Wb s⁻¹ = 1 V". Revision 2: the bench stays at the top left at about 30% of the frame; "ε = −N ΔΦ/Δt" framed (60 px); hand tags navy "more turns", slate "bigger change", ink "less time" on the three arrows, with a pen ring round "Δt".

### 5. a graph: steepness, not height
> A graph shows this clearly. Here's the flux linkage in a coil over time. It rises steadily to zero point zero six zero webers in zero point zero two zero seconds. That's a gradient of three point zero webers per second, so the emf is three point zero **volts**. Then it stays flat for a while. A flat line has zero gradient, so the emf is **zero**, even though the linkage is large. Finally it falls by zero point zero eight zero webers in just zero point zero one zero seconds. That's steeper, so the emf is bigger, eight point zero volts, and in the opposite **direction**. The emf is set by how steep the graph is, not by how high **it** is.

Visual: board change: a `DataGraph` "NΦ (Wb)" against "t (s)" from 0 to 0.060 s and −0.020 to 0.060 Wb, and below it, aligned in time, an emf bar graph "ε (V)". On "rises steadily" the linkage line draws from (0, 0) to (0.020, 0.060); a gradient triangle "0.060 Wb / 0.020 s". On "volts" the emf bar for that interval rises to "−3.0 V" with the magnitude "3.0 V" labelled and a small grey tag "sign: next video". On "zero" the flat section draws to (0.050, 0.060); its emf bar is zero; tag "flat: ε = 0". On "Finally it falls" the line drops to (0.060, −0.020); triangle "−0.080 Wb / 0.010 s". On "direction" the emf bar "+8.0 V" on the other side of the axis, taller. On "it" the high flat section pulses beside its zero bar, tag "steepness, not height", framed. Revision 2: a dot rides the linkage line with a live gradient readout "ΔNΦ/Δt" and a rose "|ε|" readout (52 px) that jump between 3.0, 0 and 8.0; the 3.0 V and 8.0 V magnitudes are framed; a chip "highest NΦ → biggest ε" fades in and is crossed in red; slate hand tag "flat = 0" with a pen ring round the flat section.

### 6. a worked example
> Here's a calculation. A coil of two hundred turns, with an area of five point zero times ten to the minus three square metres, sits at right angles to a field of zero point four zero tesla. First, the flux through each turn is B A, two point zero times ten to the minus three **webers**. Now the field is reduced to zero in zero point two zero seconds, so the change in flux is minus two point zero times ten to the minus three webers. The emf is minus two hundred, times that change, over zero point two zero. That's two point zero **volts**. Make the same change ten times faster, in zero point zero two zero seconds, and the emf is ten times bigger, twenty **volts**.

Visual: board change to the working layout, a coded coil with its face to the field arrows at the left (about 35% of the frame). Task strip: "Find the average induced emf." Equation strip: "ε = −N ΔΦ / Δt". Givens grouped: "N = 200 turns", "A = 5.0 × 10⁻³ m²", "B = 0.40 T, at right angles to the coil", "B → 0 in Δt = 0.20 s". On "two point zero times ten to the minus three webers" `AlignedAlgebra` "Φᵢ = BA = 0.40 × 5.0 × 10⁻³ = 2.0 × 10⁻³ Wb". On "change in flux" "ΔΦ = 0 − 2.0 × 10⁻³ = −2.0 × 10⁻³ Wb". On "volts" "ε = −200 × (−2.0 × 10⁻³) / 0.20 = 2.0 V". On "ten times faster" the givens change "Δt = 0.020 s" (highlighted). On "twenty volts" "ε = −200 × (−2.0 × 10⁻³) / 0.020 = 20 V", tag "10 × faster → 10 × emf". Revision 2: "2.0 V" and "20 V" framed; crossed classic slip: chip "no N: ε = 2.0 × 10⁻³ / 0.20 = 0.010 V" fades in and is crossed in red, red hand tag "× 200 turns"; rose hand tag "minus × minus: positive" with a pen ring round the two minus signs.

### 7. a sliding rod
> A magnet isn't the only way. Here's a metal rod sliding along two rails, in a field going into the screen. The rod and the rails make a closed loop. As the rod slides, the loop gets bigger, so the flux through it **grows**. Say the field is zero point five zero tesla, the rod is twenty centimetres long, and it slides at two point zero metres per second. Every second, it sweeps out zero point two zero times two point zero, which is zero point four zero square **metres**. So the flux grows by zero point five zero times zero point four zero, zero point two zero webers every second. That's an emf of zero point two zero **volts**. Stop the rod, and the emf **vanishes**.

Visual: board change to the rod stage (top view): a grid of slate crosses "B into the screen"; two coded horizontal rails joined at the left by a fixed bar with a small coded resistor and the galvanometer in it; the copper rod plate (`phys-y11-rod-copper-v1.png`, turned to lie across the rails) with a coded amber motion arrow "v". On "closed loop" the rectangle formed by the rails, the end bar and the rod outlines in ink. On "grows" the rod slides right; the enclosed area shades pale slate and grows; a flux counter rises. Givens grouped at the right: "B = 0.50 T", "rod length 0.20 m", "v = 2.0 m s⁻¹". On "metres" a strip of width 2.0 m (scaled) in front of the rod highlights: "area swept each second = 0.20 × 2.0 = 0.40 m²". On "every second" `AlignedAlgebra` "ΔΦ/Δt = 0.50 × 0.40 = 0.20 Wb s⁻¹". On "volts" "ε = 0.20 V (N = 1)"; the needle swings and rose current dots move round the loop. On "vanishes" the motion arrow disappears, the rod stops, the counter holds and the needle returns to zero. Revision 2 (the core live control): an amber speed slider under the rails drives the rod, with a readout panel (52 px): amber "v", navy "area per second", slate "Φ" (rising while the rod moves), rose "ε". Before "vanishes" the slider briefly steps 1.0, 2.0 and 4.0 m s⁻¹ (ε = 0.10, 0.20, 0.40 V; the scene's worked value 0.20 V framed), then returns to 2.0. On "vanishes" the slider drops to 0: ε reads 0 while Φ holds. Hand tags: navy "loop grows" with a pen ring round the shaded area; rose "rod still: ε = 0"; a chip "field present → emf" fades in and is crossed in red.

### 8. so what creates an emf?
> So here's the answer. An emf is induced whenever the flux linkage of a circuit changes. Move a magnet or a coil, so the field through it changes. Change the current in a nearby electromagnet. Change the area, like the sliding rod. Or turn the coil, which changes the **angle**. No change, no emf, however strong the field. And remember, the emf is there even if the circuit is broken. A current only flows when the circuit is **closed**. Here's a way to remember it. No change, no emf. Faster change, bigger **emf**.

Visual: board change to a summary board of four small panels, each with a rose "ε" that lights while its change plays: "move a magnet" (bench), "change a current nearby" (a second coil's switch closing, grey preview tag "next but one"), "change the area" (the rod), "turn the coil" (a loop rotating). On "angle" all four "ε" glow; under them "any change in B, A or θ → ε". On "No change, no emf" a fifth panel: the magnet sitting still in the coil, "ε = 0". On "broken" one lead in the bench panel breaks: the emf chip stays "ε" but the current dots stop, tag "open circuit: emf, no current". On "closed" the lead rejoins and the dots flow. On the last "emf" the handwritten line writes large above (52 px), inside a framed memory card: "No change, no emf. Faster change, bigger emf." Revision 2: the four panels are each about 420 px wide; rose hand tag "emf, no current" on the broken lead. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A coil of fifty turns sits in a magnetic field. The flux through each turn rises from two point zero times ten to the minus three webers to six point zero times ten to the minus three webers in zero point one zero seconds, and then stays at that value. Calculate the average emf while the flux is rising, and state the emf after it stops changing. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A coil of 50 turns is in a magnetic field. The magnetic flux through each turn increases uniformly from 2.0 × 10⁻³ Wb to 6.0 × 10⁻³ Wb in 0.10 s and then remains constant. (a) Calculate the magnitude of the average induced emf while the flux is increasing. (b) State the induced emf once the flux is constant, and explain your answer. (3 marks)" Picture on the card (Revision 2): a coded coil labelled "N = 50" with slate field lines through it, and a small flux-against-time sketch rising from "2.0 × 10⁻³" to "6.0 × 10⁻³ Wb" by "0.10 s" and then flat (values from the question only). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> The change in flux is four point zero times ten to the minus three webers. Times fifty turns, over zero point one zero seconds, gives two point zero **volts**. Once the flux is constant, there's no change, so the emf is **zero**, even though the flux is large. The classic slip is using the final flux instead of the change, which gives three point zero volts. Faraday's law needs the **change**.

Visual: card shrinks to the top; "increases ... from ... to" and "then remains constant" underline. `AlignedAlgebra` "ΔΦ = 6.0 × 10⁻³ − 2.0 × 10⁻³ = 4.0 × 10⁻³ Wb"; on "volts" "(a) |ε| = 50 × 4.0 × 10⁻³ / 0.10 = 2.0 V". On "zero" "(b) ΔΦ = 0 → ε = 0". "2.0 V" and "ε = 0" framed. Answer side (Revision 2): a navy givens strip "N = 50, Φ: 2.0 × 10⁻³ → 6.0 × 10⁻³ Wb, Δt = 0.10 s" and the card's sketch enlarged with a gradient triangle on the rising part. On "change" a chip "ε = 50 × 6.0 × 10⁻³ / 0.10 = 3.0 V" fades in and is crossed in red (caption "use ΔΦ, not Φ"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A metal rod twenty-five centimetres long slides at four point zero metres per second along two parallel rails, in a uniform magnetic field of zero point three zero tesla at right angles to the rails. Calculate the emf induced in the circuit, and state the emf after the rod stops. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A metal rod of length 0.25 m slides at a constant 4.0 m s⁻¹ along two parallel conducting rails that are joined at one end. A uniform magnetic field of 0.30 T acts perpendicular to the plane of the rails. (a) Calculate the magnitude of the induced emf. (b) The rod is brought to rest. State the induced emf and explain your answer. (3 marks)" A small coded top view: crosses, rails joined at the left, the rod with "v". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> Each second, the rod sweeps out zero point two five times four point zero, one point zero square metre. So the flux changes by zero point three zero webers every second, and the emf is zero point three zero **volts**. Once the rod stops, the area stops changing, so the emf is **zero**. The slip is thinking the emf stays because the field is still there. A field alone does **nothing**.

Visual: card shrinks to the top; "0.25 m", "4.0 m s⁻¹", "0.30 T" and "brought to rest" underline. `AlignedAlgebra` "area per second = 0.25 × 4.0 = 1.0 m² s⁻¹"; on "volts" "(a) ε = ΔΦ/Δt = 0.30 × 1.0 = 0.30 V". On "zero" "(b) A constant → ΔΦ = 0 → ε = 0". "0.30 V" and "ε = 0" framed. Answer side (Revision 2): a navy givens strip "L = 0.25 m, v = 4.0 m s⁻¹, B = 0.30 T" and the card's top view enlarged (about 420 px) with the swept strip shaded. On "nothing" a chip "ε still 0.30 V (field still there)" fades in and is crossed in red (caption "no change in flux, no emf"). Hold about 1 second.

### 13. handoff
> So a changing flux makes an emf, and in a closed circuit, a current. But which way does that current flow? Push the north pole in, and the current could go round the coil one way, or the other way. One of those choices would break the law of conservation of energy. Which **one**?

Visual: board clears (camera change) to the bench: the bar magnet, "N" facing the coil, with the amber motion arrow pointing at the coil; the coil plate; the galvanometer with its needle deflected. On "which way does that current flow" the leads dim. On "one way" a rose curved arrow round the coil's near end, clockwise as seen from the magnet, with "?"; on "the other way" a second rose curved arrow, anticlockwise, with "?". On "conservation of energy" a chip "energy is conserved". On "one" a large "?" between the two arrows and a chip "Next: why does the induced current oppose the flux change?". Revision 2: amber hand tag "N pushed in" on the motion arrow (it fades before the hold, so the final frame below is unchanged). Hold about 2 seconds. This is the final frame (see "Final frame").

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. emf: energy per coulomb (V); current needs a closed loop.
2. Flux linkage = NΦ (Φ through one turn).
3. ε = −N ΔΦ/Δt; 1 Wb s⁻¹ = 1 V.
4. NΦ-t graph: emf from the gradient, not the height.
5. Change B, A or θ (magnet, current, rod, turning).

Memory aid (framed card under the notes, hand lettering, 44 px): *No change, no emf. Faster change, bigger emf.* Bullets 36 px in the role colours; no paragraphs. The quiet hold is about 60 s (at least 40 s).

## Teaching checks

- **Does it explain causes?** Why the needle moves only during motion: the flux is changing only then (2). Why more turns give more emf: each turn adds its own emf (3). Why a big steady flux gives nothing: zero gradient (5). Why faster gives more: same ΔΦ over a smaller Δt (1, 6). Why the rod induces an emf: it changes the circuit's area (7).
- **Misconceptions addressed:** a strong field (or large flux) induces an emf (2, 5, 8; crossed in 12); emf is a force (2); emf always means a current (8); the minus sign means small (4); using Φ instead of ΔΦ (10, crossed); flux and linkage the same (3).
- **One idea at a time:** observation (1), mechanism (2), turns (3), law (4), graph (5), calculation (6), a second kind of change (7), summary (8).
- **Video makes it easier:** the needle swinging only during motion, further when faster (1); field lines threading the coil while the counter rises, then holding (2); the gradient triangles above the emf bars (5); the shaded area growing behind the rod (7); the lead breaking and the current stopping while ε stays (8).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 28 s.
- **Avoided double teaching:** v09's flux recalled; Year 11 voltage and closed circuits recalled in a clause.
- **Syllabus coverage:** `P6-IQ3-02`: Faraday's law quantitatively (4 to 7); emf by relative movement of a magnet and a solenoid (1, 2) and a straight conductor (7); changes in current in a nearby solenoid named (8; developed in v12); Lenz's law evidence and energy (v11); metal plates (v20).
- **Out of scope by design:** direction and Lenz's law (v11), two coils (v12), generators (v18), eddy currents (v20).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A coil of 50 turns is in a magnetic field. The magnetic flux through each turn increases uniformly from 2.0 × 10⁻³ Wb to 6.0 × 10⁻³ Wb in 0.10 s and then remains constant. (a) Calculate the magnitude of the average induced emf while the flux is increasing. (b) State the induced emf once the flux is constant, and explain your answer."
Model answer: (a) ΔΦ = 4.0 × 10⁻³ Wb; |ε| = NΔΦ/Δt = 50 × 4.0 × 10⁻³ / 0.10 = 2.0 V. (b) Zero: the flux linkage is not changing (ΔΦ/Δt = 0), whatever its size. Classic mistake (crossed): using the final flux (50 × 6.0 × 10⁻³ / 0.10 = 3.0 V).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks).** "A metal rod of length 0.25 m slides at a constant 4.0 m s⁻¹ along two parallel conducting rails that are joined at one end. A uniform magnetic field of 0.30 T acts perpendicular to the plane of the rails. (a) Calculate the magnitude of the induced emf. (b) The rod is brought to rest. State the induced emf and explain your answer."
Model answer: (a) Area swept per second = 0.25 × 4.0 = 1.0 m² s⁻¹; ΔΦ/Δt = BΔA/Δt = 0.30 × 1.0 = 0.30 Wb s⁻¹; ε = 0.30 V (one turn). (b) Zero: with the rod at rest the circuit's area, and so the flux, no longer changes. Classic mistake (crossed): "0.30 V remains because the field is still present".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | illustrative needle swings; slow, fast, still, out | 1 |
| Turns | N = 50 → 100: twice the emf at the same rate of flux change; needle swing illustrative only (Revision 2) | 3 |
| Graph (site Activity 2) | 0 → 0.060 Wb in 0.020 s: gradient 3.0 Wb s⁻¹, ε = −3.0 V; flat 0.030 s: 0; −0.080 Wb in 0.010 s: ε = +8.0 V | 5 |
| Worked example (site, unchanged) | N = 200, A = 5.0 × 10⁻³ m², B = 0.40 T; Φᵢ = 2.0 × 10⁻³ Wb; ΔΦ = −2.0 × 10⁻³ Wb; 0.20 s: 2.0 V; 0.020 s: 20 V | 6, key notes |
| Rod (original) | B = 0.50 T, L = 0.20 m, v = 2.0 m s⁻¹; area per second 0.40 m²; ΔΦ/Δt = 0.20 Wb s⁻¹; ε = 0.20 V | 7 |
| A1 | ΔΦ = 4.0 × 10⁻³ Wb; 50 × 4.0 × 10⁻³ / 0.10 = 2.0 V; slip 50 × 6.0 × 10⁻³ / 0.10 = 3.0 V; then 0 | 9, 10 |
| A2 | 0.25 × 4.0 = 1.0 m² s⁻¹; 0.30 × 1.0 = 0.30 V; then 0 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 0.060 / 0.020 = 3.0; (−0.020 − 0.060) / 0.010 = −8.0, so ε = +8.0.
- 0.40 × 5.0 × 10⁻³ = 2.0 × 10⁻³; 200 × 2.0 × 10⁻³ / 0.20 = 2.0; / 0.020 = 20.
- 0.20 × 2.0 = 0.40; 0.50 × 0.40 = 0.20.
- A1: 6.0 × 10⁻³ − 2.0 × 10⁻³ = 4.0 × 10⁻³; 50 × 4.0 × 10⁻³ / 0.10 = 2.0; 50 × 6.0 × 10⁻³ / 0.10 = 3.0.
- A2: 0.25 × 4.0 = 1.0; 0.30 × 1.0 = 0.30.
- Site checks: 100 × 0.030 / 0.10 = 30; / 0.010 = 300; 50 × 0.20 / 0.40 = 25; 80 × 0.040 / 0.20 = 16; / 0.050 = 64; 50 × 0.020 / 0.10 = 10; / 0.05 = 20.

## Memory aid check

- **"No change, no emf. Faster change, bigger emf."** Meaning, as said in scene 8: an emf is induced only while the flux linkage changes; the faster it changes, the larger the emf (ε = −NΔΦ/Δt). Assumptions checked: "change" means change in flux linkage, by any of B, A or θ, not merely motion (a loop sliding inside a uniform field moves but gives no emf, v09); "bigger" compares the same N; the emf exists without a closed circuit (current needs one). It helps a new case: A1 (b) (constant flux: zero), A2 (b) (rod stopped: zero), the "Account 5 marks" strong-steady versus weak-switched fields, and v12's switch-on flick. Introduced after the explanation (2 to 7).
- **Considered, not used:** "Flux must flux" (cute but unclear).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " inside each scene, joined with a space, bold markers removed; total = sum of the scene strings): **6,187 characters**, 14 scenes (Revision 1 stated 6,202, which included the 13 joins; its scene sum was 6,189). Characters per scene (1 to 14): 553, 601, 405, 379, 628, 658, 657, 504, 380, 384, 312, 375, 276, 75. At 13.3 characters per second the speech is about 465 s; add about 2 s for the scene 7 slider steps to settle; add about 3 s for the prediction countdown, 3 s for the magnet pushes in scene 1, 2 s for the graph build, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 91 s of holds and countdowns; the notes hold is about 60 s in all): **about 556 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's last two sentences; scene 4's unit sentence (keep the chip); scene 8's open-circuit sentences.

## Opening frame

v09's final frame (designed in this wave, `phys-y12-m6-v09.md`): paper background; a bench line; the bar magnet plate at the left, "N" coded on the end facing the coil, a coded amber motion arrow "→" behind it (still); the coil plate at the centre, axis in line with the magnet; coded leads to the galvanometer at the right, needle at the centre zero; a "?" by the needle; a chip "changing Φ"; heading "Why does changing loop orientation change magnetic flux?"; chip "Next: what changes create an induced emf?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 13, before the key-notes board): paper background; the bench: bar magnet at the left, "N" facing the coil, with the amber motion arrow pointing towards the coil; the coil plate; coded leads (dimmed) to the galvanometer at the right, needle deflected; two rose curved arrows round the coil's near end, one clockwise and one anticlockwise as seen from the magnet, each with "?"; a large "?" between them; a chip "energy is conserved"; heading unchanged ("What changes create an induced emf?"); a chip reads "Next: why does the induced current oppose the flux change?". v11 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v10` (route phys-y12-m6-v10). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v10` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v10` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, changing-flux, flux-linkage, faraday-law, graph, worked-example, sliding-rod, what-changes, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: magnet bench (motion arrow, needle layer, threading field lines, flux counter), turn swap, `DataGraph` with gradient triangles and a linked bar graph, rod on rails, summary panels, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the coil cutaway (Revision 2); 2 to 3 clear change back to the two-coil bench; 3 to 4 camera change (working side); 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 clear change; attempts and feedback card shrink to the top; 12 to 13 clear change; 13 to 14 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v10-learning-review.md`, `science_check` = `checks/p-y12-m6-v10-science-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-bar-magnet-v1.png` (2172 × 724, RGBA; sidecar end-face centres (286, 365), (1885, 365); red and grey halves, no letters): the magnet (1 to 3, 8, 13); coded "N" on the red end, "S" on the grey.
- `public/assets/physics/phys-y11-solenoid-coil-v1.png` and `phys-y11-solenoid-coil-spread-v1.png` (1774 × 887 each, RGBA): the coil and the turn swap (1 to 3, 8, 13; author note b). The coil's bore must be wide enough for the magnet at the same scale; if not, use `phys-y11-solenoid-coil-wide-v1.png` (1774 × 887) and keep the magnet entering only part-way (build check).
- `public/assets/physics/phys-y11-rod-copper-v1.png` (2172 × 724, RGBA): the sliding rod (7).
- **Checked, not used:** `phys-y11-digital-multimeter-v1.png` (shows a number, not the either-way swing; it is the fallback in open decision 1); `phys-y11-coil-former-v1.png` (an unwound former, kept for v12).

Need (new plates, Codex):
1. `y12p-galvanometer-v1.png` and `y12p-galvanometer-needle-v1.png`: v09 scene 14, v10 to v12. Essential. **Delivered by brief 189** (meter and needle share one canvas; needle fits the window at both end ticks per the brief 189 QA; inspected 7 Nov: centre-zero arc with seven ticks, red and black terminals). Moves to "Have" for the build; open decision 1's multimeter fallback is no longer needed.

Coded: motion arrows, field lines and counters, current dots, leads, rails, the end bar and resistor, crosses, the shaded area and swept strip, graphs, cells-in-series row, summary panels, calculation strips, crossed chips, attempt cards and diagrams, countdowns, key notes board, curved rose arrows.

Kit gaps (for the v10 build brief):
1. **Magnet bench.** A magnet plate moved along the coil axis by a coded motion arrow at set speeds; field lines from the magnet threading the coil with a counter; a needle layer rotating about the galvanometer pivot from an illustrative emf; current dots in the leads.
2. **Linkage graph with emf bars.** `DataGraph` with gradient triangles and a time-aligned bar graph below.
3. **Rod on rails.** Extend `m6-sliding-rod` with the galvanometer in the end bar, the growing shaded area and a swept-area strip.

## Codex asset brief (Year 12 Physics M6 v10: galvanometer)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m6-v10.md`, route entry phys-y12-m6-v10. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-digital-multimeter-v1.png` and `phys-y11-low-voltage-supply-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-galvanometer-v1.png` (1400 × 1200 px): a school centre-zero galvanometer seen from the front: a sturdy box with a curved window over a symmetric arc scale with plain unnumbered tick marks and a longer centre tick, two terminals (red and black) on the front below the window. **No needle** (it is a separate layer). Codex reports, in plate pixels: the needle pivot point, the centre-zero direction, the angles of the scale's two end ticks from the centre tick, and the two terminal centres (for coded leads).
2. `y12p-galvanometer-needle-v1.png` (1400 × 1200 px, same canvas as plate 1): only the thin dark needle, drawn pointing at the centre zero, its pivot at exactly the pivot point of plate 1, so that the two layers align when overlaid at the same position and scale and the needle can rotate about the pivot. Codex reports the pivot point (identical to plate 1's).

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm that the needle aligns over the window and stays inside it when rotated to either end tick. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m6-v10-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the needle observations; induced emf as energy per coulomb, not a force; emf without current in an open circuit; flux versus flux linkage; ε = −NΔΦ/Δt and Wb s⁻¹ = V; the graph signs and magnitudes (−3.0 V, 0, +8.0 V for the declared positive linkage); the worked example; the rod (area swept per second times B); the list of changes.
3. Confirm the needle swings and the turn-doubling swing are described as illustrative.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the magnet and rod are moved by coded arrows).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Faraday's Law: What Creates an Induced EMF? | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson13.sa.html

A magnet sitting still inside a coil does nothing to the meter, but the same magnet moving makes the needle swing. See why a changing flux, not a large one, induces an emf, what flux linkage means, how to use Faraday's law ε = −NΔΦ/Δt, how to read the emf from a flux-time graph, and how a sliding rod makes an emf too. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε = −N ΔΦ/Δt, including but not limited to: the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids; the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: magnetic flux and loop orientation. Next: Lenz's law, and why the induced current opposes the change.

#HSCPhysics #Physics #FaradaysLaw #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v09's flux; check that the needle observations and the "steepness, not height" graph carry the answer; that emf versus current is clear; that the rod's swept-area step is followed without ε = BLv; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The needle swinging only during motion, the gradient triangles over the emf bars and the shaded area growing behind the rod carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 189 findings (`checks/p-y12-m6-v10-learning-review.md`, `checks/p-y12-m6-v10-science-check.md`): 0 blocker, 1 should fix, 0 optional.
- **Should fix, S3 (doubling the turns does not automatically double a current-reading needle).** Resolved: the narration now says the same push "gives twice the **emf**" (cue changed from "swing"; −2 characters). The visual shows a rose emf bar for each coil, the second exactly twice as tall ("ε × 2", framed), and labels the needle "needle illustrative: current also depends on the circuit's resistance". Decisions add "emf, not swing"; the numbers table is updated. The emf result is kept distinct from the current it drives.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation", "Stage changes" and "emf, not swing"; the induced-quantity colour cites root decision 1.
- Plates: the galvanometer and its needle are delivered (brief 189) and inspected 7 Nov; the scene 1 bench fills the frame. The opening frame is v09's Revision 2 final frame, unchanged.
- Stage change: scene 2 is a clear change to a close-up coil cutaway with threading field lines (the bench as an inset), which breaks the Revision 1 bench run of about 117 s over scenes 1 to 3.
- Core live control (scene 7): a speed slider on the rod with live v, area per second, Φ and ε readouts (Python 0.10, 0.20 and 0.40 V at 1.0, 2.0 and 4.0 m s⁻¹; 0 when stopped). Scene 5 gains a dot riding the linkage line with a live gradient and |ε| readout.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 8 and 13): "slow", "fast", "still: zero", "other way", "Φ rising", "push on charges", "× N turns", "emfs add, like cells", "more turns", "bigger change", "less time", "flat = 0", "× 200 turns", "minus × minus: positive", "loop grows", "rod still: ε = 0", "emf, no current", "N pushed in".
- Framed answers: "only while the magnet moves" (1), the no-emf tag (2), ε × 2 and NΦ (3), Faraday's law (4), 3.0 V, 8.0 V and "steepness, not height" (5), 2.0 V and 20 V (6), 0.20 V (7), every feedback result. New crossed slips: "big flux → emf" (2), "highest NΦ → biggest ε" (5), "no N: 0.010 V" (6), "field present → emf" (7).
- Question cards: scene 9's card gains a picture (the 50-turn coil and a flux-time sketch drawn from the question's own values); feedback scenes 10 and 12 keep a full-text strip with a navy givens strip and an answer-side picture.
- Scene 8: the memory aid sits in a framed card.
- Key notes: five long items (about 640 characters) cut to five short bullets (about 230 characters) with the framed memory card; quiet hold about 60 s.
- Type sizes stated. Review evidence path corrected to the science-check file.

New plate requests: none (the galvanometer requested in Revision 1 is delivered).

Counts: 6,202 stated (joined; 6,189 scene sum) to 6,187 characters (scene sum); about 555 s to about 556 s.
