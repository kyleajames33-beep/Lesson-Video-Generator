# Brief 100: Module 7 C03, C04a, C04b, G01, B03, Bio P02, B04, B05: plates, error-only check and site log

Read `00-standing-rules.md` first. Do brief 99 first if it is still open: B04 depends on its root-knot plate, and these designs share its style. All eight designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c03.md`: hydrocarbon shape and physical properties
- `chem-m7-c04a.md`: addition across C=C
- `chem-m7-c04b.md`: alkane substitution and alkyne addition
- `chem-m7-g01.md`: naming, isomers and reactions practice
- `bio-m7-b03.md`: transmission and adaptations
- `bio-m7-p02.md`: microbial testing of water (a practical)
- `bio-m7-b04.md`: disease and agricultural production
- `bio-m7-b05.md`: plant defence (banksia and *Phytophthora*)

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 99 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification, so follow it exactly, including the alignment requirements. Check every aligned set with a 50% overlay. G01 needs no new plates (it reuses C04b's UV lamp).

| Design | Plates | Folder |
|---|---|---|
| C03 | `m7-paraffin-candle-v1`, `m7-hexane-water-heptane-tubes-v1` (both layers colourless) | chemistry |
| C04a | `m7-vegetable-oil-bottle-v1`, `m7-margarine-tub-v1` | chemistry |
| C04b | `m7-bromine-hexane-orange-v1`, `m7-bromine-hexane-faded-v1` (aligned to each other and to the existing bromine water tubes), `m7-uv-lamp-v1` | chemistry |
| B03 | `m7-broad-street-pump-v1`, `-nohandle-v1` (aligned), `m7-door-handle-v1`, `m7-raw-chicken-v1`, `m7-tapeworm-scolex-v1`, `m7-mosquito-feeding-skin-v1` (mouthparts in the dermis), `m7-pork-cysts-v1`, `m7-pruning-secateurs-v1`, `m7-bed-net-v1` | biology |
| Bio P02 | `m7-sample-bottles-three-v1`, `m7-dilution-tube-rack-v1`, `m7-incubator-v1` (optional), plus seven aligned taped plates: `m7-plate-clear-v1`, `-few-v1` (exactly 3), `-sparse-v1` (exactly 14), `-countable-v1` (about 150 to 160, asymmetric), `-creek-v1` (about 200 to 220), `-crowded-v1`, `-lawn-v1` | biology |
| B04 | `m7-myrtle-leaf-healthy-v1` (aligned to the existing rust leaf), `m7-cattle-hoof-healthy-v1` and `m7-fmd-hoof-blisters-v1` (aligned), `m7-stock-truck-v1`, `m7-nursery-pots-v1`, `m7-lemon-myrtle-rows-v1`, `m7-farm-gate-closed-v1`, `m7-shipping-container-v1`; plus `m7-root-knot-galls-v1` only if brief 99 did not deliver it | biology |
| B05 | `m7-banksia-phytophthora-v2` (a re-matte of v1 to remove the colour fringe), `m7-banksia-healthy-v1` (aligned), `m7-phytophthora-zoospores-v1` (egg-shaped sporangium, no papilla), `m7-root-tip-zoospores-v1`, `m7-root-cells-entry-v1` and `-defended-v1` (aligned; entry at the junction between two cells), `m7-banksia-seedling-healthy-v1`, `-contained-v1`, `-collapsed-v1` (aligned), `m7-banksia-coccinea-v1`, `m7-banksia-serrata-v1`, `m7-boot-cleaning-station-v1` | biology |

There are about 46 plates. If you need to pace them, go in this order:
1. C03
2. C04a
3. C04b
4. B03
5. Bio P02
6. B04
7. B05

Each design lists its own cut order if a plate fails. Write the provenance to `assets/brief100-provenance.json` and QA views (cream and checker) to `assets/brief100-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **C03:**
  - the VSEPR angles;
  - general formulas with the "no ring" condition;
  - the boiling points;
  - whether hexane and ethanol mix completely.
- **C04a:**
  - the hydrogenation, halogenation, HX and hydration conditions;
  - bromine water's main product;
  - attempt 2 ("only one alcohol product is possible", answer but-2-ene);
  - the margarine history.
- **C04b:**
  - the UV substitution products;
  - alkyne addition with Br₂, H₂ and HBr (the second HBr step);
  - the open-chain condition on formulas;
  - alkyne rates with bromine water.
- **G01:** every name and structure, Q3's proof from the chlorine positions, and Q4's C₅H₈ logic.
- **B03:**
  - Plasmodium deposited in the dermis;
  - the cholera toxin-coregulated pilus;
  - the current WHO airborne framing;
  - Ross River virus;
  - Snow and Pacini.
- **Bio P02:**
  - the CFU calculation;
  - the NHMRC "minimum 100 mL sample" wording;
  - AS/NZS 2243.3:2022 and risk group 1;
  - 25 to 30 °C, with NSW school guidance;
  - the NESA glossary terms used.
- **B04:**
  - myrtle rust in WA (July 2022) and the native guava listing;
  - the 2001 UK FMD cull figures, including welfare culls, and the costs;
  - the ABARES 2022 estimate;
  - the beef export share ("about three-quarters"; recheck the current figure);
  - fire blight.
- **B05:**
  - only the claims supported by Tynan, Scott and Sedgley (1998); open the full paper if you can access it;
  - *P. cinnamomi*'s likely introduction;
  - about 40% of south-west WA species susceptible (Shearer et al. 2004);
  - root-tip anatomy;
  - phosphite.
- **All eight:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-100.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, including those from brief 99, and skip items the reviews withdrew (for example B03's item 5).
- **Chemistry:** site lessons L03 to L08.
- **Biology:** site lessons L04 to L07, plus the lessons each design names.

Hand in to `status.md`.
