# Maths Standard Year 12 b01 to b07 Revision 1: learning review summary

19 November 2026. Independent student learning review of the eight bivariate data designs (`lessons/math-s12-b01.md`, `b02.md`, `b03.md`, `b04a.md`, `b04b.md`, `b05.md`, `b06.md`, `b07.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 77 and `checks/root-decisions-maths-s12-b01-b07.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12: the Standard 1 path (b01, b02, b03, b04a, b07, ruling 68) as a student with no equation and no r, and the Standard 2 path through b04b, b05 and b06. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with exact fractions and Python `statistics` (`work/brief-review-standard-b/verify.py`, run with `python -I`, r and every least-squares line exact); narration counts were re-run (`count.py`) and match the designs. Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| b01 one variable or two; independent variable | should-fix | 0 | 3 | 1 | `m-s12-b01-learning-review.md` |
| b02 scatter plots: form, direction, strength | should-fix | 0 | 1 | 1 | `m-s12-b02-learning-review.md` |
| b03 correlation and causation | should-fix | 0 | 1 | 2 | `m-s12-b03-learning-review.md` |
| b04a drawing a line of best fit | should-fix | 0 | 1 | 1 | `m-s12-b04a-learning-review.md` |
| b04b gradient, intercept, equation | should-fix | 0 | 1 | 1 | `m-s12-b04b-learning-review.md` |
| b05 Pearson's r | pass | 0 | 0 | 2 | `m-s12-b05-learning-review.md` |
| b06 least-squares line, calculator and spreadsheet | should-fix | 0 | 3 | 0 | `m-s12-b06-learning-review.md` |
| b07 interpolation and extrapolation | should-fix | 0 | 1 | 2 | `m-s12-b07-learning-review.md` |

Totals: 1 pass, 7 should-fix, 0 blockers; 11 should-fix findings, 10 optional. Every should-fix is a sentence, a card wording or a visual detail inside an existing scene; none needs a new scene, plate or split. These are good designs. The single kiosk dataset works as intended: each new idea lands on numbers the student already knows. Every step is said in words before symbols, and the key reasons are given: the shuffle that keeps every number but loses the pairs, the band that widens while the angle stays put, the slider that moves both columns, the rule we can point to, the axis stretched back to −73, the dial driven by the points, and the freezer running empty while the line keeps climbing. None reads as a slideshow on paper.

## Top findings

1. **b04a scene 4: turning about the mean point cannot change the gap balance.** Every line through (25, 77) has equal gap totals (checked: 56 and 56 for a flat line, 7 and 7 for the drawn line, 66 and 66 at gradient 12), so "turn it until the points balance", with totals "updating live", will show equal totals at every angle. Say that the gaps always balance through the mean point, and turn the ruler until it follows the trend; show the flat line balancing yet missing the trend.
2. **b06 scene 2: why squares.** The narration never says why the gaps are squared, after b04a showed the gaps already balance at 7 and 7. Add: squaring makes every gap count as positive so above and below can't cancel, and big gaps count much more.
3. **b06 scenes 7, 8 and 12: column A and B against the calculator's A and B.** "SLOPE of B two to B nine first" is heard against "B goes with x". Add "These are just column letters, not the calculator's A and B", with the letters kept grey (or move scenes 7 and 8 to columns C and D; root's choice).
4. **b06 scene 4: "so the line is right".** The line by eye also passes exactly through (25, 77) (b04b scene 7), so the mean-point check catches mistakes but cannot certify a line. Say "so the check is passed".
5. **b01 scene 3: the shuffle leaves 28 beside 90.** The build order 25, 32, 18, 28, 22 keeps the fourth row (verified), the very pair the scene then boxes and scene 7 plots. Use 25, 32, 18, 22, 28.
6. **b01 attempt 2: part (b) gives away part (a).** "with distance on the horizontal axis" answers "which is independent". Remove it from the card.
7. **b03 scene 5 against scene 8: more data as cause and cure.** "With enough data, some pairs line up just by chance" against "is there enough data to trust the pattern?" Say "compare enough different things, and some pairs line up by chance, especially with only a little data".
8. **b07 scene 7: one 74 s board under an oversized heading.** Shorten the task strip to the demand (the givens card already holds range, line and r) and run (a) and (b) as two stages.
9. **b02 scene 2: the zero-based plot will not look squashed.** On 0 to 35 and 0 to 130 the kiosk's points still fill much of the plot. Say "bunch up in one part of the graph, and the rest is empty space".
10. **b04b scene 3: the wrong reason for far-apart points.** They are not easier to read; a small misreading matters less. (On y = 6x − 73, no whole-degree point sits on a gridline.)

Other should-fix item: b01 scene 6, say why shoe size and reading speed go together (older children have bigger feet and read faster) before "bigger shoes don't make anyone read faster".

## Decisions for root

- **b06 column letters (finding 3):** a sentence and grey letters (recommended, keeps the common A and B layout and A2 from the pack), or columns C and D in scenes 7 and 8.
- **The canteen card line (b04a A2, b07 A1):** it passes through the first, second and last points, just after b04a calls first-to-last the tempting mistake. It is a fair line (the least-squares line is within 0.15 at both ends), so I recommend keeping it with one clause in b04a's feedback ("it happens to pass through the end points, which is fine because the middle points balance") rather than redrawing.
- **b04a scene 4's pivot (top finding 1):** a ScatterBoard behaviour change (the totals stay equal while the count and the "misses the trend" tags change). Kit needs should record it.
- **b07 scene 7 as two board stages:** keeps one scene heading; root may prefer a 7a and 7b split for build ids.
- **Designer's section 4:** I agree with every accepted item in ruling 77 as it bears on learning. Item 3 (b04b's 0 to 140 axes and the crossed 17) teaches the trap honestly; item 8 (one r guide) is clear; item 9 (the squares picture) earns its 30 s once top finding 2 adds the reason; item 13 (b07's attempt split) works for Standard 1.

## Joins

- **Opening:** b01 opens on t11 scene 12's frame (Revision 2) and on t05's right panel; the arrival chips fade on the first sentence so both courses see the same board. t11's last line and b01's first both say trigonometry is done, which is harmless across a video boundary.
- **b01 to b02, b02 to b03, b03 to b04a, b04b to b05, b05 to b06:** each final frame is the next design's stated opening frame, and no frame states the answer it hands on (no shape named, no link drawn, no line or mean point, no r, A and B dim). b05's results screen values match the exact least-squares line and r.
- **b04a two-route frame:** left panel opens b04b (grown by 1.4), right panel opens b07; the narration names each course.
- **b06 to b07 (rejoin):** b06 repeats b04a's right panel at full width with only the label changed, so b07 opens once for both courses.
- **b07 to p01:** b07's final frame matches decisions file section 3, and p01's Boundary and scene 1 copy it exactly (ruling 67 respected).
- **Standard 1 path (ruling 68):** b01, b02, b03, b04a, b07, then p01 is complete. No Standard 1 video needs an equation or r; b07 reads every prediction from the graph, with Standard 2 rows grey and tagged.

## Practice and feedback

All 16 cards keep the full worded question on screen through the 10 s countdown, with "Pause here to answer." in every attempt narration. No picture is answer-bearing except b01 A2's card wording (top finding 6); b07 A2's "widely scattered" phrase is optional to remove. Draw-a-plot and calculator attempts ask for more than 10 s allows, which the pause covers. All 16 feedbacks give the answer, the key reason, short working where needed and one crossed classic slip, between about 22 s and 30 s by speech estimate (b04b and b07 at the top of the range). Anchors are everyday and non-science (a beach kiosk, a canteen, rideshare, free throws, phone screen time, cafés and parking fines, umbrellas and trains, a heater, an e-bike, a van hire, paid work, a phone battery), with no deaths, drug trials, raffles or gambling (ruling 69), and every invented dataset is tagged.

## Lengths

All eight are under 570 s by the designer's estimate (474 s to 547 s), and my character counts match. The fixes add about 1 s to 16 s each; the largest is b06 (about 515 s to 531 s) and the tightest design stays b07 (about 551 s). Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the eight designs (scripted check), and no digits in narration.
- On-screen recall chips use codenames ("b04a: the mean point"), as in the accepted t-strand designs; only b01's forward chip "in b03" is flagged (optional), because a viewer cannot look it up.

No speech, design edits, builds or commits were made.
