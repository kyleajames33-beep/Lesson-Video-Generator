# Brief 172: math-a12-d01 build fixes after Claude's still review

Read `00-standing-rules.md` and `checks/codex-build-166.md` first. Do not spawn sub-agents. No design, narration or measured-input changes; no new speech; no commits. One render at a time.

Claude reviewed the five contact sheets (118 frames) on 5 November. The build follows the design closely and the attempt cards, countdowns, handoff and notes are right. Fix these, then rebuild the preview and re-shoot the affected stills.

**Decision on the held question.** During the one-second reflection in scene 4, hide both the numeric gradient readout and the tangent line while the fold is edge-on, then restore them at the correct final value (−5.44 at height 2.72). The near-vertical tangent at scene-04 local 543 must not show. No numeric path is needed.

**Fixes:**
1. **Scene 9 working rows are too pale.** Earlier rows (f′(x) = 5 × 2 × e^{2x+6}, = 10e^{2x+6}, f′(−3) = ...) fade to near invisible (local 1041, 1146, 1392). Dim established rows to about 65% opacity, so they read as earlier steps but stay legible. Apply the same rule wherever `AlignedAlgebra` dims earlier rows.
2. **Strike-through lines overshoot.** The crossed-mistake chips in scenes 8 (local 875, 1170), 12 (local 698) and 14 (local 776) draw a slanted line that runs past the chip's right edge. Keep the strike inside the crossed text, roughly level, ending at the text's end.
3. **Emphasis rings overshoot.** The rings around "gradient = 1 × height" (scene 6 local 821, 847) and the two gradient chips (scene 5 local 1222) are full-width ellipses wider than the chip. Fit each ring to the words it marks, with a small margin.
4. **Scene 12 row order.** "f′(½) = 8e⁰ = 8; 2(½) − 1 = 0" reads backwards. Write "2(½) − 1 = 0, so f′(½) = 8e⁰ = 8" (two rows, or one row in that order), with the same cue.
5. **Bottom safe area.** YouTube CC sits over the bottom of the frame. In scene 5 (local 986, 1222) the second readout panel reaches the bottom 10%. Keep all readouts and text above the bottom 12% of the frame, moving panels up or side by side.

Then render the full lesson (scripts/render-release.mjs with its teachingBriefPath gate), since owner policy from 28 October is to render built lessons without an owner preview pass. Report the output path, its duration and any check that failed.

**Hand-in:** to `status.md`: one line per fix with before and after still paths, then the render result.
