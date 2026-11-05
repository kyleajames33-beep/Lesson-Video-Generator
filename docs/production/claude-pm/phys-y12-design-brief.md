# Year 12 Physics (2017 syllabus): design-wave brief

Written by Claude (root, designer of record), 6 November 2026. Read this before writing any `phys-y12-*` design. Owner priority (4 November): Year 12 Maths, then Year 11 Chemistry, then Year 12 Physics. Voice: the Google voice.

## Inputs for each video

- Route entry: `docs/production/programme/phys-y12-route-inputs.json` (`subjects.Physics.entries`, by `id`): learner question, syllabus actions, source lessons and sections, entry knowledge, start, stop, next and handoff. The route is research input; improve the learner question if a causal form is clearer, and record the change.
- Starter pack: `pre-design/phys-y12/<id>.md` where it exists (unchanged site givens, independent arithmetic, original questions, asset reuse proposals). Where no pack exists, do the same work yourself.
- Ledger: `docs/production/programme/syllabus/phys-2017-y12.json` (exact 2017 wording) and `phys-2017-y12-crosswalk.json`. The syllabus is 2017; never label anything as 2025.
- Site lesson, read in full before scripting: `C:/Users/kygs/hscscience/subjects/physics/year12/moduleN/lessonNN.sa.html` (read-only). The site is the source of truth: reuse its section order, worked-example numbers and misconception framings. Apply `site-corrections-phys-y12.md` where it flags a site error.
- Kit: `work/brief168/kit-comparison.json` compares the existing physics coded components and plates with the plan. Reuse existing Year 11 Physics components and `phys-y11-*` plates where they fit.
- Repo rules: `AGENTS.md` (all of it), `docs/production/student-learning-review.md`, `docs/production/motion-design-standard.md`, `docs/visual-design-handbook.md`.

## Templates

- Structure, voice, scene layout, Decisions, Numbers used, Narration length estimate, Opening frame and Final frame: `lessons/phys-y11-fa1-v01.md` and the Year 11 Physics FA1 projectile and motion designs; `lessons/math-a12-d10.md` for calculation layout.
- Plates and asset brief format: `lessons/bio-y11-fa1-v05.md`. New Year 12 Physics plates use the `y12p-` prefix.

## Standards (owner rules)

Identical to `chem-y11-design-brief.md` "Standards", with physics in place of chemistry: one main learner question; plain definitions; causes before reliance; natural conversational TTS narration; 5,500 to 6,800 narration characters and at most about 570 s (only lines starting "> ", `**` removed; characters / 13.3 plus holds); every narrated change shown, cue words verbatim in spoken order; painted plates for real objects (transparent PNG, never stretched), coded diagrams, graphs and vectors; no people, hands, faces or body outlines; calculation layout with task strip, equation strip and grouped givens, one stage at a time, every number recalculated (Python or SymPy) and listed in "Numbers used"; g = 9.8 m s⁻² unless the site or question gives another value; use the HSC Physics data and formula sheet's symbols; practice with "Pause here to answer." and a 10 s countdown and brief feedback; optional key-notes hold; no double teaching (do not assume students watched our new-syllabus Year 11 Physics videos; recall Year 11 ideas in a sentence where needed); opening equals the previous final frame; no em dashes, no U+2061, Australian spelling; text above the bottom 12% of frame. Cultural content waits for the owner.

## Output

- `lessons/<id>.md`, title line `# Year 12 Physics M<n> V<nn>: <topic>. <learner question> (design)`.
- Status line: `Status: Revision 1 (<date>): first design. Needs independent learning review and science check before voicing.`
- Record open decisions for root at the end of Decisions. Do not commit.
