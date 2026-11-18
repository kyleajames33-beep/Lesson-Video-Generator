# Maths S12 r07 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r07.md`, "How does the trapezoidal rule find an area of land from a plan, photo or survey?" Source SHA256 `e8b29c20c59ad38c6607714ff11fa38a6d3d262b11924f74b6073d85e07c538f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 a11 trapezoidal rule, a07 irregular areas; r04 plan × n = real) as a Standard 2 student starting Year 12. Standard 2 only. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

A strong design for the longest video in the strand. "Ends once, middles twice" is caused by the picture (the middle offset lights once for each trapezium it belongs to before "× 2" is written), "h, the strip width" is said every time h is used, and "Thirty metres split into three strips is ten each" with three brackets on the fence makes "h is the spacing, not the total" visible; the slip is then crossed twice (the dam and A1). The gap shading ("missed here", "extra here") gives the reason the answer is an estimate, and the photo beside the plan shows that a site plan and an aerial photo are two views of one block. The radial survey is one sentence, as ruling 43 requires. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 8/2 × 28 = 112; 6/2 × (10 + 28 + 12) = 150 = 72 + 78; block offsets 18, 22, 20, 15 m, 30 m, h = 10, 5 × 117 = 585 m² (one strip only would give 495); fencing 63 m, $7560; dam 21, 34, 25 m, 15 × 114 = 1710 m² (h = 60 would give 3420); A1 h = 6, 8, 10, 9, 7 m, 3 × 53 = 159 m², slip 477; A2 h = 60, 50, 62, 56 m, 30 × 230 = 6900 m², fencing 226 m, slip 5040; rain on the dam 1710 × 0.025 = 42.75 m³ (not stated). All correct.

## Findings

1. **Should fix, scene 2 (the link between "average width" and the formula is skipped).** The narration says "its area is its average width times its length", then goes straight to "eight over two, times twelve plus sixteen". A Standard student who does not see that (12 + 16) ÷ 2 is the average width, and that "h over two times the sum" is the same calculation rearranged, learns the formula as a string of symbols, and the later "times h over two" has no meaning. Fix, narration replacing the worked sentence: "If the offsets are twelve and sixteen metres, the average width is twelve plus sixteen, divided by two, fourteen metres. The strip is eight metres long, so the area is fourteen times eight, a hundred and twelve square metres. Halving the sum and then multiplying by eight is the same as eight over two, times twelve plus sixteen." Visual: rows "(12 + 16) ÷ 2 = 14 m: the average width", "14 × 8 = 112 m²", then "= 8/2 × (12 + 16)" with an arc joining the two forms; the "h" label sits along the strip's length. Students should understand that the rule averages the two offsets because a trapezium's area is its average width times its length. About 8 s more than the current sentence.

2. **Optional, scene 6 (the perimeter is defined, then only the fences are added).** "The same plan gives the perimeter, the distance around the boundary" is followed by 63 m for the three straight sides, which a student may take as the block's perimeter. Add a half-sentence: "The creek is part of the perimeter too, but it isn't being fenced, so we only need the straight sides." About 4 s, or put it on the existing "creek: no fence" tag as "creek: on the perimeter, not fenced".

## Length

About 558 s with holds, 12 s under the cap (accepted by ruling 50). Finding 1 adds about 8 s. Take one named reserve trim with it: scene 7's half-sentence "or a map" and its map panel (A2 still covers maps), or scene 5's last sentence (the more-offsets demonstration carries it). Keep scene 2's worked line, since finding 1 rebuilds it. Measure on the voiced take.

## Joins

r06b to r07: scene 1 opens on r06b's two-route frame and fades the right panel. r07 to r08: scene 14 matches the decisions file's "r07 final frame" and r08's stated boundary (`lessons/math-s12-r08.md`): the dam plate with its faint offsets, "surface ≈ 1,710 m²", the rain gauge at 25 mm, no volume worked out.

## Practice and feedback

Both cards keep the full worded question on screen, with their plans as pictures, through the countdown; the plans show the given plan lengths only. A1 tests scaling and h; A2 adds a map and a perimeter. Each feedback gives the answer, short working and one crossed slip (about 27 s and 28 s). A house block, a farm dam, a lawn and a paddock are fair anchors; the fencing price is a dated example within two cited NSW ranges; no gambling, no people drawn.

## Key notes and length

Five useful notes; note 3 states h both ways (spacing, and total ÷ number of strips).

No speech, design edits, builds or commits were made.
