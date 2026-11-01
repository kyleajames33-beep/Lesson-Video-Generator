# Brief 131: reviews of math-a12-d02, an error check of d01 Revision 2, and three small kit additions

Read `00-standing-rules.md` and brief 130 first, and use the same methods and file formats. This brief can run alongside any other.

## 1. math-a12-d02: learning review and maths check

`lessons/math-a12-d02.md` is at Revision 1; its review key is `m-a12d02`. It follows the d01 template (Revision 2). Its root decisions are listed under the status line; confirm them, but don't reopen them.

**Learning review.** Follow `docs/production/student-learning-review.md`, tracing from the entry knowledge in `docs/production/maths-a12-video-route.json`. Check:
- that d01 is recalled, not re-taught;
- that the gradient ÷ height readout makes "every exponential's gradient is a fixed multiple of its height" visible before the rule;
- that the a < 1 and a = 1 cases are clear;
- whether attempt 2 part (b) gives away the sign;
- whether relabelling the handoff axis as y = ln x gives away d03.

The design sits at about 570 s, so any repair must be length-neutral or name a cut. List anything that should change in the template for d03 to d10 under "Template findings".

**Maths check.** Recalculate every value:
- the secant slopes 0.828, 0.718 and 0.696;
- ratios of 0.693, 1.099, 1 and 1.386;
- the 1.44 stretch;
- 8 ln 2 ≈ 5.55, ln 5 ≈ 1.61 and −(ln 2)/4 ≈ −0.173.

Also check:
- the rule's scope (a > 0, including a = 1);
- the memory aid;
- that every quoted 2024 syllabus point matches the official page and its codename.

Add the design's confirmed site findings to `site-corrections-maths-a12.md`.

Write `checks/m-a12d02-learning-review.md` and `checks/m-a12d02-claude-science-check.md`.

## 2. Error-only check of d01 Revision 2

Use brief 112's method on `lessons/math-a12-d01.md` (Revision 2). Confirm that the brief 130 repairs are correct and complete, that no cue quotes removed wording, and that the narration is 5,500 to 6,800 characters and at most about 570 s. Write `checks/codex-check-131.md`.

## 3. Kit additions

Add these to the maths kit from brief 129, with the same rules. Also fix the three items in `checks/root-review-129.md`.

1. **Secant stops:** `SecantToTangent` holds the second point at given x values (for example 0.5, 0.1 and 0.01) on cue.
2. **Readout panel:** a panel placed beside its point, or joined to it by a leader, with an optional gradient ÷ height ratio chip. `TangentTriangle` uses this panel instead of its fixed-corner readouts.
3. **Numeric dial:** a dial for a sweeping parameter (for example the base a from 2 to 3).

Re-render the affected pilot stills, and record them in `checks/codex-build-131.md`.

Hand in to `status.md`. No design edits, speech or commits.
