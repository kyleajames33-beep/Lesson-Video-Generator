# Image prompts — Chemistry Year 12, Module 8 (Applying Chemical Ideas), Lessons 9–16

Save all generated PNGs (transparent, alpha channel) under:
`public/assets/hscscience/generated/`

Each lesson was built **lean**: exactly **one hook image** plus **one concept
visual**. Where a coded `DiagramConfig` type teaches the idea cleanly, the
concept visual is a coded diagram (no PNG needed). The only PNGs required are
the **eight hook images** below (one per lesson).

Every prompt below must produce a **transparent PNG with an alpha channel**, no
embedded text, no labels and no numbers, a clean instructional style that
matches the dark/doodled design system, and a concrete real
instrument / lab / molecular scene (no abstract art).

---

## Coded concept visuals (already implemented — NO PNG needed)

| Lesson | Topic | Concept visual (coded diagram) | Scene |
|---|---|---|---|
| L9  | Nutrient pollution & eutrophication | `flow` (Nutrient loading → Algal bloom → Plant death → Decomposition, BOD up → Hypoxia, fish kill) | "The full eutrophication chain" |
| L10 | Water treatment processes | `flow` (Coagulation → Flocculation → Sedimentation → Filtration → Disinfection) | "The treatment train" |
| L11 | Drug classification & functional groups | `table` (functional group / chemical effect) | "Key functional groups in drugs" |
| L12 | Acid-base properties of drugs | `table` (location / pH / form favoured) | "Aspirin in the stomach and intestine" |
| L13 | Optical isomerism & chirality | `beforeAfter` (R-enantiomer sedative / S-enantiomer teratogenic) | "The thalidomide case" |
| L14 | Solubility, polarity & drug delivery | `table` (route / chemistry requirement) | "Drug delivery routes" |
| L15 | Drug synthesis & green chemistry | `barChart` (E-factor of Route A / B / C) | "Catalysts compared across routes" |
| L16 | Polymers — structure, properties | `beforeAfter` (Addition / Condensation polymerisation) | "Addition versus condensation" |

All coded types above (`flow`, `table`, `beforeAfter`, `barChart`) are already
implemented in `src/lesson/types.ts` and accepted by
`scripts/validate-lesson.mjs`. **No new diagram types were created and no shared
files were touched.**

---

## Required hook images (one per lesson — generate these eight)

### L9 — `eutrophicationLake`
**Save to:** `public/assets/hscscience/generated/m8-l9-eutrophication-lake.png`
A still freshwater lake choked with a thick bright-green algal bloom across the
surface, with two or three dead fish floating belly-up near a reedy shoreline.
Realistic environmental scene, overcast soft light, water visibly turbid and
green, isolated on a fully transparent background with alpha channel, no text,
no labels.

### L10 — `waterTreatmentPlant`
**Save to:** `public/assets/hscscience/generated/m8-l10-water-treatment-plant.png`
A municipal drinking-water treatment plant showing a row of large circular
clarifier and sedimentation tanks with clean water and central rotating arms,
pipework running between them. Realistic industrial aerial-angle view, daytime,
clean instructional look, isolated on a fully transparent background with alpha
channel, no text, no labels.

### L11 — `aspirinMolecule`
**Save to:** `public/assets/hscscience/generated/m8-l11-aspirin-molecule.png`
A single clean three-dimensional ball-and-stick model of an aspirin
(acetylsalicylic acid) molecule, clearly showing the benzene ring, the
carboxylic acid group and the ester group, standard atom colouring (grey carbon,
red oxygen, white hydrogen). Realistic molecular render, soft studio lighting,
isolated on a fully transparent background with alpha channel, no text, no
labels.

### L12 — `entericCoatedTablet`
**Save to:** `public/assets/hscscience/generated/m8-l12-enteric-coated-tablet.png`
A cross-section of a single enteric-coated aspirin tablet showing the white drug
core surrounded by a distinct smooth outer protective coating layer. Realistic
pharmaceutical product render, crisp macro focus, clean studio lighting, isolated
on a fully transparent background with alpha channel, no text, no labels.

### L13 — `thalidomideStory`
**Save to:** `public/assets/hscscience/generated/m8-l13-thalidomide-story.png`
Two three-dimensional ball-and-stick models of the same molecule arranged as
mirror images facing each other across a vertical mirror plane, one the left-hand
form and one the right-hand form, identical atoms but non-superimposable
handedness, standard atom colouring. Realistic molecular render emphasising the
mirror-image symmetry, soft lighting, isolated on a fully transparent background
with alpha channel, no text, no labels.

### L14 — `transdermalPatch`
**Save to:** `public/assets/hscscience/generated/m8-l14-transdermal-patch.png`
A single transdermal medicated skin patch applied to a patch of human upper arm,
square adhesive patch with a translucent drug-reservoir membrane, skin softly lit.
Realistic medical product scene, three-quarter view, clean instructional look,
isolated on a fully transparent background with alpha channel, no text, no labels.

### L15 — `aspirinSynthesisFlask`
**Save to:** `public/assets/hscscience/generated/m8-l15-aspirin-synthesis-flask.png`
A round-bottom flask on a heating mantle with a reflux condenser attached,
containing a clear reaction mixture, with a small beaker of white salicylic-acid
powder beside it. Realistic organic-synthesis bench scene depicting an aspirin
preparation, soft lab lighting, isolated on a fully transparent background with
alpha channel, no text, no labels.

### L16 — `kevlarVsPolyethylene`
**Save to:** `public/assets/hscscience/generated/m8-l16-kevlar-vs-polyethylene.png`
A split still-life pairing a rigid woven golden-yellow aramid (Kevlar) fibre
sheet on one side with a thin crumpled translucent polyethylene plastic bag on
the other side, both materials clearly distinct in texture. Realistic materials
photography, even studio lighting, isolated on a fully transparent background
with alpha channel, no text, no labels.
