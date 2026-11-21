# phys-y12-m8-v19 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `4d9b8115a78045383521b05b1dd71fb9796c334807eff495d38f30ddcbaac7a6`.

Compared: the Revision 2 source reviewed by `p-y12-m8-v19-rev2-error-check.md` (Codex, 9 November, brief 234; evidence `work/brief234/v19-calculations.json`, SHA256 `dc884e67...`, commit `770e3c57`) against the current file (Revision 3, commit `a31af64d`, plus root's 21 November label edit, commit `09b3e84e`), by git diff. That Revision 2 check ended "0 blockers, 2 should fix", so this check also tests whether those findings were resolved. Text-only review; no build, render or listening.

What changed: Status line; headline 5,786 to 5,770 characters; a new "Visual upgrade (Revision 3)" section (stage list A to K, simulation engines, "The ball is a plate", root rules R1 to R4, question-card and notes-scene rules); an "Upgrade (Revision 3)" paragraph on scene 16 (navy givens strip); a recorded kit gap; Revision 3 notes; and root's label edit to scene 11's narration: "Remember from Module six, a charged particle" became "Remember, a charged particle". Nothing addressing the two Revision 2 findings changed.

Narration: 17 of 18 scene strings are byte-identical to the reviewed Revision 2 source. Scene 11's edit removes the module label and reads naturally. Recount by the build parser rules: scene 11 is 455 characters, and the 18 scene strings sum to 5,770, equal to the headline and under 7,000. Scene 11's bold cues ("fields", "walls", "France") are unchanged and in spoken order. No narration now names a module, "the syllabus" or an earlier video by number. On-screen video code only, covered by the build rule: scene 1's tag "the Sun runs on fusion (v05)".

Revision 3 visuals: the scene 16 givens strip restates the card's two demands. The steel ball plate in the scene 8 inset is fine. Numbers unchanged and correct (2.3, 9.2 and 25.6 N; 0.14, 0.29 and 0.48 MeV; 1.9 and 19.4 keV; Q = 17.6 MeV). All named plates exist under `public/`.

Mechanical: both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD (two U+2013 sit in quoted source text, unchanged since Revision 2).

Findings:

1. **Should fix.** "Visual upgrade (Revision 3)", Simulation engines bullet: "The pair of nuclei on the energy curve (scenes 1, 2, 8 and 12) is a `custom` run on the field motion engine: a repulsive 1/r² force that gives way to a strong short-range pull inside about 3 fm, so the marker climbs the hill and drops into the valley in step with the nuclei." A classical run can only reach the valley by going over the top of the 0.48 MeV barrier. That is the "classically: climb over (almost none can)" path the lesson rejects, and it is the hilltop picture the Revision 2 check asked to remove. Scene 4 ("pass right through the hill, well below its top") and scene 12 ("the marker tunnels through below the top") need the crossing below the top, which no engine models (the kit gap already says "tunnelling has no engine and is shown as a dashed path"). Proposed fix: "The approach of the two nuclei (scenes 1 and 2) is a `custom` run with the repulsive 1/r² force only, so the marker climbs part way up the hill and slows; the crossing in scenes 8 and 12 is the lesson-coded dashed tunnelling path below the top, after which the marker drops into the valley. The grey over-the-top path stays the labelled classical comparison."

2. **Should fix (Revision 2 finding 2, still open, now repeated by Revision 3).** "Visual upgrade (Revision 3)": "The wall block in scene 9 and the field-line rings in scene 11 stay schematics", and Assets "Coded:" still lists "field-line rings and spiral". The Revision 2 repair made scene 11's field lines helical (author note h: a purely toroidal ring field lets particles drift out). Proposed fix: in both places write "the helical (twisted) field lines" in place of "field-line rings" and "field-line rings and spiral". No speech change.

3. **Should fix (Revision 2 finding 1, still open).** Decisions, "New explainer motion": "speed spread (a cloud of nuclei with speed bars, most short, a few long, the long ones reaching the hill's top)", and Kit gaps item 3: "Energy ledger. Bars that lend and return, then add Q." Both contradict the repaired scenes 4 and 8: the fast nuclei tunnel well below the top, and the kinetic energy is kept, with Q added. Proposed fix: "... a few long, the long ones reaching part way up the hill, where a few tunnel through" and "Energy ledger. The kinetic energy brought in is kept by the products, and Q is added." No speech change.

4. **Optional.** The scene 4 particle-box reaction uses "activation energy [that] stands for the Coulomb barrier". With the full barrier as the activation energy, a gas at the shown 4 % typical energy gives essentially no fusions, so the "a few of the fastest pairs fuse" readout would stay at zero. Proposed fix: set the activation energy to an effective (tunnelling) threshold well below the barrier, still tagged "model".

5. **Optional.** Scene 18 (key notes) still says "framed card under the notes", while Revision 3 sets "the framed memory card beside them". Proposed fix: change "under the notes" to "beside the notes".

Result: 0 blockers, 3 should fix, 2 optional.

## Re-check, 21 November 2026 (Claude reviewer)

Source SHA256 `6804f4580e1483be41a06ea5f0edc47aded43cca190b648793b1d7d806c4d048`.

Compared the current file (commit `3575b452`) against the version checked above (`4d9b8115...`) by git diff. Narration is byte-identical (18 scene strings, 5,770 characters, equal to the headline); bold cues are unchanged.

- Finding 1 is resolved. The field motion run now covers only the approach (scenes 1 and 2) with the repulsive 1/r² force alone, so the marker climbs part way and slows. The crossing in scenes 8 and 12 is the lesson-coded dashed tunnelling path below the top, and the grey over-the-top path stays the labelled classical comparison. No classical run reaches the valley, matching scene 4 ("pass right through the hill, well below its top").
- Finding 2 is resolved. Both the Revision 3 schematic line and the "Coded:" list now name "the helical (twisted) field lines". The kept item "the charge's spiral" is acceptable: it is the particle's path round a field line, which is still lesson-coded under the recorded kit gap, not a ring field.
- Finding 3 is resolved. The speed spread's long bars now reach "part way up the hill, where a few tunnel through", and the energy ledger now reads "The kinetic energy brought in is kept by the products, and Q is added", both matching scenes 4 and 8.
- Finding 5 (optional) is applied: the memory card is "beside the notes".

No U+2014. Finding 4 (optional, effective activation energy in the scene 4 particle box) was left for the build brief and stands.

Result: 0 blockers, 0 should fix, 1 optional.
