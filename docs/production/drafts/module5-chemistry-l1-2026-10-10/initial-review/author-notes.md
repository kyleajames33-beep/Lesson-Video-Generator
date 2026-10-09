# Chemistry Module 5 Lesson 1: author notes

Additive silent source draft, 10 October 2026. Original catalogue and recordings were not modified. The lesson keeps all 10 original IDs and slide types. Original narration attachments are removed throughout; no take is claimed to match rewritten words. Intro audio/captions and background music are also absent. Timed captions and alignment must be built fresh after recording.

Original source: `src/data/chemistry-y12-m5-l1-static-dynamic-equilibrium.json`. SHA-256: `35a841568a024037c706c1fd44f3877e1bc8005486b37aaffd9719553c8e6bf9`.
Draft: `docs/production/drafts/module5-chemistry-l1-2026-10-10/lesson.json`. SHA-256: `1bbd79a6b9f8ca574df39967855784aa9b63044ba69911c3c21ab73fdddf7972`.

## Scope and provenance

The 10 October priority plan supersedes earlier yield/purity next-production advice. The 9 October ledger marks the original source source-present-unreviewed with no selected revision and full required-action coverage not established. The course checklist currently covers quantitative Year 11 chemistry and enzyme actions, not complete legacy Module 5. This package is a C1 candidate contribution, not a completed dotpoint/module or practical investigation.

The model is deliberately fixed temperature and volume with a closed matter boundary and a reversible process. Closure and reversibility make equilibrium possible; reaching it takes time and requires balanced rates. An open driven system can have steady measurements, so steady does not uniquely establish equilibrium. The supported-book example is a static mechanical model, not a claim that a spent chemical reaction is thermodynamic equilibrium. Molecular thermal motion continues in the book. No assertion that all sealed mixtures are at equilibrium remains.

The A/B example and C/D transfer are supplied synthetic one-to-one models, not experimental datasets. Counts are time-averaged in an illustrative observed sample; concentrations describe its mixture. They are not a count-to-mole exercise or a proposed molecular mechanism/rate law. One-to-one conversion avoids confusing stoichiometric species rates with a consistently defined forward/reverse reaction rate. K expressions, calculations, rate-curve approach, catalysts and disturbance predictions are left to later lessons.

## Reference checks used by the author

OpenStax explains continuing equal forward/reverse rates and distinguishes equilibrium from change too slow to detect: [Chemical equilibria](https://openstax.org/books/chemistry-atoms-first-2e/pages/13-1-chemical-equilibria). The supported-object comparison follows [Conditions for static equilibrium](https://openstax.org/books/university-physics-volume-1/pages/12-1-conditions-for-static-equilibrium). These checks support authoring and are not independent science approval. The cohort and syllabus context follows the dated NESA-linked priority plan; this draft does not repeat full official action verification.

## Visual preservation and bounded changes

Keep the existing title, hook, concept, definition, worked-example, misconception, quiz and summary layouts. Per-scene decisions and speech cues are in production-brief.json. No catalogue-wide restyle or shared component edit was made. The static/dynamic contrast now uses the existing equilibrium exchange diagram with corrected scope. The bottle scene uses a compact table fallback. Table row reveals and board step reveals are draft estimates and still need speech-aligned review.

- `chem12m5StaticDynamic` is inactive in this draft: its hardcoded Mg combustion, no molecular activity wording and fixed counters cannot teach the corrected contrast. A future opt-in version could show a stationary supported book beside ongoing A/B exchange, with readable force/rate labels. Preserve the old component for historical inputs.
- `chem12m5Bottle` is inactive in this draft: the audited version removes both bottle caps, sets zero further dissolution and drains all CO₂. A future opt-in correction must keep the sealed control cap, retain bidirectional transfer after opening and show net loss without implying all dissolved gas inevitably vanishes. It needs mechanism and playback review before rebinding.
- The original `m5L1SparklingBottle` asset reference is preserved here for reuse. Registry path: `public/assets/hscscience/generated/lesson-1-static-dynamic/m5L1SparklingBottle.png`. It was absent at author inspection. The active hook omits it so missing art is not mistaken for reviewed artwork. Restore media per HANDOFF.md before deciding whether to reattach it.

## Response and timing contract

The lesson is deliberately silent. Quick-check voiceover.text contains the readable combined script for existing schema compatibility. `voice-segments.text-only.json` and narration.md separate prompt from feedback. They are not production manifests. Record separately, measure the prompt endpoint, assemble an 8-second planned gap and align feedback/rows afterwards. Draft `answerVisibleStart` is the earliest visible answer boundary. The neutral quick-check caption contains no answer. No measured `responseHold` or old timed captions are attached.

A nominal 130 WPM planning allowance and reading time set draft scene durations, reflecting the requested gentler difficult-explanation pace. They are hypotheses, not measured delivery. Check the default title and transition allowances as well as the core lesson in an exact preview. Script review must establish the entry bridge; prerequisite support-source selection remains pending.

## Pending review

Independent science/curriculum and script review: pending. Native still/device layout review: pending. Continuous silent UI playback: pending. Exact voiced preview: pending. Human listening: pending. Learner transfer evidence: pending. No audio generated, full export made, upload performed or release approval inferred. Root owns integration and independent-review assignment.

## Settled visual bindings

The hook uses existing Now/Later comparison cards, both labelled Same look. This deliberately suppresses HookSlide's unrelated default AtomGlyph and one-atom annotation. The question is rhetorical and these cards are neutral observations.

The concept-two-states scene reuses `chem12m5Exchange` in `diagramFocus`, already at equilibrium (`left0=6`, `right0=2`, `startAtEq=true`, `startAt=0`, `hopEvery=45`, `graph=none`, no disturbances). Static count labels describe unequal average amounts; continuing paired exchanges supply purposeful motion. The first-order simulation is a schematic one-to-one model, not a universal mechanism, molecular trajectory, physical separation or a literal count-to-concentration representation. That limitation is spoken. Fixed synchronous exchanges illustrate average balanced rates rather than asserting that molecular events occur simultaneously in pairs. The separate later A/B example supplies its own conversion counts; do not infer those numerical rates from animation speed.

The diagram meter is disabled because its 15px labels are too small. Its key rate condition remains in the large scene copy and narration. Graph and approach are disabled to avoid exposing K or an approximate approach threshold before the next lesson. Diagram entry at local frame 700 is estimated, not measured alignment. Native still/device and continuous-playback review of this opt-in binding remain pending.
