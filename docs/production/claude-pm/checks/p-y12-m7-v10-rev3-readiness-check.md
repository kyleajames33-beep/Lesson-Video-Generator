# phys-y12-m7-v10 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `8ae8878ba660220803d168d6071a1853a1a3a69508c94f6e5a5c38545fa28f63`.

Compared: the current design against the version approved by `p-y12-m7-v10-rev2-error-check.md` (its source hash `85e3f45e...4307` is recorded in `work/brief233/v10-calculations.json`; found at commit `bd8ce5b5`, 7 November 2026). Only commit `2339843a` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, the live photocell bench in scenes 4, 5 and 9 as exact lesson-coded arithmetic on E = hf and K_max = hf − ϕ, the attempt 2 clock as the painted digital timer; R1, R2, plates, no video codes on screen, question-card rules, notes scene); a scene 15 "Upgrade (Revision 3)" paragraph (`phys-y11-digital-timer-v1.png` with a blank display, no electrons drawn); Revision 3 notes (kit gap: "no engine for light meeting matter ... (a photocell bench)"). The notes hold was already 45 s.

Narration: all 18 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals: driving every bench readout from one set of values keeps the bench consistent with the scene 10 and 11 working. Recomputed (h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹): 600 nm gives 3.31 × 10⁻¹⁹ J = 2.07 eV < 2.3 eV; 400 nm gives 4.97 × 10⁻¹⁹ J = 3.10 eV; a 1.77 eV red photon is about 700 nm, well below zinc's 4.3 eV. The blank timer on the attempt 2 card shows only that time passes, the subject of the claim, and gives nothing away; the plate exists. No Revision 3 paragraph adds a cue word.

Mechanical: 6,277 characters as the sum of 18 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 47 to 59 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Optional.** The Revision 3 section says "No engine fits yet" and the kit-gap note reads "no engine for light meeting matter: photons, a metal's work function, the photocurrent and the stopping voltage (a photocell bench)". That was true when the top-up was committed (`2339843a`, 13 November, 07:11), but "Sims kit 4" (`bdafcf0e`, 13 November, 07:47) added `photoelectric.ts` (`photon`, `photoelectric`, `photocurrent`, `kMaxLine`, `fitStoppingVoltage`) and the `PhotoelectricGraph` and `PhotonBars` views in `modern-views.tsx`. A builder following the note would hand-roll the bench. Proposed fix: replace both statements with "the bench readouts come from `photoelectric` and `photocurrent` in `photoelectric.ts`, drawn with `PhotoelectricGraph` and `PhotonBars`; the kit gap is closed". No narration effect.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 1 optional.
