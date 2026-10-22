# G02 (Chemistry, Module 7): Combustion enthalpy calculations: HSC-style practice (design)

Status: Revision 2 (22 Oct): learning review and Claude science check resolved; needs Codex error check before voicing.

Revision 2 changes (from `../checks/m7g02-learning-review.md` and `../checks/m7g02-claude-science-check.md`):
- Q1 uses the alternative final mass, 150.54 g (root decision; learning S1, science F1): Δm 1.10 g, n 0.034332 mol, ΔHc −365 kJ mol⁻¹, heat released 24.925 kJ, 50.3%, crossed −11.4 (kJ per gram). Updated in the card, the hook's job sorter chips, 2b to 2e (narration and screen), 4d ("question one's fifty"), key note 2, the Decisions table, the precision and data bullets, model answer 1, Numbers to verify, significant figures and the pronunciation note. p03's −383 is no longer repeated. Open decision closed.
- Q3's cause is hedged (learning S2, science F2): 4c now says the extra fuel "never heated the water" and names evaporation or a spill as the most likely cause; a grey tag lists the other possible causes (a draught or a sooty flame in that trial). Model answer (b), key note 5, Decisions, teaching checks, memory aid check and author doubt (a) updated.
- 2d says "about half, which is typical for a spirit burner and can" (learning S3, science F3); doubt (b) closed.
- Minors applied: the skills-s07 entry line no longer claims s07 taught anomalies (learning M1, science M1); 4c's answer line split into two short lines (learning M2); the "anomalous result" gloss moves to 4b with the badge (learning M3); 4e caption "one faulty trial drags the mean away from every good trial" (learning M4, science M2); near-match wording "final mass changed" (science M3). None declined.

Narration 5,599 characters, 17 scenes, about 9.1 minutes (543 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Working title: "Combustion enthalpy calculations: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception, owner 16 Oct). Each question is shown as an exam would word it (stem, data, demands); it ends "Pause here to answer." with a 10 s countdown and keeps the full question on screen during the attempt; the walkthrough underlines each given in the question text at the cue where it is used (owner rule, 18 Oct: no givens card); it reasons one stage per scene and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `chem-m7-g02` (playlist order 12, after chem-m7-p03 and skills-s07, before chem-m7-c08). Production label G02 (Chemistry, Module 7). Lesson key `m7g02`.

Scope: follows the format of `chem-m6-g01.md` and `chem-m6-g03.md` (Revision 3: question card, type badge hidden during the attempt, check strip, one kept chip, decision board, one crossed mistake per question) and the calculation staging of `chem-m6-c03.md` and `chem-m7-p03.md` scene 5 (equation strip, one stage per line, earlier lines dim, "keep the digits; round at the end"). In a practice video the question card replaces the givens card: the givens are underlined in the question text as they are used. Pre-design pack: `../pre-design/chem-m7-alcohol-combustion.md`. Data: Codex's separate practice dataset in `../pre-design/chem-m7-l11-methanol-dataset.md` (left free for this video by chem-m7-p03, which used a scaled copy), used unscaled for question 1. Site extract: `../site-extracts/chem-m7-l11.md`; the site's L11 methanol figures (200 g, 13.4 °C, 0.48 g, "−383 kJ/mol, 53%") are not used anywhere ("Known source issue", `../../module7-route-review-claude.md`; chem-m7-c07 site correction 1).

Syllabus dotpoint (NSW Chemistry Stage 6, 2017, p55; `C7-IQ4-03` is this project's local catalogue ID, not a code printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"conduct a practical investigation to measure and reliably compare the enthalpy of combustion for a range of alcohols"

Related Year 11 content (NSW Chemistry Stage 6, 2017, Module 4, recalled, quoted from the official 2017 syllabus DOCX): "investigate enthalpy changes in reactions using calorimetry and q = mcΔT (heat capacity formula) to calculate, analyse and compare experimental results with reliable secondary-sourced data, and to explain any differences".

Practice and transfer only: the coverage rows stay with chem-m7-p03 (conduct and errors) and chem-m7-c07 (equations and data values); G02 adds practice rows, not first coverage.

**Boundary:** starts at the route's "Separate water mass, temperature rise and fuel mass" and stops at its "Calculate molar enthalpy and evaluate an anomalous result". Three questions, each a chain of steps with one trap: (1) methanol from raw burner data: ΔT, q from the water, n from the burner's mass lost, ΔHc, then the percentage of the released heat that reached the water (trap: dividing by grams); (2) the reverse: the mass of ethanol needed for a planned temperature rise when only a stated fraction of the heat reaches the water (trap: multiplying by the fraction instead of dividing); (3) a results table for propan-1-ol with one anomalous trial: calculate it, judge it by its cause, and take a suitable mean (trap: averaging all four). **Not here:** the method, set-up, errors list and improvements (chem-m7-p03); answer technique for validity, reliability and accuracy (skills-s07); balancing combustion equations and energy per gram (chem-m7-c07); graphing a homologous series (left out; see near-match check); the calorimeter's heat capacity; percentage uncertainty; bond enthalpies.

## Decisions

- **Route entry.** `../../module7-video-route-draft.json`: chem-m7-g02, "Combustion enthalpy calculation practice", type practice, site lesson L11, syllabus action C7-IQ4-03, prerequisites chem-m7-p03 and chem-m6-c03, playlist order 12, entry knowledge "Recall chem-m7-p03", next chem-m7-c08, placement "Practice companion". Route review item 10 adds chem-m6-c03 (q = mcΔT); item 11 places skills-s07 between p03 and g02. p03's Boundary: "No anomalous results (chem-m7-g02)"; c07's Boundary: "calculation practice and anomalous results (chem-m7-g02)".
- **One main question:** *A combustion question gives you a water mass, a temperature rise and a fuel mass that all look alike. How do you give each its job, get the molar enthalpy and the share of heat that reached the water, run the calculation backwards, and decide whether an odd result belongs?* Heading on screen: "Combustion calculations: water in q, fuel in n".
- **Why a practice video, and why these three questions.** p03 worked one methanol trial and set one ethanol attempt (fuel mass in q, crossed). Students lose combustion calculations in other links: dividing q by grams instead of moles, forgetting J to kJ, inverting the heat-transfer fraction, and averaging a trial that clearly failed. Each question hides one of these in a new case.

  | Q | Case (new) | Chain | Trap (crossed) | Check | Core |
  |---|---|---|---|---|---|
  | 1 | methanol, 150.0 g water, 22.4 to 42.4 °C, burner 151.64 to 150.54 g (Codex practice dataset, final mass changed by root decision) | ΔT → q (water) → Δm → n (fuel) → ΔHc → heat expected from n → % reaching the water | dividing by grams: −11.4 (kJ per gram, not per mole) | about half the data value, as in p03 | p03, m6-c03 |
  | 2 | ethanol, 250.0 g water warmed by 15.0 °C, 45.0% of the heat reaches the water | q (water) → ÷ fraction → heat released → n = heat ÷ 1367 → mass | × 0.450 instead of ÷: 0.238 g | answer must exceed the no-loss mass, 0.528 g | p03, c07 |
  | 3 | propan-1-ol, four trials with 250.0 g water; trial 3 lost 1.62 g for a normal rise | trial 3: q → n → ΔHc → compare → cause → exclude → mean of three | averaging all four: −907 | about 48% of the data value, in line with Q1 | p03 (error to q or n) |

- **Rising difficulty.** Q1 adds one step to p03's chain (the percentage). Q2 reverses the chain and adds the fraction. Q3 asks for a judgement backed by a cause, then a mean.
- **Data (constructed, physically plausible).** Q1 uses Codex's practice dataset (`../pre-design/chem-m7-l11-methanol-dataset.md`, "Separate practice dataset") with the final mass changed to 150.54 g (root decision, 22 Oct), so its result (−365 kJ mol⁻¹, 50.3%) is new; p03's −383 is not repeated. Confirmed under "Numbers to verify". Q2 and Q3 are new data, chosen so that rounded and unrounded chains give the same reported answers (checked under "Numbers to verify").
- **Q3's anomaly is a mass anomaly, by design.** Trial 3's temperature rise (18.2 °C) matches the others, but its burner lost about 0.45 g more than the others' heat implies. So that extra fuel gave the water no heat. The most likely cause is fuel lost without burning (the burner left uncapped and evaporating, or a spill), which p03 scene 8 traced as "evaporation makes n too big". A draught or a sootier flame in that trial would leave the same signature, so the narration names the likeliest cause and a grey tag lists the others. The judgement uses a likely cause from the practical, not "it looks wrong". The narration says "Only drop a result when you can explain it", and "repeat that trial if you can".
- **Site alignment.** Site lesson 11 (`../site-extracts/chem-m7-l11.md`): its card 02 three steps ("m = mass of water (NOT fuel)", "divide q by 1000 (J→kJ)"), its Common Errors on fuel mass in q and the missing J to kJ conversion, its Must Do "kJ/mol vs kJ/g" (Q1's crossed mistake) and its percentage-of-theoretical comparison (Q1 b) are used with new data. Its Activity A and worked examples are not used (c07 site corrections 1 to 5: wrong figures and significant figures). No new site corrections.
- **Entry knowledge (do not re-teach; recall in one clause each).** From p03: "water in q, fuel in n"; Δm = initial − final; ΔHc = −q ÷ n per mole of fuel; results about half the data values; heat to the can, clamp and air makes q too small; evaporation makes n too big; capping the burner and reweighing at once. From skills-s07: word, feature, fix (name the feature of the method and its effect before proposing a fix); G02 applies the same habit to an anomalous trial for the first time. From c07: the data values (−726, −1367, −2021 kJ mol⁻¹); ΔHc is per mole of fuel; kJ per gram is a different quantity. From m6-c03: q = mcΔT with c = 4.18 J g⁻¹ °C⁻¹; keep the digits, round at the end. From Year 11: n = m ÷ M; molar masses from the data sheet; significant figures (decimal places in a subtraction).
- **Learner-visible vocabulary (callbacks; one plain meaning each where needed).** Anomalous result (a result that doesn't fit the pattern of the others; screen gloss at Q3); percentage of heat transferred (the share of the heat released that the water took in; screen "heat to the water ÷ heat released × 100%").
- **Start and stop.** Starts at an unseen methanol dataset; stops after three walkthroughs and a decision board: q from the water's mass and rise, n from the fuel's mass lost, ΔHc in kJ mol⁻¹ with its sign, the percentage reaching the water, dividing by the fraction to find the heat released, and judging and excluding an anomaly by its cause before taking a mean. No new method.
- **Placement and handoff.** After chem-m7-p03 and skills-s07, before chem-m7-c08. The previous video in the Chemistry playlist is skills-s07, so the narration says "the practical" when it recalls p03 and never says "last video". Scene 5 hands off: "Next, where an alcohol goes when it reacts."
- **Precision (owner rule, strict).** Masses to 0.01 g; temperatures to 0.1 °C; water 150.0 g and 250.0 g; c 4.18 (3 s.f.). Q1: ΔT 20.0 (3 s.f.), Δm 1.10 g (3 s.f.), answers to 3 s.f. (−365 kJ mol⁻¹, 50.3%). Q2: ΔT 15.0 °C (3 s.f.) and 45.0% (3 s.f.), answer 1.17 g. Q3: Δm 1.15 to 1.62 g and ΔT to 0.1 °C, answers to 3 s.f. (−705, mean −974 kJ mol⁻¹). Working keeps guard digits; q is kept unrounded ("keep the digits; round at the end", p03 tag).
- **Visual system.** One practice board throughout, in the G01 and G03 layout: top-left the **question card** (stem, data, table and demands, as an exam prints them, with the tag "HSC-style question, written for HSCScience"), kept readable through each question; the working fills the right two thirds; a **type badge** top-right ("Raw data: q, n, ΔH", "Backwards: heat to mass", "Table: is it anomalous?"), hidden during each attempt because it names the method. When the walkthrough starts, the card shrinks to a strip and each given is **underlined in amber in the question text** at the cue where it is used. A **check strip** on the far left carries four rows, "water in q?", "fuel in n?", "kJ, per mole, sign?", "makes sense?", and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Working follows the C03 and p03 staging: equation strip, one stage per line, earlier lines dimming, one kept chip into the next scene. Colour key from p03: water quantities (m, ΔT, q) orange, fuel quantities (Δm, n) blue, ΔH teal; amber only for underlined givens. **Clutter rule (owner):** besides the question strip and the check strip, at most about three bright text items in the working area at once; each tag fades when the next cue lands.
- **New coded items (lesson-local, suggested folder `src/explainer/lessons/chem-m7-g02`):** a **job sorter** (hook and Q1: three look-alike number chips, "150.0 g", "20.0 °C", "1.10 g", drop into two labelled trays, "q: the water" (orange, takes the first two) and "n: the fuel" (blue, takes the third)); a **heat split bar** (Q1 b and Q2: a horizontal bar for the heat released, with the orange share "to the water" and a grey share "to the can and air", labelled with the percentage); a **trial strip** (Q3: four small bars of |ΔHc| in a row, trial 3 short, with a dashed band through the other three); the decision board. Reused, imported not copied: p03's balance readout and evaporation wisp parts, the error-chain row (chem-m6-p02 parts), C03's equation strip.
- **Real objects are painted** (existing or already commissioned plates only, listed under Assets): the spirit-burner calorimeter (Q1, Q3), the burner on a balance (Q1), the ethanol bottle (Q2). No people or hands.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own spoken, crossed-out classic mistake. One crossed chip per question.
- **Memory aids (bank and p03, checked below).** Recalled, not re-taught: "Water in q, fuel in n" (p03; all three questions). New spoken line, Q2: "Heat lost means more fuel, not less" (a sense check, not a bank aid). Q3: "Only drop a result when you can explain it" (a rule applied from skills-s07's word, feature, fix, new to this video).
- **Legacy and shared code.** No legacy logic. Reuse the explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`) and bio-m6-g01's board parts (`PauseHold`, `AnsBox`, `Line`, `Checks` with a `labels` prop), as G01 and G03 decided; B6a's `WrongChip` and `Cross`.

Main question: *A combustion question gives you a water mass, a temperature rise and a fuel mass that all look alike. How do you give each its job, get the molar enthalpy and the share of heat that reached the water, run the calculation backwards, and decide whether an odd result belongs?*
Entry knowledge: see above. Students start Year 12 and have watched chem-m7-c07, chem-m7-p03 and skills-s07 in playlist order.
Stops after: calculating ΔHc from raw spirit-burner data; the percentage of released heat that reached the water; the mass of fuel needed when only a stated fraction reaches the water; calculating a trial's ΔHc, identifying it as anomalous by its cause and excluding it from the mean; checking each answer's size, unit and sign.
Handoff: alcohol reactions (route chem-m7-c08, "Where can an alcohol reaction lead?").

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Pronunciations as in Review notes.

### 1. hook
> A combustion question hands you three numbers that look alike: the water's mass, its temperature rise, and the mass of fuel burnt. Each one has a single **job**. The water's mass and its rise go into **q**. The fuel's mass gives **n**. Swap them, and the answer can be out by a factor of a hundred or more. Here are three HSC-style questions, and the last one hides a result that doesn't **belong**. Pause and try each one, then we'll work through it, one step at a time.

Visual: heading "Combustion calculations: water in q, fuel in n" writes on. The job sorter runs: three grey chips "150.0 g", "20.0 °C", "1.10 g" write in a row (no context, so nothing answer-bearing); on "job" two trays draw beneath; on "q" the first two chips drop into the orange tray "q: the water"; on "n" the third drops into the blue tray "n: the fuel". On "Swap them" the chips jump trays and a grey tag writes "fuel mass in q: answer far too small" (no value), then they jump back. On "belong" four small grey bars draw at the right, one clearly short, with a "?" tag. The check strip builds on the left: "water in q?", "fuel in n?", "kJ, per mole, sign?", "makes sense?". The bars become three numbered question cards with one shared tag line, "HSC-style questions, written for HSCScience". Hold about 1 second; the check strip shrinks to the far left.

### 2a. q1-question (question 1: methanol from raw data)
> Question one. A methanol spirit burner heats a hundred and fifty grams of water from twenty two point four to forty two point four degrees. The burner's masses before and after are on the card. Calculate the molar enthalpy of combustion of methanol, then the percentage of the methanol's heat that reached the water. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A student used a spirit burner containing methanol (CH₃OH, M = 32.04 g mol⁻¹) to heat 150.0 g of water in a copper can. The temperature of the water rose from 22.4 °C to 42.4 °C. The mass of the spirit burner and methanol decreased from 151.64 g to 150.54 g. The specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹. The molar enthalpy of combustion of methanol is −726 kJ mol⁻¹." Demands: "(a) Calculate the molar enthalpy of combustion of methanol from these results." "(b) Calculate the percentage of the heat released by the burning methanol that was absorbed by the water." Two answer boxes. `m7-spirit-burner-calorimeter-v1.png` small at the right (no readouts, no arrows). Nothing answer-bearing. **Countdown ring 10 seconds** after "Pause here to answer."; the check strip dims; the whole card stays on screen.

### 2b. q1-q-and-n (the water, then the fuel)
> Start with the water. Delta T is **twenty point zero** degrees, so q is a hundred and fifty, times four point one eight, times twenty: twelve thousand five hundred and forty joules, or twelve point five four zero **kilojoules**. Keep every digit for now. Now the fuel. The burner lost one point one zero grams. Divide by thirty two point zero four, and that's **zero point zero three four three three** moles of methanol.

Visual: the card shrinks to a strip. Type badge "Raw data: q, n, ΔH". On "twenty point zero" "22.4 °C to 42.4 °C" underlines and "ΔT = 42.4 − 22.4 = 20.0 °C" writes (orange). "150.0 g of water" and "4.18 J g⁻¹ °C⁻¹" underline as "q = m(water) c ΔT = 150.0 × 4.18 × 20.0 = 12 540 J" writes; on "kilojoules" "= 12.540 kJ" adds, with p03's grey tag "keep the digits; round at the end" (fades). The q line shrinks to an orange kept chip "q = 12.540 kJ". Strip: "water in q?" ticks. On "one point one zero" `m7-spirit-burner-on-balance-v1.png` appears small with the balance readout reading "151.64 g" then "150.54 g"; "151.64 g to 150.54 g" underlines and "Δm = 151.64 − 150.54 = 1.10 g" writes (blue; grey tag "initial − final"). On "zero point zero three four three three" "M = 32.04 g mol⁻¹" underlines and "n = 1.10 ÷ 32.04 = 0.034332 mol" writes (blue). Strip: "fuel in n?" ticks. Bright at the end: the kept q chip, the n line, the balance readout.

### 2c. q1-dh (minus q over n)
> Delta H is minus q over n: minus twelve point five four zero kilojoules, over zero point zero three four three three moles. That's minus three sixty five point two six, so minus **three hundred and sixty five** kilojoules per mole. Three significant figures, from the mass lost and the temperature rise. And it's **negative**, because burning releases heat.

Visual: the Δm line dims; the q chip and n line slide into "ΔHc = −q ÷ n = −12.540 kJ ÷ 0.034332 mol = −365.26 kJ mol⁻¹" (teal). On "three hundred and sixty five" answer box (a) fills "ΔHc = −365 kJ mol⁻¹" with a grey tag "3 s.f.: 1.10 g and 20.0 °C". On "negative" the minus sign pulses, grey tag "heat released: ΔH negative". Strip: "kJ, per mole, sign?" ticks. The answer shrinks to a teal kept chip.

### 2d. q1-percent (how much reached the water)
> Part b asks how much of the heat reached the water. If those zero point zero three four three three moles burned completely, they'd release that times seven hundred and twenty six: **twenty four point nine three** kilojoules. The water took in twelve point five four. That's **fifty point three** percent: about half, which is typical for a spirit burner and can. The rest warmed the can and the air.

Visual: "−726 kJ mol⁻¹" underlines. "heat released = n × 726 = 0.034332 × 726 = 24.925 kJ" writes. On "twenty four point nine three" the heat split bar draws: a full bar "24.93 kJ released". On "fifty point three" its orange share fills "12.54 kJ to the water" and "12.540 ÷ 24.925 × 100 = 50.3%" writes; answer box (b) fills "50.3%". The grey remainder labels "to the can and air" with small orange arrows leaving the plate's can sides. A grey tag "check: 365 ÷ 726 = 50.3% too" (fades). Strip: "makes sense?" ticks. Bright at the end: the split bar and answer (b).

### 2e. q1-mistake (the classic mistake)
> The classic slip is dividing by the grams instead of the moles. Twelve point five four over one point one zero gives eleven point four, but that's kilojoules per **gram**, not per mole.

Visual: a chip "ΔHc = −12.540 ÷ 1.10 = −11.4 kJ mol⁻¹" fades in; on "gram" "1.10 g" in the chip rings and the chip takes a red scribble cross (caption "÷ grams gives kJ per gram; ΔHc is per mole of fuel").

### 3a. q2-question (question 2: backwards to a mass)
> Question two runs the other way. A student wants to warm two hundred and fifty grams of water by fifteen degrees with an ethanol burner. Earlier trials showed the water takes in forty five percent of the heat released. Using the data value for ethanol, calculate the mass of ethanol she should expect to burn. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A student plans to heat 250.0 g of water from 20.0 °C to 35.0 °C using a spirit burner containing ethanol (C₂H₅OH, M = 46.07 g mol⁻¹). In earlier trials with the same apparatus, the water absorbed 45.0% of the heat released by the burning ethanol. The molar enthalpy of combustion of ethanol is −1367 kJ mol⁻¹, and the specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹. Calculate the mass of ethanol that the student should expect to burn." One answer box. `m7-ethanol-fuel-bottle-v1.png` small at the right with a coded label "ethanol". Nothing answer-bearing. **Countdown ring 10 seconds**; check strip dims; card stays on screen.

### 3b. q2-heat (heat the water needs, then heat released)
> First, the heat the water needs: two hundred and fifty, times four point one eight, times fifteen point zero. That's **fifteen point six seven five** kilojoules. But only forty five percent of the burner's heat reaches the water, so it must release **more** than that: fifteen point six seven five divided by zero point four five zero is **thirty four point eight three** kilojoules.

Visual: the card shrinks to a strip. Type badge "Backwards: heat to mass". "250.0 g of water" and "20.0 °C to 35.0 °C" underline; "ΔT = 35.0 − 20.0 = 15.0 °C" and "q(water) = 250.0 × 4.18 × 15.0 = 15 675 J = 15.675 kJ" write (orange). On "fifteen point six seven five" the q line shrinks to an orange kept chip. Strip: "water in q?" ticks. On "more" "45.0%" underlines and the heat split bar draws empty with only its orange share known, "15.675 kJ = 45.0% of the heat released", and a "?" over the full bar. On "thirty four point eight three" "heat released = 15.675 ÷ 0.450 = 34.833 kJ" writes, and the full bar fills "34.83 kJ". Bright at the end: the split bar and the heat released line.

### 3c. q2-mass (heat to moles to mass)
> Now the fuel. Each mole of ethanol releases thirteen hundred and sixty seven kilojoules, so thirty four point eight three over thirteen sixty seven is **zero point zero two five four eight** moles. Times forty six point zero seven: **one point one seven** grams. Three significant figures, from the fifteen point zero degrees and the forty five point zero percent.

Visual: "−1367 kJ mol⁻¹" underlines. "n(ethanol) = 34.833 ÷ 1367 = 0.025482 mol" writes (blue; grey tag "use the size, 1367: the sign only says heat is released"). On "one point one seven" "M = 46.07 g mol⁻¹" underlines and "m = 0.025482 × 46.07 = 1.1739 g → 1.17 g" writes; the answer box fills "1.17 g" with a grey tag "3 s.f.: 15.0 °C and 45.0%". Strip: "fuel in n?" and "kJ, per mole, sign?" tick.

### 3d. q2-mistake (the classic mistake)
> The classic slip is multiplying by zero point four five zero instead of dividing. That gives zero point two three eight grams. But if heat is lost, you need **more** fuel, not less, so the answer has to be bigger than the no-loss mass, zero point five two eight grams.

Visual: a chip "15.675 × 0.450 = 7.05 kJ → 0.238 g" fades in. On "more" a short number line writes under it with three marks: "0.238 g (× 0.450)", "0.528 g (no heat lost)", "1.17 g (55% lost)"; an arrow labelled "heat lost → more fuel" points right from 0.528. The 0.238 chip takes a red scribble cross (caption "less heat reaches the water, so more fuel must burn"). Strip: "makes sense?" ticks.

### 4a. q3-question (question 3: is trial 3 anomalous?)
> Question three. A student burns propan-one-ol in four trials, heating two hundred and fifty grams of water each time. The table gives each temperature rise, the mass the burner lost, and three of the molar enthalpies. Calculate the molar enthalpy for trial three. Then explain whether trial three should be included in the mean, and calculate the mean. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "A student burned propan-1-ol (C₃H₇OH, M = 60.09 g mol⁻¹) in a spirit burner beneath a copper can with a draught shield and lid. In each trial she heated 250.0 g of fresh water. The specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹." Table: "Trial | Temperature rise (°C) | Mass lost by burner (g) | ΔHc (kJ mol⁻¹)"; "1 | 18.0 | 1.16 | −974"; "2 | 17.9 | 1.15 | −977"; "3 | 18.2 | 1.62 | (blank cell)"; "4 | 18.1 | 1.17 | −971". Demands: "(a) Calculate the molar enthalpy of combustion of propan-1-ol for trial 3." "(b) Explain whether trial 3 should be included when calculating the mean, and calculate the mean molar enthalpy of combustion." Two answer boxes. `m7-spirit-burner-calorimeter-shield-v1.png` small at the right. Nothing answer-bearing (no trial strip, no highlighted row). **Countdown ring 10 seconds**; check strip dims; card stays on screen.

### 4b. q3-trial3 (same steps for trial 3)
> Trial three, same steps. q is two hundred and fifty, times four point one eight, times eighteen point two: **nineteen thousand and nineteen** joules. n is one point six two over sixty point zero nine: zero point zero two six nine six moles. So delta H is minus **seven hundred and five** kilojoules per mole. The other three trials all sit close to minus nine seventy five, so this one is far less negative.

Visual: the card shrinks to a strip, the table kept readable (G03 build rule: if the table cannot be read when shrunk, it stays full size and only the stem shrinks). Type badge "Table: is it anomalous?", with the grey gloss under it: "anomalous result: doesn't fit the pattern of the others". Row 3's "18.2" and "250.0 g" underline as "q = 250.0 × 4.18 × 18.2 = 19 019 J = 19.019 kJ" writes (orange). "1.62" and "60.09" underline as "n = 1.62 ÷ 60.09 = 0.026960 mol" writes (blue). On "seven hundred and five" "ΔHc = −19.019 ÷ 0.026960 = −705.46 → −705 kJ mol⁻¹" writes; answer box (a) fills "−705 kJ mol⁻¹" and the table's blank cell fills "−705" in teal. On "close to minus nine seventy five" the trial strip draws: four bars of |ΔHc|, with a dashed band through trials 1, 2 and 4 and bar 3 well short of it. Strip: "water in q?", "fuel in n?" tick.

### 4c. q3-judge (find the cause before you drop it)
> So does it belong? Look for the cause. Trial three's temperature rise matches the others, but the burner lost nearly **half a gram** more. Extra mass with no extra heat means that fuel never heated the water. Most likely it left without burning: the burner was left uncapped and **evaporated**, or some spilled. That makes n too big, and delta H **less negative**. It's an anomaly with a likely cause, so leave it out of the mean, and repeat that trial if you can.

Visual: the table's temperature column underlines (18.0, 17.9, 18.2, 18.1, grey tag "rises match"); on "half a gram" the mass column underlines and "1.62" rings amber against "1.15 to 1.17" (tag "about 0.45 g more for the same heat"). On "evaporated" p03's evaporation wisp thumbnail appears small (an uncapped burner, pale wisps, tag "mass lost, no heat"). On "less negative" the error-chain row writes small: "fuel lost without burning → n ↑ → ΔH less negative" (blue n box), with a small grey tag under it: "other possible causes: a draught or a sooty flame in that trial". Answer box (b) writes two short lines: "Trial 3: same rise, but about 0.45 g more fuel lost → that fuel gave the water no heat (likely evaporation or a spill)." / "n too big → ΔH less negative. Exclude it; repeat if possible." (The full sentence stays in the model answer.) Strip: "makes sense?" ticks. Bright at the end: the ringed 1.62, the error-chain row, the two answer lines.

### 4d. q3-mean (the mean of the trials that fit)
> Average the other three. Minus nine seventy four, minus nine seventy seven and minus nine seventy one give a mean of minus **nine hundred and seventy four** kilojoules per mole. That's about forty eight percent of the data value, in line with question one's fifty, so the three that fit look like normal trials. Only drop a result when you can **explain** it.

Visual: rows 1, 2 and 4's ΔHc cells underline; "mean = (−974 + −977 + −971) ÷ 3 = −974 kJ mol⁻¹" writes (grey tag "unrounded trials give −974.4: the same"); answer box (b) adds "Mean of trials 1, 2 and 4: −974 kJ mol⁻¹". A small grey chip "974 ÷ 2021 = 48%: about half, as expected". On "explain" a handwritten line under the board: "Only drop a result when you can explain it."

### 4e. q3-mistake (the classic mistake)
> The classic mistake is averaging all four. Trial three drags the mean to minus nine hundred and seven, a value that **no** good trial gave.

Visual: a chip "mean of all four = −907 kJ mol⁻¹" fades in; on "no" a coded tick at −907 appears on the trial strip, below the dashed band where no bar ends; the chip takes a red scribble cross (caption "one faulty trial drags the mean away from every good trial").

### 5. decision-board
> So for any combustion calculation: the water's mass and rise go into **q**, the fuel's mass lost gives **n**, and delta H is minus q over n, in kilojoules per mole. If only part of the heat reaches the water, **divide** by that fraction to find the heat released. And when one trial doesn't fit, find its **cause** before you leave it out. Next, where an alcohol goes when it reacts.

Visual: the check strip returns full size as a two-column board, "Check" and "What you do", each row lighting on its cue with its question number badge: on "q" "Water in q → q = m(water) × 4.18 × ΔT, in J then kJ (Q1, Q2, Q3)"; on "n" "Fuel in n → n = (initial − final mass) ÷ M (Q1, Q3)"; "kJ, per mole, sign → ΔHc = −q ÷ n; ÷ grams gives kJ per gram (Q1)"; on "divide" "Part of the heat → heat released = q(water) ÷ fraction; heat lost means more fuel (Q2)"; on "cause" "Odd trial → find the cause (q or n?); exclude only if explained; mean the rest (Q3)". Under the board, small: "Answers to the data's significant figures." On "Next" a chip "Next: where can an alcohol reaction lead?" slides in at the lower right. Hold about 2 seconds.

### 6. key-notes (reuse take: key-notes; quiet, about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. q = m(water) × c × ΔT (in J, then ÷ 1000 for kJ). n = (initial − final burner mass) ÷ M. ΔHc = −q ÷ n, in kJ mol⁻¹. Dividing by grams gives kJ per gram, a different quantity.
2. Percentage of heat reaching the water = q(water) ÷ (n × |ΔHc data value|) × 100%. Example: methanol, 12.540 ÷ 24.925 × 100% = 50.3%.
3. Backwards: heat released = q(water) ÷ fraction reaching the water; n = heat released ÷ |ΔHc|; mass = n × M. Heat lost means more fuel.
4. Anomalous trial: find its cause first (does it affect q or n?). Exclude it only when it is explained; take the mean of the rest; repeat that trial if possible.
5. Example (propan-1-ol): trial 3 lost 0.45 g extra for the same rise, so that fuel gave the water no heat (most likely lost without burning, for example evaporation from an uncapped burner, or a spill), so n too big and ΔH less negative (−705); mean of the others −974 kJ mol⁻¹.

Memory aid (large): *Water in q, fuel in n.* Second line: *Only drop a result when you can explain it.*

## Teaching checks

- **Does it explain causes?** Why the water's mass goes in q: the water is what warms (2b). Why the fuel's mass lost gives n: ΔHc is per mole of fuel (2b, 2e). Why ΔH is negative: heat is released (2c). Why only about half reaches the water: the rest warms the can and the air (2d). Why the heat released is bigger than q(water): only 45% reaches the water (3b). Why multiplying by 0.450 must be wrong: heat lost means more fuel, so the answer must exceed the no-loss mass (3d). Why trial 3 is anomalous: same heat, more mass lost, so that fuel never heated the water (most likely it left without burning), making n too big (4c). Why it may be excluded: its cause is identified (4c, 4d). Why averaging it in is wrong: an explained faulty trial drags the mean away from every good trial (4e).
- **Worked-example rule.** One reasoning stage per scene; the question strip stays readable and each given is underlined at the cue where it is used; earlier questions are cleared; result lines land on their spoken cues; only one kept chip carries into the next scene (Q1 q, then ΔHc; Q2 q(water), then the heat released; Q3 trial 3's ΔHc).
- **Response opportunities.** Three, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a): every mass, temperature, c, M and data value; Q2's 45.0% and its "same apparatus" condition; Q3's table, the shield and lid, "fresh water", M and c. Nothing answer-bearing during the holds; the check strip dims.
- **Reading load.** Q3's card is the densest (two sentences and a four-row table) and is the task itself; Q1 and Q2 are four or five short sentences. In the working area, at most about three bright text items at once (the split bar and the trial strip each count as one item).
- **Term load.** One new label, "anomalous result", with a screen gloss. "Percentage of heat transferred" is shown as a formula in words.
- **Necessary conditions kept in learner copy.** Q2's "with the same apparatus" (otherwise 45.0% would not apply); Q3's "fresh water" (each trial starts with new water, so the trials are independent) and "draught shield and lid" (so the trials sit near half the data value, as Q1 does).
- **Out of scope by design.** The method and improvements (p03); validity, reliability and accuracy as answer technique (s07); graphs of ΔHc against carbon number; bond enthalpies; percentage uncertainty.

## Practice questions and model answers

1. (Q1.) Methanol (M = 32.04 g mol⁻¹); 150.0 g water; 22.4 °C to 42.4 °C; burner 151.64 g to 150.54 g; c = 4.18 J g⁻¹ °C⁻¹; ΔHc(data) = −726 kJ mol⁻¹. (a) ΔHc from the results. (b) Percentage of the released heat absorbed by the water.
   Model: (a) ΔT = 20.0 °C; q = 150.0 × 4.18 × 20.0 = 12 540 J = 12.540 kJ; Δm = 1.10 g; n = 1.10 ÷ 32.04 = 0.034332 mol; ΔHc = −12.540 ÷ 0.034332 = −365.26 → −365 kJ mol⁻¹ (3 s.f.). (b) Heat released by 0.034332 mol = 0.034332 × 726 = 24.925 kJ; 12.540 ÷ 24.925 × 100% = 50.3%. Crossed mistake: "ΔHc = −12.540 ÷ 1.10 = −11.4 kJ mol⁻¹" (divided by grams).
2. (Q2.) Ethanol (M = 46.07 g mol⁻¹); 250.0 g water, 20.0 °C to 35.0 °C; 45.0% of the released heat absorbed by the water (same apparatus); ΔHc = −1367 kJ mol⁻¹; c = 4.18 J g⁻¹ °C⁻¹. Expected mass of ethanol burnt.
   Model: ΔT = 15.0 °C; q(water) = 250.0 × 4.18 × 15.0 = 15 675 J = 15.675 kJ; heat released = 15.675 ÷ 0.450 = 34.833 kJ; n = 34.833 ÷ 1367 = 0.025482 mol; m = 0.025482 × 46.07 = 1.1739 → 1.17 g. Crossed mistake: "× 0.450 → 0.238 g". Sense check: the no-loss mass is 0.528 g, and losing heat needs more fuel.
3. (Q3.) Propan-1-ol (M = 60.09 g mol⁻¹); 250.0 g fresh water each trial; c = 4.18 J g⁻¹ °C⁻¹; shield and lid. Trials (rise, mass lost, ΔHc): 1: 18.0 °C, 1.16 g, −974; 2: 17.9 °C, 1.15 g, −977; 3: 18.2 °C, 1.62 g, blank; 4: 18.1 °C, 1.17 g, −971 kJ mol⁻¹. (a) ΔHc for trial 3. (b) Include trial 3? Mean.
   Model: (a) q = 250.0 × 4.18 × 18.2 = 19 019 J = 19.019 kJ; n = 1.62 ÷ 60.09 = 0.026960 mol; ΔHc = −19.019 ÷ 0.026960 = −705.46 → −705 kJ mol⁻¹. (b) Trial 3 is anomalous: its temperature rise matches the others, but the burner lost about 0.45 g more than that heat implies (about 1.17 g expected), so that fuel gave the water no heat, most likely because it was lost without burning (evaporation from an uncapped burner, or a spill). That makes n too large and ΔHc less negative. Because the trial has a likely cause, exclude it (and repeat it if possible). Mean of trials 1, 2 and 4 = (−974 − 977 − 971) ÷ 3 = −974 kJ mol⁻¹. Crossed mistake: "mean of all four = −907 kJ mol⁻¹".

## Near-match check (22 Oct)

The 2019 to 2025 NESA Chemistry papers and marking guidelines (the 2023 paper's text could not be extracted; its guideline was searched) were downloaded from the research pack's links and searched by script for "spirit", "burner", "combustion of", "methanol", "propan-1-ol" and "butan-1-ol".
- **Q1 against Chemistry 2019 Q23(a)** (ethanol, an aluminium beaker with 105 g of water, 0.370 g burnt, 18.5 to 30.0 °C, calculate ΔHc): the nearest item. Any spirit-burner calculation shares this demand, which is the syllabus's core calculation. Q1 uses a different alcohol (methanol), different data (Codex's constructed dataset, final mass changed), raw burner masses rather than a stated mass burnt, and adds part (b), the percentage of heat absorbed. No wording or numbers are shared.
- **Against Chemistry 2022 Q29** (school-laboratory ΔHc values for methanol, ethanol, propan-1-ol and pentan-1-ol; plot a curved line of best fit and estimate butan-1-ol): this is why G02 has no homologous-series graph question. Q3 uses one alcohol's repeated trials, not a series, and no graph.
- **Q2 and Q3:** no audited item reverses the calculation to a fuel mass with a heat-transfer fraction, or gives repeated trials with an anomaly. Not near matches.
- Codex to confirm, including the 2023 question paper.

## Numbers to verify

Self-check (22 Oct), computed by script; Codex to re-check. Atomic masses from the HSC data sheet: H 1.008, C 12.01, O 16.00.

- **Molar masses.** CH₃OH 12.01 + 4(1.008) + 16.00 = 32.042 → 32.04; C₂H₅OH 2(12.01) + 6(1.008) + 16.00 = 46.068 → 46.07; C₃H₇OH 3(12.01) + 8(1.008) + 16.00 = 60.094 → 60.09 g mol⁻¹.
- **Q1 (Codex dataset, final mass changed to 150.54 g by root decision, 22 Oct; recomputed 23 Oct).** ΔT = 42.4 − 22.4 = 20.0 °C; q = 150.0 × 4.18 × 20.0 = 12 540 J = 12.540 kJ; Δm = 151.64 − 150.54 = 1.10 g; n = 1.10 ÷ 32.04 = 0.0343321 mol (0.034332 shown); ΔHc = −12.540 ÷ 0.0343321 = −365.256 → −365 kJ mol⁻¹. Heat released = 0.0343321 × 726 = 24.9251 kJ; 12.540 ÷ 24.9251 × 100 = 50.311 → 50.3%; check 365.256 ÷ 726 = 50.31% (the screen's 365 ÷ 726 = 50.28%, also 50.3%). Crossed: 12.540 ÷ 1.10 = 11.400 → "−11.4 kJ mol⁻¹". Hook factor: fuel mass in q gives 1.10 × 4.18 × 20.0 = 91.96 J against 12 540 J (factor 136), so "a hundred or more" holds.
- **Q2.** ΔT = 35.0 − 20.0 = 15.0 °C; q = 250.0 × 4.18 × 15.0 = 15 675 J = 15.675 kJ; 15.675 ÷ 0.450 = 34.8333 kJ; n = 34.8333 ÷ 1367 = 0.0254816 mol; m = 0.0254816 × 46.07 = 1.17394 → 1.17 g. Rounded chain (34.833, 0.025482) gives 1.1739 → 1.17 (same). Crossed: 15.675 × 0.450 = 7.0538 kJ; ÷ 1367 × 46.07 = 0.23772 → 0.238 g. No-loss mass: 15.675 ÷ 1367 × 46.07 = 0.52827 → 0.528 g. Order 0.238 < 0.528 < 1.17, as the number line shows. 1.17 ÷ 0.528 = 2.22 = 1 ÷ 0.450 (consistent).
- **Q3 trials (250.0 g; M 60.09).** Trial 1: q = 250.0 × 4.18 × 18.0 = 18 810 J; n = 1.16 ÷ 60.09 = 0.0193044 mol; ΔHc = −974.39 → −974. Trial 2: q = 250.0 × 4.18 × 17.9 = 18 705.5 J; n = 1.15 ÷ 60.09 = 0.0191380 mol; ΔHc = −977.40 → −977. Trial 3: q = 250.0 × 4.18 × 18.2 = 19 019 J; n = 1.62 ÷ 60.09 = 0.0269596 mol; ΔHc = −705.46 → −705. Trial 4: q = 250.0 × 4.18 × 18.1 = 18 914.5 J; n = 1.17 ÷ 60.09 = 0.0194708 mol; ΔHc = −971.43 → −971. Mean of 1, 2, 4: unrounded (974.39 + 977.40 + 971.43) ÷ 3 = 974.41 → −974; rounded (974 + 977 + 971) ÷ 3 = 974.0 → −974 (same). Mean of all four: (974.39 + 977.40 + 705.46 + 971.43) ÷ 4 = 907.17 → −907 (rounded inputs give 906.75 → −907, same). 974.41 ÷ 2021 = 48.2%; trial 3: 705.46 ÷ 2021 = 34.9%. Expected mass for trial 3 at the mean: 19.019 ÷ 974.41 × 60.09 = 1.1729 g, so the extra is 1.62 − 1.17 = 0.45 g ("nearly half a gram").
- **Plausibility (author).** Q1 50.3% and Q3 48.2% sit in p03's 45 to 53% range; Q2's 45.0% is stated data. The extra 0.45 g in trial 3 is plausible for an uncapped wick over the minutes of a trial or a small spill (propan-1-ol is volatile; flash point about 15 to 22 °C, p03 safety check); the video says "most likely", not a certain cause, and tags a draught or a sooty flame as other possible causes.
- **Significant figures.** Q1: 20.0 (3) and 1.10 (3) → 3. Q2: 15.0 (3), 45.0% (3) → 3. Q3: Δm 1.62 (3), ΔT 18.2 (3) → 3.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"Water in q, fuel in n."** (chem-m7-p03, author-written). Assumptions: q is the heat taken in by the water only (the can's heat capacity ignored); n is the fuel's mass lost, assuming all of it burned. Q3 is the case where the second assumption most likely fails, and the walkthrough says so; that is why the aid is paired with the second line.
- **"Only drop a result when you can explain it."** Author-written for this video: a rule applied from skills-s07's word, feature, fix, new to this video. Condition: an explained cause (here, most likely mass lost without burning) justifies exclusion; an unexplained outlier should be repeated or reported, not silently dropped. Holds for Q3.
- **Bank:** the Module 7 bank's "Your spirit-burner result will be too small" (*Trap*) supports Q1 (b) and Q3's "about half"; its "moles = mass lost ÷ molar mass" is "fuel in n". Not used as a separate line.

## Narration length estimate

Counted by script (17 scenes; `### N.` headings with letter suffixes, "> " lines joined, bold markers removed, key-notes line as the standard notes line), at 13.3 characters per second, 22 Oct; recounted for Revision 2 on 23 Oct (lines starting `> ` only).

| Scene | Characters |
| --- | --- |
| 1 hook | 455 |
| 2a q1-question | 338 |
| 2b q1-q-and-n | 409 |
| 2c q1-dh | 349 |
| 2d q1-percent | 392 |
| 2e q1-mistake | 181 |
| 3a q2-question | 331 |
| 3b q2-heat | 371 |
| 3c q2-mass | 356 |
| 3d q2-mistake | 264 |
| 4a q3-question | 374 |
| 4b q3-trial3 | 399 |
| 4c q3-judge | 452 |
| 4d q3-mean | 351 |
| 4e q3-mistake | 135 |
| 5 decision-board | 367 |
| 6 key-notes | 75 |
| **Total** | **5,599** |

**5,599 characters, 1,010 words, 17 scenes** (inside 5,500 to 6,800). Revision 1 counted 5,563; Revision 2 adds 36 (2c −2, 2d +9, 2e −1, 4c +36, 4d −6). The first draft counted 5,456; three short additions brought it inside the band without new content (2b "Keep every digit for now."; 4b's comparison clause; 4d's "so the three that fit look like normal trials"). Timing: speech about 421 s; padding about 34 s (17 scenes at 2 s); stated holds about 3 s (hook 1 s, decision board 2 s); countdowns 30 s (three); the quiet notes hold beyond its speech about 55 s: **about 543 s, 9.1 minutes**, under the 9.5-minute cap. Walkthrough speech per question (excluding the question scene): Q1 about 100 s, Q2 about 75 s, Q3 about 98 s. Room remains (about 27 s) if the preview shows a walkthrough needs a slower pace.

Reserve trims if the voiced take runs over 9.5 minutes: (1) 2d's "The rest warmed the can and the air." (about 3 s; the split bar carries it); (2) 4b's last sentence (about 4 s; the trial strip carries it). Do not cut below 5,500 without replacing the content.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-q-and-n, q1-dh, q1-percent, q1-mistake, q2-question, q2-heat, q2-mass, q2-mistake, q3-question, q3-trial3, q3-judge, q3-mean, q3-mistake, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question. key-notes is the quiet notes hold (about 60 s). Lesson key `m7g02` (route chem-m7-g02). Suggested explainer folder `src/explainer/lessons/chem-m7-g02`; build folder `docs/production/claude-pm/lessons/m7g02` (root to confirm). Review evidence paths `checks/m7g02-learning-review.md` and `checks/m7g02-claude-science-check.md` (to be written).

## Assets

Have (reuse; inspected 22 Oct): `public/assets/chemistry/m7-ethanol-fuel-bottle-v1.png` (Q2 card; amber bottle, no label; coded label "ethanol"). Uniform scale only, never stretched.

Dependent on chem-m7-p03's commission (not new for G02; not yet in `public/assets/chemistry/` on 22 Oct): `m7-spirit-burner-calorimeter-v1.png` (Q1 card, 2d), `m7-spirit-burner-on-balance-v1.png` (2b), `m7-spirit-burner-calorimeter-shield-v1.png` (Q3 card). G02 builds after they arrive; a coded set-up is not an option (owner rule). p03's evaporation wisp thumbnail (4c) is a coded part, imported.

Need: **no new plates.**

Coded: question cards, answer boxes, check strip and decision board, equation and working lines, the job sorter, the heat split bar, the number line, the trial strip, the balance readout, the error-chain row, crossed chips, countdown ring. No people or hands.

## Codex asset brief

No artwork requested. Start only after the learning review and science check pass and the owner gives the go-ahead. Also requested (not art): (1) error-only re-check of every value under "Numbers to verify", including Codex's own Q1 dataset; (2) confirm that no question closely paraphrases a NESA HSC question (the author's check found Chemistry 2019 Q23(a) nearest; please search the 2023 question paper, which could not be extracted); (3) confirm the Year 11 Module 4 dotpoint wording quoted in the header against the 2017 syllabus; (4) confirm no em dash in this file.

## YouTube metadata (draft)

- **Title:** Combustion Enthalpy Calculations: HSC-Style Practice | Year 12 Chemistry Module 7 (81 characters)
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module7/lesson11

  Practise three HSC-style spirit-burner calculations. Find the molar enthalpy of combustion of methanol from raw burner data and the percentage of its heat that reached the water. Run the calculation backwards to find the mass of ethanol needed when only part of the heat reaches the water. Then decide whether an odd propan-1-ol trial belongs in the mean, by finding its cause first. Water in q, fuel in n. Pause and try each question, then work through it step by step. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 7, Organic Chemistry.
  Syllabus dotpoint (NSW Chemistry Stage 6, 2017, Module 7):
  "conduct a practical investigation to measure and reliably compare the enthalpy of combustion for a range of alcohols"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisites: Measuring the enthalpy of combustion of alcohols (practical). Practical questions: validity, reliability, accuracy (exam skills). Next: Where can an alcohol reaction lead?

  #Year12Chemistry #EnthalpyOfCombustion #HSCScience"
- **syllabusDotpoints:** the quoted dotpoint above. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C7-IQ4-03, p55).
- **Lesson link:** site lesson 11; root to confirm.
- **Playlist:** Year 12 Chemistry: Module 7, Organic Chemistry (2017 syllabus), after chem-m7-p03 and skills-s07 (playlist order 12).

## Open decisions

- **Three questions, not four (recommended keep).** A fourth (for example, energy per gram from experimental data) would push past 9.5 minutes; energy per gram belongs to c07.
- **Q1's value: closed (Revision 2).** Root chose the alternative final mass (150.54 g: 1.10 g; −365 kJ mol⁻¹, 50.3%), so p03's −383 is not repeated.
- **Q2's reverse demand (recommended keep).** It extends the route's "calculate molar enthalpy" to its inverse. If root wants the video strictly forward, replace Q2 with a second forward calculation for butan-1-ol.
- **Lesson key** (`m7g02`) and the **lesson link**: root to confirm.

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 30 s per scene, three or four scenes per question; this is the content, not end-of-video feedback. Check that no walkthrough re-teaches p03's method or error chain (each is recalled in one clause, with p03's parts reused).
- **No repeated examples.** p03 worked methanol at 200.0 g and 1.40 g (scaled), and set ethanol at 200.0 g (A1) and a methanol and butan-1-ol explanation (A2); c07 used the hook dataset (100.0 g, 0.74 g) per gram. G02's ethanol (Q2) and propan-1-ol (Q3) data are new.
- **Pronunciation.** "propan-one-ol"; "delta H", "delta T", "q" and "n" as letters; "zero point zero three four three three" digit by digit; "thirteen hundred and sixty seven"; "nineteen thousand and nineteen".
- **Doubts.** (a) Q3's exclusion relies on an inferred cause (a draught or a sootier flame would give the same signature; the narration names the likeliest cause, the screen tags the others, and the narration adds "repeat that trial if you can"). (b) Closed in Revision 2: 2d now says "typical for a spirit burner and can".
- **No em dashes** in this file (searched).
