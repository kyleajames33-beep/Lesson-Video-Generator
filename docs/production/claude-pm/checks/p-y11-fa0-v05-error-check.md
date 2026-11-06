# phys-y11-fa0-v05: brief 176 error check

Revision 2, checked 5 November 2026. Source SHA256 `7e06833a51ef2527edf7b3e680a36975799b2880770c8101236f3fbf18f9a2e1`. Compared the previous findings, the current revision section, the named root decisions and the actual narration and visual instructions. This is an error-only source check.

Previous check: `docs/production/claude-pm/checks/p-y11-fa0-v05-science-check.md`. Learning review: `docs/production/claude-pm/checks/p-y11-fa0-v05-learning-review.md`.

Narration: 6,252 characters excluding scene joins; 6,268 including joins; 17 scenes. Estimated about 569.9 seconds with the existing holds, using the design estimate and narration change. No measured audio. No U+2014 or U+2061 found. No new American spelling or requested people, hands or faces found in the checked instructions; geometric faces, apparatus meters and arrow-only grip glyphs are not human depictions.

## Repair confirmation

Scenes 7 and 8 now compare two separate illustrative runs. A has mean 0.458 s and sample standard deviation 0.7071 ms; B has mean 0.452 s and sample standard deviation 2.9155 ms. Subtracting a fixed delay from A leaves its spread unchanged. The practice demand, feedback and model answer now discuss reduced random uncertainty in the mean, without promising a closer sample mean. The original blocker is repaired. One separate scene 4 cue finding remains below.

Cue phrases were checked within their scene and in spoken order. Screen labels, numerical tool targets and matrix positions were kept separate from speech triggers. The three named joins were compared directly in `work/brief176/named-opening-pairs.json`; unchanged joins retain their previous source checks. This does not establish rendered-frame identity.

Calculations: `work/brief176/changed-number-checks.json`, `recalculation-169.json`, `recalculation-171.json` and `count-and-timing-checks.json`. The earlier unchanged datasets retain their earlier calculations.

## Errors

1. **Should fix:** Scene 4 triggers the two end-dot glow on "only two readings", which is absent from the narration. It says "only the highest and lowest readings". Retie that event to the existing phrase, with no added speech. The separate-run and repeat-uncertainty repairs pass.

Count: 0 blockers, 1 should fix. No design, narration or artwork edited. No speech or commits. Human listening, measured cue timing, playback and apparatus/image checks remain separate.
