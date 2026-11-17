# Maths A11 g02 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g02.md`, "How do −x and −y reflect a graph?" Source SHA256 `7ac3c534444672f4628cd0b12738249b4df601c37135f891b77b60a9bac8f15f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (g01, w26, e01) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

The Reverse button makes the y-axis reflection caused: "two seconds after the middle, you hear the moment from two seconds before it", so the strike moves from −2 to 2, and "the new graph at x copies the old graph at minus x" follows g01's reason. The crossed slip "−x flips in the x-axis" is placed exactly where the confusion arises, and "the mirror is never the axis named by the letter you changed" is a usable check. Invert zoomed in shows heights changing sign with the crossings fixed. The cubic-and-root-x contrast in the app answers "are the two flips the same?" with a case where they agree and one where they do not. Open decision 2 (time zero at the middle): it is said and shown before Reverse is pressed, so it reads as a choice of axis; keep. Recalculated: envelope 8(½)^(x + 2) at −2, 0, 1, 2 is 8, 2, 1, ½ (at −1.9 it is 7.46, so a crest of 7 fits inside); −(x³ − 2x) = (−x)³ − 2(−x) = −x³ + 2x; (1, −1) and (−1, 1) are both on the cubic; x² − 4x + 3 has vertex (2, −1), f(−x) = x² + 4x + 3 with vertex (−2, −1), −f(x) = −x² + 4x − 3 with vertex (2, 1); A1 images (−3, −2), (0, 1), (4, 0) and (3, 2), (0, −1), (−4, 0); A2 2⁻ˣ through (0, 1), −2ˣ through (0, −1), both with asymptote y = 0. All correct.

## Findings

1. **Should fix, scene 1, root ruling 32 not applied ("and it sounds just the same to your ear").** Ruling 32 lets the clause stay only if the narration says why in one plain sentence; the design gives no reason (open decision 1 and author note b). A student will ask how a wave turned upside down can sound the same, and the answer is outside the course. Fix (preferred): cut the clause, so the sentence reads "Invert flips every wiggle of the wave upside down." If root wants to keep the surprise, add root's sentence: "Flipping every value up and down leaves the pattern of the wave unchanged, and that pattern is what your ear hears." Students should hear only claims the lesson can explain.

2. **Should fix, scene 5 (the crossed slip and the x-axis answer look almost the same).** The red slip "y = −x² + 4x + 3" is crossed, and seconds later the amber row "x-axis instead: y = −x² + 4x − 3" writes on the same board. They differ only in the last sign. A student comparing them will ask whether the crossed one was right after all. Fix. Visual: on "For a reflection in the x-axis instead", clear the red slip and its caption before the amber row writes. Narration: "For a reflection in the x-axis instead, every term changes sign, including the three. That's y equals minus x squared, plus four x, minus three." Students should see that a y-axis reflection changes only the odd-power term here, while an x-axis reflection changes every term.

3. **Should fix, feedback 2 (answer and slip sound the same).** "Replacing y by minus y gives y equals minus two to the x" is followed by "Minus two, all to the x, is the slip." By ear these are the same words in a different rhythm, and the slip is about exactly that difference. Fix. Answer: "Replacing y by minus y gives y equals minus, two to the x, so every height is negative." Slip: "A base of minus two is the slip. The minus goes in front, not on the base." Add both to the pronunciation note (g). Students should be able to hear which expression is crossed.

4. **Optional, scene 4 (why an odd function's two flips agree).** "That only happens because this cubic is an odd function ... flipping it sideways gives the same picture as flipping it upside down" restates the result. The reason is in the half-turn sentence at the end of the scene. Move the half-turn first: "Doing both flips moves every point x, y to minus x, minus y, a half-turn about the origin. An odd function is one a half-turn leaves unchanged, so one flip lands exactly where the other does." Then root x. Students should see the agreement as a consequence of w26's definition.

5. **Optional, scene 3 ("Minus y equals f of x is the same as y equals minus f of x").** Add "multiply both sides by minus one" so the rearrangement is a step, not an assertion.

## Joins

g01 to g02 matches: g01 scene 12's phone, ding's wave on x −3 to 3 and y −9 to 9 ("wave height"), the unpressed Reverse and Invert buttons, the headphones badge and the four chips are g02's opening frame. g02 to g03: the photocopier, the coded page with y = x² from its lower-left corner, the panel "Zoom 200%" and "Width 200% · Height 100%", and the chips "copy at 200%: what equation?", "width only: what equation?", "Next: stretching a graph", "?" are g03's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows only the three given points; A2's is empty axes; nothing is answer-bearing. A1 and A2 use only scenes 2, 3 and e01's 2ˣ. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 29 s (with the 1 s hold, about 30 s); finding 3's wording adds about 2 s, so trim "It still crosses at zero, one, on the mirror" to "It still crosses at zero, one" to stay at or under 30 s.

## Year 12 handoff check

t01 needs "k < 0 also reflects in the x-axis" with every height changing sign, and "a number outside acts on every height as written". Scene 3 delivers both, ending "The number outside, minus one, acts on every height, just as it's written." t01's grey chip cos(−x) = cos x relies on scene 2's rule. Delivered.

## Site link

`graph-transformations/lesson02.sa.html` is the design's site source and the YouTube link. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
