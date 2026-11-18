# Maths S12 b05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b05.md`, "What does Pearson's correlation coefficient measure?" Source SHA256 `c447784cebb5bfb9731bb9c350735023312ee051c5e0307731c4e0857492d0a7`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (b02 form, direction and strength in words; b03 correlation is not cause; Year 11 d13 the calculator's statistics mode) as a Mathematics Standard 2 student. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 2 optional).

This design is good as written. r is defined in words before its symbol ("one number for how closely the points follow a straight line"), "coefficient" and "size" get plain meanings, and the morph (points pulled onto a rising line, a falling line, a scatter) drives the dial so the range and the sign are seen, not asserted. One guide is used throughout and always called a guide (ruling 77). The calculator scene names the three things to find without key sequences, which suits every model. Two quick checks catch the common errors, and the limits are each shown: the coffee cart's curve with a high r, the U with r = 0, and one dragged point swinging the needle from 0.99 to 0.58. Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): kiosk 0.9948565250; work hours −0.8995554458; explorer 0.9856640227 and, with (2, 95), 0.5815669285; coffee cart 0.9177004236; U shape exactly 0 (and y = (x − 4)² + 2); A1 −0.6864364; results screen A −63.0862069 and B 5.603448276. All correct.

## Findings

1. **Optional, scene 9 (why one point moves r so much).** The scene shows it but never says why. Add after "only moderate": "r is worked out from every point, so one point far from the line pulls it a long way." About 5 s against a 52 s margin.

2. **Optional, scene 8 ("which looks strong").** The coffee cart's 0.92 doesn't only look strong: by the video's own guide it is strong. Say "Its r is zero point nine two, which the guide calls strong, but the pattern is clearly a curve." That sharpens the lesson that the guide applies only after the plot shows a straight-line form.

## Joins

Opens on b04b's final frame (the empty dial). Final frame matches b06's opening: the results screen with A and B dim and r lit, the dial at 0.99.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown. A1 uses new invented data so its r (−0.69) differs from the worked example, and its slip (truncating to −0.68) is a real exam error; A2 reuses "fall steeply" to retest b02's trap and asks why r = 0.05 does not mean unrelated. Neither picture answers. Feedbacks about 28 s and 25 s, each with one crossed slip.

## Key notes and length

Five notes, including the calculator steps and the limits. About 518 s with 52 s margin.

No speech, design edits, builds or commits were made.
