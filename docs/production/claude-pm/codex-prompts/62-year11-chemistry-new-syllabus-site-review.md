# Brief 62: science review of the draft new-syllabus Year 11 Chemistry site lessons

Read `00-standing-rules.md` and `49-year11-new-syllabus-scoping.md` first. The 2025 Chemistry Year 11 lessons (focus areas fa1 to fa3) sit in the site's `_new-syllabus-2027/` folder. They have never been reviewed or gated. New Chemistry Year 11 starts in Term 1 2028, and every video will be built from these pages, so they must be correct first.

**Do not edit the site** (`C:/Users/kygs/hscscience`, read-only). Review only.

For every lesson in that folder:
1. **Check every science statement,** worked example, number, equation, unit, definition and practice-question answer against reliable sources and the new syllabus ledger `docs/production/programme/syllabus/chem-new-y11.json` (brief 45). Recompute every calculation.
2. **Check syllabus fit:** each lesson covers the content points it claims; list content points with no lesson, and lesson content outside the new course.
3. **Check completeness:** note placeholders, missing sections, broken interactive items, and the visual standard against `subjects/chemistry/chemistry-visual-standard.md`.

**Output:**
- `docs/production/claude-pm/site-corrections-y11-chem-new.md`, in the format of `site-corrections.md`: lesson, quote, problem, correct statement, source link. Group the issues by severity: wrong science, misleading, incomplete, style.
- `docs/production/programme/y11-chem-new-site-review.md`: a summary table per lesson (status, number of errors, syllabus gaps) and an overall readiness verdict.

Hand in to `status.md` with the error counts. The owner will decide whether to fix the site before video design.
