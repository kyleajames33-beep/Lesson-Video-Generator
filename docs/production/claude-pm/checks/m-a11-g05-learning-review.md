# Maths A11 g05 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g05.md`, "How do we track domain, range, intercepts and asymptotes through transformations?" Source SHA256 `8f3a1c10afb8c384d899f365cc29d936afd7424dde206b3e5d6b91e7e1410335`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (g04, w21, e01, e08, w29, w09) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional). Not rushed; no split.

The caps anchor answers its own question with the transformation: 90/n is never zero, so the average never reaches $12, and the parent's y = 0 visibly rides up to A = 12. Scene 2 gives real reasons for the asymptote rules ("sliding a vertical line up or down leaves it exactly where it was") and for the domain ("One over x can't use zero, so this graph can't use two"). Scene 3's "One over x never touches either axis, but this graph crosses both, so its crossings can't have been carried from anywhere" is a clean argument for solving. The floating intercept at (3, 4) applies S11-G05's correction where students can see it, and the log's domain reason is heard before its slip.

**Pace and the split (open decision 1).** Speech before the notes is about 410 s and the whole video about 503 s, so it sits well under the 570 s cap even with holds and notes. The three worked families each get one stage of about 58 to 64 s, and each ends with its own slip. That is not rushed, so keep one video and do not use the g05a/g05b fallback. The densest point is scene 2 (852 characters, about 64 s, seven features); optional finding 3 eases it without a split. **A1 without a worked exponential (open decision 2):** fair. g01 scene 5 carried 2ˣ − 3's asymptote and range, scene 1 here carries an asymptote up, and solving 2^(x + 1) = 2² uses earlier index work. Keep A1.

Recalculated: 90/n + 12 at 1, 10, 30, 90, 100 is 102, 21, 15, 13, 12.9; 3/(x − 2) + 1 is −½ at 0, zero at −1, 4 at 3, −2 at 1; −2(x − 3)² + 4 has zeros 3 ± √2 (1.586, 4.414) and value −14 at 0; log₂(x − 1) + 1 is zero at 3/2, 1 at 2, 2 at 3, 3 at 5; 2^(x + 1) − 4 is −2 at 0, zero at 1, tends to −4; 4/(x + 1) − 2 is 2 at 0, zero at 1; the memory aid case −(x + 2)² + 9 has zeros 1 and −5. All correct.

## Findings

1. **Should fix, scenes 3 and 6 ("carry the frame" before "frame" means anything).** The first spoken "frame" is the last sentence of scene 3 ("So carry the frame, then solve for the crossings."), and it is only explained in scene 6. A student hearing the method's name will ask "what's the frame?" at the moment it is meant to stick. Fix. Scene 2, replace "First, carry the asymptotes as whole lines." with "First, carry the frame: the asymptotes, the key points, the domain and the range. Start with the asymptotes, as whole lines." Visual: on "the frame", the four ledger row labels pulse in turn. Students should be able to list what "the frame" contains before the memory aid names it.

2. **Should fix, scene 6 and key note 4 ("Intercepts don't ride along"; "Never carry them").** Both are stated as facts, but g03 scene 3 taught that a vertical dilation keeps x-intercepts ("so x-intercepts never move"), and g01's horizontal slides carry them. A student who watched g03 hears a contradiction and may stop trusting either rule. The design's own memory aid check says "solve" is always safe even when carrying happens to work, which is the right message. Fix. Scene 6: "Intercepts can't be trusted to ride along, because a slide can lift them off the axis. So find them by putting x or y equal to zero, and solving." Key note 4: "Intercepts: put x = 0 or y = 0 and solve, even if a move seems to keep them." Students should understand that solving is the safe method, not that carried intercepts are always wrong.

3. **Optional, scene 2 (density).** Add a 1.5 s settle after "minus one, minus one goes to one, minus two", before "The domain follows the sideways moves", so the ledger's key-point row lands before the domain bar draws. Speech is unchanged.

4. **Optional, scene 4 (the range step).** "The flip turns the range upside down, so it's y less than or equal to four" skips a step. "y greater than or equal to zero flips to y less than or equal to zero, then rises four, so it's y less than or equal to four." About 4 s. It also shows that "range follows the moves up and down" includes stretches and flips, which key note 2 already says.

## Joins

g04 to g05 matches (caps, order card, cost curve for n ≥ 1 with the 1/x ghost, "1/x: stretch × 90, then up 12", A = 12 with "?", the chips); g05 widens the window on its first sentence. g05 to g06: the town grid over the rooftops texture, the barrow badge and store pin at (3, −2), "free delivery within 5 km", the dashed x² + y² = 25 with its w24 chip, the "?" circle and the chips are g06's opening frame. Housekeeping: g05's Decisions handoff says the grid is "x and y −6 to 9", while scene 11 and g06 say x −6 to 9, y −8 to 6. The scene 11 window is the right one (the circle about (3, −2) reaches y = −7); correct the Decisions line.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. Both pictures are empty axes; nothing is answer-bearing. A1's narration says "both intercepts" and its card says "the intercepts"; align them (either is fine). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 27 s.

## Year 12 handoff check

The pack's delivery note asks for "vertical asymptote x = c moves horizontally only; horizontal asymptote y = d moves vertically only; domain follows horizontal moves, range follows vertical moves". Scene 2 says this in those terms and key notes 1 and 2 state it. t01 extends the tracking to tan and itself teaches the asymptotes moving with a squash (its scene 7 tan dial), so the absence of a horizontal-dilation asymptote example here is not a gap. Delivered.

## Site link

`graph-transformations/lesson05.sa.html` (with `exponential-and-logarithmic-functions/lesson06.sa.html` for the log example) is the design's site source; the YouTube link is lesson05. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
