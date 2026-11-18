# Maths Standard Year 12 c01a to f04 Revision 1: learning review summary

19 November 2026. Independent student learning review of the eleven networks designs (`lessons/math-s12-c01a.md`, `c01b.md`, `c02.md` to `c06.md`, `f01.md` to `f04.md`; Standard 2 only), following `docs/production/student-learning-review.md`, root rulings 1 to 81 and `checks/root-decisions-maths-s12-c01-f04.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard 2 student, starting from z06's final frame. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, run with `python -I`, output `verify-output.txt`: 115 checks, no failures): event and activity scans, floats, paths and change cases; predecessor sets read back from every drawing; every source-to-sink cut by enumeration; an independent maximum flow by augmenting paths with residual edges; and the forward-only saturated edges method in the stated orders and in every possible order. Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| c01a precedence table to network | should-fix | 0 | 1 | 1 | `m-s12-c01a-learning-review.md` |
| c01b dummy activities | should-fix | 0 | 2 | 0 | `m-s12-c01b-learning-review.md` |
| c02 forward and backward scans | should-fix | 0 | 1 | 1 | `m-s12-c02-learning-review.md` |
| c03 critical path and float | should-fix | 0 | 1 | 2 | `m-s12-c03-learning-review.md` |
| c04 Gantt charts | should-fix | 0 | 1 | 1 | `m-s12-c04-learning-review.md` |
| c05 changing durations | pass | 0 | 0 | 1 | `m-s12-c05-learning-review.md` |
| c06 spreadsheet model | should-fix | 0 | 1 | 1 | `m-s12-c06-learning-review.md` |
| f01 flow terminology and cuts | should-fix | 0 | 1 | 1 | `m-s12-f01-learning-review.md` |
| f02 saturated edges method | should-fix | 0 | 1 | 1 | `m-s12-f02-learning-review.md` |
| f03 maximum flow, minimum cut | should-fix | 0 | 2 | 0 | `m-s12-f03-learning-review.md` |
| f04 capacity changes and demand | should-fix | 0 | 2 | 1 | `m-s12-f04-learning-review.md` |

Totals: 1 pass, 10 should-fix, 0 blockers; 13 should-fix findings, 10 optional. Every should-fix is a sentence, a label or a visual detail inside an existing scene; none needs a new scene, a new plate or a split. The designs are good: each gives the cause before the rule (an event as a waiting point, "wait for the slowest", "who needs you first?", "every path has to be finished", "a path carries its narrowest pipe", "every car crosses every cut"), shows each claim happen on screen (arrows lifting into bars, the crown jumping paths, tubes filling, cut sums racing on a handle), and none is a slideshow on paper. c05 is the strongest.

## Top findings

1. **c01a scene 4: what an event means.** "Arrows that meet at an event all finish at that moment" is false for the drawings that follow and never states the rule c01b and c02 rely on. Say: "the moment when every arrow arriving there has finished. So every arrow that leaves an event has to wait for every arrow that arrives there."
2. **c02 scene 12: the handoff primes MS-53.** "That difference tells us which jobs have room to move" reads node slack as float (ruling 74). On the café's own boxes it fails (event 2's gap is 5; the pies have 10). Ask the question without the claim.
3. **c03 feedback 2: a true statement is crossed out.** The kit and the door can both be a day late and the shed still takes 9 days, and they share a path, so "on its own path" is false. Use the classic part (b) slip: "G has no float because it's the last job" (F is a last job too, with float 1).
4. **f03 scene 4: why max flow = min cut is shown but not said.** The three full roads after the run are exactly cut 2's roads (checked). Say so: "the full roads make a wall across the network, and that wall is a cut."
5. **f02 scene 6: why path order matters is never said.** Name the cause (the first path sent A's flow through the link and filled B to T, which B's own flow needed) and give a habit (direct paths first, cross links for what's left, then a cut).
6. **f01 scene 4: the queue breaks "inflow = outflow".** Keep A's counters equal at 110 and put the queue on the walkway outside A.
7. **c06 scenes 4 and 7: a MAX in the "MIN coming up" column.** Point F6 and F8 at the finish cell scene 3 already builds (for example "=E10"), so the memory aid holds and the dollar-sign chip goes.
8. **f04 scene 2: the average rate (ruling 81) is not said.** Add "if they arrive evenly over the five hours".
9. **f04 scene 12: "Every video is in the playlist"** is false if f04 goes public before other core videos. Say "You'll find the Year 12 Maths Standard videos in the playlist", or root gates f04's release.
10. **c01b scene 3: "it never changes how long the project takes".** A dummy adds no time of its own but can set an event's time (c02's own visual surprise). Say "it adds no time of its own, so when we work out times, it counts as zero."

Other should-fix items: c01b scene 5 (make the "pair of events names one job" reason concrete: "the job from event two to event four" would have two answers); c04 scene 3 (say why the bar starts at the EST and the window comes after: "we draw every job as early as it can start, so any spare time comes after its bar"); f03 scene 6 (do not speak eight cut sums in a row, with "forty-five, fifty-four" adjacent; follow the badge: 55, 45, 34).

## For root

- **f04's playlist line (top finding 9):** reword, or gate f04's release on every core Year 12 Standard video being public. Either way, confirm the nine strand names (decisions section 9, item 5).
- **c06's LFT exception (top finding 7):** the site writes the exception as =MAX of the EFT column. Referencing a finish cell changes the site's formula for those two cells; if root prefers the site's formula, add the scene 7 clause given in the c06 review instead.
- **Ruling 71 (c01b scene 5):** the fix keeps the dummy; Codex's convention check still decides whether one sentence about parallel arrows is added.
- **Designer's open questions, as they bear on learning:** item 1 (c01a's split) and item 2 (the shed's dummy) work well for learners; the shed's dummy adds a "+0" in c03's paths that is said aloud. Item 4: c05's shorter title is in the design. Item 6: the extra stages in f01 to f03 each carry a real step (the ceiling, the cut check, the shortcut); keep 14 headings.

## Joins

- **z06 to c01a:** c01a scene 1 opens on z06's final frame exactly (header, café counter, the five chalk lines and times, "6:00 am", the three chips) and its first line picks up z06's question.
- **c01a to c01b, c01b to c02, c02 to c03, c03 to c04, c04 to c05, c05 to c06:** each final frame is the next design's stated opening, and each opening line picks up the previous question. No frame states the answer it hands on (C's drawing, the café's times, the critical path, the bar positions, the new finish, the sheet's values).
- **c06 to f01:** the header drops the strand name, the stadium carries the five capacities with "Critical path analysis: done", and no flow or cut is shown.
- **f01 to f02, f02 to f03, f03 to f04:** each final frame is the next stated opening; f02's three cuts carry no sums, and f03's crowd counter gives no demand per minute.
- **f04's close (rulings 73, 81):** no "Next" chip and no promise of future videos, exam dates or results; finding 9 is the one wording risk.

## Practice and feedback

All 22 question cards keep the full worded question and every given on screen through the 10 s countdown, and none is answer-bearing (tables to fill are empty; cuts on attempt cards are drawn without tint or glow). Several attempts ask for a whole drawing or several parts, more than 10 s allows, which "Pause here to answer." covers. All 22 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 20 s and 29 s by speech estimate; c03 feedback 2's slip is the one to replace (top finding 3). Site errors MS-49 to MS-56 are not taught: the hero diagram's 12 is never shown, the house build uses MS-50's wording, the two-dummy example is left out, no node difference is called float (once c02's handoff line changes), path order is taught as mattering, the five-edge title is not used, inflow and outflow are flows only, and the shortfall is "at least, then recheck". Every anchor is everyday and non-science (a café, a market stall, a house build, a garden, an office fit-out, a school open day, a plumber, a backyard shed, a renovation, a school formal, a community garden, a grand final crowd, town water, a festival campground, traffic to a car park), with no people drawn.

## Lengths

All eleven are under 570 s by the designer's estimate (487 s to 498 s), each with a margin of about 72 s or more. The largest additions are f02 finding 1 (about 10 s), f03 findings 1 and 2 (about 7 s net) and f04's findings (about 7 s). Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the eleven designs (scripted check).

No speech, design edits, builds or commits were made.
