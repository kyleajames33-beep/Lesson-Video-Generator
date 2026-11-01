# Brief 136: Year 12 Mathematics Advanced: whole-course route outline, then route inputs and pre-design packs for the next videos

Read `00-standing-rules.md`, brief 128 and `docs/production/programme/new-voice-programme-plan-2026-11-01.md` first, and use brief 128's methods and file formats exactly. This is research and preparation only: Claude writes the route JSON and the designs from your output. Use the 2024 Mathematics Advanced syllabus only (official NSW Curriculum pages); never 2017 content. Do not spawn sub-agents.

The first strand (math-a12-d01 to d10, differential calculus) is designed and reviewed. Its route is `docs/production/maths-a12-video-route.json`; its `laterHomes` and the crosswalk (`programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, `programme/maths-a12-crosswalk.md`) list what the first ten leave out.

## 1. Whole-course outline

Propose an ordered outline of every remaining Year 12 Advanced video after d10, so that every Year 12 content point is owned by at least one video (d01 to d10 included). One line per video: proposed id, main learner question, syllabus point IDs, site source lesson(s), and its strand. Use these id prefixes: `math-a12-d` (differential calculus, continuing from d11), `math-a12-i` (integral), `math-a12-t` (trig functions and graphs), `math-a12-f` (financial), `math-a12-s` (statistics and probability), and `math-a12-g` (practice). List any content point that no video owns. Recommend a strand order, with reasons (prerequisites and the HSC teaching order; the programme plan says finance comes after calculus because it needs a cash-flow kit).

Write `programme/maths-a12-course-outline.json` and a short table at `programme/maths-a12-course-outline.md`.

## 2. Route inputs and packs for the next videos

For the remaining differential calculus videos, then the integral calculus videos in order (up to 14 videos in total):
- give route inputs per video, as in brief 128 section 2, written to `programme/maths-a12-route-inputs-2.json`;
- write a pre-design pack per video, as in brief 128 section 3, in `claude-pm/pre-design/maths-a12/`.

These include the later homes the first route names: the tan proof, sec/cosec/cot, the remaining trig composites, tangent and normal problems, the second derivative and concavity, and optimisation. Packs must reuse the site's worked-example numbers exactly and recalculate them (SymPy in `work/brief130-python`). Each pack has two candidate practice questions with worked answers, where the card does not give away the answer or its sign.

Add confirmed site errors to `claude-pm/site-corrections-maths-a12.md` without duplicating existing items.

## 3. Kit needs

Extend the kit needs table as `claude-pm/checks/maths-kit-needs-next-strands.md`. For each new video, list which existing kit parts it uses (see `checks/codex-build-129.md` and `131` to `135`) and any new part it needs: for example a concavity tint, an area-under-curve fill with rectangles that refine, or a signed-area colour.

Hand in to `status.md` with one line per section. No designs, code, speech, renders or commits.
