# bio-m7-b08 (how T cells respond): quality fix, 6 Nov 2026

Grade before: B (audit frames 1, 8, 11, 13, 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b08-sheet.jpg` (16 stills at the audit frames 446 to 13827). Extra checks: 6742, 9900, 11500, 13200.

Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m7b08/measured/lesson.json`.

## Changes
- **Hook (frame 1, four tiny cells).** The row of eight identical airway cells is now 220 px wide each and spans the stage. It builds from "find the infected cells", outward from the cell that moves in. The ring and "which one is infected?" (36 px) are larger.
- **NK cells (frame 8, empty stage).** While "Cytotoxic T cells aren't the only cells that kill infected cells" is spoken, a large cytotoxic T cell sits seated on an infected airway cell (painted plates, fork on a red piece). The tags read "cytotoxic T cell", "kills infected cells" and "the only killer?". The group clears just before "Natural killer cells".
- **Exam 1 (frame 11).** The whole question lands with the card. The plates arrive on cue: the cytotoxic T cell plate, then the mouse ("mouse with virus X"), then group 1 (uninfected cell), group 2 (infected, "virus X") and group 3 (infected, "virus Y"). There are no display pieces or binding.
- **Exam 2 (frame 13).** The whole question lands with the card. The helper T cell plate with a virus arrives on "HIV infects" ("HIV infects helper T cells"). A small coded graph draws the helper T count falling over years on "Without treatment".
- **Decision rule (frame 15, rail only).** While "So for any T cell question" is spoken, the infected cell, helper T cell and cytotoxic T cell plates fill the stage with 36 px labels. Each rule card then carries its plate.
- **Key notes.** Eight one-line bullets at 32 px replace five paragraphs at 27 px. The memory aid is unchanged.

## Files
- `src/explainer/lessons/bio-m7-b08/s1.tsx`, `s2.tsx`, `s3.tsx` and `config.ts` (assets list extended) were edited.
- The new file `plates2.ts` holds the house mouse plate.
- `parts.tsx`, `assets.ts` and `board.tsx` are untouched, and so are the exported `ClaimBox` and `Verdict` in `s3.tsx`, because b09, b10 and g03 import them.
- The typecheck passes on `out/explainer/tsconfig.m7b070809.json`.

## Notes
- No new plates are needed. HIV is drawn with the generic virus plate, and the tag names it.
- Judge at playback speed: the row building in the hook, and the cast fading into the rule cards.
- Ready to re-render.
