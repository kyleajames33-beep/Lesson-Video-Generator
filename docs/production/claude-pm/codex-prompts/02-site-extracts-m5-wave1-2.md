# Brief 02: site-lesson extracts for Module 5 waves 1 and 2

Read `00-standing-rules.md` first.

## Goal

Videos must match the content students see on the HSCScience site. Read the site lessons below and produce one structured extract per lesson so Claude can design the video without reading the full HTML.

## Source lessons (read-only)

The site repo is at `C:/Users/kygs/hscscience`. Read the full lesson body (all sections, worked examples, activities, misconception boxes, practical notes) of:

- Chemistry Year 12 Module 5: `subjects/chemistry/year12/module5/lesson01.sa.html`, `lesson02.sa.html`, `lesson03.sa.html`, `lesson04.sa.html`
- Biology Year 12 Module 5: `subjects/biology/year12/module5/lesson01.sa.html`, `lesson02.sa.html`, `lesson03.sa.html`, `lesson04.sa.html`

If a file name differs, find the matching lesson in that folder and note the real path.

## Output

One Markdown file per lesson in `docs/production/claude-pm/site-extracts/`, named `chem-m5-l01.md`, `bio-m5-l01.md` and so on. Use exactly these headings:

1. **Title and main question** (the lesson's own title; the question it answers, in one sentence).
2. **Syllabus content covered** (dot points or outcomes named on the page, quoted briefly).
3. **Key ideas in order** (numbered, one plain sentence each, in the order the page teaches them).
4. **Key terms** (term: the page's own short definition).
5. **Worked examples** (each with its exact numbers, givens and answer as on the page).
6. **Misconceptions the page addresses** (what students wrongly think, and the page's correction).
7. **Practical or real-world examples used** (named examples, organisms, apparatus, data).
8. **Activities and questions** (list the question types and one or two representative questions verbatim).
9. **Anything the current video script contradicts or omits.** Compare with the current video script in the lesson JSON listed below and list concrete mismatches only.

Current video scripts to compare against (read the `voiceover.text` fields):

- C1: `docs/production/module5-starters-2026-10-10/chemistry/teaching-reset/measured/lesson.json`
- B1: `docs/production/module5-starters-2026-10-10/biology/teaching-reset/measured/lesson.json`
- C2: `docs/production/module5-seconds-notes-2026-10-10/chemistry/teaching-reset/measured/lesson.json`
- B2: `docs/production/module5-seconds-notes-2026-10-10/biology/teaching-reset/measured/lesson.json`

For lessons 3 and 4, write "No current video script" in heading 9.

## Rules

Quote the page faithfully. Do not add your own teaching ideas, caveats or opinions. Keep each extract under about 600 words.
