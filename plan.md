# Asset Generation Plan — Chemistry Y11 Module 3 (Batch 2)

## Objective
Generate 71 educational vector illustrations for HSC Science Chemistry Y11 Module 3.

## Stage 1 — Parallel Image Generation (10 sub-agents, one per lesson/checkpoint)
Each sub-agent generates all images for its assigned lesson/checkpoint using the `generate_image` tool.
- All images: transparent background, 1:1 ratio, PNG format
- Universal style prefix applied to every prompt
- Output to: `public/assets/hscscience/chem-y11-m3/<lessonId>/<name>.png`

### Agent assignments:
| Agent | Scope | Count | Output dir |
|-------|-------|-------|------------|
| Gen_L6 | Lesson 6 — Indigenous Detoxification | 7 | l6/ |
| Gen_L7 | Lesson 7 — Metal Activity Series | 8 | l7/ |
| Gen_L8 | Lesson 8 — Redox & Oxidation States | 8 | l8/ |
| Gen_L9 | Lesson 9 — Galvanic Cells | 6 | l9/ |
| Gen_L10 | Lesson 10 — Inert Electrodes | 6 | l10/ |
| Gen_L11 | Lesson 11 — Collision Theory | 6 | l11/ |
| Gen_L12 | Lesson 12 — Factors Affecting Rate | 6 | l12/ |
| Gen_CP1 | Checkpoint 1 — Predicting Products | 8 | cp1/ |
| Gen_CP2 | Checkpoint 2 — Metal Reactivity | 8 | cp2/ |
| Gen_CP3 | Checkpoint 3 — Rates & Synthesis | 8 | cp3/ |

## Stage 2 — Asset Registration
After all images are generated, update `src/assets/index.ts` to register all 71 assets (replacing placeholder lines where applicable).
