# Brief 87: Module 6 designs C07, C08, B07, B08: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. The designs are in `docs/production/claude-pm/lessons/`:
- `chem-m6-c07.md`: Kw, pH, pOH, strong bases, dilution and mixing
- `chem-m6-c08.md`: weak acid and weak base pH with Ka and Kb
- `bio-m6-b07.md`: how meiosis and fertilisation vary offspring
- `bio-m6-b08.md`: mutation, gene flow and drift (Florida panther)

**Order:** do briefs 85 and 86 first if either is still open. **Start part 1 now.** For part 2, wait until all four designs say "Revision 2" in their Status line. Nothing is voiced yet.

## 1. Plates (start now; Biology only, Chemistry needs none)

Paint each plate in the brief 82 and 85 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

All files go in `public/assets/biology/`:
- **`m6-finch-seeds-v1`:** Galápagos seeds. Small soft seeds are on the left and large spiny *Tribulus* fruit segments on the right, split cleanly at the centre, so code can fade one half.
- **Aligned pair:** `m6-florida-panther-v1` and `m6-texas-puma-v1`. Both are side views in the same pose, size and canvas position, so they overlay exactly:
  - The Florida panther has a darker tawny coat and a visible kink at the tail tip.
  - The Texas puma is paler, with a straight tail.

Write the provenance to `assets/brief87-provenance.json` and QA views to `assets/brief87-qa/`, with an overlay for the cat pair.

## 2. Error-only fact check, before voicing (after Revision 2)

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata:
- **Chemistry (C07, C08):** recompute every number:
  - pH, pOH, Kw and the neutral pH at each temperature;
  - the mixing example;
  - propanoic acid, HF, ammonia and methanoic acid;
  - every 5% check.

  Check the decimal places in each pH value (decimal places equal the significant figures in the concentration). Check that the sulfuric acid chip in C07 is conditional ("if the question says to assume both are released").
- **Biology (B07, B08):** check:
  - the Grant finch figures and Boag 1983;
  - the human de novo mutation count;
  - 2²³;
  - Florida panther facts and population numbers, including the 1995 release of eight Texas pumas;
  - every drift statistic;
  - the Florida panther heterozygosity claim. The Johnson 2010 abstract says it doubled, but a University of Florida summary gives a rise from 16% to 24%. Confirm which measure doubled before the "about double" screen tag is kept.
- **Dotpoints:** check each one word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question without copying one.

Write `checks/codex-check-87.md`, one section per design, giving each error with the corrected text and a source. Report errors only; do not rewrite.

## 3. Site corrections log

The design authors found new site errors. They are listed in each design's Decisions section:
- **C07:** site Chemistry Module 6 lessons 8 and 11. These include:
  - hydroxides called "diprotic";
  - pH 3.40 to 3 significant figures;
  - the 23% blood figure;
  - baking soda at pH 9;
  - Q7(c) pH 2.57 (should be 2.72);
  - the Q8 method contradiction;
  - unsourced "2023 HSC marking notes";
  - sulfuric acid "both protons fully ionised";
  - "pH = 7" given without "at 25 °C".
- **C08:** lesson 9. These include:
  - Ka/c given as a percentage;
  - the overestimate direction reversed;
  - the carbonate row (11.50);
  - "up to 100×";
  - the garbled Q8(c).
- **B07:** site Biology Module 6 lesson 6. These include:
  - 17% against a beak depth change of about 4 to 5%;
  - the heritability source;
  - "eight million combinations per gamete";
  - the independent assortment definition;
  - the hook's variation claim.
- **B08:** lessons 7 and 19. These include:
  - the cichlid case called drift;
  - "drift is only dominant in small populations";
  - the ranking that "reverses";
  - coin tosses "commonly 70% heads";
  - "only resistant insects survive".

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already in `site-fixes-draft-m6.md`.

Hand in to `status.md`.
