# bio-m5-b03a (fertilisation to placenta): quality fix, 6 Nov 2026

Grade before: B (frames 14 and 16). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m5-b03a-sheet.jpg` (16 stills at the audit times). Narration, audio and measured timing are unchanged; every new element uses existing word cues in `docs/production/claude-pm/lessons/b3a/measured/lesson.json`.

## Changes (all in `src/explainer/lessons/bio-m5-b03a/s5.tsx`)
- **Feedback two, "Two jobs" (frame 14).** The three text pills are replaced by `TwoJobs`: the blastocyst plate (290 px round, "embryo"), the ovary crop in a yellow frame ("corpus luteum") and the uterus crop in an amber frame ("lining"). The plates enter on "If you said", so the frame is full while the mistake is crossed out. The hCG arrow (70 px label) draws on "hCG keeps the corpus luteum", and the corpus luteum glows; the progesterone arrow draws on "progesterone keeps the lining", and the lining frame glows. Labels are 48 px; the two sentences are 40 px; the summary line is 70 px.
- **Memory (frame 15, found in review).** The lower 60% of the frame was empty for 16 s. `StoryRow` now places the painted stage under each chip on its cue (egg, uterus lining, implantation, ovary for hCG, fetus and placenta) with 42 px labels. The row clears 14 frames before the "pro-gestation" lines.
- **Key notes (frame 16).** 9 long bullets at 30 px became 6 one-line bullets at 40 px, plus a framed "Memory aid" card and a "Pause the video" cue. The sperm and egg structure detail stays in the lesson body.

`shared.tsx` is untouched (B04 and B05a import from it).

## Still to check
- At playback speed: the plate entrances in "Two jobs" and the story row clearing before the memory lines.
- Ready to re-render on the existing narration.
