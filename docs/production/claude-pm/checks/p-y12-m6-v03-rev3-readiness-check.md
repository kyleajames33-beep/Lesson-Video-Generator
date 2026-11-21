# phys-y12-m6-v03 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `6d96a946217f2356446a9124808acc39f79b921b05a1d930ffc9114f747e261e`.

Compared: the current design against the version approved by `p-y12-m6-v03-rev2-error-check.md` (SHA256 `0fafbaec...3138`, found at commit `7500810a`, 7 November 2026). Only commit `039f0bbb` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine for the ledger energies in scenes 2, 3, 8 and 9, the scene 6 dial and scene 7 lanes as lesson-coded arithmetic, R1, R2, plates, no video codes on screen, question-card rules, notes scene); "Upgrade (Revision 3)" paragraphs in scenes 11 and 13 (the supply reading "2.0 kV" wired to an exam-style gun; the two lanes with "+e" and "+2e"); the key-notes hold from about 60 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. One existing line names a module number (finding 1).

Revision 3 visuals, recomputed (e = 1.602 × 10⁻¹⁹ C, m_e = 9.109 × 10⁻³¹ kg, m_p = 1.673 × 10⁻²⁷ kg): the engine energies K₀ = ½m_e(3.0 × 10⁷)² = 2559 eV, W = e × 2.0 × 10⁴ × 4.885 mm = 98 eV, K = 2656 eV, v = 3.06 × 10⁷ m s⁻¹ all match scenes 8 and 9 and last video's exit speed. Dial values: 2.5 kV 2.97 × 10⁷, 5 kV 4.19 × 10⁷, 10 kV 5.93 × 10⁷ m s⁻¹; proton at 5 kV 9.79 × 10⁵ m s⁻¹. Attempt 1: 2000 eV = 3.20 × 10⁻¹⁶ J, v = 2.65 × 10⁷ m s⁻¹ (slip v² = 7.0 × 10¹⁴). Attempt 2: K_α = 2K_p, v_α/v_p = 0.71. The attempt 1 picture (supply reading "2.0 kV", gun blocks, no beam speed, bar or graph) and attempt 2 lanes (charges and "same V" only) give nothing away. The feedback givens strips (Revision 2) still repeat their cards. No Revision 3 paragraph adds a cue word.

Mechanical: 6,013 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (11, 13) keep the full printed question on screen. Notes bullets are 23 to 48 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Scene 5 narration ends: "Much faster than that, and this simple formula starts to fail, which is a story for Module **seven**." This names a module number, which root is removing from all unvoiced Physics narration so one take serves the 2017 and 2025 courses (module numbers do not exist in 2025). The Visual repeats it on screen: chip "v ≈ 0.14c: classical model starting to strain (Module 7)". Proposed fix: narration "Much faster than that, and this simple formula starts to fail, which is a story for a later **video**." (cue moves from "seven" to "video"; +1 character, total 6,014; update the headline and add a dated note); Visual "On 'video' a grey-ink chip 'v ≈ 0.14c: classical model starting to strain (relativity, later)'".

2. **Optional.** Scenes 1 and 5 use `y12p-crt-tube-v1.png`, still held, and the only fallback is a coded outline, which the Revision 3 "no coded drawings of real objects" rule forbids (root call (1), unresolved; the same call as v02). An artwork decision only; the narration ("An electron gun uses exactly that") does not name the tube. Proposed fix: root records whether the coded-outline fallback is accepted as an exam-style schematic or the plate is commissioned before the build.

This is a source check at recording stage only. Finding 1 changes narration, so it must be resolved and rechecked against the new source SHA before recording. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 1 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `4d1d462b5ca1e3a004749d5ea6035a2ac07d596c214cb62520ac5b126b7e67ff`.

Compared against the version checked above (`6d96a946...261e`, the `039f0bbb` file) after root's commit `09b3e84e`. Changes: scene 5 narration now ends "which is a story for a later **video**."; the scene 5 Visual cue "On 'seven'" became "On 'video'" and the chip lost "(Module 7)" (now "v ≈ 0.14c: classical model starting to strain"); line 5 now reads 6,014 characters; a dated root note records the edit. Finding 1 is resolved.

Recount: the 16 scene strings sum to 6,014 characters, equal to the headline and under 7,000. Only scene 5 changed; its bold cues are now m, second, video, verbatim and in spoken order, and the Visual uses "video" as the new trigger. No narration or scene Visual names a module number or "the syllabus" (remaining module mentions are in the scope, decisions, root note and YouTube metadata, not on screen). No U+2014 in the file.

Open: finding 2 (optional, the held CRT plate) remains open.

Result: 0 blockers, 0 should fix, 1 optional.
