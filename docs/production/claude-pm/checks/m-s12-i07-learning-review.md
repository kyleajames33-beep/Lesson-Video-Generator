# Maths S12 i07 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i07.md`, "What does it really cost to buy shares once brokerage is added?" Source SHA256 `e8830aeb7cc76777922854b72a36f7eb8667746e7d95197101e6bf328510625a`.

Written design reviewed (narration, visual descriptions, order ticket, graph, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i06a: shares and the price now; Year 11 Standard m01, m02, m05: percentages of amounts, buying costs) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

The design does what the syllabus point needs and explains why brokerage changes the true cost. The order ticket fills one row at a time (trade value, then brokerage, then total) with each term's meaning said first, and "the price on the screen isn't the whole cost" is the crossed slip. The same amber $19.95 block as a sliver against $6,200 and a slice against $500 is a real visual reason, and "selling costs a second fee" is one honest beat. "Work out both, then pay the larger" is said before the arithmetic, "zero point one one per cent is zero point zero zero one one" is shown as a division by 100, and the switch value comes from "they cost the same where zero point one per cent of the trade is twenty-nine ninety-five" before the division, with a rider and the thick "you pay" path on the graph. Open decisions: key note 5 stays (ruling 37), and the one sentence on bands is right. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): $6,200.00, $6,219.95, 0.32%; 3.99%, $480.05, 7.98% ((500 + 39.90) ÷ 500 = 1.0798); $42,300, $46.53, $42,346.53 and the slip $4,653; switch $29,950 with $10 and $50 at $10,000 and $50,000; A1 $10,080.00, $12.10, $10,109.95; A2 $31,200, $34.32, $31,234.32, $18,136.36 and the slip $181.36. All correct.

## Findings

1. **Should fix, scenes 1 and 3 (the small-trade cost is not fair to current fees).** Scene 3 says a $500 parcel's fee "is about four per cent of your money" and the price must rise "about eight per cent, just to cover the two fees", and scene 1 says brokerage "can eat up months of gains". The design's own dated source (CommSec, read 18 Nov 2026) charges $5 on trades up to $1,000, so a $500 parcel costs 1% to buy and about 2% for the round trip at that broker. The point (a fixed fee is a bigger share of a small trade) is right; the 4% and 8% are this example's fee, not a general cost of buying shares, and a student could take them as one (ruling 32: fair anchors). Fix. Scene 3, start: "With this broker's flat fee, nineteen ninety-five, ..." and after "cover the two fees": "Some brokers charge less on small trades, but any fixed fee is a bigger share of a small trade." Visual: a grey chip, 30 px, "some brokers: lower fees on small trades (e.g. $5 up to $1,000, read 18 Nov 2026)". Scene 1: "it can eat into your gains" in place of "eat up months of gains". Students should take away the proportional idea without an inflated real-world cost. Time: about 6 s against a 105 s margin.

2. **Optional, scene 3 (why eight, not four).** "So on that five-hundred-dollar parcel, the price has to rise about eight per cent, just to cover the two fees." The row on screen says "$39.90 ÷ $500", but the narration never says that the two fees together are $39.90. Add "two fees make thirty-nine dollars ninety, about eight per cent of five hundred".

3. **Optional, feedback 2 (length).** Feedback 2 is 406 characters, about 30.5 s by estimate, just over the 30 s guide, and the design names no trim. Name one: "the larger" after "thirty-four dollars thirty-two" (the screen's "> $19.95" carries it).

4. **Optional, scene 4 (a long single board).** Scene 4 is about 56 s of speech on one board (742 characters). Each step is needed, so keep it, but give the "work out both" hand tag its own cue at "work out both", and let the two amber bars appear on "That's more than twenty-nine ninety-five" rather than on the last "three", so the comparison is on screen while it is said.

## Joins

i06b to i07 matches: scene 1 opens on the full coin jar ("savings") and the order ticket with its three "?" rows, which fill in scenes 2 and 4. i07 to i08 matches the decisions file: i05's right panel full-frame (the coin jar, the term deposit certificate, the share row with its grey "Standard 2" chip, the investment unit), with no returns or costs shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's blank ticket and A2's empty axes give nothing away. Feedback 1 (about 28 s) works out both figures, takes the larger and crosses the smaller (site Trap 02); feedback 2 gives both parts and crosses 0.11 for 0.11%. Savings from casual work and a tradie's investment are real, fair anchors; no broker is named on screen, "fees vary between brokers, and they change" is said once, and no gambling language appears.

## Key notes and length

The five notes are short and useful; the memory card's assumptions (buying only, percentage on the trade value) hold. About 465 s with holds, 105 s under the cap.

No speech, design edits, builds or commits were made.
