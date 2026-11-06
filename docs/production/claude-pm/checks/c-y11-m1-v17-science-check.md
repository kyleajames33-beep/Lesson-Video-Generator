# c-y11-m1-v17 science check

Revision 1, checked 5 November 2026. Source SHA-256 `1992810ad0fe084325ee6128002490e30c6bbed5b28fad4b5696ce2528d24425`. Source-only independent review of the design, playlist neighbours, route, official syllabus and site extracts. No built playback, recording or learner evidence inspected. No separate starter pack exists; question boundaries, reference values and calculations are checked here.

C1-IQ2-01 (local ledger ID), official 2017 wording:

> investigate the basic structure of stable and unstable isotopes by examining:
> - their position in the periodic table
> - the distribution of electrons, protons and neutrons in the atom
> - representation of the symbol, atomic number and mass number (nucleon number)

C1-IQ2-05 (local ledger ID), official 2017 wording:

> investigate the properties of unstable isotopes using natural and human-made radioisotopes as examples, including but not limited to:
> - types of radiation
> - types of balanced nuclear reactions

Alpha is 2p+2n, charge +2, relative mass about 4. Beta-minus comes from neutron-to-proton conversion, charge -1 and electron mass about 1/1836 proton; gamma is an uncharged photon and leaves A and Z unchanged. The elementary beta picture omits the antineutrino at this depth; do not add a false claim that a neutron contains a pre-existing electron. U-238 alpha, C-14 beta-minus, K-40 beta/electron-capture-plus-gamma, Am-241 alpha, Co-60 beta followed by gamma and Tc-99m isomeric gamma are consistent with evaluated decay data. Approximate half-lives are 4.468 billion y, 5730 y, 1.25 billion y, 432 y, 5.27 y and 6.01 h respectively. The IAEA ENSDF-derived Tc level table gives 6.0072 h and its 140.511 keV gamma level. ANSTO confirms the Mo-99/Tc-99m pathway at Lucas Heights. Full NuDat endpoints were inaccessible; no fresh complete NuDat read is claimed. [NNDC U-238 adopted levels](https://www.nndc.bnl.gov/ensnds/238/U/adopted.pdf). [INL Am-241 data from NNDC](https://inl.gov/content/uploads/2023/07/am241_new.pdf). [NIST carbon-14](https://www.nist.gov/publications/remarkable-metrological-history-14c-dating-ancient-egyptian-artifacts-particles-soot). [ANSTO nuclear medicine](https://www.ansto.gov.au/sites/default/files/2024-02/Primer-ANSTO-Introduction-2023_0.pdf). [IAEA Tc level data](https://www-nds.iaea.org/relnsd/v1/data?fields=levels&nuclides=99tc).

1. **Should fix:** Scene 1 says the smoke alarm on the learner’s ceiling contains americium. That applies to ionisation alarms, not every smoke alarm. Replace "The smoke alarm on your ceiling" with "An ionisation smoke alarm" and label the painted alarm accordingly. This is shorter and preserves the alpha application.

2. **Should fix:** Scene 9 says technetium-99 M without explaining M, then scene 10 implies proton/neutron balance alone decides the radiation. Briefly explain that M marks a nucleus holding extra energy, and include nuclear energy in the origin comparison. Fund it by cutting scene 9’s generic first two sentences on human-made production; keep the explicit Co-59 neutron example and Lucas Heights link.

3. **Should fix:** Scene 11 says a six-hour half-life means Tc-99m is "soon gone". Replace that clause with "its activity falls quickly" and retain the stated definition that half the nuclei decay. This is shorter and avoids suggesting that one half-life removes the isotope.

Site identity checks:

- `module1/lesson14.sa.html`: SHA-256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`; matches route: True.
- `module1/lesson20.sa.html`: SHA-256 `9b3f77c9e3c1f1dbd121035c1fa3f627ac9da932adf48f0bfa9d14233b2db378`; matches route: True.

Numerical work: `work/brief178/calculations.json`; downloaded reference data and access failures: `work/brief178/sources.json`. The complete official 2017 file was refreshed in brief 177; matching parent points do not establish complete practical coverage.

No U+2014 or U+2061 found. Australian spelling retained. No people, hands or faces requested in plates; hand-held spectroscope names the instrument, with no hand drawn. Quoted event cues occur in speech and in spoken order in the audit; physical timing remains unchecked. Full attempt cards retain their givens and hide answer working until feedback. Source frame joins agree, including v10 to ws-v01, ws-v03 to v11 and the reconciled v12 to v13 opening. See `work/brief178/opening-pairs.json`.

Count: 0 blockers, 3 should fix, 0 optional; 6,249 joined narration characters; about 559.0 s with the design’s holds. Speech-only estimate 469.8 s. Human listening and measured timing pending.

Reference access follow-up: `work/brief178/source-followup.md` records the later successful primary-paper reads separately from the initial download failures.
