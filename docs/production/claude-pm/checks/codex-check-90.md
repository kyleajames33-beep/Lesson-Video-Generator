# Brief 90: errors before voicing

## Chemistry M6 C11

- **Scene 10, narration and visual:** “It holds about twenty hydrogencarbonate ions for every carbonic acid molecule” and the visual “H₂CO₃” column “about 20 : 1 at pH 7.4” use the dissolved CO₂ ratio as though it were the ratio to molecular H₂CO₃. At pH 7.40, blood has about 24 mmol/L HCO₃⁻ and 1.2 mmol/L dissolved CO₂, but only about 0.004 mmol/L molecular H₂CO₃. Correct the narration to “Blood has about twenty hydrogencarbonate ions for each dissolved carbon dioxide molecule. Carbon dioxide and carbonic acid together are the acid side of this buffer.” Label the bar “dissolved CO₂ and H₂CO₃” and its tag “HCO₃⁻ : dissolved CO₂ about 20 : 1 at pH 7.4.” Keep the reaction equations in scene 9. Source: [published blood chemistry analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4725444/).

## Chemistry M6 C12

No errors found.

## Biology M6 B09

No errors found.

## Biology M6 B10

- **Scenes 11c and 11d, attempt card, narration and feedback:** “They are produced as sterile females”, “sterile females”, and “Sterility and land tanks make that very unlikely” state complete sterility. FDA calls these salmon all-female and effectively sterile; its production specification requires at least 95% of eggs in a batch to be triploid. Correct the narration and card to “They are produced as all-female fish that are effectively sterile, and were raised in secure tanks on land.” Correct the feedback to “Effective sterility and land tanks make that very unlikely.” Source: [FDA AquAdvantage Q&A](https://www.fda.gov/animal-veterinary/aquadvantage-salmon/qa-fdas-approval-aquadvantage-salmon), [FDA environmental assessment](https://www.fda.gov/media/112655/download?attachment=).
- **Scenes 11c and 11d, present-tense production claim:** “raised in tanks on land” describes ongoing AquAdvantage production. AquaBounty sold its Indiana farm in 2024 and Canadian farms in 2025, and reported that its salmon rearing ceased in March 2025. State the case in the past tense, or frame it as a proposed controlled system. Correct the card to “They were raised in secure land-based tanks.” Source: [AquaBounty 2025 annual report filed with the SEC](https://www.sec.gov/Archives/edgar/data/1603978/000160397826000029/aqb-20251231x10k.htm).

## Resolution

Resolved by Claude (project manager), 20 Oct. All four designs move to Revision 3 and are marked ready to voice.

- **C11 (`../lessons/chem-m6-c11.md`):** scene 10 now uses Codex's corrected narration ("Blood has about twenty hydrogencarbonate ions for each dissolved carbon dioxide molecule. Carbon dioxide and carbonic acid together are the acid side of this buffer."). The short bar is labelled "dissolved CO₂ and H₂CO₃" and its tag reads "HCO₃⁻ : dissolved CO₂ about 20 : 1 at pH 7.4"; the lungs arrow joins that column. Scene 9's reaction equations are kept. The same claim is corrected in the cause chain, teaching checks, numbers table, site sources and author note j, and a new site correction 6 records the site's card 5 ratio. Scene 10's opening sentence "Blood isn't a one to one buffer." is cut for length. Narration 6,349 characters, about 9.5 minutes (572 s).
- **C12 (`../lessons/chem-m6-c12.md`):** no errors; no changes.
- **B09 (`../lessons/bio-m6-b09.md`):** no errors; no changes.
- **B10 (`../lessons/bio-m6-b10.md`):** scene 11c's narration reads "They are produced as all-female fish that are effectively sterile, and were raised in secure tanks on land."; the card and practice stem read "They are produced as all-female fish that are effectively sterile. They were raised in secure land-based tanks."; scene 11d's feedback reads "Effective sterility and land tanks make that very unlikely", with its underlines and verdict bar changed to match. The model answer, facts to verify, assets note and Codex check list are updated (effectively sterile, at least 95 per cent triploid, rearing ceased March 2025). The design's scene 8 reserve trim is applied to hold the length. Narration 5,940 characters, about 9.5 minutes (570 s).

Build configs for m6c11, m6c12, m6b09 and m6b10 are added to `../lessons/build_wave5_chem.py` and `../lessons/build_wave5_bio.py`. Nothing is recorded; human listening is pending.
