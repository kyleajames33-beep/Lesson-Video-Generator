# m6p01c science check (chem-m6-p01, Revision 1)

Reviewer: independent Claude reviewer (did not author the design). Date: 21 Oct 2026.
Inspected: `lessons/chem-m6-p01.md` (Revision 1), proposal text only; the local syllabus ledger `docs/production/programme/syllabus/chem-2017-y12.json`; site lesson 15 card 1b (`C:/Users/kygs/hscscience/subjects/chemistry/year12/module6/lesson15.sa.html`, text extracted 21 Oct to check the three quoted site corrections); `lessons/chem-m6-c13.md` (recalled ideas); `checks/m6p04-claude-science-check.md` (the series' hazard convention and the supplier sheets already found for 0.1 M NaOH). Every number was recomputed with a Python script (scratch, 21 Oct): the cycle's moles and pH at each step, the extract fraction, the mass percentages, 0.10 mol/L NaHCO₃ by full charge balance at five concentrations, vinegar at 0.70 to 0.83 mol/L, and ammonia cleaner at 0.3 to 1.0 mol/L. No audio, stills, site files or design files were changed.

## Syllabus dotpoint (checked word for word)

Ledger `C6-IQ1-02` (page 52, practical, inquiry question "What is an acid and what is a base?"): "conduct an investigation to demonstrate the preparation and use of indicators as illustrators of the characteristics and properties of acids and bases and their reversible reactions (ACSCH101)". The design text and the YouTube description match exactly. The Boundary says watching is not conducting, and the coverage note splits the dotpoint with C13: both right.

## Em dashes

None found (U+2014 count 0; U+2013 count 0).

## Red cabbage colours against pH

| Design (author note a) | Published charts | Verdict |
| --- | --- | --- |
| pH 2 red | Flinn: dark pink (2); RHS: red (1), pink (2); RSC: red at pH 1 to 3 | Consistent |
| pH 4 pink | Flinn: lavender (4); RHS: violet (4) | On the red side of the spread; acceptable as "a typical result" |
| pH 6 violet, 7 purple | Flinn: blue-violet (6), dark blue (7); RHS: purple (6); RSC: dark blue/purple at 7 to 8 | Consistent within batch variation |
| pH 8 blue | Flinn: blue (8); RHS: indigo/blue (8) | Consistent |
| pH 10 blue-green | Flinn: teal (9), emerald (10); RHS: blue (10) | Consistent |
| pH 12 green | Flinn: greenish-yellow (11 to 12); RHS: green (12), yellow (14); RSC: green/yellow (10 to 12) | Acceptable; "green to greenish-yellow" is the fair description |
| above about 13 yellow-green to yellow | RHS: yellow (14); Flinn: "basic solutions give green to yellow colors" | Consistent |

The design's chart is a fair constructed school result, and the narration's "Your batch may differ a little" plus the grey footer "results vary with the cabbage and the extract" are needed and should stay. Codex request (4) still stands (record which hue differs from the chosen published chart).

## Specific claims

| Claim | Check | Verdict |
| --- | --- | --- |
| Anthocyanins are water-soluble pigments stored in the cells | Flinn: "water-soluble pigments called anthocyanins"; stored in the vacuole (author note e) | Correct |
| Each behaves like HIn and "can lose more than one proton", so several colours | Flavylium (red) loses protons to the neutral quinoidal base (violet) and anionic quinoidal base (blue); hydration and ring-opening also occur (author note b). The green of the 10 to 12 region is usually a blend of blue anionic forms with yellow chalcone, not one deprotonated form | Fair simplification for learners; the screen's single "green token" and the equation "red form ⇌ H⁺ + green form" need an author note (M2) |
| Heat speeds extraction by damaging membranes; cooling before use | Correct (author note e). Extraction also works cold if the cabbage is blended (Flinn uses a blender and no heat), so "faster" is the right word | Correct |
| Yellow in strong base comes from the pigment breaking down | At high pH hydroxide attack converts anthocyanins to chalcones (yellow; ring-opened, slowly and only partly reversible), and over time irreversible degradation follows (autoxidation, cleavage to phenolic acids and aldehydes). "Anthocyanins generally are degraded at higher pH." A red cabbage study separated reversible water addition from irreversible autoxidation, with acidification below pH 2 restoring only the reversible part | Correct in direction; "breaking down" alone understates the structural change (M3). The design's hedges ("can turn yellow", "acid may not bring the red back") are right |
| 0.10 mol/L NaOH gives green (scene 6 well C, A1, hook) | 0.10 mol/L NaOH is pH about 13 (3 drops of extract in about 20 drops barely changes it). Charts put pH 12 at green to greenish-yellow and pH 14 at yellow; at pH 13 a school extract is usually green at first and drifts toward yellow-green over minutes | Plausible as written ("turns green"); add an author note and a read-promptly tag (M1; learning review S1) |
| Reversibility: same colours return, so evidence the change is reversible and the pigment is not used up | Correct for the proton-transfer steps within about pH 1 to 12 over minutes (author note c). Site correction 2 ("is an equilibrium ... not being consumed" softened to "evidence") is right: a return is evidence, not proof | Correct |
| The cycle pales because of dilution | Recomputed: after the first acid step and three cycles the sample is 6.1 mL holding 2.0 mL of extract: 0.33 of the starting pigment concentration | Correct |
| Cabbage is a poor titration indicator: gradual, stepwise changes across the scale, not one sharp change inside the jump | Correct. A titration endpoint needs a single, clearly seen change over about two pH units; the extract changes hue over most of the scale, so an observer cannot pick one drop. The site analysis question makes the same point | Correct |
| Site correction 3: no single transition range | Correct (several steps; a mixture) | Correct |
| Extract "has a pH" is an error (site Common Error) | Correct | Correct |

## Numbers recomputed

| Item | Design | Recomputed | Verdict |
| --- | --- | --- | --- |
| First acid step | 5.0 × 10⁻⁵ mol in 2.5 mL, 0.020 mol/L, pH 1.70 | 0.0200 mol/L, pH 1.699 | Correct |
| First base step | excess 1.0 × 10⁻⁵ mol OH⁻ in 3.1 mL, pH 11.51 | 3.23 × 10⁻³ mol/L, pH 11.509 | Correct |
| Second acid step | 5.0 × 10⁻⁵ mol in 3.7 mL, pH 1.87 | 0.0135 mol/L, pH 1.869 | Correct |
| Cycle 3 base and acid steps | pH 11.26 at 5.5 mL; pH 2.09 at 6.1 mL | 11.260; 2.086 | Correct |
| Extract fraction | about a third | 2.0 ÷ 6.1 = 0.328 | Correct |
| Mass percentages | NaOH 0.40 %, HCl 0.36 % | 4.00 g/L and 3.65 g/L at density about 1.00 g/mL | Correct |
| Baking soda (A2) | ½(6.35 + 10.33) = 8.34 | Full charge balance: 8.340 (0.10 mol/L), 8.339 (0.050), 8.335 (0.010), 8.297 (0.0010) | Correct; the "does not depend strongly on concentration" note is right down to about 0.001 mol/L. A real meter reads about 8.2 to 8.4 (fresh solution; CO₂ loss raises it slowly) |
| A2 estimate | about 8 to 9 | 8.34 lies between the pH 8 and pH 10 swatches, nearer 8 | Correct; a range, as it should be |
| Vinegar | meter 2.6; chart "between 2 and 4" | 0.70 to 0.83 mol/L ethanoic acid: pH 2.45 to 2.41 (ideal); measured values for white vinegar are about 2.4 to 2.6 | Chart range correct; 2.6 is at the top of the realistic range (M4) |
| Ammonia cleaner | meter 11.4; chart "about 11 to 12" | 0.3 to 1.0 mol/L: 11.37 to 11.63 | Correct and plausible |
| Accuracy | chart about ±1 unit; meter "0.01" | 0.01 is the display resolution; a calibrated meter is good to a few hundredths | See learning review M2 |

## Hazard classifications

| Reagent | Strength (mass %) | Classification | Verdict |
| --- | --- | --- | --- |
| 0.10 mol/L HCl | 0.36 % | EU CLP Annex VI: Skin Irrit. 2, Eye Irrit. 2 and STOT SE 3 from 10 %; Skin Corr. 1B from 25 %. School hazard cards treat solutions this dilute as low hazard | Not classified for health: "low hazard" is correct |
| 0.10 mol/L NaOH | 0.40 % | EU CLP Annex VI: Skin Irrit. 2 and Eye Irrit. 2 from 0.5 % (just above this); Skin Corr. 1B 2 % to < 5 %. CLEAPSS HazCard 91: solutions from 0.05 mol/L up to 0.5 mol/L are IRRITANT, and eye protection is enforced even with dilute solutions. Supplier sheets for 0.1 M NaOH vary: not classified (ALS), H290 only (Agilent Australia, 0.1 N), H314 (American Elements). Under the GHS extreme-pH criterion (pH ≥ 11.5) some suppliers classify it more strictly | "Low hazard at this strength" understates it; school practice treats it as an eye irritant. The risk row's "supplier SDSs list H290" is not confirmed as a general fact (S1) |
| Buffers | | Usually not classified; some high-pH buffers carry eye-irritation statements | "See each SDS": correct |
| Hot water, knife, stains | | | Correct |

Site correction 1 is right that 0.1 mol/L HCl and NaOH are not GHS-corrosive by the EU specific limits, and right to remove "corrosive to eyes" and the 15-minute instruction. But the replacement should not move NaOH all the way to "low hazard". P04 (Revision 2) already uses "just under the irritant limit, so treat a splash as harmful" for 0.100 mol/L NaOH; P01 should match.

## Exam style

A1 ("Explain why the student included well B." "Describe a test ...") and A2 ("Estimate ..." "Assess the accuracy ...") use HSC Section II verbs, keep every condition on the card and are original. No NESA paper wording was found for either; natural-indicator calibration and reversibility are common textbook themes, but the wells, colours and wording are new.

## Absolute claims

- Risk table: "supplier SDSs list H290, may be corrosive to metals" (S1).
- Scene 9: "That's a different reaction: the pigment is breaking down" (M3).
- Scene 8: "One sample going back and forth shows the reaction runs both ways": acceptable, because the same scene and the result row say "evidence".
- Scene 12: "nothing here gets tasted": a correct rule; keep.
- Key note 3 lists the typical chart as a fact list; keep the word "Typical" on screen.

## Findings

No blockers.

### S1. Should fix: the NaOH hazard is understated, and the supplier statement is not confirmed

- Exact text, scene 12 narration: "The point one zero moles per litre acid and base are low hazard at this strength, but a splash can still irritate your **eyes**, so wear safety glasses and rinse any splash with plenty of water." Screen row: "0.10 mol/L HCl and NaOH (low hazard at this concentration; supplier SDSs list H290, may be corrosive to metals)". Key note 5: "0.10 mol/L HCl and NaOH low hazard but eye protection".
- Problem: 0.10 mol/L NaOH sits just under the EU irritant limit (0.5 %) but is classed IRRITANT on school hazard cards (CLEAPSS, 0.05 to 0.5 mol/L), and sheets vary from not classified to H314. Grouping it with HCl as "low hazard" is the opposite error to the site's "corrosive".
- Replacement narration, scene 12: "Before you start, the risk assessment. The hot water can **scald** and the knife can cut, so your teacher prepares and cools the extract. The point one zero moles per litre acid is low hazard, but the sodium hydroxide can irritate your **eyes**, so wear safety glasses and rinse any splash with plenty of water. The extract **stains** skin and clothes, and nothing here gets tasted." (370 characters, 21 fewer).
- Replacement screen rows: "0.10 mol/L HCl (0.36 %): low hazard at this concentration" / "eye irritation from a splash" / "safety glasses; rinse with plenty of water"; and "0.10 mol/L NaOH (0.40 %): just under the EU irritant limit (0.5 %); school hazard cards class it as an irritant; supplier sheets vary, so check yours" / "eye and skin irritation from a splash" / "safety glasses; rinse with plenty of water; separate labelled droppers".
- Key note 5 (or 6, if the learning review's M4 split is used): "eye protection: 0.10 mol/L NaOH is an eye irritant".
- Decisions, site correction 1, replace the "Correct:" sentence with: "Correct: '0.1 mol/L hydrochloric acid is low hazard; 0.1 mol/L sodium hydroxide is an eye and skin irritant. Wear eye protection and rinse any splash with plenty of water.'" Safety facts check, NaOH bullet: replace "supplier SDSs for 0.1 mol/L volumetric solutions commonly list Met. Corr. 1, H290 ... only" with "supplier SDSs for 0.1 M NaOH vary: ALS not classified; Agilent Australia (0.1 N) H290 only; American Elements H314 (see m6p04 science check). CLEAPSS HazCard 91 classes 0.05 to 0.5 mol/L as IRRITANT."

### M1. Minor: the 0.10 mol/L NaOH well can drift toward yellow (author note)

- Add to author note (a): "Well C (0.10 mol/L NaOH, pH about 13) is green at first and can drift to yellow-green within minutes (published charts: pH 12 green to greenish-yellow, pH 14 yellow). Read it straight away; the cycle avoids this by adding base only until green (about pH 11.5)." Pair with the learning review's S1 tag and scene 9 wording.

### M2. Minor: "green form" is a simplification (author note b)

- Add to author note (b): "The green seen at about pH 10 to 12 is usually a blend of blue anionic quinoidal forms with some yellow chalcone, not one deprotonated form. The screen's single green token and the line 'red form ⇌ H⁺ + green form' are learner simplifications of several proton-transfer steps; keep 'forms' plural in narration ('the forms that have lost protons')." Optionally write the screen line as "red forms ⇌ H⁺ + green forms".

### M3. Minor: scene 9, "the pigment is breaking down"

- Exact text: "That's a different reaction: the pigment is **breaking down**."
- Replacement: "That's a different kind of reaction: the pigment molecules change shape and start to **break down**." Screen tag: "pigment changed or destroyed: not the acid-base equilibrium". (Scene 9 then about 341 characters with the learning review's S1 change folded in, or 353 with both; recount.)

### M4. Minor: vinegar meter value

- Constructed 2.6 is at the top of the realistic range for 4 to 5 % white vinegar (ideal 2.41 to 2.45; measured about 2.4 to 2.6). Use "2.5" on the readout and in author note (i) and the numbers table, or keep 2.6 with the note "plausible upper value". The chart estimate "between 2 and 4" is unaffected.

## Open decisions (reviewer view)

- **NaOH for the cycle:** agreed. NaOH gives a clean green with no froth, and bicarbonate cannot pass pH about 8.3. Scene 9's control ("base only until green; cycle straight away") handles degradation.
- **Constructed meter values:** 8.34 and 11.4 read as plausible examples; 2.6 see M4. They are shown as readouts in a demonstration, not claimed as measurements: acceptable.

## Sources

- NESA Chemistry Stage 6 Syllabus (2017), Word version (ledger source): https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx
- Local ledger `docs/production/programme/syllabus/chem-2017-y12.json`, entry C6-IQ1-02 (page 52)
- Flinn Scientific, "Red Cabbage Indicator" ChemFax 91633 (colour table pH 2 to 12; "basic solutions give green to yellow colors"): https://www.flinnsci.com/api/library/Download/7216c8b7dd814eca9e6f8eca99fe513c
- Royal Horticultural Society, Red cabbage indicator colour chart (pH 1 to 14, yellow at 14): https://www.rhs.org.uk/getmedia/386dd481-7d8c-43c0-b64e-ff66bf02dbe9/Res-L-Red-Cabbage-Indicator-Colour-Chart.pdf
- Royal Society of Chemistry, "Red cabbage pH indicator experiments" (pH 10 to 12 green/yellow; baking powder blue/green): https://edu.rsc.org/download?ac=512308
- Fenger et al., red cabbage anthocyanins in neutral solution: reversible water addition and irreversible autoxidation, Food & Function 2019: https://pubs.rsc.org/en/Content/ArticleLanding/2019/FO/C9FO01884K
- Wikipedia, Anthocyanin ("Anthocyanins generally are degraded at higher pH"; greenish-yellow in alkaline solution): https://en.wikipedia.org/wiki/Anthocyanin
- CLEAPSS HazCard 91, sodium hydroxide (0.05 to < 0.5 mol/L IRRITANT; ≥ 0.5 mol/L CORROSIVE), archived copy: https://resources.hwb.gov.wales/VTC/2009-10/science/irf09-08/course_files/workbook/hazcards/091-sodium-hydroxide.pdf
- Regulation (EC) No 1272/2008 (CLP), Annex VI specific concentration limits for sodium hydroxide and hydrochloric acid, via the ECHA C&L Inventory: https://echa.europa.eu/information-on-chemicals/cl-inventory-database
- Supplier sheets for 0.1 M NaOH as recorded in `checks/m6p04-claude-science-check.md` (ALS SDS 25; Agilent Australia 5062-8575; American Elements)
- CRC Handbook of Chemistry and Physics: pKa values of carbonic acid (6.35, 10.33) and ethanoic acid; Kb of ammonia

## Verdict

**Ready to voice after fixes.** S1 changes narration and must be applied before recording. M1 to M4 are author-note, screen or one-sentence changes and should be applied. The Codex error check is still required.

## Resolution

Resolved by the author in `lessons/chem-m6-p01.md` Revision 2 (21 Oct). Narration 6,181 characters (recounted by script), about 9.4 minutes.

- **S1 (NaOH hazard): fixed, worded to match P04 Revision 2.** Scene 12 narration: "The point one zero moles per litre acid is low hazard, but the sodium hydroxide sits just under the **irritant** limit, so treat a splash as harmful: wear safety glasses and rinse any splash with plenty of water." The risk table now has separate rows: "0.10 mol/L HCl (0.36 %): low hazard at this concentration" / "eye irritation from a splash" / "safety glasses; rinse with plenty of water"; and "0.10 mol/L NaOH (0.40 %): just below the EU irritant limit (0.5 %); supplier sheets vary, so check yours" / "a splash can still harm eyes and skin: treat it as harmful" / "safety glasses; rinse splashes with plenty of water; separate labelled droppers". The "supplier SDSs list H290" claim is removed. Site correction 1 now ends with the proposed correct wording; the Safety facts check NaOH bullet records the three supplier sheets and CLEAPSS HazCard 91. Key note 6: "0.10 mol/L NaOH is just below the irritant limit, so treat a splash as harmful (safety glasses, also for the HCl)". I used P04's harm wording rather than the shorter "eye and skin irritation" so the two practicals say the same thing.
- **M1 (well C drift): applied** to author note (a) as proposed, with the learning review's S1 tag and scene 9 link.
- **M2 (green form): applied.** Author note (b) records the blend of blue quinoidal forms and yellow chalcone; the scene 7 screen line is now "red forms ⇌ H⁺ + green forms"; narration already said "the forms that have lost protons".
- **M3 (scene 9 wording): applied.** "That's a different kind of reaction: the pigment molecules change shape and start to **break down**." Tag "pigment changed or destroyed: not the acid-base equilibrium". Scene 9 is 349 characters with the learning review's S1 change folded in.
- **M4 (vinegar): applied.** Readout 2.5 in scene 10, author note (i), the numbers table and Numbers to verify.
- **Open decisions:** NaOH for the cycle and the constructed meter values recorded as confirmed.

Nothing declined. The Codex error check is still required before voicing.
