# Maths S12 t01b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t01b.md`, "How do we find a missing angle in a right-angled triangle?" Source SHA256 `7607f17563b89d7a6930e940f9cb725e15242b47a3d1301280c916f445107cf6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01a: naming sides, SOH CAH TOA, degree mode, a side from an angle) as a Mathematics Standard student starting Year 12. Standard 1 and Standard 2 share every word. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

A good video. The machine (angle in, ratio out; flipped, ratio in, angle out) gives inverse sine its meaning before the notation, and the narration says plainly what it does: "the angle whose sine is this number", and that the small minus one "doesn't mean one over sine". Getting the roof's 35° back as 34.9° and explaining the gap by the rounded sides is honest and useful. Scene 5 makes the choice of inverse a decision from the two known sides, and the shed shows "angle from two sides, then a side from the angle", with Pythagoras landing on the same 1.30 m. Recalculated with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, `python -I`, 0 failures): 3.15 ÷ 4.51 = 0.698448, tan⁻¹ = 34.9323° (screen "34.9322…" truncates correctly); tan⁻¹(tan 35°) = 35; 7 ÷ 11 = 0.636364, sin⁻¹ = 39.5212°, sin⁻¹(0.64) = 39.7918°; 5 ÷ 12 = 0.416667, tan⁻¹ = 22.6199°, 1.2 ÷ cos 22.6199° = 1.3000, 1.2 ÷ cos 22.6° = 1.29981, √1.69 = 1.3; 2.1 ÷ 3.6 = 0.583333, sin⁻¹ = 35.6853°, sin(0.583333°) = 0.010181; cos⁻¹ 0.75 = 41.4096°, tan⁻¹ 0.75 = 36.8699°; tan⁻¹ 4 = 75.96376°; the memory-aid case tan⁻¹(0.5 ÷ 6) = 4.76°. All correct.

## Findings

1. **Should fix, scene 3, key note 3 and the memory key line (the key order is backwards).** "Type that in as a division, then use inverse tangent" and the note "Type the ratio as a division, then SHIFT sin (cos, tan)" describe the wrong order for the common school calculators (Casio fx-82AU Plus II and fx-100AU, Sharp EL-531): the function key comes first and the division goes inside its bracket, exactly as the screen strip shows, "tan⁻¹(3.15 ÷ 4.51)". A student who types 3.15 ÷ 4.51 and then presses SHIFT tan gets a syntax error or a product; one who presses = first and then starts tan⁻¹ retypes a rounded ratio, the slip scene 4 warns against. Fix. Narration: "Press shift, then tangent, and type three point one five divided by four point five one inside the bracket." Key note 3: "SHIFT tan (or sin, cos), then the division in the bracket: tan⁻¹(3.15 ÷ 4.51)." Key line: "Name the sides, write the ratio, then SHIFT sin, cos or tan with the division inside." Students should be able to key an inverse ratio correctly the first time, with the ratio unrounded. About 2 s.

2. **Should fix, scene 3 (crowded frame).** As t01a finding 4: the house at about 900 px, the triangle at about 700 px and a 44 px calculator strip "tan⁻¹(3.15 ÷ 4.51) = 34.9322…°" (about 700 px) cannot sit side by side at 1920 px. Fix: the house as a 300 px badge (top left) whose "?" card flips to 34.9°; the triangle at about 700 px left; rows and the strip from about x = 820.

3. **Optional, scene 5 (a real decision is narrated away).** The three triangles are a natural prediction. Add before the answers: "For each one, decide which inverse before I say." and a 3 s hold (no countdown needed), then the existing narration. Students then make the choice rather than hear it.

4. **Optional, scene 6 (why not just Pythagoras?).** With both legs known, a student may ask why the sheet needs the angle at all. Add after "Pythagoras agrees": "Here Pythagoras could do it alone. Trig is what you need when you know one side and an angle." About 4 s.

## Joins

t01a to t01b: scene 1 opens on t01a's final frame exactly (house, "3.15 m", "4.51 m", the "?" card, "not to scale", the three chips). t01b to t02: scene 12's ladder frame ("4", "1", "1 m out for every 4 m up", "tan⁻¹(4 ÷ 1) = 75.96375…°", "75.96° in degrees and minutes?") is t02's stated opening frame; no minutes are worked. The ladder rule is SafeWork NSW's: its Ladders hazard page (safework.nsw.gov.au/hazards-a-z/ladders, read 18 November 2026) says to position the base 1 metre away from the structure for every 4 metres of height, for single and extension ladders. "A safety rule says" is fair; record that line in the design's Decisions (see t02 finding 3).

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown. A1's picture labels "θ" only, and A2's shows no height, so neither gives the ratio away. A1 needs sine and A2 cosine, different from the worked example's sine and the roof's tangent, so the choice is practised. Feedbacks give the answer, the reason, short working and one crossed slip (pressing sine instead of inverse sine; tangent without the height), at about 23 s and 25 s. A playground slide and a kite are fair, everyday and need no source.

## Key notes and length

Notes 1, 2, 4 and 5 are right and short; note 3 needs finding 1's order. About 462 s; the fixes add about 2 s (findings 3 and 4 would add about 7 s). Housekeeping: the YouTube title is still the 83-character version; ruling 62 accepted the 66-character alternative.

No speech, design edits, builds or commits were made.
