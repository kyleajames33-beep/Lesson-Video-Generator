# Maths S12 r01 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r01.md`, "How do ratios relate to fractions, and how do we simplify them?" Source SHA256 `c3d63f0b390abdf0dbe7ac5763ba4b82589ab6749bfc70738fb76d0ee7872a12`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 a01 unit conversions; fractions, factors and times tables) as a Mathematics Standard student starting Year 12, arriving either from i23 (Standard 2) or i18 (Standard 1). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

This is a good opening video for the strand. "Same unit first" is given a reason (a ratio compares like with like), "every amount grows or shrinks together" explains why dividing every term keeps the ratio, and the visual surprise (the 1000 mL block breaking into four tiles the size of the cordial tile) shows 1 : 4 before it is written. The fraction link is caused, not asserted: the terms count equal parts, so the parts add to the whole, and the cordial is one of five. The phone screen's step-down ladder (÷ 10, ÷ 2, ÷ 2, ÷ 3) is a real help for a Standard student who cannot spot an HCF of 120, and "It's why shops call it a sixteen to nine screen" earns attention. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): gcd(250, 1000) = 250, 1 : 4, 250/1250 = 1/5; gcd(1920, 1080) = 120 and every rung (192 : 108, 96 : 54, 48 : 27, 16 : 9); gcd(18, 24) = 6, 18/42 = 3/7; gcd(300, 450) = 150, 2/5; gcd(84, 140) = 28, 21 : 35, 3 : 5, 84/140 = 3/5, 84/224 = 3/8. All correct.

## Findings

1. **Should fix, scene 4 (the only correct "part of the other" is always crossed, then A2 (b) asks for one).** Scene 4 and the worked example both call a/b "the slip" (one quarter, three quarters), and key note 5 gives only a/(a + b). Then attempt 2 (b) asks "What fraction of the longer piece is the shorter piece?", where 84/140 = 3/5 is right and the trained habit (add the parts) gives the wrong 3/8. A student who learned "a over b is the slip" will either write 3/8 or feel tricked; feedback 2 is the first place the video says the other fraction can be correct. Fix: in scene 4, after "One quarter compares the cordial with the water, not with the whole jug", add one positive sentence: "One quarter does answer a different question. The cordial is one quarter as much as the water." On screen, the grey "1/4" arrow (before it is crossed for this question) gets a grey tag "cordial ÷ water: a different question". Students should understand that the wording decides which fraction is asked for, so A2 (b) tests a contrast they have been shown. About 5 s.

2. **Optional, scene 1 ("topped up with one litre of water").** "Topped up" can be heard as "filled up to one litre", which would make the jug 1 L in total and the ratio 1 : 3. Say "It has two hundred and fifty millilitres of cordial, and then one litre of water is added." The card ("cordial: 250 mL", "water: 1 L") already supports the right reading.

3. **Optional, scene 3 (why the HCF is 250).** "Here it's two hundred and fifty" is stated. Add: "because two hundred and fifty goes into one thousand exactly, four times." About 4 s. A Standard student then sees how to test a candidate factor, which scene 5 relies on.

4. **Optional, open decision 2 (column beside the jug).** Add the short dotted connector from the jug's liquid to the five-tile column now rather than waiting for the grade-A sheet; it costs no narration and makes "picture the jug in equal parts" point at the jug.

## Joins

i23 to r01: scene 1 opens on i23's final frame exactly (thumbnails, "Money: done", the jug with its coded cordial layer, no numbers), which i23 scene 11 describes. i18 to r01 (Standard 1): i18's right panel is the same jug and question chip, and i18's narration says "you've finished the money topic", so the "Money: done" thumbnails read correctly for both courses; they fade on the first sentence. r01 to r02: scene 12 matches r02's stated opening frame (the esky, "put in: $50 and $30", "takings: $480") and works out no share. The r02 review suggests stakes of $100 and $60 (optional); if root takes that, this scene's card and sentence change with it.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown and show nothing answer-bearing. Each feedback gives the answer, the reason (same unit; five parts; the wording decides), short working and one crossed slip (about 25 s and 27 s). Cooking, a phone screen, local footy, a smoothie and timber are fair everyday anchors; no prices are stated, no gambling (the site's lottery is not used), no people drawn.

## Key notes and length

The five notes are short and each is used in the video; note 5 is the key line. About 481 s with holds, 89 s under the cap, so finding 1 fits easily.

No speech, design edits, builds or commits were made.
