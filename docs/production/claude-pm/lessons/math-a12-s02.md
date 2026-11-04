# Maths A12 S02: When is a finite distribution uniform? Equal probabilities forced to 1/n, random is not uniform, counting values, and why finitely many (design)

Status: Revision 2 (4 Nov 2026), brief 162 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov 2026). Needs student learning review, Codex maths check and Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit, the brief 129 to 143 maths kit (`AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `QuestionCard`, `Countdown`, `KeyNotes`) and the probability parts specified in s01 (`ProbabilityBars`, `DistributionTable`, `StackedTotalBar`, `OutcomeSort`), plus one new part here (`OutcomeGrid`). Nothing recorded; human listening pending.

Narration 5,346 characters, 14 scenes, about 506 s (8.4 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 54), after s01 (discrete probability distributions from data and models) and before s03 (expectation and variance). Templates: `math-a12-i05.md` and `math-a12-d10.md`, and the s01 design (same designer, written just before this one, whose scene 13 is this video's first frame). Maths visuals are coded; the dice and the spinner are small painted plates from the s01 asset brief. No people. No gambling context or branding: the site's raffle examples are not used. Pre-design pack: none (brief 151 stopped at i14); pack work done here. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson06.sa.html` (The Discrete Uniform Distribution), SHA256 `0e927f50766ba221045b7579db76a417cb343acb6afc89ad48197cf87b86d5f5`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s02` ("When is a finite distribution uniform?", one syllabus action, site source lesson 6, no coverage gaps).

Owner rules applied: as s01 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded, objects painted; no people; one reasoning stage at a time; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact fractions in the algebra, decimals only in grey readouts or where the question gives decimals; attempt cards give nothing away; the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci6ab13b73`: "Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s01's last frame (one fair die's six bars at 1/6 beside empty axes for the sum of two dice, "?"). Shows the sum of two dice is not uniform (the site's hook, numbers unchanged); defines a uniform distribution and derives P(x) = 1/n from ΣP(x) = 1 (site card 02); explains with the 36-outcome grid why equally likely outcomes can give a variable that is not uniform, and gives the test (site card 03); repeats the test on STATISTICS (site problem 2); models with a uniform variable by counting values, including an inclusive count (site card 04 and trap 04); uses value-against-count and finding n from P(x) (site trap 02 and problem 1); explains "finitely many" (site trap 03). Stops at the uniform model. Not taught: expectation of a uniform variable (s03 opens on it); conditional probability with uniform variables (site card 04's last line; Year 11 conditional probability is not re-taught here; later home: the strand practice video); the continuous uniform model (s07).

## Decisions

- **Learner question kept (outline).** "When is a finite distribution uniform?" The answer, built in order: the sum of two fair dice is not uniform, a surprise (1); uniform means finitely many values, all with the same probability, and the total of 1 forces that probability to be 1/n (2); fair equipment makes the outcomes equally likely, but a variable can collect different numbers of outcomes per value (3); so the test is to count the equally likely outcomes behind each value (4); once uniform, a probability is a count of values over n (5, 6); and there can't be infinitely many equal values (7).
- **Hook (a 3 s prediction, then the surprise).** s01 ended with the question. Scene 1 asks for a guess (3 s hold, no ring), then the eleven bars rise: 1/36 to 6/36 and back. The cause is held back to scene 3 so that the definition comes first and the grid is the explanation, not a fact table.
- **c = 1/n is forced (site card 02).** n equal probabilities c add to nc = 1, so c = 1/n: "the shared probability isn't a free choice". Shown with `StackedTotalBar` in equal mode: n equal pieces must fill a bar of length 1.
- **The test (site card 03; owner quality bar: the cause on screen).** The 6 × 6 `OutcomeGrid` of ordered pairs (white die across, red die down) is uniform: 36 cells, each 1/36. The sum is constant along each diagonal, and the diagonals hold 1, 2, ..., 6, ..., 2, 1 cells; the diagonals slide down into the eleven bars. (3, 4) and (4, 3) are different cells because the dice are different (the plate shows a white and a red die; a classic error counts 21 unordered pairs). The test, as a sentence: "does every value come from the same number of equally likely outcomes?"
- **STATISTICS (site problem 2, unchanged).** Ten letter tiles, one per position, each position 1/10; the tiles slide into stacks S 3, T 3, I 2, A 1, C 1 (`OutcomeSort`). "Random" describes how the position is picked; the variable is the letter.
- **Modelling by counting (site card 04 and trap 04).** A random digit 0 to 9: n = 10, P(X ≥ 7) = 3/10 (7, 8, 9 counted on the bars). Integers 5 to 20 inclusive: n = 20 − 5 + 1 = 16, not 15; P(X > 16) = 4/16 = 1/4. The "+ 1" is shown on a number line with 16 dots, the classic fence-post count.
- **Value against count, and finding n (site trap 02 and problem 1).** Uniform on 5, 10, 15, 20, 25: P(15) = 1/5, not 15/75 (crossed). P(x) = 0.04 for every value: n = 1/0.04 = 25; and P(x) = 0.3 can't be uniform, since 1/0.3 is not a whole number (original extension of problem 1's check line "if n came out non-integer").
- **Finitely many (site trap 03).** Equal bars for n = 6, 12, 24, 48 shrink as 1/n. If infinitely many values shared one probability c: c = 0 gives a total of 0; any c > 0 passes 1 once there are more than 1/c values. Neither is 1.
- **Attempts (original).** (A1) X is uniformly distributed on the even numbers 2, 4, 6, ..., 20. Find P(X > 15). n = 10, values 16, 18, 20, so 3/10. Tests counting values rather than using sizes or the range. Crossed: "3/20" (used 20, the largest value, as n). (A2) A fair spinner with eight equal sectors numbered 1 to 8 is spun once; X is the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify. Not uniform: remainder 0 from 3 and 6, remainder 1 from 1, 4, 7, remainder 2 from 2, 5, 8, so 2/8, 3/8, 3/8. Tests the count-behind-each-value test with fair equipment. Crossed: "Yes, because the spinner is fair" (fair outcomes, not a fair variable). Neither card hints at n, the values or the verdict.
- **Mistake scene:** none separate. "Random means uniform" (1, 3, 4; feedback 2 crossed); "pick any equal value" (2); "(3, 4) and (4, 3) are the same outcome" (3); "n = 20 − 5" (5); "bigger values are more likely" (6, 15/75 crossed); "a uniform distribution on all positive integers" (7); "n is the largest value" (feedback 1 crossed).
- **Memory aid.** "Same count behind every bar." See "Memory aid check".
- **Handoff (outline next: s03, "What do expectation and variance measure in a discrete model?").** Scene 13: the fair die's six equal bars with a small amber balance triangle under the axis, sliding but not settling, and a "?" where it should go; chip "Next: where does a distribution balance?". No value 3.5 is shown or spoken. This frame is s03's opening frame (same designer, written next).
- **Site sources used:** lesson 6 hook (one die against the sum of two dice), cards 02 (definition and nc = 1), 03 (the 36 outcomes, the outcome counts 1 to 6 to 1, the test), 04 (P(X ≥ 7) = 0.3 for a random digit), problem 1 (P(x) = 0.04 gives n = 25), problem 2 (STATISTICS), traps 02 (5, 10, ..., 25), 03 (no uniform distribution on all positive integers) and 04 (5 to 20 inclusive, n = 16; P(X > 16) = 1/4 from drill 2). Not used: raffles and prize draws (no gambling context), conditional probability (card 04's last line), the class selection (problem 3), the four-sided-dice maximum (site Q2; attempts are original).
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** one. Trap 02 says "p(15) is 1/5, not 15/75", but 15/75 = 1/5, so the example cannot show the error it names (author note e; open decision 1; suggested fix: use p(25), where the size-based method gives 25/75 = 1/3). Every other value was recalculated and is correct. Notes for the owner, not errors: (1) card 03's "giveaway" ("Any time X is a total, a count or a maximum built from several trials, expect it not to be uniform") is a heuristic, not a rule: for X uniform on {0, 1} and Y uniform on {0, 2}, independent, X + Y is uniform on {0, 1, 2, 3}. The word "expect" hedges it; the video teaches the count test instead. (2) Short-answer Q1(c)'s comprehensive answer uses an em dash after "the standard error", against the house style. (3) The site's raffle and prize-draw contexts are gambling-adjacent; the video uses digits, letters, dice and a spinner.
- **Cause chain taught, in order:** (1) equal probabilities must add to 1, so each is 1/n (2); (2) fair dice make the 36 ordered outcomes equally likely (3); (3) a sum collects a different number of outcomes for each value, 1 for 12 and 6 for 7, so it isn't uniform (3); (4) uniformity belongs to the variable: count the equally likely outcomes behind each value (4); (5) when it is uniform, each value carries 1/n, so a probability is the number of values counted over n (5, 6); (6) infinitely many equal values can't total 1 (7); (7) memory aid (8).
- **Entry knowledge (draft route `entryKnowledge`):** s01: discrete random variable, P(X = x) and P(x), a distribution with its two checks, generating a distribution from equally likely outcomes, bar graphs with gaps. Year 11 probability: equally likely outcomes, the 6 × 6 table of two dice. Primary: remainders on division.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s02`; main learner question as above; syllabusActions `ci6ab13b73`; site source `random-variables/lesson06.sa.html`; start: "From s01's distributions, ask whether the sum of two dice is equally likely like one die." Stop: "Define uniform (finitely many values, equal probabilities, forced 1/n); test by counting the equally likely outcomes behind each value; model by counting values, including inclusive ranges and finding n; explain why finitely many. Leave expectation to s03." Next: "math-a12-s03: where does a distribution balance? (expectation and variance)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** the eleven bars rising after the prediction (`ProbabilityBars`); n equal pieces filling one bar (`StackedTotalBar` equal mode); the 36-cell grid whose diagonals light and slide into bars (`OutcomeGrid`, new); letter tiles sorting into stacks (`OutcomeSort`); a 16-dot number line with the fence-post "+ 1" (`ProbabilityBars` with dots, or plain SVG); shrinking equal bars for n = 6 to 48 (`ProbabilityBars` `runs`); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`. Painted plates: one die, two dice (white and red), eight-sector spinner (s01 asset brief).
- **Board layout (constant):** as s01: heading top-left; graph or grid on the left (about 1,000 × 520 px; the grid about 520 × 520 px); table and algebra in the right column; plates small at the top of the left panel.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Uniform: n values with common probability c; Σ = nc = 1, so c = 1/n. Die: n = 6. Digit: n = 10.
  (b) Two dice: ordered pairs (w, r), w, r ∈ {1, ..., 6}, 36 equally likely. Number of pairs with sum s: s − 1 for s = 2 to 7, 13 − s for s = 7 to 12: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 (total 36). P(7) = 6/36 = 1/6; P(12) = 1/36; ratio 6. Unordered pairs number 21 and are not equally likely ((3, 4) covers two ordered outcomes, (3, 3) one).
  (c) STATISTICS: positions 1 to 10 are S T A T I S T I C S; counts S 3, T 3, I 2, A 1, C 1 (total 10). P(S) = 3/10, P(A) = 1/10.
  (d) Digit: P(X ≥ 7) = 3/10. Integers 5 to 20: n = 16; X > 16 is 17, 18, 19, 20, so 4/16 = 1/4.
  (e) 5, 10, 15, 20, 25: P(15) = 1/5; 15/75 = 1/5 numerically too (since 75 = 5 × 15)! The crossed chip must be "P(15) = 15/75 because 15 is out of a total of 75", crossed for its reasoning; the narration says the reason is wrong and shows it fails for P(25) = 25/75 = 1/3 ≠ 1/5. (Recalculation finding: the site's trap 02 says "p(15) is 1/5, not 15/75", but 15/75 = 1/5; the site's wrong method gives the right number here by coincidence. See site corrections.)
  (f) P(x) = 0.04: n = 25. P(x) = 0.3: 1/0.3 = 10/3, not whole, so no uniform distribution has P(x) = 0.3.
  (g) Infinitely many values with probability c: total of the first N is Nc, which exceeds 1 once N > 1/c if c > 0; if c = 0, every partial total is 0. So no distribution.
  (h) A1: values 2, 4, ..., 20: n = 10; X > 15: 16, 18, 20; P = 3/10. Crossed 3/20.
  (i) A2: 1 to 8 mod 3: 1→1, 2→2, 3→0, 4→1, 5→2, 6→0, 7→1, 8→2. Remainder 0: 2 sectors; 1: 3; 2: 3. P = 2/8, 3/8, 3/8 (= 1/4, 3/8, 3/8), sum 1. Not uniform. (Dividing by 4 instead would give a uniform remainder, two sectors each; not used.)
  (j) Pronunciations: "one thirty-sixth", "six thirty-sixths"; "S T A T I S T I C S" spelled once on screen, said "statistics"; "twenty minus five, plus one"; "zero point zero four"; "remainder".
  (k) Windows: die bars x 1 to 6, y 0 to 0.2 (s01's handoff axes, ticks 1/6 marked); two-dice bars x 2 to 12, y 0 to 0.2 (ticks 1/36, 3/36, 6/36 labelled as fractions); grid 6 × 6 with white die values across the top and red die values down the side; digit bars x 0 to 9, y 0 to 0.15; number line 4 to 21 with dots at 5 to 20; shrinking bars n = 6, 12, 24, 48 on y 0 to 0.2.

Main question: *One fair die gives six equally likely values. The sum of two fair dice is just as random, but are its eleven values equally likely? When is a distribution uniform, and how do you check?*
Entry knowledge (s01; Year 11 equally likely outcomes and the two-dice table): building a distribution from equally likely outcomes.
Stops after: the definition with 1/n, the count test, modelling by counting values, and why finitely many. No expectation, conditional probability or continuous uniform.
Handoff: math-a12-s03: the die's six equal bars with a balance triangle under the axis, "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s01: model probabilities teal; outcome cells and tiles ink on paper, highlighted groups amber (`MATH_ACCENT`); invalid or crossed red; algebra ink, current line bright, earlier lines dim. Screen maths writes P(x) = 1/n, P(X = 7) = 6/36 and n = 20 − 5 + 1.

### 1. hook (are the sums equally likely?)
> Last video ended with this question. One fair die has six values, and each has probability one sixth. Roll two fair dice and add them, and the sum can be anything from two to twelve. Are those eleven sums equally likely too? Make a guess. Here's the **answer**. A sum of seven is six times as likely as a sum of **twelve**. Both experiments use fair dice. Only one gives equally likely values. So when is a distribution uniform, and how do we check?

Visual: opens on s01's last frame exactly (left: the fair die's six teal bars at 1/6, tag "one fair die", the die plate; right: empty axes x 2 to 12, y 0 to 0.2, the two-dice plate, "?"; chip "Next: when are all values equally likely?"). Heading writes on: "When is a distribution uniform?". On "Make a guess" a 3 s prediction hold (no ring; a small "guess" chip). On "answer" the eleven teal bars rise on the right to 1/36, 2/36, ..., 6/36, ..., 1/36 (author note k), labelled with fractions. On "twelve" the 7 bar and the 12 bar glow, with a readout "6/36 against 1/36: six times". On the last three sentences the left bars tag "equal", the right bars tag "not equal", and the chip "When is it uniform?" moves to the top right.

### 2. what uniform means, and why 1/n
> A discrete random variable is uniformly distributed if it has finitely many values, all with the same probability. Uniform just means even, like a flat row of **bars**. And the shared probability isn't a free choice. Say there are n values, each with probability c. They must add to one, so n times c is one, and c is one over **n**. A fair die has six values, so each is one sixth. A random digit from zero to nine has ten values, so each is one **tenth**. So when something is chosen with equal chances from a finite list, a uniform model fits.

Visual: the right graph dims and shrinks aside; the die graph enlarges. On "bars" a level amber line rests across the tops of the six equal bars, tag "uniform: every bar the same height". On the next sentences the six bars tip into a `StackedTotalBar` in equal mode: six equal pieces fill a bar of length 1. The right column writes "c + c + ... + c (n terms) = nc = 1" and on "n" boxed "P(x) = 1/n for each of the n values". On "sixth" the bar's pieces label "1/6" each. On "tenth" the bar re-divides into ten equal pieces labelled "1/10", tag "digit 0 to 9: n = 10". On the last sentence a grey chip "chosen with equal chances from a finite list: uniform model".

### 3. why the sum of two dice isn't uniform
> So why isn't the sum of two dice uniform? Look at all the ways two dice can land. Make one die white and one red, so three then four is a different outcome from four then **three**. That gives thirty-six outcomes, and with independent fair dice they're all equally likely. If you only list the twenty-one unordered pairs, they aren't equally likely, because a double happens one way and a mixed pair two ways. Now colour each outcome by its sum. A sum of twelve needs six and six, just one **outcome**. A sum of seven runs along this whole diagonal, six **outcomes**. Each sum collects a different number of equally likely outcomes. The outcomes are uniform, but the sum is **not**.

Visual: clear change to the `OutcomeGrid`: the two-dice plate top left (white and red dice), a 6 × 6 grid with white die values 1 to 6 across the top and red die values 1 to 6 down the side, cells showing the ordered pair. On "three" the cells (3, 4) and (4, 3) ring separately, tag "different outcomes". On the unordered-pairs sentence a small crossed chip "21 unordered pairs, equally likely" (caption "(3, 3) is one cell; (3, 4) is two") with the cells (3, 3), (3, 4) and (4, 3) ringed. On the next sentence every cell gets a small "1/36" in grey, tag "36 equally likely outcomes". On "outcome" the single corner cell (6, 6) lights amber, label "sum 12: 1 outcome". On "outcomes" the anti-diagonal of sum 7 lights, label "sum 7: 6 outcomes". On the next sentence all eleven diagonals tint in turn and slide down off the grid into the eleven bars beside it (heights 1 to 6 to 1 cells, relabelled 1/36 to 6/36). On "not" two tags: "outcomes: uniform" over the grid, "sum: not uniform" over the bars.

### 4. the test: count what's behind each value
> So here's the test. Uniform is a property of the random variable, not of the equipment. Ask: does every value come from the same number of equally likely outcomes? Try it on letters. Pick one of the ten positions in the word statistics at random. Each position has probability one tenth. But X is the **letter**. S fills three positions, T fills three, I fills two, and A and C fill one **each**. So P of S is three tenths, and P of A is one tenth. The position was picked at random, but the letter isn't uniform.

Visual: the grid shrinks to the top left as a reminder. The test writes as a boxed sentence in the right column: "Uniform? Does every value come from the same number of equally likely outcomes?". Task strip "A position in STATISTICS is chosen at random. X is the letter at that position." (site problem 2). Ten letter tiles S T A T I S T I C S in a row, each with a small "1/10". On "letter" the tiles lift; on "each" they slide into stacks (`OutcomeSort`): S 3, T 3, I 2, A 1, C 1, which become five teal bars with labels 3/10, 3/10, 2/10, 1/10, 1/10. On the next sentence "P(S) = 3/10" and "P(A) = 1/10" write under the bars, with the test box ticking "no".

### 5. using the uniform model: count the values
> Once a variable really is uniform, every value carries one over n, so any probability is just a count. Count the values you want, and divide by n. For a random digit, P of X at least seven counts seven, eight and nine, so it's three **tenths**. Be careful counting n. Suppose X is uniform on the whole numbers from five to twenty. Twenty minus five is fifteen, but that misses one. Both ends count, so there are sixteen **values**. Then P of X greater than sixteen counts seventeen, eighteen, nineteen and twenty, which is four sixteenths, or one **quarter**.

Visual: clear change. Right column: "Uniform: P(event) = (number of values in it) ÷ n". Digit bars x 0 to 9, each 1/10; on "tenths" the bars 7, 8, 9 light amber and "P(X ≥ 7) = 3/10" writes. The digit bars clear; a number line 4 to 21 with sixteen dots at 5 to 20. On "fifteen" a crossed chip "20 − 5 = 15 values" (caption "misses one end"). On "values" the dots count up 1 to 16 as they glow, row "n = 20 − 5 + 1 = 16", tag "both ends count". On "quarter" the dots 17 to 20 glow amber and "P(X > 16) = 4/16 = 1/4".

### 6. the count, not the size
> Two more checks. Say X is uniform on five, ten, fifteen, twenty and twenty-five. P of fifteen is one fifth, because there are five values. It has nothing to do with fifteen being in the middle, or adding up the values. That kind of reasoning would make twenty-five more likely than five, and in a uniform model every value is equally **likely**. And you can work backwards. If every value has probability zero point zero four, then n is one over zero point zero four, which is twenty-five values. But a probability of zero point three can't be uniform, because one over zero point three isn't a whole **number**.

Visual: camera continue (the number line dims). Five teal bars at 5, 10, 15, 20, 25, each 1/5; "P(15) = 1/5" with tag "5 values". On "likely" a chip "P(15) = 15/75, out of a total of 75" fades in with a ghost bar set whose heights grow with the values (5/75 to 25/75, dashed red), and the chip is crossed (caption "uses the sizes; P(25) would be 25/75"). On the working-back sentences: "1/n = 0.04, so n = 1/0.04 = 25" with "25 × 0.04 = 1" ticked; on "number" "1/0.3 = 10/3, not a whole number: no uniform model" with a small red cross.

### 7. why finitely many
> One last condition: finitely many values. Watch what happens as the number of equal values **grows**. Six values, twelve, twenty-four, forty-eight. Each bar is one over n, so the bars get shorter and **shorter**. Now try infinitely many values, all with the same probability. If that probability is zero, the total is zero. If it's anything bigger than zero, the total passes one once there are enough values. Either way it can't be **one**. That's why a uniform distribution needs finitely many values.

Visual: clear change. Equal bars for n = 6 on y 0 to 0.2; on "grows" they become 12, 24, then 48 narrower bars (`ProbabilityBars` `runs`), each set labelled "n = 6: 1/6", "n = 12: 1/12", "n = 24: 1/24", "n = 48: 1/48", the `StackedTotalBar` below always exactly 1. On "shorter" a readout "1/n → 0". On the infinite sentences a two-row panel: "c = 0: total 0" and "c > 0: total passes 1 after more than 1/c values" (a bar of pieces of length c growing past a dashed line at 1, red beyond it). On "one" both rows cross, tag "no uniform model on infinitely many values".

### 8. memory aid
> Here's a way to remember the test. Same count behind every bar. Look behind each value of X, and count the equally likely outcomes there. If every count is the same, X is uniform.

Visual: camera pull back to a small scene 3 motif: the two-dice grid with the 12 corner and the 7 diagonal lit beside their bars. The handwritten line writes large: "Same count behind every bar." Under it, smaller: "Count the equally likely outcomes behind each value." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. X is uniformly distributed on the even numbers from two to twenty. Find P of X greater than fifteen. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "X is uniformly distributed on the even numbers 2, 4, 6, ..., 20. Find P(X > 15)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no bars, no count of values).

### 10. feedback 1 (brief)
> The values are two, four, six, up to twenty, which is ten values, so each has probability one **tenth**. Greater than fifteen means sixteen, eighteen or twenty, three values. So P of X greater than fifteen is three **tenths**. Three twentieths is wrong. Twenty is the largest value, not the number of **values**.

Visual: card shrinks to the top. "even numbers 2, 4, 6, ..., 20" underlined. On "tenth" ten dots at 2 to 20 count up to 10, row "n = 10, P(x) = 1/10". The dots 16, 18, 20 glow amber; on "tenths" boxed "P(X > 15) = 3/10". On "values" a chip "3/20" fades in and is crossed (caption "20 is the largest value; n = 10"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A fair spinner with eight equal sectors, numbered one to eight, is spun once. X is the remainder when the number is divided by three. Is X uniformly distributed? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A fair spinner has eight equal sectors numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify your answer." The painted spinner plate with eight equal coded sectors numbered 1 to 8 beside the card. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no remainders, no grouping of sectors).

### 12. feedback 2 (brief)
> X can be zero, one or **two**. Count the sectors behind each value. Remainder zero has two sectors, and remainders one and two have three sectors **each**. So the probabilities are two eighths, three eighths and three eighths, and X isn't uniform. Saying it's uniform because the spinner is fair is wrong. Fair sectors don't make a fair **variable**.

Visual: card shrinks to the top. "eight equal sectors" and "divided by 3" underlined. On "two" the values row 0, 1, 2. The spinner's sectors tint by remainder (0 grey-teal: 3, 6; 1 amber: 1, 4, 7; 2 blue: 2, 5, 8); on "each" the sectors' numbers slide into three stacks (`OutcomeSort`: 2, 3, 3) and become bars 2/8, 3/8, 3/8. Boxed "P(0) = 2/8, P(1) = 3/8, P(2) = 3/8: not uniform". On "variable" a chip "Uniform, because the spinner is fair" fades in and is crossed (caption "equal sectors, unequal counts"). Hold about 1 second.

### 13. handoff
> So a distribution is uniform when every value has the same count of equally likely outcomes behind it, and then each value has probability one over n. Next, a new question. Here's the fair die again. If these bars were weights on a beam, where would it **balance**?

Visual: board clears to one graph: the fair die's six teal bars at 1/6 on x 1 to 6, the die plate small above. On "balance" a small amber balance triangle appears under the x axis and slides from 1 towards 6 and back without settling, then stops under a "?" chip at no particular value. Chip "Next: where does a distribution balance?". No value 3.5 shown or spoken. Hold about 2 seconds. This is s03's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. X is uniformly distributed if it has finitely many values, all with the same probability. With n values, nc = 1, so P(x) = 1/n.
2. Random is not uniform: fair equipment makes the outcomes equally likely, but a variable can collect different numbers of outcomes per value (two dice: P(7) = 6/36, P(12) = 1/36).
3. Test: does every value come from the same number of equally likely outcomes?
4. If X is uniform: P(event) = (number of values in it) ÷ n. Count both ends: 5 to 20 has 20 − 5 + 1 = 16 values.

Memory aid (large, on the notes screen): *Same count behind every bar.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 13's frame exactly (the die's six equal bars, the balance triangle under "?", chip "Next: where does a distribution balance?"). This is the final frame and s03's opening frame.

## Teaching checks

- **Does it explain causes?** Why 1/n: n equal probabilities must add to 1 (2). Why the sum isn't uniform: each sum collects a different number of the 36 equally likely outcomes, shown on the grid's diagonals (3). Why (3, 4) and (4, 3) are separate: the dice are different, so the outcomes are different (3). Why the letter isn't uniform: its values fill different numbers of equally likely positions (4). Why a probability becomes a count: each value carries the same 1/n (5). Why 20 − 5 is one short: both ends count (5). Why the sizes don't matter: uniform means equal bars (6). Why 0.3 can't be uniform: n would not be whole (6). Why finitely many: infinitely many equal values total 0 or pass 1 (7).
- **Misconceptions addressed:** "random means uniform" (1, 3, 4; feedback 2 crossed); "(3, 4) and (4, 3) are the same" (3); "n = 20 − 5" (5, crossed); "probability depends on the size of the value" (6, crossed); "any probability can be uniform" (6); "uniform on all whole numbers" (7); "n is the largest value" (feedback 1 crossed).
- **One idea at a time:** one definition (2), one cause on one grid (3), one test applied once (4), one counting rule with one trap (5), two short checks taken in turn (6), one condition (7).
- **Video makes it easier:** the student sees the eleven bars rise unevenly after guessing (1), sees six equal pieces fill one bar (2), watches the 7 diagonal and the lone 12 cell slide into bars (3), watches letters stack (4), counts sixteen dots (5) and watches bars shrink while their total stays 1 (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (the value list; the spinner's sectors and the remainder rule), 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 24 s and 32 s (scenes 10 and 12).
- **Avoided double teaching:** s01's distribution, its checks and generating method are used without re-teaching; Year 11's two-dice table is drawn as the cause, not taught as new.
- **Syllabus coverage:** `ci6ab13b73`: define (2, 7; key note 1), use to model equally likely outcomes (5, 6; A1; key note 4), and recognise when the model does not apply (3, 4; A2; key notes 2, 3).
- **Out of scope by design:** expectation (s03); conditional probability; the continuous uniform model (s07).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "X is uniformly distributed on the even numbers 2, 4, 6, ..., 20. Find P(X > 15)."
Model answer: the values 2, 4, ..., 20 are 10 values, each with probability 1/10. X > 15 for 16, 18 and 20, so P(X > 15) = 3/10. Classic mistake (crossed): "3/20" (20 is the largest value, not the number of values).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A fair spinner has eight equal sectors numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify your answer."
Model answer: X takes the values 0, 1, 2. Remainder 0 from 3 and 6 (2 sectors), remainder 1 from 1, 4, 7 (3 sectors), remainder 2 from 2, 5, 8 (3 sectors). The sectors are equally likely, so P(0) = 2/8, P(1) = 3/8, P(2) = 3/8. The values do not all have the same probability, so X is not uniformly distributed. Classic mistake (crossed): "Yes, because the spinner is fair" (equally likely sectors, unequal counts behind the values).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| One die | n = 6, P(x) = 1/6 | 1, 2, 13 |
| Two dice | 36 ordered outcomes; sums 2 to 12 with 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 outcomes; P(7) = 6/36, P(12) = 1/36 | 1, 3, 8 |
| Digit | n = 10, P(x) = 1/10; P(X ≥ 7) = 3/10 | 2, 5 |
| STATISTICS | S 3, T 3, I 2, A 1, C 1; P(S) = 3/10, P(A) = 1/10 | 4 |
| 5 to 20 | n = 16; P(X > 16) = 4/16 = 1/4 | 5 |
| 5, 10, ..., 25 | P(15) = 1/5; crossed method 15/75 (fails for 25/75 = 1/3) | 6 |
| Working back | 0.04 gives n = 25; 0.3 gives 10/3 (none) | 6 |
| Shrinking bars | n = 6, 12, 24, 48: 1/6, 1/12, 1/24, 1/48 | 7 |
| A1 | n = 10; P(X > 15) = 3/10; crossed 3/20 | 9, 10 |
| A2 | remainders 0, 1, 2 with 2, 3, 3 sectors; 2/8, 3/8, 3/8; crossed "uniform because fair" | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 `fractions` and `collections.Counter` (3 Nov, scratchpad script); Codex to re-check.

- Two dice sums over 36 ordered pairs: 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:5, 9:4, 10:3, 11:2, 12:1.
- STATISTICS letter counts S 3, T 3, I 2, A 1, C 1.
- Digits 0 to 9: P(X ≥ 7) = 3/10. Integers 5 to 20: 16 values; X > 16: 4 values; 1/4.
- 1/0.04 = 25; 25 × 0.04 = 1; 1/0.3 = 10/3.
- 15/75 = 1/5 (coincidence); 25/75 = 1/3 ≠ 1/5.
- A1: 2 to 20 even: 10 values; 16, 18, 20: 3/10.
- A2: k mod 3 for k = 1 to 8: 1, 2, 0, 1, 2, 0, 1, 2; counts 0:2, 1:3, 2:3.

## Memory aid check

- **"Same count behind every bar."** Original. Meaning, as said in scene 8: for each value of X, count the equally likely outcomes that give it; X is uniform exactly when every count is the same. Assumptions checked: the underlying outcomes must be equally likely (the second line says so; with unequal outcomes, as for an unfair die, the count test does not apply and the probabilities must be compared directly); each outcome gives one value of X (s01's "one trial, one value"); finitely many values (scene 7, key note 1). It helps a new case: the spinner remainder (A2), or the larger of two dice, can be judged by counting without a full table. Introduced after the cause (3) and the test (4).
- **Considered, not used:** "Random isn't uniform" as the aid (true but gives no method; it stays as key note 2's opening words).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,346 characters** (5,359 with the joining spaces), 14 scenes. Characters per scene (1 to 14): 441, 542, 657, 505, 547, 604, 491, 179, 133, 300, 193, 418, 261, 75. At 13.3 characters per second the speech is about 402 s; add about 14 s of settling for the rising bars (1), the diagonal slide (3), the letter sort (4), the dot count (5) and the shrinking bars (7), 3 s for the prediction hold, 20 s for two countdowns, 5 s of short holds (8, 10, 12, 13) and about 62 s more for the quiet notes (about 104 s of holds): **about 506 s**, under the 570 s cap. **Below the 5,500 floor, by design (stop rather than pad).** The first draft counted 5,112; two genuine additions were made (scene 2: the uniform model fits "chosen at random from a finite list", the "use it to model" half of `ci6ab13b73`; scene 3: the 21 unordered pairs are not equally likely, a classic error). The point is a single definition with its test and model; more scenes would re-teach s01 or reach into s03, and the conditional-probability card belongs to the practice video. Root has accepted 5,137 to 5,499 for similar single-point videos (decisions 24, 33, 43). Feedback: scene 10 about 24 s and scene 12 about 32 s including the 1 s holds (open decision 2).

## Scene list and build ids

Lesson key `m-a12s02` (route math-a12-s02). Suggested explainer folder `src/explainer/lessons/math-a12-s02` and build folder `docs/production/claude-pm/lessons/m-a12s02` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, uniform-and-one-over-n, two-dice-grid, count-test, count-the-values, count-not-size, finitely-many, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s01's last frame continues into scene 1 (camera continue, same two graphs); 1 to 2 camera continue (the die graph enlarges); 2 to 3 clear change (the grid); 3 to 4 camera continue (the grid shrinks to a reminder); 4 to 5 clear change; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s02-learning-review.md`, `science_check` = `checks/m-a12s02-maths-check.md`.

## Assets

Have (after the s01 build): `ProbabilityBars`, `DistributionTable`, `StackedTotalBar` (equal mode), `OutcomeSort`; shared `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Plates from the s01 asset brief: `maths-a12-die.png`, `maths-a12-two-dice.png` (white and red), `maths-a12-spinner-8.png` (or base and pointer).

New: `OutcomeGrid`; `ProbabilityBars` dot mode (number line of values, optional).

## Codex asset brief

**Coded parts (add to the s01 probability kit brief; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample).**

1. **`OutcomeGrid`** (scenes 3, 8). An r × c grid of ordered outcomes (default 6 × 6 two dice) with row and column headers (white die across, red die down; header colours match the plate). Props: `cellLabel` (pair or value), `valueOf` (author function, e.g. sum), `probabilityTag` ("1/36" per cell, grey), `ring` ({cells[], at}), `lightGroup` ({value, at}: tints every cell with that value), `sweepGroups` (tints each value group in turn), `slideToBars` (at: each group's cells slide out and stack into the matching bar of a linked `ProbabilityBars`, heights count/total). Checks: the sum groups have 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 cells; the linked bars equal count/36 exactly; the part throws if the author's distribution disagrees with the grid's counts. Fit check at 1920 and phone landscape with pair labels legible at 520 px.
2. **`ProbabilityBars` dot mode** (scene 5; feedback 1). Values as dots on a number line, with a counting animation (numbers 1 to n appear as each dot glows) and `highlight` for a subset. Checks: 16 dots for 5 to 20; 10 dots for 2 to 20 even.
3. **`ProbabilityBars` `runs` with changing n** (scene 7): bar sets with different numbers of bars (6, 12, 24, 48), each set's bars at 1/n, transitioning by splitting; the linked `StackedTotalBar` stays exactly 1. **Growing-total row** (scene 7): pieces of length c accumulate past a dashed line at 1 (red beyond), illustrating c > 0.
4. **Spinner sector overlay** (scenes 11, 12): eight equal sectors drawn over `maths-a12-spinner-8.png`'s blank disc using its sidecar centre and radius, numbers 1 to 8, sector tinting by an author-supplied group, and numbers lifting off into an `OutcomeSort`. Checks: each sector 45°; the sorted stacks 2, 3, 3.

No new painted plate (all from the s01 asset brief).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the derivation nc = 1, c = 1/n, and that "finitely many" is stated with every definition (scene 2, key note 1).
3. Confirm the scope of every learner-visible general claim: the count test assumes equally likely outcomes (stated in scene 4's box and the memory aid's second line); "random is not uniform" is said of a variable, not as "random is never uniform".
4. Confirm the scene 6 crossed chip is crossed for its method, with the 25/75 counterexample shown, since 15/75 happens to equal 1/5.
5. Confirm scene 7's argument (c = 0 gives 0; c > 0 passes 1 after more than 1/c values).
6. Confirm both attempt questions carry every demand and condition, and that neither card shows n, the values, the remainders or a verdict.
7. Confirm the syllabus quote matches the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s01 scene 13 exactly and the closing frame (scene 13) matches s03's opening.

## YouTube metadata (draft)

Title: The Discrete Uniform Distribution: When Is Every Value Equally Likely? | Year 12 Maths Advanced

(Title length: 96 characters; shorter alternative: "When Is a Distribution Uniform? | Year 12 Maths Advanced", 56 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson06.sa.html

One fair die gives six equally likely values. The sum of two fair dice is just as random, so why is 7 six times as likely as 12? Define a uniform distribution (finitely many values, all equally likely) and see why the shared probability must be 1/n. Use the 36-outcome grid to see why fair dice don't make every variable uniform, and learn the test: count the equally likely outcomes behind each value. Then model with a uniform variable by counting values, including an inclusive range, and see why there can't be a uniform distribution on infinitely many values. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Discrete probability distributions from data and models (previous video). Next: Expected value and variance.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Site trap 02 coincidence (root, site log).** The site says "p(15) is 1/5, not 15/75", but 15/75 = 1/5, so the site's own example doesn't show the error it names. This design crosses the method and shows 25/75 = 1/3. Log as a site correction (suggested: use p(25), where the wrong method gives 25/75 = 1/3).
- **2. Feedback 2 length (learning review).** About 32 s, two seconds over the 30 s guide, because the three remainder groups must each be named. Same-length trim if needed: drop "Count the sectors behind each value." (−37, keep the tinting), giving about 29 s.
- **3. Route entry (root).** The draft route entry in Decisions is a provisional input.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Site lesson SHA256 (lesson 6, read 3 Nov): `0e927f50766ba221045b7579db76a417cb343acb6afc89ad48197cf87b86d5f5`.
- Revision 1 has had no independent review. Next: student learning review (trace from s01 and Year 11 equally likely outcomes; check that the prediction hold gives a genuine turn; that the grid's diagonals are the cause and not decoration; that "uniform belongs to the variable" is said before the letters; that the fence-post count is visible; that the 15/75 crossing is clearly about the method; that the infinite argument is followable at Year 12 entry; that the cards give nothing away), then the Codex maths check and error check.
- The diagonal slide, the letter stacking and the shrinking bars carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s01's scene 13 (same designer). The final frame (scene 13) must match s03's opening (same designer, written next).

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 2 says "chosen with equal chances" (speech and chip); scene 3 says "independent fair dice" and drops "So"; feedback 2's repeated sector listing cut to bring it to about 30 s (root decision 54). Narration now 5,267 characters (counted by the build parser rules). No em dashes.
