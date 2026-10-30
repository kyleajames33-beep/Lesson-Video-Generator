# Brief 121: learning review, science check, plates and site log for the last 6 Module 8 designs

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats: Codex writes both independent reviews and Claude resolves them. This brief can run alongside any other open brief.

With these 6, every Module 8 video has a design. The designs are at Revision 1 in `docs/production/claude-pm/lessons/`:

| Design | Topic | Review file key |
|---|---|---|
| `chem-m8-c12.md` | combining spectra to identify one molecule (butanone) | `m8c12` |
| `chem-m8-g03.md` | integrated organic structure practice (walkthroughs are the content) | `m8g03c` |
| `chem-m8-c13.md` | designing and judging a synthesis (aspirin); closes Chemistry | `m8c13` |
| `bio-m8-b16.md` | technologies for visual disorders | `m8b16` |
| `bio-m8-b17.md` | replacing lost kidney function | `m8b17` |
| `bio-m8-g02.md` | prevention and technology evaluation practice; closes Biology | `m8g02b` |

## Root decisions

These are settled. Confirm they are accurate, but don't reopen them.
- **B16** includes cataract and lens replacement, even though site L19 doesn't cover them.
- **G03** keeps three questions.
- **C13** applies skills-s08's extended-response planning, and is the last Chemistry video.

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109, and recalculate every number.
- C13, B16 and B17 sit at about 566 to 569 s, so every repair must be length-neutral or name a cut.
- Check C12 and G03 for double-teaching against C09, C10, C11a and C11b.
- Check B17 against B04, and G02 against B13 to B15.

Write `checks/<key>-learning-review.md` for each design.

## 2. Science check

Verify every fact, number and spectrum, and check every dotpoint word for word. In particular:

- **C12 and G03:** check every spectrum value against NIST WebBook or SDBS. This covers butanone and butanal, 2-chloropropane (including the septet), ethyl propanoate, pentan-3-ol, 2-methylbutan-2-ol, 2,2-dimethylpropanoic acid and 3-methylbutan-2-one. Also confirm each deduction is valid.
- **C13:**
  - aspirin's history (Bayer 1897, launched 1899), with a source;
  - the WHO Essential Medicines List (2023);
  - the iron(III) chloride test;
  - atom economy, including the coefficients;
  - the site's sertraline and palladium claims.
- **B16:**
  - the eye's structure;
  - myopia, hyperopia, astigmatism (if used) and cataract;
  - how each technology works: glasses, contact lenses, laser surgery and intraocular lens replacement.
- **B17:**
  - haemodialysis, peritoneal dialysis and transplant compared;
  - the Australian figures (about 15,000 on dialysis, about 1,000 transplants a year), confirmed against ANZDATA 2024 and the Organ and Tissue Authority, with dates.
- **G02:** every question, its data and its model answer.

**Cultural:** B17 leaves out site L20's remote-access point and L15's Aboriginal kidney-disease content, pending the owner's cultural review. Log those site passages for the owner, and check that no learner copy makes claims about specific Aboriginal or Torres Strait Islander communities.

Write `checks/<key>-claude-science-check.md` for each design.

## 3. Plates

Use the brief 109 style, with a 50% overlay check for every aligned set. Each design's "Codex asset brief" section is the specification; use its exact filenames.

- **C12 and G03:** none. Spectra are coded.
- **C13:** 4 (an aspirin water bath, willow bark, and two iron(III) chloride tubes matched to the rack set).
- **B16:** 8 (four versions of the existing eye plate, aligned so they cross-fade; three cornea close-ups; one artificial lens).
- **B17:** 5 (dialysis machine, dialyser cutaway, peritoneal section, fluid bags, transplant placement).
- **G02:** 1 (bowel screening kit). It also uses `m8-aav-vector-v1.png` from brief 120; if that brief hasn't delivered it yet, paint it here once and record it in both provenance files.

Use organs, devices and tissue only: no people, hands, faces or brands. Write the provenance to `assets/brief121-provenance.json` and the QA views to `assets/brief121-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add every confirmed site error to `site-corrections-m8.md`, in that file's format: the exact old text (verified in the read-only site file), the correct statement and a source. Include L19's missing cataract coverage as a site gap. Skip any already logged.

Hand in to `status.md` with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
