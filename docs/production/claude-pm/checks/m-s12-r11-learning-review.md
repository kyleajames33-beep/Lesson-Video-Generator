# Maths S12 r11 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r11.md`, "Which pack is the best buy?" Source SHA256 `48988afd13a0cf7857dd887de860bcbc6c17a2d4a8946d44492d7e47c2580df4`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (r09: a unit rate, compare per one of the same unit; r10: converting units, L to mL) as a Mathematics Standard student starting Year 12, for both courses (the content is identical). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good design. The unit price is introduced as the r09 move it is ("find the price of one kilogram from each bag ... it's a rate in dollars per kilogram"), and the buying race shows why the unit price makes comparison fair: at 5 kg the small bag's rate costs $9.50 against $8.75. The handy unit is given a reason a student can repeat ("a hundred grams is a quarter of the small pack"), the olive oil shows the biggest bottle losing, and the best-buy scene is short and practical rather than preachy. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): $1.90 and $1.75 per kg, $9.50, 75c; 1.9c and 1.85c per g, $1.90 and $1.85 per 100 g; $1.72, $1.52 and $1.60 per 100 mL, 8c; $2.24 and $2.10 per litre; A1 at $2.60, $2.30 and $2.40; A2 at about 86c and 75c per GB and $15; the memory-aid milk, $1.55 and $1.65 per litre. All correct.

## Findings

1. **Should fix, scene 5 (the label-unit trap is shown but never said, and its number clashes).** The narration says "If one says per litre and the other says per hundred millilitres, convert one before you compare", but the visual brings in an unnamed third label, "$0.22 per 100 mL", turns it into "$2.20 per 1 L" with a "× 10" arrow, and no sentence says what it is or what it shows. A student will read $0.22 as a juice price, and if it is taken as the first juice, it clashes with that juice's $2.24 per litre just shown. This is the trap the scene exists for, so it should be heard. Fix: name it as a third juice and say the comparison. Narration, after "two dollars ten per litre": "Say a third juice shows twenty-two cents per hundred millilitres. That looks cheaper, but a litre is ten lots of a hundred millilitres, so it's two dollars twenty a litre, dearer than two dollars ten." Screen: the label reads "Juice C: $0.22 per 100 mL"; on "ten lots" the "× 10" arrow; "$2.20 per 1 L" beside the green "$2.10 per 1 L". Keep the general sentence as the rule after it. Students should understand that a smaller-looking unit price can be the dearer one when the units differ. Time: about 15 s; about 484 s afterwards. Add "$0.22 per 100 mL, Juice C" to "Numbers used".

2. **Optional, open decision 1 (shelf-label wording).** "Usually print the unit price" is safe. If Codex confirms that the Grocery Unit Pricing Code requires large grocery retailers to show unit prices, a stronger and still accurate line would be "big supermarkets have to show it", which tells students the number is always there to check. Root's call after the maths check (ruling 52).

## Joins

r10 to r11 matches (the flour plate on its shelf, the two tags, "which is better value?"; scene 1 answers it in scene 2). r11 to r12a: the hatchback, the trip card ("Sydney to Melbourne: 880 km", "100 km/h for the first 400 km", "a 45-minute stop", "90 km/h for the rest") and empty axes; no line is drawn.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's tags show sizes and prices only, with no unit-price line. Each feedback gives the answer, the reason, short working and one crossed slip (about 22 s and 31 s). A2 (c) carries the best-value against best-buy idea that A1 drops, so dropping A1 (c) (open decision 2) loses nothing. Every price carries the grey "example prices" tag, and the description says prices are examples (ruling 32 is met for unsourced example prices; no real retailer is named).

## Key notes and length

Five useful notes, one line each, in the order taught. About 469 s with holds; finding 1 brings it to about 484 s.

No speech, design edits, builds or commits were made.
