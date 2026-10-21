# Brief 99: skills S05 and Module 7 C01, C02, B01, B02: plates, error-only check, site log and M7 source fixes

Read `00-standing-rules.md` first. Do briefs 96 to 98 first if they are still open. These five designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `skills-s05.md`: calculation answers that get full marks
- `chem-m7-c01.md`: naming carbon chains
- `chem-m7-c02.md`: isomers
- `bio-m7-b01.md`: pathogen types
- `bio-m7-b02.md`: Pasteur and Koch

These are the first Module 7 videos. The route plan is `docs/production/module7-route-review-claude.md`. Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 98 style:
- transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Follow each design's "Codex asset brief" section exactly. S05 and C01 need no new plates.

**Chemistry** (`public/assets/chemistry/`), from C02:
- **`m7-aerosol-spray-can-v1`:** a plain upright metal aerosol can with a visible white nozzle, brushed pale silver-grey with one muted teal band. No label, no spray.

**Biology** (`public/assets/biology/`), from B01 (nine plates):
- **`m7-fleming-mould-plate-v1`:** a Petri dish with a blue-green *Penicillium* colony, a clear zone around it, and bacterial colonies beyond.
- **`m7-tb-bacilli-v1`:** six to eight slender rods in a loose cord, with no flagella.
- **`m7-tmv-particle-v1`:** a rigid rod with a cutaway showing the RNA helix.
- **`m7-viroid-rna-v1`:** a closed RNA circle folded into a rod-like ladder, with no protein.
- **`m7-prion-normal-protein-v1`:** aligned to the existing misfolded prion plate for a crossfade.
- **`m7-potato-tuber-normal-v1` and `m7-potato-tuber-spindle-v1`:** an aligned pair.
- **`m7-crown-gall-stem-v1`**
- **`m7-root-knot-galls-v1`**

**Biology**, from B02 (ten plates):
- **`m7-swan-neck-flask-clear-v1`, `-broken-clear-v1`, `-broken-cloudy-v1`:** one aligned set.
- **`m7-straight-neck-flask-clear-v1` and `-cloudy-v1`:** the same bulb.
- **`m7-tb-stained-field-v1` and `m7-healthy-tissue-field-v1`:** an aligned pair.
- **`m7-serum-slope-tube-v1`**
- **`m7-guinea-pig-v1` and `m7-guinea-pig-unwell-v1`:** an aligned pair.

Check aligned sets with a 50% overlay. Write the provenance to `assets/brief99-provenance.json` and QA views (cream and checker) to `assets/brief99-qa/`. Archive the git-ignored plates as in brief 92.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **S05:**
  - the enthalpy example: −54 kJ/mol, and −55 from early rounding only;
  - drill 1 at 12.301, with 14.00 treated as exact;
  - drill 2 at 0.42;
  - every NESA marking-guideline quote, word for word;
  - searching the 2019 and 2020 papers (plus 2021 to 2025) for near matches.
- **C01 and C02:**
  - every IUPAC name and structure, under the 2013 rules as taught in NSW;
  - the hidden-hydrogen rule for C=C;
  - the isomer classes;
  - the ethanol and methoxymethane boiling points.
- **B01:**
  - pathogen classes and examples;
  - relative sizes;
  - Fleming in 1928;
  - penicillin's target;
  - TMV, PSTVd, crown gall and root-knot nematodes.
- **B02:**
  - Pasteur's 1861 memoir and its straight-neck flask;
  - the Alhumbert Prize (1862) and the 1864 to 1865 commission;
  - Koch's 1882 TB announcement and the Loeffler 1884 postulates;
  - human challenge trials;
  - leprosy grown in armadillos and mice;
  - the koala EPBC and NSW listing (2022);
  - WHO TB deaths in 2024.
- **All five:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-99.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

**Module 6 file:** S05 has no site lesson.

**Module 7 file:** add every site error listed in the C01, C02, B01 and B02 Decisions sections to `docs/production/claude-pm/site-corrections-m7.md`, in the Module 6 file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Reviewers withdrew some items (B02's 4 and 7, and C01's hexyl acetate as non-IUPAC), so log only those still standing in Revision 2.

Also log the earlier route-review findings that `module7-route-review-claude.md` lists under "Known source issue":
- L06: the C₄H₈ identification;
- L07: the alkyne hydration product formula;
- L18: the litmus results;
- L21: monomer recovery;
- L22: nylon melting described as amide bonds breaking.

## 4. Module 7 source fixes

- **Chemistry L11 methanol data:** propose a realistic replacement dataset for the methanol combustion hook and practice, in `pre-design/chem-m7-l11-methanol-dataset.md`. It needs a mass of water, a temperature rise and the mass of methanol burnt, typical of a school spirit-burner experiment with about 40 to 60% heat transfer, and the resulting molar enthalpy against the −726 kJ/mol reference. Show the working, and cite a source for typical school results. Do not reuse the site figures.
- **Ledger flag:** B7-IQ1-01 is marked not practical, but its text says "design and conduct a practical investigation". Report the correct flag in `checks/codex-check-99.md`. Do not edit the ledger.

Hand in to `status.md`.
