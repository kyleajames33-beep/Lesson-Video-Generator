# Year 11 Chemistry M2 V15: Gravimetric analysis. How does precipitate mass reveal an ion concentration? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,571 characters, 15 scenes, about 504 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 49, between `chem-y11-m2-v14` and `chem-y11-m2-v16`. Templates: `chem-y11-m2-v12.md` to `v14.md` (same designer; bench and error-direction conventions), `chem-y11-m2-v07.md` (calculation layout), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates); the Year 12 gravimetric designs `chem-m8-c02.md` and `chem-m8-p02.md` (their painted gravimetric set is reused). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v15` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Follow precipitation, complete recovery, drying and the amount ratio to mass/concentration; do not bring this mole calculation into the opening separation video."; next handoff: "Why do equal gas volumes contain equal amounts at the same conditions?"; practical: "Gravimetric concentration analysis"). Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson09.sa.html` (SHA256 `46088e0beb03cbe3709924f8151009053c2b9a79604ce6cc636182220de6629f`, recomputed, matches the route), sections `l09-what-title`, `l09-chain-title`, `l09-worked-title`; and `module1/lesson05.sa.html` (SHA256 `c8b8b3adf2bc76e424505bb6e88bafecc0cd7fa9784e57dd9400175521a4222d`, recomputed, matches), sections `l05-gravimetric-analysis-title`, `l05-worked-examples-title`. Used: the definition ("converting it into a pure, insoluble precipitate, then measuring the mass"); why insoluble (otherwise "your result will be too low"); why excess reagent ("drives the reaction to completion"); the five-step procedure with reasons (filter through pre-weighed paper and wash; dry in an oven, "cool in desiccator before weighing ... prevents reabsorption of atmospheric moisture"; weigh and subtract the paper); Module 1's "dry to constant mass (weigh, dry more, reweigh, repeat until mass is stable)" and its error list (incomplete precipitation, incomplete drying, loss in transfer); the calculation chain (precipitate mass → n(precipitate) with the precipitate's molar mass → ratio → n(analyte) → mass or concentration); worked example 2's data (500 mL of bore water, 1.435 g AgCl, 710 mg L⁻¹); traps 1 to 3 (precipitate's molar mass, never skip the ratio, subtract the paper); the silver nitrate safety controls. Not used: the sulfate examples (BaSO₄; barium salts are toxic and the site recommends teacher demonstration or secondary data; Year 12 `chem-m8-c02.md` uses sulfate), ignition in a muffle furnace, gravimetric versus volumetric table (scene 14 makes a lighter comparison), the NaCl and KCl mixture (Q3).

Owner rules applied: as `chem-y11-m2-v12.md` (one learner question; no people, hands or faces: apparatus moves by code; apparatus as painted plates; particles, cloudiness, readouts and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophe in "Avogadro's" shown corrected, root decision m1-9):

- `C2-IQ3-01`: "conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
- `C2-IQ2-03`: "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
  - "moles of elements and compounds n = m/MM  (n = chemical amount in moles, m = mass in grams, MM = molar mass in gmol-1)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v14's final frame (bore water "Cl⁻: ? mg L⁻¹"; silver nitrate dropping into a beaker with a white cloud; "Ag⁺ + Cl⁻ → AgCl(s)"; the balance "?"). Teaches: dissolved ions can't be weighed, but a precipitate can; precipitate and gravimetric analysis defined; the 1 : 1 link (one silver ion and one chloride ion per unit of AgCl), with the other ions staying dissolved; why excess silver nitrate, and the one-more-drop test; filtering through pre-weighed paper, complete transfer, washing (why); drying in an oven, cooling in a desiccator (why), drying to constant mass; subtracting the paper; precipitate mass → moles (precipitate's molar mass) → ratio → moles of ion → mol L⁻¹ and mg L⁻¹ (m2-v11's units); the two-way error pattern (losses → low; extra mass → high); a non-1 : 1 ratio in attempt 1. Not taught: solubility rules and precipitation reactions in general (Module 3), coprecipitation and digestion, light sensitivity of AgCl (author note d), sulfate analysis (Year 12 m8-c02).

## Decisions

- **Learner question (route wording kept).** "How does precipitate mass reveal an ion concentration?" The answer, in order: lock the ions into a solid you can weigh (1, 2); catch all of them (3, 4); collect and clean the solid (5); weigh only the dry solid (6); mass to moles of precipitate, ratio, moles of ion, then concentration (7, 8); losses push low, extra mass pushes high (9).
- **Opening frame (equals `chem-y11-m2-v14.md`'s final frame, same designer).** Clear sample bottle (`y11c-sample-bottle-clear-v1.png`) "bore water, 500.0 mL" with "Cl⁻: ? mg L⁻¹"; the silver nitrate dropper bottle and the beaker with a white cloud; "Ag⁺ + Cl⁻ → AgCl(s)"; the balance with "?"; the bridge strip small at the top; the "Next" chip, which fades.
- **The case (site worked example 2, data-sheet values).** 500.0 mL of bore water; excess AgNO₃; pre-weighed paper 0.9125 g; paper and dry AgCl 2.3521, 2.3483, 2.3475, 2.3475 g (illustrative readings for constant mass); m(AgCl) = 1.4350 g (the site's 1.435 g); MM(AgCl) = 107.9 + 35.45 = 143.35 g mol⁻¹ (site 143.32); n = 1.001 × 10⁻² mol; c(Cl⁻) = 0.02002 mol L⁻¹; m(Cl⁻) = 0.3549 g; 709.7 → about 710 mg L⁻¹ (site 709.8 → 710; unchanged to three figures). The site's "500 mL" becomes "500.0 mL" (a volumetric measure, four figures to match the balance).
- **Why chloride, not sulfate.** Silver nitrate at small scale is a school practical with the site's controls; barium chloride is toxic (site: teacher demonstration or secondary data). The site's Module 1 lesson also uses chloride. Year 12 m8-c02 keeps sulfate, so the two years show two cases.
- **Prediction (3 s, scene 3).** "If some chloride is still dissolved when you filter, is the answer too high or too low?" Answer: too low; so add excess, and test with one more drop.
- **Ionic equation.** "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" is read in words ("one silver ion and one chloride ion make each unit of silver chloride"); the dissolved sodium and nitrate ions are shown as dots that stay in the liquid (spectator ions, not named; Module 3 owns precipitation reactions). Bore water's cations are shown as sodium only (a simplification; author note c).
- **The molar mass trap (site trap 1).** The balance weighs silver chloride, so divide by MM(AgCl), not MM(Cl). A crossed ghost row "1.4350 ÷ 35.45" in scene 7.
- **Memory aid (see "Memory aid check"):** "Every ion caught, nothing else weighed." It pairs with m2-v12's "Every grain in, not a drop over." The calculation reuses m2-v14's bridge strip, relabelled "mass → moles → ratio → unknown".
- **Attempts (original wording, HSC style).** A1 (2 : 1 ratio): 25.00 mL of magnesium chloride solution with excess silver nitrate gives 0.7168 g of dry AgCl: n(AgCl) = 5.000 × 10⁻³ mol = n(Cl⁻); MgCl₂ : Cl⁻ = 1 : 2; n(MgCl₂) = 2.500 × 10⁻³ mol; c = 0.1000 mol L⁻¹; crossed "0.2000 mol L⁻¹ (ratio skipped)". (The site's 0.7166 g with its 143.32 gives 5.000 × 10⁻³; 0.7168 g does so with the data-sheet 143.35.) A2 (error direction, a new case): precipitate not washed: calculated concentration too high; crossed "no effect, because those salts aren't silver chloride".
- **Mistake scene:** none separate. "Weigh the solution" (site Module 1 misconception; 1); "just enough reagent" (3, 4); "unwashed is fine" (5; A2); "one weighing is enough" (6); "forget the paper" (7); "divide by chloride's molar mass" (7); "skip the ratio" (A1 crossed).
- **Handoff (route next: `chem-y11-m2-v16`, "Why do equal gas volumes contain equal amounts at the same conditions?").** Scene 14: moles from a mass, from a solution, and now via a precipitate; gases are harder (light, fill any container); three 1.00 L jars of H₂, O₂ and CO₂ at 25 °C and 100 kPa with very different masses. Final frame: see "Opening frame and final frame".
- **Safety (science check; site controls).** Silver nitrate is corrosive and stains skin: gloves, glasses, small volumes, all silver waste into a labelled recovery container. Spoken once (scene 4), with a strip.
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 9 drill 2: "A 100 mL seawater sample produces 0.5735 g of AgCl ... 0.0400 mol L⁻¹". Seawater chloride is about 0.55 mol L⁻¹ (about 19 g L⁻¹), so 100 mL would give about 8 g of AgCl. Suggest "bore water" or "estuary water", or keep seawater and change the mass (for example a 5.00 mL sample giving 0.39 g).
  2. Lesson 9 Q4 model answer: "The CO₂ explanation is plausible [1]. In acidic or neutral solution, CO₂ would not react significantly with Ba²⁺ ..." The answer awards a mark for "plausible" and then argues it is not plausible under the usual conditions. Suggest "The CO₂ explanation is unlikely unless the solution became basic, because ..." and award the mark for the evaluation.
  3. Module 1 lesson 5 procedure: "Filter precipitate (use ashless filter paper to avoid adding mass)". Ashless paper matters only when the paper is burnt off in ignition; with pre-weighed paper dried in an oven, the paper's mass is subtracted. Suggest "pre-weighed filter paper (or ashless paper if the precipitate will be ignited)".
  4. Lesson 9 `l09-what-title`, "Don't overdo it ... through the complex ion effect": true for AgCl in very high chloride, but in a chloride analysis the excess is silver nitrate, which does not form a soluble complex this way at school concentrations. Suggest "add a moderate excess; very large excesses can contaminate the precipitate".
  - Checked and correct: lesson 9 worked examples 1 (7.99 × 10⁻³ mol L⁻¹) and 2 (710 mg L⁻¹); drills 1, 3, 4, 5 (9.99 × 10⁻⁴ mol; 0.4368 g; 1.40 g L⁻¹; 0.0200 mol L⁻¹); Q1 (0.4332 g; 1.857 × 10⁻³ mol; 7.43 × 10⁻³ mol L⁻¹); Q3 (74.0% NaCl); Module 1 lesson 5 worked example (0.192 g sulfate).
- **Cause chain taught, in order:** (1) dissolved ions can't be weighed, but a solid can (1); (2) each unit of the solid holds one chloride, so its moles count the chloride (2, 7, 8); (3) any chloride left dissolved is never weighed, so excess reagent is used (3, 4); (4) any solid lost is never weighed, so transfer every speck (5); (5) dissolved salts left in the solid dry onto it and add mass, so wash (5); (6) water adds mass, so dry, cool without water, and repeat to constant mass (6); (7) the balance weighs paper plus solid, so subtract the paper (7); (8) the ratio converts precipitate moles to ion or compound moles (8, A1).
- **Entry knowledge:** m1-v05 (filtration and separating a solid); m2-v03 (n = m ÷ MM); m2-v06 (mole ratios); m2-v10 and m2-v11 (c = n ÷ V; mg L⁻¹); m2-v14 (the bridge strip, error directions).
- **Learner-visible vocabulary (plain meaning at first use):** bore water (water pumped from underground, 1); precipitate (a solid that forms when two solutions react and doesn't dissolve, 2); gravimetric analysis (finding an amount by turning it into a solid and weighing it, 2); excess (more than enough, 4); desiccator (a sealed container with a drying agent, 6); constant mass (two weighings in a row that agree, 6).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **ion lock** (scenes 1, 2: violet Cl⁻ dots in the water; silver dots arrive with the drops; each Cl⁻ pairs with one Ag⁺ and the pair turns into a white solid fleck that sinks; grey Na⁺ and NO₃⁻ dots keep moving in the liquid); **leftover lens** (scenes 3, 4: a few unpaired Cl⁻ dots left in the clear liquid; with excess, none; the one-more-drop test shows no new cloud); **wash film** (scene 5: grey salt dots in the liquid soaked into the solid; wash drops carry them through the paper); **weighing loop** (scene 6: oven → desiccator → balance → back, with the readout list "2.3521, 2.3483, 2.3475, 2.3475 g" and a tick on the two that agree); **bridge strip** (scenes 7, 8, from m2-v14, relabelled "mass → moles → ratio → unknown"); **two-way error board** (scene 9: "too low" and "too high" columns, as Year 12 m8-c02); calculation layout; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v12 to v14):** moles teal; masses amber; volumes slate; concentrations violet; Cl⁻ violet dots, Ag⁺ silver-grey dots, spectator ions pale grey; "too low" rose down-arrow, "too high" amber up-arrow; crossed items red strike; illustrative readings tagged grey.
- **Board layout (constant):** heading top left; the bench (sample, beaker, filter, oven, desiccator, balance) along the left two thirds in method order; calculation rows at the right; the bridge strip at the top from scene 7.

Author notes (not learner copy):
(a) Case: 2.3475 − 0.9125 = 1.4350 g; MM(AgCl) = 107.9 + 35.45 = 143.35; n = 1.4350 ÷ 143.35 = 0.0100105 → 1.001 × 10⁻² mol; c = 0.0100105 ÷ 0.5000 = 0.020021 → 0.02002 mol L⁻¹; m(Cl⁻) = 0.0100105 × 35.45 = 0.35487 → 0.3549 g; 0.35487 ÷ 0.5000 = 0.70974 g L⁻¹ = 709.7 mg L⁻¹ → about 710.
(b) Excess: 1.001 × 10⁻² mol of AgNO₃ is 1.70 g (MM 169.88), for example about 120 mL of 0.1 mol L⁻¹ AgNO₃; at school scale the sample would be smaller (for example 50.00 mL giving about 0.14 g of AgCl). The site's 500 mL is kept; the science check may prefer a 50.00 mL sample (then every value scales by 1/10 except the concentrations).
(c) Bore water's main cations vary (Na⁺, Mg²⁺, Ca²⁺); only chloride matters for this method. The Australian Drinking Water Guidelines give 250 mg L⁻¹ chloride as an aesthetic (taste) value; 710 mg L⁻¹ is about three times that (not spoken; science check to confirm before any use).
(d) Silver chloride slowly darkens in light (photodecomposition releases chlorine and leaves silver), which lowers the mass a little; the analysis is done away from bright light. Not taught; a possible learning-review addition as one grey tag.
(e) Drying temperature for AgCl on paper: about 110 °C; readings fall as water leaves, then stop changing.
(f) A1: 0.7168 ÷ 143.35 = 5.0003 × 10⁻³ → 5.000 × 10⁻³ mol; ÷ 2 = 2.500 × 10⁻³ mol; ÷ 0.02500 L = 0.1000 mol L⁻¹. Slip: 5.000 × 10⁻³ ÷ 0.02500 = 0.2000.
(g) A2: unwashed precipitate keeps dissolved AgNO₃ (excess) and NaNO₃ in the retained liquid; on drying they crystallise on the solid and paper, so the mass is high and the calculated chloride is high.
(h) Pronunciations: "A g plus" is not spoken; "silver ion", "chloride ion"; "desiccator" (DESS-i-kay-ter); "gravimetric" (grav-i-MET-rik).

Main question: *How does precipitate mass reveal an ion concentration?*
Entry knowledge: m1-v05; m2-v03, m2-v06, m2-v10, m2-v11, m2-v14.
Stops after: precipitation with excess, complete recovery, washing, drying to constant mass, the chain to mol L⁻¹ and mg L⁻¹, a 2 : 1 case, and the two-way error pattern. No solubility rules, no sulfate analysis.
Handoff: chem-y11-m2-v16, equal gas volumes.

## Opening frame and final frame

- **Opening frame:** m2-v14's final frame exactly (Decisions).
- **Final frame (m2-v16 opens on it):** at the top, three small method chips in a row: "solid: n = m ÷ MM", "solution: n = c × V", "precipitate: weigh it, then n = m ÷ MM" (all ticked), and a fourth "gas: ?" (amber); below, three gas jars (`y11c-gas-jar-v1.png`, three copies, same scale, each with a coded colourless fill) labelled "H₂", "O₂", "CO₂", each tagged "1.00 L, 25 °C, 100 kPa", with mass chips "0.0813 g", "1.29 g", "1.78 g"; an amber chip across them "same number of particles?"; the chip "Next: Why do equal gas volumes contain equal amounts at the same conditions?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: ions you can't weigh
> Here's some bore water, pumped from underground on a farm. Too much chloride makes water taste salty, and it can harm crops and stock. But chloride ions are invisible in solution, and you can't weigh them while they're dissolved. Add silver nitrate, though, and a white solid **forms**. Every chloride ion that meets a silver ion gets locked into that solid. So if we collect the solid and weigh it, we can count the **chloride**.

Visual: opens on m2-v14's final frame; the "Next" chip fades. Gloss chip "bore water: water pumped from underground". On "invisible" the ion lock lens opens on the sample: violet Cl⁻ dots and grey Na⁺ dots moving; a crossed ghost "weigh the water?" (tag "the balance can't pick out the chloride"). On "forms" silver dots arrive with the drops; each Cl⁻ pairs with one Ag⁺, turns white and sinks; the beaker's coded cloud thickens. On "chloride" the balance "?" readout pulses and a dashed arrow runs from the white solid to it.

### 2. a precipitate, one for one
> A solid that forms when two solutions react, and doesn't dissolve, is called a precipitate. This one is silver chloride, and it barely dissolves at all. That matters, because any that dissolved would slip through the filter and never be weighed. One silver ion and one chloride ion make each unit of it, a one to one ratio. The other ions, like sodium and nitrate, don't join in. They stay dissolved. Finding an amount by turning it into a solid and weighing it is called gravimetric **analysis**.

Visual: gloss chip "precipitate: a solid that forms when two solutions react, and doesn't dissolve". The strip "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" gets amber outlines on the implied 1s; tag "1 Ag⁺ : 1 Cl⁻ : 1 AgCl". In the lens, grey Na⁺ and NO₃⁻ dots keep moving freely above the white solid (tag "stay dissolved"). On "analysis" the heading writes: "Gravimetric analysis"; gloss chip "gravimetric analysis: find an amount by turning it into a solid and weighing it".

### 3. prediction (countdown, 3 seconds)
> Quick prediction. Suppose some chloride ions are still dissolved when you filter the solid off. Think about where they end up. Will your answer come out too high, or too **low**?

Visual: the leftover lens: the clear liquid above the settled solid (`m8-baso4-beaker-settled-v1.png`, read as AgCl; tag "AgCl(s)") with three violet Cl⁻ dots still moving (rose tag "still dissolved"). Chips "too high", "too low". On "low" the 3 s `Countdown` ring runs.

### 4. excess, and the one-more-drop test
> Too low. Chloride left in the solution never reaches the balance. So you add silver nitrate in excess, which means more than enough, to pull out every chloride ion. To check, let the solid settle, then add one more drop to the clear liquid on top. If no new cloudiness appears, the chloride is all **out**. Silver nitrate is corrosive and stains skin, so wear gloves and glasses, and collect all the silver waste for recovery.

Visual: "too low" ticks; arrow chain "Cl⁻ left in solution → not weighed → answer too low" (rose). Gloss chip "excess: more than enough". More drops fall; the three leftover dots pair and sink; the lens shows only grey dots and a few spare silver-grey Ag⁺ dots (tag "spare Ag⁺: that's fine"). One drop falls into the clear top layer; on "out" nothing clouds (tick, tag "test: no new cloudiness"). Safety strip: "AgNO₃: corrosive, stains skin; gloves and glasses; silver waste to recovery" with `m5x-safety-glasses-v1.png` and `m5x-waste-bottle-v1.png` (coded label "silver waste") small.

### 5. filter, rinse, wash
> Next, filter it through a filter paper you've already weighed. Rinse every speck of solid out of the beaker with distilled water, because any left behind makes the answer too low. Then wash the solid on the paper with more distilled water. The liquid soaked into it still holds dissolved silver nitrate and sodium nitrate. Leave them there, and they'd dry onto the solid, add mass, and make the answer too **high**.

Visual: the filter funnel over a flask (`m8-filter-funnel-white-ppt-v1.png`) with a coded readout tag on the paper "pre-weighed: 0.9125 g". A coded stream from the beaker; the wash bottle (`m6-wash-bottle-v1.png`) rinses the beaker (coded white specks carried across; tag "every speck"; a rose card "solid left behind → too low" files to a "too low" tray). On "wash the solid" the wash film lens: grey salt dots in the liquid around the white solid; wash drops carry them down through the paper. On "high" an amber card "not washed → salts dry on → too high" files to a "too high" tray.

### 6. dry it, then dry it again
> Now dry it. The paper and solid go into an oven, then cool in a desiccator, a sealed container with a drying agent, so they can't pick up water from the air as they cool. Then weigh. But one weighing doesn't prove it's dry. So you heat, cool and weigh again, until two readings in a row **agree**. That's called drying to constant mass. Here the readings fall, then settle at two point three four seven five **grams**.

Visual: the weighing loop: the paper (folded on a watch glass) goes into `m8-drying-oven-v1.png`, then `m8-desiccator-v1.png` (gloss chip "desiccator: a sealed container with a drying agent"), then onto `m8-balance-watch-glass-v1.png`. The readout list writes as the loop repeats: "2.3521 g", "2.3483 g", "2.3475 g"; on "agree" "2.3475 g" again, and the last two tick together (gloss chip "constant mass: two weighings in a row that agree"). On "grams" a small falling-then-flat sparkline of the four readings; an amber card "still damp → too high" files to "too high".

### 7. mass to moles, with the right molar mass
> Now the calculation. The paper alone weighed zero point nine one two five grams, so the silver chloride is one point four three five zero grams. Turn that into moles using the molar mass of silver chloride, because that's what's on the balance, not chloride alone. One hundred and seven point nine plus thirty-five point four five is one hundred and forty-three point three five. So that's one point zero zero one times ten to the minus two moles of silver **chloride**.

Visual: calculation layout; the bridge strip writes across the top: "mass → moles → ratio → unknown". Task strip: "Find c(Cl⁻) in the bore water". Givens: "V(sample) = 500.0 mL = 0.5000 L"; "paper 0.9125 g; paper + AgCl 2.3475 g"; "Ag 107.9, Cl 35.45 g mol⁻¹". Row "m(AgCl) = 2.3475 − 0.9125 = 1.4350 g" (amber; a chip "forgot the paper → too high" files to "too high"). On "not chloride alone" a ghost row "1.4350 ÷ 35.45" is crossed (tag "the balance weighed AgCl"). Row "MM(AgCl) = 107.9 + 35.45 = 143.35 g mol⁻¹". On "chloride" row "n(AgCl) = 1.4350 ÷ 143.35 = 1.001 × 10⁻² mol" (teal; "mass → moles" lit).

### 8. ratio, then concentration two ways
> One to one, so the sample held one point zero zero one times ten to the minus two moles of chloride ions. That was in five hundred millilitres, so the concentration is zero point zero two zero zero two moles per **litre**. As a mass, that chloride is zero point three five four nine grams, and dividing by half a litre gives about seven hundred and ten milligrams per **litre**. Same pattern as the titration: mass to moles, ratio, **unknown**.

Visual: row "Ag⁺ : Cl⁻ : AgCl = 1 : 1 : 1 → n(Cl⁻) = 1.001 × 10⁻² mol" ("ratio" lit). On "litre" (first) row "c(Cl⁻) = 1.001 × 10⁻² ÷ 0.5000 = 0.02002 mol L⁻¹" (violet). Row "m(Cl⁻) = 1.001 × 10⁻² × 35.45 = 0.3549 g = 354.9 mg". On "litre" (second) row "c = 354.9 mg ÷ 0.5000 L = 710 mg L⁻¹" (violet, bright); the sample bottle's chip updates "Cl⁻: 710 mg L⁻¹". On "unknown" the bridge strip lights fully, and m2-v14's "Known to moles, ratio, unknown" ghosts in small beside it.

### 9. every ion caught, nothing else weighed
> So every step protects one of two things. First, catch every chloride ion: excess silver nitrate, every speck transferred, careful filtering. Anything lost makes the answer too low. Second, weigh nothing else: wash out the dissolved salts, dry to constant mass, and subtract the paper. Anything extra makes it too high. Every ion caught, nothing else **weighed**.

Visual: the two-way error board fills from the trays: "too low" (rose): "not enough AgNO₃", "solid left in beaker", and on "careful filtering" a card with a thumbnail of `m8-filter-funnel-cloudy-filtrate-v1.png` "solid through the paper"; "too high" (amber): "not washed", "still damp", "paper not subtracted". On "weighed" the memory line writes large under the board in the explainer's handwriting style: "Every ion caught, nothing else weighed."

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Excess silver nitrate is added to twenty-five point zero zero millilitres of magnesium chloride solution. The dry silver chloride weighs zero point seven one six eight grams. Using silver one hundred and seven point nine and chlorine thirty-five point four five, calculate the concentration of the magnesium chloride solution. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Excess silver nitrate solution was added to a 25.00 mL sample of magnesium chloride solution. The precipitate of silver chloride was filtered, washed and dried to constant mass: 0.7168 g. Calculate the concentration of the magnesium chloride solution in mol L⁻¹. (Ag = 107.9, Cl = 35.45) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the bridge strip dims).

### 11. feedback 1 (brief)
> Zero point seven one six eight over one hundred and forty-three point three five is five point zero zero zero times ten to the minus three moles of silver chloride, so the same moles of chloride ions. But each magnesium chloride gives two chloride ions, so halve it: two point five zero zero times ten to the minus three moles. Divided by zero point zero two five zero zero litres, that's zero point one zero zero zero moles per litre. Skip the ratio, and you'd get zero point two zero zero zero, **double**.

Visual: card shrinks to the top. Rows: "n(AgCl) = 0.7168 ÷ 143.35 = 5.000 × 10⁻³ mol = n(Cl⁻)"; "MgCl₂ : Cl⁻ = 1 : 2 → n(MgCl₂) = 2.500 × 10⁻³ mol" (a small tile "MgCl₂ → Mg²⁺ + 2Cl⁻"); "c = 2.500 × 10⁻³ ÷ 0.02500 = 0.1000 mol L⁻¹" (violet). On "double" a chip "0.2000 mol L⁻¹ (ratio skipped)" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A student filtered the silver chloride but didn't wash it before drying and weighing. Explain the effect on the calculated chloride concentration. Pause here to answer.

Visual: `QuestionCard`: "In a gravimetric analysis of chloride using excess silver nitrate, a student filtered the precipitate but did not wash it with distilled water before drying it to constant mass and weighing it. Explain the effect on the calculated chloride concentration. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." The error board stays hidden.

### 13. feedback 2 (brief)
> Too high. Without washing, the liquid soaked into the solid still holds dissolved silver nitrate and sodium nitrate. When it dries, those salts stay behind, so the mass is more than the silver chloride alone. More mass means more calculated moles, and a higher concentration. No effect is wrong, because the balance can't tell which solid is **which**.

Visual: card shrinks. The wash film lens returns, unwashed: grey dots crystallise onto the white solid as it dries; the readout bar grows; arrow chain "extra salts → mass ↑ → n ↑ → c ↑" (amber). On "which" a chip "no effect: those salts aren't AgCl" fades in and is crossed (tag "the balance weighs everything on the paper"). Hold about 1 second.

### 14. conclusion and handoff
> So a precipitate turns dissolved ions into a mass, and the formula of the solid links that mass back to the ions. We can now get moles from a mass, from a solution, and through a precipitate. Gases are harder. They're light, and they spread to fill any container. Here are three jars of hydrogen, oxygen and carbon dioxide, each one litre at the same temperature and pressure, with very different masses. Do they hold the same number of particles? Why do equal gas volumes contain equal amounts at the same **conditions**?

Visual: the bridge strip and the AgCl row shrink to a chip "precipitate: weigh it, then n = m ÷ MM", which joins "solid: n = m ÷ MM" and "solution: n = c × V" (all ticked) at the top; on "Gases are harder" a fourth chip "gas: ?" (amber). On "three jars" the final frame builds: three `y11c-gas-jar-v1.png` copies slide in, "H₂", "O₂", "CO₂", each "1.00 L, 25 °C, 100 kPa"; on "very different masses" the mass chips "0.0813 g", "1.29 g", "1.78 g" write. On "same number of particles" the amber chip spans the jars. On "conditions" the chip "Next: Why do equal gas volumes contain equal amounts at the same conditions?" writes. Hold about 2 seconds. This is the final frame (m2-v16 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Gravimetric analysis: find an amount by turning it into a solid of known formula (a precipitate) and weighing it.
2. Add the precipitating reagent in excess; test: one more drop gives no new cloudiness.
3. Filter through pre-weighed paper, transfer every speck, wash with distilled water, dry in an oven, cool in a desiccator, repeat to constant mass, subtract the paper.
4. m(precipitate) ÷ MM(precipitate) → n; × ratio → n(ion or compound); ÷ V → c (or × MM ÷ V for mg L⁻¹).
5. Losses → result too low. Extra mass (unwashed, damp, paper included) → too high.

Memory aid (large, on the notes screen): *Every ion caught, nothing else weighed.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why a precipitate makes ions weighable (1, 2); why excess (3, 4); why rinse and wash (5); why a desiccator and constant mass (6); why the precipitate's molar mass (7); why the ratio (8, A1); why each error pushes its way (9, A2).
- **Misconceptions addressed:** weigh the solution (1); just enough reagent (3, 4); no need to wash (5, A2 crossed); one weighing is enough (6); forget the paper (7); chloride's molar mass (7); skip the ratio (A1 crossed).
- **One idea at a time:** the idea (1, 2), completeness (3, 4), collecting (5), drying (6), calculation in two stages (7, 8), the pattern (9).
- **Video makes it easier:** chloride dots pair with silver dots and drop out while spectator dots stay moving (1, 2); leftover dots vanish with excess, and the test drop stays clear (4); salt dots wash through the paper (5); the readouts fall and settle in a loop (6); error cards file into "too low" and "too high" as each step is taught (4 to 9).
- **Response opportunity:** one 3 s prediction (3); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 33 s and 24 s.
- **Avoided double teaching:** filtration recalled (m1-v05); n = m ÷ MM (m2-v03); mole ratios (m2-v06); mg L⁻¹ (m2-v11); the bridge pattern and error directions (m2-v14).
- **Syllabus coverage:** `C2-IQ3-01` "determine the concentrations of solutions ... different ways in which concentrations are measured" (1 to 9, mol L⁻¹ and mg L⁻¹); `C2-IQ2-03` "n = m/MM" and "chemical amounts" (7, 8, A1).
- **Out of scope by design:** solubility rules, sulfate analysis, ignition, coprecipitation.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: n(AgCl) = 0.7168 ÷ 143.35 = 5.000 × 10⁻³ mol = n(Cl⁻) (1 mark). MgCl₂ gives 2Cl⁻, so n(MgCl₂) = 2.500 × 10⁻³ mol (1 mark). c = 2.500 × 10⁻³ ÷ 0.02500 = 0.1000 mol L⁻¹ (1 mark). Classic mistake (crossed): 0.2000 mol L⁻¹ (ratio skipped).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: the unwashed solid keeps dissolved salts (silver nitrate, sodium nitrate) that dry onto it, so the measured mass is greater than the mass of AgCl (1 mark); the calculated moles and concentration of chloride are therefore too high (1 mark). Classic mistake (crossed): "no effect, because those salts aren't silver chloride".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sample | 500.0 mL = 0.5000 L bore water | opening, 7, 8 |
| Readings (illustrative) | paper 0.9125 g; 2.3521, 2.3483, 2.3475, 2.3475 g | 5, 6, 7 |
| AgCl | 1.4350 g; 107.9 + 35.45 = 143.35 g mol⁻¹; 1.001 × 10⁻² mol | 7 |
| Result | 1 : 1; 0.02002 mol L⁻¹; 0.3549 g = 354.9 mg; 710 mg L⁻¹ | 8 |
| A1 | 25.00 mL; 0.7168 g; 5.000 × 10⁻³ mol; 1 : 2; 2.500 × 10⁻³ mol; 0.1000 mol L⁻¹; slip 0.2000 | 10, 11 |
| Handoff | 1.00 L, 25 °C, 100 kPa; 0.0813 g H₂; 1.29 g O₂; 1.78 g CO₂ | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 2.3475 − 0.9125 = 1.4350; 107.9 + 35.45 = 143.35; 1.4350 ÷ 143.35 = 0.0100105.
- 0.0100105 ÷ 0.5000 = 0.020021; × 35.45 = 0.35487 g; 0.35487 ÷ 0.5000 = 0.70974 g L⁻¹ = 709.7 mg L⁻¹.
- 0.7168 ÷ 143.35 = 5.0003 × 10⁻³; ÷ 2 = 2.5002 × 10⁻³; ÷ 0.02500 = 0.10001; slip 0.20001.
- Handoff jars: 1.00 ÷ 24.79 = 0.04034 mol; × 2.016 = 0.0813 g; × 32.00 = 1.291 g; × 44.01 = 1.775 g (shown 1.29 and 1.78).

## Memory aid check

- **"Every ion caught, nothing else weighed."** Written for this video, matching m2-v12's "Every grain in, not a drop over." Meaning: completeness (excess reagent, every speck transferred, nothing through the filter) and purity of what is weighed (washed, dry, paper subtracted). Assumptions checked: the precipitate must have a fixed, known formula and be very insoluble (stated in scene 2 as "doesn't dissolve"); "nothing else" includes water, salts and the paper. It helps a new case: A2 (unwashed: something else weighed, so too high) and the Year 12 sulfate analysis (m8-c02).
- **Considered, not used:** "Precipitate, filter, wash, dry, weigh" (a step list without reasons or directions).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,571 characters**, 15 scenes. At 13.3 characters per second the speech is about 419 s; add about 8 s of settling (the ion lock in 1 and 2, the wash in 5, the weighing loop in 6), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 504 s**.

## Scene list and build ids

Lesson key `c-y11-m2-v15` (route chem-y11-m2-v15; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v15`.

In order (15 scene headings, all `### N.`): hook-ions, precipitate-ratio, prediction, excess-test, filter-wash, constant-mass, mass-to-moles, ratio-concentration, error-pattern, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m2-v14's final frame into scene 1 by camera continue; 1 to 2 to 3 to 4 camera continue (the lens stays on the beaker); 4 to 5 to 6 camera continue along the bench (each apparatus slides in as its step starts); 6 to 7 camera continue (bench shrinks left, rows at the right); 7 to 8 camera continue; 8 to 9 camera continue (the trays gather into the error board); attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v15-learning-review.md`, `checks/c-y11-m2-v15-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/y11c-sample-bottle-clear-v1.png`: requested in `chem-y11-m2-v14.md` (a crop of `m8-river-sampling-bottle-v1.png`); opening frame, scenes 1, 8. Fallback: `m6-beaker-v1.png` with a coded clear fill.
- `public/assets/chemistry/p03-dropper-bottle-v1.png` (2000 × 2000; coded label "silver nitrate solution"): opening, scenes 1, 4.
- `public/assets/chemistry/m6-beaker-v1.png` (2048 × 2048; coded cloud): opening, scene 1.
- `public/assets/chemistry/m8-baso4-beaker-settled-v1.png` (2048 × 2048; white solid settled under clear liquid): scenes 3, 4, read as AgCl (no label on the plate; coded tag "AgCl(s)").
- `public/assets/chemistry/m8-filter-funnel-white-ppt-v1.png` and `m8-filter-funnel-cloudy-filtrate-v1.png` (2000 × 2000, aligned pair): scenes 5, 9.
- `public/assets/chemistry/m6-wash-bottle-v1.png`: scene 5.
- `public/assets/chemistry/m8-drying-oven-v1.png`, `m8-desiccator-v1.png`, `m8-balance-watch-glass-v1.png` (2000 × 2000 each): scene 6 loop.
- `public/assets/chemistry/m5x-safety-glasses-v1.png`, `m5x-waste-bottle-v1.png` (amber bottle, coded label "silver waste"): scene 4 strip.
- `public/assets/chemistry/y11c-gas-jar-v1.png` (935 × 1682; three copies): scene 14, final frame.
- **Inspected, not used:** `m8-baso4-beaker-hotplate-v1.png` (digestion on a hotplate is a sulfate refinement); `c13-pbi2-tube-precipitate-v1.png` (yellow lead iodide in a test tube; wrong solid and scale); `p01-filter-funnel-flask-v1.png` (purple cabbage residue).
- AgCl versus BaSO₄ look: silver chloride is curdy rather than fine; at this plate scale the settled white solid reads acceptably. If the learning review objects, request a painted curdy AgCl version of the settled beaker (not essential).

Need (new plates, Codex): none beyond `y11c-sample-bottle-clear-v1.png` (requested in m2-v14).

Coded: ion dots and pairing, cloud, leftover lens, test drop, wash film and drops, readout list and sparkline, weighing loop path, error trays and board, bridge strip, rows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v15)

No new plates (the sample-bottle crop is in m2-v14's brief). Codex confirms that `m8-filter-funnel-white-ppt-v1.png` and `m8-filter-funnel-cloudy-filtrate-v1.png` overlay exactly (Year 12 m8-c02 used them as a pair), and that the three gas-jar copies sit at one scale on the dark board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `lesson09.sa.html` (`l09-what-title`, `l09-chain-title`, worked example 2's 1.435 g, 500 mL, 710 mg L⁻¹; traps 1 to 3) and Module 1 `lesson05.sa.html` (constant mass; error list).
3. Confirm the equation Ag⁺(aq) + Cl⁻(aq) → AgCl(s) and the MgCl₂ : Cl⁻ = 1 : 2 relationship.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophe).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v14's final frame, and send the final frame to the m2-v16 designer.

## YouTube metadata (draft)

Title: Gravimetric Analysis: Finding Chloride Concentration by Weighing a Precipitate | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

You can't weigh chloride ions while they're dissolved in bore water. Add silver nitrate, and every one of them is locked into solid silver chloride, which you can filter, wash, dry and weigh. Learn why the reagent goes in excess, why you wash, why you dry to constant mass, and how the precipitate's mass becomes moles, then a concentration in mol/L and mg/L. Every mistake pushes the answer one way: losses make it too low, extra mass makes it too high. Two exam-style questions at the end, including a 2 : 1 ratio.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Previous: How do solution mole ratios determine an unknown concentration? Next: Why do equal gas volumes contain equal amounts at the same conditions?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Sample size (science check, root).** The site's 500 mL sample needs about 1.7 g of silver nitrate; a 50.00 mL sample (0.1435 g AgCl) is more realistic at school scale (author note b). Keeping the site's numbers is the default (site is the source of truth); the science check decides.
- **2. Ionic equation at this point (learning review).** Precipitation reactions are Module 3; scene 2 reads the ionic equation in words and shows spectator ions without naming them. Confirm this is followable for a student who has not met net ionic equations.
- **3. Light sensitivity of AgCl (science check).** Not taught (author note d); add a grey tag "keep out of bright light" if the science check asks.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the error board feel earned as each card files in; is scene 8's two-unit result too much at once), then the science check and Codex error check.
- Checker output (5 November): narration 5,571 characters; per scene (1 to 15): 422, 493, 174, 422, 411, 410, 466, 432, 359, 359, 504, 178, 348, 518, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
