# Maths S12 f01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-f01.md`, "How do source, sink, capacity and cuts describe a flow network?" Source SHA256 `b47f5226b1458718eb0d1767d7fafbb2e99fd2b72abccfe564fd1fa3dde43328`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Standard n02 and n03: directed, weighted networks; a network from a table) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good opening to the strand. The grand final crowd makes capacity physical ("a limit, not a count", shown by dots slowing to 10 and to 0 and never passing 120), source and sink get their meaning from which way the arrows glow, and MS-56 is handled cleanly: inflow and outflow are flows, and "capacity into A" and "capacity out of A" are written as different words for the sums of capacities. The cut is introduced as "the big idea for this whole topic", with the reason it matters ("every route from S to T has to cross it"), the back edge is shown on the stadium's own A→B link, and scene 7 earns the ceiling ("no more than 190") without claiming the maximum, which f02 and f03 earn. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`; cuts by enumeration and an independent maximum flow by augmenting paths with residual edges): stadium cuts {S} 210, {S, A} 200, {S, B} 230, {S, A, B} 190, maximum flow 190; capacity into A 120, out of A 110; site `we-3` seven edges (smallest cut 27, not said); attempt 1 into C 13, out of C 10 (maximum flow 15, not said); attempt 2 cut {S, A} 18 (the network's smallest cut 13, not said). All correct.

## Findings

1. **Should fix, scene 4 (the queue picture breaks the rule just stated).** The narration says "Inflow equals outflow", then the simulation pushes 120 a minute into A while 110 leave, so A's "in" and "out" counters read different numbers seconds after the student was told they never do. The point of the scene is that the 120 is a capacity into A, not a flow. Fix: keep A's two counters equal at 110 throughout, and put the ten-a-minute queue on the S→A walkway outside A's entrance (tag "can't get in yet"). Narration, last sentence: "So at most a hundred and ten people a minute can get through it, and the other ten a minute would queue on the walkway, outside the concourse." Students should understand that inflow equals outflow always holds, and that a capacity into a point limits nothing on its own. Time: about 2 s.

2. **Optional, scene 7 (one route crossing a cut).** "Every fan ... has to cross every cut, going forwards" can sound as if a route crosses each cut once. Most routes do, and the sentence is true as a net crossing, so leave the wording, but have the traced dot follow S→A→B→T (the route through the link) on "has to cross every cut", so the cut {S, B} is seen crossed forwards on S→A and again on B→T while the back link goes the other way. This prepares the "forwards only" rule for attempt 2. Time neutral.

## Joins

c06 to f01: scene 1 opens on c06's final frame exactly and adds the strand name to the header. f01 to f02: the final frame (festival tank plate; S, A, B, C, T with "0/12" to "0/11"; "kL per hour"; tap counter at 0; "how much water can reach the campground each hour?") is f02's stated opening, and no flow is sent.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 2's cut is drawn with no tint and no glow, so nothing is answered. Each feedback (about 23 s and 20 s) gives the answer, the reason and one crossed slip ("only ten can leave"; "only forward edges count"). Attempt 1 asks for a drawing and three parts, more than 10 s allows, which "Pause here to answer." covers.

## Key notes and length

The five notes cover the terms, table to network and cuts, each on one line. About 498 s with holds; the fixes add about 2 s. Fourteen scene headings are accepted (ruling 81).

No speech, design edits, builds or commits were made.
