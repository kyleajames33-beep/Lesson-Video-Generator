# Year 11 Physics FA3 V14 (Physics 2025, Year 11, Focus Area 3): Why does doubling the voltage double a resistor's current but not a lamp's, and how does V = IR handle both? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v14`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new; the bench supply (delivered) and the filament lamp (requested in FA2) reused by name.

Narration 5,448 characters, 17 scenes, about 512 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,000 to 5,500 range the template allows: one syllabus point, fully taught (the four factors moved to v13); not padded.

Scope: fourteenth video of the Year 11 Physics (2025) Focus Area 3 route: resistance defined as voltage per unit current, R = V/I, the ohm, and V = IR with its rearrangements; solving for R and for I; a constant resistance (the cool nichrome coil): V proportional to I, a straight V-I line through the origin whose gradient is R, "ohmic"; a varying resistance (the filament lamp): R = V/I at each point rises as the filament heats, the V-I line curves, "non-ohmic", and V = IR still applies at every instant; a circuit with a variable resistor (rheostat): at a fixed voltage, I = V/R. Templates: `phys-y11-fa3-v07.md` to `phys-y11-fa3-v09.md` (concept format, section list, calculations as task, equation and grouped givens), with `phys-y11-fa1-v22.md` behind them; FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v13.md` (Revision 1; v13's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson14.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 the V = IR relationship, true or false, card 2 solving circuit problems with `we-1` and the quick check, activity 1 design the Ohm's law test, odd one out, card 3 ohmic and non-ohmic conductors with its figure description, last check, match the pairs, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 14 ("On a V against I graph, the gradient IS the resistance."; not adopted as worded, see "Memory aid check" and site correction 1). Route entry: `phys-y11-fa3-v14` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below; ownership change proposed in `phys-y11-fa3-v13.md` open decision 1). Route start: "Start with Ohm's Law, Ohmic and Non-Ohmic Conductors. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply ohm's law, ohmic and non-ohmic conductors? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa3-v15: How can I-V measurements distinguish ohmic and non-ohmic behaviour?" (v15 is designed in the same session and words it "How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?").

**Opening frame (v13's actual handoff, Revision 1, 3 Nov).** v13's scene 17 ends with its memory line "Same metal: long and thin resists, short and fat lets it through. Hot resists more." small at the top; the painted bench supply with its coded dial at "6.0 V" feeding, on the left, a resistor labelled "nichrome coil, kept cool" and, on the right, the painted filament lamp glowing; beneath them a small HSC-symbol circuit (supply, resistor and lamp on two branches, each with a bold ink "I" arrow); readouts "0.40 A" (coil, chip "doubled", ticked) and "0.28 A" (lamp, chip "not doubled?"), each with its ghosted 3.0 V reading "0.20 A"; chips "how many ohms?" and "why not double?"; chip "Next: Why does doubling the voltage double a resistor's current but not a lamp's, and how does V = IR handle both?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the dial and the rheostat's slider move by code); the bench supply and the filament lamp painted (apparatus); circuit diagrams in HSC symbols with conventional current as a bold ink "I" arrow (FA3 root decision 17); graphs, the resistance triangle, readouts and working coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original questions; key-notes hold; Australian spelling; no em dashes; v10 (volts as energy per coulomb), v11 (amps as coulombs per second) and v13 (collisions as resistance; I ∝ V at constant resistance; a hot metal resists more; the lamp at switch-on) recalled in a phrase each; Stage 5 Mathematics (gradient as rise over run; rearranging) recalled in a phrase.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G2-07 `ci3bbf4fbd`: "Analyse the relationships between voltage, current and resistance using V = IR for electric circuits having constant and variable resistance"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

(The route also lists `cib4d17ff9`, the four factors, under v14. `phys-y11-fa3-v13.md` teaches it, following site lesson 13; see its open decision 1. This design does not re-teach the factors; it recalls "a hot metal resists more" in one phrase.)

**Boundary:** starts from v13's handoff (above); the hook (how many ohms, and has the lamp's resistance gone up, down or stayed the same?); resistance as the volts needed per amp, R = V/I, the ohm (one volt per amp); the coil's two readings both give 15 Ω, so V = IR with R constant; the three forms and the triangle; the site's `we-1` (24 Ω); the site's quick check (12 V across 48 Ω: 0.25 A); the V-I graph for the coil (straight through the origin, gradient = R), "ohmic"; the lamp's resistance at three points (10, 15 and about 21 Ω) and why it rises (v13); its curved graph, "non-ohmic", R = V/I at each point (the line from the origin, not the slope of the curve); a prediction (halve a rheostat's resistance); the variable-resistor circuit at a fixed 12 V; memory aid; two attempts. Stops at using V = IR for constant and changing resistance and classifying ohmic and non-ohmic from data. Not taught: the investigation, meters and how they connect (v15 for use, v19 for why); power (v16); series and parallel totals (v20, v21: the handoff circuit's two branches are not analysed); diodes and thermistors (not in the point; author note e).

## Decisions

- **Learner question (v13's proposal adopted; route placeholder rewritten).** "Why does doubling the voltage double a resistor's current but not a lamp's, and how does V = IR handle both?" One causal question carrying the point's two cases: "constant resistance" (the coil) and "variable resistance" (the lamp, then the rheostat). Answer, built in order: hook and prediction (1); R = V/I and V = IR (2); rearranging and `we-1` (3); the quick check (4); the coil's straight graph, ohmic (5); the lamp, non-ohmic (6); the lamp's switch-on surge from V = IR (7); the rheostat (8, 9); fixed current and the three relationships (10); memory aid (11).
- **Root decision 15 (title).** The route title "Ohm's Law, Ohmic and Non-Ohmic Conductors" fits this video's one point once the factors move to v13; kept, with "V = IR" added on YouTube.
- **Resistance given its meaning before the equation (owner quality bar).** **`VoltsPerAmp`** (new): the coil's readouts become a stack of amp tiles (each "0.10 A" a small tile) beside a stack of volt tiles; dividing shows "1.5 V for each 0.10 A": "15 V for each amp" at both 3.0 V and 6.0 V. "Resistance is the voltage needed to push each amp through" is spoken; R = V/I then boxes; "one ohm is one volt per amp". This links to v13's collisions in a phrase ("more collisions, more volts needed for each amp").
- **The rearrangement triangle.** A coded V-over-I-R triangle (V on top, I and R below) appears once in 3, after the algebra is shown; covering the unknown gives the form. It is a visual aid for rearranging, not a new idea, and the algebra rows stay on screen beside it.
- **Graph convention (site card 3).** Voltage V up the side, current I along the bottom, so the gradient of a straight line through the origin is R. Spoken once ("with voltage up the side"). The coil's points (0.20 A, 3.0 V) and (0.40 A, 6.0 V) plot on a straight line through the origin; a slope triangle reads "6.0 V ÷ 0.40 A = 15 Ω".
- **The lamp's resistance as V/I at each point, not the curve's slope (site correction 1).** **`ChordFromOrigin`** (new): for each lamp point, a thin grey line from the origin to the point, with its own V/I readout (10 Ω, 15 Ω, 21 Ω); the lines get steeper, so R rises. The curve's own tangent slope is never shown or labelled as R. The site's hook ("the gradient IS the resistance") and Q3 model answer state the tangent version; the design keeps the correct version and logs the site's (correction 1). "V = IR still works at every instant; R just isn't a constant" answers the site's misconception 1.
- **Why the lamp's resistance rises (v13 recalled, not re-taught).** More current heats the filament; hotter ions vibrate more, collisions are more frequent, so more volts are needed per amp. The lamp plate's filament glows brighter at each point (coded glow), and a small `ConductorLattice` inset (v13) shows the warm lattice in one second.
- **Variable resistance in a circuit (the point's "circuits having ... variable resistance").** The site's activity mentions a rheostat. Scene 8 (prediction, 3 s): a 12 V supply with a rheostat (HSC symbol: resistor rectangle with a diagonal arrow) set to 48 Ω (the site quick check, 0.25 A): "slide it to half the resistance: what happens to the current?". Scene 9: 24 Ω, 0.50 A: at a fixed voltage, I = V/R, so halving R doubles I. No painted rheostat is used: the HSC symbol is how exam questions show it, and v15 varies the voltage with the supply's own dial.
- **The switch-on surge with V = IR (v13 recalled; scene 7).** v13 showed the surge qualitatively; here V = IR sizes it: cold about 4.0 Ω gives 1.5 A on 6.0 V, hot about 21 Ω gives 0.28 A (v13's readout values, aligned). This is variable resistance analysed inside one component.
- **Fixed current (scene 10).** The point says "analyse the relationships": with R fixed, V ∝ I (5); with V fixed, I ∝ 1/R (9); with I fixed, V ∝ R (10: 0.20 A through 15 Ω and 30 Ω needs 3.0 V and 6.0 V). A three-row summary closes the teaching. Sets up series voltages (v20) without analysing a series circuit.
- **Ohmic and non-ohmic named after the evidence.** "Ohmic: resistance stays constant, so a straight V-I line through the origin" (5); "non-ohmic: resistance changes, so the line curves" (6). The site's last check ("a lamp is ohmic because its graph passes through the origin": false) becomes A2's crossed mistake.
- **Worked example 1 (site `we-1`, numbers unchanged).** 6.0 V, 0.25 A, R = 24 Ω. **Worked example 2 (site quick check, numbers unchanged, turned into a worked step).** 12 V across 48 Ω: I = 0.25 A.
- **Attempts (original, HSC style).** (A1, constant resistance; site Q2 type, new numbers) "A resistor carries a current of 0.15 A when the voltage across it is 4.5 V. (a) Calculate its resistance. (b) Assuming its resistance does not change, calculate the current when the voltage across it is 12 V. (3 marks)" Answer: 30 Ω; 0.40 A. Crossed: "I = VR = 360 A". (A2, variable resistance; site Q1 and Q3 and the last check, new numbers) a printed two-row table for a filament lamp: "2.0 V, 0.10 A" and "6.0 V, 0.20 A". "The table shows two measurements for a filament lamp. (a) Calculate the resistance of the lamp at each voltage. (b) Explain why the resistance changes. (c) State whether the lamp is ohmic or non-ohmic, and justify your answer. (4 marks)" Answer: 20 Ω and 30 Ω; more current heats the filament, its ions vibrate more, electrons collide more often, so resistance rises; non-ohmic, because its resistance changes (tripling V only doubles I). Crossed: "ohmic, because its graph passes through the origin".
- **Mistake scene:** none separate. "Every component obeys Ohm's law" (6; site misconception 1); "a steeper V-I line means lower resistance" (5; site misconception 2, in a chip); "the slope of the lamp's curve is its resistance" (6, chord lines only); "R = VI" (A1 crossed; site odd one out); "the lamp is ohmic because its graph passes through the origin" (A2 crossed; site last check).
- **Memory aid:** "Resistance is volts per amp, at every point. Straight through the origin: it stays the same. Curving: it's changing." (see "Memory aid check").
- **Handoff (route next; proposal for v15's question).** Board change: a bench laid out with the painted bench supply, two painted digital multimeters, the painted resistance-wire board and the painted filament lamp (v15's plates), unconnected; beside them a blank V-I grid and an empty results table with columns "V (V)" and "I (A)"; chips "which meter goes where?" and "how many readings?"; then "Next: How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?". This is the frame v15 opens on. If v15's plates are not delivered at build, the bench uses HSC-symbol components in the same places (root call).
- **Site sources used:** intro (Ohm's rule; the rule has limits: 1, 6); hook (torch globe and nichrome: 1, 6); warm-up (twice the voltage: recalled from v13 in 1); intentions (Know 1 to 3: 2, 5, 6; Understand 1 to 3: 5, 6; Can Do 1 and 2: 3, 4, 5, 6, A1, A2; Can Do 3: v15); key terms (voltage, current: recalled; resistance V/I 2; ohmic, non-ohmic 5, 6); misconceptions 1 and 2 (6, 5); Q2's "if the resistor heated up" (7); card 1 (2); true or false (true: 2); card 2, `we-1` (3); quick check (B, 0.25 A: 4); activity 1 (v15); odd one out (D: A1 crossed); card 3 and its figure (5, 6, with correction 1); last check (false: A2 crossed); match the pairs (5, 6; one pair corrected, correction 2); Q1 (A2 (b), (c) structure); Q2 (A1 structure, new numbers); Q3 (6, with correction 1); retrieve (11).
- **Site corrections (quoted from site lesson 14, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Q3 model answer: "On a graph of V against I, the gradient at any point is V/I, which is the resistance." and the lesson 14 memory hook "On a V against I graph, the gradient IS the resistance." For a curve, the gradient (slope of the tangent) at a point is not V/I. The resistance at a point is V/I, the slope of the straight line from the origin to that point; the two agree only for a straight line through the origin. (The conclusion that the lamp's resistance rises is still right, because V/I rises too.) Suggest: "The resistance at any point is V/I, the gradient of the line from the origin to that point. For an ohmic conductor this equals the gradient of the graph."
  2. Match the pairs: "The gradient at a point on a V–I graph" matched to "The resistance of the component at that current". Same issue. Suggest: "V ÷ I at a point on a V–I graph".
  3. Misconception 2 "Right" line: "With V on the vertical axis and I on the horizontal, the gradient equals R". Suggest adding "for a straight line through the origin".
  - Checked and correct: card 1 (R = V/I always defines R at that instant); `we-1` (24 Ω); quick check (B, 0.25 A); odd one out (D); card 3 and its figure (a lamp's V-I curve steepens as I rises; resistance rises); last check (false); Q1 model answer; Q2 (36 Ω; 0.42 A); misconception 1.
- **Cause chain taught, in order:** (1) the coil doubled, the lamp did not: what is resistance in numbers, and has the lamp's changed? (1); (2) resistance is the voltage needed per amp, R = V/I; the coil needs 15 V per amp at both voltages: constant, so V = IR with one R (2); (3) any two of V, I, R give the third (3, 4); (4) constant R means V ∝ I: a straight V-I line through the origin, gradient R: ohmic (5); (5) the lamp's V/I rises because its hotter filament collides more; the line curves: non-ohmic; V = IR still holds at each point (6); (6) a cold filament's low resistance gives a surge at switch-on (7); (7) at a fixed voltage, a smaller resistance lets more current through: I = V/R (8, 9); (8) at a fixed current, more resistance needs more voltage: V = IR ties all three (10); (9) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v10 (voltage as energy per coulomb), v11 (current as coulombs per second, amps), v13 (collisions as resistance, measured in ohms; I ∝ V at constant resistance; a hotter metal resists more; the lamp's switch-on surge), each recalled in a phrase; Stage 5 Mathematics (gradient as rise over run; rearranging a three-letter formula).
- **Learner-visible vocabulary (plain meaning at first use):** resistance R = V/I (the voltage needed to push each amp through, 2); ohm, Ω (one volt per amp, 2); V-I graph (voltage up the side, current along the bottom, 5); gradient (rise over run, 5, Stage 5 recall); ohmic (resistance stays constant, 5); non-ohmic (resistance changes, 6); rheostat or variable resistor (a resistor whose resistance you can change by sliding a contact, 7).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`VoltsPerAmp`** (new: volt and amp tiles divided into "volts for each amp"); **`VIRTriangle`** (new: a cover-to-rearrange triangle); **`VIGraph`** (new: V up, I across, points plotted on cue, a straight line or smooth curve through them, optional slope triangle); **`ChordFromOrigin`** (new: grey lines from the origin to chosen points with V/I readouts); HSC-symbol **`CircuitDiagram`** (supply, resistor, lamp, rheostat, leads, a bold ink "I" arrow; root decision 17); v13's `ConductorLattice` (small warm inset), `CurrentReadout`; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v13; conventional current a bold ink "I" arrow (root decision 17); the coil's graph points and line ink; the lamp's points and curve a warm amber-brown (so the two are told apart in one grid without red or navy); chord lines grey; volt tiles teal-grey, amp tiles ink outline; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the apparatus or circuit in the left half; the V-I grid or the working in the right half; readouts beside each component.
- **No human figures.** None.
- **Author notes (not learner copy):**
  (a) R = V/I is a definition valid at every operating point; "Ohm's law" is the empirical statement that R is constant for some conductors at fixed temperature. The video says "V = IR" for the relation and names Ohm once (scene 2, "this is Ohm's law when R stays constant").
  (b) The coil: nichrome's resistance changes little with temperature (about 0.04 per cent per kelvin), and "kept cool" covers the rest; the 15 Ω pair (3.0 V, 0.20 A; 6.0 V, 0.40 A) is consistent with v13's handoff.
  (c) Lamp points (illustrative, consistent with v13): (0.10 A, 1.0 V) 10 Ω; (0.20 A, 3.0 V) 15 Ω; (0.28 A, 6.0 V) 21.4 Ω, said "about twenty-one ohms". The curve through the origin and these points is drawn smooth and convex (steepening) in V against I.
  (d) Rheostat circuit: 12 V supply, rheostat only, ideal leads and supply: 48 Ω gives 0.25 A; 24 Ω gives 0.50 A. Internal resistance is not modelled (v10's note).
  (e) Diodes and thermistors are non-ohmic too (site misconception 1 names them); not shown, because neither is in the point and the lamp carries the idea. A grey tag on the "non-ohmic" chip reads "lamps, and some other components".
  (f) A1: 4.5 ÷ 0.15 = 30 Ω; 12 ÷ 30 = 0.40 A; crossed 12 × 30 = 360. A2: 2.0 ÷ 0.10 = 20 Ω; 6.0 ÷ 0.20 = 30 Ω.
  (g) Pronunciations: "ohm" (ome); "rheostat" (REE-oh-stat).

Main question: *Double the voltage across a cool nichrome coil and its current doubles; do the same to a lamp and it doesn't. Why does doubling the voltage double a resistor's current but not a lamp's, and how does V = IR handle both?*
Entry knowledge (v10 volts; v11 amps; v13 resistance from collisions, I ∝ V at constant resistance, hot metals resist more).
Stops after: R = V/I and V = IR with rearrangements; constant R, straight V-I line, ohmic; changing R, curved V-I line, non-ohmic, V/I at each point; a variable resistor at fixed voltage. No investigation method, no meter connections, no power.
Handoff: v15, the conductor investigation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v13.

### 1. hook (one doubled, one didn't)
> Last time, we doubled the voltage across a cool nichrome coil, and its current doubled. We did the same to a lamp, and its current went from point two oh amps to only point two eight. So how much resistance does each one have, in ohms? And has the lamp's resistance gone up, gone down, or stayed the **same**?

Visual: opens on v13's last frame (see "Opening frame"). The "Next" chip becomes the heading: "V = IR: constant and changing resistance"; the memory line fades. On "its current doubled" the coil's ghost "0.20 A" and live "0.40 A" pulse; on "only point two eight" the lamp's pair pulses. On "in ohms" the chip "how many ohms?" brightens. On "same" chips "gone up?", "gone down?", "stayed the same?" beside the lamp and a 3-second countdown ring.

### 2. resistance is volts per amp
> Start with the coil. At three volts it carried point two oh amps. That's fifteen volts for every amp. At six volts it carried point four oh amps: still fifteen volts for every amp. That's what resistance measures: the voltage needed to push each amp through. The more the electrons collide, the more volts each amp needs. So resistance is V over I, and one ohm means one volt per amp. The coil's resistance is fifteen ohms, and it stays fifteen ohms. Multiply out, and V equals I **R**. With R constant, that's Ohm's **law**.

Visual: camera continue; the lamp dims to the side. `VoltsPerAmp`: the coil's "3.0 V" becomes a column of volt tiles and its "0.20 A" two amp tiles; on "fifteen volts for every amp" the volt tiles regroup under each amp tile, scaled to "15 V per 1 A". On "At six volts" the same with "6.0 V" and four tiles: again "15 V per 1 A". On "V over I" right column: boxed "R = V/I"; on "one volt per amp" chip "1 Ω = 1 V A⁻¹"; rows "3.0 ÷ 0.20 = 15 Ω", "6.0 ÷ 0.40 = 15 Ω". On "V equals I R" boxed "V = IR". On "Ohm's law" grey tag "Ohm's law: R stays constant".

### 3. rearranging, and a worked example
> V equals I R can be turned around to find any one of the three. Divide by I, and R is V over I. Divide by R, and I is V over R. Let's try one. Task: a resistor carries point two five amps with six point oh volts across it. Find its resistance. The givens: V is six point oh volts, and I is point two five amps. R is V over I: six point oh over point two five, which is twenty-four **ohms**.

Visual: clear change to the calculation layout. Rows: "V = IR"; "R = V/I"; "I = V/R". On "any one of the three" `VIRTriangle` builds beside them (V on top, I and R below), and on each form the matching letter is covered by a grey card. Task strip: "Find the resistance" (grey tag "site worked example"). Equation strip: "R = V/I". Givens group: "V = 6.0 V"; "I = 0.25 A". Row: "R = 6.0 ÷ 0.25"; boxed "R = 24 Ω". A small HSC-symbol resistor with a bold ink "I" arrow and its readouts sits at the left.

### 4. worked example: finding a current
> Now the other way round. Task: a twelve volt supply is connected across a forty-eight ohm resistor. Find the current. The givens: V is twelve volts, and R is forty-eight ohms. I is V over R: twelve over forty-eight, which is point two five **amps**.

Visual: camera continue. Task strip: "Find the current" (grey tag "site quick check"). Equation strip: "I = V/R" (the triangle covers I). Givens group: "V = 12 V"; "R = 48 Ω". Row: "I = 12 ÷ 48"; boxed "I = 0.25 A". The left circuit becomes a 12 V supply symbol with a 48 Ω resistor and a bold "I" arrow; the readout "0.25 A".

### 5. constant resistance: a straight line
> Back to the coil. Let's graph it, with voltage up the side and current along the bottom. Zero volts, zero amps. Three volts, point two oh amps. Six volts, point four oh amps. The points sit on a straight line through the origin, because the resistance never changes. The line's gradient is rise over run: six volts over point four oh amps, fifteen ohms. That's the resistance. A component like this, whose resistance stays constant, is called **ohmic**. And a steeper line would mean more volts for each amp, a bigger **resistance**.

Visual: board change: the coil (left, HSC-symbol in a small circuit with its readouts) and `VIGraph` (right): axes "V (V)" up, "I (A)" across. On each reading a point drops in: (0, 0), (0.20, 3.0), (0.40, 6.0). On "straight line through the origin" an ink line draws through them. On "gradient" a slope triangle "rise 6.0 V, run 0.40 A"; row "gradient = 6.0 ÷ 0.40 = 15 Ω = R". On "ohmic" chip "ohmic: resistance constant: straight V-I line through the origin". On "steeper" a ghost steeper line (labelled "30 Ω") appears briefly; a chip "steeper means less resistance" takes a grey scribble cross (site misconception 2).

### 6. the lamp: resistance that climbs
> Now the lamp, on the same axes. At one volt it carries point one oh amps: ten ohms. At three volts, point two oh amps: fifteen ohms. At six volts, point two eight amps: about twenty-one ohms. Its resistance goes up. That's because more current heats the filament, its ions vibrate harder, and the electrons collide more often. So the points bend away from a straight line into a curve that gets steeper. A component like this is called non-ohmic. But V equals I R still works at every point. Divide V by I there, and you get its resistance right **then**.

Visual: camera continue; the painted lamp replaces the coil on the left, its filament glowing brighter at each point (coded glow); a 1-second `ConductorLattice` inset warms on "ions vibrate harder" (tag "from the last video"). On each reading a warm amber-brown point drops in: (0.10, 1.0), (0.20, 3.0), (0.28, 6.0), each with a `ChordFromOrigin` grey line and its readout "10 Ω", "15 Ω", "21 Ω"; the chords get steeper. Chip "gone up?" (from the hook) glows; "gone down?" and "stayed the same?" take grey scribble crosses. On "a curve that gets steeper" the smooth curve draws through the origin and the points, the coil's straight line still visible. On "non-ohmic" chip "non-ohmic: resistance changes: curved V-I line" (grey tag "lamps, and some other components"). On "every point" the three chords pulse; row "at each point: R = V/I". Grey tag beside the curve: "resistance = V ÷ I at the point, not the slope of the curve". The heading's question "why not double?" ticks.

### 7. the lamp at switch-on
> Here's where that matters. Remember the lamp's surge at switch-on? Cold, its filament has a resistance of about four ohms. On six volts, I is V over R: six over four, which is one point five amps. Once it's glowing, at about twenty-one ohms, the current is only point two eight amps. Same lamp, same voltage, but more than five times the current for a moment. That surge is why lamps usually fail just as they're switched **on**.

Visual: board change: the painted lamp on the bench supply at "6.0 V" (coded leads) beside its HSC-symbol circuit with a bold ink "I" arrow. Two rows build in the right column, one per cue: "cold: R ≈ 4.0 Ω: I = V/R = 6.0 ÷ 4.0 = 1.5 A"; on "glowing" the filament glows and "hot: R ≈ 21 Ω: I = 6.0 ÷ 21 ≈ 0.28 A". The `CurrentReadout` from v13 replays: "1.5 A" falling to "0.28 A". On "more than five times" a grey row "1.5 ÷ 0.28 ≈ 5". On "on" grey tag "switch-on surge: from the last video".

### 8. prediction: a variable resistor
> Some circuits change their resistance on purpose. A rheostat is a resistor with a sliding contact, so you can set its resistance. Here it's at forty-eight ohms, on a twelve volt supply, carrying point two five amps. Slide it to half the resistance. What happens to the **current**?

Visual: board change: HSC-symbol circuit: a 12 V supply symbol and a rheostat symbol (resistor rectangle with a diagonal arrow), a bold ink "I" arrow, the readout "0.25 A", a dial-style label "48 Ω" on the rheostat. Chip "rheostat: a resistor you can adjust". On "half the resistance" the slider glides and the label changes to "24 Ω"; the readout shows "?". On "current" chips "halves?", "stays the same?", "doubles?" and a 3-second countdown ring.

### 9. the voltage stays, the current changes
> It doubles. The supply still gives twelve volts, but now each amp only needs twenty-four of them. So I is V over R: twelve over twenty-four, point five oh amps. Halve the resistance at a fixed voltage, and the current doubles. That's how a dimmer **works**.

Visual: camera continue. On "It doubles" the readout counts "0.25 A" to "0.50 A" and the "I" arrow thickens; chip "doubles?" glows, the other two take grey scribble crosses. Rows: "V = 12 V, fixed"; "I = V/R = 12 ÷ 24 = 0.50 A", boxed; "fixed V: half the R, twice the I". On "dimmer" a grey screen-only tag "dimmers and volume knobs: changing R".

### 10. fixed current: more resistance, more voltage
> There's one more way to read V equals I R. Keep the current the same, and the voltage you need goes up with the resistance. Pushing point two oh amps through the fifteen ohm coil takes three volts. Through a thirty ohm resistor, it takes six. Twice the resistance, twice the voltage, for the same current. So V equals I R ties all three together: hold any one fixed, and you can see how the other two **change**.

Visual: board change: two HSC-symbol resistors, "15 Ω" and "30 Ω", each in its own small circuit with the same bold ink "I = 0.20 A" arrow. Rows, one per cue: "V = IR = 0.20 × 15 = 3.0 V"; "V = 0.20 × 30 = 6.0 V"; "fixed I: twice the R, twice the V". On "all three" a three-row summary builds: "fixed R: V ∝ I (5)"; "fixed V: I ∝ 1/R (9)"; "fixed I: V ∝ R (10)", boxed.

### 11. memory aid
> To remember it: resistance is volts per amp, at every point. Straight through the origin, it stays the same. Curving, it's **changing**.

Visual: the handwritten line writes large: "Resistance is volts per amp, at every point. Straight through the origin: it stays the same. Curving: it's changing." On "straight" the coil's line pulses; on "Curving" the lamp's curve and its chords. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A resistor carries point one five amps when the voltage across it is four point five volts. Calculate its resistance. Then, assuming its resistance doesn't change, calculate the current when the voltage is twelve volts. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A resistor carries a current of 0.15 A when the voltage across it is 4.5 V. (a) Calculate its resistance. (b) Assuming its resistance does not change, calculate the current in the resistor when the voltage across it is 12 V. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> R is V over I: four point five over point one five, which is thirty **ohms**. Then I is V over R: twelve over thirty, which is point four oh **amps**. Multiplying V by R gives three hundred and sixty amps. That's not one of the three forms, so check with the **triangle**.

Visual: card shrinks to the top; "0.15 A", "4.5 V", "does not change" and "12 V" underlined. Rows: "(a) R = V/I = 4.5 ÷ 0.15 = 30 Ω", boxed; "(b) I = V/R = 12 ÷ 30 = 0.40 A", boxed. On "three hundred and sixty" a chip "I = VR = 360 A" fades in and takes a grey scribble cross; on "triangle" the small `VIRTriangle` with I covered. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A table gives two measurements for a filament lamp. Calculate its resistance at each voltage. Explain why the resistance changes. Then state whether the lamp is ohmic or non-ohmic, and justify your answer. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a two-row table: "The table shows two measurements for a filament lamp." Table: "Voltage (V): 2.0, 6.0"; "Current (A): 0.10, 0.20". "(a) Calculate the resistance of the lamp at each voltage. (b) Explain why the resistance of the lamp changes. (c) State whether the lamp is an ohmic or a non-ohmic conductor, and justify your answer. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Two over point one oh is twenty ohms. Six over point two oh is thirty **ohms**. A bigger current heats the filament, its ions vibrate harder, and the electrons collide more often, so the resistance rises. Its resistance changes, so the lamp is **non-ohmic**. Passing through the origin doesn't make it ohmic. The line has to be **straight**.

Visual: card shrinks to the top; the table stays. Rows: "(a) 2.0 ÷ 0.10 = 20 Ω; 6.0 ÷ 0.20 = 30 Ω", boxed; "(b) more current, hotter filament, more collisions: R rises", boxed; on "non-ohmic" "(c) R changes (3 × V gives only 2 × I): non-ohmic", boxed. On "straight" a mini V-I sketch: a curve from the origin; a chip "ohmic, because its graph passes through the origin" fades in and takes a grey scribble cross. Hold about 1 second.

### 16. handoff
> So V equals I R works for both. For the coil, R stays the same, so the current doubles. For the lamp, R climbs as it heats, so it doesn't. But how would you show that yourself, with real meters and real readings? Which meter goes where, and how many readings do you **need**?

Visual: board change: the memory line small at the top. A bench, laid out but unconnected: the painted bench supply, two painted digital multimeters (`phys-y11-digital-multimeter-v1.png`, blank displays), the painted resistance-wire board (`phys-y11-resistance-wire-board-v1.png`) and the painted filament lamp (v15's plates); beside them a blank V-I grid ("V (V)" up, "I (A)" across) and an empty results table with columns "V (V)" and "I (A)". On "real meters" chip "which meter goes where?"; on "need" chip "how many readings?". Then the chip "Next: How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Resistance is the voltage needed per amp: R = V/I, so V = IR and I = V/R. One ohm is one volt per amp.
2. Ohmic conductor (for example, a metal wire at constant temperature): R stays constant, so V ∝ I. With V up the side and I along the bottom, the V-I graph is a straight line through the origin with gradient R.
3. Non-ohmic conductor (for example, a filament lamp): R changes. A lamp's R rises as the filament heats, so its V-I graph curves upwards. At any point, R = V/I (not the slope of the curve).
4. At a fixed voltage, a smaller resistance gives a larger current (I = V/R); a rheostat (variable resistor) changes R on purpose. A cold lamp's low resistance causes a current surge at switch-on.
5. At a fixed current, the voltage needed is proportional to the resistance (V = IR).

Memory aid (large, on the notes screen): *Resistance is volts per amp, at every point. Straight through the origin: it stays the same. Curving: it's changing.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the coil's resistance is 15 Ω at both voltages: it needs the same volts per amp (2). Why its graph is straight: R is constant, so V ∝ I (5). Why a steeper line means more resistance: more volts per amp (5). Why the lamp's resistance rises: more current, hotter filament, more collisions (6). Why its graph curves: each extra volt adds less current (6). Why a lamp surges at switch-on: its cold resistance is about a fifth of its hot resistance (7). Why halving a rheostat's R doubles the current: the same volts, fewer needed per amp (9). Why the same current needs twice the voltage through twice the resistance: twice the volts per amp (10).
- **Misconceptions addressed:** every component obeys Ohm's law (6); a steeper line means less resistance (5); the slope of a curve is the resistance (6, grey tag; site correction 1); R = VI (A1 crossed); passing through the origin means ohmic (A2 crossed).
- **One idea at a time:** R = V/I (2), rearranging (3, 4), constant R and its graph (5), changing R and its graph (6), the surge (7), a variable resistor at fixed V (8, 9), fixed I (10).
- **Video makes it easier:** the student sees volt tiles regroup into "15 V per amp" at two voltages (2), a straight line drop through the coil's points with its slope triangle (5), the lamp's chords from the origin grow steeper while the filament brightens (6), the surge readout fall as the filament glows (7), a rheostat's slider halve R while the current readout doubles (9), and two resistors with one current need 3.0 V and 6.0 V (10).
- **Response opportunity:** two 3 s predictions (1, 8); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("assuming its resistance does not change"; the lamp's table), nothing answer-bearing. One crossed mistake each; feedback about 19 s and 25 s.
- **Avoided double teaching:** v13's collisions and hot-metal rule recalled in one sentence (2, 6); the four factors not repeated; v10's volts and v11's amps in a phrase (2).
- **Syllabus coverage:** `ci3bbf4fbd`: V = IR used for R (3, A1, A2) and I (4, 8, A1); constant resistance analysed (2, 5, A1); variable resistance analysed in a component (the lamp, 6, A2) and in a circuit (the rheostat, 7, 8).
- **Out of scope by design:** the investigation and meter placement (v15, v19); power (v16); series and parallel analysis (v20 to v22); diodes and thermistors.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A resistor carries a current of 0.15 A when the voltage across it is 4.5 V. (a) Calculate its resistance. (b) Assuming its resistance does not change, calculate the current in the resistor when the voltage across it is 12 V."
Model answer: (a) R = V/I = 4.5 ÷ 0.15 = 30 Ω. (b) I = V/R = 12 ÷ 30 = 0.40 A (or: V × 12/4.5 = 2.67 times, so I = 0.15 × 2.67 = 0.40 A). Classic mistake (crossed): "I = VR = 360 A".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "The table shows two measurements for a filament lamp. [Voltage (V): 2.0, 6.0. Current (A): 0.10, 0.20.] (a) Calculate the resistance of the lamp at each voltage. (b) Explain why the resistance of the lamp changes. (c) State whether the lamp is an ohmic or a non-ohmic conductor, and justify your answer."
Model answer: (a) R = V/I: 2.0 ÷ 0.10 = 20 Ω; 6.0 ÷ 0.20 = 30 Ω. (b) The larger current heats the filament; its lattice ions vibrate with larger amplitude, so the drifting electrons collide with them more often, and the resistance increases. (c) Non-ohmic: its resistance is not constant (tripling the voltage only doubles the current), so V is not proportional to I and its V-I graph is not a straight line. Classic mistake (crossed): "ohmic, because its graph passes through the origin".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Coil (v13 handoff) | 3.0 V, 0.20 A; 6.0 V, 0.40 A; R = 15 Ω | 1, 2, 5 |
| Lamp (v13 handoff, plus one point) | 1.0 V, 0.10 A, 10 Ω; 3.0 V, 0.20 A, 15 Ω; 6.0 V, 0.28 A, about 21 Ω | 1, 6 |
| `we-1` (site) | V = 6.0 V; I = 0.25 A; R = 24 Ω | 3 |
| Quick check (site) | V = 12 V; R = 48 Ω; I = 0.25 A | 4, 7 |
| Rheostat | 12 V; 48 Ω, 0.25 A; 24 Ω, 0.50 A | 7, 8 |
| Ghost line in 5 | 30 Ω (steeper) | 5 |
| Switch-on (v13 readout) | 6.0 V; cold ≈ 4.0 Ω, 1.5 A; hot ≈ 21 Ω, 0.28 A; ratio ≈ 5 | 7 |
| Fixed current | 0.20 A; 15 Ω, 3.0 V; 30 Ω, 6.0 V | 10 |
| A1 | 0.15 A at 4.5 V; R = 30 Ω; 12 V; I = 0.40 A; crossed 360 A | 10, 11 |
| A2 | 2.0 V, 0.10 A, 20 Ω; 6.0 V, 0.20 A, 30 Ω | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.0 ÷ 0.20 = 15; 6.0 ÷ 0.40 = 15; 1.0 ÷ 0.10 = 10; 6.0 ÷ 0.28 = 21.4.
- 6.0 ÷ 0.25 = 24; 12 ÷ 48 = 0.25; 12 ÷ 24 = 0.50.
- 4.5 ÷ 0.15 = 30; 12 ÷ 30 = 0.40; 12 × 30 = 360 (crossed).
- 2.0 ÷ 0.10 = 20; 6.0 ÷ 0.20 = 30.
- 6.0 ÷ 4.0 = 1.5; 6.0 ÷ 21.4 = 0.28; 1.5 ÷ 0.28 = 5.4 ("more than five times").
- 0.20 × 15 = 3.0; 0.20 × 30 = 6.0.

## Memory aid check

- **"Resistance is volts per amp, at every point. Straight through the origin: it stays the same. Curving: it's changing."** (replaces the site's lesson 14 hook "the gradient IS the resistance", which is wrong for curves; site correction 1.) Meaning, as said in scene 11: R = V/I at any operating point; a straight V-I line through the origin means R is constant (ohmic); a curved one means R changes (non-ohmic). Assumptions checked: "volts per amp" is the definition, so it holds for both kinds; "straight through the origin" needs both conditions (a straight line not through the origin would not mean constant V/I; not met in this video, so not spoken); "curving" refers to the V-I graph, not a circuit. Introduced after both graphs (5, 6).
- **`VIRTriangle` (3).** A rearranging aid only; the algebra is shown first and stays beside it.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,448 characters** (5,464 joined), 17 scenes. Characters per scene (1 to 17): 305, 517, 386, 245, 525, 551, 425, 277, 253, 408, 132, 252, 260, 237, 329, 271, 75. At 13.3 characters per second the speech is about 410 s; add about 16 s of holds and settling (the tiles in 2, the points and line in 5, the chords in 6, the surge readout in 7, the slider in 9, the summary in 10), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 512 s**, inside the owner's 5 to 10 minute target. A first draft at 4,615 characters lacked the switch-on analysis (7) and the fixed-current relation (10); both are parts of "analyse the relationships ... constant and variable resistance", so they were added; nothing else would add teaching value.

## Scene list and build ids

Lesson key `p-y11-fa3-v14` (route phys-y11-fa3-v14). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v14` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v14` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, volts-per-amp, rearranging, worked-example-current, ohmic-line, lamp-curve, switch-on, prediction-rheostat, rheostat, fixed-current, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v13's last frame continues into scene 1 (camera continue: supply, coil, lamp and readouts carry over); 1 to 2 camera continue; 2 to 3 clear change to the calculation layout; 3 to 4 camera continue; 4 to 5 board change to the graph; 5 to 6 camera continue (same axes); 6 to 7 board change to the lamp on the supply; 7 to 8 board change to the rheostat circuit; 8 to 9 camera continue; 9 to 10 board change to two resistors; 10 to 11 fade; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v14-learning-review.md`, `science_check` = `checks/p-y11-fa3-v14-physics-check.md`.

## Assets

Reused (by name): `phys-y11-low-voltage-supply-v1.png` (delivered; 1, 7, 16); `phys-y11-filament-lamp-v1.png` (requested in `phys-y11-fa2-v13.md`, not yet delivered; 1, 6, 7, 16). Coded parts reused from v13 (`ConductorLattice` warm inset, `CurrentReadout`, the coil) and v12 (dial).

Handoff plates (requested in `phys-y11-fa3-v15.md`, not here): `phys-y11-digital-multimeter-v1.png`, `phys-y11-resistance-wire-board-v1.png` (16 only). The rheostat in 8 and 9 stays an HSC symbol, so no rheostat plate is needed.

New plates: none. Checked first (3 Nov): `public/assets/physics/` holds the bench supply; no lamp, resistance wire or meter is delivered. Scenes 3, 4 and 7 to 10 use HSC-symbol circuits (root decision 17), which is how exam questions show them.

Coded: circuits in HSC symbols, current arrows, readouts, volt and amp tiles, the triangle, the V-I grid, points, line, curve, chords, working.

Kit gaps (for the next physics kit brief): `VoltsPerAmp`, `VIRTriangle`, `VIGraph`, `ChordFromOrigin`, HSC-symbol `CircuitDiagram` (if not already built for v11 or v12); lesson-local acceptable for Revision 1. v15 reuses `VIGraph` and `ChordFromOrigin`; v18 onward reuse `CircuitDiagram`.

## Codex asset brief (Year 11 Physics FA3 v14)

No plates requested. Kit note only: `VIGraph` takes an axis order option (V up, I across here and in v15) and must never draw a tangent labelled R; `ChordFromOrigin` lines are thin grey with their V/I readout at the point end.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: R = V/I defines resistance at any operating point and one ohm is one volt per ampere; V = IR, I = V/R; for constant R (a metal at constant temperature) V ∝ I and the V-I graph (V vertical) is a straight line through the origin with gradient R; a steeper such line means a larger R; a filament lamp's resistance rises with current because the filament heats and its ions vibrate more; its V-I curve steepens; at any point its R is V/I, not the tangent slope; ohmic means constant resistance, non-ohmic means changing resistance; at a fixed voltage halving R doubles I; at a fixed current V ∝ R; a cold filament (about 4 Ω) on 6.0 V draws about 1.5 A, over five times its hot current (illustrative values, aligned with v13).
3. Confirm the four factors are not re-taught, no meter connection rule is taught, and no power, series or parallel analysis appears (the handoff circuit's branches are not analysed).
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v13.md` scene 17.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Ohm's Law (V = IR): Ohmic and Non-Ohmic Conductors | Year 11 Physics

(Title length: 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson14.sa.html

Double the voltage across a cool nichrome coil and its current doubles. Do the same to a lamp and it doesn't. Why? Find out what resistance means in numbers (volts per amp), use V = IR to find a resistance or a current, see why a constant resistance gives a straight V-I graph and a hot filament gives a curve, read a lamp's resistance correctly at any point, and see how a rheostat changes the current on purpose. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse the relationships between voltage, current and resistance using V = IR for electric circuits having constant and variable resistance" (ci3bbf4fbd)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Voltage, electron flow and resistance (previous video). Next: The conductor investigation.

#Year11Physics #Physics #OhmsLaw #HSCScience

## Open decisions

- **1. Ownership.** As `phys-y11-fa3-v13.md` open decision 1: this video owns `ci3bbf4fbd` only. If root keeps `cib4d17ff9` here, v13's scenes 5 to 11 would move in and this design would need a split.
- **2. Graph axes.** V up, I across (site convention; gradient = R). Root may prefer I against V (common in practical write-ups); v15 would follow. The design keeps one convention through v14 and v15.
- **3. The rheostat scenes (8, 9).** Added for "circuits having ... variable resistance". The first cut if the review finds the video crowded is scene 9's dimmer sentence (screen tag only), then scene 7's last sentence (about 75 characters).
- **4. Route refinement (root to record).** Question as above; start "Begin at v13's coil and lamp at 3.0 V and 6.0 V; recall resistance as collisions and I ∝ V"; stop "Stop at V = IR for constant and changing resistance, ohmic and non-ohmic from data, and a variable resistor at fixed voltage; hand the measuring method to v15".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v13 at Year 11 entry; check that "volts per amp" makes R = V/I meaningful before the formula; that the chord lines make "V ÷ I at the point" clear without slopes of curves; that the rheostat adds the circuit sense of "variable resistance" without crowding; that the attempts give nothing away), then the Codex physics check and error check.
- The volt tiles regrouping (2), the straight line and slope triangle (5), the lamp's chords steepening as it brightens (6) and the readout doubling as the slider moves (8) carry the explanation; judge them at playback speed in the voiced preview.
