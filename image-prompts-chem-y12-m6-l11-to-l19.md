# ChatGPT image-creator brief — Chem Y12 M6 (Acid/Base Reactions), Lessons 11–19

DIDACTIC images a muted-volume student can read — concrete lab scenes and
graph shapes, not abstract decoration. Paste one prompt at a time into the
ChatGPT image creator and save at the listed path. The lesson JSONs are
already wired to these camelCase asset names; register each name in
`src/assets/index.ts` and the asset registry, then run
`npm run validate:lessons`.

> **Lean visual policy:** every lesson uses CODED Remotion diagrams on the
> concept scenes (flow, barChart, beforeAfter, table, titrationSetup) plus
> at most ONE generated image. **L11 needs NO image** (it uses a coded
> `flow` decision-tree diagram only). The 8 images below are the complete
> generation list for L12–L19. Of these, 5 are hook scenes and 3 sit on a
> concept scene where no Remotion diagram type fits the chemistry
> (titration-curve shapes, a conductometric V-curve, a glass electrode).

**Hard rules for every image:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard).
- NO text, letters, numerals, formulas, words-on-arrows, or axis labels
  anywhere. Concepts are carried by apparatus, colour, and curve shape.
- Concrete lab apparatus / real chemistry / clean graph forms, not abstract
  geometric shapes.
- Chunky isometric 3D, matte finish, soft single-source key light from the
  upper-left, ~20° downward isometric tilt, soft contact shadows.
- Chem-green / amber / charcoal palette. Match the reference asset
  `public/assets/carbon-12-molar-mass-balance.png`.
- End each prompt with: "The file must have true alpha-channel transparency
  so it composites cleanly onto a light slide background."

> **Note for the 3 graph images** (`titrationCurvesFourTypes`,
> `conductometricVCurve`): draw clean rounded plot axes as plain lines with
> NO numbers or words. The teaching content is the *shape* of the curve(s),
> not any labelling. Keep curves thick, smooth, and clearly distinct.

---

## L11 — (no image)
Lesson 11 is fully served by its coded `flow` decision-tree diagram on the
concept scene. **Do not generate an image for L11.**

---

## L12 — `colaEnamelKa` (hook)
Path: `public/assets/hscscience/generated/lesson-12-ka-pka/colaEnamelKa.png`
```
Chunky isometric 3D illustration, HSC chemistry. Two clear drinking glasses standing side by side on a soft ground plane. The LEFT glass holds dark cola-brown liquid with a few rising bubbles; the RIGHT glass holds pale, almost colourless sparkling water with gentler, sparser bubbles. Below and between the two glasses sits a single chunky rounded white tooth model; the enamel surface of the tooth directly under the LEFT (cola) glass is visibly more pitted and worn, while the side under the RIGHT (sparkling water) glass is smoother and more intact — suggesting the darker drink is far more corrosive. Soft contact shadows under each glass and the tooth, matte finish, chunky rounded forms, soft light upper-left, 20-degree downward isometric tilt. NO text, numerals, or labels. Two acidic drinks, very different damage to enamel — a contrast in acid strength. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L13 — `bufferBloodBeakers` (hook)
Path: `public/assets/hscscience/generated/lesson-13-buffers/bufferBloodBeakers.png`
```
Chunky isometric 3D illustration, HSC chemistry. Two identical chunky beakers standing on a soft ground plane, each with a small dropper pipette poised above releasing one soft-amber droplet. The LEFT beaker holds clear water and its liquid surface shows a dramatic colour shift to a strong acidic-red right where the drop lands, spreading widely — suggesting a big change. The RIGHT beaker holds a faintly red-tinged buffer solution that stays almost exactly the same calm colour despite the identical drop — suggesting it barely changes. A subtle pair of equal-sized particle clusters floats inside the RIGHT beaker hinting at two coexisting species. Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, numerals, or labels. Same acid added to two beakers; one swings wildly, the buffer holds steady. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L14 — `titrationBenchSetup` (hook)
Path: `public/assets/hscscience/generated/lesson-14-titration-technique/titrationBenchSetup.png`
```
Chunky isometric 3D illustration, HSC chemistry. A complete acid-base titration setup on a soft ground plane: a tall chunky burette held vertically in a chunky clamp on a retort stand, its tap near the bottom, with a single pale droplet about to fall. Directly beneath sits a chunky conical flask containing pale pink solution, mid-swirl. To one side stands a chunky volumetric flask with a narrow neck and a single calibration ring etched as a plain groove (no numbers), and a chunky pipette resting in a small holder. Soft contact shadows under the stand and glassware, matte finish, chunky rounded forms, soft light upper-left, 20-degree downward isometric tilt. NO text, numerals, scale markings, or labels. A precise titration bench ready to find an unknown concentration. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L15 — `indicatorWrongChoice` (hook)
Path: `public/assets/hscscience/generated/lesson-15-indicators/indicatorWrongChoice.png`
```
Chunky isometric 3D illustration, HSC chemistry. Two identical chunky conical flasks standing side by side on a soft ground plane, each part-way through a titration with a burette tip poised above. The LEFT flask has turned a strong orange-red far too early, while its liquid level shows the burette has barely been used — suggesting a premature, wrong endpoint. The RIGHT flask shows a correct faint pink that has only just appeared after much more liquid delivered — suggesting the true endpoint. A small charcoal cross-mark hovers over the LEFT flask and a small soft-green tick over the RIGHT (marks only, no writing). Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, letters, numerals, or labels. The wrong indicator changes colour too early and gives a false endpoint. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L16 — `titrationCurvesFourTypes` (concept — graph)
> ⛔ **REPLACED BY CODED DIAGRAM — DO NOT GENERATE.** This scene now uses the
> coded `lineGraph` diagram (4 accurate titration curves + equivalence marker),
> so no image is needed. Prompt kept for reference only.
Path: `public/assets/hscscience/generated/lesson-16-titration-curves/titrationCurvesFourTypes.png`
```
Chunky isometric 3D illustration, HSC chemistry, clean data-visualisation style. A single rounded graph panel floating slightly above a soft ground plane, drawn as a chunky 3D card with a plain vertical axis line and a plain horizontal axis line (NO numbers, NO words). On it, four thick smooth distinct titration curves in four different palette colours: (1) a soft-green curve starting low with no flat region and a tall near-vertical step centred in the middle height of the panel — the biggest jump; (2) an amber curve starting higher, rising through a clear flat plateau then a smaller step whose midpoint sits in the upper half — the jump centred high; (3) a teal curve starting low with its step centred in the lower half — the jump centred low; (4) a faint charcoal curve that rises gently and smoothly with almost no step at all. Each curve clearly separated so all four shapes are readable at a glance. Soft contact shadow under the card, matte finish, chunky rounded forms, soft light upper-left, slight isometric tilt. NO text, numerals, gridline numbers, or labels — only the curve shapes and axis lines. Four characteristic titration-curve shapes side by side. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L17 — `fourStudentsCurve` (hook)
Path: `public/assets/hscscience/generated/lesson-17-titration-mastery/fourStudentsCurve.png`
```
Chunky isometric 3D illustration, HSC chemistry. A single chunky rounded graph card floating above a soft ground plane showing one weak-acid titration curve: a thick smooth amber line starting at a middling height, rising through a clear flat plateau region, then a steep near-vertical step whose midpoint sits in the upper portion, levelling off at the top. The axes are plain lines with NO numbers or words. Around the card float four simple chunky rounded speech-bubble shapes, each pointing at a different part of the curve — one at the flat plateau (the half-way buffer region), one at the middle of the steep step (the equivalence point), one mistakenly at the centre height of the panel, and one mistakenly at the very top plateau — three bubbles a duller charcoal and one glowing slightly brighter soft-green to mark the correct reading. Soft contact shadows, matte finish, chunky rounded forms, soft light upper-left, isometric tilt. NO text, letters, numerals, or labels. Four readings of one titration curve, only one correct. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L18 — `conductometricVCurve` (concept — graph)
> ⛔ **REPLACED BY CODED DIAGRAM — DO NOT GENERATE.** This scene now uses the
> coded `lineGraph` diagram (conductometric V-curve + equivalence marker), so no
> image is needed. Prompt kept for reference only.
Path: `public/assets/hscscience/generated/lesson-18-back-conductometric/conductometricVCurve.png`
```
Chunky isometric 3D illustration, HSC chemistry, clean data-visualisation style. A single rounded graph card floating above a soft ground plane, drawn as a chunky 3D panel with a plain vertical axis line and a plain horizontal axis line (NO numbers, NO words). On it, one thick smooth conductance curve forming a clear V-shape: a soft-green segment descending steeply from the upper left down to a distinct rounded minimum point low in the centre, then a teal segment rising again toward the upper right — the two straight arms meeting at the lowest point, which is gently highlighted as a small glowing node. Below the curve, a faint row of small particle dots transitions in colour from left to right (fast bright ions giving way to slower duller ions) to hint at why conductance falls. Soft contact shadow under the card, matte finish, chunky rounded forms, soft light upper-left, slight isometric tilt. NO text, numerals, gridline numbers, or labels — only the V-curve, axis lines, and the highlighted minimum. A conductometric titration V-curve with the equivalence point at the minimum. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L19 — `glassElectrodeProbe` (concept)
Path: `public/assets/hscscience/generated/lesson-19-industrial-digital/glassElectrodeProbe.png`
```
Chunky isometric 3D illustration, HSC chemistry. A chunky glass-electrode pH probe — a rounded cylindrical sensor body with a distinct rounded glass bulb at its lower tip — dipped into a chunky beaker of pale solution on a soft ground plane. A thick rounded cable runs from the top of the probe to a chunky rounded handheld meter unit sitting beside the beaker, its small blank rounded screen face shown with NO digits or text. Around the immersed glass bulb, a few tiny soft-green ion dots are shown clustering and exchanging at the bulb surface to hint at the hydrogen-ion-sensitive membrane. Soft contact shadows under the beaker and meter, matte finish, chunky rounded forms, soft light upper-left, 20-degree downward isometric tilt. NO text, letters, numerals, or labels — the meter screen is blank. A glass electrode pH probe reading a solution into a digital meter. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## Registration lines for `src/assets/index.ts`

Add inside the asset map (these names match the lesson JSON `image` fields exactly):
```ts
colaEnamelKa: staticFile('assets/hscscience/generated/lesson-12-ka-pka/colaEnamelKa.png'),
bufferBloodBeakers: staticFile('assets/hscscience/generated/lesson-13-buffers/bufferBloodBeakers.png'),
titrationBenchSetup: staticFile('assets/hscscience/generated/lesson-14-titration-technique/titrationBenchSetup.png'),
indicatorWrongChoice: staticFile('assets/hscscience/generated/lesson-15-indicators/indicatorWrongChoice.png'),
titrationCurvesFourTypes: staticFile('assets/hscscience/generated/lesson-16-titration-curves/titrationCurvesFourTypes.png'),
fourStudentsCurve: staticFile('assets/hscscience/generated/lesson-17-titration-mastery/fourStudentsCurve.png'),
conductometricVCurve: staticFile('assets/hscscience/generated/lesson-18-back-conductometric/conductometricVCurve.png'),
glassElectrodeProbe: staticFile('assets/hscscience/generated/lesson-19-industrial-digital/glassElectrodeProbe.png'),
```
