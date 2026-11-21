# phys-y12-m5-v11 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `96e791105a50a037406a97f8fdeb9e2f3da88d0abae1379f2c5494233d516ffe`.

Compared: the current design against the version approved by `p-y12-m5-v11-rev2-error-check.md` (SHA256 `91b9124e...b3f5`, found byte-identical at commit `8d79c0dd`, 6 November 2026). Only commit `fe99a3b7` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine: `central` runs for the car and jib tip, a set of runs at r = 50 m for the scene 8 slider, a `custom` inward pull that drops to zero at "string" for scene 10, R1, R2, plates, no video codes on screen, question-card rules, notes scene, cars as plates); "Upgrade (Revision 3)" paragraphs in scenes 12 to 15 (rotor diagram as the card picture, painted car plates on the attempt 2 card, givens strips); the key-notes hold from about 50 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 17 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration edit to review.

Revision 3 visuals, recomputed: v = 2π × 50 ÷ 12 = 26.18 m s⁻¹, a = 13.7 m s⁻²; slider readouts at r = 50 m for 13.1, 26.2, 39.3, 52.4 m s⁻¹ are 3.43, 13.71, 30.84, 54.83 m s⁻², matching scene 8; attempt 1 gives ω = 25.1 rad s⁻¹, v = 7.54 m s⁻¹, a = 189 ≈ 1.9 × 10² m s⁻²; attempt 2 gives a_B = 4a_A, F_B = 4F_A. The engine choices are buildable: `field-motion.ts` offers `central` (a circular run needs gm = v²r) and `custom` fields, and a `central` run's acceleration points to the centre and stays at right angles to the velocity, as scenes 3 and 7 say. The scene 10 straight tangent path after the cut agrees with the narration ("keeps the velocity it had at that instant"). The rotor diagram shows only "0.30 m" and "4.0 rev s⁻¹"; the attempt 2 card shows two plates with no speed arrows; both give nothing away. Both plates exist in `public/assets/physics/`. Both givens strips repeat their cards. No Revision 3 paragraph adds a cue word.

Mechanical: 6,274 characters as the sum of 17 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (12, 14) keep the full printed question on screen. Notes bullets are 15 to 79 characters. No U+2014 in the file. Key notes parse to 45 s.

Findings: none.

Result: 0 blockers, 0 should fix, 0 optional.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.
