# Year 11 Physics FA3 V11 (Physics 2025, Year 11, Focus Area 3): How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons? (design)

Status: Revision 2 (11 Nov 2026): visual upgrade to maths-visual-standard.md. Needs Codex error check before plates and voicing. Previously Revision 1 (3 Nov): first design; brief 164 learning review and science check clean.

Narration 5,566 characters (unchanged in Revision 2), 18 scenes, about 506 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the 45 s notes hold, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Inside the 5,500 to 7,000 band: two syllabus points, fully taught; not padded. Voice: Google AI Studio; nothing recorded; human listening pending. Plates: none new (the delivered cell `phys-y11-aa-cell-v1.png` reused).

Scope: eleventh video of the Year 11 Physics (2025) Focus Area 3 route and the first on electric circuits: current as the rate of flow of charge (I = q/t), the ampere, the scale of a coulomb in electrons, calculating current, charge and time, current the same all round a single loop, electron flow and conventional current, why the convention runs backwards and why it still works. Templates: `phys-y11-fa1-v22.md` (concept format, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md`; FA3 conventions, section list and colour key from `phys-y11-fa3-v04.md` to `phys-y11-fa3-v06.md` and `phys-y11-fa3-v10.md` (Revision 1; v10's scene 14 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson11.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 current as charge per second, true or false, card 2 with `we-1`, quick check, activity 1, fill the blanks, card 3 conventional current and its figure description, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Site memory hooks read: `phys2025-y11-fa3-memory-hooks.json`, lesson 11 ("Current is coulombs per second, the way flow is litres per second.") and lesson 12 (a conventional-current hook filed under the wrong lesson; site correction 3); see "Memory aid check". Route entry: `phys-y11-fa3-v11` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Electric Current. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply electric current? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v12: How can I explain and apply conductors, dc and ac?" (this design proposes "Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?" for v12's chip; see open decision 1).

**Opening frame (v10's actual handoff, Revision 1, 3 Nov).** v10's scene 14 ends with the memory line "Volts are joules per coulomb. Joules = coulombs × volts." small at the top; the painted 1.5 V cell (`phys-y11-aa-cell-v1.png`, coded label "1.5 V" and terminal signs) at the left, coded wires joining its terminals to a coded lamp symbol in one loop; small navy "−" dots drifting slowly round the wire; a dashed counting gate across the wire with the readout "coulombs past here each second?"; two dashed arrows on the wire pointing opposite ways, each with a "?"; chips "how fast?" and "which way?"; chip "Next: How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the eighteenth-century scientists are mentioned, never drawn or named on screen; the counting is done by a coded gate, not an observer); circuits, charges, gates, arrows and working coded (abstract diagrams); the cell is v10's plate; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (slate scribble with a slate hand tag, FA3 root decisions 1 and 10); original questions; key-notes hold; Australian spelling; no em dashes; v01 (the coulomb; e = 1.6 × 10⁻¹⁹ C; electrons move in solids), v03 (unlike charges attract) and v10 (a battery gives each coulomb energy; voltage is energy per coulomb) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its typeset fraction rendered inline, FA2 root decision 11):

- P25-FA3-G2-01 `ci9e13ac7f`: "Calculate electric current using I = q/t"
- P25-FA3-G2-02 `cibb4a6f3a`: "Relate the flow of charge to the direction of conventional current"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v10's handoff (above); the hook (site warm-up: 4 C each second or 4 C every two seconds); current as charge per second, I = q/t, the ampere; the water-flow analogy (site hook); the hook answered; a coulomb is 6.25 × 10¹⁸ electrons (site activity 1 part 2); the site worked example; q = It as a prediction (site quick check) and t = q/I; current is not used up (site misconception 2: counters either side of the lamp; the lamp takes energy, recalled from v10); electron flow in a metal, conventional current, why it runs backwards (history) and why it still works (equal effect of opposite charges moving opposite ways); memory aid; two attempts. Stops at the size and direction of current in a single loop. Not taught: why the electrons drift (the field in the wire, v12); drift speed (v12); DC and AC (v12); voltage and current together (v13 on); ammeters (v19); branching circuits (v18 on).

## Decisions

- **Learner question (v10's proposal adopted; route placeholder rewritten).** "How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?" One causal question carrying both syllabus points: the first half asks for the measure (I = q/t), the second asks for the cause of the backwards arrow (a convention fixed before the electron was known). Answer, built in order: hook and prediction (1); current as a rate (2); the hook answered (3); coulombs and electrons (4); a calculation (5); rearranging (6, 7); not used up (8); the direction (9); why backwards (10); why it still works (11); memory aid (12).
- **Counting at a point (owner quality bar).** **`ChargeGate`**: a solid ink gate line across the wire (Revision 2; it is dashed only in v10's handoff frame) with a coulomb counter and a stopwatch readout; coulomb tiles (v05's tile, navy for the electrons' charge) pass through; the readout divides "coulombs ÷ seconds" live. Current is the reading of the gate, not a substance in the wire. A second gate after the lamp (8) reads the same number.
- **Water flow (site hook, analogy).** One sentence and a small coded pipe beside the wire with a litres counter: "litres per second" beside "coulombs per second". It is used only for "rate of flow" (assumption check in "Memory aid check"); no pressure or pump mapping, so it cannot mislead about voltage.
- **Electrons in a coulomb (site activity 1 part 2).** 1 ÷ 1.6 × 10⁻¹⁹ = 6.25 × 10¹⁸, said as "six point two five times ten to the eighteen, more than six million million million". This gives "one amp" a scale and sets up A1 (b).
- **Worked example (site `we-1`, numbers unchanged).** 36 C in 1.5 minutes; t = 90 s; I = 0.40 A. Layout: task strip; equation strip; grouped givens (q; t with its conversion); one step per cue.
- **Prediction 2 (3 s, scene 6; site quick check).** "2.0 A for 10 s: how much charge?" Chips "5.0 C?", "20 C?" (the site's distractor B). Answered in 7 with q = It, then t = q/I.
- **Not used up (site misconception 2).** Two `ChargeGate`s, before and after the lamp, read the same; the lamp takes energy (v10's green slice leaves each tile at the lamp; a hollow gold energy arrow out of the lamp, FA2 root decision 3). Stated for "a single loop" only, so it stays true when v18 adds branches.
- **Direction: electrons and the convention (`cibb4a6f3a`).** **`FlowDirection`** (new): navy dotted arrows labelled "electron flow" run from the negative terminal round to the positive; a bold ink arrow labelled "I (conventional current)" runs from the positive terminal round to the negative. The two arrows sit on opposite sides of the wire, never overlapping. Why backwards: in the seventeen hundreds the moving charge could not be seen, so the direction was chosen as positive charge flowing from plus to minus; the electron was discovered in 1897 (author note b). Why it still works: **`EquivalentFlow`** (new): two side-by-side tallies at the wire's ends show that one electron leaving the left end and one positive charge arriving at it change the left end's charge by the same +1 unit. A grey tag "in salt solutions, positive ions really do move" (screen only; author note c).
- **Current arrow colour (new for circuits; root to confirm).** Conventional current is a bold ink (dark charcoal) arrow with a solid head, labelled "I"; electron flow is navy dotted (the electron colour). Amber stays for forces and teal for fields, so the current arrow is never read as a force or a field. v12 and later circuit videos keep this (open decision 2).
- **Attempts (original, HSC style).** (A1, calculation) "A small electric motor carries a steady current of 0.25 A for 4.0 minutes. (a) Calculate the charge that passes through the motor in this time. (b) Calculate the number of electrons that this charge represents. (3 marks)" with "e = 1.6 × 10⁻¹⁹ C". Answer: 60 C; 3.8 × 10²⁰ electrons. Crossed: "(a) 1.0 C (minutes not converted)". (A2, direction) a coded HSC-style circuit diagram: a cell (long line labelled "+", short line labelled "−") at the left, a lamp at the right, the top wire from the positive terminal to the lamp marked X, the bottom wire from the lamp to the negative terminal marked Y. "The diagram shows a cell connected to a lamp. Point X is on the wire joined to the positive terminal of the cell, and point Y is on the wire joined to the negative terminal. (a) State the direction of the conventional current through the lamp: from X to Y, or from Y to X. (b) State the direction in which the electrons drift through the lamp, and explain why this direction differs from your answer to (a). (3 marks)" Answer: X to Y; Y to X; conventional current is the direction positive charge would flow, and the carriers in a metal are negative electrons. Crossed: "(b) the electrons drift from X to Y".
- **Mistake scene:** none separate. "Same charge, same current" (1, 3); "current is used up in the lamp" (8; site misconception 2); "conventional current is the way the electrons move" (9, feedback 2 crossed; site misconception 1); "minutes not converted" (5, feedback 1 crossed).
- **Memory aid:** "Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus." (see "Memory aid check").
- **Handoff (route next; proposal for v12's question).** Board change: the loop fades to a close-up of a short length of copper wire with no cell connected: a coded lattice of pale grey ions, each with a small red "+", and navy "−" free electrons darting in random directions; a dashed gate across the wire reading "net flow: 0"; on "connecting a voltage" two loose wire ends with "+" and "−" terminals hover beside the wire, not yet joined; chips "what does the voltage change?" and "and if it keeps reversing?"; then "Next: Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?". This is the frame v12 opens on.
- **Site sources used:** intro (charge flowing past a point; the backwards convention: 2, 9, 10); hook (electrons move, diagrams draw the other way: 9, 10); warm-up (4 C each second or every two seconds: 1, 3); intentions (Know 1 to 3: 2, 9; Understand 1 to 3: 3, 10, 11; Can Do 1 to 3: 5 to 7, 9, A1, A2); key terms (current, ampere, conventional current, electron flow: 2, 9); misconceptions 1 and 2 (9, 8); card 1 (2, 7); true or false (2); card 2 and `we-1` (5); quick check (6, 7); activity 1 (part 2, electrons: 4, A1 b); fill the blanks (3.0 A: not used); card 3 and its figure (9); last check (9); two truths one lie (D: feedback 2); Q1 (A1 structure); Q2 (t = q/I: 7); Q3 (10, 11).
- **Site corrections (quoted from site lesson 11, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Q2 model answer: "The relationship is linear, so tripling the charge from $18\ \text{C}$ to just over three times that value triples the time in the same proportion." The charge goes from 18 C to 60 C, which is 3.33 times, not tripled, so the sentence contradicts itself. Suggest: "The relationship is linear, so increasing the charge from 18 C to 60 C (3.33 times) increases the time by the same factor: 45 s × 3.33 = 150 s."
  2. Card 1: "the current is the NESA formula-sheet relationship: $I = \frac{q}{t}$". The 2025 syllabus states I = q/t in the content point; whether the 2025 reference sheet prints it is for brief 164 to confirm. Suggest: "the current is given by I = q/t (2025 syllabus)".
  3. `phys2025-y11-fa3-memory-hooks.json`, lesson 12: "Conventional current is a map drawn before anyone found the electron. Keep the map, remember the electrons walk the other way." is about conventional current, which lesson 11 teaches; lesson 12 (conductors, DC and AC) has no hook of its own. Suggest moving it to lesson 11 and writing a DC/AC hook for lesson 12.
  - Checked and correct: `we-1` (0.40 A); quick check (C, 20 C); activity 1 (36 C; 2.25 × 10²⁰ electrons for 0.30 A over 2.0 min); fill the blanks (3.0 A); Q1 (60 C); Q2 (0.40 A, 150 s); two truths one lie (D); the figure description; misconceptions.
- **Cause chain taught, in order:** (1) the same charge in twice the time: the same current? (1); (2) current is the charge passing a point each second (2); (3) more charge per second, or the same charge in less time, is a bigger current (3); (4) a coulomb is a huge number of electrons (4); (5) a current value, with seconds first (5); (6) the same relationship gives charge and time (6, 7); (7) charge is conserved, so the current is the same all round a single loop; the lamp takes energy (8); (8) electrons are negative, so they drift towards the positive terminal (9); (9) the convention was chosen before the electron was known (10); (10) negative one way equals positive the other, so the convention gives correct answers (11); (11) memory aid (12).
- **Entry knowledge (route `entryKnowledge`):** v01 (the coulomb, e = 1.6 × 10⁻¹⁹ C, electrons are the moving charge in solids), v03 (unlike charges attract), v10 (a battery gives each coulomb energy; volts are joules per coulomb), each recalled in a phrase; Stage 5 Science (simple circuits: a cell, wires and a lamp in a loop; circuit symbols); Stage 5 Mathematics (scientific notation, rearranging, converting minutes to seconds).
- **Learner-visible vocabulary (plain meaning at first use):** electric current, I (the charge passing a point each second, 2); ampere, A, or amp (one coulomb per second, 2); electron flow (the actual drift of electrons, from negative round to positive, 9); conventional current (the direction positive charge would flow, from positive round to negative, 9); terminal (each connecting end of a cell, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v10's **handoff loop** (cell plate, wires, lamp symbol, drifting navy dots); **`ChargeGate`** (new: a solid ink gate line with a coulomb counter, a stopwatch and a live "C ÷ s" readout); **`CircuitView`** from the circuits engine for the loop's wires, lamp symbol and moving charges (Revision 2; see "Simulation"); v05's **coulomb tile**; **pipe thumbnail** (a coded pipe with a litres counter); **electron pile** (a coded tile that bursts into a dense cloud of navy dots with a counter, 4); **`FlowDirection`** (new: navy dotted electron-flow arrows and the ink "I" arrow on opposite sides of a wire); **`EquivalentFlow`** (new: two end tallies showing equal charge changes); FA2's hollow gold energy arrow; **HSC circuit diagram** (coded cell, lamp and wires in black line style, with point labels, for A2); `AlignedAlgebra` (I = q/t to q = It and t = q/I); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (slate scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v10 (positive red "+", negative and electrons navy "−", signs always printed); conventional current bold ink with a solid head; electron flow navy dotted; energy leaving the lamp a hollow gold arrow (FA2 root decision 3); the lamp glow warm yellow; crossed items slate scribble.
- **Colour key (Revision 2, fixed for every scene).** One colour per idea, carried through the picture, the rows, the readouts and the notes. The role-colour names are the ones this design already used; nothing is re-hued. Positive charge red "+" (sign always printed); negative charge, electrons, coulomb tiles and the symbol q navy; conventional current, the symbol I and its values bold ink; electron flow navy dotted arrows (root decision 17); the energy each coulomb carries green (electric potential energy is green from v09, root decision 13); energy leaving the lamp a gold outline arrow (FA2 root decision 3); the lamp glow warm yellow. Results and answers sit in dark-ink frames, never green frames, because green means electric potential energy. A mistake takes a slate scribble crossing with a slate hand tag, never red, because red is positive charge in this focus area (root decisions 1 and 10). Slate is used for nothing else. Hand tags take the colour of the thing they mark (navy for charge and electrons, ink for current, green for energy, red only for a positive charge).
- **Type sizes (Revision 2, 1080p).** Heading 60 px; the boxed "I = q/t" in scene 2 at 60 px; the current working line, framed answers and live readouts 52 px (a full-sentence answer may sit at 44 px over two lines; never under 44); card, givens and task sentences 38 px; supporting lines, earlier working rows and small tags 30 px; nothing a student must read under 26 px; hand tags 42 px (34 px where space is tight); key notes 34 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The delivered painted 1.5 V cell `phys-y11-aa-cell-v1.png` (1774 × 887, RGBA; inspected 11 Nov: a silver AA cell with a blank cream band, lying on its side, positive cap at the right; no printing, so the "1.5 V" label and terminal signs are coded) is on screen from the first frame, because v10's handoff frame already holds it in the cell-and-lamp loop. It returns large in scenes 8, 9 and 12. Drawn about 600 px wide (300 px tall), scaled uniformly, never stretched.
- **Simulation (Revision 2).** The core live simulation is the charge count at a gate: coulomb tiles cross a `ChargeGate` against a stopwatch while the readout divides coulombs by seconds live (scenes 1 to 3, 6 and 7), and two gates either side of the lamp count in step (scene 8). Engine: the circuits engine (`src/explainer/sims/circuits.ts`, drawn by `CircuitView` in `circuits-views.tsx`) draws the loop wherever it appears (scenes 1, 8, 9, 12 and the small loop in 10 and 11), replacing Revision 1's lesson-coded loop. `solveCircuit` on one battery (emf 1.5 V) and one lamp (3.75 Ω, an illustrative value chosen so the current is 0.40 A, matching the worked example) gives the single current that every charge and both gate readouts read; `CircuitView` with `carriers="electrons"` and a navy `chargeTone` moves the evenly spaced charges from the negative terminal round to the positive, the lamp glows by its power, and the painted cell sits over the battery symbol's place in the layout. The engine's `ammeter` part is not used (ammeters are taught in a later video); the `ChargeGate` overlay reads q = I × t from the same run. The two straight wires (4 A and 2 A), the electron burst and the gate itself are lesson-coded and listed as kit gaps. `seriesResistance`, `parallelResistance` and `runCircuit` are not needed (one fixed loop, no switch).
- **Board stages (Revision 2).** (a) v10's frame with the painted cell, first half of scene 1 (about 12 s); (b) two wires with gates, rest of scene 1, scenes 2 and 3; (c) full-width electron close-up, scene 4 (now a board change); (d) calculation layout, scene 5; (e) one wire and gate, scenes 6 and 7; (f) the large loop with the painted cell, scenes 8 and 9; (g) full-width timeline, scene 10 (new cut); (h) the two end panels, scene 11; (i) the loop with the memory card, scene 12; then cards, handoff and notes. Revision 1 kept the loop under scenes 8 to 10 (425 + 413 + 334 = 1,172 characters, about 88 s before holds). After the cut the longest set-up is the loop stage, scenes 8 and 9 (425 + 413 = 838 characters, about 63 s at 13.3 characters per second).
- **Question cards (Revision 2).** Each card arrives with its full text (38 px) and a picture in one move, nothing answer-bearing: A1 a coded exam-style circuit (a cell joined to a motor symbol, a circle marked "M") with a `ChargeGate` on the wire showing the givens "0.25 A" and "4.0 min" and an empty counter; A2 the coded HSC-style cell-and-lamp diagram with X and Y and no arrows. On the answer side the card shrinks to the top, a givens strip keeps the values or conditions, the picture stays beside the working, each answer sits in a dark-ink frame and one classic slip takes a slate scribble crossing with a slate hand tag.
- **Board layout (constant):** heading top-left; the loop (or the wire) in the left 60 per cent; the equation, givens and working in the right column.
- **No human figures.** None; "scientists" are spoken only, with a coded timeline (1700s, 1897).
- **Author notes (not learner copy):**
  (a) "Current is the same all the way round a single loop" holds for a steady current in a series loop (charge conservation, no build-up). Branches are v18 onwards.
  (b) History: Benjamin Franklin's single-fluid model (1740s) labelled the charge on rubbed glass positive and took current as positive fluid flowing from positive to negative; J. J. Thomson identified the electron in 1897. Names are not said; "in the seventeen hundreds" and "eighteen ninety-seven" are.
  (c) In electrolytes both positive and negative ions move; in some semiconductors the carriers behave as positive charges (holes). Only the salt-solution tag is shown.
  (d) "Negative one way has the same effect as positive the other": the same charge transfer and the same magnetic field (the latter not said). The narration claims only "the same change in charge, the same current".
  (e) `we-1`: 36 ÷ 90 = 0.40 A. A1: 0.25 × 240 = 60 C; 60 ÷ 1.6 × 10⁻¹⁹ = 3.75 × 10²⁰, written 3.8 × 10²⁰; the crossed 0.25 × 4.0 = 1.0 C.
  (f) Pronunciations: "amps"; "six point two five times ten to the eighteen"; "eighteen ninety-seven".

Main question: *Four coulombs pass in one second, or the same four coulombs in two seconds. How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?*
Entry knowledge (v01 the coulomb and the electron's charge; v03 unlike charges attract; v10 energy per coulomb; Stage 5 simple circuits).
Stops after: I = q/t, the ampere, the scale of a coulomb, q = It and t = q/I, current the same round a single loop, electron flow and conventional current and why the convention works. No drift mechanism, no DC and AC, no voltage-current relationship.
Handoff: v12, why electrons flow in a conductor, and DC and AC.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: "Colour key (Revision 2)" under Decisions.

### 1. hook (the same charge, the same current?)
> Here's our loop: a cell, a lamp, and wire. Charge flows round it, steadily. To measure that flow, pick one point in the wire and count the charge going past. Now picture two wires. In one, four coulombs pass every second. In the other, the same four coulombs take two seconds to pass. Which wire carries the bigger **current**?

Visual: opens on v10's last frame (see "Opening frame"), so the painted cell `phys-y11-aa-cell-v1.png` (about 600 px wide, never stretched, coded "1.5 V" label and terminal signs) is on screen from the first frame, with the loop's wires, lamp symbol and drifting navy "−" dots (drawn by `CircuitView`, `carriers="electrons"`). The "Next" chip becomes the heading: "Measuring a flow of charge"; the memory line fades. On "Charge flows round it" ink hand tag "one loop" with an ink pen arrow following the wire round. On "pick one point" the dashed gate becomes a solid ink `ChargeGate` (counter "0 C", stopwatch "0 s", readouts 52 px); navy hand tag "count here". On "two wires" board change (a new stage, solid from its first frame): the loop and cell slide up small to the top-left; two straight full-width coded wires, A and B, each with a `ChargeGate` and navy coulomb tiles waiting at its left end. On "four coulombs pass every second" four tiles cross A's gate as its stopwatch runs to "1 s" (counter "4 C"); on "take two seconds" four tiles cross B's gate as its stopwatch runs to "2 s" (counter "4 C"); navy hand tag "same 4 C" with a navy pen bracket joining the two counters. On "current" chips "A?", "the same?" and a 3-second countdown ring.

### 2. current is charge per second
> Current is how fast charge flows: the charge that passes a point, divided by the time it takes. I equals q over t. Put the charge in coulombs and the time in seconds, and the current comes out in amperes, or amps. One amp is one coulomb passing every second. It's like the flow in a water pipe, measured in litres per second. Current is the same idea, in coulombs per **second**.

Visual: camera continue on wire A, which grows to fill the left 60 per cent (wire B drops out). On "divided by the time" the gate's live readout writes "q ÷ t"; on "I equals q over t" the row "I = q/t" (syllabus form, 60 px, q in navy) in a dark-ink frame with labels "I: current", "q: charge (C)", "t: time (s)"; an ink pen ring round the frame. On "amperes, or amps" the row "unit: ampere, A"; on "One amp" one tile crosses the gate in one second, live readout "1 C ÷ 1 s = 1 A" (52 px; gloss "1 A = 1 C s⁻¹"); ink hand tag "1 A = 1 C every second". On "water pipe" a coded pipe (about 300 px tall) under the wire with a litres counter and "L per s"; navy hand tag "same idea: a rate". On "coulombs per second" the two readouts pulse side by side.

### 3. the hook answered
> So wire A carries four coulombs per second: four amps. Wire B carries four coulombs in two seconds: two amps. The same charge, but in twice the time, so half the current. More charge each second, or the same charge in less time, means a bigger **current**.

Visual: board returns to both wires (the pipe leaves). On "four amps" A's readout "4 C ÷ 1 s = 4 A"; on "two amps" B's readout "4 C ÷ 2 s = 2 A" (both 52 px, each in a dark-ink frame). On "twice the time" ink hand tag "twice the time, half the current" with an ink pen arrow from B's stopwatch to B's readout; the scene 1 chip "A?" gets an ink pen ring and "the same?" takes a slate scribble crossing with a slate hand tag "same charge, not same current". On "bigger current" the row "more charge per second: bigger I" in a dark-ink frame.

### 4. how many electrons in a coulomb?
> In a metal wire, that charge is carried by electrons. And each electron carries only one point six times ten to the minus nineteen coulombs. So one coulomb is six point two five times ten to the eighteen electrons. That's more than six million million million. One amp means that many electrons passing a point, every second. No wonder we count in **coulombs**.

Visual: board change (a new stage, solid from its first frame): a full-width close-up of wire A at its gate, the wire drawn as a wide copper-coloured band, one navy coulomb tile at the gate and the counter "1 C" (52 px). On "carried by electrons" the tile opens into navy "−" dots; on "only one point six times ten to the minus nineteen coulombs" one dot labelled "e = 1.6 × 10⁻¹⁹ C" (tag "from the charge video"); navy hand tag "a tiny charge each". On "one coulomb is" one tile bursts into a dense cloud of dots with a live counter racing to "6.25 × 10¹⁸ electrons" (52 px); the row "1 C = 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons" in a dark-ink frame. On "six million million million" navy hand tag "6 250 000 000 000 000 000" with a navy pen underline. On "every second" the cloud streams through the gate in one second (readout "1 A"). On "coulombs" the cloud closes back into one tile.

### 5. worked example: finding a current
> Let's try one. Task: thirty-six coulombs flow past a point in a wire in one and a half minutes. Find the current. The equation is I equals q over t. The givens: q is thirty-six coulombs, and t is one and a half minutes. The equation needs seconds, so convert first: one and a half minutes is ninety seconds. Now I equals thirty-six divided by ninety, which is point four oh amps. Check the units: coulombs divided by seconds gives **amps**.

Visual: clear change to the calculation layout (solid from its first frame): at the left a wire with a `ChargeGate` (about 300 px tall; counter running to "36 C", stopwatch to "1.5 min"). Task strip: "Find the current in the wire" (38 px; small ink tag "site worked example"). Equation strip: "I = q/t". Givens card: "q = 36 C" (navy); "t = 1.5 min". Rows, one per cue (current row 52 px): on "convert first" "t = 1.5 × 60 = 90 s" (the givens row updates to "t = 1.5 min = 90 s"), an ink pen ring round "min" and ink hand tag "seconds first"; on "thirty-six divided by ninety" "I = 36 ÷ 90"; on "point four oh amps" "I = 0.40 A" in a dark-ink frame (52 px), and a chip "I = 36 ÷ 1.5 = 24 A" takes a slate scribble crossing with a slate hand tag "minutes not converted"; on "amps" "C ÷ s = A" with ink hand tag "units check".

### 6. prediction: how much charge?
> Now turn it around. A current of two point oh amps flows for ten seconds. How much charge passes a point in that **time**?

Visual: board change (solid from its first frame): one full-width wire with a `ChargeGate` reading "2.0 A", stopwatch "10 s", counter "? C" (readouts 52 px), navy tiles waiting at the left. On "two point oh amps" ink hand tag "know I and t" with an ink pen bracket under the two readouts; navy hand tag "find q" at the counter. On "time" chips "5.0 C?" and "20 C?" and a 3-second countdown ring.

### 7. rearranging
> Rearrange it: q equals I times t. Two coulombs pass every second, so in ten seconds, that's twenty coulombs. And if you need the time instead, t equals q over I. It's the same relationship, solved for whichever quantity is **missing**.

Visual: camera continue. On "q equals I times t" `AlignedAlgebra`: "I = q/t" rearranges to "q = It" (52 px); on "Two coulombs pass every second" tiles cross the gate in pairs, the live counter ticking 2, 4, 6 ... "20 C", navy hand tag "2 C each second"; on "twenty coulombs" the row "q = 2.0 × 10 = 20 C" in a dark-ink frame (52 px); the chip "20 C?" gets an ink pen ring and "5.0 C?" takes a slate scribble crossing with a slate hand tag "that's t ÷ I". On "t equals q over I" the row "t = q/I". On "missing" the three forms sit stacked, each form's subject ringed in turn by an ink pen ring; ink hand tag "one relationship, three forms".

### 8. current isn't used up
> Here's a common idea: the lamp uses up some of the current, so less flows back to the cell. Let's check, with a counter on each side of the lamp. They read exactly the same. Charge can't be made or destroyed, so every coulomb that goes into the lamp comes out the other side. What the lamp takes is energy: each coulomb gives up the energy it got from the cell. So in a single loop, the current is the same all the way **round**.

Visual: board change (a new stage, solid from its first frame) back to the loop, now large: the painted cell `phys-y11-aa-cell-v1.png` (about 600 px wide) at the left with coded "1.5 V" and terminal signs, and the wires, lamp symbol and moving charges drawn by `CircuitView` (0.40 A). On "less flows back" a chip "the lamp uses up current" (no cross yet). On "a counter on each side" two `ChargeGate`s, before and after the lamp; on "exactly the same" both live readouts count up in step: "0.40 A" and "0.40 A" (52 px); ink hand tag "same reading" with an ink pen bracket joining the two readouts. On "comes out the other side" tiles enter and leave the lamp, one for one. On "What the lamp takes is energy" each tile's green energy slice (as last time) shrinks as it passes through the lamp, and a gold outline energy arrow leaves the glowing lamp; the slices refill as tiles pass through the cell; green hand tag "energy out, charge stays". On "the same all the way round" the chip takes a slate scribble crossing with a slate hand tag "charge isn't used up"; the row "single loop: same current everywhere" in a dark-ink frame (52 px).

### 9. which way does it go?
> Now, which way does the charge go? In a metal wire, the moving charges are electrons. They're negative, so they're attracted towards the positive terminal. They drift out of the negative terminal, round the circuit, and into the positive terminal. But circuit diagrams draw the current the other way, from positive round to negative. That's called conventional current: the direction a positive charge would **flow**.

Visual: camera continue; the gates and tiles leave, and the cell's terminal signs grow: red "+" and navy "−" (52 px). On "attracted towards the positive terminal" the navy dots drift (`CircuitView`, `carriers="electrons"`) and an ink pen ring circles the cell's "+" terminal; on "drift out of the negative terminal" `FlowDirection` draws navy dotted arrows along the inside of the loop from the "−" terminal round to "+", navy hand tag "electron flow: − to +". On "circuit diagrams draw the current the other way" a bold ink arrow along the outside of the loop from "+" round to "−", labelled "I", ink hand tag "conventional current: + to −". On "flow" the row "conventional current: the way positive charge would flow, + to −" in a dark-ink frame (44 px over two lines).

### 10. why draw it backwards?
> Why draw it backwards? In the seventeen hundreds, scientists knew that charge could flow, but they couldn't see what was moving. They guessed it was positive charge, flowing from plus to minus, and wrote all their rules that way. The electron wasn't discovered until eighteen ninety-seven. By then, the convention was used **everywhere**.

Visual: board change (a new stage, solid from its first frame; Revision 2 cut): a full-width coded timeline across the middle of the board, its ends marked "1700s" and "1897" in ink (52 px) from the first frame, with the loop and its two arrows small at the top-left. On "seventeen hundreds" the card "1700s: direction chosen: + to −" with a bold ink arrow; on "couldn't see what was moving" a solid ink "?" over a short bare wire drawn above the 1700s end; ink hand tag "the mover was unseen". On "flowing from plus to minus" red hand tag "guessed: positive charge" with an ink pen underline under "+ to −". On "wrote all their rules that way" small ink rule cards stack along the timeline from the 1700s end. On "eighteen ninety-seven" the card "1897: electron discovered" with a navy "−"; navy hand tag "found much later" with a navy pen bracket spanning the gap between the two cards. On "everywhere" the rule cards reach the 1897 end and the ink arrow on the small loop pulses.

### 11. why it still works
> And it still gives the right answers. Watch one end of the wire. When an electron leaves this end, the end loses a negative charge, so it becomes more positive. If a positive charge arrived instead, the end would also become more positive, by the same amount. Negative charge moving one way does the same job as positive charge moving the other way. So the convention works. Just remember the electrons really go the other **way**.

Visual: board change (solid from its first frame): `EquivalentFlow`: the left end of a straight wire shown twice, side by side, each panel large with its end tally "end: 0" (52 px). On "an electron leaves this end" in the left panel a navy "−" leaves to the right; tally "end: +1"; navy hand tag "− leaves". On "a positive charge arrived instead" in the right panel a red "+" arrives from the right; tally "end: +1"; red hand tag "+ arrives". On "the same amount" both tallies pulse with "=" between them and an ink pen ring round each "+1". On "the convention works" the row "same change in charge: same current" in a dark-ink frame (52 px). On "other way" the loop returns small with both arrows; small ink tag "in salt solutions, positive ions really do move".

### 12. memory aid
> To remember it: current is coulombs per second. The current arrow goes from plus to minus, and the electrons go from minus to **plus**.

Visual: board change (solid from its first frame): the loop with the painted cell `phys-y11-aa-cell-v1.png` and both arrows fills the left 55 per cent, one `ChargeGate` on its wire; the memory card (dark-ink frame, hand lettering 44 px) writes at the right: "Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus." On "coulombs per second" the gate's readout pulses ("0.40 A"); on "plus to minus" the ink arrow pulses; on "minus to plus" the navy dotted arrows pulse. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A small electric motor carries a steady current of point two five amps for four point oh minutes. Calculate the charge that passes through the motor in this time. Then calculate the number of electrons that this charge represents. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "A small electric motor carries a steady current of 0.25 A for 4.0 minutes. (a) Calculate the charge that passes through the motor in this time. (b) Calculate the number of electrons that this charge represents. (3 marks)" Below: "e = 1.6 × 10⁻¹⁹ C". The card arrives with its full text (38 px) and picture in one move. Picture (about 320 px tall, at the right): a coded exam-style circuit, a cell joined to a motor symbol (a circle marked "M"), with a `ChargeGate` on the wire showing "0.25 A" and "4.0 min" and an empty counter "? C". Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> First, the time in seconds: four minutes is two hundred and forty seconds. Then q equals I t: point two five times two hundred and forty is sixty **coulombs**. Dividing sixty by the charge on one electron gives about three point eight times ten to the twenty **electrons**. Using four instead of two hundred and forty gives one coulomb. Convert the minutes **first**.

Visual: card shrinks to the top; "0.25 A" and "4.0 minutes" underlined in ink; givens strip "I = 0.25 A; t = 4.0 min; e = 1.6 × 10⁻¹⁹ C"; the card's circuit picture stays at the right. Rows: on "two hundred and forty seconds" "t = 4.0 × 60 = 240 s"; on "q equals I t" "q = It = 0.25 × 240"; on "coulombs" "(a) q = 60 C" in a dark-ink frame (52 px), and the picture's counter fills to "60 C"; "N = 60 ÷ (1.6 × 10⁻¹⁹)"; on "electrons" "(b) N ≈ 3.8 × 10²⁰ electrons" in a dark-ink frame (52 px). On "first" a chip "(a) 1.0 C (minutes not converted)" arrives in full ink and takes a slate scribble crossing with a slate hand tag "convert first". Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. The diagram shows a cell connected to a lamp. Point X is on the wire joined to the cell's positive terminal, and point Y is on the wire joined to its negative terminal. State the direction of the conventional current through the lamp: from X to Y, or from Y to X. Then state which way the electrons drift through the lamp, and explain why the two directions differ. Pause here to answer.

Visual: `QuestionCard` with a coded HSC-style circuit diagram (black lines on the light card): a cell at the left (long line labelled "+", short line labelled "−"), a lamp symbol at the right; the top wire from "+" to the lamp marked "X", the bottom wire from the lamp to "−" marked "Y". Text: "The diagram shows a cell connected to a lamp. Point X is on the wire joined to the positive terminal of the cell, and point Y is on the wire joined to the negative terminal. (a) State the direction of the conventional current through the lamp: from X to Y, or from Y to X. (b) State the direction in which the electrons drift through the lamp, and explain why this direction differs from your answer to (a). (3 marks)" The card arrives with its full text (38 px) and the diagram (about 320 px tall) in one move. No arrows on the diagram. The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> Conventional current leaves the positive terminal, so through the lamp it goes from X to **Y**. The electrons are negative, so they drift the other way, from Y to X, towards the positive **terminal**. They differ because conventional current is the way positive charge would flow, and the real carriers are negative. Saying the electrons go from X to Y mixes up the two **directions**.

Visual: card shrinks to the top; "positive terminal" and "negative terminal" underlined in ink; givens strip "X: wire from +; Y: wire to −"; the circuit diagram stays large at the right. On "Y" the bold ink "I" arrow appears on the diagram from X through the lamp to Y; "(a) X to Y" in a dark-ink frame (52 px). On "terminal" navy dotted arrows from Y through the lamp to X; "(b) Y to X: electrons are negative; conventional current is the way positive charge would flow" in a dark-ink frame (44 px over two lines). On "directions" a chip "(b) the electrons drift from X to Y" arrives in full ink and takes a slate scribble crossing with a slate hand tag "that's the current arrow". Hold about 1 second.

### 17. handoff
> So current is charge per second, and it's drawn from plus to minus. But here's a puzzle. A copper wire is full of free electrons, even with no cell connected, and yet no current flows. So what does connecting a voltage actually do to them? And what if that voltage keeps **reversing**?

Visual: board change: the memory line small at the top. The loop fades; zoom into a short length of copper wire with no cell: a coded lattice of pale grey ions, each with a small red "+", and navy "−" free electrons darting in random directions. A dashed gate across the wire: "net flow: 0". On "connecting a voltage" two loose wire ends with "+" and "−" terminal markers hover beside the wire, not yet joined. Chips write: "what does the voltage change?" and, on "reversing", "and if it keeps reversing?". Then the chip "Next: Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Current is the rate of flow of charge: I = q/t (q in C, t in s). 1 A = 1 C s⁻¹.
2. Rearranged: q = It and t = q/I. Convert minutes to seconds first.
3. 1 C is 6.25 × 10¹⁸ electrons (e = 1.6 × 10⁻¹⁹ C).
4. Single loop: the same current everywhere. The lamp takes energy, not charge.
5. Electrons drift − to +. Conventional current (positive charge's way) runs + to −.

Memory card (framed in dark ink, beside the notes): *Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus.* Notes at 34 px in the role colours (q and the electron values navy, I ink, "energy" green); five one-line bullets, no paragraphs. A small coded loop with the ink "I" arrow and the navy dotted electron arrows sits under the card.

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why wire A has the bigger current: the same charge passes in less time (3). Why we count in coulombs: an amp is an enormous number of electrons (4). Why convert to seconds: the ampere is coulombs per second (5). Why the current is the same either side of the lamp: charge cannot be made or destroyed, and the lamp takes energy, not charge (8). Why electrons drift from − to +: they are negative and are attracted to the positive terminal (9). Why conventional current points the other way: it was chosen before the electron was known (10). Why it still gives correct answers: a negative charge leaving has the same effect as a positive charge arriving (11).
- **Misconceptions addressed:** the same charge means the same current (1, 3); current is used up (8; site misconception 2); conventional current is the electron direction (9, 11, feedback 2 crossed; site misconception 1); minutes not converted (5, feedback 1 crossed).
- **One idea at a time:** the rate (2, 3), the scale (4), a calculation (5), rearranging (6, 7), conservation (8), the electron direction and the convention (9), its history (10), why it works (11).
- **Video makes it easier:** the student sees tiles cross a gate against a stopwatch (1 to 3), one coulomb burst into 6.25 × 10¹⁸ dots (4), two gates either side of the lamp count in step while energy, not charge, leaves the lamp (8), two arrows run opposite ways round one loop (9), and two tallies show a leaving electron and an arriving positive charge give the same +1 (11).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("steady"; "4.0 minutes"; e given; which terminal X and Y join; the two options for (a)), nothing answer-bearing (the A2 diagram has no arrows). One crossed mistake each; feedback about 29 s and 29 s.
- **Avoided double teaching:** v01's coulomb and e recalled in a phrase with a tag (4); v03's attraction recalled in a phrase (9); v10's energy per coulomb shown as the green slice without re-teaching (8).
- **Syllabus coverage:** `ci9e13ac7f`: current calculated with I = q/t (2, 3, 5, A1), with q = It and t = q/I (7); `cibb4a6f3a`: the flow of charge (electron drift) related to the direction of conventional current (9 to 11, A2).
- **Out of scope by design:** why electrons drift and drift speed (v12); DC and AC (v12); voltage and current (v13 on); meters (v19); branches (v18 on).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A small electric motor carries a steady current of 0.25 A for 4.0 minutes. (a) Calculate the charge that passes through the motor in this time. (b) Calculate the number of electrons that this charge represents." (e = 1.6 × 10⁻¹⁹ C given.)
Model answer: (a) t = 4.0 × 60 = 240 s; q = It = 0.25 × 240 = 60 C. (b) N = q/e = 60 ÷ (1.6 × 10⁻¹⁹) = 3.75 × 10²⁰ ≈ 3.8 × 10²⁰ electrons. Classic mistake (crossed): "(a) 1.0 C (minutes not converted)".

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** Diagram: a cell (long line "+", short line "−") joined to a lamp; X on the wire from the positive terminal to the lamp, Y on the wire from the lamp to the negative terminal. "(a) State the direction of the conventional current through the lamp: from X to Y, or from Y to X. (b) State the direction in which the electrons drift through the lamp, and explain why this direction differs from your answer to (a)."
Model answer: (a) From X to Y: conventional current leaves the positive terminal and flows round the circuit to the negative terminal. (b) From Y to X. Conventional current is defined as the direction in which positive charge would flow; in a metal the charge carriers are electrons, which are negative, so they drift the opposite way, towards the positive terminal. Classic mistake (crossed): "(b) the electrons drift from X to Y".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook wires | 4 C in 1 s: 4 A; 4 C in 2 s: 2 A | 1, 3 |
| Ampere | 1 A = 1 C s⁻¹ | 2, notes |
| Electron charge | e = 1.6 × 10⁻¹⁹ C; 1 C = 6.25 × 10¹⁸ electrons | 4, 13, 14, notes |
| `we-1` (site) | q = 36 C; t = 1.5 min = 90 s; I = 0.40 A | 5 |
| `we-1` crossed slip (Revision 2) | 36 ÷ 1.5 = 24 A (minutes not converted) | 5 |
| Loop gates | 0.40 A either side of the lamp (illustrative, reuses `we-1`); engine values 1.5 V cell and a 3.75 Ω lamp (not shown on screen) | 8, 12 |
| Electron count written out (Revision 2 hand tag) | 6 250 000 000 000 000 000 | 4 |
| Prediction (site quick check) | 2.0 A for 10 s; q = 20 C; distractor 5.0 C | 6, 7 |
| A1 | 0.25 A; 4.0 min = 240 s; q = 60 C; N = 3.75 × 10²⁰ ≈ 3.8 × 10²⁰; crossed 1.0 C | 13, 14 |
| Timeline | 1700s; 1897 | 10 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 4 ÷ 1 = 4 A; 4 ÷ 2 = 2 A.
- 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸.
- 1.5 × 60 = 90 s; 36 ÷ 90 = 0.40 A; 36 ÷ 1.5 = 24 (crossed slip, Revision 2).
- 6.25 × 10¹⁸ written out is 625 followed by 16 zeros (19 digits): 6 250 000 000 000 000 000 (Revision 2 hand tag).
- 1.5 V ÷ 3.75 Ω = 0.40 A (engine set-up for the loop, Revision 2; neither value is shown or said).
- 2.0 × 10 = 20 C; 10 ÷ 2.0 = 5.0 (distractor, crossed).
- 4.0 × 60 = 240 s; 0.25 × 240 = 60 C; 60 ÷ (1.6 × 10⁻¹⁹) = 3.75 × 10²⁰ → 3.8 × 10²⁰; 0.25 × 4.0 = 1.0 C (crossed).

## Memory aid check

- **Revision 2:** the line is unchanged; it is now a framed memory card (dark-ink frame) in scene 12 and beside the notes. No new assumption.
- **"Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus."** Meaning, as said in scene 12: current is the charge passing a point each second (I = q/t), and in the external circuit conventional current runs from the positive terminal to the negative terminal while electrons drift from negative to positive. Assumptions checked: "plus to minus" is the external circuit (inside a cell the current runs from − to +; not said, and the line says "the arrow" on a circuit diagram); "electrons go minus to plus" is for metal wires, where electrons are the carriers (salt-solution tag in 11). Introduced after the rate (2), the direction (9) and the reason (10, 11).
- **Water flow (site hook, lesson 11) used once, in 2.** "Current is coulombs per second, the way flow is litres per second." Assumption checked: the mapping is rate of flow only (charge to volume, current to flow rate). No pump, pressure or pipe width is mapped, so it says nothing about voltage or resistance that a later video would have to undo.
- **Site hook filed under lesson 12 considered, not used in that form.** "Conventional current is a map drawn before anyone found the electron. Keep the map, remember the electrons walk the other way." Its idea is in 10 and 11; the shorter line above is easier to recall in an exam, and the map image adds a third analogy.

## Narration length estimate

Revision 2 count (11 Nov; counted by the checker script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **5,566 characters**, 18 scenes, unchanged from Revision 1 (no speech was edited). Characters per scene (1 to 18): 323, 375, 252, 357, 436, 118, 231, 425, 413, 334, 427, 131, 263, 355, 397, 373, 281, 75. At 13.3 characters per second the speech is about 418 s; add about 20 s of holds and settling (the tiles crossing gates in 1 and 3, the electron burst in 4, the counters in 7 and 8, the arrows in 9, the tallies in 11, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 39 s more of the quiet notes hold (45 s in all; about 87 s of holds and countdowns): **about 506 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: the same 5,566 characters, about 520 s with a 60 s notes hold. Longest visual set-up: the loop stage, scenes 8 and 9 (838 characters, about 63 s).

## Scene list and build ids

Lesson key `p-y11-fa3-v11` (route phys-y11-fa3-v11). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v11` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v11` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, current-rate, hook-answered, electrons-per-coulomb, worked-example, prediction, rearranging, not-used-up, direction, why-backwards, why-it-works, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v10's last frame continues into scene 1 (camera continue: the loop and gate carry over); inside scene 1 a board change to the two wires on "two wires" (Revision 2); 1 to 2 camera continue (wire A); 2 to 3 camera continue; 3 to 4 board change to the full-width electron close-up (Revision 2); 4 to 5 clear change to the calculation layout; 5 to 6 board change; 6 to 7 camera continue; 7 to 8 board change to the large loop; 8 to 9 camera continue; 9 to 10 board change to the full-width timeline (Revision 2 cut); 10 to 11 board change to the two end panels, the small loop returning at the end; 11 to 12 board change to the loop with the memory card; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame. `motionTools`: `CircuitView` (circuits engine), `ChargeGate`, `FlowDirection`, `EquivalentFlow`, `AlignedAlgebra`, `Countdown`.

Holds: hook and prediction (3 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, the ring full from "Pause here to answer."), feedback (1 s each), handoff (2 s). key-notes is the quiet notes hold (about 45 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v11-learning-review.md`, `science_check` = `checks/p-y11-fa3-v11-science-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-aa-cell-v1.png` (1774 × 887, RGBA; inspected 11 Nov: a silver AA cell with a blank cream band, lying on its side, positive cap at the right, no printing): 1, 8, 9, 12 (large), and small in 10 and 11. The "1.5 V" label and terminal signs are coded.
- **Checked, not used (11 Nov):** `phys-y11-lamp-holder-v1.png` (a lit bench lamp in a white holder on a wooden base) and `phys-y11-battery-holder-v1.png` (a two-cell holder with brass terminals) are delivered, but v10's handoff frame, which this video opens on, uses the single cell with a coded lamp symbol, and the A2 card uses the same symbol; swapping the lamp to a plate would break the join and the match with the exam diagram. `phys-y11-rod-copper-v1.png` (a bare copper rod) was considered for scene 4's close-up; the close-up needs charges drawn inside the wire, so a coded copper band is used.

Need (new plates): none.

Coded: the loop's wires, lamp symbol, glow and moving charges (`CircuitView`), gates, tiles and dots, flow arrows, end tallies, timeline, pipe, the A1 and A2 circuit diagrams, working. Coded parts reused from v05 (coulomb tile), v10 (the green energy slice) and FA2 (gold outline energy arrow).

Kit gaps (for the next physics kit brief):
1. **`ChargeGate`.** A solid gate line across a wire with a coulomb counter, a stopwatch and a live "C ÷ s" readout, able to sit on a `CircuitView` wire and read q = I × t from the same run.
2. **`FlowDirection`.** Navy dotted electron-flow arrows and the bold ink "I" arrow on opposite sides of a `CircuitView` wire.
3. **`EquivalentFlow`.** Two end panels with tallies.
4. **Motor symbol** (a circle marked "M") for `CircuitView`, used on the A1 card; the engine has battery, wire, ammeter, voltmeter, switch, resistor and lamp parts only. Lesson-coded until added.
5. **Point labels** (X, Y) on a `CircuitView` wire, for the A2 card (labels on parts exist; labels at a point on a wire may need adding).

## Codex asset brief

None for this video (no new plates, Revision 2 included). `phys-y11-aa-cell-v1.png` is delivered.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: I = q/t; 1 A = 1 C s⁻¹; 1 C = 6.25 × 10¹⁸ electrons with e = 1.6 × 10⁻¹⁹ C; q = It and t = q/I; in a single loop the steady current is the same everywhere and the lamp takes energy, not charge; in a metal, electrons drift from the negative terminal round the external circuit to the positive terminal; conventional current runs from + to − in the external circuit; the convention was set before the electron's discovery in 1897; a negative charge leaving an end changes its charge by the same amount as a positive charge arriving.
3. Confirm no drift mechanism (field in the wire), DC/AC, voltage-current relationship or branching circuit is taught.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away (the A2 diagram carries no arrows).
5. Confirm both syllabus quotes match the syllabus JSON exactly (the fraction typeset inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v10.md` scene 14.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).
10. Revision 2: confirm every visual cue phrase quoted after "On" appears word for word in its scene's narration, in spoken order, and every bold cue word is quoted in its scene's Visual.
11. Revision 2: confirm the colour roles hold in every scene (results in dark-ink frames, never green; every crossed mistake a slate scribble with a slate hand tag, never red; red only for positive charge; green only for the energy each coulomb carries).
12. Revision 2: confirm the new screen items are correct: the crossed slip "I = 36 ÷ 1.5 = 24 A"; the written-out count "6 250 000 000 000 000 000"; the tag "that's t ÷ I" for 5.0; the A1 picture shows only the givens (0.25 A, 4.0 min) and an empty counter.
13. Revision 2: confirm no person, hand, face or body outline is drawn or requested ("hand tag" means a handwritten label), no U+2061, and that no video code is spoken or shown on screen.

## YouTube metadata (draft)

Title: Electric Current and Why It Flows "Backwards" | Year 11 Physics

(Title length: 62 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson11.sa.html

Four coulombs in one second, or the same four coulombs in two: which is the bigger current? Learn what an amp measures, see how many electrons make up one coulomb, and calculate current, charge and time with I = q/t. Find out why a lamp doesn't use up current, why circuit diagrams draw current flowing the opposite way to the electrons, and why that old convention still gives the right answers. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Calculate electric current using I = q/t" (ci9e13ac7f)
"Relate the flow of charge to the direction of conventional current" (cibb4a6f3a)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Voltage, work and potential energy (previous video). Next: Conductors, DC and AC.

#Year11Physics #Physics #ElectricCurrent #HSCScience

## Open decisions

- **1. v12's question (proposal).** The handoff chip uses "Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?" for phys-y11-fa3-v12 (route placeholder "How can I explain and apply conductors, dc and ac?"). It covers both v12 points (`cidd4209b2`, `ci95fddf87`). `phys-y11-fa3-v12.md` adopts it.
- **2. Current arrow colour (course-wide for circuits).** Bold ink "I" for conventional current and navy dotted for electron flow, as above. Root to confirm for v12 to v30.
- **3. Route refinement (root to record).** Question as above; start "Begin at v10's cell-and-lamp loop; recall the coulomb, e and energy per coulomb"; stop "Stop at the size and direction of current in a single loop; hand the drift mechanism and DC/AC to v12". Entry knowledge should add Stage 5 simple circuits and circuit symbols.
- **4. Site link form.** As FA1 v08.

## Review notes

- Revision 2 (11 Nov): the brief 164 learning review and science check (`checks/p-y11-fa3-v11-learning-review.md`, `checks/p-y11-fa3-v11-science-check.md`) found 0 blockers and 0 should-fix items; no error-check report exists yet. The visual upgrade is recorded in "Revision 2 (11 Nov 2026)" at the end. Needs the Codex error check before voicing.
- Revision 1 next steps (done, brief 164): student learning review (trace from v10 at Year 11 entry; check that the gate and stopwatch make "rate" concrete; that the electron cloud gives an amp a sense of scale without a reading load; that the two gates settle "not used up" before the direction is introduced; that the history scene explains, rather than decorates, the backwards arrow; that the end tallies make "it still works" convincing; that the attempts give nothing away), then the Codex physics check and error check.
- The tiles crossing gates against stopwatches (1 to 3), the coulomb bursting into electrons (4), the matched gates and the energy slices draining at the lamp (8), the opposite arrows (9) and the equal tallies (11) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (11 Nov 2026)

Findings: latest reports clean. `checks/p-y11-fa3-v11-learning-review.md` and `checks/p-y11-fa3-v11-science-check.md` (4 Nov, brief 164): 0 blockers, 0 should fix. No error-check report exists for this lesson. No voice manifest exists; narration was still left unchanged because nothing needed a speech change.

Visual upgrade (to `../maths-visual-standard.md` and the build gate), scene by scene:
- 1: the painted cell `phys-y11-aa-cell-v1.png` is named and on screen from the first frame (v10's handoff frame holds it); hand tags "one loop", "count here", "same 4 C"; pen arrow and bracket; the gate turns solid; the two wires are a new stage that is solid from its first frame.
- 2: "I = q/t" at 60 px in a dark-ink frame with a pen ring; tags "1 A = 1 C every second", "same idea: a rate"; live readout 52 px.
- 3: both readouts framed; tag "twice the time, half the current" with a pen arrow; "the same?" takes a slate scribble with the slate tag "same charge, not same current".
- 4: now a board change to a full-width electron close-up; tags "a tiny charge each" and the count written out, with a pen underline; the result row framed.
- 5: worked example gains a framed answer "I = 0.40 A", the crossed slip "I = 36 ÷ 1.5 = 24 A" (slate scribble, slate tag "minutes not converted"), a pen ring on "min" and tags "seconds first", "units check".
- 6, 7: tags "know I and t", "find q", "2 C each second", "one relationship, three forms"; framed "q = 2.0 × 10 = 20 C"; the wrong chip takes a slate scribble with "that's t ÷ I".
- 8, 9: the loop returns large with the painted cell, drawn by `CircuitView`; tags "same reading", "energy out, charge stays", "electron flow: − to +", "conventional current: + to −"; bracket and ring pen marks; rows framed in dark ink; the crossed chip takes a slate scribble and the slate tag "charge isn't used up".
- 10: new full-width timeline stage; the faint "?" and grey rule cards are now solid ink; tags "the mover was unseen", "guessed: positive charge", "found much later".
- 11: panels solid from the first frame with tallies at 52 px; tags "− leaves", "+ arrives"; pen rings; the salt-solution tag in ink.
- 12: the memory line is a framed card beside the loop.
- 13 to 16: A1 gains a coded circuit picture with a gate showing only the givens; both cards arrive with full text and picture in one move; feedback scenes gain givens strips, dark-ink framed answers (the sentence answer at 44 px over two lines) and slate tags "convert first" and "that's the current arrow".
- 18: notes cut to five one-line bullets (the longest about 80 characters) with the framed memory card; hold 45 s.
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards". Grey scribbles are now slate throughout (the coordinator's FA3 colour rule; root decisions 1 and 10). The review evidence path was corrected to `-science-check.md`.

Cuts: scene 4 is now a board change (the wire stage no longer runs from scene 1 to scene 4); scene 10 cuts from the loop to a full-width timeline (Revision 1 kept the loop under scenes 8 to 10: 1,172 characters, about 88 s before holds). Longest set-up now: scenes 8 and 9, 838 characters, about 63 s.

Simulation: the charge count at a gate with live "C ÷ s" readouts (1 to 3, 6 to 8). Engine: the circuits engine (`solveCircuit`, `CircuitView` with `carriers="electrons"`) draws the loop and its charges at 0.40 A; `ChargeGate` is a lesson-coded overlay reading the same run (kit gap).

New plate requests: none.

Joins: the opening (v10's final frame) is unchanged, and scene 1's Visual now names the plate and the engine without changing what the frame holds. The final frame (scene 17) is unchanged, so v12's opening holds.

Counts: 5,566 to 5,566 characters (no speech change); about 520 s to about 506 s (the notes hold drops from 60 s to 45 s).

Calls for root:
1. The loop is drawn by `CircuitView` with the painted cell placed over the battery symbol's position, as in v10's handoff frame. If root prefers the exam battery symbol on the teaching loop, the cell plate would move beside the loop as a picture of the real object.
2. `ChargeGate` stays a lesson-coded overlay instead of the engine's `ammeter` part, because ammeters are introduced in a later video.
3. The delivered lamp-holder plate is not used, to protect the join with v10 and the match with the A2 exam diagram.
4. The energy arrow keeps FA2 root decision 3's outline style ("gold outline arrow", full line weight); it is a convention, not a faint item.
5. New screen-only items: the crossed slip "I = 36 ÷ 1.5 = 24 A" in the worked example and the written-out electron count. Neither is spoken.
6. A1's picture uses a motor symbol the engine does not yet draw (kit gap 4), with a coded fallback.
