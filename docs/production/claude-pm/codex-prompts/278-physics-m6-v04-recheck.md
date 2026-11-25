# Brief 278: Physics m6-v04, re-check the scene 4 cue order and release the hold

Read brief 276. Do not spawn sub-agents. Make no design edits and no commits.

Root fixed your brief 276 should-fix item: `lessons/phys-y12-m6-v04.md` now ends with "Revision 3a (26 November 2026)". It reorders scene 4's visual cues to the spoken order: "field", "Cos is close", "theta", "B", "all". The narration is unchanged.

1. Re-run the brief 276 freshness and error check on m6-v04.
2. If the check finds 0 blockers and 0 should-fix items, record the new source SHA-256, mark source readiness true, and put m6-v04 back in the Module 6 route order for voicing.

3. **Hook holds, all unvoiced Physics lessons.** Your brief 276 table records hook holds as "0 to 3 s". The builds need each hook's 3 s response hold to start straight after the spoken prediction prompt ("Make your prediction.", "Have a think." or the design's equivalent), not at the start or end of the hook.
   - For every unvoiced Physics lesson in Modules 5 to 8 that has a hook prediction, place the hold there in the prepared lesson.
   - The countdown starts when the hold starts.
   - List each lesson and the phrase you used.

Hand-in to `status.md`: the result, the SHA-256 and the planned night. Human listening stays pending.
