# Year 11 Physics FA3 V17 (Physics 2025, Year 11, Focus Area 3): Why do wires waste energy as heat, and why does sending power at a high voltage waste less? (design)

Status: Revision 2 (5 Nov 2026), brief 164 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v17`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new (a power station, a string of old fairy lights); three reused requests (the transmission tower and kettle from v16, the house from FA2).

Narration 5,495 characters, 16 scenes, about 515 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Five characters under the 5,500 floor: one syllabus point, fully taught (mechanism, P = I²R, conservation, transmission, the V²/R trap); not padded (open decision 7).

Scope: seventeenth video of the Year 11 Physics (2025) Focus Area 3 route: why a current heats a wire (electron collisions with the lattice transfer energy to the ions); why the heating goes as the current squared (twice the coulombs, each losing twice the energy); P = I²R from P = VI and V = IR; line-loss problems; conservation of energy in a circuit (power supplied = power delivered to the load + power lost); why transmitting the same power at a higher voltage and lower current cuts the loss; which V belongs in V²/R; thicker cables as the other, costlier option. Templates: `phys-y11-fa1-v22.md` (concept format) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions, section list and colour key from `phys-y11-fa3-v10.md` to `phys-y11-fa3-v12.md` and `phys-y11-fa3-v16.md` (Revision 1; v16's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson16.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 why wires heat up, true or false, card 2 calculating the heat lost in a line with `we-1` and its figure description, quick check, activity 1 high voltage wins, match the pairs, card 3 conservation of energy in a circuit, last check, odd one out, independent practice Q1 to Q3, retrieve). Route entry: `phys-y11-fa3-v17` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Energy Loss in Circuits, P = I²R. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply energy loss in circuits, p = i²r? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v18: How can I explain and apply series and parallel circuits?" (this design proposes "Why does one broken globe switch off a series circuit but not a parallel one, and how can you tell which is which from a diagram?" for v18's chip; `phys-y11-fa3-v18.md` adopts it; see open decision 1).

**Opening frame (v16's actual handoff, Revision 1, 3 Nov).** v16's scene 17 ends with the memory line "Volts are joules per coulomb. Amps are coulombs per second. So volts × amps are joules per second." small at the top; the transmission landscape: the power station at the left (`phys-y11-power-station-v1.png`, requested below; v16 updated to name it), the painted transmission tower (`phys-y11-transmission-tower-v1.png`) repeated along a long coded line, the painted house (`phys-y11-house-v1.png`) at the right; the line glowing faintly warm grey along its length; chips "how much power heats the wires?" and "why such high voltages?"; chip "Next: Why do wires waste energy as heat, and why does sending power at a high voltage waste less?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (the town is a house plate; no figures); the power station, towers, house, kettle and fairy lights painted (apparatus and objects); the wire's lattice, electrons, energy arrows, coulomb tiles, gates, power bars, equations and readouts coded (abstract diagrams); one reasoning stage at a time; calculations laid out as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v10 (energy per coulomb), v12 (`ConductorLattice`), v13 (collisions with the lattice are resistance), v14 (V = IR), v16 (P = VI, I = P/V, P = V²/R and the half-times-half idea) and FA1's conservation of energy recalled in a phrase each.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (superscript typeset inline, FA2 root decision 11):

- P25-FA3-G2-12 `ci13c391ee`: "Solve problems relating to energy loss in circuits using P = I²R and the law of conservation of energy"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v16's handoff (above); the hook (the same power sent as a big current at low voltage or a small current at high voltage: which wastes less? site warm-up); collisions transfer energy to the lattice (v13 recalled, extended to energy); the double-current prediction; four times, from twice the coulombs each losing twice the energy; P = I²R from P = VI and V = IR; the site's line example (`we-1`, 4.0 Ω, 50 A, 10 kW; 25 A, 2.5 kW); conservation of energy, P_supplied = P_load + P_lost (site card 3); the site's activity 1 (100 kW along 5.0 Ω at 1000 V and at 10 000 V), worked as two cases with conservation; the hook answered; which V goes in V²/R (the voltage across the line, IR = 50 V); thicker cables (site odd one out); memory aid; two attempts. Stops at heat lost in a resistance and the energy account for one supply, one line and one load. Not taught: how transformers raise and lower the voltage (Year 12; a grey tag only); AC rms values (the line is treated as carrying a steady current); efficiency as a percentage (one optional grey readout in 8 only); series and parallel rules (v18 onward); internal resistance (not in the 2025 Year 11 points).

## Decisions

- **Learner question (route placeholder rewritten; v16's proposal adopted).** "Why do wires waste energy as heat, and why does sending power at a high voltage waste less?" One causal question carrying both parts of `ci13c391ee`: "why do wires waste energy as heat" asks for the collision mechanism and P = I²R; "why ... waste less" asks for the conservation account and the high-voltage, low-current cause, solved with numbers. Answer, built in order: hook and prediction (1); collisions (2); double-current prediction (3); I²R and why (4); line example (5); conservation (6); 1000 V case (7); 10 000 V case and the hook answered (8); which V (9); memory aid (10).
- **The mechanism made visible (owner quality bar).** v12's **`ConductorLattice`** with v13's collisions: drifting navy electrons strike pale grey ions; at each strike a small gold energy chip passes from the electron to the ion, which then vibrates harder (amplitude grows); a warm grey glow builds in the wire. v16's **`EnergyPerCoulomb`** gate explains the square: coulomb tiles pass through a coded resistor section, each dropping a stack of gold blocks (the energy it loses, set by V = IR across the section) into a warm grey "thermal" bin. Doubling the current doubles the tile rate and doubles each tile's drop at once; the bin's fill rate goes up four times (the same "half times half" idea as v16, now "twice times twice").
- **Power bars (conservation, `ci13c391ee`).** A coded horizontal bar for the power supplied (hollow gold outline, "100 kW") splits at the line into a warm grey "lost in the line" segment and a gold "delivered to the town" segment; the two always add to the whole bar (P_supplied = P_load + P_lost). The 1000 V case splits it half and half; the 10 000 V case leaves a warm grey sliver (0.5 per cent). Values are written on each segment.
- **Prediction 1 (3 s, scene 1, site warm-up).** "Same power to the town: which wastes less?" Chips "big current, low voltage?", "small current, high voltage?". Answered in 8 with numbers.
- **Prediction 2 (3 s, scene 3).** "Double the current in the same wire: twice the heating, or more?" Chips "twice?", "four times?". Answered in 4 by the two doublings, then P = I²R.
- **Which V? (9).** The trap of putting the transmission voltage into V²/R ((10 000)² ÷ 5.0 = 2.0 × 10⁷ W, more than the station supplies) is shown as a grey readout that "can't be right: more than the 100 kW supplied", then fixed: the voltage across the line is IR = 10 × 5.0 = 50 V, and 50² ÷ 5.0 = 500 W, the same as I²R. This explains why I²R is the safe form for a line and blocks the classic exam mistake (A2's crossed item).
- **Transformers and AC.** A grey tag in 8 only: "how the voltage is raised and lowered again: transformers, Year 12". No transformer is drawn. The line is treated as carrying a steady current (author note b).
- **Attempts (original, HSC style).** (A1, P = I²R and conservation) "A cable with a total resistance of 0.50 Ω connects a generator to a workshop and carries a current of 30 A. (a) Calculate the power lost as heat in the cable. (b) The generator supplies 6.0 kW. Use the law of conservation of energy to determine the power delivered to the workshop. (3 marks)" Answer: 450 W; 6000 − 450 = 5550 W, about 5.6 kW. Crossed: "(a) 30 × 0.50 = 15 W" (current not squared). (A2, transmission) "A power station sends 50 MW into the transmission lines that supply a city. The lines have a total resistance of 2.0 Ω. (a) Calculate the power lost in the lines if the power is transmitted at 25 kV. (b) Calculate the power lost if it is transmitted at 250 kV instead. (c) Explain why the loss changes by this factor. (4 marks)" Answer: 2000 A, 8.0 × 10⁶ W (8.0 MW); 200 A, 8.0 × 10⁴ W (80 kW); ten times the voltage gives a tenth of the current for the same power (P = VI), and the loss depends on I², so it falls by 10² = 100. Crossed: "(b) (250 000)² ÷ 2.0 = 3.1 × 10¹⁰ W".
- **Mistake scene:** none separate. "Energy is used up and lost forever" (6; site misconception 1); "raise the current to cut losses" (1, 8; site misconception 2); "double the current, double the loss" (3, 4); "use the transmission voltage in V²/R" (9, feedback 2 crossed); "forgetting to square" (feedback 1 crossed).
- **Memory aid:** "Wire loss is I squared R: halve the current, quarter the loss." (see "Memory aid check").
- **Handoff (route next; proposal for v18's question).** Board change: the camera moves to the house plate at the right and, at the close-up, cross-fades to the front-view house `phys-y11-house-front-v1.png` (requested below; the side-view `phys-y11-house-v1.png` has one window), its two front windows lit (coded warm glow); a coded lamp symbol inside each window; on "one globe blows" the left window's lamp symbol shows a break and that window goes dark while the right window stays lit; beside the house the painted string of old fairy lights (`phys-y11-fairy-lights-v1.png`, requested below) with every globe glowing; on "the whole string out" one globe is marked with a small grey break and every globe on the string goes dark; chips "one out, the rest stay on" (under the house) and "one out, all out" (under the string); then "Next: Why does one broken globe switch off a series circuit but not a parallel one, and how can you tell which is which from a diagram?". This is the frame v18 opens on. No circuit diagram is drawn (v18 owns diagrams).
- **Site sources used:** intro (every wire has resistance; hundreds of thousands of volts: 1, 8); hook (raise the voltage, lower the current: 1, 8); warm-up (same power, two choices: 1); intentions (all: 2 to 9); key terms (power dissipation, resistive heating, conservation of energy, transmission line: 2, 4, 6); misconceptions 1 and 2 (6; 1, 8); card 1 (4); true or false (3, 4); card 2 and `we-1` with its figure (5); quick check (2.0 Ω, 3.0 A, 18 W: key notes example, not voiced); activity 1 (7, 8, with site correction 1); match the pairs (10, the "which form" idea in 9); card 3 (6); last check (6); odd one out (8: thicker cable, lower resistivity, higher voltage reduce loss; more current does not); Q1 (8, A2 (c)); Q2 (factor 16 idea: 4, not voiced; site correction 2); Q3 (2, 6).
- **Site corrections (quoted from site lesson 16, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Activity 1: "A line of resistance 5.0 Ω must deliver 100 kW of power. ... using I = P/V, find the line current if the power is sent at 1000 V". At 1000 V the current is 100 A and the line itself loses I²R = 50 kW, so it cannot "deliver" 100 kW; the 100 kW is the power sent (supplied). Suggest: "A power station sends 100 kW along a line of resistance 5.0 Ω", with a step (4): "use conservation of energy to find the power that reaches the far end in each case" (50 kW and 99.5 kW).
  2. Short answer Q2: "If the same energy were delivered at a current of 10 A". The comparison needs the same power (rate), and "delivered" again blurs supplied and delivered. Suggest: "If the same power were transmitted at a current of 10 A".
  3. Card 1 opener: "the resistance opposes the flow and that work shows up as heat". The work is done by the electric field on the charges, and the energy passes to the lattice in collisions; "the resistance ... work" is loose. Suggest: "the field does work on the charges, and collisions with the lattice pass that energy to the ions as heat". (Wording; optional.)
  - Checked and correct: card 1 derivation (P = (IR)I = I²R) and "halving the current cuts the loss to a quarter"; `we-1` (50² × 4.0 = 1.0 × 10⁴ W; 25 A gives 2.5 kW); quick check (B, 18 W); card 3 (P_supplied = P_load + P_lost); odd one out (C); Q1 model answer (one tenth of the current, one hundredth of the loss); Q2 numbers (4800 W, 300 W, factors 4 and 16); Q3 model answer.
- **Cause chain taught, in order:** (1) same power, two ways to send it: which wastes less? (1); (2) drifting electrons collide with the ions and hand over energy; the ions vibrate harder: thermal energy (2); (3) double the current: twice the coulombs each second, and twice the voltage across the same resistance, so each coulomb loses twice the energy: four times the heating (3, 4); (4) P = VI with V = IR gives P = I²R (4); (5) a real line example (5); (6) the energy is not destroyed: power supplied = power delivered + power lost (6); (7) at 1000 V the line takes half (7); (8) at ten times the voltage, a tenth of the current and a hundredth of the loss (8); (9) V²/R needs the voltage across the wire, not the sending voltage (9); (10) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** v10 (energy per coulomb), v12 (free electrons and the lattice; drift), v13 (collisions with the vibrating lattice are the resistance; hotter ions vibrate more), v14 (V = IR), v16 (P = VI, I = P/V, P = V²/R; half the energy per coulomb times half the current), FA1 (energy is conserved; it changes form), each recalled in a phrase; Stage 5 Mathematics (squaring, prefixes k and M, subtraction).
- **Learner-visible vocabulary (plain meaning at first use):** dissipated (turned into thermal energy and spread into the surroundings, 2); load (the device, or the town, that the energy is meant for, 6); transmission line (the long wires that carry power from a power station, 1); kilowatt, megawatt (a thousand watts, a million watts, 5, A2; prefixes from the measurement videos).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v12's **`ConductorLattice`** with an **energy-handover mode** (new: a gold chip passes from electron to ion at each collision; the ion's vibration amplitude grows; a warm glow builds); v16's **`EnergyPerCoulomb`** with a **drop mode** (new: each tile drops its stack into a warm grey thermal bin as it crosses a resistor section); **`PowerSplitBar`** (new: a supplied bar splitting into lost and delivered segments with values, always summing to the whole); v16's **transmission landscape** (power station plate, tower plates on a coded line, house plate; the line's warm glow scales with the loss); **trap readout** (a grey "can't be right" readout with a comparison line against the supplied power); `AlignedAlgebra` (P = VI and V = IR to P = I²R; I = P/V); calculation layout (task strip, equation strip, givens group); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v16 (positive red "+", electrons navy "−", signs always printed; conventional current bold ink "I", electron flow navy dotted, FA3 root decision 17); ions pale grey with a small red "+"; electrical energy hollow gold and gold blocks; thermal warm grey; power bars: supplied hollow gold outline, delivered gold, lost warm grey; crossed items grey scribble; plates avoid red and navy.
- **Board layout (constant):** heading top-left; the landscape or the wire in the left 55 per cent (the landscape spans the full width in 1, 7, 8 and 15, with the calculation layout over its lower right); the calculation layout in the right column.
- **No human figures.** None; the town is a house plate; nothing is switched by hand.
- **Author notes (not learner copy):**
  (a) Collision picture: the classical (Drude) model, as v13; the energy the field gives an electron between collisions is passed to the lattice on average. "Hands over some of the energy" is the claim.
  (b) Real transmission is AC at 50 Hz; I²R uses the rms current, which the video does not mention (the current is treated as steady, as v12 and v16 did). Line voltages in Australia: 132 kV to 500 kV for transmission; the site's 1000 V and 10 000 V are teaching values (grey tag "teaching values" in 7 and 8).
  (c) In the 1000 V case the line's voltage drop is IR = 100 × 5.0 = 500 V, so the town receives 500 V × 100 A = 50 kW, consistent with 100 kW − 50 kW. In the 10 000 V case the drop is 50 V and the town receives 9950 V × 10 A = 99.5 kW. The video does not show the far-end voltage; the numbers are self-consistent if a reviewer checks.
  (d) The trap value (10 000)² ÷ 5.0 = 2.0 × 10⁷ W is 200 times the supplied power, which is why the readout says it "can't be right".
  (e) A1: the generator's voltage is not needed (6000 ÷ 30 = 200 V; cable drop 15 V; workshop 185 V × 30 A = 5550 W, consistent). A2: at 25 kV the line drop is 2000 × 2.0 = 4000 V (16 per cent of 25 kV, so the case is physically possible); at 250 kV it is 400 V.
  (f) Pronunciations: "I squared R"; "kilowatts", "megawatts"; "ninety-nine point five".

Main question: *The same power can be sent to a town as a big current at a low voltage or a small current at a high voltage. Why do wires waste energy as heat, and why does sending power at a high voltage waste less?*
Entry knowledge (v10 energy per coulomb; v12 lattice; v13 collisions; v14 V = IR; v16 P = VI and P = V²/R; FA1 conservation of energy).
Stops after: collisions heat the wire; four times the heating for twice the current, and why; P = I²R; line examples; P_supplied = P_load + P_lost; the 1000 V and 10 000 V cases; which V belongs in V²/R; thicker cables. No transformers, no rms, no series or parallel rules.
Handoff: v18, series and parallel connections and their diagrams.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v16.

### 1. hook (which way wastes less?)
> Here's that power line, kilometres of wire between the power station and the town. Every metre has a little resistance, so the line warms up, and that energy never reaches the town. Engineers can send the same power as a big current at a low voltage, or as a small current at a high voltage. Which one wastes less energy in the **wires**?

Visual: opens on v16's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Energy lost in wires"; the memory line fades. On "kilometres of wire" the camera tracks along the line from the power station to the house; on "a little resistance" small "R" tags appear on each span. On "the line warms up" the warm grey glow along the line brightens and faint warm grey arrows rise from it (gloss "transmission line: the long wires from a power station"). On "big current at a low voltage" two option cards slide in below the landscape: "big I, low V" and "small I, high V", each with "same power" (tag "site warm-up"). On "wires" chips "big current, low voltage?" and "small current, high voltage?" and a 3-second countdown ring.

### 2. why a wire heats up
> First, why does a wire heat up at all? The drifting electrons keep colliding with the vibrating ions of the metal. At each collision, an electron hands over some of the energy the field gave it. The ions vibrate harder, and that's thermal energy. So whenever a current flows through a resistance, electrical energy is transformed into thermal energy, and then dissipated into the surroundings. In a heater, that's the point. In a power line, it's **wasted**.

Visual: board change: a span of the line zooms into v12's `ConductorLattice` (field arrows teal, drift on; tag "drift sped up to see it"). On "colliding with the vibrating ions" collisions flash (tag "collisions: the resistance video"); on "hands over some of the energy" a small gold chip passes from the electron to the ion at each collision (energy-handover mode); on "vibrate harder" the ions' vibration grows and a warm grey glow builds in the slab; on "dissipated" faint warm grey arrows leave the slab's surface (gloss "dissipated: turned into thermal energy and spread into the surroundings"). On "In a heater" a small panel heater thumbnail (v16 plate) with a tick; on "wasted" the line thumbnail with a grey "wasted" tag.

### 3. prediction: double the current
> So how does the heating depend on the current? Double the current through the same wire. Do you get twice the heating each second, or **more**?

Visual: board change: v16's `EnergyPerCoulomb` gate in drop mode across a coded resistor section labelled "same R"; tiles cross the section, each dropping a gold stack into a warm grey "thermal" bin; a dial "I" turns from "1×" to "2×" but the tiles pause before moving. On "more" chips "twice?" and "four times?" and a 3-second countdown ring.

### 4. why it's I squared R
> Four times. Doubling the current sends twice as many coulombs through each second. But with the same resistance, twice the current also means twice the voltage across the wire, because V equals I R. So each coulomb loses twice the energy as well. Twice the coulombs, each losing twice the energy: four times the heating. In symbols, P equals V I, and V is I R, so P equals I squared **R**. Halve the current, and the loss drops to a **quarter**.

Visual: camera continue; the tiles resume. On "twice as many coulombs" the tile rate doubles (readout "coulombs per second × 2"); on "twice the voltage across the wire" the section's voltage label doubles "V = IR × 2" (tag "Ohm's law"); on "each coulomb loses twice the energy" each tile's drop stack doubles; on "four times the heating" the row "2 × 2 = 4" and the bin's fill rate readout "× 4". Equation strip (`AlignedAlgebra`): "P = VI"; "V = IR"; on "R" "P = (IR) × I = I²R", boxed. On "quarter" the dial turns to "½×", tiles and stacks both halve, and the row "½ × ½ = ¼" (tag "like halving the voltage, last video").

### 5. worked example: a power line
> Let's try one. Task: a transmission line has a resistance of four point oh ohms and carries a current of fifty amps. Find the power lost as heat. The equation is P equals I squared R. The givens: I is fifty amps, and R is four point oh ohms. Fifty squared is two thousand five hundred, and times four point oh that's one point oh times ten to the four watts. Ten kilowatts, just heating the line. At twenty-five amps, it would be a quarter of that: two point five **kilowatts**.

Visual: clear change to the calculation layout; a tower thumbnail with one coded span labelled "R = 4.0 Ω" and an ink "I" arrow "50 A" at the left. Task strip: "Find the power lost as heat in the line" (grey tag "site worked example"). Equation strip: "P = I²R". Givens group: "I = 50 A"; "R = 4.0 Ω". Rows, one per cue: "P = 50² × 4.0"; "= 2500 × 4.0"; "= 1.0 × 10⁴ W = 10 kW", boxed (tag "k: kilo, × 10³"). On "twenty-five amps" a grey check row "25² × 4.0 = 2.5 × 10³ W = 2.5 kW: a quarter".

### 6. where the energy goes
> But is that energy destroyed? No. Energy is conserved. The power station supplies energy at some rate. Part of it reaches the load, the town it's meant for. The rest is transformed into thermal energy in the line, and spreads into the air. So the power supplied equals the power delivered to the load, plus the power lost. Nothing disappears. It just isn't where we **wanted** it.

Visual: board change: the transmission landscape across the width; `PowerSplitBar` below it. On "supplies energy at some rate" a hollow gold outline bar leaves the station, labelled "P supplied"; on "reaches the load" a gold segment at the house end, labelled "P load" (gloss "load: the device, or the town, the energy is meant for"); on "thermal energy in the line" a warm grey segment along the line, labelled "P lost", with warm grey arrows rising into the air. On "the power supplied equals" the equation strip "P_supplied = P_load + P_lost", boxed (tag "conservation of energy, from the energy videos"). On "wanted" a chip "energy is used up" fades in and takes a grey scribble cross.

### 7. worked example: sent at 1000 volts
> Now the hook, with numbers. Task: a power station supplies one hundred kilowatts along a line of five point oh ohms. How much power reaches the town if it's sent at one thousand volts? First the current: I equals P over V, one hundred thousand over one thousand, so one hundred amps. The loss is I squared R: one hundred squared times five point oh, which is fifty thousand watts. So by conservation, only fifty kilowatts reach the town. Half the energy heats the **wire**.

Visual: camera continue; the landscape stays above; the calculation layout at the lower right. Task strip: "Find the power that reaches the town (sent at 1000 V)" (grey tags "site activity" and "teaching values"). Givens group: "P_supplied = 100 kW = 1.0 × 10⁵ W"; "R = 5.0 Ω"; "V = 1000 V". Equation strips and rows, one stage per cue: "I = P/V = 100 000 ÷ 1000 = 100 A"; "P_lost = I²R = 100² × 5.0 = 50 000 W = 50 kW"; on "conservation" "P_load = P_supplied − P_lost = 100 − 50 = 50 kW", boxed. `PowerSplitBar`: the bar splits half warm grey, half gold; the line's glow is bright. On "wire" the option card "big I, low V" dims.

### 8. sent at 10 000 volts
> Now send the same one hundred kilowatts at ten thousand volts. The current is ten times smaller, just ten amps. The loss is ten squared times five point oh: only five hundred watts. So ninety-nine point five kilowatts reach the town. Ten times the voltage gave a tenth of the current, and a hundredth of the loss. That's why power lines run at very high voltages. Thicker cables would cut the resistance too, but they're heavy and **expensive**.

Visual: camera continue; the 1000 V working shrinks to a grey column at the left; a second column builds: "V = 10 000 V"; "I = 100 000 ÷ 10 000 = 10 A"; "P_lost = 10² × 5.0 = 500 W"; "P_load = 100 000 − 500 = 99 500 W = 99.5 kW", boxed. `PowerSplitBar`: the warm grey segment shrinks to a sliver; the line's glow fades to faint; optional grey readout "lost: 0.5%". On "a hundredth of the loss" the row "V × 10 → I ÷ 10 → loss ÷ 10² = ÷ 100", boxed; the hook chip "small current, high voltage?" glows and "big current, low voltage?" takes a grey scribble cross. Grey tag: "how the voltage is raised and lowered again: transformers, Year 12". On "expensive" a small cross-section pair "thin cable | thick cable: less R, more metal" (site odd one out).

### 9. which voltage?
> One trap. Why not use V squared over R with the ten thousand volts? Because that V has to be the voltage across the wire itself, not the voltage the power is sent at. Across the line, the voltage is I R: ten times five point oh, just fifty volts. And fifty squared over five point oh is five hundred watts again. So for a line, use I squared R, because the current is what you **know**.

Visual: camera continue; a grey readout writes "(10 000)² ÷ 5.0 = 2.0 × 10⁷ W" beside a short bar for "100 kW supplied" with the trap bar shooting far past it; tag "can't be right: more than the power supplied"; the readout takes a grey scribble cross. On "the voltage across the wire itself" a coded voltage bracket spans one line from end to end, labelled "V across the line"; on "fifty volts" "V_line = IR = 10 × 5.0 = 50 V"; row "P = 50² ÷ 5.0 = 500 W ✓". On "know" "for a line: P = I²R" boxed.

### 10. memory aid
> To remember it: wire loss is I squared R. Halve the current, and you quarter the **loss**.

Visual: the handwritten line writes large: "Wire loss is I²R: halve the current, quarter the loss." On "halve the current" the tile rate halves; on "quarter the loss" the thermal bin's fill drops to a quarter. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A cable with a total resistance of zero point five oh ohms connects a generator to a workshop, and carries a current of thirty amps. Calculate the power lost as heat in the cable. The generator supplies six point oh kilowatts. Use conservation of energy to find the power delivered to the workshop. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A cable with a total resistance of 0.50 Ω connects a generator to a workshop and carries a current of 30 A. (a) Calculate the power lost as heat in the cable. (b) The generator supplies 6.0 kW. Use the law of conservation of energy to determine the power delivered to the workshop. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> P equals I squared R: thirty squared is nine hundred, times zero point five oh is four hundred and fifty **watts**. By conservation, the power delivered is the power supplied minus the power lost: six thousand minus four hundred and fifty, which is five thousand five hundred and fifty watts, about five point six **kilowatts**. Forgetting to square the current gives fifteen watts: the classic **slip**.

Visual: card shrinks to the top; "0.50 Ω", "30 A", "6.0 kW" and "conservation of energy" underlined. Calculation layout: equation "P = I²R"; givens "I = 30 A", "R = 0.50 Ω"; on "watts" "(a) P_lost = 30² × 0.50 = 900 × 0.50 = 450 W", boxed. A small `PowerSplitBar` "6.0 kW" splits; equation "P_load = P_supplied − P_lost"; on "kilowatts" "(b) 6000 − 450 = 5550 W ≈ 5.6 kW", boxed. On "slip" a chip "(a) 30 × 0.50 = 15 W" fades in and takes a grey scribble cross. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A power station sends fifty megawatts into the lines that supply a city. The lines have a total resistance of two point oh ohms. Calculate the power lost in the lines if it's transmitted at twenty-five kilovolts, and then at two hundred and fifty kilovolts. Then explain why the loss changes by this factor. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A power station sends 50 MW into the transmission lines that supply a city. The lines have a total resistance of 2.0 Ω. (a) Calculate the power lost in the lines if the power is transmitted at 25 kV. (b) Calculate the power lost if it is transmitted at 250 kV instead. (c) Explain why the loss changes by this factor. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> At twenty-five kilovolts, the current is fifty million over twenty-five thousand: two thousand amps. The loss is two thousand squared times two point oh, which is eight point oh **megawatts**. At two hundred and fifty kilovolts, the current is two hundred amps, and the loss is eighty **kilowatts**. Ten times the voltage gives a tenth of the current for the same power, and the loss goes as current squared, so it falls a hundred **times**. Putting two hundred and fifty kilovolts into V squared over R is the classic **trap**.

Visual: card shrinks to the top; "50 MW", "2.0 Ω", "25 kV" and "250 kV" underlined. Two columns: "I = P/V = 5.0 × 10⁷ ÷ 2.5 × 10⁴ = 2000 A"; on "megawatts" "(a) P_lost = 2000² × 2.0 = 8.0 × 10⁶ W = 8.0 MW", boxed; "I = 5.0 × 10⁷ ÷ 2.5 × 10⁵ = 200 A"; on "kilowatts" "(b) P_lost = 200² × 2.0 = 8.0 × 10⁴ W = 80 kW", boxed; on "times" "(c) V × 10 → I ÷ 10 (P = VI); loss ∝ I², so ÷ 10² = ÷ 100", boxed. On "trap" a chip "(b) (250 000)² ÷ 2.0 = 3.1 × 10¹⁰ W" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. handoff
> So the power reaches the town, and the town shares it out. Here's something odd. When one globe blows in a house, the other lights stay on. But in an old string of fairy lights, one broken globe puts the whole string out. Same kind of globes. So what's wired **differently**?

Visual: board change: the memory line small at the top. The camera moves along the line to the house plate at the right and, at the close-up, cross-fades to the front-view house `phys-y11-house-front-v1.png` (two front windows; the side-view plate has one); its two front windows glow, each with a coded lamp symbol inside. On "one globe blows" the left window's lamp symbol shows a small grey break and that window goes dark; the right window stays lit. On "fairy lights" the painted string (`phys-y11-fairy-lights-v1.png`) appears beside the house, every globe glowing (coded glow on its sidecar points); on "one broken globe" one globe gets a small grey break mark and every globe on the string goes dark. Chips write: "one out, the rest stay on" (under the house) and, on "differently", "one out, all out" (under the string). Then the chip "Next: Why does one broken globe switch off a series circuit but not a parallel one, and how can you tell which is which from a diagram?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A current heats a wire because drifting electrons collide with the lattice ions and pass on energy; the ions vibrate harder (thermal energy), which is dissipated to the surroundings.
2. Power lost as heat in a resistance: P = I²R (from P = VI and V = IR). Double the current: four times the loss. Example: 3.0 A in 2.0 Ω loses 3.0² × 2.0 = 18 W.
3. Conservation of energy: P_supplied = P_load + P_lost. The "lost" energy is transformed to thermal energy, not destroyed.
4. For the same power, a higher transmission voltage means a lower current (I = P/V). Ten times the voltage: a tenth of the current, a hundredth of the loss.
5. For a line, use P = I²R. If you use V²/R, V must be the voltage across the line (IR), not the transmission voltage.

Memory aid (large, on the notes screen): *Wire loss is I²R: halve the current, quarter the loss.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why wires heat: collisions hand the field's energy to the ions (2). Why the loss goes as I²: twice the current is twice the coulombs each second and twice the voltage across the same resistance, so twice the energy per coulomb (4). Why the energy is not destroyed: conservation; it becomes thermal energy in the line (6). Why high voltage wastes less: the same power at ten times the voltage needs a tenth of the current, and the loss depends on the current squared (7, 8). Why V²/R with the sending voltage fails: V must be the voltage across the line, which is small (9).
- **Misconceptions addressed:** energy is used up (6; site misconception 1, crossed); raise the current to cut losses (1, 8; site misconception 2, crossed); double the current, double the loss (3, 4); the sending voltage in V²/R (9, feedback 2 crossed); forgetting the square (feedback 1 crossed).
- **One idea at a time:** collisions (2), the square (3, 4), one line example (5), conservation (6), the two cases (7, 8), which V (9).
- **Video makes it easier:** the student sees gold chips pass from electrons to ions and the ions shake harder (2), the tile rate and each tile's drop double together while the thermal bin fills four times as fast (4), the supplied bar split half and half, then down to a sliver (7, 8), and the trap readout overshoot the supplied power before the voltage bracket fixes it (9).
- **Response opportunity:** two 3 s predictions (1, 3); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("total resistance", "30 A", "supplies 6.0 kW", "conservation of energy"; "sends 50 MW into the lines", "2.0 Ω", "25 kV", "250 kV instead"), nothing answer-bearing. One crossed mistake each; feedback about 28 s and 33 s (A2 has three parts; its trap sentence is the listed trim if the voiced preview runs long).
- **Avoided double teaching:** v13's collisions recalled with a tag (2); v14's V = IR recalled in one line with a tag (4); v16's I = P/V used without re-teaching (7, 8) and its half-times-half echoed with a tag (4); FA1's conservation of energy recalled with a tag (6).
- **Syllabus coverage:** `ci13c391ee`: energy-loss problems with P = I²R (4, 5, 7, 8, A1 (a), A2) and the law of conservation of energy (6, 7, 8, A1 (b)).
- **Out of scope by design:** transformers (Year 12, grey tag); rms values; efficiency as a percentage (one optional grey readout only); series and parallel (v18 onward); internal resistance.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A cable with a total resistance of 0.50 Ω connects a generator to a workshop and carries a current of 30 A. (a) Calculate the power lost as heat in the cable. (b) The generator supplies 6.0 kW. Use the law of conservation of energy to determine the power delivered to the workshop."
Model answer: (a) P_lost = I²R = 30² × 0.50 = 900 × 0.50 = 450 W. (b) By conservation of energy, P_supplied = P_load + P_lost, so P_load = 6000 − 450 = 5550 W, about 5.6 kW (the 450 W is transformed into thermal energy in the cable, not destroyed). Classic mistake (crossed): "(a) 30 × 0.50 = 15 W" (the current not squared).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "A power station sends 50 MW into the transmission lines that supply a city. The lines have a total resistance of 2.0 Ω. (a) Calculate the power lost in the lines if the power is transmitted at 25 kV. (b) Calculate the power lost if it is transmitted at 250 kV instead. (c) Explain why the loss changes by this factor."
Model answer: (a) I = P/V = 5.0 × 10⁷ ÷ 2.5 × 10⁴ = 2000 A; P_lost = I²R = 2000² × 2.0 = 8.0 × 10⁶ W (8.0 MW). (b) I = 5.0 × 10⁷ ÷ 2.5 × 10⁵ = 200 A; P_lost = 200² × 2.0 = 8.0 × 10⁴ W (80 kW). (c) For the same power, P = VI, so ten times the voltage needs one tenth of the current. The power lost as heat is P = I²R, so it depends on the square of the current: (1/10)² = 1/100, so the loss falls by a factor of 100. Classic mistake (crossed): "(b) (250 000)² ÷ 2.0 = 3.1 × 10¹⁰ W" (the transmission voltage, not the voltage across the lines, used in V²/R).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Double-current gate | rate × 2, energy per coulomb × 2, heating × 4; half: × ¼ | 3, 4 |
| Line (site `we-1`) | 4.0 Ω, 50 A: 50² = 2500, P = 1.0 × 10⁴ W = 10 kW; 25 A: 2.5 × 10³ W = 2.5 kW | 5 |
| Activity case 1 (site) | 100 kW = 1.0 × 10⁵ W, 5.0 Ω, 1000 V: I = 100 A, P_lost = 5.0 × 10⁴ W = 50 kW, P_load = 50 kW | 7 |
| Activity case 2 (site) | 10 000 V: I = 10 A, P_lost = 500 W, P_load = 99 500 W = 99.5 kW; lost 0.5% | 8 |
| Trap | (10 000)² ÷ 5.0 = 2.0 × 10⁷ W; V_line = 10 × 5.0 = 50 V; 50² ÷ 5.0 = 500 W | 9 |
| Key note example (site quick check) | 3.0 A, 2.0 Ω: 18 W | 16 |
| A1 | 0.50 Ω, 30 A: 900 × 0.50 = 450 W; 6.0 kW: 6000 − 450 = 5550 W ≈ 5.6 kW; crossed 15 W | 11, 12 |
| A2 | 50 MW, 2.0 Ω; 25 kV: 2000 A, 8.0 × 10⁶ W; 250 kV: 200 A, 8.0 × 10⁴ W; factor 100; crossed 3.1 × 10¹⁰ W | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 50² × 4.0 = 10 000; 25² × 4.0 = 2500.
- 100 000 ÷ 1000 = 100; 100² × 5.0 = 50 000; 100 000 − 50 000 = 50 000.
- 100 000 ÷ 10 000 = 10; 10² × 5.0 = 500; 100 000 − 500 = 99 500; 500 ÷ 100 000 = 0.005.
- 10 000² ÷ 5.0 = 2.0 × 10⁷; 10 × 5.0 = 50; 50² ÷ 5.0 = 500.
- 3.0² × 2.0 = 18.
- 30² × 0.50 = 450; 6000 − 450 = 5550; 30 × 0.50 = 15.
- 5.0 × 10⁷ ÷ 2.5 × 10⁴ = 2000; 2000² × 2.0 = 8.0 × 10⁶; 5.0 × 10⁷ ÷ 2.5 × 10⁵ = 200; 200² × 2.0 = 8.0 × 10⁴; ratio 100; 250 000² ÷ 2.0 = 3.125 × 10¹⁰.
- Consistency (author note c, e): 100 × 5.0 = 500 V drop, 500 × 100 = 50 000 W; 9950 × 10 = 99 500 W; 6000 ÷ 30 = 200 V, 185 × 30 = 5550 W; 2000 × 2.0 = 4000 V.

## Memory aid check

- **"Wire loss is I squared R: halve the current, quarter the loss."** Meaning, as said in scene 10: the power lost as heat in a wire is P = I²R, so with the same wire, halving the current cuts the loss to a quarter. Assumptions checked: "the same wire" (R constant; at the temperatures of a line, R changes little, author note b); "halve the current" for the same wire, which for transmission means the same power at double the voltage; it is a statement about the loss in the wire, not about the load. True for every case in the video (4, 5, 8, A2). Introduced after the cause (4) and the transmission cases (7, 8).
- **Site memory hook:** none for lesson 16 was found in the files read; none used.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,495 characters** (5,510 joined), 16 scenes. Characters per scene (1 to 16): 334, 454, 139, 437, 474, 376, 469, 441, 382, 86, 331, 392, 322, 512, 271, 75. At 13.3 characters per second the speech is about 413 s. Holds: about 16 s of holds and settling (the camera track in 1, the energy handover in 2, the double doubling in 4, the bar splits in 7 and 8, the trap bar in 9), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 515 s**, inside the owner's 5 to 10 minute target. One syllabus point, fully taught; the count sits 5 characters under the 5,500 floor and is not padded. If the voiced preview runs long, the first cut is feedback 2's trap sentence (about 75 characters; open decision 3).

## Scene list and build ids

Lesson key `p-y11-fa3-v17` (route phys-y11-fa3-v17). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v17` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v17` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, why-wires-heat, prediction-double-current, i-squared-r, worked-line, where-energy-goes, sent-at-1000v, sent-at-10000v, which-voltage, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v16's last frame continues into scene 1 (camera continue: the landscape carries over); 1 to 2 board change (zoom into a span); 2 to 3 board change to the gate; 3 to 4 camera continue; 4 to 5 clear change to the calculation layout; 5 to 6 board change to the landscape and bar; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 camera continue; 9 to 10 fade; attempts and feedback card shrink to the top; 14 to 15 board clear (the landscape returns); 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v17-learning-review.md`, `science_check` = `checks/p-y11-fa3-v17-physics-check.md`.

## Assets

Reused (requested, not yet delivered): `phys-y11-transmission-tower-v1.png` (requested in `phys-y11-fa3-v16.md`; 1, 5 thumbnail, 6 to 8, 15); `phys-y11-house-v1.png` (requested in `phys-y11-fa2-v15.md`; side view with one window; 1, 6 to 8, and 15 until the close-up cross-fade); `phys-y11-panel-heater-v1.png` (requested in v16; 2 thumbnail). Coded parts reused from v12 (`ConductorLattice`), v13 (collisions) and v16 (`EnergyPerCoulomb`, transmission landscape).

New (requested below): `phys-y11-power-station-v1.png` (1, 6 to 8; also v16's handoff, root-aligned in v16's handoff text); `phys-y11-fairy-lights-v1.png` (15; reused throughout v18); `phys-y11-house-front-v1.png` (15 close-up; reused in v18 for the opening and thumbnails).

Checked first (3 Nov): `public/assets/physics/` has no power station, tower, house or string lights; none exists in any other subject folder under `public/assets/`.

Coded: the lattice, electrons, ions, energy chips, gates, tiles and stacks, bins, power bars, the voltage bracket, the cable cross-sections, lamp symbols and window glows, equations, rows, working.

Kit gaps (for the next physics kit brief): `ConductorLattice` energy-handover mode, `EnergyPerCoulomb` drop mode, `PowerSplitBar`, the trap readout; lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v17, power station, fairy lights and front-view house)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`.

1. `phys-y11-power-station-v1.png`: a generic thermal power station seen side-on from a distance: a plain grey turbine hall with a few windows, one tall chimney with a faint pale grey plume, a small switchyard frame at the right where the line leaves. No cooling-tower clichés, no logos, no text. About 1400 px wide, drawn to sit at the same distant scale as `phys-y11-transmission-tower-v1.png` (requested in v16). Sidecar `phys-y11-power-station-v1.json`: the switchyard's line attachment point; the ground line.
2. `phys-y11-fairy-lights-v1.png`: an old-style string of ten small incandescent fairy-light globes on one green twisted cable, laid in a gentle horizontal wave, each globe a small clear glass bulb in a plain cream holder, unlit (code adds the glow); one plug end at the left (a plain grey plug body, no markings). About 1600 px wide. Sidecar `phys-y11-fairy-lights-v1.json`: each globe's centre (ten points, left to right); the cable's start and end points.
3. `phys-y11-house-front-v1.png`: the same simple single-storey house as `phys-y11-house-v1.png` (same roof colour, walls and painted style, so the cross-fade reads as a closer view of one house), seen straight from the front: a front door in the middle and two separate front windows, one each side of the door, the glass plain and unlit (code adds the glow). No people, text or numbers. About 1200 px wide. Sidecar `phys-y11-house-front-v1.json`: each window's glass rectangle (left, right) for the coded glow and lamp symbols; the roof-line point where the supply line attaches.

Acceptance: true transparency, no halo; no text, numerals, logos or brand marks; no red or navy (the globes clear, the cable green; the house trim neutral); not stretched; lighting consistent with v16's appliance and tower plates; the front-view house matches `phys-y11-house-v1.png` in colour and style.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: collisions between drifting electrons and lattice ions transfer energy to the lattice as thermal energy; P = I²R from P = VI and V = IR; doubling the current at constant R quadruples the loss because both the charge per second and the energy per coulomb double; P_supplied = P_load + P_lost by conservation of energy; for the same power, raising V by 10 lowers I by 10 and the I²R loss by 100; V²/R gives the line loss only with the voltage across the line; thicker cables reduce R.
3. Confirm no transformer mechanism, rms value, percentage-efficiency calculation (beyond the optional grey readout) or series/parallel rule is taught.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly (I² typeset inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v16.md` scene 17.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Energy Loss in Wires, P = I²R and High-Voltage Power Lines | Year 11 Physics

(Title length: 75 characters; shorter option "Energy Loss in Circuits, P = I²R | Year 11 Physics", 51 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson16.sa.html

The same power can be sent to a town as a big current at a low voltage or a small current at a high voltage. Which wastes less? See why electrons colliding with a wire's ions turn electrical energy into heat, why doubling the current makes four times the heat, and how P = I²R and conservation of energy tell you exactly how much power reaches the town. Then see why ten times the voltage cuts the loss a hundred times, and the V²/R trap to avoid. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems relating to energy loss in circuits using P = I²R and the law of conservation of energy" (ci13c391ee)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Electrical power, P = VI (previous video). Next: Series and parallel circuits.

#Year11Physics #Physics #PowerLoss #HSCScience

## Open decisions

- **1. v18's question (proposal).** The handoff chip uses "Why does one broken globe switch off a series circuit but not a parallel one, and how can you tell which is which from a diagram?" for phys-y11-fa3-v18 (route placeholder "How can I explain and apply series and parallel circuits?"; its points are `cibb8ff1ad` and `ci5f108f5a`). `phys-y11-fa3-v18.md` adopts it. Root to enter it in the route.
- **2. The "which V?" scene (9).** Not in the site lesson; added because using the sending voltage in V²/R is the most common exam error on this point and the scene costs about 30 s. If the learning review finds it crowded, it moves to feedback 2's crossed chip alone (already there).
- **3. A2 is 4 marks with three parts.** Feedback 2 runs about 33 s. If the voiced preview runs long, the trap sentence in 14 is cut (scene 9 already teaches it; the crossed chip stays on screen).
- **4. Power station plate.** v16's handoff named a coded power station block; this design requests a painted plate for both and root aligns v16's handoff text (done in this design pass: v16 now names `phys-y11-power-station-v1.png`).
- **5. Route refinement (root to record).** Question as above; start "Begin at v16's transmission landscape; recall collisions, V = IR and P = VI"; stop "Stop at P = I²R and the supplied-delivered-lost account for one line; hand connections and diagrams to v18". Entry knowledge should add v12, v13 and v16.
- **6. Site link form.** As FA1 v08.
- **7. Length.** 5,495 characters (about 515 s), 5 under the band floor, with one syllabus point fully taught (precedent: FA1 root decision 12, FA3 root decision 8). Root to accept, or the learning review names a gap to fill.

## Review notes

- Revision 1 next steps: student learning review (trace from v16 at Year 11 entry; check that the gold chips passing to the ions make heating a cause; that the doubled tile rate and doubled stack make "four times" convincing before the formula; that the split bar makes conservation visible; that the 1000 V and 10 000 V cases answer the hook; that the trap scene does not confuse; that the attempts give nothing away), then the Codex physics check and error check.
- The energy handover in the lattice (2), the double doubling at the gate (4), the split bar shrinking to a sliver (7, 8) and the trap bar overshooting the supplied power (9) carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (5 November 2026, brief 164 repairs)

- Should fix 1 (both reviews): attempt 2 now says "A power station sends fifty megawatts into the lines that supply a city", so 50 MW is the sending-end power that the current and loss use (I = 2.0 × 10³ A and 8.0 MW at 25 kV; 2.0 × 10² A and 80 kW at 250 kV, unchanged). The card and printed question match.
- Should fix 2 (both reviews, v17/v18 house join): the handoff needs two separately lit front windows, and `phys-y11-house-v1.png` is a one-window side view. A new plate `phys-y11-house-front-v1.png` (the same house from the front, two windows either side of the door) is added to the asset brief; scene 15 cross-fades to it at the close-up, and the side-view plate is used only until then. v18 opens on the front-view plate. Visual only.
- Narration count: 5,527 characters (build parser rule), about 517 s with the stated holds (17 characters longer than the reviewed 5,510; within the cap).
