# Brief 85: Module 6 designs C03, C04, B03, B04: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. The designs are in `docs/production/claude-pm/lessons/`:
- `chem-m6-c03.md`: calculating neutralisation heat
- `chem-m6-c04.md`: neutralisation applications
- `bio-m6-b03.md`: point mutations
- `bio-m6-b04.md`: chromosomal mutations

**Start part 1 now.** For part 2, wait until all four designs say "Revision 2" in their Status line. The reviews are running and may change the wording. Nothing is voiced yet.

## 1. Plates (start now)

Paint each plate using the brief 47, 48 and 82 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

**Chemistry** (`public/assets/chemistry/`):
- **Aligned pair:** `m6-soil-crop-acid-v1` and `m6-soil-crop-limed-v1`. Each is a block of topsoil with a cut front face showing the roots, and three wheat seedlings:
  - `acid`: the seedlings are stunted and yellowing, with short stubby roots.
  - `limed`: the seedlings are healthy and green, with longer, finely branched roots, and white lime is worked into the surface.
  - No hand or tools.
  - The block outline and position must match exactly, so a crossfade changes only the plants and the lime.
- **`m6-acid-mine-drainage-v1`:** a rust-orange creek over orange-stained rocks, below a grey heap of mine rock. No people, animals or machinery.

**Biology** (`public/assets/biology/`):
- **`m6-metaphase-spread-v1`:** a circular microscope field showing about forty dark purple stained chromosomes, scattered from one burst cell on a pale lilac background. They are realistic and not arranged in pairs.
- **Aligned pair:** `m6-fly-bar-eye-v1`, overlaid on the existing `m5x-fly-red-eye-v1.png`. Keep the same fly, top-down pose, size and position so that only the eyes differ: each eye is a narrow vertical bar about a third of normal width, with fewer facets. Check the overlay against the original at full size. (A double-bar plate is no longer needed.)

**Plate audit:** in `assets/m6-plate-gaps.md`, record that `m6-agricultural-liming-v1.png` shows a human hand. It is retired from use.

Write the provenance to `assets/brief85-provenance.json` and QA views to `assets/brief85-qa/`, with overlays for the aligned pairs.

## 2. Error-only fact check, before voicing (after Revision 2)

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempt questions and feedback, the key notes and the YouTube metadata in all four designs:
- **Calculations (C03):** recompute every calculation, including q = mcΔT, the moles, ΔH, the sign and the significant figures.
- **Equations (C03, C04):** balance every equation and check its states.
- **Sequences (B03):** check every codon against the standard genetic code, and the beta-globin codon numbers and mutations.
- **Named claims:** check every named disease mechanism (CF, Tay-Sachs, beta thalassaemia, Bar eye, the BCR-ABL 9;22 translocation, trisomy 21), date and number against reliable sources.
- **Dotpoints:** check each one word for word against the official 2017 syllabus.
- **Exam style:** check that the attempt questions read like real HSC Section II questions without copying any of them.

Write `checks/codex-check-85.md`, one section per design, giving each error with the corrected text and a source. Report errors only; do not rewrite.

## 3. Site corrections log

The design authors found new site errors. They are listed in each design's Decisions section:
- **C03:** site Chemistry Module 6 lesson 3, for example the acetic acid value of −44.3 kJ/mol, the "any weak acid is below 57" rule, the HCl + NH₃ value of −42.6, and the Thomsen and Ostwald history.
- **C04:** lesson 4. The agricultural lime and slaked lime names are swapped, and ammonium nitrate is given as 34% nitrogen (the correct figure is 35.0%).
- **B03:** site Biology Module 6 lesson 3, the frameshift and intron claims.
- **B04:** lesson 4, including the inversion gametes, "far larger than any point mutation" and the 1959 nondisjunction claim.

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the site file, read-only), the correct statement and a source. Skip any that are already in `site-fixes-draft-m6.md`.

Hand in to `status.md`.
