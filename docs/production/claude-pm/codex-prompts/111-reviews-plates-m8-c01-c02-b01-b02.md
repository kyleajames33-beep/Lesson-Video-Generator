# Brief 111: learning review, science check, plates and site log for M8 chem C01 and C02 and bio B01 and B02

Read `00-standing-rules.md` and brief 109 first. Use the method and file formats from brief 109: Codex writes both independent reviews, and Claude resolves them. These are the first Module 8 designs. The plan they follow is `docs/production/module8-route-review-claude.md`.

The four designs are at Revision 1 in `docs/production/claude-pm/lessons/`:
- `chem-m8-c01.md`: the Mohr precipitation titration for chloride.
- `chem-m8-c02.md`: gravimetric sulfate (as BaSO₄), from the dried precipitate mass to a percentage and a concentration.
- `bio-m8-b01.md`: homeostasis, covering the stimulus, receptor, control centre, effector and negative feedback.
- `bio-m8-b02.md`: endotherm temperature regulation and why it can fail (the 2018 spectacled flying fox heatwave).

## 1. Learning review

Follow `docs/production/student-learning-review.md`, as in brief 109. Recalculate every number. For C01 and C02, also check that each calculation shows one stage at a time, with the task, equation and grouped givens kept separate. B02 is about 7 s under the 570 s cap. Any repair you propose for it must be length-neutral, or say what to cut.

Write `checks/m8c01-learning-review.md`, `m8c02-learning-review.md`, `m8b01-learning-review.md` and `m8b02-learning-review.md`. Number each finding, give it a severity and a concrete repair, and end each file with an empty "## Resolution" section.

## 2. Science check

Verify every fact, number and equation, and check every dotpoint word for word. In particular:

- **C01:**
  - the Mohr worked example (25.00 mL, 18.50 mL, 0.0740 mol/L);
  - the Ksp-based reason AgCl precipitates first, given the concentrations;
  - the chromate endpoint colour;
  - the pH range for Mohr (about 6.5 to 10) and why it matters;
  - the hazards of potassium chromate (Cr(VI)) and silver nitrate.
- **C02:**
  - the BaSO₄ arithmetic and molar masses;
  - acidifying the sample first (carbonate interference);
  - filtering, washing, drying to constant mass, and using a desiccator;
  - barium chloride toxicity;
  - the site's "highly specific" claim about calcium chloride.
- **B01:**
  - the homeostatic ranges (core temperature, blood glucose 4.0 to 6.0 mmol/L, blood pH 7.35 to 7.45);
  - the negative feedback examples;
  - the positive feedback example (blood clotting, platelets).
- **B02:**
  - the 2018 far north Queensland spectacled flying fox deaths: about 23,000 over two days (Welbergen and others; cite the source);
  - vasodilation and vasoconstriction;
  - shivering and non-shivering thermogenesis;
  - red kangaroo forearm licking and its vessels;
  - the ectotherm and endotherm wording;
  - whether thyroxine belongs in short-term responses.

Write `checks/m8c01-claude-science-check.md`, `m8c02-claude-science-check.md`, `m8b01-claude-science-check.md` and `m8b02-claude-science-check.md`.

## 3. Plates

Use the brief 109 style, and check each aligned set with a 50% overlay. Each design's "Codex asset brief" section is the specification.

| Design | Plates | Folder |
|---|---|---|
| C01 | three aligned Mohr flasks (yellow, white precipitate, endpoint), matched to the existing M6 flask plates; a yellow chromate dropper bottle | chemistry |
| C02 | a beaker with settled white precipitate, a filter funnel holding white solid, a drying oven, a desiccator, a balance with a watch glass | chemistry |
| B01 | `m8-heater-thermostat-v1`, `m8-skeletal-muscle-v1`, and the aligned pair `m8-vessel-tear-platelets-early-v1` and `m8-vessel-tear-plug-v1` | biology |
| B02 | the aligned pair `m8-skin-warm-v1` and `m8-skin-cold-v1`, plus `m8-red-kangaroo-v1`, `m8-kangaroo-forearm-vessels-v1` and `m8-spectacled-flying-fox-v1` (a different species from the existing grey-headed plate) | biology |

Use the exact filenames each design gives. Anatomical plates must show organs or tissue only: no people, faces or hands. Write the provenance to `assets/brief111-provenance.json` and the QA views to `assets/brief111-qa/`, and archive with a media checkpoint.

## 4. Site corrections log

Start `docs/production/claude-pm/site-corrections-m8.md` in the same format as `site-corrections-m7.md`. Add every site error you confirm: the exact old text (verified in the read-only site file), the correct statement and a source.

Hand in to `status.md`, with one line per design giving its blocker and should-fix counts.
