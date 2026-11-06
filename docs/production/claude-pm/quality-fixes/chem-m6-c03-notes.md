# chem-m6-c03 (enthalpy of neutralisation): quality fix, 6 Nov 2026

Grade before: B (audit frames 1, 4, 5, 9, 13). Grade after (stills): B+.
Sheet: `chem-m6-c03-sheet.jpg` (16 stills at the original audit frames 509 to 15788). Extra checks: 5450, 6900, 7900, 9950, 12980.
Narration, audio and measured timing are unchanged. New animation uses the existing word cues in `docs/production/claude-pm/lessons/m6c03/measured/lesson.json`.

## Changes
- **Hook (frame 1, no title).** "Two clear solutions, mixed" is shown from the first frame. On "So how much heat" it gives way to the existing question title, "No fizz. How much heat?".
- **Calorimeter (frame 4, no title).** Adds the title "Measuring the heat: the calorimeter".
- **Worked-example board (frames 5 to 10).** The calorimeter plate is now 390 px tall, in the left column under the givens card, beside the kept result chips. It was 280 px, in the bottom-right corner. Its readout is 32 px. The working is 46 px (was 42). Lines that would run past the margin shrink only as far as needed, and the two longest stay at about 44 px. The strip is 42 px (was 38), and the givens are 36 px (was 34). The two longest lines are shorter: "q = 100.0 × 4.18 × 6.6 = 2759 J = 2.759 kJ", and the divide step "q ÷ n = 2.759 kJ ÷ 0.0500 mol = 55.18 kJ/mol", which matches example 1. The signed answer stays in the framed ΔH chip.
- **Givens scene (frame 5, one equation and a tiny cup).** The task line is up from the start. The cup's readout climbs from 21.5 to 28.0 °C on "warming from". The three-step plan (50 px) shows faintly from the start, and each step lights on "the heat", "the moles of water" and "then divide". The givens still write in on their words.
- **Step 2 lens.** r 150 (was 120), with larger tokens. "1 : 1" is 44 px.
- **Step 3.** "heat lost, / so ΔT too small" now sits beside the cup that shows the heat-loss arrows. The ΔH chip is 50 px.
- **Worked example 2, counting (frame 9, sparse).** While the hydrogen ions are counted, a lens (r 160) shows one H2SO4 giving two H+ (on water) and leaving SO4 2-, labelled "1 H2SO4 → 2 H+". It clears before the "runs out first" bars arrive. The bars and chip are larger (34 and 40 px).
- **Worked example 2, ΔH.** The cup now stays on stage. The ΔH chip is 48 px, and the mistake chip is 36 px.
- **Feedback 1 (frame 13, sparse working).** The working is 44 px (was 38). The polystyrene cup from the question stands on the right (390 px). Its readout, under the cup, climbs from 21.0 to 28.4 °C on "delta T is seven point four". The chips are 38 and 48 px.
- **Key notes.** Seven one-line notes at 36 px replace four paragraphs at 33 px. The framed memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 759), per the root rule. The video grows by about 14.7 s, all at the end.

## Files
- Edited: `src/explainer/lessons/chem-m6-c03/config.ts`, `s1.tsx`, `s2.tsx` (board geometry, `SmallCal`, new `wsFor` helper), `s3.tsx`, `s4.tsx`.
- `parts.tsx` and `assets.ts` are unchanged (C04, M7 C07, skills S05 and others import them).
- A scoped typecheck (the C01, C02 and C03 configs) passes.

## Plates needed
None. The scenes use the existing foam-cup calorimeter and beaker plates.

## Still to check at playback speed
- The readout counting up in the givens scene and in feedback 1.
- The H2SO4 lens split, and its clearing before the bars draw.
- Whether the faint three-step preview reads as a plan rather than as clutter.
