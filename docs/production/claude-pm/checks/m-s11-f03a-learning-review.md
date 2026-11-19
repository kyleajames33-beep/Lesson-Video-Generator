# Maths S11 f03a Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f03a.md`, "How do we change the subject of a formula, including when the letter is underneath?" Source SHA256 `05c749ad946d5e543be67608921861b2ff180adad6d7997aba790f5de2a55472`.

Written design reviewed by tracing it from its stated entry knowledge (f01's subject and substitution; f02's undoing on both sides, outside step first; Stage 5 fractions as division) as a Year 11 Mathematics Standard student. Checked against rulings 4 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f03.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The opening pays off f02's question at once: one rearrangement, then four dockets fill in about 4 s, which is the reason to rearrange made visible. The reversed function machine shows "reverse order", the bracket in k = (C − 8) ÷ 1.5 is given its reason and its slip (20.67 km, not 12), and the letter underneath is brought up before it is divided. Scene 6 (rearrange first or substitute first) answers the question a student will ask. Recalculated with SymPy 1.14 (17 checks for f03a): (C − 8)/1.5 at 41, 26, 53, 62 gives 22, 12, 30, 36; slip 26 − 8/1.5 ≈ 20.67; s = 5, t = 4, d = 20; 180/3 = 60; 31.4/(2 × 3.14) = 5 (4.997 with true π); 135/45 = 3, slip 1/3 h = 20 min; 84/7 = 12 both ways; A1 9 m, slip 22 and its check 52; A2 80 km/h, slip 0.0125. All correct.

## Findings

1. **Should fix, scene 4 (ruling 95: drop the π circle check).** Root ruled the π ≈ 3.14 check out for Standard 1 load; the design still has it. Fix: end scene 4's narration at "...so r still isn't on its own." (cut "Check it with numbers. A circle thirty-one point four centimetres around, with pi as three point one four, has a radius of thirty-one point four over six point two eight, which is five **centimetres**."). Visual: remove the "π ≈ 3.14" chip, the "r = 31.4 ÷ (2 × 3.14)" rows, the framed "5 cm" and the "5 cm" radius label; the scene ends on the grey "C ÷ 2 = πr / r not alone yet" row and "r = C/(2π)". Also remove the circle rows from "Numbers used" and "Numbers to verify", author note (c), Codex error-check item 3's π clause, open decision 1 and reserve trim 1. About 12 s shorter (about 443 s). Students keep the point of the scene (divide by the whole multiplier) without a second approximation to manage.

2. **Should fix, scene 3 (a codename spoken aloud).** "Check with f01's trip." will be read by the voice as "f oh one's trip", which means nothing to a student. Replacement: "Check with the trip from the first video." The grey chip "f01: 12 km" may stay (on-screen codename chips are the accepted pattern in the Year 12 designs). Students should hear a plain callback.

3. **Optional, open decision 2 ("the trickiest kind").** Keep. It flags the step that needs attention, and the next sentence ("Bring it up first") gives the move straight away, so it is unlikely to discourage.

4. **Optional, scene 6 (a missing unit).** "the height is seven" reads better as "the height is seven centimetres", matching the rectangle's label "h = 7 cm". About 1 s.

## Joins

f02 to f03a: scene 1 opens on f02's final frame exactly (van about 760 px, the formula card, the four dockets, f02's chips). f03a to f03b: scene 12's frame (the picture frame plate about 700 px, "C = 0.05s² + 12" in its colours with both labels, "Quote: $32", "s = ?", the ringed "²", the three chips, no working) matches f03b's Boundary.

## Practice and feedback

Both cards keep the full question (both parts) on screen through the countdown; the picture slots (a rectangle labelled l and w, no numbers; the road sign "240 km") give nothing away. A1 reuses f01's deck numbers in reverse (9 m), a good link. Feedback 1 and 2 are about 23 s each, with the answer, the move and one crossed slip each.

## Key notes and length

Key note 3 ("r = C ÷ (2π)") stays valid after finding 1. Narration 4,904 characters by this reviewer's count, about 455 s with holds now and about 443 s after finding 1, well under the cap; under 5,000 characters is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
