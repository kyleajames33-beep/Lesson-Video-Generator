# Year 11 Maths Advanced g01 to g06: learning review resolution

17 November 2026. This is the design author's resolution of `m-a11-g01-g06-learning-review-summary.md` and the per-design files `m-a11-g0N-learning-review.md`. It applies root's four binding decisions for this round: g02 cuts the "Invert sounds just the same" clause (ruling 32 superseded); g03's final frame draws "× 1.8" in amber and "+ 32" in violet so that g04 opens on exactly that frame; g05 is not split, defines "the frame" in plain words before naming it, resolves the intercept contradiction with g03 and fixes the town grid ranges; g06's key note 1 keeps the labelled syllabus letters a and b. All six designs now carry "Revision 2 (17 Nov 2026): learning review resolved" at the top, and their Status lines say "learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Values were rechecked with SymPy 1.14 (`work/brief-resolve-g/verify.py`, `python -I`, 49 checks, 0 failures), and narration was recounted by script (`work/brief-resolve-g/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority.

**Totals:** 25 findings (0 blockers, 10 should fix, 15 optional). Should fix: all 10 applied. 4 use the reviewer's wording (g01 #1, g01 #2, g02 #2, g03 #1), 3 follow root's decisions (g02 #1, g05 #1, g05 #2), and 3 are adapted (g01 #3, g02 #3, g04 #1). Optional: all 15 applied, 2 of them adapted (g04 #3, g06 #2). None declined.

## Should fix

- g01 #1, scene 4 ("lands at x plus three" straight after a left slide): accepted, reviewer's narration. "Back to x minus three, all squared, plus two." comes before the arrow sentence. The new cue "Back" fades the (x + 3)² curve and returns the screen to (x − 3)² + 2, so the words and the screen change together.
- g01 #2, scene 5 and key note 4 ("A slide sideways changes the domain"): accepted, reviewer's wording. A slide "moves any end or gap" in the domain or range. On that sentence the |x − 4| domain bar stays unbroken beside the hyperbola's moving gap.
- g01 #3, scene 2 ("inside" used before its meaning): accepted, adapted. The reviewer's two ideas are reordered so that the word is defined first: "Call the part in the bracket that replaced x the inside. For y equals x squared, the inside is just x, and the old vertex happens where the inside is zero." The new cue "bracket" pulses the teal "x − 3" box with the hand tag "inside".
- g02 #1, scene 1 (ruling 32 not applied): accepted as root decided. The clause is cut, so the line reads "Invert flips every wiggle of the wave upside down." Author note (b) is updated.
- g02 #2, scene 5 (the crossed slip and the x-axis answer side by side): accepted, reviewer's narration and visual. The slip clears before the amber row writes, and the narration adds "including the three".
- g02 #3, feedback 2 (answer and slip sound the same): accepted, adapted. The answer uses the reviewer's wording ("y equals minus, two to the x, so every height is negative"). The slip line is "A base of minus two is the slip. For part a, the minus goes on the x, not on the base." The crossed card on screen is part (a)'s "(a) y = (−2)ˣ". The reviewer's "The minus goes in front" fits part (b), so it would contradict the card. Three short cuts keep the feedback at about 28 s of speech (about 29 s with the hold). Pronunciation note (g) records both readings.
- g03 #1, scene 4 (no vertical factor between 0 and 1): accepted, reviewer's narration and visual. "And replacing y by three y gives three y equals root x, so y is a third of root x. That's a vertical dilation by a factor of a third, a squash towards the x-axis." The input "3y = √x" then "y = ⅓√x" squashes the curve towards the amber x-axis, and (4, 2) → (4, ⅔) rings. A2's "replace y by 2y" is now taught.
- g04 #1, scene 4 ("So we fix an order" heard as "always stretch first"): accepted, adapted. The reviewer's instruction is used, placed just after the form is shown so that "the form" is on screen when named: "It's written in that order. If a question gives the moves in a different order, do them in that order, one replacement at a time." The new cue "order" writes the grey chip "question's order: follow it".
- g05 #1, scenes 2, 3 and 6 ("the frame" used before it is defined): accepted as root decided (decision 3). Scene 2 describes it in plain words first, then names it: "First, carry everything that rides along with the moves: the asymptotes, the key points, the domain and the range. Together, call these the frame." The ledger row groups pulse as each is named, and on the new cue "frame" a labelled bracket draws around them.
- g05 #2, scene 6 and key note 4 ("Intercepts don't ride along"; "Never carry them"): accepted and extended as root decided. Scene 6 now says: "Intercepts can't be trusted to ride along. A vertical stretch keeps x-intercepts on the axis, but a slide up or down lifts them off it. So find them by putting x or y equal to zero, and solving." This agrees with g03 scene 3. A small inset reuses g03's y = x² − 1 → 2(x² − 1), whose intercepts stay. The inset then slides the curve up 2, and the intercepts lift off. Key note 4 uses the reviewer's wording: "Intercepts: put x = 0 or y = 0 and solve, even if a move seems to keep them."

## Optional

- g01 #4, scene 1 (B's equation without its time range): applied. The grey tags "from t = 0 s" and "from t = 2 s" sit beside A's and B's equations. Screen only.
- g01 #5, key note 3: applied, reviewer's wording ("Right 3, up 2: (x, y) → (x + 3, y + 2), for every point, vertex and asymptote.").
- g02 #4, scene 4 (why an odd function's two flips agree): applied, reviewer's wording. The half-turn now comes first, then "An odd function ... is one a half-turn leaves unchanged, so one flip lands exactly where the other does", then root x. The "origin" cue moves ahead of "Take root x".
- g02 #5, scene 3: applied ("Multiply both sides of minus y equals f of x by minus one").
- g03 #2, scene 6 (the surprise's algebra not spoken): applied, reviewer's sentence. The rows now write on "Both replacements".
- g03 #3, scene 4 (the squash's direct reason): applied, reviewer's sentence ("It reaches the old height of two already at x equals four thirds."), with a dotted line at height 2.
- g03 #4, scene 1 (answer stated before it is derived): applied, sentence cut.
- g04 #2, scene 4 (which mirror a negative a or k uses): applied, reviewer's wording, with grey tags on the a and k sliders.
- g04 #3, feedback 2 (√(−x − 4) hard to hear): applied, adapted. It is said "root of, bracket minus x minus four". The slip line points back to it ("Writing that for part a is the slip.") instead of repeating it. Pronunciation note (h) is updated.
- g04 #4, scene 4 (tie the form to the oven): applied ("just like the oven: multiply, then add"). The oven strip's amber "× 1.8" and violet "+ 32" pulse beside the k and c badges.
- g05 #3, scene 2 (density): applied, a 1.5 s settle after "minus one, minus two". Speech is unchanged.
- g05 #4, scene 4 (the range step): applied, reviewer's wording. The range bar turns over, then rises 4.
- g06 #1, scene 4 (the square of half not said aloud): applied, reviewer's wording for both groups.
- g06 #2, scene 2 (checking a point with the equation): applied, adapted. "Check a house at six, two, by putting it into the equation." The substitution row now writes before the triangle, so A2's method is heard and seen.
- g06 #3, scene 5 ("two minus minus one"): applied ("the distance across, from minus one to two, which is three units"). The screen row and a 3-unit bracket stay.

## Root's decisions and housekeeping

- Decision 2 (g03 → g04 join): g03 scene 12 and its Decisions handoff draw "× 1.8" in amber and "+ 32" in violet on the rule card. The colours are not spoken. g04's boundary now records the same colours, and its scene 1 already opened on them. This is the only final-frame change in the strand.
- Decision 3 (g05): no split. The Decisions handoff's town grid now reads x −6 to 9, y −8 to 6, as scene 11 and g06 already did. A1's narration now says "the intercepts", matching its card (the review's practice note).
- Decision 4 (g06): key note 1 keeps "(x − a)² + (y − b)² = r²: centre (a, b), radius r". Open decision 1 is closed.
- Open decisions closed in each design: g01 (1, 3 by rulings 29 and 30; 2 by the review), g02 (1 by decision 1; 2 by the review), g03 (1 by ruling 30; 2 by the review), g04 (1 by ruling 33; 2 by the review), g05 (1 by decision 3; 2 by the review), g06 (1 by decision 4; 2 because `math-a11-s01.md` now opens on g06's unchanged final frame; 3 by ruling 34). The Revision 1 text is kept below each closing line for the record.
- Builder note from the g06 review: scene 4's tiles must show x² − 4x as a subtraction, using w15's convention for a negative term. This is now written into the scene 4 Visual.
- Reserve trims that would have cut a finding's new wording, or a causal sentence, were replaced. g01 no longer trims scene 5's domain sentence, and scene 2's "Everything happens three later" (t01's wording) is never trimmed. g02 no longer trims scene 5's last two sentences. g04 no longer trims scene 3's commuting reason. g05's new trim is the second key point, not the domain reason.
- New hand tags are added to each design's list ("inside"; "y → 3y: heights ÷ 3"; "question's order: follow it"; "the frame"; "stretch: they stay; slide: they move"; "level: count across").
- No em dash (U+2014) appears in any of the six designs (scripted check). Every bold cue is quoted in its scene's Visual in spoken order (scripted check, `work/brief-resolve-g/cues.py`).

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| g01 | 5,756 | 5,933 | about 536 s | about 441 s | 25 s, 24 s |
| g02 | 5,513 | 5,476 | about 497 s | about 406 s | 27 s, 28 s |
| g03 | 5,683 | 5,892 | about 530 s | about 437 s | 23 s, 26 s |
| g04 | 5,821 | 6,021 | about 540 s | about 447 s | 27 s, 27 s |
| g05 | 5,523 | 5,843 | about 529 s | about 434 s | 27 s, 27 s |
| g06 | 5,502 | 5,645 | about 510 s | about 419 s | 27 s, 29 s |

All six are under 570 s of speech, and all six are under 570 s with holds. Five are within 5,500 to 6,800 characters. g02 is 24 characters under the 5,500 planning floor after the hook cut and the feedback 2 trim. It is not padded, because the 5 to 10 minute target is still met. The longest single scenes are now g05 scene 2 (998 characters, about 75 s plus a 1.5 s settle), g04 scene 4 (900 characters, about 68 s) and g03 scene 4 (907 characters, about 68 s). Each has a named reserve trim. These are speech-only estimates; measure them on the Year 11 voice.

## Joins

- t16 → g01: unchanged on g01's side. t16 is still at Revision 1 in the working tree; if the parallel t-strand resolution changes t16 scene 12, g01 scene 1 must be checked against it.
- g01 → g02, g02 → g03, g04 → g05, g05 → g06: unchanged. Each final frame is still the next design's opening frame.
- g03 → g04: now exact, with the colours added in g03 (root's decision 2).
- g06 → s01: g06's final frame is unchanged, and `math-a11-s01.md` opens on it as written.

## For root

- g02's total (5,476 characters) is just under the 5,500 floor. I recommend accepting it unpadded, as ruling 35 does for the s strand.
- g05 scene 2 is about 75 s. It is one method stage with its own ledger and a mid-scene settle, and its reserve trim takes it to about 72 s. Accept, or ask for the trim before voicing.
- g02 feedback 2's slip line departs from the reviewer's text so that it matches the crossed card, which is part (a). Confirm this if you want the reviewer's reading instead. If so, the crossed card would have to move to part (b).

Nothing recorded; human listening pending.
