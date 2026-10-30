# Brief 120: learning review, science check, plates and site log for the fourth batch of Module 8 designs

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats: Codex writes both independent reviews and Claude resolves them. This brief can run alongside any other open brief.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`. The route was updated on 31 October, including the C11 split; see `module8-route-review-claude.md`.

| Design | Topic | Review file key |
|---|---|---|
| `chem-m8-c09.md` | mass spectrometry (molecular ion, fragments, base peak, chlorine M+2) | `m8c09` |
| `chem-m8-c10.md` | IR spectroscopy | `m8c10` |
| `chem-m8-c11a.md` | carbon-13 NMR | `m8c11a` |
| `chem-m8-c11b.md` | proton NMR (shift, integration, n+1) | `m8c11b` |
| `bio-m8-b12.md` | managing type 2 diabetes (type 1 contrast, DiRECT evidence) | `m8b12` |
| `bio-m8-b13.md` | prevention campaigns (SunSmart) | `m8b13` |
| `bio-m8-b14.md` | when genetics can help prevent disease | `m8b14` |
| `bio-m8-b15.md` | hearing loss technologies | `m8b15` |

## Root decisions

These are settled. Confirm each is accurate, but don't reopen it.
- C09 keeps its chlorine M+2 scene.
- B12 includes a short type 1 against type 2 contrast.
- B14 leaves out prenatal testing to fit the length. The learning review may argue for it only if the dotpoint requires it.
- B15 covers a hearing aid, a cochlear implant and a bone-conduction implant.
- B15 names otitis media only as a general cause.

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109, and recalculate every number.

- **Length:** B12, B14, B15, C10 and C09 sit near 570 s, so any repair must be length-neutral or name a cut. C11b is near the 5,500-character floor, so it can't lose characters.
- **Double-teaching:** check C09 to C11b against M7 naming and isomers and against each other; they were written in parallel. Check B12 against B03 and B08, and B13 against B07, B10 and B11.

Write `checks/<key>-learning-review.md` for each design.

## 2. Science check

Verify every fact and number, and check every dotpoint word for word. Write `checks/<key>-claude-science-check.md` for each design. In particular:

- **Spectra (C09, C10, C11a, C11b):** every peak value and shape in every spectrum the designs specify was written from memory. Check each one against NIST WebBook or SDBS, including:
  - the chloroethane base peak, which the site gives as m/z 49;
  - IR band positions for the alcohol, carboxylic acid, ketone and ester, and the C–O region;
  - carbon-13 shift ranges;
  - proton shifts, integrations and splitting for each named compound;
  - the site's L14 short-answer Q3 (ethanol gives three proton signals).

  Give corrected values where they differ.
- **B12:** check DiRECT's remission figures at one, two and five years, the GLP-1 claims, and the metformin and insulin mechanisms.
- **B13:** check SunSmart's launch year (1988) and its outcome trends, including melanoma in under-40s. Date and cite each.
- **B14:**
  - IVF and PGT;
  - carrier screening, including the scope of Mackenzie's Mission;
  - gene therapy vectors.
- **B15:**
  - the ear's structure and the types of hearing loss;
  - each device's working principle;
  - Clark's team, Melbourne, 1978, without any "first" claim.

**Cultural:** check that no learner copy makes claims about specific Aboriginal or Torres Strait Islander communities.

## 3. Plates

Use the brief 109 style, with a 50% overlay for every aligned set. Each design's "Codex asset brief" section is the specification; use its exact filenames.

| Design | Plates |
|---|---|
| C09 | 1: `m8-ms-cutaway-v1.png`, the five stages inside a mass spectrometer, matched to the existing outside-view plate |
| C10 | none |
| C11a | 1: `m8-nmr-sample-tube-v1.png` (shared with C11b) |
| C11b | none |
| B12 | 3: walking shoes, vegetable bowl, stomach |
| B13 | 3: shade sail, a 1980s TV with a blank screen, an outdoor work shirt and hat with nobody in them |
| B14 | 3: an aligned blastocyst pair (whole, and with cells being taken for testing), and a plain virus vector |
| B15 | 5: middle-ear bones, an aligned healthy and damaged hair-cell pair, two device versions of the existing ear cutaway, and the bone-conduction device alone |

Spectra are coded diagrams, never painted. Use organs and tissue only; no people, hands, faces or brands. Write the provenance to `assets/brief120-provenance.json` and the QA views to `assets/brief120-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add every confirmed site error to `site-corrections-m8.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md` with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
