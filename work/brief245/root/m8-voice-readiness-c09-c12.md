# Year 12 Module 8: voice readiness, chem-m8-c09 to c12 (16 November 2026)

This is an independent review before paid ElevenLabs narration. It follows the method in `m8-voice-readiness.md`. I did not prepare these designs or briefs, and I edited none of them. No TTS request, node or Remotion run, render or commit was made. All checks were run in Python, read-only.

## What changed

- Brief 246 (`docs/production/claude-pm/checks/chem-m8-c10-c12-measured-spectra.md`) supplied measured liquid-film IR and CDCl₃ NMR records. Four designs now carry a "Revision 4" section: c10, c11a, c11b and c12. c09 changed only its Status line, which now records root's 6 November ruling (brief 220) that the NIST 70 eV records are the primary source and no SDBS cross-check is needed for recording.
- Narration: `git diff HEAD` over all five designs shows exactly one changed narration line, c10 scene 11 ("look alike" became "show the same bands"). No other narration changed.
- New build folders (untracked): `docs/production/claude-pm/lessons/m8c09/`, `m8c10/`, `m8c11a/`, `m8c11b/`, `m8c12/`, each with `lesson.json`, `lesson.production-brief.json`, `request-options.json` and `voice-manifest.json`.

## Readiness table

| Lesson | Brief path | Recording check | Data gate (brief 246) | Narration match (design = lesson.json = manifest) | Em or en dashes in narration | Characters | READY TO VOICE |
|---|---|---|---|---|---|---|---|
| chem-m8-c09 | docs/production/claude-pm/lessons/m8c09/lesson.production-brief.json | Python emulation: no blockers. Root to run node (below) | Not applicable (MS only; NIST records, brief 220 ruling) | Yes, 18 of 18 scenes | 0 | 6,155 | **Yes, voice now** |
| chem-m8-c10 | docs/production/claude-pm/lessons/m8c10/lesson.production-brief.json | Python emulation: no blockers. Root to run node | Met: all 7 replaced traces match the report row for row; every narrated and carded value within 15 cm⁻¹ | Yes, 20 of 20 (scene 11 is the new sentence) | 0 | 6,321 | **Yes, voice now.** Two screen-only build notes below; no narration fix |
| chem-m8-c11a | docs/production/claude-pm/lessons/m8c11a/lesson.production-brief.json | Python emulation: no blockers. Root to run node | Met: all 12 compounds; drawn shifts within 0.5 ppm (largest 0.46, propanoic acid 181.46 drawn 181) | Yes, 17 of 17 | 0 | 5,740 | **Yes, voice now** (gate ruling accepted, see check 5) |
| chem-m8-c11b | docs/production/claude-pm/lessons/m8c11b/lesson.production-brief.json | Python emulation: no blockers. Root to run node | Met: every drawn, printed or spoken shift within 0.1 ppm | Yes, 17 of 17 | 0 | 5,618 | **Yes, voice now** |
| chem-m8-c12 | docs/production/claude-pm/lessons/m8c12/lesson.production-brief.json | Python emulation: no blockers. Root to run node | Met: all drawn, printed or spoken IR and NMR values match the report; the two held items are count-only or class claims | Yes, 17 of 17 | 0 | 5,605 | **Yes, voice now.** One screen-only build note below; no narration fix |

**Total: 29,439 characters** (c09 6,155 + c10 6,321 + c11a 5,740 + c11b 5,618 + c12 5,605). This is well inside the 40,000 budget. Each manifest points its key-notes scene at the standard take (hash `231477bff795`, 75 characters), and that audio file already exists in each take folder. The new billed characters are therefore about 29,064.

## Findings by check

### 1. Data

I re-read every row of the brief 246 tables and compared it with each design's "Numbers to verify" list.

- **c10:** The seven replaced compounds match the report's measured column exactly, including the bands the report says to add: ethanol (J18-E), ethanoic acid (A306-IR, with 1758, 1360, 1018, 892, 629 and 607 added and 620 removed), propanone (A319-IR, with 3414, 1749, 1434 and 903 added), propan-1-amine (816 and 905), propan-1-ol (1099 and 1017), propan-2-ol (1311, and one principal 1379 trough) and ethyl ethanoate (3465, with corrected depths). The narrated and carded values all sit within 15 cm⁻¹ of the measured centres: 3340/3346, 1050/1049, 1715/1714, 1715/1715, 1060/1055, 1130/1129, 2980/2989, 1740/1744, 1240/1243 and 1050/1048. The three NIST records are unchanged. No value is invented. Where the record gives only a graphical minimum (the acid O–H envelope near 3070), the design gives no depth.
- **c11a:** All twelve shift sets match the report to two decimals. Every count (2, 3, 2, 4, 3, 4, 2, 4, 4, 3, 3, 3) is confirmed. No shift crosses a data sheet range boundary.
- **c11b:** Ethanol 3.70, 2.60 and 1.23; bromoethane 3.42 and 1.70; ethyl ethanoate 4.12, 2.04 and 1.26; methyl propanoate 3.67, 2.35 and 1.15; pentan-3-one 2.42 and 1.05. All match the report. Drawn and printed values are within 0.05 ppm. The A2 card prints 2.44, which is 0.02 from 2.42 and inside the 0.1 limit. The A2 rival counts (4, 5 and 3) are confirmed.
- **c12:** These all match the report. Butanone IR, with 3416, 2964, 2909, 1454, 1417 and 946 added. Butanone ¹³C and ¹H (H3330, H1387). Butanal (N80129748). 2-methylpropanal (H4267). But-3-en-2-ol (A1211-IR). Ethanoic acid IR and ¹H (A306-IR, A306-H). Methyl methanoate IR (A1208-IR, with 3569, 3442, 1434, 911 and 768 added) and ¹H (IM19). 2-chloropropane (ASV-UIA). 1-chloropropane ¹H (N10023951). Ethyl propanoate IR (2945 corrected to 2927, 1346 added), ¹H (H4423) and ¹³C (H4541). The pentanoic acid, methyl butanoate and propyl ethanoate ¹H records also match.
- **Report finding 4 (c12 butanone, "nothing between 3230 and 3550"):** I checked this against the narration. Scene 4 says "There's no broad band between thirty-two thirty and thirty-five fifty", and `git diff` confirms that sentence was not changed today. The report quoted the old Numbers to verify line, not the narration. The spoken claim is true against MEK-IR, because 3416 is weak (79 %T) and narrow. No narration fix is needed.
- **Open items are truly not voiced.** c12's 1-chloropropane ¹³C appears only as the count tag "3", which follows from its structure; no shift is drawn, printed or spoken. c12's pentanoic acid IR has no trace on the A2 card. Its exclusion rests on the printed "no broad absorption" and the general acid O–H property. c11b's A2 rival multiplet labels are not shown or spoken.
- **Two items are drawn but still need a build-stage source.** The c10 acid envelope and propanone trace, and the c12 acid, methyl methanoate and butanone mini traces, are drawn from measured graphs that have not yet been digitised (A306-IR, A319-IR, A1208-IR, MEK-IR). These are **build gates**: they must be digitised before those scenes are rendered. They are not voice gates, because no spoken value depends on trace shape.
- **One open item is spoken, and it is acceptable.** c11b A2 speaks "a triplet at 1.05 ppm with relative area 3, and a quartet at 2.44 ppm with relative area 2" for pentan-3-one, but no full pattern or integration plot was inspected. The design says no voiced value depends on that plot, which slightly overstates it. The claim is still safe on three grounds. N31273 assigns 4 H at 2.42 and 6 H at 1.05. Areas follow hydrogen counts by definition. The same CH₃CH₂C=O fragment in butanone's measured 500 MHz line list (H1387) is a quartet at 2.46 and a triplet at 1.06. This is not a blocker.

### 2. Narration

`m8_check.py` (scratchpad) parses each design with the build parser rules: `### N.` headings, "> " lines joined with a space, and bold markers removed. It compares the result with `lesson.json` `voiceover.text` and the manifest `text`, scene by scene. All 89 scenes match exactly, and the scene ids match the Build ids lists. In each manifest:
- `lessonSha256` equals the `lesson.json` file.
- `recordingBrief.sha256` equals the brief file.
- Every `textSha256` is the SHA-256 of its text, and every 12-character `hash` appears in its audio path.
- `request-options.json` equals `requestOptions` (stability 0.35, similarity 0.75).
- The voice is Simon, Australian male, `eleven_v4`.
- No audio exists yet except the reused key-notes take.

### 3. c10 scene 11

New text: "Propan-1-ol and propan-2-ol have the same kinds of bond, so they show the same bands above fifteen hundred, but their fingerprints differ."

- **Correct against the measured traces.** Above 1500, both have one broad O–H (3333 and 3353) and the same three C–H bands (2960/2970, 2932/2928, 2875/2883). Neither has a band between 1500 and 2800. The C–H depths differ (propan-1-ol about 10 %T; propan-2-ol 2928 and 2883 about 41 %T), so "look alike" was too strong and "show the same bands" is accurate. Below 1500 the patterns clearly differ, for example 1099, 1055, 1017 and 968 against 1311, 1161, 1129 and 953.
- **Reads naturally.** The cause and effect runs in order: same bonds, so same bands, but different fingerprints. The repeated "same" helps the contrast and does not sound stacked. It is one 426-character scene with no short-sentence pacing tricks.
- **Cues still match the visual.** The brief's `narrationCue` is "fifteen hundred / same bands / fingerprints differ / match / hundred", and every cue word appears in order in the narration. The visual tag is "same bands", not "identical". The amber rings at about 1055 and about 1129 are, correctly, the strongest dips inside 1000 to 1300 (1055 at 9 %T; 1129 at 20 %T, deeper than 1161 at 23 %T). Propan-2-ol's deeper 953 is correctly left out because it lies outside the C–O range.

### 4. Reading load (new chips)

Neither scene breaks the three-bright-item rule, because the new chips are grey. Both scenes do pack several labels into a narrow part of the trace (3230 to 3550 is about 9% of the axis width). These are screen-only fixes for the build, and they need no narration change. Check them at playback speed.

- **c10 scene 9:** at "no O H band" there are a red C=O marker, two "no broad O–H" chips on adjacent shades and the grey 3414 chip, all within about 1,050 cm⁻¹ of axis. Recommended wording to replace the "no O H band" clause in the scene 9 Visual and the brief's `motionPurpose` and `onScreenChange`: *on "no O H band" the 3230 to 3550 and 2500 to 3000 regions shade, and one chip "no broad O–H" sits above both shades with a thin bracket spanning them; the 3414 dip gets a small grey chip "weak, narrow: not an O–H band" below the trace on a short leader line, and it fades on "kind".*
- **c12 scene 4:** at "what's missing" there are three chips on the one 3230 to 3550 shade: "no broad band: no O–H", the grey "c10" recall chip and the grey 3416 chip. The candidate strip, ledger and data sheet card are also on screen. Recommended wording: *On "what's missing" the range 3230 to 3550 shades with the chip "no broad band: no O–H"; the weak 3416 dip gets a small grey chip "weak, narrow: not an O–H band" below the trace on a short leader line, and it fades on "but-3-en-2-ol". The grey recall chip "c10: a missing band rules a group out" writes in the "IR" ledger row instead of on the trace.*
- **Optional, c10 scene 8 (consistency only):** the measured acid envelope's lowest region is near 3070, above the marker span of 2500 to 3000. To match c12 scene 10, keep the violet shade following the recorded envelope and add the thin bracket "data sheet: 2500 to 3000". The narration needs no change, because "sits lower" (than the alcohol's 3340) stays true.

(The quoted chip text uses the en dash only as bond notation in "O–H", as the designs and site do. It is not punctuation.)

### 5. c11a's judgement call

**Accepted. Measured peak lists satisfy the data gate for this lesson.** The c11a NmrSpectrum draws only single lines at stated positions, with heights deliberately not proportional (scene 8, author note d), and nothing in the learner copy relies on height or line shape. What gets drawn or spoken is therefore the line positions and counts, which experimental peak lists supply directly. Each list has a named record, ID and CDCl₃ solvent: HMDB experimental spectra, G97 Table 2 (a measured literature table, honestly labelled as a paper) and nmrshiftdb2 N10014251. Ethanol (G97 and H3257) and ethyl ethanoate (H2938 and N10014155) have independent second records, and they agree within 0.5 ppm. Every count matches the structural count, with solvent and TMS excluded.

Doc tidy, not a blocker: the "Build gate" sentence in c11a Numbers to verify (line 207) and the matching one in c11b (line 197) still read as future gates ("no coded spectrum is drawn ... until"). Root may mark them as met under this ruling.

### 6. Clean copy

- **Dashes:** narration in all five lessons is plain ASCII, with no em dash (U+2014) and no en dash (U+2013). Every en dash in the lesson.json files and briefs is chemical bond notation (O–H, C–O, C=O, "ethyl–C=O bonds"). None is used as punctuation.
- **Spelling:** no American spellings in narration (centimetres, recognise and so on). Each lesson has exactly two "Pause here to answer." prompts, and both response scenes carry the countdown tool in the brief.
- **TTS reading:** the only short sentences are natural turn markers ("Your turn.", "Last one.", "Not here.") and answer openers ("It's pentan-3-one.", "That's butanone."). None is a stacked single-word pacing trick.
- **Brief feedback and question demands:** feedback stays answer, reason and one crossed mistake, about 24 to 31 s each. Every attempt card keeps the full worded question, and any spectrum or data sheet it needs, on screen through the countdown. Revision 4 did not change these.

### 7. Character counts

Script counts match the designs and the task exactly: c09 6,155; c10 6,321; c11a 5,740; c11b 5,618; c12 5,605. The per-scene counts also match each design's Narration length estimate. c10's 6,321 is about 569 s, still under the 570 s ceiling. Its named reserve trim is unchanged (scene 4's "So a C equals O double bond sits near seventeen hundred, above a C O single bond.").

### 8. Brief check

`brief_emulate.py` (scratchpad) is a Python port of `checkProductionBrief` at `--stage=recording`. It reports **no blockers** for any of the five briefs:
- schema 4; source hash current
- research references and progression plan exist; every progression and teaching decision is filled
- one row per scene; visual decisions are valid
- no prohibition-start or repeated (boilerplate) `motionPurpose`
- renderer `src/explainer/ExplainerVideo.tsx` (not a prototype); `motionRole` and tools present; countdown on both attempts
- script and learning reviews pass, and their evidence hashes are current

The only pending items are the export-stage ones: exact voiced preview, its learning review and human listening.

**Root should re-run `scripts/check-production-brief.mjs`.** These five briefs were built today, and no node checker run is on record for them. My emulation is not the checker of record. After the current render finishes, run this once per brief, before the TTS request:
`node scripts/check-production-brief.mjs docs/production/claude-pm/lessons/m8cXX/lesson.production-brief.json --stage=recording`
(XX = 09, 10, 11a, 11b, 12)

If any build note above is applied to a brief, re-run it after the edit and update `recordingBrief.sha256` in that lesson's voice manifest. Screen-only brief edits do not change `lesson.json` or any narration hash.

## Per-lesson verdicts

| Lesson | Verdict | Fix before voicing |
|---|---|---|
| chem-m8-c09 | **Voice now** (after root's node recording check) | None |
| chem-m8-c10 | **Voice now** (after root's node recording check) | None. Scene 9 chip layout (check 4) and optional scene 8 bracket are build-stage screen fixes |
| chem-m8-c11a | **Voice now** (after root's node recording check) | None. Gate ruling accepted |
| chem-m8-c11b | **Voice now** (after root's node recording check) | None |
| chem-m8-c12 | **Voice now** (after root's node recording check) | None. Scene 4 chip layout (check 4) is a build-stage screen fix |

## Build gates carried forward (not voice gates)

1. Digitise the A306-IR, A319-IR, A1208-IR and MEK-IR graphs into the band and point files before rendering c10 scenes 8, 9 and 14 and c12 scenes 4 and 10. Copy the five calibrated c10 point CSVs from `work/brief246/` into `assets/`.
2. Apply the c10 scene 9 and c12 scene 4 chip layout, then judge it at playback speed in the exact voiced preview.
3. Exact voiced preview, its student learning review and human listening, all at export stage.
4. Doc tidy for root (no effect on voicing). c09 "Open decisions" still says bromomethane "needs its NIST record before drawing", and Numbers to verify line 199 says "SDBS accession cross-checks are still pending". Both are superseded by the Status line. Also tidy the c11a and c11b "Build gate" sentences (check 5).

## Method and evidence

- **Scripts (scratchpad, read-only):** `m8_check.py` covers the narration diff, hashes, counts, punctuation and spelling. `brief_emulate.py` emulates the recording-stage brief check. Both ran with `python -I`. Node and Remotion were not run, because a render is in progress on this 8 GB machine.
- **Sources read in full:** `chem-m8-c10-c12-measured-spectra.md`; the c10 and c11a designs; the c11b and c12 Decisions, Script, Numbers used and Numbers to verify sections; the c09 Status diff; `scripts/lib/production-brief.mjs` lines 1 to 151.
- The checker confirms that the required decisions and evidence exist. It does not judge motion quality. That still needs the exact voiced preview at playback speed.
