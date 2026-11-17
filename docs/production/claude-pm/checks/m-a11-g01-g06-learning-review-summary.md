# Maths A11 g01 to g06 Revision 1: learning review summary

17 November 2026. Independent student learning review of the six graph-transformation designs (`lessons/math-a11-g01.md` to `g06.md`), following `docs/production/student-learning-review.md`. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value in each design's "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`, 54 checks, 0 failures), and narration was recounted by script (`work/brief-review-g/count.py`; the counts match the designs). Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| g01 translations | should-fix | 0 | 3 | 2 | `m-a11-g01-learning-review.md` |
| g02 reflections | should-fix | 0 | 3 | 2 | `m-a11-g02-learning-review.md` |
| g03 dilations | should-fix | 0 | 1 | 3 | `m-a11-g03-learning-review.md` |
| g04 order | should-fix | 0 | 1 | 3 | `m-a11-g04-learning-review.md` |
| g05 features | should-fix | 0 | 2 | 2 | `m-a11-g05-learning-review.md` |
| g06 circles | pass | 0 | 0 | 3 | `m-a11-g06-learning-review.md` |

Totals: 1 pass, 5 should-fix, 0 blockers; 10 should-fix findings, 15 optional. Every should-fix is a wording or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split. The strand is strong: in every design the direction of each move is explained by "the new graph at x does what the old one did at ...", not asserted, and every move happens on its cue with the parent ghosted.

## Top findings

1. **g02 scene 1: root ruling 32 is not applied.** "It sounds just the same to your ear" has no reason. Cut the clause (preferred), or add root's one-sentence reason.
2. **g04 scene 4: "So we fix an order" can be heard as "always stretch first".** A1 and A2 (b) then ask for slide-first sequences. Add: "That's the order the form is written in. If a question gives the moves in a different order, do them in that order, one replacement at a time."
3. **g03 scene 4: no vertical factor between 0 and 1 is shown,** although key note 4 states it generally and A2 replaces y by 2y. Add y → 3y giving y = ⅓√x, a squash towards the x-axis (about 12 s).
4. **g05 scenes 3 and 6: "the frame" is named before it is defined.** Define it in scene 2 ("the asymptotes, the key points, the domain and the range").
5. **g05 scene 6 and key note 4: "Intercepts don't ride along" and "Never carry them"** contradict g03 ("x-intercepts never move" under a vertical dilation). Say intercepts can't be trusted to ride along, so always solve.
6. **g01 scene 4: "lands at x plus three, y plus two" follows a graph that slid left** (x + 3)², while the screen has silently returned to (x − 3)² + 2. Say "Back to x minus three, all squared, plus two" first.
7. **g01 scene 5 and key note 4: "A slide sideways changes the domain"** is false for |x − 4| and every parabola shown. Say it moves any end or gap in the domain.
8. **g01 scene 2: "inside" is used before its plain meaning,** and the strand's memory aid depends on it.
9. **g02 scene 5: the crossed slip −x² + 4x + 3 and the x-axis answer −x² + 4x − 3** sit together on one board. Clear the slip first and say "including the three".
10. **g02 feedback 2: "minus two to the x" (answer) and "minus two, all to the x" (slip) sound the same.** Respell both.

## Checks the brief asked for

- **Direction of each move explained (g01 to g03):** yes. g01: the late runner and "the inside reaches zero at x = 3, so everything happens three later". g02: "at time x you hear what played at −x". g03: "the new curve, at x equals four, has the height the old one had at two", and "three x is x divided by a third".
- **g04 order of transformations:** correct. The form is built by x → ax then x → x + b, so (u, v) → (u/a − b, kv + c): dilate (with any flip) then translate on each axis; S11-G03's reading never appears. The "order matters" pairs really differ: vertical pair vertices (0, 1) and (0, 2); horizontal pair ((x − 2)/2)² and ((x − 1)/2)², vertices 2 and 1. The commuting pair gives 2(x − 1)² both ways.
- **g05 pace and split:** about 410 s of speech and 503 s overall; each family has one stage of about a minute ending on its own slip. Not rushed. Do not use the g05a/g05b fallback. A1 (the unworked exponential) is fair.
- **Attempts:** all 12 cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing. Every attempt uses only taught steps, once g03 finding 1 is applied (A2's y → 2y).
- **Feedback:** all 12 give the answer, the key reason, short working and one crossed mistake, at 23 to 29 s by speech estimate. g02 feedback 2, g04 feedback 2 and g06 feedback 2 are about 30 s with their holds; g02's respelling needs the trim given in its review.
- **Anchors:** each maps onto the maths it teaches (late start and head start; Reverse and Invert; copier width, height and zoom; °F conversion as stretch then slide; average cost as 1/x stretched and slid; delivery zone as a slid circle). g04's and g05's anchors are causes, not decoration.
- **Length:** all six are 5,502 to 5,821 characters, about 499 to 525 s with holds, and under 570 s.
- **Em dashes:** none in any of the six designs.

## Open decisions answered

- g01 (2) the race model: reasonable with its tag; keep. g01 (1) and (3) are closed by root rulings 29 and 30.
- g02 (1) "Invert sounds the same": cut, or add root's reason (g02 finding 1). g02 (2) time zero at the middle: keep.
- g03 (2) width-only copier: believable; keep. g03 (1) closed by ruling 30.
- g04 (2) four letters in one scene: keep scene 4 whole. g04 (1) closed by ruling 33.
- g05 (1) split: no split. g05 (2) A1 without a worked exponential: fair; keep.
- g06 (1) letters a and b in key note 1: keep the labelled syllabus form. g06 (3) closed by ruling 34.

## Joins

- **t16 to g01:** matches t16 Revision 1 scene 12 exactly (y = x², "y = (x − 3)²" in blue boxes, "minus means left?", the chips); the recolour to teal is accepted (ruling 29).
- **g01 to g02, g02 to g03, g04 to g05, g05 to g06:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question.
- **g03 to g04:** matches except colour: g04 opens with "× 1.8" amber and "+ 32" violet on the rule card, which g03's scene 12 does not specify. Add the colours in g03, or colour them on g04's first sentence.
- **g05 housekeeping:** the Decisions handoff says the town grid is "x and y −6 to 9"; scene 11 and g06 say x −6 to 9, y −8 to 6, which is right (the circle reaches y = −7).
- **g06 to s01:** no s01 design yet. g06's coded frame uses the s01 pack's own start and commits s01 to nothing.

## What Year 12 assumes, and where the strand delivers it

| Year 12 assumption | Where delivered |
| --- | --- |
| t01 scene 4: "Everything happens ... later"; minus inside slides right, plus left | g01 scene 2 (same words), scene 7 |
| t01: k < 0 reflects in the x-axis, every height changes sign; "a number outside acts on every height as written" | g02 scene 3 (same words) |
| t01: cos(−x) = cos x as a y-axis reflection | g02 scene 2 |
| t01: "2x squashes by a half"; misconception "factor ½ doubles the width"; d06, d13: "squashed sideways by ½"; d02: "scaled horizontally by the factor 1/ln 2" | g03 scene 4 ("Three x is x divided by a third"; readout "squash") |
| t01's aid "Outside: on y, as written. Inside: on x, the opposite." | g01, g03 and g04 scene 7 (word for word) |
| t01: y = k f(a(x + b)) + c; factor the inside first; squash then slide; misconception "reading the translation as the inside number" | g04 scenes 4 and 6 (crossed slip is t01's misconception) |
| t01 (pack note): vertical asymptotes move sideways only, horizontal ones up or down only; domain follows horizontal moves, range vertical | g05 scene 2, key notes 1 and 2 |
| t01 scene 7: tan's asymptotes move with the squash | taught in t01 itself; nothing assumed from Year 11 |

No gap found. Every point the Year 12 t01, d02, d06 and d13 designs assume from this strand is taught in the form they recall.

## Housekeeping

- Each design's review evidence path names `checks/m-a11-g0N-learning-review.md`; these files use that name.
- Scratch files (`work/brief-review-g/verify.py`, `count.py`) are in the ignored `work/` folder.

No speech, design edits, builds or commits were made.
