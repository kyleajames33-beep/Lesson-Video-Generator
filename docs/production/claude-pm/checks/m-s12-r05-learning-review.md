# Maths S12 r05 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r05.md`, "How do we construct a scale drawing?" Source SHA256 `6ff5a8f4d767c3786ed634ae351fc40047ee1ea4e338e217226552d15d929ec3`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r04: real to plan by converting and dividing; Year 11 m to cm) as a Standard 2 student starting Year 12. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 0 optional).

A good design, and the choice of an original anchor is well judged: 36 against 37.5 is what makes "take the larger" necessary, and the spill test at 1 : 36 (8.3 cm against an 8 cm space) shows the reason before the rule. "Rounding up shrinks the drawing a little more, so it still fits" and the slider (1 : 25 spilling red, 1 : 50 with room to spare, 1 : 100 "fits, but tiny") answer "why round up" with a picture. The cut-outs give the purpose of "one scale for everything" (you can't trust where a by-eye bed fits), and the app scene says what the tool does and what it does not. Fifteen scenes (ruling 50) read as separate stages, not padding. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 360 ÷ 10 = 36, 300 ÷ 8 = 37.5, 300 ÷ 36 ≈ 8.33; 1 : 25 gives 14.4 by 12; 1 : 50 gives 7.2 by 6 (margins 2.8 and 2 cm); 1 : 100 gives 3.6 by 3; 1.64, 3, 4, 1.8, 2.4, 1.2 cm; 40 and 40, 12 by 8, 600 ÷ 30 = 20; A1 45 and 40, 18 by 12, 4.8 by 2.4, 900 ÷ 40 = 22.5; A2 14 by 7.5, 1.8 cm, 3 × 200 = 600 cm. All correct.

## Findings

1. **Should fix, scenes 3 and 8 (which scale numbers are "friendly", and why not 1 : 40).** In scene 3 the room needs n ≥ 37.5 and the narration jumps to "one to fifty". A student asks "why not forty?", and 1 : 40 fits (9 cm by 7.5 cm, checked). The slider offers only 1 : 20, 1 : 25, 1 : 50 and 1 : 100. Then the worked example says "one to forty would fill the box exactly ... A friendly scale just above it is one to fifty", which suggests 40 is not friendly, and the A1 slip is "1 : 40" (crossed because it spills, but a student may file it as "40 is never allowed"). Fix. Scene 3, after "like one to fifty": "One to forty would just fit too, but one to fifty is easier to divide by, and leaves a margin for labels." Worked example, replace "A friendly scale just above it is one to fifty" with "That leaves no room for labels, so go up to the next friendly scale, one to fifty." Visual: add a grey "1 : 40" stop to the slider in scene 4 (no narration), shown inside the box with a thin margin. Students should understand that any scale number above the larger quotient fits, and "friendly" is about easy dividing and a margin, not a fixed list. About 6 s.

## Open decisions, as they bear on learning

- **1. Fifteen scenes:** keep (ruling 50). The middle is not slow: each stage shows a different change (shrinking, choosing, trying, ruling, furniture, the app).
- **2. Orientation:** not taught (ruling 50). Every question matches long side to long space, so no student is caught out.

## Joins

r04 to r05: scene 1 opens on r04's two-route frame and fades the right panel. r05 to r06a: scene 14 is r04's right panel full width (the floor plan, "3.6 cm", "Scale 1 : 100", "$320 a metre"), with no value worked out, so r06a opens on one picture for both courses.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown and show nothing answer-bearing. A1 practises every step of the method on a new case; A2 (c) asks for an explanation, and feedback 2 gives the reason ("a three centimetre circle would stand for six metres"). Feedbacks about 29 s and 23 s, each with one crossed slip. A bedroom, a backyard, a home-design app (unbranded) and a basketball court (28 m by 15 m, centre circle 3.6 m, which are the real FIBA sizes) are fair anchors; no prices, no gambling, no people drawn.

## Key notes and length

Five useful notes, including the digital-tool check. About 525 s with holds, 45 s under the cap; finding 1 adds about 6 s.

No speech, design edits, builds or commits were made.
