# phys-y12-m7-v06 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `2ce8bc0cd1a939c65a174de0e189f1a1577468040bebd943d2aee54907743caf`.

Compared: the current design against the version approved by `p-y12-m7-v06-rev2-error-check.md` (its source hash `0316f6d6...c436` is recorded in `work/brief233/v06-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the waves engine throughout: `sumAt` in `WaveStringView` for scene 2, `interferenceAt` with `WavefrontView` for the two-source stage with the probe reading `pathDifference`, a drifting `phase` for the incoherent panel, `doubleSlitBrightness` and `brightAngles` for the band pattern and the scene 7 sliders, slow model waves tagged "model" with real readouts; R1, R2, plates, no video codes on screen, question-card rules, notes scene); Revision 3 notes. The notes hold was already 45 s. No scene gained an "Upgrade (Revision 3)" paragraph.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals: the named functions exist (`sumAt`, `interferenceAt`, `pathDifference`, `doubleSlitBrightness`, `brightAngles` in `waves.ts`; `WaveStringView`, `WavefrontView`, `useWaveTime` in `waves-views.tsx`). Reading the probe's path difference from the same sources that draw the pattern ties "whole waves: bright" to the picture, matching the narration and notes (bright at mλ, dark at (m + ½)λ). A drifting phase destroys a steady pattern, matching the coherence point. Δx = λL/d shown beside its own pattern is consistent with the small-angle condition in the notes. Both attempt cards already carried pictures and both feedback scenes givens strips.

Mechanical: 6,253 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 42 to 59 characters. No U+2014 in the file. Key notes parse to 45 s.

Findings: none.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 0 optional.
