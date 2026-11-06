# Year 11 Chemistry M2 V13: Dilution. Why does dilution preserve the moles in the transferred sample? (design)

Status: Revision 2 (6 Nov 2026): brief 181 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,665 characters, 15 scenes, about 513 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: thirteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 47, between `chem-y11-m2-v12` and `chem-y11-m2-v14`. Templates: `chem-y11-m2-v12.md` (same designer; bench conventions and the running standard solution), `chem-y11-m2-v07.md` (calculation layout), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v13` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Distinguish stock, aliquot and final volume, derive c1V1=c2V2 and perform the dilution."; next handoff: "How do solution mole ratios determine an unknown concentration?"; practical: "Volumetric dilution"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson07.sa.html` (SHA256 `66d6b0cb43de0d67b103955a9c31a192a8ec337c86dcc9be19e01bb6d17f4501`, recomputed, matches the route), sections `l07-dilution-title` and `l07-worked-title`. Used: "When you add water to a solution, you increase its volume but the number of moles of solute stays the same"; the before and after particle picture; the derivation (n₁ = n₂, so c₁V₁ = c₂V₂; "V₁ and V₂ must be in the same units ... the units cancel"); key term "aliquot"; worked example 3's data (6.00 mol L⁻¹ H₂SO₄ to 250 mL of 0.500 mol L⁻¹: 20.8 mL) with the site's safety boundary ("Concentrated acid is always added slowly to water (never water to acid)"); trap 1 (c₂ must be smaller than c₁; swapped volumes) and trap 2 (V₂ is the total final volume, not the water added). Not used: worked example 2 (100 mL of 2.00 mol L⁻¹ HCl to 500 mL, the same move as this video's own case), serial dilution (a repeat of one dilution; author note e), worked example 1 and the primary standards (m2-v12).

Owner rules applied: as `chem-y11-m2-v12.md` (one learner question; no people, hands or faces: the pipette and flasks move by code; apparatus as painted plates; particles, levels and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C2-IQ3-02`: "manipulate variables and solve problems to calculate concentration, mass or volume using:"
  - "dilutions (number of moles before dilution = number of moles of sample after dilution)"
- `C2-IQ3-03`: "conduct an investigation to make a standard solution and perform a dilution"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v12's final frame (the 0.1003 mol L⁻¹ standard, a pipette, an empty 250.0 mL flask, "need 0.01003 mol L⁻¹"). Teaches: why the moles in the transferred aliquot are unchanged by adding water (no solute added, none lost; particles spread out); dilution defined; stock, aliquot and final volume, with c₁, V₁, V₂; the case by moles (n = c₁V₁, then c₂ = n ÷ V₂); c₁V₁ = c₂V₂ derived from "moles before = moles after", and why the volume units only need to match; performing the dilution (rinse the pipette with stock, fill to the line with a filler, drain, leave the tip drop; make up to the mark, stopper, invert); the error direction of a water-rinsed pipette against a wet flask; the rearranged form for V₁ (site worked example 3) with the acid-to-water rule; two checks (c₂ < c₁; V₂ is the total). Not taught: serial dilution (author note e), titration (m2-v14, the handoff), mixing two different solutions.

## Decisions

- **Learner question (route wording kept).** "Why does dilution preserve the moles in the transferred sample?" The answer, in order: water adds no solute and none leaves, so the particles just spread out (1, 2); naming the three quantities (3); following the moles gives c₂ (4); moles before = moles after is c₁V₁ = c₂V₂ (5); doing it so the aliquot really carries those moles (6, 7); working backwards (8); two checks (9).
- **Opening frame (equals `chem-y11-m2-v12.md`'s final frame, same designer).** The standard flask "Na₂CO₃ 0.1003 mol L⁻¹ (standard)"; the pipette with filler; the empty 250.0 mL flask with "need 0.01003 mol L⁻¹"; chips "weigh 0.2657 g again?" (greyed) and "take some, add water?" (amber); the c = n ÷ V gauge at the top right; the "Next" chip, which fades.
- **The case (continues m2-v12).** 25.00 mL of the 0.1003 mol L⁻¹ standard made up to 250.0 mL: n = 0.1003 × 0.02500 = 2.508 × 10⁻³ mol; c₂ = 2.508 × 10⁻³ ÷ 0.2500 = 0.01003 mol L⁻¹; a ten-fold dilution. If root changes m2-v12's recorded mass (its open decision 2), the case becomes 0.1000 → 0.01000 with n = 2.500 × 10⁻³ mol.
- **Hook prediction (3 s, scene 1).** "Compared with the 25 mL we took, does the flask now hold more sodium carbonate, less, or the same?" Students who think "diluted means less" meet the distinction between amount and concentration (m2-v10) in a new case.
- **Particle picture (site's before and after, made to move).** Ten coded solute dots leave the pipette and arrive in the flask; water fills around them; the count chip "drawn solute dots: 10" never changes while the concentration chip falls tenfold; a separate teal chip states "n unchanged: 2.508 × 10⁻³ mol" (Revision 2, brief 181 finding 5: dots are a drawing, n is an amount in mol). HSC convention: solute particles as coloured dots, water as a pale fill, not drawn molecule by molecule.
- **Analogy (site warm-up, `l07-warmup-title`).** Topping up cordial: weaker taste, same syrup in the glass. Limits: it shows amount against concentration only; the volumetric precision is taught separately (6, 7). One sentence in scene 2; shown as a small coded glass icon beside the particle lens.
- **Units (site derivation).** V₁ and V₂ may stay in mL because c₂ = c₁ × V₁ ÷ V₂ uses their ratio; c = n ÷ V still needs litres (scene 4 does it in litres first, then scene 5 shows the one-line form in mL).
- **Pipette technique (route "perform the dilution").** Rinse with a little stock (water inside would dilute the stock drawn up, so fewer moles, so c₂ lower); pipette filler (never by mouth: shown by the filler, not narrated); bottom of the meniscus on the line; drain, touch the tip to the glass, leave the last drop (the pipette is calibrated to deliver with that drop retained). The flask may be wet with distilled water (no effect). These are the two contrasting rinse rules; m2-v14 adds the burette.
- **Worked example (site worked example 3, unchanged).** 6.00 mol L⁻¹ H₂SO₄ to 250 mL of 0.500 mol L⁻¹: V₁ = 0.500 × 250 ÷ 6.00 = 20.8 mL. Safety (site boundary): technician work; acid slowly into water, never water into acid, because mixing releases a lot of heat; fume cupboard, glasses, gloves, coat on a strip.
- **Memory aid (see "Memory aid check"):** "Water adds volume, not moles."
- **Attempts (original wording, HSC style).** A1 (V₂ trap): 20.0 mL of 0.500 mol L⁻¹ NaCl diluted by adding 80.0 mL of water: 0.100 mol L⁻¹; crossed "0.125 mol L⁻¹ (V₂ = 80.0 mL)". A2 (rearranged): volume of 2.00 mol L⁻¹ stock for 500.0 mL of 0.150 mol L⁻¹: 37.5 mL; crossed "6670 mL (concentrations flipped)".
- **Mistake scene:** none separate. "Diluting removes solute" (1, 2); "V₂ is the water added" (3, 9; crossed in A1); "volumes must be in litres for c₁V₁ = c₂V₂" (5); "rinse the pipette with water" (7); "blow out the last drop" (6); "c₂ bigger than c₁" (9; crossed in A2); "water into acid" (8).
- **Handoff (route next: `chem-y11-m2-v14`, "How do solution mole ratios determine an unknown concentration?").** Scene 14: the technician's hydrochloric acid for the class is only roughly known, about 0.2 mol L⁻¹; our standard reacts with it; can a measured amount of standard and the mole ratio reveal its concentration? Final frame: see "Opening frame and final frame".
- **Site notes (read 5 November; for root to log if accepted):**
  1. `l07-predict-title` reveal and the "Revisit your thinking" card are correct; no change. Short answer Q5's volume problem is logged in `chem-y11-m2-v12.md` site note 4.
  2. Drill 5 model answer: "12.5 mL pipette into a 250 mL volumetric flask". School bulb pipettes come in fixed sizes (10, 20, 25, 50 mL); 12.5 mL needs a burette or graduated pipette. Suggest "12.5 mL (measured with a burette or graduated pipette)".
  - Checked and correct: predict item (0.120 mol L⁻¹); worked examples 2 (0.400) and 3 (20.8 mL); drills 1 to 5 (0.500, 20.8 mL, 0.100, 1.00, 12.5 mL); Q2 (2.55 mL); Q3 (0.200, 8.00 × 10⁻³, 2.00 × 10⁻⁴ mol).
- **Cause chain taught, in order:** (1) water brings no solute and none leaves, so n is unchanged (2); (2) the same n in a bigger V gives a smaller c (2, 4); (3) n before = n after, and n = cV on each side, gives c₁V₁ = c₂V₂ (5); (4) the aliquot must really carry c₁V₁ moles, so the pipette is rinsed with stock (7); (5) water already in the flask adds nothing that matters, because water is added to the mark anyway (7); (6) the formula rearranges for any one unknown (8).
- **Entry knowledge:** m2-v10 (c = n ÷ V; amount versus concentration); m2-v12 (the standard, making up to the mark, inverting, error directions).
- **Learner-visible vocabulary (plain meaning at first use):** dilution (adding solvent to lower the concentration, while the amount of solute stays the same, 2); stock (the solution you take from, 3); aliquot (the measured portion you transfer, 3); final volume (the total after making up to the mark, 3); pipette (a glass tube made to deliver one exact volume, 6); pipette filler (the bulb that draws liquid up, 6).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **particle transfer** (scenes 1, 2: ten violet dots inside the pipette; the pipette empties into the flask; water fill rises around them; count chip "drawn solute dots: 10" stays beside "n unchanged: 2.508 × 10⁻³ mol", chip "c ÷ 10" appears; Revision 2 adds the dilution slider); **three-volume strip** (scene 3: three labelled brackets on the apparatus, "stock: c₁", "aliquot: V₁ = 25.00 mL", "final volume: V₂ = 250.0 mL", with a grey ghost bracket "water added: 225.0 mL" crossed as not V₂); **equation build** (scene 5: "n before = n after" morphs to "c₁V₁ = c₂V₂", each symbol flying in from the row it came from); **pipette level magnifier** (scene 6: meniscus on the line; the tip drop glows "left behind: calibrated"); **dilution-in-pipette lens** (scene 7: a water film inside the pipette mixes with stock; dot count in the aliquot drops from 10 to 9); calculation layout; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v12):** moles teal; volumes slate blue; concentrations violet; givens navy; "lower" arrows rose; crossed items red strike; safety strip amber outline.
- **Board layout (Revision 2):** heading top left; c = n ÷ V gauge top right; the stock flask at the left, pipette at the centre, the new flask at the right (bench order); calculation rows in the right column once the bench shrinks. Revision 2 cuts the scenes 1 to 3 bench stretch (about 98 s) with a full-height particle-lens stage and the dilution slider in scene 2; scene 4 is a full-width calculation; scene 6 returns to the bench; scene 8 is its own calculation stage. No stage runs longer than about 70 s.
- **Colour roles (Revision 2, fixed for the whole video):** moles teal; volumes slate blue; concentrations violet; givens navy; "lower" arrows rose; safety strip amber outline; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p):** the current working row at least 44 px (rows 48 px; "c₁V₁ = c₂V₂" about 80 px when it forms); live readouts (dilution slider V₂, dot count, c₂) about 52 px; brackets and gloss chips 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the dilution slider (scene 2).** A live control on the core idea: a coded slider on the new flask sweeps the final volume V₂ from 25.00 to 50.0, 100.0 and 250.0 mL. The ten drawn dots spread out, the dot-count readout stays "10", the teal "n unchanged: 2.508 × 10⁻³ mol" stays fixed, and the violet readout "c" falls 0.1003 → 0.05015 → 0.02508 → 0.01003 mol L⁻¹.
- **Measurement language (Revision 2, brief 181 finding 3).** The pipette is "calibrated to deliver" its volume within a tolerance; the aliquot is "the measured portion". "Exact" is not used for measured volumes. The drain time is shown (finding 4). V₂ is the final measured solution volume; "aliquot plus water added" is stated as an approximation for dilute solutions (finding 2).

Author notes (not learner copy):
(a) Case: n = 0.1003 × 0.02500 = 2.5075 × 10⁻³ mol (shown 2.508 × 10⁻³); c₂ = 2.5075 × 10⁻³ ÷ 0.2500 = 0.010030 → 0.01003 mol L⁻¹; one-line form 0.1003 × 25.00 ÷ 250.0 = 0.01003.
(b) Water added: 250.0 − 25.00 = 225.0 mL (shown on the ghost bracket only; volumes of dilute aqueous solutions are close to additive, and making up to the mark avoids the question).
(c) Pipette delivery: a Class A 25 mL bulb pipette is calibrated "to deliver" (TD) with the tip drop retained and a set drainage time; tolerance about ±0.03 mL. Revision 2 speech: "calibrated to deliver twenty-five point zero zero millilitres with that drop left behind"; the drain time is a visual tag in scene 6 (brief 181 findings 3 and 4).
(d) Usual practice: pour a little stock into a clean, dry beaker and pipette from there, so the pipette never contaminates the stock. Shown in the visual of scene 6 (a small beaker), not narrated.
(e) Serial dilution (site): repeating a dilution; each step multiplies c by V₁ ÷ V₂. Left to the site and to Year 12 calibration work (m8-c04).
(f) Worked example: V₁ = 0.500 × 250 ÷ 6.00 = 20.833 → 20.8 mL (three significant figures). Diluting 6.00 mol L⁻¹ sulfuric acid releases substantial heat; acid into water so the denser acid mixes into a large heat sink.
(g) A1: V₂ = 20.0 + 80.0 = 100.0 mL; c₂ = 0.500 × 20.0 ÷ 100.0 = 0.100 mol L⁻¹. Slip: 0.500 × 20.0 ÷ 80.0 = 0.125.
(h) A2: V₁ = 0.150 × 500.0 ÷ 2.00 = 37.5 mL. Slip (concentrations flipped): 2.00 × 500.0 ÷ 0.150 = 6667 mL → "about 6670 mL, 6.67 L".
(i) Pronunciations: "c one V one equals c two V two"; "aliquot" (AL-i-kwot); "V one", "V two".

Main question: *Why does dilution preserve the moles in the transferred sample?*
Entry knowledge: m2-v10, m2-v12.
Stops after: unchanged moles and why; stock, aliquot, final volume; c₁V₁ = c₂V₂ derived and used both ways; performing the dilution with its rinse rules; two checks. No serial dilution, no titration.
Handoff: chem-y11-m2-v14, solution mole ratios.

## Opening frame and final frame

- **Opening frame:** m2-v12's final frame exactly (Decisions).
- **Final frame (m2-v14 opens on it):** at the left the standard flask "Na₂CO₃ 0.1003 mol L⁻¹ (standard)" with the pipette beside it; at the right the beaker plate `m6-beaker-v1.png` with a colourless coded fill, labelled "HCl(aq), about 0.2 mol L⁻¹?" and an amber chip "exact c = ?"; above, the equation strip "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂"; the c = n ÷ V gauge at the top right; the chip "Next: How do solution mole ratios determine an unknown concentration?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's our standard, zero point one zero zero three moles per litre, and we need a solution ten times weaker. So we pipette twenty-five point zero zero millilitres of it, run it into an empty two hundred and fifty millilitre flask, and add water up to the mark. Quick prediction. Compared with the twenty-five millilitres we took, does the flask now hold more sodium carbonate, less, or the **same**?

Visual: opens on m2-v12's final frame; the "Next" chip and the greyed "weigh again?" chip fade; the painted flask and pipette plates grow to fill the bench at large uniform scale. On "twenty-five point zero zero millilitres" the pipette lifts from the stock flask with a coded fill to its line; ten violet dots are visible in its bulb (grey tag "drawn dots, not real numbers"), slate-blue hand tag "25.00 mL". On "run it into" the pipette empties into the new flask (coded stream); on "add water" a pale fill rises to the mark, slate-blue pen ring on the mark. Chips "more", "less", "same" (44 px) write under the new flask. On "same" the 3 s `Countdown` ring runs. Heading writes in the hand font: "Dilution".

### 2. same moles, more room
> The same. Water adds volume, but it doesn't bring any sodium carbonate, and none can escape. Every particle that left the pipette is still in the flask. They're just spread through ten times the volume, so each millilitre holds a tenth as many. It's like topping up cordial with water. The drink tastes weaker, but the syrup you poured is all still in the glass. That's what dilution is: adding solvent to lower the concentration, while the amount of solute stays the **same**.

Visual: "same" ticks. Stage change: a particle lens opens on the new flask at full height: the ten violet dots, now far apart in the pale fill; a count chip "drawn solute dots: 10" above both the pipette (before) and the flask (after), and a teal chip "n unchanged: 2.508 × 10⁻³ mol". On "ten times the volume" the dilution slider runs (simulation): V₂ sweeps 25.00 → 50.0 → 100.0 → 250.0 mL (52 px), the dots spread, the dot count stays "10", and the violet readout "c" falls 0.1003 → 0.05015 → 0.02508 → 0.01003 mol L⁻¹; slate bracket "V × 10". On "a tenth as many" a violet chip "c ÷ 10" and a teal hand tag "same dots, more room". On "topping up cordial" a small coded glass icon appears with a grey hand tag "weaker taste, same syrup". On "same" the gloss chip writes: "dilution: adding solvent to lower the concentration; the amount of solute stays the same" (36 px).

### 3. three volumes, three names
> To describe any dilution, chemists name three things. The stock is the solution you take from, here our standard, and its concentration is c **one**. The aliquot is the measured portion you transfer, and its volume is V **one**, twenty-five point zero zero millilitres. The final volume, V two, is the total after making up to the mark, two hundred and fifty point zero **millilitres**. Not the water you added. The **total**.

Visual: the three-volume strip. On "one" (first) a navy bracket on the stock flask "stock: c₁ = 0.1003 mol L⁻¹". On "one" (second) a bracket on the pipette "aliquot: V₁ = 25.00 mL". On "millilitres" a bracket on the full new flask "final volume: V₂ = 250.0 mL". On "Not the water you added" a grey ghost bracket "water added: about 225 mL" appears and is crossed in red, red hand tag "not V₂"; on "total" the V₂ bracket glows with a slate-blue pen ring. Gloss chips: "stock: the solution you take from"; "aliquot: the measured portion you transfer".

### 4. follow the moles
> Now follow the moles. In the aliquot, n equals c one times V one, with the volume in litres. Zero point one zero zero three times zero point zero two five zero zero is two point five zero eight times ten to the minus three **moles**. Those same moles end up in the flask. So the new concentration is that amount divided by zero point two five zero zero litres, which is zero point zero one zero zero three moles per **litre**. Ten times the volume, a tenth of the **concentration**.

Visual: stage change: the bench shrinks to a strip at the top left; full-width calculation layout (rows 48 px). Task strip: "Find c₂ after diluting 25.00 mL of 0.1003 mol L⁻¹ Na₂CO₃ to 250.0 mL". Givens: "c₁ = 0.1003 mol L⁻¹"; "V₁ = 25.00 mL = 0.02500 L"; "V₂ = 250.0 mL = 0.2500 L". On "moles" row "n = c₁ × V₁ = 0.1003 × 0.02500 = 2.508 × 10⁻³ mol" (teal), with a teal hand tag "these moles move"; the "n unchanged" chip links to it. On "litre" row "c₂ = n ÷ V₂ = 2.508 × 10⁻³ ÷ 0.2500 = 0.01003 mol L⁻¹" (violet), framed in a dark-ink box with a green tick. On "concentration" a small strip "V × 10 → c ÷ 10" in violet hand font.

### 5. one line: c one V one equals c two V two
> Because the moles before equal the moles after, we can write it in one line. Moles before is c one V one. Moles after is c two V **two**. So c one V one equals c two V **two**. And because the volumes appear as a ratio, their units cancel, as long as they match. Millilitres on both sides works fine. Zero point one zero zero three times twenty-five point zero zero, divided by two hundred and fifty point zero, gives the same answer in one **step**.

Visual: the two rows of scene 4 dim. A strip "n before = n after" writes; on "two" (first) "c₁V₁" flies up from the aliquot row under "n before" and "c₂V₂" from the flask row under "n after". On "two" (second) the strip morphs to "c₁V₁ = c₂V₂" (large, violet and slate). On "units cancel" a fraction "V₁ ÷ V₂ = 25.00 mL ÷ 250.0 mL" shows "mL" striking out above and below in red pen, slate-blue hand tag "same units, any units". On "step" row "c₂ = c₁V₁ ÷ V₂ = 0.1003 × 25.00 ÷ 250.0 = 0.01003 mol L⁻¹", framed with a green tick, and a teal pen arrow linking it to scene 4's answer, hand tag "same answer".

### 6. doing it at the bench
> At the bench, it takes the same care as the standard. Rinse the pipette with a little of the stock itself, not water. Then use a pipette filler to draw the stock up past the line, and let it fall until the bottom of the meniscus sits on the **line**. Let it drain into the flask, and touch the tip against the glass. A little liquid stays in the tip, and that's fine. The pipette is calibrated to deliver twenty-five point zero zero millilitres with that drop left **behind**, so don't blow it out.

Visual: the bench returns full width: a small beaker with a little stock poured from the standard flask (author note d); the pipette with filler (`m6-volumetric-pipette-filler-v1.png`) dips in; gloss chips "pipette: calibrated to deliver one volume (within a small tolerance)" and "pipette filler: draws the liquid up". On "not water" a small coded rinse: stock drawn in, swirled, run to a waste beaker. The coded level rises past the line, then falls. On "line" the magnifier shows the meniscus bottom on the line with the dashed sight line, slate-blue hand tag "bottom of the curve". The pipette moves over the new flask and drains (coded stream) while a small coded timer and grey tag show "allow the pipette's stated drain time" (26 px); then its tip touches the inside of the neck. On "behind" the tip drop glows with a teal pen ring and the tag "left behind: the pipette is calibrated for it"; a chip "blow it out" is crossed in red, red hand tag "don't".

### 7. two rinses, two different rules
> Why rinse the pipette with the stock? If water were left inside, it would dilute the stock as you drew it up, so the aliquot would carry fewer moles, and the final concentration would come out **lower**. The flask is different. Water left in the flask doesn't matter, because you're adding water to the mark **anyway**. Then make up to the mark with a dropper, stopper the flask, and turn it over to mix, just as you did for the **standard**.

Visual: the dilution-in-pipette lens: a water film inside the pipette; as stock is drawn up the ten drawn dots become nine in the aliquot (rose arrow chain "n lower → c₂ lower", rose hand tag "water inside dilutes the stock"). On "lower" a card "pipette rinsed with water → c₂ lower" files to a small "lower" tray (m2-v12's error board style). On "anyway" a second card "flask wet with distilled water → no effect" files to "no effect", grey hand tag "water added to the mark anyway". On "standard" the new flask fills to the mark (dropper `m5x-dropper-clear-v1.png`, coded drops), the stopper drops in and the flask inverts several times; its label writes "Na₂CO₃ 0.01003 mol L⁻¹".

### 8. working backwards, with acid
> The formula works backwards too. A technician needs two hundred and fifty millilitres of zero point five zero zero moles per litre sulfuric acid, from a six point zero zero moles per litre stock. Rearranged, V one equals c two V two over c one. That's zero point five zero zero times two hundred and fifty, over six point zero zero, which is twenty point eight **millilitres** of stock, made up to two hundred and fifty. Concentrated acid is technician work. The acid always goes slowly into water, never water into acid, because mixing releases a lot of **heat**.

Visual: board clears to the calculation layout. Task strip: "Find the volume of 6.00 mol L⁻¹ H₂SO₄ needed for 250 mL of 0.500 mol L⁻¹". Givens: "c₁ = 6.00 mol L⁻¹"; "c₂ = 0.500 mol L⁻¹"; "V₂ = 250 mL"; "V₁ = ?". On "Rearranged" the strip "c₁V₁ = c₂V₂" slides into "V₁ = c₂V₂ ÷ c₁" (the c₁ term moving across). On "millilitres" row "V₁ = 0.500 × 250 ÷ 6.00 = 20.8 mL" (slate, 48 px), framed in a dark-ink box with a green tick. On "technician work" an amber-outlined safety strip writes: "technician or teacher only; fume cupboard; glasses, gloves, coat" with `m5x-safety-glasses-v1.png` small. On "heat" a coded arrow "acid → into water" (tick) and "water → into acid" (crossed), with a small heat shimmer on the crossed one.

### 9. two checks
> Two quick checks. After a dilution, c two must be smaller than c one. If yours comes out bigger, you've swapped the volumes. And read the wording carefully. If a question says water was added, take V two as the aliquot plus that water, not the water **alone**. For dilute solutions, the volumes add closely enough. Water adds volume, not **moles**.

Visual: two check cards (44 px). "Check 1: c₂ < c₁" with the worked example's "0.500 < 6.00" ticked and a ghost "c₂ = 0.1003 × 250.0 ÷ 25.00 = 1.003 mol L⁻¹" (our dilution with V₁ and V₂ swapped: bigger than c₁ = 0.1003) crossed in red, red hand tag "volumes swapped". On "alone" card "Check 2: V₂ ≈ V₁ + water added", with the A-style example "20.0 mL + 80.0 mL ≈ 100.0 mL". On "closely enough" a grey tag "assumes the volumes add (good for dilute solutions; not exact in general)" (26 px). On "moles" the memory line writes large as a framed card (dark-ink frame, slate "Water adds volume", teal "not moles", 52 px): "Water adds volume, not moles."

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Twenty point zero millilitres of zero point five zero zero moles per litre sodium chloride solution is diluted by adding eighty point zero millilitres of water. Calculate the concentration of the diluted solution. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "20.0 mL of 0.500 mol L⁻¹ sodium chloride solution is diluted by adding 80.0 mL of distilled water. Assume the volumes add. Calculate the concentration of the diluted solution. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the check cards hidden).

### 11. feedback 1 (brief)
> Taking the volumes as adding, the final volume is twenty point zero plus eighty point zero, one hundred point zero millilitres. c two equals zero point five zero zero times twenty point zero, over one hundred point zero, which is zero point one zero zero moles per litre. Using eighty as V two gives zero point one two five, the classic slip when water is **added**.

Visual: card shrinks to the top. Rows (44 px): "V₂ ≈ 20.0 + 80.0 = 100.0 mL (volumes assumed to add)"; "c₂ = 0.500 × 20.0 ÷ 100.0 = 0.100 mol L⁻¹" (violet), framed in a dark-ink box with a green tick. On "added" a chip "0.125 mol L⁻¹ (V₂ = 80.0 mL)" fades in and is crossed in red, red hand tag "V₂ is the total". Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. What volume of a two point zero zero moles per litre stock solution is needed to make five hundred point zero millilitres of a zero point one five zero moles per litre solution? Pause here to answer.

Visual: `QuestionCard`: "Calculate the volume of a 2.00 mol L⁻¹ stock solution needed to prepare 500.0 mL of a 0.150 mol L⁻¹ solution by dilution. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> V one equals c two V two over c one. Zero point one five zero times five hundred point zero, over two point zero zero, is thirty-seven point five millilitres of stock, made up to five hundred. Flip the concentrations, and you'd need six point six seven litres, far more than the whole solution you're making. That can't be **right**.

Visual: card shrinks. Rows (44 px): "V₁ = c₂V₂ ÷ c₁"; "V₁ = 0.150 × 500.0 ÷ 2.00 = 37.5 mL" (slate), framed in a dark-ink box with a green tick. On "right" a chip "6670 mL (c₁ and c₂ flipped)" fades in and is crossed in red, with a red hand tag "more than V₂!". Hold about 1 second.

### 14. conclusion and handoff
> So dilution moves a measured amount of solute into a bigger volume. The moles in the aliquot don't change, so c one V one equals c two V two. Now our standard has a job to do. The technician has made up some hydrochloric acid for the class, but its exact concentration isn't known. Sodium carbonate reacts with hydrochloric acid. If a measured amount of our standard reacts with the acid, can the mole ratio tell us the acid's **concentration**?

Visual: the particle transfer replays small at the top left (ten drawn dots, count unchanged) beside the framed memory card and "c₁V₁ = c₂V₂". On "hydrochloric acid for the class" the board clears to the final frame's layout: the standard flask and pipette at the left; at the right the beaker plate with a colourless fill labelled "HCl(aq), about 0.2 mol L⁻¹?" and the amber chip "exact c = ?". On "Sodium carbonate reacts" the equation strip writes above: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂". On "concentration" the chip "Next: How do solution mole ratios determine an unknown concentration?" writes. Hold about 2 seconds. This is the final frame (m2-v14 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Dilution lowers c; the moles of solute transferred stay the same.
2. Stock c₁; aliquot V₁ (measured portion); final volume V₂ (total at the mark).
3. n before = n after, so c₁V₁ = c₂V₂ (V₁, V₂ in the same units).
4. Checks: c₂ < c₁. "Water added": V₂ ≈ V₁ + water (dilute).
5. Rinse the pipette with stock; wet flask is fine; leave the last drop. Acid into water.

Memory aid (framed card on the notes screen, as in scene 9): *Water adds volume, not moles.* Notes in role colours at 36 px.

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the moles don't change (2); why c falls by the volume factor (2, 4); why c₁V₁ = c₂V₂ holds (5); why mL is fine (5); why the pipette is rinsed with stock but the flask can be wet (7); why the tip drop stays (6); why acid goes into water (8).
- **Misconceptions addressed:** diluting removes solute (1, 2); V₂ is the water added (3, 9; crossed in A1); litres are needed in c₁V₁ = c₂V₂ (5); rinse the pipette with water (7); blow out the last drop (6); c₂ bigger than c₁ (9; crossed in A2); water into acid (8).
- **One idea at a time:** prediction (1), cause (2), names (3), moles route (4), one-line form (5), technique (6), rinse rules (7), reverse (8), checks (9).
- **Video makes it easier:** ten dots leave the pipette and arrive in the flask with the count unchanged while the concentration chip drops (1, 2); brackets name the three volumes on the apparatus, with the water-added ghost crossed (3); the equation assembles from the two moles rows (5); a water film turns ten dots into nine (7).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 23 s and 21 s.
- **Avoided double teaching:** c = n ÷ V and amount versus concentration recalled (m2-v10); making up to the mark, inverting and error directions recalled from m2-v12 ("just as you did for the standard").
- **Syllabus coverage:** `C2-IQ3-02` "dilutions (number of moles before dilution = number of moles of sample after dilution)" (2, 4, 5, 8, A1, A2); `C2-IQ3-03` "perform a dilution" (6, 7).
- **Out of scope by design:** serial dilution, mixing two solutions of the same solute, titration.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: V₂ ≈ 20.0 + 80.0 = 100.0 mL, assuming the volumes add as the card states (1 mark). c₂ = c₁V₁ ÷ V₂ = 0.500 × 20.0 ÷ 100.0 = 0.100 mol L⁻¹ (1 mark). Classic mistake (crossed): 0.125 mol L⁻¹ (V₂ = 80.0 mL).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: V₁ = c₂V₂ ÷ c₁ (1 mark) = 0.150 × 500.0 ÷ 2.00 = 37.5 mL (1 mark). Classic mistake (crossed): 6670 mL (c₁ and c₂ flipped; larger than V₂).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Case | c₁ 0.1003 mol L⁻¹; V₁ 25.00 mL; V₂ 250.0 mL; water added 225.0 mL; n 2.508 × 10⁻³ mol; c₂ 0.01003 mol L⁻¹; × 10, ÷ 10 | 1 to 5, 7, 9 |
| Particle picture | 10 dots; 9 with a water-rinsed pipette (illustrative) | 1, 2, 7 |
| Worked example (site) | 6.00 → 0.500 mol L⁻¹; 250 mL; 20.8 mL | 8, 9 |
| A1 | 20.0 mL; 0.500 mol L⁻¹; 80.0 mL; 100.0 mL; 0.100 mol L⁻¹; slip 0.125 | 10, 11 |
| A2 | 2.00 mol L⁻¹; 500.0 mL; 0.150 mol L⁻¹; 37.5 mL; slip 6670 mL (6.67 L) | 12, 13 |
| Handoff | about 0.2 mol L⁻¹ HCl | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 0.1003 × 0.02500 = 2.5075 × 10⁻³; ÷ 0.2500 = 0.010030; 0.1003 × 25.00 ÷ 250.0 = 0.01003; 250.0 − 25.00 = 225.0.
- 0.500 × 250 ÷ 6.00 = 20.83 → 20.8. Revision 2 ghost swap (scene 9): 0.1003 × 250.0 ÷ 25.00 = 1.003 mol L⁻¹ (bigger than c₁ = 0.1003). The Revision 1 ghost (6.00 × 250 ÷ 0.500 = 3000) was a wrongly rearranged V₁ in mL, not a concentration, and is withdrawn.
- Revision 2 dilution slider: 2.5075 × 10⁻³ mol ÷ 0.02500, 0.0500, 0.1000, 0.2500 L = 0.1003, 0.05015, 0.02508, 0.01003 mol L⁻¹.
- 20.0 + 80.0 = 100.0; 0.500 × 20.0 ÷ 100.0 = 0.100; slip 0.500 × 20.0 ÷ 80.0 = 0.125.
- 0.150 × 500.0 ÷ 2.00 = 37.5; slip 2.00 × 500.0 ÷ 0.150 = 6666.7 → 6670 mL.

## Memory aid check

- **"Water adds volume, not moles."** Written for this video (a common classroom shape). Meaning: adding solvent changes V and so c, never n; so n before = n after, which is c₁V₁ = c₂V₂. Assumptions checked: true only if nothing reacts with the water and no solute is lost or added (true for dilution of a salt or acid; scene 2 says "none can escape"); it also explains the pipette rule (water in the pipette adds volume to the aliquot, which then carries fewer moles in 25.00 mL; scene 7) and the wet flask (water there adds only volume, which is reset to the mark). It helps a new case: A1 (V₂ includes the water, since water adds volume) and m2-v14 (wet conical flask: no effect).
- **Considered, not used:** "c down, V up, n the same" (accurate, but lists rather than explains).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,665 characters**, 15 scenes (Revision 1 was 5,616; scenes 1, 3, 6, 9 and 11 reworded for brief 181, +49). At 13.3 characters per second the speech is about 426 s; add about 8 s of settling (the particle transfer in 1, the dilution slider in 2, the equation build in 5, the pipette sequence and drain timer in 6), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold (about 57 s in all, above the 40 s minimum): **about 513 s**.

## Scene list and build ids

Lesson key `c-y11-m2-v13` (route chem-y11-m2-v13; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v13`.

In order (15 scene headings, all `### N.`): hook-prediction, same-moles, three-volumes, follow-moles, c1v1-c2v2, bench-pipette, rinse-rules, backwards-acid, two-checks, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end (as m2-v07 scene 1). Transitions (Revision 2): m2-v12's final frame into scene 1 by camera continue (plates grow); 1 to 2 stage change to the full-height particle lens with the dilution slider; 2 to 3 camera pull back to the bench; 3 to 4 stage change to the full-width calculation; 4 to 5 camera continue; 5 to 6 camera continue (bench returns full width); 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v13-learning-review.md`, `checks/c-y11-m2-v13-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m6-volumetric-flask-v1.png` (2048 × 2048): two copies (stock and new flask), scenes 1 to 7, 14, final frame (coded fills, meniscus and labels).
- `public/assets/chemistry/m6-volumetric-pipette-filler-v1.png` (2048 × 2048; bulb pipette with red filler, native aspect, rotated whole by code when draining): scenes 1, 3, 6, 7, final frame.
- `public/assets/chemistry/m6-beaker-v1.png` (2048 × 2048): scene 6 (a little stock poured out; scaled small), final frame (the acid, colourless coded fill).
- `public/assets/chemistry/m5x-dropper-clear-v1.png` (2000 × 2000): scene 7.
- `public/assets/chemistry/m5x-safety-glasses-v1.png` (2000 × 2000): scene 8 (small, on the safety strip).
- **Inspected, not used:** `m5x-graduated-pipette-v1.png` (a graduated pipette; the bulb pipette is the volumetric tool for 25.00 mL); `m5x-volumetric-flask-10ml-v1.png` (wrong size); `m5x-waste-bottle-v1.png` (amber glass, reads as a hazardous-waste or light-sensitive bottle, not a dilute acid).

Need (new plates, Codex): none (Revision 2 adds none).

Coded: particles and count chips, dilution slider and readouts, drain timer, framed answers, hand tags and pen marks, memory card, fills and streams, three-volume strip with ghost bracket, equation build, magnifier and sight line, tip-drop glow, water-film lens, rows, check cards, safety strip and arrows, chips, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry M2 v13)

No new plates. Codex confirms that `m6-volumetric-pipette-filler-v1.png` reads correctly when rotated about 20° over the neck of `m6-volumetric-flask-v1.png` at a matched scale (pipette tip inside the neck, no clipping), on the dark board.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `lesson07.sa.html` (`l07-dilution-title`, worked example 3's 20.8 mL, traps 1 and 2, the acid-to-water safety boundary).
3. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
4. Confirm the syllabus quotes match `chem-2017-y11.json`.
5. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
6. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
7. Confirm the opening frame equals m2-v12's final frame, and send the final frame to the m2-v14 designer.

## YouTube metadata (draft)

Title: Dilution and c1V1 = c2V2: Why the Moles Stay the Same | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Take 25 mL of a standard solution, add water up to 250 mL: does the flask hold more solute, less, or the same? See why adding water changes the concentration but never the moles, what the stock, aliquot and final volume are, and how "moles before = moles after" becomes c1V1 = c2V2. Then do the dilution at the bench: rinse the pipette with the stock, leave the last drop, make up to the mark. Includes working backwards for a volume, the acid-into-water rule, and two checks that catch most mistakes. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"manipulate variables and solve problems to calculate concentration, mass or volume using:"
"dilutions (number of moles before dilution = number of moles of sample after dilution)"
"conduct an investigation to make a standard solution and perform a dilution"

Previous: How do we prepare a standard solution accurately? Next: How do solution mole ratios determine an unknown concentration?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Running value (root).** The case uses m2-v12's 0.1003 mol L⁻¹ (its open decision 2). If that changes to 0.1000, change scenes 1 to 5, 7 and 14 (n = 2.500 × 10⁻³ mol; c₂ = 0.01000).
- **2. Safety wording (science check).** Scene 8's "acid slowly into water ... because mixing releases a lot of heat" and the strip "technician or teacher only; fume cupboard; glasses, gloves, coat" against current NSW school guidance.
- **3. The handoff acid (m2-v14 designer, same designer).** "about 0.2 mol L⁻¹" hydrochloric acid prepared by the technician from a stock whose concentration is only roughly known.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the prediction in scene 1 surface the "diluting removes solute" idea; are three named volumes too much before the calculation; is the pipette technique scene followable without hands on screen), then the science check and Codex error check.
- Checker output (5 November): narration 5,616 characters; per scene (1 to 15): 401, 473, 423, 470, 438, 492, 430, 556, 301, 246, 332, 209, 329, 441, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
- Checker output (Revision 2, 6 November): narration 5,665 characters (sum of scene strings); per scene (1 to 15): 396, 473, 410, 470, 438, 490, 430, 556, 340, 246, 362, 209, 329, 441, 75; no em dash; every bold cue quoted in its scene's Visual in spoken order.

## Revision 2 (6 Nov 2026)

Brief 181 findings (`checks/c-y11-m2-v13-learning-review.md`, `checks/c-y11-m2-v13-science-check.md`):
- **Should fix, crossed example (scene 9, Numbers to verify):** the ghost is now a real swapped-volume concentration, "c₂ = 0.1003 × 250.0 ÷ 25.00 = 1.003 mol L⁻¹", bigger than c₁, crossed with "volumes swapped". The old 6.00 × 250 ÷ 0.500 expression (a volume in mL) is withdrawn.
- **Should fix, final volume (scene 9, attempt 1 card, feedback 1, key note 4):** V₂ stays the final measured solution volume. Scene 9 says "take V two as the aliquot plus that water ... For dilute solutions, the volumes add closely enough", funded by shortening the lead-in to "Two quick checks."; card "V₂ ≈ V₁ + water added" with a grey "assumes the volumes add" tag. The attempt 1 card adds "Assume the volumes add."; feedback 1 opens "Taking the volumes as adding". Scene 3's ghost bracket reads "water added: about 225 mL".
- **Should fix, measurement language (scenes 1, 3, 6, glosses):** "we pipette twenty-five point zero zero millilitres" (not "exactly"); "the measured portion you transfer"; "calibrated to deliver twenty-five point zero zero millilitres"; the pipette gloss says "calibrated to deliver one volume (within a small tolerance)". The unchanged-moles idealisation and tip-drop explanation stay.
- **Should fix, drain time (scene 6):** a coded timer and grey tag "allow the pipette's stated drain time" run during the existing drainage; no speech.
- **Should fix, amount versus count (scenes 1 to 8):** the chip "n: 10 particles" is now "drawn solute dots: 10", with a separate teal chip "n unchanged: 2.508 × 10⁻³ mol".

Visual upgrade (light pass):
- Scene 1: the existing flask and pipette plates fill the bench in the first frame (m2-v12's final frame grown).
- Live control: the dilution slider (scene 2) sweeps V₂ 25.00 → 250.0 mL; dot count stays 10, n stays 2.508 × 10⁻³ mol, c falls 0.1003 → 0.05015 → 0.02508 → 0.01003 mol L⁻¹.
- Set-ups: the scenes 1 to 3 bench stretch (about 98 s) is cut by the full-height particle-lens stage in 2; scene 4 is a full-width calculation.
- Framed answers with a green tick: 0.01003 mol L⁻¹ (4 and 5), 20.8 mL (8), 0.100 mol L⁻¹ (11), 37.5 mL (13). Crossed slips carry red hand tags.
- Hand tags and pen marks in role colours in every teaching scene (1 to 9).
- Memory line as a framed card (scene 9 and the notes screen); key notes trimmed to five short bullets (about 390 characters).
- Decisions gain "Colour roles", "Type sizes" (current row 48 px, readouts 52 px, floor 26 px), "Simulation", "Measurement language" and a revised "Board layout".
- No new plate requests.

Counts: 5,616 to 5,665 characters (sum of scene strings); about 507 to about 513 s.
