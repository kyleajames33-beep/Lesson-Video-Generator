# Year 11 Chemistry M2 V05: Empirical formulae. How do mass percentages reveal an empirical formula? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,754 characters, 16 scenes, about 523 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 37, between `chem-y11-ws-v05` and `chem-y11-m2-v06`. Templates: `chem-y11-m1-v07.md` (Year 11 calculation video in this course), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry calculation conventions `chem-m5-g02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v05` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Convert masses to moles, divide by the smallest and scale to a whole-number ratio. Distinguish empirical from molecular formula without teaching combustion analysis"; next handoff: "Why do reaction coefficients give mole ratios rather than mass ratios?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson03.sa.html` (SHA256 `7afce351414805bdd26c51ab5e48c065748e894242c569d70119e712d215b4b0`, recomputed, matches the route). Used: the section order (empirical versus molecular, the four-step method, worked examples, traps); worked example 1's data exactly (40.00% C, 6.72% H, 53.28% O → CH₂O); the P₂O₅ drill's data (43.64% P, 56.36% O → 1 : 2.5 → P₂O₅); atomic masses are the HSC data-sheet values, the course convention set in `chem-y11-m2-v03.md` (C 12.01, H 1.008, O 16.00, P 30.97), in place of the site's three-decimal values (same results to three significant figures); worked example 2 (glucose, 180.16 ÷ 30.026 = 6); the "×2 for 1.5" rule and trap 1's rounding rule; the interactive tool's point that hydrogen is 6.7% of the mass but half the atoms. Not used: combustion analysis (route stop), percentage composition from a formula (taught in `chem-y11-m1-v07`), the ammonium sulfate question.

Owner rules applied: as `chem-y11-m1-v07.md` (one learner question; no people, hands or faces; real objects as painted plates; formulae, particle counts and bars coded; one reasoning stage at a time with task strip, equation strip and grouped givens; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; earlier videos recalled, not re-taught; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger ID `C2-IQ2-03`), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophe in "Avogadro's" is shown corrected, root decision 9):

- "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
  - "percentage composition calculations and empirical formulae"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on ws-v05's final frame (1.60 g of anhydrous copper sulfate, 0.90 g of water lost, "CuSO₄ · ? H₂O"). Teaches: why masses must become moles before they can be compared as counts; finding the hydrate's 5 from masses; empirical formula (simplest whole-number ratio) and molecular formula (actual count in one molecule); the method from percentages (assume 100 g, to moles, divide by the smallest, scale if needed); when to round and when to multiply through; a light element's small mass share hiding a large atom share; molecular formula from the empirical formula and a given molar mass (one scene). Not taught: combustion analysis (route stop), percentage composition from a formula (v07, recalled once), mole ratios in reactions (m2-v06, the handoff).

## Decisions

- **Learner question (route wording kept).** "How do mass percentages reveal an empirical formula?" The answer, in order: equal masses are not equal counts, so convert to moles (2); dividing by the smallest gives the ratio (3); that ratio, in simplest whole numbers, is the empirical formula (4); from percentages, assume 100 g and do the same (5 to 7); multiply through when a ratio ends in .5, .33 or .25 (8, 9); a molar mass then gives the molecular formula (10).
- **Opening frame (equals `chem-y11-ws-v05.md`'s final frame, same designer).** White-powder crucible at the left; mass bar "CuSO₄ (white powder) 1.60 g | H₂O (lost) 0.90 g"; "CuSO₄ · ? H₂O" with an amber "?"; the "Next" chip, which fades as scene 1 starts.
- **Hook (the hydrate's 5 from masses).** The paradox: less water than copper sulfate by mass, yet five waters per unit. Resolved by moles: 1.60 ÷ 159.6 = 0.0100 mol; 0.90 ÷ 18.0 = 0.0500 mol; ratio 1 : 4.99 ≈ 5. Values from v07 (Cu 63.5, S 32.1, O 16.0, H 1.0), the values the student used for 36.1%: the copper sulfate running case keeps them in every video (ws-v05, ws-v06), so its numbers never shift; every new example uses the data sheet (m2-v03). This is a genuine empirical-formula determination from experimental masses (the syllabus's "masses, chemical amounts and numbers of particles"), and it closes the skills run on its own case.
- **Why moles (scene 2, the causal core).** "Equal masses don't mean equal numbers of particles": a copper sulfate unit (159.6) is about nine times heavier than a water molecule (18.0), so a smaller mass of water holds more molecules. Visual: a coded balance-beam picture is avoided; instead two particle counters fill (5 water molecule icons for each copper sulfate icon) beside the two mass segments. n = m ÷ MM is recalled from m2-v03, not re-taught.
- **Definitions (scene 4; site key terms).** Empirical formula: the simplest whole-number ratio of atoms (or particles) of each element in a compound. Molecular formula: the actual number of each atom in one molecule. Glucose C₆H₁₂O₆ → CH₂O (site example). "Experiments give the empirical formula first" explains why the method matters. For ionic compounds (sodium chloride, recalled from Module 1's ionic bonding videos) and hydrates the empirical formula is the formula written; one sentence says so (author note b).
- **Method from percentages (scene 5; site four steps, reworded).** (1) Imagine 100 g, so each percentage becomes grams. (2) Convert each to moles. (3) Divide every amount by the smallest. (4) If not whole numbers, multiply all by the same small number. Step 4 of the site (scale to molecular) is taught separately in scene 10 so the empirical method stays one routine.
- **Worked example 1 (scenes 6, 7; site data, data-sheet atomic masses).** 40.00% C, 6.72% H, 53.28% O; C 12.01, H 1.008, O 16.00; 3.331, 6.667, 3.330 mol; ÷ 3.330 → 1.000, 2.002, 1.000 → CH₂O. Spoken to three significant figures ("three point three three"). The surprise (site interactive tool): hydrogen is less than 7% of the mass but half the atoms (2 of 4).
- **Prediction and the multiply-through rule (scenes 8, 9; site drill).** P₂O₅ from 43.64% P, 56.36% O (P 30.97, O 16.00): 1.409 and 3.523 mol, ratio 1 : 2.500. The rounding rule: round only when very close to a whole number (the site's "within 0.05"); for .5, .33 and .25 endings multiply by 2, 3 or 4.
- **Molecular formula (scene 10; site worked example 2).** Glucose: MM 180.16, CH₂O 30.03 (12.01 + 2.016 + 16.00), 180.16 ÷ 30.03 = 6.00 → C₆H₁₂O₆. Glucose and acetic acid share CH₂O (site); the molar mass is the extra information needed. The site's own banner says the empirical formula is the Module 2 endpoint and the molecular formula supports it; one scene keeps it to that weight (route stop: "Distinguish empirical from molecular formula").
- **Memory aid:** "Percent to grams, grams to moles, divide by the smallest, multiply till whole." (see "Memory aid check").
- **Attempts (original, HSC style).** A1 (multiply through): an iron oxide is 69.9% iron (Fe 55.85, O 16.00). Model: 1.252 and 1.881 mol; 1 : 1.50; ×2 → Fe₂O₃. Crossed: "FeO₂" (rounding 1.5 up) or "Fe₁O₁.₅" (half atoms). A2 (from masses, a hydrate; the hook's skill on v07's attempt hydrate): 5.00 g of MgSO₄·xH₂O heated to constant mass leaves 2.44 g of anhydrous MgSO₄ (Mg 24.31, S 32.07, O 16.00, H 1.008). Model: water 2.56 g ÷ 18.02 = 0.142 mol; MgSO₄ 2.44 ÷ 120.38 = 0.0203 mol; x = 7.01 ≈ 7. Crossed: "x = 1, because the two masses are about equal" (comparing masses, not moles).
- **Mistake scene:** none separate. "Equal masses mean equal numbers" (1 to 3; crossed in A2); "mass share equals atom share" (7); "round 2.5 to 3" or "write half atoms" (8, 9; crossed in A1); "empirical and molecular formula are the same thing" (4, 10).
- **Handoff (route next: `chem-y11-m2-v06`, "Why do reaction coefficients give mole ratios rather than mass ratios?").** Scene 15: iron and oxygen combine in a 2 : 3 ratio of atoms even though iron is 70% of the mass; atoms combine by count, not by mass, and so do reactants. Final frame: 2H₂ + O₂ → 2H₂O with "2 : 1 : 2" under the coefficients and "mass ratio?" in amber. `chem-y11-m2-v06.md` (same designer) opens on it.
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Page intro: "they had no way to know if glucose (C₆H₁₂O₆) and acetic acid (CH₂O, scaled up) were the same substance". Acetic acid's molecular formula is C₂H₄O₂ (the page's own card says so); suggest "acetic acid (C₂H₄O₂, empirical formula CH₂O)". The hook then switches to formaldehyde; one example throughout would read more clearly.
  2. `l03-ef-vs-mf-title` banner: "Molecular formula ... will not be tested in its own right." An assessment prediction stated as fact; suggest "is a supporting step; learn it as the check on your empirical formula".
  3. The interactive tool uses 40.00% C, 6.71% H, 53.29% O while worked example 1 uses 6.72% and 53.28%. Both sum to 100%, but the mismatch looks like an error to students; suggest one set.
  - Checked and correct: worked examples 1 and 2; drills 1 to 5; Q2 (P₄O₁₀), Q3 ((NH₄)₂SO₄ 21.20, 6.10, 24.26, 48.43%), Q4 (C₂H₆O), Q5 (C₄H₈O₂).
- **Cause chain taught, in order:** (1) particles have different masses, so mass is not count (2); (2) moles count particles, so dividing moles gives the particle ratio (2, 3); (3) the simplest whole-number ratio is the empirical formula (4); (4) assuming 100 g turns percentages into masses (5); (5) a light element can be a small mass share and a large atom share (7); (6) atoms are whole, so a .5 ratio is doubled (9); (7) a molar mass shows how many empirical units are in one molecule (10).
- **Entry knowledge:** m2-v02 (mole, Avogadro constant), m2-v03 (n = m ÷ MM), m2-v04 (a measured molar mass); v07 (percentage composition, hydrates, 36.1%); ws-v05 (the 1.60 g and 0.90 g masses).
- **Learner-visible vocabulary (plain meaning at first use):** empirical formula (4); molecular formula (4); multiply through (multiply every amount by the same number, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **mass bar** carried in from ws-v05; **particle counters** (scene 2: small icons, one copper sulfate tile and water molecule icons, filling in proportion to moles under each mass segment); **calculation layout** (task strip, equation strip "n = m ÷ MM", grouped givens with units, one working row at a time, earlier rows dimmed); **ratio row** (amounts divide by the smallest and their labels tick to whole numbers, with a ×2 multiplier sliding along the row when needed); **formula tiles** from v07 (CH₂O and C₆H₁₂O₆, each atom a tile; ÷6 grouping); **atom-share bar** versus **mass-share bar** (scene 7, from v07's pair); **method strip** (four step chips that light as each runs); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues v07):** element tiles in element colours (carbon dark grey, hydrogen white, oxygen red, phosphorus orange, iron rust, copper copper-brown, sulfur yellow, magnesium pale green); water groups pale blue tint; givens navy; mole amounts teal; the smallest amount gold; ratios amber; earlier rows dimmed; crossed chips red strike.
- **Board layout (constant):** heading top left; plate or formula tiles at the left; task strip, equation strip, givens and working rows at the right; the method strip as a thin row across the top once written (scene 5 on).

Author notes (not learner copy):
(a) Hook: Mr(CuSO₄) = 63.5 + 32.1 + 4 × 16.0 = 159.6; 1.60 ÷ 159.6 = 0.010025 mol ("zero point zero one zero zero"); 0.90 ÷ 18.0 = 0.0500 mol; 0.0500 ÷ 0.010025 = 4.99. With ws-v05's ±3% uncertainty, 4.99 is 5 within the measurement.
(b) Ionic compounds (and hydrates) have no molecules; their formula is an empirical (formula-unit) ratio. Spoken once in scene 4 with sodium chloride.
(c) WE1: 40.00 ÷ 12.01 = 3.3306; 6.72 ÷ 1.008 = 6.6667; 53.28 ÷ 16.00 = 3.3300; ÷ 3.3300: 1.0002, 2.0020, 1.0000. Atom share of H in CH₂O: 2 of 4 = 50%. (Site values 12.011 and 15.999 give 3.3303, 6.6667, 3.3302; identical to three significant figures.)
(d) P₂O₅: 43.64 ÷ 30.97 = 1.4091; 56.36 ÷ 16.00 = 3.5225; ratio 2.4998.
(e) Glucose: MM(CH₂O) = 12.01 + 2(1.008) + 16.00 = 30.026; 180.16 ÷ 30.026 = 6.0001. (Glucose from the data sheet: 6(12.01) + 12(1.008) + 6(16.00) = 180.16.)
(f) A1: 69.9 ÷ 55.85 = 1.2516; 30.1 ÷ 16.00 = 1.8813; ratio 1.5031 → ×2 → 2 : 3.006. Fe₂O₃ is 69.94% Fe (2 × 55.85 ÷ 159.70).
(g) A2: MgSO₄ = 24.31 + 32.07 + 4(16.00) = 120.38; H₂O = 18.016; water 5.00 − 2.44 = 2.56 g; 2.56 ÷ 18.016 = 0.14210; 2.44 ÷ 120.38 = 0.020269; ratio 7.010 ≈ 7 (Epsom salt, MgSO₄·7H₂O; v07 attempt 2).
(h) Rounding rule: the site's "within 0.05" is kept on screen as "very close (within about 0.05)"; experimental data may need judgement (4.99 here).
(i) Pronunciations: "C H two O"; "C six H twelve O six"; "P two O five"; "F e two O three"; "M g S O four".

Main question: *How do mass percentages reveal an empirical formula?*
Entry knowledge: m2-v02 to m2-v04; v07; ws-v05.
Stops after: masses or percentages to moles; divide by the smallest; scale to whole numbers; empirical versus molecular, with molar mass giving the multiplier. No combustion analysis, no reaction ratios.
Handoff: chem-y11-m2-v06, coefficients as mole ratios.

## Opening frame and final frame

- **Opening frame:** ws-v05's final frame exactly (Decisions).
- **Final frame (m2-v06 opens on it):** at the left, A1's formula "Fe₂O₃" small with a two-row comparison: atom tiles "Fe Fe | O O O" (tag "2 : 3 by atoms") and a mass-share bar "Fe 69.9% | O 30.1%" (tag "not 2 : 3 by mass"); centre, the equation "2H₂ + O₂ → 2H₂O" large, with the coefficients amber and "2 : 1 : 2" written under them; to its right an amber chip "mass ratio?"; the chip "Next: Why do reaction coefficients give mole ratios rather than mass ratios?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: where are the five waters?
> Last time we were left with two masses: one point six zero grams of white copper sulfate, and zero point nine zero grams of water. Back in Module one, we started from a formula and worked out its percentages. Today we go the other way, from masses to a formula. The formula says there are five waters for every copper sulfate. But by mass, there's less water than copper sulfate. So how can these masses give us **five**?

Visual: opens on ws-v05's final frame; the "Next" chip fades. On "one point six zero" the grey segment of the mass bar glows; on "zero point nine zero" the blue segment. On "Module one" a small grey chip "v07: formula → % (36.1%)" with an arrow; on "the other way" the arrow reverses: "masses → formula". On "five waters" the amber "?" in "CuSO₄ · ? H₂O" pulses. On "less water" a small comparison "0.90 g < 1.60 g" writes under the bar. On "five" the heading writes: "From masses to a formula".

### 2. masses aren't counts
> The catch is that equal masses don't mean equal numbers of particles. A copper sulfate unit is about nine times heavier than a water molecule, so a smaller mass of water can still hold more molecules. To compare counts, we need moles, and n equals m over M M does exactly **that**. Copper sulfate's molar mass is one hundred and fifty-nine point six, so one point six zero grams is zero point zero one zero zero **moles**. Water's is eighteen point zero, so zero point nine zero grams is zero point zero five zero zero **moles**.

Visual: under each mass segment a particle counter appears: one large copper-brown tile "CuSO₄ 159.6" and one small pale-blue water icon "H₂O 18.0", with a tag "≈ 9 × heavier". On "that" the equation strip "n = m ÷ MM" writes (grey tag "from molar mass video"). On "moles" (first) row "n(CuSO₄) = 1.60 ÷ 159.6 = 0.0100 mol" and the copper sulfate counter fills one row of tiles. On "moles" (second) row "n(H₂O) = 0.90 ÷ 18.0 = 0.0500 mol" and the water counter fills five times as many icons.

### 3. the ratio appears
> Now compare the counts. Moles count particles, so a ratio of moles is a ratio of particles. Divide both by the smaller one, zero point zero one zero zero. Copper sulfate gives one, and water gives four point nine **nine**, which is five within our measurement. Five waters for every copper sulfate. The masses really did hold the formula, once we turned them into **moles**.

Visual: on "ratio of particles" a tag "mol ratio = particle ratio" writes between the counters. The smaller amount (0.0100) turns gold. Ratio row: "0.0100 ÷ 0.0100 = 1" then on "nine" "0.0500 ÷ 0.0100 = 4.99" with a small tag "≈ 5 (within ws-v05's uncertainty)". The "?" in the formula flips to "5": "CuSO₄ · 5H₂O" (tick). On "moles" the particle counters regroup into five pale-blue icons around each copper sulfate tile.

### 4. empirical and molecular formula
> What we just found is a ratio of particles in its simplest whole numbers. That's called an empirical formula, the simplest whole-number ratio of atoms in a compound. Compare glucose. Each molecule has six carbons, twelve hydrogens and six oxygens. That's its molecular formula, the actual number of each atom in one molecule. Divide by six, and its empirical formula is C H two **O**. Salts like sodium chloride aren't made of molecules at all, so for them, the empirical formula is the formula we **write**. And experiments give us the empirical formula **first**.

Visual: board change. Gloss chip "empirical formula: simplest whole-number ratio of atoms". On "glucose" formula tiles "C₆H₁₂O₆" write (6 grey, 12 white, 6 red tiles); gloss chip "molecular formula: actual number of each atom in one molecule". On "Divide by six" the tiles group into six identical stacks; one stack lifts out and on "O" it is labelled "CH₂O (empirical)". On "write" a small "NaCl" lattice chip with the tag "no molecules: empirical formula is the formula". On "first" a small arrow "experiment → empirical formula → (molar mass) → molecular formula", with the second step dimmed ("later in this video").

### 5. the method from percentages
> Often a question gives percentages instead of masses. The trick is to imagine exactly one hundred grams of the compound, so each percentage becomes the same number of **grams**. Any sample size would give the same ratio, but one hundred grams makes the arithmetic easy. Then there are three more steps. Convert each mass to moles. Divide every amount by the smallest. And if they aren't whole numbers yet, multiply them all by the same small **number**. If a question gives masses, like our copper sulfate, just skip the first step.

Visual: the method strip writes four chips as spoken: "1. assume 100 g: % → g" (on "grams" a coded "40.00%" chip slides into "40.00 g"; on "same ratio" a grey tag "any sample: same ratio"); "2. g → mol (n = m ÷ MM)"; "3. ÷ smallest"; on "number" "4. × 2, 3 or 4 until whole". On "skip the first step" chip 1 dims with a grey tag "masses given? start at step 2". The strip then shrinks to a thin row across the top.

### 6. worked example 1: grams and moles
> Let's try one. A compound is forty point zero zero percent carbon, six point seven two percent hydrogen, and fifty-three point two eight percent **oxygen**. In one hundred grams, those are the same numbers in grams. Now each element gets divided by its own molar mass, because each kind of atom has a different mass. That gives three point three three moles of carbon, six point six seven of hydrogen, and three point three three of **oxygen**.

Visual: calculation layout. Task strip: "Find the empirical formula". Givens (navy, grouped): "C 40.00%, H 6.72%, O 53.28%"; "C 12.01, H 1.008, O 16.00 g mol⁻¹ (data sheet)". On "oxygen" (first) step chip 1 lights; row "100 g: C 40.00 g, H 6.72 g, O 53.28 g". On "molar mass" step chip 2 lights; rows write in turn: "n(C) = 40.00 ÷ 12.01 = 3.331 mol"; "n(H) = 6.72 ÷ 1.008 = 6.667 mol"; on "oxygen" (second) "n(O) = 53.28 ÷ 16.00 = 3.330 mol".

### 7. worked example 1: the ratio
> Divide each by the smallest, three point three three. Carbon is one, hydrogen is two, and oxygen is one. So the empirical formula is C H two **O**, the same as glucose. And notice this. Hydrogen is less than seven percent of the mass, but it's half of all the **atoms**. Light atoms hide in a mass percentage.

Visual: step chip 3 lights; the smallest value (3.330) turns gold; the gram rows dim. Ratio row: "C 1.000 : H 2.002 : O 1.000" with "2.002 → 2" (tag "very close: round"). On "O" "Empirical formula: CH₂O" (bright) and the glucose stack from scene 4 returns small beside it (tick "same as glucose"). On "seven percent" a mass-share bar "C 40.0 | H 6.7 | O 53.3" with the H sliver amber; on "atoms" an atom-share bar for CH₂O, "C | H | H | O", H half the bar, amber (tag "6.7% of mass, 50% of atoms").

### 8. prediction (countdown, 3 seconds)
> Here's a trickier one. A phosphorus oxide is forty-three point six four percent phosphorus, and the same steps give one phosphorus to two point five oxygens. What's the empirical **formula**?

Visual: compact layout: givens "P 43.64%, O 56.36%; P 30.97, O 16.00"; rows "n(P) = 1.409 mol", "n(O) = 3.523 mol"; ratio row "P 1 : O 2.50". Chips "PO₂?", "PO₃?", "something else?". On "formula" the 3 s `Countdown` ring runs.

### 9. multiply through
> You can't have half an atom, and two point five is too far from a whole number to round. Rounding up would give P O three, which says something our data don't. So multiply both by two. That gives two phosphorus to five oxygen, P two O **five**. Only round when you're very close to a whole number, like four point nine nine. For endings like point five, point three three or point two five, multiply by two, three or four **instead**.

Visual: on "half an atom" a coded half-tile of oxygen cracks and is crossed. On "P O three" a chip "PO₃ (rounded)" writes and is crossed. Step chip 4 lights; on "two" a "× 2" multiplier slides along the ratio row: "P 2 : O 5". On "five" "Empirical formula: P₂O₅" (bright); On "instead" a small rule card: "very close (within about 0.05): round. .5 → × 2; .33 → × 3; .25 → × 4".

### 10. from empirical to molecular
> So how do we get the real molecule? An empirical formula only gives the ratio, and glucose and acetic acid both have C H two O. To tell them apart, we need the molar mass. Glucose's is one hundred and eighty point one six grams per mole, and C H two O's is thirty point zero three. That's six times bigger, so glucose's molecular formula is six C H two O units, C six H twelve O **six**. That multiplier must be a whole number. If it isn't, go back and check the empirical **formula**.

Visual: board change. Two molecule cards: "glucose" and "acetic acid", each with a grey "CH₂O" empirical tag. Givens: "MM(glucose) = 180.16 g mol⁻¹"; row "MM(CH₂O) = 12.01 + 2(1.008) + 16.00 = 30.03 g mol⁻¹"; row "180.16 ÷ 30.03 = 6.00". On "six C H two O units" six CH₂O tile stacks snap together; on "six" "Molecular formula: C₆H₁₂O₆" (bright). Acetic acid's card gains "C₂H₄O₂ (2 units)" in grey, unspoken. On "formula" a chip "n must be whole (6.00 ✓)".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An oxide of iron is sixty-nine point nine percent iron by mass, and the rest is oxygen. Using iron fifty-five point eight five and oxygen sixteen point zero zero, find its empirical formula. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "An oxide of iron contains 69.9% iron by mass; the rest is oxygen. Determine the empirical formula of the oxide. (Fe = 55.85, O = 16.00) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the method strip dims to an outline).

### 12. feedback 1 (brief)
> Oxygen is the rest, thirty point one percent. That gives one point two five moles of iron and one point eight eight of oxygen. Divide by the smaller, and it's one to one point five. Atoms come whole, so multiply both by two: F e two O **three**. Rounding one point five up to two, and writing F e O two, is the classic slip.

Visual: card shrinks to the top. Rows: "O = 100 − 69.9 = 30.1%"; "n(Fe) = 69.9 ÷ 55.85 = 1.252; n(O) = 30.1 ÷ 16.00 = 1.881"; "÷ 1.252 → Fe 1 : O 1.50 → × 2 → 2 : 3"; on "three" "Fe₂O₃". On "slip" a chip "FeO₂" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Five point zero zero grams of hydrated magnesium sulfate is heated to constant mass, and two point four four grams of anhydrous magnesium sulfate is left. Find x in its formula. Pause here to answer.

Visual: `QuestionCard`: "A 5.00 g sample of hydrated magnesium sulfate, MgSO₄·xH₂O, was heated to constant mass. The anhydrous MgSO₄ remaining had a mass of 2.44 g. Calculate the value of x. (Mg = 24.31, S = 32.07, O = 16.00, H = 1.008) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The water lost is two point five six grams, which is zero point one four two moles. The magnesium sulfate is two point four four over one hundred and twenty point four, zero point zero two zero three moles. Divide, and x is seven. Saying x is one, because the two masses are about equal, is the classic slip. Compare moles, not **masses**.

Visual: card shrinks to the top. Rows: "m(H₂O) = 5.00 − 2.44 = 2.56 g; n = 2.56 ÷ 18.02 = 0.142 mol"; "MM(MgSO₄) = 120.38; n = 2.44 ÷ 120.38 = 0.0203 mol"; "0.142 ÷ 0.0203 = 7.0 → x = 7 (MgSO₄·7H₂O)". On "masses" a chip "x = 1: 2.56 g ≈ 2.44 g" fades in and is crossed. Hold about 1 second.

### 15. conclusion and handoff
> So mass percentages become masses, masses become moles, and dividing by the smallest gives the ratio of atoms. Look back at the iron oxide. Iron is seventy percent of the mass, but the atoms combine two to three. Atoms join by count, not by mass. And when substances react, the equation's numbers count particles too. Why do reaction coefficients give mole ratios rather than mass **ratios**?

Visual: the memory line writes in hand lettering at the top: "Percent to grams, grams to moles, divide by the smallest, multiply till whole." On "iron oxide" A1's "Fe₂O₃" returns with the atom tiles "Fe Fe | O O O" (tag "2 : 3 by atoms") and on "seventy percent" the mass-share bar "Fe 69.9% | O 30.1%" (tag "not 2 : 3 by mass"). On "react" the equation "2H₂ + O₂ → 2H₂O" writes at the centre, coefficients amber, "2 : 1 : 2" under them, and an amber chip "mass ratio?". On "ratios" the chip "Next: Why do reaction coefficients give mole ratios rather than mass ratios?" writes. Hold about 2 seconds. This is the final frame (m2-v06 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Empirical formula: the simplest whole-number ratio of atoms in a compound. Molecular formula: the actual number of each atom in one molecule.
2. Equal masses are not equal numbers of particles: compare moles (n = m ÷ MM).
3. Method: assume 100 g (% → g); g → mol; divide by the smallest; if not whole, × 2, 3 or 4 (.5, .33, .25).
4. Round only when very close to a whole number (about 0.05).
5. Molecular formula: MM(molecular) ÷ MM(empirical) = whole number n; multiply every subscript by n.

Memory aid (large, on the notes screen): *Percent to grams, grams to moles, divide by the smallest, multiply till whole.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why masses can't be compared directly (2); why dividing moles gives the formula (3); why 100 g (5); why light atoms hide in mass percentages (7); why 2.5 is doubled, not rounded (9); why a molar mass is needed for the molecule (10).
- **Misconceptions addressed:** equal mass means equal count (1 to 3, crossed in A2); mass share equals atom share (7); round anything (9, crossed in A1); empirical equals molecular (4, 10).
- **One idea at a time:** paradox (1), moles (2), ratio (3), definitions (4), method (5), example in two stages (6, 7), multiply through (8, 9), molecular formula (10).
- **Video makes it easier:** particle counters fill five to one under unequal mass segments (2, 3); glucose tiles split into six identical stacks (4); a percentage chip slides into grams (5); mass-share and atom-share bars side by side (7); a half oxygen tile cracks (9).
- **Response opportunity:** one 3 s prediction (8); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 20 s and 25 s.
- **Avoided double teaching:** n = m ÷ MM recalled (m2-v03); percentage composition and hydrates recalled (v07); the masses and their uncertainty recalled (ws-v05).
- **Syllabus coverage:** `C2-IQ2-03` "percentage composition calculations and empirical formulae" (all scenes); "masses, chemical amounts and numbers of particles" (2, 3).
- **Out of scope by design:** combustion analysis; percentage composition from a formula (v07).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An oxide of iron contains 69.9% iron by mass; the rest is oxygen. Determine the empirical formula of the oxide. (Fe = 55.85, O = 16.00)"
Model answer: O = 30.1%; in 100 g: n(Fe) = 69.9 ÷ 55.85 = 1.252 mol; n(O) = 30.1 ÷ 16.00 = 1.881 mol (1 mark). Divide by 1.252: Fe 1, O 1.50 (1 mark). Multiply by 2: Fe₂O₃ (1 mark). Classic mistake (crossed): "FeO₂" (rounding 1.5 to 2).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** "A 5.00 g sample of hydrated magnesium sulfate, MgSO₄·xH₂O, was heated to constant mass. The anhydrous MgSO₄ remaining had a mass of 2.44 g. Calculate the value of x. (Mg = 24.31, S = 32.07, O = 16.00, H = 1.008)"
Model answer: m(H₂O) = 2.56 g; n(H₂O) = 2.56 ÷ 18.02 = 0.142 mol (1 mark). MM(MgSO₄) = 120.38 g mol⁻¹; n(MgSO₄) = 2.44 ÷ 120.38 = 0.0203 mol (1 mark). x = 0.142 ÷ 0.0203 = 7.0, so x = 7 (1 mark). Classic mistake (crossed): "x = 1 because the masses are nearly equal".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook masses | 1.60 g CuSO₄; 0.90 g H₂O | 1, 2 |
| Molar masses (v07 values) | CuSO₄ 159.6; H₂O 18.0; ratio ≈ 9 | 2 |
| Hook moles | 0.0100; 0.0500; ratio 4.99 ≈ 5 | 2, 3 |
| WE1 | 40.00, 6.72, 53.28%; 12.01, 1.008, 16.00; 3.331, 6.667, 3.330 mol; 1 : 2.002 : 1; CH₂O | 6, 7 |
| Atom share | H 6.7% of mass, 50% of atoms | 7 |
| P₂O₅ | 43.64, 56.36%; 30.97, 16.00; 1.409, 3.523 mol; 1 : 2.50 | 8, 9 |
| Glucose | 180.16; 30.03; 6.00; C₆H₁₂O₆ | 4, 10 |
| A1 | 69.9%; 30.1%; 55.85, 16.00; 1.252, 1.881; 1 : 1.50; Fe₂O₃ | 11, 12, 15 |
| A2 | 5.00 g; 2.44 g; 2.56 g; 18.02; 120.38; 0.142, 0.0203; x = 7 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 63.5 + 32.1 + 64.0 = 159.6; 1.60 ÷ 159.6 = 0.010025; 0.90 ÷ 18.0 = 0.0500; ratio 4.9875; 159.6 ÷ 18.0 = 8.87.
- 40.00 ÷ 12.01 = 3.3306; 6.72 ÷ 1.008 = 6.6667; 53.28 ÷ 16.00 = 3.3300; ratios 1.0002, 2.0020, 1.0000.
- 43.64 ÷ 30.97 = 1.4091; 56.36 ÷ 16.00 = 3.5225; ratio 2.4998.
- 12.01 + 2.016 + 16.00 = 30.026; 180.16 ÷ 30.026 = 6.0001.
- 69.9 ÷ 55.85 = 1.2516; 30.1 ÷ 16.00 = 1.8813; ratio 1.5031.
- 24.31 + 32.07 + 64.00 = 120.38; 2.56 ÷ 18.016 = 0.14210; 2.44 ÷ 120.38 = 0.020269; ratio 7.010.

## Memory aid check

- **"Percent to grams, grams to moles, divide by the smallest, multiply till whole."** A common classroom chant (variants: "percent to mass, mass to mole, divide by small, multiply till whole"), adapted to say "grams" and "moles". Meaning: the four steps of scene 5 in order. Assumptions checked: "percent to grams" assumes a 100 g sample (said in scene 5); "multiply till whole" means multiply every amount by the same small integer (2, 3 or 4), not round (scene 9); starting from masses, the first step is skipped (the hook and A2 show this). It helps a new case: both attempts follow it, and m2-v08's limiting-reagent work reuses "grams to moles".
- **Considered, not used:** "Light atoms hide in a mass percentage" is kept as a spoken observation in scene 7, not a second aid.

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,754 characters**, 16 scenes. At 13.3 characters per second the speech is about 433 s; add about 9 s of holds and settling (the particle counters in 2 and 3, the tile split in 4, the ratio rows in 7 and 9), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 523 s (8.7 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v05` (route chem-y11-m2-v05; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v05`.

In order (16 scene headings, all `### N.`): hook, masses-not-counts, ratio, empirical-molecular, method, we1-moles, we1-ratio, prediction, multiply-through, molecular-formula, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: ws-v05's final frame into scene 1 by camera continue; 1 to 2 to 3 camera continue (the mass bar stays); 3 to 4 clear change; 4 to 5 camera continue; 5 to 6 camera continue (method strip shrinks to the top); 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v05-learning-review.md`, `checks/c-y11-m2-v05-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- From ws-v05's final frame: `y11c-cuso4-crucible-lid-white-v1.png` (requested in ws-v02; fallback as ws-v05).
- No other plate: every object in this video is a formula, an amount or a particle count.

Need (new plates, Codex): none.

Coded: mass bar, particle counters, calculation layout, ratio rows with multiplier, formula tiles, atom-share and mass-share bars, method strip, molecule cards, equation and chips (final frame), attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v05)

No new plates.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site values used match `lesson03.sa.html` (worked examples 1 and 2; the P₂O₅ drill).
3. Confirm the claims: glucose and acetic acid share CH₂O; Fe₂O₃ is about 69.9% iron; Epsom salt is MgSO₄·7H₂O.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json` (apart from the corrected apostrophe).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals ws-v05's final frame and the final frame matches m2-v06's opening.

## YouTube metadata (draft)

Title: Empirical Formula from Percentages (and Hydrates) | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

There's less water than copper sulfate by mass, yet the formula says five waters for every copper sulfate. How? Learn why masses must become moles before you compare them, how to turn mass percentages into an empirical formula (assume 100 g, convert to moles, divide by the smallest, multiply till whole), when to round and when to multiply through, and how a molar mass turns an empirical formula into a molecular formula. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
"percentage composition calculations and empirical formulae"

Previous: How we judge uncertainty and the limits of a chemistry result. Next: Why reaction coefficients give mole ratios rather than mass ratios.

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Atomic-mass values (root).** New examples use the HSC data-sheet values (the convention set in `chem-y11-m2-v03.md`); the copper sulfate running case keeps v07's one-decimal values so its 36.1%, 1.60 g and 0.90 g never shift across ws-v05, m2-v05 and ws-v06. Confirm, or move the running case to data-sheet values too (the hook ratio would read 4.98 instead of 4.99; both are 5).
- **2. Molecular formula scene (root).** Scene 10 is one scene, as the route and site allow. Cutting it would take the narration below 5,500 characters, so it stays unless the learning review finds it confusing.
- **3. Memory aid wording (root).** "grams" and "moles" replace the common "mass" and "mole" for TTS clarity.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the paradox in scene 1 land; is "nine times heavier" enough to explain why the counts differ; is the method strip readable at playback speed), then the science check and Codex error check.
- Checker output (5 November): narration 5,754 characters; per scene (1 to 16): 417, 517, 366, 553, 524, 436, 301, 187, 426, 477, 223, 320, 209, 335, 388, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
