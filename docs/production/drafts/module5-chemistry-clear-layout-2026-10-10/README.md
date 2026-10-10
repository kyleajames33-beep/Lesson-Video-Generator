# Chemistry C3: clearer model layout

The teacher's small-player screenshot showed a crowded reading hierarchy.
An uncropped screen can still be difficult to follow. This additive candidate
keeps the graph prominent, separates the equation and conditions from it,
and gives the current explanation its own card. Secondary labels are quieter
and smaller. The reference card has one heading, its two values and one short
conclusion. Repeated experiment/context text is removed from the graph footer.

Review: http://127.0.0.1:8778/module5-chemistry-clear-review-2026-10-10/

Build with `node scripts/build-module5-rich-visual-review.mjs clear`, then use
the existing local review server on port8778. This is the actual LessonVideo
Player with silent estimated cues. It has no narration audio.

Only six Chemistry diagram-kind selections differ from the preserved rich
parent. Narration, duration, prompts, answer holds, math and cue timings are
unchanged. The new component imports the reviewed parent model functions.
The old component, rich candidate, Biology source and old review page remain
available. Existing catalogue layouts are not restyled.

Evidence:

- `native02-frames.json`:32 native full-renderer stills of the initial clear
  candidate. `native02-component.snapshot.txt` preserves its exact component.
- `native03-frames.json`:6 temperature response stills of a first label move.
  Its component is preserved in `native03-component.snapshot.txt`.
- `native04-frames.json`:6 temperature response stills after moving the label
  above the curve. These supersede native02/03 for that mode only. Other five
  modes have unchanged drawing code.
- The independent layout report records the dashed-line and trace collisions,
  their corrections and the exact final source/native scope.
- `ui-observations.json` binds final Player inputs and separates sampled
  750px browser playback from stills and source checks.

The aborted native01 attempt has no approval value and is excluded from the
evidence package. No paid narration or full export was made for this correction.
Fresh measured speech, exact voiced preview, human listening, whole-lesson
review and the existing package release gate remain necessary.
