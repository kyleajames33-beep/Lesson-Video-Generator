# bio-y11-fa2-v29: brief 176 error check

Revision 3, checked 5 November 2026. Source SHA256 `3fc6ef9bf0cf4ebd1adc7fa1457b3654c2048130d99633a408fa35c484879d09`. Compared the previous findings, the current revision section, the named root decisions and the actual narration and visual instructions. This is an error-only source check.

Previous check: `docs/production/claude-pm/checks/y11b-fa2-v29-error-check.md`.

Narration: 5,645 characters excluding scene joins; 5,661 including joins; 17 scenes. Estimated about 552.2 seconds with the existing holds, using the design estimate and narration change. No measured audio. No U+2014 or U+2061 found. No new American spelling or requested people, hands or faces found in the checked instructions; geometric faces, apparatus meters and arrow-only grip glyphs are not human depictions.

## Repair confirmation

Feedback 12b now places the classic-mistake chip before the underline on "Insulin is released normally", in spoken order. The additional scene 6 order finding is below.

Cue phrases were checked within their scene and in spoken order. Screen labels, numerical tool targets and matrix positions were kept separate from speech triggers. The three named joins were compared directly in `work/brief176/named-opening-pairs.json`; unchanged joins retain their previous source checks. This does not establish rendered-frame identity.

Calculations: `work/brief176/changed-number-checks.json`, `recalculation-169.json`, `recalculation-171.json` and `count-and-timing-checks.json`. The earlier unchanged datasets retain their earlier calculations.

## Errors

1. **Should fix:** Scene 6 writes the return-arrow event on "negative feedback" before the thinning-stream event on "release less insulin". The narration releases less insulin first, then names negative feedback. Reorder these two event instructions to follow the speech. The feedback 12b repair itself passes.

Count: 0 blockers, 1 should fix. No design, narration or artwork edited. No speech or commits. Human listening, measured cue timing, playback and apparatus/image checks remain separate.
