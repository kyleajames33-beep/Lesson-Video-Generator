# math-s12-a04: Where is the break-even point, and what does it say about profit and loss?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci7ff6c8c4` (Simultaneous linear equations): Use simultaneous equations to model and analyse the break-even point where cost and revenue are represented by linear equations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `ciaa0d09e2` (Simultaneous linear equations): Identify the break-even point and solve problems involving profit and loss using a spreadsheet [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1 (Year 12, Algebraic relationships):

- `cic9643bd9` (Simultaneous linear equations): Use simultaneous equations to model and analyse the break-even point of a problem where cost and revenue are represented by linear equations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: covered (Standard 2 lesson).
- `ci8b3fb7f8` (Simultaneous linear equations): Identify the break-even point and solve problems involving profit and loss by using a spreadsheet to model the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs.

**Course:** Standard 1 and Standard 2. Standard 1 reaches break-even by the graph and the spreadsheet; Standard 2 also solves C = R by algebra. The Standard 1 wording adds "to model the problem": the learner builds the spreadsheet, not only reads one.

**Entry knowledge:** math-s12-a03 (two facts become two equations; interpreting a crossing). math-s11-l03: `cib2d6c0df` (a linear model's intercept as a starting value and gradient as a rate, here fixed cost and cost per item). math-s11-m01: `cib256693a` (profit and loss). math-s11-f08: `ciffbbbd58` (spreadsheet formulas) and math-s11-l05: `ci80b8ed46` (a linear model in a spreadsheet).

**Prior video:** math-s12-a03.

**Start:** A small business's two lines, cost and revenue, on a03's graph style; name fixed cost (where cost starts), variable cost (its gradient) and revenue (starts at zero).

**Stop:** Write C = fixed + variable × n and R = price × n; the break-even point is where C = R (profit zero), found from the graph, by algebra (Standard 2) and in a spreadsheet; profit = R − C is negative (a loss) below break-even and positive above it; when the break-even quantity is not a whole number, round up to the first whole number that makes a profit; find the profit or loss at a given quantity. Build a spreadsheet with columns for n, cost, revenue and profit, and read the row where profit changes sign. Non-linear profit (a parabola with two break-even points) is a11.

**Next:** math-s12-a05.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `779d05e6c788c6a7e3bdb540129e1209467a8d4f143da218463f9865f601691f`. Title: Modelling with Simultaneous Equations & Break-Even Analysis. Lesson id maths-std-y12-algrel-l02.

Older page format: no `data-step-id` sections. Cards used here: hook and 01 Recall (food stall), 02 The key idea (break-even paragraph), 04 Key terms (fixed cost, variable cost, revenue, total cost, break-even point, profit or loss), 06 Break-Even Analysis, 07 Using a Spreadsheet to Find the Break-Even Point, `we-2`, `we-3`, quick-fire drills 1 and 2, 08 Revisit, SA 2 and SA 3.

### Source lesson02, card 06 (food stall example)

"Fixed cost $F = \$400$, variable cost $v = \$2$/item, selling price $p = \$8$/item. Cost: $C = 400 + 2n$ Revenue: $R = 8n$. Break-even: $8n = 400 + 2n \Rightarrow 6n = 400 \Rightarrow n = 66.\overline{6}$. Since items are whole, the stall must sell 67 items to first exceed costs." Profit: "$P = R - C = (p - v)n - F$". Revisit card: "break-even is driven by the gap between selling price and variable cost ($8 - \$2 = \$6$ per item). The fixed cost is recovered at a rate of $\$6$ per item". (See section 8 for two site corrections in this example.)

### Source lesson02, `we-2`

PROBLEM 2 · BREAK-EVEN ANALYSIS. "A market stall has fixed costs of $\$180$/day and spends $\$4$ per item on materials. Items are sold for $10 each. Find (a) the break-even quantity and (b) the profit if 50 items are sold." $C = 180 + 4n$, $R = 10n$; $180 = 6n$, $n = 30$ items ("cost = revenue = $300"); at 50: $R = \$500$, $C = \$380$, profit $\$120$.

### Source lesson02, card 07 and `we-3` (spreadsheet)

Card 07: Column A units $n$; Column B total cost "=F + v*A2"; Column C revenue "=p*A2"; Column D profit "=C2-B2"; "the break-even is where D changes sign". `we-3`: "at $n = 80$, cost = $\$1,040$, revenue = $\$960$; at $n = 90$, cost = $\$1,070$, revenue = $\$1,080$ ... $C = 800 + 3n$ ... $R = 12n$." Break-even $n = 88.\overline{8}$; at 88 cost 1064 and revenue 1056 (a loss); at 89 cost 1067 and revenue 1068 (first profit). "That is what a spreadsheet gives you: a bracket."

### Source lesson02, drills and short answers

Drill 1 ($C = 250 + 3n$, $R = 8n$: 50 items). Drill 2 (parking: $C = 500 + 0.5n$, $R = 6n$: $90.\overline{9}$, so 91 cars). SA 2 (craft: $C = 600 + 12n$, $R = 30n$: $33.\overline{3}$, so 34 items; profit at 45 is $\$210$). SA 3 (food van spreadsheet rows at 40, 60, 70; $C = 400 + 5n$, $R = 11n$: $66.\overline{6}$, so 67; at 67 profit $\$2$).

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- Food stall: n = 200/3 ≈ 66.67, first profit at 67. Revenue at exact break-even 8 × 200/3 ≈ $533.33. At 67 items: cost $534, revenue $536, profit $2. Without the $2 variable cost (the hook's wording), break-even would be 400/8 = 50.
- `we-2`: n = 30, both $300; profit at 50 = $120.
- `we-3`: n = 800/9 ≈ 88.89, first profit at 89; rows (80, 1040, 960), (88, 1064, 1056), (89, 1067, 1068), (90, 1070, 1080) all reproduce.
- Drill 1: 50. Drill 2: 1000/11 ≈ 90.91, so 91. SA 2: 100/3, so 34; profit at 45 = $210. SA 3: 200/3, so 67; rows (40, 600, 440), (60, 700, 660), (70, 750, 770), (67, 735, 737).

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All the site's worked answers match, except the food stall's "dollar value" label (section 8). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Rounding a break-even of 66.7 down to 66 (still a loss).
- Calling the revenue at the first profitable whole number "the break-even dollar value".
- Forgetting the fixed cost in the cost equation, or putting it into revenue.
- Reading profit as revenue.
- In a spreadsheet, stating a table row as the exact break-even when the table only brackets it.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Cost and revenue lines on one graph with a vertical rider on both (`LinkedRiders`); the gap between them shades grey ("loss") to the left of the crossing and teal ("profit") to the right; a `LiveReadoutBoard` shows n, cost, revenue and profit; `SignedBar` for profit around zero.
- The "$6 a time" idea: each extra item closes the gap by price minus variable cost, so the fixed cost is paid back in $6 steps (the site's own reasoning, revisit card).
- A coded spreadsheet with column letters, a formula bar showing "=180+4*A2", rows filling down, and the profit column cell turning from grey to teal at the sign change. This is the part Standard needs most and the kit does not yet have (see kit needs).
- Whole-number rounding shown on a short number line: 66 (loss), 66.67 (break-even), 67 (first profit).

Advanced reuse (visual parts only): math-a11-w13 (designed, not built) specifies the cost and revenue rider, the shaded loss and profit regions, `LiveReadoutBoard` and the `SignedBar` profit counter. Reuse those parts; the w13 lemonade stall anchor and script are not reused (ruling 7). `FrequencyTable` (a11-data-parts.tsx) already draws a spreadsheet-style table with column letters and a formula bar, but only for frequency columns. No simulation fits. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

Mia runs a lawn-mowing round on weekends. Her fixed costs are $150 a week (trailer, insurance and phone). Fuel and trimmer line cost $6 for each lawn, and she charges $45 a lawn. (a) Write equations for her weekly cost C and revenue R for n lawns. (b) How many lawns must she mow in a week to make a profit? (c) Find her profit for a week with 10 lawns.

**Worked answer:** (a) C = 150 + 6n and R = 45n. (b) 45n = 150 + 6n gives 39n = 150, n ≈ 3.85, so she needs 4 lawns (3 lawns is a loss of $33; 4 lawns is a profit of $6). (c) R = 450, C = 210, profit $240.

### Question 2

A school formal costs $6,500 for the venue and DJ, plus $85 a guest for catering. Tickets cost $135 each. Part of the committee's spreadsheet is shown.

| A: tickets n | B: cost ($) | C: revenue ($) |
| --- | --- | --- |
| 100 | 15 000 | 13 500 |
| 120 | 16 700 | 16 200 |
| 140 | 18 400 | 18 900 |

(a) Between which two rows is the break-even point? (b) Write the formulas for cells B2 and C2. (c) Find the break-even number of tickets. (d) Find the profit if 150 tickets are sold.

**Worked answer:** (a) Between 120 and 140 (a loss at 120, a profit at 140). (b) B2: =6500+85*A2; C2: =135*A2. (c) 135n = 6500 + 85n gives 50n = 6500, n = 130 tickets. (d) R = 20 250, C = 19 250, profit $1,000.

Only the question and the table go on the card. Hide the answer, and do not shade the profit or loss rows, until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1: "3 lawns", crossed, "3.85 rounds up: 3 is still a loss"). Answers were checked with SymPy.

## 7. Everyday anchors

- A weekend lawn-mowing round: trailer and insurance as fixed costs, fuel per lawn as the variable cost (work; carries Question 1).
- A school formal: venue and DJ as the fixed cost, catering per guest, ticket price as revenue (events; carries Question 2).
- A mobile car-detailing van: van lease and insurance each week, cleaning products per car, a price per detail (cars).

Varied everyday contexts (work, events, cars). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "mowing round", "school formal" and "detailing" no hits; the w13 lemonade stall, w19 food truck and w17 hoodie fundraiser were avoided). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people. Prices are realistic NSW 2026 examples, not official rates.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. Two new errors in lesson02 are logged there (MS-04 and MS-05):

- The hook leaves out the $2 variable cost that the recall card and the revisit card use, so the hook's own question has a different answer (50, not 67).
- The food stall example labels $536 as the break-even dollar value. $536 is the revenue at 67 items, the first profit; the revenue at break-even is about $533.33.

Decisions for Claude:

- **Pace flag: at risk of rushing.** Break-even by graph and algebra, profit and loss either side, whole-number rounding and building a spreadsheet are a lot for one Standard video (a gentle version runs 10 to 12 minutes). Suggested split if the draft runs long: a04a "break-even and profit or loss" (graph, algebra, rounding up; we-2, food stall) and a04b "break-even in a spreadsheet" (building the columns, reading the sign change, checking against algebra; we-3, SA 3). Both splits would keep Standard 1 and Standard 2 codes, since each course has both points.
- Use the corrected food stall wording in any reuse: "break-even at about 66.7 items, so 67 items is the first profit (revenue $536, cost $534)".
- Keep "profit = (price − variable cost) × n − fixed cost" as an optional insight, not a formula to learn; Standard students do better with R − C.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
