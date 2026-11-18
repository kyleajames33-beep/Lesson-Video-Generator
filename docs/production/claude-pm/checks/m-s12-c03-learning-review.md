# Maths S12 c03 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c03.md`, "What is the critical path, and how do float times reveal it?" Source SHA256 `a97ad56626dba45ac3aa51a59a6efe8666f29c480654f620d79b5d5df15d3f5c`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c02: forward and backward scans, EST and LST for each activity) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a good lesson. The hook's two cases (the slab a day late moves the finish, the kit a day late does not) make "critical" a question before it is a word, and scene 4 answers it ("which answers our puzzle"). "Jobs on different paths run at the same time, so we don't add every duration together. But every path has to be finished" is the real reason the longest path sets the time, and the path bars landing on the finish box's 9 show it. The Year 11 shortest-path contrast is one sentence and a chip, which is the right size. Float is defined in words before the formula, there is one formula on screen (LST − EST), it is per activity throughout (MS-53), and the shared-float slide (C moves, E's bar shrinks) teaches "you can't spend the same four days twice" visually. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): shed paths A-C-D-E-G 9, A-C-D-E-F 8, B-E-G 8, B-E-F 7; floats A 0, B 1, C 0, D 0, E 0, F 1, G 0; slab +1 gives 10, kit +1 gives 9; site lesson03 Worked Example 2: 11 days, floats 0, 0, 4, 0, 4, and C three days late leaves E one day; lesson05 Worked Example 1: both paths 10, all floats 0; renovation paths 12, 12, 7, F EST 5, LST 10, float 5. All correct.

## Findings

1. **Should fix, feedback 2 (the crossed slip crosses out a true statement).** The slip "B can be 1 day late and so can F, so 2 days" with the caption "each float belongs to its own activity, on its own path" has two problems. The kit (B) and the door (F) are on the same path (B-E-F), so "on its own path" is false; and the kit and the door can in fact both be a day late at once and the shed still takes 9 days (checked: E, which is critical, sits between them), so a student who wrote "the kit can be a day late and so can the door" sees a correct statement crossed in red. The slip also answers a question attempt 2 did not ask. Fix: use the classic slip for part (b). Narration: "Saying painting has no float because it's the last job is the slip. The door is a last job too, and it has a day of float. Painting has none because it's on the longest path." Red slip "G has no float because it's the last job"; caption "F is a last job too (float 1): G is on the critical path". Students should understand that zero float comes from being on the longest path, not from position. Time: about 1 s.

2. **Optional, scene 4 (float from the paths' side).** After "one day of float", add: "That's because the kit's path is eight days, one day shorter than the critical path." It ties float back to scene 2's bars and answers "why do critical jobs have none?" from the other direction (no path is longer than theirs). About 4 s; scene 3's Year 11 sentence is the named reserve trim.

3. **Optional, key note 5 ("Floats on one path are shared").** Scene 5 says it correctly ("on the same path, one after the other"), but the note drops "one after the other", and B and F above are on one path without sharing. Write: "Non-critical jobs one after the other share their float. Paths can tie: two critical paths."

## Joins

c02 to c03: scene 1 opens on c02's final frame exactly. (c02's handoff sentence "That difference tells us which jobs have room to move" should change, c02 finding 1; c03 needs no change for it.) c03 to c04: the final frame (hall plate, empty week timeline, seven loose bars of the right lengths, "how do we show this on a calendar?") is c04's stated opening, with no bar placed.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown. Attempt 2 states the critical path on the card, which makes part (b) a "connect it to zero float" explanation rather than a search; that is the item's normal "explain" form and the plate gives no network to search, so it stands. Feedback 1 (about 26 s) handles the tie well ("A, B, D, E ties at twelve, so it's critical too").

## Key notes and length

Notes 1 to 4 are clear; note 5 as optional finding 3. About 492 s with holds; the fixes add about 5 s.

No speech, design edits, builds or commits were made.
