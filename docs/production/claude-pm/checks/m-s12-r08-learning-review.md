# Maths S12 r08 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r08.md`, "How much water falls on a roof or a block of land in a storm?" Source SHA256 `e40cf6abec2763fa21e1a796dd4c9972180199677ff4b663daf618254dbf7141`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r07: an area from a scaled plan or photo; Year 11 Standard a01 and a03: 1 mm = 0.001 m and 1 m³ = 1000 L) as a Mathematics Standard 2 student starting Year 12. Standard 2 only, so no Standard 1 trace. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a good design. "If none of it drained away, the water would sit twenty-five millimetres deep, everywhere" makes the flat box feel caused before V = Ah is written, and the slab cutting into 1 m³ cubes that pour into a tank makes 1 m³ = 1000 L something the student watches rather than recalls. The reason for ÷ 1000 comes first ("the area is in square metres, so the depth must be in metres too"), the 0.25 m slip is said in MS-38's correct direction ("ten times too much water"), and h is pulled away from r07's strip width with a struck grey chip at the moment of confusion. The tank example models the real decision (compare litres with litres, then subtract), and A2 is the scaled-plan case the syllabus names. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): 96 m², 0.025 m, 2.4 m³, 2400 L and the 24 000 L slip; 1710 × 0.025 = 42.75 m³ = 42 750 L (and r07's 15 × 114 = 1710); SA 3 at 162 m², 6480 L, overflow 1480 L; A1 at 126 m², 3780 L, 5500 L of space, 1720 L spare, slip 3780; A2 at 13 m by 9.6 m, 124.8 m², 5616 L, slip 31.2; the memory-aid case 60 × 0.018 = 1080 L. All correct.

## Findings

1. **Should fix, scene 4 (an exact number called an estimate).** The narration says "about forty-two point seven five cubic metres, or forty-two thousand seven hundred and fifty litres", then "Because the area was an estimate, the volume is an estimate too." A Standard student hears a figure to the last litre and is told in the next breath that it is only an estimate, which undercuts the very idea the scene teaches. Fix: keep the working row "V = 1710 × 0.025 ≈ 42.75 m³", but say and frame the litres as "about forty-three thousand litres" (screen "≈ 42 750 L, about 43 000 L"), and keep "estimate in, estimate out" on "too". Students should understand that an estimated area can only give a rounded volume. Time: about 1 s shorter.

2. **Optional, feedback 1 (the justification is implied, not said).** The question says "Justify your answer", but the narration says "A quarter of the tank is empty, five thousand five hundred litres, so it won't overflow" without the comparison. The design's own mistake list says comparing with the full 22 000 L is "said" in A1, but no sentence says it. Fix: "...five thousand five hundred litres, and three thousand seven hundred and eighty is less than that, so it won't overflow." About 3 s; feedback stays near 33 s, so trim "and thirty millimetres is zero point zero three metres" to "and thirty millimetres is point zero three metres" if needed.

3. **Optional, scene 7 (the tank picture and its 22 000 L label).** `ma11-water-tank-v1.png` is a small tank on a timber stand; labelled 22 000 L it misleads about scale (a 22 000 L tank is a large ground tank). It is not answer-bearing, so this does not block. Either drop the stand by cropping to the tank body at a larger size, or keep the plate for the 5000 L tank in scene 5 only and use a coded cylinder outline with the level line in A1.

## Joins

r07 to r08 matches: r08 scene 1 opens on r07 scene 14 exactly (the dam plate with faint baseline and offsets, "surface ≈ 1,710 m²", the rain gauge at 25 mm, "rain overnight: 25 mm", the three chips), and r07's last question ("spread over the whole dam, how much water is that?") is answered in scene 4. The chip recolours from teal to blue on the first sentence, which is r08's area role and reads as a deliberate change. r08 to r09: the final frame repeats r06b's right panel full width (two coded pay slips, "Shift: 8 hours", "Pay: $336", "Shift: 6 hours", "Pay: $270", "who is paid more?"), so r09 has one opening for both courses (ruling 50).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture shows an answer (A2's plan shows only plan lengths and the scale). Each feedback gives the answer, the reason, short working and one crossed slip, at about 31 s and 30 s. A shed tank and a house plan are real, everyday anchors.

## Key notes and length

The five notes are useful and short; note 2 carries the 0.25 m trap and note 5 the overflow rule. About 469 s with holds, about 100 s under the 570 s cap, so finding 2 fits easily.

No speech, design edits, builds or commits were made.
