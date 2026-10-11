# Motion and design standard

Added 11 October 2026. A batch of selected Module 5 lessons passed science, reading-load and learning reviews, then looked like static slides: black typed text, hard cuts, still paintings and a plain "pause" line. The owner rejected them. The cause was a one-sided rule set: every document warned against decorative motion, and none stated what a finished video must look like. This document is the positive half. It sits alongside [animation planning](../animation-planning.md), the [visual design handbook](../visual-design-handbook.md) and the [teaching/visual brief](teaching-visual-brief-template.md).

"Motion must explain" still applies. It means *choose motion that explains*, not *remove motion*. A lesson where the picture never changes while the narration describes a change has failed this standard, however correct its science.

## What every selected lesson must have

1. **Built on the shared engine.** Render through `src/LessonVideo.tsx` with the shared slide, diagram and animation components. One-off prototype components in `src/prototypes/` are for exploring a direction only. Before recording, port a useful prototype visual into a shared component. The production brief checker blocks a prototype renderer at recording and export (schema 4).
2. **The change happens on screen.** When narration describes a process (a tube growing, molecules crossing a surface, a spore case bursting, a piston moving, a graph line rising), the visual shows that change at its spoken cue. A label fading in beside a still picture is not the change.
3. **Attention is directed.** When narration names a part, the viewer's eye is taken there: a hand-drawn circle, underline or arrow from `src/animations/DoodlePrimitives.tsx`, a highlight, or a camera push in. Painted plates get a slow camera move and labels that draw on with leader lines.
4. **Hand-drawn character.** Use the handwritten headline face and the amber doodle layer described in the handbook for emphasis, warnings and the final rule. Use them where they focus attention or prevent a mistake, not as scattered decoration.
5. **Transitions carry meaning.** Use `src/transitions/pickTransition.ts`: a camera move for continuing the same idea or zooming from the whole to the part, and a clear change for a new case. No unexplained hard cuts between beats.
6. **Thinking pauses show the countdown.** Every response or thinking hold uses the shared countdown (see `QuickCheckSlide` and `SceneProgress`). The question and its needed conditions stay visible; the answer builds step by step afterwards.
7. **Calculations build.** Values arrive with their units, operations happen visibly (a quantity transforms, a number ticks, a bar resizes) and established results stay in place.
8. **One visual system per lesson and across a module run.** Same header, type, colour tokens and caption space. A set of lessons that mixes three templates looks unfinished.

## The slideshow test (fail if any apply)

Apply this in the student learning review and the exact voiced preview, at playback speed:

- Most scenes are text plus a still image, with the only motion being a fade.
- Narration describes a change that the picture never shows.
- A named part is never pointed at, circled or zoomed to.
- Beats change by hard cut.
- A thinking pause is a static line of text with no countdown.
- Scenes in the same lesson use visibly different templates.
- A diagram slot holds a text box.

Deliberate stillness remains valid for a key-notes copy hold, a reading hold on a finished board and the response interval itself. Mark those scenes `motionRole: "hold"` in the brief and say what the learner reads or does.

## What the brief must record (schema 4)

- `design.renderer`, `design.visualSystem`, `design.transitionPlan`.
- Per scene: `motionRole` (`explain` or `hold`), a specific `onScreenChange` tied to the narration cue, and `motionTools` naming the shared components or techniques used (for example `ScribbleCircle`, `CameraStage push`, `path draw-on`, `NumberTicker`, `countdown ring`).
- `motionPurpose` must describe that scene's own change. The checker rejects the same sentence pasted into three or more scenes, and a purpose that only lists prohibitions.

The checker verifies that these decisions exist; it cannot judge whether the motion is good. Only playback review can do that, so the exact voiced preview must be watched at speed, not judged from stills.
