# Brief 117 proposed hand-in for root

30 October 2026. The eight learning reviews and eight science checks are complete as source reviews. They do not approve recording, motion, human listening or release. No design, narration, scene, site, shared status or board was edited. No speech, video render, commit, push or publication was performed.

| Design | Learning: blockers / should fix | Science: blockers / should fix | Distinct issues across both reviews |
| --- | --- | --- | --- |
| m8p03 | 1 / 2 | 1 / 3 | 1 blocker, 3 should fix |
| m8c04 | 1 / 2 | 1 / 2 | 1 blocker, 3 should fix |
| m8p04 | 0 / 3 | 0 / 2 | 0 blockers, 3 should fix |
| m8g02 | 1 / 2 | 1 / 2 | 1 blocker, 2 should fix |
| m8p02b | 1 / 3 | 1 / 3 | 1 blocker, 3 should fix |
| m8b06 | 1 / 2 | 1 / 2 | 1 blocker, 3 should fix |
| m8b07 | 0 / 3 | 0 / 4 | 0 blockers, 4 should fix |
| m8b08 | 1 / 3 | 1 / 3 | 1 blocker, 4 should fix |

Distinct totals: 6 blockers and 25 should-fix issues. Counts in `brief117-review-counts.json` are per review; do not add repeated findings twice. Each requested review is under `../checks/<key>-learning-review.md` or `../checks/<key>-claude-science-check.md`, ending with an empty Resolution section.

Primary research and exact checks: `brief117-source-audit.json`, `brief117-official-syllabus.json`, `brief117-numerical-audit.json`, `brief117-site-evidence.json`, `brief117-exam-inventory.json`, `brief117-exams/` and `brief117-near-match-review.md`. All narration totals and the official syllabus wording match after appropriate whitespace/inline-run handling. No U+2014 was found in the eight designs. All fourteen official Chemistry/Biology 2019-to-2025 papers were searched and relevant contexts compared; no close paraphrase found. Image-only and redacted exam material limits remain recorded.

Site proposals contained 24 verified rows. Root has integrated all 24 into the shared log. The last two Chemistry L04 rows use short uninterrupted exact excerpts, avoiding differences caused by inline superscript tags. Root owns final integration and deduplication. The population-genetics framing is flagged for the owner's cultural review. BRAF at about 60% was not treated as a proven error. The CF median-survival confusion was independently confirmed against the Australian registry report.

Remaining science limits are explicit in each review: exact school-product SDS classifications, some author-only spectroscopy constants and a few historical source statistics were not all independently settled. No unsupported replacement numbers or blanket safety clearance were invented.

Artwork: all 36 unique PNG filenames delivered, all 2000 by 2000 RGBA with real transparency. There were 39 built-in imagegen calls, including four targeted retakes, producing 35 unique generated states plus one pale-copper reuse of standard 1. Biology P02 requires 6 files, B06 requires 5, and B08 reuses the B06 red-cell plate. The corrected rack and cuvette tints passed the stated content inspection. All public artwork remains a technical candidate pending owner acceptance.

Final QA is complete at the inspection levels recorded in `brief117-qa-review.md`. The mucus hold is resolved by root-authorised region confinement using existing generated pixels: every mask-zero RGBA pixel, including the entire lower region y = 920 through 1999, exactly matches the unchanged original reference. Root and agent inspected the clean seam before promotion. The existing unlit and calcium burner references still differ by up to ten pixels at sampled edges; the new blue plate matches the calcium anchors within two pixels, but cannot simultaneously match both inconsistent references within two pixels. That reference mismatch remains an art/integration decision. Root's temporary resource pause was cleared and the sentinel removed. All image processing was sequential PIL work.

Media checkpoint: `brief117-media.zip`, 59,837,830 bytes, 142 members, ZIP integrity check passed. SHA-256: `08547c658f15cbe7c91a3575af612b74fb153d6ca8ad315c1d123d77edd6434f`. Details are in `brief117-media-checkpoint.json`, `brief117-provenance.json`, `brief117-final-technical-check.json` and `brief117-generation-jobs.json`. No remote archive upload was performed.

Additional gates: source-review findings must be resolved by the author; exact school-product SDS checks and the noted source limits remain; owner cultural review, owner art acceptance, exact voiced preview, human listening and release review remain pending.

Utilities created, all brief-specific: `scripts/brief117-audit.py`, `brief117-write-reviews.py`, `brief117-site-log.py`, `brief117-exam-check.py`, `brief117-numbers.py`, `brief117-process-plate.py`, `brief117-contact-sheet.py`, `brief117-finalise.py` and `brief117-mucus-composite.py`. The image helpers use PIL and process one image at a time; they do not import NumPy or OpenCV. Only the built-in imagegen tool was used for artwork generation and semantic edits. The later deterministic mucus confinement used existing generated pixels under root's explicit instruction, with no semantic painting.
