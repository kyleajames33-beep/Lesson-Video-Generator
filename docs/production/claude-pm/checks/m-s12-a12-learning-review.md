# Maths S12 a12 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a12.md`, "What is inverse variation, and why is its graph a hyperbola?" Source SHA256 `8c7e35d87af7f8eb739123c0cf44d7a2b3db55dd4bee9ff204edf323c0ad99a6`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 direct variation y = kx and its line; a05's asymptote) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

The holiday house gives k a real meaning (the whole bill), and "double the friends, half each" follows straight from Year 11's "double, double". Scene 3's falling straight line (products 12, 20, 24) earns "multiply to test" with a contrast rather than a rule. Scene 4 is the best explanation of an asymptote in the strand: a rectangle of fixed area 12 must get shorter as it gets wider, and "it can't touch, because then its height or width would be zero, and the area would be zero, not twelve". That answers why the hyperbola never touches the axes, and "nothing times zero makes twelve" gives x ≠ 0 the same cause. Recalculated: 1,200 ÷ n at 1, 2, 3, 4, 6, 12 gives 1,200, 600, 400, 300, 200, 100; 14 − 2x at 1, 2, 3 gives 12, 10, 8 with products 12, 20, 24; 12/x at the negative values gives −12, −6, −4, −3, −2, −1; 12/0.5 = 24; 30/x table and x = 5 at y = 6; A1 products all 48, 48 ÷ 16 = 3; A2 6/x values −1, −2, −3, −6, 6, 3, 2, 1. All correct.

## Findings

1. **Should fix, scene 2 (x and y are never named aloud, and y = 12/x is stated, not reasoned).** The givens card shows "x: number of friends" and "y: share", but the narration first says "x" in "Since x times y is twelve, y equals twelve over x". A student listening hears two new letters and a rearrangement in one breath. Fix. After "Put the shares in hundreds of dollars ...": "Call the number of friends x, and each share y." Replace "Since x times y is twelve, y equals twelve over x." with "Each share is the whole bill divided by the number of friends, so y equals twelve over x." About 60 characters more. Students should understand that y = k/x is the situation in symbols, not a formula to memorise.

2. **Should fix, scene 5 ("quadrant" has no plain meaning).** The narration says "in the third quadrant, at the bottom left" and later "second and fourth quadrants". The design's plain-meanings list promises "one of the four quarters of the graph, numbered anticlockwise from the top right", but no sentence says it. Fix. Before "Those points make a second branch": "The axes cut the graph into four quarters, called quadrants, numbered one to four, anticlockwise from the top right." Visual: the grey numbers 1 to 4 light in order on that sentence. About 115 characters.

3. **Should fix, scene 5 (ruling 23 asks for the reason).** "In a practical problem, like friends and dollars, only positive values make sense" states the restriction without the reason ruling 23 requires. Fix: "In a practical problem, you can't have minus two friends, or pay a negative share, so we use just the first-quadrant **branch**." Same length.

4. **Optional, scene 4 (half a friend).** The rectangle's corner slides to x = 0.5 under the holiday-house badge, but friends come in whole numbers, which a13 then uses for rounding. Either drop the house badge from scene 4 (it is the pure graph of y = 12/x) or add a grey tag "the graph: any x; friends: whole numbers only".

5. **Optional, scene 6 (k < 0 said a second time).** "A negative k swaps the quadrants" repeats scene 5. Ruling 23 asks for both branches once; scene 5 and attempt 2 already carry the negative values, so the app can sweep k between positive values only and keep the "k = 0" flash.

Open decision 1 (both branches) is closed by ruling 23; with findings 3 and 5 applied the design follows it. Open decision 2 (shares in hundreds): followable; scene 2 says the switch aloud and every spoken amount stays in dollars.

Root ruling 24: the description still carries three codenames. Drop them.

## Joins

a11b to a12 matches (the house, "$1,200 for the weekend", the Year 11 strip, "4 friends: ?"); a12 answers "4 friends: $300" in its first scene. a12 to a13: the country road with the red hatchback, "same trip every time", "40 km/h: 3 h", "100 km/h: how long?" and "Next: building reciprocal models" are a13's stated opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1 shows the table with no product column; A2 shows an empty table and empty axes; nothing is answer-bearing. Each feedback gives the answer, the reason and one crossed classic mistake ("y ÷ x = 12, so y = 12x"; the branches joined through the origin). Feedback 1 about 26 s, feedback 2 about 27 s.

## Length

5,519 characters (recounted by script), about 504 s with holds, about 409 s of speech before the notes. Findings 1 and 2 add about 175 characters (about 13 s). Under 570 s without rushing.

No speech, source edits or commits were made.
