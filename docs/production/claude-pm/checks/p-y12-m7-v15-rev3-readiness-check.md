# phys-y12-m7-v15 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `16a66e7984a3264b9fd749765278998906544f2e71d255cd9bf309bd6fd44840`.

Compared: the Revision 2 source approved by `p-y12-m7-v15-rev2-error-check.md` (Codex, 9 November; its evidence file `work/brief233/v15-calculations.json` names SHA256 `ed30803d...`, the version in commit `bd8ce5b5`) against the current file (Revision 3, commit `2339843a`, plus root's 21 November label edit, commit `d1b643f3`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; headline 6,017 to 6,010 characters; a new "Visual upgrade (Revision 3)" section (stage list A to I, simulation engines, root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 3 (steel ball plates in the collision inset); a recorded kit gap; Revision 3 notes; and root's label edit to scene 11's narration: "From Module six, a charged particle" became "Remember, a charged particle".

Narration: 17 of 18 scene strings are byte-identical to the approved Revision 2 source. Scene 11's edit removes the module label, reads naturally as a recall cue, and changes no physics. Recount by the build parser rules: scene 11 is 513 characters (was 520), and the 18 scene strings sum to 6,010, equal to the headline and under 7,000. Scene 11's only bold cue, "centimetres", is unchanged and last. No Visual line quotes the removed words. No narration now names a module, "the syllabus" or an earlier video by number (scene 2's "Year 11" is allowed). On-screen course tag only, covered by the build rule: scene 11's chip "Module 6: r = mv/qB → relativistic: r = p/qB, p = γm₀v".

Revision 3 visuals: the simulation note correctly declines the non-relativistic field motion engine for a relativistic circle and keeps r = γm₀v/qB as lesson arithmetic. Scene 11 numbers re-checked for a 6.5 TeV proton: γ = 6.93 × 10³; c − v = c/(2γ²) ≈ 3.1 m s⁻¹ (v = 0.9999999896c); r = γm₀v/(qB) ≈ 2.8 km at 7.7 T; classical r ≈ 0.40 m. `phys-y11-steel-ball-v1.png` and the other named plates exist under `public/`.

Mechanical: both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD.

Findings:

1. **Optional.** The revision-log line "Revision 3 (13 Nov 2026): narration unchanged (6,017 characters)" and its "Counts: 6,017 characters" entry now sit above root's later note giving 6,010. This is historically accurate, but a reader of the counts section alone sees the old total. Proposed fix: none needed beyond root's dated note; optionally add "(6,010 after the 21 Nov label edit)" to the length-estimate line.

2. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 0 should fix, 2 optional.
