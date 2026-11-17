# math-a12-t01 build notes (built on the measured narration)

Builder: Claude build agent, 17 November 2026. No MP4 rendered by the builder. Sheet: `out/explainer/Explainer-math-a12-t01/grade/Explainer-math-a12-t01-grade-sheet.jpg`. 15 scenes, 15,824 frames; the notes scene is 1,350 frames and fades back to the final frame.

## Files
`src/explainer/lessons/math-a12-t01/` (`common.ts`, `cuemap.ts`, `parts.tsx`, `s1.tsx` to `s3.tsx`, `scenes.tsx`, `assets.ts`, `config.ts`); registry entry after math-a12-s10. `parts.tsx`: the swell over the beach strip with both buoys, the transform graph (sin, cos, tan), the four dials and feature board, the daylight stage (exported for t02).

## Plates
None missing; none stretched. The beach strip (2172 × 724) is cropped to rows 290 to 724 by its sidecar. The buoy PNG has a faint yellow halo below the alpha threshold (check on paper at playback).

## Departures (with reasons)
- Opens on `I05FinalFrame` (design: production order after i05) and fades out of it in under a second.
- "x: seconds" and "y: metres" hand tags became axis labels (they collided with tick labels).
- The tan dial has no asymptote labels; the readout lists them.
- Worked-example rows are short wording (narration says them in full); a "to state" card precedes the factoring row.
- Scene 3 starts at k = 2; the k = −2 return at the end of scene 2 had no time and is not animated.

## Grade checker
PASS WITH WARNINGS (0 failures, 4 warnings: sparse frames in scenes 6, 8, 12, 13). Typecheck clean; all cue phrases resolve; text above y = 950.

## Playback checks for root
Scene 1 half-speed trace and morph to 2cos(x − π/3) + 1; scene 4 slow clock and "π/3 s earlier" bracket; scene 6 "left π" ghost landing back on sin 2x.
