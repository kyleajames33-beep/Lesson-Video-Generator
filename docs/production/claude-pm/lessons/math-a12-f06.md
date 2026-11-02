# Maths A12 F06: How does expansion produce the finite geometric-sum formula? Shift and cancel, (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1, Sₙ for r ≠ 1, and choosing the form (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143) and the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`, `SigmaBuilder`) and `math-a12-f02.md` (`TermPlot`, `StepCounter`), with f05's `TermLadder` and `TermPlot` extensions, plus one new part specified below (`ShiftCancelRows`). Nothing recorded; human listening pending.

Narration 5,648 characters, 15 scenes, about 525 s (8.8 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: sixth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 43), after f05 (geometric sequences) and before f07 (limiting sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (cards 02 and 07: derivation, forms, r = 1, example ∑ 3 × 2ᵏ⁻¹; fill-the-blanks 2, 6, 18 with n = 5; Problem 1 (b); SA 1). Every number recalculated with SymPy. Course outline entry: `math-a12-f06` (two content points, site source lesson 4).

Owner rules applied: as f05 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions or site numbers; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts; attempt cards give nothing away; opens on f05's handoff frame; f01's sigma reading and f05's aₙ = arⁿ⁻¹ recalled by use, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `ci2edbe060`: "Prove by expansion (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1) = xⁿ − 1 for whole numbers n ≥ 1"
- `ci3f619798`: "Develop the formula Sₙ = a(1 − rⁿ)/(1 − r) for the sum of the first n terms of a GP where r ≠ 1, and use this formula to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f05's last frame (a `TermLadder` 1, 2, 4, 8, 16 with "×2" arcs, `PartialSumStack` columns S₁ to S₅ = 1, 3, 7, 15, 31, chips "1 + 2 + 4 + … + 512 = ?", "Next: add the terms fast" and "?"); notices the totals are one less than a power of 2 and predicts 1023; explains it by expanding (2 − 1)(1 + 2 + 4 + 8) with shifted rows that cancel; proves `ci2edbe060` by the same shift for any x and whole n ≥ 1; develops Sₙ with r ≠ 1 and the r = 1 case (`ci3f619798`); chooses between the two equivalent forms; works three sums (r = 2 in sigma form, r = −3, r = ½). Stops at finite geometric sums. Not taught: limiting sums (f07; the handoff shows totals creeping towards 128 as a question only), solving for n in a sum (practice video), applications (f08), annuities (finance strand).

## Decisions

- **Learner question kept (outline).** "How does expansion produce the finite geometric-sum formula?" The answer, built in order: the doubling totals are one less than a power of 2 (hook); multiplying the sum by (2 − 1) and expanding gives two rows, one shifted a step along, whose middle terms cancel, leaving 16 − 1 (2); the same shift works for any x, so (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1 (3); a GP sum is a times that bracket with x = r, so dividing by r − 1 (allowed only when r ≠ 1) gives Sₙ, and r = 1 gives na (4); the two forms are equal, and the one with positive brackets is easier (5); the formula adds any number of terms at once, with care for negative r (6 to 8).
- **The hook surprise (f05's handoff; pattern then reason).** 1, 3, 7, 15, 31 against 2, 4, 8, 16, 32; the prediction 2¹⁰ − 1 = 1023 is stated, then "a pattern isn't a reason" turns it into the question this video answers. The proof is the cause; the pattern is only the clue.
- **Expansion first, with numbers (`ci2edbe060`).** Scene 2 expands (2 − 1)(1 + 2 + 4 + 8) as two rows, 2 + 4 + 8 + 16 and −1 − 2 − 4 − 8, aligned by value, so equal terms stand in columns and cancel in pairs (`ShiftCancelRows`, new). Scene 3 repeats the same layout with xⁿ⁻¹, …, x, 1, naming the cause in a plain sentence: "multiplying the bracket by x raises every power by one". The site derives Sₙ by multiplying by r and subtracting (card 07); scene 5 names that as "the same shift and cancel, done row by row" in one sentence, so a student who meets it elsewhere sees it is the same argument.
- **Sₙ (`ci3f619798`).** Sₙ = a(1 + r + … + rⁿ⁻¹); with x = r, (r − 1)Sₙ = a(rⁿ − 1); r ≠ 1 is a necessary condition (division by r − 1) and is stated in learner copy; r = 1 gives Sₙ = na (site card 07 "special case"). The syllabus form a(1 − rⁿ)/(1 − r) comes from multiplying top and bottom by −1, and is boxed as the main form.
- **Choosing the form (site cards 02 and 07, corrected).** Learner copy: "When r is bigger than one, the r minus one form keeps the top and bottom positive. When r is between minus one and one, the one minus r form does." Both claims are true (author note b). The site's version ("numerator 1 − rⁿ > 0 when r < 1") is false for r < −1 with even n (site error 1).
- **Worked examples.** (6) Site card 07 example, numbers unchanged: ∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹ = 3(2⁶ − 1)/(2 − 1) = 189, checked by adding 3 + 6 + 12 + 24 + 48 + 96 (f01's `SigmaBuilder` reads start, stop and rule: six terms). (7) Original: 1 − 3 + 9 − 27 + …, six terms, a = 1, r = −3: (1 − (−3)⁶)/(1 − (−3)) = −728/4 = −182 (bracketed negative ratio; even power positive). (8) Original: 64 + 32 + 16 + …, eight terms, a = 64, r = ½: S₈ = 128(1 − 1/256) = 255/2, which is 127½; "notice how close that is to 128" sets up the handoff.
- **Attempts.** (A1) Original wording, site numbers (fill-the-blanks 2, 6, 18 with n = 5): "Evaluate ∑ₖ₌₁⁵ 2 × 3ᵏ⁻¹." 2(3⁵ − 1)/(3 − 1) = 242. Crossed: "80" (2(3⁴ − 1)/2: used the last term's power n − 1 instead of n). (A2) Site SA 1, numbers unchanged, original wording: "In a geometric sequence, the 2nd term is 6 and the 5th term is 48. Find the sum of the first 8 terms." r³ = 8, r = 2, a = 3; S₈ = 3(2⁸ − 1) = 765. Crossed: "1530" (6(2⁸ − 1): started the sum at the 2nd term). This uses f05's two-term method (odd gap, one real root) with the new sum. Neither card shows a, r, n or a formula.
- **Mistake scene:** none separate. "A pattern proves it" (hook); "the terms don't cancel" (2, 3); "divide by r − 1 always" (4, r = 1); "1 − rⁿ is always positive when r < 1" (5; site error 1); "−3⁶ = −729" (7); "the power is n − 1" (key note 4; A1 crossed); "a is the first given term" (A2 crossed).
- **Memory aid (original).** "Times r shifts every term one step along. Subtract, and only the new end and the old start are left." See "Memory aid check".
- **Handoff (to f07, "When does a geometric series have a limiting sum?").** Scene 14 sums up in one sentence, then shows a `PartialSumStack` of 64, 32, 16, … building eight columns S₁ to S₈ = 64, 96, 112, 120, 124, 126, 127, 127½ (grey readouts) towards a dashed red line at 128, with the gaps to the line labelled 64, 32, 16, 8, 4, 2, 1, ½ in grey, the chip "What if we never stop adding?", "Next: an endless sum" and "?". No S∞, no "limit" word. Scene 15 returns to this frame silently; it is f07's opening frame.
- **Site sources used:** card 07 (derivation by multiply and subtract, both forms, r = 1, the sigma example); card 02 (forms); the fill-the-blanks numbers (A1); SA 1 (A2). Not used: Problem 1 (b) S₈ = 765 for 3, 6, 12 (the same sum as A2; kept for A2).
- **Site errors (new, lesson 4; for root to log).** (1) Card 07 "Which form to use": "a(1 − rⁿ)/(1 − r): numerator (1 − rⁿ) > 0 when r < 1". False for r < −1 with even n (r = −2, n = 2: 1 − 4 = −3). Card 02 says the same ("Use the first when r < 1 (numerator stays positive)"). Correction: "for −1 < r < 1 both brackets in a(1 − rⁿ)/(1 − r) are positive; for r > 1 both in a(rⁿ − 1)/(r − 1) are positive; for r < −1 either form works, with care over signs." (2) Card 07 "NESA proof requirement" quotes the syllabus as "prove by expansion that (1 − r)∑ₖ₌₀ⁿ⁻¹ rᵏ = 1 − rⁿ for whole numbers" and says "This is exactly the derivation above". The 2024 point `ci2edbe060` reads "Prove by expansion (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1) = xⁿ − 1 for whole numbers n ≥ 1"; the quotation is not the official wording, and the card's derivation is multiply-and-subtract on Sₙ, not an expansion of the bracket product. Correction: quote the official text and add the expansion (as in scenes 2 and 3 here), noting that it is the same cancellation. (3) Card 07's copy prompt repeats the same range ("use when r < 1" for a(1 − rⁿ)/(1 − r)); correct it with item 1. Site error from f05 (1000/3 rounded) is not repeated.
- **Cause chain taught, in order:** (1) the doubling totals are one below the next power of 2 (hook, a clue only); (2) multiplying by (2 − 1) makes a doubled row and a negative row; equal values cancel in pairs, leaving the new end and the old start (2); (3) multiplying the bracket by x raises every power by one, so for any x all middle powers cancel: xⁿ − 1 (3); (4) a GP sum is a times that bracket with x = r; dividing needs r ≠ 1; if r = 1 every term is a (4); (5) multiplying top and bottom by −1 gives the same value; positive brackets reduce sign errors (5); (6) brackets around a negative r keep even powers positive (7); (7) a ratio of ½ leaves a small part missing from 128 (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f06`; playlist order 43; main learner question "How does expansion produce the finite geometric-sum formula?"; syllabus actions `ci2edbe060`, `ci3f619798`.
  - Entry knowledge: f01 (partial sums Sₙ, series, sigma notation with start, stop and rule); f05 (GP, r, aₙ = arⁿ⁻¹, a and r from two terms); Year 11 expanding brackets and index laws (x · xᵏ = xᵏ⁺¹).
  - Start boundary: "Open on f05's 1, 2, 4, 8, 16 with totals 1, 3, 7, 15, 31 and '1 + 2 + … + 512 = ?'; notice the totals, then prove the identity by expansion."
  - Stop boundary: "Expansion proof of (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1; Sₙ for r ≠ 1 and na for r = 1; both forms and when each has positive brackets; sums for r = 2 (sigma), r = −3 and r = ½. No limiting sums, solving for n in a sum, or applications."
  - Next handoff: "math-a12-f07: partial sums of 64 + 32 + 16 + … building to 127½ against a dashed 128 line; ask what happens if we never stop."
  - Prerequisite videos: math-a12-f01, math-a12-f05.
- **Learner-visible vocabulary (plain meaning at first use):** prove (show it is true for every case, not just the ones we tried, 1, 3); expansion (multiplying out brackets, 2); cancel (a term and its negative add to zero, 2); series and Sₙ (recall from f01: the sum of the first n terms, 4).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **shift and cancel rows** (`ShiftCancelRows`, new: two rows of terms placed in columns by power or value, one shifted a column along, with matched pairs struck and fading; see "Codex asset brief"); f05's `TermLadder` and f01's `PartialSumStack` (opening and handoff); f01's `SigmaBuilder` (scene 6, A1 feedback); `AlignedAlgebra`; `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the rows or stack on the left two-thirds; givens chip at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Identity: (x − 1)Σₖ₌₀ⁿ⁻¹ xᵏ = Σₖ₌₁ⁿ xᵏ − Σₖ₌₀ⁿ⁻¹ xᵏ = xⁿ − x⁰ = xⁿ − 1; verified symbolically for n = 1 to 6 and by the telescoping argument for all whole n ≥ 1. n = 1: the bracket is 1 and (x − 1)(1) = x − 1. It holds for every x, including x = 1 (both sides 0); the division step needs r ≠ 1.
  (b) Forms: a(1 − rⁿ)/(1 − r) = a(rⁿ − 1)/(r − 1). For r > 1: rⁿ − 1 > 0 and r − 1 > 0. For −1 < r < 1: |rⁿ| < 1 so 1 − rⁿ > 0, and 1 − r > 0. For r < −1 neither form has both brackets positive for every n (r = −3, n = 6: 1 − 729 < 0, 1 + 3 > 0).
  (c) Doubling totals: 2ᵏ − 1 for k = 1 to 10: 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023; 1 + 2 + … + 512 has 10 terms (512 = 2⁹).
  (d) Examples: ∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹ = 189 = 3 + 6 + 12 + 24 + 48 + 96; 1 − 3 + 9 − 27 + 81 − 243 = −182 = (1 − 729)/4; 64(1 − (½)⁸)/(½) = 128 − ½ = 255/2; partial sums 64, 96, 112, 120, 124, 126, 127, 255/2; the gap 128 − Sₙ equals the nth term 64(½)ⁿ⁻¹ (used in f07).
  (e) A1: 2(3⁵ − 1)/2 = 242 = 2 + 6 + 18 + 54 + 162; wrong 2(3⁴ − 1)/2 = 80. A2: r³ = 48/6 = 8, r = 2 (one real root, odd gap), a = 3; S₈ = 3 × 255 = 765; wrong 6 × 255 = 1530 (this is the sum of the 2nd to 9th terms).
  (f) Pronunciations: "x to the n minus one" (the power n − 1) against "x to the n, minus one" (xⁿ − 1): the build must pause at the comma; "r minus one form" and "one minus r form"; "minus three to the six"; "one hundred and twenty-seven and a half".

Main question: *The running totals of 1, 2, 4, 8, … are one less than a power of two. Why, and how does the same reason add up any geometric sequence?*
Entry knowledge (f01, f05; Year 11 expanding and index laws): Sₙ and sigma; aₙ = arⁿ⁻¹; multiplying out brackets.
Stops after: the expansion proof, Sₙ for r ≠ 1 (and na for r = 1), both forms, three sums. No limiting sums.
Handoff: math-a12-f07: 64 + 32 + 16 + … totals approaching 128 (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f05): terms blue; the shifted row amber, the negative row grey; cancelled pairs struck in red and fading; survivors bright ink; running totals teal; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (one less than a power)
> Last video ended with this question. One, two, four, eight, sixteen, with running totals one, three, seven, fifteen and thirty-one. Look at the totals. Each one is one less than a power of two. Three is four minus one. Seven is eight minus one. Thirty-one is thirty-two minus **one**. If the pattern keeps going, the first ten terms add to two to the ten, minus one, which is one thousand and twenty-**three**. But a pattern isn't a reason. Why does it work, and does something like it work for every geometric sequence?

Visual: opens on f05's last frame exactly (f05 scene 15: the `TermLadder` 1, 2, 4, 8, 16 with "×2" arcs, the five `PartialSumStack` columns with grey readouts 1, 3, 7, 15, 31, chips "1 + 2 + 4 + … + 512 = ?", "Next: add the terms fast" and "?"). Heading writes on: "How does expansion produce the finite geometric-sum formula?" as the chips fade. On "one less than a power of two" a dashed outline of one extra block sits on top of each column, and grey tags under the columns read "2 − 1", "4 − 1", "8 − 1", "16 − 1", "32 − 1" one after another; on "one" (bold) the last tag glows. On "ten terms" the chip "1 + 2 + … + 512" returns with "= 2¹⁰ − 1"; on "three" "= 1023" in grey with a "?" (a prediction, not yet a result). On "a pattern isn't a reason" a chip "pattern ≠ proof" and the scene question "Why?" at the top right.

### 2. expanding with numbers
> Here's the reason, with a small case. Take two minus one, times one plus two plus four plus **eight**. Two minus one is just one, so this is the sum itself. Now expand the brackets. Two times the bracket gives two, four, eight and sixteen. Minus one times the bracket gives minus one, minus two, minus four and minus eight. Line them up. The doubled row is the same as the old row, shifted one step along. So the middle terms cancel in **pairs**. Only two terms survive: sixteen, and minus one. So the sum is sixteen minus **one**.

Visual: clear change. Row "(2 − 1)(1 + 2 + 4 + 8)" at the top; on "eight" a grey tag "2 − 1 = 1, so this is the sum". On "Two times the bracket" a `ShiftCancelRows` top row draws in amber: "2 + 4 + 8 + 16"; on "Minus one times" the second row in grey: "−1 − 2 − 4 − 8". On "Line them up" the rows slide into columns by value (columns 1, 2, 4, 8, 16), the top row visibly one column to the right of the bottom row; tag "same terms, shifted one step". On "pairs" the matching columns 2, 4, 8 are struck in red and fade one after another. On "survive" the survivors "16" and "−1" glow. On "one" (last bold) the result "1 + 2 + 4 + 8 = 16 − 1 = 15" with a tick against the stack's 15.

### 3. the proof for any x
> The syllabus asks us to prove this for any x. Take x minus one, times x to the n minus one, plus x to the n minus two, and so on, down to x, plus one. Multiplying the bracket by x raises every power by one, so the top term becomes x to the **n**. Multiplying by minus one gives the same powers as before, all negative. Every power from x up to x to the n minus one appears once with a plus and once with a **minus**, so they cancel. What's left is x to the n, minus one. Nothing here depended on which whole number n is, so it's true for every whole number from one **upward**.

Visual: camera continue (the numeric rows shrink to the top left as a reminder). Row "(x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1)". On "raises every power by one" the `ShiftCancelRows` top row writes "xⁿ + xⁿ⁻¹ + … + x³ + x² + x", each term arriving from the bracket with an amber "× x" flick; on "n" (bold) "xⁿ" glows. On "minus one" the second row: "−xⁿ⁻¹ − … − x² − x − 1", aligned by power (columns xⁿ, xⁿ⁻¹, …, x, 1). On "minus" (bold) the matched columns xⁿ⁻¹ to x are struck and fade, including the columns hidden in "…" (a bracket "every power from x to xⁿ⁻¹"). Boxed: "(x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x + 1) = xⁿ − 1". On "upward" a grey tag "for whole numbers n ≥ 1" and a small check chip "n = 1: (x − 1)(1) = x − 1".

### 4. from the proof to Sₙ
> Now use it to add any geometric sequence. S sub n is a, plus a r, plus a r squared, up to a r to the n minus one. Take out the a, and the bracket is exactly the one we just expanded, with r in place of **x**. So r minus one, times S sub n, is a, times r to the n, minus one. To get S sub n alone, divide by r minus one. That's only allowed if r isn't one, because then we'd be dividing by **zero**. And if r is one, every term is a, so the sum is just n lots of **a**.

Visual: clear change (the boxed identity stays small at the top). Row "Sₙ = a + ar + ar² + … + arⁿ⁻¹" with a grey "n terms"; row "= a(1 + r + r² + … + rⁿ⁻¹)"; on "x" (bold) the bracket glows and the boxed identity's x's morph to r's: "(r − 1)(1 + r + … + rⁿ⁻¹) = rⁿ − 1". Row "(r − 1)Sₙ = a(rⁿ − 1)". On "divide" row "Sₙ = a(rⁿ − 1)/(r − 1)" with a red tag "r ≠ 1"; on "zero" a ghost "r − 1 = 0?" crossed. On "a" (last bold) a side chip "r = 1: a + a + … + a = na".

### 5. two forms of the same formula
> Multiply the top and bottom by minus one, and you get the form in the syllabus: a, times one minus r to the n, all over one minus r. Both forms always give the same value. Choose the one that's easier to work with. When r is bigger than one, the r minus one form keeps the top and bottom **positive**. When r is between minus one and one, the one minus r form **does**. Some books get S sub n by multiplying it by r and subtracting. That's the same shift and cancel, done row by row.

Visual: camera continue. Rows "Sₙ = a(rⁿ − 1)/(r − 1)" and, on "minus one", "= a(1 − rⁿ)/(1 − r)" boxed as the syllabus form, with "r ≠ 1". On "positive" (first bold) a grey number line of r with the region r > 1 tinted and the first form tagged "both brackets positive"; on "does" the region −1 < r < 1 tinted and the second form tagged. On "Some books" two small rows "rSₙ = ar + ar² + … + arⁿ" and "Sₙ = a + ar + … + arⁿ⁻¹" slide into the `ShiftCancelRows` layout; the middle columns strike in a quick pass (about 1 s).

### 6. worked example: a sum in sigma notation
> Let's use it. Find the sum from k equals one to six of three times two to the k minus one. The rule gives three, six, twelve, so a is three and r is two. The counter goes from one to six, so there are six **terms**. Since r is bigger than one, use the r minus one form. That's three, times two to the six, minus one, over two minus one. Two to the six is sixty-four, so it's three times sixty-three, which is one hundred and eighty-**nine**. Adding the six terms one by one gives the same **total**.

Visual: board clears (new case). Task strip: "Evaluate ∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹." (site card 07 example). f01's `SigmaBuilder` reads it: start "k = 1", stop "6", rule "3 × 2ᵏ⁻¹"; term cards 3, 6, 12 drop; givens chip "a = 3, r = 2"; on "terms" the count "6 − 1 + 1 = 6 terms" and "n = 6". Rows: "S₆ = 3(2⁶ − 1)/(2 − 1)"; "= 3 × 63"; on "nine" "= 189" boxed. On "total" the remaining cards 24, 48, 96 drop and the sum row closes "= 189" in teal with a tick.

### 7. worked example: a negative ratio
> Signs need care when r is negative. Find the sum of the first six terms of one, minus three, plus nine, minus twenty-seven, and so on. Here a is one, and r is minus three. Use the one minus r form, with brackets around minus three. Minus three to the six is seven hundred and twenty-nine, because an even power of a negative is **positive**. So the top is one minus seven hundred and twenty-nine, and the bottom is one plus three, which is **four**. The sum is minus seven hundred and twenty-eight over four, which is minus one hundred and eighty-**two**.

Visual: board clears (new case). Task strip: "Find the sum of the first 6 terms of 1 − 3 + 9 − 27 + …" (original). Givens chip: "a = 1, r = −3 ÷ 1 = −3, n = 6". Rows: "S₆ = 1(1 − (−3)⁶)/(1 − (−3))" with the brackets around −3 ringed amber; on "positive" "(−3)⁶ = 729" with a grey ghost "−3⁶ = −729" crossed; on "four" "= (1 − 729)/4"; on "two" "= −728/4 = −182" boxed. A grey check strip "1 − 3 + 9 − 27 + 81 − 243 = −182".

### 8. worked example: a ratio of a half
> One more, with a ratio less than one. Find the sum of the first eight terms of sixty-four, plus thirty-two, plus sixteen, and so on. Here a is sixty-four and r is a half. Use the one minus r form: sixty-four, times one minus a half to the eight, over one minus a **half**. Dividing by a half doubles, so that's one hundred and twenty-eight, times one minus one over two hundred and fifty-six. That's one hundred and twenty-eight, minus a half, so the sum is one hundred and twenty-seven and a **half**. Notice how close that is to one hundred and twenty-eight.

Visual: board clears (new case). Task strip: "Find the sum of the first 8 terms of 64 + 32 + 16 + …" (original). Givens chip: "a = 64, r = ½, n = 8". Rows: "S₈ = 64(1 − (½)⁸)/(1 − ½)"; on "half" (first bold) "= 128(1 − 1/256)"; "= 128 − ½"; on "half" (second bold) "= 255/2" boxed, with grey "= 127.5". On the last sentence a dashed red line "128" appears beside a single teal stack column of height 127½, a thin gap at the top glowing.

### 9. memory aid
> Here's the idea to remember. Multiplying by r shifts every term one step along. Subtract, and only the new end and the old start are **left**. That's why the formula has r to the n, minus one, inside it.

Visual: the handwritten lines write large: "Times r shifts every term one step along." Under it: "Subtract: only the new end and the old start are left." A small `ShiftCancelRows` icon with four columns; on "left" the middle columns strike and "arⁿ" (new end) and "a" (old start) glow. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the sum from k equals one to five of two times three to the k minus one. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Evaluate ∑ₖ₌₁⁵ 2 × 3ᵏ⁻¹." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no rows, no formula).

### 11. feedback 1 (brief)
> The terms are two, six, eighteen, and so on, so a is two and r is three. The counter runs from one to five, so there are five **terms**. The sum is two, times three to the five, minus one, over three minus one, which is two hundred and forty-**two**. Eighty is wrong. It uses three to the four, the last term's power, instead of n, which is **five**.

Visual: card shrinks to the top; "k = 1", "5" and "2 × 3ᵏ⁻¹" underlined as used. Givens chip "a = 2, r = 3"; on "terms" "n = 5 − 1 + 1 = 5". Row "S₅ = 2(3⁵ − 1)/(3 − 1) = 2 × 242/2"; on "two" "= 242" boxed. On "five" a chip "80" fades in and is crossed (caption "used 3⁴: the power in Sₙ is n"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. In a geometric sequence, the second term is six and the fifth term is forty-eight. Find the sum of the first eight terms. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a geometric sequence, the 2nd term is 6 and the 5th term is 48. Find the sum of the first 8 terms." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the second term to the fifth is three multiplications, so r cubed is forty-eight over six, which is eight, and r is **two**. Then a times two is six, so a is **three**. The sum of eight terms is three, times two to the eight, minus one, which is seven hundred and sixty-**five**. One thousand five hundred and thirty is wrong. It starts the sum at six, the second term, instead of **a**.

Visual: card shrinks to the top; "2nd term is 6", "5th term is 48" and "first 8 terms" underlined as used. Rows "ar = 6, ar⁴ = 48"; on "two" "r³ = 8, r = 2"; on "three" "a = 3"; row "S₈ = 3(2⁸ − 1)/(2 − 1) = 3 × 255"; on "five" "= 765" boxed. On "a" (last bold) a chip "1530" fades in and is crossed (caption "used 6 as the first term"). Hold about 1 second.

### 14. handoff
> So the shift-and-cancel expansion gives the sum of any n terms, as long as r isn't one. Now look again at sixty-four, plus thirty-two, plus sixteen. Each new term fills half of the gap that's left below one hundred and twenty-eight. What happens if we never stop **adding**?

Visual: the memory-aid icon and the boxed formula show small at the top, then fade on "Now look again". Board clears to f01's `PartialSumStack`: columns S₁ to S₈ for 64, 32, 16, … build quickly (grey readouts 64, 96, 112, 120, 124, 126, 127, 127½) towards a dashed red line at 128. On "half of the gap" the gaps between each column top and the line are labelled in grey, 64, 32, 16, 8, 4, 2, 1, ½, each half the one before. On "adding" a chip "What if we never stop adding?", with "Next: an endless sum" and a "?" chip. No "limit" word and no S∞. Hold about 2 seconds. This is f07's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Proof by expansion: (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x + 1) = xⁿ − 1 for whole n ≥ 1. Multiplying by x raises every power by one; the middle powers cancel, leaving xⁿ and −1.
2. Sum of the first n terms of a GP: Sₙ = a(1 − rⁿ)/(1 − r) = a(rⁿ − 1)/(r − 1), for r ≠ 1. If r = 1, Sₙ = na.
3. For r > 1, use a(rⁿ − 1)/(r − 1); for −1 < r < 1, use a(1 − rⁿ)/(1 − r). Put brackets around a negative r: (−3)⁶ = 729.
4. n counts the terms. The power in Sₙ is n (not the last term's n − 1).

Memory aid (large, on the notes screen): *Times r shifts every term one step along. Subtract: only the new end and the old start are left.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (the eight columns of 64 + 32 + 16 + … with grey readouts up to 127½, the dashed red line at 128, the grey gap labels, the chips "What if we never stop adding?", "Next: an endless sum" and "?"). This is the final frame and f07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the doubling totals are one below a power of 2: the doubled row is the old row shifted, so all but two terms cancel (2). Why the identity holds for every x and n: multiplying by x raises every power by one, whatever n is (3). Why Sₙ needs r ≠ 1: the step divides by r − 1 (4). Why na when r = 1 (4). Why the two forms agree and when each is positive (5). Why (−3)⁶ is positive (7). Why S₈ of 64 + 32 + … is just under 128: 128(1 − 1/256) (8).
- **Misconceptions addressed:** pattern taken as proof (hook); dividing by r − 1 when r = 1 (4); "1 − rⁿ > 0 whenever r < 1" (5; site error 1); −3⁶ for (−3)⁶ (7); the power n − 1 in Sₙ (A1 crossed; key note 4); a taken as the first given term (A2 crossed).
- **One idea at a time:** one row per cue in 2 and 3; the numeric case before the general proof; one form per cue in 5; one example per scene in 6 to 8.
- **Video makes it easier:** the student watches the doubled row slide one column along and the pairs strike out (2), sees the same happen with powers of x, including the hidden "…" columns (3), sees x turn into r inside the bracket (4), and sees the sum row close at 189 after the formula (6). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 25 s and 28 s (scenes 11 and 13).
- **Avoided double teaching:** f01's sigma reading (start, stop, rule and count) is used, not re-taught; f05's two-term method is used in A2 feedback in two sentences; Year 11 expanding in one phrase.
- **Syllabus coverage:** `ci2edbe060` (2, 3; key note 1); `ci3f619798` (4 to 8; A1, A2; key notes 2 to 4).
- **Out of scope by design:** limiting sums, solving for n in a sum, growth and decay applications, annuities.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording with site numbers, HSC style, 2 marks suggested, not an official marking scheme).** "Evaluate ∑ₖ₌₁⁵ 2 × 3ᵏ⁻¹."
Model answer: the terms are 2, 6, 18, …, so a = 2, r = 3, n = 5; S₅ = 2(3⁵ − 1)/(3 − 1) = 242 (check: 2 + 6 + 18 + 54 + 162 = 242). Classic mistake (crossed): "80" (used 3⁴).

**Attempt 2 (scene 12; site SA 1 numbers, original wording, HSC style, 3 marks suggested).** "In a geometric sequence, the 2nd term is 6 and the 5th term is 48. Find the sum of the first 8 terms."
Model answer: ar = 6, ar⁴ = 48, so r³ = 8 and r = 2; a = 3; S₈ = 3(2⁸ − 1)/(2 − 1) = 765. Classic mistake (crossed): "1530" (used a = 6).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 1, 2, 4, 8, 16; totals 1, 3, 7, 15, 31 = 2ᵏ − 1; 1 + … + 512 = 2¹⁰ − 1 = 1023 (prediction) | 1 |
| Numeric expansion | (2 − 1)(1 + 2 + 4 + 8) = 16 − 1 = 15 | 2 |
| Identity | (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1, n ≥ 1; n = 1 check | 3 |
| Sₙ | a(rⁿ − 1)/(r − 1) = a(1 − rⁿ)/(1 − r), r ≠ 1; na for r = 1 | 4, 5 |
| Sigma (site) | ∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹ = 3 × 63 = 189; terms 3, 6, 12, 24, 48, 96 | 6 |
| Negative r | 1 − 3 + 9 − … (6 terms) = (1 − 729)/4 = −182 | 7 |
| Ratio ½ | 64 + 32 + … (8 terms) = 128(1 − 1/256) = 255/2 = 127.5 | 8 |
| A1 (site numbers) | 2(3⁵ − 1)/2 = 242; crossed 80 | 10, 11 |
| A2 (site SA 1) | r = 2, a = 3, S₈ = 765; crossed 1530 | 12, 13 |
| Handoff | partial sums 64, 96, 112, 120, 124, 126, 127, 127½; gaps 64, 32, …, ½; line 128 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 2ᵏ − 1 for k = 1 to 10: 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023; Σₖ₌₀⁹ 2ᵏ = 1023.
- expand((x − 1)(xⁿ⁻¹ + … + 1)) = xⁿ − 1 for n = 1 to 6.
- 3(2⁶ − 1) = 189; (1 − (−3)⁶)/(1 + 3) = −182; 64(1 − 2⁻⁸)/(1/2) = 255/2.
- Partial sums of 64(½)ᵏ⁻¹: 64, 96, 112, 120, 124, 126, 127, 255/2; 128 − Sₙ = 64, 32, 16, 8, 4, 2, 1, ½.
- A1: 2(243 − 1)/2 = 242; 2(81 − 1)/2 = 80. A2: 48/6 = 8, r = 2, a = 3, 3 × 255 = 765, 6 × 255 = 1530.
- Form claim: r = −2, n = 2 gives 1 − rⁿ = −3 (site error 1).

## Memory aid check

- **"Times r shifts every term one step along. Subtract: only the new end and the old start are left."** Original. Meaning, as said in scene 9: rSₙ is Sₙ moved one step along, so rSₙ − Sₙ = arⁿ − a, the new end minus the old start. Assumptions checked: it gives (r − 1)Sₙ, and the student must still divide by r − 1, which needs r ≠ 1 (key note 2 and scene 4 carry the condition); "the new end" is arⁿ, one step past the last term arⁿ⁻¹, which is why the formula's power is n (key note 4). It helps a new case: 5 + 10 + 20 + … + 640 (8 terms) gives (2 − 1)S = 1280 − 5, so S = 1275. Introduced after the cause (2, 3) and the formula (4).
- **Considered, not used:** "first minus next-after-last over one minus r" (true, but harder to say than the shift picture).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,648 characters**, 15 scenes. Characters per scene (1 to 15): 512, 519, 565, 456, 475, 487, 543, 552, 199, 114, 338, 153, 376, 270, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 425 s; add about 15 s of settling time for the rows in scenes 2, 3 and 5, the sigma build in scene 6 and the stack in scene 14, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 525 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's last two sentences (keep the quick strike silent); scene 6's last sentence (keep the closing sum row); scene 8's last sentence (keep the 128 line).

## Scene list and build ids

Lesson key `m-a12f06` (route math-a12-f06). Suggested explainer folder `src/explainer/lessons/math-a12-f06` and build folder `docs/production/claude-pm/lessons/m-a12f06` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, numeric-expansion, proof-any-x, proof-to-sum, two-forms, sigma-sum, negative-ratio, ratio-half, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f05's last frame continues into scene 1 (camera continue, same stack); 1 to 2 clear change; 2 to 3 camera continue (numeric rows shrink to a reminder); 3 to 4 clear change (identity kept small); 4 to 5 camera continue; 5 to 6, 6 to 7 and 7 to 8 clear changes (new cases); 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f06-learning-review.md`, `science_check` = `checks/m-a12f06-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`TermLadder`, `PartialSumStack` with f03's `referenceLine`, `SigmaBuilder`). The r number line in scene 5 is plain SVG.

`PartialSumStack` extension (scene 14): `gapLabels` ({at}: grey labels for the gap between each column top and the `referenceLine`, author-supplied text checked against referenceLine − column total) and non-integer block heights (127½; f01 assumed positive terms, which still holds).

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit part for the sequence-parts kit brief (with f01's three, f02's two, f03's one, f04's one and f05's one), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample:

1. **`ShiftCancelRows`** (scenes 2, 3, 5, 9 icon; f13's annuity sum may reuse it). Two rows of signed terms placed in a shared column grid keyed by a column key (a power such as 4 for x⁴, or a value), so that equal terms of opposite sign stand in the same column. Props: `top` and `bottom` (arrays of {key, display (React node), sign}), `columns` (ordered keys; an `ellipsisColumn` option draws "…" for hidden middle columns, struck with the others), `enterAt` (per row), `alignAt` (rows slide from written order into columns; the top row's offset by one column must be visible), `strikeAt` ({key, at}[] or {all: true, at, stagger}: matched pairs strike in red and fade), `survivorsAt` (survivors glow), `numericCheck` (optional numeric evaluation at a test x: the part checks that the sum of both rows equals the boxed result and throws otherwise), `size` ('full' | 'icon'). Checks: pilot 1 (2 + 4 + 8 + 16) + (−1 − 2 − 4 − 8) = 15 with survivors 16 and −1; pilot 2 symbolic n = 6 at x = 3: rows sum to 3⁶ − 1 = 728; pilot 3 the rSₙ − Sₙ rows with a = 3, r = 2, n = 6: survivors 192 and −3, difference 189. A pair can only strike if its two entries share a key and have opposite signs; the part throws otherwise. Fit check with eight columns at 1920 and phone landscape.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the official 2024 text (linear form of the MathML), and that no site module label or code appears in learner copy or metadata.
3. Confirm the proof in scene 3 is a valid expansion proof for whole n ≥ 1 (including n = 1), and that scene 4 states r ≠ 1 as the condition for dividing, with Sₙ = na for r = 1.
4. Confirm the form claims in scene 5 and key note 3 (r > 1: both brackets of a(rⁿ − 1)/(r − 1) positive; −1 < r < 1: both brackets of a(1 − rⁿ)/(1 − r) positive), and site error 1's counterexample.
5. Confirm both attempts carry every demand, and that neither card or its visuals shows a, r, n, a formula or an answer.
6. Confirm the opening matches f05's scene 15 exactly and the handoff (scene 14) states no limiting sum, no "limit" word and no S∞; scene 15 returns to it.
7. Confirm the spoken distinction between "x to the n minus one" and "x to the n, minus one" is written with the comma in every place it is needed (author note f).
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Geometric Series: Why Sₙ = a(1 − rⁿ)/(1 − r), Proved by Expansion | Year 12 Maths Advanced

(Title length: 90 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html

Add 1 + 2 + 4 + 8 + 16 and the running totals are 1, 3, 7, 15, 31: one less than a power of two every time. A pattern isn't a proof, so expand (2 − 1)(1 + 2 + 4 + 8) and watch the doubled row slide one step along and cancel the old row, leaving 16 − 1. The same shift proves (x − 1)(xⁿ⁻¹ + … + x + 1) = xⁿ − 1 for every whole number n, and gives the sum of the first n terms of any geometric sequence, Sₙ = a(1 − rⁿ)/(1 − r), as long as r ≠ 1. See which form keeps the brackets positive, and work sums with r = 2, r = −3 and r = ½. A memory aid: times r shifts every term one step along; subtract, and only the new end and the old start are left. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Prove by expansion (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1) = xⁿ − 1 for whole numbers n ≥ 1"
"Develop the formula Sₙ = a(1 − rⁿ)/(1 − r) for the sum of the first n terms of a GP where r ≠ 1, and use this formula to solve problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Geometric sequences (previous video); sigma notation. Next: When does a geometric series have a limiting sum?

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. "Some books" sentence (learning review).** Scene 5 names the multiply-by-r-and-subtract derivation (the site's card 07 method) in one sentence and shows it as the same shift. Confirm it helps rather than distracts; if cut (about −100 characters), keep the quick strike silent.
- **2. Title length (root).** 90 characters with the formula; shorter alternative "Geometric Series: Proving the Sₙ Formula by Expansion | Year 12 Maths Advanced" (79 characters).
- **3. Solving for n in a sum (root).** "How many terms for the sum to exceed …" (logs on rⁿ) is not taught here, to keep one question per video; its later home is the sequences practice video, as with f03's threshold sums. Confirm.
- **4. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f01, f05 and Year 11 expanding; check that the pattern is shown as a clue and the expansion as the reason; that the shifted row is visibly one column along before any strike; that "multiplying the bracket by x raises every power by one" is said before the general cancellation; that r ≠ 1 is a necessary condition; that the form choice is stated with its true ranges; that the spoken "x to the n, minus one" is clear; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The shift, the paired strikes and the x-to-r morph carry the explanation; judge them at playback speed in the voiced preview. Every row and readout must be computed from the same values as the displayed expressions.
- The opening frame is f05's scene 15 (same designer, 2 Nov). Scene 14 is f07's opening (same designer, written next).
