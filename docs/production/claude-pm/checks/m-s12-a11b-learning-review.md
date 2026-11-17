# Maths S12 a11b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a11b.md`, "Which values make sense in a quadratic model, and where does it stop working?" Source SHA256 `cd8c1f1025511701e4284cadd82fa2a56ea56a7858d0eb745a35b82c1a2a06e4`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a11a's meanings and reading moves; a10's midpoint; a07's two-part limitation; Year 11 linear limitations) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The opening is strong: the model's own −25 m at five seconds (and at minus one second) makes "valid values" a question the student already wants answered. The patch slider is the best moment: at w = 12 the length readout turns red at −2 m and the rectangle cannot close while the equation calmly prints −24, so "impossible" is seen before it is said. Scene 4's profit model stops "between the x-intercepts" and "never negative" hardening into rules, and the key line says "usually" for that reason. The roller coaster against its real track shows the one-turning-point limitation. The patch fixes the site's MS-10 mismatch (four edged sides, L = 10 − w). Recalculated: rocket −25 at t = 5 and −1, maximum 20; w(10 − w) zero at 0 and 10, 25 at 5, 16 at 2 and 8, −24 at 12 (L = −2); profit on 0 ≤ n ≤ 10 runs from −32 to 18; coaster −0.02d² + 1.6d zero at 0 and 80, 32 at 40; rugby maximum 11.25; musical −14,000 at p = 70. All correct.

## Findings

1. **Should fix, scene 3 (root ruling 22 is not applied).** The narration, framed answer, bands and memory card's left slot use "0 ≤ w ≤ 10" and "0 ≤ A ≤ 25", and open decision 2 still asks the question that ruling 22 has answered ("write 0 < w < 10 ... and say in one plain sentence why the ends are left out"). The student has only been taught "≤" (scene 2), so the strict sign also needs its plain meaning, and the rocket's "0 ≤ t ≤ 4" needs a reason to differ. Fix. Narration, replacing "So the valid widths are from zero to ten, and the valid areas from zero to twenty-**five**.": "So the valid widths are between zero and ten, but not zero or ten themselves, because a patch needs a positive width to exist at all. We write zero is less than w, which is less than ten. The areas run from just above zero up to twenty-**five**. The rocket was different: it really is there at launch and landing, so those ends stay in." Screen: "0 < w < 10" and "0 < A ≤ 25" with a grey caption "<: the end is left out"; framed answer and memory-card left slot to match; author note (b) and the numbers table updated; close open decision 2. About 220 characters (about 16 s); scene 1's listed reserve trim covers it if needed. Students should understand that each end is in or out for a reason from the situation, not by habit.

2. **Optional, scene 5 ("It's valid from zero to eighty metres along").** The reason is not said. Add "where its height is zero or more" so the coaster uses the same reasoning as the rocket.

3. **Optional, spelling consistency.** Scene 1 says "keeps going forever"; a07 uses "for ever" throughout. Both are accepted Australian spellings; pick one for the strand.

Open decision 3 (the launch height): fine. Scene 5 frames ground level as an assumption made for simplicity; it does not undo a10's and a11a's numbers.

Root ruling 24: the description still carries the codename. Drop it.

## Joins

a11a to a11b matches (the widened graph, (5, −25) ringed red, "underground?"). a11b to a12: the holiday house with "$1,200 for the weekend", the grey Year 11 strip "y = kx, double one, the other doubles", "2 friends: $600 each", "4 friends: ?", "double the friends: half each?" and "Next: inverse variation" are a12's stated opening frame, and a12's first line ("Here's that holiday house ...") picks it up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1 shows the whole parabola unshaded; A2 shows the graph only to p = 60 with no point at 70; nothing is answer-bearing. Each feedback gives the answer, the reason and one crossed classic mistake ("all values of t"; "p = 70 is fine: the formula gives an answer"). Feedback 1 about 25 s, feedback 2 about 27 s.

## Length

5,223 characters (recounted by script), about 482 s with holds, about 387 s of speech before the notes. Finding 1 adds about 16 s. Under 570 s without rushing.

No speech, source edits or commits were made.
