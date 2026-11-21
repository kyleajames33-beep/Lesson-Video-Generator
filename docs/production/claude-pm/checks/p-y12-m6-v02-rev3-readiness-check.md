# phys-y12-m6-v02 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `3bcbb4fea178614b779028a25057c96fc83fca0a09847509635c185140163703`.

Compared: the current design against the version approved by `p-y12-m6-v02-rev2-error-check.md` (SHA256 `0fb116ce...955e`, found at commit `7500810a`, 7 November 2026). Only commit `039f0bbb` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine with a `custom` field of qE/m inside the plates and zero beyond, scene 8 and 9 slider settings as separate runs with the hit flag set by reaching d/2, a note that the CRT plate is still held, R1, R2, plates, no video codes on screen, question-card rules, notes scene); "Upgrade (Revision 3)" paragraphs in scenes 11, 13 and 14 (the exam diagram as the card picture, plain dots in both attempt 2 panels, a feedback 2 givens strip); the key-notes hold from about 60 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number or "the syllabus".

Revision 3 visuals, recomputed (e = 1.602 × 10⁻¹⁹ C, m_e = 9.109 × 10⁻³¹ kg): main case t = 1.67 ns, y = 4.89 mm, exit speed 3.06 × 10⁷ m s⁻¹; E doubled 9.77 mm (exits); L doubled hits the plate 7.15 cm along (unconstrained 19.5 mm); v doubled 1.22 mm; v = 1.0 × 10⁷ m s⁻¹ gives 44.0 mm unconstrained and a hit 2.4 cm along. Attempt 1: a = 8.79 × 10¹⁴ m s⁻², t = 2.4 ns, y = 2.53 mm < 15 mm, v_y = 2.11 × 10⁶ m s⁻¹, θ = 4.8° (slip 2.4°). The `custom` field (force only inside the plate length) gives exactly the scene 7 straight path after the plates, and the hit flag rule matches the narrated test (y ≥ d/2 for a centre-line entry). The attempt 1 diagram has no path; the attempt 2 panels show only tagged dots with no path, force or acceleration, so neither gives an answer away. The new feedback 2 strip repeats the card's conditions and task. No Revision 3 paragraph adds a cue word.

Mechanical: 6,119 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (11, 13) keep the full printed question on screen. Notes bullets are 37 to 54 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** Scene 7 narration says "That's how an old cathode ray tube aimed its beam at the screen", and the Visual depends on `y12p-crt-tube-v1.png`, which is still held; its only fallback is a coded outline, which the Revision 3 "no coded drawings of real objects" rule forbids. The design flags this as root call (1) but it is unresolved, so a builder has no allowed CRT picture for a narrated object. This is an artwork decision and does not affect the recording. Proposed fix: root records one of: accept the coded-outline fallback as an exam-style schematic for this scene only, or commission the plate before the build; either way the narration stands.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
