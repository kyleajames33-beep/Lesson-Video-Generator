# bio-m8-b02 (endotherm temperature regulation): quality fix, 6 Nov 2026

Grade before: B (audit frames 6, 9, 11, 12). Grade after (stills): B+.
Sheet: `work/quality-audit/fixed/bio-m8-b02-sheet.jpg` (16 stills at the audit frames 434 to 13459). Extra checks: 6995, 7300, 9640, 10520.
Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m8b02/measured/lesson.json`.

## Changes
- **Three types (frame 6, near-blank).** The warm skin plate (the responses just shown) is on stage from frame 0, large and centred, with "the responses you just saw". It settles into the physiological column as that cue arrives. The three column frames then fade in. Labels go from 26 to 30 px.
- **Trends (frame 9, faint outlines).** Painted plates replace the coded head outlines and stay solid: the elephant ("hot climate: large, thin ears", ear circled, heat rising), the Canada lynx ("cold climate: compact, thick fur") and the seal ("blubber"). On "In a penguin's" they shrink into a left column at full opacity ("hot: big ears", "cold: compact", "blubber"). The dolphin arrives on "a dolphin's", with its flipper circled and a dashed line to the countercurrent pair. The small dimmed kangaroo is removed. Grey tags go from 22 to 26 px.
- **Exam question 1 (frame 11, empty card).** The whole question and the answer box arrive with the card. The text narrows to 1100 px. The right side shows givens only: the sun with "air 30 °C, dry" on "dry day", a core temperature graph (37.0 to 37.8 °C over 15 min, then flat) that draws on "Her core temperature", and "(b) humid day?".
- **Feedback 1 (frame 12, one line).** The brain arrives on "The hypothalamus detects", with the hypothalamus circled and labelled, and the warm skin follows. Nerve pulses run from the hypothalamus to the skin. "wider" points at the arteriole on "Wider arterioles", heat arrows rise on "the cooler air", and sweat beads evaporate (they swell and stall on "Humid air"). The answer rows are 34 px (were 30).
- **Exam question 2 (attempt).** The whole question, the table and the answer box arrive with the card, as in the accepted examples.
- **Key notes.** Eight one-line bullets at 34 px replace five paragraphs at 27 px. The memory aid is unchanged.

## Files
- Edited: `src/explainer/lessons/bio-m8-b02/assets.ts` (elephant, lynx, dolphin and sun plates, plus the ear and flipper anchors), `s2.tsx` and `s3.tsx`.
- `parts.tsx`, `s1.tsx` and `config.ts` are unchanged. The config's asset list picks up the new plates from `PLATES`.
- The typecheck passes on a scoped tsconfig covering b02, b03 and b04.

## Plates needed
None. The dolphin plate shows flipper bones (it is the Year 11 homology plate). It locates the flipper, and the coded countercurrent pair carries the vessels.

## Still to check
At playback speed, check the skin settling into its column and the trend animals shrinking into the left column. Ready to re-render.
