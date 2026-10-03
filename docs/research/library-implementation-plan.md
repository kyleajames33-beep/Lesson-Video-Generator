# HSC science library implementation plan

Prepared 2 October 2026. Status: proposed execution plan, not authorisation for paid generation, publication or mass production. This plan applies the [research report](hsc-video-production-standard-2026-10-02.md) across the library. The [evidence matrix](evidence-matrix.md) remains the basis for instructional decisions; the [pilot protocol](pilot-protocol.md) specifies learner comparisons.

## Scope and intended outcome

The research concerns all videos, including Year 11 foundations and Year 12 application. Molar mass is the first controlled test of the production system, not the limit of the project. The target is a repeatable way to produce scientifically correct, understandable, accessible and engaging science lessons, with different structures for different teaching tasks.

The current inventory contains 308 lesson JSONs: 149 Chemistry and 159 Biology. No Physics lesson JSON was found in this checkout. These counts are content inventory, not counts of completed or approved videos. Existing Physics components require scientific review before use. Physics content acquisition or authoring is a distinct workstream; its volume and cost cannot yet be estimated.

Apply reusable standards and tooling across the system, then review and migrate lessons in controlled batches. Preserve usable lessons, artwork, layouts and animation. Do not rewrite every script, regenerate every recording or impose one visual treatment merely to make the catalogue uniform. Every changed spoken passage requires new audio, alignment and captions.

Completion means the catalogue has verified curriculum mappings and explicit review status, the shared production system supports the approved teaching approaches, representative lessons pass review and learner checks, and each promoted lesson has a reproducible release package. An audit, attractive preview or generated MP4 alone does not meet that definition.

## Responsibilities and working boundaries

| Responsibility | Owner | Output |
| --- | --- | --- |
| Implementation, planning, source audit, draft scripts and automation | Primary coding agent | Small reviewable changes, verification records and updated task status |
| Curriculum, science, practical inference and assessment interpretation | Subject teacher/reviewer | Explicit approval or corrections against source requirements |
| Visual judgement and playback review | Agent prepares; human reviewer assesses actual exports | Reuse decisions, device findings, motion and caption review |
| Voice selection and media listening | User or designated listening reviewer | Selected takes and recorded pronunciation/delivery findings |
| Recruitment and consent | Named pilot organiser | Approved recruitment route, consent basis and protected learner data |
| Budget, paid media and publication | User/project owner | Concrete production or release decision with cost and review package |

One agent should own the implementation initially. An independent agent can later check arithmetic, test fairness or a code change if explicitly delegated. Agent review complements rather than replaces teacher judgement, actual listening or learner testing. No delegation is necessary to write or begin the reversible planning work.

The current task is to produce this total plan. Execution starts with Phase 1 after this planning step. Existing research boundaries continue: no paid generation, publishing or batch production during planning. Decisions below are stage boundaries, not permission prompts for every reversible edit.

## Dependency and rollout sequence

1. Establish catalogue status, curriculum priorities and a risk register.
2. Prepare reusable teaching structures and the first scientifically corrected pilot package.
3. Repair the shared timeline, captions and dependency tracking needed by that package.
4. Test instructional wording; then test voice delivery separately.
5. Verify transfer to mechanisms, investigations and Physics where material is available.
6. Complete and review representative full lessons.
7. Produce a monitored small batch and measure real effort, defects and learner outcomes.
8. Expand through subject/cohort batches, retaining per-lesson review and rollback.

Catalogue mapping can continue while the first pilot is prepared. Script and scene planning can proceed together after the objective is fixed. Recording depends on approved script and generation scope; final cues depend on selected audio; publication depends on complete release checks. Neither learner recruitment nor Physics availability should prevent independent Chemistry/Biology audit work.

## Phase 1: catalogue baseline and priorities

**Purpose:** know what exists, what can be reused and where errors or curriculum changes matter first.

| ID | Work | Acceptance evidence |
| --- | --- | --- |
| L1 | Create a read-only inventory of all lesson JSONs and associated media, distinguishing draft, recorded, rendered, reviewed and released status | Every lesson has an ID and factual status; unknown status is explicit rather than inferred from file presence |
| L2 | Record subject, Year 11/12, syllabus edition/cohort, source content point, task type and prerequisites | Cohort transitions are visible; source mapping is marked verified or pending |
| L3 | Run broad diagnostic searches for scientific/notation inconsistencies, unsupported claims, punctuation, stale media dependencies and missing resources | Findings reference files/scenes and risk; automated flags are not presented as validated errors |
| L4 | Establish a correction register with severity, scope, owner, dependency and resolution evidence | Known molar-mass, limiting-reagent, enzyme, DNA and Physics-component findings are entered; affected release status is explicit |
| L5 | Inventory reusable boards, diagrams, dioramas and artwork with provenance and limitations | Reuse/adjust/missing choices can be made without rediscovering assets for each lesson |

Start curriculum verification with the lessons selected for production and Biology/Physics transition requirements. Complete remaining mappings in batches before those lessons advance. Biology and Physics begin new Year 11 teaching in 2027, Chemistry in 2028, as sourced in the report. Do not relabel legacy content using new outcome codes without verifying scope. Viewing a practical demonstration does not fulfil requirements to conduct investigations or fieldwork.

Priority order: critical scientific errors in any released material if such material is identified; selected pilot defects; cohort mapping; repeated production failures; remaining content improvement. Do not silently edit already recorded narration while triaging.

**Deliverables:** catalogue manifest, risk/correction register and asset index. Suggested future destinations: `docs/production/catalogue-status.json`, `docs/production/correction-register.md` and `docs/production/asset-index.json`. These are proposed new files, not files already created.

**Initial allowance:** 6 to 12 hours for inventory tooling and first triage, plus 4 to 8 hours for selected curriculum/science review. Full manual validation of 308 lessons is additional and should be estimated from measured batches.

## Phase 2: task-specific teaching and editorial standard

**Purpose:** turn research into usable authoring decisions for every teaching task.

Create brief templates for concept/contrast, calculation/procedure, ratio reasoning, causal mechanism, investigation preparation, evidence interpretation and revision/exam application. Each contains an objective, prerequisite, misconception, opening decision, explanation, response opportunity, feedback and unseen check. Scene count, duration and style are determined by the task.

Create a script checklist covering causal links, spoken versus displayed notation, number precision, unsupported marking claims, conversational Australian language, accessibility descriptions and exact hold instructions. Distinguish narration from production notes. Treat pacing ranges as starting hypotheses, not compliance targets.

Build a bounded visual/motion selection guide from existing components: stable board, worked transformation, comparison, causal path, progressive reveal, original-state reference and prompt/answer hold. Keep labels and caption space consistent across editorial, hand-drawn and painted treatments. Include scientific constraints throughout motion, not only a final-frame checklist.

Resolve conflicts in standing guidance explicitly after the pilot, including concise teaching text versus faithful captions and source typography versus actual phone legibility. Do not silently declare a proposal to supersede existing project instructions.

**First package:** corrected molar-mass variants, scene plan and scoring forms from the pilot protocol. **Further exemplars:** limiting reagents, DNA replication, enzyme practical/graphs and a proposed circuit lesson. Physics remains a proposed example until curriculum and lesson material are supplied or separately authored.

**Acceptance:** a reviewer can plan each task without copying the molar-mass scene sequence; every exemplar has observable learner evidence; reused assets have documented scientific limits; scripts are separate from original recordings.

**Initial allowance:** 8 to 16 hours drafting and scene planning, plus 2 to 4 hours teacher review. This includes the first pilot script work and overlaps the research roadmap allowances.

## Phase 3: shared production system

**Purpose:** make teaching decisions survive recording, rendering and export.

| ID | Work and likely layer | Acceptance check |
| --- | --- | --- |
| T1 | Define prompt, response gap and feedback timing. Start with assembled per-scene audio if it fits existing playback; introduce segmented schema/playback only if necessary | Exact measured gap; no visible or audible answer leakage; original lessons still render |
| T2 | Fix quick-check reveal timing in the slide layer | First answer exposure occurs at the intended hold boundary, including fades |
| T3 | Resolve one final timeline for audio, reveals, transitions, captions and chapters | Cues remain synchronised after gaps and overlapping transitions; boundaries verified in export |
| T4 | Separate summary teaching text from faithful accessible captions; cover any narrated intro | Captions match selected speech and meaningful sound; scientific tokens and gaps checked |
| T5 | Add a dependency/release manifest linking script, voice/model/settings/dictionary, takes, assembled audio, alignment, captions, assets and render configuration | Changes invalidate the affected downstream artefacts, including changed settings with unchanged text |
| T6 | Make the nine-second stinger an explicit production decision rather than a hidden obstacle to a useful opening | Hook-first option can be reviewed; existing intro behaviour remains available |
| T7 | Extend checks where useful: punctuation, caption coverage, timeline bounds, media decoding and selected arithmetic/notation validation | Failures identify the affected scene and repair; checks do not claim semantic or learning validation |
| T8 | Add reproducible media archiving, provenance records and restore procedure | Selected release can be restored, including assets ignored by Git |

Inspect existing scripts and tests before adding parallel implementations. Work in the current four layers: content, scene types, slides and renderer. Use backward-compatible paths and isolated drafts. Test meaningful behaviour such as early answer exposure, gap/caption offsets and stale dependency detection. Do not add tests that simply repeat configuration constants.

Fix small known defects before building a general framework. A new schema is justified only by demonstrated requirements. Full renderer replacement and catalogue restyling are out of scope.

**Initial allowance:** 12 to 24 hours for the first release path. Additional automation/archive work may take 12 to 24 hours before batching, depending on existing capabilities. Measure actual engineering time and avoid counting shared tasks twice.

## Phase 4: script, voice and learner pilots

Follow the [pilot protocol](pilot-protocol.md), which contains exact proposed scripts, measures, scoring and stop criteria.

| Test | Factors held constant | Decision |
| --- | --- | --- |
| Expert/device validation | Correct facts, one board and common review checklist | Materials are safe and interpretable enough to test |
| Molar-mass formative sessions, 6 to 8 learners | Voice/model/visuals/response task; each learner sees one script | Find reasoning, readability and hold failures |
| Controlled script feasibility comparison, 24 to 36 if recruitable | Same voice/model/board/opportunity/feedback; random allocation | Estimate whether causal wording helps near transfer; retain uncertainty |
| Simon delivery comparison | Same approved script and assembled hold | Choose reliable model/settings/takes separately from script effects |
| Biology mechanism and investigation checks | Selected production approach, task-specific script | Find failures beyond calculations |

Measure immediate understanding, new application, delayed recall and misconceptions. Confidence, engagement, preference and viewing behaviour are secondary. Neither a positive small pilot nor a null comparison establishes general effectiveness or equivalence.

Recruitment route, organiser, consent and teacher access are unresolved. Progress expert and technical work while those are arranged. If learners are unavailable, document that limitation and keep learning claims provisional. Do not substitute internal preference ratings for learner evidence.

**Resources:** teacher, listening/device reviewers, pilot organiser, consenting learners and approved generation budget. **Allowances:** 8 to 14 staff hours for formative work; 16 to 30 for controlled comparison and analysis, with variable recruitment/follow-up time. New audio/render costs depend on actual account rates and selected scope. No paid generation is started by this plan.

## Phase 5: representative full lessons

Complete molar mass after resolving the pilot findings, then a complete Biology mechanism and an investigation/evidence lesson. Include a Physics lesson when verified source material and subject review are available. Use limiting reagents to test whether the calculation structure handles proportional reasoning rather than just substitution.

Short Biology previews can precede full lessons to minimise rework. Every completed lesson must pass content/cohort, science/script, scene logic, voice, alignment/accessibility and full media review. Watch and listen to the entire export, including intro, transitions and ending, on desktop and phone with captions on/off. Check sound-off use and the descriptive transcript. Align final chapters and supporting practice with the exported timeline.

**Acceptance:** no unresolved critical science/access/media defects; reviewers and versions recorded; learner findings addressed or explicitly bounded; release package reproducible. Full lesson approval is distinct from approval of Simon, one voice take or a silent style clip.

**Initial allowance:** estimate the first full lesson after Phase 3. The report allows 4 to 8 hours editorial/teacher/listening review and 8 to 16 hours for additional reused-asset clips, excluding major missing capabilities. These are not defensible estimates for completing every full lesson. Measure accepted-minute effort here to establish that baseline.

## Phase 6: monitored batch and measured economics

Choose three to five lessons representing different tasks and available subjects. Treat these as a controlled production batch, not permission to process all 308. Use validated templates, manifest and review gates, with exceptions recorded rather than forced into the wrong template.

Record script/review hours, generated characters, failed takes, alignment/render cost, device defects, science corrections, turnaround and accepted finished minutes. Track recurring faults at their root: content, schema, slide, renderer or review process. Estimate workload by task and complexity, not one average duration alone.

**Advance only when:** all lessons pass release gates, repeated critical failures are resolved, archive/restore works, reviewer capacity is sustainable and measured costs support the next batch. If the same failure recurs, repair the shared cause before expanding. Initial batch size is a local operating choice, not a research-established optimum.

Publishing remains a separate concrete release decision. Titles, thumbnails, chapters, notes and prerequisite links should be ready for review with the final videos. Learning quality leads; packaging experiments follow stable teaching.

## Phase 7: catalogue rollout and maintenance

Group lessons by subject, applicable cohort and teaching task. Prioritise approaching curriculum transitions, high prerequisite value and identified risks. Each lesson receives one disposition:

- **Keep:** usable content/media, verified scope and passed review. No automatic regeneration.
- **Repair:** bounded content, caption, layout or media defect. Rebuild only affected dependencies.
- **Rework:** explanation/sequence fails the intended task. Draft and review before recording.
- **Hold:** unclear mapping, missing rights/media, scientific issue or absent reviewer.
- **Author:** genuinely missing lesson or capability, including Physics content where required.

Start subsequent batches at the size demonstrated sustainable in Phase 6. Increase only when throughput and defect data justify it. Keep checks per lesson even when shared tools are stable. Retain prior release packages so a regression can be rolled back without losing approved artwork or recordings.

Maintain a curriculum/change log, pronunciation lexicon, template examples, review decisions and learner findings. Reverify curriculum/provider information when relevant to a new release. Update defaults only when evidence or repeated production experience supports them. Do not revisit the whole artistic direction for every new lesson.

**Catalogue cost:** not yet estimable as a fixed total. After representative production, calculate remaining work by disposition and task class using measured hours and accepted-media costs. Include subject review, failed takes, corrections, storage and maintenance. Physics authoring is separately budgeted once scope exists.

## Operational gates and unresolved decisions

| Gate | Evidence needed | What it enables |
| --- | --- | --- |
| G1: pilot ready | Correct scripts/forms, reusable scene plan, fair comparison and working timeline | Bounded new-media pilot production once generation scope is authorised |
| G2: approach usable | Formative results, separate delivery review, resolved critical defects | Representative full lessons |
| G3: release ready | Complete playback/listening/access review and reproducible package | A concrete first publication decision |
| G4: batch ready | Task-transfer checks, documented learner limitations, review capacity and archive | Monitored three-to-five-lesson batch |
| G5: expansion ready | Batch defect/cost/throughput records and resolved recurring failures | Next scoped catalogue batch |

Missing inputs: teacher availability; learner recruitment/consent route; actual voice-model access and marginal cost; full new-syllabus content mapping; existing publication status; Physics source material; release/storage destination. None prevents creating the catalogue baseline and first draft package. Inputs should be resolved when they affect the next concrete stage, rather than asking the user to decide every future detail now.

## First execution tranche

Execution workspace: [docs/production](../production/README.md). The first baseline, diagnostic register, task templates and isolated pilot package are prepared there. Their individual review states and the remaining technical work are recorded explicitly; this does not mark the full library programme complete.

Start with L1, L3 and L4: inventory actual production status, turn known findings into a correction register and identify recurring diagnostic flags. In parallel with those independent reads, prepare Phase 2 templates and the first matched molar-mass package. Do not generate media yet.

The first review package should contain: catalogue summary, ranked corrections, task templates, two final pilot scripts, scene/hold plan, assessment forms and a short technical change list for T1 to T5. It should state the exact work and cost still required to produce the pilot.

This tranche creates the practical foundation for all videos. Molar mass proves one path through it; the other teaching tasks and controlled rollout establish whether it deserves to become the library standard.
