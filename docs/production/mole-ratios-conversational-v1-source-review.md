# Independent mole-ratios source review

Reviewer: next-batch preparation agent. Date: 9 October 2026. Scope: selected JSON, teaching brief, earlier audit and component behaviour inspected from source. No Studio playback, still render, encoded clip, audio generation, upload or human listening was performed. No approval flag or production source was changed.

## Exact selected revision

- Lesson: `src/prototypes/data/mole-ratios-conversational-v1.json`
- Lesson SHA-256: `ae34f21390318392f6bbeea304600718dba492cf1687faeb1bd3acf4628cfd8e`
- Brief: `docs/production/mole-ratios-conversational-v1.production-brief.json`
- Brief SHA-256: `d723dac56dd1eb851975cdc89057680be3ef36d3a290c9d3eae5c1b727c07d4f`
- Brief source hash matches the selected lesson. All script, voiced-preview and human-listening reviews remain pending.
- Ten scenes, 717 script words according to the saved draft record. No scene recording is attached. Cue frames and response interval are proposals, not audio alignment or a measured silence.
- Selected lesson and brief contain zero U+2014.

Compared with `docs/production/next-chemistry-batch-review-2026-10-09.md`, AGENTS.md, the teaching/visual brief and preview-first workflow. The earlier L11 source is preserved, SHA-256 `e482bd8cbce4713a5490e2849b45b417669e99392f0d949ce9b116816ec2b41c`. This review does not recheck live syllabus pages. The brief correctly treats the cached simple-whole-number-ratio practical requirement as distinct from this explanation.

## Findings and required next work

| Finding | Source evidence | Outcome and owner action |
| --- | --- | --- |
| Entity/coefficient misconception corrected | Selected lesson lines 64 to 77 distinguish relative entity counts, mole amounts and atoms inside each molecule. `definition` line 176 explains conservation and intact formulas. | No material scientific error found in this distinction. Keep these corrected statements when recording. |
| Acid/base arithmetic and display agree | `formula` lines 184 to 224 and `worked-example-2` lines 298 to 352 use HCl:Ca(OH)2 = 2:1. Diagram has known 0.300 mol, coefficient 1; wanted HCl coefficient 2; `dp:3`. | 0.300 times 2/1 = 0.600 mol HCl. Three 0.100 mol known crates and six wanted crates match. Longer three-decimal labels still need actual phone-size inspection. |
| Changed-ratio transfer is present and correct | `quick-check` lines 376 to 428 asks for water and oxygen from 4.00 mol reacting H2 under the same equation. | Water: 4.00 times 2/2 = 4.00 mol. Oxygen required: 4.00 times 1/2 = 2.00 mol. This improves on only retrieving a 1:1 answer. |
| Reaction assumptions and model limits are stated | Acid/base question says reacting amount/complete reaction; note at line 331 states the equation model. `misconception` line 368 specifies complete reaction and enough other reactants for product predictions. `quick-check` line 388 and note at 412 specify enough oxygen. | Appropriate for required acid amount and theoretical water prediction. The opening is a formal equation comparison, not a measured-yield promise. Keep assumptions visible/spoken in the final tasks. |
| Hidden legacy coefficient label is safe in this selected configuration | Selected `concept.diagram.props.beats` omits `coefLabel`. `CoefSubscriptDiagram.tsx:47` returns opacity zero for an undefined cue; line 114 applies that fade to the hard-coded label “big number in front: moles”. | The misleading old label is not visible under these exact props. Do not inject a `coefLabel` cue while rebinding narration. The legacy string remains in the shared component, so selected-prop safety needs preserving. This is source logic evidence, not a rendered accessibility/playback approval. |
| Quick-check speech assembly is still a recording blocker | `quick-check.voiceover.text` at line 388 contains prompt and both answers in one continuous draft string. The brief's understanding check requires separately recorded prompt and feedback. The source declares frames 624 to 684 as a two-second hold. | Before generating this scene, create explicit prompt/answer recording segments and assemble measured silence between them. A pause invitation or source `responseHold` cannot guarantee silence in generated continuous narration. Rebuild captions and cues from the selected assembled audio. |
| Full result lines currently reveal with their stage, not their own spoken result cue | The acid calculation's final stage and both practice stages have a complete calculation/result in a single `lines` entry, with no `lineAts`. `OrganisedCalculation.tsx` defaults each line to its stage cue. | All these cues are estimated. During narration binding, align each complete result line to its actual result phrase, or separate ratio/setup and result lines with explicit cues when that improves teaching. Do not claim that source `stepAts` already prove narration/result synchrony. No measured early reveal is alleged without audio. |
| Visual attempt boundary is protected by the current source path | Response end and `answerVisibleStart` both equal 684; practice `stepAts` are 684 and 934. `QuickCheckSlide` clamps stages to `answerStart`; `FocusedWorking` returns no working before the first cue. The header/givens/note contain no numerical answers. | No visual solution leakage is found for frames 624 through 683 from this source logic. First answer opacity starts at zero at 684 and grows afterward. Confirm the same boundary against final prompt/answer audio, aligned captions and actual playback. |

## Science and teaching details

The water equation conserves four H atoms and two O atoms. Its entity ratio 2 H2:1 O2:2 H2O scales to the same mole ratio; the draft does not say every drawn particle represents one mole. H2O stays unchanged, and its subscript is explained as two hydrogen atoms in each water molecule. The iron example is also correct: 4 Fe + 3 O2 gives 2 Fe2O3, with four Fe and six O atoms on each side, Fe:Fe2O3 = 4:2 = 2:1. Its narration/note describe oxide formula units rather than separate Fe2O3 molecules in the solid.

The acid/base formal molecular equation is balanced: two HCl per Ca(OH)2 yields CaCl2 and two H2O. The source explicitly notes that the schematic equation does not show every solution ion, and that the crates are labelled amounts rather than literal molecular containers. Asking how much acid is required for a stated reacting base amount does not claim that this acid supply is already available. Predicting water does explicitly state sufficient oxygen.

The script is substantially more connected and explanatory than the older command recital. The same-reaction/different-pair opening earns its contrast. The acid amount is justified before multiplication, the inverse ratio is explained through the reversed task, and the summary gives a usable comparison question. It removes the earlier lost-marks framing and never-get-it-wrong guarantees. “The oxygen ... has a different deal” is an optional conversational phrase tied to the actual ratio; it is not a scientific claim about intention. Natural delivery, scientific pronunciation and whether this tone works aloud remain listening questions.

The brief's entry knowledge is formula reading, conservation, balancing and mole amount. It explicitly says empirical formulas are not compulsory prerequisite knowledge. This lesson checks an already balanced iron equation rather than promising to teach balancing from scratch. It starts with selecting compared species, stops at converting mole amounts under assumptions, and hands off to mass-to-mass using each species' molar mass. That boundary is coherent. It does not claim to conduct the quantitative practical required by cached 2025 ci94bdbfc4. Metadata retains legacy course placement while `syllabusNeutral` removes it from the reusable visual course label; exact public course mapping remains separate.

Static scene captions are mostly the same generic comparison line. They do not leak the practice answers, but they are not a full aligned transcript of these new words. Generate new timed captions from the selected narration rather than treating these draft captions as completed accessibility evidence. Check the spoken reading of iron(III) oxide and chemical formulas in the actual take.

## Estimated cue audit

All times below are scene-local source proposals at 30 fps. They show component behaviour only. They are not measured narration timestamps.

`DiagramRenderer` passes the outer `diagram.delay:30` into each diorama component. The components subtract that delay from current frame. The outer `FadeUp` at frame 30 changes visibility and does not reset the inner frame clock. Add 30 to `props.beats` to obtain the scene-local cue.

| Scene | Scene-local cue | Teaching interpretation |
| --- | --- | --- |
| Concept | Equation begins at frame 30 (1.0 s) | Stable formal equation before the count distinction |
| Concept | Coefficient boxes at 156 (5.2 s); first coefficient bullet also 156 | Select whole-entity counts |
| Concept | Molecular groups start at 240, 250 and 260 (8.0 to 8.67 s) | Schematic 2:1:2 groups; formulas stay intact |
| Concept | Counts and implicit coefficient 1 at 348 (11.6 s) | Make the unwritten oxygen coefficient explicit |
| Concept | Compared H2:H2O ratio at 444 (14.8 s) | 2:2 reduces to 1:1 |
| Concept | Subscript rings at 624 (20.8 s); second bullet also 624 | Shift from entity count to composition of one entity |
| Concept | Subscript explanation label at 756 (25.2 s); dim begins at 996 (33.2 s) | Explain then de-emphasise subscripts in the conversion. Dimmed formulas must remain readable in preview. |
| Formula | Ratio/coefficient card at 96 (3.2 s) | Ratio first is deliberate: narration opens with the two-to-one relationship |
| Formula | Known crates at 264 (8.8 s); known amount label at 284 (9.47 s) | Introduce 0.300 mol base |
| Formula | Bullet with 0.300/0.600 at 300 (10.0 s) | Both quantities are stated in this explanatory scene, not an attempt |
| Formula | Wanted crates at 384 (12.8 s); wanted amount label at 414 (13.8 s) | Scale to six 0.100 mol acid crates |
| Formula | Full working starts at 434 (14.47 s); top-coefficient emphasis at 468 (15.6 s) | Hold the completed relationship. Verify overlap/phone fit and speech order after recording. |
| Definition | Bullets at 30, 210 and 510 (1, 7 and 17 s) | Explicit cues prevent default final-bullet distribution from running late |
| Practice | Hold 624 to 684 (20.8 to 22.8 s); water stage at 684; oxygen stage at 934 (31.13 s) | Visual answers are withheld until the proposed boundary. Actual silence/result words still need fresh binding. |

The ratio-before-known order in the acid diagram is not automatically a defect. It fits this draft's relationship-first narration. The earlier default known-first recipe is not a mandatory feature order. Actual pronunciation and timing can change the best cue values.

## Dependency evidence

Relevant shared files inspected, unchanged by this review:

- `src/slides/diagrams/kinds/chem-y11-m2/CoefSubscriptDiagram.tsx`: `502475c3c45e5106eecd20126423eb872ed441782fa42597843e888a35a133a4`
- `src/slides/diagrams/kinds/chem-y11-m2/RatioConvertDiagram.tsx`: `1302ee69bc9e9c03f13d307b54aab5feb5b64e6c6a909c0d9ce350c7ff94bf9b`
- `src/slides/shared/OrganisedCalculation.tsx`: `06d66db58373e6d818792791ba73e0719943e7d719ca62c02c6ca07d97d10822`

Also inspected DiagramRenderer, ConceptSlide, BulletReveal, WorkedExampleSlide, QuickCheckSlide and answer-timing.mjs to trace offsets, explicit bullet cues and first answer exposure. No claims about actual typography, sharpness, phone fit or smooth motion are inferred solely from those files.

## Source-only outcome

No material arithmetic or entity/coefficient error was found in this selected source. The specific science corrections from the earlier audit are applied, assumptions are appropriately bounded, and the start/stop/next route is coherent. This is a source-review finding, not a recording/export/listening or syllabus-completion approval.

Before recording, the owner must resolve the pending script/source review, prepare the separate practice prompt/answer assembly and preserve the hidden legacy coefficient label. After recording, replace estimated cue/hold values with measured alignment and assembled silence, bind result exposure to spoken results, build captions, then inspect the exact voiced lesson and a difficult pilot at desktop/phone size. Leave all approval flags pending until their respective evidence exists.
