# Maths S12 i04 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i04.md`, "How do the rate, the term and the compounding period change an investment?" Source SHA256 `2e2e5db0e0f72ffcc24fbb1df777bea7aedce5e9fbc23772bc8a4936fda56f36`.

Written design reviewed (narration, visual descriptions, spreadsheet, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i02a, i02b, i03: FV = PV(1 + r)ⁿ with r and n per period; a04b: spreadsheet formulas) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only, ruling 30). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A strong design, and it does not need splitting (open decision 1). One fund carries every change, so "change one thing, keep the others locked" always has the same base, and the lock icons make the method visible. Each effect comes with its cause: the rate gap widens "because the extra interest earns interest too"; the second five years earn more "on a balance that already includes the first five years' interest"; quarterly is "share it out" with both "÷ 4" and "× 4" said before the formula; monthly helps a little because "each interest payment lands a bit earlier". The ranking card answers the hook's "Which change matters most?", and three curves that look like one until the magnifier opens is a good visual surprise. Open decision 2: confirmed. With $8,000, A1's rounded values give $45.31 and the full values $45.32, so $4,000 ($22.66 either way) avoids a marking dispute. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): both rate ladders and the gaps 200, 428, 686.96, 980.12, 1,311.02; 10 years $21,589.25, interest $11,589.25, ratio 2.47, second five years $6,895.97; half-yearly $14,802.44, quarterly $14,859.47 (+166.19), monthly $14,898.46 (+205.18), slip $46,609.57; A1 $4,764.06, $4,786.72, $22.66; A2 $3,144.47, $8,266.49, slip $6,288.94. All correct.

## Findings

1. **Should fix, scene 6 (the spreadsheet formula is read, not explained).** "Equals B one, times one plus B two divided by B four, to the power of B three times B four." Heard at speed, this is a string of cell names; the student is not told that B2/B4 is scene 4's "rate ÷ periods a year" and B3*B4 is "years × periods a year", which is the only reason the one formula handles yearly, quarterly and monthly. Fix. Narration, after the formula: "B two divided by B four is the rate for each period, and B three times B four is the number of periods, just like the quarterly example." Visual: under the formula bar, two amber brackets with 32 px tags, "B2/B4: rate per period" and "B3*B4: number of periods", and the cells B2 and B4, then B3 and B4, ring as each part is said; hand tag "same as ÷ k and × k". Students should be able to read the formula bar as the formula they already used, and change B4 with understanding. Time: about 7 s against a 95 s margin.

2. **Optional, scene 7 ("k").** The letter k is first heard in the memory aid ("For k periods a year"), with no plain meaning, though the design's notation decision says it is introduced as "the number of periods in a year". Say it in scene 4, after "five times four, twenty": "If interest is added k times a year, k is just the number of periods in a year. Here k is four."

3. **Optional, scenes 2 and 5 (the value axis starts at $10,000).** Starting at $10,000 is right for seeing the gap, but i01 made a point of an honest axis from $0. Mark the break on the value axis (the usual zigzag) with a 30 px grey tag "axis starts at $10,000", so the fan does not look bigger than it is.

## Joins

i03 to i04 matches: scene 1 opens on i03's two-route frame and fades the right panel; the salon chair, "equipment fund: $10,000" and the three amber chips carry the hook. i04 to i05 matches the decisions file: i03's right panel full-frame (the coffee cart, "paid out" and "left in", each "$5,000 at 6% p.a.", the grey chip), so i05 opens on the same picture from either route; no yearly values are shown.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's picture ("times a year: ?") and A2's empty axes give nothing away. Feedback 1 (about 29 s) shows the monthly conversion and crosses "4000 × 1.06³⁶"; feedback 2 (about 27 s) gives both interest values, the interest-on-interest reason and crosses the doubled answer. A salon's equipment fund is a real, fair anchor; 8% is said to be high and an example, "rates change" is said once, and money.com.au and Finder are dated (ruling 32).

## Key notes and length

The five notes are short and useful, and the memory card ("Rate and term: big. How often: small.") answers the main question; its "realistic changes" assumption is recorded. About 475 s with holds, 95 s under the cap.

No speech, design edits, builds or commits were made.
