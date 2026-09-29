# Biology Year 11 (2025 syllabus): one video per site lesson

Kyle's decision (2026-09-29): the new-syllabus Biology Year 11 course on the site
(`kyleajames33-beep/Teaching-APP`, `subjects/biology/year11/`, three focus areas × 25
lessons) gets **one video per site lesson**, 75 in all, in the diorama style. Scripts only:
Kyle generates the voiceover with the ElevenLabs scripts on his own machine
(`docs/biology-voiceover-runbook.md`).

The 22 earlier Year 11 videos (built 2026-09-24 against the same 2025 focus areas, but
~10 min each and grouped differently) are **archived, not deleted** in
`archive/biology-y11-2026-09/`. They are outside `src/data/`, so they no longer register
compositions. Reuse their scripts, worked examples and diagram configs wherever they
match a site lesson (column "Reuse from"), but **the site lesson is the source of truth**
for what each video teaches.

## Conventions

- File: `src/data/biology-y11-m<FA>-l<NN>-<slug>.json`; `module: "Module <FA>"`,
  `lesson: "Lesson <N>"`. So FA1 L07 → composition `Biology-Y11-M1-L7`, matching
  site lesson 07 so each page can embed its own video later.
- `syllabusVersion: "Biology 11–12 (2025)"`; list the site lesson's NESA 2025 content
  points verbatim in `syllabusDotPoints` (NESA text: `.agents/syllabi/…` if present, else
  the site lesson's own syllabus box).
- Keep `syllabusNeutral: true` like the other Biology lessons (no year/module labels on screen).
- Length: about 5–7 min (usually 7–10 scenes). Follow `docs/gold-standard-lesson-reference.md`,
  `docs/lesson-reference-style.md` and `docs/diorama-system.md` (concept scenes carry
  diorama diagrams; reuse Biology Y12 kinds such as cells, DNA and immune where they fit).
- `npm run validate:lessons` warns when a voiceover is over its time budget. Treat each
  warning as work to fix.

## Lesson map and lane ownership

| Video | Site lesson title | Site source (Teaching-APP) | Reuse from | Lane |
|---|---|---|---|---|
| M1 L01 | Prokaryotic vs Eukaryotic Cells | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson01.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l1-cell-structure.json` | bio-y11-m1a |
| M1 L02 | Inside the Eukaryotic Cell | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson02.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l1-cell-structure.json` | bio-y11-m1a |
| M1 L03 | Plant vs Animal Cells | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson03.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l1-cell-structure.json` | bio-y11-m1a |
| M1 L04 | Prokaryotic Cell Structures | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson04.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l1-cell-structure.json` | bio-y11-m1a |
| M1 L05 | Using the Microscope | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson05.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l2-microscopy.json` | bio-y11-m1a |
| M1 L06 | Microscopy & Scientific Understanding | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson06.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l2-microscopy.json` | bio-y11-m1a |
| M1 L07 | The Fluid Mosaic Membrane | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson07.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l3-fluid-mosaic-membrane.json` | bio-y11-m1a |
| M1 L08 | Passive Transport | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson08.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l4-passive-transport.json` | bio-y11-m1a |
| M1 L09 | Tonicity & Cells | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson09.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l4-passive-transport.json` | bio-y11-m1a |
| M1 L10 | Active & Bulk Transport | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson10.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l5-active-and-bulk-transport.json` | bio-y11-m1a |
| M1 L11 | Exchange & Concentration Gradients | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson11.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l4-passive-transport.json` | bio-y11-m1a |
| M1 L12 | Raw Materials of the Cell | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson12.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l6-cell-requirements.json` | bio-y11-m1a |
| M1 L13 | Cellular Respiration | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson13.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l2-photosynthesis-respiration.json` | bio-y11-m1b |
| M1 L14 | Photosynthesis | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson14.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l2-photosynthesis-respiration.json` | bio-y11-m1b |
| M1 L15 | Enzymes: Biological Catalysts | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson15.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l7-enzymes.json` | bio-y11-m1b |
| M1 L16 | Enzyme Models | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson16.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l7-enzymes.json` | bio-y11-m1b |
| M1 L17 | What Affects Enzyme Activity (Practical) | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson17.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l7-enzymes.json` | bio-y11-m1b |
| M1 L18 | Reading Enzyme Graphs | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson18.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l7-enzymes.json` | bio-y11-m1b |
| M1 L19 | The DNA Double Helix | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson19.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L20 | DNA Replication (Practical) | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson20.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L21 | DNA in Prokaryotes vs Eukaryotes | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson21.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L22 | Somatic vs Gametic Cells | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson22.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L23 | The Cell Cycle & Mitosis | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson23.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L24 | Meiosis | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson24.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M1 L25 | Why Cell Division Matters | `subjects/biology/year11/fa1-cells-as-the-basis-of-life/lesson25.sa.html` | — (new; build from the site lesson) | bio-y11-m1b |
| M2 L01 | Levels of Cellular Organisation | `subjects/biology/year11/fa2-cells-to-systems/lesson01.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l1-levels-of-organisation.json` | bio-y11-m2a |
| M2 L02 | Surface-Area-to-Volume Ratio | `subjects/biology/year11/fa2-cells-to-systems/lesson02.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l1-levels-of-organisation.json` | bio-y11-m2a |
| M2 L03 | From Organelles to Systems | `subjects/biology/year11/fa2-cells-to-systems/lesson03.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l1-levels-of-organisation.json` | bio-y11-m2a |
| M2 L04 | Plant Requirements | `subjects/biology/year11/fa2-cells-to-systems/lesson04.sa.html` | `archive/biology-y11-2026-09/biology-y11-m1-l6-cell-requirements.json` | bio-y11-m2a |
| M2 L05 | Conditions for Photosynthesis | `subjects/biology/year11/fa2-cells-to-systems/lesson05.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l2-photosynthesis-respiration.json` | bio-y11-m2a |
| M2 L06 | Changing Conditions on Photosynthesis | `subjects/biology/year11/fa2-cells-to-systems/lesson06.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l2-photosynthesis-respiration.json` | bio-y11-m2a |
| M2 L07 | Xylem & Phloem | `subjects/biology/year11/fa2-cells-to-systems/lesson07.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l3-plant-transport.json` | bio-y11-m2a |
| M2 L08 | Translocation in Phloem | `subjects/biology/year11/fa2-cells-to-systems/lesson08.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l3-plant-transport.json` | bio-y11-m2a |
| M2 L09 | Cohesion-Tension in Xylem | `subjects/biology/year11/fa2-cells-to-systems/lesson09.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l3-plant-transport.json` | bio-y11-m2a |
| M2 L10 | Factors Affecting Transpiration | `subjects/biology/year11/fa2-cells-to-systems/lesson10.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l3-plant-transport.json` | bio-y11-m2a |
| M2 L11 | Measuring Transpiration Rate | `subjects/biology/year11/fa2-cells-to-systems/lesson11.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l3-plant-transport.json` | bio-y11-m2a |
| M2 L12 | Inside Leaf, Stem & Root | `subjects/biology/year11/fa2-cells-to-systems/lesson12.sa.html` | — (new; build from the site lesson) | bio-y11-m2a |
| M2 L13 | Animal Organ Systems | `subjects/biology/year11/fa2-cells-to-systems/lesson13.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l1-levels-of-organisation.json` | bio-y11-m2b |
| M2 L14 | Human Digestion | `subjects/biology/year11/fa2-cells-to-systems/lesson14.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l4-digestion.json` | bio-y11-m2b |
| M2 L15 | Blood Through the Organs | `subjects/biology/year11/fa2-cells-to-systems/lesson15.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l5-blood-and-circulation.json` | bio-y11-m2b |
| M2 L16 | Arteries, Capillaries & Veins | `subjects/biology/year11/fa2-cells-to-systems/lesson16.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l5-blood-and-circulation.json` | bio-y11-m2b |
| M2 L17 | What's in Blood? | `subjects/biology/year11/fa2-cells-to-systems/lesson17.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l5-blood-and-circulation.json` | bio-y11-m2b |
| M2 L18 | Gas Exchange in the Lungs | `subjects/biology/year11/fa2-cells-to-systems/lesson18.sa.html` | `archive/biology-y11-2026-09/biology-y11-m2-l6-gas-exchange.json` | bio-y11-m2b |
| M2 L19 | The Nephron | `subjects/biology/year11/fa2-cells-to-systems/lesson19.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L20 | Renal Dialysis | `subjects/biology/year11/fa2-cells-to-systems/lesson20.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L21 | Feedback Systems | `subjects/biology/year11/fa2-cells-to-systems/lesson21.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L22 | Negative Feedback & Homeostasis | `subjects/biology/year11/fa2-cells-to-systems/lesson22.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L23 | Hypothalamus, Pituitary & Hormones | `subjects/biology/year11/fa2-cells-to-systems/lesson23.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L24 | Blood Sugar, Stress & Diabetes | `subjects/biology/year11/fa2-cells-to-systems/lesson24.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M2 L25 | Optimal Range & Tolerance Limits | `subjects/biology/year11/fa2-cells-to-systems/lesson25.sa.html` | — (new; build from the site lesson) | bio-y11-m2b |
| M3 L01 | Natural Selection | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson01.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l1-natural-selection.json` | bio-y11-m3a |
| M3 L02 | Selective Pressures | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson02.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l1-natural-selection.json` | bio-y11-m3a |
| M3 L03 | Human-Induced Selective Pressures | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson03.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l5-resistance.json` | bio-y11-m3a |
| M3 L04 | Evolution and Species Diversity | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson04.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l3-patterns-of-evolution.json` | bio-y11-m3a |
| M3 L05 | Australian Megafauna: Aboriginal Evidence | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson05.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l6-australian-megafauna.json` | bio-y11-m3a |
| M3 L06 | Monotremes and Marsupials | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson06.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l6-australian-megafauna.json` | bio-y11-m3a |
| M3 L07 | Modelling Natural Selection | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson07.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l1-natural-selection.json` | bio-y11-m3a |
| M3 L08 | Convergent and Divergent Evolution | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson08.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l3-patterns-of-evolution.json` | bio-y11-m3a |
| M3 L09 | Structural, Physiological & Behavioural Adaptations | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson09.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l2-adaptations.json` | bio-y11-m3a |
| M3 L10 | Water Balance in Plants (Practical) | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson10.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l2-adaptations.json` | bio-y11-m3a |
| M3 L11 | Ectotherms & Endotherms | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson11.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l2-adaptations.json` | bio-y11-m3a |
| M3 L12 | Water & Salt Balance in Aquatic Animals | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson12.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l2-adaptations.json` | bio-y11-m3a |
| M3 L13 | First Nations Use of Plant & Animal Adaptations | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson13.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l7-first-nations-knowledge-of-adaptations.json` | bio-y11-m3b |
| M3 L14 | Gradualism vs Punctuated Equilibrium | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson14.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l3-patterns-of-evolution.json` | bio-y11-m3b |
| M3 L15 | Antibiotic & DDT Resistance | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson15.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l5-resistance.json` | bio-y11-m3b |
| M3 L16 | Evidence from Fossils | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson16.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l4-evidence-for-evolution.json` | bio-y11-m3b |
| M3 L17 | Inferring Evolutionary Relationships from Sequences | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson17.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l4-evidence-for-evolution.json` | bio-y11-m3b |
| M3 L18 | Weighing the Evidence for Evolution | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson18.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l4-evidence-for-evolution.json` | bio-y11-m3b |
| M3 L19 | Features of an Ecosystem (Practical) | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson19.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l8-ecosystems-and-sampling.json` | bio-y11-m3b |
| M3 L20 | Comparing Ecosystems | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson20.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l8-ecosystems-and-sampling.json` | bio-y11-m3b |
| M3 L21 | What Shapes a Community | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson21.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l9-relationships-and-populations.json` | bio-y11-m3b |
| M3 L22 | Sampling Techniques: Quadrats & Transects (Practical) | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson22.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l8-ecosystems-and-sampling.json` | bio-y11-m3b |
| M3 L23 | Mark-Release-Recapture (Practical) | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson23.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l8-ecosystems-and-sampling.json` | bio-y11-m3b |
| M3 L24 | Relationships Between Organisms | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson24.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l9-relationships-and-populations.json` | bio-y11-m3b |
| M3 L25 | Carrying Capacity & Data Validity | `subjects/biology/year11/fa3-evolution-and-ecosystems/lesson25.sa.html` | `archive/biology-y11-2026-09/biology-y11-m3-l9-relationships-and-populations.json` | bio-y11-m3b |
