# phys-y12-m5-v01 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `21b76283eb2d2c07b1b49ff9491f4fce028bd171af38fa5b4e031b8788589035`.

Compared: the current design against the version approved by `p-y12-m5-v01-rev2-error-check.md` (SHA256 `ab2c9687...6c90`, found byte-identical at commit `f6d0e9e4`, 6 November 2026). Only commit `fe99a3b7` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine, R1 answer frames and slate mistakes, R2 solid join frames, plates for real objects, no video codes on screen, question-card rules, notes scene, steel ball plate everywhere); "Upgrade (Revision 3)" paragraphs in scenes 3, 12, 13, 14 and 15; the key-notes hold from about 50 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 17 scene strings (parsed with the build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration edit to review.

Revision 3 visuals:
- Scene 12 card picture (bench edge, A and B, "1.25 m", "3.0 m s⁻¹" at B, no path, no landing mark, no clock) shows only stated givens; nothing can be read off for t or the distance.
- Scene 13 and 15 givens strips repeat the card values exactly (1.25 m, same instant, from rest, 3.0 m s⁻¹ horizontally, g = 9.8 m s⁻²; cliff, horizontal launch, negligible air resistance, the claim). The full card stays on screen above each strip.
- Recomputed with g = 9.8 m s⁻²: t = √(2 × 1.25 / 9.8) = 0.5051 s ≈ 0.51 s; s_x = 3.0 × 0.5051 = 1.515 m ≈ 1.5 m. The engine description (uniform field, a_x = 0, a_y = −9.8, both balls from 1.2 m, B at 2.0 m s⁻¹, slider runs 1.0 to 4.0 m s⁻¹ with constant landing time) agrees with the narration and the existing worked values (0.4949 s, 0.99 m, 1.98 m).
- No Revision 3 paragraph adds a cue word, so no new cue can disagree with the narration. The scene 3 inset ball and the scene 14 cliff ball become the existing plate `phys-y11-steel-ball-v1.png`; no new plate is needed.
- R1 (slate scribbles and crosses replace the red strikes in scenes 8, 10, 13 and 15) and R2 (solid join frames) are buildable overrides and do not change any spoken claim.

Mechanical: 6,314 characters as the sum of 17 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (12, 14) keep the full printed question on screen for the countdown. Notes bullets are 60 to 93 characters (limit 95). No U+2014 in the file. The parser gives the key-notes scene 1,350 frames (45 s), matching the new hold.

Findings: none.

Result: 0 blockers, 0 should fix, 0 optional.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.
