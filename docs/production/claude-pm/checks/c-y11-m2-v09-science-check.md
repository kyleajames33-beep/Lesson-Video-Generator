# c-y11-m2-v09 science check

Revision 1, independent source review 6 November 2026. SHA-256 `02f1a9bf29a6d7382fea772bbaef21dc94fe47716414691d363cc561b4de59e9`. Entry knowledge and the playlist route are the starting point. No design edits, speech or listening review.

C2-IQ1-01 (local ledger ID), official Chemistry Stage 6 2017 wording:

> conduct practical investigations to observe and measure the quantitative relationships of chemical reactions, including but not limited to:

C2-IQ1-02 (local ledger ID), official Chemistry Stage 6 2017 wording:

> relate stoichiometry to the law of conservation of mass in chemical reactions by investigating:

The CaCO3 prediction is 0.8794 g CO2, versus mean 0.820 g lost, a 6.8% shortfall. The A1 prediction is 1.100 g and its 1.18 g observation needs an extra loss mechanism; A2 0.880 g CO2 corresponds to 2.001 g CaCO3 reacted. A full 200 mL pure-CO2 headspace retains about 0.121 g net relative to air, already greater than the observed gap. NIST Henry data also support possible dissolved retention, but neither amount is measured in this run. [NIST CO2 Henry data](https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=10). The public NSW guidance requires the school risk assessment and does not establish approval to seal this reaction.

1. **Blocker (school practical, scene 8, final sentence and capped-bottle visual):** The instruction to seal the gas-producing reaction is still conditional on m2-v01 passing its exact-method safety check. That gate is not met. Apply this design's existing fallback: cut scene 8's last sentence (about 110 characters) and its capped-bottle visual. Keep the loose-plug method. Do not imply that the current 2.00 g chips and 50 mL acid can safely be sealed.

2. **Should fix (science/learning, scene 3, hypothesis):** If all the lost mass is CO2 does not imply that all the CO2 produced escapes. The prediction of a 0.88 g loss needs all generated CO2 to leave and nothing else to leave. State both conditions in the hypothesis, so the later retained-gas explanation resolves an explicit assumption. Replace the present hypothesis rather than adding a separate explanation; the capped-bottle cut supplies spare time.

3. **Should fix (measurement interpretation, scene 4 and key note 3):** Three equal readings at 0.01 g resolution establish no detectable further mass loss, not by themselves that a reaction has stopped. Keep the separate observation that no chips remain as support for completion in this run. Replace means the reaction has stopped with a statement about the measured loss; do not make three readings a universal completion test.

4. **Should fix (causal inference and retained-gas model, scene 6, 7, 9 and key note 4):** Close repeats do not identify the cause of the mean shortfall. Retained CO2 is plausible, but no gas composition, degassing control or dissolved amount is measured. Also, the author's full-CO2, 200 mL headspace model retains about 0.12 g net before any dissolved gas, already more than the observed 0.06 g shortfall. Present partial retention as a possible mechanism, not a measured full CO2 headspace or an identified 0.06 g cause. Keep the illustrative data and correct the categorical diagram labels and conclusions within the existing length.

5. **Should fix (phase and method improvement, scene 8, 11 and model answer 1):** Water vapour is gaseous water, not liquid carried out. A loose cotton-wool plug catches liquid spray but is not a water-vapour trap. Separate spray from evaporation and match the plug fix to spray. Do not label spray, vapour out -> cotton wool plug as solving both. Replace wording within its current length.

6. **Should fix (asset path, scene 4, initial flask visual):** The visual names y11c-flask-acid-plug-v1.png, which is neither requested nor present. The asset brief explicitly makes y11c-flask-acid-plug-spent-v1.png serve the before-chips state too. Use that requested path rather than introducing a fourth unmatched flask.

Reference constants and atomic masses use the official HSC Chemistry data sheet already downloaded and visually inspected in `work/brief180/official-data-sheet.pdf`. Official 2017 DOCX and the mole fraction Office Math check are preserved in work/brief167 and work/brief180. Avogadro apostrophe mojibake in route text is normalised for this quotation, as root decision m1-9 permits. A lesson claiming one sub-action does not claim all examples under its parent action. Public [NSW science safety guidance](https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-safety-and-compliance) requires the school chemical-specific risk assessment.

Site source identity:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson11.sa.html`: SHA-256 `1c1afd11799fc27c88f06f6c643be9e8cc0f475b4a4f3a4a9c62c620a3ba8d83`; route identity True.
- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html`: SHA-256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`; route identity True.

1 blockers, 5 should fix, 0 optional. 6,174 narration characters as a sum of scene strings, 6,188 when joined with spaces. The headline matches the scene-sum convention. Source estimate about 555 s, below the roughly 570 s cap; not measured timing. No U+2014 or U+2061. Both bold and quoted event cues match narration in spoken order (`work/brief181/cues.json`, `quoted-cues.json`). Attempt cards retain their givens and response time. Proposed repairs replace wording or add tags during existing action, with no extra speech duration. Exact built frames, caption/phone fit, apparatus placement, motion at playback speed and human listening remain pending.
