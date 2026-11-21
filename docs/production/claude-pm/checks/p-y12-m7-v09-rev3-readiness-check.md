# phys-y12-m7-v09 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `ab71c812be48cb2a8aa0a510c434477a543bd8a5bfed6c76d925322602687949`.

Compared: the current design against the version approved by `p-y12-m7-v09-rev2-error-check.md` (its source hash `d8e5ee9f...c0e7` is recorded in `work/brief233/v09-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, `standingMode` with `WaveStringView` for the scene 7 cavity modes, the black-body curve and temperature slider as the exact Planck formula, the scene 10 packet bars as a qualitative model; R1, R2, plates, no video codes on screen, question-card rules, notes scene); a scene 16 "Upgrade (Revision 3)" paragraph (givens strip "classical model: fails at short wavelengths | Planck's hypothesis: how it fixes the problem"); Revision 3 notes (kit gap: "no black-body (Planck curve) helper in any engine"). The notes hold was already 45 s.

Narration: all 18 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals: `standingMode` exists and gives modes with whole numbers of half-wavelengths, so the count of patterns rising at short wavelengths matches scene 7 and the notes ("Classical: equal share per pattern → UV catastrophe"). A Planck curve with the peak marker and λ_max from the same temperature agrees with Wien's law in the notes (λ_max = b/T). The scene 16 strip repeats the card's two demands without numbers and adds no answer. No Revision 3 paragraph adds a cue word.

Mechanical: 6,442 characters as the sum of 18 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 32 to 58 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** The Revision 3 kit-gap note reads: "no black-body (Planck curve) helper in any engine; the curve is an exact lesson formula". That was true when the top-up was committed (`2339843a`, 13 November, 07:11), but "Sims kit 4" (`bdafcf0e`, 13 November, 07:47) added `blackbody.ts` (`planck`, `classicalRadiance`, `wienPeak`, `blackBodyCurve`) and the `BlackBodyGraph` view in `modern-views.tsx`. A builder following the note would hand-roll what the kit now provides, including the classical curve for the catastrophe. Proposed fix: replace the note with "the curve, the classical comparison and λ_max use `blackBodyCurve`, `classicalRadiance` and `wienPeak` from `blackbody.ts`, drawn with `BlackBodyGraph`; the kit gap is closed". No narration effect.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
