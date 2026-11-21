# phys-y12-m5-v12 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `8d39bcc6da1a69f0127b15e0272f879d3ec4bd1636bf1ef1d408f771bf99ac4d`.

Compared: the current design against the version approved by `p-y12-m5-v12-rev2-error-check.md` (SHA256 `db9ba03b...9d5a`, found byte-identical at commit `8d79c0dd`, 6 November 2026). Only commit `fe99a3b7` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine: a `central` run for the roundabout car, a no-force tangent run in scene 3, a `custom` field with the inward acceleration capped at μ_s g in scene 9, bars and readouts lesson-coded, R1, R2, plates, no video codes on screen, question-card rules, notes scene); a scene 9 "Upgrade (Revision 3)" paragraph (the trail tagged "model path"); "Upgrade (Revision 3)" paragraphs in scenes 11 to 14 (painted car on both card diagrams, givens strips); the key-notes hold from about 50 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration edit to review.

Revision 3 visuals, recomputed with g = 9.8 m s⁻²: attempt 1 v_max = √(0.65 × 9.8 × 45) = √286.65 = 16.9 m s⁻¹ (slip 287 m s⁻¹); attempt 2 v = 35 ÷ 3.6 = 9.722 m s⁻¹, needed f = 1500 × 9.722² ÷ 15 = 9.45 × 10³ N, available 0.40 × 1500 × 9.8 = 5.88 × 10³ N, v_max = 7.7 m s⁻¹, so it slides. The card pictures (bend with "r = 45 m"; roundabout with "r = 15 m"; the painted car on each; no arrows, speed, bars or path beyond the ring) give nothing away, and `phys-y11-car-top-v1.png` exists. Both givens strips repeat their cards. The scene 9 "model path" tag is accurate and agrees with the narration ("a wider curve", "drifts towards the outside"). No Revision 3 paragraph adds a cue word.

Mechanical: 5,878 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (11, 13) keep the full printed question on screen. Notes bullets are 43 to 65 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** "Visual upgrade (Revision 3)", bullet "Simulation engines": "In scene 9 the car is a `custom` field whose inward acceleration is capped at μ_s g". "Inward" is ambiguous. If a builder points the capped acceleration at the roundabout's centre, a constant-size central pull gives a bounded rosette: the car swings out and then curves back towards the centre if the run continues, which would contradict "it drifts towards the outside of the roundabout". If the capped friction acts at right angles to the car's velocity, the car follows a circle of radius v² ÷ (μ_s g), wider than the bend, which is the narrated picture. Proposed fix: "an acceleration of size μ_s g at right angles to the car's velocity, towards the inside of the bend (friction at its maximum), so above v_max the path is a circle of radius v² ÷ (μ_s g), wider than the ring; the clip ends as the car reaches the outer edge."

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
