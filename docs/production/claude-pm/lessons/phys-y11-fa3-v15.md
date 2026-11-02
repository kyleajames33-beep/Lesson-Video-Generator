# Year 11 Physics FA3 V15 (Physics 2025, Year 11, Focus Area 3): How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic? The conductor investigation (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v15`, `docs/production/student-learning-review.md`), a Codex physics check (including the safety facts) and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (a digital multimeter, used twice; a resistance-wire board); the bench supply (delivered) and the filament lamp (requested in FA2) reused by name. All data in this video are illustrative and labelled so.

Narration 6,206 characters, 20 scenes, about 567 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: fifteenth video of the Year 11 Physics (2025) Focus Area 3 route and the conductor investigation; it tests what v14 explained (constant resistance gives a straight V-I line; a lamp's resistance rises). Templates: `phys-y11-fa3-v07.md` to `phys-y11-fa3-v09.md` (FA3 section list and conventions) with the investigation format of `phys-y11-fa1-v24.md` and `phys-y11-fa2-v28.md` (FA0 placement table, risk table showing only the spoken row, illustrative data from a stated model, an inconsistency checked before a reading is replaced); FA3 colour key and circuit conventions from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v14.md` (Revision 1; v14's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file (method, illustrative data, FA0 proposals). Site lesson read (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson14.sa.html`, activity 1 (design the Ohm's law test: power supply, rheostat, ammeter, voltmeter, nichrome wire; draw the circuit, vary the voltage, record, sketch the expected V-I graph, read the resistance), card 3 (ohmic and non-ohmic) and its figure, match the pairs ("ammeter in series, voltmeter in parallel: the arrangement needed to collect the V-I data"), Q3 (the lamp's steepening V-I curve; site correction 1 in `phys-y11-fa3-v14.md`); cards 1 and 2, `we-1`, Q1 and Q2 belong to v14. Route entry: `phys-y11-fa3-v15` in `../../phys-y11-video-route.json` (proposed; coverage "owned-action"). Route start: "Start with Conductor investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Complete conductor investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations." Route next (placeholder wording): "phys-y11-fa3-v16: How can I explain and apply electrical power, p = vi and p = v²/r?" (this design proposes "Why do a voltage and a current together set how fast a component transfers energy?" for v16's chip; see open decision 2).

**Opening frame (v14's actual handoff, Revision 1, 3 Nov).** v14's scene 16 ends with its memory line "Resistance is volts per amp, at every point. Straight through the origin: it stays the same. Curving: it's changing." small at the top; a bench laid out but unconnected: the painted bench supply, two painted digital multimeters with blank displays, the painted resistance-wire board and the painted filament lamp; beside them a blank V-I grid ("V (V)" up, "I (A)" across) and an empty results table with columns "V (V)" and "I (A)"; chips "which meter goes where?" and "how many readings?"; chip "Next: How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, hands, faces or body outlines (leads and clips place themselves by code; the supply's dial turns by code; nobody touches the wire); apparatus painted at native aspect (supply, multimeters, resistance-wire board, lamp); circuit diagrams in HSC symbols with conventional current a bold ink "I" arrow (FA3 root decision 17); readouts, tables, graphs and the lattice inset coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question with its data on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v13 (a hotter metal resists more; I ∝ V at constant resistance) and v14 (R = V/I; ohmic and non-ohmic; the gradient of a straight V-I line through the origin is R; a lamp's R at a point is V/I) recalled in a sentence each; FA1 v10 and v15 (variables, mean, range, line of best fit) and FA2 v28 (check an odd reading before replacing it) recalled in a phrase each. Investigation data are illustrative, labelled on screen and said aloud; v14's results are labelled "prediction (v14)" until the data show them.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G2-08 `ci0f358d9a`: "Conduct a laboratory experiment to examine the relationships between voltage and current for ohmic conductors and non-ohmic conductors"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Working scientifically points taught in part, just in time (FA0, local ledger IDs with official codenames, quoted from `docs/production/programme/syllabus/phys-new-y11.json`; proposal for root, see the placement section): P25-FA0-G3-02 `ci86146789`, P25-FA0-G3-03 `ci752a2a2f`, P25-FA0-G2-02 `ci6c11c587`, P25-FA0-G5-02 `ci7afa7b23`, P25-FA0-G5-01 `ci7f1f6fbd`, P25-FA0-G5-05 `ci8856aeb0`, P25-FA0-G3-01 `ci6e7b9681`, P25-FA0-G2-04 `cif90164e3`.

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fad694c6c2

**Boundary:** starts from v14's handoff (above); the aim (test which conductor keeps a constant resistance); the apparatus and the circuit, built from its HSC diagram; where the meters go (ammeter in series, voltmeter across the component), stated as a working rule with a grey tag "why: a later video" (v19 owns the reason); variables and controls with reasons; run 1, the nichrome wire, voltage up in steps, then back down; a prediction (what a warmed wire would do to the down run); one inconsistent reading, checked, explained (the wire had warmed) and retaken; means; the wire's V-I graph, straight through the origin, a best-fit line and its gradient (5.0 Ω): ohmic; a prediction (the lamp's graph shape); run 2, the lamp, each reading after the glow settles; its R = V/I at each point (10 to 21 Ω) and its curve: non-ohmic; the conclusion; limitations and improvements; a three-row risk assessment; two attempts. Stops at conducting and analysing the experiment. Not taught: why ammeters and voltmeters connect as they do (v19); series and parallel analysis (v20, v21); power (v16; the handoff only sets it up); standard deviation and uncertainty bars beyond the range (fa0 videos; author note g).

## Decisions

- **Learner question (route question reworded for plain speech; open decision 1).** Route: "How can I-V measurements distinguish ohmic and non-ohmic behaviour?" It is already answerable, so the meaning is kept; reworded as "How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?" because "I-V measurements" is jargon at Year 11 entry. The answer, built in order: the plan, circuit and meters (1 to 3); variables and controls (4); the wire's readings, up and down (5); a warmed wire predicted and caught (6, 7); its straight graph and gradient: ohmic (8); the lamp's predicted and measured curve: non-ohmic (9 to 11); so the shape of the V-I graph, or V ÷ I at each point, decides (12).
- **The hook (v14's frame, made a plan).** "Last time we worked it out on paper. Today we measure it." No prediction in the hook; the two in-teaching predictions are the warmed wire (6) and the lamp's graph (9).
- **Apparatus (site activity 1, adapted).** A low-voltage DC bench supply with a variable dial (the delivered plate; its knob is v12's coded dial), a switch, a 30 cm length of nichrome wire on a board with two terminals (new plate), a filament lamp in its holder (FA2 request) rated 6.0 V, two digital multimeters (new plate, used twice: one set to amps, one to volts, each with a coded "A" or "V" chip), leads with crocodile clips (coded). The site's rheostat is replaced by the supply's own dial, which sets the voltage in clean steps without introducing the voltage-sharing idea of series circuits (v20); a grey tag "or a rheostat: a later video" sits on the circuit once (open decision 3).
- **Building from the diagram (`ci86146789`).** The HSC-symbol circuit draws first (supply, switch, ammeter, component, voltmeter across the component, bold ink "I" arrow); then each painted part slides onto the bench in the same arrangement, and coded leads draw between their terminals in the order of the diagram's loop, the voltmeter's leads last, clipped to the two ends of the wire.
- **Meters as a working rule (v19 owns the reason).** "The ammeter goes in the loop, so all the current passes through it. The voltmeter connects across the component, to its two ends." A grey tag: "why they connect this way: a later video". This is a necessary condition for the experiment (site match the pairs), so it stays in learner copy (AGENTS caveat rule).
- **Variables and controls, with reasons (`ci9ce164ec` applied).** IV: the voltage across the component (set with the supply's dial, read on the voltmeter). DV: the current through it (ammeter). Controlled for the wire, each with its reason: the same wire and the same length between the clips (length changes R, v13); the wire's temperature, kept near room temperature by small currents, short readings and switching off between readings (a hotter wire resists more, v13); the same meters on fixed ranges. For the lamp, temperature is not controlled: it is what makes the lamp interesting, and each reading waits for the glow to settle (author note d).
- **Illustrative data (labelled; generating model stated, author note c).** Run 1, the wire (R = 5.0 Ω): V 0.50, 1.00, 1.50, 2.00, 2.50, 3.00 V. Up: 0.10, 0.21, 0.30, 0.41, 0.50, 0.61 A. Down (from 3.00 V): 0.55 → inconsistent → wire cooled, retaken 0.59; then 0.50, 0.39, 0.30, 0.19, 0.10 A. Means 0.10, 0.20, 0.30, 0.40, 0.50, 0.60 A. Run 2, the lamp: V 1.0 to 6.0 V in 1.0 V steps: I 0.10, 0.16, 0.20, 0.23, 0.26, 0.28 A (v14's three lamp points included), each the settled reading, repeated once with the same values to two significant figures. Said aloud in scene 5: "These numbers are illustrative, made up to show the method, not real results." Every table, graph and readout carries the grey tag "illustrative data".
- **Prediction 1 (3 s, scene 6): the warmed wire.** "Suppose the wire warmed up during the run. Coming back down, would the currents be higher, lower, or the same?" Chips "higher?", "lower?", "the same?". Answered in 7: lower, because a warmer wire resists more (v13). The first down-run reading (0.55 A against 0.61 A at 3.00 V) is exactly that: before replacing it, the cause is checked (the wire had been left on for a minute while the table was filled in; shown by a faint warm tint and a grey note), then the wire is switched off, cooled and the reading retaken (0.59 A). The narration says "before replacing it, we checked why", so the lesson does not teach dropping awkward numbers (`ci7afa7b23`, `ci8856aeb0`).
- **Up and down runs as the repeat (`ci6c11c587`).** Taking the readings up and then down, and averaging, both repeats each reading and tests the control: if the two runs agree, the wire stayed at one temperature. This is the reliability point made with a reason, not a rule.
- **The wire's graph (`ci7f1f6fbd`; FA1 v15 recalled).** V against I (v14's convention): six mean points, a best-fit straight line through the origin; a slope triangle across most of the line: "3.0 V ÷ 0.60 A = 5.0 Ω". Qualitative: the current rises steadily with voltage. Quantitative: V ∝ I, with V ÷ I the same at every point (5.0 Ω). The range at each point (0.02 A at most) is shown as small grey bars (FA1 v15's minimum treatment; author note g).
- **Prediction 2 (3 s, scene 9): the lamp's graph.** "Using what you know about filaments, sketch the lamp's graph in your head. Straight, curving up, or curving down?" (V up, I across). Chips "straight?", "curving up (steeper)?", "curving down (flatter)?". Answered in 11 by the data, with "prediction (v14)" changing to "observed ✓ (illustrative)".
- **The lamp's analysis (v14's chord method; site correction 1 there).** V ÷ I at each point: 10, 12.5, 15, 17, 19 and 21 Ω, rising; the points curve, steepening; `ChordFromOrigin` lines at three points only (1.0, 3.0 and 6.0 V) to keep the screen light; the full column of R values sits in the table. The tangent slope is never labelled R.
- **Conclusion (`ci0f358d9a`'s "examine the relationships").** The wire: V ∝ I, constant R, a straight line through the origin: ohmic (while its temperature is kept steady). The lamp: R rises from 10 Ω to 21 Ω as it heats, a curved line: non-ohmic. "The same metal can be both": tungsten is ohmic if it is kept at one temperature; the lamp is non-ohmic because its own current heats it (author note e; one sentence).
- **Limitations and improvements (`ci7e38e278` applied).** (1) The wire warms at higher currents, even with care: keep the currents small, take each reading quickly, switch off between readings, and compare the up and down runs. (2) Meter resolution and a meter that doesn't read zero with no current: check each meter reads zero before starting and choose the range that gives the most digits. (3) Loose crocodile clips add extra resistance and can move the measured length: clip firmly, at marked points. Not spoken (teacher note): the meters themselves draw or drop a little (v19).
- **Risk assessment (`cif90164e3`, `ci6e7b9681` partial).** Three spoken rows, hazard, harm and control: (1) a hot nichrome wire (burns; small currents, switch off between readings, don't touch the wire until it cools); (2) the lamp's hot glass, and running it above its rating (burns; the filament can blow: stay at or below 6.0 V, let it cool); (3) a short circuit if the voltmeter is wired into the loop by mistake or the leads touch (overheating leads; check the circuit against the diagram before switching on, start at 0 V). Only the spoken row is shown; earlier rows collapse to one-word grey chips.
- **Attempts (original, HSC style).** (A1, method and variables) "A student investigates how the current in a length of nichrome wire depends on the voltage across it. (a) Identify the independent and dependent variables. (b) State one variable that must be controlled, and explain why it must be controlled. (c) Describe where the ammeter and the voltmeter should be connected. (4 marks)" Answer: IV voltage across the wire, DV current through it; temperature (or length) controlled, because a hotter (or longer) wire has more resistance, which would change the current for a reason other than the voltage; ammeter in series with the wire, voltmeter in parallel across the wire. Crossed: "the voltmeter in series with the wire". (A2, data analysis and evaluation) a printed table for component X: "V (V): 2.0, 4.0, 6.0; I (A): 0.20, 0.32, 0.40". "A student measured the current through a component X at three voltages. The student concludes that X is ohmic because its current increases whenever the voltage increases. (a) Calculate the resistance of X at 2.0 V and at 6.0 V. (b) Evaluate the student's conclusion. (3 marks)" Answer: 10 Ω and 15 Ω; the conclusion is wrong: a rising current is not enough; an ohmic conductor has constant R (V ∝ I), but R rises from 10 Ω to 15 Ω (tripling V gives only twice the current), so X is non-ohmic. Crossed: "ohmic, because the current increases with the voltage".
- **Mistake scene:** none separate. "Drop any reading that looks odd" (7: check first, then retake); "the prediction is the result" (v14's results tagged "prediction" until 8 and 11); "the lamp's resistance is the slope of its curve" (11, chords only); "a rising current means ohmic" (A2 crossed); the voltmeter in the loop (A1 crossed; risk row 3).
- **Memory aid:** "Measure V and I at every step. Same V over I every time: ohmic. V over I changing: non-ohmic." (see "Memory aid check"). It is the tested form of v14's "Resistance is volts per amp, at every point."
- **Handoff (route next; proposal for v16's question).** Board change: the two finished set-ups side by side: the wire at 3.00 V and 0.60 A, faintly warm; the lamp at 6.0 V and 0.28 A, glowing; a hollow gold energy arrow (FA2 root decision 3) leaving each; chips "both transfer energy" and "which one does it faster?"; a grey row "V × I = ?" under each (no product shown); then "Next: Why do a voltage and a current together set how fast a component transfers energy?". This is the frame v16 opens on. (The products, 1.8 W and about 1.7 W, are v16's surprise: the dull wire transfers energy slightly faster than the glowing lamp; author note h.)
- **Site sources used:** lesson 14 activity 1 (apparatus: supply, ammeter, voltmeter, nichrome wire; circuit, vary V, record, sketch, read R: 2 to 5, 8; rheostat replaced, open decision 3); card 3 and its figure (8, 11, 12); match the pairs (meters 3; the straight line and the steepening curve 8, 11; "gradient at a point": not used, corrected in v14); Q3 (11, with v14's correction 1); lesson 13 card 3 (the warm wire, 6, 7) and Q2 (the lamp's settling, 10).
- **Site corrections:** none new for this video (site lesson 14's corrections are logged in `phys-y11-fa3-v14.md`, 1 to 3). Suggestion, not an error: activity 1 asks the student to "vary the voltage" without saying how the wire's temperature is kept steady; suggest adding "use small currents and switch off between readings; take readings up and back down and compare".
- **Cause chain taught, in order:** (1) v14's results as predictions to test (1); (2) the circuit is built from its diagram; the meters' places are fixed (2, 3); (3) controls make the voltage the only change for the wire (4); (4) readings up, then down (5); (5) a warmer wire resists more, so a warmed wire reads lower on the way down: an inconsistent reading has a cause that can be checked (6, 7); (6) the same V ÷ I at every point: a straight line through the origin, gradient R: ohmic (8); (7) the lamp's filament heats more at each step, so R climbs and the line curves: non-ohmic (9 to 11); (8) the graph's shape, or V ÷ I at each point, decides (12); (9) limitations and their fixes (13); (10) risks (14).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (fair tests; simple circuits). From FA1, recalled in a phrase each: v10 (variables, mean, range), v15 (line of best fit; half-range bars at the minimum level). From FA2: v28 (check an odd reading before replacing it). From FA3: v11 (current in amps), v13 (temperature and length change R; I ∝ V at constant resistance), v14 (R = V/I; ohmic and non-ohmic; V-I graph with V up; chords for a lamp).
- **Learner-visible vocabulary (plain meaning at first use):** ammeter (a meter that measures current, 3); voltmeter (a meter that measures the voltage between two points, 3); in series (in the same loop, so the same current passes through, 3); in parallel, across (connected to the two ends of the component, 3); multimeter (a meter that can be set to measure current or voltage, 2); best-fit line (the straight line that passes as close as possible to all the points, 8); inconsistent reading (a reading that doesn't fit the others, 7, screen gloss).
- **Legacy logic ported:** none. Drawing parts only: `DataGraph` and `graphScale` from `src/explainer/physics/course-kit.tsx`; `DataTable` from `src/explainer/lessons/bio-m5-b13/shared.tsx` (row-at-a-time table; copy lesson-local, as FA2 v20 and v28).
- **New explainer motion (coded unless a plate is named):** HSC-symbol **`CircuitDiagram`** (v14) with a **diagram-to-bench build** (each symbol's painted part slides into the matching place; coded leads draw terminal to terminal along the loop); **`MeterDisplay`** (a coded seven-segment readout placed in the multimeter plate's blank display window from its sidecar, with a small "A" or "V" chip); v12's dial on the supply; **table fill** (row at a time; columns V (V), I up (A), I down (A), mean I (A), V ÷ I (Ω)); **inconsistent-reading flag and retake** (an amber ring; the warm tint on the wire; the reading strikes through and the retake writes in); v14's **`VIGraph`** (points on cue, range bars, best-fit line through the origin, slope triangle) and **`ChordFromOrigin`**; v13's **`ConductorLattice`** (a 1-second warm inset in 7 and 11); FA2's hollow gold energy arrow (handoff); **risk table, one row at a time**; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small table; `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the bench (or the circuit diagram) across the upper left; the table under it; the V-I graph in the right half; working under the graph.
- **Colour key:** as v01 to v14: conventional current a bold ink "I" arrow; electron flow navy dotted where drawn (not needed here); the wire's points and line ink; the lamp's points and curve warm amber-brown (v14); chords grey; range bars grey; the inconsistent-reading ring amber; the warm tint pale orange; "illustrative data" tag grey on every data item; crossed items grey scribble; plates avoid red and navy except the supply's red terminal (used as delivered, as in v12, because it is the positive terminal and so agrees with the colour key).
- **No human figures.** Leads and clips place themselves; the dial turns by code; no hand touches the wire or lamp.
- **Author notes (not learner copy):**
  (a) Apparatus: a 0 to 12 V DC bench supply with a variable dial; a switch; 30 cm of nichrome wire (for example 0.32 mm diameter, about 13 Ω m⁻¹, so about 4 Ω; the illustrative 5.0 Ω is in that range) stretched along a wooden board between two terminals; a 6.0 V, 0.3 A filament lamp in a holder; two digital multimeters (10 A or 2 A current range; 20 V range); leads with crocodile clips.
  (b) Meters: an ideal ammeter has negligible resistance and an ideal voltmeter very large resistance; v19 explains why. The video gives the placement rule only.
  (c) Data model. Wire: I = V/5.0 Ω with ±0.01 A reading scatter, means exactly V/5.0. The warm reading: a 10 per cent rise in R (nichrome's temperature coefficient is small, about 4 × 10⁻⁴ K⁻¹, so a 10 per cent rise would need a large temperature rise; the illustrative 0.55 A therefore stands for a thin wire left on and hot to the touch; tagged "illustrative"). A copper or constantan wire would show less drift; nichrome is the site's choice and the usual school wire. Lamp: a smooth convex V-I curve through v14's points (1.0, 0.10), (3.0, 0.20), (6.0, 0.28), with (2.0, 0.16), (4.0, 0.23), (5.0, 0.26); R = 10, 12.5, 15, 17.4, 19.2, 21.4 Ω, shown to two significant figures (10, 13, 15, 17, 19, 21 Ω) in the table; spoken values 10, 15 and about 21.
  (d) A lamp filament reaches a steady temperature within about a second at each new voltage; "wait for the glow to settle" (a few seconds) covers it.
  (e) Tungsten at a fixed temperature obeys V ∝ I; the lamp is non-ohmic because its operating temperature rises with the current. "Ohmic" is a property of a conductor under stated conditions.
  (f) Short-circuit row: a voltmeter wired in the loop by mistake does not short the supply (it blocks the current); the short happens if the ammeter is connected across the supply or the leads touch. The row says "if the ammeter is wired straight across the supply, or bare leads touch" (scene 14's wording) and the A1 crossed mistake is the voltmeter in the loop (wrong readings, not a hazard).
  (g) Uncertainty: the range bars (at most ±0.01 A about the mean) are drawn; percentage error, standard deviation and uncertainty in the gradient are fa0 videos' (FA1 root decision 15 minimum treatment).
  (h) Handoff products: 3.00 × 0.60 = 1.80 W; 6.0 × 0.28 = 1.68 W. Not shown or said.
  (i) Pronunciations: "nichrome" (NY-krome); "multimeter".

Main question: *v14 worked out that a wire at a steady temperature keeps one resistance and a lamp doesn't. How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic, when we actually do it?*
Entry knowledge (Stage 5 fair tests and circuits; FA1 v10, v15 investigation skills; FA2 v28 checking odd readings; FA3 v11 amps; v13 temperature and resistance; v14 R = V/I, ohmic, non-ohmic, chords).
Stops after: the aim, apparatus and circuit; meter placement as a rule; variables and controls; the wire's up and down runs, the warm reading checked and retaken, its straight graph and 5.0 Ω; the lamp's readings, rising R and curve; the conclusion; limitations with improvements; a three-row risk assessment; two attempts. No meter theory, no power.
Handoff: v16, electrical power.

## FA0 Working scientifically placement (proposal for root)

Route root decision: "FA0 (Working scientifically) skills are taught just in time inside or immediately before the investigation videos (fa1-v10, v15, v24, v31 and the FA2/FA3 investigations)". This video adds to that coverage as follows, marking each as **partial** in the ledger.

| FA0 point (ledger ID, codename) | Exact wording (ledger) | Taught in v15 | Left for later |
| --- | --- | --- | --- |
| P25-FA0-G3-02 `ci86146789` | "Construct and manipulate identified materials and technologies to perform scientific investigations" | Scenes 2, 3: the circuit built from its HSC diagram, part by part, meters placed by rule | Combination circuits (v23) |
| P25-FA0-G3-03 `ci752a2a2f` | "Use equipment appropriately and systematically to collect and record data, information, evidence and findings" | Scenes 3 to 5, 10, 13: meters zeroed and on fixed ranges; readings in steps; a table with units; each lamp reading after the glow settles | Data logging (later FA3 investigations) |
| P25-FA0-G2-02 `ci6c11c587` | "Explain how reliable primary data is obtained" | Scenes 5, 7: up and down runs as repeats that also test the temperature control | (continues FA2 v20, v28) |
| P25-FA0-G5-02 `ci7afa7b23` | "Explain patterns and trends , including inconsistencies in data and information" | Scenes 6, 7, 11: the warm reading explained; the lamp's rising R as a trend | (continues across FA3) |
| P25-FA0-G5-01 `ci7f1f6fbd` | "Describe qualitative and quantitative relationships between variables" | Scenes 8, 11, A2: V ∝ I for the wire with V ÷ I = 5.0 Ω (quantitative); the lamp's current rises less for each extra volt (qualitative) | Fitted non-linear models (Year 12) |
| P25-FA0-G5-05 `ci8856aeb0` | "Interpret data and information to identify outliers , make predictions , explain results and draw conclusions" | Scenes 6, 7, 9, 12: two predictions tested; an inconsistent reading checked before it is replaced; the conclusion | (continues across FA3) |
| P25-FA0-G3-01 `ci6e7b9681` | "Apply safe work practices and manage risks while conducting a scientific investigation" | Scene 14: switch off between readings; stay within the lamp's rating; check the circuit before switching on | Other practices (fa0-v02) |
| P25-FA0-G2-04 `cif90164e3` | "Assess potential hazards and their associated risks to develop a risk assessment" | Scene 14: three hazard, harm, control rows for this apparatus | Likelihood and consequence rating (fa0-v02) |

Applied, not re-taught: P25-FA0-G2-01 `ci9ce164ec` (variables and controls with reasons, scene 4, A1), P25-FA0-G4-03 `ci0fca96de` (table and graph), P25-FA0-G5-06 `ci7e38e278` (improvements matched to limitations, scene 13), P25-FA0-G5-03 `ci914a5e7e` (mean and range only, scene 8). Recommendation to root: accept the table and record it in the route as v15's partial FA0 coverage.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as in Decisions.

### 1. hook (measure it)
> Last time, we worked out on paper that a wire at a steady temperature keeps the same resistance, but a lamp's resistance climbs as it heats. Today we test that. How can measuring the current at several voltages show whether a conductor is ohmic, or **non-ohmic**?

Visual: opens on v14's last frame (see "Opening frame"). The "Next" chip becomes the heading: "The conductor investigation"; the memory line fades. On "on paper" small ghosts of v14's straight line and lamp curve appear on the blank grid with a grey tag "prediction (v14)". On "test that" the two multimeter plates pulse. On "non-ohmic" the chips "which meter goes where?" and "how many readings?" slide to the right column as a two-row plan: "run 1: the nichrome wire", "run 2: the lamp".

### 2. the circuit, from its diagram
> Here's the circuit. A supply with a dial lets us set the voltage. A switch, so we can turn it off between readings. Then a meter to measure the current, the component we're testing, and a second meter to measure the voltage across it. Both meters are multimeters, set to amps and to volts. First, the component is thirty centimetres of nichrome **wire**.

Visual: camera continue. The HSC-symbol circuit draws in the upper left as spoken: supply symbol with "0 to 12 V"; on "A switch" a switch symbol (open); on "measure the current" an ammeter symbol "A" in the loop; on "the component" a resistor symbol labelled "component"; on "voltage across it" a voltmeter symbol "V" across the component; a bold ink "I" arrow on the loop. On "Both meters" each painted multimeter (`phys-y11-digital-multimeter-v1.png`) slides beside its symbol, and a coded chip "A" or "V" sits on its dial (gloss "multimeter: a meter set to measure current or voltage"). On "nichrome wire" the painted resistance-wire board (`phys-y11-resistance-wire-board-v1.png`) slides into the component's place, a coded "30 cm" bracket between the clips; the painted supply (`phys-y11-low-voltage-supply-v1.png`) slides into the supply's place.

### 3. where the meters go
> Where each meter goes matters. The ammeter goes in the loop, so all the current passes through it. That's called in series. The voltmeter connects across the wire, one lead to each end. That's called in parallel. We'll see why it has to be this way in a later video. Before switching on, both meters should read **zero**.

Visual: camera continue. On "in the loop" coded leads draw terminal to terminal around the loop in the diagram's order (supply, switch, ammeter, wire, back to the supply); a pale navy dotted pulse runs once around the loop through the ammeter (gloss "in series: in the same loop, so the same current passes through"). On "across the wire" the voltmeter's two leads draw last, clipping to the wire's two terminals (gloss "in parallel: connected to the two ends"). Grey tag "why they connect this way: a later video". On "zero" both `MeterDisplay` readouts show "0.00" with ticks (chip "zero the meters first").

### 4. variables and controls
> We change the voltage across the wire, in half-volt steps, and measure the current through it. To make the voltage the only thing that changes, we keep the same wire, clipped at the same thirty centimetres, because length changes the resistance. And we keep the wire cool, with small currents and the switch off between readings, because a warmer wire resists **more**.

Visual: camera continue. A variables panel builds at the right (FA2 style): "change: voltage across the wire (0.50 V steps)", "measure: current through the wire", then each control with its reason as spoken: "same wire, same 30 cm → length sets R"; "kept cool: small currents, switch off between readings → a warmer wire resists more" (tag "from the resistance video"). On "more" a 1-second `ConductorLattice` inset warms, its flashes speeding up.

### 5. run one: up the voltages
> Now the readings. These numbers are illustrative, made up to show the method, not real results. At half a volt, point one oh amps. At one volt, point two one. Then point three oh, point four one, point five oh, and at three volts, point six one amps. Then we come back down the same steps, to check each reading a second **time**.

Visual: board change: the bench small at the upper left, the results table under it (columns "V (V)", "I up (A)", "I down (A)", "mean I (A)", "V ÷ I (Ω)"; grey tag "illustrative data"). On each reading the dial turns a notch, the switch closes, the voltmeter shows the voltage, the ammeter shows the current, the row fills, and the switch opens: 0.50 V 0.10; 1.00 V 0.21; 1.50 V 0.30; 2.00 V 0.41; 2.50 V 0.50; 3.00 V 0.61. On "come back down" an arrow down the "I down" column.

### 6. prediction: a warm wire
> Quick prediction. Suppose the wire warmed up during the run. Coming back down, would the currents be higher, lower, or the **same**?

Visual: camera continue; the wire on the bench gains a faint warm tint (grey note "suppose it warmed"). On "same" chips "higher?", "lower?", "the same?" and a 3-second countdown ring.

### 7. a reading that doesn't fit
> Lower. A warmer wire resists more, so the same voltage pushes less current. And that's what our first reading on the way down showed: point five five amps at three volts, against point six one on the way up. Before replacing it, we checked why. The wire had been left on for a minute, and it was warm. So we switched off, let it cool, and took it again: point five nine. The rest of the down run matched the up run, so the wire stayed **cool**.

Visual: camera continue. Chip "lower?" glows; "higher?" and "the same?" take grey scribble crosses. On "point five five" the down cell at 3.00 V fills "0.55"; an amber ring circles it (gloss "inconsistent reading: one that doesn't fit the others"). On "we checked why" a grey note slides beside the row: "left on for a minute"; the wire's warm tint shows. On "switched off" the switch opens and the tint fades; on "took it again" "0.55" strikes through and "0.59" writes in. On "the rest of the down run" the column fills: 0.50, 0.39, 0.30, 0.19, 0.10. On "cool" the mean column fills: 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, and the "V ÷ I" column: 5.0 in every row.

### 8. the wire's graph: a straight line
> Now plot the means, voltage up the side and current along the bottom. The points sit on a straight line through the origin. The ups and downs agree to within point oh one of an amp, shown by these little bars. The gradient is three volts over point six oh amps: five point oh ohms. And V over I is five ohms at every point. So the current is proportional to the voltage, the resistance stays constant, and this wire is **ohmic**.

Visual: board change: the V-I grid at the right (`VIGraph`, "V (V)" up, "I (A)" across; tag "illustrative data"). On "plot the means" six ink points drop in from the table. On "straight line through the origin" a best-fit line draws through the origin and the points (gloss "best-fit line: the straight line closest to all the points"). On "little bars" small grey range bars on each point. On "gradient" a slope triangle across the line: "rise 3.0 V, run 0.60 A"; row "gradient = 3.0 ÷ 0.60 = 5.0 Ω". On "every point" the V ÷ I column pulses. On "ohmic" v14's ghost line under the data and its tag "prediction (v14)" changes to "observed ✓ (illustrative)"; chip "wire at a steady temperature: ohmic".

### 9. prediction: the lamp's graph
> Now swap the wire for the lamp, and take the voltage up to six volts, its rating. Before we measure, think about the filament. Will its graph be straight, curve up and get steeper, or curve down and get **flatter**?

Visual: board change: on "swap" the painted filament lamp (`phys-y11-filament-lamp-v1.png`) slides into the component's place on the bench and in the diagram (lamp symbol); the voltmeter's clips move to the lamp holder's terminals. A fresh table (columns "V (V)", "I (A)", "V ÷ I (Ω)") and a fresh grid. On "flatter" chips "straight?", "steeper?", "flatter?" with tiny sketch icons, and a 3-second countdown ring.

### 10. run two: the lamp
> At each step, we wait a few seconds for the glow to settle, then read. At one volt, point one oh amps. At two volts, point one six. At three volts, point two oh. Then point two three, point two six, and at six volts, point two eight amps. Every extra volt adds less current than the one **before**.

Visual: camera continue. On each reading the dial turns, the lamp's coded glow brightens and steadies (a short settle shimmer), and the row fills: 1.0 V 0.10; 2.0 V 0.16; 3.0 V 0.20; 4.0 V 0.23; 5.0 V 0.26; 6.0 V 0.28 (tag "illustrative data"). On "less current" a grey column beside the table shows the step-ups: "+0.06, +0.04, +0.03, +0.03, +0.02".

### 11. the lamp's curve
> Plotted, the points curve upwards, getting steeper. Work out V over I at each point. The resistance climbs from ten ohms at one volt, to fifteen at three, to about twenty-one at six. That's the filament heating, as its ions vibrate harder and the electrons collide more often. Its resistance changes, so the lamp is **non-ohmic**.

Visual: camera continue. On "Plotted" six amber-brown points drop onto the grid and a smooth curve draws through them and the origin. On "V over I" the table's last column fills: 10, 13, 15, 17, 19, 21 Ω; `ChordFromOrigin` grey lines at the 1.0, 3.0 and 6.0 V points with readouts "10 Ω", "15 Ω", "21 Ω". On "heating" a 1-second warm `ConductorLattice` inset beside the lamp. Chip "steeper?" glows; "straight?" and "flatter?" take grey scribble crosses. On "non-ohmic" v14's ghost curve and its tag "prediction (v14)" change to "observed ✓ (illustrative)"; chip "lamp: R rises as it heats: non-ohmic". Grey tag on the curve: "resistance = V ÷ I at the point".

### 12. conclusion and the memory aid
> For the wire kept cool, the current is proportional to the voltage, and its resistance stays at five ohms: ohmic. For the lamp, the resistance doubles as the filament heats, so the graph curves: non-ohmic. The difference is temperature. Keep any metal at one temperature, and it behaves ohmically. So remember. Measure V and I at every step. Same V over I every time, ohmic. V over I changing, **non-ohmic**.

Visual: board change: both graphs side by side, small; a conclusion panel builds as spoken: "wire (kept cool): V ∝ I, R = 5.0 Ω constant: ohmic"; "lamp: R from 10 Ω to 21 Ω as it heats: non-ohmic"; "the difference: temperature". On "So remember" the handwritten line writes large: "Measure V and I at every step. Same V ÷ I every time: ohmic. V ÷ I changing: non-ohmic." Hold about 2 seconds.

### 13. limitations and improvements
> Even with care, the wire warms a little at higher currents. So keep the currents small, read quickly, switch off between readings, and compare the up and down runs. A meter that doesn't start at zero, or reads too few digits, adds error, so zero it first, and choose the range with the most digits. And loose clips add extra resistance, so clip firmly, at marked **points**.

Visual: board change: a limitations list builds, each row with its improvement as spoken: "the wire warms → small currents, quick readings, switch off, compare up and down"; "meter zero and resolution → zero first; the range with the most digits" (a `MeterDisplay` showing "0.6" changing to "0.61" on a finer range); "loose clips → clip firmly at marked points" (a crocodile clip on the board's scale snapping tight at "30 cm").

### 14. risk assessment
> Now the risks. Nichrome gets hot enough to burn, so keep the currents small, switch off between readings, and don't touch the wire until it cools. The lamp's glass gets hot too, and above its rating the filament can blow, so stay at or below six volts. And if the ammeter is wired straight across the supply, or bare leads touch, the leads can overheat. So check the circuit against the diagram, and start from zero volts, before switching **on**.

Visual: board change: the risk table, one row at a time (hazard, harm, control): "hot nichrome wire | burns | small currents; switch off between readings; don't touch until cool"; "hot lamp; running above its rating | burns; the filament blows | stay at or below 6.0 V; let it cool"; "short circuit (ammeter across the supply, or bare leads touching) | overheating leads | check the circuit against the diagram; start from 0 V". Only the spoken row is shown in full; earlier rows collapse to grey chips "hot wire", "hot lamp".

### 15. attempt 1 (countdown, 10 seconds)
> Your turn. A student investigates how the current in a nichrome wire depends on the voltage across it. Identify the independent and dependent variables. State one variable to control, and explain why. Then describe where the ammeter and the voltmeter should go. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A student investigates how the current in a length of nichrome wire depends on the voltage across it. (a) Identify the independent and dependent variables. (b) State one variable that must be controlled, and explain why it must be controlled. (c) Describe where the ammeter and the voltmeter should be connected. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 1 (brief)
> The voltage across the wire is independent, and the current through it is dependent. Control the wire's temperature, because a warmer wire has more resistance, and that would change the current for a reason other than the **voltage**. The ammeter goes in series with the wire, and the voltmeter in parallel across it. A voltmeter in the loop measures the wrong **thing**.

Visual: card shrinks to the top; "current", "depends on" and "voltage across it" underlined. Rows: on "dependent" "(a) IV: voltage across the wire; DV: current through it", boxed; on "voltage" "(b) temperature (or length): it changes R, so it would change I", boxed; "(c) ammeter in series; voltmeter in parallel across the wire", boxed, with the small HSC-symbol circuit from 2. On "thing" a chip "voltmeter in series with the wire" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. attempt 2 (countdown, 10 seconds)
> Last one. A student measured the current through component X at three voltages. The student concludes that X is ohmic, because its current goes up whenever the voltage goes up. Calculate X's resistance at two volts and at six volts. Then evaluate the student's conclusion. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small table: "A student measured the current through a component X at three voltages." Table: "Voltage (V): 2.0, 4.0, 6.0"; "Current (A): 0.20, 0.32, 0.40". "The student concludes that X is ohmic because its current increases whenever the voltage increases. (a) Calculate the resistance of X at 2.0 V and at 6.0 V. (b) Evaluate the student's conclusion. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 18. feedback 2 (brief)
> At two volts, R is two over point two oh, ten ohms. At six volts, six over point four oh, fifteen **ohms**. The resistance rises, so X is non-ohmic, and the conclusion is wrong. Tripling the voltage only doubles the current. A current that goes up with the voltage isn't enough. For ohmic, V over I has to stay the **same**.

Visual: card shrinks to the top; the table stays. Rows: "(a) 2.0 ÷ 0.20 = 10 Ω; 6.0 ÷ 0.40 = 15 Ω", boxed; on "conclusion is wrong" "(b) R rises (10 Ω to 15 Ω): not constant, so non-ohmic; the conclusion is not supported", boxed. On "isn't enough" a chip "ohmic, because the current increases with the voltage" fades in and takes a grey scribble cross. Hold about 1 second.

### 19. handoff
> So the wire and the lamp both pass current, and both transfer energy, as the wire warms and the lamp glows. But which one is transferring energy faster? And how do the voltage and the current together decide how **fast**?

Visual: board change: the memory line small at the top. The two finished set-ups side by side on the bench: the resistance-wire board with its meters reading "3.00 V" and "0.60 A", the wire faintly warm; the lamp with "6.0 V" and "0.28 A", glowing. On "transfer energy" a hollow gold energy arrow leaves each (chip "both transfer energy"). On "faster" chip "which one does it faster?"; a grey row "V × I = ?" under each set-up. Then the chip "Next: Why do a voltage and a current together set how fast a component transfers energy?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 20. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Method: vary the voltage across the component in steps (IV) and measure the current through it (DV). Ammeter in series; voltmeter in parallel across the component. Zero the meters first.
2. Controls for the wire: the same wire and length; a steady temperature (small currents, switch off between readings). Take readings up and back down, and average; if the runs disagree, check why before retaking.
3. Ohmic (the wire kept cool): V-I graph a straight line through the origin; V ÷ I constant; gradient = R (5.0 Ω here).
4. Non-ohmic (the filament lamp): V-I graph curves upwards; V ÷ I rises (10 Ω to 21 Ω here) because the filament heats.
5. Risks: hot wire and lamp (burns): small currents, switch off, let them cool; stay within the lamp's rating; check the circuit before switching on.

Memory aid (large, on the notes screen): *Measure V and I at every step. Same V ÷ I every time: ohmic. V ÷ I changing: non-ohmic.*

At the end the notes cross-fade back to scene 19's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the meters go where they do: the ammeter must carry the same current, the voltmeter must compare the two ends (3, rule; the deeper reason is v19's). Why each control: length and temperature both change R (4). Why a warmed wire reads lower: more resistance, less current for the same voltage (7). Why up and down runs: they repeat and test the temperature control (5, 7). Why the wire is ohmic: V ÷ I is the same at every point (8). Why the lamp's points curve: its filament heats more at each step, so R climbs (11). Why the same metal can be either: temperature (12).
- **Misconceptions addressed:** drop an odd reading (7: check first); a prediction is a result (tags until 8 and 11); the slope of the lamp's curve is its resistance (11, chords only); a rising current means ohmic (A2 crossed); the voltmeter in the loop (A1 crossed).
- **One idea at a time:** circuit (2), meters (3), controls (4), readings (5), the warm reading (6, 7), the wire's graph (8), the lamp's prediction and readings (9, 10), its analysis (11), conclusion (12), limitations (13), risks (14).
- **Video makes it easier:** the student sees the circuit built part by part from its diagram (2, 3), each reading taken with the dial, switch and both displays (5, 10), an amber ring land on a reading and the warm tint explain it before the retake (7), the wire's points line up with a 5.0 Ω slope triangle (8), the lamp's chords steepen as its glow brightens (11).
- **Response opportunity:** two 3 s predictions (6, 9); two unseen HSC-style tasks, 10 seconds each, every condition on the card (the wire and its variables; the full table and the student's claim), nothing answer-bearing. One crossed mistake each; feedback about 28 s and 25 s.
- **Avoided double teaching:** v13's temperature cause and v14's R = V/I, ohmic and non-ohmic and chords recalled in a sentence each (4, 8, 11); FA1's best-fit line and range in a phrase (8); meter theory left to v19.
- **Syllabus coverage:** `ci0f358d9a`: a laboratory experiment conducted (method, controls, repeated readings, an inconsistency handled), examining the V-I relationship for an ohmic conductor (the wire, 5 to 8) and a non-ohmic conductor (the lamp, 9 to 11), with the conclusion (12), limitations (13), risks (14) and both attempts.
- **Out of scope by design:** why meters connect as they do (v19); rheostat circuits as voltage control (v20 or later); power (v16, set up in 19); standard deviation and gradient uncertainty.

## Practice questions and model answers

**Attempt 1 (scene 15; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A student investigates how the current in a length of nichrome wire depends on the voltage across it. (a) Identify the independent and dependent variables. (b) State one variable that must be controlled, and explain why it must be controlled. (c) Describe where the ammeter and the voltmeter should be connected."
Model answer: (a) Independent: the voltage across the wire. Dependent: the current through the wire. (b) The temperature of the wire (keep currents small and switch off between readings), because the resistance of a metal increases with temperature; a change in temperature would change the current for a reason other than the voltage, so the relationship would not be valid. (Accept the length of wire between the clips, because a longer wire has more resistance.) (c) The ammeter in series with the wire (in the same loop, so the current through the wire passes through it); the voltmeter in parallel across the wire (one lead to each end). Classic mistake (crossed): "the voltmeter in series with the wire".

**Attempt 2 (scene 17; original wording, HSC style, 3 marks suggested).** "A student measured the current through a component X at three voltages. [Voltage (V): 2.0, 4.0, 6.0. Current (A): 0.20, 0.32, 0.40.] The student concludes that X is ohmic because its current increases whenever the voltage increases. (a) Calculate the resistance of X at 2.0 V and at 6.0 V. (b) Evaluate the student's conclusion."
Model answer: (a) R = V/I: 2.0 ÷ 0.20 = 10 Ω; 6.0 ÷ 0.40 = 15 Ω. (b) The conclusion is not supported. An ohmic conductor has a constant resistance, so V is proportional to I (tripling V would triple I). For X, tripling V from 2.0 V to 6.0 V only doubles I, and R rises from 10 Ω to 15 Ω (12.5 Ω at 4.0 V), so X is non-ohmic. A current that increases with voltage is true of both kinds and does not decide. Classic mistake (crossed): "ohmic, because the current increases with the voltage".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Wire | 30 cm nichrome; 0.50 to 3.00 V in 0.50 V steps | 2, 4, 5 |
| Wire up run (illustrative) | 0.10, 0.21, 0.30, 0.41, 0.50, 0.61 A | 5 |
| Wire down run (illustrative) | 3.00 V: 0.55 (inconsistent) → 0.59 retaken; then 0.50, 0.39, 0.30, 0.19, 0.10 A | 7 |
| Wire means | 0.10, 0.20, 0.30, 0.40, 0.50, 0.60 A; V ÷ I = 5.0 Ω each; range at most ±0.01 A | 7, 8 |
| Wire gradient | 3.0 V ÷ 0.60 A = 5.0 Ω | 8, 12 |
| Lamp (illustrative; v14's points included) | 1.0 V 0.10 A 10 Ω; 2.0 V 0.16 A 12.5 Ω (13); 3.0 V 0.20 A 15 Ω; 4.0 V 0.23 A 17.4 Ω (17); 5.0 V 0.26 A 19.2 Ω (19); 6.0 V 0.28 A 21.4 Ω (21) | 9 to 12 |
| Lamp step-ups | +0.06, +0.04, +0.03, +0.03, +0.02 A | 10 |
| Lamp rating | 6.0 V | 9, 14 |
| A2 | 2.0 V 0.20 A 10 Ω; 4.0 V 0.32 A 12.5 Ω; 6.0 V 0.40 A 15 Ω | 17, 18 |
| Handoff | wire 3.00 V, 0.60 A; lamp 6.0 V, 0.28 A (products 1.80 W and 1.68 W, not shown) | 19 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- Wire: (0.10 + 0.10)/2 = 0.10; (0.21 + 0.19)/2 = 0.20; (0.30 + 0.30)/2 = 0.30; (0.41 + 0.39)/2 = 0.40; (0.50 + 0.50)/2 = 0.50; (0.61 + 0.59)/2 = 0.60; V ÷ mean I = 5.0 at each step; 3.0 ÷ 0.60 = 5.0.
- Lamp: 1.0 ÷ 0.10 = 10; 2.0 ÷ 0.16 = 12.5; 3.0 ÷ 0.20 = 15; 4.0 ÷ 0.23 = 17.4; 5.0 ÷ 0.26 = 19.2; 6.0 ÷ 0.28 = 21.4; differences 0.06, 0.04, 0.03, 0.03, 0.02; 21.4 ÷ 10 ≈ 2.1 ("doubles" in 12).
- A2: 2.0 ÷ 0.20 = 10; 4.0 ÷ 0.32 = 12.5; 6.0 ÷ 0.40 = 15; 0.40 ÷ 0.20 = 2.
- Handoff (not shown): 3.00 × 0.60 = 1.80; 6.0 × 0.28 = 1.68.

## Safety facts check (self-check, 3 Nov; Codex to confirm)

- **Hot resistance wire.** Thin nichrome carrying about 1 A or more heats quickly and can burn skin; at the 0.6 A maximum here it warms, and left on it can get hot. Controls: small currents, switch off between readings, don't touch until cool. Learner copy as scene 14.
- **Filament lamp.** The glass gets hot within seconds of glowing; above the rated voltage the filament overheats and fails (it can break the glass rarely). Controls: stay at or below the rating (6.0 V here), let it cool before removing. Learner copy as scene 14.
- **Short circuit.** An ammeter (very low resistance) connected straight across the supply, or bare leads touching, gives a very large current: leads and the meter's fuse can overheat. A voltmeter wrongly placed in the loop is not a hazard (it blocks the current); it gives wrong readings (A1's crossed mistake). Controls: check the circuit against the diagram before switching on; start at 0 V. Learner copy as scene 14 (author note f).
- **Low voltage.** The supply is a low-voltage DC supply; no mains connection is made at the bench, so no electric shock row is needed (stated in teacher notes only).

## Memory aid check

- **"Measure V and I at every step. Same V ÷ I every time: ohmic. V ÷ I changing: non-ohmic."** Written for this lesson, as the tested form of v14's "Resistance is volts per amp, at every point." Meaning, as said in scene 12: take readings of both quantities at each setting and divide; a constant ratio means a constant resistance (ohmic), a changing one means a changing resistance (non-ohmic). Assumptions checked: "the same" means within the measurement's spread (the wire's V ÷ I are equal to two figures here; real data scatter a little, which the range bars show); the rule needs the readings to start from a current that is not zero (V ÷ I at 0 V is undefined; the table starts at 0.50 V); "ohmic" holds under the stated condition (steady temperature), said in 12. Introduced after both runs (8, 11).
- **Considered, not used:** the site's lesson 14 hook "the gradient IS the resistance" (wrong for curves; `phys-y11-fa3-v14.md` site correction 1).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,206 characters** (6,225 joined), 20 scenes. Characters per scene (1 to 20): 259, 350, 317, 365, 326, 128, 440, 425, 211, 294, 326, 404, 370, 443, 283, 363, 294, 316, 217, 75. At 13.3 characters per second the speech is about 467 s; add about 14 s of holds and settling (the circuit build in 2 and 3, the readings in 5 and 10, the retake in 7, the graphs in 8 and 11), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 567 s**, inside the owner's 5 to 10 minute target (a first draft at 6,294 characters was trimmed by 88). If the voiced preview runs long, the first cut is scene 13's meter row (about 120 characters; the row stays on screen silent), then scene 7's last sentence (about 70 characters; the column fills silently).

## Scene list and build ids

Lesson key `p-y11-fa3-v15` (route phys-y11-fa3-v15). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v15` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v15` (root to confirm).

In order (kebab-case; 20 scene headings, all `### N.`): hook, circuit-from-diagram, meters, variables-controls, run-one-up, warm-wire-prediction, inconsistent-reading, wire-graph, lamp-prediction, run-two-lamp, lamp-curve, conclusion-memory-aid, limitations, risk-assessment, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). warm-wire-prediction and lamp-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v14's last frame continues into scene 1 (camera continue: the bench, grid and table carry over); 1 to 2 to 3 to 4 camera continue (the circuit builds); 4 to 5 board change (bench small, table); 5 to 6 to 7 camera continue; 7 to 8 board change (graph); 8 to 9 board change (lamp swapped in); 9 to 10 to 11 camera continue; 11 to 12 board change; 12 to 13 board change; 13 to 14 board change; attempts and feedback card shrink to the top; 18 to 19 board clear; 19 to 20 fade to the notes board, and 20 cross-fades back to 19's final frame.

Holds: warm-wire-prediction and lamp-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v15-learning-review.md`, `science_check` = `checks/p-y11-fa3-v15-physics-check.md`.

## Assets

Checked first (3 Nov): `public/assets/physics/` holds the bench supply (`phys-y11-low-voltage-supply-v1.png`: brushed grey case, red rocker switch, one knob, red and black terminals) and FA1 plates; no meter, resistance wire, lamp or clip plate is delivered. Reused by name (uniform scaling only, never stretched):
- `phys-y11-low-voltage-supply-v1.png` (delivered; 2 to 14, 19; its knob is v12's coded dial).
- `phys-y11-filament-lamp-v1.png` (requested in `phys-y11-fa2-v13.md`, not yet delivered; 9 to 12, 19; its sidecar's filament centre places the glow; the brief describes a clear bulb in a black holder on a small stand, which suits a 6 V lab lamp).

New (requested below): `phys-y11-digital-multimeter-v1.png` (used twice; 2 to 19), `phys-y11-resistance-wire-board-v1.png` (2 to 8, 19).

Considered, not used: a rheostat plate (the supply's dial replaces it; open decision 3); a switch plate and crocodile clip leads (coded, as v12's leads); a thermometer (the warm reading is checked by its cause, the time left on; a thermometer on a thin wire would not read it reliably).

Coded: the HSC-symbol circuit, leads, clips, the switch, meter readouts, the tables, the warm tint, the amber ring, the graphs, points, range bars, best-fit line, slope triangle, chords, the lattice inset, the energy arrows, the risk table, working.

Kit gaps (for the build brief): **diagram-to-bench build**; **`MeterDisplay`** placed from the multimeter sidecar; **inconsistent-reading flag and retake** (FA2 v28's outlier part, reused); v14's `VIGraph` with range bars and best-fit line and `ChordFromOrigin`.

## Codex asset brief (Year 11 Physics FA3 v15, conductor investigation)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, numerals or brand marks, no people or hands, never stretched). Save to `public/assets/physics/`.

1. `phys-y11-digital-multimeter-v1.png`: a school digital multimeter, straight-on front view with a slight top-left light: a dark grey rectangular body with rounded corners and a lighter grey rubber edge, a large blank pale grey-green LCD window near the top (no digits), a round rotary selector dial below it with plain unlabelled tick marks around it (no symbols), and three round socket terminals along the bottom (two black, one plain grey; no red, so the FA3 charge colours stay clear). About 900 px tall. Sidecar `phys-y11-digital-multimeter-v1.json`: the LCD window's rectangle (for coded digits), the dial centre and radius, and the three socket centres, in plate pixels.
2. `phys-y11-resistance-wire-board-v1.png`: a pale wooden board about five times as long as it is wide, three-quarter view from slightly above with a top-left light; a thin bare silver-grey resistance wire stretched straight along the board between two brass screw terminals near each end; a plain printed-style scale along one edge shown only as evenly spaced tick marks (no numerals); about 1800 px wide. Sidecar `phys-y11-resistance-wire-board-v1.json`: both terminal points, the wire's start and end points, and the tick marks' first and last positions (for a coded "30 cm" bracket and clip positions).

Acceptance: true transparency, no halo; no text, numerals, symbols or brand marks; no red or navy; correct proportions; not stretched. The lamp request in `phys-y11-fa2-v13.md` is unchanged.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, tables, graphs, attempts and key notes against the "Numbers used" table.
2. Confirm the physics and method claims: an ammeter is connected in series and a voltmeter in parallel across the component; a warmer metal wire has more resistance, so a warmed wire gives a lower current at the same voltage; taking readings up and back down both repeats them and tests the temperature control; for the wire, V ÷ I is constant and the V-I graph (V vertical) is a straight line through the origin with gradient R = 5.0 Ω; for the lamp, V ÷ I rises as the filament heats and the V-I curve steepens; its resistance at a point is V ÷ I, not the tangent slope; a metal kept at one temperature behaves ohmically.
3. Confirm the safety facts (see the section above): hot nichrome and lamp glass burn; running a lamp above its rating can blow the filament; an ammeter across the supply or touching leads is a short circuit; a voltmeter in the loop is a wrong reading, not a hazard.
4. Confirm no meter theory (why ammeters and voltmeters connect as they do), no power value and no series or parallel analysis is taught.
5. Confirm every data item carries "illustrative data" and the narration says so in scene 5; confirm v14's results are tagged "prediction" until scenes 8 and 11.
6. Confirm both attempt questions are original in wording, carry every condition and their data, and give nothing away.
7. Confirm the syllabus and FA0 quotes match the syllabus JSON exactly and no 2017-syllabus label appears.
8. Confirm the opening frame matches `phys-y11-fa3-v14.md` scene 16.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Ohmic vs Non-Ohmic: The V-I Investigation | Year 11 Physics

(Title length: 59 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson14.sa.html

Is a wire really ohmic, and does a lamp really break the rule? Build the circuit from its diagram, put the ammeter and voltmeter in the right places, and take readings up and back down the voltages for a nichrome wire and a filament lamp. Catch a reading that doesn't fit and find out why before retaking it, plot both V-I graphs, read the wire's resistance from its gradient and the lamp's from V ÷ I, then weigh up the limitations and the risks. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Conduct a laboratory experiment to examine the relationships between voltage and current for ohmic conductors and non-ohmic conductors" (ci0f358d9a)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Ohm's law, ohmic and non-ohmic conductors (previous video). Next: Electrical power.

#Year11Physics #Physics #OhmsLaw #PhysicsPractical #HSCScience

## Open decisions

- **1. Learner question wording.** The route's question is answerable; the design rewords it for plain speech ("How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?"). Root to enter the reworded form, or keep the route's (then v14's chip and this heading change).
- **2. v16's question (proposal).** The handoff chip uses "Why do a voltage and a current together set how fast a component transfers energy?" for phys-y11-fa3-v16 (route placeholder "How can I explain and apply electrical power, p = vi and p = v²/r?"). v16's designer adopts or rewrites it; root aligns the chip. The unshown products (1.80 W, 1.68 W) are offered to v16 as its hook.
- **3. Supply dial in place of the site's rheostat.** Keeps the method clean before series circuits (v20). Root may prefer the rheostat (the usual school kit); then scene 2 adds one sentence and the plate list adds `phys-y11-rheostat-v1.png`.
- **4. The warm reading (7).** Illustrative and tagged; the physics check confirms it is plausible for a thin nichrome wire left on (author note c), or the value is changed to 0.58 A.
- **5. Route refinement (root to record).** Start "Begin at v14's unconnected bench with a blank V-I grid and table; recall R = V/I, ohmic and non-ohmic"; stop "Stop at the conducted wire and lamp runs, both graphs, the conclusion, limitations and risks; hand power to v16". Entry knowledge should add FA2 v28 (checking an odd reading).
- **6. Site link form.** As FA1 v08 (the site's practical is in lesson 14).

## Review notes

- Revision 1 next steps: student learning review (trace from v14 at Year 11 entry; check that the diagram-to-bench build makes the meter placement concrete without meter theory; that the up-and-down runs read as a repeat with a purpose; that the warm reading is checked before it is replaced; that the two graphs make the conclusion visible; that the attempts give nothing away), then the Codex physics check (with the safety facts) and error check.
- The circuit building from its diagram (2, 3), the readings taken with the dial, switch and displays (5, 10), the amber ring and the warm tint before the retake (7), the 5.0 Ω slope triangle (8) and the lamp's chords steepening with its glow (11) carry the explanation; judge them at playback speed in the voiced preview.
