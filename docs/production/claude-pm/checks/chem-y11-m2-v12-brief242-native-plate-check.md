# Brief 242: Chemistry M2 v12 native plate check

16 November 2026.

Narration freshness: all 18 scene strings match the checked inventory, totalling 6,291 characters. No em dash occurs in the current design. Revision 3 adds no narration and no new calculation values. Its givens strips repeat the existing question conditions. The Revision 2 arithmetic check remains applicable, including the volume slider results 0.1007, 0.1003 and 0.0999 mol L⁻¹. This check does not require paid speech.

Native inspection: all seven plates below were inspected on paper and dark backgrounds at their original dimensions. They have RGBA alpha from 0 to 255, clear outer margins, no faces or people, and no unintended text, readouts or answer data. Glass interiors contain painted highlights and pale fill; true outer alpha does not establish that a liquid drawn behind the glass will remain visible.

| Plate | Static result and build limit |
| --- | --- |
| `m5x-dropper-clear-v1.png` | Static pass. A clear hanging drop is already painted at the tip. The coded drops must leave that tip without duplicating or leaving an impossible permanent drop. |
| `m6-funnel-v1.png` | Static pass. Empty glass funnel with a narrow stem. Uniform scaling permits a stem narrower than the flask neck. The fit proposal retains the original stopper and therefore is not insertion approval. |
| `m8-desiccator-v1.png` | Static pass for scene 3's closed dry-storage illustration. Blue beads sit below a perforated ceramic plate. A watch glass, paper boat and white powder sit above it. The painted lid and contents are one image, not separate animation layers. |
| `m6-volumetric-flask-v1.png` | Static pass for the untagged attempt 1 picture. One etched neck mark, no numerical capacity or concentration. Its stopper is painted in place. Root must separate or mask it for scene 7, show the stem inside the open neck with correct occlusion, and prove the coded fill and meniscus remain visible. |
| `m6-beaker-v1.png` | Static pass. Empty vessel with a spout and no numerical graduations. Rinse film, stream and solute dots remain coded scene work. |
| `m6-wash-bottle-v1.png` | Static pass. Blank bottle with a bent nozzle and dip tube. Coded stream must start at the nozzle and reach the selected vessel. |
| `m8-balance-watch-glass-v1.png` | Static pass for the untagged attempt 2 picture at 300 px: blank display, no water content, concentration or direction of error shown. The watch glass contains a paper boat and powder already. For scene 2, do not claim it is an empty watch glass or add distinct NaOH pellets over that powder without resolving the composition. |

The four requested bench plates were placed side by side on paper and the dark board using uniform scales only. The flask/funnel proposal demonstrates compatible proportions, but the painted stopper obstructs a physically correct insertion. This is an unresolved scene-composition check, not a request for a new plate. Evidence: `work/brief242/chem-m2-v12-fit-measurements.json`, `chem-m2-v12-bench-fit-paper.jpg`, `chem-m2-v12-bench-fit-dark.jpg` and `chem-m2-v12-question-300px.jpg`. The latter uses 300 px visible-object height with uniform scaling and no source artwork changes.

Existing context matters: the analytical-balance vessel mismatch recorded for M2 v11 scene 7 is not automatically a blocker in this lesson. M2 v12 scene 5 explicitly weighs into a beaker. Existing behind-glass liquid and pair-registration limitations remain separate build checks. `m5x-volumetric-flask-10ml-v1.png` and the older root-level `flask.png` are inspected-but-unused alternatives, not active missing commissions.

Result: no new narration or arithmetic blocker. Three previously pending native plate checks are recorded; the two newly used question pictures pass static QA. Funnel insertion, stopper removal, liquid visibility, drop release, scene 2's powder/pellet composition and motion still need root's built-scene check. No whole-lesson, playback, human-listening or release clearance.

Evidence: `assets/brief242-chem-m2-v12-native-qa-16-nov.json`. Reviewed design SHA256: `c34f0532ab316d020d8a5523c446d2ea99253872c9aebce2e271c8e862d21ef9`. No source edits or whole-lesson clearance.
