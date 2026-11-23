# Maths S12 Z05: How do z-scores and shading under the curve give a probability? A probability as a shaded area, z first, then sketch and shade, less than, greater than and between built from the rule's pieces, an expected count, and a range when z is not a whole number (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and the t-strand resolution logs), the Year 12 Advanced normal distribution designs `math-a12-s09.md` to `s12.md` (visual approach only) and root's Standard rulings (1 to 74). Designer's decisions for z01 to z06, including every join: `../checks/root-decisions-maths-s12-z01-z06.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,160 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 505 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-z05-learning-review.md` (summary `../checks/m-s12-z01-z06-learning-review-summary.md`), with root's rulings 1 to 77 and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-z01-z06-learning-review-resolution.md`. Findings by the review's numbers:

1. Blocker, scene 5 (ruling 75 not applied: student heights): **resolved** (root's decision 1). The worked example is now "The heights of 600 Christmas trees at a tree farm are normally distributed with a mean of 165 cm and a standard deviation of 7 cm. (a) What percentage of the trees are between 158 cm and 179 cm tall? (b) About how many of the 600 trees are taller than 179 cm?" Every number and the site's method are kept (z = −1 and 2; 34% + 47.5% = 81.5%; 2.5% of 600 = about 15 trees; slip 163%). The narration changes only the context words and "So about fifteen trees." Givens "600 trees", a small coded fir-tree outline (no plate), the axis still "height (cm)", answer "about 15 trees". Scene id `worked-christmas-trees`. No example in z05 now concerns people. Owner rules, decisions, numbers, practice notes and open decision 3 updated.
2. Should fix, scene 2 (why an area is a probability): **accepted**, reviewer's link, adapted in wording only ("Remember the columns the loaves first made?" rather than "from the first video", which could be read as the playlist's first video). "Each column's area held its loaves, and the bell is those columns smoothed out. So the area over a range is the share of the loaves in it, and that's the chance a loaf lands in that range." z01's 5 g columns appear as faint outlines under the bell, and those over the darker strip glow with it (new cue "range", hand tag "area = share of the loaves"). The old sentence "So the chance that a loaf lands in some range is the share of the area over that range." is folded into the new one.
3. Should fix, scene 4 (24 faint labels on three small bells): **accepted**. Each bell shows only the pieces its own sum uses, lit at 36 px as they are spoken (0.5 and 0.34; 0.84 and its complement; 0.34, 0.34 and 0.135); the other regions stay unlabelled.
4. Should fix, scene 3 (the simulated day landed on exactly 10): **accepted**, reviewer's narration (root's decision 1): "Today it's eleven. Another day it might be nine. About ten is what we expect." The seeded run lands on 11 beside a dashed "expected: about 10" line, a faint second run flickers to 9, and the frame reads "about 10 loaves a day" (new cue "expect", hand tag "expected = long-run average"). The kit check names a seed that gives 11 (seed 2 with Python's `random.Random(seed).gauss(710, 5)`). z06's five ordinary days build on this.
5. Optional, scene 4 ("above" against "away"): **applied**. The named reserve trim is taken (scene 4's last three sentences), and key note 3 becomes "P(z < 1) = 0.84; P(z > 1) = 0.16." z06 teaches both tails ("more extreme", scene 3, and its attempts), and A2's feedback here still explains "half of the thirty-two percent outside the middle band" with its "(a) 320" slip.

Open decisions: 3 is closed (Christmas trees); 1 (no split) and 2 (A1 "less than 46") were accepted in ruling 75 and the summary's root decision 4 and are marked closed. Joins unchanged: scene 1 still opens on z04's final frame, and scene 12 is still z06's opening frame.

Narration 5,160 characters by script (Revision 1: 5,141), about 505 s with holds, under the 570 s cap. Feedbacks about 26 s and 30 s (unchanged). The longest scene is the worked example (959 characters, about 72 s): one board, the site's two-part question. Stage-plan times are Revision 1 approximations. Nothing recorded; human listening pending.

Scope: fifth video of The normal distribution strand, playlist order 81. **Standard 2 only** (ruling 68). One video: it fits under 570 s, so the pack's z05a and z05b split is not needed (ruling 70). Pre-design pack: `../pre-design/maths-standard/math-s12-z05.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/the-normal-distribution/lesson07.sa.html` (SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`; card 08, "A z-score is a position. A probability is an area.", the table P(z < 1) = 0.5 + 0.34 = 0.84, P(z > 1) = 1 − 0.84 = 0.16, P(−1 < z < 2) = 0.34 + 0.34 + 0.135 = 0.815; `we-1` (c), "between 84% and 97.5% of the English class scored below her"), `lesson03.sa.html` (SHA256 `75fc5aaa881ee73917745152df82bb12661b239d2a924938173498eeffe144a3`; `we-1`, 600 heights, μ = 165 cm, σ = 7 cm, "34% + 47.5% = 81.5%", "0.025 × 600 = 15"; its numbers and method are kept, set as 600 Christmas trees at a tree farm) and `lesson05.sa.html` (SHA256 `b6e3053ec2974ccd9f6a3deef897a85c23ea4a61a67d252f3457569d2419dcbe`; `we-1` (a), 2.5% of 1,200 rice bags = 30, the same tail as the loaves). Route entry: `math-s12-z05` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the loaf under its 700 g label (z04's final frame) as the anchor; bells, shading and pieces coded; the loaf rack for the day's 400 loaves; the bus plate in attempt 1.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces (Revision 2: the worked example is the heights of 600 Christmas trees at a tree farm, ruling 75 and root's decision 1; no example concerns people); one main question; one stage at a time; words before symbols; plain meanings (probability as an area, shade, expected number); probabilities as decimals and percentages side by side; "about" with counts; g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the bakery, a bus trip); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (The normal distribution):
- `ci8b7ebb67`: "Calculate probabilities using z-scores and the empirical rule"
- `cicf71571a`: "Represent probabilities by shading areas under the normal distribution curve"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

**Boundary:** starts from z04's final frame exactly (section 2 of `../checks/root-decisions-maths-s12-z01-z06.md`, z04 → z05): the bench scale with the loaf and its coded tag "label: 700 g" (blank display); the loaf bell on a gram axis 690 to 730, μ at 710, violet dashed marks at 695 to 725; a dashed red line at 700 labelled "label: 700 g"; the tail left of 700 filled amber, no percentage; chip "what's the chance a loaf is under its 700 g label?"; chips "Next" and "?". Recalls z04 (the eight pieces), z02 (z-scores), z03 (Ava's English z = 1.4), p02 (probability from 0 to 1) and p06 (expected number) in a phrase or grey chip. Teaches: the whole area is 1 (100%), each half 0.5; a probability is the shaded share of the area; turn each boundary into a z-score first, sketch, then shade one of three shapes (less than, greater than, between); build the area from the pieces; split a between-region at the mean when it is not symmetric; one tail beyond 2 is 2.5%; a probability times a number of items gives an expected count ("about"); the sketch check (more than half shaded, more than 0.5); a z between whole numbers gives only a range. Stops before "unusual" and "more extreme" (z06).

## Decisions

- **Anchor: the loaf under its label (z04's handoff).** 700 g is z = (700 − 710)/5 = −2; the tail beyond −2 is (100 − 95)/2 = 2.5%, a probability of 0.025. Of a day's 400 loaves, 0.025 × 400 = 10, so about 10 loaves (a live count on the loaf rack plate). Same tail as the site's lesson05 `we-1` (a), 30 of 1,200 rice bags, said in author notes only.
- **The order of a method (one stage at a time).** z first (the boundary drops onto the z-axis), then sketch and shade, then build from pieces, then (if asked) a count. Each step is its own visual beat in scene 3; scenes 4 to 6 repeat it.
- **The three shapes (the site's lesson07 card 08 table, on the standard bell).** P(z < 1) = 0.5 + 0.34 = 0.84; P(z > 1) = 1 − 0.84 = 0.16; P(−1 < z < 2) = 0.34 + 0.34 + 0.135 = 0.815. Three small bells in a strip, each shaded and labelled by its pieces (the piece-sum label, kit need).
- **The sketch check.** "If more than half is shaded, the answer must be more than 0.5." Said in scene 4; tested in attempt 1 (crossed 0.025).
- **Worked example: the site's lesson03 `we-1` numbers, set as Christmas trees (g01; Revision 2, ruling 75, root's decision 1).** The heights of 600 Christmas trees at a tree farm, μ = 165 cm, σ = 7 cm: 158 cm is z = −1 and 179 cm is z = 2; split at the mean, 34% + 47.5% = 81.5%; taller than 179 cm is 2.5%, 0.025 × 600 = 15, about 15 trees. Crossed slip "68% + 95% = 163%" (caption "those bands overlap: split at the mean, 34% + 47.5%"). No people: the context keeps "tall", "taller" and centimetres, the bell's axis reads "height (cm)", and a small coded fir-tree outline (grey, 120 px) sits beside the givens card (no plate). Revision 1 used the site's 600 Year 12 students.
- **A range for a z that is not whole (site `we-1` (c); z03's callback).** Ava's English mark had z = 1.4. Below z = 1 is 84%, below z = 2 is 97.5%, so between 84% and 97.5% of her class scored below her. The rule cannot give one number; a range is the honest answer. (The pack names this scene the first trim; it fits.)
- **Simulations (standard item 3).**
  1. **z first, then shade** (scene 3; `NormalCurve` `shade`, `ZSlider` in the rule readout mode): the 700 g line drops onto a z-axis under the gram axis and lands on "−2"; the left tail fills amber and the piece-sum label assembles "(100% − 95%) ÷ 2 = 2.5%" with "= 0.025".
  2. **The day's loaves** (scene 3; the loaf rack plate with a coded counter, `FillDial`'s flag-and-count motion as the pattern): 400 small coded loaf marks file past a "700 g" gate; light ones drop into a red tray; the counter runs "under 700 g: 0 … 11" while "expected: 0.025 × 400 = 10" writes beside it, with a dashed "expected: about 10" line. The marks are a seeded simulation that lands on 11, not 10 (Revision 2, review finding 4, root's decision 1), so the expected number reads as a long-run average, not a promise; z06's five ordinary days build on it.
  3. **Three shapes** (scene 4): three small bells; on each cue the region fills and its pieces light and add live ("0.5 + 0.34 = 0.84"; "1 − 0.84 = 0.16"; "0.34 + 0.34 + 0.135 = 0.815").
- **Colour roles (the strand's).** The bell teal; data values (masses, heights, times) blue; μ, σ marks and z-scores violet; shaded areas, pieces and probabilities **amber** (pale amber fill); answer green; mistake red (also the 700 g label line and the under-weight tray); older rows grey.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "whole area = 1", "area = share of the loaves", "half = 0.5", "z first", "sketch, then shade", "one tail: halve the 5%", "probability × number", "expected = long-run average", "less than: shade left", "greater than: shade right", "between: shade the strip", "more than half shaded: > 0.5", "split at the mean", "between whole z: a range". At most two live at once.
- **Stage changes (standard item 2).** z04's frame (1); the whole area (2); z first, the tail, the day's loaves (3); three small bells (4); g01 board (5); Ava's range (6); framed card (7); question cards (8 to 11); the 723 g loaf (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "The heights of 600 Christmas trees at a tree farm are normally distributed with a mean of 165 cm and a standard deviation of 7 cm. (a) What percentage of the trees are between 158 cm and 179 cm tall? (b) About how many of the 600 trees are taller than 179 cm?"; givens card "μ = 165 cm", "σ = 7 cm" (violet), "600 trees"; equation strip "z = (x − μ)/σ"; rows "158: z = (158 − 165)/7 = −1", "179: z = (179 − 165)/7 = 2"; a bell shaded from −1 to 2 split at the mean, "34%" and "47.5%"; row "34% + 47.5% = 81.5%"; framed "81.5%" (green, (a)); row "taller than 179: 2.5%", "0.025 × 600 = 15"; framed "about 15 trees" (green, (b)); crossed "68% + 95% = 163%".
- **Memory aid.** Framed card: "z first, sketch and shade, then add the pieces." Key line: "A z-score is a position. A probability is an area." (the site's card 08).
- **Visual surprise.** The 400 loaves run past the gate and the red tray's counter settles on 11, right beside the 10 the shading predicted (3).
- **Plain meanings at first use.** Probability recalled ("how likely, from 0 to 1"; grey chip "p02"); "shade" ("colour in the part of the curve the question asks about"); expected number ("probability times how many", grey chip "p06").
- **Attempts (original, HSC style).** A1 (pack question 1, changed demand): bus trip, mean 40 min, SD 3 min; P(less than 46 min) = 0.5 + 0.475 = 0.975; crossed "0.025" (caption "more than half shaded: the answer is more than 0.5"). The pack's 37 to 46 min (81.5%) repeats the worked example's shape, so the demand changes to "less than". A2 (pack question 2): 1,000 loaves a day; heavier than 715 g: 16%, about 160; between 700 and 705 g: 13.5%, about 135; crossed "(a) 320" (caption "one side only: half of 32%").
- **Mistake scene:** none separate. Forgetting to halve the 5% (3 said); the overlapping bands added (5 crossed); a small answer under a mostly shaded sketch (A1 crossed); both tails counted for one side (A2 crossed); a forced exact percentage for z = 1.4 (6 said).
- **Cause chain taught, in order:** (1) the bell is z01's columns smoothed out and each column's area held its loaves, so the whole area stands for all the data and a share of the area is a share of the loaves, a probability (2); (2) the rule's pieces are in z-scores, so the boundary must become a z-score first (3); (3) the tails are equal, so one tail is half of what lies outside the band (3); (4) a probability of 0.025 means about 25 in every 1,000, so times the number of loaves gives an expected count, a long-run average that a single day misses by a little (11 today, 9 another day) (3); (5) every region is a sum or a difference of pieces, and a region that is not symmetric splits at the mean (4, 5); (6) the rule only knows whole steps, so a z between them gives a range (6).
- **Entry knowledge (route):** math-s12-z04 (the bands and the pieces); math-s12-z02 (z-scores); math-s12-p02 (probability 0 to 1); math-s12-p06 (expected number). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-z06, "How do z-scores tell us whether a result is unusual?").** Scene 12's frame, exactly as section 2 of the decisions file (z05 → z06): the bench scale with the loaf and its coded tag "label: 700 g", the display reading "723 g" (blue) with a soft red flash ring; the loaf bell on the gram axis 690 to 730 with μ at 710 and violet dashed marks at 695 to 725, a blue dot at 723 on the axis; no shading; chips "mean 710 g", "standard deviation 5 g", "is this loaf a problem?"; chips "Next" and "?". No z-score is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Loaf: (700 − 710)/5 = −2; (100 − 95)/2 = 2.5%; 0.025 × 400 = 10. Site lesson05 `we-1` (a): (1000 − 1010)/5 = −2; 0.025 × 1200 = 30 (not shown).
  (b) Shapes: 0.5 + 0.34 = 0.84; 1 − 0.84 = 0.16; 0.34 + 0.34 + 0.135 = 0.815.
  (c) Worked example (600 Christmas trees; the site's student heights in Revision 1): (158 − 165)/7 = −1; (179 − 165)/7 = 2; 34 + 95/2 = 34 + 47.5 = 81.5; 0.025 × 600 = 15.
  (d) Ava: below z = 1: 50 + 34 = 84%; below z = 2: 50 + 47.5 = 97.5%. The exact value Φ(1.4) = 0.9192 is not used (no table in Standard 2).
  (e) A1: (46 − 40)/3 = 2; 0.5 + 0.475 = 0.975. A2: (715 − 710)/5 = 1; (100 − 68)/2 = 16%; 0.16 × 1000 = 160; 700 and 705 are z = −2 and −1, 13.5%; 0.135 × 1000 = 135.
  (f) Pronunciations: "zero point zero two five"; "eighty-one point five percent"; "ninety-seven point five".

Main question: *Every loaf is labelled 700 g, but the masses have a mean of 710 g and a standard deviation of 5 g. What's the chance a loaf weighs less than its label, and how do z-scores and shading under the curve give a probability?*
Entry knowledge (z04; z02; p02, p06): the pieces, z-scores, probability, expected number.
Stops after: probabilities from shaded areas for less than, greater than and between; a count; a range for a z that is not whole. No "unusual".
Handoff: the 723 g loaf, "is this loaf a problem?" (z06).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): bell teal; data blue; μ, σ marks and z violet; shaded areas and probabilities amber; answer green; mistake red. Header strip "THE NORMAL DISTRIBUTION" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: under the label
> Every loaf is labelled seven hundred grams, but the masses vary, with a mean of seven hundred and ten grams and a standard deviation of five. So what's the chance a loaf weighs less than its label? How do z-scores and shading under the curve give a **probability**?

Visual: opens on z04's final frame exactly. On the first sentence "Next" fades and the tag "label: 700 g" pulses. On "the masses vary" the bell's outline glows teal. On "less than its label" the shaded tail and the red line pulse together. On "probability" heading "Probability by shading" writes on and the question chip moves to the top right.

### 2. a probability is an area
> Here's the key idea. The whole area under the bell stands for all the loaves, a hundred percent, or a probability of one. Remember the columns the loaves first made? Each column's area held its loaves, and the bell is those columns smoothed out. So the area over a range is the share of the loaves in it, and that's the chance a loaf lands in that **range**. The bell is symmetric, so half the area lies on each side of the mean. The chance a loaf weighs more than seven hundred and ten grams is a **half**. A z-score is a position on the axis, but a probability is an **area**.

Visual: stage change. The scale shrinks to the top left. The loaf bell enlarges (about 1,300 px), unshaded. On "whole area" the whole region under the bell fills pale amber, label "1 (100%)" (hand tag "whole area = 1"); grey chip "p02: probability from 0 to 1". On "columns the loaves first made" z01's 5 g columns appear as faint blue outlines under the bell (grey chip "z01: the loaves' columns"); on "smoothed out" the bell's outline pulses over their tops. On "share of the loaves" a strip between 712 and 718 fills darker and the columns' outlines over it glow with it; on "range" (bold) the strip and columns clear, leaving the bell (hand tag "area = share of the loaves"). On "half the area" the right half fills, label "0.5" (hand tag "half = 0.5"); on "half" (bold) framed "P(more than 710 g) = 0.5" (green). On "position" a violet z marker sits on the axis at z = 1 with a tag "a position"; on "area" the region to its left fills amber with a tag "an area".

### 3. under 700 grams: z first, then shade
> So, under seven hundred grams. First turn the boundary into a z-score. Seven hundred minus seven ten is minus ten, and minus ten over five is minus **two**. Then sketch the bell and shade everything to the left of z equals minus two. That's one tail outside the ninety-five percent band. Five percent lies outside, shared equally by two tails, so this tail is two point five percent, a probability of zero point zero two **five**. The bakery bakes four hundred loaves a day. Two point five percent of four hundred is ten, so we'd expect about ten loaves a day under the **label**. Today it's eleven. Another day it might be nine. About ten is what we **expect**.

Visual: camera continue: simulation 1. A z-axis (violet, −3 to 3) appears under the gram axis, matched tick for tick. On "boundary" the red 700 line glows; row, 52 px: "z = (700 − 710)/5"; on "two" the line drops onto the z-axis and lands on "−2" (hand tag "z first"). On "sketch" the bell redraws as a small sketch-style outline and the left tail fills amber (hand tag "sketch, then shade"). On "Five percent lies outside" both tails tint, "5%" between them; then the right tail clears and the piece-sum label assembles on the left tail, "(100% − 95%) ÷ 2 = 2.5%" (hand tag "one tail: halve the 5%"); on "five" (bold) "= 0.025" (amber) and framed "P(under 700 g) = 0.025 = 2.5%" (green). On "four hundred loaves" stage half-change: simulation 2, the loaf rack plate `ms12-bread-rack-v1.png` (about 700 px) at the left with a coded gate "700 g" and a red tray; 400 small coded loaf marks file past; light ones drop into the tray with the counter "under 700 g" rising; row "0.025 × 400 = 10" (grey chip "p06: expected number = probability × number"; hand tag "probability × number"); on "label" a dashed line "expected: about 10" (amber) marks the counter's scale; on "eleven" the counter settles on "11" (blue), just past the dashed line; on "nine" a faint second run (grey) flickers to "9" and fades; on "expect" framed "about 10 loaves a day" (green; hand tag "expected = long-run average").

### 4. three shapes, built from pieces
> Every question shades one of three shapes, less than, greater than, or between, and each one is built from the pieces. Less than z equals one is the whole left half, zero point five, plus thirty-four percent. That's zero point eight **four**. Greater than z equals one is everything else, one take away zero point eight four, zero point one **six**. And between minus one and two is thirty-four, plus thirty-four, plus thirteen point five, zero point eight one **five**. Here's a quick check. If more than half the bell is shaded, the answer must be more than zero point **five**.

Visual: stage change: simulation 3. Three small bells in a row (about 560 px each) on z-axes −3 to 3, with no piece labels at first (Revision 2: each bell shows only the pieces its own sum uses, lit at 32 px or more as they are spoken; the other regions stay unlabelled). On "Less than z equals one" the left bell fills left of 1 (hand tag "less than: shade left"); only its two pieces light, "0.5" then "0.34" (36 px); on "four" the piece-sum label "0.5 + 0.34 = 0.84" (amber, 44 px) framed green. On "Greater than" the middle bell fills right of 1 (hand tag "greater than: shade right"), its unshaded part shows "0.84" (36 px), then "1 − 0.84"; on "six" "= 0.16" framed. On "between minus one and two" the right bell fills from −1 to 2 (hand tag "between: shade the strip"), only its three pieces light, "0.34", "0.34", "0.135" (36 px), then "0.34 + 0.34 + 0.135"; on "five" "= 0.815" framed. On "quick check" the first and third bells glow with a stamp "more than half shaded" and on "five" (second) hand tag "more than half shaded: > 0.5"; the middle bell's "less than half" stamp reads "0.16 < 0.5".

### 5. worked example: Christmas trees
> Here's a worked example. The heights of six hundred Christmas trees at a tree farm are normally distributed, with a mean of a hundred and sixty-five centimetres and a standard deviation of seven. What percentage are between a hundred and fifty-eight and a hundred and seventy-nine centimetres tall? And about how many are taller than a hundred and seventy-nine? Turn each value into a z-score first. A hundred and fifty-eight is minus one, and a hundred and seventy-nine is **two**. Shade from minus one to two, and split it at the mean. The left part is thirty-four percent, and the right part is half of ninety-five, forty-seven point five. Together, that's eighty-one point five **percent**. Taller than a hundred and seventy-nine is the tail beyond z equals two, two point five percent, and two point five percent of six hundred is **fifteen**. So about fifteen trees. Adding sixty-eight and ninety-five is the slip. Those bands overlap, so split at the mean **instead**.

Visual: clear change to the g01 board. Task strip, 40 px: "The heights of 600 Christmas trees at a tree farm are normally distributed with a mean of 165 cm and a standard deviation of 7 cm. (a) What percentage of the trees are between 158 cm and 179 cm tall? (b) About how many of the 600 trees are taller than 179 cm?" (site lesson03 `we-1` numbers, Christmas trees in place of students). Givens card: "μ = 165 cm", "σ = 7 cm" (violet), "600 trees", with a small coded fir-tree outline (grey, 120 px; no plate). Equation strip "z = (x − μ)/σ". Rows, 52 px: "158: z = (158 − 165)/7 = −1"; on "two" "179: z = (179 − 165)/7 = 2". A bell beside the rows, axis "height (cm)" 144 to 186 and z −3 to 3. On "Shade from minus one to two" the strip fills; on "split it at the mean" a violet line at 165 splits it (hand tag "split at the mean"), left "34%", right "47.5%" with a small note "95% ÷ 2"; on "percent" row "34% + 47.5% = 81.5%" and framed "81.5%" (green, (a)). On "tail beyond z equals two" the right tail fills, "2.5%"; row "0.025 × 600 = 15"; on "fifteen" framed "about 15 trees" (green, (b)). On "slip" a red slip "68% + 95% = 163%" writes; on "instead" it is crossed (caption "those bands overlap: split at the mean, 34% + 47.5%").

### 6. when z isn't a whole number
> What if a z-score isn't a whole number? Remember Ava's English mark, with a z-score of one point four. The rule only gives whole steps. Below z equals one is eighty-four percent, and below z equals two is ninety-seven point five. One point four sits between them, so between eighty-four and ninety-seven point five percent of her class scored below her. With the rule, a range is the honest **answer**.

Visual: stage change. A bell on z −3 to 3 with Ava's report card small at the top left (grey chip "z03: Ava, English z = 1.4"). On "one point four" a violet marker at 1.4. On "Below z equals one" the region left of 1 fills amber, "84%"; on "below z equals two" a second, lighter fill extends to 2, "97.5%". On "sits between them" the marker pulses between the two edges; row, 44 px: "84% < below Ava < 97.5%" (hand tag "between whole z: a range"); on "answer" framed "between 84% and 97.5%" (green).

### 7. memory aid
> Here's the summary. Turn values into z-scores first, then sketch and shade, then add up the pieces. A z-score is a position, and a probability is an **area**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three small bells from scene 4. Main line, hand font 56 px: "z first, sketch and shade, then add the pieces." On "area" the key line, 40 px: "A z-score is a position. A probability is an area." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The time for a bus trip to school is normally distributed, with a mean of forty minutes and a standard deviation of three minutes. Find the probability that a trip takes less than forty-six minutes. Shade the region on a normal curve. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The time for a bus trip to school is normally distributed with a mean of 40 minutes and a standard deviation of 3 minutes. Find the probability that a trip takes less than 46 minutes. Shade the region on a normal curve." Beside it an empty bell with no shading and no labels. Picture slot: the bus plate `ma12-bus-side-v1.png` (300 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Forty-six minus forty is six, over three, so z equals **two**. Shade everything to the left of two. That's the left half, zero point five, plus half of ninety-five percent, zero point four seven five, which makes zero point nine seven **five**. Giving zero point zero two five is the slip. Most of the bell is shaded, so the answer must be more than a **half**.

Visual: the card shrinks to the top (30 px). Row, 44 px: "z = (46 − 40)/3"; on "two" "= 2". On "Shade" the empty bell fills left of 2; piece-sum label "0.5 + 0.475"; on "five" framed "0.975 (97.5%)" (green). On "slip" a red slip "0.025" writes; on "half" it is crossed (caption "more than half shaded: the answer is more than 0.5"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A bakery bakes a thousand loaves a day. Their masses are normally distributed, with a mean of seven hundred and ten grams and a standard deviation of five grams. About how many loaves are heavier than seven hundred and fifteen grams? About how many have a mass between seven hundred and seven hundred and five grams? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A bakery bakes 1000 loaves a day. Their masses are normally distributed with a mean of 710 g and a standard deviation of 5 g. (a) About how many loaves are heavier than 715 g? (b) About how many have a mass between 700 g and 705 g?" Picture slot: the loaf rack plate (240 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Seven fifteen is z equals one. Above it is half of the thirty-two percent outside the middle band, so sixteen percent, and sixteen percent of a thousand is about a hundred and **sixty**. Seven hundred to seven oh five is z from minus two to minus one, the thirteen point five percent piece, so about a hundred and thirty-**five**. Giving three hundred and twenty is the slip. Heavier is only one **side**.

Visual: the card shrinks to the top. A small bell with gram labels 695 to 725. Row, 44 px: "715: z = 1; (100% − 68%) ÷ 2 = 16%"; the right tail fills; row "0.16 × 1000"; on "sixty" framed "about 160" (green, (a)). Row "700, 705: z = −2, −1: 13.5%"; that piece fills; on "five" framed "about 135" (green, (b)). On "slip" a red slip "(a) 320" writes with both tails tinted; on "side" it is crossed (caption "one side only: half of 32%"). Hold about 1 s.

### 12. handoff: the 723 g loaf
> So a shaded area is a probability, built from the pieces. Next, the loaves that stand out. This one just came off the line at seven hundred and twenty-three grams. Is it a **problem**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as decisions file section 2, z05 → z06): the bench scale `ma11-produce-scale-v1.png` (about 420 px wide, left) with the loaf (about 300 px) and its coded tag "label: 700 g"; on "seven hundred and twenty-three" the display reads "723 g" (blue) with a soft red flash ring; the loaf bell (teal, about 1,200 px) on the gram axis 690 to 730 with the violet μ line at 710 and violet dashed marks at 695, 700, 705, 715, 720, 725, and a blue dot at 723 on the axis; no shading; on "problem" chips "mean 710 g", "standard deviation 5 g", "is this loaf a problem?" and "Next" and "?". No z-score is shown. Hold about 2 s. Scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A probability is a shaded area. Whole curve 1; each half 0.5.
- z first, then sketch and shade: less than, greater than, between.
- P(z < 1) = 0.84; P(z > 1) = 0.16.
- Not symmetric? Split at the mean. More than half shaded: > 0.5.
- Expected number = probability × total (about).

Memory aid (framed card, right side, as in scene 7): *z first, sketch and shade, then add the pieces.* Key: *A z-score is a position. A probability is an area.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: z06 opens on it.

## Teaching checks

- **Does it explain causes?** Why an area is a probability: each of z01's columns held its loaves in its area, and the bell is those columns smoothed out, so the whole area is all the data (2). Why "about" with a count: the expected number is a long-run average; today's run gives 11 (3). Why z first: the pieces are in z-scores (3). Why halve the 5%: the two tails are equal (3). Why multiply for a count: a probability is a share of all the loaves (3). Why split at the mean: each side's pieces are known from the mean outwards (5). Why a range for 1.4: the rule only knows whole steps (6).
- **Misconceptions addressed:** forgetting to halve (3); an expected count read as exact (3); "above" against "away from" the mean (z06 in Revision 2; A2 here keeps one side only); overlapping bands added (5); a small answer under a mostly shaded sketch (4, A1); both tails for one side (A2); an exact answer forced from the rule (6).
- **Visual standard, item by item:** 1 the loaf on the scale, the loaf rack, the bus; 2 a new stage every 30 to 60 s; 3 the boundary dropping onto the z-axis and the tail filling, 400 loaves running past the gate with a live count, the pieces adding live; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the counter landing on 11 beside the predicted 10.
- **One idea at a time:** area (2), one tail and a count (3), the three shapes (4), a mixed region with a count (5), a range (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and every given visible; 10 s each; feedback about 26 s and 30 s.
- **Avoided double teaching:** z04's pieces, z02's z-scores, p02 and p06 are phrases and grey chips.
- **Syllabus coverage:** `ci8b7ebb67` (3 to 6, A1, A2); `cicf71571a` (2 to 5, A1's shading); key notes 1 to 5.
- **Out of scope by design:** "unusual" and "more extreme" (z06); normal tables and supplied cut-offs (not in Standard 2).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1 with a changed demand, original, HSC style, 2 marks suggested, not an official marking scheme).** "The time for a bus trip to school is normally distributed with a mean of 40 minutes and a standard deviation of 3 minutes. Find the probability that a trip takes less than 46 minutes. Shade the region on a normal curve."
Model answer: z = (46 − 40)/3 = 2. Shade everything left of z = 2. P = 0.5 + 0.475 = 0.975 (97.5%). Classic mistake (crossed): "0.025".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A bakery bakes 1000 loaves a day. Their masses are normally distributed with a mean of 710 g and a standard deviation of 5 g. (a) About how many loaves are heavier than 715 g? (b) About how many have a mass between 700 g and 705 g?"
Model answer: (a) 715 g is z = 1; above it is (100% − 68%) ÷ 2 = 16%; 0.16 × 1000 = about 160 loaves. (b) 700 g and 705 g are z = −2 and z = −1; that piece is 13.5%; about 135 loaves. Classic mistake (crossed): "(a) 320".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Loaves | μ 710 g; σ 5 g; 700 g: z −2; 2.5% = 0.025; 400 loaves: about 10 expected; today's run 11; another day 9 (said) | 1 to 3 |
| Whole and half | 1 (100%); 0.5 | 2 |
| Site lesson07 card 08 | 0.5 + 0.34 = 0.84; 1 − 0.84 = 0.16; 0.34 + 0.34 + 0.135 = 0.815 ("above" 16% and "away" 32% trimmed in Revision 2) | 4 |
| Site lesson03 `we-1` numbers (600 Christmas trees, Revision 2) | 600; μ 165 cm; σ 7 cm; 158: −1; 179: 2; 34% + 47.5% = 81.5%; 2.5% of 600 = 15 trees; slip 163% | 5 |
| Site lesson07 `we-1` (c) | z = 1.4; 84%; 97.5%; between 84% and 97.5% | 6 |
| A1 | mean 40 min; SD 3; 46: z 2; 0.975; slip 0.025 | 8, 9 |
| A2 | 1000; 715: z 1; 16%; about 160; 700 to 705: 13.5%; about 135; slip 320 | 10, 11 |
| Handoff (z06's) | 723 g on the display (no z shown) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact fractions in Python 3.14 (19 Nov 2026, scratchpad `z/verify.py`, `python -I`); Codex to re-check.

- (700 − 710)/5 = −2; (100 − 95)/2 = 2.5; 0.025 × 400 = 10.
- 0.5 + 0.34 = 0.84; 1 − 0.84 = 0.16; 0.34 + 0.34 + 0.135 = 0.815; 2 × 0.16 = 0.32 (A2's slip only).
- Revision 2 (`work/brief-resolve-standard-z/verify.py`): seed 2 gives 11 of 400 below 700 g; expected 0.025 × 400 = 10 (the exact tail, 2.275%, gives 9.1, not used); the trees keep every number.
- (158 − 165)/7 = −1; (179 − 165)/7 = 2; 34 + 47.5 = 81.5; 68 + 95 = 163 (the slip); 0.025 × 600 = 15.
- 50 + 34 = 84; 50 + 47.5 = 97.5.
- (46 − 40)/3 = 2; 0.5 + 0.475 = 0.975.
- (715 − 710)/5 = 1; (100 − 68)/2 = 16; 0.16 × 1000 = 160; 0.32 × 1000 = 320 (the slip); 0.135 × 1000 = 135.

## Memory aid check

- **"z first, sketch and shade, then add the pieces."** with key line **"A z-score is a position. A probability is an area."** The key line is the site's lesson07 card 08 wording; the main line is the order of the method as taught in scenes 3 to 5. Assumptions checked: the data are normal (z04's condition); boundaries sit at whole z-scores (otherwise a range, scene 6); pieces are the rule's rounded values. It helps a new case: mean 50, SD 4, P(X > 42) is z > −2: 0.475 + 0.5 = 0.975.
- **Considered, not used:** "Draw it before you calculate it" alone (true but leaves out z first).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-z/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,160 characters** (Revision 1: 5,141), 13 scene headings. Characters per scene (1 to 13): 261, 566, 646, 564, 959, 398, 154, 267, 349, 348, 393, 180, 75.

At 13.3 characters per second the speech is about 388 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the area fills and z01's columns (2), the boundary drop, the tail and the 400-loaf run to 11 (3, about 16 s), the three small bells (4), the board's split bell (5) and the range fills (6) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 505 s**, under the 570 s cap. Feedback speech: about 26 s and 30 s. The longest scene is the worked example (5, 959 characters, about 72 s): one board, the site's two-part question.

Reserve trims if the voiced take runs long: scene 6 whole (about 30 s; the pack's first trim; key notes unchanged). Scene 4's last three sentences were taken in Revision 2 (review finding 5).

## Scene list and build ids

Lesson key `m-s12z05` (route math-s12-z05). Explainer folder `src/explainer/lessons/math-s12-z05`; build inputs in `docs/production/claude-pm/lessons/math-s12-z05/` (at voicing).

In order (13 scene headings): hook-under-label, probability-is-area, z-first-then-shade, three-shapes, worked-christmas-trees, range-for-1-4, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-723-loaf, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 20 s | 1 | z04's frame; under the label |
| 20 to 60 s | 2 | The whole area; half; position and area |
| 60 to 120 s | 3 | z first, the tail, 400 loaves |
| 120 to 170 s | 4 | Three small bells |
| 170 to 250 s | 5 | g01 board: Christmas trees |
| 250 to 280 s | 6 | Ava's range |
| 280 to 295 s | 7 | Framed memory card |
| 295 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 420 s | 12 | The 723 g loaf |
| 420 to 465 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: z04's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue (half-change to the rack at "four hundred loaves"); 3 to 4 stage change; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-z05-learning-review.md`, `science_check` = `checks/m-s12-z05-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, opened at full size): `ma12-bus-side-v1.png` (a cream and teal city bus in side view, 1881 × 836, true alpha; reads at 300 px). `ma11-produce-scale-v1.png` (bench scale, blank display). The loaf `ms12-bread-loaf-v1.png` is briefed in p08 (read as a brief); the rack is briefed here. Not used (Advanced anchor, ruling 7): s12's filling machine and bottles (its conveyor motion only is the pattern for the loaf gate).

Need (painted): `ms12-bread-rack-v1.png` (first used here, scene 3 and attempt 2; also z06 scene 6). Reused: the bench scale, the loaf (p08's brief), the bus.

Coded: the bells, z-axes, shading, piece-sum labels, the gate, the tray, the 400 loaf marks and counter, the three small bells, the board and its bell, the report card, the empty bell for A1, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `NormalCurve` (`shade`, `marks`), `ZSlider`, `TailLadder` (optional for the three shapes), `LiveReadoutBoard`, `FillDial`'s flagging motion as the pattern, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row z05):
1. **Piece-sum label** (small): a label that assembles a sum or difference of the rule's pieces on a shaded region ("0.5 + 0.34 = 0.84", "1 − 0.84 = 0.16", "(100% − 95%) ÷ 2 = 2.5%"), using the rule readout mode from z04. Check: on N(0, 1) shaded below 1 the label reads "0.5 + 0.34 = 0.84"; shaded from −1 to 2 it reads "0.34 + 0.34 + 0.135 = 0.815".
2. **Gate and tray counter** (small, built from `FillDial`'s flag-and-count motion): seeded marks pass a labelled gate; marks below the line drop into a tray; a live count. Check: 400 marks with the seed set so exactly 11 drop (Revision 2; for example seed 2 of Python's `random.Random(seed).gauss(710, 5)` gives 11 below 700 g, `work/brief-resolve-standard-z/verify.py`); counter "11" beside a dashed "expected: about 10".

## Codex asset brief (Maths S12 Z05, a bakery bread rack)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-z05.md`, route entry math-s12-z05. Paint after the learning review and maths check pass and root gives the go-ahead, and before the z05 build (z04's final frame does not show it, so it is first needed here). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-bread-loaf-v1.png` (p08's brief) and `ma11-produce-scale-v1.png` in palette and line weight; no text, labels, numbers, logos, people, hands or faces; never stretch.

1. `ms12-bread-rack-v1.png` (about 1400 × 1000 px, true alpha): a stainless bakery cooling rack on castors in front elevation, four shelves, each holding five or six loaves drawn like `ms12-bread-loaf-v1.png` (about 22 in all, slightly varied in crust colour and dome, unbagged, no labels); a plain floor shadow. Shown at 700 px wide beside a coded gate (z05 scene 3, z06 scene 6) and at 240 px in a question card's picture slot (z05 attempt 2).

Report inspection at 700 px and 240 px on the paper background (`#f6f1e7`). Also check `ma12-bus-side-v1.png` at 300 px for fringe pixels; if they show, clean the alpha (no repaint). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-z05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's lesson07 table (0.84, 0.16, 0.815), lesson03 `we-1` (81.5%, 15) and lesson07 `we-1` (c) (84% to 97.5%) keep their numbers; that no table value or supplied cut-off is used (rule values only); that counts are said with "about"; that the worked example is set as 600 Christmas trees with the site's numbers (Revision 2; no people), and that the 400-loaf run lands on 11 beside an expected 10.
4. Confirm both attempts carry every demand and given, and neither card nor picture shows an answer (A1's bell is empty).
5. Confirm scene 1 opens on z04's final frame exactly, and scene 12's frame matches z06's opening (section 2 of the decisions file).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Normal Probabilities by Shading | Year 12 Maths Standard

(Title length: 56 characters by script; course suffix unified to "| Year 12 Maths Standard", 23 Nov 2026, coherence audit S5.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html

Every loaf is labelled 700 g, but the masses have a mean of 710 g and a standard deviation of 5 g. What's the chance a loaf weighs less than its label? Learn why a probability is a shaded area under the normal curve, turn each value into a z-score first, then sketch, shade and build the answer from the empirical rule's pieces. Work less than, greater than and between, split a region at the mean, turn a probability into an expected count, and see why a z-score between whole numbers gives a range. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, The normal distribution. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate probabilities using z-scores and the empirical rule"
"Represent probabilities by shading areas under the normal distribution curve"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

Builds on: The Empirical Rule: 68, 95, 99.7. Next: Unusual Results with z-Scores.

#Year12Maths #MathsStandard #NormalDistribution #HSCScience

## Open decisions

- **1. No split (root, ruling 70). Closed (ruling 75 accepts it).** The design fits as one video, so z05a and z05b are not used.
- **2. Attempt 1's demand (root). Closed (ruling 75; summary, root decision 4).** Changed from the pack's 37 to 46 minutes (81.5%, the worked example's shape) to "less than 46 minutes" (0.975), which tests the sketch check.
- **3. The heights example (root). Closed in Revision 2 (ruling 75, root's decision 1): replaced by 600 Christmas trees at a tree farm, every number kept.** Revision 1 text, for the record: The site's lesson03 `we-1` is kept as numbers on a coded bell with no figures; if root prefers a non-people context, the same numbers work as 600 parcels' masses (cm becomes a unit change only, so a new example would be needed; the site's rice bags, `we-1` (a), cover only the one-tail part).

## Review notes

- Revision 2 (19 Nov 2026): learning review resolved (blocker resolved; 4 of 4 other findings applied; see "Revision 2"). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from z04; check that "a probability is an area" is shown before it is used, that z first is a separate visible step, that the 400-loaf count reads as expected rather than exact, that splitting at the mean is reasoned from the pieces, that the range for 1.4 is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
