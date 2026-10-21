# m7p02c science check (chem-m7-p02, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 22 Oct 2026.
Inspected: `lessons/chem-m7-p02.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; `lessons/chem-m7-c04a.md` and `chem-m7-c04b.md` (Revision 2) for the recorded corrections and entry facts. Every value under "Numbers to verify" was recomputed with a Python script (22 Oct): boiling point gap, moles of cyclohexene, moles of bromine at school and saturated strengths, the partition fraction, all atom balances, and the narration count. Hazard classes were checked against the ECHA C&L Inventory and current supplier SDSs. No audio, stills, site files or design files were changed.

## Syllabus dotpoints (checked word for word)

| Ledger id | Ledger text | Design and YouTube text | Verdict |
| --- | --- | --- | --- |
| C7-IQ3-01 (p55, practical) | "investigate, write equations and construct models to represent the reactions of unsaturated hydrocarbons when added to a range of chemicals, including but not limited to:" with examples "hydrogen (H2)", "halogens (X2)", "hydrogen halides (HX)", "water (H2O) (ACSCH136)" | identical (YouTube joins the list with commas inside one quotation; acceptable) | Match |
| C7-IQ3-02 (p55, practical) | "investigate, write equations and construct models to represent the reactions of saturated hydrocarbons when substituted with halogens" | identical | Match |
| C7-IQ2-05 (p55) | "describe the procedures required to safely handle and dispose of organic substances (ACSCH075)" | identical | Match |

Coverage claim (X₂ for C7-IQ3-01; the investigation half of C7-IQ3-02) is fair.

## Em dashes

None (U+2014 count 0). Three en dashes are bond symbols; acceptable.

## Numbers recomputed

| Item | Design value | Recomputed | Verdict |
| --- | --- | --- | --- |
| Boiling points | cyclohexane 80.7, cyclohexene 83.0 °C; "about two degrees apart" | CRC 80.73, 82.98; gap 2.3 | Correct |
| Densities | 0.78, 0.81 g/mL | 0.779, 0.811 | Correct; both float on water |
| Cyclohexene in 1.0 mL | 0.00987 mol | 0.811 ÷ 82.14 = 0.00987 | Correct |
| Br₂ in 2.0 mL | 0.000020 to 0.000040 mol (school), 0.00042 (saturated) | same | Correct; alkene in 23-fold to 500-fold excess |
| Partition fraction | K ÷ (K + 2) = 0.91 to 0.94 for K 20 to 30 | same arithmetic | Arithmetic correct. K "of the order of 20 to 30" was not verified against a primary source in this check; "most of it moves up" is safe qualitatively (see M5) |
| Atom balances | C₆H₁₀ + Br₂ → C₆H₁₀Br₂; C₆H₁₂ + Br₂ → C₆H₁₁Br + HBr; C₇H₁₆ + Br₂ → C₇H₁₅Br + HBr | balanced | Correct |
| Crossed C₇H₁₆Br₂ | impossible (18 substituents > 2n + 2 = 16) | same | Correct |
| A2 structural equation | CH₃(CH₂)₅CH₃ + Br₂ → CH₃(CH₂)₅CH₂Br + HBr | 7 C each side | Correct |
| General formulas | cyclohexane and hex-1-ene C₆H₁₂; cyclopentane and pent-1-ene C₅H₁₀ | CnH2n | Correct |

## Chemistry checks requested by root

### Cyclohexane against cyclohexene with bromine water

Correct. Cyclohexene decolourises dilute bromine water within seconds at room temperature without light; cyclohexane gives no visible reaction in the dark or in normal room light within the few minutes of the test. They are the standard school pair (same ring, 1 C=C the only structural difference, similar boiling points). The product description is correct: in excess cyclohexene most bromine reacts in the organic layer to 1,2-dibromocyclohexane (trans), with some bromohydrin in the water layer (author note c); the HSC equation with Br₂ is the accepted answer.

### The two-layer observation

Correct. Both hydrocarbons are less dense than water and immiscible with it. With cyclohexane, bromine partitions strongly into the hydrocarbon, so the top layer turns orange and the water layer goes pale: the OCR A-level practical guide (PAG 7) describes exactly this, an orange top layer over a nearly colourless water layer, as the negative result for cyclohexane. Site correction 2 is therefore a real omission that leads to a wrong result.

### Is the water control valid?

Valid as a colour reference: it receives the same volume and shaking, has no hydrocarbon and nothing that can react, so it shows the colour that bromine water keeps after equal dilution. It does not control for extraction (that is the point of reading the top layer), and dilution alone could never decolourise the tube, so its job is to rule out dilution as the reason the water layer of the cyclohexane tube is pale. The design's narration does not say this comparison (learning review S1). Validity statement "the result comes from the double bond, not from dilution" is correct once the comparison is spoken.

### The UV substitution demonstration and the litmus test

- Bromine dissolved in a hydrocarbon stays orange in the dark and fades in light by free-radical substitution, giving HBr; correct, and the site's advice not to use bromine water for this is right (in water little bromine reaches the alkane).
- Light: Br₂ absorbs visible light (its colour) and the Br–Br bond (193 kJ/mol) can be split by light of wavelength below about 620 nm, so bright visible light or sunlight works; low-power school UV lamps (TLC viewers) can be slow. The HSC convention "UV light" on the arrow is fine (M4).
- Litmus: HBr is an acidic gas and turns damp blue litmus red. But bromine vapour also reacts with water on the paper (Br₂ + H₂O ⇌ HBr + HOBr), so it can redden and then bleach damp blue litmus. Without a comparison, a red strip is not specific evidence for HBr. A strip held over the same solution kept in the dark is the needed control (S1).
- Product: cyclohexane's twelve hydrogens are equivalent, so the monobromo product is bromocyclohexane only; correct. Heptane (A2): bromine radicals are selective for secondary C–H bonds, so 2-, 3- and 4-bromoheptane are the main products and 1-bromoheptane is a minor one. Any monobromoheptane is an acceptable HSC answer, and the design's grey tag says other positions are possible (M3).

### A1 logic (C₅H₁₀)

Correct. Both candidates are C₅H₁₀ (CnH2n), so the formula cannot decide. An orange top layer over a pale yellow water layer means bromine was extracted, unreacted, into X, so X has no C=C: cyclopentane. Pent-1-ene (boils at 30 °C; still a liquid at room temperature) would decolourise both layers. One condition makes the logic airtight: the alkene must be in excess. With "a sample of X" and unstated bromine water, a student could argue that a small amount of pent-1-ene left the excess bromine orange (M2).

### A2 product equation

Correct as written and balanced; crossed C₇H₁₆Br₂ correctly impossible. See M3 on which isomer to show.

## Hazard classifications

| Substance | Design | Checked | Verdict |
| --- | --- | --- | --- |
| Cyclohexane | H225, H304, H315, H336, H400, H410 | Annex VI 601-017-00-1: same | Correct |
| Cyclohexene | H225, H302, H304, H411 (no Annex VI entry) | Supplier SDSs (e.g. Sigma-Aldrich, WF Education, Flinn): H225, H302, H304, H411; some versions add H311 or H312 (skin contact); Sigma notes "may form explosive peroxides" (peroxide former) | Correct for the main codes; add the peroxide note to author notes and confirm skin codes on the school's SDS (M6) |
| Bromine | H330, H314, H400 | Annex VI 035-001-00-5: Acute Tox. 2, Skin Corr. 1A, Aquatic Acute 1 | Correct |
| Bromine water, saturated (about 3.4 %) | "at least a skin irritant, seriously damaging to the eyes, harmful if inhaled" | Hach bromine water SDS: H315, H318, H332 (Danger); AquaPhoenix BR6000 (2022): H315, H319, H332; AquaPhoenix (2024): H314, H332; Loba Chemie approx. 0.2 M: H314, H330, H400. By the CLP additivity rules from bromine's classes, 3.4 % gives Skin Irrit. 2, Eye Dam. 1 and Acute Tox. 4 (inhalation ATE about 15 mg/L) | Design correct as the rule-based minimum; suppliers vary, some classify more severely. The "check the supplier's SDS" wording is the right learner copy |
| Bromine water, school strength (0.01 to 0.02 mol/L, 0.16 to 0.32 %) | below most generic cut-offs; vapour still irritating | below 1 % Skin Corr. 1, so no skin or eye class by the generic limits; inhalation ATE well above 20 mg/L | Correct |
| HBr (demonstration) | H314, H335 | Annex VI (hydrogen bromide): Skin Corr. 1A, STOT SE 3 (respiratory irritation); gas under pressure H280 for cylinders | Correct |

### Is bromine in an organic solvent acceptable in a school demonstration?

Only as a teacher-only demonstration where the school's risk assessment allows elemental bromine. The Queensland Department of Education lists bromine as a high-risk substance ("highly corrosive, oxidiser, volatile liquid, poison fumes") to be used only by very experienced staff and recommended for elimination by substitution. NSW practice reported by school laboratory staff is teacher use only, for Year 11 and 12. The design can avoid liquid bromine entirely: shaking bromine water with cyclohexane (scene 5) already produces bromine dissolved in cyclohexane, and the separated orange top layer is a suitable demonstration solution. That removes the H330 row and links scenes 5 and 6 (S2; learning review S2).

## Site errors logged (P02)

| Correction | Real? | Notes |
| --- | --- | --- |
| 1: "confirms unsaturation" | Yes | For an unknown compound, phenols, enols, some aldehydes and other reducing agents also decolourise bromine water. Replacement text correct |
| 2: no two-layer observation | Yes (an omission that leads to a wrong reading) | Confirmed by OCR PAG 7. Replacement text correct |
| 3: "Bromine water is corrosive and toxic" | Partly | Overstated for school-strength solutions; some suppliers do classify near-saturated bromine water as corrosive and fatal if inhaled (Loba). The design's strength-dependent wording is right |
| 4: "instantly turns clear" | Yes, minor, and a second error | Besides "instantly", "clear" is the wrong word: an orange solution is also clear (transparent). Replacement "quickly turns colourless" fixes both; add the wording point to the owner record |
| Already recorded (c04b 4, c04a 1) | Applied correctly | |

## Exam style

A1 ("Identify X as either ... Justify your answer") and A2 ("Explain these observations. Write a balanced equation, using structural formulae, for the formation of one organic product") are HSC Section II structures with every condition given. A web search found no NESA paper with this wording; the cyclohexane two-layer observation is a common textbook and A-level practical context, not copied text. Original.

## Absolute claims

- Scene 7, "No colour change means no multiple bond": too absolute (benzene and some electron-poor alkenes give no rapid change). See M1.
- Scene 2, "in the dark, nothing adds": true for an alkane.
- Scene 4, "within seconds": correctly hedged.
- "a quick test: strong evidence, not proof" and "usually more slowly": correctly hedged.

## Findings

No blockers.

### S1. Should fix: the litmus evidence needs a comparison (scene 6, feedback 2, key note 3)

- Exact text, scene 6: "Under a UV lamp, the colour slowly fades, and damp blue litmus paper held at the mouth of the tube turns **red**. That's hydrogen bromide, an acidic gas, and it's the evidence for **substitution**".
- Problem: bromine vapour alone can redden (and then bleach) damp blue litmus, so a red strip by itself does not show HBr.
- Replacement: "Under a UV lamp, the colour slowly fades, and damp blue litmus paper at the mouth of the tube turns **red**, much faster than a strip over a tube kept in the dark. That's hydrogen bromide, an acidic gas, and it's the evidence for **substitution**". Visual: a second strip over a dark-vignetted tube changes little. Author note: the teacher should confirm the comparison in a trial run; if bromine vapour visibly reddens the dark strip, use a more dilute solution (the extracted layer in S2 is dilute). About 50 characters added. A2's wording can stay (it is a given observation).

### S2. Should fix: make the demonstration solution without liquid bromine (scene 6, risk table, safety facts)

- Exact text: "In a teacher demonstration, bromine dissolved in cyclohexane stays orange in the dark." Risk row "bromine and UV lamp (demonstration only)" / "bromine: fatal if inhaled, severe burns (H330, H314)".
- Replacement narration: use the learning review's S2 ("take that orange top layer: it's bromine dissolved in cyclohexane. In the dark, it stays orange.").
- Replacement risk row: "UV lamp (demonstration only)" / "eye and skin damage from UV" / "teacher only, shielded lamp, fume cupboard". Keep a grey author note: "If a school instead dissolves liquid bromine, that is teacher-only work with bromine (H330, H314), a high-risk chemical in Queensland Department of Education guidance."
- Safety facts: replace the bromine bullet with "Bromine for the demonstration comes from the extracted cyclohexane layer (school-strength, no liquid bromine handled)".

### M1. Minor: scene 7 absolute claim

- Exact text: "No colour change means no multiple bond, even when the formula looks unsaturated".
- Replacement: "No colour change means no C double bond C or triple bond to add to, even when the formula looks unsaturated". Author note: benzene rings and some electron-poor alkenes do not decolourise bromine water quickly (beyond this course).

### M2. Minor: A1 needs the alkene in excess

- Card replacement: "A student shakes 1 mL of X with a few drops of bromine water in a stoppered test tube, in normal room light." Narration: "A student shakes a millilitre of it with a few drops of bromine water in normal room light."

### M3. Minor: A2's example isomer

- 1-bromoheptane is correct as "one organic product" but is a minor product (bromine substitutes secondary hydrogens preferentially). Either use 2-bromoheptane in feedback 2 (CH₃CHBrCH₂CH₂CH₂CH₂CH₃; narration "two-bromoheptane") or keep 1-bromoheptane with the existing grey tag reworded to "any one position is accepted: 1-, 2-, 3- or 4-bromoheptane". Keep consistent with c04b feedback 1 (1-chloropropane, "two-chloropropane is just as correct").

### M4. Minor: "UV lamp" author note

- Add to author note (f): "Visible light also starts the reaction (Br₂ absorbs visible light); bright sunlight or a bright lamp is often faster than a low-power TLC UV lamp. Learner copy keeps 'UV light' as the HSC convention."

### M5. Minor: partition ratio source

- Author note (d) gives "a ratio of the order of 20 to 30 for alkanes and tetrachloromethane" without a source; this check did not verify it. Mark it "(estimate; not sourced)" or cite a solubility reference; learner copy ("most of it moves up") is safe either way.

### M6. Minor: cyclohexene SDS notes

- Add to the safety facts: "Cyclohexene is a peroxide former (supplier SDS: may form explosive peroxides); date bottles on opening and do not use old stock. Some supplier SDSs add H311 or H312 (skin contact); check the school's SDS." Not learner copy.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx; local ledger entries C7-IQ3-01, C7-IQ3-02, C7-IQ2-05 (p55)
- ECHA C&L Inventory, Annex VI entries for cyclohexane (601-017-00-1), bromine (035-001-00-5), hydrogen bromide: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Cyclohexene SDSs: WF Education CY2350, https://wf-education.com/media/data-sheets/C/Y/CY2350_en_GB_4276.pdf; Flinn Scientific, https://www.flinnsci.com/sds_292-cyclohexene/sds_292/; NITE GHS classification, https://www.nite.go.jp/chem/english/ghs/06-imcg-0759e.html
- Bromine water SDSs: AquaPhoenix BR6000 (2022 and 2024), https://sds.aquaphoenixsci.com/SDS/Bromine%20Water%20(BR6000)_GHS-US_en_2022-11-04.pdf and https://sds.aquaphoenixsci.com/SDS/Bromine%20Water%20(BR6000)_GHS-United%20States_en_2024-04-11.pdf; Loba Chemie approx. 0.2 M, https://www.lobachemie.com/lab-chemical-msds/MSDS-bromine-water-approx-02-2259B-EN.aspx; Hach bromine water SDS (H315, H318, H332), as summarised in search results
- Queensland Department of Education, Prohibited and high risk chemicals in department workplaces (V8, January 2026): https://education.qld.gov.au/initiativesstrategies/Documents/prohibited-high-risk-chemicals.pdf
- NSW school laboratory practice for bromine (teacher use only), ChemTalk forum: https://chemtalk.com.au/viewtopic.php?p=27264 (practice report, not policy)
- OCR A-level Chemistry PAG 7, qualitative analysis of organic functional groups (cyclohexane: orange top layer, negative result): https://pmt.physicsandmathstutor.com/download/Chemistry/A-level/Notes/OCR-B/Practical-Skills/PAG%2007%20-%20Qualitative%20Analysis%20of%20Organic%20Functional%20groups.pdf
- Science Ready, bromine water test: https://scienceready.com.au/pages/bromine-water-test
- CRC Handbook of Chemistry and Physics (boiling points, densities; Br–Br bond enthalpy)
- Regulation (EC) No 1272/2008 (CLP), Annex I mixture rules (generic concentration limits for skin and eye; acute toxicity estimate additivity)

## Verdict

**Ready to voice after fixes.** S1 and S2 change narration, the risk table and the safety facts and must be applied before recording. M1 to M6 are cheap and should be applied. The Codex error check is still required.

## Resolution
