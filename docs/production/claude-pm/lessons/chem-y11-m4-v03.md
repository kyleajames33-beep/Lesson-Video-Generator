# Year 11 Chemistry M4 V03: Combustion calorimetry and heat loss. Why does combustion calorimetry underestimate a fuel enthalpy? (design)

Status: Revision 1 (6 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,999 characters, 19 scenes, about 542 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: third Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 72, between `chem-y11-m4-v02` and `chem-y11-m4-v04`; a practical and calculation video about one calorimeter and its limits. Templates: `chem-y11-m4-v02.md` (series layout, colour key, calculation staging), `math-a12-d10.md` (calculation layout), `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates), `chem-m8-p02.md` (practical conventions). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v03` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Measure fuel mass loss and water temperature, calculate molar enthalpy, compare reference data and explain heat loss/incomplete combustion."; next handoff: "Why can dissolving an ionic substance warm or cool water?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson02.sa.html` (SHA256 `8767d8a9172673f06f89e589b7606fbcd14ce5f090d2465d2e25c06e488bb318`, recomputed, matches the route), sections `l02-the-spirit-burner-calorimeter-setup-title`, `l02-sources-of-error-in-combustion-calorimetry-title`, `l02-worked-examples-title`. Used: the procedure in order (weigh burner, record water temperature, burn to a rise of about 10 °C, extinguish, record final temperature, reweigh); the safety paragraph (safety glasses, fuel stoppered and away from the flame, small quantities, ethanol in preference to methanol); worked example 1's data unchanged (152.34 → 151.62 g, 200.0 g water, 19.5 → 31.2 °C, −626 kJ mol⁻¹ against −1367); the energy-split diagram ("Where the combustion energy goes"); the five named sources of error with their direction ("Each reduces |ΔHc|"); the trap "'Human error' explains the discrepancy" and its fix (name the physical process and state its direction); worked example 2's percentage-error formula; drill 5 (balance imprecision cannot explain a consistent shortfall); the uncapped-burner mini-task (larger n, less negative ΔHc); the improvements column (draught shield, air supply, cap the burner, submerged thermometer); the bomb calorimeter note. Not used: the Lavoisier hook (`chem-y11-m4-v02.md` site note 2), the energy-per-gram table (Short answer Q3; `chem-y11-m4-v09` owns per gram), the jet-fuel anchor.

Owner rules applied: as `chem-y11-m4-v02.md` (one learner question; no people, hands or faces: the burner is lit and capped by coded motion, the water is stirred by a coded loop; real apparatus as painted plates; calculation rows, readouts and the energy-split bar coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Energy Changes in Chemical Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ1-01`: "conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including:"
  - "combustion"
- `C4-IQ1-02`: "investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 43)

**Boundary:** opens on m4-v02's final frame (burner rig, "water gained 9.78 kJ", "0.72 g of ethanol burned", the two-bar gap with "?", "Where did the rest of the energy go?"). Teaches: a 3 s prediction (our result will be smaller in size); the standard enthalpy of combustion and where data values come from (a sealed container in oxygen); the method in order with its safety; moles of fuel from the mass loss; ΔHc = −q/n and its sign; comparing with the data value by percentage error (formula from ws-v05, not re-taught); where the energy went (an energy-split bar); heat loss to the air (largest); incomplete combustion (soot and carbon monoxide; yellow flame and sooty can as evidence); fuel evaporation from an uncapped wick (n too big); all three are systematic and push the same way, while random errors scatter; method improvements; an answer frame for error questions. Not taught: specific heat capacity or q = mcΔT (v02, used only), the can's heat capacity in a calculation (author note d), per-gram fuel comparisons (v09), Hess's law values for ΔHc (v08, v09), dissolution (v04).

## Decisions

- **Learner question (route wording kept).** "Why does combustion calorimetry underestimate a fuel enthalpy?" The answer, in order: the result is a molar enthalpy from q and n (4, 5); it is less than half the data value (6); most of the released energy never reaches the water (7) because heat escapes to the air (8), some fuel burns incompletely (9) and some evaporates unburned (10); all three push one way, so they are systematic (11); a better method narrows the gap (12).
- **Opening frame (equals `chem-y11-m4-v02.md`'s final frame, same designer).** Left: `m7-spirit-burner-calorimeter-v1.png` with readout "31.2 °C", grey "started at 19.5 °C", label "200.0 g of water", teal chip on the can "water gained 9.78 kJ". Lower left: `m7-spirit-burner-on-balance-v1.png` small, readout "151.62 g", grey "started at 152.34 g", chip "0.72 g of ethanol burned". Right: orange bar "0.72 g of ethanol can release about 21 kJ (data)" and shorter teal bar "the water gained 9.78 kJ", the gap shaded grey with "?". Amber chip "Where did the rest of the energy go?". The "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Our molar enthalpy: bigger than the data value, about the same, or smaller in size?" Answer: smaller in size (scene 2 opens on it). It sets the question the video answers.
- **Enthalpy of combustion (scene 2).** "The enthalpy change when one mole of a substance burns completely in oxygen" (site key term; "under standard conditions" kept on the card, not spoken). Data value for ethanol −1367 kJ mol⁻¹ (site; author note a). Where data values come from: a sealed steel container filled with oxygen, surrounded by water, so almost no heat escapes and the fuel burns completely (one sentence; the term "bomb calorimeter" on a grey tag only; the constant-volume correction is author note b).
- **Method (scene 3; `C4-IQ1-01`).** The site's procedure in order, with stirring added (v02 already showed the can and thermometer). Safety spoken briefly and on a chip: safety glasses; fuel bottle stoppered and away from the flame; burner capped to put the flame out; small quantities, good ventilation (chip); ethanol as the school fuel, methanol only if the school's risk assessment allows it (chip, from the site). The flame is put out by placing the cap (coded cap slides down; no hand).
- **Calculation layout (scenes 4, 5, 15; `math-a12-d10.md`).** Task strip; equation strip; grouped givens with units; one stage per row; earlier rows dim. The givens keep v02's result "q = 9.78 kJ" as a carried result. Molar mass from data-sheet atomic masses (C 12.01, H 1.008, O 16.00; root decision m2-1): 46.07 g mol⁻¹ (site). n = 0.72 ÷ 46.07 = 0.01563 mol (the site prints 0.01562, a truncation; author note c). ΔHc = −9.78 ÷ 0.01563 = −626 kJ mol⁻¹ (three significant figures by the Module 4 rule; grey tag "0.72 g has 2 significant figures").
- **Why the minus sign (scene 5; site trap 2).** q is the water's gain (positive, v02); the reaction lost the same energy, so per mole it is −q/n. A crossed "+626 kJ mol⁻¹" appears in feedback 1 (as "+464"), not here.
- **Percentage error (scene 6).** |experimental − accepted| ÷ |accepted| × 100 is ws-v05's formula; the board shows it with a grey "from ws-v05" tag and the narration uses it without re-teaching. (1367 − 626) ÷ 1367 = 54.2%, spoken "about fifty-four per cent".
- **Energy split (scene 7; site diagram "Where the combustion energy goes").** One coded bar of 21.4 kJ ("if 0.72 g burned completely"), split into: water 9.78 kJ (teal, measured), copper can about 0.3 kJ (copper colour, tag "estimate"; author note d), and about 11.3 kJ "not in the water: air, flame gases, incomplete burning" (grey). The bar is the video's main visual idea and returns in scenes 8 to 11 with each cause attached to a part of it.
- **Three causes, each with its direction (scenes 8 to 10; site table).** Heat loss to the air (largest; hot air and combustion gases rise past the can, the can's sides warm the room): q too small → |ΔHc| too small. Incomplete combustion (limited oxygen; soot and carbon monoxide form; evidence: yellow smoky flame and black deposit, `m7-spirit-burner-calorimeter-sooty-v1.png`): less energy released per mole → |ΔHc| too small. Fuel evaporation from the uncapped wick: recorded mass loss too big → n too big → |ΔHc| too small. The site's other two (heat absorbed by the can; thermometer bulb not submerged) appear as grey chips in scene 10 only. "Too small in size" and "less negative" are both spoken, so students meet the exam wording and its meaning.
- **Systematic against random (scene 11; ws-v05 terms, site drill 5).** All causes shift the result one way: systematic. Random errors (last digit on the balance) scatter both ways and cannot make a result half the data value. Repeats do not fix it.
- **Improvements (scene 12).** `m7-spirit-burner-calorimeter-shield-v1.png` cross-fades in place: draught shield and lid; can just above the flame tip; enough air for a blue flame; stir; read the highest temperature; cap at once. The improved result is not given a number (no invented data).
- **Answer frame and memory aid (scene 13; site trap 3).** "Never write 'human error'. Name the cause, trace it to q or n, then say which way ΔH moves." See "Memory aid check".
- **Attempts (original wording, HSC style).** A1 (calculate and compare; methanol, new numbers): 0.60 g burned; 200.0 g water, 19.4 → 29.8 °C; data −726 kJ mol⁻¹. Model: q = 8.69 kJ; n = 0.01873 mol; ΔHc = −464 kJ mol⁻¹; percentage error 36%. Crossed: "+464 kJ mol⁻¹" (sign). A2 (explain an error's direction; the site's uncapped-burner idea in new wording): model chain mass loss too big → n too big → ΔHc less negative. Crossed: "n is too small" (the site's own slip, site note 1).
- **Mistake scene:** none separate. "Human error" (13, crossed); the missing minus sign (crossed in A1); n too small for evaporation (crossed in A2); repeats fix a systematic error (11).
- **Handoff (route next: `chem-y11-m4-v04`, "Why can dissolving an ionic substance warm or cool water?").** Scene 18: the flame sits outside the water, which is the weak point; a change that happens inside the water can be measured in a foam cup; dissolving some solids warms water and others cool it. Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log in `../site-corrections-chem-y11.md` if accepted; module 4 lesson 2):**
  1. Setup card, "Common error, not capping the burner": "This makes the recorded mass of fuel burned appear larger than it actually was, giving a falsely small value of n". A larger mass gives a larger n. The same lesson's mini-task answer says "a larger-than-true n". Suggest "giving a falsely large value of n, and therefore a falsely low (less negative) ΔHc".
  2. Short answer Q3(b) model answer: "this is the same reason jet fuel (kerosene) is denser in energy than wood or alcohol" sits beside the lesson's own anchor saying kerosene is not chosen mainly for energy per kilogram. Suggest removing the jet-fuel clause from the model answer.
  3. Worked example 1 step 2 prints n = 0.72 ÷ 46.07 = 0.01562 mol; 0.72 ÷ 46.07 = 0.015628, which rounds to 0.01563. The final −626 kJ mol⁻¹ is unchanged.
  - Checked and correct: worked example 1 (0.72 g; 9781 J; −626 kJ mol⁻¹); worked example 2 (43.3%); drill 1 (0.64 g; 0.01065 mol; 15 048 J; −1413 kJ mol⁻¹; 30.1%); drill 2 (−1162; −4.65; −1033 kJ mol⁻¹); drill 3 (5267 J; −1053 kJ mol⁻¹); Q2 (10 157 J; 0.02653 mol; −383 kJ mol⁻¹; 47.2%); Q3(a) (22.7, 29.7, 47.9 kJ g⁻¹); supported frame (5643 J).
- **Cause chain taught, in order:** (1) a molar enthalpy needs the heat per mole of fuel, so q is divided by n (4, 5); (2) the reaction lost what the water gained, so the sign is negative (5); (3) heat that warms the air never warms the water, so q is too small (8); (4) carbon that ends as soot or carbon monoxide releases less energy than carbon that ends as carbon dioxide, so less heat is released per mole (9); (5) evaporated fuel is counted as burned, so n is too big (10); (6) smaller q or bigger n both make −q/n smaller in size (8 to 10); (7) causes that act in one direction every time are systematic, so repeats cannot remove them (11); (8) shielding, a clean flame and capping reduce each cause (12).
- **Entry knowledge:** m4-v01 (system, surroundings, exothermic, ΔH sign, the burner readings); m4-v02 (q = mcΔT, q = 9.78 kJ, the assumption that all heat reaches the water); m2 (moles from mass, n = m ÷ M); ws-v05 (systematic and random error, percentage error); m3-v04 (complete and incomplete combustion products, recalled only).
- **Learner-visible vocabulary (plain meaning at first use):** enthalpy of combustion, ΔHc (2); data value, "a value measured carefully and published" (2); incomplete combustion, recalled with its products (9); systematic error and random error, recalled with one-line meanings (11); draught shield (12).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **burner rig** (`m7-spirit-burner-calorimeter-v1.png`; readouts; label cards; a coded stirrer loop on "stir"); **balance** (`m7-spirit-burner-on-balance-v1.png`; coded readouts; a coded cap that slides on and off); **calculation board** (scenes 4, 5, 6, 15); **comparison bars** (scene 6: our −626 against the data −1367, drawn to scale as two horizontal bars); **energy-split bar** (scenes 7 to 11); **leak arrows** (scene 8: orange arrows rising past the can's sides and fading into the air; heat shimmer lines above the can); **sooty rig** (`m7-spirit-burner-calorimeter-sooty-v1.png`, cross-fades in place in scene 9; coded particle inset "C (soot)", "CO", "CO₂"); **vapour wisps** (scene 10: faint grey wisps from the uncapped wick on the balance plate; the readout ticks down with no flame); **error target** (scene 11: two dot clusters, one scattered round the data value, one shifted to about half); **shielded rig** (`m7-spirit-burner-calorimeter-shield-v1.png`, cross-fades in place in scene 12); **answer frame** (scene 13: three linked boxes "name it" → "q or n?" → "ΔH which way?"); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v02):** heat q warm orange; mass amber; moles n violet; ΔH red when negative; data values slate blue; "not in the water" grey; crossed items red strike; earlier rows dimmed.
- **Board layout (constant):** heading top left; apparatus at the left; calculation rows, bars or the cause list at the right.

Author notes (not learner copy):
(a) Ethanol: standard enthalpy of combustion −1366.8 kJ mol⁻¹ (CRC Handbook; NBS tables give −1366.8 with H₂O(l)); the site and course use −1367. Methanol −726 kJ mol⁻¹ (site; CRC −726.1).
(b) A sealed bomb calorimeter works at constant volume and measures the internal energy change; a small correction gives ΔHc. Not spoken; the tag says only "sealed container in oxygen (bomb calorimeter)".
(c) n = 0.72 ÷ 46.07 = 0.015628 mol, shown 0.01563; −9.7812 ÷ 0.015628 = −625.9 → −626 kJ mol⁻¹ (with q unrounded; with q = 9.78 kJ the quotient is −625.8, the same to three figures). The data justify two significant figures (0.72 g); the Module 4 rule shows three with a grey tag.
(d) Copper can: a 60 g can warming by 11.7 K takes 60 × 0.385 × 11.7 = 270 J (v02 author note d). Shown as "about 0.3 kJ (estimate)". The remainder 21.4 − 9.78 − 0.27 = 11.3 kJ is not split between heat loss and incomplete combustion; no reliable data allow that, and the bar says so ("air, flame gases, incomplete burning").
(e) Incomplete combustion products: C(s) and CO(g). CO formation (ΔfH −110.5) releases far less than CO₂ (−393.5) per carbon atom; the narration says only "less energy". Carbon monoxide is toxic; the lesson does not ask students to make it deliberately, and the sooty plate is evidence, not a procedure.
(f) Safety (NSW school practice, as the site states): supervised practical under the school's risk assessment; safety glasses; long hair tied back; ethanol in a spirit burner on a heatproof mat; fuel bottle stoppered and kept away from flames; burner capped to extinguish and never refilled while lit or hot; good ventilation. The science check confirms the wording against current NSW guidance (root decision m4-5 covers the same burner).
(g) Pronunciations: "delta H c"; "minus q over n"; "zero point zero one five six three"; "forty-six point zero seven".

Main question: *Why does combustion calorimetry underestimate a fuel enthalpy?*
Entry knowledge: m4-v01, m4-v02, m2 moles, ws-v05.
Stops after: measured mass loss and temperature give ΔHc = −626 kJ mol⁻¹; compared with −1367 (54%); heat loss, incomplete combustion and evaporation explained with directions; systematic not random; improvements.
Handoff: chem-y11-m4-v04, dissolution.

## Opening frame and final frame

- **Opening frame:** m4-v02's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v04` opens on it):** left, small: `m7-spirit-burner-calorimeter-shield-v1.png` with the slate chip "−626 against −1367 kJ mol⁻¹: heat escaped" and a grey tag "flame outside the water". Centre: `m6-foam-cup-calorimeter-v1.png` large, coded probe readout "21.0 °C", a teal label "reaction inside the water". Right: `m5x-cold-pack-v1.png` above `m5x-hot-pack-v1.png`, each with a coded label: "ammonium nitrate dissolving: cools" (cool blue down arrow) and "calcium chloride dissolving: warms" (warm orange up arrow). The amber chip "Why can dissolving warm or cool water?". The chip "Next: Why can dissolving an ionic substance warm or cool water?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Last time, the burner lost zero point seven two grams of ethanol, and the water gained nine point seven eight kilojoules. Burning that much ethanol can release about twenty-one. Now let's turn our data into the fuel's enthalpy per mole, and compare it with the data value. First, a prediction. Will our answer come out bigger than the data value, about the same, or smaller in **size**?

Visual: opens on m4-v02's final frame; the "Next" chip fades. On "zero point seven two grams" the balance chip pulses; on "nine point seven eight kilojoules" the teal bar pulses; on "about twenty-one" the orange bar pulses. Heading writes: "Why does the burner's answer come out small?". On "compare it with the data value" a slate placeholder "data value: ?" appears at the right. Chips "bigger", "about the same", "smaller in size". On "size" the 3 s `Countdown` ring runs.

### 2. the enthalpy of combustion
> Smaller in size. To see why, we need the value we're comparing against. The enthalpy of combustion, delta H c, is the enthalpy change when one mole of a substance burns completely in oxygen. For ethanol, the data value is minus one thousand three hundred and sixty-seven kilojoules per mole. It's measured in a sealed container full of oxygen, where the fuel burns completely and almost no heat can **escape**.

Visual: "smaller in size" ticks. On "The enthalpy of combustion" gloss card "enthalpy of combustion, ΔHc: the enthalpy change when 1 mol of a substance burns completely in oxygen". On "minus one thousand three hundred and sixty-seven" the slate placeholder fills: "data value: ΔHc(ethanol) = −1367 kJ mol⁻¹". On "a sealed container full of oxygen" a coded cutaway of a thick steel vessel inside a water jacket, a sample cup inside, tag "bomb calorimeter (sealed, pure oxygen)"; on "escape" all its heat arrows stay inside the jacket.

### 3. the method
> Here's the school method. Weigh the spirit burner with its cap on. Put a known mass of water in the copper can and record its temperature. Light the burner, stir the water, and let it warm by about ten degrees. Then cap the burner to put out the flame, record the highest temperature, and weigh the burner again. Wear safety glasses, and keep the fuel bottle stoppered and well away from the **flame**.

Visual: clear change to the bench: `m7-spirit-burner-on-balance-v1.png` at the left, the burner rig at the right. Numbered steps write at the top right, each on its cue: on "Weigh the spirit burner" step 1 "weigh burner + cap" (readout "152.34 g"); on "record its temperature" step 2 "water: 200.0 g, 19.5 °C"; on "Light the burner" step 3 (the flame appears by a small coded spark), on "stir the water" a coded stirrer loop moves up and down in the can; on "about ten degrees" the readout climbs; on "cap the burner" step 4 (a coded cap slides down over the wick; the flame goes out); on "highest temperature" readout holds at "31.2 °C"; on "weigh the burner again" step 5 (balance "151.62 g"). On "safety glasses" a safety chip: "safety glasses · hair tied back · ethanol fuel (methanol only if your school's risk assessment allows) · bottle stoppered, away from flames · cap to extinguish · ventilated room". On "flame" the chip settles at the lower left.

### 4. moles of fuel
> The burner lost zero point seven two grams, so that's the mass of ethanol that burned. A per mole value needs moles. Ethanol's molar mass is forty-six point zero seven grams per mole, so zero point seven two divided by forty-six point zero seven gives zero point zero one five six three **moles**.

Visual: board settles into the calculation layout beside the balance. Task strip: "Find ΔHc of ethanol from the burner data". Givens grouped (each on its cue): on "lost zero point seven two grams" "m(ethanol) = 152.34 − 151.62 = 0.72 g" (amber); carried result "q(water) = 9.78 kJ (last video)" (orange, dimmed). On "molar mass" "M(C₂H₅OH) = 46.07 g mol⁻¹" (tag "2 × 12.01 + 6 × 1.008 + 16.00"). Equation strip "n = m ÷ M". On "zero point seven two divided by" the row "n = 0.72 ÷ 46.07"; on "moles" "= 0.01563 mol" (violet).

### 5. the molar enthalpy
> Now share the heat out per mole. The water gained nine point seven eight kilojoules from zero point zero one five six three moles of ethanol. Dividing gives about six hundred and twenty-six kilojoules for every mole. The reaction lost that energy, so the sign is negative. Delta H c equals minus q over n, which is minus six hundred and twenty-six kilojoules per **mole**.

Visual: on "share the heat out per mole" the orange q chip and the violet n chip slide together. On "Dividing" the row "9.78 ÷ 0.01563 = 626 kJ per mol". On "The reaction lost that energy" m4-v01's outward arrows flash across a dashed system outline round the flame, tag "q(water) +, reaction −". Equation strip on "minus q over n": "ΔHc = −q ÷ n" (red minus). On "minus six hundred and twenty-six" the row "ΔHc = −9.78 ÷ 0.01563 = −626 kJ mol⁻¹" (red; grey tag "3 s.f. shown; 0.72 g has 2"); on "mole" the result is ringed.

### 6. comparing with the data value
> So our result is minus six hundred and twenty-six, and the data value is minus one thousand three hundred and sixty-seven. Ours is less than half the size. As a percentage error, that's the difference, seven hundred and forty-one, divided by one thousand three hundred and sixty-seven, which is about fifty-four per **cent**.

Visual: two horizontal bars to scale: "our result: −626" (red, shorter) and "data value: −1367" (slate). On "less than half the size" a bracket shows the half-way mark on the data bar, and our bar stops short of it. On "As a percentage error" the formula strip "% error = |experimental − accepted| ÷ |accepted| × 100" (grey tag "from ws-v05"). On "seven hundred and forty-one" the row "|−626 − (−1367)| = 741"; on "cent" "741 ÷ 1367 × 100 = 54%" (ringed).

### 7. where the energy went
> So where did the energy go? If all zero point seven two grams had burned completely, about twenty-one point four kilojoules would be released. Only nine point seven eight reached the water. The copper can soaked up a little, roughly a quarter of a kilojoule. Most of the rest never reached the water at **all**.

Visual: clear change to the energy-split bar across the top half, the burner rig below it at the left. On "about twenty-one point four kilojoules" the full bar draws in orange: "if 0.72 g burned completely: 21.4 kJ (0.01563 mol × 1367 kJ mol⁻¹)". On "Only nine point seven eight" the first segment fills teal "water: 9.78 kJ (measured)". On "The copper can" a thin copper segment "can: about 0.3 kJ (estimate)". On "all" the remaining segment shades grey "not in the water: about 11.3 kJ", with a "?" that the next scenes replace.

### 8. heat lost to the air
> The biggest leak is heat lost to the air. The flame heats the air around it, and that hot air, along with the hot gases from burning, rises past the sides of the can and carries its energy away. The warm can also heats the room. Every joule that misses the water is a joule that q never counts, so q is too small, and delta H comes out too small in **size**.

Visual: camera push into the burner rig. On "The flame heats the air around it" orange leak arrows curl from the flame's edges; on "rises past the sides of the can" they stream upward past the can's sides with faint shimmer lines; on "The warm can also heats the room" small arrows leave the can's walls. Cause chip 1 writes at the right: "heat lost to the air (largest)". On "q is too small" the chain "q too small → |ΔHc| too small" (orange down arrow). On "size" the grey bar segment gains the label "1: heat to the air".

### 9. incomplete combustion
> The second cause is incomplete combustion. If the flame doesn't get enough oxygen, some carbon ends up as soot or carbon monoxide instead of carbon dioxide. You can see it, a yellow, smoky flame and a black layer on the bottom of the can. Making those releases less energy than making carbon dioxide, so less heat is released for each mole of fuel **burned**.

Visual: on "incomplete combustion" `m7-spirit-burner-calorimeter-sooty-v1.png` cross-fades in place (same rig, yellow flame, black deposit on the base). Cause chip 2: "incomplete combustion". On "soot or carbon monoxide" a coded inset of the flame: carbon atoms leaving as "C (soot)", "CO" and "CO₂", with fewer reaching "CO₂". On "a yellow, smoky flame" the flame is ringed; on "a black layer" the base deposit is ringed. On "releases less energy" a small energy bar "C → CO₂" long, "C → CO" shorter. On "burned" the chain "less energy released per mole → |ΔHc| too small"; the grey segment gains "2: incomplete burning".

### 10. fuel that never burned
> A third cause hides in the mass. Ethanol evaporates easily. If the burner sits uncapped, some ethanol evaporates from the wick without burning. The balance counts it as fuel burned, so n comes out too big. Dividing the same q by a bigger n makes delta H smaller in size **again**.

Visual: on "hides in the mass" the balance plate returns at the left. On "sits uncapped" the coded cap slides off; on "evaporates from the wick" faint grey wisps rise from the wick with no flame and the readout ticks down "151.62 → 151.58 g". Cause chip 3: "fuel evaporates (uncapped wick)". On "n comes out too big" the chain "mass loss too big → n too big"; on "Dividing the same q by a bigger n" the row "−q ÷ (bigger n) → |ΔHc| too small". On "again" two grey chips appear under the list: "the can absorbs some heat" and "thermometer bulb not fully in the water", each tagged "also makes |ΔHc| too small".

### 11. systematic, not random
> Notice that every one of these pushes the answer the same way, smaller in size. That makes them systematic errors, which shift every repeat in one direction. Random errors, like the last digit on the balance, scatter results both ways, so they can't explain a result that's half the data value. Repeating the experiment won't fix **it**.

Visual: on "every one of these pushes the answer the same way" the three cause chips each send an arrow onto the same "smaller in size" box. On "systematic errors" gloss "systematic error: shifts every result in one direction (ws-v05)" and an error target: five dots clustered tightly near the "half" mark, away from the data value at the centre. On "Random errors" gloss "random error: scatters results both ways"; a second cluster scattered evenly round its own centre. On "the last digit on the balance" tag "±0.01 g in 0.72 g: about 1%". On "it" a crossed chip "repeat more times to fix it".

### 12. a better method
> To get closer, change the method. A draught shield around the burner and a lid on the can keep more of the hot air near the can. Set the can just above the tip of the flame, and let in enough air for a clean blue flame. Stir the water, read the highest temperature, and cap the burner as soon as you're **done**.

Visual: on "change the method" `m7-spirit-burner-calorimeter-shield-v1.png` cross-fades in place. On "A draught shield" the shield panels are ringed (tag "draught shield"); on "a lid on the can" the lid is ringed. The leak arrows from scene 8 return, shorter and fewer. On "just above the tip of the flame" a small coded bracket between flame tip and can base; on "clean blue flame" the inset from scene 9 shows only "CO₂". On "Stir the water" the stirrer loop moves; on "done" the cap slides down. Each improvement ticks the cause it reduces (1, 2, 3).

### 13. the answer frame
> In an exam, don't write human error. Name the physical cause, trace it to q or n, then say which way delta H moves. For example, heat lost to the air makes q too small, so delta H is less **negative**.

Visual: on "human error" a chip "human error" stamped red and crossed. On "Name the physical cause" the answer frame writes as three linked boxes: "name the cause" → "q or n?" → "ΔH: which way?" (memory line underneath in handwriting style: "Name it, trace it to q or n, then move ΔH."). On "heat lost to the air" the boxes fill: "heat lost to the air" → "q too small" → "ΔHc less negative"; on "negative" the last box pulses red.

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. A student burns methanol in a spirit burner. The burner loses zero point six zero grams, and two hundred grams of water warms from nineteen point four to twenty-nine point eight degrees. Calculate the molar enthalpy of combustion of methanol, then its percentage error compared with the data value of minus seven hundred and twenty-six kilojoules per mole. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student uses a spirit burner containing methanol (CH₃OH, M = 32.04 g mol⁻¹) to heat 200.0 g of water in a copper can. The mass of the burner decreases by 0.60 g and the temperature of the water rises from 19.4 °C to 29.8 °C. (a) Calculate the molar enthalpy of combustion of methanol. (Specific heat capacity of water = 4.18 J g⁻¹ K⁻¹) (3 marks) (b) The data value is −726 kJ mol⁻¹. Calculate the percentage error. (1 mark)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 1 (brief)
> Delta T is ten point four, so q is two hundred times four point one eight times ten point four, about eight point six nine kilojoules. The moles are zero point six zero divided by thirty-two point zero four, zero point zero one eight seven three. So delta H c is minus four hundred and sixty-four kilojoules per mole, and the percentage error is about thirty-six per cent. Keep the minus **sign**.

Visual: card shrinks to the top. Rows on their cues: "ΔT = 29.8 − 19.4 = 10.4 K"; "q = 200.0 × 4.18 × 10.4 = 8694 J = 8.69 kJ" (orange); "n = 0.60 ÷ 32.04 = 0.01873 mol" (violet); "ΔHc = −8.69 ÷ 0.01873 = −464 kJ mol⁻¹" (red); "% error = (726 − 464) ÷ 726 × 100 = 36%". On "sign" a chip "ΔHc = +464 kJ mol⁻¹" fades in and is crossed, note "combustion releases energy: negative". Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. A student forgets to cap the spirit burner, and it sits for several minutes before the final weighing. Explain how this affects the calculated enthalpy of combustion. Pause here to answer.

Visual: `QuestionCard`: "In a spirit burner experiment, a student forgets to replace the cap after the flame goes out, and the burner stands for several minutes before its final mass is recorded. Explain the effect of this on the calculated molar enthalpy of combustion of the fuel. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 2 (brief)
> Fuel evaporates from the uncapped wick, so the recorded mass loss is too big. That makes the calculated moles too big. The same q divided by more moles gives a delta H that's less negative, smaller in size than it should be. Saying n is too small gets the chain **backwards**.

Visual: card shrinks. The answer frame from scene 13 fills on cue: "fuel evaporates" → "mass loss too big → n too big" → "ΔHc less negative". On "backwards" a chip "n too small, so ΔHc more negative" fades in and is crossed. Hold about 1 second.

### 18. conclusion and handoff
> So combustion calorimetry underestimates a fuel's enthalpy because heat escapes to the air, some fuel burns incompletely, and some evaporates, and all three make delta H smaller in size. The weak point is that the flame sits outside the water. What about a change that happens inside the water itself? Dissolving some solids warms water, and dissolving others cools it. **Why**?

Visual: the energy-split bar returns small at the top with its three labels. On "heat escapes to the air", "burns incompletely" and "evaporates" the three labels pulse in turn. On "the flame sits outside the water" the shielded rig shrinks to the lower left with the slate chip "−626 against −1367 kJ mol⁻¹: heat escaped" and tag "flame outside the water". On "inside the water itself" `m6-foam-cup-calorimeter-v1.png` slides to the centre, readout "21.0 °C", label "reaction inside the water". On "warms water" `m5x-hot-pack-v1.png` at the right with "calcium chloride dissolving: warms" (orange up arrow); on "cools it" `m5x-cold-pack-v1.png` above it with "ammonium nitrate dissolving: cools" (blue down arrow). On "Why" the amber chip "Why can dissolving warm or cool water?" and the chip "Next: Why can dissolving an ionic substance warm or cool water?" write. Hold about 2 seconds. This is the final frame (m4-v04 opens on it).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Enthalpy of combustion, ΔHc: the enthalpy change when 1 mol of a substance burns completely in oxygen. Data value for ethanol: −1367 kJ mol⁻¹.
2. Method: weigh burner, water temperature, burn and stir, cap, highest temperature, reweigh. n = mass burned ÷ M; ΔHc = −q ÷ n (q in kJ).
3. School results are less negative because of heat lost to the air (largest), incomplete combustion (soot, CO) and fuel evaporating from an uncapped wick (n too big). All are systematic: repeats do not fix them.
4. Improve: draught shield and lid, can close to the flame, clean blue flame, stir, cap at once.

Memory aid (large, on the notes screen): *Name it, trace it to q or n, then move ΔH.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** Why divide by n (4, 5); why the minus sign (5); why heat loss shrinks q (8); why incomplete combustion releases less (9); why evaporation inflates n (10); why all three shrink |ΔHc| (8 to 10); why repeats cannot fix it (11); why each improvement works (12).
- **Misconceptions addressed:** "human error" (13); a positive ΔHc for combustion (crossed in A1); evaporation makes n smaller (crossed in A2, a site slip); repeats fix a systematic error (11); the experiment is "wrong" rather than limited (6, 7: the data value comes from a better-sealed method).
- **One idea at a time:** prediction (1), data value (2), method (3), n (4), ΔHc (5), comparison (6), energy split (7), one cause per scene (8 to 10), error type (11), improvements (12), answer frame (13).
- **Video makes it easier:** one energy-split bar that every cause attaches to (7 to 11); leak arrows that shrink when the shield arrives (8, 12); the sooty plate as visible evidence (9); vapour wisps with the balance ticking down and no flame (10); two dot clusters for systematic against random (11).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 30 s and 20 s.
- **Avoided double teaching:** q = mcΔT and specific heat capacity (v02; q carried in); percentage error and error types (ws-v05; used, tagged); moles (m2); combustion products (m3-v04).
- **Syllabus coverage:** `C4-IQ1-01` combustion temperature change measured (3); `C4-IQ1-02` calculate (4, 5, A1), compare with reliable secondary data (2, 6, A1) and explain differences (7 to 12, A2).
- **Out of scope by design:** per-gram fuel comparisons (v09); ΔHc from formation data (v08); the apparatus heat capacity in a calculation.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) ΔT = 29.8 − 19.4 = 10.4 K; q = 200.0 × 4.18 × 10.4 = 8694 J = 8.69 kJ (1 mark); n = 0.60 ÷ 32.04 = 0.01873 mol (1 mark); ΔHc = −q ÷ n = −8.69 ÷ 0.01873 = −464 kJ mol⁻¹ (1 mark). (b) % error = |−464 − (−726)| ÷ 726 × 100 = 36% (1 mark). Classic mistake (crossed): ΔHc = +464 kJ mol⁻¹ (sign dropped).

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: Ethanol (the fuel) evaporates from the uncapped wick, so the recorded mass loss is larger than the mass that burned (1 mark). The calculated moles of fuel, n = m ÷ M, are therefore too large (1 mark). Because ΔHc = −q ÷ n with q unchanged, the calculated ΔHc is less negative (smaller in magnitude) than it should be (1 mark). Classic mistake (crossed): "n is too small, so ΔHc is more negative".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Burner (site data) | 152.34 → 151.62 g; 0.72 g ethanol; 200.0 g water; 19.5 → 31.2 °C; q = 9.78 kJ (v02) | opening, 1, 3 to 5 |
| Molar mass | C₂H₅OH 46.07 g mol⁻¹ (46.068) | 4 |
| Moles | 0.72 ÷ 46.07 = 0.01563 mol | 4, 5, 7 |
| Molar enthalpy | −9.78 ÷ 0.01563 = −626 kJ mol⁻¹ | 5, 6, final frame |
| Data value | ethanol −1367 kJ mol⁻¹ | 2, 6, final frame |
| Percentage error | 741 ÷ 1367 × 100 = 54% | 6 |
| Energy split | 21.4 kJ if complete; water 9.78; can about 0.3 (estimate); rest about 11.3 kJ | 7 |
| Balance digit | ±0.01 g in 0.72 g, about 1% | 11 |
| Evaporation readout | 151.62 → 151.58 g (illustrative tick) | 10 |
| A1 | 0.60 g methanol, M 32.04; 200.0 g; 19.4 → 29.8 °C; ΔT 10.4; 8694 J = 8.69 kJ; 0.01873 mol; −464 kJ mol⁻¹; data −726; 36% | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 2 × 12.01 + 6 × 1.008 + 16.00 = 46.068; 152.34 − 151.62 = 0.72; 0.72 ÷ 46.07 = 0.015628 → 0.01563 mol.
- 200.0 × 4.18 × 11.7 = 9781.2 J; −9.7812 ÷ 0.015628 = −625.9 → −626 kJ mol⁻¹.
- (1367 − 626) ÷ 1367 × 100 = 54.2%.
- 0.015628 × 1367 = 21.36 kJ → 21.4; 9.78 ÷ 21.36 = 45.8%; can 60 × 0.385 × 11.7 = 270 J; 21.36 − 9.78 − 0.27 = 11.3 kJ.
- 0.01 ÷ 0.72 × 100 = 1.4% ("about 1%").
- 12.01 + 4 × 1.008 + 16.00 = 32.042; 29.8 − 19.4 = 10.4; 200.0 × 4.18 × 10.4 = 8694.4 J; 0.60 ÷ 32.04 = 0.018727 → 0.01873; −8.6944 ÷ 0.018727 = −464.3 → −464; (726 − 464.3) ÷ 726 × 100 = 36.0%.
- Site checks: see Decisions, site notes.

## Memory aid check

- **"Name it, trace it to q or n, then move ΔH."** Meaning: for any error, name the physical cause, decide whether it changes q (heat measured) or n (moles of fuel), then state the direction of ΔHc. Assumptions checked: ΔHc = −q ÷ n holds for every combustion calorimetry calculation in the course; every listed cause acts through q or n (heat loss and the can through q; incomplete combustion through the heat released per mole, which shows up as a smaller q for the measured n; evaporation through n). It also works for errors that make the result too large (none here), so it does not teach "always too small". It blocks the site's "human error" trap.
- **Considered, not used:** "Leaks make it weak" (catchy but blurs n-errors with heat leaks).

## Narration length estimate

Revision 1 count (6 November; build parser rules): **5,999 characters**, 19 scenes (per scene: 382, 406, 398, 293, 368, 321, 307, 354, 355, 276, 333, 308, 197, 389, 393, 198, 272, 374, 75). At 13.3 characters per second the speech is about 451 s; add about 10 s of settling (the method steps in 3, the energy-split bar in 7, the cross-fades in 9 and 12), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold: **about 542 s**.

## Scene list and build ids

Lesson key `c-y11-m4-v03` (route chem-y11-m4-v03; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v03`.

In order (19 scene headings, all `### N.`): hook-prediction, enthalpy-of-combustion, method, moles-of-fuel, molar-enthalpy, compare-data, energy-split, heat-to-air, incomplete-combustion, evaporation, systematic-random, better-method, answer-frame, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v02's final frame into scene 1 by camera continue; 1 to 2 camera continue (the placeholder fills); 2 to 3 clear change to the bench; 3 to 4 camera continue; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 clear change to the energy-split bar; 7 to 8 camera push into the rig; 8 to 9 in-place cross-fade to the sooty rig; 9 to 10 camera continue (balance returns); 10 to 11 camera continue; 11 to 12 in-place cross-fade to the shielded rig; 12 to 13 clear change; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v03-learning-review.md`, `checks/c-y11-m4-v03-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m7-spirit-burner-calorimeter-v1.png` (2000 × 2000, RGBA; copper can with thermometer over a lit spirit burner, cap beside it): opening, scenes 1, 3, 5, 7, 8.
- `public/assets/chemistry/m7-spirit-burner-on-balance-v1.png` (2000 × 2000; spirit burner with its glass cap on a digital balance): opening, scenes 3, 4, 10.
- `public/assets/chemistry/m7-spirit-burner-calorimeter-sooty-v1.png` (2000 × 2000; the same rig with a yellow flame and black soot on the can's base): scene 9. It lines up with the plain rig for an in-place cross-fade (same stand, can and burner positions on the contact sheet; Codex to confirm the registration).
- `public/assets/chemistry/m7-spirit-burner-calorimeter-shield-v1.png` (2000 × 2000; the same rig with a lidded can, stirrer loop and a folded draught shield): scenes 12, 18, final frame. Registration with the plain rig to be confirmed by Codex; if it is offset, use a clean cut instead of a cross-fade.
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (2000 × 2000; lidded foam cup with probe): scene 18, final frame.
- `public/assets/chemistry/m5x-cold-pack-v1.png` and `m5x-hot-pack-v1.png` (2000 × 2000 each; blue and orange instant packs): scene 18, final frame.
- **Inspected, not used:** `m7-camping-gas-burner-v1.png` (a different fuel and burner); `c8-thermometer-hot-v1.png` (the can's thermometer is enough).

Need: no new plates.

Coded: readouts, stirrer loop, cap, vapour wisps, calculation rows, comparison bars, bomb calorimeter cutaway, energy-split bar, leak arrows and shimmer, flame inset with C, CO and CO₂, error target, answer frame, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson02.sa.html` (procedure order, safety paragraph, worked examples 1 and 2, the five sources of error and their directions, traps 1 to 3, drill 5) and log the three site notes.
3. Confirm the ethanol (−1367) and methanol (−726) enthalpies of combustion against a standard source.
4. Confirm the safety chip against current NSW school guidance for spirit burners (author note f).
5. Confirm both attempt cards are original, carry every needed fact (A1 gives M and c), and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested (cap, stirrer and spark move by code); no em dash (U+2014); Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m4-v02's final frame and that the sooty and shield plates register with the plain rig.

## YouTube metadata (draft)

Title: Why Spirit Burner Calorimetry Gives Too Small an Enthalpy | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

A spirit burner heated 200 g of water by 11.7 °C using 0.72 g of ethanol. Turn that into a molar enthalpy of combustion (−626 kJ/mol), compare it with the data value (−1367 kJ/mol), and find out where the missing energy went: heat lost to the air, incomplete combustion and fuel evaporating from the wick. Learn why these are systematic errors, how to improve the method, and how to write an error explanation that earns marks. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to measure temperature changes in examples of endothermic and exothermic reactions, including: combustion"
"investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences"

Previous: How can a calorimeter turn a temperature rise into heat transfer? Next: Why can dissolving an ionic substance warm or cool water?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Energy split (science check).** Scene 7 splits 21.4 kJ into water 9.78, can about 0.3 (estimated from a 60 g can) and about 11.3 "not in the water". The bar deliberately does not divide the 11.3 kJ between heat loss and incomplete combustion. If the science check prefers no can estimate, drop that segment and its sentence (about 60 characters).
- **2. Sooty and shield plates (Codex).** Both are used as in-place cross-fades with the plain rig. If either does not register, use a clean cut; narration unchanged.
- **3. Bomb calorimeter (learning review).** Scene 2 says data values come from "a sealed container full of oxygen". If the learning review finds it a distraction, cut the last sentence of scene 2 (about 110 characters) and keep the tag.
- **4. Length (learning review).** Reserve cut: scene 12's second sentence (about 110 characters).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the energy-split bar make the causes feel like parts of one gap; is "smaller in size" and "less negative" clear before attempt 2), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
