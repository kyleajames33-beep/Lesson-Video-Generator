# Brief 167: Year 11 Chemistry (2017 syllabus): syllabus ledger, route inputs and pre-design packs

Read `00-standing-rules.md` and brief 128 first, and use brief 128's method and file formats. This is research and preparation only. Claude writes the route JSON and every design from your output. Do not spawn sub-agents. No designs, code, speech, renders or commits.

**Owner priority (4 November 2026):** Year 12 Mathematics Advanced comes first in production. Year 11 Chemistry and Year 12 Physics are the next two courses to design. Run this brief after briefs 165, 166, 161 and 162.

## 1. Syllabus ledger and crosswalk
**Owner decision (4 November 2026): use the 2017 syllabus.** The Chemistry 11-12 (2025) syllabus does not start for Year 11 until Term 1, 2028 (`docs/production/programme/syllabus/timeline.md`), so current Year 11 students follow the Chemistry Stage 6 Syllabus (2017), Modules 1 to 4. Do not use the 2025 syllabus for these videos. A later, separate set of 2025 videos may be planned for 2028; do not label any of these videos as covering a 2025 focus area.

There is no local 2017 Year 11 ledger. Build `docs/production/programme/syllabus/chem-2017-y11.json` from the official NESA Chemistry Stage 6 Syllabus (2017), in the format of `chem-2017-y12.json`: every Year 11 content point in Modules 1 to 4 with its exact wording and inquiry question, plus the Working Scientifically outcomes and the depth study requirement. Record the source URLs and the date read.

The site (`C:/Users/kygs/hscscience/subjects/chemistry/year11/`, read-only) is organised by the same Modules 1 to 4. Map each content point to the site lessons that teach it: covered, partial or missing. Write `programme/syllabus/chem-2017-y11-crosswalk.json` and a short summary at `programme/chem-y11-crosswalk.md`.

## 2. Route inputs
Propose the full video list in teaching order, one main learner question per video, sized for 5 to 10 minute videos (split where combining would rush the explanation). Per video give:
- the exact syllabus content points (2017 wording);
- the site source lesson and section ids;
- entry knowledge (Stage 5 science and earlier videos);
- the module and inquiry question;
- start and stop boundaries and the next handoff;
- which practicals it covers;
- reasons for any split or reordering.

Use the route format of `docs/production/module5-video-route-2026-10-10.json` (a 2017 module route). Write `programme/chem-y11-route-inputs.json`.

## 3. Pre-design packs (first ten videos)
Use the format of the brief 128 packs. One pack per video for the first ten, in `claude-pm/pre-design/chem-y11/`, each with:
- the site lesson's worked examples, with numbers reused exactly and recalculated;
- common misconceptions and HSC-style traps, with sources where possible;
- visual needs (apparatus plates, particle diagrams, coded graphs), noting existing plates in `public/assets/chemistry/` that fit;
- two original HSC-style practice questions with worked answers, recalculated;
- any site errors, for a new `claude-pm/site-corrections-chem-y11.md` (exact old text, correction and reason).

Note relevant aids from the existing memory-aid banks where they apply.

## Hand-in
Hand in to `status.md` with one line per section, plus the proposed video count.
