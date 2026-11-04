# Year 11 Physics FA3 V21 (Physics 2025, Year 11, Focus Area 3): Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up? (design)

Status: Revision 2 (5 Nov 2026), brief 164 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v21`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: none new; the bench supply (delivered) and the filament lamp (requested in FA2) reused by name.

Narration 5,109 characters, 18 scenes, about 486 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,000 to 5,500 range the template allows: two parallel rules, each taught from its cause with the site's worked example and one added branch; not padded.

Scope: twenty-first video of the Year 11 Physics (2025) Focus Area 3 route: why every branch of a parallel circuit has the full supply voltage (each branch joins the same two points); each branch current from I = V/R; why the branch currents add to the total current (conservation of charge at a junction); the total resistance from V/I, and why it is less than the smallest branch (another path, like more lanes); the reciprocal rule 1/R_parallel = 1/R₁ + 1/R₂ from the current rule; using it, including two identical branches; adding a branch raises the total current and leaves the other branches unchanged. Templates: `phys-y11-fa1-v22.md` (concept format, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md`; FA3 conventions, section list and colour key from `phys-y11-fa3-v10.md` to `phys-y11-fa3-v13.md`, `phys-y11-fa3-v19.md` and `phys-y11-fa3-v20.md` (Revision 1; v20's scene 16 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson20.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 shared voltage and currents that add, true or false, card 2 the reciprocal rule with `we-1` and its figure description, quick check, activity 1, match the pairs, card 3 more branches, more current, last check, odd one out, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 20 ("In parallel the voltage is shared by nobody and the current is shared by all."; adapted as the mirror of v20's, see "Memory aid check"). Route entry: `phys-y11-fa3-v21` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Analysing Parallel Circuits, 1/Rₜ = Σ1/R and Iₜ = ΣI. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply analysing parallel circuits, 1/rₜ = σ1/r and iₜ = σi? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v22: How can I explain and apply combination circuits?" (this design proposes "Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?" for v22's chip; see open decision 1).

**Opening frame (v20's actual handoff, Revision 1, 3 Nov).** v20's scene 16 ends with the memory line "Series: one path, one current. The voltage is split between the parts, and the resistances add." small at the top; a coded HSC-symbol parallel circuit: a 12 V supply with a 6.0 Ω resistor and a 3.0 Ω resistor on two branches between two junction dots; a chip "9.0 Ω?" (from the series row "R_series = 6.0 + 3.0 = 9.0 Ω"); an ammeter circle on the main lead and one on each branch, each "? A"; chips "more than 9 Ω, or less?" and "where does the current go?"; chip "Next: Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (appliances in 11 are shown as lamp symbols and the painted lamp, already connected; switches close by code); circuit diagrams in HSC symbols with conventional current as a bold ink "I" arrow (FA3 root decision 17); charge dots, gates, the energy staircase, lanes, readings and working coded (abstract diagrams); the bench supply and the lamp painted (apparatus) where the real set-up is shown; one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v10 (a volt is a joule per coulomb), v11 (current is coulombs per second), v13 (twice the area, half the resistance: more lanes), v14 (V = IR), v18 (parallel means branches across the same two points), v19 (meters) and v20 (the series rules, the energy staircase, R_series of 9.0 Ω) recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger IDs with NESA content-system codenames), quoted from the syllabus JSON (its typeset equations rendered inline with subscripts, FA2 root decision 11):

- P25-FA3-G2-19 `ci77bd4eb8`: "Use the relationship between the total resistance and resistance in each branch of a parallel circuit, 1/R_parallel = 1/R₁ + 1/R₂ + ⋯ + 1/Rₙ to calculate resistances"
- P25-FA3-G2-20 `ci0b4ad0e3`: "Explain the relationship between the total current of a parallel circuit and the current passing through each component using I_parallel = I₁ + I₂ + ⋯ + Iₙ"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v20's handoff (above); the hook (site warm-up and hook: the same two resistors side by side, more or less than 9 Ω?); the shared voltage (site card 1); each branch current, I = V/R, the smaller resistance taking the bigger current (site misconception 2); currents add at the junction by conservation of charge (site card 1, Q3); the total resistance from V/I and the hook answered (site card 2); why it is less than the smallest branch: another path, v13's lanes (site card 2, Q2); the reciprocal rule from the current rule (site card 2) and its use on the site's `we-1`, with "flip back" (site misconception 1); a prediction (two 4.0 Ω resistors, site quick check), answered; adding a third branch (site card 3, odd one out, Q3); memory aid; two attempts. Stops at the two parallel rules, the total resistance and the effect of adding a branch. Not taught: combination circuits (v22; the handoff only sets one up); the "product over sum" shortcut (not in the point; author note d); internal resistance (the supply's voltage is fixed, author note a); fuses and circuit-breaker ratings beyond one sentence (site card 3; safety is not in the point).

## Decisions

- **Learner question (v20's proposal; route placeholder rewritten).** "Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?" One causal question carrying both points: "why lower" asks for the extra path and leads to the reciprocal rule (`ci77bd4eb8`); "how do the branch currents add up" asks for conservation of charge at a junction (`ci0b4ad0e3`). Answer, built in order: hook and prediction (1); shared voltage (2); branch currents (3); currents add (4); total resistance (5); why less (6); the rule (7); using it (8); identical branches (9, 10); another branch (11); memory aid (12).
- **Shared voltage, made visible (site card 1).** v20's **`VoltageStaircase`** splits into two branches: from the top junction ("12 J per coulomb") each branch's level steps down the full height to "0 J per coulomb" at the bottom junction. A coulomb that takes either branch gives up all 12 J there, because both branches join the same two points. Two voltmeter circles, one across each branch, both read "12 V". Condition shown once as a grey tag: "each branch joined straight across the supply".
- **Branch currents and the junction (site card 1, Q3).** `LoopFlow` dots split at the top junction in proportion to each branch's current (twice as many down the 3.0 Ω branch) and rejoin at the bottom; v11's **`ChargeGate`** on the main lead and on each branch: "2.0 C each second" and "4.0 C each second" in, "6.0 C each second" on the main lead. Junction rule: the charge arriving each second must leave each second (charge can't build up, v20's reason in a phrase).
- **Total resistance and why it's less (site card 2, Q2).** R_parallel = V/I_parallel = 12 ÷ 6.0 = 2.0 Ω, less than 3.0 Ω; the hook chip "less?" glows. Cause: the second branch adds a path without blocking the first, so the supply drives more current for the same voltage (I up, V the same, so R down). v13's **lanes** (`WireSection` face-on faces recalled): two identical resistors side by side are like one wire with twice the area: half the resistance. The 6.0 Ω and 3.0 Ω branches are shown as one lane and two lanes of the same wire (a 6.0 Ω lane and a 3.0 Ω double lane: three lanes, 2.0 Ω), the analogy's condition stated in "Memory aid check".
- **The reciprocal rule (site card 2).** `AlignedAlgebra`, one line per cue: "I_parallel = I₁ + I₂"; "V/R_parallel = V/R₁ + V/R₂"; divide every term by V: "1/R_parallel = 1/R₁ + 1/R₂ (+ ⋯ + 1/Rₙ)". Then the site's `we-1` worked by the rule in one stage per cue: 1/6.0 + 1/3.0 = 1/6.0 + 2/6.0 = 3/6.0, so 1/R = 0.50 Ω⁻¹ (said "one over R is a half"), then "flip it back": R = 2.0 Ω, matching scene 5. A chip "R = 0.50 Ω" takes a grey scribble cross (site misconception 1 is "just add them"; that is crossed in 1 and 5; "forgetting to flip back" is crossed here and in feedback 1).
- **Prediction 2 (3 s, scene 9): two identical branches.** "Two 4.0 Ω resistors side by side: the total?" Chips "8.0 Ω?", "4.0 Ω?", "2.0 Ω?". Answered in 10: 1/4.0 + 1/4.0 = 2/4.0, so 2.0 Ω: half, two equal lanes (site quick check B). Grey row: "n identical branches: R ÷ n".
- **Another branch (site card 3, odd one out, Q3).** A 12 Ω branch is added across the same supply in the opening circuit: its own current 12 ÷ 12 = 1.0 A; the 6.0 Ω and 3.0 Ω branch currents stay at 2.0 A and 4.0 A (the same 12 V and the same resistances); the main lead's gate rises to 7.0 A; R_parallel = 12 ÷ 7.0 ≈ 1.7 Ω (by the rule: 1/6 + 1/3 + 1/12 = 7/12, so 12/7 Ω). Application in one sentence with the painted lamp: appliances on a home circuit are in parallel, so each one switched on adds its own current, which is why a circuit has a limit (tag "circuit breakers: they cut off the supply if the total current gets too big").
- **Attempts (original, HSC style).** (A1, calculate; site Q1 type, new numbers) "A 12 V battery is connected across a 4.0 Ω resistor and a 12 Ω resistor connected in parallel. (a) Calculate the current in each resistor. (b) Calculate the current drawn from the battery. (c) Calculate the total resistance of the parallel combination. (4 marks)" Answer: 3.0 A and 1.0 A; 4.0 A; 1/4.0 + 1/12 = 4/12, so 3.0 Ω (check 12 ÷ 4.0 = 3.0 Ω). Crossed: "(c) R = 1/3 = 0.33 Ω". (A2, explain; site Q3 type, new context) "Two lamps are connected in parallel across a 12 V battery. The currents in the lamps are 1.5 A and 0.50 A. Assume the battery's voltage stays at 12 V. (a) State the current drawn from the battery, and explain your answer using conservation of charge. (b) A third lamp is then connected in parallel with the other two. Explain what happens to the current in the 1.5 A lamp and to the current drawn from the battery. (3 marks)" Answer: 2.0 A, because the charge arriving at a junction each second equals the charge leaving it; the 1.5 A lamp still carries 1.5 A (the same 12 V across it and the same resistance); the battery's current rises by the third lamp's current. Crossed: "the 1.5 A lamp's current falls, because the current is shared between more lamps".
- **Mistake scene:** none separate. "Add parallel resistances like series" (1, 5; site misconception 1, the "9.0 Ω?" chip crossed); "every branch carries the same current" (3; site misconception 2, in a chip); "adding a resistor always adds resistance" (5, 6; site hook); "forgetting to flip back" (8, feedback 1 crossed); "the existing branches lose current when one is added" (11; site odd one out D; feedback 2 crossed).
- **Memory aid:** "Series: same current, split voltage. Parallel: same voltage, split current. And every branch you add lowers the total resistance." (see "Memory aid check").
- **Handoff (route next; proposal for v22's question).** Board change: the memory line small at the top; the opening circuit's pair (6.0 Ω and 3.0 Ω in parallel) with a 4.0 Ω resistor R₁ added in series on the main lead (site lesson 21 `we-1`), the 12 V supply; a dashed box round the pair with a "? Ω" tag; chips "series, parallel, or both?" and "swap the pair for one resistor?"; then "Next: Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?". This is the frame v22 opens on. No reduction is done (v22 owns it).
- **Site sources used:** intro (voltage shared, current divides; more branches, more current: 2 to 4, 11); hook (adding a resistor lowers resistance: 1, 5, 6); warm-up (smaller than the smaller branch: 1, 5); intentions (Know 1 to 3: 2, 4, 7; Understand 1 to 3: 4, 6, 11; Can Do 1 to 3: 3, 8, A1); key terms (branch current, total current, junction, reciprocal sum: 3, 4, 7, 8); misconceptions 1 and 2 (1, 5, 8; 3); card 1 (2 to 4); true or false (3); card 2, `we-1` and its figure (5 to 8); quick check (B: 9, 10); activity 1 (not used); match the pairs (2, 4, 6); card 3 (11); last check (11); odd one out (D: 11, feedback 2 crossed); Q1 (A1 structure); Q2 (6); Q3 (A2 structure, new context).
- **Site corrections (quoted from site lesson 20, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Card 1: "Each branch is connected directly across the supply, so every branch has the same voltage across it, the supply voltage." Correct for the circuits in this lesson, but card 3, the odd one out (D, "The current in the existing branches decreases" as the one that does not happen) and Q3 ("each still carries exactly the current it did before") also rely on the supply's voltage staying fixed when a branch is added. A real battery's voltage falls a little as its current rises, so the existing branch currents fall slightly. Precision note: suggest "(assuming the supply's voltage stays the same)" in card 3 and Q3's model answer. The video puts this condition on A2's card, because A2 asks exactly that question.
  - Checked and correct: `we-1` (2.0 Ω, 2.0 A, 4.0 A, 6.0 A, check 6.0 A); quick check (B, 2.0 Ω); activity 1 (2.0 A, 3.0 A, 1.0 A, 6.0 A, 4.0 Ω, below 8.0 Ω); match the pairs; true or false (true); last check (true); odd one out (D); Q1 (3.0 A, 2.0 A, 5.0 A, 1.2 Ω); Q2 and Q3 model answers; the figure description; misconceptions.
- **Cause chain taught, in order:** (1) the same two resistors side by side: more or less than 9 Ω? (1); (2) both branches join the same two points, so each coulomb gives up the full 12 J whichever branch it takes: each branch has the full supply voltage (2); (3) so each branch's current is I = V/R on its own, and the smaller resistance takes the bigger current (3); (4) charge can't build up at a junction, so the branch currents add to the total: I_parallel = I₁ + I₂ (4); (5) the total resistance is V/I_parallel, 2.0 Ω, less than either branch (5); (6) the second branch adds a path without blocking the first, like extra lanes, so more current flows for the same voltage (6); (7) dividing the current rule by V gives 1/R_parallel = 1/R₁ + 1/R₂ (7); (8) using it, and flipping back (8); (9) identical branches: R ÷ n (9, 10); (10) another branch adds its own current, leaves the others unchanged and lowers R_parallel again (11); (11) memory aid (12).
- **Entry knowledge (route `entryKnowledge`):** v10 (a volt is a joule per coulomb), v11 (current is coulombs per second), v13 (twice the area, half the resistance; lanes), v14 (V = IR), v18 (parallel: branches across the same two points), v19 (ammeters in series, voltmeters across), v20 (series rules; the energy staircase; charge can't build up), each recalled in a phrase; Stage 5 Mathematics (adding fractions with a common denominator; a reciprocal).
- **Learner-visible vocabulary (plain meaning at first use):** branch (one of the separate paths between the two junctions, 2); junction (a point where the path splits or joins, 2, from v18); branch current (the current in one branch, 3); total current, I_parallel (the current in the main lead from the supply, 4); reciprocal (one over a number, 7); total resistance, R_parallel (the one resistance that would draw the same total current, 5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v14's HSC-symbol **`CircuitDiagram`** with v19's meter symbols and junction dots (reused, plus an "add branch" animation); v18's **`LoopFlow`** (reused, with v19's junction split: dots split at junctions in proportion to branch currents); v11's **`ChargeGate`** (reused on the main lead and each branch, with a junction tally "in = out"); v20's **`VoltageStaircase`** (reused, with a branched mode: two or three branch levels each stepping the full height); v13's **`WireSection`** faces as **lanes** (reused: one lane, two lanes, three lanes); v20's **resistor bars** (not used here, to avoid "adding" bars for a parallel total); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v20 (positive red "+", electrons navy "−", signs always printed); charge dots navy; conventional current a bold ink "I" arrow; circuit symbols and readings ink; the energy staircase hollow gold; lanes pale grey with navy dots; grey for tags; crossed items grey scribble.
- **Board layout (constant):** heading top-left; the circuit (with the staircase above it) in the left 60 per cent; working and readings in the right column.
- **No human figures.** None; branches slide in by code; the lamp in 11 is already connected.
- **Author notes (not learner copy):**
  (a) Ideal supply and leads: each branch has the full supply voltage only if the supply's terminal voltage is fixed and nothing else is in series with the pair (the handoff adds a series resistor, which is v22's case). A2's card states the fixed voltage because its part (b) depends on it.
  (b) Junction: in a steady current no charge accumulates at a junction (v20 author note b).
  (c) Lanes: two resistors of the same wire side by side act like one wire of the summed cross-sectional area; this holds exactly for identical material and length (v13's R ∝ 1/A). The 6.0 Ω and 3.0 Ω picture uses "one lane" and "two lanes" of the same wire, so three lanes give 6.0 ÷ 3 = 2.0 Ω, matching the rule; said only for identical branches (10) and shown, not spoken, for 6.0 Ω and 3.0 Ω (6).
  (d) "Product over sum" (R₁R₂/(R₁ + R₂)) is not in the point and is not shown; the reciprocal rule handles any number of branches.
  (e) Units: 1/R has units Ω⁻¹; on screen "1/R = 0.50 Ω⁻¹" appears once in 8 with a grey tag "not ohms yet: flip it back"; spoken "one over R is a half".
  (f) Home circuits: no mains voltage is said or shown. If one is added at review, it is 240 V with a grey "usual exam value" tag (FA3 root decision 25). Circuit breakers named in a tag only. Brightness is not compared (scene 11 lamps only switch on), so root decision 27's brightness item is left to v22 unless root moves it here.
  (g) Pronunciations: "R parallel"; "one over R".

Main question: *A 6.0 Ω and a 3.0 Ω resistor make 9.0 Ω in a line. Side by side, across the same supply, why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?*
Entry knowledge (v10 joules per coulomb; v11 coulombs per second; v13 lanes; v14 V = IR; v18 branches; v19 meters; v20 series rules and staircase).
Stops after: shared voltage; branch currents; I_parallel = I₁ + I₂ by conservation of charge; R_parallel less than the smallest branch; 1/R_parallel = 1/R₁ + 1/R₂ and its use; identical branches; another branch. No combination circuits.
Handoff: v22, combination circuits.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v20.

### 1. hook (side by side: more or less?)
> In a line, these two resistors make nine ohms. Now they're side by side, across the same twelve volt supply. You might think more resistors always means more resistance. So is the total still nine ohms, more than nine, or **less**?

Visual: opens on v20's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Parallel circuits: the two rules"; the memory line fades. On "In a line" a small ghost of the series loop with "9.0 Ω" beside the parallel circuit. On "more resistors always means more resistance" a chip "just add them: 9.0 Ω" (grey). On "less" chips "9.0 Ω?", "more?" and "less?" and a 3-second countdown ring.

### 2. every branch gets the full voltage
> Let's follow the energy. Both branches join the same two points, these junctions, where the path splits and rejoins. A coulomb arrives at the top junction with twelve joules, and it reaches the bottom one with none, whichever branch it takes. So each branch has the full twelve volts across it. Put a voltmeter across either branch, and it reads twelve **volts**.

Visual: camera continue; the ghost series loop fades. On "these junctions" the two junction dots pulse (gloss "junction: where the path splits or joins"; gloss "branch: one of the separate paths"). `VoltageStaircase` in branched mode: on "twelve joules" the level climbs across the supply to "12 J per coulomb" at the top junction; on "whichever branch it takes" two branch levels each step the full height down to "0 J per coulomb" at the bottom junction (tag "a volt is a joule per coulomb"). On "twelve volts" voltmeter circles across each branch fill "12 V" and "12 V". Grey tag: "each branch joined straight across the supply". Row "parallel: the same voltage across every branch", boxed.

### 3. each branch has its own current
> So each branch works out its own current, with I equals V over R. The six ohm branch has twelve volts across it: twelve over six is two amps. The three ohm branch: twelve over three is four amps. The smaller resistance carries the bigger current, even though both have the same **voltage**.

Visual: camera continue. A working panel: task "the current in each branch"; equation "I = V/R"; givens "V = 12 V across each branch; R₁ = 6.0 Ω; R₂ = 3.0 Ω". On "two amps" "I₁ = 12 ÷ 6.0 = 2.0 A" and the 6.0 Ω branch's ammeter fills "2.0 A"; on "four amps" "I₂ = 12 ÷ 3.0 = 4.0 A" and the 3.0 Ω branch's ammeter fills "4.0 A". `LoopFlow`: twice as many dots flow down the 3.0 Ω branch. On "voltage" a chip "the same voltage, so the same current" fades in and takes a grey scribble cross (site misconception 2).

### 4. the currents add at the junction
> Now the main lead, from the supply. All the charge in it reaches the top junction, and it can't build up there. So every coulomb that arrives each second has to leave along one branch or the other. That means the branch currents add up to the total: two plus four, six amps. I parallel equals I one plus I two. It's conservation of charge, at a **junction**.

Visual: camera continue. v11 `ChargeGate`s: one on the main lead before the top junction, one on each branch. On "can't build up there" the junction gets a tally "in = out" (tag "charge can't build up, from the series video"). On "leave along one branch or the other" the dots split at the junction, two to one; the branch gates read "2.0 C each second" and "4.0 C each second". On "six amps" the main gate reads "6.0 C each second" and the main ammeter fills "6.0 A"; at the bottom junction the dots rejoin. On "I parallel equals I one plus I two" the row "I_parallel = I₁ + I₂ (+ ⋯ + Iₙ)", boxed (gloss "total current: the current in the main lead").

### 5. the total resistance is smaller
> So what single resistance would draw six amps from twelve volts? R equals V over I: twelve over six, two ohms. That's not nine. It's less than either resistor on its **own**. In fact, a parallel total is always less than its smallest branch. So why would adding a path lower it?

Visual: camera continue. Working: task "the total resistance"; equation "R = V/I"; givens "V = 12 V; I_parallel = 6.0 A"; on "two ohms" "R_parallel = 12 ÷ 6.0 = 2.0 Ω", boxed (gloss "total resistance: the one resistance that would draw the same total current"). On "That's not nine" the "9.0 Ω?" chip and "more?" take grey scribble crosses; "less?" glows. On "on its own" a comparison row "2.0 Ω < 3.0 Ω < 6.0 Ω"; on "always less than its smallest branch" the row "R_parallel < the smallest branch", boxed.

### 6. why another path lowers it
> Here's why. The second branch doesn't block the first one. It adds another path, so the supply can push more charge through each second, for the same voltage. More current from the same voltage means less resistance. It's like the thicker wire: more lanes side by side, so less resistance. Every branch you add is another **lane**.

Visual: board change: the circuit moves left. On "doesn't block the first one" the 6.0 Ω branch alone is shown first, its gate reading "2.0 C each second", then the 3.0 Ω branch joins and the main gate rises to "6.0" while the first branch's gate stays at "2.0". On "More current from the same voltage" the row "same V, more I: less R". On "the thicker wire" v13's `WireSection` faces appear: the 6.0 Ω branch as one lane of a wire, the 3.0 Ω branch as two lanes of the same wire side by side (tag "twice the area, half the resistance, from the resistance video"); the three lanes together labelled "3 lanes: 6.0 ÷ 3 = 2.0 Ω". On "lane" a fourth faint lane fades in and out.

### 7. the reciprocal rule
> We can turn this into a rule. Start with the currents: I parallel equals I one plus I two. Each current is V over R, and every branch has the same V. So V over R parallel equals V over R one plus V over R two. Divide everything by V, and you get one over R parallel equals one over R one plus one over R **two**.

Visual: board change: `AlignedAlgebra` in the right column, the circuit small at the left, one line per cue: "I_parallel = I₁ + I₂"; on "Each current is V over R" "V/R_parallel = V/R₁ + V/R₂" (the three V's highlighted); on "Divide everything by V" the V's fade: "1/R_parallel = 1/R₁ + 1/R₂ (+ ⋯ + 1/Rₙ)", boxed (gloss "reciprocal: one over a number").

### 8. using the rule, and flipping back
> Let's use it on our circuit. One over six plus one over three. Make the bottoms the same: one sixth plus two sixths is three sixths, a half. So one over R is a half. That's not the answer yet. Flip it back: R is two ohms, just as we found from the currents. And it checks: twelve volts over two ohms gives the six amps we counted. Forgetting to flip back is the classic **slip**.

Visual: camera continue. Working: task "R_parallel for 6.0 Ω and 3.0 Ω"; equation "1/R_parallel = 1/R₁ + 1/R₂"; givens "R₁ = 6.0 Ω; R₂ = 3.0 Ω". One line per cue: "1/R = 1/6.0 + 1/3.0"; on "the bottoms the same" "= 1/6.0 + 2/6.0 = 3/6.0"; on "a half" "1/R = 0.50 Ω⁻¹" (grey tag "not ohms yet: flip it back"); on "Flip it back" "R = 6.0/3 = 2.0 Ω", boxed, with the scene 5 result "2.0 Ω ✓" beside it; on "it checks" "12 ÷ 2.0 = 6.0 A = I_parallel ✓". On "slip" a chip "R = 0.50 Ω" fades in and takes a grey scribble cross.

### 9. prediction: two equal branches
> Quick one. Two four ohm resistors, side by side. What's the total **resistance**?

Visual: board change: a small parallel circuit with two 4.0 Ω branches. On "resistance" chips "8.0 Ω?", "4.0 Ω?" and "2.0 Ω?" and a 3-second countdown ring.

### 10. half, with two equal lanes
> Two ohms. One quarter plus one quarter is two quarters, a half, so R is two. That's half of one resistor, which makes sense: two equal lanes instead of one. Three equal branches would give a third, and so **on**.

Visual: camera continue. On "One quarter plus one quarter" "1/R = 1/4.0 + 1/4.0 = 2/4.0"; "R = 4.0/2 = 2.0 Ω", boxed. The chip "2.0 Ω?" glows; "8.0 Ω?" and "4.0 Ω?" take grey scribble crosses. On "two equal lanes" two equal `WireSection` faces side by side. On "Three equal branches" a third branch and face fade in, "4.0 ÷ 3 = 1.3 Ω"; grey row "n equal branches: R ÷ n".

### 11. switching on another branch
> Back to our circuit. Add a third branch: a twelve ohm resistor. It has the full twelve volts, so it carries one amp of its own. The other branches still have twelve volts and the same resistance, so they still carry two and four amps. The total rises to seven amps, and the total resistance drops again, to about one point seven ohms. That's your home. Every appliance you switch on is another branch, adding its own current. That's why a circuit has a **limit**.

Visual: board change: the opening circuit returns with its readings. On "Add a third branch" a 12 Ω branch slides in between the junctions; its voltmeter "12 V" and the working "I₃ = 12 ÷ 12 = 1.0 A" (its ammeter fills "1.0 A"). On "still carry two and four amps" the two branch readings pulse, unchanged "2.0 A" and "4.0 A" (grey tag "the supply's voltage stays at 12 V"). On "seven amps" the main gate and ammeter count up to "7.0 A": "I_parallel = 2.0 + 4.0 + 1.0 = 7.0 A"; on "one point seven ohms" "R_parallel = 12 ÷ 7.0 = 1.7 Ω" (grey check "1/6.0 + 1/3.0 + 1/12 = 7/12, so 12/7 Ω"). A chip "the other branches lose current" fades in and takes a grey scribble cross. On "That's your home" the painted lamp (`phys-y11-filament-lamp-v1.png`) and two more lamp symbols in parallel; each switches on by code and the main gate ticks faster each time. On "limit" a grey tag "circuit breakers cut the supply if the total current gets too big".

### 12. memory aid
> To remember it, put the two side by side. Series: same current, split voltage. Parallel: same voltage, split current. And every branch you add lowers the total **resistance**.

Visual: the handwritten lines write large: "Series: same current, split voltage. Parallel: same voltage, split current. Every branch you add lowers the total resistance." On "Series" a small series loop thumbnail with its staircase; on "Parallel" the branched staircase and the splitting dots; on "lowers" the lanes add one more. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve volt battery is connected across a four ohm resistor and a twelve ohm resistor in parallel. Calculate the current in each resistor, the current drawn from the battery, and the total resistance. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A 12 V battery is connected across a 4.0 Ω resistor and a 12 Ω resistor connected in parallel. (a) Calculate the current in each resistor. (b) Calculate the current drawn from the battery. (c) Calculate the total resistance of the parallel combination. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Each resistor has the full twelve volts. Twelve over four is three amps, and twelve over twelve is one **amp**. The battery supplies the sum: four **amps**. For the total, one quarter plus one twelfth is four twelfths, so R is twelve over four: three ohms. Check: twelve volts over four amps is three ohms. Writing one third of an ohm forgets to flip **back**.

Visual: card shrinks to the top; "in parallel", "each resistor" and "total resistance" underlined. Rows: "(a) same V = 12 V: I = 12 ÷ 4.0 = 3.0 A; I = 12 ÷ 12 = 1.0 A"; on "amps" "(b) I_parallel = 3.0 + 1.0 = 4.0 A", boxed; "(c) 1/R = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12; R = 12/4 = 3.0 Ω", boxed; "check: 12 ÷ 4.0 = 3.0 Ω ✓". On "back" a chip "R = 1/3 = 0.33 Ω" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Two lamps are in parallel across a twelve volt battery, carrying one point five amps and half an amp. The battery's voltage stays at twelve volts. State the battery's current, and explain it using conservation of charge. Then a third lamp is connected in parallel. Explain what happens to the current in the one point five amp lamp, and to the battery's current. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "Two lamps are connected in parallel across a 12 V battery. The currents in the lamps are 1.5 A and 0.50 A. Assume the battery's voltage stays at 12 V. (a) State the current drawn from the battery, and explain your answer using conservation of charge. (b) A third lamp is then connected in parallel with the other two. Explain what happens to the current in the 1.5 A lamp and to the current drawn from the battery. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The battery supplies two amps. Charge can't build up at a junction, so the charge arriving each second equals the charge leaving along the two **lamps**. The one point five amp lamp still has twelve volts and the same resistance, so it still carries one point five **amps**. The battery's current goes up, by the new lamp's current. The current isn't shared out more thinly: each branch takes its **own**.

Visual: card shrinks to the top; "conservation of charge", "third lamp" and "stays at 12 V" underlined. Rows: "(a) 1.5 + 0.50 = 2.0 A"; on "lamps" "charge in each second at the junction = charge out along the branches", boxed; on "amps" "(b) 1.5 A lamp: same 12 V, same R: still 1.5 A", boxed; "battery: 2.0 A + the new lamp's current: increases", boxed. On "own" a chip "the 1.5 A lamp's current falls, because the current is shared between more lamps" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. handoff
> So now you can handle a line, or a set of branches. But real circuits mix them. Put a four ohm resistor in series with that parallel pair. Now it's part series, and part parallel. Which rule do you use? Could the pair be swapped for one **resistor**?

Visual: board change: the memory lines small at the top. The opening circuit's pair (6.0 Ω and 3.0 Ω in parallel) and the 12 V supply; on "Put a four ohm resistor in series" a 4.0 Ω resistor R₁ slides onto the main lead. On "part series, and part parallel" the main lead tints "series" and the pair tints "parallel". On "Which rule" chip "series, parallel, or both?"; on "resistor" a dashed box draws round the pair with a "? Ω" tag and the chip "swap the pair for one resistor?". Then the chip "Next: Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Parallel: every branch is joined across the same two points, so each branch has the full supply voltage.
2. Each branch current is I = V/R. The smaller resistance carries the bigger current.
3. Charge is conserved at a junction, so the branch currents add: I_parallel = I₁ + I₂ + ⋯ + Iₙ.
4. 1/R_parallel = 1/R₁ + 1/R₂ + ⋯ + 1/Rₙ. Add the reciprocals, then flip back. R_parallel is less than the smallest branch.
5. Adding a branch adds a path: the total current rises, the total resistance falls, and the other branches are unchanged (supply voltage fixed).

Memory aid (large, on the notes screen): *Series: same current, split voltage. Parallel: same voltage, split current. Every branch you add lowers the total resistance.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why each branch has the full voltage: both branches join the same two points, so a coulomb gives up the full 12 J whichever way it goes (2). Why the smaller resistance carries more current: the same voltage across each, I = V/R (3). Why the branch currents add: charge cannot build up at a junction (4). Why the total resistance is less than either branch: a second path adds current without blocking the first, so more current for the same voltage (5, 6). Why 1/R_parallel = 1/R₁ + 1/R₂: the current rule with I = V/R, divided by the common V (7). Why two equal branches halve it: twice the lanes (10). Why another branch raises the total current but leaves the others alone: each branch still has 12 V and its own resistance (11).
- **Misconceptions addressed:** add parallel resistances like series (1, 5; site misconception 1; "9.0 Ω?" crossed); the same voltage means the same current (3, chip crossed; site misconception 2); more resistors always mean more resistance (1, 5, 6; site hook); forgetting to flip back (8, feedback 1 crossed); the existing branches lose current when one is added (11, chip crossed; feedback 2 crossed; site odd one out D).
- **One idea at a time:** voltage (2), branch currents (3), the junction (4), total resistance (5), why (6), the rule (7), using it (8), equal branches (9, 10), adding a branch (11).
- **Video makes it easier:** the student sees the energy level step the full height down both branches (2), twice as many dots take the 3.0 Ω branch (3), gates read 2.0 and 4.0 in and 6.0 on the main lead (4), the first branch's gate stay at 2.0 as the second joins and the main gate climbs (6), lanes add side by side (6, 10), the V's fade out of the algebra (7), and a third branch slide in with the other readings unchanged while the main reading climbs to 7.0 A (11).
- **Response opportunity:** two 3 s predictions (1, 9); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("in parallel"; "12 V", "4.0 Ω", "12 Ω"; "1.5 A and 0.50 A"; "the battery's voltage stays at 12 V"; "in parallel with the other two"), nothing answer-bearing. One crossed mistake each; feedback about 29 s and 29 s.
- **Avoided double teaching:** v10's joules per coulomb (2), v13's lanes (6, 10), v14's V = IR (3, 5), v19's meters (2 to 4) and v20's staircase and "can't build up" (2, 4) are recalled in a phrase with tags. Series rules appear only in the hook's "9.0 Ω" and the memory aid's contrast.
- **Syllabus coverage:** `ci77bd4eb8`: 1/R_parallel = 1/R₁ + 1/R₂ + ⋯ used to calculate resistances (5 to 11, A1 (c)); `ci0b4ad0e3`: I_parallel = I₁ + I₂ + ⋯ explained (3, 4, 11, A1 (b), A2).
- **Out of scope by design:** combination circuits (v22); product over sum; internal resistance; fuse and breaker ratings.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A 12 V battery is connected across a 4.0 Ω resistor and a 12 Ω resistor connected in parallel. (a) Calculate the current in each resistor. (b) Calculate the current drawn from the battery. (c) Calculate the total resistance of the parallel combination."
Model answer: (a) In parallel each resistor has the full 12 V across it. I = V/R: 12 ÷ 4.0 = 3.0 A in the 4.0 Ω resistor; 12 ÷ 12 = 1.0 A in the 12 Ω resistor. (b) The branch currents add (charge is conserved at the junction): I_parallel = 3.0 + 1.0 = 4.0 A. (c) 1/R_parallel = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so R_parallel = 12/4 = 3.0 Ω (check: R = V/I = 12 ÷ 4.0 = 3.0 Ω; less than the smaller branch, 4.0 Ω). Classic mistake (crossed): "(c) R = 1/3 = 0.33 Ω" (stopping at the reciprocal).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** "Two lamps are connected in parallel across a 12 V battery. The currents in the lamps are 1.5 A and 0.50 A. Assume the battery's voltage stays at 12 V. (a) State the current drawn from the battery, and explain your answer using conservation of charge. (b) A third lamp is then connected in parallel with the other two. Explain what happens to the current in the 1.5 A lamp and to the current drawn from the battery."
Model answer: (a) 2.0 A. Charge cannot be created, destroyed or build up at the junction, so the charge arriving there each second from the battery equals the charge leaving each second along the two lamps: I = 1.5 + 0.50 = 2.0 A. (b) The 1.5 A lamp still has 12 V across it and the same resistance, so (I = V/R) it still carries 1.5 A. The third lamp adds another path with its own current, so the current drawn from the battery increases by that lamp's current (and the total resistance decreases). Classic mistake (crossed): "the 1.5 A lamp's current falls, because the current is shared between more lamps".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 6.0 Ω + 3.0 Ω = 9.0 Ω in series (v20) | 1, 5 |
| Opening circuit (site `we-1`) | 12 V; 6.0 Ω and 3.0 Ω in parallel | 1 to 8, 11 |
| Branch currents | 12 ÷ 6.0 = 2.0 A; 12 ÷ 3.0 = 4.0 A | 3, 4, 6, 11 |
| Total current | 2.0 + 4.0 = 6.0 A | 4, 5 |
| Total resistance | 12 ÷ 6.0 = 2.0 Ω; 1/6.0 + 2/6.0 = 3/6.0, 1/R = 0.50 Ω⁻¹, R = 2.0 Ω; crossed 0.50 Ω | 5, 6, 8 |
| Lanes | 3 lanes: 6.0 ÷ 3 = 2.0 Ω | 6 |
| Equal branches (site quick check) | 2 × 4.0 Ω: 2/4.0, R = 2.0 Ω; 3 × 4.0 Ω: 1.3 Ω | 9, 10 |
| Third branch | 12 Ω; 1.0 A; 2.0 + 4.0 + 1.0 = 7.0 A; 12 ÷ 7.0 = 1.7 Ω (12/7 = 1.714 Ω); 7/12 | 11 |
| A1 | 12 V; 4.0 Ω, 12 Ω; 3.0 A, 1.0 A; 4.0 A; 4/12, 3.0 Ω; crossed 0.33 Ω | 13, 14 |
| A2 | 12 V; 1.5 A, 0.50 A; 2.0 A; 1.5 A unchanged; battery current rises | 15, 16 |
| Handoff (site lesson 21 `we-1`) | 12 V; 4.0 Ω in series with 6.0 Ω and 3.0 Ω in parallel; "? Ω" | 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (fractions, 3 Nov); Codex to re-check.

- 12 ÷ 6.0 = 2.0; 12 ÷ 3.0 = 4.0; 2.0 + 4.0 = 6.0; 12 ÷ 6.0 = 2.0 Ω.
- 1/6 + 1/3 = 1/2; R = 2.0 Ω. 6.0 ÷ 3 = 2.0.
- 1/4 + 1/4 = 1/2; R = 2.0 Ω; 4.0 ÷ 3 = 1.33 Ω.
- 1/6 + 1/3 + 1/12 = 7/12; R = 12/7 = 1.714 Ω (1.7 Ω); 2.0 + 4.0 + 1.0 = 7.0; 12 ÷ 7.0 = 1.71.
- 12 ÷ 4.0 = 3.0; 12 ÷ 12 = 1.0; 3.0 + 1.0 = 4.0; 1/4 + 1/12 = 1/3; R = 3.0 Ω; 12 ÷ 4.0 = 3.0 Ω.
- 1.5 + 0.50 = 2.0.

## Memory aid check

- **"Series: same current, split voltage. Parallel: same voltage, split current. Every branch you add lowers the total resistance."** Adapted from the site's lesson 19 and lesson 20 hooks ("In series the current is shared by nobody and the voltage is shared by all"; "In parallel the voltage is shared by nobody and the current is shared by all"), whose "shared by nobody" could be heard as "nobody gets any"; the plain version keeps the mirror. Meaning, as said in scene 12: in series one current flows through every part and the supply's voltage is split between them (v20); in parallel every branch has the full voltage and the supply's current is split between the branches (2 to 4); each branch adds a path, so R_parallel falls (5, 6, 11). Assumptions checked: "split" means the parts add to the total, not that they are equal (3 shows unequal currents; v20 showed unequal voltages); "same voltage" holds for branches joined straight across a fixed supply (the grey tag in 2; A2's card); "lowers the total resistance" holds for any added branch of finite resistance. Introduced after both rules, the worked use and the added branch.
- **Lanes (scenes 6, 10).** From v13 (twice the area, half the resistance). Exact for identical branches of the same wire (author note c); spoken only for equal branches (10) and as "like the thicker wire" in 6, with the unequal case drawn as one lane and two lanes of the same wire, which matches the rule (2.0 Ω).

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,109 characters** (5,126 joined), 18 scenes. Characters per scene (1 to 18): 227, 359, 286, 354, 267, 327, 308, 375, 77, 208, 459, 171, 235, 348, 394, 393, 246, 75. At 13.3 characters per second the speech is about 384 s; add about 20 s of holds and settling (the branched staircase in 2, the gates in 4, the lanes in 6, the algebra lines in 7 and 8, the third branch and lamps in 11, the 2-second memory hold and the 2-second handoff hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 486 s**, inside the owner's 5 to 10 minute target. Nothing is added to reach 5,500: both points are complete.

## Scene list and build ids

Lesson key `p-y11-fa3-v21` (route phys-y11-fa3-v21). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v21` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v21` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, full-voltage, branch-currents, currents-add, total-resistance, why-less, reciprocal-rule, using-the-rule, prediction-equal-branches, equal-branches, another-branch, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v20's last frame continues into scene 1 (camera continue: the parallel circuit and chips carry over); 1 to 5 camera continue; 5 to 6 board change (the circuit moves left for the lanes); 6 to 7 board change (the algebra); 7 to 8 camera continue; 8 to 9 board change (the equal-branch circuit); 9 to 10 camera continue; 10 to 11 board change (the opening circuit returns); 11 to 12 fade; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v21-learning-review.md`, `science_check` = `checks/p-y11-fa3-v21-physics-check.md`.

## Assets

Reused: `phys-y11-low-voltage-supply-v1.png` (delivered; shown small beside the diagram in 1 as the real 12 V source); `phys-y11-filament-lamp-v1.png` (requested in `phys-y11-fa2-v13.md`, not yet delivered; 11, the home-circuit sentence, beside two lamp symbols).

New: none.

Checked first (3 Nov): `public/assets/physics/` has the bench supply; no resistor or lamp plate delivered. The explanation lives in the circuit diagram, the gates, the branched staircase and the lanes, which are abstract and coded; HSC parallel-circuit questions use the same diagrams.

Coded: circuits, meters and readings, charge dots splitting at junctions, gates and the junction tally, the branched staircase, lanes, working.

Kit gaps (for the next physics kit brief): `VoltageStaircase` branched mode, the `CircuitDiagram` "add branch" animation, the junction tally, `LoopFlow` splitting in proportion; lesson-local acceptable for Revision 1. v22 reuses all of them, plus the dashed reduction box.

## Codex asset brief

None for this video (no new plates).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: branches joined across the same two points of a fixed supply each have the full supply voltage; each branch current is V/R; charge is conserved at a junction, so I_parallel = I₁ + I₂ + ⋯; R_parallel = V/I_parallel is less than the smallest branch resistance; 1/R_parallel = 1/R₁ + 1/R₂ + ⋯ follows from the current rule with a common V; n identical branches give R ÷ n; adding a branch (supply voltage fixed) leaves the other branch currents unchanged, raises the total current and lowers R_parallel; household appliances are connected in parallel.
3. Confirm no combination-circuit reduction is done (the handoff only asks).
4. Confirm both attempt questions are original in wording, carry every condition (A2's fixed battery voltage), and give nothing away.
5. Confirm the two syllabus quotes match the syllabus JSON (equations rendered inline with subscripts, FA2 root decision 11) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v20.md` scene 16.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site correction 1 under Decisions to `../site-corrections-phys-y11.md` (owner record only; a precision note).

## YouTube metadata (draft)

Title: Parallel Circuits: Why More Branches Means Less Resistance | Year 11 Physics

(Title length: 75 characters.) Shorter option: "Parallel Circuits: Why Adding a Branch Lowers R | Year 11 Physics" (64 characters).

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson20.sa.html

A 6 ohm and a 3 ohm resistor make 9 ohms in a line. Put them side by side and the total drops to 2 ohms, less than either one. How can adding a resistor make it easier for current to flow? Follow the energy down both branches, watch the current split and rejoin at the junctions, and see where the rule 1/R = 1/R₁ + 1/R₂ comes from, including the step most students forget. Then find out why switching on another appliance at home draws more current while the others carry on as before. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Use the relationship between the total resistance and resistance in each branch of a parallel circuit, 1/R_parallel = 1/R₁ + 1/R₂ + ⋯ + 1/Rₙ to calculate resistances" (ci77bd4eb8)
"Explain the relationship between the total current of a parallel circuit and the current passing through each component using I_parallel = I₁ + I₂ + ⋯ + Iₙ" (ci0b4ad0e3)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Analysing series circuits (previous video). Next: Combination circuits.

#Year11Physics #Physics #ParallelCircuits #HSCScience

## Open decisions

- **1. Route question for v22 (proposal).** The handoff chip uses "Why can a parallel pair be swapped for one resistor, and how does that let you solve a mixed circuit?" (route placeholder "How can I explain and apply combination circuits?"; its point `ci463e276f` is "Solve problems involving voltage, current and resistance, in series, parallel and combination circuits"). The handoff circuit is site lesson 21's `we-1` (12 V, 4.0 Ω in series with 6.0 Ω and 3.0 Ω in parallel), so v22 can open on it directly. Root to enter the question, or align this chip to v22's designer's question.
- **2. Lanes for unequal branches (scene 6).** Drawn as one lane and two lanes of the same wire (6.0 Ω and 3.0 Ω), which matches the rule. If the review finds the picture over-claims for general unequal resistors, the drawing stays and the spoken line already limits itself to "like the thicker wire".
- **3. Home circuits (scene 11).** One sentence plus a grey breaker tag; no mains voltage. If the review finds it a detour, the three-lamp switch-on and the tag are the first cut (about 9 s); the 12 Ω branch still carries the point.
- **4. Title.** The 75-character title is over the 70-character habit; the 64-character option is offered.
- **5. Route refinement (root to record).** Question as above; start "Begin at v20's two resistors moved side by side; recall the series rules, the energy staircase and V = IR"; stop "Stop at the two parallel rules, R_parallel below the smallest branch and the effect of adding a branch; hand combination circuits to v22". Entry knowledge should add v13 (lanes), v19 and v20.
- **6. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v20 at Year 11 entry; check that the branched staircase makes "the same voltage" a reason; that the junction gates make "the currents add" visible; that "2.0 Ω, less than either" lands as a surprise answered by the extra path; that the algebra in 7 is one line per cue; that "flip back" is clear; that the added branch shows the others unchanged; that the attempts give nothing away), then the Codex physics check and error check.
- The branched staircase (2), the dots splitting two to one with the gates reading 2.0, 4.0 and 6.0 (4), the first branch's gate holding at 2.0 as the second joins (6), the V's fading from the algebra (7) and the third branch sliding in with the other readings unchanged (11) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): the spoken production phrase "and the next scene shows why" is gone. The scene now ends "In fact, a parallel total is always less than its smallest branch. So why would adding a path lower it?", a causal question the next scene answers. No learner text was added.
- Narration count: 5,133 characters (build parser rule), about 488 s with the stated holds (7 characters longer than the reviewed 5,126; within the cap).
