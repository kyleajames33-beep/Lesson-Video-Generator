# Brief 276: Physics, re-check that every prepared input matches its current design before voicing

Read `00-standing-rules.md` and briefs 259 and 260. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key.

## Why (root, 25 November 2026)

Root found one stale prepared input. `lessons/p-y12-m6-v04/lesson.json` lacks the 24 November "Cos is close" clause, which the current design `lessons/phys-y12-m6-v04.md` has. The source audit in `work/brief259/physics/candidates/phys-y12-m6-v04/` is the old one too. Other designs may have changed since they were prepared.

Root has already built these lessons on provisional timing:

- Module 5: v10, v14, v15, and v19 to v23.
- Module 6: v01 to v06.

Each switches to its measured timing once voiced. A stale take would put the wrong narration under the built scenes.

The m6-v07 to v09 build found two more stale scenes, both missing the 24 November "Cos is close" wording:
- m6-v07 scene 5 (`angle`)
- m6-v09 scene 4 (`normal`)
- m6-v16 scene 4: its prepared input is 6,450 characters against the design's 6,527.

Root has since built m6-v07 to v09 on provisional timing.

## Task

1. **Compare.** For every Physics lesson not yet voiced (Module 5 and Module 6), compare the current design (its last revision section overrides) with the prepared `lessons/p-y12-m*-vNN/lesson.json`. Compare the scene IDs, every scene narration string, the cue phrases and the hold settings.
2. **Re-prepare where stale.** Where anything differs:
   - Run the brief 237 error-only check on the current design.
   - Re-prepare it exactly as brief 259 did, keeping the old files with a `.before-brief276` suffix.
   - Refresh its source audit in `work/brief259/physics/candidates/<key>/`.
3. **Keep the voicing order.** Leave the existing nightly order unchanged: earlier P5 lessons first, then v14, then Module 6 in route order. Do not voice any lesson whose comparison or check has not passed.
4. **Recent design notes.** Root added notes today (25 November) to m6-v01, m6-v05 and m6-v07. They change the on-screen heading or launch direction only, not the narration. Confirm that none of them changes a narration string.

5. **Designed holds.** The m6-v13 to v15 build found that the prepared timing gives no hold time to some holds the designs ask for: screen-check holds and slider holds (three in v14, two each in v13 and v15). The m7 builds found more: m7-v09 scene 4 needs a 3 s prediction-countdown hold, and scene 5 a 2 s slider hold. Speech currently covers them. For every unvoiced Physics lesson:
   - add each hold the current design names (scene and seconds) to the prepared lesson's `holdSeconds`;
   - list what you added.
   This changes timing only, not the narration.

## Hand-in to `status.md`

One line per lesson:
- the lesson ID;
- whether its prepared input is current or was re-prepared;
- the new SHA-256 values for anything re-prepared;
- its planned voicing night.

Human listening stays pending.
