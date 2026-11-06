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
