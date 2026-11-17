# Maths A11 t15b Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t15b.md`, "How do we solve trig equations with a multiple angle, like sin 2θ = k?" Source SHA256 `58dda64b26c242de46544cd3ff895aab012b7f3006431d9da41c88916584a097`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t04, t08, t10, t15a) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 and a numerical root scan of every stated domain (`work/brief-review-t2/verify_t09_t16.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good design with one small repair. The clock's two laps make "widen first" caused: the angle ran further, so the same heights came round again, and four dots stamp, not two. Scene 2 widens, solves and halves one row at a time, and the crossed slip shows "half the answers vanish". The k = 1 touch case replaces the site's "the number of solutions multiplies" claim with something a student can see (the counter drops from 4 to 2 as the crossings merge at the peaks). The radian example widens to 4π, uses radian mode and halves. The half-angle scene makes the rule work both ways for about 38 s; keep it (this answers open decision 2). Every solution set is complete in its stated domain (numerical scan): the clock, 0 ≤ m ≤ 120: m = 10, 50, 70, 110; sin 2θ = 0.5 on [0°, 360°]: 15°, 75°, 195°, 255°; sin 2θ = 1: 45°, 225°; cos 2x = 0.3 on [0, 2π]: 0.633, 2.509, 3.775, 5.650 (α = 1.2661); cos(θ/2) = ½ on [0°, 360°]: 120° only; A1 sin 2θ = −√3/2 on [0°, 360°]: 120°, 150°, 300°, 330°; A2 tan 2x = −1 on [0, 2π]: 3π/8, 7π/8, 11π/8, 15π/8. All correct.

## Findings

1. **Should fix, scene 4 (radian answers spoken without "radians").** "x is about zero point six three, two point five one, three point seven seven and five point six five" are angles in radians, in the scene that teaches radian mode. Fix: "... and five point six five radians." Students should hear the unit with every answer they will write.

2. **Optional, scene 3 (why two waves).** "Y equals sine two theta squeezes two full waves into zero to three hundred and sixty degrees" is stated. Add "because two theta runs through two laps, so the wave repeats every hundred and eighty degrees", which links it to scene 2's window.

3. **Optional, open decision 1 (the teal box).** The inside angle's teal outline box is a builder check against the teal sine curve at 400 px; the dashed blue fallback is fine. No narration change.

## Joins

t15a to t15b matches (see the t15a review). t15b to t16 matches: "2 sin² θ − sin θ − 1 = 0" with each sin θ glowing in turn, "w04: 2s² − s − 1 = 0?", "call it s?", "Next: equations that reduce to quadratics" and "?" are t16's opening frame, and t16's first line reads the same equation. Across the t15 split, t15a and t15b together cover single and multiple angles in degrees and radians with no repeated teaching: t15b recalls the method by a chip and spends its time on the window.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is an empty window map with an unlabelled upper strip; A2's is an empty radian window map. Each is a method reminder, not an answer. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 30 s and feedback 2 about 29 s, both at the limit; the design names a trim for each, so measure on the voiced take.

## Year 12 handoff check

Year 12 t02 calls the inside u, finds its window ("u runs from zero to four pi ... two full cycles, so expect four crossings ... Halve them all") and teaches "two per cycle unless the line touches". Scenes 2 to 4 give exactly that in Year 11 words, so u is a renaming. t03's inverse cos in radians is scene 4. Delivered. Length 4,723 characters is accepted by root ruling 28.

## Site link

`trigonometric-identities-and-equations/lesson11.sa.html` matches the design's source. Correct.

No speech, design edits or commits were made.
