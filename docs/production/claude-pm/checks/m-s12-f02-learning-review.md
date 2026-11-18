# Maths S12 f02 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-f02.md`, "How does the saturated edges method find the most a network can carry?" Source SHA256 `ded4ee4f06feb8619d75f85e792dd7171a21a08c30c5100fd60084f9de6f3425`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (f01: capacity, source, sink, inflow = outflow, cuts as ceilings) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good method lesson. "Water has to go through all three, so the path can only carry as much as its narrowest pipe" is the cause of the bottleneck rule in one sentence, the tubes filling to their fraction and turning amber when full make "saturated" visible, and the "what's left" labels on the third path show the shared-pipe idea as it happens. Scene 4's balance check and scene 5's matching cut ("Our flow equals a cut, so it can't be beaten") finish the method properly, and MS-54 is taught the right way round with its own example on a split screen (ruling 74). The worked example's crossed "10 + 5 = 15" is the classic slip. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`; cuts by enumeration, an independent maximum flow, and the forward-only method in the stated orders and in every possible order): festival 7 + 6 + 4 = 17, cuts 17, 18, 21, 22, 23, 25, 29, 33, maximum 17, and every order of the method reaches 17; order trap 5 + 3 + 4 = 12 and 4 + 6 + 3 = 13, cuts 13, 14, 15, 17, maximum 13 (only 12 or 13 are possible outcomes); site card 07 5 + 7 + 2 = 14, smallest cut 14 (the cut into T); attempt 1 4 + 6 + 6 = 16, cut into T 16, and every order reaches 16; attempt 2 80 + 90 + 20 = 190, gates' cut 190, and every order reaches 190. All correct.

## Findings

1. **Should fix, scene 6 (why the order mattered is never said).** The split screen shows that one order jams at 12 and another reaches 13, but no sentence says why, so a student learns "order is risky" without knowing what to do differently. The cause is visible on screen: the first path sent A's flow the long way, through the link, and filled B to T, the pipe B's own flow needed. Fix, after "and no cut equals twelve": "The first path sent A's flow the long way, through the link to B, and it filled B to T, which B's own flow needed." After "it matches the cut": "So a good habit is to send flow along the direct paths first and use a cross link for what's left. Then check with a cut." Visual: on "filled B to T" the left half's B→T tube pulses amber and S→B's unused 2 glows (hand tag "B's own water is stuck"). Students should understand what a poor first path does and have a habit for picking paths, with the cut as the proof. Time: about 10 s (scene 4's balance sentences are the named reserve trim, but the margin is about 79 s).

2. **Optional, attempt 1 (no order given).** The card does not fix a path order; every order reaches 16 (checked), so the feedback's order is safe. Add "(other orders give the same flow)" as a small grey tag under the feedback's framed answer, so a student who chose S-B-C-T first is not worried by different path amounts.

## Joins

f01 to f02: scene 1 opens on f01's final frame exactly. f02 to f03: the final frame (car park plate; the traffic network with capacities; three violet dashed cuts labelled with no sums; "which cut tells us the most cars that can get through?") is f03's stated opening.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 2 states the path order, so its one correct run is the one the feedback shows. Each feedback (about 24 s and 25 s) gives the paths, the total, the matching cut and one crossed slip about a shared edge ("C to T had only six left"; "the south gate had only twenty left").

## Key notes and length

The five notes are the method and its check, and note 5 keeps MS-54's correction. About 491 s with holds; the fixes add about 10 s. Fourteen scene headings are accepted (ruling 81).

No speech, design edits, builds or commits were made.
