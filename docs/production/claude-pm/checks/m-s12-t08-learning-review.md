# Maths S12 t08 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t08.md`, "How does the cosine rule find a missing side or angle?" Source SHA256 `89852885034a537e6c2d3f652e537c206032aeacfbf2bbcaf85a6b428382675b`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t06 and t07: the sine rule needs a matched pair; Year 11 a06 Pythagoras; t02 inverse ratios and minutes; t07's half circle for sine) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This is a strong design. The hinge answers the brief's question of why the cosine rule corrects Pythagoras. At 90° the third side is Pythagoras's 300 m. Opening the hinge pushes the free ends apart, and closing it pulls them in. The c² bar crossing the a² + b² line exactly at 90° makes Pythagoras one frame of the cosine rule. "Still c squared" and "square root last" are said and crossed twice (scene 4 and A1). The angle form names the subtracted side as the one facing the angle. "No 180° step" is stated against t07's habit. The paddock carries into t09. I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`): 90 000, 300, 86 400, 216.333 and 364.966; cos 110° −0.342020, 29 550.54, 119 550.54, 345.76; 185, 120.0317, 64.9683, 8.0603 (and the spoken-only slip 6.14); −39/126, 108.0305° (108°2'), slip 71°58'; A1 −8.7462, 24.1162, 4.9108 km, 4910 m; A2 602.4176/640 = 0.941278, 19°44'; memory case 7. All correct.

## Findings

1. **Should fix, scenes 3 and 5 (a negative cosine is asserted, not explained).** Scene 3 says "Cosine of a hundred and ten degrees is negative, about minus zero point three four." Scene 5 says "A negative cosine means the angle is obtuse". Both claims carry the lesson's main cause (the correction adds, and inverse cosine returns obtuse angles directly), but students have only met cosine as adjacent ÷ hypotenuse for acute angles. Fix (about 12 s, of a 52 s margin). Reuse t07's half circle (with t07 finding 1 applied, it has a one-metre arm). In scene 3 say: "Remember the half circle from last time. The arm's height is the sine. How far it reaches sideways is the cosine. Past ninety degrees, the arm reaches back the other way, so the cosine is negative. At a hundred and ten degrees it's minus zero point three four two, the same size as cosine seventy, but backwards." Visual: the t07 half circle as a 360 px inset, with the arm at 110°, its sideways reach drawn blue to the left of centre and labelled "cos 110° ≈ −0.342". In scene 5 add: "Every sideways reach belongs to just one angle, so inverse cosine has no choice to make." Students should understand why an obtuse angle makes the correction add, and why there is no 180° step.

2. **Should fix, scene 6 and key note 5 (the "which rule?" sentence is not true as said).** "If you can't [see a matched pair], you'll have two sides and the angle between them, or all three sides." A student given two angles and a side that is not opposite either of them (t06 scene 6, and t11's tower) has neither. Fix: "If you can see a matched pair, or two angles, so the third angle makes one, use the sine rule. Otherwise, you'll have two sides and the angle between them, or all three sides." Add "(or two angles: the third makes a pair)" under the left row of the chooser card. This matches t11 finding 1.

3. **Optional, scene 4 (a rounded cosine on screen).** The row "= 185 − 176 × 0.682" shows a cosine rounded to three places, one video after t07 said to keep the full value. Write "= 185 − 176 × cos 47°", then "= 185 − 120.03". The result is unchanged.

## Joins

- **t07 to t08:** scene 1 opens on t07's final frame exactly.
- **t08 to t09:** scene 12 matches the decisions file's t08 final frame and t09's Boundary (third fence solid teal "≈ 346 m", pale blue fill, rose "? m²", spray drum outline with "spray: measured per hectare", the three chips).

## Practice and feedback

Both cards keep the full worded question and their pictures through the 10 s countdown, with the third side and the angle shown as "?". Feedbacks give the rule choice, the working and one crossed slip (d still squared; the wrong side subtracted), at about 28 s and 30 s. Walking tracks and a soccer goal are fair everyday anchors. The 7.32 m goal width is the regulation width (IFAB Law 1), which Codex confirms.

## Key notes and length

The notes are good. Note 5 uses "SSS", which the chooser card shows after the words. With finding 2, add "or two angles" there. About 518 s; findings 1 and 2 add about 16 s, so about 534 s.

No speech, design edits, builds or commits were made.
