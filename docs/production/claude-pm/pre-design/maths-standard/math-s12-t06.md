# math-s12-t06: How does the sine rule find a missing side in any triangle?

Maths Standard research pack (Year 12, Trigonometry), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Trigonometry):

- `ci26620302`: Apply the sine rule a/(sin A) = b/(sin B) = c/(sin C) in a given triangle ABC to find the value of an unknown side [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa6dd765ae). Site coverage: covered.

Standard 1: no matching point (Standard 1 has no non-right-angled trigonometry). This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Playlist order 56 (ruling 46 positions). Standard 1 viewers left the strand at t05.

**Entry knowledge:** math-s12-t01: `ci74344e24` (sin of an angle as a number from the calculator; labelling sides from an angle); angle sum of a triangle, 180° (Stage 4, recalled in a phrase); math-s11-f03: `cib54d5e23` (changing the subject, if the unknown is set underneath).

**Prior video:** math-s12-t05 (its Standard 2 panel).

**Start:** t05's left panel: a river with a tree on the far bank, a coded 500 m baseline PQ on the near bank and two angle arcs (60° at P, 85° at Q), "no right angle: how far?" (the site lesson06 hook).

**Stop:** Naming a triangle's sides and angles (capital letters for angles, lower case for sides, side a opposite angle A); the sine rule a/sin A = b/sin B = c/sin C in words ("each side over the sine of the angle opposite it gives the same number"); the matched pair (a side and the angle opposite it, both known) that starts the rule; finding a side with the unknown on top (b = a sin B ÷ sin A); finding the third angle first when the known side's opposite angle is missing; the checks (the bigger angle faces the bigger side; the two products agree). Finding an angle is t07. Why the rule is true is optional: one picture (a perpendicular height written two ways), no proof required.

**Next:** math-s12-t07.

## 2. Site order, sections and worked examples

Read-only source: [trigonometry/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/trigonometry/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `838dc6e4c296b0ab2fbc03de12083acee190e4cbd7b5d30b306856eadeb46f13`. Sections used: `orient-to-the-sine-rule` (cards 01, 02, 04), `choose-the-arrangement` (card 05, the side arrangement and the quick check), `work-three-sine-rule-examples` (`we-1`, `we-2`), `avoid-the-sine-rule-traps` (traps 01, 02), `drill-the-sine-rule` (drills 1, 2, 4, the matching task), `revisit-the-sine-rule`, `practise-the-sine-rule` (Q1, Q3). The angle parts (`we-3`, drills 3 and 5, Q2) are t07's.

### Source lesson06, cards 01, 02 and 04

Hook: "A surveyor needs the distance across a river. She cannot walk across it. Standing on one bank she measures a baseline of $500\text{ m}$ and two angles. No right angle anywhere. Can she still find the distance?" Card 02: "Everything you have used so far, SOH CAH TOA and Pythagoras, needs a right angle. The sine rule needs none." "Labelling convention. Capital letters are the angles, lower-case letters are the sides, and side $a$ is always the side opposite angle $A$. Getting this pairing right is most of the work." "You need a matched pair. The rule only starts if you know one side AND the angle opposite it." "Finding a SIDE: Put the unknown side on top: $b = \dfrac{a\sin B}{\sin A}$." "Angles add to 180: If the question gives two angles, the third is free". Key term: "Matched pair: A side and the angle opposite it, both known. Like this: knowing $a = 9$ and $A = 35°$ is a matched pair, but knowing $a = 9$ and $B = 35°$ is not".

### Source lesson06, `we-1` and `we-2`

`we-1`: "In triangle $ABC$, $A = 40°$, $B = 75°$ and $a = 12$. Find $b$" ("$b = \dfrac{12 \times 0.965926}{0.642788} = \mathbf{18.03}$"; "Also $b > a$ because $75° > 40°$, the bigger angle faces the bigger side."). `we-2`: "In triangle $ABC$, $A = 52°$, $B = 61°$ and $c = 20$. Find $a$" ("The known side is $c = 20$, but $C$ is not given. There is no matched pair yet."; "$C = 180° - 52° - 61° = 67°$"; "$a = \dfrac{20\sin 52°}{\sin 67°} = ... = \mathbf{17.12}$").

### Source lesson06, traps, drills, revisit and SA

Trap 01: "Using $a$ with $B$ because they appear together in the question produces a confident, wrong number with no warning sign." Trap 02: "If the known side has no known opposite angle, the rule cannot start. Find the third angle with $180° - A - B$ first." Quick check: $A = 30°$, $B = 45°$, $a = 10$ (14.14). Drills 1, 2, 4: 11.31, 13.89, 13.34. Revisit: "$R = 180° - 60° - 85° = 35°$", "$QR = \dfrac{500\sin 60°}{\sin 35°} ... \approx \mathbf{755\text{ m}}$", "She never crossed the river, and there was never a right angle. One matched pair was enough." Q1: "$A = 63°$, $C = 47°$ and $b = 24$. Find $c$" (18.68). Q3: a surveyor at P sights Q on 040°T and R on 100°T, PQ = 500 m, angle PQR = 85° (755 m).

## 3. Recalculation

- `we-1` 18.0326, so 18.03; `we-2` 17.1213, so 17.12; quick check 14.1421, so 14.14 (option C); drills 11.3052, 13.8945, 13.3410, so 11.31, 13.89, 13.34; revisit and Q3 754.9346, so 755 m; Q1 18.6790, so 18.68.
- Question 1: C = 48°; BC = 32 sin 58° ÷ sin 48° = 36.5172, so 36.52 m (AC = 41.39 m). Question 2: apex 95°; the rafter opposite 50° = 9.6 sin 50° ÷ sin 95° = 7.3821, so 7.38 m; opposite 35° = 5.5274, so 5.53 m; slip 9.6 sin 50° ÷ sin 35° = 12.82 m.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-t/recalc.py`, `recalc_pack.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Pairing a side with an angle next to it, not opposite it.
- Starting without a matched pair (needs the third angle first).
- Writing the unknown underneath and rearranging wrongly (put the unknown on top from the start).
- Calculator in radian mode; rounding sines early.
- A side that breaks "the bigger angle faces the bigger side" (a sign of a wrong pairing).
- Using SOH CAH TOA in a triangle with no right angle.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The river top view: baseline, two angle arcs, a dashed line to the tree; a "no right angle" tag with a crossed right-angle box.
- Pair colours: each side and its opposite angle share a colour (a and A amber, b and B violet, c and C teal); an arrow from each angle across the triangle to its side.
- The rule as three equal fractions with a "same number" meter (each side ÷ sine of its angle reads 18.67 on all three for `we-1`'s triangle), then the two-fraction working with the unknown on top.
- The third-angle step as an angle-sum bar (52 + 61 + ? = 180).
- Optional "why": a perpendicular height h dropped inside the triangle, written as b sin A and as a sin B, so a/sin A = b/sin B.

Advanced reuse (visual parts only): `StudioTriangle` with `pairs` (side-and-opposite-angle colours), `triSAS` or a free shape, `drop` with `split` (the optional height) and `angles` (a11-trig-triangle.tsx). Plates: a river bank with a tree (new `ms12-` plate, top view, ruling 17: painted for t05's final frame); `ma11-fire-towers-v1.png` is Advanced t05's anchor and is not used; the house (t01) for the roof truss in Question 2. Kit needs: a **ratio meter** (a small readout showing side ÷ sin(opposite angle) for each pair, all equal), a readout option on StudioTriangle; small.

## 6. Two original candidate practice questions

### Question 1

A triangular corner block ABC has a straight front boundary AB of 32 m. The side boundaries meet the front at angles of 58° at A and 74° at B. Find the length of the side boundary BC, correct to two decimal places.

**Worked answer:** C = 180° − 58° − 74° = 48°, and AB = 32 is opposite C, so the matched pair is 32 with 48°. BC is opposite A (58°): BC = 32 sin 58° ÷ sin 48° = 36.52 m.

### Question 2

A roof truss is a triangle with a horizontal base of 9.6 m. One rafter rises from the base at 35° and the other at 50°. Find the length of the longer rafter, correct to two decimal places.

**Worked answer:** The angle at the top is 180° − 35° − 50° = 95°, opposite the 9.6 m base: the matched pair. The longer rafter faces the larger base angle, 50°: length = 9.6 sin 50° ÷ sin 95° = 7.38 m.

Only the question goes on the card (with a sketch for Question 2). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "9.6 sin 50° ÷ sin 35° = 12.82 m", crossed, "9.6 is opposite the top angle, 95°, not 35°"; for Question 1: "32 sin 74° ÷ sin 58°", crossed, "find C first: 32 faces 48°"). Answers were checked with SymPy.

## 7. Everyday anchors

- **The distance across a river** to a tree on the far bank, from a measured 500 m along the near bank (outdoors; the site's own hook, so the video mirrors it).
- **A triangular corner block** on a real-estate plan: the front boundary is measured, the side boundary is not (housing; the same block returns in t09 for its area).
- **An uneven roof truss:** rafters rising at 35° and 50° over a 9.6 m span (building; a callback to t01's 35° roof with no right angle in sight).

Varied everyday contexts (outdoors, housing, building). Repeat check (grepped 18 November 2026): Advanced t05's anchor is two fire lookout towers sighting smoke and a garden bed, t07's a highway through a phone tower's range; "river", "corner block" and "roof truss" have no maths design hits ("creek" appears in r07 and r08 as a land boundary). Claude picks; none is required. Objects, never people (the site's surveyor stays in the words of the question, never drawn).

## 8. Site corrections and decisions for Claude

No new error in the parts of lesson06 used here.

Decisions for Claude:

- **Lead with the matched pair:** the site's strongest idea ("One matched pair was enough"); colour pairing makes it visible before any formula.
- **Unknown on top:** use only the side arrangement here (the site's card 02 "Finding a SIDE"); the flipped form waits for t07.
- **Proof:** optional one-scene picture (the height two ways), labelled "why it works", not examined; cut first if the design runs long.
- **Join:** opens on t05's left panel (the river), which is the site's hook; the revisit's 755 m answers it in the worked example.
- **Pace: fits** (7 to 8 minutes).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
