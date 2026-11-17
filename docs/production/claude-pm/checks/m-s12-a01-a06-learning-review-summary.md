# Maths Standard Year 12 a01 to a06 Revision 1: learning review summary

18 November 2026. Independent student learning review of the eight algebraic-relationships designs (`lessons/math-s12-a01.md`, `a02a.md`, `a02b.md`, `a03.md`, `a04a.md`, `a04b.md`, `a05.md`, `a06.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 25 and `checks/root-decisions-maths-s12-a01-a06.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12, and where shared (a01, a03, a04a, a04b, a05) a second time as a Standard 1 student with no algebraic method. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-standard-a1/verify.py`, numbers in suggested fixes in `suggested.py`, both run with `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| a01 simultaneous equations by graph | should-fix | 0 | 2 | 2 | `m-s12-a01-learning-review.md` |
| a02a substitution | should-fix | 0 | 2 | 2 | `m-s12-a02a-learning-review.md` |
| a02b elimination | should-fix | 0 | 2 | 1 | `m-s12-a02b-learning-review.md` |
| a03 equations from words | should-fix | 0 | 2 | 2 | `m-s12-a03-learning-review.md` |
| a04a break-even | should-fix | 0 | 1 | 1 | `m-s12-a04a-learning-review.md` |
| a04b break-even in a spreadsheet | should-fix | 0 | 2 | 2 | `m-s12-a04b-learning-review.md` |
| a05 exponential growth and decay | should-fix | 0 | 4 | 0 | `m-s12-a05-learning-review.md` |
| a06 exponential models | should-fix | 0 | 2 | 2 | `m-s12-a06-learning-review.md` |

Totals: 0 pass, 8 should-fix, 0 blockers; 17 should-fix findings, 12 optional. Every should-fix is a wording, label or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split. The designs are good: each states its steps in words before symbols, gives real reasons (the shared table row, "same y at the crossing", "equal amounts taken from equal amounts", the count-line ride, "$45 in, $6 out", the sign change, the kept-and-lost bars), and none is a slideshow on paper.

## Top findings

1. **a05 scene 4: zero and negative powers are asserted.** "Two to the x means two, multiplied by itself x times", then "two to the zero is one" with no reason. Walk the table left, dividing by two each step (8, 4, 2, 1, ½, ¼), with "÷2" arrows.
2. **Standard 1 route (ruling 9) lapses after the first example.** a03 scene 4 says "Draw both equations as lines" with no way to draw 22a + 12c = 5900 (give the two "all adults / all children" points); a04a scene 7 and feedback 1, and a04b scene 5 and feedback 2, find break-even by algebra only although a04a scene 4 built the pay-back route ("each item pays back price minus variable cost; fixed cost ÷ that") for everyone. Use the pay-back sentence, with algebra in a grey "Standard 2" row.
3. **a06 scene 7 and memory card: "a is one plus r".** Heard with r as "r per cent", 4 per cent gives 5. Say and write "a = 100% + r% (4% up: 1.04); down: 100% − r%, the part you keep".
4. **a02a scenes 4, 5 and feedback 2: brackets lost by ear.** "Three x plus two, times x plus one" is heard as (3x + 2)(x + 1), in the video whose slip is the bracket. Say "two lots of the bracket x plus one".
5. **a06 scene 5: the slip's value is wrongly rounded on screen.** 24 000 × 0.18⁵ = 4.5349…, so $4.53, not $4.54 (rounded via 4.535, the very early rounding the scene warns against). The A1 slip in the notes is $117.96, not $117.97.
6. **a01 scene 3: why six lessons.** Say that B catches up $15 a lesson and A's $90 head start is gone after six; relabel the unspoken "difference A − B" readout as "A dearer by / B dearer by" so it never shows a negative price.
7. **a05 scene 7: "the bigger a is, the steeper it climbs".** The same contradiction as Advanced e01 finding 1: on the left of the y-axis 3ˣ is below 2ˣ. Use the e01 repair wording.
8. **a01 and a05 Standard 1 chips name titles that do not exist.** "Equations from words" and "When models stop matching reality" against a03's and a07's YouTube titles. Quote the published titles exactly.
9. **a03 scene 7: the units trap is unreachable.** The trip is given as "four and a half hours" and "4.5 h", so no one writes 4.3. Give it as "4 h 30 min".
10. **a02b scene 4: why multiply by four.** Say "the second equation has four f, so multiply the first by four"; the same in feedback 2 ("to match the two x").

Other should-fix items: a02a scene 5 (say why c + s = 7 is the one to rearrange); a02b scene 2 (a money reason for taking away a negative: cancelling a $10 debt leaves you $10 better off); a04b scene 3 (say that A2 becomes A3, A4 when filled down); a05 scene 3 (the first window ends at 12,000 views but the day-7 point is 12,800).

## Open questions in the designer's handover, as they bear on learning

- **2. Standard 1 chips:** keep them (ruling 13), but with the exact published titles (top finding 8).
- **3. a07 join:** confirmed; a07 scene 1 pays off the 200-year question as ruling 18 requires.
- **5. Absolute references:** leave out; nothing in a04b needs them.
- **6. Site numbers in a04b's attempts:** keep.
- **7. Lengths at the floor:** no second worked example is needed in a02a, a02b or a04b; the fixes add a few sentences each.
- **8. Ruling 5:** no rate needs the "changes every year" line. One price is low: driving lessons at $55 (a01). Label the cards "example prices", or use $90 + $65 against $80, which keeps the crossing at 6 lessons ($480) and the $60 saving at 10 (a01 finding 3).
- **Designer's review questions answered:** a01 open decision 3 ("Say you've got your learner licence"); a02a open decision 2 (keep "swap back", name "substituting back" once); a02a open decision 3 (keep the rounded-x row).

## Joins

- **a01 cold open:** correct for the first Year 12 Standard video.
- **a01 to a02a, a02a to a02b, a02b to a03, a03 to a04a, a04a to a04b, a04b to a05, a05 to a06:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question. No frame states the answer it hands on (a01's exact crossing, a02b's equations, a03's break-even, a04b's ratio, a05's model).
- **a06 to a07 (ruling 18):** a06's final frame matches join 9 of the root decisions, shows no value at t = 200, and a07's scene 1 answers it.
- **Standard 1 path (ruling 9: a01 → a03 → a04a → a04b → a05 → a07):** a03 opens on a self-contained worded problem, and a07 states the city model in full, so neither skipped video is needed. The route is complete once top finding 2 is applied.

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (graphs supplied in a01 A2, a03 A2 and a04a A2 leave the crossing unmarked, which is the item's normal form). a01 A1 and a05 A2 ask for four actions, more than 10 s allows, but "Pause here to answer." covers that. All 16 feedbacks give the answer, the key reason, short working and one crossed classic slip, between about 22 s and 29 s by speech estimate. Every anchor is real, everyday and non-science (driving lessons, removalists, a café, cricket, a theatre, a drive, a casual job, phone repairs, mowing, car detailing, T-shirts, a formal, a food van, phone stands, video views, rent, a city, a car, streaming, a console), with no gambling and no people drawn.

## Lengths

All eight are under 570 s by the designer's estimate (466 s to 557 s). Three fixes use most of a tight margin: a01 finding 1 (about 8 s of 13 s), a03 finding 1 (about 18 s of 19 s) and a05 findings 1 and 2 (about 10 s of 15 s). Each design already names reserve trims that cover them. Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the eight designs (scripted check).

No speech, design edits, builds or commits were made.
