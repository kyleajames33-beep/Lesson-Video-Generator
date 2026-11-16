# Designer decisions: Year 11 Maths Advanced c01 to c09 (Revision 1, 16 November 2026)

Written by the c01 to c09 designer (Claude) for root. The designs are `../lessons/math-a11-c01.md` to `math-a11-c09.md`, the first half of Introduction to differentiation (c10 to c18 belong to another designer). They follow the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 designs (w05, w14 and w31 read closely), root's acceptance rulings for w01 to w31, root's rulings on the c and e packs (`root-rulings-maths-a11-c-e-packs.md`) and the recurring learning-review findings (`m-a11-w01-w31-learning-review-summary.md`). Documents only: no node, Remotion, build, render, commit or sub-agent.

## Length and timing (counted by script)

Narration blockquotes, bold markers removed, 13.3 characters per second; totals add 2 × 10 s countdowns, about 6 s of short holds, 22 to 24 s of settling and the 45 s notes scene.

| Video | Characters | Scenes | Speech before notes | Total | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| c01 | 5,563 | 13 | 413 s | about 506 s | 28 s, 29 s |
| c02 | 5,537 | 13 | 411 s | about 504 s | 30 s, 25 s |
| c03 | 5,596 | 14 | 415 s | about 508 s | 28 s, 28 s |
| c04 | 5,537 | 13 | 411 s | about 504 s | 26 s, 30 s |
| c05 | 5,564 | 13 | 413 s | about 506 s | 28 s, 29 s |
| c06 | 5,520 | 12 | 409 s | about 502 s | 30 s, 27 s |
| c07 | 5,533 | 14 | 410 s | about 505 s | 26 s, 23 s |
| c08 | 5,565 | 14 | 413 s | about 506 s | 27 s, 28 s |
| c09 | 5,513 | 14 | 409 s | about 502 s | 29 s, 27 s |

All are inside 5,500 to 6,800 characters and 62 to 68 s under the 570 s cap. Four feedbacks sit at 29.5 to 30 s by speech estimate (c02 F1, c04 F2, c06 F1, c09 F1): the voiced take confirms them; each design names a trim.

Mechanical checks run (scratchpad `c01c09/count.py`, `cues.py`): no U+2014 in any file; every bold cue word appears quoted in its scene's Visual; no "color/center/-ize" spellings; decimals spoken "zero point"; no "the site's example" or "the course" in learner copy.

## Anchors (one per video, everyday, no repeats)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| c01 average rate | a coffee cart's morning sales curve; its $5-a-cup takings line (opens on w31's jar V) | food, money | new `ma11-coffee-cart-v1`, `ma11-rc-car-v1`, `ma11-rc-track-strip-v1`; reused `ma11-jellybean-jar-v1` |
| c02 instantaneous speed | a remote-control car pulling away from rest (s = t²), filmed in slow motion | games | reused car, track strip, `maths/ma12-phone-v1`; new `ma11-hot-chocolate-mug-v1` (handoff) |
| c03 rates from practical graphs | a hot chocolate cooling on a kitchen bench | food | reused mug, cart badge, phone |
| c04 shrinking secants | zooming in on a road map (a bend straightens, a junction stays a corner) | phones, travel | reused phone (coded map); new `ma11-water-slide-v1` (handoff) |
| c05 the derivative and notation | a water slide side-on (a steepness at every point; kink and vertical drop) | games, leisure | reused slide; new `ma11-water-balloon-balcony-v1` + `ma11-water-balloon-v1` (handoff) |
| c06 first principles | a water balloon thrown up from a balcony, f(t) = 3 + 4t − 5t² | games | reused balcony and balloon; new `ma11-coastal-lookout-v1` (handoff) |
| c07 power, sum and multiple rules | a coastal lookout: you see about 3.57√h km | travel | reused lookout, phone; new `ma11-marble-run-v1` (handoff) |
| c08 tangents and normals | a marble run whose last ramp ends in mid-air | games | reused marble run; new `ma11-driveway-v1` (handoff) |
| c09 given gradient, angle | a curved driveway with a gradient limit of ¼ | home | reused driveway, marble-run badge |

Ten new plates (plus the balloon sprite), all `ma11-`, briefed in the design whose final frame first shows them, so each plate exists before the earlier build that needs it: c01 brief (cart, car, track), c02 (mug), c04 (water slide), c05 (balcony, balloon), c06 (lookout), c07 (marble run), c08 (driveway). c03 and c09 need no new plate.

**Checks made (16 Nov).** A grep of every `math-a12-*.md` and `math-a11-w01` to `w31` design for: bike, bicycle, cyclist, speed camera, point-to-point, speedometer, hot chocolate, cooling, coffee, map app, zoom, water slide, balloon, horizon, lookout, marble, driveway, ferry, bath, turnstile, parking meter, remote-control and toy car. No anchor match. Near hits, judged distinct:
- **Coffee:** Year 12 f04's attempt 1 is a café selling coffees in an arithmetic series (a question, not an anchor; a different idea).
- **Cars:** Year 12 d08 (road trip average speed as a quotient), d14 (headlights on a curving road) and w22 (braking distance) use full-size cars; the pack's highway speed camera for c02 was rejected for that reason, and a hobby remote-control car used instead.
- **Cooling:** Year 12 d19 considered and rejected a hot drink; i09 uses a frosty thermometer (a change in temperature, not a rate).
- **Marbles:** Year 12 s06 and s09 draw marbles from a bag; c08's is a toy track.
- **Lookout:** w30 labels a "lookout" flag on a number line; not an anchor.
- **Gradient rule:** w10's entrance ramp is a straight line built to a gradient rule; c09's driveway is a curve and asks where and at what angle.
- **Phone:** the Year 12 phone plate is reused for a map (c04) and a graphing app (c04, c07): plate reuse, not a shared anchor (root ruling 6 of the w01 to w14 acceptance).

**Pack anchors rejected, with reasons.** c01 GPS running watch (running sits near s-strand anchors; speed got its own object). c02 highway speed camera (near d08 and d14) and horse-race replay (a riderless racehorse reads oddly). c03 turnstiles (kept as attempt 2). c04 pastry square (its geometry gives 2x, which is c05/c06's job). c05 share-price app (real charts are made of corners, which fights the definition). c06 parking meter (the balcony gives the constant, site `we-2` the line). c07 phone-game XP (a discrete idea). c08 bike-path normal (a second anchor not needed). c09 playground slide (c05 already uses a slide); the driveway's "bumper scrape" framing dropped (scraping depends on the change of grade).

**Variety across the nine:** food and money (c01, c03), games (c02, c05, c06, c08), phones and travel (c04, c07), home (c09). The two slides are avoided; the two cars are one object spanning a join.

## Joins

| From | Final frame (the next video's opening) |
| --- | --- |
| w31 → c01 | w31's final frame exactly (root rulings 6 and 11): the jar badge, y = \|g − 350\| with its right arm (350, 0) to (370, 20), "run 20", "rise 20", "rise ÷ run = 20 ÷ 20 = 1". c01 changes nothing on it. |
| c01 → c02 | the car at the track's chequered finish line, a speed-gun box "? m/s", a small distance-time plot with an amber secant "average: a secant ✓" and a dot "one instant: ?" |
| c02 → c03 | the mug with a coded steam wisp; a temperature-time plot with the cooling curve and a dashed violet tangent at t = 4 with "?"; "°C per minute?" |
| c03 → c04 | the phone with a coded map: a winding road, a T-junction, a magnifier ring over the bend with "?" |
| c04 → c05 | the water slide side-on, a dot riding its profile with a violet tangent, "steepness here: ?" |
| c05 → c06 | the balcony and balloon with a dashed path; the plot of 3 + 4t − 5t² with an amber secant; chips "(f(t + h) − f(t))/h" and "f′(t) = ?" |
| c06 → c07 | the lookout with a dashed sight line; "distance ≈ 3.57√h km", "farther per metre climbed? ?"; a table "x² → 2x ✓, x³ → ?, x⁴ → ?, √x → ?" |
| c07 → c08 | the marble run, a coded marble at the lip, a dashed violet line leaving it with "?" |
| c08 → c09 | the driveway side-on with its coded profile, "gradient limit: ¼", a violet tangent with "where?", an arc with "angle?" |
| c09 → c10 | coded algebra only: "y = (3x + 2)⁵" (inside tinted blue), "expand five brackets? slow" with five bracket glyphs, "power rule alone: 5(3x + 2)⁴ ?", "Next: a function inside a function", "?" |

**For the c10 designer.** The c10 pack's start is "recall composite functions f(g(x)) (w27), then try (3x + 2)⁵: expanding works but is slow, and the power rule alone gives the wrong answer". c09's final frame states no derivative and shows no plate, so c10 may open on it, reveal that 5(3x + 2)⁴ is wrong, and bring in its own anchor (pond ripple or treadmill) on its first sentences. If c10 wants its anchor in the frame, only c09 scene 13's frame changes.

## Colour roles across c01 to c09 (proposed for the whole c strand)

Run Δx and inputs **blue**, rise Δy and heights **teal** (continuing w31's handoff and root ruling 12's inputs blue, outputs teal); secants and averages **amber**; tangents, instantaneous rates and f′ **violet**; answers green; mistakes red, crossed slips only. Two roles reuse amber where no secant is on screen: the normal (c08, amber dashed) and the target gradient m and the angle θ (c09). The constant k is amber and the power n blue in c07. If root wants the c10 to c18 designer to keep these, this table is the reference.

## d01 alignment (Year 12 entry knowledge)

`math-a12-d01.md` assumes: the gradient at a point is the slope of the tangent (c02 to c05); the notations f′ (read "f prime") and dy/dx (read "d y by d x") (c05, with those readings, and dy/dx shown as one symbol with a forward reference to the chain rule); the constant multiple rule `cif6a6cb7d`, which d01 phrases "the three comes along for the ride" (c07 uses the same phrase on screen and in narration); `ci1d192d62` (c07). The chain rule (`ci00fa8fac`, "dy/du × du/dx", "call the inside part u") is c10's.

## Departures from the packs and site, with reasons

1. **c01:** site lesson12 `we-1` re-set as the remote-control car (numbers unchanged; ruling 9 of the w01 to w14 acceptance allows re-setting). lesson01's table example (a chemical solution) and sprint hook are not used (pack decision). A1 re-set from a cyclist to a ferry (the unit change km/min to km/h is spoken).
2. **c02:** site lesson01 `we-3` (a runner, s = t²) re-set as the car from rest. For lesson12 `we-2` the design gives the curve s = 1.25t² + 20 so the crossed "points on the curve" slip has real values (12.5).
3. **c03:** the site has no practical tangent; the cooling model T = 20 + 324/(t + 5) is original, chosen so both tangents pass through readable grid points (it is not Newton's law; the narration claims only that it cools more slowly near room temperature). A scene on the cart's rising curve (about 62 cups an hour at 8 am) adds a positive rate. Attempt 1 is original (ice melting) because the pack's Q1 repeats the anchor; attempt 2 is the pack's turnstiles, drawn on a picture model whose entry rate peaks between the two tangents (the pack's numbers force this; author note c).
4. **c04:** `we-2`'s rounded values with "=" are shown exactly (27.027009001, 27.009001), and the "returns 0 at 10⁻¹⁴" claim is replaced by "rounding errors take over" (about 4.09). x³ added beside x² so "x^n" is not read as "x squared" (pack decision). The |x| corner kept here (map junction), recalled in c05.
5. **c05:** attempt 1 uses x³ with f′(x) = 3x² given (not the pack's x², which the worked example uses). The two no-derivative cases are original (the site omits "exists and is not vertical").
6. **c06:** cubics left out (pack decision); the balloon replaces the pack's parking meter, with the balcony as the constant.
7. **c07:** site `we-3` (f′(2) = 8) not used; the lookout gives the evaluation at a point. Root ruling 3: one video, no split needed.
8. **c08:** pack Q2 (the tangent to x³ meeting again) needs a cubic factorisation Year 11 Advanced students have not been taught, so it is shown graphically in scene 7 and attempt 2 becomes the normal to y = x² at (1, 1) meeting the parabola again at (−3/2, 9/4). An original worked example adds a point described in words (where the curve crosses the y-axis).
9. **c09:** obtuse angles by "180° minus the acute angle" (root ruling 2); the calculator's −63° is the crossed slip; a forward reference says tan 117° = −2 in the trig videos. The driveway's ¼ limit is a supposition, not a building rule.

## Site findings

All new findings the packs raised for c01 to c09 are already in `../site-corrections-maths-a11.md` section 6 (lesson01 quick check; lesson13's 10⁻¹⁴ claim and rounded equals; lesson03's "touches at exactly one point" and "the two points become one"; lesson04's binomial proof). Each design avoids them and says so in "Site notes". I found no further site errors (I read the site only through the packs' quotations).

## Kit additions (for the builder to log in `maths-a11-kit-needs.md`, ruling 13)

1. `SecantPivot` (c01 to c04, c06): two frame-driven points, extended secant, legs, live readout with units.
2. `TangentReader` (c02, c03): a drawn tangent with two ringed read points and a near-pair jitter.
3. Speed-gun box on `TripSim` (c02): live derivative readout beside the average; `TripSim` with a track plate (c01, c02).
4. `MapZoom` (c04): a coded road map zoomed about a point; computed straightening, fixed junction angle.
5. Plate-profile rider (c05, c08, c09): a rider and tangent on a plate's sidecar profile.
6. Vertical tangent display (c05).
7. Sprite on a computed path (c06): the balloon at f(t).
8. Tinted h terms in `WorkingBoard` (c06).
9. `RiseStack` (c07): stacked rises for the sum rule.
10. Lookout sight line and readouts (c07).
11. Marble launch and tangent extender (c08).
12. `InclinationArc` and the rider's match flash (c09).

## Open questions for root

1. **c01/c02, the car spanning two videos.** Introduced in c01's speed scene, c02's anchor (like w30 and w31's jar). If root wants c02 to have its own object, only c01's scenes 6 and 12 change.
2. **c03's cooling model** is a readable shape, not Newton's law. Keep, or switch to an exponential (then the tangent points must be re-chosen)?
3. **c05 memory aid "no cliff"** means a vertical tangent; the learning review may prefer "no vertical tangent".
4. **c07's 3.57√h** is the standard horizon approximation (refraction ignored, said "about"); a fallback "about 3.5√h" is written in the design.
5. **c08's attempt 2 replacement** (see departure 8). Accept, or keep the pack's cubic with the factor (x − 1)² given?
6. **c09 → c10 frame** is algebra only. Confirm it suits the c10 designer.
7. **Strand colour roles** (above): adopt for c10 to c18?
8. **Feedback at about 30 s** (c02 F1, c04 F2, c06 F1, c09 F1): confirm on the voiced take; each design names its trim.
9. **Site links** in the YouTube drafts use the `.sa.html` pages each video draws on most; confirm the playlist pages.

## Self-grades (designer's judgement, before independent review)

- **c01: A−.** Strong anchor and a clear sliding-secant surprise; the linear point is well covered. Risk: two plates' worth of context (cart and car) in one video.
- **c02: A.** The car, film strip, pivoting secant and "less time to speed up" reason make the limit idea concrete; reading far-apart tangent points has a visible reason.
- **c03: A−.** Good one-sign and "at" against "from" teaching; the thinnest syllabus content of the nine, so the cart scene adds a positive rate. Risk: four tangent readings feel similar.
- **c04: A.** The map zoom is a genuine reason, not decoration; the table, app and corner each have a stage. Risk: long spoken decimals in A1's feedback.
- **c05: A−.** Tracer, definition with both exclusions, and notation readings matched to d01. Risk: ∛x familiarity; "cliff" wording.
- **c06: A.** Four S's, the balloon's zero at the top of its flight, and the link back to c04's "4 + h" and c05's traced 2x. Risk: scene 4 is the longest stage (about 66 s, split by the flight).
- **c07: A−.** Three points fit under the cap with the inference and app check shown, not announced; the lookout's km-to-m change is spoken. Risk: density of scenes 3 to 6.
- **c08: A.** The marble leaving along the tangent and the quarter turn make both lines caused; the myth scene repairs the site error. 
- **c09: A−.** The level line on f′ links two answers to two places; the 180° rule follows root ruling 2 without trig. Risk: the driveway's ×2 vertical scale must be labelled.

## Numbers

Every number in the nine designs was recalculated with SymPy 1.14 (scratchpad `c01c09/verify.py`, `verify2.py`, `cart.py`, `turn.py`) and listed under each design's "Numbers to verify". No pack or site answer was found to be wrong; models built for pictures (the cart, the car's distance, the cooling drink, the ice, the turnstiles, the driveway) are checked for the stated properties (increasing, tangents through the read points, crossings at the stated x). Codex's maths check remains the authority.

No speech, source edits, builds, renders or commits were made.
