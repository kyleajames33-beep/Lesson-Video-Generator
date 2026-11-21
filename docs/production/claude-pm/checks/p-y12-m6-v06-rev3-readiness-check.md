# phys-y12-m6-v06 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `dd6ac9f3e2eb38129f2e69fd840e18d7408d11ebe670269694318a6da1968d55`.

Compared: the current design against the version approved by `p-y12-m6-v06-rev2-error-check.md` (SHA256 `2be14da7...304b`, found at commit `7500810a`, 7 November 2026). Only commit `039f0bbb` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, a `custom` field motion run adding qE/m to (q/m) v × B so the deflection flag is read from the path, force readouts as exact arithmetic, the scene 8 analyser as two `magnetic` runs, R1, R2, plates, no video codes on screen, question-card rules, notes scene); the key-notes hold from about 60 s to about 45 s; Revision 3 notes in the length estimate, joins, asset brief, check list and change log. No scene gained an "Upgrade (Revision 3)" paragraph.

Narration: all 16 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. One existing line names a module number (finding 1).

Revision 3 visuals: a run with a = qE/m + (q/m) v × B goes straight exactly at v = E/B and curves towards the larger force otherwise, which matches scene 6 ("Too fast, magnetic wins. Too slow, electric wins") and the readouts (F_E = 6.41 × 10⁻¹⁶ N, F_B = 1.28 × 10⁻¹⁵ N at 4.0 × 10⁵ m s⁻¹ and 3.20 × 10⁻¹⁶ N at 1.0 × 10⁵ m s⁻¹, so E = 4.0 × 10³ V m⁻¹ and B = 0.020 T). Two `magnetic` runs of equal speed and charge give r ∝ m, as scene 8 says. Directions checked with F = qE + qv × B: positive ions moving right with E down and B into the page feel F_E down and F_B up (attempt 2: deflected up at 2v_s); electrons drifting left in a field into the page feel an upward force (scene 15). Attempt 1: E = 600 ÷ 0.020 = 3.0 × 10⁴ V m⁻¹, v = 6.0 × 10⁵ m s⁻¹ (slip 1.2 × 10⁴). Both attempt cards already carried answer-free pictures and both feedback scenes givens strips.

Mechanical: 5,603 characters as the sum of 16 scene strings, matching the headline and under 7,000. Bold cues are verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 35 to 46 characters. No U+2014 in the file. Key notes parse to 45 s.

## Findings

1. **Should fix.** Scene 8 narration: "And in Module eight, you'll see Thomson use crossed fields to measure the electron's charge to mass **ratio**." This names a module number, which root's 21 November pass removes from unvoiced narration so one take serves the 2017 and 2025 courses. The Visual repeats it: on "ratio" a grey-ink chip "Module 8: Thomson's charge-to-mass experiment". Proposed fix: narration "And in a later video, you'll see Thomson use crossed fields to measure the electron's charge to mass **ratio**." (+1 character, total 5,604; cue unchanged; update the headline and add a dated note); Visual chip "Later: Thomson's charge-to-mass experiment".

This is a source check at recording stage only. Finding 1 changes narration, so it must be resolved and rechecked against the new source SHA before recording. No motion-at-playback-speed, voiced preview, caption fit, human listening or release pass is supplied.

Result: 0 blockers, 1 should fix, 0 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `b17793248908a26a20b4946a78fb83cf6072108a55dece36674f42eab06f12e5`.

Compared against the version checked above (`dd6ac9f3...8d55`, the `039f0bbb` file) after root's commit `09b3e84e`. Changes: scene 8 narration "And in Module eight, you'll see Thomson" became "And in a later video, you'll see Thomson"; the scene 8 chip became "later: Thomson's charge-to-mass experiment"; line 5 now reads 5,604 characters; a dated root note records the edit. Finding 1 is resolved.

Recount: the 16 scene strings sum to 5,604 characters, equal to the headline and under 7,000. Only scene 8 changed; its bold cues (atoms, ratio) are unchanged, verbatim and in order. No narration or scene Visual names a module number or "the syllabus" (remaining module mentions are in design notes and YouTube metadata). No U+2014 in the file.

Result: 0 blockers, 0 should fix, 0 optional.
