# Molar mass: full lesson production review

## Status and recommendation

Visual direction accepted by the user. Complete one lesson with the existing
catalogue, painted context where it helps and hand-drawn marks for reasoning.
The source lesson has 11 scenes and 374.33 seconds of scene content. Its media
preflight passes with no errors or warnings. That establishes file readiness,
not scientific or editorial correctness.

A separate 11-scene revision is staged in
`src/prototypes/data/molar-mass-v2.json`. Estimated scene content: 329 seconds
(5 minutes 29 seconds). This excludes any later intro or transition choices.
The estimate is a planning allowance, not a measured narration duration.
The original lesson JSON, recordings and alignment are unchanged.
The draft contains narration text but no audio paths or timed captions.
Every revised scene needs fresh audio and alignment before production.

## Scientific and editorial findings

| Finding | Resolution in the staged draft |
| --- | --- |
| Carbon-12 is presented as the current reason for the mole definition | Explain the fixed Avogadro constant instead. Do not teach the historical definition as current. |
| Molar mass and relative atomic mass are described as exactly equal | Say the periodic-table value supplies the numerical molar mass of atoms in g mol⁻¹ for school calculations. Relative atomic mass is dimensionless. |
| H and O could be interpreted as their molecular gases | Name hydrogen atoms and oxygen atoms explicitly. Molecular H₂ and O₂ need two atoms per molecule. |
| Compound answer 234.05 does not follow from the displayed values | With Ca 40.08, H 1.008, P 30.97 and O 15.999: 40.08 + 4.032 + 61.94 + 127.992 = 234.044, rounded to 234.04 g mol⁻¹. |
| Spoken oxygen 15.99 differs from written 15.999, and its multiplication is inconsistent | Keep a single supplied-value set. State the direct atom contributions, retaining guard digits. |
| Claimed bracket-error answer 134 is wrong for these values | Remove the invented wrong answer. Omitting the outer multiplier actually gives 137.062 g mol⁻¹ before rounding. |
| Claims about half the class, most expensive errors and losing full marks are unsupported | Remove those claims. Explain the mathematical error directly. |
| Unit cancellation is called proof that the setup is correct | Describe it as a necessary consistency check. Correct units alone cannot establish correct values or reasoning. |
| Bridge idea repeats across hook, marginalia, definition and lab context | Remove the dedicated marginalia scene; shorten the hook and definition. Keep the illustration available for other lessons. |
| Formula has no simple forward conversion before a complex compound calculation | Add the accepted carbon example: 2.00 × 12.01 = 24.02 g, reported as 24.0 g to 3 significant figures. |
| Quick check invites a pause while the continuous recording proceeds to the solution | Record prompt and solution separately, inserting five seconds of silence. Allow viewers to pause longer. |
| Lab illustration can look like measured data | Label it schematic, assume a tared container and use a coded unit label rather than its baked-in number. |

Reference basis:

- [BIPM current mole definition](https://www.bipm.org/en/si-base-units/mole):
  one mole contains exactly 6.02214076 × 10²³ specified elementary entities.
- [BIPM 2018 SI resolution](https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1):
  the previous mole definition was superseded; carbon-12 molar mass is now
  experimentally determined rather than an exact defining constant.
- [CIAAW abridged atomic weights](https://ciaaw.org/abridged-atomic-weights.htm):
  reference values and their uncertainties. School questions may supply
  differently rounded values. This draft explicitly supplies its calculation
  values and uses those consistently, rather than changing a table mid-example.

Molar mass can vary with isotopic composition. The lesson treats the supplied
composition and periodic-table values as fixed during each calculation.
It does not need a lengthy metrology digression to teach this correctly.

## Full scene and animation plan

| Scene | Allowance | Learning purpose and assets | Reveal, hold and exit |
| --- | --- | --- | --- |
| Title | 5 s | Keep the existing title treatment | Short identification; avoid a second long branded opener |
| Hook | 20 s | Same particle count can have different mass; retain existing hook artwork | Compare once, then state the need for mass per mole |
| Concept | 38 s | Correct definition; existing molar-mass diorama and accepted painted plate | Load H, C, O sequentially; label atoms; hold the comparison. Place precise definition in stable coded text |
| Units | 18 s | M is mass per mole; m is sample mass | Keep large g mol⁻¹ and the two meanings visible; use one purposeful underline |
| Lab context | 20 s | Sample measurement; existing balance raster | Tare, sample, grams, conversion. Use the pilot's readout mask and schematic label |
| Formula | 36 s | m = n × M and its consistency check | Reuse V2 large definition cards and cancellation. Use new audio cues; hold grams after cancellation |
| Carbon mass example | 30 s | Apply the formula to a simple forward conversion | Given values, formula, substitution, unit cancellation, final rounding; preserve full working |
| Bracket example | 57 s | Calculate compound M by counting atoms first | Expand outer 2 to H₄, P₂, O₈ together; reveal contributions; sum without intermediate rounding; hold 234.04 g mol⁻¹ |
| Misconceptions | 30 s | Check the quantity and each subscript | Reuse misconception treatment with concise corrected copy. Do not repeat the entire worked calculation |
| Chlorine quick check | 47 s | Calculate molecular M, then convert mass to amount | Prompt recording, five-second silent hold, solution recording. Keep solution hidden throughout the hold; then show M, rearrangement, substitution, rounding and unit check |
| Summary | 28 s | Recall definitions and operations | Reuse summary treatment; retain formula, atom-count and unit checks. Stable items rather than decorative motion |

All allowances and preview cues are estimates. Resolve final visual cues from
the chosen recording's word alignment. The silent previews test layout and
sequence; they do not establish narrated pacing or voice quality.

For the chlorine prompt, split the narration after the invitation to pause.
The solution recording starts with “Chlorine gas has two atoms per molecule”.
Use distinct audio assets or a supported segmented playback plan. A single
continuous narration file with a nominal pause graphic is insufficient.
Do not export captions until the inserted gap and both recordings are aligned.

## Reuse and specific visual adjustments

Retain the existing title, hook artwork, balance artwork, molar-mass diorama,
formula shell, misconception and summary vocabulary. Preserve the bridge and
units artwork even where a large coded formula serves this lesson better.
The pilot showed that small raster labels and crowded calculation steps need
targeted changes. Large coded values are mandatory for the calculation beats.
Do not apply these prototype layouts wholesale across the lesson catalogue.

The three rendered calculation previews use the accepted carbon calculation,
a new sparse four-column bracket board and a large chlorine prompt/answer
board. The bracket board shows contributions in g mol⁻¹, not sample masses.
These are lesson-specific proofs of the difficult beats, not new universal
slide templates. The remaining scene plan is not a claim that every production
layout has already been rendered and approved.

## Curriculum scope

The video teaches molar-mass calculation and conversion. The balance image
provides context, but does not constitute conducting a practical investigation
or deriving an unknown molar mass from experimental measurements. Keep the
practical syllabus point as a module-level teaching requirement; provide a
separate practical activity rather than claiming this video fulfils it alone.
Existing syllabus metadata is retained from the source, not revalidated here.

## Before the full narrated export

1. Compare and choose the voice with the user. No speech is generated by these
   preparation and visual-render scripts.
2. Generate revision audio, with the chlorine prompt and answer separated.
   Build alignment and captions from those exact recordings.
3. Promote the draft into production only with its new audio and alignment.
   Replace estimated durations and reveal delays with measured timing.
4. Render remaining scenes for phone inspection, then the complete lesson.
   Check reading holds, caption space and audio loudness in the export.
5. Run preflight and a complete watch-through before publishing. Batch work
   follows completion and review of this first full lesson.

## Reproduce

`node scripts/prepare-molar-mass-revision.mjs` stages the unvoiced draft and
records the original source hash. `node scripts/render-molar-mass-revision.mjs`
renders three short silent calculation tests, eight stills, the complete
narration draft and the review page. Add `--stills` to skip video rendering.
The source hash establishes the source version; it is not a scientific test.

## Completed verification

- Recomputed all three examples independently: carbon 24.0 g to 3 significant
  figures; compound 234.04 g mol⁻¹; chlorine 1.00 mol to 3 significant figures.
- TypeScript and the two preparation/render scripts pass their syntax checks.
- Three silent MP4s contain 480, 540 and 540 video frames, respectively, at
  30 fps and 1280 by 720. They have no audio stream.
- Reviewed calculation stills, bracket phone layout and chlorine playback
  before the solution reveal. Corrected a bracket-board overlap found in the
  first still and enlarged its numerical contributions.
- Revised copy contains no U+2014. No production lesson JSON or recording is
  changed, and the staged draft has no stale audio paths or timed captions.

Still pending: selected voice, full narrated timing, remaining scene renders,
caption collision review and the final complete watch-through.

## Prepared voice handoff

`node scripts/prepare-molar-mass-voice.mjs` now produces `voice-manifest.json`,
`voice-playback-plan.json` and `VOICE-REVIEW.md` in the full-review folder.
The manifest has 12 recording segments for 11 scenes. The quiz prompt and
answer are distinct files, with an explicit 150-frame gap in the playback
plan. Request validation passes for all four candidate models, and the
Multilingual v2 batch dry run passes. No speech is generated by this step.
The production renderer still needs to consume or assemble the playback plan
after actual recordings and alignment exist.

ElevenLabs access checked on 2026-10-02: Chrome is signed in. No local API
key or voice ID is configured. Australian English is required for the HSC
audience. Simon - Australian male is the first audition candidate, selected
from the Australian-filtered library for its warm, educated narration brief.
Brad and Hannah remain alternatives. Catalogue descriptions are a shortlist,
not evidence that a generated take maintains the accent or pronunciation.
The account shows v4 selected with 241.6k free credits before this audition
and a promotional countdown of 10 days 23 hours. Treat this as a capped
account offer, not a blanket promise that API generation is free.
One v4 generation produced two Simon takes using the unchanged revised
carbon example (388 characters). Raw MP3s and provenance are saved in
`out/prototypes/australian-voice-review/`. The UI allowance moved from
241.6k to 241.2k, a rounded display. Both files decode successfully. Accent,
delivery and pronunciation still need listening approval before the batch.
The earlier Roger audition is excluded because it does not meet the
Australian voice requirement. No production narration has been replaced.
The user requested short alternatives after hearing Simon. Brad - Australian
and Hannah - Natural Australian now each have two v4 takes in the same
review page. Both requests use the identical 89-character, two-sentence
chemistry passage. Four downloaded files decode and have distinct hashes.
The rounded free allowance moved from 241.2k to 241k. Download filenames
encode voice preset values that differ from the displayed settings panel;
both observations are retained in `alternatives.json`. These are practical
voice auditions, not a controlled model benchmark. A voice choice remains
pending before full lesson recording.
The user subsequently selected Simon as the clear preference. The choice is
saved in `src/prototypes/data/molar-mass-voice-selection.json` and included
in the recording manifest. Use v4 as the auditioned model for the next
pronunciation check. No individual Simon take was specified, and approval
of the narrator does not establish correctness of every generated recording.
The compound example remains the next pronunciation check before the batch.
The compound check has now been generated on v4 with Simon. One 864-character
request produced two takes, saved with exact script and provenance in the
voice review page. The free allowance display moved from 241k to 240.1k.
Both MP3s decode and have distinct hashes. Durations are 61.73 and 60.76
seconds, exceeding the provisional 57-second scene estimate. Resolve the
scene duration from the selected recording plus deliberate end holds.
Pronunciation and spoken number accuracy have not been verified by listening;
the browser controls do not provide reliable audio assessment to the agent.
Do not start the full recording batch until that check is completed. These
downloads have no character alignment, so final captions and reveal timing
remain pending. Existing production audio and lesson timing are unchanged.
Candidate availability must be checked in the account. The
[official model list](https://elevenlabs.io/docs/overview/models) includes
v4, v3, Multilingual v2 and Flash v2.5. Those provider descriptions do not
replace listening tests. The
[timestamped dialogue API](https://elevenlabs.io/docs/api-reference/text-to-dialogue/convert-with-timestamps)
recommends keeping requests within 2,000 characters for reliable generation;
all prepared segments pass the conservative request validator.
