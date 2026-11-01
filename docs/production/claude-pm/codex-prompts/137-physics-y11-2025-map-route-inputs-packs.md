# Brief 137: Year 11 Physics (2025 syllabus): syllabus ledger, video map, route inputs and the first pre-design packs

Read `00-standing-rules.md`, briefs 61 and 128, and `docs/production/programme/new-voice-programme-plan-2026-11-01.md` (especially "Syllabus rule" and "Old Physics maps") first. This is research and preparation only: Claude writes the route JSON and the designs. Do not spawn sub-agents.

**Syllabus rule.** Use only the NSW Physics 11-12 (2025) syllabus, Year 11, from the official NSW Curriculum pages. The existing Physics kit (`src/explainer/physics/`) and the image bank's `physics-plan.json` map the outgoing 2017 Year 12 course. Use them only to name reusable drawing parts, never as a route, lesson list or content source.

## 1. Syllabus ledger

Build `programme/syllabus/phys-new-y11.json` in the format of `bio-new-y11.json`: every Year 11 focus area and content point, with the exact wording, the official ID or codename, the source URL and the source HTML. Record the retrieval date. Use `generate_ledgers.py` if it fits.

## 2. Video map

Map the Year 11 Physics site lessons (read-only, `C:/Users/kygs/hscscience/subjects/physics/year11/`) against the ledger: covered, partial or missing. Flag any site lesson that teaches outgoing 2017 content, or that carries stale module labels. Propose an ordered list of focused videos (one main learner question each) covering every content point, as the Year 11 Biology index does. Practical investigations the syllabus names get their own videos where they carry an investigation.

Write `programme/phys-y11-video-map.md`, plus `programme/phys-y11-route-inputs.json` in the route format of `docs/production/maths-a12-video-route.json`. Ids are `phys-y11-faN-vNN`. Give entry knowledge (Stage 5 science and maths, and the earlier videos), start and stop boundaries, the next handoff, and the site source sections.

## 3. Pre-design packs for the first 12 videos

Use the format of the Year 11 Biology packs (`claude-pm/pre-design/y11-bio/`), one per video, in `claude-pm/pre-design/phys-y11/`. Each pack has:
- the site's worked examples, with the numbers reused exactly and recalculated, with units and significant figures;
- misconceptions;
- visual needs, named against the existing physics kit's drawing parts (vectors, fields, trajectories, graphs) and the maths kit (`src/explainer/math/`), listing new parts needed;
- two candidate practice questions with worked answers;
- any site errors, written to a new `claude-pm/site-corrections-phys-y11.md`.

Hand in to `status.md` with one line per section. No designs, code, speech, renders or commits.
