# bio-m8-b10 (incidence, prevalence and mortality): new build, 7 Nov 2026

Sheet: `bio-m8-b10-sheet.jpg` (16 evenly spaced stills over 14,316 frames; key notes held at 1,200 frames). Composition `Explainer-bio-m8-b10`, measured narration `docs/production/claude-pm/lessons/m8b10/measured/lesson.json`. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b10/`: `common.ts` (lookups, the AIHW series read from `docs/production/claude-pm/assets/brief118-aihw-cancer-mortality.json`, both questions and tables), `assets.ts` (pancreas, lungs), `parts.tsx` (MeasuresBar, TaskStrip, Givens, Axes, Line, Bars, Pyramid, Squares100, Calendar, TankS, Spark3), `s1.tsx` (1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10a to 12), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b07/parts` (board, PreRing), `bio-m7-b13/parts` (Tank), `bio-m8-g01/parts` (DotBlock), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import `config_m8b10` and the array entry.

## Plates
Both design-named plates exist and were inspected (m8-pancreas, m8-lungs-healthy). None missing. No new plates (design: coded charts).

## Departures from the design
- MeasuresBar, DataBoard pieces and the pyramid are lesson-local, not in the shared Module 8 folder (no shared or other lessons' files edited).
- Measures bar in scenes 2 to 6 only; scene 7 lifts it into the bar chart; scenes 8 and 9 omit it (space).
- Scene 3 "case" panel is a case-definition checklist (confirmed by a doctor: tick; suspected: cross), not a record-card object.
- Scene 4 adds a 1,000-dot block for the sense check (2 in every 1,000); scene 5 a 100-square strip for 5.5%.
- Scene 8 keeps the hook's count line and the age-standardised line faint from the first frame, with the crude line drawn on "crude"; the two pyramids morph to one age mix on "age-standardised".
- Q1 right half: lungs plate (300 px) plus a coded strip of the key given (age stacks X, Y). Q2 right half: no painted plate fits an unnamed disease; a sparkline panel of the table's three rows carries the data.
- Bars draw as empty outlines from the first frame and fill on cue; chips show faintly and light on cue; PreRing from 12 frames before "Pause here to answer."
- Key notes trimmed to five short bullets with the framed memory card.

## Cue check
Every cue and table/stem underline resolves (configs load; `marksCheck` passes).

## Grade per frame (final sheet)
1 hook A; 2 three measures A; 3 case/population/time A; 4 incidence A- (lower right fills at its cues; dot block faint until the sense check); 5 prevalence A- (100-square strip faint before "as a percentage"); 6 mortality A; 7 why they differ A; 8 crude/age A; 9 collect A; 10 Q1 A; 11 Q1 countdown A; 12 feedback 1 A; 13 Q2 at the pause A; 14 feedback 2 A; 15 decision A; 16 key notes A.

## Check at playback speed
- Hook: both AIHW lines drawing; 2024 and 2025 dashed.
- Scenes 4 to 6: each working line on its spoken number; denominator pulses on "the whole population".
- Scene 7: tank 1 drain narrowing and level rising on "better treatment".
- Scene 8: bar relabel to "300 per 100,000"; pyramid morph timing.
- Q2 table legibility at 34 px (three-line row labels).

## Root review round (7 Nov)
- Collect and represent: AIHW source card solid from the first frame; line chart drawn with a full visible grid; bar chart outlines solid (empty) from the first frame; value chips enlarged to 46 px under the source card, faint until 'denominator'.
- Frames 4 and 5 kept as they were (root: keep the rest).
- Final grade per frame: 14 A, 2 A- (frames 4 and 5: lower right fills on its cues; the dot block and square strip wait faint).
