# m8b14 claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/bio-m8-b14.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 5,979 characters; 16 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: Does a genetic technology find risk, select an embryo or change genetic material?

## Findings

1. **blocker, scene 8.** Germline editing can cause mosaicism; an early-embryo edit does not necessarily reach every cell or pass to every descendant. Repair the guarantee as in learning finding 1. [NHGRI](https://www.genome.gov/about-genomics/policy-issues/Genome-Editing/ethical-concerns).
2. **should fix, scene 8.** Somatic editing can also correct an allele. The distinction is heritability, not whether the allele can be corrected. The Casgevy example specifically modifies BCL11A regulation to increase fetal haemoglobin rather than repairing the sickle HBB allele. [FDA label](https://www.fda.gov/media/174615/download?attachment=).
3. **should fix, new AAV plate brief.** AAV packages linear single-stranded DNA, not a closed DNA loop. Change only the internal DNA shape to a short open strand. Keep the non-enveloped icosahedral capsid. The vector's DNA largely persists episomally after delivery, which does not make its packaged genome a loop. [FDA Zolgensma label](https://www.fda.gov/media/126109/download), [TGA](https://www.tga.gov.au/resources/auspmd/zolgensma).
4. **should fix, scene 3.** PKU is not always complete absence of working enzyme. Say "too little working enzyme". A low-phenylalanine diet reduces intake; it does not remove every molecule of an essential amino acid. In scene 4 replace "removes the substance" with "limits the substance". In scene 3 replace "starts ... within weeks" with "starts ... straightaway", consistent with the NIH early-treatment guidance linked below.
5. **should fix, author-note Casgevy dates.** Separate US approval dates: sickle-cell disease on 8 December 2023, beta-thalassaemia on 16 January 2024. The current author note wrongly groups both under December 2023. This correction does not change narration. FDA primary confirmations are in the dated-fact report below.

Medicare CF/SMA/fragile-X screening since 1 November 2023 is confirmed: [MBS items 73451/73452](https://www9.health.gov.au/mbs/fullDisplay.cfm?q=PN.7.16&qt=noteID&type=note). Mackenzie's Mission is much broader than three conditions: its primary design paper states 1,281 genes, and the study outcome page reports 9,107 couples. [Primary study](https://pmc.ncbi.nlm.nih.gov/articles/PMC9698511/), [study team](https://www.mackenziesmission.org.au/outcomes/).
The carrier cross is correct: Aa x Aa gives affected aa probability 1/4 per pregnancy. PGT procedure, Huntington treatment status and current Act text were subsequently checked in the dated-fact follow-up below. The conservative NSW more-than-20 statement is supported by the policy supplement; an exact current expanded panel count was not established.

## Sources and unfinished verification

Primary sources are linked above. The later dated-fact follow-up supersedes the initially pending PGT, Huntington and legal checks. Exact expanded-panel verification remains limited as stated below. No prenatal-testing coverage blocker was found in the official dotpoint.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Additional primary confirmation

[NSW newborn-screening policy](https://www1.health.nsw.gov.au/pds/ActivePDSDocuments/PD2016_015.pdf) confirms offer at48to72hours and approximately25conditions, supporting the conservative more-than20 statement. The current expanded panel exact count is still not passed. [NIH PKU consensus](https://www.nichd.nih.gov/publications/pubs/pku/sub3) requires prompt screening and early initiation; replace scene3"starts ... within weeks" with"starts ... straightaway" to avoid suggesting delay. [NIH dietary guidance](https://www.nichd.nih.gov/publications/pubs/pku/sub31) describes controlled phenylalanine addition and blood-level adjustment, supporting the limits-versus-removes correction.

## Dated-fact follow-up

`../assets/brief120-dated-biology-verification.md` records additional primary confirmations and their dates. It resolves the named commercial-history, carrier-frequency, PGT, law and Huntington treatment-status checks as specified, without clearing the existing factual findings. B14 has an additional author-note date correction: US Casgevy sickle-cell approval was8December2023; beta-thalassaemia approval was16January2024. The narration does not state those dates.

## Resolution

Resolved in `../lessons/bio-m8-b14.md` Revision 2 (31 Oct; root resolver, Claude PM). Recount by script: 5,963 characters, about 568 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (blocker; counted in the learning review) | See learning finding 1. Scene 8 no longer guarantees that the edit reaches every cell or every descendant. |
| 2 | Fixed (counted in the learning review) | See learning finding 3. The Casgevy author note (Numbers to verify) now says it edits BCL11A regulation to raise fetal haemoglobin and does not repair HBB; scene 7 says "edit", never "correct". |
| 3 | Fixed (as proposed; **Codex asset brief changed**) | `m8-aav-vector-v1.png` now specifies a short open, single-stranded, linear DNA strand inside the non-enveloped icosahedral shell, not a closed loop. Scene 7's visual description matches. If the plate was already generated with a loop, it needs a retake. |
| 4 | Fixed (as proposed, merged with learning 2) | Scene 3: "the liver makes too little working enzyme to break down phenylalanine" and "starts a low-phenylalanine diet straightaway". Scene 4: "limits the phenylalanine". Numbers to verify and the error-check brief updated. |
| 5 | Fixed (author note only) | Numbers to verify: US approval for sickle cell disease 8 December 2023, for transfusion-dependent beta-thalassaemia 16 January 2024. No narration change. |

Other notes: site correction 1 in Decisions now uses the cited 1,281 genes and 9,107 couples, and its proposed text says "more than 1,200 genes". Open for the Codex error check: the source of the site's "one in twenty" carrier figure and the exact current NSW newborn panel count (the narration says only "more than twenty"). Cultural: no community claim in learner copy; nothing held.
