# Year 11 Physics FA3 V11 (Physics 2025, Year 11, Focus Area 3): How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v11`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new (v10's cell reused).

Narration 5,566 characters, 18 scenes, about 520 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: two syllabus points, fully taught; not padded.

Scope: eleventh video of the Year 11 Physics (2025) Focus Area 3 route and the first on electric circuits: current as the rate of flow of charge (I = q/t), the ampere, the scale of a coulomb in electrons, calculating current, charge and time, current the same all round a single loop, electron flow and conventional current, why the convention runs backwards and why it still works. Templates: `phys-y11-fa1-v22.md` (concept format, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md`; FA3 conventions, section list and colour key from `phys-y11-fa3-v04.md` to `phys-y11-fa3-v06.md` and `phys-y11-fa3-v10.md` (Revision 1; v10's scene 14 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson11.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 current as charge per second, true or false, card 2 with `we-1`, quick check, activity 1, fill the blanks, card 3 conventional current and its figure description, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Site memory hooks read: `phys2025-y11-fa3-memory-hooks.json`, lesson 11 ("Current is coulombs per second, the way flow is litres per second.") and lesson 12 (a conventional-current hook filed under the wrong lesson; site correction 3); see "Memory aid check". Route entry: `phys-y11-fa3-v11` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Electric Current. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply electric current? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v12: How can I explain and apply conductors, dc and ac?" (this design proposes "Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?" for v12's chip; see open decision 1).

**Opening frame (v10's actual handoff, Revision 1, 3 Nov).** v10's scene 14 ends with the memory line "Volts are joules per coulomb. Joules = coulombs × volts." small at the top; the painted 1.5 V cell (`phys-y11-aa-cell-v1.png`, coded label "1.5 V" and terminal signs) at the left, coded wires joining its terminals to a coded lamp symbol in one loop; small navy "−" dots drifting slowly round the wire; a dashed counting gate across the wire with the readout "coulombs past here each second?"; two dashed arrows on the wire pointing opposite ways, each with a "?"; chips "how fast?" and "which way?"; chip "Next: How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the eighteenth-century scientists are mentioned, never drawn or named on screen; the counting is done by a coded gate, not an observer); circuits, charges, gates, arrows and working coded (abstract diagrams); the cell is v10's plate; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v01 (the coulomb; e = 1.6 × 10⁻¹⁹ C; electrons move in solids), v03 (unlike charges attract) and v10 (a battery gives each coulomb energy; voltage is energy per coulomb) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its typeset fraction rendered inline, FA2 root decision 11):

- P25-FA3-G2-01 `ci9e13ac7f`: "Calculate electric current using I = q/t"
- P25-FA3-G2-02 `cibb4a6f3a`: "Relate the flow of charge to the direction of conventional current"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v10's handoff (above); the hook (site warm-up: 4 C each second or 4 C every two seconds); current as charge per second, I = q/t, the ampere; the water-flow analogy (site hook); the hook answered; a coulomb is 6.25 × 10¹⁸ electrons (site activity 1 part 2); the site worked example; q = It as a prediction (site quick check) and t = q/I; current is not used up (site misconception 2: counters either side of the lamp; the lamp takes energy, recalled from v10); electron flow in a metal, conventional current, why it runs backwards (history) and why it still works (equal effect of opposite charges moving opposite ways); memory aid; two attempts. Stops at the size and direction of current in a single loop. Not taught: why the electrons drift (the field in the wire, v12); drift speed (v12); DC and AC (v12); voltage and current together (v13 on); ammeters (v19); branching circuits (v18 on).

## Decisions

- **Learner question (v10's proposal adopted; route placeholder rewritten).** "How do we measure a flow of charge, and why is current drawn flowing the opposite way to the electrons?" One causal question carrying both syllabus points: the first half asks for the measure (I = q/t), the second asks for the cause of the backwards arrow (a convention fixed before the electron was known). Answer, built in order: hook and prediction (1); current as a rate (2); the hook answered (3); coulombs and electrons (4); a calculation (5); rearranging (6, 7); not used up (8); the direction (9); why backwards (10); why it still works (11); memory aid (12).
- **Counting at a point (owner quality bar).** **`ChargeGate`**: a dashed gate across the wire with a coulomb counter and a stopwatch readout; coulomb tiles (v05's tile, navy for the electrons' charge) pass through; the readout divides "coulombs ÷ seconds" live. Current is the reading of the gate, not a substance in the wire. A second gate after the lamp (8) reads the same number.
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
- **New explainer motion (coded unless a plate is named):** v10's **handoff loop** (cell plate, wires, lamp symbol, drifting navy dots); **`ChargeGate`** (new: a dashed gate with a coulomb counter, a stopwatch and a live "C ÷ s" readout); v05's **coulomb tile**; **pipe thumbnail** (a coded pipe with a litres counter); **electron pile** (a coded tile that bursts into a dense cloud of navy dots with a counter, 4); **`FlowDirection`** (new: navy dotted electron-flow arrows and the ink "I" arrow on opposite sides of a wire); **`EquivalentFlow`** (new: two end tallies showing equal charge changes); FA2's hollow gold energy arrow; **HSC circuit diagram** (coded cell, lamp and wires in black line style, with point labels, for A2); `AlignedAlgebra` (I = q/t to q = It and t = q/I); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v10 (positive red "+", negative and electrons navy "−", signs always printed); conventional current bold ink with a solid head; electron flow navy dotted; energy leaving the lamp a hollow gold arrow (FA2 root decision 3); the lamp glow pale warm yellow; crossed items grey scribble.
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v10.

### 1. hook (the same charge, the same current?)
> Here's our loop: a cell, a lamp, and wire. Charge flows round it, steadily. To measure that flow, pick one point in the wire and count the charge going past. Now picture two wires. In one, four coulombs pass every second. In the other, the same four coulombs take two seconds to pass. Which wire carries the bigger **current**?

Visual: opens on v10's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Measuring a flow of charge"; the memory line fades. On "pick one point" the dashed gate becomes `ChargeGate` (counter "0 C", stopwatch "0 s"). On "two wires" the loop slides up small; two straight coded wires, A and B, each with a `ChargeGate`; on "four coulombs pass every second" four coulomb tiles cross A's gate as its stopwatch runs to "1 s"; on "take two seconds" four tiles cross B's gate as its stopwatch runs to "2 s". On "current" chips "A?", "the same?" and a 3-second countdown ring.

### 2. current is charge per second
> Current is how fast charge flows: the charge that passes a point, divided by the time it takes. I equals q over t. Put the charge in coulombs and the time in seconds, and the current comes out in amperes, or amps. One amp is one coulomb passing every second. It's like the flow in a water pipe, measured in litres per second. Current is the same idea, in coulombs per **second**.

Visual: camera continue on wire A. On "divided by the time" the gate's readout writes "q ÷ t"; on "I equals q over t" the boxed row "I = q/t" (syllabus form) with labels "I: current", "q: charge (C)", "t: time (s)". On "amperes, or amps" the row "unit: ampere, A"; on "One amp" one tile crosses the gate in one second, readout "1 C ÷ 1 s = 1 A" (gloss "1 A = 1 C s⁻¹"). On "water pipe" a small coded pipe beside the wire with a litres counter and "L per s"; on "coulombs per second" the two readouts pulse side by side.

### 3. the hook answered
> So wire A carries four coulombs per second: four amps. Wire B carries four coulombs in two seconds: two amps. The same charge, but in twice the time, so half the current. More charge each second, or the same charge in less time, means a bigger **current**.

Visual: board returns to both wires. On "four amps" A's readout "4 C ÷ 1 s = 4 A"; on "two amps" B's readout "4 C ÷ 2 s = 2 A". The scene 1 chip "A?" glows and "the same?" takes a grey scribble cross. On "bigger current" the row "more charge per second: bigger I", boxed.

### 4. how many electrons in a coulomb?
> In a metal wire, that charge is carried by electrons. And each electron carries only one point six times ten to the minus nineteen coulombs. So one coulomb is six point two five times ten to the eighteen electrons. That's more than six million million million. One amp means that many electrons passing a point, every second. No wonder we count in **coulombs**.

Visual: camera continue; zoom into wire A at the gate. On "carried by electrons" the tile fades into navy "−" dots; on "only one point six times ten to the minus nineteen coulombs" one dot labelled "e = 1.6 × 10⁻¹⁹ C" (tag "from the charge video"). On "one coulomb is" one tile bursts into a dense cloud of dots with a counter racing to "6.25 × 10¹⁸ electrons"; the row "1 C = 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons". On "every second" the cloud streams through the gate in one second ("1 A"). On "coulombs" the cloud closes back into one tile.

### 5. worked example: finding a current
> Let's try one. Task: thirty-six coulombs flow past a point in a wire in one and a half minutes. Find the current. The equation is I equals q over t. The givens: q is thirty-six coulombs, and t is one and a half minutes. The equation needs seconds, so convert first: one and a half minutes is ninety seconds. Now I equals thirty-six divided by ninety, which is point four oh amps. Check the units: coulombs divided by seconds gives **amps**.

Visual: clear change to the calculation layout; a wire with a `ChargeGate` at the left (counter to "36 C", stopwatch to "1.5 min"). Task strip: "Find the current in the wire" (grey tag "site worked example"). Equation strip: "I = q/t". Givens group: "q = 36 C"; "t = 1.5 min". Rows, one per cue: on "convert first" "t = 1.5 × 60 = 90 s" (the givens row updates to "t = 1.5 min = 90 s"); "I = 36 ÷ 90"; "= 0.40 A", boxed; on "amps" "C ÷ s = A".

### 6. prediction: how much charge?
> Now turn it around. A current of two point oh amps flows for ten seconds. How much charge passes a point in that **time**?

Visual: board change: one wire with a `ChargeGate` reading "2.0 A", stopwatch "10 s", counter "? C". On "time" chips "5.0 C?" and "20 C?" and a 3-second countdown ring.

### 7. rearranging
> Rearrange it: q equals I times t. Two coulombs pass every second, so in ten seconds, that's twenty coulombs. And if you need the time instead, t equals q over I. It's the same relationship, solved for whichever quantity is **missing**.

Visual: camera continue. `AlignedAlgebra`: "I = q/t" rearranges to "q = It"; on "Two coulombs pass every second" tiles cross the gate in pairs, the counter ticking 2, 4, 6 ... "20 C"; the row "q = 2.0 × 10 = 20 C", boxed; the chip "20 C?" glows and "5.0 C?" takes a grey scribble cross. On "t equals q over I" the row "t = q/I". On "missing" the three forms sit stacked, with the given quantities in ink and the missing one highlighted in turn.

### 8. current isn't used up
> Here's a common idea: the lamp uses up some of the current, so less flows back to the cell. Let's check, with a counter on each side of the lamp. They read exactly the same. Charge can't be made or destroyed, so every coulomb that goes into the lamp comes out the other side. What the lamp takes is energy: each coulomb gives up the energy it got from the cell. So in a single loop, the current is the same all the way **round**.

Visual: board change back to the loop with the cell and lamp. On "less flows back" a chip "the lamp uses up current" (no cross yet). On "a counter on each side" two `ChargeGate`s, before and after the lamp; on "exactly the same" both readouts count up in step: "0.40 A" and "0.40 A". On "comes out the other side" tiles enter and leave the lamp, one for one. On "What the lamp takes is energy" each tile's green energy slice (v10) shrinks as it passes through the lamp, and a hollow gold energy arrow leaves the glowing lamp; the slices refill as tiles pass through the cell. On "the same all the way round" the chip takes a grey scribble cross; the row "single loop: same current everywhere", boxed.

### 9. which way does it go?
> Now, which way does the charge go? In a metal wire, the moving charges are electrons. They're negative, so they're attracted towards the positive terminal. They drift out of the negative terminal, round the circuit, and into the positive terminal. But circuit diagrams draw the current the other way, from positive round to negative. That's called conventional current: the direction a positive charge would **flow**.

Visual: camera continue; the cell's terminals glow "+" and "−". On "attracted towards the positive terminal" the navy dots drift; `FlowDirection` draws navy dotted arrows along the inside of the loop from the "−" terminal round to "+", labelled "electron flow". On "circuit diagrams draw the current the other way" a bold ink arrow along the outside of the loop from "+" round to "−", labelled "I (conventional current)". On "flow" the row "conventional current: the way positive charge would flow, + to −", boxed.

### 10. why draw it backwards?
> Why draw it backwards? In the seventeen hundreds, scientists knew that charge could flow, but they couldn't see what was moving. They guessed it was positive charge, flowing from plus to minus, and wrote all their rules that way. The electron wasn't discovered until eighteen ninety-seven. By then, the convention was used **everywhere**.

Visual: a coded timeline slides in under the loop: "1700s: direction chosen: + to −" with a small ink arrow; "1897: electron discovered" with a small navy "−". On "couldn't see what was moving" a pale "?" over the wire. On "wrote all their rules that way" small grey rule cards stack along the 1700s end. On "everywhere" the ink arrow on the loop pulses.

### 11. why it still works
> And it still gives the right answers. Watch one end of the wire. When an electron leaves this end, the end loses a negative charge, so it becomes more positive. If a positive charge arrived instead, the end would also become more positive, by the same amount. Negative charge moving one way does the same job as positive charge moving the other way. So the convention works. Just remember the electrons really go the other **way**.

Visual: `EquivalentFlow`: the left end of a straight wire shown twice, side by side. Left panel: a navy "−" leaves to the right; tally "end: +1". Right panel: a red "+" arrives from the right; tally "end: +1". On "the same amount" both tallies pulse; "=" between them. On "the convention works" the row "same change in charge: same current", boxed. On "other way" the loop returns with both arrows; grey tag "in salt solutions, positive ions really do move".

### 12. memory aid
> To remember it: current is coulombs per second. The current arrow goes from plus to minus, and the electrons go from minus to **plus**.

Visual: the handwritten line writes large: "Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus." On "coulombs per second" the gate's readout pulses; on "plus to minus" the ink arrow; on "minus to plus" the navy dotted arrows. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A small electric motor carries a steady current of point two five amps for four point oh minutes. Calculate the charge that passes through the motor in this time. Then calculate the number of electrons that this charge represents. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A small electric motor carries a steady current of 0.25 A for 4.0 minutes. (a) Calculate the charge that passes through the motor in this time. (b) Calculate the number of electrons that this charge represents. (3 marks)" Below: "e = 1.6 × 10⁻¹⁹ C". Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> First, the time in seconds: four minutes is two hundred and forty seconds. Then q equals I t: point two five times two hundred and forty is sixty **coulombs**. Dividing sixty by the charge on one electron gives about three point eight times ten to the twenty **electrons**. Using four instead of two hundred and forty gives one coulomb. Convert the minutes **first**.

Visual: card shrinks to the top; "0.25 A" and "4.0 minutes" underlined. Rows: "t = 4.0 × 60 = 240 s"; "q = It = 0.25 × 240"; on "coulombs" "(a) q = 60 C", boxed; "N = 60 ÷ (1.6 × 10⁻¹⁹)"; on "electrons" "(b) N ≈ 3.8 × 10²⁰ electrons", boxed. On "first" a chip "(a) 1.0 C (minutes not converted)" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. The diagram shows a cell connected to a lamp. Point X is on the wire joined to the cell's positive terminal, and point Y is on the wire joined to its negative terminal. State the direction of the conventional current through the lamp: from X to Y, or from Y to X. Then state which way the electrons drift through the lamp, and explain why the two directions differ. Pause here to answer.

Visual: `QuestionCard` with a coded HSC-style circuit diagram (black lines on the light card): a cell at the left (long line labelled "+", short line labelled "−"), a lamp symbol at the right; the top wire from "+" to the lamp marked "X", the bottom wire from the lamp to "−" marked "Y". Text: "The diagram shows a cell connected to a lamp. Point X is on the wire joined to the positive terminal of the cell, and point Y is on the wire joined to the negative terminal. (a) State the direction of the conventional current through the lamp: from X to Y, or from Y to X. (b) State the direction in which the electrons drift through the lamp, and explain why this direction differs from your answer to (a). (3 marks)" No arrows on the diagram. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Conventional current leaves the positive terminal, so through the lamp it goes from X to **Y**. The electrons are negative, so they drift the other way, from Y to X, towards the positive **terminal**. They differ because conventional current is the way positive charge would flow, and the real carriers are negative. Saying the electrons go from X to Y mixes up the two **directions**.

Visual: card shrinks to the top; "positive terminal" and "negative terminal" underlined. On "Y" the ink "I" arrow appears on the diagram from X through the lamp to Y; "(a) X to Y", boxed. On "terminal" navy dotted arrows from Y through the lamp to X; "(b) Y to X: electrons are negative; conventional current is the way positive charge would flow", boxed. On "directions" a chip "(b) the electrons drift from X to Y" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. handoff
> So current is charge per second, and it's drawn from plus to minus. But here's a puzzle. A copper wire is full of free electrons, even with no cell connected, and yet no current flows. So what does connecting a voltage actually do to them? And what if that voltage keeps **reversing**?

Visual: board change: the memory line small at the top. The loop fades; zoom into a short length of copper wire with no cell: a coded lattice of pale grey ions, each with a small red "+", and navy "−" free electrons darting in random directions. A dashed gate across the wire: "net flow: 0". On "connecting a voltage" two loose wire ends with "+" and "−" terminal markers hover beside the wire, not yet joined. Chips write: "what does the voltage change?" and, on "reversing", "and if it keeps reversing?". Then the chip "Next: Why does connecting a voltage make a wire's electrons flow, and how is AC different from DC?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Electric current is the rate of flow of charge: I = q/t, with q in coulombs and t in seconds. 1 A = 1 C s⁻¹.
2. Rearranged: q = It and t = q/I. Convert minutes to seconds first.
3. 1 C is 6.25 × 10¹⁸ electrons (e = 1.6 × 10⁻¹⁹ C).
4. In a single loop the current is the same everywhere: charge is not used up; the lamp takes energy.
5. In a metal, electrons drift from − to + round the circuit. Conventional current is the direction positive charge would flow: from + to −. The convention gives correct answers because negative charge moving one way has the same effect as positive charge moving the other way.

Memory aid (large, on the notes screen): *Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus.*

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
| Loop gates | 0.40 A either side of the lamp (illustrative, reuses `we-1`) | 8 |
| Prediction (site quick check) | 2.0 A for 10 s; q = 20 C; distractor 5.0 C | 6, 7 |
| A1 | 0.25 A; 4.0 min = 240 s; q = 60 C; N = 3.75 × 10²⁰ ≈ 3.8 × 10²⁰; crossed 1.0 C | 13, 14 |
| Timeline | 1700s; 1897 | 10 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 4 ÷ 1 = 4 A; 4 ÷ 2 = 2 A.
- 1 ÷ (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸.
- 1.5 × 60 = 90 s; 36 ÷ 90 = 0.40 A.
- 2.0 × 10 = 20 C; 10 ÷ 2.0 = 5.0 (distractor, crossed).
- 4.0 × 60 = 240 s; 0.25 × 240 = 60 C; 60 ÷ (1.6 × 10⁻¹⁹) = 3.75 × 10²⁰ → 3.8 × 10²⁰; 0.25 × 4.0 = 1.0 C (crossed).

## Memory aid check

- **"Current is coulombs per second. The arrow goes plus to minus; the electrons go minus to plus."** Meaning, as said in scene 12: current is the charge passing a point each second (I = q/t), and in the external circuit conventional current runs from the positive terminal to the negative terminal while electrons drift from negative to positive. Assumptions checked: "plus to minus" is the external circuit (inside a cell the current runs from − to +; not said, and the line says "the arrow" on a circuit diagram); "electrons go minus to plus" is for metal wires, where electrons are the carriers (salt-solution tag in 11). Introduced after the rate (2), the direction (9) and the reason (10, 11).
- **Water flow (site hook, lesson 11) used once, in 2.** "Current is coulombs per second, the way flow is litres per second." Assumption checked: the mapping is rate of flow only (charge to volume, current to flow rate). No pump, pressure or pipe width is mapped, so it says nothing about voltage or resistance that a later video would have to undo.
- **Site hook filed under lesson 12 considered, not used in that form.** "Conventional current is a map drawn before anyone found the electron. Keep the map, remember the electrons walk the other way." Its idea is in 10 and 11; the shorter line above is easier to recall in an exam, and the map image adds a third analogy.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,566 characters** (5,583 joined), 18 scenes. Characters per scene (1 to 18): 323, 375, 252, 357, 436, 118, 231, 425, 413, 334, 427, 131, 263, 355, 397, 373, 281, 75. At 13.3 characters per second the speech is about 418 s; add about 20 s of holds and settling (the tiles crossing gates in 1 and 3, the electron burst in 4, the counters in 7 and 8, the arrows in 9, the tallies in 11, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 520 s**, inside the owner's 5 to 10 minute target.

## Scene list and build ids

Lesson key `p-y11-fa3-v11` (route phys-y11-fa3-v11). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v11` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v11` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, current-rate, hook-answered, electrons-per-coulomb, worked-example, prediction, rearranging, not-used-up, direction, why-backwards, why-it-works, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v10's last frame continues into scene 1 (camera continue: the loop and gate carry over); 1 to 2 camera continue (wire A); 2 to 3 camera continue; 3 to 4 camera continue (zoom into the wire); 4 to 5 clear change to the calculation layout; 5 to 6 board change; 6 to 7 camera continue; 7 to 8 board change to the loop; 8 to 9 camera continue; 9 to 10 camera continue (the timeline slides in); 10 to 11 board change to the two end panels, returning to the loop at the end; 11 to 12 fade; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v11-learning-review.md`, `science_check` = `checks/p-y11-fa3-v11-physics-check.md`.

## Assets

Reused: v10's `phys-y11-aa-cell-v1.png` (requested in `phys-y11-fa3-v10.md`; 1, 8 to 11). Coded parts reused from v05 (coulomb tile), v10 (the handoff loop, the green energy slice) and FA2 (hollow gold energy arrow).

New plates: none. Everything else in this video is a circuit, a charge, a gate, an arrow or a graph-like readout, so it is coded.

Checked first (3 Nov): `public/assets/physics/` has no cells, lamps or meters delivered; FA2's `phys-y11-filament-lamp-v1.png` (requested, not delivered) is a bench lamp for light sources and is not needed here, because the loop uses a coded lamp symbol that matches the A2 diagram.

Coded: the loop, wires, lamp symbol and glow, gates, tiles and dots, flow arrows, end tallies, timeline, pipe thumbnail, the A2 circuit diagram, working.

Kit gaps (for the next physics kit brief): `ChargeGate`, `FlowDirection`, `EquivalentFlow`, the HSC circuit-diagram part (cell, lamp, wires, point labels; every later circuit video needs it); lesson-local acceptable for Revision 1.

## Codex asset brief

None for this video (no new plates). v10's brief covers `phys-y11-aa-cell-v1.png`.

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

- Revision 1 next steps: student learning review (trace from v10 at Year 11 entry; check that the gate and stopwatch make "rate" concrete; that the electron cloud gives an amp a sense of scale without a reading load; that the two gates settle "not used up" before the direction is introduced; that the history scene explains, rather than decorates, the backwards arrow; that the end tallies make "it still works" convincing; that the attempts give nothing away), then the Codex physics check and error check.
- The tiles crossing gates against stopwatches (1 to 3), the coulomb bursting into electrons (4), the matched gates and the energy slices draining at the lamp (8), the opposite arrows (9) and the equal tallies (11) carry the explanation; judge them at playback speed in the voiced preview.
