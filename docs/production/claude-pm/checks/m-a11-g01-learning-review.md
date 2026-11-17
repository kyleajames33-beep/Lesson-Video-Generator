# Maths A11 g01 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g01.md`, "Which way does replacing x by x − a move a graph?" Source SHA256 `25fe803af647dfdb13ddf53470cada83871255dfb99ae806e611e3a1a6fe17ad`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t16's final frame, w15, w21, w31, e01, w09) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 2 optional).

This is a strong opening to the strand. The late runner makes "minus means later, so right" something a student sees on the track before any symbol: B's dot waits 2 s, then runs A's race, and the cursor pair "B at 4 s = A at 2 s = 4 m" gives the reason in numbers. The parabola then repeats the same reason ("the new graph only reaches an inside of zero when x minus three is zero"), so the direction is caused, not asserted. The head start turns "replace y by y − 10" into "every distance is ten more", and "subtract to move forward" lands the one rule for both axes before the solved form y = x² + 2 is shown. Scene 6 applies S11-G01's correction with a visible floating intercept. Every move happens on its cue with the parent ghosted. Open decision 2 (the race model): it reads as reasonable with its "model: first 4 s" tag; 16 m in 4 s is a believable sprint start. Recalculated: (t − 2)² at 2, 4, 6 is 0, 4, 16; t² at 0, 2, 4 is 0, 4, 16; t² + 10 is 10, 14, 26; (x − 3)² + 2 has minimum 2 at x = 3 and value 3 at x = 2 and 4; (−1, 1), (0, 0), (1, 1) carry to (2, 3), (3, 2), (4, 3); 1/(x + 2) + 1 → 1; 2ˣ − 3 → −3; (x − 2)² − 4 = 0 at 0 and 4; A1 y-intercept −7/3; A2 |x + 2| = 3 at 1 and −5. All correct.

## Findings

1. **Should fix, scene 4 ("A point x, y on the old graph lands at x plus three, y plus two on the new one").** The sentence before is "Now try x plus three, all squared. It slides left three." The visual returns to y = (x − 3)² + 2, but the narration never says so, so a student hears "x plus three" and then "lands at x plus three" straight after a graph that moved left. They will ask why a left slide moves points to x + 3. Fix. Narration, before the arrow sentence: "Back to x minus three, all squared, plus two. Every point moves by the same arrow, not just the vertex." Keep "A point x, y on the old graph lands at x plus three, y plus two on the new one." Visual: move the cue for the return to "Back to", so the screen and the words change together. Students should understand that the arrow belongs to the right-3, up-2 graph.

2. **Should fix, scene 5 and key note 4 ("A slide sideways changes the domain, and a slide up or down changes the range").** Scene 5's own first family, y = |x − 4|, has the same domain (all real x) as y = |x|, and the parabolas in scenes 2 to 4 keep all real x. A student who copies "A slide sideways changes the domain" will look for a changed domain in (x − 3)² and either invent one or decide the note is wrong. Fix. Narration: "A slide sideways moves any end or gap in the domain, and a slide up or down moves any end or gap in the range." Key note 4: "A sideways slide moves the domain's ends and gaps; an up or down slide moves the range's." Students should be able to say why 1/(x + 2) + 1 has domain x ≠ −2 while |x − 4| still has all real x.

3. **Should fix, scene 2 (the word "inside" before its meaning).** "The old vertex happens where the inside, x, is zero" is the first use of "inside", and the strand's memory aid ("Inside: on x, the opposite. Outside: on y, as written.") depends on it. The boxes from t16's frame help, but the word is never given a plain meaning. Fix. Narration: "The old vertex happens where the inside, the part in the bracket that replaced x, is zero. For y equals x squared, the inside is just x." Visual: on "the part in the bracket" the teal "x − 3" box pulses with a hand tag "inside". Students should be able to point at the inside of 1/(x − 3) and |x + 2| in the attempts.

4. **Optional, scene 1 (B's equation without its time range).** The pen draws B's curve only from t = 2, but the equation d = (t − 2)² gives 4 m at t = 0, where B is still at the line. Add a grey tag "from t = 2 s" beside B's equation (and "from t = 0 s" beside A's). Nothing else changes.

5. **Optional, key note 3 ("(x, y) → (x + 3, y + 2): every point, vertex and asymptote moves").** In a book, the arrow has no move attached. "Right 3, up 2: (x, y) → (x + 3, y + 2), for every point, vertex and asymptote." Same length on screen.

## Joins

t16 to g01 matches: t16 Revision 1 scene 12 ends on "Which way does replacing x by x minus a move a graph?" with y = x² on x −4 to 6, "y = (x − 3)²" with blue boxes, "minus means left?" and the two chips, exactly g01's opening frame. The blue-to-teal recolour is accepted (root ruling 29). g01 to g02: the phone with the ding's wave (x −3 to 3, y −9 to 9), the Reverse and Invert buttons, the headphones badge and the chips "Reverse: replace x by −x?", "Invert: replace y by −y?", "Next: reflections", "?" are g02's opening frame.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty axes with the ghost; A2's is empty axes; nothing is answer-bearing. Both attempts use only what was taught: A1 needs "down 2 replaces y by y + 2" (scene 6 shows the same step), A2 needs w31's two cases (grey chip in feedback). Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 25 s, feedback 2 about 24 s.

## Year 12 handoff check

t01 lists Year 11 translations as entry knowledge, and its scene 4 says "Everything happens pi over three later ... The minus sign means later, a slide to the right. A plus sign would mean earlier, a slide to the left." Scene 2 teaches the same cause in the same words ("Everything happens three later ... Minus three inside means right three. Plus three would mean left three."), and scene 7 carries t01's memory aid word for word. Delivered.

## Site link

`graph-transformations/lesson01.sa.html` is the design's site source and the YouTube link. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
