# Maths S12 r14 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r14.md`, "How do watts, kilowatts and kilowatt hours set the cost of running an appliance?" Source SHA256 `55eea8a483c7ac58b177e234c5a412ccf281f53e42dd9f950447f831444ef763`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r10: minutes to hours; r09 and r11: price per unit; Year 11 Standard a04: kilo- = 1000; r12a: speed and distance, as an analogy) as a Mathematics Standard 2 student starting Year 12. Standard 2 only, so no Standard 1 trace. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

This is a good design. The hook ("Your power bill doesn't charge for appliances. It charges for something called kilowatt hours.") sets up the main question honestly, and "watts: how fast, kilowatt hours: how much" is carried by the needle and the growing pile, with the speed and distance analogy from r12a. The thousand-times slip has a visible tower, the phone at about 1 cent a charge is a real surprise, and the two heaters show why a lower power can cost more. One price is used throughout with a dated source on screen and said once to change (rulings 47 and 52; MS-40). Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): 2.4 kW, 12 kWh, $3.96, slip 12 000; phone 0.02 kW, 0.03 kWh, 0.99c, × 120; kettle 0.05 h, 0.12 kWh, 3.96c, 1445.4c a year ($14.45), slip 7.2 kWh; heaters 360 and 378 kWh, $118.80 and $124.74, $5.94; A1 at 0.16 kW, 0.56 kWh, 3.92 kWh, $1.2936 ($1.29), slip 560; A2 at 264 and 96 kWh, $55.44 (also $87.12 − $31.68), slip $1.848 ($1.85); the memory-aid hair dryer, 0.25 kWh, about 8c. All correct.

## Findings

1. **Should fix, scene 3 (why kilowatts times hours gives kilowatt hours).** The scene says "Energy is power times time", defines a kilowatt hour ("the energy a one kilowatt appliance uses in one hour"), then jumps to "two point four kilowatts times five hours, twelve kilowatt hours". The link a Standard student needs between the definition and the multiplication is missing: in one hour a 2.4 kW heater uses 2.4 kWh, and five hours is five times that. The pile shows "2.4 blocks an hour", but no sentence says it. Fix, before "So if the heater runs for five hours": "So in one hour the heater uses two point four kilowatt hours, and in five hours, five times as much. The name says it: kilowatts times hours." Screen: on "one hour" the pile's first 2.4 blocks ring, "1 h: 2.4 kWh", then the clock runs. Students should be able to explain kWh = kW × h by counting hours, the same way r13 counted hundreds of kilometres, and should not say "kilowatts per hour". Time: about 11 s; about 494 s afterwards.

2. **Optional, scene 6 (the rectangles' area is never said).** The power-time rectangles and the hand tag "bigger area, more energy" carry the visual surprise, but no sentence says that the area is the energy, and a Standard student may not see why. Either add one sentence on "days" (first bold): "Think of each heater as a rectangle, power up and hours along. Its area is the energy." (about 6 s), or keep the rectangles as a quiet picture and drop the "area" hand tag, leaving "lower power, longer time".

3. **Optional, scene 4 (the price sentence).** "On a standard plan in Sydney, it's about thirty-three cents" is fine, but the bill line's source is a default market offer for the Ausgrid area, which is not all of Sydney. If the maths check confirms the figure, consider "On a standard plan in much of Sydney" or keep the wording and leave the area to the on-screen source line. The GST treatment of 33.14c is Codex's check (decisions file section 7), not a learning issue.

## Joins

r13 to r14 matches: r14 opens on r13's two-route frame and fades the Standard 1 panel on the first sentence; the left panel's "which costs more to run?" is answered by scene 4. r14 to t01 (ruling 45): the final frame is r13's right panel at full width (the house, the amber roof triangle, "35°", "?", "not to scale", "Ratios and rates: done"), so Standard 1 and Standard 2 viewers reach t01 on one picture. math-s12-t01 is not designed yet; the join is confirmed only when t01 opens on this frame, and ruling 53 lets t01 change the angle label in both r13 and r14.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's picture is a coded "160 W" label and power board, and A2's shows the two appliances with their kW labels only. Each feedback gives the answer, the reason, short working and one crossed slip (about 27 s and 31 s). A2's new numbers (ruling 52) avoid repeating the worked example's 360 kWh, and "draws" avoids presenting 0.8 kW as a product rating.

## Key notes and length

Five useful notes; note 2 ("Never multiply watts by hours for kWh") and note 5 (lower power can cost more) are the two ideas students most need. About 483 s with holds; finding 1 brings it to about 494 s.

No speech, design edits, builds or commits were made.
