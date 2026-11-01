# Physics and Maths first-lesson draft handoff

25 October 2026. Owner-requested preparation while Claude is unavailable. These unrecorded authoring packs are for review. They do not select a release revision or replace an existing video. GCSE remains parked.

| Deliverable | File | Current source-review state |
| --- | --- | --- |
| Physics: why horizontal launch does not change fall time | [Lesson pack](physics-horizontal-launch-pack.md) | [Independent science and learning review](../checks/codex-interim-physics-first-pack-review.md) found no source-level blocker |
| Maths: how secant slopes approach a tangent slope | [Lesson pack](maths-secant-tangent-pack.md) | [Independent mathematics and learning review](../checks/codex-interim-maths-first-pack-review.md) found no source-level blocker |
| Six assessment correction areas | [Replacement drafts](physics-maths-assessment-corrections.md) | [Independent copy/calculation review](../checks/codex-interim-assessment-corrections-review.md) found no blocking copy issue |

Each pack contains draft narration, a scene-level teaching/visual plan, a worked example, an original transfer question and feedback, an answer-free response hold, optional book notes, entry knowledge and a stopping boundary. Times are authoring estimates, not aligned recordings. No media has been generated.

The pack files retain their authoring-time pending-gate tables. The exact independent source-review records linked above update that state without changing the reviewed draft bytes. Implementation, recording and release gates remain pending.

## Placement and reuse

Physics is a narrow lead-in to the existing Year 12 Advanced Mechanics route. Separate the shared-time explanation from angled-launch trigonometry, range derivation, obstacle clearance and quadratic roots. Maths is an introductory differentiation bridge for HSC readiness, not the first Year 12 syllabus unit. Earn the limiting slope at one point before adding general rules, normals or tangent-line equations.

Official context checked on 25 October: [NESA's Physics course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017) retains the 2017 Year 12 course during the 2027 transition. [NESA's Mathematics Advanced overview](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview) places Introduction to differentiation in Year 11 and starts the new Year 12 syllabus in Term 4 2026. These checks establish context, not point-level coverage or teacher approval for the drafts.

Preserve usable explainer assets and the established visual system. The old slide engine remains frozen. The original Physics projectile pilot is an angled, equal-height case whose solver rejects zero velocity components. The paired horizontal-launch/dropped-ball scene needs a compatible height-based model and one physical clock. The Maths tangent pilot does not show a secant approaching a fixed point; that missing visual relationship must be implemented. Retain its fixed rise/run overlay guard at a = 2.

Maths local-view check: with the current graph transform and the proposed 10-times magnification, h = ±0.01 separates the point centres by about 24.6 to 24.7 source pixels. Do not copy the old graph's 28-pixel-diameter markers into that view unchanged. Choose smaller nonoverlapping marker footprints and separated labels, then check actual phone/caption-on readability. A larger truthfully labelled magnification is another option. This is a geometry constraint, not a rendered-layout pass.

## Adoption sequence

1. Resolve independent science and learner-review findings in each exact draft. Keep authors and reviewers separate.
2. Claude reviews direction and chooses integration, with the intended cohort and prerequisite route explicit.
3. Implement only the chosen pack on `src/explainer`. Create its exact lesson source and schema 4 teaching brief, including per-scene reuse, causal motion cues, response holds and progression boundaries.
4. Check script, calculations, learner reasoning and relevant silent visuals before paid narration. Pass the recording-stage brief check for that implementation.
5. Record an authorised selected revision, align its exact words and review the voiced preview, student learning, phone/caption fit and human listening.
6. Freeze reviewed inputs and pass the existing export/full-package release gates before publication.

The correction review covers draft copy and calculations only. Site application, actual hint/reveal behaviour and lesson recording remain pending. SA3 is deliberately revised to supply a numerical comparison. Q7 distinguishes a rounded threshold from strict clearance; 26.0 m/s is a valid above-threshold speed.
