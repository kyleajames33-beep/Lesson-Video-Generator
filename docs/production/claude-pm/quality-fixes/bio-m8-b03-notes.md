# bio-m8-b03 (insulin and glucagon): quality fix, 6 Nov 2026

Grade before: B (audit frames 2, 4, 13, 14, 15 and 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m8-b03-sheet.jpg` (16 stills at frames 422 to 13090, spread over the new 13,512-frame length). Extra checks: 1364, 1752, 3183, 7700, 11902, 12419.
Narration, audio and measured scene timing are unchanged. New animation uses word cues in `docs/production/claude-pm/lessons/m8b03/measured/lesson.json`.

## Timing note (root to confirm)
`config.ts` used to stretch the key notes scene to 1,800 frames, which held the notes silently for about 35 s. That gave the two identical key notes frames in the audit. The stretch is removed, so the scene keeps its measured 759 frames. The narration and every earlier scene are untouched. The board still says "Pause the video if you need more time to copy." The video is now 450.4 s (was 485.1 s). To restore the hold, revert the three lines in `config.ts`.

## Changes
- **Three words (frame 2, faded text list).** The liver plate arrives on "Glycogen is". On "packed inside" a liver cell full of glycogen joins it ("liver cell packed with glycogen"), and on "Glucagon is" an amber pulse runs to the liver. The glucose hexagon, glycogen chain and words stay beside the list. The plates shrink as the glucose strip arrives.
- **Insulin opening (frame 4, empty lower stage).** The pasta tray ("the pasta meal") sits there on "Back to the pasta". The islet plate follows, with "beta cells release more insulin" on "beta cells release" and "insulin travels in the blood to cells all over the body". These clear just before the muscle cell arrives.
- **Exam checks (new frame 9).** The pancreas plate arrives with check 1 ("signals only: does not change glucose itself"). The liver and skeletal muscle plates arrive on "The effectors" ("effectors: liver, muscle, fat cells").
- **Feedback 2 (frame 13, sparse working).** Along the bottom, on cue: the islet ("beta cells detect", teal pulses that thin on "released less insulin"), the muscle cell with transporters as glucose enters ("muscle, fat: take it up") and the liver ("liver: stores glycogen"). The working lines are 34 px. The crossed mistake moves under the graph. The small graph's axis labels are 22 px (were 19) and its legend is 24 px.
- **Decision rule (frame 14, one line).** A right-hand panel is there from the first frame, dimmed: rise and fall arrows, the islet and the liver. Each part lights on its question ("rise or fall?", "beta or alpha cells?", an amber pulse with "insulin or glucagon?", "liver, muscle, fat act"). The panel clears for the kidney on "Next".
- **Key notes (frames 15 and 16).** Eight one-line bullets at 34 px replace five paragraphs at 30 px. The memory aid is unchanged, and the silent hold is gone (see above).
- The "HSC-style question" tag is now 26 px (was 22).

## Files
- Edited: `src/explainer/lessons/bio-m8-b03/s1.tsx`, `s2.tsx`, `s3.tsx`, `config.ts`, and `parts.tsx` (only the `ExamGraph` sizes).
- `T`, `FeedbackRing` and `Wrong` in `parts.tsx` are untouched, because bio-m8-b05 imports them.
- The typecheck passes.

## Plates needed
None.

## Still to check
At playback speed, check the list and the plates moving together in scene 2. The two-hormones rings show empty circles until "Insulin works" (about 3 s): not flagged, left as built. Ready to re-render.


Root note (6 Nov): the notes hold is restored at a 40 s minimum (1,200 frames), not dropped and not the earlier 60 s. Two notes frames on the 16-frame sheet are expected for a copy hold.
