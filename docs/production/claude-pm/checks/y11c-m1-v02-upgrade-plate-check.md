# Brief 242: Chemistry M1 v02 native plate checks

13 November 2026.

0 source blockers assessed; one should-fix from plate content.

Scene 7 uses `c1-salt-jar-crystals-v1.png` as an unknown white solid. The actual jar shows a clear elliptical liquid surface above the crystals. It reads as a solid in liquid, rather than the requested dry solid. Remove the apparent liquid or choose a dry-solid plate; root decides. Exterior alpha passes.

Six other newly checked plates pass static QA: magnesium ribbon and white powder, ice cube, unlit wax candle, dry ice, and sand/saltwater beaker. Candle reads as wax at 300 pixels, dry ice as pellets at 500 pixels, and sand/water regions at 560 pixels. Dry ice has no fog. Native aspects and measurement bounds recorded. No people, labels, printed quantities or external halos.

Three inventory entries are explicitly unused here: cold thermometer, stopwatch and conical flask on hotplate. Earlier checks cover the reused metal lump, thermometer, beaker/hotplate and salt watch glass. Exact joins, live readouts, source review and whole-lesson clearance remain separate.

Evidence: `assets/y11c-m1-v02-seven-native-qa.json`. No source edits.
