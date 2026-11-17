# Maths A11 s05 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s05.md`, "How do the complement and addition rules work on a Venn diagram?" Source SHA256 `a011dff14105255452adf20f89c6639ea4b57af5ca9e25692b1abbfb62fda3d1`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s01's |A| + |A̅| = |U|, s03's counting rule, s04's P(A) = |A|/|S|) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The central idea is said in one plain sentence and shown: "Each probability rule is a counting rule, divided by the size of the sample space", with every count on the diagram flicking "÷ 40" and the regions adding to 1 "because every room is in exactly one region". The complement rule is established from 16 + 24 = 40, and the addition rule from a felt contradiction (0.4 + 0.25 = 0.65, but we counted a half), with "counted twice, just like the members at the library". The mutually exclusive scene separates it from both complementary (the middle floors) and "different" (sea view and spa share six rooms). A1's crossed slip is now correct for this point in the course (root ruling 40), and the narration describes it accurately ("It takes the overlap away twice"). Recalculated: 10/40 = 0.25, 6/40 = 0.15, 4/40 = 0.1, 20/40 = 0.5; P(A̅) = 0.6; 0.4 + 0.25 − 0.15 = 0.5; `we-1` 0.8, 0.2, 0.2, regions 0.3, 0.3, 0.2, 0.2; floors 0.2 + 0.2 = 0.4, middle 0.6; A1 0.2, 0.4, regions 0.25, 0.2, 0.15, 0.4, slip 0.2; A2 6, 5, 1, 1/3, 4/5. All correct.

## Findings

1. **Should fix, scene 5 ("P(A̅ ∩ B)" is written but never read).** The narration says "what's the chance of B but not A? That's the B only region", while the green-framed row writes "P(A̅ ∩ B) = 0.5 − 0.3 = 0.2". A̅ ∩ B is new notation (a complement inside an intersection) that HSC questions use, and nothing tells the student how to read it. Fix: after "That's the B only region." add "We write it as A complement intersect B: not A, and B." Visual: on "not A, and B" a hand tag under the row, "A̅ ∩ B: not A, and B", with A̅ in amber and B in teal. Students should be able to read and write the B-only region in symbols.

2. **Optional, scene 4 ("last video but one's counting rule").** The phrase is hard to parse by ear. Say "the counting rule from two videos ago, divided by forty" (as e06 resolved the same issue).

3. **Optional, scene 5 ("These two rules hold for any probabilities").** Open decision 2: the statement is fair at this level and not a gap, because the counting derivation has just been shown. If a reason is wanted in a phrase: "because probabilities of separate regions add, just as counts do".

## Open decisions answered

- (1) A1's crossed slip: settled by root ruling 40. The narration's "takes the overlap away twice" is the accurate description; the designer decisions file's phrase "forgot the overlap" can be aligned to it.
- (2) "Hold for any probabilities": fair as stated (finding 3 is optional).

## Joins

s04 to s05 matches: the hotel facade, tinted windows, Venn diagram 10, 6, 4, 20 and four chips open s05, and the first line restates the counts. s05 to s06: the white and red dice side by side with "roll both together", "totals 2 to 12: equally likely?", "how many outcomes?", "Next: arrays and tree diagrams", "?" are s06's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; both pictures are unlabelled or unlit. A1 runs the addition rule backwards (practised in s03's A2 with counts and scene 5's givens), then uses "neither"; A2 practises scenes 3 and 4 on counted outcomes. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 29 s (measure it on the voiced take; it is close to the 30 s limit), feedback 2 about 23 s.

## Pace

About 376 s of speech before the notes, about 467 s in all. Not rushed.

## Year 12 handoff check

Year 12 s04 lists "Year 11 complement rule" and uses P(X > a) = 1 − P(X ≤ a); Year 12 s01 lists complements. Scene 3 states P(A̅) = 1 − P(A) as a rule to use without a diagram ("handy whenever 'not' is easier to count"), and it is key note 1. Delivered.

## Site link

`probability-and-data/lesson02.sa.html` matches the outline; card 10 (S11-P07) is not used. Correct.

No speech, source edits or commits were made.
