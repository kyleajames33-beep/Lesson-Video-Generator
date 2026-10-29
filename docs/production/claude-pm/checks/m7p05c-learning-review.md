# m7p05c learning review: preparing an ester and comparing yield

Independent Codex review, 28 October 2026. I did not author the design. Inspected Revision 1, standing rules, plan, student-learning-review.md and m7c13 review examples. This is a source and planned-shot review, not playback or student evidence. No audio or render was made. Human listening and exact voiced preview remain pending. Existing apparatus and soap plates were visually inspected in ../assets/brief110-qa/references.jpg. Narration recount: 5,844 characters, 18 scenes; zero U+2014. Per-scene counts: ../assets/brief110-qa/source-audit.json.

Main question: how does a class prepare an ester safely and interpret about 60% isolated yield? From Year 11, the calculation trace is clear: alcohol mass, moles, 1:1 product ratio, theoretical mass, isolated yield. The mole bridge is the strongest teaching move. Retain the heating mantle and open condenser. The wet-product attempt tests useful transfer.

## Findings

1. **Blocker. Scene 9 and note 5.** "Losses push every yield low, so no single yield is accurate" confuses a real low isolated yield with an inaccurate measurement. A correctly measured 3.90 g of dry pure isolated ester gives a correct isolated yield. Repair: "The isolated yield is lower than the amount present before work-up because some ester is lost. Repeats reveal variation, but do not recover that ester. Water or other impurities would make the measured ester mass too high." Reserve accuracy for measurements representing the pure ester correctly.
2. **Blocker. Scene 9.** "Every group lost ester in the same work-up, so both ratios sit about twenty five points below their ceilings" treats identical operations as proof of identical losses. More acid changes extraction and washing, and the reaction may not reach equilibrium in a fixed time. Keep matched work-up as an improvement, then conclude the example supports higher isolated yield under the tested conditions. To attribute the difference to equilibrium, check reaction progress, purity and recovery. Show these as evaluation questions rather than predetermined validity ticks.
3. **Should fix. Scene 2.** "Pentan-1-ol runs out first in both" conflicts with exactly 1:1 and with incomplete equilibrium conversion. Repair: "The 1:1 equation lets us calculate the theoretical maximum from the alcohol. At 2:1, acid is in excess; at exactly 1:1, both reagents set the same maximum." Do not animate the alcohol disappearing at equilibrium.
4. **Should fix. Scene 11.** Seven detailed risk rows need a real optional reading pause. Show one current row during narration, then the full table in a quiet hold. Note 6 is a summary, not the full table promised by the visual plan.

## Checks

The 4.41 g to 0.0500 mol to 6.51 g to 59.9% arithmetic is correct; A1 gives 55.0%. Means 41% and 60% and their 19-point difference are correct. A2 supports washing and drying to remove extra mass. All question demands persist through countdowns, with brief feedback and one crossed mistake each. The calculation layout stages reasoning sensibly. The 67% and 85% ceilings are not established for this actual mixture and must be justified or removed before the ladder is used to explain losses. See science check.

Counts: **2 blockers, 2 should fix, 0 optional**.

## Resolution

Resolved in `../lessons/chem-m7-p05.md` Revision 2 (30 Oct; root resolver, Claude PM). Overlapping fixes with `m7p05c-claude-science-check.md` were merged into one edit each. The heating mantle and open condenser are kept (root decision). Recount by script: 5,844 characters, about 570 s (feedback 1 about 28 s, feedback 2 about 27 s).

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (merged with science 1) | "no single yield is accurate" is removed. Scene 9: "Is sixty per cent accurate? If the ester was dry and pure, yes: that's the yield they really got. It's low because ester was lost, not mismeasured, and repeats can't bring it back. Water or leftover acid would do the opposite, making the mass too high." The accuracy card reads "dry, pure ester weighed correctly → correct isolated yield". Key note 5 matches. |
| 2 | Fixed (merged with science 2) | The equal-loss claim and the 67% and 85% ceilings are removed. Scene 9: "Matching the work-up helps, but more acid can change the washes, and forty minutes may not reach equilibrium. So the data support a higher yield with excess acid, under these conditions." Three grey evaluation questions (recovery, reaction progress, purity) replace the validity tick. Scene 8 ends "So, in these runs, excess acid gave a higher yield." |
| 3 | Fixed (merged with science 3) | Scene 2: "They react one to one, so the alcohol sets the most ester any group could make, and every yield is measured against it." Tags "2 : 1: alcohol is limiting" and "1 : 1: both set the same maximum"; no mole block disappears. Vocabulary gloss and key note 1 match. |
| 4 | Fixed | Scene 11 shows only the current row during narration, then the full seven-row table in a quiet 4 s hold with "Pause to read the full risk table". Key note 6 is now described as a summary. |

Also changed: scene 11's spoken "Vent the funnel away from people." is cut (said in scene 5; the row carries it), and scene 4's spoken gloss of work-up is cut (its screen tag carries it), to hold the runtime at about 570 s.
