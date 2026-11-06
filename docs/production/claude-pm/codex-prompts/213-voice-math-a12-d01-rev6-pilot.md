# Brief 213: voice math-a12-d01 Revision 6 (the Maths owner pilot)

Read `00-standing-rules.md` and brief 165 first. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit the key. One heavy process at a time.

**Priority.** This is short and unblocks the owner's Maths pilot. Run it straight after the brief you are on, ahead of the 198 to 211 re-render queue. It uses the Google voice, so it does not touch the ElevenLabs cap. It must not collide with the scheduled brief 165 Google task at 19:00 Sydney: run it before or after, not alongside.

**Background.** The owner rejected the d01 v1 render (6 November). Claude redesigned it to `maths-visual-standard.md` (Revision 5). Your brief 195 reviews found 4 should-fix and 1 optional finding, and Claude resolved them in Revision 6 (see the "Revision 6" section at the end of the design). Claude builds the scenes with the studio kit (`src/explainer/math/studio/`) once the measured data exists, then renders the pilot for the owner.

**Input:** `docs/production/claude-pm/lessons/math-a12-d01.md`, Revision 6. It has 17 scenes and 6,563 narration characters by the build parser rules. The v1 takes and measured data under `docs/production/claude-pm/lessons/math-a12-d01/measured/` and `public/audio/math-a12-d01/` are from Revision 3. Keep a copy of them in `work/brief213/v1-backup/` before writing anything.

**Steps**
1. **Pre-voice check.** Do the recording-stage error check on Revision 6 only for what changed since your 195 review:
   - scene 5's added sentence and its cue;
   - scene 6's heading and hand tag;
   - scene 11's narration and card;
   - the key-note and boundary wording;
   - author note b and the memory aid check;
   - the evidence paths and the title count.
   Then confirm the character counts by script (total and per scene), that every bold cue word is quoted in its scene's Visual in spoken order, and that there are no em dashes. Report any blocker and stop if you find one.
2. **Voice** with `scripts/generate-google-audio.mjs`: voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, the "ay" respelling for the letter a. Reuse any scene whose text hash is unchanged (expect very few). Write per-scene audio, `.alignment.json` and `.generation.json`.
3. **Measured data.** Write `docs/production/claude-pm/lessons/math-a12-d01/measured/lesson.json` in the form the v1 build read: scene ids, durations including the design's holds, and word timings mapped back to the display text. Scene ids must follow the design's "Scene list and build ids". The holds are the two 10 s countdowns, the memory-aid and feedback holds, and the quiet key-notes hold of about 40 s.
4. **Validate:**
   - alignment on every scene, recording the worst word-timing gap;
   - that each bold cue word has a timing;
   - the caption export (`scripts/export-explainer-captions.mjs`) on the new data;
   - that each scene's duration matches the design's holds.
5. **Listen check (machine only).** List any scene where a speech segment was retried, clipped or has a long silence. Note how "ay" lands in "Let's put a dial on the constant a" and "multiply by k and by a". Mark human listening as pending; do not claim it.

**Do not** build scenes, edit `src/explainer/lessons/math-a12-d01/`, render, or touch any other maths lesson. Maths voicing for d02 onwards stays paused until the owner accepts this pilot.

**Hand-in** to `status.md`:
- the pre-voice check result;
- the characters voiced, scenes reused, total seconds, billed tokens and cost;
- the measured lesson path;
- the alignment and cue-timing results;
- the caption check;
- anything that needs human listening.
