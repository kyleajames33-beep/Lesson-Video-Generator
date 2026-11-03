# Brief 168: Year 12 Physics (2017 syllabus): syllabus ledger, route inputs and pre-design packs

Read `00-standing-rules.md` and brief 128 first, and use brief 128's method and file formats. This is research and preparation only. Claude writes the route JSON and every design from your output. Do not spawn sub-agents. No designs, code, speech, renders or commits.

**Owner priority (4 November 2026):** Year 12 Mathematics Advanced comes first, then Year 11 Chemistry (brief 167), then this course. Run this brief after brief 167.

**Owner decision (4 November 2026): use the 2017 syllabus.** The Physics 11-12 (2025) syllabus does not start for Year 12 until Term 4, 2027 (`docs/production/programme/syllabus/timeline.md`), so current Year 12 students follow the Physics Stage 6 Syllabus (2017), Modules 5 to 8. Do not use the 2025 syllabus for these videos, and do not label any of them as covering a 2025 focus area. A separate 2025 Year 12 set is planned later for the cohort that starts Year 12 in Term 4, 2027.

## 1. Syllabus ledger and crosswalk
There is no local 2017 Year 12 Physics ledger. Build `docs/production/programme/syllabus/phys-2017-y12.json` from the official NESA Physics Stage 6 Syllabus (2017), in the format of `chem-2017-y12.json`: every Modules 5 to 8 content point with its exact wording and inquiry question, plus the Working Scientifically outcomes and the depth study requirement. Record the source URLs and the date read.

The site (`C:/Users/kygs/hscscience/subjects/physics/year12/`, read-only) is organised by the same Modules 5 to 8. Map each content point to the site lessons that teach it: covered, partial or missing. Also compare against the existing old Physics kit and `physics-plan.json` in the repo, which map this 2017 course; list what they already supply (parts, diagrams, lesson lists). Write `programme/syllabus/phys-2017-y12-crosswalk.json` and a short summary at `programme/phys-y12-crosswalk.md`.

## 2. Route inputs
Propose the full video list in teaching order, one main learner question per video, sized for 5 to 10 minute videos (split where combining would rush the explanation). Per video give:
- the exact syllabus content points (2017 wording);
- the module and inquiry question;
- the site source lesson and section ids;
- entry knowledge (Year 11 Physics and earlier videos);
- start and stop boundaries and the next handoff;
- which practicals it covers;
- reasons for any split or reordering.

Use the route format of `docs/production/module5-video-route-2026-10-10.json` (a 2017 module route). Write `programme/phys-y12-route-inputs.json`.

## 3. Pre-design packs (first ten videos)
As brief 167 section 3, in `claude-pm/pre-design/phys-y12/`, with site errors going to a new `claude-pm/site-corrections-phys-y12.md`. Note existing plates in `public/assets/physics/` and the shared Physics kit parts (for example `CircuitDiagram` and `LoopFlow`) that fit.

## Hand-in
Hand in to `status.md` with one line per section, plus the proposed video count.
