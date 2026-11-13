# math-a12-f01 build notes (Revision 3 build on the measured narration)

Builder: Claude build agent, 13 November 2026. Not committed. Sheet: `docs/production/claude-pm/builds/math-a12-f01-sheet.jpg` (the 16 grade-checker frames, no stamps). Length as measured: 16,018 frames (534 s); the notes scene is 1,350 frames. Header: "MATHEMATICS ADVANCED · SEQUENCES AND SERIES".

## Files
- `src/explainer/lessons/math-a12-f01/`:
  - `common.ts`, `cuemap.ts` (every cue resolved at load; 0 missing, also checked by script against the measured captions), `config.ts` (key notes `Math.max(1350, durationInFrames)`), `assets.ts` (scoreboard, ball, grass strip, stacking chair), `scenes.tsx` (re-exports `F01FinalFrame`);
  - `parts.tsx`: load-time checks of every value (hook −1, 0, 9, 32; Team A totals 1, 4, 9, 16 and Team B 7, 12, 15, 16; 2n with partial sums 2, 6, 12, 20, 30, 42, 56, 72 and a₅₀ = 100; ∑ (2k − 1) to 4 = 16; ∑ k² from 3 to 7 = 135 and 5 terms; Problem 1 terms 1, 3, 7, 13, 21 and 45; first ten odd numbers 100 with last term 19; A1 44 and the crossed 28; A2 8, 6, 4, 2 and 20; chairs 80, 86, 92). Lesson rigs: `Scoreboard` (plate plus coded labels and flip numbers in the measured panels), `Grass` (tiled, clipped), `Ball` and `RollingBall`, `Ladder` (own term ladder: separate label timing, sliding window for the run-off, reorder arcs, end cap), `Stack` (partial-sum columns with dimming, pulse, the S₅ − S₄ overlay, a clip line and a squeeze), `SigmaBox` (big ∑ with dashed start, stop and rule slots), `Sig` (inline display ∑), `Posts` (counter posts with numbered gaps), `Sb` (true subscripts), `Slip` (crossed slip with caption, optional delayed strike), board parts;
  - `s1.tsx` (scenes 1 to 5), `s2.tsx` (6 to 10, `AID_LINES`), `s3.tsx` (11 to 16, `F01FinalFrame`).
- `src/explainer/registry.ts`: one import and one array entry, after i14.

## Joins
- Frame 0 is `I14FinalFrame` (imported from `../math-a12-i14/s3`), drawn on top of an exact replica of its plot. It fades out over frames 26 to 42, leaving the replica plot and the four numbers as blue ladder cards (labels t = 1 to 4), so the list "settles into cards" with no jump. The heading writes on from frame 10.
- The final frame is `F01FinalFrame` (scene 15's chair board: three nested chairs at 6 px per cm with the cm scale, the dashed top lines and "+6 cm each" brackets, the ladder 80, 86, 92 with "+6" arcs, "Next: the same step every time" and "?"). The notes cross-fade back to it over their last 40 frames. f02 opens on it.

## Plate fit (root decision 30)
- **Scoreboard (`ma12-cricket-scoreboard-v1.png`, 1448 × 1086, alpha32 box [250, 131, 1193, 978]):** placed by the alpha box at uniform scale (450 to 740 px wide). The coded "TEAM A TOTAL", "TOTAL" and "OVER" labels and the flip numbers sit inside Codex's recommended code rects [366, 342, 1080, 606] and [368, 647, 1079, 762]; the value sits below the label inside the upper panel.
- **Grass (`ma12-cricket-grass-strip-v1.png`, 2172 × 724):** tiled at native aspect and clipped to file y 500 to 616 (inside the alpha32 band 494 to 621), so the bright low-alpha fringe never shows; the seam is under the scoreboard posts or off frame in every scene.
- **Ball (`ma12-cricket-ball-v1.png`, alpha32 box [213, 203, 1023, 1055]):** 64 to 86 px, rolling along the grass once per over, visible only while it rolls.
- **Stacking chair (`ma12-stacking-chair-side-v1.png`, alpha32 box [160, 194, 902, 1276]; 13.5125 px per cm, 6 cm = 81.075 file px):** drawn at 6 px per cm (each chair 480 px tall, 329 px wide), copies offset straight up by 6 cm (36 px), each new chair drawn behind (kit `SpriteStack`, uniform scale). The design asked for about 4 px per cm (370 px stack); 6 px per cm keeps the anchor above the 380 px floor.

## Departures from the design
- **Scene 1:** a small table "at t = 1 s: x = −1 m" to "at t = 4 s: x = 32 m" writes as the seconds are spoken, and ordinal tags "1st" to "4th" sit over the cards on "in a fixed order"; both fill the right half before "sequence". The plot fades on "cricket" (its scaled tick labels would fall below 26 px) and the cards move to the top left.
- **Scene 2:** a definition card (sequence, term, position, aₙ with the Tₙ alias) fills the lower half until "Say one team"; the race readout is a "totals: 1, 4, 9, 16" row under each ladder (the first total highlighted on the replay) rather than a separate `LiveReadoutBoard`; the scoreboards themselves flip.
- **Scene 3:** a "n → × 2 → aₙ, position in, term out" machine fills the lower left until the first term; the substitution row steps a₁ to a₅ with each card. The run-off slides the ladder three slots left with cards 12, 14, 16 entering and fading at the clip edge. The stump-and-bails icon is replaced by the hand tag "game over" (no coded cartoon of an object).
- **Scene 4:** `LiveReadoutBoard` "over n", "runs aₙ", "total Sₙ" beside the scoreboard; the S₅ − S₄ reading is three rows ("S₅ − S₄", "= a₅, the fifth over", "= 30 − 20 = 10") so that each arrives with its words (the design's single tag on "ten" would have shown for under a second).
- **Scene 5:** columns S₆ to S₈ build while the columns squeeze; readouts above the clip line are hidden; the chips sit under the grass.
- **Scene 6:** Team A's runs as a small ladder ("over 1" to "over 4") and the long sum "1 + 3 + 5 + 7" fill the frame until the dial; the dial ticks drop the cards and flip the scoreboard on "one, two, three, four", and each card glows on "one, three, five, seven".
- **Scene 7:** a "last time" card (∑ (2k − 1) = 16, four terms from k = 1) holds the right column until "In general"; the m morph rings the whole builder.
- **Scene 8:** the sigma builder and the S₅ column fade in only when they are spoken about (no empty slots on screen); the silent crossed slip "∑ (n² − n + 1)" lands on "k squared".
- **Scene 9:** ten position slots k = 1 to 10 from the first frame ("the first ten odd numbers: ten slots"); cards 9 to 17 drop on "k goes from one to ten" and 19 on "nineteen".
- **Memory aid (10) and notes card:** the aid is written as three lines ("Bottom: start." / "Top: stop." / "Count: top − bottom + 1.") so the line never breaks inside "top − bottom".
- **Attempt 2 picture:** the four slots carry "?" and the labels a₁ to a₄, and the column reads "S₄ = ?" (no empty boxes, nothing answer-bearing).
- **Feedback 2:** the S₄ column is 520 px tall with the block values 8, 6, 4, 2 written on it.
- **Handoff:** the recap is four large chips with the scoreboard (S₅ = 30); the first chair is already standing when the board changes on "Now look".
- **Subscripts:** the display and hand fonts lack ₖ, ᵢ, ⱼ and ₘ (they fell back to a serif face), so those are drawn as real subscripts (`Sb`); ₙ and the digit subscripts render in the display font.

## Cue check
`cuemap.ts` resolves every phrase at load; a separate script check against the measured captions found 0 missing. Repeated words named: scene 3 "six", "eight", "ten" #1; scene 4 "two", "twelve", "twenty", "thirty", "ten" #1; scene 6 dial ticks "one" #5, "two" #2, "three" #2, "four" #2 and card glows "one" #6, "three" #3, "five" #2, "seven" #2 (the first occurrences belong to "one, three, five, seven" and "k equals one tells you where to start"); scene 7 "j" #2 (the "j" of "a sub j", not "i to j"); scene 8 "one" #2, "three", "seven", "forty-five" #1; scene 9 "ten" #3 ("from one to ten", not "first ten"), "minus one" #1; scene 14 "two" #1.

## Grade checker
`npm run grade:explainer -- Explainer-math-a12-f01`: **PASS WITH WARNINGS (0 failures, 2 warnings)** on the final run: sparse frame 7 (scene 6 at frame 192, 52% bare paper) and sparse frame 12 (attempt 1 hold, 56%; question scenes only warn). Earlier runs: run 1 had 4 warnings (also scene 14 at 58% and 19 px sigma limits in the shrunk feedback card); fixed by a larger S₄ column and ladder, and 38 px limits in the shrunk card. Report: `out/explainer/Explainer-math-a12-f01/grade/Explainer-math-a12-f01-grade.md`.

## 1 fps sweep
Four sweeps of the whole composition at every 30th frame (half scale, with the text and card probe), every frame inspected on 6 × 5 contact sheets. Found and fixed:
- **Collisions:** scene 5 chips over the scoreboard (moved under the grass); scene 7 upper limit "7" on the heading and the lower limit "k = 3" on the term cards (builder geometry corrected: the ∑ glyph overflows its line box); scene 8 the "45" readout on the givens card and the slip over the ∑; feedback 1 the posts' bracket on the term cards; feedback 2 the "a₄ = 2" tag on card 4; the chair board's "cm" on the heading and the two "+6 cm" labels on each other; scene 6's Team A ladder labels on the scoreboard roof.
- **Empty boxes and thin openers:** the ladder drew dashed empty slots behind every ladder (now only where slots are asked for); the chair board showed three empty slots before the first chair; scene 6 opened on a small ∑ with a mostly empty frame (∑ now 280 px with Team A's runs beside it); scene 9 opened on empty slots and an empty builder (the builder now fades in when the counter is named).
- **Stale or late items:** scene 4's "= 10 = a₅" landed 18 frames before the scene ended (now three rows on their own words); scene 5 lost the teal Sₙ row at the cut (kept, camera continue).
- **Font fallback:** ₖ, ᵢ, ⱼ, ₘ drawn as real subscripts.
- The remaining probe flags are the ∑ glyph's line box overlapping its own limits (checked at full size: the limits are clear of the glyph) and the subscripts' boxes overlapping their base letters.

## Check at playback speed
- Scene 1: the I14 frame dissolving into the cards; the scoreboard rising on "cricket"; four overs flipping 2, 6, 12, 20 with the ball rolling once per over.
- Scene 2: Team B's cards travelling along arcs to the reversed slots while the labels stay; the race flipping both boards to 16; the replay back to over 1 with the rings on 1 and 7.
- Scene 3: the end cap lifting on "never stops" and the ladder sliding with 12, 14, 16 entering.
- Scene 4: each column building block by block in step with the scoreboard flip; the top-block pulse on "one more over"; the S₄ outline over S₅ with the top block glowing.
- Scene 5: the columns squeezing and S₆ to S₈ running off the top while the scoreboard flips to "…".
- Scene 6: the dial ticks, cards and scoreboard flips on "one, two, three, four" (about 25 frames apart).
- Scene 7: the k → m morph and back (about 1.5 s).
- Memory aid: the three lines writing on their cues.

## Honest grade
A on the checker (0 failures). Root may call two frames B+: frame 7 (scene 6 at frame 192: the ∑ slots are still empty while the narration introduces sigma, and the lower half holds only "1 + 3 + 5 + 7"), and frame 12 (attempt 1: question card, given card and the blank scoreboard; 56% bare paper, a question scene). Scenes 3 and 9 also run near 50% bare paper in their first seconds (not sheet frames).

## Probe check 13 Nov
- Line-through-text probe (`out/explainer/.repair-sweep/ink-check.sh`, 1 fps, three renders) before the render: 14 runs, 6 after fixes. Scene 1: the dashed links stop under the t labels, and "positions x (m) at t = 1, 2, 3, 4 s" sits on a paper pad (s1.tsx). Accepted: red strike-outs, scoreboard text on its painted plate, "game over" beside the plate edge, the "0" tick label.
- Sheet unchanged by the fixes (re-graded PASS WITH WARNINGS: 0 failures, 2 warnings; the new grade stills match the existing sheet), so no new sheet.
