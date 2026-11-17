# Maths S12 a02b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a02b.md`, "How does elimination solve simultaneous equations, and when do we add or subtract?" Source SHA256 `57ddd3f6700c718e6dec52bf795e3aba805a2d30a9779a2a477603ea865322c5`.

Written design reviewed by tracing it from its stated entry knowledge (a02a: substitution, swapping back, checking both; a01: the pair true in both; Year 11 Standard f02) as a Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The order works: subtract (matching signs), then add (opposite signs), then multiply first, and the rule "Same signs, subtract. Opposite signs, add." arrives only after both cases, with its reason ("whatever makes the matching terms add up to zero"). Scene 2 says why whole equations can be subtracted at all ("equal amounts taken from equal amounts leave equal amounts"). The scoreboard tally landing on 52 is a satisfying check that anyone who watches cricket can verify, and scene 5's unsolved chooser teaches looking before solving. Recalculated with SymPy 1.14: `we-3` x = 10/3, y = 3; 2x + y = 11 with 3x − y = 4 at (3, 5); f = 7, s = 4 with 28 + 24 = 52; A1 x = 7/2, y = 4; A2 (5, 4); the chooser pairs solve to (4/3, 17/3), (2, 5) and (16/5, 4) (not solved on screen). All design values correct.

## Findings

1. **Should fix, scene 4 and feedback 2 (why multiply by four, or by two).** "But we can multiply the whole first equation by four" gives no reason for four, so the student learns a move, not a method, and will not know what to multiply by in A2. Fix. Scene 4: "No terms match yet. But the second equation has four f, so multiply the whole first equation by four, every term, and it's still true." Feedback 2: "Multiply the first equation by two, to match the two x, every term, so two x plus two y equals eighteen." Visual: on "has four f" the "4f" in (2) rings amber before the "× 4" chip moves. Students should be able to pick the multiplier themselves: the number in front of the matching letter in the other equation.

2. **Should fix, scene 2 (taking away a negative is stated, not explained).** "Careful there. Taking away a minus is the same as adding." This is the video's classic slip (scene 2 crossed and A1 crossed), and many Standard students only half-remember the rule. A money reason fits the course. Fix, replacing "Careful there. Taking away a minus is the same as adding.": "Careful there. Taking away a minus is like cancelling a debt. If someone takes away a ten dollar debt, you're ten dollars better off, so taking away minus y adds y." Visual: a grey side chip "take away a $10 debt: +$10" beside the violet "2y − (−y)". Students should be able to rebuild the rule in A1 rather than recall it.

3. **Optional, scene 5 (chooser card 1 has a fractional answer).** y = 2x + 3 and y = 7 − x solve to (4/3, 17/3). It is not solved on screen, but a student who pauses to try it meets thirds in a "which method?" scene. y = 2x + 3 and y = 9 − x gives (2, 7) and shows the same choice.

## Joins

a02a to a02b matches exactly (the stacked 3x pair, "both 3x", grey "− ?", no result row), and scene 2 solves it as the site's `we-3`. a02b to a03 matches: the theatre tickets plate, the full words card, the empty "equations: ?" box and "no equations given" are a03's opening frame, and a03's first line reads the same problem.

## Practice and feedback

Both cards keep the full question on screen through the 10 s countdown with no operation chosen, so nothing is answer-bearing. A1 tests the sign-change slip, A2 the multiply-every-term slip. Feedback is brief with one crossed slip each (about 25 s and 29 s). The cricket anchor (11 boundaries, 52 runs) is real and fair.

## Key notes and length

The five notes are the method in order; note 3 keeps the worked sign case. About 466 s with holds; the fixes add about 10 s. No second example is needed.

No speech, design edits, builds or commits were made.
