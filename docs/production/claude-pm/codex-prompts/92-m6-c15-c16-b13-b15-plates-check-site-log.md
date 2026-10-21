# Brief 92: Module 6 C15, C16, B13, B15: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. All four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-c15.md`: back titrations and conductometric titrations
- `chem-m6-c16.md`: choosing an acid-base analysis method
- `bio-m6-b13.md`: weighing benefits against biodiversity risks
- `bio-m6-b15.md`: artificial insemination against artificial pollination

Nothing is voiced yet. Do brief 28u first if it is still open.

## 1. Plates

Paint each plate in the brief 82 to 91 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

**Chemistry** (`public/assets/chemistry/`):
- **`m6-red-wine-vinegar-bottle-v1`:** the same bottle and canvas as the existing vinegar plate, holding deep ruby liquid.
- **`m6-conical-flask-hotplate-v1`:** a conical flask of gently boiling clear liquid on a laboratory hotplate.
- **`m6-red-wine-glass-v1`:** a wine glass of red wine.
- **`m6-wastewater-outlet-probe-v1`:** a concrete treatment-plant outlet channel with a mounted pH probe housing and a cable. No people.
- **`m6-aspirin-tablets-v1`:** a small group of plain white round aspirin tablets, visibly different from the antacid tablets.
- **Do NOT paint a pituri plate.** It was removed from the design.

**Biology** (`public/assets/biology/`):
- **`m6-aedes-mosquito-v1`:** a male *Aedes aegypti* with white leg bands, a lyre mark on the thorax, clear wings and feathery antennae. Posed to pair with the existing *Anopheles* plate.
- **`m6-wheat-local-varieties-v1`:** five wheat ears side by side, each a clearly different local variety in height, shape, colour and awns.
- **`m6-maize-hybrid-rows-v1`:** a hybrid maize seed field with tasselled pollinator rows beside detasselled seed rows showing silks.
- **`m6-tomato-flower-truss-v1`:** three open tomato flowers with the anther cone visible, plus a bud and a small green fruit.

**Also check two existing plates** on a checkerboard: the floret plate (does it have a dark glow?) and `b3b-forceps-v1.png` (does it have a white background?). Fix the alpha if needed and note it.

Write the provenance to `assets/brief92-provenance.json` and QA views to `assets/brief92-qa/`.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata:
- **C15:** recompute every number:
  - the CaCO₃ back titration (0.395 g, 63.8%, 0.5000 mol/L);
  - the vinegar conductometric result (8.20 mL, 0.820 mol/L) and the dilution correction;
  - the Al(OH)₃ attempt (60.7%);
  - the Ba(OH)₂ with H₂SO₄ attempt (12.5 mL, 0.0250 mol/L).
- **C16:** check:
  - the pH probe and calibration claims;
  - red wine titratable acidity endpoints: OIV pH 7.0, and an Australian pH 8.2 convention (find a primary Australian source, such as the AWRI);
  - the 1 : 2 ratio in feedback;
  - the principle-only Aboriginal knowledge scene: check that it makes no specific unsourced claim.

  Also confirm or refute the Lola Greeno quote cited in `checks/m6c16-cultural-review.md`.
- **B13:** check:
  - Bt cotton and native *Gossypium* hybridisation (open the OGTR cotton biology document);
  - feral cotton;
  - whether released self-limiting (Oxitec-type) males carry two copies;
  - Bt resistance monitoring;
  - the Target Malaria 2025 suspension and the gene drive release status;
  - WHO malaria figures.
- **B15:** check:
  - sex-sorted semen (the X and Y DNA difference, accuracy);
  - Ne = 4NmNf/(Nm+Nf) with 10,000 cows and 5 bulls (about 20);
  - hybrid maize seed production;
  - tomato and wheat pollination;
  - embryo transfer;
  - the HH1 Holstein haplotype citation.
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question without copying one.

Write `checks/codex-check-92.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add the new site errors listed in each design's Decisions section to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged. The new errors are:
- **C15:** site Chemistry Module 6 L18, 11 new;
- **C16:** L19, 17 new;
- **B13:** Biology L12;
- **B15:** Biology L14.

The C16 pituri item needs a careful neutral correction: the site presents pituri preparation as acid-base chemistry. Record it for the owner's cultural review; don't rewrite the cultural content.

Hand in to `status.md`.
