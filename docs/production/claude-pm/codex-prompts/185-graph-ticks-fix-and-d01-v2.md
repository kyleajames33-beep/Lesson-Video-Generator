# Brief 185: round axis ticks in the maths graph kit, then d01 v2

Read `00-standing-rules.md`. Do not spawn sub-agents. No design or narration changes, no new speech, no commits. One heavy job at a time. Run after the brief you are on finishes its current step; do not interrupt a render or alignment.

**Problem (Claude, from the d01 v1 render, 6 November).** At 295 s in `Explainer-math-a12-d01-v1.mp4` the x axis reads -1.5, -0.93, -0.35, 0.22, 0.8, with no 0 label. `src/explainer/math/graphs.tsx` line 82 (`ticks`) always divides the range into four equal parts and rounds to two decimals, so any window that is not a neat multiple gets odd labels. Students read these as data.

**Fix.** Replace the default tick generator with round ("nice") ticks: choose a step from 1, 2, 2.5 or 5 times a power of ten so there are about four to six ticks, start at the first multiple of the step at or above the range minimum, include 0 whenever it is in range, and label without trailing zeros or floating-point noise (for example -1.5, -1, -0.5, 0, 0.5). Keep explicit `xTicks` and `yTicks` overrides unchanged. Check every registered maths lesson's graph windows for a changed tick set (`work/brief185/ticks-before-after.json`), and re-shoot one still per affected scene.

**Do not render d01 v2 (owner, 6 November).** The owner judged d01 v1 well below the Biology and Chemistry Module 5 standard, so d01 is being redesigned (see `maths-visual-standard.md`). Do the tick fix and the before/after check only. Pause every other maths build and render until a new brief says otherwise.

**Hand-in:** to `status.md`: the tick change, the affected lessons and still paths, and confirmation that no maths render ran.
