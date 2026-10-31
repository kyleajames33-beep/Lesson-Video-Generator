# Brief 127: reviews of Chemistry M5 G02 Revision 5 and the new Biology M8 P01, plus P01's plates

Read `00-standing-rules.md` and brief 109 first. Use brief 109's method and file formats; Codex writes the reviews and Claude resolves them. This brief can run alongside any other.

| Design (`docs/production/claude-pm/lessons/`) | State | Review file key |
|---|---|---|
| `chem-m5-g02.md` | Revision 5 (31 Oct): a length and format rework of the reviewed Revision 4 | `m5g02` |
| `bio-m8-p01.md` | Revision 1 (31 Oct): a new practical design | `m8p01b` |

## Root decisions (settled; confirm only)

- **G02:** the types moved out (temperature with an energy profile, reading a graph backwards, equal gas count, industrial conditions, open against closed) go to a new video, `chem-m5-g02b`. It is now in the Module 5 route after `c09`. Don't review that video; it isn't designed yet.
- **P01:**
  - Two flasks of warm water, one wrapped, with no animal or human participant.
  - Secondary data is left out because of length.
  - The builder may import P02's lesson parts.
  - The lesson key is `m8p01b`.

## 1. Learning review

Follow `docs/production/student-learning-review.md` and recalculate every number.

- **G02:** check that the cut version still teaches each kept question type completely to a student starting Year 12. Check that no kept line relies on a removed scene (the agent flagged `try2-answer` and the `q3` family sentence). Check that each question card carries every given and condition the walkthrough needs.
- **P01:** check against `bio-m8-b02` for double-teaching. Check that the method can be planned and evaluated in skills S07's language, and check the risk table.
- **Length:** both are near 567 s, so any repair must be length-neutral or name a cut.

Write `checks/<key>-learning-review.md`.

## 2. Science check

- **G02:**
  - every kept sentence against Revision 4 and its resolved checks (`checks/g02-check.md`, `checks/g02-claude-science-check.md`);
  - the science of every new linking phrase;
  - the three dotpoints, word for word, including the curly apostrophe in "Le Chatelier’s".
- **P01:**
  - **The 45 °C starting temperature and the teacher's 50 °C preparation limit:** check them against NSW Department of Education or other Australian school guidance on hot water, with a source. If guidance is stricter, give the 40 °C fallback values.
  - The cooling-curve example data and the rates (about 0.6 against 0.3 °C per minute) and means (12.0 against 6.2 °C).
  - The limits of the insulation model.
  - The surface-area-to-volume attempt.
  - The dotpoint, word for word.

Write `checks/<key>-claude-science-check.md`.

## 3. Plates (P01 only)

Paint the matched pair `m8-flask-bare-v1.png` and `m8-flask-wrapped-v1.png` from P01's "Codex asset brief", in brief 109's style, with a 50% overlay check. Show apparatus only: no people or hands. Add the provenance to `assets/brief127-provenance.json` and the QA views to `assets/brief127-qa/`.

## 4. Site corrections log

Add P01's two site findings to `site-corrections-m8.md`:
- L02's "Insulation is always on" claim;
- L02's missing practical card.
Give the exact old text, verified in the read-only site file. Add any G02 site findings to `site-corrections-m5.md`.

Hand in to `status.md` with one line per design giving its blocker and should-fix counts. No design edits, speech, renders or commits.
