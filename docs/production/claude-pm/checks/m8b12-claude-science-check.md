# m8b12 claude science check

Independent AI reviewer, 30 October 2026. Input: `../lessons/bio-m8-b12.md`, Revision 1. Inspected written narration and shot plans, not a built lesson, stills or continuous voiced preview. Narration recounted from `> ` lines with bold markers removed: 5,940 characters; 16 narrated headings; no U+2014. Per-scene counts: `../assets/brief120-source-audit.json`. Human listening and learner testing are pending. Motion and caption fit cannot pass from a design document.

Main learner question: How does each diabetes management action address the mechanism or its harm?

## Findings

1. **blocker, scene 2.** GLUT4 recruitment belongs to muscle and fat, not the liver. The liver predominantly uses GLUT2. Repair the causal sentence and visual as in the learning review. [Original insulin cell-biology review](https://doi.org/10.1083/jcb.201802095).
2. **blocker, scene 9.** DiRECT's 13% is 11/85 extension participants with data, not the original intervention group. The original trial's 46% and 36% cannot be connected to it as one consistent cohort. The five-year paper also reports 12/118 (10%) among original intervention participants with available data. Use the explicit extension denominator and separate presentation. [Primary five-year paper](https://doi.org/10.1016/S2213-8587(23)00385-6). One/two-year figures are supported by the [trial team's site](https://www.directclinicaltrial.org.uk/).
3. **should fix, scene 6.** Red-cell lifespan is about 120 days; HbA1c estimates recent 8 to 12 weeks with greater weighting to recent glucose. [NIH explanation](https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/interpreting-a1c-principles-of-a1c-assay).
4. **should fix, scene 8.** Randomisation was by practice, not individuals. Label the allocation accurately. Remission should mean glucose below the diabetes diagnostic threshold without glucose-lowering medication, not necessarily normal glucose. Replace the gloss with "below the diabetes threshold without glucose-lowering medicines".
5. **should fix, scene 10.** "they're injected" is false for the whole GLP-1 drug class: oral semaglutide exists. Say "many are injected". Cardiovascular benefit is not identical for every member of the class. Attribute it to particular drugs in high-risk trial populations rather than to all GLP-1 medicines.
Metformin's liver action, improved insulin response and low hypoglycaemia risk are supported by [NIDDK](https://www.niddk.nih.gov/health-information/diabetes/overview/insulin-medicines-treatments). The fictional attempt arithmetic is correct: 1.4 minus 0.3 = 1.1 percentage points; 1/8=12.5%.

## Sources and unfinished verification

See primary sources linked in findings. Full drug-label checks and all author-logged site claims still require completion; this is not a whole-lesson science pass.

## Official syllabus wording check

The exact 2017 syllabus DOCX was downloaded from NESA on 30 October 2026 and its paragraph text inspected. The dotpoint text and relevant examples quoted in this design match the official wording after Markdown bullet and whitespace normalisation. Local transcripts are `../assets/brief120-chem-official-syllabus.txt` and `brief120-bio-official-syllabus.txt`. Primary downloads: [Chemistry](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx), [Biology](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx). This checks wording, not whether the finished lesson earns coverage.

## Additional primary confirmation

The FDA2024 [Rybelsus label](https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/213051s020s021lbl.pdf) explicitly identifies oral semaglutide tablets. Thus the class-wide injection claim is a confirmed error, not an inferred possibility.

## Dated-fact follow-up

`../assets/brief120-dated-biology-verification.md` records additional primary confirmations and their dates. It resolves the named commercial-history, carrier-frequency, PGT, law and Huntington treatment-status checks as specified, without clearing the existing factual findings. B14 has an additional author-note date correction: US Casgevy sickle-cell approval was8December2023; beta-thalassaemia approval was16January2024. The narration does not state those dates.

## Resolution

Resolved in `../lessons/bio-m8-b12.md` Revision 2 (31 Oct; root resolver, Claude PM). Recount by script (lines starting "> " joined per scene, bold markers removed): 5,969 characters (Revision 1: 5,940), about 568 s, under the 570 s cap. The named cut is scene 9's trial-versus-everyday sentence and its bars.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (blocker; counted in the learning review) | See learning finding 1. Numbers to verify gains a scene 2 item citing the supplied cell-biology review (GLUT4 in muscle and fat; liver GLUT2 and excess output). |
| 2 | Fixed (blocker; counted in the learning review) | See learning finding 2. Numbers to verify now gives 11 of 85 (13%) for the extension and notes 12 of 118 (10%) for original intervention participants with data (author note only, not spoken). |
| 3 | Fixed (counted in the learning review) | See learning finding 4. Author note (b) in Decisions cites about 120 days. |
| 4 | Fixed (as proposed) | Randomisation by practice: see learning finding 3. Remission is now "glucose below the diabetes threshold without glucose-lowering medicines" in scene 8's narration and gloss. |
| 5 | Fixed (as proposed) | Scene 10: "for some drugs, fewer heart attacks and strokes in people at high risk" and "many are injected". The tick reads "(some drugs, high-risk people)"; the calendar reads "many: a weekly injection" with a grey tag "one is a daily tablet". |

Open for the Codex error check: confirm "followed with continued support" and 11 of 85 against Lean et al. 2024; confirm the two-year 36 per cent bar. Cultural: no community claim in learner copy.
