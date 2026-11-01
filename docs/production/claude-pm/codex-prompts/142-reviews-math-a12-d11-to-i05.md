# Brief 142: learning reviews and maths checks of math-a12 d11 to d19 and i01 to i05

Read `00-standing-rules.md` and brief 134 first, and use brief 134's methods and file formats exactly. Run this after briefs 140 and 141. Work through the fourteen lessons in order, one at a time. Do not spawn sub-agents. No design edits, speech, renders or commits.

All fourteen designs are at Revision 1 (i04 has a root edit to scene 1, and d10 a root edit to its handoff). Root's decisions on the designers' open questions are in `checks/root-decisions-maths-d11-i05.md`; confirm them, and don't reopen them unless one teaches a wrong idea. Route: `docs/production/maths-a12-video-route.json` (2024 syllabus only).

| Lesson | Review key | Main question |
|---|---|---|
| `lessons/math-a12-d11.md` | `m-a12d11` | Why does differentiating tan x give sec squared x? |
| `lessons/math-a12-d12.md` | `m-a12d12` | How do reciprocal trig functions change when x changes? |
| `lessons/math-a12-d13.md` | `m-a12d13` | How do we keep inner factors and domains in the remaining composites? |
| `lessons/math-a12-d14.md` | `m-a12d14` | How do a point and derivative determine tangent and normal lines? |
| `lessons/math-a12-d15.md` | `m-a12d15` | When is a continuous join differentiable? |
| `lessons/math-a12-d16.md` | `m-a12d16` | How does the changing gradient reveal concavity and inflection? |
| `lessons/math-a12-d17.md` | `m-a12d17` | How do the function and its two derivative graphs constrain a sketch? |
| `lessons/math-a12-d18.md` | `m-a12d18` | How do a constraint and physical domain determine an optimum? |
| `lessons/math-a12-d19.md` | `m-a12d19` | How do proportional rates produce exponential growth and decay? |
| `lessons/math-a12-i01.md` | `m-a12i01` | How does a family of primitives become one curve? |
| `lessons/math-a12-i02.md` | `m-a12i02` | How do algebra and a reverse chain rule reveal power primitives? |
| `lessons/math-a12-i03.md` | `m-a12i03` | Why does an exponential primitive divide by the inner rate? |
| `lessons/math-a12-i04.md` | `m-a12i04` | Why does a reciprocal primitive need an absolute-value log? |
| `lessons/math-a12-i05.md` | `m-a12i05` | Which trig primitives reverse the derivative rules? |

## For each lesson

**Learning review** (`docs/production/student-learning-review.md`), traced from the route's entry knowledge. Check in particular:
- earlier videos are recalled, not re-taught;
- the cause is visible on the graph before the rule;
- conditions are kept where omitting them would teach a wrong idea: asymptote exclusions (d11 to d13, i05), the join conditions (d15), f″ = 0 as only a candidate (d16, d17), physical domains and limits (d18), the absolute value and the constant on each branch (i04), "+ C" and the derivative check (i01 to i05);
- neither attempt card gives away its answer or its sign;
- each opening frame matches the previous lesson's final frame exactly (d10 to d11 through i04 to i05);
- the review items each design lists for the learning reviewer, and root decisions 6, 10, 16 and 17.

Repairs must be length-neutral or name a cut, and each lesson must stay at or under about 570 s (d17 is at about 567 s: any addition there needs a named cut).

**Maths check.** Recalculate every value in each design (SymPy in `work/brief130-python`), including every number in its "Numbers used" table. Check every quoted 2024 syllabus point word for word with its codename, against fresh official pages. Settle root decisions 6 and 7 (the d11 "every function" claim; the Year 11 trig facts d12 relies on).

**Site findings.** First correct site log item 50 in `site-corrections-maths-a12.md` (lesson 5 card 07 does derive sec, cosec and cot; root decision 18). Then add every design's confirmed site findings (each design lists them in Decisions or its error-check brief) without duplicating existing items.

**Output:** for each lesson, `checks/m-a12dNN-learning-review.md` and `checks/m-a12dNN-claude-science-check.md` (and `m-a12iNN-...`).

Hand in to `status.md` with one paragraph per lesson: blocker, should-fix and optional counts, and the length.
