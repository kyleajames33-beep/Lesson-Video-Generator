# Brief 104: skills S07, Module 7 Chemistry G02, Biology G03 and B10: plates, error-only check and site log

Read `00-standing-rules.md` first. Do brief 103 first if it is still open, because S07 and G02 use its spirit-burner plates. All four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `skills-s07.md`: exam skills for practical questions (validity, reliability, accuracy, improvements, risk)
- `chem-m7-g02.md`: combustion enthalpy calculation practice
- `bio-m7-g03.md`: immune response practice
- `bio-m7-b10.md`: hygiene, isolation, quarantine, vaccination and herd immunity

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 103 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification. S07 and G02 need no new plates.

| Design | Plates | Folder |
|---|---|---|
| G03 | `m7-flying-fox-v1` | biology |
| B10 | `m7-chlorinated-lime-basin-v1` (no hands); `m7-airport-biosecurity-bin-v1`, matched to a cited photo of the real Australian airport biosecurity bins with no colour scheme assumed (record the photo's source); `m7-measles-virus-v1` | biology |

Write the provenance to `assets/brief104-provenance.json` and QA views (cream and checker) to `assets/brief104-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **S07:**
  - the worked trials (ethanol mean −592 at 43%, propan-1-ol mean −695 at 34%, spreads 13 and 18, gap 103);
  - the drill data;
  - every NESA quote: the 4 of 12 reports, the Chemistry 2025 Q23 bands, and Biology 2024 Q22(a) and (b);
  - the VRA definitions, word for word against `research/exam-skills/vra-definitions.md`.

  Also search the 2023 Chemistry and 2020, 2024 and 2025 Biology papers for near matches. The reviewer couldn't open them.
- **G02:**
  - Q1 (final mass 150.54 g, −365 kJ/mol, 50.3%, crossed −11.4);
  - Q2 (1.17 g at 45.0%);
  - Q3 (trial 3 at −705, mean of the others −974, mean of all four −907) and its hedged cause.
- **G03:**
  - the Q1 event order;
  - Q2 at 2000 ÷ 40 = 50 on a log scale;
  - Q3: Australian bat lyssavirus post-exposure treatment for an unvaccinated person (wound care, rabies immunoglobulin, vaccine days 0, 3, 7, 14) against the current Australian Immunisation Handbook;
  - four fatal human cases, the fourth in NSW in July 2025 (NSW Health release).
- **B10:**
  - the Semmelweis clinic rates (1846: 11.4% and 2.8%; 1848: 1.27% and 1.33%) against his published tables;
  - the NSW measles control guideline (infectious period, isolation, the 18-day contact exclusion);
  - the herd immunity threshold (1 − 1/R₀, about 93%) against the 95% coverage target;
  - the government's current post-entry quarantine wording;
  - the memory aid "Isolate the infected, quarantine the exposed."
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-104.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in G03's and B10's Revision 2 Decisions sections to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and skip items the designs mark as not errors (B10's items 9 and 20).
- **G03:** Biology L11 to L13, six new items.
- **B10:** L14, L15 and L21, 22 items. This includes the COVID-19 death totals, which are for the site record only.

Hand in to `status.md`.
