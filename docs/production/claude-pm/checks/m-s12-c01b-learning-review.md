# Maths S12 c01b Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c01b.md`, "How do dummy activities fix a network?" Source SHA256 `777bb6b18a421ba2ed5f255ac1af3f36218e8d49baedb6f0d4ebccd7eac60a7d`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c01a: the precedence table, arrows as activities and circles as events, building row by row, checking) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 0 optional).

This is a strong lesson. The two failed drawings in scene 2 make the dummy the answer to a felt problem rather than a rule, "one event that means the oven is ready, and another that means the oven and the batter are both done" is exactly the right sentence, and the teal pulse running along the dashed arrow, with event 3 lighting only when both have arrived, shows what a zero-time arrow does. The direction rule is usable ("from the event that has to happen first into the event that must wait") and is checked by the reversed ghost and a read-back; attempt 2's read-back through the dummy is reachable from scene 4. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): read-backs café C {A, B}, D {A}, E {C, D}; office fit-out B and C {A}, D {B, C}; open day R {P}, S {P, Q}, U {R, S}; attempt 2 C {A}, D {A, B}, E {C, D}; every arrow runs from a lower number to a higher one; author notes fit-out 11 days with C float 1, open day 11 days, attempt 2 15 days. All correct.

## Findings

1. **Should fix, scene 3 ("it never changes how long the project takes").** The dummy adds no time of its own, but the wait it carries can set an event's time and so the finish: had the oven taken 20 minutes, event 3 would be at 20 because of the dummy. c02's own visual surprise is "a zero-time arrow decides a time" (the dummy's "10 + 0" candidate at event 3, its "15 − 0" deadline at event 2). A student told it "never changes" anything is tempted to skip dummies in the scans, the slip c02 warns about. Fix: replace "It costs no time, so it never changes how long the project takes." with "It adds no time of its own, so when we work out times, it counts as zero." Students should understand that a dummy is zero time but a real wait. Time neutral.

2. **Should fix, scene 5 (why two arrows can't share both events).** "The pair of events, two and four, would name two different jobs, and a network lists each job by its events" is the right reason in abstract words; a Standard student will ask "so what?". Make it concrete: "But then if you were asked about the job from event two to event four, there'd be two answers, the electrical work or the plumbing. Each pair of events has to mean just one job." Keep the crossed ghost and the caption. Students should be able to say why the second case needs a dummy in their own words. Time: about 3 s. If Codex's ruling 71 check finds that recent HSC Standard 2 papers also accept parallel arrows, add the designer's one sentence (open decision 1); the dummy is never wrong.

## Joins

c01a to c01b: scene 1 opens on c01a's final frame exactly and names the same snag. c01b to c02: the final frame (the café's complete network, empty split boxes, "6:00 am", "how long until we open?") is c02's stated opening, with no time filled in.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 2's table is empty. Feedback 1 (about 27 s) and feedback 2 (about 21 s) each give the answer, the reason and one crossed slip that matches the lesson ("R would wait for the signs"; "the dummy brings A's finish into event three too"). Leaving out the site's two-dummy example (MS-51) is right for this video.

## Key notes and length

The five notes are short and cover both cases, direction and the read-back check. About 487 s with holds; the fixes add about 3 s.

No speech, design edits, builds or commits were made.
