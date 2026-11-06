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
