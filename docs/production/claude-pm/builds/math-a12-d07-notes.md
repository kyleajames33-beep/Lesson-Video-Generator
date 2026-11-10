# math-a12-d07 (the product rule with the new families; timber deck anchor): Revision 3 build on the maths studio kit, 10 Nov 2026

Sheet: `math-a12-d07-sheet.jpg` (16 evenly spaced stills over 15,969 frames at (i − 0.5)/16; key notes held at 1,350 frames). Rendered at concurrency 1 under the stills lock.
Builder's grade: A, with two frames that root should look at for fill (frame 4, the rectangle as the nudge shrinks; frame 11, the memory card before its strips replay). Not yet watched at playback speed.

## Files
Created in `src/explainer/lessons/math-a12-d07/`:
- `common.ts` (measured lookups, including the new `scene-01a`);
- `parts.tsx`: brief 235 deck plates (`ma12-timber-deck-v1` three-quarter view; `ma12-timber-deck-top-v1`, outer edge exactly 2:1), `DeckImg`, `DeckTop` (kit `AreaStrips` with the top plate as underlay, so the unit comes from the plate: 4 m = the plate's outer width; never stretched), `Legend`, `RectPic` (question-card rectangle, not to scale), the families eˣ ln x, x³ sin 2x, xe^(−x), eˣ/(x + 1); generic helpers are re-exported from `math-a12-d06/parts` (same builder);
- `s1.tsx` (scenes 1, 1a, 2, 3, 4), `s2.tsx` (5 to 9), `s3.tsx` (10 to 15), `scenes.tsx`, `assets.ts`, `config.ts`.
- Registry: `config_math_a12_d07` added (one import, one list entry; the file had changed since d06's edit, so it was re-read first).

Kit imported read-only: `FunctionSimulator` (rider with callback rows and signed turn bars), `AreaStrips`, `GrowthBars`, `LiveReadoutBoard`, `GivensCard`, `EquationStrip`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `QuestionCard`, `GivensStrip`, `KeyNotesBullets`, `HandTag`, `MarkSpan`.

## Plates
Both deck plates at native aspect; the top plate's alpha box (144, 107, 1560, 815) is the deck's outer edge, 1416 × 708 px. None missing.

## Departures from the design (with reasons)
- Scene 1: frame 0 is d06's final frame exactly (d06 exports `HandoffChrome`; the same stage, window, dashed factor curves, labels, "gradient ?" and "Next" chips). The d06 chrome fades on "Now" while the graph eases left to 1100 × 660 and the deck enters at the right (584 px wide; the right column cannot fit 620 px beside the graph). The true tangent from d06 stays on screen, dimmed while the guess is discussed, and returns at full weight on "steeply". The guess card arrives on "A quick guess".
- Scene 1a: the deck is drawn at 160 px per metre, not 200, so the one-day rate strips (5 m by 2.5 m in all) fit beside the board. After the half-day run the clock rewinds and the two one-day strips fill on their cues, each with its label; the grey corner is tagged "corner: change × change" during the run (not in the rate phase, where no corner is drawn). The board carries day, length, width, area, the guess row (circled red, tag "× 8 the guess") and the violet "area growing at, right now: 4.00 m² per day" row; the growth bars show area added (real against guess) during the run.
- Scene 2: a live board ("x", "nudge") fills the top while the nudge runs 0 → 0.3 → 0.02; the rectangle is at 350 px per unit; the strips appear on "side" and "top" (two `AreaStrips` layers, because the kit reveals all strips together). The rule card writes on "Divide by the nudge" (1125), not "prime" (1283, 19 frames before the end).
- Scenes 3 and 4: the rectangle icon at the top right is omitted (the readout board sits there). The board uses label-over-value rows so the turn bars fit in scene 4.
- Scenes 5 to 7: a Plan card (and in scene 7 a "The structure: x³ × sin(2x)" card) fills the working area until the first row; scene 6's first givens line is on screen from the start.
- Scene 8: the right column writes the substitution in two lines at 44 px (one line would not fit beside the stage graph).
- Scene 9: the card has two keys ("u′v: u changes, v stays", "uv′: v changes, u stays") so it fills from the start; the strips replay on the deck plate at the left on their cues; the term swap is shown as the line "u′v + uv′ = uv′ + u′v" rather than animated.
- Scene 13: the graph is on screen from the first frame (fill); the point arrives on "At x equals two" and the falling tangent on "three".
- Scene 14: the window, asymptote and point follow the design; the final frame is d08's opening (y = eˣ/(x + 1), dashed x = −1, ring at (0, 1), "gradient ?", "Next: the quotient rule").
- Key notes: five bullets at 42 px in the left 58%, framed card on the right with the deck plate and its key.

## Cue check
Every `cue()` phrase resolves against `lessons/math-a12-d07/measured/lesson.json`; each was listed with its context. Fixed: scene 1a "Each side's" (the apostrophe form), scene 3 "turn is zero" (not "slope is zero"), scene 9 "factors" (one occurrence). Countdowns use the measured holds (attempt 1: 268 to 568; attempt 2: 314 to 614), with the full ring from "Pause here to answer." (209 and 275).

## Kit issues found (not edited)
- `AreaStrips` reveals its side strip, top strip and corner together (`stripsAt`); separate cues need two layered instances.
- `Enter` puts its fade in `style.opacity`, so a caller's own `style.opacity` silently overrides the fade (my first build showed rows before their cues; fixed by dimming an inner element). Worth a note in the kit.
- As in d06: `QuestionCard`'s ring starts only at the hold (lesson `PreRing` used); `FunctionSimulator` defaults to `at = 0`, so a scene-1 graph fades in over 14 frames unless `at` is negative (this matters for a join frame).

## Typecheck
Scoped tsconfig in the scratchpad `build-d07`: clean (apart from the known unused `useMemo` in `src/explainer/kit.tsx`).

## Check at playback speed
- Scene 1: the d06 frame holding, then the graph easing left as the deck enters; the guess line against the steep tangent.
- Scene 1a: the clock run (deck strips growing, real bar racing the guess bar), the rewind, and the two one-day strips filling on their cues.
- Scene 2: the nudge shrinking 0.3 → 0.02 with the corner vanishing.
- Scenes 3 and 4: the rider sliding 1 → π/2 → 3π/4 with the turn rows and bars; the blue turn passing through zero.
- Scene 8: the wrong dashed tangent leaving the curve.

## Root review round (10 Nov)
5. Scene 2: the rectangle is a solid tinted area with "area = uv" at 48 px and side labels at 44 px; the strips are drawn at least 48 px thick, with a "strips not to scale" tag while they are exaggerated at the small nudge; the corner shrinks with the nudge; the readout board is at 64 px and the plot is 520 × 330.
6. Scene 13: working lines at a steady 52 px (older lines dim, never shrink) and the graph at 714 × 480.
Typecheck clean; sheet re-made.
