# First continuity batch, 9 October 2026

The user watched the complete molar-mass draft and said it was good. They noted
that it had few animations or dioramas, then authorised the next batch and
rendering a few videos. This is general user feedback on that export, not a
claim that they performed five separate formal review scopes.

## Batch and teaching purpose

| Video | Current package | Motion purpose | Curriculum boundary |
| --- | --- | --- | --- |
| Molar mass | `out/prototypes/molar-mass-continuity-handoff/narrated-render-02/` | Stable calculations, causal mass comparison, protected response opportunities | Shared core explanation. Practical work remains separate. |
| Limiting reagents: yield and leftovers | `out/prototypes/continuity-batch-01/limiting-reagents/` | Reuse the particle-consumption diorama and graph. Divide capacity columns so the limiting reagent changes from the tempting guess. | Shared quantitative chemistry core. Model is explicitly schematic; theoretical yield assumes completion. |
| Enzyme models: lock and key vs induced fit | `out/prototypes/continuity-batch-01/enzyme-models/` | Reuse the active-site model. Show substrate approach, fixed versus flexible binding, the original-shape outline and side-by-side comparison. | Core model explanation. It does not replace required enzyme practicals or graph analysis. |

Course locations and outcomes remain outside the spoken introduction and title
cards. The original catalogue files and recordings are preserved. These are
isolated revisions with fresh Simon v4 recordings and exact aligned captions.

The [curriculum continuity report](curriculum-continuity-2026-10-08.md) supplies
the old/new evidence and content IDs. The new Biology syllabus explicitly
requires both enzyme models and separately specifies practical and graph work.
[NESA Biology content](https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c).

## Selected changes before recording

- Limiting reagents: replace the ambiguous toastie recipe with one bun and one
  patty per burger. Use the real balanced equation for the chemistry analogy.
- Use `M(Cl₂) = 70.90 g mol⁻¹` consistently with supplied Cl 35.45. Carry full
  precision: sodium yield 25.4197477 g becomes 25.4 g; chlorine remaining
  4.5802523 g becomes 4.58 g. The quick-check capacities are about 0.992 and
  0.500, a ratio near two rather than the old claim of nearly four.
- Keep one worked mass/yield/leftover example. The other example is omitted
  from this focused revision; the original remains available.
- Enzyme models: remove the universal claim that each enzyme has exactly one
  substrate or that a wrong shape cannot bind at all. Distinguish productive
  binding from inhibitor binding. State that shape and chemistry both matter.
- Explain induced fit through positioning and transition-state stabilisation.
  Bond strain is possible in some reactions, rather than the sole universal
  explanation. Suppress the existing diagram's universal bond-strain label in
  this selected treatment. This correction is consistent with mechanistic
  research on specificity and conformational changes.
  [Johnson, 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2546551/).
- Opening predictions and final checks use separately recorded prompts and
  answers, with four and five seconds of exact silent PCM respectively.
- Keep each prompt answer-free until its measured hold ends. Correct the
  misconception panels so the false statement is in the mistake panel and
  the true explanation is in the correction panel.

## Motion plans

| Scene and beat | Learner understanding | Reused visual | Recorded cue | Transformation and hold |
| --- | --- | --- | --- | --- |
| Limiting: reaction batches | Equation coefficients determine consumption and production | `ReactionRunDiagram` | Each reaction batch; after four batches | Consume 2 H₂ and 1 O₂ per event, make 2 H₂O. Stop at O₂ zero and hold the 2 H₂ leftovers. |
| Limiting: capacity comparison | Fewer moles alone does not identify the limit | `CoefficientDivideDiagram` | Columns start; divide each amount; sodium supports fewer batches | Show raw amounts, divide Na by 2 and Cl₂ by 1, retain the raw reference, then identify sodium. |
| Limiting: worked answer | Yield and excess use different relationships | Existing worked board | First convert; next divide; for the product; finally; subtract | Build the five calculation rows as the corresponding reasoning starts. Retain unrounded inputs and hold the final result. |
| Enzyme: rigid-site model | Complementary interactions form a complex | Existing enzyme diorama, lock-key mode | Active site; substrate approaches; fits; complex | Show the fixed site, approach and binding; show a poorly matched molecule failing to fit this schematic site. |
| Enzyme: flexible-site model | Binding can change conformation | Existing enzyme diorama, induced-fit mode | Suitable substrate binds; shape changes; dashed outline; complex | Move substrate into the site, adjust the site, preserve original outline and hold the complex. |
| Enzyme: comparison | Identify the same feature and the changed assumption | Existing enzyme comparison diorama | In both; difference; right-hand site adjusts | Hold left site fixed while right site adjusts; reveal concise same/different labels. |
| Both: response tasks | Commit to an answer before feedback | Existing hook and quick-check | End of measured prompt, then separate answer | Four-second opening and five-second final silent gaps, with no answer artwork or captions during the gap. |

A short narrated motion preview precedes each full export. Layout stills support
inspection, but motion previews and full playback remain necessary. These new
videos need user listening and viewing feedback before public posting.

## Completed preparation and active exports

Both new scripts have ten fresh Simon v4 recording segments. Measured assembly
and media preflight pass with zero errors and warnings. Limiting reagents has
9,411 frames (313.7 seconds); enzyme models has 8,448 frames (281.6 seconds).
Both retain four-second opening and five-second final response gaps.

The 88.7-second limiting and 84.533-second enzyme previews are rendered at
960 by 540 with captions. Both preview snapshots verify. Selected exported
states were inspected in Chrome, including divided capacities and the changed
active-site shape. This is not a claim that the complete new lessons received
human listening or release approval. The phone-size view shows that secondary
diagram labels are small; a final device review remains pending.

Visual revision v2 shortens the worked calculation rows and fixes the enzyme
misconception heading/note overlap. The exact recorded narration, alignment and
timeline remain unchanged. The descriptive transcript retains the fuller
calculation data. The revised lesson is `narrated.lesson-v2.json` in each package.

Full exports completed through the sequential `render-queue.mjs`. The queue
masters each export, verifies its snapshot, then updates `render-status.json`.
Both child renderers exited successfully and both release snapshots verify.
Limiting reagents measures -18.03 LUFS and -1.87 dBTP; enzyme models measures
-18.03 LUFS and -1.76 dBTP. These are technical checks, not user watch-throughs.
It marks a video ready only after the child renderer and verification succeed.
Failures stop the queue and remain visible. The review page reads that status
and links the full videos when ready:
http://127.0.0.1:8778/continuity-batch-01/.

All three videos have prepared upload titles/descriptions, caption paths and
1280 by 720 cover images. Molar mass remains the exact previously viewed MP4.
The new complete MP4s still need the user's watch-through before posting.

## Publishing

The user selected YouTube and supplied HSCScience, @HSCScience-u7i. The public
handle and Studio channel ID match. Studio contains one public Part A video
and an existing Part B draft. The existing empty Chemistry Module 2 playlist
was relabelled with its 2017 syllabus version and saved with manual sorting.
Part A membership is saved: Studio shows All changes saved, the playlist on
the video, and disabled Save/Undo controls.

The user enabled Chrome local-file access and all three uploads are complete.
Molar mass is [public](https://youtu.be/g9zmc5w7kQU), with captions and both
chemistry syllabus playlists. [Limiting reagents](https://youtu.be/sijXK98W_9w)
and [enzyme models](https://youtu.be/tXBotBaNakU) are unlisted review uploads,
with aligned captions and no public playlist membership. Studio verifies all
three visibility states and its copyright checks report no issues found.

Custom thumbnail upload is blocked by YouTube's channel phone-verification
requirement. Prepared covers remain local; generated video frames are in use.
External description links also await YouTube's one-off verification. No
account verification or permission change was performed.

The [YouTube publishing plan](youtube-publishing-plan-2026-10-09.md) records
prerequisite order, syllabus versions, current/new content IDs and SEO choices.
`out/prototypes/continuity-batch-01/youtube/` contains all three upload packages,
exact descriptions, aligned caption paths and covers. Titles, description
lengths, chapters and selected lesson/caption punctuation checks pass.
The exact hash-bound MP4s were used. The publication records contain the
actual Studio results. No new human listening or formal review was inferred
from successful upload, captions or copyright checks.

The batch preparation code is stored with the isolated package and included in
the new render snapshots. Shared render components and production tools are
unchanged, so the existing molar-mass snapshot remains verifiable.
