# math-a12-t04 build notes (built on the measured narration)

Builder: Claude build agent, 19 November 2026. No stills, grade run, bundle or MP4 by the builder (machine limit: the Google voicing worker was running). Root runs the sheet and `npm run grade:explainer -- Explainer-math-a12-t04`. 16 scenes, 14,015 frames (key notes 1,350).

## Files
`src/explainer/lessons/math-a12-t04/` (same set as t03: assets, common, config, cuemap, parts, s1 to s3, scenes). Not registered (root adds the registry lines). `parts.tsx` holds the live storage ruler (`StoreStage`: t03's ruler made live; one blended map rescales it to 2 TB and morphs it to log10 positions, so points, ticks and labels move together), `MorphStrip` (scene 4), `DbStage` (log intensity axis over the teal dB scale, the teal step span, one blue "× 10" hop per 10 dB, meter display following the span), `Seismo` (coded seismograph strip), `PhAxes`, `T04Card` and `T04Board` (i05's rectangles frame). Final frame exported as `T04FinalFrame` from `s3.tsx` (also re-exported by `scenes.tsx`).

## Plates
None missing; none stretched. Phone (d03), sound level meter (shared anchor `soundMeterDisplay`), pH meter, white star, country town (f07), thermometer. The pH meter's blank screen is slightly skewed; the digits sit in an axis-aligned rectangle measured inside it, (548, 1048) to (985, 1222) native px. The seismograph is coded, as designed.

## Joins
- Frame 0 of scene 1 is `T03FinalFrame` (imported read-only). From frame 1 the stage is a live rebuild with t03's exact geometry (phone, ruler, pins, lifts, zoom ring, chips); the Next chip clears as the heading writes.
- Ends on `T04FinalFrame` = i05's rectangles board redrawn with i05's geometry, ticks, chip, stepper and box card (i05's own Chip, BoxCard and PLabel imported read-only), **minus i05's two grey lines "last video: trig primitives / one step back round the wheel"**, which are false after this video. So t04's final frame differs from `I05FinalFrame` by those two lines. Root to decide whether i06's opening needs them (i06 currently opens on i05's frame).

## Departures (with reasons)
- Scene 2: the rescale to 2 TB starts on "the biggest value" (frame 675), not on "zero" (816, 30 frames before the scene ends), so the move finishes inside the scene; "still crushed" writes on "zero".
- Scene 3: the morph runs frames 26 to 106 (the first sentence), so the axis is logarithmic when "ten to the three goes at three" is said. The "× 10" hops run from "multiplying by ten" until "Kilobyte", then the kB, MB, GB, TB rings and the teal "3 steps (× 1000)" brackets.
- Scene 4: the green rule writes on "So use a log scale" (892), not "sense" (1066, 30 frames before the end), so it can be read. Strip B has a small coded height chart at its left (no people). The heights strip morphs to log on "A log scale adds nothing" and back on "heights are compared".
- Scene 5: the formula writes on "The sound level L" (spoken there), the I₀ line on "I nought is"; the factory chips are a two-line grey chip (true) and "12% more intense?" (crossed on "times the intensity"). The step label above the dB span is left out (it collided with the axis title); the blue ratio card states the step.
- Scene 6: the green answer writes on "ten to the four" (654); the ratio card ticks live to × 10 000 as the span grows 40 dB; the side row "(70 − 30) ÷ 10 = 4, so 10⁴" writes on "A quicker way" (the cue "four" is 16 frames before the end).
- Scene 7: added row "M_A = 5, so A_A = 10⁵ A₀" so the 10⁵ in "log₁₀(50 × 10⁵)" is shown, not assumed. The "× 50 is only + 1.7" bracket writes on "Fifty times the wiggle" (the cue "scale" is 26 frames before the end).
- Scene 8: the meter reads 4.00 on "pH four", 7.00 on "pH seven", 4.00 again on "So pH four"; the three "× 10" hops sit left of the pH axis between pH 7 and pH 4.
- Scene 10: the condition line writes on "the direction flips".
- Scene 12: the crossed slip carries the caption "the decibel scale isn't ordinary" (the design gives none).
- Scene 15: before "Next" the log storage ruler and the small card stay on screen (avoids a near-empty frame), with "end of trig graphs and modelling".
- Scene 16: the notes card is its own layout (main line, condition line, the four divisors) rather than the scaled scene 10 card, which would put text below 26 px.

## Checks run
- Typecheck: `npx tsc --noEmit -p work/brief245/root/tsconfig.t04g01.json` clean.
- Cues: every cue phrase resolves at load against the measured word timings (cuemap evaluated in node).
- Server-side render of 13 evenly spaced frames per scene (node, React server renderer, no Remotion bundle): no throw, no NaN, undefined or Infinity in the markup.
- No em dashes in the lesson files.

## Look first on the sheet
Scene 1 frame 1 against t03's final frame (should be indistinguishable apart from the heading); scene 3 at about frame 110 and 900 (log ruler, hops, kB to TB brackets, pin labels not overlapping); scene 5 lower half (formula column, ratio card, factory chips); scene 7 at about 840 (× 50 trace clipped with its label); scene 8 (pH screen digits size, hops); scene 14 bottom strip; scene 15 first second after "Next".

## Playback checks for root
Scene 2 rescale; scene 3 morph and hop timing; scene 4 strip morphs (stars spread, heights squeeze and return); scene 5 span moves and meter reading; scene 6 four hops with the ticking ratio; scene 7 trace growth.
