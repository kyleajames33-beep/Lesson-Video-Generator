# Independent Physics visual-kit review

25 October 2026. Read-only review of all 54 registered families: 22 Module 5, 12 Module 6, 10 Module 7 and 10 Module 8. Read the project rules, Remotion skill, library README, production state, catalog, module/detail READMEs, every registered component and model, common graph/vector layer, progress mapping and preview integration. No kit, source, media, board or status file was changed. This report is the only output.

No new blocking calculation, sign or model error was confirmed within the stated models. One diagram-role ambiguity should be clarified before lesson reuse. The deliberate limits already documented in the library are not reported as new defects.

## Actionable clarification

**m8-accelerator: distinguish the orange connector from an electric-field vector.** Source `src/explainer/physics/module8/index.tsx:195` to 206 places the cavity on the ring's right edge and draws an unlabelled orange arrow horizontally from `(440,265)` to `(535,265)`, beside `RF cavity: E does work`. This is visible in the existing desktop and phone stills. The ring tangent at that location is vertical. If this arrow is read as the accelerating electric field or force, it points perpendicular to the beam and does not explain energy gain. It could instead be an apparatus connector; the code does not identify its role. This is an interpretation ambiguity, not a confirmed claim that the author intended a radial accelerating field.

Minimal action: label/separate the connector, or remove it. If it is intended as an accelerating-field arrow, make it longitudinal to an explicitly identified beam segment. Acceptance: the illustration must not ask the learner to interpret the same arrow as both a diagram connector and an energy-adding force. No complete RF synchronisation model is requested; that gap is already documented. CERN describes RF cavities supplying timed electrical impulses to passing bunches: [CERN RF cavities](https://home.cern/science/engineering/accelerating-radiofrequency-cavities).

## Source checks across the 54 families

| Set | Families | Checks made and result |
| --- | ---: | --- |
| Module 5 base | 12 | Projectile position/time/components, equal-height angle/range comparison, torque sign, tangential/inward vectors, bank-force geometry, variable-speed loop energy/tension, inverse-square strength, signed orbital/potential/escape energy and Kepler focus/area/time. No additional error confirmed. |
| Module 5 projectile details | 4 | Component norm and common vector scale; launch root versus landing root; common time at the wall and one height datum; both target-angle roots. Staged equation/result boundaries agree with their cases. No additional error confirmed. |
| Module 5 practical details | 2 | Mean/half-range, exact squared measurement endpoints, zero-intercept compatible slopes, inverse speed relation and endpoint reading holds. Simulated readings and illustrative uncertainty are explicit. No additional error confirmed. |
| Module 5 rotation details | 4 | Perpendicular foot and right angle, signed beam moments and vertical force balance, conical radius/height/tension projections, bank friction sign and capacity. No additional error confirmed. |
| Module 6 | 12 | Electron electric-force sign; energy/potential signs; positive-ion curvature; selector cancellation; wire fields and attraction; coil force couple; flux/emf phase; rod current/drag/power; transformer ratio/loss; back-emf trend; slip and eddy-entry sense. No additional error confirmed. |
| Module 7 | 10 | EM phase/sign and rightward E cross B; finite-slit envelope/interference/grating factors; Malus relation; wavelength redshift; light-clock triangle; simultaneous length measurement; transformed event order; relativistic/classical graph scale; photoelectric threshold and energy endpoint. No additional error confirmed. |
| Module 8 | 10 | Expansion separations/wavelength ratio, schematic stellar branches, logarithmic HR coordinates, fractional spectral shift, iron-group binding curve, repulsive scattering paths, hydrogen energy spacing/density distinction, population decay, charges/opposite photon momenta and ring steering. No additional model error confirmed; accelerator arrow role noted above. |

The scoped TypeScript check (`--noEmit`) and all seven existing actual-model verifiers passed during this review: Modules 5 to 8 plus projectile, practical and rotation detail suites. These tests execute the actual models. They do not establish that every scientific statement or every frame is independently verified. `verify-course.mjs` was read but not run because it rewrites artifact evidence. All 47 recorded source SHA-256 values in the existing `artifacts/verification.json` match the current source bytes.

## Existing still evidence inspected

Opened all ten existing contact sheets: desktop and phone for Modules 5 to 8, plus desktop and phone mechanics-detail sheets. This samples all 54 families at their saved contact-sheet states. Opened these existing stills separately at full image size: `m6-selector-analyser-desktop`, `m7-em-geometry-desktop`, `m8-accelerator-desktop`, `m8-quantum-atom-phone` and `m5-conical-pendulum-phone`. No new still or preview was rendered.

The selected selector forces/curvatures and EM field symbols agree with their source signs. The probability-density and conical-projection labels preserve the stated distinction from trajectories/true angles. The accelerator still supports the arrow-role ambiguity above. Contact sheets reduce images and do not establish physical-device readability. All observations are source/still observations, not continuous motion or human listening.

## Integration constraints retained

- These 54 families are supporting visuals for 70 site pages, not 54 completed narrated lessons or reviewed syllabus coverage. The exact apparatus, practical and worked-example omissions remain those in `course-map.json` and the module READMEs.
- Preserve the intended family duration and progress mapping. `course-preview.tsx:17` uses each specification's duration, `catalog.ts` assigns the mechanics detail durations, and `timing.ts:1` to 7 adds initial/final holds. `CourseVisualFrame` also accepts an override. A lesson parent that overrides duration can shorten required equation holds even though model equations remain correct. The existing 8-second module samples select base families only; they are not evidence that the longer mechanics details fit eight seconds.
- Parameter sweeps are not physical acceleration histories. Examples include circular-orbit comparisons, selected banked speeds, rod-frame comparisons and the prescribed-speed motor. Preserve those existing boundaries during narration integration.
- Keep explicit conditions where omitting them changes the result: level-ground range; negligible drag/uniform g; taut loop string; positive charge/field sense; ideal/loaded transformer and fixed line power; coherent equal-slit illumination; inertial light clock; coordinate rather than photographic length; expected rather than exact finite-population decay.
- Continuous motion at playback speed, lesson-specific narration/caption cues, student learning, physical-device readability and release review remain pending as already documented. This audit adds no listening, full-media playback, teaching or release pass.

## Exact source and image fingerprints

The 47-file comparison above is pinned by the existing verification record below. Key independently read component/model files are additionally pinned here. Paths are relative to `src/explainer/physics/`.

| File | SHA-256 |
| --- | --- |
| `README.md` | `0b296b4ef554d2c05987f5d5964d943a413ac93873c70dbc32c1c668333f139c` |
| `production-state.json` | `6691614e3e5727eed3fac5928c939c397c24adcbb05c5bf96fa68118ee40a589` |
| `catalog.ts` | `69b0a724ddde53f3ecd8a8963aa92a02726c9beb97ecfaa005ae07bcf02e4b33` |
| `course-kit.tsx` | `f686b2bce3ecda9c02ad6b5796e9aab4af58ebbf7f0a63f74bac1ccf6be8e4ee` |
| `course-preview.tsx` | `55dbdfd15291103a8ec150e5db6f1f3fe443725252439daf14f0e840de74b2de` |
| `timing.ts` | `6d5bd65e2dd133b246823096c6f6075b7b7f9f456861ab5d2cd36e497e428312` |
| `module5/index.tsx` | `869d3df0daa77ee7c80e7aa1a734ad48de3a438257f2ba31a3281a5e28b062a0` |
| `module5/model.ts` | `7dc2bd1777e7b5b5ba9d61073a010241b5ad89e7ff12993a882d681588d77585` |
| `module5/projectile-details/index.tsx` | `ed98a25e08737a87245621f35e437a019243c2bd76671c76beda4e1ea54f5d7b` |
| `module5/projectile-details/model.ts` | `e2f91f3dcca85cc847a864531fe2c1453e1144104e079a2e66f3c0c60690360c` |
| `module5/practical-details/index.tsx` | `468bd6e9f2ce6b0882b8cc0d851c593ab1c0e97bac9f0d6c0dfcb4085170289d` |
| `module5/practical-details/model.ts` | `3de0b3c7a7463c3d7d51c0777b13a82511447104a9d525028f05cadbb1d3901d` |
| `module5/rotation-details/index.tsx` | `234556ef9873edee76d04d87a26fbc56e9da527535435cb0e9fb42fd8ac74022` |
| `module5/rotation-details/model.ts` | `365123f8d85a2bc5068603f2a144334f711dd06aadea1644824afe6c32abd5d1` |
| `module6/index.tsx` | `22d6290d8aed218f8264fe52ec6656ec20d44197b9438d085b92ceb6fd0489a5` |
| `module6/model.ts` | `70b95d21cbaa7f6731aa323e35bac38393894ba0f177ef3b956673a1cc4a4acd` |
| `module7/index.tsx` | `e9938da3b5aa3989e5778ac26872292bb7b54e02da102e114a3de2cc511d8bea` |
| `module7/model.ts` | `fec56ebe1c914cc1751dfc2c386ea8da609c14fea91309accb01094111c0cc13` |
| `module8/index.tsx` | `9f7cc1dfbe507d13ad2fbd5227c76a78cf13f9f79e1e1eaaaf3d877187b03fce` |
| `module8/model.ts` | `b53ba322fec10fa7ce89a39e641a1bd025d62b5fe80e4a3507b2e895f5d0a45d` |
| `artifacts/verification.json` | `9321174dfd2417677353d62736f5302df51e4d2c7957f73fbcecba5207448b97` |

Inspected contact-sheet fingerprints:

| File | SHA-256 |
| --- | --- |
| `artifacts/site/checks/module5-contact.png` | `3c8d1c77132f3615ed83a1f54f24998e14adf8e186e78dab6d29f6fc5fe32012` |
| `artifacts/site/checks/module5-phone-contact.png` | `6588ffee1826ba4865429e1952ac1b8180c59fc778c1c1155c2ff50fa4dae484` |
| `artifacts/site/checks/mechanics-details-desktop-contact.png` | `dcbf14d5f1f4b7fe15ca08c9cb9f898700b9ad673237024e42655b78c2f7ecac` |
| `artifacts/site/checks/mechanics-details-phone-contact.png` | `90b9a59559d623a158297625fad1f9fffea6fd625fa13e75959f47b90adf0658` |
| `artifacts/site/checks/module6-contact.png` | `f40bbd2cf8141cc0f3c4e085b8bf9e3f8a841d4918515934ef38683fd8b5a6ed` |
| `artifacts/site/checks/module6-phone-contact.png` | `0508d81a068d36a852761733ae1bbf4c13a225634279b6c1d52ff7e185728134` |
| `artifacts/site/checks/module7-contact.png` | `f7f34105d4d57bb8fc2b0c355381b815c632e0b42da9705ff238112f49cefde8` |
| `artifacts/site/checks/module7-phone-contact.png` | `47702d5a3714d99a6dcb9457e0db4d7df8f2aab8365f509fcefc66853c763763` |
| `artifacts/site/checks/module8-contact.png` | `8368accc6f8e2c80cd91500a57084baf536636bfb0417236d2f4ba81eca0f10f` |
| `artifacts/site/checks/module8-phone-contact.png` | `31187c96301ca33804dcc2334904fe34137162f400acf8c4fbd94b18a87bec3e` |
