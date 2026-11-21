# phys-y12-m7-v07 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `9a79d49099cb01a878feb0b3101ba9b92fdb806876a39e98727094898c4ab1ea`.

Compared: the current design against the version approved by `p-y12-m7-v07-rev2-error-check.md` (its source hash `59fe025b...3d49` is recorded in `work/brief233/v07-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, `brightAngles` for every order on the grating fan in scenes 3, 5, 6 and 7, the scene 2 slit-count slider as the summed field `fieldAt` of N = 2, 6 and 20 sources with "1000" as an illustrative narrowed peak, slow model waves tagged "model" with real readouts; R1, R2, plates, no video codes on screen, question-card rules, notes scene); Revision 3 notes (kit gap: no grating intensity helper). The notes hold was already 45 s. No scene gained an "Upgrade (Revision 3)" paragraph.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals, recomputed for 400 lines per mm (d = 2.5 × 10⁻⁶ m): first-order angles sin⁻¹(λ/d) = 10.4°, 12.3° and 15.0° for 450, 532 and 647 nm, matching the readouts the engine call must give; d/λ = 3.86 at 647 nm, so m_max = 3, as in the worked example. `brightAngles` lists every order with |m| ≤ d/λ, which agrees with the notes ("m ≤ d/λ, round down"). Summing more sources sharpens the peaks at unchanged angles, matching "More slits: same angles, sharper, brighter lines". Both attempt cards already carried pictures and both feedback scenes givens strips.

Mechanical: 6,157 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 35 to 49 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** The Revision 3 kit-gap note reads: "the waves engine has no many-slit (grating) intensity helper; the sharpening is shown by summing up to 20 sources". That was true when the top-up was committed (`2339843a`, 13 November, 07:11), but "Sims kit 4" (`bdafcf0e`, 13 November, 07:47) added `gratingBrightness` (in `waves.ts`, with a slit count) and the `IntensityPattern` view (in `modern-views.tsx`). A builder following the note would hand-roll what the kit now provides. Proposed fix: replace the kit-gap note with "use `gratingBrightness` (in `waves.ts`, with a slit count) and the `IntensityPattern` view (in `modern-views.tsx`) for scene 2's slit-count slider, including the N = 1000 step; the kit gap is closed". No narration effect.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
