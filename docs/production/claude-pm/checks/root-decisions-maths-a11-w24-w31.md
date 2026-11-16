# Designer decisions: Year 11 Maths Advanced w24 to w31 (Revision 1, 16 November 2026)

Written by the w24 to w31 designer (Claude) for root. The designs are `../lessons/math-a11-w24.md` to `math-a11-w31.md`. They follow the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern), root's rulings in `root-acceptance-maths-a11-w01-w14.md` (inputs blue and outputs teal across the strand; y = mx + c; the `ma11-` prefix), the pre-design packs w24 to w31 (brief 243) and `../site-corrections-maths-a11.md`. None has had an independent review, maths check or voicing. Root confirms or overrules the calls below. The w15 to w23 designer works in parallel; I did not open or edit their files.

## The w23 to w24 join (fixed early, for the w15 to w23 designer)

w24 opens on w23's final frame. w24 scene 1 expects that frame to contain:

- **The painted dartboard** `ma11-dartboard-v1.png`, face-on, about 640 px across, at the right half of the frame (its bullseye at about x = 1,300, y = 520 on the 1920 × 1080 frame).
- **One painted dart** `ma11-dart-v1.png`, its tip placed by code (sidecar tip point) at **6 cm right of and 8 cm below the bullseye** (board scale: the board's coded treble wire is a 10 cm circle).
- **Coded marks on the board:** a dashed horizontal leg "6 cm" from the bullseye, a dashed vertical leg "8 cm" down to the tip, and a red-pencil "?" on the straight line from the bullseye to the tip.
- **A chip** "Next: which points are exactly 10 cm from the centre?" and a "?" chip. The chip wording may be w23's choice; w24 scene 1 names whatever w23 shows and then fades it.

Nothing else on that frame is required by w24. w23's own content may stay small at the left (w24 fades it on its first sentence). The dartboard and dart plates are in w24's Codex asset brief and must be painted before the w23 build. If w23 cannot end there, w24 opens cold on the same frame and its narration is unchanged (w24 open decision 1).

## Anchors (one per video, unique)

| Video | Anchor | Category | Plates (new unless marked) |
| --- | --- | --- | --- |
| w24 circle x² + y² = r² | a dartboard and its darts; the dart at (6, −8) on the 10 cm wire | games | `ma11-dartboard-v1`, `ma11-dart-v1` |
| w25 semicircles | a netball court from above; the 4.9 m goal circles | sport | `ma11-netball-court-top-v1` |
| w26 even and odd | three upright dominoes (1|4, 3|3, 1|2), mirrored and half-turned | games | `ma11-domino-1-4-v1`, `-3-3-v1`, `-1-2-v1` |
| w27 composite functions | $120 sneakers with a 20% off sale and a $10 coupon ($86 against $88) | money, shopping | `ma11-sneakers-v1`, `ma11-coupon-v1`; reused `maths/ma12-swing-tag-v1` |
| w28 piecewise functions | a share e-bike: $3 for the first 20 minutes, then 50c a minute | travel | `ma11-share-ebike-v1`; reused `maths/ma12-phone-v1` |
| w29 continuity | a laundromat coin dryer: $2 for each 10 minutes or part of 10 minutes | home, money | `ma11-coin-dryer-v1` |
| w30 absolute value | a rail trail with kilometre posts from an old station | travel, leisure | `ma11-rail-trail-v1` |
| w31 |ax + b| graphs and equations | a fete jelly bean jar of 350; guesses exactly 20 off | games, food | `ma11-jellybean-jar-v1`; reused `maths/ma12-phone-v1` |

12 new plates; 2 reused. No plate name collides with w01 to w14's (checked 16 Nov).

**Checks made (16 Nov).**
- A grep of every `math-a12-*.md` and `math-a11-w01` to `w14` design for dart, dartboard, netball, court, domino, sneaker, shoe, coupon, voucher, sale price, GST, e-bike, bike share, dryer, laundromat, washing machine, rail trail, km post, jelly bean, fete and toll: no anchor match. Two near hits, judged distinct: "netball" appears in w14 only as a rejected pack suggestion (a netball pass), and "scooter" in Year 12's d15 is a passing mention in its skateboard anchor.
- Against the w15 to w23 pack suggestions (the parallel designer's pool): none of my anchors appears. I rejected three of my packs' suggestions because they sit in that pool or next to it: w24's garden sprinkler (w18's pack suggests a garden sprinkler), w25's road tunnel with a truck (w18's pack suggests a truck under a parabolic road arch), and w30's golf score against par (w17's pack suggests golf).
- **Other pack suggestions rejected, with reasons.** w24 Bluetooth speaker (phones are Year 12's d03, i03, t04, f14; no speaker plate). w25 garden gate and protractor (upper half only). w26 playing cards (court cards carry faces) and sunglasses (mirror only). w27 GST voucher (Australian shelf prices include GST, so "add GST at the till" teaches a false shopping fact; call 3) and travel-money fee (close to w06's travel card) and phone-game bonus (phones). w28 electricity tiers (abstract on screen) and pool entry by age (w13's attempt 1 uses public pools). w29 parcel postage (Year 12's s05 is a parcel), toll gantry (a third travel anchor in four videos) and bus route (Year 12's s07 bus). w30 bank balance (no number line). w31 passing train (travel again) and flour tolerance (a weak picture).
- **Variety across the eight:** games (w24, w26, w31 with food), sport (w25), money and shopping (w27), travel (w28, w30), home (w29). Darts and dominoes are both games, two videos apart, with different objects and ideas.

## Joins

| From | Final frame (the next video's opening) |
| --- | --- |
| w23 to w24 | the dartboard and the dart at (6, −8) with its legs (above) |
| w24 to w25 | the netball court from above, a coded 4.9 m circle about the goal line's midpoint, the off-court half dashed, "x² + y² = 4.9²" |
| w25 to w26 | the upper semicircle y = √(25 − x²) with (3, 4) and (−3, 4) across a violet mirror line, and the three dominoes |
| w26 to w27 | the sneakers with a "$120" tag, two machine rows in each order, "$?" outputs |
| w27 to w28 | the e-bike and the phone's ride screen ("Unlock $3 (includes 20 min)", "Then 50c per minute", "12 min: $?", "32 min: $?") |
| w28 to w29 | the e-bike's joined graph with a pen tracing it, the dryer and its staircase cost graph |
| w29 to w30 | the rail trail's number line with markers at −3 and 3 and "3 km" bars |
| w30 to w31 | the jelly bean jar "350 beans", the V y = |g − 350|, the level line y = 20 with "?" on each arm |
| w31 to c01 | the jar's V with its right arm's rise 20 over run 20, "Next: average rate of change" (proposed; call 9) |

**Paint order (decision 49 precedent).** Each handoff plate must exist before the build of the video before it: the dartboard and dart before w23; the court before w24; the dominoes before w25; the sneakers before w26; the e-bike before w27; the dryer before w28; the rail trail before w29; the jar before w30.

## Ownership notes from the pack writer

1. **`ci7cdb9b15` (a circle's equation from its graph): owned by w24, done.** Taught in w24 scene 7 from lesson23 `we-3` (through (3, 4): x² + y² = 25) plus an axis-crossing reading (crosses at 6: x² + y² = 36), and practised in A1. w25 does not re-teach it.
2. **`ci81e0ec50` (the graph of y = |x|): moved from w31 to w30.** Reasons: w30's piecewise definition is a two-piece function (w28) whose graph is the V; the distance bars rise straight into it; its symmetry is w26's even test and its corner is w29's unbroken graph. The move balances the pair: w30 keeps three short definitional points plus this graph (5,653 characters), and w31 keeps the two heavier partial points, graphing |ax + b| with and without an application and solving |ax + b| = k both ways (5,670 characters). **Root action:** in `../../programme/maths-a11-route-inputs-2.json`, add `ci81e0ec50` to w30's `syllabusActionIds` and `syllabusActions`, remove it from w31's, and add w30's y = |x| to w31's entry knowledge (it already lists w30). Until then, w30's error-check brief quotes the point from w31's route entry.

## Calls that need root's confirmation

1. **Colour roles.** Inputs blue and outputs teal wherever a design names them (root ruling 12). Beyond that, w28 to w31 share one piece pair: the first piece (or the "keep" case, x ≥ 0, ax + b ≥ 0) amber and the second (the "flip" case) violet, so the absolute value cases look like the piecewise pieces they are. w24 colours r amber; w25 leaves r in ink and uses amber and violet for the plus and minus roots; w26 uses amber for the moved ghost and violet for the move; w27 uses amber for the inner function and violet for the outer.
2. **Site corrections applied.** S11-06 (w25: the right and left semicircles are not functions of x, shown by the sweep). S11-07 (w27: no percentage-and-doubling example; "order usually matters", with one case where it does not, described without the word inverse). S11-08 (w28: the boundary rule replaces the unrelated (a + b)² box; the age-band answer is not used). Pack wording notes: w24 says the triangle's sides are "x and y without their signs" (|x| is w30's); w26 says "an even power of minus x equals that power of x", not "is positive"; w29 keeps "continuous on its domain, with a discontinuity at 0" together for 1/x; w30 says "non-negative", not "positive".
3. **S11-07's own correction (root, site).** The logged correction proposes "take $10 off and then add 10% GST". Because GST is included in Australian shelf prices, I used a 20% sale with a $10 coupon instead (same structure: a percentage and a fixed amount). Root may want the site correction reworded the same way.
4. **Attempt contexts changed from the packs.** w24 A1: through (−5, 12) instead of (−8, 6), because (−8, 6) gives r = 10, the hook's own wire. w28 A1: car hire ($60 including 100 km, then 25c a km) instead of the e-bike, which is the anchor. All other attempts are the packs' questions with their numbers.
5. **Original teaching for partial or missing points.** w28 tests a piecewise function for even or odd (x² for x ≥ 0, −x² for x < 0 is odd; A2's h is even). w30 shows √(x²) = |x| by a four-row substitution table and uses it on √(9x²). w31 graphs y = |ax + b| by folding, sketches from the vertex, y-intercept and mirror point, checks with an app, and solves graphically with a sliding level line, including k = 0 and k < 0.
6. **Feedback length.** Three feedbacks (w28 A1 and A2, w31 A2) first ran about 33 to 36 s; they were tightened to about 28 to 30 s. w28 A2 and w31 A2 carry three to six demands and sit at the 30 s top; each has a named trim.
7. **w25 decimals.** The netball goal circle's real radius, 4.9 m, makes scene 3 say "twenty-four point oh one" and "fifteen point oh one". Fallback in w25 open decision 1 (move the distance question to r = 5).
8. **Wording for voicing.** "Nought point eight" and "nought point five" (w27, w28) follow w10's "nought point five". "Lolly bag" (w31) is kept as Australian usage. "The absolute value of x", never "mod x".
9. **The c01 join.** c01 has no pack or design yet. w31 scene 12 proposes the jar's V with rise 20 over run 20 as c01's opening. If c01's designer picks another opening, only w31 scene 12's last two sentences and its frame change.
10. **Kit additions (new parts specified in the designs).** `CircleTracer` and `RadiusGauge` (w24); `SemicircleSplit` (w25); `SymmetryGhost` and `PairedPoints` (w26; ghost reused by w28, w30); `MachineChain` (w27, on w08's `FunctionMachine`); `PieceSwitch` and `PiecewisePlot` (w28; reused by w29, w30); `PenTrace` and `JoinSlider` (w29; pen reused by w30); `DistanceBar` and `SubstitutionTable` (w30); `FoldUp` and `LevelLine` (w31; `LevelLine` generalises w14's `CrossingCounter`). Reused: `VerticalLineSweep` (w07), `AxisShadow` (w09), `NumberLineRay` (w06), `ScreenApp` (as w13). Root may want these added to `maths-a11-kit-needs.md`.
11. **w26 domino fallback.** If the painted 3|3 tile fails the half-turn check, a blank painted tile with coded spots on the sidecar grid keeps the symmetry exact.
12. **w27 A2 depends on w18.** The domain of √(4 − x²) needs a quadratic inequality (route entry knowledge lists w18). If the playlist moves w18 after w27, A2 is answered from the parabola instead.

## Lengths (counted by script, build parser rules)

| Video | Characters | Scenes | Estimate with holds |
| --- | --- | --- | --- |
| w24 | 6,039 | 14 | about 541 s |
| w25 | 5,620 | 14 | about 512 s |
| w26 | 5,651 | 14 | about 514 s |
| w27 | 5,664 | 14 | about 518 s |
| w28 | 5,681 | 13 | about 515 s |
| w29 | 5,613 | 14 | about 515 s |
| w30 | 5,653 | 14 | about 519 s |
| w31 | 5,670 | 13 | about 517 s |

w24 first ran to 6,161 characters (about 551 s) and was cut by two sentences for margin. w25, w26, w27, w29, w30 and w31 first came in under 5,500 and were raised with teaching, not padding: w25 a point check and the range's top value; w26 a numeric odd check and the origin condition for the odd completion; w27 "f(g(x)) is not f times g", a second commuting pair and a concrete refused input; w29 why a tiny denominator gives an asymptote and a check of a = 8/3; w30 the 6 km ride and why √9 needs no bars; w31 why the mirror point works, a fold check and the link to w14's crossing count.

## Numbers

Every value on screen or in narration was recalculated with SymPy 1.14 (scratchpad `w24w31/verify.py`, 16 Nov) and is listed under each design's "Numbers to verify". All site worked examples used match the packs' recalculations. No em dash appears in any of the eight files or this one; every syllabus quote matches the route-inputs text and the crosswalk exactly (checked by script).

## Open questions for root

1. The `ci81e0ec50` move and the route-inputs edit (ownership note 2).
2. The S11-07 rewording (call 3).
3. The c01 opening (call 9).
4. w25's real-radius decimals (call 7).
5. Whether the twelve new kit parts should be logged in `maths-a11-kit-needs.md` (call 10).
