# Brief 122: error-only check of 30 Module 8 Revision 2 designs, measured spectra, and plate changes

Read `00-standing-rules.md` first, and use brief 112's method and format. This brief can run alongside brief 28ab.

Claude has resolved the brief 117, 118, 120 and 121 reviews. The "## Resolution" table at the end of each review file says what changed, and each design's changelog names any cut. Nothing is voiced yet.

| Brief | Designs (in `docs/production/claude-pm/lessons/`) | Review keys (in `checks/`) |
|---|---|---|
| 117 | `chem-m8-p03`, `chem-m8-c04`, `chem-m8-p04`, `chem-m8-g02`, `bio-m8-p02`, `bio-m8-b06`, `bio-m8-b07`, `bio-m8-b08` | `m8p03`, `m8c04`, `m8p04`, `m8g02`, `m8p02b`, `m8b06`, `m8b07`, `m8b08` |
| 118 | `chem-m8-c05`, `chem-m8-c06`, `chem-m8-c08`, `chem-m8-p05`, `bio-m8-b09`, `bio-m8-b10`, `bio-m8-b11`, `bio-m8-g01` | `m8c05`, `m8c06`, `m8c08`, `m8p05c`, `m8b09`, `m8b10`, `m8b11`, `m8g01b` |
| 120 | `chem-m8-c09`, `chem-m8-c10`, `chem-m8-c11a`, `chem-m8-c11b`, `bio-m8-b12`, `bio-m8-b13`, `bio-m8-b14`, `bio-m8-b15` | `m8c09`, `m8c10`, `m8c11a`, `m8c11b`, `m8b12`, `m8b13`, `m8b14`, `m8b15` |
| 121 | `chem-m8-c12`, `chem-m8-g03`, `chem-m8-c13`, `bio-m8-b16`, `bio-m8-b17`, `bio-m8-g02` | `m8c12`, `m8g03c`, `m8c13`, `m8b16`, `m8b17`, `m8g02b` |

## 1. Error-only fact check

Report errors only, as in brief 112. For each design, check:
- every narration line, especially lines new in Revision 2, plus the Visual text, attempts, feedback, key notes, "Numbers to verify" and metadata;
- that every blocker is fixed, or is recorded as a named recording hold;
- that the Revision 2 edits introduced no new error, and that each named cut removed nothing a later scene relies on;
- every number and equation;
- that each dotpoint is quoted verbatim and each site link is the live `.sa.html` form;
- that every plate filename named in a design exists in `public/assets/` or is commissioned in section 3;
- that there are no em dashes;
- that narration is 5,500 to 6,800 characters and at most about 570 s.

Settled decisions to confirm, not reopen: the root decisions in briefs 117, 118, 120 and 121; P05's dichromate steps stay a teacher demonstration in a fume cupboard, with cyclohexene left out of the dichromate batch; C08 uses hexane in attempt 1; cultural holds in B06 (site finding 5), B14, B15 and B17 stay held for the owner.

Write `checks/codex-check-122.md`, one section per design. For each error, give the corrected text and a source.

## 2. Open items the resolvers left for this check

Resolve each item, citing the source, or say it cannot be verified. Recording holds clear only when their item is verified.

**Measured spectra (recording holds).** Cite the database record for each (NIST WebBook or SDBS: accession, phase or solvent, and field for proton NMR). Give the values in a form Claude can draw directly.
- **C09:** the bromomethane mass spectrum (CAS 74-83-9), including whether m/z 15 is large enough to name; SDBS cross-checks for the six NIST mass spectra already in the design. C09's butanone spectrum must use the same NIST 50206 heights as C12.
- **C10:** liquid-phase IR traces (band positions and shapes) for ethanol, ethanoic acid, propanone, propan-1-amine, propan-1-ol, propan-2-ol and ethyl ethanoate.
- **C11a and C11b:** the record for every drawn or spoken carbon-13 and proton shift, including C11b's printed 2.44 and 1.05.
- **C12:** solvent-labelled proton and carbon-13 shifts for every compound; liquid-film IR for butanone, ethanoic acid, methyl methanoate and ethyl propanoate.
- **G03:** proton NMR, carbon-13 NMR and liquid-film IR for pentan-3-ol, 2-methylbutan-2-ol and 2,2-dimethylpropanoic acid; for 3-methylbutan-2-one, confirm M⁺ 86, base peak 43 and the band near 1715.

**Other facts.**
- **P03:** a 0.1 mol/L calcium standard gives a visible brick-red flame.
- **C04:** a source describing graphite-furnace AAS as a heated graphite tube able to reach the 0.005 mg/L lead guideline.
- **G02 (chem):** a source for a 0.001 mg/L lead quantification limit; whether "water authority" is the right body for a NSW school.
- **C06:** the hook wording "fisheries reports noted deaths around first light" against the DPI submission (July 2023, p4).
- **C08:** no learner copy still relies on an alkene staying orange with dichromate.
- **B06:** the tetanus tag; whether site L06's "dividing criterion is transmissibility" needs a site-corrections entry.
- **B07:** the survey behind the 17 July 2026 smoking release.
- **B08:** "heavy periods or bleeding in the gut" as blood-loss examples, against the NHLBI source.
- **B09:** the AIHW 2025 melanoma figures (17,443 cases; 94% five-year relative survival, 2017 to 2021) against the current release.
- **B10:** sources for the grey-tag figures on diabetes prevalence and cancer incidence by age.
- **B11:** only if available: the 1922 and 1947 lung cancer death counts (612 and 9,287), the years men's rates peaked, and the 1950 heavy-smoking counts.
- **B12:** "11 of 85, followed with continued support" against Lean et al. 2024, and the two-year 36% bar.
- **B13:** "national rates in young adults have fallen since the late 1990s" against the AIHW age groups; whether personal UV meters are a fair method to name in attempt 1.
- **B14:** the source of the site's "one in twenty" carrier figure and the current NSW newborn screening panel count.

Put these in `checks/codex-check-122.md` under "Open items", with one line per item: verified (source), corrected (text and source), or cannot verify.

## 3. Plate changes from Revision 2

Paint in brief 109's style, from each design's "Codex asset brief" section, using its exact filenames. Check aligned sets with a 50% overlay. Organs, devices and tissue only: no people, hands, faces or brands.
- **C04:** new plate `m8-graphite-furnace-v1.png`. If it can't be drawn accurately, say so and Claude will use the coded fallback the design names.
- **B14:** the AAV vector plate is respecified as an open, single-stranded DNA strand, not a loop. If brief 120 painted it with a loop, retake it. G02 (bio) reuses this plate, so record it in both provenance files.
- **B08:** `m8-red-cells-iron-deficient-v1.png` is now painted once under B06 and reused by B08. Don't paint a second copy, and drop `m8-skeletal-muscle-v1.png` from B08's set if it hasn't been painted.
- **B09:** the mole plate is shown side by side with the melanoma, never cross-faded. No new plate; check only that the existing pair suits this.

Add the provenance to `assets/brief122-provenance.json` and the QA views to `assets/brief122-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add any new site error that is still standing to `site-corrections-m8.md`. Skip any already logged. B09's site errors 3 and 8 were rejected by the science check; confirm the log marks them rejected.

Hand in to `status.md`, with one line per design giving its error count, and a count of open items verified, corrected and unverifiable. No design edits, speech, renders or commits.
