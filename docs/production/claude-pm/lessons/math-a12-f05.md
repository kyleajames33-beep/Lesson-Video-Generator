# Maths A12 F05: How does a fixed ratio determine a geometric sequence? Common ratio, n − 1 multiplications to the nth term, an exponential function of n, and finding a and r from two terms (design)

Status: Revision 3 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026). Not voiced (no `math-a12-f05/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 6,100 characters (Revision 3; was 6,015), 15 scene headings, about 554 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: fifth video of the Year 12 Mathematics Advanced sequences strand (course outline playlist order 42), after f04 (arithmetic models) and before f06 (finite geometric sums). Templates: `math-a12-i05.md` and `math-a12-d10.md`: same section structure, voice, paper style and coded maths visuals; no painted plates (programme decision 5). No brief 151 pack and no route-inputs-3 entry exist for f05 to f08 (checked 2 Nov), so the pack work is done here: site lesson read (2 Nov, read-only) `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/sequences-and-series/lesson04.sa.html`, SHA256 `d1fd3515cc8305e434a4d55e703dffc7bff674fc014d3047911cf0b570497afc` (hook; cards 02, 05 and 06 with worked examples 1 and 2; Problem 1 (a) and (c); MC Q1 and Q3; SA 1 (a)). Every number recalculated with SymPy (see "Numbers to verify"). Course outline entry: `math-a12-f05` (three content points, site source lesson 4).

Owner rules applied: as f01 to f04 (2024 syllabus only, codename and exact wording; coded visuals; no people or hands; one reasoning stage at a time; task, formula and grouped givens separated; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed mistake; original questions; optional key notes; Australian spelling; no em dashes; causal narration; exact values in algebra, decimals only in grey readouts; attempt cards give nothing away; opens on f04's handoff frame; f02's step counting recalled by use, not re-taught). Notation (root note, 2 Nov): the syllabus aₙ throughout, with a grey "also written Tₙ" note where the formula first appears (the site writes Tₙ).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Geometric sequences and series; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form:

- `cicedf7ec4`: "Define a sequence aₙ to be a geometric sequence, or geometric progression (GP), if every ratio aₙ/aₙ₋₁ of successive terms is the same where n ≥ 2, that is aₙ = raₙ₋₁ for some non-zero real number r called the common ratio"
- `cif4672044`: "Develop the formula aₙ = arⁿ⁻¹ for the nth term of a GP, where a is the first term and n ≥ 1, and use it to solve problems"
- `cic01c1893`: "Recognise that aₙ is an exponential function of n in a GP"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617

**Boundary (Revision 1 wording; Revision 2 anchor contexts and joins in Decisions override it):** starts from f04's last frame (a `TermLadder` 2, 4, 8, 16 with grey unequal differences "+2", "+4", "+8" tagged "not the same step", amber "×2" arcs, chips "Next: the same ratio every time" and "?"); defines a GP by the ratio of successive terms, with r non-zero (`cicedf7ec4`); tests examples with r = 3, ½ and −2 and a non-example; develops aₙ = arⁿ⁻¹ by counting n − 1 multiplications (`cif4672044`), resolving the site's paper-folding hook; shows aₙ as an exponential function of n against f02's straight line (`cic01c1893`); solves for a term, the first term over a target (logs) and a and r from two terms, with the even-gap ± case. Stops at geometric terms. Not taught: sums of geometric terms (f06; the handoff shows running totals as a question only), limiting sums (f07), percentage growth and decay models (f08).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: folding a sheet of paper (painted plates, live; the site's own hook).** A sheet 0.1 mm thick doubles in thickness with every fold, so its thickness after n folds is the (n + 1)th term of 0.1, 0.2, 0.4, … mm. The site's surprise (42 folds would pass the Moon) becomes a fold simulation on a log ruler, with real landmarks passing the thickness marker. It carries the hook, the nth term (scene 4: "42 folds is the 43rd term"), and why exponential growth feels sudden. An everyday object, not science; distinct from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts. Revision 1 drew the paper only as abstract layer lines; the painted sheet and folded sheet now carry it, with the same coded layer stack beside them.
- **Site numbers unchanged.** Paper 0.1 mm, 2⁴² ≈ 4.4 × 10¹², ≈ 440 000 km against the Moon's mean distance of about 384 000 km; card 05's examples; card 06's worked examples (a₈ = 384; a₃ = 12, a₆ = 96); Problem 1 (a) and (c) (n = 10). Ruler landmarks are new author values (checked with Python): fold 8 = 25.6 mm, fold 15 = 3.28 m, fold 17 = 13.1 m, fold 27 = 13.4 km, fold 42 = 439 805 km.
- **Idealising assumptions (author notes, not learner copy).** (i) Real paper cannot be folded more than about seven or eight times by hand; "if you could" is spoken (kept). (ii) Landmark labels are approximate and given as everyday comparisons ("a thick book", "a four-storey building", "above where planes fly"); the narration does not state them. (iii) Plane cruising heights are about 10 to 12 km; 13.4 km is above them.
- **Join with f04 (kept).** Scene 1 opens on f04's final frame (2, 4, 8, 16 with unequal differences and "×2" arcs), unchanged by f04 Revision 2.
- **Join with f06 (changed, both designs edited together).** Scene 14 now ends on a painted chessboard with 1, 2, 4, 8, 16 rice grains on its first five squares, the running totals 1, 3, 7, 15, 31 as teal columns, "1 + 2 + 4 + … + 512 = ? (10 squares)", "Next: add the terms fast" and "?". The numbers are Revision 1's; only the picture changes. f06 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The fold simulation** (scenes 1, 4; the main simulation): the sheet and folded-sheet plates, a coded layer stack and a vertical log ruler; each fold doubles the stack and moves the thickness marker up one notch, with `LiveReadoutBoard` "folds", "term n" and "thickness" (52 px); a reused house plate and the reused Moon plate mark the scale (the visual surprise: the marker passes the Moon at fold 42).
  2. **The ratio slider** (scenes 3, 5): an amber `ParameterSlider` for r drives the plotted terms live: r = ½ shrinks towards 0, r = −2 alternates, r = 0 is an excluded mark (the points collapse and the ratio test breaks), and in scene 5 the sweep from r = 2 through ½ to −2 shows the three shapes of an exponential in n.
- **Colour roles (fixed for the whole video).** Terms (cards, points, the paper's thickness) blue; the ratio r and "×r" arcs amber; differences, positions and fold counts grey ink; running totals (handoff) teal; targets dashed ink; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** See the type line under "Script and shots". The sheet about 640 px wide; the log ruler about 760 px tall; plots about 1,100 to 1,200 × 640 to 720 px; the chessboard about 720 px square.
- **Handwritten voice (standard item 6).** `HandTag`: "r = 3", "one ratio differs: not a GP", "0 < r < 1: shrinks towards 0", "r < 0: signs alternate", "r ≠ 0", "n in the power: exponential in n", "8 multiplications: one too many", "log 2 > 0: sign stays", "odd power: negative", "even gap: ±", "6 multiplications: one too many", "misses −2, 6, −18, 54", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 35 to 60 s.** The paper and the log ruler (1); ratio ladders (2); the ratio slider plot (3); the symbolic ladder and the paper's return (4); the AP-against-GP plot with the sweep (5); the g01 boards (6, 7, 8); the framed memory card (9); question cards with pictures (10 to 13); the chessboard (14); key notes (15).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 6 to 8: task strip, givens card, equation strip, rows at 52 px, green framed answers; scene 6 carries a silent crossed slip (3 × 2⁸). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full question at 40 px plus a picture (A1: a ladder 4, −12, 36 with empty slots to n = 6; A2: a four-slot ladder with only cards 2 and 4).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Arithmetic adds the same number. Geometric multiplies by the same number. Term n: multiply by r, n − 1 times." with the two small ladders. Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The thickness marker climbs past a book, a house, a building and cruising planes, and ends beyond the painted Moon at fold 42 (scene 1, resolved by counting multiplications in scene 4).
- **Narration (not voiced).** Scene 14 is rewritten for the chessboard (same numbers). Bold cue marks are moved onto whole words in 1, 4, 6, 7, 11 and 13 (no wording change there). All other narration keeps its Revision 1 text.

### Revision 1 decisions (kept where not overridden above)

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
  - Next handoff (Revision 2): "math-a12-f06: rice on a chessboard, 1, 2, 4, 8, 16 grains with running totals 1, 3, 7, 15, 31 and '1 + 2 + … + 512 = ?'; ask for a shortcut."
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
Handoff (Revision 2): math-a12-f06: rice on a chessboard, 1, 2, 4, 8, 16 with running totals and "1 + 2 + … + 512 = ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): terms aₙ (cards, points, the paper's thickness) **blue**; the common ratio r and the "×r" arcs **amber**; differences (the non-geometric check) **grey ink**; positions n and fold counts **grey ink**; running totals (handoff only) **teal**; targets and reference lines **dashed ink**; answer **green**; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; ladder cards 52 px; axis numbers at least 28 px; hand tags (`HandTag`) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (paper, ladder, plot or board) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · SEQUENCES AND SERIES"; scene headings in the hand font, 44 px.

### 1. hook (doubling paper)
> Last video ended here. Two, four, eight, sixteen. The gaps aren't equal, so this isn't arithmetic, but every term is double the one before. Here's what doubling can do. A sheet of **paper** is about a tenth of a millimetre thick. Fold it in half, and it's two layers thick. Fold again, and it's four. If you could fold it forty-two times, how thick would it be? A few centimetres? A metre? It would be thicker than the distance to the **Moon**. How can doubling turn something so thin into something so huge?

Visual: opens on f04's last frame exactly (f04 scene 14: the `TermLadder` 2, 4, 8, 16 with grey "+2", "+4", "+8" tagged "not the same step", amber "×2" arcs, chips "Next: the same ratio every time" and "?"). Heading writes on: "How does a fixed ratio determine a geometric sequence?" as the chips fade. On "paper" the ladder moves to the top (32 px) and the painted sheet `ma12-paper-sheet-v1.png` (about 640 px wide, solid) lies at the left with a coded side-on layer stack beside it (one blue line) and `LiveReadoutBoard` (52 px): "folds" (grey ink) "0" and "thickness" (blue) "0.1 mm". On "two layers" the sheet swaps to the painted folded sheet `ma12-paper-folded-v1.png` and the stack doubles to 2 lines ("1", "0.2 mm"); on "four" to 4 lines ("2", "0.4 mm"). On "forty-two times" the fold simulation (simulation 1) fast-forwards on a vertical log ruler at the right (about 760 px tall, decades labelled 0.1 mm, 1 cm, 1 m, 100 m, 10 km, 1 000 km, 100 000 km): the blue thickness marker climbs one notch per fold as the "folds" readout counts up; landmarks pass on the ruler: "fold 8: 25.6 mm (a thick book)", the painted house `phys-y11-house-v1.png` (reused, about 160 px) at "fold 15: 3.3 m", "fold 17: 13 m (a four-storey building)", "fold 27: 13 km (above where planes fly)". Pencil-grey guess chips "a few cm?" and "1 m?" sit at their ruler heights. On "Moon" the marker reaches "42 folds: about 440 000 km", the painted Moon `y12p-moon-v1.png` (reused, about 220 px) sits just below it at "Moon: about 384 000 km away", and both guess chips are crossed in red. The chip "How can doubling do this?" moves to the top right.

### 2. geometric sequences
> In a geometric sequence, each term is the one before, multiplied by the same number. That number is called the common ratio, r. So a sub n equals r times a sub n minus one. To test a sequence, divide each term by the one before it. Take two, six, eighteen, fifty-four. Six over two is three, eighteen over six is three, and fifty-four over eighteen is **three**. Every ratio is the same, so it's geometric, with r equal to three. Now try five, ten, twenty, thirty-five. The first two ratios are two, but thirty-five over twenty is one and three quarters. One different ratio is enough. It's not **geometric**.

Visual: clear change. A `TermLadder` 2, 6, 18, 54 (52 px) across the upper half with tag "geometric sequence (GP): multiply by the same r"; the definition row (44 px) "aₙ = r × aₙ₋₁ (n ≥ 2), r: common ratio". On "divide each term by the one before" each gap shows a division "6 ÷ 2", "18 ÷ 6", "54 ÷ 18", one after another, each resolving to an amber "×3" arc; on "three" all three glow and the hand tag "r = 3". On "five, ten, twenty, thirty-five" a second ladder slides in below with divisions "10 ÷ 5 = 2", "20 ÷ 10 = 2", "35 ÷ 20 = 1.75"; on "geometric" the last ratio is ringed red with the hand tag "one ratio differs: not a GP". A chip "test: divide each term by the one before".

### 3. fractions, negatives and zero
> The ratio doesn't have to be a whole number. One hundred, fifty, twenty-five, twelve and a half has r equal to a half. Each term is half the last, so the terms shrink towards **zero**. One, minus two, four, minus eight has r equal to minus two. Multiplying by a negative number flips the sign every time, so the terms **alternate**. But r can never be zero. If it were, every term after the first would be zero, and the ratio test would divide by **zero**.

Visual: camera continue; the ladders shrink to the top. A `TermPlot` (about 1,100 × 640 px, axes solid from the first frame) with the ratio simulation (simulation 2): an amber `ParameterSlider` "r" and `LiveReadoutBoard` "r" (amber), "a₂, a₃, a₄" (blue). Starting at r = ½ with a = 100: blue points 100, 50, 25, 12.5 fall towards a dashed ink line y = 0; on "zero" the hand tag "0 < r < 1: shrinks towards 0". The slider moves to r = −2 with a = 1: the points jump to 1, −2, 4, −8, crossing the axis each step; on "alternate" the hand tag "r < 0: signs alternate". On "never be zero" the slider moves towards r = 0, which shows as an excluded mark (grey ring): the points after the first collapse to the axis, and a red slip "÷ 0" writes over the ratio test row "0 ÷ 0 = ?" and is crossed on the last "zero"; hand tag "r ≠ 0".

### 4. the nth term: count the multiplications
> Now a formula for any term. Start with a, the first term. The second term is a times r. The third is a times r times r, which is a r **squared**. Each step along multiplies by r once more. Just like arithmetic sequences, the nth term is n minus one steps from the first. So a sub n equals a, times r to the power n minus **one**. Back to the paper. The unfolded sheet is the first term, a tenth of a millimetre. After forty-two folds, it's the forty-third term, a tenth of a millimetre times two to the forty-two. Two to the forty-two is more than four **trillion**. That's why it reaches about four hundred and forty thousand **kilometres**.

Visual: clear change. A `TermLadder` with symbolic cards "a", "ar", "ar²", "ar³", "…", "aₙ" (positions n = 1, 2, 3, 4, …, n in grey ink). On "a times r" the first amber "×r" arc draws; on "squared" the second, and the card "ar²" glows. On "Each step along" a `StepCounter` counts the arcs from card 1 to card 4: "1", "2", "3" with a bracket "3 steps to term 4"; on "n minus one steps" a bracket from card 1 to card n across the "…": "n − 1 multiplications". On "one" the framed formula (52 px): "aₙ = arⁿ⁻¹ (n ≥ 1)" with a grey "also written Tₙ". On "Back to the paper" the fold simulation returns at the left (sheet, stack and log ruler, about 600 px tall); the "folds" readout resets to 0 and a second readout appears, "term n" (grey ink) = folds + 1; rows: "a₁ = 0.1 mm (unfolded)"; "42 folds: a₄₃ = 0.1 × 2⁴² mm"; on "trillion" a grey readout "2⁴² ≈ 4.4 × 10¹²"; on "kilometres" green framed "≈ 440 000 km" with the Moon plate beside the ruler's top, and the scene 1 chip "How can doubling do this?" gets a tick.

### 5. an exponential function of n
> Here's why doubling grows so fast. Plot the terms of three, six, twelve, and so on. An arithmetic sequence adds the same amount each time, so its points lie on a straight line. Here each step multiplies, so each jump is bigger than the last, and the points curve **upward**. The formula is three times two to the n minus one. The variable n is in the power, so a sub n is an exponential function of **n**. With a positive r, the points sit on an exponential curve. With a positive first term and r between zero and one, the points fall towards zero instead. When r is negative, the signs alternate, so the points jump from one side of the axis to the **other**.

Visual: clear change to a `TermPlot` (about 1,200 × 720 px, Revision 1 window, note h). Grey-ink points of the AP 3, 6, 9, … on a dashed straight line, hand tag "AP: add 3 each step". On "Here each step multiplies" blue points of 3 × 2ⁿ⁻¹ build one by one (3, 6, 12, 24, 48, 96) with grey jump labels "+3", "+6", "+12", "+24", "+48" growing; on "upward" a dashed blue guide curve draws through them. Row (52 px) on the next sentence: "aₙ = 3 × 2ⁿ⁻¹"; on "n" the exponent "n − 1" is ringed amber, hand tag "n in the power: exponential in n". On "between zero and one" (a = 3 > 0 shown in the readout) the ratio slider (simulation 2) returns under the plot and sweeps r from 2 down to ½ with a = 3 held: the blue points slide smoothly to 3, 1.5, 0.75, … falling towards a dashed ink y = 0 (readout "r = 0.5"). On "negative" the slider passes the excluded r = 0 and reaches r = −2: the points jump across the axis (3, −6, 12, −24, …; readout "r = −2"); on "other" the points pulse in turn, hand tag "r < 0: signs alternate".

### 6. worked example: the eighth term
> Let's use the formula. The sequence is three, six, twelve, and so on. Find the eighth term. First, a is three, and r is six over three, which is two. The eighth term is seven multiplications from the first, so it's three, times two to the power **seven**. Two to the seven is one hundred and twenty-eight, so the eighth term is three hundred and **eighty-four**.

Visual: clear change to the g01 layout. Task strip: "The sequence 3, 6, 12, … is geometric. Find a₈." (site card 06 example 1; Problem 1 (a)). Givens card: "a = 3 (blue), r = 6 ÷ 3 = 2 (amber)". Equation strip: "aₙ = arⁿ⁻¹". A `TermLadder` 3, 6, 12, "…", "a₈" with a `StepCounter` bracket "7 multiplications". Rows at 52 px: "a₈ = 3 × 2⁸⁻¹"; on "seven" "= 3 × 2⁷"; "= 3 × 128"; on "eighty-four" green framed "a₈ = 384". A red slip "3 × 2⁸ = 768" writes small at the right and is crossed (hand caption "8 multiplications: one too many"), silent.

### 7. the first term over one thousand
> Which term is the first to go over one thousand? Set three times two to the n minus one above one thousand. Divide by three, so two to the n minus one is more than one thousand over three. To get n out of the power, take logs of both sides, and divide by log two. Log two is positive, so the inequality stays the same way round. Then n minus one is more than about eight point three **eight**, so n is more than nine point three eight. Positions are whole numbers, so it's the tenth term. Check both sides. The ninth term is seven hundred and sixty-eight, below one thousand, and the tenth is one thousand five hundred and **thirty-six**.

Visual: camera continue (same givens; the scene 6 rows dim). Task strip part 2: "Which term is the first to exceed 1000?" (site Problem 1 (c)). Rows at 52 px: "3 × 2ⁿ⁻¹ > 1000"; "2ⁿ⁻¹ > 1000/3"; "(n − 1) log 2 > log(1000/3)" with a grey tag "log 2 > 0: sign stays"; on "eight" "n − 1 > log(1000/3) / log 2" with grey "≈ 8.38"; "n > 9.38" (grey). Number line with n = 9, 9.38 (dashed marker), 10; green framed "n = 10". On "Check both sides" a small `TermPlot` at the left (points n = 7 to 11) against a dashed ink line y = 1000, with an n slider and readout "aₙ": "a₉ = 768" (below) and, on "thirty-six", "a₁₀ = 1536" (above), ringed.

### 8. worked example: from two terms
> What if you're given two terms, but not the first? The third term is twelve, and the sixth term is ninety-six. From the third term to the sixth is three multiplications, so ninety-six is twelve times r **cubed**. Dividing cancels a. So r cubed is eight, and r is **two**. Then a times r squared is twelve, so a times four is twelve, and a is three. Here the gap is three steps, an odd number, so there's only one real cube root. With an even number of steps and a positive result, r could be positive or negative, so you'd get two possible **sequences**. A negative result would give no real r at all.

Visual: clear change (new case, g01 layout). Task strip: "In a geometric sequence, a₃ = 12 and a₆ = 96. Find a and r." (site card 06 example 2). Givens card: "a₃ = 12, a₆ = 96". A `TermLadder` with blank cards at positions 1, 2, 4, 5 and cards "12" (n = 3) and "96" (n = 6); a `StepCounter` bracket from 3 to 6: "×r ×r ×r: 3 steps". Rows at 52 px: "ar² = 12", "ar⁵ = 96"; on "cubed" "ar⁵ ÷ ar² = r³" with "a" struck in both; "r³ = 96 ÷ 12 = 8"; on "two" green framed "r = 2". Green framed "a × 4 = 12, a = 3"; the blank cards fill: 3, 6, 24, 48. On the last two sentences a grey chip "odd gap: one real root"; on "sequences" a second grey chip "even gap, positive quotient: r = ± root, two sequences", and on the last sentence a third "even gap, negative quotient: no real r".

### 9. memory aid
> Here's the difference to remember. Arithmetic adds the same number each step. Geometric multiplies by the same number each step. And to reach term n, you take n minus one steps, so you multiply by r, n minus one **times**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Two small ladders inside: "+d +d +d" (grey ink arcs, "adds") and "×r ×r ×r" (amber arcs, "multiplies"), with a tiny folded-paper icon beside the second. The hand-font lines at 56 px: "Arithmetic adds the same number. Geometric multiplies by the same number." and, on "times", "Term n: multiply by r, n − 1 times." Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the sixth term of the geometric sequence four, minus twelve, thirty-six, and so on. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the 6th term of the geometric sequence 4, −12, 36, …" The full question stays on screen. Picture slot: a `TermLadder` 4, −12, 36, then empty slots n = 4, 5, 6 with "?" in the sixth (no arcs, no ratio). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> First, r is minus twelve over four, which is minus three. The sixth term is five multiplications from the first, so it's four times minus three to the power **five**. An odd power of a negative number is negative, so the answer is minus nine hundred and **seventy-two**. Two thousand nine hundred and sixteen is wrong. It uses the power six, one multiplication too **many**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "a = 4", "r = −12 ÷ 4 = −3", "n = 6" ("4, −12" and "6th" underlined as used). Rows at 52 px: "a₆ = 4 × (−3)⁵" with a `StepCounter` bracket "5 multiplications" (on "five"); "(−3)⁵ = −243" (grey tag "odd power: negative"); on "seventy-two" green framed "a₆ = −972". On "many" a red slip "4 × (−3)⁶ = 2916" writes and is crossed (hand caption "6 multiplications: one too many"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. In a geometric sequence, the second term is six and the fourth term is fifty-four. Find all possible values of a and r. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In a geometric sequence, the 2nd term is 6 and the 4th term is 54. Find all possible values of a and r." The full question stays on screen. Picture slot: a four-slot `TermLadder` with only card 2 (6) and card 4 (54) filled (no arcs). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> From the second term to the fourth is two multiplications, so fifty-four is six times r **squared**. So r squared is nine, and r is three or minus **three**. Then a is six over r. So a is two with r equal to three, or a is minus two with r equal to minus three. Giving only r equals three is wrong. It misses the second sequence: minus two, six, minus eighteen, **fifty-four**.

Visual: the card shrinks to the top. `GivensStrip`: "a₂ = 6", "a₄ = 54" ("2nd term is 6" and "4th term is 54" underlined). Rows at 52 px: "ar³ ÷ ar = r² = 54 ÷ 6 = 9" (on "squared"); on "three" "r = 3 or r = −3" with the hand tag "even gap: ±". Two green framed answers side by side: "r = 3, a = 2" and "r = −3, a = −2", each with its ladder (2, 6, 18, 54 and −2, 6, −18, 54). On "fifty-four" a red slip "only r = 3" writes and is crossed (hand caption "misses −2, 6, −18, 54"). Hold about 1 s.

### 14. handoff
> So a geometric sequence multiplies by the same ratio every step, and its nth term is a times r to the n minus one. But what happens when we add the terms? Put one grain of rice on the first square of a chessboard, two on the second, four on the third, doubling each time. The running totals are one, three, seven, fifteen and thirty-one. How many grains are on the first ten squares, without adding them one by **one**?

Visual: the framed formula and the memory-aid icons show small at the top (30 px), then fade on "But what happens". Board clears: the painted chessboard `ma12-chessboard-top-v1.png` (top view, about 720 px square, solid) at the left; painted rice grains `ma12-rice-grain-v1.png` (about 22 px each) on its first five squares along the bottom row, 1, 2, 4, 8 and 16 grains in tidy clusters, with blue square labels "1", "2", "4", "8", "16" (36 px) and amber "×2" arcs between the squares. At the right, f01's `PartialSumStack` builds five teal columns S₁ to S₅ with readouts 1, 3, 7, 15, 31 (52 px) as the narration names them. On "one" a chip "1 + 2 + 4 + … + 512 = ? (10 squares)", with "Next: add the terms fast" and a "?" chip. No formula, no "one less than" hint. Hold about 2 s. This is f06's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60% (root decision 58), colour roles kept, each one line; the framed card on the right.
> Here are the key notes. Pause the video if you need more time to copy them.

- GP: every ratio aₙ ÷ aₙ₋₁ is r (r ≠ 0).
- aₙ = arⁿ⁻¹: n − 1 multiplications from a.
- a > 0: r > 1 grows, 0 < r < 1 shrinks towards 0.
- r < 0: the signs alternate.
- Two terms: divide to cancel a. Even gap, positive quotient: ±.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Arithmetic adds the same number. Geometric multiplies by the same number. Term n: multiply by r, n − 1 times.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back (1 s) to scene 14's frame exactly (the chessboard with 1, 2, 4, 8, 16 grains on its first five squares and "×2" arcs, the five teal columns 1, 3, 7, 15, 31, "1 + 2 + 4 + … + 512 = ? (10 squares)", "Next: add the terms fast" and "?"). This is the final frame and f06's opening frame.

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
| Paper (site) | 0.1 mm; 0.2, 0.4 mm; 0.1 × 2⁴² mm ≈ 440 000 km; 2⁴² ≈ 4.4 × 10¹²; Moon about 384 000 km; a₄₃; Revision 2 ruler landmarks: fold 8 = 25.6 mm, fold 15 = 3.28 m, fold 17 = 13.1 m, fold 27 = 13.4 km, fold 42 = 439 805 km | 1, 4 |
| GP test (site) | 2, 6, 18, 54: ratios 3, 3, 3; 5, 10, 20, 35: ratios 2, 2, 7/4 | 2 |
| Fraction and negative r (site) | 100, 50, 25, 12.5 (r = ½); 1, −2, 4, −8 (r = −2); ghost 5, 0, 0, 0 | 3, 5 |
| Plot | 3 × 2ⁿ⁻¹: 3, 6, 12, 24, 48, 96; AP 3, 6, 9, …, 18; insets 100 … 6.25 and 1 … 16 | 5 |
| a₈ (site) | 3 × 2⁷ = 384 | 6 |
| Threshold (site) | 2ⁿ⁻¹ > 1000/3; n − 1 > 8.38 (grey); n = 10; a₉ = 768, a₁₀ = 1536 | 7 |
| Two terms (site) | a₃ = 12, a₆ = 96; r³ = 8, r = 2, a = 3; 3, 6, 12, 24, 48, 96 | 8 |
| A1 | r = −3; a₆ = −972; crossed 2916 | 10, 11 |
| A2 | r² = 9; (2, 3) or (−2, −3); crossed "r = 3 only" | 12, 13 |
| Handoff (Revision 2: rice on a chessboard) | 1, 2, 4, 8, 16 grains on squares 1 to 5; S₁ to S₅ = 1, 3, 7, 15, 31; 512 = 2⁹ grains on the 10th square | 14 |

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

Revision 2 (7 Nov 2026), counted by script with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,015 characters**, 15 scene headings (Revision 1, recounted the same way: 5,958). Characters per scene (in order): 500, 601, 444, 626, 626, 354, 630, 527, 218, 121, 362, 151, 365, 415, 75.

At 13.3 characters per second the speech is about 452 s. Holds and settling: two 10 s countdowns 20 s; short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the fold fast-forward (1, 4), the ratio slider (3, 5) and the board changes (6 to 8) 25 s; the key-notes scene 45 s (about 96 s in all). Total **about 548 s (9 min 8 s)**, inside the 5,500 to 7,000 character band and 22 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 5's last two sentences ("When r is between zero and one ... to the other."; keep the slider sweep silent with its hand tags); scene 8's last sentence (keep the grey chip). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12f05` (route math-a12-f05). Suggested explainer folder `src/explainer/lessons/math-a12-f05` and build folder `docs/production/claude-pm/lessons/m-a12f05` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, geometric-sequences, fractions-negatives-zero, nth-term, exponential-in-n, eighth-term, first-over-target, from-two-terms, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f04's last frame continues into scene 1 (camera continue, same ladder); 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change (symbolic ladder); 4 to 5 clear change (ladder to plot); 5 to 6 clear change (new case); 6 to 7 camera continue (same sequence); 7 to 8 clear change; 8 to 9 camera pull back to the aid; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12f05-learning-review.md`, `science_check` = `checks/m-a12f05-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `physics/y12p-moon-v1.png` (a painted full Moon, transparent, 1254 × 1254; reused for the scale's top), `physics/phys-y11-house-v1.png` (a weatherboard house, side view, 1774 × 887; reused as the 3.3 m landmark), `biology/m5x-card-sheets-v1.png` and `biology/m5x-clipboard-sheet-v1.png` (printed sheets and a clipboard; they carry printed marks and read as worksheets, not a blank sheet to fold).

Reused (no copies needed): `physics/y12p-moon-v1.png`, `physics/phys-y11-house-v1.png`.

Need (painted, new; see the Codex asset brief): `ma12-paper-sheet-v1.png`, `ma12-paper-folded-v1.png`; for scene 14, `ma12-chessboard-top-v1.png` and `ma12-rice-grain-v1.png` (briefed in `math-a12-f06.md`, their main use).

Coded (studio kit): the layer stack, the log ruler and its labels, readouts, ladders, plots and the ratio slider, givens cards, answer frames, slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider` (with its excluded mark), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`; `TermLadder`, `PartialSumStack` (f01), `TermPlot`, `StepCounter` (f02).

Additions the build needs:
1. **`FoldLayers`** (the Revision 1 contract below is kept), now beside the painted sheet, with a plate swap from the flat sheet to the folded sheet on the first fold.
2. **`LogRuler`** (new, small): a vertical base-10 log scale with decade labels, a marker driven by a value, and landmark slots that hold a coded label or a plate (drawn at a fixed size, never stretched) at given values.
3. **A live-ratio mode for `TermPlot`** (small): points computed from a and r each frame, so a `ParameterSlider` for r moves them smoothly; r = 0 shown as an excluded value.

## Codex asset brief (Maths A12 F05, folding a sheet of paper)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-f05.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin; no text, printed lines, letters, numbers, logos, people, hands, fingers, faces, sky, glow or ground shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-paper-sheet-v1.png` (1600 × 1200 px): one blank white A4 sheet of printer paper lying flat on an unseen table, seen from a low three-quarter angle so its thinness shows at the near edge; a very slight curl at one corner. Completely blank. Codex reports the sheet's near-edge line in file pixels (the build places the layer stack beside it).
2. `ma12-paper-folded-v1.png` (1200 × 900 px): the same sheet after three folds, seen from the same angle: a small, slightly springy folded rectangle whose layered edge is visible on the near side. Blank, no creases with writing. Codex reports its bounding box.

Report inspection on the paper background (`#f6f1e7`) at 640 px wide for plate 1 and 360 px wide for plate 2, plus the alpha checks. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-f05-provenance.json`.

### Coded part contract (Revision 1, kept)

**`FoldLayers`.** A side-on stack of thin horizontal layer lines representing a quantity that doubles; props `base` (thickness of one layer, "0.1 mm"), `doublings` (cue per doubling), `fastForward` ({to, at}: the stack fills to a dense block while the readout counts), `readout` (author-supplied label per step). In Revision 2 it sits beside the painted sheet and drives the `LogRuler` marker.

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

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the three syllabus points, the learner question, the site's numbers, both attempts, the cause chain and the memory aid are unchanged. Programme decision 5 is withdrawn by the visual standard; the Revision 1 lines that say "coded visuals" or "no sheet of paper drawn" are superseded.

- **Anchor and why:** folding a sheet of paper (the site's own hook). Each fold doubles the thickness, so the folds are a geometric sequence, and the surprise (past the Moon at 42 folds) is the clearest everyday picture of exponential growth. Not science; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the fold simulation on a log ruler with "folds", "term n" and "thickness" readouts and passing landmarks (a reused house plate and the reused Moon plate); the ratio slider driving the plotted terms through r = ½, r = −2 and the excluded r = 0, and the scene 5 sweep.
- **Colour roles:** terms and thickness blue; r and "×r" arcs amber; differences, positions and folds grey ink; totals teal (handoff); targets dashed ink; answer green; mistake red.
- **Plates:** new `ma12-paper-sheet-v1.png` and `ma12-paper-folded-v1.png`; reused `physics/y12p-moon-v1.png` and `physics/phys-y11-house-v1.png`; scene 14 uses `ma12-chessboard-top-v1.png` and `ma12-rice-grain-v1.png` (briefed in f06).
- **Narration changes (not voiced):** scene 14 only (the chessboard and rice grains; same numbers 1, 2, 4, 8, 16 and 1, 3, 7, 15, 31). Bold cues moved onto whole words in scenes 1, 4, 6, 7, 11 and 13 (same words). All other narration is Revision 1's.
- **Counts:** 5,958 → 6,015 characters (both as the sum of scene strings; Revision 1 stated 5,972 with joining spaces); about 549 s (old 60 s notes hold) → about 548 s with holds (notes 45 s), 22 s under the cap.
- **Key notes:** five short one-line bullets (were five long notes) beside the framed card.
- **Joins:** opens on f04's unchanged final frame; ends on the chessboard frame that f06 Revision 2 opens on (edited together).
- **Kit additions:** `FoldLayers` beside a plate swap; a new `LogRuler` with landmark slots; a live-ratio mode for `TermPlot`.

## Revision 3 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **240-F05-EVEN-GAP (should fix).** Scene 8 now says an even gap gives two sequences only when the quotient is positive, and adds "A negative result would give no real r at all." A third grey chip shows the negative case. Key note 5: "Even gap, positive quotient: ±."
- **240-F05-GROWTH-SIGN (should fix).** Scene 5's "between zero and one" sentence is scoped to a positive first term, and key note 3 reads "a > 0: r > 1 grows, 0 < r < 1 shrinks towards 0." The slider never shows r = 0 as a valid GP (it is already marked excluded).
- **Narration changed:** scenes 5 (626 to 649), 8 (527 to 589). Total 6,015 to 6,100 characters, 15 scene strings (build parser rules).
