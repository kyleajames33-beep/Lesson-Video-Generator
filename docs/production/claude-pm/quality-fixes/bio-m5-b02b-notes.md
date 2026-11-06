# bio-m5-b02b (plant reproduction): quality fix, 6 Nov 2026

Grade before: B (frames 3, 9, 15 and 12). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b02b-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged. Every new element uses existing cues in `docs/production/claude-pm/lessons/b2b/measured/lesson.json`.

## Changes
- **Pollination opener (frame 3, `s2.tsx`).** The painted flower cut-away is on screen from the first word, so the title no longer stands alone. The anther-to-stigma arrow still lands on "Pollen moves".
- **Seeds-better opener (frame 9, `s4.tsx`).** The question opens on the two routes side by side: the painted strawberry runner ("runners: asexual, so clones") and the bean seed cut-away ("seeds: sexual, so varied"), with "or" between. They clear just before the paddock panel arrives.
- **Potatoes card (frame 12, `s5.tsx`).** Cause: the cue for card 3 matched "Three" in "Three situations", so the card appeared empty during item one. It now uses the second "Three", so the card arrives with its potatoes and text. The card text is 30 px (questions 31 px); it was 28 and 30.
- **Memory (frame 15, `s5.tsx`).** The four step cards (land, tube, join, seed) are on screen, dimmed, from the start. Each one lights up and its border turns amber on its cue.

No shared file was edited.

## Still to check
- At playback speed: the flower being present before "Pollen moves", and the opener fading out before the paddock panel.
- Ready to re-render on the existing narration.
