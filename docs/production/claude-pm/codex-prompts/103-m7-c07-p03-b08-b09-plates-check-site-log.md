# Brief 103: Module 7 C07, P03, B08, B09: plates, error-only check and site log

Read `00-standing-rules.md` first. Do brief 102 first if it is still open. These four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c07.md`: combustion of alcohols and fuel choice
- `chem-m7-p03.md`: spirit burner enthalpy of combustion (a practical)
- `bio-m7-b08.md`: T cells, infected cells and NK cells
- `bio-m7-b09.md`: memory, vaccination, and active and passive immunity

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 102 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification. Check every aligned set with a 50% overlay.

| Design | Plates | Folder |
|---|---|---|
| P03 and C07 | `m7-spirit-burner-calorimeter-v1`, `-sooty-v1`, `-shield-v1` (one aligned set that crossfades in place), `m7-spirit-burner-on-balance-v1` | chemistry |
| C07 | `m7-sugarcane-stalks-v1` | chemistry |
| B08 | `m7-airway-cell-v1`, `-infected-v1`, `-apoptotic-v1` (aligned triplet), `m7-t-cell-killer-v1` (aligned to `m7-t-cell-v1.png`, with larger dark granules) | biology |
| B09 | `m7-varicella-virus-v1`, `m7-placenta-villus-v1` (no fetus), `m7-brown-snake-v1` (whole animal, no person) | biology |

Also re-matte the existing `public/assets/biology/m7-b-cell-bare-v1.png`. Its painted pixels touch the left edge, so give it a clear margin and keep its alignment with `m7-b-cell-v1.png`.

Write the provenance to `assets/brief103-provenance.json` and QA views (cream and checker) to `assets/brief103-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **C07:**
  - every combustion equation and molar mass;
  - kJ/g values (29.67 and 47.91);
  - the CH₂ increments;
  - the bond-energy estimate including O=O;
  - E10 up to 10% (Fuel Quality Standards (Petrol) Determination 2019);
  - sugarcane ethanol life-cycle claims ("can add less net CO₂");
  - extraction costs and the wording about affected communities.
- **P03:**
  - the scaled methanol trial (200.0 g, 1.40 g, −383 kJ/mol, 52.7%) and all twelve trials;
  - A1 at −676 kJ/mol;
  - capping at 41.9 °C;
  - the drift against gap comparison in author note (l);
  - the error directions;
  - the GHS classes for methanol, ethanol, propan-1-ol and butan-1-ol.
- **B08:**
  - Doherty and Zinkernagel (1973 to 1975 recognition with self MHC; the 1996 Nobel Prize);
  - MHC I and MHC II;
  - helper signals at activation;
  - cytotoxic killing by apoptosis;
  - NK cells;
  - HIV entry (CD4 plus a co-receptor) and integration of a DNA copy;
  - UNAIDS 41.0 million in 2025.
- **B09:**
  - primary against secondary response timing;
  - chickenpox incubation (14 to 16 days);
  - memory B and T cells;
  - the live varicella vaccine;
  - current Australian booster advice;
  - the four kinds of immunity;
  - placental transfer of IgG;
  - brown snake antivenom (horse-derived);
  - Jenner, cowpox and Dunning (1800).
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-103.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and skip items the reviews withdrew (for example B09's site error 14).
- **Chemistry:** L11 and its neighbours. C07 and P03 list 17 items between them.
- **Biology:** L12 to L14, about 21 items.

Hand in to `status.md`.
