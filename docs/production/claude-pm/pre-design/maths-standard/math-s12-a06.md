# math-s12-a06: How do we build an exponential model, and what does its starting value mean?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci649c035d` (Exponential relationships): Construct and analyse an exponential model of the form y = ka^x and y = ka^(-x), where a > 0 and k is a constant, to solve practical growth or decay problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. The official wording contains MathML; quote it from `sourceHtml`.
- `ci7d79f487` (Exponential relationships): Interpret the meaning of the intercept of an exponential graph in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1: no matching point (Standard 1 constructs exponential graphs from tables for predictions, owned by a05, and judges models, owned by a07).

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a05 (constant ratio; graphs of a^x and a^(−x); y-intercept 1 for a^x). math-s11-m01: `cib256693a` (percentage increase and decrease: a 3% rise multiplies by 1.03, an 18% fall multiplies by 0.82). math-s11-f01: `ci7f303375` (substitution with a calculator power key).

**Prior video:** math-s12-a05.

**Start:** a05's y = 2^x always started at 1. Real things start somewhere else: a price, a rent, a car's value. Multiply the whole curve by that starting amount.

**Stop:** Build y = k a^x from a story: k is the starting amount (the value at x = 0, the vertical intercept) and a is the multiplier for each step (1 + r for growth by r, 1 − r for decay by r); recognise decay written either as k a^x with 0 < a < 1 or as k a^(−x) with a > 1; use the model to predict with a calculator and round as the context needs; interpret the intercept in words with units. Limitations of exponential models are a07. Compound interest and declining-balance depreciation formulas are taught later in the investment strand (math-s12-i02, i03 and i10); this video only uses the general model.

**Next:** math-s12-a07.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f8c86393c1deaadd77ae8585d6c8d8473dad655d6c287e794bdf184991d21b60`. Title: Exponential Relationships. Lesson id maths-std-y12-algrel-l03.

Older page format: no `data-step-id` sections. Cards used here: 02 The key formula ("$A$ = initial value"), 04 Key terms (growth factor, initial value, exponential decay), 07 Exponential Models (construction and the percentage rule), `we-2`, `we-3` parts (a) and (b), the match items, the fill-the-blanks item and SA 1. The limitation parts belong to a07.

### Source lesson03, card 07

"Identify the initial value $A$ (the quantity at $x = 0$ ...) Identify the growth or decay factor $b$ per period (e.g. doubles each hour → $b = 2$; reduces by 20% each year → $b = 0.8$ since $100\% - 20\% = 80\% = 0.8$)". "Interpreting the $y$-intercept: Substituting $x = 0$ gives $y = A$. In context, $A$ is the value of the quantity at the start ... Always state $A$ with its units and meaning." "Reducing by 15% per year gives $b = 0.85$".

### Source lesson03, `we-2`

PROBLEM 2 · CONSTRUCTING AND USING A MODEL. "A city's population is 250,000 and grows at 3% per year. (a) Write an exponential model for the population $P$ after $t$ years. (b) Interpret the $y$-intercept. (c) Predict the population after 20 years (to the nearest thousand)." $b = 1.03$; $P = 250\,000 \times 1.03^t$; at $t = 0$, 250,000 people, "the population at the start of the observation period"; $P = 250\,000 \times 1.03^{20} \approx 451\,528$, so $\approx 452\,000$.

### Source lesson03, `we-3`

PROBLEM 3 · DECAY MODEL. "A car is purchased for $\$24,000$ and depreciates by 18% per year. (a) Write the decay model. (b) Find its value after 5 years." $b = 0.82$; $V = 24\,000 \times 0.82^t$; site answer "$\approx \$8{,}897$" (should be $8,898; see section 8).

### Source lesson03, practice items

Match: "Bacteria start at 200, triple each hour" ($200 \times 3^x$); "Investment of $5000, grows 4% per year" ($5000 \times 1.04^x$); "Drug concentration halves every 6 hours" ($A \times 0.5^x$ per 6-hour period); "Town population of 8000, shrinks 5% per year" ($8000 \times 0.95^x$). Fill: 10% decay from 500 g gives $b = 0.9$ and $y = 500 \times 0.9^x$. SA 1: antique values 1000, 1200, 1440, 1728 (ratio 1.2; $y = 1000 \times 1.2^x$; after 6 years $\approx \$2{,}986$).

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- `we-2`: 250 000 × 1.03^20 = 451 527.81, so 451 528 and 452 000 to the nearest thousand.
- `we-3`: 24 000 × 0.82^5 = 8 897.76, so $8,898 to the nearest dollar. The site's $8,897 comes from rounding 0.82^5 to 0.3707 first (24 000 × 0.3707 = 8 896.80).
- SA 1: ratios 6/5, 6/5, 6/5; 1000 × 1.2^6 = 2 985.98, so $2,986.
- Fill: b = 0.9. 15% decrease: b = 0.85.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match except `we-3` (b), logged as MS-06. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using 0.18 (the percentage lost) as the multiplier instead of 0.82 (the part kept).
- Using 1.3 for a 3% rise.
- Rounding the multiplier's power before multiplying (the site's own slip).
- Interpreting the intercept as "where the graph starts" without saying what and in what units.
- Thinking k a^(−x) with a = 1.25 is growth because 1.25 > 1.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- y = 2^x from a05 stretched upward so its intercept moves from 1 to k (the starting amount), with the multiplier unchanged; a `ParameterSlider` on k and a second on a.
- A "percentage to multiplier" strip: 100% + 3% = 103% = 1.03; 100% − 18% = 82% = 0.82, as two bars (kept part and lost part).
- A year-by-year ladder: start value, then × 0.82 each step, values written on the rungs, matching points on the graph.
- The intercept ringed on the vertical axis with a sentence chip ("at t = 0, the car is worth $24,000").
- Decay two ways: 0.8^x and 1.25^(−x) drawn on the same axes and landing on the same curve.

Advanced reuse (visual parts only): `FunctionSimulator` with `scaledFamily` or `EXP_BASE_FAMILY` (fn-sim.tsx), `ParameterSlider`, `ModelCard` (a11-function-parts.tsx) for "words into k and a", `GrowthBars` (working-parts.tsx) for the kept and lost bars. math-a11-e01 (designed, not built) covers y = k a^x graphs for Advanced; its trading-card anchor and script are not reused (ruling 7). No simulation is needed. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

The weekly rent for a unit is $620. It is expected to rise by 4% each year. (a) Write a model for the weekly rent R after t years in the form R = k a^t. (b) What does the value of k represent? (c) Predict the weekly rent in 5 years, to the nearest dollar.

**Worked answer:** (a) R = 620 × 1.04^t. (b) k = 620: the weekly rent now (at t = 0), in dollars. (c) 620 × 1.04^5 = 754.32, about $754 a week.

### Question 2

A gaming console bought for $750 loses 20% of its value each year. (a) Write a model for its value V after t years. (b) Find its value after 3 years. (c) Show that V = 750 × 1.25^(−t) gives the same value after 3 years.

**Worked answer:** (a) V = 750 × 0.8^t. (b) 750 × 0.8^3 = 750 × 0.512 = $384. (c) 1.25^(−3) = 1/1.953125 = 0.512, so 750 × 1.25^(−3) = $384 (the same, because 1/0.8 = 1.25).

Only the question goes on the card. Hide the answer and the multiplier until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "750 × 0.2^3 = $6", crossed, "keep 80%, not 20%"). Answers were checked with SymPy. Say once on screen that the 4% is an example, not a forecast.

## 7. Everyday anchors

- Renting: a unit's weekly rent rising by a fixed percentage each year (renting; carries Question 1).
- A gaming console's resale value falling by a fixed percentage each year (shopping and tech; carries Question 2).
- A streaming service's monthly price rising by a fixed percentage each year (phones and media).

Varied everyday contexts (renting, shopping, media). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "rent" as a word appears once, in a12-f04 as a different idea; "console" appears in c12 as a game console screen, not a value; "subscription" no hits and "streaming" appears only as phone data or battery use, not a price; trading cards, phones' resale values and followers were avoided because Advanced e01, e02, e06 and d19 use them). No other Standard pack uses them. Claude picks one; none is required. Anchors are drawn as objects, never people. Rent and prices are realistic NSW 2026 examples, not forecasts.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New errors in lesson03 logged there:

- MS-06: `we-3` (b) gives $8,897; 24 000 × 0.82^5 = 8 897.76, which is $8,898 to the nearest dollar.
- MS-07: `we-3` (c) note says "scraped"; it should be "scrapped".

Decisions for Claude:

- **Notation.** Use the syllabus's y = k a^x and y = k a^(−x) on screen (site: A b^x). Say once that k is the starting value.
- The site's city population (`we-2`) is the main worked example (its exact numbers). Population is a neutral context, not science. The car (`we-3`) gives the decay example with the corrected answer; it also previews depreciation in the investment strand, without its formula.
- The site's SA 2 (a drug in a hospital patient) and SA 3 (a bushfire) are not good Standard anchors (medication framing rules and a distressing context). Do not use them as worked examples.
- Pace: one growth and one decay model with the intercept fits 7 to 9 minutes. Not at risk if limitations stay in a07.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
