# Molar mass mixed-style pilot

## Purpose and scope

Test a connected narrated explanation, reusing Chemistry Y11 M2 L2 artwork,
voice files, timing and animation primitives. The original lesson remains
unchanged. This pilot is an isolated composition, not a complete lesson.

The export normalizes the reused audio toward -18 LUFS and -1.5 dBTP, without
modifying the source recordings or video frames. Before and after measurements
are saved as `pilot.audio-review.json`. The final export still needs listening
review; a loudness number cannot establish good pronunciation or delivery.

Duration: 2188 frames at 30 fps, about 73 seconds. Existing narration is reused
verbatim. No paid speech generation, new voice comparison or new artwork.

## Scene audit and beat plan

| Global time | Learning point | Reuse | Targeted adjustment | Narration cue and hold |
| --- | --- | --- | --- | --- |
| 0 to 20.43 s | Molar mass connects amount to mass | Marginalia bridge raster, SlideFrame, SlideChrome, FadeUp, ScribbleUnderline | Give the bridge a large clear stage; use stable coded labels | Label moles at 4.69 s and grams at 8.14 s; underline molar mass at 11.52 s; reveal units at 13.73 s; hold through the concluding sentence |
| 20.43 to 42.43 s | Measure sample mass, then convert | Existing balance raster and lab narration | Cover its baked-in number with `mass / g`; simplify supporting copy | Labels follow the saved cues at about 2, 9.61 and 10.87 s into the scene; hold the apparatus while it is discussed |
| 42.43 to 72.93 s | m = n × M is verified by its units | Existing formula narration, shell and reveal primitives | Use coded symbols and a fraction rather than a raster formula; draw cancellation over both mole factors | Equation at 2.97 s; definitions at 6.91, 10.82 and 14.71 s; units at 18.60 s; cancellation at 21.66 s; grams at 23.34 s; hold the result |

These cues are resolved from saved word captions in the composition. Duration
and audio hashes come from the selected source scenes. Alignment text must
match the narration, audio must fit, and selected scene copy must contain no
U+2014 before this render script runs.

The bridge is a metaphor, not a scientific scale drawing. The balance is a
schematic with a tared container. Its displayed label indicates a unit, not a
measured result. Exact equations and cancellation stay in the coded layer.

## Review and remaining work

The pilot has rendered and the video contains all 2188 expected frames. Final
duration is 72.933 seconds for both audio and video. Export measurements are
-18.15 LUFS integrated and -1.76 dBTP. The source recordings are untouched.
The balance readout overlay was enlarged after a still exposed leftover raster
digits. Browser review confirmed scene seeking after adding range support to
the local server. Phone review exposes small variable definitions in the right
column of the formula scene. The V2 visual revision reflows these into three
larger cards and lifts the cancellation clear of the footer. It retains the
same recordings and saved word cues. The original export is preserved.

Start `npm run prototype:review` and open
`http://127.0.0.1:8778/molar-mass-pilot/` for reliable seeking. A basic server
without byte-range support may load the clip but fail to seek.

- Inspect beginning, midpoint and completed cancellation in motion. Verify
  both mole factors cancel, the gram factor remains, and labels stay fixed.
- Check phone readability, style continuity and captions. The player includes
  optional English captions; it does not burn subtitles over the diagram.
- Listen for intelligibility and pronunciation. The pilot uses the older
  recorded voice and cannot compare newer ElevenLabs models.
- This excerpt repeats the bridge idea in lab context. Decide whether that
  repetition helps or can be shortened when preparing a new script.
- Full lesson scientific review is still required. Its concept narration
  explains the modern mole definition using carbon-12, which is outdated.
  The [BIPM mole definition](https://www.bipm.org/en/si-base-units/mole) fixes
  Avogadro's constant; the current definition took effect in 2019. Correct
  that source and regenerate its voice and alignment before release.
  This pilot excludes that scene and does not silently change its recording.
- A separate native hand-drawn DNA test is now available under
  `capability-tests`. This conversion pilot cannot establish how well a DNA
  process teaches causality.

## Reproduce

`npm run prototype:pilot` renders five review stills, a 720p MP4, WebVTT captions,
source provenance and a review page under `out/prototypes/molar-mass-pilot/`.
The renderer uses sections of at most 600 frames to avoid a font-loading stall
observed in longer renders on this machine. Joining decodes audio and trims
each section to its frame duration so AAC padding cannot accumulate.
Append `-- --stills` for a layout-only check. Open `npm run prototype:studio`
and select `MolarMass-mixed-pilot` for interactive motion review.
Append `-- --v2` to export the larger-definition revision separately. This
reuses the original first two 600-frame sections, which precede the formula,
and renders the remaining sections again. It requires the original sections.

Media under public/ and output under out/ are ignored by Git. Back up the
assets and recordings separately. Code and this plan do not contain the media.
