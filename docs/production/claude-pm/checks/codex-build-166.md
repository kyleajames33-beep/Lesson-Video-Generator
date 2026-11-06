# Brief 166: math-a12-d01 local review build

4 November 2026. Revision 3 design, original measured narration from brief 165. All 16 scenes are registered as `Explainer-math-a12-d01`. This is a review build awaiting Claude's approval, not an approved lesson export.

## Build and source observations

The lesson follows the common/assets/parts/scene groups/scenes/config layout. Missing reusable curve, numeric readout, task-card, mark and notes parts were added to the shared Maths kit. Existing algebra options are backward compatible. No narration, measured input, design or legacy engine was changed. Captions are not burned in. There are no painted plates or human figures.

Scoped TypeScript checking passed. Preview v4 built with 19 local public files, 44.4 MB, in `out/prototypes/Explainer-math-a12-d01-preview-v4/`. No preview server was left running. The printed localhost address is the preview builder's proposed address, not evidence of a running service.

The exact derivative and worked/attempt answers were independently checked with Sympy: derivative ka exp(ax+b), worked value 10, attempt values 8 and -6. Both response holds are 300 frames at 30 fps. The notes scene includes the measured speech and a 60-second quiet hold; only its final second returns to the handoff. No earlier caption times were shifted by the build.

## Stills

118 key-cue and scene sample frames are indexed in `work/brief166/stills-v5.json`. Contact sheets: `checks/math-a12-d01-build166/contact-1.jpg` through `contact-5.jpg`. Individual frames remain in the indexed `stills-v3`, `stills-v4` and `stills-v5` folders under `out/explainer/Explainer-math-a12-d01/`.

The contact sheets were visually inspected. Task cards contain the full questions during both countdowns with no worked answer. The inspected algebra, graphs and notes fit the frame. Final worked-example frames were separately inspected after adding the cue-linked givens leaders and readouts. Transient run labels now agree with the changing triangle; the numeric ratio is rounded in its grey readout rather than displaying a long floating-point string.

The opening frame is the first course graph board, without a previous lesson. The final frame is the shared handoff: blue 2^x, grey e^x, axes x from -2 to 2 and y from 0 to 8, and the unknown exponent chip for d02. It agrees with d02's stated opening at source level. d02 is not built here, so pixel identity against a rendered d02 frame has not been tested.

## Pilot and cue table

`out/explainer/Explainer-math-a12-d01/pilot-v3.mp4`: 60 seconds, 1,800 frames, 30 fps, 960 x 540, H.264 video and mono 48 kHz AAC audio. It covers global frames 10520-12319: all of cue-heavy scene 10, all of scene 11 including its 10-second countdown, and the first 119 frames of scene 12. It was rendered as six consecutive ten-second muted sections, then joined with the original scene audio on the measured timeline. No new speech was generated. Complete audio/video decoding passed. The audio placement rounding is at most 0.333 ms.

The original full-minute render hit the shared font loader's timeout. Sequential ten-second sections completed under the single-render lock. This is a renderer workaround, not a change to playback timing.

The 86 source cue occurrences resolve against measured word tokens. `checks/math-a12-d01-build166/cue-timing.csv` records the word time, visual frame and frame quantisation for each. Maximum absolute quantisation is 16.333 ms, below the 150 ms target for the start of each coded change. This measures coded anchors against the saved alignment, not whether a human hears each word at that exact time or whether the complete animation settles within 150 ms.

## Review and listening still required

No human listening or browser playback pass is claimed. Brief 165's low-confidence letter e near scene 14 remains a listening item. Claude still needs to review motion, annotation emphasis and exact design fidelity. Scene 3's run-label circle/same tag and scene 4's height glow/minus-sign circle were completed and the resulting stills inspected. One implementation question remains: the design asks the gradient ticker to swing during the one-second reflection. An edge-on geometric fold has an unbounded projected slope, so the preview hides its numeric readout during that fold and restores it at the correct final value. Claude should confirm that treatment or specify the desired numeric path. The build is held for that decision and review; no exact-design pass is claimed. No full lesson render, commit, push or publication was performed.

Source hashes are recorded in `checks/math-a12-d01-build166/source-hashes.json`.
