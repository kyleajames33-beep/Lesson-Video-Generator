# Year 11 Physics FA3 V20 (Physics 2025, Year 11, Focus Area 3): Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v20`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new; the bench supply (delivered) reused by name.

Narration 5,134 characters, 17 scenes, about 486 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,000 to 5,500 range the template allows: three closely linked "account for" points, each taught from its cause with one worked example; not padded.

Scope: twentieth video of the Year 11 Physics (2025) Focus Area 3 route: why the current has the same size at every point in a series circuit (one path; charge is conserved, so it cannot pile up or vanish); why the component voltages add to the supply voltage (each coulomb gives up all the energy it was given, by conservation of energy); why the larger resistance takes the larger share (the same current, V = IR); why the resistances add (R_series = R₁ + R₂ from the two rules); the site's worked example; adding a resistor lowers the current everywhere. Templates: `phys-y11-fa1-v22.md` (concept format, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md`; FA3 conventions, section list and colour key from `phys-y11-fa3-v10.md` to `phys-y11-fa3-v12.md` and `phys-y11-fa3-v19.md` (Revision 1; v19's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson19.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 the same current everywhere, true or false, card 2 voltages and resistances add with `we-1` and its figure description, quick check, activity 1, fill the blanks, card 3 adding resistors lowers the current, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 19 ("In series the current is shared by nobody and the voltage is shared by all."; adapted, see "Memory aid check"). Route entry: `phys-y11-fa3-v20` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Analysing Series Circuits, Rₜ = ΣR and Vₜ = ΣV. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply analysing series circuits, rₜ = σr and vₜ = σv? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v21: How can I explain and apply analysing parallel circuits, 1/rₜ = σ1/r and iₜ = σi?" (this design proposes "Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?" for v21's chip; `phys-y11-fa3-v21.md` uses it).

**Opening frame (v19's actual handoff, Revision 1, 3 Nov).** v19's scene 16 ends with the memory line "Current goes through: ammeter in the path, almost no resistance. Voltage is across: voltmeter across the part, huge resistance." small at the top; a coded HSC-symbol series circuit: a 12 V supply, R₁ "3.0 Ω" and R₂ "5.0 Ω" in one loop with a bold ink "I" arrow; ammeter circles before R₁, between R₁ and R₂ and after R₂, each "? A"; voltmeter circles across R₁ and R₂, each "? V", and one across the supply, "12 V"; chips "the same everywhere?" and "do they add up?"; chip "Next: Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines; circuit diagrams in HSC symbols with conventional current as a bold ink "I" arrow (FA3 root decision 17); charge dots, gates, the energy staircase, readings and working coded (abstract diagrams); the bench supply painted (apparatus) where the real source is shown; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v10 (a volt is a joule per coulomb), v11 (current is coulombs per second; current is not used up), v12 (the charge in a piece of wire stays the same), v13 (a longer wire resists more), v14 (V = IR), v18 (series means one path) and v19 (ammeters in series, voltmeters across) recalled in a phrase each; FA1's conservation of energy recalled in a phrase.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger IDs with NESA content-system codenames), quoted from the syllabus JSON (its typeset equations rendered inline with subscripts, FA2 root decision 11):

- P25-FA3-G2-16 `ci8fb6b1e5`: "Account for the magnitude of current at any point in a series circuit"
- P25-FA3-G2-17 `ci32112b01`: "Account for the total voltage of a series circuit being the sum of the voltages of its components using conservation of energy and V_series = V₁ + V₂ + ⋯ + Vₙ"
- P25-FA3-G2-18 `ci9b07eafe`: "Account for the total resistance of a series circuit being the sum of the resistances of its components using R_series = R₁ + R₂ + ⋯ + Rₙ"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v19's handoff (above); the hook (site warm-up: does the first ammeter read more than the last?); one path and conservation of charge: no piling up, so the same current at every point (site card 1); the current is not used up, energy is (site misconception 1); conservation of energy: each coulomb gives up all its energy around the loop, so V_series = V₁ + V₂ (site card 2); the larger resistance takes the larger share (site two truths one lie, Q3); R_series = R₁ + R₂ from the two rules, with v13's "longer wire" picture (site card 2); the site's worked example `we-1`; a prediction (add a third resistor), answered: the current falls everywhere (site card 3, misconception 2); memory aid; two attempts. Stops at the three series rules and their use. Not taught: parallel circuits (v21; the handoff only sets one up); combination circuits (v22); internal resistance and EMF (not in the 2025 Year 11 points; the supply is ideal, author note a); power in each resistor (v16 and v17 own power; not used).

## Decisions

- **Learner question (v19's proposal; route placeholder rewritten).** "Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up?" One causal question carrying all three "account for" points: "why the same" asks for conservation of charge in one path (`ci8fb6b1e5`); "why the voltages add up" asks for conservation of energy (`ci32112b01`); "why the resistances add up" asks for the step from the two rules (`ci9b07eafe`). Answer, built in order: hook and prediction (1); one current (2); what is used up (3); voltages add (4); bigger resistance, bigger share (5); resistances add (6); the worked example (7, 8); adding a resistor (9, 10); memory aid (11).
- **One current, made visible (site card 1).** `LoopFlow` dots drift round the diagram; v11's **`ChargeGate`** at the three ammeter positions ticks at one rate. A "what if" overlay: the gate before R₂ is made to tick faster than the one after it, and navy dots start to bunch inside R₂ with a growing "−" tally ("charge piling up"); a grey scribble cross and the dots spread back out: charge cannot build up, so the rates match (v12's fixed electron count recalled in a phrase). The ammeter circles then fill "1.5 A" only in scene 7 (no value before the calculation; scene 2 shows "the same" chips).
- **Voltages add, made visible (site card 2).** **`VoltageStaircase`** (new): a coded energy-per-coulomb level drawn as a line above the loop, with hollow gold tags (FA2 root decision 3): it climbs "12 J per coulomb" across the supply, steps down across R₁, steps down again across R₂ and arrives back at "0 J per coulomb" at the supply's negative terminal; flat along each plain lead. The two step heights become the voltmeter readings. Conservation of energy (FA1 recalled in a phrase): a coulomb can't come back with energy left over, and can't give up more than it was given, so the steps add to the climb.
- **Bigger resistance, bigger share (site Q3; two truths one lie B).** The same current through both, so V = IR makes each step proportional to its resistance: R₂'s step is drawn 5/3 the height of R₁'s.
- **Resistances add (site card 2).** `AlignedAlgebra`, one line per cue: "V_series = V₁ + V₂"; "= IR₁ + IR₂"; "= I(R₁ + R₂)"; and since V_series = IR_series, "R_series = R₁ + R₂". Then v13's picture in one sentence: charge has to get through one resistor and then the other, like a longer wire (a coded bar for each resistor joining into one longer bar, labelled "8.0 Ω").
- **Worked example (site `we-1`, the opening circuit's own numbers).** 12 V, R₁ = 3.0 Ω, R₂ = 5.0 Ω: R_series = 8.0 Ω; I = 12 ÷ 8.0 = 1.5 A (all three ammeters fill "1.5 A"); V₁ = 1.5 × 3.0 = 4.5 V; V₂ = 1.5 × 5.0 = 7.5 V; check 4.5 + 7.5 = 12 V. Split over two scenes so each shows one stage (7: total and current; 8: each voltage and the check).
- **Prediction 2 (3 s, scene 9): a third resistor.** A 4.0 Ω resistor R₃ joins the loop after R₂: "the current through R₁: goes up, stays the same, or goes down?". Answered in 10: R_series = 12 Ω, I = 1.0 A everywhere (all three ammeters count down together), V₁ = 3.0 V, V₂ = 5.0 V, V₃ = 4.0 V, still adding to 12 V; the staircase redraws with three smaller steps. Adding resistance in one place lowers the current everywhere, because there is only one current (site card 3, hook, misconception 2). Brightness of lamps in series is not compared here (FA3 root decision 27: v21 or v22 own brightness).
- **Attempts (original, HSC style).** (A1, calculate and account; site Q1 type, new numbers) "An 18 V battery is connected in series with a 2.0 Ω resistor and a 7.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current through the 7.0 Ω resistor. (c) Calculate the voltage across each resistor, and show that your answers are consistent with conservation of energy. (4 marks)" Answer: 9.0 Ω; 2.0 A (the same current everywhere); 4.0 V and 14 V, adding to 18 V: each coulomb gets 18 J from the battery and gives up 4.0 J and 14 J. Crossed: "(b) 18 ÷ 7.0 = 2.6 A". (A2, meters and an unknown resistor; links v19) "A 12 V battery, a 4.0 Ω resistor and a resistor of unknown resistance R are connected in series. An ideal voltmeter connected across the 4.0 Ω resistor reads 3.0 V. (a) Calculate the current in the circuit. (b) Determine the voltage across R. (c) Calculate R. (3 marks)" Answer: 0.75 A; 12 − 3.0 = 9.0 V; R = 9.0 ÷ 0.75 = 12 Ω. Crossed: "R = 12 ÷ 0.75 = 16 Ω".
- **Mistake scene:** none separate. "The current is largest near the battery and gets used up" (1 to 3; site misconception 1); "each component gets the full supply voltage" (4; site two truths one lie D, in a chip); "more parts, more current" (9, 10; site misconception 2); "the full supply voltage across one resistor" (A1 crossed); "using the total voltage for one resistor" (A2 crossed).
- **Memory aid:** "Series: one path, one current. The voltage is split between the parts, and the resistances add." (see "Memory aid check").
- **Handoff (route next; proposal for v21's question).** Board change: the memory line small at the top; a coded series circuit with a 12 V supply, a 6.0 Ω and a 3.0 Ω resistor in one loop, "R_series = 6.0 + 3.0 = 9.0 Ω" written beside it; on "side by side" the two resistors slide apart onto two branches between two junction dots across the same supply (site lesson 20 `we-1`), the "9.0 Ω" row turns into a chip "9.0 Ω?"; an ammeter circle on the main lead and one on each branch, each "? A"; chips "more than 9 Ω, or less?" and "where does the current go?"; then "Next: Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?". This is the frame v21 opens on. No parallel rule is stated (v21 owns them).
- **Site sources used:** intro (three rules from conservation: 2 to 6); hook (adding resistance slows the charge everywhere: 9, 10); warm-up (the first and last resistor: 1, 2); intentions (Know 1 to 3: 2, 4, 6; Understand 1 to 3: 2, 4, 10; Can Do 1 to 3: 7, 8, A1, A2); key terms (series current, total resistance, voltage drop, conservation of energy: 2, 4, 6); misconceptions 1 and 2 (1 to 3; 9, 10); card 1 (2); true or false (3); card 2, `we-1` and its figure (4 to 8); quick check (B, 2.0 A: not used, numbers kept for the site); activity 1 (not used); fill the blanks (2, 10); card 3 (10; its lamp-dimming sentence left to v21 or v22, root decision 27); last check (10); two truths one lie (D: 4 chip; B: 5); Q1 (A1 structure); Q2 (2, 10); Q3 (4, 5).
- **Site corrections (quoted from site lesson 19, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 3: "It also explains the dimming hook: more series components share the same fixed voltage and run on a smaller current, so each is dimmer." The lesson's hook ("Add a second resistor in series and the current everywhere in the loop drops") does not mention lamps or dimming, so "the dimming hook" refers to nothing on the page. Suggest: "It also explains why lamps in a series string get dimmer as more are added: ...".
  2. Card 2 and Q3 assume an ideal supply ("Each joule of energy the battery gives to a charge is spent crossing the components"; "Each coulomb of charge is given 12 J of energy by the supply"). This is right for the Year 11 model but is not stated; a real battery's terminal voltage falls as the current rises. Precision note, not an error: suggest one line, "(assuming the supply's voltage stays fixed)", under card 2. The video states it as an author note only (author note a), because omitting it does not teach a wrong idea at this level.
  - Checked and correct: `we-1` (8.0 Ω, 1.5 A, 4.5 V, 7.5 V, check 12 V); quick check (B, 2.0 A); activity 1 (9.0 Ω, 1.0 A, 1.0 V, 2.0 V, 6.0 V); fill the blanks; true or false (false); last check (true); two truths one lie (D); Q1 (6.0 Ω, 4.0 A, 8.0 V, 16 V); Q2 and Q3 model answers; the figure description; misconceptions.
- **Cause chain taught, in order:** (1) three ammeters round one loop: does the first read most? (1); (2) one path, and charge can't pile up or vanish, so the same coulombs per second pass every point: the same current everywhere (2); (3) what the resistors use up is energy, not charge (3); (4) each coulomb is given energy by the supply and gives it all up round the loop, so the component voltages add to the supply voltage: conservation of energy (4); (5) the same current through each, so V = IR gives the larger resistance the larger share (5); (6) V_series = IR₁ + IR₂ = I(R₁ + R₂), so R_series = R₁ + R₂; charge has to get through both, like a longer wire (6); (7) the worked example (7, 8); (8) a third resistor raises R_series, so the one current falls everywhere, and the voltage is shared three ways (9, 10); (9) memory aid (11).
- **Entry knowledge (route `entryKnowledge`):** v10 (a volt is a joule per coulomb), v11 (current is coulombs per second; current is not used up), v12 (the number of electrons in a piece of wire stays the same), v13 (a longer wire has more resistance), v14 (V = IR), v18 (series: one path), v19 (ammeters in series, voltmeters across; ideal meters), FA1 (energy is conserved), each recalled in a phrase; Stage 5 Mathematics (substitution; factorising a common factor).
- **Learner-visible vocabulary (plain meaning at first use):** conserved (the total stays the same: none is made or lost, 2, 4); voltage drop (the voltage across one component: the energy each coulomb gives up there, 4); total resistance, R_series (the one resistance that would draw the same current from the supply, 6); V_series (the supply's voltage across the whole series loop, 4).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v14's HSC-symbol **`CircuitDiagram`** with v19's ammeter and voltmeter symbols and insert animation (reused); v18's **`LoopFlow`** (reused, with v19's junction split); v11's **`ChargeGate`** (reused at three points, with a "what if" mode that lets two gates differ and dots bunch in a component); **`VoltageStaircase`** (new: an energy-per-coulomb level line above the loop that climbs across the supply, steps down across each component in proportion to its voltage and stays flat along plain leads, with hollow gold tags; redraws when a component is added); **resistor bars** (new: one coded bar per resistor, length proportional to resistance, that join end to end into a total bar); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v19 (positive red "+", electrons navy "−", signs always printed); charge dots navy; conventional current a bold ink "I" arrow; circuit symbols and readings ink; the energy staircase hollow gold (FA2 root decision 3); resistor bars grey; grey for tags; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the circuit (with the staircase above it) in the left 60 per cent; working and readings in the right column.
- **No human figures.** None; components slide in by code.
- **Author notes (not learner copy):**
  (a) Ideal supply: V_series is the supply's terminal voltage, taken as fixed (no internal resistance; EMF is not a 2025 Year 11 term). Ideal leads (no voltage along a plain wire, v19). Ideal meters in A2 (stated on the card, because a real voltmeter's resistance is assumed negligible).
  (b) "Charge can't pile up": in a steady current, charge does not accumulate anywhere in a series loop (tiny surface charges set up the field once, v12 author note b); stated as "can't build up".
  (c) Energy staircase: drawn as energy per coulomb (potential) relative to the supply's negative terminal, with conventional current climbing through the supply and stepping down in each resistor. Electrons drift the other way; the staircase is about the energy each coulomb gives up, which is the same either way.
  (d) Resistor bars: the longer-wire picture holds for resistances adding, not for how the wire's material sets its resistance (v13 owns the factors).
  (e) Pronunciations: "R series"; "V one", "V two".

Main question: *Three ammeters sit at different points round one loop. Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up?*
Entry knowledge (v10 joules per coulomb; v11 current not used up; v12 fixed electron count; v13 longer wire; v14 V = IR; v18 one path; v19 meters; FA1 energy conserved).
Stops after: one current everywhere; V_series = V₁ + V₂ from conservation of energy; the larger resistance, the larger share; R_series = R₁ + R₂; the worked example; adding a resistor lowers the current everywhere. No parallel rules.
Handoff: v21, analysing parallel circuits.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v19.

### 1. hook (does the first ammeter read most?)
> Here's that series circuit. A twelve volt supply, a three ohm resistor and a five ohm resistor, all in one loop. There are ammeters at three places. The charge passes the first ammeter before it reaches either resistor, and the last one after both. So does the first ammeter read the most, or do all three read the **same**?

Visual: opens on v19's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Series circuits: the three rules"; the memory line fades; the voltmeter circles dim for now. On "the first ammeter" the ammeter before R₁ pulses; on "the last one" the one after R₂ pulses. On "same" chips "first reads most?" and "all the same?" and a 3-second countdown ring.

### 2. one path, one current
> They all read the same. A series circuit has only one path, so every coulomb that passes the first ammeter has to pass the other two. And charge can't build up anywhere along the way. If more charge went into a resistor each second than came out, it would pile up inside, and it doesn't. So the same number of coulombs passes every point each second. That's the same current, everywhere in the **loop**.

Visual: camera continue. `LoopFlow` dots drift round the loop; on "has to pass the other two" a v11 `ChargeGate` sits on each ammeter, all ticking at one rate. On "If more charge went into a resistor" the "what if" overlay: the gate before R₂ ticks faster than the one after it, and navy dots bunch inside R₂ with a growing tally "extra charge: +1, +2, +3 ..." (tag "what if"); on "and it doesn't" the overlay takes a grey scribble cross, the dots spread out and the gates match again (tag "the charge in each piece of wire stays the same, from the drift video"). On "everywhere in the loop" the three ammeter circles show "same" chips, and a row "series: the same current at every point", boxed. The chip "all the same?" glows; "first reads most?" takes a grey scribble cross.

### 3. so what gets used up?
> But surely the resistors use something up? They do, but it isn't charge. Every coulomb that goes into a resistor comes out the other side, and flows on round the loop. What each resistor takes is energy: the coulombs come out carrying less of it, and the resistor warms up. And that energy is what the voltmeters **measure**.

Visual: camera continue. On "comes out the other side" the dots keep flowing out of each resistor at the same rate (gates still matching); on "What each resistor takes is energy" small warm glows on R₁ and R₂ (tag "current isn't used up, from the current video"). On "measure" the voltmeter circles across R₁ and R₂ brighten again, still "? V".

### 4. the voltages add up
> The supply gives each coulomb twelve joules of energy. That's what twelve volts means. As the coulomb goes round, it gives up some energy in the first resistor, and the rest in the second. It can't come back to the supply with energy left over, and it can't give up more than it was given. Energy is conserved. So the energy given up in the two resistors adds to twelve joules, and the two voltages add up to the supply's voltage: V series equals V one plus V **two**.

Visual: camera continue. `VoltageStaircase` draws above the loop: on "twelve joules" the level climbs across the supply to a tag "12 J per coulomb" (tag "a volt is a joule per coulomb"); flat along the lead; on "some energy in the first resistor" it steps down across R₁ (the step labelled "V₁", gloss "voltage drop: the energy each coulomb gives up in one part"); on "the rest in the second" it steps down across R₂ to "0 J per coulomb" ("V₂"). On "left over" a ghost step that stops above zero takes a grey scribble cross; on "more than it was given" a ghost step that goes below zero takes a grey scribble cross. On "Energy is conserved" the tag "energy is conserved (from the energy videos)". On "V series equals V one plus V two" the row "V_series = V₁ + V₂ (+ ⋯ + Vₙ)", boxed. A chip "each part gets the full 12 V" fades in and takes a grey scribble cross.

### 5. the bigger resistance takes more
> Think of a path on a hill. The supply lifts each coulomb up by twelve joules, and the resistors are two slopes back down. You end where you started, so the two drops must add up to the lift, whatever their sizes. So how is the twelve volts shared? The same current goes through both resistors, and V equals I R. So the bigger resistance has the bigger voltage across it. The five ohm resistor takes more of the energy than the three ohm one, in proportion to their **resistances**.

Visual: camera continue. On "a path on a hill" the staircase briefly takes a hill-path look (a climb and two downhill slopes in pale green, FA1's gravitational energy colour; tag "like the height videos"), then returns to the gold steps on "So how is the twelve volts shared?". On "The same current" the matching gates on both resistors pulse; on "V equals I R" the row "same I: V = IR, so V is proportional to R" (tag "from the resistance video"). On "the bigger voltage" R₂'s step on the staircase grows to 5/3 the height of R₁'s step, labelled "5 parts" and "3 parts". On "resistances" a row "bigger R, bigger share of the voltage", boxed.

### 6. the resistances add
> Now the resistances. The supply's voltage is V one plus V two. That's I R one plus I R two, which is I times R one plus R two. So the whole loop acts like one resistance: R series equals R one plus R two. It makes sense, too. The charge has to get through one resistor, and then the other, like one longer **wire**.

Visual: board change: the circuit moves left, smaller; `AlignedAlgebra` in the right column, one line per cue: "V_series = V₁ + V₂"; on "I R one plus I R two" "= IR₁ + IR₂"; on "I times R one plus R two" "= I(R₁ + R₂)"; on "acts like one resistance" "V_series = I R_series", so "R_series = R₁ + R₂ (+ ⋯ + Rₙ)", boxed (gloss "total resistance: the one resistance that would draw the same current"). On "one longer wire" resistor bars under the circuit: a 3-unit bar and a 5-unit bar join end to end into one 8-unit bar (tag "a longer wire has more resistance, from the resistance video").

### 7. worked example: total resistance and current
> Let's find every reading. Start with the total resistance: three plus five is eight ohms. Then the current comes from the supply's voltage and that total. I equals V over R: twelve divided by eight is one point five amps. That's the reading on every **ammeter**.

Visual: board change: the opening circuit, full size; a working panel in the right column: task "the total resistance and the current"; equations "R_series = R₁ + R₂" and "I = V/R"; givens grouped "V_series = 12 V; R₁ = 3.0 Ω; R₂ = 5.0 Ω". On "eight ohms" "R_series = 3.0 + 5.0 = 8.0 Ω". On "one point five amps" "I = 12 ÷ 8.0 = 1.5 A". On "every ammeter" all three ammeter circles fill "1.5 A" at once.

### 8. worked example: each voltage, and the check
> Now each voltage, using the current through each resistor. V one is one point five times three: four point five volts. V two is one point five times five: seven point five volts. Check: four point five plus seven point five is twelve volts. Every joule the supply gave each coulomb is **accounted** for. And notice the split: three parts to five, out of eight, just like the **resistances**.

Visual: camera continue; "1.5 A" stays at the top of the working, the earlier lines dim. On "V one" "V₁ = IR₁ = 1.5 × 3.0 = 4.5 V" and the voltmeter across R₁ fills "4.5 V"; on "V two" "V₂ = IR₂ = 1.5 × 5.0 = 7.5 V" and the voltmeter across R₂ fills "7.5 V". The staircase's two steps label "4.5 V" and "7.5 V". On "Check" "4.5 + 7.5 = 12 V = V_series ✓", boxed; on "accounted" the two steps flash together against the 12 V climb. On "resistances" a grey row "4.5 : 7.5 = 3 : 5 (out of 8)" beside the steps.

### 9. prediction: a third resistor
> Now add a third resistor, four ohms, into the same loop. What happens to the current through the first resistor? Does it go up, stay the same, or go **down**?

Visual: camera continue; the working clears. A 4.0 Ω resistor R₃ slides into the loop after R₂ (the loop opens and closes by code). The ammeter circles show "?". On "down" chips "up?", "the same?" and "down?" and a 3-second countdown ring.

### 10. more resistance, less current everywhere
> It goes down, and not just there. The total resistance is now twelve ohms, so the current is twelve divided by twelve: one amp. There's only one current, so every ammeter drops to one amp at once. The twelve volts is now shared three ways: three, five and four volts, still adding to twelve. Adding a resistor anywhere slows the charge **everywhere**.

Visual: camera continue. On "twelve ohms" "R_series = 3.0 + 5.0 + 4.0 = 12 Ω" (the resistor bars add a 4-unit bar); on "one amp" "I = 12 ÷ 12 = 1.0 A"; on "every ammeter drops" all three ammeter readings count down together from "1.5 A" to "1.0 A" and the gates slow together. On "shared three ways" the staircase redraws with three steps, "3.0 V", "5.0 V", "4.0 V" (working "1.0 × 3.0, 1.0 × 5.0, 1.0 × 4.0"); "3.0 + 5.0 + 4.0 = 12 V ✓". The chip "down?" glows; "up?" and "the same?" take grey scribble crosses. On "everywhere" a chip "more parts, more current" fades in and takes a grey scribble cross.

### 11. memory aid
> To remember it: in series, one path means one current. The voltage is split between the parts, and the resistances **add**.

Visual: the handwritten line writes large: "Series: one path, one current. The voltage is split between the parts, and the resistances add." On "one current" the three matching gates pulse; on "split" the staircase's steps; on "add" the resistor bars join. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. An eighteen volt battery is in series with a two ohm resistor and a seven ohm resistor. Calculate the total resistance, and the current through the seven ohm resistor. Then find the voltage across each resistor, and show your answers are consistent with conservation of energy. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "An 18 V battery is connected in series with a 2.0 Ω resistor and a 7.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current through the 7.0 Ω resistor. (c) Calculate the voltage across each resistor, and show that your answers are consistent with conservation of energy. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The total is two plus seven: nine **ohms**. The current is eighteen over nine, two amps, and it's the same through every resistor, including the seven ohm **one**. The voltages are two times two, four volts, and two times seven, fourteen volts. They add to eighteen, so each coulomb gives up all eighteen joules it was **given**. Eighteen over seven puts the whole supply across one **resistor**.

Visual: card shrinks to the top; "in series", "through the 7.0 Ω resistor" and "conservation of energy" underlined. Rows: on "ohms" "(a) R_series = 2.0 + 7.0 = 9.0 Ω"; on "one" "(b) I = 18 ÷ 9.0 = 2.0 A (the same everywhere)", boxed; "(c) V = IR: 2.0 × 2.0 = 4.0 V; 2.0 × 7.0 = 14 V"; on "given" "4.0 + 14 = 18 V: each coulomb gives up the 18 J it was given", boxed. On "resistor" a chip "(b) 18 ÷ 7.0 = 2.6 A" fades in and takes a grey scribble cross. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A twelve volt battery, a four ohm resistor and an unknown resistor R are in series. An ideal voltmeter across the four ohm resistor reads three volts. Find the current, the voltage across R, and the value of R. Pause here to answer.

Visual: `QuestionCard` with an HSC-symbol diagram: a 12 V battery, a 4.0 Ω resistor with a "V" circle across it, and a resistor labelled "R", in one loop. Text: "A 12 V battery, a 4.0 Ω resistor and a resistor of unknown resistance R are connected in series. An ideal voltmeter connected across the 4.0 Ω resistor reads 3.0 V. (a) Calculate the current in the circuit. (b) Determine the voltage across R. (c) Calculate R. (3 marks)" The voltmeter circle shows "3.0 V" (given in the question). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The four ohm resistor has three volts across it, so the current is three over four: zero point seven five **amps**, everywhere in the loop. The voltages add to twelve, so R has twelve minus three: nine **volts**. Then R is nine over zero point seven five: twelve **ohms**. Dividing twelve by the current gives sixteen, but that's the whole loop's **resistance**.

Visual: card shrinks to the top; "in series", "across the 4.0 Ω resistor" and "3.0 V" underlined. Rows: on "amps" "(a) I = V/R = 3.0 ÷ 4.0 = 0.75 A", boxed; on "volts" "(b) V_R = 12 − 3.0 = 9.0 V", boxed; on "ohms" "(c) R = 9.0 ÷ 0.75 = 12 Ω", boxed. On "resistance" a chip "R = 12 ÷ 0.75 = 16 Ω" fades in and takes a grey scribble cross, with a grey tag "16 Ω = R_series". Hold about 1 second.

### 16. handoff
> So in a line, a six ohm and a three ohm resistor make nine ohms. Now connect the same two resistors side by side, across the same twelve volt supply. Is the total still nine ohms, or more, or less? And where does the current **go**?

Visual: board change: the memory line small at the top. A coded series circuit: a 12 V supply, a 6.0 Ω and a 3.0 Ω resistor in one loop, with "R_series = 6.0 + 3.0 = 9.0 Ω" beside it. On "side by side" the two resistors slide apart onto two branches between two junction dots across the same supply; the "9.0 Ω" row becomes a chip "9.0 Ω?". An ammeter circle appears on the main lead and one on each branch, each "? A". Chips write: "more than 9 Ω, or less?" and, on "go", "where does the current go?". Then the chip "Next: Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Series: one path. Charge is conserved and can't build up, so the current is the same at every point.
2. Each coulomb gives up all the energy the supply gave it, so the voltages add: V_series = V₁ + V₂ + ⋯ + Vₙ (conservation of energy).
3. The same current flows through each part, so V = IR: the bigger resistance has the bigger voltage.
4. R_series = R₁ + R₂ + ⋯ + Rₙ. Find I = V_series ÷ R_series, then each V = IR, and check they add to V_series.
5. Adding a resistor in series raises R_series, so the current falls everywhere.

Memory aid (large, on the notes screen): *Series: one path, one current. The voltage is split between the parts, and the resistances add.*

At the end the notes cross-fade back to scene 16's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the current is the same everywhere: one path, and charge cannot build up or vanish (2). Why the current is not used up: the resistors take energy, not charge (3). Why the voltages add: each coulomb gives up all the energy it was given, no more and no less (4). Why the larger resistance takes more voltage: the same current, so V = IR (5). Why resistances add: V_series = IR₁ + IR₂ = I(R₁ + R₂), and charge must pass through both, like a longer wire (6). Why adding a resistor lowers the current everywhere: R_series rises and there is only one current (10).
- **Misconceptions addressed:** the current is largest near the battery and gets used up (1 to 3; site misconception 1; hook chip crossed); each part gets the full supply voltage (4, chip crossed; site two truths one lie D); more parts, more current (10, chip crossed; site misconception 2); the full supply voltage across one resistor (feedback 1 crossed); the total voltage used for one resistor (feedback 2 crossed).
- **One idea at a time:** current (2, 3), voltage (4, 5), resistance (6), worked example in two stages (7, 8), adding a resistor (9, 10).
- **Video makes it easier:** the student sees three gates tick at one rate and a "what if" pile-up crossed out (2), a level climb 12 J per coulomb across the supply and step down to zero across two resistors, with ghost steps that end above or below zero crossed out (4), the bigger resistor's step drawn bigger (5), resistor bars join into a longer bar (6), all three ammeters fill 1.5 A at once (7), and all three count down to 1.0 A together as the staircase redraws in three steps (10).
- **Response opportunity:** two 3 s predictions (1, 9); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("in series"; "18 V", "2.0 Ω", "7.0 Ω"; "ideal voltmeter", "across the 4.0 Ω resistor", "3.0 V"), nothing answer-bearing. One crossed mistake each; feedback about 28 s and 25 s.
- **Avoided double teaching:** v10's joules per coulomb (4), v11's "not used up" (3), v12's fixed electron count (2), v13's longer wire (6), v14's V = IR (5 to 8) and v19's meters (1, A2) are recalled in a phrase with tags.
- **Syllabus coverage:** `ci8fb6b1e5`: the current at any point in a series circuit (1 to 3, 7, 10, A1 (b), A2 (a)); `ci32112b01`: V_series = V₁ + V₂ + ⋯ from conservation of energy (4, 5, 8, 10, A1 (c), A2 (b)); `ci9b07eafe`: R_series = R₁ + R₂ + ⋯ (6, 7, 10, A1 (a), A2 (c)).
- **Out of scope by design:** parallel rules (v21); combination circuits (v22); internal resistance and EMF; power in each resistor.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "An 18 V battery is connected in series with a 2.0 Ω resistor and a 7.0 Ω resistor. (a) Calculate the total resistance of the circuit. (b) Calculate the current through the 7.0 Ω resistor. (c) Calculate the voltage across each resistor, and show that your answers are consistent with conservation of energy."
Model answer: (a) R_series = 2.0 + 7.0 = 9.0 Ω. (b) I = V/R = 18 ÷ 9.0 = 2.0 A; in series the same current flows through every component, so the current through the 7.0 Ω resistor is 2.0 A. (c) V = IR: 2.0 × 2.0 = 4.0 V across the 2.0 Ω resistor; 2.0 × 7.0 = 14 V across the 7.0 Ω resistor. 4.0 + 14 = 18 V, the battery's voltage: each coulomb is given 18 J by the battery and gives up 4.0 J and 14 J in the resistors, so all the energy it was given is accounted for, as conservation of energy requires. Classic mistake (crossed): "(b) 18 ÷ 7.0 = 2.6 A".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** Diagram: a 12 V battery, a 4.0 Ω resistor with a voltmeter across it reading 3.0 V, and a resistor R, in one loop. "A 12 V battery, a 4.0 Ω resistor and a resistor of unknown resistance R are connected in series. An ideal voltmeter connected across the 4.0 Ω resistor reads 3.0 V. (a) Calculate the current in the circuit. (b) Determine the voltage across R. (c) Calculate R."
Model answer: (a) I = V/R = 3.0 ÷ 4.0 = 0.75 A, the same at every point in the series circuit. (b) The voltages add to the supply voltage: V_R = 12 − 3.0 = 9.0 V. (c) R = V/I = 9.0 ÷ 0.75 = 12 Ω. (Check: R_series = 4.0 + 12 = 16 Ω; 12 ÷ 16 = 0.75 A.) Classic mistake (crossed): "R = 12 ÷ 0.75 = 16 Ω" (that is R_series, not R).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening circuit (site `we-1`) | 12 V; R₁ = 3.0 Ω; R₂ = 5.0 Ω | 1 to 8 |
| Total and current | R_series = 8.0 Ω; I = 12 ÷ 8.0 = 1.5 A | 7 |
| Voltages | V₁ = 1.5 × 3.0 = 4.5 V; V₂ = 1.5 × 5.0 = 7.5 V; 4.5 + 7.5 = 12 V | 8 |
| Shares | 5 parts to 3 parts (R₂'s step 5/3 of R₁'s) | 5 |
| Third resistor | R₃ = 4.0 Ω; R_series = 12 Ω; I = 1.0 A; 3.0 V, 5.0 V, 4.0 V; sum 12 V | 9, 10 |
| A1 | 18 V; 2.0 Ω, 7.0 Ω; 9.0 Ω; 2.0 A; 4.0 V, 14 V; sum 18 V; crossed 2.6 A | 12, 13 |
| A2 | 12 V; 4.0 Ω reads 3.0 V; I = 0.75 A; V_R = 9.0 V; R = 12 Ω; crossed 16 Ω | 14, 15 |
| Handoff | 12 V; 6.0 Ω and 3.0 Ω; in series 9.0 Ω | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.0 + 5.0 = 8.0; 12 ÷ 8.0 = 1.5; 1.5 × 3.0 = 4.5; 1.5 × 5.0 = 7.5; 4.5 + 7.5 = 12.
- 3.0 + 5.0 + 4.0 = 12; 12 ÷ 12 = 1.0; 1.0 × 3.0, 5.0, 4.0; sum 12.
- 2.0 + 7.0 = 9.0; 18 ÷ 9.0 = 2.0; 2.0 × 2.0 = 4.0; 2.0 × 7.0 = 14; 4.0 + 14 = 18; 18 ÷ 7.0 = 2.57 (crossed 2.6).
- 3.0 ÷ 4.0 = 0.75; 12 − 3.0 = 9.0; 9.0 ÷ 0.75 = 12; 12 ÷ 0.75 = 16; 12 ÷ (4.0 + 12) = 0.75.
- 6.0 + 3.0 = 9.0.

## Memory aid check

- **"Series: one path, one current. The voltage is split between the parts, and the resistances add."** Adapted from the site's lesson 19 hook ("In series the current is shared by nobody and the voltage is shared by all."), whose "shared by nobody" could be heard as "nobody gets any current"; the plain version keeps its contrast. Meaning, as said in scene 11: one path forces one current everywhere (2); the supply's energy per coulomb is split between the parts (4, 5); the resistances add (6). Assumptions checked: "one current" holds for a single loop with no branches (stated as "one path"); "split" means the voltages add to the supply's voltage, not that they are equal (5 shows unequal shares); the supply's voltage is taken as fixed (author note a). Introduced after all three rules and the worked example. v21's memory aid mirrors it for parallel.
- **Hill path (scene 5).** Analogy for one claim only: going round a closed loop, the total drop equals the total lift (energy per coulomb, like height). Assumption checked: it holds because each coulomb returns to the same point (the supply's negative terminal) with the same energy per coulomb; the analogy says nothing about how fast charge moves or about resistance. Introduced after the energy statement in 4.
- **Longer wire (scene 6).** Used for one claim only: resistances in a line add, as a longer wire resists more (v13). It is not a claim about materials.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,134 characters** (5,150 joined), 17 scenes. Characters per scene (1 to 17): 320, 399, 321, 464, 477, 311, 258, 383, 154, 347, 119, 310, 380, 242, 346, 228, 75. At 13.3 characters per second the speech is about 386 s; add about 18 s of holds and settling (the gates and pile-up in 2, the staircase in 4, the algebra lines in 6, the ammeters filling in 7, the hill path in 5, the count-down in 10, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 486 s**, inside the owner's 5 to 10 minute target. The three points share one circuit and one worked example, so the video is complete at this length; nothing is added to reach 5,500.

## Scene list and build ids

Lesson key `p-y11-fa3-v20` (route phys-y11-fa3-v20). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v20` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v20` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, one-current, what-is-used-up, voltages-add, bigger-share, resistances-add, worked-total-current, worked-voltages, prediction-third-resistor, current-falls-everywhere, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v19's last frame continues into scene 1 (camera continue: the circuit and meters carry over); 1 to 5 camera continue; 5 to 6 board change (the circuit moves left for the algebra); 6 to 7 board change (the circuit full size with a working panel); 7 to 8 camera continue; 8 to 9 camera continue (R₃ slides in); 9 to 10 camera continue; 10 to 11 fade; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v20-learning-review.md`, `science_check` = `checks/p-y11-fa3-v20-physics-check.md`.

## Assets

Reused: `phys-y11-low-voltage-supply-v1.png` (delivered; shown small beside the diagram in 1 as the real 12 V source, then the HSC symbol carries it). No other plate: this video's explanation lives in the circuit diagram, the gates and the staircase, which are abstract and coded (owner rule: code only abstract diagrams; HSC questions use the same diagrams).

New: none.

Checked first (3 Nov): `public/assets/physics/` has the bench supply; no resistor, lamp or meter plate. v19's multimeter plate is not needed here, because HSC-symbol meters with readings are clearer at three positions at once.

Coded: circuits, meters and readings, charge dots, gates and the "what if" pile-up, the energy staircase, resistor bars, working.

Kit gaps (for the next physics kit brief): `VoltageStaircase`, resistor bars, the `ChargeGate` "what if" mode; lesson-local acceptable for Revision 1. v21 and v22 reuse `VoltageStaircase` (branches that both step down the full voltage).

## Codex asset brief

None for this video (no new plates).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: in a series circuit the current is the same at every point because there is one path and charge is conserved (it does not accumulate); the components take energy, not charge; by conservation of energy the component voltages add to the supply voltage (ideal supply and leads); with the same current, V = IR gives the larger resistance the larger voltage; R_series = R₁ + R₂ + ⋯ follows from V_series = IR₁ + IR₂ = I(R₁ + R₂); adding a series resistor raises R_series and lowers the current everywhere.
3. Confirm no parallel rule is stated (the handoff only asks).
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away (A2's "3.0 V" is a given).
5. Confirm the three syllabus quotes match the syllabus JSON (equations rendered inline with subscripts, FA2 root decision 11) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v19.md` scene 16.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only; 2 is a precision note).

## YouTube metadata (draft)

Title: Series Circuits: Why the Current Stays the Same | Year 11 Physics

(Title length: 65 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson19.sa.html

Put ammeters at three points round a series circuit and they all read the same. Why? Watch charge flow round one path without piling up, follow each coulomb's energy as it steps down through the resistors, and see why the voltages add up to the supply and the resistances simply add. Then work through a full example, and find out why adding one more resistor slows the charge everywhere at once. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Account for the magnitude of current at any point in a series circuit" (ci8fb6b1e5)
"Account for the total voltage of a series circuit being the sum of the voltages of its components using conservation of energy and V_series = V₁ + V₂ + ⋯ + Vₙ" (ci32112b01)
"Account for the total resistance of a series circuit being the sum of the resistances of its components using R_series = R₁ + R₂ + ⋯ + Rₙ" (ci9b07eafe)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Ammeters and voltmeters (previous video). Next: Analysing parallel circuits.

#Year11Physics #Physics #SeriesCircuits #HSCScience

## Open decisions

- **1. Route question for v21 (proposal).** The handoff chip uses "Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?" (route placeholder "How can I explain and apply analysing parallel circuits, 1/rₜ = σ1/r and iₜ = σi?"). `phys-y11-fa3-v21.md` uses it.
- **2. The "what if" pile-up (scene 2).** Kept as one sentence (about 8 s): it is the visible reason charge conservation forces one current. If the review finds it confusing (a picture of something that doesn't happen), it is the first cut; the gates ticking together still carry the claim.
- **3. Ideal supply.** Stated in author notes only (site correction 2). The learner copy does not need it: the Year 11 points treat the supply's voltage as fixed, and omitting it teaches nothing wrong at this level.
- **4. Route refinement (root to record).** Question as above; start "Begin at v19's series circuit with three ammeters; recall joules per coulomb, current not used up and V = IR"; stop "Stop at the three series rules, the worked example and the effect of adding a resistor; hand parallel circuits to v21". Entry knowledge should add v12, v13, v14 and v19.
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v19 at Year 11 entry; check that the gates and the crossed pile-up make "the same current" a reason, not a rule; that the staircase makes "voltages add" an energy statement; that the algebra in 6 is one line per cue; that the worked example shows one stage at a time; that the third-resistor countdown makes "everywhere" vivid; that the attempts give nothing away), then the Codex physics check and error check.
- The matching gates and crossed pile-up (2), the staircase climbing and stepping down with the crossed ghost steps (4), the resistor bars joining (6), the three ammeters filling at once (7) and counting down together as the staircase redraws (10) carry the explanation; judge them at playback speed in the voiced preview.
