# Year 12 Maths Standard z01 to z06: learning review resolution

19 November 2026. This is the design author's resolution of `m-s12-z01-z06-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for z01 to z06 (The normal distribution, Standard 2 only). It applies root's four binding decisions for this round: (1) z05's student heights become 600 Christmas trees at a tree farm, with the same numbers, "taller" and centimetres, and z05's simulated day is seeded to land on 11, not exactly 10; (2) z01 imagines 1,000 loaves, so z04 counts the same set (683, 954 and 997 of 1,000); (3) in z06 one unusual loaf is set aside and weighed again, "check the oven" is kept for an unusual batch, the 723 g loaf's own probability is said, and five ordinary days (18, 23, 16, 21, 25) come before yesterday's 46; (4) every other should-fix applied, cheap optional findings applied, every design under 570 s, and every decision recorded, with z01's open decision 1 closed. All six designs now carry "Revision 2 (19 Nov 2026): learning review resolved" at the top, and their Status lines say "Revision 2 (19 Nov 2026): learning review resolved". Each Revision 2 section has the detail, and `root-decisions-maths-s12-z01-z06.md` has a new Revision 2 section. This round changed documents only: no speech, build, render, plate or commit. Changed and added numbers were rechecked with exact fractions, `math` and `random` (`work/brief-resolve-standard-z/verify.py`, `python -I`, 0 failures). Narration was recounted by script as the sum of the scene strings (`work/brief-resolve-standard-z/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority.

**Totals:** 24 findings (1 blocker, 14 should fix, 9 optional). The blocker is resolved by root's decision 1. Should fix: all 14 applied. 10 use the reviewer's wording or fix as written, 3 follow root's decisions as written (z01 #3, z05 #4, z06 #3), and 1 is adapted (z01 #4, shortened to keep feedback 1 under 30 s). Optional: all 9 applied. 2 are adapted in form only (z03 #3, z05 #2). None declined.

## Blocker

- z05 #1, scene 5 (student heights still in the design, ruling 75): resolved (decision 1). "The heights of 600 Christmas trees at a tree farm are normally distributed with a mean of 165 cm and a standard deviation of 7 cm. (a) What percentage of the trees are between 158 cm and 179 cm tall? (b) About how many of the 600 trees are taller than 179 cm?" Every number and the site's method are kept, and the narration changes only the context words and "So about fifteen trees." The givens read "600 trees", a small coded fir-tree outline sits beside them (no plate), the axis stays "height (cm)", and the answer reads "about 15 trees". The scene id is now `worked-christmas-trees`. The owner rules line, decisions, numbers, practice notes, Codex brief and open decision 3 are updated. No example in z01 to z06 now concerns people.

## Should fix

- z01 #1, scene 4 (why the centres match): accepted, reviewer's narration after "the same place": "Fold the bell at the peak and the two halves match. So half the loaves are on each side, which puts the median there, and every heavy loaf has a light partner the same distance out, so it balances there too." The fold returns at 710, "100 loaves" shows on each side, and on the new cue "partner" dots at 703 and 717 light with equal "7 g" brackets above the level beam.
- z01 #2, scene 2 (two pluses "cancelling"): accepted, reviewer's narration ("push each loaf a little heavier or a little lighter ... Only a few get pushes all one way, and those are the loaves out at the edges."). Tags "more dough: heavier" and "longer bake: lighter" meet and leave "about 710 g"; the new cue "edges" relights the end columns. The named reserve trim in scene 3 was not needed and stays in reserve.
- z01 #3, scene 2 (imagined columns off the axis): accepted (decision 2). "Now imagine a thousand loaves, weighed to the nearest gram"; label "imagined: 1,000 loaves, to the nearest gram". 1,000 in 1 g columns against 200 in 5 g columns is a height ratio of exactly 1, so the 1 g columns peak near 80 on the same axis. Author note (c) fixes the seed so that 683, 954 and 997 of the unrounded masses lie inside the three bands; seed 767 with Python's `random.Random(seed).gauss(710, 5)` does this, and no loaf sits on a band edge.
- z01 #4, feedback 1 (unreadable slip): accepted, adapted. The slip is "(b) negatively skewed", crossed with "mean > median > mode: the tail is on the right". The reviewer's two sentences are joined to keep the feedback at about 27 s: "Calling B negatively skewed is the slip. The tail is on the side the mean is pulled towards, the right, so B is positively skewed." The earlier "Set B is positively skewed." is folded into that sentence.
- z02 #1, scenes 1 and 2 (why the standard deviation is the ruler): accepted, reviewer's narration ("It depends how much the loaves usually vary. If they usually varied by twenty grams, eight would be nothing special. If they varied by one gram, eight would be huge. So we measure the gap with the loaves' own spread."), with the σ = 20 ghost bell and the σ = 1 spike fading on the new cue "spread".
- z02 #2, attempt 2 (b) and feedback 2 (the condition): accepted, reviewer's wording on the card, in the narration and in the feedback ("because the z-scores use the loaves' own mean and standard deviation"). Feedback 2 is about 29 s.
- z03 #1, scenes 4 and 6 (the frame leads into attempt 2's slip): accepted, reviewer's fix. Scene 6 adds "So in your sentence, say how many standard deviations better, faster here, not just which number is bigger." The frame returns and rewrites its last clause to "because it is ___ standard deviations better than the mean (faster), against ___", filled for the swim on the new cue "bigger". Key note 5: "Conclude with both z-scores, saying which way is better."
- z04 #1, scenes 2 and 3 (68, 95 and 99.7 asserted): accepted, with decision 2. "Remember the thousand imagined loaves? Count the loaves inside. Six hundred and eighty-three of the thousand, about sixty-eight percent, roughly two thirds. That share of the loaves is the share of the area under the bell between the lines. And every normal curve is the same bell, just slid and stretched, so in z-scores the share is the same for any normal distribution." The loaves return as a dot strip with a counter (683, then 954 and 997 of 1,000 in scene 3), and a ghost bell slides and stretches onto the loaf bell. New cues "inside" and "stretched".
- z05 #2, scene 2 (why an area is a probability): accepted, adapted in wording only. "Remember the columns the loaves first made? Each column's area held its loaves, and the bell is those columns smoothed out. So the area over a range is the share of the loaves in it, and that's the chance a loaf lands in that range." This avoids "from the first video", which could be read as the playlist's first video. z01's columns appear as faint outlines and glow under the darker strip.
- z05 #3, scene 4 (24 faint labels): accepted. Each small bell shows only the pieces its own sum uses, lit at 36 px as spoken; the other regions stay unlabelled.
- z05 #4, scene 3 (the day landed on exactly 10): accepted (decision 1). "Today it's eleven. Another day it might be nine. About ten is what we expect." The counter lands on 11 beside a dashed "expected: about 10" line, a faint run flickers to 9, and the frame reads "about 10 loaves a day". Seed 2 with Python's `random.Random(seed).gauss(710, 5)` gives 11 of 400 under 700 g.
- z06 #1, scenes 4 and 6 (one loaf against twenty a day): accepted, reviewer's narration (decision 3). "So the baker sets this loaf aside and weighs it again. But with four hundred loaves a day, a few unusual ones turn up just by chance, so one loaf on its own doesn't prove the oven is wrong." Decision card "z = 2.6 > 2: unusual. Set it aside and weigh it again."; grey chip "one unusual loaf: weigh again. Many: check the oven." "Check the oven" is now said only for the batch.
- z06 #2, scene 4 (the loaf's own probability): accepted, reviewer's sentence (decision 3): "Fewer than two and a half percent of loaves are that heavy or heavier." A small bell shows the tail beyond 2.6 inside the 2.5% tail beyond 2, labelled "less than 2.5%".
- z06 #3, scene 6 (why 46 is not luck): accepted (decision 3). Five ordinary days land first as grey ticks (18, 23, 16, 21, 25): "On ordinary days the count wobbles around twenty: sixteen one day, twenty-five another. Yesterday, forty-six loaves fell outside, far beyond any ordinary day, and more than twice what we'd expect." The old "so it's unlikely to be luck" sentence is replaced.

## Optional

- z01 #5, feedback 2: applied. Slip "(a) Farm A: its curve is higher", caption "the centre sets the mean; height only shows the spread". Narration: "Choosing farm A for the larger mean, because its curve is higher, is the slip. Where the centre sits gives the mean. A taller curve just means less spread." Scene 6 and key note 5 still teach "narrower = taller".
- z02 #3, scene 6: applied ("Seven hundred and four is six grams below, and six over four is minus one point five."), with a bracket and a row on screen.
- z02 #4, scene 2: applied ("three grams out of a five-gram step is three fifths, zero point six of a step").
- z03 #2, scene 3: applied, reviewer's sentence ("Relative to her class, which means compared with the others who sat the same test, ..."), with a grey chip.
- z03 #3, feedback 2: applied, adapted. The long jump is said like the sprint, with the subtraction spoken ("four point eight five minus four point five, over zero point two five, one point four"), and two small joins keep the feedback at about 30 s (398 characters).
- z04 #2, scene 3: applied ("+27 (both sides)", "+4.7 (both sides)").
- z04 #3, scene 5: applied (thin-piece labels outside the curve on leader lines at 36 px; sum strip 36 px).
- z05 #5, scene 4: applied. The named reserve trim is taken (the "above" against "away" sentences), and key note 3 is "P(z < 1) = 0.84; P(z > 1) = 0.16." z06 teaches both tails, and z05's A2 feedback still explains "half of the thirty-two percent".
- z06 #4, scene 6: applied ("z from minus two to two"; "z −2 to 2" under the gate).

## Root's decisions and housekeeping

- Decision 1: applied in z05 (Christmas trees; the day lands on 11). z06's five ordinary days build on z05's 11.
- Decision 2: applied in z01 (1,000 imagined loaves, seeded) and z04 (the same set counted).
- Decision 3: applied in z06 (weigh again; "check the oven" for the batch only; the loaf's own tail; five ordinary days before 46).
- Decision 4: every other should-fix applied, all optional findings applied, all six under 570 s, every decision recorded in each Revision 2 section and in the decisions file's new Revision 2 section. z01's open decision 1 is closed: p08's decisions file section 8 is on disk and matches scene 1 and the Boundary.
- Other open decisions closed by ruling 75 and the summary's root decision 4, each marked "Closed in Revision 2": z01 2 and 3; z02 1; z03 1 and 2; z04 1 and 2; z05 1, 2 and 3; z06 2. Still open: z02 2 (the formula's typeset form, for Codex), z06 1 (the final frame, provisional on c01a's side) and z06 3 (the "Next" line until c01a is titled).
- New cues: z01 "edges", "partner", "skewed" (feedback 1); z02 "spread"; z03 "bigger"; z04 "inside", "stretched"; z05 "range", "expect"; z06 "heavier", "wrong", "another". Hand tags are added to each design's list. No em dash (U+2014) appears in any of the six designs or the decisions file. Every bold cue is quoted in its scene's Visual in spoken order (checked by script, `work/brief-resolve-standard-z/cues.py`).
- Housekeeping: z04's author note and numbers now give the expected counts of 1,000 as 682.7, 954.5 and 997.3, which round to 683, 954 and 997 (the seeded counts).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Feedback 1, 2 |
| --- | --- | --- | --- | --- |
| z01 | 5,069 | 5,477 | about 530 s | 27 s, 30 s |
| z02 | 5,057 | 5,499 | about 524 s | 26 s, 29 s |
| z03 | 5,126 | 5,307 | about 504 s | 27 s, 30 s |
| z04 | 5,079 | 5,348 | about 515 s | 27 s, 30 s |
| z05 | 5,141 | 5,160 | about 505 s | 26 s, 30 s |
| z06 | 5,033 | 5,343 | about 520 s | 30 s, 22 s |

All six are under 570 s with at least 40 s of margin, and all are within 5,000 to 6,800 characters. Every feedback is 30 s of speech or less (the longest are z01 feedback 2 at 396 characters and z03 feedback 2 and z06 feedback 1 at 398, about 30 s). The longest single scenes are z05 scene 5 (959 characters, about 72 s, the two-part worked example), z06 scene 4 (881, about 66 s, one gauge stage with a named reserve trim) and z01 scene 4 (835, about 63 s, one board). These are speech-only estimates; measure them on the Google voice.

## Joins

- p08 → z01: unchanged. z01 scene 1 opens on p08's final frame exactly, now confirmed against p08's decisions file section 8.
- z01 → z02, z02 → z03, z03 → z04, z04 → z05, z05 → z06: unchanged (section 2 of the decisions file).
- z06 → c01a: **unchanged**. z06's final frame and lead-in (the "Morning jobs" board, section 3) are exactly as Revision 1.

## For root

- Seeds: z01 and z04 depend on one seeded set of 1,000 masses with exactly 683, 954 and 997 inside the bands, and z05 on a seeded day of 11. The Python seeds (767 and 2) show that such sets exist; the kit's own generator will need its own seeds with the same counts. Confirm that the builder fixes them.
- z05 optional finding 5 removes the "above" against "away from" sentences that Revision 1 added to scene 4 (decisions file section 4 item 6). z06 carries both tails. Confirm, or restore them (about 16 s; z05 would be about 521 s).
- z05's Christmas trees use a small coded fir-tree outline, not a plate. Confirm, or brief a plate.
- z01's feedback 1 joins the reviewer's two slip sentences into one to stay under 30 s. Confirm the wording.
- Still open on c01a's side: z06 open decisions 1 and 3.

Nothing recorded; human listening pending.
