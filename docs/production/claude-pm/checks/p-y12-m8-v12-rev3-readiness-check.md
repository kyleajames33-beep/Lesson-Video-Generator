# phys-y12-m8-v12 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `6f92038879f56d05941fd10aa55ec9886b75ed81f3e617e8caf1b86063f68b2b`.

Compared: the current design against the version reviewed by `p-y12-m8-v12-rev2-error-check.md` (its source hash `dbee9c34...de33` is recorded in `work/brief234/v12-calculations.json`; found at commit `770e3c57`, 7 November 2026). That review ended "0 blockers, 1 should fix, 0 optional". Three commits touch the file since then: `a31af64d` (13 November, Revision 3 visual top-up), `d1b643f3` and `09b3e84e` (21 November, root's label edits). Text-only review; no design, narration, code or render changes.

What changed: the status and headline lines; a new "Visual upgrade (Revision 3)" section (stage list, the scene 9 and 10 ring angles from `brightAngles` with λ = h/mv, the single landing spots from a `weighted` chance experiment shown with `trialsShown`, the wavelength working exact, the wrapped orbit waves lesson-coded; R1, R2, plates, no video codes on screen, question-card rules, notes scene); visual wording rewordings in scenes 3 and 9 for the checking script; a scene 16 givens strip; "(Module 7)" removed from four chips in scenes 2, 3, 5 and 7; Revision 3 notes; two dated root label-edit notes; and root's narration edits in scenes 2 and 3.

Narration: 16 of 18 scene strings are identical to the reviewed version. Scene 2: "In Module seven, light diffracted like a wave" became "Earlier, light diffracted like a wave". Scene 3: "you'd use relativistic momentum from Module seven" became "you'd use relativistic momentum, which you met earlier". Both edits are accurate, have no course label or em dash, read naturally, and keep the bold cues (lambda, p; wavelength) unchanged and in order. No narration names a module number, "the syllabus" or an earlier video by number.

Revision 3 visuals, recomputed (h = 6.626 × 10⁻³⁴ J s, m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C): ½mv² = eV gives 3.25, 3.75 and 4.19 × 10⁷ m s⁻¹ at 3.0, 4.0 and 5.0 kV, and h/mv gives 2.24, 1.94 and 1.73 × 10⁻¹¹ m, matching the slider readouts; the Davisson and Germer values (54 V: 4.36 × 10⁶ m s⁻¹, 1.67 × 10⁻¹⁰ m) are unchanged. Ring angles from `brightAngles` shrink as λ falls, matching "V up, rings shrink". A weighted draw over ring positions builds the rings spot by spot, which matches "travels as a wave, lands as a spot". The engine functions exist (`brightAngles`, `weighted`, `trialsShown`). The scene 16 strip repeats the card's demand. One chip still carries a course label on screen: scene 2 "light: photoelectric effect → photon (Module 7)" (root's note lists the other chips but not this one); the build rule "No course labels on screen" covers it, so it is mentioned here only.

Mechanical: 6,265 characters as the sum of 18 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 27 to 61 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix (carried from the Revision 2 check, still unresolved).** Scene 9 Visual still has the grey chip "11 to 14% of c: p = mv within 0.3%". At the displayed speeds (10.8%, 12.5% and 14.0% of c), γ − 1 is 0.59%, 0.79% and 0.99%, so relativistic momentum exceeds mv by more than 0.3%. The 0.15% to 0.24% figures behind the chip (author note b) compare wavelengths: h/mv with v from ½mv² = eV against the exact relativistic wavelength at the same voltage. Proposed fix: "11 to 14% of c: λ = h/mv within 0.3% of the relativistic value". No narration change.

This is a source check at recording stage only. Finding 1 is an on-screen chip correction with no effect on the spoken text; once made, the source SHA changes and needs a fresh passing check. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 0 optional.
