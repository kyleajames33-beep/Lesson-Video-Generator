# Chemistry C4 independent preparation review

Reviewed 10 October 2026 by independent scope/science reviewer. Outcome: focused C4A/C4B preparation is scientifically suitable in principle, with the bounded corrections below required before selected-source recording review. This is source inspection only. No lesson, component, audio, route or frozen render input was modified. No frames, playback, listening, recording-stage check, export or release gate was passed.

## Exact inspected inputs

SHA-256 values, captured before this review file was written:

| Input | SHA-256 |
| --- | --- |
| `chemistry-c4.md` in this directory | `0674f1c8b164a322ba6a5f5332cc80c22b6feb9787dc1df26822d738f4ca206c` |
| `docs/production/module5-video-route-2026-10-10.json` | `b03b3310d9f792d0776306f155ceb45f2e74a73ec81aa252ae00d32f001a1742` |
| `src/slides/diagrams/kinds/chem-y12-m5/PressureDiagram.tsx` | `6ff4b6fb4cc3f96279bf0497e61662b728b37382c6bc155259c1789b72d9953a` |
| `src/slides/diagrams/kinds/chem-y12-m5/CatalystBothDiagram.tsx` | `b52dc62a24ab9a1e284e8fd6bd3f959f6bd8e7fe2b2aa533f126a8d935409a18` |
| `src/data/chemistry-y12-m5-l6-lcp-pressure-volume-catalysts.json` | `7df8ec19bde189f8f2ed7c9442642c9c0265cfb8cac951e7069d394cae68e895` |
| Cached official Chemistry 2017 DOCX | `7c75fc806d4d8154499b0c596eda048ce4367547922bbd4058da075d9c319d42` |
| Cached official Chemistry 2017 paragraphs JSON | `8f945689294fe87ac22786cbaee17cae7ffb52be4a14ca38f76e4e7048d8eef1` |

Official files are under `out/research/continuity-2026-10-08/`. This review uses their existing 8 October evidence boundary, not a fresh official full-syllabus verification. Orientation, research standard and library implementation plan, teaching templates/brief, visual handbook, animation plan, preview-first workflow and course-progression plan informed the review. The ledger/checklist remain inventory/action evidence, not completion evidence.

## Corrections to resolve

1. **Update stale scope metadata.** The route already adopts C4A/C4B under `chem-m5-c04`; the draft still says the split is proposed and requires resolution, including its Next gates section. Reconcile those statements with the adopted route. Preserve the canonical ID and action groups. The route records 22 Module 5 Chemistry uploads plus one optional cross-module support upload; this review does not change or approve counts.
2. **Introduce K before using it.** `a-feedback`, `a-key-notes`, `b-path` and `b-key-notes` use equilibrium constant/K, but C5 is the stated introduction to equilibrium expressions. Give its short plain-language meaning on first use, or defer the symbolic detail to C5. Students can understand the fixed-temperature relationship without doing Q/K calculations. The pressure/volume and catalyst claims themselves are correct under the stated model.
3. **Make matching system conditions explicit in Part B.** Same reacting amounts and temperature alone do not fix equilibrium concentrations/composition if volume differs. The question's 'Only one has a catalyst' implies other conditions match, but the entry boundary, graph comparison and condensed notes should explicitly preserve the same container volume and initial composition. Keep the model assumption that the catalyst adds a pathway rather than another equilibrium reaction. Specify an initially product-forming mixture for the rising concentration curves. The conditional `b-feedback` is correct; do not replace it with an unconditional earlier-product claim.
4. **Carry catalyst corrections through accessible and visible output.** The actual component's `aria-label` also states both rates rise by the same factor. Removing rate meters or changing `meterMode` does not repair that text. Selected presentation must remove unsupported general enhancement-factor claims in visible labels and accessibility description. Its existing same-drop brackets are valid only for the depicted shared single-hump schematic; omitting them avoids suggesting a universal catalyst mechanism. Keep both pathway endpoints identical, label the profile schematic, and explain reaction progress is not time.

## Science and syllabus findings

The balanced ammonia equation and 4 versus 2 coefficient totals are correct. Distinguishing immediate compression from subsequent reaction is useful. Fixed-temperature compression favours fewer gaseous moles, expansion favours more, equal gaseous coefficient totals cause no shift in the ideal-gas model, and adding inert argon at fixed volume/temperature leaves reacting partial pressures unchanged. The sulfur dioxide response correctly shifts left on expansion. Counting coefficients rather than starting quantities and excluding solids prevents common inference errors.

The draft's pressure account gives a valid qualitative Le Chatelier explanation without pretending the ammonia stoichiometry supplies its elementary rate law. Particle wall collisions explain pressure, not the whole chemical relaxation mechanism. Retain that limitation when mapping `C-collision-observations`; this is a contribution, not a complete collision-theory or investigation action pass.

Cached official paragraphs p1067-p1070 name disturbance investigation and example systems; p1071 asks for collision-theory explanations of overall observations; p1072 addresses activation energy and heat of reaction in equilibrium position. C4A and C4B contribute to these action groups but omit practical conduct, several named systems and the heat-of-reaction content. The draft accurately treats those as subsets. No dotpoint, outcome or Module 5 completion is established.

The catalyst distinction is sound: an alternative pathway changes approach time, while fixed-temperature equilibrium composition remains unchanged under matching system constraints. Equal opposing rates at equilibrium need no universal equal multiplier away from equilibrium. Earlier product can increase for a product-forming starting mixture, without implying more product at equilibrium. The original component's 2.2 multiplier and its ratio-mode inference should not accompany these new words.

External science cross-check: [OpenStax Chemistry 2e, equilibrium shifts](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle), accessed 10 October 2026. Its volume, gaseous-stoichiometry and catalyst discussion supports these qualitative distinctions. The [official NESA source](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx) is represented by the hashed local cache above.

## Teaching, reading load and reuse assessment

The split preserves one main learner question in each video. First-use explanations of inert gas, partial pressure and activation energy are approachable. The compression-to-reaction sequence, equation coefficient reminder, inert-gas contrast and rate-versus-composition comparison explain relationships rather than simply naming rules. K needs the beginner support noted above. A short prerequisite check/support route remains to be specified in the selected machine-readable brief, as required by teaching templates; the rhetorical opening is correctly not claimed as retrieval evidence.

The staged boards clear previous cases and avoid competing profile/graph/notes displays. The Part A attempt retains phase labels, volume direction, temperature and explanation demand; Part B retains both demands and matching conditions. Six-second attempts and copying holds are provisional estimates, not demonstrated adequate time. Check the exact first visible/audible answer boundary, readable question load and optional pause in the voiced revision.

Optional book notes condense already explained essentials after reasoning. Keep conditions explicit, including matched volume in Part B. Part A may need its planned two-board fallback if four lines and captions crowd the small player; do not shrink essential labels. No extra artwork is justified.

The library reuse decisions match inspected source. PressureDiagram prescribes V=0.384, 20-to-18 particle counts and a reverse sequence; these can serve a schematic stoichiometric model, not experimental data or a literal four-molecule mechanism. Actual props currently expose timing/chips, not independent hiding of equation, gauge and trace, so one-active-visual selection requires a bounded selected implementation rather than an assumed prop-only correction. CatalystBothDiagram similarly combines profile, rate meters, graph and notes. Its selected separation and factor removal require implementation evidence before claiming the planned presentation exists. Existing visual assets remain useful.

## Outstanding evidence

Resolve the four corrections, integrate only the selected C4 sources/briefs, and review those exact hashes independently. Inspect corrected native scenes, phone/caption fit and difficult motion beats before recording. Recording-stage approval, paid narration, aligned response gaps, exact voiced preview, human listening, export-stage checks, full-package review and publication all remain pending. This file supplies bounded preparation findings only.

## Independent recheck of corrected preparation

Rechecked 10 October 2026 against the current `chemistry-c4.md`, SHA-256 `f49c2fcee0e0559e7241a965788aaa0aab453780c110cc6e9f75d28e885e1325`. This supersedes the original draft hash for the bounded correction assessment; the original review above remains historical evidence.

All four preparation findings are resolved in the authored text. Focus/progression and Next gates now recognise the adopted C4A/C4B split. Both parts provide a plain meaning of K before relying on it, while leaving equilibrium-expression construction to C5. Part B's entry, explanation, graph plan, full response prompt and notes explicitly match initial composition, reacting amounts, volume and temperature; the graph and response specify product-forming initial conditions. The library audit and b-path instructions explicitly remove universal multiplier assertions from visible and accessible descriptions, omit same-drop bracket generalisation, and retain identical schematic endpoints.

Outcome: the corrected human-readable preparation has no remaining material science or focused-scope finding from this review. It is suitable for selected-source/brief integration and bounded visual implementation. This is not a machine-readable selected-source script-review pass, recording approval or visual implementation verification. The prerequisite check/support route identified above still belongs in the selected brief. The longer Part B prompt and note condition line require small-player fit and exact voiced reading-load checks; retain every condition and stage text rather than shrinking it if necessary. All visual, timing, listening, export and release evidence remains pending. No production inputs were changed during this recheck.

## C4A selected-source integration review

Inspected 10 October 2026: `chemistry-c4a/lesson.json`, SHA-256 `88638b883e0dab965e0f290640425de3dc9a017678645f66e1df19142de6d84f`; `chemistry-c4a/production-brief.json`, SHA-256 `ca19b1052e2b1edccd5a2289d80c3455086d3638a9831ee5c7ebf9b899736f0a`. Paths are relative to this directory. Exact text comparison found all eight voiceover strings equal to the accepted Part A paragraphs in corrected preparation `f49c2fcee0e0559e7241a965788aaa0aab453780c110cc6e9f75d28e885e1325`.

Supported source fields route concept, worked-example and summary scenes through their existing renderers. `module5Evidence`, focusedContext, stages, step cues and line cues exist in the shared types/component implementation. The evidence boards preserve the applicable equation and fixed conditions and replace the active reasoning rather than retaining unrelated answer history. `retainedStageIndexes: []` is supported but the focused implementation already suppresses its trail. The prompt-only response retains the full gaseous equation, volume increase, fixed temperature and both prediction/explanation demands without answer text. Notes introduce no new science, and the canonical C4A start/stop/exclusions and C4B handoff are explicit. The brief provides the previously missing prerequisite check and qualified support route. No diagram is active; pending pressure/inert visual blocks are honestly recorded.

**Outcome: changes required, no selected-source pass yet.** Two implementation mismatches need resolution:

1. **Protect the full response hold from transition overlap.** `responseHold` is local 360-540 but the response scene also ends at 540. Shared `timeline.mjs` and `LessonVideo.tsx` overlap transitions by 24 frames. The current response starts global 3745, its declared hold spans 4105-4285, but feedback starts 4261. Its default audio begins at local 0, therefore fresh feedback narration would invade the last 24 frames (0.8 seconds) of the declared six-second hold. The responseHold metadata does not itself create silence or delay the next scene. Add sufficient outgoing transition protection, or explicitly delay every feedback audio/visual cue until after the hold using supported fields. Keep the complete prompt available through the protected response interval. Recalculate actual boundaries after fresh recording.
2. **Quiet notes are not yet a stable shared presentation.** The finalPrompt activates SummarySlide's FinalRuleCard, which adds AmbientGlow at `delay + 70` and AmbientBorderPulse at `delay + 72`. With finalPrompt delay 120, these start at local 190/192 and continue into the proposed copying tail. The brief says 'Stable copy hold; disable competing diagram motion', but the current summary source still selects decorative card motion. Use an existing supported stable presentation choice, such as omitting the optional finalPrompt card while keeping the spoken pause invitation and notes, or a bounded selected implementation. Phone-fit and caption checks remain pending. The 427-frame duration alone does not prove an eight-second quiet tail because no recording/window is present.

Source inspection establishes the copied science and staging scaffolds, not measured cue alignment, silent gaps or usable layout. Shared timeline was evaluated read-only with the exact lesson; no render, audio generation or component/script/source edit occurred. Resolve these findings before binding a passing selected-source review. Visual integration, fresh speech/alignment, voiced playback, actual listening and every downstream gate remain pending.

## Corrected C4A selected-source recheck

Rechecked 10 October 2026: `chemistry-c4a/lesson.json`, SHA-256 `1f0e871cc24df7532c830735f6daf08f988ba35ca8dc43abf6806928bcb176b4`; `chemistry-c4a/production-brief.json`, SHA-256 `37365ca0ef66dd1a34e76ce76f91b8c1a1879b891ca6f3b388cf412b48b36f38`. All eight spoken strings still exactly equal the accepted Part A preparation.

Both source-integration findings are resolved. Response duration is now 564 frames with the unchanged provisional hold at local 360-540. The shared timeline places the hold at global 4105-4285 and feedback start at 4285. The outgoing 24-frame transition therefore starts at the hold boundary rather than inside it; feedback audio at its default local 0 and count reveal at local 24 no longer invade the declared response interval. No answer exists in the prompt-only scene. This checks structural timing, not recorded speech silence or prompt fit.

The notes scene has no finalPrompt or finalPrompt cue. SummarySlide therefore does not mount FinalRuleCard and its AmbientGlow/AmbientBorderPulse during the copying tail. Four notes still appear together via local-12 takeaway cues; their science is already explained, with no new narrated reasoning. Actual invitation duration and eight-second quiet copying time still require fresh recording and aligned timing.

Outcome: **pass for bounded selected-source script/science and structural integration review of the exact lesson hash above**. The brief remains an honestly pending production record; root may bind this independent evidence to scriptReview without implying any later gate. The pressure/inert diagram implementation is still changes-required and inactive, native/phone/caption fit is uninspected, and all cue times/holds remain provisional. This pass does not approve recording readiness, visual integration, voiced preview, human listening, export, syllabus-action completion or publication. No source/component/script changes, narration or rendering were performed by this reviewer.
