# Year 12 Physics M6 V15: High-voltage transmission. Why does stepping voltage up reduce transmission loss? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,842 characters, 17 scenes, about 526 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md` and `phys-y12-m6-v12.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson20.sa.txt`, hash checked against the live file): orient and retrieve (100 MW prediction, warm-up, intentions, vocabulary, misconceptions), derive loss scaling ("Why High Voltage?", power-adaptor hook, AEMO claim, P_loss = I²R, worked comparison 100 MW and 10 Ω, MC), map the grid chain (generator to home, text description, why AC, HVDC, true/false), work the loss ledger (worked example 500 MW and 2.0 Ω, MC, power ledger and trade-offs), compare trade-offs (Activity 1), synthesise AC and HVDC (Activity 2, odd one out, synthesis, key formulae, "Analyse 6 marks", "Assess 5 marks"), practice (Q1, Q2 and model answers), review and revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson20.sa.html`, SHA256 `398c60dd57647be6ffd7686ff9ec7b806309b3739a8ae010649dc99d28e88cb4` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v15`, sections `derive-loss-scaling`, `map-grid-chain`, `work-loss-ledger`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Keep delivered power and line resistance distinct, derive I=P/V and line heating I squared R, then step down for use. Stop before grid engineering details." Next: "phys-y12-m6-v16: How does a split-ring motor keep turning?"

Owner rules applied: as v07 and v12 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the power station, towers, substation, pole-top transformer, house, power point, lab power pack and motor are painted plates (two new here, one from v16's brief, the rest reused), scaled uniformly, never stretched; the line, current dots, resistor zigzag, transformer symbols, loss bars, graph and calculation strips are coded; every number recalculated in Python; data-sheet symbols P = VI, V = IR; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes; real Australian grid voltages with sources). Recalled, not re-taught: v13 (step-up and step-down, V_pI_p = V_sI_s), v14 (I²R heating in a resistance), v12 (transformers need a changing current, so AC), Year 11 (P = VI, V = IR, P = I²R, resistance grows with length).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-05`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-05`: "analyse applications of step-up and step-down transformers, including but not limited to:" "the distribution of energy using high-voltage transmission lines"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v14's final frame (power station, two towers, house, a long line with "R_line" and "P_loss = I²R ?"). Teaches: the prediction (the same power at double the voltage: the loss falls to a quarter); two different powers (P = VI carried, P_loss = I²R wasted) and two different voltages (the transmission voltage and the small drop along the line, IR); for fixed power, I = P/V; P_loss = (P/V)²R; double V, half I, a quarter of the loss; the site worked example (500 MW, 2.0 Ω: 250 kV gives 2000 A, 8.0 MW, 1.6%; 500 kV gives 1000 A, 2.0 MW, 0.4%) with a sending and receiving ledger; the surprise case at generator voltage (25 kV: 20 000 A, the formula says 800 MW, more than is sent, so the power cannot be delivered at all); the step-up transformer as the device that lowers the current (v13); stepping down in stages to 230 V for safe use, with real NSW voltages; why AC (transformers need a changing current); why not even higher (insulation, clearance, corona; a balance). Stops before three-phase supply, reactive power, grid control, HVDC detail and AC generators (v18 onwards).

## Decisions

- **Learner question (route wording kept).** "Why does stepping voltage up reduce transmission loss?" is causal. The answer, built in order: the line wastes power as I²R, which depends on the current in it, not on the transmission voltage (2); for the same power, a higher voltage needs a smaller current, I = P/V (3); the loss goes with the current squared, so it falls with the square of the voltage (4); a step-up transformer is what makes the current small (8); step-down transformers then make it safe to use (8).
- **Hook (site lesson 20 opening prediction and worked example values).** v14's line gets the site worked example's numbers: 500 MW, total line resistance 2.0 Ω, 250 kV or 500 kV. 3 s prediction: "double the voltage: loss doubles, halves, or a quarter?" Many students choose "doubles" (site misconception 1: "High-voltage transmission wastes more energy because voltage is higher"); the reveal comes after the derivation (scene 6), so the hook asks and the video answers.
- **Two powers, two voltages (site "Analyse 6 marks" step 2, "Assess 5 marks" step 3).** The site's single commonest error: conflating P = VI (carried) with P_loss = I²R (wasted), and the transmission voltage with the voltage drop along the line. Scene 2 labels them differently and in different colours (carried power amber, loss rose-red; the transmission voltage across the line's ends, the drop along it).
- **Derivation (route "derive I=P/V and line heating I squared R").** I = P/V (Year 11 P = VI rearranged); P_loss = I²R = P²R/V². Spoken: "double the voltage, half the current, a quarter of the loss" (site key principle). Assumption on screen: same power sent, same line.
- **Worked example (site `work-loss-ledger`, unchanged values).** Stage 1: 250 kV: 2000 A, 8.0 MW, 1.6%. Stage 2: 500 kV: 1000 A, 2.0 MW, 0.4%. The site's sending/receiving ledger kept: received 492 MW and 498 MW (route "keep delivered power and line resistance distinct"). Conversions MW to W and kV to V shown in the givens.
- **Surprise case (new, original values; author note a).** The same 500 MW at a generator voltage of 25 kV (the top of the site's 10 to 25 kV range): I = 20 000 A; I²R = 800 MW, more than the power sent. The narration says the formula's answer is impossible, which means that power could not be pushed down that line at all (the drop along the line would be 40 kV, more than the 25 kV supply). It makes the step-up transformer necessary, not a refinement. Kept short; open decision 1.
- **The grid chain (site `map-grid-chain`; Australian voltages with sources, author note b).** Generator (about 10 to 25 kV, site figure) → step-up transformer → transmission lines (500 kV and 330 kV in NSW, Transgrid) → substations stepping down (132, 66 or 33 kV, then 11 kV for street distribution, Ausgrid) → pole-top or ground-level transformer → 230 V nominal for homes (AS IEC 60038). Narration keeps the voltages few: "five hundred or three hundred and thirty thousand volts", "eleven thousand volts", "two hundred and thirty volts". Grid engineering detail (three-phase, 400 V between phases) is not taught (route stop).
- **Why AC (site "Why AC?"; v12 recalled).** Transformers need a changing current, so the grid is AC; one sentence that some long links, such as undersea cables, use high-voltage DC with electronic converters (site HVDC note), and that is all.
- **Why not higher (site "Analyse 6 marks" step 5, "Power ledger and trade-offs").** Higher voltages need more insulation, taller towers, wider clearances, and lose energy through corona (charge leaking into the air near the wires). The voltage chosen is a balance. Corona defined in a clause.
- **Memory aid (scene 11): "Double the voltage, half the current, a quarter of the loss."** The site's key principle, phrased for speech. See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a wind farm sends 132 MW through lines of total resistance 3.0 Ω, at 132 kV and at 330 kV: 1000 A and 3.0 MW; 400 A and 0.48 MW. Crossed: "330 is 2.5 times 132, so the loss is 3.0/2.5 = 1.2 MW" (scaling the loss linearly). A2 (3 marks): a student uses P = V²/R with V = 330 kV and R = 3.0 Ω and concludes higher voltage increases the loss. Explain the error. Crossed: "3.6 × 10¹⁰ W loss". The feedback shows that V²/R with the real drop along the line (IR = 1200 V) gives the same 0.48 MW.
- **Significant figures.** Site values kept as given (2000 A, 8.0 MW, 1.6%); original values to two significant figures (3.0 MW, 0.48 MW, 400 A).
- **Handoff (route next).** Scene 15 follows the energy to a school lab: the power point, a lab power pack (step-down transformer inside, DC output), leads to a simple DC motor whose coil spins; "How does a split-ring motor keep turning?". See "Final frame".
- **Colour key (root decision 1):** current orange; carried power amber; line loss and heat a warm red tint (as v14); line resistance ink zigzag; transformer symbols grey; voltages ink.
- **Site sources used:** lesson 20: prediction (100 MW, 5.0 Ω) as a screen check in scene 6; vocabulary "Transmission lines", "Power loss", "Substation", "Grid" (1, 8); misconceptions 1 and 2 (1, 9); "Why High Voltage?" (P_loss = I²R, doubling V quarters loss) (3, 4); grid chain and its text description (8); "Why AC?" and HVDC (9); worked example and ledger (5, 6); trade-offs (10); "Analyse 6 marks" (two powers, the step-up transformer's real role, the limit) (2, 8, 10); "Assess 5 marks" (P = VI applied to the wrong quantity; two voltages) (2, A2); key formulae (4, 16). Not used: the adaptor-warmth hook (touching a device); the AEMO paragraph (site note 1); Q1 (16 MW) and Activity 1 (8 MW, 2 MW) (checked only).
- **Site notes (quoted from site lesson 20, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Unsupported claim (lesson 20, `derive-loss-scaling`): "AEMO solves this by running the eastern Australian grid at 330–500 kV, ten to forty times the voltage a generator produces". AEMO operates the market and power system; transmission networks are owned and run by transmission companies (for example Transgrid in NSW), which use 500, 330, 220 and 132 kV. The ratio is also loose: with the page's own 10 to 25 kV generator range, 330 to 500 kV is about 13 to 50 times. Suggest: "Eastern Australian transmission networks use voltages such as 330 kV and 500 kV, roughly 13 to 50 times the 10 to 25 kV a generator produces, which reduces the current by the same factor and I²R losses by the square of that factor."
  2. Unsupported claim (lesson 20, review): "At the start you were asked about AEMO's eastern Australian grid 2022: why did they choose 500 kV rather than 100 kV ... AEMO chose 500 kV specifically because of this ... relationship". The opening prediction does not mention AEMO or 2022, and the "AEMO chose" history is unsourced (see note 1). Suggest removing the AEMO and 2022 references and keeping the arithmetic (1000 A, 5 MW, 5%; 200 A, 0.2 MW, 0.2%; ratio 25), which is correct.
  3. Inconsistency (lesson 20): the prediction and review use R = 5.0 Ω for the 100 MW case (5 MW and 0.2 MW), while the "Why High Voltage?" worked comparison uses R = 10 Ω for the same 100 MW case (10 MW and 0.4 MW). Both are arithmetically correct; a student comparing them may think one is wrong. Suggest a note "with R = 10 Ω this time" or one value throughout.
  4. Precision note (lesson 20, misconception 1 "✓ Right"): fine. Precision note ("Assess 5 marks" step 3): "The power lost in the cables is governed by the much smaller voltage drop along the cables themselves, which gives P_loss = I²R": correct; no change.
  5. Checked and correct: MC (400 MW, 400 kV, 5.0 Ω: 5.0 MW); worked example (2000 A, 8.0 MW, 1.6%; 1000 A, 2.0 MW, 0.4%); Activity 1 (1000 A, 8.0 MW, 4.0%; 500 A, 2.0 MW, 1.0%; factor 4); Q1 (2000 A, 16 MW, 2.0%); true/false items; nominal 230/400 V.
- **Cause chain taught, in order:** (1) the line's resistance wastes power as heat, P_loss = I²R (2); (2) that loss depends on the current, not on the transmission voltage (2); (3) for fixed power, a higher voltage means a smaller current (3); (4) the loss goes with the current squared, so with one over the voltage squared (4); (5) at low voltage the current would be so large that the power could not be delivered at all (7); (6) a step-up transformer raises the voltage by lowering the current (8); (7) step-down transformers lower it again in stages for safe use (8); (8) AC is used because transformers need a changing current (9); (9) the voltage is a balance with insulation and corona (10).
- **Entry knowledge (route `entryKnowledge`):** v14 (I²R heating), v13 (transformer ratios), v12 (AC needed); Year 11: P = VI, V = IR, P = I²R, resistance grows with length.
- **Learner-visible vocabulary (plain meaning at first use):** transmission lines (the high-voltage lines that carry electricity long distances, 1); line resistance (the total resistance of the wires, 1); power loss (power wasted as heat in the lines, 2); substation (a site with transformers that step the voltage up or down, 8); grid (the connected network of power stations, lines and substations, 8); corona (energy lost as electric charge leaks into the air near very high-voltage wires, 10).
- **Legacy logic ported:** none. The coded family `m6-transformer-grid` ("Transform voltage to reduce losses"; limits: "fixed transmitted power; resistive line; no three-phase calculation") supplies the generator, step-up, line and step-down chain and the fixed-power loss ledger, within its stated limits.
- **New explainer motion:** **transmission line** (v14's handoff line, extended: current dots whose density and speed follow I, a resistor zigzag "R_line", a warm tint whose strength follows I²R, end-to-end voltage labels and a small drop label along the line); **loss ledger** (sending power bar, a loss slice in warm red, receiving power bar); **current-voltage graph** (`DataGraph`: P_loss against V for fixed P and R, a 1/V² curve with points at 25, 250 and 500 kV; the 25 kV point off the top of the scale with an arrow); **grid chain** (plates in a row with coded transformer symbols between them and voltage tags that write on stage by stage, current dots changing density at each transformer); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the line or chain across the middle; the ledger and graph below or to the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) 25 kV case: with a 25 kV sending voltage and 2.0 Ω, the maximum power that could be delivered to any load is V²/4R = 78 MW, so 500 MW is impossible; the I = P/V model assumes the sending voltage holds, which breaks down. The narration says "you couldn't push that much power down the line at all". The 25 kV and 2.0 Ω pairing is an original thought experiment built on the site's example, tagged "thought experiment".
  (b) Sources for the chain: Transgrid (NSW transmission network operates mainly at 500, 330, 220 and 132 kV; https://www.transgrid.com.au/ and https://en.wikipedia.org/wiki/Transgrid); Ausgrid network standards (sub-transmission 33, 66 and 132 kV; distribution 11 kV; https://www.ausgrid.com.au/asp-and-contractors/technical-document-library); AS IEC 60038:2022 (nominal 230/400 V; https://store.standards.org.au/). Generator voltage "about 10 to 25 kV" is the site's figure, typical of large generators; on screen it is "about 10 to 25 kV" (open decision 2).
  (c) The simple model treats the line as one resistance and a fixed sending power; real lines are three-phase with reactance (not taught).
  (d) Corona: ionisation of air near conductor surfaces at very high fields; also noise and radio interference (not taught).
  (e) Pronunciations: "kilovolts", "megawatts"; "I squared R"; "Transgrid" not spoken.
- **Open decisions for root:**
  - **1. The 25 kV thought experiment (scene 7) (learning review, science check).** Original, beyond the site; vivid and accurate within author note a. Keep, or cut to one sentence ("at generator voltage the current would be huge") if long.
  - **2. Generator voltage range (root or Codex).** "About 10 to 25 kV" comes from the site without a source. Confirm with a generator datasheet (for example a NSW coal or hydro unit) or drop the number from scene 8's screen tag.
  - **3. New plates `y12p-substation-v1` and `y12p-pole-transformer-v1` (Codex).** If not made, coded transformer symbols stand in at those stages (the chain still reads, but the "real places" moment is lost).
Main question: *Same power, same wires, twice the voltage. Does the line waste more, or less?*
Entry knowledge: I²R heating (v14); transformer ratios (v13); AC needed (v12); P = VI, V = IR (Year 11).
Stops after: two powers and two voltages, I = P/V, I²R, the worked example and ledger, the low-voltage surprise, the grid chain with real voltages, why AC, why not higher. No three-phase or grid control.
Handoff: v16, how a split-ring motor keeps turning.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *P*, *V*, *I*, *R*, *P_loss*.

### 1. hook (double the voltage)
> Here's the line from last time. A power station sends five hundred megawatts to a city, along wires with a total resistance of two point zero ohms. It could send that power at two hundred and fifty thousand volts, or at five hundred thousand volts. If we double the voltage, what happens to the power wasted in the line? Does it double, halve, or drop to a **quarter**? Hold on to your answer. A lot of people guess it doubles. More voltage, more loss. Let's see why stepping the voltage up actually reduces transmission **loss**.

Visual: opens on v14's final frame (see "Opening frame"); the chip becomes the heading: "Why does stepping voltage up reduce transmission loss?". On "five hundred megawatts" a tag at the power station "P = 500 MW". On "two point zero ohms" the "R_line" label becomes "R_line = 2.0 Ω (total)". On "two hundred and fifty thousand volts" a tag "250 kV"; on "five hundred thousand volts" a second tag "or 500 kV". On "quarter" a 3 s `Countdown` beside chips "doubles", "halves", "a quarter". On "A lot of people guess it doubles" the "doubles" chip pulses (no tick yet). On "loss" the chips shrink to the corner, unresolved (they are answered in scene 6).

### 2. two powers, two voltages
> First, keep two powers apart. The power the line carries to the city is P equals V I, where V is the transmission voltage. But the power wasted in the line is something different. It's the heating in the wires' resistance, I squared **R**. And there are two voltages too. V is the voltage between the line and the ground at the power station. The voltage that actually heats the wire is the small drop along its length, I **R**. So the loss depends on the current in the wire, not on how high the voltage **is**.

Visual: the line zooms in. On "P equals V I" an amber tag at the sending end "P = VI (power carried)". On "I squared R" a warm red tag along the line "P_loss = I²R (power wasted in the line)"; the two tags are in different colours and boxes. On "the voltage between the line and the ground" a tall ink bracket at the sending end "V = 250 kV (transmission voltage)". On "the small drop along its length" a short ink bracket along a section of the line "drop along the line = IR"; the two brackets visibly differ in size (tag "not to scale"). On "how high the voltage is" the "I" in "I²R" pulses with the current dots; tag "loss depends on I".

### 3. same power, smaller current
> Now, for a fixed power, the current depends on the voltage. Rearrange P equals V I, and the current is P over **V**. So the same five hundred megawatts can travel as a big current at a low voltage, or a small current at a high **voltage**. Double the voltage, and the current **halves**.

Visual: on "P over V" `AlignedAlgebra` "I = P / V". On "voltage" the line shows two states one above the other: "low V: big I" (dense, fast orange dots) and "high V: small I" (sparse dots), both with the same amber "500 MW" tag. On "halves" a slider "V × 2" makes the dots halve; tag "I ÷ 2".

### 4. the square does the work
> And here's the key. The loss is I squared R, so it goes with the square of the current. Put I equals P over V into it, and the loss is P squared R over V **squared**. Half the current gives a quarter of the loss. A tenth of the current gives one hundredth of the **loss**. That square is why high voltage is worth **it**.

Visual: on "I squared R" the equation strip "P_loss = I²R". On "squared" `AlignedAlgebra` "P_loss = (P/V)² R = P²R / V²" with the V² in the denominator boxed. On "Half the current gives a quarter of the loss" a two-column table: "I × ½ → P_loss × ¼". On "loss" a second row "I × 1/10 → P_loss × 1/100". On "worth it" a `DataGraph` "P_loss against V (fixed P, fixed R)": a falling 1/V² curve, axes labelled, no values yet; tag "same power, same line".

### 5. worked example: two hundred and fifty kilovolts
> Let's put numbers on our line. Five hundred megawatts, two point zero ohms, at two hundred and fifty kilovolts. The current is five hundred million watts over two hundred and fifty thousand volts, which is two thousand **amps**. The loss is two thousand squared, times two point zero, which is eight point zero **megawatts**. That's one point six per cent of the power **sent**.

Visual: board change to the working layout, the line small at the top left. Task strip: "Find the line current, the power loss and the percentage lost." Equation strip: "I = P / V; P_loss = I²R; % loss = P_loss / P × 100". Givens grouped: "P = 500 MW = 500 × 10⁶ W", "R = 2.0 Ω (total line)", "V = 250 kV = 250 × 10³ V". On "amps" `AlignedAlgebra` "I = 500 × 10⁶ / 250 × 10³ = 2000 A". On "megawatts" "P_loss = 2000² × 2.0 = 8.0 × 10⁶ W = 8.0 MW". On "sent" "8.0 / 500 × 100 = 1.6%"; the ledger bar beside it: "sent 500 MW", a thin red slice "8.0 MW lost", "received 492 MW".

### 6. worked example: five hundred kilovolts
> Now double the voltage to five hundred kilovolts. The current halves, to one thousand **amps**. The loss is one thousand squared, times two point zero, which is two point zero **megawatts**. Just zero point four per cent. Doubling the voltage cut the loss to a **quarter**. So if you guessed a quarter in the hook, you were **right**.

Visual: stage 1 results shrink to one line at the top ("250 kV: 2000 A, 8.0 MW, 1.6%"), kept for comparison. On "amps" "I = 500 × 10⁶ / 500 × 10³ = 1000 A". On "megawatts" "P_loss = 1000² × 2.0 = 2.0 × 10⁶ W = 2.0 MW". On "Just zero point four per cent" "2.0 / 500 × 100 = 0.4%"; a second ledger bar "received 498 MW" beside the first. On "quarter" "8.0 MW → 2.0 MW: × ¼" with a bracket between the two lines. On "right" the hook's "a quarter" chip returns and ticks; the "doubles" chip is crossed. Screen check (no narration, 3 s, small): "site prediction: 100 MW, 5.0 Ω: 100 kV → 5 MW (5%); 500 kV → 0.2 MW (0.2%); × 1/25".

### 7. what if we didn't step up at all?
> Here's a surprise. Big generators make electricity at around twenty five thousand volts or less. What if we sent our five hundred megawatts at twenty five kilovolts? The current would be twenty thousand amps, and I squared R gives eight hundred **megawatts**. That's more than we're sending. The answer is impossible, and that's the point. You couldn't push that much power down the line at **all**.

Visual: the `DataGraph` returns with points at 250 kV (8.0 MW) and 500 kV (2.0 MW) on the curve. On "twenty five kilovolts" a third point is sought at 25 kV; the curve shoots off the top of the axes with an arrow, tag "thought experiment". On "megawatts" `AlignedAlgebra` beside it "I = 500 × 10⁶ / 25 × 10³ = 20 000 A; I²R = 20 000² × 2.0 = 8.0 × 10⁸ W = 800 MW". On "That's more than we're sending" "800 MW > 500 MW" in red. On "down the line at all" a chip "drop along the line would be IR = 40 kV, more than the 25 kV supply: impossible" (small), and the line's warm tint saturates and greys out.

### 8. transformers make it happen
> So we need the voltage up, and that's the job of a step-up transformer. Remember, it raises the voltage by lowering the current, with the same power on both **sides**. In New South Wales, the main transmission lines run at five hundred or three hundred and thirty thousand **volts**. Near the city, substations step it down in stages, to eleven thousand volts for the **streets**. Then a transformer on a pole, or in a box on the ground, steps it down to two hundred and thirty volts, safe to use at **home**.

Visual: board change to the grid chain, built left to right as it is spoken: the power station plate (`phys-y11-power-station-v2.png`) tag "generator: about 10 to 25 kV"; a coded step-up transformer symbol. On "sides" the transformer symbol shows "V up, I down, P same (video 13)"; orange dots thin out after it. On "volts" the tower plates (`phys-y11-transmission-tower-v1.png`) and line, tag "transmission: 500 kV or 330 kV (NSW)". On "streets" the substation plate (`y12p-substation-v1.png`), tag "substations: step down to 132, 66 or 33 kV, then 11 kV"; dots denser after it. On "home" the pole-top transformer plate (`y12p-pole-transformer-v1.png`) then the house plate (`phys-y11-house-v1.png`), tag "230 V (nominal)"; dots densest. Source tag at the bottom of the chain, small: "Transgrid; Ausgrid; AS IEC 60038".

### 9. why the grid is AC
> And this is why the grid uses alternating current. Transformers only work with a changing current, as we saw in video twelve, so AC lets us step the voltage up and down easily. Some very long links, like cables under the sea, do use high-voltage DC, but they need expensive electronic converters at each **end**.

Visual: the chain stays; on "alternating current" small "~" tags appear on every stage; on "Transformers only work with a changing current" the step-up symbol pulses with circulating slate flux arrows (mini v12 recall). On "at each end" a small inset: an undersea cable line between two coded converter boxes, tag "HVDC: converters at each end"; it fades.

### 10. why not even higher?
> So why not a million volts, or more? Higher voltages need more insulation, taller towers and wider gaps to the ground. And near very high-voltage wires, the air itself starts to leak charge, called corona, which wastes energy too. So the voltage is chosen as a **balance**.

Visual: one tower plate enlarges. On "more insulation" its insulator strings highlight and lengthen (coded overlay); on "taller towers" a dashed taller outline grows above the tower; on "wider gaps to the ground" a clearance bracket widens. On "corona" a faint violet glow outlines the line's wires, tag "corona: charge leaks into the air". On "balance" a balance icon: "lower I²R loss" on one pan, "cost of insulation, towers and corona" on the other.

### 11. a way to remember
> Here's a way to remember it. Double the voltage, half the current, a quarter of the loss. It works when the power sent and the line stay the **same**.

Visual: board clears to the line; on "Double the voltage" a "V × 2" tag; on "half the current" the dots thin, "I ÷ 2"; on "a quarter of the loss" the warm tint fades to a quarter, "P_loss ÷ 4". On "same" the handwritten line writes large: "Double the voltage, half the current, a quarter of the loss." with a small condition tag "same power, same line". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A wind farm sends one hundred and thirty two megawatts through transmission lines with a total resistance of three point zero ohms. Calculate the current and the power lost if it's transmitted at one hundred and thirty two kilovolts. Then calculate the power lost at three hundred and thirty kilovolts. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A wind farm transmits 132 MW of power through transmission lines with a total resistance of 3.0 Ω. (a) Calculate the current in the lines and the power lost in them if the power is transmitted at 132 kV. (b) Calculate the power lost if the same power is transmitted at 330 kV. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> At one hundred and thirty two kilovolts, the current is one thousand amps, and the loss is one thousand squared times three point zero, three point zero **megawatts**. At three hundred and thirty kilovolts, the current is four hundred amps, so the loss is four hundred squared times three point zero, zero point four eight **megawatts**. The classic slip is dividing the loss by two point five. The current drops two point five times, so the loss drops two point five **squared**.

Visual: card shrinks to the top; "132 MW", "3.0 Ω", "132 kV" and "330 kV" underline. On the first "megawatts" "(a) I = 132 × 10⁶ / 132 × 10³ = 1000 A; P_loss = 1000² × 3.0 = 3.0 MW". On the second "megawatts" "(b) I = 132 × 10⁶ / 330 × 10³ = 400 A; P_loss = 400² × 3.0 = 4.8 × 10⁵ W = 0.48 MW". On "squared" a chip "3.0 / 2.5 = 1.2 MW" fades in and is crossed (caption "3.0 / 2.5² = 0.48 MW"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. For the three hundred and thirty kilovolt line, a student uses P equals V squared over R, with V as three hundred and thirty thousand volts and R as three point zero ohms. They conclude that raising the transmission voltage increases the loss. Explain the student's error. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "For the 330 kV transmission in the previous question, a student calculates the power lost in the lines using P = V²/R, with V = 330 kV and R = 3.0 Ω. The student concludes that raising the transmission voltage increases the power lost. Explain the error in the student's reasoning. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> In V squared over R, V must be the voltage across the resistance, the small drop along the line. That's I R, four hundred times three point zero, just twelve hundred **volts**. Twelve hundred squared over three point zero gives zero point four eight megawatts, the same answer as **before**. The slip is using the transmission voltage, which gives an impossible thirty six thousand **megawatts**.

Visual: card shrinks to the top; "V = 330 kV" and "P = V²/R" underline. On "volts" "V across the line = IR = 400 × 3.0 = 1200 V" with the short bracket from scene 2. On "before" "P_loss = 1200² / 3.0 = 4.8 × 10⁵ W = 0.48 MW ✓ (same as I²R)". On "megawatts" a chip "330 000² / 3.0 = 3.6 × 10¹⁰ W" fades in and is crossed (caption "use the drop along the line, not the transmission voltage"). Hold about 1 second.

### 16. handoff
> So stepping the voltage up makes the current small, and that cuts the I squared R loss by the square. Then step-down transformers bring it back to two hundred and thirty volts. Follow that energy into a school lab. A lab power pack steps it down again, and turns it into DC. Connect a simple motor, and its coil **spins**. So how does a split-ring motor keep **turning**?

Visual: board clears (camera change) to a short chain: the power point plate (`phys-y11-power-point-v1.png`) tag "230 V", a coded lead to the lab power pack plate (`phys-y11-low-voltage-supply-v1.png`) with a small coded cut-away showing a closed-core transformer symbol and a tag "step-down, then DC out", and two coded leads (red and black) from its terminals to the simple DC motor plate (`y12p-dc-motor-model-v1.png`, requested in `phys-y12-m6-v16.md`). On "spins" a coded amber curved arrow round the motor's axle starts circulating (the plate itself does not rotate). On "turning" a "?" appears over the motor's split ring and brushes, and a chip "Next: how does a split-ring motor keep turning?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Power carried: P = VI (V = transmission voltage). Power wasted in the line: P_loss = I²R (R = total line resistance). Different quantities.
2. Fixed power: I = P/V, so P_loss = P²R/V². Double V, half I, a quarter of the loss.
3. Example: 500 MW, 2.0 Ω: 250 kV: 2000 A, 8.0 MW (1.6%); 500 kV: 1000 A, 2.0 MW (0.4%).
4. Step-up transformer at the power station (V up, I down); step-down in stages (substations, 11 kV, pole-top) to 230 V. NSW transmission: 330 kV and 500 kV.
5. AC because transformers need a changing current. Voltage limited by insulation, tower height, clearance and corona.

Memory aid (large, on the notes screen): *Double the voltage, half the current, a quarter of the loss.*

## Teaching checks

- **Does it explain causes?** Why the line heats: current through resistance (2). Why voltage matters: for fixed power it sets the current (3). Why the effect is so large: the square (4). Why transformers: they lower the current (8). Why AC: transformers need changing current (9). Why not higher: insulation, clearance, corona (10).
- **Misconceptions addressed:** higher voltage wastes more energy (1, 6 crossed chip); P = VI is the loss (2); V²/R with the transmission voltage (15 crossed); the loss scales linearly with voltage (13 crossed); the grid steps voltage down in one go (8).
- **One idea at a time:** the question (1), two powers and two voltages (2), I = P/V (3), the square (4), example stage 1 (5), stage 2 (6), the surprise (7), the chain (8), AC (9), the limit (10).
- **Video makes it easier:** the current dots thinning as the voltage rises (3, 8, 11); the warm tint fading with I² (4, 11); the two voltage brackets of different sizes (2, 15); the ledger bars (5, 6); the curve shooting off the axes (7); dots changing density at each transformer (8).
- **Response opportunity:** one prediction (3 s, answered in scene 6) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** I²R (v14, Year 11), transformer ratios (v13), AC need (v12) recalled in a clause each.
- **Syllabus coverage:** `P6-IQ3-05`: "analyse applications of step-up and step-down transformers": "the distribution of energy using high-voltage transmission lines" (1 to 10, 12 to 15).
- **Out of scope by design:** three-phase supply, reactance, grid control, HVDC detail (route stop); AC generators (v18).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A wind farm transmits 132 MW of power through transmission lines with a total resistance of 3.0 Ω. (a) Calculate the current in the lines and the power lost in them if the power is transmitted at 132 kV. (b) Calculate the power lost if the same power is transmitted at 330 kV."
Model answer: (a) I = P/V = 132 × 10⁶ / 132 × 10³ = 1000 A; P_loss = I²R = 1000² × 3.0 = 3.0 × 10⁶ W = 3.0 MW. (b) I = 132 × 10⁶ / 330 × 10³ = 400 A; P_loss = 400² × 3.0 = 4.8 × 10⁵ W = 0.48 MW (6.25 times smaller, (330/132)² = 6.25). Classic mistake (crossed): 3.0/2.5 = 1.2 MW.

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "For the 330 kV transmission in the previous question, a student calculates the power lost in the lines using P = V²/R, with V = 330 kV and R = 3.0 Ω. The student concludes that raising the transmission voltage increases the power lost. Explain the error in the student's reasoning."
Model answer: In P = V²/R, V must be the potential difference across the resistance R, which is the voltage drop along the line, V = IR = 400 × 3.0 = 1200 V, not the 330 kV transmission voltage. Then P_loss = 1200²/3.0 = 4.8 × 10⁵ W = 0.48 MW, the same as I²R. For fixed transmitted power, raising the transmission voltage lowers the current (I = P/V) and so lowers the loss (P_loss = I²R). Classic mistake (crossed): 330 000²/3.0 = 3.6 × 10¹⁰ W.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example (site) | 500 × 10⁶ / 250 × 10³ = 2000 A; 2000² × 2.0 = 8.0 × 10⁶ W; 8.0/500 = 1.6%; received 492 MW; 500 × 10⁶ / 500 × 10³ = 1000 A; 1000² × 2.0 = 2.0 × 10⁶ W; 0.4%; received 498 MW; ratio ¼ | 1, 5, 6, 17 |
| Drop along the line (example, not spoken except in 7) | 2000 × 2.0 = 4000 V at 250 kV; 1000 × 2.0 = 2000 V at 500 kV | author check |
| Site prediction (screen check) | 100 MW, 5.0 Ω: 100 kV: 1000 A, 5.0 MW, 5%; 500 kV: 200 A, 0.2 MW, 0.2%; ratio 25 | 6 |
| Surprise (thought experiment) | 500 × 10⁶ / 25 × 10³ = 20 000 A; 20 000² × 2.0 = 8.0 × 10⁸ W = 800 MW; IR = 40 000 V; V²/4R = 7.8 × 10⁷ W | 7 |
| Grid chain (sourced) | about 10 to 25 kV (site); 500 kV, 330 kV (Transgrid); 132, 66, 33 kV, 11 kV (Ausgrid); 230 V (AS IEC 60038) | 8, 17 |
| Scaling | ½ → ¼; 1/10 → 1/100 | 4 |
| A1 | 132 × 10⁶ / 132 × 10³ = 1000 A; 1000² × 3.0 = 3.0 MW; 132 × 10⁶ / 330 × 10³ = 400 A; 400² × 3.0 = 0.48 MW; (330/132)² = 6.25; slip 3.0/2.5 = 1.2 MW | 12, 13 |
| A2 | IR = 400 × 3.0 = 1200 V; 1200²/3.0 = 4.8 × 10⁵ W; slip 330 000²/3.0 = 3.63 × 10¹⁰ W (spoken "thirty six thousand megawatts") | 14, 15 |
| Site checks | 400 MW, 400 kV, 5.0 Ω: 5.0 MW; Activity 1: 8.0 MW (4%), 2.0 MW (1%); Q1: 2000 A, 16 MW, 2.0%; 100 MW with 10 Ω: 10 MW, 0.4 MW; 330/25 = 13.2, 500/10 = 50 | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 500e6/250e3 = 2000; 2000² × 2.0 = 8.0e6; 8.0/500 × 100 = 1.6; 500 − 8 = 492.
- 500e6/500e3 = 1000; 1000² × 2.0 = 2.0e6; 2.0/500 × 100 = 0.4; 500 − 2 = 498.
- 100e6/100e3 = 1000; 1000² × 5 = 5.0e6 (5%); 100e6/500e3 = 200; 200² × 5 = 2.0e5 (0.2%); 5.0/0.2 = 25.
- 500e6/25e3 = 20 000; 20 000² × 2.0 = 8.0e8; 20 000 × 2.0 = 40 000; 25e3²/(4 × 2.0) = 7.8125e7.
- 132e6/132e3 = 1000; 1000² × 3.0 = 3.0e6; 132e6/330e3 = 400; 400² × 3.0 = 4.8e5; (330/132)² = 6.25; 3.0/2.5 = 1.2.
- 400 × 3.0 = 1200; 1200²/3.0 = 4.8e5; 330e3²/3.0 = 3.63e10.

## Memory aid check

- **"Double the voltage, half the current, a quarter of the loss."** Meaning, as said in scene 11: for a fixed transmitted power through the same line, doubling the transmission voltage halves the line current (I = P/V) and quarters the line loss (P_loss = I²R). Assumptions checked: fixed power sent and fixed line resistance (said aloud: "It works when the power sent and the line stay the same"); the simple model holds (the loss is a small fraction, scene 7 shows where it breaks); it is the site's own key principle ("Double V → half I → quarter P_loss"). It generalises: tripling gives a ninth (A1 uses a factor 2.5, giving 6.25). Introduced after the explanation (3 to 6).
- **Considered, not used:** "High volts, low amps, low loss" (true but drops the square).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,842 characters**, 17 scenes. Characters per scene (1 to 17): 522, 500, 275, 309, 366, 318, 391, 493, 308, 269, 146, 335, 468, 304, 384, 363, 75. At 13.3 characters per second the speech is about 439 s; add about 3 s for the prediction countdown, 3 s for the scene 6 screen check, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 526 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7 (open decision 1); scene 9's HVDC sentence; scene 4's one-hundredth sentence.

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m6-v14.md`): paper background; a wide view: the power station plate at the left, the house plate at the right, two transmission tower plates between them carrying one long coded line; orange current dots along the line; a coded resistor zigzag labelled "R_line"; a warm tint along the line; tag "P_loss = I²R ?"; no values; heading "Why are real transformers less efficient than the ideal model?"; chip "Next: why does stepping voltage up reduce transmission loss?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; left to right: the power point plate (`phys-y11-power-point-v1.png`) with a tag "230 V"; a coded lead to the lab power pack plate (`phys-y11-low-voltage-supply-v1.png`) with a small coded cut-away window showing a closed-core transformer symbol and a tag "step-down, then DC out"; red and black coded leads from its terminals to the simple DC motor plate (`y12p-dc-motor-model-v1.png`: two magnets, a rectangular coil on an axle, a split-ring commutator and two brushes); a coded amber curved arrow circulating round the motor's axle; a "?" over the split ring and brushes; heading unchanged ("Why does stepping voltage up reduce transmission loss?"); a chip reads "Next: how does a split-ring motor keep turning?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v15` (route phys-y12-m6-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v15` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, two-powers, current-falls, square, worked-250kv, worked-500kv, no-step-up, grid-chain, why-ac, why-not-higher, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: transmission line (current dots, resistor zigzag, warm tint, voltage brackets), loss ledger, `DataGraph` (P_loss against V), grid chain, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 camera continue (same line); 4 to 5 clear change to the working layout; 5 to 6 to 7 camera continue; 7 to 8 clear change to the chain; 8 to 9 to 10 camera continue; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), scene 6 screen check (3 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v15-learning-review.md`, `science_check` = `checks/p-y12-m6-v15-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-power-station-v2.png` (1774 × 887, RGBA): 1 to 8 (it shows a small switchyard at its right, where the coded step-up symbol attaches).
- `public/assets/physics/phys-y11-transmission-tower-v1.png` (1071 × 1469, RGBA): 1 to 10 (one scale for all copies).
- `public/assets/physics/phys-y11-house-v1.png`: 1, 8.
- `public/assets/physics/phys-y11-power-point-v1.png` (1536 × 1024, RGBA): 16.
- `public/assets/physics/phys-y11-low-voltage-supply-v1.png` (1600 × 1000, RGBA): 16.
- **Checked, not used:** `phys-y11-power-station-v1.png` (v2 has the cleaner switchyard); `phys-y11-desk-fan-v1.png` (a mains fan is usually an AC motor, so it would mislead as the split-ring handoff).

Need (new plates):
1. `y12p-substation-v1.png` (new): 8.
2. `y12p-pole-transformer-v1.png` (new): 8.
3. `y12p-dc-motor-model-v1.png` (specified in `phys-y12-m6-v16.md`'s asset brief, not requested twice): 16.

Coded: the line, current dots, resistor zigzag, warm tint, voltage brackets, power tags, ledger bars, the P_loss graph, transformer symbols, "~" tags, the HVDC inset, insulator and clearance overlays, corona glow, balance icon, cut-away window, leads, rotation arrow, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v15 build brief):
1. **Transmission line.** Dot density and speed driven by I = P/V; tint strength driven by I²R; two voltage brackets (across the line to ground, along the line).
2. **Grid chain.** Plates in a row with transformer symbols between them and per-stage voltage tags; dot density changes at each transformer.

## Codex asset brief

1. **`y12p-substation-v1.png`** (new). A painted Australian zone substation seen from outside its fence, three-quarter view: one large outdoor power transformer (grey tank with cooling fins and three tall bushings on top), a short gantry with insulator strings, a section of chain-wire fence in front. Accurate, uncluttered; no people, no hands, no vehicles, no text, no signage, no brand names. Transparent PNG with alpha channel, about 1800 × 1000, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-power-station-v2.png` and `phys-y11-transmission-tower-v1.png` (painted, neutral daylight, clean edges, similar line weight).
2. **`y12p-pole-transformer-v1.png`** (new). A painted Australian pole-top distribution transformer: a timber power pole with a cross-arm, three high-voltage insulators, a grey cylindrical transformer tank mounted on the pole with its bushings, and low-voltage wires leaving to one side. Side view, full pole height. No people, no hands, no text, no brand names. Transparent PNG with alpha channel, about 900 × 1600 (portrait), object centred with even margins. Style: as item 1; at the same drawing scale as `phys-y11-transmission-tower-v1.png` looks right when the pole is shown about half the tower's height.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: two powers and two voltages; I = P/V for fixed power; P_loss = P²R/V²; the worked example and ledger; the 25 kV thought experiment and "you couldn't push that much power down the line at all" (author note a); the step-up transformer lowering the current; the staged step-down; why AC; HVDC with converters; insulation, clearance and corona.
3. Confirm the Australian voltages against the sources in author note b (500 and 330 kV, NSW transmission; 132, 66, 33 and 11 kV, Ausgrid; 230 V nominal) and flag open decision 2 (generator voltage).
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing (A2 refers to the previous question's line; both stay on screen in sequence, and A2's card repeats the 330 kV and 3.0 Ω values).
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: High-Voltage Transmission: Why Stepping Voltage Up Cuts Power Loss | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson20.sa.html

Double the transmission voltage and the power wasted in the lines falls to a quarter. See why the power carried (P = VI) and the power wasted (I²R) are different quantities, how a higher voltage means a smaller current for the same power, why the square makes the saving so big, what would happen if we skipped the step-up transformer, and how voltages are stepped down in stages to 230 V. A full worked example and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse applications of step-up and step-down transformers, including but not limited to: the distribution of energy using high-voltage transmission lines"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: real transformer losses. Next: how a split-ring DC motor keeps turning.

#HSCPhysics #Physics #PowerTransmission #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13 and v14; check that the two voltage brackets in scene 2 land; that the prediction is answered clearly in scene 6; that the 25 kV surprise helps rather than confuses; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The current dots thinning with voltage, the tint fading with the square, the ledger bars and the curve shooting off the axes carry the explanation; judge them at playback speed in the voiced preview.
