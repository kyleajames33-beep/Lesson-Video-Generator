# Maths A11 c10 Revision 1: independent learning review

16 November 2026. Design `lessons/math-a11-c10.md`, "How does the chain rule handle a function inside a function?" Source SHA256 `32d92e0c55ed2bc48971bcac4faceb9323128d3f0f228ddf82f2b5994d0b4370`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass with should-fix** (0 blockers, 1 should fix, 2 optional).

The expansion test is a convincing opening: (3x + 2)² can be expanded, its true derivative is three times the power rule's guess, and the 3 is ringed inside the bracket as "how fast the inside changes". The pond's units cancel in pairs (m² per m × m per s), so multiplying rates feels caused. "Call the inside part u", dy/du × du/dx and "put the inside back" are the exact words and layout Year 12 d01 to d06 quote. Recalculated: 18x + 12 = 6(3x + 2); 15(3x + 2)⁴; 24x²(2x³ + 5)³; 8x(x² + 1)³ with gradient 64 at x = 1; x/√(x² + 1); −6/(2x − 1)⁴; A1 −12(1 − 4x)² and −12/(3x + 1)³; A2 4/3, slip 1/6; pond dA/dt = π at t = 2 s. All correct.

## Findings

1. **Should fix, scene 2 ("So each second, the area grows by two pi, times a half, which is pi, about three point one square metres per second.").** π m² per second is the rate at the instant the radius is 1 m. Over the following second the area actually grows by about 3.9 m² (A(3) − A(2) = 1.25π), because the ring keeps getting longer. "Each second ... grows by" describes an average over a second, the "from ... to" reading that c03 taught students to keep apart from "at". The sentence quietly contradicts it. Fix: "So at that moment, the area is growing at two pi, times a half, which is pi, about three point one square metres per second." Keep the row "dA/dt = 2π × ½ = π ≈ 3.1 m²/s" and add the hand tag "at t = 2 s".

2. **Optional, root ruling 1 on c10 to c18 (the pond badge is not yet in scene 1).** Add to scene 1's Visual: on "function inside a function", the pond thumbnail (240 px) appears at the top left with a still ring. No narration change.

3. **Optional, attempt 1 (a spoken fraction).** "Two over three x plus one, all squared" can be heard as (2/(3x + 1))². The card is unambiguous, but say "two over the square of three x plus one" in scene 9.

## Joins

c09 to c10 matches (the algebra frame, root ruling 6). c10 to c11: the dog-walking plate with "$15 a walk, + $1 a month", "8 walks a week, + 2 a month", "income: 15 × 8 = $120 a week" and "rising how fast? 1 × 2 = 2 ?" is c11's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown, with nothing answer-bearing (A2's picture marks the point but draws no tangent). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 is about 29.9 s, at the limit; measure it on the voiced take, and if it runs over, cut "Write the second as" to "The second is". Feedback 2 about 28.5 s.

## Site link

`introduction-to-differentiation/lesson05.sa.html` ("The Chain Rule") carries `we-chain-1` to `we-chain-3`. Correct.

No speech, source edits or commits were made.
