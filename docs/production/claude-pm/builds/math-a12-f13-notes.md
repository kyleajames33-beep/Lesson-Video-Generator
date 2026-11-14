# math-a12-f13 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 14 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f13-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 13,438 frames (448 s), 15 scenes; the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · FINANCIAL MATHEMATICS".

## Files
- `src/explainer/lessons/math-a12-f13/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing in a script check), `config.ts`, `assets.ts` (the super statement; the reused phone for f14's opening), `scenes.tsx` (re-exports `F13FinalFrame`);
  - `parts.tsx`: re-exports f09's parts (read-only). Load-time checks from the kit's money engine: FV = 13,954.01 (and the 60-month schedule), earnings 1,954.01, deposits worth 200.00, 201.00, 267.09 and 268.43, n = 3 gives 603.01 (401.00 and 603.005 by the recurrence), Problem 1 (20,298.05; 2,298.05), 30 years (240,644.24; earnings first exceed contributions at deposit 316: 189,797.88), A1 (4,973.07; slip 5,221.72), A2 (6,211.63; 211.63; slip 509.00). Rigs: `SuperSheet` (coded lines on the plate's four measured rules, a header and the lower panel), `SaveStrip` (f12's month strip; f12 draws its final frame with it);
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 9), `s3.tsx` (10 to 15; `YearTower`, `StairIcon`, `F13FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry (after f11; f12's entry belongs to the other agent and sits where they put it).

## Joins
- **Frame 0 is `F12FinalFrame`** (imported from `../math-a12-f12/s3`; f12 draws it with this lesson's `SuperSheet` and `SaveStrip`). It fades over frames 14 to 28; the statement, the strip and the three choice chips continue underneath.
- **Final frame: `F13FinalFrame`** (f14's opening; f14 already imports it): heading "A savings app", the reused phone (810 px tall) with the kit's `ScreenApp` ("Savings": Start $0, Deposit $300 a month, Rate 4.8% p.a., Years 5, Balance $20,298.05, a mini growth graph), a "?" beside four controls, the hand list "a bigger deposit?", "a higher rate?", "more years?", "money to start?" at the left, chips "Next: which change matters most?" and "?".

## Plate fit
- **Super statement (`ma12-super-statement-v1.png`, 1070 × 1470, alpha > 32 box [214, 321, 857, 1165]; header [359, 486, 853, 540]; rules at y 641, 684, 728, 772 from x 392 to 824; panel [383, 836, 830, 1101])** at 760 px tall (scenes 1 and 4), 600 px (attempt 2 and its feedback), 300 px (scene 2 thumbnail). The rules are 43 file px apart, so the coded lines are 26 to 28 px; the panel carries the 34 px values in scene 4.
- **Phone (reused, d03 box and screen)** at 810 px tall in the handoff, its screen drawn by `PhoneApp` (34 px rows).

## Departures from the design
- **Statement lines:** shortened to fit the rules ("$200 at each month end", "6% p.a., monthly", "60 × $200 = $12,000", "Balance after 5 years: ?"); 26 to 28 px, not 40 px (the rules are too close together).
- **Scene 1:** the "rule used: n of 60" counter is a hand tag; the strip's bars fade on "follow each deposit" and the arrows stay.
- **Scene 2:** the kit's `DepositTower` stands built at month 60 from the first frame; glows mark blocks 60, 59 and 1; the month replay runs over the last sentence (about 2.7 s).
- **Scene 3:** the tower stays standing at the right (no slide into one column); a plan card holds the left until the terms are read; newest-first terms write as a ladder with amber arcs.
- **Scene 4:** a coded column (blue $12,000 and amber $1,954.01) stands at the left; the statement returns at the right on "On the statement" with its panel filled.
- **Scene 5 (root's A pass):** the deposit bars are the hero: one bar per month at 0.8 px a dollar, growing one per table row, each stacked newest deposit at the bottom in blue with its amber interest layer on top (as scene 2's stack), value labels above and "+$1.00"/"+$2.00" interest tags; the series line sits under the bars it sums, and month 3's segments glow in turn on "deposit by deposit". The table shrank (32 px, 54 px rows); a green link joins the table's $603.01 to the sum's $603.01.
- **Scene 6 (root's A pass):** the conditions are a ticked checklist anchored to the timeline: "equal M at the end of each period" bracketed under the payment arrows, "read just after payment n" at the FV flag, "starts at $0" at 0, "r per period" between ticks 1 and 2, "n = number of periods" at n, each on its spoken cue; the small Super statement plate (M = $200, r = 0.005, FV = $13,954.01) stands at the right so the formula ties to the object. The old conditions card is gone.
- **Scene 8:** the marker runs to 30 years, then back to 26 years 4 months (deposit 316) where two bars compare earnings and contributions.
- **Scene 9:** a staircase icon (ten coded blocks) in place of a plate icon.
- **Attempt 2:** the picture is the super statement plate small with the question's givens (the design asked for a coded strip).

- **Feedback 1 (root's A pass):** the year bars are enlarged (165 px pitch) with their 4 yr to 0 yr growth labels; the narrated sum writes at the left one line per cue, then (b), the answer and the crossed-out $5,221.72. A plan card ("each $900 earns interest for the years left after it is paid") holds the left until the first line.
- **Phones (handoff and f15):** `PhoneApp` (this lesson's parts) draws the phone plate with its own screen text at 34 px or more (title 36 px, balance 38 px) in place of the kit `ScreenApp` (26 to 28 px). f15's `GoalPhone` and so f14's final frame use it too.
## Cue check
Every phrase resolves (0 missing). Repeated phrases named: "It's worth" 2 of 2 (scene 2); "five" 4 of 4 (scene 3); "cent" 1 of 2 (scene 4); "end of each period" 1 of 2 (scene 6); "five cents" 1 of 2 (scene 7); "put in" 3 of 3 (scene 8); "sixty-three" 1 of 2 (scene 13).

## Live readouts
- Scene 2 (replay): the tower's own readout board (deposits made, put in, balance) from the kit's schedule.
- Scene 8: years, balance, put in and earnings from the closed form at the marker's whole month.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f13` after root's A-pass fixes (14 November): **PASS WITH WARNINGS (0 failures, 1 warning)**: "few pictures" (7 of 15 teaching frames; the towers, bars, strips and graphs are coded). The three sparse-frame warnings (scene 5 at 56%, scene 6 at 52%, feedback 1 at 52%) have cleared. Before this pass: 0 failures, 4 warnings. Earlier runs failed scene 3 (mostly empty while the 60-block tower slid into a column), scene 5 (mostly empty) and scene 7 (no 44 px line before the rows). Report: `out/explainer/Explainer-math-a12-f13/grade/Explainer-math-a12-f13-grade.md`; sheet remade (`math-a12-f13-sheet.jpg`).

## 1 fps sweep
First build: full sweep with the grade script (`--frames 448`, one a second), every third frame inspected on 5 × 5 contact sheets, plus its automatic findings. Found and fixed then: scene 3's diagonal smear while 60 blocks merged (no merge now; plan card, tower kept at the right); scene 5 mostly empty for its first 6 s; scene 6 mostly empty for 8 s; the memory card nearly blank for 3 s (first line on "Here's a way"); the handoff recap mostly empty for 15 s (the statement thumbnail and a staircase added) and its "Next" chip off the right edge; scene 7's empty right side (plan card) and its tower under the givens card; the replay board over the "balance read here" flag; a wide empty chip in scene 2; the givens strip of feedback 2 wrapping onto the working row; the "FV" flag label at the frame edge.

A-pass re-sweep: every frame a second over the changed scenes (scene 5, scene 6, feedback 1 and the handoff with the new phone; 112 stills), all inspected on 5 × 5 contact sheets. Found and fixed: feedback 1's left half empty for 4 s before the first working line (plan card). Seen and left: scene 5 shows only the table and the first bar for its first 3 s (the bars grow with the table rows, as asked); scene 6's middle band is empty for about 12 s until the first tick, because the ticks arrive on their spoken conditions (the timeline, the series row and the Super plate fill the frame meanwhile).

Final ink-check round: in scene 8 the dashed "put in" line ran through both graph labels. "put in: $300 × months" now sits below the dashed line near its right end, clear of it along its whole width, and "earnings" sits in the middle of the shaded band at 25 years, away from both lines and the 20 and 30 year brackets. Scene 8 was re-swept at 1 fps (33 stills): clean. Grade rerun: 0 failures, 1 warning (few pictures). The sheet was remade because sheet frame 10 is in scene 8.

## Kit notes for root (described, not edited)
- `DepositTower`'s merge slides the blocks diagonally through the frame; at 60 blocks the mid-slide frames read as a smear. f13 does not use it for 60 blocks.
- The super statement's rules are too close for the standard's 40 px field text at any on-screen size.

## Check at playback speed
- Scene 2: the glows on blocks 60, 59 and 1, and the replay of 60 months in under 3 s (it may read too fast).
- Scene 5: the month bars growing one per table row, and month 3's deposit segments glowing in turn on "deposit by deposit".
- Scene 6: each tick arriving on its spoken condition.
- Scene 8: the marker running to 30 years and back to deposit 316, and the amber gap filling.
- Handoff: the "?" marks arriving with "bigger deposit", "higher rate", "more years", "to start".

## Honest grade
**A**: 0 failures and only the whole-lesson "few pictures" warning. Scene 5 now shows the deposits growing as stacked bars beside the table and the series, scene 6 ties the formula to a ticked timeline and the Super plate, and feedback 1 has large year bars with its working at the left. Soft spots root may weigh: the Super statement's coded lines are 26 to 28 px (accepted for plate fields, with the full wording on the hand tags and givens cards); scene 6's ticks arrive late in the scene, so its middle band waits about 12 s; the 60-month replay in scene 2 is under 3 s.
