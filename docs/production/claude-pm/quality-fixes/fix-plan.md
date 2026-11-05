# Published-video quality fix plan (6 Nov 2026)

Owner request (6 Nov): list every rendered or published video that is below the Year 12 Module 5 standard, then fix and replace it. Grades come from 16-frame contact sheets against `../maths-visual-standard.md` and `rubric.md`. Stills only: motion and pacing still need a playback check. Batch details: `grades-batch1.md` to `grades-batch3.md` in this folder.

Totals: 152 videos. A 43, B 89, C 20 (of which 6 are render defects).

Process: Claude fixes the scene code on the existing narration and timing, and checks a 16-still sheet against the references. Codex re-renders, scans for defects, publishes v2 with the same metadata, swaps the playlist position and unlists v1 (never deletes it).

Order: wave 1, render defects (briefs 196, 199); wave 2, other C grades, two videos per Claude pass; wave 3, B grades in batches of about 10, grouped by problem.

## C: rebuild scenes (20)

| id | status | YouTube | frames | fix |
|---|---|---|---|---|
| bio-m7-b06 | render defect, brief 196 | https://youtu.be/iNiVBNVSRvs | 3, 5, 7, 9, 10 (broken-image placeholders rendered, 7 full-frame); 13 (empty exam card) | Supply or re-link the missing plates and re-render; check every asset path before export. |
| bio-m7-b10 | render defect, brief 196 | https://youtu.be/nwBfq4XGI0w | 8 to 16 (titles, labels and question text in a Times-like serif fallback font); 10 (broken-image icons in both table rows); 8 (label overflows its chip); 9, 11, 13 (sparse or empty) | Fix the font load and the two missing table images, then re-render; run the pre-render asset guard. Fill the empty exam card in 11 and 13 while re-rendering. |
| chem-m6-g03 | render defect, brief 199 | https://youtu.be/Rl7RUILbyHY | 11 to 15 (headings, question text, checks and summary table in a Times-like serif fallback font); 11 to 14 (broken-image icons in the question card, and a large broken flask image in 14) | Fix the font load and the missing tablet and flask images, then re-render; run the pre-render asset guard. |
| chem-m7-c10 | render defect, brief 199 | https://youtu.be/_y2Ow9e-0sI | 13 to 15 ("Last one" heading and "HSC-style question" chips in a serif fallback font; the hand font failed) | Fix the hand-font load and re-render; no design change needed. 9 (one flow-chart pair in an empty frame) and 11 (one line) can be filled while re-rendering. |
| chem-m7-p05 | render defect, brief 199 | https://youtu.be/WjCfarquFJ8 | 5 to 15 (all headings and question text in a serif fallback font); 9, 10, 11, 13, 14 (broken-image icons, full-height in 11 and 13) | Fix the font load and re-link the separating-funnel, glassware and ester plates, then re-render; run the pre-render asset guard. |
| chem-m8-c01 | render defect, brief 199 | https://youtu.be/ahwV_6MQqHU | 8 (broken-image icons for the burette and flask); 9 to 15 (headings, givens, question text and "Pause here to answer" in a serif fallback font) | Fix the font load and the missing titration plate, then re-render; run the pre-render asset guard. |
| bio-m5-g03 | fixed, brief 201 | https://youtu.be/OtPe_zLuGGk | 3, 4 (near-empty); 7 (bare checklist); 8 (empty pedigree); 11, 13, 14, 15 (sparse text-only) | Rebuild the middle scenes around the dot-array and pedigree visuals at full size; stage each calculation on the g01 layout. |
| bio-m6-b04 | fixed, brief 198 | https://youtu.be/ldAXVZXHFuM | 2, 3 (small strip in empty frame); 7 (small coded circles); 10 (tiny exam diagram); 14 (empty table); 15 (sparse) | Rebuild with painted chromosome plates at readable size; enlarge exam diagrams; fill the compare table as it is narrated. |
| bio-m6-b05 | fixed, brief 198 | https://youtu.be/fyvYjlBBRmk | 1 to 4 (small diagrams, empty space); 5 to 8 (bare DNA line); 9 (near-blank); 11, 13, 15 (empty cards) | Rebuild around a large gene and promoter diagram with the skin and fly plates; fill the exam cards. |
| bio-m6-b07 | fixed, brief 200 | https://youtu.be/Z1jPRaPLHYk | 3 (one small circle); 6 (empty card); 9 (faint diagram); 10 (text list); 11, 13 (empty exam cards); 15 (sparse) | Rebuild the middle with the finch plates and large chromosome visuals; stage the deck-of-cards aid visually. |
| bio-m6-b10 | fixed, brief 200 | https://youtu.be/71MkKTjXPOU | 2 (empty card); 6 (mostly empty table); 9 (title only); 10 (three lines); 11, 13 (empty exam cards); 14, 15 (sparse) | Rebuild the judgement scenes around the cotton and cattle plates with a large, readable benefit and risk table. |
| bio-m6-b11 | queued | https://youtu.be/oAVZdpuLnHw | 2 (bare DNA line for CRISPR); 4 (dots only); 5 (empty ladder); 11 (title only); 14 (ghosted overlap); 15 (title only) | Show CRISPR finding and cutting with a guide RNA and Cas9 visual; fill the evidence ladder; fix the 14 crossfade. |
| bio-m6-b12 | queued | https://youtu.be/y6vgEQaZel4 | 6 (small rhino, empty frame); 7, 8, 9 (tiny table text); 10 (one line); 11, 13 (empty exam cards); 15 (title only) | Rebuild the level table at readable size; give "hold on to" and the closing scene visuals. |
| bio-m6-b16 | queued | https://youtu.be/njVBwGcvD7A | 2 (small card stack); 5 (faint grid); 7 (empty left stage); 8 (one circle); 12 (unreadable table); 13 (empty card); 15 (one line) | Rebuild the reliability and gene-cloning scenes with large plates and readable bars; enlarge exam data. |
| bio-m6-b19 | queued | https://youtu.be/FfOK7a6blSw | 2 (empty columns); 5, 6 (empty cards); 9, 10 (tiny text); 11 (empty exam card); 13 (sparse); 15 (one small card) | Rebuild the benefit-test scenes so each card fills as narrated, with readable text and plates. |
| bio-m7-b11 | fixed, brief 201 | https://youtu.be/Qg_caOin2x0 | 2 (faded, half-empty cards); 6 (bare dash grid); 7 (one small virus); 8 (one-line card); 9 (near-empty comparison table); 11, 13 (empty exam card body); 16 (key notes wall) | Rebuild the middle scenes around the bacterium, virus and airway cell plates at full size; fill the effectiveness table as narrated; trim key notes. |
| chem-m6-c06 | fixing now | https://youtu.be/boYH3_uNQyc | 3, 4, 5, 7 (bare equations in a mostly empty frame); 8 (title only); 14 (faded countdown) | Rebuild the conjugate-pair and amphiprotic scenes with a particle view that shows the proton moving; fill 8; fix the countdown. |
| chem-m6-c07 | fixing now | https://youtu.be/BN5RYjZaVzc | 3 (title only); 4 (equation and one small beaker); 6 (ghosted); 9 (two tiny beakers, no title); 10, 13 (sparse); 15 (near-blank) | Rebuild the Kw, dilution and mixing scenes with the pH meter and particle visuals at full size; add titles; fix the ghosting. |
| chem-m6-c10 | queued | https://youtu.be/xl-LqpA8IUo | 1, 2, 5 to 10 (no scene titles); 3, 6 (sparse working); 9, 10 (faded text only); 12, 13 (sparse); 15 (one line in a large box) | Rebuild the Ka and pKa scenes with the meters and particle views beside the working; add titles; fill 15. |
| chem-m7-p06 | queued | https://youtu.be/3gQQ-hasiw8 | 2 (ghosted bottles); 5, 6, 7 (title only, blank stage for three consecutive frames); 8 (near-empty results table); 9 (one-line card); 15 (two lines in an empty frame) | Rebuild the "Why?", oil-test and "why it agrees" scenes around the tube plates, froth heights and oil droplets; fill the results table as narrated. Check first whether these plates failed to load silently in the same session as p05. |

## B: small fixes, then re-render (89)

| id | status | YouTube | frames | fix |
|---|---|---|---|---|
| bio-m5-b02b | queued | https://youtu.be/j2fxl5xvDwE , https://youtu.be/w7edKqGAUwA | 3, 9, 15 (title-only stage while narration runs); 12 (empty third card) | Bring the flower plate or the next visual in with the narration in 3, 9 and 15; fill the potatoes card before it is shown. |
| bio-m5-b03a | queued | https://youtu.be/bUPs256KyVY | 14 (three chips in an empty frame); 16 (13-line key notes wall) | Stage "two jobs" with the hCG and progesterone plates; cut key notes to about 5 bullets plus the memory card. |
| bio-m5-b03a2 | queued | https://youtu.be/Mlz5XT5XR7o | 10 (empty "Your turn" title); 7 (two empty cards); 16 (key notes wall) | Show the practice cards with the title; fill the feedback-type cards with icons; trim key notes. |
| bio-m5-b03b | queued | https://youtu.be/btrFMU7Yhxc | 4 (tiny table alone in empty frame); 9 (one small card) | Enlarge the trade-off table to fill the stage; scale up the evaluate card in 9. |
| bio-m5-b04 | queued | https://youtu.be/P9jyiLiGhZI | 1 (empty opener); 11 (tiny bacterium in empty frame); 15 (one line of text); 16 (dense key notes wall) | Open on the helix; enlarge the bacterium plate; give "Half old, half new" a visual; trim key notes. |
| bio-m5-b05a | queued | https://youtu.be/QorDvCohIYY | 3, 4, 11 (coded oval cells with bars, not painted plates); 12 (empty "Your turn") | Replace coded cells with the painted b06a-style cell plates; show the practice cards with the title. |
| bio-m5-b05b | queued | https://youtu.be/ikfUhS8eK3I | 3 (coded oval cell); 9, 10, 11 (small coded diagrams in empty frames) | Use painted meiosis plates; enlarge the tracking and combinations diagrams to fill the frame. |
| bio-m5-b06b | queued | https://youtu.be/o0hwEiJjqrg | 2 (tiny inset); 10, 14 (tiny base strips in empty frames); 16 (black frame); memory aid unframed | Enlarge the strips in 10 and 14; fix the black end frame; put the memory aid in a framed card. |
| bio-m5-b06c | queued | https://youtu.be/VKZvh8-y7gI | 5 (empty stage); 6 (codon chart text small); 9 (tiny strand chain in empty frame); memory aid unframed | Bring the chart in with the title and enlarge it; scale up the gene-to-chain strip; frame the memory aid. |
| bio-m5-b07 | queued | https://youtu.be/piCi2sSRDQU | 8 (single bar in empty frame); 9 (bare text flow boxes); 12, 13 (sparse) | Show the hydrangea and rabbit plates in 8 and 12; enlarge the plant P working in 13; frame the memory aid. |
| bio-m5-b08 | queued | https://youtu.be/QXGUtIoxkgc | 5 (small pea pod, empty frame); 10, 15 (title only); 14 (sparse feedback) | Fill 10 and 15 with the fruit fly cell and sort chips; enlarge 5 and 14; frame the memory aid. |
| bio-m5-b09 | queued | https://youtu.be/6BhGJlXbKCA | 10 (one tiny pedigree and a half line); 13 (one line of text); 15 (one chip) | Build "two giveaways" with large pedigree fragments; show the seed plates in 13; enlarge 15. |
| bio-m5-b10 | queued | https://youtu.be/0RH_T6hOwxY | 6 (thin strip in empty frame); 10, 11 (sparse or empty); 15 (one chip) | Enlarge the dominance strip; stage the ABO cross and colour-blindness pedigree with the title; fill 15. |
| bio-m5-b11 | queued | https://youtu.be/ehOdeivCarY | 9, 15 (title only); 12 (tiny feedback table); 13 (empty table) | Bring visuals in with the titles; enlarge the feedback table and clover data. |
| bio-m5-b12 | queued | https://youtu.be/9qTbxRSOKY4 | 5 (tiny STR strip); 8 (row of empty shapes); 9 (empty cards); 15 (sparse) | Enlarge STR and marker visuals; fill the tool cards as they appear; scale up 15. |
| bio-m5-p01 | queued | https://youtu.be/kU1-fsCE7MA | 5 (empty model stage); 11, 12 (small table text); 15 (near-empty); 16 (key notes wall) | Show the card model in 5; enlarge the evaluation tables; trim key notes to bullets plus card. |
| bio-m5-p02 | queued | https://youtu.be/kRShwjUyPwI | 13 (one chip); 14 (sparse feedback); 15 (empty box); 16 (key notes wall) | Show the bead model in 13 to 15; trim key notes. |
| bio-m5-p03 | queued | https://youtu.be/jpuYH0YccBc | 1, 3, 4, 5 (empty beige panels); 15 (two lines in a large box); 16 (key notes wall) | Fill or remove the empty panels; trim key notes. |
| bio-m6-b01 | queued | https://youtu.be/BLD9Zu9sPQ0 | 6 (title only); 11, 13 (exam text only); 15 (title only) | Bring the replica-plate visual in with 6; add the bacteria and lizard visuals to the exam cards; fill 15. |
| bio-m6-b02 | queued | https://youtu.be/eNT4PMSNYV4 | 10 (one line); 11 (exam text only); 13 (text card, empty space); 15 (title only) | Give "two things to keep" the UV and X-ray visuals; fill 15 with the three-step chips. |
| bio-m6-b03 | queued | https://youtu.be/S30l6JbFoAs | 5, 8, 9 (small strips with large empty margins); 13 (exam text only) | Scale the codon strips up to fill the stage; add the CFTR visual to exam question 2. |
| bio-m6-b08 | queued | https://youtu.be/PdcZY74Gywo | 2 (small icon grid); 6 (one pool, empty space); 11, 13 (exam text only) | Enlarge the pools and panther grid; add a visual to each exam card. |
| bio-m6-b09 | queued | https://youtu.be/Vyr0KetDMwo | 4 to 8 (tiny card labels); 10 (two lines); 11, 13 (empty exam cards) | Enlarge card text to at least 26 px; give 10 the timeline visual; fill exam cards. |
| bio-m6-b13 | queued | https://youtu.be/KtmFOGNNztg | 3, 4, 5, 7, 8 (tiny table text); 6 (small card in empty frame); 16 (key notes wall) | Enlarge the four-question table text; scale up 6; trim key notes. |
| bio-m6-b15 | queued | https://youtu.be/wX3MUWuRfvY | 2 to 5 (tiny text, empty right column); 11 (empty exam card); 13 (title only); 16 (key notes wall) | Enlarge compare labels; fill the right column; give 13 a visual; trim key notes. |
| bio-m6-b18 | queued | https://youtu.be/o3PpNr9qFhY | 3, 4 (small strands); 6 (tiny tube in empty frame); 13 (exam text only); 15 (two chips); 16 (key notes wall) | Enlarge the cut and paste strands; show the colony plate in 6; trim key notes. |
| bio-m6-g02 | queued | https://youtu.be/dJSdk30cboo | 3 to 14 (answer panels and stimulus text far too small) | Enlarge the stimulus and answer text to at least 26 px; drop the side rail to free width. |
| bio-m7-b02 | queued | https://youtu.be/lh7xCoEFpkI | 3 to 10 (tiny labels); 11 (empty exam card); 13 (empty card); 14, 15 (sparse) | Enlarge postulate labels; add plates to exam cards; fill 14 and 15. |
| bio-m7-b03 | queued | https://youtu.be/UbgSznvRHtk | 7 (one plate, empty card); 11 (empty exam card); 13 (empty card) | Fill the transmission card in 7; add the mosquito and Vibrio plates to the exam cards. |
| bio-m7-b04 | queued | https://youtu.be/eOZU7je8BFM | 1 (sparse opener); 10 (three tags); 11 (blank exam card: question text missing); 13 (empty answer) | Fix the missing exam question text in 11; give 10 a visual; fill 13. |
| bio-m7-b05 | queued | https://youtu.be/J5T5I_p_WQI | 6 (fully blank frame); 8 (ghosted); 10 (one banner); 11, 13 (text only) | Remove the blank hold or fill it with the next plate; give the firebreak line a hypersensitive-response visual. |
| bio-m7-b07 | queued | https://youtu.be/97ipuiUA2hw | 6 (one small cell in empty frame); 8 (empty stage); 11, 13 (exam text only) | Enlarge the B cell in 6; fill 8 with the misconception visual; add plates to the exam cards. |
| bio-m7-b08 | queued | https://youtu.be/fGIkZ3nwXZw | 1 (four tiny cells in an empty frame); 8 (empty stage, side rail only); 11, 13 (empty exam card body); 15 (rail only) | Enlarge the opener cells; bring the T cell plates into 8 and 15; show the question text and a plate in the exam cards. |
| bio-m7-b09 | queued | https://youtu.be/IcOyh0y7EjI | 15 (ghosted crossfade); 16 (dense key notes) | Fix the 15 crossfade; trim key notes to short bullets plus the memory card. |
| bio-m7-b12 | queued | https://youtu.be/9FkW6EQuzrA | 11, 13 (empty exam card body); 16 (dense key notes) | Show the question text with a mosquito plate in each exam card; trim key notes. |
| bio-m7-b13 | queued | https://youtu.be/HEm9ud4b7iI | 7 (four chips in an empty frame); 11, 13 (empty exam card body); 16 (dense key notes) | Give "all four at once" a visual; fill the exam cards; trim key notes. |
| bio-m7-g01 | queued | https://youtu.be/SYgIWk0__bk | 2 (mostly empty question card); 10 (one struck line); 15 (one-row table); 16 (dense key notes) | Bring the data table in with the question in 2; give 10 the sampling visual; fill 15; trim key notes. |
| bio-m7-p01 | queued | https://youtu.be/PzrqjRdWUjY | 4 (ghosted cups); 10 (near-empty hazard table); 11 (empty exam card); 14, 15 (one line each); 16 (key notes wall) | Fill the risk table as it is narrated; add the cup plates to 14 and 15; trim key notes. |
| bio-m7-p02 | queued | https://youtu.be/sGl2I3C9TyY | 4 (empty panel); 6 (one plate in a large card); 10 (near-empty); 11, 13 (empty exam cards); 15 (sparse) | Show the dilution series in 4; fill the safety scene in 10; add plates to the exam cards. |
| bio-m7-p05 | queued | https://youtu.be/ipZfLvpuNBM | 8 (empty red card); 10 (empty hazard table); 11, 13 (empty exam cards); 14 (one empty fix card) | Fill the "as a medicine" card and the risk table as narrated; add plate visuals to the exam cards and 14. |
| bio-m8-b02 | queued | https://youtu.be/D8-LzqJ6ZxY | 6 (near-blank frame, title not yet typed); 9 (faint outline animals); 11 (empty exam card); 12 (one line) | Bring the kangaroo or skin plate in with 6; make the trend plates solid; fill 11 and 12. |
| bio-m8-b03 | queued | https://youtu.be/KkEiSSPJEDU | 2 (faded text list); 4 (graph only, empty lower stage); 13 (sparse working); 14 (one line); 15, 16 (key notes held twice) | Give 2 the glycogen and liver visuals; fill 4 with the beta cell or liver plate; fill 13 and 14. |
| bio-m8-b04 | queued | https://youtu.be/N5F5wZIZQXY | 10 (empty loop under exam text); 14 (title only); 15, 16 (key notes held twice) | Fill 14 with the ADH loop or kidney plate; draw the exam loop as it is narrated. |
| chem-m5-c05 | queued | https://youtu.be/NJjEgjilgAE | 5 (title only, blank stage); 7 (small carbon scene, empty frame); 8 (one fraction and an arrow) | Bring the cobalt equation in with the 5 title; enlarge the carbon scene; give 8 the K scale with examples. |
| chem-m5-c07 | queued | https://youtu.be/8hZ3MVi7kHU | 4 (empty graph axes); 6 (ghosted pressure scene); 12 (empty compare table); 15 (half-empty card) | Draw the curves in with the axes; make the pressure scene solid; fill the methanol table as narrated. |
| chem-m5-c11 | queued | https://youtu.be/PQ9nuqM4b-Y | 4 (title only, blank stage); 7 (one ice cube, empty frame); 15 (empty box) | Bring the energy diagram in with the 4 title; show the entropy particles in 7; fill the 15 summary box. |
| chem-m5-c13 | queued | https://youtu.be/4IYt7nemcRI | 3 (title only, blank stage); 5 (two chips, empty frame); 13 (sparse); 15 (empty box) | Show the bottle and tube plates in 3; build the swap-partners diagram larger in 5; fill 13 and 15. |
| chem-m5-p01 | queued | https://youtu.be/cjoai9O2koA | 6 (empty results table); 10 (one-row risk table); 15 (empty box); 16 (key notes wall) | Fill the results and risk tables as narrated; fill 15; trim key notes. |
| chem-m5-p03 | queued | https://youtu.be/cY7hnSTN1uY | 8 (title only); 10 (one-row risk table); 15 (one line in a large box); 16 (key notes wall) | Bring the filtrate test in with the 8 title; fill the risk table; fill 15; trim key notes. |
| chem-m6-c01 | queued | https://youtu.be/HOcAqIXXbGk | 2 (empty timeline cards); 8 (one circle, tiny leftover thumbnails); 9 (sparse); 10 (leftover thumbnails) | Fill the timeline cards as they appear; remove the stray thumbnails; enlarge the ammonia and HCl scenes. |
| chem-m6-c02 | queued | none listed | 8 (near-invisible ghosted scene); 9 (faded); 13 (sparse) | Fix the ghosting in 8 and 9; fill 13; add the YouTube link to `youtube-links.json`. |
| chem-m6-c03 | queued | https://youtu.be/fJynVZC82Is | 1, 4 (no title); 5 (one equation, tiny cup); 9, 13 (sparse working) | Add scene titles; keep the cup at readable size beside the working; fill 5. |
| chem-m6-c08 | queued | https://youtu.be/rgepYezizZA | 1 (no title, sparse); 9 (sparse working); 10 (title only); 12 (sparse working) | Add the missing title; give "Remember" its summary visual; keep the ICE table and beaker beside the working. |
| chem-m6-c09 | queued | https://youtu.be/I4cEf51KJ5I | 1 to 10 (no scene titles); 4 (sparse diagram); 5 (a dot and one bar); 7 (ghosted) | Add scene titles; build the Hess diagram larger in 4 and 5; fix the ghosting in 7. |
| chem-m6-c11 | queued | https://youtu.be/5RRF1xvW3lk | 1 to 4, 7, 9, 10 (no scene titles); 3, 4 (half ghosted); 6, 7 (sparse); 13 (empty card body) | Add scene titles; fix the ghosted particle views; fill 6, 7 and 13. |
| chem-m6-c12 | queued | https://youtu.be/WImke8N1jqg | 1 to 4, 8 (no scene titles); 5 (title and one line); 6 (ghosted results); 8 (small burette, empty frame); 12 (faint countdown) | Add scene titles; bring the titre table in with 5; make 6 solid; fix the countdown. |
| chem-m6-c13 | queued | https://youtu.be/nyq1jhlmhgs | 1 to 6 (no scene titles); 4 (faint ranges); 5, 6, 7 (sparse) | Add scene titles; make the indicator ranges solid; fill 5 to 7 with the flask and particle visuals. |
| chem-m6-c14 | queued | https://youtu.be/9-supcAoc8g | 1 to 10 (no scene titles); 7 (ghosted curves); 8 (empty conductivity axes); 10 (blank stage); 11, 13 (empty question-card body) | Add scene titles; draw the conductivity curve with its axes; remove or fill the blank hold in 10; show a curve or meter beside the exam text in 11 and 13. |
| chem-m6-c15 | queued | https://youtu.be/KvQ-9Ki6NvI | 1, 2, 6, 7, 8 (no scene titles); 6 (two bottles only); 8 (three small diagrams); 10 (one line and a bar); 14 (empty sketch box) | Add scene titles; give the vinegar scene its curve; enlarge 8; fill the ion sketch in 14 as narrated. |
| chem-m6-c16 | queued | https://youtu.be/KZu-uvXVGFw | 1 (faded title); 5 (one plate in an empty frame); 6 (two faint curves); 10 (one line); 15 (one row in a large box) | Pair the wastewater probe with its reading in 5; draw the method curves solid in 6; fill 10 and 15. |
| chem-m6-p01 | queued | https://youtu.be/rAZaHzrJ31k | 2 (ghosted, near-blank); 9 (small variables card, empty lower stage); 10 (two-row risk table in a large card); 16 (dense key notes) | Fix the 2 crossfade; add the well plate beside the variables card; fill the risk table as narrated; trim key notes. |
| chem-m6-p02 | queued | https://youtu.be/8zI6dh7bui4 | 6 (ghosted working); 7 (one cup in an empty frame); 10 (one-row risk table); 15 (near-blank, title typing); 16 (dense key notes) | Make 6 solid; fill 7 with the error chain; fill the risk table and 15; trim key notes. |
| chem-m6-p03 | queued | https://youtu.be/XrYeYMeSmDw | 9 (one card in an empty frame); 10 (faded cards); 15 (one row in a large box); 16 (dense key notes) | Bring the beakers and readings in with the validity card; make 10 solid; fill 15; trim key notes. |
| chem-m6-p04 | queued | https://youtu.be/VFu_7xIIBH0 | 11 (two text lines only); 15 (empty summary box); 16 (dense key notes) | Show the dilution flask beside "Dilute ten times" in 11; fill 15; trim key notes. |
| chem-m6-p05 | queued | https://youtu.be/WRD5syuSTEo | 2 (one pipette and beaker); 9 (small card in an empty frame); 10 (one-row risk table); 13 (title only); 15 (empty summary box); 16 (dense key notes) | Fill the validity scene and risk table as narrated; show the question card with the 13 title; fill 15; trim key notes. |
| chem-m6-p07 | queued | https://youtu.be/6l_m2vN2X5g | 2 (one meter in an empty frame); 3 (two text lines only); 15 (empty summary box); 16 (dense key notes) | Show the vinegar bottle and label beside the estimate in 3; fill 15; trim key notes. |
| chem-m7-c02 | queued | https://youtu.be/ZWPnKycf4bg | 4, 5 (one small skeletal formula in an empty frame); 8 (empty dashed test box); 9 (text list); 10 (scattered sparse structures) | Enlarge the formulas and pair each with its "what changed" card; fill the bromine-water test in 8; lay out the C5H12 isomers as a clear row in 10. |
| chem-m7-c04a | queued | https://youtu.be/3sb8EukMr5g | 5 (whole scene ghosted); 11 (one-line question card, empty stage); 16 (black end frame) | Fix the 5 crossfade; show the propene structure under the 11 question; fix the black end frame. |
| chem-m7-c09 | queued | https://youtu.be/hk9wDdhbTLA | 7 (title only, blank stage); 9 (bare equation in an empty frame); 11 (text chips only) | Bring the charge-sharing visual in with the 7 title; add the litmus or particle view beside the 9 equation; give 11 the boiling-point ladder. |
| chem-m7-c11 | queued | https://youtu.be/vxG4x229SeE | 5, 6 (faint, half-ghosted structures and axis); 11 (ghosted scene) | Make the amine force scenes solid; shorten the 11 fade. |
| chem-m7-c13 | queued | https://youtu.be/aGWfHHCxzrU | 3, 4 (two or three boxes in an empty frame); 5, 7, 8, 9 (flow-chart box text tiny); 6 (faded); 11 (text chips only) | Enlarge the flow-chart boxes and their reagent labels; drop the tiny mini-map; fill 3 and 4. |
| chem-m7-c15 | queued | https://youtu.be/4ilaHAMeqiU | 2, 4, 6 (small structures in empty frames); 7 (half-built compare); 11 (one line) | Scale the monomer and repeat-unit structures up; bring the compare table in whole; give 11 the side-by-side chains. |
| chem-m7-g03 | queued | https://youtu.be/dMjkM6_NBY4 | 1 (faded checklist, tiny map); 4, 5 (near-empty answer stage); 7, 13 (flow-chart text tiny); 15 (faded summary table) | Enlarge the flow-chart text; build the route in 4 and 5 as it is narrated; make 15 solid. |
| chem-m7-p01 | queued | https://youtu.be/hJ3m9qswFqI | 4 (empty variables card); 7 (empty axes); 10 (one-row risk table); 15 (one line in a large box); 16 (dense key notes) | Fill the variables card and plot the boiling points as narrated; fill the risk table and 15; trim key notes. |
| chem-m7-p02 | queued | https://youtu.be/8qKRorP_RRk | 2 (text only); 6, 7 (ghosted fume cupboard); 15 (near-blank, title typing); 16 (dense key notes) | Show the tubes with the recap in 2; make 6 and 7 solid; fill 15; trim key notes. |
| chem-m7-p03 | queued | https://youtu.be/Od9P6Tuv800 | 2 (one line beside the burner); 10 (empty risk table); 11 (faded table); 16 (dense key notes) | Show the water mass and balance in 2; fill the risk table as narrated; make 11 solid; trim key notes. |
| chem-m7-p04 | queued | https://youtu.be/JMmrUJxoaQE | 10 (one-row risk table); 15 (one line in an empty frame); 16 (dense key notes) | Fill the risk table; give 15 the colour-change tubes; trim key notes. |
| chem-m8-c02 | queued | https://youtu.be/irU2BTyFdEg | 1, 4 (one beaker in an empty frame); 7 (one givens card); 10 (title only); 11 (near-blank, title typing) | Pair the beaker with the precipitate or balance in 1 and 4; bring the working in with the givens in 7; fill 10 with the error causes. |
| chem-m8-c03a | queued | https://youtu.be/OUjLwWRUiNM | 5 to 10 (flow-chart node text tiny and faded); 13 (sparse working) | Enlarge the current flow-chart branch so its labels read at full size; fill 13 with the tube plate. |
| chem-m8-c03b | queued | https://youtu.be/JIej-SISftM | 4, 5 (empty particle circles); 6, 9, 10 (flow-chart text tiny and faded); 11 (one line) | Fill the particle views in 4 and 5; enlarge the active flow-chart branch; give 11 the tube plates. |
| chem-m8-p02 | queued | https://youtu.be/6b3_H8Cawfg | 2 (empty recovery bar); 3 (one beaker); 10 (one-row risk table); 14 (one line and an empty bar); 15 (two lines in a large box); 13, 16 (key notes held twice) | Show the balance and filter plates in 2 and 3; fill the risk table and 14; drop the duplicate key notes hold. |
| skills-s01 | queued | https://youtu.be/-ouJt6UBaBw | 1 (tiny report tiles); 5 to 8 (shrunk stimulus and side-rail text far too small); 9 (sparse); 13 (empty card body); no scene titles | Keep the stimulus at full size and drop the rail when answering; add hand-font scene titles; fill 9 and 13. |
| skills-s02 | queued | https://youtu.be/ENUgFBDb0pY | 5 to 8 (shrunk stimulus text tiny); 10 (near-empty sentence check); 11, 13 (empty card body); no scene titles | Enlarge the stimulus while answering; fill 10, 11 and 13 as narrated; add scene titles. |
| skills-s03 | queued | https://youtu.be/wYqgEi0J71g | 1 (tiny thumbnails); 5 to 9 (stimulus, table and marking text tiny); 10 (sparse); no scene titles | Enlarge the compare table and answer text; fill 10; add scene titles. |
| skills-s04 | queued | https://youtu.be/dZQvSUxFY8A | 1 (tiny strip); 5 to 8 (stimulus and answer text tiny); 9 (faded band table); 10 (sparse); no scene titles | Enlarge stimulus and answer text; make 9 solid; fill 10; add scene titles. |
| skills-s05 | queued | https://youtu.be/4uehJ1QBp2o | 5 to 10 (stimulus and working text tiny); 11 (blank stage, rail only); 13 (empty question card) | Enlarge the working; remove or fill the blank hold in 11; show the question text in 13. |
| skills-s06 | queued | https://youtu.be/fKUEvH4i7O0 | 10 (title only); 11 (blank stage, rail only); 13 (two-line card, empty body) | Bring the line-versus-column graphs in with the 10 title; fill 11 and 13. |
| skills-s07 | queued | https://youtu.be/NT6MvX6VT6g | 1 (three words in an empty frame); 3 (near-empty card); 5 to 8 (stimulus text tiny); 10 (empty risk table); 15 (sparse card) | Give 1 the three-target visual; enlarge the stimulus; fill the risk table as narrated; fill 15. |
| skills-s08 | queued | https://youtu.be/xO7HoISN8-k | 1 (small page sketch and tiles); 5 to 9 (shrunk stimulus and plan text tiny) | Keep the stimulus readable while planning (at least 26 px), or show only the line in use. |

## A: at the bar, no action (43)

| id | status | YouTube | frames | fix |
|---|---|---|---|---|
| bio-m5-b02a | queued | https://youtu.be/0P33z4D2q0E | none material (16 is a long-bullet key notes screen, matches the b06a reference) | No action. |
| bio-m5-b02c | queued | https://youtu.be/kG-KexGgCzc | 3 (brief empty stage) | No action. |
| bio-m5-b06a | queued | https://youtu.be/2vsAqgI-1NI | none (reference sheet) | No action. |
| bio-m5-b13 | queued | https://youtu.be/n_2i_qz3tMs | 11 (sparse); memory aid unframed | Optional: frame the memory aid. |
| bio-m5-g01 | queued | https://youtu.be/QcSZ2Wn0CE0 | 15 (sparse closing card) | No action. |
| bio-m5-g02 | queued | https://youtu.be/RHHPbj94tKQ | 8 (one text card) | No action. |
| bio-m6-g01 | queued | https://youtu.be/_7FscIH2HHI | 5 (title only) | No action. |
| bio-m7-b01 | queued | https://youtu.be/SfHlZFpl5c4 | 6 (one plate, mostly empty) | No action. |
| bio-m7-g03 | queued | https://youtu.be/2Xrb7pKgo6w | 1 (tiny thumbnails); 15 (single row) | No action. |
| bio-m8-b01 | queued | https://youtu.be/JK2yJHP9x2c | 11, 13 (empty exam card body) | Optional: show the question text and a plate earlier in the exam cards. |
| bio-m8-b05 | queued | https://youtu.be/kWLPJqEJTvg | 14 (title only) | Optional: bring the stomata and xerophyte plates in with the 14 title. |
| chem-m5-c03 | queued | https://youtu.be/w0GzgApQhQY | 7 (title and name only) | No action. |
| chem-m5-c04a | queued | https://youtu.be/yk5KVdipGRE | 15 (sparse closing card) | No action. |
| chem-m5-c04b | queued | https://youtu.be/jDkHt4rf6bI | 7 (two small bars, empty frame); 15 (one card) | No action. |
| chem-m5-c06a | queued | https://youtu.be/_NLAkMBNyRY | 3 (sparse) | No action. |
| chem-m5-c06b | queued | https://youtu.be/Zs1oO5eCIqc | 11 (empty box, title still typing); 12 (sparse "Your turn") | Optional: fill the 11 summary box as it appears. |
| chem-m5-c08 | queued | https://youtu.be/IWS7_MDw-yc | 6 (sparse); 15 (half-empty card) | No action. |
| chem-m5-c09 | queued | https://youtu.be/9TxH_y3ZOdU | 15 (ghosted crossfade) | Optional: tighten the 15 crossfade. |
| chem-m5-c10 | queued | https://youtu.be/PL415_P6F6w (the JSON also lists https://youtu.be/NJjEgjilgAE, which is chem-m5-c05) | 12 (one card in a large frame); 15 (one card) | No visual action. Correct the duplicate c05 link in `youtube-links.json`. |
| chem-m5-c14 | queued | https://youtu.be/UMgrHQaLSH8 | 13 (ghosted crossfade); 15 (empty box) | Optional: fill the 15 summary box as it appears. |
| chem-m5-c15 | queued | https://youtu.be/KvzXxb7bAyo | 6 (large empty working panel) | No action. |
| chem-m5-g01 | queued | https://youtu.be/BdF_sRrt5Yw | none (reference sheet) | No action. |
| chem-m5-g03b | queued | https://youtu.be/A0Z2-OLzRCI | 1, 14 (empty numbered rows); 3 (empty right panel) | No action. |
| chem-m5-g03c | queued | https://youtu.be/UPoHGWWm9MA | 1 (two-line checklist) | No action. |
| chem-m5-g03d | queued | https://youtu.be/wSSh97iXkio | 2 (equation only) | No action. |
| chem-m5-p02 | queued | https://youtu.be/c1zYHVXYc74 | 15 (small icon strip) | No action. |
| chem-m6-c04 | queued | https://youtu.be/dkMhu-koahI | 15 (near-blank, title typing) | No action. |
| chem-m6-c05 | queued | https://youtu.be/s2Soxz8i5K4 | 6 (ghosted mnemonic words) | No action. |
| chem-m6-g04 | queued | https://youtu.be/oj-Cp4KMZUY | 8 (one-line question card, empty body) | No action. |
| chem-m7-c01 | queued | https://youtu.be/y-galt8f4ow | 1 (faded name chips); 3 (small structural formula) | No action. |
| chem-m7-c03 | queued | https://youtu.be/G3nQPPbvO7I | 6 (sparse) | No action. |
| chem-m7-c04b | queued | https://youtu.be/S4bQV1cOzS4 | 8, 14 (ghosted earlier steps) | Optional: shorten the 8 fade. |
| chem-m7-c05 | queued | https://youtu.be/1qF_486TVQE | 11 (one card in an empty frame) | No action. |
| chem-m7-c06 | queued | https://youtu.be/-XVSCs8nHnI | 10 (faded compare table); 11 (title only) | Optional: bring the question card in with the 11 title. |
| chem-m7-c07 | queued | https://youtu.be/7dqWjzokvJU | 9 (title only) | No action. |
| chem-m7-c08a | queued | https://youtu.be/GJVFRMiNDOk | 9 (title and one line); 10 (one tube) | Optional: show the distil and reflux set-ups in 9. |
| chem-m7-c08b | queued | https://youtu.be/j2GPr4yGQHc | 7 (title and one line) | No action. |
| chem-m7-c12 | queued | https://youtu.be/Cms4sZ-Sly0 | 2 (small soap bar); 10 (text chips) | No action. |
| chem-m7-c14 | queued | https://youtu.be/Mv1CG4fzbaM | none material | No action. |
| chem-m7-g01 | queued | https://youtu.be/M0yxewjPCUE | none material | No action. |
| chem-m7-g02 | queued | https://youtu.be/PPIwkdv8dC8 | 1 (sparse opener) | No action. |
| chem-m7-g04 | queued | https://youtu.be/R5VJ8EsGEp4 | 4 (one line beside the question) | No action. |
| chem-m8-g01 | queued | https://youtu.be/RtYZC9fRdVI | 15, 16 (key notes held twice, memory aid unframed) | Optional: frame the memory aid. |
