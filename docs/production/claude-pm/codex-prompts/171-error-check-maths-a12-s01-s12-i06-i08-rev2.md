# Brief 171: error check, Mathematics Advanced s01 to s12 and i06 to i08, Revision 2

Read `00-standing-rules.md` and brief 144 first, and use its method and file format exactly. This is an error-only check of the Revision 2 repairs to the brief 161 and 162 findings. Do not spawn sub-agents. Make no design edits, speech or commits.

**Inputs:** `lessons/math-a12-s01.md` to `s12.md` and `math-a12-i06.md` to `i08.md` (Revision 2, 4 Nov; each ends with a "Revision 2" section), your brief 161 and 162 reviews (`checks/m-a12sNN-` and `m-a12i0N-learning-review.md` and `-claude-science-check.md`), and `checks/root-decisions-maths-d11-i05.md` items 54 to 66.

**Check:**
- each blocker and should-fix is resolved as its "Revision 2" line claims, and no repair introduced a new maths error;
- the two blockers specifically: s12 scene 8 (380.16 g, with tails recalculated in SymPy) and i07 scene 1 (the rectangle is an estimate; exact −3 m);
- every changed number, row and chip recalculated (`work/brief171/`), including s12's 508.64 and 508.61, the attempt 1 wording and 1006.15 or 1006.16, and s10's 196 cm sentence;
- each visual cue word still occurs in its scene's narration, in order;
- each opening still equals the previous lesson's final frame;
- narration counts and estimated seconds (at most about 570 s; s07 and s08 at least 5,500 characters); i06 was about 561 s, so confirm it stays under the cap;
- no em dashes, no U+2061, Australian spelling, no people, hands or faces.

Write `checks/m-a12sNN-error-check.md` and `checks/m-a12i0N-error-check.md` for each design.

**Hand-in:** to `status.md`, one line per design: clean, or the findings.
