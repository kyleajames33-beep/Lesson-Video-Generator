# Physics and Maths image-bank handoff

25 October 2026. Planning complete for the stated first pass. [Independent review](../../checks/codex-interim-image-bank-review.md) found no blocking planning issue. This is a reviewed brief/queue, not generated artwork or approval of any lesson implementation.

Latest execution: [the first copper-tube batch](eddy-tube-first-batch.json) records seven built-in image calls and two selected white-background shape candidates. [Independent asset review](../../checks/physics-eddy-tube-first-asset-review.md) found plausible intact/slot construction, but the generated edit changes painted texture. Background cleanup awaits the user's editing-method choice; seamless transition and scene-use approval remain pending. The [candidate checkpoint](eddy-tube-first-batch-checkpoint.json) preserves all seven exact raw outputs locally.

## What is mapped

- 70 Year 12 Physics lessons.
- 60 Maths Advanced lessons: 59 Year 12 pages plus the Year 11 calculus bridge.
- 103 coded-only lesson decisions; 27 lesson rows with raster support or a reuse candidate.
- 18 reusable image families and 26 proposed views/states, including reuse candidates. Exactly 1 state depends on an earlier base edit.
- 793 existing Biology/Chemistry PNG files inventoried, including versions and variants. They are not 793 approved asset families.
- The frozen planning baseline records zero image calls; subsequent execution is recorded separately in the first-batch log above.

The state count is a planning upper bound before reuse and scene selection. It is not an order for 26 new generations, a cost estimate or a target to inflate. The first horizontal-launch and secant packs need new coded motion and geometry; neither needs a new raster simply to fill its scene. Other Maths courses, other Year 11 routes and GCSE are outside this pass.

## Open the work

- [Lesson-by-lesson map](lesson-image-map.md): every source lesson, image decision, family link and teaching/source reason.
- [Copyable generation briefs](generation-prompts.md): state prompts, base/edit relationships, invariants, coded overlays, acceptance checks and dependencies.
- [Machine-readable generation queue](generation-queue.json): exact rows, input hashes, families and priority-sorted state jobs.
- [Physics author plan](physics-plan.json) and [Maths author plan](maths-plan.json).
- [Cross-subject reuse observations](reuse-review.md): four directly inspected plates and their limits. The independent review also inspected the mass-spectrometer exterior.
- [Source inventory](source-inventory.json), [raw raster inventory](existing-raster-inventory.json) and [brief contract](brief-contract.md).

## Readiness, not approval

| Family readiness | Count | Meaning |
| --- | ---: | --- |
| needs-reference | 13 | Select and inspect the actual apparatus/reference before generation. |
| prompt-ready-candidate | 1 | Prompt is specified; scene choice and generated-output checks still apply. |
| reuse-review | 2 | Inspect and select existing artwork before ordering a replacement. |
| needs-selected-scene | 2 | Choose the teaching scene and exact role before commissioning. |

## First execution order

1. Keep the two reviewed starter packs on their coded paired-motion/secant implementation path. Their missing capabilities are not illustration shortages.
2. For a first small raster calibration, select the Module 6 eddy-current comparison (`ph-eddy-tube`). Generate the intact tube, inspect its bore/rims/wall and silhouette, then edit that exact base into the full-length slotted tube. Check anchors, unchanged structures, alpha/edges and slot visibility at scene size. Keep magnet position, current paths and motion comparisons coded and independently checked. Do not claim all local eddy currents disappear.
3. Resolve the reference-dependent apparatus families by selected lesson priority. The ramp setup needs the actual rolling-ramp geometry; a spring-launcher manual is an alternative apparatus, not a substitute reference. Keep electrostatic teaching-tube construction separate from commercial television CRT assumptions.
4. Review existing car and mass-spectrometer context candidates before generating replacements. Keep car appearance stable while coded financial quantities change. An exterior instrument picture does not identify its internal analyser.
5. Re-evaluate the open-box and delivery-van contexts only when their exact Maths scenes are selected. Coded dimensions, nets, rates, values, graphs and time indexing remain the reasoning layer.

Existing production requirements apply to selected lesson inputs. No bulk generation, scene integration, speech or video export has happened.

## Family index

| ID | Teaching object/context | Priority | Readiness | States | Lesson uses |
| --- | --- | --- | --- | ---: | ---: |
| maths-open-box-context | An open box made from a square card | P1 | needs-selected-scene | 1 | 1 |
| ph-ac-generator | Rotating-coil AC generator apparatus | P1 | needs-reference | 1 | 2 |
| ph-dc-motor | Brushed DC motor construction | P1 | needs-reference | 1 | 3 |
| ph-eddy-tube | Intact and longitudinally slotted copper tube | P1 | prompt-ready-candidate | 2 | 1 |
| ph-electron-tube | Electrostatic electron-deflection teaching tube | P1 | needs-reference | 1 | 2 |
| ph-induction-motor | Squirrel-cage induction motor and rotor | P1 | needs-reference | 2 | 3 |
| ph-magnet-coil-bench | Magnet, stationary coil and current indicator | P1 | needs-reference | 2 | 2 |
| ph-optics-bench | Optical source, aperture holders and screen context | P1 | needs-reference | 1 | 2 |
| ph-ramp-apparatus | Horizontal ramp and measurement apparatus | P1 | needs-reference | 1 | 1 |
| ph-spectral-sources | Filament and low-pressure gas source context | P1 | needs-reference | 2 | 3 |
| ph-transformer-core | Transformer construction and insulated laminations | P1 | needs-reference | 2 | 2 |
| maths-car-asset-context | One car, different financial descriptions | P2 | reuse-review | 1 | 2 |
| maths-delivery-van-context | Delivery van as an unchanged depreciating asset | P2 | needs-selected-scene | 1 | 1 |
| ph-mass-spectrometer-context | Mass-spectrometer physical context reuse review | P2 | reuse-review | 1 | 1 |
| ph-particle-detectors | Cloud chamber and collider detector construction | P2 | needs-reference | 2 | 2 |
| ph-scattering-apparatus | Gold-foil scattering apparatus context | P2 | needs-reference | 1 | 1 |
| ph-stellar-outcomes | Different stellar remnants as illustrative context | P2 | needs-reference | 2 | 2 |
| ph-torsion-balance | Laboratory torsion balance | P2 | needs-reference | 2 | 1 |

## Repeat and inspect

From repository root, `node scripts/check-image-bank-plan.mjs` validates the 130 current source hashes, exact lesson coverage, bidirectional family links, state parent chains and existing reuse hashes, then rebuilds the queue and Markdown views. It normalises alignment text to arrays and reuse notes to a common fit field without changing their content. A structurally valid queue is not a science or appearance pass.

`node scripts/build-image-bank-inventory.mjs` refreshes the two inventories from actual site/source files. Regeneration changes the baseline; reconcile the subject plans and repeat independent review if source hashes, scope or scientific selections change. Preserve the current exact review evidence.

For later generation, use the built-in image tool and non-destructive base/edit files. Record actual native resolution, alpha, prompts, references, output paths, SHA-256, alignment/feature anchors and scene-size observations. Enlarging a bitmap does not add native detail. Keep apparatus recognition and mechanism correctness separate. Labels, equations, measurements, field geometry, graphs, current directions and assessment answers stay coded. Generated output needs actual appearance, subject and intended-use review before it becomes a selected video asset.
