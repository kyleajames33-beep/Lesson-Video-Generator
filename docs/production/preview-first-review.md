# Preview first, then export

Production workflow agreed from user feedback on 9 October 2026: watch the
selected lesson in Remotion before a full export, use independent scoped
reviews, and prepare later lessons while the current lesson is being checked.
More reviewers do not guarantee quality. Findings need evidence, an owner and
a recorded resolution.

## Ordered workflow

1. **Read the brief and previous evidence.** Apply [AGENTS.md](../../AGENTS.md),
   the [visual handbook](../visual-design-handbook.md),
   [animation planning](../animation-planning.md) and
   [production memory](../production-memory.md). Confirm prerequisites,
   learning action, model limits and current/new curriculum scope against the
   [continuity review](curriculum-continuity-2026-10-08.md). Use the relevant
   [teaching template](teaching-templates.md), not one formula for every topic.
   Preserve usable layouts, artwork and motion.
   Complete the selected lesson's [teaching/visual brief](teaching-visual-brief-template.md).
   It binds the exact source, per-scene decisions and named review evidence.
2. **Review script and science before paid narration.** An independent reviewer
   checks facts, causal explanation, conversational delivery, misconceptions,
   the response task and claims of syllabus coverage. Scan selected copy for
   U+2014. Preview unfamiliar visual ideas cheaply before recording. Resolve
   material findings, then record the selected voice. Changing recorded words
   requires rebuilding the affected audio, alignment and captions.
   Run `scripts/check-production-brief.mjs brief.json --stage=recording` before
   generation. Draft scaffolding remains pending and does not imply approval.
3. **Play the exact selected lesson in Remotion.** Use the intended entry point,
   composition and lesson props, including final audio, measured holds and
   aligned reveals. Confirm the loaded revision, dimensions, fps and duration.
   The release entry's default props are a placeholder; opening it alone is
   not a lesson review. Play the opening, difficult mechanisms, transitions,
   response gaps and answer reveal, plus the summary. Scrubbing still frames
   checks layout; continuous playback checks the movement. Inspect desktop
   and phone-size layouts, stable labels and caption clearance.
4. **Review independently and make a short pilot.** Separate teaching/science,
   visual/timing and release/media reviews, each with a named scope and exact
   revision. Review the difficult 60 to 90 second teaching sequence with final
   narration. If live Studio is slow or stutters, use a short measured rendered
   pilot for reliable audio/motion timing before spending on a full export.
   Pilot dimensions and compression must be recorded; low-resolution preview
   softness is not evidence that the final export is blurry.
5. **Fix findings, then freeze the source.** Resolve factual errors, unrelated
   visuals, unreadable essential labels, answer leakage, caption collisions and
   broken causal timing. Record preferences and unresolved uncertainties
   separately. Recheck the affected beats. Freeze the selected lesson, audio,
   props, shared source and render config for the full export. A later change
   invalidates the affected review evidence and requires a fresh export.
   Run the brief's export-stage check against the exact voiced-preview input
   snapshot before the full render. Declare `teachingBriefPath` in the full
   render config; `scripts/render-release.mjs` enforces the export-stage check
   before bundling and freezes the brief with the export inputs. Short
   `frameRange` pilots remain available with pending review and exclude the
   mutable brief from their preview input snapshot. Human listening may remain explicitly
   pending during UI checks; the public release gate still needs its separate
   full-package listening review. Include `teachingBriefPath` in its gate config.
6. **Export and check the actual file.** Verify dependency snapshot, dimensions,
   frame count, audio/video duration, captions, response silence and loudness.
   Play the exported MP4 through the lesson, including transitions and ending.
   Technical checks support this review; they do not prove natural delivery,
   pronunciation, scientific clarity or phone readability.
7. **Use an unlisted review before public course placement.** Package accurate
   titles, descriptions, measured chapters, captions and curriculum mappings
   using the [YouTube plan](youtube-publishing-plan-2026-10-09.md). Keep the
   revision unlisted for user review before adding it to public course
   playlists. Preserve previous uploads and their evidence. Record the exact
   reviewed export and any remaining release limits.

## Useful parallel work

| Role | Independent output | Boundary |
| --- | --- | --- |
| Teaching and science reviewer | Script, factual/curriculum findings and source links | Review the selected version; do not rewrite active render inputs |
| Visual and timing reviewer | Scene/frame evidence, cue and response-gap findings | State whether evidence is static, live playback or a rendered clip |
| Production and next-lesson reviewer | Media/provenance checks; next lesson's scope, script and reuse plan | Prepare drafts separately; avoid shared source mutations during exports |

The coordinating agent resolves disagreements and owns edits, recording,
export and upload. Independent agents can work read-only on the same version
while the next lesson's plan and metadata are prepared. Avoid duplicate paid
generation and uncoordinated edits. The user authorised parallel checks in
this task; do not treat this as blanket permission to spawn agents in every
future task.

Each review records the lesson path/version or snapshot, reviewer, scope,
evidence, material findings and outcome. **Human listening** means someone
actually heard the selected recording in playback. Source inspection, UI
playback screenshots, timestamps and audio statistics must be labelled as
those checks, not as listening approval. The existing
[engagement evidence](engagement-implementation-status-2026-10-08.md) also
separates a polished review, viewer preference and demonstrated learning.
