# Maths S12 a06 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a06.md`, "How do we build an exponential model, and what does its starting value mean?" Source SHA256 `7673067669fe5f910a5eba7bf4fdacb495695b1566d72e1ffefcd1166e0c180a`.

Written design reviewed by tracing it from its stated entry knowledge (a05: constant ratio, y = aˣ through (0, 1), negative powers, growth and decay; Year 11 Standard m01 and f01) as a Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

A good design. k is explained, not defined: multiplying every value of 2ˣ by 3 lifts the curve, and "put x equals zero, and a to the zero is one, so y equals k". The kept-and-lost bars make 1.04 and 0.82 visible, the ladder shows the multiplier at work, and the 0.18 slip turning a $24,000 car into $4.54 is a memorable reason to use the part kept. The intercept is interpreted in words with units ("the population at the start, when we began measuring"), and "type it in one go, round at the end" carries the MS-06 correction ($8,898). Rulings 10, 11 and 12 are applied (syllabus letters; no drug or bushfire; depreciation named in one sentence), and the handoff frame matches ruling 18. Recalculated with SymPy 1.14: rent 650, 676, 703.04, 731.16, 760.41, 790.82; 3 × 2ˣ at −1 to 3; city 451,527.81 ≈ 452,000 (and 1.03²⁰⁰ ≈ 369.36, about 92.3 million, a07 only); car 8,897.76 ≈ $8,898, early-rounded $8,896.80; 1/0.8 = 1.25, 1.25⁻³ = 0.512, console $384, slip $6; streaming $22.72. All correct except two rounded slip values (finding 2).

## Findings

1. **Should fix, scene 7, the memory card and key notes 2 and 3 ("a is one plus r").** The narration says "For growth by r per cent, a is one plus r." Heard literally by a Standard student, 4 per cent gives 1 + 4 = 5. The design's memory aid check says r is a decimal, but no learner copy says so, and the card "Up r%: a = 1 + r" pairs a per cent sign with a bare r. Fix. Narration: "For growth by r per cent, a is a hundred per cent plus r per cent, so four per cent up is one point zero four. For decay, it's a hundred per cent minus r per cent, the part you keep." Card key line: "Up r%: a = 100% + r% (4% up: 1.04). Down r%: a = 100% − r%, the part you keep (18% down: 0.82)." Key notes 2 and 3 can keep their examples with the same wording ("Growth by r%: a = 100% + r%, e.g. 3% up: 1.03"). Students should be able to turn any percentage into a multiplier the way scenes 3 and 5 did, without a decimal-r step they were never shown.

2. **Should fix, scene 5 and the numbers tables (the slip's dollars are rounded wrongly).** 24 000 × 0.18⁵ = 4.5349632, which is $4.53 to the nearest cent, not $4.54. The design rounds to 4.535 first and then up, the same early rounding the scene warns against. The wrong value is learner copy: the crossed slip "24 000 × 0.18⁵ ≈ $4.54", the car tag "$4.54?", the Decisions' visual surprise, author note (d) and "Numbers used". Fix: "≈ $4.53" everywhere on screen and in the notes; the narration's "about four dollars and fifty cents" can stay. Similarly author note (f) and "Numbers used" give the A1 slip 18 × 1.6⁴ as 117.97; it is 117.9648, so $117.96 (not shown to learners; correct the notes). Checked with SymPy 1.14 in `work/brief-review-standard-a1/verify.py`.

3. **Optional, scene 3 (why 104 per cent is 1.04).** Add one clause after "a hundred and four per cent": "and per cent means out of a hundred, so that's one point zero four."

4. **Optional, scene 6 (why dividing by 1.25 is multiplying by 0.8).** "1 ÷ 1.25 = 0.8" is on screen but not said. Add: "because one point two five times zero point eight is exactly one."

## Joins

a05 to a06 matches exactly; the "Next" and Standard 1 chips fade on the first sentence. a06 to a07 matches root ruling 18: a06's final frame (the city curve to (20, 451 528), "≈ 452 000 after 20 years", the broken axis, the "?" ring at t = 200, "200 years: 250 000 × 1.03²⁰⁰ = ?") is a07's opening, and a07 scene 1 pays off the 200-year question before its own anchor. No value at t = 200 is shown or spoken in a06.

## Practice and feedback

Both cards keep every demand visible through the 10 s countdown with empty axes; nothing is answer-bearing. A1 tests 1.06 against 1.6, A2 the kept 80 per cent and the a⁻ˣ form. Feedback is brief with one crossed slip each (about 27 s and 28 s). Rent, streaming and a console are real, fair anchors, labelled as examples (ruling 5).

## Key notes and length

The five notes are the model in order, with worked numbers. About 549 s with holds; finding 1 is roughly a like-for-like change.

No speech, design edits, builds or commits were made.
