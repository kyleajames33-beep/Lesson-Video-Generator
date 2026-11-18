# Maths S12 t06 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t06.md`, "How does the sine rule find a missing side in any triangle?" Source SHA256 `eb690ffb137d7cb18cdd7fd4e155c1ccc084855bb180fdcafad2377c3b6d4e16`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01a and t01b: sine of an acute angle in a right-angled triangle; Stage 4 angle sum; Year 11 f03 changing the subject) as a Mathematics Standard 2 student starting Year 12. I also checked the join against t05's final frame as `lessons/math-s12-t05.md` scene 12 and `checks/root-decisions-maths-s12-t01-t05.md` section 3 now describe it. No built preview, plate inspection, playback or human listening is claimed. Pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

This is a good design. Pair colours with arrows across the triangle make "opposite" something a student can point at. The ratio meter gives the rule as an observation before it is a formula. Scene 4 then gives the cause in about 25 s: one height, written two ways, is b sin A and a sin B. Each step is its own stage: the pair, then unknown on top, then third angle first, then the river. The river slip (500 m paired with the 85° beside it) is the classic error, and the check "bigger angle, bigger side" is said on a real case. The opening question ("how far is the tree from Q") is answered with the full method in scene 7. I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`, `python -I`): 18.6687, 18.0326, 11.591, 67°, 17.1213, 35°, 754.93, 434.67, 868.41, 48°, 36.5172, 36.2720, 95°, 7.3821, 5.5274, 12.8214 and the memory-aid case 14.14. All correct.

## Findings

1. **Should fix, scene 1 (the opening is still provisional and differs from t05's final frame).** t05 now exists, and ruling 61 says to fix this join in the resolution. Scene 1 and the Boundary must copy t05 scene 12's left panel exactly. Every difference I found:
   - (a) The plate is `ms12-river-crossing-top-v1.png` (t05's brief), not `ms12-river-tree-top-v1.png`. Change it in Boundary, Decisions, Assets and the Codex asset brief.
   - (b) The sight lines PR and QR are **dotted** ink in t05, not dashed. Scene 1's "the dashed line from Q to the tree turns rose" becomes "the dotted line".
   - (c) The arcs "60°" at P and "85°" at Q are **blue** in t05 (40 px). Scene 1 should open with them blue. If t06 wants pair colours later, recolour them on a stated cue.
   - (d) The label reads "Standard 2 next: the sine rule" in t05, not "Standard 2: next, the sine rule".
   - (e) The right panel is not described in t06. t05's right panel has the kiosk plate `ms12-beach-kiosk-v1.png`, the board with headings "top temperature (°C)" and "ice creams sold" and five empty rows, the chip "hotter day, more ice creams?", the grey chip "Right-angled triangles: done" and the label "Standard 1 next: bivariate data". Name them all in the frame description that fades on the first sentence.
   - (f) t05 has 30 px grey panel tags, "Standard 2" (left) and "Standard 1" (right). t06 does not mention them. Fade both with the right panel, or keep "Standard 2" and say so.
   - (g) t05 shows the chips "Next" and "?" at the bottom right. t06 does not say what happens to them. Fade "Next" on the first sentence, as t07 to t11 do.
   - (h) Geometry: in t05, P and Q are 300 px apart and R is 260 px right of P and 451 px above it, on a 900 px plate. When the river grows to about 1,400 px, scale every coded point by the same factor (about 1.56), with no stretch. The Codex asset brief's 4 px check should name these positions.
   - (i) Remove "provisional" from Status, Boundary and open decision 1, and remove "(once t05 is designed)" from Codex error-check item 5.

   The numbers already match (500 m, 60°, 85°, no value at R). Students should see one unbroken river from t05's last frame to t06's first.

2. **Should fix, scenes 11 and 12 (attempt 2 needs the sine of an obtuse angle that has not been taught).** The roof truss has an apex of 95°, and the working divides by sine 95°. Students know sine only as opposite ÷ hypotenuse in a right-angled triangle, and no angle in a right-angled triangle can be 95°. A careful student will ask "how can 95° have a sine?" during the countdown, which is the wrong question to spend it on. t07 scene 4 answers this question, so do not anticipate it here. Fix: use rafters at 35° and 60° (this keeps the t01 roof callback). The apex is then 85°, and the base faces it. The longer rafter faces 60°: 9.6 sin 60° ÷ sin 85° = 8.35 m. The crossed slip is "9.6 × sin 60° ÷ sin 35° = 14.49 m". The shorter rafter is 5.53 m (checked in `work/brief-review-standard-t2/suggested.py`). Also keep the ratio meter's sliding corner on a path where all three angles stay under 90° (scene 3). Students should meet every sine in t06 as a sine they already understand.

3. **Optional, scene 5 ("then multiply across").** "Multiply across" names no operation. Say "then multiply both sides by sine seventy-five degrees". The row already shows it.

## Joins

- **t05 to t06:** see finding 1. Nine differences in the frame description. The spoken lead-in matches: t05 says "next we find a distance across a river, in a triangle with no right angle at all", and t06 opens "Here's the river from the end of the last video". Open decision 3 (ask for QR, not the river's width) is right, because t05's word "across" could suggest a perpendicular width. t06's "How far is the tree from Q?" settles it.
- **t06 to t07:** scene 13 matches the decisions file's t06 final frame and t07's Boundary exactly (the sail plate with "not to scale", PQ 4.6 m violet, QR 5.8 m amber, P 47° amber, R "?" rose, the three chips).

## Practice and feedback

Both cards keep the full worded question and the picture on screen through the 10 s countdown, and neither shows an answer. Each feedback gives the answer, the reason (the pair), short working and one crossed slip: about 29 s and 30 s. A corner block and a roof truss are fair everyday anchors.

## Key notes and length

The five notes are short and useful. Note 5 combines the third angle and the check on one line, which is acceptable. About 474 s. Finding 2 changes numbers only and adds no time.

No speech, design edits, builds or commits were made.
