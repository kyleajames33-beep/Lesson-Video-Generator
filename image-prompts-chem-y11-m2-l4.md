# ChatGPT image-creator brief — Chem Y11 M2 L4 (Gases & Molar Volume)

ONE prompt now. The other two L4 visuals (the three-flasks concept and
the formula triangle) are rendered as CODED Remotion diagrams, not
generated images — so they're deterministic, on-palette, and animate
with the narration. No image needed for those.

Style reference: `public/assets/carbon-12-molar-mass-balance.png` — chunky
isometric 3D, matte finish, restrained chem-green / amber / charcoal palette.

**Hard rules:**
- 2048 × 2048 PNG, true alpha-channel transparent background (no baked
  colour, no white, no checkerboard)
- NO text, letters, numerals, formulas, or labels anywhere
- Render a CONCRETE laboratory scene a muted-volume student can read —
  real apparatus, not abstract shapes
- Match the reference asset's form-language

---

## Prompt — Same gas volume, two temperatures (STP vs SATP)

**Save to:**
`c:/lesson-video-generator/public/assets/hscscience/generated/lesson-4-gases-molar-volume/two-conditions-compare.png`

**Used by:** the second worked-example scene (the 4.96 L CO₂ at STP vs SATP).

**Why this teaches:** the worked example shows the SAME gas sample giving
DIFFERENT moles depending on whether you use STP or SATP. The image makes
that physical: two identical gas-syringe setups, one in an ice bath
(cold = STP), one at room temperature (warm = SATP), with the cold one
visibly more compressed. A student can read "colder = more compressed =
more moles in the same volume" from the picture alone.

```
A premium editorial 3D illustration in the chunky isometric style of Notion and Linear onboarding artwork — applied to HSC chemistry. The scene: two identical chunky 3D gas syringes (graduated cylinders with a piston), standing upright side by side on a soft ground plane, exactly the same size. The LEFT syringe sits in a chunky shallow tray of ice cubes (pale blue ice blocks around its base), representing cold STP conditions — its piston is pushed DOWN lower and the gas particles inside (small soft-green spheres) are packed CLOSE together near the bottom. The RIGHT syringe sits on the bare bench at room temperature, with a small soft-amber warmth glow around its base — its piston is HIGHER and the same small soft-green gas particles inside are spread further apart. Both syringes contain the same TYPE of particle (soft-green spheres) but the cold one is visibly more compressed. Each setup casts a soft contact shadow. Render with a fully transparent PNG background — true alpha channel, no background colour, no white, no mint tint, no checkerboard. The two syringes, ice tray, and warmth glow sit in empty transparent space. Soft single-source light upper-left, slight 3/4 isometric tilt, 20-degree downward camera angle. Square 2048x2048. ABSOLUTELY NO text, letters, numerals, temperature scales, gas labels, condition labels, or background colour anywhere. No cartoon faces. No glossy plastic. The two piston heights and the ice-vs-warmth cue tell the whole story: same gas, colder is more compressed.

Critically important: this image will be composited onto a light slide background by software. ANY baked background colour will create a visible card-shape around the content and ruin the layout. The file must have true alpha-channel transparency.
```

---

## After saving

```powershell
ls c:/lesson-video-generator/public/assets/hscscience/generated/lesson-4-gases-molar-volume/
```
Should list: `two-conditions-compare.png`

Registry + JSON already wired to `l4TwoConditionsCompare`. Studio picks it
up on next refresh.
