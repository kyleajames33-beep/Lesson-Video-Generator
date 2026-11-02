# Maths A12 F05: How does a fixed ratio determine a geometric sequence? Common ratio, n − 1 multiplications to the nth term, an exponential function of n, and finding a and r from two terms (design)

Status: Revision 1 (2 Nov). No independent review yet. Needs a student learning review, a Codex maths check and an error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the maths kit (briefs 129, 131, 133, 135 and 143) and the sequence parts specified in `math-a12-f01.md` (`TermLadder`, `PartialSumStack`, `SigmaBuilder`), `math-a12-f02.md` (`TermPlot`, `StepCounter`), `math-a12-f03.md` (`PairingRectangle`, not used here) and `math-a12-f04.md` (`PeriodTimeline`, not used here), plus small extensions and one new part specified below (`FoldLayers`). Nothing recorded; human listening pending.

Narration 5,972 characters, 15 scenes, about 549 s (9.2 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fifth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 42), after f04 (arithmetic models) and before f06 (finite geometric sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f05 to f08 (checked 2 Nov), so the pack work is done here: site lesson read (2 Nov, read-only) `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (hook; cards 02, 05 and 06 with worked examples 1 and 2; Problem 1 (a) and (c); MC Q1 and Q3; SA 1 (a)). Every number recalculated with SymPy (see "Numbers to verify"). Course outline entry: `math-a12-f05` (three content points, site source lesson 4).

Owner rules applied: as f01 to f04 (2024 syllabus only, codename and exact wording; coded visuals; no people or hands; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts; attempt cards give nothing away; opens on f04's handoff frame; f02's step counting recalled by use, not re-taught). Notation (root note, 2 Nov): the syllabus aₙ throughout, with a grey "also written Tₙ" note where the formula first appears (the site writes Tₙ).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `cicedf7ec4`: "Define a sequence aₙ to be a geometric sequence, or geometric progression (GP), if every ratio aₙ/aₙ₋₁ of successive terms is the same where n ≥ 2, that is aₙ = raₙ₋₁ for some non-zero real number r called the common ratio"
- `cif4672044`: "Develop the formula aₙ = arⁿ⁻¹ for the nth term of a GP, where a is the first term and n ≥ 1, and use it to solve problems"
- `cic01c1893`: "Recognise that aₙ is an exponential function of n in a GP"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary:** starts from f04's last frame (a `TermLadder` 2, 4, 8, 16 with grey unequal differences "+2", "+4", "+8" tagged "not the same step", amber "×2" arcs, chips "Next: the same ratio every time" and "?"); defines a GP by the ratio of successive terms, with r non-zero (`cicedf7ec4`); tests examples with r = 3, ½ and −2 and a non-example; develops aₙ = arⁿ⁻¹ by counting n − 1 multiplications (`cif4672044`), resolving the site's paper-folding hook; shows aₙ as an exponential function of n against f02's straight line (`cic01c1893`); solves for a term, the first term over a target (logs) and a and r from two terms, with the even-gap ± case. Stops at geometric terms. Not taught: sums of geometric terms (f06; the handoff shows running totals as a question only), limiting sums (f07), percentage growth and decay models (f08).

## Decisions

- **Learner question kept (outline).** "How does a fixed ratio determine a geometric sequence?" The answer, built in order: when every term is the one before multiplied by the same number r, the sequence is geometric, and dividing each term by the one before tests it (2); r can be a fraction or negative, which makes the terms shrink or alternate, but never zero (3); the nth term is n − 1 multiplications by r from a, so aₙ = arⁿ⁻¹ (4); because n is in the power, aₙ is an exponential function of n, so the points curve away from f02's straight line (5); the formula finds a term (6), the first term past a target with logs (7), and a and r from two terms by dividing (8).
- **The hook surprise (site hook "Think about this", numbers unchanged).** Paper 0.1 mm thick folded 42 times would be about 440,000 km thick, past the Moon (site card 11 resolution: 0.1 × 2⁴² mm ≈ 440,000 km, "That's T₄₃"). The guesses "a few centimetres? a metre?" are spoken; the answer is stated at once (no waiting), and the cause is the subject of scene 4. "If you could" is spoken, because real paper cannot be folded 42 times (author note a). The Moon's average distance (about 384,000 km) is a grey readout and one spoken clause so the comparison is checkable.
- **Definition by ratio (`cicedf7ec4`; site card 05 examples, numbers unchanged).** 2, 6, 18, 54 (ratios 3, 3, 3); 5, 10, 20, 35 (ratios 2, 2, 7/4: not a GP; the site gives its differences, the video gives its ratios because that is the test). Scene 3: 100, 50, 25, 12.5 (r = ½, shrinking towards 0); 1, −2, 4, −8 (r = −2, alternating). Why r ≠ 0, in learner copy because the syllabus definition requires it: if r were zero, every later term would be zero and the ratio test would divide by zero (author note b).
- **The nth term by counting multiplications (`cif4672044`).** a, ar, ar², … on a `TermLadder` with "×r" arcs counted by f02's `StepCounter`; the same posts-and-gaps count as f02 (recalled in one clause, "just like arithmetic sequences, the nth term is n minus one steps from the first"). The paper resolves it: the unfolded sheet is term 1, so 42 folds give term 43, 0.1 × 2⁴² mm. The grey note "also written Tₙ" sits beside the boxed formula.
- **Exponential in n (`cic01c1893`).** `TermPlot` of aₙ = 3 × 2ⁿ⁻¹ for n = 1 to 6 with a dashed exponential guide curve, beside a faint f02-style straight line through 3, 6, 9, … (an AP with the same first two terms) for contrast. "n is in the power" is the cause. Scope (author note c): an exponential function needs a positive base, so the narration says "with a positive r, the points sit on an exponential curve"; r = ½ falls towards zero; a negative r alternates sides of the axis (shown, not called exponential).
- **Worked examples (site card 06 example 1 and Problem 1, numbers unchanged).** 3, 6, 12, …: a₈ = 3 × 2⁷ = 384 (6). First term over 1000: 2ⁿ⁻¹ > 1000/3 (exact, not the site's 333.3); n − 1 > log(1000/3)/log 2 ≈ 8.38 (grey); n > 9.38, so n = 10; checks a₉ = 768, a₁₀ = 1536 (7). The reason the inequality keeps its direction (log 2 > 0) is spoken, because f08 needs the reverse case (log 0.85 < 0).
- **From two terms (site card 06 example 2, numbers unchanged).** a₃ = 12, a₆ = 96: three multiplications between them, r³ = 8, r = 2, a = 3 (8). The even-gap case is stated in one sentence (two real roots, so two sequences), and attempt 2 tests it.
- **Attempts (original).** (A1) "Find the 6th term of the geometric sequence 4, −12, 36, …" r = −3, a₆ = 4 × (−3)⁵ = −972. Crossed: "2916" (4 × (−3)⁶: one multiplication too many, which also loses the sign). (A2) "In a geometric sequence, the 2nd term is 6 and the 4th term is 54. Find all possible values of a and r." r² = 9, so (a, r) = (2, 3) or (−2, −3). Crossed: "a = 2, r = 3 only" (misses −2, 6, −18, 54). The site's SA 1 (a₂ = 6, a₅ = 48, odd gap) is kept for f06's attempt 2, where it combines with a sum. Neither card shows r, a power or a formula.
- **Mistake scene:** none separate. "Unequal differences, so it's not a pattern" (hook); "one equal ratio pair is enough" (2, the non-example); "r can be zero" (3); "n multiplications to reach term n" (4; A1 crossed); "a GP is a straight line" (5); "the inequality flips" (7, stated as not flipping here, with the reason); "only the positive root" (8; A2 crossed).
- **Memory aid (original, built on f02's posts and gaps).** "Arithmetic adds the same number. Geometric multiplies by the same number. To reach term n, multiply by r, n − 1 times." See "Memory aid check".
- **Handoff (to f06, "How does expansion produce the finite geometric-sum formula?").** Scene 14 sums up in one sentence, then shows a `TermLadder` 1, 2, 4, 8, 16 with "×2" arcs and, under it, f01's `PartialSumStack` columns S₁ to S₅ = 1, 3, 7, 15, 31 (readouts grey), and the chip "1 + 2 + 4 + … + 512 = ?" with "Next: add the terms fast" and "?". No formula, no "one less than" hint. Scene 15 returns to this frame silently; it is f06's opening frame.
- **Site sources used:** hook (paper), card 05 (definition, four examples), card 06 (both worked examples), Problem 1 (a) and (c). Not used: card 06 "which term equals 384" (circular after finding a₈), MC Q1 and Q3 (same skill as A1), card 02's "S∞" summary (f07).
- **Site errors (new, lesson 4; for root to log; none in `site-corrections-maths-a12.md` yet for this page).** (1) Card 06 example 1 and Problem 1 (c) write "2ⁿ⁻¹ > 333.3" and "log 333.3", rounding 1000/3 before taking logs; the conclusion n = 10 is right. Correction: keep 1000/3 exact ("2ⁿ⁻¹ > 1000/3"), with the decimal only as a calculator readout. Minor. (2) The page header shows the site code "MAV-12-03" and the footer link names "Lesson 4 · Geometric Sequences in Finance" as the next page; the metadata label is not copied here (root decision on site labels). Not an error in mathematics; noted only. Further lesson 4 items are logged in f06 (f07 and f08 found none new).
- **Cause chain taught, in order:** (1) a GP multiplies by the same r each step; equal ratios test it, and one different ratio rules it out (2); (2) a fractional r shrinks the terms, a negative r flips the sign each step, and r cannot be zero (3); (3) term n is n − 1 multiplications from a, so aₙ = arⁿ⁻¹, and 42 doublings multiply by about 4.4 trillion (4); (4) n in the power makes aₙ exponential in n, so the jumps grow (5); (5) a positive log keeps an inequality's direction, and positions are whole numbers (7); (6) dividing two terms cancels a and leaves r to the power of the gap; an even gap gives a ± pair (8).
- **Draft route entry (for root; no route-inputs-3 entry exists).**
  - id `math-a12-f05`; playlist order 42; main learner question "How does a fixed ratio determine a geometric sequence?"; syllabus actions `cicedf7ec4`, `cif4672044`, `cic01c1893`.
  - Entry knowledge: f01 (sequence, term, position, aₙ); f02 (n − 1 steps to term n; aₙ linear in n for an AP; a and d from two terms); f04 (AP models; a fixed percentage is not arithmetic); Year 11 index laws, exponential functions and logarithms (solving aˣ > k with logs).
  - Start boundary: "Open on f04's 2, 4, 8, 16 with ×2 arcs; define a GP and r by successive ratios, r ≠ 0."
  - Stop boundary: "aₙ = arⁿ⁻¹ by counting n − 1 multiplications; exponential in n (r > 0), shrinking or alternating cases; a term, the first term past a target with logs, a and r from two terms with the even-gap ± case. No sums, limiting sums or percentage models."
  - Next handoff: "math-a12-f06: 1, 2, 4, 8, 16 with running totals 1, 3, 7, 15, 31 and '1 + 2 + … + 512 = ?'; ask for a shortcut."
  - Prerequisite videos: math-a12-f02, math-a12-f04.
- **Learner-visible vocabulary (plain meaning at first use):** geometric sequence, geometric progression, GP (each term is the one before multiplied by the same number, 2); common ratio r (that number, each term divided by the one before, 2); exponential function of n (a rule with n in the power, 5); logarithm (recall: the power you need, 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **fold layers** (`FoldLayers`, new: a side-on stack of thin layer lines that doubles on each cue, with a thickness readout; abstract lines only, no paper sheet, hands or folding action drawn; see "Codex asset brief"); `TermLadder` with "×r" arcs and `ratioLabels` (f01 part; small extension below); `StepCounter` counting multiplications (f02); `TermPlot` with a `guideCurve` (f02 part; small extension below); `AlignedAlgebra`; number line as plain SVG (scene 7); `Chip` with `cross`, `Callout`, `PenArrow`, `ReadoutPanel`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading` (shared kit).
- **Board layout (constant):** heading top-left; the ladder or plot on the left two-thirds; givens chip at the top of the right column, algebra below it, current line bright and earlier lines dim.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Paper: 0.1 mm × 2⁴² = 439,804,651,110.4 mm = 439,804.65 km ≈ 440,000 km. Mean Earth to Moon distance about 384,400 km (shown "about 384 000 km"). Real paper cannot be folded more than a handful of times; "if you could" is spoken. As a sequence starting at the unfolded sheet (a₁ = 0.1 mm), 42 folds give a₄₃ (site "T₄₃").
  (b) r ≠ 0: the definition divides by aₙ₋₁, so every term must be non-zero; with a ≠ 0 this is equivalent to r ≠ 0. The narration gives the consequence (every later term would be zero, and the ratio test would divide by zero).
  (c) Exponential: aₙ = arⁿ⁻¹ = (a/r)rⁿ, an exponential function of n when r > 0 (r ≠ 1). For r < 0, aₙ = (a/r)(−1)ⁿ|r|ⁿ, not an exponential function in the usual sense; the video shows the alternation and does not call it exponential. r = 1 gives a constant sequence (not mentioned).
  (d) 3, 6, 12: aₙ = 3 × 2ⁿ⁻¹ = (3/2) × 2ⁿ; a₈ = 384; log₂(1000/3) = 8.3808…; a₉ = 768 < 1000 < a₁₀ = 1536. Contrast AP with the same first two terms: 3, 6, 9, … (aₙ = 3n).
  (e) a₃ = 12, a₆ = 96: r³ = 8, the only real root r = 2; a = 12/4 = 3; terms 3, 6, 12, 24, 48, 96.
  (f) A1: r = −12/4 = −3; a₆ = 4(−3)⁵ = −972; 4(−3)⁶ = 2916. A2: ar = 6, ar³ = 54, r² = 9, r = ±3; a = 6/r = ±2; sequences 2, 6, 18, 54 and −2, 6, −18, 54.
  (g) Pronunciations: "a sub n", "a sub n minus one", "a r squared", "r to the power n minus one", "two to the forty-two", "one thousand over three", "eight point three eight", "nine point three eight", "r cubed".
  (h) Plot window (scene 5): n from 0 to 6.5, y from 0 to 105 (ticks 0, 20, …, 100); points of 3 × 2ⁿ⁻¹ for n = 1 to 6 (3, 6, 12, 24, 48, 96) on a dashed guide y = (3/2)2ˣ; faint AP points 3, 6, 9, 12, 15, 18 on a dashed line. Small insets for r = ½ (100, 50, 25, 12.5, 6.25) and r = −2 (1, −2, 4, −8, 16) on their own y-scales.

Main question: *When each term is the one before multiplied by the same number, how do we test it, find any term, and see why the terms grow so fast?*
Entry knowledge (f01, f02, f04; Year 11 index laws, exponentials and logarithms): n − 1 steps to term n; aₙ for an AP; solving with logs.
Stops after: the definition, aₙ = arⁿ⁻¹, exponential in n, and a and r from two terms. No sums.
Handoff: math-a12-f06: 1, 2, 4, 8, 16 with running totals and "1 + 2 + … + 512 = ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as f01 to f04): terms blue cards and points; steps amber arcs ("×r" for multiplications, grey "+d" for differences); running totals teal; reference lines red dashed; crossed chips red; current algebra line bright, earlier lines dim.

### 1. hook (doubling paper)
> Last video ended here. Two, four, eight, sixteen. The gaps aren't equal, so this isn't arithmetic, but every term is double the one before. Here's what doubling can do. A sheet of paper is about a tenth of a millimetre thick. Fold it in half, and it's two layers thick. Fold again, and it's four. If you could fold it forty-two times, how thick would it be? A few centimetres? A metre? It would be thicker than the distance to the **Moon**. How can doubling turn something so thin into something so huge?

Visual: opens on f04's last frame exactly (f04 scene 15: the `TermLadder` 2, 4, 8, 16 with grey "+2", "+4", "+8" tagged "not the same step", amber "×2" arcs, chips "Next: the same ratio every time" and "?"). Heading writes on: "How does a fixed ratio determine a geometric sequence?" as the chips fade. On "Here's what doubling can do" the ladder moves to the top and a `FoldLayers` stack draws at the left: one thin grey layer line, readout "0.1 mm"; on "two layers" it doubles to 2 lines ("0.2 mm"), on "four" to 4 ("0.4 mm"). On "forty-two times" the stack fast-forwards (8, 16, 32 lines, then a dense block) and the readout reads "42 folds: ?". Guess chips "a few cm?" and "1 m?" appear on the two guesses. On "Moon" (bold) the readout reads "about 440 000 km" with a grey line "Moon: about 384 000 km away", and both guess chips are crossed. The chip "How can doubling do this?" moves to the top right.

### 2. geometric sequences
> In a geometric sequence, each term is the one before, multiplied by the same number. That number is called the common ratio, r. So a sub n equals r times a sub n minus one. To test a sequence, divide each term by the one before it. Take two, six, eighteen, fifty-four. Six over two is three, eighteen over six is three, and fifty-four over eighteen is **three**. Every ratio is the same, so it's geometric, with r equal to three. Now try five, ten, twenty, thirty-five. The first two ratios are two, but thirty-five over twenty is one and three quarters. One different ratio is enough. It's not **geometric**.

Visual: clear change. Definition chip at the top of the right column: "geometric sequence (GP): aₙ = r aₙ₋₁ for n ≥ 2; r = common ratio". A `TermLadder` 2, 6, 18, 54; on "divide each term" amber arcs draw with ratio labels computed one at a time, "6 ÷ 2 = 3", "18 ÷ 6 = 3", and on "three" (bold) "54 ÷ 18 = 3"; tag "every ratio = 3: geometric, r = 3". On "five, ten" the ladder changes to 5, 10, 20, 35; arcs "10 ÷ 5 = 2", "20 ÷ 10 = 2", then "35 ÷ 20 = 7/4" in red, ringed. On "geometric" (bold) a red tag "one different ratio: not a GP".

### 3. fractions, negatives and zero
> The ratio doesn't have to be a whole number. One hundred, fifty, twenty-five, twelve and a half has r equal to a half. Each term is half the last, so the terms shrink towards **zero**. One, minus two, four, minus eight has r equal to minus two. Multiplying by a negative number flips the sign every time, so the terms **alternate**. But r can never be zero. If it were, every term after the first would be zero, and the ratio test would divide by **zero**.

Visual: camera continue. Ladder 100, 50, 25, 12.5 with arcs "×½"; on "zero" (first bold) the cards shrink in size along the row and a small number line under them shows the values closing on 0. On "One, minus two" the ladder changes to 1, −2, 4, −8 with arcs "×(−2)"; on "alternate" the cards tint above and below a thin axis line in turn (positive above, negative below). On the last two sentences a ghost ladder "5, 0, 0, 0" appears with arcs "×0" and a red "0 ÷ 0?" over the second arc; on "zero" (last bold) it is crossed, and the definition chip's "r ≠ 0" glows.

### 4. the nth term: count the multiplications
> Now a formula for any term. Start with a, the first term. The second term is a times r. The third is a times r times r, which is a r **squared**. Each step along multiplies by r once more. Just like arithmetic sequences, the nth term is n minus one steps from the first. So a sub n equals a, times r to the power n minus **one**. Back to the paper. The unfolded sheet is the first term, a tenth of a millimetre. After forty-two folds, it's the forty-third term, a tenth of a millimetre times two to the forty-two. Two to the forty-two is more than four trillion. That's why it reaches about four hundred and forty thousand **kilometres**.

Visual: clear change. A `TermLadder` with symbolic cards "a", "ar", "ar²", "ar³", "…", "aₙ" (positions n = 1, 2, 3, 4, …, n in grey). On "a times r" the first "×r" arc draws; on "squared" the second, and the card "ar²" glows. On "Each step along" a `StepCounter` counts the arcs from card 1 to card 4: "1", "2", "3" with a bracket "3 steps to term 4"; on "n minus one steps" a bracket from card 1 to card n across the "…": "n − 1 multiplications". On "one" (bold) boxed formula: "aₙ = arⁿ⁻¹ (n ≥ 1)" with a grey "also written Tₙ". On "Back to the paper" the `FoldLayers` stack returns small at the left: rows "a₁ = 0.1 mm (unfolded)"; "42 folds: a₄₃ = 0.1 × 2⁴² mm"; on "four trillion" a grey readout "2⁴² ≈ 4.4 × 10¹²"; on "kilometres" "≈ 440 000 km" boxed, and the scene 1 chip "How can doubling do this?" gets a tick.

### 5. an exponential function of n
> Here's why doubling grows so fast. Plot the terms of three, six, twelve, and so on. An arithmetic sequence adds the same amount each time, so its points lie on a straight line. Here each step multiplies, so each jump is bigger than the last, and the points curve **upward**. The formula is three times two to the n minus one. The variable n is in the power, so a sub n is an exponential function of **n**. With a positive r, the points sit on an exponential curve. When r is between zero and one, the curve falls towards zero instead. When r is negative, the signs alternate, so the points jump from one side of the axis to the **other**.

Visual: clear change to a `TermPlot` (author note h). Faint grey points of the AP 3, 6, 9, … on a dashed straight line, tag "AP: add 3 each step". On "Here each step multiplies" blue points of 3 × 2ⁿ⁻¹ build one by one (3, 6, 12, 24, 48, 96) with grey jump labels "+3", "+6", "+12", "+24", "+48" growing; on "upward" a dashed blue guide curve draws through them. Row on the next sentence: "aₙ = 3 × 2ⁿ⁻¹"; on "n" (bold) the exponent "n − 1" is ringed amber, tag "n in the power: exponential in n". On "between zero and one" a small inset plot: 100, 50, 25, 12.5, 6.25 falling towards a dashed y = 0 (tag "0 < r < 1"). On "negative" a second inset: 1, −2, 4, −8, 16 jumping across the axis (tag "r < 0: signs alternate"); on "other" the points pulse in turn.

### 6. worked example: the eighth term
> Let's use the formula. The sequence is three, six, twelve, and so on. Find the eighth term. First, a is three, and r is six over three, which is two. The eighth term is seven multiplications from the first, so it's three, times two to the power **seven**. Two to the seven is one hundred and twenty-eight, so the eighth term is three hundred and eighty-**four**.

Visual: board clears (new case). Task strip: "The sequence 3, 6, 12, … is geometric. Find a₈." (site card 06 example 1; Problem 1 (a)). Givens chip: "a = 3, r = 6 ÷ 3 = 2". A `TermLadder` 3, 6, 12, "…", "a₈" with a `StepCounter` bracket "7 multiplications". Rows: "a₈ = 3 × 2⁸⁻¹"; on "seven" "= 3 × 2⁷"; "= 3 × 128"; on "four" "= 384" boxed.

### 7. the first term over one thousand
> Which term is the first to go over one thousand? Set three times two to the n minus one above one thousand. Divide by three, so two to the n minus one is more than one thousand over three. To get n out of the power, take logs of both sides, and divide by log two. Log two is positive, so the inequality stays the same way round. Then n minus one is more than about eight point three **eight**, so n is more than nine point three eight. Positions are whole numbers, so it's the tenth term. Check both sides. The ninth term is seven hundred and sixty-eight, below one thousand, and the tenth is one thousand five hundred and thirty-**six**.

Visual: camera continue (same givens; the scene 6 rows dim). Task strip part 2: "Which term is the first to exceed 1000?" (site Problem 1 (c)). Rows: "3 × 2ⁿ⁻¹ > 1000"; "2ⁿ⁻¹ > 1000/3"; "(n − 1) log 2 > log(1000/3)" with a grey tag "log 2 > 0: sign stays"; on "eight" "n − 1 > log(1000/3) / log 2" with grey "≈ 8.38"; "n > 9.38" (grey). Number line with n = 9, 9.38 (dashed marker), 10; "n = 10" boxed. On "Check both sides" two cards against a red dashed 1000 line: "a₉ = 768" (below) and, on "six", "a₁₀ = 1536" (above).

### 8. worked example: from two terms
> What if you're given two terms, but not the first? The third term is twelve, and the sixth term is ninety-six. From the third term to the sixth is three multiplications, so ninety-six is twelve times r **cubed**. Dividing cancels a. So r cubed is eight, and r is **two**. Then a times r squared is twelve, so a times four is twelve, and a is three. Here the gap is three steps, an odd number, so there's only one real cube root. With an even number of steps, the root could be positive or negative, so you'd get two possible **sequences**.

Visual: board clears (new case). Task strip: "In a geometric sequence, a₃ = 12 and a₆ = 96. Find a and r." (site card 06 example 2). A `TermLadder` with blank cards at positions 1, 2, 4, 5 and cards "12" (n = 3) and "96" (n = 6); a `StepCounter` bracket from 3 to 6: "×r ×r ×r: 3 steps". Rows: "ar² = 12", "ar⁵ = 96"; on "cubed" "ar⁵ ÷ ar² = r³" with "a" struck in both; "r³ = 96 ÷ 12 = 8"; on "two" "r = 2" boxed. "a × 4 = 12, a = 3" boxed; the blank cards fill: 3, 6, 24, 48. On the last two sentences a grey chip "odd gap: one real root"; on "sequences" a second grey chip "even gap: r = ± root, two sequences".

### 9. memory aid
> Here's the difference to remember. Arithmetic adds the same number each step. Geometric multiplies by the same number each step. And to reach term n, you take n minus one steps, so you multiply by r, n minus one **times**.

Visual: the handwritten lines write large: "Arithmetic adds the same number. Geometric multiplies by the same number." Under it: "Term n: multiply by r, n − 1 times." Small icons: a ladder with "+d" arcs and a ladder with "×r" arcs. On "times" the "×r" arcs pulse and a `StepCounter` "n − 1" bracket draws. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the sixth term of the geometric sequence four, minus twelve, thirty-six, and so on. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find the 6th term of the geometric sequence 4, −12, 36, …" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no ladder, no formula).

### 11. feedback 1 (brief)
> First, r is minus twelve over four, which is minus three. The sixth term is five multiplications from the first, so it's four times minus three to the power **five**. An odd power of a negative number is negative, so the answer is minus nine hundred and seventy-**two**. Two thousand nine hundred and sixteen is wrong. It uses the power six, one multiplication too **many**.

Visual: card shrinks to the top; "6th term" and "4, −12" underlined as used. Row "r = −12 ÷ 4 = −3"; row "a₆ = 4 × (−3)⁵" (on "five"); on "two" "= 4 × (−243) = −972" boxed. On "many" a chip "2916" fades in and is crossed (caption "4 × (−3)⁶: one multiplication too many"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. In a geometric sequence, the second term is six and the fourth term is fifty-four. Find all possible values of a and r. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a geometric sequence, the 2nd term is 6 and the 4th term is 54. Find all possible values of a and r." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the second term to the fourth is two multiplications, so fifty-four is six times r **squared**. So r squared is nine, and r is three or minus **three**. Then a is six over r. So a is two with r equal to three, or a is minus two with r equal to minus **three**. Giving only r equals three is wrong. It misses the second sequence: minus two, six, minus eighteen, fifty-**four**.

Visual: card shrinks to the top; "2nd term is 6", "4th term is 54" and "all possible" underlined as used. Rows "ar = 6, ar³ = 54"; on "squared" "r² = 54 ÷ 6 = 9"; on "three" "r = 3 or r = −3"; on the next sentences two boxed results "a = 2, r = 3" and "a = −2, r = −3". On "four" a chip "a = 2, r = 3 only" fades in and is crossed (caption "misses −2, 6, −18, 54"). Hold about 1 second.

### 14. handoff
> So a geometric sequence multiplies by the same ratio every step, and its nth term is a times r to the n minus one. But what happens when we add the terms? One, two, four, eight, sixteen. Their running totals are one, three, seven, fifteen and thirty-one. What's the total of the first ten terms, up to five hundred and twelve, without adding them one by **one**?

Visual: the memory-aid icons show small at the top, then fade on "But what happens". Board clears to a `TermLadder`: 1, 2, 4, 8, 16 with amber "×2" arcs (positions n = 1 to 5 in grey). On "running totals" f01's `PartialSumStack` builds five columns under it, S₁ to S₅, with grey readouts 1, 3, 7, 15, 31. On "one" (bold) a chip "1 + 2 + 4 + … + 512 = ?", with "Next: add the terms fast" and a "?" chip. No formula, no "one less than" hint. Hold about 2 seconds. This is f06's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Geometric sequence (GP): every ratio aₙ/aₙ₋₁ (n ≥ 2) is the same number r, the common ratio, and r ≠ 0. Test by dividing each term by the one before.
2. nth term: aₙ = arⁿ⁻¹ (n ≥ 1), where a is the first term. Term n is n − 1 multiplications by r from a. (Also written Tₙ.)
3. aₙ is an exponential function of n (n is in the power). r > 1: grows; 0 < r < 1: shrinks towards 0; r < 0: signs alternate.
4. From two terms: divide to cancel a, giving r to the power of the gap. An even gap gives r = ± a root: check both.
5. "First term over a target": solve with logs, take the first whole n past the boundary, check both sides.

Memory aid (large, on the notes screen): *Arithmetic adds the same number. Geometric multiplies by the same number. Term n: multiply by r, n − 1 times.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (shared key-notes component, 1 s; root decision 20) to scene 14's frame exactly (1, 2, 4, 8, 16 with "×2" arcs, the five stack columns 1, 3, 7, 15, 31, the chips "1 + 2 + 4 + … + 512 = ?", "Next: add the terms fast" and "?"). This is the final frame and f06's opening frame.

## Teaching checks

- **Does it explain causes?** Why 2, 4, 8, 16 is not arithmetic but still a pattern: unequal differences, equal ratios (1, 2). Why one ratio is enough to rule out a GP (2). Why a fractional r shrinks and a negative r alternates; why r ≠ 0 (3). Why the power is n − 1: the first term has no multiplication (4). Why the paper reaches the Moon: 42 doublings multiply by more than four trillion (4). Why the points curve: each jump is a multiple of a bigger term, and n is in the power (5). Why the inequality keeps its direction: log 2 > 0 (7). Why dividing finds r: a cancels and the gap is the power (8). Why an even gap gives two sequences: two real roots (8; A2).
- **Misconceptions addressed:** "not arithmetic, so no pattern" (1); one matching ratio pair (2); r = 0 (3); n multiplications to term n (4; A1 crossed); GP points on a straight line (5); flipping the inequality without cause (7); only the positive root (8; A2 crossed).
- **One idea at a time:** one sequence per cue in 2 and 3; one stage per row in 6 to 8; the plot appears only where it carries the cause (5); insets enter one at a time.
- **Video makes it easier:** the student watches the layer stack double out of sight (1, 4), sees the ratio labels computed one by one and the odd one out turn red (2), sees cards shrink and alternate (3), counts the multiplications with the step counter (4, 8), and sees the doubling points curve away from the AP's straight line (5). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 26 s and 28 s (scenes 11 and 13).
- **Avoided double teaching:** f02's posts-and-gaps count (one clause in 4), f02's straight line for an AP (a faint contrast in 5), Year 11 logarithms (used, with one clause "to get n out of the power"); f04's "fixed percentage is not arithmetic" is not repeated (f08 owns percentage models).
- **Syllabus coverage:** `cicedf7ec4` (2, 3; key note 1); `cif4672044` (4, 6 to 8; A1, A2; key notes 2, 4, 5); `cic01c1893` (5; key note 3).
- **Out of scope by design:** geometric sums, limiting sums, percentage growth and decay models, finance.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "Find the 6th term of the geometric sequence 4, −12, 36, …"
Model answer: r = −12 ÷ 4 = −3; a₆ = 4 × (−3)⁵ = 4 × (−243) = −972. Classic mistake (crossed): "2916" (4 × (−3)⁶).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "In a geometric sequence, the 2nd term is 6 and the 4th term is 54. Find all possible values of a and r."
Model answer: ar = 6 and ar³ = 54; dividing, r² = 9, so r = 3 or r = −3; a = 6/r, so a = 2, r = 3 (2, 6, 18, 54, …) or a = −2, r = −3 (−2, 6, −18, 54, …). Classic mistake (crossed): "a = 2, r = 3 only".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening | 2, 4, 8, 16; differences +2, +4, +8; ×2 | 1 |
| Paper (site) | 0.1 mm; 0.2, 0.4 mm; 0.1 × 2⁴² mm ≈ 440 000 km; 2⁴² ≈ 4.4 × 10¹²; Moon about 384 000 km; a₄₃ | 1, 4 |
| GP test (site) | 2, 6, 18, 54: ratios 3, 3, 3; 5, 10, 20, 35: ratios 2, 2, 7/4 | 2 |
| Fraction and negative r (site) | 100, 50, 25, 12.5 (r = ½); 1, −2, 4, −8 (r = −2); ghost 5, 0, 0, 0 | 3, 5 |
| Plot | 3 × 2ⁿ⁻¹: 3, 6, 12, 24, 48, 96; AP 3, 6, 9, …, 18; insets 100 … 6.25 and 1 … 16 | 5 |
| a₈ (site) | 3 × 2⁷ = 384 | 6 |
| Threshold (site) | 2ⁿ⁻¹ > 1000/3; n − 1 > 8.38 (grey); n = 10; a₉ = 768, a₁₀ = 1536 | 7 |
| Two terms (site) | a₃ = 12, a₆ = 96; r³ = 8, r = 2, a = 3; 3, 6, 12, 24, 48, 96 | 8 |
| A1 | r = −3; a₆ = −972; crossed 2916 | 10, 11 |
| A2 | r² = 9; (2, 3) or (−2, −3); crossed "r = 3 only" | 12, 13 |
| Handoff | 1, 2, 4, 8, 16; S₁ to S₅ = 1, 3, 7, 15, 31; 512 = 2⁹ is the 10th term | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 0.1 × 2⁴² = 439 804 651 110.4 mm = 439 804.65 km; 2⁴² = 4 398 046 511 104.
- 6/2 = 18/6 = 54/18 = 3; 10/5 = 20/10 = 2, 35/20 = 7/4.
- 3 × 2ⁿ⁻¹ for n = 1 to 6: 3, 6, 12, 24, 48, 96; = (3/2) × 2ⁿ.
- a₈ = 3 × 128 = 384; log(1000/3)/log 2 = 8.3808…; a₉ = 768, a₁₀ = 1536.
- r³ = 8 has one real root, 2; a = 12/2² = 3.
- A1: 4 × (−3)⁵ = −972; 4 × (−3)⁶ = 2916; terms 4, −12, 36, −108, 324, −972.
- A2: r² = 54/6 = 9; (a, r) = (2, 3), (−2, −3); second terms both 6, fourth terms both 54.
- Handoff: 1 + 2 + 4 + 8 + 16 partial sums 1, 3, 7, 15, 31; 2⁹ = 512 is a₁₀ of 1, 2, 4, …

## Memory aid check

- **"Arithmetic adds the same number. Geometric multiplies by the same number. Term n: multiply by r, n − 1 times."** Original, built on f02's posts-and-gaps aid. Meaning, as said in scene 9: an AP's step is "+d", a GP's step is "×r", and term n is n − 1 steps from the first in both, so the GP's nth term has rⁿ⁻¹. Assumptions checked: the second line holds for n ≥ 1 with a the first term (for n = 1, r⁰ = 1, zero multiplications); it does not cover sequences that start counting at n = 0 (none in this video; f08 handles "after t periods"). It helps a new case: the 20th term of 5, 15, 45, … is 5 × 3¹⁹. Introduced after the cause (2 to 5) and the uses (6 to 8).
- **Considered, not used:** "GP: power is one less than the term number" (a bare slogan without the step picture); "r = next ÷ this" alone (covered in key note 1).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,972 characters**, 15 scenes. Characters per scene (1 to 15): 500, 601, 444, 626, 626, 354, 630, 527, 218, 121, 362, 151, 365, 358, 75 (the total includes the 14 joining spaces). At 13.3 characters per second the speech is about 449 s; add about 15 s of settling time for the layer stack in scenes 1 and 4, the ratio labels in scene 2, the plot and insets in scene 5 and the ladder fill in scene 8, 20 s for two countdowns, 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 100 s of holds): **about 549 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 1's "A few centimetres? A metre?" (keep the guess chips silent); scene 5's "With a positive r, the points sit on an exponential curve." (keep the tag); scene 7's "Check both sides." (keep the cards).

## Scene list and build ids

Lesson key `m-a12f05` (route math-a12-f05). Suggested explainer folder `src/explainer/lessons/math-a12-f05` and build folder `docs/production/claude-pm/lessons/m-a12f05` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, geometric-sequences, fractions-negatives-zero, nth-term, exponential-in-n, eighth-term, first-over-target, from-two-terms, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f04's last frame continues into scene 1 (camera continue, same ladder); 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change (symbolic ladder); 4 to 5 clear change (ladder to plot); 5 to 6 clear change (new case); 6 to 7 camera continue (same sequence); 7 to 8 clear change; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/m-a12f05-learning-review.md`, `science_check` = `checks/m-a12f05-maths-check.md`.

## Assets

Have: no plates. Existing kit used: `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`, `Heading`. Sequence parts from f01 (`TermLadder`, `PartialSumStack`) and f02 (`TermPlot`, `StepCounter`). The number line in scene 7 is plain SVG.

Small extensions (for the sequence-parts kit brief):
1. **`TermLadder.arcs` ratio labels.** f01's `arcs` take a label string; scene 2 needs the label computed and checked: an optional `check: 'ratio' | 'difference'` per arc that computes next ÷ this (or next − this) from the card values and throws if the label's value differs. Scene 3 needs `polarity` (cards sit above or below a thin axis line by sign) and `shrinkWithValue` (card scale follows |value| between set limits).
2. **`TermPlot.guideCurve`.** f02's `guideLine` checks points on a line; scene 5 needs a dashed curve from an author function (here (3/2)·2ˣ) with the same check that every drawn point lies on it within 1e-9, plus small `inset` plots with their own windows.

## Codex asset brief

No painted plate is needed (programme decision 5). Coded kit part for the sequence-parts kit brief (with f01's three, f02's two, f03's one and f04's one), in `src/explainer/math/`, exported through `kit.tsx`, with a pilot from this design's numbers, numerical checks, desktop and phone-landscape stills and a silent motion sample:

1. **`FoldLayers`** (scenes 1, 4). A side-on stack of thin horizontal layer lines representing a quantity that doubles; abstract lines only (no sheet of paper, hands or folding action). Props: `base` (thickness label for one layer, for example "0.1 mm"), `stepsAt` (frame cues; each cue doubles the visible layer count, with the stack growing upward from a baseline), `maxDrawnLayers` (above this, for example 64, the stack draws as a dense block and keeps growing in height on a compressed scale with a break mark), `fastForward` ({to: 42, from, duration}: steps quickly through the doublings with a counter "folds: k"), `readout` (author-supplied text per step; the part checks numeric readouts against base × 2ᵏ and throws if they differ), `reference` ({label, value}: a grey reference line such as "Moon: about 384 000 km", drawn as text only when off the scale), `size`. Checks: layer counts 1, 2, 4, 8, … at each step; 0.1 × 2⁴² mm = 439 804.65 km, shown "about 440 000 km"; the reference sits below the final readout in value. Fit check at 1920 and phone landscape.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the official 2024 text (linear form of the MathML), and that no site module label or code appears in learner copy or metadata.
3. Confirm the scope of learner-visible general claims: "r can never be zero" with its reason (3, key note 1); "aₙ = arⁿ⁻¹ (n ≥ 1)" (4, key note 2); "with a positive r, the points sit on an exponential curve" and the negative-r case not called exponential (5, key note 3; author note c); "an even gap gives r = ± a root" (8, key note 4).
4. Confirm the threshold reasoning in scene 7 (exact 1000/3; log 2 > 0 keeps the direction; n = 10; a₉ = 768 and a₁₀ = 1536), and the paper claim (42 folds = a₄₃ = 0.1 × 2⁴² mm ≈ 440 000 km, more than the Moon's mean distance of about 384 000 km).
5. Confirm both attempts carry every demand, are original in wording, and that neither card or its visuals shows r, a power, a formula or an answer.
6. Confirm the opening matches f04's scene 15 exactly and the handoff (scene 14) gives no sum formula or hint; scene 15 returns to it.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Geometric Sequences: Why the nth Term Is arⁿ⁻¹ | Year 12 Maths Advanced

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html

Fold a sheet of paper 0.1 mm thick in half 42 times (if you could) and it would be about 440,000 km thick, further than the Moon. See why: in a geometric sequence every term is the one before multiplied by the same common ratio r, so the nth term is n − 1 multiplications from the first, aₙ = arⁿ⁻¹. Test a sequence by dividing each term by the one before, see why r can be a fraction or negative but never zero, why the terms are an exponential function of n, how to find the first term over 1000 with logs, and how to find a and r from two terms (and why an even gap gives two answers). A memory aid: arithmetic adds the same number, geometric multiplies by the same number. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, sequences and series.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a sequence aₙ to be a geometric sequence, or geometric progression (GP), if every ratio aₙ/aₙ₋₁ of successive terms is the same where n ≥ 2, that is aₙ = raₙ₋₁ for some non-zero real number r called the common ratio"
"Develop the formula aₙ = arⁿ⁻¹ for the nth term of a GP, where a is the first term and n ≥ 1, and use it to solve problems"
"Recognise that aₙ is an exponential function of n in a GP"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

Builds on: Arithmetic sequences and arithmetic models (previous videos). Next: Why the geometric sum formula works.

#Year12Maths #MathsAdvanced #Sequences #HSCScience

## Open decisions

- **1. Paper hook and the Moon (learning review).** The site's hook is kept with "if you could" spoken and the Moon's mean distance as a grey readout. Confirm the hook earns attention without implying real paper can be folded 42 times. If root prefers a context with no physical caveat, the same scene works with a doubling count alone (2⁴² ≈ 4.4 trillion) at about the same length.
- **2. Negative r and "exponential" (maths check).** The narration says "with a positive r, the points sit on an exponential curve" and shows r < 0 as alternating, not as exponential (author note c), while key note 3 lists r < 0 under "aₙ is an exponential function of n". Confirm the key-note wording is acceptable as the syllabus statement with its cases, or change key note 3's first sentence to "For r > 0, aₙ is an exponential function of n".
- **3. Attempt 2 and the even gap (learning review).** Scene 8 states the even-gap case in one sentence and A2 tests it. Confirm the sentence is enough preparation for a student starting Year 12; fallback A2 with an odd gap (the site's SA 1, a₂ = 6, a₅ = 48) is reserved for f06.
- **4. Site link form.** `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from f01, f02, f04 and Year 11 logarithms; check that the paper's answer is resolved by counting multiplications, not just stated; that the ratio test is shown before the formula; that r ≠ 0 is a necessary condition with its reason; that the curve in scene 5 is read as evidence for "exponential in n"; that the log step names why the inequality keeps its direction; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The doubling layer stack, the computed ratio labels, the step counter and the curving points carry the explanation; judge them at playback speed in the voiced preview. Every card, point and readout must be computed from the same functions as the displayed expressions.
- The opening frame is f04's scene 15 as written on 2 Nov (by another designer). If f04's handoff changes in review, change scene 1's first visual to match. Scene 14 is f06's opening (same designer, written next).
