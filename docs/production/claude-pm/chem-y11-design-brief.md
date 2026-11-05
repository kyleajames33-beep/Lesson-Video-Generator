# Year 11 Chemistry (2017 syllabus): design-wave brief

Written by Claude (root, designer of record), 5 November 2026. Read this before writing any `chem-y11-*` design. Owner priority (4 November): Year 12 Maths first, then Year 11 Chemistry, then Year 12 Physics. Voice: the Google voice (all Year 11).

## Inputs for each video

- Route entry: `docs/production/programme/chem-y11-route-inputs.json` (`subjects.Chemistry.entries`, by `id`): learner question, syllabus actions, source lessons, entry knowledge, start, stop, next and handoff. The route is research input; improve the learner question if a causal form is clearer, and record the change.
- Starter pack: `pre-design/chem-y11/<id>.md` where it exists (unchanged site givens, independent arithmetic, original questions, asset reuse proposals). Where no pack exists, do the same work yourself.
- Ledger: `docs/production/programme/syllabus/chem-2017-y11.json` (exact 2017 wording; IDs are local, not official codenames) and `chem-2017-y11-crosswalk.json`.
- Site lesson, read in full before scripting: `C:/Users/kygs/hscscience/subjects/chemistry/year11/moduleN/lessonNN.sa.html` (read-only). The site is the source of truth: reuse its section order, worked-example numbers and misconception framings. Apply `site-corrections-chem-y11.md` where it flags a site error.
- Repo rules: `AGENTS.md` (all of it), `docs/production/student-learning-review.md`, `docs/production/motion-design-standard.md`, `docs/visual-design-handbook.md`.

## Templates

- Structure, voice, scene layout, Decisions section, Numbers used, Narration length estimate, Opening frame and Final frame: `lessons/phys-y11-fa1-v01.md` (the newest Year 11 first design) and `lessons/math-a12-d10.md` for calculation layout.
- Plates and asset brief format: `lessons/bio-y11-fa1-v05.md`.
- Chemistry conventions and reusable chemistry visuals: `lessons/chem-m8-p02.md` (practical), `lessons/chem-m5-g02.md` (calculation). Check `src/explainer/` and `public/` for existing chemistry components and painted plates before requesting new ones; reuse them where they fit.

## Standards (owner rules)

- One main learner question per video, taught for a student starting Year 11 from the route's entry knowledge. Define each term in plain words before using it. Explain each cause or step before relying on it. Plain subject-action sentences; no compressed noun lists.
- Conversational narration that sounds natural in TTS: commas for small pauses, full stops for real content shifts, no stacks of one-word sentences. A useful question, contrast or surprise where it helps. A memory aid, analogy or exam trap where it genuinely helps, with its assumptions checked; no quotas.
- Length: about 5,500 to 6,800 narration characters, at most about 570 s (characters / 13.3 plus holds). Count with the build parser rule: only lines starting "> ", with `**` removed.
- Motion: every narrated change shows on screen, cue words quoted verbatim from that scene's narration and listed in spoken order; meaningful transitions; one visual system. No static slideshow.
- Visuals: real objects, apparatus and organisms are painted plates (request them in the asset brief, transparent PNG with alpha, never stretched); code only abstract diagrams, graphs, particle models and text. No people, hands, faces or body outlines. Particle diagrams follow HSC conventions.
- Calculations: short task strip, equation strip, grouped givens with units, one reasoning stage at a time, earlier results kept only when needed. Do not pack a problem into one heading. Recalculate every number (Python/SymPy) and list it in "Numbers used".
- Practice: one or two end questions in real exam wording. "Pause here to answer." then a 10 s countdown. Feedback is brief: answer, one or two reasons, short working, one crossed-out classic mistake, about 15 to 30 s each.
- After teaching, an optional "Key notes: what to write in your book" hold with a small useful set.
- No double teaching: refer back to earlier videos instead of re-teaching them.
- Opening frame equals the previous video's final frame (state what you assume it is); final frame sets up the route's next handoff.
- No em dashes (U+2014), no U+2061, Australian spelling. Captions are YouTube CC only, so keep text above the bottom 12% of frame.
- Cultural content (Aboriginal and Torres Strait Islander knowledge, for example `chem-y11-m3-v06`) waits for the owner: do not design it.

## Output

- `lessons/<id>.md`, title line `# Year 11 Chemistry M<n> V<nn>: <topic>. <learner question> (design)`.
- Status line: `Status: Revision 1 (<date>): first design. Needs independent learning review and science check before voicing.`
- Record open decisions for root at the end of Decisions. Do not commit.
