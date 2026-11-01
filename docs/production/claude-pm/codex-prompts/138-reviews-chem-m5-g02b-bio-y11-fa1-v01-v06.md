# Brief 138: reviews of chem-m5-g02b and Year 11 Biology FA1 v01 to v06

Read `00-standing-rules.md`, `docs/production/student-learning-review.md` and briefs 122 and 134 first, and use the same methods and file formats. Work through the seven designs one at a time, in the order below. Do not spawn sub-agents. No design edits, speech, renders or commits.

## 1. chem-m5-g02b (Revision 1), review key `m5g02b`

A hard-practice video: its worked walkthroughs are the content. Root decisions are in its status block; confirm them. Do a learning review and a science check:
- every answer, energy-profile and rate argument;
- the H2/I2/HI graph reading (t1 HI added; t2 volume decreased with Q = K; t3 heated);
- the Contact-process "yield, rate, limit" justification;
- the CaCO3 open and closed reasoning;
- the N2O4/NO2 attempt.

Check that each question's wording supplies every needed condition while the student answers. Also check that chem-m5-g02 Revision 8's scene 1 "part two" line now matches g02b's content.

Write `checks/m5g02b-learning-review.md` and `checks/m5g02b-claude-science-check.md`.

## 2. Year 11 Biology FA1 v01 to v06 (Revision 1), review keys `y11b-v01` to `y11b-v06`

Designs: `lessons/bio-y11-fa1-v01.md` to `-v06.md`. Route: `docs/production/y11-bio-fa1-video-route.json` (2025 syllabus). Root decisions: `checks/root-decisions-bio-y11-fa1-v01-v06.md`; confirm them.

For each video, do a learning review traced from Stage 5 entry knowledge and the earlier videos. Check:
- that terms get a plain meaning;
- that causes are explained before they are used;
- that the visuals show the organism or apparatus that carries the explanation;
- that the practice cards don't give the answer away;
- that the opening frame matches the previous video's handoff.

Do a science check against the 2025 syllabus point (quote it verbatim with its ID, from fresh official pages), the site lesson and reliable sources. Recalculate v06's numbers. Repairs must be length-neutral or name a cut: every design sits at about 552 to 568 s.

Write `checks/y11b-v0N-learning-review.md` and `checks/y11b-v0N-science-check.md`.

## 3. Site corrections

Create `claude-pm/site-corrections-bio-y11.md` in the format of `site-corrections-m8.md`, from the six designs' confirmed site findings. Use exact old text, the correction and the reason, and add any new findings you confirm.

Hand in to `status.md` with one paragraph per design: blocker, should-fix and optional counts, and the length.
