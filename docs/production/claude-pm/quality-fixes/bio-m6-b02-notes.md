# bio-m6-b02 (mutagens): quality fix, 6 Nov 2026

Grade before: B (audit frames 10, 11, 13 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b02-sheet.jpg` (16 stills at the audit frames). I also checked stills in the middle of scenes 10 and 11a.

Narration, audio and measured timing are unchanged. Every new animation is keyed to existing word cues in `docs/production/claude-pm/lessons/m6b02/measured/lesson.json`.

## Changes by scene

- **10. Two things to keep (frame 10).** The UV-on-skin and X-ray machine plates (260 px) arrive at 40% on "A mutagen is the cause", as examples of causes. They light fully on "UV kinks" and "X-rays snap". Each memory line sits beside its plate with its strand. The explanations are two 34 px lines per side (they were 32 px lines across the page). The spectrum bar is larger (25 px labels, up from 19).
- **11a. Exam question 1 (frame 11).** The UV and X-ray plates (280 px, labelled at 40 px) appear on their words in the stem. Only the sources are shown; what each does to DNA is the answer. The answer box narrows, and the countdown moves down.
- **11c. Exam question 2 (frame 13).** Five painted agar dishes fill the empty left side as the setup is read ("equal volumes of the same yeast"), labelled 0 to 120 s. They clear for the answer boxes on "Describe".
- **12. Decision rule (frame 15).** The three step chips wait at 32% from the opening words and light on their cues.
- **13. Key notes.** Seven one-line bullets at 34 px replace five long paragraphs at 30 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b02/s3.tsx` (scene 10) and `s4.tsx` (11a, 11c, 12, 13).
- `assets.ts` adds B01's agar dish to the preload list. This file is local to B02.
- `parts.tsx` is untouched, because P01 imports it. B01's `assets.ts` and `parts.tsx` are untouched too.

The typecheck passes on the B01, B02 and B03 graphs.

## Plates needed

None.

## Still to check

- Ready to re-render on the existing narration.
