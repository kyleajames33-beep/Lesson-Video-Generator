# Site corrections: Mathematics Standard Year 11 additions (Managing money onward)

Written by Claude (designer of record) on 23 November 2026 while planning the Year 11 strands that had no packs (coherence audit B1 and S9: `checks/maths-standard-coherence-audit-2026-11-23.md`). A new file, kept separate from `site-corrections-maths-standard.md` (MS-01 to MS-83), which was not edited. Ids here are MSY-01 onward so they cannot clash with the MS series. Source: read-only clone `C:/Users/kygs/teaching-app-fix` of `kyleajames33-beep/Teaching-APP`, HEAD `5d74a627` (16 November 2026), folder `subjects/maths-standard/year11/`. No site file was changed and nothing was run there. Every site value used in the Managing money packs was recalculated (scratchpad `s11m/verify.py`); no arithmetic error was found, so the items below are teaching, data-currency and alignment findings, in the same format as the MS series (lesson, old text, correction, reason).

## 1. Managing money (packs and designs m01 to m09)

### MSY-01. An unsupported claim about exam performance

- Lesson: `year11/managing-money/lesson03.sa.html`, Think First and card 3.
- Old text: "this single question catches out more students in the exam than any other percentage idea" and "This is the single most-tested idea in the whole percentage strand".
- Correction: "This is a common mistake, so check it carefully." (or remove both sentences).
- Reason: neither claim has a source. The videos do not repeat them.

### MSY-02. VAT and overseas purchases are not taught (syllabus gap)

- Lesson: `year11/managing-money/lesson01.sa.html` (GST only); `lesson02.sa.html` is tax exam practice.
- Points: `cib3251328` ("... GST or value-added tax (VAT) when purchasing goods and services in Australia and internationally") and `cib09c3969` ("Solve problems involving GST or VAT"), both partial in the crosswalk.
- Correction (owner decision): add a card on VAT using the same "parts" idea as GST: at 20% the price before VAT is 5 parts and the VAT 1 part, so VAT = price ÷ 6 and the price before VAT = price ÷ 1.2 (UK standard rate 20%); New Zealand's GST is 15% (÷ 1.15). Prices stay in the local currency. Video m02 teaches this.
- Reason: both points name VAT and international purchases explicitly.

### MSY-03. "Four fortnights is two months", and the monthly account fee presented as standard

- Lesson: `year11/managing-money/lesson04.sa.html`, key terms ("Account fee ... over the 2 months the plan runs"), card 2 ("Four fortnightly payments run for 2 months, not 4"; "Must do: Convert the instalment schedule into months before applying a monthly account fee"), WE2, SAQ 2.
- Old text: as quoted; the account fee appears in every BNPL example as if all plans charge one.
- Correction: state the months on each plan's card ("the plan is open for 2 months") rather than deriving months from fortnights; describe a typical pay-in-4 plan as "first payment today, then every two weeks, finished in six weeks"; add "Some plans charge a monthly account fee; most charge late fees" (Moneysmart, "Buy now pay later services").
- Reason: a pay-in-4 plan with the first payment at purchase finishes in six weeks; "4 fortnights = 2 months" is a modelling choice, not a rule, and students will apply it to plans with other schedules. Many common plans have no account fee. Video m03 follows the correction.

### MSY-04. Lay-by is missing from the methods of purchase

- Lesson: `year11/managing-money/lesson04.sa.html`, cards 4 and 5.
- Correction: add lay-by (the shop holds the item while you pay it off, then you take it home; usually a small fee) beside cash, terms and buy now, pay later in the comparison and the justification questions.
- Reason: `ci039eaed1` asks students to compare "different methods of purchasing goods" and justify one for a context; lay-by is the common low-cost option when an item is not urgent, which makes the "how urgent?" question meaningful. Video m04 includes it with an example fee.

### MSY-05. "Or part" is never exercised; the same $620 for two premiums; no loan

- Lesson: `year11/managing-money/lesson05.sa.html`, the stamp duty table, key terms, card 2, WE1, WE2, SAQ 1.
- Old text: every price is a whole number of hundreds ($24 000, $31 000, $52 000, $48 000), although the table says "for every $100 (or part)"; key terms give "a $620 green slip" and "a $620 annual premium" (comprehensive).
- Correction: add one example with a part ($14 990 → 150 lots of $100 → $450 at $3); give the two premiums different values (for example green slip $780, comprehensive $1640); add one line on buying with a loan: "loan repayments from the lender's calculator × number of repayments" (the point says "purchase price or loan repayments").
- Reason: "or part" is the only non-routine step in NSW stamp duty; identical premiums invite students to think CTP and comprehensive are the same cover; the loan option is in the point. Video m05 follows all three.

### MSY-06. Running costs omit the green slip renewal; petrol at $2.00

- Lesson: `year11/managing-money/lesson05.sa.html`, card 3, card 4's sheet, WE3, SAQ 2.
- Old text: "the ongoing list is short enough to memorise: fuel, servicing, tyres, registration renewal, insurance"; "petrol at $2.00 a litre".
- Correction: "fuel, servicing, tyres, registration and green slip renewal, insurance"; reprice petrol near the current NSW average (about $2.25 a litre in November 2026, ruling 47) or label it "example price".
- Reason: the CTP green slip is renewed every year with registration (the lesson's own card 1 says registration needs it); the lesson's "insurance" line is the optional policy. Video m06 follows the correction.

### MSY-07. GST added to household bills as a separate step

- Lesson: `year11/managing-money/lesson01.sa.html`, card 3 summary ("GST-inclusive total = pre-GST total × 1.10"), WE3 steps 5 and 6, SAQ 3.
- Correction: present bill rates as GST-inclusive, as Australian retail electricity and gas offers quote them, and note that residential water usage is GST-free; keep any "add GST" practice to items priced "plus GST" (such as a tradesperson's quote).
- Reason: students reading a real bill would add GST twice. Video m07 removes the step and adds meter readings and a gas block calculation, which the lesson names but never works.

### MSY-08. Groceries classed as discretionary

- Lesson: `year11/managing-money/lesson06.sa.html`, key terms ("Discretionary spending ... groceries $620 ..."), card 1 sheet, card 2 ("groceries $620, which is discretionary but essential"), WE1 to WE3; compare `lesson01.sa.html` key terms, which class groceries as a variable expense.
- Correction: use three groups: fixed (the same every time), variable essentials (needs whose amount changes: groceries, bills, fuel) and discretionary (wants you choose). Then living expenses = fixed + variable essentials, with no exception.
- Reason: the two lessons disagree, and "discretionary but essential" contradicts the term's own definition ("costs you choose, which can be reduced at short notice"). Videos m08 and m09 use the three groups and state the syllabus's two words.

### MSY-09. "Saving" is only the surplus

- Lesson: `year11/managing-money/lesson06.sa.html`, card 4.
- Correction: add saving first (an automatic transfer to a separate savings account on payday) as the saving strategy, beside budgeting, the emergency fund and monitoring.
- Reason: `ci3d78450e` lists "budgeting, saving, establishing an emergency fund ... and monitoring spending" as four strategies; the lesson treats saving as whatever is left. Video m09 teaches it and Year 12 i18 recalls it ("save first, or an emergency fund (Year 11)").

## 2. Applications of measurement (packs and designs a01 to a11, with a05 as a05a and a05b)

Added 24 November 2026 by Claude (designer of record) with the a-strand packs and designs. Every site value used was recalculated (scratchpad `s11a/verify.py`, `python -I`). `lesson10.sa.html` (scale drawings, used by Year 12 r04) and `lesson11.sa.html` (errors and limits of accuracy) carry no 2024 Year 11 point and are not used; `lesson12.sa.html` is used for its mass card only (its energy card belongs to Year 12 r14).

### MSY-10. Megalitres, 1000 kL = 1 ML and 1 km³ are not taught

- Lessons: `year11/applications-of-measurement/lesson01.sa.html` (card 06, the volume-capacity bridge), `lesson12.sa.html`.
- Points: `ci529c4c4e` ("... kilolitres (kL) and megalitres (ML)"), `ci880a544f` ("... and 1000 kL = 1 ML"), both partial; `cid416990e` ("1 km^3 = 1 000 000 000m^3").
- Correction: add ML to the capacity ladder (mL, L, kL, ML, × 1000 each step), extend the bridge to "1000 kL = 1 ML" with a pool or dam example (an Olympic pool holds at least 2.5 ML), and state 1 km³ = 1 000 000 000 m³ beside 1 m³ = 1 000 000 cm³.
- Reason: all three appear word for word in the 2024 points. Videos a01, a02 and a03 teach them.

### MSY-11. Metric prefixes nano to tera and scientific notation are not taught

- Lessons: none (crosswalk: missing). `lesson01.sa.html` SA 1 (c) asks for an answer "in scientific notation" without teaching it; `lesson11.sa.html` uses significant figures in two answers without teaching them.
- Point: `ci7526e53a` (nano 10^(-9) to tera 10^12, "with and without a required number of significant figures").
- Correction: add a lesson: each prefix as a power of ten (kilo = 1000 = 10³ first), negative powers as dividing by ten, scientific notation (1 up to 10, times a power of ten), changing prefixes, significant figures from the first non-zero digit, and the calculator's E display. Phone storage, camera megapixels and processor nanometres make everyday anchors.
- Reason: a whole 2024 point with no page. Video a04 teaches it from the syllabus (ruling 3).

### MSY-12. The mass ladder is described in both directions at once

- Lesson: `year11/applications-of-measurement/lesson12.sa.html`, card "The mass unit hierarchy".
- Old text: "Mass units follow the same pattern as length: each step up the chain multiplies by 1000", beside "mg → g → kg → t, each step ÷1000 going up".
- Correction: "Each step to a larger unit divides by 1000; each step to a smaller unit multiplies by 1000."
- Reason: the first sentence contradicts the second and the lesson's own worked examples (10 500 mg ÷ 1000 = 10.5 g).

### MSY-13. The sine area rule appears in Year 11 Applications of measurement

- Lessons: `lesson05.sa.html` (card "The Sine Area Rule and Composite Areas", WE3, SA 3, drills 6, 7, 9); `lesson06.sa.html` drill 4 (sin 60°).
- Correction: move A = ½ab sin C to the Year 12 trigonometry lessons; in Year 11, use triangles with a given perpendicular height (or one found by Pythagoras). Keep the annulus as a composite shape, as the card's own note suggests.
- Reason: the 2024 Year 11 Standard course has no trigonometry (Year 12 t01a starts it from nothing; ruling 57); A = ½ab sin C is a Year 12 point (Year 12 t09). Videos a05b and a08 leave it out.

### MSY-14. Irregular blocks of land are not taught as such

- Lesson: `lesson02.sa.html` (composite shapes only).
- Point: `ci05a36ac3` ("Calculate perimeters and areas of irregularly shaped blocks of land by dissection into triangles, rectangles and trapeziums"), partial.
- Correction: add a card working a block-of-land plan: cuts at right angles so each piece has a known base and height, a second dissection as a check, a slanted boundary's length by Pythagoras, the perimeter as the outside boundaries only, and the area in hectares.
- Reason: the point names blocks of land and their perimeters; slanted boundaries need Pythagoras, which the composite card never combines with area. Video a07 teaches it.

### MSY-15. An unsourced hectare comparison (minor)

- Lesson: `lesson01.sa.html`, card 06 ("a standard AFL ground is about 1.6 ha").
- Correction: cite a source for the ground size or use a fixed-size court (a netball court is 30.5 m by 15.25 m, about 465 m², so about 21.5 courts make a hectare).
- Reason: AFL grounds vary widely in size. Video a02 uses netball courts.

### MSY-16. The sugar-cube memory hook (minor)

- Lesson: `lesson01.sa.html`, card 06 ("A standard 1 cm × 1 cm × 1 cm sugar cube holds exactly 1 mL").
- Correction: "A cube 1 cm on each side has a volume of 1 cm³; a container that size holds 1 mL."
- Reason: a sugar cube is solid (it holds nothing) and a standard one is about 1.5 cm wide. Video a03 uses a coded 1 cm cube.

### MSY-17. Two practice errors in the perimeter lesson

- Lesson: `lesson04.sa.html`.
- Old text (drill 8): "A quarter-circle of radius 4 cm is removed from the corner of a square of side 4 cm ... Three full sides + quarter arc: P = 3 × 4 + ¼ × 2π × 4 = 12 + 2π = 18.28 cm".
- Correction: with the quarter circle centred at the corner, the square's two sides at that corner are removed with it; the remaining shape has two full sides and the arc: P = 8 + 2π = 14.28 cm.
- Old text (SA 3): a path "bounded by three straight sides (8 m, 5 m, and 8 m) and a curved arc ... part of a circle with radius 5 m, centred at the midpoint of the 5 m side"; answer "the two radii (5 m each) and the chord (5 m) form an equilateral triangle. Central angle = 60°".
- Correction: replace the question. As written, the far ends of the 8 m sides are about 8.4 m from the stated centre, not 5 m, so no such arc exists, and the answer describes a different figure (the centre at a vertex of an equilateral triangle).
- Reason: wrong answers in practice teach wrong boundaries. Neither is used in the videos.

### MSY-18. The ladder hook changes its numbers (minor)

- Lesson: `lesson03.sa.html`: the hook puts the ladder's base "1.5 m from the wall"; the Revisit solves it with the base "2 m from the wall" (√21 = 4.58 m).
- Correction: use one value in both places (1.5 m gives √22.75 = 4.77 m; 2 m gives 4.58 m).
- Reason: the student's Think First answer is checked against a different question. Video a06 uses its own examples.

### MSY-19. Stray answers in the surface-area answer list

- Lesson: `lesson07.sa.html`, "Comprehensive answers" for the drills.
- Old text: drill answers carry extra answers for cones and pyramids that the page never asks (for example "ℓ = √(16 + 9) = 5 cm; SA = 36 + 60 = 96 cm²" after drill 1).
- Correction: remove the stray fragments (cone and pyramid surface areas are not 2024 Year 11 points).
- Reason: students cannot match answers to questions. Video a08 does not use the list.

### MSY-20. Rounding before the last step (minor)

- Lessons: `lesson09.sa.html` Q3 (d) (254.5 × 750 = 190 875 kg, using the rounded volume; with 81π the mass is 190 851.75 kg); `lesson01.sa.html` SA 1 (a) gives 19.63 m², then (b) converts 19.635 to 196 350 cm².
- Correction: carry the unrounded value (81π; 6.25π) into the next part, as both lessons tell students to.
- Reason: the working breaks the lessons' own "round only at the end" rule, even where the final answer survives.

### MSY-21. The trapezoidal rule beyond "up to four applications"

- Lesson: `lesson13.sa.html` (the d_m form; WE2 with six measurements and five strips; drill 3 with five strips).
- Point: `ci3786e651` ("Apply the Trapezoidal rule A ≈ (h/2)(d_f + d_l) ... for up to four applications").
- Correction: teach the rule as one trapezium, A ≈ (h/2)(d_f + d_l), applied up to four times with each application's own first and last lengths, then added; keep worked examples to four applications or fewer. The compressed "first and last once, middles twice" form can stay as an extension note, since Year 12 (the trapezoidal rule from plans and photos) teaches it.
- Reason: the 2024 point caps the applications at four and names only the single-application formula. Video a11 follows the point; Year 12 r07 then introduces the shortcut.

## 3. Time and location (packs and designs t01 to t06; written 24 November 2026)

Source as above (HEAD `5d74a627`). Every site value used in the t packs was recalculated (scratchpad `s11t/verify.py`, `python -I`, 0 failures). Final answers in lesson01 are all right; the items below are method, rounding, factual and syllabus-gap findings.

### MSY-22. "Add 2400, then subtract" gives the wrong number unless 60 is borrowed

- Lesson: `year11/time-and-location/lesson01.sa.html`, card 02 ("Crossing midnight: Add 2400 to the finish time before subtracting. e.g. depart 2348, arrive 0125: 2525 − 2348 = 1 h 37 min"); trap 03; drill 4's worked answer ("40 min to midnight (2240→2300=20, 2300→0000=60, ...)").
- Old text: as quoted. As ordinary subtraction, 2525 − 2348 = 177, not 1 h 37 min; drill 4's "40 min to midnight" contradicts its own next step (2240 to 0000 is 80 min).
- Correction: teach counting up (to the next whole hour, whole hours, the minutes left), which the page's WE1 and WE2 already use; if "add 2400" stays, add "then subtract hours and minutes separately, borrowing 60 minutes when needed (as in trap 02)". Fix drill 4's line to "2240 → 0000 = 1 h 20 min; 0000 → 0205 = 2 h 5 min; total 3 h 25 min".
- Reason: four-digit times are not base-ten numbers; students who subtract as written get 1 h 77 min. Video t02 counts up and shows borrowing once.

### MSY-23. A layover flight ignores time zones

- Lesson: `lesson01.sa.html`, short answer Q3 (Sydney 2150, 8 h 20 min to Singapore, "At what 24-hour time does the plane land in Singapore?": answer 0610).
- Old text: the answer adds the flight time to the Sydney departure time and calls it the landing time in Singapore.
- Correction: either ask "in Sydney time" throughout, or move the question to the UTC lesson and convert (Singapore is UTC+8; Sydney UTC+10 or +11).
- Reason: local landing times are always in the arrival city's zone; the question teaches the opposite of lesson02. Video t02 adds durations within one zone; t06 handles flights with UTC.

### MSY-24. "With and without using digital tools" is not taught

- Lesson: `year11/time-and-location/lesson03.sa.html` (coordinates only as a table and in words).
- Point: `ci922e564d` ("Identify a location on the Earth's surface using latitude, longitude and position coordinates, with and without using digital tools").
- Correction: add a card on (a) reading coordinates off a map with a grid of parallels and meridians (estimating between lines), and (b) a map app: signed decimal coordinates (minus latitude south, minus longitude west), and typing coordinates to drop a pin; one line on degrees and minutes (60 minutes in a degree).
- Reason: both halves of the point are named in the syllabus. Video t03 teaches them.

### MSY-25. Rounding slips in the longitude short answers

- Lesson: `lesson03.sa.html`, short answer Q1 (c) and Q3 (c).
- Old text: Q1 (c) "0800 + 7 h 36 min = 1536" for 114.2 ÷ 15 = 7.6133 h; Q3 (c) "approximately 14 h 47 min" for 221.9 ÷ 15, then (d) uses 14 h 48 min.
- Correction: 7.6133 h = 7 h 36.8 min ≈ 7 h 37 min, so 1537; 14.7933 h = 14 h 47.6 min ≈ 14 h 48 min in both (c) and (d). Better: × 4 minutes per degree (114.2 × 4 = 456.8 min; 221.9 × 4 = 887.6 min).
- Reason: the page rounds down in one place and up in another for the same kind of value. Video t04 teaches × 4 minutes per degree with whole-degree examples.

### MSY-26. London is not UTC+0 in July

- Lesson: `year11/time-and-location/lesson02.sa.html`, "Revisit your thinking" ("in July (AEST, UTC+10), the call would be at 7:00 pm Sydney time"); short answer Q2 (d) ("July (London still UTC+0 ...)": answer 1900); trap 01 ("When London also observes BST (UTC+1), the gap shrinks back to 10 hours").
- Old text: as quoted.
- Correction: London uses British Summer Time (UTC+1) from the last Sunday in March to the last Sunday in October. A 9 am London call in July is 0800 UTC, which is 1800 (6:00 pm) in Sydney on AEST. Trap 01: "When London is on BST and Sydney on AEST (most of April to September), the gap is 9 hours; only in the weeks when both are on daylight saving is it 10 hours."
- Reason: the page's own city table lists London as UTC+1 in its summer; the July answers contradict it. Video t06 teaches the corrected July case.

### MSY-27. No dates or summer gap table for Australian daylight saving

- Lesson: `lesson02.sa.html` (key facts and key terms name AEDT and ACDT and the non-observing states, but not when daylight saving runs, and no summer table of gaps between Australian cities).
- Point: `cidfef63ed` ("Solve problems involving time zones in Australia, making necessary allowances for daylight saving").
- Correction: add "Daylight saving runs from the first Sunday in October to the first Sunday in April in NSW, the ACT, Victoria, Tasmania and South Australia" and a small table of gaps from Sydney in standard time (Brisbane 0, Adelaide and Darwin 30 min, Perth 2 h) and in summer (Brisbane 1 h, Adelaide 30 min, Darwin 1 h 30 min, Perth 3 h).
- Reason: "making necessary allowances" needs the dates; the summer gaps are where students go wrong. Video t05 teaches both (Codex confirms the dates).

## 4. Networks, paths and trees (packs and designs n01 to n07; written 24 November 2026)

Source as above (HEAD `5d74a627`). Every site value used in the n packs was recalculated (scratchpad `s11n/verify.py`, `python -I`, 0 failures); no arithmetic error was found in lessons 01, 04, 05 and 06. Lessons 02 (degree sequences, adjacency matrices) and 03 (walks, trails, Eulerian and Hamiltonian ideas) are 2017 content; only the degree-sum idea (02) and the definition of a path (03) are used.

### MSY-28. "Circumstances in which networks are used" is only a list

- Lesson: `year11/networks-paths-and-trees/lesson01.sa.html` (the big-idea card and card 07 list systems: roads, social media, water mains, web links).
- Point: `ci2d693812` ("Examine circumstances in which networks are used in a variety of real-world applications").
- Correction: add a short card on what networks are used to decide: whether everything stays connected when a link fails; which place is best connected (highest degree); the shortest route between two places; the cheapest way to connect everything. Link each to its later lesson.
- Reason: "examine circumstances" asks why and when networks are used, not only where. Video n01 teaches the four questions.

### MSY-29. Weighted edges are not defined

- Lesson: `lesson01.sa.html` (vertex, edge, degree, directed and loops are defined; weights first appear as data in lessons 05 and 06).
- Point: `cica79bb9b` ("... vertex, edge, degree, directed networks and weighted edges").
- Correction: add "Weight: a number on an edge, such as a distance, time or cost. A network whose edges carry weights is a weighted network; with arrows too, a directed, weighted network." with one route-total example.
- Reason: the point names weighted edges as terminology to define and use. Video n02 defines them (Year 12 c01a and f01 recall "directed, weighted networks").

### MSY-30. No construction from a table or map, and no practical problem set

- Lessons: `lesson01.sa.html` (drawing from a description only); `lesson02.sa.html` (adjacency matrices of 0s and 1s, 2017 content).
- Points: `ci022052d4` ("Construct a network diagram to represent information from a given table or map, showing weighted and directed edges"); `ci51fdc3e5` ("Solve problems involving network diagrams in a variety of practical contexts").
- Correction: add a lesson that draws (a) an undirected weighted network from a symmetric distance table (use one half; a dash is no edge), (b) a directed weighted network from a from-to table (row = from), and (c) a network from a map (keep the stops, paths and lengths; drop the curves), with practical questions (route totals, return trips, a travel time).
- Reason: both points have no matching page; the 0/1 matrices answer a different (2017) point. Video n03 teaches them.

### MSY-31. "Minimum spanning tree" is a lesson04 term but defined only in lesson05

- Lesson: `lesson04.sa.html` ("In Lesson 5, we extend this to weighted networks and find the minimum spanning tree").
- Point: `ci0eb52b4b` ("Define and use the network terminology: path, tree, spanning tree and minimum spanning tree").
- Correction: define the minimum spanning tree in lesson04 ("the spanning tree with the smallest total weight") with two spanning trees of one weighted network compared by total; keep the methods in lesson05. The page's note that "n − 1 edges" is a check, not a requirement, is correct and can stay.
- Reason: the term belongs to this point. Video n04 defines it and leaves the method to n05.

### MSY-32. No lesson for "a shortest path is not necessarily the best path nor contained in any minimum spanning tree"

- Lessons: none (crosswalk: missing).
- Point: `ci53383df4`.
- Correction: add a short card after lesson06: (a) circumstances where the shortest path is not the best (tolls, travel time against distance, closures and floods, hills, safety, traffic), with a weight swap that changes the answer; (b) a triangle such as AB 3, BC 3, AC 5, whose only minimum spanning tree (AB, BC) does not contain the shortest path from A to C (the edge AC), and why (the tree minimises the total for linking everything, not any one trip).
- Reason: a whole point with no page. Video n07 teaches it from the syllabus (ruling 3).

## 5. Data analysis (packs and designs d01 onward; written 24 November 2026)

Source as above (HEAD `5d74a627`). Lessons read: `year11/data-analysis/lesson02`, `07`, `09`, `10`, `11`, `12`, `13` (`lesson08` is a 2017 module review and is not used). Every site value used in the d packs was recalculated (scratchpad `s11d/verify.py`, `python -I`). Lessons 02, 09, 10 and 12 have no arithmetic error; errors were found in lesson07 (MSY-45), lesson11 (MSY-44) and lesson13 (MSY-46). MSY-33 to MSY-47 cover the whole strand (d01 to d19).

### MSY-33. No issue-to-question step and no questionnaire design principles

- Lessons: `lesson02.sa.html` (census, sample, bias); `lesson09.sa.html` (card 08: "Use neutral, clearly worded questions").
- Points: `ci22ad0284` ("Identify an issue and pose a question to a targeted population to gather statistical information"); `cie24b93fc` ("Develop a survey by applying questionnaire design principles of clear language, unambiguous questions and consideration of number of choices"); both partial.
- Correction: add a card on the investigation steps (issue, question, collect, organise and display, analyse, conclude); a statistical question as one whose answers vary across a named target population; and the three principles with a fault and a fix each: clear language (no jargon or vague words like "often"), unambiguous questions (one idea, a time frame, answer boxes with no overlaps or gaps, such as "7 to under 8"), number of choices (enough to fit every answer exactly once, few enough to read; an odd number for a rating scale).
- Reason: both points are syllabus steps the site skips. Video d01 teaches them.

### MSY-34. Privacy, ethics and responsiveness to diverse groups and cultures are not taught

- Lesson: `lesson02.sa.html` (bias types only); SA 2 uses a drug-use survey outside a nightclub.
- Point: `ci63195120` ("Examine issues of privacy, bias, ethics and responsiveness to diverse groups and cultures"), partial.
- Correction: add a card on privacy (collect only what is needed; anonymous or confidential; details can combine to identify one person; report groups), ethics (informed consent; free to skip or stop; school and parent permission for under-18s; no harm; report every result) and responsiveness to diverse groups and cultures (options that don't assume one kind of household, "prefer not to say", plain English, translations, paper and accessible formats, trialling the survey with people from different groups), kept general. Replace SA 2's context with a non-sensitive one.
- Reason: three of the four named issues have no page; the nightclub example is sensitive for a Year 11 page. Video d02 teaches them.

### MSY-35. A call-in vote labelled "selection bias" (minor)

- Lesson: `lesson02.sa.html`, card 06 true/false: "A TV station asking viewers to call in and vote is an example of selection bias because only motivated viewers call."
- Correction: "... is a self-selected sample: only motivated viewers call, so strong opinions are over-represented (self-selection bias)."
- Reason: the page's own card 06 and `lesson09` (trap 02, MC 4) call this self-selection; the true/false item uses a different term for the same case, so either answer can be argued. Video d03 uses "self-selected sample" (Year 12 p08 recalls it).

### MSY-36. Experiments, observational studies and misrepresentation are not taught

- Lessons: `lesson02.sa.html`, `lesson09.sa.html` (sampling bias, non-response, confirmation bias).
- Point: `ci4c7cc505` ("Describe the potential faults in the design and practicalities of a data collection process by considering survey design, experiments and observational studies, and misunderstandings and misrepresentations"), partial.
- Correction: add a card contrasting an observational study ("just watching what happens") with a controlled experiment ("change one thing on purpose and keep everything else the same"), why only a fair experiment with random groups can show cause, faults in each (another factor; self-chosen groups; people knowing they are watched; too short or too small), practical faults (non-response, rounding, typing errors, an unusual week), and misrepresentation (a cause claimed from observation, a sample generalised too far, a percentage of a tiny sample).
- Reason: the point names experiments and observational studies; Year 12 b03 recalls them. Video d04 teaches them in b03's words.

### MSY-37. "Discrete = whole numbers", Year 12 labels, and "depending on responses"

- Lesson: `lesson09.sa.html`: card 02 "Discrete = countable whole numbers (number of siblings)"; the page title "Types of Data and Sampling | HSC Maths Standard Year 12" and the back link "Module 7 · Lesson 12" on a Year 11 page.
- Points: `ci038853db`; `ci87535c02` ("Identify collections of data that can be described as numerical or categorical depending on responses").
- Correction: "Discrete: counted; separate values with gaps between them, often whole numbers (shoe sizes go up in halves)"; relabel the page Year 11 and fix the back link; add an example of one question collected two ways (hours typed as a number: continuous numerical; hours ticked in ranges: ordinal categorical).
- Reason: the page's own table lists shoe size as discrete, which is not always whole; the labels send Year 11 students to the wrong course; the fourth point is taught only through postcodes. Video d05 teaches all three.

### MSY-38. No frequency polygon, no cumulative graph, no digital tools; frequency density beyond the syllabus

- Lesson: `lesson12.sa.html`, cards 05 and 06 (a cumulative column; histograms with "frequency density for unequal-width classes"; "Bars touch each other, no gaps, because the data is continuous").
- Point: `cia7a007a6` ("... frequency distribution table or a cumulative frequency distribution table and graph the associated histogram with polygon, both with and without using digital tools").
- Correction: add the frequency polygon (class centres, closed on the axis at the centres of the empty classes either side); the cumulative frequency histogram and polygon (points at the upper class boundaries, starting at zero at the first lower boundary; reading "less than", "at least" and "between"); and both drawn with a spreadsheet (running-total formula, column chart with no gap, line chart) or a statistics app. Use equal-width classes and move frequency density to an extension note. Extend "bars touch because the data is continuous" to "because the classes meet on a number line" (grouped discrete data too).
- Reason: the polygon and the cumulative graph are named in the point and the page draws neither; frequency density is not in the 2024 Standard syllabus. Videos d06a and d06b teach them.

### MSY-39. No spreadsheet organising or graphing; "bar chart" against "column graph"

- Lessons: none for `cia127389f` ("Use a spreadsheet to organise and represent data using appropriate graphs"; crosswalk: missing); `lesson12.sa.html` says "bar chart" for categorical data.
- Correction: add a spreadsheet card: raw answers in a column, COUNTIF to count each category (for example `=COUNTIF(B2:B21,"bedroom")`), a percentage column, a column chart with a title and axis labels, and a histogram (gap set to zero) for numerical data. Use the syllabus term "column graph".
- Reason: a whole point with no page; Year 12 b06 recalls "Year 11: spreadsheet charts". Video d07 teaches it.

### MSY-40. Dot plots, line graphs, sector graphs and divided bar charts are named but not taught

- Lesson: `lesson12.sa.html` teaches stem-and-leaf and back-to-back plots (card 07) only.
- Point: `cib2984676` ("Interpret and analyse dot plots, line graphs, sector graphs, stem-and-leaf plots, back-to-back stem-and-leaf plots and divided bar charts related to real-world applications").
- Correction: add short reading cards: dot plot (one dot per value; count dots); line graph (change over time; the slope as the rate; only the points are measured); sector graph (share = angle ÷ 360°; amount = share × total); divided bar chart (share = part length ÷ whole length); keep the back-to-back key rule (left leaves read outwards).
- Reason: four of the six named displays have no page. Video d08 teaches all six with one reading routine.

### MSY-41. "Uniform" is not taught, and shapes are named without reasons

- Lessons: `lesson12.sa.html` (key term "Skew"; card 06 "Modality: Unimodal (one peak) or bimodal (two peaks)?"); `lesson10.sa.html` card 06 (unimodal, bimodal, multimodal, "no mode").
- Point: `cie2345a02` ("Identify and describe datasets as uniform, unimodal, bimodal or multimodal"), partial; `ci0c94e728` (shape).
- Correction: add "Uniform: a flat shape; every value or class is about equally common (for example, a fair die rolled many times)", and contrast it with "symmetric" (a mirror image, which need not be flat). Add one line asking for a reason in context with every shape (screen time is positively skewed because it can't go below zero but a few use their phones for hours), and one line that two peaks often mean two groups mixed together.
- Reason: "uniform" is in the point and absent from the site; "describe" in both points expects more than a label. Video d09 teaches both.

### MSY-42. No infographic analysis; limitations not taught; sensitive examples in SA 3

- Lesson: `lesson12.sa.html`: no infographic; the top-3 list asks for three misleading techniques without teaching any; SA 3 (b) cites climate data, COVID graphs and political polling.
- Points: `ci2c2bc777` ("Analyse a statistical infographic and justify the choice of graphical representations used for the relevant dataset"; missing); `ci9c22fcc3` ("Interpret and consider limitations of graphical representations to make conclusions and predictions"; partial); `ciebdc8d60` ("Explain why a given graphical representation can lead to a misinterpretation of data"; partial).
- Correction: add a card that analyses one infographic tile by tile (what data, which graph, why it suits), then teaches the main misleading features with a picture each (a truncated axis; icons scaled in both directions, so the area grows four times; 3D sector graphs; uneven scales; a cherry-picked range; a percentage with no sample size) and the limits on conclusions and predictions (the sample, the time, observation against cause, averages hiding spread, nothing beyond the data). Replace SA 3 (b)'s examples with everyday ones (sales, rubbish collected, a survey poster).
- Reason: one point has no page and two are only touched; the political and health-crisis examples are not suitable for a Year 11 maths page. Video d10 teaches all three points on the strand's own survey poster.

### MSY-43. "The only measure" lines, and a Year 12 code on a Year 11 page (minor)

- Lesson: `lesson10.sa.html`: card 06 "The mode is the only measure of centre that applies to categorical data"; card 05 warning "The mean is the only measure of centre affected by outliers"; the page header shows the course code "MS12-8" (lesson12 shows "MS12-2", lesson11 "MS12-2", lesson13 "MS12-9").
- Points: `ciaf232c38`, `ci1ce7c84d`.
- Correction: "The mode is the only measure of centre for nominal categories (for ordinal categories, a median category can also be found)"; "The mean is the measure most affected by outliers; the median is resistant" (a mode can also be unrepresentative); replace the Year 12 codes with the Year 11 outcome (MST-11-08).
- Reason: the absolute lines are slightly too strong, and the codes point Year 11 students to Year 12 outcomes. Videos d11 and d12 use the softened wording.

### MSY-44. The spread page leads with the sample formula; "average distance"; an IQR slip

- Lesson: `lesson11.sa.html`: key ideas box "Standard deviation: s = √(Σ(x − x̄)² ÷ (n − 1)) (sample), average distance from the mean"; key terms "measures the average distance of each value from the mean"; SA 1 (c) answer: "Without 50: range = 27 (drops by 15); IQR = 15 (unchanged)".
- Points: `ci5bdca88b`, `ci14ad4af7` ("Calculate the range and population standard deviation σ ...").
- Correction: lead with σ (population), as the page's own "Beyond the syllabus" note says, and move s to that note; describe σ as "roughly the typical distance of the values from the mean" (it is not exactly the average distance: for 0, 1, 2, 6, 7, 8 the mean distance is 3 and σ is 3.11); fix SA 1 (c): without 50 the nine values 8, 12, 15, 18, 20, 22, 25, 30, 35 have Q1 = 13.5, Q3 = 27.5 and IQR = 14 (it changes by 1, against the range's 15), so the conclusion "the range changes far more" still holds.
- Reason: the assessed measure should come first; "average distance" is a common misreading; the IQR claim is arithmetically wrong. Video d13 teaches σ by calculator with the softened wording; d15 and d19 use correct IQRs.

### MSY-45. No spreadsheet statistics; a comparison example contradicts itself

- Lessons: none for `ci6446263f` ("Use a spreadsheet to analyse data including calculating measures of centre and spread"; crosswalk: missing); `lesson07.sa.html` WE: step 3 "Both have equal range" (90 − 45 = 45 and 95 − 50 = 45), then the final statement "Class Y is more consistent with a slightly wider overall range".
- Correction: add a spreadsheet card: two groups in two columns; =COUNT, =AVERAGE, =MEDIAN, =MAX()−MIN(), =STDEV.P() under each, filled across; a comparison sentence from the results. Change the WE's final line to "Class Y is more consistent (IQR 13 against 20); both have the same range (45)".
- Reason: a whole point has no page; the WE's final line contradicts its own working. Video d14 teaches the spreadsheet comparison.

### MSY-46. The box plot page: fences before outliers, no graph sources, no clusters or gaps, and two errors

- Lesson: `lesson13.sa.html`.
- Points: `ci4c0893da` (box plots "with and without using digital tools"); `ci2d7c794d` ("Determine quartiles from datasets displayed in histograms and dot plots ..."); `ci72ffda24` ("Identify clusters, gaps and outliers and explain their occurrence in the context of the data"); `ci02be1794` (the fences).
- Findings and corrections:
  1. WE 2 (data 10, 12, 15, 18, 20, 22, 25, 28, 30, 60), step 2 shows "Lower half: 10,12,15,18,20 → Q1 = 15 (the middle value)" and, beside it, "Lower half: 10,12,15,18,20. Q1 = (12+15)/2 = 13.5". Delete the second line (Q1 = 15 is correct).
  2. SA 2: "Class A: min=50 ... Class B: min=40 ... Both have one outlier each (Class A: 45, Class B: 35)". With Q1 65, IQR 17, Class A's lower fence is 39.5, so 45 is not an outlier (and 45 is below the stated minimum of 50); Class B's lower fence is 60 − 37.5 = 22.5, so 35 is not an outlier either. Either change the summaries so the stated values fall outside the fences (for example Class A minimum 45 shown as a point with Q1 65 and IQR 10, fence 50) or drop the outlier sentence.
  3. The page draws whiskers "to the most extreme values within the fences" from card 08 onward; state first that a basic box plot's whiskers run to the minimum and maximum (the five-number summary), then show the outlier version.
  4. Add quartiles from a dot plot and from a histogram whose bars are single values (count to the positions; running totals), and one sentence that grouped histograms only allow estimates.
  5. Add clusters ("a group of values bunched close together") and gaps ("a stretch of the number line with no values"), each explained in context, and one line on the fence rule's limit when data form two clusters (the IQR becomes wide).
  6. Add box plots drawn by an app or spreadsheet, with a note to check its quartile rule and outlier setting.
- Reason: two arithmetic and consistency errors; three point clauses with no teaching. Videos d15 to d18 teach them.

### MSY-47. "Leaves the median unchanged" (minor)

- Lesson: `lesson10.sa.html`, card 08: "An outlier pulls the mean toward it but leaves the median unchanged"; key ideas: "Median ... Not affected by outliers".
- Point: `ci38858a7c` ("Explain the impact of outliers on the measures of centre and spread").
- Correction: "An outlier pulls the mean toward it; the median barely moves (removing one value can shift it by a single step along the ordered list)". Add the spread side: the range and the standard deviation are pulled by an outlier; the IQR barely moves.
- Reason: the absolute claim is not always true (removing 80 from lesson10's own SA 1 data moves the median from 23.5 to 22); the point asks about spread as well as centre. Video d19 teaches both with the sleep data.
