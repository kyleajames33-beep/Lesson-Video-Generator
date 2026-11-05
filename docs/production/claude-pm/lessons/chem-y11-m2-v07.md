# Year 11 Chemistry M2 V07: Mass-to-mass stoichiometry. How do we calculate product mass from a reactant mass? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,684 characters, 16 scenes, about 517 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: seventh Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 40, between `chem-y11-ws-v06` and `chem-y11-m2-v08`. Templates: `chem-y11-m2-v05.md` and `chem-y11-m1-v07.md` (Year 11 calculation videos), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry calculation conventions `chem-m5-g02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v07` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use mass to amount, the balanced ratio, then amount to mass, retaining units. Stop before two-reactant limitations"; next handoff: "Which reactant limits how much product can form?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson12.sa.html` (SHA256 `6f935143648bfa77bb02577ce5881dbf61888b8ef11101a46a4728493aeb885c`, recomputed, matches the route), sections `l12-fourstep-title` and `l12-worked-title`. Used: the hook (10 g of magnesium burnt: more, less or the same oxide? about 16.6 g); the four-step method and "never go mass to mass directly"; worked example 2's data (80.0 g Fe₂O₃ → 56.0 g Fe) with trap 1 (assuming 1 : 1 halves the iron); worked example 3's data (20.0 g MgO needs 12.1 g Mg); the key term "theoretical mass"; trap 2 (O₂, not O) on screen in the conservation check. Not used: worked example 1 (C → CO₂, a 1 : 1 case already covered by the hook), the Haber example (Year 12 context), the spot-the-error item (its idea, the ratio upside down, becomes attempt 2's crossed slip).

Owner rules applied: as `chem-y11-m2-v05.md` (one learner question; no people, hands or faces; real objects as painted plates; formulae and amounts coded; short task strip, equation strip, grouped givens with units, one reasoning stage at a time, earlier rows dimmed; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json` (the ledger's broken apostrophe in "Avogadro's" shown corrected, root decision 9):

- `C2-IQ1-02`: "relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:"
  - "solving problems regarding mass changes in chemical reactions (ACSCH046)"
- `C2-IQ2-03`: "explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (pages 39 and 40)

**Boundary:** opens on ws-v06's final frame (10.0 g Mg → ? g MgO). Teaches: why the product is heavier (oxygen atoms join; the crucible's mass rises); why the equation can't be read in grams (coefficients are mole ratios, m2-v06); the four steps (equation and ratio; mass to moles; ratio; moles to mass) with units kept; a 1 : 1 example (Mg → MgO); the conservation check (oxygen's mass accounts for the gain, `C2-IQ1-02` "mass changes"); a non-1 : 1 example (Fe₂O₃ → 2Fe) with the skipped-ratio slip; the reverse direction (MgO → Mg); the condition that the other reactant is in excess, so the result is the theoretical (maximum) mass. Not taught: limiting reagent and excess by calculation (m2-v08, the handoff), percentage yield, gas volumes, solutions.

## Decisions

- **Learner question (route wording kept).** "How do we calculate product mass from a reactant mass?" The answer, in order: the product carries the reactant's mass plus whatever joined it (2); the equation counts moles, so cross through moles (3); four steps, once forward (4, 5), checked by conservation (6); with a non-1 : 1 ratio (7, 8); backwards (9); valid when the other reactant is in plenty (10).
- **Opening frame (equals `chem-y11-ws-v06.md`'s final frame, same designer).** Magnesium ribbon plate "10.0 g Mg" → white oxide dish "? g MgO"; "2Mg + O₂ → 2MgO" above; chips "more", "less", "same"; the model panel small at the top right; the "Next" chip, which fades as scene 1 starts.
- **Hook (site hook, made a 3 s prediction in scene 1).** More, less or the same? Answer: more (16.6 g), because oxygen atoms join. A balance reading in a crucible (illustrative, 0.243 g of ribbon → 0.403 g of oxide; author note b) shows the gain as a real observation before any calculation.
- **The mole bridge (scene 3; site four steps).** Step 1: balanced equation and the mole ratio for the two substances in the question. Step 2: n = m ÷ MM (given). Step 3: n(wanted) = n(given) × coeff(wanted) ÷ coeff(given) (m2-v06's rule). Step 4: m = n × MM (wanted). The site's step 1 "balance" is kept, with "balancing video" recalled; the equations in this video are given balanced.
- **Atomic masses.** HSC data-sheet values on every card (Mg 24.31, O 16.00, Fe 55.85, Al 26.98, Cu 63.55, Ag 107.9), the course convention set in `chem-y11-m2-v03.md`, in place of the site's three-decimal values; every site result is unchanged to three significant figures (author notes a to f). Narration rounds to one decimal where spoken ("twenty-four point three").
- **Worked example 1 (scenes 4, 5; site hook values).** 10.0 g Mg ÷ 24.31 = 0.4114 mol; 2 : 2 = 1 : 1; 0.4114 mol MgO × 40.31 = 16.58 g → 16.6 g. Spoken "zero point four one one moles" and "sixteen point six grams".
- **Conservation check (scene 6; `C2-IQ1-02`).** n(O₂) = 0.4114 ÷ 2 = 0.2057 mol; × 32.00 = 6.58 g; 10.0 + 6.58 = 16.58 g, matching. The O₂ molar mass is written "2 × 16.00 = 32.00" (site trap 2: O₂, not O). This turns "mass changes in chemical reactions" into a check students can use.
- **Worked example 2 (scenes 7, 8; site data).** Fe₂O₃ + 3CO → 2Fe + 3CO₂; MM(Fe₂O₃) = 159.70; 80.0 ÷ 159.70 = 0.5009 mol; × 2 = 1.002 mol Fe; × 55.85 = 55.96 → 56.0 g. The slip (ratio skipped, 1 : 1) gives 28.0 g, exactly half; the reason for the 2 is said in particle terms ("each unit of iron oxide holds two iron atoms"). The blast-furnace context is named once (author note e); no industrial detail. The 70% check uses m2-v05's attempt 1 (Fe₂O₃ is 69.9% iron).
- **Reverse (scene 9; site worked example 3).** 20.0 g MgO ÷ 40.31 = 0.4962 mol → 0.4962 mol Mg × 24.31 = 12.06 → 12.1 g.
- **Condition and theoretical mass (scene 10; route stop).** Every answer assumes the other reactant is present in plenty, so the given substance reacts completely; the answer is then the theoretical mass (site key term: "the maximum mass of product predicted by stoichiometry, assuming complete reaction with no losses"). This is the necessary condition (AGENTS.md: keep a caveat when its omission would teach a wrong idea), and it sets up m2-v08. "Excess" and "limiting" are not named here.
- **Memory aid:** "Mass to moles, moles across, moles to mass." (see "Memory aid check").
- **Attempts (original, HSC style).** A1 (forward, 4 : 2): 8.10 g of aluminium burns, 4Al + 3O₂ → 2Al₂O₃ (Al 26.98, O 16.00), oxygen in excess. Model: 0.3002 mol Al; × 2 ÷ 4 = 0.1501 mol Al₂O₃; × 101.96 = 15.3 g. Crossed: "30.6 g" (ratio skipped). A2 (reverse, 1 : 2): Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag; mass of copper needed to deposit 10.8 g of silver, silver nitrate in excess (Cu 63.55, Ag 107.9). Model: 0.1001 mol Ag; × 1 ÷ 2 = 0.05005 mol Cu; × 63.55 = 3.18 g. Crossed: "12.7 g" (ratio upside down: × 2 instead of ÷ 2).
- **Mistake scene:** none separate. "Same mass out as in" (1, 2); "read grams from the coefficients" (2, 3; m2-v06 recalled); "skip the ratio" (8; crossed in A1); "ratio upside down" (crossed in A2); "use O, not O₂" (6, on screen); "the answer is always what you'd get" (10).
- **Handoff (route next: `chem-y11-m2-v08`, "Which reactant limits how much product can form?").** Scene 15: what if the oxygen doesn't come in plenty? 10.0 g of magnesium with only 4.0 g of oxygen. Final frame shows both masses and "which runs out first?". No answer is given (4.0 g of O₂ is 0.125 mol and would use 6.08 g of Mg, so oxygen limits; author note h, for the m2-v08 designer).
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted):**
  1. Short answer Q3 model answer: "The extra mass comes from oxygen incorporated into the product (16.0 g/mol of O₂ accounts for the extra mass)." 16.0 g mol⁻¹ is the molar mass of O atoms; O₂ is 32.0 g mol⁻¹. Suggest "(each mole of MgO contains 16.0 g of oxygen atoms)".
  2. Short answer Q4 (b) and (c): m(H₂) = 2.999 × 2.016 = 6.046 g (written 6.05 g), then "Total reactants = 28.0 + 6.05 = 34.0 g". 28.0 + 6.05 = 34.05 g; the check works if both are kept to the same precision (34.0 + 0.05 rounding). Suggest "28.0 + 6.05 = 34.05 ≈ 34.0 g (rounding), matching 34.0 g of NH₃".
  - Checked and correct: the hook's 16.6 g; worked examples 1 to 4; drills 1 to 5 (35.7, 10.2, 50.0, 16.0, 34.0 g); Q1 (27.0 g), Q2 (21.6 g, 33.9 g), Q3 (79.6 g), Q5 (16.0 g; the 1 : 1 coincidence).
- **Cause chain taught, in order:** (1) atoms are conserved, so the product's mass includes what joined (2, 6); (2) coefficients count moles, so masses must become moles first (3); (3) molar mass converts each way (4, 5); (4) the ratio carries moles from one substance to another (5, 8); (5) a 2 in the ratio doubles the moles because each unit holds two atoms (8); (6) the path runs either way (9); (7) the answer assumes complete reaction of the given substance (10).
- **Entry knowledge:** m2-v02 (mole), m2-v03 (n = m ÷ MM, m = n × MM), m2-v06 (coefficients are mole ratios; n(wanted) rule); m2-v01 (balancing, conservation); ws-v06 (the model panel and the hook).
- **Learner-visible vocabulary (plain meaning at first use):** given substance (the one whose mass you know, 3); wanted substance (the one you're asked about, 3); theoretical mass (the most product that can form if the given substance reacts completely, 10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **bridge diagram** (scene 3: two mass banks, "mass of given" and "mass of wanted", joined by three spans "÷ MM", "× ratio", "× MM" through two mole piers; each span lights as its step runs in every example); **calculation layout** (task strip, equation strip, grouped givens with units, working rows one at a time, earlier rows dimmed, the current step's span lit on a small bridge icon above the rows); **balance readouts** (scene 2); **conservation stack** (scene 6: Mg bar 10.0 g plus O₂ bar 6.58 g equals MgO bar 16.58 g, to scale); **atom tiles** (scene 8: one Fe₂O₃ unit's two Fe tiles lift out to show the 1 : 2); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v05 and m2-v06):** masses amber; moles teal; ratios and coefficients teal with an amber outline on the pair in use; givens navy; magnesium pale green, oxygen red, iron rust, aluminium grey, copper copper-brown, silver pale grey; earlier rows dimmed; crossed items red strike.
- **Board layout (constant):** heading top left; the small bridge icon top right from scene 4; plates and equation at the left; task strip, givens and working rows at the right.

Author notes (not learner copy):
(a) WE1: 10.0 ÷ 24.31 = 0.41135 mol; MM(MgO) = 24.31 + 16.00 = 40.31; 0.41135 × 40.31 = 16.582 g. (Site values 24.31 and 16.00 give 16.583 g.)
(b) Crucible illustration: 0.243 g Mg → 0.243 ÷ 24.31 × 40.31 = 0.403 g MgO (illustrative readouts: crucible + lid 25.120 g; + ribbon 25.363 g; after heating 25.523 g, on a 0.001 g balance). Shown, not spoken beyond "the mass goes up". The lid is lifted from time to time during heating (standard method, not narrated).
(c) Conservation: n(O₂) = 0.41135 ÷ 2 = 0.20568 mol; MM(O₂) = 32.00; 0.20568 × 32.00 = 6.582 g; 10.0 + 6.582 = 16.582 g.
(d) WE2: MM(Fe₂O₃) = 2(55.85) + 3(16.00) = 159.70; 80.0 ÷ 159.70 = 0.50094; × 2 = 1.00188; × 55.85 = 55.955 g ≈ 56.0 g. Slip: 0.50094 × 55.85 = 27.98 ≈ 28.0 g. (Site values give 55.954 g.)
(e) Context: carbon monoxide reduces iron(III) oxide in a blast furnace; one sentence only; Year 12 and Module 3 carry no extra detail here.
(f) Reverse: 20.0 ÷ 40.31 = 0.49615 mol; × 24.31 = 12.062 g ≈ 12.1 g.
(g) A1: 8.10 ÷ 26.98 = 0.30022 mol; × 2 ÷ 4 = 0.15011 mol; MM(Al₂O₃) = 2(26.98) + 3(16.00) = 101.96; × = 15.305 ≈ 15.3 g. Slip: 0.30022 × 101.96 = 30.61 ≈ 30.6 g. A2: 10.8 ÷ 107.9 = 0.10009 mol Ag; ÷ 2 = 0.050046 mol Cu; × 63.55 = 3.180 ≈ 3.18 g. Slip: 0.10009 × 2 × 63.55 = 12.72 ≈ 12.7 g.
(h) Handoff (not spoken): 4.0 g O₂ ÷ 32.00 = 0.125 mol; needs 0.250 mol Mg = 6.08 g; 10.0 g Mg is more than enough, so oxygen limits; MgO formed 0.250 mol × 40.30 = 10.1 g.
(i) Pronunciations: "two M g plus O two makes two M g O"; "F e two O three plus three C O makes two F e plus three C O two"; "four A l plus three O two makes two A l two O three"; "C u plus two A g N O three"; "one hundred and fifty-nine point seven".

Main question: *How do we calculate product mass from a reactant mass?*
Entry knowledge: m2-v01 to m2-v03, m2-v06; ws-v06.
Stops after: four steps forward and backward with units; 1 : 1 and non-1 : 1 ratios; a conservation check; the excess condition and theoretical mass. No limiting reagent calculation (m2-v08), no percentage yield.
Handoff: chem-y11-m2-v08, which reactant limits.

## Opening frame and final frame

- **Opening frame:** ws-v06's final frame exactly (Decisions).
- **Final frame (m2-v08 opens on it):** at the left, the magnesium ribbon plate with "10.0 g Mg"; beside it a coded gas-jar outline (`y11c-gas-jar-v1.png`) tinted faintly, labelled "4.0 g O₂"; an arrow to the white oxide dish with "? g MgO"; above, "2Mg + O₂ → 2MgO"; the bridge icon small at the top right; an amber chip "which runs out first?"; the chip "Next: Which reactant limits how much product can form?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the question from last time. Ten point zero grams of magnesium burns in oxygen, and makes magnesium oxide. Make a quick prediction. Do you get more than ten grams of oxide, less, or exactly the **same**?

Visual: opens on ws-v06's final frame; the "Next" chip fades. On "burns" the ribbon plate gains a brief coded white glare at one end (no flame plate). On "more" the three chips "more", "less", "same" light in turn. On "same" the 3 s `Countdown` ring runs. The heading writes during the countdown: "From reactant mass to product mass".

### 2. more, and why
> More. Burning joins oxygen atoms to the magnesium atoms, so the oxide carries the magnesium's mass plus the oxygen's. You can see it in the lab. When a strip of magnesium is heated in a crucible, the reading on the balance goes **up**. That's the opposite of our copper sulfate, which lost mass as water left. Here, something joins instead. But by how much? We can't read grams from the equation, because its coefficients count moles, not **grams**.

Visual: "more" ticks. A particle strip: two pale-green Mg atoms and one red O₂ pair combine into two Mg–O pairs (HSC colours). On "in a crucible" the open crucible on a lit burner (`m5-g02b-open-crucible-v1.png`, its white solid read as the oxide) sits at the left with the balance plate (`y11c-top-pan-balance-v1.png`) beside it; on "up" a coded readout steps "25.363 g → 25.523 g" with an upward arrow (grey tag "illustrative: 0.243 g ribbon"). On "copper sulfate" a small thumbnail of the white-powder crucible with a down arrow "water left: mass down" sits beside the rising readout, "something joins: mass up". On "grams" m2-v06's memory line returns small: "Coefficients count; masses weigh."

### 3. the mole bridge
> So every mass problem crosses a bridge through moles. Step one, write the balanced equation, and read the mole ratio for the two substances in the question. Step two, turn the mass of the given substance into moles, with n equals m over M M. Step three, use the ratio to get moles of the wanted substance. Step four, turn those moles back into a mass, with m equals n times M **M**. Mass to moles, moles across, moles to **mass**.

Visual: board change. The bridge diagram draws: left bank "mass of given (g)", right bank "mass of wanted (g)", two piers "moles of given", "moles of wanted". Each span writes as spoken: "1. equation → ratio" (a banner over the bridge), "2. ÷ MM(given)", "3. × ratio", on "M" "4. × MM(wanted)". On "mass" (last) the memory line writes in hand lettering under the bridge: "Mass to moles, moles across, moles to mass." The bridge then shrinks to an icon at the top right.

### 4. magnesium: equation and moles
> Let's do the magnesium. The equation is two M g plus O two makes two M g O, so magnesium and magnesium oxide react two to two, which is one to **one**. That makes sense, because every magnesium atom ends up in one unit of the oxide. Magnesium's molar mass is about twenty-four point three, so ten point zero grams is zero point four one one **moles**.

Visual: calculation layout. Task strip: "Find the mass of MgO formed from 10.0 g of Mg". Equation strip: "2Mg + O₂ → 2MgO". Givens (navy, grouped): "m(Mg) = 10.0 g"; "Mg 24.31, O 16.00 g mol⁻¹"; grey tag "oxygen in plenty". On "one" (first full) the 2s under Mg and MgO get an amber outline; row "Mg : MgO = 2 : 2 = 1 : 1" (step 1 span lights). On "every magnesium atom" two Mg tiles each pair with one O tile (tag "1 Mg → 1 MgO"). On "moles" row "n(Mg) = 10.0 ÷ 24.31 = 0.411 mol" (step 2 span lights).

### 5. magnesium: across and back to mass
> One to one means zero point four one one moles of magnesium oxide form. Its molar mass is twenty-four point three plus sixteen point zero, about forty point three. So the mass is zero point four one one times forty point three, which is sixteen point six **grams**. More than ten, just as we **predicted**. And watch the units. Grams divided by grams per mole gave moles, and moles times grams per mole gave grams **back**.

Visual: the step 1 row dims. On "zero point four one one moles" row "n(MgO) = 0.411 × 1 = 0.411 mol" (step 3 span). On "molar mass" row "MM(MgO) = 24.31 + 16.00 = 40.31 g mol⁻¹". On "grams" row "m(MgO) = 0.411 × 40.31 = 16.6 g" (bright, step 4 span). On "predicted" the "? g MgO" chip on the oxide dish updates to "16.6 g MgO" and the "more" chip ticks. On "units" the units in the rows highlight in turn: "g ÷ g mol⁻¹ = mol" and, on "back", "mol × g mol⁻¹ = g".

### 6. where the extra mass came from
> So where did the extra six point six grams come from? From oxygen. Half as many moles of oxygen molecules react, zero point two zero six moles. The equation says O two, so its molar mass is thirty-two, not sixteen. That's six point five eight grams. Ten point zero plus six point five eight is sixteen point five **eight**, which matches. Mass is conserved, and the calculation tells us exactly how the solid's mass **changes**.

Visual: rows (compact, grey header "check"): "n(O₂) = 0.411 ÷ 2 = 0.206 mol"; "MM(O₂) = 2 × 16.00 = 32.00 g mol⁻¹" (a small chip "O₂, not O" with a red strike through "16.00 alone"); "m(O₂) = 0.206 × 32.00 = 6.58 g". On "eight" the conservation stack builds: a pale-green "Mg 10.0 g" bar plus a red "O₂ 6.58 g" bar slide end to end and match the "MgO 16.58 g" bar (tick "conserved"). On "changes" the crucible readout from scene 2 returns small with "+ mass of oxygen".

### 7. a ratio that isn't one to one
> Now a ratio that isn't one to one. In a blast furnace, iron oxide reacts with carbon monoxide. F e two O three plus three C O makes two F e plus three C O two. How much iron comes from eighty point zero grams of iron **oxide**? We only need the coefficients of the two substances in the question, iron oxide and iron, as long as there's plenty of carbon monoxide. Iron oxide's molar mass is one hundred and fifty-nine point seven, so that's zero point five zero one **moles**.

Visual: board resets. Task strip: "Find the mass of Fe formed from 80.0 g of Fe₂O₃". Equation strip: "Fe₂O₃ + 3CO → 2Fe + 3CO₂" (grey tag "blast furnace"). Givens: "m(Fe₂O₃) = 80.0 g"; "Fe 55.85, O 16.00 g mol⁻¹"; "CO in plenty". On "oxide" the coefficient pair (implied 1 under Fe₂O₃, 2 under Fe) gets the amber outline. On "two substances in the question" the "3CO" and "3CO₂" terms dim (tag "CO in plenty: not in the ratio"). On "molar mass" row "MM(Fe₂O₃) = 2(55.85) + 3(16.00) = 159.70 g mol⁻¹"; on "moles" row "n(Fe₂O₃) = 80.0 ÷ 159.70 = 0.501 mol".

### 8. the two in the ratio
> Iron oxide to iron is one to two, because each unit of iron oxide holds two iron atoms. So we get one point zero zero two moles of iron. Times fifty-five point eight five, that's fifty-six point zero grams of **iron**. Here's a quick check from the empirical formula video. Iron oxide is about seventy percent iron, and seventy percent of eighty grams is fifty-six. It **matches**. Skip the ratio, and you'd get twenty-eight point zero, exactly half. That's the classic slip in these **problems**.

Visual: on "two iron atoms" one Fe₂O₃ unit appears as atom tiles (two rust Fe, three red O); the two Fe tiles lift out (tag "1 Fe₂O₃ → 2 Fe"). Row "Fe₂O₃ : Fe = 1 : 2"; on "one point zero zero two" row "n(Fe) = 0.501 × 2 = 1.002 mol". On "iron" row "m(Fe) = 1.002 × 55.85 = 56.0 g" (bright). On "seventy percent iron" m2-v05's mass-share bar "Fe 69.9% | O 30.1%" returns small; a check row "≈ 0.70 × 80.0 = 56 g"; on "matches" a teal tick links it to the 56.0 g row. On "problems" a chip "skip the ratio: 0.501 × 55.85 = 28.0 g" fades in and is crossed (tag "half the iron").

### 9. the bridge works backwards
> The bridge works backwards too. What mass of magnesium must burn to make twenty point zero grams of magnesium oxide? Now the given substance is the product, so we start from its molar mass. Twenty point zero over forty point three is zero point four nine six moles. One to one, so that's zero point four nine six moles of magnesium, which is twelve point one **grams**. Same four steps, just starting from the other **end**.

Visual: board resets; the bridge icon enlarges and flips direction (banks now "mass of MgO (given)" and "mass of Mg (wanted)"). Task strip "Find the mass of Mg needed to make 20.0 g of MgO". On "given substance is the product" the bank labels glow. Givens: "m(MgO) = 20.0 g"; "MM(MgO) 40.31, Mg 24.31 g mol⁻¹". Rows one at a time: "n(MgO) = 20.0 ÷ 40.31 = 0.496 mol"; "Mg : MgO = 1 : 1 → n(Mg) = 0.496 mol"; on "grams" "m(Mg) = 0.496 × 24.31 = 12.1 g" (bright). On "end" the flipped bridge's spans light right to left.

### 10. the condition behind every answer
> One condition sits behind every answer here. We assumed the other reactant, the oxygen or the carbon monoxide, was there in plenty, so all of the given substance could react. That makes our answer the most product that can form, called the theoretical **mass**. Real experiments often get a little less, because some product is lost, or some reactant doesn't **react**. In a question, words like excess or plenty tell you this method fits.

Visual: the three "in plenty" givens tags from scenes 4, 7 and 9 glow and gather into one chip: "assumes: the other reactant is in plenty". Gloss chip on "mass": "theoretical mass: the most product that can form if the given substance reacts completely". On "react" a small bar pair: "theoretical 16.6 g" (amber outline) and a slightly shorter grey "real: often a little less" (tag "losses, incomplete reaction"). On "excess or plenty" the word "excess" in a ghost question line underlines in amber.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Eight point one zero grams of aluminium burns in plenty of oxygen. Four A l plus three O two makes two A l two O three. Using aluminium twenty-six point nine eight and oxygen sixteen point zero zero, calculate the mass of aluminium oxide formed. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "Aluminium burns in excess oxygen: 4Al(s) + 3O₂(g) → 2Al₂O₃(s). Calculate the mass of aluminium oxide formed when 8.10 g of aluminium burns completely. (Al = 26.98, O = 16.00) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the bridge icon dims to an outline).

### 12. feedback 1 (brief)
> Eight point one zero grams of aluminium is zero point three zero zero moles. Aluminium to aluminium oxide is four to two, so halve it, zero point one five zero moles. Times one hundred and one point nine six, that's fifteen point three grams. Skipping the ratio gives thirty point six, double the right **answer**.

Visual: card shrinks to the top. Rows: "n(Al) = 8.10 ÷ 26.98 = 0.300 mol"; "Al : Al₂O₃ = 4 : 2 → n(Al₂O₃) = 0.300 × 2 ÷ 4 = 0.150 mol"; "MM(Al₂O₃) = 2(26.98) + 3(16.00) = 101.96 g mol⁻¹"; "m = 0.150 × 101.96 = 15.3 g". On "answer" a chip "30.6 g (ratio skipped)" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one, backwards. Copper reacts with silver nitrate solution: C u plus two A g N O three makes C u N O three twice, plus two A g. What mass of copper is needed to deposit ten point eight grams of silver? Use copper sixty-three point five five and silver one hundred and seven point nine. Pause here to answer.

Visual: `QuestionCard`: "Copper reacts with excess silver nitrate solution: Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s). Calculate the mass of copper needed to deposit 10.8 g of silver. (Cu = 63.55, Ag = 107.9) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Ten point eight grams of silver is zero point one zero zero moles. Copper to silver is one to two, so copper is half of that, zero point zero five zero zero moles. Times sixty-three point five five, that's three point one eight grams. Doubling instead of halving gives twelve point seven, the ratio turned upside **down**.

Visual: card shrinks to the top. Rows: "n(Ag) = 10.8 ÷ 107.9 = 0.100 mol"; "Cu : Ag = 1 : 2 → n(Cu) = 0.100 × 1 ÷ 2 = 0.0500 mol"; "m(Cu) = 0.0500 × 63.55 = 3.18 g". On "down" a chip "12.7 g (× 2, ratio upside down)" fades in and is crossed, with the rule chip "n(wanted) = n(given) × coeff(wanted) ÷ coeff(given)". Hold about 1 second.

### 15. conclusion and handoff
> So we cross through moles: mass to moles, the mole ratio, then moles to mass, keeping the units each step. And each answer assumed the other reactant came in plenty. But what if it doesn't? Ten point zero grams of magnesium, with only four point zero grams of oxygen. One of them will run out first. Which reactant limits how much product can **form**?

Visual: the memory line at the top; the bridge icon lights all its spans once. On "in plenty" the "assumes: the other reactant is in plenty" chip glows, then cracks on "doesn't". On "Ten point zero grams of magnesium" the board clears to the ribbon plate "10.0 g Mg"; on "four point zero grams of oxygen" the gas jar (`y11c-gas-jar-v1.png`) slides in labelled "4.0 g O₂"; the equation "2Mg + O₂ → 2MgO" writes above and the oxide dish with "? g MgO" sits at the right. On "run out first" the amber chip "which runs out first?". On "form" the chip "Next: Which reactant limits how much product can form?" writes. Hold about 2 seconds. This is the final frame (m2-v08 opens on it).

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Never go straight from mass to mass: coefficients are mole ratios.
2. Four steps: (1) balanced equation, ratio for the two substances; (2) n(given) = m ÷ MM; (3) n(wanted) = n(given) × coeff(wanted) ÷ coeff(given); (4) m(wanted) = n × MM. Keep units.
3. Use the formula in the equation for molar mass (O₂ = 32.00, not 16.00).
4. Check with conservation of mass: mass of reactants used = mass of products.
5. The answer is the theoretical mass: it assumes the other reactant is in plenty.

Memory aid (large, on the notes screen): *Mass to moles, moles across, moles to mass.*

At the end the notes cross-fade back to scene 15's final frame.

## Teaching checks

- **Does it explain causes?** Why the oxide is heavier (2, 6); why moles are needed (2, 3); why the ratio for Fe is 1 : 2 (8); why the reverse works (9); why the answer is a maximum (10).
- **Misconceptions addressed:** same mass in and out (1, 2); grams from coefficients (2, 3); skipping the ratio (8, crossed in A1); ratio upside down (crossed in A2); O instead of O₂ (6); the theoretical answer is what you'll get (10).
- **One idea at a time:** why (2), method (3), example in two stages (4, 5), check (6), non-1 : 1 in two stages (7, 8), reverse (9), condition (10).
- **Video makes it easier:** a balance readout rises (2); the bridge's spans light as each step runs, in every example, and flip for the reverse (3 to 9); a conservation stack matches to the gram (6); Fe tiles lift out of Fe₂O₃ (8).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 23 s and 24 s.
- **Avoided double teaching:** n = m ÷ MM and m = n × MM recalled (m2-v03); coefficients as mole ratios and the n(wanted) rule recalled (m2-v06); balancing recalled (m2-v01).
- **Syllabus coverage:** `C2-IQ1-02` "solving problems regarding mass changes in chemical reactions" (2, 5, 6, 8, 9, A1, A2); `C2-IQ2-03` "masses, chemical amounts" (4 to 9).
- **Out of scope by design:** limiting reagent calculation, percentage yield, gases and solutions.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: n(Al) = 8.10 ÷ 26.98 = 0.300 mol (1 mark). Al : Al₂O₃ = 4 : 2, so n(Al₂O₃) = 0.300 × 2 ÷ 4 = 0.150 mol (1 mark). MM(Al₂O₃) = 101.96 g mol⁻¹; m = 0.150 × 101.96 = 15.3 g (1 mark). Classic mistake (crossed): 30.6 g (ratio skipped).

**Attempt 2 (scene 13; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: n(Ag) = 10.8 ÷ 107.9 = 0.100 mol (1 mark). Cu : Ag = 1 : 2, so n(Cu) = 0.100 × 1 ÷ 2 = 0.0500 mol (1 mark). m(Cu) = 0.0500 × 63.55 = 3.18 g (1 mark). Classic mistake (crossed): 12.7 g (ratio upside down).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 10.0 g Mg; 16.6 g MgO | 1, 5 |
| Crucible (illustrative) | 0.243 g ribbon; 25.363 → 25.523 g | 2 |
| WE1 | 24.31; 16.00; 0.411 mol; 1 : 1; 40.31; 16.6 g | 4, 5 |
| Conservation | 0.206 mol O₂; 32.00; 6.58 g; 10.0 + 6.58 = 16.58 g | 6 |
| WE2 | 80.0 g; 159.70; 0.501 mol; 1 : 2; 1.002 mol; 55.85; 56.0 g; check 69.9% ≈ 70% of 80.0 = 56; slip 28.0 g | 7, 8 |
| Reverse | 20.0 g; 0.496 mol; 12.1 g | 9 |
| A1 | 8.10 g; 26.98; 16.00; 0.300 mol; 0.150 mol; 101.96; 15.3 g; slip 30.6 g | 11, 12 |
| A2 | 10.8 g; 107.9; 63.55; 0.100 mol; 0.0500 mol; 3.18 g; slip 12.7 g | 13, 14 |
| Handoff | 10.0 g Mg; 4.0 g O₂ | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 10.0 ÷ 24.31 = 0.41135; 24.31 + 16.00 = 40.31; 0.41135 × 40.31 = 16.582.
- 0.41135 ÷ 2 = 0.20568; 2 × 16.00 = 32.00; 0.20568 × 32.00 = 6.582; 10.0 + 6.582 = 16.582.
- 2(55.85) + 3(16.00) = 159.70; 80.0 ÷ 159.70 = 0.50094; × 2 = 1.00188; × 55.85 = 55.955; slip 27.977.
- 0.70 × 80.0 = 56.0 (and 2(55.85) ÷ 159.70 = 69.94% iron).
- 20.0 ÷ 40.31 = 0.49615; × 24.31 = 12.062.
- 8.10 ÷ 26.98 = 0.30022; ÷ 2 = 0.15011; 2(26.98) + 48.00 = 101.96; 0.15011 × 101.96 = 15.305; slip 30.611.
- 10.8 ÷ 107.9 = 0.10009; ÷ 2 = 0.050046; × 63.55 = 3.1804; slip 12.722.
- 0.243 ÷ 24.31 × 40.31 = 0.4029; 25.363 + 0.160 = 25.523.

## Memory aid check

- **"Mass to moles, moles across, moles to mass."** Written for this video (a common shape of classroom phrasing). Meaning: step 2 (÷ MM of the given), step 3 (× the mole ratio, "across" the equation from one substance to another), step 4 (× MM of the wanted). Assumptions checked: it presumes step 1 (a balanced equation and the right pair of coefficients), which the bridge banner shows above the spans; "across" means the coefficient ratio, not a 1 : 1 copy (scene 8 and A1 show why). It helps a new case: both attempts, the reverse problem (read right to left), and m2-v08, which adds a comparison at the "across" step.
- **Considered, not used:** "Grams, moles, moles, grams" (shorter, but loses the direction words that make the reverse problem clear).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,684 characters**, 16 scenes. At 13.3 characters per second the speech is about 427 s; add about 9 s of holds and settling (the bridge drawing in 3, the conservation stack in 6, the tile lift in 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 517 s (8.6 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v07` (route chem-y11-m2-v07; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v07`.

In order (16 scene headings, all `### N.`): hook-prediction, why-more, mole-bridge, we1-moles, we1-mass, conservation-check, we2-moles, we2-ratio, reverse, condition, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end (as ws-v06 scene 5). Transitions: ws-v06's final frame into scene 1 by camera continue; 1 to 2 camera continue; 2 to 3 clear change; 3 to 4 camera continue (bridge shrinks to an icon); 4 to 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 clear change; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v07-learning-review.md`, `checks/c-y11-m2-v07-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/p01-mg-ribbon-v1.png` (silver ribbon on a dark heatproof tile): opening, scene 1, final frame.
- `public/assets/chemistry/p01-mgo-ash-dish-v1.png` (white powder in an evaporating dish): opening, scene 5, final frame.
- `public/assets/chemistry/m5-g02b-open-crucible-v1.png` (open crucible of white solid on a pipeclay triangle over a lit Bunsen): scene 2 (the white solid reads as the oxide; no label on the plate).
- `public/assets/chemistry/y11c-top-pan-balance-v1.png`: scene 2.
- `public/assets/chemistry/y11c-gas-jar-v1.png`: final frame (inspect its alpha and scale against the ribbon tile before build; `y11c-gas-jar-v2.png` is the alternative).
- **Inspected, not used:** `c1-burned-magnesium-v1.png` (a Year 12 colour context; the white dish is closer to a weighed product).

Need (new plates, Codex): none.

Coded: particle strip, readouts, bridge diagram and icon, calculation layout, conservation stack, atom tiles, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v07)

No new plates. Codex confirms the gas-jar plate's alpha and its scale beside `p01-mg-ribbon-v1.png` before build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site values used match `lesson12.sa.html` (hook 16.6 g; worked examples 2 and 3).
3. Confirm the equations are balanced: 2Mg + O₂ → 2MgO; Fe₂O₃ + 3CO → 2Fe + 3CO₂; 4Al + 3O₂ → 2Al₂O₃; Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.
4. Confirm both attempt cards are original, carry every needed fact (including "excess"), and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json` (apart from the corrected apostrophe).
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals ws-v06's final frame, and send the final frame to the m2-v08 designer.

## YouTube metadata (draft)

Title: Mass-to-Mass Stoichiometry: Product Mass from Reactant Mass | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Burn 10.0 g of magnesium: do you get more than 10 g of magnesium oxide, less, or the same? Learn why the product is heavier, why you can't read grams straight from an equation, and the four steps that cross through moles: balanced equation and ratio, mass to moles, moles across, moles to mass. Worked examples with a 1 : 1 ratio, a 1 : 2 ratio (iron from iron oxide) and a reverse problem, a conservation-of-mass check, and what "theoretical mass" assumes. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:"
"solving problems regarding mass changes in chemical reactions (ACSCH046)"
"explore the concept of the mole and relate this to Avogadro's constant to describe, calculate and manipulate masses, chemical amounts and numbers of particles in: (ACSCH007, ACSCH039)"

Previous: How a chemistry model solves an unfamiliar quantitative problem. Next: Which reactant limits how much product can form?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Atomic-mass values (root).** HSC data-sheet values throughout (m2-v03's convention); the site's three-decimal values give the same answers to three significant figures. As `chem-y11-m2-v05.md` open decision 1.
- **2. Crucible readouts (root).** Scene 2's illustrative readouts use a 0.001 g balance (0.243 g of ribbon gains 0.160 g); the course's balance reads to 0.01 g. Either show "0.24 g → 0.40 g" on the 0.01 g balance, or keep the 0.001 g readout with a grey tag "analytical balance". Root to choose; narration is unaffected.
- **3. Handoff numbers (m2-v08 designer).** 10.0 g Mg and 4.0 g O₂ (oxygen limits; author note h). Change both chips if m2-v08 prefers the site's lesson 13 example.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the bridge diagram clearer than the site's linear chain at playback speed; does the conservation check feel like a payoff or a detour; is scene 10's condition understood without "limiting"), then the science check and Codex error check.
- Checker output (5 November): narration 5,684 characters; per scene (1 to 16): 206, 441, 422, 343, 411, 420, 468, 485, 416, 431, 278, 310, 312, 318, 348, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
