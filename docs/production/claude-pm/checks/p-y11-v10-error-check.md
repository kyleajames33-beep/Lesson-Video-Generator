# p-y11-v10 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `99dc40230ddef958b8d77b25acc20923629221fa527c59a2fc58102b09ecb1d4`.

1. **Should fix:** Attempt 2's feedback now correctly says the three high values suggest a systematic error, but then says more repeats “would just give the same high value” as a certainty. Three high readings do not establish a systematic bias or guarantee what further repeats will show. Make the final prediction conditional on the suggested bias being present. The crossed mistake and model answer should retain the same scope.
2. **Should fix:** The status headline calls 6,312 the narration count. That is the separate-scene sum; the stated build-parser convention joins the scenes, giving 6,327. The narration table itself records both. Make the headline use the joined count.

The other brief 145 repairs are visible: the release-delay fix measures and subtracts the delay rather than starting a timer at a lower light gate; individual repeat dots remain scattered while the mean marker narrows; shorter exposure and tracking replace a higher-frame-rate-only claim; and the site note now allows both random and systematic components. `work/brief154/v10-calculations.json` independently checks all three regression runs, the two chosen line points, the 2.5 m video drop, the repeat statistics, both attempts and the 1 cm gate-crossing speed. The v09 handoff is the stated opening. No rendered apparatus or local safety approval was inspected.

The parser counted 16 scenes and 6,327 joined characters; with the design's hold budget the estimate is about 570 s, so the actual voiced timing and reserve cuts matter. No em dash or checked American spelling appears in narration. The shared velocity-colour conflict is reported in `p-y11-v01-error-check.md`.
