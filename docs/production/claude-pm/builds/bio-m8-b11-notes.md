# bio-m8-b11 (judging an epidemiological study: Doll and Hill): new build, 7 Nov 2026

Sheet: `bio-m8-b11-sheet.jpg` (16 stills at (i + 0.5) / 16 over 14,694 frames; key notes held at 1,200 frames). Composition `Explainer-bio-m8-b11`, measured narration `docs/production/claude-pm/lessons/m8b11/measured/lesson.json`. Not yet watched at playback speed.

## Files created
- `src/explainer/lessons/bio-m8-b11/`: `common.ts` (lookups, two worded questions, 1954 Table IV values), `assets.ts` (10 plates, feature points), `parts.tsx` (StudyTimeline, MatchedPairs, DotField, RecordRows, FrameStrip, ChainRow, Bars54, Survival, Triangle, TallyCard, DotRow10, Arr), `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10), `s3.tsx` (11a to 13), `scenes.tsx`, `config.ts`.
- Imports read-only: `bio-m8-b07/parts` (and through it `bio-m8-g01/board`), `bio-m8-b07/common` (SMOKE, LUNG for the b07 trend thumbnail), `bio-m5-g01/board` (NotesBoard).
- `src/explainer/registry.ts`: `import {config_m8b11} from './lessons/bio-m8-b11/config';` and `config_m8b11` appended to `explainers`.

## Plates
All design-named plates exist and were inspected (contact sheet and gridded crops): cigarette pack, hospital case files, questionnaire envelope, record ledger, lungs healthy and smoker, airway cell, world map, clipboard, bread loaf. None missing. `m8-pancreas-v1.png` (alternative Next chip) not used.

## Departures from the design
- Frame strip and benefit chain are lesson-local (`FrameStrip` stacked four-row card; `ChainRow` with a picture slot per link) instead of b07's PathwayStrip: the slots need two-line answers and plates/chips inside links.
- Scene 1: pack plate and the four suspect chips (smoking plus three grey) show faint from the first frame and light on cue; the line between the two sourced end points is a straight join (tagged with the source).
- Scene 3: no heavy-smoking dots or bars (counts not supplied, so nothing implies a ratio); the heavy-smoking row is text only.
- Scene 4: the 1950 result rows sit at lower left until "bias" so the half is not empty; the memory "bubble" is the faded tally card (design doubt b).
- Scene 5: the frame strip does not linger shrunk; the triangle (with pack and smoker-lungs plates at its nodes) shrinks to the upper left at "cohort study", and the envelope, empty dot field and ledger appear at that cue (filled on their own cues).
- Scene 8: six evidence rows with a picture each on the left (faint first, lit on cue); the right panel swaps chart, world map, lungs and airway cell, survival sketch on cue.
- Scene 9/10: the benefit chain owns the middle band (not the bottom fifth); upper band holds the "finding vs benefit" contrast and, in scene 10, the dial, delay bar and clipboard (faint until "time and privacy").
- Attempt 1 has the case-files plate (about 250 px) and a coded strip of its givens (300 vs 600, 20-year window), per root's rule; design said no plate. Attempt 2 has the bread plate and a dates strip.
- Feedback 2 frame heads shortened to "finding, decision, action, outcome checked" to fit.
- Key notes (root round, 7 Nov): five one-line bullets at 46 px (root's wording); framed memory card "Cohort goes forward; case-control looks back."; hold 1,200 frames.

## Cue check
Every `cues()` phrase and every question underline resolves (config loads in Node; `marksCheck` passes). Holds use measured `responseHold` frames with the shared countdown, "Pause here to answer." and b07's PreRing from the pause cue.

## Grade per frame (final sheet)
Root round (7 Nov): dot-field outlines solid and the ledger solid from the cohort cue; survival panel and lines drawn before "fifty-year". 1 hook A; 2 designs A; 3 case-control A; 4 four steps A; 5 cohort A; 6 1954 A; 7 judge cohort A; 8 cause A; 9 benefit chain A; 10 limits A; 11 question 1 A; 12 feedback 1 A; 13 question 2 A; 14 feedback 2 A; 15 decision A; 16 notes A.

## Check at playback speed
- Scene 2: dots sorting by choice; allocation sweep dropping dots into groups; balance tags; pack sliding in and crossed.
- Scene 5: triangle shrink timing against "cohort study"; 400-dot fill wave; ledger marks.
- Scene 7: cohort arrow growing to 2001 on "fifty years"; strength and limitation text extending mid-slot.
- Scene 8: right-panel swaps land on each evidence clause (pacing is fast).
- Scene 10: first chain gap widening on "slow"; dot row splitting on "unequal".
