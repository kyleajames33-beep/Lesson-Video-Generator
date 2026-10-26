# Independent review: Physics horizontal-launch first pack

25 October 2026. Reviewed `docs/production/claude-pm/drafts/physics-horizontal-launch-pack.md`, SHA-256 `41c61e29fb621ebd13b4fa53e6e1050bd3184a6af48fc22d211f78e7d24740da`. Reviewer did not author or edit the pack. This is an independent science and beginner-perspective source review, with executed model checks and inspection of the two existing reference stills. It is not an implemented-lesson, playback, listening, caption or learner-outcome review.

**Source decision: no blocking finding.** The proposed narration and actions explain the focused question from the declared entry knowledge. The original practice has correct conditions and calculations. The pack is suitable to proceed to a schema 4 brief and source implementation, subject to the existing recording and release gates. No site, code or media changes were made by this review.

## Followability from the stated entry knowledge

The useful exit understanding is specific: two objects with the same initial vertical velocity, vertical drop and constant downward acceleration have the same fall duration, although their horizontal distances can differ. The pack keeps this separate from angled launches, maximum height and range optimisation.

The opening prediction withholds motion and the verdict. Scene 2 checks the distinction between velocity and acceleration, then explains that zero vertical velocity does not mean B is stationary. Scene 3 makes the relevant comparison visible at the same times, rather than asserting independence over a generic parabola. Scene 4 names the three matching vertical conditions before calculation. Scene 5 recalls the known constant-acceleration equation, explicitly sets the initial vertical term to zero, chooses downward-positive distance and takes the positive elapsed-time root. Scene 6 retains that established time to explain the separate horizontal distance calculation. This is a coherent causal route, not a list of formula substitutions.

The declared equation/substitution/square-root prerequisites are real. The brief must preserve the specified handoff to prerequisite teaching for students who do not understand them. The four-second velocity check cannot establish algebraic readiness. The no-horizontal-force sentence in scene 6 supplies the required force-to-constant-velocity link at a usable level; a force-law derivation is outside this focused lesson. Do not shorten it to an unexplained claim that horizontal velocity stays constant.

## Science, numbers and model reuse

Independently calculated with `d = gt squared/2` and `x = vx t`:

| Case | Vertical result | Horizontal consequence |
| --- | --- | --- |
| Worked: d = 20 m, initial vertical velocity 0, g = 10 m/s squared | t squared = 4 s squared, positive t = 2 s for both | B at 6 m/s moves 12 m; A moves 0 m |
| Practice: d = 45 m, initial vertical velocity 0, g = 10 m/s squared | t squared = 9 s squared, positive t = 3 s for both | Horizontal distance is not asked; do not add it to feedback |

The rounded teaching gravity is stated honestly and repeated in both complete questions. Using different horizontal speeds does not change the vertical equation. The pack does not import the earlier false squared-speed flight-time claim or use a level-ground angled-launch shortcut for this elevated horizontal release.

Executed the actual exported `trajectory` function in `src/explainer/physics/module5/model.ts:4` to `8`, transpiling that source through the installed TypeScript package in memory. `trajectory(0,0,20,10)` and `trajectory(6,0,20,10)` both return duration 2 s. Their heights at t = 0, 1 and 2 s are 20, 15 and 0 m; their horizontal coordinates are respectively 0/0/0 and 0/6/12 m. Distance fallen is therefore 0, 5 and 20 m, as proposed. The 45 m cases with speeds 0 and 8 both return duration 3 s and ground height 0 at that time. No model source was rewritten for this check.

Also executed the old `flightTime` from `src/explainer/physics/projectile/model.ts:10` with vx0 = 6, vy0 = 0 and g = 10. It throws its positive-component/equal-height constraint error. The proposed lesson correctly excludes that solver and uses module5's height-aware trajectory instead. The proposed dropped-ball case with speed zero is supported by module5's actual formula, not merely asserted by the README.

The module5 model uses upward-positive height above ground, while the lesson's calculation uses downward-positive distance fallen. The pack explicitly distinguishes them. Implementation must calculate the teaching bracket as starting height minus current model height and must not relabel the model's y coordinate as distance fallen.

## Inspection of actual reuse material

Viewed the exact `m5-elevated-launch-desktop.png` and `projectile/artifacts/desktop-launch.png` stills. The first shows a single 15 m/s horizontal launch from 10 m, cliff/ground, blue and rose component arrows, time/height readouts, a solid travelled path, a dashed future path and a concluding sentence. The pack accurately treats it as a visual-language starting point, changes its physical values, adds a dropped ball and explicitly removes the predicted path and verdict for the opening. Reusing the complete still unchanged would leak the explanation and show the wrong case.

The second still is the 16 m/s horizontal, +12 m/s vertical angled case with two velocity graphs and a full future path. Its upward-positive arrow convention is appropriate to that pilot but must not be transplanted as if this lesson starts upward. Keeping its component colours while excluding its full board and solver is a sound bounded reuse decision.

Actual `ElevatedLaunch` at `src/explainer/physics/module5/index.tsx:22` to `30` uses one ball, `trajectory(15,0,10)` and duration times progress. It is not already the paired-ball lesson. Both reference stills and the three quoted code-file hashes match the pack's reuse snapshot. No motion quality or finished-layout conclusion follows from this inspection.

## Practice, feedback and reading load

The original scene 7 question changes the drop from 20 to 45 m and horizontal speed from 6 to 8 m/s, so students must transfer the vertical reasoning rather than repeat the old two-second answer. All necessary conditions and both demands are on the exact card. A stationary pair, full card and countdown are appropriate during the response. The specified removal of old results, formula, motion, endpoints and answer captions prevents source-level answer leakage. Actual implementation must also prevent the next feedback subtitle from appearing early.

The 25-second hold offers a bounded attempt plus an explicit pause-for-longer option. Source planning alone cannot establish that its reading burden fits a phone or that the hold begins after the entire prompt. The brief must keep both demands and all conditions visible through the entire hold.

Scene 8 correctly answers both demands: together, the three matching vertical conditions, and 3 s from short working. It crosses out one specific longer-path misconception and avoids the unasked horizontal calculation. The exact feedback paragraph is 61 whitespace-separated words; a 25 to 30 s target is plausible but unverified. Actual spoken mathematical expressions and pauses must be measured. Source word count is not listening evidence.

The optional notes contain the useful condition test and the two calculation steps. A quiet copy/pause hold is appropriate. They do not ask students to copy while following new reasoning. The source selects information rather than compensating for overload with smaller type.

## Requirements to verify in the implementation

These are unresolved checks, not findings that the nonexistent implementation has failed:

- One physical clock must drive both vertical positions and instantaneous vertical velocity arrows. Presentation freezes must freeze both. The t = 0 downward arrow must have zero length. Equal-time samples must show equal horizontal steps and increasing vertical drops.
- Keep the constant downward acceleration distinct from increasing downward velocity. The pack's arrow labels are necessary. Do not turn velocity arrows into growing gravity-force arrows.
- Adapt the ground and release positions so A does not fall through a cliff drawing. Define visible ball-radius contact consistently while preserving the same centre displacement. Clamp both bodies at the same first-contact event; module5's raw `at(t)` does not itself clamp t.
- Maintain the height/distance-fallen distinction, labelled units, consistent geometric scales and the deliberate separation between vertical givens and B's horizontal case label.
- Inspect the actual desktop and phone question states, caption space, exact reveal order and notes hold. Review continuous silent motion before recording, then repeat learning review on the exact voiced revision with separate human listening.

The schema 4 brief, recording-stage check, paid-voice authorisation, exact voiced preview, export check and package gate all remain pending. This report approves no recording, full export, publication or practical coverage.

## Curriculum reference check and evidence limits

Checked the linked [official NESA 2017 course page](https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017) on 25 October 2026. Its implementation table confirms the Year 12 transition described in the pack, and its course list places Advanced Mechanics in Module 5. Downloaded the linked [official 2017 syllabus DOCX](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx) in memory and inspected its projectile-motion assumptions and component-analysis requirement. The pack's limited curriculum statement is supported. This is not a full dotpoint/practical audit or metadata approval.

Reviewed source SHA is recorded at the top. Original video repository reference HEAD is `add81eea0993a7997710a2bd79e150d773865231`; the draft and Physics asset files are not pinned by that commit alone. Their exact current hashes were checked against the pack. No still from the proposed new lesson exists, and no human or learner has been observed using it in this review.
