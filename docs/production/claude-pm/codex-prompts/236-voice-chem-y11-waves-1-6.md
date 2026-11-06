# Brief 236: voice Year 11 Chemistry in six waves (Google voice)

Read `00-standing-rules.md`, then briefs 165, 213 and 217 (Google voicing method, measured-data format, and the chem-y11-m2-v06 pilot voicing). Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit any key. Voicing is a heavy process, so run it alone: not alongside a render or another voicing job.

**Background.** The owner approved the Year 11 Chemistry pilot (m2-v06) by extension on 7 Nov, so the course now voices in bulk. Root audited every design. The evidence for voicing is `checks/chem-y11-voicing-readiness.md` (root decision 34 in `checks/root-decisions-chem-y11-m1.md`):
- 73 designs are ready, and m2-v06 is already voiced, so 72 remain.
- Nine designs are held for repair: m1-v18 to v20 and v22 to v27. Do not voice them.

**Waves** (playlist order; the readiness file lists the members):
- Wave 1: m1-v01 to v10 and ws-v01 to v03 (13 designs, 79,443 characters).
- Wave 2: m1-v11 to v17, m1-v21, and m2-v01 to v04 (12 designs, 70,326). Voice m1-v21 now, but it releases only after m1-v18 to v20.
- Wave 3: ws-v04, ws-v05, m2-v05, ws-v06, m2-v07 to v09, ws-v07, and m2-v10 to v13 (12 designs, 71,567). Skip m2-v06.
- Wave 4: m2-v14 to v20 and m3-v01 to v05 (12 designs, 69,390).
- Wave 5: m3-v07 to v15 and m4-v01 to v03 (12 designs, 73,849). m3-v06 is not designed.
- Wave 6: m4-v04 to v14 (11 designs, 65,233).

Run one wave at a time, and hand in after each wave so root can start the builds.

**Per design**
1. **Recording gate.** Run `node scripts/check-recording-gate.mjs <key>`. Hash the current source. Where the error check's recorded hash differs because root fixed counts or findings, the readiness file is the evidence (decision 34). Note this in the hand-in; do not stop for it. Stop and report a design only for a real blocker, such as an em dash, a cue missing from the narration, or a count that is not the sum of the scene strings.
2. **Voice** with `scripts/generate-google-audio.mjs`: voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, and the pronunciation respellings used for m2-v06. Add any new chemical-name respellings to the shared list and report them.
   - Write per-scene audio, `.alignment.json` and `.generation.json`.
   - Retry a scene once on a clipped or failed segment, then report it.
3. **Measured data.** Write `docs/production/claude-pm/lessons/<key>/measured/lesson.json` in the m2-v06 form:
   - scene ids from the design's scene list;
   - durations including the design's holds (10 s countdowns, feedback holds);
   - word timings mapped to the display text;
   - the key-notes scene fixed at 45 s (1,350 frames).
4. **Validate:**
   - alignment, recording the worst word gap;
   - every bold cue has a timing;
   - the caption export (`scripts/export-explainer-captions.mjs`);
   - total seconds under 570.
5. **Machine listening only.** List retried or clipped segments, long silences, and mispronounced chemical names that you can detect. Human listening stays pending.

**Hand-in** to `status.md` after each wave, one line per design:
- characters;
- seconds;
- the measured path;
- the worst alignment gap;
- cue timings OK;
- captions OK;
- anything needing a human listen.

End each wave with the totals (characters, seconds and cost).
