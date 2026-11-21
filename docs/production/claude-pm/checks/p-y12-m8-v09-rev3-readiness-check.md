# phys-y12-m8-v09 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `2a899680a9de9e815aec4f1859d7a94a9e50b0efe9982281a40c5aeaf5b62f10`.

Compared: the current design against the version approved by `p-y12-m8-v09-rev2-error-check.md` (its source hash `01ed4994...68c2` is recorded in `work/brief234/v09-calculations.json`; found at commit `a7e4babc`, 7 November 2026). Only commit `a31af64d` (13 November, Revision 3 visual top-up) touches the file since then. Text-only review; no design, narration, code or render changes.

What changed: the status line; a new "Visual upgrade (Revision 3)" section (stage list, "no engine fits" with the scene 8 target-mass slider as exact arithmetic, recoil speed ÷ neutron speed = 2m_n/(m_n + m) and energy share 4m_n m/(m_n + m)²; the nitrogen gas cell as `y12p-vapour-cell-v1.png` with a no-object fallback; the billiard balls as steel ball plates; abstract collision discs stay tagged discs; R1, R2, no video codes on screen, question-card rules, notes scene); "Upgrade (Revision 3)" paragraphs in scenes 5, 6 and 9; Revision 3 notes (kit gap: no two-body collision engine). The notes hold was already 45 s.

Narration: all 18 scene strings (build parser rules, bold markers removed) are identical to the approved version, and every bold cue is unchanged. No narration names a module number, "the syllabus" or an earlier video by number (scene 6's "from Year 11" is allowed).

Revision 3 visuals: the slider formulas are the correct one-dimensional elastic-collision results (equal masses give full transfer, as scene 6 narrates; a light or heavy target takes little energy), so the discs move consistently with the notes ("head-on, full transfer"). Both plates named (`y12p-vapour-cell-v1.png`, `phys-y11-steel-ball-v1.png`) exist; the abstract discs remain diagrams, which suits particles. No Revision 3 paragraph adds a cue word. The "no two-body collision engine" note is now stale (`collisions.ts` was added on 14 November); root's build rule "Stale no-engine notes" covers it, so it is not raised as a finding.

Mechanical: 6,159 characters as the sum of 18 scene strings, matching the headline and under 7,000. Bold cues match as whole words, verbatim and in spoken order in every scene. Both "Pause here to answer." attempts keep the full printed question on screen. Notes bullets are 25 to 56 characters. No U+2014 in the file. Key notes parse to 45 s.

Findings: none.

This is a source check at recording stage only. It supplies no motion-at-playback-speed review, exact voiced preview, caption fit, human listening or release pass.

Result: 0 blockers, 0 should fix, 0 optional.
