# Brief 105: Module 7 C08a, C08b, B11, B12: plates, error-only check and site log

Read `00-standing-rules.md` first. Do briefs 102 to 104 first if they are still open: B11 depends on brief 103's airway cell plates. All four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c08a.md`: alcohol reactions (dehydration, substitution, oxidation)
- `chem-m7-c08b.md`: aldehydes and ketones, Tollens' and Fehling's tests
- `bio-m7-b11.md`: antibiotics and antivirals
- `bio-m7-b12.md`: vector control

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 104 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification. Check every aligned set with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| C08a | No new plates. Re-matte the existing `m8-dichromate-green-v1.png` (its alpha runs almost to the canvas edges) and remove the faint coloured fringe on the rack in both `m8-dichromate-orange-v1.png` and `-green-v1.png`, keeping the pair aligned. | chemistry |
| C08b | `m7-tollens-tube-clear-v1` and `-mirror-v1`, `m7-fehlings-tube-blue-v1` and `-brickred-v1` (two aligned pairs, traced from the dichromate tube and rack) | chemistry |
| B11 | `m7-bacterium-wall-burst-v1` (aligned to `m6-bacterium-plasmid-v1.png`), `m7-airway-cell-release-blocked-v1` (aligned to brief 103's infected airway cell), `m7-bacteria-conjugation-v1`, `m7-capsule-blister-blank-v1` | biology |
| B12 | `m7-aedes-container-dry-v1` and `-flooded-v1` (aligned), `m7-aedes-larva-pupa-v1`, `m7-insecticide-sprayer-v1`, `m7-falcon-egg-normal-v1` and `-thin-v1` (aligned), `m7-wolbachia-cell-v1` | biology |

Write the provenance to `assets/brief105-provenance.json` and QA views (cream and checker) to `assets/brief105-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **C08a:**
  - dehydration conditions and temperatures by alcohol class;
  - industrial hydration with excess ethene, not excess steam;
  - substitution with HX;
  - acidified dichromate (dilute H₂SO₄) and permanganate colour changes;
  - distilling against refluxing;
  - tertiary alcohols giving no reaction;
  - the dichromate hazard wording.
- **C08b:**
  - aldehyde and ketone names;
  - the boiling point comparison (pentane at 36 °C, 42 electrons, against butanal and butanone);
  - the balanced Tollens' equation;
  - the Fehling's Cu₂O product;
  - the silver nitride hazard.
- **B11:**
  - penicillin and osmotic lysis;
  - ribosome targets;
  - oseltamivir blocking release, and its early-dosing window;
  - conjugation;
  - HIV combination therapy (at least two steps; the 1996 regimens);
  - GRAM 2021 (about 1.14 million attributable deaths).
- **B12:**
  - Aedes and Anopheles biology;
  - nets and indoor residual spraying (WHO);
  - DDT eggshell thinning;
  - SIT and Oxitec;
  - Wolbachia cytoplasmic incompatibility and maternal transmission;
  - **Townsville**: confirm "local dengue stayed rare for about ten years" and the 16 local DENV-2 cases in 2024 to 2025 against the full text of Thompson et al., *Trop Med Infect Dis*, 2026, plus O'Neill et al. 2018/2019;
  - that no gene drive has been released in the wild.
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-105.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and any the reviews marked as not errors (for example B11 #11).
- **Chemistry:** L12 and L13, 15 items.
- **Biology:** L16 and L17, 35 items.

Hand in to `status.md`.
