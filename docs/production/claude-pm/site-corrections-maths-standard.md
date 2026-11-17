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
