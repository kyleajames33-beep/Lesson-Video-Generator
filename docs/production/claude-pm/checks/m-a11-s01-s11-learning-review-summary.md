# Maths A11 s01 to s11 Revision 1: learning review summary

17 November 2026. Independent student learning review of the eleven probability and data designs (`lessons/math-a11-s01.md` to `s11.md`), following `docs/production/student-learning-review.md`. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under each design's "Numbers to verify" was recalculated with Python fractions, itertools and SymPy (`work/brief-review-s/verify.py`, 58 checks, all pass); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| s01 sets and set notation | should-fix | 0 | 1 | 3 | `m-a11-s01-learning-review.md` |
| s02 intersection, union, Venn | should-fix | 0 | 2 | 1 | `m-a11-s02-learning-review.md` |
| s03 the counting rule | should-fix | 0 | 1 | 1 | `m-a11-s03-learning-review.md` |
| s04 sample spaces and events | should-fix | 0 | 1 | 3 | `m-a11-s04-learning-review.md` |
| s05 complement and addition rules | should-fix | 0 | 1 | 2 | `m-a11-s05-learning-review.md` |
| s06 arrays and trees | should-fix | 0 | 3 | 1 | `m-a11-s06-learning-review.md` |
| s07 conditional probability | should-fix | 0 | 2 | 1 | `m-a11-s07-learning-review.md` |
| s08 independence | should-fix | 0 | 1 | 2 | `m-a11-s08-learning-review.md` |
| s09 random variables | should-fix | 0 | 1 | 1 | `m-a11-s09-learning-review.md` |
| s10 frequency tables | should-fix | 0 | 1 | 2 | `m-a11-s10-learning-review.md` |
| s11 histograms, mode, median | should-fix | 0 | 2 | 1 | `m-a11-s11-learning-review.md` |

Totals: 0 pass, 11 should-fix, 0 blockers; 16 should-fix findings, 18 optional. Every should-fix is a sentence, a reorder or a visual-detail repair inside an existing scene; none needs a new scene, a new plate, a split or an extra worked example. This is a strong strand: the three causes the brief names are all taught as causes, not rules. s03's overshooting bars and tick counter show why the overlap is subtracted; s06's 5 × 5 block shows why stages multiply; s07's restriction shows why "given" narrows the sample space. s06 finding 1 extends the multiply reason to the tree. s08 is close to a pass (its one should-fix is a single sentence).

## Top findings

1. **s06 scene 4: why multiply along a tree path is not said.** Scene 3's block argument needs equally likely cells, and the lights are the case where they are not. Add "a hundred trips home: sixty green first, seven tenths of those also green", a fraction of a fraction.
2. **s11 scene 7 and feedback 2: reading between plotted points.** The 22.5 and 58.7 interpolations are grey rows only, so a student who reads "about 59" off their own polygon will think they are wrong. Say the straight-line quarter-of-the-way reasoning once, and say "about fifty-nine" before 58.7.
3. **s11 scene 5: the median rule without its reason.** Say that results 11 to 28 are twos, so the 20th and 21st are twos.
4. **s04 scene 3: P(A) = |A|/|S| is stated, not caused.** Add "eight shares of one twenty-fifth" between 1/|S| and |A|/|S|.
5. **s09 scene 5: the zero-width point is 1.13, the reading the bag just gave.** Say that a reading of 1.13 is really the stretch 1.125 to 1.135, which does have a probability; relabel the point "1.1347… exactly".
6. **s07 scene 3: the Venn restriction comes last, after the given-decimals example.** Reorder so the picture follows the formula (answers open decision 2; keep `we-1` spoken for A2).
7. **s02 scene 4: two different thirties back to back.** V̅ = 30 is framed green, then "Writing thirty in the chocolate only region is the slip". Move the slip next to "chocolate only is thirty minus eight".
8. **s06 scene 7: red and blue counters shaded in role blue and violet.** Use neutral shading with labels, or neutral counter colours.
9. **s03 scene 4: A means art, one scene after A meant the first set on the rule card.** Use "visual arts", V.
10. **s10 scene 3: spoken "B two divided by B five" against an on-screen "=B3/B$5".** Select C2 and explain or drop the "$".

Other should-fix items: s01 scenes 2 and 3 (name "infinite" and "finite" with plain meanings before |A| is restricted to finite sets); s02 scene 5 (say why 2 is left out of E: it is prime and even); s05 scene 5 (read "A̅ ∩ B" aloud as "not A, and B"); s06 feedback 1 (fourteen digits in a row; count the L instead); s07 scene 6 (say 120 and 80 out of 200 before 0.6 and 0.4); s08 scene 7 (0.95 and 0.9 appear in the slip without being derived).

## Pace (s06, s07 and s08 judged especially)

All eleven are under 570 s of speech (370 s to 409 s by estimate). None is rushed overall.
- **s06** (408 s, seven teaching scenes) has the most to carry. Scenes 3 (617 characters) and 7 (705) are dense but each step has its reason. Finding 1 adds about 17 s and a 1 s hold is suggested after "five ninths". No split.
- **s07** (386 s) is dense only in scene 3, and reordering fixes it without adding words. The app at about 135 s is fine after a real dice question (ruling 41). No split.
- **s08** (409 s) has two proofs back to back, the heaviest listening in the strand, but each board line is one spoken move. An optional 1 s hold after each proof's conclusion is suggested. No split.
- **Length floor (designer open question 1, root ruling 35).** No design needs an extra worked board: every attempt has a modelled method in its own or an earlier video (checked per design). Do not pad.

## Open decisions answered

- Designer decisions file: (1) length floor, ruling 35 applies and the review found no practice gap; (2) s09's two sentences meet ruling 12 (ruling 43), plus one clause about rounding (s09 finding 1); (3) s11's closing frame, ruling 45; (4) dice as plate reuse, ruling 39; (5) the seeded thousand mornings, ruling 42, and no learning issue; (6) plate count, not a learning question; (7) s01 title, ruling 36.
- Per design: s01 (3) "Now say caps one to seven start": keep. s02 (1) U = {1, ..., 7}: keep; (2) cap and cup: keep. s03 (1) site contexts: keep (ruling 38). s04 (1) "repeated without end": keep. s05 (2) "hold for any probabilities": fair as stated. s06 (1) traffic light numbers: keep with "Say" and "model numbers"; (2) length: no trim needed. s07 (2) scene 3 density: reorder (finding 1). s08 (1) alarms' independence: as narrated, enough. s09 (2) "usually": the card does not overclaim. s10 (1) the supposition: keep. s11 (2) "online quiz": fine.

## Joins

- **g06 to s01:** matches. g06 Revision 1 scene 11 ends on the grey delivery-circle badge, "the even numbers from 1 to 11", empty braces with "?", and the three chips; s01 scene 1 opens on that frame and fills the braces in its second sentence.
- **s01 to s02, s02 to s03, s03 to s04, s04 to s05, s05 to s06, s06 to s07, s07 to s08, s08 to s09, s09 to s10, s10 to s11:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question. No finding changes a joined frame (s02 finding 2 and s06 finding 2 change visuals inside scenes, not the handoff frames).
- **s11 to Year 12:** the closing frame names only the Year 12 playlist and two things published Year 12 videos do; no "?" and no p01 to p03.

## What Year 12 s01 to s06 assume, and where the strand delivers it

| Year 12 assumption | Where delivered |
| --- | --- |
| s01: sample spaces, equally likely outcomes, P(A) = favourable ÷ total | s04 scenes 2, 3 (with finding 1's reason) |
| s01: listing two- and three-stage outcomes | s04 scene 4, A2; s06 scenes 2, 6 |
| s01: "One trial, one value" (each outcome is one result of one trial; every trial gives one value of X) | s04 scene 2 ("Each turn gives exactly one outcome"); s09 scene 2 ("Each trial, one bag, gives exactly one value of X") |
| s01: complements; s04: "Year 11 complement rule" | s05 scene 3, key note 1 |
| s01: random variable, capital X, small x, P(X = x); discrete need not be finite | s09 scenes 2 to 4 |
| s01: relative frequency as an estimate, never forced | s10 scenes 5, 6 |
| s01: relative frequency bars | s11 scene 3 (heights add to 1) |
| s02: the 6 × 6 two-dice table as the cause | s06 scene 2 (ordered pairs, white and red dice) |
| s02, s03: the product for independent repeated trials | s08 scenes 3, 4, 7 |
| s04: "each trial lands in one place" (estimates add to 1) | s10 scene 3 |
| s04: histogram with touching bars; cumulative from 0 to 1 | s11 scenes 6, 7 |
| s04: P(X = x) = 0 for a measured variable (owned by Year 12) | s09 scene 5 gives the reason only, consistent with Year 12 s04 |
| s06: the median at 0.5 | s11 scene 7 |

No gap found.

## Practice and feedback

All 22 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing. Under root ruling 35, no attempt lacks practice: each method was modelled in the same video or an earlier one (s04 A2's three-stage list is the only step beyond the modelled two-stage case, and it is within reach). All 22 feedbacks give the answer, the key reason, short working and one crossed classic mistake, and all are under 30 s by estimate (19 s to 29 s). s05 feedback 1 and s11 feedback 2 (about 29 s each) need measuring on the voiced take; s11 finding 2 adds words to feedback 2, so trim as suggested there.

## No gambling, notation and spelling

- No lottery, betting, raffle or casino context in any narration, card or plate brief (root ruling 8). Dice, coins, a spinner and counters are neutral sample-space objects; the spinner is for a board game with no stake.
- Notation follows root ruling 9: U, |A| (n(A) named once in s01 and s03), A̅ (A′ and Aᶜ named once in s01), set symbols spoken in words. One small inconsistency for root: s01 writes "not a subset" as ⊄ beside a defined ⊆ (s01 optional finding 4); a strand-wide choice of ⊈ or ⊄ would settle it.
- No em dash (U+2014) in any of the eleven designs (scripted check).

## Root to decide

1. **s06 finding 2:** neutral shading of the red and blue counters, or neutral counter colours (changes the plate brief `ma11-counter-bag-v1`). Either fixes the learning issue.
2. **"Not a subset" symbol:** ⊈ (matches ⊆) or ⊄ (common in Australian texts), for s01 and anywhere later.
3. **s10 finding 1:** show the "$" with a one-line explanation, or drop absolute references from the spreadsheet.
4. **Housekeeping:** the designer decisions file describes s05 A1's crossed slip as "the overlap forgotten", while s05's narration (correctly) says "takes the overlap away twice". Align the decisions file to the narration.

No speech, design edits, builds or commits were made.
