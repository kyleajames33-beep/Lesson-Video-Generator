# Brief 151: pre-design packs for phys-y11-fa1-v26 to v31, and math-a12 t01 to t04 and i06 to i14

Read `00-standing-rules.md`, brief 141 (physics pack format) and brief 136 (maths pack format) first. Research and preparation only: Claude writes routes and designs. Do not spawn sub-agents. No designs, code, speech, renders or commits.

## 1. Physics phys-y11-fa1-v26 to v31 (energy and momentum)
From `docs/production/phys-y11-video-route.json` (v25 is on cultural hold: skip it). First propose a single causal main learner question for each placeholder question (root decides). Then write one pack per video in `claude-pm/pre-design/phys-y11/` exactly as brief 141 (route check, site worked examples recalculated with units and significant figures, misconceptions, visual needs named against the physics kit and `checks/codex-build-148.md` if complete, investigation method and illustrative data for v31, two candidate questions, site errors to `site-corrections-phys-y11.md`). v26 opens after v24 (v24 hands off to v26).

## 2. Maths math-a12 t01 to t04 (trig graphs and modelling) and i06 to i14 (integral calculus)
From `programme/maths-a12-course-outline.json`: give route inputs per video in `programme/maths-a12-route-inputs-3.json` (brief 136 format), and one pack per video in `claude-pm/pre-design/maths-a12/`, reusing site numbers exactly and recalculating with SymPy (`work/brief130-python`), with two candidate questions whose cards don't give the answer or its sign. i06 opens on i05's handoff frame (rectangles standing against cos x on [0, π/2]). Extend `checks/maths-kit-needs-next-strands.md` for these videos (area fills with refining rectangles and trapezia, signed-area colour, accumulation function tracer, trig transformation sliders).

Add confirmed site errors to the right corrections logs without duplicates. Hand in to `status.md` with one line per video. Validation in `work/brief151/validation.json`.
