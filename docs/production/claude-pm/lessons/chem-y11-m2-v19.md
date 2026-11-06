# Year 11 Chemistry M2 V19: The ideal gas law. How does PV=nRT combine the simple gas laws? (design)

Status: Revision 2 (6 Nov 2026): brief 182 finding resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,841 characters, 16 scenes, about 529 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: nineteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 53, between `chem-y11-m2-v18` and `chem-y11-m2-v20`; the fourth gas-laws video, which joins them. Templates: `chem-y11-m2-v18.md` and `v17.md` (same designer, layout and colour key), `chem-y11-m2-v16.md`, `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` and `chem-m5-g02.md` (calculation staging), `bio-y11-fa1-v05.md` (plates). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v19` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Derive the fixed-variable relationships qualitatively, choose compatible R units and solve an ideal-gas or combined-law case. State ideal-gas assumptions."; next handoff: "How can a gas volume measure the progress or quantity of a reaction?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html` (SHA256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`, recomputed, matches the route), section `l15-gaslaws-title`. Used: "Each simple law holds two of the four quantities (P, V, T, n) constant and links the other two"; the four-law card grid; "Combine the three P–V–T laws into one relationship for a fixed amount of gas: P₁V₁/T₁ = P₂V₂/T₂"; "Bring in the amount of gas and you get the ideal gas law: PV = nRT"; "R = 8.314 J mol⁻¹ K⁻¹. Because 1 J = 1 kPa·L, you can use R = 8.314 with P in kPa, V in L, T in K directly"; "The molar volume you already use (22.71 L/mol at STP) is just PV = nRT solved at 0 °C and 100 kPa"; the ideal gas assumptions ("negligible volume, no intermolecular forces, collide elastically. Real gases deviate most at high pressure and low temperature"); worked example "Combined gas law" (weather balloon, 15.0 L, 100 kPa, 27 °C → 40.0 kPa, −23 °C: 31.3 L; "Lower pressure expands it; lower temperature shrinks it; expansion wins"); worked example "Ideal gas law" (0.250 mol O₂ at 30 °C and 95.0 kPa: 6.63 L). Both site examples are used unchanged (with 273.15; the answers are the same to three figures; author note d). Not used: gas stoichiometry (m2-v20), "STP" and "RTP" as names (m2-v16 site note 1).

Owner rules applied: as `chem-y11-m2-v18.md` (one learner question; no people, hands or faces; real objects as painted plates; equations, cards, particle windows and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophes shown corrected, root decision m1-9):

- `C2-IQ4-01`: "conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
  - "Gay-Lussac's Law (temperature)"
  - "Boyle's Law"
  - "Charles' Law"
  - "Avogadro's Law (ACSCH060)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v18's final frame (four law cards in a two-by-two grid with their fixed quantities, "T in K" tags, "one equation for all four?"). Teaches: doubling n and T together quadruples V (prediction); each law gives one dependence of V (on n, on T, on 1/P) and the effects multiply, so V ∝ nT/P; PV = nRT with R the gas constant (data sheet 8.314); each simple law recovered by fixing two quantities (the route's "derive the fixed-variable relationships qualitatively"); compatible units (kPa × L = J; mol, K); the data sheet's molar volumes from PV = nRT; one ideal-gas calculation (site); the combined gas law for a fixed amount and one combined-law case (site); the ideal-gas assumptions and when they fail. Not taught: gas volumes in reactions (m2-v20, the handoff), real-gas equations, kinetic energy formulae.

## Decisions

- **Learner question (route wording kept).** "How does PV=nRT combine the simple gas laws?" The answer, in order: changes multiply (1, 2); so V ∝ nT/P, and a constant turns it into PV = nRT (3); each simple law is PV = nRT with two quantities fixed (4); R's units decide the units of the rest (5); the molar volumes are PV = nRT at two conditions (6); for one sample, PV/T stays constant (8); it is "ideal" because of three assumptions (10).
- **Opening frame (equals `chem-y11-m2-v18.md`'s final frame, same designer).** Four law cards in a two-by-two grid: "Boyle: fixed T, n | PV = constant | P₁V₁ = P₂V₂"; "Charles: fixed P, n | V/T = constant | V₁/T₁ = V₂/T₂"; "Gay-Lussac: fixed V, n | P/T = constant | P₁/T₁ = P₂/T₂"; "Avogadro: fixed T, P | V/n = constant | V₁/n₁ = V₂/n₂"; deep-orange "T in K" tags on three cards; amber chip "one equation for all four?"; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "At the same pressure, double the moles and double the kelvin temperature. Does the volume double, quadruple or stay the same?" Answer: quadruple. It motivates multiplying the dependences rather than adding them.
- **Building the law (scenes 2, 3).** V ∝ n (Avogadro), V ∝ T (Charles), V ∝ 1/P (Boyle); because each change scales the volume by its own factor, the factors multiply: V ∝ nT/P, so PV ∝ nT, and PV = nRT. Gay-Lussac follows (scene 4) and is not needed to build it. R introduced as "one fixed number, the same for every gas" (data sheet: 8.314 J mol⁻¹ K⁻¹). This is the qualitative derivation the route asks for, not a proof.
- **The simple laws inside (scene 4; route "derive the fixed-variable relationships").** Fix n and T: PV = constant (Boyle); fix n and P: V/T = constant (Charles); fix n and V: P/T = constant (Gay-Lussac); fix P and T: V/n = constant (Avogadro). Shown by greying the fixed symbols in PV = nRT and sliding the rest into the law's form on its card. The memory aid names the move: "Cover what's fixed: what's left is the law."
- **Compatible units (scene 5; route "choose compatible R units").** R = 8.314 J mol⁻¹ K⁻¹ (HSC data sheet); 1 kPa × 1 L = 1 J, so P in kPa, V in L, T in K, n in mol (site). Pa with m³ also works (grey tag). Slips named: mL, °C. Atmospheres and mmHg are not mentioned (not used in the course).
- **The molar volumes come out (scene 6; site).** n = 1, T = 298.15 K, P = 100 kPa: V = 24.79 L; at 273.15 K: 22.71 L. A callback to m2-v16's cards and the site's "is just PV = nRT solved at 0 °C and 100 kPa".
- **Ideal-gas example (scene 7; site worked example unchanged).** 0.250 mol O₂, 30 °C, 95.0 kPa: V = nRT ÷ P = 6.63 L. Calculation layout: task strip, equation strip, grouped givens with units (the K conversion as its own row), one row at a time.
- **Combined gas law (scene 8).** For one sample n is fixed, so nR is a constant and PV/T stays the same: P₁V₁/T₁ = P₂V₂/T₂. Shown by covering n and R. Any matching P and V units; T in K.
- **Combined-law example (scene 9; site worked example unchanged).** Weather balloon (`phys-y11-balloon-v1.png`, tagged "not to scale"): 15.0 L of helium, 100 kPa, 27 °C → 40.0 kPa, −23 °C: 31.3 L. Sense check from the site: lower pressure expands it 2.5 times, cooling shrinks it to about 0.83 of that, "expansion wins".
- **Ideal-gas assumptions (scene 10; route "State ideal-gas assumptions"; site).** The particles' own volume is negligible; no attractions between particles; collisions lose no energy. Why real gases come close at everyday conditions (particles far apart and fast, m2-v16's empty space); where they fail (high pressure: crowded, size matters; low temperature: slow particles stick together, eventually the gas liquefies, linking m2-v18's caveat). Learner copy keeps "collisions lose no energy" in plain words; "elastic" appears as a grey tag.
- **Memory aid (see "Memory aid check"):** "Cover what's fixed: what's left is the law."
- **Attempts (original wording, HSC style).** A1 (ideal gas law to mass): 2.00 L of N₂ at 22.0 °C and 105 kPa; n = 0.0856 mol; m = 2.40 g (N = 14.01, data sheet); crossed "32.2 g (T in °C)". A2 (combined law): 500 mL at 25 °C and 100 kPa → 250 mL at 75 °C: 234 kPa; crossed "200 kPa (heating ignored)".
- **Mistake scene:** none separate. Adding effects instead of multiplying (1, 2); mL or °C with R = 8.314 (5; crossed in A1); a different R for each gas (3); forgetting one change in a two-state problem (crossed in A2); "ideal means real gases obey it exactly" (10).
- **Handoff (route next: `chem-y11-m2-v20`, "How can a gas volume measure the progress or quantity of a reaction?").** Scene 15: a measured gas volume at a measured T and P counts moles; marble chips in acid with the carbon dioxide caught in a gas syringe. Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 15 key terms, "Ideal gas law": "R = 8.314 J mol⁻¹ K⁻¹ = 8.314 kPa·L·mol⁻¹·K⁻¹". Correct; suggest adding "because 1 kPa × 1 L = 1 J" here too (it appears only in the gas-laws card).
  2. Lesson 15 worked example "Ideal gas law", step 3: "V = (0.250 × 8.314 × 303) ÷ 95.0 = 629.8 ÷ 95.0". 0.250 × 8.314 × 303 = 629.8 is correct, but 629.8 ÷ 95.0 = 6.63 is the answer; the intermediate "629.8" is an energy in joules (kPa L) and is labelled as nothing. Suggest "nRT = 629.8 kPa L; V = 629.8 ÷ 95.0 = 6.63 L".
  3. Lesson 15 "Ideal gas assumptions" lists three assumptions but gives no reason real gases come close. Suggest adding: "At everyday conditions gas particles are far apart and fast, so their own size and attractions hardly matter."
  - Checked and correct: worked example "Combined gas law" (31.25 → 31.3 L with 273 or 273.15); worked example "Ideal gas law" (6.63 L with 303 or 303.15 K); the molar volume claim (8.314 × 273.15 ÷ 100 = 22.71).
- **Cause chain taught, in order:** (1) each simple law describes how V depends on one quantity while the others are fixed (2); (2) the changes scale the volume independently, so their factors multiply (1, 2); (3) so V ∝ nT/P, and one constant makes it PV = nRT (3); (4) fixing two quantities makes the rest of the equation a constant, which is each simple law (4); (5) for one sample n is fixed, so PV/T is constant (8); (6) the law works because gas particles are far apart and fast, and fails when they are crowded or slow (10).
- **Entry knowledge:** Stage 5 particle model; m2-v16 (Avogadro's law, molar volumes 22.71 and 24.79); m2-v17 (Boyle's law); m2-v18 (Charles's and Gay-Lussac's laws, kelvin); m2-v03 (n = m ÷ MM, for A1).
- **Learner-visible vocabulary (plain meaning at first use):** ideal gas law (3, named); gas constant, R (3, "one fixed number, the same for every gas"); combined gas law (8, named); ideal gas (10, "a gas that follows the law exactly, because of three assumptions").
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **law cards** (scenes 1 to 4: the opening grid; each card's dependence lifts out as an arrow strip "V ∝ n", "V ∝ T", "V ∝ 1/P"); **syringe and sliders** (scenes 1, 2, Revision 2: the painted syringe `c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png` and a coded particle window replace Revision 1's coded box; the plunger doubles out on n, again on T, then halves on P); **equation build** (scene 3: "V ∝ nT/P" rearranging to "PV ∝ nT", then "= nRT" with R dropping into place); **cover-up** (scene 4: in a large "PV = nRT", the fixed symbols grey and slide behind a slate cover, the rest re-forms into each card's law, the card ticking); **units strip** (scene 5); **molar volume check** (scene 6: a row computing 24.79 with m2-v16's card thumbnail beside it); **calculation board** (scenes 7, 9, 12, 14); **balloon** (scene 9: `phys-y11-balloon-v1.png` rising up a coded altitude strip, scaling up uniformly as its volume label climbs); **particle windows** (scene 10: an ideal window with far-apart point particles; a crowded high-pressure window with the particles' own size shaded; a cold window with slow particles clumping); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v18):** pressure red; volumes slate blue; moles teal; temperature deep orange (K); R navy; fixed quantities slate grey; crossed items red strike.
- **Board layout (Revision 2):** heading top left; "PV = nRT" small at the top right once built (scene 3 on). Revision 1 used a coded box for the hook and kept the cards at the centre for scenes 1 to 4. Revision 2 stages, each under about 41 s: the law cards around the painted syringe (1); the slider stage (2); the full-width equation build (3); the cover-up with the cards (4); the units strip at full width (5); the molar-volume rows with the card thumbnails (6); the calculation layout (7); the combined-law card (8); the balloon beside its calculation (9); three particle windows (10).
- **Colour roles (Revision 2, fixed for the whole video):** pressure red; volumes slate blue; moles teal; temperature deep orange (K); R navy; masses amber; fixed quantities slate grey; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p):** the current working row at least 44 px (rows 48 px); the large "PV = nRT" about 96 px; live readouts about 52 px; supporting lines and givens 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the n, T and P sliders (scene 2).** A live control on the core idea (the effects multiply): three sliders under the syringe, n (teal), T in K (deep orange) and P (red), each showing its factor; the plunger follows V = nRT ÷ P, and a slate readout (52 px) shows V's factor: n × 2 gives "V × 2"; then T × 2 gives "V × 4"; then P × 2 gives "V × 2". The particle window shows more particles for n and longer trails for T. Factors only; no numbers are needed.

Author notes (not learner copy):
(a) Prediction: V ∝ nT at fixed P, so (2n)(2T) gives 4V.
(b) R: 8.314 J mol⁻¹ K⁻¹ (HSC data sheet). 1 kPa × 1 L = 10³ Pa × 10⁻³ m³ = 1 Pa m³ = 1 J.
(c) Molar volumes: 1 × 8.314 × 298.15 ÷ 100 = 24.788 → 24.79 L; 1 × 8.314 × 273.15 ÷ 100 = 22.710 → 22.71 L.
(d) Site ideal-gas example: 0.250 × 8.314 × 303.15 ÷ 95.0 = 6.6326 → 6.63 L (with 303 K: 6.6293 → 6.63 L). Site combined example: 100 × 15.0 × 250.15 ÷ (40.0 × 300.15) = 31.253 → 31.3 L (with 300 and 250: 31.25 → 31.3 L). Factors: 100 ÷ 40.0 = 2.5; 250.15 ÷ 300.15 = 0.833.
(e) A1: n = 105 × 2.00 ÷ (8.314 × 295.15) = 0.08558 mol; M(N₂) = 2 × 14.01 = 28.02; m = 2.398 → 2.40 g. Slip with T = 22.0: n = 1.148 mol, m = 32.2 g.
(f) A2: P₂ = 100 × 500 × 348.15 ÷ (250 × 298.15) = 233.5 → 234 kPa. Slip (temperature ignored): 100 × 500 ÷ 250 = 200 kPa.
(g) Real gases at 25 °C and 100 kPa differ from ideal molar volume by well under 1% (m2-v16 author note d); not spoken beyond "very close".
(h) Pronunciations: "P V equals n R T"; "R" (the letter); "P one V one over T one equals P two V two over T two"; "eight point three one four".

Main question: *How does PV=nRT combine the simple gas laws?*
Entry knowledge: Stage 5 particle model; m2-v03, m2-v16 to v18.
Stops after: V ∝ nT/P and PV = nRT; the four simple laws recovered; compatible units with R = 8.314; the molar volumes; one ideal-gas and one combined-law calculation; the assumptions. No reaction stoichiometry.
Handoff: chem-y11-m2-v20, gas volumes in reactions.

## Opening frame and final frame

- **Opening frame:** m2-v18's final frame exactly (Decisions).
- **Final frame (m2-v20 opens on it):** at the left, `y11c-flask-chips-acid-bung-fizz-v1.png` (a conical flask with marble chips fizzing in clear acid, closed by a rubber bung with a bent glass delivery tube leaving to the right); a coded clear plastic tube joins the delivery tube's end to the nozzle of the horizontal gas syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`) at the right, its plunger just starting to move out from "0 mL", with coded ticks every 10 mL to 100 mL; coded grey wisps "CO₂(g)" in the tube; the conditions strip at the top right "room: 21.0 °C, 101.3 kPa"; a small navy card at the top left "PV = nRT"; an amber chip under the syringe "gas volume → moles → how far? how much?"; the chip "Next: How can a gas volume measure the progress or quantity of a reaction?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here are the four gas laws, and each one holds two quantities fixed. Boyle fixes temperature and amount, Charles fixes pressure and amount, Gay-Lussac fixes volume and amount, and Avogadro fixes temperature and pressure. But real changes don't always keep two things fixed. So try this. At the same pressure, double the moles of a gas, and double its kelvin temperature too. Does the volume double, quadruple, or stay the **same**?

Visual: opens on m2-v18's final frame; the "Next" chip fades. On "Boyle fixes" each card's fixed-quantity chip glows in turn as it is named (slate pen ring round each). On "don't always keep two things fixed" the amber chip "one equation for all four?" pulses. The cards slide to the corners and the painted syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, horizontal) fills the centre at uniform scale, with its particle window and a conditions chip "same P". On "double the moles" the particle count doubles (teal hand tag "n × 2"); on "kelvin temperature" the trails lengthen (deep-orange hand tag "T × 2"); the volume label shows "V × ?". Chips "× 2", "× 4", "same". On "same" the 3 s `Countdown` ring runs. Heading writes: "The ideal gas law".

### 2. the effects multiply
> It quadruples. Doubling the moles doubles the volume, that's Avogadro. Doubling the kelvin temperature doubles it again, that's Charles. So the two effects multiply, two times two. And Boyle says that doubling the pressure would halve the volume. Put those together, and the volume is proportional to the moles, times the temperature, divided by the **pressure**.

Visual: "× 4" ticks. Stage change to the slider stage: the syringe large at the top, three sliders under it (n teal, T deep orange, P red) and the "V" readout at the right (52 px). On "doubles the volume" the n slider moves to "× 2" and the plunger slides out to "V × 2" (Avogadro card glows, strip "V ∝ n"); on "doubles it again" the T slider moves to "× 2" and the plunger slides out again to "V × 4" (Charles card glows, strip "V ∝ T"); on "two times two" slate hand tag "× 2 × 2 = × 4", framed. On "halve the volume" the P slider moves to "× 2" and the plunger slides back to "V × 2" (Boyle card glows, strip "V ∝ 1/P", red hand tag "÷ 2"). On "pressure" the three strips slide together into "V ∝ nT/P" (teal n, deep orange T, red P), framed.

### 3. P V equals n R T
> Now turn that into an equation. Multiply both sides by P, and put in a constant to make it an equals sign. P V equals n R T. That's the ideal gas law. R is called the gas constant. It's one fixed number, the same for every gas, and the data sheet gives it as eight point three one four. With R in place, one equation links all four quantities, pressure, volume, amount and **temperature**.

Visual: stage change: the equation build at full width (96 px); the cards shrink to the corners. On "Multiply both sides by P" "V ∝ nT/P" becomes "PV ∝ nT" (P slides across, red pen arrow). On "put in a constant" the "∝" becomes "=" and a navy "R" drops in: "PV = nRT", framed in a dark-ink box. On "ideal gas law" the label writes. On "gas constant" chip "R: the gas constant, the same for every gas" (navy hand tag "one number, every gas"); on "eight point three one four" chip "R = 8.314 J mol⁻¹ K⁻¹ (data sheet)". On "temperature" the four symbols P, V, n, T each glow in its colour.

### 4. the simple laws inside, and the memory line
> And every simple law is hiding inside it. Cover what's fixed, and what's left is the law. Fix n and T, so n R T is just a number, and P V stays constant. That's Boyle. Fix n and P, and V over T stays constant, that's Charles. Fix n and V, and P over T stays constant, that's Gay-Lussac. And fix P and T, and V over n stays constant. That's **Avogadro**.

Visual: "PV = nRT" large at the centre, the four cards around it. On "Cover what's fixed" the memory line writes under the equation as a framed card in the explainer's handwriting style (dark-ink frame; slate "Cover what's fixed", navy "what's left is the law"): "Cover what's fixed: what's left is the law." On "Fix n and T" n and T grey behind a slate cover, "nRT" becomes "constant", "PV = constant" lifts to the Boyle card (tick, slate hand tag "Boyle"). On "Fix n and P" n and P grey; the rest re-forms to "V/T = nR/P = constant" and lifts to Charles (tick). On "Fix n and V" "P/T = constant" to Gay-Lussac (tick). On "Avogadro" "V/n = constant" to Avogadro (tick); all four cards framed.

### 5. units that match R
> The units need care. The data sheet gives R in joules per mole per kelvin, and a kilopascal times a litre is exactly one joule. So put pressure in kilopascals, volume in litres, temperature in kelvin and amount in moles, and R stays eight point three one four. The usual slips are millilitres instead of litres, and Celsius instead of **kelvin**.

Visual: stage change: the units strip at full width under the equation (48 px): "P: kPa", "V: L", "n: mol", "T: K", "R = 8.314". On "a kilopascal times a litre" a row "1 kPa × 1 L = 1 J" (grey tag "1000 Pa × 0.001 m³"), framed. On "R stays eight point three one four" the strip locks with a teal outline (navy hand tag "units match R"). On "millilitres instead of litres" chip "mL" crossed in red (red hand tag "÷ 1000 first"); on "kelvin" chip "°C" crossed in red (red hand tag "+ 273.15 first"). Grey tag at the edge: "Pa with m³ also works".

### 6. the molar volumes were here all along
> Here's a nice check. Take one mole of gas at twenty-five degrees and a hundred kilopascals. V equals n R T over P, so one times eight point three one four times two ninety-eight point one five, over a hundred. That's twenty-four point seven nine litres, the molar volume from the data sheet. At zero degrees, it gives twenty-two point seven one. Those two numbers were P V equals n R T all **along**.

Visual: rows (48 px): "V = nRT ÷ P"; "= 1 × 8.314 × 298.15 ÷ 100" ; on "twenty-four point seven nine" "= 24.79 L" (slate), framed with a green tick, and m2-v16's card thumbnail "25 °C, 100 kPa: 24.79 L mol⁻¹" slides in beside it with a tick (slate hand tag "same number!"). On "zero degrees" a second row "1 × 8.314 × 273.15 ÷ 100 = 22.71 L" with the "0 °C" card thumbnail (tick). On "along" both thumbnails link to the "PV = nRT" chip at the top right by navy pen arrows.

### 7. an ideal gas calculation
> Now a worked example. What volume does zero point two five zero moles of oxygen gas occupy at thirty degrees and ninety-five kilopascals? First, list the values in R's units. n is zero point two five zero moles, T is thirty plus two seventy-three point one five, so three oh three point one five kelvin, and P is ninety-five point zero kilopascals. Rearranged, V equals n R T over P. That's zero point two five zero, times eight point three one four, times three oh three point one five, over ninety-five, which is six point six three **litres**.

Visual: board clears to the calculation layout. Task strip: "Find V of 0.250 mol O₂". Equation strip: "PV = nRT" in role colours. On "list the values" the givens card writes one per line: "n = 0.250 mol", on "three oh three point one five kelvin" "T = 30 + 273.15 = 303.15 K" (deep orange, hand tag "kelvin first"), "P = 95.0 kPa", "R = 8.314". On "Rearranged" row (48 px) "V = nRT ÷ P"; then "= 0.250 × 8.314 × 303.15 ÷ 95.0", earlier rows dimming to 34 px. On "litres" row "= 6.63 L" (slate, 52 px), framed in a dark-ink box with a green tick, with tag "kPa and L: answer in L"; a ghost row "with T = 30: 0.656 L" fades in beside it and is crossed in red (red hand tag "Celsius: ten times too small").

### 8. one sample: the combined gas law
> Often the same sample of gas changes from one state to another. Then the amount stays fixed, so n times R is a constant, and P V over T stays the same. That gives the combined gas law. P one V one over T one equals P two V two over T two. Any pressure and volume units work, as long as they match on both sides, but T must be in **kelvin**.

Visual: "PV = nRT" large; on "the amount stays fixed" n and R grey behind a slate cover and the equation re-forms as "PV/T = nR = constant" (teal hand tag "same sample: n fixed"). On "combined gas law" a navy card: "Combined gas law (fixed n): P₁V₁/T₁ = P₂V₂/T₂", framed. On "match on both sides" chips "kPa with kPa", "mL with mL"; on "kelvin" a deep-orange tag "T in K".

### 9. the weather balloon
> Here's the classic case. A weather balloon holds fifteen litres of helium at a hundred kilopascals and twenty-seven degrees. It rises until the pressure is forty kilopascals and the temperature is minus twenty-three degrees. In kelvin, those are three hundred point one five and two fifty point one five. V two is P one V one T two, over P two T one, which comes to thirty-one point three **litres**. The lower pressure lets it expand two and a half times, the cold shrinks it a little, and the expansion **wins**.

Visual: at the left, `phys-y11-balloon-v1.png` (tag "weather balloon, not to scale") at the bottom of a coded altitude strip with "100 kPa, 27 °C, 15.0 L". At the right, the calculation layout: task strip "Find V₂"; givens card grouped "P₁ = 100 kPa, V₁ = 15.0 L, T₁ = 27 °C" and "P₂ = 40.0 kPa, T₂ = −23 °C". On "In kelvin" row "T₁ = 300.15 K, T₂ = 250.15 K" (deep orange). Row (48 px) "V₂ = P₁V₁T₂ ÷ (P₂T₁) = 100 × 15.0 × 250.15 ÷ (40.0 × 300.15)". On "litres" row "= 31.3 L" (slate, 52 px), framed in a dark-ink box with a green tick; the balloon rises up the strip and scales up uniformly. On "two and a half times" chip "P: × 2.5 in V" (red hand tag "lower P: bigger"); on "shrinks it a little" chip "T: × 0.83" (deep-orange hand tag "colder: a bit smaller"); on "wins" tag "expansion wins".

### 10. why "ideal"
> So why is it called the ideal gas law? It assumes three things. The particles themselves take up no space, they don't attract each other, and their collisions don't lose any energy. Real gases come very close at everyday conditions, because their particles are far apart and moving fast. The law breaks down at high pressure, where the particles are crowded and their own size matters, and at low temperature, where slow particles start to stick together, until the gas turns into a **liquid**.

Visual: stage change: three particle windows side by side at full width. On "take up no space" window 1 with far-apart dots (chip "own volume: negligible"); on "don't attract" chip "no attractions"; on "don't lose any energy" two particles bounce apart at the same speed (grey tag "elastic collisions"). On "very close at everyday conditions" slate hand tag "real gases: very close" with a tick. On "high pressure" window 2: crowded particles with their own size shaded (red hand tag "own size matters"). On "low temperature" window 3: slow particles clumping in pairs; on "liquid" they settle into a liquid layer at the bottom (red hand tag "ideal gas law fails").

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A two point zero zero litre flask contains nitrogen gas at twenty-two point zero degrees Celsius and a hundred and five kilopascals. Calculate the mass of nitrogen in the flask. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A 2.00 L flask contains nitrogen gas, N₂, at 22.0 °C and 105 kPa. Calculate the mass of nitrogen in the flask. (N = 14.01; R = 8.314 J mol⁻¹ K⁻¹) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> n equals P V over R T, so a hundred and five times two, over eight point three one four times two ninety-five point one five. That's zero point zero eight five six moles. Times twenty-eight point zero two gives two point four zero grams. Leaving the temperature in Celsius gives thirty-two grams, more than ten times too much. That's the classic **slip**.

Visual: card shrinks to the top. Rows: "T = 22.0 + 273.15 = 295.15 K"; "n = PV ÷ RT = 105 × 2.00 ÷ (8.314 × 295.15) = 0.0856 mol" (teal); "m = 0.0856 × 28.02 = 2.40 g" (amber), framed in a dark-ink box with a green tick. On "slip" a chip "32.2 g (T in °C)" fades in and is crossed in red (red hand tag "T must be in K"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A five hundred millilitre sample of gas at twenty-five degrees and a hundred kilopascals is compressed to two hundred and fifty millilitres and heated to seventy-five degrees. Calculate the final pressure of the gas. Pause here to answer.

Visual: `QuestionCard`: "A 500 mL sample of gas at 25 °C and 100 kPa is compressed to 250 mL and heated to 75 °C. No gas escapes. Calculate the final pressure of the gas. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> No gas escapes, so use the combined gas law. P two is P one V one T two, over V two T one. That's a hundred, times five hundred, times three forty-eight point one five, over two fifty times two ninety-eight point one five, which is two hundred and thirty-four kilopascals. Halving the volume alone gives two hundred, so forgetting the heating is the classic **slip**.

Visual: card shrinks. Rows: "T₁ = 298.15 K, T₂ = 348.15 K"; "P₂ = P₁V₁T₂ ÷ (V₂T₁) = 100 × 500 × 348.15 ÷ (250 × 298.15) = 234 kPa" (red), framed in a dark-ink box with a green tick; chip "V ÷ 2 → P × 2; T ↑ → P ↑ a bit more". On "slip" a chip "200 kPa (heating ignored)" fades in and is crossed in red (red hand tag "heating ignored"). Hold about 1 second.

### 15. conclusion and handoff
> So P V equals n R T combines the simple laws, because each one describes how the volume depends on one quantity, and those effects multiply. Fix any two, and a simple law falls out. That means a gas volume, measured at a known temperature and pressure, tells you the moles of gas. And moles connect to reactions. Drop some marble chips into acid, and catch the carbon dioxide in a gas syringe. How can a gas volume measure the progress or quantity of a **reaction**?

Visual: the four cards return around "PV = nRT" with their ticks. On "tells you the moles" the strip "n = PV ÷ RT" writes. On "Drop some marble chips into acid" the board clears to the final frame's layout: `y11c-flask-chips-acid-bung-fizz-v1.png` at the left, the coded tube, the horizontal syringe at the right at "0 mL"; the conditions strip "room: 21.0 °C, 101.3 kPa"; "PV = nRT" shrinks to a navy card at the top left. On "catch the carbon dioxide" grey wisps "CO₂(g)" move along the tube and the plunger starts to move out; the amber chip "gas volume → moles → how far? how much?". On "reaction" the chip "Next: How can a gas volume measure the progress or quantity of a reaction?" writes. Hold about 2 seconds. This is the final frame (m2-v20 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. PV = nRT, R = 8.314 J mol⁻¹ K⁻¹.
2. Units: P in kPa, V in L, n in mol, T in K.
3. Fix two quantities and a simple law is left.
4. Same sample (fixed n): P₁V₁/T₁ = P₂V₂/T₂.
5. Real gases deviate at high P and low T.

Memory aid (framed card, on the notes screen): *Cover what's fixed: what's left is the law.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why the volume quadruples (2); why the dependences combine into V ∝ nT/P (2, 3); why each simple law is inside PV = nRT (4); why kPa and L suit R = 8.314 (5); why PV/T is constant for one sample (8); why the balloon grows (9); why real gases are close to ideal, and when they are not (10).
- **Misconceptions addressed:** effects add, not multiply (1, 2); a different R for each gas (3); mL and °C (5; crossed in A1); one change forgotten (crossed in A2); "ideal" means exact for real gases (10).
- **One idea at a time:** prediction (1), multiplying (2), the equation (3), the simple laws (4), units (5), molar volume (6), one calculation (7), one sample (8), its calculation (9), assumptions (10).
- **Video makes it easier:** a box doubles twice as n and T double (1, 2); fixed symbols slide behind a cover and each simple law drops onto its card (4); the data sheet's molar volumes appear from the equation (6); the balloon rises and grows as the numbers resolve (9); crowded and cold particle windows show where the law fails (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 26 s and 27 s.
- **Avoided double teaching:** each simple law and its cause (m2-v16 to v18, recalled by card only); kelvin conversion (m2-v18, used); n = m ÷ MM (m2-v03, used in A1).
- **Syllabus coverage:** `C2-IQ4-01` stem "the relationship between the Ideal Gas Law and" each of "Gay-Lussac's Law (temperature)", "Boyle's Law", "Charles' Law", "Avogadro's Law" (2 to 4, 8); "solve problems" (7, 9, A1, A2).
- **Out of scope by design:** gas stoichiometry, real-gas equations, kinetic theory formulae, partial pressures.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: T = 295.15 K; n = PV ÷ RT = 105 × 2.00 ÷ (8.314 × 295.15) = 0.0856 mol (1 mark for kelvin and units, 1 mark for n); m = n × MM = 0.0856 × 28.02 = 2.40 g (1 mark). Classic mistake (crossed): 32.2 g (T left in °C).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: n is fixed, so P₁V₁/T₁ = P₂V₂/T₂ with T₁ = 298.15 K and T₂ = 348.15 K (1 mark); P₂ = 100 × 500 × 348.15 ÷ (250 × 298.15) = 234 kPa (1 mark). Classic mistake (crossed): 200 kPa (the temperature change ignored).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Prediction | n × 2, T × 2 → V × 4 | 1, 2 |
| R | 8.314 J mol⁻¹ K⁻¹; 1 kPa × 1 L = 1 J | 3, 5, cards |
| Molar volumes | 1 × 8.314 × 298.15 ÷ 100 = 24.79 L; × 273.15 ÷ 100 = 22.71 L | 6 |
| Ideal-gas example (site) | 0.250 mol, 30 °C = 303.15 K, 95.0 kPa → 6.63 L | 7 |
| Balloon (site) | 15.0 L, 100 kPa, 27 °C = 300.15 K → 40.0 kPa, −23 °C = 250.15 K; 31.3 L; × 2.5; × 0.83 | 9 |
| A1 | 2.00 L, 22.0 °C = 295.15 K, 105 kPa; 0.0856 mol; 28.02; 2.40 g; slip 32.2 g | 11, 12 |
| A2 | 500 mL, 25 °C = 298.15 K, 100 kPa → 250 mL, 75 °C = 348.15 K; 234 kPa; slip 200 kPa | 13, 14 |
| Handoff | room 21.0 °C, 101.3 kPa; syringe 0 to 100 mL | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 8.314 × 298.15 ÷ 100 = 24.788; 8.314 × 273.15 ÷ 100 = 22.710.
- 0.250 × 8.314 × 303.15 ÷ 95.0 = 6.6326. Slip (Revision 2 ghost row): 0.250 × 8.314 × 30 ÷ 95.0 = 0.6563.
- 100 × 15.0 × 250.15 ÷ (40.0 × 300.15) = 31.253; 250.15 ÷ 300.15 = 0.8334.
- 105 × 2.00 ÷ (8.314 × 295.15) = 0.085579; × 28.02 = 2.3979. Slip: 105 × 2.00 ÷ (8.314 × 22.0) = 1.1481; × 28.02 = 32.17.
- 100 × 500 × 348.15 ÷ (250 × 298.15) = 233.54; 100 × 500 ÷ 250 = 200.

## Memory aid check

- **"Cover what's fixed: what's left is the law."** Written for this video. Meaning: in PV = nRT, treat the fixed quantities (and R) as one constant; the remaining symbols form the simple law. Assumptions checked: the fixed quantities really are fixed (each law's conditions, scene 4); ideal behaviour (scene 10); T in kelvin (scenes 5, 8). It helps a new case: the combined gas law is the same move with only n fixed (scene 8), and A2 uses it.
- **Considered, not used:** "PV = nRT: Pretty Very nice Rat Tail" (memorises letters students already see on the data sheet, explains nothing).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,841 characters**, 16 scenes (Revision 1: 5,841). Revision 2 adds about 3 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 439 s; add about 8 s of settling (the box doubling in 2, the cover-up in 4, the balloon rise in 9, the particle windows in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 529 s** (Revision 1: about 526 s).

## Scene list and build ids

Lesson key `c-y11-m2-v19` (route chem-y11-m2-v19; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v19`.

In order (16 scene headings, all `### N.`): hook-prediction, effects-multiply, pv-nrt, laws-inside, units, molar-volume-check, ideal-gas-calc, combined-law, weather-balloon, why-ideal, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v18's final frame into scene 1 by camera continue; 1 to 2 camera continue; 2 to 3 camera continue (the strips merge into the equation); 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v19-learning-review.md`, `checks/c-y11-m2-v19-science-check.md`.

## Assets

Have (inspected 5 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/physics/phys-y11-balloon-v1.png` (1246 × 1263, a yellow rubber balloon, transparent): scene 9, scaled uniformly as it rises (tag "weather balloon, not to scale").
- `public/assets/chemistry/c4a-syringe-barrel-v1.png` and `c4a-syringe-plunger-v1.png`: scene 15, final frame.
- **Inspected, not used:** `biology/y11-balloon-large-v1.png` (a pink party balloon; the yellow one reads more neutrally); `c4a-cylinder-body-v1.png` with `c4a-cylinder-piston-v1.png` (a metal cylinder hides the particles); `c7-gas-compressor-pump-v1.png` (industrial; not needed).

Need (new plates, Codex): the bung-and-delivery-tube flask set requested in `chem-y11-m2-v20.md` (`y11c-flask-chips-acid-bung-fizz-v1.png` appears here first, in scene 15 and the final frame).

Coded: law cards, box and particles, strips and equations, cover-up, units strip, calculation rows, altitude strip, particle windows, connecting tube and wisps, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v19)

No new plates of its own. The final frame needs `y11c-flask-chips-acid-bung-fizz-v1.png` from `chem-y11-m2-v20.md`'s asset brief; Codex makes that set before either video is built. Confirm the balloon plate scales uniformly from about 300 px to about 600 px wide on the 1920 × 1080 board without visible softness.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm R = 8.314 J mol⁻¹ K⁻¹ and the molar volumes match the current HSC Chemistry data sheet, and that N = 14.01.
3. Confirm the site content used matches `lesson15.sa.html` (`l15-gaslaws-title`: law cards, combined and ideal gas laws, 1 J = 1 kPa·L, molar volume from PV = nRT, ideal-gas assumptions, both worked examples).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophes).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v18's final frame, and send the final frame to the m2-v20 designer.

## YouTube metadata (draft)

Title: PV = nRT: How the Ideal Gas Law Combines the Simple Gas Laws | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Four gas laws, each holding two quantities fixed. Double the moles and the kelvin temperature together, and the volume quadruples: the effects multiply. See how that builds PV = nRT, how each simple law falls out when two quantities are fixed, which units suit R = 8.314, and why the data sheet's molar volumes are PV = nRT in disguise. Then solve an ideal-gas problem and the combined gas law (a weather balloon), and learn the three ideal-gas assumptions. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:"
"Gay-Lussac's Law (temperature)"
"Boyle's Law"
"Charles' Law"
"Avogadro's Law (ACSCH060)"

Previous: Why do gas volume and pressure laws require kelvin? Next: How can a gas volume measure the progress or quantity of a reaction?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Balloon plate (root).** A yellow rubber balloon stands in for a weather balloon, tagged "not to scale". A dedicated weather-balloon plate is not requested; root may cut the plate and keep the calculation only.
- **2. Two worked examples (learning review).** Scenes 7 and 9 both use site examples, and A1 and A2 repeat both types. If the review finds the video calculation-heavy, scene 6 (the molar-volume check) can shrink to one row and one sentence (saves about 200 characters); keep both examples, since the route asks for "an ideal-gas or combined-law case" and the attempts depend on both.
- **3. Atmospheres (root).** The design never mentions atm or mmHg (the course uses kPa throughout). Confirm.

## Review notes

- Revision 1 was reviewed by brief 182 (0 blockers, 1 should fix, 0 optional); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (does scene 2's "the effects multiply" justify the equation for a student starting Year 11; is scene 4's cover-up readable at playback speed), then the science check and Codex error check.
- Checker output (5 November): narration 5,841 characters; per scene (1 to 16): 427, 359, 385, 349, 342, 396, 542, 336, 506, 490, 210, 351, 248, 363, 462, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 5,841 characters (sum of scene strings); per scene (1 to 16): 427, 359, 385, 349, 342, 396, 542, 336, 506, 490, 210, 351, 248, 363, 462, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 182 finding (`checks/c-y11-m2-v19-learning-review.md`, `checks/c-y11-m2-v19-science-check.md`):
1. Metadata length (should fix): the draft YouTube title was 109 characters; it is now "PV = nRT: How the Ideal Gas Law Combines the Simple Gas Laws | Year 11 Chemistry Module 2" (89 characters), keeping the learner question and course identity. No narration change.

Visual upgrade (scene-level visual changes; narration, numbers and teaching logic unchanged):
- Scene 1: the painted syringe replaces Revision 1's coded box, so a real apparatus plate is on screen in the first 20 s.
- Live control: the n, T and P sliders (scene 2) drive the plunger and a V-factor readout (× 2, × 4, × 2).
- Stage changes in every teaching scene (slider stage, full-width equation build, units strip, particle windows); no stage longer than about 41 s.
- Framed answers with a green tick: V ∝ nT/P (2), PV = nRT (3), 24.79 L (6), 6.63 L (7), the combined-law card (8), 31.3 L (9), 2.40 g (12), 234 kPa (14). Crossed slips carry red hand tags: a new Celsius ghost row in the worked example (7: 0.656 L), mL and °C (5), 32.2 g (12), 200 kPa (14).
- Hand tags and pen marks in role colours in every teaching scene (1 to 10).
- Memory line as a framed card (scene 4 and the notes screen); key notes cut to five short bullets.
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- No new plate requests.

Counts: 5,841 characters (Revision 1: 5,841); about 526 to about 529 s.
