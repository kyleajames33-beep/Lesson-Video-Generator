# Year 11 Chemistry M3 V05: Acid-base and acid-carbonate reactions. How can we predict acid-base and acid-carbonate products? (design)

Status: Revision 2 (6 Nov 2026): brief 182 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,621 characters, 19 scenes, about 508 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifth Module 3 video of Year 11 Chemistry (2017 syllabus), playlist entry 59, between `chem-y11-m3-v04` and `chem-y11-m3-v06` (cultural hold; not designed). Templates: `phys-y11-fa1-v01.md` (structure), `bio-y11-fa1-v05.md` (plates); series conventions from `chem-y11-m3-v02.md` to `v04.md` (same designer: charge tiles, atom tallies, ion lens, swap-partner strips); the Year 12 design `chem-m6-c02.md` (acid reaction products and salt names) supplies the Module 6 bank's naming line, which this video shares. No starter pack exists; the pack work is done here. Route entry: `chem-y11-m3-v05` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare the two product patterns and test the gas where appropriate, with balanced equations. Stop before acid-base equilibrium."; next handoff: "How do particular Aboriginal and Torres Strait Islander food-processing practices remove toxins?"; practical: "Teacher-approved neutralisation and carbonate reactions"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module3/lesson05.sa.html` (SHA256 `841ad941bfdbd76871134c3e936ced7b63449aaca6727da9ec6660a1786d5976`, recomputed, matches the route), sections `l05-acid-base-neutralisation-reactions-title`, `l05-acid-carbonate-acid-hydrogen-carbonate-react-title` and `l05-worked-examples-title`, plus the hook, key terms, antacid card, misconceptions, drill and answers. Used: the Arrhenius definitions ("In NSW Year 11 Chemistry, use this definition"); "a metal oxide/carbonate that reacts with acid"; "Alkalis are soluble bases"; "The H⁺ from the acid combines with the OH⁻ from the base to form water; the remaining ions form the salt"; the salt definition (cation from the base, anion from the acid); the neutralisation table rows HCl + NaOH and HCl + MgO; the net ionic H⁺(aq) + OH⁻(aq) → H₂O(l); the H₂O₂ trap; the observation "an indicator ... changes colour as the acid is consumed (never smell the acid or the mixture)" and "warms slightly"; acid + carbonate → salt + water + CO₂ (SWC) and both examples (CaCO₃, NaHCO₃); the CO against CO₂ trap (with a corrected reason, site note 1); worked example 1 (H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O); the antacid comparison by active ingredient (Mg(OH)₂ against CaCO₃, CO₂ and belching); drill 1 (2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O, the CaNO₃ error); Q2 (excess HCl with K₂CO₃: 2HCl + K₂CO₃ → 2KCl + H₂O + CO₂). Not used: brand names and the patient scenario (site note 2), ΔH ≈ −57 kJ mol⁻¹ (Module 4), H₃O⁺ (Year 12), "neutralisation always produces pH 7" and the stomach pH discussion (route: stop before acid-base equilibrium; pH is Year 12), the antacid mole calculation.

Owner rules applied: as `chem-y11-m3-v02.md` (one learner question; no people, hands or faces; apparatus as painted plates; ions, lenses, tiles and equation lines coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 3; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C3-IQ1-03`: "conduct investigations to predict and identify the products of a range of reactions, for example:"
  - "synthesis"
  - "decomposition"
  - "combustion"
  - "precipitation"
  - "acid/base reactions"
  - "acid/carbonate reactions (ACSCH042, ACSCH080)"
- `C3-IQ1-05`: "construct balanced equations to represent chemical reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 41 and 42)

**Boundary:** opens on m3-v04's final frame (same designer). Teaches: an acid releases hydrogen ions in water (Year 11 definition); a base reacts with an acid and uses up its hydrogen ions (hydroxides, oxides, carbonates); an alkali is a soluble base giving hydroxide ions; neutralisation as H⁺ + OH⁻ → H₂O with the leftover ions forming a salt (salt defined); the phenolphthalein and warming observations; naming the salt (metal first, acid second) and fixing its formula by charges; balancing H₂SO₄ + 2KOH; metal oxides (O²⁻ takes two H⁺; MgO, no gas); carbonates (CO₃²⁻ takes two H⁺, giving water and carbon dioxide, which bubbles out); the limewater test, explained as a precipitation; hydrogen carbonates (one H⁺); the two product patterns compared; why the gas is CO₂, never CO; antacids by active ingredient. Recalls without re-teaching: spectator ions and net ionic equations (m3-v03), the limewater test (m3-v02), charges fix the formula (m3-v02), metal oxides from combustion (m3-v04). Not taught: pH and the pH scale beyond "the indicator changes", strong and weak acids, Brønsted-Lowry, titration (m2-v14 used one; Year 12 Module 6), acid + metal (m3-v07), enthalpy of neutralisation.

## Decisions

- **Learner question (route wording kept).** "How can we predict acid-base and acid-carbonate products?" The answer, in order: an acid brings hydrogen ions (2); a hydroxide's OH⁻ or an oxide's O²⁻ takes them to make water, leaving a salt (3, 8); the salt's name and formula come from the base's metal and the acid's anion (5 to 7); a carbonate's CO₃²⁻ takes two H⁺ to make water and carbon dioxide, which escapes (9); so the base decides the products (12).
- **Opening frame (equals `chem-y11-m3-v04.md`'s final frame, same designer).** `c1-burned-magnesium-v1.png` ("MgO, a metal oxide"); `m5x-unsaturated-beaker-v1.png` ("dilute hydrochloric acid, HCl(aq)") with the coded powder dissolving ("dissolves, no fizz"); `m6-marble-chips-acid-v1.png` ("marble chips, CaCO₃: fizzes"); the amber chip "both use up the acid: what forms?"; four ticked strips at the top right; the "Next" chip, which fades.
- **The hook is m3-v04's contrast (route start: concrete case).** Both solids use up the acid; only one makes a gas. The question "what does an acid bring?" leads straight to H⁺.
- **Definitions (site, Year 11).** Acid and alkali in the Arrhenius form the site prescribes; base as "reacts with an acid and uses up its hydrogen ions" (site key term "a metal oxide/carbonate that reacts with acid"), so oxides and carbonates are bases without an OH⁻ (site misconception 1). Brønsted-Lowry is not named (Year 12 Module 6).
- **Neutralisation shown with ions (cause before rule).** The ion lens from m3-v03: H⁺ and OH⁻ pair into water; Na⁺ and Cl⁻ stay as spectators and form the salt if the water is evaporated (tag). The net ionic equation H⁺ + OH⁻ → H₂O links back to m3-v03's method.
- **Observation (route practical: "Teacher-approved neutralisation and carbonate reactions").** Neutralisation: phenolphthalein in dilute sodium hydroxide, dilute acid added in portions, the pink vanishes and the mixture warms slightly (site). Carbonate: marble chips or sodium carbonate with dilute hydrochloric acid, the gas led into limewater. Controls spoken once each: safety glasses and dilute solutions (scene 4); dilute acid, small amounts, glasses (scene 10). The site's "never smell the acid or the mixture" is spoken in scene 4 as "never sniff it" (site wording, no invented rule).
- **Salt naming (Module 6 bank line, shared with Year 12 C02; Revision 2 scope).** "The metal names the first word; the acid names the second." Scoped on screen to "the metal bases here"; a salt is defined generally as an ionic compound of a positive ion (often a metal ion, or ammonium) and a negative ion, and oxides are "basic oxides such as MgO", not "all metal oxides" (brief 182 finding 1). HCl → chloride, H₂SO₄ → sulfate, HNO₃ → nitrate. Charges then fix the formula (m3-v02's memory line). The 3 s prediction (scene 6) asks for K₂SO₄'s formula before balancing.
- **Why CO₂ and never CO (site trap, corrected reason).** The carbonate ion's carbon leaves with two of its three oxygens; the third joins two H⁺ as water; nothing removes oxygen from that carbon (no electron transfer), so the gas is carbon dioxide. The site's "cannot be further oxidised" reason is not used (site note 1).
- **Limewater explained (callback to m3-v03).** Ca(OH)₂ + CO₂ → CaCO₃(s) + H₂O: the milky cloud is insoluble calcium carbonate, a precipitate the student can now predict. One line on screen; spoken in plain words.
- **Antacids (site card, active ingredients only).** Magnesium hydroxide against calcium carbonate with hydrochloric acid; only the carbonate makes carbon dioxide, "which is why only one kind makes you burp" (site: "That extra CO₂ is why a carbonate antacid can make you belch"). Grey tag "chemistry, not medical advice" (site wording). No brands, no patient.
- **Memory aid (see "Memory aid check"):** "Metal names the first word, acid names the second. Hydroxide or oxide: salt and water. Carbonate: salt, water and carbon dioxide." (Module 6 bank, shortened; shared with Year 12 C02's first two lines.)
- **Attempts (original wording, HSC style).** A1 (site drill 1's reaction, new wording): nitric acid with calcium hydroxide: 2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l); crossed "CaNO₃". A2 (site Q2's reaction, new wording): excess hydrochloric acid with potassium carbonate solution, equation and gas test: 2HCl(aq) + K₂CO₃(aq) → 2KCl(aq) + H₂O(l) + CO₂(g); limewater turns milky; crossed "2HCl + K₂CO₃ → 2KCl + H₂O" (carbon dioxide left out; Revision 2 aligns this with scene 17, brief 182 finding 5).
- **Mistake scene:** none separate. "Bases must contain OH⁻" (2, oxides and carbonates listed); "H₂O₂ as the product" (3, one crossed chip, site trap); "CaNO₃" (A1 crossed); "CO instead of CO₂" (12, crossed); "only salt and water from a carbonate" (A2 crossed, site misconception 3).
- **Handoff (route next: `chem-y11-m3-v06`, cultural hold).** v06 is not designed (cultural hold for the owner). Scene 18 closes this video's question, gathers the six reaction types as a toolkit, and asks v06's route question in neutral words, with no images, claims or content about the practices. Final frame: see "Opening frame and final frame". Root reconciles it when v06 is designed; `chem-y11-m3-v07` does not depend on it.
- **Site notes (read 5 November; for root to log if accepted):**
  1. Lesson 5, drill 2 answer: "The carbon in CO₃²⁻ is at +4 oxidation state, it cannot be further oxidised and the product is CO₂, not CO." Forming CO would need carbon to be reduced (+4 to +2), not oxidised; the acid-carbonate reaction involves no electron transfer, so carbon stays at +4 in CO₂. Suggest "Carbon stays at +4 because no electrons are transferred; CO would need the carbon to be reduced, which nothing in the mixture does." The `l05-acid-carbonate...` card's wording ("already at oxidation state +4, so CO₂ is the only possible gaseous carbon product") is acceptable but could add the same clause.
  2. Lesson 5, antacid card, Q3 and the revisit: brand names (Quick-Eze, Tums, Mylanta) and "why Mylanta (Mg(OH)₂) is preferred when CO₂ production is a problem" read as product advice, against the hook's own "not by brand or health claims". Suggest active ingredients only ("a magnesium hydroxide antacid", "a calcium carbonate antacid") and removing "is preferred".
  3. Lesson 5, multiple-choice explanation (Band 5): "HCO₃⁻ provides less buffering capacity than metal hydroxides ... long-term systemic absorption could affect blood pH homeostasis" are medical claims outside the lesson's chemistry. Suggest limiting the explanation to "NaHCO₃ produces CO₂ and adds Na⁺".
  - Checked and correct: the neutralisation table (HCl + NaOH; H₂SO₄ + Ca(OH)₂ → CaSO₄(s) + 2H₂O with its note; HNO₃ + KOH; 2HCl + MgO → MgCl₂ + H₂O); both carbonate examples and their atom counts; worked examples 1 and 2 (2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂); drills 1 to 3 (drill 1's working says "but let's recount" mid-answer; the final count is right, a tidy-up only); Q2 net ionic (2H⁺ + CO₃²⁻ → H₂O + CO₂); the antacid calculation (2 × 500 mg = 1.0 g; 0.010 mol; 0.020 mol HCl).
- **Cause chain taught, in order:** (1) an acid releases hydrogen ions in water (2); (2) a base uses them up: OH⁻ takes one H⁺ to make water (3), O²⁻ takes two (8), CO₃²⁻ takes two and splits into water and carbon dioxide (9); (3) the ions not used make the salt, named and formulated from the base's metal and the acid's anion (3, 5 to 7); (4) carbon dioxide is a gas, so it escapes as bubbles, and limewater identifies it because it forms insoluble calcium carbonate (9, 10); (5) a hydrogen carbonate already carries one H, so it needs only one H⁺ (11); (6) the base, not the acid, decides whether a gas forms (12, 13).
- **Entry knowledge:** m1-v19 (charges and polyatomic ions), m1-v20 (names), m2-v01 (balancing, states), m3-v02 (charges fix the formula; limewater), m3-v03 (spectators, net ionic equations, precipitation), m3-v04 (metal oxides).
- **Learner-visible vocabulary (plain meaning at first use):** acid (releases hydrogen ions, H⁺, in water, 2); base (reacts with an acid and uses up its hydrogen ions, 2); alkali (a base that dissolves in water, giving hydroxide ions, 2); neutralisation (an acid and a base react to make a salt and water, 3); salt (an ionic compound made from the base's metal ion and the acid's negative ion, 3); indicator (a dye whose colour changes between acid and base, 4); hydrogen carbonate (HCO₃⁻, a carbonate ion that already carries one hydrogen, 11).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **ion lens** (scenes 2, 3, 8, 9, 11: from m3-v03; H⁺ small pale pink, OH⁻ violet, O²⁻ violet, CO₃²⁻ violet triangle cluster; H⁺ ions dock onto the base's ion; water molecules form as small blue bent shapes; CO₂ forms as a small linear shape and rises out as a bubble; spectators get grey tags); **salt namer** (scenes 5, 7, A1: two slots "first word: from the base's metal" and "second word: from the acid", the acid tile turning into its anion name; charge tiles then build the formula); **atom tiles and tally** (scenes 7 to 11, A1, A2: from m3-v02); **delivery tube** (scene 10: a coded tube joins `m8-carbonate-tube-fizz-v1.png` to the inlet of `m6-limewater-milky-v1.png`, with bubbles travelling along it); **pattern compare** (scene 12: two columns "hydroxide or oxide" and "carbonate or hydrogen carbonate" with product chips); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m3-v03):** H⁺ pale pink; other cations amber; anions violet; water pale blue; carbon dioxide grey bubbles; spectators grey when tagged; neutralisation teal; carbonate pattern amber; crossed items red strike.
- **Board layout (Revision 2):** heading top left; earlier strips small at the top right. Revision 1 kept plates in a column on the left third and the lens or lines in the centre. Revision 2 stages, each under about 35 s: the three beakers filling the frame (1); the large acid and alkali lenses (2); the merged lens with the two lines (3); the phenolphthalein drip stage (4); the salt namer at full width (5, 6, 7); the MgO beaker and lens (8); the marble-chip beaker and lens (9); the delivery tube to the limewater (10); the baking-soda plates (11); the pattern compare at full width (12); the antacid comparison (13).
- **Colour roles (Revision 2, fixed for the whole video):** H⁺ pale pink; OH⁻ and other anions violet; metal ions amber; water pale blue; CO₂ grey; hydroxide/oxide column teal; carbonate column amber; coefficients teal; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the ion they mark; scope and safety tags grey.
- **Type sizes (Revision 2, 1080p):** the current equation line at least 44 px (48 px); live readouts about 52 px; namer slots 40 px; supporting lines 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the acid drip (scene 4).** A live control on the core idea (each H⁺ uses up one OH⁻ to make water): as coded acid drops fall into the pink phenolphthalein flask, three readouts update live (52 px): "OH⁻ left" (violet, 10 → 0), "H₂O made" (pale blue, 0 → 10) and the thermometer "21.0 → 21.6 °C" (illustrative); the lens shows each arriving H⁺ docking on an OH⁻; at "OH⁻ left 0" the flask swaps to colourless.

Author notes (not learner copy):
(a) Year 11 definitions: the site prescribes Arrhenius for Year 11; "base: reacts with an acid and uses up its hydrogen ions" is the site's wider key-term sense (oxides and carbonates). Brønsted-Lowry is Year 12 Module 6.
(b) Phenolphthalein is pink above about pH 8.2 to 10 and colourless below; the pink vanishes just before exact neutralisation for a strong acid and strong base. "At the point where the hydroxide ions are used up" is a fair Year 11 description (science check).
(c) Limewater: Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l); with excess CO₂ the cloud clears (Ca(HCO₃)₂ forms); not mentioned.
(d) Carbonic acid: 2H⁺ + CO₃²⁻ forms H₂CO₃, which breaks down to H₂O + CO₂ (site revisit). Not taught; the lens shows the products directly.
(e) Calcium hydroxide solution is only sparingly soluble; A1 writes Ca(OH)₂(aq) as limewater-strength solution (site drill 1 uses (aq)). Ca(NO₃)₂ is soluble.
(f) Antacids: stomach acid is mainly dilute hydrochloric acid (site). No doses, no pH claims (route stop).
(g) Pronunciations: "H plus", "O H minus", "C O three two minus" spoken once each; "H two S O four", "K two S O four" spoken as letters once; "H C l" as letters; "phenolphthalein" (fee-nol-THAY-leen); "hydrogen carbonate" (not "bicarbonate"; "baking soda" given as the everyday name).

Main question: *How can we predict acid-base and acid-carbonate products?*
Entry knowledge: m1-v19, m1-v20, m2-v01, m3-v02, m3-v03, m3-v04.
Stops after: acid, base, alkali and salt defined; neutralisation of hydroxides and oxides; carbonates and hydrogen carbonates; salt names and formulae; the limewater test explained; the two patterns compared; antacids by ingredient. No pH scale, no strength, no titration, no acid + metal.
Handoff: chem-y11-m3-v06 (cultural hold), then chem-y11-m3-v07.

## Opening frame and final frame

- **Opening frame:** m3-v04's final frame exactly (Decisions).
- **Final frame (for root to reconcile with `chem-y11-m3-v06` when it is designed):** the reaction toolkit board: six ticked strips in two rows, "synthesis: A + B → AB", "decomposition: AB → A + B", "precipitation: swap partners, one insoluble", "combustion: fuel + O₂ → oxides", "acid + base: salt + water", "acid + carbonate: salt + water + CO₂", each with one small plate from its video (`c1-burned-magnesium-v1.png`, `m6-limewater-milky-v1.png`, `m5x-ppt-agcl-white-v1.png`, `m8-flame-blue-v2.png`, `m6-clip-phenolphthalein-colourless-v1.png`, `m6-marble-chips-acid-v1.png`); the heading "Predicting products"; the chip "Next: How do particular Aboriginal and Torres Strait Islander food-processing practices remove toxins?". No image, icon or text about the practices themselves.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: one fizzes, one doesn't
> Here's where we left off. Magnesium oxide dissolves in dilute hydrochloric acid without a single bubble. Marble chips, calcium carbonate, fizz in the same acid. Both use up the acid, so both are reacting. But only one makes a **gas**. To predict what forms, start with what an acid actually brings to the **reaction**.

Visual: opens on m3-v04's final frame; the "Next" chip fades; the three beaker plates grow to fill the frame at uniform scale. On "gas" the marble-chips beaker pulses and a pen ring circles its bubbles (amber hand tag "gas"); the MgO beaker gets a teal hand tag "no gas". On "reaction" the HCl tag on the middle beaker grows into the heading "What does an acid bring?".

### 2. acids, bases and alkalis
> An acid is a substance that releases hydrogen ions, H plus, when it dissolves in water. Hydrochloric acid gives hydrogen ions and chloride ions. A base is a substance that reacts with an acid and uses up those hydrogen ions. Metal hydroxides, oxides like magnesium oxide, and carbonates are all bases. A base that dissolves in water, like sodium hydroxide, is called an **alkali**, and it gives hydroxide ions, O H minus.

Visual: stage change: a large ion lens over the acid beaker: pale pink H⁺ and violet Cl⁻ in water shells; gloss chip "acid: releases H⁺ in water" (pink hand tag "H⁺"). Gloss chip "base: reacts with an acid and uses up its H⁺"; three base tiles write under it: "metal hydroxides (NaOH, Mg(OH)₂)", "basic oxides (MgO)", "carbonates (CaCO₃)"; a chip "bases must contain OH⁻" fades in and is crossed in red (red hand tag "MgO and CaCO₃ don't"). On "alkali" gloss chip "alkali: a base that dissolves in water, giving OH⁻" and a second large lens shows Na⁺ and violet OH⁻.

### 3. neutralisation: hydrogen ion meets hydroxide ion
> Mix hydrochloric acid with sodium hydroxide solution. Each hydrogen ion meets a hydroxide ion, and they join to make a water **molecule**. That's neutralisation. The ions left over, sodium and chloride, make a salt, which in chemistry means an ionic compound of a positive ion, here sodium from the base, and a negative ion from the acid. So acid plus base gives salt plus water. The net ionic equation is just H plus plus O H minus gives water, and sodium and chloride are **spectators**.

Visual: the two lenses merge at full frame; on "molecule" each H⁺ docks onto an OH⁻ and a pale blue water shape forms (pale blue hand tag "H⁺ + OH⁻ → water"). Gloss chip "neutralisation: acid + base → salt + water". Gloss chip "salt: ionic compound of a positive ion (often a metal ion, or ammonium) and a negative ion" (tag "NaCl here; table salt is one salt of many"). Lines (48 px): "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)" (molecular) and "H⁺(aq) + OH⁻(aq) → H₂O(l)" (net ionic), framed. On "spectators" Na⁺ and Cl⁻ get grey tags (m3-v03 style). A chip "H₂O₂" fades in and is crossed in red (red hand tag "one H⁺ + one OH⁻ = H₂O").

### 4. watching it happen
> You can watch it happen. Add a few drops of phenolphthalein, an indicator, to dilute sodium hydroxide, and it turns pink. Add dilute acid a little at a time, and the mixture warms slightly. When the hydroxide ions are used up, the pink **vanishes**. Wear safety glasses, use dilute solutions, and never sniff the mixture.

Visual: stage change to the drip stage: `m6-clip-phenolphthalein-pink-v1.png` large at the left with tag "dilute NaOH + phenolphthalein"; gloss chip "indicator: a dye whose colour changes between acid and base". The acid drip runs (simulation): coded acid drops fall in from above; the readouts "OH⁻ left" (10 → 0), "H₂O made" (0 → 10) and the thermometer (21.0 → 21.6 °C, tag "illustrative") update live (52 px); the lens beside it shows each H⁺ docking on an OH⁻ (violet hand tag "OH⁻ running out"). On "vanishes" "OH⁻ left" reaches 0 and the flask cross-fades to `m6-clip-phenolphthalein-colourless-v1.png` (green tick). Safety strip: "safety glasses; dilute solutions; never sniff" with `m5x-safety-glasses-v1.png` small.

### 5. naming the salt
> To predict the salt, the metal names the first word, and the acid names the second. Hydrochloric acid gives chlorides, sulfuric acid gives sulfates, and nitric acid gives **nitrates**. Then the charges fix the formula, just like in synthesis.

Visual: stage change: the salt namer at full width (40 px): slot 1 "metal from the base", slot 2 "from the acid", with a grey tag "for the metal bases here". Three acid tiles flip on their words: "HCl → chloride (Cl⁻)", "H₂SO₄ → sulfate (SO₄²⁻)", and on "nitrates" "HNO₃ → nitrate (NO₃⁻)" (violet hand tags "-ide", "-ate"). m3-v02's line "Charges fix the formula" ghosts in small under the slots.

### 6. prediction (countdown, 3 seconds)
> Quick prediction. Sulfuric acid reacts with potassium hydroxide. What's the formula of the **salt**?

Visual: line "H₂SO₄(aq) + KOH(aq) → ? + H₂O(l)" with the salt namer's slots empty: "potassium ____". On "salt" the 3 s `Countdown` ring runs.

### 7. potassium sulfate, balanced
> Potassium sulfate. Potassium is plus one and sulfate is minus two, so it takes two potassiums: K two S O four. Now balance. Two potassiums need two potassium hydroxides. That brings two hydroxide ions, and sulfuric acid has two hydrogens to give, so they make two **waters**. Sulfuric acid plus two potassium hydroxide gives potassium sulfate plus two water.

Visual: slots fill "potassium sulfate"; charge tiles two "K⁺" with one "SO₄²⁻", tally "2(+1) + (−2) = 0", "K₂SO₄". Line with atom tiles; teal "2" before KOH; the lens shows two H⁺ docking on two OH⁻; on "waters" teal "2" before H₂O; tally "4 H, 2 K, 1 S, 6 O" green: "H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l)", framed in a dark-ink box with a green tick (teal hand tag "2 H⁺, 2 OH⁻, 2 waters").

### 8. metal oxides: two hydrogen ions per oxide
> A metal oxide works the same way, but it brings oxide ions instead of hydroxide ions. Each oxide ion takes two hydrogen ions and becomes water. So magnesium oxide plus two hydrochloric acid gives magnesium chloride plus **water**. Salt and water again, and no gas, which is why it dissolved without a bubble.

Visual: stage change: the opening's MgO beaker returns large with the lens: amber Mg²⁺ and violet O²⁻ in the solid; two H⁺ dock on each O²⁻ and a water shape forms; Mg²⁺ drifts off into solution. On "magnesium chloride plus water" line "MgO(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l)" with tally green "1 Mg, 1 O, 2 H, 2 Cl", framed. The tag "dissolves, no fizz" from the opening ticks (teal hand tag "salt + water").

### 9. carbonates: water and carbon dioxide
> Now the carbonate. A carbonate ion, C O three two minus, also takes two hydrogen ions. But that makes water and carbon dioxide, and carbon dioxide is a gas, so it bubbles **out**. That's the fizz. So acid plus carbonate gives three products: a salt, water and carbon dioxide. Two hydrochloric acid plus calcium carbonate gives calcium chloride, water and carbon **dioxide**.

Visual: stage change: the marble-chips beaker returns large with the lens at a chip's surface: a violet CO₃²⁻ cluster (one C, three O) in the solid; two H⁺ dock; on "out" the cluster splits into a water shape and a grey linear CO₂ that rises as a bubble and leaves the surface, while Ca²⁺ drifts into the solution (grey hand tag "the fizz"). Net line (40 px) "CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)" (grey tag "solid carbonate: never split"). On "calcium chloride, water and carbon dioxide" the full line "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)" with tally green "1 Ca, 1 C, 3 O, 2 H, 2 Cl", framed in a dark-ink box with a green tick; three product chips "salt", "water", "carbon dioxide".

### 10. testing the gas
> To show the gas is carbon dioxide, lead it through a delivery tube into limewater. It turns milky. And now you can explain why. Carbon dioxide reacts with the calcium hydroxide in limewater to make calcium carbonate, which is insoluble, so it clouds the **water**. Use dilute acid and small amounts, and keep your safety glasses on.

Visual: stage change: `m8-carbonate-tube-fizz-v1.png` large (tag "carbonate + dilute HCl") joined by the coded delivery tube to `m6-limewater-clear-v1.png`; bubbles travel along the tube; cross-fade to `m6-limewater-milky-v1.png`. A line writes: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)" with the rules-card row "carbonates: mostly insoluble" flashing small (tag "a precipitate: m3-v03"). On "clouds the water" the cloud thickens (amber hand tag "CaCO₃ cloud"). Safety strip: "dilute acid, small amounts, safety glasses".

### 11. hydrogen carbonates
> Hydrogen carbonates, like baking soda, sodium hydrogen carbonate, do the same thing. The hydrogen carbonate ion already carries one hydrogen, so it needs only one more. Hydrochloric acid plus sodium hydrogen carbonate gives sodium chloride, water and carbon dioxide, all one to **one**.

Visual: stage change: `m6-clip-baking-soda-vinegar-before-v1.png` large cross-fades to `m6-clip-baking-soda-vinegar-fizz-v1.png` (tag "baking soda in dilute acid"). Lens: an HCO₃⁻ cluster with one H already on it; one H⁺ docks; water and CO₂ form. Gloss chip "hydrogen carbonate: HCO₃⁻, a carbonate that already carries one H". On "all one to one" line "NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)" with green tally, framed (amber hand tag "1 : 1"); grey tag "this plate uses vinegar: same pattern".

### 12. the base decides
> So the base decides the products. A hydroxide or oxide gives a salt and water. A carbonate or hydrogen carbonate gives a salt, water and carbon dioxide. A common slip is to write carbon monoxide. But the carbon leaves the carbonate with two of its oxygens, and the third becomes water. Only that one oxygen is taken, so it's always carbon **dioxide**.

Visual: stage change: the pattern compare at full width: two columns, "hydroxide or oxide" with chips "salt + water" (teal), "carbonate or hydrogen carbonate" with "salt + water + CO₂" (amber). On "carbon monoxide" a chip "... + CO" fades in; a CO₃ tile set splits: C with two O tiles to "CO₂", the third O with two H⁺ to "H₂O" (grey hand tag "one O taken"); on "always carbon dioxide" the CO chip is crossed in red (red hand tag "carbon keeps two oxygens"). The memory line writes large as a framed card in the handwriting style (dark-ink frame; teal "salt and water", amber "carbonate"): "Metal names the first word, acid names the second. Hydroxide or oxide: salt and water. Carbonate: salt, water and CO₂."

### 13. antacids
> That's the difference between two kinds of antacid. A magnesium hydroxide tablet neutralises stomach acid, which is mostly hydrochloric acid, making magnesium chloride and water. A calcium carbonate tablet makes calcium chloride and water too, plus carbon dioxide gas. Only the carbonate makes a gas, which is why it can make you **burp**.

Visual: stage change: `m6-antacid-tablets-v1.png` large, split into two labelled tiles "active ingredient: Mg(OH)₂" and "active ingredient: CaCO₃"; grey tag "chemistry, not medical advice". Lines under each: "Mg(OH)₂(s) + 2HCl(aq) → MgCl₂(aq) + 2H₂O(l)" (teal column) and "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)" (amber column). On "burp" grey CO₂ bubbles rise from the carbonate column only (amber hand tag "gas from this one").

### 14. attempt 1 (countdown, 10 seconds)
> Your turn. Nitric acid reacts with calcium hydroxide solution. Name the salt, and write the balanced equation, including states. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Dilute nitric acid, HNO₃, is added to calcium hydroxide solution, Ca(OH)₂(aq). (a) Name the salt formed. (b) Write a balanced equation for the reaction, including states. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the pattern compare hides).

### 15. feedback 1 (brief)
> Calcium nitrate. Calcium is plus two and nitrate is minus one, so there are two nitrate ions for each calcium. Two nitrates need two nitric acids, and calcium hydroxide's two hydroxide ions make two waters. Two nitric acid plus calcium hydroxide gives calcium nitrate plus two water. Writing C a N O three, with one nitrate, ignores the **charges**.

Visual: card shrinks to the top. Salt namer "calcium nitrate"; charge tiles "Ca²⁺" with two "NO₃⁻", "Ca(NO₃)₂". Line "2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l)" with tally "4 H, 2 N, 8 O, 1 Ca" green, framed in a dark-ink box with a green tick. On "charges" a chip "CaNO₃" fades in and is crossed in red (red hand tag "Ca²⁺ needs two NO₃⁻"). Hold about 1 second.

### 16. attempt 2 (countdown, 10 seconds)
> Last one. Excess hydrochloric acid is added to potassium carbonate solution. Write the balanced equation, and describe a test that identifies the gas. Pause here to answer.

Visual: `QuestionCard`: "Excess dilute hydrochloric acid is added to potassium carbonate solution, K₂CO₃(aq), and a gas is produced. (a) Write a balanced equation for the reaction, including states. (b) Describe a test that would identify the gas, including the expected result. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 17. feedback 2 (brief)
> It's a carbonate, so salt, water and carbon dioxide. The salt is potassium chloride. The carbonate takes two hydrogen ions, so two hydrochloric acid, and two potassium chloride. Then water and carbon dioxide. Bubble the gas through limewater, and it turns milky. Stopping at the salt and water leaves out a whole **product**.

Visual: card shrinks. Line "2HCl(aq) + K₂CO₃(aq) → 2KCl(aq) + H₂O(l) + CO₂(g)" with tally "2 H, 2 Cl, 2 K, 1 C, 3 O" green, framed in a dark-ink box with a green tick; three product chips. `m6-limewater-milky-v1.png` small with "CO₂: limewater turns milky". On "product" a chip "2HCl + K₂CO₃ → 2KCl + H₂O" fades in and is crossed in red (red hand tag "carbonate: + CO₂"). Hold about 1 second.

### 18. conclusion and handoff
> So to predict an acid reaction, look at the base. Hydroxides and oxides give a salt and water. Carbonates give a salt, water and carbon dioxide, and limewater proves the gas. That gives you six reaction types for predicting products. Next, a different question about chemistry and food. How do particular Aboriginal and Torres Strait Islander food-processing practices remove **toxins**?

Visual: the pattern compare shrinks into two strips, "acid + base: salt + water" and "acid + carbonate: salt + water + CO₂", which join the four earlier strips. On "six reaction types" the toolkit board builds: six ticked strips in two rows, each with its small plate (final frame list), heading "Predicting products". On "toxins" the chip "Next: How do particular Aboriginal and Torres Strait Islander food-processing practices remove toxins?" writes. Hold about 2 seconds. This is the final frame (root reconciles with m3-v06 when it is designed).

### 19. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Acid: releases H⁺. Base: uses up H⁺. Alkali: soluble base, gives OH⁻.
2. Acid + hydroxide or basic oxide → salt + water.
3. Hydroxide solutions: H⁺(aq) + OH⁻(aq) → H₂O(l).
4. Acid + carbonate → salt + water + CO₂ (limewater turns milky).
5. Salt name: metal first, acid's anion second; charges fix the formula.

Memory aid (framed card, on the notes screen): *Metal names the first word, acid names the second. Hydroxide or oxide: salt and water. Carbonate: salt, water and CO₂.*

At the end the notes cross-fade back to scene 18's final frame.

## Teaching checks

- **Does it explain causes?** What an acid brings (2); why water forms (3, 8, 9); what the salt is and why its formula is what it is (3, 5, 7); why a carbonate fizzes (9); why limewater goes milky (10); why a hydrogen carbonate needs only one H⁺ (11); why the gas is never CO (12); why only one antacid makes gas (13).
- **Misconceptions addressed:** bases must contain OH⁻ (2, crossed); H₂O₂ as product (3, crossed); CaNO₃ (A1 crossed); CO instead of CO₂ (12, crossed); a carbonate gives only salt and water (A2 crossed).
- **One idea at a time:** definitions (2), neutralisation (3, 4), salt naming and formula (5 to 7), oxides (8), carbonates (9 to 11), the comparison (12), application (13).
- **Video makes it easier:** H⁺ ions dock and water shapes form in the lens (3, 8, 9, 11); the CO₂ shape rises out of the liquid as a bubble (9); the indicator fades as OH⁻ dots vanish (4); bubbles travel along the delivery tube into limewater (10); the CO₃ tiles split into CO₂ and H₂O to show why it isn't CO (12).
- **Response opportunity:** one 3 s prediction (6); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 26 s and 24 s.
- **Avoided double teaching:** spectators and net ionic equations (m3-v03), limewater (m3-v02), charges fix the formula (m3-v02), metal oxides (m3-v04), balancing (m2-v01).
- **Syllabus coverage:** `C3-IQ1-03` "predict and identify the products" for "acid/base reactions" (2 to 8, 13, A1) and "acid/carbonate reactions" (9 to 13, A2), with the indicator and limewater observations; `C3-IQ1-05` "construct balanced equations" (3, 7 to 11, 13, A1, A2).
- **Out of scope by design:** pH, strength, Brønsted-Lowry, titration, acid + metal, enthalpy of neutralisation, brand names, doses.

## Practice questions and model answers

**Attempt 1 (scene 14; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) calcium nitrate (1 mark). (b) 2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l) (1 mark for formulae, 1 mark for balance with states). Classic mistake (crossed): "CaNO₃".

**Attempt 2 (scene 16; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) 2HCl(aq) + K₂CO₃(aq) → 2KCl(aq) + H₂O(l) + CO₂(g) (1 mark for all three products, 1 mark for balance with states). (b) Bubble the gas through limewater; it turns milky, showing carbon dioxide (1 mark). Classic mistake (crossed): carbon dioxide left out.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Neutralisation | HCl + NaOH → NaCl + H₂O; H⁺ + OH⁻ → H₂O | 3 |
| Potassium sulfate | 2(+1) + (−2) = 0; H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O (4 H, 2 K, 1 S, 6 O) | 6, 7 |
| Oxide | MgO + 2HCl → MgCl₂ + H₂O (1 Mg, 1 O, 2 H, 2 Cl) | 8 |
| Carbonate | CaCO₃(s) + 2H⁺ → Ca²⁺ + H₂O + CO₂ (Revision 2 net line for the solid); CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ (1 Ca, 1 C, 3 O, 2 H, 2 Cl) | 9, 13 |
| Limewater | Ca(OH)₂ + CO₂ → CaCO₃ + H₂O | 10 |
| Hydrogen carbonate | NaHCO₃ + HCl → NaCl + H₂O + CO₂ (1 : 1) | 11 |
| Antacid | Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O | 13 |
| A1 | Ca²⁺ with two NO₃⁻; 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O (4 H, 2 N, 8 O, 1 Ca) | 14, 15 |
| A2 | 2HCl + K₂CO₃ → 2KCl + H₂O + CO₂ (2 H, 2 Cl, 2 K, 1 C, 3 O) | 16, 17 |

## Numbers to verify (all values, repeated for Codex)

Checked by an atom-and-charge counting script (5 November); Codex to re-check.

- HCl + NaOH → NaCl + H₂O; H⁺ + OH⁻ → H₂O; H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O; MgO + 2HCl → MgCl₂ + H₂O; CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; CaCO₃(s) + 2H⁺ → Ca²⁺ + H₂O + CO₂ (Revision 2; atoms 1 Ca, 1 C, 3 O, 2 H; charge +2 each side); 2H⁺ + CO₃²⁻ → H₂O + CO₂; Ca(OH)₂ + CO₂ → CaCO₃ + H₂O; NaHCO₃ + HCl → NaCl + H₂O + CO₂; Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O; 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O; 2HCl + K₂CO₃ → 2KCl + H₂O + CO₂. All balanced in atoms and charge.

## Memory aid check

- **"Metal names the first word, acid names the second. Hydroxide or oxide: salt and water. Carbonate: salt, water and CO₂."** From the Module 6 memory aids bank ("The metal names the first word; the acid names the second", and "Acid + carbonate → salt + water + carbon dioxide"), shared with Year 12 `chem-m6-c02.md`. Assumptions checked: the naming line is scoped to the metal bases studied here (Revision 2, brief 182 finding 1: ammonium is a polyatomic positive ion, not a metal; an ammonium salt is named from its ammonium ion in the same first-word slot, Year 12); the patterns assume enough acid (site: "with excess acid present"; A2 says "excess"); "carbonate" includes hydrogen carbonate (said in scene 12). It helps a new case: A1 (calcium nitrate), A2 (potassium carbonate), and any acid with a metal oxide made in m3-v04. The site's SWC mnemonic is shown as a small tag ("S, W, C") in scene 9, not a second aid.
- **Considered, not used:** "pH 7 at neutralisation" (wrong in general; out of scope).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,621 characters**, 19 scenes (Revision 1: 5,578). Revision 2 adds about 2 s of settling for its simulation and stage changes to the estimate below. At 13.3 characters per second the speech is about 419 s; add about 5 s of settling (the lens docking in 3, 8, 9; the delivery tube in 10), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 508 s** (Revision 1: about 503 s).

## Scene list and build ids

Lesson key `c-y11-m3-v05` (route chem-y11-m3-v05; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m3-v05`.

In order (19 scene headings, all `### N.`): hook-fizz, acid-base-alkali, neutralisation, indicator-observation, salt-names, prediction, potassium-sulfate, metal-oxide, carbonate, limewater-test, hydrogen-carbonate, base-decides, antacids, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m3-v04's final frame into scene 1 by camera continue (the beakers stay); 1 to 2 camera continue (the lens opens over the acid beaker); 2 to 3 to 4 camera continue; 4 to 5 board clear; 5 to 6 to 7 camera continue (the namer stays); 7 to 8 to 9 to 10 to 11 camera continue along the bench (each plate slides in as its case starts); 11 to 12 camera continue (cases gather into the compare); 12 to 13 camera continue; attempts and feedback card shrink to the top; 17 to 18 board clear; 18 to 19 fade to the notes board, and 19 cross-fades back to 18's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m3-v05-learning-review.md`, `checks/c-y11-m3-v05-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet at about 250 px; scaled uniformly only, never stretched):
- `public/assets/chemistry/c1-burned-magnesium-v1.png`, `m5x-unsaturated-beaker-v1.png`, `m6-marble-chips-acid-v1.png`: opening frame, scenes 1, 8, 9.
- `public/assets/chemistry/m6-clip-phenolphthalein-pink-v1.png` and `m6-clip-phenolphthalein-colourless-v1.png` (2048 × 1700, conical flasks, same framing): scene 4; Codex confirms they overlay.
- `public/assets/chemistry/m8-carbonate-tube-fizz-v1.png` (2000 × 2000) with `m6-limewater-clear-v1.png` and `m6-limewater-milky-v1.png` (2000 × 2000): scenes 10, 17; the coded delivery tube joins the carbonate tube's mouth to the limewater plate's tube inlet (Codex reports both points in plate pixels at a shared scale).
- `public/assets/chemistry/m6-clip-baking-soda-vinegar-before-v1.png` and `-fizz-v1.png` (2048 × 1700, aligned pair): scene 11, tagged "baking soda in dilute acid".
- `public/assets/chemistry/m6-antacid-tablets-v1.png`: scene 13.
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scenes 4, 10 strips.
- Final frame thumbnails: `c1-burned-magnesium-v1.png`, `m6-limewater-milky-v1.png`, `m5x-ppt-agcl-white-v1.png`, `m8-flame-blue-v2.png`, `m6-clip-phenolphthalein-colourless-v1.png`, `m6-marble-chips-acid-v1.png`.
- **Inspected, not used:** `m6-baking-soda-box-v1.png` (a box; the beaker pair shows the reaction); `m6-indicator-universal-set-v1.png` (pH colours; pH is out of scope); `m5x-strong-acid-mg-v1.png` (acid + metal belongs to m3-v07); `m6-clip-baking-soda-vinegar` pair's vinegar context is not named (tag says "dilute acid").

Need (new plates, Codex): none.

Coded: ion lenses and docking, water and CO₂ shapes, bubbles, salt namer, charge tiles, atom tiles and tallies, delivery tube, thermometer glyph, pattern compare, toolkit board, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M3 v05)

No new plates. Codex confirms that `m6-clip-phenolphthalein-pink-v1.png` and `m6-clip-phenolphthalein-colourless-v1.png` overlay exactly, and reports, at one shared display scale, the mouth of `m8-carbonate-tube-fizz-v1.png` and the free end of the delivery tube in `m6-limewater-clear-v1.png` so the coded tube can join them.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every equation under "Numbers to verify" (atoms and charge), and every equation in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module3/lesson05.sa.html` (definitions; neutralisation table rows; net ionic equation; the indicator and warming observation; both carbonate examples; worked example 1; drill 1; Q2; the antacid comparison by ingredient).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the syllabus quotes match `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals m3-v04's final frame. Send the final frame to root for reconciliation with m3-v06 (cultural hold).

## YouTube metadata (draft)

Title: Acid-Base and Acid-Carbonate Reactions: Predicting the Products | Year 11 Chemistry Module 3

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Magnesium oxide dissolves in acid without a bubble; marble chips fizz. An acid brings hydrogen ions, and the base decides what they make: hydroxides and oxides give a salt and water, carbonates give a salt, water and carbon dioxide. Learn to name the salt and fix its formula from charges, balance the equations, explain the limewater test as a precipitation, see why the gas is never carbon monoxide, and compare two kinds of antacid by their chemistry. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 3: Reactive Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct investigations to predict and identify the products of a range of reactions, for example: synthesis, decomposition, combustion, precipitation, acid/base reactions, acid/carbonate reactions (ACSCH042, ACSCH080)"
"construct balanced equations to represent chemical reactions"

Previous: How do oxygen supply and fuel affect combustion products? Next: How do particular Aboriginal and Torres Strait Islander food-processing practices remove toxins?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Handoff to the held video (root).** Scene 18 asks m3-v06's route question in neutral words over a toolkit board with no cultural content. When v06 is designed (or if it stays on hold and the playlist goes straight to v07), root may change the "Next" chip and the last two sentences only.
- **2. Phenolphthalein wording (science check).** "When the hydroxide ions are used up, the pink vanishes" (author note b).
- **3. "Burp" (learning review).** The site's antacid point uses belching; confirm "burp" suits the tone.

## Review notes

- Revision 1 was reviewed by brief 182 (0 blockers, 5 should fix, 1 optional); every finding is resolved in Revision 2 (see "Revision 2"). Earlier note: Revision 1 had no independent review. Next: student learning review (is scene 3 too dense with salt, neutralisation and the net ionic equation together; is scene 12's CO explanation clear), then the science check and Codex error check.
- Checker output (5 November): narration 5,578 characters; per scene (1 to 19): 310, 401, 462, 317, 238, 96, 354, 304, 366, 328, 282, 360, 314, 150, 345, 172, 321, 383, 75; no em dash; every quoted cue found in its scene's narration in spoken order.

- Checker output (Revision 2, 6 November): narration 5,621 characters (sum of scene strings); per scene (1 to 19): 310, 417, 481, 317, 238, 96, 354, 304, 366, 328, 282, 347, 335, 150, 345, 172, 321, 383, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 182 findings (`checks/c-y11-m3-v05-learning-review.md`, `checks/c-y11-m3-v05-science-check.md`):
1. Salt and metal-base scope (should fix): scene 3 now defines a salt as "an ionic compound of a positive ion, here sodium from the base, and a negative ion from the acid", with the gloss "positive ion (often a metal ion, or ammonium)"; scene 2 says "oxides like magnesium oxide" (tile "basic oxides (MgO)"), not all metal oxides; the salt namer carries a grey tag "for the metal bases here"; the memory-aid note no longer says "metal" includes ammonium.
2. Solid carbonate and ionic states (should fix): scene 9's net line is "CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)" (the solid is never split); key note 3 labels H⁺ + OH⁻ → H₂O as the hydroxide-solution case.
3. Oxygen explanation (optional, applied): scene 12 now says "Only that one oxygen is taken, so it's always carbon dioxide" (was "Nothing takes oxygen away from that carbon").
4. Chemistry versus individual symptom (should fix): scene 13 now says "Only the carbonate makes a gas, which is why it can make you burp."
5. Crossed-mistake consistency (should fix): the Decisions A2 crossed chip is now "2HCl + K₂CO₃ → 2KCl + H₂O" (carbon dioxide left out), matching scene 17.
6. Metadata length (should fix): the title is now "Acid-Base and Acid-Carbonate Reactions: Predicting the Products | Year 11 Chemistry Module 3" (92 characters).
m3-v06 boundary rechecked: scene 18 asks v06's question in neutral words only, with no content about the practices (root decision m3-1).

Visual upgrade (scene-level visual changes; teaching logic unchanged):
- Scene 1: the three beakers fill the frame in the first 20 s.
- Stage changes in every teaching scene (large lenses, drip stage, salt namer, large MgO and chip beakers, delivery tube, baking soda, pattern compare, antacids); no stage longer than about 35 s.
- Live control: the acid drip (scene 4) drives "OH⁻ left", "H₂O made" and the thermometer, with the pink-to-colourless swap at zero.
- Framed answers with a green tick: the neutralisation lines (3), K₂SO₄ (7), MgO (8), CaCO₃ (9), NaHCO₃ (11), Ca(NO₃)₂ (15), K₂CO₃ (17). Crossed slips carry red hand tags ("bases must contain OH⁻", H₂O₂, CO, CaNO₃, the CO₂-less A2 line).
- Hand tags and pen marks in role colours in every teaching scene (1 to 13).
- Memory line as a framed card (scene 12 and the notes screen); key notes cut to five short bullets.
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout"; the salt-naming decision gains its scope.
- No new plate requests.

Counts: 5,621 characters (Revision 1: 5,578); about 503 to about 508 s.
