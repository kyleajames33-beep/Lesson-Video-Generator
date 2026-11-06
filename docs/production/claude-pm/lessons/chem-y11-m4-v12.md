# Year 11 Chemistry M4 V12: The sign of an entropy change. How can a balanced reaction suggest the sign of entropy change? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,600 characters, 15 scenes, about 514 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: twelfth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 81, between `chem-y11-m4-v11` (entropy) and `chem-y11-m4-v13` (Gibbs free energy); prediction rules plus one calculation pattern. Templates: `chem-y11-m4-v11.md` (same designer, colour key), `chem-y11-m4-v09.md` (calculation board), `math-a12-d10.md` (calculation staging), `phys-y11-fa1-v01.md` (structure). No starter pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v12` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare phases and gas amounts, recognise where sign heuristics are insufficient, and consult standard entropy references."; next handoff: "How do enthalpy, entropy and temperature determine spontaneity?"). Site lessons read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson11.sa.html` (SHA256 `2b2a7da0570acdb7db9301d252918c766dfc134f8704d10a8dd8a8a1a8f2ea5b`, recomputed, matches the route), section `l11-predicting-the-sign-of-s-title`; `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson12.sa.html` (SHA256 `99affff781eb8853aa6aa4c3081683e706db99508e1110d414fa42dd14abb75f`, recomputed, matches), sections `l12-the-third-law-and-absolute-entropy-title` and `l12-calculating-s-using-standard-entropy-values-title`. Used: the sign-rules table (moles of gas, phase changes, dissolving "usually", mixing); Δn(gas) as the strongest single predictor; the common error "predicting ΔS based only on whether the reaction is exothermic"; worked example parts (a) to (d) (Haber, limestone, NaCl dissolving with its caution, hydrogen combustion); the third law ("The entropy of a perfect crystal at absolute zero (0 K) is exactly zero"); "S° of elements is NOT zero" and its critical-error box; ΔS° = ΣS°(products) − ΣS°(reactants) with coefficients; worked example 1 (Haber) recalculated with the cited table; the "check the sign against your prediction" habit; Drill 2's methane-to-steam case (Δn(gas) = 0), used as the case where the rule cannot decide; the unit note (J, not kJ; convert later). Not used: the 0 K to 298 K entropy build-up graph (named in one sentence only), residual entropy, single-ion conventions, the J to kJ conversion (v13 uses it), the limestone calculation (its table values differ by source; site note 2; v13 and v14 use it with stated data). Site corrections file checked: no logged item touches Module 4.

Owner rules applied: as `chem-y11-m4-v11.md` (one learner question; no people, hands or faces; real objects as painted plates; equation cards, molecule tiles, bars and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Drivers of Reactions; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ3-02`: "use modelling to illustrate entropy changes in reactions"
- `C4-IQ3-03`: "predict entropy changes from balanced chemical reactions to classify as increasing or decreasing entropy"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v11's final frame (same designer). Teaches: rule 1, compare states (gas ≫ liquid > solid; dry ice; water's 70.0 and 188.8); rule 2, count moles of gas, with the particle model of the Haber reaction (four molecules become two); why gas count usually dominates (a mole of gas carries far more entropy than a mole of solid); four more equations classified (peroxide, hydrogen burning, a dissolving solid, with "usually"); where the rules cannot decide (equal moles of gas); standard entropy S° and the third law (perfect crystal at 0 K has one arrangement); elements have S° > 0 (contrast ΔfH° = 0); ΔS° = ΣS°(products) − ΣS°(reactants) with coefficients; Haber −198.1 and methane-to-steam −5.3 J K⁻¹ mol⁻¹; checking a calculation against the prediction. Not taught: Gibbs free energy and the J to kJ conversion (v13), temperature thresholds (v14), single-ion entropy conventions, the entropy build-up graph.

## Decisions

- **Learner question (route wording kept).** "How can a balanced reaction suggest the sign of entropy change?" The answer, in order: look at states (2), count moles of gas (3, 4); when the count ties, the rules can't decide (5); then use measured standard entropies (6 to 8).
- **Opening frame (equals `chem-y11-m4-v11.md`'s final frame, same designer).** Memory line "Entropy counts the ways." small at the top; `y11c-dry-ice-v1.png` with "CO₂(s) → CO₂(g)" and "ΔS: + or −?"; the Haber card "N₂(g) + 3H₂(g) → 2NH₃(g)" with four reactant molecules and an empty products tray, "ΔS: + or −?"; the amber chip; the "Next" chip, which fades.
- **Prediction (3 s, scene 1).** "Haber reaction: ΔS positive or negative?" Answer: negative (scene 3). The site's true-or-false check ("positive because the products are more stable") is reused as the crossed reasoning.
- **Rule 1, states (scene 2).** Dry ice: solid to gas, a large increase. Number for a change of state: water, S° 70.0 (l) to 188.8 (g) J K⁻¹ mol⁻¹, so the tabulated gas has +118.8 J K⁻¹ mol⁻¹ more than the tabulated liquid at 25 °C (OpenStax Chemistry 2e Appendix G; the site's 69.9 and 188.7 give the same +118.8). Revision 2 (brief 184): this is not called boiling, because boiling at 100 °C has ΔS of about +109 J K⁻¹ mol⁻¹ (author note g).
- **Rule 2, gas count (scene 3).** Δn(gas) = moles of gas in products − moles of gas in reactants, spoken as "count the moles of gas on each side". Haber: 4 → 2, Δn(gas) = −2, ΔS negative. The particle model (four coded molecules join into two) shows fewer independent gas particles, so fewer arrangements (v11). Why the gas count usually dominates: a mole of gas has far more entropy than a mole of solid (O₂ 205.2 against graphite 5.7 J K⁻¹ mol⁻¹, OpenStax).
- **Classification practice in the teaching (scene 4).** 2H₂O₂(l) → 2H₂O(l) + O₂(g): gas made, ΔS positive (m3-v15's peroxide). 2H₂(g) + O₂(g) → 2H₂O(l): three moles of gas become liquid, strongly negative. NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq): a solid's ions spread through water, usually positive; the word "usually" is spoken because some ions hold water molecules tightly around them (site caution; OpenStax S°(Mg²⁺, aq) is negative, author note c).
- **Where the rules can't decide (scene 5; route stop).** CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) and C(s) + O₂(g) → CO₂(g): equal moles of gas each side. Revision 2 (brief 184): a tie means the gas count alone cannot decide; it does not predict that the change is small. These two cases turn out small only once data are used (scene 8), and a tied case can be large (author note a).
- **Standard entropy and the third law (scene 6; route stop "consult standard entropy references").** S°: the entropy of one mole of a substance at 100 kPa and a stated temperature, measured and tabulated; the tables used here are at 25 °C (Revision 2, brief 184; consistent with m4-v08, v13 and v14). Absolute zero (0 K, about −273 °C) glossed. The third law: a perfect crystal at absolute zero has only one arrangement, so its entropy is zero; every substance warmed from there gains entropy, so S° is positive even for elements. Crossed: "S°(O₂) = 0, like ΔfH°" (site critical error).
- **Calculation layout (scenes 7, 8; `math-a12-d10.md`).** Task strip; equation strip "ΔS° = ΣS°(products) − ΣS°(reactants)"; givens grouped with units; one stage per row. Haber: 2(192.8) − [191.6 + 3(130.7)] = 385.6 − 583.7 = −198.1 J K⁻¹ mol⁻¹ (site −198.9 with NH₃ 192.4; site note 2). Methane to steam: 591.4 − 596.7 = −5.3 J K⁻¹ mol⁻¹: small and negative; the site's lesson 11 says "slightly positive due to mixing" (site note 1). Carbon burning: 213.8 − (5.7 + 205.2) = +2.9 J K⁻¹ mol⁻¹, a second, positive tie case (result spoken, arithmetic on screen). Results to one decimal place, matching the data (four significant figures for −198.1, which the data support).
- **Memory aid:** "Count the gas first. A tie? Look it up." (see "Memory aid check"), scene 9.
- **Attempts (original wording, HSC style).** A1: predict and justify the sign of ΔS for (a) 2HgO(s) → 2Hg(l) + O₂(g) and (b) 2SO₂(g) + O₂(g) → 2SO₃(g): (a) positive, (b) negative. Crossed: "(b) positive, because the reaction releases heat". A2: calculate ΔS° for (b) from S° values (SO₂ 248.2, O₂ 205.2, SO₃ 256.8): −188.0 J K⁻¹ mol⁻¹, which matches (b). Crossed: "S°(O₂) = 0, giving +17.2" (the wrong sign).
- **Mistake scene:** none separate. Stability or exothermic sets ΔS (1, crossed in A1); counting all molecules instead of gas molecules (4: the hydrogen burning card carries a grey tag "count gas, not all molecules"); dissolving is always positive (4); element S° = 0 (6; crossed in A2); reactants minus products (7, ghost row).
- **Handoff (route next: `chem-y11-m4-v13`, "How do enthalpy, entropy and temperature determine spontaneity?").** Scene 14: the Haber reaction is exothermic (ΔH° = −91.8 kJ mol⁻¹: heat released raises the surroundings' entropy, v11) but its own entropy falls (−198.1 J K⁻¹ mol⁻¹). Final frame: see "Opening frame and final frame".
- **Data source.** OpenStax Chemistry 2e, Appendix G (checked online 6 November 2026): S° (J K⁻¹ mol⁻¹): N₂ 191.6, H₂ 130.7, NH₃ 192.8, O₂ 205.2, CO₂ 213.8, CH₄ 186.3, H₂O(g) 188.8, H₂O(l) 70.0, C(graphite) 5.740, SO₂ 248.2, SO₃ 256.76 (card 256.8), Mg²⁺(aq) −138.1; ΔfH°(NH₃, g) −45.9 kJ mol⁻¹.
- **Site notes (read 6 November; for root to log if accepted):**
  1. Lesson 11 Drill 5 (a) (also logged in the v11 design): methane to steam "ΔS ≈ 0. (In practice slightly positive due to mixing...)". Standard data give a small negative value (lesson 12's own Drill 2: −5.5 with its values; −5.3 with OpenStax). Suggest "ΔS ≈ 0 from the rule; the data give a small negative value, so look it up".
  2. Lesson 12 data table and examples mix sources: NH₃ 192.4, H₂O(l) 69.9, H₂O(g) 188.7, CaCO₃ 92.9, CaO 39.8 (older NBS-style values) beside O₂ 205.2 and CO₂ 213.8 (CRC/OpenStax). Current CRC and OpenStax give NH₃ 192.8, H₂O(l) 70.0, H₂O(g) 188.8, CaO 38.1, CaCO₃ (calcite) 91.7. Differences are small (Haber −198.9 against −198.1) but the lesson should name one source. Suggest stating the source under the table.
  3. Lesson 12 "Revisit": "Nernst proved entropy has a genuine absolute zero". Nernst's heat theorem (1906) led to the third law, which is a postulate supported by measurements, not a proof. Suggest "Nernst's work led to the third law".
  4. Lesson 11 priority rule "positive regardless of other changes" (also logged in v11): suggest "almost always".
  - Checked and correct: lesson 11 worked example (a) to (d) and drills; lesson 12 worked examples 1 and 2 (−198.9 and +43.4 with the site's values), hydrogen combustion −326.8, Drills 1 to 3 (+3.0, −5.5, −120.7), Q7 and Q8 (−243.1, −817.6) with the site's values.
- **Cause chain taught, in order:** (1) gas particles can be almost anywhere, so a gas has far more arrangements than a solid or liquid (2); (2) fewer gas molecules means fewer independent particles to arrange, so ΔS falls when the gas count falls (3); (3) a mole of gas carries much more entropy than a mole of solid, so the gas count usually decides (3); (4) dissolving spreads ions, but some ions order the water around them, so dissolving is usually but not always positive (4); (5) when the gas count is equal, the count says nothing about the sign or the size, so the rules cannot decide (5); (6) a perfect crystal at absolute zero has one arrangement, so entropy has a true zero and S° values are absolute and positive (6); (7) entropy is a property of each substance, so the reaction's change is products minus reactants, each times its coefficient (7).
- **Entry knowledge:** m4-v11 (entropy as counted ways, gas ≫ liquid > solid, J K⁻¹ mol⁻¹); m4-v08 (products minus reactants with coefficients; ΔfH° of elements is zero); m2 moles in equations; m3-v15 (peroxide decomposition).
- **Learner-visible vocabulary (plain meaning at first use):** moles of gas count, Δn(gas) (3, "moles of gas in the products minus moles of gas in the reactants"); standard entropy, S° (6); absolute zero (6, "zero kelvin, about minus 273 degrees, the coldest possible"); third law (6).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **equation cards** with gas-count tallies (purple counters under each side, a Δn chip); **molecule tiles** (scene 3: four coded molecules, N₂ and three H₂, regroup into two NH₃ inside one jar outline; an arrangement counter falls); **S° bars** (scenes 2, 3: vertical purple bars for water liquid and gas, O₂ and graphite); **classification board** (scene 4: three equation cards drop into "ΔS +" or "ΔS −" columns); **cooling ladder** (scene 6: a coded crystal cooling to a single arrangement at "0 K", a counter reading "1 way, S = 0"); **calculation board** (scenes 7, 8, A2); `y11c-dry-ice-v1.png` (scene 2); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v11):** entropy and arrangements purple; gas counts purple tallies; enthalpy orange (out) or blue (in); elements' S° values amber when they are the trap; crossed items red strike; earlier rows dimmed.
- **Board layout (Revision 2):** heading top left. Stages, each under about 42 s: m4-v11's final frame with the painted dry ice (1); the painted dry ice large with the state strip and bars (2); the Haber card with the molecule tiles and the live arrangement readout (3); the classification board (4, 5, about 65 s with the two tie cards arriving in 5); the cooling ladder with the data strip (6); the calculation board with the live sums (7); the classification board again with the tie rows (8); the framed memory card (9); question cards (10 to 13); the final layout (14).
- **Colour roles (Revision 2, fixed for the whole video):** entropy and arrangements purple; gas counts purple tallies; enthalpy orange (out) or blue (in); elements' S° values amber when they are the trap; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; source and condition tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); framed results, the live sums and the arrangement readout about 52 px; equation cards, tallies and givens 34 to 36 px; earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (source tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the arrangement readout (scene 3) and the live sums (scene 7).** Live readouts on the core idea (fewer gas particles, fewer ways). In scene 3 the molecule tiles regroup inside m4-v11's two joined jars while a readout (52 px) recounts the top-or-bottom arrangements of the independent gas particles: four particles, 2⁴ = 16; two particles, 2² = 4 (grey tag "v11's two-jar model"). In scene 7 two purple bars fill as each S° value is added, with running sums (52 px) for products (385.6) and reactants (583.7), and the gap between the bars becomes the result −198.1.

Author notes (not learner copy):
(a) Δn(gas) as a predictor: reliable when |Δn(gas)| ≥ 1, because molar entropies of gases (about 130 to 300 J K⁻¹ mol⁻¹) are much larger than those of most solids and liquids (about 5 to 200), and changes between gases of similar complexity are tens of J K⁻¹ mol⁻¹. With Δn(gas) = 0 the count gives neither the sign nor the size (Revision 2, brief 184): 2Al(s) + 3H₂O(g) → Al₂O₃(s) + 3H₂(g) has equal gas counts but ΔS° = [50.92 + 3(130.7)] − [2(28.3) + 3(188.8)] = 443.0 − 623.0 = −180.0 J K⁻¹ mol⁻¹ (OpenStax values; Codex to confirm). Data decide.
(g) Water's liquid and gas S° at 25 °C differ by 118.8 J K⁻¹ mol⁻¹; boiling at 100 °C has ΔS = ΔvapH ÷ T ≈ 40.7 kJ mol⁻¹ ÷ 373 K ≈ 109 J K⁻¹ mol⁻¹. Revision 2 (brief 184): learner copy compares the tabulated values only.
(b) Third law: S = 0 for a perfect crystal at 0 K (one microstate). Standard entropies are found by measuring heat capacities from near 0 K to 298 K and adding phase-change contributions; not taught here beyond one sentence.
(c) Aqueous ions: S°(Mg²⁺, aq) = −138.1 J K⁻¹ mol⁻¹ (OpenStax) is relative to the convention S°(H⁺, aq) = 0, so a negative single-ion value is allowed; dissolving MgCl₂ or CaCl₂ has a negative ΔS°. Learner copy says only "some ions hold water molecules tightly around them".
(d) Calculations: Haber 2(192.8) = 385.6; 191.6 + 3(130.7) = 583.7; −198.1. Methane to steam: 213.8 + 2(188.8) = 591.4; 186.3 + 2(205.2) = 596.7; −5.3. Carbon: 213.8 − 5.740 − 205.2 = +2.86 ≈ +2.9. A2: 2(256.8) = 513.6; 2(248.2) + 205.2 = 701.6; −188.0 (with 256.76: −188.08). O₂ = 0 slip: 513.6 − 496.4 = +17.2.
(e) The handoff ΔH°(Haber) = 2(−45.9) = −91.8 kJ mol⁻¹ (OpenStax); site −92 and −92.4.
(f) Pronunciations: "delta S"; "S nought" spoken as "standard entropy, S"; "joules per kelvin per mole"; "N two", "H two", "N H three", "S O two", "S O three", "H g O" spoken as "mercury oxide".

Main question: *How can a balanced reaction suggest the sign of entropy change?*
Entry knowledge: m4-v11, m4-v08; moles in equations.
Stops after: state and gas-count rules, dissolving as "usually", the tie case, S° and the third law, ΔS° from tables with a sign check. No Gibbs, no J to kJ conversion.
Handoff: chem-y11-m4-v13, Gibbs free energy.

## Opening frame and final frame

- **Opening frame:** m4-v11's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v13` opens on it):** centre: the Haber equation card "N₂(g) + 3H₂(g) → 2NH₃(g)" with its molecule tiles (four reactant molecules, two product molecules). Left of it, an orange chip "ΔH° = −91.8 kJ mol⁻¹: heat released, surroundings gain entropy" with an orange tick "helps"; right of it, a purple chip "ΔS° = −198.1 J K⁻¹ mol⁻¹: the system loses entropy" with a purple cross "hurts". Above, a coded balance beam (no figure) with the orange chip's weight on one pan and the purple chip's on the other, level and wobbling. The amber chip "One helps, one hurts. Which wins, and does temperature matter?". The chip "Next: How do enthalpy, entropy and temperature determine spontaneity?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Last time we found that entropy counts the ways, and gases have by far the most. So can a balanced equation tell us which way entropy changes, without any measuring? Try this one. Nitrogen and hydrogen gases react to make ammonia gas. Keep last time's particle picture in mind. Does the entropy go up, or **down**?

Visual: opens on m4-v11's final frame; the "Next" chip fades. Heading writes: "Reading ΔS from an equation". On "without any measuring" both cards slide to the left, the dry ice card dimming. On "Nitrogen and hydrogen gases" the Haber card moves to centre and enlarges, its four reactant molecules jiggling. Chips "up" and "down". On "down" the 3 s `Countdown` ring runs. Hand tags: purple "4 gas → 2 gas" with a pen ring on the reactant molecules; grey "no measuring?" on the heading.

### 2. rule one: compare the states
> Down, and here's how to see it quickly. The first thing to look at is the states. Gases have far more entropy than liquids, and liquids more than solids. So when dry ice turns into carbon dioxide gas, entropy rises a lot. Water shows the size of the jump: liquid water has seventy joules per kelvin per mole, and steam has one hundred and eighty-eight point eight. In these tables, the gas has about a hundred and nineteen more per mole. Anything that makes a gas from a solid or liquid usually has a positive delta **S**.

Visual: "down" ticks (explanation follows in 3). The dry ice card returns to centre: `y11c-dry-ice-v1.png` with "CO₂(s) → CO₂(g)". On "Gases have far more entropy" a coded state strip "solid < liquid ≪ gas" (purple, the gap widening). On "dry ice turns into carbon dioxide gas" coded vapour curls rise from the pellets; chip "ΔS: +". On "seventy joules per kelvin per mole" a purple bar "H₂O(l): 70.0"; on "one hundred and eighty-eight point eight" "H₂O(g): 188.8" (J K⁻¹ mol⁻¹; grey tag "OpenStax Chemistry 2e, Appendix G"). On "about a hundred and nineteen" a bracket "S°(g) − S°(l) = 188.8 − 70.0 = 118.8 J K⁻¹ mol⁻¹" (grey tag "table values, 25 °C"). On "S" a chip "makes gas from solid or liquid → ΔS usually +". Stage: the painted dry ice large at the left (stage change), the state strip and bars at the right. Purple hand tag "gas: far more ways" with a `PenArrow` up the 188.8 bar.

### 3. rule two: count the gas
> The second thing is to count the moles of gas on each side. In the ammonia reaction, one nitrogen and three hydrogens, four moles of gas, become just two moles of ammonia. Fewer gas molecules means fewer independent particles to arrange, so fewer ways, and the entropy goes down. The gas count usually decides, because a mole of gas carries so much more entropy than a solid. Oxygen gas has two hundred and five, but solid carbon only about six. Notice too that releasing heat doesn't make delta S positive. That's a separate **question**.

Visual: the Haber card returns to centre with purple tallies: on "four moles of gas" a counter "gas: 1 + 3 = 4" under the reactants; on "just two moles of ammonia" "gas: 2" under the products; a chip "Δn(gas) = 2 − 4 = −2" (purple). On "fewer independent particles to arrange" the molecule tiles inside a jar outline regroup from four into two; an arrangement counter beside them falls. On "the entropy goes down" chip "ΔS: −". On "Oxygen gas has two hundred and five" two bars "O₂(g): 205.2" and on "solid carbon only about six" "C(graphite): 5.7" (J K⁻¹ mol⁻¹). On "releasing heat doesn't make delta S positive" a crossed chip "ΔS + because it is exothermic (or more stable)". On "question" the chip "ΔH and ΔS: judge separately" from v11 flashes. The live arrangement readout (Decisions) steps "4 gas particles: 2⁴ = 16 ways" to "2 gas particles: 2² = 4 ways" as the tiles regroup. Purple hand tag "count the gas" with a `ScribbleCircle` round "Δn(gas) = −2"; the crossed chip carries a red hand tag "ΔH and ΔS: separate".

### 4. sorting more reactions
> Let's sort a few more. Hydrogen peroxide breaking down into water and oxygen gas makes a gas from a liquid, so delta S is positive. Hydrogen burning, two hydrogens and one oxygen making liquid water, turns three moles of gas into none, so delta S is strongly negative. And a solid like ammonium nitrate dissolving spreads its ions through the water, so delta S is usually positive. Usually, because some ions hold water molecules tightly around them, and that can make it **negative**.

Visual: the classification board: two columns "ΔS +" and "ΔS −". On "Hydrogen peroxide breaking down" a card "2H₂O₂(l) → 2H₂O(l) + O₂(g)" with tallies "gas 0 → 1" drops into "ΔS +". On "Hydrogen burning" "2H₂(g) + O₂(g) → 2H₂O(l)" with "gas 3 → 0" drops into "ΔS −" (a grey tag "count gas, not all molecules"). On "ammonium nitrate dissolving" "NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq)" with a small inset of ions spreading drops into "ΔS +" with a grey "usually" stamp. On "negative" the inset shows a small ion with a tight ring of water dots, tag "some ions order the water". Hand tags: purple "gas made: +" and "gas gone: −" on the two columns; grey "usually" with a pen ring on the stamp.

### 5. when the rules can't decide
> But sometimes the count is a tie. Methane burning to make steam has three moles of gas on each side. Carbon burning to carbon dioxide has one on each side. A tie means the gas count alone can't decide. It can't tell us whether delta S is positive or negative, or how large it is. For that, we need **measurements**.

Visual: two new cards with tallies: on "Methane burning to make steam" "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)" with "gas 3 → 3"; on "Carbon burning" "C(s) + O₂(g) → CO₂(g)" with "gas 1 → 1". Both hover between the columns. On "can't decide" chips "gas count: can't decide". On "positive or negative" a purple "?" on each; on "how large" a grey tag "size unknown too". On "measurements" a coded data-table strip slides in at the right with a heading "standard entropies, S°". Purple hand tag "tie: look it up" with a `PenArrow` from the two hovering cards to the data strip.

### 6. standard entropy and the third law
> Chemists measure a standard entropy, S nought, for each substance: the entropy of one mole at a hundred kilopascals, listed in our tables at twenty-five degrees. These values have a true zero. At absolute zero, zero kelvin, the coldest possible temperature, a perfect crystal has only one possible arrangement, so its entropy is zero. That's the third law of thermodynamics. Everything gains entropy as it warms from there, so even elements have positive standard entropies. Oxygen's is two hundred and five point two, not **zero**.

Visual: the cooling ladder at the left: a coded crystal of dots jiggling, cooling down a temperature scale "298 K → 0 K"; its jiggle stops and the arrangement counter reads "1 way: S = 0". On "standard entropy, S nought" gloss "S°: the entropy of 1 mol of a substance at 100 kPa (J K⁻¹ mol⁻¹)" with a grey tag "these tables: 25 °C". On "absolute zero, zero kelvin" gloss "absolute zero: 0 K (about −273 °C), the coldest possible". On "the third law of thermodynamics" gloss "third law: a perfect crystal at 0 K has S = 0". On "Everything gains entropy as it warms" the crystal warms back up the scale and the counter climbs. On "Oxygen's is two hundred and five point two" the data strip highlights "O₂(g): 205.2" (amber); on "zero" a crossed chip "S°(O₂) = 0, like ΔfH°(O₂)" with the tag "ΔfH° of elements is 0; S° is not". Stage: the cooling ladder large at the left, the data strip at the right. Purple hand tag "one way: S = 0" with a pen ring on the counter; amber hand tag "not zero!" on the O₂ row.

### 7. calculating delta S nought
> To find delta S nought for a reaction, use the same pattern as formation enthalpies: products minus reactants, each times its coefficient. For ammonia, the products are two times one hundred and ninety-two point eight, which is three hundred and eighty-five point six. The reactants are one hundred and ninety-one point six, plus three times one hundred and thirty point seven, five hundred and eighty-three point seven. Products minus reactants is minus one hundred and ninety-eight point one joules per kelvin per mole. Negative, just as the gas count **predicted**.

Visual: the calculation board. Task strip: "Find ΔS° for N₂(g) + 3H₂(g) → 2NH₃(g)". On "products minus reactants, each times its coefficient" equation strip "ΔS° = ΣS°(products) − ΣS°(reactants)" (grey tag "same pattern as v08"). Givens grouped (J K⁻¹ mol⁻¹): "S°(N₂, g) = 191.6", "S°(H₂, g) = 130.7", "S°(NH₃, g) = 192.8". On "two times one hundred and ninety-two point eight" row "Σ products = 2(192.8) = 385.6"; on "three times one hundred and thirty point seven" row "Σ reactants = 191.6 + 3(130.7) = 583.7"; on "minus one hundred and ninety-eight point one" row "ΔS° = 385.6 − 583.7 = −198.1 J K⁻¹ mol⁻¹" (purple). A ghost row "583.7 − 385.6 = +198.1" fades, crossed (tag "reactants minus products"). On "predicted" the Δn(gas) = −2 chip from scene 3 flies beside the result with a tick. The live sums (Decisions) fill two purple bars, "385.6" and "583.7"; the gap becomes the result, which frames in a dark-ink box with a green tick (52 px). The ghost row carries a red hand tag "products first".

### 8. the tie, settled
> Now the tie. For methane making steam, the products add to five hundred and ninety-one point four, and the reactants to five hundred and ninety-six point seven. So delta S nought is minus five point three joules per kelvin per mole. Tiny, and negative. Carbon burning works out at plus two point nine, tiny and positive this time. The count couldn't decide, and the data told us the **sign**.

Visual: the methane card returns. Givens (J K⁻¹ mol⁻¹): "CH₄(g) 186.3", "O₂(g) 205.2", "CO₂(g) 213.8", "H₂O(g) 188.8". On "the products add to five hundred and ninety-one point four" row "Σ products = 213.8 + 2(188.8) = 591.4"; on "five hundred and ninety-six point seven" "Σ reactants = 186.3 + 2(205.2) = 596.7"; on "minus five point three" "ΔS° = −5.3 J K⁻¹ mol⁻¹" (purple, small). On "Tiny, and negative" the methane card drops into the "ΔS −" column with a small "−5.3"; on "Carbon burning works out" a grey row writes: "C(s) + O₂(g) → CO₂(g): 213.8 − (5.7 + 205.2) = +2.9" and the carbon card drops into "ΔS +". On "sign" both "?" chips from scene 5 resolve. Stage: the classification board returns with the data rows at the right. The "−5.3" and "+2.9" results frame in dark-ink boxes with green ticks; purple hand tag "data decide" with a `PenArrow` to each card as it drops.

### 9. count first
> So here's the routine. Count the gas first. A tie? Look it **up**. The gas count is quick, and it usually decides. But when the moles of gas are equal, only the data can give you the sign.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "Count the gas first. A tie? Look it up." Beneath, the Haber card (tally ringed) and the methane card (data strip ringed); on "up" the data strip pulses.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Predict the sign of delta S for each reaction, and justify it. First, solid mercury oxide decomposes into liquid mercury and oxygen gas. Second, sulfur dioxide gas reacts with oxygen gas to form sulfur trioxide gas. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Predict whether the entropy of the system increases or decreases in each reaction. Justify each prediction. (a) 2HgO(s) → 2Hg(l) + O₂(g) (b) 2SO₂(g) + O₂(g) → 2SO₃(g) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> In the first, a gas forms from a solid, zero moles of gas becoming one, so entropy increases. In the second, three moles of gas become two, so there are fewer ways, and entropy decreases. Calling the second positive because it releases heat mixes up delta H and delta **S**.

Visual: card shrinks to the top. Rows: "(a) gas 0 → 1 (O₂ formed from a solid): ΔS +, entropy increases" (purple); "(b) gas 3 → 2: fewer gas particles, fewer ways: ΔS −, entropy decreases". On "Calling the second positive" a chip "(b) ΔS + because the reaction releases heat" fades in; on "S" it is crossed. Hold about 1 second. Both rows frame in a dark-ink box with a green tick. The crossed chip carries a red hand tag "heat ≠ ways".

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Calculate delta S nought for the sulfur trioxide reaction. Sulfur dioxide's standard entropy is two hundred and forty-eight point two, oxygen's is two hundred and five point two, and sulfur trioxide's is two hundred and fifty-six point eight joules per kelvin per mole. Does your answer agree with your prediction? Pause here to answer.

Visual: `QuestionCard`: "Use the standard entropies below to calculate ΔS° for 2SO₂(g) + O₂(g) → 2SO₃(g), and state whether your answer supports your prediction in part (b). S° (J K⁻¹ mol⁻¹): SO₂(g) 248.2; O₂(g) 205.2; SO₃(g) 256.8 (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Products: two times two hundred and fifty-six point eight, five hundred and thirteen point six. Reactants: two times two hundred and forty-eight point two, plus two hundred and five point two, seven hundred and one point six. So delta S nought is minus one hundred and eighty-eight joules per kelvin per mole, negative, as predicted. Leave out the oxygen, and you'd get plus seventeen point two, the wrong **sign**.

Visual: card shrinks. Rows: "Σ products = 2(256.8) = 513.6"; "Σ reactants = 2(248.2) + 205.2 = 701.6"; "ΔS° = 513.6 − 701.6 = −188.0 J K⁻¹ mol⁻¹: negative, agrees with (b)" (purple). On "Leave out the oxygen" a chip "S°(O₂) = 0: 513.6 − 496.4 = +17.2" fades in; on "sign" it is crossed. Hold about 1 second. The ΔS° row frames in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "O₂ is not 0".

### 14. conclusion and handoff
> So a balanced equation suggests the sign of delta S: compare the states, count the gas, and when the count ties, use standard entropies. Now look again at the ammonia reaction. It's exothermic, delta H is minus ninety-one point eight kilojoules, and the heat it releases raises the entropy of the surroundings. But its own entropy falls, by a hundred and ninety-eight joules per kelvin. One helps, and one hurts. So which one **wins**?

Visual: the memory line returns small at the top. On "compare the states, count the gas" the two rule chips pulse; on "use standard entropies" the data strip pulses. On "Now look again at the ammonia reaction" the Haber card returns to centre with its molecule tiles. On "minus ninety-one point eight kilojoules" the orange chip "ΔH° = −91.8 kJ mol⁻¹: heat released, surroundings gain entropy" with a tick "helps" (grey source tag "OpenStax"). On "its own entropy falls" the purple chip "ΔS° = −198.1 J K⁻¹ mol⁻¹: the system loses entropy" with a cross "hurts". On "One helps, and one hurts" a coded balance beam above the card, a weight from each chip on its pans, level and wobbling. On "wins" the amber chip "One helps, one hurts. Which wins, and does temperature matter?" and the chip "Next: How do enthalpy, entropy and temperature determine spontaneity?" write. Hold about 2 seconds. This is the final frame (m4-v13 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. States: gas ≫ liquid > solid.
2. Count moles of gas: more gas, ΔS +; less gas, ΔS −. Dissolving a solid: usually +.
3. A tie in the gas count can't decide the sign or size: use data.
4. S°: entropy of 1 mol at 100 kPa (tables at 25 °C). Perfect crystal at 0 K: S = 0, so elements' S° > 0.
5. ΔS° = ΣS°(products) − ΣS°(reactants), each × coefficient.

Memory aid (framed card, on the notes screen): *Count the gas first. A tie? Look it up.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why gases dominate (2, 3); why fewer gas molecules lower entropy (3: fewer independent particles to arrange); why dissolving is only usually positive (4); why the rules fail on a tie (5); why S° has a true zero and elements are not zero (6); why the formula is products minus reactants with coefficients (7: each substance carries its own entropy).
- **Misconceptions addressed:** exothermic or "more stable" means ΔS positive (3; crossed in A1); counting all molecules rather than gas (4, grey tag); dissolving always positive (4); element S° = 0 (6; crossed in A2); reactants minus products (7, ghost row); "ΔS ≈ 0 means slightly positive" (8).
- **One idea at a time:** prediction (1), states (2), gas count (3), sorting (4), tie (5), S° and third law (6), calculation (7), tie settled (8).
- **Video makes it easier:** gas tallies under each side (3, 4); molecule tiles regrouping with a falling arrangement counter (3); cards dropping into + and − columns (4, 8); a crystal cooling to "1 way" (6); a predicted chip flying to the calculated result (7).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks (A2 builds on A1's part (b)), all data on the cards, 10 s each, nothing answer-bearing. Feedback about 21 s and 32 s.
- **Avoided double teaching:** entropy and its units (m4-v11); products minus reactants (m4-v08); peroxide decomposition (m3-v15, named only).
- **Syllabus coverage:** `C4-IQ3-03` "predict entropy changes from balanced chemical reactions to classify as increasing or decreasing entropy" (2 to 5, 8, A1, A2); `C4-IQ3-02` "use modelling to illustrate entropy changes in reactions" (3: molecule tiles; 6: cooling crystal).
- **Out of scope by design:** Gibbs free energy, J to kJ conversion, temperature thresholds (v13, v14); single-ion conventions; the 0 K to 298 K entropy graph.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) entropy increases (1 mark): a gas (O₂) forms from a solid reactant; moles of gas rise from 0 to 1, and gases have far more possible arrangements (1 mark). (b) entropy decreases (1 mark): three moles of gas become two, so there are fewer gas particles and fewer possible arrangements (1 mark). Classic mistake (crossed): "(b) increases because the reaction is exothermic".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: ΣS°(products) = 2(256.8) = 513.6 J K⁻¹ mol⁻¹; ΣS°(reactants) = 2(248.2) + 205.2 = 701.6 J K⁻¹ mol⁻¹ (1 mark); ΔS° = 513.6 − 701.6 = −188.0 J K⁻¹ mol⁻¹ (1 mark); negative, so entropy decreases, which supports the prediction in (b) (1 mark). Classic mistake (crossed): setting S°(O₂) = 0, giving +17.2 J K⁻¹ mol⁻¹.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Water | S°(l) 70.0; S°(g) 188.8; +118.8 J K⁻¹ mol⁻¹ | 2 |
| Gas against solid | O₂(g) 205.2; C(graphite) 5.7 (5.740) J K⁻¹ mol⁻¹ | 3, 6 |
| Haber | Δn(gas) = −2; 2(192.8) = 385.6; 191.6 + 3(130.7) = 583.7; ΔS° = −198.1 J K⁻¹ mol⁻¹ | 1, 3, 7, 14 |
| Methane to steam | 591.4 − 596.7 = −5.3 J K⁻¹ mol⁻¹ | 5, 8 |
| Carbon burning | 213.8 − (5.7 + 205.2) = +2.9 J K⁻¹ mol⁻¹ | 8 |
| A1 | (a) gas 0 → 1, +; (b) gas 3 → 2, − | 10, 11 |
| A2 | 2(256.8) = 513.6; 2(248.2) + 205.2 = 701.6; −188.0; O₂ slip +17.2 | 12, 13 |
| Handoff | ΔH°(Haber) = 2(−45.9) = −91.8 kJ mol⁻¹ | 14, final frame |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 188.8 − 70.0 = 118.8.
- 2 × 192.8 = 385.6; 191.6 + 3 × 130.7 = 583.7; 385.6 − 583.7 = −198.1.
- 213.8 + 2 × 188.8 = 591.4; 186.3 + 2 × 205.2 = 596.7; 591.4 − 596.7 = −5.3.
- 213.8 − 5.740 − 205.2 = 2.86.
- 2 × 256.8 = 513.6; 2 × 248.2 + 205.2 = 701.6; 513.6 − 701.6 = −188.0; 513.6 − 496.4 = 17.2. (With OpenStax's 256.76: −188.08.)
- 2 × (−45.9) = −91.8.
- OpenStax Appendix G values as listed under "Data source" in Decisions.

## Memory aid check

- **"Count the gas first. A tie? Look it up."** Written for this lesson from the site's priority rule and the route stop ("recognise where sign heuristics are insufficient, and consult standard entropy references"). Meaning, as said in scenes 9 and 14: compare moles of gas first; if they are equal, use standard entropy data. Assumptions checked: "first" because a change in gas count usually outweighs other effects (author note a); states matter when no gas changes (rule 1 still applies, for example a solid dissolving or a liquid freezing); the aid is a routine for the sign, not a calculation. It helps a new case: A1 and A2.
- **Considered, not used:** "More gas, more mess" (rhymes, but "mess" revives the disorder nickname that v11 set aside).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,600 characters**, 15 scenes (per scene: 310, 518, 535, 481, 311, 528, 564, 388, 184, 248, 270, 346, 411, 431, 75; Revision 1: 5,665). At 13.3 characters per second the speech is about 421 s; add about 12 s of settling (the tallies and arrangement readout in 3, the columns in 4, the cooling ladder in 6, the live sums in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 514 s** (Revision 1: about 517 s), above the 5,500-character floor.

## Scene list and build ids

Lesson key `c-y11-m4-v12` (route chem-y11-m4-v12; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v12`.

In order (15 scene headings, all `### N.`): hook-prediction, rule-states, rule-gas-count, sorting-reactions, the-tie, standard-entropy-third-law, calculate-ds, tie-settled, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v11's final frame into scene 1 by camera continue; 1 to 2 camera continue (the dry ice card comes forward); 2 to 3 camera continue (the Haber card comes forward); 3 to 4 clear change to the classification board; 4 to 5 camera continue; 5 to 6 camera continue (the data strip leads into the cooling ladder); 6 to 7 clear change to the calculation board; 7 to 8 camera continue; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v12-learning-review.md`, `checks/c-y11-m4-v12-science-check.md`.

## Assets

Have (inspected 6 November on a dark contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/y11c-dry-ice-v1.png` (1619 × 972; dry ice pellets in a dish): opening, scene 2 (Revision 2: large, a stage of its own).
- **Inspected, not used:** `c7-ammonia-storage-tank-v1.png` (industrial; the Haber reaction here is an equation, and v13 owns industry talk); `c9-no2-tube-brown-v1.png` (equilibrium colour is Year 12).

Need: no new plates.

Coded: equation cards, gas tallies, molecule tiles, arrangement counter, S° bars, classification board, ion inset, cooling ladder, data strip, calculation rows, balance beam, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `module4/lesson11.sa.html` (`l11-predicting-the-sign-of-s-title`) and `module4/lesson12.sa.html` (`l12-the-third-law-and-absolute-entropy-title`, `l12-calculating-s-using-standard-entropy-values-title`) and the site notes' quotations.
3. Confirm the OpenStax Chemistry 2e Appendix G values listed under "Data source" (including SO₃ 256.76 and Mg²⁺(aq) −138.1).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested (the balance beam is a plain coded beam); no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m4-v11's final frame, and send the final frame to the m4-v13 designer.

## YouTube metadata (draft)

Title: Predicting the Sign of ΔS from a Balanced Equation | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Can a balanced equation tell you whether entropy increases or decreases? Compare the states, count the moles of gas, and learn when those rules can't decide. Then use standard entropies and the third law to calculate ΔS° (products minus reactants), with the ammonia synthesis as the worked example and a methane case where the gas count ties. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"use modelling to illustrate entropy changes in reactions"
"predict entropy changes from balanced chemical reactions to classify as increasing or decreasing entropy"

Previous: How does entropy describe spreading and possible particle arrangements? Next: How do enthalpy, entropy and temperature determine spontaneity?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Data source (root).** OpenStax Appendix G throughout (Haber −198.1 against the site's −198.9). Root to confirm, consistent with v09 to v14.
- **2. A2 data (Codex).** SO₃ shown as 256.8 (OpenStax 256.76), giving −188.0; if root prefers the unrounded value, the card shows 256.76 and the answer −188.1 (narration "minus one hundred and eighty-eight" unchanged).
- **3. Spoken "S nought" (voicing pilot).** The Google voice may say "S nought" oddly; fallback "standard entropy" everywhere (about 40 characters more).
- **4. Length (learning review).** About 517 s and 5,665 characters, with room to spare under the cap; no cut is needed. If scene 4's dissolving sentences are cut for focus (about 200 characters), the "usually" caveat moves to a grey tag and the count falls to about 5,465, so scene 6 or 7 would need a matching addition to stay above 5,500.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the third-law sentence followable without the entropy build-up graph; does scene 7's arithmetic pace suit Year 11), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 3 should fix; all resolved in Revision 2.
- Checker output (Revision 2, 6 November): narration 5,600 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted exactly in its scene's Visual in spoken order (scene 11 "S" and scene 13 "sign" now quoted).

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v12-learning-review.md`, `checks/c-y11-m4-v12-science-check.md`; both list the same three):
1. Phase-change temperature (should fix): scene 2 now says "In these tables, the gas has about a hundred and nineteen more per mole" (shorter than "Boiling one mole raises its entropy by about a hundred and nineteen joules per kelvin"); the bracket reads "S°(g) − S°(l) = 188.8 − 70.0 = 118.8 J K⁻¹ mol⁻¹" with a grey tag "table values, 25 °C". Rule 1's decision and new author note (g) record that boiling at 100 °C has ΔS of about +109 J K⁻¹ mol⁻¹ (40.7 kJ mol⁻¹ ÷ 373 K).
2. Gas-count heuristic (should fix): scene 5 now says "A tie means the gas count alone can't decide. It can't tell us whether delta S is positive or negative, or how large it is." The "ΔS ≈ 0?" chips become "gas count: can't decide"; scene 8 says "The count couldn't decide, and the data told us the sign." The decision, cause chain item 5, key note 3 and author note (a) match; author note (a) adds the reviewers' tied case 2Al(s) + 3H₂O(g) → Al₂O₃(s) + 3H₂(g), ΔS° = −180.0 J K⁻¹ mol⁻¹ (Python, OpenStax values). "Count the gas first. A tie? Look it up." is kept.
3. Standard temperature (should fix): scene 6 now says "the entropy of one mole at a hundred kilopascals, listed in our tables at twenty-five degrees"; the gloss reads "S°: the entropy of 1 mol of a substance at 100 kPa" with a grey tag "these tables: 25 °C"; the decision and key note 4 match, consistent with m4-v08, v13 and v14. The third-law explanation and non-zero element entropies are unchanged.

Visual upgrade (teaching logic unchanged):
- Scene 1 already opens on the painted dry ice (m4-v11's final frame, unchanged); scene 2 makes it a large painted stage.
- Live readouts: the arrangement readout (scene 3) recounts m4-v11's two-jar arrangements as the tiles regroup (2⁴ = 16 to 2² = 4); the live sums (scene 7) fill two bars to 385.6 and 583.7, and the gap becomes −198.1.
- Stage list written (Board layout); scene 8 returns to the classification board, so no set-up runs past about 65 s.
- Framed answers with a green tick: −198.1 (7), −5.3 and +2.9 (8), the A1 rows (feedback 1), −188.0 (feedback 2). Crossed slips carry red hand tags.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 8).
- Bold cues now quoted exactly: scene 11 "S", scene 13 "sign".
- Memory line as a framed card; key notes cut to five short bullets (about 380 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The opening and the final frame are unchanged, so the joins with m4-v11 and m4-v13 hold.

New plate requests: none.

Counts: 5,600 characters (Revision 1: 5,665); about 517 s to about 514 s.
