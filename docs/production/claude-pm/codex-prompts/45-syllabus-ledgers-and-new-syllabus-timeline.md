# Brief 45: syllabus ledgers for every module, and the new-syllabus timeline

Read `00-standing-rules.md` first. Claude needs an exact, quotable list of every syllabus content point for each course, plus the facts about when the new NSW Stage 6 science syllabuses take over.

1. **2017 syllabus ledgers** for Year 12 Chemistry and Year 12 Biology, Modules 5 to 8.
   - One JSON file per subject: `docs/production/programme/syllabus/chem-2017-y12.json` and `bio-2017-y12.json`. Create the folders.
   - Shape: `{module, moduleTitle, inquiryQuestion, contentPoints: [{id, text, depthStudyOrPractical: bool}]}`.
   - Quote every content point word for word from the official NESA document, with the URL and page.
   - Give each point a short stable id like `C5-IQ2-03`.
2. **New syllabus ledgers.** The site's Year 11 Biology already uses "focus areas" (fa1 cells as the basis of life, fa2 cells to systems, fa3 evolution and ecosystems).
   - Find the official new NSW Stage 6 Biology and Chemistry syllabuses (NESA): their structure (focus areas, outcomes, content points) for Year 11 and Year 12.
   - Write `bio-new-y11.json`, `chem-new-y11.json`, and the Year 12 versions if published. Use the same shape, with the focus area in place of the module.
3. **Timeline.** Write `docs/production/programme/syllabus/timeline.md` covering:
   - when the new syllabuses start for Year 11 and for Year 12, and the first HSC examined under them;
   - whether the 2017 Year 12 course is still examined in 2026 and 2027;
   - anything NESA says about the transition.

   Quote NESA with links. If something is not published, say so plainly.
4. **Physics, and Maths Advanced and Standard (scoping only).** Write `docs/production/programme/syllabus/physics-maths-overview.md` covering:
   - the current and new syllabus status;
   - the module or topic list for each year;
   - the number of content points.

   Do not write the full ledgers yet.

Hand in to `status.md`, listing anything you could not find.
