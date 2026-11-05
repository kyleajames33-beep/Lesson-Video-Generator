# Year 12 Physics M6 V12: Mutual induction. How can one coil induce an emf in another without touching it? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,673 characters, 16 scenes, about 515 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v11's final frame.

Scope: twelfth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md`. No pre-design pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts `work/brief168/module6-lesson13.sa.txt` and `module6-lesson15.sa.txt`, hashes checked against the live files): lesson 13 as recorded in `phys-y12-m6-v10.md` (this video uses its `connect-induction-contexts` section: transformers, wireless charging, the AC key insight, the DC true/false); lesson 15: orient and retrieve (turns prediction, warm-up, intentions, vocabulary), explain mutual induction (DC versus AC observation, the five-step mechanism, equations, Stop and Check, MC, "Why transformers need AC", key insight, true/false), calculate ideal ratios (interactive, worked example, MC), analyse real efficiency (four losses), extension: mutual induction without a shared core (air-core solenoids, table, key insight, HSC tip, true/false), AC, switched DC and ideal limits, apply and consolidate (Activities 1 and 2, summary, MC, "Analyse 6 marks", "Evaluate 6 marks"), practice (Q1, Q2 and model answers), review: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a`, and `.../lesson13.sa.html`, SHA256 `056995e20eb15b27b14bb7b5da4a58fd70d13a6f4a8e720b1003fcd39357c4f9` (both recomputed 6 Nov; match the route). Route entry: `phys-y12-m6-v12`, sections `connect-induction-contexts` (lesson 13) and `explain-mutual-induction` (lesson 15). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Trace changing primary current to core flux to secondary emf; contrast DC switching and steady DC. Stop before transformer ratios." Practical: "Mutual induction with two solenoids, low-voltage approved setup". Next: "phys-y12-m6-v13: How does a transformer exchange voltage for current?"

Owner rules applied: as v07 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: the switch is shown changing state, the moving primary and the iron rod are moved by coded amber motion arrows; the coils, supply, switch, galvanometer and soft-iron rod are painted plates; field lines, current and emf graphs and the closed-core schematic are coded; every number recalculated in Python; data-sheet symbols ε = −NΔΦ/Δt; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; Australian spelling; no em dashes; low-voltage supply only, as the route's approved set-up). Recalled, not re-taught: v10 (Faraday's law, flux linkage), v11 (Lenz's law), Year 11 (a coil carrying current is an electromagnet; soft iron is easily magnetised).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-02`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-02`: "analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε= -N(ΔΦ)/(Δt), including but not limited to: (ACSPH081, ACSPH110)" "the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids", "the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v11's final frame (two coils, not touching; the primary with an open switch and supply; the secondary on the galvanometer). Teaches: the observation (a flick at switch on, zero while steady, an opposite flick at switch off); primary and secondary named; the primary's current makes a field, part of which links the secondary; switching changes the primary current, so the secondary's flux linkage changes and an emf is induced; steady DC gives zero; Lenz's law gives opposite flicks; the energy comes from the primary's supply; current and emf graphs; a number from Faraday's law (500 turns, 4.0 × 10⁻⁵ Wb in 0.020 s: 1.0 V); relative movement of an energised primary; AC gives a continuous alternating emf, largest when the primary current changes fastest (passing through zero); a soft-iron core links far more flux; a closed core is a transformer. Stops before turns ratios, V_pI_p = V_sI_s and losses (v13, v14).

## Decisions

- **Learner question (route wording kept).** "How can one coil induce an emf in another without touching it?" is causal. The answer, built in order: the primary's current makes a magnetic field that reaches through the secondary (2); changing that current changes the flux linking the secondary (3); a changing flux linkage induces an emf by Faraday's law (3, 6); nothing needs to touch, because the field carries the change (2, 9).
- **Hook (route "contrast DC switching and steady DC"; site lesson 15's opening observation).** The site's "steady 12 V DC" observation re-staged with the v11 bench and a low-voltage supply: close (flick), hold (zero), open (opposite flick). 3 s prediction while the switch is held closed: "what does the needle read now?" (chips "steady deflection", "zero").
- **Mechanism (site lesson 15's five-step list, kept as a chain on screen).** Primary current → field → flux linking the secondary → changing → emf. The current's rise at switch on is described as "over a short time" without naming self-inductance (author note a).
- **Switch-off flick often larger (precision detail, author note b).** Said once: the current falls more quickly when the circuit is broken, so the flick is often bigger. Kept because students see it in the practical and it reinforces "faster change, bigger emf" from v10.
- **Lenz's law in the secondary (v11 recalled).** At switch on the secondary's field opposes the growing flux; at switch off it props up the falling flux, so the flicks are opposite. Energy: the secondary's energy comes from the primary's supply through the changing field (syllabus "energy transfers"); a sentence only, as v13 develops power.
- **Number (original values, Faraday's law).** Secondary 500 turns; flux per turn 0 → 4.0 × 10⁻⁵ Wb in 0.020 s at switch on: 1.0 V, "only for that brief moment". Original, tagged as an example.
- **Relative movement (syllabus "relative movement ... in one solenoid in the vicinity of another").** A steadily energised primary moved towards the secondary by a coded motion arrow induces an emf, like v10's moving magnet; stopping gives zero.
- **AC and the phase surprise (site key insight "AC ... ensure flux is always changing"; new detail).** Two aligned graphs (primary current, sine; secondary emf, shifted) show the secondary emf largest when the primary current passes through zero and zero at the current's peaks (ideal coupling, no load; author note c). The narration calls it a surprise, a genuinely useful exam insight.
- **Soft-iron core (site lesson 15 extension: air-core versus iron-core coupling, and the HSC tip).** A soft-iron rod (`phys-y11-rod-soft-iron-v1.png`) slides through both coils: much more flux links the secondary, much bigger emf; the coils still do not touch. "Wrap both coils on one closed iron loop: almost all the flux links both: a transformer." The site's HSC tip ("do not say no induction occurs" for air-core coils) appears as a screen tag in scene 9.
- **Memory aid (scene 10, new): "Steady current, no emf. Changing current, induced emf."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: a 12 V battery, switch and primary; galvanometer on the secondary at switch on, held closed, switch off. A2: secondary 250 turns, primary 100 turns, flux per secondary turn 6.0 × 10⁻⁴ Wb → 0 in 0.030 s at switch off: 5.0 V. Crossed: A1 "steady deflection while closed"; A2 "using the primary's 100 turns (2.0 V)".
- **Significant figures.** Original values to two significant figures (1.0 V, 5.0 V).
- **Handoff (route next).** Scene 14 draws a closed square soft-iron core with the primary on the left and a secondary with more turns on the right, an AC symbol on the primary, "V_p ?" and "V_s ?" (v13: "How does a transformer exchange voltage for current?"). See "Final frame" and open decision 2.
- **Colour key:** as v10 and v11: the primary's current orange; its field slate; the secondary's induced emf, current and field rose; the iron core grey; motion arrows amber outline.
- **Site sources used:** lesson 15: opening DC versus AC observation (1, 3, 8); five-step mechanism (2, 3); "Why transformers need AC" and key insight (8); vocabulary "Primary coil", "Secondary coil", "Laminated iron core" (2, 9; lamination left to v14); extension table, key insight and HSC tip (9); "AC, switched DC and ideal limits" (3, 8); Activity 2's 12 V battery case (A1); "Analyse 6 marks" step 2 ("a steady DC current would produce a steady flux") (3, 5). Lesson 13: transformer and wireless-charging bridge (9, named only), the AC key insight (8), true/false "A transformer works with a steady (DC) current" (A1). Not used: turns ratios, V_pI_p = V_sI_s, the worked example, losses, efficiency, "Evaluate 6 marks" (v13, v14).
- **Site notes (quoted from site lessons 13 and 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Error (lesson 15, worked example "Transformer Calculations"; for v13): the problem says "The primary is connected to 230 V AC and draws 0.50 A", but the solution's givens use "$V_p = 240$ V" and give $V_s = 12$ V, $I_s = 10$ A, 120 W. With 230 V the results are 11.5 V, 10 A and 115 W (as the lesson's own Q1 model answer gives for the same transformer). Correction: make the problem and solution agree (either 240 V throughout, or 230 V with 11.5 V, 10 A, 115 W).
  2. Precision note (lesson 13, `connect-induction-contexts`, "Transformers"): "inducing an emf proportional to the turns ratio". The secondary emf is proportional to the number of secondary turns (for a given rate of change of flux); the ratio of the voltages equals the turns ratio. Suggest "inducing an emf in the secondary; the ratio of secondary to primary voltage equals the turns ratio (ideal transformer)".
  3. Error (lesson 15, `calculate-ideal-ratios`, interactive MC): "with 100 primary turns and 500 secondary turns. A 230 V input gives an output of: 48 V, 230 V, 1 200 V, 2 400 V". 230 × 500/100 = 1 150 V, which is not among the options (1 200 V would need a 240 V input). Correction: change the option to "1 150 V" or the input to 240 V.
  4. Checked and correct: Stop and Check (460 V, step-up); MC (100 V); Q1 (11.5 V, 10 A); Q2 (8000 turns, 50 A, 19.2 MW); "Analyse 6 marks" (1200 V, I_s = I_p/5).
- **Cause chain taught, in order:** (1) closing or opening a switch in one coil makes a meter on a separate coil flick; a steady current does nothing (1); (2) the primary's current makes a field, part of which passes through the secondary (2); (3) switching changes the primary current, so the secondary's flux linkage changes and an emf is induced; steady current, steady flux, no emf (3); (4) by Lenz's law the secondary's current opposes each change, so the flicks are opposite, and its energy comes from the primary's supply (4); (5) the emf appears only while the primary current changes (5); (6) Faraday's law gives its size (6); (7) moving an energised primary also changes the flux (7); (8) AC changes continuously, so the emf is continuous and alternating, largest when the current changes fastest (8); (9) iron makes the field stronger and guides it through the secondary, so far more flux links it (9).
- **Entry knowledge (route `entryKnowledge`):** v10's Faraday's law and flux linkage; v11's Lenz's law; Year 11: a current-carrying coil makes a field like a bar magnet's, soft iron is easily magnetised; AC and DC as currents that do and do not reverse.
- **Learner-visible vocabulary (plain meaning at first use):** primary coil (the coil connected to the supply, 2); secondary coil (the coil the emf is induced in, 2); mutual induction (an emf induced in one coil by a changing current in another, 3); alternating current, AC (current that keeps reversing direction, 8); soft iron (iron that is magnetised strongly and easily, 9); core (the iron the coils are wound on, 9).
- **Legacy logic ported:** none. The coded family `m6-transformer-grid` ("shared changing flux") supplies the closed-core schematic for the handoff only; its turns-ratio and power ledger parts are v13's.
- **New explainer motion:** **two-coil bench** (two coil plates on one axis; the primary's leads through the knife switch to the supply; the secondary's to the galvanometer with its needle layer; slate field lines from the primary growing, holding and collapsing with the current, some threading the secondary, with a flux counter at the secondary; rose secondary current dots; a coded "~" tag on the supply for AC); **aligned graphs** (`DataGraph` pair sharing a time axis: primary current above, secondary emf below, for switching and for AC, with a moving time cursor linked to the bench); **moving primary** (the energised primary slides along the axis by a coded motion arrow); **iron rod insert** (the soft-iron rod plate sliding through both bores, the field lines concentrating inside it); **closed-core schematic** (coded HSC-style square core with drawn windings); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the bench across the upper middle; graphs below or to the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) The primary current rises over a short time at switch on because of the coil's self-inductance (not taught; the narration says "it rises over a short time"). A low-voltage supply of a few volts and a coil of a few ohms is the approved set-up.
  (b) At switch off, breaking the circuit makes the primary current fall much faster than it rose, so the secondary's flick is usually larger and briefer; the narration says "often bigger".
  (c) AC phase: with ideal coupling and an unloaded secondary, Φ ∝ I_p, so ε_s = −N_s dΦ/dt ∝ −dI_p/dt: for I_p = I₀ sin ωt, ε_s ∝ −cos ωt, largest in magnitude when I_p = 0 and zero at the current's peaks. Loading the secondary changes the primary current's phase (v13, not here). The graphs use normalised axes, no values.
  (d) Relative movement: a steady primary current moved towards the secondary increases the flux linking it; the induced current opposes (the secondary's near end repels the approaching primary, as v11's coming-in case).
  (e) Pronunciations: "emf" letter by letter; "primary", "secondary"; "galvanometer"; "A C".
- **Open decisions for root:**
  - **1. AC phase surprise (learning review, science check).** Scene 8's "largest when the current passes through zero" is beyond the site's text but follows from Faraday's law and is a common exam discriminator. Keep (ideal, unloaded) or cut to "an alternating emf".
  - **2. Handoff core (root, v13 designer).** The final frame uses a coded HSC-style closed-core schematic. If v13 wants a painted transformer (the kit plan's `ph-transformer-core` raster family), the core can cross-fade to it in v13's first scene; this design requests no transformer plate.
  - **3. Site notes 1 and 3** belong to v13's sections of lesson 15; logged here because lesson 15 was read in full for this design.
Main question: *Close a switch in one coil, and a meter on a separate coil flicks, though nothing touches and nothing moves. How?*
Entry knowledge: Faraday's law, flux linkage (v10); Lenz's law (v11); electromagnets (Year 11).
Stops after: primary and secondary, switching versus steady DC, Lenz in the secondary, the graphs, a Faraday number, relative movement, AC, the iron core, "a transformer". No ratios.
Handoff: v13, how a transformer exchanges voltage for current.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *ε*, *N*, *ΔΦ*, *Δt*.

### 1. hook (switch on, hold, switch off)
> Here are two coils, side by side, not touching. The left one is connected to a low-voltage supply and a switch. The right one is connected only to the galvanometer. There's no magnet anywhere. Close the switch, and the needle **flicks**. Now keep the switch closed. What does the needle read? Make your **prediction**. Zero. It dropped straight back, and it stays **there**. Now open the switch. It flicks the other **way**. So how can one coil make an emf in another, without touching it?

Visual: opens on v11's final frame (see "Opening frame"); the chip becomes the heading: "How can one coil induce an emf in another without touching it?". On "not touching" the "no contact" bracket pulses. On "low-voltage supply and a switch" the supply and switch highlight; on "galvanometer" the meter highlights. On "flicks" the switch blade closes (it changes state; no hand), orange current dots start in the primary's leads, and the needle flicks right and returns. On "prediction" a 3 s `Countdown` beside chips "steady deflection" and "zero". On "there" the needle sits at zero with the current still flowing in the primary; the "zero" chip ticks; tag "steady current: needle at zero". On "way" the switch opens, the orange dots stop, and the needle flicks left and returns.

### 2. the primary's field reaches the secondary
> Start with the left coil, called the primary. A current in a coil makes a magnetic field, a lot like a bar magnet's. That's an electromagnet, from Year 11. Its field spreads out of the end, and some of it passes through the right-hand coil, called the **secondary**. So the secondary has a flux linkage, and it's made by the primary's **current**. Nothing touches. The field reaches across the **gap**.

Visual: labels "primary" (left) and "secondary" (right) write on. On "makes a magnetic field" the switch closes (no flick shown yet, the needle masked as a replay) and slate field lines loop out of the primary like a bar magnet's, with faint "N" and "S" tags at its ends. On "secondary" the lines that pass through the secondary brighten and a flux counter "Φ (secondary)" appears beside it. On "current" a chain strip under the bench writes "primary current → field → flux through the secondary". On "gap" the "no contact" bracket pulses as the field lines cross it.

### 3. why switching matters
> When you close the switch, the primary current doesn't reach its full value instantly. It rises over a short time. As it rises, its field grows, so the flux through the secondary grows. A changing flux linkage induces an emf, so the needle **flicks**. Once the current is steady, the field is steady, the flux stops changing, and the emf falls to **zero**. Open the switch, and the current falls to zero, so the flux falls, and an emf appears again, in the opposite **direction**. It's often bigger, because the current falls so quickly. This is called mutual induction. An emf is induced in one coil, by a changing current in **another**.

Visual: the switch reopens and the field fades; then on "When you close the switch" it closes again and the scene runs slowly: the orange current dots speed up over about a second (a small current gauge by the primary rising), the slate lines grow outwards and the secondary's flux counter rises. On "flicks" the needle flicks right while the counter is rising; the chain strip extends "→ changing → emf". On "zero" the gauge and counter hold; the needle returns to zero; tag "steady: no change, no emf". On "direction" the switch opens, the gauge and lines collapse, the counter falls, and the needle flicks left, further (author note b). On "another" a chip "mutual induction: an emf in one coil from a changing current in another".

### 4. Lenz's law in the secondary
> Lenz's law from last video tells us which way. At switch on, the secondary's current makes a field that opposes the growing flux from the primary. At switch off, it props up the flux that's **falling**. That's why the two flicks point opposite ways. And the energy for the secondary's current comes from the primary's power supply, carried across by the changing **field**.

Visual: the bench stays. On "At switch on" a ghost replay of switch on: the primary's slate field arrow along the axis points right; a rose arrow "induced B" in the secondary points left, tag "opposes the growth". On "falling" the switch-off replay: the primary's arrow shrinks; the rose arrow in the secondary points right, tag "props up the fall"; the two needle flicks shown side by side as small ghost dials (right, left). On "field" an energy strip: "supply (orange) → changing field (slate) → secondary circuit (rose)".

### 5. two graphs tell the story
> Here's the whole story on two graphs. On top, the primary current. It rises, stays steady, then falls. Below it, the emf in the secondary. It only appears where the top graph is **changing**. Where the current is steady, even if it's a large current, the secondary gets **nothing**.

Visual: the bench shrinks to the top; below it a pair of `DataGraph`s on one time axis: "primary current I_p" (rise over a short time, flat, fast fall) and "secondary emf ε_s" (a positive pulse during the rise, zero during the flat part, a larger negative pulse during the fall); a time cursor moves across both while the bench replays in step. On "changing" the two sloping parts of the top graph shade and the pulses below pulse. On "nothing" the flat part of the top graph and the zero line below highlight together, tag "steady I_p: ε_s = 0".

### 6. putting a size on it
> Faraday's law gives the size. Say the secondary has five hundred turns. At switch on, the flux through each of its turns rises from zero to four point zero times ten to the minus five webers, in zero point zero two zero seconds. The emf is five hundred, times four point zero times ten to the minus five, over zero point zero two zero. That's one point zero **volt**, but only for that brief **moment**.

Visual: board change to the working layout, the two coils small at the top left. Task strip: "Find the average emf in the secondary at switch on." Equation strip: "ε = −N ΔΦ / Δt (N: secondary turns)". Givens grouped: "N_s = 500 turns", "Φ per turn: 0 → 4.0 × 10⁻⁵ Wb", "Δt = 0.020 s" (tag "example values"). On "volt" `AlignedAlgebra` "|ε| = 500 × 4.0 × 10⁻⁵ / 0.020 = 1.0 V". On "moment" the emf graph's first pulse returns small beside it, labelled "1.0 V for about 0.020 s".

### 7. moving the primary
> You don't even need the switch. Keep a steady current in the primary, and slide it towards the secondary. Now the primary acts just like a moving bar magnet. The flux through the secondary changes, so the needle **moves**. Stop sliding, and it's back to **zero**. That's relative movement, the same idea as last time's magnet.

Visual: board change back to the bench, switch closed, steady orange dots in the primary. On "slide it towards the secondary" a coded amber motion arrow pushes the primary (with its leads stretching) towards the secondary; the flux counter rises. On "moves" the needle swings right and stays deflected while the primary moves. On "zero" the motion arrow disappears, the primary stops a short distance from the secondary, the counter holds and the needle returns to zero. On "relative movement" a chip "relative movement of an energised coil: changing Φ → emf".

### 8. alternating current
> So for an emf all the time, the primary current must keep changing. That's exactly what alternating current does. It rises, falls, reverses and rises again, many times a **second**. So the secondary gets an emf that alternates too. And here's a surprise. The secondary's emf is biggest when the primary current is passing through zero, because that's when the current is changing **fastest**. When the primary current is at its peak, it's not changing for an instant, so the secondary emf is **zero**.

Visual: the supply gets a coded "~ AC" tag; the knife switch closes and stays closed. The graph pair returns below the bench, now with the primary current a sine wave and the secondary emf below it (author note c); the slate field lines at the bench grow, shrink, reverse and grow in step with a time cursor; the needle swings back and forth. On "second" the waves extend across several cycles. On "fastest" the cursor stops where the current crosses zero: a tangent line on the current graph at its steepest, and the emf graph at its peak (tag "steepest I_p → largest ε_s"). On "zero" the cursor moves to the current's peak: a flat tangent, and the emf graph crossing zero (tag "I_p at its peak: not changing → ε_s = 0").

### 9. an iron core
> Most of the primary's field spreads into the air and misses the secondary. Now slide a soft iron rod through both coils. The iron becomes strongly magnetised, so the field is much stronger, and the iron guides it through the secondary. Far more flux links the secondary, so the emf is much **bigger**. The coils still never touch. The iron only carries the **field**. Wind both coils on one closed loop of iron, and almost all of the flux links both of them. That's a **transformer**.

Visual: on "spreads into the air" most of the slate lines from the primary loop back without reaching the secondary (tag "air: weak coupling, but still induction"). On "slide a soft iron rod" the soft-iron rod plate (`phys-y11-rod-soft-iron-v1.png`) slides through both coils' bores along the axis, pushed by a coded motion arrow. On "much stronger" many more slate lines, concentrated inside the rod, run through both coils; the secondary's flux counter jumps; on "bigger" the needle swings much further with the AC. On "field" the "no contact" brackets at both coils' ends pulse, tag "iron carries the field, not the current". On "transformer" the bench cross-fades to a coded HSC-style closed square core: the primary winding on the left limb, the secondary on the right, slate flux arrows circulating round the core; chip "transformer: two coils on one closed iron core".

### 10. a way to remember
> Here's a way to remember it. Steady current, no emf. Changing current, induced emf. A transformer only works while the current keeps **changing**.

Visual: board clears to the two graphs side by side: a flat current line over a zero emf line; a sine current over an alternating emf. On "Steady current, no emf" the left pair pulses; on "Changing current, induced emf" the right pair pulses. On "changing" the handwritten line writes large above: "Steady current, no emf. Changing current, induced emf." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A primary coil is connected through a switch to a twelve volt battery. A secondary coil nearby is connected to a galvanometer. Describe the galvanometer reading when the switch is closed, while it stays closed for several seconds, and when it's opened. Explain each one. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A primary coil is connected in series with a switch and a 12 V battery. A secondary coil, placed beside the primary but not connected to it, is connected to a centre-zero galvanometer. Describe and explain the galvanometer reading (a) as the switch is closed, (b) while the switch remains closed for several seconds, (c) as the switch is opened. (3 marks)" A small coded diagram: two coils side by side, a battery symbol and switch on the left coil, a galvanometer symbol on the right. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Closing the switch, the current and its field grow, so the flux through the secondary changes, and the needle flicks **briefly**. With the switch closed, the current is steady, so the flux is steady, and the reading is **zero**. Opening it, the flux falls, and the needle flicks the opposite **way**. The classic slip is a steady reading while the switch is closed. Steady current, no **emf**.

Visual: card shrinks to the top; "closed", "remains closed" and "opened" underline. On "briefly" "(a) brief deflection: growing I_p → changing Φ → ε". On "zero" "(b) zero: steady I_p → steady Φ → no ε". On "way" "(c) brief deflection the opposite way: falling Φ (Lenz)". On "emf" a chip "steady deflection while closed" fades in and is crossed (caption "steady current, no emf"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A primary coil of one hundred turns sits beside a secondary coil of two hundred and fifty turns. When the primary is switched off, the flux through each turn of the secondary falls from six point zero times ten to the minus four webers to zero, in zero point zero three zero seconds. Calculate the average emf induced in the secondary. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A primary coil of 100 turns is placed beside a secondary coil of 250 turns. When the current in the primary is switched off, the magnetic flux through each turn of the secondary falls uniformly from 6.0 × 10⁻⁴ Wb to zero in 0.030 s. Calculate the magnitude of the average emf induced in the secondary coil. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Use the secondary's turns, because that's where the emf is induced. Two hundred and fifty, times six point zero times ten to the minus four, over zero point zero three zero, gives five point zero **volts**. The slip is using the primary's one hundred turns, which gives two point zero volts. N is always the coil the emf is **in**.

Visual: card shrinks to the top; "secondary coil of 250 turns" and "each turn of the secondary" underline. On "volts" `AlignedAlgebra` "|ε| = N_s ΔΦ / Δt = 250 × 6.0 × 10⁻⁴ / 0.030 = 5.0 V". On "in" a chip "ε = 100 × 6.0 × 10⁻⁴ / 0.030 = 2.0 V" fades in and is crossed (caption "N: turns of the coil the emf is in"). Hold about 1 second.

### 15. handoff
> So a changing current in one coil induces an emf in another, through a changing flux they share. On a closed iron core, nearly all of that flux links both coils. So what if the two coils have different numbers of turns? How does a transformer exchange voltage for **current**?

Visual: board clears (camera change) to the closed-core schematic from scene 9, larger: the primary winding on the left limb with fewer drawn turns, labelled "N_p", connected to a coded AC source symbol "~"; the secondary winding on the right limb with more drawn turns, "N_s", connected to a coded lamp symbol; slate flux arrows circulating round the core. On "different numbers of turns" the drawn turns on each limb pulse in turn. On "voltage" labels "V_p ?" and "V_s ?" appear at the two windings; on "current" labels "I_p ?" and "I_s ?" appear, and a chip "Next: how does a transformer exchange voltage for current?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Mutual induction: a changing current in the primary coil changes the flux linking the secondary coil, which induces an emf in the secondary (ε = −N_s ΔΦ/Δt). No contact is needed; the field carries the change.
2. Switch on: brief emf. Steady DC: no emf. Switch off: brief emf the opposite way (Lenz's law).
3. Moving an energised primary relative to the secondary also induces an emf.
4. AC changes continuously, so the secondary emf alternates. The emf is largest when the primary current changes fastest.
5. A soft-iron core concentrates the field and links far more flux. Two coils on one closed core: a transformer.

Memory aid (large, on the notes screen): *Steady current, no emf. Changing current, induced emf.*

## Teaching checks

- **Does it explain causes?** Why there is any emf: the primary's field links the secondary and its change induces an emf (2, 3). Why steady DC gives none (3, 5). Why the flicks are opposite: Lenz's law (4). Why AC works continuously, and why the emf peaks as the current crosses zero (8). Why iron helps: stronger, guided field (9).
- **Misconceptions addressed:** a steady current induces a steady emf (1, 3, 12 crossed); a transformer works on DC (5, 10); current flows across the gap or through the iron (2, 9); the emf follows the current's size rather than its rate of change (8); using the wrong coil's N (14, crossed); no core means no induction (9, the site's HSC tip).
- **One idea at a time:** observation (1), the field link (2), the change (3), direction and energy (4), graphs (5), size (6), movement (7), AC (8), iron (9).
- **Video makes it easier:** the needle flicking and resting while the primary current flows (1); field lines growing and collapsing with a flux counter (2, 3); the aligned graphs with a moving cursor (5, 8); tangent lines at zero crossings and peaks (8); field lines concentrating in the rod (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 24 s.
- **Avoided double teaching:** Faraday's law and flux linkage (v10) and Lenz's law (v11) recalled; electromagnets (Year 11) in a clause.
- **Syllabus coverage:** `P6-IQ3-02`: "the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid" (1 to 9), with energy transfer (4) and Lenz's law evidence (4).
- **Out of scope by design:** turns ratios and V_pI_p = V_sI_s (v13), losses and lamination (v14), transmission (v15).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A primary coil is connected in series with a switch and a 12 V battery. A secondary coil, placed beside the primary but not connected to it, is connected to a centre-zero galvanometer. Describe and explain the galvanometer reading (a) as the switch is closed, (b) while the switch remains closed for several seconds, (c) as the switch is opened."
Model answer: (a) A brief deflection: the primary current and its field grow, so the flux linking the secondary changes and an emf is induced (Faraday's law). (b) Zero: the current is steady, so the flux is constant and no emf is induced. (c) A brief deflection in the opposite direction: the flux decreases, and by Lenz's law the induced current now opposes a decrease. Classic mistake (crossed): "a steady deflection while the switch is closed".

**Attempt 2 (scene 13; original wording, HSC style, 2 marks).** "A primary coil of 100 turns is placed beside a secondary coil of 250 turns. When the current in the primary is switched off, the magnetic flux through each turn of the secondary falls uniformly from 6.0 × 10⁻⁴ Wb to zero in 0.030 s. Calculate the magnitude of the average emf induced in the secondary coil."
Model answer: |ε| = N_s ΔΦ/Δt = 250 × 6.0 × 10⁻⁴ / 0.030 = 5.0 V. Classic mistake (crossed): using the primary's 100 turns (2.0 V).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Switch-on example (original) | N_s = 500, ΔΦ = 4.0 × 10⁻⁵ Wb, Δt = 0.020 s: 1.0 V | 6 |
| A1 | 12 V battery; qualitative | 11, 12 |
| A2 | 250 × 6.0 × 10⁻⁴ / 0.030 = 5.0 V; slip 100 × 6.0 × 10⁻⁴ / 0.030 = 2.0 V | 13, 14 |
| AC phase | ε_s ∝ −dI_p/dt (normalised graphs, no values) | 8 |
| Site checks (lesson 15, for v13) | 230 × 800/400 = 460 V; 20 × 500/100 = 100 V; 230 × 500/100 = 1 150 V; 230 × 60/1200 = 11.5 V; 230 × 0.50 / 11.5 = 10 A; 240 × 60/1200 = 12 V; 500 × 400/25 = 8000; 20 MW / 400 kV = 50 A; 0.96 × 20 = 19.2 MW | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 500 × 4.0 × 10⁻⁵ / 0.020 = 1.0.
- 250 × 6.0 × 10⁻⁴ / 0.030 = 5.0; 100 × 6.0 × 10⁻⁴ / 0.030 = 2.0.
- Site note 1: 230 × 60 / 1200 = 11.5; 230 × 0.50 = 115 W; 115 / 11.5 = 10 A; 240 × 60 / 1200 = 12; 240 × 0.50 = 120 W.
- Site note 3: 230 × 500 / 100 = 1 150 V; 240 × 500 / 100 = 1 200 V.

## Memory aid check

- **"Steady current, no emf. Changing current, induced emf."** Meaning, as said in scene 10: in mutual induction an emf is induced in the secondary only while the primary current (and so the shared flux) is changing; a transformer needs a continuously changing current such as AC. Assumptions checked: the coils are stationary relative to each other (relative movement with a steady current also induces an emf, scene 7, so the aid covers the switch and AC cases, and scene 7 is the stated exception); "changing" includes switching on and off; the emf exists without a closed secondary circuit. It helps a new case: A1, a battery-powered transformer (no output after the switching moment), and v13's AC requirement. It extends v10's "No change, no emf". Introduced after the explanation (3 to 9).
- **Considered, not used:** "Transformers eat change" (vivid but vague).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,673 characters**, 16 scenes. Characters per scene (1 to 16): 473, 390, 623, 365, 274, 395, 318, 489, 472, 142, 303, 377, 367, 323, 272, 75. At 13.3 characters per second the speech is about 427 s; add about 3 s for the prediction countdown, 2 s for the slow switch-on replay, 2 s for the AC cycles, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 88 s of holds and countdowns): **about 515 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's phase surprise (open decision 1); scene 7's last sentence; scene 3's "often bigger" sentence.

## Opening frame

v11's final frame (designed in this wave, `phys-y12-m6-v11.md`): paper background; a bench line; at the left a coil plate (the primary) with coded leads to an open knife switch and the low-voltage supply; at the right, in line with it and a small gap away, the first coil with coded leads to the galvanometer, needle at zero; a navy bracket across the gap "no contact"; a "?" over the gap; heading "Why does the induced current oppose the flux change?"; chip "Next: how can one coil induce an emf in another without touching it?". Scene 1 turns the chip into the heading and removes the "?".

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a coded HSC-style closed square soft-iron core (grey), the primary winding on its left limb with fewer drawn turns, labelled "N_p", joined to a coded AC source "~"; the secondary winding on its right limb with more drawn turns, "N_s", joined to a coded lamp; slate flux arrows circulating round the core; labels "V_p ?", "V_s ?", "I_p ?", "I_s ?"; heading unchanged ("How can one coil induce an emf in another without touching it?"); a chip reads "Next: how does a transformer exchange voltage for current?". No values. v13 opens on this frame (open decision 2).

## Scene list and build ids

Lesson key `p-y12-m6-v12` (route phys-y12-m6-v12). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v12` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v12` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, primary-field, switching, lenz-secondary, two-graphs, size, moving-primary, alternating-current, iron-core, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: two-coil bench (field lines linked to the primary current, flux counter, needle layer, current dots), aligned graphs with a time cursor and tangents, moving primary, iron rod insert, closed-core schematic, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 camera continue (same bench); 4 to 5 camera continue (bench shrinks above the graphs); 5 to 6 clear change; 6 to 7 clear change back to the bench; 7 to 8 camera continue; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v12-learning-review.md`, `science_check` = `checks/p-y12-m6-v12-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-solenoid-coil-v1.png` (1774 × 887, RGBA): primary and secondary (1 to 9). Use `phys-y11-solenoid-coil-wide-v1.png` (same canvas, wider bore) for both if the soft-iron rod must pass through at a readable scale (build check).
- `public/assets/physics/phys-y11-knife-switch-v1.png` and `phys-y11-knife-switch-blade-v1.png`: the switch (1 to 3, 7, 8).
- `public/assets/physics/phys-y11-low-voltage-supply-v1.png`: the supply (1 to 9), with a coded "~ AC" tag in 8 and 9.
- `public/assets/physics/phys-y11-rod-soft-iron-v1.png` (2172 × 724, RGBA): the iron core rod (9).
- **Checked, not used:** `phys-y11-coil-former-v1.png` (an unwound former; the coils are already wound); `phys-y11-iron-nail-v1.png` (too small to pass through both coils); `phys-y11-retort-stand-electromagnet-v1.png` (one coil on a stand; the scene needs two coils on one axis).

Need (new plates, requested and specified in `phys-y12-m6-v10.md`'s asset brief, not requested twice):
1. `y12p-galvanometer-v1.png` and `y12p-galvanometer-needle-v1.png`: 1 to 9.

Coded: leads, current dots, the current gauge, field lines, flux counter, induced-field arrows, the energy strip, graphs with cursor and tangents, motion arrows, the closed-core schematic with windings, AC source and lamp symbols, the battery and galvanometer symbols on the attempt card, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v12 build brief):
1. **Two-coil bench.** Field lines from the primary whose extent follows a driven primary current (switch on, steady, switch off, AC), a flux counter at the secondary, the galvanometer needle driven by the rate of change.
2. **Aligned graphs with cursor and tangents.** A `DataGraph` pair sharing a time axis, a moving cursor linked to the bench, and tangent lines at chosen times.
3. **Closed-core schematic.** Extend `m6-transformer-grid`'s core with drawn windings, circulating flux arrows and placeholder labels.

## Codex asset brief

No new plates for v12. The galvanometer plates are specified in `phys-y12-m6-v10.md`. Confirm at build time that the soft-iron rod plate fits through both coil bores at one uniform scale (use the wide-bore coil plate if needed).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: switch-on, steady and switch-off readings; the primary current rising over a short time; the often-larger switch-off flick (author note b); Lenz's law directions in the secondary; energy from the primary's supply; the aligned graphs; Faraday's law with the secondary's turns; relative movement; the AC phase statement (author note c, ideal and unloaded); the soft-iron core; "two coils on one closed core: a transformer".
3. Confirm the 1.0 V example is tagged "example values".
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the switch changes state; motions are coded arrows).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1, 2 and 3 under Decisions to root.

## YouTube metadata (draft)

Title: Mutual Induction: How One Coil Induces an EMF in Another | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson15.sa.html

Close a switch in one coil, and a meter on a completely separate coil flicks, though nothing touches. See how the primary's changing field links the secondary, why a steady current does nothing, why switching on and off gives opposite flicks, why AC gives a continuous emf (and when that emf is largest), and why an iron core makes the coupling so much stronger. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse qualitatively and quantitatively, with reference to energy transfers and transformations, examples of Faraday’s Law and Lenz’s Law ε = −N ΔΦ/Δt, including but not limited to: the generation of an electromotive force (emf) and evidence for Lenz’s Law produced by the relative movement between a magnet, straight conductors, metal plates and solenoids; the generation of an emf produced by the relative movement or changes in current in one solenoid in the vicinity of another solenoid"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: Lenz's law. Next: how a transformer exchanges voltage for current.

#HSCPhysics #Physics #MutualInduction #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10 and v11; check that the needle resting while the primary current flows lands as the surprise; that the aligned graphs are read at speed; that the AC phase point helps rather than overloads; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The field lines growing and collapsing with the switch, the cursor over the aligned graphs and the field concentrating in the iron carry the explanation; judge them at playback speed in the voiced preview.
