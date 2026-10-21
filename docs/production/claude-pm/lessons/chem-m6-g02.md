# G02 (Chemistry, Module 6): Weak acid pH, Ka and amphiprotic ions: HSC-style practice (design)

Status: Revision 1 (21 Oct): needs learning review and Claude science check.

Revision 1 (21 Oct): first design, from the pre-design plan `../pre-design/chem-m6-g02-practice-plan.md` (Codex brief 95) as reviewed here. Narration and timing: see "Narration length estimate". Nothing recorded; human listening pending.

Working title: "Weak acid pH, Ka and amphiprotic ions: HSC-style practice". Video type 3 in the teaching playbook (practice walkthrough), authored questions only. Every question is written for HSCScience and is never presented, said or implied to be an official NESA question; every question card carries the tag "HSC-style question, written for HSCScience". This is a hard-practice video: the worked walkthroughs are the content, so each walkthrough may run longer than the brief end-of-video feedback rule (AGENTS.md exception, owner 16 Oct). Each question is shown as an exam would word it (stem, data, demands); it ends "Pause here to answer." with a 10 s countdown and keeps the full question on screen during the attempt; the walkthrough underlines each given in the question text at the cue where it is used (owner rule, 18 Oct: no givens card); it reasons one stage per scene and ends with one crossed-out classic mistake. Learner copy never mentions marks. **Route id:** `chem-m6-g02` (playlist order 15, after chem-m6-c10, before chem-m6-c11). Production label G02 (Chemistry, Module 6).

Scope: follows the format of `bio-m6-g01.md` (Revision 3) and the voice and calculation staging of `chem-m6-c07.md`, `chem-m6-c08.md` and `chem-m6-c10.md` (task line, equation strip, values with units, one stage per line, earlier lines dim, kept chips; the C08 ICE table and check ruler; the C10 backwards table). In a practice video the question card replaces the givens card: the givens are underlined in the question text as they are used.

Syllabus dotpoints (NSW Chemistry Stage 6, 2017, p53; `C6-IQ2-02`, `C6-IQ3-04` and `C6-IQ2-04` are this project's local catalogue IDs, not codes printed in the syllabus), quoted from `../../programme/syllabus/chem-2017-y12.json`:

"calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)"

"calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)"

"write ionic equations to represent the dissociation of acids and bases in water, conjugate acid/base pairs in solution and amphiprotic nature of some salts, for example:
- sodium hydrogen carbonate
- potassium dihydrogen phosphate"

The route entry lists C6-IQ2-02 only. Q3 applies C6-IQ3-04 (Ka and pKa) and Q4 applies C6-IQ2-04 (the two named amphiprotic salts) with C10's Ka × Kb = Kw, so both are quoted. Practice and transfer only: the coverage rows stay with chem-m6-c06, c08 and c10; G02 adds practice rows, not first coverage. Root to decide whether the route entry adds C6-IQ3-04 and C6-IQ2-04 as practice actions.

**Boundary:** starts at the route's "Present unfamiliar weak-acid data and protect an attempt" and stops at its "Choose an approximation or full method, test the assumption and check pH". Four questions, each chosen by the data it gives: a Ka and a concentration where the shortcut passes; a Ka and a concentration where the 5% check fails and the full equation is solved; a measured pH, worked backwards to Ka and pKa; and the amphiprotic Ka-against-Kb item assigned here by the route review (`../../module6-route-review-claude.md`, Additions, 19 Oct: "Amphiprotic Ka against Kb (which way an amphiprotic ion reacts): C10 deferred it and C11 leaves it out. It goes to chem-m6-g02 (practice)."). **Not here:** weak bases (C08 worked one; no new method); buffers and Henderson-Hasselbalch (chem-m6-c11, the next video); salt pH calculations and hydrolysis of ions from one weak parent (chem-m6-c13, c14); polyprotic pH calculations (C10 decision: out); the pH of an amphiprotic salt solution (Q4 predicts acidic or basic only, with no number).

## Decisions

- **Route entry.** `../../module6-video-route-draft.json`: chem-m6-g02, "Weak acid pH and Ka method selection practice", type practice, site lessons L09, L11 and L12, syllabus action C6-IQ2-02, prerequisites chem-m6-c08 and chem-m6-c10, next chem-m6-c11, main learner question "Which weak-acid pH method fits these data?". The route review adds the amphiprotic item (quoted under Boundary); `chem-m6-c10.md` Open decisions recorded "Amphiprotic direction from Ka against Kb: decided, out" of C10; `chem-m6-c08.md` Boundary: "solving the quadratic (named, not worked; method-selection practice is chem-m6-g02)".
- **One main question:** *A weak acid question gives you a Ka, a measured pH, or an ion that can go either way. Which method fits those data, and how do you check the answer?* Heading on screen: "Weak acids: which method fits the data?"
- **Why a practice video, and why these four questions.** C08 teaches the forward ICE table with the shortcut and the 5% check (and names, but does not work, the full equation); C10 teaches Ka from a measured pH, pKa, and Ka × Kb = Kw for a conjugate pair. Students lose these questions on method choice and on the check: they forget the square root, keep a shortcut answer after the check fails, write the pKa as the pH, and find an amphiprotic ion's Kb from its own Ka. Each question hides one of these traps in a new case. None repeats a C08 or C10 case: C08 used propanoic acid (0.150 mol/L), HF (0.100 mol/L, named failing check), ammonia, methanoic acid and methylamine; C10 used HX (0.0500 mol/L, pH 2.78), ethanoic acid, lactic acid (pH 2.28), and HF, methanoic acid and HCN by pKa.

  | Q | Case (new) | Data given, so the method | Trap | Check | Core |
  |---|---|---|---|---|---|
  | 1 | hypochlorous acid, 0.0500 mol/L, Ka 3.0 × 10⁻⁸ | Ka and c: ICE, drop x, 5% check passes | forgetting the square root | an acid's pH is below 7 | C08 |
  | 2 | chloroethanoic acid, 0.0200 mol/L, Ka 1.4 × 10⁻³ | Ka and c: the check fails, so solve the full equation | keeping the shortcut answer after the check fails | the root satisfies Ka; the shortcut is 0.05 out | C08 |
  | 3 | benzoic acid, 0.0150 mol/L, measured pH 3.02 | pH and c: backwards to Ka, then pKa | pKa written as the pH | Ka below 1 and pKa positive: weak, as expected | C10 |
  | 4 | HCO₃⁻ (baking soda) and H₂PO₄⁻ (a fertiliser salt) | two competing reactions: Ka against Kb = Kw ÷ Ka(one proton up) | Kb from the ion's own Ka, which flips the H₂PO₄⁻ answer | NaHCO₃ basic and KH₂PO₄ acidic, as C06's hook showed baking soda neutralising acid | C06, C10 |

- **Changes from the pre-design plan (recorded).** Q1: the plan's unnamed HA with Ka 1.80 × 10⁻⁵ at 0.100 mol/L is almost C08's propanoic acid worked example and its crossed mistake ("[H₃O⁺] equals 0.100") was crossed twice in C08, so Q1 uses a new acid, a much smaller Ka, and the forgotten square root as the trap (the plan's pH 2.87 would also be 2.872 under the strict decimal-places rule). Q2: the plan's Ka 6.80 × 10⁻⁴ is HF's value, already C08's failing example, so Q2 uses chloroethanoic acid; the method and the crossed mistake ("keep the square-root answer after its check fails") are the plan's. Q3: the plan's HY (0.0800 mol/L, pH 3.00) is replaced by benzoic acid, whose data give a realistic Ka (6.5 × 10⁻⁵) and a pKa that is the same whether Ka is rounded first or not (4.19); the plan's crossed mistake ("Ka = 0.00100", that is Ka taken as [H₃O⁺]) was C10's attempt-1 crossed mistake, so Q3 crosses "pKa = pH" instead (a site L11 misconception). Q4 keeps the plan's two ions and the Ka-against-Kb method; the data use two significant figures (4.3 × 10⁻⁷, not 4.30 × 10⁻⁷), and the crossed mistake becomes "Kb from the ion's own Ka", which flips the H₂PO₄⁻ answer, in place of the plan's "an amphiprotic ion always reacts equally both ways" (a weaker trap).
- **Rising difficulty.** Q1 is the C08 method with a check that passes (warm-up). Q2 makes the check fail and adds the full equation. Q3 reverses the direction and adds pKa. Q4 needs the right conjugate pair for each of two competing reactions, for two ions, and a prediction.
- **Site alignment.** Site lessons L09, L11 and L12 (`../site-extracts/chem-m6-l09.md`, `chem-m6-l11.md`, `chem-m6-l12.md`), and L07 for Q4 (`chem-m6-l07.md`). Reused site items and framings: L09 "the page approximates x = √(Ka c) when the ionised fraction is under 5%, then checks that fraction" and "check it after using it, not before" (Q1, Q2); L11 "identify whether a solution contains a strong or weak acid or base before choosing a calculation", its three-student opener where HF "fails the 5% approximation and gives pH 2.10 by quadratic" (Q2's method, with a new acid), and its misconception "pH equals pKa for any weak acid; the page restricts that equality to half-equivalence" (Q3's crossed mistake; half-equivalence is not mentioned here, it belongs to chem-m6-c14); L12 "Ka(HA) × Kb(A⁻) = Kw for a conjugate pair only" (Q4); L07 "HCO₃⁻ in NaHCO₃ and H₂PO₄⁻ in KH₂PO₄ are the named salt examples" and its own Ka-against-Kb comparison for HPO₄²⁻ ("compares Ka3 = 4.8 × 10⁻¹³ with Kb = 1.6 × 10⁻⁷"), which is the site precedent for Q4's method. Site errors relevant here are already recorded: Ka/c used as the percentage ionised (C08 draft correction 3 and new correction 1; C10 new correction 4), so every check in this video is x ÷ c; HSO₄⁻ listed as amphiprotic (C06 note), not used. No new site errors found for these items.
- **Entry knowledge (do not re-teach; recall in one clause each).** From C08: a weak acid ionises partly; the ICE table (c, 0, 0; −x, +x, +x; c − x, x, x); Ka = x²/(c − x); drop x when Ka is tiny next to c, so x = √(Ka × c); check x ÷ c under 5%, a rule of thumb; if the check fails, solve the full equation; x has the significant figures of Ka, so pH has that many decimal places. From C10: [H₃O⁺] = 10⁻ᵖᴴ; the table run backwards ([A⁻] = [H₃O⁺], [HA] = c − [H₃O⁺]) approximates nothing; pKa = −log Ka, with two decimal places for a two-significant-figure Ka; pH describes a solution and Ka describes the acid; Ka × Kb = Kw for a conjugate pair. From C06: amphiprotic species give or take a proton depending on the partner; the proton chains H₂CO₃, HCO₃⁻, CO₃²⁻ and H₃PO₄, H₂PO₄⁻, HPO₄²⁻, PO₄³⁻; NaHCO₃ and KH₂PO₄ dissolve to give the amphiprotic anion with a spectator cation. From Module 5 (chem-m5-c06b): "multiply both sides by the bottom, then divide" for rearranging. Mathematics: the quadratic formula (Year 11 Mathematics Advanced) or a calculator's equation solver. Not assumed: buffers, salt hydrolysis, half-equivalence.
- **Learner-visible vocabulary (callbacks; one plain meaning each where needed).** Hypochlorous acid (HOCl, the weak acid in chlorinated water; its anion is hypochlorite); chloroethanoic acid (ethanoic acid with one chlorine; its anion is chloroethanoate); benzoic acid (a food preservative; its anion is benzoate); hydrogen carbonate and dihydrogen phosphate (C06); "one proton up" (the species with one more proton in the chain, the acid that the ion becomes when it accepts a proton).
- **Start and stop.** Starts at unseen weak-acid data; stops after four walkthroughs, each with its trap named and a check, and a decision board that chooses the method from the data. No new method: the full equation is the C08 "keep the x" equation solved, and the amphiprotic comparison is C10's Ka × Kb = Kw applied to each of an ion's two reactions.
- **Placement and handoff.** After C10, before C11. Scene 6 hands off: "Next, how a buffer resists a change in pH." The previous video in playlist order is C10, so the narration never needs "last video".
- **Precision (owner rule, strict).** x, [H₃O⁺], Ka and Kb carry the significant figures of the given constant or pH: Ka given to two significant figures gives x to two and pH to two decimal places (C08); a pH with two decimal places gives [H₃O⁺] and Ka to two significant figures, and pKa to two decimal places (C10). Logs are taken from unrounded values; working keeps guard digits ("keep the digits; round at the end", C03 and C10 tag). Values: Q1 x 3.9 × 10⁻⁵ mol/L, 0.077%, pH 4.41; Q2 shortcut 26% (fails), x 4.6 × 10⁻³ mol/L, pH 2.33 (shortcut 2.28); Q3 [H₃O⁺] 9.5 × 10⁻⁴ mol/L (9.55 × 10⁻⁴ kept), [HA] 0.0140 mol/L, Ka 6.5 × 10⁻⁵, pKa 4.19; Q4 Kb(HCO₃⁻) 2.3 × 10⁻⁸, Kb(H₂PO₄⁻) 1.4 × 10⁻¹².
- **Visual system.** One practice board throughout, in the bio-m6-g01 layout: top-left the **question card** (stem, data and demands, as an exam prints them, with the tag "HSC-style question, written for HSCScience"), kept readable through the whole question; the working fills the right two thirds; a **type badge** top-right ("Ka given: shortcut", "Ka given: full equation", "pH given: backwards", "Amphiprotic: Ka against Kb"), hidden during each attempt because it names the method. When the walkthrough starts, the card shrinks to a strip and each given is **underlined in amber in the question text** at the cue where it is used (no givens card). A **check strip** on the far left carries three rows, "what data?", "is x small?", "does it make sense?", and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Working follows the C08 and C10 staging: equation strip, the ICE table as one item (once filled, only its equilibrium row stays bright), the C08 check ruler (a long bar for c, a sliver for x, a dashed 5% line), one stage per line, earlier lines dimming, one kept chip into the next scene. Colour key from C08 and C10: H₃O⁺ teal, OH⁻ violet, whole weak-acid molecules amber-outlined, the acid's anion grey-violet, Ka values teal, pKa navy, Kb violet-tinted, meter readouts amber digits; amber is otherwise used only for underlined givens and the check. **Clutter rule (owner):** besides the question strip and the check strip, at most about three bright text items in the working area at once; each tag fades when the next cue lands.
- **Real objects are painted** (existing plates only, listed under Assets): the pH meter (Q3), the baking soda box and the fertiliser scoop (Q4). No people or hands.
- **Mistake scenes.** No mistake/fix template scene. Each question ends with its own spoken, crossed-out classic mistake (owner rule for practice walkthroughs). Only one crossed chip per question.
- **Memory aids (bank, checked below).** Recalled, not re-taught: "Weak acid pH: [H⁺] ≈ √(Ka × c)" with its 5% condition (Q1, Q2), "pKa is like golf: lowest score wins" (Q3, as a grey tag only), "Ka × Kb = Kw for a conjugate pair" (Q4), "Amphi means both" (Q4, grey tag). New, flagged for the science check: "For an ion's Kb, use the Ka one proton up." (Q4 and the decision board).
- **Legacy and shared code.** No legacy logic. Reuse (no prototype components): explainer kit (`Plate`, `Callout`, `Mark`, `Countdown`, `HandText`, `DrawPath`, `scribbleEllipse`, `Enter`); C08 parts from `src/explainer/lessons/chem-m6-c08/parts.tsx`: `IceRows` (the ICE table, filled forwards in Q1 and Q2, equilibrium row first in Q3 as C10 does), `XRuler` (the check ruler with the 5% line), `KaFrac` (Ka = x²/(c − x) and its substitutions), and through it C07's `FullMeter` (Q3 readout), `PHTrack` (sense checks), `KeptChip`, `Tie`, `DimG`, `ShrinkAt`; C10 parts from `src/explainer/lessons/chem-m6-c10/parts.tsx`: `PKRuler` (Q3 pKa marker and Q4 Ka and Kb markers on one log ruler), `FixedBar` (Q4: Ka and Kb of one conjugate pair add to 14 on the log ruler) and `Strike` (cancellation, if used); bio-m6-g01's board parts from `src/explainer/lessons/bio-m6-g01/board.tsx`: `PauseHold`, `AnsBox`, `Line`, and `Checks` (its row labels are fixed for Biology, so either add a `labels` prop or copy it lesson-local; root decides at build). B6a's `WrongChip` and `Cross` for the crossed mistakes. New coded items (lesson-local): the quadratic line set (Q2: three short lines, rearranged equation, formula with values, positive root), the two-reaction fork for an amphiprotic ion (Q4: one ion in the centre, a "donates" arrow to the right and an "accepts" arrow to the left, each with its constant), and the decision board.

Main question: *A weak acid question gives you a Ka, a measured pH, or an ion that can go either way. Which method fits those data, and how do you check the answer?*
Entry knowledge: see above. Students start Year 12 and have watched C01 to C10 and the practice video chem-m6-g01.
Stops after: calculating the pH of a weak acid with the shortcut and justifying it with the 5% check; recognising a failed check, solving the full equation for x and comparing the result with the shortcut; calculating Ka and pKa from a measured pH and concentration, with nothing approximated, and explaining why pKa is not the pH; deciding which way each of HCO₃⁻ and H₂PO₄⁻ mainly reacts with water by comparing its Ka with its Kb from the acid one proton up, and predicting whether solutions of NaHCO₃ and KH₂PO₄ are basic or acidic.
Handoff: how a buffer resists a change in pH (route chem-m6-c11).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout as Decisions. Each question card carries "HSC-style question, written for HSCScience". Pronunciations as in Review notes.

### 1. hook
> Weak acid questions give you different data, and the data choose the method. A K a and a concentration? Estimate x, then **check** it was fair. A measured pH? Work **backwards** to K a. An ion that can give or take a proton? **Compare** its K a with its K b. Here are four HSC-style questions. Pause and try each one, then we'll work it through, one step at a time.

Visual: heading "Weak acids: which method fits the data?" writes on. Three small data chips fan out on the right, one per cue: "Ka = ... , c = ..." with C08's check-ruler thumbnail on "check"; `m6-ph-meter-probe-beaker-v1.png` small with an amber readout "pH ..." and a back arrow on "backwards"; "HCO₃⁻" with two short arrows, one each way, on "Compare". The check strip builds on the left as the chips land: "what data?", "is x small?", "does it make sense?". On "four HSC-style questions" the chips become four numbered question cards with one shared tag line beneath them, "HSC-style questions, written for HSCScience". Hold about 1 second; the check strip shrinks to the far left.

### 2a. q1-question (question 1: hypochlorous acid)
> Question one. Hypochlorous acid is a weak acid that forms when chlorine is added to pool water. Calculate the pH of a zero point zero five zero zero moles per litre solution at twenty five degrees, given that K a is three point zero times ten to the minus eight. Justify any approximation you make. Pause here to answer.

Visual: fresh board. Type badge hidden. The card writes on: "Hypochlorous acid, HOCl, is a weak monoprotic acid that forms when chlorine is added to pool water. Ka(HOCl) = 3.0 × 10⁻⁸ at 25 °C." Demand: "Calculate the pH of a 0.0500 mol/L solution of hypochlorous acid at 25 °C. Justify any approximation you make." One answer box. No plate (a worded question). Nothing answer-bearing: no table, no ruler. **Countdown ring 10 seconds** after "Pause here to answer."; the check strip dims; the whole card stays on screen.

### 2b. q1-estimate (Ka and c given: the shortcut)
> K a and a concentration, so set up the ICE table: the acid goes down by x, and each ion goes up by x. K a is **tiny** next to zero point zero five zero zero, so drop the x from the bottom. Then x squared is K a times c, **one point five times ten to the minus nine**, and x is **three point nine times ten to the minus five** moles per litre.

Visual: the card shrinks to a strip. Type badge "Ka given: shortcut". "Ka(HOCl) = 3.0 × 10⁻⁸" and "0.0500 mol/L" underline amber; the check strip's "what data?" row lights. Equation strip: "HOCl(aq) + H₂O(l) ⇌ H₃O⁺(aq) + OCl⁻(aq)". On "set up the ICE table" `IceRows` fills fast, row by row (I "0.0500, 0, 0"; C "−x, +x, +x"; E "0.0500 − x, x, x"), then the I and C rows dim; the strip dims. `KaFrac` writes "Ka = x² / (0.0500 − x) = 3.0 × 10⁻⁸". On "tiny" the "− x" greys and slides out ("≈" replaces "="), and the E-row cell becomes "≈ 0.0500". On "one point five times ten to the minus nine" the line "x² = 3.0 × 10⁻⁸ × 0.0500 = 1.5 × 10⁻⁹" writes; on "three point nine times ten to the minus five" "x = √(1.5 × 10⁻⁹) = 3.87 × 10⁻⁵ → 3.9 × 10⁻⁵ mol/L" writes and shrinks to a kept chip "x = [H₃O⁺] = 3.9 × 10⁻⁵ mol/L"; earlier lines dim. Strip: "what data?" ticks.

### 2c. q1-check (justify it, then the pH)
> Now justify it. x is only **zero point zero seven seven percent** of the concentration, far under five percent, so dropping x was fair. The pH is **four point four one**, two decimal places because x has two significant figures, from K a. And it's **below seven**, as an acid's should be.

Visual: `XRuler` draws: a long bar "0.0500" with a hair-thin teal sliver at its end and a dashed 5% line far to the left of the end; on "zero point zero seven seven percent" the label "3.87 × 10⁻⁵ ÷ 0.0500 × 100% = 0.077% < 5% ✓" writes and "Justify any approximation" underlines in the strip; the ruler dims. On "four point four one" the line "pH = −log(3.87 × 10⁻⁵) = 4.41" writes and answer box fills "pH = 4.41 (approximation valid: 0.077% < 5%)", with a small grey tag "x: 2 s.f. (from Ka) → 2 d.p." that fades after its sentence. On "below seven" a `PHTrack` writes small: 0 to 14, a teal wall at 7, a marker at 4.41 on the acid side, tag "acid: below 7 ✓". Strip: "is x small?" and "does it make sense?" tick.

### 2d. q1-mistake (the classic mistake)
> The classic mistake is forgetting the square root. Then x is one point five times ten to the minus nine, and the pH comes out at eight point eight two, a basic pH for an acid. That's the check that catches it.

Visual: a chip "x = Ka × c = 1.5 × 10⁻⁹: pH 8.82" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "x² = Ka × c, so take the square root". On "a basic pH for an acid" the `PHTrack` thumbnail shows a grey crossed marker at 8.82 on the base side beside the real one at 4.41. Hold about 1.5 seconds.

### 3a. q2-question (question 2: chloroethanoic acid)
> Question two. Chloroethanoic acid is a weak monoprotic acid with a K a of one point four times ten to the minus three at twenty five degrees. Calculate the pH of a zero point zero two zero zero moles per litre solution. Show why the simplifying assumption can't be used. Pause here to answer.

Visual: board clears. Type badge hidden. The card writes on: "Chloroethanoic acid, CH₂ClCOOH, is a weak monoprotic acid. Ka = 1.4 × 10⁻³ at 25 °C." Demands: "(a) Show that the simplifying assumption [HA] ≈ c cannot be used for a 0.0200 mol/L solution." "(b) Calculate the pH of the 0.0200 mol/L solution at 25 °C." Two answer boxes. Nothing answer-bearing. **Countdown 10 seconds**; strip dims.

### 3b. q2-check-fails (try the shortcut, and check it)
> Try the shortcut first. x squared is K a times c, two point eight times ten to the minus five, so x is about five point three times ten to the minus three. Now **check**: that's **twenty six percent** of the concentration, far over five. Dropping x would take away about a quarter of the acid, so the shortcut doesn't hold. **Keep the x**.

Visual: the card shrinks to a strip; type badge "Ka given: full equation". "Ka = 1.4 × 10⁻³" and "0.0200 mol/L" underline. A compact E row writes ("0.0200 − x | x | x") with the `KaFrac` line "Ka = x² / (0.0200 − x)"; the "− x" greys (trial only, grey tag "try: drop x"). Lines: "x² ≈ 1.4 × 10⁻³ × 0.0200 = 2.8 × 10⁻⁵; x ≈ 5.29 × 10⁻³ mol/L" (in grey, as a trial). On "check" `XRuler` draws: this time the sliver is a visible chunk; on "twenty six percent" it reaches far past the dashed 5% line, which turns amber; label "5.29 × 10⁻³ ÷ 0.0200 × 100% = 26% > 5% ✗"; "Show that the simplifying assumption ... cannot be used" underlines and answer box (a) fills "x ÷ c ≈ 26%, over 5%, so [HA] ≈ c is not valid". On "Keep the x" the greyed "− x" slides back into the `KaFrac` line in white and the trial lines dim. Strip: "what data?" and "is x small?" tick.

### 3c. q2-full (solve the full equation)
> So K a equals x squared over zero point zero two zero zero minus x. Multiply both sides by the bottom, and gather everything on one side: x squared, plus K a times x, minus two point eight times ten to the minus five, **equals zero**. The quadratic formula, or your calculator's solver, gives one **positive root**: four point six times ten to the minus three. So the pH is **two point three three**.

Visual: the ruler shrinks to a thumbnail (amber ✗). Three short lines write, one per cue, each earlier one dimming: "x² = 1.4 × 10⁻³ (0.0200 − x)" (after "Multiply both sides by the bottom"); on "equals zero" "x² + 1.4 × 10⁻³ x − 2.8 × 10⁻⁵ = 0"; on "positive root" "x = [−1.4 × 10⁻³ + √((1.4 × 10⁻³)² + 4 × 2.8 × 10⁻⁵)] ÷ 2 = 4.64 × 10⁻³ → 4.6 × 10⁻³ mol/L" with a grey tag "the negative root is not a concentration" that fades. A tick line writes small: "check: (4.64 × 10⁻³)² ÷ (0.0200 − 0.00464) = 1.4 × 10⁻³ ✓". On "two point three three" "pH = −log(4.64 × 10⁻³) = 2.33" writes and answer box (b) fills "pH = 2.33". Strip: "does it make sense?" ticks.

### 3d. q2-mistake (the classic mistake)
> The classic mistake is keeping the shortcut answer after the check has failed. That gives two point two eight, about zero point zero five out. Once the check fails, the shortcut's answer goes too.

Visual: a chip "check failed, but pH = −log(5.29 × 10⁻³) = 2.28 kept" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "failed check: solve the full equation". On "zero point zero five out" a small pH bracket joins "2.28" (grey) and "2.33" (white). Hold about 1.5 seconds.

### 4a. q3-question (question 3: benzoic acid, from a measured pH)
> Question three. Benzoic acid is a weak monoprotic acid used as a food preservative. A zero point zero one five zero moles per litre solution of benzoic acid has a measured pH of **three point zero two** at twenty five degrees. Calculate K a and p K a for benzoic acid. Pause here to answer.

Visual: board clears. Type badge hidden. `m6-ph-meter-probe-beaker-v1.png` sits small at the card's upper right, its beaker labelled (coded) "benzoic acid, 0.0150 mol/L" and its amber readout showing "3.02" (given data). The card writes on: "Benzoic acid, C₆H₅COOH, is a weak monoprotic acid used as a food preservative. A 0.0150 mol/L solution of benzoic acid has a measured pH of 3.02 at 25 °C." Demand: "Calculate the acid dissociation constant, Ka, and the pKa of benzoic acid." One answer box. Nothing answer-bearing. **Countdown 10 seconds**; strip dims.

### 4b. q3-backwards (pH given: run the table backwards)
> This time the pH is given, so work **backwards**. The hydronium is ten to the minus three point zero two, **nine point five five times ten to the minus four** moles per litre. Each ionised molecule makes one hydronium and one benzoate, so benzoate is the same. The acid left is zero point zero one five zero minus that, **zero point zero one four zero**. Nothing here is approximated, so there's no five percent check.

Visual: the card shrinks to a strip; type badge "pH given: backwards". Equation strip: "C₆H₅COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + C₆H₅COO⁻(aq)". On "backwards" "measured pH of 3.02" underlines, the meter thumbnail's readout pulses, and `IceRows` draws with its E row filling first, as in C10 ("work backwards" arrow up the table). On "nine point five five times ten to the minus four" the line "[H₃O⁺] = 10⁻³·⁰² = 9.55 × 10⁻⁴ mol/L" writes with C10's grey tag "keep the digits; round at the end" (fades after its sentence), and the E-row cell under H₃O⁺ fills. On "benzoate is the same" the E-row cell under C₆H₅COO⁻ fills "9.55 × 10⁻⁴". On "zero point zero one four zero" "0.0150 mol/L" underlines and the E-row cell under the acid fills "0.0150 − 0.000955 = 0.0140"; the I and C rows stay dim. On "no five percent check" a small grey tag "measured, not approximated: no 5% check" writes and fades. Strip: "what data?" ticks.

### 4c. q3-ka (Ka, then pKa)
> So K a is hydronium times benzoate, over the acid: nine point five five times ten to the minus four, squared, over zero point zero one four zero. That's **six point five times ten to the minus five**, two significant figures from the pH's two decimal places. Then p K a is the negative log, **four point one nine**.

Visual: the table dims to its E row. `KaFrac` writes "Ka = [H₃O⁺][C₆H₅COO⁻] / [C₆H₅COOH] = (9.55 × 10⁻⁴)² / 0.0140"; on "six point five times ten to the minus five" it completes "= 6.49 × 10⁻⁵ → 6.5 × 10⁻⁵" with a small grey tag "pH 2 d.p. → 2 s.f." (fades). On "four point one nine" the line "pKa = −log(6.49 × 10⁻⁵) = 4.19" writes; answer box fills "Ka = 6.5 × 10⁻⁵; pKa = 4.19". A `PKRuler` thumbnail shows a navy marker at 4.19 in the weak range, tag "Ka < 1, pKa > 0: weak ✓" (check). Strip: "does it make sense?" ticks.

### 4d. q3-mistake (the classic mistake)
> The classic mistake is writing the p K a as three point zero two, the same as the pH. The pH describes this solution, at this concentration. The p K a describes the acid itself.

Visual: a chip "pKa = pH = 3.02" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "pH: this solution; pKa: the acid". On "this concentration" the "0.0150 mol/L" label on the meter thumbnail pulses; on "the acid itself" the pKa answer "4.19" pulses. Hold about 1.5 seconds.

### 5a. q4-question (question 4: two amphiprotic ions)
> Question four. The hydrogen carbonate ion, from baking soda, and the dihydrogen phosphate ion, from a fertiliser salt, are both amphiprotic. Use the K a values to decide whether each ion mainly donates a proton to water or accepts one from it. Then predict whether each salt's solution is acidic or basic. Pause here to answer.

Visual: board clears. Type badge hidden. `m6-baking-soda-box-v1.png` and `m6-fertiliser-granules-v1.png` sit small at the card's upper right, with coded labels "NaHCO₃" and "KH₂PO₄". The card writes on: "Sodium hydrogen carbonate, NaHCO₃ (baking soda), and potassium dihydrogen phosphate, KH₂PO₄ (used in some fertilisers), dissolve in water to give the amphiprotic ions HCO₃⁻ and H₂PO₄⁻." Data block, one line each: "Ka(H₂CO₃) = 4.3 × 10⁻⁷", "Ka(HCO₃⁻) = 4.7 × 10⁻¹¹", "Ka(H₃PO₄) = 7.1 × 10⁻³", "Ka(H₂PO₄⁻) = 6.3 × 10⁻⁸", "Kw = 1.0 × 10⁻¹⁴ (all at 25 °C)". Demands: "(a) Use Ka and Kb values to determine whether each ion mainly donates a proton to water or mainly accepts a proton from water." "(b) Predict whether a solution of each salt is acidic or basic." Two answer boxes. Nothing answer-bearing (no arrows, no chains). **Countdown 10 seconds**; strip dims.

### 5b. q4-carbonate (two reactions, two constants)
> An amphiprotic ion runs two reactions with water, so compare their constants. For hydrogen carbonate donating, K a is given: **four point seven times ten to the minus eleven**. Accepting, it becomes carbonic acid, so its K b is K w over carbonic acid's K a: **two point three times ten to the minus eight**. K b is about five hundred times bigger, so it mainly accepts a proton, making hydroxide. Sodium hydrogen carbonate solution is **basic**.

Visual: the card shrinks to a strip; type badge "Amphiprotic: Ka against Kb". The two-reaction fork draws: "HCO₃⁻" centre (split-outlined amber and violet, C06 style; grey tag "C06: amphi means both", fading); right arrow "donates: HCO₃⁻(aq) + H₂O(l) ⇌ CO₃²⁻(aq) + H₃O⁺(aq)"; left arrow "accepts: HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq)". On "four point seven times ten to the minus eleven" "Ka(HCO₃⁻) = 4.7 × 10⁻¹¹" underlines and a teal chip "Ka = 4.7 × 10⁻¹¹" pins on the right arrow. On "becomes carbonic acid" the mini chain "H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻" writes small with H₂CO₃ ringed (tag "one proton up"); "Ka(H₂CO₃) = 4.3 × 10⁻⁷" underlines; on "two point three times ten to the minus eight" the line "Kb(HCO₃⁻) = Kw ÷ Ka(H₂CO₃) = 1.0 × 10⁻¹⁴ ÷ 4.3 × 10⁻⁷ = 2.3 × 10⁻⁸" writes and a violet chip "Kb = 2.3 × 10⁻⁸" pins on the left arrow; the line dims. On "five hundred times" the left arrow thickens (tag "Kb ≈ 500 × Ka"). On "basic" answer boxes fill "(a) HCO₃⁻: Kb > Ka, mainly accepts" and "(b) NaHCO₃: basic (OH⁻ formed)". Strip: "what data?" ticks.

### 5c. q4-phosphate (the other way round)
> Dihydrogen phosphate is the other way round. Donating, its K a is **six point three times ten to the minus eight**. Accepting, it becomes phosphoric acid, so its K b is K w over seven point one times ten to the minus three, just **one point four times ten to the minus twelve**. Now K a wins, by tens of thousands, so it mainly donates, making hydronium. Potassium dihydrogen phosphate solution is **acidic**.

Visual: the HCO₃⁻ fork shrinks to a thumbnail with its result chip "accepts: basic". A new fork draws for "H₂PO₄⁻": right arrow "donates: H₂PO₄⁻(aq) + H₂O(l) ⇌ HPO₄²⁻(aq) + H₃O⁺(aq)"; left arrow "accepts: H₂PO₄⁻(aq) + H₂O(l) ⇌ H₃PO₄(aq) + OH⁻(aq)". On "six point three times ten to the minus eight" "Ka(H₂PO₄⁻) = 6.3 × 10⁻⁸" underlines and the teal chip pins. On "phosphoric acid" the mini chain "H₃PO₄ ⇄ H₂PO₄⁻ ⇄ HPO₄²⁻" writes small with H₃PO₄ ringed ("one proton up"); "Ka(H₃PO₄) = 7.1 × 10⁻³" underlines; on "one point four times ten to the minus twelve" "Kb(H₂PO₄⁻) = 1.0 × 10⁻¹⁴ ÷ 7.1 × 10⁻³ = 1.4 × 10⁻¹²" writes and the violet chip pins; the line dims. On "tens of thousands" the right arrow thickens (tag "Ka ≈ 45 000 × Kb"). On "acidic" answer boxes add "H₂PO₄⁻: Ka > Kb, mainly donates" and "KH₂PO₄: acidic (H₃O⁺ formed)". A small `PKRuler` thumbnail shows the two pairs of markers (HCO₃⁻: pKa 10.33 and pKb 7.63; H₂PO₄⁻: pKa 7.20 and pKb 11.85; screen only, no narration) with the winner of each pair lit. Strip: "does it make sense?" ticks, with a grey tag "C06: baking soda neutralised acid" (the C06 hook, consistent with a basic solution).

### 5d. q4-mistake (the classic mistake)
> The classic mistake is finding K b from the ion's own K a. For dihydrogen phosphate, that gives one point six times ten to the minus seven, and the wrong answer, basic. For an ion's K b, use the K a one proton up.

Visual: a chip "Kb(H₂PO₄⁻) = Kw ÷ 6.3 × 10⁻⁸ = 1.6 × 10⁻⁷, so basic" writes on and, on "the classic mistake", takes a grey scribble cross with the caption "that's the Kb of HPO₄²⁻". On "one proton up" the mini chain returns small, an arrow climbing from H₂PO₄⁻ to H₃PO₄, and the new aid writes small: "For an ion's Kb, use the Ka one proton up." Hold about 1.5 seconds.

### 6. decision-board
> So here's how to start any weak acid question. Read the data first. Given K a and a concentration? Estimate x, then check it's under **five percent**. If it isn't, solve the full equation. Given a pH? Work **backwards**, with nothing to approximate. Given an amphiprotic ion? Compare its K a with its K b, taken from the acid **one proton up**. Next, how a buffer resists a change in pH.

Visual: the check strip returns full size as a two-column board, "What you're given" and "What you do first", each row lighting on its cue with its question number badge: "Ka and c → ICE, x ≈ √(Ka × c), check x ÷ c < 5% (Q1)"; "check fails → keep the x: x² + Ka·x − Ka·c = 0, positive root (Q2)"; "pH and c → [H₃O⁺] = 10⁻ᵖᴴ, table backwards, Ka, pKa; no 5% check (Q3)"; "an amphiprotic ion → Ka against Kb = Kw ÷ Ka(one proton up); bigger wins (Q4)". Under the board, small: "Every answer: pH below 7 for an acid; pH d.p. = s.f. in x." On "Next" a chip "Next: how a buffer resists a change in pH" slides in at the lower right with `m6-beaker-v1.png` small. Hold about 2 seconds.

### 7. key-notes (reuse take: key-notes; quiet, about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Choose the method from the data: Ka and c → ICE table forwards; pH and c → ICE table backwards; an amphiprotic ion → compare Ka and Kb.
2. Forwards: x ≈ √(Ka × c), then check x ÷ c × 100% < 5%. If the check fails, keep the x: x² + Ka·x − Ka·c = 0, and take the positive root.
3. Backwards: [H₃O⁺] = 10⁻ᵖᴴ = [A⁻]; [HA] = c − [H₃O⁺]; Ka = [H₃O⁺]² ÷ [HA]; pKa = −log Ka. Nothing is approximated. The pKa is not the pH.
4. Amphiprotic ion: compare Ka (donating) with Kb = Kw ÷ Ka of the acid one proton up (accepting); the larger constant wins. HCO₃⁻ mainly accepts (NaHCO₃ basic); H₂PO₄⁻ mainly donates (KH₂PO₄ acidic).
5. Precision: x has the significant figures of Ka; pH has that many decimal places.

Memory aid (large): *For an ion's Kb, use the Ka one proton up.* Second line: *Weak acid: x ≈ √(Ka × c), then check x < 5% of c.* Condition tag: "25 °C; Ka × Kb = Kw for a conjugate pair only".

## Teaching checks

- **Does it explain causes?** Why x can be dropped in Q1: Ka is tiny next to c, so very little ionises (2b), confirmed by the check (2c). Why the shortcut fails in Q2: x is a quarter of the acid, so c − x is not close to c (3b). Why the full equation is needed and which root to keep (3c). Why [A⁻] equals [H₃O⁺] when working backwards: each molecule that ionises makes one of each (4b). Why there is no 5% check backwards: nothing is approximated (4b). Why pKa is not pH: pH depends on this solution's concentration, pKa on the acid (4d). Why an amphiprotic ion goes one way: its two reactions with water compete, and the larger constant wins (5b, 5c). Why the Kb uses the Ka one proton up: Ka × Kb = Kw holds for a conjugate pair, and accepting a proton turns the ion into that acid (5b, 5d).
- **Worked-example rule.** One reasoning stage per scene; the question strip stays readable and each given is underlined at the cue where it is used; earlier questions are cleared; result lines land on their spoken cues; only one kept chip carries into the next scene (Q1 x, Q2 the trial x as a thumbnail, Q3 the E row, Q4 the HCO₃⁻ result chip).
- **Response opportunities.** Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a): concentrations, Ka values, the measured pH, 25 °C, "monoprotic" (Q2, Q3) and all five constants in Q4. Nothing answer-bearing during the holds; the check strip dims.
- **Reading load.** Q4's card is the densest (two sentences and five short data lines) and is the task itself; Q1 to Q3 have two or three short lines. In the working area, at most about three bright text items at once (the ICE table counts as one item).
- **Term load.** No new terms. "One proton up" is said with its meaning on screen (the ringed acid in the chain).
- **Out of scope by design.** Weak bases; buffers; salt pH calculations; polyprotic pH; half-equivalence.

## Practice questions and model answers

1. (Q1.) Hypochlorous acid, HOCl, Ka = 3.0 × 10⁻⁸ at 25 °C. Calculate the pH of a 0.0500 mol/L solution. Justify any approximation.
   Model: HOCl + H₂O ⇌ H₃O⁺ + OCl⁻. Ka = x²/(0.0500 − x); Ka is small compared with c, so 0.0500 − x ≈ 0.0500; x² = 1.5 × 10⁻⁹; x = 3.9 × 10⁻⁵ mol/L. Check: x ÷ c = 0.077% < 5%, so the approximation is valid. pH = −log(3.87 × 10⁻⁵) = 4.41. Crossed mistake: "x = Ka × c: pH 8.82".
2. (Q2.) Chloroethanoic acid, Ka = 1.4 × 10⁻³ at 25 °C, 0.0200 mol/L. (a) Show that [HA] ≈ c cannot be used. (b) Calculate the pH.
   Model: (a) x ≈ √(1.4 × 10⁻³ × 0.0200) = 5.3 × 10⁻³ mol/L, which is 26% of c, over 5%, so the approximation is not valid. (b) x² = 1.4 × 10⁻³ (0.0200 − x); x² + 1.4 × 10⁻³ x − 2.8 × 10⁻⁵ = 0; x = 4.6 × 10⁻³ mol/L (positive root; 23% ionised); pH = 2.33. Crossed mistake: "keep pH 2.28 after the failed check".
3. (Q3.) Benzoic acid, 0.0150 mol/L, measured pH 3.02 at 25 °C. Calculate Ka and pKa.
   Model: [H₃O⁺] = 10⁻³·⁰² = 9.55 × 10⁻⁴ mol/L = [C₆H₅COO⁻]; [C₆H₅COOH] = 0.0150 − 0.000955 = 0.0140 mol/L; Ka = (9.55 × 10⁻⁴)² ÷ 0.0140 = 6.5 × 10⁻⁵; pKa = 4.19. Crossed mistake: "pKa = pH = 3.02".
4. (Q4.) HCO₃⁻ and H₂PO₄⁻ with Ka(H₂CO₃) = 4.3 × 10⁻⁷, Ka(HCO₃⁻) = 4.7 × 10⁻¹¹, Ka(H₃PO₄) = 7.1 × 10⁻³, Ka(H₂PO₄⁻) = 6.3 × 10⁻⁸, Kw = 1.0 × 10⁻¹⁴. (a) Decide which way each ion mainly reacts with water. (b) Predict acidic or basic for NaHCO₃(aq) and KH₂PO₄(aq).
   Model: (a) HCO₃⁻: donating, Ka = 4.7 × 10⁻¹¹ (HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺); accepting, Kb = Kw ÷ Ka(H₂CO₃) = 2.3 × 10⁻⁸ (HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻); Kb > Ka (about 500 times), so it mainly accepts. H₂PO₄⁻: donating, Ka = 6.3 × 10⁻⁸; accepting, Kb = Kw ÷ Ka(H₃PO₄) = 1.4 × 10⁻¹²; Ka > Kb (about 45 000 times), so it mainly donates. (b) Na⁺ and K⁺ are spectators. NaHCO₃(aq) is basic (OH⁻ formed); KH₂PO₄(aq) is acidic (H₃O⁺ formed). Crossed mistake: "Kb(H₂PO₄⁻) = Kw ÷ 6.3 × 10⁻⁸ = 1.6 × 10⁻⁷, so basic".

## Numbers to verify

Self-check (21 Oct), computed by script and by hand; Codex to re-check.

- **Q1.** Ka × c = 3.0 × 10⁻⁸ × 0.0500 = 1.5 × 10⁻⁹; x = √(1.5 × 10⁻⁹) = 3.8730 × 10⁻⁵ → 3.9 × 10⁻⁵ mol/L; x ÷ c = 3.8730 × 10⁻⁵ ÷ 0.0500 = 7.746 × 10⁻⁴ = 0.077%; pH = −log(3.8730 × 10⁻⁵) = 4.4120 → 4.41. Full equation: x = [−3.0 × 10⁻⁸ + √(9.0 × 10⁻¹⁶ + 6.0 × 10⁻⁹)] ÷ 2 = 3.8715 × 10⁻⁵, pH 4.4121 → 4.41 (agrees). Water's own hydronium (1.0 × 10⁻⁷ mol/L) is about 1/390 of x, so ignoring it is safe (C08 author note b). Crossed: −log(1.5 × 10⁻⁹) = 8.8239 → 8.82.
- **Q2.** Shortcut: x² = 1.4 × 10⁻³ × 0.0200 = 2.8 × 10⁻⁵; x = 5.2915 × 10⁻³; x ÷ c = 26.46% → 26%; pH(shortcut) = 2.2764 → 2.28. Full: x² + 1.4 × 10⁻³ x − 2.8 × 10⁻⁵ = 0; discriminant (1.4 × 10⁻³)² + 4 × 2.8 × 10⁻⁵ = 1.96 × 10⁻⁶ + 1.12 × 10⁻⁴ = 1.1396 × 10⁻⁴; √ = 1.06752 × 10⁻²; x = (1.06752 × 10⁻² − 1.4 × 10⁻³) ÷ 2 = 4.6376 × 10⁻³ → 4.6 × 10⁻³ mol/L (the other root, −6.04 × 10⁻³, is negative); check: (4.6376 × 10⁻³)² ÷ (0.0200 − 0.0046376) = 2.1507 × 10⁻⁵ ÷ 0.0153624 = 1.4000 × 10⁻³ ✓; ionised 23.2%; pH = −log(4.6376 × 10⁻³) = 2.3337 → 2.33. Shortcut error 2.3337 − 2.2764 = 0.057, "about zero point zero five" (2.33 − 2.28 = 0.05 at the reported precision).
- **Q3.** [H₃O⁺] = 10⁻³·⁰² = 9.5499 × 10⁻⁴ mol/L (2 s.f.: 9.5 × 10⁻⁴; working keeps 9.55 × 10⁻⁴); ionised 6.4% (no approximation is made, so this does not matter); [HA] = 0.0150 − 0.00095499 = 0.014045 → 0.0140 mol/L (decimal places of 0.0150); Ka = (9.5499 × 10⁻⁴)² ÷ 0.014045 = 9.1201 × 10⁻⁷ ÷ 0.014045 = 6.4935 × 10⁻⁵ → 6.5 × 10⁻⁵ (with 0.0140: 6.514 × 10⁻⁵ → 6.5 × 10⁻⁵, the same); pKa = −log(6.4935 × 10⁻⁵) = 4.1875 → 4.19; −log(6.5 × 10⁻⁵) = 4.1871 → 4.19 (the same, chosen for that reason, as C10 did). If a student drops x anyway: 9.1201 × 10⁻⁷ ÷ 0.0150 = 6.08 × 10⁻⁵, pKa 4.22 (not shown; the narration says nothing is approximated). Reference: benzoic acid Ka 6.3 × 10⁻⁵ to 6.5 × 10⁻⁵ at 25 °C (pKa 4.19 to 4.20); solubility about 3.4 g/L at 25 °C, that is 0.028 mol/L, so a 0.0150 mol/L solution is possible. Crossed: pKa = 3.02.
- **Q4.** Kb(HCO₃⁻) = 1.0 × 10⁻¹⁴ ÷ 4.3 × 10⁻⁷ = 2.3256 × 10⁻⁸ → 2.3 × 10⁻⁸; Kb ÷ Ka = 2.3256 × 10⁻⁸ ÷ 4.7 × 10⁻¹¹ = 495, "about five hundred times". Kb(H₂PO₄⁻) = 1.0 × 10⁻¹⁴ ÷ 7.1 × 10⁻³ = 1.4085 × 10⁻¹² → 1.4 × 10⁻¹²; Ka ÷ Kb = 6.3 × 10⁻⁸ ÷ 1.4085 × 10⁻¹² = 44 730, "tens of thousands" (screen "about 45 000"). Crossed: Kw ÷ 6.3 × 10⁻⁸ = 1.5873 × 10⁻⁷ → 1.6 × 10⁻⁷ (this is Kb of HPO₄²⁻); it exceeds Ka(H₂PO₄⁻) = 6.3 × 10⁻⁸ by a factor of 2.5, so the wrong pair flips the conclusion to "basic". Screen-only pK values: pKa(HCO₃⁻) = 10.33, pKb(HCO₃⁻) = 14.00 − 6.37 = 7.63; pKa(H₂PO₄⁻) = 7.20, pKb(H₂PO₄⁻) = 14.00 − 2.15 = 11.85. Reference (author only, not learner copy): the pH of an amphiprotic salt solution is about ½(pKa₁ + pKa₂), so NaHCO₃(aq) about 8.3 and KH₂PO₄(aq) about 4.7, consistent with "basic" and "acidic"; reference Ka values at 25 °C: H₂CO₃ 4.3 × 10⁻⁷ (apparent, including dissolved CO₂), HCO₃⁻ 4.7 × 10⁻¹¹ to 4.8 × 10⁻¹¹, H₃PO₄ 6.9 × 10⁻³ to 7.5 × 10⁻³ (7.1 × 10⁻³ used), H₂PO₄⁻ 6.2 × 10⁻⁸ to 6.3 × 10⁻⁸. With Ka(H₃PO₄) = 7.5 × 10⁻³ instead, Kb = 1.3 × 10⁻¹² and the conclusion is unchanged.
- **Condition for the Q4 comparison (author note).** Both reactions start from the same ion at the same concentration and each has the form ion + water ⇌ product + one H₃O⁺ or OH⁻, so the larger constant gives the larger extent. Both reactions occur; "mainly" is the learner wording. Each water reaction also feeds the other's products (H₃O⁺ + OH⁻ → H₂O), which does not change which constant is larger.
- **Reference facts.** Hypochlorous acid Ka 2.9 × 10⁻⁸ to 4.0 × 10⁻⁸ at 25 °C (3.0 × 10⁻⁸ given; pKa about 7.5); it forms in chlorinated pool water (Cl₂ + H₂O → HOCl + HCl, or from hypochlorite salts). Chloroethanoic acid Ka 1.3 × 10⁻³ to 1.4 × 10⁻³ (pKa 2.86 to 2.87). Benzoic acid as a food preservative (additive 210). Potassium dihydrogen phosphate (monopotassium phosphate) is used as a fertiliser. Codex to confirm against a data source.
- **No em dashes** in this file (searched).

## Memory aid check

- **"Weak acid pH: [H⁺] ≈ √(Ka × c)."** (bank, *Shortcut / scope*). Q1 and Q2. Its condition, "check afterwards that x is under about 5% of c", is the point of Q2, where it fails (26%). Never Ka ÷ c as a percentage (site errors).
- **"pKa is like golf: lowest score wins."** (bank, *Mnemonic*; C10). Recalled as a grey tag only if the reviewer wants it in Q3; Revision 1 does not need it (Q3 asks for Ka and pKa, not a ranking).
- **"Ka × Kb = Kw for a conjugate pair."** (bank, *Shortcut*, marked Extension; C10 taught it). Q4 applies it twice. Its condition, "for a conjugate pair", is exactly the trap in Q4's crossed mistake.
- **"Amphi means both."** (bank, *Mnemonic*; C06). Q4, as a grey tag on the fork.
- **"For an ion's Kb, use the Ka one proton up."** (new, not in the bank; flagged). Science: when an ion accepts a proton it becomes the species with one more proton, and that species and the ion are a conjugate pair, so Kb(ion) = Kw ÷ Ka(the species one proton up). Assumptions: 25 °C (Kw = 1.0 × 10⁻¹⁴); "up" means one more H⁺ in the proton chain as C06 drew it (H₂CO₃ above HCO₃⁻, H₃PO₄ above H₂PO₄⁻); the ion's own Ka describes its other reaction (donating). It holds for every amphiprotic ion in the course (H₂O, HCO₃⁻, H₂PO₄⁻, HPO₄²⁻). Science check to confirm; if the reviewer prefers bank wording only, the fallback is the bank line "Ka × Kb = Kw for a conjugate pair" with the tag "accepting: pair with the acid it becomes".

## Narration length estimate

Counted by script (19 scenes; `### N.` headings with letter suffixes, "> " lines joined, bold markers removed, key-notes line as the standard notes line), at 13.3 characters per second.

| Scene | Characters |
| --- | --- |
| 1 hook | 353 |
| 2a q1-question | 320 |
| 2b q1-estimate | 330 |
| 2c q1-check | 276 |
| 2d q1-mistake | 209 |
| 3a q2-question | 292 |
| 3b q2-check-fails | 327 |
| 3c q2-full | 388 |
| 3d q2-mistake | 196 |
| 4a q3-question | 286 |
| 4b q3-backwards | 406 |
| 4c q3-ka | 307 |
| 4d q3-mistake | 177 |
| 5a q4-question | 327 |
| 5b q4-carbonate | 433 |
| 5c q4-phosphate | 397 |
| 5d q4-mistake | 213 |
| 6 decision-board | 375 |
| 7 key-notes | 75 |

Revision 1 total (21 Oct): **5,687 characters** (inside 5,500 to 6,800). Speech about 428 s; with 38 s of padding (19 scenes, 2 s each), about 9 s of stated holds (hook 1 s, four mistake scenes 1.5 s each, decision board 2 s), 40 s of countdowns (four) and about 55 s more of the quiet notes hold: **about 9.5 minutes** (570 s), at the owner's cap. A first draft ran 5,778 characters (about 9.6 minutes) and was trimmed in the hook, 2a, 2b, 2c, 4b and 5a. Walkthrough speech per question (excluding the question scene): Q1 about 61 s, Q2 about 68 s, Q3 about 67 s, Q4 about 78 s (two ions). Reserve trims at preview, in order, if the voiced take runs over 9.5 minutes: (1) 2d's last sentence ("That's the check that catches it.", about 3 s; the pH track carries it); (2) 4b's last sentence ("Nothing here is approximated ...", about 4 s; the grey tag carries it); (3) 5c's "by tens of thousands" (about 2 s; the tag carries it). Do not cut below 5,500 without replacing the content.

## Scene list and build ids

All scenes are new to voice except key-notes (standard line, reuse take).

In order: hook, q1-question, q1-estimate, q1-check, q1-mistake, q2-question, q2-check-fails, q2-full, q2-mistake, q3-question, q3-backwards, q3-ka, q3-mistake, q4-question, q4-carbonate, q4-phosphate, q4-mistake, decision-board, key-notes.

Holds (10 s countdown after the speech, "Pause here to answer." on screen, card on screen during and after): q1-question, q2-question, q3-question, q4-question. key-notes is the quiet notes hold (about 60 s). Suggested lesson key `m6g02` (Chemistry keys carry no suffix; Biology's Module 6 practice keys take "b"); root to confirm. Suggested explainer folder `src/explainer/lessons/chem-m6-g02`. Review evidence paths `checks/m6g02-learning-review.md` and `checks/m6g02-claude-science-check.md` (to be written).

## Assets

Have (reuse; inspected 21 Oct on the dark board): `public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png` (bench meter with a blank screen, probe in a beaker; coded amber readout "3.02" and coded beaker label; Q3 and the hook), `m6-baking-soda-box-v1.png` (open cardboard box of white powder, no printed label; coded label "NaHCO₃"; Q4), `m6-fertiliser-granules-v1.png` (wooden scoop of white granules; coded label "KH₂PO₄"; Q4), `m6-beaker-v1.png` (decision board "Next" chip).

Need: **no new plates.** Q1 and Q2 are worded questions with no object to show; hypochlorous and chloroethanoic acids need no picture, and the owner rule (no coded icons for real objects) is met by showing no object rather than a coded pool or bottle. A pool plate was considered for Q1 and declined: it would add an object without carrying the explanation.

Coded: question cards, answer boxes, check strip and decision board, equation strips, ICE table, check ruler, `KaFrac` lines, the quadratic line set, the two-reaction fork, mini proton chains, `PKRuler` thumbnail, `PHTrack`, crossed chips, countdown ring. No people or hands.

## Codex asset brief

No artwork requested. Start only after the learning review and science check pass and the owner gives the go-ahead. Also requested (not art): (1) error-only re-check of every value under "Numbers to verify"; (2) confirm the reference facts listed there (Ka values for HOCl, chloroethanoic acid, benzoic acid, H₂CO₃, HCO₃⁻, H₃PO₄ and H₂PO₄⁻ at 25 °C; benzoic acid solubility; HOCl in pool water; KH₂PO₄ as a fertiliser) against a data source; (3) confirm that no question closely paraphrases a NESA HSC question (search recent papers for these exact data sets, especially the HCO₃⁻ and H₂PO₄⁻ item); (4) confirm no em dash in this file.

## YouTube metadata (draft)

- **Title:** Weak Acid pH, Ka and Amphiprotic Ions: HSC-Style Practice Questions | Year 12 Chemistry Module 6
- **Description:**

  "Full lesson, notes and practice questions: https://hscscience.com.au/subjects/chemistry/year12/module6/lesson12

  Practise four HSC-style weak acid questions, and choose the method from the data. Find the pH of hypochlorous acid with the square-root shortcut and justify it; see the 5% check fail for chloroethanoic acid and solve the full equation; work backwards from a measured pH to Ka and pKa for benzoic acid; and compare Ka with Kb to decide whether the hydrogen carbonate and dihydrogen phosphate ions mainly donate or accept a proton, and so whether baking soda and potassium dihydrogen phosphate give basic or acidic solutions. Pause and try each question, then work through it step by step. Questions are written for HSCScience in the HSC style; they are not official NESA questions.

  Chemistry 2017: Year 12 Module 6, Acid/Base Reactions. Inquiry questions: "What is the role of water in solutions of acids and bases?" and "How are solutions of acids and bases analysed?"
  Syllabus dotpoints (NSW Chemistry Stage 6, 2017, Module 6):
  "calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)"
  "calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)"
  "write ionic equations to represent the dissociation of acids and bases in water, conjugate acid/base pairs in solution and amphiprotic nature of some salts, for example:
  - sodium hydrogen carbonate
  - potassium dihydrogen phosphate"
  Official 2017 course: https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017

  Prerequisite: Ka and pKa: comparing acid strength, Ka from pH and conjugate bases. Next: How a buffer resists a pH change.

  #Year12Chemistry #WeakAcids #HSCScience"
- **syllabusDotpoints:** the three quoted blocks above. `verifyWording`: true (checked against `programme/syllabus/chem-2017-y12.json`, C6-IQ2-02, C6-IQ3-04 and C6-IQ2-04 with its two examples, p 53; the dash in "[OH–]" is U+2013 as in the official extraction).
- **Lesson link:** site lesson 12 (Ka and pKa), proposed; lesson 11 (method selection) is the alternative; root to confirm.
- **Playlist:** Year 12 Chemistry: Module 6, Acid/Base Reactions (2017 syllabus), after C10 (playlist order 15).

## Open decisions

- **The quadratic.** Module 5 (chem-m5-c06b, owner decision A) told students "HSC questions are written so you shouldn't need" the quadratic formula, and C08 says "Most HSC questions are written so the check passes". Q2 works it once because the route stop asks students to "choose an approximation or full method", and C08 deferred the worked full equation to this video. The narration offers "the quadratic formula, or your calculator's solver" and does not claim how often HSC questions need it. If the owner prefers no worked quadratic, Q2's walkthrough can stop at the failed check and a stated answer (x = 4.6 × 10⁻³ mol/L, pH 2.33, "from the full equation"), saving about 15 s.
- **Syllabus actions in the route entry** (C6-IQ3-04 and C6-IQ2-04 as practice actions) and the **lesson link**: root to decide.
- **Lesson key** (`m6g02`).
- **Length.** See "Narration length estimate".

## Review notes for Claude (author, not learner copy)

- **Hard-practice exception.** Walkthroughs run about 20 to 30 s per scene, three scenes per question; this is the content, not end-of-video feedback (AGENTS.md exception). The reviewer should check that no walkthrough re-teaches a C08 or C10 method (each rule is recalled in one clause; grey tags name the source video where shown).
- **No repeated examples.** Checked against C06, C08 and C10 (Decisions table). HCO₃⁻ and H₂PO₄⁻ are the syllabus's own amphiprotic examples and C06's; the Ka-against-Kb comparison on them is new.
- **Originality.** All four data sets were written for this video. The HCO₃⁻ and H₂PO₄⁻ comparison is a common textbook exercise, so the reviewer and Codex should check that the card wording does not closely follow a NESA paper.
- **Pronunciation.** "K a", "K b", "K w" and "p K a" as letters; "hypochlorous" as "high-po-CLOR-us", "hypochlorite" as "high-po-CLOR-ite"; "chloroethanoic" as "CLOR-oh-eth-a-NO-ik"; "benzoic" as "ben-ZOH-ik", "benzoate" as "BEN-zoh-ate"; "dihydrogen phosphate" as written; "ten to the minus eight"; "zero point zero zero zero zero" digits singly where they occur; formulas never spoken.
- **Doubts.** (a) Q4's prediction ("basic", "acidic") edges toward salt pH, which the route review moved to C13 and C14; it is kept qualitative and follows directly from which reaction wins, and the YouTube text says "basic or acidic" only. (b) The new aid "For an ion's Kb, use the Ka one proton up." is not in the bank. (c) Q2's quadratic (Open decisions). (d) Q3's [H₃O⁺] is shown as 9.55 × 10⁻⁴ (guard digit) while its reported value would be 9.5 × 10⁻⁴; the grey tag "keep the digits; round at the end" says why (C10 precedent).
- **No em dashes** in this file (searched).
