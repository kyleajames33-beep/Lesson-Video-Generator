# Rendered-video quality audit: batch 3 grades (6 Nov 2026)

Graded from the 16-frame contact sheets in `work/quality-audit/sheets/` against `rubric.md`, the Module 5 reference sheets (chem-m5-g01, bio-m5-b06a), the rejected d01 v1 sheet and `maths-visual-standard.md` items 2 to 9, calibrated against `grades-batch1.md` and `grades-batch2.md`. Frames are numbered 1 to 16, row by row. Stills only: motion and pacing were not judged, so an A here still means "stills at the bar", not a playback pass. Render defects are listed first. Font calls were confirmed on enlarged crops.

| id | grade | YouTube | frames at fault | fix |
|---|---|---|---|---|
| chem-m6-g03 | C (render defect) | https://youtu.be/Rl7RUILbyHY | 11 to 15 (headings, question text, checks and summary table in a Times-like serif fallback font); 11 to 14 (broken-image icons in the question card, and a large broken flask image in 14) | Fix the font load and the missing tablet and flask images, then re-render; run the pre-render asset guard. |
| chem-m7-c10 | C (render defect) | https://youtu.be/_y2Ow9e-0sI | 13 to 15 ("Last one" heading and "HSC-style question" chips in a serif fallback font; the hand font failed) | Fix the hand-font load and re-render; no design change needed. 9 (one flow-chart pair in an empty frame) and 11 (one line) can be filled while re-rendering. |
| chem-m7-p05 | C (render defect) | https://youtu.be/WjCfarquFJ8 | 5 to 15 (all headings and question text in a serif fallback font); 9, 10, 11, 13, 14 (broken-image icons, full-height in 11 and 13) | Fix the font load and re-link the separating-funnel, glassware and ester plates, then re-render; run the pre-render asset guard. |
| chem-m8-c01 | C (render defect) | https://youtu.be/ahwV_6MQqHU | 8 (broken-image icons for the burette and flask); 9 to 15 (headings, givens, question text and "Pause here to answer" in a serif fallback font) | Fix the font load and the missing titration plate, then re-render; run the pre-render asset guard. |
| chem-m7-p06 | C | https://youtu.be/3gQQ-hasiw8 | 2 (ghosted bottles); 5, 6, 7 (title only, blank stage for three consecutive frames); 8 (near-empty results table); 9 (one-line card); 15 (two lines in an empty frame) | Rebuild the "Why?", oil-test and "why it agrees" scenes around the tube plates, froth heights and oil droplets; fill the results table as narrated. Check first whether these plates failed to load silently in the same session as p05. |
| chem-m6-c14 | B | https://youtu.be/9-supcAoc8g | 1 to 10 (no scene titles); 7 (ghosted curves); 8 (empty conductivity axes); 10 (blank stage); 11, 13 (empty question-card body) | Add scene titles; draw the conductivity curve with its axes; remove or fill the blank hold in 10; show a curve or meter beside the exam text in 11 and 13. |
| chem-m6-c15 | B | https://youtu.be/KvQ-9Ki6NvI | 1, 2, 6, 7, 8 (no scene titles); 6 (two bottles only); 8 (three small diagrams); 10 (one line and a bar); 14 (empty sketch box) | Add scene titles; give the vinegar scene its curve; enlarge 8; fill the ion sketch in 14 as narrated. |
| chem-m6-c16 | B | https://youtu.be/KZu-uvXVGFw | 1 (faded title); 5 (one plate in an empty frame); 6 (two faint curves); 10 (one line); 15 (one row in a large box) | Pair the wastewater probe with its reading in 5; draw the method curves solid in 6; fill 10 and 15. |
| chem-m6-p01 | B | https://youtu.be/rAZaHzrJ31k | 2 (ghosted, near-blank); 9 (small variables card, empty lower stage); 10 (two-row risk table in a large card); 16 (dense key notes) | Fix the 2 crossfade; add the well plate beside the variables card; fill the risk table as narrated; trim key notes. |
| chem-m6-p02 | B | https://youtu.be/8zI6dh7bui4 | 6 (ghosted working); 7 (one cup in an empty frame); 10 (one-row risk table); 15 (near-blank, title typing); 16 (dense key notes) | Make 6 solid; fill 7 with the error chain; fill the risk table and 15; trim key notes. |
| chem-m6-p03 | B | https://youtu.be/XrYeYMeSmDw | 9 (one card in an empty frame); 10 (faded cards); 15 (one row in a large box); 16 (dense key notes) | Bring the beakers and readings in with the validity card; make 10 solid; fill 15; trim key notes. |
| chem-m6-p04 | B | https://youtu.be/VFu_7xIIBH0 | 11 (two text lines only); 15 (empty summary box); 16 (dense key notes) | Show the dilution flask beside "Dilute ten times" in 11; fill 15; trim key notes. |
| chem-m6-p05 | B | https://youtu.be/WRD5syuSTEo | 2 (one pipette and beaker); 9 (small card in an empty frame); 10 (one-row risk table); 13 (title only); 15 (empty summary box); 16 (dense key notes) | Fill the validity scene and risk table as narrated; show the question card with the 13 title; fill 15; trim key notes. |
| chem-m6-p07 | B | https://youtu.be/6l_m2vN2X5g | 2 (one meter in an empty frame); 3 (two text lines only); 15 (empty summary box); 16 (dense key notes) | Show the vinegar bottle and label beside the estimate in 3; fill 15; trim key notes. |
| chem-m7-c02 | B | https://youtu.be/ZWPnKycf4bg | 4, 5 (one small skeletal formula in an empty frame); 8 (empty dashed test box); 9 (text list); 10 (scattered sparse structures) | Enlarge the formulas and pair each with its "what changed" card; fill the bromine-water test in 8; lay out the C5H12 isomers as a clear row in 10. |
| chem-m7-c04a | B | https://youtu.be/3sb8EukMr5g | 5 (whole scene ghosted); 11 (one-line question card, empty stage); 16 (black end frame) | Fix the 5 crossfade; show the propene structure under the 11 question; fix the black end frame. |
| chem-m7-c09 | B | https://youtu.be/hk9wDdhbTLA | 7 (title only, blank stage); 9 (bare equation in an empty frame); 11 (text chips only) | Bring the charge-sharing visual in with the 7 title; add the litmus or particle view beside the 9 equation; give 11 the boiling-point ladder. |
| chem-m7-c11 | B | https://youtu.be/vxG4x229SeE | 5, 6 (faint, half-ghosted structures and axis); 11 (ghosted scene) | Make the amine force scenes solid; shorten the 11 fade. |
| chem-m7-c13 | B | https://youtu.be/aGWfHHCxzrU | 3, 4 (two or three boxes in an empty frame); 5, 7, 8, 9 (flow-chart box text tiny); 6 (faded); 11 (text chips only) | Enlarge the flow-chart boxes and their reagent labels; drop the tiny mini-map; fill 3 and 4. |
| chem-m7-c15 | B | https://youtu.be/4ilaHAMeqiU | 2, 4, 6 (small structures in empty frames); 7 (half-built compare); 11 (one line) | Scale the monomer and repeat-unit structures up; bring the compare table in whole; give 11 the side-by-side chains. |
| chem-m7-g03 | B | https://youtu.be/dMjkM6_NBY4 | 1 (faded checklist, tiny map); 4, 5 (near-empty answer stage); 7, 13 (flow-chart text tiny); 15 (faded summary table) | Enlarge the flow-chart text; build the route in 4 and 5 as it is narrated; make 15 solid. |
| chem-m7-p01 | B | https://youtu.be/hJ3m9qswFqI | 4 (empty variables card); 7 (empty axes); 10 (one-row risk table); 15 (one line in a large box); 16 (dense key notes) | Fill the variables card and plot the boiling points as narrated; fill the risk table and 15; trim key notes. |
| chem-m7-p02 | B | https://youtu.be/8qKRorP_RRk | 2 (text only); 6, 7 (ghosted fume cupboard); 15 (near-blank, title typing); 16 (dense key notes) | Show the tubes with the recap in 2; make 6 and 7 solid; fill 15; trim key notes. |
| chem-m7-p03 | B | https://youtu.be/Od9P6Tuv800 | 2 (one line beside the burner); 10 (empty risk table); 11 (faded table); 16 (dense key notes) | Show the water mass and balance in 2; fill the risk table as narrated; make 11 solid; trim key notes. |
| chem-m7-p04 | B | https://youtu.be/JMmrUJxoaQE | 10 (one-row risk table); 15 (one line in an empty frame); 16 (dense key notes) | Fill the risk table; give 15 the colour-change tubes; trim key notes. |
| chem-m8-c02 | B | https://youtu.be/irU2BTyFdEg | 1, 4 (one beaker in an empty frame); 7 (one givens card); 10 (title only); 11 (near-blank, title typing) | Pair the beaker with the precipitate or balance in 1 and 4; bring the working in with the givens in 7; fill 10 with the error causes. |
| chem-m8-c03a | B | https://youtu.be/OUjLwWRUiNM | 5 to 10 (flow-chart node text tiny and faded); 13 (sparse working) | Enlarge the current flow-chart branch so its labels read at full size; fill 13 with the tube plate. |
| chem-m8-c03b | B | https://youtu.be/JIej-SISftM | 4, 5 (empty particle circles); 6, 9, 10 (flow-chart text tiny and faded); 11 (one line) | Fill the particle views in 4 and 5; enlarge the active flow-chart branch; give 11 the tube plates. |
| chem-m8-p02 | B | https://youtu.be/6b3_H8Cawfg | 2 (empty recovery bar); 3 (one beaker); 10 (one-row risk table); 14 (one line and an empty bar); 15 (two lines in a large box); 13, 16 (key notes held twice) | Show the balance and filter plates in 2 and 3; fill the risk table and 14; drop the duplicate key notes hold. |
| skills-s01 | B | https://youtu.be/-ouJt6UBaBw | 1 (tiny report tiles); 5 to 8 (shrunk stimulus and side-rail text far too small); 9 (sparse); 13 (empty card body); no scene titles | Keep the stimulus at full size and drop the rail when answering; add hand-font scene titles; fill 9 and 13. |
| skills-s02 | B | https://youtu.be/ENUgFBDb0pY | 5 to 8 (shrunk stimulus text tiny); 10 (near-empty sentence check); 11, 13 (empty card body); no scene titles | Enlarge the stimulus while answering; fill 10, 11 and 13 as narrated; add scene titles. |
| skills-s03 | B | https://youtu.be/wYqgEi0J71g | 1 (tiny thumbnails); 5 to 9 (stimulus, table and marking text tiny); 10 (sparse); no scene titles | Enlarge the compare table and answer text; fill 10; add scene titles. |
| skills-s04 | B | https://youtu.be/dZQvSUxFY8A | 1 (tiny strip); 5 to 8 (stimulus and answer text tiny); 9 (faded band table); 10 (sparse); no scene titles | Enlarge stimulus and answer text; make 9 solid; fill 10; add scene titles. |
| skills-s05 | B | https://youtu.be/4uehJ1QBp2o | 5 to 10 (stimulus and working text tiny); 11 (blank stage, rail only); 13 (empty question card) | Enlarge the working; remove or fill the blank hold in 11; show the question text in 13. |
| skills-s06 | B | https://youtu.be/fKUEvH4i7O0 | 10 (title only); 11 (blank stage, rail only); 13 (two-line card, empty body) | Bring the line-versus-column graphs in with the 10 title; fill 11 and 13. |
| skills-s07 | B | https://youtu.be/NT6MvX6VT6g | 1 (three words in an empty frame); 3 (near-empty card); 5 to 8 (stimulus text tiny); 10 (empty risk table); 15 (sparse card) | Give 1 the three-target visual; enlarge the stimulus; fill the risk table as narrated; fill 15. |
| skills-s08 | B | https://youtu.be/xO7HoISN8-k | 1 (small page sketch and tiles); 5 to 9 (shrunk stimulus and plan text tiny) | Keep the stimulus readable while planning (at least 26 px), or show only the line in use. |
| chem-m6-g04 | A | https://youtu.be/oj-Cp4KMZUY | 8 (one-line question card, empty body) | No action. |
| chem-m7-c01 | A | https://youtu.be/y-galt8f4ow | 1 (faded name chips); 3 (small structural formula) | No action. |
| chem-m7-c03 | A | https://youtu.be/G3nQPPbvO7I | 6 (sparse) | No action. |
| chem-m7-c04b | A | https://youtu.be/S4bQV1cOzS4 | 8, 14 (ghosted earlier steps) | Optional: shorten the 8 fade. |
| chem-m7-c05 | A | https://youtu.be/1qF_486TVQE | 11 (one card in an empty frame) | No action. |
| chem-m7-c06 | A | https://youtu.be/-XVSCs8nHnI | 10 (faded compare table); 11 (title only) | Optional: bring the question card in with the 11 title. |
| chem-m7-c07 | A | https://youtu.be/7dqWjzokvJU | 9 (title only) | No action. |
| chem-m7-c08a | A | https://youtu.be/GJVFRMiNDOk | 9 (title and one line); 10 (one tube) | Optional: show the distil and reflux set-ups in 9. |
| chem-m7-c08b | A | https://youtu.be/j2GPr4yGQHc | 7 (title and one line) | No action. |
| chem-m7-c12 | A | https://youtu.be/Cms4sZ-Sly0 | 2 (small soap bar); 10 (text chips) | No action. |
| chem-m7-c14 | A | https://youtu.be/Mv1CG4fzbaM | none material | No action. |
| chem-m7-g01 | A | https://youtu.be/M0yxewjPCUE | none material | No action. |
| chem-m7-g02 | A | https://youtu.be/PPIwkdv8dC8 | 1 (sparse opener) | No action. |
| chem-m7-g04 | A | https://youtu.be/R5VJ8EsGEp4 | 4 (one line beside the question) | No action. |
| chem-m8-g01 | A | https://youtu.be/RtYZC9fRdVI | 15, 16 (key notes held twice, memory aid unframed) | Optional: frame the memory aid. |

## Summary

Counts (52 videos): A 15, B 32, C 5, ? 0.

- Render defects (C): chem-m6-g03, chem-m7-c10, chem-m7-p05, chem-m8-c01.
- Other C: chem-m7-p06.
- A: chem-m6-g04; chem-m7-c01, c03, c04b, c05, c06, c07, c08a, c08b, c12, c14, g01, g02, g04; chem-m8-g01.

Link check: all 52 ids have exactly one YouTube link, and none duplicates another id's link. The only duplicate in `youtube-links.json` is still chem-m5-c10 carrying chem-m5-c05's link (from batch 2).

Recurring problems:

1. **Font and asset failures in four more videos.** chem-m6-g03, chem-m7-c10, chem-m7-p05 and chem-m8-c01 each switch to a serif fallback part-way through, and three of them also show broken-image icons. The failure always starts mid-video and runs to the key notes, which render correctly. This matches bio-m7-b06 and b10, so the cause is probably a session-level font or asset timeout, not individual designs. chem-m7-p06's run of blank stages may be the same failure without a visible icon. Re-render all five, then add a check to the render pipeline for fonts and images.
2. **Practical videos repeat one template weakness.** Every chem-m6 and chem-m7 practical has the same problems: a risk table with one or two rows in a full-height card, an empty or one-line closing summary box, and a dense key-notes wall. The apparatus plates are strong, so these are B fixes.
3. **Missing scene titles return in chem-m6-c14 and c15**, as in the batch 2 chem-m6 run. The chem-m7 content run has titles throughout.
4. **Tiny text in flow charts and shrunk stimulus cards.** The organic synthesis videos (chem-m7-c13, g03) and the ion-testing videos (chem-m8-c03a, c03b) dim and shrink the flow chart until the labels cannot be read. The skills series shrinks the question stimulus and side rail to about 12 to 14 px while the answer is written.
5. **Skills series layout.** All eight skills videos are readable and staged in principle, but none has hand-font scene titles, several have blank rail-only holds (s05 frame 11, s06 frame 11), and the stimulus shrinks too far. One shared layout fix covers all eight.

Quality is highest in the chem-m7 content run (c01 to c14 and g01, g02, g04, mostly A). The organic structure diagrams, molecule models and test-tube plates there match the Module 5 bar. The C grades all sit in videos with render failures or blank stages.
