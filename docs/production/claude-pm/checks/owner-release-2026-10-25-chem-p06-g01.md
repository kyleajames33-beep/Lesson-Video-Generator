# Independent source release check: Chemistry M6 P06 and G01

25 October 2026. Reviewer: independent Codex agent. Source and saved-still review only. No source edits, audio generation, playback, human listening, full export, upload or visibility change performed by this reviewer.

Verdict: **no source release blockers found**. Both lessons pass this bounded calculation, learning-sequence, caption-text and cue-resolution check. This is not a full-package release pass. Root must bind the reviewed preview and final package, record the owner's approval faithfully, and finish the existing playback/export/package gates.

## Exact inputs and mechanical evidence

| Selected measured source | SHA-256 | Scenes | Runtime at 30 fps |
| --- | --- | --- | --- |
| `docs/production/claude-pm/lessons/m6p06/measured/lesson.json` | `689b28cc01d2e755da9b78348dc67ea4c22a0a25081ba2d49c6f6f9de19c24e9` | 20 | 489.7 s |
| `docs/production/claude-pm/lessons/m6g01c/measured/lesson.json` | `8ba220cbf47f83d1de6a66e32bd67953e1413bee6db725dcd1ea63d06badcc13` | 19 | 496.9333 s |

Read the measured narration in full and inspected `src/explainer/lessons/chem-m6-p06/` and `chem-m6-g01/`, including scene components, imported measured lessons, common helpers, assets and drawing parts. Consulted the design revision histories, independent learning/science reviews, `codex-check-96.md`, `codex-check-97.md`, the repo guide, handoff and student-learning-review standard. Source inspection confirms both config and scene helper imports select these measured lessons.

Direct Node checks on current files found:

- Every scene's narration text equals its concatenated caption tokens exactly, with no missing or changed words. No narration U+2014 characters were found.
- No scene's voice end exceeds its duration, and no final caption exceeds its voice end by more than one frame.
- All 117 MP3, alignment and generation files named in the two measured reports exist and match the reports' SHA-256 values.
- All 327 named cue phrases resolve against the selected caption tokens, including requested repeated occurrences: 180 P06 and 147 G01. This checks phrase resolution, not the perceived success of motion at playback speed.
- All six response holds last 300 frames (10 seconds), beginning 12 frames after the recorded speech end. The question cards retain the question demands and conditions during these holds in source.

P06 holds: attempt-1 local frames 550 to 850, speech end 538; attempt-2 476 to 776, speech end 464. G01 holds: Q1 574 to 874, speech end 562; Q2 632 to 932, speech end 620; Q3 663 to 963, speech end 651; Q4 706 to 1006, speech end 694.

## P06: titration practical

The main question is how to obtain a trustworthy titre and trace a technique error. Entry knowledge includes the preceding titration lesson; the 1:2 carbonate:HCl ratio is recalled visibly. The two benches create a useful contrast between agreement and accuracy, then the practical explains why each rinse, transfer, reading and endpoint step matters. The calculation connects the measured standard and aliquot to acid moles, then divides by the measured titre. Both unseen attempts require following a cause through moles, titre and calculated acid concentration, with opposite answer directions.

Recalculated results:

- `1.3656 / 105.99 / 0.2500 = 0.05153694 mol/L`, shown as `0.05154 mol/L`.
- `0.05154 x 0.02500 = 0.0012885 mol` carbonate; doubled acid amount `0.002577 mol`.
- Retained titres 24.35, 24.30 and 24.35 mL have mean 24.3333 mL, shown as 24.33 mL, and spread 0.05 mL. The source and saved still retain check 97's corrected spread label and separate 0.10 mL acceptance rule.
- `0.002577 / 0.02433 = 0.1059186 mol/L`, shown as 0.1059. Bench B `0.002577 / 0.02482 = 0.1038276 mol/L`, shown as 0.1038, about 2% lower.
- Water in the burette dilutes the unknown, increases the titre and lowers the calculated original concentration. A residual water rinse in the pipette lowers carbonate moles and titre, raising the calculated concentration. A carbonate rinse in the conical flask increases carbonate moles and titre, lowering the calculated concentration. These directions and their reasons are sound.

The parallax explanation states increasing scale numbers downward before deriving the low reading from an elevated line of sight. The known bubble fault is excluded for its cause and repeated, rather than treating disagreement alone as permission to reject data. Feedback durations are 23.9 and 22.5 seconds, within the requested brief end-practice format. Both feedback scenes show one crossed classic mistake.

## G01: strong acid and base pH practice

The main question is which method fits dilution or mixing and how to check the answer. The three checks provide a useful recurring frame. The student first attempts each fully specified question, then sees the reason for the current operation: complete ionisation, water's equilibrium, conserved moles during dilution, final volume, logarithms requiring concentration conversion, neutralisation before dilution, and two hydroxides per barium hydroxide. The longer walkthroughs fit the hard-practice exception because solving the questions is the content.

Recalculated answers:

| Case | Independent result | Taught result |
| --- | --- | --- |
| Q1 HNO3, 0.00250 mol/L | pH 2.60205999; hydroxide `4.0 x 10^-12 mol/L` | 2.602; `4.0 x 10^-12 mol/L` |
| Q2 25.0 mL of 0.120 mol/L made to 250.0 mL | 0.00300 mol, 0.0120 mol/L, pH 1.92081875 | 1.921 |
| Q3 acid/base mixture | excess hydronium 0.0010 mol in 0.0500 L, pH 1.69897000 | 1.70 |
| Q4 barium hydroxide/HCl | excess hydroxide 0.00100 mol in 0.0700 L, pOH 1.84509804, pH 12.15490196 | 12.155 |

Q4 uses unrounded intermediate concentration for pOH, as the source line `-log(0.014286)` indicates. The design explicitly records its convention of treating pKw at 25 C as exact for the three-decimal answer. This reviewer does not identify that documented convention as a blocker. Question cards retain temperature, supplied Kw in Q1 and additive-volume assumptions for Q3/Q4. No answer-bearing working is supplied during the attempts in the inspected source.

## Saved-still observations and limits

Viewed these existing PNGs under `out/explainer/<composition>/stills/`:

- P06 frames 6613, 7499, 11053 and 14685: retained titre calculation and corrected spread, separated calculation/givens, full first-attempt conditions with a countdown, and key notes with pause invitation.
- G01 frames 880, 1778, 11067 and 11982: hook, full Q1 card including Kw, full Q4 card including additive-volume assumption, and the excess-hydroxide working stage.

No clipping or answer leak was observed in those samples. The apparatus and retained quantitative case are identifiable. Still review does not establish readable continuous motion, current compiled-preview byte identity, audio pronunciation or a full-device watch-through. The PNGs are existing evidence; this reviewer did not regenerate them or prove their renderer-source fingerprint.

Two nonblocking scope/usability observations:

1. Each measured notes scene provides about 20.8 seconds after the short spoken invitation, shorter than P06's design estimate. Both speech and the displayed page explicitly invite pausing to copy. That makes the dense notes an optional pause page rather than a demand to copy while hearing new explanation. Extending the hold is a possible usability improvement, not required to repair a teaching blocker.
2. G01's first key note says hydronium equals acid concentration "even when dilute". In the actual worked cases, concentrations are far above water's ion contribution, so the approximation is appropriate. The later dilution note already limits the tenfold pH rule to pH well below 7. If root elects a small display-only refinement, "for these questions" would prevent extrapolation of the first line to ultra-dilute solutions. No worked-case correction or extra ultra-dilute lesson is needed for this release.

Root retains responsibility for exact voiced playback, the owner's listening/acceptance record, export-stage brief checks, final MP4/caption/media binding, prerequisite availability and publication.

## Mechanical audio decode addendum: all four selected previews

At root's request, decoded all 77 selected MP3s listed in `out/checks/owner-release-2026-10-25/media-inputs.json`, covering Chemistry P06, G01, G02 and Biology P01. Full machine-readable evidence is `out/checks/owner-release-2026-10-25/audio-decode-audit.json`; its input inventory hash and every decoded audio hash are recorded there. The bounded runner is alongside it as `audio-decode-runner.cjs`, with four concurrent workers maximum.

The bundled Remotion ffmpeg has a restricted build: the first attempted float PCM output format was unavailable. The completed audit uses its supported 16-bit PCM WAV output, reads the WAV data chunk and counts decoded samples at the source sample rate. The final results contain zero decode failures and zero decoder warnings. Sample peaks are quantised to 16 bits. This is not true-peak, integrated loudness, audible clipping, pronunciation or listening approval.

| Lesson | Decoded files | Highest decoded sample peak |
| --- | --- | --- |
| Chemistry M6 P06 | 20 | -5.65 dBFS |
| Chemistry M6 G01 | 19 | -5.10 dBFS |
| Chemistry M6 G02 | 19 | -4.99 dBFS |
| Biology M6 P01 | 19 | -4.48 dBFS |

Across all files, peaks range from -10.41 to -4.48 dBFS. No decoded samples reach either 16-bit PCM rail, and none exceed the 0.999 near-full-scale threshold. The 77 decodes contain 1651.36 seconds of audio in total.

Every decoded endpoint fits within the measured voice end, with 0 to 0.8 frame rounding margin, and within its scene duration with at least 60 frames remaining. All 12 response holds remain ten seconds long; selected audio ends 0.407 to 0.427 seconds before the hold starts. No audio intrudes into a response hold. MP3 container stream duration is also recorded, separately from exact decoded duration, because encoder/container padding can make it slightly longer. No media or lesson source was changed.

## Independent learner-perspective check of the exact browser previews

25 October 2026, follow-up requested by root. Opened these exact compiled v1 pages in separate Chrome review tabs using the computer-use browser tools:

- `http://127.0.0.1:8778/Explainer-chem-m6-p06-preview-v1/`, titled `CHEMISTRY TITRATION PRACTICAL | Explainer preview v1`, displaying 14691 frames at 30 fps and 8:09 runtime.
- `http://127.0.0.1:8778/Explainer-chem-m6-g01-preview-v1/`, titled `CHEMISTRY STRONG ACID AND BASE pH PRACTICE | Explainer preview v1`, displaying 14908 frames at 30 fps and 8:16 runtime.

Selected scenes with the page's visible scene buttons and ran the Player at its default normal playback speed. The Player was deliberately muted. The actual evidence is successive browser screenshots and accessibility snapshots taken while playback advanced, plus selected-scene inspection. This was not uninterrupted whole-video viewing, an audiovisual synchronisation test, human listening or real-student learning evidence. The browser occasionally delayed controls during the parallel renders; states were refreshed after delays. No resulting lesson defect was inferred from a delayed browser action.

P06 observations from the running preview:

- Around 2:20 to 2:48, the apparatus and enlarged meniscus remain identifiable. The scale shows increasing numbers downward, then the level sight line and `initial: 0.40 mL` reading. The earlier source review supplies the causal narration; the actual picture provides the scale and reference point needed to reconstruct that cause. This serves the learner's question "why does the viewing angle change the reading?".
- The following titration scene shows the burette, titre readout and yellow/orange/red flask comparison. The red rough run is labelled as overshot/not used; the accurate endpoint is first permanent orange. These are relevant apparatus/process images rather than replacement text in a diagram slot.
- The first attempt was observed in normal playback with its complete pipette case and unknown-acid demand, followed by the feedback. At about 6:18 the active chain starts with fewer carbonate moles. A later screenshot shows `wet pipette -> fewer moles`, then `titre smaller`, then `c(HCl) too high`. Relevant phrases in the retained question underline as the argument advances. The result is tied to dividing the calculated moles by the smaller titre. The classic diluted/too-low statement appears separately from the correct chain; its later cross is established by the earlier source check rather than the captured browser sample.
- Replayed the second attempt using its scene control. At about 7:02 the full question and `All other steps are carried out correctly` remain visible during the countdown. No answer-bearing chain appears in the question view. Subsequent feedback at about 7:26 shows the film inside the flask and `carbonate film + aliquot -> more moles`, `titre bigger`, `c(HCl) too low`. The contrast with the first answer is earned through a different physical cause, rather than repeating a memorised error direction.
- The decision-rule page retains the useful rinse/reading/titre sequence. The separate key-notes scene was selected and observed in the browser. It visibly says to pause for more copying time, keeps new reasoning separate from copying, and qualifies the rinse aid with burette/pipette/flask conditions. The page is dense but readable at the inspected desktop Player size. The earlier short-hold concern remains a nonblocking pause-page usability observation.

G01 observations from the running preview:

- Q2 was played from its question scene. At about 2:39 the complete stem, pipetted amount and concentration, 250.0 mL made-to-mark volume, 25 C condition and calculation demand remain visible through the countdown. The answer field is blank. The apparatus is identifiable and the method badge does not disclose the operation during the attempt.
- In the following working, the source's current calculation case is retained in a compact question strip. The normal-playback snapshots show the moles/final-volume/concentration/pH progression and its result, then the pH-ruler sense check with `volume x 10, so concentration / 10`. The earlier results support the current operation rather than competing as full paragraphs. This offers a useful explanation of why a final-volume choice changes the answer.
- At about 4:16, Q3's full card stays visible during its countdown: both pH values, 30.0 and 20.0 mL, both solutions at 25 C, additive-volume assumption and resulting-mixture pH demand. No working or final answer is shown there.
- Around 4:44, the pH-to-concentration conversions dim as the active moles calculations appear. The matching givens in the question underline. The subsequent scene begins with unequal acid/base bars and the neutralisation equation. These observed representations give the student referents for the already checked explanation that logarithmic pH values must first become concentrations and amounts.
- Around 6:13, Q4 working starts with the barium hydroxide dissociation equation. Later screenshots show the subscript two ringed and the `2 x 0.0500 x 0.0400` hydroxide calculation, alongside the acid amount. Around 7:05, one retained excess-hydroxide chip supports the total-volume, concentration, pOH and pH lines. Earlier lines dim, the current final line is prominent, and the pH track places 12.155 above 7. The next scene crosses the one-hydroxide mistake while preserving the correct answer in the case strip.

Learner-perspective finding: **no additional learning blocker was observed in these exact-preview samples**. The current physical case, changing quantity and reasoning stage can be followed from the stated entry knowledge. Full question conditions are preserved in the inspected response opportunities, and the observed transitions and staged displays carry explanatory work. The samples provide actual-browser evidence beyond the earlier proposal/source and saved-PNG review. They do not establish every scene's continuous motion or audio quality. Named word cues were checked mechanically against measured tokens earlier; with sound muted, this reviewer does not claim to have heard each cue align with its image.

Root reports that the owner has affirmed personally watching/listening to all four previews. That owner evidence belongs in root's acceptance record with its original wording. This independent reviewer does not mark human listening or substitute the above sampled visual review for a full-package release gate.
