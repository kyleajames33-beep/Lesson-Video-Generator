# Maths Standard Y11 d01 to d19 (20 designs): learning review resolution

24 November 2026. This is the design author's resolution of `m-s11-d-learning-review-summary.md` and the per-design files `m-s11-<id>-learning-review.md`. It applies root's nine rulings for this round: (1) d13 introduces σ as the spread measure that uses every value, shows Bus B against Bus C (same range 8, σ 3.11 against 2.31), shows the breakdown day moving σ too and points to the IQR, with its memory aid, key notes and feedback consistent with d19 and every Year 12 z02 and z03 recall kept true; (2) d01 shows the sleep guideline with a dated source on screen; (3) d02 uses an ordinary identifying detail; (4) d08's interval statement matches the readings; (5) d09 drops the invented cause; (6) d11 says "the sum of x" for Σx; (7) d12 and d14 practice items use fresh cases and numbers; (8) d18's gap explanation agrees with the bus route; (9) d19's drag stop at 7.5 shows IQR 1.25 and σ 1.00.

Eighteen designs carry "Revision 2 (24 Nov 2026): learning review resolved" in their Status line and a "Revision 2: learning review resolved (24 Nov 2026)" section with the detail. d05 and d15 had no blocker or should-fix, and their notes needed no change, so they are unchanged. This round changed documents only: no speech, build, render or commit. Changed values were recalculated with exact fractions, quartiles by the halves method (scratchpad `s11drev/st.py`, `drag.py` and `verify.py`, `python -I`, 0 failures). Narration was recounted with `work/brief-review-s11-e/count.py`, the counter named in the design status file. Codex's maths check remains the authority.

**Totals:** 1 blocker, 9 should fix, 30 notes. Blocker: resolved. Should fix: all 9 applied (d12 and d14 by replacing the practice items, as ruled, rather than the reviewer's option of changing the teaching card). Notes: 23 applied, 5 left unchanged by design or as the reviewer advised (D06A-A2LOAD, D10-AVG, D15-CALC, D17-SYM, D18-FENCE), 2 held for root (D05-TRAVEL, D07-NEARBY).

## Blocker

- **d13 D13-RESIST (ruling 1).** Scene 3 keeps the breakdown day as the range's weakness and ends "The range also ignores everything between the two ends. We need a measure of spread that uses every value." Scene 4 teaches deviations and σ for Bus A (0.58) and Bus B (3.11), then: "Meet Bus C. Nought, four, four, four, four, eight. Its range is eight, the same as Bus B's, but most of its days sit right on the mean, so its sigma is two point three one. Sigma sees a difference the range missed." Then: "Every value counts, odd ones too. Put Bus A's breakdown day back, and its sigma jumps to four point one four, because that one big distance counts heavily. The measure that ignores the extremes is the interquartile range, the IQR, coming soon." Values: Bus C σ = √(16/3) = 2.3094; breakdown (3, 4, 4, 4, 5, 15) mean 35/6, σ = √617 ÷ 6 = 4.1399, above Bus B's 3.11. The false sentence ("one odd day can't take over") is gone. Cause chain item (3) now reads that σ "reflects the whole dataset, not just its two ends; that is why it separates Bus B and Bus C, and also why one extreme value still pulls it". Visuals: a third dot plot for Bus C with equal range brackets, then Bus A's breakdown arm (9.17) stretching its σ bar past Bus B's, with hand tags "same range, different σ" and "an extreme pulls σ too".
- **Consistency with d19.** d13's memory aid is now "σ: how far values usually sit from the mean, counting every value, extremes too." Key note 2 is "σ: typical distance from the mean; an extreme value pulls it." Both agree with d19's "An outlier pulls the mean, the range and σ; the median and IQR hold steady". d13's two feedback scenes make no resistance claim and are unchanged. d19 scene 3 adds a grey chip "d13: the breakdown day pulled σ too".
- **Year 12 recalls.** z02 recalls "Year 11: σ on the calculator" and "σx"; z03 recalls "σ as spread"; z01 uses σ "only as how spread out"; b05 recalls "the calculator's statistics mode". d13 still teaches each of these word for word, and Year 12 now inherits the correct idea that an extreme value pulls σ. No recalled phrase changed, so `math-s12-z02.md` and `math-s12-z03.md` are not edited.

## Should fix

- **d01 D01-GUIDE (ruling 2): applied.** Narration: "Australian guidelines advise teenagers to get eight to ten hours of sleep a night." The chip carries a grey source line: "Australian 24-Hour Movement Guidelines (Australian Government, 2019)". The design cites the Department of Health's Australian 24-Hour Movement Guidelines for Children (5 to 12 years) and Young People (13 to 17 years), 2019. Its health.gov.au publication page and fact sheet were checked on 24 Nov 2026: 8 to 10 hours of uninterrupted sleep a night for 14 to 17 year olds. The YouTube description has the same source. d16 and d19 carry the tag. Codex confirms the year (error-check item 3).
- **d02 D02-FILTER (ruling 3): applied.** "Add that one of them plays the cello. Now that one row, and its four hour answer, belongs to someone everyone can name." Counts 200, 24, 3, 1 kept.
- **d08 D08-2HRS (ruling 4): applied.** "measured ten times through the day". The ten readings are listed under Numbers to verify.
- **d09 D09-SLIDER (ruling 5): applied.** The bulk and peak stay pinned while one tail stretches. "The tail is only where the few far values sit. The peak is where most of the data sit, so it ends up on the other side from the tail." Cause chain item (3) matches.
- **d11 D11-SIGMAX (ruling 6): applied.** "and the sum of x, the total, a hundred and forty-four". The screen labels Σx "the sum of x (the total)". d13 says "lower-case sigma x" for σx (D13-SIGMA).
- **d12 D12-SEEN (ruling 7): applied.** A1: six resale listings for one concert ticket, $90, $95, $95, $100, $110, $630. Mean 1120 ÷ 6 = $186.67, median $97.50, and the mean is above five of the six. The existing plate `ma12-concert-ticket-v1.png` was viewed. A2 (ii): helpline waiting times with a few over an hour (median). Scene 6's gallery is unchanged.
- **d14 D14-SEEN (ruling 7): applied.** A1: two bakeries' 500 g loaves, Bakery 1 mean 503 g, σ 14 g, and Bakery 2 mean 501 g, σ 3 g. Choose Bakery 2. The crossed slip is "Bakery 1: heavier on average". Scene 6's coffee-machine card stays. The loaf plate (`ms12-bread-loaf-v1.png`, briefed for Year 12) is not yet in `public/assets/maths`, so the picture slot falls back to the card. No new plate was requested.
- **d18 D18-GAP (ruling 8): applied.** "Nobody takes about half an hour, because students either make a short trip on foot, by bike or by car, or ride the long bus route. There's nothing in between."
- **d19 D19-DRAG (ruling 9): applied, 7.5 stop kept.** Every drag position from 1 to 16 was rechecked by the halves method. At 7.5: mean 7.425 (shown 7.43; round the exact value half up), range 4, Q1 6.75, IQR 1.25, σ 1.0034 (1.00). At 16: mean 7.85, range 10.5, Q1 6.75, Q3 8.25, IQR 1.5, σ 2.1219 (2.12). The median is 7.5 everywhere. The IQR dips to 1.25 only while the dot is between 7 and 8, so "barely flicker" still holds.

## Notes

- Applied: D01-NIGHT, D02-MEDIAN, D03-RAN, D04-2H, D04-A1PIC (slot left to the card; no canteen plate exists), D06A-200, D06B-EARLY, D07-SORT, D08-BATTERB, D08-WORDING, D09-SLEEPTAIL, D10-3D (visual only; the narration was already safe), D11-A2PIC (table only), D12-87, D12-BATT, D13-SIGMA, D13-1.5, D14-DELIV, D16-TIE, D16-GUIDE, D17-FEW, D19-GUIDE, D19-A1PIC (slot left to the card).
- Unchanged by design or as advised: D06A-A2LOAD (10 s owner rule), D10-AVG, D15-CALC (d15 error-check item 3 already asks Codex to confirm the calculators), D17-SYM, D18-FENCE.
- Held for root: **D05-TRAVEL and D07-NEARBY.** The "nearby" travel label runs through d02 to d07 and d18 (140 nearby, 60 bus; the 14 and 6 strata; the two-way table). Renaming it is not cheap and would touch several joins. Recommended: if root agrees, rename it in one pass as "walk or driven" against "bus".

## Lengths after Revision 2

| Design | Characters (Rev 1 → Rev 2) | Total with holds | Feedback 1, 2 |
| --- | --- | --- | --- |
| d01 | 5,594 → 5,661 | about 508 s | 20.4 s, 20.2 s |
| d02 | 5,766 → 5,755 | about 514 s | 24.6 s, 23.5 s |
| d03 | 5,528 (unchanged) | about 497 s | 26.5 s, 23.0 s |
| d04 | 5,643 → 5,647 | about 505 s | 24.6 s, 22.9 s |
| d05 | 5,521 (design unchanged) | about 498 s | 22.3 s, 25.4 s |
| d06a | 5,548 → 5,567 | about 502 s | 17.9 s, 19.6 s |
| d06b | 5,528 → 5,550 | about 501 s | 20.9 s, 19.6 s |
| d07 | 5,561 (unchanged) | about 501 s | 23.2 s, 19.3 s |
| d08 | 5,566 → 5,587 | about 503 s | 20.0 s, 18.8 s |
| d09 | 5,539 → 5,666 | about 509 s | 20.7 s, 19.0 s |
| d10 | 5,568 (unchanged) | about 502 s | 20.6 s, 23.5 s |
| d11 | 5,513 → 5,518 | about 498 s | 21.9 s, 25.0 s |
| d12 | 5,509 → 5,483 | about 495 s | 27.6 s, 18.6 s |
| d13 | 5,541 → 5,763 | about 521 s | 22.4 s, 23.5 s |
| d14 | 5,512 → 5,546 | about 500 s | 20.8 s, 25.5 s |
| d15 | 5,502 (design unchanged) | about 497 s | 24.8 s, 28.1 s |
| d16 | 5,538 (unchanged) | about 499 s | 25.6 s, 22.6 s |
| d17 | 5,568 → 5,599 | about 504 s | 22.2 s, 24.7 s |
| d18 | 5,522 → 5,588 | about 503 s | 28.0 s, 22.9 s |
| d19 | 5,508 (unchanged) | about 497 s | 27.1 s, 21.7 s |

Every design keeps 13 scene headings, ends both attempts with "Pause here to answer.", keeps feedback under 30 s and stays under the 570 s cap (d13 has the least room, 49 s). All 20 stay within the strand's Revision 1 range of 5,483 to 5,766 characters. To fit the blocker fix, d13 used its two Revision 1 reserve trims and three small cuts, and it names new reserve trims. d02 cut three phrases to offset the longer filter line. No em dash appears in any source. En dash counts are unchanged.

## Joins

All joins are unchanged. No final frame or opening frame was edited: d12's two-bus frame opens d13, and d13's split sleep plots open d14. Bus C appears only inside d13 scene 4. Year 12 z02, z03, z01 and b05 recalls were checked against d13 and still hold.

## Open for root

- D05-TRAVEL and D07-NEARBY (above).
- d14 attempt 1's picture depends on the Year 12 loaf plate being delivered first. Otherwise the card takes the slot.
- Human listening and the voiced-preview learning review remain pending. This record covers written designs only.

## Root ruling (24 Nov 2026): D05-TRAVEL and D07-NEARBY

Keep the "nearby" and "bus" labels. d02 defines the groups as students who "live nearby" and students who catch the bus, and every later video recalls that pair, so the label is learned once and reused. Renaming across d02 to d09 and d18 would touch several joins for little gain. No change; the Codex error check should confirm that d02's first use says "live nearby" in full on screen.
