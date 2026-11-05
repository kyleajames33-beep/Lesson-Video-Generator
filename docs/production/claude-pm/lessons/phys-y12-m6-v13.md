# Year 12 Physics M6 V13: Ideal transformers. How does a transformer exchange voltage for current? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,041 characters, 16 scenes, about 541 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v12's final frame.

Scope: thirteenth video of Year 12 Physics Module 6 (Electromagnetism, Physics Stage 6, 2017 syllabus), inquiry question "How are electric and magnetic fields related?". Templates as `phys-y12-m6-v07.md` and `phys-y12-m6-v12.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module6-lesson15.sa.txt`, hash checked against the live file): orient and retrieve (100 to 200 turns prediction, warm-up, intentions, vocabulary), explain mutual induction (12 V DC versus AC observation, five-step mechanism, transformer equations, step-up and step-down table, Stop and Check, MC, "Why transformers need AC", key insight, true/false), calculate ideal ratios (interactive MC, worked example "Transformer Calculations", MC), analyse real efficiency (four losses, HSC tip, odd one out), extension: mutual induction without a shared core, AC, switched DC and ideal limits, apply and consolidate (Activities 1 and 2, summary, MC, "Analyse 6 marks", "Evaluate 6 marks"), practice (Q1, Q2 and model answers), review: `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson15.sa.html`, SHA256 `83b406d627f4831289898b4a6d547e95d2073a8247be5f879363b251a2c1dc9a` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m6-v13`, section `calculate-ideal-ratios`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Derive ideal turns/voltage and inverse current ratios from common flux and power; compare loaded and ideal assumptions. Stop before losses." Next: "phys-y12-m6-v14: Why are real transformers less efficient than the ideal model?"

Owner rules applied: as v07 and v12 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the transformer schematic, flux arrows, power bars, graphs and calculation strips are coded, HSC style; the real transformer, the lab power pack, the power point and the transmission tower are painted plates (one new, the rest reused), scaled uniformly, never stretched; every number recalculated in Python; syllabus and data-sheet symbols V_p/V_s = N_p/N_s and V_pI_p = V_sI_s; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes). Recalled, not re-taught: v12 (mutual induction, the closed iron core, AC needed), v10 (Faraday's law, ε = −NΔΦ/Δt), v11 (Lenz's law), Year 11 (P = VI, power as energy per second).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ3-03`), quoted from the route JSON `syllabusActions`:

- `P6-IQ3-03`: "analyse quantitatively the operation of ideal transformers through the application of: (ACSPH110)" "(V_(p))/(V_(s))=(N_(p))/(N_(s))", "V_(p)I_(p)=V_(s)I_(s)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 57)

**Boundary:** starts on v12's final frame (closed iron core, N_p on an AC source, N_s on a lamp, "V_p ?", "V_s ?", "I_p ?", "I_s ?"). Teaches: the ideal model's three assumptions (all flux links both coils, no resistance in the windings, no energy lost in the core); every turn of both coils sees the same changing flux, so each turn has the same emf (volts per turn); V_p = N_p ΔΦ/Δt and V_s = N_s ΔΦ/Δt, so V_p/V_s = N_p/N_s; step-up and step-down; the frequency is unchanged; ideal means power in equals power out, V_pI_p = V_sI_s; so the current ratio is the inverse of the turns ratio; the load sets the current (no load, almost no primary current; with a load, the secondary current's opposing field makes the primary draw more); the site worked example (1200 to 60 turns, 230 V, 0.50 A: 11.5 V, 10 A, 115 W). Stops before efficiency, copper heating, eddy currents, flux leakage and lamination (v14) and transmission (v15).

## Decisions

- **Learner question (route wording kept).** "How does a transformer exchange voltage for current?" is causal and names the trade. The answer, built in order: the same changing flux passes through every turn, so voltage is shared out per turn and follows the turns (2, 3); an ideal transformer loses no energy, so power in equals power out (5); so if the voltage goes up, the current must come down by the same factor (6); and the load decides how much current flows, with the primary following it (7).
- **Hook (site lesson 15's opening prediction, re-staged).** v12's closed-core schematic gets the site's numbers: 100 primary turns, 200 secondary turns, 10 V AC. 3 s prediction: "bigger, smaller or the same?" Then the twist: the lamp draws 0.50 A, and the primary draws 1.0 A, more than the secondary. "Double the voltage, half the current." The surprise frames the question as a trade, not a gift.
- **Derivation (route "derive ideal turns/voltage ... from common flux"; site key insight "both coils experience the same rate of change of flux").** Volts per turn: each turn of either coil has emf ΔΦ/Δt (magnitude, v10). The secondary's voltage is N_s ΔΦ/Δt. For the primary, the narration says one sentence: the changing flux also passes through the primary's own turns and, in an ideal coil with no resistance, the emf in those turns matches the supply voltage (author note a). Dividing cancels ΔΦ/Δt. The minus signs are dropped (magnitudes), said on screen only.
- **Ideal assumptions on screen (route "compare loaded and ideal assumptions"; site "AC, switched DC and ideal limits").** A three-item "ideal" card appears in scene 2 and is ticked against each step: all flux links both coils (used in 2), no resistance (used in 2 and 5), no energy lost in the core (used in 5). v14 opens by questioning them.
- **Power and the inverse current ratio (site "Analyse 6 marks" steps 4 and 5: "a conservation statement, not a separate formula"; "cannot increase both").** Power as energy per second, P = VI, from Year 11, in a clause. I_p/I_s = N_s/N_p is derived on screen from the two relations, not memorised.
- **The load sets the current (route "compare loaded and ideal assumptions"; new causal detail, author note b).** No load: the ideal primary draws almost no current, because the emf in its own turns balances the supply. Lamp connected: the secondary current's field opposes the flux change (v11, v12's Lenz scene), so the primary draws extra current to keep the flux changing as the supply demands. This answers the real question students ask ("how does the primary know?") and stops "the transformer pushes 10 A" errors. The magnetising current is not taught (author note b).
- **Frequency unchanged (site "Analyse 6 marks" step 5).** One sentence in scene 3: the output alternates at the supply's frequency, 50 hertz in Australia (author note c).
- **Real examples (owner: real context; scene 3).** Step-down: the school lab power pack (`phys-y11-low-voltage-supply-v1.png`) has a step-down transformer inside that turns 230 V from the power point (`phys-y11-power-point-v1.png`) into a few volts. Step-up: at power stations, transformers step voltage up for transmission lines (`phys-y11-transmission-tower-v1.png`), named only; v15 develops it. The site's "phone chargers" example is not used (author note d).
- **Worked example (site lesson 15 "Transformer Calculations", 230 V throughout).** The site's problem says 230 V but its solution uses 240 V (logged by v12 as site note 1). This design uses 230 V, the Australian nominal low-voltage supply (AS IEC 60038; site lesson 20 also uses nominal 230/400 V), throughout: V_s = 230 × 60/1200 = 11.5 V; I_s = 230 × 0.50/11.5 = 10 A; P = 115 W on both sides. This also matches the site's own Q1 model answer for the same transformer. Three stages, one at a time, with V_s kept on screen for stage 2.
- **Memory aid (scene 9): "Volts follow the turns. Current goes the other way."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): 200 to 3000 turns, 24 V AC, secondary supplies 0.40 A: V_s = 360 V, I_p = 6.0 A. Crossed: I_p = 0.40/15 = 0.027 A (current scaled the same way as voltage). A2 (3 marks, evaluate): "a step-up transformer that raises the voltage ten times also raises the power ten times". Crossed: "ten times the power".
- **Significant figures.** Site values kept as given (11.5 V, 10 A, 115 W); original values to two significant figures (360 V, 6.0 A).
- **Handoff (route next).** Scene 15 returns to the worked-example transformer with "P_in = 115 W" and "P_out = 115 W (ideal)"; the ideal card's three ticks turn to "?"; chip "Next: why are real transformers less efficient than the ideal model?". See "Final frame".
- **Colour key (root decision 1):** primary current orange; flux in the core slate; secondary emf and current rose; the core grey; power bars amber; turns counters ink.
- **Site sources used:** lesson 15: predict (100 and 200 turns, 10 V AC) (1); vocabulary "Transformer", "Primary coil", "Secondary coil", "Step-up", "Step-down" (3); mechanism and key insight "same rate of change of flux" (2); transformer equations and step table (2 to 6); "Analyse 6 marks" steps 3 to 5 (cancelling ΔΦ/Δt, conservation statement, "cannot increase both", frequency) (2, 5, 6, 10); worked example (7, 8); Stop and Check (230 V, 400 to 800 turns: 460 V) as a screen check in scene 3; MC (I_p from 240 V, 12 V, 5.0 A) not used (its 240 V clashes with the 230 V decision). Not used: losses, efficiency, laminations, air-core extension (v14, v12).
- **Site notes (quoted from site lesson 15, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Error (already logged by v12, site note 1; repeated because this video uses the example): worked example "Transformer Calculations": the problem says "The primary is connected to 230 V AC and draws 0.50 A", but the solution's givens use "$V_p = 240$ V" and give 12 V, 10 A, 120 W. This video uses 230 V throughout: 11.5 V, 10 A, 115 W.
  2. Error (already logged by v12, site note 3): interactive MC "100 primary turns and 500 secondary turns. A 230 V input gives an output of: 48 V, 230 V, 1 200 V, 2 400 V": 230 × 500/100 = 1 150 V, not offered.
  3. Inconsistency (new): the MC after the worked example ("$V_p = 240$ V, $V_s = 12$ V, and $I_s = 5.0$ A") and "Analyse 6 marks" ("connected to a 240 V AC supply") use 240 V while the rest of the lesson and lesson 20 use the Australian nominal 230 V. Arithmetic is correct (0.25 A; 1200 V). Correction: use 230 V or say "a 240 V supply" is an example value, not the Australian mains.
  4. Precision note (new): step-down table "Example use: Phone chargers". Most modern phone chargers are switch-mode supplies: they rectify the mains and use a small transformer at a much higher frequency, not a 50 Hz iron-core step-down transformer of the kind modelled. Suggest "plug-in power packs and doorbell transformers" or "phone chargers (which use a small high-frequency transformer)".
  5. Checked and correct: Stop and Check (460 V, step-up); MC (100 V); Q1 (11.5 V, 10 A); Activity 1 (240 V, 60 V, 120 V, 13 200 turns); activity check (300 V); "Analyse 6 marks" arithmetic (1200 V, I_s = I_p/5).
- **Cause chain taught, in order:** (1) more secondary turns give more volts, but less current (1); (2) all the flux links both coils, so every turn has the same emf (2); (3) so each coil's voltage is its number of turns times the volts per turn, and V_p/V_s = N_p/N_s (2); (4) step-up and step-down follow (3); (5) ideal means no energy lost, so power in equals power out (5); (6) so the current changes the opposite way to the voltage (6); (7) the load draws the secondary current, and its opposing field makes the primary draw the matching current (7).
- **Entry knowledge (route `entryKnowledge`):** v12 (mutual induction, closed core, AC needed); v10 (Faraday's law); v11 (Lenz's law); Year 11: P = VI, power as energy per second, AC.
- **Learner-visible vocabulary (plain meaning at first use):** turns (the loops of wire in a coil, 1); ideal transformer (a model with no energy lost and all the flux shared, 2); volts per turn (the emf in one turn, 2); step-up and step-down transformer (raises or lowers the voltage, 3); load (whatever the secondary supplies, here a lamp, 5); frequency (how many times a second the AC reverses, 3).
- **Legacy logic ported:** none. The coded family `m6-transformer-grid` ("shared changing flux and reciprocal current ratio") supplies the closed-core schematic, turns counters and the power ledger; its transmission part is v15's.
- **New explainer motion:** **closed-core transformer** (v12's coded schematic, extended: drawn turns that can be counted or labelled, slate flux arrows circulating at a rate linked to an AC cursor, per-turn emf tags "ΔΦ/Δt" that can multiply along a winding, a voltage readout per coil, orange primary current dots and rose secondary current dots whose speed shows current, a lamp symbol that lights with the load switch); **ideal card** (three assumptions with ticks); **power bars** (two amber bars, P_in and P_out, equal heights in the ideal model); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the transformer across the upper middle; the ideal card top-right; algebra and power bars below; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Ideal primary: with zero winding resistance and complete coupling, Kirchhoff's voltage law around the primary gives V_p = N_p dΦ/dt in magnitude, so the supply voltage sets the rate of change of flux. The narration says "in an ideal coil with no resistance, the emf in those turns matches the supply voltage" and does not name self-induction (as v12, author note a).
  (b) No-load and loaded primary current: an ideal transformer with infinite core permeability draws zero current at no load; a real one draws a small magnetising current. With a load, the secondary's ampere-turns oppose the flux change; the primary draws extra current so that N_pI_p = N_sI_s (ideal), keeping the flux set by V_p. The narration says "almost no current" at no load.
  (c) Australian mains: nominal 230 V, 50 Hz (AS IEC 60038). A transformer cannot change the frequency.
  (d) Phone chargers: see site note 4.
  (e) Pronunciations: "V p", "N s" letter by letter; "emf" letter by letter; "A C"; "hertz".
- **Open decisions for root:**
  - **1. The load-sets-the-current scene (7) (learning review, science check).** It goes beyond the site's text but answers the causal "how does the primary know?" and links to v11 and v12. Keep, or cut to "the load decides the current" (one sentence) if the voiced take runs long.
  - **2. 230 V throughout (root).** This design follows the brief: 230 V, with site notes 1 to 3 logged. If root prefers 240 V to match the site's solution, every value in scenes 7, 8 and 15 changes (12 V, 10 A, 120 W).
  - **3. New plate `y12p-transformer-v1` (Codex).** A painted demonstration transformer, also requested for v14's lamination close-up. If not made, scene 2's real-device moment is cut and the coded schematic carries the scene.
Main question: *More turns, more volts. So why does the current go down?*
Entry knowledge: mutual induction and the closed core (v12); Faraday's law (v10); Lenz's law (v11); P = VI (Year 11).
Stops after: volts per turn, the voltage ratio, step-up and step-down, power in equals power out, the inverse current ratio, the load setting the current, the worked example. No losses.
Handoff: v14, why real transformers are less efficient than the ideal model.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *V_p*, *V_s*, *N_p*, *N_s*, *I_p*, *I_s*.

### 1. hook (more turns, more volts, less current)
> Last time we wound two coils on one closed iron core. Let's put numbers on it. The primary has one hundred turns, and it's connected to ten volts AC. The secondary has two hundred turns, twice as many. Will the secondary's voltage be bigger, smaller, or the same? Make your **prediction**. It's twenty volts, twice as big. So does the transformer give us something for free? Connect a lamp, and it draws half an amp. Now look at the primary. It draws one whole **amp**. Twice the voltage, half the current. So how does a transformer exchange voltage for **current**?

Visual: opens on v12's final frame (see "Opening frame"); the chip becomes the heading: "How does a transformer exchange voltage for current?". On "one hundred turns" the label "N_p" becomes "N_p = 100"; on "ten volts AC" "V_p ?" becomes "V_p = 10 V"; on "two hundred turns" "N_s" becomes "N_s = 200". On "prediction" a 3 s `Countdown` beside chips "bigger", "smaller", "the same". On "twenty volts" "V_s ?" becomes "V_s = 20 V" and the "bigger" chip ticks. On "half an amp" the lamp lights, rose dots run in the secondary circuit and "I_s ?" becomes "I_s = 0.50 A". On "amp" orange dots in the primary leads speed up and "I_p ?" becomes "I_p = 1.0 A". On "half the current" the two pairs pulse: "V: × 2" and "I: ÷ 2" tags. On "current" a small balance icon tag "trade, not a gift". Labels used: "N_p", "N_s", "V_p", "V_s", "I_p", "I_s" (data-sheet symbols).

### 2. same flux, same volts per turn
> Start with the voltages. In an ideal transformer, all the flux goes round the core, so it passes through every turn of both coils. Every turn sees the same changing flux, so by Faraday's law, every turn gets the same emf, delta phi over delta t. Think of it as the volts per **turn**. The secondary's voltage is its number of turns, times the volts per **turn**. The primary works the same way. The changing flux passes through its turns too, and in an ideal coil with no resistance, the emf in those turns matches the supply **voltage**. So both voltages are turns times the same volts per turn. Divide one by the other, and the flux change **cancels**. V p over V s equals N p over N **s**.

Visual: the lamp dims to a ghost; the values fade to labels. The ideal card writes on at the top right: "Ideal transformer: (1) all flux links both coils (2) no resistance in the windings (3) no energy lost in the core". On "all the flux goes round the core" slate flux arrows circulate round the closed loop and pass through both windings; card item 1 ticks. On "every turn gets the same emf" one turn on each winding highlights rose with a small tag "ΔΦ/Δt" on each. On the first "turn" a chip "volts per turn = ΔΦ/Δt". On the second "turn" the "ΔΦ/Δt" tags copy along every turn of the secondary and add up: "V_s = N_s ΔΦ/Δt". On "voltage" the same tags run along the primary's turns: "V_p = N_p ΔΦ/Δt" (orange outline); card item 2 ticks. On "cancels" `AlignedAlgebra` divides the two lines and the two "ΔΦ/Δt" strike through (tag "magnitudes"). On "V p over V s equals N p over N" the result boxes: "V_p / V_s = N_p / N_s". A brief inset (left, small, about 3 seconds while the voltage lines write): the painted transformer plate `y12p-transformer-v1.png`, label "a real transformer: two windings on a closed iron core", then it fades.

### 3. step-up and step-down
> So the voltage follows the turns. More turns on the secondary, and the voltage goes up. That's a step-up **transformer**. Fewer turns on the secondary, and the voltage goes down. That's a step-down **transformer**. The lab power pack has one inside, turning two hundred and thirty volts from the power point into a few volts for your **experiment**. And at power stations, step-up transformers raise the voltage for the transmission **lines**. One thing never changes. The output alternates at the same frequency as the supply, fifty hertz in **Australia**.

Visual: the schematic shrinks to the left. On the first "transformer" a small schematic with a long secondary winding, tag "step-up: N_s > N_p, V_s > V_p". On the second "transformer" a second small schematic with a short secondary winding, tag "step-down: N_s < N_p, V_s < V_p". On "experiment" the power point plate (`phys-y11-power-point-v1.png`) and the lab power pack plate (`phys-y11-low-voltage-supply-v1.png`) slide in, joined by a coded lead; a coded cut-away window on the power pack shows a tiny closed-core symbol, tags "230 V in" and "a few volts out", "step-down". On "lines" the transmission tower plate (`phys-y11-transmission-tower-v1.png`) appears beside the step-up schematic, tag "step-up for transmission (video 15)". On "Australia" the two AC traces at the primary and secondary of the main schematic run in step, different heights, same period; tag "same frequency: 50 Hz". Screen check (no narration, 3 s): "400 → 800 turns, 230 V: V_s = 230 × 800/400 = 460 V, step-up" (site Stop and Check).

### 4. why not more volts and more current?
> If more turns give more volts, why not more current as well? Then we'd get more power out than we put in. And a transformer has no fuel and no battery. All its energy comes from the supply, carried by the changing **field**.

Visual: the main schematic returns with the hook's values. A tempting chip "V_s up and I_s up?" fades in. On "more power out than we put in" two amber power bars appear: "P_in" short, "P_out" tall, and the tall bar shakes; tag "energy from nothing?". On "field" the bar shrinks back and the chip is crossed; an energy strip under the schematic: "supply (orange) → changing flux (slate) → secondary (rose)" (as v12 scene 4).

### 5. power in equals power out
> Power is energy per second, and from Year 11, power is voltage times current. Our ideal transformer loses no energy, so every second, the energy into the primary all comes out of the **secondary**. Power in equals power out. V p times I p equals V s times I **s**. Check it with the hook. Ten volts times one amp is ten watts **in**. Twenty volts times half an amp is ten watts **out**.

Visual: on "power is voltage times current" a small chip "P = VI (Year 11)". On "no energy" card item 3 ticks. On "secondary" the two amber bars level at equal heights, labels "P_in" and "P_out", tag "ideal: P_in = P_out". On "V p times I p equals V s times I" the equation strip writes "V_p I_p = V_s I_s". On "ten watts in" "P_in = 10 V × 1.0 A = 10 W" under the primary. On "ten watts out" "P_out = 20 V × 0.50 A = 10 W" under the secondary; the bars tick equal.

### 6. so current goes the other way
> Now put the two rules together. The voltage goes up by the turns ratio, and the power stays the same. So the current has to go down by the same **ratio**. In symbols, I p over I s equals N s over N p. The turns are **flipped**. A step-up transformer steps the current down, and a step-down transformer steps the current **up**. It can't raise both. That's the exchange, voltage for **current**.

Visual: the two boxed rules sit side by side: "V_p/V_s = N_p/N_s" and "V_pI_p = V_sI_s". On "ratio" `AlignedAlgebra`: "I_p/I_s = V_s/V_p = N_s/N_p". On "flipped" the N_s and N_p in the last fraction swap places with an arc arrow (tag "flipped"). On "steps the current up" a two-row table: "step-up: V up, I down"; "step-down: V down, I up". On "current" the balance icon from scene 1 tips: one pan "V", the other "I", with "P fixed" on the beam.

### 7. the load decides the current
> So who decides how big the currents are? The load does, the thing the secondary is supplying. With nothing connected, no current flows in the secondary, and an ideal primary draws almost no current, because the emf in its own turns balances the **supply**. Now connect the lamp. Current flows in the secondary, and by Lenz's law, its field opposes the changing **flux**. To keep the flux changing as the supply demands, the primary draws extra **current**. A bigger load draws more current from the secondary, so the primary draws **more**.

Visual: the schematic, lamp disconnected (the secondary circuit has a coded open switch). On "With nothing connected" "I_s = 0" and the rose dots stop; the primary's orange dots almost stop, tag "no load: I_p ≈ 0 (ideal)"; on "supply" the "V_p" and "N_p ΔΦ/Δt" tags at the primary pulse together, tag "balanced". On "Now connect the lamp" the switch closes (it changes state; no hand), the lamp lights and rose dots run. On "flux" a rose arrow "secondary's field" inside the core points against the slate flux arrows, tag "opposes the change (Lenz)". On "current" the orange dots in the primary speed up and a short orange arrow "primary's extra field" cancels the rose arrow; the slate flux arrows keep their size; tag "flux change kept: set by V_p". On "more" a second lamp is added in parallel: rose dots faster, orange dots faster; tag "load draws I_s → primary supplies I_p".

### 8. worked example: the secondary voltage
> Let's do a full example. A step-down transformer has twelve hundred primary turns and sixty secondary turns. The primary is connected to two hundred and thirty volts AC and draws zero point five zero amps. Find the secondary voltage, the secondary current and the power **delivered**. Start with the voltage. Use V p over V s equals N p over N s, and rearrange for V s. Two hundred and thirty, times sixty over twelve hundred, is eleven point five **volts**. That's a twenty to one step-down.

Visual: board change to the working layout, the schematic small at the top left (1200 and 60 turns drawn as a long and a short winding). Task strip: "Find V_s, I_s and the power delivered." Equation strip: "V_p / V_s = N_p / N_s; V_pI_p = V_sI_s". Givens grouped: "N_p = 1200, N_s = 60" (turns), "V_p = 230 V AC, I_p = 0.50 A" (primary), tag "ideal". On "delivered" the task strip's three unknowns highlight. On "rearrange for V s" `AlignedAlgebra` "V_s = V_p × N_s / N_p". On "volts" "V_s = 230 × 60 / 1200 = 11.5 V" (boxed); tag "20 : 1 step-down".

### 9. worked example: current and power
> Now the current. The power is the same on both sides, so I s equals V p I p over V s. That's two hundred and thirty, times zero point five zero, over eleven point five, which is ten **amps**. Check it with the turns ratio. The voltage went down twenty times, so the current goes up twenty times, zero point five zero times twenty is ten amps **again**. And the power is eleven point five times ten, which is one hundred and fifteen watts, the same as two hundred and thirty times zero point five **zero**.

Visual: "V_s = 11.5 V" stays at the top of the working (needed for stage 2); the stage 1 lines fade. On "I s equals V p I p over V s" `AlignedAlgebra` "I_s = V_pI_p / V_s". On "amps" "I_s = 230 × 0.50 / 11.5 = 10 A" (boxed). On "again" a check line "I_s = I_p × N_p/N_s = 0.50 × 20 = 10 A ✓". On "zero" "P_out = V_sI_s = 11.5 × 10 = 115 W" and "P_in = V_pI_p = 230 × 0.50 = 115 W" side by side; the amber bars return beside them, equal; tag "ideal: 115 W in, 115 W out".

### 10. a way to remember
> Here's a way to remember it. Volts follow the turns. Current goes the other way. And if you're ever unsure, check that the power in matches the power **out**.

Visual: board clears to the step-up and step-down schematics side by side with arrows: on "Volts follow the turns" "N up → V up" pulses on both; on "Current goes the other way" "N up → I down" pulses. On "matches the power out" the handwritten line writes large: "Volts follow the turns. Current goes the other way." with a small check line under it "P_in = P_out (ideal)". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An ideal transformer has two hundred turns on its primary and three thousand turns on its secondary. The primary is connected to a twenty four volt AC supply, and the secondary supplies zero point four zero amps to a load. Calculate the secondary voltage and the current in the primary. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An ideal transformer has 200 turns on its primary coil and 3000 turns on its secondary coil. The primary is connected to a 24 V AC supply. The secondary supplies a current of 0.40 A to a load. (a) Calculate the secondary voltage. (b) Calculate the current in the primary coil. (3 marks)" A small coded transformer diagram with the turns labelled. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The turns ratio is fifteen, so the voltage steps up to twenty four times fifteen, three hundred and sixty **volts**. Power in equals power out, so the primary current is three hundred and sixty times zero point four zero, over twenty four, which is six point zero **amps**. The classic slip is dividing the current by fifteen. A step-up transformer steps the current **down**, so the primary carries the bigger current.

Visual: card shrinks to the top; "200 turns", "3000 turns", "24 V" and "0.40 A" underline. On "volts" "(a) V_s = 24 × 3000/200 = 360 V". On "amps" "(b) I_p = V_sI_s / V_p = 360 × 0.40 / 24 = 6.0 A" (check line "= 0.40 × 15"). On "down" a chip "I_p = 0.40 / 15 = 0.027 A" fades in and is crossed (caption "voltage up, current down: primary current is bigger"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A student says, a step-up transformer that raises the voltage by a factor of ten also raises the power by a factor of ten. Evaluate this claim for an ideal transformer. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student states: 'A step-up transformer that increases the voltage by a factor of 10 also increases the power by a factor of 10.' Evaluate this statement for an ideal transformer. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The claim is incorrect. An ideal transformer loses no energy and has no other energy source, so power in equals power **out**. The voltage goes up ten times, so the current goes down ten **times**, and the power stays the same. The slip is thinking more volts means more power. A transformer trades voltage for current, it can't make **energy**.

Visual: card shrinks to the top; "ideal transformer" and "also increases the power" underline. On "power in equals power out" "P_in = P_out (energy conserved, no other source)". On "times" "V_s = 10 V_p → I_s = I_p / 10 → V_sI_s = V_pI_p". On "energy" a chip "10 × the power" fades in and is crossed (caption "trades V for I; P unchanged"). Hold about 1 second.

### 15. handoff
> So in an ideal transformer, every turn shares the same changing flux, and no energy is lost. Volts follow the turns, and the current goes the other way. But real transformers do get warm, and warmth means energy that never reaches the lamp. So why are real transformers less efficient than the ideal **model**?

Visual: board clears (camera change) to the worked-example transformer, larger: the closed core, the primary winding labelled "N_p = 1200" joined to the AC source "230 V ~, I_p = 0.50 A"; the secondary winding "N_s = 60" joined to the lit lamp "11.5 V, I_s = 10 A"; slate flux arrows circulating; the amber bars "P_in = 115 W" and "P_out = 115 W (ideal)". On "get warm" a faint warm tint spreads over the windings and the core, and the P_out bar flickers lower with a "?" (no value). On "never reaches the lamp" the three ticks on the ideal card turn to "?". On "model" a chip "Next: why are real transformers less efficient than the ideal model?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Ideal transformer: all flux links both coils, no resistance, no energy lost. Every turn has the same emf (volts per turn), so V_p/V_s = N_p/N_s.
2. Step-up: N_s > N_p, V_s > V_p, I_s < I_p. Step-down: N_s < N_p, V_s < V_p, I_s > I_p. Frequency unchanged (50 Hz).
3. Ideal: power in = power out, V_pI_p = V_sI_s, so I_p/I_s = N_s/N_p. It cannot raise both voltage and current.
4. The load sets the current: more secondary current makes the primary draw more.
5. Example: 1200 → 60 turns, 230 V, 0.50 A: V_s = 11.5 V, I_s = 10 A, P = 115 W.

Memory aid (large, on the notes screen): *Volts follow the turns. Current goes the other way.*

## Teaching checks

- **Does it explain causes?** Why voltage follows turns: the same flux change through every turn, so the same volts per turn (2). Why the current goes the other way: energy conservation in the ideal model (4, 5, 6). How the primary "knows" to draw more current: the secondary's opposing field (Lenz) (7). Why the frequency cannot change: the output is induced by the same changing flux (3).
- **Misconceptions addressed:** a step-up transformer gives more power (1, 4, 14 crossed); current scales like voltage (12 crossed); the transformer decides the current (7); the voltage ratio is a rule to memorise rather than a consequence (2); a transformer changes the frequency (3).
- **One idea at a time:** the trade (1), the voltage ratio (2), naming (3), the energy limit (4), power equality (5), current ratio (6), the load (7), the example in two stages (8, 9).
- **Video makes it easier:** the per-turn emf tags multiplying along each winding (2); the cancelling ΔΦ/Δt (2); the power bars that cannot grow (4, 5); the opposing rose arrow and the primary's answering current (7); the currents' dot speeds (1, 7).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 22 s.
- **Avoided double teaching:** mutual induction and AC (v12), Faraday's law (v10) and Lenz's law (v11) recalled in a clause; P = VI (Year 11) in a clause.
- **Syllabus coverage:** `P6-IQ3-03`: "analyse quantitatively the operation of ideal transformers through the application of" V_p/V_s = N_p/N_s (2, 3, 8, 11) and V_pI_p = V_sI_s (5, 6, 9, 11, 13).
- **Out of scope by design:** efficiency and losses, laminations, leakage (v14); transmission arithmetic (v15).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An ideal transformer has 200 turns on its primary coil and 3000 turns on its secondary coil. The primary is connected to a 24 V AC supply. The secondary supplies a current of 0.40 A to a load. (a) Calculate the secondary voltage. (b) Calculate the current in the primary coil."
Model answer: (a) V_s = V_p N_s/N_p = 24 × 3000/200 = 360 V. (b) Ideal: V_pI_p = V_sI_s, so I_p = V_sI_s/V_p = 360 × 0.40/24 = 6.0 A (equivalently I_p = I_s N_s/N_p = 0.40 × 15). Classic mistake (crossed): I_p = 0.40/15 = 0.027 A.

**Attempt 2 (scene 13; original wording, HSC style, 3 marks).** "A student states: 'A step-up transformer that increases the voltage by a factor of 10 also increases the power by a factor of 10.' Evaluate this statement for an ideal transformer."
Model answer: The statement is incorrect. An ideal transformer has no energy losses and no energy source of its own, so the power delivered by the secondary equals the power drawn by the primary, V_pI_p = V_sI_s. If V_s = 10V_p then I_s = I_p/10, so the power is unchanged. A transformer exchanges voltage for current; it cannot increase the power (a real transformer delivers slightly less). Classic mistake (crossed): "10 × the power".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site predict) | N_p = 100, N_s = 200, V_p = 10 V: V_s = 10 × 200/100 = 20 V; I_s = 0.50 A (original): I_p = 20 × 0.50/10 = 1.0 A; P = 10 W each side | 1, 5 |
| Volts per turn (worked example, not shown) | 230/1200 = 0.1917 V; 11.5/60 = 0.1917 V | author check |
| Site Stop and Check | 230 × 800/400 = 460 V | 3 |
| Worked example (site, 230 V) | 230 × 60/1200 = 11.5 V; 230 × 0.50/11.5 = 10 A; 0.50 × 1200/60 = 10 A; 11.5 × 10 = 115 W; 230 × 0.50 = 115 W; ratio 20 : 1 | 8, 9, 15, 16 |
| A1 | 24 × 3000/200 = 360 V; 360 × 0.40/24 = 6.0 A; 0.40 × 15 = 6.0 A; slip 0.40/15 = 0.027 A | 11, 12 |
| A2 | factor 10 up in V, 10 down in I; P unchanged | 13, 14 |
| Mains | 230 V nominal, 50 Hz | 3, 8 |
| Site checks | 240 × 60/1200 = 12 V; 240 × 0.50/12 = 10 A; 230 × 500/100 = 1 150 V; 240 × 500/100 = 1 200 V; 20 × 500/100 = 100 V; 240 × 2000/400 = 1 200 V; 500 × 400/25 = 8 000 turns | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 10 × 200/100 = 20; 20 × 0.50/10 = 1.0; 10 × 1.0 = 10; 20 × 0.50 = 10.
- 230 × 800/400 = 460.
- 230 × 60/1200 = 11.5; 230 × 0.50/11.5 = 10; 0.50 × 1200/60 = 10; 11.5 × 10 = 115; 230 × 0.50 = 115; 1200/60 = 20.
- 24 × 3000/200 = 360; 360 × 0.40/24 = 6.0; 3000/200 = 15; 0.40 × 15 = 6.0; 0.40/15 = 0.0267.
- 230/1200 = 0.19167; 11.5/60 = 0.19167.
- Site: 240 × 60/1200 = 12; 230 × 500/100 = 1150; 240 × 500/100 = 1200; 240 × 2000/400 = 1200.

## Memory aid check

- **"Volts follow the turns. Current goes the other way."** Meaning, as said in scene 10: the voltage of each coil is proportional to its number of turns (V_p/V_s = N_p/N_s); the current is inversely proportional (I_p/I_s = N_s/N_p). Assumptions checked: the voltage half holds for an ideal transformer with complete flux linkage (near enough for a real one); the current half also needs power in equal to power out (ideal), and a load drawing the current (scene 7); it says nothing about which current is set first (the load sets I_s). The narration ties it to "check that the power in matches the power out". It helps a new case: A1 (primary current larger in a step-up) and A2. Introduced after the explanation (2 to 9).
- **Considered, not used:** "Turns up, volts up, amps down" (fine, but less clear for step-down); "same volts per turn" kept as the explanation in scene 2 rather than the aid.

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,041 characters**, 16 scenes. Characters per scene (1 to 16): 554, 672, 537, 220, 370, 378, 524, 484, 493, 154, 319, 407, 200, 333, 306, 75. At 13.3 characters per second the speech is about 454 s; add about 3 s for the prediction countdown, 3 s for the scene 3 screen check, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 541 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's last sentence (second lamp); scene 3's power-station sentence; scene 9's check with the turns ratio.

## Opening frame

v12's final frame (designed in this wave, `phys-y12-m6-v12.md`): paper background; a coded HSC-style closed square soft-iron core (grey), the primary winding on its left limb with fewer drawn turns, labelled "N_p", joined to a coded AC source "~"; the secondary winding on its right limb with more drawn turns, "N_s", joined to a coded lamp; slate flux arrows circulating round the core; labels "V_p ?", "V_s ?", "I_p ?", "I_s ?"; heading "How can one coil induce an emf in another without touching it?"; chip "Next: how does a transformer exchange voltage for current?". No values. Scene 1 turns the chip into the heading; the drawn turns are already in the ratio 1 : 2 (v12 builds them so; build note).

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; the coded HSC-style closed square soft-iron core (grey) with slate flux arrows circulating; the primary winding on the left limb (many drawn turns), labelled "N_p = 1200", joined to a coded AC source labelled "230 V ~" and "I_p = 0.50 A"; the secondary winding on the right limb (few drawn turns), "N_s = 60", joined to a lit coded lamp labelled "11.5 V" and "I_s = 10 A"; a faint warm tint over the windings and core; two amber power bars, "P_in = 115 W" and "P_out = 115 W (ideal)", the P_out bar with a "?"; the ideal card top right ("all flux links both coils", "no resistance in the windings", "no energy lost in the core"), each item marked "?"; heading unchanged ("How does a transformer exchange voltage for current?"); a chip reads "Next: why are real transformers less efficient than the ideal model?". v14 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v13` (route phys-y12-m6-v13). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v13` and build folder `docs/production/claude-pm/lessons/p-y12-m6-v13` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, volts-per-turn, step-up-down, no-free-energy, power-equal, current-ratio, load-sets-current, worked-voltage, worked-current-power, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: closed-core transformer (per-turn emf tags, flux arrows, current dots, lamp and load switch), ideal card, power bars, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue; 2 to 3 camera continue (schematic shrinks left); 3 to 4 to 5 to 6 to 7 camera continue (same schematic); 7 to 8 clear change to the working layout; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), scene 3 screen check (3 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m6-v13-learning-review.md`, `science_check` = `checks/p-y12-m6-v13-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-low-voltage-supply-v1.png` (1600 × 1000, RGBA): the lab power pack (3).
- `public/assets/physics/phys-y11-power-point-v1.png` (1536 × 1024, RGBA): Australian double power point with a plug (3).
- `public/assets/physics/phys-y11-transmission-tower-v1.png` (1071 × 1469, RGBA): step-up example (3).
- **Checked, not used:** `phys-y11-filament-lamp-v2.png` (the schematic's lamp stays a coded circuit symbol, HSC style, so that the circuit reads as a diagram); `phys-y11-power-station-v2.png` (v15); `phys-y11-solenoid-coil-v1.png` (a separate air-core coil, not a transformer winding).

Need (new plate):
1. `y12p-transformer-v1.png`: 2 (inset), and v14 (1, 5, 6).

Coded: the closed-core schematic with drawn windings, flux arrows, per-turn emf tags, current dots, AC source, lamp, load switch, ideal card, power bars, balance icon, AC traces, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v13 build brief):
1. **Closed-core transformer.** Extend v12's schematic: per-turn tags that copy along a winding and sum, drawn turns in a set ratio, current dots with speeds from I_p and I_s, a load switch and second lamp, an opposing field arrow inside the core.
2. **Power bars.** Two amber bars with labels and an "ideal" tick; a shake state for "energy from nothing".

## Codex asset brief

1. **`y12p-transformer-v1.png`** (new). A painted school demonstration transformer, three-quarter view from slightly above: a closed rectangular laminated soft-iron core (grey, thin sheet edges just visible along the visible face) standing on a small base; two separate copper-wire windings on plastic formers, one on each vertical limb, the left winding with fewer turns of thicker wire and the right winding with visibly more turns of thinner wire; two terminal posts on each former. Plain, accurate laboratory equipment; no brand names, no text, no labels, no people or hands. Transparent PNG with alpha channel, about 1600 × 1200, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-low-voltage-supply-v1.png` and `phys-y11-solenoid-coil-v1.png` (painted, neutral lighting, clean edges). Used in v13 scene 2 and v14 scenes 1, 5 and 6 (lamination edges must read at about 40% frame width).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the ideal assumptions; equal emf per turn; the ideal primary's emf matching the supply (author note a); V_p/V_s = N_p/N_s; step-up and step-down; unchanged frequency (50 Hz, Australia); power in equals power out; I_p/I_s = N_s/N_p; no-load primary current almost zero (ideal) and the loaded primary drawing more because of the secondary's opposing field (author note b); "a lab power pack has a step-down transformer inside".
3. Confirm 230 V is used consistently in scenes 3, 8, 9 and 15 and the key notes (no 240 V in learner copy).
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (the load switch changes state).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Ideal Transformers: How a Transformer Trades Voltage for Current | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson15.sa.html

Double the turns on the secondary and you double the voltage, but the current halves. See why every turn of a transformer shares the same changing flux, how that gives Vp/Vs = Np/Ns, why an ideal transformer's power in equals its power out, why the current ratio is flipped, and how the load decides the current. A full worked example on a 230 V supply and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse quantitatively the operation of ideal transformers through the application of: Vp/Vs = Np/Ns, VpIp = VsIs"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: mutual induction. Next: why real transformers are less efficient than the ideal model.

#HSCPhysics #Physics #Transformers #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v12; check that "volts per turn" lands before the ratio is written; that the primary's emf sentence in scene 2 does not need self-induction to make sense; that scene 7's Lenz argument is clear at speed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The per-turn tags multiplying along the windings, the power bars that refuse to grow and the opposing field with the answering primary current carry the explanation; judge them at playback speed in the voiced preview.
