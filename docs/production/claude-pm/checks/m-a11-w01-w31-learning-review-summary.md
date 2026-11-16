# Year 11 Maths Advanced w01 to w31: learning review summary

16 November 2026, brief 247. Independent student-learning review of the 31 first-revision designs in `lessons/math-a11-w01.md` to `w31.md`, following `../../student-learning-review.md` and the brief 195 format, with root's rulings in `root-acceptance-maths-a11-w01-w14.md` and `-w15-w31.md`. Written designs only: no build, plates, playback or human listening. One file per design: `checks/m-a11-wNN-learning-review.md`.

**Counts: 16 pass, 14 pass with should-fix, 1 blocker.** Findings: 1 blocker, 20 should fix, 18 optional.

## Blockers (resolve before voicing)

- **w07**: Blocker, scene 3 (water teaches that an input may have no output). The reversed mapping shows water as an input with no output, tagged "allowed", which contradicts the definition of a function the scene has just given. Fix: make the water point before the reversal, and mark the reversed water as a second failure. Replacement narration is in `m-a11-w07-learning-review.md`.

## Root's pace questions: rulings

- **w02, six examples (ruling 3):** keep all six; do not move dividing to p01. Dividing is about 20 s and applies the main idea directly. Its one gap, restrictions from the divisor, needs one sentence (about 5 s, estimate about 552 s). The scene 6 split needs a wording fix ("outside numbers").
- **w10, scene 5 (ruling 13):** split it at "A point is on a line exactly when..." into 5a (three forms) and 5b (point test and collinearity). No narration change is needed.
- **w07, feedback 1 (ruling 6):** about 32 s as written, over the limit. Drop part (d), the circle, which repeats scene 5's own example; feedback falls to about 25 s.
- **w25, decimals (ruling 9):** keep the real 4.9 m radius. Speak "the root of four point nine squared, minus three squared" and drop the spoken 24.01 and 15.01. The radius-5 fallback is not needed.

## Should fix, by design

- **w01**: scene 4 (counts become shares without warning).
- **w02**: scene 8 (restrictions without a reason); scene 6 ("outside numbers").
- **w03**: scene 1 (a rule without a cause).
- **w04**: scene 5 (the derivation skips its hardest step in speech); scene 8 (memory aid drops a condition).
- **w05**: scene 4 (spoken money is ambiguous).
- **w10**: scene 5 (split into two beats).
- **w15**: scene 7 and key note 5 (a taught step is missing); scene 2 (taught twice).
- **w16**: scene 6 (the logical link is missing).
- **w17**: feedback 2 (about 33 s).
- **w18**: feedback 2 (about 37 s, the longest feedback in the batch).
- **w19**: scene 6 (internal reference and a muddled callback).
- **w20**: scene 4 (an undefined term, and a form the student has not met); feedback 2 (about 32 s).
- **w25**: scene 3 (spoken intermediate decimals).
- **w31**: attempt 2 and feedback 2 (six demands); scene 4 (unclear reference).

## Pass

w06, w08, w09, w11, w12, w13, w14, w21, w22, w23, w24, w26, w27, w28, w29, w30. Optional notes are in each file.

## Joins and double teaching

All 30 joins match in the written text: each handoff names the next video's anchor and question, and each next hook picks it up (w07 to w08 and w23 to w24 as confirmed by root). One idea is taught twice: w09 scene 7 already uses "a square is never negative" to find a minimum, and w15 scene 2 presents it as new (w15 finding 2 gives a same-length callback). The w05 kayak model returns in w19 scene 6 as a deliberate callback that confirms T ≤ 200 by the vertex, which is not re-teaching. w15's key note 5 lists a substitution step the narration never shows (w15 finding 1). No skipped prerequisite was found: interval notation (w09) precedes its use in w18, w21 and later; quadratic inequalities (w18) precede w27 attempt 2; factorising (w02) precedes holes in w29.

## Feedback length

Speech-only estimates over 30 s: w18 feedback 2 (about 37 s), w17 feedback 2 (about 33 s), w07 feedback 1 (about 32 s) and w20 feedback 2 (about 32 s). Each has a trim in its file. w21, w22, w27, w28 and w31 sit at about 30 s and should be checked on the voiced take.

## Learner-facing wording to fix

"the site's example" (w19 scene 6) and "one from the course" (w31 scene 4) refer to things a YouTube viewer cannot see. "leading coefficient" (w20 scene 4) is used without a meaning.

## Spot maths

Every worked example, attempt answer and crossed slip in all 31 designs was recalculated by hand or with light Python arithmetic; no maths error was found. Codex's full maths check remains the authority.

No speech, source edits or commits were made.
