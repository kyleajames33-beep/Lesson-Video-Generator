# y11b-v05 science check

Revision 1, reviewed 1 November 2026. Design SHA256 `42c66f696ff47eab95aedbb3c6e2cd02685a48650a63a9a40cbf772c61c2190f`. Written narration, visuals, questions, route, root decisions and current site source inspected. No stills, continuous build or audio reviewed. Human listening remains pending.

## Exact 2025 syllabus

- Local route ID `B25-FA1-G1-02`, official CMS codename `cicdcb1a98`: Conduct a practical investigation to prepare a wet mount slide and identify the cytoplasm, cell wall and nucleus under a light microscope
  Fresh official source (1 November 2026): https://curriculum.nsw.edu.au/learning-areas/science/biology-11-12-2025/content/year-11/fa0edb304c

Exact source HTML is retained in `work/brief138/bio-official.json`. Local B25 IDs are project aliases, not NESA published content codes.

## Findings

1. **Blocker:** scenes 10 and 11, notes and safety section instruct students to collect their own cheek cells. The NSW Department of Education Chemical Safety in Schools curriculum-support guidance explicitly prohibits human tissue, including cheek-cell smears, in science practical work. Root decision 10 allowed sampling if a school risk assessment allows it, but that is insufficient for NSW government schools covered by this rule. Use the design’s prepared-slide fallback; remove the sampling instruction, swab demonstration and human-specimen disposal task. Replace the risk row with the existing lamp-control row. Keep onion as the practical specimen. This shortens rather than lengthens the design. Do not assert that a local risk assessment overrides a system prohibition.

## Confirmed checks and sources

The official practical requires preparation of a wet mount and identification of cytoplasm, cell wall and nucleus. The onion method satisfies that scope without fresh cheek sampling. A single flat epidermal peel, water, stain, angled coverslip and low-to-high focusing are appropriate. Both stain-before-coverslip and irrigation-after-coverslip methods are standard alternatives; keep the agreed site order and its brief grey alternative tag. 4x objective times 10x eyepiece=40x total; 40x times 10x=400x. About 45 degrees is a helpful approximate placement angle, not a precision measurement. Fine focus only at high power and focusing away from the slide while viewing avoid collision. Cytoplasm is a thin peripheral layer in vacuolated onion cells; the clear centre is mainly vacuole. The cell wall is a visible boundary, not necessarily strongly iodine-stained cellulose, so “clearly visible outline” is preferable to diagnosing identity from staining darkness alone. No blanket claim about an iodine dilution hazard classification is certified: the actual school solution/SDS controls its classification.

Sources: [NSW Department of Education curriculum support, Chemical Safety in Schools](https://education.nsw.gov.au/content/dam/main-education/asset-management/chemical-safety/3._Section_3_Curriculum_Support.pdf), section on human/animal materials (2021 Technical Update, printed page 105); [CLEAPSS official resource listing](https://science.cleapss.org.uk/resources/resource-search.aspx?search=methylene+blue) provides an example of a different jurisdiction’s procedure, not permission for NSW schools. The 2021 source is still publicly served. A 2026 CSIS replacement is referenced publicly but its current staff-only biological-material requirements could not be inspected; the prohibition therefore remains an unresolved permission/recording gate, not a claim that the 2021 text is the latest revision. The prepared-slide fallback resolves the design without depending on that uncertainty. This finding reopens root decision 10 only because the stated permission would contradict the applicable system rule. Other root decisions, including the stain order and onion-first method, are confirmed.

Count: 1 blocker, 0 should fix, 0 optional. Narration recount 5,860 characters; design estimate about 565 seconds. No design edits, speech, renders or commits.
