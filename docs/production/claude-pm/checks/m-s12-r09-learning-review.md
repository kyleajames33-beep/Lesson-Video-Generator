# Maths S12 r09 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r09.md`, "How is a rate different from a ratio, and how do unit rates make comparisons fair?" Source SHA256 `3d095fe3aa0b57012c8c26b58e2bde8979caa31a9ef4decb9e7da821dc12c8dd`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r01: a ratio compares quantities in the same unit; Year 11 Standard e01: hourly pay) twice: as a Standard 2 student arriving from r08, and as a Standard 1 student arriving from r06b's two-route frame with no r07 or r08. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good design and a strong opener for both courses. The bigger pay slip turning out to be the worse rate is a real surprise, and the reason for dividing is given in words before any symbol ("share the pay equally across the hours, because every hour of the shift is paid the same"). The same-hours race shows why per one hour is a fair test rather than asserting it. "Why a rate needs two units" is answered plainly ("Forty-five on its own means nothing. Forty-five dollars per hour is a wage."), and the "Can the units cancel?" test is followable without r01 fresh in mind because the cordial example is restated. A Standard 1 student loses nothing: the only recall is r01 and Year 11 pay. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): $42 and $45 per hour, $360 at 8 hours, B ahead by $24; 0.4 GB a day; 60 and 50 pages per minute; 7 ÷ 420 ≈ 0.0167 (0.017 to three places) and 0.02; 15 L per minute; A1 at $26.40 and $26.80, 40c, slip $42.80; A2 at 3 goals per game and 4 : 5; the memory-aid case, 8 m² per litre. All correct.

## Findings

1. **Should fix, scene 6 (the wrong-way slip adds a decimal trap).** The slip compares "zero point zero two" with "zero point zero one seven" by ear. For many Standard students 0.017 already "looks bigger" than 0.02 (seventeen against two), so the slip teaches two confusions at once and the intended one (minutes per page means bigger is slower) can be lost. Fix: keep the same slip in friendlier units. Narration: "Now the slip. Divide the other way, time by pages. Seven minutes is four hundred and twenty seconds, so A takes one second per page, and B takes one point two seconds per page. B's number is bigger, but that's the time for each page, so bigger means slower." Screen: "A: 420 s ÷ 420 pages = 1 s per page", "B: 1200 s ÷ 1000 pages = 1.2 s per page", "B is bigger, so B is faster" crossed (caption "seconds per page: bigger is slower"). Students should understand that the units, not the size of the number, decide which result wins. Time: about 2.5 s more. (If root prefers to keep minutes, write both to three places, "0.020" and "0.017", aligned in one column.)

2. **Optional, scene 3 (the phone-data aside).** "A unit rate you can check against what your plan allows each day" brings a new context and a new plate into the fair-test scene, and prepaid plans do not usually state a daily allowance, so the check it suggests is not one a student can do. Either cut the two phone-data sentences (about 14 s, and the scene then ends on its own idea), or reword to a check that exists: "and a forty gigabyte plan over twenty-eight days allows about one point four a day". 40 ÷ 28 = 1.43; if kept, add that value to the Numbers tables.

## Joins

r08 to r09 and r06b to r09 match: r09 opens on the two coded pay slips with "who is paid more?", which is r08's final frame (full width) and r06b's right panel (Standard 1), and r06b's left panel fades on the first sentence. The pay envelope plate arrives within 5 s, so the opening is not a coded-only frame. r09 to r10: the kitchen tap with "0.3 L every minute" and a "1 year, ? L" strip; no conversion is shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's slips show only hours and pay, and A2's scoresheet shows only the three counts. Each feedback gives the answer, the reason, short working and one crossed slip (about 23 s and 30 s). A2 (c) asks for an explanation, and the feedback models a short one ("goals per game compares two different things, so it's a rate, with units"). Part-time jobs, printers and netball are fair everyday anchors.

## Key notes and length

The five notes are short and usable, and note 5 keeps the "read the units" warning. About 468 s with holds, about 100 s under the cap.

No speech, design edits, builds or commits were made.
