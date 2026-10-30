# Brief 119: Biology M6 B20 Revision 2 error check

Checked 30 October 2026. Input SHA256 and the narration count are in [brief116-119-input-audit.json](brief116-119-input-audit.json). The design has 5,948 narration characters in 16 passages and no em dashes. Its stated estimate recalculates to 5948 / 13.3 + 32 + 13.5 + 20 + 55 = 567.7 seconds. This is an estimate, not measured speech.

## Errors

1. **Scene 11b still turns a commercial moratorium into a claim about all planting.** "India's moratorium blocked authorised commercial uptake, so Bt plants didn't spread through farmers' fields." The first clause is supported; the second does not follow. India's government reported suspected open Bt brinjal cultivation in 2019. Correct: "India's moratorium blocked authorised commercial uptake, so farmers could not legally adopt it." Keep the question's existing focus on authorised uptake. [Indian Government, 2 July 2019](https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=191120).

2. **Several Visual cue quotations no longer occur in the revised narration.** Scene 2 uses "from 2005", but the voice says "reported in 2005". Scene 8 uses "Are these claims answering the same question?" and "the evidence behind it", but the voice says "Do they answer the same question?" and "its evidence". Scene 5 uses "produce the seed and deliver it", but the voice says "producing seed and delivering it to farmers". Scene 6 uses "bred into popular local varieties", but the voice ends "bred into popular local ones". Replace those cue quotations with the exact existing spoken phrases, without changing narration. Source: the design's own scene 2, 5, 6 and 8 narration and Visual paragraphs. These anchors cannot be implemented as exact spoken-word cues as written.

## Requested confirmations

The two earlier learning blockers have been repaired: the planted-area display no longer claims to measure allele frequency, and the source cards name and date real sources and label their extracts as paraphrases. The gene pool is now alleles. The source comparison distinguishes a safety claim from a claim about the best nutrition intervention.

The court event is dated April 2024; the humanitarian licence is explicitly "as published"; Bt cotton is scoped to "recent seasons". The food-safety wording distinguishes the FDA consultation from approval. The [FDA record for BNF158](https://hfpappexternal.fda.gov/scripts/fdcc/?id=IR-00GR2E-5&set=NewPlantVarietyConsultations) records the 24 May 2018 completion. The [CottonInfo stewardship page](https://www.cottoninfo.com.au/stewardship) supports the refuge and resistance-monitoring account. No specific Aboriginal or Torres Strait Islander community is described in learner copy.

The B6-IQ3-07 quotation matches the official 2017 Biology paragraph extract and the local syllabus ledger, including "interpret a range of secondary sources" and "social, economic and cultural contexts". Metadata uses the live-form `.sa.html` links for L18 and L19. This verifies link form, not a successful live page load.

## Golden Rice case status, checked 30 October 2026

PhilRice's current indexed [programme FAQ](https://www.philrice.gov.ph/golden-rice/qa/) says the programme is awaiting the Supreme Court appeal and is carrying out limited storage, disposal and outreach activities. It dates the appeal to 24 October 2024. Its [April 2024 statement](https://www.philrice.gov.ph/philrice-acknowledges-court-of-appeals-decision-granting-the-writ-of-kalikasan-against-golden-rice-in-the-philippines/) confirms revocation of the commercial propagation permit. A direct FAQ fetch timed out, although the search index returned its current text. No later reversal was found; this is not a certified complete Supreme Court docket. The author's existing note correctly keeps that limit outside learner copy. Recheck before recording.

## Plates and site log

Both reused plates received the requested alpha-only cleanup. Canvas size, RGB values, scale, position and exact alpha boxes are preserved. Originals, before/after hashes and cream, dark-board, black and white views are in [brief119-provenance.json](../assets/brief119-provenance.json) and `assets/brief119-qa/`. These are artwork checks, not owner acceptance.

The standing L18/L19 site findings are already in `site-corrections-m6.md`, including the Golden Rice comparison, cultural-context absolute, uptake-only rule and population-genetics statements. No duplicate row was added. No design, speech, render, commit or published video was changed.

## Resolution (root resolver, 31 October 2026)

`bio-m6-b20.md` is now Revision 3. No speech, render or commit was made.

1. **Eggplant claim (error 1), fixed.** Scene 11b now says "India's moratorium blocked authorised commercial uptake, so farmers could not legally adopt it." (Codex's text). The model answer matches. The India grid in the 11b Visual keeps its green fields but adds a grey tag "no authorised planting", so it does not show that no Bt plants exist. Numbers to verify cites the 2 July 2019 PIB release. The question still asks about authorised uptake.
2. **Cue quotations (error 2), fixed without changing narration.** Scene 2 now cues "reported in 2005", scene 5 "producing seed and delivering it to farmers", scene 6 "bred into popular local ones", and scene 8 "Do they answer the same question?" and "its evidence". A script check now finds every Visual cue quotation in its own scene's narration.

Narration 5,948 to 5,935 characters, about 566.7 s, under the 570 s cap. The owner cultural-review hold (L18 card 3) and the Golden Rice case recheck before recording are unchanged.
