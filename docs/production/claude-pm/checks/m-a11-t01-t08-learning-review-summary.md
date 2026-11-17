# Maths A11 t01 to t08 Revision 1: learning review summary

17 November 2026. Independent student learning review of the eight trigonometry designs (`lessons/math-a11-t01.md` to `t08.md`), following `docs/production/student-learning-review.md`. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy, and bearings by coordinates (`work/brief-review-t/verify.py`); all match. Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| t01 exact values | should-fix | 0 | 2 | 3 | `m-a11-t01-learning-review.md` |
| t02 right triangles and bearings | should-fix, split recommended | 0 | 5 | 3 | `m-a11-t02-learning-review.md` |
| t03 any angle on a circle | should-fix | 0 | 1 | 1 | `m-a11-t03-learning-review.md` |
| t04 related angles | should-fix | 0 | 3 | 0 | `m-a11-t04-learning-review.md` |
| t05 sine rule and area | pass | 0 | 0 | 2 | `m-a11-t05-learning-review.md` |
| t06 cosine rule | should-fix | 0 | 1 | 2 | `m-a11-t06-learning-review.md` |
| t07 ambiguous case | should-fix | 0 | 1 | 1 | `m-a11-t07-learning-review.md` |
| t08 radians | should-fix | 0 | 1 | 2 | `m-a11-t08-learning-review.md` |

Totals: 1 pass, 7 should-fix, 0 blockers; 14 should-fix findings, 14 optional. Apart from t02's split, every should-fix is a wording or visual-detail repair inside an existing scene; none needs a new plate.

## Top findings

1. **t02: split bearings into their own video (ruling 16).** The design carries two main questions. Scene 4 (true and compass bearings, a conversion, reverse bearings) and scene 5 (a full two-leg journey) are each about a minute. The needed repairs (findings 1 to 4) add about 34 s to a design already at about 541 s. Proposed t02a (elevation and depression, scenes 1 to 3) and t02b (bearings, scenes 4 and 5 expanded), each about 380 to 440 s; details in the t02 review.
2. **t02 scenes 4 and 5: bearings gaps.** Only compass to true is converted, and only by adding. There is no S..°E case (180° − angle), which the pack flags as the missed step, and no true to compass. The angle at the turn is given as "220 minus 130" with no reason (both bearings are from the same north line), but A2 (a) asks students to explain exactly that.
3. **t02 scene 1 and t01 scene 13: the cliff triangle does not close.** The horizontal and sight line start at the yacht's deck, but the 40 m runs along the waterline and the right angle is drawn at the cliff's foot. Start both lines at the waterline point (the sidecar already gives it), in both designs.
4. **t01 scene 7: "the side is the diagonal times cosine forty-five degrees"** is stated without the ratio behind it, and A2 depends on it. Say cos 45° = side ÷ diagonal, then rearrange, then check on the 2 cm square.
5. **t06 scene 12 (t07's opening frame): the angle B is named but not drawn.** "sin B = 9 sin 40° ÷ 7" sits beside a map with no B. Mark B on the road at the signal edge with its 7 km line and the 55.7° angle; t07's circle then reveals the second point.
6. **t08: ruling 20 not yet applied.** The full table of multiples of π/6 and π/4 is flashed for 3 s and is not in the key notes. Put it on the notes screen as a second panel, with fewer bullets and a longer hold (about 60 s) or its own quiet hold.
7. **t04 scene 2: the copy forms are announced.** Say "A short of a half turn", "A past a half turn" and "A short of a full turn" so 180° − A, 180° + A and 360° − A are caused. Also name t03's 60° as 120°'s related angle (ruling 17).
8. **t04 scene 7 and card: "All Stations To Central" is said twice** (ruling 18 says once, then the letters).
9. **t03 scene 6: why 60°, and which side is 1.** Say 180° − 120° = 60°, and that the short side lies along the axis.
10. **t07 scene 5: b sin A is not derived.** One sentence: the perpendicular is opposite A in a right triangle with hypotenuse b.

Other should-fix items: t01 scene 3 (the base's right angle from the angle sum); t02 scene 1 (say "h is on top, so multiply"); t04 feedbacks 1 and 2 ("minus minus one" and "two eighty-nine" by ear, with reasons at the same length).

## Answer on t02's split (root ruling 16)

Split. The elevation half is a complete, well-paced lesson; the bearings half is where the pace and the gaps are. Splitting adds a video but no plate. t03's opening frame and t06's "Back in the bearings video" are unaffected (t06 then points to t02b). If root keeps one video, findings 1 to 4 still apply, with all named reserve trims, and the voiced take must be measured against 570 s.

## Open decisions answered

- t01 (1) two anchors: settled by ruling 15. t01 (2) "sine" in full: no learning objection.
- t02 (1) pace: split (above). t02 (2) feedback lengths: fine, but feedback 2 relies on scene 5's reason (t02 finding 3). t02 (3) link: settled by ruling 16.
- t03 (1) the 60° in scene 6: keep, with the reason added (t03 finding 1); it does not pre-empt t04. t03 (2) "five forty": fine.
- t04 (1) ASTC: ruling 18, applied once (t04 finding 2). t04 (2) pace: scene 5 is not rushed; no change. t04 (3) feedback lengths: replace lines at the same length (t04 finding 3).
- t05 (1) obtuse-case proof: keep it as an author note. t05 (2) `we-1` dropped: no learning objection.
- t06 (1) the yacht returns: settled by ruling 19; it works as a contrast. t06 (2) "Back in the bearings video": fine, with or without the split.
- t07 (1) kilometres: keep. t07 (2) a = b unspoken: fine.
- t08 (1) the table: yes, on the key-notes screen (ruling 20; t08 finding 1).

## Joins

- **e08 to t01:** matches in substance. e08's final frame also carries the grey chip "e04: log₂ 100 ≈ 6.644, exact as log₂ 100", which t01's opening frame does not list (t01 optional finding 5).
- **t01 to t02:** matches, subject to the waterline geometry (top finding 3), changed identically in both.
- **t02 to t03, t03 to t04, t04 to t05, t05 to t06, t07 to t08:** each final frame is the next design's stated opening frame, and each opening line picks up the previous question.
- **t06 to t07:** matches as written, but both should add B, its 7 km line and the 55.7° angle (top finding 5).
- **t08 to t09:** t08's final frame (the pizza, the 45° = π/4 slice, "slice crust: ⅛ × 40π = 5π cm ≈ 15.7 cm", "one step instead of two?") matches the t09 pack's start and is specified in the decisions file; no l = rθ is shown.

## Later videos and Year 12

| Assumption | Where delivered |
| --- | --- |
| t02 to t08: exact values at 30°, 45°, 60° | t01 scenes 2 to 5 |
| t06: new north line, reverse bearing | t02 scenes 4, 5 (t02b if split) |
| t04: circle definitions, signs from coordinates, multiples of 90° | t03 scenes 3 to 6 |
| t05 to t07: sin(180° − A) = sin A; cos θ < 0 for obtuse θ | t04 scenes 1 to 4 |
| t06, t07: perpendicular h, labelling, complete pair | t05 scenes 2, 3 |
| t07: cosine rule never ambiguous; largest angle faces longest side | t06 scenes 3, 6 |
| t15: two angles share a height | t07 scene 2 |
| Year 12 t01 to t03, d05, d07: `ciccaa78be` values in radians | t08 scene 6 (aloud), table (key notes after finding 1) |
| Year 12 d05: "an arc of length equal to the radius" | t08 scene 3 (same words) |

No gap found once t08 finding 1 is applied.

## Practice and feedback

All 16 question cards keep the full worded question on screen through the 10 s countdown, and no picture is answer-bearing (t04's and t08's circles show quadrant numbers without ASTC letters; t07's show no arc). All 16 feedbacks give the answer, the key reason, short working and one crossed classic mistake, and all are 26 to 29 s by speech estimate. The longest (t02 feedback 1, t04 feedback 2, t05 feedback 2 and t06 feedback 2, about 29 s) should be measured on the voiced take; t04's replacement lines must not lengthen them.

## Pace

Every design is under 570 s by estimate (about 496 s to 547 s with holds). Applying the should-fix findings adds about 10 to 15 s to t01 (covered by its reserve trim) and smaller amounts elsewhere. t08 adds about 15 s if the notes hold grows to 60 s. No design other than t02 is rushed.

## Housekeeping

- Review evidence paths: all eight designs name `checks/m-a11-t0N-learning-review.md`, which matches these files.
- No em dash (U+2014) was found in any of the eight designs.
- t01 and t04 both link `lesson05.sa.html`. This is expected, since both draw on that page, but the YouTube descriptions should not read as duplicates.

No speech, design edits, builds or commits were made.
