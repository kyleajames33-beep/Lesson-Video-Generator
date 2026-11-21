# phys-y12-m5-v02 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `e3bf04e5e4cda6962fdd48ec90ae011c03d9bfd315709c0749379fcb54fd933a`.

Compared: the current design against the version approved by `p-y12-m5-v02-rev2-error-check.md` (SHA256 `6e4d53bd...7312`, found byte-identical at commit `f6d0e9e4`, 6 November 2026). Only commit `fe99a3b7` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, field motion engine runs, R1, R2, plates for real objects, no video codes on screen, question-card rules, notes scene); "Upgrade (Revision 3)" paragraphs in scenes 11 to 14 (card pictures and givens strips); the key-notes hold from about 50 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration edit to review.

Revision 3 visuals, recomputed with g = 9.8 m s⁻²: 20 cos 30° = 17.3, 20 sin 30° = 10.0, peak at 10.0 ÷ 9.8 = 1.02 s, blue arrows 10.0, 7.55, 5.10, 2.65, 0.20 m s⁻¹; 25 sin 40° = 16.07, t = 1.64 s, 25 ÷ 9.8 = 2.55 s; 25 cos 40° = 19.2; 10.0 cos 60° = 5.00, 10.0 sin 60° = 8.66; 14.7 ÷ 9.8 = 1.50 s. All match the scenes. Both givens strips repeat their cards exactly (scene 14's strip adds nothing the card does not state). The scene 11 card picture (launcher at 60°, "60°", "10.0 m s⁻¹", no triangle or components) gives nothing away. No Revision 3 paragraph adds a cue word.

Mechanical: 6,132 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts (11, 13) keep the full printed question on screen. Notes bullets are 53 to 77 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** "Visual upgrade (Revision 3)", bullet "Simulation engines", sentence: "Here the run is 20 m s⁻¹ at 30° (scenes 5 to 7) and 25 m s⁻¹ at 40° from the vertical (scene 8)." Scene 8's narration says "launched at twenty-five metres per second, at forty degrees above the horizontal", and its Visual draws "the launcher at 40°" with u_y = 25 sin 40° = 16.07 m s⁻¹ and t = 1.64 s. A 40°-from-the-vertical run (50° above the horizontal) would give u_y = 19.2 m s⁻¹ and a peak at 1.95 s, so the engine readouts and the drawn path would contradict the narration and the working. The 40°-from-vertical launch belongs to scene 9's triangle and the scene 15 flight. Proposed fix: replace the sentence with "Here the run is 20 m s⁻¹ at 30° (scenes 5 to 7), 25 m s⁻¹ at 40° above the horizontal to its peak (scene 8), and 25 m s⁻¹ at 50° above the horizontal, that is 40° from the vertical (scene 15)."

2. **Optional.** Scene 13, "Upgrade (Revision 3)": "the painted launcher on a ground line with the two given components drawn tip to tail from the barrel tip". The barrel angle is not stated, so a builder could leave the barrel at an angle that does not match the components. Proposed fix: add "barrel at about 61° (tan⁻¹(14.7 ÷ 8.0)), with no angle value shown", so the resultant of the drawn components lies along the barrel.

Result: 0 blockers, 1 should fix, 1 optional.

This is a source check at recording stage only. Finding 1 is a visual instruction and needs no narration change, but it must be resolved and rechecked against the new source SHA before this file can count as a passing review. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `48085fff530385dc447b60225f8b7f60e911be609c61de03d48b067d693264d5`.

Compared against the version checked above (`e3bf04e5...d933a`, the committed `fe99a3b7` file). The only change is the "Simulation engines" bullet in "Visual upgrade (Revision 3)": scene 8 now runs 25 m s⁻¹ at 40° above the horizontal "matching its narration and working: u_y = 16.07 m s⁻¹, peak at 1.64 s", and scene 9's from-the-vertical trap is stated as the velocity triangle only (40° from the vertical is 50° above the horizontal) with no flight. Recomputed: 25 sin 40° = 16.07 m s⁻¹, 16.07 ÷ 9.8 = 1.64 s; 25 cos 40° = 19.2 m s⁻¹ (scene 9). This agrees with scenes 8 and 9 and resolves finding 1. Scene 15's flight (25 m s⁻¹ at 50°) is still a field motion run under the general first sentence of the bullet, which is consistent.

Narration: all 16 scene strings are unchanged (6,132 characters, matching the headline); bold cues unchanged; no U+2014 in the file.

Open: finding 2 (optional, attempt 2 barrel angle about 61°) was not taken and remains optional.

Result: 0 blockers, 0 should fix, 1 optional.
