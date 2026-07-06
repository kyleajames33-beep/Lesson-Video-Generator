# Image generation prompts — Chemistry Year 12, Module 5 (Lessons 10–18)

Equilibrium and Acid Reactions. One didactic hook image per lesson (visuals-lean
rule: ≤1 hook image + ≤1 coded diagram per lesson; all coded diagrams reuse
existing `DiagramConfig` types, so no diagram images are needed).

**Universal requirements for every image below**
- **Transparent PNG with a real alpha channel** (not white, not a flat colour) — the
  slide compositor places these over a dark doodled background.
- Style: clean, modern, flat editorial science illustration; confident line work
  with restrained fills; a single accent hue per image; NO photoreal clutter, NO
  text baked into the image, NO watermarks, NO drop shadows on a fake card.
- Aspect roughly 4:3, subject centred with breathing room, safe margins.
- Must teach the specific concept named — not a generic "chemistry" vibe.

Save every file (exact name, lowercase-with-hyphens optional but keep the camelCase
asset key as the stem) under:
`public/assets/hscscience/generated/`

---

## Lesson 10 — Calculating Keq and ICE Tables
**Asset key:** `m5L10HookIceMeasurement`
**Save as:** `public/assets/hscscience/generated/m5L10HookIceMeasurement.png`

Didactic prompt: A single sealed glass reaction flask containing a faint
brown-tinted gas, with one horizontal beam of light passing through it and emerging
into a small stylised detector/sensor. From that one beam, three clean arrows fan
out to three labelled-but-empty value chips (leave the chips blank — no text),
visually conveying "one measurement unlocks several unknown concentrations." Accent
colour teal-green. Convey precision and deduction, a scientific measurement turning
into a set of derived numbers. Transparent background, alpha channel.

---

## Lesson 11 — ICE Table Mastery (★ Consolidation)
**Asset key:** `m5L11HookExamTrap`
**Save as:** `public/assets/hscscience/generated/m5L11HookExamTrap.png`

Didactic prompt: A stylised exam paper or answer grid with three small warning
markers (a subtle caution glyph) pinned at three different spots, each marker over a
blank cell, suggesting "marks leak in three predictable places." Beside it, a single
clean checkmark badge implying the fix. No real text. Mood: focused, corrective, not
alarmist. Accent colour amber/gold over neutral greys. Transparent background, alpha
channel.

---

## Lesson 12 — The Reaction Quotient Q
**Asset key:** `m5L12HookReactionGps`
**Save as:** `public/assets/hscscience/generated/m5L12HookReactionGps.png`

Didactic prompt: A clean GPS / navigation metaphor for chemistry: a curved dotted
route line on a minimal map, with a "current position" pin partway along and a
distinct "destination" flag at the end. The route arrow points from the position pin
toward the destination, conveying "Q is where you are now, Keq is the destination,
the gap tells you the direction." No text labels baked in. Accent colour blue-teal.
Transparent background, alpha channel.

---

## Lesson 13 — Temperature, Keq and Colourimetry
**Asset key:** `m5L13HookTemperatureKeq`
**Save as:** `public/assets/hscscience/generated/m5L13HookTemperatureKeq.png`

Didactic prompt: A thermometer rising beside a single equilibrium flask whose colour
shifts along its height (a clear gradient from a pale tint at the bottom to a deeper
tint at the top), visually linking "temperature changes the equilibrium constant."
Small thin arrows show heat entering. Emphasise that temperature is the lever. No
baked text. Accent colour warm orange transitioning to teal. Transparent background,
alpha channel.

---

## Lesson 14 — Ka, Kb and Gibbs Free Energy
**Asset key:** `m5L14HookKeqFamily`
**Save as:** `public/assets/hscscience/generated/m5L14HookKeqFamily.png`

Didactic prompt: A central large "K" emblem with four clean connector lines radiating
to four small distinct icon badges (an acid drop, a base drop, a water droplet, and a
small solid crystal) — conveying "one equilibrium constant, four costumes: Ka, Kb,
Kw, Ksp." Keep the badges as simple pictograms, NO text. Accent colour rose/magenta
over neutral. Transparent background, alpha channel.

---

## Lesson 15 — Dissolution and First Nations Knowledge
**Asset key:** `m5L15HookHotColdPacks`
**Save as:** `public/assets/hscscience/generated/m5L15HookHotColdPacks.png`

Didactic prompt: Two simple beakers side by side, each with an ionic solid dissolving
into water (small dissolving-crystal cues and dispersing dots). The left beaker emits
gentle warmth wavy lines (warming); the right beaker shows small frost/cold cues
(cooling) — visually contrasting exothermic versus endothermic dissolution. Balanced,
symmetric composition. No baked text. Accent: warm orange on the left, cool blue on
the right. Transparent background, alpha channel.

---

## Lesson 16 — Solubility Rules and Precipitation
**Asset key:** `m5L16HookPrecipitate`
**Save as:** `public/assets/hscscience/generated/m5L16HookPrecipitate.png`

Didactic prompt: Two clear solutions being combined — one stream pouring into a beaker
of another — with a cloudy solid (precipitate) forming and settling at the moment of
mixing, shown as a soft suspension of fine particles. Convey "two clear liquids make a
solid." Clean and crisp, not messy. No baked text. Accent colour teal with a neutral
precipitate. Transparent background, alpha channel.

---

## Lesson 17 — The Solubility Product Ksp
**Asset key:** `m5L17HookSaturatedSolution`
**Save as:** `public/assets/hscscience/generated/m5L17HookSaturatedSolution.png`

Didactic prompt: A single beaker of a saturated solution with a small layer of
undissolved solid crystals at the bottom, and a few free ions (small + and − circle
pairs, no text) suspended just above the solid, with tiny double-headed arrows between
the solid and the dissolved ions to convey the dynamic dissolution equilibrium that
Ksp quantifies. Emphasise "even insoluble salts dissolve a tiny, measurable amount."
Accent colour indigo/teal. Transparent background, alpha channel.

---

## Lesson 18 — Qsp, Precipitation and the Common Ion Effect
**Asset key:** `m5L18HookWillItPrecipitate`
**Save as:** `public/assets/hscscience/generated/m5L18HookWillItPrecipitate.png`

Didactic prompt: A balance/decision metaphor for precipitation: a simple two-pan
balance, one pan holding a cluster of free dissolved ions (small + and − circles) and
the other holding a small solid crystal, with the beam tipping toward the solid side
and a large clean question-mark hovering above the pivot — conveying "will it
precipitate? compare Qsp with Ksp." No baked text. Accent colour teal-green with a
neutral crystal. Transparent background, alpha channel.

---

## Coded diagrams (NO image generation required — built-in DiagramConfig types reused)
- L10 `concept-ice`: `table` — ICE table (N₂ + 3H₂ ⇌ 2NH₃, I/C/E rows).
- L11: none (consolidation lesson; leans on worked examples per the no-double-teaching rule).
- L12 `concept-rule`: `barChart` — Q vs Keq three-way rule.
- L13 `concept-temp`: `table` — Keq response to temperature (exo vs endo).
- L14 `concept-gibbs`: `gibbsSpontaneity` — ΔG° / Keq / spontaneity (reused from M5 L2).
- L15 `concept-energetics`: `beforeAfter` — lattice energy (in) vs hydration energy (out).
- L16 `concept-rules`: `table` — NAGSAG solubility-rules grid.
- L17 `concept-expression`: `table` — formula type → Ksp-in-terms-of-s (s², 4s³, 27s⁴).
- L18 `concept-qsp`: `table` — Qsp vs Ksp decision rule.
