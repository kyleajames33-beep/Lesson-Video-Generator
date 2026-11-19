# Maths S11 l02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-l02.md`, "How do we write y = mx + c and draw the line, by hand and with technology?" Source SHA256 `bef3fde87c580fd47e179a0ef65c36eeb476ac689efd7a22740227cba2cf8854`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (l01: gradient and y-intercept read from a graph or an equation; f01: substituting a value) as a Year 11 Mathematics Standard student with a Stage 5 background. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good video. It runs l01 in reverse, which the opening says out loud, and gives the student a reason at each step: equal steps in and equal changes out make a straight line (with the skipped-input trap shown, not just warned about), the x = 0 row is where the line meets the y-axis, "take the start away first" explains the worked example's slip with a dashed y = 22x line that visibly misses (0, 30), and three points rather than two "so a mistake shows up". The app scene earns its place: the off-line point (4, 20) turning red beside the green (4, 18) shows that "on the line" and "makes the equation true" are the same thing. Recalculated with SymPy 1.14 (`work/brief-review-s11-l/verify.py`): 3d + 6 at d = 0 to 5 gives 6, 9, 12, 15, 18, 21; 18 − 12 = 6; the line through (0, 30) and (3, 66) has m = 12, c = 30 and passes through (2, 54); 66 ÷ 3 = 22; 3(4) + 6 = 18 ≠ 20; −x + 4 at 0, 1, 2 gives 4, 3, 2; −2x + 5 at 0 to 3 gives 5, 3, 1, −1; the line through (0, −1) and (3, 5) has m = 2, c = −1. All correct.

## Findings

1. **Should fix, scene 4, step four (the check is circular).** "At x equals two, twelve times two plus thirty is fifty-four, and the point two, fifty-four is on the line." The student computes 54 from the equation and is then told the point is on the line, so nothing has been checked; the visual lights (2, 54) green whatever was calculated. A student will ask "how do I know it's on the line?" The plot's grid is every 10, so 54 has to be read between 50 and 60. Fix. Narration: "Step four, check. On the graph, at x equals two, the line is at about fifty-four. The equation gives twelve times two plus thirty, which is fifty-four, so they agree." Visual: on "On the graph" a dashed amber reading path up from x = 2 to the line and across to the y-axis, tag "about 54"; then the row "12(2) + 30 = 54 ✓". Students should understand that a check compares the equation with the graph, which is what makes scene 6's app check meaningful. About 3 s.

2. **Optional, scene 5 (four coordinate pairs by ear).** "zero, six, then one, nine, two, twelve and three, fifteen" is heard as a list of numbers; "one, nine, two, twelve" can sound like four separate values. The rows flying to the grid carry it, so either drop the list ("Each row becomes a point.") or say "then" between every pair: "zero, six, then one, nine, then two, twelve, then three, fifteen".

3. **Optional, open decisions 1 and 2.** Keep the site's $6 and $3 a km with the "example fare" tag (ruling 92 accepts it). Keep scene 6 as written: at about 40 s with one point on and one off the line it is not thin, and a second typed line would compete with A1.

## Joins

l01 to l02: scene 1 opens on l01's final frame exactly and its first line ("Here's the taxi from the end of last video") picks it up; the meter card then makes the fare concrete. l02 to l03: scene 12's frame (the e-bike, "$12 before you ride a single metre", "then $5 per hour", "example price", the empty card "C = ▢ + ▢ h") is l03's opening frame and does not fill either slot.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1 asks for three things (equation, table, line), more than 10 s allows, but "Pause here to answer." covers that; its picture is an empty table and empty axes. A2's picture shows the line with unlabelled points, matching the card text. Each feedback gives the answer, the reason, short working and one crossed slip ("y = 5x − 2", "m = 4 ÷ 3"), about 21 s each. A2's "five minus minus one is five plus one" is the right repair for the double negative.

## Key notes and length

Five useful notes; the memory card ("Plot c, step m, rule the line.") builds directly on l01's. About 474 s with holds, 96 s under the 570 s cap; finding 1 adds about 3 s.

No speech, design edits, builds or commits were made.
