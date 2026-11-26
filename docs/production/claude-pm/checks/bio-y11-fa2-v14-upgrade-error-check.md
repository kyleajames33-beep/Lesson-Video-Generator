# Brief 242: Biology FA2 v14 numerical upgrade check

17 November 2026. Narration remains 5,589 characters across 15 scenes. No em dash or U+2061. Fresh audit has 71 quoted cues and one false parser candidate across a quoted table row ending in on. The silent in-all-plants row is not a speech trigger. No unresolved new cue mismatch found.

Exact recalculation: 18/6 = 3, 40/5 = 8 mm/min; 8/3 = 2.6667, rounded 2.7. The crossed distance-only ratio is 40/18 = 2.2222, rounded 2.2. On one five-minute clock the two distances are 15 and 40 mm. Means of 3.0,2.8,3.2 and 8.0,7.7,8.3 are 3.0 and 8.0. Attempt mean distances 11 and 28 mm over four minutes give 2.75 and 7.0 mm/min; ratio 28/11 = 2.54545, about 2.5. Wrong summed calculation 33/4 = 8.25. No arithmetic error found.

Bubble-run build requirement: a rate change from 3 to 8 in a continuing run cannot use position = currentRate * totalElapsedTime without a jump. Integrate the piecewise rate, or reset at a declared new trial. Distinguish current speed from cumulative distance/time if both are shown. The design's same-clock two-lane comparison needs a reset from the separate six-minute/five-minute observations.

Functional plate hold: potometer distal capillary is drawn closed; no open-end coordinate exists. Baked marks are uncalibrated and cannot be labelled as an exact 0-40 mm scale without a declared coded transform. Details and native guides in bio-y11-fa2-v14-brief242-native-plate-check.md and assets/y11b-fa2-v14-provenance.json. Prior unchanged science/method findings retained. No source edits, voice or whole-lesson clearance.
