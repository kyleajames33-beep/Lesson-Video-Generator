# m8p02 science check

Input SHA-256: `fedf8fc5268ef9115c79b6eddf90cb7b38b813e2a8933384b51dbc55f0fb92c8`.

Independent Codex source review, 30 October 2026. Input: `../lessons/chem-m8-p02.md`, Revision 1, read in full, including narration, Visual paragraphs, attempts, notes, number checks, risk table and metadata. No recording or artwork pass follows from this report.

## Findings

1. **Blocker, unresolved safety check: current NSW school permission for barium chloride was not established.** The current NSW DoE public safety page links to CSIS inside the department. Following that link redirects to staff SSO; the barium chloride and silver nitrate chemical-specific entries could not be read. Supplier hazard information does not establish school permission. Retain teacher preparation of the solution, eye protection, gloves and labelled barium/silver waste. Obtain the school's current entries and risk assessment before clearing this student practical. This is an access limitation, not a finding that barium chloride is prohibited. [NSW DoE science safety](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance).

The filtration-temperature problem is learning finding 1, counted there, and must also be resolved before accepting the causal comparison.

## Checks completed

Using the design's atomic masses, molar masses are 174.26, 142.04 and 233.39 g/mol for potassium sulfate, sodium sulfate and barium sulfate. Expected mass is 0.6696603 g. Means are 0.6316667 and 0.6636667 g; recoveries are 94.3264% and 99.1050%; ranges 0.011 and 0.005 g. Rounded mean gap is 0.032 g. Barium addition is 0.0040 mol, 1.394 times the sulfate amount. The weighing subtraction is 0.664 g. A1 expected mass is 0.575101 g and recovery 97.5491%, correctly 97.5% to three significant figures. Direct mass division gives 160.286%. Equations balance.

The recovery figures are plausible constructed data, not an experimental validation. Digestion can enlarge particles and improve filterability; cloudy filtrate supports loss of fine solid. Silver nitrate testing of separate washings is established. [CSUDH sulfate experiment](https://www2.csudh.edu/oliver/che230/labmanual/gravsulf.htm).

The medical contrast is factual: [FDA barium-sulfate label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/208036s000lbl.pdf) identifies an oral radiographic formulation. That does not make a laboratory reagent suitable for ingestion. Potassium sulfate is offered as non-hygroscopic ACS material by [Strem](https://www.strem.com/product/93-1946), and [Sigma's potassium-sulfate SDS](https://www.sigmaaldrich.com/US/en/sds/SIGALD/223492) does not classify it as a hazardous substance. Moisture descriptions differ between suppliers and humidity conditions; the known standard must still be pure and dried, as the design already requires. No preparation change follows merely from the broad non-hygroscopic descriptor.

Solid barium chloride dihydrate H301/H332 is supported by [Carl Roth SDS 4453](https://www.carlroth.com/medias/SDB-4453-GB-EN.pdf?context=bWFzdGVyfHNlY3VyaXR5RGF0YXNoZWV0c3wzMTk5Nzd8YXBwbGljYXRpb24vcGRmfGFHWmtMMmhrWkM4NU1qSTNPVEUyTVRneE5UTTBMMU5FUWw4ME5EVXpYMGRDWDBWT0xuQmtaZ3xjZGZhMDcxYjE4NmNmMmE2NTMxZTBjYTFlMzZlYjc3MWViNjFmYzcwZGE1YjI5N2MyMjRlMzkwNzIyMmEzYzQ2), which also lists eye irritation. The table already includes eye protection and does not present its codes as exhaustive. The actual 0.20 mol/L bottle needs its own SDS. Dilute silver nitrate's stated skin/eye/aquatic hazards are supported by [Sigma 0.1 mol/L product information](https://www.sigmaaldrich.com/US/en/product/supelco/saar191235). Current supplier classifications can include additional hazards, so use the school's bottle SDS. The seven-row table distinguishes hazard, harm and control; it is not a completed school risk assessment.

C8-IQ1-03 and both bullets match the official 2017 Chemistry DOCX, downloaded and read through its XML. The first site link uses lesson02.sa.html. A1/A2 have different givens/demands from site L02 and NESA 2025 Q23. No copied question identified in those comparisons. The three proposed site additions are wording/method notes, not new demonstrated false statements, and are separated in `brief114-site-additions.md`.

## Mechanical and artwork checks

18 narration passages: 5,858 characters summed per scene, 5,875 when joined between scenes. Both are within the band. No U+2014. The design's own timing estimate is 571 seconds; see the learning repair.

The asset section requires learning and science checks to pass before the three P02 plates start. They have not passed. All three plates remain held. No overlay or voiced-preview pass is claimed.

## Resolution

Resolved in `../lessons/chem-m8-p02.md` Revision 2 (30 Oct; root resolver, Claude PM). Recount by script: 5,810 characters, about 569 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (root decision) | The CSIS entries are staff-only and can't be read, so the design takes the safest choice and states it as the control: the teacher prepares and dispenses the dilute barium chloride solution (students never handle the solid); students wear gloves and safety glasses; barium waste goes to the labelled heavy-metal waste container. Scene 11 now says "so your teacher prepares and dispenses it. Wear gloves and glasses, and wash your hands afterwards." The barium and waste risk rows, key note 5, the Safety facts check, the error-check brief and Open decisions match; the grey CSIS tag is removed. Resolved; no remaining gate. Schools still apply their own risk assessment (footer). |
| (L1) | Fixed (counted in the learning review) | Filtration temperature: both sets cool to room temperature before filtering (scenes 2 and 5, key notes, risk row, A2 card). See learning finding 1. |

Plates: the three held P02 plates are released for commissioning with the next Codex brief (same filenames). The `.sa.html` lesson link is kept, and the Revision 2 site links in c01 and c02 now match it (metadata link only).
