# G03 Revision 3 fact check

Checked `chem-m5-g03.md` at SHA-256 `277CDC138F295E79A60CAA3C3CCA52909E6D663B79B713FAB109979274B1EEEB`. No stills or audio exist for this design. I recomputed the direct K, ICE, Q, quadratic roots, both shortcut tests, large-K case, steam addition and solid-carbon attempt from the question data. I compared the authored solid-carbon task with the [2023 NESA paper, Question 37](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2023-hsc-chemistry_20240318.pdf) and the steam-addition task with the [2024 NESA paper, Question 30](https://www.nsw.gov.au/sites/default/files/noindex/2025-05/2024-hsc-chemistry.pdf). Both use different numbers and final conditions from the official tasks. The other authored question labels are present. The [2017 Chemistry syllabus](https://test.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-science/chemistry-2017) was used for the course-version check.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 8b Visual: `x^3 = 0.040 / 4.0 x 10^10 = 1.0 x 10^-12` | Without brackets, the written multiplication and division give `1.0 x 10^8`, not `1.0 x 10^-12`; the intended result is correct only when the entire `4.0 x 10^10` is the divisor. | Write `x^3 = 0.040 / (4.0 x 10^10) = 1.0 x 10^-12`. |
| 2 | science | Scene 8a Visual tag: `K much larger than the start, so almost nothing splits` | K for this equation and the starting concentration have different units, so they cannot be compared as sizes. | Write `K is very large; test how little SO3 splits` and keep the numerical test in 8c. |

Syllabus: None found. Screen: no stills exist, so no still-frame finding. Copy: None found.

2 findings.
