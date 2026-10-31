# Brief 124: Google speech pilot

Checked 31 October 2026. Step 1 complete. Steps 2 to 5 stopped as the brief requires: `.env.local` contains no Google AI Studio key. No secret values were printed. No speech request, installation, alignment, adapter, lesson change or caption export was made.

## Models and voices

The current [speech guide](https://ai.google.dev/gemini-api/docs/speech-generation) lists Gemini 3.8 Flash TTS, 3.8 Flash-Lite TTS, 3.1 Flash TTS Preview and 2.5 Pro Preview TTS. The pricing page also retains 2.5 Flash Preview TTS. These are Developer API/AI Studio names; Cloud model names and billing differ.

The [3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts) and [Flash-Lite page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-lite-tts) present production models without a Preview designation. The other three explicitly retain Preview in their names. Availability for this owner's account has not been tested.

The guide lists 30 prebuilt voices: Zephyr, Puck, Charon, Kore, Fenrir, Leda, Orus, Aoede, Callirrhoe, Autonoe, Enceladus, Iapetus, Umbriel, Algieba, Despina, Erinome, Algenib, Rasalgethi, Laomedeia, Achernar, Alnilam, Schedar, Gacrux, Pulcherrima, Achird, Zubenelgenubi, Vindemiatrix, Sadachbia, Sadaltager and Sulafat. For 3.8 it also documents an extended voice library, voice design and replication. Those are not necessary for this pilot.

Provisional audition: 3.8 Flash-Lite with Charon, Iapetus and Sulafat. These are candidates, not a listening recommendation. Keep one identical Australian English direction across all three scenes and test consistency between scenes.

## Price

[Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing), checked today. USD, standard paid requests, per million text input/audio output tokens:

| Model | Input | Output | Audio per minute |
| --- | ---: | ---: | ---: |
| 3.8 Flash-Lite TTS | $0.50 | $6 | $0.009 |
| 3.8 Flash TTS | $0.50 | $9 | $0.0135 |
| 3.1 Flash TTS Preview | $1 | $20 | $0.030 |
| 2.5 Flash Preview TTS | $0.50 | $10 | $0.015 |
| 2.5 Pro Preview TTS | $1 | $20 | $0.030 |

3.8 rates above last through 31 December 2026; the page doubles them from 1 January 2027. Output uses 25 audio tokens/second. Google bills tokens, not characters. Assuming 1,500 input tokens and nine spoken minutes for a 6,000-character lesson, estimates are $0.08175, $0.12225, $0.2715, $0.13575 and $0.2715 respectively. These are calculated estimates, excluding retries, alignment and tax. Actual token count and speech duration determine cost. Free quota is listed for Flash variants; Pro has no free tier.

## Limits

The [rate-limit documentation](https://ai.google.dev/gemini-api/docs/rate-limits) directs users to their active AI Studio quota. Limits depend on project, model, tier and account status; they are not a universal RPM entitlement. Requests/minute, input tokens/minute and requests/day can each block a request. Daily quota resets at midnight Pacific time. Preview models have tighter limits. Exact owner quotas remain unverified without an authenticated project. Do not plan throughput from an old public quota table.

## Commercial output

The [Gemini terms](https://ai.google.dev/gemini-api/terms), effective 23 March 2026, permit professional/business use and say Google does not claim ownership of generated content. They do not impose a blanket non-commercial restriction on Preview output. Commercial YouTube narration is therefore compatible with these terms, subject to applicable rights, law, policies and attribution requirements. Unpaid inputs/outputs may be used for improvement and human review; paid processing has different data terms. Offline rendered videos are the proposed use, rather than exposing an API client to students.

## Timings and the remaining pilot

Gemini TTS is audio-only; its speech guide does not document word or character alignment output. Cloud TTS offers [SSML timepoints](https://docs.cloud.google.com/text-to-speech/docs/ssml): returned times identify explicit `mark` positions, rather than automatic word boundaries. The [v1beta1 synthesis response](https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1beta1/text/synthesize) documents `timepoints`. This does not establish SSML/mark support for Gemini TTS or justify switching APIs silently.

After the key is available, use the exact existing B03 `hook`, `insulin` and `attempt` text. First align the matching ElevenLabs files and compare normalized matched words with the saved reference. Report median and 95th-percentile absolute start error and unmatched-word counts. Then align the Google takes, build the adapter and three-scene lesson under `out/google-tts-pilot/`, and run the cumulative caption exporter. No installation recipe or tool version is claimed before that installation is tested on this 8 GB PC.

| Required outcome | Result |
| --- | --- |
| Recommended model/voice | Provisional 3.8 Flash-Lite; audition Charon, Iapetus, Sulafat |
| Typical 6,000-character cost | About USD $0.082 under the stated nine-minute assumption |
| Median / p95 alignment error | Not measured |
| Pipeline and caption fit | Not tested |
| Listening | No samples generated; owner decides after audition |
| Blocker | Google AI Studio key absent from `.env.local` |

Independent source review repeated the official model, voice, price, rate-limit, terms and timepoint checks. It found no factual error and recalculated all five estimates. This does not test account access, voice quality, alignment or pipeline fit.

## Continuation, 1 November 2026

Rechecked `.env.local` without printing secret values: the file exists, but no nonempty Google AI Studio key was found under a Google, Gemini or AI Studio variable name. Steps 2 to 5 remain stopped under the brief's explicit no-key rule. No speech, aligner installation, adapter, pipeline assembly or caption export was performed.

Reopened the official [speech guide](https://ai.google.dev/gemini-api/docs/speech-generation), [pricing](https://ai.google.dev/gemini-api/docs/pricing), [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) and [terms](https://ai.google.dev/gemini-api/terms) on 1 November. They continue to support the model, price, quota and commercial-use summary above. The voice candidates remain provisional because no samples have been generated. Alignment median and p95 remain unmeasured, and pipeline fit remains untested.
