# phys-y11-fa0-v06: brief 176 error check

Revision 2, checked 5 November 2026. Source SHA256 `390a69ab7acf54d4bf16bf78ee2f485797339251539c670751f4b361d554cc45`. Compared the previous findings, the current revision section, the named root decisions and the actual narration and visual instructions. This is an error-only source check.

Previous check: `docs/production/claude-pm/checks/p-y11-fa0-v06-science-check.md`. Learning review: `docs/production/claude-pm/checks/p-y11-fa0-v06-learning-review.md`.

Narration: 6,079 characters excluding scene joins; 6,094 including joins; 16 scenes. Estimated about 556.8 seconds with the existing holds, using the design estimate and narration change. No measured audio. No U+2014 or U+2061 found. No new American spelling or requested people, hands or faces found in the checked instructions; geometric faces, apparatus meters and arrow-only grip glyphs are not human depictions.

## Repair confirmation

Scene 8 now uses a gravity-based card check independent of the launcher and treats the result as evidence, not proof. For a 2.00 cm card and g = 9.80, a lower-edge height of 4.1510408 cm gives a 20.0 ms block. Root decision 12 accepts 4.2 cm as the rounded display of that height. Treating 4.2 cm as an exact input instead gives 19.9038 ms; that distinction is recorded in the calculation file. The accepted rounded display is retained.

Cue phrases were checked within their scene and in spoken order. Screen labels, numerical tool targets and matrix positions were kept separate from speech triggers. The three named joins were compared directly in `work/brief176/named-opening-pairs.json`; unchanged joins retain their previous source checks. This does not establish rendered-frame identity.

Calculations: `work/brief176/changed-number-checks.json`, `recalculation-169.json`, `recalculation-171.json` and `count-and-timing-checks.json`. The earlier unchanged datasets retain their earlier calculations.

## Errors

No remaining error found in this Revision 2 check. Clean at error check.

Count: 0 blockers, 0 should fix. No design, narration or artwork edited. No speech or commits. Human listening, measured cue timing, playback and apparatus/image checks remain separate.
