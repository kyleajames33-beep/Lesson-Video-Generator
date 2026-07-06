# Image Prompts — Chemistry Y11 Module 3 (Lessons 1–5)

Generated for ChatGPT 2.0 / DALL-E image generation. Prompts follow the same style convention as `image-generation-prompts.md` (Module 2).

---

## Universal Style Prefix

**Copy and paste this at the start of EVERY prompt:**

> Clean flat vector illustration, minimalist educational science style, smooth lines, no photorealism, no 3D renders, no shadows, subtle teal (#0d6b52) and amber (#f0a830) accent colors, simple geometric shapes, consistent 2px line weight, professional textbook diagram aesthetic, no text labels inside the image, high resolution. **OUTPUT MUST BE A PNG WITH ALPHA CHANNEL AND A FULLY TRANSPARENT BACKGROUND — NOT WHITE, NOT CREAM, NOT ANY SOLID COLOR. The artwork itself sits on transparent pixels so it can be composited onto any slide background.**

**No exceptions.** Even lab-footage scenes (fireworks against night sky, candle on dark workbench) can have their environmental context drawn into the artwork — the artwork *itself* can include a sky or a bench surface as part of the illustration. But the area *outside* the artwork must be transparent, never a white rectangle.

**Verification before saving:**
- Open the generated PNG in a viewer that shows a transparent checkerboard.
- If you see a solid white/cream rectangle behind the artwork, the background is opaque and the image is not usable as-is.
- For programmatic check: PNG color type must be **4** (greyscale + alpha) or **6** (RGBA). Color type 2 (RGB) and 3 (palette) have no alpha. Run `node -e "console.log(require('fs').readFileSync('PATH').readUInt8(25))"` — that byte is the color type.

---

## Workflow

1. Generate each image at **1920×1080** (or 16:9) — they'll fill a slide column.
2. Save as **PNG** (transparent background preferred where possible).
3. Drop files into `public/assets/hscscience/chem-y11-m3/<lessonId>/<assetName>.png` — one folder per lesson.
4. Register each asset in `src/assets/index.ts` under the names below (already referenced in the lesson JSON).
5. The lesson JSON `image:` field references the registered name (e.g. `l1HookFireIce`).

**Shared asset:** `lSummaryBadges` is generic and reused across all 5 summary scenes — generate once, register once, reference from each lesson's summary scene by replacing the lesson-specific name with the shared one (or generate 5 copies if you want variation).

---

## Lesson 1 — Physical & Chemical Change

### `l1HookFireIce` — opening question visual
> [STYLE PREFIX] A 2x2 grid showing four small scenes side-by-side: top-left a small ice cube melting into a puddle (blue tones); top-right an iron nail with brown rust spreading along it; bottom-left a sugar cube dissolving in a glass of water with swirling streaks; bottom-right a wooden match mid-burn with a small flame and smoke. Each scene framed in its own rounded square panel with thin teal borders. Clean flat vector, no text, white background.

### `l1DefinitionFiveIndicators` — five clue icons in a row
> [STYLE PREFIX] A horizontal row of five circular badges. Left to right: (1) two flasks one blue one yellow with an arrow between (colour change); (2) a beaker with rising bubbles (gas evolved); (3) a clear test tube with a downward arrow showing solid forming at the bottom (precipitate); (4) a thermometer with both up and down arrows beside it (temperature change); (5) a small solid cube with dashed lines fading away (solid disappearing). Each badge teal-bordered, amber accents inside. Clean flat vector, no text, white background.

### `l1MarginaliaAtomBalls` — conservation of mass with Lego analogy
> [STYLE PREFIX] Two side-by-side molecular structures using ball-and-stick model. Left: two H₂ molecules (4 small white spheres connected in pairs) plus one O₂ molecule (2 red spheres connected). Right: two H₂O molecules (each one red sphere bonded to two white spheres). Above the arrow connecting them, a tiny stylised Lego brick to suggest reusability. Clean flat vector, white spheres for hydrogen, teal-tinted spheres for oxygen, amber accents on bonds. White background, no text.

### `l1WorkedZincAcid` — Zn + H₂SO₄ reaction
> [STYLE PREFIX] A test tube held at a slight angle in a clamp, partially filled with clear liquid (acid). A small grey strip of zinc metal sits inside, partially dissolved with bubbles vigorously rising from its surface. A few stylised gas bubbles escape the top. The test tube glows slightly amber where the reaction is happening to suggest exothermic warmth. Clean flat vector, teal outlines, amber tints. White background, no text.

### `l1MisconceptionAmmoniumNitrate` — cold pack
> [STYLE PREFIX] A flexible plastic cold-pack pouch labelled with a snowflake icon, surrounded by frost crystals on its surface. Beside it floats a small molecular formula visual: NH₄⁺ and NO₃⁻ ions drawn as separate teal and amber spheres with no bond between them, suggesting dispersion not reaction. A red dashed circle with a cross through "chemical change" hovers nearby. Clean flat vector, white background, no text inside the image (the formula glyphs only).

### `l1LabFootageFireworks` — multi-indicator demonstration
> [STYLE PREFIX] A night sky firework burst — a central explosion radiating outward with multi-colour sparks: red, green, blue, yellow streaks suggesting different metal salts. Smoke trails curl beneath. Stylised, flat, slightly geometric — not photorealistic. Clean flat vector with teal sky background and amber/red/green/blue spark accents. White or dark navy background, no text.

### `l1QuickCheckMgCuSO4` — magnesium displacement reaction
> [STYLE PREFIX] A clear glass beaker shown side-on, containing a transparent solution that fades from blue at the top to colourless at the bottom (transition shown). A grey magnesium ribbon hangs into the solution; copper-coloured (orange-brown) crystals are forming on the ribbon's submerged surface. Bubbles of solid copper deposit visible on the metal. Clean flat vector, teal beaker outline, amber and copper-tone accents. White background, no text.

### `l1SummaryBadges` — five-takeaway badge set (REUSABLE — share across L1–L5 summaries)
> [STYLE PREFIX] Five clean circular badges arranged in a vertical stack or gentle arc. Each badge contains a single simple icon: (1) a sparkle/burst suggesting "new substance"; (2) the number "5" with five small dots; (3) two arrows merging into one ("multiple = stronger"); (4) a thermometer with a red cross over it ("not just temperature"); (5) a circular conservation arrow loop ("atoms preserved"). Clean flat vector, teal borders, amber inner accents. White background, no text.

---

## Lesson 2 — Synthesis & Decomposition

### `l2HookBeirut` — controlled vs explosive contrast
> [STYLE PREFIX] A split-frame composition. Left half: a peaceful agricultural field with crops growing, a small bag of fertiliser pellets in the foreground. Right half: a stylised explosion silhouette of a city harbour with a mushroom cloud over a warehouse. The two halves connected by a single arrow labelled with the same molecular formula icon (NH₄NO₃ rendered as a small molecular structure, no text). Clean flat vector, muted greens for the field, dark navy and amber for the explosion. White background, no readable text.

### `l2DefinitionPatternMatch` — A+B vs AB pattern
> [STYLE PREFIX] Two side-by-side flow diagrams using simple geometric shapes. Top diagram: two coloured circles (one teal, one amber) merging into one combined oval — labelled abstractly as "A + B → AB" pattern via shape only. Bottom diagram: one combined oval splitting into two coloured circles — the reverse. Clean directional arrows between shapes. Clean flat vector, teal and amber, white background, no text labels.

### `l2MarginaliaBeirutPathways` — domino chain pathway analogy
> [STYLE PREFIX] Two parallel domino chains. The top chain is partially tipped — dominoes falling slowly one after another, gentle. The bottom chain is fully cascading at once, all dominoes mid-air, suggesting an explosive chain reaction. A small molecular icon hovers above each chain (the same molecule, NH₄NO₃ stylised). Clean flat vector, teal for the controlled chain, amber/red for the explosive chain, white background, no text.

### `l2WorkedMgBurns` — magnesium ribbon combustion
> [STYLE PREFIX] A grey metal ribbon held horizontally with tongs, bursting with a brilliant white-hot flame mid-burn. Bright sparks radiating outward. A faint molecular trail showing Mg + O₂ → MgO suggested only via shape (a Mg sphere combining with O₂ pair into MgO units). Clean flat vector, white-blue centre of flame, amber outer flame, teal background tint. White background, no text.

### `l2MisconceptionElementOnly` — compound+compound synthesis
> [STYLE PREFIX] A simple equation diagram showing two molecular shapes (drawn as connected sphere clusters, not single atoms) merging into one larger shape: SO₃ (one S sphere with three O spheres) plus H₂O (two H spheres bonded to one O sphere) → H₂SO₄ (one larger merged structure). A green tick beside the equation. Clean flat vector, teal and amber spheres, white background, no text labels.

### `l2LabFootageCuCO3` — copper carbonate decomposition
> [STYLE PREFIX] A test tube held above a Bunsen burner flame. The tube starts at the bottom with green powder and gradually transitions to black powder near the top of the tube where heated. Wispy gas (CO₂) escapes from the open top of the tube as small upward streaks. Clean flat vector, green to black gradient inside the tube, amber Bunsen flame, teal outlines. White background, no text.

### `l2QuickCheckH2O2` — hydrogen peroxide decomposing
> [STYLE PREFIX] A clear bottle of liquid sitting open on a surface. From the open mouth, gentle bubbles rise — small at the surface, larger and more frequent escaping into the air. Around the bottle hover small molecular icons of H₂O (water) and O₂ (oxygen pair). Clean flat vector, teal bottle outline, amber bubble accents, white background, no text.

### `l2SummaryBadges` — see L1 (shared asset)

---

## Lesson 3 — Precipitation & Solubility Rules

### `l3HookBariumMeal` — barium meal contrast agent
> [STYLE PREFIX] Side-view profile of a person drinking from a glass containing thick white liquid. Beside them, an X-ray view of a stomach and digestive tract glowing in white where the contrast agent has settled. The liquid in the glass and the highlight inside the body are the same shade of off-white. Clean flat vector, teal medical aesthetic, amber X-ray glow accents, white background, no text.

### `l3DefinitionNAGSAG` — NAGSAG memory card
> [STYLE PREFIX] A vertical stack of six rounded rectangle cards, each card displaying a single large letter from "N-A-G-S-A-G" on its left edge in amber. To the right of each letter is a small icon: a triangle (nitrate), a periodic-table corner showing alkali metals (ammonium/alkali), three connected halide spheres (halides), an SO₄ tetrahedron silhouette (sulfates), an acetate-like double-bond shape (acetates), and a generic compound silhouette with a strikethrough (others/insoluble). Clean flat vector, teal borders, amber letters and accents. White background, no other text.

### `l3MarginaliaEquationLevels` — three resolutions
> [STYLE PREFIX] Three vertically stacked horizontal strips, each progressively more detailed. Top strip: two large simple boxes connected by an arrow (molecular). Middle strip: each box exploded into many small dot-clusters representing ions on each side, all ions visible (full ionic). Bottom strip: only two ion-cluster boxes shown — the active species — others crossed out faintly (net ionic). Clean flat vector, teal for the boxes, amber for highlighted active ions in the bottom strip, white background, no text.

### `l3WorkedBaSO4` — barium chloride + sodium sulfate
> [STYLE PREFIX] Two transparent beakers shown side-by-side, each with clear colourless liquid. One beaker labelled with floating Ba²⁺ and Cl⁻ ion symbols (drawn as small spheres with charge halos), the other with Na⁺ and SO₄²⁻. An arrow between them points to a third combined beaker where a thick white solid is settling at the bottom (BaSO₄ precipitate), with Na⁺ and Cl⁻ ions still floating in solution. Clean flat vector, teal beaker outlines, amber ion-charge accents, white precipitate. White background, no text.

### `l3MisconceptionLatticeEnergy` — tug-of-war
> [STYLE PREFIX] A horizontal rope tug-of-war diagram. Left side: a tightly bound crystal lattice cube being pulled inward by interconnected forces (lattice energy). Right side: water molecules surrounding individual ions, pulling them outward (hydration energy). The rope in the middle is taut, with a flag in the centre. The lattice side is winning slightly — flag pulled left. Clean flat vector, teal lattice cube, amber water molecules, white background, no text.

### `l3LabFootageAgCl` — silver chloride precipitation
> [STYLE PREFIX] Two clear test tubes about to be combined. Left: AgNO₃(aq) shown clear and colourless. Right: NaCl(aq) shown clear and colourless. Below them: a third test tube where the two solutions have just been mixed — instantly cloudy with a thick white precipitate suspended throughout, beginning to settle. Clean flat vector, teal test tube outlines, soft white precipitate cloud. White background, no text.

### `l3QuickCheckPbI2` — lead iodide precipitate
> [STYLE PREFIX] A test tube held in a clamp containing a vivid bright yellow precipitate suspended in colourless solution. Some of the yellow solid is settling to the bottom in a layered fashion, classic "golden rain" appearance. Clean flat vector, teal test tube outline, vivid amber-yellow precipitate, white background, no text.

### `l3SummaryBadges` — see L1 (shared asset)

---

## Lesson 4 — Combustion Reactions

### `l4HookBushfire` — fire front vs smouldering zone
> [STYLE PREFIX] A horizontal landscape split into two zones. Left zone: an active fire front — bright orange-amber flames leaping high, clean blue sky, a few birds visible in flight. Right zone: smouldering ground after the front has passed — dark, smoky, low embers glowing red, thick grey/brown haze rising. A subtle dotted line separating the two zones marks the transition. Clean flat vector, amber/red flames left side, dark grey/brown smoke right side, teal sky highlights. White background.

### `l4DefinitionCOHaemoglobin` — CO blocking O₂ binding
> [STYLE PREFIX] A simplified circular protein structure (haemoglobin) shown with four small binding pockets around its perimeter. Two pockets are blocked by small CO molecules (one C sphere bonded to one O sphere, drawn in red); the other two are empty with O₂ molecules (two O spheres) hovering nearby unable to dock. A subtle red glow around the blocked pockets indicates "occupied". Clean flat vector, teal protein body, red CO molecules, amber O₂ molecules. White background, no text.

### `l4MarginaliaBunsenFlames` — Bunsen valve open vs closed
> [STYLE PREFIX] Two side-by-side Bunsen burner illustrations. Left burner: air valve open, flame burning sharp blue cone — small triangular blue flame. Right burner: air valve closed, flame is yellow-orange, taller and wider, with wispy smoke at the tip. Each burner has a small visible air-valve dial differently positioned. Clean flat vector, teal burner bodies, blue and amber/yellow flames, white background, no text.

### `l4WorkedButane` — butane + O₂ → CO₂ + H₂O
> [STYLE PREFIX] A horizontal molecular reaction diagram. Left side: a butane molecule (4-carbon zigzag chain with H atoms drawn as small white spheres along it). Plus sign. Multiple O₂ pairs (red sphere doublets) showing 13 of them stacked. Arrow. Right side: 8 CO₂ molecules (small linear three-sphere arrangements) plus 10 H₂O molecules (bent three-sphere shapes). Clean flat vector, teal carbons, amber hydrogens, red oxygens. White background, no text.

### `l4MisconceptionLessCO2` — CO toxicity warning
> [STYLE PREFIX] Two warning-sign style icons side-by-side. Left: a small molecule icon labelled by shape (CO — one C bonded to one O) with a red biohazard halo around it and exclamation mark — "high toxicity, low concentration". Right: a similar molecule icon (CO₂ — three-sphere linear structure) with a smaller, more muted yellow halo — "lower toxicity, only at very high concentration". Bars below each visualise the danger level: tall red for CO, short yellow for CO₂. Clean flat vector, teal sphere outlines, red and amber accents. White background, no text.

### `l4LabFootageFlames` — candle vs Bunsen
> [STYLE PREFIX] Two flames side-by-side on a dark workbench. Left: a candle with melting wax base, the flame yellow and luminous, slightly smoky tip with a soft glow. Right: a Bunsen burner with a clean sharp blue inner cone and faint pale outer flame. Each flame proportional and stylised. Clean flat vector, dark wood-tone bench at bottom edge, amber/yellow candle, blue Bunsen flame. White background.

### `l4QuickCheckMethane` — gas heater
> [STYLE PREFIX] A simple wall-mounted gas heater unit, vents at top, dial control on the side. Inside the heater (visible through cutaway), small flame combustion is happening with limited airflow indicated by a closed/restricted vent symbol. A small molecular icon of CH₄ hovers nearby — one carbon sphere bonded to four hydrogen spheres in a tetrahedral hint. Subtle CO molecules (red) escape from the top vent. Clean flat vector, teal heater body, amber flame, red CO accent. White background, no text.

### `l4SummaryBadges` — see L1 (shared asset)

---

## Lesson 5 — Acid-Base & Acid-Carbonate Reactions

### `l5HookAntacids` — fizzy vs smooth antacid
> [STYLE PREFIX] Two pharmaceutical bottles standing side-by-side on a shelf, each with a tablet beside it dropped into a glass of water. Left bottle (TUMS-style): glass shows vigorous bubbles rising — fizzing. Right bottle (Mylanta-style, liquid form): glass shows smooth, no bubbles. A small thought-bubble of CO₂ molecules above the left glass; nothing above the right. Clean flat vector, teal bottle outlines, amber tablet accents, white background, no text or readable brand names — just bottle silhouettes.

### `l5DefinitionSWC` — salt + water + CO₂ stack
> [STYLE PREFIX] Three rounded square panels stacked vertically, each labelled by a single icon: top panel a NaCl-style cubic crystal (Salt — a clean cubic lattice of alternating spheres); middle panel a water droplet shape (Water); bottom panel a small CO₂ molecule rising upward as a gas with motion lines (CO₂ gas). A teal "+" symbol between each panel suggests addition. Clean flat vector, teal outlines, amber accents, white background, no text.

### `l5MarginaliaAntacidChoice` — pharmacist with two pills
> [STYLE PREFIX] A simplified pharmacist character (in a lab coat, no facial detail) holding two pill bottles in hands. Left hand: a hydroxide-style pill labelled abstractly with a smooth icon (no fizz). Right hand: a carbonate-style pill labelled with a small bubble icon (fizz). The pharmacist is mid-decision — a thought bubble showing two patient silhouettes (one sitting up, one lying down) helps connect choice to context. Clean flat vector, teal lab coat, amber pill accents. White background, no text.

### `l5WorkedHClNa2CO3` — sodium carbonate + HCl
> [STYLE PREFIX] A glass beaker shown side-on with a small mound of white powder (Na₂CO₃) at the bottom partially dissolved. A pipette is dripping clear liquid (HCl) into the beaker. Vigorous bubbles rise from the reaction zone. Above the beaker, three small product icons float: a NaCl crystal, a water droplet, and a CO₂ molecule. Clean flat vector, teal beaker outline, white powder, amber bubble accents. White background, no text.

### `l5MisconceptionBronstedLowry` — bases without OH⁻
> [STYLE PREFIX] Three labelled circular badges in a row. Each badge contains a molecular icon: (1) NH₃ — one nitrogen sphere with three hydrogen spheres in a pyramid; (2) Na₂CO₃ — represented by a sodium cation pair plus a carbonate triangle of one C with three O; (3) O²⁻ — a single large oxygen sphere with double-minus charge halo. Each badge has a green tick mark. Above the row, a small "OH⁻ not required" symbol (a crossed-out OH⁻ pair). Clean flat vector, teal molecular outlines, amber charge halos. White background, no text labels other than the molecular formula glyphs.

### `l5LabFootageTumsVinegar` — fizz reaction
> [STYLE PREFIX] A clear glass containing transparent liquid (vinegar). A round white tablet (TUMS-style) has just been dropped in and is mid-fizz — vigorous, dense bubbles rising in a column, the tablet partially dissolved and shrunken. Some foam forming on the surface. Clean flat vector, teal glass outline, white tablet, amber bubble accents. White background, no text.

### `l5QuickCheckMgOH2` — Mylanta smooth dissolution
> [STYLE PREFIX] A clear glass containing white milky liquid (Mg(OH)₂ suspension), with a small chemical reaction happening as drops of clear acid are added from above by a dropper. The reaction is smooth — no bubbles — just gradual clearing of the milky suspension as it dissolves. Beside the glass, a small molecular icon of MgCl₂ and water droplets float as products. Clean flat vector, teal outlines, milky white suspension, amber accents. White background, no text.

### `l5SummaryBadges` — see L1 (shared asset)

---

## Generation order (recommended)

If batching with ChatGPT 2.0, generate in this order so the most-needed assets land first:

1. **L1HookFireIce** — sets the visual tone for the whole module (test it first).
2. **lSummaryBadges** (shared) — used by all 5 summary scenes.
3. **All hook scenes** (5 prompts) — these set the emotional tone of each lesson.
4. **All definition + marginalia scenes** (10 prompts) — the core teaching visuals.
5. **All worked example + quick check scenes** (10 prompts) — the calculation/practice visuals.
6. **All misconception + lab footage scenes** (10 prompts) — the supporting context.

**36 unique assets total** for L1–L5 (40 references − 4 shared summary instances).

---

## After assets land

1. Drop PNG files into `public/assets/hscscience/chem-y11-m3/<lessonId>/` (one folder per lesson).
2. Add asset entries to `src/assets/index.ts`. Pattern (matches existing convention):
   ```ts
   import l1HookFireIce from '../../public/assets/hscscience/chem-y11-m3/l1/hook-fire-ice.png';
   export const ASSETS = { /* existing... */ l1HookFireIce, /* etc */ };
   ```
3. Run `npm run validate:lessons` to confirm no broken asset references.
4. Render a still frame of any one scene to confirm sizing/aspect: `npx remotion still <composition-id> out.png --frame=N`.
5. Once happy, kick off TTS via the existing voiceover pipeline (`npm run voiceover:manifest` → ElevenLabs → `npm run voiceover:sync`).
