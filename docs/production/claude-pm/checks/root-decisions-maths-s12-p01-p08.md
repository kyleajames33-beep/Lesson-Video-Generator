# Root decisions needed: Maths Standard Year 12, p01 to p08 (first-revision designs)

19 November 2026. Design author's handover to root for `lessons/math-s12-p01.md` to `p08.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-p01.md` to `p08.md` and `math-s12-z01.md` (its "Start"), `programme/maths-standard-route-inputs-6.json`, `checks/maths-standard-kit-needs-b-p.md`, the Year 11 Advanced probability kit (`src/explainer/math/studio/a11-prob-parts.tsx`: OutcomeArray, ProbabilityTree, VennDiagram, TwoWayTable, SetBraces; `prob-parts.tsx`; `spread-parts.tsx`), `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 69, binding), `site-corrections-maths-standard.md` (MS-66, MS-68, MS-69), the format of `lessons/math-s12-r12a.md`, `t05.md` and `a04b.md` (Revision 2 sections), the accepted Advanced designs `math-a11-s04.md` to `s08.md` (visual approach only), `maths-visual-standard.md`, `AGENTS.md`, and, for p01's opening, section 3 of `checks/root-decisions-maths-s12-b01-b07.md` (b07's final frame, read 19 Nov 2026 after p02 to p08 were written). p02 to p08 were written first; p01 was written last and opens on b07's frame exactly, so its opening is not provisional.

**Revision 2 (19 Nov 2026): learning review resolved.** The eight designs are now Revision 2 (resolution log: `m-s12-p01-p08-learning-review-resolution.md`). This file is updated to match: the summary table and per-scene counts (section 1), the labels rule (section 2, root's resolution decision 1), the shared frames in sections 3, 5, 6 and 7 (an "invented example" tag on the app record and the canteen survey card; the two Standard 1 "done" chips reworded "Standard 2: ... done", root's decision 2), and the questions for root (section 13). Section 4 (p03's two-route frame) and section 8 (p08's two-route frame, z01's opening) are unchanged. Revision 1 values are kept below where they are history.

Every value was recalculated with Python `fractions`, `math.comb` and full listings (scratchpad `p/verify.py`, run with `python -I`; 54 checks, 0 failures). Narration was counted by script (scratchpad `p/count.py`, the method of `work/brief-resolve-standard-r2/count.py`; it reproduces e08's 5,632). Every bold cue is quoted in its scene's Visual in spoken order, and no design contains an em dash (both checked by the same script). Seconds are speech at 13.3 characters a second plus two 10 s countdowns, short holds, settling and the 45 s notes scene; measure on the Google voice.

## 1. Summary

Revision 2 characters and seconds (by `work/brief-resolve-standard-p/count.py`, which reproduces e08's 5,632; Revision 1 in brackets): p01 5,410 (5,124), about 502 s; p02 5,162 (5,012), about 483 s; p03 5,251 (5,122), about 489 s; p04 5,219 (5,086), about 488 s; p05 5,369 (5,189), about 499 s; p06 5,083 (4,981), about 480 s; p07 5,115 (5,007), about 479 s; p08 5,603 (5,465), about 516 s. All under 570 s. The table below is Revision 1.

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate briefed here | Open question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| p01 chance 0 to 1, sample space | 5,124 | 480 | 15 | S1, S2 | the kiosk forecast, "20% chance of rain" = 0.2 (b07's frame) | none | the die replaces the pack's "sun rising" chip |
| p02 favourable over total, complement | 5,012 | 472 | 13 | S1, S2 | the site's 10 marbles: blue 5/10 = 1/2, not 1/3 | none | the pack's A2 slip corrected (1/5, not 1/6) |
| p03 arrays and tree diagrams | 5,122 | 479 | 13 | S1, S2 | the canteen lunch deal, 3 × 4 = 12 | none | without replacement added for Standard 1 |
| p04 probability trees, P(A and B) | 5,086 | 478 | 14 | S2 | the site's 3 blue, 2 red bag: 9/25, 13/25, 21/25 | `ms12-commuter-train-v1.png` | one new plate for the commute |
| p05 relative frequency, more trials | 5,189 | 485 | 13 | S1, S2 | the site's coin, 7 heads in 10, run live to 1000 | none | a seed must give 0.7, 0.54, 0.507 |
| p06 expected frequency np | 4,981 | 472 | 13 | S1, S2 | the app record 0.8 × 30 trips = 24 | `ms12-pie-warmer-v1.png` | just under 5,000; staged months |
| p07 Venn diagrams, two-way tables | 5,007 | 471 | 13 | S2 | a canteen survey of 80: 33, 12, 18, 17 | none | a 12 s bridge scene before the shared frame |
| p08 statistics in decisions | 5,465 | 506 | 13 | S1, S2 | an invented app ad, "4 out of 5" of 25 volunteers | `ms12-bread-loaf-v1.png` (z01's anchor) | loaf briefed here, not in z01 |

All eight are under 570 s with holds. p06 is just under 5,000 characters with nothing padded (ruling 52 pattern; the pack calls it short); the others are 5,000 to 5,500. Every feedback is 30 s of speech or less (the longest: p08 feedback 1, 391 characters, about 29 s). The longest single scenes are p08 scene 4 (879 characters, about 66 s; the council board), p06 scene 5 (823; the phone-case board) and p03 scene 4 (796; the die and coin board). Each is one board and one method stage.

Per-scene characters, Revision 2:
- p01 (15): 437, 635, 583, 557, 448, 429, 327, 452, 185, 262, 319, 218, 305, 178, 75.
- p02 (13): 388, 728, 528, 499, 640, 651, 204, 285, 290, 269, 296, 309, 75.
- p03 (13): 423, 542, 534, 826, 772, 375, 172, 282, 300, 248, 367, 335, 75.
- p04 (14): 430, 442, 635, 644, 526, 601, 231, 125, 279, 348, 267, 336, 280, 75.
- p05 (13): 378, 515, 694, 544, 488, 895, 193, 304, 335, 316, 358, 274, 75.
- p06 (13): 363, 486, 442, 468, 870, 618, 141, 263, 397, 252, 357, 351, 75.
- p07 (13): 437, 673, 465, 813, 790, 159, 304, 341, 321, 376, 150, 211, 75.
- p08 (13): 435, 755, 528, 879, 418, 385, 253, 398, 391, 327, 367, 392, 75.

Revision 2 longest scenes: p05 scene 6 (895, the die board), p08 scene 4 (879, the council board), p06 scene 5 (870, the phone-case board), p03 scene 4 (826) and p07 scene 4 (813). Longest feedback: p06 feedback 1, 397 characters, about 29.8 s.

Per-scene characters, Revision 1:
- p01 (15): 437, 538, 476, 544, 448, 360, 327, 452, 185, 262, 319, 218, 305, 178, 75.
- p02 (13): 388, 574, 528, 499, 640, 655, 204, 285, 290, 269, 296, 309, 75.
- p03 (13): 397, 542, 534, 796, 699, 375, 172, 282, 300, 248, 367, 335, 75.
- p04 (14): 430, 442, 573, 644, 508, 545, 231, 125, 279, 348, 267, 336, 283, 75.
- p05 (13): 378, 515, 638, 549, 488, 766, 193, 304, 335, 316, 358, 274, 75.
- p06 (13): 363, 486, 442, 468, 823, 618, 141, 263, 342, 252, 357, 351, 75.
- p07 (13): 437, 673, 465, 705, 790, 159, 304, 341, 321, 376, 150, 211, 75.
- p08 (13): 435, 617, 528, 879, 418, 385, 253, 398, 391, 327, 367, 392, 75.

## 2. Strand-wide decisions

- **Colour roles (fixed for p01 to p08).** Total, sample space and n **teal**; favourable outcomes, the event and counts of it **violet**; the complement ("not", "neither", "none") **amber**; probability values and branch probabilities **blue**; answer **green**; mistake **red**, crossed slips only. p05 draws the relative frequency violet against a dashed blue theoretical line. p07 gives its two attributes violet and blue (fractions in ink), and p08 gives relative change amber and absolute change blue; each says so in its design.
- **Tokens.** Marbles, counters, pens and chargers are neutral grey tokens with ink letters (R, B, Y, W, F, K), following the accepted Advanced s06 decision, so no object is ever drawn in a role colour. Trees, arrays, Venn diagrams and tables are coded, HSC style, letters and numbers only.
- **Notation (ruling 66).** No P(B|A), "|" or "conditional" anywhere. p04 describes the changed second stage in words ("the second branches already allow for what happened first"); p07 teaches "of those who" as one row's count over that row's total. No ∪ or ∩ on screen (p07).
- **Contexts (rulings 6 and 69).** No gambling (no card deck, raffle or prizes; spinners and counters carry no stake). No drug, supplement, disease, insurance or genetic contexts. Every new dataset or claim is invented. Revision 2 (root's resolution decision 1): the on-screen label goes on **records and surveys only**: the app record (p05 scenes 5 and 12, p06 scene 1: "invented example"), the staged months (p06 scene 3: "simulated months") and the pie gauge (p06 scene 6: "invented example"), the canteen survey (p06's left panel, p07 scenes 1 to 4: "invented example"), and p08's advertisement, headline, council, phone maker and attempts ("invented example" or "(All figures invented ...)"). Set-ups are not tagged: marble bags, cars nearby, a die, "say the bus is on time 0.8", the coin's tally card and the site's own examples. p05's simulated run is tagged "simulated fair coin" (its review finding 1). The site's own examples keep their numbers (marbles, die and coin, `we-1` to `we-3` of lessons 02 to 04, card 01's class).
- **The forecast (ruling 67).** p01 and p08 say only "a twenty per cent chance of rain", treated as a probability of 0.2; neither explains the Bureau of Meteorology's method. If Codex supplies a dated Bureau definition, root may add one sentence (p08 open decision 3); no design depends on it.
- **Standard 1 path (ruling 68).** p01, p02, p03, p05, p06, p08. p03 and p06 end on two-route frames; p04 and p07 (Standard 2 only) end on the Standard 1 panel scaled up, so p05 and p08 each have one opening (sections 5 and 7).

## 3. Simple joins (one opening, one closing)

- **b07 → p01.** p01 opens on b07's final frame exactly as section 3 of `checks/root-decisions-maths-s12-b01-b07.md` fixes it (the kiosk plate, the board with five rows and the sixth "30 (tomorrow) | ≈ 107", the forecast slip "Tomorrow", cloud, "top 30°C", "20% chance of rain", chip "what does 20% mean?", label "Next: probability", "Next", "?"). On p01's first sentence the header swaps to "MATHEMATICS STANDARD · RELATIVE FREQUENCY AND PROBABILITY" and the label, "Next", "?" and the sixth row fade, as section 3 allows. p01's narration repeats b07's wording, "the forecast also says a twenty per cent chance of rain".
- **p01 → p02.** The counter bag plate `ma11-counter-bag-v1.png` (about 420 px) at the left; ten grey round tokens in a row lettered "R", "R", "R", "B", "B", "B", "B", "B", "Y", "Y" in ink (88 px each); a grey brace under the row "S: 10 marbles"; p01's chance line (0 to 1, "impossible", "even chance", "certain") dimmed along the bottom; chips "how likely is blue?", "Next: favourable over total" and "?". No probability shown.
- **p02 → p03.** A coded chalk-style lunch-deal board (about 900 × 620 px) headed "Lunch deal: 1 main + 1 drink", columns "Mains" (pie, wrap, sushi roll) and "Drinks" (water, juice, milk, iced tea), ink, 40 px; a small tag "picked at random"; chips "how many different lunches?", "Next: arrays and tree diagrams" and "?". No count shown.
- **p05 → p06.** The phone plate `ma12-phone-v1.png` (about 420 px tall) at the left with the coded record "40 of the last 50 rides arrived within 5 minutes", 50 dots (40 violet, 10 grey) and a small grey tag "invented example" (26 px; Revision 2, root's decision 1); at the right a coded grid "your next 30 trips" (30 empty cells, 6 × 5, about 720 × 520 px); chips "how many on time?", "Next: expected frequency" and "?". No count shown.

## 4. p03's two-route frame (p04 opens on its left panel; p05's picture on its right)

p03 scene 12, held about 2 s, then returned to silently after the notes. 1920 × 1080, header "MATHEMATICS STANDARD · RELATIVE FREQUENCY AND PROBABILITY". Exactly:

- **Split:** a thin grey vertical rule at about x = 960; panel tags "Standard 2" (left) and "Standard 1" (right), 30 px grey.
- **Left panel, Standard 2 (x 0 to 950), p04's opening:** the bag plate `ma11-counter-bag-v1.png` (about 260 px) at the top left with "3 B, 2 R" beneath; a coded colour tree, two stages: "B" and "R" from the start point, then "B" and "R" from each tip; tips "BB", "BR", "RB", "RR" (ink, 36 px); a blue "?" on each of the six branches; chip "a probability on each branch?" (40 px); label under the panel "Standard 2 next: probability trees" (36 px).
- **Right panel, Standard 1 (x 970 to 1920), p05's picture:** the coin plate `ma12-coin-heads-v1.png` (about 260 px); a coded tally card (about 520 × 300 px) "10 flips: 7 heads, 3 tails" with tally marks; chip "is this coin unfair?" (40 px); grey chip "Arrays and trees: done"; label "Standard 1 next: relative frequency" (36 px).
- **Chips:** "Next" and "?" at the bottom right, above y = 950. No value worked out in either panel.
- **Spoken lead-in (p03 scene 12):** "That's arrays and tree diagrams. From here, there are two paths. If you're doing Standard two, next we write a probability on every branch of a tree, so we don't need to name every marble. If you're doing Standard one, next we test chance against real results, starting with a coin that landed heads seven times in ten. Pick your path."
- **p04** fades the right panel and grows the left to full width (its scene 1).

## 5. p04's final frame (p05's opening for both courses)

p04 scene 13: p03's right panel **scaled evenly by 1.3 and centred** (the t11 pattern, ruling 64): the coin plate (about 340 px), the tally card (about 680 × 390 px) "10 flips: 7 heads, 3 tails"; chip "is this coin unfair?"; grey chip "Standard 2: probability trees done" (replacing "Arrays and trees: done"; Revision 2, root's decision 2: Revision 1 read "Probability trees: done", which named a video Standard 1 viewers skip); label "Next: relative frequency" (replacing "Standard 1 next: relative frequency"); chips "Next" and "?". p05 opens on this; Standard 1 viewers arriving from p03 have seen the same picture at 1/1.3 scale.

## 6. p06's two-route frame (p07 opens on its left panel; p08's picture on its right)

p06 scene 12, held about 2 s, then returned to silently after the notes. Exactly:

- **Split and tags:** as section 4.
- **Left panel, Standard 2 (x 0 to 950), p07's opening:** a coded canteen survey card (about 820 × 560 px) headed "Canteen survey: 80 students" with a small grey tag "invented example" (26 px; Revision 2, root's decision 1), two tick-box questions "bought lunch?" and "bought recess?"; a small stack of returned cards beside it, three showing both boxes ticked; chip "how do we count the overlap once?"; label "Standard 2 next: Venn diagrams and two-way tables". No counts shown (p07 says 45, 30 and 12 in its scene 1).
- **Right panel, Standard 1 (x 970 to 1920), p08's picture:** the phone plate `ma12-phone-v1.png` (about 520 px tall) showing an invented app advertisement "4 out of 5 users sleep better!" (40 px), a small grey footnote "Based on 25 volunteers" (26 px) and a tag "invented example"; chip "should we believe it?"; grey chip "Probability calculations: done"; label "Standard 1 next: probability in the real world".
- **Chips:** "Next" and "?". No value worked out.
- **Spoken lead-in (p06 scene 12):** "That's expected frequency. From here, there are two paths. If you're doing Standard two, next we sort survey answers with two questions at once, like students who bought lunch, recess, or both. If you're doing Standard one, next we look at how numbers like these are used, and sometimes misused, by advertisers, councils and companies. Pick your path."

## 7. p07's final frame (p08's opening for both courses)

p07 scene 12: p06's right panel **scaled evenly by 1.3 and centred**: the phone plate (about 680 px tall), the advertisement "4 out of 5 users sleep better!" (52 px), the footnote "Based on 25 volunteers" (34 px), the tag "invented example"; chip "should we believe it?"; grey chip "Standard 2: Venn diagrams and tables done" (Revision 2, root's decision 2; Revision 1 read "Venn diagrams and tables: done"); label "Next: probability in the real world"; chips "Next" and "?". p08 opens on this. p07 adds a 12 s bridge (scene 11) before it, so the move from tables to an advertisement has a reason; it is p07's first trim.

## 8. p08's two-route frame (Standard 2 to z01; Standard 1: Year 12 course complete)

p08 scene 12, held about 2 s, then returned to silently after the notes. Accepts the z01 pack's proposal (`pre-design/maths-standard/math-s12-z01.md`, "Start"; ruling 68). Exactly:

- **Split and tags:** as section 4.
- **Left panel, Standard 2 (x 0 to 950), z01's opening:** the new plate `ms12-bread-loaf-v1.png` (about 300 px) resting on the existing produce scale plate `ma11-produce-scale-v1.png` (about 420 px wide), the scale's display coded "--- g"; a coded quality sheet (about 380 × 300 px) "Quality check: 200 loaves, labelled 700 g"; a coded histogram (about 820 × 380 px), axes "mass (g)" (690 to 730) and "number of loaves", with the first 12 weighed loaves dropped as small blocks into their classes (any 12 masses from the z01 pack's data), counter "weighed: 12 of 200"; chip "what shape is this?"; label "Standard 2 next: the normal distribution"; chip "Next".
- **Right panel, Standard 1 (x 970 to 1920):** a coded playlist card (about 760 × 560 px) headed "Year 12 Maths Standard playlist", listing six strands with a tick each ("Algebraic relationships", "Money: investments and loans", "Ratios and rates", "Trigonometry", "Bivariate data", "Probability") and a line "revise any video, any time"; grey chip "Standard 1: Year 12 course complete"; label "Standard 1: well done". **No promise of further Standard 1 videos** (the optional practice video math-s12-x02 is not mentioned).
- **Chip "?"** at the bottom right. No value worked out.
- **Spoken lead-in (p08 scene 12):** "That's the end of probability. If you're doing Standard two, next is the normal distribution, starting with a bakery that weighs two hundred loaves, all labelled seven hundred grams. What shape will their masses make? If you're doing Standard one, that's the last new topic in your Year 12 course. Well done. Every video is in the Year 12 Standard playlist, ready whenever you want to revise."
- **For the z01 designer:** (1) z01 opens on this frame, fades the right panel and grows the left. (2) The loaf is briefed in p08 (section 12); z01 does not brief it again, and the produce scale stands in for the z01 pack's "bench scale". (3) The histogram shows only the first 12 loaves, so the bell is still z01's reveal. (4) If z01 changes its opening, only p08's left panel and the second sentence of its lead-in change.

## 9. Departures from the packs (each recorded in its design)

1. **p01:** the chance-line chip "the sun rising tomorrow" becomes "a die shows a number from 1 to 6", so every chip is a listable experiment; A1 is set on a school bus (the canteen's pies are p06's) and A2 on a phone's colours and storage (5 × 3 = 15; food is kept for p03's lunch deal); the lunch deal is not used in p01.
2. **p02:** the pack's A2 slip "1/6, six different letters" is wrong (CANTEEN has five different letters: C, A, N, T, E) and becomes "1/5, five different letters"; A2's part (c) (vowels) is left out for brief feedback; the rideshare is the g01 example; the site's die appears once for "not a 6".
3. **p03:** a short without-replacement scene is added (the 5 × 5 array loses its diagonal, 5 × 4 = 20, both blue 3/10), because Standard 1's point says "involving replacement where applicable" and Standard 1 skips p04; it uses no branch probabilities. A1 keeps the pack's (a) and (b); (c) is left out.
4. **p04:** A1 uses the pack's free throws (0.7) rather than its netball question, so netball can be p05's season record; the without-replacement tree uses the same 3 blue, 2 red bag (the site's card 07), whose values equal `we-3`'s.
5. **p05:** the site's `we-1` die is the g01 example; the running line's spoken readouts (0.54 at 100, 0.507 at 1000) need a seed (p05 open decision 1).
6. **p06:** `we-3`'s "items" become phone cases (numbers unchanged); the site's light bulbs (500 × 0.02 = 10) are used in scene 6; A2 keeps the pack's (a) and (b), with (c)'s assumption said in feedback.
7. **p07:** the pack's question 1 (the canteen survey) is the teaching example, because the canteen card is p06's handoff picture; A1 is the site's card 01 class (12, 10, 5); scene 11 is a short bridge.
8. **p08:** the site's coffee and supplement headlines become an invented screen-protector headline (the site's 2% to 1% kept); the pack's question 2 (the council) is the g01 example, and A2 is a new gym poll; the site's fifth question ("Has the result been replicated?") becomes "Of whom?"; the bread loaf is briefed here, with the existing produce scale.

## 10. Sources to confirm (Codex maths check)

- **The forecast (ruling 67):** Codex may look for the Bureau of Meteorology's dated definition of "chance of rain"; the designs do not depend on it and do not explain the method either way.
- **No real statistics:** every claim in p08 (the advertisement, the headline, the council, the phone maker, the gym) and every dataset in p02 to p07 beyond the site's is invented and labelled. Codex confirms no real company, product or survey is named.
- **No prices or rates** appear in p01 to p08 (ruling 5 does not apply).

## 11. Site corrections applied

MS-66 (P(B|A) in lesson02; the misplaced "covered in Lesson 2"): no conditional notation anywhere; p04's second stage in words. MS-68 (deck, raffle, drug trial, genetic marker, insurance): none used; `we-3` reworded as phone cases with its numbers. MS-69 (unsourced institutional claims): none repeated; p08's claims are invented and labelled. New pack error: p02's A2 slip (section 9, item 2); no site error.

## 12. Kit and plates (no source changed)

Kit, as `checks/maths-standard-kit-needs-b-p.md`, with these uses and additions recorded in each design: **ChanceLine** (p01, reused by p02 and p08); a **form converter** and **PIN wheels** (p01); a **hop highlight** with regroup-by-label on OutcomeArray (p02); **lettered tokens** with draw, copy and drop-back, a **tree-to-array link** and a **diagonal drop** (p03); **bag changes** and a **fraction-of-a-fraction cell bar** under ProbabilityTree (p04); a **running proportion** in three panels and **run piles** (p05); an **expected band** on TrackerFill and a **trip-month grid** (p06); a **Venn-to-table slide** and a **card drop order** (p07); **ClaimCard**, a **sample field** and a **relative-absolute slider** (p08).

Plates: existing and inspected 19 Nov 2026 (counter bag, coins, die faces, phone, bus, produce scale; the kiosk is b07's). New, one brief each: `ms12-commuter-train-v1.png` (p04, first seen there), `ms12-pie-warmer-v1.png` (p06, first seen there), `ms12-bread-loaf-v1.png` (p08's final frame and z01's anchor; ruling 17). Not used: the tear-off calendars (an Advanced anchor), the spinner plates (Advanced s10's homemade spinner), `ms12-coffee-sandwich-v1.png` (a dark vignette background, not a clean object plate).

## 13. For root

Revision 2 status (19 Nov 2026): items 1, 3, 4, 5 and 6 are closed by ruling 76 and root's resolution decision 3 (the without-replacement scene stays; the seed values stand, to be met by the build; "Of whom?" stays; p06 is not padded; p08 briefs the loaf and z01 does not). Item 2 is still open for the train and the pie warmer: the learning review found the train helpful but not essential and the pie warmer adding little that a coded gauge does not, and the bread loaf is needed either way. Revision 2 keeps both plates as briefed, so root can drop either without other changes (p04: a second bus; p06: the gauge alone with a grey caption "canteen pies"). Revision 1 list, for the record:


1. **p03's without-replacement scene** (section 9, item 3): keep (serves Standard 1's "involving replacement where applicable"), or cut about 30 s if root reads it as "with replacement only".
2. **Three new plates** (section 12): accept, or swap the train for a second bus (p04) and drop the pie warmer (p06); the bread loaf is needed for p08 and z01 either way.
3. **p05's seed:** accept the spoken readouts 0.7, 0.54 and 0.507, to be met by the build's seed, or have them changed to the seed's values before voicing.
4. **p08's fifth question** "Of whom?" in place of the site's "Has the result been replicated?".
5. **p06 at 4,981 characters** (ruling 52 pattern): accept without padding.
6. **z01:** confirm section 8 for the z01 designer (the loaf briefed in p08; the produce scale as the bench scale; 12 of 200 loaves shown).

Nothing recorded; human listening pending.
