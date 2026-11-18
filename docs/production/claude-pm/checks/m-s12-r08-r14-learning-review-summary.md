# Maths Standard Year 12 r08 to r14 Revision 1: learning review summary

18 November 2026. Independent student learning review of the eight ratios-and-rates designs (`lessons/math-s12-r08.md`, `r09.md`, `r10.md`, `r11.md`, `r12a.md`, `r12b.md`, `r13.md`, `r14.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 53 and `checks/root-decisions-maths-s12-r08-r14.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12; the shared videos (r09 to r13) were traced for both courses, r09 a second time from r06b (Standard 1, no r07 or r08), r12b a second time without algebra, and r13's two-route ending as a Standard 1 student leaving the strand. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, 189 checks, 0 failures; numbers and lengths in suggested fixes in `suggested.py`, both run with `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| r08 rainfall volume, V = Ah | should-fix | 0 | 1 | 2 | `m-s12-r08-learning-review.md` |
| r09 ratios against rates, unit rates | should-fix | 0 | 1 | 1 | `m-s12-r09-learning-review.md` |
| r10 converting rates | should-fix | 0 | 3 | 2 | `m-s12-r10-learning-review.md` |
| r11 best buys | should-fix | 0 | 1 | 1 | `m-s12-r11-learning-review.md` |
| r12a reading a distance-time graph | should-fix | 0 | 2 | 0 | `m-s12-r12a-learning-review.md` |
| r12b average speed, two journeys | should-fix | 0 | 1 | 2 | `m-s12-r12b-learning-review.md` |
| r13 fuel consumption | should-fix | 0 | 2 | 1 | `m-s12-r13-learning-review.md` |
| r14 W, kW, kWh, running costs | should-fix | 0 | 1 | 2 | `m-s12-r14-learning-review.md` |

Totals: 0 pass, 8 should-fix, 0 blockers; 12 should-fix findings, 11 optional. Every should-fix is a sentence, a label or a small visual change inside an existing scene; none needs a new scene, a new plate or a split. The designs are good. Each gives the reason before the rule at the main step: why V = Ah gives litres once the depth is in metres and 1 m³ holds 1000 L (r08), why a rate keeps two units and why dividing is fair (r09), why × 60 goes on both lines (r10), why the unit price makes comparison fair (r11), why the slope is the speed (r12a), why a stop lowers the average (r12b), why ÷ 100 for fuel (r13), and why watts and kilowatt hours differ (r14). Each also has a real moving demonstration (the rain slab, the hour blocks, the bath row, the buying race, the car drawing its own graph, the ghost cars, the block ruler, the kWh pile), so none is a slideshow on paper.

## Top findings

1. **r10 scene 3: the bottom unit changes by a different move, unexplained.** Scene 2 multiplies top and bottom; scene 3 rewrites 1 h as 3600 s and divides with no reason. Say "per second means for one second, so share the metres across the seconds, just like sharing pay across hours", and why 3.6 appears ("three thousand six hundred is three point six thousands").
2. **r13 scene 2: why litres per hundred kilometres.** The unit is stated without a reason. Say that per kilometre it would be a tiny 0.075 L, so, as with per 100 g in r11, a hundred kilometres gives a handier number.
3. **r13 scene 6 and feedback 1: the fill-up formula is a recipe.** Say that the litres to refill are the litres used, then use the video's own "count the hundreds" (600 km is 6 hundreds, 48 ÷ 6 = 8; 548 km is 5.48 hundreds, 38.4 ÷ 5.48 ≈ 7.0).
4. **r12a scene 5: 7.75 h cannot be read off an hourly grid.** Add 15-minute minor ticks and a 670 km tick on the reading graph, and say "three quarters of the way from seven to eight".
5. **r14 scene 3: the step from the kWh definition to 2.4 × 5.** Say "in one hour the heater uses two point four kilowatt hours, and in five hours, five times as much. The name says it: kilowatts times hours."
6. **r11 scene 5: the label-unit trap is shown but never said.** The unnamed "$0.22 per 100 mL" label also clashes with the first juice's $2.24 per litre. Name it "Juice C" and say that it looks cheaper but is $2.20 a litre, dearer than $2.10.
7. **r12a scene 4: 480 km and 5 h 20 min are given without steps.** Say 880 − 400 = 480 and 480 ÷ 90 = 5⅓ h, a third of an hour being twenty minutes.
8. **r10 scene 4: twelve kilometres per hour appears from nowhere.** Use the pace: one kilometre every five minutes, twelve lots of five minutes in an hour.
9. **r09 scene 6: the wrong-way slip adds a decimal trap.** 0.02 against 0.017 by ear is a second confusion; use 1 s against 1.2 s per page.
10. **r12b scene 3: "pulls the average towards ninety" sits beside an 87.3 answer.** Move it to the driving-only average and say its 9 h 20 min.

Other should-fix items: r08 scene 4 (say "about forty-three thousand litres" for an estimated volume, not 42 750 to the litre); r10 feedback 1 (say "two hours is a hundred and twenty minutes", and that 0.98 h is about 59 minutes).

## Open questions in the designer's handover, as they bear on learning

Rulings 52 and 53 already settle sections 3.1 to 3.11. Nothing in this review argues against them. Two points for root:

- **3.5 shelf-label wording (r11):** "usually" is safe; if Codex confirms the Unit Pricing Code's coverage, "big supermarkets have to show it" is stronger and still accurate (r11 optional 2).
- **3.9 roof angle (rulings 45, 53):** math-s12-t01 is not designed yet, so the r13 to t01 and r14 to t01 joins are provisional until the t01 designer opens on the exact frame. If t01 changes the angle, only the labels in r13 scene 13 and r14 scene 12 change.

## Joins

- **r07 to r08 (cross-author):** r08 scene 1 is r07 scene 14 exactly (dam plate, "surface ≈ 1,710 m²", gauge at 25 mm, "rain overnight: 25 mm", chips), and r07's last question is answered in r08 scene 4.
- **r08 to r09 and r06b to r09 (ruling 50):** both arrive on the two coded pay slips ("Shift: 8 hours", "Pay: $336", "Shift: 6 hours", "Pay: $270", "who is paid more?"); r06b's left panel fades on r09's first sentence, and the pay envelope plate arrives within 5 s.
- **r09 to r10, r10 to r11, r11 to r12a, r12a to r12b, r12b to r13:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question. No frame states the answer it hands on (the tap's year total, the flour's unit prices, the trip's line, the average speed, the litres).
- **r13 to r14 and r13 to t01 (ruling 45):** r14 opens on r13's two-route frame and fades the Standard 1 panel; r14's final frame is r13's right panel at full width, so t01 has one opening picture for both courses. Provisional until t01 exists (above).
- **Standard 1 path (r09 opens for both; r13 two-route ending; r08 and r14 Standard 2 only):** r09 assumes only r01 and Year 11 pay; r10 to r13 assume only r09 onwards; r12b's catch-up has a non-algebra route with the equation as a grey Standard 2 row; r13's narration tells Standard 1 viewers plainly that rates are done. The route is complete.

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (graphs in r12a and r12b are supplied with their answers unmarked, which is the item's normal form). All 16 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 22 s and 32 s by speech estimate; six sit at 30 to 32 s (r08 feedback 1, r10 feedback 1, r11 feedback 2, r13 feedbacks 1 and 2, r14 feedback 2), slightly over the 15 to 30 s guide but brief in content and with no re-teaching. Anchors are real and everyday (a roof and tank, a farm dam, part-time pay, printers, netball, a dripping tap, a fast bowler, a fun run, flour, olive oil, rice, a phone recharge, a road trip, a delivery motorbike, two cars, a bus, a truck, fuel, a phone charger, heaters, a kettle, a console), with no gambling and no people drawn. Dated prices: petrol about $2.25 (NRMA, 9 Nov 2026) in r13 and electricity about 33c (AER DMO 2026-27, Ausgrid) in r14, each on screen with its source and said once to change (rulings 5, 32, 47); r09 and r11 prices are labelled examples.

## Lengths

All eight are under 570 s by the designer's estimate (468 s to 528 s). With the should-fix items applied: r08 about 468 s, r09 about 470 s, r10 about 504 s, r11 about 484 s, r12a about 484 s, r12b about 470 s, r13 about 548 s, r14 about 494 s. r13 is the only tight one (about 22 s margin); its named range trim gives back about 5 s. Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the eight designs or in these review files (scripted check); en dashes appear only in the quoted syllabus wording "distance–time" in r12a and r12b.

No speech, design edits, builds or commits were made.
