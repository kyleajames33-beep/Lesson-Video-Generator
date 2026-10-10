# C2 measured voiced candidate

Prepared 10 October 2026 by Sol 6.1 after root completed nine fresh recordings and the frozen assembly wrapper. No paid request, media modification, full export or listening approval was performed here. The three initial assembly files, frozen selected source, coded component and historical recording preparation are unchanged.

The additive candidate is `out/prototypes/module5-c2-voiced-2026-10-10/narrated.lesson.json`, SHA-256 `68a69277f041d60281369572e4f670d37e22ece12ab000706d638324bd103a90`. Its portable `remotion-props.json` contains only `{lesson}` and has SHA-256 `b402dbab0e32c953a3dd764bef47b46c59910c3227d3cf66b28a1184448adeef`. The full report is `measured-cue-report.json`, SHA-256 `d029e75ca9fcdd5099be5d9ef8c1ee674a952ee2fe39e0513fa3efa6adca4ec0`.

The report binds the frozen spoken source, initial assembly files, assembled audio and alignment hashes, component consumers, exact matched phrases and final display fields. It checks every scene's spoken text against the frozen selected JSON and every caption token against its selected assembled alignment. Cue starts use ceil(seconds × 30), so a cue does not precede its aligned phrase. Bullet `at` uses seconds; reveal delays, diagram cues, takeaway cues and stage line cues use local frames. All durations use the measured assembled media plus the existing 45-frame reading tail and 24-frame transition allowance. The silent title remains 120 frames. With overlapping transitions, the candidate lasts 11308 frames, 376.933 seconds.

| Scene | Measured progression, local frames | Duration frames |
| --- | --- | --- |
| Hook | A-only diagram 260; question 380; reverse arrow and overlap answer 615 | 859 |
| Model | One-to-one 113; declared simple model 376; A-only explanation 588; bar conversion begins after the zero-reverse explanation at 880, first positive reverse 881; insulated distinction 971 | 1118 |
| Collision | Collision conditions 274; barrier 430; distinct NO2 association example 718; more meeting opportunities 915; conversion-versus-mechanism qualifier 1174 | 1711 |
| Rates | Forward trace 192; reverse trace 296; exact limiting-state card 852, after both finite curves finish | 1173 |
| Concentration | A trace 77; B trace 123; unequal limiting-state card 224; rate definition 476; concentration definition 562; different start 836 | 1085 |
| Catalyst | Composition chart 639; shared limiting level 824; early marker 886; marker removed and final-composition callout 1085 | 1411 |
| Transfer | Prompt silence 1172 to 1472; first answer 1472; reverse reasoning 1544; rate comparison stage 1600; net four 1909; catalyst stage 2185; sooner line 2339; final D line 2413 | 2878 |
| Summary | Recap rows 0, 396, 598; C3 handoff 860 | 1145 |

The catalyst component draws the catalysed curve over 150 frames and begins its uncatalysed trace 120 frames later. Entering the chart at the unchanged-final-composition phrase gives both traces time to reach the early marker coordinate by frame 799, before the marker at 886. Both complete by 909. Endpoint energies, shared limiting level, graph scale and component are unchanged. Finite concentration traces remain labelled as approaching equilibrium; the separate limiting-state card does not declare finite-time equality.

Transfer prompt and feedback stay separate recordings with exactly 300 inserted silent frames. Neither token captions nor grouped caption cues enter the interval. The response gate begins the first answer at frame 1472. Stage zero reveals C's increase first and D-to-C reasoning at its later spoken cue. Stage one retains that result, compares supplied rates and withholds net four until the exact phrase. Stage two retains the rate reasoning and separates the faster-approach and final-D lines. The generated SRT and VTT use the same measured token captions and global timeline.

`reconcile-cues.mjs` can be run without arguments to recompute the plan and check hashes. `--write` creates additive candidates and refuses to overwrite them. `cue-dry-run.json` is the first measured draft and retains its initial catalyst entrance for history. `cue-application.json` and `measured-cue-report.json` are the corrected final author timing record. The lesson validator passed without errors, with its two existing generic suggestions for a text pause prompt and standalone misconception scene. Actual `release-preflight.mjs` passed with zero errors and warnings; its stdout is retained here. That script also wrote its standard shared audit at `out/audits/release-preflight.json`.

Root's later bounded silent-title support in `scripts/lib/timeline-narration.mjs` permits an aligned PCM pilot without inventing title speech. It is separate from this timing change and from historical recording preparation. Root owns rendering and review bindings. Use the candidate and current companion production brief for a short exact voiced pilot after independent timing review. Full export still requires export-stage brief approval and current input freezing.

Independent cue review, exact voiced playback and human listening remain pending. This author report supplies no playback pass. Check dense qualifiers, narrow supporting copy, staged line reading time, collision visual entrance and any early marker/curve interaction during playback. Model bullet numbering briefly skips an unrevealed row because the frozen source order is retained; this was a nonblocking silent review observation. Preserve this candidate and evidence if making another revision.
