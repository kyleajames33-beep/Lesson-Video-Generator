# Maths S12 c04 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c04.md`, "How does a Gantt chart show the schedule and its critical path?" Source SHA256 `dfda8c18ce7da3e140909afa3b64a444522fd995dec9df12892286c98f626216`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c03: critical path, float; c02: EST and LST) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good lesson. Each arrow lifting off the network and laying down as a bar makes "built from the network diagram" literal, the four amber bars snapping into one unbroken chain is a real visual surprise, and "the window ends at the latest finish, not the latest start" heads off the commonest Gantt slip. Reading a bar back (site lesson04 Worked Example 2) is the right worked example, the time cursor answers "what's happening at week two and a half" in a way only a chart can, and the B-late drag shows shared float on the chart. Giving the formal's scans rather than re-working them (root decision) is fine: the table and boxes are on screen. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): formal boxes 1 (0 | 0), 2 (2 | 2), 3 (1 | 5), 4 (6 | 6), 5 (7 | 7), 6 (8 | 8); EST/LST/float A 0/0/0, B 0/4/4, C 2/2/0, D 1/5/4, E 2/7/5, F 6/6/0, G 7/7/0; latest finishes B 5, D 7, E 8; paths 8, 4, 3; cursor at 2.5 crosses C, D, E; B three weeks late leaves D one week; community garden 9 days, B 3 to 5 window to 6, D 5 to 7 window to 8; site bar 3, 5, 3, 6; J 2, 3, 2, 4. All correct.

## Findings

1. **Should fix, scenes 3 and 4 (why the bar starts at the EST and the window comes after it).** The decisions list "a bar at the LST (3, said)" and "the window before the bar (4, said)" as addressed, but no sentence says why. A student will ask "why not draw it at its latest start?" and "why does the dashed part go after?". Fix, scene 3 after "its length is the duration": "We draw every job as early as it can start, so any spare time it has comes after its bar." Scene 4's "After it we draw a dashed box" then follows from a reason. Students should be able to place a bar and its window from the rule, not from memory. Time: about 4 s; scene 3's "Builders and event planners use charts like this every day." (about 4 s) can go to pay for it.

2. **Optional, attempt 1 (the scans are the student's job here).** The card gives the network with empty boxes, so drawing the chart needs both scans first; scene 2 gave the scans rather than showing them. Feedback 1 starts from "The critical path is A, C, E, nine days". Add a short first clause, "The scans give ESTs of zero, three, three, five and eight, so", and show those numbers above the bars as they lay down. About 4 s.

## Joins

c03 to c04: scene 1 opens on c03's final frame exactly. c04 to c05: the final frame (the shed's Gantt chart, amber chain to day 9, B and F windows, rain cloud over D, "what if it rains for a day?") is c05's stated opening, with no new time shown.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown, and the empty grid gives nothing away. Each feedback (about 26 s and 24 s) gives the answer, a reason and one crossed slip that fits the lesson ("B can't start until A finishes"; "seven is the latest finish").

## Key notes and length

The five notes are short and match scenes 3 to 6. About 494 s with holds; the fixes add at most about 4 s.

No speech, design edits, builds or commits were made.
