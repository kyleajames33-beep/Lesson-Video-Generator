# Year 11 Chemistry M2 V06: Mole ratios. Why do reaction coefficients give mole ratios rather than mass ratios? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,671 characters, 17 scenes, about 516 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: sixth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 38, between `chem-y11-m2-v05` and `chem-y11-ws-v06`. Templates: `chem-y11-m1-v07.md` (Year 11 calculation video), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry practical conventions `chem-m8-p02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v06` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use a balanced equation and a continuous-variation investigation to establish a whole-number amount ratio"; practical: "Teacher-approved continuous-variation investigation"; next handoff: "How can a chemistry model solve an unfamiliar quantitative problem?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson11.sa.html` (SHA256 `1c1afd11799fc27c88f06f6c643be9e8cc0f475b4a4f3a4a9c62c620a3ba8d83`, recomputed, matches the route), sections `l11-conservation-title` and `l11-jobs-title`. Used: 2H₂ + O₂ → 2H₂O as the anchor ("a molar recipe"); "Coefficients ... mole ratio, not subscripts" and traps 1 and 2; the general rule n(wanted) = n(given) × coeff(wanted) ÷ coeff(given); the 2Al + 3Cl₂ → 2AlCl₃ drill (0.40 mol Al needs 0.60 mol Cl₂); the continuous variation (Job's) method with 1.0 mol L⁻¹ HCl and NaOH, 40 mL total, 5 mL steps, polystyrene cup, peak at 20 : 20; "Why total volume must stay constant"; the quick check's X + 2Y idea (made into attempt 1 with a real 1 : 2 reaction). Not used: balancing by inspection in full (taught in `chem-y11-m2-v01`; recalled), the propane worked example, percentage yield and limiting-reagent items (m2-v08 and later).

Owner rules applied: as `chem-y11-m2-v05.md`, plus practical conventions (apparatus alone, no hands; safety stated where the practical is shown; illustrative data tagged; teacher-approved practical named as such). Analogy objects (a bicycle frame and wheels) are painted plates, not coded icons, and contain no rider.

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophe in "Avogadro's" shown corrected, root decision 9):

- `C2-IQ2-02`: "conduct an investigation to determine that chemicals react in simple whole number ratios by moles"
- `C2-IQ2-03`: "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v05's final frame (2H₂ + O₂ → 2H₂O, "2 : 1 : 2", "mass ratio?"). Teaches: coefficients count particles, so they scale to moles (Avogadro's constant recalled); the mass ratio differs because particles differ in mass; mass is still conserved (the C2-IQ1-02 link, recalled from m2-v01); a count-recipe analogy; coefficient versus subscript; using a mole ratio as a scaling factor; the continuous variation investigation (equal concentrations so volume ratio is mole ratio; constant total volume; temperature rise as the measure of reaction; why the peak marks the ratio; lines of best fit crossing). Not taught: mass-to-mass calculation (m2-v07), limiting and excess reagents by name (m2-v08; scene 11 says "left over" only), concentration as c = n ÷ V (m2-v10; scene 10 says "every millilitre holds the same number of moles"), enthalpy.

## Decisions

- **Learner question (route wording kept).** "Why do reaction coefficients give mole ratios rather than mass ratios?" The answer, in order: coefficients count particles (3); a count scales to moles (3); particles of different substances have different masses, so the masses are in a different ratio (4); mass is conserved in total, not shared out by coefficient (5); a recipe that counts parts (6); only coefficients carry the ratio (7); experiments confirm whole-number mole ratios (9 to 11).
- **Opening frame (equals `chem-y11-m2-v05.md`'s final frame, same designer).** Fe₂O₃ atom-tile and mass-share pair at the left; "2H₂ + O₂ → 2H₂O" centre with amber coefficients and "2 : 1 : 2"; "mass ratio?" chip; the "Next" chip, which fades as scene 1 starts.
- **Hook and prediction (scenes 1, 2).** "Does 2 g of hydrogen react with 1 g of oxygen to make 2 g of water?" The answer fails twice over (2 + 1 ≠ the product would still be conserved, but the proportions are wrong), which the student can feel before being told.
- **Particles to moles (scene 3).** Particle diagram (HSC convention: H white, O red, ball pairs): 2 H₂ + 1 O₂ → 2 H₂O, atoms counted 4 H and 2 O each side (m2-v01 recalled). "Two dozen need one dozen" bridges to "two moles need one mole"; Avogadro's constant 6.02 × 10²³ recalled from m2-v02.
- **Masses (scene 4).** HSC data-sheet values, the course convention from `chem-y11-m2-v03.md` (H 1.008, O 16.00): 2 mol H₂ 4.03 g; 1 mol O₂ 32.00 g; 2 mol H₂O 36.03 g; mass ratio about 1 : 7.9 : 8.9, spoken "roughly one to eight to nine" and shown "≈ 1 : 8 : 9". An O₂ molecule is about 16 times heavier than an H₂ molecule (15.9).
- **Conservation (scene 5; `C2-IQ1-02` link).** 4.03 + 32.00 = 36.03 g. Two true statements from one balanced equation: moles react in the coefficient ratio; total mass is unchanged. The false third: masses react in the coefficient ratio.
- **Analogy (scene 6).** Two wheels for every bicycle frame: a count ratio, not a mass ratio. Assumptions checked (see "Memory aid check"): every wheel is identical and every frame is identical, as every molecule of one substance is; the analogy is not stretched to products or to bonds. Painted plates (frame and wheel, no rider).
- **Coefficient versus subscript (scene 7; site traps 1 and 2).** "Two different twos" in 2H₂O. The site's trap 1 example is muddled (site note 1); the video uses its own clean version.
- **Using a ratio (scene 8; site drill 2).** 2Al + 3Cl₂ → 2AlCl₃; 0.40 mol Al × 3 ÷ 2 = 0.60 mol Cl₂; the site's general rule on screen. No masses (m2-v07 owns mass to mass).
- **Investigation (scenes 9 to 11; `C2-IQ2-02`; site method).** Teacher-approved; 1.0 mol L⁻¹ HCl and NaOH ("the same concentration"; concentration is named, its formula is m2-v10's); 40 mL total in 5 mL steps; polystyrene foam cup with thermometer; temperature rise measured. Why equal concentrations: "every millilitre holds the same number of moles, so a volume ratio is a mole ratio" (the step the site leaves implicit). Why constant total volume: site's reason. Why a peak: "too little acid, base left over; too much acid, acid left over; only at the right ratio is everything used up, so the most heat". Lines of best fit through each side cross at 20 mL : 20 mL, which is better evidence than the single highest point (the true ratio may fall between mixtures). Illustrative data (tagged): 1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6 °C at 5 to 35 mL HCl (author note c). Safety: glasses; both solutions corrosive at 1.0 mol L⁻¹ (author note d).
- **Memory aid:** "Coefficients count; masses weigh." (see "Memory aid check").
- **Attempts (original, HSC style).** A1 (continuous variation, a 1 : 2 reaction): 1.0 mol L⁻¹ sulfuric acid and 1.0 mol L⁻¹ sodium hydroxide, 30 mL total, 5 mL steps; ΔT 4.4, 8.8, 6.6, 4.4, 2.2 °C at 5, 10, 15, 20, 25 mL acid (illustrative). Model: lines cross at 10 mL acid : 20 mL base, so 1 : 2, consistent with H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Crossed: "1 : 1, because the reactants were the same concentration". A2 (mass versus mole): N₂ + 3H₂ → 2NH₃; a student claims 28.0 g of N₂ needs 3 × 28.0 = 84.0 g of H₂ (N 14.01, H 1.008). Model: 28.0 g N₂ is 0.999 mol, so it needs 3.00 mol H₂, which is 6.04 g; the coefficient is a mole ratio. Crossed: the student's 84.0 g.
- **Mistake scene:** none separate. "Coefficients are grams" (1 to 4; crossed in A2); "mass splits by coefficient" (5); "the subscript gives the ratio" (7); "equal concentration means 1 : 1" (crossed in A1); "the highest point is the ratio" (11).
- **Handoff (route next: `chem-y11-ws-v06`, "How can a chemistry model solve an unfamiliar quantitative problem?").** Scene 16 collects the model built so far (moles count particles; n = m ÷ MM; mole ratios from coefficients and from formulae) and sets it against an unfamiliar problem: an old jar of copper sulfate crystals whose crystals lose only 30.2% of their mass. `chem-y11-ws-v06.md` (same designer) opens on this frame.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Formula reference warning and trap 1: "In 2H₂O, the subscript 2 in H₂ tells you atoms in one molecule" (2H₂O contains no H₂), and "Students who confuse these extract ratios like H:O = 2:1 when the correct ratio from 2H₂ + O₂ → 2H₂O is H₂:O₂ = 2:1" (both ratios are 2 : 1, so the example shows no error). Suggest: "In 2H₂O, the subscript 2 (in H₂O) counts hydrogen atoms in one molecule; the coefficient 2 counts molecules (or moles). Reading the subscript as a mole ratio would wrongly give water : hydrogen = 1 : 2 from H₂O alone."
  2. `l11-jobs-title` "Keeping the total volume fixed means the total number of moles of reactant ... is the same in every mixture": true only because step 1 makes the two concentrations equal; suggest adding "(because both solutions have the same concentration)".
  3. `l11-jobs-title` method: 1.0 mol L⁻¹ NaOH and HCl are corrosive or irritant; the card gives no safety note. Suggest "safety glasses; teacher-approved concentrations; rinse spills with water".
  4. MC explanation "The ratio H₂:H₂O = 2:2 = 1:1, so 3.0 mol H₂ → 3.0 mol H₂O ... However the student's reasoning about the '1:1 ratio' is misleading": the explanation refers to options the page doesn't show beside it; low priority.
  - Checked and correct: worked examples 1 to 4; drills 1 to 5; data table rows 1 to 6; Q6 to Q10 (percentage yield 75.0%; 4.00 mol SO₃).
- **Cause chain taught, in order:** (1) coefficients count particles (3); (2) a count multiplied by Avogadro's constant is still a count, so coefficients are mole ratios (3); (3) each particle has its own mass, so equal counts are unequal masses (4); (4) atoms are rearranged, so total mass is conserved (5); (5) subscripts belong to the substance, coefficients to the reaction (7); (6) equal concentrations turn volume ratios into mole ratios (10); (7) the most reaction happens when nothing is left over (11).
- **Entry knowledge:** m2-v01 (balancing, conservation of mass), m2-v02 (mole, Avogadro's constant), m2-v03 (molar mass), m2-v05 (empirical formula: atoms combine by count); Stage 5 neutralisation (acid + base → salt + water, releases heat); ws-v04 and ws-v05 (graphs, lines of best fit, illustrative data).
- **Learner-visible vocabulary (plain meaning at first use):** coefficient (the big number in front, 7); subscript (the small number inside a formula, 7); mole ratio (3); continuous variation (mixing two reactants in changing proportions with the same total, 9); concentration (how much substance is dissolved in each millilitre, 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **equation strip** carried in; **particle diagram** (ball molecules that rearrange; HSC colours); **count-up** (two molecules → two dozen → two moles; the "6.02 × 10²³" chip); **mass bars** (three bars to scale, 4.03, 32.00 and 36.03 g; the first two stack to equal the third); **ratio chips** (mole ratio teal, mass ratio amber); **analogy plates** (frame and wheels on one pan of a coded double label, count tag versus mass tag); **two-twos callout** (large and small "2" circled in different colours); **scaling row** (n(wanted) = n(given) × coeff ratio, one row at a time); **mixing strip** (seven foam cups with coded volume labels and a coded thermometer readout over each); **`LineGraph`** (ΔT against volume of HCl, points plot as each cup is read, two lines of best fit, crossing marked); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** hydrogen white, oxygen red, nitrogen blue, aluminium grey, chlorine green; coefficients and mole ratios teal; masses and mass ratios amber; acid volumes navy, base volumes violet; ΔT points ink; best-fit lines grey; illustrative-data tag grey; crossed items red strike.
- **Board layout (constant):** heading top left; equation strip across the top; particles, plates or cups in the left half; bars, working rows or the graph in the right half.

Author notes (not learner copy):
(a) Masses (data sheet): 2 × (2 × 1.008) = 4.032 g; 2 × 16.00 = 32.00 g; 2 × (2 × 1.008 + 16.00) = 36.032 g; 4.032 : 32.00 : 36.032 = 1 : 7.94 : 8.94. O₂ ÷ H₂ = 32.00 ÷ 2.016 = 15.87.
(b) Al drill: 0.40 × 3 ÷ 2 = 0.60 mol (site).
(c) Ideal ΔT for x mL of 1.0 mol L⁻¹ HCl with (40 − x) mL of 1.0 mol L⁻¹ NaOH: water formed = min(x, 40 − x) mmol; ΔT ≈ n × 57.1 kJ mol⁻¹ ÷ (40 g × 4.18 J g⁻¹ °C⁻¹) = 0.342 °C per mmol: 1.71, 3.42, 5.12, 6.83, 5.12, 3.42, 1.71 °C. The illustrative set (1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6) is a few per cent lower, as real cups lose heat. Lines of best fit: left about 0.33x, right about 0.33(40 − x); cross at x = 20.
(d) Safety: 1.0 mol L⁻¹ NaOH is corrosive to eyes and skin; 1.0 mol L⁻¹ HCl is an irritant; safety glasses, teacher-approved concentrations, spills rinsed with plenty of water. Science check against current NSW school chemical-safety guidance; a school may use 0.5 or 1.0 mol L⁻¹ (the peak position is the same; ΔT halves at 0.5).
(e) A1: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O; x mL acid, (30 − x) mL base, both 1.0 mol L⁻¹: water = min(2x, 30 − x) mmol; ideal ΔT = n × 57.1 ÷ (30 × 4.18) = 0.455 °C per mmol: 4.55, 9.11, 6.83, 4.55, 2.28 at 5 to 25 mL. Illustrative values 4.4, 8.8, 6.6, 4.4, 2.2 (about 3% lower). Lines: left 0.88x, right 0.44(30 − x); cross at x = 10. Real sulfuric acid neutralisation releases slightly more heat per mole of water (dilution); the peak position is unaffected.
(f) A2: N₂ 28.02 g mol⁻¹; 28.0 ÷ 28.02 = 0.9993 mol; H₂ 2.998 mol × 2.016 = 6.044 g (6.04 g). The student's 84.0 g is 3 × 28.0.
(g) Pronunciations: "two H two plus O two makes two H two O"; "two A l plus three C l two"; "six point zero two times ten to the twenty-three"; "N two plus three H two makes two N H three".

Main question: *Why do reaction coefficients give mole ratios rather than mass ratios?*
Entry knowledge: m2-v01 to m2-v05; Stage 5 neutralisation.
Stops after: coefficients as particle and mole ratios; masses differ, total conserved; coefficient versus subscript; scaling by a ratio; continuous variation establishing a whole-number ratio. No mass-to-mass calculation (m2-v07), no limiting reagent (m2-v08).
Handoff: chem-y11-ws-v06, solving an unfamiliar problem with the model.

## Opening frame and final frame

- **Opening frame:** m2-v05's final frame exactly (Decisions).
- **Final frame (ws-v06 opens on it):** at the left, a jar of old copper sulfate crystals (`y11c-cuso4-old-crystals-v1.png`, new: blue crystals with a pale, whitish powdery crust) beside the white-powder crucible; a chip "lost only 30.2% of its mass" (navy) against the gold "formula: 36.1%"; at the right, a "model" panel of three teal chips: "moles count particles", "n = m ÷ MM", "ratios come from moles (formulae and equations)"; between them an amber "?"; the chip "Next: How can a chemistry model solve an unfamiliar quantitative problem?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: two, one, two of what?
> The iron oxide showed us that atoms combine by count, not by mass. Now look at a reaction. Two H two plus O two makes two H two O, and the coefficients are two, one and two. So does two grams of hydrogen react with one gram of oxygen, to make two grams of **water**?

Visual: opens on m2-v05's final frame; the "Next" chip fades; the Fe₂O₃ pair slides to a thumbnail at the top left. On "coefficients" the three amber coefficients pulse in turn. On "two grams" three gram chips "2 g", "1 g", "2 g?" write under the formulae. On "water" the heading writes: "Mole ratios, not mass ratios".

### 2. prediction (countdown, 3 seconds)
> Yes or no? And if not, what do the two, one and two actually **count**?

Visual: chips "yes" and "no", and "count what?". On "count" the 3 s `Countdown` ring runs.

### 3. coefficients count particles
> No. Coefficients count particles. Two hydrogen molecules react with one oxygen molecule to make two water molecules. Count the atoms, and there are four hydrogens and two oxygens on each side, just as we balanced equations **earlier**. Now scale it up. Two dozen hydrogen molecules need one dozen oxygen molecules. And two moles need one mole, because a mole is just a very large count, six point zero two times ten to the twenty-three **particles**. So the coefficients give a mole ratio, two to one to **two**.

Visual: the gram chips are crossed. The particle diagram: two white H₂ pairs and one red O₂ pair rearrange into two bent H₂O molecules. On "earlier" atom tallies "4 H, 2 O | 4 H, 2 O" with a tick (grey tag "balancing video"). On "Two dozen" the diagram multiplies into a 2 : 1 block of 24 and 12 molecules (coded, small). On "particles" a chip "1 mol = 6.02 × 10²³ particles" (grey tag "the mole video"); the block blurs into labels "2 mol", "1 mol", "2 mol". On "two" (last) a teal chip "mole ratio 2 : 1 : 2".

### 4. but the masses
> Now the masses. Two moles of hydrogen molecules weigh about four grams. One mole of oxygen weighs thirty-two grams. And two moles of water weigh about thirty-six **grams**. So the mass ratio is roughly four to thirty-two to thirty-six, or about one to eight to nine. That's nothing like two to one to two, because each oxygen molecule is about sixteen times heavier than a hydrogen **molecule**.

Visual: givens (navy): "H 1.008, O 16.00 g mol⁻¹ (data sheet)". Under each formula a mass bar grows to scale as spoken: "4.03 g" (short), "32.00 g" (long), and on "grams" "36.03 g" (longest). On "one to eight to nine" an amber chip "mass ratio ≈ 1 : 8 : 9" beside the teal "mole ratio 2 : 1 : 2". On "molecule" a single H₂ and a single O₂ appear on a coded two-pan comparison, the O₂ pan lower, tag "16 × heavier".

### 5. what a balanced equation does promise
> But notice what does hold. Four point zero three plus thirty-two point zero zero is thirty-six point zero **three**. Mass is conserved, because the same atoms are just rearranged. So a balanced equation promises two things. Moles react in the ratio of the coefficients, and the total mass stays the **same**. It never promises that masses react in the ratio of the **coefficients**.

Visual: on "three" the 4.03 g and 32.00 g bars slide end to end and match the 36.03 g bar exactly (tick, "conserved"). On "same" two teal ticks write: "moles react in the coefficient ratio" and "total mass is conserved". On "coefficients" a third line "masses react in the coefficient ratio" writes and is crossed.

### 6. a recipe that counts parts
> Here's a picture that helps. To build a bike, you need two wheels for every frame. That's a count ratio, two to one. But nobody says you need two kilograms of wheels for every kilogram of frame. The recipe counts parts, and their masses depend on what each part weighs. A chemical equation works the same way, with moles as the **count**.

Visual: board change. The frame plate (`y11c-bike-frame-v1.png`, new) and two wheel plates (`y11c-bike-wheel-v1.png`, new, used twice) slide in as a 2 : 1 group, tag "2 wheels : 1 frame (count)". On "two kilograms" a chip "2 kg wheels : 1 kg frame?" fades in and is crossed. On "count" the group shrinks beside the equation strip, the "2 : 1" tag aligned under "2H₂ + O₂".

### 7. two different twos
> One trap. In two H two O, there are two different twos. The big two in front is the coefficient, and it counts water molecules. The small two is the subscript, and it counts hydrogen atoms inside one molecule. Mole ratios come only from the **coefficients**. And when balancing, change coefficients, never subscripts, because changing a subscript makes a different **substance**.

Visual: "2H₂O" writes large. On "big two" a teal circle rings the coefficient, tag "coefficient: counts molecules (moles)"; on "small two" a grey circle rings the subscript, tag "subscript: atoms in one molecule". On "coefficients" the teal tag glows. On "substance" "H₂O → H₂O₂?" writes, the "₂" amber, with a tag "hydrogen peroxide: a different substance" and a cross on the edit.

### 8. using a mole ratio
> Using a ratio is just scaling. In two A l plus three C l two, making two A l C l three, aluminium and chlorine react two to **three**. So zero point four zero moles of aluminium needs zero point four zero times three over two, which is zero point six zero moles of **chlorine**. Wanted equals given, times the wanted coefficient over the given **coefficient**.

Visual: equation strip "2Al + 3Cl₂ → 2AlCl₃"; on "three" teal "Al : Cl₂ = 2 : 3". Task strip "How many moles of Cl₂ react with 0.40 mol of Al?"; givens "n(Al) = 0.40 mol". On "chlorine" row "n(Cl₂) = 0.40 × 3 ÷ 2 = 0.60 mol" (bright). On "coefficient" the rule writes: "n(wanted) = n(given) × coeff(wanted) ÷ coeff(given)".

### 9. testing it: continuous variation
> But how do we know reactions really follow whole-number mole ratios? We can test it. In the continuous variation method, we mix two reactants in changing proportions, always with the same total volume, and measure something that shows how much reaction **happened**. For hydrochloric acid and sodium hydroxide, that's the temperature rise, because the reaction releases **heat**.

Visual: board change. Gloss chip "continuous variation: change the proportions, keep the total the same". A row of seven foam cup plates (`m6-foam-cup-calorimeter-v1.png`, small, uniform scale) slides in. On "happened" a thermometer readout chip appears over the first cup. On "heat" the equation "HCl + NaOH → NaCl + H₂O" writes above with a small "heat released" tag (grey, "Stage 5").

### 10. why equal concentrations and a fixed total
> Both solutions have the same concentration, so every millilitre holds the same number of moles. That makes a volume ratio a mole **ratio**. We mix five millilitres of acid with thirty-five of base, then ten and thirty, and so on, always forty millilitres in **total**. Keeping the total fixed means the only thing that changes is how the moles are **split**. Safety glasses go on, because both solutions are corrosive or irritating at this **strength**.

Visual: two coded reagent labels "HCl 1.0 mol L⁻¹" (navy) and "NaOH 1.0 mol L⁻¹" (violet); gloss chip "same concentration: same moles in every mL"; on "ratio" a tag "volume ratio = mole ratio". On "total" each cup gains a two-colour label as spoken ("5 + 35", "10 + 30", "15 + 25", "20 + 20", "25 + 15", "30 + 10", "35 + 5"), with a small "40 mL" under each. On "split" the navy and violet parts of each label slide to show the changing split at a constant total height. On "strength" the safety glasses plate (`m5x-safety-glasses-v1.png`) sets down at the left, tag "glasses; teacher-approved solutions".

### 11. the peak marks the ratio
> The temperature rise climbs, peaks at twenty millilitres of each, then falls **again**. Why a peak? With too little acid, some base is left over with nothing to react with. With too much acid, it's the other way round. Only at the right ratio is everything used up, so that mixture releases the most heat. Draw a straight line through each side, and where they cross is the ratio, twenty to twenty, or one to **one**. That crossing is better evidence than the single highest point, because the true ratio could fall between two **mixtures**.

Visual: a `LineGraph` builds at the right: "ΔT (°C)" against "volume of HCl (mL), total 40 mL"; each cup's readout drops onto the graph as a point (1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6), grey tag "illustrative data". On "again" the points are all plotted. On "too little acid" the left cups' labels show a violet leftover chip "base left over"; on "too much acid" the right cups show a navy chip "acid left over"; the 20 + 20 cup gains a tick "all used up: most heat". On "straight line" two grey lines of best fit draw and on "one" their crossing is marked at 20 mL with the chip "20 : 20 = 1 : 1" (teal), which matches "HCl : NaOH = 1 : 1" from the equation. On "mixtures" a ghost point slides between 15 and 20 mL, tag "true ratio could fall between".

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. The same method is used with sulfuric acid and sodium hydroxide, both at the same concentration, thirty millilitres in total. The biggest temperature rise comes near ten millilitres of acid. Use the data to find the mole ratio, and write the balanced equation. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student mixed 1.0 mol L⁻¹ sulfuric acid, H₂SO₄, with 1.0 mol L⁻¹ sodium hydroxide, NaOH, keeping the total volume at 30 mL, and recorded the temperature rise. Volume of H₂SO₄ (mL): 5, 10, 15, 20, 25. Temperature rise (°C): 4.4, 8.8, 6.6, 4.4, 2.2. (a) Use the data to determine the mole ratio in which H₂SO₄ and NaOH react. (b) Write a balanced equation consistent with this ratio. The products are sodium sulfate, Na₂SO₄, and water. (3 marks)" The data also show as a small table (no graph). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The lines through each side cross at ten millilitres of acid and twenty of base. Equal concentrations mean that's a mole ratio of one to two. So H two S O four plus two N a O H makes N a two S O four plus two H two **O**. Saying one to one, because the concentrations were equal, is the classic slip. Equal concentrations make volumes count moles. They don't make the ratio one to **one**.

Visual: card shrinks to the top. A small `LineGraph` of the five points with two best-fit lines crossing at 10 mL (tag "10 mL acid : 20 mL base"). Rows: "(a) 10 : 20 by volume = 1 : 2 by moles"; on "O" "(b) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O". On "one" (last) a chip "1 : 1 (equal concentrations)" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. For N two plus three H two making two N H three, a student says twenty-eight point zero grams of nitrogen needs three times twenty-eight point zero, or eighty-four point zero grams of hydrogen. Evaluate this claim. Pause here to answer.

Visual: `QuestionCard`: "N₂ + 3H₂ → 2NH₃. A student claims: '28.0 g of N₂ reacts with 3 × 28.0 = 84.0 g of H₂, because the coefficients are 1 and 3.' Evaluate the student's claim, including a calculation of the mass of H₂ that reacts. (N = 14.01, H = 1.008) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The claim is wrong. Twenty-eight point zero grams of nitrogen is almost exactly one mole. The equation says one mole of nitrogen needs three moles of hydrogen, and three moles of H two is only about six grams. The student treated the coefficients as a mass ratio. They're a mole **ratio**.

Visual: card shrinks to the top. Rows: "n(N₂) = 28.0 ÷ 28.02 = 0.999 mol"; "n(H₂) = 0.999 × 3 = 3.00 mol"; "m(H₂) = 3.00 × 2.016 = 6.04 g"; on "ratio" the student's "84.0 g" fades in and is crossed, tag "coefficients are moles, not grams". Hold about 1 second.

### 16. conclusion and handoff
> So coefficients count particles, and that makes them mole ratios. Masses follow from moles, and the total mass is conserved. Experiments confirm the whole-number ratios. Now we have a model, moles, molar mass and ratios. Can it solve a problem we haven't seen? An old jar of copper sulfate crystals loses only thirty point two percent of its mass. How can a chemistry model solve an unfamiliar quantitative **problem**?

Visual: the memory line writes at the top in hand lettering: "Coefficients count; masses weigh." A strip writes as spoken: "coefficients count particles → mole ratios → masses from moles; total conserved → experiment confirms whole numbers". On "model" three teal chips stack at the right: "moles count particles", "n = m ÷ MM", "ratios come from moles (formulae and equations)". On "old jar" the old-crystals plate slides in at the left beside the white-powder crucible, with the navy chip "lost only 30.2%" against the gold "formula: 36.1%" and an amber "?" between plate and model panel. On "problem" the chip "Next: How can a chemistry model solve an unfamiliar quantitative problem?" writes. Hold about 2 seconds. This is the final frame (ws-v06 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Coefficients count particles, so they give the mole ratio: 2H₂ + O₂ → 2H₂O is 2 : 1 : 2 by moles (about 1 : 8 : 9 by mass).
2. Mass is conserved in total (4.03 + 32.00 = 36.03 g), but masses do not react in the coefficient ratio.
3. Coefficient (in front) counts molecules; subscript (inside) counts atoms in one molecule. Balance with coefficients only.
4. n(wanted) = n(given) × coeff(wanted) ÷ coeff(given).
5. Continuous variation: equal concentrations, constant total volume; the lines of best fit cross at the mole ratio.

Memory aid (large, on the notes screen): *Coefficients count; masses weigh.*

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why coefficients are mole ratios (counts scale; 3); why mass ratios differ (particle masses; 4); why total mass is conserved (5); why subscripts can't change (7); why equal concentrations make volume ratios mole ratios (10); why the total is fixed (10); why the peak marks the ratio (11); why crossing lines beat the highest point (11).
- **Misconceptions addressed:** coefficients are grams (1 to 4; crossed in A2); masses split by coefficient (5); subscripts give the ratio (7); equal concentration means 1 : 1 (crossed in A1); highest point is the ratio (11).
- **One idea at a time:** counts (3), masses (4), conservation (5), analogy (6), two twos (7), scaling (8), method (9, 10), result (11).
- **Video makes it easier:** molecules rearrange and multiply into moles (3); mass bars to scale stack to the product (4, 5); wheels and frame (6); two circled twos (7); cups with split labels and a graph that builds point by point, leftover chips on each side (10, 11).
- **Response opportunity:** one 3 s prediction (2); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 29 s and 22 s.
- **Avoided double teaching:** balancing (m2-v01), the mole (m2-v02), molar mass (m2-v03) recalled; mass-to-mass left to m2-v07; limiting reagent named only as "left over" (m2-v08).
- **Syllabus coverage:** `C2-IQ2-02` (9 to 11, A1); `C2-IQ2-03` (3, 4, 8, A2).
- **Out of scope by design:** mass-to-mass calculation, limiting reagent, c = n ÷ V, enthalpy.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) The temperature rise is greatest near 10 mL of acid; lines of best fit through the rising and falling points cross at 10 mL H₂SO₄ : 20 mL NaOH (1 mark). Because the concentrations are equal, equal volumes contain equal moles, so the mole ratio H₂SO₄ : NaOH = 1 : 2 (1 mark). (b) H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O (1 mark). Classic mistake (crossed): "1 : 1 because the concentrations are equal".

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: n(N₂) = 28.0 ÷ 28.02 = 0.999 mol (1 mark). Mole ratio N₂ : H₂ = 1 : 3, so n(H₂) = 3.00 mol; m(H₂) = 3.00 × 2.016 = 6.04 g (1 mark). The claim is incorrect: the coefficients give a mole ratio, not a mass ratio; H₂ molecules are much lighter than N₂ molecules (1 mark). Classic mistake (crossed): the student's 84.0 g.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Avogadro's constant | 6.02 × 10²³ | 3 |
| Masses (H 1.008, O 16.00) | 4.03 g, 32.00 g, 36.03 g; ≈ 1 : 8 : 9; ≈ 16 × heavier | 4, 5 |
| Al and Cl₂ | 2 : 3; 0.40 mol → 0.60 mol | 8 |
| Mixtures | 5 + 35 to 35 + 5 mL, total 40 mL; 1.0 mol L⁻¹ | 10 |
| ΔT (illustrative) | 1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6 °C; cross at 20 : 20 | 11 |
| A1 | 30 mL; 1.0 mol L⁻¹; 4.4, 8.8, 6.6, 4.4, 2.2 °C; cross at 10 : 20; 1 : 2 | 12, 13 |
| A2 | 28.0 g; 28.02; 0.999 mol; 3.00 mol; 6.04 g; claim 84.0 g | 14, 15 |
| Handoff | 30.2%; 36.1% | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 2 × 2.016 = 4.032; 2 × 16.00 = 32.00; 2 × 18.016 = 36.032; 4.032 + 32.00 = 36.032; 32.00 ÷ 2.016 = 15.87; ratio 1 : 7.94 : 8.94.
- 0.40 × 3 ÷ 2 = 0.60.
- HCl series ideal 0.342 °C per mmol × min(x, 40 − x): 1.71, 3.42, 5.12, 6.83, 5.12, 3.42, 1.71.
- H₂SO₄ series ideal 0.455 °C per mmol × min(2x, 30 − x): 4.55, 9.11, 6.83, 4.55, 2.28; lines 0.88x and 0.44(30 − x) cross at x = 10.
- 28.0 ÷ 28.02 = 0.9993; × 3 = 2.998; × 2.016 = 6.044; 3 × 28.0 = 84.0.

## Safety facts check (self-check, 5 November; science check to confirm)

- 1.0 mol L⁻¹ NaOH: corrosive (eyes, skin); 1.0 mol L⁻¹ HCl: irritant. Safety glasses; teacher-approved solutions; spills rinsed with water; polystyrene cups stand in a beaker for stability (`p02-foam-cup-in-beaker-v1.png` is the alternative plate if the build shows one cup closely).
- 1.0 mol L⁻¹ H₂SO₄ (attempt card only, not shown as a practical): corrosive at this strength; the card is data only.

## Memory aid check

- **"Coefficients count; masses weigh."** Written for this video. Meaning: coefficients count particles (and so moles); masses depend on how much each particle weighs, so the coefficient ratio is never assumed to be a mass ratio. Assumptions checked: true for every balanced equation; it does not deny conservation of mass (total mass is still equal; scene 5). It helps a new case: A2's claim fails against it, and m2-v07's mass-to-mass method follows from it (convert masses to moles before using coefficients).
- **Analogy check (bicycle).** Holds: identical parts in a fixed count ratio; part masses differ; the total mass of the bike equals the parts (conservation). Breaks: bikes are assembled, not rearranged at the atomic level; not stretched beyond the count-versus-mass point. No rider or person is shown.
- **Considered, not used:** the site's recipe ("2 cups of flour with 1 cup of sugar"): cups are volumes, which muddies count versus mass.

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,671 characters**, 17 scenes. At 13.3 characters per second the speech is about 426 s; add about 9 s of holds and settling (the molecule rearrangement in 3, the bars in 4 and 5, the graph points in 11), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 516 s (8.6 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v06` (route chem-y11-m2-v06; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v06`.

In order (17 scene headings, all `### N.`): hook, prediction, particles-to-moles, masses, conservation, bike-analogy, two-twos, scaling, continuous-variation, method, peak, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: m2-v05's final frame into scene 1 by camera continue; 1 to 2 to 3 to 4 to 5 camera continue (the equation strip stays); 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 clear change; 9 to 10 to 11 camera continue (the cups stay; the graph builds at the right); attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v06-learning-review.md`, `checks/c-y11-m2-v06-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/m6-foam-cup-calorimeter-v1.png` (lidded foam cup with a probe thermometer, cutaway showing liquid): scenes 9 to 11 (seven copies at small scale).
- `public/assets/chemistry/p02-foam-cup-in-beaker-v1.png`: alternative for a close-up cup.
- `public/assets/chemistry/m5x-safety-glasses-v1.png`: scene 10.
- From ws-v05 and m2-v05: `y11c-cuso4-crucible-lid-white-v1.png` (final frame).

Need (new plates, Codex):
1. `y11c-bike-frame-v1.png`: scene 6. Wanted; fallback: cut scene 6 (334 characters; the narration would fall to about 5,340, so about 200 characters would be added to scene 5 or 11).
2. `y11c-bike-wheel-v1.png`: scene 6 (used twice). As above.
3. `y11c-cuso4-old-crystals-v1.png`: final frame here; essential for ws-v06 (its main case). Fallback: `y11c-cuso4-crucible-blue-v1.png` with a coded pale crust (weaker: the crust is the evidence).

Coded: equation strips, particle diagrams, count-up, mass bars, ratio chips, two-twos callout, scaling rows, reagent labels, cup labels, `LineGraph`, model panel chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/chem-y11-m2-v06.md`. Paint after the learning review, science check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/chemistry/`. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `y11c-top-pan-balance-v1.png`, at least 8 per cent clear margin, no text, labels, people, hands, faces, rider, backdrop, glow or ground shadow. Never stretch.

1. `y11c-bike-frame-v1.png` (1400 × 1000 px): a plain bicycle frame alone (no wheels, no seat or handlebars needed, or a simple seat and handlebars), side view, single muted colour. Must sit between two copies of plate 2 at the true scale of a bike.
2. `y11c-bike-wheel-v1.png` (1000 × 1000 px): one bicycle wheel with tyre and spokes, side view, matching plate 1's style and scale.
3. `y11c-cuso4-old-crystals-v1.png` (1000 × 1000 px): a small clear glass screw-top jar, lid off beside it, containing blue copper sulfate crystals whose surfaces carry a pale, whitish-blue powdery crust (weathered crystals), three-quarter view. The crust must read clearly at 300 px wide; the crystal blue must match `y11c-cuso4-crucible-blue-v1.png`.

Report inspection on the paper and dark board backgrounds at about 300 px wide, and the frame-plus-two-wheels placement. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m2-v06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site items used match `lesson11.sa.html` (the Al drill; the continuous variation method and its 40 mL, 5 mL steps, 20 : 20 peak).
3. Confirm the claims: equal concentrations make volume ratios mole ratios; the temperature rise is greatest at the stoichiometric ratio; H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O; the safety statements (author note d).
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophe).
6. Confirm no person, hand, face or rider is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v05's final frame and the final frame matches ws-v06's opening.

## YouTube metadata (draft)

Title: Mole Ratios vs Mass Ratios (and Job's Method) | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

2H₂ + O₂ → 2H₂O: does 2 g of hydrogen react with 1 g of oxygen? No. Learn why coefficients count particles and so give mole ratios, why the masses come out about 1 : 8 : 9 instead, how mass is still conserved, the difference between a coefficient and a subscript, how to scale with a mole ratio, and how the continuous variation (Job's) method shows that chemicals react in simple whole-number ratios by moles. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct an investigation to determine that chemicals react in simple whole number ratios by moles"
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Previous: How mass percentages reveal an empirical formula. Next: How a chemistry model solves an unfamiliar quantitative problem.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Bicycle plates (root).** Two small new plates for one scene; cut scene 6 if root prefers no new art.
- **2. Concentration word (root).** "Concentration" is used in plain words before m2-v10 defines c = n ÷ V; confirm.
- **3. Old-crystals plate (root).** Needed by ws-v06; requested here because this video's final frame introduces it.
- **4. Safety strength (science check).** 1.0 mol L⁻¹ as on the site, or 0.5 mol L⁻¹ for the shown practical (narration says "at this strength", so either fits).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the 1 : 8 : 9 surprise land; is "every millilitre holds the same number of moles" enough without c = n ÷ V; is the leftover explanation of the peak clear at playback speed), then the science check and Codex error check.
- Checker output (5 November): narration 5,671 characters; per scene (1 to 17): 262, 67, 500, 387, 370, 334, 371, 348, 371, 437, 529, 293, 381, 246, 285, 415, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
