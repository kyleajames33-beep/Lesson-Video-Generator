# Brief 113: Year 12 Chemistry and Biology coverage audit (M5 to M8)

Read `00-standing-rules.md` first. This brief is read-only: no uploads, edits to published videos, design edits or commits. It can run alongside brief 112.

The owner wants to know how close Year 12 Chemistry and Biology are to finished before Year 11 starts.

## 1. Published against the route

Compare each route's videos with what is actually public on YouTube. The routes are:
- `docs/production/module5-video-route-2026-10-10.json`
- `module6-video-route-draft.json`
- `module7-video-route-draft.json`
- `module8-video-route-draft.json`

Also apply the changes recorded in `module6-`, `module7-` and `module8-route-review-claude.md`, such as split, merged or renamed IDs.

The upload records are spread across files and their formats differ. Use all of them:
- `claude-pm/youtube/wave1-uploads.json` to `wave5-uploads.json`
- the readback files
- `caption-replacement-2026-10.json`
- `scripts/audit-published-video-records.mjs`, where it helps

Read the public playlists back where you can.

For each module and subject, list every route video under one of these:
- **Public:** give the URL.
- **Built or rendered, not uploaded.**
- **Designed:** give its Revision.
- **Held:** B14, B15 and Biology G02 (cultural review).
- **Not started.**
- **Dropped or merged:** cite the route review line.

Flag:
- any public video that isn't on the route or in a playlist;
- any duplicate;
- the six videos with burned-in captions (bio-m5-b02a, b02b, b02c and b03a; chem-m5-c03 and c04a);
- any old-engine video still standing in for a route lesson.

## 2. Syllabus coverage gaps

Use the content checklist from `course-progression-plan-2026-10-09.md`. List each Year 12 Chemistry and Biology dotpoint and depth study practical that no public or designed video covers.

## 3. Year 11 readiness

List what exists for Year 11 Chemistry and Biology Modules 1 to 4: site lessons, site extracts, routes, designs and old videos. Don't plan the modules; inventory only.

Write `docs/production/claude-pm/checks/coverage-audit-2026-10-30.md` with a summary table at the top: one row per module and subject, with counts per state. Put the machine-readable detail in `coverage-audit-2026-10-30.json`. Hand in to `status.md` with the summary table.
