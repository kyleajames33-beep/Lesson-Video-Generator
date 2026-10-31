# Mathematics Advanced 2024: Year 12 site crosswalk

Brief 128, checked 1 November 2026. The companion [JSON](syllabus/maths-advanced-2024-y12-crosswalk.json) maps all 158 content points across the seven Year 12 focus areas to the 59 topic lessons: 133 covered, 19 partial and 6 missing. Each match gives the actual lesson section ID, its text and the source-file hash. The site files were read only.

## Source and IDs

The source is the current [NESA Mathematics Advanced 11-12 (2024) syllabus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview). Year 12 implementation began in Term 4 2026; the first HSC examination is 2027. All seven Year 12 focus-area pages were retrieved, rather than inferred from the site's lesson list.

NESA's public content data does not give these points numbered display codes. The JSON therefore uses the exact content-item CMS codenames, for example `ci8306d30a`, and records that their display-code fields are empty. They are source identifiers, not invented syllabus codes. Outcome codes such as `MAV-12-04` identify outcomes, not individual content points. The unusually long random-variable content codename is retained exactly.

The `sourceHtml` field preserves exact expanded NESA prose and MathML. The readable `text` field transcribes the mathematical notation into a linear form. Use the HTML/MathML when quoting typeset formulas: ordinary HTML text extraction loses fractions, absolute-value bars and powers. Local ordinals are navigation aids only.

## Coverage decisions

`covered` means that the site contains teaching or a worked activity addressing the action. `partial` names the specific proof, condition or scope still missing. `missing` means that no direct teaching of the action was found. These are source-coverage judgements. They do not approve a video's teaching, listening or publication, or certify every statement in a source lesson.

The main omissions are in Integral calculus. The site needs the full trig primitive family, general reverse-chain power/exponential/log patterns, integration with respect to y, exponential/log reflection-area problems, odd/even symmetry and the online computational-integral activity. A definite sine example does not teach all required trig primitives. Existing trapezium and rectangle tools also need the requested explicit comparison and limit-of-sums reasoning. Other partial actions include the full shifted-exponential proof, the specified proof of the log derivative, negative-initial-value exponential graphs, the normal PDF/CDF graphing activity and systematic annuity parameter exploration. Random L03's short-answer Q3 does solve for an unknown standard deviation, so that action is covered despite its absence from the three main worked-example cards.

## Metadata and repeated introductions

- Differential L01 to L04 retain Year 11 and Module 4 in title, descriptions and breadcrumbs. Their calculus content has Year 12 2024 uses, but these labels must not be copied into new video metadata.
- Integral L01 and L02 retain Year 11 and Module 3. Applications L01 also retains Year 11/Module 4.
- Many other titles still use numbered modules, which are not the seven 2024 Year 12 focus-area names. The JSON inventories each title and flags these labels.
- Integral L01 and L04 duplicate primitive meaning, the constant of integration, the power rule and polynomial examples. L01 uses `3x^2` and `4x^3-2x+5`; L04 uses `3x^2+4x-5` and adds the initial-condition example `y'=3x^2-4x+2`, `(1,5)`, giving `y=x^3-2x^2+2x+4`. Use one introductory explanation and retain the useful initial-condition task. The duplicate pages do not fill the missing integration requirements.

## Outgoing and additional material

Do not reuse the old page sequence as the new route. Finance has 19 pages but only seven explicit Year 12 2024 content points. Compound interest is useful background for the required reducing-balance loans and future-value annuities; present-value annuities, annuities due, product comparisons, depreciation, budgeting and other contextual material do not each establish a mandatory Year 12 2024 video. Some are useful prerequisites or applications. The JSON identifies the relevant pages without claiming that every extra topic is absent from all other courses or years.

General areas between two curves and the old module-synthesis pages also need scope decisions. Keep axis-bounded area work that serves the 2024 requirements. Do not count a legacy synthesis title as an extra syllabus focus area. Empty `module5` to `module8` directories do not add lesson sources to the 59 topic pages.

## Errors found while mapping

- Further graph transformations L02, `interpret-log-scales`, says that a 1 dB step multiplies intensity by 10 and a 3 dB step multiplies it by 1000. From its own `L=10 log10(I/I0)` formula, 10 dB gives a factor of 10; 3 dB gives `10^0.3`, about 1.995.
- Random variables L03, `work-normal-examples`, says that a weight exceeded by 90% has only 10% above it. It has 90% above and 10% below. Its calculation of about 243.6 g is correct.
- Integral L09 describes the integral of revenue minus cost across output as total profit. If these are total revenue and total cost functions, profit at a given output is their difference. Their integral across output has different units and is not the total profit claimed.

Claude owns the route decisions and design repairs. This crosswalk changes no site page, narration, lesson design or implementation.
