# c-y11-m2-v13 science check

Revision 1, independent source review 6 November 2026. SHA-256 `2f41a05fe34d19dc47b699c6977b5fded2dca4c2145872dbecad662cdbef237b`. Entry knowledge and the playlist route are the starting point. No design edits, speech or listening review.

C2-IQ3-02 (local ledger ID), official Chemistry Stage 6 2017 wording:

> manipulate variables and solve problems to calculate concentration, mass or volume using:

C2-IQ3-03 (local ledger ID), official Chemistry Stage 6 2017 wording:

> conduct an investigation to make a standard solution and perform a dilution

Aliquot amount is 0.0025075 mol, displayed 0.002508, and diluted concentration is 0.01003 mol/L. Acid stock calculation gives 20.833 mL, shown 20.8 mL. Attempt 1 gives 0.100 mol/L only with its additive-volume approximation; dividing by water alone gives the crossed 0.125. Attempt 2 gives 37.5 mL. TD pipette rinse, filler, retained tip drop and unchanged solute are consistent with calibrated delivery, subject to the stated drain/wait time. The source backwards 6*250/0.5 expression has volume units, not concentration.

1. **Should fix (quantity and units, scene 9, crossed example and Numbers to verify):** The ghost labels c2 = 6.00*250/0.500 as a concentration bigger than c1 and calls it volumes swapped. Its units are mL, and it is the wrong rearranged V1, not a concentration. Use an actual swapped-volume c2 calculation (for example the familiar 0.1003*250.0/25.00 = 1.003 mol/L), or use the V1<V2 check for the backwards example and label concentrations flipped. No extra speech needed.

2. **Should fix (final volume condition, scene 9, attempt 1 card, key note 4):** V2 = V1 + water added is taught as a universal rule, including directly after the sulfuric-acid example. Mixing volumes are not generally additive. Keep V2 as the final measured solution volume. State the additive-volume approximation for attempt 1 and the illustrative 225.0 mL water bracket, as author note b already does. A card tag needs no extra speech; if narration needs a few words, shorten scene 9's Two quick checks catch most mistakes lead-in to fund them.

3. **Should fix (measurement language, shared with v12, scene 3 and 6, pipette/aliquot glosses):** The pipette is calibrated to deliver a specified nominal volume within its tolerance; it does not deliver an exact 25.00 mL. Use calibrated or measured in the apparatus and aliquot definitions, consistent with the course's uncertainty teaching. Keep the unchanged-moles idealisation and the drop-retention explanation. Replace wording within its current length.

4. **Should fix (calibrated apparatus condition, scene 6, delivery procedure):** The author note specifies a set drainage time for the TD pipette, but that condition is absent from the method. A short visual instruction to allow the pipette's stated drain/wait time before completing delivery is needed to support the claimed calibrated aliquot. Put it into the existing drainage animation, with no extra speech or overall time.

5. **Should fix (amount versus count, scene 3 to 8, conserved-dot chip):** The chip n: 10 particles assigns a particle count to chemical amount n. Keep the representative dots, but label drawn solute dots: 10, or n unchanged beside the separately stated mol value. This preserves the n versus N distinction taught in m2-v02. No additional narration.

Reference constants and atomic masses use the official HSC Chemistry data sheet already downloaded and visually inspected in `work/brief180/official-data-sheet.pdf`. Official 2017 DOCX and the mole fraction Office Math check are preserved in work/brief167 and work/brief180. Avogadro apostrophe mojibake in route text is normalised for this quotation, as root decision m1-9 permits. A lesson claiming one sub-action does not claim all examples under its parent action. Public [NSW science safety guidance](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires the school chemical-specific risk assessment.

Site source identity:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson07.sa.html`: SHA-256 `66d6b0cb43de0d67b103955a9c31a192a8ec337c86dcc9be19e01bb6d17f4501`; route identity True.

0 blockers, 5 should fix, 0 optional. 5,616 narration characters as a sum of scene strings, 5,630 when joined with spaces. The headline matches the scene-sum convention. Source estimate about 507 s, below the roughly 570 s cap; not measured timing. No U+2014 or U+2061. Both bold and quoted event cues match narration in spoken order (`work/brief181/cues.json`, `quoted-cues.json`). Attempt cards retain their givens and response time. Proposed repairs replace wording or add tags during existing action, with no extra speech duration. Exact built frames, caption/phone fit, apparatus placement, motion at playback speed and human listening remain pending.
