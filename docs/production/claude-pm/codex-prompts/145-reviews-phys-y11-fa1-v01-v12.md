# Brief 145: learning reviews and physics checks of phys-y11-fa1-v01 to v12

Read `00-standing-rules.md`, briefs 138 and 142 (methods and file formats) and brief 137 first. Run this after brief 144. Work through the twelve designs in order, one at a time. Do not spawn sub-agents. No design edits, speech, renders or commits.

Designs: `lessons/phys-y11-fa1-v01.md` to `v12.md` (Revision 1, review keys `p-y11-v01` to `p-y11-v12`). Route: `docs/production/phys-y11-video-route.json` (NSW Physics 11-12, 2025 syllabus, Year 11 only). Root's decisions on the designers' open questions: `checks/root-decisions-phys-y11-fa1-v01-v12.md`; confirm them, and don't reopen them unless one teaches a wrong idea.

For each video:
- **Learning review** (`docs/production/student-learning-review.md`), traced from Stage 5 entry knowledge and the earlier videos: terms get a plain meaning; causes are explained before they are used; the visuals show the object, apparatus or vector that carries the explanation, in motion; calculations separate task, equation and grouped givens with units; significant figures and units are handled; practice cards don't give the answer away; each opening frame matches the previous video's handoff frame (series rule: decision 16 in `checks/root-decisions-bio-y11-fa1-v01-v06.md`).
- **Physics check**: recalculate every number (Python; scripts in `work/brief145/`); quote each 2025 syllabus point verbatim with its codename, against fresh official pages; check the site's worked examples are reused exactly; for v10, check the method, the illustrative data, the uncertainty treatment, the risks and the FA0 points it claims.
- Repairs must be length-neutral or name a cut; each design stays at or under about 570 s.
- Add confirmed site findings to `site-corrections-phys-y11.md` without duplicates.

Write `checks/p-y11-vNN-learning-review.md` and `checks/p-y11-vNN-science-check.md`. Hand in to `status.md` with one paragraph per design: blocker, should-fix and optional counts, and the length.
