# ChatGPT image-creator brief — Chem Y12 M6 (Acid/Base Reactions), Lessons 1–10

DIDACTIC images a muted-volume student can read — concrete lab scenes and
real chemistry, not abstract decoration. Paste one prompt at a time into the
ChatGPT image creator and save at the listed path. The lesson JSONs are
already wired to these camelCase asset names; register each name in
`src/assets/index.ts` and the asset registry, then run
`npm run validate:lessons`.

> **Lean visual policy:** every lesson uses CODED Remotion diagrams on the
> concept scenes (flow, beforeAfter, calorimeter, concentrationCompare,
> table, barChart) plus **exactly ONE generated image — the hook**. The 10
> images below are the complete generation list for L1–L10. No worked-example
> or quick-check scene carries an image; those stay clean text.

**Hard rules for every image:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard pattern).
- NO text, letters, numerals, formulas, words-on-arrows, or labels
  anywhere. Concepts are carried by apparatus, colour, and arrangement.
- Concrete lab apparatus / real chemistry / recognisable objects, not
  abstract geometric shapes, orbs, or decorative cubes.
- Chunky isometric 3D, matte finish, soft single-source key light from the
  upper-left, ~20° downward isometric tilt, soft contact shadows.
- Chem-green / amber / charcoal palette. Match the reference asset
  `public/assets/carbon-12-molar-mass-balance.png` — every image should
  look like its sibling.
- End each prompt with: "The file must have true alpha-channel transparency
  so it composites cleanly onto a light slide background."

> **Molecular models:** where atoms appear, use simple ball-and-stick
> spheres in a restrained palette (charcoal = generic non-metal, off-white =
> hydrogen, coral-red = oxygen, soft-blue = nitrogen). Keep them chunky and
> matte, never glossy plastic, never with cartoon faces.

---

## L1 — `ammoniaBreaksArrhenius` (hook)
Path: `public/assets/hscscience/generated/lesson-1-acid-base-models/ammoniaBreaksArrhenius.png`

Used by the hook scene: ammonia is unmistakably basic yet contains no hydroxide — the anomaly that broke the Arrhenius model. (L1's concept scene uses a coded `flow` diagram, so this hook image is the lesson's only generated asset.)
```
Chunky isometric 3D illustration, HSC chemistry. A single clear glass beaker holding a pale solution, standing on a soft ground plane. Resting against the inside of the beaker is a strip of litmus paper that has turned a clear blue at its dipped lower end (signalling a basic solution). Floating just above the liquid surface, rendered as a clean ball-and-stick molecular model, is one ammonia molecule: a single soft-blue nitrogen sphere bonded to three small off-white hydrogen spheres in a pyramid shape — and pointedly NO red oxygen sphere and no hydroxide group anywhere in the scene. Soft contact shadow under the beaker, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt. NO text, numerals, or labels. The teaching point: a clearly basic solution (blue litmus) produced by a molecule that contains no hydroxide. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L2 — `indicatorColourReveal` (hook)
Path: `public/assets/hscscience/generated/lesson-2-nomenclature-indicators/indicatorColourReveal.png`

Used by the hook scene: a single drop of indicator reveals a solution's acidity. (L2's concept scene uses a coded `beforeAfter` diagram for the indicator equilibrium.)
```
Chunky isometric 3D illustration, HSC chemistry. A glass dropper pipette, held at a slight angle in the upper-left, releasing a single round droplet of pale orange liquid down toward a small clear glass beaker of colourless liquid below it. Inside the beaker, a soft plume of yellow colour is just beginning to bloom and spread through the liquid where earlier drops have already mixed, so the beaker reads as shifting from colourless toward yellow. The droplet in mid-air is distinct and clearly falling. Soft contact shadow under the beaker, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-amber and charcoal palette. NO text, numerals, or labels. The teaching point: one drop of indicator visibly reporting the acidity of a solution by colour. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L3 — `neutralisationHeatBenchmark` (hook)
Path: `public/assets/hscscience/generated/lesson-3-enthalpy-neutralisation/neutralisationHeatBenchmark.png`

Used by the hook scene: mixing a strong acid and strong base releases heat (a temperature rise). (L3's concept scene uses the coded `calorimeter` diagram.)
```
Chunky isometric 3D illustration, HSC chemistry. A white insulated foam cup (polystyrene calorimeter) cut so the viewer sees the warm liquid inside, with a chunky rounded thermometer standing upright in the liquid and its coloured measuring fluid risen high up the stem to indicate a temperature increase. Two small glass beakers sit beside the cup, one having just poured a clear stream of liquid into it, suggesting an acid and a base being combined. Gentle wavy warmth lines (not flames, not text) rise softly from the surface of the liquid to read as heat being released. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-amber and charcoal palette. NO text, numerals, or scale markings on the thermometer. The teaching point: neutralisation in a foam-cup calorimeter releasing heat, shown by a risen thermometer. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L4 — `londonSmogScrubber` (hook)
Path: `public/assets/hscscience/generated/lesson-4-neutralisation-industry/londonSmogScrubber.png`

Used by the hook scene: the same neutralisation chemistry scrubs acidic SO₂ from an industrial chimney. (L4's concept scene uses a coded `flow` diagram of the desulfurisation process.)
```
Chunky isometric 3D illustration, HSC chemistry / industry. A single stylised industrial smokestack or chimney tower on a soft ground plane, with a chunky rounded scrubber unit attached partway up. From the top of the clean side of the stack rises only pale, wispy clean vapour, while a darker, hazier plume is shown being drawn INTO the scrubber unit lower down — reading as dirty acidic gas going in and clean gas coming out. A small chunky tank beside the base feeds a pale milky slurry (lime) into the scrubber. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, charcoal and muted-green palette. NO text, numerals, or labels. The teaching point: an industrial scrubber neutralising acidic exhaust gas before it escapes the chimney. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L5 — `strongWeakBeakers` (hook)
Path: `public/assets/hscscience/generated/lesson-5-strong-vs-weak/strongWeakBeakers.png`

Used by the hook scene: two beakers at the SAME concentration but very different ionisation — strong acid fully split into ions, weak acid mostly intact. (L5's concept scene uses the coded `concentrationCompare` diagram.)
```
Chunky isometric 3D illustration, HSC chemistry. Two identical clear glass beakers standing side by side on a soft ground plane, each filled to the exact same liquid level. In the LEFT beaker, the liquid is densely packed with many small separated ball-and-stick ion spheres (lots of free charcoal and off-white spheres drifting apart) to read as fully broken-up. In the RIGHT beaker, the liquid mostly contains intact small two-sphere molecule pairs still bonded together, with only one or two separated spheres — reading as barely broken-up. The same number of particles overall, but split apart on the left and intact on the right. Soft contact shadows under both beakers, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-green and charcoal palette. NO text, numerals, or labels. The teaching point: equal concentration, very different degrees of ionisation — strong versus weak. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L6 — `fourStudentResponses` (hook)
Path: `public/assets/hscscience/generated/lesson-6-strong-weak-mastery/fourStudentResponses.png`

Used by the hook scene: four answers to one exam question, only one correct — consolidation of strong/weak reasoning. (L6's concept scene uses a coded `table` for the salt hydrolysis rule.)
```
Chunky isometric 3D illustration, study/exam theme. Four chunky rounded blank answer cards or paper sheets arranged in a loose two-by-two grid on a soft surface. Three of the cards carry a small embossed rounded cross / X mark (incorrect), and ONE card carries a small embossed rounded tick / check mark (correct) and sits slightly raised and softly highlighted above the others. The marks are simple geometric tick and cross shapes, NOT letters or words. A single chunky pencil rests diagonally across one corner. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, amber and charcoal palette. NO text, numerals, letters, or writing on the cards — only the simple tick and cross symbols. The teaching point: four attempts at one question, only one correct. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L7 — `bakingSodaDualRole` (hook)
Path: `public/assets/hscscience/generated/lesson-7-conjugate-amphiprotic/bakingSodaDualRole.png`

Used by the hook scene: the same substance (baking soda) neutralises an acid in one beaker and a base in another — amphiprotic behaviour. (L7's concept scene uses a coded `flow` diagram of the phosphate proton chain.)
```
Chunky isometric 3D illustration, HSC chemistry. A central chunky rounded jar or scoop of white powder (baking soda) sits between two clear glass beakers, with a small identical spoonful of the powder shown tipping toward EACH beaker symmetrically (the same substance going both ways). The LEFT beaker fizzes vigorously with many small rising bubbles (reacting with an acid); the RIGHT beaker stays calm and clear with no bubbles (reacting with a base). The mirrored composition makes clear it is one substance acting in two different ways. Soft contact shadows under the central jar and both beakers, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-green and charcoal palette. NO text, numerals, or labels. The teaching point: one substance behaving as both an acid and a base depending on its partner. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L8 — `phScaleLogarithmic` (hook)
Path: `public/assets/hscscience/generated/lesson-8-ph-poh-strong/phScaleLogarithmic.png`

Used by the hook scene: a tiny step on the pH scale is a tenfold jump in hydrogen-ion concentration — the logarithmic idea. (L8's concept scene uses a coded `table` relating pH to [H₃O⁺].)
```
Chunky isometric 3D illustration, data-visualisation / chemistry theme. A row of chunky rounded 3D bars of steadily, dramatically increasing height arranged left to right like a staircase that climbs steeply (each bar clearly several times taller than the one before, evoking a tenfold-per-step jump), standing on a soft ground plane. Beside or beneath the tallest bars sit one or two small clear glass beakers tinted in a soft pH-style colour gradient (one warm red-orange, one cool blue-green) to anchor the idea in solutions. The bars are smooth, matte, and the same colour family. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-green to amber palette. NO text, numerals, axis ticks, or labels. The teaching point: each equal step along the scale is a much larger jump in concentration — a logarithmic scale. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L9 — `aspirinIbuprofenKa` (hook)
Path: `public/assets/hscscience/generated/lesson-9-ka-kb-ice/aspirinIbuprofenKa.png`

Used by the hook scene: two painkiller tablets with different acid strengths (Ka), motivating the ICE-table method. (L9's concept scene uses a coded `table` for the ICE rows.)
```
Chunky isometric 3D illustration, pharmaceutical chemistry. Two chunky rounded white pharmaceutical tablets standing on a soft ground plane, one on the left and one on the right. Each tablet sits just above a small clear glass beaker of liquid into which it is dissolving. The LEFT beaker shows many small separated ion spheres released into the liquid (more ionised); the RIGHT beaker shows only a few separated spheres with most of the tablet material still intact (less ionised) — reading as two acids of different strength. The two tablets are subtly different shapes (one round, one oval) so they read as two different drugs. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, clean clinical off-white and chem-green palette. NO text, numerals, or labels on the tablets or beakers. The teaching point: two weak acids releasing different amounts of hydrogen ions. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L10 — `strongWeakEnthalpyThermometers` (hook)
Path: `public/assets/hscscience/generated/lesson-10-enthalpy-strong-weak/strongWeakEnthalpyThermometers.png`

Used by the hook scene: identical neutralisations of a strong vs a weak acid give a slightly different temperature rise — the ionisation-energy fingerprint. (L10's concept scene uses a coded `barChart` comparing ΔHn magnitudes.)
```
Chunky isometric 3D illustration, HSC chemistry. Two identical white insulated foam cups (calorimeters) standing side by side on a soft ground plane, each with a chunky rounded thermometer standing in it. The LEFT thermometer's coloured fluid has risen noticeably HIGHER than the RIGHT thermometer's, which is risen but clearly a little lower — a small but visible difference in temperature between the two. Each cup has a small glass beaker beside it that has just poured liquid in, implying two parallel neutralisation experiments. Gentle soft warmth lines rise from both cups, stronger over the left one. Soft contact shadows, matte finish, chunky rounded forms, single soft light from upper-left, 20-degree downward isometric tilt, chem-amber and charcoal palette. NO text, numerals, or scale markings on the thermometers. The teaching point: the same reaction with a strong versus a weak acid releasing slightly different amounts of heat. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## Registration checklist (when ready to generate)

1. Generate each PNG above and save to its listed path.
2. Add each camelCase name to `src/assets/index.ts` (the `ASSETS` map) and
   the asset registry, mapping to its `staticFile(...)` path.
3. Run `npm run validate:lessons` — all references should resolve.
4. Until generated + registered, these hook scenes render with the coded
   diagram / text layout only (no broken image), so the lessons are safe to
   preview before image generation.

**Coded diagrams in use (no image generation needed):** L1 `flow`,
L2 `beforeAfter`, L3 `calorimeter`, L4 `flow`, L5 `concentrationCompare`,
L6 `table`, L7 `flow`, L8 `table`, L9 `table`, L10 `barChart`. All are
existing `DiagramConfig` types already supported by `DiagramRenderer`.
