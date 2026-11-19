# math-s11-l06: What makes direct variation special, and how does one pair of values give k?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Direct variation):

- `cie0224c11`: Recognise that a direct variation relationship of the form y = kx produces a straight-line graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.
- `ci6f88d684`: Explain that a direct variation relationship of the form y = kx is a graph that passes through the origin with gradient k being the constant of variation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.
- `cic7837e3f`: Identify and represent direct variation of the form y = kx from descriptions of situations in which one quantity varies directly with another quantity [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.
- `ci04c5dcb2`: Evaluate k in equations of the form y = kx, given one pair of values for the variables, and use the resulting formula to find other values of the variables to solve problems in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-l03: `cib2d6c0df` (a linear model with a starting value and a rate). math-s11-l01: `ci94641a48` (gradient from a graph).

**Prior video:** math-s11-l05.

**Start:** Every l03 model had a starting amount. Some have none: the site's apples, "$4 per kilogram with no fixed fee". Zero kilograms costs zero.

**Stop:** y = kx: no fixed amount, so the line passes through the origin; k is the constant of variation, the gradient and the rate (output per one unit of input); y ÷ x = k for every point with x ≠ 0; doubling x doubles y; recognising direct variation from a description (no fee, starts at zero, "per", "varies directly") and from a table (constant ratio, and y = 0 at x = 0 if that row is shown); not every straight line is direct variation (y = 5x + 12); finding k from one pair and using y = kx to find other values in both directions. Graphing and reading y = kx is l07.

**Next:** math-s11-l07.

## 2. Site order, sections and worked examples

Read-only source: [linear-relationships/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson04.sa.html), SHA256 `10c21a1091b81c3b7abfafca29ee9324488313fb7d6d0ce4c11b34decf71e92f`. Direct Variation and Proportional Relationships. Sections: `recall-your-gut-answer`, `direct-variation-the-model`, `direct-variation-has-no`, `worked-examples-middot-3`, `common-errors-middot-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Card 02: "$k$ is the constant of variation it is the rate that links $y$ to $x$. Because there is no fixed starting amount, the graph must pass through the origin $(0,0)$. Every point on the graph has the same ratio $y/x = k$." "$y = 5x + 12$ is linear but NOT direct variation".
`we-1`: apples $4 per kg, $C = 4k$ (3.5 kg, $14; 7 kg, $28). **Uses k for the kilograms (MS-01): write $C = 4m$ with m the mass.**
`we-2`: "A car travels 180 km in 3 hours at a constant speed": $k = 180 \div 3 = 60$, $d = 60t$ (300 km at 5 h).
`we-3`: table (0, 0), (2, 9), (4, 18), (6, 27): ratios 4.5, $y = 4.5x$.
Trap 02: "A table need not print the zero row: for example, $(2,6)$ and $(4,12)$ are consistent with $y = 3x$ ... Constant differences alone do not establish direct variation." Trap 03: "Using $k = x/y$ instead of $k = y/x$". Drill: $F = 250c$ (flour per cake); $P = 28h$; $y = 7x + 3$ is not direct variation; (2, 14), (5, 35) give $y = 7x$. Q1 $P = 32h$; Q2 (3, 21), (5, 35), $k = 7$; Q3 $C = 10 + 4k$ is not direct variation (MS-01 letter clash again).

## 3. Recalculation

- `we-1` 14 and 28; `we-2` 60 and 300; `we-3` 4.5 three times, 18; quick check (3, 12), (6, 24) gives 4; drill 7 and 7; Q2 7 and 7; revisit 8, 16, 24; trap (2, 6), (4, 12) gives 3.
- New: lollies 350 g for $9.80 gives k = 0.028 dollars per gram ($28 a kilogram). Practice: cherries k = 30 ÷ 2.5 = 12; 4.2 kg costs $50.40; $45 buys 3.75 kg. Table A ratios 6, 6, 6; table B has 5 at x = 0.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Calling any straight line direct variation.
- k = x/y instead of y/x.
- Thinking a table must show (0, 0) to be direct variation, or that equal differences prove it.
- Using one letter for two things (the site's k for kilograms).
- Finding k and then not using it for the second part.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two lines side by side: C = 4m from the origin and C = 12 + 4m starting at 12; "double the mass" arrows double one cost but not the other.
- A ratio badge riding the line: y ÷ x stays 4.5 at every point.
- Description sort: four short descriptions drop into "direct variation" or "not" by the "no fixed amount?" test.
- One pair (2.5 kg, $30) becomes k = 12, then the formula answers two questions (cost for 4.2 kg; mass for $45).

Kit: `StudioPlot`; `FunctionRider` with a ratio readout (`LiveReadoutBoard`); `OutcomeSort` or `SubsetTest` for the description sort (check appearance); `ModelCard`; `WorkingBoard`. Advanced reuse (visual parts only): math-a11-w22 and its plates file `ma11-w22-plates-v1.json` (check which objects it holds).

## 6. Two original candidate practice questions

### Question 1

The cost of cherries at a farm gate varies directly with their mass. 2.5 kg cost $30. (a) Find the constant of variation and write the equation. (b) Find the cost of 4.2 kg. (c) What mass can be bought for $45?

**Worked answer:** (a) k = 30 ÷ 2.5 = 12; C = 12m (dollars, kg). (b) 12 × 4.2 = $50.40. (c) 45 ÷ 12 = 3.75 kg.

### Question 2

Which table shows direct variation? Give a reason, and write its equation.
Table A: (1, 6), (2, 12), (4, 24). Table B: (0, 5), (2, 9), (4, 13).

**Worked answer:** Table A: y ÷ x = 6 for every pair, so y = 6x. Table B is linear but has y = 5 when x = 0, so its line does not pass through the origin.

Only the question goes on the card. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "k = 2.5 ÷ 30", "output ÷ input"). Answers were checked with SymPy.

## 7. Everyday anchors

- Pick-and-mix lollies sold by weight with no bag fee (shopping).
- A rice cooker: cups of water vary directly with cups of rice, 1.5 to 1 (cooking).
- Farm-gate cherries by the kilogram (food; carries Question 1).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "pick-and-mix", "rice cooker" and "cherries" no hits; strawberries were avoided because math-a11-s02 uses them, flour because the r strand and math-a11-w15 use it). Objects only, never people. Prices are invented examples.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. MS-01 applies (k used for kilograms in `we-1`, the Q3 answer and a diagram label): keep the site's numbers, write m for the mass.

Decisions for Claude:

- **Four syllabus points, one idea.** Lead with "no starting amount, so through the origin"; every other point follows from it.
- **Year 12 needs:** math-s12-a12 recalls "a direct variation y = kx gives a straight line" and contrasts it with y = k/x; say "varies directly" in words so "varies inversely" has a partner.
- **Pace flag: watch.** Four points fit 7 to 9 minutes if the description sort stays quick.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
