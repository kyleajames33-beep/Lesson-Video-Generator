# Maths Standard Year 12 p01 to p08 Revision 1: learning review summary

19 November 2026. Independent student learning review of the eight probability designs (`lessons/math-s12-p01.md` to `p08.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 76 (especially 66 to 69 and 76) and `checks/root-decisions-maths-s12-p01-p08.md`, with the packs, `lessons/math-s12-b07.md` (before p01), `lessons/math-s12-z01.md` (after p08), `maths-visual-standard.md` and `AGENTS.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12 who brings only Stage 4 and 5 chance (Year 11 Standard has no probability), on the Standard 1 path (p01, p02, p03, p05, p06, p08) and the Standard 2 path (all eight). Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with Python `fractions` and `math.comb`, with full listings of every sample space small enough to list (`work/brief-review-standard-p/verify.py`, 171 checks, 0 failures; numbers in suggested fixes in `suggested.py`; both run with `python -I`, Python 3.14). Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| p01 chance 0 to 1, sample space | should-fix | 0 | 2 | 2 | `m-s12-p01-learning-review.md` |
| p02 favourable over total, complement | should-fix | 0 | 2 | 1 | `m-s12-p02-learning-review.md` |
| p03 arrays and tree diagrams | should-fix | 0 | 1 | 2 | `m-s12-p03-learning-review.md` |
| p04 probability trees (Standard 2) | should-fix | 0 | 1 | 2 | `m-s12-p04-learning-review.md` |
| p05 relative frequency | should-fix | 0 | 3 | 2 | `m-s12-p05-learning-review.md` |
| p06 expected frequency | should-fix | 0 | 2 | 1 | `m-s12-p06-learning-review.md` |
| p07 Venn diagrams, two-way tables (Standard 2) | should-fix | 0 | 2 | 1 | `m-s12-p07-learning-review.md` |
| p08 probability in decisions | should-fix | 0 | 1 | 3 | `m-s12-p08-learning-review.md` |

Totals: 0 pass, 8 should-fix, 0 blockers; 14 should-fix findings, 14 optional. Every should-fix is a sentence, a label or a visual detail inside an existing scene; none needs a new scene, a new plate or a split. These are good designs: each gives the reason before the rule (equal shares, "each with each", the lit cell counted once, "three fifths of three fifths" on the cell bar, "the bag changed", "each flip is a big share of so few", "eight in every ten", "the 45 include the 12", "halved from what?"), none is a slideshow on paper, and the strand keeps one visual system with fixed colour roles.

## Top findings

1. **p02 scene 2: why favourable over total.** The rule is named, not caused. Say that the whole chance, one, is shared equally between ten marbles, so each has one tenth and blue gets five tenths; show the bar splitting into ten "1/10" pieces.
2. **p05 scene 3: whose coin is being flipped?** "Let's keep flipping" sounds like the hook's coin, so settling on 0.5 quietly assumes the answer. Say it is a simulated fair coin, and tag it; then "After ten, it's at zero point seven, just like our coin" becomes the payoff.
3. **p05 scene 4: eight or more, when the coin got seven.** Use the hook's own result: seven or more heads in ten fair flips is 176/1024 ≈ 0.17, about one run in six (stronger than "one in eighteen", and the right comparison).
4. **p01 scenes 3 and 4: decimal to fraction is asked in A1 but never taught.** Add "zero point two is two tenths, which simplifies to one fifth", a fourth givens line, "divide the top by the bottom", and a clearer key note 2.
5. **p02 scenes 2 and 3: a random-looking run that comes out exactly 4 each.** It teaches that random draws come out even, which p05 contradicts. Show it as fair shares ("fair share over 40 draws: 4 each"), not random hops.
6. **p08: "Who paid?" is on the card but never taught.** Add it on the advertisement (the app's own maker ran the trial), lighting the checklist line.
7. **p04 scene 3: A and B never named.** "Call blue on the first draw A, and blue on the second draw B", with tags under the formula; the same for bus and train.
8. **p03 scene 5: "give every marble its own name to keep the outcomes equally likely".** The cause is reversed: the marbles already are equally likely; names let us count them.
9. **p01 scene 6: "the coins are different" over two identical coin plates.** Make them a ten-cent and a dollar coin by coded tag and one spoken sentence.
10. **Ruling 69 and 76 labels are missing on screen in p05, p06 and p07.** The app record, the simulated months (ruling 76 accepted them "labelled"), the canteen pies and the canteen survey read as real data with no "invented example" or "simulated months" tag.

Other should-fix items: p06 scene 5 (say "forty out of two thousand is zero point zero two" before using 0.02); p07 scene 4 (replace "and so on" with the 18 and 17 subtractions that A2's chain needs).

## For root to decide

- **Labels (top finding 10).** Rule whether "invented example" applies to records and surveys only (app record, survey, pies, months), as recommended here, or also to hypothetical set-ups (bags, cars nearby, "say the bus is on time 0.8"), which this review does not ask for. The labels touch two shared frames: section 3 (p05's handoff, p06's opening) and section 6 (p06's left panel, p07's opening), so the decisions file changes with the designs.
- **"done" chips for Standard 1 viewers.** p05 opens on "Probability trees: done" and p08 on "Venn diagrams and tables: done", naming videos Standard 1 skipped (optional in p05 and p08). Fade them before the first word, or word them "Standard 2: ... done" in sections 5 and 7.
- **The designer's six questions, as they bear on learning:** (1) keep p03's without-replacement scene; (2) the train plate helps p04 but is not essential, the pie warmer adds little that a coded gauge does not, the loaf is needed; (3) the p05 seed values are accepted by ruling 76, and top finding 3 does not depend on the seed; (4) "Of whom?" works better for students than "replicated?"; (5) p06 needs no padding; (6) z01 section 8 is confirmed by z01's own Boundary.

## Joins

- **b07 to p01:** p01 opens on b07's final frame item for item and repeats "the forecast also says a twenty per cent chance of rain" (ruling 67).
- **p01 to p02, p02 to p03, p05 to p06:** each final frame is the next design's opening, matching section 3, and none shows the answer it hands on.
- **Two-route frames (p03, p06) and their scaled panels (p04, p07):** sections 4 to 7 hold. p04 and p07 grow the left panel; p05 and p08 open on one picture for both courses (the right panel scaled by 1.3). Nothing in p05 needs p04, and nothing in p08 needs p07.
- **p08 to z01 and the Standard 1 close:** z01's Boundary and scene 1 match p08's scene 12 exactly (the loaf, the scale "--- g", 12 of 200 weighed). The Standard 1 panel says the Year 12 course is complete, points to the playlist and promises no further video (rulings 68 and 73).

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (p03 A2's unnumbered counters and p07 A2's blank table are the question's own form). p07 A2 and p01 A2 ask for more than 10 s allows, but "Pause here to answer." covers that. All 16 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 22 s and 29 s. No gambling (the spinners are at a school maths fair with no stake), no P(B|A), "conditional", ∪ or ∩ in any learner line (scripted check), and no drug, disease, insurance or genetic context.

## Lengths

All eight are under 570 s by the designer's estimate (471 s to 506 s). The should-fix findings add between about 0 and 13 s per design; the longest after fixes is p08 at about 515 s. Measure on the Google voice.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the eight designs (scripted check).
- b07's description still reads "Next: probability (title set by its design)"; p01's title is now set ("Probability from 0 to 1 and the Sample Space"), so b07's line can quote it.

No speech, design edits, builds or commits were made.
