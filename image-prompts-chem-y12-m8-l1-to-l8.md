# Image prompts — Chemistry Year 12, Module 8 (Applying Chemical Ideas), Lessons 1–8

Save all generated PNGs (transparent, alpha channel) under:
`public/assets/hscscience/generated/`

## Summary: zero new image assets required

Every lesson in this batch was built **lean**, using **coded `DiagramConfig`
types** for its single visual (concept scene only). No `image` fields are
referenced by L1–L8, so **no PNG generation is needed** for these lessons to
render. This matches the catalogue's lean direction (≤1 visual per lesson,
prefer coded diagrams over per-scene imagery) and removes all ChatGPT
image-gen burden for this module.

The coded diagram per lesson:

| Lesson | Topic | Visual (coded diagram) | Scene |
|---|---|---|---|
| L1 | Acid-base titrations & indicators | `titrationSetup` | "What a titration actually does" |
| L2 | Gravimetric analysis | `flow` (Dissolve → Precipitate → Filter → Dry → Weigh) | "The big idea, the analyst's way" |
| L3 | Precipitation & qualitative analysis | `table` (anion / reagent / observation) | "The anion tests" |
| L4 | Spectroscopic analysis (UV-Vis & AAS) | `barChart` (absorbance vs concentration, calibration) | "The calibration curve" |
| L5 | Chromatography (TLC, column, HPLC) | `table` (technique / use / sensitivity) | "TLC, column and HPLC" |
| L6 | Water quality parameters & standards | `table` (parameter / type / indicates) | "What each parameter tells you" |
| L7 | Dissolved oxygen & BOD | `flow` (O₂ → MnO₂ → I₂ → S₂O₃²⁻ titre) | "The Winkler titration chain" |
| L8 | Heavy metal contamination | `flow` (Water → Plankton → Small fish → Predator) | "Bioaccumulation and biomagnification" |

All coded types above are already implemented (`titrationSetup`, `flow`,
`table`, `barChart`) — confirmed in `src/lesson/types.ts` and accepted by
`scripts/validate-lesson.mjs` (`supportedDiagramTypes`). No shared files were
touched.

---

## Optional hook images (NOT built — only if richer imagery is later wanted)

If the team later decides to add one photo-real hook image per lesson (the
heavier style), here are didactic, ready-to-use prompts. These are **optional**
— the lessons are complete and render without them. Each must be a **transparent
PNG with an alpha channel**, no embedded text, a clean instructional style that
matches the dark/doodled design system, and a concrete real-instrument/lab
scene (no abstract art).

### L1 — `titrationBuretteHook`
A clear glass burette clamped to a retort stand, delivering a single droplet of
colourless solution into a conical flask containing pale-pink liquid sitting on a
white tile. Side view, realistic laboratory glassware, soft studio lighting,
isolated on a fully transparent background, no text, no labels.

### L2 — `gravimetricCrucibleHook`
A white crystalline precipitate inside a porcelain crucible on an analytical
balance reading to four decimal places, with ashless filter paper folded beside
it. Realistic chemistry-lab still life, crisp focus on the crucible, transparent
background with alpha channel, no text.

### L3 — `qualitativeTestTubesHook`
A rack of four test tubes each showing a different precipitate colour — one white,
one green, one red-brown, one pale blue — against clean lab lighting. Realistic
glassware, distinct vivid precipitates, isolated on a transparent background,
no text, no labels.

### L4 — `aasInstrumentHook`
A benchtop atomic absorption spectrometer with its hollow-cathode lamp and a
small orange flame at the atomiser, a nebuliser tube feeding sample in. Clean
modern analytical instrument, three-quarter view, realistic, transparent
background with alpha channel, no text.

### L5 — `tlcPlateHook`
A developed thin-layer chromatography plate standing in a glass developing tank,
showing two separated spots at different heights above a baseline, solvent front
near the top. Realistic silica TLC plate, side-on view, transparent background,
no text, no labels.

### L6 — `waterSamplingProbeHook`
A handheld multi-parameter water-quality probe being lowered into a clear river,
digital sensor tip visible, riverbank softly blurred behind. Realistic field
monitoring scene, transparent background with alpha channel, no text.

### L7 — `winklerTitrationHook`
A conical flask of pale amber iodine solution mid-titration under a burette of
colourless sodium thiosulfate, a glass-stoppered BOD bottle beside it. Realistic
chemistry glassware, soft lighting, isolated on a transparent background, no
text, no labels.

### L8 — `biomagnificationFoodChainHook`
A simple side-profile food-chain silhouette set — plankton, a small fish, a
larger fish, and a predator bird — each tinted progressively more intensely to
suggest rising contaminant concentration. Clean instructional illustration,
transparent background with alpha channel, no text, no numbers.
