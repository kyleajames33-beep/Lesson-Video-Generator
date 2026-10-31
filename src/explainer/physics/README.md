# HSC Physics visual library

This visual library supports the site's Year 12 Physics Modules 5 to 8 course. It keeps the existing projectile pilot and adds reusable SVG families, a silent interactive player, module samples, desktop and phone stills, and an exact site-lesson support map. It does not alter the lesson registry or the legacy renderer.

Scope reference: [NESA Physics Stage 6 Syllabus (2017)](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017). The site inventory is seventy lesson pages. Lesson support here does not establish that every syllabus action, practical or explanation has been implemented or approved.

## Open the library

Run from the repository root:

```powershell
python -m http.server 8783 --bind 127.0.0.1 --directory src/explainer/physics/artifacts/site
```

Open `http://127.0.0.1:8783/`. Select a visual, play at 1x and switch to the phone layout. The original families run for twelve seconds. The mechanics reasoning details use sixteen to thirty-two seconds so equations and results have reading holds. The four original module samples show three families each, for twenty-four seconds per module. A separate thirty-two-second preview derives the level-ground range. Motion timings are illustrative unless the scene gives a physical time scale.

## Asset families and support map

| Module | Families | Site pages | Documentation |
| --- | ---: | ---: | --- |
| 5: Advanced mechanics | 22, plus the original projectile kit | 18 | [Mechanics](module5/README.md) |
| 6: Electromagnetism | 12 | 21 | [Electromagnetism](module6/README.md) |
| 7: The nature of light | 10 | 14 | [Light and relativity](module7/README.md) |
| 8: From the Universe to the atom | 10 | 17 | [Modern physics](module8/README.md) |

The machine-readable [course map](artifacts/site/course-map.json) records the exact source path, supporting asset IDs and explicit limits for every page. Revision lessons reuse relevant families. A family can support a lesson while leaving a specific mechanism or worked example as a gap. Those gaps stay visible in the player and the module documentation.

The ten added mechanics families cover [component resolution and projectile reasoning](module5/projectile-details/README.md), [measurement uncertainty](module5/practical-details/README.md), and [moment arms, equilibrium and conical or banked motion](module5/rotation-details/README.md). They extend the existing asset families. The original four module MP4s are preserved. Deep links such as `http://127.0.0.1:8783/#m5-range-derivation` select a particular visual.

## Design and reuse

The shared layer in `course-kit.tsx` provides unit-bearing graph axes, bounded vector heads, labels, panels, field symbols and plotted endpoints. Diagrams use a 1100 × 620 local stage. Desktop frames render at 1920 × 1080. The phone frame rearranges the heading and surrounding information and renders at 390 pixels wide, preserving the diagram's aspect ratio. Individual complex diagrams may still need a closer view in a selected lesson.

The library retains the light editorial visual system, the locally hosted Inter Tight face and the Physics colour tokens. Coded geometry carries forces, connections, wavelengths, units and signs. Existing painted Biology and Chemistry artwork does not carry these mechanisms, so it was not used as a substitute.

All components accept a deterministic `progress` value. Remotion supplies frame time in `course-preview.tsx`; no CSS animation or wall-clock timer drives a scientific change. Each registered family has a learner focus, entry knowledge, exact site lesson links and model limits. Model parameter sweeps are distinguished from physical-time simulations where the distinction matters.

## Verification

Run the scoped TypeScript check and the four actual-model verifiers:

```powershell
node node_modules/typescript/bin/tsc --project src/explainer/physics/tsconfig.json
node src/explainer/physics/module5/verify.mjs
node src/explainer/physics/module6/verify.mjs
node src/explainer/physics/module7/verify.mjs
node src/explainer/physics/module8/verify.mjs
node src/explainer/physics/verify-course.mjs
```

Rebuild the gallery, stills and silent module samples:

```powershell
node src/explainer/physics/render-course.mjs
python src/explainer/physics/contact-sheets.py
```

`--skip-video` makes a layout pass; `--only=m5` through `--only=m8` bounds a repair pass. `--ids=` narrows it to specific assets. `--sample=mechanics-details` exports the separate range-reasoning preview. `--gallery-only` rebuilds the player and support map. The renderer copies only the required font to its generated public directory. The still audit uses actual browser font metrics to report out-of-stage labels and overlapping text boxes. Native still inspection checks apparatus, direction, line clearance and consistency in addition to those measurements.

The current review state is recorded in [production-state.json](production-state.json). Source, model, still and media checks are distinct from continuous playback. Browser access became available for spot checks of the exact range preview at 1x. These checks do not establish continuous human motion review, which remains pending. No narration, speech generation, full-lesson export, publication or full-lesson teaching approval is included in this asset library.

## Bounded file ownership

Root owns the common primitives, mechanics, catalog, player, integration, rendering and final fixes. Sol 6.1 authoring roles own `module6/`, `module7/` and `module8/` respectively. Reviews are assigned to a different author or root. All assets, generated evidence and local task state are kept under `src/explainer/physics/` for this task's bounded scope.
