# Maths S12 r04 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r04.md`, "How does a map scale turn map distances into real distances?" Source SHA256 `46715639a4bbe1c43280ca5564c9962215d98dabddfcd8684299ca0f4c70cb59`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r01: a ratio uses one unit; Year 11 a01 cm, m, km; f04 speed) as a Mathematics Standard student starting Year 12, twice: as a Standard 2 student arriving from r03, and as a Standard 1 student arriving from r02 who has not seen r03. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good design. Scene 2 explains "no units" rather than asserting it (one centimetre for 25 000 centimetres, one millimetre for 25 000 millimetres, "it works in whatever unit you measure with"), the measuring string makes "a few centimetres" into a real 8.4 cm, and the unit ladder keeps each conversion step visible. The zoom test is a genuine video moment: the printed ratio becomes false while the bar stays true. A1's crossed slip (1.53 h read as 1 h 53 min) is the right one to cross because the multiply-or-divide slip is already crossed in the worked example. The Standard 1 path holds: nothing assumes r03. Recalculated with SymPy 1.14 (`work/brief-review-standard-r1/verify.py`, `python -I`): 8.4 × 25 000 = 210 000 cm = 2100 m = 2.1 km; 3.5 km = 350 000 cm, ÷ 25 000 = 14 cm; 50 000 ÷ 2 = 25 000; zoom × 2 gives 1 : 12 500; 7.5 × 100 000 = 750 000 cm = 7.5 km, 7.5 ÷ 18 × 60 = 25 min; 18.4 × 25 000 = 460 000 cm = 4.6 km, 4.6 ÷ 3 = 23/15 h = 92 min; 200 000 ÷ 4 = 50 000; 7.3 × 50 000 = 365 000 cm = 3.65 km. All correct.

## Findings

1. **Should fix, scene 4 (the crossed slip is not wrong, and contradicts scene 2).** The narration says "Dividing three point five by twenty-five thousand straight away is the slip. The units don't match", and the red slip reads "3.5 ÷ 25 000 = 0.00014" with the caption "km against cm: units must match". But 3.5 km ÷ 25 000 = 0.00014 km, which is exactly 14 cm (checked). Scene 2 has just taught that a scale "works in whatever unit you measure with", so dividing kilometres by n is correct and gives a map length in kilometres. The real slip is reading 0.00014 as centimetres. A careful student will notice the contradiction; a less careful one will learn a false rule. Fix. Narration: "Divide three point five by twenty-five thousand straight away, and you get zero point zero zero zero one four. That's not wrong, but it's in kilometres, a tiny number no ruler can show. Converting first gives the answer in centimetres, ready for the ruler." Visual: the slip row reads "3.5 ÷ 25 000 = 0.00014 km" in grey (not red), with a grey arrow "= 14 cm" and the tag "convert first: ruler-ready"; if a red crossed item is wanted, cross "0.00014 cm" (caption "that's kilometres, not centimetres"). The cause chain item (4) in the design should say "convert first so the answer is in the ruler's unit", not "must". Students should understand that the scale works in any unit, and that converting first is a choice that makes the answer usable. About 4 s more than the current two sentences.

2. **Optional, scene 5 ("Enlarge or photocopy the map").** A photocopy at 100 per cent keeps the ratio true. Say "Enlarge or shrink the map, on a photocopier or a screen, and that ratio is wrong."

3. **Optional, scene 5 (the "now 1 : 12 500" tag is unexplained).** The red tag appears with no spoken reason, and a student may wonder where 12 500 came from. Either drop the number (tag "no longer 1 : 25 000") or add: "Now each map centimetre stands for only half as much ground."

## Joins

r03 (and r02) to r04: scene 1 opens on the bushwalk map that both r02's right panel and r03's final frame show, and the hook re-asks the question in full, so the Standard 1 viewer loses nothing. r04 to r05 and r06a (two routes, ruling 50): the left panel (squared paper, "10 cm × 8 cm", a 3.6 m by 3.0 m room) and the right panel (the floor plan with the bench "3.6 cm" at 1 : 100, "$320 a metre") are each self-explanatory, and no value is worked out.

## Practice and feedback

Both cards keep the full worded question on screen through the countdown; A2's picture (a 4 cm bar marked "0 to 2 km") is the question's own given, not an answer. Each feedback gives the answer, the reason, short working and one crossed slip (about 28 s each). A bushwalk, a phone map and a ride between towns are fair, invented places; no prices, no gambling, no people drawn.

## Key notes and length

Five useful notes. Note 3 ("convert to the map's unit, then ÷ n") stays correct as advice after finding 1. About 494 s with holds, 76 s under the cap.

No speech, design edits, builds or commits were made.
