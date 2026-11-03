# Brief 167: Year 11 Chemistry (2025 syllabus): syllabus crosswalk, route inputs and pre-design packs

Read `00-standing-rules.md` and brief 128 first, and use brief 128's method and file formats. This is research and preparation only. Claude writes the route JSON and every design from your output. Do not spawn sub-agents. No designs, code, speech, renders or commits.

**Owner priority (4 November 2026):** Year 12 Mathematics Advanced comes first in production. Year 11 Chemistry and Year 12 Physics are the next two courses to design. Run this brief after briefs 165, 166, 161 and 162.

## 1. Syllabus crosswalk
Use the official Chemistry 11-12 (2025) syllabus, Year 11, from the NSW Curriculum site, with `docs/production/programme/syllabus/chem-new-y11.json` as the local ledger. Check the ledger against the official site and report any differences. List every Year 11 content point with its exact wording and codename, including Working scientifically and any practical or depth study requirements.

The site (`C:/Users/kygs/hscscience/subjects/chemistry/year11/`, read-only) is organised by the old 2017 modules 1 to 4. Map each 2025 point to the site lessons that teach it: covered, partial or missing. Flag site content that is outgoing 2017 content only, so it is not used. Write `programme/syllabus/chem-2025-y11-crosswalk.json` and a short summary at `programme/chem-y11-crosswalk.md`.

## 2. Route inputs
Propose the full video list in teaching order, one main learner question per video, sized for 5 to 10 minute videos (split where combining would rush the explanation). Per video give:
- the exact syllabus codenames;
- the site source lesson and section ids;
- entry knowledge (Stage 5 science and earlier videos);
- start and stop boundaries and the next handoff;
- which practicals it covers;
- reasons for any split or reordering.

Use the route format of `docs/production/y11-bio-fa1-video-route.json`. Write `programme/chem-y11-route-inputs.json`.

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
