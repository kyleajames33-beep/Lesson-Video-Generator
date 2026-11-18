# Maths S12 t09 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t09.md`, "How does A = ½ab sin C find the area of any triangle?" Source SHA256 `b90ee46f5fd043dc2a5021417859372461e4f27e209add5283534c0ef961bd6c`.

I reviewed the written design (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 a05: ½ × base × height; t01a: opposite = hypotenuse × sine; t08: included angle and the cosine rule; Year 11 a03: 1 ha = 10 000 m²) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed. Price checks used web listings seen on 18 November 2026; no store or label was opened in full. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 0 optional).

This is a good, focused design. Scene 2 explains why the area is ½ab sin C. The height nobody measured is the opposite side of a right-angled triangle whose hypotenuse is b, so it is b sin C. Scene 2 then says why the angle must be between a and b. The area hinge makes the sense check felt: the bar tops out at ½ab at 90°, and 70° and 110° give equal areas. The block of land shows "angle first, by the cosine rule" as the bridge to t10, and every slip is crossed with its reason. Hectares get a plain meaning. At 460 s the video is short without being thin (ruling 61). I recalculated every value with SymPy 1.14 (`work/brief-review-standard-t2/verify.py`): 21 600, 20 297.36, 2.0297 ha, 4.06 L; 10 800, 18 706.15, 20 297.36; 56.1334; −775/5400, 98.2515° (98°15'), 1336.02, slip 1781.37; 12.5539, $477.05, $476.90, 25.1079; −11/176, 93°35', 43.914, slip 55.89; memory case 17.5. All correct except one screen value (finding 3).

## Findings

1. **Should fix, scenes 2 to 4 (the derivation's picture does not hold for the paddock's 110°).** Scene 2 says the dropped height makes "a right-angled triangle, with the other fence, side b, as its hypotenuse, and the angle C at its corner". That is true only when C is acute. In the paddock (110°), the height from the end of the 180 m fence lands about 61.6 m beyond the corner, outside side a, and the angle inside that right-angled triangle is 70°, not 110°. A student who drops the height on the paddock in scene 3 sees the formula's picture fail, and "sine 110 is positive, so use it as it is" does not answer "but C isn't in that triangle". Fix:
   - (a) In scene 2, draw the teaching triangle with C acute (about 70°) and say nothing about obtuse angles.
   - (b) In scene 4, when the hinge passes 90°, keep the dashed height drawn. It falls outside side a, and the 70° angle outside lights. Say: "Past ninety degrees, the height falls outside, at seventy degrees on the other side. It's the same height as at seventy degrees, and sine a hundred and ten equals sine seventy, so the rule still works."
   - (c) In scene 3, the sentence "The angle is obtuse, but sine a hundred and ten degrees is positive, so use it just as it is" can stay as the instruction.

   About 8 s, against a 110 s margin. Students should understand why an obtuse included angle is used as it is, not just be told.

2. **Should fix, attempt 1 (the example fabric price is far from real prices).** The design gives no dated source for $38 a square metre (ruling 61 leaves it to Codex). Listings seen on 18 November 2026 put finished retail shade sails at roughly $3 to $6 a square metre (Wallaroo, Instahut and Simpledeals listings). Shade cloth sold by the metre works out at roughly $8.60 to $12 a square metre (Bunnings, Coolaroo 3.66 m wide at $31.48 a metre and 1.83 m wide at $22.48 a metre). $38 is about three times the cloth price. Fix: use $12 a square metre, labelled "example price". The answer becomes 12.5539 × 12 = $150.65, and rounding first gives $150.60, so the "use the unrounded area" point survives (`work/brief-review-standard-t2/suggested.py`). Codex records a dated NSW source in the maths check (ruling 51 pattern). The spray rate is fair. APVMA labels for 450 g/L glyphosate give fallow rates of about 1 to 2.4 L a hectare, so 2 L a hectare sits inside that range. Codex names one label and its date.

3. **Should fix, scene 5 (a screen value is wrongly rounded).** The row "= 1350 × 0.9897" is wrong: sin 98.2515° = 0.98965, which rounds to 0.9896 at four places. The answer (1336 m²) is unchanged. Write "= 1350 × sin 98.25°" (the unrounded value, as the scene's own "keep C unrounded" says), or "1350 × 0.9896".

## Joins

- **t08 to t09:** scene 1 opens on t08's final frame exactly.
- **t09 to t10 (ruling 43):** scene 11 brings back r07's scene 7 sketch as r07 describes it: a point inside a five-sided block and five rays with blank distance and bearing boxes. r07's grey chip "radial survey: in Trigonometry" redraws green. The narration matches r07's sentence ("the distance and direction from one point out to each corner of the land") and says correctly that it came from the ratios and rates videos. t10's Boundary matches this frame.

## Practice and feedback

Both cards keep the full worded question with its parts, and the "example price" label, on screen through the 10 s countdown. Pictures are not to scale and show no answer. Feedbacks give the answer, the reason (the angle between the two sides used), short working and one crossed slip (no half; a non-included side), at about 26 s and 27 s. Dropping A2's turf cost (ruling 61) is fine, because A1 practises a cost.

## Key notes and length

The notes are useful. Note 4 puts the 90° maximum and hectares on one line, which is acceptable. About 460 s; finding 1 adds about 8 s.

No speech, design edits, builds or commits were made.

Sources (price checks, 18 Nov 2026): [Bunnings Coolaroo 3.66 m shade cloth](https://www.bunnings.com.au/coolaroo-3-66m-wide-rainforest-heavy-duty-screening-shade-cloth-70-uv-block-p-mtr_p3300420), [Bunnings Coolaroo 1.83 m shade cloth](https://www.bunnings.com.au/coolaroo-1-83m-wide-natural-weatherproof-shade-cloth-per-metre_p3300257), [Wallaroo 3 m sail](https://a2zmart.com.au/products/wallaroo-square-shade-sail-3m-x-3m-sand), [Simpledeals shade sails](https://www.simpledeals.com.au/collections/home-garden-shading), [APVMA glyphosate 450 label example](https://elabels.apvma.gov.au/63762ELBL.pdf).
