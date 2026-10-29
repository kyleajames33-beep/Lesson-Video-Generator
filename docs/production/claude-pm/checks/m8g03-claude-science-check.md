# m8g03 science check

Input SHA-256: `e052cbad056e838083b21785a365421eb4ecc533eb85349cfc48752d4d2680f0`.

Independent Codex source review, 30 October 2026. `../lessons/bio-m8-g03.md`, Revision 1, read in full: narration, visuals, questions, model answers, notes, number checks and metadata. No recorded or visual approval follows.

## Findings

1. **Should fix: both metadata lesson links end .sa.** Use https://hscscience.com.au/subjects/biology/year12/module8/lesson01.sa.html and https://hscscience.com.au/subjects/biology/year12/module8/lesson03.sa.html first. Exact local files exist; live HEAD returned 403.

## Checks completed

The aortic/carotid receptor locations, medullary integration, increased heartbeat rate/force and arteriolar narrowing after standing are correct. Lost afferent information predicts impaired rapid correction and dizziness. This is a prediction about that reflex, not proof that no other compensation can ever act; the constructed question's simplified chain is acceptable. [Baroreceptor review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8480547/).

Graph readings match every point used: glucose peak 7.6 mmol/L at 30 min; insulin peak 62 mU/L at 45 min; glucose 7.2 at 45, 5.0 at 120, 4.6 at 150 and 4.9 at 180. The 2.2 mmol/L fall and 0.3 mmol/L late rise are consistent. The trajectories are plausible labelled teaching data. An original healthy-adult study sampled at 10, 20, 30, 45, 60, 90, 120 and 180 min: [mixed-meal study](https://pmc.ncbi.nlm.nih.gov/articles/PMC8807706/). It supports transient responses, not the exact invented peaks. The 15-minute peak difference must not become a universal secretion delay.

Liver/muscle storage and muscle/fat uptake agree with B03. The shorthand that insulin promotes uptake in liver, muscle and fat need not imply GLUT4 in liver: insulin also promotes net hepatic trapping/storage. Preserve B03's explicit distinction if a membrane inset is reused. Glucagon's liver response and the long-run context are appropriate. [Glucagon physiology](https://www.ncbi.nlm.nih.gov/books/NBK279127/).

ABA closure opposing falling plant water content is negative feedback. Banana ethylene stimulating ripening and further ethylene production is an autocatalytic positive example. The glucose-up distractor is correctly rejected because the response opposes a fall. [Original banana ethylene experiment](https://pmc.ncbi.nlm.nih.gov/articles/PMC5491123/). Each model-loop order, inference and mark allocation is fair.

B8-IQ1-01 and the selected glucose example match the official 2017 Biology DOCX, downloaded/read through XML. B03/G03's site L03 errors are logged once in the site handoff. The design's internal build key m8g03b differs from the explicit review key m8g03 in brief 114; these report filenames follow the user's brief. Point the build to the actual reports during integration.

## Mechanical checks

15 passages: 5,532 characters summed per scene, 5,546 joined between scenes. Both inside band; no U+2014. No narration expansion is required; the plan estimates 545 seconds. Root's separate hand-in owns banana/liver artwork QA.

## Resolution

Resolved in `../lessons/bio-m8-g03.md` Revision 2 (30 Oct; root resolver, Claude PM). Narration unchanged: 5,532 characters, about 545 s.

| # | Outcome | Note |
| --- | --- | --- |
| 1 | Fixed | Both metadata links are now https://hscscience.com.au/subjects/biology/year12/module8/lesson01.sa.html and https://hscscience.com.au/subjects/biology/year12/module8/lesson03.sa.html, kept first. Live loading stays uncertified (403 to the check). |

Also changed (from this check's notes): the build's review evidence paths now point at these `m8g03-*` reports (the lesson key stays `m8g03b`). The delivered `m8-liver-v1.png` sits beside the muscle plate in 3c and 3d, with no membrane inset, so B03's distinction between muscle and fat uptake and liver storage is kept.
