# bio-m8-b12 (managing type 2 diabetes): new build, 16 Nov 2026

Sheet: `bio-m8-b12-sheet.jpg` (the 16 grade frames, no stamps). Composition `Explainer-bio-m8-b12`, measured narration `docs/production/claude-pm/lessons/m8b12/measured/lesson.json` (unchanged); key notes held at 1,200 frames. Not yet watched at playback speed. No MP4 rendered.

## Files created
- `src/explainer/lessons/bio-m8-b12/`: `common.ts` (lookups, the two worded questions), `assets.ts` (16 plates with measured alpha boxes, feature points), `parts.tsx` (SlotStrip, Meter, KeyLock, GroupBars, Clusters, HexFlow, Vessel, Calendar, TickLine), `s1.tsx` (scenes 1 to 5, the mechanism strip and side meter), `s2.tsx` (6 to 10, the evidence frame), `s3.tsx` (11a to 13), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b08/parts` (and through it `bio-m8-b07/parts`, `bio-m8-g01/board`), `bio-m8-b08/s1` (Lab), `m8-shared/parts` (SignalPulse), `bio-m8-b11/parts` (FrameStrip), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: import and `config_m8b12` entry next to the other Module 8 entries.
- b13 to b16 import `bio-m8-b12/parts` read-only (SlotStrip, GroupBars, TickLine and the board through it).

## Plates
All design-named plates exist and were inspected on a gridded sheet: insulin pen, pancreatic islet, transporter pair (inside, membrane; b08's union box), liver, skeletal muscle, capsule blister, CGM reader (blank), red blood cells, eye, kidney, heart, sun protection, walking shoes, vegetable bowl, stomach and gut. None missing. Never stretched.

## Departures from the design (with reasons)
- Action chips dock into the mechanism strip with a pop and glow in place, not a flight across the frame: the flight crossed labels (ink check).
- Scene 2: the transporter pair moves from the recall position into the type 2 column at "Type 1 is different" (one continuous plate) instead of a cut.
- Scene 3: job 1 carries the CGM reader with a coded reading and a 2 to 14 mmol/L gauge moving into the usual band (design had a chip only); the three organ plates show from the first frame and label on cue.
- Scene 4: grey tag "and safe places to be active" dropped for space. Scene 5: the "hypoglycaemia" grey gloss dropped for space.
- Scene 7: staircase arrows removed (they crossed step text); "manages the consequence" sits above the lock.
- Scene 10: "other directions" chips (not spoken) omitted for space; appetite uses b07's RiskDial.
- Attempts (root rule: question, givens and a plate): card 1 carries the blister, shoes and pen plates and the HbA1c meter with 7.0 and 8.4 marks; card 2 carries its two-bar chart and the gut plate with the nausea and subsidy givens. Nothing answer-bearing.
- Feedback 1: framed answer "insulin alone won't fix the resistance" added (g01 layout). Feedback 2: four answer rows (design, size of effect, limits, use in practice) instead of the evidence frame, with a "1.1 difference" bracket on the chart.
- Key notes: five one-line bullets trimmed from the design's long notes (root rule); memory card "Type 1: no key. Type 2: the lock is jammed."

## Cue check
Every `cues()` phrase and every question underline resolves (config loads in Node; `marksCheck` passes). Holds use the measured `responseHold` frames with "Pause here to answer.", the shared countdown and b07's PreRing.

## Check at playback speed
- Scene 1: insulin pulses from the islet to the transporter plate; the pen dimming.
- Scene 2: the plate move at "Type 1 is different"; the islet greying on "immune cells"; key and jam timing.
- Scenes 4, 5, 7: chip pops in the strip land on "glucose leaves", "respond to", "liver releases", "helps muscle", "insulin", "Care also".
- Scene 6: meter grows to the centre on "HbA1c test" and returns on "Monitoring"; glucose hexagons attaching.
- Scene 8: cluster allocation (whole practices) on "randomly assigned"; the mechanism strip sliding away while the evidence frame rises.
- Scene 10: glucose gauge and the islet glow only above the band.

## Grade and ink check
- `npm run grade:explainer -- Explainer-bio-m8-b12`: PASS WITH WARNINGS (0 failures, 1 warning: dense key notes, 498 characters including the memory card). Report: `out/explainer/Explainer-bio-m8-b12/grade/Explainer-bio-m8-b12-grade.md`.
- My grade per frame (final sheet): 1 hook A; 2 types A; 3 two jobs A; 4 lifestyle A; 5 metformin A; 6 step-up (opening, before "steps up") A-, the right half carries only the transporter plate for the first 3.6 s; 7 step-up A; 8 DiRECT A; 9 future direction (opening) A-, trial outcomes show as grey preview questions until "Large trials"; 10 future direction A; 11 question 1 A; 12 feedback 1 A; 13 question 2 A; 14 feedback 2 A; 15 decision rule A; 16 notes A.
- Ink check (`ink-check-any.sh bio-m8-b12`): 9 runs. 5 are the deliberate red crossed mistakes. 4 are in feedback 2: the shared QText amber underlines (givens) grazing descenders of the underlined line (8 to 12 px), the same pattern root accepted in bio-m8-g02 and g03; not changed. Earlier real collisions (pulse path through a chip, meter pointer through its title, chip flight through a label, staircase arrows, red arrow through a label, glow edge under "mmol/L") were fixed and re-checked.
