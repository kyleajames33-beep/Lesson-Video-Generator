# chem-m5-c13 (solubility rules and precipitation): quality fix, 6 Nov 2026

Grade before: B (audit frames 3, 5, 13, 15). Grade after (stills): B+.
Sheet: `chem-m5-c13-sheet.jpg` (16 stills at the original audit frames 522 to 16189). Extra checks: 4800, 13300, 15500.
Narration, audio and measured timing are unchanged. New animation uses existing word cues in `docs/production/claude-pm/lessons/c13/measured/lesson.json`.

## Changes
- **Rules origin (frame 3, title only; `s1.tsx`).** The AgNO3 and NaCl bottles (named in 28 px hand), the clear and white-solid rack tubes and the empty 5 x 5 results grid (ion headers and blank wells) are on stage from the first frames. "which pair locks together?" arrives on "how could you know". The wells still fill one by one from "Chemists mixed".
- **Swap method (frame 5, two chips; `s2.tsx`).** A larger cross (62 px ion tiles, rows 360 px apart) beside two large painted bottles labelled AB(aq) and CD(aq), with "solution 1" and "solution 2". The rules card is on screen from the start. The verdict lines and the crossed mistake chip move to the right column under the card.
- **Rules card text.** The compact rules card in scenes 6, 7, 10 and 11 is 26 px (was 22 px) and sits at x 1250.
- **Feedback 1 (frame 13, sparse; `s4.tsx`).** Larger cross (48 px). The supplied rules card stays on screen and lights the Group 1/sulfate rows on "soluble", then the "others (hydroxides)" row on "Hydroxides". The CuSO4 (blue tint) and NaOH bottles stand below it and give way to the pale blue Cu(OH)2 tube on "pale blue solid". "hydroxides: mostly insoluble; Cu2+ is not an exception" arrives on its words.
- **Decision rule (frame 15, empty box).** Numbered steps 1 to 4 and the step text sit faintly on the board from the start, then write in on their cues (glow unchanged). On the right, a KCl + AgNO3 example follows the steps: tiles swap on "swap partners", verdicts on "check both", the AgCl tube on "insoluble", the net ionic equation on "Split only", "left dissolved: K+, NO3-" on "What stays dissolved". It clears on "practical video".
- **Key notes (frame 16).** Eight one-line bullets at 38 px replace five paragraphs at 30 px. The memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (was 759). The video grows by about 14.7 s, all at the end.

## Files
- Edited: `src/explainer/lessons/chem-m5-c13/config.ts`, `s1.tsx`, `s2.tsx`, `s4.tsx`.
- `parts.tsx`, `common.tsx` and `assets.ts` are unchanged (c14, p03 and m6-c01 import c13 parts).
- Scoped typecheck (c13, p01, p03 configs and everything they import) passes.

## Plates needed
None.

## Still to check at playback speed
The token flights in the larger swap cross; the bottle-to-tube crossfade in feedback 1; the faint step text reading as a preview rather than as clutter in the decision rule.
