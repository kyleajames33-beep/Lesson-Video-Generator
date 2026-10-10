# Chemistry C3 voiced checkpoint

Current candidate: `lesson-v2.json`, SHA256 `4f9a8ae747692747d5e7d9b71fbe4eb44b6c7d050bb8b851ab401c63d784ee67`.

The accepted conversational script now has twelve fresh Simon recordings, ten voiced scenes and one preserved silent title. Forty reveal/model cues use measured character alignment. The two complete practice prompts have separate feedback recordings and twelve seconds of actual silence. Nothing is time-stretched. The full preview lasts nine minutes.

- [Full Remotion Player](http://127.0.0.1:8778/module5-c3-voiced-review-2026-10-10/)
- [Two short voiced clips](http://127.0.0.1:8778/module5-c3-voiced-pilot-review-2026-10-10/)
- [Independent timing review](../module5-c3-voiced-timing-review-2026-10-10.md)
- [Current checkpoint](checkpoint.json)
- [Targeted actual UI observations](ui-observations.json)

The earlier clear-layout approval applies to the display. It does not approve these new recordings. Please listen for natural delivery, science terms and a manageable pace. Watch the whole exact lesson with captions as needed, including both question holds and later answer stages. Check the small-player heat-sign grouping before export. Source timing, decoded stills, UI playback and human listening are separate evidence.

`production-brief-v2.json` has a scoped source pass. Its whole voiced preview and human listening remain pending. The recording-stage check passes; the export-stage check correctly blocks full rendering until exact playback review is recorded. Public release still needs the existing complete-package reviews. No full export or new YouTube upload was made.

## Restore and review

Start with HANDOFF.md and restore the original ignored state/media plus required earlier continuations. Then download this additive immutable archive with the existing transfer helper:

```powershell
python scripts/github-media-transfer.py download-continuation --continuation module5-c3-voiced-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-c3-voiced-media-2026-10-10.zip
node scripts/build-module5-c3-voiced-review.mjs
python scripts/build-module5-c3-pilot-review.py
node scripts/serve-prototype-review.mjs
```

Keep the review server on port8778 using its documented options if another instance is running. The archive contains98 ignored files: raw takes/sidecars, lossless assemblies, both pilot packages, decoded frames and page input records. Pages and their copied public assets rebuild from tracked code plus restored originals. Credentials are excluded. Do not rerun paid generation or preparation/assembly tools to rebuild a page; those tools preserve existing outputs.

## Preserve the earlier diagnostic

`remove-pilot01` was rendered from v1. Its remove-B scene is unchanged in v2. The subsequent actual question review found duplicate pause labels. V2 deletes only the optional `pausePrompt` fields in both practice scenes, preserving speech, conditions, task demands, silence and timing. The current `transfer-pilot02` uses v2 and its dependency snapshot verifies without drift.

V1's exact earlier wrapper and builder bytes are retained in the two `.snapshot.txt` files and `v1-source-overrides.json`. Use those overrides only in an isolated historical runtime if checking its snapshot. Do not overwrite the current v2 renderer. The current main Player and native question clip use v2. Old releases and approvals remain historical evidence.

The current selected source/tools must remain byte-stable during review. Any new affected display or spoken change needs a new candidate and appropriate repeated checks; spoken changes also require rebuilding affected audio and alignment. Chemistry C4 is the route handoff after C3. Biology's rich flowering-plants candidate and its remaining organism contributions retain their separate plan and pending narration work.
