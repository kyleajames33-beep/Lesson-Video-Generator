# Maths A12 F06: How does expansion produce the finite geometric-sum formula? Shift and cancel, (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1, Sₙ for r ≠ 1, and choosing the form (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f06/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 6,063 characters, 16 scene headings, about 552 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: sixth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 43), after f05 (geometric sequences) and before f07 (limiting sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist (checked 2 Nov); pack work done here. Site lesson read (2 Nov, read-only): `sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (cards 02 and 07: derivation, forms, r = 1, example ∑ 3 × 2ᵏ⁻¹; fill-the-blanks 2, 6, 18 with n = 5; Problem 1 (b); SA 1). Every number recalculated with SymPy. Course outline entry: `math-a12-f06` (two content points, site source lesson 4).

Owner rules applied: as f05 (2024 syllabus only, codename and exact wording; coded visuals; no people; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions or site numbers; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts; attempt cards give nothing away; opens on f05's handoff frame; f01's sigma reading and f05's aₙ = arⁿ⁻¹ recalled by use, not re-taught).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `ci2edbe060`: "Prove by expansion (x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1) = xⁿ − 1 for whole numbers n ≥ 1"
- `ci3f619798`: "Develop the formula Sₙ = a(1 − rⁿ)/(1 − r) for the sum of the first n terms of a GP where r ≠ 1, and use this formula to solve problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f05's last frame (a `TermLadder` 1, 2, 4, 8, 16 with "×2" arcs, `PartialSumStack` columns S₁ to S₅ = 1, 3, 7, 15, 31, chips "1 + 2 + 4 + … + 512 = ?", "Next: add the terms fast" and "?"); notices the totals are one less than a power of 2 and predicts 1023; explains it by expanding (2 − 1)(1 + 2 + 4 + 8) with shifted rows that cancel; proves `ci2edbe060` by the same shift for any x and whole n ≥ 1; develops Sₙ with r ≠ 1 and the r = 1 case (`ci3f619798`); chooses between the two equivalent forms; works three sums (r = 2 in sigma form, r = −3, r = ½). Stops at finite geometric sums. Not taught: limiting sums (f07; the handoff shows totals creeping towards 128 as a question only), solving for n in a sum (practice video), applications (f08), annuities (finance strand).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: rice on a chessboard (painted plates, live).** One grain on the first square, two on the second, doubling each square: the grains on square k are 2ᵏ⁻¹, and the rice on the first n squares is Sₙ = 2ⁿ − 1. The anchor carries the clue and the proof. The clue: the total so far is always one grain less than the next square's pile. The proof: doubling every pile gives exactly the next square's pile, so "multiply by r" is visibly the whole row sliding one square along, and subtracting the old row leaves only the new end and the old start (scene 2). The whole board (2⁶⁴ − 1 grains) is the visual surprise (new scene 5a). A board game, not science; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts.
- **Site numbers unchanged.** Card 07's example (∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹ = 189), the originals (−182; 127½), A1 (242) and A2 (765). The hook's numbers (1, 3, 7, 15, 31; 1023) are Revision 1's, now as grains.
- **Idealising assumptions and sources (author notes, not learner copy).** (l) 2⁶⁴ − 1 = 18 446 744 073 709 551 615 grains. At 20 to 25 mg a grain that is about 370 to 460 billion tonnes; world rice production is of the order of 0.8 billion tonnes a year (FAO, paddy, early 2020s), so the board holds several hundred years of the world's harvest. **Revision 3 basis (240-F06-RICE-BASIS):** on one consistent basis, FAO's April 2026 milled-equivalent projection is 563.3 million tonnes a year, so the board is at least 200 years of milled output whenever a milled grain weighs at least 6.2 mg (2⁶⁴ − 1 grains × 6.2 mg ≈ 114 billion tonnes); on the paddy basis (about 0.8 billion tonnes a year) it needs a paddy grain of at least 8.7 mg. At 10 to 30 mg a grain the board is about 330 to 980 years of milled output, or 230 to 690 years of paddy. The learner claim "hundreds of years" therefore does not depend on the exact grain mass or basis, only on a grain weighing more than about 9 mg; no figure for one grain's mass is shown or spoken. Source: https://www.fao.org/newsroom/detail/fao-food-price-index-rises-in-march-as-near-east-conflict-raises-energy-costs/ The narration says only "hundreds of years of the whole world's rice harvest"; the maths check is asked to confirm the order of magnitude against a current FAO figure. (ii) Grains are drawn individually up to 64 per square; larger counts use one heap plate at a fixed size with a count label (the picture never claims to show 2⁶³ grains). (iii) The legend of the chessboard and the rice is not told (no people).
- **Join with f05 (changed, both designs edited together).** Scene 1 opens on f05 Revision 2's final frame exactly (the chessboard with 1, 2, 4, 8, 16 grains, the teal columns 1, 3, 7, 15, 31, "1 + 2 + 4 + … + 512 = ? (10 squares)", "Next: add the terms fast" and "?").
- **Join with f07 (changed, both designs edited together).** Scene 14 now ends on a tennis ball dropped from 128 cm (each bounce half the height it fell from) beside eight teal columns of its bounce heights' running totals 64 to 127½ against a dashed 128 line, with gap labels, "What if it never stops bouncing?", "Next: an endless sum" and "?". The numbers are scene 8's series; f07 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The grain board** (scenes 1, 2, 5a; the main simulation): squares fill with doubling piles, each total so far paired with the next square's pile; `LiveReadoutBoard` "square n", "grains on it", "total so far" (52 px). In scene 2 the doubled row slides one square along and cancels against the old row. In scene 5a it fast-forwards across all 64 squares to 18 446 744 073 709 551 615.
  2. **The form chooser** (scene 5): an amber r slider (r = 1 excluded) with live bracket values for both forms at n = 4, showing which form keeps both brackets positive.
  3. **The bouncing ball** (scene 14): the reused tennis ball falls from 128 cm and rebounds to 64, 32 and 16 while the stack of bounce-height totals builds towards 128 (f07's simulation, previewed).
- **Colour roles (fixed for the whole video).** Terms and the original row blue; the ratio r and the multiplied, shifted row amber; the subtracted row grey ink; cancelled pairs struck through in ink and fading (never red); survivors bold ink; Sₙ and running totals teal; n grey ink; targets dashed ink; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The chessboard 720 to 860 px square; the board strip about 900 px wide; shift-and-cancel rows at 52 px.
- **Handwritten voice (standard item 6).** `HandTag`: "total so far = next square − 1", "×2 = shift one square", "r ≠ 1", "r > 1: this form", "−1 < r < 1: this form", "hundreds of years of the world's rice harvest", "the last square wins", "brackets first", "used 3⁴: the power in Sₙ is n", "used 6 as the first term", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** The chessboard and its totals (1); the board strip beside the rows (2); the symbolic rows (3); Sₙ from the identity (4); the form chooser slider (5); the whole board (5a); the g01 boards (6, 7, 8); the framed memory card (9); question cards with pictures (10 to 13); the bouncing ball (14); key notes (15).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 6 to 8: task strip, givens card, equation strip, rows at 52 px, green framed answers; scene 7 carries a crossed "−3⁶ = −729". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: an empty five-slot ladder labelled k = 1 to 5; A2: an eight-slot ladder with only cards 2 and 5).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Times r shifts every term one step along. Subtract: only the new end and the old start are left." with the sliding grain piles. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** Doubling the piles slides the whole row one square along (scene 2), and the full board's total runs to twenty digits while the last square alone outweighs all the others (scene 5a).
- **Narration (not voiced).** Scenes 1 and 2 are rewritten around the chessboard (scene 2 adds the slide sentence); scene 5a is new; scene 14 is rewritten for the ball. Trims for length: scene 3 drops "The syllabus asks us to prove this for any x." (now a grey tag) and scene 5 drops "Choose the one that's easier to work with." Scenes 4 and 6 to 13 and 15 keep their Revision 1 text (cue marks on whole words in 6, 7, 11 and 13).

### Revision 1 decisions (kept where not overridden above)

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
  - Start boundary (Revision 2: on the chessboard): "Open on f05's 1, 2, 4, 8, 16 with totals 1, 3, 7, 15, 31 and '1 + 2 + … + 512 = ?'; notice the totals, then prove the identity by expansion."
  - Stop boundary: "Expansion proof of (x − 1)(xⁿ⁻¹ + … + 1) = xⁿ − 1; Sₙ for r ≠ 1 and na for r = 1; both forms and when each has positive brackets; sums for r = 2 (sigma), r = −3 and r = ½. No limiting sums, solving for n in a sum, or applications."
  - Next handoff (Revision 2): "math-a12-f07: a ball dropped from 128 cm, bounce heights 64 + 32 + 16 + … with totals building to 127½ against a dashed 128 line; ask what happens if it never stops bouncing."
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
Handoff (Revision 2): math-a12-f07: a bouncing ball's heights 64 + 32 + 16 + … with totals approaching 128 (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): terms (grains on a square, the original row) **blue**; the ratio r and the multiplied, shifted row **amber**; the subtracted row **grey ink**; cancelled pairs struck through in ink and fading (never red); survivors bold ink; running totals and Sₙ **teal**; the number of terms n **grey ink**; targets and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; row terms in the shift-and-cancel rows 52 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (chessboard, rows or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (one less than a power)
> Last video ended on a chessboard. One grain of rice on the first square, two on the second, then four, eight and sixteen, with running totals one, three, seven, fifteen and thirty-one. Look at the totals. Each one is one less than a power of two. Thirty-one is thirty-two minus **one**. If the pattern keeps going, the first ten squares hold two to the ten, minus one grains, which is one thousand and **twenty-three**. But a pattern isn't a reason. Why does it work, and does something like it work for every geometric sequence?

Visual: opens on f05's last frame exactly (f05 Revision 2 scene 14: the painted chessboard `ma12-chessboard-top-v1.png`, about 720 px square, with painted rice grains `ma12-rice-grain-v1.png` in clusters of 1, 2, 4, 8 and 16 on the first five squares of the bottom row, blue square labels and amber "×2" arcs; five teal `PartialSumStack` columns S₁ to S₅ with readouts 1, 3, 7, 15, 31; chips "1 + 2 + 4 + … + 512 = ? (10 squares)", "Next: add the terms fast" and "?"). Heading writes on: "How does expansion produce the finite geometric-sum formula?" as the chips fade. On "one less than a power of two" the grain simulation (simulation 1) pairs each total with the next square's pile: a dashed outline of one extra block sits on top of each column, and grey-ink tags under the columns read "2 − 1", "4 − 1", "8 − 1", "16 − 1", "32 − 1" one after another while the matching square (2, 3, 4, 5, then a sixth square filling with 32 grains) glows; hand tag "total so far = next square − 1". On "one" the last tag glows. On "first ten squares" squares 6 to 10 fill quickly (32 to 512 grains; past 64 grains each square shows the painted heap `ma12-rice-heap-v1.png` at a fixed size with a blue count label) with `LiveReadoutBoard` (52 px) "square n" (grey ink), "grains on it" (blue), "total so far" (teal); on "twenty-three" the total reads "1023" in pencil grey with a "?" (a prediction, not yet a result). On "a pattern isn't a reason" a chip "pattern ≠ proof" and the scene question "Why?" at the top right.

### 2. expanding with numbers
> Here's the reason, with a small case. Take two minus one, times one plus two plus four plus **eight**. Two minus one is just one, so this is the sum itself. Now expand the brackets. Two times the bracket gives two, four, eight and sixteen. On the board, doubling every pile gives the next square's pile, so the whole row slides one square **along**. Minus one times the bracket gives minus one, minus two, minus four and minus eight. Line them up, and the middle terms cancel in **pairs**. Only two terms survive: sixteen, and minus one. So the sum is sixteen minus **one**.

Visual: clear change to a split stage, both halves solid from the first frame. Left: four squares of the chessboard (a 1 × 5 strip cut from the board plate's bottom row, about 900 px wide) with grain piles 1, 2, 4, 8 on squares 1 to 4 and square 5 empty. Right: the row "(2 − 1)(1 + 2 + 4 + 8)" (52 px); on "eight" a grey tag "2 − 1 = 1, so this is the sum". On "Two times the bracket" the `ShiftCancelRows` top row writes in amber: "2 + 4 + 8 + 16"; on the board, each pile doubles. On "along" the doubled piles visibly match the next square's old pile, and the whole row of piles slides one square right (square 1 now empty, square 5 holding 16, amber); hand tag "×2 = shift one square". On "Minus one times" the second row in grey ink: "−1 − 2 − 4 − 8", and the original piles show as grey outlines on squares 1 to 4. On "pairs" the rows slide into columns by value (1, 2, 4, 8, 16), the top row one column to the right of the bottom row; the matching columns 2, 4, 8 are struck through in ink and fade one after another, and on the board the amber and grey piles on squares 2, 3 and 4 cancel and fade. On "survive" the survivors "16" (square 5) and "−1" (square 1) glow. On "one" green framed "1 + 2 + 4 + 8 = 16 − 1 = 15", with a tick against the stack's 15.

### 3. the proof for any x
> Take x minus one, times x to the n minus one, plus x to the n minus two, and so on, down to x, plus one. Multiplying the bracket by x raises every power by one, so the top term becomes x to the **n**. Multiplying by minus one gives the same powers as before, all negative. Every power from x up to x to the n minus one appears once with a plus and once with a **minus**, so they cancel. What's left is x to the n, minus one. Nothing here depended on which whole number n is, so it's true for every whole number from one **upward**.

Visual: camera continue; a grey tag "the syllabus proof" (the numeric rows and the board strip shrink to the top left as a reminder, 30 px). Row (52 px) "(x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x² + x + 1)". On "raises every power by one" the `ShiftCancelRows` top row writes "xⁿ + xⁿ⁻¹ + … + x³ + x² + x", each term arriving from the bracket with an amber "× x" flick; on "n" "xⁿ" glows. On "minus one" the second row: "−xⁿ⁻¹ − … − x² − x − 1" in grey ink, aligned by power (columns xⁿ, xⁿ⁻¹, …, x, 1). On "minus" the matched columns xⁿ⁻¹ to x are struck through and fade, including the columns hidden in "…" (a bracket "every power from x to xⁿ⁻¹"). Green framed: "(x − 1)(xⁿ⁻¹ + xⁿ⁻² + … + x + 1) = xⁿ − 1". On "upward" a grey tag "for whole numbers n ≥ 1" and a small check chip "n = 1: (x − 1)(1) = x − 1".

### 4. from the proof to Sₙ
> Now use it to add any geometric sequence. S sub n is a, plus a r, plus a r squared, up to a r to the n minus one. Take out the a, and the bracket is exactly the one we just expanded, with r in place of **x**. So r minus one, times S sub n, is a, times r to the n, minus one. To get S sub n alone, divide by r minus one. That's only allowed if r isn't one, because then we'd be dividing by **zero**. And if r is one, every term is a, so the sum is just n lots of **a**.

Visual: clear change (the framed identity stays small at the top). Rows at 52 px: "Sₙ = a + ar + ar² + … + arⁿ⁻¹" with a grey "n terms"; "= a(1 + r + r² + … + rⁿ⁻¹)"; on "x" the bracket glows and the identity's x's morph to amber r's: "(r − 1)(1 + r + … + rⁿ⁻¹) = rⁿ − 1". Row "(r − 1)Sₙ = a(rⁿ − 1)". On "divide" row "Sₙ = a(rⁿ − 1)/(r − 1)" with an amber hand tag "r ≠ 1"; on "zero" a red slip "÷ (r − 1) when r = 1: ÷ 0" writes and is crossed. On "a" a side chip with a small row of five equal blue blocks: "r = 1: a + a + … + a = na".

### 5. two forms of the same formula
> Multiply the top and bottom by minus one, and you get the form in the syllabus: a, times one minus r to the n, all over one minus r. Both forms always give the same value. When r is bigger than one, the r minus one form keeps the top and bottom **positive**. When r is between minus one and one, the one minus r form **does**. Some books get S sub n by multiplying it by r and subtracting. That's the same shift and cancel, done row by row.

Visual: camera continue. Rows "Sₙ = a(rⁿ − 1)/(r − 1)" and, on "minus one", "= a(1 − rⁿ)/(1 − r)" framed as the syllabus form, with "r ≠ 1". An amber `ParameterSlider` for r (from −0.9 to 3, r = 1 an excluded mark) with `LiveReadoutBoard` "r" (amber), "rⁿ − 1, r − 1" and "1 − rⁿ, 1 − r" (n = 4, signs coloured): on "positive" the slider sits at r = 2 and the first form's two brackets read "15" and "1" (both positive), hand tag "r > 1: this form"; on "does" the slider slides to r = 0.5 and the second form's brackets read "0.9375" and "0.5", hand tag "−1 < r < 1: this form". On "Some books" two small rows "rSₙ = ar + ar² + … + arⁿ" and "Sₙ = a + ar + … + arⁿ⁻¹" slide into the `ShiftCancelRows` layout; the middle columns strike through in a quick pass (about 1 s).

### 5a. the whole chessboard
> So how much rice is on the whole chessboard? Here a is one, r is two and n is sixty-four, so the total is two to the sixty-four, minus one. That's about eighteen billion billion **grains**, which is hundreds of years of the whole world's rice harvest. The last square alone holds more than all the other squares put together.

Visual: clear change: the full chessboard returns (about 860 px square, solid). Givens chip "a = 1, r = 2, n = 64" (44 px). Row at 52 px: "S₆₄ = 1 × (2⁶⁴ − 1)/(2 − 1) = 2⁶⁴ − 1". The grain simulation fast-forwards across all 64 squares in board order (about 4 s): small grain clusters on the first squares, then the heap plate on each square from square 7 on, drawn at one fixed size with a blue count label in powers of two; `LiveReadoutBoard` "square n" 1 → 64, "grains on it" (blue, scientific form) and "total so far" (teal). On "grains" the total reads "18 446 744 073 709 551 615" (44 px) with a grey "≈ 1.8 × 10¹⁹", and a hand tag "hundreds of years of the world's rice harvest" (author note l). On the last sentence the 64th square glows amber against the other 63 in teal: "2⁶³ > 2⁶³ − 1 (all the others)", hand tag "the last square wins".

### 6. worked example: a sum in sigma notation
> Let's use it. Find the sum from k equals one to six of three times two to the k minus one. The rule gives three, six, twelve, so a is three and r is two. The counter goes from one to six, so there are six **terms**. Since r is bigger than one, use the r minus one form. That's three, times two to the six, minus one, over two minus one. Two to the six is sixty-four, so it's three times sixty-three, which is one hundred and **eighty-nine**. Adding the six terms one by one gives the same **total**.

Visual: clear change to the g01 layout. Task strip: "Evaluate ∑ₖ₌₁⁶ 3 × 2ᵏ⁻¹." (site card 07 example). f01's `SigmaBuilder` reads it at the left: start "k = 1", stop "6", rule "3 × 2ᵏ⁻¹"; term cards 3, 6, 12 drop; givens card "a = 3 (blue), r = 2 (amber)"; on "terms" the count "6 − 1 + 1 = 6 terms" and "n = 6" (grey ink). Equation strip: "Sₙ = a(rⁿ − 1)/(r − 1)". Rows at 52 px: "S₆ = 3(2⁶ − 1)/(2 − 1)"; "= 3 × 63"; on "eighty-nine" green framed "189". On "total" the remaining cards 24, 48, 96 drop and the sum row closes "= 189" in teal with a tick.

### 7. worked example: a negative ratio
> Signs need care when r is negative. Find the sum of the first six terms of one, minus three, plus nine, minus twenty-seven, and so on. Here a is one, and r is minus three. Use the one minus r form, with brackets around minus three. Minus three to the six is seven hundred and twenty-nine, because an even power of a negative is **positive**. So the top is one minus seven hundred and twenty-nine, and the bottom is one plus three, which is **four**. The sum is minus seven hundred and twenty-eight over four, which is minus one hundred and **eighty-two**.

Visual: clear change (new case, g01 layout). Task strip: "Find the sum of the first 6 terms of 1 − 3 + 9 − 27 + …" (original). Givens card: "a = 1, r = −3 ÷ 1 = −3, n = 6". Rows at 52 px: "S₆ = 1(1 − (−3)⁶)/(1 − (−3))" with the brackets around −3 ringed amber; on "positive" "(−3)⁶ = 729" with a red slip "−3⁶ = −729" crossed (hand caption "brackets first"); on "four" "= (1 − 729)/4"; on "eighty-two" green framed "−728/4 = −182". A grey check strip "1 − 3 + 9 − 27 + 81 − 243 = −182", with the running totals bouncing 1, −2, 7, −20, 61, −182 on a small teal readout.

### 8. worked example: a ratio of a half
> One more, with a ratio less than one. Find the sum of the first eight terms of sixty-four, plus thirty-two, plus sixteen, and so on. Here a is sixty-four and r is a half. Use the one minus r form: sixty-four, times one minus a half to the eight, over one minus a **half**. Dividing by a half doubles, so that's one hundred and twenty-eight, times one minus one over two hundred and fifty-six. That's one hundred and twenty-eight, minus a half, so the sum is one hundred and twenty-seven and a **half**. Notice how close that is to one hundred and twenty-eight.

Visual: clear change (new case, g01 layout). Task strip: "Find the sum of the first 8 terms of 64 + 32 + 16 + …" (original). Givens card: "a = 64, r = ½, n = 8". Rows at 52 px: "S₈ = 64(1 − (½)⁸)/(1 − ½)"; on the first "half" "= 128(1 − 1/256)"; "= 128 − ½"; on the second "half" green framed "255/2", with grey "= 127.5". On the last sentence a dashed ink line "128" appears beside a single teal stack column of height 127½ (unit 4 px), a thin gap at the top glowing amber.

### 9. memory aid
> Here's the idea to remember. Multiplying by r shifts every term one step along. Subtract, and only the new end and the old start are **left**. That's why the formula has r to the n, minus one, inside it.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Inside: a small board strip with four grain piles sliding one square along, and under it a small `ShiftCancelRows` icon with four columns. The hand-font lines at 56 px: "Times r shifts every term one step along." Under it: "Subtract: only the new end and the old start are left." On "left" the middle columns strike through and "arⁿ" (new end, amber) and "a" (old start, blue) glow. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the sum from k equals one to five of two times three to the k minus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Evaluate ∑ₖ₌₁⁵ 2 × 3ᵏ⁻¹." (sigma typeset at 80 px with its limits). The full question stays on screen. Picture slot: an empty five-slot `TermLadder` labelled "k = 1" to "k = 5" (no terms, no ratio). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> The terms are two, six, eighteen, and so on, so a is two and r is three. The counter runs from one to five, so there are five **terms**. The sum is two, times three to the five, minus one, over three minus one, which is two hundred and **forty-two**. Eighty is wrong. It uses three to the four, the last term's power, instead of n, which is **five**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "a = 2", "r = 3", "n = 5" ("k = 1", "5" and "2 × 3ᵏ⁻¹" underlined as used); the ladder fills 2, 6, 18, 54, 162. On "terms" "n = 5 − 1 + 1 = 5". Row at 52 px "S₅ = 2(3⁵ − 1)/(3 − 1) = 2 × 242/2"; on "forty-two" green framed "242". On "five" a red slip "2(3⁴ − 1)/2 = 80" writes and is crossed (hand caption "used 3⁴: the power in Sₙ is n"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. In a geometric sequence, the second term is six and the fifth term is forty-eight. Find the sum of the first eight terms. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In a geometric sequence, the 2nd term is 6 and the 5th term is 48. Find the sum of the first 8 terms." The full question stays on screen. Picture slot: an eight-slot `TermLadder` with only card 2 (6) and card 5 (48) filled. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the second term to the fifth is three multiplications, so r cubed is forty-eight over six, which is eight, and r is **two**. Then a times two is six, so a is **three**. The sum of eight terms is three, times two to the eight, minus one, which is seven hundred and **sixty-five**. One thousand five hundred and thirty is wrong. It starts the sum at six, the second term, instead of **a**.

Visual: the card shrinks to the top; "2nd term is 6", "5th term is 48" and "first 8 terms" underlined as used. `GivensStrip`: "a₂ = 6", "a₅ = 48", "n = 8". Rows at 52 px "ar = 6, ar⁴ = 48"; on "two" "r³ = 8, r = 2"; on "three" "a = 3" and the ladder's first card fills 3. Row "S₈ = 3(2⁸ − 1)/(2 − 1) = 3 × 255"; on "sixty-five" green framed "765". On "a" a red slip "6(2⁸ − 1) = 1530" writes and is crossed (hand caption "used 6 as the first term"). Hold about 1 s.

### 14. handoff
> So the shift-and-cancel expansion gives the sum of any n terms, as long as r isn't one. Drop a tennis ball from one hundred and twenty-eight centimetres, and suppose each bounce reaches half the height it fell from. Its bounce heights are sixty-four, thirty-two, sixteen, and so on, and each new height fills half of the gap that's left below one hundred and twenty-eight. What happens if the ball never stops **bouncing**?

Visual: the memory-aid icon and the framed formula show small at the top (30 px), then fade on "Drop a tennis ball". Board clears: at the left the reused tennis ball `b6a-tennis-ball-v1.png` (about 90 px) above the reused floor strip `phys-y11-surface-floor-v1.png` beside a coded height scale 0 to 130 cm (5 px per cm), with a dashed ink line at 128 cm marking the drop height; the ball falls from 128 and rises to 64, then 32, then 16 (about 3 s), a dotted trail marking each peak. At the right, f01's `PartialSumStack` columns S₁ to S₈ of the bounce heights build quickly (teal readouts 64, 96, 112, 120, 124, 126, 127, 127½) towards a dashed ink line at 128; the gaps to the line are labelled in grey ink, 64, 32, 16, 8, 4, 2, 1, ½. On "bouncing" a chip "What if it never stops bouncing?", with "Next: an endless sum" and a "?" chip. No "limit" word and no S∞. Hold about 2 s. This is f07's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- (x − 1)(xⁿ⁻¹ + … + x + 1) = xⁿ − 1.
- Sₙ = a(1 − rⁿ)/(1 − r) = a(rⁿ − 1)/(r − 1), r ≠ 1.
- r = 1: Sₙ = na.
- Bracket a negative r: (−3)⁶ = 729.
- The power in Sₙ is n, the number of terms.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Times r shifts every term one step along. Subtract: only the new end and the old start are left.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (the tennis ball at its third peak above the floor strip with the height scale and the 128 cm drop line, the eight teal columns towards the 128 line with gap labels, "What if it never stops bouncing?", "Next: an endless sum" and "?"). This is the final frame and f07's opening frame.

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
| Whole board (Revision 2) | 2⁶⁴ − 1 = 18 446 744 073 709 551 615 ≈ 1.8 × 10¹⁹ grains; last square 2⁶³ > 2⁶³ − 1 | 5a |
| Handoff (Revision 2: a ball dropped from 128 cm, each bounce half the height it fell from) | bounce heights 64, 32, 16, …; totals 64, 96, 112, 120, 124, 126, 127, 127½; gaps 64, 32, …, ½; line 128 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run); Codex to re-check.

- 2ᵏ − 1 for k = 1 to 10: 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023; Σₖ₌₀⁹ 2ᵏ = 1023.
- Revision 3 (Python, 12 Nov): grains × 6.2 mg = 114.4 billion tonnes = 203 years of 563.3 Mt milled; × 8.7 mg = 160.5 billion tonnes = 200 years of 0.8 Bt paddy; × 10 mg = 184.5 Bt; × 30 mg = 553.4 Bt.
- Revision 2 (Python, 7 Nov): 2⁶⁴ − 1 = 18 446 744 073 709 551 615; 2⁶³ = 9 223 372 036 854 775 808; at 25 mg a grain, about 461 billion tonnes (369 at 20 mg); running totals of 1 − 3 + 9 − … are 1, −2, 7, −20, 61, −182; the form-chooser brackets at n = 4: r = 2 gives 15 and 1, r = 0.5 gives 0.9375 and 0.5.
- expand((x − 1)(xⁿ⁻¹ + … + 1)) = xⁿ − 1 for n = 1 to 6.
- 3(2⁶ − 1) = 189; (1 − (−3)⁶)/(1 + 3) = −182; 64(1 − 2⁻⁸)/(1/2) = 255/2.
- Partial sums of 64(½)ᵏ⁻¹: 64, 96, 112, 120, 124, 126, 127, 255/2; 128 − Sₙ = 64, 32, 16, 8, 4, 2, 1, ½.
- A1: 2(243 − 1)/2 = 242; 2(81 − 1)/2 = 80. A2: 48/6 = 8, r = 2, a = 3, 3 × 255 = 765, 6 × 255 = 1530.
- Form claim: r = −2, n = 2 gives 1 − rⁿ = −3 (site error 1).

## Memory aid check

- **"Times r shifts every term one step along. Subtract: only the new end and the old start are left."** Original. Meaning, as said in scene 9: rSₙ is Sₙ moved one step along, so rSₙ − Sₙ = arⁿ − a, the new end minus the old start. Assumptions checked: it gives (r − 1)Sₙ, and the student must still divide by r − 1, which needs r ≠ 1 (key note 2 and scene 4 carry the condition); "the new end" is arⁿ, one step past the last term arⁿ⁻¹, which is why the formula's power is n (key note 4). It helps a new case: 5 + 10 + 20 + … + 640 (8 terms) gives (2 − 1)S = 1280 − 5, so S = 1275. Introduced after the cause (2, 3) and the formula (4).
- **Considered, not used:** "first minus next-after-last over one minus r" (true, but harder to say than the shift picture).

## Narration length estimate

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,063 characters**, 16 scene headings (Revision 1, recounted the same way: 5,634). Characters per scene (in order): 521, 558, 519, 456, 432, 321, 487, 543, 552, 199, 114, 338, 153, 376, 419, 75.

At 13.3 characters per second the speech is about 456 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the board fills (1, 5a), the row slide (2), the slider (5) and the ball (14) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 552 s (9 min 12 s)**, inside the 5,500 to 7,000 character band and 18 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 5's last two sentences ("Some books ..."; keep the quick row pass silent); scene 7's first sentence (keep the amber rings). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f06` (route math-a12-f06). Suggested explainer folder `src/explainer/lessons/math-a12-f06` and build folder `docs/production/claude-pm/lessons/m-a12f06` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, `### N.` and one `### 5a.`): hook, numeric-expansion, proof-any-x, proof-to-sum, two-forms, whole-board, sigma-sum, negative-ratio, ratio-half, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f05's last frame continues into scene 1 (camera continue, same stack); 1 to 2 clear change; 2 to 3 camera continue (numeric rows shrink to a reminder); 3 to 4 clear change (identity kept small); 4 to 5 camera continue; 5 to 6, 6 to 7 and 7 to 8 clear changes (new cases); 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f06-learning-review.md`, `science_check` = `checks/m-a12f06-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `Rice.png` (an old 3D-rendered single grain on an opaque grey background, not the house style and not transparent), `biology/m6-golden-white-rice-v1.png` and `biology/m6-rice-bowls-white-golden-v1.png` (rice in bowls, a biology context; not loose grains on a board), `biology/b6a-tennis-ball-v1.png` (a painted tennis ball, transparent, 1600 × 1600; reused for scene 14) and `physics/phys-y11-surface-floor-v1.png` (a grey floor strip, 2400 × 300; reused for scene 14). No chessboard, loose grain or rice heap exists in the house style.

Reused (no copies needed): `biology/b6a-tennis-ball-v1.png`, `physics/phys-y11-surface-floor-v1.png` (scene 14; also f07's anchor).

Need (painted, new; see the Codex asset brief): `ma12-chessboard-top-v1.png`, `ma12-rice-grain-v1.png`, `ma12-rice-heap-v1.png` (the board and grain are also f05's final frame).

Coded (studio kit): square labels and arcs, readouts, the shift-and-cancel rows, the r slider, the stack columns and lines, the height scale, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider` (with its excluded mark), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `TermLadder`, `PartialSumStack`, `SigmaBuilder`, `SpriteStack` (f01).

Additions the build needs:
1. **`ShiftCancelRows`** (the Revision 1 part, kept), studio size: terms at 52 px, the shifted row in amber, struck columns in ink (not red).
2. **`BoardGrid`** (new): an 8 × 8 grid fitted to the chessboard plate's measured playing area, with per-square sprite clusters (grain sprites laid out in a tidy pattern up to 64, then the heap plate at a fixed size with a count label), square labels, glow and a row-slide animation that moves every square's contents one square along (scene 2).
3. **A big-number readout** (small): `LiveReadoutBoard` rows that switch to scientific form above 10⁶ and can show a 20-digit integer exactly (from a BigInt) at the end.

## Codex asset brief (Maths A12 F06, rice on a chessboard)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f06.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin; no text, letters, numbers, rank and file labels, logos, chess pieces, people, hands, faces, glow or ground shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-chessboard-top-v1.png` (2000 × 2000 px): a wooden chessboard seen from directly above, square, with 64 alternating light maple and dark walnut squares inside a plain timber border, **no letters or numbers on the border and no pieces**. The squares must be exactly equal and aligned to the image axes. Codex reports, in file pixels, the playing area [x0, y0, x1, y1] (the build divides it into 8 × 8 squares) and confirms the square size to within 1 px.
2. `ma12-rice-grain-v1.png` (300 × 300 px): one long white rice grain seen from above, slightly translucent at its ends, lying diagonally. Codex reports its length in file pixels. It must still read as a rice grain at 22 px long.
3. `ma12-rice-heap-v1.png` (1000 × 800 px): a small conical heap of white rice grains seen from a slight angle, as if poured onto a flat surface, with a few loose grains at the base. Codex reports its base line and bounding box. It must read at 80 px wide (one chessboard square).

Report inspection on the paper background (`#f6f1e7`) at 720 px for plate 1 (with a coded 8 × 8 grid overlaid to check alignment), 22 px and 60 px for plate 2, and 80 px for plate 3, plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f06-provenance.json`.

### Revision 1 coded part specification (kept; scene numbers as in Revision 1)

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

Put 1, 2, 4, 8, 16 grains of rice on the first squares of a chessboard and the running totals are 1, 3, 7, 15, 31: one less than a power of two every time. A pattern isn't a proof, so expand (2 − 1)(1 + 2 + 4 + 8) and watch the doubled row slide one step along and cancel the old row, leaving 16 − 1. The same shift proves (x − 1)(xⁿ⁻¹ + … + x + 1) = xⁿ − 1 for every whole number n, and gives the sum of the first n terms of any geometric sequence, Sₙ = a(1 − rⁿ)/(1 − r), as long as r ≠ 1. See which form keeps the brackets positive, and work sums with r = 2, r = −3 and r = ½. A memory aid: times r shifts every term one step along; subtract, and only the new end and the old start are left. Two exam-style questions at the end.

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

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the two syllabus points, the learner question, the site's numbers, both attempts, the cause chain and the memory aid are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "coded visuals" are superseded.

- **Anchor and why:** rice on a chessboard. The squares' piles are 1, 2, 4, 8, …, and doubling every pile is the same as sliding the row one square along, so the expansion proof (shift and cancel) happens on the board itself. The whole board (2⁶⁴ − 1 grains) gives the visual surprise. A board game; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the grain board (doubling piles, totals paired with the next square, the row slide that cancels, and the 64-square fast-forward with "square n", "grains on it" and "total so far" readouts); the form-chooser r slider with live bracket values; the bouncing-ball preview in the handoff.
- **Colour roles:** terms blue; r and the shifted row amber; the subtracted row grey ink; cancellations struck in ink; survivors bold ink; totals teal; n grey ink; targets dashed ink; answer green; mistake red.
- **Plates:** new `ma12-chessboard-top-v1.png`, `ma12-rice-grain-v1.png` (both also f05's final frame) and `ma12-rice-heap-v1.png`; reused `biology/b6a-tennis-ball-v1.png` and `physics/phys-y11-surface-floor-v1.png` (scene 14).
- **Narration changes (not voiced):** scenes 1 and 2 (the chessboard; scene 2 gains the slide sentence), new scene 5a (the whole board), scene 14 (the bouncing ball), and two trims (scene 3's first sentence, scene 5's "Choose the one ..." sentence). Scenes 4, 6 to 13 and 15 keep their Revision 1 text.
- **Counts:** 5,634 → 6,063 characters (both as the sum of scene strings; Revision 1 stated 5,648 with joining spaces); 15 → 16 scene headings (new `### 5a.`); about 525 s (old 60 s notes hold) → about 552 s with holds (notes 45 s), 18 s under the cap.
- **Scene ids:** add `whole-board` after `two-forms` (scene 5a); the others are unchanged.
- **Key notes:** five short one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on f05 Revision 2's chessboard; ends on the bouncing-ball frame that f07 Revision 2 opens on (all three edited together).
- **Kit additions:** studio `ShiftCancelRows` (ink strikes); a new `BoardGrid` with sprite clusters and a row slide; a big-number readout (scientific form and an exact 20-digit integer).

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **240-F06-RICE-BASIS (should fix).** Author note l now states one consistent basis (FAO April 2026, 563.3 Mt milled-equivalent; or about 0.8 Bt paddy) and shows that "hundreds of years" holds for any grain heavier than about 6 mg (milled) or 9 mg (paddy), so the spoken claim does not depend on an exact grain mass. No grain mass is shown or spoken. No narration change. Root note: a published single-grain mass (for example an IRRI 1000-grain weight) was not retrieved in this pass; it is needed only if a specific tonnage is ever put on screen.
- **Narration unchanged:** 6,063 characters, 16 scene strings (build parser rules).
