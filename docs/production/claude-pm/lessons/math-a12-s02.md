# Maths A12 S02: When is a finite distribution uniform? Equal probabilities forced to 1/n, random is not uniform, counting values, and why finitely many (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s02/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s02.md`).

Narration 5,602 characters, 14 scene headings, about 507 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: second video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 54), after s01 (discrete probability distributions from data and models) and before s03 (expectation and variance). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a tear-off desk calendar, every page equally likely, the date not); bar graphs, the outcome grid, tables and algebra stay coded. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson06.sa.html` (The Discrete Uniform Distribution), SHA256 `0e927f50766ba221045b7579db76a417cb343acb6afc89ad48197cf87b86d5f5`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions).

Owner rules applied: as s01 (2024 syllabus only; codenames and exact wording; no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; no gambling context (the site's raffles are not used); one reasoning stage at a time; g01 worked examples with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci6ab13b73`: "Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s01 Revision 3's last frame (one fair die's six bars at 1/6 beside a tear-off desk calendar and empty date axes 1 to 31 with "?"). Shows with a whole year of calendar pages that a random page gives a date that is not uniform (12, 11 or 7 pages behind each date); defines a uniform distribution and derives P(x) = 1/n from ΣP(x) = 1 (site card 02); gives the test (count the equally likely outcomes behind each value, site card 03) on the calendar, then on the site's two dice and their 36-outcome grid (site hook and card 03, numbers unchanged); models with a uniform variable by counting values, including an inclusive count (site card 04 and trap 04); uses value-against-count and finding n from P(x) (site trap 02 and problem 1); explains "finitely many" (site trap 03). Stops at the uniform model. Not taught: expectation of a uniform variable (s03 opens on it); conditional probability with uniform variables (later home: the strand practice video); the continuous uniform model (s07).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a tear-off desk calendar (painted plate, live).** Tear one page at random off a year's calendar (365 pages, a non-leap year). Every page is equally likely, so the page is uniform (1/365 each), but the date printed on it is not: dates 1 to 28 sit on 12 pages each, the 29th and 30th on 11 (February lacks them) and the 31st on only 7. This is the lesson's whole idea in an object every student owns, with no science and no gambling: fair equipment, equally likely outcomes, and a variable that collects different numbers of outcomes per value. It replaces Revision 2's STATISTICS letters (site problem 2), which made the same point with less to see; the site's two dice (the site hook and card 03) stay as the second, classic case with the grid. The calendar returns in the memory card (8) and the key notes.
- **Why this anchor.** Owner rule (7 Nov): everyday contexts, statistics through everyday chance. The suggested contexts were weighed: a loaded spinner shows unequal outcomes, not the subtler point that a fair device can give a non-uniform variable; a card draw is gambling-adjacent; a playlist shuffle overlaps d04's music. The calendar is not used anywhere in `checks/root-decisions-maths-redesign.md` or the f01 to f08 redesigns.
- **Idealising assumptions (author notes, not learner copy).** (i) A non-leap year of 365 pages, one page per day (no weekend-combined pages). (ii) "At random" means every page equally likely. (iii) The year 2027 is used for the page flip; any non-leap year gives the same counts.
- **Simulations (standard item 3).**
  1. `CalendarFlip` (scene 1, new studio part on `PlateImg` and `ProbabilityBars`): pages fly off the painted pad one by one, each showing its coded date on the blank top page, a month readout steps January to December and each page adds one to its date's bar on the 1 to 31 axes. About 6 s for the year (accelerating after January); `LiveReadoutBoard` (52 px): "pages torn 0 → 365", "month", "pages for the 31st 0 → 7". At the end the bars stand 12 (1 to 28), 11 (29, 30) and 7 (31), then relabel to probabilities over 365.
  2. `OutcomeGrid` (scene 4): the 6 × 6 grid's diagonals light and slide into the eleven bars.
  3. `ProbabilityBars` runs with growing n (scene 7): equal bars split as n doubles while a total bar stays exactly 1.
- **Colour roles (fixed for the whole video).**
  - **outcomes (pages, grid cells, dots): ink on paper**, each tagged with its grey probability (1/365, 1/36);
  - **the variable's probabilities (bars): teal** (`MATH_TEAL`), as in s01's model;
  - **the values being counted or asked about: amber** (`MATH_AMBER`);
  - **answer: green**; **mistake: red**, crossed slips only;
  - ink algebra. Every coloured set also has a written label.
- **Large type, handwriting, layout.** As s01: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. `HandTag`: "every page equal", "the date isn't", "only 7", "too short", "count behind each bar", "different outcomes", "both ends count", "sizes don't matter", "1/n → 0". At most two live at once. The calendar plate is at least 340 px tall when it carries the idea.
- **Stage changes (standard item 2):** the calendar flip into the date bars (1); equal pieces filling one bar (2); the month columns behind each date (3); the two-dice grid sliding into bars (4); the dot line and the fence-post count (5); the size-ghost and working back (6); bars splitting towards 0 and the runaway total (7); the framed memory card (8); question cards with pictures (9 to 12); the die on its beam (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 5 is a g01 board (task strip "X is uniform on the whole numbers 5 to 20. Find P(X > 16).", equation strip "uniform: P(event) = (number of values in it) ÷ n", givens card "values 5, 6, ..., 20", rows at 52 px, a green framed "1/4" and the crossed slip "20 − 5 = 15 values"). Scene 6's crossed slip is the size method "15/75". Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Same count behind every bar." with the key "count the equally likely outcomes behind each value" and a calendar badge (the 31st bar short, "7 pages, not 12").
- **Visual surprise (standard item 9).** The 31st's bar stops growing in February and ends barely more than half as tall as the 1st's, though every page was equally likely (scene 1); the two-dice diagonal of sevens slides into a bar six times the twelve's (scene 4).
- **Question cards (full text and a picture).** A1: the worded question with a coded number line from 0 to 22 (ticks only, no dots marked); A2: the worded question with the painted spinner, eight equal coded sectors numbered 1 to 8.
- **Narration (not voiced).** Scene 1 is rewritten around the calendar flip (441 to 616); scene 2 adds the page as a uniform example (534 to 659); scene 3 is new (the calendar's count test, replacing the STATISTICS scene in this slot); scene 4 is the two dice, shortened from Revision 2's scene 3 (666 to 568); scene 8 adds one sentence naming the calendar and the dice. Scenes 5 to 7 and 9 to 14 keep their Revision 2 text. Total 5,267 (below the floor in Revision 2) to 5,602.

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "When is a finite distribution uniform?" The answer, built in order: a random date is not uniform, a surprise (1); uniform means finitely many values with the same probability, and the total of 1 forces 1/n (2); fair equipment makes the outcomes equally likely, but a variable can collect different numbers of outcomes per value, so the test is to count them (3, 4); once uniform, a probability is a count of values over n (5, 6); and there can't be infinitely many equal values (7).
- **c = 1/n is forced (site card 02).** n equal probabilities c add to nc = 1, so c = 1/n: "the shared probability isn't a free choice". Shown with `StackedTotalBar` in equal mode.
- **The two dice (site hook and card 03, numbers unchanged).** The 6 × 6 `OutcomeGrid` of ordered pairs (white die across, red die down) is uniform: 36 cells, each 1/36. The diagonals hold 1, 2, ..., 6, ..., 2, 1 cells and slide into the eleven bars. (3, 4) and (4, 3) are different cells; a classic error counts 21 unordered pairs.
- **Modelling by counting (site card 04 and trap 04).** A random digit 0 to 9: n = 10, P(X ≥ 7) = 3/10. Integers 5 to 20 inclusive: n = 20 − 5 + 1 = 16, not 15; P(X > 16) = 4/16 = 1/4.
- **Value against count, and finding n (site trap 02 and problem 1).** Uniform on 5, 10, 15, 20, 25: P(15) = 1/5; the size method "15/75" is crossed for its reasoning (it fails for 25: 25/75 = 1/3). P(x) = 0.04 gives n = 25; P(x) = 0.3 can't be uniform (1/0.3 is not whole).
- **Finitely many (site trap 03).** Equal bars for n = 6, 12, 24, 48 shrink as 1/n. Infinitely many values with one probability c: c = 0 gives a total of 0; c > 0 passes 1 once there are more than 1/c values.
- **Attempts (original).** (A1) X uniform on the even numbers 2, 4, ..., 20; P(X > 15) = 3/10. Crossed: "3/20". (A2) A fair spinner with eight equal sectors 1 to 8; X is the remainder on division by 3; not uniform (2/8, 3/8, 3/8). Crossed: "Yes, because the spinner is fair".
- **Mistake scene:** none separate. "Random means uniform" (1, 3, 4; feedback 2 crossed); "(3, 4) and (4, 3) are the same outcome" (4); "n = 20 − 5" (5, crossed); "bigger values are more likely" (6, crossed); "a uniform distribution on all whole numbers" (7); "n is the largest value" (feedback 1 crossed).
- **Handoff (outline next: s03, "What do expectation and variance measure in a discrete model?").** Unchanged: the fair die's six equal bars with an amber balance triangle under the axis, sliding without settling, a "?" and the chip "Next: where does a distribution balance?". No value 3.5. This frame is s03's opening frame (s03 Revision 3 keeps it).
- **Site sources used:** lesson 6 hook (one die against the sum of two dice), cards 02, 03 and 04, problem 1, traps 02, 03 and 04. Revision 3 no longer uses problem 2 (STATISTICS); the calendar takes its place. Not used: raffles and prize draws, conditional probability, the class selection (problem 3), the site's practice questions.
- **Site corrections (for the log):** trap 02 says "p(15) is 1/5, not 15/75", but 15/75 = 1/5, so the example cannot show the error it names (suggested fix: use p(25), where the size method gives 25/75 = 1/3). Owner notes: card 03's "giveaway" is a heuristic, not a rule (X uniform on {0, 1} and Y uniform on {0, 2}, independent, give X + Y uniform on {0, 1, 2, 3}); short-answer Q1(c) contains an em dash; the raffle contexts are gambling-adjacent.
- **Entry knowledge (draft route `entryKnowledge`):** s01 (discrete random variable, P(X = x), a distribution and its two checks, generating a distribution from equally likely outcomes, bar graphs with gaps). Year 11 probability (equally likely outcomes; the 6 × 6 table of two dice). Everyday: months have 28 to 31 days. Primary: remainders.
- **Draft route entry (root to adopt).** id `math-a12-s02`; syllabusActions `ci6ab13b73`; site source `random-variables/lesson06.sa.html`; start: "From s01's die and a calendar, ask whether every date on a random page is equally likely." Stop: "Define uniform (finitely many values, equal probabilities, forced 1/n); test by counting the equally likely outcomes behind each value (calendar, two dice); model by counting values, including inclusive ranges and finding n; explain why finitely many." Next: "math-a12-s03: where does a distribution balance?".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Uniform: n values with common probability c; nc = 1, so c = 1/n. Page: n = 365. Die: 6. Digit: 10.
  (b) Calendar (2027, non-leap): pages per date: 1 to 28: 12 each; 29 and 30: 11 each (February lacks them); 31: 7 (January, March, May, July, August, October, December). Total 28 × 12 + 2 × 11 + 7 = 365. P(1st) = 12/365 ≈ 0.0329; P(31st) = 7/365 ≈ 0.0192; ratio 7/12 ≈ 0.58 ("barely more than half").
  (c) Two dice: ordered pairs (w, r), 36 equally likely; pairs with sum s: s − 1 for s = 2 to 7, 13 − s for s = 7 to 12. P(7) = 6/36, P(12) = 1/36; ratio 6. Unordered pairs number 21 and are not equally likely.
  (d) Digit: P(X ≥ 7) = 3/10. Integers 5 to 20: n = 16; X > 16 is 17, 18, 19, 20: 4/16 = 1/4.
  (e) 5, 10, 15, 20, 25: P(15) = 1/5; 15/75 = 1/5 numerically too; the slip is crossed for its reasoning; it fails for P(25) = 25/75 = 1/3 ≠ 1/5.
  (f) P(x) = 0.04: n = 25. P(x) = 0.3: 1/0.3 = 10/3, not whole.
  (g) Infinitely many values with probability c: the first N total Nc, which exceeds 1 once N > 1/c if c > 0; if c = 0 every partial total is 0.
  (h) A1: values 2, 4, ..., 20: n = 10; X > 15: 16, 18, 20; 3/10. Crossed 3/20.
  (i) A2: 1 to 8 mod 3: 1, 2, 0, 1, 2, 0, 1, 2. Remainder 0: 2 sectors; 1: 3; 2: 3. 2/8, 3/8, 3/8. Not uniform.
  (j) Pronunciations: "thirty-first"; "three hundred and sixty-five"; "one thirty-sixth"; "twenty minus five, plus one"; "zero point zero four"; "remainder".
  (k) Windows: date bars x 1 to 31 (bar width 0.6), counts axis 0 to 14, relabelled to probability 0 to 14/365 (ticks 7/365, 12/365); die bars x 1 to 6, y 0 to 0.2; two-dice bars x 2 to 12, y 0 to 0.2 (ticks 1/36, 3/36, 6/36); grid 6 × 6; digit bars x 0 to 9, y 0 to 0.15; number line 4 to 21 with dots at 5 to 20; shrinking bars n = 6, 12, 24, 48 on y 0 to 0.2.

Main question: *Every page of a calendar is equally likely to be torn off at random, but is every date? When is a distribution uniform, and how do you check?*
Entry knowledge (s01; Year 11 equally likely outcomes and the two-dice table): building a distribution from equally likely outcomes.
Stops after: the definition with 1/n, the count test, modelling by counting values, and why finitely many. No expectation, conditional probability or continuous uniform.
Handoff: math-a12-s03: the die's six equal bars with a balance triangle under the axis, "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): outcomes ink with grey probability tags; the variable's probability bars teal; values counted or asked about amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type as in Decisions. Screen maths writes P(x) = 1/n, P(31st) = 7/365, P(X = 7) = 6/36 and n = 20 − 5 + 1.

### 1. hook: is every date equally likely?
> Last video ended with this question. Tear one page at random off this desk calendar, and every page has the same chance. But is every date, from the first to the thirty-first, equally likely? Make a guess. Let's flip through a whole year and count the pages for each **date**. January has every date from one to thirty-one. February stops at twenty-eight. By the end of the **year**, the dates one to twenty-eight have twelve pages each, the twenty-ninth and thirtieth have eleven, and the thirty-first has only **seven**. Every page is equally likely, but the date isn't. So when is a distribution uniform, and how do we check?

Visual: opens on s01 Revision 3's last frame exactly (left: the fair die's six teal bars at 1/6 with the die plate, tag "one fair die"; right: the painted desk calendar `ma12-desk-calendar-v1` with "15" on its page above empty axes "date" 1 to 31, y 0 to 0.04, "?"; chip "Next: when are all values equally likely?"). Heading writes on: "When is a distribution uniform?". The die panel shrinks to a 300 px corner card; the calendar grows to 420 px at the left and the date axes widen to 1,200 × 560 px, now with a counts axis 0 to 14. On "Make a guess" a 3 s prediction hold (no ring; a hand tag "guess"). On "date" `CalendarFlip` starts: pages fly off the pad one by one, each showing its coded date, the month readout steps through the year, and each page adds one to its teal bar; `LiveReadoutBoard` (52 px) "pages torn", "month", "pages for the 31st". During January all 31 bars rise together to 1; in February the 29, 30 and 31 bars pause, hand tag "February: no 29th, 30th or 31st". On "year" the flip ends at 365 pages and the bars stand at 12 (1 to 28) and 11 (29, 30), with labels. On "seven" the 31 bar, stopped at 7, glows amber with a hand tag "only 7"; a dashed line at 12 runs across the tops. On the next sentence two hand tags: "every page equal: 1/365" by the pad, "the date isn't" by the bars. The chip "When is it uniform?" moves to the top right.

### 2. what uniform means, and why 1/n
> A discrete random variable is uniformly distributed if it has finitely many values, all with the same probability. Uniform just means even, like a flat row of **bars**. And the shared probability isn't a free choice. Say there are n values, each with probability c. They must add to one, so n times c is one, and c is one over **n**. The page itself is uniform: three hundred and sixty-five pages, each with probability one over three hundred and sixty-five. A fair die has six values, so each is one **sixth**. A random digit from zero to nine has ten values, so each is one **tenth**. So when something is chosen with equal chances from a finite list, a uniform model fits.

Visual: the date bars dim to 60 per cent and slide right as a solid thumbnail (500 px); the die card grows back to 700 px with its six teal bars. On "bars" a level amber line rests across the six equal tops, hand tag "uniform: every bar the same height". The six bars tip into a `StackedTotalBar` in equal mode (1,200 px): six equal pieces fill a bar of length 1. Right column, 52 px: "c + c + ... + c (n terms) = nc = 1" and on "n" a green-framed "P(x) = 1/n for each of the n values". On the page sentence the calendar plate pulses, row "page: n = 365, each 1/365" (44 px). On "sixth" the total bar's pieces label "1/6" each. On "tenth" it re-divides into ten equal pieces labelled "1/10", tag "digit 0 to 9: n = 10". On the last sentence a chip "chosen with equal chances from a finite list: uniform model".

### 3. the test: count what's behind each value
> So why isn't the date uniform? Look behind each bar. The first of the month sits on twelve equally likely pages, one in every **month**. The thirty-first sits on just seven, because February, April, June, September and November are too **short**. So P of the first is twelve over three hundred and sixty-five, and P of the thirty-first is only seven over three hundred and sixty-five. Here's the test. Uniform is a property of the random variable, not of the equipment. Ask: does every value come from the same number of equally likely outcomes? For the date, the answer is **no**.

Visual: stage change: a coded year strip fills the upper half (12 month columns, 1,500 × 420 px, each a column of small page tiles numbered down to its last date, the calendar plate small at the top left), the date bars below it on the counts axis. On "month" the tile "1" in every column lights amber and the twelve lit tiles fly down into the 1 bar, label "12 pages". On "short" the five short months' columns flash at their foot (hand tag "too short") and the seven "31" tiles fly down into the 31 bar, label "7 pages". Rows, 52 px: "P(1st) = 12/365" and "P(31st) = 7/365", with grey readouts "≈ 0.033" and "≈ 0.019". The bars relabel from pages to probability (÷ 365, heights kept). The test writes as a boxed sentence, 44 px: "Uniform? Does every value come from the same number of equally likely outcomes?" with a hand tag "count behind each bar". On "no" the box gets a red "no" for the date and a teal "yes" for the page beside the pad.

### 4. two dice: the same test
> The classic case is two fair dice, added. Make one die white and one red, so three then four is a different outcome from four then **three**. That gives thirty-six outcomes, and with independent fair dice they're all equally likely. If you only list the twenty-one unordered pairs, they aren't equally likely, because a double happens one way and a mixed pair two ways. A sum of twelve needs six and six, just one **outcome**. A sum of seven runs along this whole diagonal, six **outcomes**. So seven is six times as likely as twelve. The outcomes are uniform, but the sum is **not**.

Visual: clear change to the `OutcomeGrid` (620 × 620 px) at the left: the white die (`biology/m5x-die-v1.png`, 220 px) above the columns, the red die (`ma12-die-red-v1`, 220 px) beside the rows, a 6 × 6 grid of ordered pairs. Empty two-dice axes x 2 to 12 (y 0 to 0.2) solid at the right. On "three" the cells (3, 4) and (4, 3) ring separately, hand tag "different outcomes". On the unordered-pairs sentence a red slip "21 unordered pairs, equally likely" writes and is crossed, caption "(3, 3) is one cell; (3, 4) is two". Every cell carries a grey "1/36". On "outcome" the corner cell (6, 6) lights amber, label "sum 12: 1 outcome". On "outcomes" the sum-7 diagonal lights, label "sum 7: 6 outcomes". Then all eleven diagonals tint in turn and slide off the grid into the eleven teal bars (1/36 up to 6/36 and back). The test box from scene 3 returns small and ticks "no" for the sum. On "not" two hand tags: "outcomes: uniform" over the grid, "sum: not uniform" over the bars.

### 5. using the uniform model: count the values
> Once a variable really is uniform, every value carries one over n, so any probability is just a count. Count the values you want, and divide by n. For a random digit, P of X at least seven counts seven, eight and nine, so it's three **tenths**. Be careful counting n. Suppose X is uniform on the whole numbers from five to twenty. Twenty minus five is fifteen, but that misses one. Both ends count, so there are sixteen **values**. Then P of X greater than sixteen counts seventeen, eighteen, nineteen and twenty, which is four sixteenths, or one **quarter**.

Visual: clear change to the g01 board. Equation strip, 44 px: "Uniform: P(event) = (number of values in it) ÷ n". Left: digit bars x 0 to 9, each 1/10, solid from the first frame; on "tenths" the bars 7, 8, 9 light amber and "P(X ≥ 7) = 3/10" writes at 52 px. Then the task strip "X is uniform on the whole numbers 5 to 20. Find P(X > 16)." and givens card "values 5, 6, ..., 20" replace the digits; a number line 4 to 21 with sixteen ink dots at 5 to 20. On "fifteen" a red slip "20 − 5 = 15 values" writes and is crossed, caption "misses one end". On "values" the dots count up 1 to 16 as they glow, row "n = 20 − 5 + 1 = 16", hand tag "both ends count". On "quarter" the dots 17 to 20 glow amber and the green-framed answer "P(X > 16) = 4/16 = 1/4" lands.

### 6. the count, not the size
> Two more checks. Say X is uniform on five, ten, fifteen, twenty and twenty-five. P of fifteen is one fifth, because there are five values. It has nothing to do with fifteen being in the middle, or adding up the values. That kind of reasoning would make twenty-five more likely than five, and in a uniform model every value is equally **likely**. And you can work backwards. If every value has probability zero point zero four, then n is one over zero point zero four, which is twenty-five values. But a probability of zero point three can't be uniform, because one over zero point three isn't a whole **number**.

Visual: camera continue (the number line dims). Five teal bars at 5, 10, 15, 20, 25, each 1/5; row "P(15) = 1/5" with hand tag "5 values". On "likely" a dashed red ghost set whose heights grow with the values (5/75 to 25/75) rises behind the teal bars, and the slip "P(15) = 15/75, out of a total of 75" writes and is crossed (caption "uses the sizes; P(25) would be 25/75"), hand tag "sizes don't matter". On the working-back sentences: "1/n = 0.04, so n = 1/0.04 = 25" with "25 × 0.04 = 1" ticked in a green frame; on "number" "1/0.3 = 10/3, not a whole number: no uniform model" with a red cross.

### 7. why finitely many
> One last condition: finitely many values. Watch what happens as the number of equal values **grows**. Six values, twelve, twenty-four, forty-eight. Each bar is one over n, so the bars get shorter and **shorter**. Now try infinitely many values, all with the same probability. If that probability is zero, the total is zero. If it's anything bigger than zero, the total passes one once there are enough values. Either way it can't be **one**. That's why a uniform distribution needs finitely many values.

Visual: clear change. Equal teal bars for n = 6 on y 0 to 0.2, 1,200 × 520 px; on "grows" they split into 12, 24, then 48 narrower bars (`ProbabilityBars` runs), labels "n = 6: 1/6", "n = 12: 1/12", "n = 24: 1/24", "n = 48: 1/48", the `StackedTotalBar` below always exactly 1 (readout "total = 1"). On "shorter" a readout "1/n → 0", hand tag "1/n → 0". On the infinite sentences a two-row panel: "c = 0: total 0" and "c > 0: total passes 1 after more than 1/c values" (a bar of pieces of length c growing past a dashed line at 1, red beyond it). On "one" both rows cross, hand tag "no uniform model on infinitely many values".

### 8. memory aid
> Here's a way to remember the test. Same count behind every bar. Look behind each value of X, and count the equally likely outcomes there. If every count is the same, X is uniform. The calendar's dates fail this test, and so do the sums of two dice.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line, hand font 60 px: "Same count behind every bar." Key, 40 px: "Count the equally likely outcomes behind each value." Two badges at the left: the calendar with its short 31 bar ("7 pages, not 12") and the grid with the 7 diagonal and the 12 corner. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. X is uniformly distributed on the even numbers from two to twenty. Find P of X greater than fifteen. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "X is uniformly distributed on the even numbers 2, 4, 6, ..., 20. Find P(X > 15)." Picture slot: a coded number line from 0 to 22 with integer ticks and no dots or highlights. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The values are two, four, six, up to twenty, which is ten values, so each has probability one **tenth**. Greater than fifteen means sixteen, eighteen or twenty, three values. So P of X greater than fifteen is three **tenths**. Three twentieths is wrong. Twenty is the largest value, not the number of **values**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "even numbers 2 to 20", "X > 15". "even numbers 2, 4, 6, ..., 20" underlined in the card. On "tenth" ten dots at 2 to 20 on the card's number line count up to 10, row (52 px) "n = 10, P(x) = 1/10". The dots 16, 18, 20 glow amber; on "tenths" the green-framed "P(X > 15) = 3/10". On "values" a red slip "3/20" writes and is crossed, caption "20 is the largest value; n = 10". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A fair spinner with eight equal sectors, numbered one to eight, is spun once. X is the remainder when the number is divided by three. Is X uniformly distributed? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A fair spinner has eight equal sectors numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify your answer." Picture slot: the painted spinner (`ma12-spinner-base-v1` with `ma12-spinner-pointer-v1`, 320 px) with eight equal coded sectors numbered 1 to 8, all one colour. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no remainders, no grouping).

### 12. feedback 2 (brief)
> X can be zero, one or **two**. Count the sectors behind each value. Remainder zero has two sectors, and remainders one and two have three sectors **each**. So the probabilities are two eighths, three eighths and three eighths, and X isn't uniform. Saying it's uniform because the spinner is fair is wrong. Fair sectors don't make a fair **variable**.

Visual: the card shrinks to the top. `GivensStrip`: "8 equal sectors", "remainder on dividing by 3". "eight equal sectors" and "divided by 3" underlined. On "two" the values row 0, 1, 2. The spinner's sectors tint by remainder (0 grey: 3, 6; 1 amber: 1, 4, 7; 2 teal: 2, 5, 8); on "each" the sectors' numbers slide into three stacks (`OutcomeSort`: 2, 3, 3) and become bars 2/8, 3/8, 3/8. Green-framed "P(0) = 2/8, P(1) = 3/8, P(2) = 3/8: not uniform". On "variable" a red slip "Uniform, because the spinner is fair" writes and is crossed, caption "equal sectors, unequal counts". Hold about 1 s.

### 13. handoff
> So a distribution is uniform when every value has the same count of equally likely outcomes behind it, and then each value has probability one over n. Next, a new question. Here's the fair die again. If these bars were weights on a beam, where would it **balance**?

Visual: the memory line shows small at the top, then fades on "Next". Board clears to one graph: the fair die's six teal bars at 1/6 on x 1 to 6 (1,100 × 560 px), the die plate (300 px) above. On "balance" an amber balance triangle appears under the x axis and slides from 1 towards 6 and back without settling, then stops under a "?" chip at no particular value. Chip "Next: where does a distribution balance?". No value 3.5 shown or spoken. Hold about 2 s. This is s03's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Uniform: finitely many values, all with the same probability.
- n values: nc = 1, so P(x) = 1/n.
- Test: the same count of equally likely outcomes behind every value.
- Fair equipment can still give a non-uniform X (dates, dice sums).
- If uniform: P(event) = values counted ÷ n. 5 to 20 has 16 values.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Same count behind every bar.* Key: *Count the equally likely outcomes behind each value.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 13's frame exactly (the die's six equal bars, the balance triangle under "?", chip "Next: where does a distribution balance?"). This is the final frame and s03's opening frame.

## Teaching checks

- **Does it explain causes?** Why the date isn't uniform: the dates sit on 12, 11 or 7 equally likely pages (1, 3). Why 1/n: n equal probabilities must add to 1 (2). Why the sum isn't uniform: each sum collects a different number of the 36 equally likely outcomes (4). Why (3, 4) and (4, 3) are separate: the dice are different (4). Why a probability becomes a count: each value carries the same 1/n (5). Why 20 − 5 is one short: both ends count (5). Why the sizes don't matter: uniform means equal bars (6). Why 0.3 can't be uniform: n would not be whole (6). Why finitely many: infinitely many equal values total 0 or pass 1 (7).
- **Misconceptions addressed:** "random means uniform" (1, 3, 4; feedback 2 crossed); "(3, 4) and (4, 3) are the same" (4); "n = 20 − 5" (5, crossed); "probability depends on the size of the value" (6, crossed); "uniform on all whole numbers" (7); "n is the largest value" (feedback 1 crossed).
- **Visual standard, item by item:** 1 the painted calendar from the first frame, flipping live, returning in 3, 8 and the notes; 2 a new stage every 25 to 60 s; 3 `CalendarFlip` with live page counts, the grid sliding into bars, the splitting bars with a fixed total; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 board (5), framed answers and crossed slips; 8 framed card and five short bullets; 9 the 31st's bar stopping at 7, and the sevens' diagonal sliding into a bar six times the twelve's.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible and a picture each, 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 26 s.
- **Avoided double teaching:** s01's distribution, checks and generating method are used, not re-taught; Year 11's two-dice table is drawn as the cause.
- **Syllabus coverage:** `ci6ab13b73`: define (2, 7; key notes 1, 2), use to model equally likely outcomes (5, 6; A1; key note 5), and recognise when the model does not apply (1, 3, 4; A2; key notes 3, 4).
- **Out of scope by design:** expectation (s03); conditional probability; the continuous uniform model (s07).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "X is uniformly distributed on the even numbers 2, 4, 6, ..., 20. Find P(X > 15)."
Model answer: the values 2, 4, ..., 20 are 10 values, each with probability 1/10. X > 15 for 16, 18 and 20, so P(X > 15) = 3/10. Classic mistake (crossed): "3/20".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A fair spinner has eight equal sectors numbered 1 to 8. It is spun once. Let X be the remainder when the number shown is divided by 3. Is X uniformly distributed? Justify your answer."
Model answer: X takes the values 0, 1, 2. Remainder 0 from 3 and 6 (2 sectors), remainder 1 from 1, 4, 7 (3 sectors), remainder 2 from 2, 5, 8 (3 sectors). The sectors are equally likely, so P(0) = 2/8, P(1) = 3/8, P(2) = 3/8. The values do not all have the same probability, so X is not uniformly distributed. Classic mistake (crossed): "Yes, because the spinner is fair".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Calendar (non-leap year) | 365 pages, each 1/365; pages per date 12 (1 to 28), 11 (29, 30), 7 (31); P(1st) = 12/365 ≈ 0.033; P(31st) = 7/365 ≈ 0.019 | 1, 2, 3, 8 |
| One die | n = 6, P(x) = 1/6 | 2, 13 |
| Digit | n = 10, P(x) = 1/10; P(X ≥ 7) = 3/10 | 2, 5 |
| Two dice | 36 ordered outcomes; sums 2 to 12 with 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 outcomes; P(7) = 6/36, P(12) = 1/36 | 4, 8 |
| 5 to 20 | n = 16; P(X > 16) = 4/16 = 1/4 | 5 |
| 5, 10, ..., 25 | P(15) = 1/5; crossed method 15/75 (fails for 25/75 = 1/3) | 6 |
| Working back | 0.04 gives n = 25; 0.3 gives 10/3 (none) | 6 |
| Shrinking bars | n = 6, 12, 24, 48: 1/6, 1/12, 1/24, 1/48 | 7 |
| A1 | n = 10; P(X > 15) = 3/10; crossed 3/20 | 9, 10 |
| A2 | remainders 0, 1, 2 with 2, 3, 3 sectors; 2/8, 3/8, 3/8 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (`calendar`, `fractions`; 7 Nov, scratchpad `sims.py`); Codex to re-check.

- Calendar 2027: pages per day of month: 1 to 28: 12; 29: 11; 30: 11; 31: 7; total 365. 12/365 = 0.03288; 7/365 = 0.01918; 7/12 = 0.583.
- Two dice sums over 36 ordered pairs: 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:5, 9:4, 10:3, 11:2, 12:1.
- Digits 0 to 9: P(X ≥ 7) = 3/10. Integers 5 to 20: 16 values; X > 16: 4 values; 1/4.
- 1/0.04 = 25; 1/0.3 = 10/3. 15/75 = 1/5 (coincidence); 25/75 = 1/3.
- A1: 10 values; 3/10. A2: k mod 3 for k = 1 to 8: 1, 2, 0, 1, 2, 0, 1, 2; counts 0:2, 1:3, 2:3.

## Memory aid check

- **"Same count behind every bar."** Original. Meaning, as said in scene 8: for each value of X, count the equally likely outcomes that give it; X is uniform exactly when every count is the same. Assumptions checked: the underlying outcomes must be equally likely (the key line says so; with unequal outcomes the probabilities must be compared directly); each outcome gives one value of X (s01's "one trial, one value"); finitely many values (scene 7). It helps a new case: the spinner remainder (A2) is judged by counting sectors. Introduced after the cause (1, 3) and the test (3, 4).
- **Considered, not used:** "Random isn't uniform" as the aid (true but gives no method; it stays in key note 4).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,602 characters**, 14 scene headings (Revision 2: 5,267 by script, below the floor; it stated 5,267). Characters per scene (1 to 14): 616, 659, 569, 568, 547, 604, 491, 248, 133, 300, 193, 338, 261, 75.

At 13.3 characters per second the speech before the notes is about 416 s. Holds: the 3 s prediction hold (1), two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 17 s of settling for the calendar flip (1, about 5 s), the tiles flying into bars (3), the diagonal slide (4), the dot count (5) and the splitting bars (7); the key-notes scene is 45 s (1,350 frames). Total **about 507 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 63 s spare.

Reserve trims if the voiced take runs long: scene 4's unordered-pairs sentence (keep the crossed slip silent); scene 2's digit sentence (keep the re-divided bar). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s02` (route math-a12-s02). Explainer folder `src/explainer/lessons/math-a12-s02`; build inputs in `docs/production/claude-pm/lessons/math-a12-s02/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-calendar, uniform-and-one-over-n, count-test-calendar, two-dice-grid, count-the-values, count-not-size, finitely-many, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 54 s | 1 | The calendar flipping through a year into the date bars |
| 54 to 106 s | 2 | Equal pieces filling one bar: 1/n |
| 106 to 152 s | 3 | The year strip: the pages behind each date |
| 152 to 197 s | 4 | The two-dice grid sliding into the sum bars |
| 197 to 286 s | 5 to 6 | g01 board: counting values; the size ghost and working back |
| 286 to 325 s | 7 | Bars splitting towards 0 with the total fixed at 1 |
| 325 to 345 s | 8 | Framed memory card |
| 345 to 440 s | 9 to 12 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 440 to 462 s | 13 | The die on its beam (s03 opening frame) |
| 462 to 507 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s01's last frame continues into scene 1 (camera continue; the calendar grows); 1 to 2 camera continue (the die card grows); 2 to 3 clear change (the year strip); 3 to 4 clear change (the grid); 4 to 5 clear change; 5 to 6 camera continue; 6 to 7 clear change; 7 to 8 clear change to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: scene 1 prediction (3 s, no ring); attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s02-rev3-learning-review.md`, `science_check` = `checks/m-a12s02-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/m5x-die-v1.png` (white die, three-quarter view) is reused as the white die of the grid and in the handoff. No red die, calendar or spinner exists in any course.

Reused: `biology/m5x-die-v1.png`. From s01's asset brief: `ma12-desk-calendar-v1`, `ma12-spinner-base-v1`, `ma12-spinner-pointer-v1`.

Need (painted, new; see the Codex asset brief): `ma12-die-red-v1.png`.

Coded (studio kit): the dates on the calendar page, the year strip of page tiles, bars, the grid, number lines, tables, readouts, spinner sectors, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: the s01 additions (`ProbabilityBars`, `StackedTotalBar` equal mode, `OutcomeSort`, `DistributionTable`, spinner sectors) and the studio's `LiveReadoutBoard`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions:
1. **`CalendarFlip`**: a plate with a coded value written on its page rectangle (from the plate's sidecar), pages flying off in a timed sequence driven by a stored list of dates (all 365 dates of 2027), a month readout, and a linked `ProbabilityBars` that adds one per page. Check: at every frame each bar equals the number of pages shown so far with that date; the final bars are 12, 11 and 7.
2. **`YearStrip`**: 12 month columns of small page tiles with a tile-to-bar flight for a chosen date. Check: the flown tiles for date d equal the number of months with at least d days.
3. **`OutcomeGrid`**: an r × c grid of ordered outcomes with die headers, per-cell probability tags, ringing, value groups that tint and slide into a linked `ProbabilityBars`. Check: sum groups 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1.
4. **`ProbabilityBars` dot mode and changing-n runs**: values as dots on a number line with a counting animation; bar sets splitting as n doubles with a linked total bar fixed at 1; the growing-total row past a dashed line at 1.

## Codex asset brief (Maths A12 S02, a desk calendar and two dice)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s02.md`, draft route entry math-a12-s02. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched to `biology/m5x-die-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-die-red-v1.png` (2048 × 2048 px): the same die as `biology/m5x-die-v1.png` (same size, viewpoint, rounded edges and lighting) but red with white pips, and with pips on every visible face, including the top face (the top shows 1, the left 2 and the right 3, as on a real die). It sits beside the white die as "the red die", so the two must read as a matched pair.
2. The desk calendar and the spinner are briefed in `math-a12-s01.md` (`ma12-desk-calendar-v1`, `ma12-spinner-base-v1`, `ma12-spinner-pointer-v1`); paint them once for both lessons.

Report inspection on the paper background (`#f6f1e7`) at 220 px and 600 px, side by side with `biology/m5x-die-v1.png`, plus the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the calendar claims (365 pages; 12, 11 and 7 pages per date; the five months without a 31st) and that the narration says "a whole year" and the screen a non-leap year.
3. Confirm the derivation nc = 1, c = 1/n, and that "finitely many" is stated with every definition (scene 2, key note 1).
4. Confirm the scope of every learner-visible general claim: the count test assumes equally likely outcomes (scene 3's box and the memory key); "random is not uniform" is said of a variable, never as "random is never uniform".
5. Confirm the scene 6 slip is crossed for its method, with the 25/75 counterexample shown.
6. Confirm scene 7's argument (c = 0 gives 0; c > 0 passes 1 after more than 1/c values).
7. Confirm both attempt questions carry every demand and condition, each card has its picture, and neither card shows n, the values, the remainders or a verdict.
8. Confirm the opening frame equals s01 Revision 3's scene 13 and the closing frame (scene 13) equals s03's opening.
9. Confirm the syllabus quote matches the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: The Discrete Uniform Distribution: When Is Every Value Equally Likely? | Year 12 Maths Advanced

(Title length: 96 characters; shorter alternative: "When Is a Distribution Uniform? | Year 12 Maths Advanced", 56 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson06.sa.html

Tear a page at random off a calendar: every page is equally likely, but is every date? Flip through a whole year and watch the 31st fall behind. Define a uniform distribution (finitely many values, all equally likely) and see why the shared probability must be 1/n. Learn the test, count the equally likely outcomes behind each value, and use it on the calendar and on the sum of two dice. Then model with a uniform variable by counting values, including an inclusive range, and see why there can't be a uniform distribution on infinitely many values. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Discrete probability distributions from data and models (previous video). Next: Expected value and variance.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. STATISTICS dropped (root).** Revision 3 replaces site problem 2 (the letters of STATISTICS) with the calendar, which makes the same point with a picture and a live count. The site example is unchanged on the site; it can return in the strand practice video.
- **2. Site trap 02 coincidence (root, site log).** As in Revision 2: log it as a site correction (use p(25)).
- **3. Route entry (root).** The draft route entry in Decisions is a provisional input.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s01 and Year 11 equally likely outcomes; check that the calendar flip makes "every page equal, the date isn't" visible before any definition; that the month columns are the cause of the 12, 11 and 7; that the test is stated before the dice; that the fence-post count is visible; that the 15/75 crossing is about the method; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The calendar flip, the tile flights, the diagonal slide and the splitting bars carry the explanation; judge them at playback speed in the voiced preview, not from stills.

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 2 says "chosen with equal chances"; scene 3 says "independent fair dice"; feedback 2's repeated sector listing cut (root decision 54). Narration then 5,267 characters, below the 5,500 floor.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the definition, the site's two dice and counting examples, both attempts, the memory aid and the s03 handoff are unchanged.

- **Anchor and why:** a tear-off desk calendar: every page equally likely, the date not (12, 11 or 7 pages). It is the lesson's whole idea in an everyday object, with no science or gambling, and it replaces the STATISTICS letters.
- **Simulations:** `CalendarFlip` (a whole year of pages flying off while the date bars grow live, the 31st stopping at 7); `YearStrip` tiles flying into bars; `OutcomeGrid` diagonals sliding into the two-dice bars; bars splitting as n doubles with the total fixed at 1.
- **Colour roles:** outcomes ink with grey probability tags; the variable's bars teal; values counted or asked about amber; answer green; mistake red.
- **Plates:** reused `biology/m5x-die-v1.png`; from s01's brief `ma12-desk-calendar-v1`, `ma12-spinner-base-v1`, `ma12-spinner-pointer-v1`; new `ma12-die-red-v1` (brief above).
- **Narration changes (not voiced):** scene 1 rewritten around the calendar; scene 2 adds the page as a uniform example; scene 3 is new (the calendar's count test); scene 4 is the two dice (Revision 2's scene 3, shortened); scene 8 adds a closing sentence; feedback 2 unchanged. The STATISTICS scene is removed.
- **Counts:** 5,267 → 5,602 characters (now inside the band); about 506 s with the old 60 s notes hold → about 507 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s01 Revision 3's die and calendar frame; ends on the die's balance frame, unchanged, which s03 opens on.
- **Kit additions:** `CalendarFlip`, `YearStrip`, `OutcomeGrid`, and dot and changing-n modes for `ProbabilityBars`.
