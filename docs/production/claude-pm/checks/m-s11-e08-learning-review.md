# Maths S11 e08 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e08.md`, "How does a tax table give the tax payable on a year of income?" Source SHA256 `bb28df13d411d50bbf7bad6f7df9bde0ab856ac5f70ead244e8a93611dfc108c`.

Written design reviewed from its stated entry knowledge (Stage 5 cents in the dollar; e03 sliding scale; e07 taxable income) as a Year 11 Standard student. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

The order is the right one for Standard students: slices first on the chef's $67,500 (a callback to e03), then the table as "the lower slices done for you", with the $4020 base flying back onto the 15c slice. The boundary scene ($45,000 gives $4020 in both rows) explains where base amounts come from, and the pay-rise myth is busted with a calculation, then tested in A2. Only 2026-27 figures appear; the 16% to 15% change is said once (MS-73). Recalculated with SymPy against the 2026-27 table: bases 4020, 31 020, 51 370; Zara 10 770 by slices and by row; teacher 17 217, slip 26 697; $15 000 → 0, $30 000 → 1770; the step at $45 001 is 30c; myth 3870 → 40 130, 4320 → 41 680, +1550; A1 6234, slip 15 714; A2 3990 → 40 810, 4200 → 41 400, +590; card check $140 000 → 32 870. All correct.

## Findings

1. **Should fix, scenes 3, 4, 7, 13 (ruling 94 not yet applied: "threshold").** Ruling 94 asks e08 to say "the row's lower limit, called the threshold" once and then use "threshold", so students meet the exam word. Revision 1 still says "row's lower limit" throughout. The learning risk is that "threshold" now means a commission threshold (e03), the tax-free threshold (here), each row's start, and later the Medicare low-income threshold (e10). Tie them together on first use. Scene 3, after "plus thirty cents for each dollar over forty-five thousand", add: "Forty-five thousand is where this row starts. That's called the row's threshold. The tax-free threshold, eighteen thousand two hundred, is just the first row's threshold." Then use "threshold" in the formula strip (scene 4) "tax = base amount + rate × (income − threshold)", the memory key line "Tax = base amount + rate × (income − threshold). The base amount is the tax on all the slices below." and key note 3 "Dollars over = income − threshold." The site's own formula then matches. About 6 s.

2. **Optional, scene 6 and key note 5 ("A pay rise never leaves you worse off after tax").** True for this table and the levy, and the scene shows why. As an absolute rule in a student's book, it will meet claims about other charges later. Key note: "With a tax table, a pay rise never leaves you worse off after tax." Keep the narration as written.

## Joins

e07 to e08: scene 1 opens on e07's final frame (the $88 990 card and the blank table). e08 to e09: scene 12's frame (the weekly slip "Weekly pay slip: retail, Level 1", "Ordinary 38 h × $27.81 = $1056.78", "Gross pay $1056.78", the blank "Tax withheld: ?", the table small, "taken out every week?") is e09's opening.

## Practice and feedback

Both cards keep the full question and all five table rows on screen through the countdown. Feedback about 27 s and 29 s, each with the row, short working and one crossed slip. Kai's "30% bracket" uses a word the video does not; it is a quoted claim and the feedback answers it, so it can stay. A chef, a teacher and a part-time job are everyday anchors; no people drawn.

## Key notes and length

Five notes including the four steps. 0 em dashes. 5,534 characters, about 504 s with holds (the longest in the strand), 66 s under 570 s; finding 1 adds about 6 s.

No speech, design edits, builds or commits were made.
