# Brief 195: d01 Revision 5 (owner-driven redesign): review, plates and maths kit upgrade

Read `00-standing-rules.md` and `maths-visual-standard.md` first. Do not spawn sub-agents. No design edits, no speech, no commits. One heavy job at a time.

**Why.** The owner rejected d01 v1 as boring, with no images or simulations, and far below the Biology and Chemistry Module 5 videos. `lessons/math-a12-d01.md` is now Revision 5, a full redesign and the new maths template. Its anchor is bacteria in broth flasks; it adds a growth-field simulation, a curve simulator with sliders, fixed colour roles and large type. Run this brief after brief 185's tick fix.

**Step 1: review.** Write an independent learning review and maths check of Revision 5 (`checks/m-a12d01-rev5-learning-review.md`, `checks/m-a12d01-rev5-maths-check.md`; keep the earlier reports). Use the usual method and also check the anchor's biology (growth phase, rate proportional to count, unit choice), every number (`work/brief195/`), cue words verbatim and in spoken order, and the length (6,528 characters, about 562 s, close to the cap). Grade it against every item of `maths-visual-standard.md`.

**Step 2: plates.** Paint the five `ma12-` plates in the design's Codex asset brief into `public/assets/maths/`: transparent PNG with alpha, never stretched, no people. The flask pair must have identical geometry for the crossfade. The rod-cell sprites must work at the sizes the design gives. Use the usual QA (checkerboard, phone size, overlay) and record provenance.

**Step 3: kit parts and a silent kit pilot.** Build the reusable parts listed under "Kit parts needed" in the design, as shared parts in `src/explainer/math/` (not lesson-local code):
- `MATH_ROLES` and `Role`
- `ParameterSlider`
- `CurveSimulator`
- `LiveReadoutBoard`
- `GrowthField`
- `AnchorStage`
- `WorkingBoard` (with `AnswerFrame` and `MistakeCard`)
- `HandTag`
- `MemoryAidCard`
- a bullets variant of `KeyNotes`
- maths styling for `QuestionCard`

Match the look of the Chemistry M5 g01 render (`assets/maths-std-ref-chem-m5-g01.jpg`): its hand font, accent colours, card styles and type sizes.

Then render a silent kit pilot of about 60 s, using the design's scenes 1, 4, 5 and 10 with placeholder timing. Make a 16-frame contact sheet and place it beside the reference. Record the build-gate checks from `maths-visual-standard.md` in `work/brief195/kit-pilot-report.md`.

Steps 2 and 3 may proceed while root resolves step 1 findings, because step 1 is unlikely to change the visual system. Do not build the full d01 lesson, voice it or render it yet. Root will send a build brief after the repairs, and the owner sees the d01 pilot before any other maths build.

**Hand-in:** to `status.md`: the review findings (blockers, should fix, optional), the plate paths and QA, the kit parts and their files, and the kit-pilot video and contact-sheet paths.
