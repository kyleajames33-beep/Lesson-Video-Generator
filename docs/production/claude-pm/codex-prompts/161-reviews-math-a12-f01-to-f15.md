# Brief 161: learning reviews and maths checks of math-a12 f01 to f15 (Revision 1)

Read `00-standing-rules.md` and briefs 142 and 155 first, and use their methods and file formats exactly. Do not spawn sub-agents. Make no design edits, speech, renders or commits.

**Designs.** `lessons/math-a12-f01.md` to `f15.md` (keys `m-a12fNN`) cover sequences, series and financial mathematics (2024 syllabus). They were written overnight. Reconcile each design with:
- its pack in `pre-design/maths-a12/`, if one exists;
- `docs/production/maths-a12-video-route.json`;
- `docs/production/programme/maths-a12-course-outline.json`.

Where a design has only a draft route entry in its Decisions, propose route changes in the review; root edits the route.

**Root decisions.** Confirm the items in `checks/root-decisions-maths-d11-i05.md` that name f01 to f15:
- aₙ, "also written Tₙ";
- the payment symbol M;
- "round up to be sure" for reach-a-target questions.

**For each lesson:**
1. **Learning review** (`docs/production/student-learning-review.md`), traced from the route's entry knowledge. Pay attention to:
   - term number against term value;
   - the cause of each sum formula (pairing; shift and subtract);
   - limiting sums, with |r| < 1 stated before use;
   - compounding periods and the rate per period;
   - annuity and loan recurrences built one period at a time;
   - rounding direction.
2. **Openings.** Each opening equals the previous lesson's handoff frame.
3. **Maths check.** Recalculate every value in SymPy (`work/brief161/`). Quote every 2024 point verbatim with its codename, from fresh official pages.
4. **Repairs.** Keep repairs length-neutral, or name the cut that funds them. Each lesson stays at or under about 570 s.
5. **Site findings.** Add confirmed site findings to `site-corrections-maths-a12.md` without duplicates.

Write `checks/m-a12fNN-learning-review.md` and `checks/m-a12fNN-claude-science-check.md`.

Hand in to `status.md` with one paragraph per lesson.
