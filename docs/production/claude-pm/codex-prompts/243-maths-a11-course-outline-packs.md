# Brief 243: Year 11 Mathematics Advanced: syllabus crosswalk, whole-course outline and pre-design packs

Read `00-standing-rules.md` and brief 136 (the Year 12 version of this job). Use brief 136's methods and file formats exactly. This is research and preparation only: Claude writes the designs from your output. Use the 2024 Mathematics Advanced syllabus only (official NSW Curriculum pages), never 2017 content. Do not spawn sub-agents. No designs, code, speech, renders or commits.

This is light work. Run it in gaps when no render or voicing job can run, after brief 242.

**Background (owner, 13 Nov).** Finish existing courses before starting new ones. Year 11 Mathematics Advanced is the last course in that run, before HMS. It has no designs, crosswalk or route yet. Year 12 Maths is designed (`programme/maths-a12-course-outline.json`), and its built videos set the style.

## 1. Syllabus crosswalk
Write `programme/syllabus/maths-advanced-2024-y11-crosswalk.json` in the format of the Year 12 crosswalk (`programme/syllabus/maths-advanced-2024-y12-crosswalk.json`). For every Year 11 content point, record:
- its codename;
- its exact wording (MathML written in linear form);
- its focus area.

Record the source page URLs and the date you read them.

## 2. Site lessons
Find the HSCScience site's Year 11 Mathematics Advanced lessons. Search the Teaching-APP repo (`kyleajames33-beep/teachingapp`) and any local checkout. The Year 12 designs cite `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/...`, which is no longer at that path on this machine. Then:
- Record each lesson's path and SHA256.
- If the site has no Year 11 Maths lessons, say so plainly and use the syllabus alone. List that gap for the owner.

## 3. Whole-course outline
Propose an ordered outline of every Year 11 Advanced video, so that every Year 11 content point is owned by at least one video. One line per video:
- proposed id;
- main learner question;
- content point codenames;
- site source lesson(s);
- strand.

Use id prefixes by focus area, in the style of Year 12: for example `math-a11-w` (working with functions), `math-a11-t` (trigonometry), `math-a11-c` (calculus), `math-a11-e` (exponential and logarithmic functions) and `math-a11-s` (probability and data). Adjust these to the syllabus's actual focus areas and record the mapping. Then:
- Keep each video to one main learner question. Split points where combining them would rush.
- Name the Year 11 points that Year 12 videos already assume. The first Year 12 video, `math-a12-d01`, must be able to rely on them.
- Recommend a strand order, with reasons (prerequisites and the usual NSW Year 11 teaching order).

Write `programme/maths-a11-course-outline.json` and a short table at `programme/maths-a11-course-outline.md`.

## 4. Packs for the first strand
For the first recommended strand (up to 14 videos), write the route inputs (`programme/maths-a11-route-inputs-1.json`) and one pre-design pack per video in `claude-pm/pre-design/maths-a11/`, as in brief 136. Each pack:
- reuses the site's worked-example numbers exactly, recalculated with SymPy;
- has two candidate practice questions with worked answers, where the card does not give the answer or its sign away;
- suggests three everyday anchors from varied life (money, sport, travel, phones, cooking, games). Mostly avoid science, because most Maths students do not take science.

Add confirmed site errors to `claude-pm/site-corrections-maths-a11.md`.

## 5. Kit needs
List which existing Maths studio parts (`src/explainer/math/studio/`) and simulation engines (`src/explainer/sims/`) each first-strand video can use, and any new part it needs. Write the list to `claude-pm/checks/maths-a11-kit-needs.md`.

Hand in to `status.md` with one line per section.
