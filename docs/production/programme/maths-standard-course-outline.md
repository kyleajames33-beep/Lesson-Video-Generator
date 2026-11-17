# Mathematics Standard: proposed whole-course outline

Research for the Maths Standard start, 18 November 2026, using the methods of brief 243. All 333 official content points (2024 syllabus, read from the NSW Curriculum site on 18 November 2026) have an owner: 79 Year 11 content videos and 92 Year 12 content videos, plus 4 optional practice videos. Assignment is a proposed teaching home, not approval, and not evidence that a site page fully teaches the point. Exact official HTML and the point-to-video ledger are in the companion JSON and in `syllabus/maths-standard-2024-crosswalk.json`.

**Courses.** Year 11 is one course for Standard 1 and Standard 2 (119 points). Year 12 has separate Standard 1 (71 points, 7 focus areas) and Standard 2 (143 points, 10 focus areas) courses with separate codenames. Year 12 videos are built on Standard 2 and also own the matching Standard 1 points; the Course column shows who needs each video (S1, S2). 45 Year 12 videos serve Standard 1.

**Timeline.** The official page (read 18 November 2026) says the 2024 syllabus is implemented from 2026, Year 12 teaching starts in Term 4 2026 and the first HSC is in 2027. This matches `syllabus/timeline.md` (Year 11 from Term 1 2026). Both years are being taught now.

**Id prefixes.** Year 11 (`math-s11-`): f = Formulas and equations; l = Linear relationships; e = Earning money; m = Managing money; a = Applications of measurement; t = Time and location; n = Networks, paths and trees; d = Data analysis; x = optional practice. Year 12 (`math-s12-`): a = Algebraic relationships; i = Investment, loans and annuities (i19 to i23 are Annuities); t = Trigonometry (Standard 1 Right-angled triangles); r = Ratios and rates; b = Bivariate data analysis; p = Relative frequency and probability; z = The normal distribution; c = Critical path analysis; f = Network flow; x = optional practice.

**Recommended order.** Year 11: formulas, linear relationships, earning money, managing money, measurement, time and location; data analysis and networks can run in parallel at any point. Year 12: algebraic relationships, money (investment, loans, annuities), ratios and rates, trigonometry, bivariate data, probability, the normal distribution, critical path analysis, network flow. Reasons are in the JSON (`orderReasons`). The syllabus listing order is not a mandated teaching order.

**Everyday anchors.** Standard students need practical contexts: pay slips, phone plans, car costs, rent and bills, sport results, travel times, cooking quantities, part-time work. Keep science contexts rare.

| Order | Proposed id | Course | Main learner question | Content point codenames | Site source(s) | Advanced reuse candidate |
|---|---|---|---|---|---|---|
| 1 | math-s11-f01 | Y11 | How do we substitute values into a formula and trust the answer? | ci7f303375, cib2f9cd13, ci2343d424 | Y11 formulas-and-equations/lesson01; Y11 formulas-and-equations/lesson08 |  |
| 2 | math-s11-f02 | Y11 | How do we turn a word problem into an equation, solve it and check it makes sense? | ci2acef85d | Y11 formulas-and-equations/lesson02; Y11 formulas-and-equations/lesson03 |  |
| 3 | math-s11-f03 | Y11 | How do we change the subject of a formula, including y = ax^2 + c? | cib54d5e23 | Y11 formulas-and-equations/lesson04; Y11 formulas-and-equations/lesson07 |  |
| 4 | math-s11-f04 | Y11 | How do speed, time and stopping distance connect, and why does speed matter so much? | ci61d581aa | Y11 formulas-and-equations/lesson07; Y12 ratios-and-rates/lesson01 |  |
| 5 | math-s11-f05 | Y11 | How do the BAC formulas estimate blood alcohol from drinks, hours and body weight? | ci9f40765a | No site lesson; syllabus only |  |
| 6 | math-s11-f06 | Y11 | How long until BAC returns to zero, and why is any BAC estimate only rough? | cifd71015e, ci9caaa5c5 | No site lesson; syllabus only |  |
| 7 | math-s11-f07 | Y11 | How do Fried's, Young's and Clark's formulas scale a medicine dose for a child? | ci700a4fe8 | No site lesson; syllabus only |  |
| 8 | math-s11-f08 | Y11 | How does a spreadsheet apply one formula to a whole table of cases? | ciffbbbd58, ci2343d424 | Y11 formulas-and-equations/lesson06 |  |
| 9 | math-s11-l01 | Y11 | What do the gradient and y-intercept tell us, from a graph or an equation? | ci94641a48, cic0a28004 | Y11 linear-relationships/lesson02; Y11 linear-relationships/lesson03 | math-a11-w10, math-a11-w11 |
| 10 | math-s11-l02 | Y11 | How do we write y = mx + c and draw the line, by hand and with technology? | ciafd3b572, ci5ff71229 | Y11 linear-relationships/lesson01; Y11 linear-relationships/lesson03 | math-a11-w10, math-a11-w11 |
| 11 | math-s11-l03 | Y11 | How does a linear model describe a real situation, and what do its gradient and intercept mean? | cib2d6c0df | Y11 linear-relationships/lesson02; Y11 linear-relationships/lesson03; Y11 formulas-and-equations/lesson05 | math-a11-w12 |
| 12 | math-s11-l04 | Y11 | When can we trust a prediction from a linear model? | ci4777471a, ci1b3cf962 | Y11 formulas-and-equations/lesson05 |  |
| 13 | math-s11-l05 | Y11 | How does a spreadsheet build and test a linear model? | ci80b8ed46 | Y11 formulas-and-equations/lesson06 |  |
| 14 | math-s11-l06 | Y11 | What makes direct variation special, and how does one pair of values give k? | cie0224c11, ci6f88d684, cic7837e3f, ci04c5dcb2 | Y11 linear-relationships/lesson04 | math-a11-w22 |
| 15 | math-s11-l07 | Y11 | How do we graph y = kx and use the graph to solve problems? | cifb738725 | Y11 linear-relationships/lesson04 | math-a11-w22 |
| 16 | math-s11-e01 | Y11 | How do salaries and wages compare across weekly, fortnightly, monthly and yearly pay? | ci80921f0a, ci7d0d168c | Y11 earning-money/lesson01 |  |
| 17 | math-s11-e02 | Y11 | How do overtime and penalty rates change a pay packet? | ci652749aa | Y11 earning-money/lesson02; Y11 earning-money/lesson04 |  |
| 18 | math-s11-e03 | Y11 | How does commission, including a sliding scale, pay for sales? | ci85c34acf | Y11 earning-money/lesson03 |  |
| 19 | math-s11-e04 | Y11 | How are piecework, royalties, government payments and sole-trader income worked out? | ci85c34acf | Y11 earning-money/lesson03; Y11 earning-money/lesson05 |  |
| 20 | math-s11-e05 | Y11 | What is leave loading, and how much extra does it pay? | ci9724bbbe | Y11 earning-money/lesson03 |  |
| 21 | math-s11-e06 | Y11 | How does a spreadsheet model a pay packet with overtime, bonuses and commission? | cic3748618 | No site lesson; syllabus only |  |
| 22 | math-s11-e07 | Y11 | How do allowable deductions turn income into taxable income? | ci1e53d540 | Y11 earning-money/lesson07 |  |
| 23 | math-s11-e08 | Y11 | How does a tax table give the tax payable on a year of income? | cifaf82aa0 | Y11 earning-money/lesson08 |  |
| 24 | math-s11-e09 | Y11 | How does PAYG take tax out of each weekly, fortnightly or monthly pay? | cic3cf78c6 | Y11 earning-money/lesson04; Y11 earning-money/lesson06; Y11 earning-money/lesson08 |  |
| 25 | math-s11-e10 | Y11 | How are the Medicare levy and net pay calculated? | cieb8d7d73, ci87c8a7d9 | Y11 earning-money/lesson06; Y11 earning-money/lesson08 |  |
| 26 | math-s11-e11 | Y11 | After a tax return, do we get a refund or owe more tax? | ci7b90b994 | Y11 earning-money/lesson08 |  |
| 27 | math-s11-e12 | Y11 | How does a spreadsheet test different tax scenarios? | ci877a99ed | No site lesson; syllabus only |  |
| 28 | math-s11-m01 | Y11 | How do percentage increases and decreases set prices, profit and loss? | cib256693a | Y11 managing-money/lesson03 |  |
| 29 | math-s11-m02 | Y11 | How do we add or remove GST, and how does VAT work overseas? | cib3251328, cib09c3969 | Y11 managing-money/lesson01; Y11 managing-money/lesson02 |  |
| 30 | math-s11-m03 | Y11 | What does buy now, pay later really cost? | cif403be54 | Y11 managing-money/lesson04 |  |
| 31 | math-s11-m04 | Y11 | What does buying on terms cost, and which way of paying suits a purchase? | ci6124d502, ci039eaed1 | Y11 managing-money/lesson04 |  |
| 32 | math-s11-m05 | Y11 | What does it really cost to buy a car and get it on the road? | ci5b329382 | Y11 managing-money/lesson05 |  |
| 33 | math-s11-m06 | Y11 | What does a car cost to run each year, and how does a spreadsheet track it? | ci9d6326d6, ci61920f78 | Y11 managing-money/lesson05 |  |
| 34 | math-s11-m07 | Y11 | How do we read and check electricity, water and gas bills? | ci345de108 | Y11 managing-money/lesson01 |  |
| 35 | math-s11-m08 | Y11 | How do we build a personal budget, on paper and in a spreadsheet? | ci03b1617b, cidfff72ec | Y11 managing-money/lesson06; Y11 managing-money/lesson01 |  |
| 36 | math-s11-m09 | Y11 | How do saving, an emergency fund and tracking spending protect us from money trouble? | ci3d78450e | Y11 managing-money/lesson06 |  |
| 37 | math-s11-a01 | Y11 | How do we convert between units of length, mass and capacity? | ci29461234, ci529c4c4e, ci9035ede7 | Y11 applications-of-measurement/lesson01; Y11 applications-of-measurement/lesson12 |  |
| 38 | math-s11-a02 | Y11 | Why do area and volume conversions multiply the length factor two and three times? | ci2d6e3fa8, cid416990e | Y11 applications-of-measurement/lesson01 |  |
| 39 | math-s11-a03 | Y11 | How do cubic centimetres and cubic metres become millilitres, litres and kilolitres? | ci880a544f | Y11 applications-of-measurement/lesson01; Y11 applications-of-measurement/lesson08 |  |
| 40 | math-s11-a04 | Y11 | How do prefixes such as nano, mega and giga become powers of ten? | ci7526e53a | Y11 applications-of-measurement/lesson11 |  |
| 41 | math-s11-a05 | Y11 | How do we find perimeters and areas of shapes, sectors and composite shapes? | ci139f00a0 | Y11 applications-of-measurement/lesson02; Y11 applications-of-measurement/lesson04; Y11 applications-of-measurement/lesson05 |  |
| 42 | math-s11-a06 | Y11 | How does Pythagoras' theorem find a missing side? | cib49e1f1d | Y11 applications-of-measurement/lesson03 |  |
| 43 | math-s11-a07 | Y11 | How do we find the perimeter and area of an irregular block of land by cutting it up? | ci05a36ac3 | Y11 applications-of-measurement/lesson02 |  |
| 44 | math-s11-a08 | Y11 | How do we find the surface area of prisms, cylinders, spheres and composite solids? | ci5c8f765b | Y11 applications-of-measurement/lesson06; Y11 applications-of-measurement/lesson07 |  |
| 45 | math-s11-a09 | Y11 | How do volume and capacity work for prisms and cylinders? | ci6e07f2cb | Y11 applications-of-measurement/lesson08 |  |
| 46 | math-s11-a10 | Y11 | Why do pyramids and cones hold a third of a prism, and how do spheres compare? | ci6e07f2cb | Y11 applications-of-measurement/lesson09 |  |
| 47 | math-s11-a11 | Y11 | How does the trapezoidal rule estimate an irregular area or volume? | ci3786e651 | Y11 applications-of-measurement/lesson13 |  |
| 48 | math-s11-t01 | Y11 | How do we convert between seconds, minutes and hours, and between 12-hour and 24-hour time? | cic8bbf9d6, cicd3af9e2 | Y11 time-and-location/lesson01 |  |
| 49 | math-s11-t02 | Y11 | How do we calculate elapsed time from timetables and schedules? | cia32b799a | Y11 time-and-location/lesson01 |  |
| 50 | math-s11-t03 | Y11 | How do latitude and longitude pin down any place on Earth? | ci922e564d | Y11 time-and-location/lesson03 |  |
| 51 | math-s11-t04 | Y11 | How does longitude give time differences at 15 degrees per hour? | cib18a3d4b | Y11 time-and-location/lesson03 |  |
| 52 | math-s11-t05 | Y11 | How do Australian time zones and daylight saving work? | cidfef63ed | Y11 time-and-location/lesson02 |  |
| 53 | math-s11-t06 | Y11 | How does UTC make international time problems simpler? | ci840445ac, ci9f3c20ba | Y11 time-and-location/lesson02 |  |
| 54 | math-s11-n01 | Y11 | What is a network, and where do networks appear in real life? | ci4513c403, ci2d693812 | Y11 networks-paths-and-trees/lesson01 |  |
| 55 | math-s11-n02 | Y11 | What do vertex, edge, degree, directed and weighted mean? | cica79bb9b | Y11 networks-paths-and-trees/lesson01; Y11 networks-paths-and-trees/lesson02 |  |
| 56 | math-s11-n03 | Y11 | How do we draw a network from a table or a map and use it to solve a problem? | ci022052d4, ci51fdc3e5 | Y11 networks-paths-and-trees/lesson01; Y11 networks-paths-and-trees/lesson02 |  |
| 57 | math-s11-n04 | Y11 | What are paths, trees and spanning trees? | ci0eb52b4b | Y11 networks-paths-and-trees/lesson03; Y11 networks-paths-and-trees/lesson04 |  |
| 58 | math-s11-n05 | Y11 | How does a minimum spanning tree connect everything for the least cost? | cicce79437, cif65754dc | Y11 networks-paths-and-trees/lesson05 |  |
| 59 | math-s11-n06 | Y11 | How do we find the shortest path through a network? | ci5aa7836f | Y11 networks-paths-and-trees/lesson06 |  |
| 60 | math-s11-n07 | Y11 | When is the shortest path not the best path? | ci53383df4 | No site lesson; syllabus only |  |
| 61 | math-s11-d01 | Y11 | How does a statistical investigation start with a clear question and a fair survey? | ci22ad0284, cie24b93fc | Y11 data-analysis/lesson02; Y11 data-analysis/lesson09 |  |
| 62 | math-s11-d02 | Y11 | What privacy, bias and ethics questions come with collecting data about people? | ci63195120 | Y11 data-analysis/lesson02 |  |
| 63 | math-s11-d03 | Y11 | Which sampling method gives a sample that represents the population? | ci3d27ce1c, ciefb0c944 | Y11 data-analysis/lesson02; Y11 data-analysis/lesson09 |  |
| 64 | math-s11-d04 | Y11 | What can go wrong when we collect data? | ci4c7cc505 | Y11 data-analysis/lesson02; Y11 data-analysis/lesson09 |  |
| 65 | math-s11-d05 | Y11 | Is this data numerical or categorical, discrete or continuous, nominal or ordinal? | cic8a0b6e9, ci038853db, cic17a10b5, ci87535c02 | Y11 data-analysis/lesson09 | math-a11-s09 |
| 66 | math-s11-d06 | Y11 | Why do we group data, and how do frequency tables and histograms show it? | cib752696f, cia7a007a6 | Y11 data-analysis/lesson12 | math-a11-s10, math-a11-s11 |
| 67 | math-s11-d07 | Y11 | Which graph suits a dataset, including categorical data and spreadsheet graphs? | cic1f6796f, ci01aceb17, cia127389f | Y11 data-analysis/lesson12 |  |
| 68 | math-s11-d08 | Y11 | How do we read dot plots, stem-and-leaf plots, line graphs, sector graphs and divided bar charts? | cib2984676 | Y11 data-analysis/lesson12 |  |
| 69 | math-s11-d09 | Y11 | What does the shape of a distribution tell us? | ci0c94e728, cie2345a02 | Y11 data-analysis/lesson12; Y11 data-analysis/lesson10 |  |
| 70 | math-s11-d10 | Y11 | How can a graph or infographic inform us, or mislead us? | ci2c2bc777, ci9c22fcc3, ciebdc8d60 | Y11 data-analysis/lesson12 |  |
| 71 | math-s11-d11 | Y11 | How do the mean, median and mode measure the centre of a dataset? | ciaf232c38 | Y11 data-analysis/lesson10 | math-a11-s11 |
| 72 | math-s11-d12 | Y11 | When is the mean, median or mode the right measure of centre? | ci1ce7c84d, ci6dfbf5c5 | Y11 data-analysis/lesson10; Y11 data-analysis/lesson07 |  |
| 73 | math-s11-d13 | Y11 | How do the range and standard deviation measure spread? | ci5bdca88b, ci14ad4af7 | Y11 data-analysis/lesson11 |  |
| 74 | math-s11-d14 | Y11 | How do we compare two datasets using centre and spread, by hand and in a spreadsheet? | ciabf18f84, ci6dfbf5c5, ci6446263f | Y11 data-analysis/lesson07; Y11 data-analysis/lesson11 |  |
| 75 | math-s11-d15 | Y11 | How do quartiles, the five-number summary and the IQR describe spread? | ci3247f05b, ci955be675, cib3d54f04 | Y11 data-analysis/lesson11; Y11 data-analysis/lesson13 |  |
| 76 | math-s11-d16 | Y11 | How do we draw and read a box plot, including from a histogram or dot plot? | ci4c0893da, ci2d7c794d, cic5161f3b | Y11 data-analysis/lesson13 |  |
| 77 | math-s11-d17 | Y11 | How do parallel box plots compare two groups? | cia0dff040 | Y11 data-analysis/lesson13; Y11 data-analysis/lesson07 |  |
| 78 | math-s11-d18 | Y11 | How do we spot clusters, gaps and outliers, and test an outlier formally? | ci72ffda24, ci02be1794 | Y11 data-analysis/lesson13; Y11 data-analysis/lesson12 |  |
| 79 | math-s11-d19 | Y11 | How does one outlier change the measures of centre and spread? | ci38858a7c | Y11 data-analysis/lesson13; Y11 data-analysis/lesson11 |  |
| 80 | math-s11-x01 | Y11 optional | Which pay, tax or purchase calculation does an unseen money problem need? |  | No site lesson; syllabus only |  |
| 81 | math-s11-x02 | Y11 optional | Which measurement, time or data tool does an unseen practical problem need? |  | No site lesson; syllabus only |  |
| 1 | math-s12-a01 | S1, S2 | How do two lines on a graph solve a pair of simultaneous equations? | cibad31b48, ci32b65c45 (S1: ci119862f0, ci8debaa08, ci8615a466) | Y12 algebraic-relationships/lesson01 | math-a11-w13 |
| 2 | math-s12-a02 | S2 | How do we solve simultaneous equations with algebra instead of a graph? | ci32b65c45 | Y12 algebraic-relationships/lesson01 | math-a11-w13 |
| 3 | math-s12-a03 | S1, S2 | How do we build simultaneous equations from a real situation and interpret the answer? | cicd165702, ci5f61f6ec (S1: ci8615a466) | Y12 algebraic-relationships/lesson02 | math-a11-w13 |
| 4 | math-s12-a04 | S1, S2 | Where is the break-even point, and what does it say about profit and loss? | ci7ff6c8c4, ciaa0d09e2 (S1: cic9643bd9, ci8b3fb7f8) | Y12 algebraic-relationships/lesson02 | math-a11-w13 |
| 5 | math-s12-a05 | S1, S2 | How do tables, graphs and equations show exponential growth and decay? | cidb32c4b8, ci8b7a1643 (S1: ci3bda1c7e) | Y12 algebraic-relationships/lesson03 | math-a11-e01 |
| 6 | math-s12-a06 | S2 | How do we build an exponential model, and what does its starting value mean? | ci649c035d, ci7d79f487 | Y12 algebraic-relationships/lesson03 | math-a11-e01 |
| 7 | math-s12-a07 | S1, S2 | Where do linear and exponential models stop matching reality? | ci5c87181e (S1: cid72ff748) | Y12 algebraic-relationships/lesson03 |  |
| 8 | math-s12-a08 | S1 (S2 optional) | How do we sketch a graph that tells the story of a real situation? | S1: cice949e38 | No site lesson; syllabus only |  |
| 9 | math-s12-a09 | S2 | What shape does a quadratic make, and where are its vertex and axis of symmetry? | ci0ba98146, cie98a4311, ci468232d2 | Y12 algebraic-relationships/lesson04 | math-a11-w14, math-a11-w16 |
| 10 | math-s12-a10 | S2 | How do the x-intercepts of a parabola locate its vertex? | ci75131568, ciea5db2d8 | Y12 algebraic-relationships/lesson04 | math-a11-w15 |
| 11 | math-s12-a11 | S2 | How do we use a quadratic graph to solve a practical problem, and where does the model stop working? | ci73f0af63, cic7ff4ee6, ci88f43c88 | Y12 algebraic-relationships/lesson05 | math-a11-w19 |
| 12 | math-s12-a12 | S2 | What is inverse variation, and why is its graph a hyperbola? | cia6ad469c, cib706ce50, ci8731b977 | Y12 algebraic-relationships/lesson06 | math-a11-w21, math-a11-w23 |
| 13 | math-s12-a13 | S2 | How do we build and use a reciprocal model, and where does it fail? | ci0021fc94, cib9514f33, cib10770ae | Y12 algebraic-relationships/lesson06 | math-a11-w23 |
| 14 | math-s12-i01 | S1, S2 | How does simple interest grow, and what does its graph look like? | cif2fdb59a, ciddd3a836, ci04f3e92c (S1: ci9ef22098, ci74c61185, ci32753eab) | Y12 investment-and-loans/lesson05 |  |
| 15 | math-s12-i02 | S1, S2 | How does compound interest earn interest on interest? | ci64a24122 (S1: cib6fe9f5b) | Y12 investment-and-loans/lesson06 | math-a12-f08 |
| 16 | math-s12-i03 | S1, S2 | How do inflation and appreciation use the compound interest formula? | ci1256741b (S1: cicf066fd6) | Y12 investment-and-loans/lesson06; Y12 investment-and-loans/lesson11 |  |
| 17 | math-s12-i04 | S2 | How do the rate, the term and the compounding period change an investment? | ciaa253014 | Y12 investment-and-loans/lesson06; Y12 investment-and-loans/lesson07 |  |
| 18 | math-s12-i05 | S1, S2 | Why does compound interest pull ahead of simple interest, and how does a spreadsheet show it? | ci75558132, cie4f17f46, ci5c8c3f23 (S1: ci617494ea, ciebe69650) | Y12 investment-and-loans/lesson06 |  |
| 19 | math-s12-i06 | S2 | How do we read share prices and calculate dividends and dividend yield? | cieba53790, cie1731909, ci8a691aa3 | Y12 investment-and-loans/lesson14 |  |
| 20 | math-s12-i07 | S2 | What does it really cost to buy shares once brokerage is added? | ci143c3551 | Y12 investment-and-loans/lesson15 |  |
| 21 | math-s12-i08 | S1, S2 | Savings account, term deposit, shares or property: which investment suits which goal? | ci14eee60d (S1: ci73459ef5) | Y12 investment-and-loans/lesson11; Y12 investment-and-loans/lesson15 |  |
| 22 | math-s12-i09 | S1, S2 | How does straight-line depreciation work? | cid762df37 (S1: ci34b68cb8) | Y12 investment-and-loans/lesson03 |  |
| 23 | math-s12-i10 | S1, S2 | How does declining-balance depreciation work, and why does it look like compound interest? | cif830811b (S1: ciffbbac75, cid65c76c0) | Y12 investment-and-loans/lesson03 |  |
| 24 | math-s12-i11 | S1, S2 | Which depreciation method loses value faster, and how does a spreadsheet compare them? | ci776a0f04, ci4311f343 (S1: ci7395c156, ci4d802367) | Y12 investment-and-loans/lesson03 |  |
| 25 | math-s12-i12 | S1, S2 | What do buy now pay later, short-term and long-term loans really cost? | ciad381478 (S1: ci9fb7eb0d) | Y12 investment-and-loans/lesson08 |  |
| 26 | math-s12-i13 | S1, S2 | How does a reducing balance loan change from one period to the next? | ci94e049c3, cibb416d3e (S1: cib9ea7be8, cica72a281) | Y12 investment-and-loans/lesson08; Y12 investment-and-loans/lesson09 | math-a12-f09 |
| 27 | math-s12-i14 | S1, S2 | How do extra repayments, lump sums and paying more often shorten a loan? | ci668ed87c (S1: ci69b1ad8f) | Y12 investment-and-loans/lesson08 | math-a12-f10 |
| 28 | math-s12-i15 | S2 | How do we find the repayment, amount owing, total paid and time to repay a loan? | ci659a906b | Y12 investment-and-loans/lesson08; Y12 investment-and-loans/lesson12 | math-a12-f11 |
| 29 | math-s12-i16 | S1, S2 | Why is a credit card a reducing balance loan, and what do its fees and interest-free period mean? | ci213a72e9, ci3480c9ff, ci435086e3 (S1: ci23d33e6f, ci9715d6e5, ci8a052732) | Y12 investment-and-loans/lesson10 |  |
| 30 | math-s12-i17 | S1, S2 | How is credit card interest charged by the day, and what does paying only the minimum cost? | cife5c18db, ci13e98315 (S1: ci42184aca, ci2dbee6b0) | Y12 investment-and-loans/lesson10 |  |
| 31 | math-s12-i18 | S1, S2 | Credit card or personal loan: which suits a short, medium or long-term goal? | ci3e2e1f21 (S1: ci52cad03f) | Y12 investment-and-loans/lesson10; Y12 investment-and-loans/lesson07 |  |
| 32 | math-s12-i19 | S2 | What is an annuity, and how does its balance build period by period? | cibac40b05, ci198f30b4, ci75f171a2 | Y12 annuities/lesson01 | math-a12-f12 |
| 33 | math-s12-i20 | S2 | How does a table of interest factors give an annuity's future or present value? | ci8032ba07 | Y12 annuities/lesson02; Y12 annuities/lesson03 |  |
| 34 | math-s12-i21 | S2 | How much must we put in to reach a savings goal? | cifb9dd435 | Y12 annuities/lesson02 |  |
| 35 | math-s12-i22 | S2 | How do the starting amount, payment, rate and term change an annuity's value? | ci025a6c75 | Y12 annuities/lesson02 | math-a12-f14 |
| 36 | math-s12-i23 | S2 | How do annuities answer superannuation, savings and loan decisions? | cieeb45b0f | Y12 annuities/lesson01; Y12 annuities/lesson03 |  |
| 37 | math-s12-t01 | S1, S2 | How do sine, cosine and tangent find a missing side of a right-angled triangle? | ci74344e24 (S1: ci07db556a) | Y12 trigonometry/lesson01; Y12 trigonometry/lesson02 |  |
| 38 | math-s12-t02 | S1, S2 | How do inverse trig ratios find a missing angle in degrees and minutes? | ci74344e24 (S1: cif8689656) | Y12 trigonometry/lesson03 |  |
| 39 | math-s12-t03 | S1, S2 | How do Pythagoras and trig solve height and distance problems with angles of elevation and depression? | cif644212f (S1: ci0f40c78b, cid1949529) | Y12 trigonometry/lesson04; Y11 applications-of-measurement/lesson03 | math-a11-t02a |
| 40 | math-s12-t04 | S1, S2 | How do true bearings and compass bearings describe a direction? | ci065df8b3 (S1: ci0b85c453) | Y12 trigonometry/lesson05 | math-a11-t02b |
| 41 | math-s12-t05 | S1, S2 | How do bearings and right-angled triangles solve a navigation problem? | cif644212f (S1: cid1949529) | Y12 trigonometry/lesson05 | math-a11-t02b |
| 42 | math-s12-t06 | S2 | How does the sine rule find a missing side in any triangle? | ci26620302 | Y12 trigonometry/lesson06 | math-a11-t05 |
| 43 | math-s12-t07 | S2 | How does the sine rule find a missing angle, including an obtuse one? | ci50b6961b, ci6b083940 | Y12 trigonometry/lesson06 | math-a11-t05, math-a11-t07 |
| 44 | math-s12-t08 | S2 | How does the cosine rule find a missing side or angle? | ci431f9599, ci3e1d3a01 | Y12 trigonometry/lesson07 | math-a11-t06 |
| 45 | math-s12-t09 | S2 | How does A = (1/2)ab sin C find the area of any triangle? | ci30a047f1 | Y12 trigonometry/lesson07 | math-a11-t05 |
| 46 | math-s12-t10 | S2 | How does a compass radial survey map a block of land? | cibe642c8e | Y12 trigonometry/lesson08 |  |
| 47 | math-s12-t11 | S2 | Which rule fits a practical problem with a non-right-angled triangle? | cif644212f | Y12 trigonometry/lesson07; Y12 trigonometry/lesson08 | math-a11-t07 |
| 48 | math-s12-r01 | S1, S2 | How do ratios relate to fractions, and how do we simplify them? | cie93c27e5, ci990d9b85, cic5bd20ef (S1: ci6765dce9, cib1e88569, ci93a4e9e1) | Y12 ratios-and-rates/lesson02 |  |
| 49 | math-s12-r02 | S1, S2 | How do we share a quantity in a given ratio? | cibeb03f49, cid7c41f39 (S1: cifec5763c, ci694b1fa7) | Y12 ratios-and-rates/lesson02 |  |
| 50 | math-s12-r03 | S2 | How does capture-recapture estimate a population we cannot count? | ci4c6fcd26 | Y12 ratios-and-rates/lesson05 |  |
| 51 | math-s12-r04 | S1, S2 | How does a map scale turn map distances into real distances? | ci58f841f3 (S1: ci0774b65d) | Y12 ratios-and-rates/lesson03; Y11 applications-of-measurement/lesson10 |  |
| 52 | math-s12-r05 | S2 | How do we construct a scale drawing? | ci9857fa6f | Y12 ratios-and-rates/lesson03 |  |
| 53 | math-s12-r06 | S1, S2 | How do building plans let us estimate materials and costs? | ci6a191fab (S1: ci16ea39e5, ci60e22975) | Y12 ratios-and-rates/lesson03 |  |
| 54 | math-s12-r07 | S2 | How does the trapezoidal rule find an area of land from a plan, photo or survey? | cie48a6b84 | Y12 ratios-and-rates/lesson04 |  |
| 55 | math-s12-r08 | S2 | How much water falls on a roof or a block of land in a storm? | ci5d0f766d | Y12 ratios-and-rates/lesson04 |  |
| 56 | math-s12-r09 | S1, S2 | How is a rate different from a ratio, and how do unit rates make comparisons fair? | ci5abc5522, ci26fe7fac, ci3d090d63 (S1: ci7b67ed32, cia705b6e3, cicd810e2c) | Y12 ratios-and-rates/lesson01 |  |
| 57 | math-s12-r10 | S1, S2 | How do we convert a rate into different units and use it to solve problems? | cib0e451ed, ciff825a61 (S1: ci088435d6, ci4b3c5e42) | Y12 ratios-and-rates/lesson01 |  |
| 58 | math-s12-r11 | S1, S2 | Which pack is the best buy? | cibecf9f22 (S1: cie8590152) | Y12 ratios-and-rates/lesson01 |  |
| 59 | math-s12-r12 | S1, S2 | What does a distance-time graph tell us about a journey? | cic3bbd162 (S1: ci30ebbe40) | Y12 ratios-and-rates/lesson01 |  |
| 60 | math-s12-r13 | S1, S2 | How does fuel consumption compare the efficiency of two vehicles? | cid3ee9707 (S1: ci1cf760e0) | Y12 ratios-and-rates/lesson01 |  |
| 61 | math-s12-r14 | S2 | How do watts, kilowatts and kilowatt hours set the cost of running an appliance? | ci09a38a5a, ci81925dcf | Y12 ratios-and-rates/lesson05; Y11 applications-of-measurement/lesson12 |  |
| 62 | math-s12-b01 | S1, S2 | When do we need bivariate data, and which variable is independent? | ci91fdb0d7, cibbeaeac3 (S1: cif80a9d87, ci2a5afecd) | Y12 bivariate-data-analysis/lesson04 |  |
| 63 | math-s12-b02 | S1, S2 | How do we draw a scatter plot and describe its form, direction and strength? | ci7511e8f1, ci8c04e655, ci2b7391e9 (S1: ci865ac4ef, ci999efce4, cic75eb64e) | Y12 bivariate-data-analysis/lesson04; Y12 bivariate-data-analysis/lesson05 |  |
| 64 | math-s12-b03 | S1, S2 | Does correlation mean one thing causes the other? | ci467160a5, cid820b203 (S1: ci3993719b, ci022a6fb8) | Y12 bivariate-data-analysis/lesson07 |  |
| 65 | math-s12-b04 | S1, S2 | How do we draw a line of best fit and read its equation from the graph? | cid27cc8e6, ci880296d0 (S1: ci1a3b6d30) | Y12 bivariate-data-analysis/lesson08 |  |
| 66 | math-s12-b05 | S2 | What does Pearson's correlation coefficient measure? | ci5401622a | Y12 bivariate-data-analysis/lesson06 |  |
| 67 | math-s12-b06 | S2 | How does a calculator or spreadsheet find the least-squares regression line? | ci9bd861ac, ci3f69b9d4 | Y12 bivariate-data-analysis/lesson09 |  |
| 68 | math-s12-b07 | S1, S2 | When can we trust a prediction from a line of best fit? | cic2eef7f5 (S1: cif0057f69) | Y12 bivariate-data-analysis/lesson10 |  |
| 69 | math-s12-p01 | S1, S2 | How do we measure chance from 0 to 1 and list every possible outcome? | ci2b76fece, cibe388b4c, ci035d42a7 (S1: ci5fa76f76, ci756e932d, ci69aa1698) | Y12 relative-frequency-and-probability/lesson01 | math-a11-s04 |
| 70 | math-s12-p02 | S1, S2 | How do we find a probability from equally likely outcomes, and the chance it does not happen? | ci6224eb8c, ci566abb19 (S1: ci7cb75229, ciefced297) | Y12 relative-frequency-and-probability/lesson01 | math-a11-s04, math-a11-s05 |
| 71 | math-s12-p03 | S1, S2 | How do arrays and tree diagrams list the outcomes of a two-stage event? | cice3fd0ea (S1: ci381dd4c8) | Y12 relative-frequency-and-probability/lesson02 | math-a11-s06 |
| 72 | math-s12-p04 | S2 | How do probability trees and P(A and B) = P(A) x P(B) handle multistage events? | cice3fd0ea, ci90a4b4a6 | Y12 relative-frequency-and-probability/lesson02 | math-a11-s06 |
| 73 | math-s12-p05 | S1, S2 | How does relative frequency estimate a probability, and why do more trials help? | ci6ac4e336, ci74635662 (S1: cid7b76603, ci35f2f92d) | Y12 relative-frequency-and-probability/lesson03 | math-a11-s10 |
| 74 | math-s12-p06 | S1, S2 | How many times should we expect an event to happen? | cib9b655d5 (S1: cif251c60d) | Y12 relative-frequency-and-probability/lesson03 |  |
| 75 | math-s12-p07 | S2 | How do Venn diagrams and two-way tables sort two attributes? | cidbbb1a76 | Y12 relative-frequency-and-probability/lesson04 | math-a11-s02 |
| 76 | math-s12-p08 | S1, S2 | How do the media, governments and companies use probability to make decisions? | cid7bfe21e (S1: cidcff3c3e) | Y12 relative-frequency-and-probability/lesson04 |  |
| 77 | math-s12-z01 | S2 | What does normally distributed data look like, and why do its mean, median and mode match? | cic0ba342d, cif956cc8e | Y12 the-normal-distribution/lesson06 | math-a12-s09 |
| 78 | math-s12-z02 | S2 | What does a z-score tell us, and how do we calculate it? | ci92695626, ci7864f60a, ci5c476cce | Y12 the-normal-distribution/lesson07 | math-a12-s11 |
| 79 | math-s12-z03 | S2 | How do z-scores compare results from different tests? | ci115110e6 | Y12 the-normal-distribution/lesson07; Y12 the-normal-distribution/lesson08 | math-a12-s11 |
| 80 | math-s12-z04 | S2 | How does the 68-95-99.7 rule describe normal data? | ci9d813bbf | Y12 the-normal-distribution/lesson03; Y12 the-normal-distribution/lesson06 | math-a12-s10 |
| 81 | math-s12-z05 | S2 | How do z-scores and shading under the curve give a probability? | ci8b7ebb67, cicf71571a | Y12 the-normal-distribution/lesson03; Y12 the-normal-distribution/lesson07 | math-a12-s10, math-a12-s11 |
| 82 | math-s12-z06 | S2 | How do z-scores tell us whether a result is unusual? | cicf797bee, ci36168bef | Y12 the-normal-distribution/lesson03; Y12 the-normal-distribution/lesson05 | math-a12-s11 |
| 83 | math-s12-c01 | S2 | How do we turn a precedence table into a project network, including dummy activities? | ci9043c6d8 | Y12 critical-path-analysis/lesson01; Y12 critical-path-analysis/lesson05 |  |
| 84 | math-s12-c02 | S2 | How do forward and backward scans find the earliest and latest start times? | ci1ebd8915 | Y12 critical-path-analysis/lesson02 |  |
| 85 | math-s12-c03 | S2 | What is the critical path, and how do float times reveal it? | ci7195eacb, ci3045f9aa, ci6087f0de, cib45f96bd | Y12 critical-path-analysis/lesson01; Y12 critical-path-analysis/lesson03 |  |
| 86 | math-s12-c04 | S2 | How does a Gantt chart show a project schedule and its critical path? | cid66dcd84 | Y12 critical-path-analysis/lesson04 |  |
| 87 | math-s12-c05 | S2 | What happens to the finish time when one activity speeds up or slows down? | ci96fea97a | Y12 critical-path-analysis/lesson04 |  |
| 88 | math-s12-c06 | S2 | How does a spreadsheet model a project from its precedence table? | cida841b0a | Y12 critical-path-analysis/lesson03 |  |
| 89 | math-s12-f01 | S2 | How do source, sink, capacity and cuts describe a flow network? | ci87d0361a, cie0dcd4b6 | Y12 network-flow/lesson01 |  |
| 90 | math-s12-f02 | S2 | How does the saturated edges method find the most a network can carry? | cia23e92d8 | Y12 network-flow/lesson02 |  |
| 91 | math-s12-f03 | S2 | How does the minimum cut prove the maximum flow? | ci0d82df6b | Y12 network-flow/lesson03 |  |
| 92 | math-s12-f04 | S2 | What happens when an edge's capacity changes, and can the network meet demand? | ci1c4ddbb0, cie0f5e510 | Y12 network-flow/lesson03 |  |
| 93 | math-s12-x01 | Y12 optional | Which interest, loan, depreciation or annuity tool does an unseen money problem need? |  | No site lesson; syllabus only |  |
| 94 | math-s12-x02 | Y12 optional | Which statistics or probability tool does an unseen data problem need? |  | No site lesson; syllabus only |  |

## Shared content with Mathematics Advanced

Candidates only. Do not assume reuse: Standard students need a gentler pace, fewer symbols and everyday contexts, and the Advanced videos assume more algebra. A candidate may share a coded diagram, a sim or a plate rather than the whole video.

- Lines and direct variation: s11-l01, l02, l03, l06, l07 with a11-w10, w11, w12, w22 (Year 11 Advanced, designed, not built).
- Simultaneous equations and break-even: s12-a01 to a04 with a11-w13.
- Exponential graphs: s12-a05, a06 with a11-e01. Parabolas: s12-a09 to a11 with a11-w14, w15, w16, w19. Reciprocal graphs: s12-a12, a13 with a11-w21, w23.
- Elevation, depression and bearings: s12-t03 to t05 with a11-t02a, t02b. Sine rule, cosine rule and area: s12-t06 to t09, t11 with a11-t05 to t07.
- Probability: s12-p01 to p04 and p07 with a11-s02, s04, s05, s06; relative frequency s12-p05 with a11-s10. Data types and histograms: s11-d05, d06, d11 with a11-s09 to s11.
- Normal distribution: s12-z01 to z06 with a12-s09, s10, s11 (Year 12 Advanced, built). The Standard course uses the empirical rule and supplied values, not integrals or the normal CDF, so reuse the curve and shading visuals, not the scripts.
- Loans and annuities: s12-i13 to i15, i19 and i22 with a12-f09 to f12 and f14 (built). Advanced uses geometric series; Standard uses tables, spreadsheets and interest factor tables. Reuse the balance-table and timeline visuals only. Compound interest s12-i02 and a12-f08 share the growth picture.

## Year 11 points that Year 12 videos assume

- math-s12-a01: ciafd3b572 (math-s11-l02); ci5ff71229 (math-s11-l02); ci94641a48 (math-s11-l01).
- math-s12-a05: ci7f303375 substitution (math-s11-f01); cib256693a percentage increase and decrease (math-s11-m01).
- math-s12-a12: cie0224c11 direct variation (math-s11-l06).
- math-s12-i01: cib256693a percentages (math-s11-m01); ci7f303375 substitution (math-s11-f01).
- math-s12-i12: cif403be54 buy now pay later (math-s11-m03); ci6124d502 buying on terms (math-s11-m04).
- math-s12-t01: cib49e1f1d Pythagoras (math-s11-a06); cib54d5e23 changing the subject (math-s11-f03).
- math-s12-r04: ci29461234 length conversions (math-s11-a01); ci2d6e3fa8 area conversions (math-s11-a02).
- math-s12-r07: ci3786e651 trapezoidal rule (math-s11-a11).
- math-s12-r08: ci880a544f volume to capacity (math-s11-a03).
- math-s12-r12: ci61d581aa speed = distance/time (math-s11-f04); ci94641a48 gradient (math-s11-l01).
- math-s12-b01: cic8a0b6e9 variable types (math-s11-d05).
- math-s12-b04: ci94641a48 and cic0a28004 gradient and intercept (math-s11-l01); ci4777471a interpolation and extrapolation (math-s11-l04).
- math-s12-z01: ciaf232c38 mean, median and mode (math-s11-d11); ci0c94e728 shape (math-s11-d09).
- math-s12-z02: ci14ad4af7 population standard deviation (math-s11-d13).
- math-s12-c01: cica79bb9b network terms (math-s11-n02); ci022052d4 networks from tables (math-s11-n03).
- math-s12-f01: cica79bb9b directed and weighted edges (math-s11-n02).

## Notes

- Site coverage (source coverage, not approval): Year 11 90 covered, 17 partial, 12 missing; Year 12 Standard 2 140 covered, 3 partial, 0 missing; Year 12 Standard 1 66 covered, 4 partial, 1 missing (matched to Standard 2 lessons, since the site has no Standard 1 pages). Partial and missing points need original teaching in the design.
- Points owned by more than one video: ci2343d424 (math-s11-f01, math-s11-f08); ci85c34acf (math-s11-e03, math-s11-e04); ci6e07f2cb (math-s11-a09, math-s11-a10); ci6dfbf5c5 (math-s11-d12, math-s11-d14); ci32b65c45 (math-s12-a01, math-s12-a02); ci8615a466 (math-s12-a01, math-s12-a03); ci74344e24 (math-s12-t01, math-s12-t02); cif644212f (math-s12-t03, math-s12-t05, math-s12-t11); cid1949529 (math-s12-t03, math-s12-t05); cice3fd0ea (math-s12-p03, math-s12-p04).
- Sensitive contexts: BAC (f05, f06) and medication dosage (f07) need careful framing; tax, Medicare and stamp duty videos must name the financial year of every rate. See `sensitiveContexts` in the JSON.
- The site has no lesson for 12 Year 11 points and teaches 17 more only in part, mostly the BAC and medication formulas, spreadsheet tasks, VAT, metric prefixes, survey design and infographics. Those designs use the syllabus alone for the missing parts.
- Site lessons outside the 2024 points (networks lessons 2 and 3, measurement lessons 10 to 12, data-analysis lesson 8, two retired investment lessons) are not used as sources except where a Year 12 action matches.
