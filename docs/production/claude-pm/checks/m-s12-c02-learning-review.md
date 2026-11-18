# Maths S12 c02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c02.md`, "How do forward and backward scans find the earliest and latest start times?" Source SHA256 `a1caf0ecf9091a17a3d3190bbb7f4f8fbbc2360ead8a1cb9017f5979362592d3`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c01a and c01b: networks with dummies) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good scan lesson. Words come before letters ("the earliest time we can reach this event" before EST), the forward rule has its cause ("the muffins can't go in until both have arrived, so we take the larger time"), and the backward rule has a memorable one ("who needs you first?", "so nobody who starts from event two is held up"). The floating candidates ("0 + 15" against "10 + 0"; "40 − 20" against "15 − 0") show the comparison happen, and the clock strip turns 50 minutes into "open 6:50 am". Scene 5's D (LST 40 − 20 = 20, not the 15 in its start box, "set by the dummy, not by the pies") is exactly the reason the syllabus says "for each activity", and it keeps MS-53 out. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): café events earliest 0, 10, 15, 40, 50 and latest 0, 15, 15, 40, 50; EST/LST A 0/5, B 0/0, C 15/15, D 10/20, E 40/40; 6:50 am; plumber events 0, 4, 6, 7, 11, 15 and 0, 6, 6, 9, 11, 15, EST/LST A 0/2, B 0/0, C 4/6, D 6/6, E 7/9, F 11/11; shed boxes 1 (0 | 0), 2 (1 | 1), 3 (2 | 2), 4 (5 | 5), 5 (7 | 7), 6 (8 | 9), 7 (9 | 9). All correct.

## Findings

1. **Should fix, scene 12 (the handoff primes MS-53).** "Some events have the same earliest and latest times, and some don't. That difference tells us which jobs have room to move" invites the site's error (a node's latest minus earliest read as an activity's float), which ruling 74 says is never taught. On this video's own café boxes it fails: event 2 shows 10 | 15, a gap of 5, while the pies, which start there, have 10 minutes of room (20 − 10). On the shed, event 6's gap of 1 happens to equal the door's float, which would make the wrong rule look right in c03. Fix: "Some events have the same earliest and latest times, and some don't. Which jobs have room to move, and which can't slip at all without making the whole build late?" (drop "That difference tells us"). Keep the soft rings on the boxes, but ring the arrows B and F as well, so attention goes to activities. Students should arrive at c03 expecting float to belong to an activity. Time: about −2 s.

2. **Optional, scene 6 (the pies' window).** "The pies can start any time from ten past six to twenty past six" is a good preview, but it arrives without a reason in a "two checks" scene. Add "because D's EST is ten and its LST is twenty" after it, so the bracket ties back to the table just made. About 3 s; scene 1's third sentence is the named reserve trim.

## Joins

c01b to c02: scene 1 opens on c01b's final frame exactly (café network, empty split boxes, "6:00 am", "how long until we open?"). c02 to c03: the final frame (shed plate, the shed's network with its scanned boxes and dummy 6→7, "which jobs can't slip?") is c03's stated opening, and no float or critical path is shown.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 2 states the 15-hour finish, so it is reachable without attempt 1's answer. Each feedback (about 26 s) gives the answers, the max or min at the merge or split, and one crossed slip ("D waits for B too"; "A has room to spare"). Attempt 1's forward scan is more than 10 s of work, which "Pause here to answer." covers.

## Key notes and length

The five notes are the five rules, one line each, and the framed card ("Forwards: take the largest. Backwards: take the smallest.") is easy to keep. About 493 s with holds; the fixes are about time neutral.

No speech, design edits, builds or commits were made.
