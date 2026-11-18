# Maths S12 r06a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r06a.md`, "How do building plans let us estimate materials and costs?" (floors and flooring). Source SHA256 `4e944965fdd182a1fb489428e4bfbe0fb6ede4a69b3850914969b12837a41448`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r04: plan × n = real; Year 11 rectangle areas, m², percentages) as a Mathematics Standard student starting Year 12, twice: as a Standard 2 student arriving from r05, and as a Standard 1 student arriving from r04 who has not seen r05. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 3 optional).

A good design that answers its hook in the first minute ($1152) and then uses that answer to set up "per metre needs a length". "The price's unit decides" is a clean, reusable rule, the box stacker makes "round up, not nearest" visible on 3.3 boxes, and the worked example's comparison is the syllabus's "compare" done with real-range prices. The Standard 1 path holds: scene 1 recalls r04 only, and scene 5 re-explains 1 : 50 ("each centimetre is fifty real centimetres") rather than assuming r05. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 3.6 × 320 = 1152; 4.4 × 3.0 = 13.2 m², × 40 = 528, 13.2 cm² × 100 = 1320 cm² = 0.132 m²; 2.4 × 1.8 = 4.32, × 1.1 = 4.752, ÷ 1.44 = 3.3, 4 boxes, $380; 18.2 m², $819, $1547, $728; A1 5.6 m², 6.16, 4.278, 5 boxes, $475; A2 21 m², $798, 22.05, 10.023, 11 boxes, $1089, $291. All correct. The $95 box is about $65.97 a square metre and the vinyl about $45 a square metre, both plausible.

## Findings

1. **Should fix, scene 3 (why scaling the area once fails is not said clearly).** "The area grows a hundred times in each direction, so scale the sides, not the area" is muddled: it is each side that grows a hundred times, and the area grows a hundred times a hundred. This is the cause the scene exists to give, and the doormat picture alone shows that the answer is too small, not why. Fix, narration replacing that sentence: "Each side grows a hundred times. So the area grows a hundred times across, and a hundred times again down, ten thousand times. Multiplying by a hundred only once leaves the floor far too small. So scale the sides first." Visual: on "a hundred times across" the 13.2 cm² rectangle stretches × 100 horizontally into a long thin strip on the grid; on "down" it stretches × 100 vertically and fills the 13.2 m² floor; row "× 100 × 100 = × 10 000". Students should understand that an area is two lengths multiplied, so both must be scaled. About 6 s.

2. **Should fix, scenes 1, 4 and attempt 2 (ruling 51: label each unsourced price).** Ruling 51 (made after this design) requires an "example price" label on screen for the benchtop ($320 a metre), the carpet ($40 and $38 a square metre) and the vinyl ($99 a box). The design has one grey chip in scene 4 only. Fix: add a small grey "example price" tag beside "$320 a metre" in scene 1 (and on r04's and r05's final frames, where the same chip appears), beside "$40/m²" in scene 4, and on A2's card beside "$38/m²" and "$99 a box" (outside the question text, so the card's wording is unchanged). Codex confirms or replaces the values in the maths check.

3. **Optional, scene 3 (the doormat).** 1320 cm² is about a 36 cm square, smaller than most doormats. Say "smaller than a doormat" and keep the tag "a doormat?".

4. **Optional, attempt 2 (carpet "laid", vinyl not).** The carpet price includes laying and the vinyl price is supply only, so the comparison is not like for like, and a thoughtful student may say so. Either drop "laid" from the carpet, or add "you lay the vinyl yourself" to option B on the card and in the narration. No number changes.

5. **Optional, scene 2 (two symbols are named and never used).** The sliding door and the north point are listed and then not needed. Give each a one-phrase use as it lights: "an arrow marked N points north, so you can tell which rooms get the afternoon sun", and "a sliding door, which needs no room to swing". About 4 s, and it meets the review note's "named with a use, not as a list".

## Joins

r05 (and r04) to r06a: scene 1 opens on the floor plan that both r04's right panel and r05's final frame show; the hook re-states the question in full. r06a to r06b: scene 12 matches r06b's stated opening frame (the paint tin "4 L", the bedroom plan 3.8 cm by 3.2 cm with a door and a window, "ceiling height 2.4 m"), with no value worked out.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown and show nothing answer-bearing. A1 transfers the box method to a case (4.28) that is not near a whole number in the same way as 3.3, and A2 adds a comparison with a box count just over ten. Each feedback gives the answer, short working and one crossed slip (about 27 s and 29 s); feedback 2's "Buying ten boxes is the slip" has its reason only in the caption, which is acceptable. Tile prices are sourced and dated; the narration says once that prices change. No gambling, no people drawn.

## Key notes and length

Five useful notes. About 523 s with holds, 47 s under the cap; findings 1 and 5 add about 10 s.

No speech, design edits, builds or commits were made.
