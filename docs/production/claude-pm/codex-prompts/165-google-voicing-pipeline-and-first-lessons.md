# Brief 165: Google voicing pipeline, then the first voiced lessons

Read `00-standing-rules.md`, brief 124 and `checks/google-tts-pilot-2026-10-31.md` first. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit the key.

**Owner decision (3 November 2026).** The owner listened to the brief 124 samples and approved the voice. Production voicing uses:
- **Voice:** `voice_shdbjsxcrr0a`.
- **Model:** `gemini-3.8-flash-tts`.
- **Key:** `GEMINI_API_KEY` in `.env.local`.

The voice covers Year 12 Mathematics Advanced and every Year 11 course. ElevenLabs stays for the remaining Year 12 Chemistry and Biology only. The owner did not object to the "ay" respelling for the maths letter a, so it is the default.

## Part 1: production path
Turn `scripts/google-tts-pilot.mjs` into a production generator, `scripts/generate-google-audio.mjs`. It produces the same outputs the build expects from `scripts/generate-elevenlabs-audio.mjs`:
- per-scene audio under `public/audio/<lesson folder>/`;
- `.alignment.json` and `.generation.json` beside each file;
- an updated lesson data file.

It must also:
1. **Reuse takes.** Only regenerate a scene whose text hash changed. Never re-voice an unchanged scene.
2. **Align the words.** Run WhisperX forced alignment (`work/brief124/align.py` and its venv) against the text actually sent.
3. **Keep two texts.** Store a pronunciation text separately from the display and caption text:
   - The maths letter `a` is sent as `ay`.
   - Map the timings back to the display text. Test the mapping on the `math-constant-override` sample, and report how far each word's timing differs.
   - Keep the lookup table in one file so later respellings can be added.
4. **Record the evidence.** Write the model, the voice, the billed tokens and an estimated cost to each `.generation.json`.
5. **Check the build.** Confirm the existing caption export (`scripts/export-explainer-captions.mjs`) and the build accept the output.

The pilot's whole-scene alignment failed on long scenes on this 8 GB machine. Segment the scenes by sentence, from the text and not from any other voice's timings, and keep one heavy process at a time.

## Part 2: one exact voiced preview
Voice `lessons/math-a12-d01.md`. It was clean at error check, with Revision 3 inputs; its review files are in `checks/`. Build it in Remotion and render one short pilot frame range (about 60 s, including one cue-heavy scene and one countdown). Do not run a full export.

Report three things separately:
- the source observations;
- the still and UI observations;
- what still needs human listening.

Check that the narrated changes land on their cue words within about 0.15 s.

## Part 3: if Part 2 passes
Voice the remaining lessons that are ready to voice, in this order, one at a time. Stop at the first failure.
1. Maths d02 to d17, then i01 to i05.
2. Biology FA1 v01 to v06.

Use the same checks as Part 2 for each lesson, but render only a short pilot range. Full exports wait for the brief's export-stage check. Record the actual total cost.

## Hand-in
Hand in to `status.md` with:
- the pipeline result;
- d01's preview findings;
- one line per voiced lesson (characters, seconds, cost, cue-timing result);
- anything that needs human listening.
