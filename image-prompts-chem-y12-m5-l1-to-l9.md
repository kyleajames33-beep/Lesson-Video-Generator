# ChatGPT image-creator brief — Chem Y12 M5 (Equilibrium and Acid Reactions), Lessons 1–9

One DIDACTIC hook image per lesson — a concrete lab scene a muted-volume
student can read, not abstract shapes. Paste one prompt at a time into the
ChatGPT image creator and save at the listed path. The lesson JSONs are
already wired to these camelCase asset names; register each name in
`src/assets/index.ts` and the asset registry.

> **Lean visual policy:** each lesson uses exactly ONE hook image (below)
> plus CODED Remotion diagrams on the concept scenes (table, barChart,
> energyProfile, flow, gibbsSpontaneity) — **no concept images needed.**
> Only the 9 hook images listed here require generation.

**Hard rules for every image:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard)
- NO text, letters, numerals, formulas, arrows-with-words, or labels anywhere
- Concrete lab apparatus / real chemistry, not abstract geometric shapes
- Chunky isometric 3D, matte, chem-green / amber / charcoal palette
- Match the reference: `public/assets/carbon-12-molar-mass-balance.png`
- End each prompt with: "The file must have true alpha-channel transparency
  so it composites cleanly onto a light slide background."

---

## L1 — `m5L1SparklingBottle`
Path: `public/assets/hscscience/generated/lesson-1-static-dynamic/m5L1SparklingBottle.png`
```
Chunky isometric 3D illustration, HSC chemistry. A sealed clear bottle of sparkling water standing upright on a soft ground plane, cap firmly on. Inside, a layer of pale liquid below and a clear gas headspace above; a steady stream of small soft-green bubbles rises through the liquid and clusters at the gas-liquid boundary, while a few identical bubbles near the surface appear to be sinking back in — suggesting equal two-way movement across the boundary. The bottle looks completely still and ordinary from outside. Soft contact shadow, matte finish, chunky rounded forms, soft light upper-left, 20-degree downward isometric tilt. NO text, numerals, or labels. A calm sealed bottle that is secretly busy at the molecular boundary — dynamic equilibrium. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L2 — `m5L2BurnVsHaber`
Path: `public/assets/hscscience/generated/lesson-2-reversibility-entropy/m5L2BurnVsHaber.png`
```
Chunky isometric 3D illustration, HSC chemistry. Two contrasting scenes side by side on one soft ground plane. On the LEFT, a chunky burning log or gas burner flame consuming its fuel completely, with only a small heap of grey ash beneath — a one-way, finished process. On the RIGHT, a chunky sealed industrial reactor vessel with thick rounded walls, half-filled with a mixture of two kinds of soft-green and amber gas particles coexisting, suggesting an ongoing two-way balance inside. The left scene reads "gone forever", the right reads "settled mixture". Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. One reaction finishes completely, the other settles at a balance. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L3 — `m5L3NitrogenDioxideTube`
Path: `public/assets/hscscience/generated/lesson-3-collision-theory/m5L3NitrogenDioxideTube.png`
```
Chunky isometric 3D illustration, HSC chemistry. A sealed chunky glass tube held in a chunky clamp on a retort stand, the tube half-submerged in a chunky beaker of iced water with rounded ice cubes floating. The gas inside the tube is shown as a soft gradient from a richer amber-brown at the top to a paler, almost colourless tone near the chilled lower section, suggesting the colour fading as it cools. Small soft contact shadows under the stand and beaker. Matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. Cooling a sealed brown-gas tube makes the colour fade — equilibrium on the move. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L4 — `m5L4ThreeStudents`
Path: `public/assets/hscscience/generated/lesson-4-analogies-misconceptions/m5L4ThreeStudents.png`
```
Chunky isometric 3D illustration, HSC chemistry. Three simple chunky rounded speech-bubble shapes floating in a row above a soft ground plane, each containing a tiny distinct molecular-balance motif: the first bubble shows two small particle clusters with equal-length curved two-way flow loops between them (correct dynamic balance); the second shows two clusters of exactly equal size sitting still (the "equal amounts" misconception); the third shows two clusters completely frozen with a small pause/stop motif (the "reaction stopped" misconception). The first bubble glows slightly brighter soft-green; the other two are a duller charcoal. Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. Three competing pictures of equilibrium, only one correct. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L5 — `m5L5ThiocyanateColour`
Path: `public/assets/hscscience/generated/lesson-5-lcp-concentration-temperature/m5L5ThiocyanateColour.png`
```
Chunky isometric 3D illustration, HSC chemistry. Two identical chunky test tubes standing in a chunky wooden test-tube rack, both filled with red solution. The LEFT tube is a moderate red; the RIGHT tube is a noticeably deeper, darker blood-red, with a small dropper pipette poised above it releasing one soft-amber droplet into it — suggesting that adding a reagent deepened the colour. Soft contact shadow under the rack, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. Adding a reactant to a red equilibrium solution deepens the colour. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L6 — `m5L6GasSyringeCompression`
Path: `public/assets/hscscience/generated/lesson-6-lcp-pressure-volume/m5L6GasSyringeCompression.png`
```
Chunky isometric 3D illustration, HSC chemistry. A chunky sealed gas syringe lying on a soft ground plane, the plunger pushed inward to compress the gas into a small space at the sealed end. The trapped gas is shown as soft-green and amber particles packed closely together in the compressed region, clearly denser than the rest of the barrel. A chunky rounded hand or block presses the plunger. Soft contact shadow, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, scale markings, or labels. Squeezing gas particles closer together raises the pressure and moves the balance. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L7 — `m5L7AmmoniaPlant`
Path: `public/assets/hscscience/generated/lesson-7-industrial-applications/m5L7AmmoniaPlant.png`
```
Chunky isometric 3D illustration, HSC chemistry. A simplified chunky industrial ammonia plant: a tall rounded reactor tower connected by thick rounded pipes to a smaller condenser unit, with a curved recycle pipe looping unreacted gas back from the condenser to the reactor inlet. Small soft-green and amber gas particles travel along the pipes; a few droplets of pale liquid product collect at the base of the condenser. Chunky storage tank beside it. Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, 20-degree downward isometric tilt. NO text, numerals, or labels. An ammonia plant with a recycle loop turning a low per-pass yield into high overall conversion. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L8 — `m5L8ExamScript`
Path: `public/assets/hscscience/generated/lesson-8-lcp-mastery/m5L8ExamScript.png`
```
Chunky isometric 3D illustration, HSC chemistry. A chunky exam answer booklet lying open on a soft ground plane, with a chunky pen resting on it and a small soft-green tick mark and a small charcoal cross mark side by side on the blank page (no writing, just the two marks). Above the booklet float two tiny distinct molecular-balance motifs representing two simultaneous disturbances — a small flame motif and a small compression-arrow motif — suggesting a multi-part equilibrium question. Soft contact shadow, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, letters, numerals, or labels. Same chemistry, different marks — structure decides the band. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

## L9 — `m5L9AtmosphereStable`
Path: `public/assets/hscscience/generated/lesson-9-keq-expressions/m5L9AtmosphereStable.png`
```
Chunky isometric 3D illustration, HSC chemistry. A chunky rounded slice of blue sky with a couple of soft rounded clouds floating over a small curved patch of green ground, and dispersed evenly through the air a scattering of paired diatomic molecule models (two-atom dumbbells in soft-green and soft-blue) drifting peacefully and NOT joining together — suggesting unreacted nitrogen and oxygen coexisting stably. One faint, lone amber product molecule sits far off to the side, vastly outnumbered. Soft contact shadow under the ground patch, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. The air's gases drift together but barely react — an equilibrium lying far to the reactants. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```
