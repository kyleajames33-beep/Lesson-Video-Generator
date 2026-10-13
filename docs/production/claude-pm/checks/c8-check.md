# C8 independent fact check

Reviewed 13 October 2026: `../lessons/chem-m5-c08.md`, Status Revision 4.

SHA256: `8D855088AE7E7FCC4C465AB8BEF1BDFBD52AA8C19999E65BBD71A6FD82A1D1BD`.

Scope: quoted narration, planned on-screen text, key notes, memory aid, equations, particle counts and every numerical calculation. Compared with `../site-extracts/chem-m5-l12.md`, `../site-corrections.md` and the NSW Chemistry Stage 6 (2017) Module 5 direction-prediction content, ACSCH096. Read `c8-claude-science-check.md`, including its Resolution, after the independent analysis. No stills, implemented scenes or audio were checked.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| - | science | Narration, visual plan, notes and arithmetic | None found | None |
| - | syllabus | Lesson 12 comparison and Module 5 scope | None found | None |
| - | screen | No stills exist; screen inspection skipped | None found | None |
| - | copy | Narration and planned learner text, including U+2014 search | None found | None |

## Verification sources and scope record

The cached official 2017 syllabus extract, `out/research/curriculum/chemistry-2017-paragraphs.json`, p1077 and p1078, confirms the expression and direction-prediction scope. The [NSW Department of Education Module 5 page](https://sites.google.com/education.nsw.gov.au/khsstage6chemistry/year-12/module-5) also reproduces the ACSCH096 statement.

Independent calculation using the NIST Shomate data for [ammonia](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Mask=2787), [hydrogen](https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740&Mask=1) and [nitrogen](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=1) at 673.15 K gives Kc approximately 0.563 L^2 mol^-2 and Kp approximately 1.84 x 10^-4 atm^-2. These support the stated approximate magnitude near 0.5. The brief's conversion of 1.6 x 10^-4 atm^-2 gives Kc = 0.488; its mixture pressure is 60.76 atm. The exercise consistently uses its given K = 0.50.

Recomputed Q = 6.25, 256, 49, 16.333..., 12.25, 100 and 0.80, all rate ratios, conservation totals, concentration changes, dot counts, wrong-answer calculations and timing arithmetic. No numerical error found. The lesson deliberately excludes the site SO3 examples with inconsistent K = 270 and 280, and the CO + 3H2 example with K = 5.67 x 10^6. The requested site calculation 0.148^2 / (0.020 x 0.020) = 54.76 also checks.

Revalidation of the same Revision 4 hash: Q values and rate ratios were independently recomputed again; 49/6.25 = 7.84, 49/256 = 0.19140625, 256/49 = 5.22449 and 49/(0.49/0.030) = 3. The stated Kp conversion gives Kc = 0.488210 and the ideal-gas pressure is 60.7626 atm. Recalculation from the linked NIST Shomate coefficients reproduces Kp = 1.845 x 10^-4 atm^-2 and Kc = 0.56285 at 673.15 K. The [official 2017 syllabus PDF](https://kiama-h.schools.nsw.gov.au/content/dam/doe/sws/schools/k/kiama-h/content/learning-at-our-school/chemistry-stage6-syllabus-pdf.pdf), page 50, confirms the ACSCH096 calculation and prediction scope. No findings change.

Count: 0 findings (science 0, syllabus 0, screen 0, copy 0).
