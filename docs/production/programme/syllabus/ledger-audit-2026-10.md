# 2017 Year 12 syllabus ledger audit

Checked 18 October 2026 against the [NESA Chemistry 2017 DOCX](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx) and [NESA Biology 2017 DOCX](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx), linked from the [Chemistry](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017) and [Biology](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017) syllabus pages.

## Ledger changes

| File | Change |
| --- | --- |
| `generate_ledgers.py` | Accept a `List Bullet` paragraph without direct Word numbering as a top-level 2017 content point. The Chemistry Module 6 Ka/pKa bullet has that structure. |
| `chem-2017-y12.json` | Added `C6-IQ3-04`, the Ka/pKa point under Quantitative Analysis, page 53, with code ACSCH098. Renumbered the next four points `C6-IQ3-05` to `C6-IQ3-08`. No other wording changed. |
| `bio-2017-y12.json` | No change. |
| `README.md` | Corrected the Chemistry count from 68 to 69. |

The regenerated Chemistry module counts are 17, 20, 25 and 7 for Modules 5 to 8. Biology has 17, 14, 15 and 12. Every Year 12 `Content` paragraph with direct Word list numbering or `List Bullet` style is now represented as a main point or nested example. The source DOCX uses an en dash in `[OH–]` and some ion symbols, and a curly apostrophe in Le Chatelier’s name. The ledger preserves those characters.

## YouTube metadata audit

The five local YouTube JSON files contain 57 descriptions with 65 quoted syllabus items. There are 46 non-verbatim quoted items across 42 descriptions. Most omit an ACS code from the end of the main point or a nested example. Several shorten a nested bullet. The table gives the JSON video indexes and the ledger points needed to replace or check each quote. Indexes are zero-based. A listed point is the closest matching official point, including its examples and codes. No YouTube JSON or live description was edited in this audit because those files and the publication account are assigned to the root agent.

| File | Video indexes: ledger points with quote differences |
| --- | --- |
| `wave1-uploads.json` | 0: `C5-IQ1-02`; 1: `B5-IQ1-01` |
| `wave2-uploads.json` | 0: `C5-IQ1-04` |
| `wave3-uploads.json` | 0: `C5-IQ2-01`, `C5-IQ2-02`; 1: `B5-IQ1-01` |
| `wave4-metadata-draft.json` | 1: `C5-IQ2-01`, `C5-IQ2-02`; 2: `C5-IQ2-02`; 3: `C5-IQ3-01`; 4: `C5-IQ3-02`; 5: `C5-IQ2-01`; 6: `C5-IQ3-02`; 8 and 9: `B5-IQ1-02`; 10: `B5-IQ1-03`; 11, 12 and 13: `B5-IQ2-01`; 13 and 23: `B5-IQ4-02`; 14, 16, 17, 18 and 20: `C5-IQ3-02`; 15: `C5-IQ3-03`; 19: `B5-IQ3-01` |
| `wave4-uploads.json` | 1: `C5-IQ2-01`, `C5-IQ2-02`; 3: `B5-IQ2-01`; 4 and 5: `B5-IQ1-02`; 6: `C5-IQ3-01`; 7: `C5-IQ2-02`; 8, 9, 11, 13, 14 and 15: `C5-IQ3-02`; 10: `C5-IQ3-03`; 12: `B5-IQ3-01`; 16: `B5-IQ1-03`; 17: `C5-IQ2-01`; 18: `B5-IQ4-02` |

No local quote uses the added `C6-IQ3-04` or its renumbered neighbours. Live published descriptions still need an account-side comparison and any necessary metadata corrections. Descriptions fixed in this audit: none.

## Root follow-up on 18 October 2026

After the independent ledger audit, the root agent corrected the quoted syllabus blocks in all five local YouTube JSON files and checked them against the regenerated ledgers. The live channel descriptions for all 31 Public videos were then updated or found current and read back in Studio. See `docs/production/claude-pm/youtube/channel-audit-2026-10.md` for the per-video state. The earlier table remains the original independent finding, not the current live status.

