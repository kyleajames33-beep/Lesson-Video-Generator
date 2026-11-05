# Year 11 Chemistry M2 V10: Concentration and c = n/V. How does concentration link solution volume with moles? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,672 characters, 15 scenes, about 517 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: tenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 44, between `chem-y11-ws-v07` and `chem-y11-m2-v11`. First video of inquiry question 3, "How are chemicals in solutions measured?". Templates: `chem-y11-m2-v07.md` and `chem-y11-m2-v08.md` (same series and board), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates); chemistry calculation conventions `chem-m5-g02.md`. No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v10` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use c=n/V with litres and distinguish chemical amount from concentration; solve for each variable"; next handoff: "How do we compare molarity with mass concentration and percentage units?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson06.sa.html` (SHA256 `82c1b29a678a1e32e66b23320f6b12d16e7a6d2449b00e7ec8435946f73f187b`, recomputed, matches the route), sections `l06-formula-title`, `l06-concept-title`, `l06-explorer-title`, `l06-worked-title`. Used: the definition (amount of solute per volume of solution, mol L⁻¹, "also written M"); solute, solvent, solution; the particle picture of equal volumes with different counts (here 8 against 4 in equal sample windows); the three forms of the formula and the "V must be in litres" habit with its 1000-times trap; worked examples 2 (2.00 mol L⁻¹ HCl, 0.300 mol → 150 mL) and 3 (5.85 g NaCl, 500 mL → 0.200 mol L⁻¹); trap 2 (volume of solution, not of solvent). Not used: worked example 1 (the flask example does its job), the g L⁻¹ conversion card and trap 3 (m2-v11 owns unit comparisons), the sugar-in-a-pool hook (needs object plates; the flask and beaker contrast does the same job with apparatus students have just seen), the formula triangle as a teaching device (shown only in the key notes as a recall aid; the units carry the explanation).

Owner rules applied: as `chem-y11-m2-v08.md` (one learner question; no people, hands or faces; apparatus as painted plates; particles, formulae and amounts coded; short task strip, equation strip, grouped givens with units, one reasoning stage at a time; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C2-IQ3-02`: "manipulate variables and solve problems to calculate concentration, mass or volume using:"
  - "c = n/V  (molarity formula) (ACSCH063)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on ws-v07's final frame (the spent flask: about 0.0200 mol CaCl₂ in about 50 mL, "how concentrated?"). Teaches: amount against concentration (more moles in total can still be less concentrated); solute, solvent, solution recalled in plain words; concentration as moles per litre of solution; c = n ÷ V with units (mol L⁻¹, also M); mL to L by ÷ 1000 and why; solving for c, n and V; a sample keeps the concentration but has fewer moles; mass to moles to concentration (n = m ÷ MM recalled); V is the volume of the final solution ("made up to"). Not taught: g L⁻¹, % and ppm (m2-v11, the handoff); standard-solution technique (m2-v12; the volumetric flask is named once); dilution (m2-v13; the sample idea sets it up without naming it).

## Decisions

- **Learner question (route wording kept).** "How does concentration link solution volume with moles?" The answer, in order: concentration is how much solute is in each part of the solution, not how much in total (1, 2); in chemistry, moles in each litre, so c = n ÷ V (3); litres, because the unit is per litre (4); n = c × V for a known solution, so a sample has the same c but fewer moles (5), and a measured volume delivers known moles (6); V = n ÷ c (7); from a mass, moles first (8); V is the final solution's volume (9).
- **Opening frame (equals `chem-y11-ws-v07.md`'s final frame, same designer).** Spent flask on the balance (readout dimmed); chips "CaCl₂(aq): about 0.0200 mol" and "volume: about 50 mL"; the conclusion card small at the top right; amber "how concentrated?"; the "Next" chip, which fades as scene 1 starts. In scene 1 the balance and the conclusion card fade, and the flask is lifted to stand alone.
- **Hook (3 s prediction, scene 1).** Flask: 0.0200 mol in 50 mL. Beaker: 0.100 mol in 500 mL (five times the moles). Which is more concentrated? The flask (0.400 against 0.200 mol L⁻¹). The surprise carries the route's "distinguish chemical amount from concentration".
- **The flask's numbers.** "About 50 mL" in ws-v07 is treated as 50.0 mL from scene 4 with a grey tag "taking the volume as 50.0 mL" (author note a). The flask still holds leftover acid; not mentioned (author note a).
- **Particle windows (scene 2; site concept image).** Equal sample windows (labelled "1 mL") from each container: 8 formula units in the flask's window, 4 in the beaker's. Calcium chloride drawn as formula units (one Ca²⁺ with two Cl⁻, HSC colours: Ca pale grey-green, Cl yellow-green), not separated ions; a grey tag "drawn as formula units" (author note b). Water as a pale blue field, not particles, so the solute stands out.
- **Litres (scene 4).** "Per litre" is the reason; 1 L = 1000 mL; the 1000-times-too-small trap shown with the flask (0.0200 ÷ 50 = 0.000400).
- **Sample (scene 5).** 25.0 mL pipetted from the flask: still 0.400 mol L⁻¹; n = 0.400 × 0.0250 = 0.0100 mol. This is the clearest form of "amount against concentration" and it sets up dilution (m2-v13) without naming it.
- **Atomic masses.** HSC data-sheet values (Na 22.99, Cl 35.45, Ca 40.08). Site worked example 3 gives 0.200 mol L⁻¹ with either set.
- **Memory aid:** "Moles per litre: n over V, with V in litres." (see "Memory aid check"). The formula triangle appears in the key notes as an optional recall aid.
- **Attempts (original, HSC style).** A1 (c from a mass): 3.70 g CaCl₂ made up to 250.0 mL (Ca 40.08, Cl 35.45): 110.98; 0.0333 mol; 0.133 mol L⁻¹. Crossed: "1.33 × 10⁻⁴ mol L⁻¹ (used 250 mL)". A2 (V, then a concept part): 0.150 mol L⁻¹ NaOH; volume holding 0.0120 mol = 0.0800 L = 80.0 mL; a 20.0 mL portion is still 0.150 mol L⁻¹. Crossed: "0.0018 L (multiplied c × n)".
- **Mistake scene:** none separate. "More moles means more concentrated" (1, 2); mL in the formula (4, A1); "a sample has a lower concentration" (5, A2); "V is the water added" (8).
- **Handoff (route next: `chem-y11-m2-v11`, "How do we compare molarity with mass concentration and percentage units?").** Scene 14: a saline label says 0.9% sodium chloride; is that more or less concentrated than 0.154 mol L⁻¹? (They are the same; m2-v11's hook.)
- **Site notes (read 5 November):** none found. Checked and correct: worked examples 1 to 3; drills 1 to 5 (0.200 mol L⁻¹; 0.100 mol; 150 mL; 0.1002 mol L⁻¹; 0.154 mol L⁻¹); Q1 to Q5 (0.154 mol L⁻¹ and 9.00 g L⁻¹; 50.0 mL; 177.5 kg and 1.507 × 10²⁷; 1.00 mol L⁻¹ only if the volume stays 100 mL; 39.51 g and 0.0250 mol, with the correct KMnO₄ primary-standard caution).
- **Cause chain taught, in order:** (1) concentration compares solute with the space it is spread through, so total amount alone can't decide it (1, 2); (2) chemists count solute in moles and space in litres, so c = n ÷ V (3); (3) the unit says per litre, so mL must become L (4); (4) a solution is the same throughout, so any sample has the same c, and its moles scale with its volume (5); (5) so a measured volume of a known solution delivers known moles (6); (6) rearranging gives n and V (5, 7); (7) masses become moles first (8); (8) the solute adds a little volume, so V must be the final solution's (9).
- **Entry knowledge:** Stage 5 solutions (solute, solvent, solution); m2-v02 and m2-v03 (mole, n = m ÷ MM); ws-v07 (the flask).
- **Learner-visible vocabulary (plain meaning at first use):** solute (what dissolves), solvent (what it dissolves in, here water), solution (the mixture) (2); concentration (how much solute is in each litre of solution, 2, 3); mol L⁻¹, molar, M (3); made up to (adding water until the solution reaches the mark, 9).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **container pair** (flask plate and beaker plate side by side with coded mol and volume chips); **sample windows** (scene 2: a small square "1 mL" window lifts out of each container and enlarges, showing formula units on a pale blue field); **unit bar** (scene 3: "mol L⁻¹" splits into "mol" over "L", which become n over V); **litre converter** (scene 4: "50 mL ÷ 1000 = 0.0500 L", with a ruler-like bar of 1000 mL equal to 1 L); **calculation layout** (task strip, equation strip "c = n ÷ V" with the solved-for letter in amber, grouped givens with units, rows one at a time); **pipette sample** (scene 5: the pipette plate draws 25.0 mL from the flask; its window shows the same crowding); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v07):** masses amber; moles teal; volumes navy; concentrations violet; givens navy; earlier rows dimmed; crossed items red strike.
- **Board layout (constant):** heading top left; containers at the left; equation strip, givens and rows at the right.

Author notes (not learner copy):
(a) Flask: 2.00 g CaCO₃ → 0.019982 mol CaCl₂ (ws-v07 note b), said "about zero point zero two zero zero"; volume taken as 50.0 mL; 0.0200 ÷ 0.0500 = 0.400 mol L⁻¹ (0.39964 unrounded). The leftover hydrochloric acid in the flask is not mentioned; the question is about calcium chloride only.
(b) Particle drawing: each window shows formula units for counting (8 against 4); in solution CaCl₂ is present as separate Ca²⁺ and Cl⁻ ions (m2-v11 and Module 3 draw ions). Grey tag keeps it honest. A real 1 mL holds about 2.4 × 10²⁰ formula units; the windows are a model.
(c) Beaker: 0.100 ÷ 0.500 = 0.200 mol L⁻¹. Flask ÷ beaker = 2, so 8 against 4.
(d) Sample: 0.400 × 0.0250 = 0.0100 mol.
(e) Site WE1: 0.500 ÷ 0.250 = 2.00 mol L⁻¹ (checked; not used, the flask example replaces it). Site WE2: 0.300 ÷ 2.00 = 0.150 L = 150 mL. Site WE3: NaCl 22.99 + 35.45 = 58.44; 5.85 ÷ 58.44 = 0.10010 mol; ÷ 0.500 = 0.2002 mol L⁻¹.
(f) Dissolving 0.100 mol NaCl in 500 mL of water increases the volume by roughly 1 to 2 mL (apparent molar volume of NaCl about 17 to 20 mL mol⁻¹ in dilute solution), so "slightly more than 500 mL" and a concentration "a little lower" are correct in direction.
(g) A1: CaCl₂ = 40.08 + 2(35.45) = 110.98; 3.70 ÷ 110.98 = 0.033339 mol; ÷ 0.2500 = 0.13336 mol L⁻¹ → 0.133. Slip ÷ 250 = 1.334 × 10⁻⁴.
(h) A2: 0.0120 ÷ 0.150 = 0.0800 L = 80.0 mL; slip 0.0120 × 0.150 = 0.0018 L. A 20.0 mL portion: 0.150 mol L⁻¹ (holds 0.00300 mol; not asked).
(i) Handoff (not spoken here): 0.9% w/v = 9.0 g L⁻¹ ÷ 58.44 = 0.154 mol L⁻¹.
(j) Pronunciations: "c equals n over V"; "moles per litre"; "C a C l two" not needed (the name is spoken); "M, short for molar".

Main question: *How does concentration link solution volume with moles?*
Entry knowledge: Stage 5 solutions; m2-v02, m2-v03; ws-v07.
Stops after: amount against concentration; c = n ÷ V in mol L⁻¹; litres; solving for c, n and V; sample; mass first; final volume. No other units (m2-v11), no dilution (m2-v13).
Handoff: chem-y11-m2-v11, comparing concentration units.

## Opening frame and final frame

- **Opening frame:** ws-v07's final frame exactly (Decisions).
- **Final frame (m2-v11 opens on it):** at the left, the new beaker plate `y11c-beaker-colourless-solution-v1.png` with a coded label card beside it: "saline: sodium chloride 0.9% (w/v)"; at the right, a second label card "sodium chloride solution: 0.154 mol L⁻¹"; between them an amber chip "more, less or the same?"; the chip "Next: How do we compare molarity with mass concentration and percentage units?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. which is more concentrated? (countdown, 3 seconds at the end)
> Here's our flask from last time, with about zero point zero two zero zero moles of calcium chloride in about fifty millilitres of solution. Now compare a big beaker, with zero point one zero zero moles of calcium chloride in five hundred millilitres. The beaker holds five times as many moles. So which solution is more **concentrated**?

Visual: opens on ws-v07's final frame; the "Next" chip fades, the balance and conclusion card fade, and the flask (`y11c-flask-acid-plug-spent-v1.png`) stands alone at the left with its two chips. On "big beaker" the new beaker plate `y11c-beaker-colourless-solution-v1.png` slides in at the right with chips "CaCl₂: 0.100 mol" and "volume: 500 mL". On "five times as many moles" a teal bar pair compares 0.0200 and 0.100 mol (beaker's bar five times longer). On "concentrated" two chips "flask" and "beaker" write; the 3 s `Countdown` ring runs. The heading writes during the countdown: "Concentration: c = n ÷ V".

### 2. amount isn't concentration
> It's the flask. Concentration isn't how much solute there is altogether. It's how much is packed into each part of the solution. Take the same small sample, one millilitre, from each. The flask's millilitre holds twice as many calcium chloride units as the beaker's. So the beaker has more solute in total, but the flask is more **concentrated**. A quick reminder of the words. The solute is what dissolves, the solvent is the water it dissolves in, and the solution is the **mixture**.

Visual: "flask" ticks. On "each part of the solution" a faint grid overlays both containers. On "one millilitre" a square window labelled "1 mL" lifts out of each and enlarges side by side: the flask's shows 8 formula units, the beaker's 4 (grey tag "drawn as formula units"). On "twice as many" a counter writes "8" and "4" and a chip "2 ×". On "concentrated" the teal moles bars from scene 1 slide aside and a violet "crowding" bar pair appears, the flask's twice the beaker's. On "solute" a gloss row writes: "solute: what dissolves (CaCl₂)"; on "solvent" "solvent: what it dissolves in (water)"; on "mixture" "solution: the mixture".

### 3. moles per litre
> In chemistry, we measure concentration as the number of moles of solute in each litre of solution. So the formula is c equals n over V. The concentration in moles per litre equals the chemical amount in moles, divided by the volume of the solution in **litres**. The unit tells you the formula. Moles per litre means moles **divided** by litres. You'll also see moles per litre written as a capital M, short for molar.

Visual: board change to the calculation side. On "each litre" a 1 L box outline draws around a cluster of formula units, tag "1 L of solution". On "c equals n over V" the equation strip writes "c = n ÷ V" in violet, teal and navy. On "litres" three unit chips attach: "c (mol L⁻¹)", "n (mol)", "V (L)". On "unit tells you" the unit "mol L⁻¹" enlarges; on "divided" it splits into "mol" over a fraction bar over "L", and these slide onto n and V. On "capital M" a grey chip "mol L⁻¹ = M (molar)".

### 4. litres first
> Lab volumes are usually in millilitres, so convert first. There are a thousand millilitres in a litre, so divide by a **thousand**. Fifty millilitres is zero point zero five zero zero litres. So our flask is zero point zero two zero zero moles over zero point zero five zero zero litres, which is zero point four zero zero moles per **litre**. The beaker is zero point one zero zero over zero point five zero zero, which is zero point two zero zero. The flask is twice as concentrated, just like the **picture**. Put in fifty instead of zero point zero five, and your answer comes out a thousand times too small.

Visual: the litre converter: a bar "1000 mL = 1 L". On "thousand" a row "V = 50.0 mL ÷ 1000 = 0.0500 L" (grey tag "taking the volume as 50.0 mL"). Task strip "Find the concentration of CaCl₂ in each container". Givens (navy): flask "n = 0.0200 mol, V = 50.0 mL"; beaker "n = 0.100 mol, V = 500 mL". On "litre" (first full) row "c(flask) = 0.0200 ÷ 0.0500 = 0.400 mol L⁻¹" (bright). On "zero point two zero zero" row "c(beaker) = 0.100 ÷ 0.500 = 0.200 mol L⁻¹". On "picture" the scene 2 windows return small beside the two results, "8 : 4 = 0.400 : 0.200". On "fifty instead of" a chip "0.0200 ÷ 50 = 0.000400 mol L⁻¹" fades in and is crossed, tag "used mL: 1000 × too small".

### 5. moles in a sample
> The formula rearranges, so you can find any of the three. To find moles, multiply: n equals c times V. Say we pipette twenty-five point zero millilitres out of the flask. Its concentration is still zero point four zero zero moles per litre, because every part of a solution is the same. But it holds only zero point four zero zero times zero point zero two five zero, which is zero point zero one zero zero **moles**. Taking a sample changes the amount, but not the **concentration**.

Visual: equation strip "n = c × V" (n amber). On "pipette" the pipette plate (`m6-volumetric-pipette-filler-v1.png`) dips into the flask by code and lifts out with a coded liquid column; a chip "25.0 mL". On "still zero point four zero zero" the pipette's own "1 mL" window shows 8 formula units, matching the flask's. On "zero point four zero zero times" row "V = 25.0 ÷ 1000 = 0.0250 L"; on "moles" row "n = 0.400 × 0.0250 = 0.0100 mol" (bright). On "concentration" two chips write under the pipette: "amount: 0.0100 mol (less)" and "concentration: 0.400 mol L⁻¹ (same)".

### 6. why chemists use concentration
> This is why chemists use concentration. Once a solution's concentration is known, measuring out a volume measures out moles. Need zero point zero one zero zero moles of calcium chloride for a reaction? Just pipette twenty-five millilitres of the flask's solution. There's no weighing, and the reactant is already dissolved and ready to **react**.

Visual: the pipette from scene 5 holds its "0.0100 mol" chip. On "measuring out a volume measures out moles" a two-way arrow writes between chips "volume (L)" and "moles", labelled "× c". On "Need zero point zero one zero zero moles" a navy request chip "need: 0.0100 mol CaCl₂"; on "pipette twenty-five millilitres" the pipette tilts by code over a small coded reaction beaker outline and its liquid column empties into it; on "react" the request chip ticks, tag "no weighing: volume × concentration".

### 7. finding a volume
> To find a volume, divide: V equals n over c. What volume of two point zero zero mole per litre hydrochloric acid holds zero point three zero zero moles? Zero point three zero zero over two point zero zero is zero point one five zero litres, which is one hundred and fifty **millilitres**. Quick check. This acid holds two moles in every litre, so a third of a mole needs well under a litre. And it **does**.

Visual: board resets. Equation strip "V = n ÷ c" (V amber). Task strip "Find the volume of 2.00 mol L⁻¹ HCl that contains 0.300 mol". Givens: "c = 2.00 mol L⁻¹"; "n = 0.300 mol". On "zero point one five zero litres" row "V = 0.300 ÷ 2.00 = 0.150 L"; on "millilitres" "= 150 mL" (bright). On "two moles in every litre" a 1 L bar with "2.00 mol" marked; on "does" a 150 mL segment of it lights, tag "0.300 mol".

### 8. starting from a mass
> Often you start from a mass. Five point eight five grams of sodium chloride is dissolved and made up to five hundred millilitres of solution. First, mass to moles, as in the molar mass video. Five point eight five over fifty-eight point four four is zero point one zero zero moles. Then c equals n over V: zero point one zero zero over zero point five zero zero is zero point two zero zero moles per **litre**. Two steps, and the rule is the same as always: get to moles **first**.

Visual: board resets. Task strip "Find the concentration of NaCl: 5.85 g made up to 500 mL". Givens: "m(NaCl) = 5.85 g"; "V = 500 mL"; "Na 22.99, Cl 35.45 g mol⁻¹". On "mass to moles" row "MM(NaCl) = 22.99 + 35.45 = 58.44 g mol⁻¹"; on "zero point one zero zero moles" row "n = 5.85 ÷ 58.44 = 0.100 mol"; on "litre" rows "V = 0.500 L" and "c = 0.100 ÷ 0.500 = 0.200 mol L⁻¹" (bright). On "first" a small chain writes: "mass → (÷ MM) → moles → (÷ V) → concentration".

### 9. the volume of the solution
> Notice the words "made up to". V is the volume of the whole solution, not the water you started with. So you dissolve the salt in a little water, then add water until the solution reaches the line on a volumetric **flask**. Dissolving the salt in five hundred millilitres of water would give slightly more than five hundred millilitres of solution, so the real concentration would be a little **lower**. A later video shows how to do this accurately.

Visual: the words "made up to" underline in the task strip. On "not the water you started with" two chips "V = volume of solution" (tick) and "V = volume of water added" (crossed). On "flask" the volumetric flask plate (`m6-volumetric-flask-v1.png`) appears with a coded liquid line rising to its etched mark, tag "500 mL of solution". On "slightly more" a ghost beaker shows "500 mL water + salt → about 501 to 502 mL" (grey tag "the salt takes up a little space"); on "lower" an amber down-arrow beside "c". A grey chip "standard solutions: later video" sits at the foot.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Three point seven zero grams of calcium chloride is dissolved in water and made up to two hundred and fifty point zero millilitres of solution. Calculate the concentration in moles per litre. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "3.70 g of calcium chloride, CaCl₂, is dissolved in water and the solution is made up to 250.0 mL. Calculate the concentration of the calcium chloride solution in mol L⁻¹. (Ca = 40.08, Cl = 35.45) (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Calcium chloride's molar mass is one hundred and ten point nine eight, so that's zero point zero three three three moles. The volume is zero point two five zero zero litres. Zero point zero three three three over zero point two five zero zero is zero point one three three moles per litre. Using two hundred and fifty instead of litres gives an answer a thousand times too **small**.

Visual: card shrinks to the top. Rows: "MM(CaCl₂) = 40.08 + 2(35.45) = 110.98 g mol⁻¹"; "n = 3.70 ÷ 110.98 = 0.0333 mol"; "V = 250.0 ÷ 1000 = 0.2500 L"; "c = 0.0333 ÷ 0.2500 = 0.133 mol L⁻¹" (bright). On "small" a chip "1.33 × 10⁻⁴ mol L⁻¹ (used 250 mL)" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A bottle holds sodium hydroxide solution at zero point one five zero moles per litre. What volume of it contains zero point zero one two zero moles? And what is the concentration of a twenty point zero millilitre portion poured from the bottle? Pause here to answer.

Visual: `QuestionCard`: "A bottle contains sodium hydroxide solution with a concentration of 0.150 mol L⁻¹. (a) Calculate the volume of this solution, in mL, that contains 0.0120 mol of sodium hydroxide. (b) A 20.0 mL portion is poured from the bottle into a beaker. State the concentration of sodium hydroxide in the portion, and explain your answer. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> V equals n over c. Zero point zero one two zero over zero point one five zero is zero point zero eight zero zero litres, or eighty point zero millilitres. The portion is still zero point one five zero moles per litre, because pouring some out doesn't change how much is in each litre. Multiplying instead of dividing is the classic **slip**.

Visual: card shrinks to the top. Rows: "V = n ÷ c = 0.0120 ÷ 0.150 = 0.0800 L = 80.0 mL" (bright); "(b) c = 0.150 mol L⁻¹: a portion of a solution has the same concentration". On "slip" a chip "V = 0.0120 × 0.150 = 0.0018 L" fades in and is crossed. Hold about 1 second.

### 14. conclusion and handoff
> So concentration links them: c equals n over V, with V in litres. Multiply by the volume to get moles, or divide moles by concentration to get a volume. But labels don't always use moles. A bag of saline from a hospital says zero point nine percent sodium chloride. Is that more concentrated, less, or the same as zero point one five four moles per litre? How do we compare molarity with mass concentration and percentage **units**?

Visual: the memory line writes at the top: "Moles per litre: n over V, with V in litres." The three forms write in a column: "c = n ÷ V", "n = c × V", "V = n ÷ c". On "labels don't always use moles" the board clears to the beaker plate at the left; on "zero point nine percent" a label card "saline: sodium chloride 0.9% (w/v)" writes beside it; on "zero point one five four moles per litre" a second card at the right "sodium chloride solution: 0.154 mol L⁻¹"; amber chip "more, less or the same?". On "units" the chip "Next: How do we compare molarity with mass concentration and percentage units?" writes. Hold about 2 seconds. This is the final frame (m2-v11 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Concentration: the amount of solute in each litre of solution. c = n ÷ V; units mol L⁻¹ (also M).
2. V must be in litres: mL ÷ 1000 = L. V is the volume of the final solution, not the water added.
3. n = c × V and V = n ÷ c (triangle: n on top, c × V below).
4. Amount is not concentration: a sample has the same c but fewer moles.
5. From a mass: n = m ÷ MM first, then c = n ÷ V.

Memory aid (large, on the notes screen): *Moles per litre: n over V, with V in litres.*

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the flask is more concentrated (2); why litres (3, 4); why a sample keeps its concentration (5); why concentration is useful (6); why masses become moles first (8); why the final volume (9).
- **Misconceptions addressed:** more moles means more concentrated (1, 2); mL in the formula (4, A1); a sample is less concentrated (5, A2); V is the water added (9); multiplying for V (A2).
- **One idea at a time:** amount against concentration (1, 2), the formula (3), litres (4), n (5), use (6), V (7), mass first (8), final volume (9).
- **Video makes it easier:** equal sample windows show crowding directly (2, 4, 5); the unit splits into the formula (3); the pipette's window matches the flask's (5); the 1 L bar shows 150 mL holding 0.300 mol (7).
- **Response opportunity:** 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each. Feedback about 26 s and 24 s.
- **Avoided double teaching:** the mole and n = m ÷ MM (m2-v02, m2-v03) recalled; the flask from m2-v09 and ws-v07 reused; volumetric technique left to m2-v12.
- **Syllabus coverage:** `C2-IQ3-02` "c = n/V (molarity formula)": calculate concentration (4, 8, A1), moles (5, 6) and volume (7, A2).
- **Out of scope by design:** g L⁻¹, %, ppm (m2-v11); standard solutions (m2-v12); dilution (m2-v13).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: MM(CaCl₂) = 40.08 + 2(35.45) = 110.98 g mol⁻¹; n = 3.70 ÷ 110.98 = 0.0333 mol (1 mark). V = 250.0 ÷ 1000 = 0.2500 L (1 mark). c = 0.0333 ÷ 0.2500 = 0.133 mol L⁻¹ (1 mark). Classic mistake (crossed): 1.33 × 10⁻⁴ mol L⁻¹ (volume left in mL).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) V = n ÷ c = 0.0120 ÷ 0.150 = 0.0800 L = 80.0 mL (2 marks). (b) 0.150 mol L⁻¹: a solution has the same concentration throughout, so pouring out a portion changes the amount but not the concentration (1 mark). Classic mistake (crossed): 0.0018 L (multiplied c × n).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | flask 0.0200 mol, 50 mL; beaker 0.100 mol, 500 mL; 5 × moles | 1 |
| Windows | 8 and 4 per "1 mL" (model) | 2, 4, 5 |
| Litres | 50.0 mL = 0.0500 L; 0.400 and 0.200 mol L⁻¹; slip 0.000400 | 4 |
| Sample | 25.0 mL = 0.0250 L; 0.0100 mol | 5, 6 |
| Volume | 2.00 mol L⁻¹; 0.300 mol; 0.150 L = 150 mL | 7 |
| Mass | 5.85 g; 58.44; 0.100 mol; 0.500 L; 0.200 mol L⁻¹ | 8 |
| Final volume | about 501 to 502 mL (illustrative direction) | 9 |
| A1 | 3.70 g; 110.98; 0.0333 mol; 0.2500 L; 0.133 mol L⁻¹; slip 1.33 × 10⁻⁴ | 10, 11 |
| A2 | 0.150 mol L⁻¹; 0.0120 mol; 0.0800 L = 80.0 mL; 20.0 mL portion 0.150 mol L⁻¹; slip 0.0018 L | 12, 13 |
| Handoff | 0.9%; 0.154 mol L⁻¹ | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 0.0200 ÷ 0.0500 = 0.400; 0.100 ÷ 0.500 = 0.200; 0.0200 ÷ 50 = 0.000400.
- 0.400 × 0.0250 = 0.0100.
- 0.300 ÷ 2.00 = 0.150.
- 22.99 + 35.45 = 58.44; 5.85 ÷ 58.44 = 0.10010; ÷ 0.500 = 0.2002.
- 40.08 + 70.90 = 110.98; 3.70 ÷ 110.98 = 0.033339; ÷ 0.2500 = 0.13336; ÷ 250 = 1.3336 × 10⁻⁴.
- 0.0120 ÷ 0.150 = 0.0800; 0.0120 × 0.150 = 0.0018.
- Handoff: 9.0 ÷ 58.44 = 0.1540.

## Memory aid check

- **"Moles per litre: n over V, with V in litres."** Written for this video. Meaning: the unit's words give the formula (moles divided by litres), and the volume must be converted to litres before dividing. Assumptions checked: n is the solute's moles and V the final solution's volume (scene 8); it gives c in mol L⁻¹ only (other units are m2-v11's). It helps a new case: rearranging for n and V follows from the same fraction (5, 7), and dilution (m2-v13) uses n = c × V.
- **Considered, not used:** the formula triangle as the main aid (kept in the key notes; it hides why the units fit).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **5,672 characters**, 15 scenes. At 13.3 characters per second the speech is about 426 s; add about 12 s of holds and settling (the sample windows in 2, the pipette in 5 and 6), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 517 s (8.6 minutes)**.

## Scene list and build ids

Lesson key `c-y11-m2-v10` (route chem-y11-m2-v10; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v10`.

In order (15 scene headings, all `### N.`): which-concentrated, amount-not-concentration, moles-per-litre, litres-first, sample-moles, why-useful, find-volume, from-mass, solution-volume, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions: ws-v07's final frame into scene 1 by camera continue (balance and card fade); 1 to 2 camera push to the windows; 2 to 3 clear change; 3 to 4 to 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change; 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: prediction countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v10-learning-review.md`, `checks/c-y11-m2-v10-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `y11c-flask-acid-plug-spent-v1.png` (requested in `chem-y11-m2-v09.md`): opening and scenes 1, 2, 4, 5, 6.
- `public/assets/chemistry/m6-volumetric-pipette-filler-v1.png` (bulb pipette with a red filler, diagonal): scenes 5 and 6 (rotated by code; no hand).
- `public/assets/chemistry/m6-volumetric-flask-v1.png` (stoppered volumetric flask with an etched mark): scene 9.
- **Inspected, not used:** `m6-beaker-v1.png` (empty beaker; the hook needs a visible solution, so the new plate below is an edit of it); `c11-cuso4-beaker-dissolved-v1.png` (blue: reads as copper sulfate, not calcium chloride); `m5x-graduated-pipette-v1.png` (a bulb pipette fits "pipette 25.0 mL").

Need (new plates, Codex):
1. `y11c-beaker-colourless-solution-v1.png`: essential (scene 1, final frame; m2-v11 reuses it).

Coded: container chips, sample windows, unit bar, litre converter, calculation layout, pipette liquid column, label cards, chips, cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v10)

1. `y11c-beaker-colourless-solution-v1.png` (2048 × 2048 px, the same canvas as `m6-beaker-v1.png`): **edit of that plate**, identical in every line, except it is about two thirds full of a clear, colourless liquid with a visible meniscus line and a faint pale-blue tint at the edges for legibility on the dark board. No bubbles, no solid, no text or graduations, no people, hands or faces. Transparent PNG with alpha channel.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site values used match `lesson06.sa.html` (worked examples 2 and 3; trap 2).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the syllabus quote matches `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested (the pipette moves by code); no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals ws-v07's final frame, and that m2-v11 opens on this final frame.

## YouTube metadata (draft)

Title: Concentration and c = n/V: Moles, Volume and Molarity | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

A flask with 0.0200 mol of calcium chloride, a beaker with five times as much: which is more concentrated? See why concentration is about how crowded the solute is, not how much there is, and how c = n/V links moles and volume. Learn why volumes must be in litres, how to find concentration, moles or volume, why a sample keeps its concentration, how to start from a mass, and what "made up to" means. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"manipulate variables and solve problems to calculate concentration, mass or volume using:"
"c = n/V  (molarity formula) (ACSCH063)"

Previous: How do we communicate a chemistry conclusion that evidence supports? Next: How do we compare molarity with mass concentration and percentage units?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. The flask's "about 50 mL" (root).** Taken as 50.0 mL from scene 4 with a grey tag (author note a). Alternative: open on a fresh flask made up to 50.0 mL; the join to ws-v07 then needs one more visual step.
- **2. Formula units in the windows (science check).** Drawn as CaCl₂ units with a grey tag (author note b), for counting; ions are drawn from m2-v11 on.
- **3. New plate (root).** One beaker edit (asset brief).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the hook's surprise land; are the windows read as samples of equal size; is the "made up to" point clear without the technique), then the science check and Codex error check.
- Checker output (5 November): narration 5,672 characters; per scene (1 to 15): 333, 478, 410, 600, 476, 342, 399, 473, 442, 224, 379, 276, 337, 428, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
