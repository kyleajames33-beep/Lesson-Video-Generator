# Final audit of briefs 96 to 99

22 October 2026. Read-only audit after the final Brief 99 author hand-in. No final asset, provenance, QA file, archive, design, check report, site log, status or board was changed during this audit.

No new concrete error was found in the completed deliverables. This is an output audit, not approval to record, render or release the lessons. The error-only reports still hand correction work to the designer.

## Files and archives

| Brief | Required plates | Found | Dimensions | Archive members | Result |
| --- | --- | --- | --- | --- | --- |
| 96 | 11 | 11 | All 2000 x 2000 | 91 | Pass, with inherited dish-margin exception |
| 97 | 12 | 12 | Nine 2000 x 2000; three 2048 x 1700 clips | 96 | Pass, with inherited clip-margin exceptions |
| 98 | 14 | 14 | Twelve 2000 x 2000; two 2048 x 1700 clips | 38 | Pass, with inherited clip-margin exceptions |
| 99 | 20 | 20 | All 2000 x 2000 | 157 | Pass |

All 57 final PNGs have a real alpha channel, transparent exterior pixels and visible painted content. Three Brief 98 files have maximum alpha 254 rather than 255; that does not invalidate their genuine transparency. Their recorded alpha extrema agree with the files.

For each archive, independently recomputed the whole ZIP SHA256, checked its byte size and CRC, compared the complete member-name set with its checkpoint, recomputed every member SHA256 and compared every archived member byte for byte with its current workspace file. All checks pass. Every required final plate, provenance and current QA file is included. There are 382 verified members across the four archives.

| Brief | Archive SHA256 |
| --- | --- |
| 96 | `0c37954432dfc9c37502a01b6ef2bc1e30b758cf58333168c183f913faf36848` |
| 97 | `cab4f226f5749cfd6a6e0dfcc38a2154b77f262ffafb6d3a4b272dda27242d1d` |
| 98 | `b835a3ce702b2a8b2ef5a3463c625f8a56f63beaefdce056321452de2a8f5744` |
| 99 | `f3ba86cba41358ad7d768918fbab7148d31a9d557fc6ef4429a4353644d3c016` |

The archive paths are `out/archives/briefNN-plates-2026-10-22.zip`. Technical audit results are in `out/local/briefs96-99-audit/technical96-98.json` and `technical99.json`.

## Actual visual inspection

- Brief 96: inspected the cream, checkerboard and dark contact sheets and the corrected fermenter and empty dish. The fermenter now has the small round window with cloudy liquid. The assembled empty dish has no visible colonies. Its original before rim and alpha are retained literally; both final 50 percent overlays were opened. The after reference has its own existing one-pixel boundary and rim differences, which are documented rather than called pixel-identical. The lamb is visibly smaller than the adult sheep, and the ferret has dark feet, mask and tail tip.
- Brief 97: opened cream and dark contacts, the three methyl-orange states, papaya pair overlay and wild/domestic sheep overlay. The meniscus is concave in an open tube section. The balance, powder vial, cheese, washer and pig are readable. The aligned flask glass stays fixed while liquid colour changes. The papaya disease state shows mottled distorted leaves and fruit rings while corresponding trunk and fruit positions remain registered. The wild sheep has the intended different anatomy but comparable scale and hoof baseline.
- Brief 98: opened cream, checkerboard and dark contacts, cabbage overlays, count sheets and selected reference overlays. The cabinet is closed with no visible light. The cabbage extraction and filtration apparatus are readable. The matched cabbage clips preserve the reference glass framing. The yeast dishes retain the same rim and tape framing, with amber medium on the selective plate.
- Brief 99: opened final cream and dark contacts and the corrected prion overlay. The normal prion is alpha-helical, visibly different from the beta-rich reference. Opened TMV and viroid at 400 px: TMV is a slender rod with an RNA cutaway; the viroid is a closed folded RNA strand without a protein coat. Opened all five flask states through the swan, straight and common-bulb overlays. The common bulb and liquid level remain fixed, the swan bend traps dust above the broth, broken stubs are jagged and cloudy broth differs visibly from clear broth. Also opened tissue, potato and guinea-pig overlays. No new concrete artwork error was found.

The final Brief 99 provenance and checkpoint were audited only after its author said the retake, assembly and archive were stable.

## Exact yeast counts

The saved evidence contains 144, 97, 61, 24, 5 and 3 unique centres, matching both the required counts and each provenance record. Independently segmented the cream colony highlights in each final PNG and matched every saved centre to a separate image component. All expected colonies are present, with centre differences below six pixels. The 144-colony and selective count sheets were also opened.

A bright component near the lower inner rim occurs in all six plates. A crop comparison with the original blank dish confirms it is the inherited painted rim highlight, not an extra colony. It is excluded from the colony recount. Evidence and the comparison crop are saved in `out/local/briefs96-99-audit/independent-colony-components.json` and `rim-bright-component.png`.

## Accepted framing exceptions

- Brief 96 empty dish: 160 px left and right margins (8%), 171 px top and bottom (8.55%). These retain the required original before framing.
- Brief 97 methyl-orange clips: inherited 8% vertical margins preserve the original clip framing.
- Brief 98 cabbage clips: inherited 8% vertical margins preserve the original clip framing.

These exceptions remain explicitly recorded in provenance, QA and checkpoints. They are not silently counted as 10% margin passes. All other plates meet the required margin checks, including all 20 Brief 99 plates.

## Error reports, site logs and explicit extra work

Read the four actual error-only reports and both coverage documents. They contain 18 findings across the batches, including author-note and ledger findings. They do not claim listening, artwork approval or release approval. Empty design sections are qualified by the coverage notes rather than treated as unconditional approval.

Compared the new site corrections with the report findings and Revision 2 decisions. No contradictory proposed correction was identified. The Module 6 log includes the new practical, cloning, recombinant-DNA and biotechnology findings and the revised vinegar basis: the minimum is 40 g/kg, with the label basis needing confirmation. The Module 7 log has 33 rows, including the five earlier route findings. It excludes withdrawn B02 items 4 and 7 and the C01 hexyl-acetate complaint. L22 is described using its actual narrower site wording rather than an invented claim that covalent amide bonds explicitly break during melting.

The Snow correction now agrees in the site log and check 99: Table I records 127 deaths on 2 September 1854, not in the first three days. Check 99 also includes the requested B7-IQ1-01 practical-flag finding without changing the ledger.

The separate methanol replacement file exists at `docs/production/claude-pm/pre-design/chem-m7-l11-methanol-dataset.md`. Its two constructed examples independently recompute to approximately -362 and -383 kJ/mol, with apparent recoveries of 49.9% and 52.7%. It identifies the numbers as constructed teaching data and distinguishes the Open University teaching reference from a physical class-results distribution. This fulfils the extra brief 99 dataset work without reusing the faulty site measurements.

No omitted explicit hand-in file was identified. Status and publication updates remain root's responsibility under the delegated ownership arrangement.

## Remaining limits

The source-review coverage documents retain these actual limits:

- Wilmut's full original numerical method/table and Loi's publisher full text were inaccessible. Available original abstracts and institutional material corroborate the used claims, but this is not full-text certification of every historical method detail.
- Biology 2021 Q33 has a copyright-withheld stimulus. The later review did not perform a visual comparison of every graph-only examination page, so the originality search is not proof that no resemblance exists anywhere.
- The exact ongoing pig-kidney record duration on 22 October was not published in the latest located primary update. The report uses the supported dated statement of beyond nine months on 3 September 2026.
- AS/NZS 2243.3:2022 was not available in full. The school RG1 attribution is corrected to ASTA/Science ASSIST; the separate claim that WHO explicitly lists this yeast species was not verified.
- School meter, reagent formulation, strain and cabinet identity were not provided, and no physical cabbage-indicator batch was tested.
- Not all historical original-language accounts or organism-size discovery papers were available. The skills frequency categories were checked against the research pack rather than independently recoded from every exam question.

This audit did not repeat all external research or any human listening. This agent previously assembled the Brief 96 corrections and authored the site-log additions, so those parts are a read-only self-check, not a second independent author's approval. The Brief 97 to 99 artwork and reports were authored by other agents and were inspected independently here.
