# Root decisions needed: Maths Standard Year 12, r08 to r14 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-r08.md`, `r09.md`, `r10.md`, `r11.md`, `r12a.md`, `r12b.md`, `r13.md` and `r14.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-r08.md` to `r14.md`, `programme/maths-standard-route-inputs-4.json`, `checks/maths-standard-kit-needs-r.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 47, binding), `site-corrections-maths-standard.md` (MS-34, MS-35, MS-37, MS-38, MS-40), the format of `lessons/math-s12-a04a.md`, `a06.md` and `i09.md` and `checks/m-s12-a01-a06-learning-review-resolution.md`, `maths-visual-standard.md`, `AGENTS.md`, and, for the joins, `lessons/math-s12-r06b.md`, `lessons/math-s12-r07.md` and `checks/root-decisions-maths-s12-r01-r07.md`. r09 to r14 were written first; r08 was written last. r07 and its decisions file did not exist when r08 was first drafted, so r08's opening was drafted as provisional on the r07 pack's proposal; both appeared before handover, and r08 now opens exactly on r07 scene 14 (section 2).

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate briefed here |
| --- | --- | --- | --- | --- | --- | --- |
| r08 rainfall volume, V = Ah | 4,998 | 469 | 12 | S2 | the site's 12 m × 8 m roof (2400 L) after r07's dam; site SA 3 tank | none (`ms12-farm-dam-aerial-v1.png` is r07's) |
| r09 ratios against rates, unit rates | 5,041 | 468 | 13 | S1, S2 | two pay slips, $336 for 8 h and $270 for 6 h (site quick-fire 4) | none (reuses `ms12-pay-envelope-v1.png`, i19's) |
| r10 converting rates | 5,271 | 487 | 13 | S1, S2 | a tap dripping 0.3 L/min (site quick-fire 11); a bowler's 144 km/h | `ms12-flour-bags-v1.png` (r11's anchor) |
| r11 best buys | 5,028 | 469 | 13 | S1, S2 | the site's flour, 2 kg $3.80 against 5 kg $8.75 | none |
| r12a reading a distance-time graph | 5,014 | 472 | 13 | S1, S2 | the site's Sydney to Melbourne trip (SA 4), drawn live | none |
| r12b average speed, two journeys | 4,990 | 470 | 12 | S1, S2 | the same trip, finished (87.3 km/h); two cars catching up | none |
| r13 fuel consumption | 5,815 | 528 | 14 | S1, S2 | the hatchback after 880 km at 7.5 L/100 km (66 L, $148.50) | none |
| r14 W, kW, kWh, running costs | 5,185 | 483 | 13 | S2 | a phone charger and a 2400 W heater (site worked example 3 at 33 c) | none |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `s12r/check.py` (the same parser rules as `work/brief-resolve-standard-a1/count.py`; it reproduces e08's 5,632). Times use 13.3 characters per second plus two 10 s countdowns, about 6 s of short holds, 24 to 30 s of settling and the 45 s notes scene. All eight are under 570 s (longest r13, about 528 s; shortest r09, about 468 s). r08 (4,998) and r12b (4,990) sit a few characters under the 5,000 guide; both are full lessons at the gentler Standard pace and were not padded further.

Characters per scene (1 to last):
- r08: 375, 643, 642, 595, 664, 194, 317, 415, 311, 401, 366, 75
- r09: 494, 597, 644, 485, 317, 668, 196, 309, 306, 273, 398, 279, 75
- r10: 339, 601, 893, 444, 495, 600, 194, 273, 419, 309, 401, 228, 75
- r11: 370, 554, 535, 845, 455, 348, 189, 275, 291, 351, 415, 325, 75
- r12a: 397, 527, 408, 489, 538, 656, 164, 410, 384, 365, 357, 244, 75
- r12b: 457, 669, 601, 649, 658, 224, 334, 327, 321, 388, 287, 75
- r13: 354, 541, 538, 360, 618, 666, 525, 188, 462, 408, 341, 413, 326, 75
- r14: 337, 535, 507, 541, 490, 802, 155, 350, 363, 418, 406, 206, 75

Every feedback scene is at most 419 characters (about 31 s); the longest are r10 feedback 1 (419) and r11 feedback 2 and r13 feedback 1 (415, 408). The longest single scene is r10 scene 3 (893, about 67 s: one stage, the bowler's two unit swaps and the pitch run). Every design has 0 em dashes; en dashes appear only inside the quoted syllabus wording "distance–time" in r12a and r12b (the syllabus's own character, quoted exactly). Every bold cue is quoted in its scene's Visual in spoken order, every attempt narration ends "Pause here to answer.", narration has no digits except "Standard 1" and "Standard 2" in r13's two-route scene (as in a04a and i14), every syllabus quote matches the route-inputs JSON exactly, every title is under 100 characters (55 to 80), and every description ends #HSCScience, with the wording under Standard 2 and Standard 1 headings (Standard 2 only for r08 and r14) and no codenames (ruling 16). All numbers were recalculated with SymPy 1.14 (scratchpad `s12r/verify.py`, run with `python -I`, 153 checks, 0 failures); Codex's maths check remains the authority.

## 2. Joins (every opening and final frame)

1. **r07 → r08 (cross-author).** r08 opens on r07 scene 14 exactly, as `root-decisions-maths-s12-r01-r07.md` section 2 fixes it: the farm dam aerial plate `ms12-farm-dam-aerial-v1.png` with faint baseline and offsets and the chip "surface ≈ 1,710 m²", a coded rain gauge at 25 mm, the card "rain overnight: 25 mm", chips "how much water is that?", "Next: volume of rainfall" and "?". That file's open decision 5 is answered: keep the dam. r08 teaches on the site's house roof first, then returns to the dam (1710 × 0.025 = 42.75 m³ = 42 750 L, an estimate), with one sentence on the catchment (the r07 file's note that rain on the water is a small part). r07 uses h only as the strip width; r08 says once that h is now the depth of rain.
2. **r08 → r09 and r06b → r09 (cross-author).** r08's final frame repeats the right panel of r06b's two-route frame full width, as `math-s12-r06b.md` writes it: two coded pay slips, white cards, "Shift: 8 hours", "Pay: $336" and "Shift: 6 hours", "Pay: $270", no names; chips "who is paid more?", "Next: rates" and "?". r09 opens on it; Standard 1 viewers arrive on r06b's two-route frame, whose left panel fades on r09's first sentence. r09 then labels the slips "Job A" and "Job B" and slides in the pay envelope plate (`ms12-pay-envelope-v1.png`, i19's brief), so a painted plate is on screen within 5 s although r06b's panel is coded. This closes r06b's open decision 1 and the r01 to r07 file's item 6 with no change to r06b.
3. **r09 → r10.** The kitchen tap `ma12-kitchen-tap-v1.png` with coded drops, "0.3 L every minute", a calendar strip "1 year, ? L"; chips "a little or a lot over a year?", "Next: converting rates", "?".
4. **r10 → r11.** The new flour plate `ms12-flour-bags-v1.png` on a coded shelf with tags "2 kg: $3.80" and "5 kg: $8.75"; chips "which is better value?", "Next: best buys", "?". The plate is briefed in r10 (ruling 17).
5. **r11 → r12a.** The hatchback with a trip card ("Sydney to Melbourne: 880 km", "100 km/h for the first 400 km", "a 45-minute stop", "90 km/h for the rest") and empty distance-time axes; chips "can one line show the whole trip?", "Next: distance-time graphs", "?".
6. **r12a → r12b (ruling 44 split).** The finished trip graph with the hatchback at (10 h 5 min, 880 km) and a dashed grey start-to-finish line with "?"; chips "average speed for the whole trip?", "Next: average speed and two journeys", "?".
7. **r12b → r13.** The hatchback, the small trip graph, "880 km driven" and a coded fuel gauge near E; chips "how much fuel did that take?", "Next: fuel consumption", "?".
8. **r13 → r14 and r13 → t01 (two routes; ruling 45).** Left, Standard 2: the phone dock and panel heater plates on a coded power board, "which costs more to run?", "Standard 2 next: running costs at home". Right, Standard 1: the house plate `phys-y11-house-v1.png` with a coded amber right-angled triangle on the roof's left end, "35°" at the eave, "?" on the height, a grey "not to scale" tag, the grey chip "Ratios and rates: done", "Standard 1 next: right-angled triangles". r14 opens on it and fades the right panel.
9. **r14 → t01 (ruling 45).** r14's final frame is r13's right panel at full width (house, triangle, "35°", "?", "not to scale", "Ratios and rates: done", "Next: right-angled triangles", "?"), so t01 opens on one picture for both courses. No solar strip is drawn (the r14 pack's idea is dropped so the two frames are identical and no coded cartoon object is added).

## 3. Decisions for root

1. **r08 rain on the dam at 25 mm** (the pack used 12 mm), so the same storm falls on roof and dam. Confirm.
2. **r08 A2 without part (c)** (the half-full tank) to keep the feedback near 30 s; scene 5 and A1 test tanks. Confirm.
3. **r09's worked example:** two printers (site quick-fire 1 plus an original Printer B) to teach reading the units (pages per minute against minutes per page); the phone-data anchor is one sentence in scene 3. Confirm.
4. **r10 A2's school-zone context** (72 km/h to 20 m/s, 30 m reaction distance) kept; the pack offered the bowler instead if Year 11 f04 overlap is a concern. Confirm.
5. **r11's shelf-label wording:** "usually print the unit price" until Codex confirms the Grocery Unit Pricing Code's current coverage; A1 drops the pack's part (c), which A2 (c) asks instead. Confirm.
6. **r12 split (ruling 44):** r12a reads one journey (TripGraph, gradient as speed, stops, returns, reading values); r12b covers average speed and two journeys. r12a uses the existing motorbike plate for the pack's delivery scooter. Confirm.
7. **r12b's catch-up reason:** head start ÷ difference in speeds (40 ÷ 20 = 2 h), the same non-algebra route root ruled for a04a, with the equation as a grey "Standard 2" row. Confirm.
8. **r13 A2 on one fuel:** both vehicles on petrol at $2.25 (only the petrol price is ruled, ruling 47), so the answer is $1113.75 more for the ute (the pack's diesel at $2.70 gave $1748.25). Confirm, or supply a dated diesel source.
9. **The roof angle (r13, r14, t01).** The house plate's drawn hip pitch is about 24° (left hip edge from about (225, 298) to (585, 135) on the 1774 × 887 plate), but the packs and route give 35°. Both frames label "35°" with a "not to scale" tag. Options: keep 35° with the tag; label the drawn angle; or have t01 choose 25°. The t01 designer must confirm before r13 or r14 is built, and the two frames must match.
10. **r14: one price at 33 c (MS-40).** The site's worked examples (priced at 28 to 32 c) are repriced at 33 c with the site's powers and times kept; the bill line shows 33.14 c with an AER source line. r14 A2 uses new numbers (2.2 kW against 0.8 kW, 4 h, 30 days, $55.44 saved) so it does not repeat the worked example's 360 kWh. Confirm.
11. **r12b title length:** 80 characters; the shorter alternative is "Average Speed and Two Journeys | Year 12 Maths Standard".

## 4. Site corrections applied

- MS-34 (r14): drill 4's distractor explanation is not used.
- MS-35 (r09, r10): the stray "Scale" key term is not used; r10 converts both units of a rate (top, then bottom) before the ÷ 3.6 shortcut.
- MS-37 (r08): V = Ah with the syllabus letters, never "V = A × d"; an area from an aerial photo (r07's dam) and from a scaled plan (A2); radial surveys deferred to t10 (ruling 43).
- MS-38 (r08): the 0.25 m slip is "ten times too much water", never "a full tank into an empty one".
- MS-40 (r14): one electricity price throughout.

## 5. Plates

- New, briefed here: `ms12-flour-bags-v1.png` (r10's Codex asset brief; r10's final frame and r11's anchor).
- Reused, briefed elsewhere and not yet painted (their briefs were read): `ms12-farm-dam-aerial-v1.png` (r07), `ms12-pay-envelope-v1.png` (i19), `ms12-small-suv-v1.png` (i15), `ms12-ute-v1.png` (i09). Each must be painted before the first build that uses it; r08, r09 and r13 say so in their Codex briefs.
- Reused, existing, checked on contact sheets: `ma12-kitchen-tap-v1.png`, `ma12-cricket-ball-v1.png`, `ma12-cricket-grass-strip-v1.png`, `ma12-stopwatch-v1.png`, `ma11-water-tank-v1.png`, `ma12-used-hatchback-v1.png`, `ma12-country-road-v1.png`, `ma12-motorbike-v1.png`, `ma11-trade-van-v1.png`, `ma11-road-side-strip-v1.png`, `ma12-phone-v1.png`, `ma12-phone-dock-v1.png`, `ma12-air-conditioner-v1.png`, `physics/phys-y11-panel-heater-v1.png`, `physics/y12p-bar-heater-v1.png`, `physics/phys-y11-electric-kettle-v1.png`, `physics/phys-y11-house-v1.png`.

## 6. Kit additions requested (from the kit-needs file, rows r08 to r14)

RainSlab (r08); RatioBar unit-rate mode and cancelling units (r09); RateFraction and a bath row (r10); ShelfLabel and fractional quantity blocks (r11); TripGraph with a chord triangle (r12a), two trips and a ghost trip (r12b); a fuel gauge, block ruler and odometer strip on TripSim (r13); EnergyMeter and a bill line (r14). No new simulation engine.

## 7. Prices and sources for Codex (rulings 5, 32, 47)

- Petrol about $2.25 a litre: NRMA weekly fuel report, 9 Nov 2026, Sydney regular unleaded 225.3 c/L (r13; said once to change weekly).
- Electricity about 33 c/kWh: AER Default Market Offer 2026-27 final determination, Ausgrid-area residential flat-rate usage cap 33.14 c/kWh, as reported by Canstar 26 May 2026 (r14; GST treatment to confirm; said once to change and depend on the plan).
- Unit pricing on shelf labels: Grocery Unit Pricing Code (ACCC) coverage to confirm before any stronger wording (r11).
- r09 and r11 prices are labelled examples, not quotes.

Nothing recorded; human listening pending.
