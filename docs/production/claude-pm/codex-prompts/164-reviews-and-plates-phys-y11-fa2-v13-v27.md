# Brief 164: reviews, then plates, for phys-y11-fa2-v13 to v27 (sound, light and optics)

Read `00-standing-rules.md` and briefs 145, 146 and 156 first, and use their methods and file formats exactly. Do not spawn sub-agents. Make no design edits, speech or commits.

## Inputs
- **Designs:** `lessons/phys-y11-fa2-v13.md` to `v33.md` that exist (Revision 1; keys `p-y11-fa2-vNN`), plus `lessons/phys-y11-fa3-v01.md` to `v30.md` that exist (keys `p-y11-fa3-vNN`; root decisions in `checks/root-decisions-phys-y11-fa3.md`; for FA3 check charge conservation, electron transfer only, induction and earthing order, field-line rules, and the lightning simplifications).
- **Route:** `docs/production/phys-y11-video-route.json`.
- **Root decisions:** the two FA1 physics files and `checks/root-decisions-phys-y11-fa2.md`. Confirm them.

## Part 1: reviews
The designs were written without Codex packs, so each physics check also covers the pack checks, as in brief 156:
- site numbers reused and recalculated (`work/brief164/`);
- every 2025 point quoted verbatim with its codename;
- learner questions and route boundaries checked against the syllabus and neighbouring videos.

Trace the learning review from Stage 5, FA1 and FA2 v01 to v12. Check:
- **Ray diagrams:** rays are drawn with arrows from the object, normals are dashed, and angles are measured from the normal.
- **Refraction:** its cause is explained, and Snell's law uses consistent indices.
- **Total internal reflection:** both conditions are stated.
- **Sign conventions:** lens and mirror conventions are stated once and used consistently.
- **Inverse square law:** its geometry is shown.
- **Sound:** intensity is kept distinct from loudness.
- **Investigations:** method, illustrative data, uncertainty and risks, including laser class and eye safety.
- **Openings:** each equals the previous handoff frame.

Repairs must be length-neutral or come with a named cut. Each design stays at or under about 570 s.

Write `checks/p-y11-fa2-vNN-learning-review.md` and `checks/p-y11-fa2-vNN-science-check.md`.

## Part 2: plates
After the reviews, paint the requested apparatus plates, following any review changes, as in brief 146.

Write the manifest to `assets/brief164-manifest.json` and QA images to `assets/brief164-qa/`.

## Hand-in
Hand in to `status.md` with one paragraph per design and one line for the plates.
