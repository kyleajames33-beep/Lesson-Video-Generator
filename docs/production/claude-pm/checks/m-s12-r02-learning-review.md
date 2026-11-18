# Maths S12 r02 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r02.md`, "How do we share a quantity in a given ratio?" Source SHA256 `1803c0fbabbba5bc5fea4395c1cd37f8360c6b913c124e80c23a1087424570c1`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r01: a : b has a + b parts; simplest form) as a Mathematics Standard student starting Year 12, for both courses (the video is shared and ends on a two-route frame). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

This is a good design. Scene 2 gives the reason for the ratio before any method ("every ten dollars put in should earn the same slice of the takings"), scene 3 says why one part is the total ÷ 8 ("the whole four hundred and eighty dollars is all eight parts"), and the share bar that rebuilds the $480 with no gap is a check a student can see. The crossed ghost of five $96 tiles leaving a three-tile hole is exactly the right picture for "the total is eight parts, not five". "Total or part?" (the sand already in the barrow) is distinct at speed because the bracket covers only three tiles and the empty cement tile back-fills. The 2 L jug callback shows the steps are not about money. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 50 : 30 = 5 : 3; 480 ÷ 8 = 60; $300, $180; 480 ÷ 5 = 96; 2000 ÷ 5 = 400, 1600; 12 ÷ 3 = 4, 12 ÷ 4 = 3; 450 ÷ 9 = 50; 300, 100, 50 g; 900 g; A1 6 L, 18, 30, 12 L, 3 L, 30 L; A2 $195, $390, $585, $585, $520, $130, and 1560 ÷ 5 = 312. All correct.

## Findings

1. **Should fix, key note 3 (wording error in learner copy).** "Each share = its terms × one part" should say "its term" (or, plainer, "its number of parts"). A student copying the note may read "terms" as "all the terms" and multiply by the sum. Fix: "Each share = its number of parts × one part; check they add to the total."

2. **Optional, scenes 1 and 2 (the stall's numbers).** $80 of drinks taking $480 is a sixfold return, which a Standard student who has worked a canteen will doubt, and it comes from the site's lottery story (MS-33), not a drinks stall. Stakes of $100 and $60 keep every share: 100 : 60 = 5 : 3 (HCF 20), $480 in 5 : 3 is still $300 and $180, and takings of three times the stock cost are realistic (cans bought near $1, sold at $3). Scene 2 becomes "A hundred to sixty, divided by twenty, is five to three. A hundred dollars is five lots of twenty, and sixty dollars is three lots of twenty"; the coin row becomes "$20" coins; r01 scene 12's card and sentence change to match. One grey chip, unspoken, can also answer the likely "shouldn't they get their money back first?": "same answer: each gets its stake back, then shares the profit 5 : 3". Checked in `verify.py`.

3. **Optional, attempt 2 ("Ava's brother").** A fourth person who is not staying is an odd extra, and the narration says "just split it three ways" while the card says "split it equally three ways". Use "Ben says they should split it equally three ways" in both, so the card and the voice match exactly.

4. **Optional, scene 5 ("A concrete mix ... cement to sand, one to three").** Cement and sand alone is mortar; path concrete also needs gravel, and a student who has helped on a job may notice. Say "A mortar mix for laying path pavers is cement to sand, one to three." No number changes.

## Joins

r01 to r02: scene 1 opens on r01's final frame exactly. r02 to r03 and r04 (two routes, ruling 50 confirms the pattern): the left panel (the lake and net circle) and the right panel (the coded bushwalk map with "Scale 1 : 25 000") are each self-explanatory, the narration names both courses, and r04 assumes nothing from r03. The Standard 1 viewer meets r04's opening on the same map they saw here.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown and show nothing answer-bearing. A1 (b) is a genuine "share given" transfer, and A2 (b) adds a fairness comparison. Each feedback gives the answer, the reason, short working and one crossed slip (about 25 s and 30 s). A carnival stall, a path, baking, a nursery and a holiday house are fair anchors; no gambling, no prices that need a source, no people drawn.

## Key notes and length

Five useful notes; note 4 holds the part-given case. About 465 s with holds, 105 s under the cap.

No speech, design edits, builds or commits were made.
