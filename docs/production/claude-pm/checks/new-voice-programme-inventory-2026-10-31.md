# New-voice programme groundwork inventory

Brief 123. Checked 31 October 2026. Research only. Counts describe the local site checkout at `C:/Users/kygs/hscscience`, not the deployed site or approval to record. This report reuses briefs 49, 52, 61, 62 and 79 and the 25 October Physics/Maths work. Only this report was written. Root owns the status hand-in.

## 1. What exists, per subject

### Syllabus and implementation

| Programme | Official syllabus and implementation | Existing source fit |
| --- | --- | --- |
| Year 12 Maths | Mathematics Advanced, Extension 1, Extension 2 and Standard 11-12 (2024). Year 12 starts Term 4 2026, first HSC 2027. Advanced, Extension 1 and Standard Year 11 started Term 1 2026. | Advanced and Standard folder topics follow the new structure. Extension courses need an exact 2024 content crosswalk before their pages become a production route. |
| Year 11 Biology | Biology 11-12 (2025), Year 11 Term 1 2027; new Year 12 Term 4 2027, first HSC 2028. | Three new focus-area folders and the brief 45 ledger already exist. |
| Year 11 Maths | Advanced, Extension 1 and Standard 11-12 (2024), Year 11 Term 1 2026. Extension 2 is a Year 12 course. | Content-bearing pages already exist. The tangent starter is a Year 11 bridge, not the Year 12 opener. |
| Year 11 Physics | Physics 11-12 (2025), Year 11 Term 1 2027; new Year 12 Term 4 2027, first HSC 2028. | Three new focus-area folders exist. The visual library instead maps the outgoing 2017 Year 12 Modules 5 to 8. |

Official sources checked online: [Advanced](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview), [Extension 1](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview), [Extension 2 implementation](https://education.nsw.gov.au/teaching-and-learning/curriculum/mathematics/leading-mathematics-k-12/leading-mathematics-7-12/mathematics-extension-2-11-12-syllabus-information), [Standard](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview), [Biology](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/overview/course), [Physics](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/overview), and [NESA science implementation announcement](https://www.nsw.gov.au/education-and-training/nesa/news/all/new-science-11%E2%80%9312-syllabuses). Chemistry starts Year 11 in 2028, consistent with deferral. The site draft folder `_new-syllabus-2027/chemistry-2025` has a misleading name.

### Site lessons and existing plans

Counts are `.sa.html` lesson pages, grouped by their containing topic. Fresh checks reproduce brief 52's 701 Physics/Maths pages. All checked Physics/Maths and Biology Year 11 pages exceed 40 KB and contain neither literal `coming soon` nor `under construction`. This establishes content presence, not completed interactions or syllabus coverage. No obvious placeholder page was found. Missing syllabus actions remain unverified except for the prior Biology metadata mapping.

| Subject | Pages per topic or focus area | Existing route and research |
| --- | --- | --- |
| Year 12 Advanced | 59: further graph transformations/modelling 2; sequences/series 4; differential calculus 6; integral calculus 9; applications of calculus 9; random variables 10; financial mathematics 19. | `programme/physics-maths-feasibility.md`; `programme/syllabus/physics-maths-overview.md`; image bank `maths-plan.json`, `lesson-image-map.md`, `generation-queue.json`. These map 59 Year 12 lessons plus one Year 11 bridge, not an approved teaching order. |
| Year 11 Biology | 75: Cells as the basis of life 25; Cells to systems 25; Evolution and ecosystems 25. | `programme/year11-scoping.md`; `programme/syllabus/bio-new-y11.json`; 75 site extracts; `claude-pm/pre-design/y11-bio/` has 105 suggested packs: FA1 34, FA2 35, FA3 36, with `y11-bio-index.md`. Metadata matches 87 of 89 focus-area points exactly or closely, with candidate pages for both remaining equation points. Working scientifically needs its own coverage audit. |
| Year 11 Advanced | 103: algebraic techniques/inequalities 11; working with functions 23; graph transformations 7; trigonometry/angles 9; trig identities/equations 12; introduction to differentiation 16; exponentials/logarithms 10; probability/data 15. | Brief 52 feasibility and syllabus overview. `drafts/maths-secant-tangent-pack.md` is one reviewed starter pack. No complete Year 11 video route located. |
| Year 11 Extension 1 | 76: further trigonometry 31; further work with functions 15; permutations/combinations 11; polynomials 15; binomial theorem 4. | Existing site course; outside the 60-row Maths visual plan. No reviewed video route located. |
| Year 11 Standard | 56: formulas/equations 8; linear relationships 4; earning money 8; managing money 6; measurement 13; time/location 3; networks/paths/trees 6; data analysis 8. | Brief 52 and syllabus overview; no lesson-specific video route or kit located. |
| Year 11 Physics | 79: Fundamentals of mechanics 28; Waves 25; Electricity and magnetism 26. | Brief 52; `programme/syllabus/physics-maths-overview.md`. No new-course Year 11 video route located. The 70-row image bank and Physics course map cover Year 12, not these 79 pages. |

Paths in the last column are under `docs/production/` unless a `claude-pm/` path is stated. The image bank is `docs/production/claude-pm/assets/physics-maths-image-bank/`.

Brief 62 is complete and remains useful: `programme/y11-chem-new-site-review.md` records 75 Chemistry drafts, 45 content correction jobs, a shared broken footer and practical/visual gaps. This is a hold, not an untouched or unreviewed course. It does not need to be repeated for the new-voice launch.

### Code, pilots and plates

- Maths: `src/explainer/math/` has four files: `kit.tsx`, `pilot.tsx`, `pilot-entry.tsx`, `README.md`. Built primitives are `CoordinateAxes`, fixed-window `SquareGraph` and `AlignedAlgebra`. The 15-second silent tangent pilot was rendered, mathematically/still reviewed and observed in Chrome at normal speed; phone evidence is emulation, not a physical device. The reusable triangle guard was independently checked after repair. It is a familiarity demo, with no voiced lesson or release approval. `drafts/maths-secant-tangent-pack.md` has an independent source pass; secant and local-view implementation remain missing.
- Physics: `src/explainer/physics/` contains `course-kit.tsx`, model/diagram modules, player, catalog, verifiers and the original projectile pilot. `production-state.json` records 54 supporting visual families across 70 Year 12 2017 lessons: M5 22, M6 12, M7 10, M8 10, plus the original projectile kit. Ten mechanics details are included in the 54. Delivered evidence records 54 desktop and 54 phone stills, 84 boundary stills, 192 label-audit frames and five course silent samples, plus the original projectile sample. Source/still findings were closed; continuous human motion review, actual device reading and lesson-specific teaching/voice/captions remain pending. This work is built and reviewed within those limits, not abandoned or new-Year-11 coverage. `drafts/physics-horizontal-launch-pack.md` has a separate independent source pass but is not an implemented beginner lesson.
- Biology: existing Year 12 explainer cell, enzyme, DNA and division mechanisms may be adapted after checking the Year 11 pack's exact ownership. No dedicated completed new-course Year 11 voiced series was found. Brief 79 delivered 17 new plates: 15 for FA1 and two for FA2 L01/L02. All 17 local PNGs exist and their hashes match provenance. FA1 inventory resolves 25 recurring request groups through new plates, existing art or code. FA2 resolves two of 25 groups, with 23 pending; FA3 has packs but no brief79 plate completion claim. The hand-in records real alpha, measured margins, no text/people/hands and thumbnail inspection. That is asset QA, not owner lesson approval or independent science approval of every plate. See `assets/brief79-handin.md`, `brief79-inventory.json`, `brief79-fa2-inventory.json`, `brief79-provenance.json` and `brief79-qa/`.
- Physics/Maths image bank: 18 planned families and 26 proposed states support 27 of 130 lesson rows; 103 rows are coded-only. Maths has four context/reuse rows and 56 coded-only rows. The bank inventories 793 existing Biology/Chemistry PNGs, including versions, not approved families. No final transparent Physics/Maths batch is approved. The only executed batch has seven raw copper-tube outputs, with two reviewed shape candidates. Both are RGB white-background files and the slot edit changes texture outside the slot. Alpha, invariant transition and scene-size gates remain open. Retain the candidates and their checkpoint.

Fresh hash comparison: all 60 Maths and all 70 Physics lesson hashes in the image-bank plans still match the local site bytes. Earlier visual-purpose research remains current for that exact scope. This is not a new full maths/science review.

## 2. Maths courses

| Year 12 site course | Lessons and grouping | New-syllabus coverage position |
| --- | --- | --- |
| Advanced | 59, seven topics listed above. | New-structure organisation; exact content/action audit still required. Best-developed video groundwork. |
| Extension 1 | 109: further applications of calculus 20; further calculus skills 20; introduction to vectors 20; inverse trigonometric functions 4; proof by mathematical induction 20; binomial distribution 25. | Located at `subjects/maths-advanced/extension1/year12/`. Not in the image-bank plan; exact 2024 crosswalk missing. |
| Extension 2 | 86: module11 14; module12 16; module13 12; module14 12; module15 16; module16 16. | Located at `subjects/maths-advanced/extension2/year12/`. Legacy module names persist; do not certify 2024 coverage from count alone. |
| Standard | 63: algebraic relationships 6; investment/loans 15; annuities 3; trigonometry 8; ratios/rates 5; network flow 3; critical path 6; bivariate data 8; relative frequency/probability 4; normal distribution 5. | This topic set matches Standard 2 organisation. A separately complete Standard 1 lesson route was not located. Do not count these pages as two courses. |

Total Year 12 Maths source pages: 317. Course presence is established for all four choices; full new-syllabus teaching approval is not. No course priority is chosen here. The older `subjects/maths/` contains 1,721 generic HTML files in brief 52 but no senior-adventure pages; do not add them to the 317.

## 3. Visual kit gaps

Ranked within each course by available lesson counts. Topic totals are planning reach, not a claim that every page needs one new component. Exact per-capability counts below come from the existing Maths plan; Year 11 Physics/Biology do not yet have that detailed capability map.

| Priority and reach | Gap or reusable starting point | Earlier evidence |
| --- | --- | --- |
| Maths, broadest: algebra across the 317 Year 12 pages and Year 11 work | Keep existing aligned equals columns. Add stage-specific factors, cancellation, fractions, substitutions and retained givens only as required. `aligned-algebra` occurs in 17 of the 60 planned rows; this primitive exists. | Brief 52, Maths kit review, first-pack review. |
| Advanced: finance 19 pages | Cash-flow timelines, indexed balance/annuity cohorts, amortisation and recurrence tables. Six planned rows explicitly use cash-flow timelines. No general finance kit exists. | Maths plan; image-bank review. Raster cars cannot carry values or timing. |
| Advanced: calculus topics 24 pages, plus graph/modelling 2 | General functions with domains/asymptotes, secants/local zoom, signed area, between-curve regions, derivative sign/concavity and linked motion plots. Fixed square/tangent geometry is insufficient. Sign charts appear in four planned rows, signed area and between-curves in three each. | Brief 52; assessment review; Maths first-pack and kit reviews. |
| Advanced: random variables 10 pages; Standard data/probability/normal 17 | Discrete bars, density/CDF links, normal tail shading, quantile/standardisation and residual plots. The Physics axes are reusable ideas, not finished probability components. | Brief 52 and Maths plan. |
| Extension 1: vectors 20 pages; other extension topics 89 pages | Vector addition/projection, 3D geometry, proof/induction progression and specialised graphs. No complete extension kit or row-level need count exists. | Brief 52 identified vectors/geometry; later bank explicitly excludes extension courses. |
| Year 11 Physics: mechanics 28 pages | Adapt existing vector/trajectory/measurement primitives; new force diagrams, friction/contact, energy/momentum and current-case graph reasoning need an exact Year 11 map. | Brief 52; Physics kit review and module READMEs. |
| Year 11 Physics: electricity/magnetism 26 pages | Reuse field symbols with exact direction checks. Build general circuit nodes, parallel branches and meter connections. Existing field/motor families do not supply a Year 11 DC-circuit kit. | Brief 52; `physics-and-release-gate-2026-10-03.md`: legacy circuit is one series ring, with no valid parallel voltmeter. |
| Year 11 Physics: waves 25 pages | Reusable propagation, superposition, standing waves and displacement/time versus distance plots. Existing light interference families cover only some geometry. | Brief 52; current M7 README limits. |
| Year 11 Biology: FA1, FA2, FA3 each 25 pages | FA1 needs coded membrane transport, osmosis, cell-cycle/chromosome movements and cell-size scales. FA2 needs coded pressure/concentration flows, gas exchange, renal handling and feedback. FA3 needs population sampling, selection over generations, sequence/tree comparisons and ecosystem data. Existing artwork is context; every mechanism needs exact case/cue integration. | Brief 61 packs and brief79 inventories. Full engine-gap counts need a reuse audit, not a new blanket rebuild. |

## 4. Leftovers and conflicts

1. The earliest brief52 statement that no vector/field library exists is superseded by the later 54-family Physics kit. Its missing general Maths graph, secant, probability and circuit-branch findings still matter. Keep the report as dated research and point planning at current READMEs.
2. The original projectile kit and module5 trajectory are different solvers, not interchangeable duplicates. The former rejects the dropped/horizontal elevated case; the later model supports it. Preserve both and their stated conditions. The horizontal-launch pack explicitly chooses the latter.
3. The tangent pilot and longer secant starter pack are different products. The first is rendered recap geometry; the second teaches a beginner and remains unimplemented. Do not relabel the 15-second pilot as the complete lesson or a Year 12 opener.
4. The Year 12 Advanced site carries stale Year 11/module metadata in differential L01-L04 and integral L01-L02 titles. Integral L01/L04 also look like overlapping introduction candidates. Inspect bodies before consolidating; do not infer deletion from titles. Extension 2 keeps old module-folder labels and needs syllabus mapping. The site question-to-lesson fallback map remains unaudited.
5. `codex-interim-physics-maths-assessment-review.md` flags incorrect squared-speed flight-time wording in the site projectile sample, an invalid contact-count tangent definition, coincident-point wording and answer hints revealed before responses. The reviewed starter packs avoid those claims. No site correction was made in this task.
6. New work must use `src/explainer`; the older motion-standard instruction naming `LessonVideo.tsx` conflicts with the later frozen-engine rule. Use the current explainer policy. Legacy circuits/graphs supply calculation ideas only. Do not silently remove legacy files or old release evidence.
7. The brief79 contract excludes people, faces, hands and baked labels. Its hand-in records that check; this report did not re-review all images visually. Copper-tube candidates have no baked labels but fail final transparency delivery. No blanket approval of the 793 inventoried older PNGs is justified. Burned caption bands documented in historical Biology/Chemistry MP4s are release presentation problems, not assets to reuse as clean new lessons.

### The reported 74 MB of untracked Physics work

Fresh `git ls-files --others --exclude-standard src/explainer/physics` finds **280 files, 40,218,276 bytes (40.22 MB, 38.36 MiB)**. The stated 74 MB is not reproduced. Ignored bundle/public/font copies are excluded by that command and were not treated as source.

| Files | Bytes | Recommendation |
| --- | ---: | --- |
| 208 PNGs | 34,185,582 | Retain and archive exact reviewed stills/contact sheets with a hashed manifest. Avoid putting every generated frame in source history. |
| Six silent MP4s | 5,190,388 | Retain as existing review evidence in media storage/checkpoint. They are five course samples plus the projectile pilot, not six released lessons. |
| 26 TS/TSX source files | 133,320 | Commit after root review and explicit owner authorisation; useful current kit/model work, not disposable temp files. |
| 11 MJS plus one Python helper | 31,556 | Commit maintained source verifiers/render helpers with the kit. Running them is a separate action. |
| Nine Markdown, 14 JSON | 195,662 | Keep READMEs/state and exact map/review metadata. Separate reproducible audit outputs into the media/evidence archive if desired, retaining hashes and links. |
| Two HTML and one JS | 481,674 | Generated gallery is reproducible. Archive a frozen reviewed gallery or regenerate after source is safely recorded; no immediate deletion needed. |
| Two extensionless files | 94 | Local `.gitignore` and projectile `.gitignore`; retain/commit relevant exclusions. |

No source was staged, committed, moved, archived or deleted. Recommend no deletion before an independently verified restore/checkpoint. Untracked does not mean abandoned; the state record and independent reviews establish substantial useful work.

## 5. Suggested first route (Year 12 Maths only)

Conditional draft for Claude if the owner chooses Advanced first. Start with Year 11 differentiation, exponentials/logarithms and trig/radians already learned. Offer the reviewed secant bridge separately to students missing those prerequisites. This is an opening differential-calculus strand, not a claim that every school must teach topics in this order. This draft contains no narration or scene design.

The rows use the existing route's identity, learner-question, entry, boundary and next-handoff concepts. Exact syllabus action IDs and source sections must be attached when Claude makes the route JSON. Site paths below are under `maths-advanced/year12/`.

| Order / candidate ID | Main learner question | Entry; start/stop boundary; next handoff | Site candidate |
| --- | --- | --- | --- |
| 1 / math-a12-d01 | Why does e to the x keep its own derivative? | Knows derivative meaning and exponential graphs; connect changing slope with e to the x, stop before product/chain cases; next scaled exponential. | differential-calculus/L01 |
| 2 / math-a12-d02 | How do we differentiate an exponential with any positive base? | Knows e derivative and logs; rewrite with ln a, stop at simple a to the x; next log slope. | differential-calculus/L02 |
| 3 / math-a12-d03 | Why is the slope of ln x equal to one over x? | Knows ln as inverse and derivative meaning; positive-domain simple cases, stop before composite logs; next base change. | differential-calculus/L03 |
| 4 / math-a12-d04 | How does changing the logarithm base change its derivative? | Knows ln derivative and base change; simple log-base derivatives with domain retained; next trig derivatives. | differential-calculus/L04 |
| 5 / math-a12-d05 | What do the derivatives of sine and cosine tell us about their graphs? | Knows radians and trig graphs; connect slopes and simple derivatives, stop before composite functions; next chain rule. | differential-calculus/L05 |
| 6 / math-a12-d06 | How do we differentiate a function inside another function? | Knows standard derivatives; identify inner/outer rates and one current chain-rule case, stop before products; next product rule. | differential-calculus/L06 |
| 7 / math-a12-d07 | Why can we not differentiate a product by multiplying derivatives? | Knows standard and chain derivatives; product rule and a transfer example, stop before fractions; next quotient rule. | differential-calculus/L06 |
| 8 / math-a12-d08 | How do we differentiate a quotient without losing a term? | Knows product/chain rules; quotient reasoning and staged example, stop before mixed extended applications; next increasing/decreasing. | differential-calculus/L06 |
| 9 / math-a12-d09 | How does the derivative tell us where a function increases or decreases? | Knows derivative sign and new rules; connect sign chart to intervals, stop before optimisation decisions; next optimum. | applications-of-calculus/L01 |
| 10 / math-a12-d10 | How do we know which candidate gives the required maximum or minimum? | Knows derivative sign and domain; compare valid stationary/end candidates in one focused case, stop before mixed optimisation catalogue; next applied optimisation. | applications-of-calculus/L01 |

`LNN` means `lessonNN.sa.html`. Reordering is a planning recommendation, not a new approved route. Root/Claude still needs to choose Advanced versus Extension/Standard first, confirm each 2024 content boundary, check the actual examples and make one formal brief per video.
