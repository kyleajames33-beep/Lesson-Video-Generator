# Brief 121 hand-in

30 October 2026. Twelve independent review reports and eighteen commissioned plates are delivered. The designs are unchanged. No speech, video render, bundle, commit or publication was performed.

| Design | Learning: blockers / should fix | Science: blockers / should fix |
| --- | --- | --- |
| m8c12 | 0 / 2 | 1 / 1 |
| m8g03c | 0 / 2 | 1 / 1 |
| m8c13 | 0 / 2 | 0 / 3 |
| m8b16 | 0 / 2 | 0 / 2 |
| m8b17 | 0 / 2 | 0 / 2 |
| m8g02b | 1 / 2 | 1 / 2 |

Counts are per review and overlap. They are not additive. All reports end with an empty Resolution section for Claude. Proposed repairs to C13, B16 and B17 name a cut or replace existing words because those designs are near their time limit.

The reports are `checks/<key>-learning-review.md` and `checks/<key>-claude-science-check.md`. Input hashes and narration counts are in `checks/brief121-input-audit.json`. All six designs have zero em dashes. The independent sanity check in `assets/brief120-121-review-sanity.md` prompted corrections to the review findings before hand-in: the official acid OH range, acceptable rounding, actual trial denominator, synthesis comparison, multiplet terminology, arithmetic and mass heights. No lesson text was changed.

Every exact solvent-labelled NMR record and measured liquid-phase IR trace has not been verified. These are science blockers for C12 and G03, rather than recording approval. Available direct NIST records, phase descriptions and failed requests are preserved in `assets/brief121-nist/` and `brief121-nist-records.json`; the measured 2-chloropropane mass dataset is shared from Brief 120. Predicted ranges were not substituted for measured records. The calculations and structure deductions were checked separately.

Ten confirmed site corrections were added to `site-corrections-m8.md`, with exact quotations and source-file hashes in `assets/brief121-site-evidence.json`. The missing cataract content is logged as a gap. Two excluded cultural passages are flagged for owner review, without calling them false or adding them to learner copy.

Artwork: four aligned eye states, three cornea states, artificial lens, water bath, willow, two iron(III) chloride tubes, five dialysis/transplant plates and a bowel screening kit. G02 reuses the AAV plate from Brief 120. All eighteen new files are 2000-square RGBA. Provenance is in `assets/brief121-provenance.json`, with per-design subsets and exact original imagegen call text. Native generations, rejected eye attempts, background views, 220-pixel contact views and 50% overlays are retained in `assets/brief121-qa/`.

Root inspected the final contact sheets, dark-board views and aligned overlays. The long-eye retake preserves the anterior registration and extends the y900 silhouette span by 11.7%; this is a silhouette comparison, not an anatomical optical-axis measurement. Its right margin is 5.95%. The common cornea trio uses 8% vertical margins. The tubes retain the reference rack's 8.85% top margin. These framing exceptions are recorded rather than independently shrinking aligned variants. Playback and owner artwork acceptance are pending.

Local archive: `out/archives/brief121-plates-2026-10-30.zip`. The exact current hash, byte count and verified member count are in `assets/brief121-media-checkpoint.json`. ZIP CRC and every member SHA-256 are checked by streaming, without a second extracted copy. The archive is not uploaded.

For Claude: resolve the review findings and the measured-spectra checks before recording. No question for the owner.
