# Year 11 Chemistry M4 V06: Bond enthalpies. How do broken and formed bonds determine an approximate enthalpy change? (design)

Status: Revision 2 (6 Nov 2026): brief 184 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,160 characters, 18 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: sixth Module 4 video of Year 11 Chemistry (2017 syllabus), playlist entry 75, between `chem-y11-m4-v05` and `chem-y11-m4-v07`; a concept and calculation video. Templates: `chem-y11-m4-v05.md` and `chem-y11-m4-v04.md` (same designer, series layout and level diagrams), `chem-y11-m4-v01.md` (energy-profile colour key), `math-a12-d10.md` (calculation layout), `phys-y11-fa1-v01.md`, `bio-y11-fa1-v05.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m4-v06` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Count every broken/formed bond, apply energy in minus energy out, and explain the conservation reason and average bond-energy limitation."; next handoff: "Why can we add reaction enthalpies along different paths?"). Site lesson read in full (6 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module4/lesson06.sa.html` (SHA256 `931953cd3b32025c2e38c8b66fb63d21f8afcc998385d9fc7bf96a89f946d908`, recomputed, matches the route), sections `l06-the-bond-energy-calculation-method-title`, `l06-worked-examples-title`. Used: the lesson question ("if breaking every bond costs energy, why do so many reactions still release energy overall"); the Think First ammonia prediction ("Most students predict endothermic because breaking N≡N sounds so expensive"); the method (balanced equation, structural formulas, count bonds × coefficients, ΔH = Σ(broken) − Σ(formed)); the enthalpy-ladder diagram (reactants, isolated gaseous atoms, products); worked example 1 (methane combustion to H₂O(g)) and worked example 2's reaction (ethene hydrogenation, reused as attempt 1); the fill-blanks reaction (H₂ + Cl₂ → 2HCl); the two limitations (average bond enthalpies; gaseous state, about 44 kJ per mole of water condensing); traps 1 to 3 (reversed formula; miscounting CO₂ and 2H₂O; giving one reason only). Changed: the bond enthalpy values are taken from one cited table (IB Chemistry data booklet), which changes C=O (804 against the site's 743) and O–H (463 against 460); see site note 1 and author note a. Not used: the Haber history and fertiliser anchor, ΔH against Eₐ for nitrogen (v05 covered the catalyst; Eₐ is not needed here), the propane and methanol drills.

Owner rules applied: as `chem-y11-m4-v05.md` (one learner question; no people, hands or faces; molecules as coded structural formulas and ball-and-stick sketches; energy ladders, tables and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 4, Enthalpy and Hess's Law; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C4-IQ2-01`: "explain the enthalpy changes in a reaction in terms of breaking and reforming bonds, and relate this to:"
  - "the law of conservation of energy"
- `C4-IQ2-02` (bond energy part; v07 owns the stepped-reaction part): "investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 44)

**Boundary:** opens on m4-v05's final frame (the ammonia overlay profile, ΔH = −92 kJ mol⁻¹ with or without iron, the iron pellets, "Where does −92 kJ come from?"; Revision 2: no bond sketches, which scene 1 draws on its cues). Teaches: a prediction (strong N≡N: energy in or out?); breaking a bond takes energy in, forming one gives energy out, by the same amount (the conservation reason); bond enthalpy (per mole, gas molecules, mostly averages; not on the HSC data sheet); the two-stage picture (break everything into atoms, then form the products) for H₂ + Cl₂; ΔH = energy in − energy out; ammonia (−93 against −92); totals matter, not one strong bond; counting bonds from structures for methane combustion; −808 against −802 (steam) and −890 (liquid water); the two limitations; the two traps; memory aid. Not taught: Hess's law as a general rule and manipulating equations (v07), formation enthalpies (v08), activation energy (v05), bond polarity.

## Decisions

- **Learner question (route wording kept).** "How do broken and formed bonds determine an approximate enthalpy change?" The answer, in order: breaking bonds takes energy in and forming them gives energy out (2); bond enthalpies put numbers on each (3); ΔH is the total in minus the total out (4, 5); the sign depends on totals, not on one strong bond (6, 7); counting from structures (8, 9); the answer is approximate because the values are averages and apply to gases (10).
- **Opening frame (equals `chem-y11-m4-v05.md`'s final frame, same designer).** The ammonia overlay profile (reactants "N₂(g) + 3H₂(g)", products "2NH₃(g)", solid and dashed paths, amber Eₐ arrows, red ΔH arrow "ΔH = −92 kJ mol⁻¹ (with or without iron)"); `c7-iron-catalyst-pellets-v1.png` small at the lower left; no bond sketches (Revision 2, brief 184: they draw on scene 1's cues, so the join is exact); amber chip "Where does −92 kJ come from? The bonds broken and the bonds formed."; the "Next" chip, which fades.
- **Prediction (3 s, scene 1; site Think First).** "N≡N is one of the strongest bonds there is. Making ammonia: energy in, or energy out?" Answer: out (ΔH negative), the site's planned surprise.
- **Bonds and conservation (scene 2; `C4-IQ2-01`).** A covalent bond as a shared pair attracted to both nuclei (m1, recalled). Breaking works against the attraction: energy in. Forming lets the attraction act: energy out. Forming gives out exactly the energy that breaking the same bond takes; otherwise breaking and remaking a bond repeatedly would create energy, which the law of conservation of energy forbids. This is the syllabus link, stated as a cause.
- **Bond enthalpy (scene 3).** "The energy needed to break one mole of a particular bond in gas molecules" (site key term, worded plainly). Example H–H 436 kJ mol⁻¹. The HSC data sheet prints no bond enthalpies (checked against the official 2019 sheet, 6 November; author note b), so questions supply them. Most values are averages over many molecules (H–H, Cl–Cl and H–Cl are exact for those diatomic molecules; on screen only as a grey tag).
- **Values (author note a).** One cited table throughout: IB Diploma Programme Chemistry data booklet (first assessment 2016), section 11 "Bond enthalpies and average bond enthalpies at 298 K": H–H 436, Cl–Cl 242, H–Cl 431, N≡N 945, N–H 391, C–H 414, O=O 498, C=O 804, O–H 463, C=C 614, C–C 346 kJ mol⁻¹. Every question card prints the values it needs.
- **Two-stage ladder (scenes 4, 5, 6, 9, 17).** Coded enthalpy ladder (v04 level-diagram style): reactants at the left, "separate atoms" high above, products at the right; a blue up arrow (break, energy in), an orange down arrow (form, energy out), and the net ΔH arrow. Not to scale (tag). The ladder is also the handoff to v07 (an imaginary route that still gives ΔH).
- **Formula (scene 5).** "ΔH = Σ(bonds broken) − Σ(bonds formed)", read aloud as "energy in minus energy out". The site's "reactants first" warning is in the trap scene (11).
- **H₂ + Cl₂ first (scenes 4, 5; site fill-blanks).** 436 + 242 = 678 in; 2 × 431 = 862 out; ΔH = −184 kJ mol⁻¹ (data −185, 2 × −92.3; author note c). A one-bond-each case shows the method before counting gets hard.
- **Ammonia (scenes 6, 7; the opening case resolved).** 945 + 3 × 436 = 2253 in; 6 × 391 = 2346 out; ΔH = −93 kJ mol⁻¹ (data −92). The narration says "hydrogen to hydrogen bond", never "hydrogen bond" (a different attraction from m1).
- **Methane (scenes 8, 9; site worked example 1 with the cited values).** CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g). Coded structural formulas (H–C–H cross, O=O, O=C=O, H–O–H bent), each bond ticked as it is counted. 4 × 414 + 2 × 498 = 2652 in; 2 × 804 + 4 × 463 = 3460 out; ΔH = −808 kJ mol⁻¹. Calculation layout as v03 (task strip, equation strip, grouped givens, one row per stage).
- **Approximate (scene 10; route stop).** Gas-phase data value −802 kJ mol⁻¹ (steam); difference from averages. Liquid water: about 44 kJ more per mole of water as steam condenses; −802 − 88 ≈ −890, the value from m4-v01. Both limitations are spoken, as the site's trap 3 expects two.
- **Traps (scene 11; site traps 1 and 2).** Crossed "CO₂: one C=O" (gives −4 kJ mol⁻¹, an absurd value); crossed "formed − broken = +808".
- **Memory aid:** "Break: energy in. Make: energy out. ΔH = in − out." (see "Memory aid check"), scene 12.
- **Attempts (original wording, HSC style).** A1 (calculate; the site's ethene hydrogenation with the cited values printed): broken 614 + 4 × 414 + 436 = 2706; formed 346 + 6 × 414 = 2830; ΔH = −124 kJ mol⁻¹. Crossed: "+124 (formed − broken)". A2 (explain the methane gap, two reasons): averages; gaseous state against liquid water. Crossed: "heat lost to the surroundings" (no experiment was done).
- **Mistake scene:** none separate. "A strong bond means endothermic" (1, 7); reversed formula (11; crossed in A1); miscounting CO₂ (11); "hydrogen bond" for H–H (spoken care); heat loss as a reason for a calculated value (crossed in A2).
- **Handoff (route next: `chem-y11-m4-v07`, "Why can we add reaction enthalpies along different paths?").** Scene 17: the ladder is an imaginary route through separate atoms, yet it gives about the right ΔH; why can enthalpies be added along a different path? Final frame: see "Opening frame and final frame".
- **Site notes (read 6 November; for root to log if accepted; module 4 lesson 6):**
  1. Worked example 1, drills 1 to 3, Q6 and Q7 use C=O = 743 kJ mol⁻¹ for carbon dioxide. 743 to 745 kJ mol⁻¹ is the average C=O in aldehydes and ketones; the C=O bonds in CO₂ are much stronger (the IB data booklet lists C=O 804; CO₂'s atomisation enthalpy, 1608 kJ mol⁻¹, gives 804 per bond). With 804 and O–H 463, methane gives −808 kJ mol⁻¹ against −802 (steam) and about −890 (liquid water). The site's −674 and its explanation ("the remaining ~128 kJ comes from using mean bond enthalpies ... the average-bond-enthalpy error is the larger contribution") are artefacts of the 743 value; the same applies to Q7 (ethene, 271 kJ attributed to averages). Suggest using one cited table with C=O 804 (or naming "C=O in CO₂: 804") and rewriting the comparison: averages cause a small gap; the liquid-water condensation (about 44 kJ per mole of water) accounts for most of the rest.
  2. Key term "Accuracy of bond energy method: ... less accurate than Hess's Law or calorimetry". School calorimetry is far less accurate than bond enthalpies (m4-v03: 54% low). Suggest "less accurate than calculations from standard enthalpies of formation".
  3. Quick prerequisite: "the idea that chemical bonds store energy". Breaking bonds takes energy in, so "bonds store energy" invites the reverse idea (the same issue as lesson 1, logged in `chem-y11-m4-v01.md` site note 2). Suggest "the idea that breaking a bond takes energy and forming one releases it".
  4. Q8(b) model answer: "The law of conservation of energy says this reaction should release energy". Conservation of energy does not predict the sign; the bond enthalpies do. Suggest "Bond enthalpies show that more energy is released forming bonds than is absorbed breaking them".
  - Checked and correct (with the site's own values): worked example 2 (2706, 2831, −125); drill 4 and Q8 (2253, 2346, −93); fill-blanks (679, 864, −185); drills 1 and 2 sums (6496, 8138); Q6 sums (2809, 3326).
- **Cause chain taught, in order:** (1) a bond is an attraction, so separating bonded atoms takes energy in and letting them bond gives energy out (2); (2) the energy out on forming equals the energy in on breaking, or energy could be created (2); (3) ΔH is everything taken in minus everything given out (5); (4) the sign depends on the totals, so several weaker bonds formed can outweigh one strong bond broken (7); (5) every bond counts, so structures, not formulas, give the count (8); (6) table values are averages for gases, so the answer is approximate and misses condensation energy (10).
- **Entry knowledge:** m1 covalent bonding, Lewis and structural formulas, single, double and triple bonds; m4-v01 (ΔH sign, methane −890 with liquid water); m4-v05 (the ammonia profile); m3-v04 (combustion equations, recalled).
- **Learner-visible vocabulary (plain meaning at first use):** bond enthalpy (3); average bond enthalpy (3); law of conservation of energy (2: "energy can't be created or destroyed").
- **Legacy logic ported:** none. (The legacy `molecule3d` type is frozen; structural formulas here are coded 2D.)
- **Explainer motion (coded unless a plate is named):** **bond lens** (scene 2: two atoms with a shared pair; pulled apart against a stretching spring-like attraction line with a blue arrow in; snapping together with an orange arrow out); **bond table** (scene 3 onward: a small table strip at the right, each value lighting when used); **energy ladder** (scenes 4 to 6, 9, 10, 17); **structure board** (scene 8: structural formulas with each bond ticked as counted, counters "broken: 6" and "formed: 6"); **calculation board** (scenes 5, 6, 9, 14); **comparison scale** (scene 10: a number line −680 to −900 with −808 (our value), −802 (data, steam) and −890 (data, liquid water) marked, the 44 × 2 step bracketed); `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v04 and v05):** energy in (bonds broken) cool blue, up arrows; energy out (bonds formed) warm orange, down arrows; ΔH red when negative, blue when positive; atoms H white, C dark grey, O red, N blue, Cl green; data values slate blue; crossed items red strike.
- **Board layout (Revision 2):** heading top left. Stages, each under about 61 s: m4-v05's final frame with the painted pellets and the bond structures drawing (1); the bond lens at full width (2); the bond table stage with the gloss card (3); the HCl ladder (4, 5, about 61 s); the ammonia ladder with the live tally (6, a rebuilt stage); the two bars at full width (7); the painted Bunsen burner beside the structure board (8); the calculation layout (9); the comparison number line (10); the trap stage (11); the framed memory card (12); question cards (13 to 16); the final layout (17).
- **Colour roles (Revision 2, fixed for the whole video):** energy in (bonds broken) cool blue, up arrows; energy out (bonds formed) warm orange, down arrows; ΔH red when negative, blue when positive; atoms H white, C dark grey, O red, N blue, Cl green; data values slate blue; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the item they mark; source and recall tags grey; earlier rows dimmed.
- **Type sizes (Revision 2, 1080p):** the current calculation row at least 44 px (48 px); framed results and the running tally readout about 52 px; givens, bond table rows and ladder labels 34 to 36 px; earlier rows 30 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px (source tags 26 px). All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the running tally (scenes 6, 7).** A live readout on the core idea (the totals decide the sign, not one strong bond): with the blue arrow fixed at +2253 kJ, each N–H bond forms in turn, the orange arrow grows by 391 kJ and a running readout (52 px) "ΔH so far = in − out" steps +1862, +1471, +1080, +689, +298, then −93 kJ when the sixth bond forms. The sign flips only with the last bond, which shows that the strong triple bond is outweighed by the total formed, not by any single bond.

Author notes (not learner copy):
(a) Bond enthalpies: International Baccalaureate, Diploma Programme Chemistry data booklet (first assessment 2016), section 11, "Bond enthalpies and average bond enthalpies at 298 K" (read from the booklet PDF, 6 November): H–H 436, Cl–Cl 242, H–Cl 431, N≡N 945, N–H 391, C–H 414, O=O 498, C=O 804, O–H 463, C=C 614, C–C 346 kJ mol⁻¹. Root to confirm the citation (open decision 1).
(b) The NESA HSC Chemistry data sheet (2019, "Chemistry Formulae Sheet, Data Sheet and Periodic Table", https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-formulae-sheet-data-sheet-periodic-table-hsc-exams-2019.pdf) prints q = mcΔT, ΔG° = ΔH° − TΔS°, the specific heat capacity of water (4.18 × 10³ J kg⁻¹ K⁻¹), solubility constants, infrared, ¹³C NMR and UV data, standard potentials and the periodic table. It prints no bond enthalpies and no enthalpies of formation or combustion (pages 1 to 3 inspected as rendered images, 6 November).
(c) Data values (NBS tables, Wagman et al. 1982, ΔfH at 298 K): HCl(g) −92.31 → 2HCl −184.6; NH₃(g) −46.11 → −92.2; CO₂(g) −393.51, H₂O(g) −241.82, H₂O(l) −285.83, CH₄(g) −74.81 → −802.3 (steam), −890.4 (liquid); C₂H₄(g) +52.26, C₂H₆(g) −84.68 → −136.9. Enthalpy of vaporisation of water at 298 K: 44.0 kJ mol⁻¹.
(d) The methane residual −808 against −802 (0.7%) and ammonia −93 against −92 show the averaging error is small with these values; the learning review should not hear "averages are the main error".
(e) Pronunciations: "N triple bond N" spoken as "nitrogen triple bond"; "C H four"; "hydrogen to hydrogen bond" (never "hydrogen bond"); "carbon to oxygen double bond".

Main question: *How do broken and formed bonds determine an approximate enthalpy change?*
Entry knowledge: m1 bonding and structures; m4-v01; m4-v05.
Stops after: in minus out with conservation; three worked reactions; limitations; traps.
Handoff: chem-y11-m4-v07, Hess's law.

## Opening frame and final frame

- **Opening frame:** m4-v05's final frame exactly (Decisions).
- **Final frame (`chem-y11-m4-v07` opens on it):** the methane energy ladder at full width (coded): lower left level "CH₄(g) + 2O₂(g)"; top level "separate atoms: C + 4H + 4O (gas)"; lower right level "CO₂(g) + 2H₂O(g)", below the reactant level. A blue up arrow "break: +2652 kJ"; an orange down arrow "form: −3460 kJ"; a red dashed arrow straight from reactants to products "direct: ΔH = −808 kJ mol⁻¹". The two-stage route is labelled "imaginary route" (grey), the direct arrow "real reaction". The amber chip "Two routes, same ΔH. Why can we add enthalpies along a different path?". The chip "Next: Why can we add reaction enthalpies along different paths?" at the bottom of the safe area (above the bottom 12%).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the ammonia profile from last time, minus ninety-two kilojoules, catalyst or not. To make ammonia, the triple bond in each nitrogen molecule has to break, and it's one of the strongest bonds there is. Three hydrogen to hydrogen bonds break too, and then six new nitrogen to hydrogen bonds form. So predict. With such a strong bond to break, does making ammonia take energy in, or give energy **out**?

Visual: opens on m4-v05's final frame; the "Next" chip fades and the iron pellets stay as a small painted thumbnail (fading at the end of the scene); the dashed catalysed path fades. On "the triple bond in each nitrogen molecule" a coded structure "N≡N" (blue N atoms) draws by the reactant level (Revision 2: drawn here, not inherited), tag "one of the strongest bonds". On "Three hydrogen to hydrogen bonds" three "H–H" sketches; on "six new nitrogen to hydrogen bonds" two ammonia structures with three N–H each. Heading writes: "Where does ΔH come from?". The ΔH arrow and its value dim (no spoiler beyond the opening frame's value). Chips "energy in" and "energy out". On "out" the 3 s `Countdown` ring runs. Hand tags: blue "strong!" with a pen ring on "N≡N"; orange "6 new bonds" with a `PenArrow` to the two ammonia structures.

### 2. breaking and making
> Energy out, and to see why, think about what a bond is. A covalent bond is a shared pair of electrons, attracted to both nuclei. Pulling the two atoms apart works against that attraction, so breaking a bond always takes energy in. When two atoms come together and bond, the attraction pulls them in, so forming a bond always gives energy out. And forming a bond gives out exactly the energy it takes to break that bond. If it didn't, you could break and remake a bond over and over, and create energy from nothing. The law of conservation of energy says that's **impossible**.

Visual: "energy out" ticks. Clear change to the bond lens. On "a shared pair of electrons" two atoms with a shared pair between them, attraction lines to both nuclei. On "Pulling the two atoms apart" the atoms separate and the line stretches; a blue arrow "energy in" points into the pair. On "come together and bond" the atoms snap together; an orange arrow "energy out" leaves. On "exactly the energy it takes to break that bond" the two arrows appear side by side with an equals sign "same size". On "over and over" a loop arrow: break, make, break, make, with a growing "+energy?" counter; on "conservation of energy" gloss "law of conservation of energy: energy can't be created or destroyed"; on "impossible" the counter is crossed. Hand tags: blue "pull apart: in", orange "snap together: out"; red "same size" with a `ScribbleCircle` round the equals sign.

### 3. bond enthalpy
> The energy needed to break one mole of a particular bond, in gas molecules, is its bond enthalpy. A hydrogen to hydrogen bond takes four hundred and thirty-six kilojoules per mole. Tables list these values, but the HSC data sheet doesn't, so exam questions give you the ones you need. Most values are averages, because the same bond is a little stronger or weaker in different **molecules**.

Visual: on "bond enthalpy" gloss card "bond enthalpy: the energy needed to break 1 mol of a bond in gas molecules (kJ mol⁻¹)". On "four hundred and thirty-six" an H–H structure with "436 kJ mol⁻¹" (blue). On "Tables list these values" the bond table strip slides in at the right (H–H 436, Cl–Cl 242, H–Cl 431, N≡N 945, N–H 391, C–H 414, O=O 498, C=O 804, O–H 463; grey source tag "IB Chemistry data booklet, average bond enthalpies at 298 K"). On "the HSC data sheet doesn't" a small data-sheet thumbnail with a grey tag "no bond enthalpies: given in the question". On "averages" the C–H row gains "average"; on "molecules" three small structures (CH₄, C₂H₆, CH₃OH) each with a C–H bond glowing, labels "slightly different". Stage: the bond table and gloss card fill the right two thirds (stage change from the lens). Grey hand tag "given in the question" with a pen ring on the data-sheet thumbnail; blue hand tag "average" on the C–H row.

### 4. break everything, then build
> Start simple, with hydrogen and chlorine making hydrogen chloride. Picture it in two stages. First, break every bond in the reactants, one hydrogen to hydrogen bond and one chlorine to chlorine bond. That takes four hundred and thirty-six plus two hundred and forty-two, six hundred and seventy-eight kilojoules in. Then form the new bonds, two hydrogen to chlorine bonds, giving two times four hundred and thirty-one, eight hundred and sixty-two kilojoules **out**.

Visual: clear change to the energy ladder. Equation strip: "H₂(g) + Cl₂(g) → 2HCl(g)". On "break every bond in the reactants" the reactant level "H₂ + Cl₂" at the lower left with structures H–H and Cl–Cl; on "four hundred and thirty-six plus two hundred and forty-two" the structures split into four separate atoms rising to the top level "2H + 2Cl (separate atoms)" with a blue up arrow "+678 kJ (436 + 242)". On "form the new bonds" two H–Cl structures assemble and drop to the product level at the right, lower than the start; on "out" the orange down arrow "−862 kJ (2 × 431)". Hand tags: blue "break all" on the up arrow, orange "build new" on the down arrow, with a pen ring on the separate-atoms level.

### 5. in minus out
> So delta H is the energy in minus the energy out. Six hundred and seventy-eight minus eight hundred and sixty-two is minus one hundred and eighty-four kilojoules per mole. More energy came out forming bonds than went in breaking them, so the reaction is exothermic. The data value is minus one hundred and eighty-five, so this method gets very **close**.

Visual: equation strip on "the energy in minus the energy out": "ΔH = Σ(bonds broken) − Σ(bonds formed)" with "energy in" under the first sum (blue) and "energy out" under the second (orange). On "Six hundred and seventy-eight minus eight hundred and sixty-two" the row "ΔH = 678 − 862 = −184 kJ mol⁻¹" (red), and the red net arrow draws on the ladder from the reactant level down to the product level. On "exothermic" tag "out > in → exothermic". On "minus one hundred and eighty-five" a slate chip "data: −185 kJ mol⁻¹"; on "close" the row frames in a dark-ink box with a green tick (52 px), and the data chip sits beside it. Red hand tag "out > in: exothermic" with a `PenArrow` from the orange sum to the red result.

### 6. ammonia
> Now ammonia. Break one nitrogen triple bond, nine hundred and forty-five, and three hydrogen to hydrogen bonds, three times four hundred and thirty-six. That's two thousand two hundred and fifty-three in. Each ammonia molecule has three nitrogen to hydrogen bonds, and two molecules form, so that's six bonds, six times three hundred and ninety-one, two thousand three hundred and forty-six out. Delta H is minus ninety-three, close to the data value of minus ninety-**two**.

Visual: clear change: the ammonia ladder builds as a new stage, the painted pellets as a thumbnail top left, for "N₂(g) + 3H₂(g) → 2NH₃(g)". Givens grouped (each on cue): on "nine hundred and forty-five" "1 × N≡N = 945"; on "three times four hundred and thirty-six" "3 × H–H = 1308"; on "two thousand two hundred and fifty-three" the blue up arrow "+2253 kJ" to "2N + 6H (separate atoms)". On "three nitrogen to hydrogen bonds" one NH₃ structure with its three N–H ticked; on "two molecules form" the second; on "six times three hundred and ninety-one" "6 × N–H = 2346"; the orange down arrow grows bond by bond with the running tally (Decisions) "ΔH so far": +1862, +1471, +1080, +689, +298, −93 kJ, ending "−2346 kJ". On "minus ninety-three" the row "ΔH = 2253 − 2346 = −93 kJ mol⁻¹" (red); on "two" the slate chip "data: −92 kJ mol⁻¹" and the row frames in a dark-ink box with a green tick. Hand tags: blue "2253 in", orange "2346 out"; red hand tag "flips on bond 6" with a pen ring on the tally's last step.

### 7. totals, not one bond
> So the strong triple bond doesn't make the reaction endothermic. It costs a lot, but forming six bonds pays back slightly more. What decides the sign isn't one strong bond. It's the total energy in compared with the total energy **out**.

Visual: on "costs a lot" the N≡N share of the blue arrow highlights (945 of 2253). On "forming six bonds pays back slightly more" the orange arrow's six segments (391 each) light one by one and end just past the blue arrow's length; the 93 kJ overhang is bracketed. On "total energy in" and "total energy out" two stacked bars, blue 2253 and orange 2346, side by side; on "out" the longer orange bar pulses. Stage: the two bars run full width (stage change from the ladder). Orange hand tag "just past" with a `ScribbleCircle` round the 93 kJ overhang.

### 8. counting from structures
> For bigger molecules, draw the structures and count every bond. When methane burns, each methane molecule has four carbon to hydrogen bonds, and each of the two oxygen molecules has one double bond. In the products, carbon dioxide has two carbon to oxygen double bonds, and each water molecule has two oxygen to hydrogen bonds, so two waters have **four**.

Visual: clear change to the structure board, with `p01-bunsen-lit-v2.png` large at the left (grey tag "natural gas: mostly methane"). Equation strip "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)" (tag "water as a gas: bond enthalpies are for gases"). On "four carbon to hydrogen bonds" the CH₄ structure draws and its four C–H bonds tick blue; on "one double bond" two O=O structures, each double bond ticked. Counter "broken: 4 C–H, 2 O=O". On "two carbon to oxygen double bonds" O=C=O draws with both bonds ticked orange; on "two oxygen to hydrogen bonds" one bent H–O–H; on "four" the second water draws and the counter "formed: 2 C=O, 4 O–H". Hand tags: blue "count every bond" with a pen ring on one ticked C–H; orange "two waters, four O–H" on the counter.

### 9. the methane calculation
> Energy in is four times four hundred and fourteen, plus two times four hundred and ninety-eight, which is two thousand six hundred and fifty-two. Energy out is two times eight hundred and four, plus four times four hundred and sixty-three, three thousand four hundred and sixty. So delta H is two thousand six hundred and fifty-two minus three thousand four hundred and sixty, minus eight hundred and **eight**.

Visual: calculation layout beside the structures. Task strip "ΔH for methane burning (bond enthalpies)". Rows on cue: "in: 4 × 414 + 2 × 498 = 1656 + 996 = 2652 kJ" (blue); "out: 2 × 804 + 4 × 463 = 1608 + 1852 = 3460 kJ" (orange); "ΔH = 2652 − 3460 = −808 kJ mol⁻¹" (red; on "eight" it frames in a dark-ink box with a green tick, 52 px). The bond table strip lights C–H, O=O, C=O and O–H in turn. A small ladder at the lower right fills with "+2652" and "−3460". Stage: the calculation layout takes the right two thirds; the structures and the Bunsen plate shrink to the left. Blue and orange hand tags "in" and "out" on the two sums; the current row is 48 px.

### 10. why it's approximate
> How good is that? Bond enthalpies are for gases, so this calculation makes steam, and the data value for that is minus eight hundred and two. That's close, but not exact, because the table uses averages, and the bonds in these molecules aren't exactly average. If the water ends up as a liquid, more energy comes out as the steam condenses, about forty-four kilojoules for each mole of water. That gives the minus eight hundred and ninety we met at the start of this **module**.

Visual: the comparison scale draws (number line −780 to −900). On "minus eight hundred and two" a slate marker "data, steam: −802"; our marker "bonds: −808" beside it, the small gap bracketed with "averages". On "about forty-four kilojoules for each mole of water" a coded steam cloud condensing to droplets with "−44 kJ per mol H₂O" and "× 2 = −88". On "minus eight hundred and ninety" the slate marker "data, liquid water: −890" with the step from −802 bracketed "−88"; on "module" a grey tag "m4-v01: CH₄ + 2O₂ → CO₂ + 2H₂O(l), −890 kJ mol⁻¹". Two limitation chips settle: "1. bond enthalpies are averages" and "2. they apply to gases (no condensation energy)". Hand tags: slate "small gap: averages" on the −802 bracket; orange "condensing gives more" with a `PenArrow` from the droplets to −890.

### 11. two traps
> Two traps. Carbon dioxide has two double bonds, not one, so count from the structure, never from the formula. And the order matters. It's bonds broken minus bonds formed. Doing it the other way round flips the **sign**.

Visual: on "two double bonds, not one" a crossed chip "CO₂: one C=O → ΔH = −4 kJ mol⁻¹" with O=C=O ringed. On "bonds broken minus bonds formed" the equation strip pulses. On "sign" a crossed chip "formed − broken = 3460 − 2652 = +808". Grey tag: "formation enthalpies use a different order (later in Module 4)". Stage: the two crossed chips fill the frame. Each carries a red hand tag ("count from the structure", "broken minus formed").

### 12. the line to remember
> Here's the line to remember. Break, energy in. Make, energy out. Delta H is in minus **out**.

Visual: the memory line writes large in the explainer's hand font as a framed card (dark ink, 44 px): "Break: energy in. Make: energy out. ΔH = in − out." On "Break" a blue up arrow; on "Make" an orange down arrow; on "out" the ladder from scene 9 returns small under it.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Use bond enthalpies to calculate delta H when ethene reacts with hydrogen to form ethane. The values are, carbon to carbon double bond, six hundred and fourteen, carbon to carbon single bond, three hundred and forty-six, carbon to hydrogen, four hundred and fourteen, and hydrogen to hydrogen, four hundred and thirty-six kilojoules per mole. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Ethene reacts with hydrogen to form ethane: C₂H₄(g) + H₂(g) → C₂H₆(g). Use the bond enthalpies in the table to calculate ΔH for this reaction. Bond enthalpies (kJ mol⁻¹): C=C 614; C–C 346; C–H 414; H–H 436. (3 marks)" Structural formulas of ethene, hydrogen and ethane are drawn on the card (no bonds ticked). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Broken: one carbon double bond, four carbon to hydrogen bonds and one hydrogen to hydrogen bond, two thousand seven hundred and six. Formed: one carbon single bond and six carbon to hydrogen bonds, two thousand eight hundred and thirty. So delta H is minus one hundred and twenty-four kilojoules per mole. Formed minus broken would give plus one hundred and twenty-four, the wrong **sign**.

Visual: card shrinks to the top; bonds tick on the card's structures as counted. Rows: "broken: 614 + 4 × 414 + 436 = 2706 kJ" (blue); "formed: 346 + 6 × 414 = 2830 kJ" (orange); "ΔH = 2706 − 2830 = −124 kJ mol⁻¹" (red). On "sign" a chip "2830 − 2706 = +124 kJ mol⁻¹" fades in and is crossed. Hold about 1 second. The ΔH row frames in a dark-ink box with a green tick (52 px). The crossed chip carries a red hand tag "wrong order".

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A bond enthalpy calculation gives minus eight hundred and eight kilojoules per mole for burning methane, but the data value, which forms liquid water, is minus eight hundred and ninety. Give two reasons for the difference. Pause here to answer.

Visual: `QuestionCard`: "Using bond enthalpies, a student calculates ΔH = −808 kJ mol⁻¹ for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O. The data value for the standard enthalpy of combustion of methane, which forms H₂O(l), is −890 kJ mol⁻¹. Give TWO reasons for the difference between these values. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> First, bond enthalpies are averages, so they don't exactly match the bonds in these molecules. Second, bond enthalpies apply to gases, but the data value forms liquid water, which releases extra energy as it condenses. Heat loss isn't a reason, because nothing was measured in a **calorimeter**.

Visual: card shrinks. Rows on cue: "1. average bond enthalpies, not the exact bonds in CH₄, O₂, CO₂ and H₂O"; "2. bond enthalpies are for gases; forming H₂O(l) releases extra energy (about 44 kJ per mol of water)". On "calorimeter" a chip "heat lost to the surroundings" fades in and is crossed, note "no experiment". Hold about 1 second. Both rows frame in a dark-ink box with a green tick. The crossed chip carries a red hand tag "no experiment".

### 17. conclusion and handoff
> So broken and formed bonds give an approximate delta H. It's the energy in to break every bond, minus the energy out to form the new ones. But notice what we did. We never followed the real reaction. We imagined pulling everything apart into atoms, then building the products, and still got about the right answer. Why can we add enthalpies along a different **path**?

Visual: the memory line returns small at the top. On "the energy in to break every bond" and "the energy out to form the new ones" the methane ladder returns at full width with "break: +2652 kJ" and "form: −3460 kJ". On "We never followed the real reaction" a red dashed arrow draws straight from reactants to products, "direct: ΔH = −808 kJ mol⁻¹", labelled "real reaction"; on "imagined pulling everything apart into atoms" the up and down arrows are labelled "imaginary route" (grey) and the top level reads "separate atoms: C + 4H + 4O (gas)". On "path" the amber chip "Two routes, same ΔH. Why can we add enthalpies along a different path?" and the chip "Next: Why can we add reaction enthalpies along different paths?" write. Hold about 2 seconds. This is the final frame (m4-v07 opens on it).

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Breaking a bond takes energy in; forming it releases the same energy.
2. Bond enthalpy: energy to break 1 mol of a bond in gas molecules (mostly averages).
3. ΔH = Σ(bonds broken) − Σ(bonds formed).
4. Draw structures; count every bond × coefficient (CO₂ has two C=O).
5. Approximate: averages, and gases only (liquid water releases about 44 kJ more per mol).

Memory aid (framed card, on the notes screen): *Break: energy in. Make: energy out. ΔH = in − out.*

At the end the notes cross-fade back to scene 17's final frame.

## Teaching checks

- **Does it explain causes?** Why breaking takes energy and forming releases it (2); why the two are equal (2: conservation); why ΔH is in minus out (5); why one strong bond does not decide the sign (7); why structures are needed (8); why the answer is approximate (10).
- **Misconceptions addressed:** strong bonds make a reaction endothermic (1, 7); bonds "store" energy that breaking releases (2); reversed formula (11; crossed in A1); CO₂ with one C=O (11); heat loss as a reason for a calculated value (crossed in A2).
- **One idea at a time:** prediction (1), bond energetics (2), bond enthalpy (3), two stages (4), formula (5), ammonia (6, 7), counting (8), methane (9), limitations (10), traps (11), memory line (12).
- **Video makes it easier:** atoms pulled apart against a stretching attraction line and snapping together (2); a ladder that goes up to separate atoms and down to products (4 to 6); bonds ticked on structures as they are counted (8, 14); blue and orange bars of nearly equal length (7); a number line placing −808, −802 and −890 (10).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 29 s and 21 s.
- **Avoided double teaching:** covalent bonding and structures (m1); the methane −890 value (m4-v01); the ammonia profile and catalysts (m4-v05).
- **Syllabus coverage:** `C4-IQ2-01` enthalpy changes explained by breaking and forming bonds (2, 4 to 9) and related to conservation of energy (2); `C4-IQ2-02` bond energy data used to quantify ΔH (5, 6, 9, A1); the stepped-reaction part is v07's.
- **Out of scope by design:** Hess's law as a rule and equation manipulation (v07); formation enthalpies (v08); bond polarity and bond length.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: Bonds broken: 1 C=C + 4 C–H + 1 H–H = 614 + 4(414) + 436 = 2706 kJ (1 mark). Bonds formed: 1 C–C + 6 C–H = 346 + 6(414) = 2830 kJ (1 mark). ΔH = 2706 − 2830 = −124 kJ mol⁻¹ (1 mark). (Data value about −137 kJ mol⁻¹; not required.) Classic mistake (crossed): ΔH = 2830 − 2706 = +124 kJ mol⁻¹.

**Attempt 2 (scene 15; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: Bond enthalpies are average values from many compounds, so they differ slightly from the actual bond strengths in CH₄, O₂, CO₂ and H₂O (1 mark). Bond enthalpies apply to gaseous substances; the data value forms liquid water, and condensing water vapour releases additional energy (about 44 kJ per mole), so the data value is more negative (1 mark). Classic mistake (crossed): "heat was lost to the surroundings".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bond enthalpies (IB data booklet) | H–H 436; Cl–Cl 242; H–Cl 431; N≡N 945; N–H 391; C–H 414; O=O 498; C=O 804; O–H 463; C=C 614; C–C 346 kJ mol⁻¹ | 3 to 9, 13, 14 |
| HCl | 678 in; 862 out; −184; data −185 | 4, 5 |
| Ammonia | 2253 in; 2346 out; −93; data −92 (opening value) | opening, 6, 7 |
| Methane | 2652 in; 3460 out; −808; data −802 (steam), −890 (liquid); 44 × 2 = 88 | 8 to 10, 15 to 17, final frame |
| Traps | one C=O: −4; reversed +808 | 11 |
| A1 | 2706; 2830; −124; slip +124 (data −137, note only) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 November); Codex to re-check.

- 436 + 242 = 678; 2 × 431 = 862; 678 − 862 = −184; 2 × (−92.31) = −184.6.
- 945 + 3 × 436 = 2253; 6 × 391 = 2346; −93; 2 × (−46.11) = −92.2.
- 4 × 414 + 2 × 498 = 1656 + 996 = 2652; 2 × 804 + 4 × 463 = 1608 + 1852 = 3460; −808.
- −393.51 + 2(−241.82) + 74.81 = −802.3; −393.51 + 2(−285.83) + 74.81 = −890.4; −241.82 − (−285.83) = 44.0.
- One C=O slip: 2652 − (804 + 1852) = −4.
- 614 + 1656 + 436 = 2706; 346 + 2484 = 2830; −124; 52.26 → −84.68: −136.9.
- Site values: 2652 − (2 × 743 + 4 × 460) = −674 (site note 1).

## Memory aid check

- **"Break: energy in. Make: energy out. ΔH = in − out."** Meaning: breaking bonds absorbs energy, forming bonds releases it, and ΔH is the absorbed total minus the released total. Assumptions checked: it uses positive bond enthalpies for both sums (the convention in the formula and on every card); "in − out" gives Σ(broken) − Σ(formed), the correct order, so it also blocks the reversed formula; it does not claim bonds store energy. It applies only to bond enthalpy calculations; v08 gives formation enthalpies their own order and the contrast is taught there.
- **Considered, not used:** the site's "bonds you break (reactants) minus bonds you make (products)" (kept in spirit; "in − out" is shorter and states the cause) and the site's lesson 7 letter tricks ("Formation → f → first ...", inconsistent between sections; logged in m4-v08).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **6,160 characters**, 18 scenes (per scene: 403, 572, 387, 462, 350, 471, 233, 352, 407, 474, 215, 89, 375, 386, 254, 291, 364, 75; Revision 1: 6,160). At 13.3 characters per second the speech is about 463 s; add about 12 s of settling (the bond lens in 2, the ladders in 4 and 6, the running tally in 6 and 7, the structure board in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 60 s in all): **about 556 s** (Revision 1: about 554 s).

## Scene list and build ids

Lesson key `c-y11-m4-v06` (route chem-y11-m4-v06; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m4-v06`.

In order (18 scene headings, all `### N.`): hook-prediction, breaking-and-making, bond-enthalpy, two-stages, in-minus-out, ammonia, totals, counting, methane-calculation, approximate, traps, memory-line, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m4-v05's final frame into scene 1 by camera continue (the bond structures draw on their cues); 1 to 2 clear change to the bond lens; 2 to 3 camera continue; 3 to 4 clear change to the ladder; 4 to 5 camera continue; 5 to 6 camera continue (the ladder rebuilds); 6 to 7 camera continue; 7 to 8 clear change to the structure board; 8 to 9 camera continue; 9 to 10 clear change to the number line; 10 to 11 camera continue; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m4-v06-learning-review.md`, `checks/c-y11-m4-v06-science-check.md`.

## Assets

Have:
- `public/assets/chemistry/c7-iron-catalyst-pellets-v1.png` (1800 × 1019; heap of grey porous pellets): opening and scene 1 (Revision 2: stays as a small painted thumbnail through scene 1, then fades).
- `public/assets/chemistry/p01-bunsen-lit-v2.png` (2000 × 2000; a lit Bunsen burner with a blue flame; inspected 6 November on a dark sheet): scenes 8 to 10 (Revision 2: the real anchor for methane burning; grey tag "natural gas: mostly methane"; uniform scaling, never stretched).

Need: no new plates. Bonds, structures, ladders and numbers are coded, as the owner rule requires; the two existing plates above anchor the ammonia and methane cases.

Coded: structures, bond lens, bond table, ladders, bars, number line, condensing-steam sketch, calculation rows, chips, cards, countdowns, key notes board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the bond enthalpy values against the cited IB data booklet table (author note a) and the data values against the NBS tables (author note c).
3. Confirm the site content used matches `module4/lesson06.sa.html` (method, ladder, worked examples, limitations, traps) and log the four site notes, site note 1 first.
4. Confirm the HSC data sheet statement (author note b).
5. Confirm both attempt cards are original, carry every needed value, and show nothing answer-bearing.
6. Confirm the syllabus quotes match `chem-2017-y11.json`.
7. Confirm no person, hand or face is drawn or requested; structures are drawn correctly (O=C=O linear; H₂O bent; NH₃ three N–H); no em dash (U+2014); Australian spelling; the narration never says "hydrogen bond" for H–H.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame equals m4-v05's final frame, and send the final frame to the m4-v07 designer.

## YouTube metadata (draft)

Title: Bond Enthalpies: Energy In, Energy Out and ΔH | Year 11 Chemistry Module 4

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Making ammonia means breaking one of the strongest bonds there is, yet the reaction releases energy. Learn why breaking bonds takes energy in, why forming them gives the same energy back, and how ΔH = bonds broken − bonds formed. Work through hydrogen chloride, ammonia and methane, count bonds from structures, and see why bond enthalpy answers are approximate. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 4: Drivers of Reactions.
Syllabus content (NSW Chemistry Stage 6):
"explain the enthalpy changes in a reaction in terms of breaking and reforming bonds, and relate this to: the law of conservation of energy"
"investigate Hess’s Law in quantifying the enthalpy change for a stepped reaction using standard enthalpy change data and bond energy data, for example: (ACSCH037)"

Previous: Why does a catalyst change activation energy but not reaction enthalpy? Next: Why can we add reaction enthalpies along different paths?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Bond enthalpy source (root).** The IB data booklet table (author note a) replaces the site's values so that CO₂'s C=O is 804, not 743. This changes the methane worked example from the site's −674 to −808 and its explanation (site note 1). Alternatives: another cited Australian textbook table with C=O(CO₂) about 800; or keep the site's values and teach the site's explanation (not recommended: it attributes most of the gap to averaging, which is not right for CO₂).
- **2. Scene 2 length (learning review).** About 560 characters, carrying both the energy directions and the conservation reason. If it is too dense, split after "gives energy out" into two scenes (no new narration).
- **3. Data-sheet sentence (Codex).** "The HSC data sheet doesn't" depends on author note b; if a future sheet adds values, change to "exam questions give you the ones you need".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the conservation argument in scene 2 followable; does the ammonia surprise land before the methane counting), then the science check and Codex error check.
- Checker output (6 November): see "Narration length estimate"; no em dash; every quoted cue found in its scene's narration in spoken order.
- Brief 184 reviews (6 November): 0 blocker, 0 should fix, 1 optional; the optional join fix is made in Revision 2.
- Checker output (Revision 2, 6 November): narration 6,160 characters (per scene in "Narration length estimate"); no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 184 findings (`checks/c-y11-m4-v06-learning-review.md`, `checks/c-y11-m4-v06-science-check.md`; both list the same one):
1. Opening-frame join (optional, accepted): the opening frame no longer lists faint N≡N, H–H and N–H sketches; scene 1 draws the structures on its existing narration cues ("the triple bond in each nitrogen molecule", "Three hydrogen to hydrogen bonds", "six new nitrogen to hydrogen bonds"). m4-v05's Revision 2 fades its sketches before its final frame, so the two frames now match. The Boundary line and the scene 1 transition are updated. No narration changes.

Visual upgrade (teaching logic unchanged):
- Scene 1 keeps m4-v05's painted iron pellets as a thumbnail through the scene. `p01-bunsen-lit-v2.png` (existing, inspected) anchors methane burning in scenes 8 to 10.
- Live readout: the running tally (scenes 6, 7): with +2253 kJ in, each N–H bond formed steps "ΔH so far" +1862, +1471, +1080, +689, +298, −93 kJ (Python: 2253 − 391k for k = 1 to 6); the sign flips only with the sixth bond.
- Stage list written (Board layout): the bond table (3), the ammonia ladder (6), the bars (7) and the trap chips (11) become their own stages, so the Revision 1 ladder stretch (scenes 4 to 7, about 114 s) splits into stages of 61 s or less.
- Framed answers with a green tick: −184 (5), −93 (6), −808 (9), −124 (feedback 1), both reasons (feedback 2). Crossed slips carry red hand tags.
- Hand tags and a pen mark in role colours in every teaching scene (1 to 11).
- Memory line as a framed card; key notes cut to five short bullets (about 390 characters of bullet text).
- Decisions gain "Colour roles", "Type sizes", "Simulation" and a revised "Board layout".
- Question cards already arrive with their full text; unchanged. The final frame is unchanged (m4-v07 opens on it).

New plate requests: none.

Counts: 6,160 characters (Revision 1: 6,160, unchanged); about 554 s to about 556 s.
