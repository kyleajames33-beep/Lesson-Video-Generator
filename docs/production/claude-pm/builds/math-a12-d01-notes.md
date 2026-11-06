# math-a12-d01 (differentiating k e^(ax+b)): Revision 6 rebuild on the maths studio kit, 6 Nov 2026

Sheet: `math-a12-d01-sheet.jpg` (16 evenly spaced stills over 16,217 frames, at (i − 0.5)/16 of the total; key notes held at 1,200 frames). Rendered at concurrency 1 under the stills lock.
Builder's grade: A on all 16 frames, after root's polish round on frames 2 and 13 (re-sheeted). Not yet watched at playback speed. Root to sign off.

## Files
Created in `src/explainer/lessons/math-a12-d01/`:
- `common.ts`: measured lesson lookups (`sc`, `cue`, `dur`, `hold`).
- `parts.tsx`: colour-role legend, `FlaskField` (plate, cloudy cross-fade, magnifier leader, live `GrowthField`), `FlaskThumb` (flask and field thumbnail with live count and growth-rate tickers), `ClockStrip` (hook bottom strip), `RecallChip`, `HBrace`, `QuestionRing`, `CurveLabel`, `WorkingSpace`, `KRule`/`General` formula helpers.
- `s1.tsx` (scenes 1 to 4), `s2.tsx` (5 to 8), `s3.tsx` (9 to 13), `s4.tsx` (14 to 17), `scenes.tsx`, `assets.ts`, `config.ts`.

Deleted (v1, in git history): `common.tsx`, `parts.tsx` (v1), `s1-s6.tsx`, `s7-s10.tsx`, `s11-s16.tsx`, `scenes.ts`, and the v1 `assets.ts` and `config.ts` (rewritten).

Unchanged: the registry entry (`config_math_a12_d01`, composition `Explainer-math-a12-d01`); no other file edited. The kit (`src/explainer/math/studio/`, `math/kit.tsx`) is imported read-only.

`config.ts` uses the measured `lesson.json` (17 scenes) and lifts key notes to `Math.max(1200, durationInFrames)` (measured 1,167, so 40.0 s).

## Plates
All used plates exist: `ma12-microscope-field-v1`, `ma12-rod-cell-v1`, `ma12-rod-cell-dividing-v1`, and the Biology straight-neck clear and cloudy flask pair (`_placeholder-broth-flask*.png`, per root decision 3). All drawn at native aspect via the kit's alpha-box placement. None missing; no coded organism or flask.

## Departures from the design (with reasons)
- Scene 1: the bottom strip (root decision 4) is a live experiment clock (x in hours, 0 to 1.10 h) tied to the same timeline as the field and tickers, rather than empty paper. The "same" tag reads "same, every moment" beside a brace on both tickers.
- Scene 2: flasks 2 and 3 sit faintly in place from the first frame and light up on "second" and "third", so the opening frame is not two-thirds empty. Root polish: each flask has a live readout row under its equation from the first frame ("cells at x = 0" with its value, and a growth-rate bar that stays empty and labelled with a violet "?" until scene 6 answers it); the rows of flasks 2 and 3 sit faint until their equations are spoken. The question chip is 44 px, centred under the three; the "d/dx → ?" stubs replace it on "twist" at the same height. The ring question marks were dropped and "gaining faster now?" moved between the fields and labels, because both ran into the scene heading. The target strip `y = k e^(ax+b)` is centred below the row (not above it) because the row fills the top; it appears on "how to differentiate" (frame 1043) rather than the final "b" (1140), which is only 16 frames before the scene ends. Mini fields run a slow clock (counts drift up a little) so cells visibly split, faster in the fast strain.
- Scene 3: before the curve draws on "x", the flask's counts at 0, ¼, ½, ¾ and 1 hour appear as dots on the empty axes (with "the flask's counts"), so the graph is never empty and the curve visibly passes through the anchor's data. The point and readouts appear on "From Year 11" and ride from x = −1.5. The design's "same" tag is "height = gradient: same" under the board; the "per cell" tag is "gradient ÷ height = 1: per cell".
- Scenes 3 and 4 thumbnail tickers follow the graph's point (count = height, rate = gradient at that time), so they flash in step with the board as designed.
- Scene 4: the thumbnail switches from the first strain to the fast strain during the squash morph (the curve is the fast strain from then on), not on "hour"; on "hour" its tickers glow and the tag "every million adds 2 million/h" writes. The window runs to x = 2.7 so the rise label at x = 2 is not hidden by the board.
- Curve equations are placed as fixed labels in the empty upper left of each graph (scenes 3 to 7, 10, 15, 16) instead of the kit's edge label, which clipped under the right-hand panels.
- Scene 5: window x −2.5 to 4.5, y 0 to 9 (root decision 1); gradient and ratio dim during the fold (root decision 2, kit behaviour). The thumbnail field (painted cells fading) sits in a small "in the flask" card at the lower right. The arrow "= a, every time" draws on "Whatever" (1023) rather than the last "a" (1119), 24 frames before the scene ends.
- Scene 6: part A tags sit in the right column (they collided with the axis labels under the curve). In part B the race starts on the first "hour" (754): the fast strain's rate reaches 2.00 quickly, the early flask's starts slower, overtakes and stops at 2.72; a green tick and "gains faster now" land on the second "hour". Rate bars under each growth-rate ticker make the race readable in stills. "a sets gradient ÷ height" writes on "That's what a measures" (1150), not the last word (1231).
- Scene 7: the flasks enter one by one and the combined ticker counts 1, 2, 3 million with them. The Year 11 chip sits inside the graph's empty upper left. The summary strip replaces the result card at the lower left on "Only a changes that".
- Scene 8: the left card carries the chain rule, the inside-part slot and "b is a constant: its derivative is 0" (instead of a tag on the shrinking row 2, whose position moves). The teal mini graph appears on "just like the early flask". The k frame appears on "k out the front" (1116) rather than "along" (1170), 18 frames before the end. Rows are 66 px current, 42 px earlier.
- Scenes 9 and 10: the proved rule (green frame) is carried onto the empty working area until the first working row arrives ("Let's use it"). Worked example 2 also shows a three-step plan card (read off k, a, b; copy and multiply; substitute), the current step highlighted, which slides down as the working builds and leaves before the substitution rows. Its givens card is titled "Match the pattern" with `k e^(ax+b)` from the first frame and k, a, b written on their spoken words with dashed leaders to the equation. The graph check curve and point (with "slope here?") are visible from the start; tangent, triangle and readouts arrive on "Check the graph". The task strip is written in before the scene starts so the opening frame reads "Find f′(−3)" whole.
- Scene 9 step 1 leader (root decision 4): a hand arrow from the givens card's u = 3x up to the power slot, tagged "the power is the inside part".
- Scene 11: a lesson-local framed card (same frame style as the kit's `MemoryAidCard`) with fixed rows, so the three flask icons sit faintly from the first frame and light with their lines (the kit card grows row by row, leaving a thin opening). Main line on "copy the exponential" (615), formula on "and by a" (710).
- Scenes 12 and 14: a ruled, dashed "your working" box under the question card (as in the Biology Module 5 practice frames) so the response frames are not half empty. Nothing answer-bearing; roles off.
- Scene 13 (root polish): the curve y = 4e^(2x − 1) sits as a small graph in the right panel from the first frame, with the point at x = ½ marked (drop line, "x = ½"); on "is eight" (569) its violet tangent draws with the tag "slope 8". The crossed mistake card stays on its cue, full width below the working and the graph.
- Scenes 13 and 15: a "Match the pattern" card (k, a, b in role colours) sits beside the shrunk question card when the roles switch on. Feedback 2 shows the curve y = 3e^(−2x) from the start (the question's own curve); the point and downhill tangent arrive at "At zero" and "minus six", and the point rides on "decreasing". The crossed mistake card appears on "It isn't" (681), not "does" (761).
- Scene 16: the memory line is "So far: copy the exponential, then multiply by k and a." The "Next: exponentials with other bases" chip appears on "Find that number".
- Scene 17: five bullets at 40 px on the left; the framed card on the right carries the main line, the flask key with plate icons and the formula, filling the lower right (root decision 4).

## Cue check
All 123 `cue()` phrases resolve against `docs/production/claude-pm/lessons/math-a12-d01/measured/lesson.json` (checked by script; `cueFrame` also throws at render if one is missing). Countdowns use the measured `responseHold` frames (attempt 1: 329 to 629; attempt 2: 454 to 754) with "Pause here to answer." on its spoken cue.

## Typecheck
Scoped tsconfig (kit index, this lesson, types) in the scratchpad: clean.

## Grade per frame (final sheet)
1 hook A; 2 three flasks A (root polish: readout rows with the empty "?" growth-rate bars, larger centred question chip); 3 graph A; 4 squash A; 5 dial A; 6 slide A; 7 racing flasks A; 8 stretch A; 9 proof A; 10 worked 2 opening A (plan card fix); 11 worked 2 graph check A; 12 attempt 1 A; 13 feedback 1 A (root polish: f(x) graph with the point at x = ½ in the right panel); 14 attempt 2 A (countdown ring visible, reading 2, with "Pause here to answer." and the working box); 15 handoff A; 16 key notes A.

## Check at playback speed
- Scene 1: the first division on "two" (one rod swaps to the pinched sprite and splits), the count of painted cells following the tickers to 24, the flask clouding, the clock knob moving.
- Scene 4: the squash morph (curve, triangle and point together; run 1 to ½, rise kept), then the point riding to x = 0.
- Scene 5: the slider sweeps 2 → 3 → ½ → 2 and the mirror fold to −2 (readouts dim, never show a = 0); the field cells fading.
- Scene 6: the rigid slide with the triangle attached; then the race: the fast strain's ticker leads, the early flask's overtakes and stops higher.
- Scene 7: the stretch (rise 1 to 3, run fixed) and the three flasks entering with the combined ticker.
- Hand tags write on in time with their words; no more than two tags live at once except the hook's last two seconds.
- Plates: none stretched; the clear and cloudy flasks cross-fade with no edge movement.
