# Maths S12 f03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-f03.md`, "How does the minimum cut prove the maximum flow, and how do we find it?" Source SHA256 `68598cc117db62d5d034610887d89e70f4c9277375d3b9e6504a6dde22c06346`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (f02: the saturated edges method and the matching cut; f01: cuts, forward edges only) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 0 optional).

This is a good lesson with a clear argument. Three cuts give three ceilings; one car crossing all three lines shows why each is a ceiling and why the smallest is the one that matters ("All three are true, but the smallest cut is the tightest ceiling"); the method then reaches 34, and the theorem is stated in plain words before its name. Counting cuts by "each middle point on one side or the other" is a method a Standard student can carry out, the minimum cut sitting in the middle streets is a useful surprise, and the shortcut (a flow and a cut that are equal prove each other) is the exam-ready version. "With the right choice of paths" keeps f02's order trap true. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`; cuts by enumeration, an independent maximum flow, the forward-only method in every order): traffic cuts in spoken order 55, 45, 54, 34, 40, 63, 70, 83, maximum flow 34, the run 10 + 12 + 12, and the three full roads after it (A→C, B→C, B→T) are exactly cut 2's roads; every order of the method reaches 34; site `we-1` cuts 17, 16, 19, 15, runs 6 + 3 + 6 and 6 + 7 + 2, maximum 15; attempt 1 cuts 25 and 28, every other cut at least 28, maximum 25; festival cut into T 17 against 22 out of the tank; stadium 190. As a check on scene 4's general claim, a search of 4,000 random five-point networks found none where no order of the forward-only method reaches the maximum, so the wording stands. All correct.

## Findings

1. **Should fix, scene 4 (why the maximum flow equals the minimum cut is shown, not said).** The visual notes that "the three full edges are exactly cut 2's edges", but the narration goes from "That's thirty-four" straight to "This always happens". The cause is on screen and is the heart of the syllabus point. Fix, after "every path is now blocked": "Look at the full roads, A to C, B to C and B to T. They're exactly cut two's roads. When every path is blocked, the full roads make a wall across the network, and that wall is a cut, so the flow has reached a cut." Visual: on "a wall across the network" the three amber tubes pulse together and cut 2's violet line draws through them. Then "This always happens" follows from something seen. Students should be able to explain why the method's answer equals the smallest cut, not just state it. Time: about 9 s.

2. **Should fix, scene 6 (eight numbers in a row).** "Fifty-five, forty-five, fifty-four, thirty-four, forty, sixty-three, seventy, eighty-three" asks the ear to follow eight numbers with no word for which cut each belongs to, and "forty-five, fifty-four" side by side are easy to mishear. The student only needs the badge's journey. Fix: "Step through them all, and keep the smallest so far. It starts at fifty-five, drops to forty-five, then to thirty-four, and nothing after that is smaller." The screen still steps through all eight tints and sums. Time: about −2 s.

## Joins

f02 to f03: scene 1 opens on f02's final frame exactly. f03 to f04: the final frame (stadium plate, five capacities, the gates' cut "190", "0 of 60 000 fans", "5 hours", "will 190 a minute be enough?") is f04's stated opening, and no demand per minute is worked out.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 1 states that every other cut is at least 28, so part (c) is reachable without listing all eight. Each feedback (about 26 s and 25 s) gives the answer, the reason and one crossed slip ("the smallest cut wins"; "the tightest cut limits the flow"). Attempt 2's 18 kL claim against a 17 kL cut is a good "explain why" item.

## Key notes and length

The five notes cover the theorem, listing cuts and the proof. About 491 s with holds; the fixes add about 7 s. Fourteen scene headings are accepted (ruling 81).

No speech, design edits, builds or commits were made.
