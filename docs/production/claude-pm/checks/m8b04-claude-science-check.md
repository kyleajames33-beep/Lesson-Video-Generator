# m8b04 science check

Input SHA-256: `b8a462e935941db97f0cef60522658b883141a88b8c5e4b278d883572b79a59a`.

Independent Codex source review, 30 October 2026. `../lessons/bio-m8-b04.md`, Revision 1, read in full: narration, visuals, attempts, feedback, notes, number checks and metadata. No recorded or visual approval follows.

## Findings

1. **Blocker: the no-drinking salt task overstates what conservation alone restores.** See learning finding 1 and its replacement. [Water conservation and thirst physiology](https://pmc.ncbi.nlm.nih.gov/articles/PMC6419289/). Count once across reviews.

2. **Should fix: ADH is said not to reach zero.** Scene 6 says "ADH doesn't drop to zero, though. Some is released most of the time". Water loading can suppress vasopressin secretion to undetectable levels. Replace those two sentences with: "ADH release varies with concentration and can become extremely low after a large water intake." Do not replace with "never switched off". [Vasopressin suppression](https://pmc.ncbi.nlm.nih.gov/articles/PMC2757522/).

3. **Should fix: osmolarity is defined per litre of water.** Replace scene 2's "in each litre of water" with "in each litre of blood plasma". Osmolarity is per litre of solution; osmolality is per kilogram of solvent. Keeping osmolarity is fine if its definition/units agree. [NLM MeSH](https://www.ncbi.nlm.nih.gov/mesh?Cmd=DetailsSearch&Db=mesh&Term=%22Osmolar+Concentration%22%5BMeSH+Terms%5D).

4. **Should fix: aldosterone's water effect loses a necessary condition.** Scene 8 makes water following sodium unconditional, while the author note recognises the need for water permeability. Replace with "When water channels are present, water follows the sodium by osmosis, helping restore blood volume." This uses the just-taught channels without adding a new pathway. [Collecting-duct permeability and ADH](https://www.ncbi.nlm.nih.gov/books/NBK526069/).

5. **Should fix: metadata site link ends lesson04.sa.** Use https://hscscience.com.au/subjects/biology/year12/module8/lesson04.sa.html first. Local file exists; live HEAD returned 403.

## Checks completed

Hypothalamic synthesis, axonal delivery and posterior-pituitary release of ADH, receptor shrinkage and thirst are properly distinguished. ADH's blood-side receptor and apical AQP2 effect, medullary gradient and reverse loop are suitable. About a million nephrons per kidney, 180 L filtered daily and 1.5 L urine daily are ordinary adult approximations, not measurements for the graph's participant. Aldosterone can remain the short sodium-first contrast after finding 4; the full RAAS cascade need not be added.

Graph readings match the text: water peak 9.0 mL/min at 60 min, returning to 1.0 at 180. Trapezoidal integration gives 1,297.5 mL over three hours, including 180 mL baseline, so 117.5 mL above the one-litre load after baseline subtraction. That is possible from body stores; it must not be presented as proof that exactly the drink was excreted. The current text makes no such claim. Salt trace integrates to 246 mL, a modest 66 mL above baseline. Teaching data are labelled.

B8-IQ1-02 and its selected coordination example match the official 2017 Biology DOCX, downloaded/read through XML. Both questions have fair mark splits after the first demand is repaired. Site handoff rejects the author's blanket never-off ADH correction, separates unsupported Iraq figures from proven errors, and does not call an hourly urine rate impossible merely because it falls below a daily average.

## Mechanical checks

15 passages: 5,555 characters summed per scene, 5,569 joined between scenes. Both inside band; no U+2014. Keep the repairs brief and recount against the 570-second ceiling. Root's separate plate hand-in owns artwork QA.

## Resolution

Resolved in `../lessons/bio-m8-b04.md` Revision 2 (30 Oct; root resolver, Claude PM). Science 1 and 2 were merged with learning 1 and 2. Recount by script: 5,637 characters, about 540 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed (blocker; merged with learning 1) | See learning 1: part (b), feedback 10b, the ring label and the model answer now say conservation limits further water loss and drinking supplies the water. |
| 2 | Fixed (merged with learning 2) | Scene 6 uses the proposed sentence; the facts note, the error-check brief and site error 5's proposed wording are aligned, with no "never switched off" rule. |
| 3 | Fixed | Scene 2 and the terms note now say "in each litre of blood plasma". |
| 4 | Fixed | Scene 8: "When water channels are present, water follows the sodium by osmosis, helping restore blood volume." Key note 5, the comparison chip and the memory aid check carry the condition; the dots pass through an open-duct thumbnail. The RAAS cascade is not added. |
| 5 | Fixed | Metadata link is now https://hscscience.com.au/subjects/biology/year12/module8/lesson04.sa.html, kept first. Live loading stays uncertified (403 to the check). |
