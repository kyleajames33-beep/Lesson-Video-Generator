# G01 (Chemistry, Module 6): Strong acid and base pH, dilution and mixing: HSC-style practice (design)

Status: Revision 3 (22 Oct): Codex check 96 resolved; ready to voice.
Earlier status, Revision 2 (21 Oct): learning review and Claude science check resolved; needs Codex error check before voicing.

## Changes in Revision 3 (22 Oct)

No changes: Codex check 96 found no errors in this design. Narration recounted by script on 22 Oct: 5,564 characters, unchanged; timing unchanged.

Revision 2 changes (21 Oct), resolving `../checks/m6g01c-learning-review.md` and `../checks/m6g01c-claude-science-check.md`:

- **Q4 new data (learning S1).** Q4 repeated C07 worked example 3's barium hydroxide (0.0800 mol/L). It now uses 40.0 mL of 0.0500 mol/L Ba(OH)₂ with the same 30.0 mL of 0.100 mol/L HCl. The moles are unchanged (n(OH⁻) 0.00400 mol, n(H₃O⁺) 0.00300 mol, excess 0.00100 mol), the total volume becomes 70.0 mL, [OH⁻] 0.0143 mol/L, pOH 1.845, pH 12.155; the crossed one-OH⁻ answer is pH 1.845 (mirror: 1.845 + 12.155 = 14.000). Updated in 5a, 5b, 5c, 5d, the Decisions table and changes note, Precision, the practice model, "Numbers to verify" and the Doubts.
- **Hook (science S1).** Removed the exam-frequency claim ("don't often") and the absolute "Every one": "A strong acid or base question can do more than hand you a concentration ... Each one here comes down to three checks."
- **2c cue (learning M1).** The unspoken cue "tiny" is now "as it should be in an acid".
- **C07 overlap recorded (learning M2).** The Decisions sentence now states the overlaps honestly and lists C07's worked example 3 with its 0.0800 mol/L Ba(OH)₂. The optional switch of Q1 to hydrobromic acid is declined (see the Resolution in the learning review).
- **Hook ring removed (learning M3).** The hook's "Ba(OH)₂" thumbnail has no ring; the ring appears only in 5b.
- **Key notes (learning M4, science M1).** Notes 1 and 4 shortened; note 3 now carries the "well below 7" condition.
- **Author notes (science M2).** Doubt (d) on 14.00 as exact; solubility note replaced with the CRC octahydrate figure.
- Narration recounted by script: 5,564 characters, about 9.3 minutes with holds (see "Narration length estimate").

Revision 1 (21 Oct): first design, from the pre-design plan `../pre-design/chem-m6-g01-practice-plan.md` (Codex brief 95) as reviewed here. Narration and timing: see "Narration length estimate". Nothing recorded; human listening pending.

Working title: "Strong acid and base pH, dilution and mixing: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception, owner 16 Oct). Each question is shown as an exam would word it (stem, data, demand); it ends "Pause here to answer." with a 10 s countdown and keeps the full question on screen during the attempt; the walkthrough underlines each given in the question text at the cue where it is used (owner rule, 18 Oct: no givens card); it reasons one stage per scene and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `chem-m6-g01` (playlist order 11, after chem-m6-c07, before chem-m6-c08). Production label G01 (Chemistry, Module 6).

Scope: follows the format of `bio-m6-g01.md` (Revision 3) and the voice and calculation staging of `chem-m6-c07.md`, `chem-m6-c08.md` and `chem-m6-c10.md` (task line, equation strip, values with units, one stage per line, earlier lines dim, kept chips). In a practice video the question card replaces the givens card: the givens are underlined in the question text as they are used.

Syllabus dotpoints (NSW Chemistry Stage 6, 2017, p53; `C6-IQ2-02` and `C6-IQ2-06` are this project's local catalogue IDs, not codes printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)"

"calculate the pH of the resultant solution when solutions of acids and/or bases are diluted or mixed"

Practice and transfer only: the coverage rows stay with chem-m6-c07; G01 adds a practice row, not first coverage.

**Boundary:** starts at the route's "Present an unfamiliar pH task and protect an attempt" and stops at its "Work through moles, total volume and logarithms, then check the result". Four strong acid and strong base questions, each with a trap: a dilute strong acid and the hydroxide in it; a "made up to" dilution; a mixture given by pH values; a barium hydroxide mixture where forgetting the 2 flips which reactant is in excess. Each walkthrough ends with a sense check (the pH is on the right side of 7, or it moved by the right amount). **Not here:** weak acid and weak base pH (chem-m6-c08, the next video); Ka and pKa (chem-m6-c10); sulfuric acid pH (C07 states only the "assume both" condition; no item here, see Open decisions); buffers (chem-m6-c11); salt and equivalence-point pH (chem-m6-c13, c14); Kw at other temperatures (C07 scene 6; every question here is at 25 °C).

## Decisions

- **Route entry.** `../../module6-video-route-draft.json`: chem-m6-g01, "Strong acid and base pH, dilution and mixing practice", type practice, site lessons L08 and L11, syllabus actions C6-IQ2-02 and C6-IQ2-06, prerequisite chem-m6-c07, next chem-m6-c08, main learner question "Which pH method fits dilution and mixing?". `../../module6-route-review-claude.md`: "Chemistry first: c01 to c08 and g01, because pH calculations are the heaviest exam content"; design order G01, G02, then the practicals (decisions on brief 95, 21 Oct).
- **One main question:** *When a strong acid or base question dilutes a solution, mixes two, or hides a 2 in a formula, which method fits, and how do you check the answer?* Heading on screen: "Strong acid and base pH: which method?"
- **Why a practice video, and why these four questions.** C07 teaches each method once with a worked example and two short attempts. Students lose these questions on transfer: they treat a dilute strong acid as weak, think an acid has no hydroxide, add the water to the "made up to" volume, average two pH values, and forget the second hydroxide in barium hydroxide. Each question hides one of these traps in a new case, so students must apply the rule rather than recall C07's example. No question repeats a C07 worked example or attempt. Q3's two solutions are the C07 hook's 0.10 mol/L acid and base, given here only as pH values, and Q2 follows C07's dilution pattern with a new trap: C07 used 0.10 mol/L HCl and NaOH, 0.025 mol/L HNO₃, pH 3.40 backwards, 0.0040 mol/L Ca(OH)₂, 25.0 mL of 0.200 mol/L HCl made up to 500 mL, 40.0 mL of 0.150 mol/L HCl with 60.0 mL of 0.0800 mol/L Ba(OH)₂ (excess base), 25.0 mL HNO₃ with 35.0 mL KOH (excess acid) and KOH at pH 12.30. Q1 uses nitric acid, C07's worked example 1 acid, at a new concentration and with a new [OH⁻] demand and trap. Q4 uses a new Ba(OH)₂ concentration and volume (Revision 2).

  | Q | Case (new) | Method | Trap | Check | Core |
  |---|---|---|---|---|---|
  | 1 | 0.00250 mol/L nitric acid: pH, then [OH⁻] | strong acid direct; Kw | "dilute means weak"; an acid still has hydroxide | [OH⁻] is tiny, as an acid's should be | C05, C07 |
  | 2 | 25.0 mL of 0.120 mol/L HCl made up to 250.0 mL | dilution through moles | "made up to" is the final volume, not the water added | tenfold dilution, pH up by exactly 1 | C07 |
  | 3 | 30.0 mL HCl at pH 1.00 mixed with 20.0 mL NaOH at pH 13.00 | pH to concentration, then neutralise first, then dilute | averaging the two pH values | acid in excess, so pH below 7 | C07 |
  | 4 | 40.0 mL of 0.0500 mol/L Ba(OH)₂ with 30.0 mL of 0.100 mol/L HCl | count the hydroxides; excess base; pOH | forgetting the 2 makes the acid look in excess | base in excess, so pH above 7 | C05, C07 |

- **Changes from the pre-design plan (recorded).** Q1 keeps the plan's dilute-strong-acid idea (nitric acid in place of hydrochloric acid; the plan's 2.60 becomes 2.602 under the strict decimal-places rule) and adds the [OH⁻] part, so the first dotpoint's four quantities are all practised across the set. Q2 keeps the plan's numbers (pH 1.921, not 1.92, under the strict rule) and moves the crossed mistake to the "made up to" trap; the plan's "the acid concentration is still 0.120 mol/L" becomes the check. Q3 gives the two solutions as pH values instead of concentrations, so the plan's "average the two pH values" mistake becomes the natural trap, and the case is no longer the C07 attempt-1 pattern (excess acid from given concentrations). Q4 keeps the plan's barium hydroxide idea, but uses 30.0 mL of HCl (not 35.0 mL), so that the excess (0.00100 mol) keeps three significant figures after the subtraction, and forgetting the 2 gives exactly the mirror answer (1.845 against 12.155). Revision 2 changes the barium hydroxide to 40.0 mL of 0.0500 mol/L (Revision 1's 0.0800 mol/L repeated C07 worked example 3); the moles of each ion are unchanged.
- **Rising difficulty.** Q1 is one strong acid and Kw (warm-up). Q2 adds a volume change and a sense check by the log scale. Q3 needs a pH-to-concentration step for both an acid and a base before the mixing method. Q4 needs the formula ratio, the excess, the total volume and the pOH route, and the trap changes the side of 7.
- **Site alignment.** Site lessons L08 and L11 (`../site-extracts/chem-m6-l08.md`, `chem-m6-l11.md`; full pages read for C07, 19 Oct). Reused site framings: L08 "pH = −log[H₃O⁺]" and "lower pH means more H₃O⁺"; L08 card 4 "dilution: moles conserved, pH approaches 7"; L08 card 5 "V(total) must be used"; L11 "identify the acid or base type before choosing a method", "the pH of mixed solutions: calculate H⁺ and OH⁻ moles, find the excess, then divide by total volume", and its error list ("wrong mixing volume", "pOH reported as pH"); L11's Ba(OH)₂ with HNO₃ mixing task (reshaped into Q4 with new numbers and an acid of a different name). Bank aid line (Module 6 bank, mixing): "Students who average the two pH values, or forget the total volume, lose the marks" (Q3, without the marks claim). Site errors relevant here are already recorded in `chem-m6-c07.md` (the "diprotic" label for Ca(OH)₂ and Ba(OH)₂, site new correction 1, matters for Q4: the video says "releases two hydroxide ions", never "diprotic"; sulfuric acid as 2c; neutral pH 7 without "at 25 °C"). No new site errors found for these items.
- **Entry knowledge (do not re-teach; recall in one clause each).** From C05: strong acids and bases ionise or dissociate completely; nitric and hydrochloric acids are strong; barium hydroxide is a strong base releasing two OH⁻ per formula unit; strength is not concentration. From C07: pH = −log₁₀[H₃O⁺], [H₃O⁺] = 10⁻ᵖᴴ; decimal places in pH = significant figures in [H₃O⁺]; Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C in every aqueous solution; pOH and pH + pOH = 14.00 at 25 °C; dilution conserves moles and moves pH toward 7; mixing: neutralise first, then divide the excess by the total volume. From C03: H⁺ + OH⁻ → H₂O, and the reactant that runs out. Year 11: n = cV with V in litres; "made up to" in volumetric work (C07 scene 9 showed a flask made up to the mark). Not assumed: any weak-acid method.
- **Start and stop.** Starts at an unseen strong acid or base pH question; stops after four walkthroughs, each with its trap named and a sense check, and a decision board of first moves. No new method.
- **Placement and handoff.** After C07, before C08. Scene 6 hands off: "Next, weak acids, with an ICE table." C08 never says "last video" (it says "the strong acid and base video"), so the playlist stays consistent.
- **Precision (owner rule, strict).** pH (or pOH) has as many decimal places as [H₃O⁺] (or [OH⁻]) has significant figures; a concentration from a pH has as many significant figures as the pH has decimal places (the C07 rule in reverse); subtraction keeps decimal places; 14.00 is treated as exact at 25 °C (C07 author note c). Intermediate values keep guard digits and logs are taken from unrounded values. Values: Q1 2.602 and 4.0 × 10⁻¹² mol/L (two significant figures, from Kw); Q2 1.921 (and 0.921 before dilution); Q3 1.70 (data at two significant figures from the pH values); Q4 12.155. Crossed values follow the same rule (1.962, 7.00, 1.845).
- **Visual system.** One practice board throughout, in the bio-m6-g01 layout: top-left the **question card** (stem, data and demand, as an exam prints them, with the tag "HSC-style question, written for HSCScience"), kept readable through the whole question; the working fills the right two thirds; a **type badge** top-right ("Strong acid", "Dilution", "Mixing", "Mixing: excess base"), hidden during each attempt where it would name the method. When the walkthrough starts, the card shrinks to a strip and each given is **underlined in amber in the question text** at the cue where it is used (no givens card). A **check strip** on the far left carries three rows, "what's in there?", "in what volume?", "does it make sense?", and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Working follows the C07 staging: a short task line, an equation strip where the reaction matters, one stage per line, each earlier line dimming, kept chips for the one result the next scene needs. Colour key from C07: H₃O⁺ teal, OH⁻ violet, water pale blue, spectator ions grey, meter readouts amber digits, pOH lines violet-tinted, pH lines teal-tinted; amber is used only for underlined givens and for the sense check. **Clutter rule (owner):** besides the question strip and the check strip, at most about three bright text items in the working area at once; each tag fades when the next cue lands.
- **Real objects are painted** (existing plates only, listed under Assets): beakers, the pH meter, the pipette and the volumetric flask. Plates move along coded arcs; no hands and no people.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own spoken, crossed-out classic mistake (owner rule for practice walkthroughs). Only one crossed chip per question (no second, unspoken chip in this video).
- **Memory aids (bank, checked below).** Recalled, not re-taught: "Decimal places in pH = significant figures in [H⁺]" (Q1, Q2), "One pH unit is ten times" (Q2 check), "pH + pOH = 14, at 25 °C" (Q3, Q4), "Mixing an acid and a base: neutralise first, then dilute" (Q3, Q4), "Count the hydroxides" (Q4), and "Strength is how much it breaks up. Concentration is how much you put in." (C05's aid, as a grey tag in Q1). No new aid.
- **Legacy and shared code.** No legacy logic. Reuse (no prototype components): explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`); C07 parts from `src/explainer/lessons/chem-m6-c07/parts.tsx`: `LabelBeaker` (labelled beaker plates), `FullMeter` (the meter plate with a coded amber readout), `PipettePlate` and `FlaskFill` (Q2), `VolBox` (the widening volume outline with fixed tokens), `IonBars` (the C03 two-bar "runs out first" comparison), `LogRuler` and `PHTrack` (Q2 check, Q3 and Q4 sense checks), `KeptChip`, `Tie`, `DimG`, `ShrinkAt`, `StepAfter`; bio-m6-g01's board parts from `src/explainer/lessons/bio-m6-g01/board.tsx`: `PauseHold`, `AnsBox`, `Line`, and `Checks` (its row labels are fixed for Biology, so either add a `labels` prop or copy it lesson-local with the three chemistry rows; root decides at build). B6a's `WrongChip` and `Cross` for the crossed mistakes. New coded items (lesson-local): the decision board.

Main question: *When a strong acid or base question dilutes a solution, mixes two, or hides a 2 in a formula, which method fits, and how do you check the answer?*
Entry knowledge: see above. Students start Year 12 and have watched C01 to C07.
Stops after: calculating the pH of a dilute strong acid and the hydroxide concentration in it with Kw; calculating pH after a "made up to" dilution through moles, and checking the change with the log scale; converting two pH values to concentrations and calculating the pH after mixing, using the excess and the total volume; calculating the pH after mixing barium hydroxide with hydrochloric acid, counting two hydroxide ions per formula unit and finishing through pOH; checking each answer is on the right side of 7.
Handoff: weak acid and weak base pH with an ICE table (route chem-m6-c08).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Pronunciations as in Review notes.

### 1. hook
> A strong acid or base question can do more than hand you a concentration and ask for the pH. It can dilute it, mix it with a base, or hide a two in a formula. Each one here comes down to three checks. **What's in there**, and how much? **In what volume**? And **does the answer make sense**? Here are four HSC-style questions. Pause and try each one, then we'll work it through, one step at a time.

Visual: heading "Strong acid and base pH: which method?" writes on. Four small stimulus thumbnails fan out on the right on "dilute it, mix it with a base, or hide a two": `m6-volumetric-flask-v1.png` (small, coded label "250.0 mL"), two `m6-beaker-v1.png` plates tilting together, and a typeset "Ba(OH)₂" (no ring: the ring belongs to 5b, where it explains the step). On the three checks, the check strip builds on the left, one row per cue: "what's in there?" (a teal and a violet token), "in what volume?" (a small volume outline), "does it make sense?" (a short pH track 0 to 14 with a tick on one side of 7). On "four HSC-style questions" the thumbnails become four numbered question cards with one shared tag line beneath them, "HSC-style questions, written for HSCScience". Hold about 1 second; the check strip shrinks to the far left.

### 2a. q1-question (question 1: a dilute strong acid)
> Question one. A nitric acid solution has a concentration of zero point zero zero two five zero moles per litre at twenty five degrees. Calculate its pH. Then calculate the hydroxide ion concentration in the same solution. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on as an exam question: "A solution of nitric acid, HNO₃, has a concentration of 0.00250 mol/L at 25 °C." Demands: "(a) Calculate the pH of the solution." "(b) Calculate the hydroxide ion concentration, [OH⁻], in the solution. (Kw = 1.0 × 10⁻¹⁴ at 25 °C)". Two answer boxes. A small `m6-beaker-v1.png` with a coded label "HNO₃(aq), 0.00250 mol/L" sits at the card's upper right. Nothing answer-bearing. **Countdown ring 10 seconds** after "Pause here to answer."; the check strip dims; the whole card stays on screen.

### 2b. q1-ph (what's in there)
> Nitric acid is **strong**, with one proton per molecule, so every molecule gives its proton to water, and the hydronium concentration equals the acid's, two point five zero times ten to the minus three. The negative log gives **two point six zero two**. Three significant figures in the concentration, so **three decimal places** in the pH.

Visual: the card shrinks to a strip. Type badge "Strong acid". On "strong" "nitric acid, HNO₃" underlines amber and the check strip's "what's in there?" row lights; the equation strip writes "HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)" (single arrow pulses once). "0.00250 mol/L" underlines and the first line writes: "[H₃O⁺] = 0.00250 mol/L = 2.50 × 10⁻³ mol/L"; the strip dims. On "two point six zero two" the next line writes "pH = −log(2.50 × 10⁻³) = 2.602" and the first line dims; answer box (a) fills "pH = 2.602". On "three decimal places" a pen ring circles "250" in 2.50 with a chip "3 s.f." and a tie runs to ".602" with "3 d.p." (the C07 rule card returns small as a grey tag "C07: decimal places = s.f. in [H₃O⁺]", fading at the end of the sentence). Strip: "what's in there?" ticks.

### 2c. q1-hydroxide (Kw)
> Now the hydroxide. An acid solution still has some, because water's own equilibrium is still there. K w is hydronium times hydroxide, so divide **one point zero times ten to the minus fourteen** by the hydronium. That's **four point zero times ten to the minus twelve** moles per litre, hundreds of millions of times less than the hydronium, as it should be in an acid.

Visual: the pH line dims to a kept chip "pH = 2.602". On "Now the hydroxide" a small lens shows many teal tokens and one lone violet token among pale blue water (tag "a little OH⁻ from water", fading on "K w"). On "one point zero times ten to the minus fourteen" "Kw = 1.0 × 10⁻¹⁴ at 25 °C" underlines in the strip and the line writes "[OH⁻] = Kw ÷ [H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 2.50 × 10⁻³"; on "four point zero times ten to the minus twelve" it completes "= 4.0 × 10⁻¹² mol/L" with a small grey tag "2 s.f., from Kw" and answer box (b) fills. On "as it should be in an acid" C07's `IonBars` thumbnail shows a tall teal bar and a sliver of violet, with "[H₃O⁺] > [OH⁻]: acidic ✓"; the lens fades. Strip: "does it make sense?" ticks.

### 2d. q1-mistake (the classic mistake)
> The classic mistake is thinking an acid this dilute must be weak. Strength is about how fully it ionises, not how much is there. Dilute nitric acid is still a strong acid, so the hydronium still equals its concentration.

Visual: a chip "0.00250 mol/L is dilute, so HNO₃ is weak here" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "strong = fully ionised; dilute = small c". On "how fully it ionises, not how much is there" a grey tag writes small: "C05: strength is how much it breaks up; concentration is how much you put in". Hold about 1.5 seconds.

### 3a. q2-question (question 2: made up to the mark)
> Question two. A student uses a pipette to transfer twenty five millilitres of zero point one two zero moles per litre hydrochloric acid into a volumetric flask, then makes it up to **two hundred and fifty** millilitres with water. Calculate the pH of the diluted solution. Pause here to answer.

Visual: board clears. Type badge hidden. `m6-volumetric-pipette-filler-v1.png` and `m6-volumetric-flask-v1.png` sit small at the card's upper right, untouched (no motion during the attempt). The card writes on: "A student uses a pipette to transfer 25.0 mL of 0.120 mol/L hydrochloric acid into a 250.0 mL volumetric flask, then makes the solution up to the mark with distilled water." Demand: "Calculate the pH of the diluted solution at 25 °C." One answer box. **Countdown 10 seconds**; strip dims.

### 3b. q2-moles (in what volume)
> Adding water doesn't change the moles of acid, so start with moles. Zero point one two zero times zero point zero two five zero litres is **zero point zero zero three zero zero** moles. **Made up to** means that's the final volume, two hundred and fifty millilitres. So the concentration is zero point zero one two zero moles per litre, and the pH is **one point nine two one**.

Visual: the card shrinks to a strip; type badge "Dilution". The pipette plate tilts along a coded arc into the flask, and a coded water fill rises to the calibration ring (C07 `PipettePlate` and `FlaskFill`); a `VolBox` lens shows six teal tokens whose outline widens tenfold while the count stays six (tag "same moles, bigger volume", fading on the next line). Task line: "Find the pH after dilution". On "zero point zero zero three zero zero" "25.0 mL of 0.120 mol/L" underlines and the line writes "n(H₃O⁺) = 0.120 × 0.0250 = 0.00300 mol"; the plates shrink to grey thumbnails. On "Made up to" "up to the mark" and "250.0 mL" underline and the flask thumbnail's ring pulses; the line writes "V = 250.0 mL = 0.2500 L (final volume)"; the n line dims. Then "c = 0.00300 ÷ 0.2500 = 0.0120 mol/L", and on "one point nine two one" "pH = −log(0.0120) = 1.921"; the earlier lines dim and answer box fills "pH = 1.921". Strip: "what's in there?" and "in what volume?" tick.

### 3c. q2-check (does it make sense)
> Does that make sense? The volume went up ten times, so the concentration fell ten times. One pH unit is ten times, so the pH should rise by **exactly one**. The undiluted acid had a pH of zero point nine two one, so **one point nine two one** checks out.

Visual: the working lines dim to a kept chip "pH = 1.921". C07's `LogRuler` draws small across the lower third (concentrations 10⁰ to 10⁻³ above, pH 0 to 3 below). On "ten times" a marker labelled "0.120" slides along the concentration scale to "0.0120", bracket "÷ 10". On "exactly one" the pH scale under it shows a bracket "+1.000" from a grey "0.921 (before)" to "1.921 (after)". On "checks out" the kept chip takes a tick and the bank aid writes small: "One pH unit is ten times." Strip: "does it make sense?" ticks.

### 3d. q2-mistake (the classic mistake)
> The classic mistake is adding the two volumes, as if two hundred and fifty millilitres of water went in. That gives two hundred and seventy five millilitres, and a pH of one point nine six two. Made up to means the total is two hundred and fifty.

Visual: a chip "V = 25.0 + 250.0 = 275.0 mL: pH 1.962" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "made up to = final volume". On "Made up to means the total" the flask thumbnail returns with its ring and a coded label "250.0 mL in total". Hold about 1.5 seconds.

### 4a. q3-question (question 3: mixing two pH values)
> Question three. Thirty millilitres of hydrochloric acid with a pH of **one point zero zero** is mixed with twenty millilitres of sodium hydroxide solution with a pH of **thirteen point zero zero**, at twenty five degrees. Assume the volumes add. Calculate the pH of the mixture. Pause here to answer.

Visual: board clears. Type badge hidden. Two `m6-beaker-v1.png` plates sit at the card's upper right with coded labels "HCl(aq), pH 1.00, 30.0 mL" and "NaOH(aq), pH 13.00, 20.0 mL" (no meters, no motion). The card writes on: "30.0 mL of hydrochloric acid with a pH of 1.00 is mixed with 20.0 mL of sodium hydroxide solution with a pH of 13.00. Both solutions are at 25 °C. Assume the volumes add." Demand: "Calculate the pH of the resulting mixture." One answer box. **Countdown 10 seconds**; strip dims.

### 4b. q3-moles (pH to concentration to moles)
> You can't mix pH values, because they're logs, so turn each one into a concentration. A pH of one point zero zero means **zero point one zero** moles per litre of hydronium. For the base, the pOH is fourteen minus thirteen, so the hydroxide is also zero point one zero. In moles, that's **zero point zero zero three zero** of hydronium and zero point zero zero two zero of hydroxide.

Visual: the card shrinks to a strip; type badge "Mixing". Task line: "Find the pH of the mixture". On "zero point one zero" "pH of 1.00" underlines and the line writes "[H₃O⁺] = 10⁻¹·⁰⁰ = 0.10 mol/L" with a small grey tag "2 d.p. → 2 s.f." (fades at the end of the sentence). On "the pOH is fourteen minus thirteen" "pH of 13.00" underlines; the line writes "pOH = 14.00 − 13.00 = 1.00; [OH⁻] = 0.10 mol/L" (violet-tinted); the first line dims. On "zero point zero zero three zero" "30.0 mL" and "20.0 mL" underline and two lines write together: "n(H₃O⁺) = 0.10 × 0.0300 = 0.0030 mol" (teal) and "n(OH⁻) = 0.10 × 0.0200 = 0.0020 mol" (violet); the concentration lines dim. Strip: "what's in there?" ticks.

### 4c. q3-excess (neutralise first, then dilute)
> Neutralise first: hydronium and hydroxide make water until the hydroxide **runs out**, leaving **zero point zero zero one zero** moles of hydronium. Then dilute: it spreads through all **fifty millilitres**, so it's zero point zero two zero moles per litre, and the pH is **one point seven zero**. Check: acid was in excess, so the pH should be below seven, and it is.

Visual: the two n lines fold into C07's `IonBars` two-bar comparison (teal "H₃O⁺ 0.0030 mol", violet "OH⁻ 0.0020 mol"); on "runs out" the violet bar empties as the same length of teal empties, leaving a teal stub; chip "excess H₃O⁺ = 0.0010 mol". On "fifty millilitres" both volumes underline in the strip and the line writes "V(total) = 30.0 + 20.0 = 50.0 mL = 0.0500 L", the teal stub spreading into a wide outline; then "[H₃O⁺] = 0.0010 ÷ 0.0500 = 0.020 mol/L" and, on "one point seven zero", "pH = −log(0.020) = 1.70"; earlier lines dim; answer box fills "pH = 1.70". On "Check" a `PHTrack` writes small under the answer: 0 to 14 with a teal wall at 7 and a marker at 1.70 on the acid side, tag "acid in excess: below 7 ✓". Strip: "in what volume?" and "does it make sense?" tick.

### 4d. q3-mistake (the classic mistake)
> The classic mistake is averaging the two pH values. One and thirteen average to seven, neutral. But pH is a log scale, and there's more acid than base, so the mixture is still acidic.

Visual: a chip "(1.00 + 13.00) ÷ 2 = 7.00, neutral" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "work in moles, not pH". On "more acid than base" the `IonBars` thumbnail pulses its leftover teal stub. Hold about 1.5 seconds.

### 5a. q4-question (question 4: barium hydroxide and hydrochloric acid)
> Question four. Forty millilitres of zero point zero five zero zero moles per litre barium hydroxide is mixed with thirty millilitres of zero point one zero zero moles per litre hydrochloric acid, at twenty five degrees. Assume the volumes add. Calculate the pH of the resulting solution. Pause here to answer.

Visual: board clears. Type badge hidden. Two `m6-beaker-v1.png` plates at the card's upper right, coded labels "Ba(OH)₂(aq)" and "HCl(aq)". The card writes on: "40.0 mL of 0.0500 mol/L barium hydroxide, Ba(OH)₂, is mixed with 30.0 mL of 0.100 mol/L hydrochloric acid at 25 °C. Assume the volumes add." Demand: "Calculate the pH of the resulting solution." One answer box. Nothing answer-bearing (no ring on the 2). **Countdown 10 seconds**; strip dims.

### 5b. q4-excess (count the hydroxides)
> Count the hydroxides first. Each barium hydroxide releases **two**, so the hydroxide is two times zero point zero five zero zero times zero point zero four zero zero litres, **zero point zero zero four zero zero** moles. The acid gives zero point zero zero three zero zero moles of hydronium. So this time the **hydroxide** is in excess, by zero point zero zero one zero zero moles.

Visual: the card shrinks to a strip; type badge "Mixing: excess base". Equation strip: "Ba(OH)₂(aq) → Ba²⁺(aq) + 2OH⁻(aq)". On "two" the subscript 2 in "Ba(OH)₂" in the strip gets a pen ring and two violet tokens drop from it; "40.0 mL of 0.0500 mol/L barium hydroxide" underlines and the line writes "n(OH⁻) = 2 × 0.0500 × 0.0400 = 0.00400 mol"; the equation strip dims. On "zero point zero zero three zero zero" "30.0 mL of 0.100 mol/L hydrochloric acid" underlines and "n(H₃O⁺) = 0.100 × 0.0300 = 0.00300 mol" writes. On "hydroxide" the two lines fold into `IonBars` (violet longer); the teal bar empties first, leaving a violet stub; kept chip "excess OH⁻ = 0.00100 mol". Strip: "what's in there?" ticks.

### 5c. q4-ph (total volume, pOH, pH)
> That spreads through **seventy millilitres**, so the hydroxide is zero point zero one four three moles per litre. Hydroxide is what's left, so go through the pOH: one point eight four five. Then the pH is fourteen minus that, **twelve point one five five**. Check: base in excess, so the pH should be above seven, and it is.

Visual: the bars shrink to a thumbnail beside the kept chip. On "seventy millilitres" both volumes underline and the line writes "V(total) = 40.0 + 30.0 = 70.0 mL = 0.0700 L"; then "[OH⁻] = 0.00100 ÷ 0.0700 = 0.0143 mol/L"; then "pOH = −log(0.014286) = 1.845" (violet-tinted); then, on "twelve point one five five", "pH = 14.00 − 1.845 = 12.155"; each earlier line dims; answer box fills "pH = 12.155". On "Check" the `PHTrack` returns small with a marker at 12.155 on the base side, tag "base in excess: above 7 ✓". Strip: "in what volume?" and "does it make sense?" tick.

### 5d. q4-mistake (the classic mistake)
> The classic mistake is forgetting the two. Then the base gives only zero point zero zero two zero zero moles, the acid looks like it's in excess, and you get one point eight four five, the wrong side of seven entirely.

Visual: a ghost line "n(OH⁻) = 0.0500 × 0.0400 = 0.00200 mol" writes under the real one with a ghost `IonBars` pair where the teal bar is longer; a chip "excess H₃O⁺: pH 1.845" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "Ba(OH)₂ gives 2 OH⁻". On "the wrong side of seven" the `PHTrack` thumbnail shows a grey crossed marker at 1.845 and the real marker at 12.155. Hold about 1.5 seconds.

### 6. decision-board
> So here's how to start any strong acid or base question. Check it's **strong**, then find the hydronium or hydroxide, counting the hydroxides. If it's diluted, the moles stay the same, so divide by the **final** volume. If an acid and a base are mixed, **neutralise first, then dilute**, using the total volume. And check the answer is on the right **side of seven**. Next, weak acids, with an ICE table.

Visual: the check strip returns full size as a two-column board, "What you see" and "What you do first", each row lighting on its cue with its question number badge: "a strong acid or base → [H₃O⁺] = c, or [OH⁻] = c × number of OH⁻ (Q1, Q4)"; "diluted → moles stay the same; ÷ final volume (Q2)"; "mixed → moles of each, subtract, ÷ total volume (Q3, Q4)"; "any answer → right side of 7? right size of change? (all)". The bank aid "Mixing: neutralise first, then dilute." writes small under row 3. On "Next" a chip "Next: weak acid and weak base pH with an ICE table" slides in at the lower right with `m6-ph-meter-probe-beaker-v1.png` small. Hold about 2 seconds.

### 7. key-notes (reuse take: key-notes; quiet, about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Strong acid: [H₃O⁺] = c, even when dilute. Strong base: [OH⁻] = c × number of OH⁻ (2 for Ba(OH)₂). Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C.
2. Decimal places in pH = significant figures in [H₃O⁺]; a concentration from a pH has as many significant figures as the pH has decimal places.
3. Dilution: n stays the same; c = n ÷ final volume ("made up to" is the final volume). Tenfold dilution of a strong acid: pH up by 1, while the pH stays well below 7 (an acid never passes 7).
4. Mixing: find n(H₃O⁺) and n(OH⁻), subtract, divide the excess by the total volume, then find the pH (through pOH for excess base). Never average pH values.
5. Check: excess acid gives pH below 7; excess base gives pH above 7.

Memory aid (large): *Mixing: neutralise first, then dilute.* Condition tag: "strong acid with strong base; pH + pOH = 14.00 at 25 °C".

## Teaching checks

- **Does it explain causes?** Why a dilute nitric acid still gives [H₃O⁺] = c: strength is how fully it ionises (2b, 2d). Why an acid has hydroxide: water's equilibrium is always present, so Kw fixes [OH⁻] (2c). Why dilution is worked in moles: water adds no acid (3b). Why the pH rises by exactly 1: tenfold lower concentration on a log scale (3c). Why pH values cannot be averaged: pH is a log scale and the acid and base react, so moles decide (4b, 4d). Why the excess sets the pH and spreads through the total volume (4c, 5c). Why barium hydroxide doubles the hydroxide: two OH⁻ per formula unit (5b). Why the forgotten 2 flips the answer: the wrong count makes the acid look in excess (5d).
- **Worked-example rule.** One reasoning stage per scene; the question strip stays readable and each given is underlined at the cue where it is used; earlier questions are cleared; result lines land on their spoken cues; only one kept chip carries into the next scene (Q1 pH, Q2 pH, Q4 excess).
- **Response opportunities.** Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a): concentrations, volumes, pH values, 25 °C, "assume the volumes add" (Q3, Q4) and Kw (Q1). Nothing answer-bearing during the holds; the check strip dims.
- **Reading load.** Each card is two or three short lines plus one or two demands. In the working area, at most about three bright text items at once.
- **Term load.** No new terms. "Made up to" is explained in the walkthrough ("that's the final volume").
- **Out of scope by design.** Weak acids and bases; Ka; sulfuric acid; buffers; equivalence-point pH; other temperatures.

## Practice questions and model answers

1. (Q1.) A solution of nitric acid, HNO₃, has a concentration of 0.00250 mol/L at 25 °C. (a) Calculate the pH. (b) Calculate [OH⁻]. (Kw = 1.0 × 10⁻¹⁴ at 25 °C.)
   Model: (a) HNO₃ is a strong acid and ionises completely (HNO₃ + H₂O → H₃O⁺ + NO₃⁻), so [H₃O⁺] = 2.50 × 10⁻³ mol/L; pH = −log(2.50 × 10⁻³) = 2.602 (three decimal places for three significant figures). (b) [OH⁻] = Kw ÷ [H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 2.50 × 10⁻³ = 4.0 × 10⁻¹² mol/L. Crossed mistake: "0.00250 mol/L is dilute, so HNO₃ is weak here".
2. (Q2.) 25.0 mL of 0.120 mol/L HCl is transferred to a 250.0 mL volumetric flask and made up to the mark with distilled water. Calculate the pH of the diluted solution at 25 °C.
   Model: n(H₃O⁺) = 0.120 × 0.0250 = 0.00300 mol; the final volume is 0.2500 L, so c = 0.0120 mol/L; pH = −log(0.0120) = 1.921. Check: tenfold dilution, pH 0.921 → 1.921 (+1.000). Crossed mistake: "V = 275.0 mL: pH 1.962".
3. (Q3.) 30.0 mL of hydrochloric acid at pH 1.00 is mixed with 20.0 mL of sodium hydroxide solution at pH 13.00, both at 25 °C; volumes add. Calculate the pH of the mixture.
   Model: [H₃O⁺] = 10⁻¹·⁰⁰ = 0.10 mol/L; pOH = 1.00, so [OH⁻] = 0.10 mol/L. n(H₃O⁺) = 0.0030 mol; n(OH⁻) = 0.0020 mol; excess H₃O⁺ = 0.0010 mol in 0.0500 L, so [H₃O⁺] = 0.020 mol/L; pH = 1.70. Check: acid in excess, pH below 7. Crossed mistake: "average: 7.00".
4. (Q4.) 40.0 mL of 0.0500 mol/L Ba(OH)₂ is mixed with 30.0 mL of 0.100 mol/L HCl at 25 °C; volumes add. Calculate the pH.
   Model: n(OH⁻) = 2 × 0.0500 × 0.0400 = 0.00400 mol; n(H₃O⁺) = 0.100 × 0.0300 = 0.00300 mol; excess OH⁻ = 0.00100 mol in 0.0700 L, so [OH⁻] = 0.0143 mol/L; pOH = 1.845; pH = 14.00 − 1.845 = 12.155. Check: base in excess, pH above 7. Crossed mistake: "one OH⁻ per Ba(OH)₂: excess acid, pH 1.845".

## Numbers to verify

Self-check (21 Oct), computed by script and by hand; Revision 2 values recomputed by script (21 Oct) and matching the science check; Codex to re-check.

- **Q1.** [H₃O⁺] = 2.50 × 10⁻³ mol/L; −log(2.50 × 10⁻³) = 2.60206 → 2.602 (3 s.f. → 3 d.p.). [OH⁻] = 1.0 × 10⁻¹⁴ ÷ 2.50 × 10⁻³ = 4.0 × 10⁻¹² mol/L (2 s.f., limited by Kw as given). Cross-check by pOH: 14.00 − 2.602 = 11.398; 10⁻¹¹·³⁹⁸ = 4.00 × 10⁻¹² (agrees). Ignoring water's own 1.0 × 10⁻⁷ mol/L of hydronium is safe: it is 0.004% of 2.50 × 10⁻³.
- **Q2.** n = 0.120 × 0.0250 = 0.00300 mol; c = 0.00300 ÷ 0.2500 = 0.0120 mol/L; −log(0.0120) = 1.92082 → 1.921. Before dilution: −log(0.120) = 0.92082 → 0.921; difference 1.000 = log 10. Crossed: 0.00300 ÷ 0.2750 = 0.010909 mol/L; −log(0.010909) = 1.96221 → 1.962 (3 s.f. → 3 d.p.).
- **Q3.** 10⁻¹·⁰⁰ = 0.10 mol/L (2 d.p. → 2 s.f.); pOH = 14.00 − 13.00 = 1.00; [OH⁻] = 0.10 mol/L. n(H₃O⁺) = 0.10 × 0.0300 = 0.0030 mol; n(OH⁻) = 0.10 × 0.0200 = 0.0020 mol; excess 0.0010 mol (2 s.f.); V(total) = 0.0500 L; [H₃O⁺] = 0.0010 ÷ 0.0500 = 0.020 mol/L; −log(0.020) = 1.69897 → 1.70 (2 s.f. → 2 d.p.). Crossed: (1.00 + 13.00) ÷ 2 = 7.00.
- **Q4 (Revision 2 data).** n(Ba(OH)₂) = 0.0500 × 0.0400 = 0.00200 mol; n(OH⁻) = 2 × 0.00200 = 0.00400 mol; n(H₃O⁺) = 0.100 × 0.0300 = 0.00300 mol; excess OH⁻ = 0.00400 − 0.00300 = 0.00100 mol (subtraction keeps five decimal places: three significant figures); V(total) = 40.0 + 30.0 = 70.0 mL = 0.0700 L; [OH⁻] = 0.00100 ÷ 0.0700 = 0.014286 → 0.0143 mol/L; pOH = −log(0.014286) = 1.84510 → 1.845; pH = 14.00 − 1.84510 = 12.15490 → 12.155. Crossed (one OH⁻): n(OH⁻) = 0.0500 × 0.0400 = 0.00200 mol; excess H₃O⁺ = 0.00100 mol; [H₃O⁺] = 0.014286 mol/L; pH 1.845 (the mirror of the right answer: 1.845 + 12.155 = 14.000). Revision 1's data (25.0 mL of 0.0800 mol/L, pH 12.260) are withdrawn because they repeated C07 worked example 3's base.
- **Reference facts.** Nitric and hydrochloric acids are strong (fully ionised in dilute water solution); barium hydroxide is a soluble strong base releasing two OH⁻ per formula unit (barium hydroxide octahydrate dissolves to about 0.18 mol/L at 15 °C and more at 25 °C (CRC); 0.0500 mol/L is well inside; Codex to confirm); Kw = 1.0 × 10⁻¹⁴ at 25 °C. A real 0.10 mol/L NaOH or HCl solution reads close to pH 13.00 and 1.00 (C07 author note a; activity effects not taught).
- **No em dashes** in this file (searched).

## Memory aid check

- **"Decimal places in pH = significant figures in [H⁺]."** (bank, *Trap*; C07 rule card, worded "[H₃O⁺]"). Applied to every answer and crossed value; used in reverse in Q3 (pH 1.00 → 0.10 mol/L). True as written; the reason (the digits before the point carry only the power of ten) was taught in C07.
- **"One pH unit is ten times."** (bank, *Insight*). Q2's check. Holds exactly here because the dilution factor is exactly 10 and the acid is strong. No claim that every dilution adds a whole unit.
- **"pH + pOH = 14, at 25 °C."** (bank). Q3 and Q4; every card states 25 °C.
- **"Mixing an acid and a base: neutralise first, then dilute."** (bank, *Shortcut*). Q3 and Q4; both are strong with strong, so the condition holds. The decision board puts "check it's strong" first.
- **"Count the hydroxides."** (bank, *Trap*). Q4; barium hydroxide does release two OH⁻ per formula unit. Its companion "Count the hydrogens in diprotic acids" is not used (sulfuric acid; C07 draft correction 1).
- **"Strength is how much it breaks up. Concentration is how much you put in."** (bank; C05's aid). A grey tag in Q1's mistake scene, recalled only.

## Narration length estimate

Counted by script (19 scenes; `### N.` headings with letter suffixes, "> " lines joined, bold markers removed, key-notes line as the standard notes line), at 13.3 characters per second.

| Scene | Characters |
| --- | --- |
| 1 hook | 386 |
| 2a q1-question | 243 |
| 2b q1-ph | 328 |
| 2c q1-hydroxide | 361 |
| 2d q1-mistake | 220 |
| 3a q2-question | 290 |
| 3b q2-moles | 366 |
| 3c q2-check | 246 |
| 3d q2-mistake | 246 |
| 4a q3-question | 292 |
| 4b q3-moles | 375 |
| 4c q3-excess | 352 |
| 4d q3-mistake | 183 |
| 5a q4-question | 309 |
| 5b q4-excess | 370 |
| 5c q4-ph | 316 |
| 5d q4-mistake | 218 |
| 6 decision-board | 388 |
| 7 key-notes | 75 |

Revision 2 total (21 Oct, recounted by script, "> " lines only): **5,564 characters** (inside 5,500 to 6,800); speech about 418 s, and with the same padding, holds, countdowns and notes hold as below, **about 9.3 minutes** (560 s), under the 9.5-minute cap. No reserve trim was needed. Revision 1 total (21 Oct): 5,577 characters. Speech about 419 s; with 38 s of padding (19 scenes, 2 s each), about 9 s of stated holds (hook 1 s, four mistake scenes 1.5 s each, decision board 2 s), 40 s of countdowns (four) and about 55 s more of the quiet notes hold: **about 9.4 minutes** (561 s), under the 9.5-minute cap. A first draft ran 5,345 characters (below the floor); Revision 1 adds causal clauses (one proton per molecule, 2b; why pH values cannot be mixed, 4b; why the hydroxide runs out, 4c; why the pOH route, 5c), the "hundreds of millions of times less" comparison (2c) and the spoken "Assume the volumes add" (4a, 5a). Walkthrough speech per question (excluding the question scene): Q1 about 68 s, Q2 about 64 s, Q3 about 69 s, Q4 about 68 s. Reserve trims at preview, in order, if the voiced take runs over 9.5 minutes: (1) 5c's "Check: base in excess ... and it is" (about 5 s; the pH track carries it); (2) 3c's last sentence (about 5 s; the bracket "+1.000" carries it); (3) the hook's second sentence (about 6 s). Do not cut below 5,500 without replacing the content.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-ph, q1-hydroxide, q1-mistake, q2-question, q2-moles, q2-check, q2-mistake, q3-question, q3-moles, q3-excess, q3-mistake, q4-question, q4-excess, q4-ph, q4-mistake, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question, q4-question. key-notes is the quiet notes hold (about 60 s). Suggested lesson key `m6g01` (Chemistry keys carry no suffix, as `g01` for chem-m5-g01; Biology's Module 6 practice video is `m6g01b`); root to confirm. Suggested explainer folder `src/explainer/lessons/chem-m6-g01`. Review evidence paths `checks/m6g01-learning-review.md` and `checks/m6g01-claude-science-check.md` (to be written).

## Assets

Have (reuse; inspected 21 Oct on the dark board, and as used in C07): `public/assets/chemistry/m6-beaker-v1.png` (clear glass beaker with a spout; coded labels; Q1, Q3, Q4, hook), `m6-volumetric-pipette-filler-v1.png` (bulb pipette with red filler; Q2), `m6-volumetric-flask-v1.png` (stoppered flask with a calibration ring; Q2, hook), `m6-ph-meter-probe-beaker-v1.png` (bench meter with a blank screen, probe in a beaker; decision board "Next" chip).

Need: **no new plates.** Every real object already has a plate; everything else is typeset working, a two-bar comparison, a log ruler, a pH track or a particle lens (coded).

Coded: question cards, answer boxes, check strip and decision board, equation strips, working lines and kept chips, `IonBars`, `VolBox` lens, `LogRuler`, `PHTrack`, crossed chips, countdown ring. No people or hands.

## Codex asset brief

No artwork requested. Start only after the learning review and science check pass and the owner gives the go-ahead. Also requested (not art): (1) error-only re-check of every value under "Numbers to verify"; (2) confirm the barium hydroxide solubility figure; (3) confirm that no question closely paraphrases a NESA HSC question (search recent papers for these exact data sets); (4) confirm no em dash in this file.

## YouTube metadata (draft)

- **Title:** Strong Acid and Base pH: Dilution and Mixing Practice Questions | Year 12 Chemistry Module 6
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module6/lesson11

  Practise four HSC-style pH questions on strong acids and bases. Find the pH of a dilute nitric acid solution and the hydroxide in it; dilute hydrochloric acid in a volumetric flask and check the change on the log scale; mix an acid and a base given only their pH values; and mix barium hydroxide with hydrochloric acid without forgetting the second hydroxide. Pause and try each question, then work through it step by step, with the right number of decimal places and a sense check at the end. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 6, Acid/Base Reactions. Inquiry question: "What is the role of water in solutions of acids and bases?"
  Syllabus dotpoints (NSW Chemistry Stage 6, 2017, Module 6):
  "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)"
  "calculate the pH of the resultant solution when solutions of acids and/or bases are diluted or mixed"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisite: pH and pOH calculations for strong acids and bases, dilution and mixing. Next: Weak acid and weak base pH with ICE tables.

  #Year12Chemistry #pHCalculations #HSCScience"
- **syllabusDotpoints:** the two quoted lines above. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C6-IQ2-02 and C6-IQ2-06, p 53; the dash in "[OH–]" is U+2013 as in the official extraction).
- **Lesson link:** site lesson 11 (pH calculations, mixing and method selection), proposed; root to confirm (C07 links lesson 08).
- **Playlist:** Year 12 Chemistry: Module 6, Acid/Base Reactions (2017 syllabus), after C07 (playlist order 11).

## Open decisions

- **Sulfuric acid.** C07's open decisions suggested G01 could carry one item worded "assume both hydrogen ions are released completely". Revision 1 leaves it out: the project manager's C07 decision keeps [H⁺] = 2c as a stated condition only, and four questions already fill the length cap. If root wants it, it replaces Q1 (keeping the dilute-strong idea is then lost) or goes to chem-m6-g04 (titration practice).
- **Lesson link** (above) and **lesson key** (`m6g01`).
- **Length.** See "Narration length estimate".

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 27 s per scene, three scenes per question; this is the content, not end-of-video feedback (AGENTS.md exception). The reviewer should check that no walkthrough re-teaches a C07 method (each rule is recalled in one clause; grey tags name the source video where shown).
- **No repeated examples.** Checked against C05 and C07 (Decisions table). The site's L11 Ba(OH)₂ mixing task is the model for Q4, with new volumes, a new concentration and a different acid. Revision 2: Q4's Ba(OH)₂ is now 0.0500 mol/L (C07 worked example 3 used 0.0800 mol/L); Q1 to Q3's remaining overlaps with C07 are recorded in the Decisions sentence.
- **Originality.** All four data sets were written for this video. They are standard HSC question types (a dilute strong acid, a volumetric dilution, a mixture, a Group 2 hydroxide mixture), so the reviewer and Codex should check that no recent NESA paper uses the same numbers.
- **Pronunciation.** "pH" and "pOH" as letters; "K w" as letters; "barium hydroxide", "nitric acid", "hydrochloric acid", "sodium hydroxide" as names, never as formulas; "zero point zero zero two five zero" digit by digit (as C07 voiced); "two hundred and fifty millilitres"; "ten to the minus fourteen". The cards show 25.0 mL, 30.0 mL, 20.0 mL and 40.0 mL; the narration says "twenty five", "thirty", "twenty" and "forty millilitres" (C07 precedent: the card carries the precision).
- **Doubts.** (a) Q3's pH data (1.00, 13.00) are two-significant-figure data, so the answer has two decimal places while the other answers have three; 4b's grey tag says why. (b) Q1 (b) gives a two-significant-figure [OH⁻] because Kw is given to two; the pOH route gives 4.00 × 10⁻¹², and both should be accepted in review. (c) "Check: ... and it is" appears in 4c and 5c; if it sounds repetitive at preview, cut it from 5c first (the `PHTrack` carries it). (d) pH 12.155 (Q4) treats 14.00 as exact at 25 °C. A student who carries 14.00 as two-decimal data writes 12.15; accept both in review.
- **No em dashes** in this file (searched).
