# Maths A11 g03 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g03.md`, "How does replacing x by x/k or y by y/l stretch a graph?" Source SHA256 `2c846cd5cde3edf07980c2d2860c4bebf8de367ce8211dbc676252b91855d1ec`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (g01, g02, w24, w15) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

A good design. The width-only copy makes "divide x by two, twice as wide" caused: the point (2, 4) lands at (4, 4), so "the new curve, at x equals four, has the height the old one had at two", which is g01's reason carried over. The height-only copy explains why y/2 doubles heights (the new y, divided by two, gives the old height), and the crossed "y/2: heights halve" sits where the slip happens. Scene 4 says the reciprocal link in the words Year 12 needs ("Three x is x divided by a third") and the readout says "squash". Scene 6 corrects S11-G02 visibly: the same factor both ways keeps the shape; one way turns the circle into an oval. Every stretch runs from a bold, coloured axis on its cue with the parent ghosted. Open decision 2 (the width-only setting): believable as written; keep. Recalculated: (x/2)² at 4 is 4; 2x² at 1 is 2; y/2 = (x/2)² gives y = x²/2 and (2, 2) is on it; √(12/3) = 2, √(3 × 4/3) = 2, 3√4 = 6; `we-dil-3` (2, 3) → (6, 6) and (6, −1) → (18, −2), with 2f(6/3) = 6 and 2f(18/3) = −2; 9((x/3)² + (y/3)² − 1) = x² + y² − 9; A1 (8, −9); A2 x² + y² = 4. All correct.

## Findings

1. **Should fix, scene 4 (no vertical factor between 0 and 1 is ever shown).** The syllabus point asks for the effect of a factor between 0 and 1, key note 4 says "A factor between 0 and 1 squashes towards the axis" for both directions, and A2 replaces y by 2y, which is a vertical factor ½. But the only factor below one taught is horizontal (√(3x)). The Decisions say the slider then runs the vertical factor too, but scene 4's Visual and narration do not. A student meeting "replace y by 2y" in A2 has only "Inside: on x, the opposite" to go on, and may call it a vertical stretch by 2. Fix. Narration, after "just as it's written": "And replacing y by three y gives three y equals root x, so y is a third of root x. That's a vertical dilation by a factor of a third, a squash towards the x-axis." Visual: input "3y = √x" types (amber "3y"), then "y = ⅓√x", the curve squashing towards the bold amber x-axis, (4, 2) → (4, ⅔) ringing, readout "vertical factor ⅓: squash". About 160 characters (12 s), still well under 570 s; the reserve trim of scene 4's last sentence covers it if needed. Students should be able to say that y → 2y in A2 halves every height.

2. **Optional, scene 6 (the surprise rests on algebra that is never said).** "Enlarge y equals x squared by a factor of two, and you get y equals x squared on two" is shown on screen as "y/2 = (x/2)² → y = x²/2" but not spoken. Add "Both replacements give y over two equals x over two, all squared, so y equals x squared on two." Students should hear why the wider parabola is the enlarged one.

3. **Optional, scene 4 (the squash's direct reason).** The reciprocal argument is sound, but the direct reason from scene 2 is also available. After "a factor of one third": "It reaches the old height of two already at x equals four thirds." This ties the squash to the ringed point.

4. **Optional, scene 1 ("it comes from dividing x, or y, by the factor").** This states the answer before scenes 2 and 3 derive it. Cut the sentence; the question that follows still makes sense.

## Joins

g02 to g03 matches: the copier, the page with y = x² from its lower-left corner, the panel "Zoom 200%" and "Width 200% · Height 100%", and the four chips are g03's opening frame. g03 to g04: the oven with °F marks, "Bake at 180 °C", "°F = 1.8 × °C + 32", the two workings with no results and the chips are g04's opening frame. One detail: g04 says it opens with "× 1.8" amber and "+ 32" violet on the rule card, and g03's scene 12 Visual gives no colours. Either g03 draws those colours, or g04 colours them on its first sentence.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows only P; A2's shows only the given circle; nothing is answer-bearing. A1 uses scenes 2, 3 and 5. A2 can be done by algebra alone, and its "describe the transformation" demand needs finding 1. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 23 s, feedback 2 about 26 s.

## Year 12 handoff check

t01 says "2x squashes by a half", lists "a horizontal dilation by factor ½ doubles the width" as a misconception, and uses "Outside: on y, as written. Inside: on x, the opposite."; d02 says 2ˣ is eˣ "scaled horizontally by the factor 1/ln 2"; d06 and d13 say "squashed sideways by ½". Scene 4 delivers the reciprocal link in words and the "squash" readout, scenes 2 and 4 deliver "a factor of" language, and scene 7 carries t01's aid word for word. Delivered.

## Site link

`graph-transformations/lesson03.sa.html` is the design's site source and the YouTube link. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
