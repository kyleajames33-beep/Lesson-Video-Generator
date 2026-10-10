# Selected C2/B2 v4 established-trail correction

Root observed the B2 v3 quick-check final established trail's lower "count." line around native y865. It intruded below the conservative y850 caption reserve. V3 runtime is checkpointed at `7106255`; earlier sources, briefs, pilots and media stay preserved.

V4 changes one runtime expression in `Module5EvidenceBoard.tsx`: opted-in trail rows use 4 px vertical padding instead of 10 px. Missing and false `captionSafeWorking` flags still use 10 px. Trail text remains 44 px at line height 1.13. All header, givens, prompt, countdown, active-card positions, result text sizes, reveal cues and response boundaries stay unchanged. No clipping is added.

Each established row becomes 12 px shorter. The second row's glyphs move up an estimated 18 px: 12 px from the preceding row and 6 px from their own top padding. The reported y865 lower glyph therefore estimates y847, with only about 3 px to the reserve. These are source estimates. Actual wrapping, font metrics, captions and controls need the new quick-check pilot; this document does not claim clearance or whole-lesson readability.

The v4 lesson and props files are exact byte copies of v3 under new paths. Spoken words, raw and assembled audio, alignments, captions, silence, scene durations, line order, summaries and every cue remain unchanged. Assembly provenance checks verify the generated dependencies and caption/response boundaries. The new briefs bind exact v4 source paths and reset source, voiced preview and human listening review to pending. Historical timing and layout evidence retains its original scope.

Three short aligned-PCM pilots are prepared with the previous encoding settings (1080p, CRF 16, audio normalisation, concurrency 1). All ranges below are inclusive and use the actual lesson timeline:

| Pilot | Scene start | Local frames | Global frames | Duration |
| --- | ---: | --- | --- | ---: |
| C2 transfer 03 | 7309 | 1322 to 2550 | 8631 to 9859 | 1229 frames, 40.97 s |
| B2 worked 03 | 7584 | 880 to 1353 | 8464 to 8937 | 474 frames, 15.8 s |
| B2 quick 01 | 10044 | 1230 to 2250 | 11274 to 12294 | 1021 frames, 34.03 s |

The C2 pilot begins inside the response silence and extends through both final catalyst lines at local 2339 and 2413. B2 quick begins inside its response silence and covers the final stage and later result at 2166. It includes the established trail that caused the finding. These pilots do not cover the full lessons or the complete response intervals. Root owns sequential rendering and native playback review with captions and controls both visible and hidden, including smaller player size and unchanged upper information.

`before-inputs.json` captures 39 existing files before the correction. `correction-record.json` binds those files, the three relevant source hashes, unchanged v4 source hashes and exact pilot ranges. `markup-check.json` compares actual React server output with runtime `7106255` at 42 synthetic frames: missing/false defaults are identical and opted-in markup differs only in trail padding. `author-check.json`, draft checks and validation logs record source, timing and media verification. These checks do not replace native pixel observations or human listening. No new voice, render or full export was run by this author.

The creation script uses exclusive new-file writes and refuses to overwrite existing v4 outputs. Its snapshot mode captured the historical inputs before the runtime edit. Author-owned inputs are frozen after the final check; subsequent pilot snapshots and reviews should be additive.
