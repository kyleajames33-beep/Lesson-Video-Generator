# chem-m6-c02 (naming and acid reactions): quality fix, 6 Nov 2026

Grade before: B (audit frames 8, 9, 13). Grade after (stills): B+.
Sheet: `chem-m6-c02-sheet.jpg`. It holds 16 stills at the original audit frames (527 to 16356), except frames 8 and 9 (see below), which are 7934 and 8949.
Narration, audio and measured timing are unchanged. New animation uses the existing word cues in `docs/production/claude-pm/lessons/m6c02/measured/lesson.json`.

## Frames 8 and 9 ("ghosted", "faded")
These were not a scene defect. Audit frame 8 (7914) is one frame after the acid-ammonia to acid-carbonate cut. Audit frame 9 (8969) is the last frame before the acid-metal cut. Every explainer crossfades scenes over 14 frames (0.47 s, in the shared `ExplainerVideo` shell, which I did not change). Re-rendered, 7914 still shows the crossfade, and 8969 shows the carbonate scene at full strength. The sheet uses 20 frames inside each scene instead. Even so, the acid-carbonate scene opened with only its pattern card for about 17 s, so it was made fuller:
- **Acid + carbonate (scene opening).** The marble plate, the particle lens with the carbonate ion, and the empty positive and negative salt slots are on stage from the start. The hops, the H2CO3 split, the salt tiles and the equation still arrive on their cues.

## Changes
- **Feedback 1 (frame 13, sparse).** The salt builder's labelled slots are on the board from the first frame, and the Ca2+ and two NO3- tiles still drop in on their words. The marble plate ("marble: CaCO3(s)") stands beside the pattern card from "a carbonate". It leaves just before the equation (now 56 px maximum) needs the width.
- **Key notes.** Eight one-line notes at 36 px replace five paragraphs at 30 px (the old reaction-pattern note was one 330-character paragraph). The framed memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 759), per the root rule. The video grows by about 14.7 s, all at the end.

## Files
- Edited: `src/explainer/lessons/chem-m6-c02/config.ts`, `s2.tsx`, `s3.tsx`.
- `parts.tsx` and `assets.ts` are unchanged (C04 and M8 C03b import C02 parts).
- A scoped typecheck (the C01, C02 and C03 configs) passes.

## Not done here
- Adding the YouTube link to `youtube-links.json` is a records task for root.

## Plates needed
None.

## Still to check at playback speed
- The acid-carbonate opening: the carbonate in the lens should read as a preview until "The carbonate ion accepts two protons".
- The marble plate fading out before the feedback-1 equation writes.
