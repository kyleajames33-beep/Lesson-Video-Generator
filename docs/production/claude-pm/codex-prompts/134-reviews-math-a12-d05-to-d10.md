# Brief 134: learning reviews and maths checks of math-a12 d05 to d10

Read `00-standing-rules.md` and briefs 131 to 133 first, and use the same methods and file formats. Run this after brief 133 (it shares `site-corrections-maths-a12.md`). Work through the six lessons in order, one at a time. Do not spawn sub-agents.

All six designs are at Revision 1. Root's decisions on their open questions, and root's recalculated attempt answers, are in `checks/root-decisions-maths-d05-d10.md`. Confirm those decisions; don't reopen them unless one teaches a wrong idea.

| Lesson | Review key | Main question |
|---|---|---|
| `lessons/math-a12-d05.md` | `m-a12d05` | How do the sine and cosine graphs reveal their derivatives? |
| `lessons/math-a12-d06.md` | `m-a12d06` | How do we apply the chain rule to exponential, log and trig functions? |
| `lessons/math-a12-d07.md` | `m-a12d07` | How do both factors contribute to a product derivative? |
| `lessons/math-a12-d08.md` | `m-a12d08` | How do we differentiate a quotient and keep its domain? |
| `lessons/math-a12-d09.md` | `m-a12d09` | How do derivative signs identify increasing, decreasing and turning? |
| `lessons/math-a12-d10.md` | `m-a12d10` | Which valid candidate gives the global maximum or minimum? |

## For each lesson

**Learning review.** Follow `docs/production/student-learning-review.md`, tracing from the entry knowledge in `docs/production/maths-a12-video-route.json`. Check in particular:
- the previous videos are recalled, not re-taught;
- the cause is visible on the graph before the rule or proof;
- conditions are kept where omitting them would teach a wrong idea (radians in d05; domains in d06 to d08; excluded values splitting intervals in d09; endpoints and corners in d10);
- neither attempt card gives away its answer or its sign;
- each opening frame matches the previous lesson's handoff frame (d04 to d05, through d09 to d10);
- the lesson-specific questions in the root decisions file (items 9 and 14).

Repairs must be length-neutral or name a cut, and each lesson must stay at or under about 570 s. Give template findings separately.

**Maths check.** Recalculate every value in each design (SymPy is available in `work/brief130-python`), including every number in its "Numbers used" table and calculation list. Check every quoted 2024 syllabus point word for word with its codename, against fresh official pages. For d06, settle root decision 5: are the double-angle identities in the 2024 Mathematics Advanced content? Quote the official point if they are.

**Site findings.** Add each design's confirmed site findings to `site-corrections-maths-a12.md`, without duplicating existing items.

**Output:** for each lesson, write `checks/m-a12d0N-learning-review.md` and `checks/m-a12d0N-claude-science-check.md` (and `m-a12d10-...` for d10).

Hand in to `status.md` with one paragraph per lesson: blockers, should-fix and optional counts, and the length. No design edits, speech or commits.
