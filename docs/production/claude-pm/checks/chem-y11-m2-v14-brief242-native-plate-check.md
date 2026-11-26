# Brief 242: Chemistry M2 v14 native plates and indicator registration

16 November 2026.

All 15 narration strings remain unchanged from the inventory: 5,659 characters. The current design contains no em dash. The Revision 3 question pictures and givens strips introduce no new calculation values or quoted On-cues.

Seven plates received native paper/dark checks: the burette stand, meniscus close-up, three methyl orange flask states, white tile and clear dropper bottle. All have alpha from 0 to 255 and clear outer margins; there are no people, faces, numerical labels or unintended question data. Pale painted glass interiors do not establish visibility of coded liquid behind them. The meniscus close-up has ticks but no numerals; root must number them downwards and align the reading to the bottom of the meniscus. The dropper bottle has a blank label and a closed cap with its pipette painted in, so dispensing needs a separate layer or mask.

The yellow, orange and red plates are exactly 2048 by 1700. Their alpha channels are identical pixel for pixel (alpha-mask intersection over union 1.0), and their upper 750 rows of glass are identical. Same-origin, same-scale swaps preserve the flask outline. The dark-board proposal puts this common flask position directly beneath the burette tip. Final tile contact and tip occlusion still belong to the built rig; no playback was run. Evidence: `work/brief242/chem-m2-v14-registration.json` and its paper/dark images.

The attempt 1 stand at 320 px and attempt 2 wash bottle at 280 px give no numerical volume, concentration or error direction away. The clear sample-bottle crop was already delivered and has a separate native QA record. The original river dipper, murky bottle, combined indicator trio and Mohr flask are not active commissions for this design.

The pour-clock endpoints were recalculated: 0.1003 times 0.02000 gives 0.002006 mol carbonate; twice that is 0.004012 mol acid; dividing by 0.01880 L gives 0.213404 mol L⁻¹. The carbonate remainder reaches zero at 18.80 mL when the 1:2 ratio drives the clock. The mean of 18.75, 18.85 and 18.80 is 18.80 mL. Intermediate points and nonnegative clipping are in `work/brief242/chem-m2-v14-pour-calculations.json`. Actual engine-clock synchronisation remains a build check.

Result: seven static plate checks recorded; exact trio registration confirmed; both new question pictures pass static answer-data QA. No new narration or arithmetic blocker. No whole-lesson, motion, listening or release clearance.

Evidence: `assets/brief242-chem-m2-v14-native-qa-16-nov.json`. Reviewed design SHA256: `0aa1349ecf8d0f379baf38bb2467d3053adb20fff31d6248533b168167f6cb80`. No source edits or whole-lesson clearance.
