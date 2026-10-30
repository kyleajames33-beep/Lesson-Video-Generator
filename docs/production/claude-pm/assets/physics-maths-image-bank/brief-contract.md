# Image-bank brief contract

Planning only, 25 October 2026. First pass: 70 Year 12 Physics site lessons, 59 Year 12 Maths Advanced lessons and one calculus bridge. This is not a syllabus-coverage, full-script or image-generation pass. Other Maths courses, other Year 11 routes and GCSE remain outside this pass.

Use `source-inventory.json` for exact paths, titles and hashes, then inspect the relevant actual lesson explanation and examples before deciding an image's purpose. Heading extraction is discovery evidence only. Existing coded Physics support is mapped separately; its presence does not prove lesson coverage. The raw `existing-raster-inventory.json` includes old versions and variants, not 793 approved unique teaching illustrations.

Each subject plan is JSON with `subject`, `scope`, `lessons` and `families` arrays. Every inventory lesson has one row with `lessonKey`, `sourceSha256`, `decision` (`coded-only`, `raster-support` or `reuse-candidate`), `familyIds`, `codedVisualIds`, `teachingReason` and `sourceEvidence` (specific section/case). Empty family lists require a positive explanation of how the coded visual carries the teaching. Do not allocate artwork to satisfy a quota.

Every family has `id`, `title`, `purpose`, `lessonKeys`, `priority` (`P0`, `P1`, `P2`), `readiness` (`prompt-ready-candidate`, `needs-reference`, `needs-selected-scene`, `reuse-review`), `treatment`, `reuseCandidates`, `states`, `alignment`, `codedOverlays`, `acceptanceChecks`, `dependencies` and `referenceNeeds`.

`reuseCandidates` records actual paths plus `inspected` and a fit/limitation note. A filename or hash match alone is not an appearance or science pass. Never modify or replace existing art during planning. A missing reference or unknown apparatus construction stays a dependency rather than becoming invented detail.

Each state has `id`, `description`, `prompt`, and `derivedFromStateId` (null for an independently framed base; another state ID for a controlled edit). Prompts specify subject/action, useful view, essential physical details, composition, transparent-background intent, treatment, and scientifically necessary invariants. Prompts are proposed, not evidence that the image exists. The built-in image tool is the default for later generation; no CLI/API fallback is selected by this plan.

Prefer isolated cutouts where they allow coded labels, arrows, measurements, axes and state changes to remain exact. Reuse the accepted editorial/painted visual mix by teaching purpose. Do not bake formulas, scientific labels, circuit topology, field lines, graphs, precise scales, answers or essential colour-only distinctions into a generated raster. The brief must name the coded overlay that carries them.

For an aligned pair, create one base and derive changes from that base through an edit with explicit invariants. Keep camera, object position, framing and unchanged structures fixed. A common canvas or similar filename is not alignment evidence. For cutaway/assembly views, state whether an in-place transition is intended; independent views must not masquerade as an aligned crossfade. Prefer one reusable base with coded motion when only position, illumination, labels or numerical state changes.

Default cutout intent: transparent background, a complete silhouette, useful clear margins (normally at least 10 percent), no baked shadow or ground unless the scene needs it, and sufficient natural resolution for the intended scene size. Choose aspect ratio for the subject, rather than forcing every long apparatus onto a square. Record actual generated dimensions; enlargement does not add native detail.

Priorities follow the focused learner route and actual missing visual need. The first horizontal-launch and secant packs mainly require new coded motion, not an illustration quota. Reserve later apparatus families until the relevant lesson/apparatus or reference is selected. `prompt-ready-candidate` means the prompt is technically specified; it is not teaching, generation or release approval.

Later per-batch evidence must record prompt/reference provenance, original and copied output paths, SHA-256, native dimensions, alpha/edge checks, state alignment and feature anchors, subject accuracy, actual scene-size review, purpose during playback, archive/restore evidence and unresolved gates. Keep generated plates separate from approved lesson inputs until their exact use has been reviewed.
