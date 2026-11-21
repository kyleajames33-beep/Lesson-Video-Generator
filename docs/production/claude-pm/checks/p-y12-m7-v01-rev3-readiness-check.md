# phys-y12-m7-v01 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `72483bb6ed2b6257639d0a666d7412b7025a7e8d42d6c1f528c0f92b6f825006`.

Compared: the current design against the version approved by `p-y12-m7-v01-rev2-error-check.md` (its source hash `e6d68689...a5bf` is recorded in `work/brief233/v01-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the waves engine for the travelling waves: `wavefronts` and `WavefrontView` for the scene 4 antenna fronts, `ringsFrom` for the scene 6 spark, two in-phase copies of one `displacement` for the E and B curves, all slow model waves with real values on the readouts; coil and capacitor shown as circuit symbols; R1, R2, plates, no video codes on screen, question-card rules, notes scene); Revision 3 notes in the length estimate, joins, asset brief, check list and change log. The notes hold was already 45 s. No scene gained an "Upgrade (Revision 3)" paragraph.

Narration: all 14 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals: the named engine parts exist (`displacement`, `wavefronts` in `waves.ts`; `useWaveTime`, `ringsFrom`, `WavefrontView` in `waves-views.tsx`). Fronts from an oscillating source crowd closer as frequency rises, matching the scene 4 dial (λ = c/f: 6.0, 3.0, 1.5 m at 50, 100, 200 MHz). E and B as two in-phase copies agree with the narration and notes ("in phase", E ⟂ B ⟂ travel). The "model, slowed" tag keeps the slowed display honest. Attempt 2: λ = 3.00 × 10⁸ ÷ 98.5 × 10⁶ = 3.05 m. Both attempt cards already carried pictures and both feedback scenes givens strips.

Mechanical: 6,087 characters as the sum of 14 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 37 to 53 characters. No U+2014 in the file. Key notes parse to 45 s.

Findings: none.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 0 optional.
