# Independent C2/B2 v4 caption-layout source review

Date: 10 October 2026. Reviewer: `/root/bio_b2_independent_review_sol`, Sol 6.1 independent review role.

Recommendation: proceed with exact v4 short-pilot and native-caption inspection. The source correction is bounded to opted-in established-trail vertical padding. No lesson, words, audio, caption, cue, hold, duration or default-layout drift was found. **Caption clearance remains pending native evidence.** The estimated second-row margin is small and is not a substitute for actual glyph, caption and player-control observations.

This reviewer created only this additive report. Prior reviews remain preserved. No candidate, source, media, config, brief, gate or approval record was changed. No paid voice or rendering was performed. This report supplies source and metadata review only, without native-frame, continuous playback, listening, device, accessibility or full-export approval.

## Exact reviewed inputs

All hashes below are SHA-256 byte hashes. The exact frozen author manifest is `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/frozen-author-inputs.json`, SHA `f813874a1da78d54db8cdc60c828eb1c3c20709fd7d1635f3436075c6c8216bb`.

| Input | Exact path | SHA-256 |
| --- | --- | --- |
| Evidence board | `src/slides/shared/Module5EvidenceBoard.tsx` | `1ac601329e7f1a742cb59437ba4246e1125c2c531c90334c7a4ce944a408a0c3` |
| Shared type | `src/lesson/types.ts` | `75c820485134597e0ed672efc2bac92562d7d4360b6c683fe480679b789dd627` |
| Quick-check consumer | `src/slides/QuickCheckSlide.tsx` | `072845ea3d934186a40725f7c3dbf2c79027d9a56a8b7db6385e698aadf7a5e2` |
| C2 v4 candidate | `out/prototypes/module5-c2-voiced-2026-10-10/narrated-v4.lesson.json` | `f4e473e210efdb0a53f10b6dd636e261ef112a7fca0f146a92da2557ce75a3ba` |
| C2 v4 props | `out/prototypes/module5-c2-voiced-2026-10-10/remotion-props-v4.json` | `819a9ef4a7d852f66cecba28ab2ceeb54a48e117278bc5bf8620f9d1e1217277` |
| B2 v4 candidate | `out/prototypes/module5-b2-voiced-2026-10-10/narrated-v4.lesson.json` | `ff680f50cf74fb6821a3244752599c718624158e42d93ed9db7b0dc19ce47496` |
| B2 v4 props | `out/prototypes/module5-b2-voiced-2026-10-10/remotion-props-v4.json` | `b5303c370df71896090e515d86f187048d1132e1e562db04989e66d4c6a6ac44` |
| Author correction record | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/correction-record.json` | `34c0051bcebe8440d1ae0cbd50e4248929dd909ed6439dfb113636afe7ac1f4c` |
| Author check | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/author-check.json` | `2715a594a7a4abaf5ab3cb765fb6fcfb198d65b4f91b1f2ba88b3469305950ff` |
| C2 brief | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/c2/production-brief.json` | `0b9e605d0718d3559c26edc563995d9b9fdf5653b0e52e112abba0746a328c94` |
| B2 brief | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/b2/production-brief.json` | `c10730878d5324cea44bc98dc5a49218c46bf3cf89d45ba1d710d2e1882e520d` |
| C2 transfer pilot config | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/c2/transfer-pilot03-config.json` | `e0f326c12993bcced524b2a9fea8a171e46ae91ce6e35dbc3d62975ae509826d` |
| B2 worked pilot config | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/b2/worked-pilot03-config.json` | `1edc135280c6ce7a96e80b92345a58085219103a8fed6036ec1783c3bad50ed8` |
| B2 quick pilot config | `docs/production/module5-c2-b2-caption-safe-v4-2026-10-10/b2/quick-pilot01-config.json` | `9b4242a733a7fb2fa040f796e252a17884af0bcea68f4798a524eb6d056e4832` |

Independently hashed all 26 files listed in the frozen manifest and all 39 historical files in `before-inputs.json`. Every current hash agrees. The earlier v3 source report remains SHA `a3deb207a325f038883b6959bcc9b928bc7563c8efbb865110ef4ed248676cdd`, and the earlier measured-timing report remains SHA `86dd1274a5a6cbbafb652f7a20d81ac8090223f88f6d97181d451a24e8d94ad3`.

## Bounded change and retained measured behavior

Compared the three shared source files with v3 runtime checkpoint `7106255`. The only difference is one evidence-board expression: established rows use `captionSafe ? '4px 0' : '10px 0'` instead of unconditional `10px 0`. `captionSafe` is still the strict test `presentation.captionSafeWorking === true`. Missing or false flags therefore retain the prior padding; other numeric styles, font sizes, line heights, borders, columns, active-card geometry, prompt/countdown geometry and timing logic remain unchanged. No clipping or hidden-overflow workaround was introduced. The shared type and quick-check component have no v4 diff.

Independently compared complete bytes and parsed lesson objects. Each v4 lesson is byte-identical to its v3 lesson, each v4 props file is byte-identical to its v3 props, and the props' lesson equals the selected candidate. Compared with v2, C2 differs only by the `captionSafeWorking: true` flag on `c2-transfer`; B2 differs only by that flag on `worked-example` and `quick-check`. All spoken words, voiceover selections, diagrams, captions, bullet seconds, reveal cues, line order, summaries, response holds and durations remain unchanged. The v2 ordering corrections remain in place, including B2's final quick-check top-to-bottom result cues `[2034, 2166]`.

Independently ran the read-only `verifyAssembly` checks on all eight C2 and ten B2 voiced scenes. Each returned no errors, including assembled WAV/alignment hashes, selected recording/alignment/generation hashes, text hashes, caption derivation, playback windows and response/answer boundaries. Independently read the response WAV sample intervals: C2 `[1172,1472)` contains 480,000 zero-valued samples at 48 kHz, and B2 `[980,1340)` contains 576,000 zero-valued samples. The actual inserted holds remain ten and twelve seconds respectively. The lesson timelines remain 11,308 and 13,963 frames at 30 fps, and caption-token counts remain 871 and 1,030. These establish unchanged measured source behavior. They do not provide a new listening or whole-playback judgement.

Inspected the author's 42 synthetic React-markup cases, SHA `1f96ffa7ce0b4e906809a80e44ea8f7d92251132509265221faac57039df0c52`, and TypeScript log, SHA `f46837498c07f56769c20ba7f3bd54881c1d1860c3c71ad7456511f047bca2fe`. Those remain author evidence. This reviewer did not rerun them or relabel server markup as native geometry. The independent conditional source diff establishes the bounded default behavior here.

## Concrete geometry finding and native handoff

**P1, final established-trail clearance still requires observation.** Each opted-in row loses 6 pixels of top padding and 6 pixels of bottom padding, so its overall height decreases by 12 pixels under unchanged wrapping. First-row text moves up 6 pixels; second-row text moves up 18 pixels, including the preceding row's 12-pixel reduction. Two established rows are 24 pixels shorter. Trail font size 44, line height 1.13 and width 560 remain unchanged.

Root reported the v3 B2 final trail's lower `count.` glyph near native y865, below the conservative y850 reserve. This report did not observe that playback. Subtracting the source-derived second-row shift estimates y847, only about 3 pixels above the reserve. That is a useful prediction, not measured clearance. Font metrics, wrapping, actual caption line count and controls must be observed in the exact v4 state. The unchanged active card's nominal bottom remains 842.32 under the prior single-line model; this padding change does not resolve any separate wrapped active-card, givens/note or pause-region issue.

The exact three configs now provide broader late-state coverage than the initial v3 pilots:

| Pilot | Scene-local inclusive frames | Global inclusive frames | Frames and seconds |
| --- | --- | --- | --- |
| C2 transfer 03 | 1322 to 2550 | 8631 to 9859 | 1229, 40.967 s |
| B2 worked 03 | 880 to 1353 | 8464 to 8937 | 474, 15.8 s |
| B2 quick 01 | 1230 to 2250 | 11274 to 12294 | 1021, 34.033 s |

C2 transfer includes final stage onset 2185 and both final result cues 2339/2413. B2 quick includes final stage onset 2034 and its later result at 2166, including the two-row established trail that triggered the reported finding. C2 local 2500 and B2 quick local 2240 are useful settled late samples inside these ranges. They need actual native inspection of the complete active card and trail alongside captions, followed by player inspection with controls visible and hidden. Smaller-player observations and unchanged upper supplied information need their own evidence.

The C2 and B2 quick clips begin inside their response intervals, so they do not cover the complete ten- or twelve-second holds. None of the three clips covers the whole lesson. Successful late stills establish only the observed static states; successful pilot playback establishes only the played ranges and conditions. Prior source estimates about wrapping are dependencies to inspect, not asserted failures in v4.

No additional source correction is requested before exact pilot inspection. A failed observed clearance requires a further bounded source revision and new hashes. Native pilot observations, human listening, whole-lesson/device checks, current brief and full-package gates, full export and publication remain pending and separate. Root retains those decisions. This source report is frozen before any later native-evidence follow-up.
