# Maths S12 i02a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i02a.md`, "How does compound interest earn interest on interest?" Source SHA256 `d8a061bf77f0c032e0d9e071c30a13c02dc80b5b3905caaee38242640c40a5e4`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i01: simple interest paid out; Year 11 Standard m01 and f01: a 5% increase multiplies by 1.05, calculator powers) as a Mathematics Standard student starting Year 12, Standard 1 and Standard 2 alike. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The central idea lands well. Scene 1 answers i01's chip with i01's own fund ("two hundred and eight dollars, not two hundred ... interest, earned on last year's interest"), so "interest on interest" is a concrete $8 before it is a phrase; the birthday table says each year's percentage of each year's balance; "a hundred per cent plus five per cent" comes before 1.05; and the three arrows sliding into "× 1.05³" is a real visual reason for the power. FV − PV is tied to "FV is the whole balance", and A2 crosses the site's Trap 02. Open decision 2: the two anchors do not crowd; scene 1 stays on i01's frame and the envelope arrives with a clear stage change. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`, exact rationals rounded half up to the cent): 5,200, 208 and 8; 2,000, 2,100, 2,205, 2,315.25; interest 100, 105, 110.25; simple 300, extra 15.25; 1.05⁶ = 1.340095640625; 4000 × 1.05⁶ = 5,360.3825625, so $5,360.38 and $1,360.38; slip 25,200; A1 $3,716.47 and $716.47, slip $0.03; A2 $1,495.42, $295.42, simple $270 and $25.42 (the same from the unrounded difference). All correct.

## Findings

1. **Should fix, scene 4 (1.05 never becomes 1 + r).** Scene 3 builds "one point zero five" from 100% + 5%, then scene 4 says "FV equals PV times one plus r" and "r is the rate per period as a decimal" without saying that the one is the hundred per cent and r is the five per cent. A student who just learned "times 1.05" sees a new "1 + r" and may plug in 1 + 5, or 1 + 1.05. The word "period" is also tagged on screen but never given its plain meaning aloud. Fix. Narration, after "the number of periods": "A period is the time between interest payments, a year here. And one plus r is our one point zero five: the one is the hundred per cent you keep, and r, zero point zero five, is the five per cent added." Visual: under the strip's "(1 + r)", a bracket "1 + 0.05 = 1.05" with "100%" under the 1 and "5%" under 0.05 (amber), hand tag "1.05 = 1 + r". Students should be able to turn any rate into its multiplier inside the formula. Time: about 10 s against a 103 s margin.

2. **Should fix, scenes 1 and 2 (the olive slivers are too thin to see).** The design's key picture is the olive sliver of interest on interest on each year's block. Drawn on the balance bar at one scale, $2,000 at about 600 px makes the $100 block about 30 px and the $5 sliver about 1.5 px; scene 1's $8 sliver on $5,200 is thinner still. The "interest on interest" tag would point at nothing. Fix. Keep the blocks joining the bar as written, but on "five" (scene 2) lift copies of the three interest blocks into a side column labelled "interest, zoomed in" at about 3 px a dollar, standing side by side: $100 (about 300 px), $105 and $110.25, with a dashed line at the $100 level so the olive parts above it (+$5, +$10.25, each labelled at 36 px) are visible. Scene 1 does the same for $200 against $208 (+$8). Students should see that each year's extra is the part above the first year's interest.

3. **Optional, scene 5 ("type it in one go").** The narration tells students to type it in one go and round at the end, but not why. Add "so no digits are lost along the way", and show a grey comparison "1.05⁶ rounded to 1.34: 4000 × 1.34 = $5360.00" crossed beside the framed $5,360.38 (a $0.38 difference).

4. **Optional, feedback 1 (the crossed slip).** "3000 × 0.055⁴" is a real slip but rare; the commoner one is writing 5.5% up as 1.55. Consider "3000 × 1.55⁴ ≈ $17 316.02" crossed (caption "5.5% is 0.055, so × 1.055"). Either works; keep one.

## Joins

i01 to i02a matches: scene 1 opens on i01's final frame ("$5,200?", the tipping jar, "next year: 4% of $5,200 = ?") and answers it in the second sentence. i02a to i02b matches the decisions file: the phone, the two-rung ladder "? now → × 1.05 → ? → × 1.05 → $1,500 in 2 years", "5% p.a., compounded annually", and no present value shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and the pictures (an account card, an empty ladder of "× ?") give nothing away. Feedback 1 (about 29 s) and feedback 2 (about 29 s) give the multiplier, the rounded answers, short working and one crossed slip each; A2's comparison with simple interest reuses i01 well. Birthday money and savings are real, fair anchors; "Rates change, so five per cent is just an example" is said once, and the Canstar, CommBank and RBA sources are dated (ruling 32).

## Key notes and length

The five notes are short and useful; note 2's "5% up is × 1.05" carries finding 1's link. About 467 s with holds, 103 s under the cap, so findings 1 to 3 fit with room.

No speech, design edits, builds or commits were made.
