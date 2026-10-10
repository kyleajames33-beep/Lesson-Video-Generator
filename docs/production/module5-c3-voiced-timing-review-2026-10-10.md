# C3 measured voiced timing review

Scoped pass for current v2 source, measured cues and three decoded pilot states. Human listening, continuous playback, export and public release remain pending.

Current lesson SHA256: `4f9a8ae747692747d5e7d9b71fbe4eb44b6c7d050bb8b851ab401c63d784ee67`. The JSON companion binds exact source, props, cue report, all36 raw files,20 assembled files, cue consumers and sampled pilot images. Mutable brief workflow fields are not approval bindings.

1184 words,12 raw segments and10 voiced scenes preserved; title unvoiced. Deep comparison with approved clear parent permits only voice/media, captions, durations and measured cues/holds; v2 additionally removes exactly2 redundant optional pausePrompt fields.

All12 request sidecars match exact text, Simon Australian voice cOEV2DrZBBGNLpE74kQu, eleven_v4, stability0.35 and similarity0.75. Canonical sorted-key request hashes match manifest. All36 raw hashes and alignment text match.

Independent FFmpeg decoding and PCM reconstruction from raw takes, recorded padding and gaps reproduces all10 assembled WAV streams byte for byte.

All40 unique phrase spans reproduce aligned start timestamps and ceil(seconds*30-1e-8) frames. All10 captions reproduce with alignmentToCaptions. Diagram/stage/line cues use frames, bullet at uses seconds.

Both360-frame response gaps contain zero PCM and no captions. Ordered answers begin at gap end. All question demands and conditions remain. Both holds end safely before actual24-frame outgoing overlap.

Two-second joining/splitting windows fit: association128, reverse780, heating910, cooling1193, cooling settled1253. Temperature response1548 plus240frames settles1788, outgoing1833.

Normal media narration rate134.8 to154.4 words/minute; question scenes excluding12-second gaps142.6056 and137.5. Mechanical rates do not establish listening quality.

Transfer A holds708 to1068, Transfer B852 to1212. Last answer lines1798 and1594 leave311 and395 frames before outgoing transitions. Normal scenes provide45 reading frames plus24 transition frames. Temperature response additionally provides the eight-second settling window and45 settled reading frames.

The SHORT_TAIL warning is numeric: alignment end68.80000000000001 plus1.5 exceeds outgoing70.3 by1.4210854715202004e-14 seconds. Decoded media ends2064; outgoing starts2109. Exactly45 frames remain, so no real tail shortage was found. Transfer A terminal punctuation bounds are documented and do not change speech.

Actual decoded v2 pilot images at29.6,36.6 and59.33 seconds show the answer-free hold, first answer and late answer respectively. Both question demands and conditions remain, one pause instruction appears, and future lines are absent. The condition text stays above the caption reserve, although its white card extends below it. These stills do not exercise external caption tracks or controls. Render record input-package and video hashes match.

Both current snapshots pass the actual verifyRelease implementation with no changes and no missing required files. They contain865 input entries and874 release entries. Ten assembled generation-settings sidecars are intentionally absent, recorded as optional with null hashes. This matches current state and is not drift. All12 raw generation sidecars are present and verified. A temporary read attempt incorrectly assumed optional entries must exist; the final review corrects that assumption.

Root separately reports actual750px Player checks, including the cooling gap. No independent continuous playback or listening claim is made. No blocking source/timing finding was identified in the bounded evidence. Only these two new reports were written; all initial candidate and historical evidence remain preserved.
