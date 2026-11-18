# Maths S12 b04b Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b04b.md`, "How do we read a line of best fit's equation from its graph?" Source SHA256 `e205332133df8882cbd889d68dabc57612139eb656237e9f1e07949b2b6998b6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 l01 and l02: gradient, y-intercept, y = mx + c; b04a: the line by eye and the mean point) as a Mathematics Standard 2 student. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

A clear, honest video. "Start at c, then for every one step across, go up by m" makes the equation a set of instructions before any numbers. The sliding triangle shows why any two points on the line give the same gradient. The intercept trap is set fairly by the chosen axes (the line meets the left edge at 17), named, crossed, then resolved twice: by substitution, and by stretching the axis back to zero so the line visibly plunges to −73. "No meaning in context" is given a reason (0°C is far outside 18 to 32°C), and the van hire and A2 show the opposite case. One notation (y = mx + c, m blue, c violet) holds throughout (ruling 66). Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): 84 ÷ 14 = 6, c = −73, 17 at 15°C, 77 at 25°C, triangle rises 12, 30, 84; van 0.3; A1 1.5 and 6.5; A2 −1.7; the work-hours least-squares line −1.7 and 89.3. All correct.

## Findings

1. **Should fix, scene 3 (the reason for far-apart points).** "Pick two points that sit right on the line, and are far apart, so they're easy to read accurately." Far-apart points are not easier to read; the reason is that a small misreading changes the gradient less over a long run. The chosen points also show the difficulty: y = 6x − 73 gives an odd number at every whole temperature, so 119 never sits on a gridline. Fix: "pick two points that sit right on the line, as far apart as you can, so a small error in reading them makes little difference." Keep the givens card ("two points on the line") and let the hollow rings carry the exact values. Students should understand why distance between the points matters, so they choose well on an exam graph.

2. **Optional, attempt 2 (the marked point is also a data point).** Just after "don't use data points", the A2 card rings (0, 89), which is both a point on the line and a student's data point. Add to feedback 2, after "crosses the vertical axis at eighty-nine": "That point is on the line, so we can use it."

## Joins

Opens on b04a's left panel, which grows by a uniform 1.4 as the right panel fades. Final frame matches b05's opening (the scatter with "y = 6x − 73", the empty dial). Standard 1 viewers never arrive here (b04a sends them to b07).

## Practice and feedback

Both cards keep the full worded question on screen through the countdown. A1 has no picture (the points are given); A2's graph shows the line and its two marked points with no equation. Feedbacks about 29 s and 30 s, at the top of the 15 to 30 s range, each with one crossed slip ("gradient = 30"; "m = 1.7"). Rideshare and paid work are everyday anchors; the rideshare callback is accepted (ruling 77).

## Key notes and length

Five short notes, including when c means something. About 480 s; finding 1 changes no length.

No speech, design edits, builds or commits were made.
