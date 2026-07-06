# ChatGPT image-creator brief — Chem Y11 M2 L3 (Empirical & Molecular Formulas)

Two prompts, transparent PNGs. Paste one at a time into the ChatGPT
image creator. Save each result at the listed path. Asset registry
and lesson JSON are already wired.

Style reference: `public/assets/carbon-12-molar-mass-balance.png` — chunky
isometric 3D, matte finish, restrained palette. Every image should look
like a sibling of that reference.

**Hard rules across both prompts:**
- 2048 × 2048 square PNG, true alpha-channel transparent background (no
  baked colour, no white, no checkerboard pattern)
- NO text, letters, numerals, formulas, percentages, or labels anywhere
- Render real laboratory subjects (beakers, balances, molecular models)
  — NOT abstract orbs, generic cubes, or decorative shapes
- A muted-volume viewer should be able to read the teaching point from
  the visual alone

---

## Prompt 1 — Empirical vs molecular comparison

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-3-empirical-molecular/empirical-vs-molecular.png`

**Status:** ✅ Already generated and saved (the one you approved earlier).

**Used by:** the "Empirical vs molecular" concept scene.

(Prompt kept here for reference / future regeneration. No action needed.)

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene: a small cluster of three ball-and-stick atoms on the left (one dark charcoal sphere, two off-white spheres, one warm coral-red sphere — representing a simple molecular unit) and on the right, exactly six identical copies of that same small cluster arranged in a tidy 2-by-3 grid, all combined into one larger composite molecular structure. The small cluster on the left should be clearly the same building block, just shown alone. The large structure on the right is the same building block multiplied six times and bonded together. Both sit on a soft horizontal ground plane with gentle contact shadows. Render with a fully transparent PNG background — true alpha channel, no background colour at all, no white, no mint tint, no checkerboard pattern. Matte surfaces with subtle hand-touched grain. Soft single-source light from upper-left, 20-degree downward camera tilt, slight 3/4 isometric angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, labels, formulas, or chemical symbols anywhere in the image. No cartoon faces. No glossy plastic. No photorealism.
```

---

## Prompt 2 — 100 g sample mass breakdown

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-3-empirical-molecular/mass-breakdown-100g.png`

**Used by:** the worked-example scene.

**Why this image teaches:** the worked-example problem starts "a compound
is 40 % C, 6.7 % H, 53.3 % O". The first step is to assume a 100 g
sample so the percentages become grams. This image *shows that step
physically* — a single beaker on a balance, contents visibly divided
into three coloured layers in the correct mass proportions. A student
who sees this can immediately read the trick: "ah, 100 g splits into
40, 7, and 53 by mass". No narration needed.

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene: a single chunky 3D laboratory beaker, slightly translucent glass, sitting on a chunky digital benchtop balance. The beaker is filled with a granular solid divided into THREE clearly visible horizontal layers of contrasting colour, stacked from bottom to top in these specific proportions: BOTTOM layer takes up about 40% of the beaker's vertical content, coloured dark charcoal grey (#2d2d2d), with visible granular texture suggesting carbon powder. MIDDLE layer is very thin, only about 7% of the vertical content, coloured warm off-white cream (#f4f4f0), suggesting hydrogen-rich material as a fine band. TOP layer takes up about 53% of the vertical content, coloured warm coral-red (#d65a4a), with granular texture suggesting an oxygen-containing solid. The three layers are stacked in a single beaker like a layered sand jar — clearly visible boundaries between them, no mixing. The balance underneath the beaker is rendered as a chunky 3D weighing platform with a small digital readout panel facing the viewer (the panel is BLANK — no numerals rendered, the screen is a featureless glowing rectangle in a soft teal tint). A small ground-plane shadow sits below the balance. Render with a fully transparent PNG background — true alpha channel, no background colour, no white, no mint tint, no checkerboard pattern. The beaker, balance, and shadow sit in empty transparent space. Soft single-source light upper-left, slight 3/4 isometric tilt, 20-degree downward camera angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, percentages, element symbols, gram markings, or labels of any kind. The digital balance display must be blank. No cartoon faces. No glossy plastic. The three coloured layer heights tell the entire story: a 100 g sample broken down by mass into its three element portions.

Critically important: this image will be composited onto a dark slide background by software. ANY baked background colour will create a visible card-shape around the content and ruin the layout. The file must have true alpha-channel transparency.
```

---

## After saving the new PNG

Folder check:
```powershell
ls c:/lesson-video-generator/public/assets/hscscience/generated/lesson-3-empirical-molecular/
```

Should list:
- `empirical-vs-molecular.png` (already saved)
- `mass-breakdown-100g.png` (the new one)

The asset registry and lesson JSON are already wired to this filename
(`l3MassBreakdown100g`). Once the PNG lands, Studio picks it up on next
refresh — no other edits needed.

---

## Note — what was dropped from this brief

Two earlier abstract prompts (a "four-step procedure flow" of vertical
tiles and an "empty isometric data table") have been removed. They
weren't didactic — they were decorative shapes that competed with
the actual teaching content on those slides. The four-step concept
scene now reads its content from bullets directly. The worked-example
scene gets one concrete image (this new one) instead of an empty
table next to the calculation.
