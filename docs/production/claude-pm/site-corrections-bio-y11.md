# Site corrections: Year 11 Biology (2025)

Brief 138, checked 1 November 2026. Read-only sources: Biology Year 11 FA1 lessons 1 to 5, used by videos v01 to v06. Exact extracted quotations and source hashes are in `work/brief138/bio-site.json`. Findings for the site owner, not site edits.

| Lesson and page | Exact page text | Problem | Correct statement | Source |
|---|---|---|---|---|
| FA1 L01, `biology/year11/fa1-cells-as-the-basis-of-life/lesson01.sa.html` | In 1977, microbiologist Carl Woese compared the ribosomal RNA of dozens of organisms and split the living world along a line no microscope had drawn before: cells with a nucleus, and cells without one. | Misattributes the nucleus-based distinction to Woese’s rRNA work. | Woese and Fox’s 1977 rRNA comparisons distinguished deeply different prokaryotic lineages; microscopy had already established the nucleus-based cell distinction. | [Original 1977 paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC432104/) |
| FA1 L01, `biology/year11/fa1-cells-as-the-basis-of-life/lesson01.sa.html` | A prokaryotic cell has no membrane-bound organelles and no cytoskeleton for directed internal transport, so materials must diffuse across the whole cell from the membrane. | Bacteria have cytoskeletal systems; the resulting universal size cap also fails. | Typical bacteria lack a nucleus and the familiar eukaryotic organelles. Small size gives short diffusion distances; do not infer that bacteria have no cytoskeleton or cannot exceed 5 µm. | [Bacterial filament systems](https://pmc.ncbi.nlm.nih.gov/articles/PMC4498058/) |
| FA1 L01, `biology/year11/fa1-cells-as-the-basis-of-life/lesson01.sa.html` | electron microscope ≈ 0.2 nm (revealed prokaryotes lack internal membranes). | Universal absence of bacterial internal membranes is false. The resolution figure also needs a named method/specimen. | Electron microscopy can resolve structures below the light-microscope limit. Some bacteria, such as cyanobacteria, have specialised internal membranes; they lack a nucleus. Quote a method-specific resolution only with its source. | [Original thylakoid ultrastructure study](https://pubmed.ncbi.nlm.nih.gov/16736255/) |
| FA1 L03, `biology/year11/fa1-cells-as-the-basis-of-life/lesson03.sa.html` | plant cells additionally have a cellulose cell wall, chloroplasts and a single large central vacuole | Overgeneralises chloroplast presence. | Typical mature plant cells have a cellulose wall and large central vacuole; photosynthetic cells, such as leaf mesophyll, also have chloroplasts. | [OpenStax eukaryotic cells](https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells) |
| FA1 L03, `biology/year11/fa1-cells-as-the-basis-of-life/lesson03.sa.html` | An animal, with no walls or large vacuoles, supports itself with a skeleton instead, which is exactly why animal cells did not evolve those structures. | Claims an unsupported evolutionary cause and treats all animals as having the same skeletal support. | Many animals have skeletal support. The lack of a rigid cell wall allows animal-cell shape changes, including engulfment in specialised cells. | [OpenStax animal form and function](https://openstax.org/books/biology-2e/pages/33-1-animal-form-and-function) |
| FA1 L04, `biology/year11/fa1-cells-as-the-basis-of-life/lesson04.sa.html` | the single circular chromosome | Presents a usual bacterial pattern as universal. | usually a single circular chromosome | [NCBI bacterial genetics](https://www.ncbi.nlm.nih.gov/books/NBK7908/) |
| FA1 L04, `biology/year11/fa1-cells-as-the-basis-of-life/lesson04.sa.html` | Understanding plasmids and pili is therefore the first step to understanding why finishing a course of antibiotics matters. | Plasmid transfer does not establish a treatment-duration rule. | Plasmid transfer helps explain the spread of resistance. Use antibiotics only as prescribed; treatment length is a clinical decision. | [WHO antibiotic resistance guidance](https://www.who.int/news-room/questions-and-answers/item/antimicrobial-resistance-does-stopping-a-course-of-antibiotics-early-lead-to-antibiotic-resistance) |
| FA1 L05, `biology/year11/fa1-cells-as-the-basis-of-life/lesson05.sa.html` | The cytoplasm is the pale, evenly stained region filling the space inside the wall. | Labels the large central vacuole as cytoplasm. | The cytoplasm is a thin, pale, slightly grainy layer lining the wall and surrounding the nucleus; most of the clear centre is the vacuole. | [OpenStax eukaryotic cells](https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells) |
| FA1 L05, `biology/year11/fa1-cells-as-the-basis-of-life/lesson05.sa.html` | a specialised cell spans 12 squares of a mini-grid whose squares are 100 µm across in the image | Conflicts with the page’s definition of a stage mini-grid unless the phrase explicitly means a calibrated reproduced-image ruler. | If the actual stage squares are 100 µm, 12 squares are 1200 µm, without division by magnification. If 100 µm is a measured image length, label it an image ruler at a stated calibrated image magnification. Prefer a field/count example to teach the actual syllabus equation. | [Nikon field of view](https://www.microscopyu.com/microscopy-basics/field-of-view) |

| FA1 L05, `biology/year11/fa1-cells-as-the-basis-of-life/lesson05.sa.html` | peel a thin layer of onion epidermis (or scrape inner cheek cells onto the slide) | The fresh human-tissue alternative conflicts with the publicly available NSW government-school CSIS restriction. | Prepare the onion wet mount; use commercially prepared cheek-cell slides for the animal-cell comparison. | [NSW CSIS curriculum support](https://education.nsw.gov.au/content/dam/main-education/asset-management/chemical-safety/3._Section_3_Curriculum_Support.pdf) |

## Scope and permission correction

L05’s fresh cheek-cell alternative must not be presented as a permitted NSW Department of Education school practical. The [publicly served CSIS guidance](https://education.nsw.gov.au/content/dam/main-education/asset-management/chemical-safety/3._Section_3_Curriculum_Support.pdf), sections 3.1 and 3.2.6.1, requires commercially prepared slides instead of fresh human tissue including cheek smears. Its 2021 document date is explicit; current staff-only 2026 requirements were not accessible. Use onion for the wet mount and prepared cheek slides for comparison until the applicable current rule is verified. The design sampling blocker is recorded in y11b-v05-science-check.md.

## Confirmed coverage gap

L05 teaches direct stage-grid sizing and image/magnification calculations but does not demonstrate the complete required field-diameter / equivalent-cell-count method. Add that method with low-to-high field calibration, matched magnification and end-to-end count conditions. The direct-grid method is valid supporting measurement, not itself an error.

## Design-suggested findings not accepted as categorical site errors

- L01 electron resolution 0.2 nm: method and specimen context is missing, but a universal replacement of 1 to 2 nm is also unsound. Do not replace one unqualified instrument limit with another.
- L01 omitting archaea: useful coverage clarification, not an incorrect claim that all bacteria are prokaryotes.
- L02 rough ER synthesis: accepted organelle-level shorthand when referring to attached ribosomes. Clarify that translation occurs at ribosomes; do not call all such wording scientifically false.
- L02 chloroplasts in plants and some protists: acceptable ordinary cell-type scope. Stolen chloroplasts in sea slugs do not require an exception lesson.
- L02 chemiosmosis steps: an extension/scope label is useful; the mechanism itself is not erroneous.
- L03 animal lysosomes/centrioles: the ordinary “typically” comparison is not a confirmed error. Plant vacuoles also perform digestion, so a distractor rejecting this function needs revision if still present in the live question bank. The visible HTML did not contain that bank distractor, so it is not logged as a verified exact passage.
- L04 unlabelled advanced steps: a scope recommendation, not a science error.
- L04 loyalty-card memory: the specific sentence was not found in the lesson HTML; the donor-keeps-copy clarification is sound, but verify the separate memory-hook source before changing it.
- L05 “darkly stained line”: contrast and edge darkness vary by preparation. Prefer a clearly visible firm outline, but no universal optical-intensity claim is certified.
- L05 calculated 3,9,4,3 µm: arithmetic is correct. These are not automatically impossible plant/animal dimensions without naming the cell type and dimension. Small cell size alone does not prove a numerical error.
- L05 most cells 10 to 100 µm: a typical range can have exceptions, and onion length is not equivalent to width. The listed exceptional examples do not logically refute the word “most”.
- L05 100 µm grid versus 1 mm grid: both spacings can exist. Specify the grid being used, not a universal spacing.


## Brief 147: FA1 L06 microscopy

Confirmed 2 November 2026 against the current lesson HTML (SHA256 `640feebb7fe9ff66f822eee7711e51b9f18128e74b7ae71b1979ddbdfefa124c`) and the linked primary sources. Site-owner findings only; no site edits. The existing L01 internal-membrane and resolution findings also occur in L06, as recorded below.

| Lesson | Exact page text | Correction and reason | Source |
|---|---|---|---|
| FA1 L06 | For 250 years after cells were discovered, no one knew mitochondria had internal folds or that membranes existed, not because they didn't exist, but because no microscope could resolve them. | Use about 290 years between Hooke (1665) and cristae images (1952–1953). Distinguish resolving membrane structure from earlier evidence that cell boundaries exist. 1952−1665=287 years; first clear cristae images appeared in 1952–1953. | [Source 1](https://journals.sagepub.com/doi/10.1177/1.4.188), [Source 2](https://pubmed.ncbi.nlm.nih.gov/19868999/) |
| FA1 L06 | specimens must be dead, dehydrated and viewed in a vacuum | Scope dehydration and thin-section preparation to conventional TEM. Cryo-EM preserves frozen-hydrated material; SEM surface preparation differs. Frozen-hydrated bacterial research avoids dehydration; the compared conventional methods still cannot film living cells. | [Source 1](https://journals.asm.org/doi/epdf/10.1128/jb.155.1.381-390.1983) |
| FA1 L06 | It revealed the cell's ultrastructure, the cell membrane, ribosomes, the cristae of mitochondria, the ER and Golgi, and confirmed prokaryotes lack internal membrane-bound organelles. | Say “the structure of the cell membrane”. Membrane existence and the lipid-layer model were inferred before electron microscopy. Scope the organelle statement to bacteria such as E. coli; do not imply all prokaryotes lack all internal membrane structures. Gorter and Grendel’s original 1925 lipid-layer study predates EM. The internal-membrane scope issue is already in the shared log; deduplicate. The internal-membrane clause extends the existing L01 finding. | [Source 1](https://pubmed.ncbi.nlm.nih.gov/19868999/) |
| FA1 L06 | viruses (~20–300 nm) are far too small for any light microscope to resolve. | Most viruses are too small for an ordinary light microscope to show internal detail. Do not generalise to all viruses or all optical methods. The listed range reaches the ordinary optical limit; larger giant viruses exist, and super-resolution optical techniques overcome the ordinary diffraction bound. | [Source 1](https://www.nobelprize.org/uploads/2018/06/advanced-chemistryprize2014.pdf), [Source 2](https://pubmed.ncbi.nlm.nih.gov/12663918/) |
| FA1 L06 | the electron microscope resolves to about 0.2 nm | Give 0.2 nm as an instrument benchmark with suitable specimen conditions; distinguish resolution achieved on prepared biological specimens. Do not replace it with a new universal limit. Resolution depends on instrument and specimen preparation; the conventional biological 1–2 nm teaching benchmark describes a different context. This extends the existing L01 resolution-context finding to L06. | [Source 1](https://www.ncbi.nlm.nih.gov/books/NBK26880/) |


## Brief 147: FA1 L07 membrane structure

Confirmed 2 November 2026. Page SHA256 `c4a3f09924dcfc9a4c134f82ec897816d3ed4e4f764c4c98479a283b6b31b592`. The separate memory-hook source is named explicitly below.

| Source | Exact old text | Correction and reason | Source evidence |
|---|---|---|---|
| FA1 L07 page | Integral proteins span the whole bilayer | Integral proteins are embedded in the bilayer. Transmembrane integral proteins span it; not all integral proteins do. The original prostaglandin synthase structure is an integral monotopic protein embedded in one leaflet. | [Source 1](https://www.nature.com/articles/367243a0) |
| FA1 L07 page | the fluid bilayer provides a self-sealing, impermeable barrier | Use a self-sealing barrier to ions and large polar solutes; small non-polar molecules can pass the lipid core. The same page correctly allows oxygen and carbon dioxide through, so impermeable is contradictory. | Same page: small non-polar oxygen and carbon dioxide cross the lipid core. |
| FA1 L07 page | The reason you have a blood type, A, B, AB or O, comes down to glycoproteins on the surface of your red blood cells. | ABO blood groups depend on carbohydrate determinants carried by both glycoproteins and glycolipids on red cells. The carbohydrate epitope, rather than an exclusively protein carrier, determines the ABO antigen. | [Source 1](https://onlinelibrary.wiley.com/doi/10.1111/j.1432-1033.1995.0862d.x) |
| FA1 L07 memory-hooks JSON, l07 | Nothing is glued in place. | Many components drift laterally; some are anchored or restricted. Do not replace nothing with an unsupported numerical claim that only a few are anchored.  | [Source 1](https://pubmed.ncbi.nlm.nih.gov/95669/) |


## Brief 147: FA1 L08 practical evidence

Confirmed against the unchanged page on 2 November 2026 (SHA256 `402f33249c25617b869d40f41a0b80fd2c26937b3b48dfa0d778701a1d97796b`). The agar alternative is already allowed by this page; the Nuffield source gives a concrete method.

| Lesson | Exact page text | Correction | Source |
|---|---|---|---|
| FA1 L08 | water molecules are small enough to cross but sugar molecules are not | Do not say generic sugar cannot pass Visking. Glucose passes directly in the published model-gut practical; sucrose behaviour depends on the tubing and interval. State relative permeability for an identified and piloted setup, not a universal30min retention rate. | [Source 1](https://practicalbiology.org/exchange-of-materials/digestion-and-absorption/evaluating-visking-tubing-as-a-model-for-a-gut.html), [Source 2](https://www.medicellmembranes.co.uk/tubing1.html), [Source 3](https://www.serva.de/enDE/Catalog/311_Sample_Preparation_Dialysis_212_0.html) |
| FA1 L08 | a crystal of potassium permanganate dropped into still water spreads colour outward over time with no stirring, visible evidence of particles moving down a concentration gradient | Colour spread in this arrangement can include convection generated by the crystal and dissolving density differences. Lack of stirring alone does not isolate diffusion. Use dye entering agar or a validated diffusion chamber for the diffusion demonstration. | [Source 1](https://pubs.acs.org/doi/abs/10.1021/acs.jchemed.5c00262), [Source 2](https://assets.ctfassets.net/pc40tpn1u6ef/file-14740/f38818f1a3c97330263cbd2f04968f57/9288-Rev_Nuff_Biol_Text_2_living_things_3.pdf) |

The v09 review’s water-route wording, carrier-saturation wording and missing aquaporin example are retained as clarification or coverage notes in `work/brief147/v09/root-site-decisions.json`; they are not added as categorical page errors.


## Brief 147: FA1 L09 tonicity

Confirmed 2 November 2026 against page SHA256 `1dcbc53cb91a82914dde9d7123c2652b001668bed9ccbce77fe9fe5bc85929e0`.

| Lesson | Exact page text | Correction and reason | Source |
|---|---|---|---|
| FA1 L09 | the animal cell swells and bursts | Use swells and may burst for a generic hypotonic case; distilled-water haemolysis remains a valid severe example. A modest hypotonic change need not exceed the cell’s volume reserve. | [Source 1](https://openstax.org/books/biology-2e/pages/5-2-passive-transport) |
| FA1 L09 | this is the only safe environment for animal cells | Scope to the normal isolated red-cell example; do not make a universal safety claim for every animal-cell context. Tonicity response depends on cell type and size of the osmotic change. | [Source 1](https://openstax.org/books/biology-2e/pages/5-2-passive-transport) |
| FA1 L09 | the cell becomes plasmolysed , the cause of wilting | Separate loss of turgor/flaccidity causing ordinary wilting from plasmolysis under stronger osmotic stress. Plasmolysis is not required for ordinary water-loss wilting. | [Source 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC4844282/) |
| FA1 L09 | it is actively losing it to the soil | Wording clarification: replace actively losing with losing by osmosis. The passage describes passive water loss; do not read the ordinary adverb as an explicit assertion of an ATP-driven pump. | [Source 1](https://openstax.org/books/biology-2e/pages/5-2-passive-transport) |

The water-always reminder is read with its surrounding net-movement explanation. Keep its concentration rule within the initial, effectively nonpenetrating-solute comparison and distinguish the pressure-balanced turgid state; no separate claim that the site says water molecules stop moving is logged.


## Brief 147: FA1 L10 active transport

Confirmed 2 November 2026 against the current page (SHA256 `a879a4abec75f953c3df39af20fc9f27a6700b70d3a3b2c5026f82fe06429362`).

| Lesson | Exact page text | Correction | Sources |
|---|---|---|---|
| FA1 L10 | Active transport is powered by the hydrolysis of ATP, whose released phosphate changes the shape of the carrier protein and so carries the bound substance across the membrane. | For a direct P-type pump, ATP transfers a phosphate to the protein during its cycle; secondary uptake can use an ion gradient maintained by ATP without direct phosphate transfer to each uptake carrier. | [Nitrate transporter study](https://www.nature.com/articles/nature13116), [ATP-driven potassium pump study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7535926/) |

The one-third whole-body ATP statement requires its source and physiological context; it is a source request, not a confirmed numerical error.
