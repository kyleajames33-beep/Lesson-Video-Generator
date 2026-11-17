# Maths A11 g06 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g06.md`, "How does translation find the centre and radius of a circle?" Source SHA256 `58c9e9255e21e6e722efe61a614a4aba42abce3c0d0f65e76d7754badec4e8c8`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (w24, w15, g01, g03) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 3 optional).

This design is good as written. The delivery zone makes the question real (which houses are on the edge?), and the slide makes "signs flipped" a consequence of g01 rather than a rule to memorise: a slide right three replaces x by x − 3, so reading back, x − 3 means three. "A slide doesn't change the size, so the right side is still the radius squared" gives the radius its reason. w24's circle is stated once, not re-derived (root ruling 6), and the house at (6, 2) reuses w24's Pythagoras check as an application. Domain and range are found from the four radius steps, with the "from the centre, not the origin" warning. The expanded form lands on the circle already drawn in scene 3, which shows "the same circle" rather than saying it. Each slip is crossed where it happens. Recalculated: (6, 2) and (8, −2) satisfy (x − 3)² + (y + 2)² = 25; x² + y² − 4x + 2y − 11 = 0 is (x − 2)² + (y + 1)² = 16, with domain −2 to 6 and range −5 to 3; centre (−1, 2) through (2, 2) gives (x + 1)² + (y − 2)² = 9; A1 x² + y² − 10x + 4y + 20 = 0 is (x − 5)² + (y + 2)² = 9, domain 2 to 8, range −5 to 1; A2 r² = 10 and (6, 0) satisfies it (the circle meets the x-axis at 0 and 6). All correct.

## Findings

1. **Optional, scene 4 (the square of half is skipped aloud).** "Half of minus four is minus two, so add four" leaves out the step a rusty student needs, and A1 asks for the same step with −10. "Half of minus four is minus two, and minus two squared is four, so add four." Do the same for the y group ("half of two is one, and one squared is one"). About 4 s. The w15 chip stays.

2. **Optional, scene 2 (checking a point by the equation).** A2 asks students to "show that it also passes through (6, 0)", which means substituting into the equation. Scene 2 shows the substitution row but says it as Pythagoras ("Three squared plus four squared"). Add "Put six, two into the equation:" before "Three squared plus four squared is twenty-five". Students then hear the method A2 needs.

3. **Optional, scene 5 ("two minus minus one").** Clear on screen, awkward by ear. "From minus one across to two is three units" says the same thing.

Open decision 1 (the letters a and b in key note 1): keep the syllabus form "(x − a)² + (y − b)² = r²: centre (a, b), radius r". It is labelled, it appears once, every worked example uses numbers, and it is the form exam questions use. Open decision 3 (A2 adapted) is closed by root ruling 34.

Builder note (not a learning finding): scene 4's square tiles must show x² − 4x, a subtraction, as w15's tiles do; reuse w15's convention for a negative term so the "add 4" corner reads correctly.

## Joins

g05 to g06 matches: the town grid (x −6 to 9, y −8 to 6) over the rooftops texture, the barrow badge and store pin at (3, −2), "free delivery within 5 km", the dashed x² + y² = 25 with "w24: x² + y² = 25, centre (0, 0)", the "?" circle and the chips are g06's opening frame. g06 to s01: no s01 design exists yet. g06's coded final frame ("the even numbers from 1 to 11", empty braces with "?", no elements written) uses the s01 pack's own start and commits s01 to nothing; the s01 designer may open on it or change only g06 scene 11.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty equal-unit axes; A2's marks only the three given points with no circle drawn; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 29 s (with its 1 s hold, about 30 s; do not lengthen it).

## Year 12 handoff check

No Year 12 design names a dependency on g06 (pack). i07's semicircle area recalls circles only as w24 and w25 give them. Nothing to deliver.

## Site link

`graph-transformations/lesson07.sa.html` is the design's site source and the YouTube link. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
