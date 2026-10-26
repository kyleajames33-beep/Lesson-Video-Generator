# Independent Physics and Maths image-bank planning review

25 October 2026. Independent review of the frozen subject plans, merged queue, generated planning documents, inventory contract and root validator. Reviewer did not author either subject plan or the merger. Only this report was written. No plan, source lesson, image, audio or renderer was changed, and no image-generation tool was called.

**Decision: no blocking finding in this planning package.** Coverage, current source hashes, family links, state dependencies and exported prompts agree. The plans make useful distinctions between precise coded explanation and optional material/apparatus context. This is planning acceptance within the limits below, not prompt approval for an unselected lesson, image-generation approval, approval of existing assets or syllabus coverage.

## Pins and independent structural checks

Paths in this table are under `docs/production/claude-pm/assets/physics-maths-image-bank/`.

| Input/output | SHA-256 |
| --- | --- |
| physics-plan.json | b0c5c302ccb0ab4d387a1742ca2fb6671896e8e3902856301752d5769334f253 |
| maths-plan.json | a882b17e1251c6b01204acb75d35e8041149bbb2d35694570e7baf28752dffa2 |
| source-inventory.json | 9c343fa55078aceb96f440685fc4057d9054ce854a08eeb1b705b2df5ee0c3eb |
| existing-raster-inventory.json | b750943d7f0a63d54cd2929f3e9e5533088fa62b2a53c6d389fe62b5bedbe80a |
| generation-queue.json | 1cc36497e6ac05c7d60b50ba0b3962e166fe452369433095641a52dd9e0db485 |
| generation-prompts.md | 4c07392b8e918c0ed0841d03dfdf254a04f293d61d5bbe8a697df90743840dc6 |
| lesson-image-map.md | 4c3b5af741765ae6eb544a2e15f6a101002a99981189df8589b64aabb2373887 |

Read `scripts/check-image-bank-plan.mjs` and independently reproduced its important relationships in a read-only Python check rather than invoking its file-writing merger. All 130 inventory lesson keys are unique and occur exactly once across the two plans. Every plan source hash matches its inventory entry and the bytes of its current actual site page. All family/lesson links agree in both directions, with no unknown family. All states have valid acyclic parent chains. Reuse paths exist in the raw inventory and their actual file hashes match. All four queue input fingerprints match current inputs. Each queued prompt and its parent match the corresponding subject-plan state; readiness, priorities, dependencies, reference needs, acceptance checks and coded overlays are preserved. All prompts occur verbatim in generation-prompts.md and all lesson keys occur in lesson-image-map.md.

| Verified planning count | Value |
| --- | ---: |
| Physics Year 12 lesson rows | 70 |
| Maths Advanced Year 12 rows plus one Year 11 bridge | 59 + 1 |
| Total lesson rows | 130 |
| Coded-only decisions | 103 |
| Raster-support or reuse-candidate decisions | 27 |
| Families | 18 |
| Planned state outputs, including conditional reuse fallbacks | 26 |
| Controlled edit states | 1 |
| Raw existing raster files in inventory | 793 |
| Generation calls recorded by this package | 0 |

The 793 files include Biology/Chemistry art, variants and old versions. They are not 793 approved reusable teaching images. The 26 state outputs are an upper-bound plan before scene selection and reuse decisions, not an order for 26 new images. No new output image exists in this planning directory. Neither count is evidence of catalogue-wide design approval.

Physics plan coded IDs exactly match those in the source inventory. Maths rows deliberately name planned capabilities rather than claiming the tangent kit already implements all graphs, finance models or geometry. All coded-only rows give a positive teaching purpose and have nonempty coded-ID lists. This review has not validated every existing Physics component or implemented the planned Maths components.

## Source sampling and purpose of raster art

Read all family briefs and lesson decision rows. In addition to validating the current hashes of all 130 pages, inspected actual text/cases in these nine pages under `C:/Users/kygs/hscscience/subjects/`. This is a purposive sample of art decisions and risks, not a full scientific or assessment review of 130 lessons.

| Actual source sample | What the sample supports |
| --- | --- |
| physics/year12/module5/lesson05.sa.html:381, 386, 446 | Rolling-ball ramp with horizontal exit and measurement apparatus. The plan correctly holds for a real ramp/support reference instead of treating a spring-launcher manual as its construction authority. Constant launch-speed control remains a dependency. |
| physics/year12/module6/lesson02.sa.html:161, 167, 327 | Electron deflection case and a specific plate-region question. The art plan must use a verified electrostatic teaching tube and keep trajectory/drift exact in code; it does not fabricate Thomson's historical apparatus from a generic modern device. |
| physics/year12/module6/lesson16.sa.html:249 to 252 | Shorted cage bars, no powered rotor leads and slip question. The proposed independent cage detail can identify real conductors and end rings; code must carry field rotation, induced currents and relative speeds. |
| physics/year12/module6/lesson18.sa.html:300, 314, 412 to 431 and the mapped magnetic-analysis section | Selector/analyser functions require exact functional diagrams. A hardware exterior cannot establish a crossed-field selector or magnetic-sector path. The plan correctly treats a selector as a selected preparation option. |
| physics/year12/module6/lesson19.sa.html:250 to 254, 383 | Copper/plastic pipe comparison and longitudinal cut. The proposed intact/slotted pair has an actual teaching purpose: identify the interrupted conducting path. It must not imply all residual local currents vanish or provide experimental timing evidence. |
| maths-advanced/year12/applications-of-calculus/lesson09.sa.html:504 to 529 | A 24 cm square sheet, equal corner cuts and V = x(24-2x) squared. The optional box can establish the physical object; exact net/fold/domain/optimum remain code. The prompt does not supply invented tabs or a lid. |
| maths-advanced/year12/financial-mathematics/lesson04.sa.html:406, 443, 480, 509 | The same 45000 delivery van under 15% flat-rate and reducing-balance models. Keeping one unchanged object avoids portraying depreciation as physical damage, shrinking or different vehicles. |
| maths-advanced/year12/financial-mathematics/lesson16.sa.html:341, 392 and worked loan case | Rate terminology requires a separate selected-script check: the source's annualisation instruction and effective-rate definition are not interchangeable. The plan properly holds its numerical/rate claims for review; a car image must not lend authority to an unchecked financial answer. |
| maths-advanced/year12/sequences-and-series/lesson01.sa.html:454, 478, 502 | Initial balance, year-end term, sum of snapshots and separate car depreciation case. The plan correctly reserves indexing and money relationships for code rather than treating a collection of balances as extra spendable wealth. |

The horizontal-launch and secant bridges are coded-only, consistent with the independently reviewed first packs. Their missing teaching work is paired model-based motion or a limiting secant construction, not more illustration. This is a useful priority choice. The apparatus families propose recognisable physical construction where a schematic alone may not identify the equipment. Their prompts do not claim that a static cutout teaches the mechanism by itself. The Maths box/vehicle families are conditional context and can be omitted if they add no useful recognition or contrast.

## Readiness, scientific risks and reuse

Verified family readiness distribution: 13 `needs-reference`, 1 `prompt-ready-candidate`, 2 `reuse-review` and 2 `needs-selected-scene`. Priorities are 11 P1 and 7 P2, with no P0 illustration invented for the predominantly coded first lessons. A reference or selection hold is appropriate here, not a plan defect.

The only controlled edit is `ph-eddy-tube/tube-slotted`, derived from `tube-intact`. It requires an inspected intact base, an all-the-way longitudinal slot, fixed camera/framing/unchanged material and registered feature checks. Independent generations are not accepted as aligned. Other multi-state families explicitly identify independent apparatus/detail cameras or composited components. They do not masquerade as aligned assembly transitions. The magnet/coil pair still needs endpoint, axis and coil-centre registration after generation.

All 18 family prompts keep formulas, labels, readings, essential graph geometry and scientific state changes in code. The higher-risk apparatus prompts preserve useful distinctions: DC split commutator versus AC slip rings, stationary stator versus rotating field, cage rotor without powered contacts, lamination insulation, electrostatic plates versus television magnetic deflection, and device-specific detector construction. Their unresolved manufacturer/museum/primary references remain binding. This review did not inspect every cited external reference image and does not clear those holds.

The stellar and particle-detector families explicitly separate illustration from observation. Generated remnant morphology cannot prove a progenitor type, invented tracks cannot replace Anderson's observation, and ATLAS/CMS structures must not be mixed. Keep these conditions through later selected-scene reviews, rather than assuming a good-looking cutaway is evidence.

Independently viewed `public/assets/chemistry/m8-mass-spectrometer-v1.png`. It is a painted modern exterior instrument casing with inlet-like hardware, a blank screen and vents; it exposes no validated selector/analyser beam geometry. Appearance does not establish a magnetic-sector design or a particular instrument model. It remains suitable only for conditional generic instrument recognition until reference/type and scene fit are resolved. The plan's `inspected: false` records the author's inventory-only state; this reviewer observation does not silently promote the frozen plan's readiness. No edge/alpha, native-size or apparatus-identity pass is supplied by viewing it.

The two Maths car candidates have author-recorded actual appearance inspection and current hash matches. The plan still requires exact scene-size, alpha/edge and occupant-detail review and treats the two colours as alternatives, not an aligned financial before/after pair. This reviewer did not independently inspect those two car images in this task.

## Actionable first-batch recommendation

Do not generate a bulk quota from the queue. Complete the paired-ball and secant code first for the selected starter lessons; this bank supplies no missing P0 raster for them.

If root selects a first image-generation demonstration, the strongest currently specified candidate is the small `ph-eddy-tube` base/edit experiment. Select its exact eddy-current comparison first. Generate and inspect the intact base, then edit that exact accepted base for the slot. Check complete rims, bore, visible full-length nonbridged gap, alpha edges, registered unchanged anchors and slot readability at actual scene size. Add magnet motion and illustrative current loops in code only after choosing the geometry. Do not promise measured fall times. This is a conditional recommendation, not approval to generate for an unselected lesson.

For a first later apparatus batch, choose the earliest needed apparatus scene and obtain its actual construction reference before commissioning. The rolling-ramp scene is a useful focused candidate if that practical is selected, but the spring-launcher alternative does not clear its hold. Avoid commissioning all motor/generator plates merely because they share priority P1.

For Maths, first select the open-box scene and build/check its net and fold. Commission the optional assembled-box context only if the change from card to object still needs support. Review the existing car candidates before any fallback car generation. Keep the delivery van and other financial context behind scene selection and exact numerical-language review.

The next generation batch must record prompt/reference provenance, built-in image-tool output paths, hashes, native dimensions, alpha/edge checks, base/edit registration, subject review, scene-size fit and archive/restore evidence. Exact integration must then demonstrate a teaching use during playback. None of those gates is replaced by this planning review, structural validation, a filename, an inventory count or a technically detailed prompt.
