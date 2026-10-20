# Brief 90: Module 6 C11, C12, B09, B10: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. The designs are in `docs/production/claude-pm/lessons/`:
- `chem-m6-c11.md`: buffers
- `chem-m6-c12.md`: direct titration
- `bio-m6-b09.md`: what counts as biotechnology
- `bio-m6-b10.md`: judging plant and animal biotechnology

**Order:** do briefs 28t and 89 first if they are still open. **Start part 1 now.** For part 2, wait until all four designs say "Revision 2" in their Status line; reviews are running. Nothing is voiced yet.

## 1. Plates (start now)

Paint each plate in the brief 82, 85 and 88 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

**Biology** (`public/assets/biology/`):
- **`m6-bread-loaf-crumb-v1`:** a risen tin loaf with one end cut away to show the air holes in the crumb, and one slice leaning against it. No hands, knife or board.
- **`m6-helicoverpa-larva-boll-v1`:** a cotton bollworm (*Helicoverpa*) caterpillar half out of a feeding hole in a green cotton boll, botanically accurate.
- **`m6-dairy-calf-horn-buds-v1`:** a young Holstein calf, side view, with visible horn buds. Match the style and scale of `b3b-dairy-bull-side-v1.png`.

**Plate audit:** `m6-hand-pollination-v1.png` shows a human hand. Retire it in `assets/m6-plate-gaps.md`, as was done for the liming plate. `b2b-paintbrush-pollination-v1.png` replaces it.

Write the provenance to `assets/brief90-provenance.json` and QA views to `assets/brief90-qa/`.

## 2. Error-only fact check, before voicing (after Revision 2)

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata:
- **Chemistry (C11, C12):** recompute every number:
  - buffer pH from Ka and the ratio, and the pH changes;
  - titration moles and concentrations, the mean titre and significant figures.

  Check the indicator choices, primary standard properties and concordance conventions.
- **Biology (B09, B10):** check:
  - the Australian Bt cotton insecticide reduction (keep a number only if a primary Australian source supports it) and the refuge requirement;
  - hornless cattle and the 2019 FDA plasmid integration finding;
  - insulin history (animal insulin from 1922, recombinant from 1982);
  - CRISPR timing claims;
  - selective breeding changing population allele frequencies.
- **Dotpoints:** check each one word for word against the 2017 syllabus. The C11 author says the buffer dotpoints are C6-IQ3-07 and -08 in the current ledger, not -06 and -07 as in the route draft. Confirm this, and fix the route draft json if it is wrong.
- **Exam style:** check that each question reads like a real HSC Section II question without copying one, and that "evaluate" and "assess" demands fit their mark values.

Write `checks/codex-check-90.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

The design authors found new site errors. They are listed in each design's Decisions section:
- **C11:** Henderson's "pH 7.40" in 1908 (the pH scale dates from 1909); "partially consumes"; the 0.06 change and "factor of ~83"; the unsourced "Must Do" claims; "not a simple neutralisation".
- **C12:** wine acidity "almost always"; phenolphthalein used with red shiraz; Q8 at 61.7 g/L; anhydrous Na₂CO₃ called non-hygroscopic; averaging only two titres; % by mass against g/100 mL; ±0.10 mL; the Ka tip on a titration card; 0.21 mL called 0.20.
- **B09:** selective breeding "changes the organism's genetic make-up"; animal insulin called "traditional medicine"; "most" crop improvement; L08 said to open IQ3; CRISPR "in weeks".
- **B10:** Bt refuges missing; the hornless cattle 2019 FDA finding missing, plus an unsourced "markers reward"; skeletal stress blamed on genetic modification; "a safety trial can establish".

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

Hand in to `status.md`.
