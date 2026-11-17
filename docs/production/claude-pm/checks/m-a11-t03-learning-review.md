# Maths A11 t03 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-t03.md`, "How does a point on a circle define trig ratios for any angle?" Source SHA256 `3d71c23326df6540186b16a1fb7474409e882cacae242db64724d80dea0741cf`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01, t02, w24) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated where stated; Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good design. The need is felt first: t02's frame shows a 120° angle no right triangle can hold, yet the calculator gives 0.866. The skateboard earns its place: spins already have names past 360°, and "after a five forty, the board points the same way as after a one-eighty" is "one ray, many angles" before the word "ray". The definitions are justified rather than announced ("Why is that fair?"): the drop triangle shows x/r is the old cosine for acute angles, and the radius slider shows why r does not matter (x, y and r all double). The axis angles are read from the four points, and "you can't divide by zero" gives tan 90° a cause. Scene 6 closes the loop on the calculator's 0.866 with "the point's height over the radius". The alphabet cue (x before y, c before s) is a compact, checkable aid. Recalculated: √(9 + 16) = 5, cos θ = −3/5, sin θ = 4/5, tan θ = −4/3, θ = 126.87°; axis values; 120° on radius 2 at (−1, √3), sin 120° = √3/2 = 0.866025, cos 120° = −1/2; 480°, −240°, 410°, −310°; A1 r = 13, −12/13, −5/13, 12/5; A2 −2. All correct.

## Findings

1. **Should fix, scene 6 (why sixty degrees, and which side is one).** Narration: "The ray makes sixty degrees with the negative x-axis, so the drop gives the half-equilateral triangle, with sides one, root three and two. The point is one unit left and root three up." Two steps are missing. The 60° is read off the picture with no reason (180 − 120), and the student must decide which leg is 1 and which is √3; t01's rule was "1 faces 30°", which here means the 1 lies along the axis, but that is not said. This answers open decision 1: keep scene 6 (it does not pre-empt t04, and root ruling 17 accepts it in plain words), with the reason added. Fix. Narration: "A hundred and twenty degrees is sixty degrees short of a half turn, so the ray makes sixty degrees with the negative x-axis. The drop gives the half-equilateral triangle, with the sixty degree angle at the origin. So the short side, one, lies along the axis, the height is root three, and the radius is two." Visual: on "short of a half turn" a blue bracket from the 120° ray to the negative x-axis, hand tag "180° − 120° = 60°"; on "short side" the "1" and the 30° at the point ring together, as in t01's "1 faces 30°". Students should be able to place the triangle themselves for 150° or 135°, which t04 then asks of them.

2. **Optional, scene 3 ("theta" before its meaning).** "Cosine theta is x over r ... Theta is just a letter for the angle." The word is used three times before it is explained. Move the meaning first: "Call the angle theta, just a letter for the angle. Cosine theta is x over r ...".

## Joins

t02 to t03 matches: t02 ends "So what does sine of a hundred and twenty degrees actually measure? That's next." on the 120° ray, "sin 120° = 0.8660…" and "no right triangle holds 120°", and t03 opens on that frame with "Here's that hundred and twenty degree angle". t03 to t04: the radius-2 circle, rays at 30° and 150° with a dashed level line, amber heights, "same height", "sin 150° = sin 30°?", "Next: every quadrant" and "?" are t04's opening frame, and t04's first line picks them up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows P and OP without the circle's radius; A2's shows an empty circle; nothing is answer-bearing. A2 has three short parts, each modelled (scenes 5 and 2). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 28 s.

## Later-video check

t04 relies on the circle definitions, signs from coordinates and the multiples of 90°; t08 relabels the circle in radians; t10 reads the point's height and x as graphs. Scenes 3 to 6 and key notes 2 to 5 deliver these. Delivered. Open decision 2 ("five forty" as a trick name in scene 1 only) is fine.

## Site link

`trigonometry-and-measure-of-angles/lesson03.sa.html` (with lesson01's coterminal angles and TI lesson04's undefined tangents, taught in degrees) matches the outline. Correct.

No speech, source edits or commits were made.
