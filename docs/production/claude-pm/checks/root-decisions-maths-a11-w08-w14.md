# Designer decisions: Year 11 Maths Advanced w08 to w14 (Revision 1, 16 November 2026)

Written by the w08 to w14 designer (Claude) for root. The designs are `../lessons/math-a11-w08.md` to `math-a11-w14.md`. They follow the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern, and the f01 and s01 models), the root rulings in `root-decisions-maths-redesign.md`, `root-decisions-maths-d05-d10.md` and `root-decisions-maths-d11-i05.md`, the pre-design packs (brief 243) and `../site-corrections-maths-a11.md`. None has had an independent review, maths check or voicing. Root confirms or overrules the calls below. The w01 to w07 designer's file is `root-decisions-maths-a11-w01-w07.md`.

## Anchors (one per video, unique)

| Video | Anchor | Category | Plates (new unless marked) |
| --- | --- | --- | --- |
| w08 f(x) and substitution | a taxi fare meter, C(d) = 5 + 1.8d (the site's own example) | travel and money | `ma11-taxi-side-v1`, `ma11-taxi-meter-v1`, `ma11-city-road-strip-v1`, `ma11-bowling-pins-v1` (A2) |
| w09 domain and range | a pizza cut into n equal slices, slice angle 360 ÷ n | food | `ma11-pizza-top-v1` |
| w10 equation of a line | an accessible entrance ramp, the 1 in 14 rule | design and building | `ma11-entrance-ramp-v1` |
| w11 intercepts, parallel, perpendicular | a town's street map from above, main roads as axes | town planning | `ma11-town-blocks-top-v1` |
| w12 linear models and inequalities | a gym membership, $60 to join and $25 a month (the site's own example) | fitness and money | `ma11-gym-membership-card-v1`, `ma11-kettlebell-v1`, `ma11-flatbed-trolley-v1`, `ma11-weights-box-v1`, `ma11-go-kart-v1` (A1), `ma11-water-tank-v1` (A2) |
| w13 break-even and simultaneous lines | a weekend-market lemonade stall (the site's own numbers) | small business, food | `ma11-lemonade-stall-v1`, `ma11-lemonade-cup-v1`, `ma11-trade-van-v1`, `ma11-swim-goggles-v1` (A1), `ma11-tshirt-v1` (A2) |
| w14 zeros and the discriminant | a hammock on a freestanding frame: clears, touches or drags on the grass | backyard leisure | `ma11-hammock-frame-high-v1`, `-touch-v1`, `-drag-v1`; reused `maths/ma12-cricket-grass-strip-v1` |

21 new plates in all; one reused. No plate name collides with w01 to w07's (checked 16 Nov).

**Checks made (16 Nov).**
- Every Year 12 Maths anchor in `root-decisions-maths-redesign.md` decisions 1 to 66, plus a grep of all `math-a12-*.md` files for taxi, pizza, ramp, wheelchair, gym, hammock, lemonade, market stall, street grid, city block, street map and kayak. No match except "ramp", which appears only as t02 and t03's boat-ramp tide board (a different object and idea) and as rejected laboratory ramps.
- Against the w01 to w07 packs' suggested anchors (avoided while the other designer worked) and then against their chosen anchors once their files landed: toy blocks, chocolate block, softball diamond, rug, kayak hire, prepaid travel card, vending machine. No repeat.
- **Near contexts, judged distinct (root to confirm).** (i) w08's taxi fare and w06's prepaid travel card are both travel money, but the objects and ideas differ (a meter adding to a fare as distance grows, against a card balance falling per trip). (ii) w13's lemonade stall and w05's kayak hire both involve takings, but w05 is a quadratic revenue for the discriminant and w13 is linear cost against revenue; the w01 to w07 designer's call 11 says the same. (iii) w14's hammock and Year 12's i12 stone footbridge arch are both curves over the ground, but i12 teaches even symmetry and w14 teaches zeros and position.
- **Pack suggestions rejected, with reasons.** w08 phone plan (phones are d03, i03, t04, f14) and café loyalty card (weaker f(0) meaning than the taxi's flag fall). w09 phone battery (phones), bill split (close to w02's suggested group booking), youth ticket (domain only, no range). w10 road sign (road context; w06's pack suggested a speed sign) and two taxi trips (the taxi is w08's). w11 park shortcut (close to i12's garden path) and fuel gauge (no perpendicular lines). w12 phone battery and ride-share (phones; the taxi). w13 streaming or phone plans (d17's laptop views, phones) and electricians as the anchor (kept as a second worked example instead). w14 skate ramp (d15's skateboard), bakery profit (w13 just did break-even), netball pass (carries zeros but never "wholly above").

## Joins

- **w07 to w08 (resolved).** w07 ends on its vending machine with "f(A1) = chips", y = x² with (3, 9), "f(3) = 9 ?" and "Next: f(x), the value of f at x" (w07 scene 12). w08 scene 1 now names that frame exactly, keeps w07's colours and says "we started writing f of three for the one output that three gives", so w08 scene 2 does not present the notation as brand new. I edited only w08.
- **w08 to w14.** Each final frame shows the next video's anchor, and each next video opens on it exactly: w08 ends on the machine refusing d = −5 (taxi) and n = 0 (pizza); w09 on the ramp with A(2, 0) and D(9, 0.5); w10 on the town map with 2x + 3y = 12 and a dashed cross street at (3, 2); w11 on the gym card and kettlebell with empty axes; w12 on the lemonade stall with two faint lines; w13 on the profit line's zero at n = 100 and the hammock; w14 on the light hammock with "?" at its lowest point and a dashed "axis?" line.
- **w14 to w15.** w15 (not in this batch) should open on w14 scene 13's frame: the light hammock h = ¼x² − x + 1.5, whose vertex (2, 0.5) and axis x = 2 it can find by completing the square. The numbers are clean for that.
- **Paint order (decision 49 precedent).** Each handoff plate must exist before the build of the video before it: the pizza before w08; the ramp before w09; the town map before w10; the gym card and kettlebell before w11; the lemonade stall before w12; the high hammock before w13.

## Calls that need root's confirmation

1. **Colour roles at the joins.** w08 and w09 keep w07's inputs blue and outputs teal (w08 originally used amber inputs; changed on reading w07). w10 to w14 each fix their own roles for their own ideas (w10 run amber and rise blue; w11 x-intercepts amber and y-intercepts blue; w12 independent amber, dependent blue, fixed teal, rate violet; w13 cost violet, revenue blue, profit teal, loss grey; w14 zeros amber, f(0) blue, Δ violet, a teal). Each opening describes the frame it inherits, per root decision 17. Root may prefer one strand-wide input and output pair; if so, w10 to w14 need a colour pass only (no narration change).
2. **Re-contexting with the site's numbers unchanged (decision 38 precedent).** w12: lesson 18 `we-3`'s fish pond becomes a gym class pass (P = 500 − 20t), and lesson 3 `we-3`'s lift becomes a gym delivery trolley (30 + 15n ≤ 480); lifts belong to i10 (decision 28). w13: lesson 19 `we-1`'s drinks become cups of lemonade. Numbers and answers are unchanged.
3. **Site corrections applied.** y = mx + c, not the site's y = mx + b (w10, w11; a single grey tag in w10 names the site's form). S11-04: w13 says "$8 on each item after that item's own costs", never "profit per item". S11-03 (the taxi-budget check line) does not arise: that example is not used.
4. **Site examples left out or folded in, with reasons.**
   - w08: `we-l02-1`'s f(−1) = 6 is not repeated (scene 5 already teaches a negative input); `we-l02-3` (difference quotient) is deferred to c06 per the route.
   - w09: `we-l03-3`'s vertex formula x = −b/(2a) is replaced by completing the square (w04), since the formula is w15's.
   - w10: lesson 9 `we-2` and `we-3` are covered by scene 5's conversions of the ramp's own line and by attempt 2; lesson 10 `we-3` (collinearity) is done on the ramp's foot, handrail post and doorway.
   - w12: lesson 3 `we-1` (taxi budget) is not used, because the taxi is w08's anchor; its rounding idea is carried by the gym budget (9.6 to 9 months).
   - w13: lesson 18 `we-2` keeps its electricians as a worked example (not an anchor), because the graphing-app demonstration needs a non-whole crossing (10/3).
   - w14: all three site examples are used (`we-2` as its own short counting scene with the squared-negative slip).
5. **Additions beyond the site's examples, for full coverage.**
   - w08 adds f(a + 1) = 2a² + a (for "algebraic expressions") and the taxi's C(d + 1) against C(d) + 1.
   - w09 adds the range [0, ∞) to `we-l03-2`.
   - w13 adds a by-hand graph reading and a graphing app's intersection tool (`ci83587815` asks for both, and the site lacks them, per the crosswalk).
   - w14 defines a zero first on w13's linear profit function, filling the crosswalk's gap ("zero taught only through parabola intercepts").
6. **Attempt contexts changed from the pack, numbers kept where possible.**
   - w08 A2: a bowling alley, C(g) = 6 + 9g (the pack's phone plan avoided). Fallback with the pack's numbers in w08 open decision 4.
   - w12 A1: go-kart laps for ride-share kilometres (the taxi is w08's; laps also force whole-number rounding).
   - w12 A2: a garden water tank, V = 84 − 6t (the pack's numbers). The pack's phone battery was avoided; a prepaid gift card was drafted, then replaced, because w06's anchor is a prepaid travel card.
   - w13 A1: two public pools for the pack's streaming services (the numbers kept).
7. **w10 vertical scale × 4.** The ramp's 1 in 14 is too flat to read at equal scale, so the coded plot stretches its vertical axis by 4 and says so on screen. w11 then insists on equal scales for right angles; the w10 tag is the bridge. The learning review judges it (w10 open decision 4).
8. **w11 map plate painted to geometry.** The town plate is painted to three street centrelines at equal scale (200 px per 100 m block). If Codex misses by more than 1 per cent, the coded streets fit the measured points (decision 30). Root confirms this is worth the painting effort.
9. **w14 hammock painted to a profile table.** Three plates share identical framing and are painted to h = a·x(x − 4) + 1.5 for a = 1/4, 3/8 and 1/2 (table in w14's asset brief). The parabola is a stated model; the real hammock lies on the grass where the model dips below zero.
10. **Lengths sit near the floor.** All seven designs are between 5,585 and 5,995 characters and about 508 to 535 s. Four first came in under 5,500 (w10, w12, w13, w14) and were raised with teaching: w10 the reversed-order check and the second-point check; w12 units, the credits range, where rounding comes from, and why an exact limit still needs a check; w13 "revenue isn't profit" and "a fixed charge plus a rate is a line"; w14 the site's `we-2` counting scene. Several have only one reserve trim (or none, w11) because a second would cross the floor.
11. **Spoken notation for the voice pilot.** "C of, d plus one" against "C of d, plus one" (w08); "union" and "infinity" (w09); "nought point five" (w10, match the course choice); "m one", "m two" (w11); "delta" (w14, after w05 fixes it).

## Kit needs (from `maths-a11-kit-needs.md`, with the parts each design specifies)

- w08: `FunctionMachine` (slots, bracket on and off, refuse, post-add) and a taxi drive rig on `FunctionRider` and `PlateReadout`.
- w09: `AxisShadow` (lamp, two shadows, end dots), `NumberLineRay` if w06's build has not added it, and a pizza cutter (coded sectors from the plate's sidecar).
- w10: no new part; `fixedStart` on `StudioTangentTriangle` and an "× 4" label on `StudioPlot`.
- w11: an `equalScale` check and `skewDemo` on `StudioPlot`, `LockedPair` and a map overlay registered to the plate's sidecar.
- w12: `ModelCard` (amounts fly into slots), `DotModel` (dots against limit lines) and a load gauge with `SpriteStack`.
- w13: `RegionLabels` (switching at the computed crossing, drawing with a rider) and an intersection tool in `ScreenApp`.
- w14: `CrossingCounter` with `shift` and `sag` modes and plate cross-fades by state.

## Lengths (counted by script, build parser rules)

| Video | Characters | Scenes | Estimate with holds |
| --- | --- | --- | --- |
| w08 | 5,995 | 14 | about 535 s |
| w09 | 5,650 | 14 | about 511 s |
| w10 | 5,638 | 14 | about 509 s |
| w11 | 5,585 | 14 | about 508 s |
| w12 | 5,659 | 14 | about 513 s |
| w13 | 5,624 | 14 | about 511 s |
| w14 | 5,713 | 14 | about 520 s |

## Numbers

Every value on screen or in narration was recalculated with SymPy 1.14 (scratchpad `w08w14/verify.py`, 16 Nov) and is listed under each design's "Numbers to verify". All site worked examples used match the pack's recalculation. No em dash appears in any of the seven files or this one.

## Open questions for root

1. The colour-role choice at the joins (call 1).
2. The near-context judgements: taxi against travel card, stall against kayak hire, hammock against footbridge arch.
3. Whether the w11 map plate should be painted to geometry or replaced by a coded street map over a painted rooftop texture (call 8).
4. The w14 title: 91 characters, with a 63-character alternative.
5. Site link choices where a video draws on two site lessons (w08, w10, w12, w13): each description links the lesson that holds the anchor's numbers.
