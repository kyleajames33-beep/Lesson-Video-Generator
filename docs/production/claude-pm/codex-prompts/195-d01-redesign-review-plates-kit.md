# Brief 195: d01 Revision 5 (owner-driven redesign): review and plates

Read `00-standing-rules.md` and `maths-visual-standard.md` first. Do not spawn sub-agents. No design edits, no speech, no commits. One heavy job at a time.

**Why.** The owner rejected d01 v1 as boring, with no images or simulations, and far below the Biology and Chemistry Module 5 videos. `lessons/math-a12-d01.md` is now Revision 5, a full redesign and the new maths template. Its anchor is bacteria in broth flasks; it adds a growth-field simulation, a curve simulator with sliders, fixed colour roles and large type. Run this brief after brief 185's tick fix.

**Step 1: review.** Write an independent learning review and maths check of Revision 5 (`checks/m-a12d01-rev5-learning-review.md`, `checks/m-a12d01-rev5-maths-check.md`; keep the earlier reports). Use the usual method and also check the anchor's biology (growth phase, rate proportional to count, unit choice), every number (`work/brief195/`), cue words verbatim and in spoken order, and the length (6,528 characters, about 562 s, close to the cap). Grade it against every item of `maths-visual-standard.md`.

**Step 2: plates.** Root decision (6 November): the two flask plates are dropped. d01 reuses the existing Biology straight-neck flask pair (clear and cloudy), which is already house style and crossfades. Paint only the other three `ma12-` plates in the design's Codex asset brief (microscope field, rod cell, dividing rod cell) into `public/assets/maths/`. The rod cells must contrast clearly against the field at the given sizes, because the placeholder cells were too pale: transparent PNG with alpha, never stretched, no people. The rod-cell sprites must work at the sizes the design gives. Use the usual QA (checkerboard, phone size, overlay) and record provenance.

**Step 3 is Claude's (owner, 6 November).** Claude builds the maths kit parts, the d01 lesson and its pilot. Do not edit `src/explainer/math/` beyond brief 185's tick fix, and do not build, voice or render d01.

**Hand-in:** to `status.md`: the review findings (blockers, should fix, optional), and the plate paths and QA.
