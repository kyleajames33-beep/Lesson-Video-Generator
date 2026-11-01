# Brief 147: reviews, then plates, for Year 11 Biology FA1 v07 to v12

Read `00-standing-rules.md` and briefs 138 and 139 first, and use their methods and file formats exactly. Run this after brief 146. Do not spawn sub-agents. No design edits, speech or commits.

Designs: `lessons/bio-y11-fa1-v07.md` to `v12.md` (Revision 1, review keys `y11b-v07` to `y11b-v12`). Route: `docs/production/y11-bio-fa1-video-route.json` (2025 syllabus). Root decisions: `checks/root-decisions-bio-y11-fa1-v01-v06.md` (series decisions, including 10 and 16) and `checks/root-decisions-bio-y11-fa1-v07-v12.md` (written 2 Nov); confirm them. Also build the shared FA1 components named in decision 10 of the v07 to v12 file as part of Part 2 if they are coded diagrams (report them separately).

## Part 1: reviews (one design at a time)
For each video: a learning review traced from Stage 5 entry knowledge and v01 to v06 (plain meanings for terms; causes before use; visuals showing the cell, membrane or apparatus that carries the explanation; practice cards that don't give the answer away; the opening frame equals the previous video's handoff frame), and a science check against the 2025 syllabus point (verbatim with its ID, from fresh official pages), the site lesson and reliable sources. For the practical (v10), check the method, variables, illustrative data, risks (NSW school rules, including decision 10) and what is measured. Repairs must be length-neutral or name a cut; each design stays at or under about 570 s. Write `checks/y11b-vNN-learning-review.md` and `checks/y11b-vNN-science-check.md`, and add confirmed site findings to `site-corrections-bio-y11.md`.

## Part 2: plates
After all six reviews, paint the plates each design's "Assets" and "Codex asset brief" sections request (follow any review change to a request), reusing existing `public/assets/biology/` plates where they fit. Brief 139's rules apply: real alpha, clean edges, true relative scale where stated, counts painted to match the narration, no people, never stretched, full-size and phone-landscape inspection. Manifest `assets/brief147-manifest.json`, QA in `assets/brief147-qa/`.

Hand in to `status.md` with one paragraph per design (blocker, should-fix and optional counts, and the length) and one line for the plates.
