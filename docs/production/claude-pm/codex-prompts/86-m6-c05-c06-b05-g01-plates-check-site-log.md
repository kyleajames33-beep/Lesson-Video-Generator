# Brief 86: Module 6 designs C05, C06, B05, G01: plates, error-only check and site corrections log

Read `00-standing-rules.md` first. The designs are in `docs/production/claude-pm/lessons/`:
- `chem-m6-c05.md`: strength against concentration
- `chem-m6-c06.md`: conjugate pairs and amphiprotic species
- `bio-m6-b05.md`: somatic against germline, and coding against non-coding
- `bio-m6-g01.md`: mutation effects practice

**Start part 1 now.** For part 2, wait until all four designs say "Revision 2" in their Status line. Nothing is voiced yet. Do brief 85 first if it is still open.

## 1. Plates (start now; Biology only, Chemistry needs none)

Paint each plate in the brief 82 and 85 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, 2000 px;
- no text;
- no people, hands or faces.

All files go in `public/assets/biology/`:
- **`m6-fly-eye-white-patch-v1`:** the same fly, pose and canvas position as `m5x-fly-red-eye-v1.png`, so the two overlay exactly. A crisp wedge of white facets covers about a quarter of the left eye. It must read clearly when shown at about 260 px wide. Check the overlay at full size.
- **`m6-bacteriophage-t4-v1`:** an upright T4 bacteriophage with an icosahedral head, collar, tail sheath, baseplate and six tail fibres. It is scientifically accurate and stands alone.
- **`m6-belgian-blue-bull-v1`:** a double-muscled Belgian Blue bull in blue-roan and white. Match the pose, side view and scale of `m5x-cattle-red-v1.png`.

Write the provenance to `assets/brief86-provenance.json` and QA views to `assets/brief86-qa/`, with an overlay for the fly pair.

**Optional:** B05 uses `m8-skin-melanoma-v1.png`, which is glossier than the house style. If you agree it clashes, paint `m6-skin-melanoma-v1` in watercolour (a close-up of irregular dark skin pigmentation, with no body parts beyond a small patch of skin) and note it in `status.md`.

## 2. Error-only fact check, before voicing (after Revision 2)

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempt questions, walkthroughs and feedback, the key notes and the YouTube metadata in all four designs:
- **Chemistry (C05, C06):**
  - pH values, percentage ionisation and conductivity claims;
  - every equation, its charges and states;
  - each conjugate pair;
  - each amphiprotic example.
- **Biology (B05, G01):**
  - every codon, against the standard genetic code;
  - every named case:
    - Angelina Jolie's own 2013 account, including the 87% figure;
    - TERT promoter mutations in melanoma;
    - Crick et al. 1961;
    - Turner syndrome 45,X;
    - the Belgian Blue myostatin deletion.
- **Dotpoints:** check each one word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question without copying one, and that the mark values fit the demand.

Write `checks/codex-check-86.md`, one section per design, giving each error with the corrected text and a source. Report errors only; do not rewrite.

## 3. Site corrections log

The design authors found new site errors. They are listed in each design's Decisions section:
- **C05:** site Chemistry Module 6 lesson 5. Examples are the Nobel "forty years later" (it was 1903) and "nearly 100 times" (the page's own pH values give about 79).
- **C06:** lessons 6 and 7. Examples are the unsourced "2022 NESA marking guidelines" claim, "approximately 65 times", the H₃PO₄ "acid only" reason, the Q8(c) contradiction and the "HX + H⁺ ⇌ H₂X⁺" charges.
- **B05:** site Biology Module 6 lesson 5. Examples are "a direct demonstration", the absolute germline rule (plants are an exception), the BRCA1 skin-cell switch and "disappears when the individual dies".
- **G01:** cross-references to lesson 3, including "often more disruptive".

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already in `site-fixes-draft-m6.md`.

Hand in to `status.md`.
