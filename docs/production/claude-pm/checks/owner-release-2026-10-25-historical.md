# Historical unpublished candidates: bounded release audit

25 October 2026. Read-only local audit for the release integration owner. No legacy source, frozen package, visibility or approval was changed. Root owns the live Studio draft check.

## Preferred enzyme upload: ZTxQP7kI5_o

**Held. The original missing dependency was not recovered, and the exact local MP4 is absent.**

The recorded selection is `out/prototypes/enzyme-story-feedback-2026-10-09/render-03/video.mp4`, video SHA-256 `5757b2e50bda1c82291a501f6fb48b77b861f482ab99d1983d7b89688d93dd34`, package SHA-256 `b3a390a259f089c9bd9612534903168759b31d25b0a7130904143439b847285a`. These are historical recorded hashes, not fresh verification of a local MP4. The entire selected package directory is absent in this checkout.

The metadata is recoverable without changing files by reading `docs/production/handoff-state-2026-10-09.zip`. It contains the selected narration, render record, input/release snapshots, captions, technical checks and upload metadata. The input snapshot records 814 dependencies. Its required `src/lesson/types.ts` must hash to `c4c631cd4bb22cd3c72cef67a61372af20bdc846683a8005243d406eec0a044c`.

Recovery search performed:

- Inspected all 20 commits returned by `git log --all -- src/lesson/types.ts`. Neither raw file bytes nor LF/CRLF variants match the recorded hash.
- Hashed available `types.ts` copies under `out/checks`. No exact matching copy was found.
- Decoded the actual base64 source member in all six local `out/archives/quantitative-source/*.source.json.gz` archives. All six contain an older `src/lesson/types.ts` with SHA-256 `8d7bb71b4e686071916c21c8f6446209985459d9597eae29557e2c7b57a748e9`. Neither those bytes nor LF/CRLF variants match the required dependency.
- The separate `src/slides/diagrams/dioramaKinds/types.ts` dependency does match available Git/pinned copies. It is not the missing dependency.

The historical owner's acceptance is already recorded in `docs/production/user-approved-release-2026-10-10.json`, which explicitly includes the preferred enzyme ID and separates owner acceptance from missing technical checks. Therefore the old 9 October statements that owner approval was still pending are historical, not the main present blocker. The current source/package verification hold remains concrete and unresolved. No hash was reconstructed, rewritten or substituted. A verified original copy from another computer or an original archive would be needed to clear it. The documented GitHub media backup may restore the MP4, but downloading media alone would not establish that the missing renderer dependency exists.

## Mole Concept Part B: Studio draft Chemistry Y11 M2 L1B

**A local full MP4 exists, but this audit does not establish it is the exact Studio draft or a cleared release package.**

- Video: `out/Chemistry-Y11-M2-L1B.mp4`, 33,591,871 bytes, freshly computed SHA-256 `52a6b6a9f3e8075b60da27f4af87cb38f7be7b9bacac33ca032c14cd26053ee4`.
- Source: `src/data/chemistry-y11-m2-l1b-mole-applying.json`, explicitly marked `productionRole: reference` and assuming Part A.
- Captions: `out/captions/Chemistry-Y11-M2-L1B.srt` and `.vtt` exist.
- Saved YouTube metadata and narration manifest: `out/youtube/Chemistry-Y11-M2-L1B.yt.json` and `out/voiceover/Chemistry-Y11-M2-L1B.manifest.json`. Copies also survive in the handoff-state ZIP.
- Course records classify it as an existing channel draft with source review pending. No matching full-package snapshot, render record, hashed review set or release-gate pass was found in the bounded local inventory.

Concrete remaining work is to identify the Studio draft's actual media, bind it to a selected exact file, inspect the complete voiced exported lesson and caption fit, verify the calculations and question/reveal behavior in that selected export, and supply the existing package/release gate evidence. File presence and a saved title are insufficient to mark that work complete. This audit did not play or listen to the MP4 and does not approve publication.
