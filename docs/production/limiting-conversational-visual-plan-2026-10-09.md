# Limiting reagents: conversational visual plan, 9 October 2026

Read-only planning review of the 695-word script, full draft lesson and
preparer in `out/prototypes/limiting-conversational-2026-10-09/` and
`scripts/prepare-limiting-conversational-revision.mjs`. The user endorses the
script direction and has authorised completing the visual pass and full
lesson. This review did not listen to recordings, play motion or edit code,
audio, lesson data or configurations.

Apply [AGENTS.md](../../AGENTS.md), the
[visual handbook](../visual-design-handbook.md),
[animation planning](../animation-planning.md) and
[preview-first workflow](preview-first-review.md). Preserve useful existing
art and layouts. Motion should expose the recipe, comparison or subtraction;
reading and thinking holds remain valid. The aim is clearer teaching, not a
quota of animations or visual treatments.

## Timing status

There are eight scene IDs and ten speech segments. Three segments are
recorded: `concept`, `formula` and `summary`. The remaining **seven segments
belong to five scenes**, since the hook and quick check each contain two
segments. At this review, their MP3s were absent.

`lesson.json` and `remotion-preview-props.json` contain the complete draft
with estimates at 150 words per minute. They are not final audio timing.
`pilot.lesson.json` contains only the three recorded scenes and resolved cues.
Do not copy the draft's estimated frame positions over those measured cues.

| Recorded scene | Current measured evidence, local frames at 30 fps | Keep for full lesson |
| --- | --- | --- |
| Concept | Speech ends at 1126; diagram delay 30, runStart 319; start-count bullet frame 296, final-count bullet 488; callout 797 | Reuse the reaction model and aligned reveals. Preserve ten H2/four O2 initially, eight H2O/two H2 finally, and explicit model limits. |
| Formula | Speech ends at 1217; diagram steps 23/650/938 relative to delay 30; result bullet frame 968; callout 1018 | Reuse capacity transformation and original-state reference. The neutral body preserves the reversal until the result. |
| Summary | Speech ends at 814; takeaways 231/380/477; decision card 614 | Reuse the shorter heading and three-row recap. Keep the decision question and avoid headline/row overlap. |

The existing recorded teaching pilot is 79.1 seconds and the separate recap
is about 28.43 seconds according to their render frame ranges. Their file
presence and render records do not constitute listening or motion approval
from this reviewer. The coordinating agent records the user's review separately.

The coordinator has selected focused opt-ins: a native `recipeCount` hook,
outlines around remaining hydrogen, hand-drawn capacity emphasis, and a compact
worked board whose final row contains both requested results. Source/preparer
support is being implemented. The inspected full `lesson.json` still held the
earlier presentation at the time of this review; finalisation applies these
choices. Verify the bound full lesson props before playback or export. Narration
is unchanged, so the three existing recordings can remain.

## Remaining segment plan

| Segment and learning beat | Reuse or adjust | Meaningful reveal, reference and hold | Cue and review status |
| --- | --- | --- | --- |
| Hook prompt: more buns cannot solve the patty shortage | Selected adjustment: native `recipeCount` using coded bun/patty shapes and counts, preserving the existing hook shell. | Establish five buns, four patties and one of each per burger. Show four completed pairs as the speech gives the answer. Extra buns can arrive while the patty count stays zero, explaining why output does not change. Keep essential counts fixed after landing. | "That's four burgers" and "Buying another hundred buns". Estimated only. This is a rhetorical opening, not a protected learner prediction. No generic atom or unrelated laboratory image. |
| Hook answer: name the limiting ingredient and connect to the equation | Keep the same hook scene, without a new decorative transition between its segments. | Emphasise patties as the limit, retain the leftover bun, then introduce the balanced equation as the recipe. The callout may already appear with the rhetorical answer; there is no planned answer-free gap here. | "The ingredient that runs out" and "The balanced equation". Estimated only; align after recording. |
| Title: orient the learner to output and leftovers | Reuse `TitleSlide` and the neutral subject chrome. | Short, stable topic reveal, then continue into the reaction model. No extra syllabus stinger or animation showcase is needed. | Full title segment. Estimated only. Check the two-word title and subtitle fit in the actual composition. |
| Worked example: apply capacity, calculate yield, subtract reacted excess | Selected adjustment: `WorkedExampleSlide`'s copyable board with opt-in compact spacing and both final results in its last row. | Keep masses, equation and molar masses visible. Reveal moles, capacity comparison, one-to-one Na/NaCl ratio, chlorine consumption, then subtraction. A compact starting/reacted/left chlorine strip can make subtraction visible; retain the algebra as the authoritative working. Finish with both requested results, 25.4 g NaCl and 4.58 g Cl2 left. | Existing estimated step cues: "we get about", "Same comparison", "a theoretical yield", "so only about", "What's left". Final measured cues pending. Five-row board and combined final line still need native-size and phone review. |
| Misconception: raw moles mislead; maximum yield is conditional | Reuse the mistake/fix board. Keep the explicit false claim, not a question crossed out as a mistake. | Contrast the raw-mole shortcut with coefficient-based capacity. At the theoretical-yield explanation, show the maximum as a ceiling rather than fabricating an actual experimental yield. Hold the corrected rule. | "There were fewer moles", "theoretical yield is a ceiling", "Actual yield can be lower". Estimated only. The completion assumption correctly names consumption of the limiting reagent. |
| Quick-check prompt: choose the limiting reactant from new masses | Reuse `QuickCheckSlide` and the supplied-value board. | Keep 4.00 g H2, 16.0 g O2, the equation and both molar masses visible. No capacities, role tag, hinting colour or answer before the end of the response interval. Keep the problem visible through feedback. | Prompt/answer are separate recordings with a planned two-second silence and optional longer pause. Draft frames 600 to 660 are estimates, not measured evidence. |
| Quick-check answer: compare capacity rather than mass | Reuse the existing three answer rows. | Reveal H2 capacity, O2 capacity, then the comparison and oxygen verdict. Show the mass-to-moles and coefficient operations distinctly. A new diorama is unnecessary if the board is legible. | "Hydrogen gives about", "Oxygen gives about", "So oxygen runs out first". Align after full assembly. Check the first visible and audible answer against the measured hold end. |

## Existing prototype opportunities

[DesignDirections](../../src/prototypes/DesignDirections.tsx) already
demonstrates the relevant operation with a retained original outline and
bar geometry calculated before display rounding. Its hand-drawn treatment
is useful vocabulary for a comparison or subtraction emphasis, not a reason
to swap every scene. The painted laboratory backdrop adds little to a burger
analogy or numeric board and must not suggest an experiment this lesson did
not conduct. Reuse the current `ReactionRunDiagram`, capacity diorama and
worked/quiz boards wherever they already explain the relationship.

The highest-value adjustments are pairing ingredients in the opening,
making the one-to-one product ratio visible, and showing starting minus
reacted chlorine. Each changes what a learner can infer. An idle atom,
celebration, extra camera move or unrelated diorama would not solve those tasks.
The selected leftover outlines and hand-drawn capacity emphasis should draw
attention at the named cues, then settle. Keep the counting model's molecules
and the capacity chart's abstract amounts distinct.

## Science, precision and scope findings

- No remaining factual blocker was found in the script. Independent
  calculation gives 0.4349717268 mol Na and 0.2820874471 mol Cl2; sodium
  capacity is 0.2174858634. Yield is 25.4197477164 g NaCl, reported as 25.4 g;
  chlorine remaining is 4.5802522836 g, reported as 4.58 g. Quiz capacities
  are 0.9920634921 and 0.5000312520, so oxygen limits.
- Keep the supplied value set: Na 22.99, Cl2 70.90 and NaCl 58.44 g mol⁻¹;
  H2 2.016 and O2 31.998 g mol⁻¹. The earlier 70.91 inconsistency must not
  reappear. Capacity has an amount basis per equation coefficient; it is not
  a gram amount, literal volume of material or reaction speed.
- At first inspection the capacity diagram rounded ratios before using them for bar
  height and limiting selection. This selected example remains correct,
  but it differs from the prototype's unrounded geometry. Preserve numerical
  precision for geometry and comparison, rounding only labels when adjusting
  the diagram; the coordinator has assigned that change independently. Verify
  it in the final source and preview. Never derive final yield/leftover masses from 0.218 or treat
  the approximate 0.435/0.282 illustration as the exact mass-derived values.
- Full source metadata remains 2017, with syllabus-neutral screen chrome.
  The displayed dot point is a paraphrase, not verified verbatim NESA text.
  The [continuity review](curriculum-continuity-2026-10-08.md) maps the shared
  limiting-reagent core to new content `ci04298531`; keep separate syllabus
  mapping and prerequisite order in the description/playlists. This video
  does not fulfil a requirement to conduct a practical investigation or
  cover an entire quantitative-chemistry course.
- The formula's neutral body prevents the previously identified early
  answer disclosure. Its remaining "smaller pile wins" heading is optional
  clarity polish; the recorded narration no longer uses the ambiguous
  "didn't lose" line. No speech change is required for a display-only heading
  adjustment. Check selected and exported copy for U+2014 before release.

## Review before the full export

Record and align the seven remaining segments, assemble the exact response
gap, and review the complete selected props in Remotion. Prioritise the hook,
five-row worked example, misconception change of meaning and prompt/answer
boundary. Inspect layout at native and phone size, then continuously play the
affected transitions and arithmetic reveals. Fix material findings, freeze
source, export, verify media/captions and watch the full MP4. Use unlisted user
review before public course placement. Keep source inspection, actual listening,
motion review and claimed learning benefit as separate forms of evidence.

## Final recorded binding review, 9 October 2026

This update supersedes the earlier recording-status and estimated timing notes
for the selected full revision. All ten raw speech segments now exist with
alignment and generation sidecars. The exact full source is
`out/prototypes/limiting-conversational-2026-10-09/narrated.lesson.json`.
Its SHA-256 at this review is
`2f1d6188296a492b05eb70c97c6d6f36bd45d6ac9abed580525ac43c91d41320`.
`remotion-full-props.json` contains a lesson object identical to that source.
The shared timeline resolves to **8423 frames at 30 fps, 280.7667 seconds**.
Any later source change requires rechecking this binding.

| Scene | Full-timeline start frame | Recorded local reveal evidence |
| --- | ---: | --- |
| Hook | 0 | Native recipe diagram bound; four-burger assembly cue 106, extra-bun question cue 228, answer callout 106. There is no forced response hold. |
| Title | 906 | Recorded speech window 0 to 152; scene duration 191. |
| Concept | 1073 | Reaction delay 30, runStart 319; leftover attention enabled at local diagram frame 527, after the reaction has stopped. Recorded speech ends at 1126. |
| Formula | 2214 | Hand-drawn attention bound; diagram steps 23/650/938 relative to delay 30; neutral body retained. Recorded speech ends at 1217. |
| Worked example | 3446 | Compact board bound; rows at 632/838/1215/1532/1673, coach note 1858. Subtraction rationale retained in row four; final row contains both 25.4 g yield and 4.58 g chlorine left. |
| Misconception | 5482 | Correction at 188, final yield qualification at 761. Recorded speech ends at 814. |
| Quick check | 6311 | Prompt ends at 560; exact response interval 560 to 620; first answer cue 620, next rows 851 and 1016. Recorded speech ends at 1244. |
| Summary | 7570 | Takeaway cues 231/380/477; decision question 614. Recorded speech ends at 814. |

All eight scenes pass the read-only `verifyAssembly` checks against their
assembled audio, alignment, captions, raw recording dependencies, voice/model
generation records and playback windows. This verifies version consistency,
not whether the supplied transcript matches what a listener actually hears.

The quiz's assembled waveform was independently inspected as 48 kHz mono
16-bit PCM. Samples 896000 through 991999, corresponding exactly to local
frames 560 to 620, contain **96000 zero samples**, with peak amplitude zero.
The assembly record places answer audio at frame 620. Answer-board opacity
remains zero before its measured boundary, and the first row's cue is also
620. Captions do not cross the protected interval under assembly verification.
This is evidence about the pre-export WAV and renderer timing; the final
encoded MP4 still needs its own playback/media check.

The recipe diagram takes precedence over the retained comparison data in
`HookSlide`, so the generic atom and duplicate cards are not selected. The
capacity diagram now uses `r.moles / r.coef` directly for geometry and limiting
selection, rounding only displayed labels. For its configured illustrative
amounts, sodium capacity is 0.2175 and the displayed label is 0.218; these
approximate starting amounts remain separate from the full mass-derived
worked calculation. The final worked board preserves
`left = initial − reacted` and both requested masses.

No source-level factual, binding or answer-leakage blocker was found in this
final read-only review. Selected lesson data contains no U+2014. Actual human
listening, continuous motion, phone readability, transition continuity and
final MP4 caption placement have **not** been assessed by this reviewer.
The coordinating agent should record those observations separately. No code,
audio, lesson data or configuration was changed by this review.
