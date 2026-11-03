# Brief 169: reviews, then plates, for phys-y11-fa0-v01 to v07 (Working scientifically)

Read `00-standing-rules.md` and briefs 156 and 164 first, and use their methods and file formats exactly. Do not spawn sub-agents. Make no design edits, speech or commits. Run this after brief 164.

## Inputs
- **Designs:** `lessons/phys-y11-fa0-v01.md` to `v07.md` (Revision 1; keys `p-y11-fa0-vNN`).
- **Root decisions:** `checks/root-decisions-phys-y11-fa0.md` (placement and frame joins: fa1-v14, fa0-v01 to v05, fa1-v15, fa0-v07, fa1-v16; fa1-v30, fa0-v06, fa1-v31), plus the FA1 physics root decisions files. Confirm them.
- **Route:** `docs/production/phys-y11-video-route.json`. Syllabus: `docs/production/programme/syllabus/phys-new-y11.json`.

## Part 1: reviews
There is no FA0 site lesson and no Codex pack, so each check also covers the pack checks, as in brief 156: every 2025 point quoted verbatim with its codename, illustrative numbers recalculated (`work/brief169/`), and learner questions checked against the syllabus and the neighbouring videos.

Trace the learning review from Stage 5 and the FA1 videos that come before each one in the playlist order above. Check:
- **Coverage:** together the seven videos cover every FA0 point once, with no point claimed by two videos.
- **Definitions:** precise, accurate, reliable and valid mean the same in every video (v05's meanings are the course definitions), and the FA1 investigation videos match them.
- **Data:** every dataset is labelled illustrative, invented sources are labelled invented, and v05's statistics (sample standard deviation) are correct.
- **Safety:** risk content uses current school-safety practice without inventing rules; v06's road values are typical values, tagged as assumed, or replaced with a sourced figure.
- **Joins:** each opening equals the previous video's final frame in the playlist order above, including the bridge edits root applied to fa0-v04, fa0-v05, fa1-v15 and fa1-v31.
- **Reading load:** with five skills videos in a row before fa1-v15, judge whether any one is rushed or repeats another, especially v05's eight points.

Repairs must be length-neutral or come with a named cut. Each design stays at or under about 570 s.

Write `checks/p-y11-fa0-vNN-learning-review.md` and `checks/p-y11-fa0-vNN-science-check.md`.

## Part 2: plates
After the reviews, paint the requested plates, following any review changes, as in brief 146: v01's two (paper flat and crumpled; hammer and feather on grey lunar ground, no person), `phys-y11-paper-cone-set-v1.png`, `phys-y11-paper-circle-slit-v1.png` and `phys-y11-scissors-v1.png`. Check that v06's reused cricket ball and air-track plates exist; list any that do not.

Write the manifest to `assets/brief169-manifest.json` and QA images to `assets/brief169-qa/`.

## Hand-in
Hand in to `status.md` with one paragraph per design and one line for the plates.
