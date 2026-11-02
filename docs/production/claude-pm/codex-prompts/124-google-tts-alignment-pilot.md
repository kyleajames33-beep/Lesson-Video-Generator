# Brief 124: pilot of Google AI Studio speech, with word timings from forced alignment

Read `00-standing-rules.md` first. This brief can run alongside brief 123.

**Why.** New lessons will use a Google AI Studio voice instead of ElevenLabs. The explainer pipeline needs exact word timings: `scripts/assemble-teaching-reset-narration.mjs` builds `measured/lesson.json`, the cues and the captions from ElevenLabs' character alignment. Google's speech models return audio only, so the timings must come from forced alignment. This pilot finds out whether that works well enough before any lessons are designed around it.

**Key.** The owner adds a Google AI Studio API key to `.env.local`. Never print, log or commit it. If no key is present, stop after step 1 and say so.

## Steps

1. **Facts, with sources and dates.** Find out:
   - which Google AI Studio speech models and voices are available now, and whether each is a preview or a stable release;
   - the price per character or per minute;
   - the rate limits;
   - whether the output can be used commercially on YouTube;
   - whether any Google option returns word or character timestamps itself (for example Cloud Text-to-Speech timepoints).
2. **Voice samples.** Generate the narration of 3 scenes from one existing voiced lesson. Use `docs/production/claude-pm/lessons/m8b03/` (scenes `hook`, `insulin` and `attempt`), with 2 or 3 candidate voices. Use the same text as the ElevenLabs takes so the two can be compared. Keep the scene-to-scene consistency of one voice in mind.
3. **Alignment.** Align each Google take to its exact narration text with a local forced aligner. Use WhisperX, or a similar open tool that runs on this 8 GB PC; record the tool, version and install steps. Measure the timing error against a known reference: align the existing ElevenLabs takes for the same scenes, and compare the aligner's word times with the ElevenLabs alignment in `m8b03/measured/`. Report the median and the 95th-percentile word-start error in milliseconds.
4. **Pipeline fit.** Write an adapter script, `scripts/google-tts-pilot.mjs` or `.py`, that turns a Google take plus its alignment into the per-scene timing data that `assemble-teaching-reset-narration.mjs` expects. Assemble a `measured/lesson.json` for the 3-scene pilot in `out/google-tts-pilot/` only, never in the lesson folder. Then confirm that the caption export (`scripts/export-explainer-captions.mjs`) runs on it.
5. **Listening notes.** Give your own short notes on clarity, pace, pronunciation of science terms (insulin, glucagon, islets, homeostasis) and Australian English. Human listening by the owner decides.

Write `checks/google-tts-pilot-2026-10-31.md`. Put the audio files and the comparison table in `out/google-tts-pilot/`.

Hand in to `status.md` with:
- the recommended model and voice;
- the cost per typical 6,000-character lesson;
- the alignment error figures;
- whether the pipeline fit works;
- any blocker.

Don't change the ElevenLabs scripts or any lesson folder. No commits.

## Addendum (root, 1 November 2026): maths pronunciation

When the key is available, also test 3 lines from `../lessons/math-a12-d01.md`, including "k e to the a x plus b" and "the derivative of e to the two x is two e to the two x".
- Check whether the voice reads the constant "a" as the letter ("ay") or as the article ("uh").
- Check how it reads fractions such as "one half" and expressions such as "e to the x".
- If a pronunciation override (for example a phonetic respelling or an alias) is needed, give the exact method.

**Update (3 November 2026).** The owner has added the key to `.env.local` as `GEMINI_API_KEY` and chose the voice ID `voice_shdbjsxcrr0a`. Use that voice for every pilot line. If the API rejects the ID in the field you first try, check the current Google AI Studio documentation for how a saved or custom voice ID is passed (it may differ from the prebuilt voice-name field) and retry once. If it still fails, stop and report the exact error message (never the key). Record in the hand-in which model you used and why.
