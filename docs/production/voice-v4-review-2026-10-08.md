# Simon v4 voice review, 8 October 2026

Simon remains the selected Australian narrator. Six short v4 takes were generated from the same 552-character science passage, using promotional credits in the signed-in ElevenLabs account. The user listened and said they all sound the same and are fine. Use the default controls as the starting point; this does not approve unheard final lesson recordings.

## New v4 features and their use here

V4 improves reference-voice fidelity, delivery and audio-tag handling. It offers quality-focused `eleven_v4` and latency-focused `eleven_v4_turbo`. Lesson production uses the quality variant. Stability controls variation; similarity controls adherence to the reference, with a possible naturalness tradeoff. Style/speed sliders and SSML are unsupported. Tags can influence delivery but remain variable, so exact student response gaps belong in measured audio assembly.

Same-language generation preserves the reference accent. Cross-language output now tends toward a native target-language accent, which matters for future dubbing. Improved cloning can also reproduce flaws in reference recordings. Professional-clone support is rolling out, and provider behaviour can change with continued training. Preserve accepted takes and retest before future batches. No cloning or multilingual audition was needed for the selected English voice. [Official v4 documentation](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/eleven-v4).

The Playground supports v4 and audio-tag prompting. Its input allowance does not establish our timestamped endpoint limit. We retained the existing conservative 2,000-character segment limit and timestamped Dialogue path rather than changing the production route during voice selection. Audio tags were researched but were not included in the accepted audition passage or final script. [Playground guide](https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech), [prompting guide](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices).

## Actual audition evidence

| Profile | Stability | Similarity | Takes |
|---|---:|---:|---|
| A, default comparison | 0.50 | 0.75 | A1, A2 |
| B, steadier comparison | 0.65 | 0.75 | B1, B2 |
| C, closer reference comparison | 0.50 | 0.90 | C1, C2 |

All six files decoded successfully, with durations from 39.5 to 41.5 seconds and zero saturated samples in the decoded mono PCM. That is a physical check, not a pronunciation detector. Review WAVs use a common loudness target to reduce volume bias; raw MP3s remain available. Source/audio hashes and measurements are in [the audition manifest](voice-v4-auditions-2026-10-08.json). Download filename setting labels stayed unchanged, so the observed UI settings are recorded separately.

Listen at http://127.0.0.1:8778/voice-v4-review/ or open `out/prototypes/voice-v4-review/index.html`. The page includes decimals, significant figures, calcium dihydrogen phosphate, chlorine notation and replication enzymes. It saves per-take listening notes locally. Browser downloads have no alignment sidecars and cannot substitute for final timestamped narration.

## Pipeline changes completed

- The generator now reads Simon/model selection from the manifest when no explicit override is supplied. Previously it could ignore that selection and use the global Flash default.
- `--request-options=<json-file>` supports Dialogue stability/similarity, language code, best-effort seed, text normalization and pronunciation dictionary references. Dictionary versions must be pinned. Unsupported legacy controls are rejected before generation.
- A conflicting voice/model must use a separate audition output directory. Existing generation metadata still prevents reusing recordings with different request settings.
- V4 SSML requests are rejected. Final prompt and answer clips remain separate, with measured silence and rebuilt alignment/captions.

Dialogue settings use `settings.similarity`; TTS controls have a different schema. A seed is not a guarantee of identical output. We did not create a dictionary or claim a dictionary test; those controls are available if a real pronunciation problem requires them. [Timestamped Dialogue API](https://elevenlabs.io/docs/api-reference/text-to-dialogue/convert-with-timestamps).

## Complete lesson recording

The [molar-mass handoff](../../out/prototypes/molar-mass-continuity-handoff/README.md) contains the updated engaging v3 script: 11 scenes, 742 words and 14 recording segments. All 14 passages now have fresh Simon v4 audio and character timestamps, using explicit A controls. Opening prediction and bracket questions each have a four-second hold; the chlorine question has five seconds. Existing usable artwork is retained, with the opening's unrelated balance image replaced by labelled carbon/oxygen cards. The earlier pronunciation tests and today's auditions use different words from that full script.

Measured playback and fresh captions are assembled into a 336.3-second draft. The complete export uses larger aligned calculation boards, protected response intervals and audio mastering. Check technical words, every decimal, Australian delivery, abrupt joins, loudness and answer concealment in the full review page at http://127.0.0.1:8778/molar-mass-continuity-handoff/. Approval of today's short auditions does not establish complete lesson listening, scientific review or improved learner outcomes.

Verification: 261 source tests, 36 production tests and four selected teaching-board tests pass on Windows. The narrated draft passes physical preflight with zero errors and warnings. Raw recordings have zero saturated PCM samples. Small terminal full-stop overruns are bounded to decoded media with provenance; spoken-character timing is unchanged. The user configured credentials locally in ignored `.env.local`; no credential is stored in tracked files or review artifacts. Listening and release reviews remain pending.
