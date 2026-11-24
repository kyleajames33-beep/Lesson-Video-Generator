# Brief 265: re-voice the hook scene of Physics m5-v09 and m5-v11 (neutral first sentence)

Read `00-standing-rules.md` and briefs 257, 259 and 261. Do not spawn sub-agents. Make no design edits and no commits. Never print or log a key. Audio work runs alone: hold the shared lock as brief 261 did.

## Root's decision (24 November 2026, owner approved)

The first sentence of each hook pointed back to a video that moves in the 2025 course order. Root changed only that sentence in each design:

- `lessons/phys-y12-m5-v09.md`: "Here's that spanner on a stuck nut." is now "Here's a spanner on a stuck nut."
- `lessons/phys-y12-m5-v11.md`: "Here's that crane again, seen from above," is now "Here's a crane, seen from above,"

## Task

1. **Re-prepare.** Re-prepare both lessons from the current designs. Only the `hook` scene text may differ from the old prepared input; prove it with a diff.
2. **Re-voice v09.** v09 is fully measured. Re-voice its `hook` scene once, as one request, with the lesson's voice, model and settings, and run the brief 257 gate. Keep the old take, renamed `.before-brief265`. Rebuild v09's measured lesson, captions and validation exactly as brief 261 did. Prove with a word-time diff that every other scene, bold cue time, hold and notes duration is unchanged.
3. **v11.** The `hook` take made during the brief 262 billing test used the old wording, so discard it from the cache and keep it as `.before-brief265`. v11's hook is voiced with the new text when the P5 queue reaches v11. No separate request is needed now unless v11 is already being voiced tonight.
4. **Order.** Do this before or alongside tonight's P5 run, within the 99-request cap. If the gate fails twice, stop and report.

## Hand-in to `status.md`

Report old and new hook durations, the gate results, requests used, both SHA-256 values, and v09's new measured SHA-256 and diff result. Root then rebuilds and re-renders v09. Human listening stays pending.
