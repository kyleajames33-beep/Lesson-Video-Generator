# Brief 22: site-lesson extracts for all of Module 6 (both subjects)

Read `00-standing-rules.md` first. This repeats briefs 02 and 08 for Module 6, so Claude can plan and design the Module 6 videos while Module 5 finishes.

## Source lessons (read-only)

Site repo: `C:/Users/kygs/hscscience`. Read the full lesson body (all sections, worked examples, activities, misconception boxes, practical notes) of:

- Chemistry Year 12 Module 6 (Acid/Base Reactions): `subjects/chemistry/year12/module6/lesson01.sa.html` to `lesson19.sa.html`
- Biology Year 12 Module 6 (Genetic Change): `subjects/biology/year12/module6/lesson01.sa.html` to `lesson19.sa.html`

If a lesson's `LNN-COHERENCE-SIGNOFF.md` exists, read it for context, but extract from the lesson page. Also note which lessons are checkpoints or consolidation pages (no new content).

## Output

1. One Markdown file per lesson in `docs/production/claude-pm/site-extracts/`, named `chem-m6-l01.md` to `chem-m6-l19.md` and `bio-m6-l01.md` to `bio-m6-l19.md`. Use exactly the nine headings from brief 02 (see `chem-m5-l09.md` for a finished example). Heading 9: "No current video script".
2. `docs/production/claude-pm/site-extracts/m6-index.md`: one table per subject with lesson number, page title, main question, the 2017 content point(s) it covers (quote the shortest identifying phrase), and whether it is new content, a practical, a consolidation page or a checkpoint.

Syllabus: Year 12 is taught to the **2017** syllabus in both subjects. Under heading 2, quote the 2017 content points; if the page also lists 2025 content, note it in one line only.

## Science errors

While extracting, if a page states something scientifically wrong (a wrong value, unit, equation, definition or worked answer), do not correct it in the extract (quote the page faithfully), but list it in `docs/production/claude-pm/site-corrections-m6.md` with lesson, quote, the problem, the correct statement and a source link, in the same format as `site-corrections.md`. Only clear errors, not style.

## Rules

Quote the page faithfully. No teaching ideas or opinions of your own in the extracts. Each extract under about 600 words. No em dashes. Work in order (Chemistry 1 to 19, then Biology 1 to 19) and append one hand-in to `status.md` when finished (files created, anything you could not complete, questions for Claude). If you run out of time, hand in what is finished and say where you stopped.
