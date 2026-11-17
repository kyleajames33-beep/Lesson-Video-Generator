# Maths A11 s09 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s09.md`, "What makes a random variable discrete or continuous?" Source SHA256 `8dc120ed5941568aa6463c37e5d2062660d9092b874a7ed3ed3a466c0e30aec7`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s04: experiments, outcomes and P(A); s06: the two-dice array) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

One random bag giving a count and a mass is the whole comparison in one object, and "nine mandarins or ten, but never nine and a half" makes the difference felt before the definition. Capital X and small x are introduced with a concrete value and "Each trial, one bag, gives exactly one value of X" is shown with the replay. "The variable is a choice" on the array is a useful move. The endless coin tosses break "discrete means finite" with the right reason ("you can still list them in order"), and the rounded scale reading is handled as a trap. Root rulings 12 and 43 are met: probability belongs to stretches of values, a single exact value has no width, and the site's "infinitely many values" reason is never used (scene 4 shows why it fails). Recalculated: totals 2 to 12 (11 values), P(X = 7) = 6/36; larger number 1 to 6; |difference| counts 6, 10, 8, 6, 4, 2, P(X = 0) = 1/6, P(X = 1) = 5/18. All correct.

## Findings

1. **Should fix, scene 5 (the zero-width point is the reading the bag actually gave).** The scene says "A single exact value is a stretch with no width, so on its own it has probability zero", and the visual marks the zero-width point "M = 1.13", the mass the scale showed for this bag. A student will object: "but the bag did weigh 1.13". The scene has already said the reading is rounded, so the answer is one clause away. Fix: after "so on its own it has probability zero." add "When the scale says one point one three, it really means a stretch, about one point one two five to one point one three five, and that stretch does have a probability." Visual: relabel the zero-width point "M = 1.1347… exactly", and on "a stretch" shade "1.125 to 1.135" violet with the tag "a reading is a stretch". Students should leave able to reconcile "a single value has probability zero" with "the scale showed 1.13", which is also the bridge Year 12 s04 uses ("someone's time really is zero point three five something").

2. **Optional, scene 3 (name the second variable aloud).** The rule card reads "Y = larger number", but the narration says only "a different random variable, like the larger of the two numbers". Add "call it Y" so the letter on screen is spoken, and the change of letter signals a new variable.

## Open decisions answered

- (1) Ruling 12: the two sentences are what root asked for (ruling 43). Do not extend into area or density; finding 1 adds one clause about rounding, not Year 12 content.
- (2) "Usually" on the card: the card does not overclaim. "Count it" and "measure it" are a test for practical examples, scenes 4 and 5 say "usually", and key notes 3 and 4 keep it. Keep the card as written.

## Joins

s08 to s09 matches: the mandarin bag on the scale with "1.13 kg" and its chips open s09, and the first line restates the count and the reading. s09 to s10: the reused spinner with three unequal coded sectors "1", "2", "3", the raw list strip "2, 1, 2, 3, 2, ...", and chips "sector sizes: unknown", "40 spins", "chance of each?", "Next: frequency tables", "?" are s10's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown; A1's picture is the empty sorter, A2's an empty array. A1 practises scenes 4 to 6, including the endless-list case; A2 combines scene 3 (a variable on the array) with s06's both-orders count. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 23 s, feedback 2 about 26 s.

## Pace

About 372 s of speech before the notes, about 461 s in all. Scene 5 is the longest (768 characters, about 58 s) and finding 1 adds about 130 characters (about 10 s); it stays one idea (a measured variable) with its stages shown in turn. Not rushed.

## Year 12 handoff check

Year 12 s01 defines discrete distributions on this definition and its aid "One trial, one value" assumes every trial gives exactly one value of X: scene 2 says it in those words. Capital X, small x and P(X = x) are used as Year 12 uses them. "Discrete does not mean finite" is scene 4. Year 12 s04 owns P(X = x) = 0 by shrinking intervals and says "0 isn't the same as impossible"; scene 5's two sentences are consistent with it and do not pre-empt it. Delivered.

## Site link

`probability-and-data/lesson14.sa.html` matches the outline; card 07's reason (S11-P02) is not used. Correct.

No speech, source edits or commits were made.
