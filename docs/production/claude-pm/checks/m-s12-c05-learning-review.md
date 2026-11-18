# Maths S12 c05 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c05.md`, "What happens to the finish time when one activity speeds up or slows down?" Source SHA256 `ec62f78975fa1ac2e14aa2f3c793edf8160cc93c6fa4f3dc7651cc61edfdac27`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c03: critical path, float, paths; c04: Gantt charts) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 1 optional).

This is a very good lesson, and the best use of the medium in the critical path strand. Every case is seen, not asserted: one project state drives the Gantt chart, the network and the path bars, so dragging a bar's edge moves the finish line and the crown together. Each case has its cause in a plain sentence ("there's no spare time to soak it up"; "a delay inside the float isn't free"; "delay minus the float, here two minus one"). The fast-setting mix as the worked example is the right surprise (the crown jumps to the kit's path; one day saved, not two), and "After any change, check every path" is a rule students can use on a new case. Scene 6's "shorten every critical path at once" ends on the walls, which sit on both paths, a satisfying payoff. Attempt 2 brings back the café with a case that needs "delay − float" in minutes. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): shed curing 4 gives 10; kit 5 gives 9 with A-C-D-E-G and B-E-G both 9; kit 6 gives 10; kit 3 gives 9; curing 1 gives 8 (B-E-G 8, A-C-D-E-G 7); kit 5 with curing 2 gives 9; kit 5 with walls 1 gives 8; renovation F + 3 gives 12 and C − 2 gives 12; café oven 18 gives 53 (paths 53, 50, 48), so 6:53 am, 8 − 5 = 3. All correct.

## Findings

1. **Optional, scene 6 (which shed is on screen).** The scene changes the chart five times in about 35 s (kit down to 3 and back; kit up to 5; curing down to 2; walls down to 1), and the middle two depend on the kit staying at 5. Hold a small tag on B's bar, "kit: 5 days (two critical paths)", from "Remember the late kit" until the reset, so a student who looks away for a moment knows which version is being changed. Time neutral.

## Joins

c04 to c05: scene 1 opens on c04's final frame exactly. c05 to c06: the final frame (hall plate small, the spreadsheet with the formal's predecessors and durations typed in, columns D to I empty, "can a spreadsheet do the scans for us?") is c06's stated opening, and it matches c04's formal.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown, and attempt 1 states the two critical paths and F's float so it is reachable from scene 3 and 6. Each feedback (about 21 s and 26 s) gives the answer, the reason and one crossed slip ("the other critical path still takes twelve"; "the float soaks up the first five"). Dropping the pack's part (c) keeps feedback brief, and scene 2 already covers a critical delay. "Crashing" is named once, with no crash costs.

## Key notes and length

The five notes are the five cases plus "recheck every path". About 497 s with holds.

No speech, design edits, builds or commits were made.
