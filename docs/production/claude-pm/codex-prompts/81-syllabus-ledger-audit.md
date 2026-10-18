# Brief 81: audit the 2017 syllabus ledgers against the official documents

Read `00-standing-rules.md` first. The local ledger `docs/production/programme/syllabus/chem-2017-y12.json` is missing at least one Module 6 dotpoint: "calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)". Every video description quotes from these ledgers, so they must be complete and exact.

1. Compare every Year 12 content point in `chem-2017-y12.json` and `bio-2017-y12.json` (Modules 5 to 8) word for word against the official NESA 2017 syllabus documents. Check bullets, codes, spacing and characters such as the minus sign in [OH-].
2. Add any missing points, with ids in the existing pattern, and correct any mismatches. Record each change.
3. If `generate_ledgers.py` caused the gap, fix the script and re-run it. Show that the regenerated files contain every official point.
4. Check every quoted dotpoint in `docs/production/claude-pm/youtube/*.json` and in the published video descriptions against the fixed ledger. Fix any published description that is wrong. This is a metadata edit only.

Write `docs/production/programme/syllabus/ledger-audit-2026-10.md`, listing the changes and the descriptions fixed. Hand in to `status.md`.
