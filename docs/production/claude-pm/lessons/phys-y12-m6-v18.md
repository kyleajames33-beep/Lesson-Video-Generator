# Year 12 Physics M6 V18: AC and DC generators. How do simple AC and DC generators produce different outputs? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,315 characters, 16 scenes, about 559 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v17's final frame.

Scope: eighteenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How has knowledge about the Motor Effect been applied to technological advances?". Templates as `phys-y12-m6-v07.md` and `phys-y12-m6-v11.md`. No pre-design pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts, hashes checked against the live files): lesson 11 `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson11.sa.html`, SHA256 `9af961b0a91b756b47dc41ca271356aaeef276f2a6b230af0df2df4a1b3fbe9b` (orient and retrieve with the rotating-coil prediction and misconceptions, model the generator with Figure 1, slip rings and the energy and load note, the 90° phase relationship with four key positions and Figure 2, the simulator, the worked example 100 turns, 8.0 cm × 5.0 cm, 50 Hz, 0.40 T, apply and consolidate with Activities 1 and 2, "Analyse 6 marks" and "Compare 5 marks", practice Q1 and Q2, review); lesson 10 `.../lesson10.sa.html`, SHA256 `736384e8c6b6ea3e705767d723a0ee76e77ccceae7ab2d40f7f297065de8d36f` (section `dc-structure-and-commutation`, read in full with the rest of the lesson); lesson 16 `.../lesson16.sa.html`, SHA256 `352d49dc5beecf7f5feb79636134a4e6f4a0b4a00e3bda80b9139052d8959eed` (section `separate-generator-operation`: turbine, rotating electromagnet, fixed stator coils, 2-pole 50 Hz at 3000 RPM, comparison table; read in full). All three hashes recomputed 6 Nov and match the route. Route entry: `phys-y12-m6-v18`, sections `dc-structure-and-commutation` (lesson 10), `model-generator`, `represent-phase-relationship`, `calculate-generator-emf` (lesson 11), `separate-generator-operation` (lesson 16). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Connect rotating flux to phase of emf, slip rings and split-ring rectification. Distinguish current direction from torque and flux. Stop before induction motors." Next: "phys-y12-m6-v19: Why must an induction-motor rotor lag the rotating field?"

Owner rules applied: as v07 and v11 (2017 syllabus quoted exactly; one main learner question; no people, hands, faces or body outlines: every coil is turned by a coded amber "outside drive" arrow; the hobby motor, oscilloscope, lamp and power station are painted plates (all reused); the generator models, rings, brushes, field, area normal, graphs and traces are coded HSC-style diagrams, as the kit plan asks ("code ring connections, area normal, flux and emf phase"); every number recalculated in Python; data-sheet symbols Φ = BA cos θ and ε = −NΔΦ/Δt; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original attempts; optional key notes; Australian spelling; no em dashes). Recalled, not re-taught: v09 (Φ = BA cos θ with θ between B and the area normal), v10 (emf from the rate of change of flux; reading emf from the steepness of a flux graph), v11 (Lenz's law; a generator under load is harder to turn), v16 (split-ring commutator and brushes), v17 (a turned motor is a generator).

Syllabus content (Physics Stage 6 (2017), Module 6 Electromagnetism; ledger id `P6-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P6-IQ4-02`: "analyse the operation of simple DC and AC generators and AC induction motors (ACSPH110)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v17's final frame (the hobby motor turned by an outside drive, connected to an oscilloscope showing "?"). Teaches: the two outputs (pulsating DC humps from the split-ring machine; an alternating wave from the slip-ring machine) from the same coil, field and speed; flux through a turning coil (maximum face on, zero edge on, reversed after half a turn; a cosine against time); emf from the steepness of the flux graph (zero at maximum flux, largest at zero flux; the physical reason: sides cutting across the field lines; a sine a quarter turn out of step); the coil's emf alternates in both machines; slip rings pass it unchanged (AC, one cycle per turn); the split ring swaps connections every half turn when the coil's emf is zero, so the output keeps one sign (pulsating DC) while the coil's current still alternates; flux, coil current and the opposing torque behave the same in both (route: "distinguish current direction from torque and flux"); faster spin raises both the peak emf and the frequency; the power-station generator (rotating electromagnet, fixed output coils, AC, 50 Hz, 2-pole at 3000 revolutions per minute). Stops before induction motors (v19). No ε = NBAω sin ωt calculation (site: "extension unless an exam question supplies the relationship"; open decision 2).

## Decisions

- **Learner question (route wording kept).** "How do simple AC and DC generators produce different outputs?" The answer, built in order: both coils make the same alternating emf (2 to 4); slip rings pass it unchanged (5); the split ring flips the connections each time the emf flips, so the output keeps one sign (6). The key contrast is stated in scene 1's prediction: "the emf the coil makes" versus "how the coil connects to the outside circuit".
- **Hook (v17's handoff and site lesson 11 "Compare 5 marks").** v17's motor-as-generator is the DC case; camera moves into the simplest single-coil model so the humps are the ideal half-sine humps (a real can motor with several coils gives a ripplier but smoother output; author note a). Swapping only the rings, at the same speed, turns the humps into a wave. This makes the site's top-band point ("the emf generated within the coil itself alternates in both"; "the difference in output is produced entirely by one component") the hook's answer.
- **Flux, then emf (site sections 2 and 3, "Analyse 6 marks" order).** Flux first (BA cos θ recalled from v09, with the area normal named and drawn navy), then emf as the steepness (v10's reading of a flux graph), then the physical reason (sides cutting across the field lines; "Analyse 6 marks" step 4). The site's four key positions are the four coil snapshots on screen.
- **The surprise (site misconception "The emf is maximum when the flux is maximum").** Scene 3 says the emf is biggest when the flux is zero; A1 tests it; the classic slip "zero flux means zero emf" is crossed in feedback 1.
- **Coil emf alternates in both machines (scene 4).** Shown by following one marked side "a" of the coil: rising through the field for one half turn, falling for the next, so the emf in the coil reverses every half turn. Said before the rings so that "both coils make AC inside" is established before the outputs are explained.
- **Rings (site Figure 1, slip-rings vocabulary, lesson 10 commutator).** Slip ring defined in plain words. The split ring is recalled from v16 (same part) and its timing is the key: the gap passes the brushes when the coil is face on, exactly when the coil's emf is zero and about to reverse (site "Compare 5 marks" step 4: "the timing is the mechanism").
- **Current, torque, flux (route stop).** Scene 7 separates three things that are the same in both machines: the flux through the coil reverses every half turn; the current in the coil alternates; under load the motor-effect force on the coil sides opposes the turning (Lenz; site "Energy and load"), so the outside drive does work that becomes electrical energy. Only the outside circuit's current direction differs.
- **Speed (site simulator section and review).** Faster spin: bigger peak and higher frequency; twice as fast gives twice both. Turns, field and area change only the peak. Stated qualitatively; ε₀ = NBAω is not shown (open decision 2).
- **Power station (site lesson 16 `separate-generator-operation`).** One scene: a turbine turns an electromagnet inside fixed coils, so the heavy output current does not pass through sliding contacts; AC at 50 Hz; a 2-pole machine turns at 3000 revolutions per minute (site value, checked). Synchronous operation and load angle are not used.
- **Memory aid (scene 10, new): "Slip rings keep it. Split ring flips it."** See "Memory aid check".
- **Attempts (original, HSC style).** A1: coil plane parallel to the field: flux zero, emf maximum, with the reason. A2: compare the construction and output of simple AC and DC generators. Crossed: A1 "zero flux means zero emf"; A2 "the DC generator's coil makes direct current".
- **Handoff (route next).** Scene 15 contrasts generator (turn a coil, get a current) and motor (current in a coil, get turning), then poses the third arrangement: a turning field round a rotor connected to nothing. The squirrel-cage rotor plate (requested in `phys-y12-m6-v19.md`) appears inside a coded ring of stator coils with a dashed rotating field arrow; the rotor turns slightly behind it; "?". See "Final frame".
- **Colour key (root decision 1):** magnetic field slate; area normal navy; induced emf and its graph rose; flux graph slate; current orange; force and torque amber; outside-drive arrows amber outline.
- **Site sources used:** lesson 11 prediction (1, 2, 3); vocabulary "slip rings" (5); Figure 1 (2, 5); misconceptions (3, 12, 14); four key positions and Figure 2 (2, 3); "Energy and load" (7); simulator section and review "doubling the rotation frequency" (8); "Analyse 6 marks" (2, 3, A1); "Compare 5 marks" (1, 4, 6, A2); Activity 2 (5, 6); Q2 model answer (6, 14). Lesson 10: split-ring commutator description (6). Lesson 16: generation process, table and the 3000 RPM check (9). Not used: the worked example's numbers (checked; site note 1), ε = NBAω sin ωt and ω = 2πf arithmetic (extension), the simulator, MC drills, synchronous load angle.
- **Site notes (for Codex to log in `site-corrections-phys-y12.md`):**
  1. Lesson 11, section `calculate-generator-emf`: "$\varepsilon_0 = (100)(0.40)(4.0 \times 10^{-3})(314) = 50.2$ V." ω was rounded to 314 before multiplying; with ω = 2π × 50 = 314.16 rad/s, ε₀ = 50.27 V, which is 50.3 V to three significant figures. The instantaneous result (29.5 V) and the summary "ε₀ ≈ 50 V" survive. Proposed fix: "= 50.3 V" (keep ω unrounded in the working).
  2. Lesson 11, section `orient-and-retrieve`: "Prerequisite check: Lessons 12–14 established magnetic flux $\Phi=BA\cos\theta$, flux linkage $N\Phi$ and Faraday’s law". Lesson 11 is numbered before lessons 12 to 14 and its footer reads "Previous: Power Transmission and Distribution", so a student following the numbers meets this lesson before its prerequisites. Proposed fix: confirm the intended order in the module overview, or reword to "This lesson uses magnetic flux, flux linkage and Faraday's law (L12 to L14)".
  3. Lesson 16, section `separate-generator-operation`, table row "Brushes needed: No / Yes (for rotor excitation)". Many large generators use brushless exciters. Proposed fix: "Often (slip rings and brushes carry the small DC excitation current; some machines use brushless exciters)".
  Checked and correct: lesson 11 four key positions, Figure 2 description, Q1 (157 rad/s, 37.7 V), the MC (3.0 V), the odd-one-out (flux and emf in phase is false), the 29.5 V instantaneous emf; lesson 16 3000 RPM.
- **Cause chain taught, in order:** (1) the same coil gives humps with a split ring and a wave with slip rings (1); (2) as the coil turns, the flux through it changes as a cosine: maximum face on, zero edge on, reversed after half a turn (2); (3) the emf follows the rate of change: zero at maximum flux, largest at zero flux, because the sides then cut straight across the field (3); (4) every half turn the sides swap, so the coil's emf reverses: both coils make AC (4); (5) slip rings keep each brush on the same end of the coil, so the output alternates (5); (6) the split ring swaps the connections every half turn just as the emf reverses, so the output keeps one sign (6); (7) in both, the load current makes a torque that opposes the turning, and the drive's work becomes electrical energy (7); (8) faster turning makes faster flux change and more turns per second (8); (9) power stations spin the magnet inside fixed coils, giving AC without sliding the large current through brushes (9).
- **Entry knowledge (route `entryKnowledge`):** v17's motor-as-generator; v09's Φ = BA cos θ and area normal; v10's emf from the rate of change of flux (steepness of a flux graph); v11's Lenz's law; v16's split-ring commutator and brushes; v07's motor effect; Year 11 frequency.
- **Learner-visible vocabulary (plain meaning at first use):** area normal (the arrow sticking straight out of the coil's face, 2); slip ring (a continuous metal ring that turns with the coil, with a fixed brush pressing on it, 5); split-ring commutator (recalled from v16: one ring cut into two halves that swap brushes every half turn, 6); pulsating DC (a current that flows one way but rises and falls, 6); AC and DC (alternating: changes direction; direct: one direction, 1).
- **Legacy logic ported:** none. The kit family `m6-generator-flux` (coded rotating area, flux rate and phase-shifted emf; slip rings omitted, graph normalised) is the candidate support for scenes 2 and 3; its limits (ideal constant angular speed) are respected and the rings are added for this video.
- **New explainer motion:** **generator stage** (HSC-style coded single-turn rectangular coil between "N" and "S" pole blocks, slate field arrows left to right, the coil turning about a horizontal axis across the screen, a navy area-normal arrow fixed to the coil, one side marked "a"; at the right end of the shaft either two slip rings or a split ring, with two fixed brushes and coded leads to a load lamp plate; the ring part swaps with a short slide); **linked graphs** (flux-time and emf-time `lineGraph`s stacked, x "time" in quarter turns, a vertical cursor tied to the coil angle; four snapshot thumbnails at 0, ¼, ½, ¾ turn); **output trace** (oscilloscope plate with a coded trace: half-sine humps for the split ring, full sine for slip rings); **steepness tangent** (a short rose tangent sliding along the flux curve with its slope shown as the emf height); **side tracker** (side "a" highlighted orange, its motion arrow up or down through the field); **brush-swap close-up** (end-on view of the split ring with its gap passing the brushes, a rose "ε = 0" tag at the swap); **torque arrows** (amber forces on the coil sides opposing rotation when a load is connected); `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the generator stage centre-left with the rings at its right end; the linked graphs or the oscilloscope on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) A small can motor has three or more armature coils and a multi-segment commutator, so its real output is DC with small ripple, not ideal humps. The hook moves to the single-coil model before the humps appear ("the simplest version, one coil"), so no claim is made about the can motor's exact waveform.
  (b) Geometry: field B along +x (left to right); coil rotates about a horizontal axis (along the screen's depth direction in the drawn perspective) at constant speed; θ measured between B and the area normal; t = 0 face on (normal along B): Φ = BA cos ωt, ε = NBAω sin ωt with the sign fixed by the chosen normal (site Figure 2 convention). The emf graph is drawn as +sine for this choice. Peaks normalised; no values.
  (c) The split ring's gap is aligned so the brushes change halves when the coil plane is perpendicular to B (face on), where ε = 0. Output = |ε| (ideal brushes).
  (d) Under load, the coil current I and the field give forces on the sides whose torque opposes the rotation (Lenz), in both machines. The orange arrows in the coil reverse every half turn in both; only the outside-circuit arrow differs (always one way for the split ring).
  (e) Power station: rotor is an electromagnet supplied with DC excitation (small current through slip rings or a brushless exciter); stator coils fixed. 50 Hz, 2 poles: 50 revolutions per second, 3000 per minute (site value).
  (f) Pronunciations: "emf" letter by letter; "theta"; "commutator" (KOM-yoo-tay-tor); "A C", "D C" as letters; "fifty hertz".
- **Open decisions for root:**
  - **1. Hook model swap.** The hook moves from v17's can motor to the single-coil model in its first sentences (author note a). Accept, or start the video on the model with v17's bench as a short inset.
  - **2. ε = NBAω sin ωt.** Site lesson 11 calls routine use of this equation and peak-emf arithmetic extension. The design keeps v18 qualitative (faster: bigger peak and higher frequency). If root wants the site's worked example (100 turns, 4.0 × 10⁻³ m², 50 Hz, 0.40 T: 50.3 V; 29.5 V at 2.0 ms), it fits as an optional extension scene after scene 8 (about 450 characters) with site note 1's correction.
  - **3. Cage rotor plate.** The handoff uses `y12p-squirrel-cage-rotor-v1.png`, specified in `phys-y12-m6-v19.md`'s asset brief, not requested twice.
  - **4. Optional beats** the learning review may cut: scene 9 (power station), scene 10 (memory aid), scene 8's last sentence.
Main question: *Turn the same coil in the same field at the same speed. With one kind of connection the output is a row of humps; with another it's a wave. How do simple AC and DC generators produce different outputs?*
Entry knowledge: v17's motor as a generator; flux and area normal (v09); emf from the rate of change of flux (v10); Lenz's law (v11); the split-ring commutator (v16).
Stops after: flux and emf through one turn, the coil's emf alternating in both, slip rings and split ring, current, torque and flux in both, speed, the power-station generator. No induction motors.
Handoff: v19, why an induction-motor rotor must lag the rotating field.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (humps or waves?)
> Here's our motor, turned by an outside drive, so it works as a generator. Here's the simplest version, one coil between two magnets, with a split ring and brushes. On the oscilloscope, the output rises and falls in a row of humps, but it never goes below **zero**. It always pushes current the same way, so it's a DC generator. Now swap just one part, the split ring, for two separate rings, and turn it at the same speed. The trace goes up, then **down**, then up again. It alternates, so this is an AC generator. So what's different, the emf the coil makes, or how it connects to the outside circuit? Make your **prediction**. It's the **connection**.

Visual: opens on v17's final frame (see "Opening frame"); the chip becomes the heading: "How do simple AC and DC generators produce different outputs?". On "simplest version" camera change: the hobby motor shrinks to a corner inset and the generator stage builds (coil, pole blocks "N" and "S", slate field arrows, split ring and brushes, coded leads to the lamp holder plate `phys-y11-lamp-holder-v1.png`); the oscilloscope plate (`phys-y11-oscilloscope-v1.png`) moves to the right with its leads. The coil turns (amber outline arrow "outside drive"). On "zero" the trace draws a row of half-sine humps above a dashed zero line, tag "never below zero". On "DC generator" a chip "DC: one direction". On "swap just one part" the split ring slides out and two slip rings slide in (only that part moves; tag "same coil, same field, same speed"). On "down" the trace redraws as a full sine wave crossing the zero line. On "AC generator" a chip "AC: alternates". On "prediction" a 3 s `Countdown` beside two chips: "the emf the coil makes" and "how the coil connects to the outside circuit". On "connection" the second chip ticks; the first fades with a small tag "same in both".

### 2. flux through a turning coil
> Start with the coil. As it turns, the flux through it changes. Remember, flux is B A cos theta, where theta is the angle between the field and the coil's area normal, the arrow sticking straight out of the coil's face. When the coil faces the field square on, the normal points along the field, and the flux is a **maximum**. A quarter turn later, the coil is edge on, the field skims along it, and the flux is **zero**. Another quarter turn, and it faces the field the other way round, so the flux is a maximum in the opposite **direction**. Against time, that's a cosine **curve**.

Visual: the oscilloscope fades to a small inset; the coil stops face on. On "B A cos theta" equation strip "Φ = BA cos θ" (with a small grey tag "from v09"). On "area normal" a navy arrow "normal" grows straight out of the coil's face; an arc "θ" between it and the field arrows. On "maximum" (face on, θ = 0) many slate field lines pass through the coil; a "Φ max" tag; the first snapshot thumbnail "0" fills. On "zero" the coil turns a quarter, the normal now at right angles to the field; the field lines skim past the coil's edge; "Φ = 0"; thumbnail "¼". On "direction" another quarter turn; the normal points against the field; "Φ max (reversed)"; thumbnail "½". On "curve" the flux-time `lineGraph` (slate) draws through the three points and on through ¾ turn and a full turn, a cosine, with the cursor tied to the coil.

### 3. emf follows the steepness
> From Faraday's law, the emf depends on how fast the flux is changing, not on how big it is. So read the emf from the steepness of the flux graph. At the top of the curve, the flux is at its biggest, but for that instant it isn't changing. So the emf is **zero**. Where the flux crosses zero, the graph is at its steepest, so the **emf is at its biggest**. Edge on, the two sides are cutting straight across the field lines, as fast as they can. Face on, they're sliding along the field lines, cutting **none**. So the emf graph is a sine curve, a quarter of a turn out of step with the **flux**.

Visual: the emf-time `lineGraph` axes (rose) appear under the flux graph, sharing the time axis. On "steepness" a short rose tangent sits on the flux curve. On "zero" the tangent sits flat at the top of the curve; a rose dot at zero on the emf axis; the coil face on. On "emf is at its biggest" the tangent slides to the zero crossing, steepest; the rose dot jumps to the emf peak; the coil edge on. On "cutting straight across" the two long sides of the coil highlight with short amber-outline motion arrows at right angles to the field lines. On "none" the coil returns face on; its sides' motion arrows lie along the field lines; tag "no cutting, ε = 0". On "flux" the emf curve draws in full (sine), the tangent tracing it; a bracket between a flux peak and the next emf peak "¼ turn".

### 4. both coils make AC inside
> Here's the surprise. Follow one side of the coil, side a. For half a turn, side a moves up through the field. For the next half turn, it moves **down**. The two sides keep swapping places. So the emf in the coil reverses every half turn, in both machines. The coil of a DC generator makes alternating emf too. Everything that's different happens at the end of the **shaft**.

Visual: one long side of the coil is marked "a" (orange outline). On "moves up through the field" an upward motion arrow on side "a" and a small rose arrow along the coil "ε"; on "down" side "a"'s arrow points down and the rose arrow in the coil reverses. On "swapping places" the rose arrow flips twice more as the coil turns. On "in both machines" two small coil icons side by side (one with slip rings, one with a split ring), each with the same rose alternating arrow and the same small sine graph "ε in the coil". On "shaft" the camera pushes in on the rings at the right-hand end of the stage.

### 5. slip rings: AC out
> In the AC generator, each end of the coil is joined to its own complete ring, called a slip ring. A slip ring is a continuous metal ring that turns with the coil, while a fixed brush presses on it. Each brush always touches the same ring, so it stays joined to the same end of the coil. Whatever the coil makes, the outside circuit gets, unchanged. The coil's emf alternates, so the output **alternates**. One full turn gives one full **cycle**. Connect a lamp, and an alternating current flows through **it**.

Visual: close-up of the two slip rings: one coded lead from each end of the coil to its own ring (lead to the near ring tinted orange, to the far ring tinted grey), two fixed grey brushes pressing on them. Tag "slip ring: a continuous ring that turns with the coil; a fixed brush presses on it". On "same end of the coil" the near brush's lead and side "a"'s lead pulse together through a full turn (they stay connected). On "alternates" the emf graph copies across to the oscilloscope (inset grows) unchanged: full sine. On "cycle" a bracket over one wavelength "1 turn = 1 cycle". On "it" the lamp plate glows faintly; orange current dots in the outside leads reverse direction each half cycle.

### 6. split ring: DC out
> In the DC generator, both ends of the coil go to one ring, split into two halves. That's the split ring commutator, the same part you met in the motor. Every half turn, the halves swap brushes. And the gap passes the brushes just as the coil is face on, exactly when its emf is zero and about to **reverse**. So as the coil's emf flips, the connections flip too. The two flips cancel, and the output never changes **sign**. You get a row of humps, all one way, called pulsating DC. Inside the coil, the current still alternates. Only the outside circuit sees it flowing one **way**.

Visual: the rings swap back to the split ring (a short slide). An end-on close-up inset of the split ring: two half rings with gaps, two fixed brushes left and right. Tag "split-ring commutator (from v16)". On "swap brushes" the halves rotate and each brush passes from one half to the other. On "reverse" the coil stage shows the coil face on at the instant of the swap; a rose tag "ε = 0" over the gap; the emf graph's zero crossing pulses at the same instant. On "connections flip too" the leads' tints swap at the brushes. On "sign" the oscilloscope trace builds: the first half-sine hump positive, then the second half (which in the coil is negative, drawn faint below the line) flips up to a positive hump (author note c). On "pulsating DC" tag "pulsating DC: one direction, rising and falling". On "still alternates" the rose arrow in the coil keeps flipping each half turn; on "way" the orange dots in the outside leads keep flowing one way.

### 7. what the rings don't change
> Three things don't depend on the rings. First, the flux through the coil reverses every half turn in both generators. Second, the current in the coil alternates in both. Third, the **torque**. When a current flows, the coil's sides feel a force from the field, the motor effect. By Lenz's law, that force opposes the turning, in both machines. That's why a generator gets harder to turn when a load is connected. The outside drive does work against that force, and the work becomes the electrical **energy**. The rings only decide which way the current flows in the outside **circuit**.

Visual: board change to a three-row comparison beside the two small coil icons (slip rings left, split ring right). On "flux through the coil reverses" row 1 "flux through the coil: reverses every ½ turn" with ticks under both icons. On "current in the coil alternates" row 2 "current in the coil: alternates" with ticks under both. On "torque" row 3 "torque from the load current: opposes the turning" with amber force arrows on both coils' sides forming a couple against the amber outline drive arrow. On "harder to turn" the drive arrows thicken (tag "load connected: harder to turn"). On "energy" small energy bars under each icon: "work by the drive" (amber) → "electrical energy" (orange). On "outside circuit" a fourth row in a different colour: "current in the outside circuit: AC (slip rings) or one way (split ring)", the only row that differs.

### 8. turn it faster
> What if the coil turns faster? Each change in flux happens in less time, so the flux changes faster, and the peak emf gets **bigger**. The turns also come more often, so there are more cycles every second, and the frequency goes **up**. Turn it twice as fast, and you get twice the peak emf, at twice the **frequency**.

Visual: the slip-ring stage and the oscilloscope. On "turns faster" the drive arrow doubles and the coil spins faster. On "bigger" the trace's peaks rise. On "up" the trace's cycles crowd closer. On "twice the frequency" the old trace (faint) and the new trace overlay: peak "× 2", cycles per second "× 2"; a small grey chip "more turns, stronger B, bigger A: peak only" (screen only).

### 9. power-station generators
> Power-station generators use the same idea, turned around. A turbine spins a large electromagnet inside fixed coils, so the flux through the coils keeps reversing, and they produce AC. Because the output coils don't move, the huge output current never passes through sliding brushes. On a fifty hertz grid, a two pole generator turns fifty times a second, three thousand revolutions per **minute**.

Visual: board change: the power station plate (`phys-y11-power-station-v1.png`) at the left, small. On "turbine spins a large electromagnet" a coded cutaway at the right: a ring of fixed stator coils (grey) around a rotating electromagnet (slate "N" and "S" poles) turned by an amber outline arrow "turbine". On "coils keeps reversing" the slate field sweeps round; the stator coils pulse rose in turn; a small sine trace beside them. On "sliding brushes" tag "output coils fixed: no heavy current through brushes". On "minute" chips "50 Hz → 50 turns each second (2-pole)", "= 3000 revolutions per minute".

### 10. a way to remember
> Here's a way to remember the difference. Slip rings keep it. Split ring flips it. Slip rings keep the coil's alternating emf. The split ring flips the connections, so the output stays one **way**.

Visual: board clears to the two ring close-ups side by side, each with its output trace beneath: slip rings with a full sine, split ring with humps. On "Slip rings keep it" the left pair pulses; on "Split ring flips it" the right pair pulses (the faint negative half flips up). On "way" the handwritten line writes large above: "Slip rings keep it. Split ring flips it." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A rectangular coil rotates at a steady rate in a uniform magnetic field. At one instant, the plane of the coil is parallel to the field. State whether the flux through the coil is a maximum or zero at that instant, and whether the induced emf is a maximum or zero. Explain your answers. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A rectangular coil rotates at a constant rate in a uniform magnetic field. At one instant the plane of the coil is parallel to the magnetic field. (a) State whether the magnetic flux through the coil is a maximum or zero at this instant. (b) State whether the induced emf is a maximum or zero at this instant. Explain both answers. (3 marks)" A small coded diagram: slate field arrows left to right and the coil drawn edge on to them (no normal arrow, no flux tag). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Parallel to the field means edge on. The field skims along the coil, so the flux is **zero**. But here the flux is changing fastest, because the sides are cutting straight across the field lines. So the emf is a **maximum**. The classic slip is saying zero flux means zero **emf**. It's the rate of change that counts.

Visual: card shrinks to the top; "parallel to the magnetic field" underlines. On "zero" the diagram's coil shows field lines skimming past, tag "(a) Φ = 0". On "maximum" amber-outline motion arrows on the sides at right angles to the field lines, and a mini flux graph with the steepest point marked: "(b) ε maximum: Φ changing fastest". On "emf" a chip "zero flux means zero emf" fades in and is crossed (caption "ε depends on the rate of change"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Compare the construction and the output of a simple AC generator and a simple DC generator. Describe the shape of each output against time. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Compare the construction and the output of a simple AC generator and a simple DC generator. In your answer, describe the shape of each output when plotted against time. (4 marks)" No diagram needed. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Both have a coil turning in a magnetic field, and in both, the coil's emf alternates. The AC generator uses slip rings, so the output alternates, a sine wave above and below **zero**. The DC generator uses a split ring commutator, which swaps the connections every half turn, just as the emf reverses. So its output is a row of humps, all one **way**. The slip is saying the DC generator's coil makes direct current. Its coil still makes **AC**.

Visual: card shrinks to the top; "construction" and "output" underline. A two-column answer builds under "both: coil turning in B; ε in the coil alternates": on "zero" left column "AC: slip rings → sine wave (above and below 0)" with a small sine; on "way" right column "DC: split ring swaps every ½ turn when ε = 0 → humps, one direction" with small humps. On "AC" a chip "the DC generator's coil makes direct current" fades in and is crossed (caption "the coil's emf alternates in both"). Hold about 1 second.

### 15. handoff
> So the same turning coil makes an alternating emf, and the rings decide what the outside circuit gets. Now, what if the field itself turns, round a metal rotor that isn't connected to anything at **all**? The turning field drags the rotor round with it. That's an induction motor. But the rotor never quite keeps **up**.

Visual: board clears (camera change). On "the field itself turns" two small chips at the upper left, "generator: turning → current" and "motor: current → turning", and a coded ring of six stator coils (grey) appears with a dashed slate field arrow across its middle that starts to rotate. On "all" the squirrel-cage rotor plate (`y12p-squirrel-cage-rotor-v1.png`, specified in v19's brief) appears inside the ring, end-on overlay; a navy bracket "no wires to the rotor". On "drags the rotor round" an index mark on the rotor starts turning in the field's direction. On "up" the field arrow and the rotor mark are shown as two moving markers, the rotor's falling slightly behind; a "?" between them and a chip "Next: why must an induction-motor rotor lag the rotating field?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A coil turning in a field: Φ = BA cos θ changes; maximum face on (coil plane ⊥ B), zero edge on (plane ∥ B).
2. ε depends on the rate of change of flux: zero when Φ is maximum, largest when Φ = 0 (sides cutting across the field). ε is a quarter turn out of step with Φ.
3. In both generators the coil's emf alternates.
4. AC generator: slip rings, each brush always on the same end of the coil, so the output alternates (sine).
5. DC generator: split-ring commutator swaps the connections every half turn when ε = 0, so the output is one direction (pulsating DC humps).
6. Under load, the force on the coil opposes the turning (Lenz) in both; the drive's work becomes electrical energy. Faster turning: bigger peak and higher frequency.

Memory aid (large, on the notes screen): *Slip rings keep it. Split ring flips it.*

## Teaching checks

- **Does it explain causes?** Why flux varies: the angle between the field and the normal changes (2). Why the emf is biggest at zero flux: the rate of change, and the sides cutting across the field (3). Why the coil's emf alternates: the sides swap every half turn (4). Why slip rings give AC: the connection never changes (5). Why the split ring gives DC: it flips the connection exactly when the emf flips (6). Why a loaded generator is harder to turn: Lenz (7). Why faster gives more and quicker cycles (8).
- **Misconceptions addressed:** the emf is largest when the flux is largest (3; crossed in 12); the DC generator's coil makes DC (4; crossed in 14); AC generators use a split ring, slip rings reverse the current (5, 6, memory aid); the rings change the torque or the flux (7); a generator gives energy for free (7).
- **One idea at a time:** outputs (1), flux (2), emf (3), coil emf (4), slip rings (5), split ring (6), what's shared (7), speed (8), power station (9).
- **Video makes it easier:** the rings swapping with the trace changing (1); the linked graphs with a cursor tied to the coil (2, 3); the sliding tangent (3); side "a" rising and falling (4); the end-on split ring with the "ε = 0" tag at the swap (6); the faint negative half flipping up (6); the comparison rows with only the last differing (7).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 29 s.
- **Avoided double teaching:** Φ = BA cos θ recalled from v09; emf from steepness recalled from v10; Lenz's law from v11; the split ring from v16; the motor-as-generator from v17.
- **Syllabus coverage:** `P6-IQ4-02` simple DC and AC generators (1 to 9); AC induction motors in v19.
- **Out of scope by design:** induction motors (v19), ε = NBAω sin ωt calculations (open decision 2), synchronous load angle, multi-coil commutators.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A rectangular coil rotates at a constant rate in a uniform magnetic field. At one instant the plane of the coil is parallel to the magnetic field. (a) State whether the magnetic flux through the coil is a maximum or zero at this instant. (b) State whether the induced emf is a maximum or zero at this instant. Explain both answers."
Model answer: (a) Zero: with the plane parallel to B, the area normal is perpendicular to B, so Φ = BA cos 90° = 0 (no field lines pass through the coil). (b) Maximum: by Faraday's law the emf depends on the rate of change of flux; at this instant the flux is passing through zero and changing fastest, because the coil's sides move at right angles to the field lines and cut them at the greatest rate. Classic mistake (crossed): "zero flux, so zero emf".

**Attempt 2 (scene 13; original wording, HSC style, 4 marks).** "Compare the construction and the output of a simple AC generator and a simple DC generator. In your answer, describe the shape of each output when plotted against time."
Model answer: Both consist of a coil rotated in a magnetic field; in both the changing flux induces an emf in the coil (Faraday's law), and this emf alternates in both, reversing every half turn. The AC generator connects the coil to the external circuit through two slip rings, each always in contact with the same brush, so the alternating emf reaches the circuit unchanged: a sinusoidal output that alternates above and below zero, one cycle per revolution. The DC generator uses a split-ring commutator, which reverses the coil's connections to the brushes every half turn at the instant the coil's emf is zero and reversing, so the output never changes sign: a series of half-sine humps in one direction (pulsating DC). Classic mistake (crossed): "the DC generator's coil produces direct current".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Graphs | normalised; quarter-turn marks only | 2, 3, 5, 6, 8 |
| Speed | twice as fast: peak × 2, frequency × 2 | 8 |
| Power station (site lesson 16, unchanged) | 50 Hz, 2 poles: 50 turns per second, 3000 revolutions per minute | 9 |
| Not used (site lesson 11 worked example, checked) | ω = 2π × 50 = 314.16 rad/s; ε₀ = 100 × 0.40 × 4.0 × 10⁻³ × 314.16 = 50.27 V (site 50.2 V); ωt at 2.0 ms = 0.628 rad; sin = 0.588; ε = 29.5 V | open decision 2, site note 1 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 3000 / 60 = 50; 120 × 50 / 2 = 3000.
- ε₀ = NBAω: doubling ω doubles ε₀; frequency f = rotations per second doubles.
- Site checks: 0.080 × 0.050 = 4.0 × 10⁻³; 2π × 50 = 314.159; 100 × 0.40 × 4.0 × 10⁻³ × 314.159 = 50.265 (site 50.24 with 314, printed 50.2); 314.159 × 0.0020 = 0.6283; sin(0.6283) = 0.5878; 50.265 × 0.5878 = 29.55 (prints 29.5 or 29.6 depending on rounding; site 29.5 acceptable); 2π × 25 = 157.08; 80 × 0.50 × 6.0 × 10⁻³ × 157.08 = 37.70; 50 × 0.30 × 0.020 × 10 = 3.0.

## Memory aid check

- **"Slip rings keep it. Split ring flips it."** Meaning, as said in scene 10: slip rings pass the coil's alternating emf to the outside circuit unchanged (AC out); the split ring flips the coil's connections every half turn, so the output stays one direction (DC out). Assumptions checked: simple single-coil generators; the split ring's gap aligned so the flip happens when the coil's emf is zero (the standard design; a misaligned commutator would chop rather than rectify); "it" is the coil's alternating emf, which is the same in both machines (scene 4). It also matches v16's motor: the split ring flips the current in the motor's coil every half turn. It helps a new case: A2 directly, and any "explain why a commutator is not used in an AC generator" question. Introduced after the explanation (5, 6).
- **Considered, not used:** "Split for straight, slip for swing" (less clear about what is kept or flipped).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,315 characters**, 16 scenes. Characters per scene (1 to 16): 637, 567, 579, 366, 498, 570, 574, 307, 394, 192, 319, 306, 171, 433, 312, 75. At 13.3 characters per second the speech is about 475 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 559 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9 (open decision 4); scene 7's energy sentence; scene 1's DC and AC chips' narration (keep the chips).

## Opening frame

v17's final frame (designed in this wave, `phys-y12-m6-v17.md`): paper background; the hobby motor plate with its flywheel turning steadily, a curved amber outline arrow round the flywheel "turned by an outside drive"; no supply, switch or ammeter; coded leads from the motor's terminals to the oscilloscope plate at the right, its screen showing a flat coded trace with a "?"; a rose tag "ε (output)" and a chip "motor → generator"; heading "Why does a spinning DC motor draw less current?"; chip "Next: how do simple AC and DC generators produce different outputs?". Scene 1 turns the chip into the heading and moves into the single-coil model.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; two small chips at the upper left "generator: turning → current" and "motor: current → turning"; at the centre a coded ring of six grey stator coils with a dashed slate field arrow across the middle, rotating; inside it the squirrel-cage rotor plate, end-on, with an index mark turning slightly behind the field arrow; a navy bracket "no wires to the rotor"; a "?" between the field arrow and the rotor's mark; heading unchanged ("How do simple AC and DC generators produce different outputs?"); a chip reads "Next: why must an induction-motor rotor lag the rotating field?". v19 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v18` (route phys-y12-m6-v18). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v18` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v18` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, flux-turning-coil, emf-steepness, both-make-ac, slip-rings, split-ring, what-rings-dont-change, turn-faster, power-station, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: generator stage (ring swap, side tracker, torque arrows), linked graphs with cursor and snapshots, steepness tangent, output trace on the oscilloscope plate, brush-swap close-up, comparison rows, stator ring with rotating field (handoff), `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 camera change (bench to model); 1 to 2 to 3 to 4 camera continue (same stage, graphs added); 4 to 5 camera push-in on the rings; 5 to 6 camera continue (ring swap); 6 to 7 clear change; 7 to 8 camera change; 8 to 9 clear change; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v18-learning-review.md`, `science_check` = `checks/p-y12-m6-v18-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-oscilloscope-v1.png` (2172 × 724; the instrument occupies a small central part of the canvas, so scale it up uniformly and crop by placement, never stretch): 1, 5, 6, 8.
- `public/assets/physics/phys-y11-lamp-holder-v1.png` (1536 × 1024): the load (1, 5).
- `public/assets/physics/phys-y11-power-station-v1.png` (1774 × 887): 9.
- `y12p-hobby-motor-v1.png` and `y12p-motor-flywheel-v1.png` (specified in `phys-y12-m6-v17.md`): the opening inset (1).
- `y12p-squirrel-cage-rotor-v1.png` (specified in `phys-y12-m6-v19.md`): the handoff (15).
- **Checked, not used:** `phys-y11-filament-lamp-v1.png` (the lamp holder reads as a bench load at small size); `phys-y11-power-station-v2.png` (v1 kept for consistency with earlier physics videos; either is fine).

Need: no new plates for v18.

Coded: the generator stage (coil, pole blocks, field, normal, rings, brushes, leads), the linked graphs and tangent, the oscilloscope traces, the split-ring close-up, comparison rows, the power-station cutaway, the stator ring and field arrow, crossed chips, attempt cards and diagram, countdowns, key notes board.

Kit gaps (for the v18 build brief):
1. **Generator stage.** v16's coded motor model with interchangeable slip rings or split ring, a navy normal fixed to the coil, a marked side, and outside-circuit current dots whose direction follows either the coil's emf (slip rings) or its magnitude (split ring).
2. **Linked graphs.** Flux and emf `lineGraph`s sharing a time axis, a cursor tied to the coil angle, a sliding tangent on the flux curve.
3. **Output trace on the oscilloscope plate.** A coded trace in the plate's screen region (coordinates from the plate), sine or rectified sine, with amplitude and frequency parameters for scene 8.

## Codex asset brief

No new plates for v18. The hobby motor and flywheel are specified in `phys-y12-m6-v17.md`; the squirrel-cage rotor in `phys-y12-m6-v19.md`. Codex reports the oscilloscope plate's screen rectangle in plate pixels (for the coded trace) if not already recorded.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: flux maximum face on and zero edge on; emf zero at maximum flux and largest at zero flux, with the cutting reason; a quarter turn out of step; the coil's emf alternates in both machines; slip rings pass AC unchanged, one cycle per turn; the split ring swaps at the emf zero, giving pulsating DC while the coil's current still alternates; the opposing torque under load in both; faster turning raises peak and frequency; turns, field and area change only the peak; power-station generators (rotating electromagnet, fixed coils, 50 Hz, 3000 revolutions per minute for 2 poles).
3. Confirm the hook's move to the single-coil model before any waveform claim (author note a).
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (every coil is turned by a coded drive arrow).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log the three site notes in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: AC and DC Generators: Slip Rings vs Split Ring | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson11.sa.html

Turn the same coil in the same field at the same speed, and one generator gives a row of humps while the other gives a wave. See how the flux through a turning coil changes, why the emf is biggest when the flux is zero, why both coils actually make AC, and how slip rings and a split-ring commutator decide what reaches the outside circuit. Plus why a loaded generator is harder to turn, and how power-station generators work. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the operation of simple DC and AC generators and AC induction motors"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why a spinning DC motor draws less current. Next: why an induction-motor rotor must lag the rotating field.

#HSCPhysics #Physics #Generators #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v17; check that the hook's single-part swap makes "the connection" the obvious answer; that the linked graphs and tangent carry the quarter-turn shift at speed; that side "a" makes the coil's alternating emf convincing; that the split-ring timing is clear in the end-on close-up; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The ring swap with the changing trace, the linked graphs, the brush-swap close-up and the comparison rows carry the explanation; judge them at playback speed in the voiced preview.
