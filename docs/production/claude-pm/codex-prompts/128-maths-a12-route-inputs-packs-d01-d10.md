# Brief 128: Year 12 Mathematics Advanced: route inputs, a syllabus crosswalk, and pre-design packs for the first ten videos

Read `00-standing-rules.md` and `docs/production/programme/new-voice-programme-plan-2026-11-01.md` first. This is research and preparation only: Claude writes the route JSON and the designs from your output. It can run alongside any other brief.

## 1. Syllabus crosswalk (Year 12 Advanced)

Use the official Mathematics Advanced 11-12 (2024) syllabus (NSW Curriculum site). List every Year 12 content point with its exact wording and ID. Map each one to the site lessons in `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/` (read-only): covered, partial, or missing. Flag:
- the stale Year 11 or module metadata in differential L01 to L04 and integral L01 and L02;
- the possible overlap between integral L01 and L04;
- any site lesson that teaches outgoing 2017 content.

Write `programme/syllabus/maths-advanced-2024-y12-crosswalk.json` and a short summary at `programme/maths-a12-crosswalk.md`.

## 2. Route inputs

For the ten candidate videos in section 5 of `claude-pm/checks/new-voice-programme-inventory-2026-10-31.md` (math-a12-d01 to d10), give per video:
- the exact syllabus point IDs;
- the site source lesson and section ids;
- entry knowledge (from Year 11 Advanced 2024);
- start and stop boundaries and the next handoff;
- any change you recommend to the draft order or splits, with reasons.

Follow the route format of `docs/production/module5-video-route-2026-10-10.json`. Write `programme/maths-a12-route-inputs.json`.

## 3. Pre-design packs (d01 to d10)

Use the format of the Year 11 Biology packs (`claude-pm/pre-design/y11-bio/`) and the reviewed secant starter (`drafts/maths-secant-tangent-pack.md`). One pack per video in `claude-pm/pre-design/maths-a12/`, each with:
- the site lesson's worked examples, with the numbers reused exactly and recalculated;
- common misconceptions and HSC-style traps, with sources where possible;
- the visual needs, named against the kit list in decision 4 of the plan;
- two candidate practice questions (HSC-style, written for HSCScience) with worked answers, recalculated;
- any site errors, for a new `claude-pm/site-corrections-maths-a12.md` (exact old text, correction and reason).

## 4. Kit needs summary

Write one table, `claude-pm/checks/maths-kit-needs-d01-d10.md`: for each kit component in decision 4 of the plan, which of d01 to d10 need it and how. Note anything else the ten videos need that the kit list misses.

Hand in to `status.md` with one line per section. No designs, code, speech, renders or commits.
