# Task: fix the Year 11 Mathematics Advanced site lessons (owner, 16 Nov 2026)

The owner said: "website gaps and website errors need to be fixed". The findings are in `docs/production/claude-pm/site-corrections-maths-a11.md`, and per-point coverage is in `docs/production/programme/syllabus/maths-advanced-2024-y11-crosswalk.json` (25 partial, 6 missing).

**Where to work:** the clone at `C:\Users\kygs\teaching-app-fix` (repo `kyleajames33-beep/Teaching-APP`). Never work in `C:\lesson-video-generator`. Read that repo's `WORKING-RULES.md`, `CLAUDE.md` and `docs/BEFORE-MERGE.md` first and follow them: one PR per theme, run the local gates (`ci:precommit`, `preflight`, Node 22) until green before one push, and no draft-then-push churn. Merging needs the owner's go; do not merge.

**PR 1: wrong maths and notation (fix now).**
- The four copy errors S11-01 to S11-04, using the exact corrections in the findings file.
- Gradient-intercept form `y = mx + b` changes to `y = mx + c` (working-with-functions lessons 03, 09 and 10, and any other Year 11 page).
- `csc` changes to `cosec` in the Year 11 trig lessons, in text, maths and question data. Check that answer-checking code accepts both spellings where students type answers.

**PR 2: syllabus gaps.**
- Extend the variation lessons (working-with-functions lessons 20 and 21) to y = kxⁿ and y = k/xⁿ.
- Add the six missing points, each as a short section in the most fitting existing lesson, in that lesson's own format, with a worked example and a check question:
  - √(x²) = |x| by substitution;
  - sec, cosec and cot at 0° and 90° by limiting triangles;
  - sec = r/x, cosec = r/y and cot = x/y on a circle of radius r (and the ratios on a radius-r circle generally);
  - the gradient function of aˣ is k·aˣ;
  - enlargement by replacing both x and y;
  - the proof that P(A|B) = P(A) implies P(B|A) = P(B).
- Add the dilation framing (replace x by x/k).
- Cover the partial points the crosswalk lists, where a short addition closes them.
- Recalculate every number with SymPy.

**PR 3: structure.**
- The 13 retired-but-live pages: follow the repo's existing retirement convention (find how other subjects retire a page). Never delete a page a student may have progress on without checking how progress is keyed.
- Fix the Year 12 titles on probability lessons 05, 06, 08, 09 and 10, and add a "beyond Year 11" note to the out-of-scope lessons.
- **Do not change lesson ids** (`maths-adv-y12-m5-*`, mismatched numbers). They may key student progress in Supabase. List them for the owner instead.

**Report:** in plain language, per PR, what a student will see change, what was verified and what was not, then ask the owner whether to merge. Note: the owner is blind, so keep reports short and screen-reader friendly, with no tables of symbols where a sentence will do.
