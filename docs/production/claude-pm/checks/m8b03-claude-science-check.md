# m8b03 science check

Input SHA-256: `989c33a6e5257ec0ceffc4015cc94949a2de0cb47aa2d95abaa883ea39bdabee`.

Independent Codex source review, 30 October 2026. `../lessons/bio-m8-b03.md`, Revision 1, read in full, including narration, Visual paragraphs, attempts, feedback, notes, number checks, asset specification and metadata. No recorded or visual approval follows.

## Findings

1. **Should fix: the human islet plate asks for a rodent-style core/mantle.** Asset item 1 puts beta cells centrally and alpha cells mostly around the edge. Show human alpha and beta cells interspersed through the islet and beside internal capillaries, without a simple beta core surrounded by an alpha ring. Keep beta cells more numerous. No added narration needed. [Cabrera et al., original imaging study](https://pubmed.ncbi.nlm.nih.gov/16461897/). Human islets vary; the repair avoids presenting the rodent pattern as the universal human layout.

2. **Should fix: metadata site link ends lesson03.sa.** Replace with https://hscscience.com.au/subjects/biology/year12/module8/lesson03.sa.html and keep it first. The exact local file exists; live access returned 403, so public loading is not certified.

3. **Should fix: the hormone is assigned glycogen breakdown directly in feedback.** See learning finding 1 for the exact replacement; count once across reviews. [Glucagon physiology](https://www.ncbi.nlm.nih.gov/books/NBK279127/).

## Checks completed

Fasting about 4 to 6 mmol/L and an illustrative meal excursion towards 7 to 8 are reasonable teaching values, not diagnostic cut-offs. The 75 g-load graph has plausible units and values: glucose peaks at 7.8 mmol/L at 30 min; insulin 55 mU/L at 30 min; glucose returns near baseline by two hours. Both have risen by the first sample, so this is not proof of an exact secretion-onset delay. mU/L equals microIU/mL numerically.

Alpha/glucagon and beta/insulin, sensing/signalling roles, GLUT4 insertion in muscle/fat, liver glycogenesis, basal insulin and liver glycogen release are correct at this level. Muscle does not export free glucose from its own glycogen store. The car analogy is explicitly limited. [Endotext transporter table](https://www.ncbi.nlm.nih.gov/books/NBK279115/table/pathogenesis-t2diab6.T.classification_of/?report=objectonly), [glucagon physiology](https://www.ncbi.nlm.nih.gov/books/NBK279127/), [original meal-response study](https://pmc.ncbi.nlm.nih.gov/articles/PMC8807706/).

The B8-IQ1-01/02 stems and selected examples match the official 2017 Biology DOCX, downloaded/read through XML. The scene/model data and mark allocations are consistent. The graph is labelled teaching data. Site L03's confirmed errors are handed off once with G03. Bannister-specific numbers could not be traced to a measurement, so their attribution remains an unsupported-source note, not a demonstrated false historical result.

## Mechanical checks

15 passages: 5,567 characters summed per scene, 5,581 joined between scenes. Both inside band; no U+2014. Repairs need no new scene and fit the 535-second plan. Root's separate plate hand-in owns actual artwork QA.

## Resolution

Resolved in `../lessons/bio-m8-b03.md` Revision 2 (30 Oct; root resolver, Claude PM). Science 3 was merged with learning 1 into one edit. Recount by script: 5,571 characters, about 535 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed | Asset brief item 1, scene 3's callouts and the facts note now specify the human pattern: beta and alpha cells intermixed through the islet and beside its internal capillary, beta cells more numerous, no beta core with an alpha ring. Callouts point at a few teal and a few amber cells, not at a centre and an edge. The delivered brief 114 plate `m8-pancreatic-islet-v1.png` already shows this (inspected 30 Oct). No narration change. |
| 2 | Fixed | Metadata link is now https://hscscience.com.au/subjects/biology/year12/module8/lesson03.sa.html, kept first. Live loading stays uncertified (403 to the check). |
| 3 | Fixed (merged with learning 1) | See learning 1: the liver, not glucagon, breaks down glycogen in feedback 10b, and the chip matches. |
