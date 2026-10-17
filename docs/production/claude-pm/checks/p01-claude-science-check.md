# P01 science check (Claude): reversibility and disturbance investigation preparation

Checked 18 October 2026 by an independent reviewer. Input: `../lessons/chem-m5-p01.md` (Revision 1), `../site-extracts/chem-m5-l02.md`, `../site-extracts/chem-m5-l05.md`, `chem-m5-c03.md`. Method: numbers recomputed by a Python script (scratch, results below); hazards checked against supplier SDSs found on the web; chemistry against standard inorganic data. No renders. No em dash (U+2014) in the design or here. Syllabus (2017): C5-IQ1-01 (reversibility, including cobalt(II) chloride hydrated and dehydrated, iron(III) nitrate and potassium thiocyanate, burning magnesium) and C5-IQ2-01 (disturbances, including heating cobalt(II) chloride hydrate and iron(III) thiocyanate with varying ion concentrations).

## Summary

- Every expected result is correct in direction and colour. One equation chip used an equilibrium arrow for an open, two-step test (fixed). One result overstated the amount of solid (fixed). One hazard word was stronger than the SDS class (fixed).
- The reference-tube and dilution-control logic is sound: the reference fixes the comparison colour; the dilution control matches the added volume, so any extra fading in tube 4 beyond tube 5 is the shift.
- Hazards and controls agree with supplier SDSs; classifications vary by supplier and version, and the learner copy states only what is common to them.

## Findings

Severity: M = change before recording; L = wording or author-note fix.

| # | sev | where | problem | correct statement | source | resolution |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | M | Scene 2 chip | "CoCl2·6H2O(s) ⇌ CoCl2(s) + 6H2O" in an open, heated tube. The water leaves as vapour, so no equilibrium is set up; the test is two separate one-way changes (dehydration on heating, rehydration on adding water). | Heat: CoCl2·6H2O(s) (pink) → CoCl2(s) (blue) + 6H2O(g); then CoCl2(s) + 6H2O(l) → CoCl2·6H2O (pink), exothermic. (On heating the hexahydrate passes through the violet dihydrate and may partly dissolve in its own water of crystallisation before turning blue; "turns blue" is correct as an observation.) | Standard inorganic data; C3 design's cobalt decision | Chip rewritten as two one-way lines. |
| 2 | L | Scene 7, Codex item 6 | "a rust-brown solid" drawn as a settled precipitate. | Stock after mixing equal volumes is about 0.001 mol/L Fe3+; in about 5 mL that is about 5 µmol Fe, about 0.5 mg Fe(OH)3: a faint brown cloudiness, not a heap. Ten drops of 0.1 mol/L NaOH (about 50 µmol OH-) is more than the 15 µmol needed, so the red does fade strongly. | Script | "a faint rust-brown solid"; plate faint. |
| 3 | L | Scene 11, risk table, key note 6 | "Cobalt chloride is toxic". | Cobalt(II) chloride hexahydrate: H302 (harmful if swallowed), H317, H334, H341, H350i (may cause cancer by inhalation), H360F or H360FD, H410; the 2023 Sigma-Aldrich SDS also lists H318 (serious eye damage) and H400. "Harmful if swallowed, may cause cancer if its dust is breathed in, and can cause allergies" is common to all versions. Glasses are already "always" on screen, covering H318. | Sigma-Aldrich SDS summary (sdsmanager): https://discovery.sdsmanager.com/safety-data-sheet/english/sigma-aldrich-inc-cobalt-ii-chloride-hexahydrate-97-en ; Sigma-Aldrich SDS: https://www.sigmaaldrich.com/sds/sigald/255599 | "harmful if swallowed" in narration, table and notes. |
| 4 | L | Scene 9 | Stopper given no reason, and scene 4 says ions in solution stay in. | Water is a species in [Co(H2O)6]2+ + 4Cl- ⇌ [CoCl4]2- + 6H2O, and the teacher-made solution holds hydrochloric acid; stoppering keeps water and HCl vapour in when warmed (a closed system for every species in the equation). | C3 equation; standard school preparation | Narration: "Stopper the tube, because water is part of this reaction, so none should escape." |
| 5 | L | Codex item 1, safety facts | Tube angle for heating a hydrate. | Heat with the mouth slightly lower than the closed end so condensate cannot run back onto hot glass; point away from people; cool before adding water. | Standard school practice for heating hydrates | Applied. |
| 6 | L | Scene 11 | Thiocyanate and acid. | KSCN: H302 + H312 + H332, H412; EUH032 "contact with acids liberates very toxic gas" (some suppliers add H318 or H319). "Can release a very toxic gas" is exact. | Fluorochem T1005: https://fluorochem.co.uk/product/T1005/ ; Labbox SDS: https://labbox.es/wp-content/uploads/FDS/SDS_EN_10417.pdf | Keep. |
| 7 | L | Scene 11 | Sodium hydroxide 0.1 mol/L "even dilute, can harm your eyes". | 0.1 mol/L is about 0.4 percent, below the CLP 0.5 percent band for skin and eye irritation (0.5 to 2 percent: H315, H319; 2 percent and above: H318). So it is not GHS-classified, but alkali in the eye is a recognised school hazard and glasses are standard. "Can harm your eyes" is fair. | NaOH SDS concentration bands (Neofroxx): https://shop.neofroxx.com/msds/EN/MSDS_LC-4856_GB_en.pdf | Keep; author note only. |
| 8 | L | Attempt 1 | Silver nitrate in the stem. | Ag+ removes SCN- as white AgSCN, so the red fades (shift left) and a faint white cloud is expected; 10 drops of 0.1 mol/L (about 50 µmol) exceeds the 5 µmol SCN-, so the fading is strong. Silver nitrate: H272, H314, H410 (some current Sigma versions add H290, H360). No handling is shown. | Sigma-Aldrich silver nitrate SDS: https://sigmaaldrich.com/US/en/sds/sigald/209139 ; site L05 (AgNO3 precipitates SCN- as AgSCN) | Keep; visual already shows a faint white cloud. |
| 9 | L | Scene 7 to 9 results | Colour directions. | Fe3+ + SCN- ⇌ FeSCN2+: adding either reactant deepens red; removing Fe3+ fades it. Cobalt: forward endothermic, so hot blue, ice pink, room purple. NO2/N2O4: forward (2NO2 → N2O4) exothermic, so hot browner (screen only now). Iron thiocyanate forward mildly exothermic, so the site's heated tube 6 goes paler (screen only). | C3 and C9 science checks; site L05 | Keep. |
| 10 | L | Scene 3 | "nothing you can do in a school lab brings shiny magnesium back". | Correct scope: MgO is reduced to Mg industrially (silicothermic Pidgeon process, or electrolysis of MgCl2 made from it), so "under school conditions" is the right qualifier. Burning magnesium: intense light including UV; never water on a magnesium fire. | Author note (b); site L02 safety | Keep. |
| 11 | L | Scenes 5, 8 | Reference tube and dilution control logic. | Sound. The reference holds the starting colour under the same light and time; the dilution control receives the same volume of water as the NaOH addition, so it reproduces the dilution alone. Ten drops (about 0.5 mL) into about 5 mL dilutes to 0.909 of the starting concentration, about a 9 percent paling, so "only a tiny bit paler" is right and the large step from tube 5 to tube 4 is the shift. Solids in tubes 2 and 3 add negligible volume. | Script | Keep. |
| 12 | L | Hazards, school rules | Cobalt chloride NSW CSIS category. | Not confirmable from an official source by web search (18 Oct); a NSW teacher forum reports conflicting readings ("teacher only" against a green dot for Years 7 to 12). Learner copy ("teacher demo in many schools", "follow your school's risk assessment") is true either way. | chemtalk forum: https://chemtalk.com.au/viewtopic.php?p=44911 ; NSW CSIS search: https://ecmjsp.education.nsw.gov.au/ecmjsp/chemicals | Owner or Codex to check CSIS directly; not a recording blocker. |

## Script results (Python, 18 Oct)

- Dilution control: 5.0 / 5.5 = 0.909 (about 9 percent paler).
- Stock iron after mixing: 0.002 / 2 = 0.001 mol/L; in 5 mL, 5.0 µmol; Fe(OH)3 about 0.53 mg. OH- needed 15 µmol; supplied (10 drops of 0.1 mol/L) about 50 µmol.
- Attempt 1: Ag+ about 50 µmol against SCN- 5 µmol: excess.
- Narration (Revision 2): 6480 characters, 18 scenes; 487 s speech; about 599 s total.

## Resolution

Applied in Revision 2 of `../lessons/chem-m5-p01.md` (18 Oct).

1. Finding 1: resolved (two one-way lines).
2. Finding 2: resolved (faint solid, plate brief).
3. Finding 3: resolved (harmful if swallowed).
4. Finding 4: resolved (stopper reason spoken).
5. Finding 5: resolved (Codex item 1, safety facts).
6. Findings 6 to 11: no change needed.
7. Finding 12: open owner check; learner copy is safe as written.

No open science question blocks recording. Human listening and the voiced-preview check remain pending.
