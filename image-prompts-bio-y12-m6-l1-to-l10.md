# ChatGPT image-creator brief — Bio Y12 M6 (Genetic Change), Lessons 1–10

DIDACTIC images a muted-volume student can read — concrete, recognisable
biology, not abstract decoration. Paste one prompt at a time into the ChatGPT
image creator and save at the listed path. The lesson JSONs are already wired
to these camelCase asset names; register each name in `src/assets/index.ts`
and the asset registry, then run `npm run validate:lessons`.

> **Lean visual policy:** every lesson uses CODED Remotion diagrams on the
> concept scenes (`table`, `beforeAfter`) plus **exactly ONE generated image —
> the hook**. The 10 images below are the complete generation list for L1–L10.
> No worked-example, definition, or quick-check scene carries an image; those
> stay clean text + coded diagrams.

**Hard rules for every image:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard pattern).
- NO text, letters, numerals, base-letters (A/T/G/C), codons, formulas,
  words-on-arrows, or labels anywhere. Concepts are carried by shape,
  colour, and arrangement only.
- Concrete, recognisable biology / real organisms / real apparatus, not
  abstract geometric shapes, orbs, or decorative cubes.
- Chunky isometric 3D, matte finish, soft single-source key light from the
  upper-left, ~20° downward isometric tilt, soft contact shadows.
- Biology palette: teal / emerald / amber / charcoal, warm and friendly.
  Every image should look like a sibling of the others in this set.
- End each prompt with: "The file must have true alpha-channel transparency
  so it composites cleanly onto a light slide background."

> **DNA & molecular models:** render DNA as a clean, chunky double helix with
> smooth rungs — never with individual letters on the bases. Where chromosomes
> appear, use simple rounded X-shaped bodies in distinct flat colours so
> segments are visually trackable. Keep everything matte and chunky, never
> glossy plastic, never with cartoon faces.

---

## L1 — `bioM6L1Superbug` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/superbug-pre-existing-resistance.png`

Used by the hook scene: in a dish of bacteria, a rare resistant variant already exists before any antibiotic arrives — selection later makes it common, it is not created on demand. (L1's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. A round clear petri dish viewed at a 20-degree downward isometric tilt, holding many small rounded rod-shaped bacteria of one uniform soft-teal colour, except for two or three distinctly amber-coloured bacteria scattered among them that read as a rare pre-existing variant. A single chunky white antibiotic disc rests on the agar near one edge, casting a soft clear zone around itself where the teal bacteria have thinned out, while the amber variant bacteria nearest the disc remain standing and untouched. Soft contact shadow under the dish, matte finish, chunky rounded forms, single soft light from the upper-left, teal and amber and charcoal palette. NO text, numerals, or labels anywhere. The teaching point: a resistant variant that already existed surviving where the others are cleared away — selection choosing, not creating. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L2 — `bioM6L2RadiationDna` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/radiation-dna-damage-risk.png`

Used by the hook scene: an energetic ray strikes a DNA helix and distorts a small region — raising the risk of a lasting change, not guaranteeing one. (L2's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. A clean chunky DNA double helix standing diagonally across the frame, matte teal and charcoal, with smooth featureless rungs (NO letters on the bases). From the upper-left, a single stylised energetic ray — a clean amber arrow-like beam of light, no text — strikes one short section of the helix, where the rungs are shown slightly buckled and warped to read as localised damage. A small soft glow marks the impact point. The rest of the helix remains smooth and intact. Soft contact shadow beneath the helix, matte finish, chunky rounded forms, single soft light from the upper-left, 20-degree downward isometric tilt, teal and amber and charcoal palette. NO text, numerals, base-letters, or labels. The teaching point: radiation as a mutagen damaging one region of DNA and raising mutation risk. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L3 — `bioM6L3SickleCell` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/sickle-cell-red-blood-cells.png`

Used by the hook scene: among smooth biconcave red blood cells, one rigid sickle-shaped cell stands out — the visible end of a single-base change. (L3's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. A small group of healthy red blood cells rendered as smooth, rounded, coral-red biconcave discs flowing together at a 20-degree downward isometric tilt. Among them sits one clearly deformed cell bent into a rigid crescent sickle shape, distinct in silhouette from the smooth discs around it. Off to the upper-left, a small clean chunky DNA double helix (matte teal, smooth featureless rungs, NO letters) is shown with one single rung subtly highlighted in amber to hint that one tiny change underlies the deformed cell — connected by simple visual proximity, not by any arrow or text. Soft contact shadows under the cells, matte finish, chunky rounded forms, single soft light from the upper-left, coral-red, teal and charcoal palette. NO text, numerals, base-letters, or labels. The teaching point: a single sickled cell among normal ones, traced to one tiny DNA change. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L4 — `bioM6L4ChromosomeTypes` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/chromosomal-mutation-types.png`

Used by the hook scene: chunky coloured chromosomes show large-scale structural rearrangement at a glance — segments lost, doubled, flipped and moved. (L4's concept scenes use a coded `table` diagram. **See DIAGRAM REQUESTS** — a dedicated coded `chromosomeMutation` diagram would let this become a coded scene later.)
```
Chunky isometric 3D illustration, HSC biology. Four chunky rounded X-shaped chromosomes arranged in a clean row at a 20-degree downward isometric tilt, each chromosome built from clearly distinguishable coloured bands (soft teal, emerald, amber, coral) stacked along its arms so individual segments are easy to track by eye. The four chromosomes are deliberately different from one another to suggest four kinds of large-scale rearrangement: the first is missing one coloured band (a gap), the second has one band repeated twice in a row, the third has a run of bands in reversed colour order, and the fourth has one band that clearly belongs to a different colour family from its neighbours (a moved segment). Soft contact shadows beneath each chromosome, matte finish, chunky rounded forms, single soft light from the upper-left, teal-emerald-amber-coral palette on charcoal. NO text, numerals, or labels. The teaching point: structural chromosome changes shown purely through coloured segment patterns. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L5 — `bioM6L5SomaticGermline` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/somatic-vs-germline-body.png`

Used by the hook scene: a simple human figure contrasts a mutation in an ordinary body region (stays with the individual) against one in the reproductive cells (passed on). (L5's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. A single simplified, friendly human body figure (no facial features, smooth matte charcoal-teal form) shown standing at a 20-degree downward isometric tilt. One small soft amber glow marks an ordinary region of the upper body (an arm or torso) to represent a body-cell change confined to the individual. Lower down, a separate small emerald glow marks the reproductive region, and just beside the figure two simple rounded gamete shapes (one large round egg cell, one small tadpole-shaped sperm cell) carry the same emerald glow, indicating a change that can be passed to offspring. The two glows are clearly different colours so the viewer reads them as two distinct cases. Soft contact shadow beneath the figure, matte finish, chunky rounded forms, single soft light from the upper-left, teal, emerald, amber and charcoal palette. NO text, numerals, or labels. The teaching point: a somatic change that stays with the body versus a germ-line change carried in the gametes. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L6 — `bioM6L6FinchBeaks` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/finch-beak-variation.png`

Used by the hook scene: several finches with visibly different beak depths show heritable variation already present in a population — no new mutation needed. (L6's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. Three or four small rounded finch birds perched on a simple chunky branch at a 20-degree downward isometric tilt, all clearly the same species (matte warm-brown and charcoal plumage) but rendered with visibly different beak sizes — one notably shallow and slender, one medium, one deep and broad — so the range of beak depth is obvious at a glance. The birds are friendly and simplified, no exaggerated cartoon faces. A soft amber ground plane sits beneath the branch. Soft contact shadows under the branch and birds, matte finish, chunky rounded forms, single soft light from the upper-left, warm-brown, amber, teal and charcoal palette. NO text, numerals, or labels. The teaching point: heritable variation in beak depth already existing across individuals in one population. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L7 — `bioM6L7Cichlids` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/cichlid-divergence-isolation.png`

Used by the hook scene: brightly different cichlid fish, separated by water, show gene pools diverging once gene flow between groups stops. (L7's concept scenes use a coded `table` diagram.)
```
Chunky isometric 3D illustration, HSC biology. Two small separate clusters of cichlid fish swimming, viewed at a 20-degree downward isometric tilt, with a simple chunky underwater rock ridge running between them so the two groups read as physically separated. The left cluster of fish is one distinct flat colour (soft teal-blue), the right cluster is a clearly different distinct colour (warm amber-gold), making the divergence between the two isolated groups obvious purely through colour. The fish are simplified and friendly, smooth matte bodies, no cartoon faces. Gentle rounded water-current lines (not text) suggest two separate pools. Soft contact shadows, matte finish, chunky rounded forms, single soft light from the upper-left, teal-blue, amber-gold and charcoal palette. NO text, numerals, or labels. The teaching point: two isolated sub-populations whose gene pools have diverged in colour once gene flow stopped. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L8 — `bioM6L8FermentationScope` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/fermentation-traditional-modern.png`

Used by the hook scene: an ancient fermentation jar beside a modern stainless fermenter shows the same biological process spanning traditional and modern biotechnology. (L8's concept scenes use coded `beforeAfter` + `table` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. Two objects standing side by side on a soft ground plane at a 20-degree downward isometric tilt. On the left, a rounded earthenware clay fermentation jar (warm terracotta-amber, matte) with a loaf of bread and a simple cluster of grapes resting beside it, reading as ancient, traditional fermentation. On the right, a clean chunky stainless-steel industrial fermenter tank with rounded forms, a small viewing window, and simple pipes, reading as modern industrial biotechnology. Floating gently between the two, a few simple rounded yeast cells (small soft-emerald spheres with tiny budding bumps) make clear that the same living organism links both. Soft contact shadows beneath each object, matte finish, chunky rounded forms, single soft light from the upper-left, terracotta-amber, steel-grey, emerald and charcoal palette. NO text, numerals, or labels. The teaching point: the same fermentation organism powering both ancient and modern biotechnology. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L9 — `bioM6L9GoldenRice` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/golden-rice-stakeholders.png`

Used by the hook scene: a bowl of golden-coloured rice grains beside an ordinary pale bowl signals a beneficial biotechnology that is nonetheless ethically contested. (L9's concept scenes use a coded `table` diagram of stakeholders.)
```
Chunky isometric 3D illustration, HSC biology. Two simple rounded ceramic bowls side by side on a soft ground plane at a 20-degree downward isometric tilt. The left bowl is filled with pale off-white rice grains (ordinary rice). The right bowl is filled with grains of a warm, rich golden-amber colour, clearly distinct from the pale rice, to represent the nutrient-enriched variety. A single slender green rice plant stalk with a drooping seed head leans gently beside the golden bowl. The contrast in grain colour between the two bowls is the focus. Soft contact shadows beneath the bowls, matte finish, chunky rounded forms, single soft light from the upper-left, golden-amber, off-white, leaf-green and charcoal palette. NO text, numerals, or labels. The teaching point: a deliberately nutrient-enriched golden rice set beside ordinary rice. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L10 — `bioM6L10Crispr` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/crispr-targeted-editing.png`

Used by the hook scene: a guide complex pinpoints one exact spot on a DNA helix — targeted gene editing, the precision step-change behind future biotechnology. (L10's concept scenes use a coded `table` diagram. **See DIAGRAM REQUESTS** — a coded `geneEditing` / CRISPR diagram would let this become a coded scene later.)
```
Chunky isometric 3D illustration, HSC biology. A clean chunky DNA double helix lying diagonally across the frame at a 20-degree downward isometric tilt, matte teal and charcoal, with smooth featureless rungs (NO letters on the bases). Clamped precisely onto one specific spot of the helix is a simplified rounded "molecular scissors" editing complex — a chunky amber-and-emerald clamp shape with a small guide strand threading into the helix at exactly that point, so the idea of precise targeting of a single location is unmistakable. A soft focused glow highlights only that one targeted spot, while the rest of the helix stays plain. Soft contact shadow beneath the helix, matte finish, chunky rounded forms, single soft light from the upper-left, teal, amber, emerald and charcoal palette. NO text, numerals, base-letters, or labels. The teaching point: a guided editing complex targeting one precise position on the DNA. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## DIAGRAM REQUESTS (bio-specific, no existing coded diagram)

These bio-specific visuals are covered by the hook **images above** for now. If
coded Remotion diagram types are added later, these lessons could drop the image
in favour of a coded scene:

1. **`chromosomeMutation`** (for L4) — animated chunky chromosomes showing
   deletion, duplication, inversion and translocation as coloured-segment
   rearrangements. Currently served by image `bioM6L4ChromosomeTypes`.
2. **`pointMutationTypes`** (for L3) — codon strip animating substitution
   (silent / missense / nonsense) vs frameshift insertion/deletion. Currently
   handled with a coded `table` plus the `bioM6L3SickleCell` hook image.
3. **`geneEditing` / CRISPR** (for L10) — a guide complex locating and editing
   one site on a helix. Currently served by image `bioM6L10Crispr`.
4. **`somaticVsGermline`** (for L5) — a body figure contrasting a body-cell
   change (not inherited) with a gamete change (inherited). Currently served by
   image `bioM6L5SomaticGermline`.

No new diagram `type`s were introduced in the JSON; all coded diagrams used are
existing types (`table`, `beforeAfter`).
