# Maths Standard Year 11: design status for the missing strands (23 November 2026)

Written by Claude (designer of record) for root, answering the coherence audit's blockers B1 and B2 (`checks/maths-standard-coherence-audit-2026-11-23.md`, `checks/maths-standard-coverage-map-2026-11-23.md`). New files only; no existing design, ruling, site-corrections file, board or site file was edited. Nothing was voiced, built or rendered.

## 1. What was designed in this batch

**Managing money: complete (9 of 9 outline videos, 13 of 13 content points).**

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| m01 | Percentage Change, Profit and Loss | `cib256693a` | 5,651 | 514 s | none |
| m02 | GST and VAT: Adding and Removing the Tax | `cib3251328`, `cib09c3969` | 5,487 | 498 s | none |
| m03 | Buy Now, Pay Later: What It Really Costs | `cif403be54` | 5,537 | 502 s | none |
| m04 | Buying on Terms and Choosing How to Pay | `ci6124d502`, `ci039eaed1` | 5,603 | 508 s | `ms11-fridge-v1.png` |
| m05 | Buying a Car: Stamp Duty, Rego and Insurance | `ci5b329382` | 6,250 | 560 s | none |
| m06 | Running a Car: Yearly Costs in a Spreadsheet | `ci9d6326d6`, `ci61920f78` | 6,242 | 562 s | (needs m07's electricity meter for its final frame) |
| m07 | Household Bills: Electricity, Water and Gas | `ci345de108` | 5,790 | 522 s | `ms11-electricity-meter-v1.png`, `ms11-water-meter-v1.png` |
| m08 | Building a Budget, on Paper and in a Spreadsheet | `ci03b1617b`, `cidfff72ec` | 5,638 | 515 s | none |
| m09 | Saving, Emergency Funds and Tracking Spending | `ci3d78450e` | 5,532 | 511 s | none |

Files (all new):
- Route input: `../programme/maths-standard-route-inputs-10.json` (route inputs 10: the m-strand entries, boundaries, colour roles, recurring models, memory aids, anchors and a "year12DependsOn" block, per audit B2).
- Packs: `pre-design/maths-standard/math-s11-m01.md` to `m09.md`.
- Designs: `lessons/math-s11-m01.md` to `m09.md`, each "Revision 1 (23 Nov 2026): first design ... Not voiced. Next: student learning review and Codex maths check".
- Site findings: `site-corrections-maths-standard-y11-additions.md` (MSY-01 to MSY-09).

Checks run: every number recalculated with exact decimal arithmetic (scratchpad `s11m/verify.py`, `python -I`); narration counted with `work/brief-review-s11-e/count.py` (the e-strand parser); no em dash in any new file; every attempt ends "Pause here to answer."; feedback 16.8 s to 28.7 s (all under 30 s); all nine under the 570 s cap (m05 and m06 are tight, 8 to 10 s spare, with named reserve trims). Joins: m01 opens on e12's final frame exactly; each mN's handoff frame is quoted word for word in m(N+1)'s Boundary; m09 hands to a01 provisionally (as e12 did to m01).

**Not designed in this batch:** Applications of measurement (a01 to a11), Time and location (t01 to t06), Networks, paths and trees (n01 to n07), Data analysis (d01 to d19), optional x01 and x02: 43 videos. Section 3 gives the course-level plan and the Year 12 recall list for each, so the next designer can start from it.

## 1a. Second batch (24 November 2026): Applications of measurement complete

**Applications of measurement: complete (11 outline videos as 12 designs, 13 of 13 content points).** a05 is split into a05a and a05b (both playlist 41; open question 10).

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| a01 | Units of Measurement: Length, Mass and Capacity | `ci29461234`, `ci9035ede7`, `ci529c4c4e` | 5,732 | 521 s | none |
| a02 | Converting Units of Area and Volume | `ci2d6e3fa8`, `cid416990e` | 5,607 | 512 s | none |
| a03 | Volume and Capacity: cm³ to mL, m³ to kL | `ci880a544f` | 5,542 | 508 s | none |
| a04 | Metric Prefixes and Powers of Ten: Nano to Tera | `ci7526e53a` (site: none) | 6,055 | 545 s | none |
| a05a | Perimeter and Area: Rectangles, Triangles, Trapeziums | `ci139f00a0` (straight-edged share) | 5,534 | 508 s | none |
| a05b | Circles, Arcs and Sectors: Perimeter and Area | `ci139f00a0` (circles, sectors, curved composites) | 5,692 | 518 s | none |
| a06 | Pythagoras' Theorem: Finding a Missing Side | `cib49e1f1d` | 5,581 | 510 s | none |
| a07 | Irregular Blocks of Land: Area and Perimeter | `ci05a36ac3` | 5,697 | 518 s | none |
| a08 | Surface Area of Prisms, Cylinders and Spheres | `ci5c8f765b` | 5,613 | 512 s | none |
| a09 | Volume and Capacity of Prisms and Cylinders | `ci6e07f2cb` (prisms, cylinders) | 5,672 | 516 s | none |
| a10 | Volume of Pyramids, Cones and Spheres | `ci6e07f2cb` (pyramids, cones, spheres) | 5,583 | 510 s | none |
| a11 | The Trapezoidal Rule: Estimating Area and Volume | `ci3786e651` | 5,737 | 521 s | none |

Files (all new): route input `../programme/maths-standard-route-inputs-11.json` (entries, joins, colour roles, recurring models, memory aids, anchors, facts for Codex, "year12DependsOn"); packs `pre-design/maths-standard/math-s11-a01.md` to `a11.md` (with `a05a`, `a05b`); designs `lessons/math-s11-a01.md` to `a11.md` (with `a05a`, `a05b`), each "Revision 1 ... Not voiced"; site findings MSY-10 to MSY-21 appended to `site-corrections-maths-standard-y11-additions.md` (section 2); kit and plate needs for m and a in `maths-standard-y11-kit-and-plate-needs.md`.

Checks run: every number recalculated (scratchpad `s11a/verify.py`, `python -I`, 0 failures; later-added values checked inline); narration counted with `work/brief-review-s11-e/count.py` (all 12 between 5,534 and 6,055 characters, 13 scene headings each, all under 570 s with 25 to 62 s spare); feedback 17.1 s to 28.8 s (all under 30 s); every attempt ends "Pause here to answer."; no em dash in any new file; every plate used was viewed on a contact sheet. Joins: a01 opens on m09's final frame exactly (m09's provisional mark can be lifted); each "Next" chip quotes the next design's on-screen heading; a11 closes the strand ("Applications of measurement: done") and hands to t01 provisionally (the wall clock and stopwatch, "60 s = 1 min", "60 min = 1 h").

Year 12 recall set up word for word: "1 L = 1000 mL" (r01), "1 mm = 0.001 m" (r08), "1 km = 1000 m" (r10) in a01; "1 ha = 10 000 m²" (t09) in a02; "1 m³ = 1000 L" (r08) in a03; "kilo = 1000" (r14) in a04; "area = ½ × base × height" (t09) in a05a; "the hypotenuse is the longest side, opposite the right angle" (t01a, t03, t08) in a06; "areas by splitting into shapes" (r07) in a07; d_f, d_l and h spoken and labelled as r07 recalls, and "on the reference sheet", in a11 (the "ends once, middles twice" shortcut and the word "offset" are left to r07).

## 1b. Third batch (24 November 2026): Time and location complete

**Small edits first (requested by root).** (1) `lessons/math-s11-m09.md` and its pack: every "provisional" mark on the m09 to a01 join lifted (a01's Boundary opens on m09's frame exactly); the YouTube "Next" line now reads "Next: Units of Measurement: Length, Mass and Capacity." (a01's title and heading); open decision 1 closed. (2) `lessons/math-s11-a11.md` and its pack: the a11 to t01 join confirmed by t01's Boundary; "provisional" marks lifted; the YouTube "Next" line now quotes t01's title; open decision 1 closed. Route inputs 11's two "provisional" mentions of t01 were updated to "confirmed".

**Time and location: complete (6 of 6 outline videos, 8 of 8 content points).**

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| t01 | Seconds, Minutes, Hours and 24-Hour Time | `cic8bbf9d6`, `cicd3af9e2` | 5,750 | 515 s | none |
| t02 | Elapsed Time: Timetables, Shifts and Midnight | `cia32b799a` | 5,629 | 502 s | none |
| t03 | Latitude and Longitude: Finding Any Place on Earth | `ci922e564d` | 6,048 | 536 s | `ms11-desk-globe-v1.png` |
| t04 | Longitude and Time: 15 Degrees Is One Hour | `cib18a3d4b` | 5,541 | 502 s | none (t03's globe) |
| t05 | Australian Time Zones and Daylight Saving | `cidfef63ed` | 5,514 | 496 s | none |
| t06 | UTC: Solving International Time Problems | `ci840445ac`, `ci9f3c20ba` | 5,632 | 506 s | none |

Files (all new): route input `../programme/maths-standard-route-inputs-12.json` (entries, joins, colour roles, recurring models, memory aids, anchors, facts for Codex, "year12DependsOn"); packs `pre-design/maths-standard/math-s11-t01.md` to `t06.md`; designs `lessons/math-s11-t01.md` to `t06.md`, each "Revision 1 ... Not voiced"; site findings MSY-22 to MSY-27 in `site-corrections-maths-standard-y11-additions.md` (section 3; the n and d placeholder moved to section 4); kit and plate rows in `maths-standard-y11-kit-and-plate-needs.md`.

Checks run: every number recalculated (scratchpad `s11t/verify.py`, `python -I`, 0 failures); every syllabus quote asserted against the crosswalk while writing route inputs 12; narration counted with `work/brief-review-s11-e/count.py` (all six between 5,514 and 6,048 characters, 13 scene headings each, all under 570 s with 34 to 74 s spare); feedback 16.5 s to 27.1 s; every attempt ends "Pause here to answer."; no em dash in any new file; every plate used was viewed on a contact sheet. Joins: t01 opens on a11's final frame exactly; each "Next" chip quotes the next design's on-screen heading (time units, elapsed time, latitude and longitude, longitude and time, Australian time zones, UTC); t06 closes the strand ("Time and location: done") and hands to n01 with a coded flight-route map (7 city dots, 10 example routes), provisional until n01 is designed.

Year 12 recall set up word for word: "1 h = 60 × 60 s = 3600 s" with "60 × 60" visible (r10's "Year 11: 60 × 60") in t01 scene 2, key note 1 and the memory card; minutes ÷ 60 for decimal hours (r10, r12a) in t01 scene 4; 60 minutes in a degree said once in t03 (Year 12 t02 teaches the DMS key).

Site decisions: lesson01's "add 2400, then subtract" replaced by counting up (MSY-22); lesson01 Q3's flight without zones not used (MSY-23); lesson03's digital-tools gap filled (MSY-24); lesson03's rounding (MSY-25); lesson02's London-in-July error corrected in t06 (MSY-26); daylight-saving dates and the summer gap table added in t05 (MSY-27).

## 1c. Fourth batch (24 November 2026): Networks, paths and trees complete

**Networks, paths and trees: complete (7 of 7 outline videos, 10 of 10 content points).** n01 confirms t06's frame (t06's provisional mark lifted; route inputs 12 updated).

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| n01 | Networks: Dots, Lines and Real-World Maps | `ci4513c403`, `ci2d693812` | 5,520 | 496 s | none |
| n02 | Network Words: Degree, Directed and Weighted | `cica79bb9b` | 5,573 | 500 s | none |
| n03 | Drawing Networks from Tables and Maps | `ci022052d4`, `ci51fdc3e5` | 5,558 | 501 s | none |
| n04 | Paths, Trees and Spanning Trees | `ci0eb52b4b` | 5,475 | 493 s | none |
| n05 | Minimum Spanning Trees: Connecting Everything for Less | `cicce79437`, `cif65754dc` | 5,495 | 496 s | none |
| n06 | Shortest Paths: The Quickest Route Through a Network | `ci5aa7836f` | 5,526 | 500 s | none |
| n07 | When the Shortest Path Isn't the Best Path | `ci53383df4` (site: none) | 5,545 | 498 s | none |

Files (all new): route input `../programme/maths-standard-route-inputs-13.json`; packs `pre-design/maths-standard/math-s11-n01.md` to `n07.md`; designs `lessons/math-s11-n01.md` to `n07.md`, each "Revision 1 ... Not voiced"; site findings MSY-28 to MSY-32 in `site-corrections-maths-standard-y11-additions.md` (section 4; the Data analysis placeholder is now section 5); kit rows in `maths-standard-y11-kit-and-plate-needs.md`.

Checks run: every network value recomputed by search (scratchpad `s11n/verify.py`, `python -I`: shortest paths by a labelling search, minimum spanning trees by Kruskal, degrees, route totals; 0 failures), with MST uniqueness and the camp's 21 spanning trees confirmed by listing; every syllabus quote asserted against route inputs 13 (built from the crosswalk); narration counted with `work/brief-review-s11-e/count.py` (5,475 to 5,573 characters; 13 scene headings each; all about 493 to 501 s, 69 to 77 s spare); feedback 16.8 s to 28.8 s; every attempt ends "Pause here to answer."; no em dash in any new file (en dashes are used only for edge names such as A–B, as in Year 12 c01a). One check caught and fixed a route claim in n02 (Café back to Bakery is 6 min via the Pharmacy, not 9 via the Depot).

Year 12 recall set up word for word: "arrows with directions and weights" (c01a's chip) as a hand tag and spoken in n02 scene 5; "directed, weighted network" (f01's chip) as a row in n02 scene 5 and spoken in n03 scene 5; a network drawn from a table (c01a, c02, f01) in n03; "shortest path" as the least total weight between two vertices (c03's contrast) in n06, with the critical path not mentioned.

Joins: each "Next" chip quotes the next on-screen heading (networks; degree, direction and weight; networks from tables and maps; paths, trees and spanning trees; minimum spanning trees; shortest paths; when shortest isn't best). n07 closes the strand ("Networks, paths and trees: done") and hands to d01 with a survey phone ("How many hours did you sleep last night?"), provisional until d01 is designed; its YouTube "Next" line waits for d01's title.

Site decisions: lesson02 and lesson03 (2017 content) used only for the degree sum and the path definition; the name Dijkstra and ∞ are not used (site advice; Standard pace); Kruskal's method taught, Prim's shown once (the point says "any method"); MSY-28 to MSY-32 cover the thin or missing points.

## 1d. Fifth batch (24 November 2026): Data analysis complete (d01 to d19 as 20 designs, in four groups)

**Root rulings on the fourth batch (recorded here, 24 Nov 2026).** (1) t05 stays as designed: the Australian zones are taught as gaps between cities, and UTC offsets are left to t06 (closes section 4 item 14 (c)). (2) The n-strand choices are approved: loops in one sentence (n02), Kruskal and Prim named once (n05), "–" in the labelling table (n06), no adjacency matrices (n03) (closes item 15 (c)). (3) n07's description link to the site's shortest-paths lesson (lesson06) is fine (closes item 15 (d)).

**Small edit first: the n07 to d01 join.** d01 confirms n07's provisional frame unchanged (the survey phone, "How many hours did you sleep last night?", buttons "under 7", "7 to 8", "8 to 9", "over 9"): its overlapping buttons and "last night" become d01's hook. In `lessons/math-s11-n07.md` every "provisional" mark on the join was lifted (status line, Decisions, Handoff line, scene 12 and 13 visuals, kit row, error-check item 5, open decision 1, now closed) and the YouTube "Next" line quotes d01's title ("Statistical Investigations: Asking a Clear Survey Question"); no narration or picture changed. The n07 pack and route inputs 13 were updated to "confirmed".

**Data analysis, first group: 9 designs for outline videos d01 to d07 plus d08 (d06 split), 16 of 38 content points.**

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| d01 | Statistical Investigations: Asking a Clear Survey Question | `ci22ad0284`, `cie24b93fc` | 5,594 | 503 s | none |
| d02 | Privacy, Bias and Ethics in Surveys | `ci63195120` | 5,766 | 515 s | none |
| d03 | Sampling Methods and Representative Samples | `ci3d27ce1c`, `ciefb0c944` | 5,528 | 497 s | none |
| d04 | Faults in Data Collection: Experiments vs Observation | `ci4c7cc505` | 5,643 | 505 s | none |
| d05 | Types of Data: Numerical and Categorical | `cic8a0b6e9`, `ci038853db`, `cic17a10b5`, `ci87535c02` | 5,521 | 498 s | none |
| d06a | Grouping Data: Frequency Tables and Histograms | `cib752696f`, `cia7a007a6` (frequency table, histogram, polygon by hand) | 5,548 | 501 s | none |
| d06b | Cumulative Frequency: Tables, Histograms and Polygons | `cia7a007a6` (cumulative parts; digital tools) | 5,528 | 499 s | none |
| d07 | Choosing a Graph: Column Graphs and Spreadsheet Charts | `cic1f6796f`, `ci01aceb17`, `cia127389f` | 5,561 | 501 s | none |
| d08 | Reading Statistical Graphs: Dot Plots to Divided Bars | `cib2984676` | 5,566 | 501 s | none |

Files (all new): route input `../programme/maths-standard-route-inputs-14.json` (entries d01 to d08, the strand plan, colour roles, recurring models, memory aids, anchors, facts for Codex and the full "year12DependsOn" block; later entries are appended as designed); packs `pre-design/maths-standard/math-s11-d01.md` to `d08.md` (with `d06a`, `d06b`); designs `lessons/math-s11-d01.md` to `d08.md` (with `d06a`, `d06b`), each "Revision 1 ... Not voiced"; site findings MSY-33 to MSY-40 in `site-corrections-maths-standard-y11-additions.md` (section 5, replacing the placeholder); kit rows d01 to d08 in `maths-standard-y11-kit-and-plate-needs.md`.

Checks run: every number recalculated with exact fractions (scratchpad `s11d/verify.py`, `python -I`: the sleep sample, the screen-time classes and running totals, the strata, every attempt, and the site's lessons 02, 07, 09 to 13); every syllabus quote in the designs asserted against the crosswalk text (scratchpad `s11d/quotes.py`); route inputs 14 generated from the crosswalk with a coverage check; narration counted with `work/brief-review-s11-e/count.py` (5,521 to 5,766 characters; 13 scene headings each; 497 to 515 s, 55 to 73 s spare); feedback 17.9 s to 26.5 s; every attempt ends "Pause here to answer."; no em dash in any new or edited file (en dashes only in class labels such as "60–<120" and price ranges). Every plate used was viewed on contact sheets.

**Course-level decisions for Data analysis.**
- **One investigation runs through the strand.** Year 11 sleep on school nights and where phones charge: question (d01), fair survey (d02), stratified sample of 20 (d03; 14 nearby, 6 bus of 200), faults and an honest claim (d04), the record sheet classified (d05), displays (d06a to d10), then d11 to d19 analyse the 20 sleep values (sorted 3, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7, 7.5, 7.5, 7.5, 7.5, 8, 8, 8, 8.5, 8.5, 9, 9.5: mean 7.2, median 7.5, mode 7.5, Q1 6.5, Q3 8, IQR 1.5, σ 1.39, the 3 an outlier below 4.25; phone in bedroom 12 against elsewhere 8). The status file's plan note ("reuse one dataset across d11 to d19") is met by this sample. Grouping uses a separate class of 30's screen times (d06a, d06b), because 20 half-hour values don't need grouping.
- **d06 split** into d06a and d06b (both playlist 66) by ruling 8's test (open question 16).
- **Year 12 words set up early.** b03's plain meanings in d04 word for word; p05's "tally" and "frequency table" in d06a; p07's "categorical data in tables" (with a two-way table) and b06's "spreadsheet charts" in d07; p08's "random and self-selected samples" in d03; b01's dot plot read in d08.
- **Colour roles** fixed for d01 to d19 (route inputs 14): values blue; counts and bars olive; mean teal; median and quartiles violet; spread and fences amber; categories violet; answer green; mistake red.
- **Header strip:** "DATA ANALYSIS" only.

Site decisions: lessons 02 and 09 used for definitions and sampling; their sensitive contexts (a nightclub drug-use survey, blood types, pain levels) are not used; stratifying by gender is replaced by where students live; lesson12's frequency density is not taught (beyond the Standard syllabus); MSY-33 to MSY-40 cover the missing points (questionnaire design, privacy and ethics, experiments, spreadsheets, the polygon and cumulative graph, four unnamed displays) and the small errors (a call-in item; "discrete = whole numbers"; Year 12 labels on a Year 11 page).

**Second group added (24 Nov 2026): d09 and d10, which complete the displays (d05 to d10).** 21 of 38 content points now have a design.

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| d09 | Shape of a Distribution: Skewed, Symmetric, Bimodal | `ci0c94e728`, `cie2345a02` | 5,539 | 499 s | none |
| d10 | Infographics and Misleading Graphs | `ci2c2bc777`, `ci9c22fcc3`, `ciebdc8d60` | 5,568 | 502 s | none |

Same checks as above (numbers in scratchpad `s11d`; quotes asserted; 13 scene headings; feedback 19.0 s to 23.5 s; no em dash). Route inputs 14 now carries d01 to d10; MSY-41 and MSY-42 added; kit rows d09 and d10 added. Year 12 recall set up: z01's "symmetric", "skewed", "positively skewed" and "tail" with z01's plain meanings word for word (d09); p08's "misleading displays" (d10). d10 shows the two groups' averages (6.6 and 8.1 h) as given poster values before d11 teaches the mean (d10 open decision 1).

**Third group added (24 Nov 2026): d11 to d14, measures of centre and spread.** 28 of 38 content points now have a design (`ci6dfbf5c5` is shared by d12 and d14, as the outline plans: centre in d12, spread in d14).

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| d11 | Mean, Median and Mode | `ciaf232c38` | 5,513 | 498 s | none |
| d12 | Choosing a Measure of Centre: Mean, Median or Mode? | `ci1ce7c84d`, `ci6dfbf5c5` (centre) | 5,509 | 497 s | none |
| d13 | Range and Standard Deviation | `ci5bdca88b`, `ci14ad4af7` | 5,541 | 500 s | none |
| d14 | Comparing Datasets: Centre, Spread and Spreadsheets | `ciabf18f84`, `ci6dfbf5c5` (spread), `ci6446263f` | 5,512 | 497 s | none |

Same checks as above (exact fractions in scratchpad `s11d/stats.py`; quotes asserted; 13 scene headings; feedback 18.9 s to 27.4 s; no em dash). Route inputs 14 now carries d01 to d14; MSY-43 to MSY-45 added (including two site arithmetic errors: lesson11 SA 1 (c)'s IQR and lesson07 WE's ranges); kit rows d11 to d14 added.

Year 12 recall set up word for word: "the mean = total ÷ how many" (b04a) said and written before x̄ in d11; the dot plot, mean and median together (b01) in d11; "measures of centre" (z01) in d11; "the mean is pulled towards the tail" (z01) in d12; "the calculator's statistics mode" (b05) named in d13 scene 5 (first met for x̄ in d11, because d11's point requires a calculator; d11 open decision 1), with σ read from the σx line (z02) and σ described as "how far values usually sit from the mean" (z01's "how spread out"); σ is the population standard deviation by calculator only, as the 2024 point says (no formula by hand).

**Fourth group added (24 Nov 2026): d15 to d19, quartiles, box plots and outliers. Data analysis is complete: 19 outline videos as 20 designs, 38 of 38 content points** (`cia7a007a6` shared by d06a and d06b; `ci6dfbf5c5` by d12 and d14, as the outline plans). Year 11 Standard now has a design for every outline video except the optional x01 and x02.

| Id | Title (draft) | Points | Narration (chars) | Est. length | New plates |
| --- | --- | --- | --- | --- | --- |
| d15 | Quartiles, the Five-Number Summary and the IQR | `ci3247f05b`, `ci955be675`, `cib3d54f04` | 5,502 | 497 s | none |
| d16 | Box Plots: Drawing and Reading Them | `ci4c0893da`, `ci2d7c794d`, `cic5161f3b` | 5,538 | 499 s | none |
| d17 | Parallel Box Plots: Comparing Two Groups | `cia0dff040` | 5,568 | 502 s | none |
| d18 | Clusters, Gaps and Outliers | `ci72ffda24`, `ci02be1794` | 5,522 | 498 s | none |
| d19 | The Effect of an Outlier on Centre and Spread | `ci38858a7c` | 5,508 | 497 s | none |

Same checks as above (halves-method quartiles and fences in scratchpad `s11d/stats.py`; every syllabus quote asserted; 13 scene headings each; feedback 21.7 s to 28.1 s; no em dash). Strand-wide checks: every "Next" chip in n07 and d01 to d18 matches the next design's on-screen heading (scripted check); every YouTube "Builds on" and "Next" line quotes the neighbouring titles; route inputs 14 covers all 38 points (scripted coverage check); all 20 designs run 497 to 515 s (55 to 73 s spare) with 5,502 to 5,766 characters. Data analysis needs no new plate. MSY-46 and MSY-47 added (lesson13's WE 2 stray line and SA 2 outliers inside their own fences; lesson10's "leaves the median unchanged").

Year 12 recall set up: b02's outlier as "a value well away from the rest of the data" (d18), before the fences. The d strand's year12DependsOn block in route inputs 14 now names the scene for every recall (b01, b02, b03, b04a, b05, b06, p05, p07, p08, z01, z02, z03).

**Year 11 close and the Year 12 hand-off.** d19 closes the strand ("Data analysis: done") and Year 11 ("Year 11: done") and hands to Year 12 Standard's first video, a01 ("Solving Simultaneous Equations with Graphs"). a01 opens cold on the driving-school car and two quote cards; d19's final frame shows that same picture (copied from a01 scene 1, read only) with the chips "Next: Year 12, simultaneous equations" and "?". No math-s12 file was edited (open question 19).

## 2. Course-level decisions made for Managing money

- **e12 to m01 join confirmed.** m01 opens on e12's scene 11 frame exactly (swing tag "+3%", "Earning money: done", "Next: prices go up too"). Ruling 87's "provisional" marks in e12 can be lifted; e12's description "Next" line can quote "Percentage Change, Profit and Loss" (root edit, not made here).
- **Audit N4 (percentages before m01).** m01 opens as a callback to e10's 2% levy (× 0.02) and e03's commission; "a percentage of an amount" is not retaught.
- **Reverse percentages taught once, in m02** (÷ 1.1 for GST), not in m01.
- **Audit N5.** m03 uses headphones and a t-shirt, never i12's e-bike, console or loan comparison; it teaches "total = price + account fees + late fees" (i12's "Year 11 rule") and "free only while every payment is on time" (i12's key line echoes it).
- **One car, one house, one budget.** e02's red hatchback ($14,990) is bought in m05 (drive-away $16,645) and run in m06 ($5,408 a year = $104 a week); the share house's bills in m07 ($761.21 a quarter) and the car's $104 feed m08's weekly budget (surplus $233); m09 sizes the emergency fund from m08's groups ($502 a week of living expenses) on the car-hoist plate that Year 12 i18 reuses.
- **Colour roles** fixed for m01 to m06 (price blue, rate amber, total teal, extra cost violet) and m07 to m09 (income teal, fixed blue, essentials olive, discretionary violet, surplus green).
- **Prices:** ruling 47's petrol ($2.25) and electricity (33c/kWh) reused; NSW stamp duty at the current table; every other fee or price labelled "example" with a Codex source step.
- **Header strip:** "MANAGING MONEY" only, following the owner rule of 23 November (no course labels or module numbers on screen). See open question 1.

## 3. Year 12 recall list per focus area (audit B2) and the plan for the rest of Year 11

Each block lists the Year 12 designs that recall the Year 11 strand, the exact chip or phrase they use, and what the Year 11 video must set up. Playlist order after Managing money (36): Applications of measurement 37 to 47, Time and location 48 to 53; Networks 54 to 60 and Data analysis 61 to 79 run as parallel strands; x01 and x02 optional.

### 3.1 Managing money (designed; recall set up)

| Year 12 design | Recall chip or phrase | Set up in |
| --- | --- | --- |
| a04a | "profit and loss"; P = R − C | m01 scene 6 ("Businesses often call these revenue and cost") |
| a05, a06 | percentage change; rent up 4% a year | m01 multiplier |
| i01 | "a percentage of an amount; 6% = 0.06" | m01 scene 2 chip "% ÷ 100 = decimal" |
| i02a | "Year 11: a 5% increase is × 1.05" | m01 scene 2 ("Up 5%: × 1.05"), key note 1 |
| i06a, i06b | "% change = (last − first) ÷ first × 100%" | m01 scene 5 |
| i07 | "0.12% = 0.0012"; fees; buying costs | m01, m02, m05 |
| p01, p06 | "Year 11: % to decimal" | m01 scene 2 |
| i12 | "Year 11: buy now, pay later"; "the Year 11 rule"; compare totals | m03, m04 |
| i16 | fees on buy now, pay later | m03 |
| i18 | "save first, or an emergency fund (Year 11)"; "savings kept for surprises" | m09 (same plain meaning and the same hoist plate) |

### 3.2 Applications of measurement (a01 to a11; 11 videos as 12 designs; designed 24 Nov, section 1a)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| r01 | "Year 11: 1 L = 1000 mL"; converting mL and L, cm and m | a01: teach capacity conversions with "1 L = 1000 mL" as written |
| r04, r05 | cm, m, km; m to cm | a01 |
| r08 | "Year 11: 1 mm = 0.001 m"; "Year 11: 1 m³ = 1000 L" (a03: 1 m³ = 1000 L = 1 kL) | a01 (mm to m as 0.001), a03 (the exact chip wording) |
| r10 | "Year 11: 60 × 60" (t01); length and capacity units (a01) | a01; t01 (see 3.3) |
| r14 | "Year 11: kilo = 1000" | a04: say "kilo = 1000" in those words before the power-of-ten form |
| r06a, r06b | rectangle areas, perimeter (a05); m² (a02) | a05, a02 |
| t09 | "Year 11: area = ½ × base × height"; "Year 11: 1 ha = 10 000 m²" | a05 (the triangle formula in that form), a02 (the hectare chip) |
| a01 (Y12) | "(Year 11)" builds-on line | a-strand titles, once they exist (audit B2 fix) |
| r07 | "the trapezoidal rule", A ≈ (h/2)(d_f + d_l), with d_f first and d_l last length, h the perpendicular spacing; "areas by splitting into shapes" | a11 must use exactly d_f, d_l and h as r07 recalls (audit N5); a07 teaches dissection of an irregular block |
| t01a, t01b, t03, t08 | "Year 11: Pythagoras"; "the hypotenuse is the longest side, opposite the right angle" | a06: define the hypotenuse in those words |

Plan notes: a02 and a03 should use the parts picture or a unit-cube picture (area factor squared, volume factor cubed); megalitres and the prefixes nano to tera are site gaps (MSY items to be written); keep anchors everyday (a garden bed, a water tank, a pool, a shed, phone storage in GB for a04). Likely length flags: a05 (many shapes) and a08 (surface area) may need splits.

### 3.3 Time and location (t01 to t06; 6 videos; designed 24 Nov, section 1b)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| r10 | "Year 11 Standard t01 (time units)"; "Year 11: 60 × 60" | t01: show 1 h = 60 min = 60 × 60 s as "60 × 60" on screen |
| (none beyond r10) | | |

Plan notes: t03 latitude and longitude with and without digital tools (a map app view coded); t04 15° = 1 hour; t05 Australian zones with daylight saving (NSW, Queensland, WA, NT, SA's half hour); t06 UTC. Audit N9: if t06 is the last Year 11 video in playlist order, close on "Year 11: done" with no "Next" chip into Year 12 a01 (or give d19 that close if data runs last).

### 3.4 Networks, paths and trees (n01 to n07; 7 videos; designed 24 Nov, section 1c)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| c01a | "Year 11: arrows with directions and weights"; directed networks, weighted edges (n02); a network from a table (n03) | n02 and n03: use "directed" and "weighted" as the words, arrows for direction, numbers on edges for weights |
| c02 | weighted directed networks (n03) | n03 |
| c03 | "Year 11: shortest path (a different question)" (n06, as a contrast) | n06: shortest path by the systematic method on at most 10 vertices |
| f01 | "Year 11: directed, weighted networks"; n02, n03 | n02, n03 |

Plan notes: n07 (shortest path not the best path, nor in any minimum spanning tree) has no site lesson: design from the syllabus (a toll road, a flooded road, a steep cycle route); n05 minimum spanning tree by any method (Prim's or Kruskal's, one taught, the other named). Anchors: a bike-path map, phone towers, a school-camp trail, a delivery route.

### 3.5 Data analysis (d01 to d19; 19 outline videos; designed 24 Nov as 20 designs, section 1d; every recall below is set up, scene by scene in route inputs 14)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| b01 | "Year 11: dot plot, mean, median"; numerical variables (d05) | d05, d08, d11 |
| b02 | "Year 11: outliers" (d18) | d18 |
| b03 | "Year 11: experiments and observational studies" (d04) | d04: name both in those words |
| b04a | "Year 11: the mean = total ÷ how many" (d11) | d11: say the mean in those words |
| b05 | "Year 11: the calculator's statistics mode" (d13) | d13: teach σ on the calculator's statistics mode, and name the mode |
| b06 | "Year 11: spreadsheet charts" (d07) | d07: a spreadsheet chart (site gap) |
| p05 | frequency tables (d06) | d06 |
| p07 | categorical data in tables (d07) | d07 |
| p08 | sampling; self-selected samples (d03); misleading displays (d10) | d03, d10 |
| z01 | "Year 11: measures of centre"; "Year 11: symmetric, skewed"; "Year 11: positively skewed"; σ "used here only as how spread out" (d09, d11, d13) | d09: "positively skewed" and "symmetric" as the words; d13: σ as "how spread out" |
| z02, z03 | "Year 11: σ on the calculator" (d13) | d13: σ (population) only, by calculator |

Plan notes: the site has no spreadsheet statistics or infographic lessons (d07, d10, d14 partly from the syllabus); use invented, labelled data (ruling 69) from sport, phones, music and travel; reuse one dataset across d11 to d19 (as Year 12's kiosk) so quartiles, box plots and outliers build on one picture. Likely length flags: d10 (three points) and d14.

### 3.6 Optional practice (x01, x02)

x01 (money: which pay, tax or purchase calculation does an unseen problem need?) can now be designed, since e and m are complete; x02 (measurement, time and data) waits for those strands.

## 4. Open questions for root

1. **Header strip.** The owner rule of 23 November says no course labels on screen; the m designs show "MANAGING MONEY" only, while the f, l and e designs show "MATHEMATICS STANDARD · ...". Align the earlier strands (picture-only change), or allow the subject name as a non-course label?
2. **e12 edits (not made here; new files only).** Lift the "provisional" marks on the e12 to m01 join (ruling 87) and set e12's "Next" to "Percentage Change, Profit and Loss".
3. **Production board (audit B1 fix 3).** Add m01 to m09 at "designed, Revision 1; learning review next" and a, t, n, d, x at "not started" to the parallel production board (not edited here).
4. **Year 12 i12's card.** m04 now introduces "Add every dollar, then compare totals"; i12's own card ("Compare the total paid, not the repayment") can stay as its continuation or gain a grey "Year 11" chip.
5. **New plates.** `ms11-fridge-v1.png` (m04), `ms11-electricity-meter-v1.png` (m07; needed first, for m06's final frame), `ms11-water-meter-v1.png` (m07). Briefs are in the m04 and m07 designs. `ma12-air-conditioner-v1.png` has a yellow fringe on its wall wash and is optional in m07; `ma12-kitchen-tap-v1.png` appears to have a white background and was not used.
6. **Kit additions** (rows m01 to m09 in each design): `PercentBar` (with slider, ladder and reverse arrow), `PartsBar`, gap bars, `PeriodTimeline` month blocks and stamps, budget overflow bar, stacked and ranked total bars, `DecisionPath`, `BlockCounter`, threshold bar, who-pays table, `SpreadsheetGrid` input slider and stale-cell demo, fuel tank, rolling counters on plates, power-time area, bill builder, block container, period converter, row splitter, fund gauge, signed variance bars, account transfer strip. A kit-needs file for the m-strand (in the style of `checks/maths-standard-kit-needs-s11-e.md`) would collect them; not written here.
7. **Example prices.** Codex's error-check briefs ask for dated NSW sources for registration ($385), the green slip ($780), the transfer fee ($40), comprehensive ($1,640), the lay-by fee ($10), water ($2.70/kL, $190 service) and gas (75c a day; 4.8c and 3.9c per MJ). Any change touches only the affected design's numbers.
8. **m05 and m06 length.** About 560 s each, under the 570 s cap with named reserve trims; root may prefer to split m05 (duty and fees; insurance and the loan) if the voiced takes run long.
9. **Remaining work (updated 24 Nov, Data analysis complete).** Designed: m (9), a (12 designs), t (6), n (7), d (20 designs, with d06a and d06b). Year 11 Standard has a design for every outline content video. Not designed: optional x01 (money; can start now) and x02 (measurement, time and data; can start now that d is designed). Next for root: the learning reviews and Codex checks for d01 to d19 (section 1d), the board update (item 3), and the decisions in items 16 and 19 to 22.
10. **a05 split (24 Nov).** One point (`ci139f00a0`) names seven shape families plus perimeters and composites; designed as a05a (straight-edged) and a05b (circles, sectors, curved composites), both playlist 41, by ruling 8's test. Confirm, or rule one video (it would run about 11 minutes even after cuts).
11. **m09 join and Year 12 lines (24 Nov).** a01 uses m09's final frame exactly: lift m09's provisional marks and set its "Next" to "Units of Measurement: Length, Mass and Capacity". Year 12 t09's entry line cites "a03" for the hectare; it is taught in a02. Year 12 "Builds on (Year 11)" lines (a01, a05, a12, b01, r01, r07) can now name the a-strand titles (audit B2).
12. **Facts for Codex (24 Nov).** Netball court 30.5 m by 15.25 m (a02); Olympic pool minimum 50 m by 25 m by 2 m (a03); softball base path 18.29 m (a05b, a06); golf ball minimum diameter 42.67 mm (a08); the trapezoidal rule on the 2024 Standard reference sheet (a11; Year 12 r07 recalls "on the reference sheet"); the site's concrete price $220 per m³ (a09, labelled an example).
13. **Plates and kit (24 Nov).** The a-strand needs no new plate. The m-strand's three plates and every kit part for m and a are collected in `maths-standard-y11-kit-and-plate-needs.md` (answers open question 6's request for a kit-needs file).
14. **t strand (24 Nov).** (a) The new plate `ms11-desk-globe-v1.png` (brief in `lessons/math-s11-t03.md`) is needed for the t03 build; if it cannot show a recognisable Australia, the coded globe carries the scenes (t03 open decision 1). (b) Facts for Codex: city coordinates (t03); rounded longitudes (t04); Australian daylight-saving states and dates (t05); UTC offsets with British Summer Time and US daylight-saving dates (t06); example flight times (Perth to Sydney 4 h 30 min, Sydney to Perth 5 h, Sydney to Dubai 14 h 20 min, Singapore to Sydney 7 h 45 min); "−33.86, 151.21" in Sydney and "33.86°N, 151.21°E" in the open Pacific; the Google voice's reading of four-digit times ("nought nine fifteen", "nineteen forty-five"). (c) t05 teaches the Australian zones as gaps and leaves UTC offsets to t06 (t05 open decision 1). (d) "Position coordinates" is read as the (latitude, longitude) pair (t03 open decision 2).
15. **n strand (24 Nov).** (a) No new plate. (b) Facts for Codex: the 2024 glossary wording for path, tree, spanning tree and minimum spanning tree (n04); uniqueness of every shortest path and MST where "the" or "any" is claimed (n06, n07; checked by listing here); 21 spanning trees of the camp network (n04); the example fibre price $25,000 per km (n05) and the example speeds (n07). (c) Root choices offered: loops kept to one sentence in n02 (open decision 1); method names said once in n05 (open decision 1); "–" instead of ∞ in n06 (open decision 1); no adjacency matrices in n03 (open decision 1). (d) n07's description links lesson06 until the site adds a card for `ci53383df4` (MSY-32).
16. **d06 split (24 Nov).** One point (`cia7a007a6`) asks for a frequency table and a cumulative frequency table, each graphed as a histogram with a polygon, by hand and with digital tools, on top of d06's "why group" point. Designed as d06a (grouping, frequency table, histogram and polygon by hand) and d06b (cumulative table, histogram and polygon; both sets with a spreadsheet and an app), both playlist 66, by ruling 8's test. Confirm, or rule one video (about 13 minutes).
17. **Root rulings of 24 Nov recorded** (section 1d): t05 as designed; the n-strand choices approved; n07's lesson06 link fine. Items 14 (c) and 15 (c), (d) are closed.
18. **Data analysis facts for Codex (24 Nov).** The sleep range for 14 to 17 year olds in the Australian 24-Hour Movement Guidelines (8 to 10 hours; d01); NSW Standard conventions for systematic and stratified samples (d03), the frequency polygon closed at the empty classes' centres and the cumulative polygon through upper boundaries from zero (d06a, d06b), back-to-back keys (d08); "column graph" as the syllabus term (d07); the spreadsheet formulas as written (=B2, =C2+B3, =COUNTIF(B2:B21,"bedroom"); d06b, d07).
19. **Year 12 a01 join (24 Nov).** d19's final frame shows a01's cold-open picture (the driving-school car and the two quote cards, copied from `math-s12-a01.md` scene 1) with "Year 11: done" and "Next: Year 12, simultaneous equations". a01 was not edited (math-s12 files are out of this batch's scope). Root may add one line to a01's Boundary ("matches d19's final frame without its chips") or leave a01 as a cold open; the picture works either way. a01's "Builds on (Year 11)" line can now name d19's title if root wants a link across the course boundary.
20. **Data analysis choices to confirm (24 Nov).** (a) The calculator's statistics mode is first met in d11 (the point asks for a calculator for the mean), and d13 names it again in those words and reads σx (Year 12 b05 recalls d13): d11 open decision 1. (b) d10's poster shows the two groups' averages (6.6 and 8.1 h) before d11 teaches the mean (d10 open decision 1; the alternative is medians). (c) d16 draws whiskers to the minimum and maximum, and d18 adds the outlier version (d16 open decision 1). (d) d13 names sx and STDEV.S once, as numbers to avoid (d13 open decision 1). (e) d17 calls the elsewhere group "roughly symmetric" (d17 open decision 1). (f) d18 shows the fence rule missing an isolated value in clustered data (d18 open decision 1).
21. **Data analysis facts for Codex (24 Nov, adds to item 18).** σx and sx on the scientific calculators NESA permits, and STDEV.P and STDEV.S in spreadsheets (d13); the halves quartile method matching those calculators' Q1 and Q3 (d15); "a value exactly on a fence is not an outlier" (d18); the spreadsheet formulas in d14 (=COUNT, =AVERAGE, =MEDIAN, =MAX−MIN, =STDEV.P) as written; Year 12 a01 scene 1's quote-card wording (d19).
22. **Sensitive-content check (24 Nov).** d02's diverse-groups scene is kept general (owner rule of 18 Nov: no named communities); the site's nightclub, drug-use, blood-type, pain, COVID, climate and political-polling examples are not used anywhere in the strand (MSY-34, MSY-42).
