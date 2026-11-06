# Year 11 Chemistry M2 V14: Titration with a standard solution. How do solution mole ratios determine an unknown concentration? (design)

Status: Revision 2 (6 Nov 2026): brief 181 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,659 characters, 15 scenes, about 512 s, counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fourteenth Module 2 video of Year 11 Chemistry (2017 syllabus), playlist entry 48, between `chem-y11-m2-v13` and `chem-y11-m2-v15`. Templates: `chem-y11-m2-v12.md` and `v13.md` (same designer; the running standard and bench conventions), `chem-y11-m2-v07.md` (calculation layout), `phys-y11-fa1-v01.md` (structure), `math-a12-d10.md` (calculation staging), `bio-y11-fa1-v05.md` (plates); the Year 12 titration designs `chem-m6-c12.md` and `chem-m6-p06.md` (apparatus plates, burette fill gauge, endpoint swap, and the memory line "Known to moles, ratio, unknown", reused so the course has one titration language). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-m2-v14` in `../../programme/chem-y11-route-inputs.json` (start: "Begin with the concrete case named in the question and recall the needed earlier idea"; stop: "Use measured volumes and a balanced reaction in one quantitative analysis. Teach a basic reaction endpoint only as needed; no Year 12 acid-base equilibrium theory."; next handoff: "How does precipitate mass reveal an ion concentration?"; practical: "Teacher-approved concentration determination"). Site lessons read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson10.sa.html` (SHA256 `bf4c14b8714da90bf3c7259bda2d3910a5fcda57c65ff711daf03a23f09cf813`, recomputed, matches the route), sections `l10-apparatus-title` and `l10-method-title`; and `module2/lesson16.sa.html` (SHA256 `d522bfe03327a0f7c36dd7613aeed256098d1cb730f31b471b93ebec217ee57e`, recomputed, matches), section `l16-concept-title`. Used: from lesson 10, the equipment table (burette read to ±0.05 mL; pipette; conical flask "narrow neck, easy to swirl"; white tile), endpoint as "the first permanent indicator colour change", methyl orange's colours, the rinse rules ("Rinse with titrant (not water), water dilutes the titrant"; "Rinse the pipette with analyte first for the same reason"), rough titre discarded, concordant within 0.10 mL, the four-step method and the 1 : 2 warning ("your answer will be exactly double"), drill 2's reaction (Na₂CO₃ + 2HCl, standard in the flask, acid in the burette), the multiple-choice wet-burette item; from lesson 16, the pathway n(A) = c × V → ratio → c(B) = n ÷ V and "each reactant's moles come from its own c and V". Not used: phenolphthalein and indicator choice by pH (Year 12, m6-c12; route stop), the equivalence-point term (Year 12), back titration, the antacid example (site note 2), excess-reagent mixing (lesson 16 worked example 3; m2-v08's limiting idea is not needed here).

Owner rules applied: as `chem-y11-m2-v12.md` (one learner question; no people, hands or faces: the tap turns and the flask swirls by code; apparatus as painted plates; levels, drops, colours by plate swap, and calculation rows coded; 3 s prediction; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame).

Syllabus content (Chemistry Stage 6, 2017, Module 2; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C2-IQ3-01`: "conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
- `C2-IQ3-02`: "manipulate variables and solve problems to calculate concentration, mass or volume using:"
  - "c = n/V  (molarity formula) (ACSCH063)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 40)

**Boundary:** opens on m2-v13's final frame (the 0.1003 mol L⁻¹ standard and pipette; a beaker of "HCl(aq), about 0.2 mol L⁻¹?"; the equation strip). Teaches: the mole ratio links the moles of the known and unknown (1 : 2 here); measuring the volume of acid that reacts with a known amount of standard gives the acid's concentration; titration defined; apparatus roles (pipette and aliquot, conical flask, burette, titre); the endpoint as a visible colour change when the carbonate has just run out (methyl orange, yellow to orange; red past it), with no pH theory; rough and concordant titres; the four steps with the 1 : 2 ratio; the halving slip; the pipette and flask rinse rules with error directions (the burette left for attempt 2). Not taught: indicator choice, equivalence point, pH curves (Year 12 Module 6), back titration, percentage purity from a titration.

## Decisions

- **Learner question (route wording kept).** "How do solution mole ratios determine an unknown concentration?" The answer, in order: the equation fixes how many moles of acid match the carbonate (1, 2); so measure the acid's volume that reacts with a known amount (2, 3); see when it has just reacted (4); repeat until results agree (5); known to moles, ratio, unknown (6 to 8); rinse so the known amount is really known (9).
- **Opening frame (equals `chem-y11-m2-v13.md`'s final frame, same designer).** Standard flask "Na₂CO₃ 0.1003 mol L⁻¹ (standard)" and pipette at the left; beaker "HCl(aq), about 0.2 mol L⁻¹?" with "exact c = ?" at the right; equation strip "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂"; c = n ÷ V gauge at the top right; the "Next" chip, which fades.
- **The case (continues m2-v12 and v13; site drill 2's reaction).** 20.00 mL aliquot of 0.1003 mol L⁻¹ Na₂CO₃ (n = 2.006 × 10⁻³ mol, exact to four figures, so the doubling is clean); acid in the burette; rough 19.60 mL; accurate 18.75, 18.85, 18.80 mL; average 18.80 mL; n(HCl) = 4.012 × 10⁻³ mol; c(HCl) = 0.2134 mol L⁻¹ (illustrative data, tagged). Slip (1 : 1): 0.1067. A 20.00 mL bulb pipette is a standard school size; 25.00 mL would give 2.5075 × 10⁻³ mol, whose rounding makes the doubling look inconsistent on screen (author note a).
- **Prediction (3 s, scene 1).** "How many moles of acid react with all of it: the same, double, or half?" Answer: double. It puts the mole ratio first, before any apparatus.
- **Endpoint only as needed (route stop).** Methyl orange is yellow while carbonate remains; the first lasting orange shows all the carbonate has reacted; red shows overshoot. No pH values, no indicator ranges, no "equivalence point" term (Year 12 m6-c12 owns them). The aligned clip trio swaps yellow → orange → red. A flicker of orange where drops land, which swirling clears, is the cue to go drop by drop.
- **Concordant titres (site).** Rough run discarded; repeat with a fresh aliquot until titres agree within 0.10 mL; average only those. Said once, shown in a small table. Year 12 m6-c12 extends it.
- **Memory aid (shared with Year 12 `chem-m6-c12.md`):** "Known to moles, ratio, unknown." Year 11 students meet it first here; m6-c12 recalls it. (Check below.)
- **Rinse rules and error directions (route "one quantitative analysis"; site rules).** Pipette rinsed with the standard (water inside → fewer moles of carbonate → smaller titre → c(HCl) too high). Conical flask may be wet with distilled water (moles fixed by the pipette; no effect). Burette rinsed with the acid: left for attempt 2, where students reason it from the pipette case (water dilutes the acid → bigger titre → c(HCl) too low). This continues the "water adds volume, not moles" reasoning of m2-v13.
- **Attempts (original wording, HSC style).** A1 (1 : 2, the other way round): 20.00 mL of standardised 0.1500 mol L⁻¹ NaOH titrated with sulfuric acid, average titre 18.75 mL: 0.08000 mol L⁻¹; crossed "0.1600 mol L⁻¹ (1 : 1 used)". A2 (error direction): burette rinsed only with water: calculated c(HCl) too low; crossed "no effect, because water is added anyway" (true for the flask, not the burette).
- **Mistake scene:** none separate. "The ratio is always 1 : 1" (8; crossed in A1); "include the rough titre" (5); "the endpoint is when it goes red" (4); "rinse everything with water" (9; A2); "divide by the aliquot's volume" (7: the acid's own volume is the titre; site lesson 16: "each reactant's moles come from its own c and V").
- **Handoff (route next: `chem-y11-m2-v15`, "How does precipitate mass reveal an ion concentration?").** Scene 14: some ions can be counted by weighing instead; silver nitrate added to salty bore water gives a white solid. Final frame: see "Opening frame and final frame".
- **Safety (science check; site safety boundary).** Dilute, school-approved acid and base (about 0.2 mol L⁻¹ or less) prepared by the technician; safety glasses; burette filled below eye level with a small funnel, which is then removed. A one-line strip in scene 3, not narrated.
- **Site notes (read 5 November; for root to log if accepted):**
  1. `l10-traps-title` trap 2: "The rough titre is always larger than accurate titres ... Including it inflates the average → too low a calculated concentration." The rough titre is usually, not always, larger (the site's own Q3 has a rough titre below the accurate ones), and a larger titre gives a lower calculated concentration only when the unknown is in the burette; with the unknown in the flask it gives a higher one. Suggest "usually larger ... gives a wrong average; whether the result is too high or too low depends on which solution is in the burette".
  2. Worked example 3 (antacid): "An antacid tablet is dissolved and made up to 250.0 mL. A 25.00 mL aliquot is titrated against 0.1000 mol L⁻¹ HCl" with Mg(OH)₂ as the active ingredient. Magnesium hydroxide is practically insoluble in water, so it cannot be dissolved and aliquoted this way; antacids are analysed by back titration (dissolve in a measured excess of acid, then titrate the leftover acid). Suggest a soluble analyte (for example sodium hydrogen carbonate) or a back-titration framing.
  3. `l10-apparatus-title`, methyl orange "use for strong base–strong acid or weak base–strong acid" and phenolphthalein "colourless → pink at pH 8.3": correct, but indicator choice is Year 12 (Module 6) content in the 2017 syllabus; suggest a "Year 12 preview" tag.
  - Checked and correct: worked examples 1 (0.0739 mol L⁻¹) and 2 (0.2000); drills 1 to 5 (0.0402, 0.2000, 0.0576, 0.5044 g, 23.79 mL); Q1 (25.28 mL; 0.0506 mol L⁻¹, or 0.0505 from the unrounded mean); Q2 (83.7%); Q3 (0.0884; the classmate is wrong); lesson 16 worked examples 1 to 3 (0.860 g, 0.0500 mol L⁻¹, Na₂CO₃ in excess by 0.00250 mol).
- **Cause chain taught, in order:** (1) the balanced equation fixes how many moles of acid match each mole of carbonate (2); (2) a known c and V give known moles of the standard (6); (3) at the endpoint the acid added has exactly used up the carbonate, so the ratio gives the acid's moles (4, 6); (4) those moles are in the titre's volume, so c = n ÷ V (7); (5) anything that changes the moles in the aliquot or the acid's strength in the burette changes the titre, and so the result (9, A2).
- **Entry knowledge:** m2-v06 (coefficients are mole ratios; n(wanted) rule); m2-v10 (c = n ÷ V); m2-v12 (standard solution); m2-v13 (pipette technique, aliquot, rinse rules).
- **Learner-visible vocabulary (plain meaning at first use):** titration (measuring how much of one solution reacts with a known amount of another, 2); conical flask (a flask shaped so you can swirl without spilling, 3); burette (a long glass tube with a tap, marked so the volume can be read to 0.05 mL, 3); titre (the volume added from the burette, 3); indicator (a substance whose colour shows when the reaction is complete, 4); endpoint (the first lasting colour change, 4); concordant (titres that agree within 0.10 mL, 5).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **mole match** (scenes 1, 2: carbonate tokens in the flask, each pairing with two acid tokens as they arrive; at the endpoint every carbonate token is paired); **burette fill gauge** (from Year 12 m6-c12: coded level in the burette tube, a running volume counter, drops from the tip); **endpoint swap** (the aligned methyl orange clips: yellow, a brief orange flicker where a drop lands that swirls back to yellow, then steady orange, then red for overshoot); **burette readings** (magnifier on `m6-burette-meniscus-closeup-v1.png` with coded numerals; "initial" and "final" readings write; "titre = final − initial"); **titre table** (rough plus three accurate; concordant ones tick, rough greys); **bridge strip** (scene 6 onward: "known → moles → ratio → unknown" with the current link lit); **rinse lens** (scene 9: water film in the pipette turns 10 carbonate tokens into 9; the titre bar shortens; c(HCl) arrow up); calculation layout; `Countdown`, `QuestionCard`, `Chip` with `cross`, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key (continues m2-v12 and v13):** moles teal; volumes slate blue; concentrations violet; givens navy; carbonate tokens navy, acid tokens rose; "too high" amber up-arrow, "too low" rose down-arrow; crossed items red strike; illustrative data tagged grey.
- **Board layout (Revision 2, high-risk redesign):** heading top left; the titration set-up (stand, burette, flask on tile) at the left third; the titre table and calculation rows at the right; the bridge strip across the top from scene 6. Revision 1 held the set-up for scenes 3 to 5 (about 99 s) and the calculation board for scenes 6 to 8 (about 91 s). Revision 2 stages: set-up (3); a push-in to the flask and burette tip with the acid-added scrubber (4); a full-width titre stage with three runs (5); the calculation layout (6); a stage with the burette plate beside the last row (7); the bridge strip as hero with the memory card (8); the rinse lens (9). No stage now runs longer than about 46 s.
- **Colour roles (Revision 2, fixed for the whole video):** moles teal; volumes slate blue; concentrations violet; givens navy; carbonate tokens navy, acid tokens rose; "too high" amber up-arrow, "too low" rose down-arrow; framed answers in a dark-ink box with a green tick; crossed mistakes red strike plus a red hand tag; hand-font teacher tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p):** the current working row at least 44 px (rows 48 px); live readouts (acid-added counter, carbonate-left readout, burette readings, mean titre) about 52 px; titre table cells 40 px; supporting lines and givens 30 to 36 px; hand-font tags 34 to 40 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Simulation (Revision 2): the acid-added scrubber (scene 4).** A live control on the core idea (the endpoint is where the acid has used up all the carbonate in a 1 : 2 ratio): as the burette tap runs, a slate readout "acid added" climbs 0.00 → 5.00 → 9.40 → 15.00 → 18.80 mL, a teal readout "carbonate left" falls 2.006 × 10⁻³ → 1.47 × 10⁻³ → 1.00 × 10⁻³ → 0.41 × 10⁻³ → 0 mol, the token lens pairs two rose acid tokens with each navy carbonate token, and the flask plate holds yellow until 18.80 mL (orange), with one more drop giving the red ghost. Readouts use the result 0.2134 mol L⁻¹ (carbonate left = 2.006 × 10⁻³ − 0.2134 × V ÷ 2000), shown as illustrative.

Author notes (not learner copy):
(a) Case: n(Na₂CO₃) = 0.1003 × 0.02000 = 2.006 × 10⁻³ mol; n(HCl) = 4.012 × 10⁻³ mol; mean titre (18.75 + 18.85 + 18.80) ÷ 3 = 18.80 mL; c(HCl) = 4.012 × 10⁻³ ÷ 0.01880 = 0.21340 → 0.2134 mol L⁻¹. Slip: 2.006 × 10⁻³ ÷ 0.01880 = 0.10670 → 0.1067. Spread 18.75 to 18.85 = 0.10 mL (concordant at the limit; the learning review may tighten to 18.77, 18.83, 18.80, same mean).
(b) With a 25.00 mL aliquot: 2.5075 × 10⁻³ mol (shown 2.508), doubled 5.015 × 10⁻³, which looks like 2 × 2.508 = 5.016 on screen; avoided.
(c) Carbonate with methyl orange: the endpoint (orange, about pH 4) comes after both protonation steps, consistent with the 1 : 2 equation. Dissolved CO₂ can make the endpoint slightly early; boiling near the endpoint is a refinement not taught at Year 11.
(d) Burette reading: read to ±0.05 mL (the second decimal 0 or 5); a titre is the difference of two readings.
(e) A1: n(NaOH) = 0.1500 × 0.02000 = 3.000 × 10⁻³ mol; n(H₂SO₄) = 1.500 × 10⁻³ mol; c = 1.500 × 10⁻³ ÷ 0.01875 = 0.08000 mol L⁻¹. Slip: 3.000 × 10⁻³ ÷ 0.01875 = 0.1600. "Standardised" sodium hydroxide: its concentration was found by titration against a primary standard (m2-v12 said NaOH cannot be a primary standard); the card says so in one clause.
(f) A2: water in the burette lowers the acid's concentration in the burette; more volume is needed for the same moles; the calculated c = n ÷ V (bigger V) is lower than the true concentration of the acid in the bottle.
(g) Pronunciations: "H C l" (aitch see el) or "hydrochloric acid" (prefer the name); "H two S O four plus two N a O H makes N a two S O four plus two H two O"; "titre" (TIE-ter); "aliquot" (AL-i-kwot).

Main question: *How do solution mole ratios determine an unknown concentration?*
Entry knowledge: m2-v06, m2-v10, m2-v12, m2-v13.
Stops after: one titration with a 1 : 2 ratio, a basic endpoint, concordant titres, known to moles, ratio, unknown, and rinse rules with error directions. No pH theory, no indicator choice, no back titration.
Handoff: chem-y11-m2-v15, precipitate mass.

## Opening frame and final frame

- **Opening frame:** m2-v13's final frame exactly (Decisions).
- **Final frame (m2-v15 opens on it):** at the left the clear sample bottle (`y11c-sample-bottle-clear-v1.png`, a crop of `m8-river-sampling-bottle-v1.png`; see Assets) labelled "bore water, 500.0 mL" with a violet chip "Cl⁻: ? mg L⁻¹"; at the centre the beaker (`m6-beaker-v1.png`) with a coded white cloud forming as coded drops fall from a dropper bottle (`p03-dropper-bottle-v1.png`) labelled "silver nitrate solution"; a small strip "Ag⁺ + Cl⁻ → AgCl(s), white solid"; the analytical balance (`m8-balance-watch-glass-v1.png`) small at the right with a "?" readout; the bridge strip small at the top; the chip "Next: How does precipitate mass reveal an ion concentration?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook and prediction (countdown, 3 seconds at the end)
> Here's the technician's hydrochloric acid. It's about zero point two moles per litre, but about isn't good enough for an analysis. Our standard can find the exact value, because sodium carbonate reacts with hydrochloric acid. Suppose we take twenty point zero zero millilitres of the standard. That's two point zero zero six times ten to the minus three moles of sodium carbonate. Quick prediction. How many moles of acid react with all of it: the same, double, or **half**?

Visual: opens on m2-v13's final frame; the "Next" chip fades; the painted standard flask, pipette and acid beaker plates grow to fill the frame at uniform scale. On "about isn't good enough" the "about 0.2" tag wobbles and greys, with a violet hand tag "not good enough" and a red pen strike. On "twenty point zero zero millilitres" the pipette draws an aliquot (coded) and a row writes (48 px): "n(Na₂CO₃) = c × V = 0.1003 × 0.02000 = 2.006 × 10⁻³ mol" (teal), framed with a green tick; a small flask of navy carbonate tokens (illustrative "10 tokens") appears. Chips "same", "double", "half" (44 px). On "half" the 3 s `Countdown` ring runs. Heading writes in the hand font: "Titration: finding an unknown concentration".

### 2. double, and the idea
> Double. The equation says each sodium carbonate reacts with two hydrochloric acid, so the acid's moles are twice the carbonate's. That's the key. If we measure exactly what volume of acid it takes to react with all the carbonate, we know the moles of acid in that volume, and c equals n over V does the rest. Measuring how much of one solution reacts with a known amount of another is called a **titration**.

Visual: "double" ticks. On "each sodium carbonate" the "1" (implied) under Na₂CO₃ and the "2" under HCl get an amber outline; the mole match runs: rose acid tokens arrive in pairs and each pairs with a navy carbonate token until all ten are paired (20 rose tokens, tag "1 : 2"). A rose hand tag "2 acid per carbonate" with a pen ring round the "2". On "that volume" a slate bracket "V(acid) = ?" appears beside a ghost burette outline; on "does the rest" the gauge "c = n ÷ V" lights. Gloss chip on "titration": "titration: measuring how much of one solution reacts with a known amount of another".

### 3. the set-up
> Here's the set-up. A pipette delivers the twenty point zero zero millilitre aliquot of standard into a conical flask, which is shaped so you can swirl it without **spilling**. The acid goes in a burette, a long glass tube with a tap, marked so you can read the volume to the nearest zero point zero five of a millilitre. You read it before and after, and the difference is the volume of acid added, called the **titre**.

Visual: board clears to the set-up. The pipette (`m6-volumetric-pipette-filler-v1.png`) drains into the conical flask (`m6-conical-flask-v1.png`) on the white tile (`m6-white-tile-v1.png`); on "spilling" the flask rocks once by code and the gloss chip writes "conical flask: swirl without spilling", slate hand tag "20.00 mL standard". The stand and burette (`m6-burette-clamp-stand-v1.png`) slide in above; the coded fill gauge fills the burette with colourless acid through a small funnel (`m6-funnel-v1.png`) that lifts away; gloss chip "burette: read to 0.05 mL". A magnifier on `m6-burette-meniscus-closeup-v1.png` shows "initial 0.50 mL". On "titre" a strip "titre = final reading − initial reading" (44 px) with a slate pen bracket between the two readings and a slate hand tag "after − before". Safety strip small: "dilute, approved solutions; glasses; fill the burette below eye level".

### 4. seeing the endpoint
> But how do you see when the carbonate has just run out? Both solutions are colourless, so we add a few drops of an indicator, methyl orange, whose colour changes when the reaction is complete. While carbonate is left, it stays **yellow**. Run the acid in steadily at first, swirling, then drop by drop once orange flashes where the drops land. The moment one drop turns the whole flask orange, and it stays orange, all the carbonate has reacted. That's the **endpoint**. One drop past it, and it turns **red**.

Visual: a dropper bottle (`p03-dropper-bottle-v1.png`, coded label "methyl orange") adds three coded drops; the flask plate swaps to `m6-clip-methyl-orange-yellow-v1.png`. On "yellow" the mole match returns small in a lens: carbonate tokens still unpaired. Stage change: camera push to the flask and the burette tip, which fill the frame; the token lens sits at the right. The acid-added scrubber runs (simulation): the tap opens by code, the fill gauge falls and the slate readout "acid added" climbs (52 px) while the teal readout "carbonate left" falls 2.006 × 10⁻³ → 1.47 × 10⁻³ → 1.00 × 10⁻³ → 0.41 × 10⁻³ mol and the lens pairs two rose acid tokens with each navy carbonate token; the flask swirls (a gentle coded rock). On "orange flashes" a brief orange patch flickers at the surface and fades back to yellow; drops slow to one at a time (readout near 18.75 mL), amber hand tag "slow down: drop by drop". On "endpoint" the readouts reach "18.80 mL" and "carbonate left 0 mol"; the plate swaps to `m6-clip-methyl-orange-orange-v1.png` and holds; the lens shows every carbonate token paired; gloss chip "endpoint: the first colour change that lasts" with an orange pen ring round the flask. On "red" a ghost flask beside it shows `m6-clip-methyl-orange-red-v1.png` with the readout "18.85 mL" and a red hand tag "overshoot: too far". Grey tag "illustrative data".

### 5. titres you can trust
> The first run is quick and rough, just to find where the endpoint is, so it isn't used. Then you repeat carefully with a fresh aliquot each time, until the titres agree within zero point one zero millilitres. Results that agree like this are called concordant. Ours are eighteen point seven five, eighteen point eight five, and eighteen point eight zero. Their average is eighteen point eight zero **millilitres**.

Visual: stage change to the full-width titre stage: four small endpoint flasks (orange clip plate at small uniform scale) stand in a row, one per run, each with its burette readings "initial → final" under it, and the titre table writes beside them (40 px): "rough 19.60 mL" (grey, struck through in red, red hand tag "guide only"), "18.75", "18.85", "18.80" (slate). A slate pen bracket "within 0.10 mL" spans the three; gloss chip "concordant: agree within 0.10 mL". On "millilitres" row "average titre = (18.75 + 18.85 + 18.80) ÷ 3 = 18.80 mL" (slate, 48 px), framed in a dark-ink box with a green tick. Grey tag "illustrative data".

### 6. known to moles, then the ratio
> Now four steps. One, the balanced equation: sodium carbonate to acid is one to two. Two, the moles of the solution you know everything about. n equals c times V, zero point one zero zero three times zero point zero two zero zero zero, which is two point zero zero six times ten to the minus three moles of sodium carbonate. Three, the ratio. Twice that is four point zero one two times ten to the minus three moles of hydrochloric **acid**.

Visual: calculation layout. Task strip: "Find c(HCl)". Equation strip: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂". Givens (grouped): "Na₂CO₃: c = 0.1003 mol L⁻¹, V = 20.00 mL = 0.02000 L (pipette)"; "HCl: V = 18.80 mL = 0.01880 L (titre)". The bridge strip writes across the top: "known → moles → ratio → unknown". Rows at 48 px, earlier rows dimming to 34 px. Row "Na₂CO₃ : HCl = 1 : 2" (link 1) with a rose pen ring round the "2". Row "n(Na₂CO₃) = 0.1003 × 0.02000 = 2.006 × 10⁻³ mol" (teal; "known → moles" lit), teal hand tag "the solution we know". On "acid" row "n(HCl) = 2.006 × 10⁻³ × 2 = 4.012 × 10⁻³ mol" (teal; "ratio" lit), rose hand tag "× 2".

### 7. the unknown's own volume
> Four, that acid came out of the burette, so its volume is the titre, zero point zero one eight eight zero litres. Not the aliquot's volume, which belongs to the carbonate. c equals n over V: four point zero one two times ten to the minus three, divided by zero point zero one eight eight zero, is zero point two one three four moles per **litre**. About zero point two, as the technician said, but now we know it to four significant **figures**.

Visual: stage change: the burette plate (`m6-burette-clamp-stand-v1.png`) returns at the left beside the rows, with a slate pen arrow from its tip to the HCl given (titre), which glows and slides into the last row; slate hand tag "from the burette". On "Not the aliquot's volume" a ghost row "÷ 0.02000 L" is crossed in red (red hand tag "that volume is the carbonate's"). On "litre" row "c(HCl) = 4.012 × 10⁻³ ÷ 0.01880 = 0.2134 mol L⁻¹" (violet, 52 px; "unknown" lit), framed in a dark-ink box with a green tick. On "figures" the beaker label at the left updates: "HCl(aq) 0.2134 mol L⁻¹", the "about 0.2" tag ticks, violet hand tag "4 significant figures".

### 8. the classic slip, and the pattern
> Skip the ratio, and you'd get zero point one zero six seven, exactly half. That's the classic slip in these problems. So the pattern for every one of them is: known to moles, ratio, unknown. Start with n equals c V for the solution you know everything about, use the balanced equation's ratio, then divide by the unknown's own **volume**.

Visual: stage change: the bridge strip becomes the hero at full width (four linked boxes, 52 px). A chip "skip the ratio: 2.006 × 10⁻³ ÷ 0.01880 = 0.1067" fades in and is crossed in red (red hand tag "exactly half: ratio skipped"). On "known to moles, ratio, unknown" the bridge strip lights each link in turn, each box gaining its own row as a small hand tag ("n = cV", "× 2", "c = n ÷ V"). On "volume" the memory line writes large under the strip as a framed card in the explainer's handwriting style (dark-ink frame; teal "Known to moles", rose "ratio", violet "unknown"): "Known to moles, ratio, unknown."

### 9. rinse rules, and which way errors push
> The rinsing rules from dilution matter here too. The pipette is rinsed with the standard, because water left inside would mean fewer moles of carbonate in the flask. Then less acid is needed, the titre is smaller, and the acid's concentration comes out too **high**. But the conical flask can be wet with distilled water. The pipette has already fixed the moles of carbonate, and extra water doesn't change how much acid they need. No **effect**.

Visual: the rinse lens: a water film in the pipette; the aliquot's carbonate tokens drop from 10 to 9; the titre bar beside the table shortens; arrow chain "n(carbonate) ↓ → titre ↓ → c(HCl) ↑" with an amber up-arrow on "high"; card "pipette rinsed with water → c(HCl) too high", amber hand tag "fewer moles in, smaller titre". On "wet with distilled water" the flask shows a coded water film; the tokens stay 10; the titre bar unchanged; on "effect" card "flask wet with distilled water → no effect" (grey), grey hand tag "moles already fixed". The burette is dimmed with a small "?" (left for attempt 2).

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Twenty point zero zero millilitres of a standardised zero point one five zero zero moles per litre sodium hydroxide solution is titrated with sulfuric acid. The concordant titres average eighteen point seven five millilitres. H two S O four plus two N a O H makes N a two S O four plus two H two O. Calculate the concentration of the sulfuric acid. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A 20.00 mL aliquot of standardised 0.1500 mol L⁻¹ sodium hydroxide solution was titrated with sulfuric acid. The average of the concordant titres was 18.75 mL. H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l). Calculate the concentration of the sulfuric acid. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (the bridge strip dims to an outline).

### 11. feedback 1 (brief)
> Known to moles: zero point one five zero zero times zero point zero two zero zero zero is three point zero zero zero times ten to the minus three moles of sodium hydroxide. The ratio is one acid to two hydroxide, so halve it: one point five zero zero times ten to the minus three moles. Divide by the titre, zero point zero one eight seven five litres: zero point zero eight zero zero moles per litre. One to one gives zero point one six zero zero, double the right **answer**.

Visual: card shrinks to the top. Rows with the bridge links lighting: "n(NaOH) = 0.1500 × 0.02000 = 3.000 × 10⁻³ mol"; "H₂SO₄ : NaOH = 1 : 2 → n(H₂SO₄) = 3.000 × 10⁻³ ÷ 2 = 1.500 × 10⁻³ mol"; "c(H₂SO₄) = 1.500 × 10⁻³ ÷ 0.01875 = 0.08000 mol L⁻¹" (violet), framed in a dark-ink box with a green tick. On "answer" a chip "0.1600 mol L⁻¹ (1 : 1 used)" fades in and is crossed in red, red hand tag "ratio is 1 : 2 here too". Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Before filling the burette with hydrochloric acid, a student rinsed it only with distilled water. Explain the effect on the calculated concentration of the acid. Pause here to answer.

Visual: `QuestionCard`: "In the titration of a standard sodium carbonate solution with hydrochloric acid, a student rinsed the burette only with distilled water before filling it with the acid. Explain the effect of this on the calculated concentration of the hydrochloric acid. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (scene 9's cards hidden).

### 13. feedback 2 (brief)
> Too low. Water left in the burette dilutes the acid, so more of it is needed to react with the same moles of carbonate. The titre is bigger, and the same moles divided by a bigger volume gives a smaller concentration. That's why the burette is rinsed with the acid itself. Saying no effect, because water gets added anyway, mixes up the burette with the **flask**.

Visual: card shrinks. A water film in the burette lens; the titre bar lengthens; arrow chain "acid diluted → titre ↑ → c(HCl) ↓" with a rose down-arrow; rule chip "rinse the burette with the solution it will hold". The answer "too low" is framed in a dark-ink box with a green tick. On "flask" a chip "no effect: water is added anyway" fades in and is crossed in red (red hand tag "true for the conical flask only"). Hold about 1 second.

### 14. conclusion and handoff
> So a titration counts the unknown's moles through a reaction with a known amount, and the mole ratio links the two. But some ions can be counted another way. Add silver nitrate to salty bore water, and the chloride ions come out as a white solid, which you can filter, dry and weigh. How does precipitate mass reveal an ion **concentration**?

Visual: the bridge strip lights once more over a small thumbnail of the endpoint flask. On "silver nitrate" the board clears to the final frame's layout: the bore water bottle at the left; drops fall from the silver nitrate dropper bottle into the beaker and a coded white cloud forms; on "white solid" the strip "Ag⁺ + Cl⁻ → AgCl(s)" writes; on "weigh" the balance with its "?" readout. On "concentration" the chip "Next: How does precipitate mass reveal an ion concentration?" writes. Hold about 2 seconds. This is the final frame (m2-v15 opens on it).

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Titration: the volume of one solution that reacts with a known amount of another.
2. Aliquot in the flask, other solution in the burette. Titre = final − initial.
3. Endpoint: first lasting colour change. Skip the rough run; average concordant titres (within 0.10 mL).
4. Known to moles (n = cV), ratio, unknown (c = n ÷ V, its own volume).
5. Rinse burette and pipette with their own solutions; a wet flask is fine.

Memory aid (framed card on the notes screen, as in scene 8): *Known to moles, ratio, unknown.* Notes in role colours at 36 px.

At the end the notes cross-fade back to scene 14's final frame.

## Teaching checks

- **Does it explain causes?** Why the acid's moles are double (2); why a measured volume gives the concentration (2, 7); how the endpoint shows the carbonate has run out (4); why the rough titre is dropped (5); why the titre, not the aliquot, is the acid's volume (7); why a water-rinsed pipette raises the result and a wet flask doesn't matter (9); why a water-rinsed burette lowers it (A2).
- **Misconceptions addressed:** always 1 : 1 (8; A1 crossed); include the rough (5); endpoint is red (4); divide by the aliquot's volume (7); rinse everything with water (9, A2 crossed).
- **One idea at a time:** ratio first (1, 2), apparatus (3), endpoint (4), results (5), calculation in two stages (6, 7), pattern (8), errors (9).
- **Video makes it easier:** acid tokens pair with carbonate tokens until none is left, at the same moment the flask turns orange (2, 4); the burette gauge and counter fall as the titre grows (4); the titre table ticks concordant values (5); the bridge strip lights each step (6 to 8, 11); the titre bar shortens or lengthens with each rinse error (9, 13).
- **Response opportunity:** one 3 s prediction (1); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 30 s and 24 s.
- **Avoided double teaching:** coefficients as mole ratios (m2-v06), c = n ÷ V (m2-v10), standard solutions (m2-v12) and pipette technique and rinse rules (m2-v13) are recalled, not re-taught.
- **Syllabus coverage:** `C2-IQ3-01` "determine the concentrations of solutions" (3 to 7); `C2-IQ3-02` "c = n/V" (6, 7, A1).
- **Out of scope by design:** indicator choice and pH, equivalence point, titration curves, back titration.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: n(NaOH) = 0.1500 × 0.02000 = 3.000 × 10⁻³ mol (1 mark). n(H₂SO₄) = 3.000 × 10⁻³ ÷ 2 = 1.500 × 10⁻³ mol (1 mark). c(H₂SO₄) = 1.500 × 10⁻³ ÷ 0.01875 = 0.08000 mol L⁻¹ (1 mark). Classic mistake (crossed): 0.1600 mol L⁻¹ (1 : 1 used).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** As on the card.
Model answer: the water dilutes the acid in the burette, so a larger titre is needed to react with the same moles of sodium carbonate (1 mark); c = n ÷ V with a larger V, so the calculated concentration is lower than the true value (1 mark). Classic mistake (crossed): "no effect, because water is added anyway".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Acid (handoff value) | about 0.2 mol L⁻¹ | 1, 7 |
| Standard aliquot | 0.1003 mol L⁻¹; 20.00 mL = 0.02000 L; 2.006 × 10⁻³ mol | 1, 6 |
| Ratio | 1 : 2; 4.012 × 10⁻³ mol HCl | 2, 6 |
| Burette | read to 0.05 mL; initial 0.50 mL (illustrative) | 3 |
| Titres (illustrative) | rough 19.60; 18.75, 18.85, 18.80; within 0.10 mL; mean 18.80 mL = 0.01880 L | 5, 6, 7 |
| Result | 0.2134 mol L⁻¹; slip 0.1067 | 7, 8 |
| Particle tokens | 10 carbonate, 20 acid; 9 with a water-rinsed pipette | 1, 2, 4, 9 |
| A1 | 20.00 mL; 0.1500 mol L⁻¹; 3.000 × 10⁻³; 1.500 × 10⁻³ mol; 18.75 mL; 0.08000 mol L⁻¹; slip 0.1600 | 10, 11 |
| A2 | qualitative (too low) | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 0.1003 × 0.02000 = 2.006 × 10⁻³; × 2 = 4.012 × 10⁻³.
- (18.75 + 18.85 + 18.80) ÷ 3 = 18.80; 18.85 − 18.75 = 0.10.
- 4.012 × 10⁻³ ÷ 0.01880 = 0.21340; 2.006 × 10⁻³ ÷ 0.01880 = 0.10670.
- 0.1500 × 0.02000 = 3.000 × 10⁻³; ÷ 2 = 1.500 × 10⁻³; ÷ 0.01875 = 0.08000; 3.000 × 10⁻³ ÷ 0.01875 = 0.1600.

## Memory aid check

- **"Known to moles, ratio, unknown."** From `chem-m6-c12.md` (Year 12), reused so the course keeps one phrase; Year 11 meets it first. Meaning: n = cV for the fully known solution; × the coefficient ratio from the balanced equation; ÷ the unknown's own volume (or × MM for a mass). Assumptions checked: it needs a balanced equation and a complete reaction at the endpoint (scene 4); "unknown" means the unknown's own volume, not the aliquot of the known (scene 7 crosses the slip). It helps a new case: A1 (the known is in the flask and the ratio halves), and m2-v15 (the "known" becomes a weighed precipitate: mass to moles, ratio, unknown).
- **Considered, not used:** "Mass to moles, moles across, moles to mass" (m2-v07's line; right shape, wrong starting quantity for solutions; scene 8 echoes its shape so students connect the two).

## Narration length estimate

Revision 2 count (6 November; build parser rules, total = sum of scene strings): **5,659 characters**, 15 scenes (unchanged; no speech edits). At 13.3 characters per second the speech is about 425 s; add about 10 s of settling (the mole match in 2, the set-up build in 3, the acid-added scrubber, drop-by-drop approach and endpoint swap in 4, the four-run titre stage in 5), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold (about 57 s in all, above the 40 s minimum): **about 512 s**.

## Scene list and build ids

Lesson key `c-y11-m2-v14` (route chem-y11-m2-v14; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-m2-v14`.

In order (15 scene headings, all `### N.`): hook-prediction, double-idea, set-up, endpoint, titres, known-ratio, unknown-volume, slip-pattern, rinse-errors, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 is `explain` with a 3 s countdown at its end. Transitions (Revision 2): m2-v13's final frame into scene 1 by camera continue (plates grow); 1 to 2 camera continue; 2 to 3 clear change to the set-up; 3 to 4 camera push to the flask and burette tip (scrubber); 4 to 5 stage change to the full-width titre stage; 5 to 6 stage change to the calculation layout; 6 to 7 stage change (burette plate beside the rows); 7 to 8 stage change (bridge strip as hero); 8 to 9 stage change (the set-up enlarges for the rinse lens); attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook countdown (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-m2-v14-learning-review.md`, `checks/c-y11-m2-v14-science-check.md`.

## Assets

Have (inspected 5 November on a paper-background contact sheet; uniform scaling only, never stretched):
- `public/assets/chemistry/m6-burette-clamp-stand-v1.png` (2048 × 2048): scenes 3 to 5, 9, 12, 13 (coded fill gauge over its tube, as Year 12 m6-c12).
- `public/assets/chemistry/m6-burette-meniscus-closeup-v1.png` (2000 × 2000): scene 3 magnifier (coded numerals).
- `public/assets/chemistry/m6-conical-flask-v1.png` (2048 × 2048): scene 3 (empty and with the colourless aliquot).
- `public/assets/chemistry/m6-clip-methyl-orange-yellow-v1.png`, `-orange-v1.png`, `-red-v1.png` (aligned trio, 2048 × 1700): scene 4 swap, scene 14 thumbnail.
- `public/assets/chemistry/m6-white-tile-v1.png` (2048 × 2048): scenes 3 to 5.
- `public/assets/chemistry/m6-volumetric-pipette-filler-v1.png`, `m6-volumetric-flask-v1.png`, `m6-beaker-v1.png`, `m6-funnel-v1.png`: opening frame, scenes 1, 3, 9.
- `public/assets/chemistry/p03-dropper-bottle-v1.png` (2000 × 2000; clear glass dropper bottle with a blank label): scene 4 (coded label "methyl orange"); final frame (coded label "silver nitrate solution").
- `public/assets/chemistry/m8-river-sampling-bottle-v1.png` (2000 × 2000; a river dipper on a pole beside a clear screw-cap bottle of clear water): source for the crop below; the dipper must not appear (bore water is pumped, not dipped). `m8-river-sampling-bottle-v2.png` (murky river water) reads wrongly for bore water and is not used.
- `public/assets/chemistry/m8-balance-watch-glass-v1.png` (2000 × 2000): final frame.
- **Inspected, not used:** `m6-clip-phenolphthalein-*` (wrong indicator for this titration); `m6-indicator-methyl-orange-set-v1.png` (three flasks in one plate; the aligned trio is better for the swap); `m8-mohr-flask-yellow-v1.png` (a chromate titration flask, a different context).

Need (new plates, Codex; Revision 2 adds none):
1. (Delivered by brief 181, an exact RGBA crop; inspected 6 November: clear screw-cap bottle of clear water, no dipper) `y11c-sample-bottle-clear-v1.png`: a **crop** (not a repaint) of the clear bottle at the right of `m8-river-sampling-bottle-v1.png`, with transparent margins, native aspect, the dipper and pole removed entirely. Final frame here; m2-v15 scenes 1 to 3 and 9. Essential for m2-v15; fallback: `m6-beaker-v1.png` with a coded clear fill labelled "bore water sample".

Coded: tokens and mole match, fill gauge, acid-added scrubber and readouts, counter and drops, flicker patch, magnifier numerals, titre table, bridge strip, rinse lens and titre bars, rows, framed answers, hand tags and pen marks, chips, attempt cards, countdowns, key notes board and memory card.

## Codex asset brief (Year 11 Chemistry M2 v14)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first. One derived plate, after the learning review, science check and Codex error check pass and the owner gives the go-ahead: `y11c-sample-bottle-clear-v1.png`, cropped from `public/assets/chemistry/m8-river-sampling-bottle-v1.png` (keep only the clear screw-cap bottle; remove every pixel of the dipper and pole; transparent PNG with a true alpha channel, clean edges, no halo; crop, never stretch). Save to `public/assets/chemistry/`. Also confirm the methyl orange trio overlays exactly at the conical-flask position under the burette tip on the dark board. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/chem-y11-m2-v14-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the site content used matches `lesson10.sa.html` (apparatus, endpoint, rinse rules, concordant within 0.10 mL, four steps, drill 2's equation) and `lesson16.sa.html` (pathway).
3. Confirm the equations are balanced: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂; H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O; Ag⁺ + Cl⁻ → AgCl.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the syllabus quotes match `chem-2017-y11.json`.
6. Confirm no person, hand or face is drawn or requested; no em dash (U+2014); Australian spelling.
7. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
8. Confirm the opening frame equals m2-v13's final frame, and send the final frame to the m2-v15 designer.

## YouTube metadata (draft)

Title: Titration: Using Mole Ratios to Find an Unknown Concentration | Year 11 Chemistry Module 2

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

The technician's hydrochloric acid is "about 0.2 mol/L". About isn't good enough. Use a standard sodium carbonate solution and the mole ratio to find the exact value: pipette, conical flask and burette, a methyl orange endpoint, rough and concordant titres, then known to moles, ratio, unknown. See why skipping the 1 : 2 ratio halves the answer, and which way each rinsing mistake pushes the result. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Module 2: Introduction to Quantitative Chemistry.
Syllabus content (NSW Chemistry Stage 6):
"conduct practical investigations to determine the concentrations of solutions and investigate the different ways in which concentrations are measured (ACSCH046, ACSCH063)"
"manipulate variables and solve problems to calculate concentration, mass or volume using:"
"c = n/V  (molarity formula) (ACSCH063)"

Previous: Why does dilution preserve the moles in the transferred sample? Next: How does precipitate mass reveal an ion concentration?

#Year11Chemistry #Chemistry #HSCChemistry #HSCScience

## Open decisions

- **1. Titration depth at Year 11 (root).** Year 12 `chem-m6-c12.md` and `chem-m6-p06.md` teach titration fully. This video gives one complete titration with a basic endpoint, concordant titres and rinse rules (route stop "one quantitative analysis"); Year 12 then adds indicator choice, equivalence and curves. Root to confirm the split; if root wants Year 11 lighter, cut scene 5 to one sentence (about 200 characters) and keep the table.
- **2. Concordant spread (learning review).** 18.75 to 18.85 is exactly 0.10 mL; tighten to 18.77, 18.83, 18.80 (same mean) if the review finds the boundary case distracting. Burette readings are normally to 0.05 mL, so 18.77 would need a "to 0.01 mL digital burette" tag; keeping 18.75 to 18.85 is the author's choice.
- **3. Bore-water bottle plate (Codex).** A crop of the clear bottle from `m8-river-sampling-bottle-v1.png` (Codex asset brief); used in the final frame and in m2-v15. Fallback: a beaker with a coded clear fill.
- **4. Running value (root).** 0.1003 mol L⁻¹ from m2-v12 (its open decision 2); with 0.1000 the case becomes 2.000 × 10⁻³, 4.000 × 10⁻³ mol and c(HCl) = 0.2128 mol L⁻¹.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the endpoint understood as "all carbonate used up" without pH; is scene 4 too dense; does the rinse-error reasoning carry from m2-v13), then the science check and Codex error check.
- Checker output (5 November): narration 5,659 characters; per scene (1 to 15): 470, 404, 412, 498, 410, 436, 437, 334, 438, 381, 473, 193, 360, 338, 75; no em dash; every quoted cue found in its scene's narration in spoken order.
- Checker output (Revision 2, 6 November): unchanged narration, 5,659 characters (sum of scene strings); no em dash; every bold cue quoted in its scene's Visual in spoken order (scene 3's "spilling" was not quoted in Revision 1; now fixed).

## Revision 2 (6 Nov 2026)

Brief 181 findings (`checks/c-y11-m2-v14-learning-review.md`, `checks/c-y11-m2-v14-science-check.md`): none required (0 blockers, 0 should fix, 0 optional). Cue fix found by this revision's check: scene 3's bold cue "spilling" is now quoted in its Visual.

Visual upgrade (high-risk design: scene-level redesign of the long stretches; narration, numbers and teaching logic unchanged):
- Scene 1: the existing standard flask, pipette and acid beaker plates fill the frame in the first 20 s.
- Redesign of scenes 3 to 5 (about 99 s on one set-up): set-up (3); push-in to the flask and burette tip with the acid-added scrubber (4); a full-width titre stage with four small endpoint flasks and their readings (5).
- Redesign of scenes 6 to 8 (about 91 s on one calculation board): calculation layout (6); the burette plate returns beside the last row with a pen arrow to the titre (7); the bridge strip becomes the hero with the crossed slip and memory card (8). No stage now runs longer than about 46 s.
- Live control: the acid-added scrubber (scene 4) drives "acid added" (0.00 → 18.80 mL), "carbonate left" (2.006 × 10⁻³ → 0 mol), the 1 : 2 token pairing and the yellow → orange swap, with the red ghost at 18.85 mL.
- Framed answers with a green tick: 2.006 × 10⁻³ mol (1), mean titre 18.80 mL (5), 0.2134 mol L⁻¹ (7), 0.08000 mol L⁻¹ (11), "too low" (13). Crossed slips carry red hand tags (rough titre, "÷ 0.02000 L", 0.1067, 0.1600, "no effect").
- Hand tags and pen marks in role colours in every teaching scene (1 to 9).
- Memory line as a framed card (scene 8 and the notes screen); key notes trimmed to five short bullets (about 390 characters).
- Decisions gain "Colour roles", "Type sizes" (current row 48 px, readouts 52 px, floor 26 px), "Simulation" and a revised "Board layout".
- No new plate requests (the bottle crop was delivered by brief 181).

Counts: 5,659 characters, unchanged; about 510 to about 512 s.
