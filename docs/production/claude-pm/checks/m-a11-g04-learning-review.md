# Maths A11 g04 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-g04.md`, "Why does the order of transformations matter?" Source SHA256 `1fea5483c4f71e23ead64c7ebc03c3eb3c0f1a2733da4e57bbf4dc47d669d991`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (g01 to g03, w27) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated with SymPy 1.14 (`work/brief-review-g/verify.py`, `python -I`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

A strong design, and the anchor is the cause: adding first makes the × 1.8 stretch the 32 into 57.6, and scene 2 shows the same thing on a graph ("The stretch stretched the slide"). The commuting pair is explained, not left as luck ("A sideways slide changes no heights, and a vertical stretch moves nothing sideways"), so "same axis matters, different axes don't" is a reason students can reuse. Scene 4 makes "x + b inside the a" a consequence of replacing every x, and scene 6 reads by factoring first with t01's crossed misconception.

**Order of transformations (root ruling 5): correct.** The form y = k f(a(x + b)) + c is built by replacing x by ax and then x by x + b, so a point (u, v) goes to (u/a − b, kv + c): dilate (with any flip) then translate on each axis. Outside, k multiplies before c adds. The site's translate-then-dilate reading (S11-G03) never appears. Scene 6 reads 3f(2x − 4) + 5 as factor ½ then right 2, factor 3 then up 5, which is the same order.

**"Order matters" examples (S11-G04): they really differ.** Vertical pair: stretch ×2 then up 1 gives 2x² + 1, vertex (0, 1); up 1 then ×2 gives 2x² + 2, vertex (0, 2). Horizontal pair: right 1 then factor 2 gives ((x − 2)/2)², vertex at 2; factor 2 then right 1 gives ((x − 1)/2)², vertex at 1; the two curves are different (SymPy: difference not zero). The different-axes pair, right 1 and vertical ×2, gives 2(x − 1)² = 2x² − 4x + 2 in either order. Other values recalculated: oven 356, 381.6, difference 25.6, 1.8 × 32 = 57.6; Q9 −(2(x + 3))² + 2 = −4(x + 3)² + 2 = −4x² − 24x − 34, vertex (−3, 2), slip vertex at x = −3/2; `we-ct-2` (2, 4) → (3, 17), check inside 2(3 − 2) = 2; A1 3x² − 2 and 3x² − 6; A2 √(4 − x) (x ≤ 4) and √(−x − 4) (x ≤ −4); caps 21 and 15. All correct.

## Findings

1. **Should fix, scene 4 ("So we fix an order. On each axis, stretch first, then slide.").** Straight after two scenes proving that order matters, "we fix an order" can be heard as "always stretch first, whatever the question says". A1's second copy and A2 (b) then ask students to slide first, and a student who took the rule literally will reorder the moves and get the first answer twice (the very slip A1 crosses). Fix. Narration, after "So we fix an order. On each axis, stretch first, then slide.": "That's the order the form is written in. If a question gives the moves in a different order, do them in that order, one replacement at a time." Visual: a grey chip "question's order: follow it" under the order chip. About 8 s. Students should understand that the form is a way of writing and reading a result, not a rule that overrides a stated sequence.

2. **Optional, scene 4 ("A negative a or k also flips the graph").** A2 depends on a negative a, and the sentence does not say which mirror. "A negative a also flips it in the y-axis, and a negative k in the x-axis." Matches g02's colours (blue and amber) already on the sliders.

3. **Optional, feedback 2 (hard to hear).** "Root of minus x minus four" can be heard as √(−x) − 4. Add to pronunciation note (h): "root of, bracket minus x minus four" for √(−x − 4), and say it that way in both places. The crossed slip is labelled "(a)", which correctly separates it from (b)'s green answer, the same expression.

4. **Optional, scene 4 (tie the form back to the oven).** One phrase after "then add c, a slide up by c": "just like the oven: multiply, then add." The correct conversion is the form's own order, which makes the anchor map onto the maths at the moment the form appears.

Open decision 2 (four letters in one scene): keep scene 4 whole. Each letter arrives on its own cue with its own slider, colour and readout, and the scene is about 51 s. No split into "x half" and "y half" is needed.

## Joins

g03 to g04 matches (oven, °F marks, "Bake at 180 °C", "°F = 1.8 × °C + 32", the two workings, the chips), with one colour detail: g04's opening frame has "× 1.8" amber and "+ 32" violet, which g03's scene 12 does not specify (see g03 review). g04 to g05: the caps plate, "set-up $90 · $12 a cap", A = 90/n + 12 for n ≥ 1 with the 1/x ghost, the row "1/x: stretch × 90, then up 12", the dashed A = 12 with "?" and the chips are g05's opening frame. g04's frame also carries the rider readouts "n = 10: $21" and "n = 30: $15", which g05's boundary does not list; g05 repeats them in scene 1, so this is harmless.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty axes with the ghost; A2's is empty axes with the √x ghost; nothing is answer-bearing. A2 asks for domains, which g05 owns, but a student can get them from "a square root needs a non-negative inside" (w-strand) and g02's √(−x) pointing left; fair. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 27 s, feedback 2 about 28 s.

## Year 12 handoff check

t01 reads y = k f(a(x + b)) + c, says "Factor out the two ... squash by a factor of a half, then slide left by pi over two", fixes the order squash then slide, and lists "reading the translation as the inside number instead of that number divided by a". Scene 4 introduces the form in those letters and colours; scene 6 says "Take the two out of the bracket first" and "a squash by a factor of a half, then a slide right two"; scene 6's crossed slip is t01's misconception; scene 7 carries t01's aid. Delivered.

## Site link

`graph-transformations/lesson04.sa.html` is the design's site source and the YouTube link. Not opened in this review; consistent with the design's quotations.

No speech, source edits or commits were made.
