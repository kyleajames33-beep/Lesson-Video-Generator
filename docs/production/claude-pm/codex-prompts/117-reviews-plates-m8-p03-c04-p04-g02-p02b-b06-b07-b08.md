# Brief 117: learning review, science check, plates and site log for 8 more Module 8 designs

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats: Codex writes both independent reviews and Claude resolves them. This brief can run alongside briefs 115 and 116.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`:

| Design | Topic | Review file key |
|---|---|---|
| `chem-m8-p03.md` | identify unknown ions (practical; worked example magnesium sulfate) | `m8p03` |
| `chem-m8-c04.md` | colourimetry, UV-visible and AAS, with a calibration curve | `m8c04` |
| `chem-m8-p04.md` | Cu²⁺ calibration practical | `m8p04` |
| `chem-m8-g02.md` | calibration and water-analysis data practice; the walkthroughs are the content | `m8g02` |
| `bio-m8-p02.md` | plant water loss: a potometer with a fan, plus a stomatal count | `m8p02b` |
| `bio-m8-b06.md` | causes of non-infectious disease (cystic fibrosis, silicosis, iron deficiency, melanoma) | `m8b06` |
| `bio-m8-b07.md` | environmental exposure (smoking, asbestos, UV) | `m8b07` |
| `bio-m8-b08.md` | nutrition and disease risk, including how type 2 diabetes develops | `m8b08` |

## Root decisions

These are settled. Check that each is safe and accurate, but don't reopen them.
- **P03: no lead compounds as student unknowns.** If the design gives students lead nitrate, the reviews should propose a replacement, such as barium or another cation from the c03a set, or a teacher demonstration. Lead's test results may stay as data.
- **B06: silicosis is the environmental example** (engineered stone; Australia's ban took effect on 1 July 2024).
- **G02 leaves out dissolved oxygen and BOD**, because chem-m8-c06 teaches them later.
- **B08 teaches how type 2 diabetes develops, not its treatment.** B12 covers treatment, and B03 deliberately left diabetes out.

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109, and recalculate every number.

- **Practicals (P03, P04, Biology P02):** can a student plan and evaluate the method? Check the s07 language for validity, reliability and accuracy, and check the risk table.
- **Length:**
  - P03, C04, P04 and Biology P02 are about 568 s, against a 570 s cap. Any repair must be length-neutral or name a cut.
  - B08 is only just above the 5,500-character floor.
- **Scene 3 of C04:** say whether it should be split.
- **Double-teaching:** check against c03a, c03b, c01, c02, b03, b04 and b05, and among B06, B07 and B08, which were written in parallel. Check for overlap with B06 in particular.

Write `checks/<key>-learning-review.md` for each design.

## 2. Science check

Verify every fact, number, equation and colour, and date and cite every Australian statistic. Check every dotpoint word for word. Write `checks/<key>-claude-science-check.md` for each design. In particular:

- **P03:**
  - flame emission comes from atoms or ions;
  - the test sequence and its controls.
- **C04 and P04:**
  - the Beer-Lambert relationship and the blank;
  - the linear range;
  - Cu²⁺ absorbance near 800 nm, and whether school colorimeters reach that wavelength (suggest a filter or wavelength that works if they don't);
  - the hollow cathode lamp;
  - the Australian drinking water guideline values, including lead at 0.01 mg/L against 0.005 mg/L;
  - the Flint reading: AAS against ICP-MS.
- **G02:** the Winkler product MnO(OH)₂ (as a note only, since dissolved oxygen is out of scope here) and the nutrient data.
- **Biology P02:** potometer technique (cutting under water, sealing, the air bubble) and the stomatal peel method.
- **B06:** CFTR; silicosis and engineered stone; iron-deficiency anaemia; melanoma and UV.
- **B07:**
  - the smoking pathways;
  - mesothelioma latency;
  - the asbestos and smoking multiplier;
  - the BRAF figure;
  - Australian UV and melanoma rates.
- **B08:**
  - Australian diabetes figures (whether 1.3 million counts all types);
  - AusDiab's undiagnosed proportion;
  - the insulin resistance mechanism;
  - the deficiency diseases.

**Cultural (owner):** the L06/L07 site lesson presents Aboriginal and Torres Strait Islander diabetes rates as genetic. Log it as a site correction and mark it for the owner's cultural review. Check that no design repeats it.

## 3. Plates

Use the brief 109 style, with a 50% overlay check for each aligned set. Each design's "Codex asset brief" section is the specification; use its exact filenames. Match tubes and flames to the existing rack set and burner (`m8-flame-*-v2`).

| Design | Plates |
|---|---|
| P03 | 1 |
| C04 | 3 |
| P04 | 8: a matched cuvette series, the unknown before and after dilution, and a standards rack |
| G02 | 1: a school drinking bubbler, with no people |
| Biology P02 | 5 |
| B06 | 4 |
| B07 | 6 |
| B08 | 7 |

C04 and P04 share the copper cuvettes, so make one matched set and reuse it.

Organs and tissue only; no people, hands or faces. Write provenance to `assets/brief117-provenance.json` and QA views to `assets/brief117-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add every confirmed site error to `site-corrections-m8.md` in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md` with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
