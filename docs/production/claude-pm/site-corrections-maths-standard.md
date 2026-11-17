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
