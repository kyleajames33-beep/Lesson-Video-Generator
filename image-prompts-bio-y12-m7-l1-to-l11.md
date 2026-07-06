# ChatGPT image-creator brief — Bio Y12 M7 (Infectious Disease), Lessons 1–11

DIDACTIC images a muted-volume student can read — concrete, recognisable
biology, not abstract decoration. Paste one prompt at a time into the ChatGPT
image creator and save at the listed path. The lesson JSONs are already wired
to these camelCase asset names; register each name in `src/assets/index.ts`
and the asset registry, then run `npm run validate:lessons`.

> **Lean visual policy:** every lesson uses CODED Remotion diagrams on the
> concept scenes (`table`, `flow`, `beforeAfter`, `barChart`, `lineGraph`)
> plus **exactly ONE generated image — the hook**. The 11 images below are the
> complete generation list for L1–L11. No definition, worked-example,
> misconception, quick-check, or summary scene carries an image; those stay
> clean text + coded diagrams.

**Hard rules for every image:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard pattern).
- NO text, letters, numerals, formulas, words-on-arrows, or labels anywhere.
  Concepts are carried by shape, colour, and arrangement only.
- Concrete, recognisable biology / real organisms / real apparatus, not
  abstract geometric shapes, orbs, or decorative cubes.
- Chunky isometric 3D, matte finish, soft single-source key light from the
  upper-left, ~20° downward isometric tilt, soft contact shadows.
- Biology palette: teal / emerald / amber / charcoal, warm and friendly.
  Every image should look like a sibling of the others in this set.
- End each prompt with: "The file must have true alpha-channel transparency
  so it composites cleanly onto a light slide background."

> **Pathogens & cells:** render bacteria as rounded rods/spheres, viruses as
> simple chunky capsids (no spikes-as-text), immune cells as soft rounded
> blobs. Never add cartoon faces. Keep everything matte and chunky, never
> glossy plastic.

---

## L1 — `bioM7L1PandemicWorld` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/pandemic-spread-across-globe.png`

Used by the hook scene: a single virus particle seeds spread across a globe, capturing how one pathogen reached 188 countries in months. (L1's concept scenes use coded `table` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. A rounded matte-teal globe viewed at a 20-degree downward isometric tilt, with softly raised continents in emerald. One chunky amber virus particle — a simple rounded capsid sphere with a few stubby surface knobs, no text — sits enlarged in the foreground lower-left, and from it a sweep of small soft amber dots scatters outward across the globe's surface, denser near the start point and thinning toward the far side, reading as rapid global spread. A faint set of soft connecting arcs (no arrowheads-as-text) link clusters of dots. Soft contact shadow under the globe, matte finish, chunky rounded forms, single soft light from the upper-left, teal-emerald-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: one pathogen seeding worldwide transmission. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L2 — `bioM7L2PenicillinZone` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/penicillin-zone-of-inhibition.png`

Used by the hook scene: a mould colony clears a bacteria-free ring on a culture plate — Fleming's observation that a drug kills only one pathogen type. (L2's concept scenes use coded `table` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. A round clear petri dish at a 20-degree downward isometric tilt, the agar carpeted with many small rounded soft-teal bacterial colonies. In one region sits a fuzzy chunky amber-green mould colony, and around it a clean clear ring where the teal bacteria have completely thinned out — a visible zone of inhibition. The bacteria return to full density beyond the ring. Soft contact shadow under the dish, matte finish, chunky rounded forms, single soft light from the upper-left, teal-emerald-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: a substance from the mould clearing bacteria nearby while leaving a sharp boundary — selective killing of one pathogen type. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L3 — `bioM7L3SwanNeckFlask` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/pasteur-swan-neck-flask.png`

Used by the hook scene: Pasteur's swan-neck flask, clear broth inside, the curved neck trapping airborne particles. (L3's concept scenes use a coded `beforeAfter` and a coded `flow` diagram.)
```
Chunky isometric 3D illustration, HSC biology. A glass laboratory flask at a 20-degree downward isometric tilt, holding a pool of clear pale-amber nutrient broth, with a long elegant S-curved swan neck rising and bending over to the side. In the low point of the curved neck sits a small cluster of soft grey dust particles, trapped there, while the broth in the bulb below stays perfectly clear. A faint soft arrow-free stream of air is implied entering the open end. Soft contact shadow under the flask, matte finish, chunky rounded forms, clean glass rendered as soft translucent teal-tinted material, single soft light from the upper-left, teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: air enters but airborne particles settle in the curve, so the broth stays sterile. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L4 — `bioM7L4SnowCholeraMap` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/snow-cholera-pump-map.png`

Used by the hook scene: cholera cases cluster tightly around a single street water pump — John Snow's mapping of a transmission source. (L4's concept scenes use a coded `table` and a coded `lineGraph` of epidemic curves.)
```
Chunky isometric 3D illustration, HSC biology. A small chunky city-block diorama at a 20-degree downward isometric tilt, with simple rounded charcoal building blocks and pale streets between them. At one central street corner stands a chunky amber hand-operated water pump. Clustered densely around that pump are many small soft-teal marker dots representing cases, packed tightly nearest the pump and thinning out sharply with distance, so the cluster visibly centres on the pump. A second pump elsewhere in the block has almost no dots near it. Soft contact shadows under the buildings, matte finish, chunky rounded forms, single soft light from the upper-left, teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: cases concentrated around one water source, revealing the transmission route. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L5 — `bioM7L5AgarColonies` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/agar-plate-colony-count.png`

Used by the hook scene: countable bacterial colonies dotted across an agar plate — the visible output of microbial testing. (L5's concept scenes use a coded `flow` of the serial-dilution steps and a coded `table`.)
```
Chunky isometric 3D illustration, HSC biology. A round clear petri dish at a 20-degree downward isometric tilt, the surface a smooth pale-amber agar, dotted with a countable scattering of small rounded raised colonies in soft teal and emerald, well separated from one another so each reads as a distinct dot (not a confluent lawn). The colonies vary slightly in size. A faint soft inoculation streak curves across one side. Soft contact shadow under the dish, matte finish, chunky rounded forms, single soft light from the upper-left, teal-emerald-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: separated, countable colonies on a plate — the readout of a viable count. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L6 — `bioM7L6MyrtleRust` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/myrtle-rust-on-leaves.png`

Used by the hook scene: bright spore pustules erupting on young native leaves — an introduced fungus overrunning a host with no resistance. (L6's concept scenes use a coded `table` and a coded `flow` of the economic-impact pathway.)
```
Chunky isometric 3D illustration, HSC biology. A small sprig of young rounded native-plant leaves at a 20-degree downward isometric tilt, the leaves matte emerald and soft teal. Across the youngest leaves bloom clusters of bright powdery amber-yellow pustules — raised fuzzy spots of fungal spores — with a few leaves slightly curled and distorted to read as damage. A faint soft puff of amber spores drifts off the upper leaf edge to suggest wind dispersal. Soft contact shadow beneath the sprig, matte finish, chunky rounded forms, single soft light from the upper-left, emerald-teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: bright fungal spore pustules erupting on vulnerable new growth, ready to spread on the wind. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L7 — `bioM7L7CattleBiosecurity` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/livestock-biosecurity-barrier.png`

Used by the hook scene: livestock behind a clear biosecurity barrier — the costly defence of disease-free status. (L7's concept scenes use a coded `barChart` of direct vs total cost and a coded `table`.)
```
Chunky isometric 3D illustration, HSC biology. A few chunky rounded cattle standing on a pale-emerald paddock at a 20-degree downward isometric tilt, rendered in soft charcoal and warm brown matte forms. In front of them runs a clean chunky amber barrier — a simple gate-and-fence line with a low boot-wash tray beside it — separating the paddock from a pale road on the near side. The scene reads as a controlled boundary protecting the animals. Soft contact shadows under the cattle and fence, matte finish, chunky rounded forms, single soft light from the upper-left, emerald-amber-charcoal-brown palette. NO text, numerals, or labels anywhere. The teaching point: a guarded boundary keeping disease out of a livestock herd. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L8 — `bioM7L8PlantDefenceCrossSection` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/plant-defence-cross-section.png`

Used by the hook scene: a cut-away of a plant stem showing layered structural barriers against an invading pathogen. (L8's concept scenes use a coded `table` and a coded `flow` of the hypersensitive response.)
```
Chunky isometric 3D illustration, HSC biology. A short cut-away segment of a plant stem at a 20-degree downward isometric tilt, sliced to reveal concentric layers: a glossy-matte amber waxy outer cuticle, a chunky emerald cell-wall layer beneath it, and rounded teal internal cells with small central vacuoles. At one point on the surface, a small fuzzy charcoal pathogen blob is pressing inward, and the cells immediately around it are rendered slightly darkened and reinforced to read as a localised defensive response. Soft contact shadow under the stem segment, matte finish, chunky rounded forms, single soft light from the upper-left, emerald-teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: layered structural barriers meeting a pathogen at the plant surface. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L9 — `bioM7L9Inflammation` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/inflammation-skin-response.png`

Used by the hook scene: a cut-away of skin around a small wound, with widened vessels and fluid pooling — the inflammatory response. (L9's concept scenes use a coded `table` of the four signs and a coded `flow` of the inflammatory cascade.)
```
Chunky isometric 3D illustration, HSC biology. A cut-away block of skin at a 20-degree downward isometric tilt, showing a soft tan-amber surface layer over rounded teal tissue, with a small splinter-style puncture at the top. Beneath the wound, chunky red blood vessels are shown visibly widened and flushed, and soft translucent fluid pools into the surrounding tissue to read as swelling. A few small rounded white immune-cell blobs are migrating from the vessels toward the wound. A gentle warm amber glow surrounds the site. Soft contact shadow under the skin block, matte finish, chunky rounded forms, single soft light from the upper-left, tan-amber-red-teal-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: widened vessels, leaking fluid, and immune cells converging on a wound. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L10 — `bioM7L10Phagocytosis` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/phagocyte-engulfing-pathogen.png`

Used by the hook scene: a large immune cell extending pseudopods to engulf a bacterium — phagocytosis in action. (L10's concept scenes use a coded `table` of innate vs adaptive and a coded `flow` of phagocytosis.)
```
Chunky isometric 3D illustration, HSC biology. A large rounded soft-teal immune cell (phagocyte) at a 20-degree downward isometric tilt, with a clearly visible rounded nucleus inside, extending two chunky arm-like pseudopods that reach around and partly enclose a smaller amber rod-shaped bacterium. The bacterium is shown half-engulfed, beginning to be drawn inside the cell. One or two more small bacteria sit nearby awaiting capture. Soft contact shadow under the cell, matte finish, chunky rounded forms, single soft light from the upper-left, teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: a phagocyte reaching out to surround and swallow a pathogen. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L11 — `bioM7L11AntibodyStructure` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m7/antibody-binding-antigen.png`

Used by the hook scene: a Y-shaped antibody locking onto a matching antigen shape — specificity as a lock and key. (L11's concept scenes use a coded `flow` of clonal selection and a coded `lineGraph` of the primary vs secondary response.)
```
Chunky isometric 3D illustration, HSC biology. A single chunky Y-shaped antibody at a 20-degree downward isometric tilt, rendered as a smooth matte teal protein with two upper arms and a lower stem. At the tip of each upper arm is a small notched binding site, and one arm is clearly locking onto a small amber antigen fragment whose bumpy shape fits the notch exactly, like a key in a lock. A second, mismatched grey fragment floats nearby and clearly does NOT fit, emphasising specificity. Soft contact shadow under the antibody, matte finish, chunky rounded forms, single soft light from the upper-left, teal-amber-charcoal palette. NO text, numerals, or labels anywhere. The teaching point: one antibody binding only the antigen whose shape matches its site. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## DIAGRAM REQUESTS (coded diagrams that would improve future revisions)

These bio-specific visuals currently use the closest existing coded diagram
(`flow`) or a generated hook image. A dedicated coded diagram `type` would let
them become fully coded scenes with no AI image. None are required for L1–L11
to render — they all already use existing diagram types — but they are the
natural candidates for new coded components:

1. **`pathogenTypes`** — a labelled 3-way split (microorganisms / macroorganisms /
   non-cellular) with example icons. Currently L1 & L2 use coded `table`s; a
   visual classification tree would read better than a table.
2. **`transmissionCycle`** — host → vector/fomite/route → new host loop for L4.
   Currently approximated by `table` + the `lineGraph` epidemic curves.
3. **`kochPostulates`** — the canonical 4-step find → isolate → infect → re-isolate
   loop for L3. Currently rendered with the generic `flow` (4 nodes). A purpose-built
   version could show the diseased/healthy host imagery at each step.
4. **`immuneResponseCascade`** — a vertical step cascade for the hypersensitive
   response (L8), inflammatory cascade (L9), phagocytosis (L10) and clonal
   selection (L11). All four currently use the horizontal `flow` (4 nodes);
   a taller vertical cascade with branch outputs (e.g. plasma vs memory cells)
   would carry more of the detail the script narrates.
5. **`antibodyStructure`** — a coded labelled Y-antibody (variable vs constant
   region, two binding sites) for L11, which would let the antibody-structure
   concept scene drop its reliance on the hook image alone.
