# Rendered-video quality audit rubric (6 Nov 2026)

Grade each contact sheet (16 evenly spaced frames, at `work/quality-audit/sheets/<id>.jpg`) against the Module 5 reference sheets `docs/production/claude-pm/assets/maths-std-ref-chem-m5-g01.jpg` and `maths-std-ref-bio-m5-b06a.jpg`, and `docs/production/claude-pm/maths-visual-standard.md` items 2 to 9 and its build gate. The rejected example is `maths-std-d01-v1-rejected.jpg`.

Grades:
- A: at the Module 5 bar. No action.
- B: small fixes worth a re-render (for example tiny or cramped text, a mostly empty frame during working, a wall-of-text key notes screen, one long static stretch, a missing framed answer). Narration reusable.
- C: below the bar. Rebuild scenes (several static stretches, bare text-only scenes where an organism, apparatus or process should be shown, no images, slideshow feel).
- ?: stills look fine but motion or pacing cannot be judged; flag for an owner spot-check on YouTube.

For each video give: id, grade, the frames at fault (1 to 16, row by row), and a one-line concrete fix. Be strict but fair; practice videos are naturally text-heavier, so judge whether the text is readable and staged, not merely present.

Render defects (always grade C and list first, whatever the design quality): broken-image icons, black or blank frames mid-video, or text in a serif fallback font (Times-like) instead of the house sans and hand fonts. These mean an asset or font failed to load during the render.
