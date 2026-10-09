# Limiting reagents: review feedback revision, 9 October 2026

The user reported blur, pronounced pauses and diagrams that were too small
while watching the unlisted review at https://youtu.be/sijXK98W_9w.

## Findings and changes

- The user's paused YouTube player was using Auto (360p). The quality menu
  offered 1080p HD. It was selected and verified. A frame extracted from the
  original 1920 by 1080 MP4 is sharp. Low playback resolution accounts for
  the screenshot's softness; diagram sizing needed a separate improvement.
- Reuse the existing particle model and coefficient bars. An optional
  `conceptVisualLayout: diagramFocus` allocates 600px to text and 1152px to
  the diagram, with 16px internal padding. Diagram width increases from
  approximately 744px to 1120px. Existing lessons retain their default layout.
- The particle diagram previously stayed blank for 10.5 seconds because its
  entrance delay also controlled the start of the reaction. A separate
  `reactionRun.runStart` preserves the recorded reaction and stopping cues,
  while introducing the starting particles after one second. The default
  runStart remains 60 frames for existing configurations.
- Hook and practice response gaps change from four and five seconds to two
  seconds each. Learners can pause for longer. The practice prompt is freshly
  recorded as "Pause here to try it, then continue for the answer." Its new
  Simon v4 recording includes provider alignment. Nine other segments and
  their original sidecars are preserved.
- Silent reading tails after narration change from 2.5 seconds to 0.5 seconds.
  The working board's final step and the quiz solution still have at least
  three seconds before the transition. The resulting duration is 293 seconds,
  compared with 313.7 seconds previously. Preflight's eight SHORT_TAIL
  warnings are expected for this explicit pacing revision. Do not silently
  restore long tails or disable the general diagnostic.
- The new full export uses 1080p, 30 fps and H.264 CRF 16. Larger diagrams remain
  vector artwork; no low-resolution bitmap enlargement is involved.
- The burger prediction now shows the given five buns and four patties in
  count cards. The unrelated atom is removed. The cards are question data,
  so they appear before the response gap; the answer remains hidden.
- The first full render failed in Remotion's temporary audio mixer after
  rendering the frames. The new `alignedPcm` export path builds one measured
  audio track from the shared timeline, renders video without that mixer,
  then muxes and masters the audio. Five tests cover transition overlap,
  delayed speech, exact crop equivalence, preserved internal silence and
  rejection of missing audio or clipped overlaps. Default exports are unchanged.

## Teaching and review plan

| Beat | Reused visual | Adjustment | Timing and hold |
| --- | --- | --- | --- |
| Particle recipe and starting counts | ReactionRunDiagram | Enlarge and introduce the starting particles earlier | Keep initial counts visible until the recorded consumption cue |
| Oxygen exhausted and excess hydrogen remains | Particle plinths and progress graph | Enlarge counters, graph and labels with the whole visual | Same reaction events and recorded stopping cue; final counts remain visible |
| Fewer moles trap, then divide by coefficients | CoefficientDivideDiagram | Enlarge bars, equation, values and role labels | Preserve all three aligned beats and the raw-value ghost |
| Prediction and practice | Existing hook and quiz | Two-second response gaps, revised prompt recording | Answers and captions remain hidden through the measured silence |
| Scene changes | Existing transitions | Shorter silence after speech | Half-second tail; no speech speed-up |

## Validation and artifact locations

Revision package: `out/prototypes/limiting-reagents-feedback-2026-10-09/`.
Layout stills include initial and completed particle counts, raw moles and
divided capacities. Type checking and 34 playback, response timeline and
quantitative model tests pass. Media preflight has zero errors. Complete
listening and user playback review are pending.

The previous MP4 and its audio remain preserved. Shared source changes cause
the old conservative dependency snapshots to report source drift, as expected;
this is not a mutation of the published exports. The revised export gets its
own source and media snapshot. Keep the old YouTube review unlisted, upload
the revision unlisted, and keep both out of public course playlists until
the user has reviewed the revision.

## Independent timing review

The exact final lesson was inspected and played in Remotion Studio. The
review is recorded in `studio-ui-review.json` with its final source snapshot.
An independent reviewer found that the outer diagram stage still masked the
intended early introduction, and that quiz rows used fixed intervals rather
than their recorded phrases. Both issues were corrected. The three solution
rows now begin at local frames 754, 970 and 1121; the last row remains visible
for about 7.17 seconds before transition. Three component tests verify aligned
row starts while preserving legacy and partial timing configurations.

The source/caption audit confirms answer-free two-second gaps and no crossing
captions. Native layout clarity and technical checks do not prove natural
delivery or portrait-phone readability. Complete listening remains pending.
Use [the preview-first workflow](preview-first-review.md) for later lessons.

## Completed revised export and unlisted upload

Final export: `render-04/video.mp4`, 1920 by 1080, 30 fps, 8790 frames,
293 seconds. Integrated loudness is -18.03 LUFS; true peak is -1.90 dBTP.
Source verification passes with no changed or missing dependencies. Independent
review confirms exact equality of all 115 current SRT/VTT cues and final media
hashes. Long silences at -35 dB are the two intended practice gaps (2.27 and
2.20 seconds including recording edges) and the 1.48-second ending hold.
Native encoded reaction counts, raw moles, divided capacities and answer-free
question frames are sharp and do not clip.

Revised unlisted review: https://youtu.be/b7OCuLsXgG8. Publication success,
Unlisted visibility, supplied English (Australia) captions and available
1080p HD playback were verified. Education, Problem walkthrough, Australia
and Year 11 are set, with AI disclosure, no paid promotion and no subscriber
notifications. The previous review remains preserved. Public playlist
placement awaits complete user watch-through and listening.

Video SHA-256: `56471cc9c65bc65381783b188094271b6a1743a85ac5afa1a0d527fc87eeab0a`.
Release package SHA-256: `7892a5765d81f88fcb97b0bf2487e760a4ec9434ae3324f30cdcf1df297ce5dd`.
