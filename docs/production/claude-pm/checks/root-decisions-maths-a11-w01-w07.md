# Designer decisions: Year 11 Maths Advanced w01 to w07 (Revision 1, 16 November 2026)

Written by the w01 to w07 designer (Claude) for root. The designs are `../lessons/math-a11-w01.md` to `math-a11-w07.md`. They follow the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6, f01 and s01 Revision 4 patterns). None has had an independent review, maths check or voicing. Root confirms or overrules the calls below.

## Anchors (one per video, unique)

| Video | Anchor | Category | Plates (new unless marked) |
| --- | --- | --- | --- |
| w01 index laws | 27 wooden toy blocks stacked into a 3 × 3 × 3 cube | toys and games | `ma11-block-cube-v1`, `-layer-v1`, `-row-v1`, `-single-v1` (one shared projection, stackable) |
| w02 algebraic fractions | a chocolate block, 4 rows of 6 | food | `ma11-chocolate-block-v1`, `ma11-chocolate-row-v1` |
| w03 surds | a softball diamond, a square with 18 m sides | sport | `ma11-softball-diamond-top-v1` |
| w04 quadratics | a rug 2 m longer than it is wide | home and design | `ma11-rug-top-v1` |
| w05 discriminant | a kayak hire's price and daily takings | money and leisure | `ma11-kayak-jetty-v1` |
| w06 linear inequalities | a prepaid travel card running down | travel | `ma11-travel-card-v1`, `ma11-travel-card-reader-v1` |
| w07 functions | a snack vending machine | everyday machine | `ma11-vending-machine-v1`, `ma11-muesli-bar-v1`; reused `maths/ma12-chip-bag-v1`, `maths/ma12-apple-v1`, `chemistry/m7-pet-bottle-v1` |

Checked against every `math-a12-*.md` anchor (grep, 16 Nov). The pack suggestions I rejected because they would repeat a Year 12 context:
- phone storage (t04);
- folding and A4 paper (f05);
- a fenced pen (d18);
- a basketball arc (its graph meaning belongs to w14).

The other designer's w08 to w14 anchors are a taxi meter, pizza slices, an entrance ramp, a street map, a gym membership and a lemonade stall. None repeats an anchor here.

## Calls that need root's confirmation

1. **Plate prefix `ma11-`.** It mirrors `ma12-`. The w08 to w14 designer uses the same prefix.
2. **Paint order for the handoff frames.** Each video's final frame shows the next video's anchor. So these plates must exist before the build of the video before them:
   - the chocolate block before w01;
   - the softball diamond before w02;
   - the rug before w03;
   - the kayak jetty before w04;
   - the vending machine before w06.
3. **w01 block registration.** The ladder and dial need four plates that stack within 3 px. If Codex cannot hit that, the fallback is the whole cube plate with coded face tints. A coded cartoon of a block is never used.
4. **w02 combines two site lessons (5 and 6) and uses all six site examples.** Dividing and adding are kept short. If the learning review finds them rushed, the fallback is to move dividing to p01.
5. **w02 value tester at x = 0.** (x + 3)/(x + 4) equals 3/4 only at x = 0. The tester skips 0, and its tag says "for every other x". The learning review should judge whether to show the coincidence honestly instead.
6. **w04 replaces site we-1 (x² − 5x + 6) with the rug's x² + 2x − 15.** It teaches the same method and adds the null-factor trap that comes straight from the anchor.
7. **w04 also adds a formula check on the rug at 15** (scene 7), to show that every method gives the same roots.
8. **w05 A1 is changed from "real roots" to "equal roots".** The pack's version needs (m − 2)² ≥ 16, a quadratic inequality (w18). The real-roots version can go to w18 or p01.
9. **w05 applies site corrections S11-01 and S11-02.**
   - The rational-roots test always carries "a, b, c rational".
   - Δ = 0 is always described as two equal roots.
10. **w05 shows no parabola.** The pack's optional parabola thumbnails are dropped so that w14 owns the graph meaning of Δ.
11. **Money contexts.** w05 (kayak price and takings, a quadratic) and the other designer's w13 (lemonade stall break-even, linear) are both money but carry different ideas. The later w19 (quadratic models, best value) should not reuse a price-demand takings model, or it should cite w05 as a callback.
12. **w06 opens on w05's unfinished inequality.** w06 does not depend on w05's content. If the playlist ever reorders them, only scene 1's first sentence and the opening frame change. The site's interval notation is left to w09.
13. **w07 adds scene 6a** (an original worked example: test a formula by making y the subject, where a ± is the warning sign). It follows the s01 `Na.` heading convention.
14. **w07 reuses Year 12 plates as snacks** (the s09 chip bag and the s10 apple). The anchor context (a vending machine) is new. I read this as plate reuse, not a shared anchor.
15. **The w07 to w08 join.** w07 ends on the machine with "f(A1) = chips" beside y = x² with "f(3) = 9 ?" and the chip "Next: f(x), the value of f at x". The existing `math-a11-w08.md` opens on "w07's final frame exactly" (its open decision 1) and shrinks "that frame's function picture" to the top left, so the two are compatible as written. I did not edit w08. Root confirms the frame when both are reviewed.
16. **Left out for p01 (functions practice).** These pack items are left out to keep one question per video:
    - −3² against (−3)² (w01);
    - the real-roots m inequality (w05);
    - dividing algebraic fractions, if it is cut from w02.

## Lengths (counted by script, build parser rules)

| Video | Characters | Scenes | Estimate with holds |
| --- | --- | --- | --- |
| w01 | 6,439 | 16 | about 561 s (closest to the cap; reserve trims listed) |
| w02 | 6,246 | 16 | about 547 s |
| w03 | 5,614 | 15 | about 499 s |
| w04 | 5,563 | 14 | about 496 s |
| w05 | 5,561 | 14 | about 495 s |
| w06 | 5,597 | 14 | about 498 s |
| w07 | 5,526 | 14 | about 493 s |

w04 to w07 first came in under 5,500 characters. Each was raised with real teaching, not padding:
- w04: the formula check;
- w05: the two-price trade-off, why a perfect square gives rational roots, the k = 6 check and the show-that reason;
- w06: why division by a negative also flips, and AT02 we-3 spoken;
- w07: scene 6a.

## Numbers

Every value on screen or in narration was recalculated with SymPy (scratchpad `checks.py` and `checks2.py`, 16 Nov) and is listed under each design's "Numbers to verify". All site worked examples used match the pack's recalculation.
