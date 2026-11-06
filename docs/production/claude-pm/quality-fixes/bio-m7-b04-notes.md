# bio-m7-b04 (how disease damages farm production): quality fix, 6 Nov 2026

Grade before: B (audit frames 1, 10, 11 and 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b04-sheet.jpg`. It holds 16 stills at the audit frames (454 to 14084, the same times as the audit sheet). I also checked stills at 640 (hook end), 9041 (assess end), 10067 (exam 1 givens complete), 11466 (feedback 1 end) and 12010 (exam 2 givens complete).

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m7b04/measured/lesson.json`.

## Cause of the "missing" exam question text (frame 11)

Not a missing prop, string or asset. The question text is present and renders. It was a cue gap:
- The exam card drew on "First" (scene frame 54), but the first stem sentence was keyed to "A country that exports" (scene frame 94).
- The audit sample (video frame 9540, scene frame 73) fell inside that 1.3 s gap, so it caught an empty card.
- A before-fix still at frame 9575 shows the first sentence on the card, which confirms this.
- Exam question 2 had the same pattern: the card drew on "Second" + 6 and the first sentence waited for "Nearly every farm" (about 1 s).

Fix: the first stem sentence of both items now lands with the card (on "First" and on "Second" + 6). Later sentences keep their own cues.

## Changes by scene

- **1. Hook.** On "So how does disease", the map no longer shrinks to a thumbnail. It settles at half size in the top left.
  - The rust leaf (420 px) and the lemon myrtle rows (640 px, "lemon myrtle farm") fill the farm side.
  - "sick plants" rings the leaf, and "and animals" brings in the blistered hoof.
  - On "the bill ... far past", the gate draws with its side labels, "the bill" lands at 44 px, the container slides in and the closed gate appears past it. An amber arrow runs from the leaf across the gate.
- **10. How to assess an effect (rebuilt).** Three large panels replace three tags floating over an empty frame, one panel per question at 48 px.
  - How big: a paddock grid fills with the lost share. Then the rust leaf appears with "rust: that harvest".
  - How long: a clock and a time line. "One season" is a short teal bar, and "years" is a long amber bar with the myrtle rust leaf ("settles in: for years").
  - How far: the farm gate, the cattle and the barred container ("markets closed"). An arrow then runs past the gate, with "far beyond the farm".
- **12a. Exam question 1.** The stem sits in a 1110 px column, and the givens are drawn beside it as they are read:
  - the cattle and container ("most beef exported");
  - one herd of 40 dots;
  - 2000 healthy cattle as grey dots; both groups hollow out on "culled" ("all culled");
  - the container doors barred ("imports suspended").
  - Nothing is labelled direct or indirect, because that is the answer. The demand moves under the stem, and the answer box is 1340 by 270.
- **12b. Feedback 1.** Each answer line now has its picture:
  - Direct: the red cattle (320 px) and 40 teal dots that empty on "culled" ("40 sick, then culled").
  - Indirect: 40 grey dots ("each dot: 50 healthy cattle") and the container barred on "lost beef exports".
  - The verdict "indirect larger: export dependent" is 40 px on an amber fill. The side note is 28 px.
- **12c. Exam question 2.** The stem is in a 1110 px column, and the givens are drawn as read: the uniform rows ("one variety, every farm"), the rusted wheat leaf ("new rust strain"), drifting spores and rain drops ("wind; warm, wet"), and "yields fall district-wide" with a down arrow. No cause is labelled.
- **14. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 29 px. The content is the same, split up. The framed memory aid is unchanged.

Scenes 2 to 9, 11, 12d and 13 are unchanged. The audit did not flag them.

## Files touched

- `src/explainer/lessons/bio-m7-b04/s1.tsx` (hook), `s2.tsx` (scene 10; imports `ClockMark`), `s3.tsx` (12a, 12b, 12c, notes, and a local `Herd` dot component).
- `parts.tsx` and `assets.ts` are untouched. B05 imports b04 parts. No shared kit or legacy file was edited.
- The typecheck passes on the B04, B19 and G02 graphs.

## Plates needed

None. Every plate used is already in `assets.ts`. An optional upgrade is a wheat paddock plate for exam item 2, which would replace the generic uniform rows (cropped from the monoculture half of `m6-field-monoculture-mixed-v1.png`).

## Still to check

- Judge at playback speed: the hook's map move and the container slide, the paddock fill in scene 10, and the dots hollowing on "culled".
- Ready for Codex to re-render on the existing narration.
