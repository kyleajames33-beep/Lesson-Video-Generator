# HSC Biology Year 12 — Image Generation Master Pack

Point ChatGPT (image generator) at this file. It contains every illustration needed for the
HSC Biology Year 12 video lessons (Modules 5–8): **one hook image per lesson**. The on-slide
concept visuals (Punnett squares, pedigrees, DNA helices, graphs, flows, tables) are drawn in
code by the renderer — **do NOT generate those; only the hook images below are needed.**

## How to use
For each lesson entry below: copy its **Prompt**, prepend the **House style** block, generate,
and save the PNG to the exact **save path / filename** (see the reference table if an entry's
path is unclear). Create folders as needed; the filename must match exactly.

## House style — APPLY TO EVERY IMAGE (overrides any conflicting style words in individual prompts)
Render all images in ONE consistent style so the series looks cohesive:
- **Style:** clean, modern, flat-but-premium **editorial science illustration** — crisp vector-like
  forms with soft cell-shading and gentle rim light. NOT photographic. NOT a rough hand-sketch /
  hand-annotated look. Scientifically accurate.
- **Palette:** cohesive cool base (teals, indigos, blues, greens) with a **single accent** per image
  (a Biology blue ~#3A8AD9, or one warm pop) — restrained and consistent across the whole set.
- **Composition:** a single clear subject with **generous negative space** on one side (the renderer
  adds captions there). Landscape framing that reads at 1920×1080.

## Hard rules (non-negotiable, every image)
- **Transparent PNG with a real alpha channel** — no background fill, no white box, no rounded card.
- The video slide background is **LIGHT (#f7f7f5)**, so the illustration must read with good
  contrast on a near-white background — solid forms, clear edges; do NOT rely on glow or
  light-on-dark effects.
- **No text, letters, numbers, or labels of any kind** — captions are added by the renderer.
- Save to the **exact path + filename**.

---

## Save-path reference — all 80 images (authoritative)
If an entry below is missing/unclear on its path, use this table. Filenames must match exactly.

| Asset key | Save path |
|---|---|
| `bioM5L1BananaClone` | `public/assets/hscscience/generated/bio-y12-m5/banana-clone-vulnerability.png` |
| `bioM5L2SalmonSpawning` | `public/assets/hscscience/generated/bio-y12-m5/salmon-external-fertilisation.png` |
| `bioM5L3KomodoParthenogenesis` | `public/assets/hscscience/generated/bio-y12-m5/komodo-parthenogenesis.png` |
| `bioM5L4IvfEmbryo` | `public/assets/hscscience/generated/bio-y12-m5/early-embryo-cleavage.png` |
| `bioM5L5DollyCloning` | `public/assets/hscscience/generated/bio-y12-m5/somatic-cell-nuclear-transfer.png` |
| `bioM5L6DoubleHelix` | `public/assets/hscscience/generated/bio-y12-m5/dna-double-helix.png` |
| `bioM5L7HelaCells` | `public/assets/hscscience/generated/bio-y12-m5/dividing-cells-mitosis.png` |
| `bioM5L8NondisjunctionKaryotype` | `public/assets/hscscience/generated/bio-y12-m5/chromosome-separation-meiosis.png` |
| `bioM5L9PlasmidTransformation` | `public/assets/hscscience/generated/bio-y12-m5/circular-dna-plasmids.png` |
| `bioM5L10TranscriptionBubble` | `public/assets/hscscience/generated/bio-y12-m5/transcription-bubble.png` |
| `bioM5L11Streptomycin` | `public/assets/hscscience/generated/bio-y12-m5/streptomycin-ribosome.png` |
| `bioM5L12SickleCell` | `public/assets/hscscience/generated/bio-y12-m5/sickle-cell-haemoglobin.png` |
| `bioM5L13GalapagosFinches` | `public/assets/hscscience/generated/bio-y12-m5/galapagos-finch-beaks.png` |
| `bioM5L14PedigreeChart` | `public/assets/hscscience/generated/bio-y12-m5/pedigree-chart.png` |
| `bioM5L15BloodGroups` | `public/assets/hscscience/generated/bio-y12-m5/abo-blood-antigens.png` |
| `bioM5L16SnpComparison` | `public/assets/hscscience/generated/bio-y12-m5/snp-base-comparison.png` |
| `bioM5L17DnaProfile` | `public/assets/hscscience/generated/bio-y12-m5/dna-profile-bands.png` |
| `bioM5L18PopulationGenetics` | `public/assets/hscscience/generated/bio-y12-m5/population-genetics-bottleneck.png` |
| `bioM5L19GeneticPrivacy` | `public/assets/hscscience/generated/bio-y12-m5/genetic-data-privacy.png` |
| `bioM6L1Superbug` | `public/assets/hscscience/generated/bio-y12-m6/superbug-pre-existing-resistance.png` |
| `bioM6L2RadiationDna` | `public/assets/hscscience/generated/bio-y12-m6/radiation-dna-damage-risk.png` |
| `bioM6L3SickleCell` | `public/assets/hscscience/generated/bio-y12-m6/sickle-cell-red-blood-cells.png` |
| `bioM6L4ChromosomeTypes` | `public/assets/hscscience/generated/bio-y12-m6/chromosomal-mutation-types.png` |
| `bioM6L5SomaticGermline` | `public/assets/hscscience/generated/bio-y12-m6/somatic-vs-germline-body.png` |
| `bioM6L6FinchBeaks` | `public/assets/hscscience/generated/bio-y12-m6/finch-beak-variation.png` |
| `bioM6L7Cichlids` | `public/assets/hscscience/generated/bio-y12-m6/cichlid-divergence-isolation.png` |
| `bioM6L8FermentationScope` | `public/assets/hscscience/generated/bio-y12-m6/fermentation-traditional-modern.png` |
| `bioM6L9GoldenRice` | `public/assets/hscscience/generated/bio-y12-m6/golden-rice-stakeholders.png` |
| `bioM6L10Crispr` | `public/assets/hscscience/generated/bio-y12-m6/crispr-targeted-editing.png` |
| `bioM6L11FrozenZooRhino` | `public/assets/hscscience/generated/bio-y12-m6/frozen-zoo-rhino-biodiversity.png` |
| `bioM6L12GeneDriveMosquito` | `public/assets/hscscience/generated/bio-y12-m6/gene-drive-mosquito-spread.png` |
| `bioM6L13TechnologyMap` | `public/assets/hscscience/generated/bio-y12-m6/embryo-transfer-elite-cow.png` |
| `bioM6L14ReproTechCompare` | `public/assets/hscscience/generated/bio-y12-m6/artificial-insemination-pollination.png` |
| `bioM6L15CloningDolly` | `public/assets/hscscience/generated/bio-y12-m6/whole-organism-cloning-sheep.png` |
| `bioM6L16RecombinantInsulin` | `public/assets/hscscience/generated/bio-y12-m6/recombinant-insulin-bacteria.png` |
| `bioM6L17BenefitsDomains` | `public/assets/hscscience/generated/bio-y12-m6/genetic-technology-three-domains.png` |
| `bioM6L18LongTermChange` | `public/assets/hscscience/generated/bio-y12-m6/green-revolution-benefit-cost.png` |
| `bioM6L19FinchVariation` | `public/assets/hscscience/generated/bio-y12-m6/finch-variation-allele-frequency.png` |
| `bioM7L1PandemicWorld` | `public/assets/hscscience/generated/bio-y12-m7/pandemic-spread-across-globe.png` |
| `bioM7L2PenicillinZone` | `public/assets/hscscience/generated/bio-y12-m7/penicillin-zone-of-inhibition.png` |
| `bioM7L3SwanNeckFlask` | `public/assets/hscscience/generated/bio-y12-m7/pasteur-swan-neck-flask.png` |
| `bioM7L4SnowCholeraMap` | `public/assets/hscscience/generated/bio-y12-m7/snow-cholera-pump-map.png` |
| `bioM7L5AgarColonies` | `public/assets/hscscience/generated/bio-y12-m7/agar-plate-colony-count.png` |
| `bioM7L6MyrtleRust` | `public/assets/hscscience/generated/bio-y12-m7/myrtle-rust-on-leaves.png` |
| `bioM7L7CattleBiosecurity` | `public/assets/hscscience/generated/bio-y12-m7/livestock-biosecurity-barrier.png` |
| `bioM7L8PlantDefenceCrossSection` | `public/assets/hscscience/generated/bio-y12-m7/plant-defence-cross-section.png` |
| `bioM7L9Inflammation` | `public/assets/hscscience/generated/bio-y12-m7/inflammation-skin-response.png` |
| `bioM7L10Phagocytosis` | `public/assets/hscscience/generated/bio-y12-m7/phagocyte-engulfing-pathogen.png` |
| `bioM7L11AntibodyStructure` | `public/assets/hscscience/generated/bio-y12-m7/antibody-binding-antigen.png` |
| `bioM7L12HivTHelper` | `public/assets/hscscience/generated/bio-y12-m7/hiv-t-helper.png` |
| `bioM7L13JennerMemory` | `public/assets/hscscience/generated/bio-y12-m7/jenner-memory.png` |
| `bioM7L14PolioDecline` | `public/assets/hscscience/generated/bio-y12-m7/vaccine-protection.png` |
| `bioM7L15SemmelweisWards` | `public/assets/hscscience/generated/bio-y12-m7/semmelweis-handwashing.png` |
| `bioM7L16PenicillinResistance` | `public/assets/hscscience/generated/bio-y12-m7/penicillin-resistance.png` |
| `bioM7L17SterileInsect` | `public/assets/hscscience/generated/bio-y12-m7/sterile-insect.png` |
| `bioM7L18MalariaBurden` | `public/assets/hscscience/generated/bio-y12-m7/mosquito-vector.png` |
| `bioM7L19VeniceQuarantine` | `public/assets/hscscience/generated/bio-y12-m7/venice-quarantine.png` |
| `bioM7L20BushMedicineIP` | `public/assets/hscscience/generated/bio-y12-m7/bush-medicine.png` |
| `bioM7L21PandemicStrategies` | `public/assets/hscscience/generated/bio-y12-m7/one-health-globe.png` |
| `bioM8L1GlucoseStability` | `public/assets/hscscience/generated/bio-y12-m8/glucose-stability.png` |
| `bioM8L2HeatwaveTwoAnimals` | `public/assets/hscscience/generated/bio-y12-m8/heatwave-two-animals.png` |
| `bioM8L3RunnerGlucose` | `public/assets/hscscience/generated/bio-y12-m8/runner-glucose.png` |
| `bioM8L4DesertHydration` | `public/assets/hscscience/generated/bio-y12-m8/desert-hydration.png` |
| `bioM8L5DesertPlant` | `public/assets/hscscience/generated/bio-y12-m8/desert-plant.png` |
| `bioM8L6CausesOfDeathShift` | `public/assets/hscscience/generated/bio-y12-m8/causes-of-death-shift.png` |
| `bioM8L7GenePathway` | `public/assets/hscscience/generated/bio-y12-m8/gene-pathway.png` |
| `bioM8L8TobaccoExposure` | `public/assets/hscscience/generated/bio-y12-m8/tobacco-exposure.png` |
| `bioM8L9NutritionBalance` | `public/assets/hscscience/generated/bio-y12-m8/nutrition-balance.png` |
| `bioM8L10CellDivision` | `public/assets/hscscience/generated/bio-y12-m8/cell-division.png` |
| `bioM8L11DiagnosisCases` | `public/assets/hscscience/generated/bio-y12-m8/diagnosis-cases.png` |
| `bioM8L12EpidemiologyStudy` | `public/assets/hscscience/generated/bio-y12-m8/epidemiology-study.png` |
| `bioM8L13RiskFraming` | `public/assets/hscscience/generated/bio-y12-m8/risk-framing.png` |
| `bioM8L14CheckpointInhibitor` | `public/assets/hscscience/generated/bio-y12-m8/checkpoint-inhibitor.png` |
| `bioM8L15TreatmentEquity` | `public/assets/hscscience/generated/bio-y12-m8/treatment-equity.png` |
| `bioM8L16SelfTolerance` | `public/assets/hscscience/generated/bio-y12-m8/self-tolerance.png` |
| `bioM8L17Karyotype` | `public/assets/hscscience/generated/bio-y12-m8/karyotype.png` |
| `bioM8L18CochlearImplant` | `public/assets/hscscience/generated/bio-y12-m8/cochlear-implant.png` |
| `bioM8L19MyopiaFocus` | `public/assets/hscscience/generated/bio-y12-m8/myopia-focus.png` |
| `bioM8L20DialysisMachine` | `public/assets/hscscience/generated/bio-y12-m8/dialysis-machine.png` |
| `bioM8L21IntegratedCare` | `public/assets/hscscience/generated/bio-y12-m8/integrated-care.png` |

---


# Module 5 — Heredity · Lessons 1–10

## Lesson 1 — Reproduction and Continuity of Species
- **Asset key:** `bioM5L1BananaClone`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/banana-clone-vulnerability.png`
- **Prompt:** A neat row of five identical Cavendish banana plants standing side by side, each one drawn exactly the same to signal genetic cloning, with subtle faint duplication or "copy" ghosting between them. A stylised reddish-brown fungal threat (soil-borne spores / wilt) creeps in from one side, beginning to wilt the first plant, implying a chain reaction across the identical row. Flat editorial science-illustration style, cool green leaves with one warm danger accent for the fungus, soft cell-shading, gentle rim light. Composition leaves clear negative space on the left for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels anywhere.

## Lesson 2 — Reproduction in Animals
- **Asset key:** `bioM5L2SalmonSpawning`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/salmon-external-fertilisation.png`
- **Prompt:** A single sockeye-style salmon mid-stream releasing a large cloud of tiny spherical eggs into clear flowing water, with a faint scatter of sperm cells dispersing around them to convey external fertilisation and overwhelming gamete numbers. Dynamic upstream motion, cool blue-green water tones with a warm coral accent on the fish, flat premium science-illustration style with soft shading and subtle current lines. Clear negative space upper-left for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 3 — Reproduction in Plants, Fungi, Bacteria and Protists
- **Asset key:** `bioM5L3KomodoParthenogenesis`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/komodo-parthenogenesis.png`
- **Prompt:** A single female Komodo dragon curled protectively around a small clutch of eggs, with a faint single-parent "one to many" motif (one silhouette giving rise to several identical egg outlines) to suggest reproduction from one parent only. Earthy scaled greens and greys with a warm amber accent, flat editorial science-illustration style, soft cell-shading and gentle rim light. Negative space to one side for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 4 — Mammalian Reproduction
- **Asset key:** `bioM5L4IvfEmbryo`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/early-embryo-cleavage.png`
- **Prompt:** A clean cross-section style illustration of an early mammalian embryo at the cleavage / early blastocyst stage — a rounded cluster of a handful of large translucent cells with a forming fluid cavity, shown as a glowing sphere. Optionally a faint micropipette silhouette approaching from one edge to hint at IVF, kept abstract and unlabelled. Cool teal and indigo cell membranes with soft inner glow and one warm highlight, flat premium biological-illustration style. Generous negative space for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 5 — Manipulating Reproduction in Agriculture
- **Asset key:** `bioM5L5DollyCloning`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/somatic-cell-nuclear-transfer.png`
- **Prompt:** A stylised somatic cell nuclear transfer concept: a donor body cell on one side, a hollow recipient egg cell on the other, and a curved arrow-free flow (no arrows, just visual grouping) implying a nucleus being moved from cell into egg, resulting in a small lamb silhouette to the side. Keep it conceptual and clean. Cool clinical teals and greys with a single warm accent on the lamb, flat editorial science-illustration style, soft shading. Clear caption space. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 6 — DNA Structure and DNA Replication
- **Asset key:** `bioM5L6DoubleHelix`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/dna-double-helix.png`
- **Prompt:** An elegant vertical DNA double helix, twin sugar-phosphate backbones spiralling with clearly paired rungs (base pairs shown as two complementary half-rungs meeting in the middle, colour-coded into two pairing types but unlabelled). One region partly "unzipped" into two separating strands to foreshadow replication. Cool indigo and teal backbones with a warm accent on the unzipping region, premium flat science-illustration style, soft glow and rim light. Vertical composition with negative space beside it for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 7 — Mitosis
- **Asset key:** `bioM5L7HelaCells`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/dividing-cells-mitosis.png`
- **Prompt:** A cluster of cultured cells with one cell captured mid-mitosis — visibly pinching into two daughter cells (cytokinesis) with condensed X-shaped chromosomes aligned and separating inside. Surrounding cells are uniform and identical to convey faithful copying. Cool teal cytoplasm with magenta-warm chromosomes as the single accent, flat premium biological-illustration style, soft shading and subtle inner glow. Negative space for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 8 — Meiosis
- **Asset key:** `bioM5L8NondisjunctionKaryotype`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/chromosome-separation-meiosis.png`
- **Prompt:** A stylised pair of homologous chromosomes (each an X-shaped replicated chromosome) being pulled apart toward opposite poles during meiosis, with one extra pair drawn slightly mis-separated on one side to subtly hint at non-disjunction — kept abstract, no clinical karyotype grid. Spindle fibres as faint converging lines. Cool indigo chromosomes with one warm accent on the mis-separating pair, flat editorial science-illustration style, soft shading. Clear caption space. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 9 — DNA in Prokaryotes and Eukaryotes
- **Asset key:** `bioM5L9PlasmidTransformation`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/circular-dna-plasmids.png`
- **Prompt:** A bacterial cell shown in cutaway, containing one large coiled circular chromosome in a loose nucleoid region plus several small separate circular plasmid rings floating nearby, with one plasmid drawn slightly outside/entering the cell to suggest transfer between cells. Clean, abstract, no organelle clutter. Cool green cytoplasm and teal DNA loops with a warm accent on the transferring plasmid, flat premium science-illustration style, soft shading. Negative space for a caption. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

## Lesson 10 — Transcription — From DNA to mRNA
- **Asset key:** `bioM5L10TranscriptionBubble`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m5/transcription-bubble.png`
- **Prompt:** A transcription bubble: a DNA double helix locally unwound into two separated strands, with a single-stranded mRNA copy being built along one exposed template strand and peeling away to one side, shown as a distinct lighter-coloured single strand. Base rungs shown as abstract complementary nubs, colour-coded but unlabelled. Cool indigo DNA with the emerging mRNA strand in a warm accent colour to make it stand out, flat premium science-illustration style, soft glow. Horizontal composition with caption space. Transparent PNG with alpha channel. No text, letters, numbers, or labels.

---


# Module 5 — Heredity · Lessons 11–19

## L11 — `bioM5L11Streptomycin`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/streptomycin-ribosome.png`

A didactic molecular illustration of a bacterial ribosome translating a strand of mRNA, with a small streptomycin antibiotic molecule shown binding the smaller (30S) subunit. Show the two-lobed ribosome (a larger upper subunit and a smaller lower subunit) clasping a horizontal mRNA strand of coloured codon blocks, with one tRNA (cloverleaf shape carrying a small amino-acid sphere) docked at a codon. Render the antibiotic as a distinct compact molecule nudging the small subunit slightly out of alignment to imply "misreading". Clean flat-vector biology-textbook style, teal/indigo/amber accents, soft cell-interior glow. Transparent background with alpha channel; no text, letters, numbers or labels anywhere.

## L12 — `bioM5L12SickleCell`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/sickle-cell-haemoglobin.png`

A didactic comparison illustration showing a normal round, biconcave red blood cell beside a curved, crescent-shaped sickled red blood cell. Between or beneath them, hint at the molecular cause with a short folded haemoglobin protein ribbon where a single amino-acid position is highlighted as a distinct coloured node (implying one changed amino acid). Convey "one tiny change cascades to whole-cell shape". Clean flat-vector medical-illustration style, crimson/rose cells with a calm indigo accent for the protein, soft depth. Transparent background with alpha channel; absolutely no text, numbers or labels.

## L13 — `bioM5L13GalapagosFinches`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/galapagos-finch-beaks.png`

A didactic illustration of three or four Galápagos ground finches in profile, each with a visibly different beak depth (shallow, medium, deep), arranged to emphasise heritable variation within one species. Birds rendered as clean, warm-toned silhouettes-with-detail perched on a simple branch, beaks clearly the focal contrast. Naturalist field-guide feel but flat-vector and modern; earthy brown/olive tones with one warm accent. Transparent background with alpha channel; no text, no measurement marks, no labels.

## L14 — `bioM5L14PedigreeChart`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/pedigree-chart.png`

A clean genetics pedigree diagram across three generations using the standard symbol convention: squares for males, circles for females, horizontal lines linking partners, vertical lines dropping to offspring, and some symbols fully shaded (affected) versus unshaded (unaffected). Include at least one "unaffected parents → affected child" pattern to support recessive reasoning. Crisp flat-vector line-diagram style, dark neutral strokes with a single accent fill for affected individuals. Transparent background with alpha channel; shapes and connector lines only — NO letters, roman numerals, numbers or text of any kind.

## L15 — `bioM5L15BloodGroups`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/abo-blood-antigens.png`

A didactic illustration of red blood cells showing ABO surface antigens to convey co-dominance. Show four rounded red blood cells: one bare surface (O), one studded with "A" antigen shapes (a triangular antigen), one studded with "B" antigen shapes (a square/different antigen), and one studded with BOTH antigen types together (AB) to make co-dominance visually obvious. Use two clearly different antigen glyph shapes (not letters) for A versus B. Clean flat-vector cell-biology style, crimson cells with teal and amber antigen glyphs. Transparent background with alpha channel; no text, no letters (use shapes for antigens), no labels.

## L16 — `bioM5L16SnpComparison`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/snp-base-comparison.png`

A didactic illustration of two short aligned DNA strands stacked one above the other, identical at most positions but differing at a single highlighted base position (one base coloured/emphasised on each strand to show an A-versus-G style single-nucleotide difference). Represent bases as coloured rounded rungs of a flattened double-helix ladder; spotlight the one mismatched position. Clean flat-vector genomics style, four-colour base palette kept muted, one position glowing as the focal SNP. Transparent background with alpha channel; use colour blocks for bases — NO letters (no literal A/T/C/G), numbers or text.

## L17 — `bioM5L17DnaProfile`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/dna-profile-bands.png`

A didactic illustration of a DNA profile / gel-style banding pattern: several vertical lanes, each containing a column of horizontal bands at different heights, with some lanes sharing matching band positions and others clearly differing (to imply sample comparison and matching). Clean flat-vector forensic-genetics style on transparent film, cool indigo/teal bands with one accent lane subtly highlighted as a match. Convey "comparing marker patterns, not reading full sequence". Transparent background with alpha channel; lanes and bands only — NO text, NO numbers, NO lane labels or rulers.

## L18 — `bioM5L18PopulationGenetics`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/population-genetics-bottleneck.png`

A didactic illustration of a population genetic bottleneck: a large, genetically varied group of small organism/marble icons in many colours funnelling through a narrow neck, emerging on the other side as a much smaller, far less colour-varied group (reduced genetic diversity). Use simple uniform organism or dot glyphs whose COLOUR encodes allele variety. Clean flat-vector conservation-genetics style, broad colourful palette before the neck collapsing to two or three colours after. Transparent background with alpha channel; glyphs and funnel shape only — no text, numbers, axes or labels.

## L19 — `bioM5L19GeneticPrivacy`
**Save:** `public/assets/hscscience/generated/bio-y12-m5/genetic-data-privacy.png`

A didactic conceptual illustration linking genetic data and privacy: a DNA double-helix intertwined with or partly enclosed by a shield or padlock motif, with a faint family-tree / linked-nodes silhouette behind it to suggest that one person's DNA implicates relatives. Convey "genetic inference creates privacy obligations". Clean flat-vector conceptual-science style, indigo/violet helix with a single secure-accent (lock/shield) and soft connective lines for the lineage. Transparent background with alpha channel; symbolic shapes only — absolutely no text, names, numbers or labels.

---

## DIAGRAM REQUESTS (bio-specific visuals with no existing coded diagram)
Each lesson's bio-specific concept is served by the single generated image above; remaining structured visuals reuse existing coded diagram types (`table`, `flow`, `barChart`) and need no new asset. Items below are the images that would ideally become purpose-built coded diagrams in future (currently provided as generated images):

- **L11 Translation mechanism** (ribosome + mRNA codons + tRNA anticodon + peptide bond) — no coded `translation`/`ribosome` diagram type exists; provided as image `bioM5L11Streptomycin`.
- **L13 Crossing over / meiosis variation** — no coded meiosis/crossing-over diagram type; the four-source comparison is handled by a coded `table`, and the finch hook image stands in for the meiotic visual.
- **L14 Pedigree chart** — no coded `pedigree` diagram type exists; provided as image `bioM5L14PedigreeChart`. (Punnett squares ARE rendered with the coded `table` type — no image needed.)
- **L15 ABO antigens on red blood cells** — no coded antigen/cell diagram type; provided as image `bioM5L15BloodGroups`. (Punnett crosses use coded `table`.)
- **L16 SNP single-base alignment** — no coded sequence-alignment diagram type; provided as image `bioM5L16SnpComparison`. (Frequency comparison uses coded `barChart`.)
- **L17 DNA profile banding pattern** — no coded gel/banding diagram type; provided as image `bioM5L17DnaProfile`. (Sequencing-vs-profiling contrast uses coded `table`.)
- **L18 Population bottleneck** — no coded bottleneck diagram type; provided as image `bioM5L18PopulationGenetics`.
- **L19 Genetic data + privacy concept** — conceptual, no coded type; provided as image `bioM5L19GeneticPrivacy`. (Module-5 logic chain uses the coded `flow` type.)

Coded diagrams used (no images required): `table` (L11, L13, L14, L15, L17), `flow` (L12, L19), `barChart` (L16). Hardy-Weinberg (L18) and all Punnett squares are presented as coded `table`/text, never as images.

---


# Module 6 — Genetic Change · Lessons 1–10

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

---


# Module 6 — Genetic Change · Lessons 11–19

## L11 — `bioM6L11FrozenZooRhino` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/frozen-zoo-rhino-biodiversity.png`

Used by the hook scene: banked living cells in cryogenic storage offer a path to rescue a near-extinct rhino, but any restored population starts from very few founders — biodiversity preserved in a freezer is not the same as biodiversity in the wild. (L11's concept scenes use coded `table` + `beforeAfter` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. On the left, a single large simplified rhinoceros figure (smooth matte charcoal-teal body, friendly and rounded, no cartoon face) standing on a soft amber ground plane, rendered slightly faded and translucent to read as a vanishing species. On the right, a chunky cryogenic storage canister with a softly glowing teal interior holding a small neat grid of rounded frozen cell vials (simple capsule shapes, emerald), wisps of cold vapour curling from the open lid. A few tiny rounded cells drift gently from the canister back toward the rhino to suggest the rescue pathway, shown purely by proximity and direction, no arrows or text. Soft contact shadows beneath both objects, matte finish, chunky rounded forms, single soft light from the upper-left, 20-degree downward isometric tilt, teal, emerald, amber and charcoal palette. NO text, numerals, or labels. The teaching point: banked genetic material as a fragile lifeline for a near-extinct species. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L12 — `bioM6L12GeneDriveMosquito` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/gene-drive-mosquito-spread.png`

Used by the hook scene: a single altered mosquito's trait sweeps through nearly all of the next generation instead of half — uniquely powerful, uniquely irreversible — demanding a structured evaluation. (L12's concept scenes use coded `flow` + `table` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. A simplified, friendly mosquito figure (smooth matte charcoal body, rounded wings, not a scary insect) at the top of the frame glowing a distinct amber colour to mark it as genetically altered, viewed at a 20-degree downward isometric tilt. Below and fanning outward, three short rows of smaller mosquitoes form a widening family-tree shape; in the first row most already carry the amber glow, and by the lowest row almost every mosquito is amber, with only one or two remaining plain teal — making the near-total spread of the trait obvious at a glance. Simple chunky connecting stems link the generations like a clean branching tree, no text on them. Soft contact shadows, matte finish, chunky rounded forms, single soft light from the upper-left, amber, teal and charcoal palette. NO text, numerals, or labels. The teaching point: an inherited trait forced through almost an entire population instead of half. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L13 — `bioM6L13TechnologyMap` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/embryo-transfer-elite-cow.png`

Used by the hook scene: one elite cow's reproductive material is multiplied across a whole herd of offspring — a population reshaped by controlling reproduction, with no DNA edited. (L13's concept scenes use a coded `table` technology map.)
```
Chunky isometric 3D illustration, HSC biology. A single large simplified dairy-cow figure (smooth matte teal-and-charcoal body, friendly, no cartoon face) standing prominently on the left on a soft amber ground plane, marked with a small emerald glow to read as the elite donor. To the right, a neat group of many smaller identical calf figures arranged in tidy rows, all clearly the same warm colour family as the donor, so they read as her widely-spread offspring. Between the donor and the calves float two or three simple rounded embryo shapes (small clustered cell spheres in a tiny clear droplet) to indicate embryo transfer, shown by position only, no arrows or text. Soft contact shadows beneath the animals, matte finish, chunky rounded forms, single soft light from the upper-left, 20-degree downward isometric tilt, teal, emerald, amber and charcoal palette. NO text, numerals, or labels. The teaching point: one elite animal's genetics multiplied across many offspring through controlled reproduction. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L14 — `bioM6L14ReproTechCompare` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/artificial-insemination-pollination.png`

Used by the hook scene: the same controlling purpose runs in two different systems — selected semen placed in an animal, selected pollen brushed onto a flower — neither one changing any DNA. (L14's concept scenes use a coded `table` comparison.)
```
Chunky isometric 3D illustration, HSC biology. A balanced two-part scene split gently down the middle, viewed at a 20-degree downward isometric tilt. On the left half, the animal case: a simplified friendly cow figure (matte teal-charcoal) beside a small chunky veterinary insemination straw/applicator holding a soft-emerald droplet of selected semen, poised near the animal. On the right half, the plant case: a single large stylised flower with a clear rounded stigma at its centre, and a small chunky handheld brush touching a few amber pollen grains onto that stigma. The two halves are visually parallel and equal in size so they read as the same idea in two systems. Soft contact shadows beneath each side, matte finish, chunky rounded forms, single soft light from the upper-left, teal, emerald, amber and charcoal palette. NO text, numerals, or labels. The teaching point: artificial insemination in animals and artificial pollination in plants as parallel reproductive control. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L15 — `bioM6L15CloningDolly` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/whole-organism-cloning-sheep.png`

Used by the hook scene: a donor sheep and its nuclear-transfer clone stand side by side — genetically matched, yet not truly identical, hinting at the limits of "a perfect copy". (L15's concept scenes use a coded `flow` of nuclear-transfer steps.)
```
Chunky isometric 3D illustration, HSC biology. Two simplified, friendly sheep figures (soft matte cream-and-charcoal wool, rounded forms, no cartoon faces) standing side by side on a soft amber ground plane at a 20-degree downward isometric tilt, looking near-identical to signal a clone and its donor. Floating gently above and between them, a single chunky rounded egg cell with its nucleus being replaced by a small donor-cell nucleus (a tidy emerald sphere moving into the clear egg), rendered simply to hint at nuclear transfer by position only — no arrows, no text. One faint amber spark of difference glows softly on one sheep to subtly suggest "alike but not perfectly identical". Soft contact shadows beneath the sheep, matte finish, chunky rounded forms, single soft light from the upper-left, cream, emerald, amber and charcoal palette. NO text, numerals, or labels. The teaching point: a cloned animal beside its donor, made by transferring a nucleus into an egg. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L16 — `bioM6L16RecombinantInsulin` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/recombinant-insulin-bacteria.png`

Used by the hook scene: a human gene is dropped into a bacterial plasmid so the bacterium itself manufactures human insulin — the core trick of recombinant DNA. (L16's concept scenes use a coded `flow` of the cut-join-insert-express toolchain.)
```
Chunky isometric 3D illustration, HSC biology. Centre frame, a single simplified rounded bacterium (smooth matte teal rod shape, friendly, no face) at a 20-degree downward isometric tilt. Inside or just beside it sits a chunky circular plasmid ring (clean charcoal loop) into which a short distinct amber DNA segment is being slotted to read as an inserted human gene, shown by fit and proximity only — no arrows, no text, no letters on the DNA. Around the bacterium, three or four small rounded emerald droplets float upward to represent the useful protein (insulin) the bacterium now produces. Everything matte and chunky. Soft contact shadow beneath the bacterium, single soft light from the upper-left, teal, amber, emerald and charcoal palette. NO text, numerals, base-letters, or labels. The teaching point: a foreign gene placed in a bacterial plasmid so the microbe makes a human protein. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L17 — `bioM6L17BenefitsDomains` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/genetic-technology-three-domains.png`

Used by the hook scene: the same genetic toolkit branches into farming, medicine and industry — benefits that must each be judged on their own terms. (L17's concept scenes use a coded `table` of the three domains.)
```
Chunky isometric 3D illustration, HSC biology. A central clean chunky DNA double helix (matte teal, smooth featureless rungs, NO letters) stands as the shared origin, and from it three balanced clusters fan out across the frame at a 20-degree downward isometric tilt, each a small recognisable scene of equal size. One cluster is agriculture: a chunky wheat stalk and a leafy crop plant in warm amber-green. One cluster is medicine: a small rounded medicine vial and a simple capsule in soft emerald. One cluster is industry: a compact stainless fermenter tank with rounded forms in steel-grey. The three clusters are visually parallel so none dominates. Soft contact shadows beneath each cluster, matte finish, chunky rounded forms, single soft light from the upper-left, teal, amber-green, emerald, steel-grey and charcoal palette. NO text, numerals, base-letters, or labels. The teaching point: one genetic toolkit applied across agriculture, medicine and industry. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L18 — `bioM6L18LongTermChange` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/green-revolution-benefit-cost.png`

Used by the hook scene: a bountiful high-yield wheat field rests on heavy irrigation and fertiliser — a biotechnology whose long-term costs only appear decades later. (L18's concept scenes use coded `flow` + `table` diagrams.)
```
Chunky isometric 3D illustration, HSC biology. A small rectangular slab of farmland viewed at a 20-degree downward isometric tilt, the top surface densely packed with chunky golden-amber wheat stalks reading as an abundant high-yield harvest. Beneath and beside the slab, made clearly visible, are the hidden supports: a chunky rounded water droplet / irrigation pipe element in soft teal-blue feeding the soil, and a small rounded fertiliser-sack or granule cluster in muted grey-green resting at the edge. The lush top and the resource-heavy underside are both plainly shown so the viewer reads benefit-on-top, cost-underneath. Soft contact shadow beneath the slab, matte finish, chunky rounded forms, single soft light from the upper-left, golden-amber, teal-blue, grey-green and charcoal palette. NO text, numerals, or labels. The teaching point: a high-yield crop resting on heavy long-term resource dependence. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## L19 — `bioM6L19FinchVariation` (hook)
Path: `public/assets/hscscience/generated/bio-y12-m6/finch-variation-allele-frequency.png`

Used by the hook scene: a tiny trickle of new mutation keeps a finch population's beak variation alive; without it the pool of variation would eventually run dry. (L19's concept scenes use coded `table` + `lineGraph` diagrams — the allele-frequency curve is coded, never a generated image.)
```
Chunky isometric 3D illustration, HSC biology. A small group of four or five finch birds perched along a simple chunky branch at a 20-degree downward isometric tilt, all clearly the same species (matte warm-brown and charcoal plumage, friendly, no cartoon faces) but rendered with a visible range of beak depths from slender to deep and broad, so the spread of heritable variation is obvious. Above the branch, a single small soft amber spark or seed-like glow drifts down toward the birds to represent the rare trickle of fresh mutation feeding new variation into the group, shown by position only — no arrows, no text. A soft amber ground plane sits below. Soft contact shadows under the branch and birds, matte finish, chunky rounded forms, single soft light from the upper-left, warm-brown, amber, teal and charcoal palette. NO text, numerals, or labels. The teaching point: a continuous trickle of mutation sustaining beak variation across a finch population. The file must have true alpha-channel transparency so it composites cleanly onto a light slide background.
```

---

## DIAGRAM REQUESTS (bio-specific, no existing coded diagram)

All concept-scene visuals in L11–L19 are served by **existing coded diagram
types** (`table`, `flow`, `beforeAfter`, `lineGraph`) plus the one hook image
per lesson above. No new diagram `type` was introduced in any JSON.

The following bio-specific visuals are currently carried by the hook **images
above**. If coded Remotion diagram types are added later, these lessons could
drop the image in favour of a coded scene:

1. **`biodiversityLevels`** (for L11) — three nested rings or tiers showing
   genetic → species → ecosystem diversity, with a technique raising one tier
   while lowering another. Currently served by image `bioM6L11FrozenZooRhino`
   plus a coded `table` and `beforeAfter`.
2. **`geneDriveInheritance`** (for L12) — an animated inheritance tree
   contrasting ~50% Mendelian spread with ~100% gene-drive spread across
   generations. Currently served by image `bioM6L12GeneDriveMosquito`.
3. **`nuclearTransfer` / SCNT** (for L15) — an animated enucleation +
   donor-nucleus-insertion + division + implantation sequence. Currently
   handled by a coded `flow` plus the `bioM6L15CloningDolly` hook image.
4. **`recombinantToolchain`** (for L16) — an animated cut (restriction enzyme)
   → join (ligase, sticky ends) → insert (plasmid into host) → express
   sequence with complementary sticky-end pairing. Currently handled by a coded
   `flow` plus the `bioM6L16RecombinantInsulin` hook image.

No new diagram `type`s were introduced in the JSON; all coded diagrams used are
existing types (`table`, `flow`, `beforeAfter`, `lineGraph`).

---


# Module 7 — Infectious Disease · Lessons 1–11

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

---


# Module 7 — Infectious Disease · Lessons 12–21

## L12 — `bioM7L12HivTHelper`
**Concept:** HIV destroying the CD4+ helper T cell, the coordinator of adaptive immunity.

**Prompt:**
Flat vector science illustration of a single large immune cell (a helper T cell) shown as a rounded teal cell with a few short surface receptor stalks, being approached and attacked by several small spiky indigo virus particles (HIV virions) with knob-tipped surface spikes. The cell looks compromised, with one virion fusing to its surface. Around the helper cell, three faint, greyed-out smaller cells drift away losing their glow, suggesting other immune cells going quiet without their coordinator. Clean, didactic, soft cell-shaded style, deep teal and indigo with a single amber highlight on the point of viral contact. Transparent background with alpha channel. No text, no letters, no numbers, no labels, no arrows.

---

## L13 — `bioM7L13JennerMemory`
**Concept:** Cowpox exposure laying down cross-reactive memory cells that recognise smallpox.

**Prompt:**
Flat vector science illustration showing the concept of immune memory: a central memory lymphocyte (rounded teal cell with a darker nucleus) shown alongside two slightly different small virus particles drawn as related cousins, one rendered in soft green (cowpox), one in muted indigo (smallpox), with closely matching surface-marker shapes to imply cross-reactivity. A gentle clock or hourglass motif rendered as a simple abstract circular arc curves behind the cell to suggest time passing and memory persisting (no numerals). Editorial, calm, soft cell-shaded style, teal and indigo with one amber accent. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L14 — `bioM7L14PolioDecline`
**Concept:** Vaccination protecting individuals and, through herd immunity, the wider community. (Do NOT draw a graph — the case-decline data is shown by a coded table/diagram in the lesson.)

**Prompt:**
Flat vector illustration of a small cluster of simplified human figures (a community) standing close together, most of them enclosed within a soft translucent protective dome or shield, with one or two more vulnerable figures (a baby in arms, an elderly figure) safe in the centre. A single syringe icon, stylised and friendly, sits to one side as the source of the protection. The shielded figures glow faintly teal; the dome has a soft amber edge. Conveys herd immunity and vaccination protection. Soft cell-shaded editorial style, teal and indigo with one amber accent. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L15 — `bioM7L15SemmelweisWards`
**Concept:** Handwashing breaking the transmission link (Semmelweis).

**Prompt:**
Flat vector illustration of a pair of hands being washed under a stream of water with soap bubbles, with a few small spiky pathogen particles being rinsed away and carried off in the water droplets. The hands are clean and simple, the water arcs gently, and the washed-away pathogens fade from indigo to transparent as they leave. Conveys hygiene physically removing pathogens. Soft cell-shaded editorial style, deep teal water and indigo pathogens with one amber accent on a soap-bubble highlight. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L16 — `bioM7L16PenicillinResistance`
**Concept:** Antibiotic selecting for a rare resistant bacterium in a population.

**Prompt:**
Flat vector illustration of a small population of rod-shaped bacteria: most rendered in pale, faded teal as if dying or dissolving under the effect of an antibiotic (shown as a few simple molecule dots drifting among them), while one single bacterium stands out intact and vivid in amber, clearly surviving. The contrast shows natural selection of a resistant survivor. Clean, didactic, soft cell-shaded style, teal and indigo with the single resistant cell highlighted amber. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L17 — `bioM7L17SterileInsect`
**Concept:** The sterile insect technique — releasing sterile males so matings produce no offspring.

**Prompt:**
Flat vector illustration of stylised flies or mosquitoes: a cluster of identical released males rendered in cool indigo with a subtle distinguishing mark (a small abstract sterility motif such as a faint crossed-out egg shape near one pairing, no text), shown vastly outnumbering a single wild female rendered in teal. One pairing is shown producing an empty outcome (an outline egg fading to transparent). Conveys population collapse through infertile matings. Soft cell-shaded editorial style, teal and indigo with one amber accent. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L18 — `bioM7L18MalariaBurden`
**Concept:** A female Anopheles mosquito as the malaria vector delivering the Plasmodium parasite.

**Prompt:**
Flat vector illustration of a single elegant mosquito (Anopheles, shown side-on with its characteristic angled resting posture) as the central subject, with a few small crescent-shaped Plasmodium parasite forms drawn near its proboscis as a delicate inset cluster to suggest what it transmits. The mosquito is detailed but clean and not menacing-photoreal. Soft cell-shaded editorial style, deep teal and indigo with one warm amber accent on the parasite forms. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L19 — `bioM7L19VeniceQuarantine`
**Concept:** Pre-germ-theory quarantine — ships held offshore before entering a port.

**Prompt:**
Flat vector illustration of an old sailing ship (a simple historical caravel or galleon silhouette) anchored alone offshore, separated by a stretch of water from a small stylised harbour town with domed rooftops in the distance, suggesting a vessel held in quarantine before it may land. Calm, editorial, almost woodcut-clean shapes. Soft cell-shaded style, deep teal sea and indigo town with one amber accent on the ship's sail or a lantern. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L20 — `bioM7L20BushMedicineIP`
**Concept:** Native medicinal plants and the question of knowledge ownership / benefit sharing. (Respectful, non-appropriative; depict plants and a fair-exchange motif, not people or sacred imagery.)

**Prompt:**
Flat vector illustration of a few Australian native medicinal plant sprigs (tea tree foliage, a eucalyptus branch with leaves, and a small round native fruit such as a Kakadu plum) arranged as an elegant botanical cluster, paired with a simple balanced-scales motif rendered abstractly to suggest fairness and benefit sharing between knowledge and its holders. Botanically suggestive but stylised, respectful and clean, no human figures, no sacred or ceremonial symbols. Soft cell-shaded editorial style, deep greens and teal foliage with one warm amber accent on the fruit and the balance point of the scales. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---

## L21 — `bioM7L21PandemicStrategies`
**Concept:** One Health — the inseparable link between human, animal and ecosystem health. (Do NOT draw a graph or the country death-rate data — that is handled by a coded table in the lesson.)

**Prompt:**
Flat vector illustration of a stylised globe at the centre, encircled by three simple linked icons evenly spaced around it: a human figure, an animal (a simple bird or mammal silhouette), and a leaf or tree representing the ecosystem, joined by a continuous looping ring to show they are one connected system (One Health). The globe is soft teal with abstract landmass shapes; the linking ring carries a gentle amber highlight. Clean, optimistic, editorial. Soft cell-shaded style, teal and indigo with one amber accent. Transparent background with alpha channel. No text, no letters, no numbers, no labels.

---


# Module 8 — Non-infectious Disease & Disorders · Lessons 1–11

### L1 — Homeostasis and Feedback Loops
- **assetKey:** `bioM8L1GlucoseStability`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/glucose-stability.png`
- **Prompt:** A smooth horizontal wavy line (a steady-state oscillation) holding tightly around an invisible central level, drawn as a glowing teal curve with small gentle peaks and troughs that never stray far from the centre — visualising a body variable held within a narrow tolerance band. To one side, a faint silhouette of a calm human figure mid-stride. Convey "a number that barely moves despite disturbance." Soft mint/teal palette, hand-annotated linework, transparent background, no axes, no numbers, no text.

### L2 — Temperature Regulation
- **assetKey:** `bioM8L2HeatwaveTwoAnimals`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/heatwave-two-animals.png`
- **Prompt:** Split composition under a hot stylised sun: on one side a person (endotherm) standing in the open with subtle heat shimmer and flushed skin radiating warmth lines; on the other side a blue-tongue lizard (ectotherm) tucked in the shade of a rock crevice. The two side by side imply contrasting thermoregulation strategies. Warm peach and teal palette, clean editorial illustration, transparent background, no thermometer numbers, no text, no labels.

### L3 — Glucose Regulation
- **assetKey:** `bioM8L3RunnerGlucose`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/runner-glucose.png`
- **Prompt:** A dynamic mid-stride runner (sprinting) rendered in clean teal/mint linework, with a small stylised pancreas glyph and a liver glyph subtly integrated near the torso to hint at internal fuel regulation during exertion. Sense of speed via light motion streaks. No glucose meter, no numbers. Transparent background, editorial science-illustration style, no text, no labels.

### L4 — Water Balance
- **assetKey:** `bioM8L4DesertHydration`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/desert-hydration.png`
- **Prompt:** A single stylised human kidney rendered as the hero, cross-sectioned to hint at internal tubules, with a few teal water droplets being drawn back inward (reabsorption) and a harsh desert sun above suggesting dehydration stress. Clean teal/sky palette, soft glow, hand-annotated linework. Transparent background, no nephron labels, no numbers, no text.

### L5 — Plant Water Balance
- **assetKey:** `bioM8L5DesertPlant`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/desert-plant.png`
- **Prompt:** A hardy arid-zone Australian plant (small thick waxy leaves, fine pale hairs) as the hero, with one leaf shown enlarged/inset to reveal a pair of guard cells forming a stoma. Convey drought-adapted structure and stomatal control. Mint/sage-green and teal palette, clean editorial illustration, transparent background, no labels, no numbers, no text.

### L6 — Causes of Non-infectious Disease
- **assetKey:** `bioM8L6CausesOfDeathShift`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/causes-of-death-shift.png`
- **Prompt:** A conceptual "then vs now" visual: on the left a faded cluster of pathogen glyphs (stylised virus and bacterium shapes representing 1900 infectious killers); a soft arrow of time sweeping right to a cluster of non-infectious glyphs (a stylised heart, a cell with irregular division, a brain) representing today. The composition reads as a historical reversal in causes of death. Muted teal/peach palette, editorial infographic-illustration style, transparent background, NO percentages, NO numbers, no text, no labels.

### L7 — Genetic Diseases
- **assetKey:** `bioM8L7GenePathway`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/gene-pathway.png`
- **Prompt:** A clean left-to-right conceptual chain (no text): a DNA double helix segment, then a folded protein ribbon glyph, then a single body-cell glyph — visualising the gene-to-protein-to-consequence pathway. One small region of the helix subtly highlighted to imply a mutation point. Teal/sky palette with a single peach accent on the mutated region, hand-annotated linework, transparent background, no labels, no numbers, no text.

### L8 — Environmental Diseases
- **assetKey:** `bioM8L8TobaccoExposure`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/tobacco-exposure.png`
- **Prompt:** A stylised wisp of cigarette smoke rising and resolving, within the smoke, into a faint DNA helix segment with one rung distorted (a thymine-dimer hint) — visualising an environmental carcinogen damaging DNA. Restrained, not gratuitous; muted grey-teal smoke with a peach accent on the damaged DNA rung. Editorial science-illustration style, transparent background, no labels, no numbers, no text.

### L9 — Nutritional Diseases
- **assetKey:** `bioM8L9NutritionBalance`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/nutrition-balance.png`
- **Prompt:** A balanced-scale / seesaw motif as the hero: one side carrying a sparse plate (deficiency), the other an overloaded plate (excess), the beam tipping to show imbalance — visualising nutritional disease as too little versus too much. Clean teal/mint/peach palette, editorial illustration, transparent background, no labels, no numbers, no text.

### L10 — Cancer
- **assetKey:** `bioM8L10CellDivision`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/cell-division.png`
- **Prompt:** A cluster of orderly, evenly-sized dividing cells in calm teal, with one rogue cell breaking the pattern — larger, irregular, dividing chaotically, rendered in a contrasting peach/amber to read as uncontrolled division. Convey "a normal cell with its controls disabled." Clean editorial cell-biology illustration, soft glow on the rogue cell, transparent background, no labels, no numbers, no text.

### L11 — Causes Mastery (consolidation)
- **assetKey:** `bioM8L11DiagnosisCases`
- **savePath:** `public/assets/hscscience/generated/bio-y12-m8/diagnosis-cases.png`
- **Prompt:** A clinician's clipboard or diagnostic-card motif as the hero (blank, no writing), surrounded by four small floating disease-category glyphs — a DNA helix (genetic), a smoke wisp (environmental), a plate (nutritional), and an irregular dividing cell (cancer) — arranged as cases to be classified. Calm deep-teal "consolidation" tone with mint accents. Editorial illustration, transparent background, NO text on the clipboard, no numbers, no labels.

---


# Module 8 — Non-infectious Disease & Disorders · Lessons 12–21

## Lesson 12 — Epidemiology: Incidence, Prevalence, Mortality and Study Design
- **Asset key:** `bioM8L12EpidemiologyStudy`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/epidemiology-study.png`
- **Prompt:** A clean conceptual illustration of an epidemiologist studying a population. Show a stylised grid or crowd of many small, simple human figures (a population), with a subset of figures tinted in the amber accent to represent disease cases standing out from the blue majority. Over the crowd, a translucent magnifying lens or a simple rising trend arrow suggests measuring and tracking patterns over time. Convey "measuring disease across a whole population" rather than an individual patient. Flat vector, Biology-blue palette with amber accent on the affected figures. Transparent PNG with alpha channel, no text, no numbers, no axes labels.

## Lesson 13 — Analysing Epidemiological Data: Pattern Recognition and Risk Factor Quantification
- **Asset key:** `bioM8L13RiskFraming`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/risk-framing.png`
- **Prompt:** A conceptual illustration of the same clinical-trial result being framed two different ways. Show a balance/seesaw or a split-panel motif: on one side a large, dramatic-looking bar or pie slice (the impressive "relative" view), on the other side a tiny sliver (the modest "absolute" view), making clear they describe the same underlying data. Include a small abstract cluster of treated-vs-control human figures to ground it in a trial. Flat vector, Biology blue with one amber accent on the misleadingly large element. Transparent PNG with alpha channel, absolutely no text, no numerals, no percentages.

## Lesson 14 — Treatment of Non-infectious Disease: Pharmacological, Surgical, Lifestyle and Emerging Therapies
- **Asset key:** `bioM8L14CheckpointInhibitor`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/checkpoint-inhibitor.png`
- **Prompt:** A cell-biology illustration of an immune checkpoint inhibitor releasing the brake on a T cell. Show a cytotoxic T cell and a cancer cell adjacent; depict a PD-1 receptor on the T cell and a PD-L1 ligand on the cancer cell, with a small antibody (Y-shaped) wedged between them blocking the connection. Convey the T cell becoming "switched on" and reaching toward the cancer cell. Use the amber accent for the blocking antibody (the key actor). Accurate-looking but simplified cells, no gore. Flat shaded vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no molecule labels.

## Lesson 15 — Treatment and Management of Non-infectious Diseases
- **Asset key:** `bioM8L15TreatmentEquity`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/treatment-equity.png`
- **Prompt:** A conceptual illustration weighing a treatment decision across effectiveness, cost and access. Show a balance scale: on one pan a stylised pill/medication and a surgical/heart motif (effectiveness), on the other pan a coin stack and a small map-pin / location marker (cost and accessibility). Suggest the idea that the "best" treatment must balance all three. Calm, editorial, Biology-blue palette with a single amber accent on the balance pivot. Transparent PNG with alpha channel, no text, no currency symbols, no numbers.

## Lesson 16 — Autoimmune Diseases and Allergies
- **Asset key:** `bioM8L16SelfTolerance`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/self-tolerance.png`
- **Prompt:** A cell-biology illustration of the immune system attacking the body's own tissue (loss of self-tolerance). Show stylised immune cells (lymphocytes) mistakenly targeting a cluster of healthy self-cells — for example T cells approaching pancreatic islet cells — with small inflammatory markers around the targeted tissue. Convey "friendly fire on self," not infection. Use the amber accent on the self-cells under attack to draw the eye. Simplified, accurate-looking cells, no gore. Flat shaded vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no cell-type labels.

## Lesson 17 — Prevention: Genetic Engineering, Screening and Emerging Technologies (Genetic Disorders)
- **Asset key:** `bioM8L17Karyotype`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/karyotype.png`
- **Prompt:** A clean illustration of a human karyotype concept showing paired chromosomes arranged in order, with one pair clearly showing an abnormality — either three copies instead of two (trisomy) or a single unpaired chromosome (monosomy) — highlighted in the amber accent to draw the eye. The rest of the chromosome pairs are in calm Biology blue. Stylised banded-chromosome shapes, neat rows, scientifically plausible layout. Flat vector. Transparent PNG with alpha channel, no text, no chromosome numbers, no banding labels.

## Lesson 18 — Hearing Loss, Cochlear Implants and Bone Conduction
- **Asset key:** `bioM8L18CochlearImplant`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/cochlear-implant.png`
- **Prompt:** A clear anatomical-style illustration of a cochlear implant on a cross-section of the human ear. Show the external sound processor behind the ear with a transmitter coil on the scalp, and the internal electrode array threaded into the spiral of the cochlea. Indicate signal flow from processor to coil to cochlea to auditory nerve with simple directional cues (not text). Use the amber accent on the electrode array inside the cochlea (the key component). Accurate ear anatomy, simplified and clean. Flat shaded vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no anatomical labels.

## Lesson 19 — Visual Disorders, Glasses, Contact Lenses and Eye Surgery
- **Asset key:** `bioM8L19MyopiaFocus`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/myopia-focus.png`
- **Prompt:** A clean optics illustration of a myopic (short-sighted) eye in cross-section, with parallel light rays entering and converging to a focal point that falls clearly IN FRONT of the retina (not on it), leaving the image blurred at the retina. Show the eyeball slightly elongated to convey the cause. Use the amber accent to mark the focal point sitting short of the retina (the key idea). Optionally hint at a concave correcting lens to the side. Accurate ray geometry, simplified and clean. Flat vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no labels, no measurement marks.

## Lesson 20 — Kidney Disorders, Dialysis and Transplantation
- **Asset key:** `bioM8L20DialysisMachine`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/dialysis-machine.png`
- **Prompt:** A clean illustration of the haemodialysis principle. Show a seated patient with a blood line leaving the arm, flowing into a stylised dialyser (artificial kidney) cylinder, and clean blood returning to the patient. Inside the dialyser, suggest a semi-permeable membrane separating a blood channel from a dialysate channel flowing in the opposite (counter-current) direction, with small waste particles diffusing out of the blood. Use the amber accent on the dialyser membrane / waste-removal step (the key process). Calm, clinical, simplified, no gore. Flat shaded vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no labels, no arrows-with-words.

## Lesson 21 — Module 8 Mastery: Integration Across All Inquiry Questions
- **Asset key:** `bioM8L21IntegratedCare`
- **Save path:** `public/assets/hscscience/generated/bio-y12-m8/integrated-care.png`
- **Prompt:** A conceptual illustration of one patient at the centre of multiple connected body systems and care domains. Show a single central human figure or torso silhouette with simple node-and-line connections radiating out to small icons representing the affected systems and themes of the module — a pancreas/glucose icon, a kidney icon, an ear icon, and a DNA/heredity icon — all linked into one network to convey comorbidity and physiological integration. Use the amber accent on the central figure (the unifying patient). Clean, editorial, network-style. Flat vector, Biology-blue palette. Transparent PNG with alpha channel, no text, no icon labels.

---

## DIAGRAM REQUESTS
None. Every non-image visual in these ten lessons uses an existing coded diagram type:
- **L12:** `table` (three disease measures), `flow` (coffee → smoking → lung cancer confounder)
- **L13:** `table` (risk measures; evidence hierarchy), `lineGraph` (Kaplan–Meier survival curves, immunotherapy vs chemotherapy)
- **L14:** `table` (intervention levels; pharmacological targets; emerging therapies)
- **L15:** `flow` (primary → secondary → tertiary prevention), `table` (treatment effectiveness vs cost/access)
- **L16:** `table` (autoimmune target tissues), `flow` (allergen → IgE → mast cell → histamine)
- **L17:** `table` (chromosomal disorders; screening vs diagnostic tests)
- **L18:** `flow` (outer ear → middle ear → cochlea → auditory nerve → cortex), `table` (conductive vs sensorineural)
- **L19:** `flow` (cornea → lens → retina → optic nerve → cortex), `table` (refractive errors)
- **L20:** `flow` (glomerulus → proximal tubule → loop of Henle → distal tubule → collecting duct), `table` (dialysis vs transplant)
- **L21:** `flow` (insulin resistance → high glucose → vessel damage → kidney stress → technology need), `table` (strong vs weak integrated responses)

No new coded `type` is required, and no data-curve image was requested (the only curve, the survival graph in L13, uses the coded `lineGraph`).

---
