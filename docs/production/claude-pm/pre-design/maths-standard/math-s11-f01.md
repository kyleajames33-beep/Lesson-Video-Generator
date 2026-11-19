# math-s11-f01: How do we substitute values into a formula and trust the answer?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `ci7f303375`: Substitute numbers into linear and non-linear algebraic expressions, equations and formulas [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: covered.
- `cib2f9cd13`: Evaluate the subject of a formula, given the value of other pronumerals in the formula [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: covered.
- `ci2343d424`: Apply given formulas to solve problems in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: covered. Shared with f08: this video applies one formula to one case at a time; f08 applies it to a whole table.

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs (`programme/maths-standard-route-inputs-8.json`).

**Course:** Year 11 is one course for Standard 1 and Standard 2. The description quotes the wording once, under "Year 11 Mathematics Standard".

**Entry knowledge (Stage 5):** order of operations with powers and brackets; operations with negative numbers; algebraic notation (3x means 3 × x, x² means x × x); area and perimeter of rectangles and circles; a scientific calculator's power and π keys.

**Prior video:** none. This is the first video of the whole Mathematics Standard course.

**Start:** cold open on a concrete case, no title card: the site's delivery quote, "$8 booking fee plus $1.50 for every kilometre", and a 12 km trip. How much? Then: one rule for every trip.

**Stop:** A formula is one rule for many cases; name what each letter stands for, with units; substitute with brackets and evaluate in the correct order; a negative value goes in brackets so a power applies to the whole number; the calculator's power key handles non-linear formulas; state the answer as a sentence with units and ask whether it is sensible. One line from lesson08's decision guide: "Need an output? Substitute." Finding an input from a total is f02; rearranging is f03; spreadsheets are f08.

**Next:** math-s11-f02.

## 2. Site order, sections and worked examples

Read-only source 1: [formulas-and-equations/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `8d7a495712125af1a6f3ec51e679be1af3b40b2ade42a1bd38c66636c8cc0f3c`. Title: Algebraic Language, Variables and Substitution. Lesson id maths-std-y11-m1-l01. Sections (`data-step-id`): `connect`, `variables`, `notation`, `expr-eqn`, `worked`, `apply`, `practice-set`, `review-and-complete`.

Hook: "A delivery company charges $\$8$ booking fee plus $\$1.50$ per kilometre. Can one formula work for every possible trip distance?" Card 05: "$C = 8 + 1.50k$ ... $C$ is the cost in dollars. $k$ is the number of kilometres. A good formula defines what each variable means". Card 06 notation table for $x = 4$: $3x = 12$, $x^2 = 16$, $2x + 5 = 13$, $x/2 = 2$; "Common error. $3x$ does not mean $3 + x$." Card 07: "If $x = -3$: correct is $x^2 = (-3)^2 = 9$. Writing $-3^2 = -9$ is wrong because the square then applies only to 3."

`we-1`: "A delivery company uses $C = 8 + 1.50k$ ... Find the cost for a 12 km delivery." $C = 8 + 1.50(12) = 8 + 18 = 26$; "the delivery costs $26.00".
`we-2`: "$P = 2l + 2w$ ... $l = 9$ m and $w = 4$ m." $P = 2(9) + 2(4) = 18 + 8 = 26$ m.
`we-3`: "Evaluate $x^2 + 3x$ when $x = -4$." $(-4)^2 + 3(-4) = 16 + (-12) = 4$; "$(-4)^2 = 16$, NOT $-16$."

Traps (`apply`): reading $3x$ as $3 + x$; forgetting brackets with negatives; "$C = 26$ is incomplete. The answer is $C = \$26.00$". Drill: $d = st$ with $s = 65$, $t = 3$ (195 km); $A = lw$ with 14 and 6 (84 cm²); $T = 8 + 1.50k$ with $k = 18$ ($35.00); "the 8 is the fixed booking fee". Short answer: Q1 $C = 12 + 2.40m$, 15 km ($48.00, with the meaning of 12 and 2.40); Q2 $A = 11.5 \times 8 = 92$ cm²; Q3 brackets in $x^2 + 3x$ at $x = -4$.

Read-only source 2: [formulas-and-equations/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson08.sa.html), SHA256 `963fedd859ac4fa1a9bb496342246289c904a73ac7fd581453d3e20098b681ed`. Formula and Equation Synthesis. Used only for card 02's decision guide ("Need an output? Substitute values into the formula. Need an unknown input? Write and solve an equation. Wrong subject? Rearrange first, then substitute.") and card 05's row "$C = 12 + 4r$, find $C$ when $r = 7$" (40). Its `we-4` explanation has an error (MS-77); do not use it here.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- `we-1`: 8 + 1.5 × 12 = 26. `we-2`: 26 m. `we-3`: 16 − 12 = 4.
- Notation table at x = 4: 12, 16, 13, 2. Quick check 3(5) + 4 = 19. Match at x = 3: 6, 9, 14, 1. (−3)² = 9 against −3² = −9.
- Drill: 195, 84, 35. Short answer: 48, 92; −(4²) = −16 against (−4)² = 16.
- Lesson08: 12 + 4(7) = 40.
- New values used below: roast time 40(1.8) + 20 = 92 min; strike rate 100 × 45 ÷ 30 = 150; trampoline π(1.8)² = 10.18 m².

Every value was recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`, output in `recalc-output.txt`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading 3x as 3 + x, or x² as 2x.
- Substituting −4 without brackets, so −4² becomes −16.
- Working left to right instead of multiplying before adding (8 + 1.50 × 12 read as 9.50 × 12 = 114).
- Giving "26" with no units or meaning.
- Using a letter without knowing what it stands for (the 8 as "a variable").
- Not checking size: a 12 km delivery costing $114 should look wrong.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Cold open: a delivery bag plate (`ma11-delivery-bag-v1.png` exists; check appearance) or a plain road strip with a 12 km marker, the quote card "$8 booking + $1.50 per km" typed beside it. No title card; the question appears first.
- A formula card with labelled slots (C: cost in $; k: km): the number 12 drops into the k slot inside brackets, then the board evaluates 1.50 × 12 first, then + 8 (order of operations as two visible beats).
- The same formula with a different k (5 km, 30 km) to make "one rule, many cases" visible before the word "formula" is defined.
- A bracket "shield" on −4: the square applies to the whole bracket; the unbracketed version splits and lands on −16, crossed.
- A calculator strip (coded, unbranded) for the power key: 1.05 ^ 3 or 1.8 x², so Year 12's compound and exponential formulas are not the first time the key appears.
- Answer frame as a sentence with units; a "sensible?" gauge beside it.

Kit: `FormulaCrosswalk`, `ModelCard` and `ModelSlot` (a11-function-parts.tsx) can hold a formula with labelled slots; `FunctionMachine` for input-rule-output; `WorkingBoard` with `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame` and `MistakeCard` (board.tsx); `ScreenApp` for the calculator. A small slot-drop animation is in the kit-needs file. Plates for objects only, no people.

## 6. Two original candidate practice questions

### Question 1

The value, in dollars, of a savings account after n years is given by A = 2000(1.05)^n. Find the value after 3 years.

**Worked answer:** A = 2000 × 1.05³ = 2000 × 1.157625 = $2315.25.

### Question 2

Evaluate y = 3x² − 2x + 1 when x = −2. A student wrote 3 × −2² − 2 × −2 + 1 = −12 + 4 + 1 = −7. Explain the error.

**Worked answer:** With brackets: 3(−2)² − 2(−2) + 1 = 3(4) + 4 + 1 = 17. The student squared only the 2, so −2² became −4; the square must apply to the whole of −2, so it goes in brackets.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1: "2000 × 1.05 × 3 = 6300", crossed, "the power is repeated multiplying, not times 3"). Question 1 previews the compound interest formula Year 12 uses (math-s12-i02) without naming it. Answers were checked with SymPy.

## 7. Everyday anchors

- A roast chicken's cooking time: about 40 minutes per kilogram plus 20 minutes, T = 40m + 20; a 1.8 kg chicken needs 92 minutes (cooking; a linear formula with a decimal input).
- A cricket batter's strike rate, S = 100R ÷ B: 45 runs from 30 balls is a strike rate of 150 (sport; a formula with a fraction).
- A round backyard trampoline's mat area, A = πr²: radius 1.8 m gives about 10.2 m² (recreation; a non-linear formula and the π and x² keys).

Varied everyday contexts (cooking, sport, home). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "roast", "strike rate" and "trampoline" have no hits). Claude picks one; none is required. Anchors are drawn as objects (a roasting tray, a scoreboard, a trampoline from above), never people. The roasting rule is a typical cooking guide, labelled as an example.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in lesson01; its numbers all check. Lesson08's `we-4` explanation (MS-77) is not used here.

Decisions for Claude:

- **First video of the course.** Cold open on the delivery quote with the question on screen; no title card. Keep the opening under about 20 seconds before the first calculation.
- **Non-linear substitution.** The point names "linear and non-linear"; the site's only non-linear case is `we-3`. Add one power-key case (Question 1's style or the trampoline) because Year 12 a05, a06 and i02 assume students can type a power.
- **`cib2f9cd13` ("evaluate the subject")** is the same act as substitution when the wanted letter is already alone; say "subject" once in plain words ("the letter on its own, the one we're finding") so f03 can build on it.
- **Year 12 needs:** checking a point in an equation (a01) is substitution into both sides; one sentence can say "a substitution can also check an answer".
- Pace: 6 to 8 minutes with the site's three worked examples and one power-key case. Not at risk.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
