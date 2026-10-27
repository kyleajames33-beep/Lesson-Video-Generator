# Brief 106: Module 7 C09, C10, B13, B14: plates, error-only check and site log

Read `00-standing-rules.md` first. Finish brief 28x first if it is still open. These four designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m7-c09.md`: carboxylic acids (naming, dimers, weak-acid ionisation, shared charge, litmus, the hydrogen carbonate test)
- `chem-m7-c10.md`: esterification (where the water comes from, naming, equilibrium yield, separation and purification)
- `bio-m7-b13.md`: what limits dengue control (incidence and prevalence, serotypes, Wolbachia outcomes)
- `bio-m7-b14.md`: how disease control ideas changed (Ragusa, Snow, Jenner and smallpox eradication, prediction, the APY Lands 2020)

Nothing is voiced yet.

## 1. Plates

Paint each plate in the brief 82 to 105 style:
- a transparent PNG with a real alpha channel;
- ink and watercolour, with at least 10% clear margin;
- no text, numbers, people, hands or faces.

Each design's "Codex asset brief" section is the specification.

| Design | Plates | Folder |
|---|---|---|
| C09 | `m7-litmus-blue-strip-v1` (a fully blue strip; the existing `m6-litmus-blue-v1` has a red tip) | chemistry |
| C10 | none | |
| B13 | `m7-dengue-virus-v1` (smooth, not spiky), `m7-water-storage-jar-v1` | biology |
| B14 | `m7-sailing-ship-anchored-v1`, `m7-quarantine-station-v1`, `m7-variolation-tools-v1`, `m7-bifurcated-needle-v1`, `m7-rat-flea-v1` (a ship rat with a flea drawn larger) | biology |

Write the provenance to `assets/brief106-provenance.json` and the QA views (cream, checker and dark) to `assets/brief106-qa/`. Archive the git-ignored plates as in brief 92, with a media checkpoint.

## 2. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata. Each design's "Numbers to verify", facts and "Codex error-check brief" sections list what to confirm. In particular:

- **C09:**
  - boiling points (ethanoic acid against propan-1-ol);
  - pKa values (ethanoic about 4.74 or 4.76, ethanol about 16, butanoic about 4.8, carbonic 6.4);
  - "about 1 in 80" ionised at the stated concentration;
  - the balanced equations with state symbols;
  - that ethanoic acid vapour is largely dimers.
- **C10:**
  - the yields at K of about 4 (two thirds from equal amounts; 0.903 with three times the ethanol);
  - attempt 2's 64%;
  - boiling points (ethyl ethanoate 77 °C, ethanol 78 °C, pentyl ethanoate);
  - ester odours ("fruity" for butyl ethanoate; ethyl butanoate for pineapple);
  - the density of about 0.90 g/mL;
  - the azeotrope data in author note (f).
- **B13:**
  - Utarini et al. 2021 (67 of 2,905 against 318 of 3,401; 77.1%);
  - WHO's 2024 record of 14.4 million cases, and the 2019 to 2023 totals behind the hook bars;
  - Cairns 96% (Ryan et al., version 2);
  - World Malaria Report 2025 (282 million cases and 610,000 deaths in 2024);
  - Qdenga's WHO position (2024) and the Dengvaxia tag (2017);
  - "dozens of cities" for Wolbachia releases;
  - that prevalence and seroprevalence wording matches standard epidemiology.
- **B14:**
  - Ragusa 1377 (30 days, goods as well as people);
  - Snow (handle off on 8 September 1854; the map published in December);
  - Jenner;
  - smallpox (the last natural case, Somalia 1977; declared eradicated 8 May 1980);
  - "cities began treating their drinking water";
  - wastewater shedding before testing;
  - **APY Lands:** the Commonwealth determination of 26 March 2020 made at APY's request, its revocation in July 2020, and the Commonwealth figure of 147 of 28,031 at 13 December 2020. Also report whether any outcome specific to the APY Lands in 2020 is published. Check facts only; the wording of scene 10 is for the owner's cultural reviewer.
- **All four:** check each dotpoint word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question and copies no NESA question.

Write `checks/codex-check-106.md`, with one section per design. Give each error with the corrected text and a source. Report errors only.

## 3. Site corrections log

Add every site error still standing in each design's Revision 2 Decisions section to `docs/production/claude-pm/site-corrections-m7.md`. Use that file's format: the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged, and skip items the designs mark as rejected or adjusted (for example B13's error 11).
- **Chemistry:** L14, L15 and L18 (C09 has 9 errors, C10 has 5).
- **Biology:** B13 has 16 errors standing. B14 has 20: its logged 17, plus errors 18 to 20 (Ragusa's "1423" and "quarantino", the harbour error in the intro and hook, and the *Bussorah Merchant*, which arrived in 1828 with smallpox).

Hand in to `status.md`.
