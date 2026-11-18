# Maths S12 z05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-z05.md`, "How do z-scores and shading under the curve give a probability?" Source SHA256 `9d8b00a747f36727fec492dbb5d39473e6af5ee0e1edb8c392b3211a464ba7ca`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (z04: the bands and the eight pieces; z02: z-scores; p02: probability from 0 to 1; p06: expected number) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: blocker** (1 blocker, 3 should fix, 1 optional).

The teaching method is good. Scene 3 makes "z first" its own visible step (the 700 g line drops onto the z-axis at −2), "five percent lies outside, shared equally by two tails" explains the halving, the three shapes are built from named pieces, "if more than half the bell is shaded, the answer must be more than zero point five" is a usable check that A1 then tests, splitting at the mean is reasoned in the worked example, and Ava's z = 1.4 honestly gets a range. Recalculated (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures): z = −2, tail 2.5%, 0.025 × 400 = 10 (exact normal tail 2.275%, 9.1 loaves, not used); 0.84, 0.16, 0.815, 0.32; −1 and 2, 34 + 47.5 = 81.5, slip 163, 0.025 × 600 = 15; 84 and 97.5 (exact Φ(1.4) = 0.9192 lies inside); A1 z = 2, 0.975; A2 z = 1, 16%, 160, slip 320; z = −2 and −1, 135. All correct.

## Findings

1. **Blocker, scene 5 (ruling 75 not applied: the student-heights example is still in the design).** Root ruled on 19 November that z05's student-heights example is replaced by a context with no people, keeping the numbers. The task strip, narration, givens, bell axis, practice notes and open decision 3 still use "the heights of 600 Year 12 students". Fix, keeping every number and the site's method: "The heights of 600 Christmas trees at a tree farm are normally distributed with a mean of 165 cm and a standard deviation of 7 cm. (a) What percentage of the trees are between 158 cm and 179 cm tall? (b) About how many of the 600 trees are taller than 179 cm?" Narration: "The heights of six hundred Christmas trees at a tree farm ... What percentage are between a hundred and fifty-eight and a hundred and seventy-nine centimetres tall? And about how many are taller than a hundred and seventy-nine? ... So about fifteen trees." Givens "600 trees"; the axis stays "height (cm)" 144 to 186; answer "about 15 trees". This keeps "tall", "taller" and centimetres, so no other line changes. Root's own examples also work (for example 600 parcels with masses in grams, or a fill volume in mL, though z06 already uses juice bottles). Update "Owner rules applied", "Numbers used", the practice-question section and close open decision 3. No time change.

2. **Should fix, scene 2 (why an area is a probability).** "The whole area under the bell stands for all the loaves" is stated, but the student is not shown why area counts loaves. z01 built the bell from columns, so the link is one sentence away. Narration, after "a probability of one": "Remember the columns from the first video: each column's area held its loaves, and the bell is those columns smoothed out. So the area over a range is the share of the loaves in it." Visual: z01's 5 g columns appear as faint outlines under the bell; on "share of the loaves" the columns over the darker strip glow with it. Students should be able to say why shading an area answers a "how likely" question. About 8 s.

3. **Should fix, scene 4 (crowded small bells).** Three bells of about 560 px each, each carrying all eight piece labels "faint", put 24 small labels on screen while new sums are spoken; faint text a student must read fails the visual standard. Show on each bell only the pieces its sum uses, lit at 32 px or more, and leave the other regions unlabelled. Students should be able to follow one sum at a time.

4. **Should fix, scene 3 (the simulated day lands on exactly the expected number).** The seeded run stops at exactly 10 beside "expected: 0.025 × 400 = 10", which shows an expected count as exact, the slip the pack lists. It also leaves z06's batch judgement ("more than twice as many, so unlikely to be luck") without any sense that counts wobble by chance. Seed the run to land on 11. Narration, replacing the end of scene 3: "... so we'd expect about ten loaves a day under the label. Today it's eleven; another day it might be nine. About ten is what we expect." Visual: the counter settles on "11" next to a dashed "expected: about 10" line; framed "about 10 loaves a day" (green). Students should understand that the expected number is a long-run average, not a promise. About 5 s.

5. **Optional, scene 4 (the "above" against "away" sentences).** Scene 4 is the longest stage after the board (779 characters) and its last three sentences preview z06's "either side" lesson. Take the named reserve trim (about 16 s) and change key note 3 to "P(z < 1) = 0.84; P(z > 1) = 0.16." z06 teaches both tails in scene 3 and A2; A2 here keeps the one-side point with its "(a) 320" slip.

## Joins

z04 to z05 matches section 2 of the decisions file (the label tag, the red 700 line, the shaded tail with no percentage, the chance chip), and scene 1 says the mean and standard deviation that z04's frame leaves to the narration. z05 to z06 matches: the 723 g display with the soft red ring, the blue dot at 723, no shading, "is this loaf a problem?", no z-score.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's bell is empty and A2's picture is the rack plate. Feedbacks give the answer, the reason and one crossed classic slip in about 26 s and 30 s. A bus trip and the bakery are everyday anchors; after finding 1, no example concerns people, and none are drawn.

## Key notes and length

The five notes are short; note 4 keeps both the split-at-the-mean rule and the sketch check, and note 5 says "about". About 502 s with holds; findings 2 and 4 add about 13 s (about 515 s), or about 499 s with the optional trim. Under 570 s either way.

No speech, design edits, builds or commits were made.
