# Brief 91: C13, C14, B11, B12 and exam skills S03, S04: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. All six designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-c13.md`: which indicator fits a titration
- `chem-m6-c14.md`: titration curves and conductivity
- `bio-m6-b11.md`: which future biotechnology uses are plausible
- `bio-m6-b12.md`: how biotechnology can change biodiversity
- `skills-s03.md`: compare, contrast, distinguish
- `skills-s04.md`: analyse, assess, evaluate, justify

Nothing is voiced yet. Do brief 28u first if it is still open.

## 1. Plates

Paint each plate in the brief 82, 85 and 88 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

**Chemistry** (`public/assets/chemistry/`):
- **`m6-indicator-methyl-red-set-v1`:** three conical flasks matching the existing indicator flask sets in style, canvas and scale. They are cherry red (pinker than the methyl orange red), orange and lemon yellow. No labels.

**Biology** (`public/assets/biology/`):
- **`m6-infusion-bag-cells-v1`:** a clear IV infusion bag of pale cell suspension, with tubing and a small label patch that has no text. No person or stand arm.
- **`m6-mosquito-cage-v1`:** a mesh insect rearing cage with Anopheles mosquitoes inside. No hands.
- **`m6-banana-wild-vs-cavendish-v1`:** a seeded wild banana and a seedless Cavendish side by side, both cut open lengthwise so the seeds and the seedless flesh show. Split cleanly at the centre, so code can fade one half.
- **`m6-chestnut-burr-leaf-v1`:** an American chestnut leaf and an open spiny burr with nuts.

Write the provenance to `assets/brief91-provenance.json` and QA views to `assets/brief91-qa/`.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempt and drill questions and their feedback, the key notes and the YouTube metadata.

- **C13 and C14:** recompute every number:
  - the sodium ethanoate equivalence pH of 8.72;
  - indicator ranges and pKa values for phenolphthalein, methyl red, methyl orange and bromothymol blue, confirmed against a data source;
  - curve points: pH 1.000 and 2.87, half-equivalence 4.74, one-drop jumps;
  - the ammonia curve: 5.28 at equivalence and 9.25 at 50 mL;
  - the conductivity attempt: 16.0 mL giving 0.0800 mol/L.

  Also check the conductivity-shape explanations (ion mobilities) and the pH decimal places.
- **B11:** check:
  - exa-cel/Casgevy: mechanism, trial, approvals, and access in sub-Saharan Africa;
  - Kyrou 2018 cage results;
  - Target Malaria status (the 2025 shutdown, and that no gene drive has been released);
  - VERVE-102's trial stage;
  - WHO malaria deaths.
- **B12:** check:
  - QCAV-4 (the 2024 approval, RGA2, commercial status);
  - northern white rhino embryo count, surrogate transfers, and fresh eggs against frozen sperm;
  - Korody et al. 2021 and the 12 Frozen Zoo cell lines;
  - the IPBES "on land" driver claim;
  - about 430 million surviving American chestnuts;
  - the bottleneck reasoning.
- **S03 and S04:** check:
  - every model and weak answer's science;
  - every NESA claim against the guideline's own wording ("10 of 17", B22 Q27, B25 Q34(b), C25 Q23, B23 Q30, B25 Q23);
  - that no question copies or closely paraphrases a NESA question;
  - that glossary wording is an attributed paraphrase;
  - that no single example is stated as a universal marking rule.
- **All six:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question.

Write `checks/codex-check-91.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

The C13, C14, B11 and B12 authors found new site errors (site Chemistry Module 6 L15 to L18; Biology Module 6 L10 and L11). They are listed in each design's Decisions section. Examples:
- L15's bromothymol blue claim and its H⁺ colour;
- L16's (24.5 + 26.5)/2 = 25.00;
- L17's unsourced statistics and equivalence pH 9.5;
- L18's κ symbol;
- B L10's sickle cell treatment called "early trials";
- B L11's bottleneck reversed and its unmatched citation.

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md`.
