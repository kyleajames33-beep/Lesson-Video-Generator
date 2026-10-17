# Brief 56: error-only fact check of P02, C10, B6b and B6c

Read `00-standing-rules.md` first. Report errors only; do not rewrite scripts. These four videos are voiced and built, and their answer scenes were shortened on 16 October. Check the designs and the exact recorded narration in `docs/production/claude-pm/lessons/<key>/measured/lesson.json`:
- `chem-m5-p02.md` (key p02): colourimetry. Check:
  - the dilution, ICE and K arithmetic;
  - 447 nm;
  - ε about 4.7 × 10³ L mol⁻¹ cm⁻¹;
  - "standards use excess Fe³⁺";
  - the attempt's K of about 208.
- `chem-m5-c10.md` (key c10): Ka and Kb. Check:
  - Ka for acetic acid, HF, methanoic acid and HCN, and Kb for ammonia;
  - the percent ionisation values;
  - the strong-acid statements;
  - "at the same concentration".
- `bio-m5-b06b.md` (key b6b): transcription. Check:
  - every strand direction and sequence;
  - which strand is the template in the attempt;
  - "a toxin from a mushroom stops RNA polymerase" (alpha-amanitin and RNA polymerase II).
- `bio-m5-b06c.md` (key b6c): translation. Check:
  - every codon against the standard genetic code;
  - every anticodon and its 3' and 5' ends;
  - the initiation order;
  - streptomycin's action on bacterial and mitochondrial ribosomes.

Also check each cited 2017 syllabus dotpoint word for word. Write `docs/production/claude-pm/checks/codex-check-56.md`, with one section per lesson: errors with the corrected value, then short "no error found" lines. Hand in to `status.md`.
