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

### 3.2 Applications of measurement (a01 to a11; 11 videos; not designed)

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

### 3.3 Time and location (t01 to t06; 6 videos; not designed)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| r10 | "Year 11 Standard t01 (time units)"; "Year 11: 60 × 60" | t01: show 1 h = 60 min = 60 × 60 s as "60 × 60" on screen |
| (none beyond r10) | | |

Plan notes: t03 latitude and longitude with and without digital tools (a map app view coded); t04 15° = 1 hour; t05 Australian zones with daylight saving (NSW, Queensland, WA, NT, SA's half hour); t06 UTC. Audit N9: if t06 is the last Year 11 video in playlist order, close on "Year 11: done" with no "Next" chip into Year 12 a01 (or give d19 that close if data runs last).

### 3.4 Networks, paths and trees (n01 to n07; 7 videos; not designed)

| Year 12 design | Recall chip or phrase | The Year 11 video must |
| --- | --- | --- |
| c01a | "Year 11: arrows with directions and weights"; directed networks, weighted edges (n02); a network from a table (n03) | n02 and n03: use "directed" and "weighted" as the words, arrows for direction, numbers on edges for weights |
| c02 | weighted directed networks (n03) | n03 |
| c03 | "Year 11: shortest path (a different question)" (n06, as a contrast) | n06: shortest path by the systematic method on at most 10 vertices |
| f01 | "Year 11: directed, weighted networks"; n02, n03 | n02, n03 |

Plan notes: n07 (shortest path not the best path, nor in any minimum spanning tree) has no site lesson: design from the syllabus (a toll road, a flooded road, a steep cycle route); n05 minimum spanning tree by any method (Prim's or Kruskal's, one taught, the other named). Anchors: a bike-path map, phone towers, a school-camp trail, a delivery route.

### 3.5 Data analysis (d01 to d19; 19 videos; not designed)

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
9. **Remaining 43 videos.** Section 3 is the plan. At this batch's pace a strand of 6 to 11 videos is one designer session; Data analysis (19) needs two. Suggested order: a (playlist next), then t, with n and d in parallel; x01 any time.
