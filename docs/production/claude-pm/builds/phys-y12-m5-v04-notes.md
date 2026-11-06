# phys-y12-m5-v04 (range and complementary angles): Year 12 Physics course pilot, 6 Nov 2026

Sheet: `phys-y12-m5-v04-sheet.jpg`. It holds 16 evenly spaced stills over 14,208 frames, taken at (i - 0.5)/16. They were rendered at half scale, concurrency 1, under the stills lock.

Builder's grade after root's polish round: A on all 16 frames. Not yet watched at playback speed. Root to sign off. The sheet has no frame stamps.

## Files
Created in `src/explainer/lessons/phys-y12-m5-v04/`:
- `common.ts`: measured lookups (`sc`, `cue`, `dur`, `hold`) and the projectile physics (g = 9.8; ux, uy, flightT, range, maxH, pos, clockAt). Every number on a flight, clock or readout comes from these functions.
- `parts.tsx`: the Physics house parts.
  - Colour roles.
  - `LauncherSvg`: the base, plus the barrel turned about the sidecar pivot (410, 644). The muzzle sits 835 native px from the pivot.
  - `BallSvg`.
  - `FlightLane`: the launcher in a cut-away pit, so the muzzle sits exactly at the launch level. The path is drawn from the equations. The ball flies at one real-time rate, with a teal ground shadow and a landing ring.
  - `CliffStage`: HSC-style cliff with a dashed launch level. Paths stop just above the sea with a "?".
  - `LaunchTriangle` and `TravelSide` (the side swap).
  - `RangeGraph`.
  - `ReadCard`, `Chip`, `CrossedChip`, `Stamp`, `AnswerBox` (dark-ink frame), `Row`, `RBox` and `HandNote` (hand text with subscripts).
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 9), `s3.tsx` (10 to 15), `scenes.tsx`, `assets.ts` and `config.ts`.
- Registry:
  - Line 3: `import {config_phys_y12_m5_v04} from './lessons/phys-y12-m5-v04/config';`
  - `config_phys_y12_m5_v04` added after `config_math_a12_d01` in `explainers`.
  - Composition id: `Explainer-phys-y12-m5-v04`.
- Imported read-only:
  - `math/studio`: SceneHeading, HandTag, LiveReadoutBoard, GivensCard, QuestionCard, KeyNotesBullets, Card, MarkSpan and kf.
  - `math/graphs`: graphTransform.
- No other lesson was edited.

## Plates
Used:
- `y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png`: sidecar pivot and muzzle used; uniform scale only.
- `phys-y11-steel-ball-v1.png`.

None is missing, and there is no coded apparatus.

## Departures from the design (with reasons)
- **Level ground with a painted launcher.** The muzzle sits above the base, so on flat ground the ball would land below its launch point. Each launcher therefore stands in a cut-away pit with its muzzle exactly at the ground surface (launch level = landing level). Distances run from the muzzle. On the cliff, the pit is in the cliff top, so the cliff-top surface is the launch level.
- **Paired flights in lanes.** One barrel cannot point at two angles, so paired flights run in two lanes (one launcher each, one shared landing line) instead of being overlaid from one launcher. This applies to scenes 1, 3, 6, 7 and 13. Scene 6 uses three mini lanes. The 30° landing mark is carried into the 60° lane and rings when the 60° ball lands.
- **Colour conflict in the design.** Line 22 says the v03 frame has the 50° path solid orange. Line 41 and the colour roles say the steeper path is dashed blue-grey. I followed the colour roles throughout: steeper dashed blue-grey, flatter solid orange, 45° green-grey.
- **Scene 1.** No v03 is built to continue from. The opening therefore shows the v03 result: the two lanes with completed paths, clocks and "?". The replay starts on "spot".
- **Scene 2.**
  - A teal chip, "the 50° ball: 16.1 × 3.91 = 62.8 m", fills the horizontal column before the algebra arrives.
  - The stage runs the 50° flight on a loop, with a teal ground shadow and a blue height marker.
  - Live readouts show clock t, distance across (u_x t) and height.
- **Scene 3.**
  - The 40° triangle stands faintly with a "?" from the first frame and turns solid on "At forty".
  - The replay lanes are on screen from the start and fly on "crosses more slowly".
  - The product rows write on "Swapping" and are framed on "so the ranges", because "exactly" falls 24 frames before the scene ends.
- **Scene 4.**
  - Added a live panel, "Check: any angle": the launcher tilts while readouts show θ, 2 sin θ cos θ and sin 2θ. It rests at 30° for the spoken check.
  - Triangle and ledger thumbnails fill the lower left until the conditions arrive.
  - The conditions start on "same level" and "no air", not "time" (18 frames before the end).
  - The pen arrow runs from 2 sin θ cos θ to the identity chip's sin 2θ.
- **Scene 5.**
  - The sweep:
    - 15° to 45°, reaching 45° on "degrees".
    - From "falls away", 45° to 53°, with a pause on the tag "swapped, same product".
    - On to 75°.
    - Back to 60° on "height", where the 30/60 pair lights. The design returns to 45°.
  - The readouts use the whole-degree angle shown, so θ and every value always agree.
- **Scene 6.** The givens show "level ground" with the note "no air resistance, lands at the launch level: shortcut allowed", so the line fits the card. Each flight launches just before its answer, so it lands on the answer's cue.
- **Scene 7.** The flights replay twice, on "flights" and on "climbs". The T rows are keyed to "four point six two" and "two point one six".
- **Scene 8.** The trap 1 card holds a small coded cliff with the painted launcher, not an icon. The rise-and-fall pen trace runs on "rises", not "exist" (19 frames before the end).
- **Scene 9.** A painted launcher stands behind each triangle, with its muzzle at the triangle's origin.
- **Scenes 10 and 12.** The painted launcher (no answer-bearing marks) and a ruled "your working" box sit beside the question card.
- **Scene 11.** A range curve for 14.0 m/s shows the 45° peak (20.0 m) and the 20/70 pair (12.9 m) as the answers arrive. The crossed chip appears on "Using", not "avoid".
- **Scene 13.** Two lanes, 60° and 30°, at the same unstated speed. No clock numbers are shown. Tags read "× 1.73 longer" and "× 3 higher".
- **Scene 14.**
  - Before the cliff: a small range curve with "45° wins, complements tie", and the 15 m/s 30/60 paths at 30 px/m.
  - On "thirty metre cliff", the cliff rises under the launcher and the view zooms out to 12 px/m. The design asks for 7 px/m, which is too small to read.
  - All three cliff paths start from the muzzle of the barrel at 45°, as the design's final frame states.
- **Scene 15.** Five bullets: the design has four, and the brief asks for five. The added first bullet reads "Range = crossing speed × time aloft: R = u_x T, with T = 2u sin θ ÷ g."
- **Key-notes audio.** The measured lesson.json points the key-notes scene at `public/audio/math-a12-d01/scene-16.wav`, a maths take. Its text matches, but it may be a different voice from the rest of the lesson. Root to check before the render.

## Cue check
Every `cue()` phrase resolves against `docs/production/claude-pm/lessons/p-y12-m5-v04/measured/lesson.json`. All 15 scenes rendered stills, and `cueFrame` throws on a missing phrase.

Countdowns use the measured holds:
- hook: 861 to 951 (3 s);
- attempt 1: 590 to 890;
- attempt 2: 584 to 884.

"Pause here to answer." writes on its spoken cue.

## Typecheck
Scoped tsconfig in the scratchpad (lesson and types, noUnusedLocals): clean.

## Grade per frame (final sheet)
1. Hook: A (two lanes, clocks, the same landing ringed).
2. Range from the columns: A. Polish round: the horizontal column carries its own picture from the first frame. The teal shadow slides along a distance ruler with ticks at 0, 1, 2 and 3 s (equal gaps, tag "equal gaps: steady u_x"), and "16.1 × 3.91 = 62.8 m" lands at the ruler's end when the first flight lands. The box grows to fit as the rows arrive, so no empty panel is left.
3. Swap: A.
4. Shortcut opening: A.
5. Shortcut end: A.
6. 45° slider: A.
7. Worked example 1: A.
8. Worked example 2: A.
9. Traps: A.
10. Attempt 1: A (full card, launcher, working box).
11. Feedback 1: A.
12. Attempt 2: A.
13. Feedback 2: A. Polish round: two clock bars ("time in the air (for u = 15 m s⁻¹)") sit in the lower left from the first frame. They start empty and fill at one real-time rate from "Flight time" (30°: 1.53 s; 60°: 2.65 s), and "× 1.73" lands on the T row's cue ("long").
14. Handoff, before the cliff: A.
15. Key notes: A.
16. Key notes: A.

## Polish round (root, 6 Nov)
- **Flights:** trajectory lines are 7.5 px at 1080p (the old dashed ghost was about 5 px). The ball is twice its old size (at least 34 px).
- **Ground:** the ground has a soft coded soil band under the line. No suitable side-profile ground plate exists in public/assets; the turf plates are top-down and the soil plates are whole scenes.
- **Labels:** clock and readout labels are now 32 px, range-graph labels 30 to 32 px, and the u_x unit in scene 7 is 30 px. The kit's uppercase card titles and readout units stay at 28 px (kit, not lesson).

## Spot checks (extra stills)
- Hook mid-replay (f360) and countdown (f900).
- End of the columns scene (f1880).
- Swap replays and products (f2749, f2999).
- Identity panel (f3615).
- Slider at 33°, 53° and 60° (f4198, f4758, f4933). The readouts match the formula: at 53° they show 9.0, 12.0, 108.1 and 22.1 m.
- Worked example 1, 60° flight (f5946).
- End of worked example 2 (f7014).
- Traps (f7785).
- Memory aid, mid swap and end (f8029, f8239).
- Attempt countdown (f8965).
- Ends of both feedback scenes (f9855, f11545).
- Cliff rising and the final frame (f12077, f12427).

In every launcher still, the barrel stays on the pivot in the base lug and the ball leaves from the muzzle tip.

## Check at playback speed
- **Paired flights at one real-time rate.** The 40° and 25° balls land first while the steeper ball is still in the air. The clocks stop on landing (3.28 and 3.91 s; 2.16 and 4.62 s). The teal ground shadow runs slower for the steeper ball.
- **The scene 5 slider.** The barrel tilts smoothly while the point rides the curve. The readouts tick in whole degrees, and the teal and blue values trade places at 53°.
- **Other motion.** The side swap in scenes 3 and 9 (the travelling sides change colour as they turn), the scene 4 identity panel sweep, and the scene 14 cliff rise and zoom-out.
- **The scene 1 cut at "spot".** The balls jump from the landing marks back to the muzzles for the replay.
- **Hand tags and the barrel.** Tags should write on in time with their words, and the barrel should never leave its pivot.
