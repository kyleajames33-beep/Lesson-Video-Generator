# Designer decisions: Year 11 Maths Advanced w15 to w23 (Revision 1, 16 November 2026)

Written by the w15 to w23 designer (Claude) for root. The designs are `../lessons/math-a11-w15.md` to `math-a11-w23.md`. They follow the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern, the f01 and s01 models), root's rulings in `root-acceptance-maths-a11-w01-w14.md` (inputs blue and outputs teal across the strand; y = mx + c; cosec; the `ma11-` prefix; re-set site examples with unchanged numbers), the two earlier designer files (`root-decisions-maths-a11-w01-w07.md`, `-w08-w14.md`), the pre-design packs w15 to w23 (brief 243) and `../site-corrections-maths-a11.md`. None has had an independent review, maths check or voicing. Root confirms or overrules the calls below. The w24 to w31 designer worked in parallel; I did not edit their files, and I followed the w23 to w24 join they fixed in `root-decisions-maths-a11-w24-w31.md`.

## Anchors (one per video, unique)

| Video | Anchor | Category | Plates (new unless marked) |
| --- | --- | --- | --- |
| w15 vertex and axis | the light hammock from w14 (fixed opening); a park drinking fountain's jet for the maximum | backyard; park | reused `ma11-hammock-frame-high-v1` (w14 brief), `maths/ma12-cricket-grass-strip-v1`; new `ma11-drinking-fountain-v1` |
| w16 sketching and equations | a garden polytunnel hoop, 4 m wide and 2 m high | garden, growing food | `ma11-polytunnel-end-v1`, `ma11-polytunnel-hoop-v1` |
| w17 intersections | a golf chip up a straight bank; a second ball lobbed; an overhanging branch at 2.1 m | sport | `ma11-golf-bank-v1`, `ma11-golf-ball-v1`, `ma11-gum-branch-v1` |
| w18 quadratic inequalities | a club's hoodie fundraiser: P = (p − 20)(120 − 2p) ≥ 600 for $30 to $50 | money, club | `ma11-club-hoodie-v1`; reused `maths/ma12-swing-tag-v1` |
| w19 quadratic models | a food truck pricing trays of dumplings: best $15, $1280; profitable $7 to $23 | food, money | `ma11-food-truck-v1`, `ma11-dumpling-tray-v1`; reused `ma11-kayak-jetty-v1` (w05), `maths/ma12-concert-ticket-v1` |
| w20 cubics | an open tray folded from a 30 × 20 cm card: V = 4x(x − 10)(x − 15) | food packaging, craft | `ma11-card-sheet-cut-v1`, `ma11-card-tray-2-v1`, `-5-v1`, `-8-v1` |
| w21 y = k/x | a phone downloading a 600 MB update: t = 600/s | phones, data | reused `maths/ma12-phone-v1` (coded screen) |
| w22 direct variation | a car's braking distance, d = v²/200: 18 m at 60 km/h, 72 m at 120 | travel | `ma11-road-side-strip-v1`, `ma11-book-stack-v1`, `ma11-fabric-roll-v1`, `ma11-gobstoppers-v1`, `ma11-round-cake-v1`, `ma11-watermelon-v1`; reused `maths/ma12-used-hatchback-v1`, `ma11-taxi-side-v1` (w08) |
| w23 inverse variation | tiling a 6 m × 3.6 m floor: 540 tiles of 20 cm, 240 of 30 cm, 135 of 40 cm | home | `ma11-tiled-floor-empty-v1`, `ma11-floor-tile-20-v1`, `ma11-floor-tile-30-v1`, `ma11-office-printer-v1`, `ma11-water-jug-v1`; w24's `ma11-dartboard-v1` and `ma11-dart-v1` in the handoff |

24 new plates; 8 reused. No new plate name collides with w01 to w14's or w24 to w31's (checked against both designers' tables, 16 Nov).

**Checks made (16 Nov).**
- A grep of every `math-a12-*.md` and `math-a11-w01` to `w14` design for hammock, fountain, wok, polytunnel, greenhouse, hoop, BMX, dirt jump, golf, kite, hoodie, sprinkler, food truck, dumpling, takeaway tray, crate, download, vegetable patch, swim, braking, cake, streaming, tile, juice, gift and firework. Anchor matches: none. Near hits, read in context: Year 12 s01 names "a food truck's queue" only as a rejected alternative; d10 lists "the open box x(20 − 2x)²" as one drill item (not an anchor, and a calculus question); "braking" appears in Year 12 only as a plate note (d10) and a rejected idea (d16); "tiles" in Year 12 are calendar page tiles (s02) and UI tiles; i14's hallway is a timber floor for a robot vacuum.
- Against the w24 to w31 packs (as instructed) and then against that designer's chosen anchors once their file landed (dartboard, netball court, dominoes, sneakers with a sale and coupon, share e-bike, coin dryer, rail trail, jelly bean jar). No anchor repeats. The w24 to w31 designer rejected golf (w30), a garden sprinkler (w24) and a road tunnel (w25) because of my packs, which kept w17's golf, and removed the only overlap risk I had flagged.
- **Pack suggestions rejected, with reasons.** w15 wok (a > 0 duplicates the hammock). w16 BMX dirt jump (its profile is less clearly a parabola; next to d15's skateboard) and pizza-oven dome (w09 is pizza). w17 road cut through a hill (near w25's road tunnel) and kite (no natural line-parabola meeting). w18 garden sprinkler and road arch with a truck (both in the w24 and w25 packs). w19 merch-table T-shirt price (next to w18's hoodie) and phone-repair kiosk (a price-and-takings anchor, ruling 5; phones). w20 cube storage crate (w01 is a 3 × 3 × 3 block cube). w21 vegetable patch (garden is already w14 to w16) and swimming laps (whole lengths only). w22 streaming data (Year 12 d17 is video views); round cake kept as attempt 1. w23 group gift (next to Year 12 i04's fundraiser donations, 1000/t); juice kept as attempt 1 (a jug).

## Joins

| Join | Frame |
| --- | --- |
| w14 to w15 | the light hammock h = ¼x² − x + 1.5, "?" at the lowest point, dashed "axis?" (w14 scene 13, fixed) |
| w15 to w16 | the polytunnel end-on, feet "0 m" and "4 m", "2 m" at the top, dashed axis, "y = ?" |
| w16 to w17 | the golf bank and ball, dashed flight y = x − 0.1x², bank y = 0.2x, "?" where they meet, "Where does it land?" |
| w17 to w18 | the hoodie and swing tag, P = (p − 20)(120 − 2p), dashed level P = 600, "?" on the price axis |
| w18 to w19 | the food truck with "$p a tray", the dumpling tray, a hoodie badge "30 ≤ p ≤ 50 ✓", "best price?" |
| w19 to w20 | the cut card, the x = 5 tray, "V = x(30 − 2x)(20 − 2x)", "Three factors: a cubic" |
| w20 to w21 | the phone with "600 MB update", "t = 600 ÷ s", points (10, 60), (20, 30), (60, 10), two "?" |
| w21 to w22 | the hatchback on the road strip, "18 m at 60 km/h", dashed "? m at 120 km/h" |
| w22 to w23 | the floor with the 540-tile grid, the 30 cm tile, "30 cm: how many?" |
| w23 to w24 | as fixed by the w24 designer: the dartboard, the dart tip 6 cm right and 8 cm below the bullseye, dashed legs "6 cm" and "8 cm", "?" on the straight line, "Next: which points are exactly 10 cm from the centre?" and "?"; w23's floor badge small at the top left |

Each next video opens on the frame exactly, and each scene 14 returns to its scene 13 frame silently after the notes.

**Paint order (decision 49 precedent).** Each handoff plate must exist before the build of the video before it: the polytunnel before w15; the golf bank and ball before w16; the hoodie before w17; the food truck and dumpling tray before w18; the cut card and the x = 5 tray before w19; the road strip before w21; the floor and the 30 cm tile before w22; w24's dartboard and dart before w23. Every asset brief states its "before the wNN build" line.

## Calls that need root's confirmation

1. **Root ruling 5 and the w19 route (w19).** Ruling 5 notes "no price-and-takings model" for w19, but the route's stop boundary requires "revenue as price times quantity when quantity depends on price", and site `we-3` is exactly w05's kayak model (p(40 − 2p), $10, $200). The anchor is a profit model with costs, a practical domain, a profitable range and a price cap (beyond w05's takings question), and `we-3` is used as a stated callback ("the kayak model from the discriminant video"), as the w01 to w07 designer's call 11 suggested. Attempt 1 (the pack's cinema) is also price × quantity.
2. **Two profit-at-a-price models in a row (w18, w19).** w18's anchor had to be the hoodie fundraiser: its pack's two other anchors (a sprinkler, a road arch with a truck) sit in the w24 and w25 packs. w18 gives its model and asks only an inequality; w19 builds its model and asks for the best value. The w18 handoff makes the link a reason to continue ("which price is best, and where does the model come from?").
3. **Near contexts, judged distinct.** (i) w18's hoodie with the reused swing tag and w27's sneakers with the same swing tag: clothing price tags, but a profit inequality against composed discounts. (ii) w21's phone download against Year 12's four phone anchors and the phone plate reused in w28 and w31: plate reuse, a new idea. (iii) w22's braking car against Year 12's cars (d08, d14, d19): the hatchback plate is reused (ruling 6); braking distance is a new idea. (iv) w20's card tray against d10's "open box" drill item. (v) w16's polytunnel arch against i12's footbridge arch (even symmetry) and w14's hammock (the same garden setting, a different object).
4. **Site examples re-set with numbers unchanged (ruling 9 precedent).** w23: lesson21 `we-1` and `we-2`'s painters become identical printers (no people drawn): k = 24 printer-hours, 3 hours, 12 printers. No other site example is re-set.
5. **Site corrections applied.** S11-05 (w16: the inconsistent identity on lesson16 card 05 is not used). S11-09 (w20: y = kx³ taught as the other syllabus form; no translated cubic and no "point of inflection"). S11-10 (w19: no "MAV-11-01"). S11-04 (w19: p − 5 is "what the truck keeps on each tray after that tray's own cost", never "profit per tray").
6. **One pack finding not yet logged (root decides).** w17's pack: lesson16's key term "Tangent to a curve: a line meeting a curve at exactly one point" is too broad. w17 says "for a parabola, a non-vertical line that meets it exactly once". Suggested log text is in the w17 pack, section 8.
7. **Site gaps filled with original teaching (crosswalk partials).** w17: two parabolas (golf chip and lob, then the x² terms cancelling) and a graphical f(x) = k count. w18: the repeated-root case and the square-root trap. w19: a capped price that puts the vertex out of reach. w20: kx³ with a k slider; recognising a cubic's equation from its graph. w22: n = 2 (braking) and n = 3 (gobstopper; watermelon attempt). w23: n = 2 (tiles; attempt 2).
8. **Attempt contexts changed from the packs.** w19 A2: the pack's food-truck dumplings become a bakery stall's muffin batches (the truck is the anchor; numbers kept). w22 A2: an original n = 3 backwards question (the pack's braking-backwards question is taught in scene 5). w23 A1: the pack's juice anchor as a jug question that rounds down (the pack's floor-tile question is the anchor itself).
9. **Second plate in w15.** The fountain adds one plate for one scene (the a < 0 maximum). Root may drop it; the fallback (a coded jet) is weaker against the standard.
10. **w22 small plates.** Books, fabric, gobstoppers, cake and melon are worked-example and question pictures. Root may cut books and fabric to coded picture slots if the plate budget is tight.
11. **Spoken notation for the voice pilot.** "nought point one" (w15, w17), "nought point nought nought one" (w21) and "nought point nought nine" (w22) follow w10's open choice; "minus b over two a" (w15, w16); "k x to the n" (w22, w23); "cube root" (w22); "union", "infinity" (w18, w21); "printer-hours" (w23).
12. **w19 and w18's open thread.** The hoodie's best price ($40, $800) is shown only as "best price?" in w18 and is not answered in w19, to keep the hook short. Root may ask for one sentence in w19 scene 1.
13. **Shared syllabus points.** `ci52779ff4` and `ci70194fe3` are quoted in full in both w22 and w23; each video covers its own half (direct, inverse), as the outline notes.

## Kit needs (proposed rows for `maths-a11-kit-needs.md`, not edited here)

- w15: `SquareReadout` (rider, amber bar for (x − h)², teal height, vertex lock, mirror pairs); `AlgebraTileGrid` `CompleteSquareTiles` mode (from w04); a plate-overlay transform for the fountain.
- w16: `FeatureChecklist` (features land one at a time, curve last); `FamilyFan` (live family with ghosts that locks through a target point).
- w17: `LevelLine` (y = k with computed meeting dots and Δ); `CrossingCounter` `line` mode (w14's part); a difference curve; `ScreenApp` intersection tool (w13).
- w18: `SignSweep` (rider, signed stalk, live number-line shading, open or closed circles); a flip morph tied to the inequality glyph.
- w19: `PriceProfitRig` (price slider, two bars, product rectangle, fixed-cost strip, readout, drawn curve, cap wall); a menu-board text slot.
- w20: `SignWalk` (bracket chips flipping at their roots, product chip, curve drawn teal or grey); `FamilyFan` `morph` mode; tray plate cross-fades.
- w21: `BranchRider` (y = k/x rider with a ÷ 0 barrier and one rescale); a phone screen slot.
- w22: `BrakingRig` (lesson folder); `DoublingLadder` (direct and inverse columns).
- w23: `TileSwap` (lesson folder); `EqualAreaRect`; `DoublingLadder` inverse columns.

## Lengths (counted by script, build parser rules)

| Video | Characters | Scenes | Estimate with holds |
| --- | --- | --- | --- |
| w15 | 6,169 | 15 (with 7a) | about 553 s (closest to the cap; reserve trims listed) |
| w16 | 5,698 | 14 | about 515 s |
| w17 | 5,587 | 14 | about 507 s |
| w18 | 5,572 | 14 | about 506 s |
| w19 | 5,805 | 14 | about 523 s |
| w20 | 5,699 | 14 | about 515 s |
| w21 | 5,569 | 14 | about 506 s |
| w22 | 5,660 | 14 | about 513 s |
| w23 | 5,598 | 14 | about 508 s |

w17, w18, w20, w21 and w23 first came in under 5,500 and were raised with teaching, not padding: w17 the graphical method with a graphing app and a check in the second equation; w18 a test value and the model's domain; w20 the memory aid's meaning; w21 the meanings of → and ∞ and what both asymptotes mean for the download; w23 the printers' "three times as many, a third of the time", the tiles on the inverse ladder, and k as the floor. w15 is the longest (it carries both syllabus points and an extra derivation scene); its two reserve trims bring it to about 535 s.

## Numbers

Every value on screen or in narration was recalculated with SymPy 1.14 (scratchpad `w15w23/verify.py`, 85 checks, none failing, 16 Nov) and is listed under each design's "Numbers to verify". All site worked examples used match the packs' recalculations. No em dash appears in any of the nine files or this one (checked by script), and every bold cue in the narration is quoted in its scene's Visual (checked by script).

## Self-grades (designer's estimate against the 16-frame rubric, before any build)

| Video | Grade | What would lift it |
| --- | --- | --- |
| w15 | A− | Scene 7's derivation is full-width algebra; a small general tile picture beside it (a² tile, b/a strips) would keep a picture on screen. Length is near the cap. |
| w16 | A− | Scene 6's "at most two zeros" reason is abstract; a two-panel picture (two different parabolas agreeing at only two points) would carry it. |
| w17 | A | The golf plate returns in four scenes with three live simulations. A voiced check of scene 5's density (two simulations in one scene) may split it. |
| w18 | A− | The hoodie plate is on screen in 1, 4 and 13 only; scenes 2, 3, 5 to 7 rely on the sign sweep. A small hoodie badge carrying the current inequality in each scene would add the anchor without clutter. |
| w19 | A | The truck carries most frames; the risk is scene 2's model card reading as text. Slots flying in from the plate (as w12's `ModelCard`) keep it moving. |
| w20 | A− | Scenes 2, 3, 5 to 7 are coded graphs; a tray thumbnail tied to the current cubic's sign would help, but must not pretend that y = x³ is a tray. |
| w21 | B+ to A− | Only one reused plate, and teaching scenes 2 to 6 are coded. A phone badge whose download time mirrors the current rider (k = 600 scaled) in each scene, or a second painted object (a router), would lift it. |
| w22 | A− | Scenes 2 to 4 (n = 1) are board-heavy; the painted books and fabric help. The braking rig is strong. |
| w23 | A− | Scene 4's table and rectangles are coded; a small tile badge could show the same equal-area idea with real tiles (one 30 cm tile = 2.25 small ones), linking it to the anchor. |

## Open questions for root

1. Ruling 5 against the w19 route (call 1), and the two profit-at-a-price videos in a row (call 2).
2. The near-context judgements (call 3), especially the hoodie and sneakers sharing the swing-tag plate in w18 and w27.
3. Whether to log the w17 tangent wording as a site correction (call 6).
4. The extra plates: w15's fountain (call 9) and w22's five small pictures (call 10).
5. The decimal wording "nought point" across w15, w17, w21 and w22 (call 11), to match whatever w10's voice pilot settles.
6. Whether w19 should close w18's thread with the hoodie's best price (call 12).
