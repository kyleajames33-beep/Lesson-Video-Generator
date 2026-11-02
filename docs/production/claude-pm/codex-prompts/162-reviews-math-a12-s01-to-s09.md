# Brief 162: learning reviews and maths checks of math-a12 s01 to s09 (Revision 1)

Read `00-standing-rules.md` and briefs 142 and 155 first, and use their methods and file formats exactly. Do not spawn sub-agents. Make no design edits, speech, renders or commits.

**Designs.** `lessons/math-a12-s01.md` to `s09.md` (keys `m-a12sNN`) cover probability and continuous random variables, up to the normal model (2024 syllabus).
- Reconcile each design with its pack in `pre-design/maths-a12/` (if one exists) and with the course outline.
- Each design's draft route entry is in its Decisions. Propose route changes in the review; root edits the route.

**Root decisions.** Confirm items 56 to 59 in `checks/root-decisions-maths-d11-i05.md`.

**For each lesson:**
1. **Learning review**, traced from the entry knowledge. Pay attention to:
   - probability as area, not height;
   - the conditions on a density: non-negative, with total area 1;
   - F as accumulated area, including its flat pieces;
   - the mean as a balance point;
   - the cause of the variance shortcut;
   - P(X = a) = 0 for continuous variables;
   - the beyond-course ½ sin x case in s08;
   - the peg-board argument for the bell in s09 (does it overclaim?).
2. **Openings.** Each opening equals the previous lesson's handoff frame.
3. **Maths check.** Recalculate every value in SymPy (`work/brief162/`). Quote every 2024 point verbatim with its codename.
4. **Repairs.** Keep repairs length-neutral, or name the cut that funds them. Each lesson stays at or under about 570 s. Cuts may not take s07 or s08 below 5,500 characters.
5. **Site findings.** Add confirmed site findings to `site-corrections-maths-a12.md` without duplicates.

Write `checks/m-a12sNN-learning-review.md` and `checks/m-a12sNN-claude-science-check.md`.

Hand in to `status.md` with one paragraph per lesson.
