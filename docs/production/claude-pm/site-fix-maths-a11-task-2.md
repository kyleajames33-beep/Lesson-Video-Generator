# Task 2: more Year 11 Mathematics Advanced site fixes (17 Nov 2026)

This follows task 1 (`site-fix-maths-a11-task.md`). Same repo, same rules: work only in the clone `C:\Users\kygs\teaching-app-fix` (repo `kyleajames33-beep/Teaching-APP`), never in `C:\lesson-video-generator`. Read that repo's `WORKING-RULES.md`, `CLAUDE.md` and `docs/BEFORE-MERGE.md` and follow them: one PR per theme, run the local gates (`ci:precommit`, `preflight`, Node 22) until green before one push, no draft-then-push churn. Do not merge; the owner decides.

The findings are sections 5 to 8 of `C:\lesson-video-generator\docs\production\claude-pm\site-corrections-maths-a11.md` (read it there; do not edit it). Each entry gives the file, the old text, the correction and the evidence. If task 1's PRs are still open, branch from main and keep these separate; do not mix them in.

**PR A: wrong answers and wrong reasons (fix first).** Every confirmed copy error in sections 5 to 8 that changes a number, an answer or a reason. The most important:
- graph-transformations lesson04 reads transformations as translate first, then dilate; teach the correct order, and replace its "order matters" task (its two moves give the same graph in either order) with a pair that really differs;
- graph-transformations lesson05's model answer keeps x-intercepts fixed under a vertical translation (they become 3 ± √3, not 0 and 6);
- probability lesson14 gives "infinitely many values" as the reason P(X = x) = 0 for a continuous variable; the reason is that a single value has no width (probability comes from intervals);
- probability lesson07's wrong quartiles and the self-contradicting drill answer;
- the trigonometry items S11-11 to S11-18 (the radian definition formula, the inverse-cosine quadrant claim, the ladder reason, the HSC marking claim, the ambiguous-case formula and rounding, parallax called a secant, a piano note called a pure sine wave, inverse functions "always" giving the related acute angle).
Recalculate every changed number with SymPy and show the check in the PR description.

**PR B: minor wording and notation.** The "minor" lists in sections 5 to 8, and notation: write |A| for the number of elements (n(A) may stay as an alternative), U for the universal set, and the transformation form y = k f(a(x + b)) + c where a page states the general form. Remove gambling copy (the Oz Lotto example) and replace it with a neutral example.

**PR C: coverage gaps** listed in sections 7 and 8 (for example: no radius-r definitions of the ratios, no negative-angle results together, no major sector or segment example, graphs in radians only, no "replace y by y − b" or "replace y by −y" forms, no enlargement, no |A| or infinite set, no spreadsheet frequency table, the missing independence proof). Add each as a short section in the most fitting existing lesson, in that lesson's own format, with a worked example and a check question.

**Report:** in plain language, per PR, what a student will see change, what was verified and what was not, then ask the owner whether to merge. The owner is blind: keep it short and screen-reader friendly, sentences rather than tables of symbols.
