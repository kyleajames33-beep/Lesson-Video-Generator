# Briefs 106 to 108: final integration review

Reviewed 27 October 2026. No site-log integration errors found.

## Site log

The final `site-corrections-m7.md` contains 87 new rows: 49 from brief 106, 20 from brief 107 and 18 from brief 108. The Yogyakarta publication-year finding and the L21 monomer-recovery finding were extended in place. There is no repeated old-text quotation on the same page between the new rows and the earlier register, and no exact duplicate new row.

Compared every fragment row with the final log. All are reproduced, apart from the documented C09-1 and C09-6 source changes and the L21 row merged into its existing finding. All new quotations match the actual read-only HTML using a stricter check that collapses whitespace but does not delete it or normalise Unicode characters. The log hash matches `brief106-108-site-log-verification.json`; all 15 current site-file hashes match its recorded hashes. These checks show agreement with that checkpoint, not an independent pre-task snapshot of the website.

The requested exclusions remain excluded: B13 error 11, C11's withdrawn absolute claim, the previously logged recall-hook item, C12 item 4, P01 item 3, C13's clarity notes, C14's grade-dependent temperature note and the rejected G02 item. B15's two statements found correct are not presented as errors. Their exclusion is explained in the brief 107 fragment's owner record. Sweden is recorded once with all three occurrences. Gene-drive resistance is an addition; the existing SIT resistance finding is not duplicated.

The important corrected statements survived integration:

- B13 retains separate vaccine endpoints and follow-up periods, with the adjusted TAK-003 figures and serostatus limits. [WHO's R21 statement](https://www.who.int/news/item/02-10-2023-who-recommends-r21-matrix-m-vaccine-for-malaria-prevention-in-updated-advice-on-immunization) supports the dated recommendation and seasonal result. [The trial report](https://pubmed.ncbi.nlm.nih.gov/38245116/) and [WHO's TAK-003 recommendation](https://www.who.int/republicofkorea/news/detail-global/15-05-2024-who-prequalifies-new-dengue-vaccine) support the other entry.
- B15 distinguishes provisional NCI allocation from the separate WA contract and the later failure to agree satisfactory licence terms. The [1993 signing](https://www.wa.gov.au/government/media-statements/Court%20Coalition%20Government/Agreement-on-development-of-anti-AIDS-drug-19931222) and [1995 withdrawal](https://www.wa.gov.au/government/media-statements/Court%20Coalition%20Government/Withdrawal-of-Australian-company-from-AIDS-treatment-project-19950301) directly support that correction.
- C09-1 now cites the page containing the unsourced recall story. This supports reporting its missing citation, not proving that no such event ever occurred. C09-6 cites L14, which actually contains the carboxylate-resonance explanation; its erroneous quotation remains correctly located at L18.

This is an integration review with targeted source checks, not a second complete fact check of every older register entry. No site content was edited. Cultural review and release approval remain separate.

## Brief 106 artwork repair

The follow-up colour-mask audit found that the initial global hue filter removed some legitimate opaque dark paint inside the jar, lancet and rat/flea. Root was told before repair. The processor now protects opaque painted interiors before applying colour cleanup to edges and low-alpha pixels. Exact synthetic RGB swatches in the faulty native cutout are excluded when locating the painted edge. Runtime assertions preserve every protected native RGBA pixel before resampling. Raw generations remain unchanged.

Rebuilt and inspected all 24 final cream/checker/dark views. The blue litmus and 50% overlay retain exact reference alpha and tile geometry. Eight final plates remain 2000 by 2000 RGBA with at least 10% clear margins. This was a repair and recheck by the processing author; root's separate final art inspection remains appropriate.

Current archive: `out/archives/brief106-plates-2026-10-27.zip`, 42,301,323 bytes, SHA-256 `6a53c2546260b5a97b4cffd067d6ede61e103cb9964626ed64f2a1eea17b953f`. All 51 members match current local hashes and the ZIP CRC passes. Earlier brief 106 archive digests are superseded. Asset QA does not approve scene use, teaching, motion, listening or publication.
