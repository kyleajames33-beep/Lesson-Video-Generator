# Maths A11 t01 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t01.md`, "How do two special triangles give exact values at 30, 45 and 60 degrees?" Source SHA256 `026b7dc6bd17d973896e8cbdb28508641296aa0f585eabb59099c380ef70bb30`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 10 Pythagoras and SOH CAH TOA, w03 rationalising, e08's final frame) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 3 optional).

The opening problem is real: the calculator's running digits make "exact" feel necessary, and the visual surprise (the digits locking into √2/2) answers the video's own first frame. Both triangles are built, not announced: the sandwich's cut and the rack's centre line lift out, and Pythagoras writes each missing side. "1 faces 30°" is tied to the drawing, and "opposite and adjacent swap" is shown by the side colours changing in place when the focus corner moves. The sine sweep makes the order of the table memorable (sine grows because the opposite side grows), and the crossed "sin 60° = 1/2" uses that order as the check. Root ruling 15 (two plates) is applied. Every spoken angle carries "degrees". Recalculated: the nine exact values; sin 45° = 0.707106781187; √(1² + 1²) = √2, √(2² − 1²) = √3; sin² 30° + cos² 30° + tan 45° = 2; 2√2 = 2.828; tan 60° − tan 30° = 2√3/3; A1 = 2 (slip √3 − 1); A2 8 cos 45° = 4√2 = 5.657 (slip 8√2 = 11.31). All correct.

## Findings

1. **Should fix, scene 7 ("the side is the diagonal times cosine forty-five degrees").** This sentence arrives as a fact between the scaling idea and the tangent example, with no reason, and A2 depends on it entirely. A student will ask "why times cosine, and not divided?". It is a rearrangement they have not yet seen in this strand (t02 teaches "unknown on top: multiply"). Fix. Narration: "And in any half-square, cosine forty-five degrees is the side over the diagonal, adjacent over hypotenuse. So the side is the diagonal times cosine forty-five degrees. Check it here: two root two, times root two over two, is two centimetres." Visual: rows "cos 45° = side ÷ diagonal" then "side = diagonal × cos 45°", then "2√2 × √2/2 = 2 ✓" against the drawn side of 2 cm. Also say the unit on the decimal before it ("about two point eight three centimetres"). Students should be able to set up A2 from the ratio, not from a remembered sentence. About +120 characters; the reserve trim on scene 5's "To check it" sentence covers it.

2. **Should fix, scene 3 (the right angle at the base is asserted).** "The base splits into one and one, and the top angle splits into thirty and thirty. So each half has angles of thirty, sixty and ninety degrees." The thirty and sixty are explained; the ninety is not, and Pythagoras in the next sentence needs it. Fix. Narration: "So each half has angles of thirty and sixty degrees, and since a triangle's angles add to a hundred and eighty, the third angle, at the base, is ninety degrees." Visual: on "ninety" a right-angle mark draws at the foot of the height, hand tag "180° − 30° − 60° = 90°". Students should see why Pythagoras is allowed here.

3. **Optional, scene 7 ("scaling keeps the angles, and so keeps the ratios").** The link from angles to ratios is the step a student cannot see. Add the cause: "Scaling multiplies every side by the same number, so it cancels in each ratio." Visual: beside the 2 cm square, "2 ÷ 2√2 = 1 ÷ √2" in teal.

4. **Optional, scene 2 (why the diagonal halves the right angle equally).** "It splits the right angle at the corner into two equal halves" is true by symmetry, but no reason is said. Add "because the two sides at that corner are equal, so the cut is a mirror line". Low priority; the picture makes it plausible.

5. **Optional, scene 1 (one chip missing from the stated opening frame).** e08's handoff also draws the grey chip "e04: log₂ 100 ≈ 6.644, exact as log₂ 100" on "never end", and nothing fades it. t01's boundary and scene 1 do not list it. List it in t01's opening frame and fade it with the "Next" chips on the first sentence, so the join stays exact.

## Joins

e08 to t01 matches in substance: e08 ends "A square cut along its diagonal, and an equilateral triangle cut in half. That's next." on the square, the halved equilateral triangle of side 2, the running calculator strip and "30°, 45°, 60°: exact values?", and t01 opens on "Here's the calculator from last time", subject to finding 5's chip. t01 to t02: the cliff, the yacht 40 m out, "52°", "not 30°, 45° or 60°", "cliff height h = ?" and "Next: right-triangle problems" are t02's opening frame. The geometry of that frame needs one change, made in both designs (t02 review, finding 2): the horizontal is drawn at deck level while the 40 m runs along the waterline and the right angle sits at the cliff's foot.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows the two half-triangles with sides only; A2's shows the square, "8 cm" and one 45° mark; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 28 s, feedback 2 about 26 s. A2's demand ("using an exact value of cos 45°") is modelled only after finding 1 is applied.

## Later-video check

t02 to t08 use the nine values without re-teaching; t03 reuses "sides one, root three and two" for 120°, and t04 and t08 copy the values into every quadrant and into radians. Scenes 2 to 5 and key notes 1 to 4 deliver them in that form. Delivered.

## Site link

`trigonometry-and-measure-of-angles/lesson05.sa.html` (card 02, card 08, the `orient` square and the short answer) matches the outline. Correct. S11-14 is applied (no marking claim about rationalised denominators).

No speech, source edits or commits were made.
