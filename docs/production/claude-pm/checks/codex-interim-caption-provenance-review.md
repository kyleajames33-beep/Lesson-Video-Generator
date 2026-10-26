# Caption replacement provenance review

25 October 2026. Local documents and files only. No current Studio caption track was inspected. No media, caption, lesson, upload ledger, board or status file was changed.

The 18 October records explicitly document publishing 31 replacement `captions-fixed.srt` tracks. Their upload-ledger caption fields still identify the earlier `captions.srt` files. A hash match to those ledger fields establishes the old local track's identity, not the current live track's identity. Current live captions must be read back in Studio before any claim that they are wrong or any replacement.

## Documented publication and unchanged local artifacts

- [Brief 78](../codex-prompts/78-captions-qa-published.md) instructed caption-only fixes beside the originals, then updating YouTube captions. It did not authorise narration or audio changes.
- [Published captions QA](../youtube/captions-qa-2026-10.md) says the fixed files keep cue times, balance lines and use conventional chemical notation. Its final paragraph documents upload and publication for all 31 public videos on 18 October. It records a separate B3B published-date read-back and a corrected Biology G01/G01B folder mix-up.
- [Channel audit](../youtube/channel-audit-2026-10.md) independently repeats `Fixed SRT published in Studio` for all 31 rows, including the first seven. It explicitly leaves full public playback pending.
- [status.md](../status.md), Brief 78, lines 934 to 936, records publication of all 31 replacement tracks and the B3B/Biology G01 checks.
- All 31 current fixed SRT files are byte-for-byte identical to their versions in commit `93642fc` (18 October, 22:55 Sydney time). This proves local artifact continuity. The documents do not record downloaded live-track hashes, so they do not by themselves prove today's live bytes.

The seven earliest videos are C1, B1, mould, C2, B2A, C3 and B2C. Their fixed files all exist and are included in that documented replacement. Five early upload records have no caption hash; the absence of an original ledger hash is not evidence that their fixed replacement was never published.

## What changed, and what did not

Across all 31 files (5,589 cues), every fixed cue has exactly the same start and end timestamp as its original counterpart. None of this set is a timeline repair. Sixteen tracks change line wrapping only; fifteen also change normalized cue text, totalling 213 cues, principally chemical notation. These are the caption changes documented on 18 October. There was no narration or audio change for this QA pass.

The current staged candidates were checked in `earlier-waves-2026-10-25-v2` and the separate B3a `earlier-b03a-2026-10-25-v2` directory. All 31 staged tracks preserve the normalized text of the older original SRT. They do not preserve the full documented fixed baseline: 1,654 cues differ in exact text/line wrapping from fixed files, including all 213 normalized-text edits across the fifteen notation tracks. All staged file hashes differ from their fixed-file hashes because the staged files also change timing.

Examples of a regression if the staged text replaces the documented fixed text:

- C2 cue 6: `pentachloride, written PCl₅, and nothing` becomes `pentachloride, written P C L five, and nothing`.
- C4B cue 133: `Nitrogen and hydrogen make ammonia, NH₃,` becomes `Nitrogen and hydrogen make ammonia, N H three,`.
- G03D cue 17: `For two NO plus chlorine making two` becomes `For two N O plus chlorine making two`.

Earlier independent arithmetic checks remain valid for the candidate timestamps. Their claims that original text and line breaks were preserved referred to the older ledger/original files. They did not establish preservation of the later documented fixed artifacts.

## First seven: exact local variants

Paths in this table are fixed files. Each corresponding original is `captions.srt` in the same directory. All have equal cue counts and identical original/fixed timestamps. The original local hashes below fill inventory gaps only; they are not newly discovered live-track hashes.

| Video ID | Fixed file | Original SHA-256 | Original hash in upload ledger? |
| --- | --- | --- | --- |
| `zaC5iXuovKg` | `docs/production/claude-pm/lessons/c1/measured/captions-fixed.srt` | `97a7eb56a5dbcf5a614d474d2a256c01a88ea411a82c9ef56304244e90b09309` | No recorded hash |
| `44FFfv7RGck` | `docs/production/claude-pm/lessons/b1/measured/captions-fixed.srt` | `44a2a50ae2425685b49c9d0a88acce1af32617222513137aa949e1419a788327` | No recorded hash |
| `w7edKqGAUwA` | `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/captions-fixed.srt` | `be6a02cbeb5e8516568e719b35da01217e71a2a3092e97805c8e22110df1b3dd` | No recorded hash |
| `vd9Ory9-flE` | `docs/production/claude-pm/lessons/c2/measured/captions-fixed.srt` | `b11aa3bffdda6b4e52cb28310a7d5fa145f1cf500dea607855bf1efad6951bbd` | No recorded hash |
| `0P33z4D2q0E` | `docs/production/claude-pm/lessons/b2a/measured/captions-fixed.srt` | `4bb818f95637a72a3d47ab37968ffde752b220ae8b1815014fab3d67e1f2c439` | No recorded hash |
| `w0GzgApQhQY` | `docs/production/claude-pm/lessons/c3/measured/captions-fixed.srt` | `a9b6be733ef10b60094bd7fad7a4964a2104b3be1d86d8bf1ec6fc30a14c60c1` | Yes, matches original |
| `kG-KexGgCzc` | `docs/production/claude-pm/lessons/b2c/measured/captions-fixed.srt` | `26357c993d9922c5d290716bd4fba99684b4640fa4e1e3a3c4d0b23ec0637063` | Yes, matches original |

## All 31 affected tracks

`Text edits` counts cues whose text changed beyond whitespace between the original and fixed SRT. Every row has identical original/fixed timestamps. Each fixed file is at `docs/production/claude-pm/lessons/<key>/measured/captions-fixed.srt`, except mould at `docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/captions-fixed.srt`. G01 is Chemistry; G01B is the Biology G01 published video, matching the QA's folder clarification.

| Key | Video ID | Cues | Text edits | Fixed SHA-256 |
| --- | --- | --- | --- | --- |
| b1 | `44FFfv7RGck` | 163 | 0 | `18b8557c9a4abfc25663a434ea73b01995bb8ae27bcbf72657b5e90b606da913` |
| b2a | `0P33z4D2q0E` | 233 | 0 | `0b6c2c0a79974dc5e471417fb9932cdef42db86667f760c6c3fd5bae0af7713b` |
| b2b | `j2fxl5xvDwE` | 212 | 0 | `a7ffeb2916aae86c8f06c03e3166b42af2f640cb622ca93706c1512b4d60cc10` |
| b2c | `kG-KexGgCzc` | 205 | 0 | `43c304ac9154c2886dfc87d357c6fcb8ae308520a0f94d7dc24987b86fb44bed` |
| b3a | `bUPs256KyVY` | 191 | 0 | `b91572ab23e811fc9ff5e72b13108263c45d02f813bd4557281755d369858cdb` |
| b3a2 | `Mlz5XT5XR7o` | 183 | 0 | `09e7f523c8562e2306075e63443b7cdfe806051fda8acdde4172d6ce57fb4f56` |
| b3b | `btrFMU7Yhxc` | 195 | 0 | `084b989f643a5e8a5df1e8d6447377ac6a0d7da587ec7827ed1c8ced63057b24` |
| b4 | `P9jyiLiGhZI` | 208 | 0 | `847ca8b1ee59e4170301db450fdd5fc9bd927145839d93a411d6ce6d73883e61` |
| b6a | `2vsAqgI-1NI` | 201 | 0 | `ce6325bf3ff7c99a2187fc4489d6eb7c12bc1dd06ece88974376573e748a94db` |
| b9 | `6BhGJlXbKCA` | 176 | 0 | `5af6bd139ac5058e8368047895a6b2523fe1b205e7fee5c93b551e2b73373a53` |
| c1 | `zaC5iXuovKg` | 158 | 0 | `3d23273b12ffce728b4703adc7547ab1a46c59174f4cc10b050a8cfbcbf4d27b` |
| c11 | `PQ9nuqM4b-Y` | 192 | 0 | `ad0c2d3ad05620eee337221602be1bd699020d9b7ba99471c5386a39383e7257` |
| c13 | `4IYt7nemcRI` | 186 | 5 | `ce01bed6bd952efa59afd162f0501cd3fbfb8418c52ced60e57ca820e0f33e0d` |
| c14 | `UMgrHQaLSH8` | 178 | 5 | `53f86b2749b15dd7d7b904ebea5a3420ba9ecd72cb6c82002139b423d08c10e4` |
| c2 | `vd9Ory9-flE` | 192 | 41 | `85efef638c232f1b7418bc382277458c22728e3815e1c5bacf48ee09b8c25d4f` |
| c3 | `w0GzgApQhQY` | 226 | 20 | `34edf008d9900f3b4c04238f97acef7dc83745f8a1bfe9bf845d57efa7778c8c` |
| c4a | `yk5KVdipGRE` | 205 | 38 | `012867cf4e665e51655206a9ca7242bc40c6bebc0d123aebc66b69395ca6348e` |
| c4b | `jDkHt4rf6bI` | 194 | 1 | `98f53589f4b80e73cd139e93b4ce1d6dd058c623c1f27375156cbfc687db8a8e` |
| c5 | `NJjEgjilgAE` | 149 | 1 | `7e253db9d8542ac05b809433203ed6d150bfa92d53c539f9065b7a5414f94072` |
| c6a | `_NLAkMBNyRY` | 179 | 35 | `dcf4c37d95d5213572e4d251e737ffc69390c1d9dada9357bc2516b3be2892c9` |
| c6b | `Zs1oO5eCIqc` | 210 | 17 | `7bdb14eb8d06b9f712acdd1b5df30b3a7c66d9517347cb317557b1021cca3893` |
| c7 | `8hZ3MVi7kHU` | 168 | 3 | `fa3bb37577d94b80a42087b3e84a408635431c4d63e19701a03a62b4a2c4efb2` |
| c8 | `IWS7_MDw-yc` | 167 | 3 | `2c9fdeb38b790a444e6ec8e2821f66213aac856d12c384c9ba1c95c5cd76f67a` |
| c9 | `9TxH_y3ZOdU` | 190 | 21 | `0b8788517538ae03adecd1cbd61b7e5c2c4cb0e97735c35dd33b95eab6caf1e2` |
| g01 | `BdF_sRrt5Yw` | 204 | 2 | `a768cc189cfac3a59353785110cdd7f0af8763ce7b2885f74581611d92d70f84` |
| g01b | `QcSZ2Wn0CE0` | 179 | 0 | `1fec3d957a449084793f338e5e2856f87aca8969d1171c386a849f5824e8c1d4` |
| g03b | `A0Z2-OLzRCI` | 118 | 0 | `ba277860582959f62425d6510b526b765a423820655bf6332db80639145e0ddf` |
| g03c | `UPoHGWWm9MA` | 120 | 2 | `e47266ba731401f741485c8695fa8377739e96d4ce76211aae92709c94079b0c` |
| g03d | `wSSh97iXkio` | 151 | 19 | `d4facd4fd2b86f3d19bdcd6f7291f8095d9c703145762ddc90176d0ed297569e` |
| p03 | `cY7hnSTN1uY` | 178 | 0 | `cbea578c4498b92d2224197e2110655e78a2ca141ba5a7c7ee20d023c9928554` |
| mould | `w7edKqGAUwA` | 78 | 0 | `991027389eed288872831d21bbfbe5f0b91e53df101b25ac21f95c2b2f3c2b31` |

All 31 ledger paths still point to `captions.srt`. For 26, the ledger hash matches that older original; five have no hash. None of the 31 ledger hashes matches the local fixed file. The fields are therefore stale relative to the documented 18 October replacements. This does not identify which bytes YouTube currently serves.

## Constraints for root's next action

1. Read the current published track in Studio, including its language and representative cue text, before choosing a replacement baseline. Record that separately from the historic publication claim.
2. Keep the proven sequential timing repair, but preserve the verified fixed track's notation and line wrapping. These 31 fixed files have the same cue count/order and timestamps as originals, which permits a checked cue-by-cue text transfer without inventing new narration. Their changed notation must not be rejected merely because it differs from word-for-word spoken text.
3. Pin both the original timeline diagnosis and the fixed text baseline in any new manifest. The existing selected manifests pin older originals, not these documented fixed files. A filename alone is insufficient, and no live-caption replacement is established by this report.
4. Retain the separate B3a constraints: its audio timing evidence supports the current tested scene starts, its tail variance remains unresolved, and baked-in caption presentation is a separate issue. This provenance finding does not resolve that layer.

## Review inputs

SHA-256 fingerprints of the documents and candidate manifests inspected:

| File | SHA-256 |
| --- | --- |
| `docs/production/claude-pm/youtube/captions-qa-2026-10.md` | `c91cb6b3860f580477e3f5ad11213020d5fe58e81d479d0074287ddbf240d69a` |
| `docs/production/claude-pm/youtube/channel-audit-2026-10.md` | `fe958b0d7bd123eb4c2b0b2018aeb7041c695c87d36068af01f3055f42017fa8` |
| `out/caption-repairs/earlier-waves-2026-10-25-v2/manifest.json` | `82f925c927ca676b53b2e796462021e426f92fbf32bfba9f8c039778478c7643` |
| `out/caption-repairs/earlier-b03a-2026-10-25-v2/manifest.json` | `b3446ac75ffc13c07353fdf9547f784c9559e10a796ef5f82cc0e77eb3feab4f` |

## Addendum: saved Studio editor tracks checked on 25 October

This is separate evidence from the local-only review above. Root downloaded five saved English (Australia) editor tracks read-only from Studio and recorded them in [live-caption-provenance.json](codex-interim-live-caption-provenance.json). I independently hashed the raw SBV downloads and fixed SRT references, parsed both formats, and compared every cue's exact text, internal line breaks and millisecond timestamps. This was a saved editor-track comparison, not public playback, a fresh public caption download or a listening check. No captions were edited, saved or published for this comparison.

All 824 cues across these five tracks have exactly the same text and line breaks as their QA fixed SRTs. Every start time matches. B1 also matches every end time. Eight cue ends across the other four tracks are 21 to 141 ms later than their QA reference. The files therefore establish the saved editor's QA text baseline, but four are not exact timeline equivalents of their local fixed SRT. The small end differences do not constitute the cumulative sequential-timeline repair. Their cause was not established here.

| Lesson | Cues | Exact text and line breaks | End-time differences (saved editor minus QA) |
| --- | --- | --- | --- |
| chem-m5-c01 | 158 | All match | cue 96: +101 ms |
| bio-m5-b01 | 163 | All match | None; timing matches exactly |
| bio-m5-mould | 78 | All match | cue 52: +101 ms |
| chem-m5-c02 | 192 | All match | cue 39: +141 ms; cue 158: +101 ms |
| bio-m5-b02a | 233 | All match | cue 101: +101 ms; cue 159: +21 ms; cue 187: +101 ms; cue 208: +140 ms |

These five direct checks support the documented QA replacements and show that the earliest saved tracks cannot be identified from upload-ledger originals alone. They do not settle current saved or public state for the remaining 26 QA tracks, nor current public playback behaviour for these five. A new repair should preserve the proven QA text/line breaks and record any saved-track end-time differences separately from source-based timing.

Raw download SHA-256 values, independently matched to the capture record:

| File | SHA-256 |
| --- | --- |
| `out/checks/caption-live-provenance-2026-10-25/chem-m5-c01.sbv` | `4c5aa9468c6d26532a4fb248711a18c41881c68c7953b1caa2a712340c3a86d9` |
| `out/checks/caption-live-provenance-2026-10-25/bio-m5-b01.sbv` | `4e29d6d6629b959a775855652654abdc86b68124af1f21ab8d0b2e5f7337d7b6` |
| `out/checks/caption-live-provenance-2026-10-25/bio-m5-mould.sbv` | `87f550848868b51b9f869af699a0d07d06cc8f5f3fa9b2bcfe12f9c6d68e3302` |
| `out/checks/caption-live-provenance-2026-10-25/chem-m5-c02.sbv` | `1bc9e0c71f4e423dd3e93a8a2d2e40474ab3407dac151511da287b460343b277` |
| `out/checks/caption-live-provenance-2026-10-25/bio-m5-b02a.sbv` | `89af60598ea3374bc2d7fdfcbec35523ba7151aa27ee9361a2a97db85e745cdd` |

Capture-record SHA-256: `111e32cafd97c302065437a677fb4b749ee9f596aef9e4182044d041c570a05a`. Each reference SRT hash also matches the corresponding fixed-file fingerprint in the original review.

## Addendum: independent review of QA-preserving candidates

25 October 2026. Reviewed `out/caption-repairs/qa-preserving-2026-10-25-v1/manifest.json`, SHA-256 `4d791fd72bbc008e6ddc764fae64c86e7783e3f47d1e069e3d3cc5ee15c1089d`. This is a local-file and captured saved-editor review. It makes no independent public playback, listening or publication claim.

All 31 tracks and 5,589 corrected cue bodies exactly preserve the QA text and internal line breaks. Each QA snapshot matches its current local fixed SRT and Git commit `93642fce6e94fdcd407aa9e605c0b0a0cf71e4d8`. All 213 normalized-text edits identified earlier are retained, including chemical notation. SRT/VTT cue bodies and timestamps agree exactly.

Every corrected timestamp matches its prior source-timed candidate. Independent Python checks matched each prior cue's spoken words to the frozen measured words and added cumulative scene durations at 30 fps. All 5,589 starts and ends match the renderer/exporter's floating-point schedule and millisecond rounding. A second calculation with exact rational frame offsets found a maximum 1 ms serialization difference in 24 cues, caused by floating-point rounding at integer boundaries. This is separate from the multi-second drift repair. Every source word is covered once, with no overlapping cues, scene-boundary crossings or intrusions into the 45 response holds. No cue exceeds a recorded media duration.

All 177 frozen source-input hashes, the package input hash and the per-record source/reference/output/QA/prior-candidate hashes pass. Frozen lesson hashes also match their current measured sources. B3a's evidence hash matches its current evidence JSON and frozen snapshot; the separate minus 0.300 s tail variance remains intact. No tail adjustment was spread through its captions.

For all five captured saved-editor references, raw frozen SBVs match the package reference SRTs exactly in timing, cue text and internal line breaks. Raw-download and capture-evidence hashes and video-ID/download mappings pass. The eight saved-reference end-time changes remain separate from the source-based repaired timing. The other 26 records correctly leave current saved identity pending and use Git-verified QA references.

No blocking defect was found in these local outputs. Remaining limits: current saved identity for 26 tracks; public playback, listening and replacement verification; missing local media where recorded; and B3a's separate tail and baked-in caption presentation issues. This comparison does not approve public replacement or the underlying videos.
