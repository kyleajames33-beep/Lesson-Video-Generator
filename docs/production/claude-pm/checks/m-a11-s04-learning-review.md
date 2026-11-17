# Maths A11 s04 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s04.md`, "How do sample spaces and events give a probability?" Source SHA256 `1fce03c13ae04de3d65b07bd47a9f65c1bf94dd0b58d57ccb402992ebc48c553`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s01, s02; Years 7 to 10 probability as a fraction) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

The gumball trap is a well-chosen hook: "three colours, so one in three?" is tempting, and "there are more red gumballs than blue ones, so red should come out more often" refutes it from the picture before any formula. Numbering the gumballs makes "an outcome is one particular gumball" concrete, the refill assumption keeps "repeated without end" honest, and "if the gumballs are well mixed and all the same size" states the equally likely condition before it is used. The die and coin give a listed two-part space, and "and", "or" and "not" are each found by counting, with "or" including both and the crossed 6/12 + 6/12 = 1. Root rulings 8 and 39 are applied (no coin slot, no money; the die is a neutral object). Recalculated: 8/25 = 0.32, 12/25 = 0.48, 5/25 = 0.2; 12 outcomes; even and heads 3/12 = 1/4, even or heads 9/12 = 3/4, odd 1/2, 6 and heads 1/12, ratio 9; A1 {16, 20}, 1/10, nine tokens, 9/20; A2 8 outcomes, 3/8, 3/4; hotel regions 10, 6, 4, 20. All correct.

## Findings

1. **Should fix, scene 3 (P(A) = |A|/|S| is stated, not caused).** The narration says each outcome has probability one twenty-fifth, then "And the probability of an event A is the number of outcomes in A, over the number in S." The link between the two (an event collects one equal share per outcome) is in the teaching checks but not in the narration, and it is the reason the central formula is true. Fix, after "one twenty-**fifth**": "The event blue has eight of those gumballs, so it gets eight shares of one twenty-fifth, eight twenty-fifths. In general, the probability of an event A is the number of outcomes in A, over the number in S." Visual: on "eight shares" the eight blue tokens each flick a small "1/25" that stacks into "8/25" beside the row. Students should be able to say why the count goes on top, which is the step the colour trap breaks.

2. **Optional, scene 4 ("One heads, one tails, two heads").** By ear, "one heads" sounds like a slip for "one head". Say "one and heads, one and tails, two and heads, two and tails, and so on, up to six and tails".

3. **Optional, feedback 1 ("Five plus six over twenty is the slip").** Heard aloud this can be "five, plus six twentieths". Say "Eleven twentieths, from five plus six, is the slip. Sixteen and twenty were counted twice." The red slip on screen is unchanged.

4. **Optional, scene 3 (three things on one stage).** The grid (900 × 900 px at the right), the g01 board (left) and the colour trap bars are all present while the formula is built. Say where the bars sit (for example, a strip under the board that only appears on "colours aren't equally likely"), so the build keeps the current step largest.

## Open decisions answered

- (1) "Repeated without end" with the refill: clear and not pedantic. Keep.
- (2) The die beside Year 12 s01: root ruling 39 already settled this as plate reuse.

## Joins

s03 to s04 matches: the gumball machine and its seven chips open s04, and the first line restates the counts and "one in three?". s04 to s05: the hotel facade with 16 blue, 10 teal (6 violet) windows, the Venn diagram 10, 6, 4 and 20 outside, U = "40 rooms", and chips "room given at random", "P(sea view or spa)?", "Next: rules for probabilities", "?" are s05's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; neither picture is answer-bearing (unlit tokens 1 to 20; a coin and three empty boxes). A1 practises scene 5 on a new sample space. A2 asks for a three-stage list; only a two-stage list was modelled, but three coins are within reach for a Year 11 student and the feedback's "each toss has two faces" gives the count, so no extra example is needed (root ruling 35). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 28 s.

## Pace

About 375 s of speech before the notes, about 466 s in all. Finding 1 adds about 150 characters (about 11 s). Not rushed.

## Year 12 handoff check

Year 12 s01's entry knowledge: sample spaces, equally likely outcomes and P(A) = favourable ÷ total, listing two- and three-stage outcomes, complements, and its aid "One trial, one value". Delivered: "Each turn gives exactly one outcome" with the counter (scene 2), the equally likely condition before |A|/|S| (scene 3), a listed two-stage space (scene 4) and a three-stage list (A2). Complements arrive in s05.

## Site link

`probability-and-data/lesson01.sa.html` matches the outline; the Oz Lotto card is left out (root ruling 8). Correct.

No speech, source edits or commits were made.
