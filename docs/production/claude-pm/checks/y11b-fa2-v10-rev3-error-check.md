# bio-y11-fa2-v10: brief 176 error check

Revision 3, checked 5 November 2026. Source SHA256 `8860d5b494e7afbba23cea2779cf2464ac96c3047b49dc0f6102d916903ac010`. Compared the previous findings, the current revision section, the named root decisions and the actual narration and visual instructions. This is an error-only source check.

Previous check: `docs/production/claude-pm/checks/y11b-fa2-v10-error-check.md`.

Narration: 5,863 characters excluding scene joins; 5,879 including joins; 17 scenes. Estimated about 569.0 seconds with the existing holds, using the design estimate and narration change. No measured audio. No U+2014 or U+2061 found. No new American spelling or requested people, hands or faces found in the checked instructions; geometric faces, apparatus meters and arrow-only grip glyphs are not human depictions.

## Repair confirmation

The active-loader example tag now accompanies the memory line in scene 8, scene 13, the handoff and the quiet notes. This resolves the brief 170 tag finding under root decision 35. The additional scene 7 cue-order finding is below.

Cue phrases were checked within their scene and in spoken order. Screen labels, numerical tool targets and matrix positions were kept separate from speech triggers. The three named joins were compared directly in `work/brief176/named-opening-pairs.json`; unchanged joins retain their previous source checks. This does not establish rendered-frame identity.

Calculations: `work/brief176/changed-number-checks.json`, `recalculation-169.json`, `recalculation-171.json` and `count-and-timing-checks.json`. The earlier unchanged datasets retain their earlier calculations.

## Errors

1. **Should fix:** Scene 7 writes the tiny-channels event before the micrograph ring on "joined to the sieve tube", but the narration says "joined to the sieve tube" before "tiny channels". Put the ring event before the channel event, using the same speech. The active-loader tag repair itself passes.

Count: 0 blockers, 1 should fix. No design, narration or artwork edited. No speech or commits. Human listening, measured cue timing, playback and apparatus/image checks remain separate.
