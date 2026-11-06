# bio-m8-p02 (Biology practical: plant water loss with a potometer): new build, 7 Nov 2026

Sheet: `bio-m8-p02-sheet.jpg` (16 stills at (i + 0.5) / 16 over 14,723 frames; key notes held at 1,200 frames). Composition `Explainer-bio-m8-p02`, measured narration `docs/production/claude-pm/lessons/m8p02b/measured/lesson.json` (key m8p02b confirmed against the design's Build ids). Folder `bio-m8-p02`; `chem-m8-p02` untouched. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-p02/`: `common.ts`, `assets.ts` (12 plates; potometer feature points incl. measured capillary ticks 0 to 70 mm; 20 lower and 3 upper stomata positions), `parts.tsx` (Pot with bubble, mm numerals, flow arrows, seal rings, end ticks; ShootCrop and LeafCrop from the potometer plate at uniform scale; Fan with blade blur and air lines; Watch arc; StepRail; ItemCard; WaterTint; CountMarks), `s1.tsx` (scenes 1 to 6), `s2.tsx` (7 to 12), `s3.tsx` (13a to 15), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b07/parts` (board), `bio-m5-b06a/shared` (Cam), `m8-shared/parts` (EvapDots), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: `import {config_m8p02b} from './lessons/bio-m8-p02/config';` and `config_m8p02b` appended.

## Plates
All design-named plates exist and were inspected: potometer, stomata lower/upper (counted: exactly 20 and 3), desk fan, scalpel, clear nail varnish, leaf cross-section, stoma open, potted plant, microscope, stopwatch, white tile. None missing.

## Departures from the design
- Step rail runs along the bottom (not top left), scenes 2 to 12.
- Risk table: all three spoken hazards listed with their painted objects from the first frame; harm and control fill on cue, current row glows, finished rows dim (the p03/p04/p05 pattern root accepted) instead of one row at a time. Footer keeps the design's wording "follow your school's risk assessment"; the teacher-only rows are not shown. No method is presented as school-approved.
- Scene 4: the far-end bubble step is a magnified close-up of the plate with a lift-and-return glyph and a coded bubble entering (moving the plate's beaker region by code left a visible seam, so it was dropped); tag "end out of the water, then back in". The shoot fit is shown by the cut shoot fading and a ring on the potometer's bung.
- Scene 7: stopwatch shows a coded amber arc sweep (the plate has a painted hand); working sits in a framed card on the right.
- Scene 8: the reading table adds a "spread" column; means fill the bar pair outlines (outlines from the first frame).
- Scene 9/10: claim-card lines and count readouts show faint (or "?") from the first frame and light on cue.
- Scene 11: three cards with pictures from the first frame, lit in turn (p05 pattern), not one card at a time.
- Attempt 1 has the potometer plate and a strip of the two readings; attempt 2 the fan plate and a strip of the two sessions (root rule; design said no plate). Nothing answer-bearing.
- Key notes (root round, 7 Nov): five one-line bullets at 46 px (root's wording); memory card "The bubble measures what goes in, not what goes out." with "Change one factor, same shoot, settled, airtight." as its tag.

## Cue check
All cues and underlines resolve (config loads; `marksCheck` passes). Holds use measured `responseHold` frames with the shared countdown and PreRing from "Pause here to answer.".

## Grade per frame (final sheet)
Root round (7 Nov): card frames, headings and pictures solid from each scene's first frame (unspoken lines wait at 40 per cent, spoken lines full ink at 30 px or more); VRA cards no longer dim; plant plate solid; tile and scalpel about 300 px. 1 hook A; 2 potometer A; 3 set up A; 4 aim A; 5 control A; 6 results A; 7 claim card A; 8 stomata A; 9 VRA A; 10 risk A; 11 question 1 A; 12 feedback 1 A; 13 question 2 A; 14 feedback 2 A; 15 decision A; 16 notes A.

## Check at playback speed
- Hook: camera ease in on the bubble, fan sliding in with air lines, bubble speeding up after "fan".
- Scene 3: bubble carried by the flow chevrons, end ticks, plunger reset back to 0.
- Scene 4: cut line, seal rings, magnifier glyph and bubble entering, settle clock.
- Scene 6: six slots reordering to alternate; fan greying then restarting on "settle".
- Scene 7: bubble 0 to 21 mm with the stopwatch arc; edge marker and eye line.
- Scene 10: varnish patch and tape lift, slide to the stage, 20 count marks (fast), cross-fade to the upper field.
- Feedback 1: bag outline and humid EvapDots pooling.
