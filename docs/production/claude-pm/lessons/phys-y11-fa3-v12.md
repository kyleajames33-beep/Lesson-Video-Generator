# Year 11 Physics FA3 V12 (Physics 2025, Year 11, Focus Area 3): Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v12`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (an Australian wall power point); two reused requests (the bench supply, delivered; the filament lamp, requested in FA2).

Narration 5,563 characters, 17 scenes, about 520 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: two syllabus points, fully taught; not padded.

Scope: twelfth video of the Year 11 Physics (2025) Focus Area 3 route: free electrons in a metal and their random motion; how an external voltage sets up a field in the wire that gives the free electrons a net drift (the current); the slow drift and the near-instant start; direct current; alternating current, the 50 Hz mains and its reversals; why AC still transfers energy; a comparison of DC and AC. Templates: `phys-y11-fa1-v22.md` (concept format) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions, section list and colour key from `phys-y11-fa3-v04.md` to `phys-y11-fa3-v06.md`, `phys-y11-fa3-v10.md` and `phys-y11-fa3-v11.md` (Revision 1; v11's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson12.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 why electrons flow, true or false, card 2 comparing DC and AC with its figure description, quick check, activity 1, match the pairs, card 3 voltage drives the current with `we-1`, last check, odd one out, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 12 (a conventional-current hook that belongs to lesson 11; logged in `phys-y11-fa3-v11.md`, site correction 3; not used here, see "Memory aid check"). Route entry: `phys-y11-fa3-v12` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Conductors, DC and AC. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply conductors, dc and ac? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v13: How can I explain and apply resistance and its factors?" (this design proposes "Why does a bigger voltage push more charge through the same wire each second, and what holds the electrons back?" for v13's chip; see open decision 1).

**Opening frame (v11's actual handoff, Revision 1, 3 Nov).** v11's scene 17 ends with the memory line "Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus." small at the top; a close-up of a short length of copper wire with no cell: a coded lattice of pale grey ions, each with a small red "+", and navy "−" free electrons darting in random directions; a dashed gate across the wire reading "net flow: 0"; two loose wire ends with "+" and "−" terminal markers hovering beside the wire, not joined; chips "what does the voltage change?" and "and if it keeps reversing?"; chip "Next: Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the switch closes by code; no one plugs anything in); the bench supply, the wall power point and the filament lamp painted (apparatus); the wire's lattice, electrons, fields, current-time graphs and the comparison table coded (abstract diagrams); one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v01 (free electrons in conductors), v03 (field lines), v05 (F = qE; a negative charge is pushed against the field), v10 (a voltage gives each coulomb energy), v11 (I = q/t; electron flow and conventional current; current not used up) and FA2 v03 (frequency and period, f = 1/T) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G2-03 `cidd4209b2`: "Explain why electrons flow through a metallic conductor when connected to an external voltage"
- P25-FA3-G2-04 `ci95fddf87`: "Compare direct current (DC) and alternating current (AC)"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v11's handoff (above); the hook (free electrons but no current: does a cell add electrons or push the ones there?); free electrons and the ion lattice; random motion with no net flow; the external voltage sets up a field along the wire, F = qE on every free electron, a net drift towards the positive terminal (the current); the cell adds no electrons (site warm-up); slow drift and the near-instant start (site misconception 1); DC (steady one way, flat current-time graph, cells and batteries); AC (repeated reversals, a current-time wave crossing zero, the mains); 50 Hz and 100 reversals per second (prediction; site correction 1); energy is transferred either way (site misconception 2); the comparison (similarities and differences); memory aid; two attempts. Stops at the cause of electron drift and the DC/AC comparison. Not taught: how the size of the current depends on the voltage (site card 3 and `we-1`, I ∝ V: v13 owns `cif8293068`); collisions as resistance (v13, a grey tag only); peak and rms values; generators and how AC is made (later focus areas); drift speed calculations.

## Decisions

- **Learner question (v11's proposal adopted; route placeholder rewritten).** "Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?" One causal question carrying both syllabus verbs: "why" asks for the field mechanism (`cidd4209b2`), and "how is AC different" asks for the comparison (`ci95fddf87`). Answer, built in order: hook and prediction (1); free electrons (2); the field and the drift (3); slow drift, instant start (4); DC (5); AC (6); 50 Hz (7, 8); energy either way (9); the comparison (10); memory aid (11).
- **The mechanism made visible (owner quality bar).** **`ConductorLattice`** (new): a coded slab of wire with pale grey ions (small red "+") in a regular lattice and navy free electrons in fast random motion; a dashed gate counts left and right crossings ("left 37, right 37: net 0"). When the cell connects, teal field arrows appear along the wire from the "+" end to the "−" end (v03, v07 style), every electron gets a small amber force arrow against the field (v05), and a slow common drift is added to the random motion (drift exaggerated, tag "drift sped up to see it"); the gate's net count ticks steadily. The electron count in the slab stays constant while dots leave one end and enter the other.
- **Slow drift, instant start (site misconception 1; site Q2).** A side panel: a 1 m coded wire with one tracked electron and a timer ("drift: less than 1 mm per second", "1 m: hours"), then the field arrows switching on along the whole wire at once and every electron, including those in the lamp filament, starting together. The marble-filled tube analogy (one marble in, one out at once) is drawn as a coded tube of grey marbles (author note c, "Memory aid check").
- **DC and AC (`ci95fddf87`).** DC: the painted bench supply (`phys-y11-low-voltage-supply-v1.png`, delivered) connected to the painted lamp (`phys-y11-filament-lamp-v1.png`, FA2 request) by coded leads; field arrows always one way; a coded current-time graph traces a flat line above zero. AC: the painted wall power point (`phys-y11-power-point-v1.png`, new) feeding the same lamp (coded lead; no plug-in action); the lattice's field arrows flip, the drift reverses, and the electrons shuffle about the same places; the current-time graph traces a wave crossing zero. The supply's red terminal is its positive terminal, which matches the colour key; the lamp is the same plate in both, so the comparison is fair.
- **Prediction 2 (3 s, scene 7): 50 Hz.** "Fifty cycles a second: how many direction changes each second?" Chips "50?", "100?". Answered in 8 on the AC graph: two zero crossings, so two reversals, per cycle; 100 per second; period 0.020 s (f = 1/T recalled from FA2 v03, tag "from the waves videos"). This corrects site lesson 12's hook (site correction 1) and sets up A2 (c).
- **Energy either way (site misconception 2).** On the AC lattice, the filament's ions jiggle harder (coded vibration and warm glow) whenever charge is pushed through, in either direction; a hollow gold energy arrow (FA2 root decision 3) leaves the lamp throughout, dimming briefly at each zero crossing (the 100 Hz flicker is not said; author note e). Recalls v10 in a phrase: the field does work on the charge as it is pushed through the lamp, whichever way it goes.
- **The comparison (syllabus verb "compare").** A coded two-column table builds row by row with "same" and "different" headers: same (a flow of charge, driven by a voltage; transfers energy); different (direction: one way or reversing; size: steady or changing; graph: flat line or wave crossing zero; sources: cells, batteries and solar cells, or the mains and power-station generators).
- **Attempts (original, HSC style).** (A1, explain) "A length of copper wire is connected across the terminals of a battery. (a) Explain why the free electrons in the wire flow when the battery is connected, but not before. (b) State the direction in which the electrons drift along the wire. (3 marks)" Answer: random motion, no net flow; the voltage sets up a field along the wire; the force on each electron (opposite the field, as they are negative) gives a net drift; towards the positive terminal. Crossed: "the battery supplies the electrons that flow". (A2, compare) coded graphs P (current 0.50 A, constant, 0 to 40 ms) and Q (a sine wave between +0.70 A and −0.70 A, two full cycles in 40 ms). "Graphs P and Q show the current in two different circuits over the same time interval. (a) Identify which graph shows alternating current, and justify your choice. (b) State one similarity between the two currents. (c) Use graph Q to determine how many times each second the current in circuit Q reverses direction. (3 marks)" Answer: Q, because it changes sign (reverses); both are flows of charge that transfer energy (or both driven by a voltage); period 20 ms, so 50 cycles per second and 100 reversals per second. Crossed: "(c) 50 times".
- **Mistake scene:** none separate. "The battery adds electrons" (1, 3, feedback 1 crossed; site warm-up); "electrons race round the circuit" (4; site misconception 1); "AC delivers no energy because the electrons go nowhere" (9; site misconception 2); "50 Hz means 50 reversals a second" (7, 8, feedback 2 crossed; site correction 1).
- **Memory aid:** "Direct goes one way. Alternating goes back and forth. Either way, the voltage pushes electrons already in the wire." (see "Memory aid check").
- **Handoff (route next; proposal for v13's question).** Board change: the DC lattice returns, the bench supply's knob as a coded voltage dial ("V"); drifting electrons now and then strike an ion, which jiggles (small grey flash); the gate's readout "coulombs per second?"; on "turn up the voltage" the dial turns a notch and the field arrows lengthen, with a dashed "?" on the drift; chips "more voltage, more current?" and "what holds them back?"; then "Next: Why does a bigger voltage push more charge through the same wire each second, and what holds the electrons back?". This is the frame v13 opens on. No proportionality is stated (v13 owns it).
- **Site sources used:** intro (random drifting electrons; a field nudges them; DC and AC both deliver energy: 2, 3, 9); hook (the mains reverses: 7, 8, with correction 1); warm-up (free electrons yet no current: 1, 3); intentions (Know 1 to 3: 2, 3, 10; Understand 1 and 3: 3, 9; Understand 2 and Can Do 3, I ∝ V: not used, v13; Can Do 1 and 2: 3, 10, A1, A2); key terms (free electrons, drift, DC, AC: 2, 3, 5, 6); misconceptions 1 and 2 (4, 9); card 1 (2, 3); true or false (3); card 2 and its figure (5, 6, 10); quick check (B: 6); activity 1 (graphs and a table: 10, A2); match the pairs (2, 3); card 3, `we-1`, last check (I ∝ V: not used, handed to v13); odd one out (C, the mains: 10); Q1 (A1 structure, in part); Q2 (4); Q3 (10).
- **Site corrections (quoted from site lesson 12, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Hook: "The mains current in your wall reverses direction 50 times a second". At 50 Hz the current completes 50 cycles each second and reverses twice per cycle, so it reverses 100 times a second (the lesson's own Q3 answer says it passes "through zero twice in every cycle"). Suggest: "reverses direction 100 times a second (50 full cycles)".
  2. Card 3 ("Voltage Drives the Current", I ∝ V at constant resistance), `we-1` and the last check sit under the dot-point line "Dot point: Compare direct current (DC) and alternating current (AC)", but they teach `cif8293068` ("Relate voltage to electron flow in a circuit of constant resistance"), which the route gives to lesson 13. Suggest moving card 3 and `we-1` to lesson 13, or relabelling the dot point.
  3. `we-1`, final step: "AC: $I = I_0\sin(2\pi f t)$" after "if that $15\ \text{V}$ were supplied as AC". The question does not say whether 15 V is the peak or the rms value, and the sine expression is outside the Year 11 point. Suggest: "if the supply were AC with a peak of 15 V, the current would swing between +1.0 A and −1.0 A" and drop the sine formula.
  - Checked and correct: card 1 mechanism; card 2 and its figure; quick check (B); odd one out (C); match the pairs; Q1 and Q3 model answers; Q2 (drift a fraction of a millimetre per second; the field is set up almost at once); misconceptions.
- **Cause chain taught, in order:** (1) free electrons but no current: what does the cell change? (1); (2) free electrons move randomly, so no net flow (2); (3) the voltage sets up a field along the wire; the force on every electron, against the field, adds a common drift towards the positive terminal: that is the current; no electrons are added (3); (4) the drift is slow, but the field reaches the whole wire at once, so every electron starts together (4); (5) a cell's terminals keep their signs, so the drift is one way: DC (5); (6) if the terminals keep swapping, the field and the drift reverse: AC (6); (7) two reversals per cycle, so 50 Hz gives 100 reversals a second (7, 8); (8) energy is transferred whenever charge is pushed through the lamp, either way (9); (9) the same and the different (10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v01 (conductors have free electrons; insulators do not), v03 (field lines), v05 (F = qE; the force on a negative charge is opposite to the field), v10 (a voltage gives each coulomb energy), v11 (I = q/t; electrons drift from − to +; current is not used up), FA2 v03 (f = 1/T), each recalled in a phrase; Stage 5 Science (metals conduct; simple circuits); Year 11 Chemistry is not assumed (the lattice is explained in a sentence).
- **Learner-visible vocabulary (plain meaning at first use):** free (delocalised) electrons (outer electrons not tied to any one atom, free to move through the metal, 2); lattice (the regular arrangement of positive ions in the metal, 2); drift (the slow shared movement added to the random motion, 3); direct current, DC (current in one direction only, 5); alternating current, AC (current that keeps reversing direction, 6); hertz, Hz (cycles per second, 7, recalled from FA2); current-time graph (5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`ConductorLattice`** (new: ion lattice, random electron motion, optional drift and field arrows, a crossing gate with left, right and net counts); v03's **`FieldLines`** styled as arrows inside the wire; v05's per-charge **force arrows**; **slow-drift panel** (a 1 m wire with a tracked electron and a timer); **marble tube** (a coded tube of grey marbles); **`CurrentTimeGraph`** (new: a live trace of I against t with a zero line, drawing a flat DC line or a sine wave in step with the lattice's drift; zero crossings marked); FA2's hollow gold energy arrow; **filament jiggle overlay** (vibrating ion dots and a warm glow on the lamp plate's filament, sidecar points); **comparison table** (two columns, "same" and "different" rows); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v11 (positive red "+", electrons navy "−", signs always printed); the field inside the wire teal; forces on electrons amber with a dark ink outline; conventional current bold ink "I" where shown, electron flow navy dotted (v11, open decision 2 there); ions pale grey with a small red "+"; graph traces ink on a light grid with the zero line grey; energy arrow hollow gold; crossed items grey scribble; the power point plain white and the supply as delivered.
- **Board layout (constant):** heading top-left; the wire (or the apparatus) in the left 60 per cent; the graph and the table in the right column.
- **No human figures.** None; leads are already connected when each source appears; switches close by code.
- **Author notes (not learner copy):**
  (a) Free-electron speeds: random speeds in copper are about 10⁶ m s⁻¹ (quantum, Fermi speed); "fast" is all that is said. Drift: for 1 A in a 1.0 mm² copper wire, v = I/(nAe) = 1 ÷ (8.5 × 10²⁸ × 1.0 × 10⁻⁶ × 1.6 × 10⁻¹⁹) ≈ 7.4 × 10⁻⁵ m s⁻¹, about 0.07 mm per second; 1 m takes about 3.8 hours. "Less than a millimetre per second" and "hours to cross a metre" are both true for typical currents.
  (b) The field in a current-carrying wire is set up by surface charges once the circuit closes; the change spreads at a large fraction of the speed of light. "Almost instantly" is the claim.
  (c) Marble tube analogy: true for "the effect at the far end starts at once, though each marble moves only a little"; it is not a model of the field or of resistance. Used once, after the field explanation.
  (d) "Terminals keep swapping": a teaching model of an AC supply (the active terminal's potential alternates relative to neutral). The power point is shown, not explained; no wiring, earth or 230 V is mentioned.
  (e) A filament lamp on 50 Hz AC: the power dips to zero 100 times a second; the filament's thermal inertia hides most flicker. Not said.
  (f) A2's graph Q is drawn with a 0.70 A peak for clarity; no rms is implied. P at 0.50 A.
  (g) Pronunciations: "delocalised" (dee-LOH-kuh-lysed); "hertz"; "point oh two oh seconds".

Main question: *A copper wire is full of free electrons, yet no current flows until a cell is connected. Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?*
Entry knowledge (v01 free electrons; v03 field lines; v05 F = qE; v10 energy per coulomb; v11 current and electron flow; FA2 v03 f = 1/T).
Stops after: random motion and no net flow; the field and the drift; slow drift and the instant start; DC and AC with graphs and sources; 100 reversals a second at 50 Hz; energy either way; the comparison. No I ∝ V, no resistance, no peak or rms values.
Handoff: v13, voltage and electron flow in a wire of constant resistance.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v11.

### 1. hook (does the cell add electrons?)
> Here's that copper wire, close up. It's packed with free electrons, all moving fast, in every direction. But count them crossing this line. As many go left as go right, so there's no current. Now connect a cell, and a current flows. So what does the cell do? Does it pour extra electrons into the wire, or push the ones already **there**?

Visual: opens on v11's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Why electrons flow in a wire"; the memory line fades. `ConductorLattice` runs; on "count them crossing this line" the gate's counts tick: "left 37, right 37: net 0". On "connect a cell" the two loose ends join the wire's ends (the "+" end at the right, the "−" end at the left); the counts freeze. On "there" chips "adds electrons?" and "pushes the ones there?" and a 3-second countdown ring.

### 2. free electrons, going nowhere
> First, why are there free electrons at all? A metal is a regular lattice of positive ions. Some of each atom's outer electrons aren't tied to any one atom. These free electrons wander through the whole metal. They move fast, but randomly, bouncing in every direction. So on average, none of them gets anywhere. With no net flow of charge, a wire on its own carries no **current**.

Visual: camera continue; the join is undone for this scene (tag "before connecting"). On "regular lattice of positive ions" the ions brighten (gloss "lattice: the regular arrangement of ions"); on "aren't tied to any one atom" one electron's path is traced as it passes several ions (gloss "free (delocalised) electrons"). On "bouncing in every direction" three electrons get short trails that zigzag randomly. On "none of them gets anywhere" an average-position marker for the group stays still; the gate reads "net 0". On "current" the row "random motion: no net flow, no current", boxed.

### 3. the voltage sets up a field
> Now connect the cell. The voltage between its terminals sets up an electric field all along the wire, pointing from the positive end to the negative end. Every free electron feels a force, F equals q E. Electrons are negative, so each force points against the field, towards the positive terminal. They still jiggle randomly, but now they all drift the same way, slowly. That shared drift is the current. And as many electrons leave one end of the wire as enter the other. So the cell doesn't add any electrons. It pushes the ones already **there**.

Visual: the ends rejoin the cell. On "sets up an electric field" teal field arrows appear along the whole wire, pointing from the "+" end to the "−" end (right to left), all at once. On "F equals q E" a small amber arrow on every electron, pointing against the field (gloss "negative: force against the field", tag "from the force video"). On "drift the same way" the random motion gains a slow common drift to the right (tag "drift sped up to see it"); the gate's net count ticks steadily to the right; on "That shared drift is the current" navy dotted "electron flow" and the ink "I" arrow (v11) appear outside the wire, opposite ways. On "as many electrons leave" a counter "electrons in this piece: 120" stays fixed as dots leave the right end and enter the left; on "doesn't add any electrons" the scene 1 chip "pushes the ones there?" glows and "adds electrons?" takes a grey scribble cross.

### 4. slow drift, instant light
> Here's the surprising part. That drift is slow, less than a millimetre per second. An electron could take hours to cross a metre of wire. So why does a lamp light the moment the switch closes? Because the field is set up along the whole wire almost instantly, and there are free electrons everywhere, even inside the lamp. They all start drifting at once. It's like a tube already full of marbles: push one in at one end, and one pops out the other end straight **away**.

Visual: board change: a 1 m coded wire across the screen with a switch and the painted lamp (`phys-y11-filament-lamp-v1.png`) at the far end. On "less than a millimetre per second" one tracked electron with a timer and a readout "drift: < 1 mm per second"; on "hours to cross a metre" the timer fast-forwards with "1 m: hours". On "the switch closes" the switch closes; on "set up along the whole wire" teal field arrows appear along the full length at once; on "even inside the lamp" the electrons in the filament (sidecar) start drifting at the same instant and the filament glows. On "tube already full of marbles" a coded tube of grey marbles below the wire; one marble pushed in at the left, one pops out at the right at the same moment.

### 5. direct current
> A cell or battery keeps its positive terminal positive. So the field in the wire always points the same way, and the electrons always drift the same way. That's direct current, or DC: current that flows in one direction only. On a current-time graph, a steady direct current is a flat line, on one side of zero. Cells, batteries and solar cells all supply **DC**.

Visual: board change: the painted bench supply (`phys-y11-low-voltage-supply-v1.png`) connected by coded leads to the painted lamp (glowing); a small `ConductorLattice` window on one lead with field arrows one way and a steady drift. On "direct current, or DC" the label "DC: one direction only". On "current-time graph" `CurrentTimeGraph` at the right draws a flat line above the zero line as time runs (axes "I" and "t", no numbers). On "solar cells" three small labels: "cells", "batteries", "solar cells".

### 6. alternating current
> Now picture a supply whose terminals keep swapping: positive, then negative, then positive again. Every time they swap, the field in the wire reverses. So the electrons drift one way, then back the other way, shuffling back and forth about the same places. That's alternating current, or AC: current that keeps reversing direction. Its current-time graph is a wave that swings above and below **zero**.

Visual: board change: the painted wall power point (`phys-y11-power-point-v1.png`) with a coded lead to the same lamp (glowing). Coded "+" and "−" markers at the two ends of the lead swap repeatedly. The lattice window: on "the field in the wire reverses" the teal arrows flip each swap; on "shuffling back and forth" the drift reverses with them and one tracked electron oscillates about one spot (a short trail back and forth). On "alternating current, or AC" the label "AC: keeps reversing direction". On "above and below zero" `CurrentTimeGraph` draws a sine wave crossing the zero line, in step with the flips.

### 7. prediction: fifty hertz
> The mains supply in Australia is AC, at fifty hertz. That's fifty full cycles every second. So how many times each second does the current change **direction**?

Visual: camera continue; the AC graph extends; one cycle bracketed "1 cycle". Label "mains: 50 Hz = 50 cycles per second" (tag "hertz: cycles per second, from the waves videos"). On "direction" chips "50?" and "100?" and a 3-second countdown ring.

### 8. two reversals every cycle
> Look at one cycle. The current flows forwards, crosses zero and reverses. Then it crosses zero and reverses again. That's two reversals in every cycle. So fifty cycles a second means one hundred reversals every second. And each cycle takes one fiftieth of a second: point oh two oh **seconds**.

Visual: camera continue. On "crosses zero and reverses" the first zero crossing in the bracketed cycle gets a dot "1"; on "reverses again" the second gets "2". Row "2 reversals per cycle × 50 cycles per second = 100 reversals per second", boxed; the chip "100?" glows and "50?" takes a grey scribble cross. On "seconds" the row "T = 1/f = 1/50 = 0.020 s" (tag "f = 1/T, from the waves videos").

### 9. energy, either way
> But if the electrons in AC just shuffle back and forth, how can they light a lamp? Because energy doesn't need electrons to arrive anywhere. Every time charge is pushed through the filament, in either direction, the field does work on it, and the filament heats up. Forwards or backwards, energy is transferred. That's why the same lamp glows on AC or on DC. Saying AC is useless because the electrons go nowhere misses where the energy comes **from**.

Visual: board change: the lamp plate large, a lattice window over its filament. On "pushed through the filament" the filament's electrons drift one way and its ions jiggle harder (coded vibration), then the drift reverses and the ions still jiggle; a hollow gold energy arrow leaves the lamp on both half cycles (tag "the field does work on the charge: the energy-per-coulomb video"). On "the same lamp glows on AC or on DC" small thumbnails of the scene 5 and scene 6 set-ups, both lamps glowing. On "from" a chip "AC is useless: the electrons go nowhere" fades in and takes a grey scribble cross.

### 10. comparing DC and AC
> So let's compare them. What's the same? Both are flows of charge, driven by a voltage, and both transfer energy to whatever they pass through. What's different? DC flows one way only, with a steady size. AC keeps reversing, and its size keeps changing. Their graphs show it: a flat line, or a wave crossing zero. And DC comes from cells and batteries, while AC comes from the mains, supplied by generators in power **stations**.

Visual: board change: a two-column table, "DC" and "AC", with the two small graphs as headers. On "What's the same?" a "same" band across both columns: "a flow of charge driven by a voltage"; "transfers energy". On "What's different?" rows build one per cue: "direction: one way only | keeps reversing"; "size: steady | keeps changing"; "graph: flat line | wave crossing zero"; on "stations" "sources: cells, batteries, solar cells | mains (power-station generators)".

### 11. memory aid
> To remember it: direct goes one way, and alternating goes back and forth. Either way, the voltage pushes electrons that are already in the **wire**.

Visual: the handwritten line writes large: "Direct goes one way. Alternating goes back and forth. Either way, the voltage pushes electrons already in the wire." On "one way" the flat DC trace pulses; on "back and forth" the AC wave; on "already in the wire" the lattice window with its fixed electron count. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A length of copper wire is connected across the terminals of a battery. Explain why the free electrons in the wire flow when the battery is connected, but not before. Then state the direction in which the electrons drift along the wire. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A length of copper wire is connected across the terminals of a battery. (a) Explain why the free electrons in the wire flow when the battery is connected, but not before. (b) State the direction in which the electrons drift along the wire. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Before, the free electrons move randomly, so there's no net **flow**. The battery's voltage sets up an electric field along the wire. The field pushes on every free electron, against the field because they're negative, so they all drift the same **way**: towards the positive **terminal**. Saying the battery supplies the electrons misses the point: they were in the wire all **along**.

Visual: card shrinks to the top; "but not before" and "direction" underlined. A small lattice at the left replays: random, then field arrows and drift. Rows: on "flow" "before: random motion, no net flow"; "voltage: field along the wire"; on "way" "force on each electron against the field: net drift (the current)"; on "terminal" "(b) towards the positive terminal", boxed. On "along" a chip "the battery supplies the electrons that flow" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Graphs P and Q show the current in two different circuits over the same time. Identify which graph shows alternating current, and justify your choice. State one similarity between the two currents. Then use graph Q to work out how many times each second the current in circuit Q reverses direction. Pause here to answer.

Visual: `QuestionCard` with two coded graphs side by side (ink on a light grid), each "current (A)" against "time (ms)", time ticks 0, 10, 20, 30, 40. Graph P: a flat line at 0.50 A. Graph Q: a sine wave between +0.70 A and −0.70 A, two full cycles from 0 to 40 ms, starting at zero and rising. Text: "Graphs P and Q show the current in two different circuits over the same time interval. (a) Identify which graph shows alternating current, and justify your choice. (b) State one similarity between the two currents. (c) Use graph Q to determine how many times each second the current in circuit Q reverses direction. (3 marks)" No marks on the graphs beyond the axes and ticks. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Q is AC, because its current goes below zero, so it reverses **direction**. P stays on one side of zero: that's DC. One similarity: both are flows of charge that transfer **energy**. Q's cycle takes twenty milliseconds, so there are fifty cycles a second. Two reversals per cycle gives one hundred reversals each **second**. Fifty is the classic **slip**.

Visual: card shrinks to the top; "alternating current", "similarity" and "each second" underlined. On "direction" the part of Q below zero shades; "(a) Q: the current changes sign, so it reverses", boxed. On "energy" "(b) both: flows of charge that transfer energy", boxed. On "twenty milliseconds" one cycle on Q bracketed "20 ms = 0.020 s"; "f = 1/0.020 = 50 cycles per second"; on "second" the two zero crossings in the bracket marked "1", "2" and "(c) 2 × 50 = 100 reversals per second", boxed. On "slip" a chip "(c) 50 times" fades in and takes a grey scribble cross. Hold about 1 second.

### 16. handoff
> So a voltage sets up a field that pushes the free electrons along. But what decides how many coulombs it pushes through each second? Turn up the voltage on the same wire, and what happens to the flow? And what's holding the electrons **back**?

Visual: board change: the memory line small at the top. The DC lattice returns, with the bench supply's knob as a coded dial "V"; the drifting electrons now and then strike an ion, which jiggles (small grey flash). The gate's readout: "coulombs per second?". On "Turn up the voltage" the dial turns a notch and the teal field arrows lengthen; a dashed "?" on the drift. Chips write: "more voltage, more current?" and, on "back", "what holds them back?". Then the chip "Next: Why does a bigger voltage push more charge through the same wire each second, and what holds the electrons back?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A metal is a lattice of positive ions with free (delocalised) electrons. With no voltage, the electrons move randomly: no net flow, no current.
2. An external voltage sets up an electric field along the wire. The force on each electron (F = qE, against the field) gives a slow net drift towards the positive terminal: the current. No electrons are added.
3. The drift is slow, but the field is set up almost instantly, so every electron starts moving at once.
4. DC flows in one direction (flat current-time line; cells, batteries, solar cells). AC keeps reversing (current-time wave crossing zero; the mains, 50 Hz in Australia, so 100 reversals per second).
5. Both are flows of charge driven by a voltage, and both transfer energy.

Memory aid (large, on the notes screen): *Direct goes one way. Alternating goes back and forth. Either way, the voltage pushes electrons already in the wire.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why no current without a voltage: random motion averages to zero (2). Why connecting a voltage makes electrons flow: it sets up a field, and the field pushes every free electron (3). Why they drift towards the positive terminal: they are negative, so the force is against the field (3). Why no electrons are added: the cell pushes the ones already there; as many leave as enter (3). Why a lamp lights at once despite the slow drift: the field reaches the whole wire almost instantly (4). Why DC is one way: a cell's terminals keep their signs (5). Why AC reverses: the terminals keep swapping, so the field reverses (6). Why 100 reversals: two per cycle (8). Why AC still lights a lamp: the field does work on charge pushed through the filament in either direction (9).
- **Misconceptions addressed:** the cell adds electrons (1, 3, feedback 1 crossed); electrons race round the circuit (4; site misconception 1); AC delivers no energy (9; site misconception 2); 50 Hz means 50 reversals (7, 8, feedback 2 crossed; site correction 1).
- **One idea at a time:** random motion (2), the field and drift (3), timing (4), DC (5), AC (6), reversals (7, 8), energy (9), comparison (10).
- **Video makes it easier:** the student sees a crossing gate read "net 0" then tick one way when field arrows appear (1 to 3), an electron count stay fixed while dots leave and enter (3), field arrows fill a 1 m wire at once while one electron crawls (4), field arrows flip and an electron shuffle in place as the graph crosses zero (6), two zero crossings counted in one cycle (8), and a filament's ions jiggle whichever way the charge moves (9).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("but not before"; "copper"; both graphs with labelled axes and ticks; "same time interval"; "each second"), nothing answer-bearing (graph Q carries no period label). One crossed mistake each; feedback about 29 s and 26 s.
- **Avoided double teaching:** v05's F = qE recalled in a phrase with a tag (3); v11's flow arrows reused without re-teaching (3); v10's energy per coulomb recalled as a tag (9); FA2's f = 1/T recalled in one row with a tag (8).
- **Syllabus coverage:** `cidd4209b2`: why electrons flow in a metallic conductor connected to an external voltage (2 to 4, A1); `ci95fddf87`: DC and AC compared (5 to 10, A2).
- **Out of scope by design:** I ∝ V and resistance (v13; site card 3 and `we-1` handed on); peak and rms values; how generators make AC; drift-speed calculations.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A length of copper wire is connected across the terminals of a battery. (a) Explain why the free electrons in the wire flow when the battery is connected, but not before. (b) State the direction in which the electrons drift along the wire."
Model answer: (a) Copper contains free (delocalised) electrons. Before the battery is connected they move randomly in all directions, so there is no net flow of charge. The battery's voltage sets up an electric field along the wire; the field exerts a force (F = qE) on every free electron, opposite to the field because electrons are negative, so the electrons gain a slow net drift in one direction: a current. (b) Towards the positive terminal of the battery (from the negative end of the wire to the positive end). Classic mistake (crossed): "the battery supplies the electrons that flow".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** Graph P: current constant at 0.50 A from 0 to 40 ms. Graph Q: a sine wave between +0.70 A and −0.70 A, two full cycles in 40 ms. "(a) Identify which graph shows alternating current, and justify your choice. (b) State one similarity between the two currents. (c) Use graph Q to determine how many times each second the current in circuit Q reverses direction."
Model answer: (a) Q. Its current changes sign (passes below zero), so the current reverses direction; P stays positive, so it flows one way only (DC). (b) Either: both are flows of charge driven by a voltage; or both transfer energy to the circuit (for example, both could light a lamp). (c) One cycle takes 20 ms = 0.020 s, so f = 1/T = 50 cycles per second; the current reverses twice in each cycle, so it reverses 100 times each second. Classic mistake (crossed): "(c) 50 times".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Gate counts | left 37, right 37: net 0 (illustrative) | 1, 2 |
| Electron count in the slab | 120 (illustrative, fixed) | 3 |
| Drift | less than 1 mm per second; 1 m takes hours (author note a: about 0.07 mm s⁻¹, about 3.8 h) | 4 |
| Mains | 50 Hz; 2 reversals per cycle; 100 reversals per second; T = 1/50 = 0.020 s | 7, 8, notes |
| A2 graph P | 0.50 A constant, 0 to 40 ms | 14, 15 |
| A2 graph Q | ±0.70 A, period 20 ms = 0.020 s, two cycles in 40 ms; f = 50 Hz; 100 reversals per second; crossed 50 | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 1 ÷ 50 = 0.020 s; 2 × 50 = 100.
- 1 ÷ 0.020 = 50; two cycles in 40 ms.
- Drift: 1 ÷ (8.5 × 10²⁸ × 1.0 × 10⁻⁶ × 1.6 × 10⁻¹⁹) = 7.35 × 10⁻⁵ m s⁻¹ (< 1 mm s⁻¹); 1 ÷ 7.35 × 10⁻⁵ = 1.36 × 10⁴ s ≈ 3.8 h.

## Memory aid check

- **"Direct goes one way. Alternating goes back and forth. Either way, the voltage pushes electrons already in the wire."** Meaning, as said in scene 11: DC flows in one direction; AC keeps reversing; in both, the supply does not add electrons but sets up a field that pushes the free electrons already in the conductor. Assumptions checked: "one way" is direction, not a constant size (a DC current can vary in size without reversing; the video's DC is steady and the line does not claim otherwise); "back and forth" is the reversing current, not a claim that the electrons travel far; "already in the wire" holds for every part of the circuit, including the filament. Introduced after the mechanism (3), DC (5), AC (6) and the comparison (10).
- **Marble tube (scene 4).** Analogy for one claim only: the effect at the far end starts at once though each marble moves little (author note c). It is not used for resistance or for the field.
- **Site hook (lesson 12) not used.** It is about conventional current (v11's topic; `phys-y11-fa3-v11.md`, site correction 3).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,563 characters** (5,579 joined), 17 scenes. Characters per scene (1 to 17): 334, 376, 545, 467, 359, 398, 156, 290, 448, 424, 144, 269, 370, 330, 339, 239, 75. At 13.3 characters per second the speech is about 418 s; add about 20 s of holds and settling (the gate counts in 1 to 3, the field filling the wire in 4, the field flips in 6, the zero crossings in 8, the filament in 9, the table rows in 10, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 520 s**, inside the owner's 5 to 10 minute target.

## Scene list and build ids

Lesson key `p-y11-fa3-v12` (route phys-y11-fa3-v12). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v12` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v12` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, free-electrons, field-and-drift, slow-drift, direct-current, alternating-current, prediction-50hz, reversals, energy-either-way, compare, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v11's last frame continues into scene 1 (camera continue: the wire and gate carry over); 1 to 2 camera continue; 2 to 3 camera continue (the ends rejoin); 3 to 4 board change to the 1 m wire; 4 to 5 board change to the bench supply; 5 to 6 board change to the power point (the lamp stays in place); 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 board change to the lamp; 9 to 10 board change to the table; 10 to 11 fade; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v12-learning-review.md`, `science_check` = `checks/p-y11-fa3-v12-physics-check.md`.

## Assets

Reused: `phys-y11-low-voltage-supply-v1.png` (delivered; 5, 16: its knob is the handoff's coded dial); `phys-y11-filament-lamp-v1.png` (requested in `phys-y11-fa2-v13.md`, not yet delivered; 4 to 6, 9; its sidecar's filament centre places the lattice window and jiggle overlay). Coded parts reused from v03 (field arrows), v05 (force arrows), v11 (flow arrows, gate) and FA2 (hollow gold energy arrow, f = 1/T row).

New (requested below): `phys-y11-power-point-v1.png` (6, 9).

Checked first (3 Nov): `public/assets/physics/` has the bench supply (`phys-y11-low-voltage-supply-v1.png`: brushed grey case, red rocker switch, one knob, red and black terminals; DC). Its red terminal is the positive terminal, which agrees with the FA3 colour key, so it is used as delivered. No power point, oscilloscope or lamp is delivered; the FA2 oscilloscope request (`phys-y11-oscilloscope-v1.png`) is not used, because coded current-time graphs show the same traces with less to read.

Coded: the lattice, electrons, field and force arrows, the gate, the 1 m wire and switch, the marble tube, current-time graphs, the comparison table, the A2 graphs, leads, working.

Kit gaps (for the next physics kit brief): `ConductorLattice`, `CurrentTimeGraph`, the filament jiggle overlay, the marble tube; lesson-local acceptable for Revision 1. v13 to v17 will reuse `ConductorLattice` (collisions and resistance).

## Codex asset brief (Year 11 Physics FA3 v12, wall power point)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-power-point-v1.png`: an Australian double general power outlet (wall power point), straight-on front view with a slight top-left light: a plain white rectangular plate with rounded corners, two sockets side by side, each with the Australian angled-pin pattern (two slanted slots and one vertical earth slot below), and a small white rocker switch above each socket; a short grey sheathed lead plugged into the left socket and running out to the right (the plug body plain grey, no markings). About 1400 px wide, with transparent space round the plate (no wall texture). Sidecar `phys-y11-power-point-v1.json`: the lead's free end point (where the coded lead continues) in plate pixels.

Acceptance: true transparency, no halo; no text, numerals, symbols or brand marks; no red or navy (the switches plain white); the slot pattern correct for Australia; not stretched.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: metals have a lattice of positive ions and free electrons in random motion with no net flow; an external voltage sets up an electric field along the conductor; the force on each electron is opposite to the field, giving a slow net drift towards the positive terminal, which is the current; no electrons are added by the cell; drift is less than about 1 mm s⁻¹ while the field is set up almost instantly; DC flows in one direction (flat current-time graph for steady DC; cells, batteries, solar cells); AC periodically reverses (a current-time wave crossing zero; the mains, 50 Hz in Australia); two reversals per cycle, so 100 per second at 50 Hz; T = 0.020 s; AC and DC both transfer energy because the field does work on charge pushed through a component in either direction.
3. Confirm no I ∝ V, Ohm's law, resistance factor, peak or rms value is taught (the handoff only asks).
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away (graph Q has no period label).
5. Confirm both syllabus quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v11.md` scene 17.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Why Electrons Flow in a Wire, and AC vs DC | Year 11 Physics

(Title length: 61 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson12.sa.html

A copper wire is packed with free electrons, yet no current flows until you connect a cell. So does the cell add electrons, or push the ones already there? Watch a voltage set up a field along the wire and give every free electron the same slow drift, find out why a lamp still lights instantly when that drift is slower than a millimetre a second, then compare direct and alternating current, including how many times the 50 hertz mains really reverses each second. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Explain why electrons flow through a metallic conductor when connected to an external voltage" (cidd4209b2)
"Compare direct current (DC) and alternating current (AC)" (ci95fddf87)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electric current (previous video). Next: Voltage, electron flow and resistance.

#Year11Physics #Physics #ACvsDC #HSCScience

## Open decisions

- **1. v13's question (proposal).** The handoff chip uses "Why does a bigger voltage push more charge through the same wire each second, and what holds the electrons back?" for phys-y11-fa3-v13 (route placeholder "How can I explain and apply resistance and its factors?"; its one point is `cif8293068`, "Relate voltage to electron flow in a circuit of constant resistance"). Root to enter it in the route, or align this chip to v13's designer's question. The route title "Resistance and Its Factors" is wider than v13's point; root may want to check the factors' home (v14 or later) when v13 is designed.
- **2. Site card 3 (I ∝ V).** Not used here; it belongs to v13's point. Site correction 2 asks the site to move or relabel it.
- **3. The marble tube.** Kept as one sentence in 4 (about 6 s). If the review finds it a distraction, it is the first cut (the scene still answers the question from the field picture).
- **4. Route refinement (root to record).** Question as above; start "Begin at v11's copper wire with no cell; recall F = qE and electron flow"; stop "Stop at the cause of electron drift and the DC/AC comparison (50 Hz, 100 reversals); hand voltage and current at constant resistance to v13". Entry knowledge should add FA2 v03 (f = 1/T).
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v11 at Year 11 entry; check that the gate's "net 0" then steady tick makes the field's job clear; that the fixed electron count settles "no electrons added"; that the slow-drift panel and the field filling the wire at once resolve the instant-light puzzle; that AC's shuffle about one place and the energy either way are convincing; that the comparison table gives both similarities and differences; that the attempts give nothing away), then the Codex physics check and error check.
- The gate's count changing when the field appears (3), the field filling the 1 m wire at once while one electron crawls (4), the field flips with the shuffling electron in step with the graph (6), the two zero crossings in one cycle (8) and the filament jiggling either way (9) carry the explanation; judge them at playback speed in the voiced preview.
