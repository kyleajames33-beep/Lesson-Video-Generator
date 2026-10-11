# Brief 03: independent fact and screen check (reusable)

Read `00-standing-rules.md` first. Claude will tell you which lesson to check, for example: "Run brief 03 on lesson mould".

## Inputs Claude gives you

- The lesson's narration: the `voiceover.text` fields in the lesson JSON path Claude names.
- The on-screen text: the strings in the scene file Claude names (headings, labels, callouts, cards, key notes).
- A folder of still frames, if Claude names one.
- The matching site extract in `docs/production/claude-pm/site-extracts/`.

## Check for, and report only

1. **Science errors**: a statement that is false or would lose marks in an HSC answer.
2. **Syllabus and site mismatch**: content that contradicts the site lesson or the NSW syllabus, or a term used before it is taught.
3. **Screen problems in the stills**: text overlapping text or artwork, text cut off, a label pointing at the wrong thing, unreadable small text, a diagram that shows something scientifically wrong.
4. **Copy problems**: typos, em dashes (U+2014), production words such as "supplied", "model" used as filler, "production route".

## Do not report

- Style preferences, pacing opinions or "could be clearer" suggestions.
- Missing caveats or edge cases. Do not recommend adding hedges. Only report a missing condition if leaving it out makes a statement false.

## Output

Write `docs/production/claude-pm/checks/<lesson>-check.md` with a table: `#`, `type` (science, syllabus, screen, copy), `where` (scene id and the exact words, or the still file name), `problem` (one sentence), `fix` (one short suggested correction). If you find nothing in a category, write "None found". End with a one-line count of findings.
