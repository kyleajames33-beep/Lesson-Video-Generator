# ChatGPT image-creator brief — Chem Y11 M2 L5 (Mole Calculations Consolidation)

Three prompts, transparent PNGs, ready to paste one-at-a-time into the
ChatGPT image creator. Save each result at the path listed under its
prompt. Asset registry and lesson JSON are already wired.

Style reference (link this in chat first):
`public/assets/carbon-12-molar-mass-balance.png` — chunky isometric 3D,
matte finish, warm but minimal palette. Match that energy across all three.

---

## Prompt 1 — The mole hub (n at the centre, four pathways)

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-5-mole-consolidation/mole-hub.png`

**Used by:** the "n is the hub" concept scene.

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene is a hub-and-spoke diagram. At the centre, a single large chunky 3D orb in warm amber-gold (#d4956a), floating slightly above the ground plane and casting a soft drop shadow. Four equally-spaced satellite shapes surround it at the cardinal compass points, each connected to the central orb by a soft hand-drawn double-headed arrow in slate-grey (#6a7a7a). Each satellite is a different chunky 3D form representing a different physical quantity, NO text or labels: TOP satellite — a small cluster of tiny dot-spheres (representing N, number of particles), rendered in dark navy (#1e3a5f). RIGHT satellite — a small chunky 3D laboratory beaker in cool blue (#1e40af). BOTTOM satellite — a small chunky 3D cube with rounded edges in soft green (#059669), suggesting a molecule unit. LEFT satellite — a small chunky 3D weight-block on a tiny balance pan, in coral-red (#d65a4a). All four satellites are roughly the same visual size, smaller than the central amber orb so the hierarchy is clear: the amber orb dominates. Each satellite casts its own small soft drop shadow. The double-headed arrows curve slightly (hand-drawn quality) and have a 1-2 degree rotational imperfection. Render with a fully transparent PNG background — true alpha channel, no background colour at all, no white, no mint tint, no checkerboard pattern. The hub and satellites sit in empty transparent space. Soft single-source light upper-left, slight 3/4 isometric tilt, 20-degree downward camera angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, formulas, variables (no n, N, m, V, M letters), chemical symbols, background colour, or padding rectangle anywhere. No cartoon faces. No glossy plastic. The amber centre and four colour-coded satellites tell the entire story: moles at the hub, four quantities connect through it.

Critically important: this image will be composited onto a dark slide background by software. ANY baked background colour will create a visible card-shape around the content and ruin the layout. The file must have true alpha-channel transparency.
```

---

## Prompt 2 — Two-step formula chain (particles → moles → mass)

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-5-mole-consolidation/formula-chain.png`

**Used by:** the warm-up worked example (NH₃ particles → mass).

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene: a horizontal three-stage flow from LEFT to RIGHT, sitting on a soft horizontal ground plane. Stage 1 (left): a small dense cluster of tiny dark-navy dot-spheres (#1e3a5f), suggesting a swarm of particles. Stage 2 (middle): a single chunky 3D amber-gold orb (#d4956a), larger than the dot-cluster, floating at the same height — this represents the moles hub. Stage 3 (right): a chunky 3D weight-block in coral-red (#d65a4a) resting on a small balance pan, representing mass on a scale. Between stages, two soft hand-drawn arrows in slate-grey (#6a7a7a) curve gently from stage 1 to stage 2, and from stage 2 to stage 3. The arrows have hand-drawn quality with 1-2 degree imperfection. The amber middle orb is visibly larger than the satellite shapes on either side, reinforcing that the middle step is the hub. Each shape casts its own soft drop shadow on the ground plane. Render with a fully transparent PNG background — true alpha channel, no background colour at all, no white, no mint tint, no checkerboard pattern. The three stages and arrows sit in empty transparent space. Soft single-source light upper-left, slight 3/4 isometric tilt, 20-degree downward camera angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, formulas, variables, chemical symbols, background colour, or padding rectangle anywhere. No cartoon faces. No glossy plastic. The three colour-coded stages and the two arrows tell the story of chaining through moles.

Critically important: this image will be composited onto a dark slide background by software. ANY baked background colour will create a visible card-shape around the content and ruin the layout. The file must have true alpha-channel transparency.
```

---

## Prompt 3 — The mystery gas

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-5-mole-consolidation/mystery-gas.png`

**Used by:** the headline worked-example scene (the 2.24 L mystery).

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene: a single large chunky 3D laboratory gas-collection flask, rounded and slightly translucent, resting on a horizontal ground plane. Inside the flask, swirling clouds of small dot-spheres in two colours mix together visibly — many small charcoal-grey spheres (#2d2d2d) representing carbon atoms, and roughly three times as many off-white spheres (#f4f4f0) representing hydrogen atoms. The two colours intermix in a soft cloud pattern, suggesting an unknown gaseous mixture being identified. A small chunky 3D balance-scale icon floats just to the LEFT of the flask, with the balance arm in a neutral horizontal position, suggesting mass measurement. A small chunky 3D thermometer-icon floats just to the RIGHT of the flask with the mercury bulb LOW (cold, suggesting STP conditions). Both side-icons are smaller than the main flask and clearly secondary. A single large question-mark SHAPE (NOT a printed character — render it as a chunky 3D rounded form, like a sculpted question-mark hook) floats above the flask in soft amber-gold (#d4956a), suggesting mystery. The whole composition casts soft contact shadows on the ground plane. Render with a fully transparent PNG background — true alpha channel, no background colour at all, no white, no mint tint, no checkerboard pattern. The flask, icons, and question-mark shape sit in empty transparent space. Soft single-source light upper-left, slight 3/4 isometric tilt, 20-degree downward camera angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, formulas (no CH₄, no C, no H), units, condition labels, background colour, or padding rectangle anywhere. No cartoon faces on the flask. No glossy plastic. The two-coloured gas swarm, the balance, the thermometer, and the question-mark shape tell the entire story: a mystery gas being measured and identified.

Critically important: this image will be composited onto a dark slide background by software. ANY baked background colour will create a visible card-shape around the content and ruin the layout. The file must have true alpha-channel transparency. The "question mark" must be a sculpted 3D SHAPE in the image, not a typeset character — if you cannot render it as a sculpted shape, omit it entirely (the gas swarm in the flask is enough).
```

---

## After saving all three

Folder check:
```powershell
ls c:/lesson-video-generator/public/assets/hscscience/generated/lesson-5-mole-consolidation/
```

Should list exactly:
- `mole-hub.png`
- `formula-chain.png`
- `mystery-gas.png`

The asset registry and lesson JSON already reference these filenames. Once
the PNGs land, Studio picks them up on next refresh — no other edits needed.
