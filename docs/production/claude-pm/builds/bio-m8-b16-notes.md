# bio-m8-b16 (how technology can assist visual disorders): new build, 16 Nov 2026

Sheet: `bio-m8-b16-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-bio-m8-b16`, measured narration `docs/production/claude-pm/lessons/m8b16/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered. Continuity: b15 is not built, so the lesson opens on the design's own hook; it hands off to b17 (kidney plate on the Next chip). The design's "b15: follow the pathway" and "b15: matched, not ranked" recall tags are kept.

## Files created
- `src/explainer/lessons/bio-m8-b16/`: `common.ts`, `assets.ts` (13 plates; the five eye states share one union box and the three cornea close-ups another), `parts.tsx` (EyeStack, Rays, FocalMark, LensProfile, EyeStrip on b12's SlotStrip), `s1.tsx` (1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10a to 12), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b12/parts`, `m8-shared/parts` (SignalPulse), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import and `config_m8b16` entry.

## Plates
All design-named plates exist and were inspected on a gridded sheet: eye cutaway (normal, long, short, cataract, artificial lens), cornea close-up, LASIK flap, flattened cornea, intraocular lens, glasses, contact lenses, kidney. Scene 1 uses the existing `m8-world-map-v1.png` instead of a coded world outline (house rule: plates for real things). None missing. Never stretched.

## Departures from the design (with reasons)
- Rays are three coded rays bent at the cornea and lens; the focal mark slides on cue. Positions (cornea, lens, retina on the axis for each eye state) were read off gridded crops; check them at playback.
- Scene 1: a 10 by 5 dot block beside the map carries "about half" (dots on the map plate would sit on a busy plate).
- Scene 2: labels sit in the margins with leader lines (cornea left, lens below, retina and nerve right) so no text sits on the plate.
- Scene 4: three phases on the one plate (short eye; normal with a coded two-curve cornea; normal with the stiff lens outline), each with its own right-hand labels.
- Scene 6: contacts return to the long eye; the toric lens merges two coded focal marks.
- Scene 7: the eye (long state) on the left; the cornea trio cross-fades at the centre; limit chips listed at the right.
- The light pathway strip has six boxes (light, cornea, lens, retina, optic nerve, brain); faults and fixes are chips in the boxes ("focus misses", "cloudy", glasses, contacts, laser, new lens) and a grey fog over the lens box.
- Attempts (root rule): both cards carry an eye plate (plain eye; cataract eye, as the stem states a cloudy lens) and their givens as grey tags.
- Key notes trimmed to five one-line bullets; memory card "Myopia: you see what's near "my" eyes." with the tag "ask where the light goes wrong".

## Cue check
Every cue phrase and question underline resolves.

## Check at playback speed
- Scene 2: focal mark sliding back onto the retina as the lens rounds up; the ciliary marks squeezing.
- Scene 3: cross-fade to the long eye on "too long"; parallel rays meeting in front, then diverging rays meeting on the retina.
- Scene 5: protein dots clumping; rays scattering at the lens.
- Scene 6: concave and convex profiles and the focal mark moving on "focus back" and "focus forward".
- Scene 7: flap and flattened cornea cross-fades; the laser beam flicker.
- Scene 8: lens fragments, IOL unfolding (uniform scale), cross-fade to the artificial-lens eye; rays clearing.

## Grade and ink check
- Grade: PASS (0 failures, 0 warnings). Report: `out/explainer/Explainer-bio-m8-b16/grade/Explainer-bio-m8-b16-grade.md`.
- My grade per frame: all 16 A.
- Ink check: 2 runs, both the deliberate red crossed mistakes (feedback 1 and 2). An earlier real collision (the scene 2 signal track crossing two labels) was fixed and re-checked.
