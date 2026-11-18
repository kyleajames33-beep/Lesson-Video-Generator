# Site corrections: Mathematics Standard (Year 11 and Year 12)

Maths Standard start, 18 November 2026. Source: read-only clone `C:/Users/kygs/teaching-app-fix` of `kyleajames33-beep/Teaching-APP`, HEAD `5d74a627` (16 November 2026, 11:01 +1100), folder `subjects/maths-standard/`. No site file was changed. Section 1 lists confirmed errors in lesson copy or site data. Sections 2 and 3 list syllabus-alignment and structure findings for the owner. Worked examples were not recalculated across the site; only the values quoted here were checked.

## 1. Confirmed errors

### MS-01. The direct variation lesson uses k for kilograms

- Lesson: `year11/linear-relationships/lesson04.sa.html`, worked example `we-1`, the practice answer to Q3, and the diagram label `C = 12 + 4k`.
- Old text: "Apples cost $\$4$ per kilogram. Let $C$ be the cost in dollars for $k$ kilograms." Then "$C = 4k$", "The ratio cost/kilograms = $\$4$ for every purchase. This constant ratio is $k$ in the formula." and "Check: if $k = 3.5$ kg, then $C = 4(3.5) = \$14$." Q3 uses "$C = 10 + 4k$ ... when $k = 0$ kg".
- Correction: use another letter for the mass, for example "Let $C$ be the cost in dollars for $m$ kilograms", "$C = 4m$", "Check: if $m = 3.5$ kg, then $C = 4(3.5) = \$14$", and "$C = 10 + 4m$ ... when $m = 0$ kg". Keep $k$ only for the constant of variation ($k = 4$). Change the diagram label to `C = 12 + 4m`.
- Reason: the lesson and the syllabus point (`ci6f88d684`, `ci04c5dcb2`) use $k$ as the constant of variation in $y = kx$. In this example $k$ is both the constant (4) and the number of kilograms (3.5), so "This constant ratio is $k$" contradicts "$k = 3.5$ kg" two lines later.

### MS-02. A standard deviation answer is truncated, not rounded

- Lesson: `year11/data-analysis/lesson11.sa.html`, practice answers, SA 1 (b).
- Old text: "Mean = 23.5; SD ≈ 11.69"
- Correction: "Mean = 23.5; SD ≈ 11.70"
- Reason: for 8, 12, 15, 18, 20, 22, 25, 30, 35, 50 the population standard deviation is 11.698..., which rounds to 11.70 (two decimal places). The mean, median 21, Q1 = 15, Q3 = 30, range 42 and IQR 15 are correct.

### MS-03. The curriculum map drops the formula from a syllabus point

- File: `subjects/maths-standard/curriculum-map.json`, Formulas and equations lesson 4 ("Rearranging Formulas"), `dotpoints`.
- Old text: "Change the subject of linear and non-linear formulas limited to quadratics of the form to solve problems and make decisions about solutions in the context of the problem"
- Correction: "Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem"
- Reason: the official point `cib54d5e23` contains the formula as MathML, which was lost when the text was copied. Without it the dotpoint is not grammatical and hides the limit on the quadratic form.

## 2. Syllabus points the site does not teach (owner decision)

These are gaps, not copy errors. The videos for them would teach from the syllabus alone. The full list, with partial points, is `siteMissingOrPartial` in `programme/maths-standard-course-outline.json`.

- Blood alcohol content and medication dosage (`ci9f40765a`, `cifd71015e`, `ci9caaa5c5`, `ci700a4fe8`). `year11/formulas-and-equations/lesson05.sa.html` says in a "Beyond the syllabus" notice that these formulas are what Formulas and equations examines, but no lesson teaches them.
- Spreadsheets in Earning money and Data analysis (`cic3748618`, `ci877a99ed`, `cia127389f`, `ci6446263f`), and a linear model in a spreadsheet (`ci80b8ed46`, partial).
- Metric prefixes nano to tera as powers of ten (`ci7526e53a`); megalitres (`ci529c4c4e`, `ci880a544f`, partial).
- Interpolation and extrapolation from a linear model (`ci4777471a`); the shortest path that is not the best path (`ci53383df4`); statistical infographics (`ci2c2bc777`).
- VAT and international purchases (`cib3251328`, `cib09c3969`, partial); government payments and sole-trader earnings (`ci85c34acf`, partial); appreciation (`ci1256741b`, `cicf066fd6`, partial); distance-time graphs (`cic3bbd162`, `ci30ebbe40`, partial).
- Standard 1 only: drawing a graph from a description of a real situation (`cice949e38`). The site has no Standard 1 lessons at all.

## 3. Structure and metadata findings

- Retired duplicates: `year12/investment-and-loans/lesson01.sa.html` and `lesson02.sa.html` carry inline retirement notices (they duplicate lessons 5 and 6) but are still live.
- Pages outside the 2024 Year 11 points: `year11/networks-paths-and-trees/lesson02.sa.html` and `lesson03.sa.html` (degree sums, walks, trails, circuits and Eulerian ideas from the 2017 course); `year11/applications-of-measurement/lesson10.sa.html` (scale drawings, now a Year 12 Ratios and rates action), `lesson11.sa.html` (errors and limits of accuracy, not a 2024 point) and `lesson12.sa.html` (energy units, now a Year 12 Standard 2 action); `year11/data-analysis/lesson08.sa.html` (a review of an older statistics module that includes correlation and lines of best fit).
- Stale lesson ids: `year11/data-analysis/lesson09` to `lesson13` are `maths-std-y12-m8-*`; all six networks lessons are `maths-std-y12-m6-*`; `year12/trigonometry/lesson01` to `lesson05` and `year12/ratios-and-rates/lesson01` are `maths-std-y11-m2-*`; investment lessons 1 to 4 are `maths-std-y11-m3-*`.
- Numbering gaps: Data analysis has lessons 02 and 07 to 13 only; Bivariate data analysis starts at lesson04; The normal distribution has lessons 03 and 05 to 08.
- Older page format: the networks, data-analysis 09 to 13 and algebraic-relationships lessons have no `data-step-id` sections, so section-level links cannot be made for them.

## 4. Confirmed errors found while writing the Year 12 Algebraic relationships packs (18 November 2026)

Source: the same read-only clone, HEAD `5d74a627`, folder `subjects/maths-standard/year12/algebraic-relationships/`. No site file was changed. Every value below was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). Packs: `pre-design/maths-standard/math-s12-a01.md` to `a13.md`.

### MS-04. The break-even hook leaves out the variable cost

- Lesson: `year12/algebraic-relationships/lesson02.sa.html`, hook ("Today's hook").
- Old text: "A food stall costs $\$400$/day to operate and sells items at $\$8$ each. When does the stall start making a profit? The answer is one simultaneous equation away."
- Correction: "A food stall costs $\$400$/day to operate, spends $\$2$ on ingredients for each item and sells items at $\$8$ each. When does the stall start making a profit? The answer is one simultaneous equation away."
- Reason: the recall card, card 06 and the revisit card all use $C = 400 + 2n$ and $R = 8n$ (first profit at 67 items). With the hook's wording alone, the break-even is $400 \div 8 = 50$ items, so the hook asks a different question from the one the lesson answers.

### MS-05. The food stall's "dollar value" is not the break-even value

- Lesson: `year12/algebraic-relationships/lesson02.sa.html`, card 06 "Break-Even Analysis, Cost and Revenue Equations", food stall example.
- Old text: "Since items are whole, the stall must sell 67 items to first exceed costs. Dollar value: $R = 8 \times 67 = \$536$."
- Correction: "Since items are whole, the stall must sell 67 items to first exceed costs. At break-even the revenue is $8 \times 66.\overline{6} \approx \$533.33$. At 67 items the revenue is $8 \times 67 = \$536$ and the cost is $\$534$, a profit of $\$2$."
- Reason: card 06 defines the dollar value at break-even as the cost or revenue at the break-even $n$, where $C = R$. At $n = 67$ the two differ ($C = 534$, $R = 536$), so $\$536$ is not a break-even value.

### MS-06. A depreciation answer is rounded too early

- Lesson: `year12/algebraic-relationships/lesson03.sa.html`, worked example `we-3`, part (b).
- Old text: "$V = 24\,000 \times 0.82^5 = 24\,000 \times 0.3707 \approx \$8{,}897$" and "After 5 years the car is worth about $8,897."
- Correction: "$V = 24\,000 \times 0.82^5 = 24\,000 \times 0.370740\ldots \approx \$8{,}898$" and "After 5 years the car is worth about $8,898."
- Reason: $24\,000 \times 0.82^5 = 8\,897.756\ldots$, which rounds to $\$8{,}898$. The site's $\$8{,}897$ comes from rounding $0.82^5$ to $0.3707$ first ($24\,000 \times 0.3707 = 8\,896.80$).

### MS-07. Spelling: "scraped" for "scrapped"

- Lesson: `year12/algebraic-relationships/lesson03.sa.html`, worked example `we-3`, part (c) note.
- Old text: "In reality, a car's value does eventually reach zero (scraped, written off)."
- Correction: "In reality, a car's value does eventually reach zero (scrapped, written off)."
- Reason: "scraped" means scratched; the meaning is "scrapped" (sold for scrap).

### MS-08. Declared dotpoints change the official wording

- Files: `year12/algebraic-relationships/lesson03.sa.html` (`data-lesson-dotpoints`, two copies) and `subjects/maths-standard/curriculum-map.json` (Algebraic relationships lesson 3); `year12/algebraic-relationships/lesson06.sa.html` (`data-lesson-dotpoints`) and `curriculum-map.json` (lesson 6).
- Old text (lesson 3): "Graph an exponential relationship of the form y = ab^x and y = ab^(-x), where b > 0 and b ≠ 1, with and without using graphing applications||Construct and analyse an exponential model of the form y = Ab^x and y = Ab^(-x), where A and b are constants, to solve practical growth or decay problems||Interpret the meaning of the y-intercept of an exponential graph in a variety of contexts"
- Correction (lesson 3): "Graph an exponential relationship of the form y = a^x and y = a^(-x), where a > 0, with and without using graphing applications||Construct and analyse an exponential model of the form y = ka^x and y = ka^(-x), where a > 0 and k is a constant, to solve practical growth or decay problems||Interpret the meaning of the intercept of an exponential graph in a variety of contexts"
- Old text (lesson 6): "Solve inverse variation problems graphically or algebraically given the value of two of the variables"
- Correction (lesson 6): "Solve inverse variation problems graphically, or algebraically given the value of two of the variables in y = k/x"
- Reason: the official points `ci8b7a1643`, `ci649c035d`, `ci7d79f487` and `cib9514f33` (crosswalk `sourceHtml`) use these words. The site's version changes the letters and adds or drops conditions, so the declared dotpoints no longer quote the syllabus. The lesson body may keep its own notation; the dotpoint text should match NESA.

### MS-09. A mark note contradicts its question

- Lesson: `year12/algebraic-relationships/lesson03.sa.html`, comprehensive answers, SA 3 (d).
- Old text: "[1 per valid limitation, max 1 mark]"
- Correction: "[1 mark for two valid limitations]" (or make SA 3 a 5-mark question and write "[1 per valid limitation, max 2 marks]").
- Reason: SA 3 is worth 4 marks, parts (a) to (c) take 1 mark each, and (d) asks for TWO limitations. "1 per valid limitation, max 1 mark" cannot be applied as written.

### MS-10. The paddock model does not match "one side is the barn wall"

- Lesson: `year12/algebraic-relationships/lesson05.sa.html`, card 01 (recall), with the same model in cards 05, 06 and 07 and the revisit card.
- Old text: "A farmer has 80 m of fencing to enclose a rectangular paddock. One side is the barn wall (free). The area is modelled by $A = 40w - w^2$ where $w$ is the width of the paddock in metres."
- Correction: "A farmer has 80 m of fencing to enclose a rectangular paddock on all four sides. The area is modelled by $A = 40w - w^2$ where $w$ is the width of the paddock in metres."
- Reason: $A = 40w - w^2 = w(40 - w)$ is a rectangle whose four sides use the 80 m ($2w + 2(40 - w) = 80$), which is how card 05 explains $w = 40$ ("all fence used in width, none left for length"). With a barn wall as one side, the area would be $w(80 - 2w)$ (maximum $800$ m² at $w = 20$), not $40w - w^2$ (maximum 400 m²). All the lesson's later numbers (400 m² at 20 m, $-500$ m² at 50 m, $0 \leq w \leq 40$) are correct for the four-sided paddock, so only the hook needs to change.

## 5. Findings from the Year 12 Investment and loans packs, i01 to i11 (18 November 2026)

Source: the same read-only clone, HEAD `5d74a627`, folder `subjects/maths-standard/year12/investment-and-loans/` (lessons 03, 05, 06, 07, 11, 14 and 15; SHA256 values in `programme/maths-standard-route-inputs-2.json`). No site file was changed. Every value below was recalculated with SymPy 1.14.0 (`work/brief-standard-i1/recalc.py`, output in `recalc-output.txt`). Packs: `pre-design/maths-standard/math-s12-i01.md` to `i11.md`. Lessons 05, 14 and 15 had no numerical errors.

### MS-11. A monthly compounding answer is rounded too early

- Lesson: `year12/investment-and-loans/lesson06.sa.html`, worked example `we-2`, step 2.
- Old text: "$A = 5000 \times (1.005)^{36} = 5000 \times 1.1967 = \$5983.50$"
- Correction: "$A = 5000 \times (1.005)^{36} = \$5983.40$" (keep the full calculator value of $(1.005)^{36} = 1.196680\ldots$ until the last line).
- Reason: $5000 \times 1.005^{36} = 5983.4026$, so $5983.40 to the cent. Rounding the factor to 1.1967 first moves the answer by 10 cents.

### MS-12. A quarterly compounding answer is given to the dollar from a rounded factor

- Lesson: `lesson06.sa.html`, worked example `we-1`, step 3.
- Old text: "$A = 10\,000 \times 1.4859 = \$14\,859$" with the note "Calculate $(1.02)^{20} \approx 1.4859$"
- Correction: "$A = 10\,000 \times (1.02)^{20} = \$14\,859.47$" and "Keep the full value of $(1.02)^{20}$ in the calculator".
- Reason: $10\,000 \times 1.02^{20} = 14\,859.47$. The lesson's other money answers are given to the cent (\$9671.41, \$2315.25), and the lesson tells students to round only at the end.

### MS-13. The revisit card truncates the 20-year values

- Lesson: `lesson06.sa.html`, card 10 (Revisit your thinking).
- Old text: "After 20 years: compound gives $5000 \times (1.06)^{20} = \$16\,035$ vs simple $5000(1 + 0.06 \times 20) = \$11\,000$, a $5,035 difference."
- Correction: "After 20 years: compound gives $5000 \times (1.06)^{20} = \$16\,035.68$ vs simple $5000(1 + 0.06 \times 20) = \$11\,000$, a $5035.68 difference."
- Reason: $5000 \times 1.06^{20} = 16\,035.677$. To the dollar it is $16 036, not $16 035; to the cent it is $16 035.68.

### MS-14. The "true rate" answer repeats the flat rate the lesson warns against

- Lesson: `lesson07.sa.html`, comprehensive answers, Drill 2 (the $2000 purchase with a $200 fee repaid over 12 months).
- Old text: "Drill 2: Total = $\$2,200$. True rate = $\$200$ on $2,000 over 1 year = 10% (flat rate). Misleading because "0% interest" hides the fee which is functionally interest."
- Correction: "Drill 2: Total = $2200. The flat rate is $200 ÷ $2000 = 10% for one year, but the $2000 is repaid in 12 monthly payments of $183.33, so on average only about half of it is owed. The true rate is about 18% p.a. (about 1.5% a month), nearly double the flat rate. Misleading because "0% interest" hides the fee, which works as interest."
- Reason: question (b) asks for the true annual rate, and the lesson's own rule (card 06 and Trap 03) is that the true rate of a flat-rate charge is roughly double. Solving $2000 = 183.33 \times \frac{1 - (1 + i)^{-12}}{i}$ gives $i = 1.498\%$ a month, 17.97% p.a. nominal (19.53% effective). (The lesson's other flat-rate claims check: 14.35% for card 06, 12.50% for `we-2` and 10.97% for SA 2 are inside or beside the quoted ranges.)

### MS-15. An ETF future value is rounded to the wrong hundred

- Lesson: `lesson11.sa.html`, worked example `we-2`, step 4.
- Old text: "$FV_{\text{ETF}} = 350 \times \dfrac{(1.004667)^{480}-1}{0.004667} \approx \$625\,800$"
- Correction: "$FV_{\text{ETF}} = 350 \times \dfrac{(1.004667)^{480}-1}{0.004667} \approx \$625\,900$"
- Reason: the expression as written equals $625 905.54. "Super wins by ≈ $2.36M" is unchanged.

### MS-16. The employer super contribution uses an old rate

- Lesson: `lesson11.sa.html`, short answer SA 3 (and `we-2`, which uses the same figures).
- Old text: "A 25-year-old earns $\$60,000$ and contributes $\$500$/month to super. Their employer contributes $\$575$/month."
- Correction: "A 25-year-old earns $60,000 and contributes $500/month to super. Their employer contributes $600/month." Then SA 3 (a): "$1100/month ... FV = $1100 × [(1.006)^480 − 1]/0.006 ≈ $3,054,600", and the same $600 in `we-2`.
- Reason: $575 × 12 = $6900 is 11.5% of $60 000, the super guarantee rate for 2024-25. The rate has been 12% since 1 July 2025 (ATO, super guarantee percentage), so the employer pays $7200 a year, $600 a month. Recalculated: $1100 × [(1.006)^480 − 1] ÷ 0.006 = $3 054 631.89. This content is marked beyond the syllabus on the page, so the fix is low priority, but the site's money figures should match the current year.

### MS-17. A "Common error" box states a correct fact

- Lesson: `lesson03.sa.html`, card "Straight-Line Depreciation", the box after "Must do".
- Old text: "Common error: Straight-line depreciation uses a fixed dollar amount each year; it may be expressed as a fixed percentage of the original value. If $D = \$2{,}500$ per year, the asset loses $2,500 every year regardless of its current value. Applying a percentage to the current value each year is declining balance depreciation, a different formula."
- Correction: "Common error: taking a percentage of the current value each year when the question describes straight-line depreciation. Straight-line depreciation removes a fixed dollar amount each year (sometimes stated as a fixed percentage of the original value). If $D = \$2{,}500$ per year, the asset loses $2,500 every year regardless of its current value. Taking a percentage of the current value each year is declining balance depreciation, a different formula."
- Reason: the box is labelled as an error, but its first sentence is the correct rule, so a student can read the rule as the mistake. Name the mistake first.

### MS-18. A comparison sentence has no example to refer to

- Lesson: `lesson03.sa.html`, card "Straight-Line Depreciation", the line before the summary.
- Old text: "In this example declining balance falls faster initially; the comparison depends on the rates chosen."
- Correction: delete it here, or move it to the spreadsheet card ("Modelling both methods in a spreadsheet"), where the $40 000 example shows declining balance falling faster in years 1 to 3.
- Reason: the straight-line card has no declining-balance example, so "this example" points at nothing.

### Teaching gaps (owner decision)

These are gaps, not copy errors. The packs plan original teaching for them.

- Present value and the interest rate (`ci64a24122`, `cib6fe9f5b`): the syllabus asks students to calculate "the future value, present value or interest rate" of a compound interest investment. `lesson06.sa.html` only calculates future values; no example finds PV = FV ÷ (1 + r)^n or the rate from PV, FV and n. The crosswalk records the point as covered.
- Inflation as compound growth (`ci1256741b`, `cicf066fd6`): `lesson11.sa.html` treats inflation only through "real return = nominal return − inflation rate", an approximation it does not label as one. No lesson grows a price with FV = PV(1 + r)^n.
- Appreciation (same points; already listed in section 2): no lesson in the folder mentions it.
- Graph comparisons with digital tools: `lesson05.sa.html` states that simple interest graphs are straight lines but never compares two graphs for different rates or times (`ci04f3e92c`, `ci32753eab`); `lesson14.sa.html` graphs a share price by hand only (`cie1731909` says "with and without using digital tools"); `lesson06.sa.html` uses a spreadsheet only for simple against compound, not for varying the rate, term or compounding period (`ciaa253014`).

### Structure notes

- Notation differs between lessons and from the syllabus: lessons 05 and 06 write $A = P(1 + rn)$ and $A = P(1 + r)^n$; lesson11 card 08 writes $FV = PV(1+r)^n$, as the syllabus does. The videos use the syllabus letters.
- `lesson06.sa.html` teaches the effective annual rate (card 07, `we-1` step 4, `we-2` step 3, SA 1 (c), SA 2, SA 3 (b)) with no "beyond the syllabus" notice, while `lesson07.sa.html` carries one. The 2024 Standard points ask only for the effect of the compounding period on the future value. `lesson03.sa.html` is titled "Depreciation | Declining Balance Method" and labelled "Year 11 review 1 of 2", although it teaches both methods for the Year 12 points.

## 6. Findings from the Year 12 Investment, loans and annuities packs, i12 to i23 (18 November 2026)

Source: the same read-only clone, HEAD `5d74a627`, folders `subjects/maths-standard/year12/investment-and-loans/` (lessons 07, 08, 09, 10 and 12) and `subjects/maths-standard/year12/annuities/` (lessons 01, 02 and 03); SHA256 values in `programme/maths-standard-route-inputs-3.json`. No site file was changed. Every value below was recalculated with SymPy 1.14.0 (`work/brief-standard-i2/recalc.py`, output in `recalc-output.txt`; where a balance is run month by month, interest is rounded to the cent each period). Packs: `pre-design/maths-standard/math-s12-i12.md` to `i23.md`. Lessons 07, 08 (apart from method, MS-24) and 09 had no numerical errors in the parts checked.

### MS-19. The credit card hook gives the figures of a different example

- Lesson: `year12/investment-and-loans/lesson10.sa.html`, opening paragraph.
- Old text: "You buy a $\$2000$ television on your credit card. The minimum payment is $\$60$/month. The interest rate is 19.99% p.a. How long will it take to pay off? How much will you pay in total? The answer shocks most people: over 9 years and more than $6600 total, more than triple the original price."
- Correction: "... The answer surprises most people: about 4 years and 2 months, and nearly $\$2950$ in total, almost $\$950$ of it interest." (Or keep the 9-year figures and change the example to the lesson's own "$\$3000$ ... at 20% p.a. ... $\$60$/month".)
- Reason: $2000 at 19.99% p.a. (÷ 12 a month) with $60 a month takes 50 payments, total $2942.85, interest $942.85. "Over 9 years" and about $6504 belong to the $3000 example in card 06; "more than $6600" matches neither.

### MS-20. Credit card interest "for a given number of days" is taught as simple interest

- Lesson: `lesson10.sa.html`, card 02 ("Daily interest: $I = \text{Balance} \times \dfrac{r}{365} \times \text{days}$"), card 05 and Trap 01.
- Old text (card 05): "Daily interest $= 2000 \times \dfrac{0.1999}{365} = \$1.095$/day. Monthly interest $\approx 1.095 \times 30 = \$32.85$/month".
- Correction: add the compound form the syllabus names (Standard 2 `ci13e98315`, Standard 1 `ci2dbee6b0`: "Calculate the compound interest charged ... for a given number of days"): "Compounded daily for 30 days: $I = 2000\left(1 + \dfrac{0.1999}{365}\right)^{30} - 2000 = \$33.12$." If the simple daily method is kept, label it as simple interest and give its 30-day value as $\$32.86$ (1.0953425 × 30), not $\$32.85$ (which comes from rounding the daily figure first).
- Reason: the syllabus asks for compound interest over a number of days; the lesson's only day-count formula is simple interest, although card 02 itself says daily compounding raises the effective rate.

### MS-21. A minimum-payment answer is not supported by the question

- Lesson: `lesson10.sa.html`, comprehensive answers, SA 1 (c).
- Old text: "(c) n ≈ 280 months (~23 years) [1]."
- Correction: "(c) Paying a fixed $\$112.50$ each month: about 67 months (5.6 years)." If the intended minimum is "2.5% of the balance or $\$25$, whichever is greater", say so in the question and give "about 238 months (almost 20 years)".
- Reason: $4500 at 19.99% p.a. (÷ 12) with $112.50 a month clears in 67 payments; with a 2.5% minimum and a $25 floor it takes 238. Neither gives 280.

### MS-22. The $150-a-month comparison is a little low

- Lesson: `lesson10.sa.html`, card 06 ("The minimum payment trap").
- Old text: "Comparison, paying $150/month instead: Paid off in approximately 24 months. Total paid $\approx \$3600$. Saves nearly $\$3000$ and 7 years."
- Correction: "Comparison, paying $150/month instead: paid off in about 25 months. Total paid $\approx \$3680$. Saves about $\$2800$ and 7 years."
- Reason: $3000 at 20% p.a. (÷ 12) with $150 a month takes 25 payments, total $3679.80, against $6504.24 for the $60 minimum: a saving of $2824.44.

### MS-23. Two cards give different interest for the same balance transfer

- Lesson: `lesson10.sa.html`, `we-2` step 3 ("Total interest ≈ $\$632$ over 12 months at $\$400$/month") and card 08 ("Interest saved at 20% over 12 months $\approx \$550$. Minus $\$100$ fee $= \$450$ net saving").
- Correction (card 08): "Interest saved at 20% over 12 months $\approx \$632$. Minus $\$100$ fee $= \$532$ net saving", matching `we-2`.
- Reason: $5000 at 20% p.a. (÷ 12) with $400 a month accrues $631.57 of interest in 12 months. Balance transfers are not a 2024 point, so this is low priority.

### MS-24. Loan and annuity answers use methods outside Standard 2

- Lessons: `lesson08.sa.html` (card 02, card 05, `we-1`, `we-2` step 4, SA 2 (b)), `lesson10.sa.html` (card 06, revisit card), `lesson12.sa.html` (card 06), `annuities/lesson02.sa.html` (card 05, "Finding the required payment").
- Old text (examples): "$M = PV \times \dfrac{r}{1 - (1+r)^{-n}}$"; "$n = \ln(0.6719)/\ln(1.008) \times (-1)$"; "$n = \dfrac{\ln 1.1\overline{6}}{\ln 1.004} \approx 38.7 \text{ months}$".
- Correction (owner decision): mark the repayment formula and every logarithm step "Beyond the syllabus" (as lessons 07, 09, 12 and annuities 01 and 02 already do for their own extensions), and give the Standard 2 route beside each: a table of repayments per $1000 or a present value interest factor for the repayment; a spreadsheet's row count, a loan calculator or a supplied graph for the term.
- Reason: Standard 2 has no logarithms and its reference sheet has no loan repayment formula; the 2024 points ask for tables, spreadsheets, graphs and digital tools ("using a graph or by calculation", "using a table of interest factors").

### MS-25. A mortgage repayment is rounded down

- Lesson: `annuities/lesson03.sa.html`, `we-2` steps 2 and 3.
- Old text: "$= \$2{,}098.64$/month" and "Total $= 2098.64 \times 360 = \$755{,}510$. Interest $= \$355{,}510$"
- Correction: "$= \$2{,}098.66$/month" and "Total $= 2098.66 \times 360 = \$755{,}517.60$. Interest $= \$355{,}517.60$"
- Reason: $400000 \times 0.004 \div (1 - 1.004^{-360}) = 2098.6614$. `investment-and-loans/lesson08.sa.html` card 06 gives the same loan correctly as $2098.66.

### MS-26. The 20-year repayment contradicts the lesson's own answer

- Lesson: `annuities/lesson03.sa.html`, card 07 ("Comparing loan options, term vs total interest").
- Old text: "20-year term: ... $= \$1{,}168.11$/month. Total $= \$280{,}346$. Interest $= \$100{,}346$." and "Saving: $\$29{,}072$ in interest"
- Correction: "20-year term: ... $= \$1{,}168.12$/month. Total $\approx \$280{,}350$. Interest $\approx \$100{,}350$." and "Saving: about $\$29{,}068$ in interest"
- Reason: the exact repayment is $1168.1234; SA 1 in the same lesson gives $1168.12 and a total of $280 350. The 25-year figures ($1031.39, $309 418) are right when the unrounded repayment is used.

### MS-27. A required super contribution is rounded too early

- Lesson: `annuities/lesson02.sa.html`, `we-2` steps 3 and 4.
- Old text: "$(1.006)^{180} = 2.935$, so $M = \dfrac{600}{1.935} = \$310.08$/month" and "Total deposited $= 310.08 \times 180 = \$55{,}814$. Interest $= 100000 - 55814 = \$44{,}186$"
- Correction: "$(1.006)^{180} = 2.935192\ldots$, so $M = \$310.05$/month" and "Total deposited $= 310.05 \times 180 = \$55{,}809$. Interest $= \$44{,}191$"
- Reason: $100000 \times 0.006 \div (1.006^{180} - 1) = 310.0467$. Rounding $(1.006)^{180}$ to 2.935 moves the answer by 3 cents a month.

### MS-28. The salary-sacrifice example ignores the contributions tax it mentions

- Lesson: `investment-and-loans/lesson12.sa.html`, card 08 ("Superannuation versus after-tax investing").
- Old text: "Super option: Contribution is pre-tax. $M = 500$" ... "$\approx 500 \times 1801 = \$900{,}400$" and "Difference: Super wins by approximately $\$445{,}000$".
- Correction: "Super option: the fund deducts 15% contributions tax, so $M = 500 \times 0.85 = 425$" ... "$\approx 425 \times 1801.05 = \$765{,}400$" and "Difference: super wins by approximately $\$310{,}000$".
- Reason: the card's own problem says the contribution is "taxed at 15%", and SA 3 in the same lesson deducts it ($300 becomes $255). $425 × 1801.0546 = $765 448.21; the shares figure ($455 027.54) is right. ($500 × 1801.0546 = $900 527.30, so "$900,400" is also low.)

### MS-29. Gap: no table of interest factors

- Lessons: `annuities/lesson02.sa.html` and `lesson03.sa.html` declare "Using a table of interest factors, calculate the future value or present value of an annuity" (`ci8032ba07`), and lesson02's notice says the exam "supplies factor tables", but no page shows a future value or present value interest factor table; every example uses the closed-form formula. `cifb9dd435` (contribution and single sum from a table) is also taught by formula only, and its single-sum half is not taught at all. `ci025a6c75` (varying the amount initially invested, the payment, the rate and the duration "using digital tools") is taught only through duration (lesson02 card 07), with no digital tool and no amount initially invested.
- Suggested addition: a future value and a present value interest factor table (rates per period across, periods down, 4 decimal places), with one lookup example each using the lessons' own numbers ($2000 a year at 5% for 4 years: FV factor 4.3101; $500 a month at 0.5% for 60 months: PV factor 51.7256), a single-sum example, and a spreadsheet with four input cells. Tables to 4 decimal places are in `work/brief-standard-i2/factor-tables-output.txt` in the video repo.

### MS-30. Gap: credit card fees, the rate comparison, a statement and credit choices

- Lesson: `investment-and-loans/lesson10.sa.html`. The lesson names no credit card fee except the balance transfer fee (no annual, late payment, cash advance or foreign transaction fee: `ci435086e3`, `ci8a052732`), never compares a card's rate with other loan types in numbers (`ci3480c9ff`, `ci9715d6e5`), shows no credit card statement although the syllabus asks students to "Interpret a credit card statement" (`cife5c18db`, `ci42184aca`), and never sorts goals into short, medium and long term or compares a card with a personal loan for them (`ci3e2e1f21`, `ci52cad03f`; the crosswalk marks both partial).
- Suggested addition: a fees list with what triggers each fee; a rate ladder (home loan, personal loan, low-rate card, standard card) from RBA tables F5 and F8 with the month named; an unbranded statement with the minimum repayment warning; one worked card-against-personal-loan comparison (lesson12's drill 1 (b) has the numbers but no answer: $94.01 a month, interest $384.36 on the 8% loan, against 46 months and $1315.72 on the card).

### MS-31. Gap: no withdrawal annuity

- Lesson: `annuities/lesson01.sa.html`. `cibac40b05` defines an annuity as regular contributions "or as a single sum investment from which regular equal withdrawals are made". The lesson's tables model contributions only.
- Suggested addition: a four-row withdrawal table, for example $10 000 at 4% p.a. with $2500 withdrawn at the end of each year: closing balances $7900.00, $5716.00, $3444.64, $1082.43.

### MS-32. Owner note: lottery contexts

- Lessons: `annuities/lesson01.sa.html` (opening paragraph) and `annuities/lesson03.sa.html` (hook, card 01, card 08, revisit card, SA 2) frame present value as a lottery prize choice. The videos do not use these (root ruling 6: no gambling). The owner may prefer a non-gambling choice on the site too, for example a retention bonus paid yearly or as one sum now.

## 7. Findings from the Year 12 Ratios and rates packs, r01 to r14 (18 November 2026)

Source: the same read-only clone, HEAD `5d74a627`, folder `subjects/maths-standard/year12/ratios-and-rates/` (lessons 01 to 05) and `year11/applications-of-measurement/` (lessons 10 and 12); SHA256 values in `programme/maths-standard-route-inputs-4.json`. No site file was changed. Every value below was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`, output in `recalc-output.txt`). Packs: `pre-design/maths-standard/math-s12-r01.md` to `r14.md`. Every worked answer, drill answer and short-answer answer in the five lessons matched; the findings are explanations, contradictions, gaps and an owner note.

### MS-33. Owner note: a lottery hook

- Lesson: `year12/ratios-and-rates/lesson02.sa.html`, hook, card 01, worked example 3 ("the lottery ticket") and the revisit card.
- Old text: "Two friends put in $\$50$ and $\$30$ to buy a lottery ticket. It wins $\$480$."
- Suggested change: keep the numbers in a non-gambling story, for example "Two friends put in $\$50$ and $\$30$ to buy cold drinks to sell at a junior footy carnival. They take $\$480$. Splitting it evenly feels unfair. How much should each get?" The working ($300 and $180) is unchanged.
- Reason: the videos do not use gambling contexts (root ruling 6; see MS-32 for the same note on the annuities lessons).

### MS-34. A distractor explanation gives the wrong reason

- Lesson: `year12/ratios-and-rates/lesson05.sa.html`, comprehensive answers, drill 4 ("A $2\text{ kW}$ heater runs for $3$ hours. Electricity costs $\$0.28$ per kWh").
- Old text: "Option C is the answer you get if you forget that the price is per kilowatt hour and treat it as cents."
- Correction: "Option C ($\$16.80$) multiplies by $2.8$ instead of $0.28$, a decimal slip that makes the cost ten times too big."
- Reason: $6 \times 2.8 = 16.80$. Treating the price as 28 cents gives $6 \times 28 = 168$ cents $= \$1.68$, which is the correct answer, not option C.

### MS-35. Gap: converting a rate's units

- Lesson: `year12/ratios-and-rates/lesson01.sa.html`. The syllabus asks students to "Convert between rates" (Standard 2 `cib0e451ed`, Standard 1 `ci088435d6`; the crosswalk records both as covered). The lesson converts minutes to hours inside speed problems and changes one drip rate from L/min to L/day in a drill answer, but no card or worked example converts both units of a rate (for example 90 km/h to 25 m/s, $\$4.50$/kg to 45 c/100 g, or 0.3 L/min to 18 L/h).
- Suggested addition: a short card "Convert the top unit, then the bottom unit" with one speed example (km/h to m/s, with the reason before the ÷ 3.6 shortcut) and one price example.
- Structure note on the same page: card 04 lists "Scale" as a key term ("A ratio that compares measurements on a map or diagram to real-world measurements"), which belongs to lesson03 and is not used in lesson01.

### MS-36. Gap: building-plan symbols

- Lesson: `year12/ratios-and-rates/lesson03.sa.html`. Standard 2 `ci6a191fab` and Standard 1 `ci16ea39e5` say "building plans with commonly used symbols". No card, worked example or drill shows or names a plan symbol (wall, door and its swing, window, sliding door, north point, dimension line); the crosswalk records both points as covered.
- Suggested addition: a labelled plan with five or six symbols and one question that needs a symbol to answer (for example, subtracting a door and a window from a wall area for paint).

### MS-37. Gap: plans, photos, maps, perimeter and radial surveys in the trapezoidal and rainfall points

- Lesson: `year12/ratios-and-rates/lesson04.sa.html`. Standard 2 `cie48a6b84` asks for "the perimeter, or area of a section of land using the Trapezoidal rule where appropriate, from a site plan, an aerial photograph, a radial survey or a map that includes a scale"; `ci5d0f766d` asks for rainfall volume using V = Ah from the same sources. Every example gives the offsets or the area directly in metres: none reads them from a plan, photo or map with a scale, none finds a perimeter, and none uses a radial survey.
- Notation: the syllabus writes $V = Ah$ with $h$ the depth of rain. The lesson writes $V = A \times d$ (card 06) while using $h$ for the strip width in the trapezoidal rule. Suggested: use $V = Ah$ as written and say once that $h$ means the rain's depth there.
- Suggested addition: one worked example that measures offsets on a scaled aerial photo or site plan (for example 1 : 1000, so 1 cm is 10 m), finds the area, the fencing perimeter of the straight sides, and the rain volume on the same block. Radial surveys need the Trigonometry lessons (sine area rule, cosine rule; `cibe642c8e`); a cross-reference from the Trigonometry radial-survey lesson would close that part.

### MS-38. A distractor explanation says the opposite of what happens

- Lesson: `year12/ratios-and-rates/lesson04.sa.html`, comprehensive answers, drill 5 ("A rainfall of $25\text{ mm}$ is written in metres as").
- Old text: "Option B divides by $100$ instead of $1000$, which is the error that turns a full tank into an empty one."
- Correction: "Option B divides by $100$ instead of $1000$. That makes the rain ten times too deep, so the volume comes out ten times too big: a tank you think will overflow may get only a tenth of that water."
- Reason: 0.25 m is ten times 0.025 m; the slip overestimates the water, it does not empty the tank.

### MS-39. A unit rule contradicts its own worked example, and an unrealistic room

- Lesson: `year12/ratios-and-rates/lesson03.sa.html`, card 04 and worked example 2.
- Old text (card 04): "Going out to the real world you multiply by $n$. Coming back to the drawing you divide by $n$. Convert the units only after that, never before." Worked example 2 then says: "Here the real length is given in metres, so convert it to centimetres before dividing."
- Correction: "Going out to the real world, multiply by $n$ first and convert the units after. Coming back to the drawing, convert the real length to the drawing's unit first, then divide by $n$."
- Reason: the rule as written is only true in one direction; worked example 2, drill 2 and SA 1 (b) all (correctly) convert before dividing.
- Owner note on the same lesson: the apply-plans fill-the-gaps task ("A bedroom measures $4.4\text{ cm}$ by $3.0\text{ cm}$ on a plan drawn at $1:50$") gives a bedroom of 2.2 m by 1.5 m (3.3 m²), shorter than a single bed. The arithmetic is right; $1:100$ (4.4 m by 3.0 m, 13.2 m², $\$528$ of carpet at $\$40$) would be realistic.

### MS-40. The kettle example uses two electricity prices; site prices are below current caps

- Lesson: `year11/applications-of-measurement/lesson12.sa.html`. The hook and the revisit card price the 2400 W kettle at "30 cents per kWh" ($\approx \$13.14$ a year); `we-3` prices the same kettle at "32 cents per kWh" ($\approx \$14$ a year).
- Correction: use one price in all three places (the revisit card should answer the hook's own question with the same price as `we-3`, or the hook should say 32 cents).
- Price note (not an error): the lessons use 28 to 32 cents per kWh (`year12/ratios-and-rates/lesson05.sa.html` drills and SA; Year 11 lesson12). The AER Default Market Offer for 2026-27 (final determination, May 2026) caps the NSW residential flat-rate usage price at 33.14 c/kWh (Ausgrid), 33.73 (Endeavour) and 35.01 (Essential), as reported by Canstar on 26 May 2026 (to be re-verified against the AER document). The site may want one dated, sourced price line where prices appear.

## Note for the site (root, 18 Nov 2026)
- **i21 (annuities, savings goal):** the video uses a standard interest-factor table column (6% a year compounded monthly: $407.08 a month for $50,000 in 8 years) instead of the site lesson's 5.4% ($417.57), which needs an unusual 0.45% column. Consider aligning the site example, or adding a line that both methods are the same with different rates.

## 8. Findings from the Year 12 Trigonometry packs, t01 to t11 (18 November 2026)

Source: the same read-only clone, HEAD `5d74a627`, folder `subjects/maths-standard/year12/trigonometry/` (lessons 01 to 08) and `year11/applications-of-measurement/lesson03.sa.html`; SHA256 values in `programme/maths-standard-route-inputs-5.json`. No site file was changed. Every worked answer, drill answer and short-answer answer in the eight lessons was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, output in `recalc-output.txt`). Packs: `pre-design/maths-standard/math-s12-t01.md` to `t11.md`. Lessons 03, 05, 06, 07 and 08 had no numerical errors; the findings are rounding slips, one distractor value, one misleading sentence, page labels, method notes and gaps.

### MS-41. Answers rounded from rounded trig values give a wrong last digit

- Lessons and old text:
  - `year12/trigonometry/lesson02.sa.html`, `we-3`: "$H = \dfrac{O}{\sin\theta} = \dfrac{4.6}{\sin 63.4°} \approx \dfrac{4.6}{0.8942} \approx 5.15 \text{ m}$"
  - `year12/trigonometry/lesson04.sa.html`, `we-2`: "$x = \dfrac{80}{0.44522\ldots} \approx 179.69 \text{ m}$"
  - `year12/trigonometry/lesson01.sa.html`, comprehensive answers: "7: $H = 8/\cos 42° = 10.76\text{ cm}$" and "10: $A = 5/\tan 22° = 12.37\text{ m}$"
  - `year12/trigonometry/lesson02.sa.html`, revisit card: "$H = \frac{1.2}{\sin 15°} \approx \frac{1.2}{0.2588} \approx 4.63$ m."
- Correction: 5.14 m; 179.68 m; 10.77 cm; 12.38 m; 4.64 m.
- Reason: 4.6 ÷ sin 63.4° = 5.1445; 80 ÷ tan 24° = 179.6829; 8 ÷ cos 42° = 10.7651; 5 ÷ tan 22° = 12.3754; 1.2 ÷ sin 15° = 4.6364. Each printed value is one in the last place, from rounding the trig value (or truncating) before dividing. The lessons' own rule is "Round to 2 d.p. at the final step only" (lesson01 `we-1`).

### MS-42. A quick-match option is one hundredth out

- Lesson: `year12/trigonometry/lesson02.sa.html`, `drill-unknown-sides`, quick match ("The wire makes an angle of 65° with the ground and is anchored 4.5 m from the base. The height of the pole is closest to:").
- Old text: "B, 9.64 m"
- Correction: "B, 9.65 m"
- Reason: 4.5 × tan 65° = 9.6503. The option is still the closest, but the printed value is not the answer to two decimal places.

### MS-43. The angle of depression is said to lie inside the triangle

- Lesson: `year12/trigonometry/lesson02.sa.html`, `avoid-the-side-traps`, trap 03.
- Old text: "The angle of depression from the top equals the angle of elevation from the bottom (alternate angles). Both give the same angle inside the right-angled triangle do not subtract from 90°."
- Correction: "The angle of depression from the top equals the angle of elevation from the bottom (alternate angles). So put the angle at the bottom of the triangle and use it as it is; do not subtract it from 90°."
- Reason: the angle of depression lies outside the triangle, between the horizontal at the top and the line of sight; the triangle's angle at the top is 90° minus it. As written, the sentence (which also lacks a full stop) can lead students to place the depression angle at the top corner. Lesson04's card 02 ("redraw the triangle using the equal elevation angle at the base") says it correctly.

### MS-44. Five Year 12 trigonometry pages are labelled Year 11, Module 2

- Lessons: `year12/trigonometry/lesson01.sa.html` to `lesson05.sa.html`.
- Old text: page titles "... | HSC Maths Standard Year 11 | HSCScience", header chip "Maths Std · Y11", position "Module 2 · L4 of 22" (lesson01), "L14 of 22" to "L17 of 22" (lessons 02 to 05); lesson05's boss battle: "The ultimate Module 2 challenge, use all your measurement knowledge to defeat the boss. Pool: lessons 1–17."
- Correction: label them Year 12 (as lessons 06 to 08 are: "| HSC Maths Standard Year 12 |", "Maths Std · Y12"), remove the Module 2 position, and describe lesson05's boss pool by the trigonometry lessons it draws on.
- Reason: right-angled trigonometry, elevation, depression and bearings are Year 12 points in the 2024 course (Standard 2 Trigonometry, Standard 1 Right-angled triangles); the Year 11 Applications of measurement points stop at Pythagoras. Section 3 already lists these pages' stale `maths-std-y11-m2-*` ids; the visible labels are the student-facing part of the same issue.

### MS-45. Owner note: two methods heavier than Standard 2 needs

- `year12/trigonometry/lesson04.sa.html`, `use-two-observations` (`we-4`, drill 5, SA 3): the two-observation problem is solved by equating $h = d\tan 52°$ and $h = (d+30)\tan 38°$ and collecting the $d$ terms. The answers are right (47.00 m and 60.16 m; 38.48 m and 54.95 m). The algebra is beyond what the point asks and harder than the lesson's SA 2, which solves a two-angle problem as two separate right-angled triangles. Suggested: keep the two-triangle subtraction as the main method and mark the simultaneous version as an extension.
- `year12/trigonometry/lesson05.sa.html`, `we-3` (b) and Q3 (c): the bearing is found from north and east components (and, in Q3, coordinates). Both triangles are right-angled at the turning point, so the bearing comes straight from the triangle: in `we-3`, angle BPC = tan⁻¹(15/20) = 36.87°, bearing 040° + 36.87° = 077°T, back 257°T; in Q3, triangle PBQ is isosceles and right-angled, so angle BPQ = 45° and the bearing of Q from P is 230° − 45° = 185°T. Suggested: show the triangle method first (same answers).

### MS-46. Gaps: Pythagoras practice in Year 12, the named compass directions, and constructing a radial survey

- Pythagoras (Standard 1 `ci0f40c78b`, and the Pythagoras part of `cid1949529` and Standard 2 `cif644212f`): the crosswalk's evidence for these points is lesson04 `use-two-observations`, which has no Pythagoras. No Year 12 lesson sets a practical two-dimensional Pythagoras problem except lesson05 `we-3` (two perpendicular legs). Suggested: one practical problem in lesson04 that needs Pythagoras and an angle of elevation together (for example a drone 40 m up and 75 m along the ground: 85 m away, at 28°4').
- Named directions: lesson05's hook says "northeast" and "southeast", and only the revisit card turns them into 045°T and 135°T. Suggested: one line in card 02 giving NE, SE, SW and NW as 045°T, 135°T, 225°T and 315°T.
- Radial surveys (`cibe642c8e`, "Construct and interpret"): lesson08's step 1 says "Draw $O$, mark north, and draw each radial line at its bearing with its length", but no example draws a survey to scale from the field book. Suggested: one scaled construction (for example 1 cm : 10 m with a protractor), and a cross-reference to the rainfall lesson (`ratios-and-rates/lesson04.sa.html`; see MS-37): 25 mm on the 11 738 m² paddock is V = Ah = 293.46 m³, about 293 kL.
