# Brief 118 hand-in

30 October 2026. Independent source reviews by Codex. No lesson designs, narration, scene code, shared status, production board or site files were changed. No speech, renders, commits or uploads were made.

## Review files and counts

All 16 requested files are in `docs/production/claude-pm/checks/`. Both files for each key end with an empty `## Resolution` section. Counts below refer to each independent report. Findings that appear in both reports are the same repair and must not be added together as distinct issues.

| Design | Learning: blocker / should fix | Science: blocker / should fix | Main unresolved issue |
| --- | --- | --- | --- |
| C05, `m8c05` | 0 / 3 | 0 / 3 | Spatial data become a time prediction and a proven source; scope the oxygen-crash wording; answer one chemical parameter when one is requested. |
| C06, `m8c06` | 0 / 3 | 0 / 5 | Define the five-day measured quantity, avoid treating air saturation as a hard ceiling, and distinguish P's low oxygen decrease from a standard validated BOD result. |
| C08, `m8c08` | 1 / 1 | 1 / 2 | The inference from green dichromate to an alcohol depends on unverified alkene selectivity. Apply the stated hexane fallback and repair the two-group inference. |
| P05, `m8p05c` | 1 / 3 | 1 / 4 | Do not promise cyclohexene remains orange under the exact demonstration conditions without validation. Correct validity wording, gas setup order and the spill instruction. |
| B09, `m8b09` | 3 / 2 | 3 / 3 | Separate DNA damage from established mutations; specify mutation effects in A1; keep the malignant lineage distinct from the benign mole comparison. |
| B10, `m8b10` | 1 / 4 | 1 / 4 | An age-standardised decrease does not prove a decrease at every age. Exact annual data are now provided; fill the graph from them. |
| B11, `m8b11` | 0 / 5 | 0 / 6 | Remove guarantees about randomisation/matching, use the correct cohort timing and chart population, label the cessation endpoint, and correct the flour/NTD wording. |
| G01 Biology, `m8g01b` | 0 / 4 | 0 / 4 | Align the survey's case definition with its prevalence claim, avoid treating age adjustment as conclusive, and keep same-year rates distinct from survival. |

Final machine-readable counts: `brief118-review-counts.json`. Optional findings are also recorded there. C06's BOD wording is a should-fix terminology finding, not a recording blocker. The exact solid dichromate hazard-code list is confirmed, so the P05 SDS-evidence item is optional rather than an error.

## Evidence and data

- `brief118-source-audit.json`: hashes of all eight Revision 1 designs; full narration and per-scene recounts; official 2017 syllabus paragraph evidence and source DOCX hashes; read-only site HTML hashes and exact normalized page text. All eight designs contain no U+2014.
- `brief118-aihw-cancer-mortality.json`: all 31 annual rows, 1995 to 2025, from official AIHW Book 2a, Table S2a.1, October 2025. Both 2001 and 2025 standard-population columns are retained. The requested 2001 basis is available, so there is no need to substitute the report overview's 2025 basis.
- AIHW 1995: 34,216 deaths, crude rate 190.0, 2001-standard rate 208.6 per 100,000. AIHW 2025 projection: 53,545 deaths, crude rate 193.6, 2001-standard rate 142.7. Years 2024 and 2025 are projections. The death count dips in 2003, so the graph must use the actual series rather than a smooth invented increase.
- `brief118-aihw-book2a.xlsx`: original downloaded workbook, SHA-256 `950946e0522951ab970636dda34b9975d83036a0c7797fc1be5a1f289dd7365d`. `brief118-aihw-download-index.json` records the official public download metadata.
- Root integration: if the design's requested data filename is retained, copy the reviewed series to `assets/m8b10-aihw-cancer-mortality.json`. This agent kept its writes under the agreed `brief118-*` ownership.
- Eighteen site errors were confirmed with exact quotations. On the final duplicate check, root had already integrated the initial 17 rows into the shared log. `brief118-site-corrections-proposed.md` therefore contains only the one additional driver-mutation row. `brief118-site-log-audit.json` records 17 already logged and one new row. Root has now integrated the final driver-count row too: all 18 confirmed rows are logged and no site proposal remains pending. This agent did not change the shared log. The proposal also distinguishes rejected, editorial and unresolved author suggestions.

## Artwork

The 24 required plates were generated using built-in imagegen only. The existing bromine rack fails the requested equal-height tube-width comparison, so the two conditional `m8-bromine-water-*-v2.png` replacements were also generated. Total selected delivery is 26 PNG candidates. No fallback CLI or paid speech was used.

`brief118-generation-records.json` retains generated paths, prompts and earlier retake attempts. `brief118-provenance.json` records final paths, dimensions, true-alpha checks, uniform scaling/translation, hashes and overlay measurements. Files at the tool's default generated-image location are retained.

`brief118-qa/` contains black, white and dark-board views at 600 px and 220 px, cream contact views, 50% set/reference overlays, and the old-rack measurement grid. These are art QA evidence, not motion or teaching approval. Strict pixel identity outside the edited contents is not certified merely from matching alpha bounds.

Final sequential PIL-only finishing and visual QA are complete. All 26 files have verified RGBA dimensions, actual transparency and manifest hashes. The flask alignment repair now has zero alpha-bound difference and exact RGBA identity outside its recorded liquid-interior mask. Existing generated contents were confined inside common clear-state glass, with clean seams on the inspected comparison. Originals are preserved in QA. Other matched sets differ by up to 2 output pixels; strict outside-content identity for those sets is not certified. Uniform enlargement from the tool's native resolution is recorded honestly in provenance. No scientific content was painted or recoloured. The authorized flask repair uses existing generated liquid pixels only.

The original rack comparison gives approximately 11.6% width mismatch at equal tube height, beyond the 3% threshold with measurement uncertainty. `brief118-rack-measurements.json` records the method and the resulting conditional v2 decision.

## Media checkpoint

Archive: `out/archives/brief118-media-2026-10-30.zip`. Size: 132,314,232 bytes. SHA-256: `187600dbbd48685c6e2eaeffe29287c681b0fea15d0092e1c85cb832d94d0ec8`. All 114 member hashes were verified after writing. `brief118-media-checkpoint.json` records every member and hash. The archive contains 26 plates, QA, provenance, scientific source evidence and all 16 reviews.

## Remaining gates

The exact warm alkene/dichromate negative is not experimentally established. No invented test result is offered. The safe inference fallback is identified in both affected reviews.

All new scientific copy still requires author resolution and source recheck. Artwork remains subject to owner acceptance, including strict matched-state alignment. Playback speed, exact voiced learning review, caption fit, human listening, export and release approval remain pending.
