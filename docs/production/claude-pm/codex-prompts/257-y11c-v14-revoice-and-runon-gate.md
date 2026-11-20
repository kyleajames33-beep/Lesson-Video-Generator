# Brief 257: re-voice chem-y11-m1-v14 "across-period", and make the voicing gate fail run-on takes

Read `00-standing-rules.md` and brief 236. Use brief 236's method, file formats and voicing settings (Google voice and model as brief 236 uses). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone (no Remotion work at the same time). Root found this on 21 November 2026 while building v14.

## The defect

`public/audio/chem-y11-m1-v14/across-period.wav` (voiced 20 November, wave 2) runs **70.8 s** for a 497-character script (about 7.0 characters per second; the voice normally runs 13 to 16). The recognition review in `status.md` ("Google recognition review chem-y11-m1-v14 (takes retained)") shows about 125 inserted words after the script ends: the model kept talking ("Now look at electronegativity, which is quite different from first ionization energy ..."). The take was retained, and the measured lesson, captions and hand-in all include it. Every other scene in v14, and every other Google-voiced lesson root scanned (`work/brief245/root/scan-rates.cjs`, `scan-insertions.py`), looks normal.

## Step 1: harden the gate (before any new speech)

In the brief 236 / brief 240 validation path (the recognition comparison and whatever decides "takes retained"), add two hard fails for every Google scene, old and new runs alike:

1. **Run-on by rate:** speech duration divided into the script's character count below **10 characters per second** fails the take (skip scenes under 3 s and any scene whose design marks deliberate long pauses).
2. **Run-on by recognition:** more than **12 inserted words** (recognised words with no expected counterpart), or any run of 5 or more consecutive inserted words at the end of the take, fails the take.

A failed take is not retained; it follows the existing one-permitted-retry rule. Add a unit test or a fixture run proving that the current v14 across-period take now fails and that v13's takes still pass. Report the change in `status.md`.

## Step 2: re-voice the one scene

Re-request **only** `chem-y11-m1-v14` scene `across-period` (this is its one permitted retry; the existing take failed the new gate). The narration text is unchanged (do not edit it). If the retry also fails the hardened gate, stop and report; do not request a third take.

Then rebuild the lesson's measured outputs exactly as brief 236 does for a completed lesson: `docs/production/claude-pm/lessons/c-y11-m1-v14/measured/lesson.json`, captions and validation, and the hand-in. Keep the old take and old measured files as backups (rename, do not delete), with SHA-256 noted in `status.md`.

## Step 3: re-scan

Run the hardened gate over every Google-voiced lesson already handed in (Year 12 Maths, brief 236 waves 1 and 2, briefs 247 to 249, 251 to 255 so far). List any other failing scene in `status.md` with its numbers. Do not re-voice those without root's say-so.

**Hand-in** to `status.md`: the gate change and its test, the v14 retry result (new duration and rate), the new measured lesson SHA-256, and the re-scan list. Root then rebuilds nothing in code (v14's scene 3 is keyed to cues in the first 29 s), re-renders v14 and reviews it.
