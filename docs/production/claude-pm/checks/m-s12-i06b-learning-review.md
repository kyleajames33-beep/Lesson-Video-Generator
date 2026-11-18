# Maths S12 i06b Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i06b.md`, "How do we graph and interpret a share's value over time?" Source SHA256 `e1e7bd2d6e9d179ace19f8a71cc04378bc9c7b953a00c5e597d51323804d4873`.

Written design reviewed (narration, visual descriptions, graphs, spreadsheet, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i06a: a share, two returns, risk; Year 11 Standard m01: percentage change; i05: a chart from spreadsheet columns) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The teaching is clear and well ordered. "Each line just connects two month-end prices. We don't know what the price did in between" is an honest and useful point, made with a fading dotted wiggle. "Saying it went up only describes the two ends" gives the reason for a full description, and the four-part card (trend, highest, lowest, falls) is something a student can reuse in an exam. "Percentage change is measured from where you started" anchors dividing by the first price, the holding's $375 is said to be a gain "only if you sold", and Kestrel's swings over the same ends turn risk into a picture (open decision 1: swings as risk is the right level for Standard 2). Open decision 2: leaving the drawing out of A1 is right; the feedback draws it. Risk is named once ("real share prices ... can fall"), with no gambling language (rulings 6 and 32). Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): Ridgeline's changes +0.35, −0.15, +0.50, +0.25, −0.20; 23.4375%, so 23.44%, slip 18.99%; the holding $1,600, $1,775, $1,700, $1,950, $2,075, $1,975 and the $375 gain; Kestrel's changes −0.50, +0.90, −0.70, +1.40, −0.35, range $2.70 to $4.30, month 4 −$0.30; A1 falls −0.30 and −0.25, 16.67%, slip 14.29%; A2 25% each, $2,500, Q below $2.00 twice. All correct.

## Findings

1. **Should fix, scene 2 (the axis break says $3, the axis says $2.50).** "Here the price axis starts at three dollars, so mark a break near the bottom", and the hand tag reads "break: axis starts at $3", but the drawn axis runs from $2.50 (needed for Kestrel's $2.70 in scene 6), as the visual note admits. A student who checks the bottom label sees $2.50 and hears $3, in the scene whose point is reading the axis correctly. Fix. Narration: "Here the price axis starts at two dollars fifty, not zero, so mark a break near the bottom, and nobody misreads it as starting at zero." Tag: "break: axis starts at $2.50". Nothing else changes. Students should be able to read a broken axis from its own labels.

2. **Optional, scene 5 (the percentage-change cell).** "Equals B seven minus B two, divided by B two, times a hundred" is read as cell names. Add "that's last minus first, over first" and tag B7 "last" and B2 "first" in violet under the formula bar, so the cell visibly matches scene 4's formula. About 3 s.

3. **Optional, attempt 1 ("in which months did the price fall?").** "Month 2" here means the fall from month 1 to month 2, which matches scene 3's "fell in month three". A student may answer "between months 1 and 2" and wonder if that is wrong. Feedback 1 can say "in month two, from five forty to five ten", which shows both readings are the same answer.

## Joins

i06a to i06b matches: scene 1 opens on the phone tower, the six closing prices and the empty axes, and the table's cells become the first points. i06b to i07 matches the decisions file: the full coin jar tagged "savings", the order ticket "BUY / shares: 500 / price per share: $12.40 / trade value: ? / brokerage: ? / total cost: ?", "+ a fee?", and no total shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1 supplies the prices and A2 a labelled graph with the answer unmarked (gridlines every $0.10, so $1.60 and $1.70 are readable). Each asks three things in 10 s, which "Pause here to answer." covers. Feedback 1 (about 24 s) and feedback 2 (about 26 s) give the answer, the reason and one crossed slip each. A phone network and an energy company are everyday businesses; both are invented (Codex to confirm, ruling 37).

## Key notes and length

The five notes are short and useful; note 4 keeps "a gain is only banked if sold", which is a necessary condition. About 465 s with holds, 105 s under the cap.

No speech, design edits, builds or commits were made.
