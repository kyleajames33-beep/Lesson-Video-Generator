# Maths S11 f01 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f01.md`, "How do we substitute values into a formula and trust the answer?" Source SHA256 `19a4e83c1e4685b06306102a394d25cb407eb55472ec8758d6a542752ae4c4f3`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes, decisions and metadata) by tracing it from its stated entry knowledge (Stage 5 only: order of operations, negatives, 3x = 3 × x, the area of a circle, calculator keys) as a Year 11 Mathematics Standard student. This is the first video of the course, so nothing is assumed from an earlier video. Checked against rulings 4 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f01.md`. The pizza plate (`ma11-pizza-top-v1.png`) was opened. No built preview, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A strong course opener. The three trip rows make "one rule" visible before the word "formula" arrives, "subject" and "substitute" each get a plain meaning at first use, the left-to-right slip is caught by a size check a student can feel ($114 for 12 km), and the bracket shield shows (−4)² and −4² differently before either is evaluated. Ruling 95 (cold open, no welcome line) is applied. Recalculated with SymPy 1.14 (`work/brief-review-s11-f/verify.py`, `python -I`, 16 checks for f01): 8 + 1.5k at 12, 5, 30 gives 26, 15.50, 53; (8 + 1.5) × 12 = 114; 2(9) + 2(4) = 26; (−4)² + 3(−4) = 4 and −4² = −16; π × 15² ≈ 707, π × 10² ≈ 314, ratio exactly 9/4; 1.05³ = 1.157625, 2000 × 1.05³ = 2315.25, slip 6300; 3(−2)² − 2(−2) + 1 = 17, the student's −7. All correct.

## Findings

1. **Should fix, scene 6 (the pizza overlay cannot be drawn truthfully).** The overlay slides "two coded copies of the small disc outline" into the 30 cm pizza with "the leftover area" shaded and labelled "+ a quarter". Two discs of radius 10 cm cannot sit inside a disc of radius 15 cm without overlapping (their centres would need to be 20 cm apart, but each centre can be at most 5 cm from the middle; checked in `verify.py`). On screen the copies will overlap, and the shaded leftover will not be a quarter of a small pizza, so the picture contradicts the narration's "more than twice the pizza". A sharp student will see two small pizzas that do not fit and ask how that can be more than twice. Fix: keep the narration; replace the overlay with area bars under the two pizzas: a 707 cm² amber bar beside two 314 cm² bars end to end plus a short piece labelled "+ a quarter (about 79 cm²)", the two lengths matching. Update the Decisions line "Visual surprise" and the teaching check item 9 to "the big pizza's area equals two small pizzas and a quarter". Students should see that a radius half as big again gives more than twice the area, with a picture that is true.

2. **Optional, scene 6 ("times itself, three times").** "One point zero five cubed means one point zero five, times itself, three times" can be heard as four factors. Replacement: "One point zero five cubed means three lots of one point zero five, multiplied together." Same length; the screen row "1.05 × 1.05 × 1.05" already agrees.

3. **Optional, open decision 2 (scene 4's two halves).** Keep both. At 541 characters the scene is not crowded, and "substitution can also check a claim" is the one place the video shows a formula used to test someone's answer, which Year 12 a01 builds on.

## Joins

(none) to f01: cold open on the van and the quote card, the first calculation about 12 s in (ruling 95). f01 to f02: scene 12's frame (van about 900 px, "C = 8 + 1.50k" in its four colours, "Bill: $41", "k = ?", the grey chip "f01: need an output? substitute", the three chips, no working) matches f02's Boundary exactly.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture slot (a blank calculator strip; the student's own line, which is part of the question) gives the answer away. Feedback 1 (about 26 s) gives the answer, the power as repeated multiplying and one crossed slip (6300); feedback 2 (about 22 s) gives 17, the reason and one crossed slip ("−2² = −4"). Every anchor is everyday (courier, deck, pizza, savings) and nobody is drawn.

## Key notes and length

The five notes are short and copyable; the memory card follows the explanation and its arrow row includes brackets first. Narration 5,374 characters by this reviewer's count (the author's 5,362; the same 11 to 13 character offset appears in every design and is a counting-method difference), about 488 s with holds, 82 s under the 570 s cap. No em dash. Finding 1 changes visuals only.

No speech, design edits, builds or commits were made.
