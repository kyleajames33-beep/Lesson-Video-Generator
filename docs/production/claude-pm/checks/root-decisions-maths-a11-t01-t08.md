# Root decisions: Year 11 Maths Advanced t01 to t08 (designer's file, 17 November 2026)

Designer's decisions file for the first-revision designs `lessons/math-a11-t01.md` to `t08.md` (trigonometry: exact values, right triangles and bearings, any angle, related angles, sine rule and area, cosine rule, the ambiguous case, radians). Inputs: packs `pre-design/maths-a11/math-a11-t01.md` to `t08.md` (brief 243), `programme/maths-a11-route-inputs-4.json`, `checks/maths-a11-kit-needs.md` (trigonometry section), `site-corrections-maths-a11.md` section 7, and the accepted Year 11 designs and rulings. Text only: no speech, build or commit.

## t08 final frame (for the t09 author; written first)

t08's scene 13 (handoff), returned to silently after the key notes, is t09's opening frame. It matches the t09 pack's start ("the site's pizza, radius 20 cm, slice angle 45° = π/4, with its crust 5π cm found as one eighth of 40π, and the question 'one step instead of two?'"). Exactly:

- **Header strip:** "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES".
- **Plate:** the existing painted pizza `ma11-pizza-top-v1.png` (top view; w09's plate, reused), about 760 px across, centred at about x = 560 px, y = 560 px of the 1920 × 1080 frame. Overlay geometry comes from its sidecar `ma11-pizza-top-v1.json` (native centre (623, 619), inner-crust radius 300 px native).
- **Coded overlay on the pizza:** two radii (ink, 4 px) from the centre to the inner-crust circle, one pointing right (0°) and one at 45° anticlockwise, so one slice is outlined; the slice's crust arc traced in **teal** (8 px); a small **blue** angle arc at the centre labelled "45° = π/4" (44 px); the lower radius labelled "r = 20 cm" (ink, 40 px). The other slices are not outlined.
- **Right column (left edge at about x = 1,080 px), top to bottom, 44 px:** grey working chip "whole crust: 2π × 20 = 40π cm"; teal chip "slice: ⅛ of a turn"; teal chip with green frame "slice crust: ⅛ × 40π = 5π cm ≈ 15.7 cm"; then the amber hand tag "one step instead of two?"; then the chips "Next: arc length and sector area" and "?".
- **Not on screen:** no "l = rθ", no sector-area value, no area formula. The words "radian" and "π/4" appear only in the angle label.
- **Spoken last line (scene 13):** "Since an angle in radians is arc over radius, could the crust come straight from the radius and the angle, in one step? That's next."
- **Colour roles in force at the join (t08):** the angle (degrees and radians) blue; radius ink; arc length teal; answer green; mistake red. t09 may keep them.

Earlier in t08 (scene 2) the same pizza shows one slice's crust (5π cm) and area (50π cm²) as fractions of the whole, which is `ci53fbdcff`. t09 therefore opens on a context its viewers have just seen, and can start straight from "two steps".

## Joins (each final frame is the next design's opening frame)

| Join | Frame |
| --- | --- |
| e08 → t01 | e08's coded frame exactly (square of side 1 with its diagonal and one 45° mark; equilateral triangle of side 2 halved, 30° and 60° marked; calculator strip "sin 45° = 0.7071067811…"; chips "never ends: exact form?", "30°, 45°, 60°: exact values?", "Next: exact trig values", "?"). t01 changes nothing in it; the two anchor plates arrive during scene 1 (root ruling 3 on e01 to e08). |
| t01 → t02 | The sea cliff and yacht: `ma11-sea-cliff-v1.png` with `ma11-yacht-side-v1.png` 40 m out, the dashed horizontal and sight line, the blue angle "52°", chips "not 30°, 45° or 60°", "cliff height h = ?", "Next: right-triangle problems", "?". |
| t02 → t03 | Coded axes with a blue ray at 120° from the positive x-axis, calculator strip "sin 120° = 0.8660…", red-outlined chip "no right triangle holds 120°", chips "sin 120° = ?", "Next: any angle", "?". |
| t03 → t04 | Coded circle (radius 2) with rays at 30° and 150°, their points joined by a dashed level line, chips "same height", "sin 150° = sin 30°?", "Next: every quadrant", "?". |
| t04 → t05 | The fire-tower landscape `ma11-fire-towers-v1.png` with a coded triangle: towers A and B, fire C, "AB = 8 km", "65°" at A, "70°" at B, no right angle; chips "SOH CAH TOA needs a right angle: drop one in?", "Next: the sine rule", "?". |
| t05 → t06 | The yacht's two-leg journey on a coded sea map (`ma11-yacht-top-v1.png` at the finish): legs "12 km on 040°" and "9 km on 100°", a new north line at the turn, the interior angle "120°", the sine rule crossed in red ("no side with its opposite angle"), chips "distance from start = ?", "Next: the cosine rule", "?". |
| t06 → t07 | The phone-tower map: town A, tower C (`ma11-phone-tower-v1.png`) "9 km" away, the highway leaving A at "40°" to AC, "signal reaches 7 km", calculator strip "sin B = 9 sin 40° ÷ 7 ≈ 0.8264 → B ≈ 55.7°", chips "the only triangle?", "Next: two triangles?", "?". No arc is drawn yet. |
| t07 → t08 | The cake tin `ma11-cake-tin-v1.png` (top view) with a coded blue angle at the centre and its teal arc, a coded string (ink) one radius long lying beside the tin, chips "360° a turn: a choice", "measure with the radius?", "Next: radians", "?". |
| t08 → t09 | See "t08 final frame" above. |

## Anchors (painted plates; no people, hands or faces)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| t01 | A square sandwich cut corner to corner, and a pool table's triangle rack cut down the middle | food; games | new `ma11-sandwich-square-v1.png`, `ma11-pool-rack-v1.png`; handoff plates briefed here: `ma11-sea-cliff-v1.png`, `ma11-yacht-side-v1.png` |
| t02 | A yacht below a sea cliff (elevation, depression), then the yacht's bearings and a right-angled two-leg journey | sport and travel | t01's two plates; new `ma11-yacht-top-v1.png` (map marker, also t06) |
| t03 | A skateboard spinning flat (180, 360, 540) | sport | new `ma11-skateboard-top-v1.png` |
| t04 | An analogue wall clock's hour marks in mirror sets | home | new `ma11-wall-clock-v1.png`; handoff plate briefed here: `ma11-fire-towers-v1.png` |
| t05 | Two fire lookout towers sighting one smoke plume; a triangular garden bed for the area | outdoors; home and garden | t04's plate; new `ma11-garden-bed-v1.png` |
| t06 | The yacht's two-leg journey with a 120° turn (a deliberate return to t02's journey) | travel | reused yacht plates; handoff plate briefed here: `ma11-phone-tower-v1.png` |
| t07 | A highway passing through a phone tower's signal range (enter and leave: two triangles) | phones and travel | t06's plate; handoff plate briefed here: `ma11-cake-tin-v1.png` |
| t08 | A string one radius long laid round a cake tin; a pizza cut into eight slices | cooking | t07's tin; existing `ma11-pizza-top-v1.png` (w09) |

Anchor checks (grep of `lessons/math-a11-*.md` and `math-a12-*.md`, 17 Nov): no sandwich, pool rack, sea cliff, yacht, wall clock, fire tower, garden bed, phone tower or cake tin anchor exists. Near contexts, judged distinct: t03's skateboard spin against Year 12 d15 (a skate ramp's smooth joins) and g01 (a board resting on a bowl); t07's phone tower against w21's phone download and the Year 12 phone plates (a signal range, not a device); t08's pizza is w09's plate reused for a new idea (a slice's crust and area as fractions of a turn, as the t09 pack asks). Golf (w15 to w17, so the t06 pack's dog-leg hole) and ladders and laptops (several Year 12 designs) were avoided.

**Plate order.** Each handoff plate must exist before the earlier build that shows it: the cliff and side yacht before t01; the fire towers before t04; the top-view yacht before t05 (its handoff); the phone tower before t06; the cake tin before t07. Each is briefed in the earlier design's Codex asset brief.

## Colour roles (fixed per video, and consistent across the strand)

- t01 to t04 (triangles and the circle): the angle θ **blue** (the input); the opposite side and y **amber**; the adjacent side and x **violet**; the hypotenuse and r **ink**; exact ratio values **teal** (the outputs); answer green; mistake red; construction, horizontal and north lines dashed grey. On the circle, x carries cosine's colour and y carries sine's, as their triangle sides do.
- t05 to t07 (any triangle): opposite pairs colour-matched, a and A **amber**, b and B **violet**, c and C **blue**; the perpendicular h dashed grey with an ink label; answer green; mistake red.
- t08: the angle (degrees and radians) **blue**; radius ink (the string); arc length **teal**; answer green; mistake red.

The course rule "inputs blue, outputs teal" holds where an input and output are named (the angle in, the ratio out).

## Departures from the packs

1. **t01 handoff and t02 opening (pack: the site's ladder, 4 m at 60°).** Replaced by the sea cliff and yacht at 52°, the site's own lesson04 `we-1` numbers (40 m, 52°, then 25 m further back) re-set from a building to a cliff, as ruling 9 on w01 to w14 allowed. Reason: the ladder needs one more plate and its only payoff (2√3 m) repeats t01's sin 60°; ladders also appear in several Year 12 designs. The ladder revisit, and so site correction S11-13, is not used.
2. **t02 re-set site examples (numbers unchanged):** lesson09 Q1's window and car (18 m, 27°, 35.3 m) become a lower cliff and the anchored yacht; lesson09 `we-3`'s ship becomes the yacht. lesson09 `we-1` (cliff 60 m at 35°) is not used, so the attempt's cliff is fresh. The YouTube link is lesson09 (Bearings, Elevation and Depression), the lesson the main question names; the route's source lesson is lesson04. Root may prefer lesson04.
3. **t03:** the site's `we-1` (2π/3 on the unit circle) is taught in degrees as 120° on a circle of radius 2, point (−1, √3), so the radius-r definition is used before r = 1 (`ci95d785c0` gap). The (−3, 4), r = 5 example is the pack's original.
4. **t04:** lesson03 `we-2` (sin θ = −3/5 in the fourth quadrant) is solved by drawing the 3, 4, 5 triangle, not by the Pythagorean identity (t14 owns it). "All Stations To Central" is the spoken expansion of ASTC (open question 2).
5. **t05:** the towers problem (original: 8 km base, 65° and 70°) replaces site `we-1` (A = 40°, B = 75°, a = 12) as the side example; `we-2` and `we-3` are kept with their numbers. The obtuse-case line of the proof is an author note, not narration (the pack's "if time allows").
6. **t06:** the pack's original journey (12 km on 040°, 9 km on 100°) is used, with the bearing of the finish (065°) added by the sine rule once a pair exists. Card 06's a = 8, b = 5, C = 60° example is not used.
7. **t07:** the site's `we-1` (a = 7, b = 9, A = 40°) is re-set as the phone tower, numbers unchanged, in kilometres. The two distances along the highway (2.95 km and 10.84 km) are original. lesson07 `we-3` is used with site correction S11-15 (form a² = b² + c² − 2bc cos A; a kept unrounded; B = 48.3°).
8. **t08:** the site's bike-wheel hook is replaced by the cake tin and string (Year 12 has a bike pedal anchor). Site `we-3` (coterminal angles in radians) is not used; t03 taught coterminal angles in degrees and the stop boundary does not need it again.

## Site corrections applied (section 7)

- S11-11 (t08): the definition is "θ in radians = arc length ÷ radius; one radian is the angle where the arc equals the radius".
- S11-12 (t06, t07): t06 says inverse cosine gives a triangle's angle directly, acute or obtuse; only the sine rule can hide an obtuse answer (t07).
- S11-14 (t01): rationalised form is "the usual way to write an answer", with both forms equal; no marking claim.
- S11-15 (t07): applied as above.
- Minor items (t01's compound-angle hook, "every exact value you will ever need", t02's 1:12 ramp, "only three ratios", t03's GPS claim, lesson06 `we-2`'s 0.6929): none of that copy is used; t05 shows 0.6930.

## Year 12 needs

- **t08 delivers `ciccaa78be`** in the form Year 12 recalls: scene 6 says "cosine of two pi over three radians is minus a half, sine of three pi over four radians is root two over two, sine pi radians is zero, and cosine pi radians is minus one" and shows the full table of multiples of π/6 and π/4 from 0 to 2π (tan undefined at π/2 and 3π/2), which Year 12 t01 to t03, d05 and d07 recall. Scene 3 gives "the meaning of a radian (an arc of length equal to the radius)" in those words, as d05 recalls.
- t04 delivers tan of an angle beyond 90°, which c09 deferred, and the three negative-angle results that t10 later reads as even and odd graphs.
- t05 to t07 split `ci96840b09` and `ci5fb5a13c` exactly as the packs say: t05 the sine rule, the area formula and degrees and minutes; t06 the cosine rule and a non-right bearings journey; t07 the ambiguous case (`ci44ad375d`, with the condition b sin A < a < b) and choosing a rule.

## Open questions for root

1. **The yacht across t01's handoff, t02, t05's handoff and t06.** A deliberate return: t02's journey turns through a right angle (Pythagoras), t06's through 120° (the cosine rule). Root may judge it a repeated anchor; the alternative for t06 is the pack's A-frame stepladder hinge (a new plate), which sits close to the Year 12 ladders.
2. **"All Stations To Central"** (t04) is a Sydney train phrase and needs the plain reason first (it does: the signs of x and y come first). Root may prefer a neutral expansion ("All Students Take Calculus") or the letters alone.
3. **Narration reads "sine", "cosine" and "tangent" in full throughout** (screen: sin, cos, tan), so the Google voice never meets "cos" or "tan" as text. Root may allow "cos" and "tan" after first use if the voice reads them well.
4. **t02 length and pace.** t02 carries the whole of `ci61c6fa90` (ratios, elevation, depression, true and compass bearings, reverse bearings, a right-angled journey). It fits under 570 s, but it is the fullest design; if the learning review judges it rushed, the natural split is bearings into its own video (t02a elevation, t02b bearings).
5. **t02 YouTube link** (lesson09 against the route's lesson04), as departure 2.
6. **Feedback near 30 s:** by speech estimate every feedback is 26 to 29 s; t02 feedback 1 (29.2 s), t04 feedback 2 (29.3 s), t05 feedback 2 and t06 feedback 2 (28.9 s) are the longest. Measure them on the voiced take; each design names a trim.

## Summary

| Design | Characters | Seconds (with holds) | Feedback (s) | Anchor |
| --- | --- | --- | --- | --- |
| t01 | 6,145 | about 547 | 28, 26 | sandwich and pool rack |
| t02 | 6,031 | about 541 | 29, 28 | sea cliff and yacht |
| t03 | 5,837 | about 526 | 26, 28 | skateboard spin |
| t04 | 5,467 | about 496 | 28, 29 | wall clock |
| t05 | 5,533 | about 501 | 27, 29 | fire towers; garden bed |
| t06 | 5,908 | about 532 | 26, 29 | the yacht's 120° turn |
| t07 | 5,710 | about 517 | 28, 28 | phone tower and highway |
| t08 | 5,470 | about 502 | 26, 26 | cake tin and string; pizza |

Counts are the sum of each design's narration blockquotes with bold markers removed (scratchpad `t01t08/count.py`, which reproduces e08's 5,632 and c10's 5,915). Seconds: speech at 13.3 characters per second, two 10 s countdowns, 6 s of short holds, 20 to 22 s of settling and the 45 s notes scene (t08 adds a 3 s table hold). Every design is under 570 s. All values were recalculated with SymPy 1.14 and, for bearings, by coordinates (scratchpad `t01t08/verify.py`); Codex's maths check remains the authority. Every bold cue was checked to appear quoted in its scene's Visual. No em dash (U+2014) in any file.

New plates (eleven): `ma11-sandwich-square-v1.png`, `ma11-pool-rack-v1.png`, `ma11-sea-cliff-v1.png`, `ma11-yacht-side-v1.png` (t01); `ma11-yacht-top-v1.png` (t02); `ma11-skateboard-top-v1.png` (t03); `ma11-wall-clock-v1.png`, `ma11-fire-towers-v1.png` (t04); `ma11-garden-bed-v1.png` (t05); `ma11-phone-tower-v1.png` (t06); `ma11-cake-tin-v1.png` (t07). t08 needs none (the pizza exists).

No speech, builds or commits were made.
