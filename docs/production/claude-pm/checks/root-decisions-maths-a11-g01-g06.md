# Root decisions: Year 11 Maths Advanced g01 to g06 (graph transformations), first designs

17 November 2026. Design author's report for root. Six first-revision designs are written: `../lessons/math-a11-g01.md` to `math-a11-g06.md`. Documents only: no speech, build, render or commit. Every value was recalculated with SymPy 1.14 (scratchpad `g-designs/verify.py`, run with `python -I`). Narration was counted by script (scratchpad `g-designs/count.py`: lines starting "> " in each "### N." scene, `**` removed), which also checked for em dashes (none) and that every bold cue is quoted in its scene's Visual in spoken order (all pass). Codex's maths check remains the authority.

Binding inputs applied: `root-rulings-maths-a11-t-g-s-packs.md` (rulings 4 to 7 and 14), the w, c and e acceptances and rulings, the c and e learning-review resolutions (faults avoided: no letter with two meanings on screen, nothing an attempt needs left untaught, no answer-bearing pictures, feedback at or under 30 s, cues quoted in order), and the Year 12 designs that assume this strand (t01, d02, d05, d06, i04, i05).

## The six designs

| Design | Characters | About s (with holds) | Anchor (plate) | Split |
| --- | --- | --- | --- | --- |
| g01 translations | 5,756 | 522 | A late start and a head start in a sprint (new `ma11-track-lanes-strip-v1.png`; reused `ma12-starting-blocks-v1.png` badge; runners are lettered dots) | No |
| g02 reflections | 5,513 | 500 | An audio app's Reverse and Invert buttons (reused `ma12-phone-v1.png`, `ma12-headphones-v1.png`) | No |
| g03 dilations | 5,683 | 515 | A photocopier's zoom, width-only and height-only settings (new `ma11-photocopier-v1.png`) | No |
| g04 order | 5,821 | 525 | Converting an oven temperature, °F = 1.8 × °C + 32 (new `ma11-oven-dial-v1.png`) | No |
| g05 features | 5,523 | 503 | The average cost of custom caps, 90/n + 12 (new `ma11-team-caps-v1.png`) | No (see 6) |
| g06 circles | 5,502 | 499 | A hardware store's free-delivery zone on a town map (new `ma11-garden-barrow-v1.png`; reused `ma11-town-rooftops-texture-v1.png`) | No |

All six are within 5,500 to 6,800 characters and under 570 s. Feedback speech is 24 to 29 s throughout.

## Decisions for root

1. **Notation (ruling 4).** Interpreted as: wherever a general form appears in g01 to g05, it is y = k f(a(x + b)) + c, and the site's af(b(x − h)) + k never appears. g01 to g03 use numbers only in the replace-language ("replace x by x − 3", "replace x by x/2"), because the syllabus letters collide with the Year 12 letters (the syllabus "x − a" is a slide a, and "x/k" is a horizontal factor k, while the Year 12 form uses a for the horizontal coefficient and k for the vertical factor). The full form is assembled in g04 scene 4 and used in g05. The syllabus letters appear only in the quoted syllabus text in each YouTube description. Open: g01 open decision 3 offers a one-chip seed ("Later: y = f(x + b) + c") if root wants the form visible from g01; g03 open decision 1 offers grey chips with k and l if root prefers the syllabus letters on screen.
2. **g06 letters.** The syllabus writes the circle as (x − a)² + (y − b)² = r² with (a, b) the centre, so a and b change meaning between g05 and g06. g06 uses numbers everywhere except key notes 1 and 3, labelled "centre (a, b)"; the general-form letters (x² + y² + ax + by + c = 0) never appear on screen. g06 open decision 1 gives a letter-free alternative.
3. **Colour roles across the strand.** g01 to g05 adopt Year 12 t01 Revision 3's parameter colours (k and vertical dilation amber, a and horizontal dilation blue, b and horizontal slide teal, c and vertical slide violet; parent dashed grey ghost; image ink), so Year 12 recalls the same colours. Reflections take their family's colour (−x blue, −y amber). This differs from the functions strand's "inputs blue, outputs teal" (root acceptance w01 to w14, ruling 12), which these designs keep only for domain bars (blue) and range bars (teal, outlined where a teal slide is on screen). g06 uses teal for the x bracket, violet for the y bracket and amber for the radius. Root to confirm.
4. **Order of transformations (ruling 5).** g04 teaches dilate (with any flip) then translate on each axis, builds the form by replacing x by ax and then x by x + b, and reads a rule by factoring the inside first. The site's translate-then-dilate reading (S11-G03) is never shown. "Order matters" is proved with two same-axis pairs that really differ (a vertical stretch and slide: vertices (0, 1) and (0, 2); a horizontal slide and stretch: vertices 2 and 1), and S11-G04's pair appears only as the case that commutes.
5. **Year 12 deliveries (ruling 14).** Each is met in the Year 12 designs' own words: g01 scene 2, "Everything happens three later ... Minus three inside means right three. Plus three would mean left three" (t01 scene 4); g02 scene 3, y = −f(x) with every height negated, x-intercepts fixed, "The number outside, minus one, acts on every height, just as it's written"; g03 scene 4, "Three x is x divided by a third, so this is a dilation by a factor of one third", with a "squash" readout answering t01's "factor ½ doubles the width" misconception, and t01's memory aid word for word ("Outside: on y, as written. Inside: on x, the opposite.", also carried in g01 and g04); g04 scenes 4 and 6, the form in t01's letters, "take the two out of the bracket first", "squash by a factor of a half, then slide", and t01's misconception crossed; g05 scene 2 and key notes 1 and 2, vertical asymptotes sideways only, horizontal asymptotes up or down only, domain following sideways moves and range following up-and-down moves.
6. **g05 split (rulings 2 and 6).** Not split. Three families are worked (hyperbola, parabola, log) and the exponential is practised in attempt 1, at about 503 s. g05 open decisions 1 and 2 name the fallback split (g05a carry-and-solve with the hyperbola and parabola; g05b exponentials and logs) and the fallback attempt if the review finds A1 unfair without a worked exponential.
7. **g06 builds on w24 (ruling 6).** w24's circle is stated in one sentence, not derived; no inside-or-outside test; w24's "right side = r²" and "domain one radius either side" are reminders only. The house at (6, 2), 3 across and 4 up from the store, reuses w24's Pythagoras check as an application.

## Departures from the packs

- **g01:** anchor 3 (handicap race) chosen and extended to a late start, so one race gives both translations; `we-trans-1`, `we-trans-2` and the drill are not used; `we-trans-3` is extended with its x-intercepts (0 and 4) to teach S11-G01's correction; the families scene uses |x − 4|, 1/(x + 2) + 1 and 2ˣ − 3 so neither attempt is previewed.
- **g02:** anchor 2 (reversing a clip) extended with the Invert button for the x-axis reflection; `we-refl-2`'s three points are replaced by the attempt's three points (to avoid a near repeat); short answer Q9 (x² − 4x + 3) is the worked example.
- **g03:** anchor 1 (photocopier) extended with width-only and height-only settings; the site's √x family runs in the app; the circle enlargement uses factor 3 so attempt 2 (radius 4 to 2) is not previewed.
- **g04:** `we-ct-1` and `we-ct-3` are not used; site Q9 (−4(x + 3)² + 2) is the rule-writing example and `we-ct-2` the reading example.
- **g05:** attempt 2 trimmed from five demands to four (the "describe the transformations" demand dropped, as w31 Revision 2 advised for long cards); `we-sk-3` and the log lesson's `we-3` are not used.
- **g06:** attempt 2 adapted: "find the other x-axis crossing" becomes "show that it also passes through (6, 0)", because no scene teaches solving a circle with y = 0 (g06 open decision 3). A delivery van was avoided (vans are anchors in w19 and Year 12 g03 and s05); the object is a wheelbarrow of garden supplies.

## Site corrections applied (never taught)

S11-G01 (g01 scene 6 solves the intercepts after a vertical slide), S11-G02 (g03 scene 6 shows a one-way stretch turning a circle into an oval), S11-G03 and S11-G04 (g04, decision 4 above), S11-G05 (g05 scene 4 crosses "x-intercept stays at 3"), S11-G06 (g05 says nothing about reflections removing intercepts). No error was found in lessons 02 or 07.

## Joins

- **t16 → g01.** t16 exists (Revision 1, scene 12): a coded frame with y = x², "y = (x − 3)²" with "x" and "x − 3" in blue boxes, "minus means left?" and "x → x − 3: left or right?". g01 opens on it exactly and recolours the two boxes from blue to teal on its first sentence (the strand's horizontal-slide colour). Open: either keep the recolour, or have t16 draw the boxes teal (g01 open decision 1). The track and runners arrive within 15 s.
- **g01 → g02:** the phone with a coded audio app (the ding's wave, buttons Reverse and Invert, unpressed), the headphones badge, chips "Reverse: replace x by −x?", "Invert: replace y by −y?".
- **g02 → g03:** the photocopier, a coded page with y = x² on graph paper, panel "Zoom 200%" and "Width 200% · Height 100%".
- **g03 → g04:** the oven with coded °F marks, "Bake at 180 °C", "°F = 1.8 × °C + 32", the two workings with no results.
- **g04 → g05:** the caps, "set-up $90 · $12 a cap", the plot of A = 90/n + 12 with the 1/x ghost, the dashed A = 12 with "?".
- **g05 → g06:** the town grid over the rooftops texture, the barrow badge and the store pin at (3, −2), "free delivery within 5 km", w24's circle at the origin and a "?" circle at the store.
- **g06 → s01 (proposed).** A coded frame with no plate: a grey badge of the delivery circle captioned "every point exactly 5 km from the store: a collection", the words "the even numbers from 1 to 11" (the s01 pack's own start), an empty pair of braces with "?" inside (no elements written), chips "a collection, written precisely?", "Next: sets and set notation", "?". s01's opening does not depend on g06 (route inputs 5), so the s01 designer may open on this frame or change only g06 scene 11.

## Plates (paint order)

New (briefs in the designs): `ma11-track-lanes-strip-v1.png` (g01), `ma11-photocopier-v1.png` (g03's brief; needed before the g02 build), `ma11-oven-dial-v1.png` (g03's brief; needed before the g03 build), `ma11-team-caps-v1.png` (g04's brief; needed before the g04 build), `ma11-garden-barrow-v1.png` (g06's brief; needed before the g05 build). Reused (viewed 17 Nov): `ma12-starting-blocks-v1.png`, `ma12-phone-v1.png`, `ma12-headphones-v1.png`, `ma11-town-rooftops-texture-v1.png`. Checked and not reused: `ma11-office-printer-v1.png` (a printer, not a copier), `ma12-delivery-van-v1.png` (other anchors).

## Kit needs (for the builder; also in `maths-a11-kit-needs-g-s.md`)

From the kit list: `TransformationTracer` with carried and horizontal asymptotes (g01, g02, g05), `StretchFromAxis` (g03), `TransformQueue` with a computed verdict (g04), `FeatureLedger` with a discontinuity marker (g05), `CircleFromCentre` (g03, g06), and the planned `AxisShadow`, `CircleTracer` and `CompleteSquareTiles`. New small parts named in the designs: `RaceLanes` and an input-matching strip (g01), `AudioWaveView` with Reverse and Invert (g02), a copier copy slide (g03), a stretching number bar and a non-trig readout set for `StudioTransformPanel` (g04), two-group square tiles (g06). These are not added to the kit-needs file here (another author owns the trig edits to the main kit file; the g-and-s file already lists the shared parts).

## Open questions for root, in one list

1. Notation in g01 to g03 (numbers only, no general form until g04): accept, or add the g01 seed chip / g03 k-and-l chips (decision 1).
2. Circle letters a and b in g06's key notes (decision 2).
3. The g strand's colour roles following Year 12 t01 rather than inputs blue and outputs teal (decision 3).
4. t16's blue boxes: g01 recolours on its first sentence, or t16 draws them teal (Joins).
5. `cid4fd3807` quoted in both g04's and g05's YouTube descriptions (g04 open decision 1).
6. g06 attempt 2 adapted (g06 open decision 3).
7. The s01 join proposed by g06 (Joins).

Nothing recorded; human listening pending. Next: student learning review of all six (brief 247 pattern), then the Codex maths check and error check.
