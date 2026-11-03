# Brief 168: Year 12 Physics (2025 syllabus): syllabus crosswalk, route inputs and pre-design packs

Read `00-standing-rules.md` and brief 128 first, and use brief 128's method and file formats. This is research and preparation only. Claude writes the route JSON and every design from your output. Do not spawn sub-agents. No designs, code, speech, renders or commits.

**Owner priority (4 November 2026):** Year 12 Mathematics Advanced comes first, then Year 11 Chemistry (brief 167), then this course. Run this brief after brief 167.

**New syllabus only.** Use only the Physics 11-12 (2025) syllabus. The old 2017 Physics kit and site lessons may supply drawings and worked numbers, never the content boundaries.

## 1. Syllabus ledger and crosswalk
There is no local Year 12 ledger yet. Build `docs/production/programme/syllabus/phys-new-y12.json` from the official NSW Curriculum site, in the format of `phys-new-y11.json`: every Year 12 content point with its exact wording and codename, including Working scientifically, practicals and any depth study requirements. Record the source URLs and the date read.

The site (`C:/Users/kygs/hscscience/subjects/physics/year12/`, read-only) is organised by the old 2017 modules 5 to 8. Map each 2025 point to the site lessons that teach it: covered, partial or missing. Flag 2017-only content so it is not used. Write `programme/syllabus/phys-2025-y12-crosswalk.json` and a short summary at `programme/phys-y12-crosswalk.md`.

## 2. Route inputs
Propose the full video list in teaching order, one main learner question per video, sized for 5 to 10 minute videos. Per video give the exact codenames, the site source lesson and section ids, entry knowledge (Year 11 Physics 2025, whose route is `docs/production/phys-y11-video-route.json`), start and stop boundaries, the next handoff, practicals covered and reasons for any split. Use the route format of `phys-y11-video-route.json`. Write `programme/phys-y12-route-inputs.json`.

## 3. Pre-design packs (first ten videos)
As brief 167 section 3, in `claude-pm/pre-design/phys-y12/`, with site errors going to a new `claude-pm/site-corrections-phys-y12.md`. Note existing plates in `public/assets/physics/` and the shared Physics kit parts (for example `CircuitDiagram` and `LoopFlow`) that fit.

## Hand-in
Hand in to `status.md` with one line per section, plus the proposed video count.
