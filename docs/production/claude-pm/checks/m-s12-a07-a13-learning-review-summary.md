# Maths Standard Year 12 a07 to a13 Revision 1: learning review summary

18 November 2026. Independent student learning review of the eight Mathematics Standard designs `lessons/math-s12-a07.md`, `a08.md`, `a09.md`, `a10.md`, `a11a.md`, `a11b.md`, `a12.md` and `a13.md`, following `docs/production/student-learning-review.md`, root rulings 1 to 25 (`root-rulings-maths-standard-outline.md`) and the designer's decisions file (`root-decisions-maths-s12-a07-a13.md`). Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under each design's "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, run with `python -I`); all are correct. Narration was recounted by script (`work/brief-review-standard-a2/count.py`) and matches each design's stated count. Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned. a01 to a06 are reviewed separately.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| a07 limitations of models | should-fix | 0 | 3 | 2 | `m-s12-a07-learning-review.md` |
| a08 story graphs (Standard 1) | should-fix | 0 | 2 | 1 | `m-s12-a08-learning-review.md` |
| a09 parabola, vertex, axis | should-fix | 0 | 1 | 2 | `m-s12-a09-learning-review.md` |
| a10 intercepts and the midpoint | should-fix | 0 | 2 | 2 | `m-s12-a10-learning-review.md` |
| a11a reading a practical graph | should-fix | 0 | 1 | 3 | `m-s12-a11a-learning-review.md` |
| a11b valid values and limitations | should-fix | 0 | 1 | 2 | `m-s12-a11b-learning-review.md` |
| a12 inverse variation | should-fix | 0 | 3 | 2 | `m-s12-a12-learning-review.md` |
| a13 reciprocal models | should-fix | 0 | 1 | 3 | `m-s12-a13-learning-review.md` |

Totals: 0 pass, 8 should-fix, 0 blockers; 14 should-fix findings, 17 optional. Every should-fix is a wording or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split. Ruling 24 (codenames in descriptions) applies to all eight and is listed under Housekeeping, not counted above.

These are good designs. Each has a real anchor carried through the lesson, a simulation that shows its key idea (the 92 million counter, the story builder, the fold, the rider pausing at the midpoint, the sliding level line, the patch that cannot close, the fixed-area rectangle, the speed slider to zero), every attempt with its full worded question on screen through the countdown, and brief feedback with one crossed slip. The four explanations the brief asked about are present and caused: why the model breaks down (a07: far beyond the data, no ceiling, an assumption that fails), how the graph tells the story (a08: each sentence draws its piece), why the vertex sits midway between the intercepts (a10: the intercepts are a matching pair at equal height), and why the hyperbola never touches the axes (a12: a fixed area cannot have a zero side).

## Top findings

1. **a13 scene 6: the "same average speed" limitation contradicts the model.** With s defined as average speed, T = 120/s is exact for any real trip, so "traffic and stops make the real time longer" is not a limitation of the formula. Recast it as "the model only works if the car can really average that speed", and give average speed its plain meaning in scene 1.
2. **a11b scene 3: root ruling 22 is not applied.** The patch still reads 0 ≤ w ≤ 10. Write 0 < w < 10 (and 0 < A ≤ 25), give "<" its plain meaning, and say why the rocket's ends stay in while the patch's are left out.
3. **a07 scenes 1 and 5: Standard 1 viewers meet 1.03 and 0.82 unexplained.** They arrive from a05, which stops before percentage multipliers and k. One clause each ("multiplied by one point zero three, a hundred per cent plus three"; "keeps eighty-two per cent") fixes it.
4. **a07 scene 2: interpolation is misapplied.** Every t > 0 is beyond today's data, so years 0 to 10 are a short extrapolation, not interpolation. Reword and relabel the band "a few years ahead: a small step".
5. **a08 scene 2: "A trip up a hill isn't drawn as a hill"** names no quantity, and for height it is false. Name speed and show the correct dip beside the crossed hill.
6. **a08 scene 4: the narration and the steepness race compare different things** (10 GB over 10 days against equal 5-day windows). Say the 5-day comparison the race shows.
7. **a12 scenes 2 and 5: x, y and "quadrant" are used before they are named,** and the first-quadrant restriction is stated without the reason ruling 23 asks for ("you can't have minus two friends").
8. **a09 scene 5: why the sign of a decides is not said.** Add that x² outgrows every other term far from the middle.
9. **a10 scene 1: the rocket flies straight up but its graph is an arch.** Standard 2 students may have skipped a08; one sentence ("time runs across the page") prevents the path misreading. Scene 5's factored equation also needs "the bracket" said aloud.
10. **a11a scene 3: the interval is read but not explained.** Add "Between those two times, the curve is above the line."
11. **a07 feedback 2: dollar amounts by ear** ("fourteen fifty-five" can be $14.55). Say "fourteen hundred and fifty-five dollars"; the rewrite stays under 30 s.

## Standard 1 route (ruling 9)

a08 works as the Standard 1-only video: it stands on a07's flat fare cap and Year 11 gradient alone, teaches `cice949e38` from the syllabus, and routes Standard 1 viewers to i01 in its narration, its final frame's right panel and its description. a07 serves both courses with a labelled Standard 1 segment, needing only top finding 3 for viewers arriving from a05. The full Standard 1 path (a05 → a07 → a08 → i01) is followable with that fix.

## Root rulings checked

- Ruling 18 (a06 to a07 join, the 200-year answer in a sentence or two): applied.
- Ruling 19 (city teaches, sneakers in attempt 1): applied.
- Ruling 20 (a09 opens on a08's two-route frame): applied; optional a09 finding 2 ("Here's a footbridge") helps students who skipped a08.
- Ruling 21 (foam rocket; lemonade stall stays): applied.
- Ruling 22 (0 < w < 10 with a plain reason): **not applied** (top finding 2).
- Ruling 23 (both branches once, then the first quadrant with a reason): mostly applied; the reason is missing (a12 finding 3) and k < 0 is repeated in the app (a12 optional 5).
- Ruling 24 (no codenames in descriptions): **not applied** in any of the eight.
- Ruling 25 (mowers and hatchback reuse): applied.

## Joins

- **a06 to a07:** matches a06 scene 12 exactly; a07 fills the "?" with "≈ 92 300 000".
- **a07 to a08, a08 to a09, a09 to a10, a10 to a11a, a11a to a11b, a11b to a12, a12 to a13:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question.
- **a08 right panel and a13 final frame to i01:** the coin jar, empty "balance ($)"/"years" axes and grey chip "the same amount added each year: what shape?" are identical, so both routes reach i01 on one picture. i01 has no design; nothing in either frame fixes its anchor or numbers.

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing. All 16 feedbacks give the answer, the key reason and one crossed classic mistake, and all are 22 to 28 s by speech estimate (a07 feedback 2 about 29 s after its fix). No re-teaching.

## Lengths

All eight are 5,175 to 5,696 characters, about 478 to 518 s with holds and 383 to 423 s of speech before the notes, under the 570 s cap. The should-fix wording adds at most about 16 s to any one design (a11b). The four shorter designs (a10, a11b, a13, a11a) are not thin: each scene carries its own step.

## Root must decide

1. **Ruling 22 for the rocket.** The reviewer recommends keeping 0 ≤ t ≤ 4 for the rocket (it is on the grass at launch and landing) while the patch becomes 0 < w < 10, with one sentence saying why. Confirm, or rule that all valid intervals in a11b are strict.
2. **a12 attempt 2 (both branches).** Ruling 23 says both branches once. Attempt 2 practises a two-branch y = 6/x. The reviewer recommends keeping it (it is the syllabus's "hyperbolic shape" in exam form) and trimming the app's repeat of k < 0 instead. Confirm.
3. **a13's average speed.** Keep the site's "average speed" with the recast limitation (recommended), or change s to "the speed it drives at" throughout, which makes the original limitation correct but departs from site `we-1`'s wording.
4. **Hatchback count.** The red hatchback appears in a06, a07, a08 (scene 6's petrol tank badge, not listed in the decisions file's open question 9), a11a, a12's final frame and a13. Ruling 25 covers a06 and a07. Root may want a different badge in a08 or a11a so the car stays a13's anchor.

## Housekeeping

- Ruling 24: every description still quotes "Standard 2 (codename): ..." or "Standard 1 (codename): ...". Drop the bracketed codenames and keep the separate headings (ruling 16). Mechanical.
- Each design's "Status" line cites rulings 1 to 12 only; rulings 13 to 25 now bind them.
- a11a's reserve-trim note names "scene 4" for a scene 5 sentence.
- No em dash (U+2014) was found in any of the eight designs. Each design's "Review evidence paths" names `checks/m-s12-<id>-learning-review.md`, which matches these files.

No speech, design edits, builds or commits were made.
