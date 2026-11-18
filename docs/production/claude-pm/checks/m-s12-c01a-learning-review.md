# Maths S12 c01a Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c01a.md`, "How do we turn a precedence table into a project network?" Source SHA256 `d389509ec42ad1506a0283c1b7dd383ebc50a034ad09052bd62fa5382b96c264`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Standard n02 and n03: directed, weighted networks and a network from a table) as a Mathematics Standard 2 student starting the critical path strand straight after z06. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good opening to the strand. The café's chalkboard turning into a precedence table makes "activity", "duration" and "immediate predecessor" concrete before the table's name arrives, and the crossed "E: A, C, D" gives the actual reason for "immediate only" (the oven reaches the display through the muffins and the pies). Teaching the drawing method on a market stall that needs no dummy, and leaving the café at its snag, is the right split (ruling 81): the final frame poses a real problem with two felt failures, without frightening. B's long arrow still reading "B 20" is a good visual surprise, and the read-back in scene 6 and attempt 2 trains the check students will need in c01b. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`, output `verify-output.txt`): predecessor sets read back from every drawing match their tables (market stall E {B, D}, D {C}, C {A}; house build B and D {A}, C {B}; garden makeover C and D {A}, E {B, C}); no network here needs a dummy; author notes market stall 110 min with B float 65, house build 10 days. All correct.

## Findings

1. **Should fix, scene 4 (what an event means).** "Arrows that meet at an event all finish at that moment, and arrows that leave it all start from it" is not true of the drawings that follow (at the market stall's event 4, B finishes at 20 minutes and D at 85), and it never states the rule that scenes 5, 6 and 12 and c01b's recall depend on: everything leaving an event waits for everything arriving there. A student who believes "they all finish together" cannot see why ending A and B at one event makes the pies wait for the batter. Fix. Narration: "Each circle is an event, the moment when every arrow arriving there has finished. So every arrow that leaves an event has to wait for every arrow that arrives there." Visual: a second arrow arrives at circle 2 a beat after A, and the leaving arrow's tail lights only when both heads have landed (hand tag "leaves only when all have arrived"). Students should understand that an event is a waiting point, which is the whole reason for c01b's dummy and c02's "wait for the slowest". Time: about 2 s.

2. **Optional, scene 5 (why B ends at event 4 and nowhere else).** After "E leaves from there", add: "B can't end any earlier, at event two or three, or C or D would have to wait for the price tags too." It makes the rule two-sided (arrivals at a start event must be exactly the predecessors, no more and no fewer), which is the exact idea c01b's failed tries test. About 4 s; scene 4's Year 11 sentence is the named reserve trim.

## Joins

z06 to c01a: scene 1 opens on z06's final frame exactly (header, café counter plate, the five chalk lines with times, "6:00 am", the three chips), and its first line picks up z06's "what order, and how soon can we open?". c01a to c01b: the final frame (café table; A 1→2, B 1→3, D from 2 to a dashed circle, ghost "C 25" with "?") is c01b's stated opening, and c01b's first line names the same snag. No frame states the answer it hands on.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 2's table is empty and the network carries no tint. Attempt 1 asks for a whole drawing, more than 10 s allows, but "Pause here to answer." covers that. Each feedback gives the answer, the reason, the drawing and one crossed slip (about 24 s each). The house build keeps the site's numbers with MS-50's corrected predecessors, and MS-49's hero diagram is not used (ruling 74).

## Key notes and length

The five notes are short and useful, and the framed card matches scene 7. About 487 s with holds; the fixes add about 6 s, well under 570 s.

No speech, design edits, builds or commits were made.
