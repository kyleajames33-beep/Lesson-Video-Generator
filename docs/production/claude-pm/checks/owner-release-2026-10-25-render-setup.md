# Isolated explainer render setup review

25 October 2026. Independent Codex review by `/root/render_setup_review`. Source, dependency hashes and timeline checks only. No playback, listening, completed-export or publication approval is claimed.

**Result: no setup blocker found for these four exports.** Root still needs to verify the completed MP4s and their release packages.

The workspace reviewed is `out/checks/owner-release-2026-10-25/frozen-workspace`. Compared the three changed tools with the original copies in its `out/checks/owner-release-2026-10-25/` evidence directory.

- `writeEntry` now imports the same named config that the registry selects for each lesson. All four generated entries use that export, the shared `ExplainerVideo`, 1920 by 1080, 30 fps and the cumulative scene frame count. The change removes unrelated catalogue imports from the browser bundle. It does not replace the lesson renderer or scene components.
- The renderer passes one supported `openBrowser('chrome')` instance to composition selection and every chunk render, then closes it in `finally`. Codec, CRF, audio selection, delays, mastering and mux logic remain unchanged. The new `chunks-v1-frozen` folder separates this run from the earlier partial chunks.
- The snapshot adapter uses cumulative scene durations only for composition IDs beginning `Explainer-`. That matches `ExplainerVideo` and the audio mux. The legacy branch is unchanged. The old snapshot timeline deducted legacy transitions and was inappropriate for these explainers; this correction changes the recorded timeline, not playback.
- All 45 selected scene, shared runtime and measured-lesson files checked are byte-identical between main and the isolated copy. The shared files checked are `ExplainerVideo.tsx`, `kit.tsx`, `cues.ts` and `types.ts`, plus every file in the four selected scene folders and their four measured lesson JSON files.
- All 124 lesson asset entries in `media-inputs.json` match their recorded SHA-256 in both main and the isolated copy. These entries include the selected audio, fonts and artwork, with some shared files counted in more than one lesson.
- `verifyRelease` passed on all four current `inputs.snapshot.json` files: no changed or missing required dependencies.

| Lesson | Config export | Frames | Input package SHA-256 |
| --- | --- | ---: | --- |
| Chemistry M6 P06 | `config_m6p06` | 14691 | `89454e365e4b997ee9ae1c7ad409b96e972c995f23065dcad459bcdae9f5d746` |
| Chemistry M6 G01 | `config_m6g01` | 14908 | `d459f1a541d54486c886b682f4d53765609569d48183e1a1364a2ef690e8a2de` |
| Chemistry M6 G02 | `config_m6g02c` | 15464 | `c273809b761b00104f4e08b49e1263f175aec8f2216fde89ed1654e8c9628d16` |
| Biology M6 P01 | `config_m6p01b` | 14697 | `42358843537cc187454466a25df539c6050c14973d7c1134584f289a79b895c8` |

The snapshots establish the current isolated inputs. They do not prove a completed output came from them. Root must retain the render process result, repeat the drift check after rendering, verify full frame counts and duration, inspect the final encoded media and captions, and bind release reviews to the exact MP4 hashes. The shared `node_modules` junction remains an environment dependency; no package installation or binary modification was performed in this review.
