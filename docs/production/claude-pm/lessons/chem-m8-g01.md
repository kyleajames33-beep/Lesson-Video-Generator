# G01 (Chemistry, Module 8): Precipitation titration and gravimetry: HSC-style practice (design)

Status: Revision 1 (30 Oct): needs learning review and science check (Codex).

Narration 5,708 characters, 15 scenes, about 9.1 minutes (547 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Working title: "Precipitation titration and gravimetry: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception, owner 16 Oct). Each question is shown as an exam would word it (stem, data, demands); it ends "Pause here to answer." with a 10 s countdown and keeps the full question on screen during the attempt; the walkthrough underlines each given in the question text at the cue where it is used (owner rule, 18 Oct: no givens card); it reasons one stage per scene and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `chem-m8-g01` (playlist order 5, after chem-m8-p02, before chem-m8-c03a). Production label G01 (Chemistry, Module 8). Lesson key `m8g01`.

Scope: follows the format of `chem-m7-g03.md` (Revision 2: question card, type badge hidden during the attempt, check strip, one kept item per scene, decision board, one crossed mistake per question) and the calculation staging of `chem-m8-c01.md` and `chem-m8-c02.md` (Revision 2: calculation board, titre table, crossed chips). In a practice video the question card replaces the givens card: the data are underlined in the question text as they are used. Recalled, not re-taught: chem-m8-c01 (the Mohr method, Ag⁺ + Cl⁻ → AgCl 1 : 1, the chromate endpoint and its 2 : 1 being the indicator's, concordant titres, n = cV, divide by the aliquot, × 35.45 for g/L); chem-m8-c02 (mass → moles → ratio → target; extra mass reads high, lost solid reads low; constant mass; repeats do not remove a bias); chem-m8-p02 (percentage recovery against a known value; validity, reliability and accuracy in a gravimetric investigation); chem-m6-c12 (rinse the burette with the solution it will hold; dilution with a volumetric flask). Pre-design packs: `../pre-design/chem-m8-precipitation-titration.md` and `../pre-design/chem-m8-gravimetric-analysis.md`. Site extracts: `../site-extracts/chem-m8-l01.md` and `../site-extracts/chem-m8-l02.md`; site lessons 1 and 2 (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module8/lesson01.sa.html`, `lesson02.sa.html`) read for their Mohr card, worked examples, MC sets, Activities and Short Answer questions (30 Oct, read-only), so that no G01 question repeats them.

Syllabus dotpoint (as printed; NSW Chemistry Stage 6, 2017, p58; `C8-IQ1-03` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"conduct investigations and/or process data involving:
- gravimetric analysis
- precipitation titrations"

Practice and transfer only: first coverage stays with chem-m8-c01 (precipitation titrations), chem-m8-c02 and chem-m8-p02 (gravimetric analysis); G01 adds practice rows for processing data.

**Boundary:** starts at the route's "Interpret method and data for each quantitative analysis" and stops at its "Choose correct mole ratios and evaluate an error". Three questions, each with one trap: (1) a Mohr titration of diluted seawater: drop the rough titre, take the 1 : 1 ratio from the precipitate's equation, then scale back through the dilution to the original sample (trap: reporting the diluted solution's concentration); (2) a gravimetric purity check of aluminium sulfate: exclude a result for its stated cause, not its size, then use a 1 : 3 formula ratio (trap: using 1 : 1, which gives an impossible 287%); (3) the same known chloride solution measured by both methods, each with a stated fault: explain the direction of each error, then evaluate a claim that the mean of the two results shows accuracy (trap: trusting an average of two biased results). **Not here:** Mohr's indicator chemistry, the pH window and the blank (c01, recalled only where needed); the method steps and their reasons (c02, p02); acid-base titration (Module 6); back titration; ignition in a crucible.

## Decisions

- **Route entry.** `../../module8-video-route-draft.json`: chem-m8-g01, "Precipitation titration and gravimetry practice", type practice, site lessons L01 and L02, syllabus action C8-IQ1-03, prerequisites chem-m8-p01 and chem-m8-p02, playlist order 5, entry knowledge "Recall chem-m8-p01, chem-m8-p02", next chem-m8-c03, placement "Practice companion". `../../module8-route-review-claude.md` change 5 cuts p01 (c01 processes titration data and "g01 practises it") and change 1 splits c03 into c03a and c03b. **Decision:** prerequisites become chem-m8-c01, chem-m8-c02 and chem-m8-p02; next becomes chem-m8-c03a. Root to update the JSON (Open decisions).
- **One main question:** *An exam gives you titres or precipitate masses, a method with something wrong in it, and a mole ratio waiting to trip you up. How do you decide which results to use, which ratio applies, how far to scale back, and which way an error pushes the answer?* Heading on screen: "Titration and gravimetry practice: right data, right ratio, right direction".
- **Why a practice video, and why these three questions.** c01, c02 and p02 each had one or two attempts on a single idea. Students lose these questions in four places the attempts touched only once: a dilution step between the sample and the aliquot; a formula ratio that is not 1 : 1; excluding a result for a reason rather than for looking different; and explaining error direction in two methods at once. The route's stop line ("choose correct mole ratios and evaluate an error") is Q2 and Q3.

  | Q | Case (new) | Chain | Trap (crossed) | Check | Core |
  |---|---|---|---|---|---|
  | 1 | seawater, 10.00 mL diluted to 250.0 mL, 25.00 mL aliquots, 0.0500 mol/L AgNO₃ | drop the rough titre → concordant mean 10.90 mL → 1 : 1 from AgCl → n(Ag⁺) → ×10 for the flask → ÷ 0.01000 L → × 35.45 | 0.0218 mol/L (the diluted solution) | about 19 g/L, typical seawater (c01) | c01, chem-m6-c12 |
  | 2 | aluminium sulfate purity, three 0.400 g portions, one weighed after one drying | exclude trial 3 for its stated cause → mean 0.783 g → n(BaSO₄) → ÷ 3 → mass → % | 1 : 1 gives 287% | a purity over 100% is impossible | c02, p02 |
  | 3 | a prepared 0.0620 mol/L NaCl solution by Mohr (burette rinsed with water only) and by gravimetry (torn filter paper) | diluted titrant → larger titre → too high; lost AgCl → too low; the mean's agreement is a coincidence | "the mean is close, so the analysis was accurate" | each error's direction from extra or lost volume or mass | c01, c02, p02, s07 |

- **Rising difficulty.** Q1 is one calculation with two data decisions. Q2 adds a justification and a non-1 : 1 ratio. Q3 is a written evaluation across both methods, with no new calculation.
- **Site alignment.** Site L01's Mohr worked example (25.00 mL, 18.50 mL of 0.1000 mol/L, 0.0740 mol/L) and its MC (20.00 mL, 16.00 mL of 0.0500 mol/L) are not reused; their distractors (dividing by the titre, the 2 : 1 ratio) are recalled in Q1's ratio stage. Site L02 Activity A1 (0.348, 0.351, 0.392 g with a damp third trial) is the idea behind Q2's outlier, written with new numbers, a new compound and a non-1 : 1 ratio; its answer pattern ("exclude Trial 3 because the note states the precipitate was still slightly damp") is the model for Q2 (a). Site L02's error table ("always state the direction") is Q3's answer pattern. c02's Open decision ("damp-trial data: recommended g01") is met this way.
- **Entry knowledge (do not re-teach; recall in one clause each).** From c01: Ag⁺ + Cl⁻ → AgCl, 1 : 1; the chromate's 2 : 1 is the indicator's reaction; drop the rough titre; concordant titres within 0.10 mL; n = cV; divide by the aliquot; × 35.45 for g/L; seawater roughly 19 g/L chloride. From chem-m6-c12: rinse the burette with the solution it will hold; a volumetric flask makes a known dilution. From c02: mass → moles → ratio → target; extra mass reads high, lost solid reads low; constant mass; repeats keep a bias. From p02: a known value lets you judge accuracy; recovery. From skills-s07: accuracy is closeness to the true value; a systematic error pushes every trial the same way.
- **Learner-visible vocabulary (callbacks only).** Aliquot (c01, chem-m6-c12; a measured portion of the solution); dilution factor (screen tag only: how many times the solution was diluted); systematic error (s07, c02). No new terms.
- **Start and stop.** Starts at an unseen titration data set with a dilution; stops after three walkthroughs and a decision board: leave out rough and faulty results and say why; take the ratio from the precipitate's equation or formula, not the indicator; track every dilution back to the original sample; for each error, ask whether it adds or loses volume or mass, then state which way the answer moves; never trust an average of results you know are biased.
- **Placement and handoff.** After chem-m8-p02 (the previous video in the playlist). Scene 5 hands off: "Next, identifying ions: which tests tell you which cation is there?" (route chem-m8-c03a).
- **Visual system.** One practice board throughout, in the G03 layout: top-left the **question card** (stem, data and demands as an exam prints them, with the tag "HSC-style question, written for HSCScience"), kept readable through each question; the working fills the right two thirds; a **type badge** top-right ("Titration with a dilution", "Gravimetric ratio", "Evaluate the errors"), hidden during each attempt because it names the method. When the walkthrough starts, the card shrinks to a strip and each given is **underlined in amber in the question text** at the cue where it is used. A **check strip** on the far left carries four rows, "which results to use?", "ratio from the precipitate?", "every dilution tracked?", "error: extra or lost, which way?", and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Colour key from c01 and c02: silver pale grey, chloride green, sulfate yellow-green, precipitate white; givens and units navy; the current answer bright; earlier lines dim; amber only for underlined givens. **Clutter rule (owner):** besides the question strip and the check strip, at most about three bright text items in the working area at once; completed lines dim while the current line writes.
- **New coded items (lesson-local, suggested folder `src/explainer/lessons/chem-m8-g01`):** a **dilution ladder** (three stacked vessel outlines, coded, not plates: "seawater 10.00 mL" → "flask 250.0 mL" → "aliquot 25.00 mL", with the moles written beside each rung and "×10" and "÷0.01000 L" arrows climbing back up; Q1); a **formula unit counter** (one coded Al₂(SO₄)₃ unit with its three sulfate groups lighting one at a time, each pairing with a Ba²⁺ dot and becoming a white tile; Q2); a **two-arrow error board** (two columns, "Method 1: titration" and "Method 2: gravimetric", each with a cause chain and a vertical arrow against a dashed "known 0.0620" line; Q3). Imported, not copied: G03's question card, check strip, `PauseHold`, `AnsBox` and `Checks` (with a `labels` prop); c01's titre table and calculation board; c02's two-way error board; p02's recovery gauge (Q3 b, small); B6a's `WrongChip` and `Cross`.
- **Real objects.** The question cards are paper tasks; each card carries one small painted plate as context, never answer-bearing: Q1 `m8-mohr-flask-endpoint-v1.png` (the first lasting red-brown, as c01); Q2 `m8-balance-watch-glass-v1.png`; Q3 `m6-burette-clamp-stand-v1.png` and `m8-filter-funnel-white-ppt-v1.png` side by side, small. During Q3's walkthrough the new p02 plate `m8-filter-funnel-cloudy-filtrate-v1.png` shows the lost solid (if delivered; otherwise a coded tear mark on the existing funnel plate). No people or hands.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own spoken, crossed-out classic mistake. One crossed chip per question.
- **Memory aids (checked below).** Recalled, not re-taught: "Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's)" (c01); "mass → moles → ratio → target" and "Too wet reads high; lost reads low" (c02, bank). New spoken line, Q2 and the decision board: "Over 100%? Check the ratio first." (a checking habit, author-written, not a bank aid).
- **Author notes (not learner copy):** (a) Q1: seawater chloride about 19.4 g/kg (salinity 35), about 19.9 g/L at density 1.025 (c01 author note b); the question's 19.3 g/L is a plausible coastal sample, and "matches typical seawater" is a sense check, not a claim of identity. Seawater's pH (about 8.1) is inside the Mohr window (c01), so no pH step is needed; bromide in seawater (about 0.07 g/kg) is counted as chloride (c01) and is below the answer's precision. (b) Q2: the formula Al₂(SO₄)₃ is the anhydrous salt; commercial "alum" for water treatment is often a hydrate (for example Al₂(SO₄)₃·14H₂O); the card names the anhydrous formula and molar mass, so the answer is "percentage of Al₂(SO₄)₃". Aluminium sulfate is used as a coagulant in water treatment (c05 links monitoring to treatment; no treatment teaching here). (c) Q2 trial 3: "weighed after one drying only" is the stated cause; its mass is also high, but the narration says the size alone is not the reason. (d) Q3: a burette rinsed with water and not with titrant holds a small volume of water that dilutes the first fill; the titre is high by roughly the dilution fraction (about 1 to 3% for a typical film; 0.0635 is 2.4% high). The torn paper loss (0.0607, 2.1% low) is an illustrative size. The two results are built so that their mean, 0.0621, is close to 0.0620. (e) Q3 uses a prepared sodium chloride solution as the known value (p02's "known sample" idea in solution form); its pH is near neutral, inside the Mohr window. (f) Pronunciation: "Mohr" as "more"; "aliquot" as "AL-ih-kwot"; "Al two S O four three" is said "aluminium sulfate".

Main question: *An exam gives you titres or precipitate masses, a method with something wrong in it, and a mole ratio waiting to trip you up. How do you decide which results to use, which ratio applies, how far to scale back, and which way an error pushes the answer?*
Entry knowledge: see above. Students start Year 12 and have watched chem-m8-c01, c02 and p02 in playlist order.
Stops after: choosing concordant titres and the 1 : 1 Ag⁺ : Cl⁻ ratio; scaling an aliquot back through a dilution to the original sample in mol/L and g/L; excluding a gravimetric result for its stated cause; using a 1 : 3 formula ratio to find a percentage purity; explaining the direction of a titrant-dilution error and a lost-precipitate error; evaluating a claim built on the mean of two biased results.
Handoff: identifying cations (route chem-m8-c03a, "How do flame, precipitate and complex tests identify a cation?").

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Pronunciations as author note (f).

### 1. hook
> Two ways to count ions you can't see: a titration that counts the silver it takes, and a precipitate you can weigh. Exam questions on both test the same few moves. Use the right data, choose the right mole **ratio**, keep track of any **dilution**, and say which way an error pushes the **answer**. Here are three HSC-style questions. Pause and try each one, then we'll work through it together.

Visual: heading "Titration and gravimetry practice: right data, right ratio, right direction" writes on. Two small plates write side by side at the right, the same height: `m8-mohr-flask-endpoint-v1.png` (grey tag "c01: titration") and `m8-balance-watch-glass-v1.png` (grey tag "c02: weighing"). On "ratio" a grey chip "1 : 1? 1 : 3?" writes between them (no numbers, nothing answer-bearing). On "dilution" a small coded flask-to-aliquot arrow writes under the titration plate. On "answer" an up and a down arrow write under the balance plate. The check strip builds on the left: "which results to use?", "ratio from the precipitate?", "every dilution tracked?", "error: extra or lost, which way?". The plates become three numbered question cards with one shared tag line, "HSC-style questions, written for HSCScience". Hold about 1 second; the check strip shrinks to the far left.

### 2a. q1-question (question 1: titration with a dilution)
> Question one. A ten millilitre sample of seawater is diluted to two hundred and fifty millilitres. Twenty five millilitre aliquots are titrated with silver nitrate, using chromate indicator. The titres are on screen. Calculate the chloride concentration in the seawater, in grams per litre. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A 10.00 mL sample of seawater was diluted to 250.0 mL in a volumetric flask. 25.00 mL aliquots of the diluted solution were titrated with 0.0500 mol L⁻¹ silver nitrate solution, using potassium chromate as the indicator." A titre table: "Titre (mL): 11.20 (rough), 10.85, 10.95, 10.90". Demand: "Calculate the concentration of chloride ions in the seawater, in g L⁻¹. M(Cl) = 35.45 g mol⁻¹". One answer box. `m8-mohr-flask-endpoint-v1.png` small at the card's right (no tags). Nothing answer-bearing. **Countdown ring 10 seconds** after "Pause here to answer."; the check strip dims; the whole card stays on screen.

### 2b. q1-data-ratio (which titres, which ratio)
> Start with the data. The rough titre is only a guide, so leave it **out**. The other three agree within a tenth of a millilitre, so they're concordant, and their mean is ten point nine zero **millilitres**. Now the ratio. Silver and chloride form silver chloride, one to one. The chromate only signals the end, so its two to one ratio isn't the one you **want**.

Visual: the card shrinks to a strip. Type badge "Titration with a dilution". On "out" "11.20 (rough)" underlines and greys with a strike (grey chip "c01: the rough titre is a guide"). The three titres underline; a bracket spans them, "within 0.10 mL: concordant" (grey chip "c12"). On "millilitres" a line writes: "mean = (10.85 + 10.95 + 10.90) ÷ 3 = 10.90 mL" (bright). Strip: "which results to use?" ticks. On "one to one" the equation strip writes "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" with "1 : 1" glowing. On "want" a small grey second equation "2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄ (indicator)" writes beneath, its "2 : 1" tagged "the indicator's, not the analyte's" (grey chip "c01"). Strip: "ratio from the precipitate?" ticks. Bright at the end: the mean and the 1 : 1 equation.

### 2c. q1-calc (moles, then back through the dilution)
> Moles of silver: point zero five zero zero times point zero one zero nine zero litres, five point four five times ten to the minus four **moles**. That's the chloride in one twenty five millilitre aliquot. The flask held two hundred and fifty millilitres, ten times as much, so it held five point four five times ten to the minus three moles. All of that came from the ten millilitres of **seawater**. Divide by point zero one zero zero litres: point five four five moles per litre. Times thirty five point four five, about nineteen point three grams per **litre**. That's close to typical seawater, a good sense check.

Visual: the data lines dim; the mean and the equation stay. The dilution ladder draws at the right: three coded vessel outlines stacked, "aliquot 25.00 mL" at the bottom, "flask 250.0 mL" in the middle, "seawater 10.00 mL" at the top. Line 1: "n(Ag⁺) = 0.0500 × 0.01090"; on "moles" "= 5.45 × 10⁻⁴ mol" (bright; "0.0500 mol L⁻¹" underlines), and "= n(Cl⁻) in 25.00 mL" writes beside the aliquot rung. On "ten times as much" "25.00 mL aliquots" and "250.0 mL" underline; an arrow climbs to the flask rung "×10 (250.0 ÷ 25.00)" and writes "5.45 × 10⁻³ mol". On "seawater" "10.00 mL sample of seawater" underlines and an arrow climbs to the top rung (tag "same moles: all of it came from here"). Line 2: "c(Cl⁻) = 5.45 × 10⁻³ ÷ 0.01000 = 0.545 mol/L". On "litre" line 3: "× 35.45 = 19.3 g/L" (bright; "M(Cl) = 35.45" underlines). A grey chip "c01: seawater roughly 19 g/L" writes beside it. Strip: "every dilution tracked?" ticks. Bright at the end: the ladder and 19.3 g/L.

### 2d. q1-mistake (the classic mistake)
> The classic slip is stopping at the aliquot. Divide the moles by twenty five millilitres, and you get point zero two one eight moles per litre. That's the diluted solution, not the seawater. Ask which liquid the question is about, then scale back up through the **dilution**.

Visual: a chip "5.45 × 10⁻⁴ ÷ 0.02500 = 0.0218 mol/L" fades in beside the aliquot rung; on "dilution" it takes a red scribble cross (caption "that's the flask's solution: ×25 back to the seawater"), and the ladder's arrows pulse once from bottom to top.

### 3a. q2-question (question 2: a gravimetric ratio)
> Question two. Water treatment plants use aluminium sulfate. To check a sample's purity, three portions, each point four zero zero grams, are analysed by precipitating barium sulfate. The masses are on screen, and the third was weighed after only one drying. Justify which result to exclude, then calculate the percentage of aluminium sulfate in the sample. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "Aluminium sulfate, Al₂(SO₄)₃, is used in water treatment. To check the purity of a sample, three 0.400 g portions were each dissolved, acidified and treated with excess barium chloride solution. The barium sulfate was filtered, washed, dried and weighed." A results table: "Trial 1: 0.781 g, dried to constant mass"; "Trial 2: 0.785 g, dried to constant mass"; "Trial 3: 0.842 g, weighed after one drying only". Demands: "(a) Justify which result should be excluded." "(b) Calculate the percentage by mass of Al₂(SO₄)₃ in the sample. M(BaSO₄) = 233.39 g mol⁻¹; M(Al₂(SO₄)₃) = 342.14 g mol⁻¹". Two answer boxes. `m8-balance-watch-glass-v1.png` small at the card's right (no readout). Nothing answer-bearing. **Countdown ring 10 seconds**; check strip dims; card stays on screen.

### 3b. q2-outlier (exclude it for a reason)
> Part a. Trial three is the highest, but being different isn't a reason on its own. The reason is in the method: it was weighed after only one drying, so it probably still held **water**. Extra water means extra mass, so it reads too **high**. Trials one and two were dried to constant mass, and they agree, so their mean, point seven eight three grams, is the value to **use**.

Visual: the card shrinks to a strip. Type badge "Gravimetric ratio". "0.842 g" underlines; a grey chip "different ≠ a reason" writes and dims. On "water" "weighed after one drying only" underlines amber and a small chip writes "not at constant mass: water still there" (grey chip "c02: constant mass"). On "high" a chip "extra mass → reads high" (grey chip "c02: too wet reads high") and trial 3's row greys with a strike. On "use" "dried to constant mass" underlines twice; line "mean = (0.781 + 0.785) ÷ 2 = 0.783 g" (bright). Answer box (a) writes: "Exclude trial 3: it was not dried to constant mass, so retained water made its mass too high. Trials 1 and 2 were at constant mass and agree." Strip: "which results to use?" ticks. Bright at the end: answer (a) and 0.783 g.

### 3c. q2-ratio-calc (three sulfates per formula unit)
> Part b. Moles of barium sulfate: point seven eight three over two hundred and thirty three point three nine, three point three five times ten to the minus three **moles**. Now the ratio. Each aluminium sulfate holds **three** sulfate ions, so it makes three barium sulfates. Divide by three: one point one two times ten to the minus three moles of aluminium sulfate. Times three hundred and forty two point one four, that's point three eight three grams. Out of point four zero zero grams, about ninety six **percent**. That's under a hundred, which makes sense for a purity.

Visual: answer (a) dims. Line 1: "n(BaSO₄) = 0.783 ÷ 233.39"; on "moles" "= 3.355 × 10⁻³ mol" (bright; "M(BaSO₄)" underlines). On "three" the formula unit counter draws: one coded Al₂(SO₄)₃ unit, its three SO₄ groups lighting one at a time, each pairing with a pale violet Ba²⁺ dot and dropping as a white tile; tag "1 Al₂(SO₄)₃ → 3 BaSO₄". Line 2: "n(Al₂(SO₄)₃) = 3.355 × 10⁻³ ÷ 3 = 1.118 × 10⁻³ mol". Line 3: "m = 1.118 × 10⁻³ × 342.14 = 0.3826 g" (grey tag "guard digit kept") ("M(Al₂(SO₄)₃)" underlines). On "percent" line 4: "% = 0.3826 ÷ 0.400 × 100 = 95.7%" (bright; "0.400 g" underlines), with a grey tag "about 96%: under 100%, as a purity should be". A grey chip "c02: mass → moles → ratio → target" sits beside the lines. Strip: "ratio from the precipitate?" ticks. Bright at the end: the counter tag and 95.7%.

### 3d. q2-mistake (the classic mistake)
> The classic slip is using one to one. That gives about two hundred and eighty seven percent, which is impossible for a purity. When a percentage comes out over a hundred, check your **ratio** first.

Visual: a chip "3.355 × 10⁻³ × 342.14 ÷ 0.400 × 100 = 287%" fades in; on "ratio" it takes a red scribble cross (caption "three sulfates per formula unit: divide by 3"). A handwritten line writes under the board: "Over 100%? Check the ratio first."

### 4a. q3-question (question 3: evaluate the errors)
> Question three. A teacher makes up a sodium chloride solution of known concentration, point zero six two zero moles per litre. A student measures it twice. A Mohr titration, with the burette rinsed only with distilled water, gives point zero six three five. A gravimetric analysis, where some silver chloride went through a small tear in the filter paper, gives point zero six zero seven. Explain why each result differs from the known value. Then evaluate the claim that their mean shows the analysis was accurate. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A teacher prepared a sodium chloride solution with a chloride concentration of 0.0620 mol L⁻¹. A student analysed it by two methods. Method 1, Mohr titration: the burette was rinsed with distilled water, but not with the silver nitrate solution, before it was filled. Result: 0.0635 mol L⁻¹. Method 2, gravimetric analysis as AgCl: some precipitate passed through a small tear in the filter paper. Result: 0.0607 mol L⁻¹." Demands: "(a) Explain why each result differs from the known value." "(b) The student claims that the mean of the two results, 0.0621 mol L⁻¹, shows that the analysis was accurate. Evaluate this claim." Two answer boxes. `m6-burette-clamp-stand-v1.png` and `m8-filter-funnel-white-ppt-v1.png` small at the card's right, the same height (no tags). Nothing answer-bearing. **Countdown ring 10 seconds**; check strip dims; card and plates stay on screen.

### 4b. q3-titration (a diluted titrant reads high)
> Method one. Water left in the burette dilutes the silver nitrate, so each millilitre carries less silver than the label says. You need a bigger **titre** to reach the endpoint. But the calculation still uses the label's concentration, so it counts more silver, and more chloride, than was really there. That's why the result is too **high**. Rinsing with the silver nitrate itself fixes it, because any liquid left behind is then the same solution.

Visual: the card shrinks to a strip. Type badge "Evaluate the errors". The two-arrow error board draws with a dashed navy line "known 0.0620". "rinsed with distilled water, but not with the silver nitrate solution" underlines; the burette thumbnail shows a coded film of water at its tip mixing into the silver nitrate (grey chip "c12: rinse with the solution it will hold"). On "titre" Method 1's cause chain writes one link at a time: "titrant diluted → titre ↑". Then "calculation uses the label's c → n(Ag⁺) ↑ → n(Cl⁻) ↑". On "high" Method 1's arrow rises above the dashed line to "0.0635" ("0.0635" underlines). Answer box (a) line 1: "Method 1: water dilutes the AgNO₃, so a larger titre is needed; using the labelled concentration overstates the moles of Ag⁺ and Cl⁻, so the result is too high." On "Rinsing with the silver nitrate" a small green fix chip writes under Method 1's arrow: "fix: rinse with the AgNO₃ solution". Strip: "error: extra or lost, which way?" ticks. Bright at the end: Method 1's arrow and answer line 1.

### 4c. q3-gravimetric (lost precipitate reads low)
> Method two. Silver chloride that slips through the tear never reaches the balance. Less mass means fewer moles of silver chloride, so less chloride. That result is too **low**. Each fault would push the result the same way every time you repeated it, so both are **systematic**.

Visual: Method 1's chain dims; its arrow stays. "some precipitate passed through a small tear" underlines; the funnel thumbnail cross-fades to `m8-filter-funnel-cloudy-filtrate-v1.png` with a coded tear mark on the paper (tag "AgCl lost in the filtrate"; grey chip "p02: look at the filtrate"). Method 2's chain writes: "AgCl lost → mass ↓ → n(Cl⁻) ↓" (grey chip "c02: lost reads low"). On "low" Method 2's arrow drops below the dashed line to "0.0607". Answer box (a) line 2: "Method 2: AgCl passed through the tear, so the mass was too low, and the chloride too low." On "systematic" a small chip under both arrows: "same direction every repeat: systematic" (grey chip "s07"). Bright at the end: the two arrows either side of the dashed line and answer line 2.

### 4d. q3-claim (the mean is luck, not accuracy)
> Part b. The mean lands near the known value only because one error pushed up and the other pushed down by a similar amount. That's luck, not accuracy. Neither method was accurate, and with a slightly bigger tear, the mean would **miss**. The fixes remove each cause: rinse the burette with the silver nitrate solution, and filter through an undamaged paper. So the claim isn't supported. To check accuracy properly, run each fixed method on a known solution like this one. The trap is trusting the **average**. Averaging can't cancel errors you know are there.

Visual: answer (a) dims. "the mean of the two results, 0.0621" underlines; a small mean marker writes at 0.0621, just above the dashed line, joined to both arrows by thin grey brackets (tag "up 0.0015, down 0.0013"). On "miss" Method 2's arrow lengthens downwards by a coded nudge ("bigger tear") and the mean marker slides below the line (tag "the mean moves with the errors"). Answer box (b) writes in three short lines: "The mean's agreement is a coincidence: the errors are in opposite directions and similar in size." / "Neither result is accurate; each method has a systematic error." / "Not supported: fix each cause (rinse the burette with AgNO₃; use an undamaged filter paper), then check each method on a known solution." On "known solution" p02's recovery gauge appears small beside the dashed line (grey chip "p02: test the method on a known sample"). On "average" a chip "mean ≈ 0.0620, so the analysis was accurate" fades in and takes a red scribble cross (caption "two biased results don't make an accurate one"). Bright at the end: answer (b) and the cross.

### 5. decision-board
> So for any precipitation titration or gravimetric question. Leave out rough and faulty **results**, and say why. Take the ratio from the precipitate's equation or formula, not from the indicator. Track every **dilution** back to the original sample. And for each error, ask whether it adds or loses volume or mass, then say which way the answer **moves**. Next, identifying ions: which tests tell you which cation is there?

Visual: the check strip returns full size as a two-column board, "Check" and "What you do", each row lighting on its cue with its question number badge: on "results" "Which results to use → drop the rough titre; exclude a result for its stated cause, not its size (Q1, Q2)"; "Ratio from the precipitate → Ag⁺ : Cl⁻ 1 : 1; 1 Al₂(SO₄)₃ : 3 BaSO₄; over 100% means check the ratio (Q1, Q2)"; on "dilution" "Every dilution tracked → aliquot → flask → original sample (Q1)"; on "moves" "Extra or lost, which way → diluted titrant: high; lost solid: low; never trust a mean of biased results (Q3)". Under the board, small, the c02 line: "mass → moles → ratio → target." On "Next" a chip "Next: how do flame, precipitate and complex tests identify a cation?" slides in at the lower right. Hold about 2 seconds.

### 6. key-notes (reuse take: key-notes; quiet, about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Titration data: drop the rough titre; average concordant titres (within 0.10 mL). Mohr: Ag⁺ + Cl⁻ → AgCl, 1 : 1 (the 2 : 1 belongs to the chromate indicator).
2. Dilution: moles in the aliquot × (flask volume ÷ aliquot volume) = moles from the original sample; then divide by the original sample's volume. Example: 5.45 × 10⁻⁴ mol × 10 ÷ 0.01000 L = 0.545 mol/L = 19.3 g/L.
3. Gravimetric data: exclude a result for its stated cause (for example, not dried to constant mass reads high), not just because it looks different.
4. Ratio from the formula: 1 Al₂(SO₄)₃ → 3 BaSO₄, so n(Al₂(SO₄)₃) = n(BaSO₄) ÷ 3. A purity over 100% means check the ratio.
5. Errors: diluted titrant → titre high → result high; lost precipitate → mass low → result low. A mean of two biased results is not evidence of accuracy.

Memory aid (large, on the notes screen): *mass → moles → ratio → target.* Second line: *Over 100%? Check the ratio first.*

## Teaching checks

- **Does it explain causes?** Why drop the rough titre: it is a guide, not a measurement (2b). Why 1 : 1: silver chloride's equation, not the indicator's (2b). Why ×10: the flask held ten aliquots (2c). Why divide by 10.00 mL: all those moles came from the original seawater (2c). Why exclude trial 3: its stated cause (not at constant mass) adds water and mass (3b). Why ÷ 3: each formula unit holds three sulfates (3c). Why 287% is wrong: a purity can't exceed 100% (3d). Why method 1 reads high: diluted titrant needs more volume, but the calculation uses the labelled concentration (4b). Why method 2 reads low: lost solid never reaches the balance (4c). Why the mean is not evidence: the errors are in opposite directions and only happen to cancel (4d).
- **Worked-example rule.** One reasoning stage per scene; the question strip stays readable and each given is underlined at the cue where it is used; earlier questions are cleared; one kept item carries into the next scene (Q1's mean and equation; Q2's 0.783 g; Q3's two arrows).
- **Response opportunities.** Three, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a): Q1's dilution volumes, the titrant concentration, all four titres and M(Cl); Q2's three masses with their drying notes and both molar masses; Q3's known value, both faults and both results, and the mean. Nothing answer-bearing during the holds; the check strip dims.
- **Reading load.** Q3's card is the densest (two methods, two faults, two results, the claim) and is the task itself. In the working area, at most about three bright text items at once.
- **Term load.** No new terms. "Dilution factor" is a screen tag only.
- **Necessary conditions kept in learner copy.** Q1's "diluted to 250.0 mL in a volumetric flask" and "25.00 mL aliquots"; Q2's "dried to constant mass" against "after one drying only" and "excess barium chloride"; Q3's "known" concentration (otherwise accuracy cannot be judged) and "not with the silver nitrate solution".
- **Out of scope by design.** Mohr indicator chemistry and the pH window; the blank; back titration; ignition; co-precipitation.

## Practice questions and model answers

1. (Q1.) A 10.00 mL sample of seawater was diluted to 250.0 mL in a volumetric flask. 25.00 mL aliquots were titrated with 0.0500 mol L⁻¹ AgNO₃ (potassium chromate indicator). Titres: 11.20 (rough), 10.85, 10.95, 10.90 mL. Calculate the chloride concentration in the seawater in g L⁻¹. M(Cl) = 35.45 g mol⁻¹.
   Model: Exclude the rough titre; the concordant titres (within 0.10 mL) give a mean of 10.90 mL. Ag⁺ + Cl⁻ → AgCl, 1 : 1. n(Ag⁺) = 0.0500 × 0.01090 = 5.45 × 10⁻⁴ mol = n(Cl⁻) in 25.00 mL. In 250.0 mL: 5.45 × 10⁻⁴ × (250.0 ÷ 25.00) = 5.45 × 10⁻³ mol, all from the 10.00 mL sample. c(Cl⁻) = 5.45 × 10⁻³ ÷ 0.01000 = 0.545 mol L⁻¹; × 35.45 = 19.3 g L⁻¹. Crossed mistake: 0.0218 mol L⁻¹ (the diluted solution).
2. (Q2.) Three 0.400 g portions of aluminium sulfate, Al₂(SO₄)₃, gave BaSO₄ masses of 0.781 g and 0.785 g (dried to constant mass) and 0.842 g (weighed after one drying only). (a) Justify which result should be excluded. (b) Calculate the percentage by mass of Al₂(SO₄)₃. M(BaSO₄) = 233.39; M(Al₂(SO₄)₃) = 342.14 g mol⁻¹.
   Model: (a) Exclude trial 3. It was not dried to constant mass, so retained water made its mass too high; trials 1 and 2 were dried to constant mass and agree. (b) Mean 0.783 g; n(BaSO₄) = 0.783 ÷ 233.39 = 3.355 × 10⁻³ mol; each Al₂(SO₄)₃ gives 3 BaSO₄, so n(Al₂(SO₄)₃) = 1.118 × 10⁻³ mol; m = 1.118 × 10⁻³ × 342.14 = 0.3826 g; % = 0.3826 ÷ 0.400 × 100 = 95.7% (with a guard digit; 0.383 ÷ 0.400 would give 95.75%). Crossed mistake: using 1 : 1 (287%, impossible).
3. (Q3.) A 0.0620 mol L⁻¹ chloride solution, prepared by a teacher, was analysed by Mohr titration (burette rinsed with distilled water, not with AgNO₃: 0.0635 mol L⁻¹) and by gravimetric analysis as AgCl (some precipitate through a small tear in the filter paper: 0.0607 mol L⁻¹). (a) Explain why each result differs from the known value. (b) Evaluate the claim that the mean, 0.0621 mol L⁻¹, shows the analysis was accurate.
   Model: (a) Method 1: water in the burette dilutes the AgNO₃, so a larger titre is needed to reach the endpoint; the calculation uses the labelled concentration, overstating the moles of Ag⁺ and so of Cl⁻; the result is too high. Method 2: AgCl lost through the tear is not weighed, so the mass, the moles of AgCl and the chloride are too low. Both are systematic errors. (b) The claim is not supported. The mean is close to 0.0620 only because the two errors are in opposite directions and similar in size; neither method is accurate, and a different size of either error would move the mean. Accuracy needs each cause removed (rinse the burette with the AgNO₃ solution; filter through an undamaged paper, refiltering a cloudy filtrate), then repeat; a known solution like this one is the right way to check. Crossed mistake: "the mean is close to the known value, so the analysis was accurate".

## Near-match check (30 Oct)

- **Against the site (L01 and L02, searched in the extracted page text, 30 Oct):** L01's Mohr worked example (25.00 mL chloride, 18.50 mL of 0.1000 mol/L AgNO₃, 0.0740 mol/L, 2.62 g/L), its MC (20.00 mL water, 16.00 mL of 0.0500 mol/L, 0.0400 mol/L; distractors dividing by the titre and the 2 : 1 ratio) and its pH 3 MC. No dilution question. **Q1** adds a dilution, uses seawater and new numbers; it shares the 1 : 1 versus 2 : 1 idea with the MC distractor (recalled, not copied). L02's worked example (0.500 g, 0.350 g BaSO₄, 28.8%), Activity A1 (0.348, 0.351, 0.392 g; damp third trial), A2 and Short Answer Q1 to Q3. **Q2** shares A1's idea (exclude a result with a stated drying cause) but uses a new compound, new masses, a 1 : 3 ratio and a percentage purity; not a near match. **Q3** has no site counterpart (no two-method comparison or mean claim on L01 or L02).
- **Against c01, c02 and p02:** c01 A1 (bore water, 20.00 mL, 0.0250 mol/L, titres 14.62 to 14.70) and A2 (pickling wastewater at pH 3); c02 A1 (creek water, AgCl on paper, 0.707 g/L) and A2 (unwashed BaSO₄, repeats); p02 A1 (Na₂SO₄ recovery) and A2 (digestion and washing both changed). G01's cases, numbers and traps are new. Q3's "repeats and means don't remove a bias" is the same principle as c02 A2, practised here as an evaluation of a claim across two methods.
- **Against NESA papers:** the pack names NESA 2023 Q32 and 2025 Q23 as precipitation titration items (`../research/question-types-chem-m8.md`). The author could not re-read those papers in this session. Codex to confirm that no G01 question closely paraphrases them.

## Numbers to verify

Self-check (30 Oct), by script (Python); atomic masses as c01 and c02 (Al 26.98, Ba 137.33, S 32.06, O 16.00, Cl 35.45, Na 22.99).

- **Q1.** Concordant titres 10.85, 10.95, 10.90 (range 0.10 mL); mean 10.900 mL. n(Ag⁺) = 0.0500 × 0.010900 = 5.450 × 10⁻⁴ mol. ×(250.0 ÷ 25.00 = 10) = 5.450 × 10⁻³ mol. ÷ 0.01000 L = 0.5450 mol/L. × 35.45 = 19.320 g/L → 19.3 g/L. Crossed: 5.450 × 10⁻⁴ ÷ 0.02500 = 0.02180 mol/L; 0.545 ÷ 0.0218 = 25 (the overall dilution factor).
- **Q2.** M(Al₂(SO₄)₃) = 2(26.98) + 3(32.06 + 64.00) = 53.96 + 288.18 = 342.14 g/mol; M(BaSO₄) = 233.39. Mean (0.781 + 0.785) ÷ 2 = 0.7830 g. n(BaSO₄) = 0.7830 ÷ 233.39 = 3.3549 × 10⁻³ mol. ÷ 3 = 1.1183 × 10⁻³ mol. × 342.14 = 0.38262 g. ÷ 0.400 × 100 = 95.65% → 95.7% ("about ninety six"). Crossed (1 : 1): 3.3549 × 10⁻³ × 342.14 = 1.1478 g; ÷ 0.400 × 100 = 287.0%. Sense check: pure 0.400 g would give 0.400 ÷ 342.14 × 3 × 233.39 = 0.8186 g BaSO₄, so trials 1 and 2 (0.781, 0.785 g) are below it and trial 3 (0.842 g) is above it.
- **Q3.** Known 0.0620 mol/L; method 1 0.0635 (+0.0015, +2.4%); method 2 0.0607 (−0.0013, −2.1%); mean (0.0635 + 0.0607) ÷ 2 = 0.0621 mol/L.
- **Reference facts to confirm (Codex):** seawater chloride about 19.4 g/kg (c01 author note b); a burette not rinsed with titrant gives a high titre and a high analyte result; lost precipitate gives a low result; aluminium sulfate is used as a coagulant in drinking water treatment.
- **No em dashes** in this file (to be confirmed by script).

## Memory aid check

- **"mass → moles → ratio → target."** (c02; Module 8 bank, *Shortcut*.) Holds for Q2: the ratio is the formula ratio (1 Al₂(SO₄)₃ : 3 BaSO₄), which the bank's own example (one BaSO₄ contains one SO₄²⁻) does not show; Q2 is the case where "ratio" is not 1, which is why it is practised.
- **"Over 100%? Check the ratio first."** Author-written for this video: a checking habit. Assumption: the quantity is a purity or recovery that cannot exceed 100% when the sample is pure and correctly weighed; over 100% can also mean extra mass (water, impurities; p02's "over 100: extra weighed"), so the line says "first", not "only".
- **"Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's)."** (c01.) Holds for Q1 and Q3.
- **"Too wet reads high; lost reads low."** (c02, bank *Trap*.) Holds for Q2 (a) and Q3 method 2; Q3 method 1 extends the same "which way" reasoning to a volume.
- **Considered, not used:** "Read across, then down" (calibration, c04); "Dry to constant mass" (recalled in Q2 as a chip only).

## Narration length estimate

Counted by script (15 scenes; `### N.` headings with letter suffixes, "> " lines joined, bold markers removed, key-notes line as the standard notes line), at 13.3 characters per second, Revision 1, 30 Oct.

| Scene | Characters |
| --- | --- |
| 1. hook | 383 |
| 2a. q1-question (question 1: titration with a dilution) | 312 |
| 2b. q1-data-ratio (which titres, which ratio) | 350 |
| 2c. q1-calc (moles, then back through the dilution) | 607 |
| 2d. q1-mistake (the classic mistake) | 271 |
| 3a. q2-question (question 2: a gravimetric ratio) | 378 |
| 3b. q2-outlier (exclude it for a reason) | 365 |
| 3c. q2-ratio-calc (three sulfates per formula unit) | 563 |
| 3d. q2-mistake (the classic mistake) | 194 |
| 4a. q3-question (question 3: evaluate the errors) | 537 |
| 4b. q3-titration (a diluted titrant reads high) | 440 |
| 4c. q3-gravimetric (lost precipitate reads low) | 270 |
| 4d. q3-claim (the mean is luck, not accuracy) | 552 |
| 5. decision-board | 411 |
| 6. key-notes (reuse take: key-notes; quiet, about 60 seconds) | 75 |
| **Total** | **5,708** |

**5,708 characters, 15 scenes** (inside 5,500 to 6,800).

Timing: speech about 429 s; padding about 30 s (15 scenes at 2 s); stated holds about 3 s (hook 1 s, decision board 2 s); countdowns 30 s (three); the quiet notes hold beyond its speech about 55 s: **about 547 s, 9.1 minutes**.

Reserve trims if the voiced take runs over 9.5 minutes: (1) 2c's last sentence (about 3 s; the c01 chip carries it); (2) 4d's "So the claim isn't supported." (about 2 s; answer (b) carries it). Do not cut below 5,500 without replacing the content.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-data-ratio, q1-calc, q1-mistake, q2-question, q2-outlier, q2-ratio-calc, q2-mistake, q3-question, q3-titration, q3-gravimetric, q3-claim, decision-board, key-notes.

(15 build ids for 15 headings: `### 1.` hook, `### 2a.` to `### 4d.` the questions, `### 5.` decision board, `### 6.` key notes.)

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question. key-notes is the quiet notes hold (about 60 seconds). Lesson key `m8g01` (route chem-m8-g01). Suggested explainer folder `src/explainer/lessons/chem-m8-g01`; build folder `docs/production/claude-pm/lessons/m8g01` (root to confirm). Review evidence paths `checks/m8g01-learning-review.md` and `checks/m8g01-science-check.md` (to be written by Codex).

## Assets

Have (inspected 30 Oct by contact sheet; brief 111 m8 plates are "technical candidate, owner art acceptance pending"; scale uniformly only, never stretched): `m8-mohr-flask-endpoint-v1.png` (hook, Q1 card), `m8-balance-watch-glass-v1.png` (hook, Q2 card), `m6-burette-clamp-stand-v1.png` (Q3 card and 4b; no readable graduations, so values are coded text), `m8-filter-funnel-white-ppt-v1.png` (Q3 card).

Need: **no new plates.** Q3's walkthrough (4c) reuses `m8-filter-funnel-cloudy-filtrate-v1.png`, requested in chem-m8-p02's Codex asset brief; if it is not delivered, 4c shows a coded tear mark on `m8-filter-funnel-white-ppt-v1.png` instead.

Coded: question cards, answer boxes, titre and results tables, check strip and decision board, equation strips, the dilution ladder, the formula unit counter, the two-arrow error board, crossed chips, countdown ring. No people or hands.

## Codex asset brief

No artwork requested (the cloudy-filtrate plate is requested in chem-m8-p02).

## Codex error-check brief

Error-only check, together with the learning review and science check (Codex now writes both; brief 109 practice). Report errors; do not restyle or rewrite:
1. Re-check every value under "Numbers to verify", and the numbers in the narration, screen text, model answers and key notes against them.
2. Confirm the reference facts at the end of "Numbers to verify" against a named source, and that the Q1 seawater value and the Q3 error sizes are plausible (author notes a and d).
3. Confirm the three questions are original: not copied from or closely paraphrasing a NESA paper (the pack's 2023 Q32 and 2025 Q23, and any other Module 8 precipitation titration or gravimetric item in `../research/question-types-chem-m8.md`) or site L01 and L02; and that every condition each model answer needs is on its card.
4. Learning review (`../../student-learning-review.md`) from the stated entry knowledge: in particular, whether 2c's climb back through the dilution is paced well enough at one stage per cue, and whether 4d's "luck, not accuracy" argument is clear to a student starting Year 12.
5. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text ("litre", "aluminium", "sulfate"), and the narration character count by script with the build parser rules.
6. Site errors: none new from L01 or L02 for this video (c01's corrections 1 to 3, c02's correction 1 and notes, and p02's notes 1 to 3 cover them).

## YouTube metadata (draft)

- **Title:** Precipitation Titration and Gravimetric Analysis: HSC-Style Practice | Year 12 Chemistry (88 characters)
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson01.sa.html
  Gravimetric analysis lesson: https://hscscience.com.au/subjects/chemistry/year12/module8/lesson02.sa.html

  Practise three HSC-style quantitative analysis questions. Find the chloride in diluted seawater from Mohr titration data, and see why you must scale back through the dilution. Justify which gravimetric result to exclude, then use a one to three formula ratio to find the purity of aluminium sulfate. Then explain why a diluted titrant reads high and a torn filter paper reads low, and why the mean of two wrong results isn't proof of accuracy. Pause and try each question, then work through it step by step. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 8, Applying Chemical Ideas.
  Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 8):
  "conduct investigations and/or process data involving:
  - gravimetric analysis
  - precipitation titrations"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisites: Mohr titration; gravimetric analysis; the gravimetric analysis practical. Next: How do flame, precipitate and complex tests identify a cation?

  #Year12Chemistry #AnalyticalChemistry #HSCScience"
- **syllabusDotpoints:** the quoted dotpoint above, bullets kept as printed. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C8-IQ1-03, p58).
- **Lesson link:** site lesson 1 first (`.sa.html` form as briefed; root to choose one link form for c01, c02, p02 and g01), with lesson 2 as a second line.
- **Playlist:** Year 12 Chemistry: Module 8, Applying Chemical Ideas (2017 syllabus), after chem-m8-p02 (playlist order 5).

## Open decisions

- **Route JSON (recommended: root applies).** For chem-m8-g01, replace the cut chem-m8-p01 with chem-m8-c01 and chem-m8-c02 in `prerequisites` (keep chem-m8-p02), update `entryKnowledge` to "Recall chem-m8-c01, chem-m8-c02 and chem-m8-p02", and set `next` to chem-m8-c03a (review change 1).
- **Three questions, not four (recommended keep).** A fourth (for example a back titration) would repeat Module 6 and push past 9.5 minutes.
- **Q2's compound (recommended keep).** Aluminium sulfate gives the non-1 : 1 ratio the route stop asks for and links to water treatment. Alternative: magnesium chloride by AgCl (1 MgCl₂ : 2 AgCl), which keeps the chloride theme at the cost of using AgCl twice.
- **Lesson link form** (`.sa.html` or not) and **lesson key** (`m8g01`): root to confirm.

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 40 s per scene, three or four scenes per question; this is the content, not end-of-video feedback. Check that no walkthrough re-teaches c01's indicator chemistry or c02's method reasons (each is recalled in one clause or a chip).
- **No repeated examples.** See the near-match check.
- **Doubts.** (a) Q3's error sizes are illustrative; the narration never gives a size for the burette effect. (b) Q2 names the anhydrous formula (author note b). (c) Q1's 19.3 g/L is "close to typical seawater", not a claim about a specific sea.
- **No em dashes** in this file (to be searched by script).
