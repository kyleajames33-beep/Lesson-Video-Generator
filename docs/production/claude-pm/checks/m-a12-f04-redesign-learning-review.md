# Maths f04 Revision 2: independent learning review

11 November 2026. Source SHA256 `c3cc28608ac8b68a5abca9f967f8cfb456b063f37f7f13130124b867ff1cfa40`. Written design reviewed. Built motion, plates and human listening remain pending.

Result: 0 blockers, 2 should fix, 0 optional.

Should fix 240-F04-DECAY-ZERO, key note 5: “A decay model stops when it reaches 0” is stated as a general rule. A model's allowed range depends on the quantity and context; a sequence can cross below zero without landing on it, and negative values can be meaningful. The machine example has an appropriate zero limit for nonnegative parts; scope the note to that context or to a stated validity boundary.

Should fix 240-F04-TIME-CONVENTION, scene 8 and key note 4: “in year n: n − 1 changes” depends on the given first-year value and when changes take effect. The tree example correctly starts at time zero and uses six changes after six years, but the summary presents a convention as universal. Tie both counts to the stated starting time and update schedule.

The hillside differentiates one-period output from the cumulative total; the two graphs, machine boundary, time-zero tree and two attempts develop the comparison. Both attempts retain full question wording and do not reveal answers. The written f03/f04 handoff matches Revision 2. The proposed visual changes, simulations, colour roles, large working and memory card meet the design standard as written; actual readability, 258-sprite fit, motion and cue timing require build review.

The 15 scene strings total 5,750 characters and marked cues appear in visual order; no em dash found. See `work/brief240/f04-calculations.json`. The whole-course anchor comparison is pending. No design, scene, narration, speech or commit changes.

Artwork contract finding,11November: the hillside is required to rise slightly left-to-right and also tile horizontally with equal endpoint height. A single overall rising ground line cannot meet both conditions without a reset or a return slope. Root should choose a level/rolling periodic ground profile or a non-tile rising strip. Hold only this plate; seedling and sapling artwork can proceed. No ground profile or design edited.


Source follow-up,11November: Current lesson03 Problem3 and SA3 worked steps independently confirmed: term3500n+58500, sum777500, first threshold year12 and100500. All source examples this design uses are now confirmed. See work/brief240/source-followups-nov11.md. Existing findings retained.
