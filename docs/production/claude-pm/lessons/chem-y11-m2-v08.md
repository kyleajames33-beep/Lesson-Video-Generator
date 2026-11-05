# Year 11 Chemistry M2 V08: Limiting and excess reagents. Which reactant limits how much product can form? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,307 characters, 16 scenes, about 563 s (9.4 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: eighth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 41, between `chem-y11-m2-v07` and `chem-y11-m2-v09`. Templates: `chem-y11-m2-v07.md` (same series and board), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry calculation conventions `chem-m5-g02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v08` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Compare available moles divided by coefficient and calculate theoretical product and excess remaining. Stop before percentage yield"; next handoff: "How can we measure mass changes while keeping track of escaping gas?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson13.sa.html` (SHA256 `0a47d595bd869897c801e22e52f79613d8c3a3dbd00ea6ff777b3c5147f3139b`, recomputed, matches the route), sections `l13-method-title`, `l13-concept-title`, `l13-worked-title`, `l13-sort-title`. Used: the five-step method and its warning ("Never identify the LR by comparing masses or moles alone"); the key terms limiting reagent, excess reagent and theoretical yield; the concept example 2H₂ + O₂ → 2H₂O with 3 mol H₂ and 2 mol O₂ (drawn here as 6 and 4 molecules, the same ratio); "reaction-units" (spoken as "runs" of the equation); worked example 2's data (10.0 g Na, 20.0 g Cl₂: sodium has more moles but limits) and worked example 3 (chlorine left over); traps 1 to 3. Not used: the sandwich analogy (an object analogy would need painted plates and m2-v06 already used a count-recipe analogy; the particle picture does the same job in HSC form), worked examples 1 and 4 (left for site practice), the Haber and ammonia questions.

Owner rules applied: as `chem-y11-m2-v07.md` (one learner question; no people, hands or faces; real objects as painted plates; formulae, particles and amounts coded; short task strip, equation strip, grouped givens with units, one reasoning stage at a time, earlier rows dimmed; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's apostrophe in "Avogadro's" shown as a plain apostrophe, root decision 9 of Module 1):

- `C2-IQ2-03`: "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
  - "limiting reagent reactions"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v07's final frame (10.0 g Mg, 4.0 g O₂, "which runs out first?"). Teaches: why one reactant runs out first (the equation uses reactants in a fixed count ratio); "runs" of the equation as amount ÷ coefficient; limiting and excess reagent defined; fewer particles (or fewer grams) is not the test; the method (equation; moles of each reactant; ÷ coefficient, smaller limits; product from the limiting reagent only; excess left = start − used); theoretical yield (the theoretical mass of m2-v07, now from the limiting reagent); a conservation check (14.0 g in, 14.0 g out); a case where the reactant with more moles limits (Na and Cl₂); why chemists add an excess on purpose. Not taught: percentage yield (route stop; m2-v12 onward or the yield video), gas collection (m2-v09), solutions (m2-v10).

## Decisions

- **Learner question (route wording kept).** "Which reactant limits how much product can form?" The answer, in order: the reaction uses reactants in the equation's count ratio, so one can run out first (1, 2); the one that supplies fewer "runs" limits (3); in moles, runs = n ÷ coefficient (4, 5); product comes only from the limiting reagent (6); the excess reagent's leftover is start minus used (7); grams and raw moles both mislead (5, 8); an excess is often chosen on purpose (10).
- **Opening frame (equals `chem-y11-m2-v07.md`'s final frame, same series).** Magnesium ribbon plate "10.0 g Mg"; gas jar `y11c-gas-jar-v1.png` tinted faintly, "4.0 g O₂"; arrow to the white oxide dish "? g MgO"; "2Mg + O₂ → 2MgO" above; the bridge icon small at the top right; amber chip "which runs out first?"; the "Next" chip, which fades as scene 1 starts.
- **Hook (3 s prediction, scene 1).** The m2-v07 handoff numbers kept (m2-v07 open decision 3 is closed: no change). Most students will pick oxygen (fewer grams), which is right here by luck; scene 5 says so and scene 8 shows grams and raw moles failing.
- **"Runs" (scenes 2 to 5).** The site's "reaction-units" spoken as "how many times the equation can run", one run = one set of coefficients. Runs = n ÷ coefficient. Plain, countable in the particle picture, and the same number in moles. Learner copy says "runs" only after scene 2 has shown three and four runs as groups.
- **Particle picture (scenes 2, 3; site concept example).** 6 H₂ and 4 O₂ molecules (HSC colours: H white, O red, ink outlines); grouped into runs of "2 H₂ + 1 O₂"; three runs form 6 H₂O; one O₂ remains. The trap "fewer particles means limiting" is shown failing (4 O₂ against 6 H₂).
- **Method (scene 4; site five steps).** (1) balanced equation; (2) n = m ÷ MM for each reactant; (3) n ÷ coefficient for each, smaller = limiting reagent; (4) product from the limiting reagent's moles only (m2-v07's bridge); (5) excess left = n(start) − n(used), with n(used) from the limiting reagent and the ratio. On screen the bridge icon gains a "compare" gate before the first pier.
- **Atomic masses.** HSC data-sheet values (Mg 24.31, O 16.00, Na 22.99, Cl 35.45, Al 26.98, S 32.07, C 12.01, H 1.008; Ca 40.08 in the handoff), root decision 1 of Module 2. Site results unchanged to three significant figures except the chlorine left over (4.58 g here, 4.57 g on the site with its own values; author note d).
- **Worked example 1 (scenes 5 to 7; m2-v07 handoff).** n(Mg) = 0.411 mol, ÷ 2 = 0.206; n(O₂) = 0.125 mol, ÷ 1 = 0.125; O₂ limits. MgO = 0.250 mol × 40.31 = 10.08 → 10.1 g (theoretical yield). Wrong route from Mg: 16.6 g, needing 6.58 g of O₂ (m2-v07's own numbers, so the contrast is familiar). Mg used 0.250 mol = 6.08 g; left 3.92 g; conservation 10.08 + 3.92 = 14.00 g = 10.0 + 4.0.
- **Worked example 2 (scenes 8, 9; site WE2 and WE3).** 10.0 g Na (0.435 mol, ÷ 2 = 0.2175) with 20.0 g Cl₂ (0.282 mol, ÷ 1 = 0.282): Na limits although it has more moles and less mass. NaCl 0.435 mol × 58.44 = 25.4 g. Cl₂ used 0.2175 mol; left 0.0646 mol × 70.90 = 4.58 g. Crossed: "20.0 g of Cl₂ left" (site trap 3).
- **Why excess (scene 10).** One sentence of purpose (an excess of the cheaper or easier reactant makes the valuable one react completely) and the link back to m2-v07's "in plenty" wording. It is also the condition m2-v09 needs (acid in excess, chips limiting).
- **Theoretical yield.** Site key term, glossed as "the most product that can form, calculated from the limiting reagent". Said to be m2-v07's theoretical mass. Percentage yield is not mentioned (route stop).
- **Memory aid:** "Moles over coefficient: fewest runs, runs out first." (see "Memory aid check").
- **Attempts (original, HSC style).** A1: 5.00 g Al with 5.00 g S, 2Al + 3S → Al₂S₃; S limits (0.0520 against 0.0927); Al₂S₃ 0.0520 mol × 150.17 = 7.80 g. Crossed: "13.9 g (from aluminium)", which is more than the 10.0 g that went in, a sense check students can use. A2: 8.00 g CH₄ with 24.0 g O₂, CH₄ + 2O₂ → CO₂ + 2H₂O; O₂ limits (0.375 against 0.499) although it has more moles; CH₄ used 0.375 mol = 6.02 g; left 1.98 g. Crossed: "CH₄ is limiting (fewer moles)". Each card names the reaction and gives atomic masses.
- **Mistake scene:** none separate. "Fewer particles limits" (3, crossed); "fewer grams limits" (5, "only by luck"); "more moles is in excess" (8); "calculate from the excess reagent" (6, crossed 16.6 g); "excess left = all of it" (9, crossed); A1 and A2 crossed slips.
- **Handoff (route next: `chem-y11-m2-v09`, "How can we measure mass changes while keeping track of escaping gas?").** Scene 15 takes the idea to the bench: 2.00 g of marble chips (calcium carbonate) in an excess of dilute hydrochloric acid, in a conical flask with a cotton wool plug, on a balance. The chips limit, so the carbon dioxide can be predicted; but it bubbles away. No prediction is calculated here (m2-v09 does it: 0.88 g; author note h).
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Short answer Q2 (c): "n(O₂ remaining) = 2.000 − 1.995 = 0.005 mol; m = 0.005 × 31.998 = 0.16 g". The reactants are almost exactly in the stoichiometric ratio, so the answer depends on rounding; with the page's own values unrounded, n(O₂ remaining) = 2.00012 − 1.99464 = 0.00548 mol and m = 0.175 g (0.18 g). Suggest keeping four significant figures through the subtraction and giving 0.18 g, or changing the data so the excess is not a small difference of nearly equal numbers.
  2. The key-term card "Excess reagent: the reactant present in greater than stoichiometric amount" and the match card "present in more moles than needed" are fine, but the match card's wording ("in more moles than needed by the mole ratio") can read as "has more moles"; worked example 2 is the page's own counterexample. Suggest "more than the mole ratio needs to react with the limiting reagent".
  - Checked and correct: concept example (1.5 against 2.0); quick check (Cl₂ 0.10 < Al 0.20); worked examples 1 to 4 (36.0 g; 25.4 g; 4.57 g; 26.7 g and 5.40 g); drills 1 to 5 (6.30 g; 36.0 g; 1.97 g; N₂; 6.81 g); Q1 (13.4 g); Q4 (17.0 g; 2.98 g); Q5 (29.9 g against 36.0 g).
- **Cause chain taught, in order:** (1) the equation uses reactants in a fixed count ratio (2); (2) so the reactant with fewer runs is used up first and the reaction stops (2, 3); (3) runs = moles ÷ coefficient, not particles or grams (3, 5, 8); (4) product forms only while the limiting reagent lasts, so it sets the yield (6); (5) the excess reagent is used in the ratio to the limiting reagent, so the leftover is start − used (7, 9); (6) mass is conserved overall (7); (7) choosing an excess makes the valuable reactant react completely (10).
- **Entry knowledge:** m2-v03 (n = m ÷ MM); m2-v06 (coefficients are mole ratios; n(wanted) rule); m2-v07 (four-step bridge; theoretical mass; "in plenty"); m2-v01 (conservation of mass).
- **Learner-visible vocabulary (plain meaning at first use):** run (one use of the equation's coefficients, 2); limiting reagent (the reactant that runs out first, so it limits the product, 3); excess reagent (the reactant with some left over, 3); theoretical yield (the most product that can form, calculated from the limiting reagent, 6).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **particle tray** (scenes 2, 3: molecules drawn as HSC ball models; a dashed "run" box gathers 2 H₂ + 1 O₂ and snaps them into 2 H₂O; a run counter ticks; leftovers glow amber); **runs meter** (two horizontal bars per reactant, length = n ÷ coefficient, the shorter one gains a teal "limiting" tag and the longer an amber "excess" tag; reused in scenes 5, 8 and feedback); **bridge icon** from m2-v07 with a new "compare" gate (scene 4); **calculation layout** (task strip, equation strip, grouped givens with units, working rows one at a time, earlier rows dimmed); **conservation stack** (scene 7, as m2-v07 scene 6: input bars Mg 10.0 g + O₂ 4.0 g against output bars MgO 10.08 g + Mg left 3.92 g); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v07):** masses amber; moles teal; runs (n ÷ coefficient) violet; limiting tag teal, excess tag amber; givens navy; magnesium pale green, oxygen red, hydrogen white, sodium silver-grey, chlorine pale yellow-green; earlier rows dimmed; crossed items red strike.
- **Board layout (constant):** heading top left; bridge icon top right; plates or particle tray at the left; task strip, givens, runs meter and rows at the right.

Author notes (not learner copy):
(a) Mg case: 10.0 ÷ 24.31 = 0.41135 mol, ÷ 2 = 0.20568; 4.0 ÷ 32.00 = 0.12500. MgO 0.25000 × 40.31 = 10.0775 g. Wrong route 0.41135 × 40.31 = 16.582 g; O₂ needed 0.20568 × 32.00 = 6.582 g. Mg used 0.25000 × 24.31 = 6.0775 g; left 3.9225 g (mole route 0.16135 mol × 24.31, the same). Conservation 10.0775 + 3.9225 = 14.000. "4.0 g" has two significant figures; answers are shown to three as the course does with given data, and the learning review may prefer "10. g". m2-v07 author note h wrote 40.30; 40.31 is the data-sheet sum and gives the same 10.1 g.
(b) Particles: 6 H₂ ÷ 2 = 3 runs; 4 O₂ ÷ 1 = 4 runs; 3 runs make 6 H₂O and use 3 O₂; 1 O₂ left (site concept example 3 mol and 2 mol, scaled by 2).
(c) "Grams can't decide": O₂ limits here and also has fewer grams, by coincidence; Na and Cl₂ (scene 8) and CH₄ and O₂ (A2) show grams and raw moles failing.
(d) Na case: Na 0.43497 mol, ÷ 2 = 0.21749; Cl₂ 70.90, 0.28209 mol. NaCl 58.44; 0.43497 × 58.44 = 25.420 g. Cl₂ left 0.28209 − 0.21749 = 0.06460 mol × 70.90 = 4.580 g (mass route 20.0 − 15.420 = 4.580). Conservation 25.420 + 4.580 = 30.0. Site (Na 22.990, Cl 35.453): 25.4 g; 4.57 g.
(e) Excess on purpose: general practice (an excess of a cheap reactant drives the valuable one to react completely); no industrial example named.
(f) A1: 5.00 ÷ 26.98 = 0.18532, ÷ 2 = 0.092661; 5.00 ÷ 32.07 = 0.15591, ÷ 3 = 0.051970; S limits; Al₂S₃ = 2(26.98) + 3(32.07) = 150.17; 0.051970 × 150.17 = 7.804 g. Slip 0.092661 × 150.17 = 13.915 g. (Al used 2.80 g, left 2.20 g; not asked.) Aluminium and sulfur react vigorously when ignited; the card is a calculation context only, and the scene shows no apparatus.
(g) A2: CH₄ = 12.01 + 4(1.008) = 16.042; 8.00 ÷ 16.042 = 0.49869, ÷ 1; O₂ 24.0 ÷ 32.00 = 0.75000, ÷ 2 = 0.37500; O₂ limits. CH₄ used 0.37500 × 16.042 = 6.0158 g; left 1.9843 g (1.98 g). (CO₂ formed 16.5 g; not asked.)
(h) Handoff (not spoken): CaCO₃ 100.09, 2.00 g = 0.019982 mol; needs 0.039964 mol HCl; CO₂ 0.019982 × 44.01 = 0.8794 g. m2-v09 uses 0.88 g.
(i) Pronunciations: "two H two plus O two makes two H two O"; "two N a plus C l two makes two N a C l"; "two A l plus three S makes A l two S three"; "C H four plus two O two makes C O two plus two H two O"; "seventy point nine".

Main question: *Which reactant limits how much product can form?*
Entry knowledge: m2-v01, m2-v03, m2-v06, m2-v07.
Stops after: runs as n ÷ coefficient; limiting and excess reagents; theoretical yield from the limiting reagent; excess remaining; a conservation check. No percentage yield.
Handoff: chem-y11-m2-v09, measuring mass changes while keeping track of escaping gas.

## Opening frame and final frame

- **Opening frame:** m2-v07's final frame exactly (Decisions).
- **Final frame (m2-v09 opens on it):** at the left, the balance (`y11c-top-pan-balance-v1.png`) with the new plate `y11c-flask-chips-acid-plug-fizz-v1.png` on its pan (conical flask, colourless acid, white marble chips fizzing, a loose cotton wool plug in the neck), a coded readout "150.62 g" and a faint grey wisp rising from the plug labelled "CO₂(g)"; above, the equation strip "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)"; at the right, two chips: teal "2.00 g CaCO₃: limiting" and amber "HCl: excess"; an amber chip "the gas escapes: how much?"; the bridge icon small at the top right; the chip "Next: How can we measure mass changes while keeping track of escaping gas?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's where we left off. Ten point zero grams of magnesium, but only four point zero grams of oxygen. Last time, there was always plenty of the other reactant. Now one of them will run out first, and the reaction stops when it does. Make a prediction. Which runs out first, the magnesium or the **oxygen**?

Visual: opens on m2-v07's final frame; the "Next" chip fades. On "run out first" the amber "which runs out first?" chip pulses. On "reaction stops" a faint grey "stops" bar draws under the arrow to the oxide dish. On "magnesium or the" two chips "magnesium" (pale green) and "oxygen" (red) write under the plates; on "oxygen" the 3 s `Countdown` ring runs. The heading writes during the countdown: "Limiting and excess reagents".

### 2. counting runs with molecules
> Let's count molecules. Hydrogen burns in oxygen. Two H two plus O two makes two H two O. So each time the equation runs, it uses two hydrogen molecules and one oxygen molecule. Here are six hydrogen molecules and four oxygen molecules. The hydrogen is enough for three runs, because six divided by two is three. The oxygen is enough for four **runs**. So after three runs, the hydrogen is all gone. Six water molecules have formed, and one oxygen molecule is left **over**.

Visual: board change; the Mg plates slide to a thumbnail at the top left. Equation strip "2H₂ + O₂ → 2H₂O". On "each time the equation runs" a dashed violet box labelled "1 run" draws round two H₂ and one O₂ ball models. On "six hydrogen molecules" the particle tray fills: six H₂ (white pairs) and four O₂ (red pairs). On "three runs" the H₂ molecules group into three pairs of two (tag "6 ÷ 2 = 3 runs"). On "runs" the O₂ molecules split into four singles (tag "4 ÷ 1 = 4 runs"). On "all gone" the three run boxes snap: each turns its 2 H₂ + 1 O₂ into 2 H₂O; a counter ticks "run 1, 2, 3"; H₂ count reaches 0. On "over" the last O₂ glows amber (tag "1 O₂ left").

### 3. limiting and excess
> The reactant that runs out first is called the limiting reagent, because it limits how much product can form. The one with some left over is the excess reagent. And here's the surprise. There were fewer oxygen molecules, four against six, but oxygen didn't run out. Fewer particles doesn't mean limiting. What matters is how many runs each reactant can supply, and that's its amount divided by its **coefficient**.

Visual: on "limiting reagent" the empty H₂ side gains a teal tag and gloss chip "limiting reagent: runs out first, so it limits the product". On "excess reagent" the amber O₂ gains an amber tag and gloss "excess reagent: some is left over". On "fewer oxygen molecules" a chip "fewer particles → limiting?" writes over "4 O₂ < 6 H₂" and is crossed on "doesn't mean limiting". On "coefficient" the runs meter draws for the first time: two violet bars, "H₂: 6 ÷ 2 = 3" (shorter, teal "limiting") and "O₂: 4 ÷ 1 = 4" (longer, amber "excess"); the rule chip "runs = amount ÷ coefficient".

### 4. the method
> In real problems we count in moles, and the steps are last video's, plus one new step. Write the balanced equation. Turn each reactant's mass into moles. Divide each by its coefficient, and the smaller result belongs to the limiting **reagent**. Then calculate the product from the limiting reagent's moles only, across the bridge as before. And if you're asked, find how much of the excess reagent is left **over**.

Visual: board change. The bridge icon enlarges from the top right. On "balanced equation" a banner "1. equation" writes. On "into moles" two mass banks appear on the left ("mass of A", "mass of B"), each with a span "÷ MM" to a mole pier ("2. moles of each"). On "reagent" a new violet gate "3. ÷ coefficient: smaller limits" draws between the two piers; the limiting pier lights teal and the other dims. On "limiting reagent's moles only" the spans "× ratio" and "× MM" light from the teal pier only (step 4), ending at "mass of product". On "over" a side span from the dim pier writes "5. excess left = start − used". The bridge shrinks back to the icon, now with its gate.

### 5. magnesium and oxygen: which limits?
> Back to the magnesium. Ten point zero grams over twenty-four point three is zero point four one one moles of magnesium. Four point zero grams of oxygen, over thirty-two point zero, is zero point one two five moles. Now divide by the coefficients. Magnesium's is two, so that's zero point two zero six. Oxygen's is one, so it stays at zero point one two five. Oxygen's number is smaller, so oxygen is the limiting **reagent**. If you predicted oxygen because it had fewer grams, you were right, but only by **luck**.

Visual: calculation layout. Task strip "Which reactant limits? 10.0 g Mg with 4.0 g O₂". Equation strip "2Mg + O₂ → 2MgO". Givens (navy): "m(Mg) = 10.0 g"; "m(O₂) = 4.0 g"; "Mg 24.31, O 16.00 g mol⁻¹". On "zero point four one one moles" row "n(Mg) = 10.0 ÷ 24.31 = 0.411 mol". On "zero point one two five moles" row "n(O₂) = 4.0 ÷ 32.00 = 0.125 mol". On "Magnesium's is two" row "Mg: 0.411 ÷ 2 = 0.206" (violet); on "stays at" row "O₂: 0.125 ÷ 1 = 0.125" (violet). On "reagent" the runs meter: O₂ bar shorter (teal "limiting"), Mg bar longer (amber "excess"). On "luck" the scene 1 "oxygen" chip returns with a grey tag "right answer, wrong reason: grams can't decide".

### 6. the product comes from the limiting reagent
> So the oxygen sets the product. Oxygen to magnesium oxide is one to two, so zero point one two five moles of oxygen makes zero point two five zero moles of magnesium oxide. Times forty point three, that's ten point one grams. This most product we can make, set by the limiting reagent, is called the theoretical **yield**. It's last video's theoretical mass. Start from the magnesium instead, and you'd claim sixteen point six grams. That needs six point five eight grams of oxygen, and we only have **four**.

Visual: n rows dim. On "one to two" row "O₂ : MgO = 1 : 2 → n(MgO) = 0.125 × 2 = 0.250 mol" (bridge icon: teal pier's spans light). On "ten point one grams" row "m(MgO) = 0.250 × 40.31 = 10.1 g" (bright); the oxide dish chip "? g MgO" updates to "10.1 g MgO". On "yield" gloss chip "theoretical yield: the most product that can form, calculated from the limiting reagent". On "sixteen point six" a chip "from Mg: 0.411 × 40.31 = 16.6 g" fades in; on "four" a small bar pair "O₂ needed 6.58 g" against "O₂ available 4.0 g" draws and the 16.6 g chip is crossed.

### 7. what's left over
> How much magnesium is left over? The equation uses two magnesium for each oxygen, so zero point two five zero moles of magnesium reacted. That's six point zero eight grams. Ten point zero minus six point zero eight leaves three point nine two grams of magnesium **unreacted**. Check it with conservation of mass. Fourteen point zero grams went in. Out come ten point zero eight grams of oxide, before rounding, and three point nine two grams of magnesium, which is fourteen point **zero**.

Visual: rows (grey header "excess left"): on "zero point two five zero moles" "n(Mg used) = 0.125 × 2 = 0.250 mol"; on "six point zero eight" "m(Mg used) = 0.250 × 24.31 = 6.08 g"; on "unreacted" "m(Mg left) = 10.0 − 6.08 = 3.92 g" (bright, amber "excess" tag). On "Fourteen point zero grams went in" the conservation stack: input bars "Mg 10.0 g" + "O₂ 4.0 g" (total 14.0 g); on "zero" the output bars "MgO 10.08 g" + "Mg left 3.92 g" slide under them and match; teal tick "14.0 g = 14.0 g".

### 8. more moles, still limiting
> Now a case where moles alone would fool you. Ten point zero grams of sodium reacts with twenty point zero grams of chlorine. Two N a plus C l two makes two N a C l. Sodium is zero point four three five moles. Chlorine, with a molar mass of seventy point nine, is zero point two eight two moles. Sodium has more moles and fewer grams. So is chlorine **limiting**? Divide by the coefficients. Sodium gives zero point two one seven five, and chlorine stays at zero point two eight two. Sodium is the limiting reagent, even though it had more **moles**.

Visual: board resets. Task strip "Which limits? 10.0 g Na with 20.0 g Cl₂". Equation strip "2Na + Cl₂ → 2NaCl". Givens: "m(Na) = 10.0 g"; "m(Cl₂) = 20.0 g"; "Na 22.99, Cl 35.45 g mol⁻¹". On "zero point four three five moles" row "n(Na) = 10.0 ÷ 22.99 = 0.435 mol"; on "seventy point nine" row "MM(Cl₂) = 2 × 35.45 = 70.90 g mol⁻¹"; on "zero point two eight two moles" row "n(Cl₂) = 20.0 ÷ 70.90 = 0.282 mol". On "more moles and fewer grams" two chips "more moles: Na" and "fewer grams: Na". On "limiting" a ghost chip "Cl₂ limits?" in amber. On "zero point two one seven five" row "Na: 0.435 ÷ 2 = 0.2175"; on "stays at" row "Cl₂: 0.282 ÷ 1 = 0.282". On "moles" the runs meter flips the guess: Na bar shorter (teal "limiting"), Cl₂ longer (amber "excess"); the ghost chip is crossed.

### 9. sodium chloride and the chlorine left
> Sodium to sodium chloride is one to one, so zero point four three five moles of sodium chloride form. Times fifty-eight point four four, that's twenty-five point four **grams**. The chlorine used is half the sodium's moles, zero point two one seven five. Zero point two eight two minus zero point two one seven five leaves zero point zero six four six moles, which is four point five eight grams of chlorine left **over**. Don't say all twenty grams are left. Only the part that didn't react **remains**.

Visual: compare rows dim. On "zero point four three five moles of sodium chloride" row "n(NaCl) = 0.435 × 2 ÷ 2 = 0.435 mol"; on "grams" row "m(NaCl) = 0.435 × 58.44 = 25.4 g" (bright). On "half the sodium's moles" row "n(Cl₂ used) = 0.435 × 1 ÷ 2 = 0.2175 mol". On "over" row "n(Cl₂ left) = 0.282 − 0.2175 = 0.0646 mol → × 70.90 = 4.58 g" (amber). On "all twenty grams" a chip "Cl₂ left = 20.0 g" fades in; on "remains" it is crossed, with the rule chip "left = start − used".

### 10. why choose an excess?
> So why add an excess on purpose? Because the limiting reagent decides the yield. Adding plenty of the cheaper or easier reactant makes sure the valuable one reacts completely. That's what words like excess and in plenty meant in the last video's questions. They tell you which reactant isn't limiting, so you calculate from the **other** one.

Visual: a two-bar runs meter with grey labels "cheap reactant" (long, amber "excess") and "valuable reactant" (short, teal "limiting"); on "reacts completely" the teal bar empties to zero with a tick "all used". On "excess and in plenty" the m2-v07 chip "assumes: the other reactant is in plenty" returns small and its word "plenty" underlines. On "other" an arrow from the amber bar to the teal bar labelled "calculate from this one".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Five point zero zero grams of aluminium is heated with five point zero zero grams of sulfur. Two A l plus three S makes A l two S three. Identify the limiting reagent, and calculate the theoretical yield of aluminium sulfide. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "5.00 g of aluminium is heated with 5.00 g of sulfur: 2Al(s) + 3S(s) → Al₂S₃(s). (a) Identify the limiting reagent. Show your working. (b) Calculate the theoretical yield of aluminium sulfide. (Al = 26.98, S = 32.07) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the bridge icon dims to an outline).

### 12. feedback 1 (brief)
> Aluminium is zero point one eight five moles, over two is zero point zero nine two seven. Sulfur is zero point one five six moles, over three is zero point zero five two zero. So sulfur is limiting. That makes zero point zero five two zero moles of aluminium sulfide, or seven point eight zero grams. Working from aluminium gives thirteen point nine grams, more than the ten grams that went **in**.

Visual: card shrinks to the top. Rows: "n(Al) = 5.00 ÷ 26.98 = 0.185 mol; ÷ 2 = 0.0927"; "n(S) = 5.00 ÷ 32.07 = 0.156 mol; ÷ 3 = 0.0520"; runs meter (S teal "limiting"); "n(Al₂S₃) = 0.156 ÷ 3 = 0.0520 mol"; "MM(Al₂S₃) = 2(26.98) + 3(32.07) = 150.17 g mol⁻¹"; "m = 0.0520 × 150.17 = 7.80 g". On "in" a chip "13.9 g (from Al)" fades in and is crossed, with a grey tag "more than 10.0 g of reactants". Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Eight point zero zero grams of methane burns with twenty-four point zero grams of oxygen. C H four plus two O two makes C O two plus two H two O. Identify the limiting reagent, and calculate the mass of the excess reagent left over. Pause here to answer.

Visual: `QuestionCard`: "8.00 g of methane is burned with 24.0 g of oxygen: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). (a) Identify the limiting reagent. Show your working. (b) Calculate the mass of the excess reagent remaining after the reaction. (C = 12.01, H = 1.008, O = 16.00) (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Methane is zero point four nine nine moles. Oxygen is zero point seven five zero moles, over two is zero point three seven five. So oxygen is limiting, even though it has more moles. Zero point three seven five moles of methane react, six point zero two grams, leaving one point nine eight grams of methane. Calling methane limiting because it has fewer moles is the classic **slip**.

Visual: card shrinks to the top. Rows: "n(CH₄) = 8.00 ÷ 16.04 = 0.499 mol; ÷ 1 = 0.499"; "n(O₂) = 24.0 ÷ 32.00 = 0.750 mol; ÷ 2 = 0.375"; runs meter (O₂ teal "limiting"); "n(CH₄ used) = 0.750 × 1 ÷ 2 = 0.375 mol → × 16.04 = 6.02 g"; "m(CH₄ left) = 8.00 − 6.02 = 1.98 g" (bright). On "slip" a chip "CH₄ limits (fewer moles)" fades in and is crossed. Hold about 1 second.

### 15. conclusion and handoff
> So compare moles divided by coefficients. The smaller one is the limiting reagent. It sets the theoretical yield, and the rest of the excess reagent stays behind. Now take this to the lab. Marble chips are calcium carbonate. Put two point zero zero grams of them into an excess of dilute hydrochloric acid, and the chips are limiting, so we can predict the carbon dioxide they make. But that gas bubbles out of the flask. How can we measure mass changes while keeping track of escaping **gas**?

Visual: the memory line writes at the top: "Moles over coefficient: fewest runs, runs out first." The runs meter returns small (teal and amber). On "Marble chips" the board clears to the balance with `y11c-flask-chips-acid-plug-v1.png` (no fizz yet) on its pan and a coded readout "150.62 g". On "excess of dilute hydrochloric acid" the equation strip "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)" writes; chips "2.00 g CaCO₃: limiting" (teal) and "HCl: excess" (amber). On "bubbles out" the plate cross-fades to `y11c-flask-chips-acid-plug-fizz-v1.png` and a grey wisp labelled "CO₂(g)" rises from the plug; the amber chip "the gas escapes: how much?". On "gas" the chip "Next: How can we measure mass changes while keeping track of escaping gas?" writes. Hold about 2 seconds. This is the final frame (m2-v09 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Limiting reagent: the reactant that runs out first, so it limits the product. Excess reagent: some is left over.
2. To find it: n = m ÷ MM for each reactant, then n ÷ coefficient. The smaller value is the limiting reagent. Never compare grams or raw moles.
3. Theoretical yield: the most product that can form, calculated from the limiting reagent's moles only.
4. Excess left = n(start) − n(used), where n(used) comes from the limiting reagent and the mole ratio.
5. Check: mass in = mass of products + mass of excess left.

Memory aid (large, on the notes screen): *Moles over coefficient: fewest runs, runs out first.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why one reactant runs out (2); why fewer particles is not the test (3); why the limiting reagent sets the product (6); why the leftover is start minus used (7, 9); why an excess is chosen (10).
- **Misconceptions addressed:** fewer particles limits (3); fewer grams limits (5); more moles is excess (8, A2); calculate from the excess reagent (6, A1); all the excess is left (9).
- **One idea at a time:** runs with particles (2), names (3), method (4), compare (5), product (6), leftover and check (7), the moles trap (8), product and leftover (9), purpose (10).
- **Video makes it easier:** molecules grouped into runs and snapped into water (2); the runs meter makes "÷ coefficient" visible as bar length in every example (3, 5, 8, 12, 14); the bridge gains a compare gate (4); the conservation stack balances 14.0 g (7).
- **Response opportunity:** 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each. Feedback about 28 s and 29 s.
- **Avoided double teaching:** n = m ÷ MM (m2-v03), mole ratios (m2-v06), the four-step bridge and theoretical mass (m2-v07) and conservation (m2-v01) are recalled, not re-taught.
- **Syllabus coverage:** `C2-IQ2-03` "limiting reagent reactions" (2 to 14).
- **Out of scope by design:** percentage yield, gas volumes, solutions.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) n(Al) = 5.00 ÷ 26.98 = 0.185 mol; ÷ 2 = 0.0927. n(S) = 5.00 ÷ 32.07 = 0.156 mol; ÷ 3 = 0.0520. Sulfur gives the smaller value, so sulfur is the limiting reagent (2 marks). (b) n(Al₂S₃) = 0.156 × 1 ÷ 3 = 0.0520 mol; MM(Al₂S₃) = 150.17 g mol⁻¹; m = 0.0520 × 150.17 = 7.80 g (2 marks). Classic mistake (crossed): 13.9 g (calculated from aluminium, the excess reagent).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** As on the card.
Model answer: (a) n(CH₄) = 8.00 ÷ 16.04 = 0.499 mol; ÷ 1 = 0.499. n(O₂) = 24.0 ÷ 32.00 = 0.750 mol; ÷ 2 = 0.375. Oxygen is the limiting reagent (2 marks). (b) n(CH₄ used) = 0.750 × 1 ÷ 2 = 0.375 mol; m = 0.375 × 16.04 = 6.02 g; m(CH₄ left) = 8.00 − 6.02 = 1.98 g (2 marks). Classic mistake (crossed): "methane is limiting because it has fewer moles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 10.0 g Mg; 4.0 g O₂ | 1, 5 |
| Particles | 6 H₂, 4 O₂; 3 and 4 runs; 6 H₂O; 1 O₂ left | 2, 3 |
| Mg compare | 0.411 mol, ÷ 2 = 0.206; 0.125 mol, ÷ 1 = 0.125 | 5 |
| Mg product | 0.250 mol MgO; 40.31; 10.1 g (10.08); wrong 16.6 g; O₂ needed 6.58 g | 6 |
| Mg left | 0.250 mol; 6.08 g used; 3.92 g left; 14.0 g in and out | 7 |
| Na compare | 0.435 mol, ÷ 2 = 0.2175; 70.90; 0.282 mol | 8 |
| NaCl | 0.435 mol; 58.44; 25.4 g; Cl₂ used 0.2175 mol; left 0.0646 mol, 4.58 g; slip 20.0 g | 9 |
| A1 | 0.185 mol, 0.0927; 0.156 mol, 0.0520; 150.17; 7.80 g; slip 13.9 g | 11, 12 |
| A2 | 16.04; 0.499 mol; 0.750 mol, 0.375; 6.02 g; 1.98 g | 13, 14 |
| Handoff | 2.00 g CaCO₃; 150.62 g | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November; script in the designer's scratchpad); Codex to re-check.

- 10.0 ÷ 24.31 = 0.41135; ÷ 2 = 0.20568. 4.0 ÷ 32.00 = 0.12500.
- 0.125 × 2 = 0.250; 24.31 + 16.00 = 40.31; 0.250 × 40.31 = 10.0775. 0.41135 × 40.31 = 16.582; 0.20568 × 32.00 = 6.582.
- 0.250 × 24.31 = 6.0775; 10.0 − 6.0775 = 3.9225; 10.0775 + 3.9225 = 14.000.
- 10.0 ÷ 22.99 = 0.43497; ÷ 2 = 0.21749. 2 × 35.45 = 70.90; 20.0 ÷ 70.90 = 0.28209. 22.99 + 35.45 = 58.44; 0.43497 × 58.44 = 25.420. 0.28209 − 0.21749 = 0.06460; × 70.90 = 4.580.
- 5.00 ÷ 26.98 = 0.18532; ÷ 2 = 0.092661. 5.00 ÷ 32.07 = 0.15591; ÷ 3 = 0.051970. 2(26.98) + 3(32.07) = 150.17. 0.051970 × 150.17 = 7.804; 0.092661 × 150.17 = 13.915.
- 12.01 + 4(1.008) = 16.042; 8.00 ÷ 16.042 = 0.49869. 24.0 ÷ 32.00 = 0.750; ÷ 2 = 0.375. 0.375 × 16.042 = 6.0158; 8.00 − 6.0158 = 1.984.
- Handoff: 40.08 + 12.01 + 48.00 = 100.09; 2.00 ÷ 100.09 = 0.019982.

## Memory aid check

- **"Moles over coefficient: fewest runs, runs out first."** Written for this video. Meaning: divide each reactant's moles by its coefficient to get the number of runs of the equation it could supply; the reactant with the fewest runs is used up first (the limiting reagent). Assumptions checked: it needs a balanced equation and moles (not grams); it identifies the limiting reagent only, and the yield still comes from that reagent's moles through the ratio (scene 6 and A1 show why). It holds for any number of reactants, as long as each is compared the same way. It helps a new case (both attempts; m2-v09's chips in excess acid).
- **Considered, not used:** the site's sandwich analogy (needs object plates; the molecule picture shows the same idea in exam form); "smallest number limits" alone (students apply it to raw moles, the trap itself).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,307 characters**, 16 scenes. At 13.3 characters per second the speech is about 474 s; add about 10 s of holds and settling (the particle runs in 2, the bridge gate in 4, the conservation stack in 7), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 563 s (9.4 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v08` (route chem-y11-m2-v08; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v08`.

In order (16 scene headings, all `### N.`): hook-prediction, counting-runs, limiting-excess, method, mg-compare, mg-product, mg-left, more-moles-limits, nacl-left, why-excess, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: m2-v07's final frame into scene 1 by camera continue; 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change; 4 to 5 camera continue (bridge shrinks to the icon); 5 to 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v08-learning-review.md`, `checks/c-y11-m2-v08-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/p01-mg-ribbon-v1.png`, `p01-mgo-ash-dish-v1.png`, `y11c-gas-jar-v1.png`: opening and scene 1 (m2-v07's final frame).
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (white balance, steel pan, blank display): scene 15 and final frame.
- **Inspected, not used:** `m6-marble-chips-acid-v1.png` (an open beaker; the handoff needs a flask with a cotton wool plug on a balance); `m6-conical-flask-v1.png` (empty; the chips and acid would have to be coded inside glass, which reads poorly).

Need (new plates, Codex; shared with m2-v09 and ws-v07):
1. `y11c-flask-chips-acid-plug-v1.png`: essential (handoff; m2-v09 throughout).
2. `y11c-flask-chips-acid-plug-fizz-v1.png`: essential (handoff; m2-v09).
(Briefs below; `y11c-flask-acid-plug-spent-v1.png` is requested in `chem-y11-m2-v09.md`.)

Coded: particle tray, runs meter, bridge icon and gate, calculation layout, conservation stack, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v08 and v09: marble chips flask set)

Style: as `y11c-top-pan-balance-v1.png` and `m6-conical-flask-v1.png` (painted, clean ink outline, soft shading, transparent PNG with alpha channel, no background, no shadow plane, no text or labels, no people, hands or faces). The three plates share one canvas (about 1400 × 1800 px), one flask outline and one camera, so they overlay exactly; the flask is drawn standing upright, scaled to sit on the balance pan of `y11c-top-pan-balance-v1.png` (flask base about two thirds of the pan's width).

1. `y11c-flask-chips-acid-plug-v1.png`: a 250 mL glass conical flask, about one fifth full of clear colourless liquid (dilute acid), with five or six small white-grey marble chips resting on the bottom under the liquid, and a loose plug of white cotton wool pushed into the neck, a little of it showing above the rim. No bubbles.
2. `y11c-flask-chips-acid-plug-fizz-v1.png`: plate 1 identical in every line except fine bubbles stream up from every chip and a thin froth sits at the liquid surface; the chips are unchanged in size.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site values used match `lesson13.sa.html` (concept example; worked examples 2 and 3) and the two site notes.
3. Confirm the equations are balanced: 2Mg + O₂ → 2MgO; 2H₂ + O₂ → 2H₂O; 2Na + Cl₂ → 2NaCl; 2Al + 3S → Al₂S₃; CH₄ + 2O₂ → CO₂ + 2H₂O; CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quote matches `chem-2017-y11.json` (apart from the apostrophe).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v07's final frame, and that m2-v09 opens on this final frame.

## YouTube metadata (draft)

Title: Limiting and Excess Reagents: Which Reactant Runs Out First? | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Burn 10.0 g of magnesium with only 4.0 g of oxygen: which runs out first? See why one reactant limits the product, why you can't decide by comparing grams or even moles, and the method that works: divide each reactant's moles by its coefficient. Then calculate the theoretical yield from the limiting reagent and the mass of excess reagent left over, with a conservation-of-mass check. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"
"limiting reagent reactions"

Previous: How do we calculate product mass from a reactant mass? Next: How can we measure mass changes while keeping track of escaping gas?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. "Runs" (root, learning review).** The site's "reaction-units" are spoken as "runs" of the equation. Accept, or use "sets"; the memory aid depends on it.
- **2. Significant figures with "4.0 g" (root).** Answers are shown to three significant figures as the course does with given data (author note a). Alternative: give the oxygen as 4.00 g in m2-v07's final frame and here; narration unaffected except "four point zero zero".
- **3. A1 context (science check).** Aluminium with sulfur is a calculation context only (author note f); swap for 2Al + 3Cl₂ → 2AlCl₃ with new masses if the science check prefers a less dramatic reaction.
- **4. New plates (root).** Two flask plates shared with m2-v09 (asset brief).
- **5. Site notes 1 and 2 (root).** Log if accepted.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (are "runs" clear at playback speed; does the runs meter make ÷ coefficient obvious; is scene 8's flip a surprise rather than a confusion), then the science check and Codex error check.
- Checker output (5 November): narration 6,307 characters; per scene (1 to 16): 303, 465, 410, 408, 507, 501, 481, 541, 492, 338, 258, 394, 264, 380, 490, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
