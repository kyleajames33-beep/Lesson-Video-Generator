# Year 11 Physics FA3 V22 (Physics 2025, Year 11, Focus Area 3): Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v22`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new in the teaching; the handoff bench reuses the bench supply (delivered), the digital multimeter (requested in `phys-y11-fa3-v15.md`) and v23's resistor board (requested in `phys-y11-fa3-v23.md`).

Narration 5,883 characters, 17 scenes, about 544 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-second video of the Year 11 Physics (2025) Focus Area 3 route and the last circuit-solving video: equivalent resistance (one resistor that draws the same current at the same voltage), shown by testing a parallel pair on its own; reducing a combination circuit one pure group at a time and redrawing; the supply current from the total resistance; working back out with V = IR to each component's voltage and current; why a series resistor takes more of the voltage than a lower-resistance parallel group; why the smaller branch takes the larger current; a second circuit where a series pair inside a branch must be combined first (inside out); two checks (voltages around a loop add to the supply's; currents into a junction equal currents out). Templates: `phys-y11-fa3-v14.md` (concept format, section list, calculations as task, equation and grouped givens), with `phys-y11-fa1-v22.md` behind it; FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v21.md` (Revision 1); FA3 root decisions 1 to 31 (all ohmic calculations use resistors, decision 30). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson21.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 reducing the circuit step by step with its true or false, card 2 solving a combination circuit with `we-1`, its figure description and the quick check, activity 1 the practical (v23), two truths one lie, card 3 why measurements differ (v23), last check, fill the blanks, Q1 to Q3 with model answers, retrieve and reflect). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 21 ("Collapse the parallel pockets first, then add what is left in a line."; not adopted as worded, see "Memory aid check" and site correction 1). Route entry: `phys-y11-fa3-v22` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Combination Circuits. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply combination circuits? Teach only the listed actions; the next video owns its separate question." Route next: "phys-y11-fa3-v23: How do measured branch currents and voltages compare with predictions?" (this design proposes "Why do real meter readings in a combination circuit come out close to, but not exactly on, the calculated values?" for v23's chip; v23 is designed in the same session and adopts it).

**Opening frame (v21's actual handoff, Revision 1, 3 Nov; read before this design was finished).** v21's scene 17 ends with its memory lines small at the top ("Series: same current, split voltage. Parallel: same voltage, split current. And every branch you add lowers the total resistance."); the HSC-symbol pair, 6.0 Ω and 3.0 Ω in parallel, on a 12 V supply, with a 4.0 Ω resistor R₁ on the main lead in series with the pair (site lesson 21 `we-1`); the main lead tinted "series" and the pair tinted "parallel"; a dashed box round the pair with a "? Ω" tag; chips "series, parallel, or both?" and "swap the pair for one resistor?"; chip "Next: Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?". This video opens on that frame. v21's last spoken line already adds the 4.0 Ω resistor and asks whether the pair can be swapped, so scene 1 does not repeat it. The "Next" chip names this video's route question (FA3 root decision 28), so no alignment is needed.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines; circuit diagrams in HSC symbols with conventional current a bold ink "I" arrow (FA3 root decision 17); reductions, readouts, staircase and working coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question and its diagram on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original questions; key-notes hold; Australian spelling; no em dashes; v14 (V = IR), v20 (series: one current, voltages add, resistances add) and v21 (parallel: one voltage, currents add, 1/R rule) recalled in a phrase each, never re-derived; v10 (volts as energy per coulomb) recalled in a phrase through v20's `VoltageStaircase`.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON:

- P25-FA3-G2-21 `ci463e276f`: "Solve problems involving voltage, current and resistance, in series, parallel and combination circuits"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v21's handoff (above); the hook (is the total just 4 + 6 + 3?); a 3 s prediction; equivalent resistance from the pair's own test on 12 V; collapse, redraw, total 6.0 Ω; supply current 2.0 A (site `we-1`); work back out: 8.0 V and 4.0 V (site `we-1` and its check); branch currents 0.67 A and 1.33 A, summing to 2.0 A; a 3 s prediction on a second circuit (which group first?); inside out: the series pair in a branch first; the second circuit solved and worked back to one component (3.0 V); two checks; the method and memory aid; two attempts. Stops at solving combination circuits on paper with ideal components. Not taught: measuring a real combination circuit and accounting for differences (v23); power in a combination circuit (v16's P = VI is not used); internal resistance; circuits that cannot be reduced to series and parallel groups (bridges; author note e).

## Decisions

- **Learner question (route placeholder rewritten; v21's proposal adopted, FA3 root decision 28).** Route placeholder: "How can I explain and apply combination circuits?" Root entered v21's proposal as one causal question: "Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?" "A mixed circuit" includes one whose inner group is a series pair inside a branch (7, 8); the same swap idea applies to any pure group, so the question covers it. The answer, built in order: the hook and prediction (1); the pair and one 2.0 Ω resistor draw the same current at the same voltage, so one can replace the other (2); the redrawn circuit is plain series (3); the supply current (4); working back out to voltages (5) and currents (6); a second circuit where the inner group is a series pair (7, 8); solving it back out (9); two checks (10); the method and memory aid (11).
- **Equivalent resistance given its meaning before the shortcut (owner quality bar).** **Black-box test** (new coded part): a dashed grey box draws round the pair; the pair alone on the 12 V supply shows branch readouts "2.0 A" and "4.0 A" and a main readout "6.0 A"; the box's contents cross-fade to one 2.0 Ω resistor and the main readout stays "6.0 A". "From outside, you can't tell them apart" is spoken. This is why the swap is allowed, so it comes before any reduction.
- **Why adding all three is wrong (site misconception 1, in the hook answer).** Spoken in cause form: adding treats the pair as if the current had to go through both one after the other, but it splits and each charge passes through only one branch. A chip "4 + 6 + 3 = 13 Ω" takes a grey scribble cross in 2.
- **Reduction shown as a morph (new kit part `CircuitReduce`).** The chosen group outlines in grey, collapses into one resistor symbol with its equivalent value, and the leads redraw so the remaining circuit is visibly simpler; the old group stays as a faint ghost for one second, then fades. Each reduction is its own cue.
- **Working back out shown on the original circuit.** After the supply current is found, the board returns to the full circuit (the ghosts restore) and the values travel outward: the main "I" arrow labelled "2.0 A"; v20's **`VoltageStaircase`** reused over the loop (a 12 V climb across the supply, an 8.0 V step down across the 4.0 Ω resistor, a 4.0 V step down across the pair, flat along leads); then **`CurrentSplit`** (new: the bold "I" arrow divides at the junction into two arrows whose thickness is proportional to their currents, labelled "0.67 A" and "1.33 A", rejoining as "2.0 A").
- **Why the series resistor takes more voltage (5).** Same current through both; the 4.0 Ω resistor has twice the resistance of the 2.0 Ω equivalent, so each coulomb gives up twice the energy there (v10's volts as energy per coulomb, in a phrase). The staircase's two steps (8.0 and 4.0 V) carry it.
- **Inside out, not "parallel first" (site correction 1).** The site's hook and memory aid say to collapse parallel groups first. That works for `we-1`, but not when a branch holds two resistors in series. Scene 7 asks the question as a prediction; scene 8 answers with the reason (the parallel rule needs one resistance per branch). The memory aid is written to fit both circuits.
- **Second circuit (original, chosen for whole-number working).** 9.0 V supply; R₁ = 3.0 Ω in series with a parallel group: branch A a single 6.0 Ω; branch B 2.0 Ω and 4.0 Ω in series. Branch B 6.0 Ω; group 3.0 Ω ("two equal branches give half of one branch", one sentence); total 6.0 Ω; supply current 1.5 A; V₁ = 4.5 V; group 4.5 V; branch B 0.75 A; V across the 4.0 Ω = 3.0 V. Branch A's current (0.75 A) appears in the junction check (10).
- **Two checks (10).** Around the loop through branch B: 4.5 + 1.5 + 3.0 = 9.0 V. At the junction: 0.75 + 0.75 = 1.5 A. These are v20's and v21's rules used as checks; the names "Kirchhoff's laws" are not used (not in the point; author note d).
- **Worked example 1 (site `we-1`, numbers unchanged):** 12 V; R₁ = 4.0 Ω; 6.0 Ω and 3.0 Ω in parallel: R_p = 2.0 Ω, R_T = 6.0 Ω, I = 2.0 A, V₁ = 8.0 V, V_p = 4.0 V (both methods). Branch currents (site figure description: "branch currents I₂ and I₃ add to I") added: 0.67 A and 1.33 A. **Worked example 2:** the second circuit above (original). The site's quick check (two 6.0 Ω in parallel with 5.0 Ω in series: 8.0 Ω) is not used separately; its "two equal branches give half" idea is used in 8.
- **Attempts (original, HSC style).** (A1, unknown resistor; site Q2 type, new numbers) "A 12 Ω resistor is connected in parallel with a 4.0 Ω resistor. This pair is connected in series with a resistor R. The total resistance of the circuit is 10 Ω. (a) Determine the value of R. (b) The circuit is connected to a 20 V supply. Calculate the current through R. (c) Calculate the voltage across the parallel pair. (4 marks)" A circuit diagram is printed on the card. Answer: R_p = 3.0 Ω, R = 7.0 Ω; 2.0 A (R is in the main path); 6.0 V. Crossed: "R = 10 − (12 + 4) = −6 Ω". (A2, series pair in a branch) "A 12 V battery is connected across two branches in parallel. Branch A contains a 4.0 Ω resistor and an 8.0 Ω resistor in series. Branch B contains a 6.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current supplied by the battery. (c) Calculate the voltage across the 8.0 Ω resistor. (4 marks)" Diagram printed. Answer: 4.0 Ω; 3.0 A; 8.0 V. Crossed: "V = 3.0 A × 8.0 Ω = 24 V".
- **Mistake scene:** none separate. "Add every resistance" (2; site misconception 1); "always collapse parallel first" (7, 8; site correction 1); "every resistor carries the supply current" (A2 crossed); "subtract the parallel resistors as if they were in series" (A1 crossed).
- **Memory aid:** "Shrink it in, then share it out." (see "Memory aid check").
- **Handoff (route next; proposal for v23's question).** Board change: a bench with the painted bench supply (dial at "6.0 V"), three painted resistor boards (`phys-y11-resistor-board-v1.png`, coded value chips "10 Ω", "20 Ω", "20 Ω") laid out as a 10 Ω resistor in series with a 20 Ω pair, two painted digital multimeters with "? A" and "? V"; beside them its HSC diagram with "calculated" chips "R_T = ?", "I = ?"; chips "will the meters agree?" and "if not, why not?"; then "Next: Why do real meter readings in a combination circuit come out close to, but not exactly on, the calculated values?". This is the frame v23 opens on. No predicted value is shown (v23 calculates them as its first step).
- **Site sources used:** intro (break the network into chunks: 3, 11); hook (the parallel pair feeding a single resistor: 1, 3); warm-up (which part first: 1, 7); intentions (Know 1, 2: 2, 3; Understand 1, 2: 3, 8, 11; Can Do 1, 2: 4 to 9, A1, A2; Know 3, Understand 3, Can Do 3: v23); key terms (combination circuit 1; equivalent resistance 2; circuit reduction 3, 11; systematic error: v23); misconception 1 (2); misconception 2 (v23); card 1 and its true or false (3, 11); card 2, `we-1` and its check (3 to 5); figure description (6); quick check (the "half of one branch" idea in 8); two truths one lie (D, "add all the resistances": 2); Q1 (attempt structure); Q2 (A1 structure, new numbers); retrieve and reflect (1, 8; with correction 1).
- **Site corrections (quoted from site lesson 21, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Memory hook (lesson 21): "Collapse the parallel pockets first, then add what is left in a line." and the reflection "simplify the parallel pair first into one equivalent resistor ... you reduce the inner cluster before combining the outer series path". If a branch of a parallel group contains resistors in series, those must be added first; "parallel first" then gives a wrong answer. The reflection's "inner cluster" is right; the hook is not general. Suggest: "Shrink the innermost pure group first (series or parallel), redraw, repeat; then work back out with V = IR."
  - Checked and correct: card 1; `we-1` (2.0 Ω, 6.0 Ω, 2.0 A, 8.0 V, 4.0 V); quick check (B, 8.0 Ω); two truths one lie (D); Q1 (2.0 Ω, 5.0 Ω, 2.0 A); Q2 (6.0 Ω, 2.0 A; the 12 V and 4.0 V check); misconceptions 1 and 2.
- **Cause chain taught, in order:** (1) a mixed circuit cannot be added straight through, because the current splits in the parallel part (1, 2); (2) a group can be swapped for one resistor that draws the same current at the same voltage (2); (3) after the swap the circuit is plain series, so the total adds (3); (4) the total gives the supply current, which is the same along the series path (4); (5) in series, the larger resistance takes the larger share of the voltage (5); (6) in parallel, the same voltage pushes more current through the smaller resistance, and the branch currents add back to the main current (6); (7) the parallel rule needs one resistance per branch, so a series pair inside a branch is combined first: inside out (7, 8); (8) work back out with V = IR (9); (9) loop and junction checks catch errors (10); (10) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v14 (V = IR and its rearrangements), v18 (series and parallel connections in HSC diagrams), v20 (series: the same current everywhere; V and R add), v21 (parallel: the same voltage across each branch; branch currents add; 1/R_T = Σ1/R; adding a branch lowers R_T), each recalled in a phrase; v10 (volts as energy per coulomb) through the staircase; Stage 5 Mathematics (fractions with a common denominator).
- **Learner-visible vocabulary (plain meaning at first use):** combination circuit (a circuit with both series and parallel parts, 1); equivalent resistance (one resistance that draws the same current at the same voltage as the group it replaces, 2); junction (a point where the current splits or joins, 6); "pure group" (resistors that are all in series with each other, or all in parallel, 11).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v14's HSC-symbol **`CircuitDiagram`** with v19's ammeter symbol (reused); **`LoopFlow`** (the single charge-dot part, extended to split at junctions; FA3 root decision 31; used once, in 2); **black-box test** (new: a dashed grey box round a group whose contents cross-fade to one equivalent resistor while the outside readout holds); **`CircuitReduce`** (new: outline, collapse, redraw, one-second ghost; reversible for working back out); v20's **`VoltageStaircase`** (reused) and **resistor bars** (reused in 3, the 4.0 Ω and 2.0 Ω bars joining into 6.0 Ω); **`CurrentSplit`** (new: bold "I" arrows whose thickness is proportional to current, dividing and rejoining at junctions with readouts; an arrow layer, not a second charge-dot part, so it sits alongside `LoopFlow`); calculation layout (task strip, equation strip, givens group); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a printed circuit diagram; `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v21: conventional current a bold ink "I" arrow; circuit symbols and readings ink; the reduction outline and black box grey dashed; equivalent resistors ink with a pale grey fill so they read as "stand-in"; the staircase hollow gold (FA2 root decision 3); resistor bars grey; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the circuit in the left half (large enough for two reductions); the working, task, equation and givens in the right half; readouts beside each component.
- **No human figures.** None.
- **Author notes (not learner copy):**
  (a) All components ideal: zero-resistance leads, ideal supply, no internal resistance (v10's note). v23 measures the differences.
  (b) Branch currents in 6: 4.0/6.0 = 0.667 A and 4.0/3.0 = 1.333 A, said "about point six seven" and "about one point three three"; shown to two decimal places with "≈".
  (c) "Two equal branches give half of one branch": R_p = R/n for n equal branches; spoken once for two.
  (d) The two checks are Kirchhoff's voltage and current laws; the names are not used because the point does not need them and v20 and v21 taught the ideas without them.
  (e) Networks that cannot be reduced to series and parallel groups (a Wheatstone bridge, delta networks) need methods beyond Year 11. Not mentioned.
  (f) Pronunciation: "equivalent" (ee-KWIV-a-lent).

Main question: *A four ohm resistor sits in series with a parallel pair. Is the total just all three added up? Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?*
Entry knowledge (v14 V = IR; v18 connections; v20 series rules; v21 parallel rules).
Stops after: equivalent resistance; reduction inside out; supply current; working back out to each component's voltage and current; loop and junction checks. No measurement, no power, no internal resistance.
Handoff: v23, the combination circuit investigation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v21.

### 1. hook (series and parallel together)
> Here's where we stopped: a four ohm resistor in series with the six and three ohm pair, on a twelve volt supply. A circuit like this, with series and parallel parts, is called a combination circuit. So what's its total resistance? Is it four plus six plus three, thirteen ohms? Somewhere between four and thirteen? Or less than **four**?

Visual: opens on v21's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Combination circuits: shrink, then share"; the memory lines fade; the chips "series, parallel, or both?" and "swap the pair for one resistor?" slide to the right edge. On "four ohm resistor" R₁ pulses; on "twelve volt supply" the "12 V" label pulses. On "series and parallel parts" the "series" and "parallel" tints pulse in turn (gloss "combination circuit: both series and parallel parts"). On "four" chips "13 Ω?", "between 4 and 13 Ω?", "less than 4 Ω?" and a 3-second countdown ring. The dashed box and its "? Ω" tag stay round the pair.

### 2. one resistor that acts the same
> It's between them. Adding all three treats the pair as if the current had to go through both, one after the other. But it splits, and each charge passes through only one branch. So test the pair on its own, on twelve volts. The six ohm branch takes two amps, the three ohm branch takes four, so the pair draws six amps. A single two ohm resistor on twelve volts also draws six amps. From outside, you can't tell them apart. So we can swap the pair for one two ohm resistor. That's its equivalent resistance: one resistance that draws the same current at the same **voltage**.

Visual: camera continue. On "between them" chip "between 4 and 13 Ω?" glows; a chip "4 + 6 + 3 = 13 Ω" takes a grey scribble cross, and "less than 4 Ω?" fades. On "splits" the shared `LoopFlow` charge dots (FA3 root decision 31) divide at the junction, each dot taking one branch. On "test the pair" board change to the pair alone across a 12 V supply; black-box dashed outline round the pair; branch readouts "2.0 A" and "4.0 A" write in, and the main readout "6.0 A". On "single two ohm resistor" the box's contents cross-fade to one resistor "2.0 Ω"; the main readout stays "6.0 A" and pulses. On "can't tell them apart" the contents cross-fade back and forth once. On "voltage" chip "equivalent resistance: one resistance that draws the same current at the same voltage"; grey row "pair = 2.0 Ω (last video)".

### 3. shrink: redraw as series
> Now redraw the circuit with that swap. The pair becomes one two ohm resistor, in series with the four ohm resistor. And series is easy: one path, so the resistances add. Four plus two is six ohms. The whole circuit acts like a single six ohm resistor. That's less than thirteen, because the parallel part gives the current two ways **through**.

Visual: board change back to the full circuit. `CircuitReduce`: the pair outlines, collapses into one "2.0 Ω" resistor (pale grey fill), leads redraw; a one-second ghost of the pair, then fades. On "resistances add" v20's resistor bars: a "4.0 Ω" bar and a "2.0 Ω" bar join end to end into "6.0 Ω". Right column row: "R_T = 4.0 + 2.0 = 6.0 Ω", boxed. On "single six ohm resistor" a second `CircuitReduce`: the two in series collapse into one "6.0 Ω" across the supply. On "through" a grey row "13 Ω would need one path through all three".

### 4. the supply current
> Task: find the current from the supply. The equation is I equals V over R. The givens: V is twelve volts, and the total resistance is six ohms. Twelve over six is two point oh amps. That two amps leaves the supply, flows through the four ohm resistor and arrives at the pair, because along a series path the current is the same **everywhere**.

Visual: camera continue; the calculation layout in the right column. Task strip: "Find the supply current" (grey tag "site worked example"). Equation strip: "I = V/R_T". Givens group: "V = 12 V"; "R_T = 6.0 Ω". Row: "I = 12 ÷ 6.0"; boxed "I = 2.0 A". On "leaves the supply" the circuit un-collapses step by step (ghosts restore) to the 4.0 Ω resistor and the pair; the bold ink "I" arrow labelled "2.0 A" travels from the supply through the 4.0 Ω resistor to the junction.

### 5. share it out: the voltages
> Now we work back out. The four ohm resistor carries two amps, so its voltage is I R: two times four, eight volts. The supply gives twelve volts, so the pair gets what's left: four volts. Check it another way: two amps through the pair's two ohms is also four volts. The four ohm resistor takes twice the voltage of the pair. The same current goes through both, but it has twice the resistance, so each coulomb gives up twice as much energy **there**.

Visual: camera continue; working clears to the top line "I = 2.0 A". Rows, one per cue: "V₁ = IR₁ = 2.0 × 4.0 = 8.0 V"; "V_p = 12 − 8.0 = 4.0 V"; on "another way" "check: V_p = IR_p = 2.0 × 2.0 = 4.0 V ✓". v20's `VoltageStaircase` draws over the loop: a 12 V climb at the supply, an "8.0 V" step down across the 4.0 Ω resistor, a "4.0 V" step down across the pair, flat along the leads. On "twice the resistance" the 8.0 V step and the 4.0 V step pulse in turn beside small grey bars "4.0 Ω" and "2.0 Ω"; grey row "same I: twice the R, twice the V".

### 6. share it out: the branch currents
> Both branches of the pair have the same four volts across them. So the six ohm branch carries four over six, about point six seven amps, and the three ohm branch carries four over three, about one point three three amps. Add them, and you get two amps, the same current that arrived at the junction. The smaller resistance takes the bigger share, because the same voltage pushes more current through an easier **path**.

Visual: camera continue. On "same four volts" both branches label "4.0 V". Rows: "I₂ = V_p/R₂ = 4.0 ÷ 6.0 ≈ 0.67 A"; "I₃ = V_p/R₃ = 4.0 ÷ 3.0 ≈ 1.33 A". `CurrentSplit`: the "2.0 A" arrow divides at the junction (gloss "junction: where the current splits or joins") into a thin "0.67 A" arrow and a thicker "1.33 A" arrow, which rejoin as "2.0 A". On "Add them" row "0.67 + 1.33 = 2.0 A ✓". On "easier path" the thicker arrow pulses.

### 7. prediction: what goes first?
> Now a trickier one. A nine volt supply, a three ohm resistor, then two branches. One branch is a single six ohm resistor. The other has a two ohm and a four ohm resistor in series. Which do you combine first: the two branches in parallel, or the two resistors inside that **branch**?

Visual: board change: the second circuit draws in HSC symbols as spoken: "9.0 V" supply; "3.0 Ω" in the main lead; branch A "6.0 Ω"; branch B "2.0 Ω" then "4.0 Ω" in series. On "Which do you combine first" chips "the two branches?" (outline round both branches) and "the two inside the branch?" (outline round 2.0 Ω and 4.0 Ω) and a 3-second countdown ring.

### 8. inside out
> The two inside the branch. The parallel rule needs one resistance for each branch, and this branch has two, one after the other. So add them first: two plus four is six ohms. Now there are two six ohm branches in parallel. One over R is one sixth plus one sixth, which is one third, so R is three ohms. Two equal branches act like half of one. Then add the three ohm resistor in series: three plus three, six ohms in **total**.

Visual: camera continue. Chip "the two inside the branch?" glows; "the two branches?" takes a grey scribble cross. On "one resistance for each branch" grey tag "parallel rule: one R per branch". `CircuitReduce` 1: the 2.0 Ω and 4.0 Ω collapse into "6.0 Ω"; row "R_B = 2.0 + 4.0 = 6.0 Ω". `CircuitReduce` 2: the two 6.0 Ω branches collapse into "3.0 Ω"; rows "1/R_p = 1/6.0 + 1/6.0 = 2/6.0" and "R_p = 3.0 Ω"; on "half of one" grey tag "two equal branches: half of one". `CircuitReduce` 3: "3.0 Ω" and "3.0 Ω" collapse into "6.0 Ω"; row "R_T = 3.0 + 3.0 = 6.0 Ω", boxed. Each reduction's ghost lingers one second.

### 9. share it out: one resistor deep inside
> Task: find the voltage across the four ohm resistor. First the supply current: nine volts over six ohms is one point five amps. The three ohm resistor takes one point five times three, four point five volts. That leaves four point five volts across both branches. The branch with the four ohm resistor has six ohms, so it carries four point five over six, point seven five amps. And the four ohm resistor takes point seven five times four: three point oh **volts**.

Visual: camera continue; the circuit un-collapses to the original, the reductions listed small at the top of the right column. Task strip: "Find the voltage across the 4.0 Ω resistor". Equation strip: "V = IR, working back out". Givens group: "V = 9.0 V"; "R_T = 6.0 Ω (just found)". Rows, one per cue: "I = 9.0 ÷ 6.0 = 1.5 A"; "V₁ = 1.5 × 3.0 = 4.5 V"; "V_p = 9.0 − 4.5 = 4.5 V"; "I_B = 4.5 ÷ 6.0 = 0.75 A"; "V₄ = 0.75 × 4.0 = 3.0 V", boxed. The `VoltageStaircase` and `CurrentSplit` build on the circuit with each row: "1.5 A" main arrow; "4.5 V" step; branch B arrow "0.75 A"; "3.0 V" step at the 4.0 Ω resistor.

### 10. two checks
> Two checks catch most mistakes. Around any loop from the supply, the voltages add up to the supply's voltage: four point five, plus one point five across the two ohm resistor, plus three, makes nine. And at a junction, the current in equals the current out: point seven five in each branch, one point five altogether. If a check fails, look for a step that used the wrong current or the wrong **voltage**.

Visual: camera continue. On "Around any loop" a grey trace runs round the loop through branch B; the staircase steps label "4.5 V", "1.5 V", "3.0 V"; row "4.5 + 1.5 + 3.0 = 9.0 V ✓". On "at a junction" the junction pulses; branch A's arrow labels "0.75 A"; row "0.75 + 0.75 = 1.5 A ✓". Grey tags "loop check (series rule)" and "junction check (parallel rule)".

### 11. the method and the memory aid
> So here's the method. Find a group that's purely series or purely parallel, swap it for one resistor, and redraw. Repeat until one resistance is left. Then find the supply current, and work back out with V equals I R. To remember it: shrink it in, then share it **out**.

Visual: board change: the two circuits small side by side, each with its reduction steps as tiny thumbnails. A method panel builds as spoken: "1. find a pure group (all series or all parallel)"; "2. swap it for its equivalent resistor; redraw"; "3. repeat until one R_T"; "4. I = V/R_T"; "5. work back out with V = IR; check loops and junctions". On "shrink it in" the thumbnails collapse in turn; on "share it out" values flow back out. The handwritten line writes large: "Shrink it in, then share it out." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve ohm resistor is in parallel with a four ohm resistor, and this pair is in series with a resistor R. The total resistance is ten ohms. Find R. On a twenty volt supply, find the current through R, and the voltage across the pair. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a printed HSC-symbol circuit (12 Ω and 4.0 Ω in parallel, in series with a box labelled "R", a 20 V supply): "A 12 Ω resistor is connected in parallel with a 4.0 Ω resistor. This pair is connected in series with a resistor R. The total resistance of the circuit is 10 Ω. (a) Determine the value of R. (b) The circuit is connected to a 20 V supply. Calculate the current through R. (c) Calculate the voltage across the parallel pair. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The pair first: one over twelve plus one over four is a third, so it's three ohms. Then R is ten minus three, seven **ohms**. R is in the main path, so it carries the whole current: twenty over ten, two amps. The pair takes two times three, six **volts**. Subtracting all of twelve and four gives a negative resistance, so shrink the pair **first**.

Visual: card shrinks to the top; "parallel", "series", "10 Ω" and "20 V" underlined. Rows: "(a) 1/R_p = 1/12 + 1/4.0 = 4/12, R_p = 3.0 Ω; R = 10 − 3.0 = 7.0 Ω", boxed; "(b) I = 20 ÷ 10 = 2.0 A (R is in the main path)", boxed; "(c) V_p = 2.0 × 3.0 = 6.0 V", boxed. On "negative resistance" a chip "R = 10 − (12 + 4) = −6 Ω" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A twelve volt battery is connected across two branches in parallel. Branch A has a four ohm and an eight ohm resistor in series. Branch B has a six ohm resistor. Find the total resistance, the current from the battery, and the voltage across the eight ohm resistor. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a printed HSC-symbol circuit (branch A: 4.0 Ω and 8.0 Ω in series; branch B: 6.0 Ω; a 12 V battery): "A 12 V battery is connected across two branches in parallel. Branch A contains a 4.0 Ω resistor and an 8.0 Ω resistor in series. Branch B contains a 6.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current supplied by the battery. (c) Calculate the voltage across the 8.0 Ω resistor. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Inside out: branch A is twelve ohms. Twelve and six in parallel give four **ohms**, so the battery supplies twelve over four, three **amps**. But branch A carries only its own current: twelve volts over twelve ohms, one amp. So the eight ohm resistor takes eight volts. Three amps times eight ohms gives twenty-four volts, more than the battery. That's the supply current in a **branch**.

Visual: card shrinks to the top; "branches in parallel", "in series" and "8.0 Ω" underlined. Rows: "(a) R_A = 4.0 + 8.0 = 12 Ω; 1/R_T = 1/12 + 1/6.0 = 3/12, R_T = 4.0 Ω", boxed; "(b) I = 12 ÷ 4.0 = 3.0 A", boxed; "(c) I_A = 12 ÷ 12 = 1.0 A; V₈ = 1.0 × 8.0 = 8.0 V", boxed. On "twenty-four volts" a chip "V = 3.0 A × 8.0 Ω = 24 V" fades in and takes a grey scribble cross. Hold about 1 second.

### 16. handoff
> So any mix of series and parallel can be shrunk to one resistance, then shared back out. But all of that assumes perfect resistors and perfect meters. Build a real one and measure it. Will the meters agree with the calculation? And if they don't, **why** not?

Visual: board change: the memory line small at the top. A bench: the painted bench supply (`phys-y11-low-voltage-supply-v1.png`, dial at "6.0 V"), three painted resistor boards (`phys-y11-resistor-board-v1.png`) with coded value chips "10 Ω", "20 Ω", "20 Ω", laid out as the 10 Ω in series with the 20 Ω pair, coded leads, and two painted digital multimeters (`phys-y11-digital-multimeter-v1.png`) showing "? A" and "? V". Beside them the HSC diagram with chips "calculated: R_T = ?" and "I = ?". On "perfect" a grey tag "ideal: no lead resistance, exact resistor values". On "agree" chip "will the meters agree?"; on "why" chip "if not, why not?". Then the chip "Next: Why do real meter readings in a combination circuit come out close to, but not exactly on, the calculated values?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Equivalent resistance: one resistance that draws the same current at the same voltage as the group it replaces.
2. Shrink it in: find a pure group (all series or all parallel), replace it with its equivalent resistance, redraw, and repeat until one R_T is left. A series pair inside a branch is added first.
3. Supply current: I = V/R_T. Every resistor in the main path carries this current.
4. Share it out with V = IR: series parts share the voltage (more R, more V); parallel branches share the same voltage, and the branch currents add to the main current (less R, more I).
5. Check: voltages around a loop add to the supply voltage; currents into a junction equal currents out.

Memory aid (large, on the notes screen): *Shrink it in, then share it out.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the total isn't 13 Ω: the current splits, so each charge passes through one branch, not both (2). Why a group can be replaced: the equivalent draws the same current at the same voltage, so the rest of the circuit can't tell the difference (2). Why the total is less than 13 Ω: the parallel part gives two ways through (3). Why the supply current passes through the 4.0 Ω resistor: it is on the series path (4). Why the series resistor takes 8.0 V and the pair 4.0 V: same current, twice the resistance, twice the energy per coulomb (5). Why the 3.0 Ω branch takes more current: the same voltage pushes more current through less resistance (6). Why the series pair in a branch goes first: the parallel rule needs one resistance per branch (8). Why the checks work: the series and parallel rules hold everywhere (10).
- **Misconceptions addressed:** add every resistance (2; site misconception 1); always collapse parallel first (7, 8; site correction 1); every resistor carries the supply current (A2 crossed); subtract the parallel resistors directly (A1 crossed).
- **One idea at a time:** equivalence (2), reduction (3), supply current (4), voltages back out (5), currents back out (6), inside out (7, 8), working back to one component (9), checks (10), method (11).
- **Video makes it easier:** the student sees a black box's contents swap with no change in the outside readout (2), groups collapse and redraw (3, 8), the energy staircase step down by 8.0 V and 4.0 V (5), the current arrow divide in proportion at the junction and rejoin (6), the values flow back out into the original circuit (9), and a loop trace and a junction add up (10).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition and the diagram on the card, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 28 s.
- **Avoided double teaching:** v20's series rules and v21's parallel rules used, not re-derived (recalled in a phrase in 3, 6, 8); v14's V = IR used without restating its meaning; v10's energy per coulomb only through the staircase (5).
- **Syllabus coverage:** `ci463e276f`: problems involving voltage, current and resistance solved in combination circuits (2 to 10, A1, A2), using series (3, 4, 5) and parallel (2, 6, 8) relationships inside them; series-only and parallel-only problems are v20's and v21's.
- **Out of scope by design:** measurement and variation (v23); power; internal resistance; non-reducible networks.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A 12 Ω resistor is connected in parallel with a 4.0 Ω resistor. This pair is connected in series with a resistor R. The total resistance of the circuit is 10 Ω. (a) Determine the value of R. (b) The circuit is connected to a 20 V supply. Calculate the current through R. (c) Calculate the voltage across the parallel pair." (Circuit diagram printed.)
Model answer: (a) 1/R_p = 1/12 + 1/4.0 = 1/12 + 3/12 = 4/12, so R_p = 3.0 Ω. Series resistances add, so R_T = R + R_p and R = 10 − 3.0 = 7.0 Ω. (b) R is in the main path, so it carries the supply current: I = V/R_T = 20 ÷ 10 = 2.0 A. (c) V_p = IR_p = 2.0 × 3.0 = 6.0 V (check: V_R = 2.0 × 7.0 = 14 V; 14 + 6.0 = 20 V). Classic mistake (crossed): "R = 10 − (12 + 4) = −6 Ω".

**Attempt 2 (scene 14; original wording, HSC style, 4 marks suggested).** "A 12 V battery is connected across two branches in parallel. Branch A contains a 4.0 Ω resistor and an 8.0 Ω resistor in series. Branch B contains a 6.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current supplied by the battery. (c) Calculate the voltage across the 8.0 Ω resistor." (Circuit diagram printed.)
Model answer: (a) Branch A: 4.0 + 8.0 = 12 Ω. In parallel with 6.0 Ω: 1/R_T = 1/12 + 1/6.0 = 3/12, so R_T = 4.0 Ω. (b) I = V/R_T = 12 ÷ 4.0 = 3.0 A. (c) Branch A has the full 12 V across it, so I_A = 12 ÷ 12 = 1.0 A, and V₈ = I_A × 8.0 = 8.0 V (and 4.0 V across the 4.0 Ω resistor; 8.0 + 4.0 = 12 V). Classic mistake (crossed): "V = 3.0 A × 8.0 Ω = 24 V".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Pair (v21) | 6.0 Ω and 3.0 Ω; 2.0 Ω; on 12 V: 2.0 A, 4.0 A, 6.0 A | 1, 2 |
| Hook sum (crossed) | 4 + 6 + 3 = 13 Ω | 1, 2, 3 |
| `we-1` (site) | 12 V; R₁ = 4.0 Ω; R_p = 2.0 Ω; R_T = 6.0 Ω; I = 2.0 A; V₁ = 8.0 V; V_p = 4.0 V | 3 to 5 |
| `we-1` branches (added) | 4.0 ÷ 6.0 ≈ 0.67 A; 4.0 ÷ 3.0 ≈ 1.33 A; sum 2.0 A | 6 |
| Second circuit | 9.0 V; 3.0 Ω; branch A 6.0 Ω; branch B 2.0 + 4.0 = 6.0 Ω; R_p = 3.0 Ω; R_T = 6.0 Ω; I = 1.5 A; V₁ = 4.5 V; V_p = 4.5 V; I_A = I_B = 0.75 A; V across 2.0 Ω = 1.5 V; V across 4.0 Ω = 3.0 V | 7 to 10 |
| A1 | 12 Ω ∥ 4.0 Ω = 3.0 Ω; R_T = 10 Ω; R = 7.0 Ω; 20 V; I = 2.0 A; V_p = 6.0 V; V_R = 14 V; crossed −6 Ω | 12, 13 |
| A2 | branch A 12 Ω; 12 ∥ 6.0 = 4.0 Ω; 12 V; I = 3.0 A; I_A = 1.0 A; V₈ = 8.0 V; V₄ = 4.0 V; crossed 24 V | 14, 15 |
| Handoff (v23) | 6.0 V; 10 Ω, 20 Ω, 20 Ω (no values calculated here) | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 1/(1/6 + 1/3) = 2.0; 4.0 + 2.0 = 6.0; 12 ÷ 6.0 = 2.0; 2.0 × 4.0 = 8.0; 12 − 8.0 = 4.0; 2.0 × 2.0 = 4.0; 12 ÷ 6 + 12 ÷ 3 = 6.0; 12 ÷ 2.0 = 6.0.
- 4.0 ÷ 6.0 = 0.667; 4.0 ÷ 3.0 = 1.333; sum 2.0.
- 2.0 + 4.0 = 6.0; 1/(1/6 + 1/6) = 3.0; 3.0 + 3.0 = 6.0; 9.0 ÷ 6.0 = 1.5; 1.5 × 3.0 = 4.5; 9.0 − 4.5 = 4.5; 4.5 ÷ 6.0 = 0.75; 0.75 × 2.0 = 1.5; 0.75 × 4.0 = 3.0; 4.5 + 1.5 + 3.0 = 9.0; 0.75 + 0.75 = 1.5; 3 + 6 + 2 + 4 = 15 (not shown).
- A1: 1/(1/12 + 1/4) = 3.0; 10 − 3.0 = 7.0; 20 ÷ 10 = 2.0; 2.0 × 3.0 = 6.0; 2.0 × 7.0 = 14; 10 − 16 = −6.
- A2: 4.0 + 8.0 = 12; 1/(1/12 + 1/6) = 4.0; 12 ÷ 4.0 = 3.0; 12 ÷ 12 = 1.0; 1.0 × 8.0 = 8.0; 1.0 × 4.0 = 4.0; 3.0 × 8.0 = 24.
- Site quick check (not used): 1/(1/6 + 1/6) + 5.0 = 8.0.

## Memory aid check

- **"Shrink it in, then share it out."** Written for this lesson (replaces the site's lesson 21 hook "Collapse the parallel pockets first, then add what is left in a line", which fails when a branch holds a series pair; site correction 1). Meaning, as said in scene 11: replace one pure group at a time, working from the innermost group outward, until one resistance is left ("shrink it in"); then find the supply current and use V = IR to give each part its voltage and current ("share it out"). Assumptions checked: "in" means the innermost pure group, which may be series or parallel (both circuits in the video show it); "share" uses the series rule (same current, voltages add) and the parallel rule (same voltage, currents add), both shown in 5, 6 and 9; it applies only to circuits that reduce to series and parallel groups (all Year 11 circuits; author note e). Introduced after both circuits are solved (11).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,883 characters** (5,899 joined), 17 scenes. Characters per scene (1 to 17): 333, 571, 340, 339, 446, 415, 279, 423, 461, 401, 266, 269, 337, 297, 376, 255, 75. At 13.3 characters per second the speech is about 442 s; add about 16 s of holds and settling (the black-box swap in 2, the three reductions in 3 and 8, the staircase in 5, the current split in 6, the values flowing back out in 9), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 544 s**, inside the owner's 5 to 10 minute target. Feedback 1 is about 25 s and feedback 2 about 28 s. If the voiced preview runs long, the first cut is scene 10's last sentence (about 85 characters), then scene 3's last sentence (about 75 characters; its grey row stays on screen).

## Scene list and build ids

Lesson key `p-y11-fa3-v22` (route phys-y11-fa3-v22). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v22` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v22` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, equivalent-resistance, shrink-redraw, supply-current, share-voltages, share-currents, prediction-which-first, inside-out, share-deep, two-checks, method-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction-which-first carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v21's last frame continues into scene 1 (camera continue: the pair, supply and new 4.0 Ω resistor carry over); 1 to 2 camera continue, then a board change inside 2 to the pair alone; 2 to 3 board change back to the full circuit; 3 to 4 to 5 to 6 camera continue; 6 to 7 board change to the second circuit; 7 to 8 to 9 to 10 camera continue; 10 to 11 board change; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction-which-first (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v22-learning-review.md`, `science_check` = `checks/p-y11-fa3-v22-physics-check.md`.

## Assets

Checked first (3 Nov): `public/assets/physics/` holds the bench supply (`phys-y11-low-voltage-supply-v1.png`) and FA1 plates; no meter, resistor or lamp plate is delivered. Scenes 1 to 15 are HSC-symbol circuits (root decision 17), which is how exam questions show combination circuits, so no plate is needed there.

Reused by name (handoff, 16 only; uniform scaling, never stretched): `phys-y11-low-voltage-supply-v1.png` (delivered); `phys-y11-digital-multimeter-v1.png` (requested in `phys-y11-fa3-v15.md`); `phys-y11-resistor-board-v1.png` (requested in `phys-y11-fa3-v23.md`, used three times). If the resistor board or multimeter is not delivered at build, the handoff bench uses HSC symbols in the same places (as v14's root call).

New plates: none.

Coded: circuits, current arrows, black box, reductions, ghosts, resistor bars, staircase, current split, readouts, working, the method panel.

Kit gaps (for the next physics kit brief): **black-box test**, **`CircuitReduce`** (reversible), **`CurrentSplit`**; reused: v14's `CircuitDiagram`, v19's ammeter symbol, `LoopFlow`, v20's `VoltageStaircase` and resistor bars. v23 reuses `CircuitReduce` and `CurrentSplit`.

## Codex asset brief (Year 11 Physics FA3 v22)

No plates requested. Kit notes only: `CircuitReduce` must keep the redrawn circuit's leads straight and the reduced resistor at the group's centre; the reverse (un-collapse) restores the exact original layout. `CurrentSplit` arrow widths are proportional to current (0.67 A and 1.33 A visibly 1 : 2).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: an equivalent resistance draws the same current at the same voltage as the group it replaces; resistances in series add; parallel resistances combine by 1/R_T = Σ1/R and two equal branches give half of one; the series path carries the supply current; series parts share the voltage in proportion to resistance; each parallel branch has the same voltage and the branch currents add to the main current; a series pair inside a branch must be added before the branches are combined; voltages around a loop add to the supply voltage and currents into a junction equal currents out (ideal components).
3. Confirm no measurement, power, internal resistance or non-reducible network appears.
4. Confirm both attempt questions are original in wording, carry every condition and a diagram, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v21.md` scene 17, and the handoff matches `phys-y11-fa3-v23.md`'s opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site correction 1 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Combination Circuits: Series and Parallel Together | Year 11 Physics

(Title length: 67 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson21.sa.html

A resistor in series with a parallel pair: is the total just all three added up? Find out why any group of resistors can be swapped for one equivalent resistor, shrink a mixed circuit step by step from the inside out, find the supply current, then share it back out to every voltage and current with V = IR. Two quick checks catch most mistakes. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving voltage, current and resistance, in series, parallel and combination circuits" (ci463e276f)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Parallel circuits (previous video). Next: The combination circuit investigation.

#Year11Physics #Physics #Circuits #HSCScience

## Open decisions

- **1. Opening frame.** Resolved: this video opens on v21's final handoff (committed, 3 Nov), and its route question is v21's proposal (FA3 root decision 28). Nothing to align.
- **2. v23's question (proposal).** The handoff chip uses "Why do real meter readings in a combination circuit come out close to, but not exactly on, the calculated values?" (route "How do measured branch currents and voltages compare with predictions?"). `phys-y11-fa3-v23.md` adopts it.
- **3. Scene 10 (checks).** Added because "solve problems" includes checking answers, and both checks are earlier rules. First cut if the review finds the video crowded: scene 10's last sentence (about 85 characters).
- **4. Route refinement (root to record).** Question as above; start "Begin at v21's pair with a series resistor added; recall the series and parallel rules and V = IR"; stop "Stop at solving combination circuits on paper with ideal components, inside out, with loop and junction checks; hand measurement to v23". Entry knowledge should list v14, v18, v20 and v21.
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v21 at Year 11 entry; check that the black-box test makes "equivalent resistance" meaningful before any reduction; that the reductions and un-collapse keep the student oriented; that "inside out" is clear without a rule list; that the attempts give nothing away), then the Codex physics check and error check.
- The black-box swap (2), the reductions (3, 8), the staircase steps (5), the current split (6) and the values flowing back out (9) carry the explanation; judge them at playback speed in the voiced preview.
