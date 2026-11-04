# Google speech and alignment pilot

Checked 3 November 2026. This is a pilot, not a release or human listening approval.

## Outcome

Use `gemini-3.8-flash-tts` and the owner's saved voice `voice_shdbjsxcrr0a` for further evaluation. Google accepted that ID in the current Interactions API `generation_config.speech_config: [{"voice":"voice_shdbjsxcrr0a"}]`. The model supports custom voices and Google describes it as its higher-fidelity 3.8 option for accents and longer narration. The three biology scenes and four maths samples plus a science-terms sample are in `out/google-tts-pilot/`. The three biology scripts are the exact texts in the ElevenLabs voice manifest. There is one voice, as the 3 November update directs, so this is not a comparison among voices.

The adapter `scripts/google-tts-pilot.mjs` created `out/google-tts-pilot/measured/lesson.json`, local per-scene alignment files and timed captions. `node scripts/export-explainer-captions.mjs out/google-tts-pilot/measured/lesson.json out/google-tts-pilot/captions-export` succeeded and exported 34 cues. This checks data and caption compatibility, not a rendered video or cue synchronisation in playback. The adapter uses measured word boundaries and evenly interpolates character positions inside each word. Its character boundaries are estimates, not native Google timestamps. The pilot audio paths are outside `public/`, so this does not establish that the production renderer can serve them without a separate media-path decision.

## Google facts and sources

- Google's [speech generation guide](https://ai.google.dev/gemini-api/docs/speech-generation) lists Gemini 3.8 Flash TTS and 3.8 Flash-Lite TTS, both with custom voice design and replication support. It also lists 3.1 Flash TTS Preview and 2.5 Pro Preview TTS; the pricing page also lists 2.5 Flash Preview TTS. The 3.8 IDs do not carry a preview suffix; Google identifies 3.1 and 2.5 variants as preview. [Deprecation schedule](https://ai.google.dev/gemini-api/docs/deprecations): 3.1 Flash TTS Preview has an earliest shutdown date of 17 November 2026. Availability and account access can differ.
- The guide lists 30 prebuilt studio voices plus an extended library and saved designed or replicated voices. Custom voices are passed directly by ID in the `voice` field; they are not prebuilt voice names. Stored voices expire after one year without use. Gemini TTS produces audio, not native character or word timings. The separate [Cloud Text-to-Speech SSML API](https://docs.cloud.google.com/text-to-speech/docs/ssml#ssml_timepoints) can return timestamps for explicitly inserted `<mark>` tags; this is a different service and is not a demonstrated timestamp facility for the selected Gemini voice.
- [Google pricing](https://ai.google.dev/gemini-api/docs/pricing), checked 3 November: standard paid 3.8 Flash TTS is US$0.50 per million input text tokens and US$9 per million output audio tokens through 31 December 2026, then US$1 and US$18 respectively. Audio is 25 tokens per second: output is US$0.0135 per minute now, US$0.027 per minute from January, plus input. The Flash-Lite output is US$6 per million through December, then US$12; 3.1 Flash preview is US$1 input and US$20 output per million tokens, and 2.5 Flash preview is US$0.50 and US$10. Prices are token based, not a fixed per-character tariff.
- The three biology takes total 1,146 characters, 237 billed input tokens and 1,897 output tokens. At the current standard paid rates that is US$0.01719; scaling this sample by characters gives approximately **US$0.090 per 6,000-character lesson**, before taxes. This is an estimate, not a quote: speech speed, tokens and pauses vary, and free-tier billing may differ. From January the same usage would cost approximately US$0.18.
- [Rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) vary by model, project, tier and request/token/day limits; the actual project quota is shown in AI Studio. Google does not provide a reliable single public RPM for this account, and none was inferred from the successful sample calls.
- Google's [API terms](https://ai.google.dev/gemini-api/terms#use-generated) say Google does not claim ownership of generated content and the user is responsible for its use. The terms do not state a blanket ban on publishing generated audio on commercial YouTube; applicable terms and voice rights still govern the particular use. The terms separately restrict API clients directed to or likely accessed by under-18s; the distinction between a published video and an interactive API client matters and is not resolved by this pilot.

## Forced alignment and comparison

Installed Python 3.11.15, WhisperX 3.8.6, PyTorch 2.8.0 and PyAV 18.1.0 in `work/brief124/venv`. Reproduce with `uv python install 3.11`, `uv venv work/brief124/venv --python 3.11`, and `uv pip install --python work/brief124/venv/Scripts/python.exe whisperx`. The local `work/brief124/align.py` decodes audio with PyAV and aligns the supplied exact text using WhisperX's English `WAV2VEC2_ASR_BASE_960H` model on CPU. No full-video render was run.

Comparing forced-aligned ElevenLabs word starts against the existing ElevenLabs character starts yielded:

| Scene | Words compared | Median absolute error | 95th percentile |
| --- | ---: | ---: | ---: |
| hook | 68 | 34 ms | 114.6 ms |
| insulin | 81 | 31 ms | 96 ms |
| attempt | 50 | 45 ms | 130.3 ms |
| combined | 199 | 34 ms | 113.3 ms |

The individual word rows are `out/google-tts-pilot/alignment-comparison.csv`; summary and machine-readable results are beside it. All 199 words had a start time. **Limitation:** the hook used a whole-scene alignment, while the two longer reference scenes were broken into sentence windows based on the ElevenLabs character timing, with 0.6 s padding. Those reference-derived windows can make the benchmark optimistic and it is not a fully independent timing test. Google attempt windows were scaled from those reference sentence windows as well. This benchmark compares the aligner to ElevenLabs' alignment, not to a human-labelled ground truth. The machine could not complete the longer whole-scene job in one process, so an independently segmented benchmark and playback check remain necessary before claiming production accuracy.

## Pronunciation and listening

The three selected biology scenes include insulin and glucose but not glucagon, islets or homeostasis; `science-terms.wav` supplies those terms separately. The maths samples include exact sentences from the D01 design and an extra `one half` probe. The files are in `out/google-tts-pilot/`.

An automated audio review in `automated-listening-biology.txt`, `automated-listening-math.txt` and `automated-listening-supplement.txt` tentatively describes clear, consistent pacing and an Australian accent and recognises the science terms. It flags the maths constant `a` as an article-like “uh”; its transcription also omits `e` in the first expression, so both need human listening. A second take `math-constant-override.wav` sends `ay` in place of the spoken variable `a`; the automated review identifies the letter sound as “ay”. To use this approach, keep the display/caption text as `a`, maintain a separate pronunciation text with `ay`, and align against what was actually sent; a mapping back to display text would need explicit testing. This is phonetic respelling, not a demonstrated SSML alias. Human listening must decide the accent, science pronunciation, whether `e` is audible, and whether the override is acceptable. The automated review's warning that the second exam question is absent is not a speech omission: the selected source scene itself contains only the first question.
