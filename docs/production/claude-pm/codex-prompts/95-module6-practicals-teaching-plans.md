# Brief 95: Module 6 practical and practice videos: teaching plans before design

Read `00-standing-rules.md` first. Module 6 core videos are nearly all built. What remains are the practical (P) and practice (G) videos. Brief 93 found that Biology Module 6 has no reviewed P-series IDs or methods yet. Produce the teaching plans Claude needs to design them.

## 1. Practical list and IDs

From the 2017 syllabus ledgers (`docs/production/programme/syllabus/chem-2017-y12.json`, `bio-2017-y12.json`), the site Module 6 lessons, and `module6-video-route-draft.json` (as amended by `module6-route-review-claude.md`), list every Module 6 practical investigation the syllabus requires or strongly implies, in both subjects. For each, give:
- a proposed id (`chem-m6-p01`, `bio-m6-p01` and so on), keeping the existing Chemistry P ids where the route has them;
- the exact dotpoint wording, with the ledger ID;
- the site lesson that covers it;
- its prerequisite core videos.

Update `module6-video-route-draft.json` with the Biology P entries, marked as drafts.

## 2. Teaching plan per practical

For each practical, write `pre-design/<id>-practical-plan.md`, following the format of an existing Module 5 practical design (for example `lessons/chem-m5-p01.md` and `lessons/bio-m5-p01.md`). Include:
- the aim;
- the method, at school-lab scale, with real quantities and concentrations;
- the variables;
- expected results, with realistic numbers. Compute every value and show the working.
- the analysis and calculation;
- validity, reliability and accuracy, in NESA's sense (from `research/exam-skills/vra-definitions.md`);
- a risk table, using real hazard classifications with sources;
- common errors and improvements that actually fix the stated problem;
- one HSC-style question idea. Never copy a NESA question.

No people or hands appear in any planned visual, so the apparatus is shown as painted plates. List the plates needed, and mark which already exist in `public/assets/`.

## 3. Practice videos

For Chemistry G01 and G02 and Biology G02, write `pre-design/<id>-practice-plan.md`. Each plan has 3 to 4 worked HSC-style questions, never copied, that mix the module's skills. Also:
- Chemistry G02 must include the amphiprotic Ka-against-Kb item, which the route review placed there.
- Biology G02 is the extended-response "evaluate biotechnology" practice.
- List the source videos each question draws on.

## 4. Remaining Biology core

Biology B16 (cloning, merged from b16 and b17), B18 and B19: confirm that a pre-design pack and site extract exist for each. If not, create them.

Australian spelling, no em dashes. Mark everything as a draft for Claude's review. Hand in to `status.md` with a list of all files created.
