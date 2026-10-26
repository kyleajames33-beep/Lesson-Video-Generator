# Interim closure audit of Codex checks 100 to 105

Checked 25 October 2026 against current files. This is a comparison with the original findings, not a fresh science review or recording/release approval. No lesson, scene, narration, board or status file was changed. Brief 102 is an artwork-only Banksia retake with provenance and checkpoint records. A science closure check 102 is not applicable.

Paths in the design evidence column are under `docs/production/claude-pm/lessons/`. Line numbers identify the inspected copy. All findings from checks 100 and 101 are fixed in design. The findings from checks 103, 104 and 105 remain open. Resolution sections were not treated as proof.

| Check | Lesson and finding | Design result and exact evidence | Built result |
| --- | --- | --- | --- |
| 100 | chem-m7-c03: syllabus quotation | Fixed in design. `chem-m7-c03.md:259` retains `up to C8 (ACSCH035) :`; lines 260 to 262 separately list `alkanes`, `alkenes`, `alkynes`. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 100 | chem-m7-c04a: syllabus quotation | Fixed in design. `chem-m7-c04a.md:244` ends the stem with `including but not limited to:`; lines 245 to 248 separately list all four examples, ending `water (H2O) (ACSCH136)`. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 100 | chem-m7-c04b: syllabus quotation | Fixed in design. `chem-m7-c04b.md:245` to 249 retain the stem and four separate example lines. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 100 | chem-m7-g01: three syllabus quotations | Fixed in design. `chem-m7-g01.md:306` to 323 retain the three stems and separate example lines: nomenclature, isomers and unsaturated reactions. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 100 | bio-m7-p02: only means of detection | Fixed in design. `bio-m7-p02.md:82`: `One way to count microbes that can grow in these conditions`. | Fixed in built narration: `m7p02b/measured/lesson.json`, scene `why-test`, repeats this wording. |
| 100 | bio-m7-b05: scarlet banksia interpretation | Fixed in design. `bio-m7-b05.md:105`: `these observations do not show that the hyphae outran the defence`. | Fixed in built narration (`m7b05/measured/lesson.json`, `timing`) and source (`src/explainer/lessons/bio-m7-b05/s2.tsx:96` to 100): separate root-damage bar and crossed `hyphae outran the defence?` chip. Playback not assessed. |
| 100 | bio-m7-b05: attempt 2 inference | Fixed in design. `bio-m7-b05.md:135` names `a fungus that can feed only on living cells` and `Within hours, the cells around the infection site die`. Line 140 says `That fits the hypersensitive response working`. | Fixed in built narration (`m7b05/measured/lesson.json`, `attempt-two`, `feedback-two`) and card source (`src/explainer/lessons/bio-m7-b05/s3.tsx:105` to 106). |
| 101 | chem-m7-p01: volatility against chain length | Fixed in design. `chem-m7-p01.md:156`: `find the effect of chain length on volatility`; line 161: `The plan can't isolate chain length`. | Fixed in built narration (`m7p01c/measured/lesson.json`, `attempt-2`, `feedback-2`) and source (`src/explainer/lessons/chem-m7-p01/s4.tsx:81`, `:126`): `not valid for chain length (branched isomer changes shape too)`. |
| 101 | chem-m7-p02: bromine water products | Fixed in design. `chem-m7-p02.md:104`: `One possible product`; `In water, other colourless addition products can form too`. The single-product equation is explicitly for `Br₂ in an organic solvent` in the following Visual. | Fixed in built narration (`m7p02c/measured/lesson.json`, `alkene-result`) with the same distinction. Scene source is absent, so on-screen equation cannot be verified. |
| 101 | chem-m7-p02: syllabus quotation | Fixed in design. `chem-m7-p02.md:267` to 271 retain the stem and four separate example lines. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 101 | chem-m7-c05: two syllabus quotations | Fixed in design. `chem-m7-c05.md:263` to 275 retain eight separate nomenclature examples and separate `primary`, `secondary`, `tertiary alcohols` lines. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 101 | chem-m7-c06: yeast as catalyst | Fixed in design. `chem-m7-c06.md:141`: `Its enzymes are the catalyst, so yeast goes on the arrow`. | Fixed in built narration (`m7c06/measured/lesson.json`, `feedback-1`). Scene source is absent, so the corrected on-screen caption cannot be verified. |
| 101 | chem-m7-c06: syllabus quotation | Fixed in design. `chem-m7-c06.md:248` to 250 retain the stem, `substitution reactions of halogenated organic compounds` and `fermentation` on separate lines. | Design metadata fix verified; no published description was reviewed. Not a built-scene finding. |
| 101 | bio-m7-b07: agglutination inference | Fixed in design. `bio-m7-b07.md:137`: `Tube two didn't visibly clump` and `this test alone can't show that`. | Fixed in built narration (`m7b07/measured/lesson.json`, `feedback-one`). Source `src/explainer/lessons/bio-m7-b07/s3.tsx:75` to 76 reads `no visible clumping: no evidence of antibodies linking B` and `B may lack the matching antigen: this test alone can't tell`. |
| 103 | bio-m7-b08: absolute helper T claim | Still open. `bio-m7-b08.md:86`: `Helper T cells don't kill anything.` Line 88 retains crossed `helper T cells kill`. | Cannot verify: no lesson-specific source or build folder found. |
| 103 | bio-m7-b09: antivenom and memory | Still open. `bio-m7-b09.md:113`: `your own B cells weren't selected, so no memory cells form`. Line 143: `her own B cells weren't selected and no memory cells formed`. | Cannot verify: no lesson-specific source or build folder found. |
| 104 | bio-m7-g03: promised lyssavirus protection | Still open. `bio-m7-g03.md:127`: `Rabies antibodies and vaccine also protect against it`. Question 3's Visual retains the matching promise. | Cannot verify: no lesson-specific source or build folder found. |
| 104 | bio-m7-b10: universal quarantine and 18-day rule | Still open. `bio-m7-b10.md:109`: `Contacts who aren't immune go into quarantine`. The tag still includes `schools, childcare and health settings` (line 15 and scene 7 Visual). | Cannot verify: no lesson-specific source or build folder found. |
| 104 | bio-m7-b10: vaccinated treated as immune | Still open. `bio-m7-b10.md:149` gives an immune threshold but `ninety-two per cent are vaccinated` and `seventy per cent are`. Line 154 still compares coverage directly with the threshold. | Cannot verify: no lesson-specific source or build folder found. |
| 105 | bio-m7-b11: all drugs need pathogen-only targets | Still open. `bio-m7-b11.md:78`: `A drug has to hit something the pathogen has and your cells don't`. Line 93: `Each one targets a step that only the virus uses`. Line 123 and the notes retain `Antivirals target virus-only steps`. | Cannot verify: no lesson-specific source or build folder found. |
| 105 | bio-m7-b11: all antivirals have narrow range | Still open. `bio-m7-b11.md:98`: `Each one also works on only one virus, or a few related ones`. Scene 10 and the notes retain the same restriction. | Cannot verify: no lesson-specific source or build folder found. |
| 105 | bio-m7-b12: proposed Curaçao correction | Still open. `bio-m7-b12.md:55`, Decision 18, still proposes `400 sterile flies` and says `both sexes`. | Author-only issue. No lesson-specific source or build folder found. |

The original reports had no finding for bio-m7-b03, bio-m7-b04, bio-m7-b06 (100/101); chem-m7-c07, chem-m7-p03 (103); skills-s07, chem-m7-g02 (104); chem-m7-c08a, chem-m7-c08b (105). That is not a new approval of these lessons. Art QA notes in the Resolution sections are outside this audit.

## Source and narration limits

Built narration means the `voiceover.text` in the measured JSON, not a listening check. The inspected configs import these measured JSON files. For the affected scenes in m7p02b, m7b05, m7b07 and m7p01c, referenced MP3 files exist and caption words reproduce the corrected text. The affected m7p02c and m7c06 MP3 references also exist. Audio was not played. File presence and script agreement do not establish what was spoken.


Remaining finding closures: the eight open findings above. Built on-screen fixes for chem-m7-p02 and chem-m7-c06 cannot yet be checked because their scene source is absent. Published descriptions were outside this audit; the design metadata findings are closed. Playback, human listening and any science decisions are separate reviews, not closure results from this file. This audit supplies no recording, export or release gate.

## Exact current files

SHA-256 values below pin the bytes inspected. Revision numbers are file labels. Several Revision 3 designs still say `Nothing recorded` although measured narration files and MP3s now exist; those status sentences were not used to decide built state.

| Design | Revision | SHA-256 |
| --- | --- | --- |
| `chem-m7-c03.md` | 3 | `6ff8b12246423820e0a265cf4f8cdf5a79cf685edf98bd7c028acedc5ffc8eb7` |
| `chem-m7-c04a.md` | 3 | `4c9f2358f867b2602272b6de1176ea386949738879185fe7326e1138e9d56d81` |
| `chem-m7-c04b.md` | 3 | `7999666e6e4f76e42f0e7a409309c60d93c9760995635e19b88657e796e58ef7` |
| `chem-m7-g01.md` | 3 | `a020f62ca6c8dcf0dcf1a3afa94b4e833cf8207e029658f810189ef6d4495052` |
| `bio-m7-p02.md` | 3 | `116ded3f556c188dcd89c3fee6d630a1b2d28960dd5440023484ff389cefa1be` |
| `bio-m7-b05.md` | 3 | `6bd649a747bcf69a8abd4bdc41b94b80b2e136b6d0c753c531b257ada66b495a` |
| `chem-m7-p01.md` | 3 | `508863f0f42790f35f6255d109a80ed63c7e258ad56dbccb5c770d9dadc031a9` |
| `chem-m7-p02.md` | 3 | `5c42244d9119cc411be789094b49cf1394f7405323d87a2a1c2c8746b6b60343` |
| `chem-m7-c05.md` | 3 | `11e9209a244ca9023844beadb3413532f0bbe8bf94cfb856e1066d663d768d41` |
| `chem-m7-c06.md` | 3 | `cfac7eee29f9272a4ee63019f78c24754041c03801331306675cf4af7cea014b` |
| `bio-m7-b07.md` | 3 | `263b19ee5a2893a10593b6fe1fd5cd9783ba57740ad5dd937220b59f813aeb03` |
| `bio-m7-b08.md` | 2 | `b2f755d755f6bd981bdafe09f9b7ced8b5a826b99542da3025c3a7bc6befd13b` |
| `bio-m7-b09.md` | 2 | `becf95cc9212835882078556470ee6f629e27a7f09e8afea4b208855e1cbd197` |
| `bio-m7-g03.md` | 2 | `26d81f1108a50d64cfc1d744d52ea24c0fd069a26ed6aeb3e7295e7b35383ca5` |
| `bio-m7-b10.md` | 2 | `2ad7cac11a6ac420506d5655e992b2934a50aaf50028ab0b54b27ada7d353c1a` |
| `bio-m7-b11.md` | 2 | `57d643128694f1cb5fd581ba6be75c21c58ae71ffd322bd3b5e9dc12c49b08fa` |
| `bio-m7-b12.md` | 2 | `15b3007c1110b6431d9e795bb581ffaaff0c61d543acc184a14c467e3c568d32` |

Built JSON hashes use paths under `docs/production/claude-pm/lessons/`.

| Measured narration file | SHA-256 |
| --- | --- |
| `m7p02b/measured/lesson.json` | `fef232668dc433f46fd948598403b0b51c2a9ad86d0801b8a9b3cd7144648180` |
| `m7b05/measured/lesson.json` | `221910162ecf6ab012091f7d009d3ca07e3d88fcb19bdc1df28a96a17461fe06` |
| `m7b07/measured/lesson.json` | `19e8ac30bfa48daf1825839bc5eef7fd7bae03552d18964789209911d247250e` |
| `m7p01c/measured/lesson.json` | `2a6839fe07ad7c83c68ee1a14f90cca5ae9099ce7be8adb73d0fb6cd88f7236a` |
| `m7p02c/measured/lesson.json` | `d4518f2ef6d16a73719a6f151e8b17185b422b12495c5cc278b660061e034da9` |
| `m7c06/measured/lesson.json` | `68e48fcf34d63f372387b9427e04ebbb2b3272b0104357e0aa1c7f7ac5d58db1` |
| `m7c03/measured/lesson.json` | `e96952bd13d30eee4e85c8c87ab2e4211f1e412d08cdb196ead85674c40637aa` |
| `m7c04a/measured/lesson.json` | `52f24f6e66609258a102e6bd29fc34e1df828f7233864dd188b65cd19ba45f9d` |
| `m7c04b/measured/lesson.json` | `c2ea8b61f4334737157a67b5b761a10ea8eb7fd600d3fd376578566a7fe3c947` |
| `m7g01/measured/lesson.json` | `96368384c8c4e7cf7c0e71e23244b1cd97da4e5a88354eb4cab675f6bc51474e` |
| `m7c05/measured/lesson.json` | `3c33090bcad25e66c4d1944ccc16137ce96c8260ac03b483263eb34e6bcc7d15` |

Built source hashes:

| File | SHA-256 |
| --- | --- |
| `src/explainer/lessons/bio-m7-p02/config.ts` | `ced5f22909902ea2e319615ae1589b2a3f51d9f715270008eb2807c1aac275a1` |
| `src/explainer/lessons/bio-m7-p02/s1.tsx` | `ed63113c63c6e42f1aff40a1ed9b2ae47bd7cc15b8b4b086c94eab8088138e70` |
| `src/explainer/lessons/bio-m7-b05/config.ts` | `013bc824ce38d2eb0c560b1d2940530b6bbd34ac7933ad130e2047d7a270eb28` |
| `src/explainer/lessons/bio-m7-b05/s2.tsx` | `ca08fae8c7183eb561f83d3a95a2eaff6c549390e0fcf41d0b28b3fae910bf6e` |
| `src/explainer/lessons/bio-m7-b05/s3.tsx` | `485d41a67b78d2ef587f202954d19d8aa5ccb061d2fee92cc1171b7ec8ac44de` |
| `src/explainer/lessons/bio-m7-b07/config.ts` | `48e24ae89a08b5a8579837436d0be6d47f06da600c5b299c03231596bff5d8b3` |
| `src/explainer/lessons/bio-m7-b07/s3.tsx` | `216b83dc6cbc97c60b5609e3d546664d298ccc83d0a5d89201ed85eb41574662` |
| `src/explainer/lessons/chem-m7-p01/config.ts` | `7d3789caecf1270529eb2f5cc5c44017140741b4ddcfc3b39dc7fdbef7832e82` |
| `src/explainer/lessons/chem-m7-p01/s4.tsx` | `86747f1d45ac0d735e7802ef1fa50eca0ad15c05e21ed46720b9fa5949775213` |
