# Prompt for a Claude session in the site repo (C:\Users\kygs\hscscience)

Paste everything below the line into a new Claude Code session opened in `C:\Users\kygs\hscscience`.

---

The owner approved fixing the science errors in the draft 2025-syllabus Year 11 Chemistry lessons (`_new-syllabus-2027/`, focus areas 1 to 3). Follow this repo's CLAUDE.md throughout.

**Step 0, repair git first.** On 18 October this checkout reported `core.bare=true` and "this operation must be run in a work tree". That is the damage pattern CLAUDE.md describes in the worktree note. Run `git ls-remote` before trusting any local ref. Then repair the config, branches and `origin/main` as CLAUDE.md and FINDINGS-LOG.md describe, and confirm `git status` works. Do not push anything until the repo is healthy.

**Step 1, the corrections list.** It is `C:\lesson-video-generator\docs\production\claude-pm\site-corrections-y11-chem-new.md`, written by Codex review brief 62. It holds 45 lesson-level jobs:
- FA1: 19
- FA2: 10
- FA3: 16

Each entry gives the lesson, a quote, the problem, the correct statement and a source. The summary is `C:\lesson-video-generator\docs\production\programme\y11-chem-new-site-review.md`.

Fix the entries in this order:
1. Wrong science and calculations (13).
2. Misleading (14).
3. Incomplete content (18).
4. The shared issues:
   - the broken footer link on all 75 pages;
   - launch comments that say 2027 instead of 2028.

Verify each fix against its source before editing, and recompute every number you change. Keep each page's existing structure, components and style.

**Step 2, ship.**
- Work on a new branch.
- Run this repo's gates (`ci:precommit`, `preflight` and the pre-push chain, as CLAUDE.md says).
- Open a PR listing each fix with its correction-list entry.
- Do not merge to main without the owner's OK.

**Leave alone:**
- Practical coverage gaps and pages missing a subject SVG. List them in the PR as follow-ups; the owner will decide on those separately.

**Later batch:** Codex brief 68 is drafting old-text and new-text fixes for the Year 12 Module 7 and 8 and Year 11 Biology lessons, in `C:\lesson-video-generator\docs\production\claude-pm\site-fixes-draft-m7-m8-y11bio.md`. When that file exists, apply it the same way in a second PR.
