# G03 (Chemistry, Module 6): Standardisation and titration calculations: HSC-style practice (design)

Status: Revision 3 (22 Oct): Codex check 97 resolved; ready to voice.
Earlier status, Revision 2 (21 Oct): learning review and Claude science check resolved; needs Codex error check before voicing.

## Changes in Revision 3 (22 Oct)

No changes: Codex check 97 found no errors in this design. Narration recounted by script on 22 Oct: 5,806 characters, unchanged; timing unchanged.

Revision 2 changes (21 Oct), resolving `../checks/m6g03c-learning-review.md` and `../checks/m6g03c-claude-science-check.md`:

- Scene 3c (learning S1, science S1): "so it should be much stronger than the aliquot" becomes "so the cleaner should be about twenty five times as concentrated as the diluted solution"; the tag becomes "250.0 ÷ 10.00 = 25: the cleaner is 25 times as concentrated (0.1276 × 25 = 3.190)". The video says "more concentrated", never "stronger", for concentration.
- Decision board and key note 3 (science S2): the carbonate ratio is qualified "(to the methyl orange endpoint)"; the scene 4d mini chain's grey "Na₂CO₃ + 2HCl" label carries the same qualifier.
- Hook (learning M4): the generic second sentence becomes a concrete one ("stop one step early in a dilution question, and your answer can be twenty five times too small"), with a visual that uses no Q2 values, so nothing answer-bearing appears before the Q2 attempt.
- Scene 2c (learning M1): one table only. A "Titre (mL)" row fills under the card's two reading rows, then the concordance strip draws under it.
- Scene 3c (learning M2): the flask bands and counter dim once "× 12.5" fills; the "n(HCl) in flask" line dims when the "c =" line writes; the "all of it came from the sample" tag fades at its sentence end. Three bright items at the end.
- Q2 card (learning M3, science M2): "Assume hydrochloric acid is the only substance in the cleaner that reacts with sodium hydroxide." added after the first sentence (screen only), parallel to Q3's "do not react with acid".
- Q1 rough reading (science M1): 24.6 becomes 24.60 on the card, in the titre row and in the model answer, so the card models the 0.05 mL rule it tests.
- "percent" becomes "per cent" in narration in 2e, 3d, 4c and 4d (learning M5, science M3); screen "%" is unchanged.
- Key note 2 (learning M6, science M4): "any titre that does not agree with the others within 0.10 mL".
- Question strip readability (learning M7): a build rule under the visual system; if Q1's table cannot be read when shrunk, the table stays full size and only the stem shrinks.
- Declined: none. Every should-fix and minor in both checks is applied.
- Narration recounted by script: see "Narration length estimate".

Revision 1 (21 Oct): first design. No pre-design plan exists for G03 (none in `../pre-design/`; the route entry, C12's Boundary and Open decisions, and C15's and C16's Boundaries define its content). Narration and timing: see "Narration length estimate". Nothing recorded; human listening pending.

Working title: "Standardisation and titration calculations: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception, owner 16 Oct). Each question is shown as an exam would word it (stem, data, demands); it ends "Pause here to answer." with a 10 s countdown and keeps the full question on screen during the attempt; the walkthrough underlines each given in the question text at the cue where it is used (owner rule, 18 Oct: no givens card); it reasons one stage per scene and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `chem-m6-g03` (playlist order 20, after chem-m6-p06, before chem-m6-c13). Production label G03 (Chemistry, Module 6).

Scope: follows the format of `chem-m6-g01.md` and `chem-m6-g02.md` (Revision 1: question card, type badge hidden during the attempt, check strip, one kept chip, decision board) and the calculation staging of `chem-m6-c12.md` (task line, equation strip, mole bridge, titre table and concordance strip, one stage per line, earlier lines dim). In a practice video the question card replaces the givens card: the givens are underlined in the question text as they are used.

Syllabus dotpoint (NSW Chemistry Stage 6, 2017, p53; `C6-IQ3-01` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"conduct practical investigations to analyse the concentration of an unknown acid or base by titration"

Practice and transfer only: the coverage rows stay with chem-m6-c12 (method and calculation) and chem-m6-p06 (conduct and errors); G03 adds practice rows, not first coverage.

**Boundary:** starts at the route's "Present a new standardisation and titre table and protect an attempt" and stops at its "Calculate concentration with stoichiometry and check units and titre choice". Three questions, each a chain of steps with one trap: (1) standardising sodium hydroxide against a primary standard made from a weighed hydrate, with a titre table of burette readings (titre choice; the hydrate's molar mass); (2) a liquid product diluted in a volumetric flask, titrated with that standardised base, reported in mol/L and as a percentage by mass through its density (aliquot scale-up, assigned here by C12 Open decisions; percentage by mass from density, assigned here by C12, C15 and C16 Boundaries); (3) a solid tablet made up to volume, titrated with the P06 acid, reported as a percentage by mass of the weighed tablet, with no equation given (the ratio the student must write; scale-up again with a different factor). **Not here:** back titrations (chem-m6-c15); indicator choice and equivalence pH (chem-m6-c13, the next video; indicators are named in the stems as data only); curves and conductivity (chem-m6-c14); error direction (chem-m6-p06 taught it for technique; chem-m6-g04 practises tables); percentage uncertainty; polyprotic stages beyond the overall ratio.

## Decisions

- **Route entry.** `../../module6-video-route-draft.json`: chem-m6-g03, "Standardisation and titration calculation practice", type practice, site lesson L14, syllabus action C6-IQ3-01, prerequisites chem-m6-c12 and chem-m6-p06, next chem-m6-c13, main learner question "How do standardisation and titres give concentration?". C12 Open decisions: "Primary standard depth ... the full standard-solution calculation (mass to concentration) and standardisation practice are chem-m6-g03"; "Aliquot scale-up (decided 20 Oct by the project manager: chem-m6-g03 or chem-m6-c15)". C12 Boundary: "percentage by mass with density (g03)". C15 and C16 Boundaries both list "aliquot scale-up from a volumetric flask and percentage by mass from density (chem-m6-g03)". C15 owns the back-titration percentage of a solid; Q3 here is a direct titration of a soluble solid, so it does not overlap.
- **One main question:** *A titration question gives you a weighed standard, a table of burette readings, a sample diluted in a flask, or a tablet. How do you follow the moles from the standard to the answer, and check the titres, the scale-up and the units on the way?* Heading on screen: "Titration calculations: follow the moles".
- **Why a practice video, and why these three questions.** C12 worked two single-stage titrations with the standard's concentration given; P06 made a standard from its mass once, in one line. Students lose these questions in the links of a chain: they use the anhydrous molar mass for a hydrate, average a non-concordant titre or forget to subtract the initial reading, stop at the aliquot's concentration, compute a percentage from a volume, or carry carbonate's 1 : 2 ratio to hydrogen carbonate. Each question hides one of these traps in a new case. None repeats a C12 or P06 case: C12 used vinegar with NaOH (1 : 1), Na₂CO₃ with HCl (1.325 g, 0.05000 mol/L, 22.45 mL), sulfuric acid with NaOH (attempt 1) and HCl against ethanoic acid (attempt 2); P06 used Na₂CO₃ (1.3656 g, 0.05154 mol/L) with HCl (0.1059 mol/L).

  | Q | Case (new) | Chain | Trap (crossed) | Check | Core |
  |---|---|---|---|---|---|
  | 1 | oxalic acid dihydrate (1.5822 g, 250.0 mL) standardises NaOH; burette readings with a rough run and an outlier | mass → c(standard) → titres from readings → concordant mean → n, ratio 1 : 2 → c(NaOH) | molar mass without the water of crystallisation (90.04 for 126.07) | concentration near the 0.1 mol/L the label suggests | C12, P06 |
  | 2 | brick cleaner (hydrochloric acid), 10.00 mL diluted to 250.0 mL; 20.00 mL aliquots; the Q1 NaOH; density 1.05 g/mL | n(NaOH) → n(HCl) in aliquot → × 12.5 → c(cleaner) → g/L → % by mass with density | stopping at the aliquot (0.1276 mol/L) | the cleaner is about 25 times as concentrated as the diluted solution; % below 100 | C12 |
  | 3 | antacid tablet with NaHCO₃ (1.3200 g, 100.0 mL); 20.00 mL aliquots; 0.1059 mol/L HCl; no equation given | write the equation (1 : 1) → n → × 5 → mass → % of the tablet | carbonate's 1 : 2 ratio carried to hydrogen carbonate (38.92%) | % below 100; a tablet uses its weighed mass, no density | C12, C06 |

- **Rising difficulty.** Q1 adds two links to C12's chain (the standard's mass and the burette readings). Q2 adds the scale-up and the density. Q3 removes the equation and changes the scale-up factor.
- **Linked data (deliberate).** Q2 uses the sodium hydroxide standardised in Q1 (0.1046 mol/L, restated on Q2's card so every condition is visible), the way HSC questions chain a standardisation into an analysis (site lesson 14's two-stage oxalic acid then vinegar item is the site precedent, with new data here). Q3 uses P06's hydrochloric acid (0.1059 mol/L, stated on the card; a grey tag "the acid from the titration practical" is optional at build).
- **Site alignment.** Site lesson 14 (`../site-extracts/chem-m6-l14.md`): its oxalic acid dihydrate primary standard ("The dihydrate form is stable and non-hygroscopic (unlike anhydrous oxalic acid)", M = 126.1 g/mol, H₂C₂O₄ + 2NaOH; Q1, new data); its percentage by mass box ("mass(sample) = volume(sample) × density"; "For liquids ... use density to convert volume to mass. For tablets: use mass of tablet directly"; Q2 and Q3's closing contrast); its two-stage standardise-then-analyse question with a 10.00 mL to 100.0 mL dilution (Q1 into Q2, new data and a new product); its antacid row (NaHCO₃ + HCl, 1 : 1, methyl orange; Q3); its misconceptions "all recorded titres should be averaged" and "equal volumes imply equal concentrations" (Q1's titre choice; Q3's "write the equation"). Recorded site corrections that touch these items: C12 new correction 5 (worked example 3 averages two titres against its own three-titre rule; Q1 uses three concordant titres) and C12 new correction 6 (vinegar labels state grams per 100 mL, not % by mass; this is why Q2 uses a brick cleaner, whose strength is reported by mass, rather than vinegar). No new site corrections.
- **Entry knowledge (do not re-teach; recall in one clause each).** From C12: the four steps ("known to moles, ratio, unknown"); concordant titres within 0.10 mL, rough run excluded; Na₂CO₃ + 2HCl; H₂SO₄ + 2NaOH (a diprotic acid takes two hydroxides); the unknown may be in the burette or the flask; results to the data's significant figures. From P06: making a standard from a weighed solid (n = m/M, then c = n/V); titre = final − initial reading; readings to 0.05 mL. From C06: carbonate accepts two protons; hydrogen carbonate is amphiprotic and accepts one. From C02: acid + hydrogen carbonate → salt + water + carbon dioxide. From Year 11: molar mass from the data sheet, water of crystallisation in a formula, n = m/M, n = cV, mass = density × volume, percentage by mass. Not assumed: aliquot scale-up, percentage by mass from density.
- **Learner-visible vocabulary (callbacks; one plain meaning each where needed).** Water of crystallisation (water molecules built into a crystal, written "·2H₂O" in the formula, and weighed with it); dihydrate (two waters of crystallisation per formula unit); dilution factor (how many times bigger the flask volume is than the sample put into it; shown as "aliquots' worth" in narration); percentage by mass (mass of the substance ÷ mass of the sample × 100%).
- **Start and stop.** Starts at an unseen standardisation; stops after three walkthroughs and a decision board: full molar mass, readings to titres, concordant mean, the ratio from a written equation, scale-up from the aliquot, and a percentage by mass from masses (density for a liquid, weighed mass for a solid). No new method: each link is a Year 11, C12 or P06 step.
- **Placement and handoff.** After P06, before C13. Scene 5 hands off: "Next, which indicator fits a titration." The previous video in playlist order is P06, so the narration says "the titration practical" when it recalls P06 and never says "last video".
- **Precision (owner rule, strict).** Burette readings to 0.05 mL; titres to two decimal places; concordant titres agree within 0.10 mL (inclusive, C12 author note g); masses to 0.0001 g; volumetric volumes 250.0, 100.0, 25.00, 20.00 and 10.00 mL; results to four significant figures except Q2's percentage, which takes three from the density (1.05 g/mL). Working keeps guard digits ("keep the digits; round at the end", C10 and P06 tag); each question's values were chosen so the rounded and unrounded chains give the same reported answer (author check under "Numbers to verify").
- **Visual system.** One practice board throughout, in the G01 and G02 layout: top-left the **question card** (stem, data, table and demands, as an exam prints them, with the tag "HSC-style question, written for HSCScience"), kept readable through the whole question; the working fills the right two thirds; a **type badge** top-right ("Standardisation: mass to c", "Diluted sample: scale up", "Solid sample: % by mass"), hidden during each attempt because it names the method. When the walkthrough starts, the card shrinks to a strip and each given is **underlined in amber in the question text** at the cue where it is used (no givens card). A **check strip** on the far left carries four rows, "titres chosen?", "ratio from the equation?", "scaled up?", "units and sense?", and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. **Strip readability (build rule, Revision 2):** the shrunk question strip must stay large enough that an underlined given can be read at playback speed (checked in the stills pass and at playback); if Q1's reading table cannot be read when shrunk, the table stays at full size and only the stem shrinks. Working follows the C12 staging: equation strip, the mole bridge (known → ratio → unknown) with a fourth box added in Q2 and Q3 ("× flask ÷ aliquot"), the titre table and concordance strip (Q1), one stage per line, earlier lines dimming, one kept chip into the next scene. Colour key from C12: the known solution's values navy, the unknown's amber, the ratio box teal, concordant titres ringed teal, excluded rows crossed grey; amber is otherwise used only for underlined givens. **Clutter rule (owner):** besides the question strip and the check strip, at most about three bright text items in the working area at once; each tag fades when the next cue lands.
- **Real objects are painted** (existing plates only, listed under Assets): the antacid tablets (Q3), a small volumetric flask and pipette in the scale-up motion (Q2, Q3). Q1 and Q2 are worded questions with no object to show (as G02 decided for its Q1 and Q2): a brick cleaner plate was considered and declined, because the existing spray-bottle cleaner plate (`m6-household-cleaner-bottle-v1.png`) is a glass cleaner, not an acid jug, and a picture would add an object without carrying the explanation. No people or hands.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own spoken, crossed-out classic mistake (owner rule for practice walkthroughs). Only one crossed chip per question; the outlier and rough rows in Q1 are excluded data (grey crosses on the table, C12 style), not a second mistake chip.
- **Memory aids (bank, checked below).** Recalled, not re-taught: "Known to moles, ratio, unknown" (all three, C12's aid), "Average only concordant titres" (Q1, grey tag), "Scale up from the aliquot" (Q2 and Q3; the bank's *Trap*, "very common lost mark", first used here as a spoken aid). No new aid.
- **Legacy and shared code.** No legacy logic. Reuse (no prototype components): explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`); C12's titre table, concordance strip, mole bridge and equation strip (from `src/explainer/lessons/chem-m6-c12/` when built); P06's error-free parts are not needed; bio-m6-g01's board parts (`PauseHold`, `AnsBox`, `Line`, `Checks` with a `labels` prop or a lesson-local copy, as G02 decided); B6a's `WrongChip` and `Cross`. New coded items (lesson-local): the **scale-up flask** (a coded outline of a volumetric flask filled with stacked aliquot-sized bands, "12.5 aliquots' worth" in Q2 and "5" in Q3, the sample's original volume marked beside it); the **mass box** for percentage by mass (two bars, the substance's mass inside the sample's mass, with the percentage on the dividing line); the decision board.

Main question: *A titration question gives you a weighed standard, a table of burette readings, a sample diluted in a flask, or a tablet. How do you follow the moles from the standard to the answer, and check the titres, the scale-up and the units on the way?*
Entry knowledge: see above. Students start Year 12 and have watched C01 to C12, the practicals P01 to P06 in playlist order, and the practice videos chem-m6-g01 and g02.
Stops after: calculating a standard's concentration from the mass of a hydrate, with the water of crystallisation in the molar mass; turning burette readings into titres and choosing the concordant ones; standardising sodium hydroxide with a 1 : 2 ratio; scaling moles up from an aliquot to the flask and back to the original sample; calculating a concentration and a percentage by mass for a liquid from its density; writing the equation for hydrogen carbonate with acid and using its 1 : 1 ratio; calculating a percentage by mass for a solid from its weighed mass; checking each answer for size and units.
Handoff: which indicator fits a titration (route chem-m6-c13).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Pronunciations as in Review notes.

### 1. hook
> Titration questions often chain several steps: make the standard, choose the titres, use the ratio, **scale up** from an aliquot, then turn moles into a **percentage**. Lose one link, and every number after it is wrong: stop one step early in a dilution question, and your answer can be **twenty five times** too small. Here are three HSC-style questions. Pause and try each one, then we'll **follow the moles**, one step at a time.

Visual: heading "Titration calculations: follow the moles" writes on. A chain of five small linked chips draws across the right, one per spoken step: "standard: m → c", "titres", "ratio", on "scale up" "aliquot → flask", on "percentage" "% by mass". On "Lose one link" the middle link greys and every chip after it greys with it, then they relight. On "twenty five times" a small grey answer chip "aliquot's c" sits beside a larger ghost chip "sample's c: 25 × bigger" (no Q2 values, so nothing answer-bearing before the Q2 attempt), and both fade. The check strip builds on the left: "titres chosen?", "ratio from the equation?", "scaled up?", "units and sense?". On "follow the moles" C12's mole bridge thumbnail pulses under the chain and the chips become three numbered question cards with one shared tag line, "HSC-style questions, written for HSCScience". Hold about 1 second; the check strip shrinks to the far left.

### 2a. q1-question (question 1: standardising sodium hydroxide)
> Question one. A student dissolves one point five eight two two grams of oxalic acid dihydrate and makes it up to two hundred and fifty millilitres. She titrates twenty five millilitre aliquots with sodium hydroxide, and her burette readings are in the table. Calculate the concentration of the oxalic acid, then of the sodium hydroxide. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A student standardises a sodium hydroxide solution. She dissolves 1.5822 g of oxalic acid dihydrate, H₂C₂O₄·2H₂O, in distilled water and makes the solution up to 250.0 mL in a volumetric flask. She titrates 25.00 mL aliquots of this solution with the sodium hydroxide, using phenolphthalein indicator. H₂C₂O₄(aq) + 2NaOH(aq) → Na₂C₂O₄(aq) + 2H₂O(l)". Table: "Titration | Rough | 1 | 2 | 3 | 4"; "Final reading (mL) | 24.60 | 24.55 | 24.50 | 25.20 | 24.30"; "Initial reading (mL) | 0.00 | 0.50 | 0.10 | 1.20 | 0.35". Demands: "(a) Calculate the concentration of the oxalic acid solution." "(b) Calculate the concentration of the sodium hydroxide solution." Two answer boxes. Nothing answer-bearing: no titre row, no molar mass. **Countdown ring 10 seconds** after "Pause here to answer."; the check strip dims; the whole card stays on screen.

### 2b. q1-standard (the hydrate's molar mass)
> First, the standard. The formula has two waters of crystallisation, and she weighed them too, so the molar mass **includes** them: one hundred and twenty six point zero seven grams per mole. Then n is m over M, **zero point zero one two five five** moles, and over zero point two five zero zero litres, the oxalic acid is **zero point zero five zero two zero** moles per litre.

Visual: the card shrinks to a strip. Type badge "Standardisation: mass to c". "H₂C₂O₄·2H₂O" underlines amber and the "·2H₂O" part rings; a grey tag "water of crystallisation: part of the crystal, weighed with it" writes and fades. On "includes" the line "M = 2(1.008) + 2(12.01) + 4(16.00) + 2 × 18.016 = 126.07 g/mol" writes, the "+ 2 × 18.016" segment lit. On "zero point zero one two five five" "1.5822 g" underlines and "n = 1.5822 ÷ 126.07 = 0.012550 mol" writes (the M line dims). On "zero point zero five zero two zero" "250.0 mL" underlines and "c = 0.012550 ÷ 0.2500 = 0.05020 mol/L" writes; answer box (a) fills "c(H₂C₂O₄) = 0.05020 mol/L" and shrinks to a navy kept chip.

### 2c. q1-titres (readings to titres, then choose)
> Next, the titres. Subtract each initial reading from the final one. The rough run isn't used. Run two, **twenty four point four zero**, is well above the rest. Twenty four point zero five, twenty four point zero zero and twenty three point nine five agree within **zero point one zero**, so their mean is exactly **twenty four point zero zero** millilitres.

Visual: the card's table underlines both reading rows. One table only (Revision 2): a third row, "Titre (mL)", adds directly under the card's two reading rows, filling cell by cell as "final − initial": "24.60 | 24.05 | 24.40 | 24.00 | 23.95", each cell aligned under its readings. The rough cell greys ("not used"). On "twenty four point four zero" the run 2 cell pulses. On "zero point one zero" the concordance strip draws under the table (23.90 to 24.45 mL): the "0.10 mL" bracket covers 23.95 to 24.05, the 24.40 dot outside; run 2 takes a grey cross and runs 1, 3 and 4 ring teal (grey tag "average only concordant titres", fades). On "twenty four point zero zero" "(24.05 + 24.00 + 23.95) ÷ 3 = 24.00 mL" writes and shrinks to a kept chip "mean titre = 24.00 mL". Strip: "titres chosen?" ticks.

### 2d. q1-naoh (known to moles, ratio, unknown)
> Now known to moles, ratio, unknown. The aliquot holds zero point zero five zero two zero times zero point zero two five zero zero: **one point two five five times ten to the minus three** moles of oxalic acid. The equation says **two** hydroxides for each one, so that's two point five one zero times ten to the minus three moles, in twenty four point zero zero millilitres. The sodium hydroxide is **zero point one zero four six** moles per litre, close to the zero point one you'd expect.

Visual: the table dims to a strip. The mole bridge draws: "known: H₂C₂O₄" → "ratio" → "unknown: NaOH". On "one point two five five" "25.00 mL aliquots" underlines and "n(H₂C₂O₄) = 0.05020 × 0.02500 = 1.255 × 10⁻³ mol" writes and fills the known box. On "two" the equation's "2NaOH" underlines, the ratio box fills "1 : 2" and "n(NaOH) = 2 × 1.255 × 10⁻³ = 2.510 × 10⁻³ mol" writes (the first line dims). On "zero point one zero four six" "c(NaOH) = 2.510 × 10⁻³ ÷ 0.02400 = 0.1046 mol/L" writes; answer box (b) fills "c(NaOH) = 0.1046 mol/L", with a small grey tag "4 s.f., like the data" (fades). On "close to the zero point one" strip: "ratio from the equation?" and "units and sense?" tick (a grey tag "near 0.1 mol/L, as a lab NaOH is usually made" fades).

### 2e. q1-mistake (the classic mistake)
> The classic mistake is leaving out the water of crystallisation. Using ninety point zero four makes the oxalic acid look forty per cent more concentrated, and the sodium hydroxide comes out at zero point one four six four, far too high.

Visual: a chip "M = 90.04 g/mol (no ·2H₂O): c(H₂C₂O₄) = 0.07029 mol/L" writes on and, on "The classic mistake", takes a grey scribble cross with the caption "the waters were weighed: include them in M". On "zero point one four six four" a small grey "c(NaOH) = 0.1464" sits beside the white "0.1046". Hold about 1.5 seconds.

### 3a. q2-question (question 2: a diluted brick cleaner)
> Question two. A brick cleaner contains hydrochloric acid. Ten millilitres of it is diluted to two hundred and fifty millilitres, and twenty millilitre aliquots are titrated with the sodium hydroxide from question one. Calculate the cleaner's concentration of hydrochloric acid, and its percentage by mass. Pause here to answer.

Visual: board clears. Type badge hidden. The card writes on: "A brick cleaner contains hydrochloric acid. Assume hydrochloric acid is the only substance in the cleaner that reacts with sodium hydroxide. A 10.00 mL sample of the cleaner is diluted with distilled water to 250.0 mL in a volumetric flask. 20.00 mL aliquots of the diluted solution are titrated with the sodium hydroxide standardised in Question 1, 0.1046 mol/L. The concordant titres are 24.40 mL, 24.35 mL and 24.45 mL. The density of the brick cleaner is 1.05 g/mL." Demands: "(a) Calculate the concentration of hydrochloric acid in the brick cleaner, in mol/L." "(b) Calculate the percentage by mass of hydrochloric acid in the brick cleaner." Two answer boxes. No plate. Nothing answer-bearing: no flask diagram, no equation. **Countdown 10 seconds**; strip dims.

### 3b. q2-aliquot (moles in one aliquot)
> This aliquot came from a **diluted** sample, so track moles, not concentrations. The mean titre is exactly twenty four point four zero millilitres. Moles of hydroxide: zero point one zero four six times zero point zero two four four zero, **two point five five two times ten to the minus three**. Hydrochloric acid reacts one to one, so the aliquot held the **same** moles of acid.

Visual: the card shrinks to a strip; type badge "Diluted sample: scale up". On "diluted" "diluted with distilled water to 250.0 mL" underlines and the scale-up flask draws in outline at the right, empty, labelled "250.0 mL", with a small "10.00 mL sample" beaker icon pouring into it (coded). The three titres underline and a kept chip "mean titre = 24.40 mL" writes (grey tag "all concordant", fades). Equation strip: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)". On "two point five five two" "0.1046 mol/L" underlines and "n(NaOH) = 0.1046 × 0.02440 = 2.552 × 10⁻³ mol" writes; the mole bridge fills its known box. On "same" the ratio box fills "1 : 1" and the unknown box "n(HCl) in 20.00 mL = 2.552 × 10⁻³ mol". Strip: "titres chosen?" and "ratio from the equation?" tick.

### 3c. q2-scale-up (from the aliquot to the cleaner)
> But the flask held two hundred and fifty millilitres, **twelve and a half** aliquots' worth. So the flask, and the ten millilitre sample poured into it, held twelve point five times as much acid: **zero point zero three one nine zero** moles. Divide by the sample's zero point zero one zero zero zero litres, and the brick cleaner is **three point one nine zero** moles per litre. That's sensible: it was diluted twenty five times, so the cleaner should be about twenty five times as concentrated as the diluted solution.

Visual: a fourth box joins the mole bridge, "× flask ÷ aliquot". On "twelve and a half" "20.00 mL aliquots" underlines and the scale-up flask fills with stacked aliquot-sized bands, twelve full and one half, counter "250.0 ÷ 20.00 = 12.5"; the fourth box fills "× 12.5", and the flask bands and counter dim to grey. On "zero point zero three one nine zero" "n(HCl) in flask = 12.5 × 2.552 × 10⁻³ = 0.03190 mol" writes and an arrow runs from the flask back to the "10.00 mL sample" beaker, tag "all of it came from the sample" (fades at its sentence end). On "three point one nine zero" "A 10.00 mL sample" underlines and "c = 0.03190 ÷ 0.01000 = 3.190 mol/L" writes as the "n(HCl) in flask" line dims; answer box (a) fills "c(HCl) = 3.190 mol/L" and shrinks to a kept chip. On "diluted twenty five times" strip: "scaled up?" ticks, with a tag "250.0 ÷ 10.00 = 25: the cleaner is 25 times as concentrated (0.1276 × 25 = 3.190)" that fades at the scene end. Bright at the end: the c line, answer box (a) and the tag.

### 3d. q2-percent (masses, through the density)
> A percentage by mass needs two **masses**, so use the density. One litre of cleaner has a mass of one thousand and fifty grams. It holds three point one nine zero moles of acid, times thirty six point four six grams per mole: **one hundred and sixteen point three** grams. That's **eleven point one per cent**, three significant figures, from the density.

Visual: the mass box draws: an outer bar "1 L of cleaner: 1.05 g/mL × 1000 mL = 1050 g" (on "masses", "1.05 g/mL" underlines) and an inner amber bar. On "one hundred and sixteen point three" "m(HCl) = 3.190 mol × 36.46 g/mol = 116.3 g" writes and fills the inner bar. On "eleven point one per cent" "% = 116.3 ÷ 1050 × 100% = 11.1%" writes on the dividing line; answer box (b) fills "11.1% HCl by mass", with a small grey tag "density 3 s.f. → 3 s.f." (fades). Strip: "units and sense?" ticks (grey tag "below 100%; mass ÷ mass, both in grams", fades).

### 3e. q2-mistake (the classic mistake)
> The classic mistake is stopping at the aliquot. Zero point one two seven six moles per litre is the diluted solution, not the cleaner. **Scale up from the aliquot**.

Visual: a chip "c(HCl) = 2.552 × 10⁻³ ÷ 0.02000 = 0.1276 mol/L" writes on and, on "The classic mistake", takes a grey scribble cross with the caption "that's the diluted solution". On "Scale up from the aliquot" the bank aid writes small under the cross with the flask thumbnail. Hold about 1.5 seconds.

### 4a. q3-question (question 3: an antacid tablet)
> Question three. An antacid tablet contains sodium hydrogen carbonate, and its other ingredients don't react with acid. A one point three two zero zero gram tablet is dissolved and made up to one hundred millilitres, and twenty millilitre aliquots are titrated with zero point one zero five nine moles per litre hydrochloric acid. Calculate the percentage by mass of sodium hydrogen carbonate in the tablet. Pause here to answer.

Visual: board clears. Type badge hidden. `m6-antacid-tablets-v1.png` sits small at the card's upper right. The card writes on: "An antacid tablet contains sodium hydrogen carbonate, NaHCO₃. Its other ingredients dissolve in water but do not react with acid. A tablet of mass 1.3200 g is dissolved in distilled water and made up to 100.0 mL in a volumetric flask. 20.00 mL aliquots are titrated with 0.1059 mol/L hydrochloric acid, using methyl orange indicator. The titres are 23.05 mL, 23.10 mL and 23.15 mL." Demand: "Calculate the percentage by mass of sodium hydrogen carbonate in the tablet." One answer box. Nothing answer-bearing: no equation. **Countdown 10 seconds**; strip dims.

### 4b. q3-ratio (write the equation first)
> No equation is given, so **write** it. Hydrogen carbonate accepts just **one** proton, making water and carbon dioxide, so the ratio is one to one. The mean titre is exactly twenty three point one zero, so the acid is zero point one zero five nine times zero point zero two three one zero: **two point four four six times ten to the minus three** moles, and the aliquot held the same moles of hydrogen carbonate.

Visual: the card shrinks to a strip; type badge "Solid sample: % by mass". On "write" the equation strip writes letter by letter: "NaHCO₃(aq) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)". On "one" a mini chain "CO₃²⁻ → HCO₃⁻ → H₂CO₃" writes small with HCO₃⁻ ringed and one arrow lit (grey tag "conjugates video: one proton to go", fades), and the ratio box fills "1 : 1". The three titres underline (all within 0.10 mL) and a kept chip "mean titre = 23.10 mL" writes. On "two point four four six" "0.1059 mol/L" underlines and "n(HCl) = 0.1059 × 0.02310 = 2.446 × 10⁻³ mol" writes, filling the known box; the unknown box fills "n(NaHCO₃) in 20.00 mL = 2.446 × 10⁻³ mol". Strip: "titres chosen?" and "ratio from the equation?" tick.

### 4c. q3-percent (scale up, then the tablet's mass)
> Scale up: one hundred millilitres is **five** aliquots, so the tablet held one point two two three zero times ten to the minus two moles. Times eighty four point zero one grams per mole, that's **one point zero two seven four** grams. Out of one point three two zero zero grams, it's **seventy seven point eight four per cent**. A tablet is weighed directly, so there's **no density** here.

Visual: the scale-up flask returns with "100.0 mL" and five aliquot bands; on "five" "20.00 mL aliquots" and "100.0 mL" underline, counter "100.0 ÷ 20.00 = 5", the fourth bridge box fills "× 5" and "n(NaHCO₃) in tablet = 5 × 2.446 × 10⁻³ = 1.2230 × 10⁻² mol" writes. On "one point zero two seven four" "m = 1.2230 × 10⁻² × 84.01 = 1.0274 g" writes (grey tag "M(NaHCO₃) = 22.99 + 1.008 + 12.01 + 3(16.00) = 84.01 g/mol", fades; grey tag "keep the digits; round at the end", fades). On "seventy seven point eight four" "1.3200 g" underlines, the mass box draws (outer bar "tablet 1.3200 g", inner bar "NaHCO₃ 1.0274 g") and "% = 1.0274 ÷ 1.3200 × 100% = 77.84%" writes; answer box fills "77.84% NaHCO₃ by mass". On "no density" Q2's mass box thumbnail ("1.05 g/mL × 1000 mL") appears beside it and greys, tag "liquid: density; solid: weighed mass". Strip: "scaled up?" and "units and sense?" tick.

### 4d. q3-mistake (the classic mistake)
> The classic mistake is borrowing carbonate's one to two ratio. That halves the moles and gives thirty eight point nine two per cent. Carbonate takes two protons. Hydrogen carbonate already has one, so it takes only **one** more.

Visual: a chip "NaHCO₃ : HCl = 1 : 2, so 38.92%" writes on and, on "The classic mistake", takes a grey scribble cross with the caption "write the equation for this base". On "one more" the mini chain returns: CO₃²⁻ with two arrows lit (grey, "Na₂CO₃ + 2HCl (to the methyl orange endpoint)"), HCO₃⁻ with one arrow lit (white, "NaHCO₃ + HCl"). Hold about 1.5 seconds.

### 5. decision-board
> So for any titration calculation, follow the moles. Use the full molar mass, waters of crystallisation included. Average only **concordant** titres. Go known to moles, ratio, unknown, with the ratio from a **balanced equation**. If the aliquot came from a flask, **scale up**. And for a percentage by mass, use masses: density for a liquid, the weighed mass for a solid. Next, which indicator fits a titration.

Visual: the check strip returns full size as a two-column board, "Check" and "What you do", each row lighting on its cue with its question number badge: "Standard from a solid → M includes ·xH₂O; c = (m ÷ M) ÷ V (Q1)"; on "concordant" "Titres → final − initial; concordant within 0.10 mL; rough out (Q1)"; on "balanced equation" "Ratio → from the equation you write: CO₃²⁻ takes 2 (to the methyl orange endpoint), HCO₃⁻ takes 1 (Q1, Q3)"; on "scale up" "Aliquot from a flask → × (flask volume ÷ aliquot volume) (Q2, Q3)"; then "% by mass → mass ÷ mass: liquid via density, solid via its weighed mass (Q2, Q3)". Under the board, small: "Results to the data's significant figures." On "Next" a chip "Next: which indicator fits a titration?" slides in at the lower right with `m6-indicator-methyl-orange-set-v1.png` small. Hold about 2 seconds.

### 6. key-notes (reuse take: key-notes; quiet, about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Standard from a solid: c = (m ÷ M) ÷ V. For a hydrate, M includes the water of crystallisation (H₂C₂O₄·2H₂O: 126.07 g/mol).
2. Titre = final − initial reading. Leave out the rough run and any titre that does not agree with the others within 0.10 mL; average the concordant titres.
3. Known to moles, ratio, unknown, with the ratio from a balanced equation: H₂C₂O₄ : NaOH = 1 : 2; HCl : NaOH = 1 : 1; NaHCO₃ : HCl = 1 : 1; Na₂CO₃ : HCl = 1 : 2 (to the methyl orange endpoint).
4. Scale up from the aliquot: moles in flask = moles in aliquot × (flask volume ÷ aliquot volume); these are all the moles from the original sample.
5. % by mass = mass of substance ÷ mass of sample × 100%. Liquid: mass of sample = density × volume. Solid: use its weighed mass.

Memory aid (large): *Scale up from the aliquot.* Second line: *Known to moles, ratio, unknown.* Condition tag: "ratio from the balanced equation; volumes in litres; flask ÷ aliquot".

## Teaching checks

- **Does it explain causes?** Why the hydrate's M includes the waters: they were weighed as part of the crystal (2b, 2e). Why run 2 and the rough run are left out: the rough run only locates the endpoint, and run 2 disagrees with the others (2c). Why the ratio is 1 : 2 in Q1: oxalic acid gives two protons (the given equation, 2d). Why moles are tracked, not concentrations, after a dilution: dilution changes the concentration but not the moles taken from the sample (3b). Why × 12.5: the flask holds 12.5 aliquots, and all its acid came from the 10.00 mL sample (3c). Why the density: a percentage by mass needs two masses (3d). Why 1 : 1 for hydrogen carbonate: it accepts only one more proton (4b, 4d). Why no density for the tablet: it was weighed (4c).
- **Worked-example rule.** One reasoning stage per scene; the question strip stays readable and each given is underlined at the cue where it is used; earlier questions are cleared; result lines land on their spoken cues; only one kept chip carries into the next scene (Q1 the standard's c, then the mean titre; Q2 n(HCl) in the aliquot, then c(cleaner); Q3 n(NaHCO₃) in the aliquot).
- **Response opportunities.** Three, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a): the mass, formula with "·2H₂O", flask and aliquot volumes, the equation and all ten readings in Q1; the "only substance that reacts with sodium hydroxide" condition, the sample volume, flask and aliquot volumes, the NaOH concentration (restated), three titres and the density in Q2; the tablet's mass, "do not react with acid", volumes, the acid's concentration and three titres in Q3. Nothing answer-bearing during the holds; the check strip dims.
- **Reading load.** Q1's card is the densest (three sentences, an equation and a ten-cell table) and is the task itself; Q2 and Q3 are four or five short sentences. In the working area, at most about three bright text items at once (the titre table and the mole bridge each count as one item).
- **Term load.** No new scientific terms. "Water of crystallisation" (Year 11) and "aliquots' worth" are said with their meaning on screen.
- **Out of scope by design.** Back titrations; indicator choice; curves; error direction; percentage uncertainty.

## Practice questions and model answers

1. (Q1.) 1.5822 g H₂C₂O₄·2H₂O in 250.0 mL; 25.00 mL aliquots titrated with NaOH (phenolphthalein); readings (final, initial): rough 24.60, 0.00; 1: 24.55, 0.50; 2: 24.50, 0.10; 3: 25.20, 1.20; 4: 24.30, 0.35. H₂C₂O₄ + 2NaOH → Na₂C₂O₄ + 2H₂O. (a) c(H₂C₂O₄). (b) c(NaOH).
   Model: (a) M = 126.07 g/mol; n = 1.5822 ÷ 126.07 = 0.012550 mol; c = 0.012550 ÷ 0.2500 = 0.05020 mol/L. (b) Titres: 24.60 (rough, not used), 24.05, 24.40, 24.00, 23.95; 24.40 not concordant; mean (24.05 + 24.00 + 23.95) ÷ 3 = 24.00 mL. n(H₂C₂O₄) = 0.05020 × 0.02500 = 1.255 × 10⁻³ mol; n(NaOH) = 2.510 × 10⁻³ mol; c(NaOH) = 2.510 × 10⁻³ ÷ 0.02400 = 0.1046 mol/L. Crossed mistake: "M = 90.04 g/mol, c(H₂C₂O₄) = 0.07029 mol/L" (leading to c(NaOH) = 0.1464 mol/L).
2. (Q2.) 10.00 mL brick cleaner (hydrochloric acid assumed to be the only substance that reacts with NaOH) diluted to 250.0 mL; 20.00 mL aliquots; 0.1046 mol/L NaOH; titres 24.40, 24.35, 24.45 mL; density 1.05 g/mL. (a) c(HCl) in the cleaner. (b) % by mass.
   Model: (a) mean 24.40 mL; n(NaOH) = 0.1046 × 0.02440 = 2.552 × 10⁻³ mol = n(HCl) in 20.00 mL (1 : 1); in 250.0 mL: × 12.5 = 0.03190 mol, all from the 10.00 mL sample; c = 0.03190 ÷ 0.01000 = 3.190 mol/L. (b) 1.000 L of cleaner: mass 1050 g; m(HCl) = 3.190 × 36.46 = 116.3 g; % = 116.3 ÷ 1050 × 100% = 11.1%. Crossed mistake: "c = 0.1276 mol/L" (the diluted solution).
3. (Q3.) 1.3200 g tablet containing NaHCO₃ (other ingredients soluble and unreactive with acid) made up to 100.0 mL; 20.00 mL aliquots; 0.1059 mol/L HCl (methyl orange); titres 23.05, 23.10, 23.15 mL. % NaHCO₃ by mass.
   Model: NaHCO₃ + HCl → NaCl + H₂O + CO₂ (1 : 1); mean 23.10 mL; n(HCl) = 0.1059 × 0.02310 = 2.446 × 10⁻³ mol = n(NaHCO₃) in 20.00 mL; in 100.0 mL: × 5 = 1.2230 × 10⁻² mol; m = 1.2230 × 10⁻² × 84.01 = 1.0274 g; % = 1.0274 ÷ 1.3200 × 100% = 77.84%. Crossed mistake: "1 : 2 ratio, 38.92%".

## Numbers to verify

Self-check (21 Oct), computed by script and by hand; Codex to re-check. Atomic masses from the HSC data sheet: H 1.008, C 12.01, O 16.00, Na 22.99, Cl 35.45.

- **Molar masses.** H₂C₂O₄·2H₂O: 2(1.008) + 2(12.01) + 4(16.00) + 2[2(1.008) + 16.00] = 2.016 + 24.02 + 64.00 + 36.032 = 126.068 → 126.07 g/mol. Anhydrous H₂C₂O₄: 90.036 → 90.04 g/mol (crossed). Ratio 126.07 ÷ 90.04 = 1.400 ("forty per cent more"). HCl: 1.008 + 35.45 = 36.458 → 36.46 g/mol. NaHCO₃: 22.99 + 1.008 + 12.01 + 48.00 = 84.008 → 84.01 g/mol.
- **Q1 (a).** n = 1.5822 ÷ 126.07 = 0.0125502 mol (0.012550 shown, 5 s.f. kept as a guard digit); c = 0.0125502 ÷ 0.2500 = 0.0502007 → 0.05020 mol/L.
- **Q1 titres.** 24.60 − 0.00 = 24.60 (rough); 24.55 − 0.50 = 24.05; 24.50 − 0.10 = 24.40; 25.20 − 1.20 = 24.00; 24.30 − 0.35 = 23.95. Concordant spread 24.05 − 23.95 = 0.10 mL (inclusive convention, C12 author note g); 24.40 − 24.05 = 0.35 mL (outlier). Mean (24.05 + 24.00 + 23.95) ÷ 3 = 72.00 ÷ 3 = 24.00 mL exactly. Every reading, the rough final reading 24.60 included (Revision 2), ends in 0 or 5 in the second decimal place (0.05 mL precision).
- **Q1 (b).** n(H₂C₂O₄) = 0.05020 × 0.02500 = 1.2550 × 10⁻³ mol; n(NaOH) = 2.5100 × 10⁻³ mol; c = 2.5100 × 10⁻³ ÷ 0.02400 = 0.104583 → 0.1046 mol/L. Unrounded chain: 2 × 0.0502007 × 0.02500 ÷ 0.02400 = 0.104585 → 0.1046 (same). Crossed: 1.5822 ÷ 90.04 ÷ 0.2500 = 0.070289 → 0.07029 mol/L; 2 × 0.07029 × 0.02500 ÷ 0.02400 = 0.14644 → 0.1464 mol/L. Both protons of oxalic acid react with NaOH to a phenolphthalein endpoint (Ka2 about 1.5 × 10⁻⁴ to 5.4 × 10⁻⁵, author note only).
- **Q2 (a).** Mean (24.40 + 24.35 + 24.45) ÷ 3 = 73.20 ÷ 3 = 24.40 mL exactly (spread 0.10 mL). n(NaOH) = 0.1046 × 0.02440 = 2.55224 × 10⁻³ → 2.552 × 10⁻³ mol. Factor 250.0 ÷ 20.00 = 12.50. n(flask) = 12.5 × 2.552 × 10⁻³ = 0.031900 mol (unrounded 0.031903); c = 0.03190 ÷ 0.01000 = 3.190 mol/L (unrounded 3.1903 → 3.190, same). Check: 250.0 ÷ 10.00 = 25.0, and 3.190 ÷ 25 = 0.1276 mol/L, the diluted solution (the crossed value: 2.552 × 10⁻³ ÷ 0.02000 = 0.1276).
- **Q2 (b).** Mass of 1.000 L = 1.05 g/mL × 1000 mL = 1050 g; m(HCl) = 3.190 × 36.46 = 116.31 g → 116.3 g; % = 116.31 ÷ 1050 × 100 = 11.077% → 11.1% (three s.f., from 1.05). Same result per sample: 0.031903 mol × 36.46 = 1.1632 g in 10.00 mL × 1.05 g/mL = 10.5 g; 11.08% → 11.1%. Reference: hydrochloric acid of about 11% by mass has a density of about 1.05 g/mL at 20 °C (10%: 1.047; 12%: 1.057), so the data are self-consistent. Brick and masonry cleaners sold in Australia are commonly hydrochloric acid solutions of roughly 10 to 30% by mass (Codex to confirm against a product SDS; no product is named).
- **Q3.** Mean (23.05 + 23.10 + 23.15) ÷ 3 = 69.30 ÷ 3 = 23.10 mL exactly (spread 0.10 mL). n(HCl) = 0.1059 × 0.02310 = 2.44629 × 10⁻³ → 2.446 × 10⁻³ mol = n(NaHCO₃) in 20.00 mL. Factor 100.0 ÷ 20.00 = 5.000. n(tablet) = 5 × 2.446 × 10⁻³ = 1.2230 × 10⁻² mol; m = 1.2230 × 10⁻² × 84.01 = 1.02744 → 1.0274 g (guard digit); % = 1.02744 ÷ 1.3200 × 100 = 77.837 → 77.84%. Unrounded chain: 5 × 2.44629 × 10⁻³ × 84.008 ÷ 1.3200 × 100 = 77.844 → 77.84 (same). Crossed: 77.837 ÷ 2 = 38.918 → 38.92%. The methyl orange endpoint suits NaHCO₃ with HCl (site lesson 14 antacid row; not justified on screen, C13). Tablet mass 1.32 g is a plausible chewable antacid tablet mass.
- **Equations.** H₂C₂O₄ + 2NaOH → Na₂C₂O₄ + 2H₂O (H 4/4, C 2/2, O 6/6, Na 2/2); HCl + NaOH → NaCl + H₂O; NaHCO₃ + HCl → NaCl + H₂O + CO₂ (Na 1/1, H 2/2, C 1/1, O 3/3, Cl 1/1).
- **Reference facts to confirm (Codex).** Oxalic acid dihydrate as a primary standard for NaOH (site lesson 14); HCl density table values; NaHCO₃ antacid tablets with methyl orange (site lesson 14).
- **No em dashes** in this file (searched).

## Memory aid check

- **"Scale up from the aliquot."** (bank, *Trap*, "very common lost mark"; C12 and P06 considered it and deferred it here). Assumptions, checked after 3c explains the idea: the aliquot was taken from a well-mixed volumetric flask, so it holds the same fraction of the moles as of the volume; the factor is flask volume ÷ aliquot volume (12.5 in Q2, 5 in Q3; the bank's example is 10); everything in the flask came from the original sample, so its moles are the sample's moles. Holds for Q2 and Q3.
- **"Known to moles, ratio, unknown."** (bank, *Shortcut*; C12). All three questions; its condition, "read the ratio from the balanced equation", is the point of Q3.
- **"Average only concordant titres."** (bank; C12). Q1, grey tag.
- **Considered, not used:** "NaOH is never a primary standard" (C12; Q1 shows why NaOH is standardised but does not need the aid); "Back titration: total minus leftover" (C15).

## Narration length estimate

Counted by script (17 scenes; `### N.` headings with letter suffixes, "> " lines joined, bold markers removed, key-notes line as the standard notes line), at 13.3 characters per second.

| Scene | Revision 1 | Revision 2 |
| --- | --- | --- |
| 1 hook | 320 | 416 |
| 2a q1-question | 358 | 358 |
| 2b q1-standard | 365 | 365 |
| 2c q1-titres | 345 | 345 |
| 2d q1-naoh | 478 | 478 |
| 2e q1-mistake | 235 | 236 |
| 3a q2-question | 327 | 327 |
| 3b q2-aliquot | 369 | 369 |
| 3c q2-scale-up | 467 | 509 |
| 3d q2-percent | 342 | 343 |
| 3e q2-mistake | 161 | 161 |
| 4a q3-question | 428 | 428 |
| 4b q3-ratio | 400 | 400 |
| 4c q3-percent | 373 | 374 |
| 4d q3-mistake | 223 | 224 |
| 5 decision-board | 398 | 398 |
| 6 key-notes | 75 | 75 |
| **Total** | **5,664** | **5,806** |

Revision 2 total (21 Oct, recounted by script, counting only lines starting "> ", bold markers removed): **5,806 characters**, 17 scenes (inside 5,500 to 6,800; 142 more than Revision 1: the concrete hook +96, 3c's "as concentrated as" sense check +42, four "per cent" changes +4). Timing: on the design model below, speech about 437 s and **about 563 s, 9.4 minutes**; the learning review notes that this model double-counts padding and holds, and on its measured model (13.2 to 14.4 characters per second, 2 s per scene) the video runs about 510 s with the current notes padding, or about 550 s (**9.2 minutes**) with a 60 s notes hold. Both are at or under 9.5 minutes. The Revision 1 reserve trims below still apply.

Revision 1 total (21 Oct): **5,664 characters** (inside 5,500 to 6,800). Speech about 426 s; with 34 s of padding (17 scenes, 2 s each), about 7.5 s of stated holds (hook 1 s, three mistake scenes 1.5 s each, decision board 2 s), 30 s of countdowns (three) and about 55 s more of the quiet notes hold: **about 552 s, 9.2 minutes**, under the 9.5-minute cap. Walkthrough speech per question (excluding the question scene): Q1 about 107 s (three working scenes and the mistake), Q2 about 101 s, Q3 about 75 s. A first draft ran 5,523 characters; two spoken sense checks were added (2d "close to the zero point one you'd expect"; 3c "it was diluted twenty five times"), because the check strip's "units and sense?" row needs a spoken cue. Room remains (about 20 s) if the preview shows a walkthrough needs a slower pace; do not add a fourth question (Open decisions). Reserve trims if the voiced take runs over 9.5 minutes: (1) 2d's sense-check clause (about 4 s; the grey tag carries it); (2) 4c's "A tablet is weighed directly, so there's no density here." (about 4 s; the greyed thumbnail carries it, but the decision board then carries the contrast alone). Do not cut below 5,500 without replacing the content.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-standard, q1-titres, q1-naoh, q1-mistake, q2-question, q2-aliquot, q2-scale-up, q2-percent, q2-mistake, q3-question, q3-ratio, q3-percent, q3-mistake, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question. key-notes is the quiet notes hold (about 60 s). Lesson key `m6g03c` (route chem-m6-g03). Suggested explainer folder `src/explainer/lessons/chem-m6-g03`. Review evidence paths `checks/m6g03c-learning-review.md` and `checks/m6g03c-claude-science-check.md` (to be written).

## Assets

Have (reuse; inspected 21 Oct on the dark board): `public/assets/chemistry/m6-antacid-tablets-v1.png` (two whole white tablets and one broken one; Q3 card), `m6-indicator-methyl-orange-set-v1.png` (decision board "Next" chip), `m6-volumetric-flask-v1.png` (optional small thumbnail beside the coded scale-up flask). Considered and declined: `m6-household-cleaner-bottle-v1.png` (a blue spray-bottle glass cleaner, not a hydrochloric acid brick cleaner), `m6-baking-soda-box-v1.png` (baking soda, not an antacid tablet).

Need: **no new plates.**

Coded: question cards, answer boxes, check strip and decision board, equation strips, the titre table and concordance strip, the mole bridge with its scale-up box, the scale-up flask bands, the mass box, mini proton chain, crossed chips, countdown ring. No people or hands.

## Codex asset brief

No artwork requested. Start only after the learning review and science check pass and the owner gives the go-ahead. Also requested (not art): (1) error-only re-check of every value under "Numbers to verify"; (2) confirm the reference facts listed there (HCl density at about 11%, typical brick cleaner strength, oxalic acid Ka2) against a data source; (3) confirm that no question closely paraphrases a NESA HSC question (search recent papers for these exact data sets); (4) confirm no em dash in this file.

## YouTube metadata (draft)

- **Title:** Titration Calculations: Standardisation, Aliquots and % by Mass: HSC-Style Practice | Year 12 Chemistry Module 6
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module6/lesson14

  Practise three HSC-style titration questions that chain several steps. Make an oxalic acid dihydrate standard (with the water of crystallisation in the molar mass), turn burette readings into concordant titres, and standardise sodium hydroxide. Then use it on a diluted brick cleaner, scale up from the aliquot, and find a percentage by mass through the density. Finally, write the equation for an antacid tablet's sodium hydrogen carbonate and find its percentage by mass. Pause and try each question, then work through it step by step. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 6, Acid/Base Reactions. Inquiry question: "How are solutions of acids and bases analysed?"
  Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 6):
  "conduct practical investigations to analyse the concentration of an unknown acid or base by titration"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisites: How does direct titration reveal an unknown concentration? Determine an unknown concentration by titration (practical). Next: Which indicator fits a titration?

  #Year12Chemistry #Titration #HSCScience"
- **syllabusDotpoints:** the quoted dotpoint above. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C6-IQ3-01, p 53).
- **Lesson link:** site lesson 14; root to confirm.
- **Playlist:** Year 12 Chemistry: Module 6, Acid/Base Reactions (2017 syllabus), after P06 (playlist order 20).

## Open decisions

- **Three questions, not four (recommended keep).** Each question is a four- to six-link chain; a fourth would push the video past 9.5 minutes or rush the walkthroughs. A reserve fourth item, if the owner wants one in a later practice video: the reverse design question (what mass of primary standard gives a titre near 20 mL).
- **Q2 linked to Q1's answer (recommended keep, restated on the card).** A student who got Q1 wrong can still do Q2 from the stated 0.1046 mol/L.
- **Lesson key** (`m6g03c`, as assigned) and the **lesson link**: root to confirm.
- **Length.** See "Narration length estimate".

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 30 s per scene, three or four scenes per question; this is the content, not end-of-video feedback (AGENTS.md exception). The reviewer should check that no walkthrough re-teaches a C12 or P06 method (each rule is recalled in one clause; grey tags name the source where shown).
- **No repeated examples.** Checked against C12 and P06 (Decisions table).
- **Originality.** All three data sets were written for this video. Oxalic acid standardisation and antacid analysis are common textbook exercises, so the reviewer and Codex should check that the card wording does not closely follow a NESA paper.
- **Pronunciation.** "oxalic" as "ox-AL-ik"; "dihydrate" as "die-HIGH-drate"; "aliquot" as "AL-i-kwot"; "titre" as "TY-ter"; "phenolphthalein" as "fee-nol-THAY-leen"; "zero point zero five zero two zero" digit by digit; "twelve and a half"; formulas never spoken.
- **Doubts.** (a) Q1's concordant set spans exactly 0.10 mL, relying on the inclusive convention C12 taught (C12's attempt 1 did the same). (b) Q2's 11.1% has three significant figures from the density while (a) has four; the narration says why. (c) Q3's "other ingredients dissolve but do not react with acid" is a necessary condition kept in learner copy, because without it the percentage would be wrong. Revision 2 adds the parallel condition to Q2's card (hydrochloric acid is the only substance in the cleaner that reacts with sodium hydroxide).
- **No em dashes** in this file (searched).
