# Year 11 Physics FA3 V16 (Physics 2025, Year 11, Focus Area 3): Why do a voltage and a current together set how fast a component transfers energy? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v16`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: five new (electric kettle, toaster, panel heater, desk fan, transmission tower); four reused requests (the wall power point from v12, the filament lamp and house from FA2, the power station from v17).

Narration 6,208 characters, 18 scenes, about 569 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). Inside the 5,500 to 6,800 band: three syllabus points plus the site's P = V²/R, fully taught; at the cap, not padded.

Scope: sixteenth video of the Year 11 Physics (2025) Focus Area 3 route: power as the rate of energy transformation (P = W/Δt = ΔE/Δt, the watt); what a power rating says about an appliance's energy transformations; E = Pt problems; why P = VI (joules per coulomb times coulombs per second); finding the current an appliance draws (I = P/V); P = V²/R from P = VI and V = IR; why, at a fixed voltage, a lower resistance transforms energy faster; why halving the voltage across a fixed resistance quarters the power. Templates: `phys-y11-fa1-v22.md` (concept format) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions, section list and colour key from `phys-y11-fa3-v10.md` to `phys-y11-fa3-v12.md` (Revision 1). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson15.sa.html` (intro, hook, warm-up, intentions, key terms, misconceptions 1 and 2, card 1 power as the rate of energy transformation, true or false, card 2 solving problems with P = VI with `we-1` and its figure description, quick check, activity 1 rate the appliances, fill the blanks, card 3 P = V²/R, last check, two truths one lie, independent practice Q1 to Q3, retrieve). Route entry: `phys-y11-fa3-v16` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Electrical Power, P = VI and P = V²/R. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply electrical power, p = vi and p = v²/r? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v17: How can I explain and apply energy loss in circuits, p = i²r?" (this design proposes "Why do wires waste energy as heat, and why does sending power at a high voltage waste less?" for v17's chip; `phys-y11-fa3-v17.md` adopts it; see open decision 1).

**Opening frame (v15's actual handoff, Revision 1, final; root note 3 Nov).** v15's scene 19 ends with the two finished set-ups side by side: the resistance wire at 3.00 V and 0.60 A, faintly warm; the painted filament lamp (`phys-y11-filament-lamp-v1.png`) at 6.0 V and 0.28 A, glowing; a hollow gold energy arrow (FA2 root decision 3) leaving each; chips "both transfer energy" and "which one does it faster?"; a grey row "V × I = ?" under each (no product shown); chip "Next: Why do a voltage and a current together set how fast a component transfers energy?". This video opens on that frame, and its hook is v15's unshown products (1.80 W for the wire, 1.68 W for the lamp; v15 author note h; root note). An earlier draft assumed a different frame and used the site's kettle-and-charger hook; both were replaced.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines (appliances are already plugged in when they appear; switches close by code); the kettle, toaster, heater, fan, power point, lamp and transmission tower painted (apparatus and objects); energy arrows, coulomb tiles, the charge gate, equations, readouts, circuit diagrams and graphs coded (abstract diagrams); one reasoning stage at a time; calculations laid out as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 1); original questions; key-notes hold; Australian spelling; no em dashes; v09 (W = qV), v10 (volts are joules per coulomb), v11 (I = q/t; coulomb tiles and the charge gate), v13 (resistance), v14 (V = IR) and FA1's energy transformations recalled in a phrase each.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electric circuits"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (typeset fractions rendered inline, FA2 root decision 11):

- P25-FA3-G2-09 `ci630dcbe5`: "Relate power to energy transformations"
- P25-FA3-G2-10 `ciabf03b85`: "Solve problems using P = W/Δt = ΔE/Δt"
- P25-FA3-G2-11 `ci97643202`: "Describe the relationship between power and voltage using P = VI"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v15's handoff (see "Opening frame"); the hook (v15's warm wire at 3.00 V, 0.60 A and glowing lamp at 6.0 V, 0.28 A: which transfers energy faster?); power as the rate of energy transformation, P = W/Δt = ΔE/Δt, the watt (`ciabf03b85`); power ratings and the transformations in a kettle, a lamp and a fan (`ci630dcbe5`); E = Pt with a minutes conversion (site Q2); P = VI from joules per coulomb times coulombs per second (`ci97643202`); the hook answered (1.80 W and 1.68 W: the dull wire is slightly faster; voltage and current both count); I = P/V (site `we-1`); P = V²/R from P = VI and V = IR (site card 3 and Q1); at a fixed voltage, lower resistance means more power; halving the voltage on a fixed resistance quarters the power (site misconception 2); memory aid; two attempts. Stops at the power delivered to a single component. Not taught: P = I²R and the heat lost in connecting wires (v17 owns `ci13c391ee`; the handoff only asks); conservation of energy across a whole circuit (v17); efficiency calculations; kilowatt-hours and electricity bills; series and parallel (v18 onward); peak and rms values on AC (the mains is treated as a steady 240 V supply, author note d).

## Decisions

- **Learner question (v15's proposal; root entered it in the route, FA3 root decision 20).** "Why do a voltage and a current together set how fast a component transfers energy?" One causal question carrying all three points: "how fast a component transfers energy" is power related to energy transformations (`ci630dcbe5`) and P = ΔE/Δt (`ciabf03b85`); "why do a voltage and a current together set" asks for the reason behind P = VI (`ci97643202`). (This design first proposed "Why does voltage times current tell you how fast an appliance transforms energy?"; root's wording is adopted.) Answer, built in order: hook (1); power as a rate (2); transformations and ratings (3); E = Pt (4); why P = VI (5); the hook answered (6); I = P/V (7); P = V²/R (8); lower resistance, more power at a fixed voltage (9); the quarter-power prediction and its cause (10, 11); memory aid (12).
- **The mechanism made visible (owner quality bar).** **`EnergyRateMeter`** (new): a coded tally of gold energy blocks (each block 100 J or 1 J by scene, labelled) dropping into a bin each second beside a stopwatch, with a live "J ÷ s = W" readout; two meters side by side race at different rates. **`EnergyPerCoulomb`** (new, built on v11's `ChargeGate` and v05's coulomb tile): coulomb tiles pass a gate, each carrying a stack of gold energy blocks sized by the voltage ("240 J per coulomb"); the gate counts tiles per second (the current); multiplying the stack by the count fills the `EnergyRateMeter`. The hook is answered by two of these side by side: the lamp's tiles carry twice the stack of the wire's (6.0 J against 3.0 J per coulomb), but the wire's gate passes more than twice as many tiles each second (0.60 against 0.28 coulombs per second), so the wire's meter fills slightly faster.
- **Energy transformations (`ci630dcbe5`).** Three painted appliances (kettle, filament lamp, desk fan) each take in a hollow gold "electrical energy" arrow (FA2 root decision 3) that splits into labelled outputs in the FA1 energy colours: thermal warm grey (kettle: nearly all; lamp: most), light as a pale gold glow arrow (lamp: a little), kinetic blue (fan: most, with a thin warm grey "thermal" and a thin "sound" sliver). No percentages are claimed (author note b). The rating chip on each ("2400 W", "60 W", "40 W") reads "joules transformed each second".
- **The W symbol clash.** The syllabus writes P = W/Δt with W as work. A grey gloss appears with the equation: "W here: work done, in joules. The unit W (watt) is different." Consistent with FA3 root decision 16 (W is work done).
- **Worked examples (site numbers unchanged, tagged "site worked example").** (4) a 1200 W heater for 5.0 min: 3.6 × 10⁵ J (site Q2); (7) a 1200 W toaster on 240 V: 5.0 A (site `we-1`); (8) a 24 Ω heater element on 240 V: 2400 W, with the 10 A check (site Q1). The hook uses v15's illustrative data (wire 3.00 V, 0.60 A; lamp 6.0 V, 0.28 A). The site's kettle-and-charger hook is not used (site correction 1 still logged).
- **Prediction 1 (3 s, scene 1, from v15's chip).** "Which transfers energy faster: the glowing lamp or the dull wire?" Chips "the glowing lamp?", "the warm wire?". Answered in 6 (1.80 W against 1.68 W). The surprise teaches that brightness is not power, and that voltage and current both count. Why the lamp glows anyway (its energy goes into a tiny filament, which gets far hotter) is one sentence (author note a).
- **Prediction 2 (3 s, scene 10): halve the voltage.** "Halve the voltage on the same element: half the power, or less?" Chips "half: 1200 W?", "a quarter: 600 W?". Answered in 11 by the two halvings (half the energy per coulomb, half the coulombs each second), not by the formula alone. This is site misconception 2 ("higher voltage always means higher power") turned into a cause.
- **Lower resistance, more power (9).** At a fixed voltage, a smaller resistance lets a bigger current through (v14), so more coulombs each pass on the same energy every second. The kettle's 24 Ω element sits beside a 60 W lamp's 960 Ω (hot) filament as a two-row comparison (author note c). The words "at a fixed voltage" stay on screen, because v17 shows the opposite trend for a fixed current (P = I²R); v17 resolves the two.
- **Attempts (original, HSC style).** (A1, calculate and relate) "An electric heater draws a current of 8.0 A from a 240 V supply. (a) Calculate the power of the heater. (b) Calculate the energy it transforms in 15 minutes, and state the main energy transformation. (3 marks)" Answer: 1920 W, about 1.9 × 10³ W; 900 s; 1.728 × 10⁶ J, about 1.7 × 10⁶ J; electrical energy to thermal energy. Crossed: "(b) 1920 × 15 = 28 800 J". (A2, P = V²/R) "A heating element is designed to run on 12 V and has a resistance of 4.0 Ω. (a) Calculate its power at 12 V. (b) A flat battery supplies only 6.0 V. Assuming the resistance of the element stays the same, calculate the new power and explain why it is not half the power in (a). (3 marks)" Answer: 36 W; 9.0 W; halving V halves the energy per coulomb and (at constant R) halves the current, so the power is a quarter. Crossed: "(b) 18 W".
- **Mistake scene:** none separate. "Power and energy are the same thing" (2; site misconception 1); "the brighter component must transfer energy faster" (1, 6, chip crossed); "a higher voltage always means more power" (10, 11; site misconception 2); "multiplying by minutes" (feedback 1 crossed); "halving the voltage halves the power" (10, 11, feedback 2 crossed).
- **Memory aid:** "Volts are joules per coulomb. Amps are coulombs per second. So volts times amps are joules per second." (see "Memory aid check"). It extends v10's memory line ("Volts are joules per coulomb") and v11's ("Current is coulombs per second").
- **Handoff (route next; proposal for v17's question).** Board change: the kettle from scene 1 on its power point, its cord drawn as a coded cutaway showing two copper conductors with a faint warm grey glow and a tag "the cord has resistance too"; the camera pulls back to the transmission landscape: the painted power station (`phys-y11-power-station-v1.png`, requested in `phys-y11-fa3-v17.md`) at the left, the painted transmission tower (`phys-y11-transmission-tower-v1.png`) repeated along a long coded line, and the painted house (`phys-y11-house-v1.png`, FA2 request) at the right; the line glows faintly warm grey along its length; chips "how much power heats the wires?" and "why such high voltages?"; then "Next: Why do wires waste energy as heat, and why does sending power at a high voltage waste less?". This is the frame v17 opens on. P = I²R is not shown (v17 owns it).
- **Site sources used:** intro (power ratings; 2400 W kettle vs 60 W lamp: 3, 9); hook (kettle and charger: not used, v15's data replace it; site correction 1 logged); warm-up (1000 W and 2000 W heaters: folded into 7 as "twice the power would need twice the current"); intentions (all: 2 to 11); key terms (power, energy transformation, watt, rating: 2, 3); misconceptions 1 and 2 (2; 10, 11); card 1 (5); true or false (2); card 2 and `we-1` with its figure (7; the figure's ammeter is not drawn, meters are v19); quick check (12 V, 0.50 A, 6.0 W: not used, practice); activity 1 (kettle current and resistance: 9; charger not used, site correction 2); fill the blanks (E = Pt: 4); card 3 (8); last check (30 Ω, 60 V, 120 W: key notes example only, not voiced); two truths one lie (2); Q1 (8); Q2 (4); Q3 (6, 7).
- **Site corrections (quoted from site lesson 15, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Hook: "A kettle and a phone charger both plug into the same 240 V socket, yet the kettle draws nearly 40 times the power." With the lesson's own activity 1 values (kettle 2400 W, charger 25 W), the ratio is 2400 ÷ 25 = 96. Suggest: "draws nearly 100 times the power" (or change the charger to 60 W if "40 times" is wanted).
  2. Activity 1, step (2): "using R = V/I, work out each one's resistance" (for the phone charger). A phone charger is an electronic power supply, not a resistor: V/I gives only an effective value at that moment, and it changes with load. Suggest: compare the kettle with a 60 W lamp (two resistive loads), or add "treat each as a simple resistance".
  3. Misconceptions box, misconception 2, "Right" side: "For a fixed resistance, P = V²/R so power rises with the square of voltage, but power also depends on the resistance and the current that flows." Correct, but it never says why. Suggest adding: "Halving the voltage halves the energy each coulomb carries and halves the current, so the power falls to a quarter." (Optional improvement; not an error.)
  - Checked and correct: card 1 derivation (V = E/q times I = q/t); `we-1` (1200 ÷ 240 = 5.0 A); quick check (B, 6.0 W); last check (60² ÷ 30 = 120 W); Q1 (2400 W, 10 A); Q2 (3.6 × 10⁵ J); Q3 (10 A; 4.17, so 4.2 A; the "almost two and a half times" comparison, 10 ÷ 4.17 = 2.4).
- **Cause chain taught, in order:** (1) a dull wire and a glowing lamp: which transfers energy faster? (1); (2) power is how fast energy is transformed, P = W/Δt = ΔE/Δt, joules per second (2); (3) a rating is the joules each second an appliance transforms from electrical energy into thermal, light or kinetic energy (3); (4) E = Pt, with time in seconds (4); (5) voltage is joules per coulomb and current is coulombs per second, so their product is joules per second (5); (6) the lamp has twice the energy per coulomb but less than half the coulombs per second, so the wire is slightly faster: you need both (6); (7) I = P/V (7); (8) with V = IR, P = V²/R (8); (9) at a fixed voltage, lower resistance lets more coulombs through each second, so more power (9); (10) halving V halves both the energy per coulomb and the current, so a quarter of the power (10, 11); (11) memory aid (12).
- **Entry knowledge (route `entryKnowledge`):** v09 (W = qV), v10 (a voltage is the energy each coulomb gains or loses; volts are joules per coulomb), v11 (I = q/t; current is coulombs per second; the charge gate), v13 (resistance opposes the drift; more resistance, less current for the same voltage), v14 (V = IR, I = V/R), v15 (a filament lamp gets hot as the current rises), FA1 energy (energy is transformed, not used up; joules), each recalled in a phrase; Stage 5 Science (energy forms and transformations); Stage 5 Mathematics (rearranging, squaring, scientific notation, minutes to seconds).
- **Learner-visible vocabulary (plain meaning at first use):** power (how fast energy is transformed, in joules per second, 2); watt, W (one joule per second, 2); energy transformation (energy changing from one form to another, 2, 3); power rating (the energy each second an appliance transforms at its normal voltage, 3); heating element (the wire or coil that gets hot in a kettle or heater, 3).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`EnergyRateMeter`** (new: gold energy blocks into a bin against a stopwatch, a live J ÷ s readout; two meters can race); **`EnergyPerCoulomb`** (new: v11's `ChargeGate` with coulomb tiles carrying gold energy stacks sized by the voltage, a tiles-per-second count, and the product feeding an `EnergyRateMeter`); **`EnergySplit`** (new: a hollow gold input arrow splitting into labelled output arrows in the FA1 energy colours, anchored to a plate's sidecar point); **unit-cancel row** (J/C × C/s = J/s, with the C's struck through in grey); **cord cutaway** (two coded conductors inside a sheath, with a warm glow); **transmission landscape** (the power station plate, a long coded line strung on the tower plate, the house plate); `AlignedAlgebra` (P = VI to I = P/V; P = VI with I = V/R to P = V²/R; ΔE = PΔt); calculation layout (task strip, equation strip, givens group); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v12 (positive red "+", electrons navy "−", signs always printed; conventional current bold ink "I", electron flow navy dotted, FA3 root decision 17); electrical energy as a hollow gold arrow and gold blocks; outputs in the FA1 energy colours (thermal warm grey, kinetic blue, light a pale gold glow arrow distinct from the hollow gold input by its soft edge and the label "light"); coulomb tiles as in v11; crossed items grey scribble; plates avoid red and navy.
- **Board layout (constant):** heading top-left; the appliance or apparatus in the left 55 per cent; the calculation layout (task, equation, givens, working) in the right column.
- **No human figures.** None; the appliances are plugged in when they appear; no one switches them on.
- **Author notes (not learner copy):**
  (a) Hook: 3.00 × 0.60 = 1.80 W; 6.0 × 0.28 = 1.68 W (v15's illustrative data; v15 author note h). The lamp glows because its 1.68 W goes into a very thin, short filament with little surface to lose heat, so it runs at well over 2000 °C; the wire's 1.80 W is spread along a long coil that stays only warm. Said as "a tiny filament, which gets far hotter".
  (b) Energy splits: no percentages are shown. A filament lamp emits only a few per cent as visible light; the lamp's light arrow is drawn thin. A fan motor turns most of its input into kinetic energy of the air and blades (eventually thermal); the thin thermal and sound slivers are qualitative.
  (c) 60 W lamp at 240 V: I = 0.25 A, R = 240 ÷ 0.25 = 960 Ω when hot (it is far lower when cold: v15). Kettle element: 240 ÷ 10 = 24 Ω. The comparison row says "lamp filament (hot): 960 Ω".
  (d) Mains values: the site's 240 V is kept as the teaching value (many exam papers still use it; the Australian standard is now 230 V nominal). A grey tag on first use: "240 V: the usual exam value". AC is treated as an equivalent steady supply; rms is not mentioned (v12 decided no peak or rms).
  (e) Quarter-power cause: with constant R, I = V/R halves when V halves; each coulomb carries V joules, so P = V × I falls to ½ × ½ = ¼. The assumption "the resistance stays the same" is spoken in 10 and on the A2 card, because a filament's resistance falls when it cools (v15).
  (f) A1: P = 240 × 8.0 = 1920 W (3 s.f. shown in working, about 1.9 × 10³ W to 2 s.f.); E = 1920 × 900 = 1 728 000 J, about 1.7 × 10⁶ J. The crossed slip 1920 × 15 = 28 800 J.
  (g) Pronunciations: "delta E", "delta t"; "two thousand four hundred watts"; "ten to the five"; "ohms".

Main question: *In the investigation, a resistance wire stayed only warm while a lamp glowed, yet the wire transferred energy slightly faster. Why do a voltage and a current together set how fast a component transfers energy?*
Entry knowledge (v09 W = qV; v10 joules per coulomb; v11 I = q/t; v13 resistance; v14 V = IR; FA1 energy transformations).
Stops after: power as a rate and its unit; ratings and transformations; E = Pt; P = VI and why; I = P/V; P = V²/R; lower resistance, more power at a fixed voltage; the quarter-power cause. No P = I²R, no wire losses, no efficiency, no kilowatt-hours.
Handoff: v17, energy lost as heat in wires (P = I²R and conservation of energy).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v12.

### 1. hook (the dull wire or the glowing lamp?)
> Here are the two from the investigation. The resistance wire has three volts across it, and carries point six oh amps. It's only faintly warm. The lamp has six volts across it, carries point two eight amps, and glows brightly. Both are transforming electrical energy. So which one transforms it faster, the glowing lamp or the dull **wire**?

Visual: opens on v15's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Electrical power". On "three volts" the wire's readouts "3.00 V" and "0.60 A" pulse; on "faintly warm" its faint warm glow; on "six volts" the lamp's "6.0 V" and "0.28 A" pulse; on "glows brightly" the lamp's glow brightens. On "transforming electrical energy" the two hollow gold arrows pulse. The grey rows "V × I = ?" stay unanswered. On "wire" chips "the glowing lamp?" and "the warm wire?" and a 3-second countdown ring.

### 2. power is a rate
> First, what does a watt measure? Power is how fast energy is transformed, from one form into another. It's the work done, or the energy transformed, divided by the time taken. P equals W over delta t, which equals delta E over delta t. Energy is in joules and time in seconds, so power is in joules per second, and one joule per second is one watt. So power isn't an amount of energy. A lamp and a kettle could transform the same energy, but the kettle does it far **faster**.

Visual: board change: two `EnergyRateMeter`s side by side under small kettle and lamp thumbnails, each with a stopwatch. On "how fast energy is transformed" gloss "power: how fast energy is transformed". On "P equals W over delta t" the equation strip writes "P = W/Δt = ΔE/Δt" with the grey gloss "W here: work done, in joules. The unit W (watt) is different."; on "joules per second" the unit row "J ÷ s = J s⁻¹"; on "one watt" "1 W = 1 J s⁻¹", boxed. On "the same energy" both bins carry the same target line "24 000 J"; the kettle's bin fills in 10 s, the lamp's (60 W) keeps filling slowly (stopwatch fast-forwarded, readout "400 s"); on "faster" a chip "power ≠ energy: watts are joules per second". Tag "illustrative values".

### 3. where the energy goes
> And where does the energy go? In a kettle, electrical energy is transformed into thermal energy in the heating element, the coil that gets hot. In a lamp, it becomes light, and plenty of heat as well. In a fan, most of it becomes kinetic energy of the spinning blades. In every case the energy isn't used up. It changes form. So a power rating tells you how many joules the appliance transforms each second, at its normal **voltage**.

Visual: board change: three painted appliances in a row: kettle, filament lamp (`phys-y11-filament-lamp-v1.png`, glowing), desk fan (`phys-y11-desk-fan-v1.png`). `EnergySplit` on each, one per cue: on "thermal energy in the heating element" a hollow gold "electrical" arrow enters the kettle and leaves as a broad warm grey "thermal" arrow (gloss "heating element: the coil that gets hot"); on "light, and plenty of heat" the lamp's arrow splits into a thin pale gold "light" glow arrow and a broad warm grey "thermal" arrow; on "kinetic energy" the fan's arrow splits into a broad blue "kinetic" arrow with thin "thermal" and "sound" slivers, and the blades turn. On "changes form" a line under all three: "energy in = energy out, in new forms" (tag "from the energy videos"). On "voltage" rating chips "2400 W", "60 W", "40 W" with the shared gloss "rating: joules transformed each second at the normal voltage".

### 4. worked example: energy from power
> Task: a twelve hundred watt heater runs for five point oh minutes. Find the energy it transforms. Rearranged, delta E equals P times delta t. The givens: P is twelve hundred watts, and delta t is five point oh minutes. Watts are joules per second, so convert first: five point oh minutes is three hundred seconds. So delta E is twelve hundred times three hundred, which is three point six times ten to the five joules, nearly all of it thermal **energy**.

Visual: clear change to the calculation layout; the painted panel heater (`phys-y11-panel-heater-v1.png`) at the left with a rating chip "1200 W" and a stopwatch "5.0 min". Task strip: "Find the energy the heater transforms" (grey tag "site worked example"). Equation strip: "ΔE = PΔt" (from "P = ΔE/Δt"). Givens group: "P = 1200 W"; "Δt = 5.0 min". Rows, one per cue: on "convert the time first" "Δt = 5.0 × 60 = 300 s" (the givens row updates to "Δt = 5.0 min = 300 s"); "ΔE = 1200 × 300"; "= 3.6 × 10⁵ J", boxed; on "energy" a broad warm grey "thermal" arrow leaves the heater.

### 5. why P equals V I
> Now, where do volts and amps come in? A voltage is the energy each coulomb gains or loses, in joules per coulomb. And a current is the number of coulombs passing each second. So multiply them. Joules per coulomb, times coulombs per second, gives joules per second. That's power. So P equals V **I**. A bigger voltage gives each coulomb more energy, and a bigger current sends more coulombs through each second. Either way, energy is transformed **faster**.

Visual: board change: `EnergyPerCoulomb`: a coded wire through a lamp symbol with v11's `ChargeGate`; coulomb tiles drift through the gate. On "joules per coulomb" each tile carries a small stack of gold energy blocks, labelled "V: joules per coulomb" (tag "from the voltage video"); on "coulombs passing each second" the gate's count reads "I: coulombs per second" (tag "from the current video"). On "multiply them" the unit-cancel row writes "J/C × C/s = J/s", the two C's struck through in grey; on "That's power" "J/s = W"; on "P equals V I" the equation "P = VI", boxed, and the `EnergyRateMeter` beside the lamp fills as stacks × tiles. On "more energy" the stacks grow; on "more coulombs" more tiles pass each second; on "faster" the meter's fill rate rises both times.

### 6. the hook answered
> Back to the investigation. For the wire, three times point six oh is one point eight oh watts. For the lamp, six times point two eight is one point six eight watts. So the dull wire transforms energy slightly faster. The lamp has twice the voltage, but less than half the current. You need both. The lamp glows because its energy goes into a tiny filament, which gets far **hotter**.

Visual: board change: v15's two set-ups return, each with an `EnergyPerCoulomb` gate and a small `EnergyRateMeter`. On "three times point six oh" the wire's grey row fills "P = VI = 3.00 × 0.60 = 1.80 W", boxed; on "six times point two eight" the lamp's "P = 6.0 × 0.28 = 1.68 W", boxed; the two meters fill, the wire's slightly faster. On "twice the voltage" the lamp's tiles carry stacks twice as tall ("6.0 J per coulomb" against "3.0 J per coulomb"); on "less than half the current" the wire's gate passes more than twice as many tiles. The chip "the warm wire?" glows and "the glowing lamp?" takes a grey scribble cross; on "You need both" the row "P depends on V and I together". On "hotter" the filament enlarges in a small inset beside the long coil (tag "a tiny filament gets far hotter than a long coil").

### 7. worked example: the current an appliance draws
> Usually, you want the current an appliance draws. Task: a toaster is rated twelve hundred watts, on the two hundred and forty volt mains. Find the current. Rearranged, I equals P over V. The givens: P is twelve hundred watts, and V is two hundred and forty volts. So I is twelve hundred divided by two hundred and forty, which is five point oh amps. Twice the power would need twice the **current**.

Visual: clear change to the calculation layout; the painted toaster (`phys-y11-toaster-v1.png`) at the left on its power point, rating chip "1200 W". Task strip: "Find the current the toaster draws" (grey tag "site worked example"). Equation strip: "P = VI → I = P/V" (`AlignedAlgebra`). Givens group: "P = 1200 W"; "V = 240 V". Rows: "I = 1200 ÷ 240"; "= 5.0 A", boxed. On "twice the power" a grey check row "2400 W at 240 V → 10 A: twice the current".

### 8. power from voltage and resistance
> What if you know the voltage and resistance, but not the current? From Ohm's law, the current is V over R. Put that into P equals V I, and you get P equals V squared over R. Task: a heater's element has a resistance of twenty-four ohms, on two hundred and forty volts. Find its power. The givens: V is two hundred and forty volts, R is twenty-four ohms. Two hundred and forty squared is fifty-seven thousand six hundred, and over twenty-four that's two thousand four hundred **watts**.

Visual: camera continue; the toaster fades; the panel heater returns with a coded cutaway of its element (a zigzag coil) labelled "24 Ω". Equation strip, one line per cue (`AlignedAlgebra`): "I = V/R" (tag "Ohm's law, from the V = IR video"); "P = VI = V × V/R"; "P = V²/R", boxed. Task strip: "Find the power of the heater element" (grey tag "site worked example"). Givens group: "V = 240 V"; "R = 24 Ω". Rows: "P = 240² ÷ 24"; "= 57 600 ÷ 24"; on "watts" "= 2400 W", boxed; a grey check row "I = 240 ÷ 24 = 10 A; P = 240 × 10 = 2400 W ✓".

### 9. lower resistance, more power
> Notice that this powerful heater has quite a small resistance. At a fixed voltage, a smaller resistance lets a bigger current through. Each coulomb still carries the same energy, but more of them pass every second, so energy is transformed faster. That's why a kettle element has a much lower resistance than a lamp **filament**.

Visual: board change: two rows, each with a plate thumbnail, a resistance chip and a small `EnergyPerCoulomb` gate on "240 V": "kettle element: 24 Ω, 10 A, 2400 W" and "lamp filament (hot): 960 Ω, 0.25 A, 60 W". On "a smaller resistance lets a bigger current through" the kettle gate floods with tiles, the lamp gate trickles (tag "I = V/R"); on "the same energy" both tiles carry identical "240 J" stacks. A header band reads "at a fixed voltage" throughout (author note c).

### 10. prediction: halve the voltage
> Now halve the voltage across that same heater element, to one hundred and twenty volts. Assume its resistance stays the same. Does the power halve, or drop even **more**?

Visual: camera continue; back to the heater element "24 Ω"; the voltage label "240 V" ticks down to "120 V"; tag "assume R stays the same". On "more" chips "half: 1200 W?" and "a quarter: 600 W?" and a 3-second countdown ring.

### 11. half times half
> It drops to a quarter. Half the voltage means each coulomb carries half the energy. And with the same resistance, half the voltage pushes only half the current. Half the energy per coulomb, times half the coulombs per second, gives a quarter of the power. That's what the squared V means. One hundred and twenty squared over twenty-four is six hundred watts. So more voltage doesn't automatically mean more power. It depends on the **resistance** too.

Visual: camera continue; an `EnergyPerCoulomb` gate on the element. On "half the energy" every tile's stack halves ("120 J per coulomb"); on "half the current" the tile rate halves ("5.0 A"); on "a quarter of the power" the row "½ × ½ = ¼", and the `EnergyRateMeter` fill rate drops to a quarter; on "six hundred watts" "P = 120² ÷ 24 = 14 400 ÷ 24 = 600 W", boxed; the chip "a quarter: 600 W?" glows and "half: 1200 W?" takes a grey scribble cross. On "resistance" a chip "higher V always means more P" fades in and takes a grey scribble cross.

### 12. memory aid
> To remember it: volts are joules per coulomb, amps are coulombs per second, so volts times amps are joules per **second**.

Visual: the handwritten line writes large: "Volts are joules per coulomb. Amps are coulombs per second. So volts × amps are joules per second." On "joules per coulomb" a single tile's stack pulses; on "coulombs per second" the gate count; on "joules per second" the meter's fill. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electric heater draws a current of eight point oh amps from a two hundred and forty volt supply. Calculate its power. Then calculate the energy it transforms in fifteen minutes, and state the main energy transformation. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "An electric heater draws a current of 8.0 A from a 240 V supply. (a) Calculate the power of the heater. (b) Calculate the energy it transforms in 15 minutes, and state the main energy transformation. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> P equals V I: two hundred and forty times eight point oh is one thousand nine hundred and twenty watts, about one point nine **kilowatts**. Fifteen minutes is nine hundred seconds, so delta E is one thousand nine hundred and twenty times nine hundred, about one point seven times ten to the six **joules**. Electrical energy becomes thermal energy in the **element**. Multiplying by fifteen instead of nine hundred is the classic **slip**.

Visual: card shrinks to the top; "8.0 A", "240 V", "15 minutes" and "energy transformation" underlined. Calculation layout: equation "P = VI"; givens "V = 240 V", "I = 8.0 A"; on "kilowatts" "(a) P = 240 × 8.0 = 1920 W ≈ 1.9 × 10³ W", boxed. Equation "ΔE = PΔt"; givens "Δt = 15 × 60 = 900 s"; on "joules" "(b) ΔE = 1920 × 900 = 1.728 × 10⁶ J ≈ 1.7 × 10⁶ J", boxed; on "element" "electrical → thermal". On "slip" a chip "1920 × 15 = 28 800 J" fades in and takes a grey scribble cross. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A heating element is designed to run on twelve volts, and its resistance is four point oh ohms. Calculate its power at twelve volts. Then a flat battery supplies only six point oh volts. Assuming the element's resistance stays the same, calculate the new power, and explain why it isn't half. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A heating element is designed to run on 12 V and has a resistance of 4.0 Ω. (a) Calculate its power at 12 V. (b) A flat battery supplies only 6.0 V. Assuming the resistance of the element stays the same, calculate the new power and explain why it is not half the power in (a). (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> P equals V squared over R: twelve squared is one hundred and forty-four, and over four point oh that's thirty-six **watts**. At six point oh volts, thirty-six over four point oh is nine point oh watts, a **quarter**. Halving the voltage halves the energy each coulomb carries, and it also halves the current. Half times half is a quarter. Eighteen watts is the classic **slip**.

Visual: card shrinks to the top; "12 V", "4.0 Ω", "6.0 V" and "stays the same" underlined. Equation "P = V²/R"; on "watts" "(a) P = 12² ÷ 4.0 = 144 ÷ 4.0 = 36 W", boxed; on "quarter" "(b) P = 6.0² ÷ 4.0 = 36 ÷ 4.0 = 9.0 W", boxed; a small gate replays the stacks halving and the tile rate halving; row "½ × ½ = ¼". On "slip" a chip "(b) 18 W" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. handoff
> So P equals V I, for any component. But here's a puzzle. The wires in the kettle's cord have resistance too, so they warm up a little. And the power lines that bring electricity to a town are kilometres long. How much power is wasted heating those wires, and why is electricity sent along them at such high **voltages**?

Visual: board change: the memory line small at the top. The kettle from scene 1 on its power point; on "the kettle's cord" the cord enlarges as a coded cutaway (two copper conductors in a grey sheath) with a faint warm grey glow and a tag "the cord has resistance too". On "power lines" the camera pulls back to the transmission landscape: the painted power station (`phys-y11-power-station-v1.png`, requested in `phys-y11-fa3-v17.md`) at the left, the painted transmission tower (`phys-y11-transmission-tower-v1.png`) repeated along a long coded line, and the painted house (`phys-y11-house-v1.png`) at the right; the line glows faintly warm grey along its length. Chips write: "how much power heats the wires?" and, on "voltages", "why such high voltages?". Then the chip "Next: Why do wires waste energy as heat, and why does sending power at a high voltage waste less?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Power is how fast energy is transformed: P = W/Δt = ΔE/Δt. Unit: the watt, 1 W = 1 J s⁻¹.
2. A power rating is the energy an appliance transforms each second at its normal voltage (for example, electrical to thermal in a kettle, to light and thermal in a lamp, to kinetic in a fan). Energy is not used up; it changes form.
3. P = VI, because volts are joules per coulomb and amps are coulombs per second. Rearranged: I = P/V.
4. With V = IR: P = V²/R. At a fixed voltage, a lower resistance gives more power. Example: 60 V across 30 Ω gives 60² ÷ 30 = 120 W.
5. Halving the voltage on a fixed resistance quarters the power (half the energy per coulomb, half the current).

Memory aid (large, on the notes screen): *Volts are joules per coulomb. Amps are coulombs per second. So volts × amps are joules per second.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why power is not energy: it is a rate (2). Why a rating matters: it is the joules transformed each second into other forms (3). Why P = VI: joules per coulomb times coulombs per second is joules per second (5). Why the dull wire transfers energy faster than the glowing lamp: half the energy per coulomb but more than twice the coulombs each second (6); why the lamp still glows: its energy goes into a tiny filament (6). Why P = V²/R: Ohm's law replaces the current (8). Why lower resistance means more power at a fixed voltage: more current, the same energy per coulomb (9). Why halving V quarters P: half the energy per coulomb and half the current (11).
- **Misconceptions addressed:** power and energy are the same (2; site misconception 1); the kettle gets more energy per coulomb (1, 6, crossed); a higher voltage always means more power (10, 11, crossed; site misconception 2); minutes not converted (4, feedback 1 crossed); halving V halves P (10, 11, feedback 2 crossed).
- **One idea at a time:** rate (2), transformations (3), E = Pt (4), P = VI (5, 6), I = P/V (7), P = V²/R (8), resistance at a fixed voltage (9), the quarter (10, 11).
- **Video makes it easier:** the student sees two energy bins fill at different rates to the same line (2), one electrical arrow split into new forms in three appliances (3), coulomb tiles carrying energy stacks through a gate while a meter fills as stacks times tiles (5), the lamp's taller stacks lose to the wire's faster tiles (6), and every stack and the tile rate halve together while the meter drops to a quarter (11).
- **Response opportunity:** two 3 s predictions (1, 10); two unseen HSC-style tasks, 10 seconds each, every condition on the card ("8.0 A", "240 V", "15 minutes"; "designed to run on 12 V", "4.0 Ω", "6.0 V", "assuming the resistance stays the same"), nothing answer-bearing. One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** v10's joules per coulomb and v11's coulombs per second recalled as tags (5); v14's V = IR recalled in one line with a tag (8); FA1's energy transformations recalled with a tag (3); v15's hot filament used only as the opening bridge.
- **Syllabus coverage:** `ci630dcbe5`: power related to energy transformations (2, 3, 4, A1 (b)); `ciabf03b85`: P = W/Δt = ΔE/Δt problems (2, 4, A1); `ci97643202`: P = VI described and explained (5, 6, 7, 11, A1 (a)); P = V²/R (8 to 11, A2) as the site's extension of P = VI.
- **Out of scope by design:** P = I²R and wire losses (v17); whole-circuit energy accounts (v17); efficiency; kilowatt-hours; series and parallel (v18 onward); rms values.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An electric heater draws a current of 8.0 A from a 240 V supply. (a) Calculate the power of the heater. (b) Calculate the energy it transforms in 15 minutes, and state the main energy transformation."
Model answer: (a) P = VI = 240 × 8.0 = 1920 W, about 1.9 × 10³ W. (b) Δt = 15 × 60 = 900 s; ΔE = PΔt = 1920 × 900 = 1.728 × 10⁶ J, about 1.7 × 10⁶ J. The main transformation is electrical energy into thermal energy in the heating element. Classic mistake (crossed): "1920 × 15 = 28 800 J" (time left in minutes).

**Attempt 2 (scene 15; original wording, HSC style, 3 marks suggested).** "A heating element is designed to run on 12 V and has a resistance of 4.0 Ω. (a) Calculate its power at 12 V. (b) A flat battery supplies only 6.0 V. Assuming the resistance of the element stays the same, calculate the new power and explain why it is not half the power in (a)."
Model answer: (a) P = V²/R = 12² ÷ 4.0 = 144 ÷ 4.0 = 36 W. (b) P = 6.0² ÷ 4.0 = 36 ÷ 4.0 = 9.0 W, a quarter of 36 W. Halving the voltage halves the energy each coulomb transfers, and with the same resistance it also halves the current (I = V/R: 3.0 A to 1.5 A), so P = VI falls to ½ × ½ = ¼. Classic mistake (crossed): "(b) 18 W".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Mains | 240 V (teaching value; author note d) | 7, 8, 9, A1 |
| Kettle | 2400 W; I = 2400 ÷ 240 = 10 A; element R = 24 Ω | 3, 9 |
| Hook (v15 data) | wire 3.00 V, 0.60 A: 1.80 W; lamp 6.0 V, 0.28 A: 1.68 W; 6.0 J and 3.0 J per coulomb | 1, 6 |
| Rate meters | 24 000 J target: kettle 10 s at 2400 W; lamp 400 s at 60 W (illustrative) | 2 |
| Ratings | kettle 2400 W, lamp 60 W, fan 40 W | 3 |
| Heater (site Q2) | 1200 W, 5.0 min = 300 s, ΔE = 3.6 × 10⁵ J | 4 |
| Toaster (site `we-1`) | 1200 W, 240 V, I = 5.0 A; check 2400 W → 10 A | 7 |
| Heater element (site Q1) | 24 Ω, 240 V, 240² = 57 600, P = 2400 W; I = 10 A | 8, 10, 11 |
| Lamp filament (hot) | 60 W at 240 V: I = 0.25 A, R = 960 Ω | 9 |
| Half voltage | 120 V on 24 Ω: 120² = 14 400, P = 600 W; I = 5.0 A; 120 J per coulomb | 10, 11 |
| Energy per coulomb | 240 J per coulomb at 240 V | 9 |
| Key note example (site last check) | 60 V, 30 Ω: 3600 ÷ 30 = 120 W | 18 |
| A1 | 8.0 A, 240 V: P = 1920 W ≈ 1.9 × 10³ W; 15 min = 900 s; ΔE = 1.728 × 10⁶ J ≈ 1.7 × 10⁶ J; crossed 28 800 J | 13, 14 |
| A2 | 12 V, 4.0 Ω: P = 36 W (I = 3.0 A); 6.0 V: P = 9.0 W (I = 1.5 A); crossed 18 W | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 3.00 × 0.60 = 1.80; 6.0 × 0.28 = 1.68; 0.28 ÷ 0.60 = 0.47 (less than half); 6.0 ÷ 3.00 = 2.
- 2400 ÷ 240 = 10; 240 ÷ 10 = 24.
- 24 000 ÷ 2400 = 10 s; 24 000 ÷ 60 = 400 s.
- 5.0 × 60 = 300; 1200 × 300 = 360 000 = 3.6 × 10⁵.
- 1200 ÷ 240 = 5.0.
- 240² = 57 600; 57 600 ÷ 24 = 2400; 240 ÷ 24 = 10; 240 × 10 = 2400.
- 60 ÷ 240 = 0.25; 240 ÷ 0.25 = 960.
- 120² = 14 400; 14 400 ÷ 24 = 600; 120 ÷ 24 = 5.0; 600 ÷ 2400 = 0.25.
- 60² ÷ 30 = 120.
- 240 × 8.0 = 1920; 15 × 60 = 900; 1920 × 900 = 1 728 000; 1920 × 15 = 28 800.
- 12² ÷ 4.0 = 36; 6.0² ÷ 4.0 = 9.0; 12 ÷ 4.0 = 3.0; 6.0 ÷ 4.0 = 1.5; 9.0 ÷ 36 = 0.25.

## Memory aid check

- **"Volts are joules per coulomb. Amps are coulombs per second. So volts times amps are joules per second."** Meaning, as said in scene 12: V is the energy each coulomb transfers, I is the charge passing each second, so their product is the energy transferred each second, the power. Assumptions checked: "volts are joules per coulomb" is v10's definition (1 V = 1 J C⁻¹); "amps are coulombs per second" is v11's (1 A = 1 C s⁻¹); "joules per second" is the watt. True for any component (resistive or not), so it does not depend on Ohm's law; P = V²/R is introduced separately with the Ohm's-law step shown (8). Introduced after the derivation (5) and the hook answer (6). It joins v10's and v11's memory lines into one sentence.
- **Site memory hook:** none for lesson 15 was found in the files read; none used.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,208 characters** (6,225 joined), 18 scenes. Characters per scene (1 to 18): 337, 472, 430, 451, 448, 379, 395, 481, 325, 166, 447, 118, 255, 423, 324, 366, 316, 75. At 13.3 characters per second the speech is about 467 s. Holds: about 16 s of holds and settling (the readouts pulsing in 1, the bins racing in 2, the energy splits in 3, the two gates and meters in 6, the halving in 11), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 102 s of holds): **about 569 s**, at the cap of the owner's 5 to 10 minute target. A first draft at 6,445 characters was trimmed to 6,244 (shorter hook and handoff recaps, a shorter toaster check, two shorter lead-ins); aligning the hook and scene 6 to v15's actual handoff (root note) gave 6,208. If the voiced preview runs long, the first cut is scene 9 (about 325 characters; open decision 3), which keeps every syllabus point.

## Scene list and build ids

Lesson key `p-y11-fa3-v16` (route phys-y11-fa3-v16). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v16` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v16` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, power-is-a-rate, where-energy-goes, worked-energy, why-p-vi, hook-answered, worked-current, p-v-squared-r, lower-resistance, prediction-half-voltage, half-times-half, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v15's last frame continues into scene 1 (camera continue, then the board slides left); 1 to 2 board change to the rate meters; 2 to 3 board change to the three appliances; 3 to 4 clear change to the calculation layout; 4 to 5 board change to the gate; 5 to 6 board change to the two gates; 6 to 7 clear change to the calculation layout; 7 to 8 camera continue; 8 to 9 board change to the comparison rows; 9 to 10 camera continue; 10 to 11 camera continue; 11 to 12 fade; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v16-learning-review.md`, `science_check` = `checks/p-y11-fa3-v16-physics-check.md`.

## Assets

Reused (requested, not yet delivered): `phys-y11-power-point-v1.png` (requested in `phys-y11-fa3-v12.md`; 7, 17); `phys-y11-filament-lamp-v1.png` (requested in FA2; 1, 2 thumbnail, 3, 6, 9); `phys-y11-house-v1.png` (requested in `phys-y11-fa2-v15.md`; 17); `phys-y11-power-station-v1.png` (requested in `phys-y11-fa3-v17.md`; 17). Coded parts reused from v05 (coulomb tile), v11 (`ChargeGate`, flow arrows) and FA2 (hollow gold energy arrow).

New (requested below): `phys-y11-electric-kettle-v1.png` (2 thumbnail, 3, 9, 17); `phys-y11-toaster-v1.png` (7); `phys-y11-panel-heater-v1.png` (4, 8, 10, 11); `phys-y11-desk-fan-v1.png` (3); `phys-y11-transmission-tower-v1.png` (17; shared with v17, which uses it throughout).

Checked first (3 Nov): `public/assets/physics/` has the bench supply (`phys-y11-low-voltage-supply-v1.png`) but no appliances, lamps, power points or towers; no kettle, toaster, heater, charger, fan or tower exists in any subject folder under `public/assets/` (Chemistry's `m8-heater-thermostat-v1.png` is an aquarium-style heater, not a room heater, so it is not reused).

Coded: energy blocks and bins, stopwatches, coulomb tiles, gates, the unit-cancel row, energy-split arrows, the element cutaway, the cord cutaway, the transmission line, equations, rows, comparison bars, working.

Kit gaps (for the next physics kit brief): `EnergyRateMeter`, `EnergyPerCoulomb`, `EnergySplit`, the cord cutaway and the transmission landscape; lesson-local acceptable for Revision 1. v17 reuses `EnergyPerCoulomb`, `EnergySplit` and the transmission landscape.

## Codex asset brief (Year 11 Physics FA3 v16, appliances and transmission tower)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`. All appliances drawn at a consistent real-world scale relative to each other where they share a scene (the kettle and toaster on the power point), and never stretched.

1. `phys-y11-electric-kettle-v1.png`: a modern cordless electric kettle on its base, three-quarter view from the left: brushed stainless steel body, black handle and lid, a small window strip showing water, a short grey cord leaving the base at the right. About 1200 px tall. Sidecar `phys-y11-electric-kettle-v1.json`: the cord's free end point; the base centre (where the energy arrow enters); the body centre.
2. `phys-y11-toaster-v1.png`: a two-slice pop-up toaster, three-quarter view, matte cream body, chrome lever and dial, two slots seen from above at a slight angle, a short grey cord at the back right. No bread, no glow. Sidecar: the cord's free end; the slot centre.
3. `phys-y11-panel-heater-v1.png`: a free-standing white oil-free panel (convection) heater, front view, on two small feet, a plain control knob at the top right, a short grey cord at the bottom right. About 1200 px wide. Sidecar: the cord's free end; a rectangle (x, y, w, h) on the panel face where the coded element cutaway is drawn.
4. `phys-y11-desk-fan-v1.png`: a white desk fan, three-quarter front view, round grey guard, four pale grey blades (drawn as a separate layer `phys-y11-desk-fan-blades-v1.png` centred on the hub, so code can spin them), stand and base. Sidecars for both: the hub centre in each plate; the base's cord point.
5. `phys-y11-transmission-tower-v1.png`: one steel lattice high-voltage transmission tower (Australian style), side-on, grey galvanised steel, two cross-arms with hanging insulator strings, no wires attached (code draws the lines). About 1400 px tall, transparent sky. Sidecar: the attachment point at the bottom of each insulator string (code strings the coded line between towers); the ground line.

Acceptance: true transparency, no halo; no text, numerals, logos or brand marks; no red or navy (FA3 colour key); Australian pin patterns where shown; not stretched; consistent lighting across all five.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: power is the rate of energy transformation, P = W/Δt = ΔE/Δt, in watts (1 W = 1 J s⁻¹); a power rating is the energy transformed each second at the normal voltage; kettle, lamp and fan transformations as described (no percentages claimed); P = VI from V = energy per charge and I = charge per time; I = P/V; P = V²/R from P = VI and V = IR; at a fixed voltage a lower resistance gives more current and more power; halving V on a constant resistance halves I and quarters P.
3. Confirm no P = I²R, wire-loss calculation, efficiency, kilowatt-hour or rms value is taught (the handoff only asks).
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the three syllabus quotes match the syllabus JSON exactly (fractions typeset inline as "W/Δt" and "ΔE/Δt") and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v15.md`'s handoff scene (see "Opening frame").
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Electrical Power, P = VI and P = V²/R | Year 11 Physics

(Title length: 55 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson15.sa.html

A resistance wire stays only warm while a lamp glows brightly, yet the wire transfers energy faster. How? Learn what a watt measures, how a power rating describes an appliance's energy transformations, and why voltage times current gives the energy transformed each second. Then use P = VI, I = P/V and P = V²/R, and find out why halving the voltage on a heater cuts its power to a quarter, not a half. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Relate power to energy transformations" (ci630dcbe5)
"Solve problems using P = W/Δt = ΔE/Δt" (ciabf03b85)
"Describe the relationship between power and voltage using P = VI" (ci97643202)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: Ohm's law and the conductor investigation (previous videos). Next: Energy loss in circuits, P = I²R.

#Year11Physics #Physics #ElectricalPower #HSCScience

## Open decisions

- **1. v17's question (proposal).** The handoff chip uses "Why do wires waste energy as heat, and why does sending power at a high voltage waste less?" for phys-y11-fa3-v17 (route placeholder "How can I explain and apply energy loss in circuits, p = i²r?"; its one point is `ci13c391ee`). `phys-y11-fa3-v17.md` adopts it. Root to enter it in the route.
- **2. Mains value.** The site's 240 V is kept, with a grey tag "240 V: the usual exam value" on first use (author note d). Root may prefer 230 V course-wide; that changes every mains value in v16 (5.0 A becomes 5.2 A, and so on), so it is a root call before recording.
- **3. P = V²/R depth.** The syllabus names only P = VI and P = W/Δt; P = V²/R is the site's extension (card 3, Q1). It takes scenes 8 to 11 (about 1,400 characters) and carries the resistance and quarter-power causes. If the learning review finds the video crowded, scene 9 (lower resistance, more power) is the first cut; the quarter-power cause stays, because it fixes site misconception 2.
- **4. Four new appliance plates plus the tower.** All are objects that carry the explanation (the transformations and the worked examples); the hook now reuses v15's lamp and coded wire, so no charger plate is needed. If plate budget is tight, the toaster (7) can reuse the kettle plate with the site's numbers relabelled as "a 1200 W appliance", at the cost of the site's toaster wording.
- **5. Route refinement (root to record).** Question as above; start "Begin at v15's warm wire and glowing lamp; recall joules per coulomb, coulombs per second and V = IR"; stop "Stop at the power delivered to one component (P = VI, I = P/V, P = V²/R, E = Pt); hand wire losses and P = I²R to v17". Entry knowledge should add v09 to v11 and v14 explicitly.
- **6. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v15 at Year 11 entry; check that the race of two energy bins to the same line separates power from energy; that the stacks-times-tiles gate makes P = VI a cause and not a formula; that identical stacks and a flood of tiles answer the hook; that "at a fixed voltage" is clear enough in 9 that v17's I²R does not look like a contradiction; that the double halving makes the quarter convincing; that the attempts give nothing away), then the Codex physics check and error check.
- The bins filling at different rates (2), the energy splits (3), the gate's stacks times tiles feeding the meter (5), the two gates with identical stacks (6) and the stacks and tile rate halving together (11) carry the explanation; judge them at playback speed in the voiced preview.
