# p-y11-v15 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `e6ec087308f54ab007f3d77f3df3f8d3df46c0894cb587e6d168aaeb36b6e1f3`.

1. **Should fix:** Scene 3's visual tags the force sensor reading “= F_net”, even though the no-pull check only bounds a leftover force. Use a condition or approximation consistent with that check. The learner-question summary also says the nudge shows friction is cancelled without the sensitivity qualification.
2. **Should fix:** The FA0 placement table still describes half the range as the uncertainty, and the learner-visible vocabulary describes repeat spread as an estimate of how far a result could be from the true value. These author-facing summaries conflict with the repair that limits the half-range to repeat scatter.
3. **Should fix:** The final frame explicitly retains both simulated-data graphs at the left, but v16's opening does not include them. Reconcile the actual opening with the prior final frame under rule 16.
4. **Should fix:** The revised length table still calls scenes 4 and 6 the longest at 639 and 666 characters; the current parser gives 671 and 617, while scene 4 is longest. Correct the playback-check figures.

The revised teaching identifies scatter separately from other limits, labels the data simulated, qualifies the conclusions and no-pull check, retains the actual off-line points, and corrects the steepest-line limiting point. Numerical results are in `work/brief159/v15-calculations.json`. All named `phys-y11-` plates exist and no `y11p-` names occur. The v14 opening matches. Fifteen scenes total 6,279 separate and 6,293 joined characters; the design estimates 565 seconds. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
