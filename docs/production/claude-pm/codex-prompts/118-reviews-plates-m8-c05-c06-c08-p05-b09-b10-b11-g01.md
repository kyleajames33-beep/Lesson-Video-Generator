# Brief 118: learning review, science check, plates and site log for the third batch of Module 8 designs

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats: Codex writes both independent reviews, and Claude resolves them. This brief can run alongside briefs 116 and 117.

The designs are at Revision 1 in `docs/production/claude-pm/lessons/`. The route was updated on 30 October (`module8-route-review-claude.md`).

| Design | Topic | Review file key |
|---|---|---|
| `chem-m8-c05.md` | why monitor water and nutrient pollution | `m8c05` |
| `chem-m8-c06.md` | dissolved oxygen, BOD and the Winkler calculation | `m8c06` |
| `chem-m8-c08.md` | simple tests that distinguish organic groups | `m8c08` |
| `chem-m8-p05.md` | functional group tests on unknowns (practical) | `m8p05c` |
| `bio-m8-b09.md` | how cancer begins and spreads | `m8b09` |
| `bio-m8-b10.md` | incidence, prevalence and mortality | `m8b10` |
| `bio-m8-b11.md` | judging an epidemiological study (Doll and Hill) | `m8b11` |
| `bio-m8-g01.md` | epidemiology practice; the walkthroughs are the content | `m8g01b` |

## Root decisions

These are settled. Confirm that each is safe and accurate, but don't reopen it.
- **Melanoma** is B09's main case.
- **Dichromate steps** in P05 are a teacher demonstration in a fume cupboard, matching chem-m7-p04.
- **G01 comes after B11**, because its question 3 needs B11.
- **C05 links to water treatment in one sentence only.** The treatment video, C07, was cut.

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109, and recalculate every number.
- **P05:** check that the method can be planned and evaluated, using s07's language, and check the risk table.
- **Length:** C06, P05, B09 and B11 are each about 568 to 570 s, so any repair must be length-neutral or name a cut.
- **Double-teaching:** check C08 and P05 against M7 P02, P04 and C09. Check B09 against B06 and B07. Check B10 and G01 against skills s05.

Write one `checks/<key>-learning-review.md` per design.

## 2. Science check

Verify, date and cite every fact and figure, and check every dotpoint word for word. Write one `checks/<key>-claude-science-check.md` per design. In particular:

- **C05:**
  - the 1991 Barwon-Darling bloom;
  - the 2018 to 2019 Menindee fish deaths;
  - nitrate and phosphate, and their mass basis (as the ion, or as N or P);
  - E. coli against total coliforms.
- **C06:**
  - the March 2023 Menindee deaths, from the NSW Chief Scientist's review;
  - every Winkler step, including the MnO(OH)₂ product and the 1:4 ratio;
  - BOD₅ conditions and the pollution bands.
- **C08 and P05:**
  - **whether warm acidified dichromate stays orange with alkenes such as cyclohexene.** Attempt 1 and the P05 demonstration both depend on this. Say which fallback to use if it doesn't;
  - acidified permanganate and its products;
  - how specific bromine water is;
  - the decision tree logic;
  - GHS codes, including dichromate H350.
- **B09:**
  - checkpoints;
  - proto-oncogenes and tumour suppressors;
  - metastasis;
  - Australian melanoma figures from AIHW, dated.
- **B10:** the AIHW cancer series used in the hook and in every rate calculation.
- **B11:**
  - the Doll and Hill 1950 case-control study, including the 649 cases and the 622 control figure;
  - the 1954 British doctors cohort and its rates by amount smoked, checked against the BMJ papers;
  - when Doll quit smoking.
- **G01:** every rate and graph, and whether question 3's dependence on B11 holds.

## 3. Plates

Use the brief 109 style, with a 50% overlay for every aligned set. Each design's "Codex asset brief" section is the specification; use its exact filenames. Match tubes to the existing M8 rack sets. Measure whether the brief 60 bromine rack sits correctly beside the dichromate rack.

| Design | Plates |
|---|---|
| C05 | 5: three lake states aligned, farm runoff, turbidity meter |
| C06 | 8: DO meter (shared with C05), three Winkler bottles, three iodine flasks, a dark incubator |
| C08 | 1 aligned pair: carbonate fizz before and fizzing |
| P05 | none (it reuses C08's pair) |
| B09 | 4: apoptotic cell, mole, cells entering a vessel, lymph node with secondaries |
| B10 | none |
| B11 | 4: plain cigarette pack with no branding, hospital case files, questionnaire envelope, record ledger |
| G01 | 1: plain energy drink can with no branding |

No people, hands, faces, brands or logos. Write the provenance to `assets/brief118-provenance.json` and the QA views to `assets/brief118-qa/`, then archive and record a media checkpoint.

## 4. Site corrections log

Add every confirmed site error to `site-corrections-m8.md` in that file's format: the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md` with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
