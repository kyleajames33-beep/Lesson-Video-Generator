# Maths S12 a11a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a11a.md`, "What do the intercepts and vertex of a practical quadratic graph mean, and how do we read answers from it?" Source SHA256 `36f7165b70d4ddc64d07d14b6ca6edfb15e689da3974df5e270238ff28b22e04`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a10's intercepts and midpoint method; a04's break-even) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

A good design. Giving the rocket's four familiar numbers their meanings first means every new idea lands on a graph the student already owns. "x says when, y says how much" is said, split on screen with arrows, and then crossed ("greatest height: 2 m") before attempt 2 tests it again. The sliding level line (no crossing at 25, a touch at 20, two crossings at 15) is a genuine simulation that shows why "above a level" is an interval. The fuel-use graph stops "vertex = greatest" hardening into a rule, and the profit board's live unit readout ("n = 5 → 500 items", "P = 18 → $18,000") makes the units concrete. Recalculated: −5t² + 20t = 15 at t = 1, 3, touches 20 at t = 2, misses 25; 0.001(s − 80)² + 6 has minimum 6 at 80, 7.6 at 40 and 120, no real zeros; −2n² + 20n − 32 = −2(n − 2)(n − 8), −32 at 0, 18 at 5; rugby −5t² + 15t zero at 0 and 3, 11.25 at 1.5, equals 10 at 1 and 2; musical −20p² + 1200p zero at 0 and 60, 18,000 at 30. All correct.

## Findings

1. **Should fix, scene 3 (the interval is read but not explained).** "The line at fifteen metres crosses at one second, and at three seconds. So the rocket is above fifteen metres from one second to three seconds." The "so" skips the reason, which is the design's own cause chain (5): between the crossings the curve is over the line. Fix. Insert before "So the rocket": "Between those two times, the curve is above the line." Visual: as it is said, the part of the curve above the level line thickens violet, then the interval shades. About 55 characters. Students should understand why the answer is every time between the crossings, so they can handle "below a level" without a new rule.

2. **Optional, scene 5 (the longest scene in the set).** 917 characters (about 69 s) with seven working rows. Dim each completed row to 32 px as the next writes (as scene 3 of a10 specifies), so only the current step is large. The reserve-trim note says "scene 4's 'Read the units first' sentence", but that sentence is in scene 5; correct the label.

3. **Optional, scene 2 ("Its x-value says when").** On a t-h graph the student has just been told the axes are t and h. "Its first number says when, and its second number says how much" matches the graph in front of them; the on-screen split already uses "when: 2 s" and "how high: 20 m".

4. **Optional, feedback 2 ("At sixty dollars the model says nobody buys a ticket").** The link from zero takings at a non-zero price to zero tickets sold is implied. If the take has room, "takings are zero, but the price isn't, so no tickets are sold" makes the reasoning explicit. Feedback 2 is already about 28 s, so only add it with a matching trim.

Open decision 2 (the lemonade stall badge): keep. It is captioned "a small business" and is not tied to the numbers.

Root ruling 24: the description still carries two codenames. Drop them.

## Joins

a10 to a11a matches; a11a fades the grey "after 4 s?" continuation on its first sentence and keeps it for its own ending. a11a to a11b: the widened graph (t −1.5 to 5.5, h −30 to 25), the grey dashed continuation, (5, −25) ringed red with "t = 5: h = −25 m?", "underground?" and "Next: where does the model stop working?" are a11b's stated opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. The rugby graph has no labelled crossings, top or level line; the musical graph has its vertex unlabelled; nothing is answer-bearing. A1 has three short parts, as the design flags, all answerable from scenes 2 and 3. Each feedback gives the answers, the reason and one crossed classic mistake ("above 10 m only at t = 1"; "greatest takings: $30"). Both feedbacks about 28 s.

## Length

5,329 characters (recounted by script), about 490 s with holds, about 395 s of speech before the notes. Finding 1 adds about 4 s. Under 570 s without rushing.

No speech, source edits or commits were made.
