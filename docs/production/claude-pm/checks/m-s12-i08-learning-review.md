# Maths S12 i08 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i08.md`, "Savings account, term deposit, shares or property: which investment suits which goal?" Source SHA256 `745102ce1934437dcc831bf908efd828b213fd895509d09a34e030f7556c3c03`.

Written design reviewed (narration, visual descriptions, comparison grid, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i02a: FV; i03: appreciation and buying power; for Standard 2, i06a and i07: share risk and brokerage) as a Mathematics Standard student starting Year 12, once as a Standard 1 student arriving from i05 (no shares) and once as a Standard 2 student arriving from i07. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The design teaches a decision, not a list, which is what "compare and contrast" needs. Each investment gets its plain meaning (a variable rate "means the bank can change it"; a term deposit's money is "locked in, and taking it out early costs you"), the four measures each get a one-line meaning before the grid fills, and the goal cards make "no column decides on its own" visible: the term deposit wins the return column, then dims for "might need it early". The duty calculation is followable for both courses ("only the part over", in $100 blocks), the exam answer frame (goal, choice, for, against) is useful, and the Standard 1 path is clean (ruling 30): shares are named once as Standard 2 and every calculation and attempt uses the three Standard 1 strategies. Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): $61,419.83, $63,208.64 and $1,788.81 (the same from rounded and full values); duty on $650,000: 263,000, 2,630 lots, $11,835, $23,437.00, slip $29,250; bracket top $52,237; A1 $13,230.00, $13,356.30, $126.30; A2 213,000, $9,585, $21,187.00, slip $27,000. All correct.

## Findings

1. **Should fix, scenes 4 and anchor (ruling 35, and the reason given for the gap).** Root ruling 35 replaces the site's 4.2% and 4.8% with current rates and dated sources. Separately, scene 4 ends "That's one thousand seven hundred and eighty-eight dollars and eighty-one cents more, because the money's locked away", and the teaching checks give the cause as "the bank pays more for money it can keep". The design's own sources show bonus savings rates of about 5.5% to 6.5% (with conditions) at or above 12-month term deposits of about 5.5% to 5.7%, so "locked away, so it pays more" is not reliably true in November 2026, and a student may learn it as a rule. Fix. Use rates inside the cited ranges, for example a savings account at 5.2% p.a. (variable) against a term deposit at 5.6% p.a. fixed for the five years: $64,424.15 and $65,658.29, $1,234.14 apart (the same from rounded and full values; checked in `verify.py`); Codex confirms against the dated sources (5-year deposit rates may differ from 12-month ones, so cite the right one). Narration, replacing the last sentence: "That's one thousand two hundred and thirty-four dollars and fourteen cents more, because this term deposit's rate is higher and fixed. Banks often pay more for money that's locked away, but some savings accounts pay bonus rates that match it, so always compare the actual rates." The visual's final ring on the "locked" access cell stays. Students should learn to compare the stated rates and the access trade-off, not assume that locked always pays more.

2. **Should fix, scene 3 (the dots mean "good" in two columns and "bad" in two).** The 1-to-3 dot ratings give property ●●● for return (good) and ●●● for cost to enter (bad), and savings ○○○ for risk (good) and ●●● for access (good). At a glance a student reads "more dots, better", which ranks property and shares highest, the opposite of "no column decides on its own". Fix. Keep the dots, but put a small arrow and word under each column head, 30 px: "return: more is better", "risk: more is worse", "access: faster is better", "cost to enter: more is worse"; or shade the dots teal where more helps and hatched ink where more hurts (red stays for mistakes). Students should be able to read each row's trade-off from the grid.

3. **Optional, scene 5 (a long board).** Scene 5 is 881 characters, about 66 s of speech on one board. Every step is needed; the named reserve trim ("That's two thousand six hundred and thirty lots of a hundred,") is the right one if the take runs long, since the $100 blocks carry it.

4. **Optional, feedback 2 (length).** Feedback 2 is about 31 s by estimate. Trim "Two hundred and thirteen thousand dollars is over the threshold, which is" to "The part over is two hundred and thirteen thousand, so that's", which also repeats scene 5's wording.

## Joins

i05's right panel (Standard 1) and i07's final frame (Standard 2) are the same four-object picture, and scene 1 opens on it with no returns or costs shown. i08 to i09 matches the decisions file: the tool box with "new tools: $6,200", empty "value ($)" and "years" axes, the grey chip "worth less each year?", and no rate.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A2's card gives the duty rule in full. A1's card is long (three parts at 38 px), which "Pause here to answer." covers. Feedback 1 (about 28 s) gives both values, the difference, a choice with one reason for and one against, crosses "the term deposit, because it pays more", and says a justified term deposit answer can also earn the mark, which is fair. Feedback 2 gives the duty and two differences and crosses the whole-price slip. A $50,000 sum, a trip fund and an investment unit are fair anchors; the Revenue NSW 2026-27 bracket is cited with its date, "rates and duty change every year" is said once, shares are an investment with risk, and nothing is framed as a bet (rulings 5, 6, 32).

## Key notes and length

The five notes are short and useful, and the memory card's "with risk" keeps the necessary condition on the long-goal advice. About 513 s with holds, 57 s under the cap; finding 1 changes about the same number of characters.

No speech, design edits, builds or commits were made.
