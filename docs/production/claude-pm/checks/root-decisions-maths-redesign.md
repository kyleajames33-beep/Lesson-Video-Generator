# Root decisions: Maths redesign to the visual standard (d02 onward)

Claude (root), 7 November 2026. d01 Revision 6 is the pattern. Everyday anchors are required (owner, 7 Nov). Programme decision 5 (coded visuals only) is withdrawn by `maths-visual-standard.md`.

## d02 to d05 (wave 1)

1. **Anchors:**
   - d02: a savings account doubling every 10 years (coin jar);
   - d03: a new app's users, and "how long until?" (phone and stopwatch);
   - d04: music (guitar octaves are log base 2; bels are log base 10);
   - d05: a Ferris wheel seat (height sin x, climbing rate cos x).
   d06 to d09 must not reuse these contexts.
2. **d01 to d02 join.** The graph and chip carry over exactly; the plate cuts from flask to coin jar. d02's narration says "a count that doubles every hour" and does not name bacteria. Accepted.
3. **d05 to d06 colours.** d05 uses the strand roles (sin x ink, violet tangents). The d06 redesign carries them into its opening. No re-voicing is involved.
4. **Shared plates.** Physics plates (`phys-y11-guitar-v1`, `phys-y11-sound-level-meter-v1`) may be used in Maths lessons. No ma12- copies are needed. No fret is named for concert A.
5. **Silent slips** (d04 scene 9, d05 scene 9): crossed slips may appear on screen without narration, labelled by a short hand tag. Accepted.
6. **Re-voice lists:** d02 scenes 1 and 9; d03 scenes 1 and 6; d04 scenes 1 and 9; d05 scenes 1 and 3. All other takes are reused.
7. **Studio kit additions** before these builds:
   - `FunctionSimulator` (any f with f′);
   - a base mode for `CurveSimulator` that passes through 1;
   - `CoinJar`, `AppCounter`, `PitchMeter` and `FerrisWheel`;
   - the reflection carrier;
   - a held-stop `SecantToTangent`;
   - an excluded mark on `ParameterSlider`;
   - a question-card axes picture.
   Root builds these as one kit pass before the d02 to d05 builds.
8. **New plates** for Codex: `ma12-coin-jar-v1`, `ma12-coin-jar-full-v1`, `ma12-coin-v1`, `ma12-phone-v1`, `ma12-stopwatch-v1`, and `ma12-ferris-wheel-rim-v1`, `-stand-v1`, `-gondola-v1` and `-gondola-marked-v1`.

## d06 to d09 (wave 2)

9. **Anchors:**
   - d06: a bike crank (height sin x; pedalling faster gives the inner rate);
   - d07: a timber deck growing both ways;
   - d08: a road trip's average speed;
   - d09: a hike's elevation profile, with a flat ledge that is not a turning point.
10. **d09 and d10 function colour.** x³ − 3x stays blue in d09 and d10 to keep the join; this pair is the exception to the ink function role.
11. **d08 to d09 excluded value.** Accepted: it turns grey as d08's frame shrinks, because d09 uses amber for "decreasing".
12. **Plates commissioned:** `ma12-bike-crankset-v1`, `ma12-bike-pedal-v1`, `ma12-timber-deck-v1`, `ma12-timber-deck-top-v1` (exactly 2:1), `ma12-country-road-v1` (tileable) and `ma12-hiking-valley-v1`. Reused: `y11c-bike-frame-v1`, `y11c-bike-wheel-v1`, `b4-car-blue-v1` and `phys-y11-dashboard-cluster-v1`.
13. **Notes hold.** The voiced notes takes were measured with a 60 s hold. Builds fix every Maths key-notes scene at 1,350 frames (45 s); re-measuring is not needed.
14. **Re-voice lists:** d06 scenes 1 and 3; d07 scenes 1 and new 1a; d08 scenes 1 and new 1a; d09 scene 1. New takes are named `scene-01a`. d07 1a (728 characters) has a trim reserve.
15. **Kit additions** join decision 7:
    - `FunctionRider` (merge with `FunctionSimulator`), `RotatingPlate`, `RateChainStrips`, `AreaStrips` with growth bars, and `TripSim`;
    - a moving domain strip, and studio-sized `Cancellation`, `SignStrip`, `PairedDerivativePanel` and `TangentTriangle`;
    - a `QuestionCard` picture slot with a `GivensStrip`.

## d10 to d14 (wave 3)

16. **Anchors:**
    - d10: a roller coaster height profile. The top of the climb is the global maximum and the start and dip tie for the minimum. It is kept although d09 is a hike, because d10's fixed hook curve reads most naturally as a track.
    - d11: a lighthouse beam on a straight beach, where the spot is at tan x.
    - d12: sun, tower and shadow (tan and sec, and the co-partner minus).
    - d13: a drone camera tilting, where speed = sec²(tilt) × tilt rate. Accepted: no everyday context gives 3^(2x) a fresh meaning without repeating money.
    - d14: headlights on a curving road (the tangent and the normal).
    d11 to d13 share trig geometry but are different contexts. Accepted.
17. **Colours at joins.** The d14 to d15 join curves stay blue until d15 is redesigned; then both move to ink together. Other join colours changed inside d10 to d14, and each next opening describes the new frame.
18. **d12** runs about 551 s, under the cap. Its reserve trims apply only if the voiced takes run long.
19. **Plates commissioned:** `ma12-coaster-track-v1` (painted to the 11-point rail guide), `ma12-coaster-car-v1`, `ma12-lighthouse-v1`, `ma12-lighthouse-islet-top-v1`, `ma12-beach-strip-top-v1` and `ma12-tower-block-v1`. Reused: `phys-y11-sun-v1`, `phys-y11-drone-side-v1`, `phys-y11-ground-strip-v1` and `phys-y11-car-top-v1`.
20. **Re-voice lists:** d10 scenes 1 and 4; d11 scenes 1 and 2; d12 scenes 1 and 8; d13 scenes 1 and 3; d14 scenes 1 and 5.
21. **Kit.** Generic parts join the studio kit: `CandidateValueTable`, a branch-safe rider, linked riders, `normalLine` and `QuarterTurnNormal`, name-swap chips, and an interval picture for question cards. The anchor simulations (`CoasterRide`, `BeamSweep`, `SunShadow`, `DroneTilt` and `HeadlightDrive`) are built in each lesson's own folder on top of `FunctionSimulator` and `RotatingPlate`.

## d15 to d19 (wave 4, not yet voiced)

22. **Anchors:**
    - d15: a skateboard on skate tracks (smooth join, a corner jolt, a step);
    - d16: a barrel vase filling at a steady rate (the inflection is at the widest part);
    - d17: a new video's total views on a laptop (the busiest day is the inflection);
    - d18: a sheep pen against a stone wall;
    - d19: a car depreciating 15% a year. The site's $5000-at-6% growth example is kept in scene 3a.
    The cars in d08, d14 and d19 carry different meanings, and d17's video views are distinct from d03's app users. Accepted.
23. **d14 to d15 join.** d15 holds d14's blue frame for three sentences, then turns the curves to ink on "tracks". d14 is not edited. Accepted.
24. **d15 voice files.** `math-a12-d15/lesson.json` and `voice-manifest.json` are from Revision 3; regenerate them before voicing.
25. **Timing.** d15 (561 s) and d17 (565 s) are near the cap. If their voiced takes run long, apply the reserve trims in the order listed in each file.
26. **Plates commissioned:**
    - `ma12-skateboard-side-v1`;
    - `ma12-barrel-vase-v1` (to its profile table, within 2% of the widest radius) and `ma12-kitchen-tap-v1`;
    - `ma12-pen-wall-v1` (needed for d17's handoff and for d18), `ma12-stone-wall-top-v1` and `ma12-card-texture-v1`.
    Reused: the Biology laptop, sheep and yellow car.
27. **Kit additions (next kit pass):** `OneSidedSecants`, an animated zoom factor, a piecewise helper, a profile interior for `ContainerFill`, `MATH_CUP` and `MATH_CAP` with a concavity mode for `SignStrip`, `StackedDerivativePanels`, `ScreenChart`, `FencePen`, `BoxNetFold`, limit rows in the candidate table, and money and unit readouts.

## i08 to i14 (wave 5, not yet voiced)

28. **Anchors:**
    - i08: a shopping-centre car park filling and emptying;
    - i09: an outdoor thermometer on a frosty morning;
    - i10: a lift going up 2 floors and down 2 (net 0, travelled 4); lifts belong to i10, and i01 is told not to use them;
    - i11: a backyard pool's sloping beach entry;
    - i12: garden-path cut and fill (odd), and a stone footbridge arch (even);
    - i13: a home air conditioner over a hot day, replacing solar;
    - i14: a robot vacuum in a hallway, and snow depth at a ski field.
29. **i14 units.** The robot's motion uses centimetres with the site's numbers (24 cm/s, not 24 m/s); the worked example stays a particle in metres. Accepted.
30. **Plates painted to profiles** (`pool-cutaway-v1`, `garden-cut-fill-v1`, `stone-footbridge-v1`, `lift-shaft-v1` landings). Codex paints to the stated profile tables and reports the measured positions. If the plate misses tolerance, the builder fits the coded curve to the measured positions; it never warps the plate.
31. **i11** sits near the 5,500 floor and has no trims. **i12** cuts the e^(−x²) example to stay under the cap. **i13**'s attempt 1 is sand into a trailer.
32. **Kit additions (next kit pass):**
    - new parts: `NetFlowArrow`, `ThermoColumn`, a level fill against a plate, a plate meter readout and a constant-family slider;
    - studio versions of `AccumulationTracer`, `LowerLimitDial`, `LimitSubstitution`, `AreaFlip`, `HorizontalStrips`, `SwapReflection`, `SymmetryPairs`, `CoefficientLedger`, `ToolPanel` and `UnitProduct`;
    - extensions: backwards and trapezium modes on `AreaStrips`, reverse and odometer on `TripSim`, and plate sprites on `ParticleTrack`.

## i01 to i07 (wave 6, not yet voiced)

33. **Anchors:**
    - i01: bean shoots on bookcase shelves (+ C is the soil level). This is a kitchen-garden context, not biology teaching. Accepted.
    - i02: a sourdough starter rising in a jar;
    - i03: a phone charging (the site's drug example stays alongside);
    - i04: fundraiser donations (1000/t);
    - i05: solar panels over a day;
    - i06: a rain gauge in an easing storm;
    - i07: a bath filling with the plug out.
34. **i08 recall** now names the rain gauge and the bath (root edit, 6,132 characters). i05's "each piece can have its own constant" stays screen-only, per the earlier decision.
35. **Site source.** The site repo is no longer on this machine (deleted 6 Nov; backed up on GitHub). The redesigns keep each site worked example exactly as recorded in the design. Codex's maths check confirms them against the live site.
36. **Kit additions (next kit pass):** `PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck`, a reveal mode for `ContainerFill`, masked plate rise, gradient dots against a target, a two-piece tracer, `DerivativeWheel`, `StudioRiemannStrips` (signed), `StudioAreaFill`, `RefinementTable` and a balance bar.
