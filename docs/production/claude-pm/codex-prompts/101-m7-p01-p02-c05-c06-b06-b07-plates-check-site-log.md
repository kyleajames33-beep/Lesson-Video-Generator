# Brief 101: Module 7 Chemistry P01, P02, C05, C06 and Biology B06, B07: plates, error-only check and site log

Read `00-standing-rules.md` first. Do briefs 99 and 100 first if they are still open, because these designs share plates with them: P02 uses C04b's bromine tubes and UV lamp. All six designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-p01.md`: alkane evaporation practical (heptane, octane, nonane)
- `chem-m7-p02.md`: bromine water test, with a UV substitution demonstration
- `chem-m7-c05.md`: alcohol properties, naming and classification
- `chem-m7-c06.md`: making ethanol
- `bio-m7-b06.md`: the innate response
- `bio-m7-b07.md`: B cells and antibodies

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 100 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification, so follow it exactly. Check every aligned set with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| P01 | `m7-temp-probe-sleeve-stand-v1`, `m7-fume-cupboard-v1` (shared with P02) | chemistry |
| P02 | `m7-bromine-layers-orange-top-v1`, `m7-bromine-layers-colourless-v1`, `m7-bromine-water-control-v1` (all aligned to the existing orange bromine water tube) | chemistry |
| C05 | `m7-alcohol-water-tubes-v1` | chemistry |
| C06 | `m7-fermentation-setup-start-v1` and `m7-fermentation-setup-bubbling-v1` (aligned) | chemistry |
| B06 | the 14 plates listed in its asset brief: an aligned starfish larva pair; the airway lining; an aligned skin-and-splinter pair (a skin section only, no limb); an aligned dermis triplet (early, inflamed, contained), with a small venule rather than a capillary; three phagocytosis plates aligned to the existing `m7-macrophage-engulf-before-v1.png`, including `m7-macrophage-engulf-after-v2`, which replaces the misaligned v1; the dendritic cell; the lymph node; and `m7-wound-bacterium-v1` | biology |
| B07 | a bare B cell aligned to `m7-b-cell-v1.png`, a dividing B cell, and a plasma cell | biology |

Write the provenance to `assets/brief101-provenance.json` and QA views (cream and checker) to `assets/brief101-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **P01:**
  - the constructed temperature drops (6.0, 2.2 and 0.7 °C) as plausible;
  - the C1 to C9 boiling points;
  - the hexane reclassification as H372 from 1 May 2026 (EU 2024/2564);
  - the heptane, octane and nonane GHS classes.
- **P02:**
  - cyclohexane against cyclohexene;
  - the two-layer extraction;
  - the water control;
  - the dark-tube litmus comparison;
  - bromocyclohexane and 2-bromoheptane;
  - the bromine water and cyclohexene classifications against current safety data sheets.
- **C05:**
  - the boiling points and electron counts (ethanol, propane, butane, pentan-3-ol at about 115 °C);
  - the solubility trend;
  - alcohol names and classes;
  - the new memory aid.
- **C06:**
  - the hydration conditions;
  - the haloalkane substitution conditions;
  - fermentation: yeast, about 30 to 40 °C, anaerobic, and the Crabtree effect (oxygen means less ethanol, not little), plus the limewater test, the alcohol limit and distillation;
  - "crude oil or natural gas".
- **B06:**
  - the barriers (lysozyme as chemical);
  - histamine and mast cells;
  - the four signs of inflammation;
  - neutrophil exit through small venules;
  - phagocytosis;
  - dendritic cells;
  - Metchnikoff (1882 starfish larva, 1884 *Virchows Archiv* *Daphnia* paper);
  - the dye leak test;
  - leukocyte adhesion deficiency.
- **B07:**
  - Burnet's clonal selection (1957) and his 1960 Nobel Prize (for tolerance);
  - the BCR as membrane antibody;
  - B cells binding whole antigen;
  - T cell help usually being needed;
  - plasma and memory cells;
  - antibody actions;
  - secondary response timing.
- **All six:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-101.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged in briefs 99 and 100.
- **Chemistry:** L03 and L05 to L10.
- **Biology:** L09 to L11. B06 lists errors 1 to 17, and B07 lists its own.

Hand in to `status.md`.
