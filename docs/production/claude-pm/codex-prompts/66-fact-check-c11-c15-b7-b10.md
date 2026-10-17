# Brief 66: error-only fact check of C11, C13, C14, C15, B7, B8, B9 and B10

Read `00-standing-rules.md` first. Report errors only; do not rewrite scripts. These eight videos are voiced and built. Check each design in `docs/production/claude-pm/lessons/` against the exact recorded narration in `lessons/<key>/measured/lesson.json`, and also check the numbers and text drawn in each scene file (`src/explainer/lessons/<lessonId>/s*.tsx`).

- `chem-m5-c11.md`: how ionic compounds dissolve. Check every enthalpy and entropy sign, the hot and cold pack examples, and any lattice or hydration statement.
- `chem-m5-c13.md`: precipitation and solubility rules. Check every solubility rule, precipitate colour (including BaSO4 white) and net ionic equation.
- `chem-m5-c14.md`: Ksp. Check every Ksp value against the NESA data sheet, and recompute every solubility and Ksp calculation.
- `chem-m5-c15.md`: Q against Ksp and the common ion effect. Recompute every Q, every comparison and every solubility with a common ion.
- `bio-m5-b07.md`: from protein to trait, and genes with the environment. Check the protein folding and function account, the Himalayan rabbit temperature and enzyme account, and any other examples.
- `bio-m5-b08.md`: sources of genetic variation (meiosis, crossing over, independent assortment, random fertilisation, mutation). Check every count of possible combinations and the pea and fly examples.
- `bio-m5-b09.md`: Punnett squares and pedigrees. Recompute every square and probability, and check every pedigree reading (dominant or recessive, autosomal or X-linked).
- `bio-m5-b10.md`: inheritance patterns. Check codominance, incomplete dominance, multiple alleles (ABO) and sex-linkage examples and ratios.

Also check each cited 2017 syllabus dotpoint word for word, including syllabus codes. Write `docs/production/claude-pm/checks/codex-check-66.md`, with one section per lesson: errors with the corrected value, then short "no error found" lines. Hand in to `status.md`.
