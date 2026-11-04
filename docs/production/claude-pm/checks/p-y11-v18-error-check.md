# p-y11-v18 Revision 2 error check

Checked 3 November 2026. Source SHA-256 `3c1332d3e36069b91b96e60ea3d4103df08d444f67e6cc260e65089a7e29839a`.

1. **Should fix:** The Revision 2 header still contains the literal placeholders `NARR_COUNT` and `NARR_SECS`, and the timing section retains only the Revision 1 count and scene lengths. The current parser gives 5,744 separate and 5,757 joined characters; at 13.3 characters per second and the stated approximately 101 seconds of holds, the estimate is approximately 533 seconds. Scene 7 is now 840 characters, about 63 seconds before holds. Update the current count and timing and check that long scene at playback.

The pulley condition includes negligible rotational inertia and friction, the zero-net-force explanation is scoped to acceleration, the system force is scoped to the track, and the prevalence claim is removed. Recalculation is in `work/brief159/v18-calculations.json`. The v17 and v19 handoffs match. No em dash or checked American spelling appears in narration. No audio or animation was inspected.
