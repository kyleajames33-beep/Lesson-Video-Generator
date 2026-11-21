# phys-y12-m7-v05 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `620167caf02e1eef1ee049c235918e269b8548f79317dae231287fadfaf9da64`.

Compared: the current design against the version approved by `p-y12-m7-v05-rev2-error-check.md` (its source hash `c09620ee...7be1` is recorded in `work/brief233/v05-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the waves engine: `ringsFrom` wavelets for the Huygens construction in scenes 3 and 4, and the summed field `fieldAt` of a row of sources for the gap, the slit and the handoff's two slits, slow model waves tagged "model" with real readouts; the scene 8 mirror as a small plate copy; R1, R2, plates, no video codes on screen, question-card rules, notes scene); a scene 8 "Upgrade (Revision 3)" paragraph (`phys-y11-plane-mirror-v1.png` in the Foucault row); Revision 3 notes (kit gap: no single-slit intensity helper). The notes hold was already 45 s.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals: summing wavelets from points across an opening is the Huygens model the narration teaches, and a narrower row of sources gives a wider central spread, matching "Narrower gap or longer λ: wider spread". The named functions exist (`fieldAt`, `ringsFrom`, `WavefrontView`, `useWaveTime`) and the mirror plate exists. The "model" tag keeps the long-wavelength display honest while the readouts keep the design's real values. Both attempt cards already carried pictures and both feedback scenes givens strips. No Revision 3 paragraph adds a cue word.

Mechanical: 6,289 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 39 to 71 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** The Revision 3 kit-gap note reads: "the waves engine has no single-slit intensity helper (only `doubleSlitBrightness` with a slit-width term), so the single-slit curve is the summed field of a row of sources; a helper would serve this video and the next". That was true when the top-up was committed (`2339843a`, 13 November, 07:11), but "Sims kit 4" (`bdafcf0e`, 13 November, 07:47) added `singleSlitBrightness`, `singleSlitDarkAngles` and `centralBandWidth` (in `waves.ts`) and the `IntensityPattern` view (in `modern-views.tsx`). A builder following the note would hand-roll what the kit now provides. Proposed fix: replace the kit-gap note with "use `singleSlitBrightness`, `singleSlitDarkAngles` and `centralBandWidth` (in `waves.ts`) and the `IntensityPattern` view (in `modern-views.tsx`) for scenes 1, 6 and 9's single-slit pattern; the kit gap is closed". No narration effect.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
