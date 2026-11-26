# Brief 242: Chemistry M2 v19 balloon scale and question-picture hold

16 November 2026.

All 16 narration strings remain unchanged from the inventory: 5,841 characters. The current design contains no em dash. Revision 3 repeats the existing question conditions in its feedback strips and adds no quoted On-cues.

Native paper/dark inspection covers the yellow balloon, round flask and fizzing bung/delivery-tube flask. All have genuine outer alpha, clear margins, no people or faces, and no numerical text. The fizzing plate has clear liquid, marble chips, bubbles, a rubber bung and open delivery tube; its sidecar open-end coordinate (960, 131) agrees with the visible tip. This plate was already delivered, so no new bung-flask commission is needed for the handoff. Coded tubing must meet that opening in the built scene.

The balloon retains a clean painted edge and readable texture at both 300 px and 600 px visible width on a 1920 by 1080 dark board. Its native painted width is 798 px; the two uniform scales are 0.37594 and 0.75188, so neither test enlarges the native artwork. Keep the existing weather-balloon/not-to-scale tag. This is a static sharpness check, not a judgement of its growth/rise animation.

| Finding | Scene | Required root resolution |
| --- | --- | --- |
| Question-picture hold: painted liquid contradicts the gas-only flask | 11, attempt 1 | `c8-round-flask-v1.png` is visibly about half full of liquid, even at the 280 px question size. The question gives a 2.00 L flask containing nitrogen gas and uses that volume in PV = nRT. The liquid makes the gas space smaller than the stated flask capacity. Use an empty closed vessel for this picture; an existing empty-flask/stopper composition is available for root to consider. No narration or numerical change is needed. |

Attempt 2's syringe picture, inspected at 420 px wide, supplies no numerical pressure, temperature or volume and gives no answer away. The round flask receives a native artwork record but is not cleared for this gas-only question. This finding does not reject its use in a lesson that actually needs liquid.

Evidence: `work/brief242/chem-m2-v19-context-measurements.json`, balloon-scale comparison and question-size comparison. The pink balloon, metal cylinder/piston and industrial compressor remain unused alternatives. Result: three native records, balloon scale check passed, attempt 2 picture passed, attempt 1 picture held for the liquid mismatch. No new narration or arithmetic blocker. No whole-lesson, motion, listening or release clearance.

Evidence: `assets/brief242-chem-m2-v19-native-qa-16-nov.json`. Reviewed design SHA256: `45597c54793565c1bf5706d919f3a50acf07c41061d711adfdc4c42fc925c430`. No source edits or whole-lesson clearance.
