# Maths S11 e11 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e11.md`, "After a tax return, do we get a refund or owe more tax?" Source SHA256 `688595e3f292e676e60c5b51694ca1b2428bc1f0dacad71959ee89f6e2fb3e6f`.

Written design reviewed from its stated entry knowledge (e07 to e10: taxable income, tax, levy, withholding) as a Year 11 Standard student. The two-jobs PAYG rows ($450, $520) are known placeholders waiting for Codex and are not graded. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

The balance is the right picture: withheld on one pan, tax plus levy on the other, the heavier side decides, and the difference is written in the gap. The four-step chain on Priya brings e07 to e10 together, and the two "why" scenes give causes students rarely hear: two jobs each withholding as if they were the only job, and deductions lowering the real tax after full withholding ("your own tax, paid too early"). Both attempts target the strand's most common slip here (the levy left out). Recalculated with SymPy: Ella 4020 + 900 = 4920, refund 180, ghost 1080; Priya 80 950, 14 805, 1619, 16 424, refund 2976, slip 4595, e12 row net 64 526; two jobs 50 440, 5652, 1008.80, 6660.80, with placeholders 1924 and 4736.80; A1 8190 + 1178 = 9368, owes 268, slip 910; A2 70 030, 11 529, 1400.60, 12 929.60, refund 630.40, slip 2031. All correct.

## Findings

1. **Should fix, scene 3 against scene 5 (root open decision 3: Priya's $19 400 withheld).** Scene 5 teaches that refunds happen because PAYG ignores deductions, so the refund is roughly the tax on the deductions. Priya's deductions are $2850 and her interest of $1200 had nothing withheld, so a student who understood scene 5 expects a refund of a few hundred dollars, about (2850 − 1200) × 0.32 = $528. The design gives $2976, more than all her deductions. The student asks "where did the rest come from?", and the honest answer (the site's withholding is too high for 2026-27) is not in the video. Fix: reprice the withheld amount to the tax and levy on her salary alone, $16 950 (tax from the table on $82 600 is $15 300, levy $1652, total $16 952). Then: owed $16 424, refund **$526**; crossed slip "16 950 − 14 805 = $2145 refund". Narration changes in scene 3: "and sixteen thousand nine hundred and fifty dollars was withheld" and "Sixteen thousand nine hundred and fifty was withheld, which is more, so Priya gets a refund of five hundred and twenty-six **dollars**." Task strip and givens to match. Priya's e12 row (80950 | 14805 | 1619 | 64526) does not change. Optionally, scene 5 can then point back: "That's Priya's refund." Students should find that the refund's size fits its cause. (Checked in `work/brief-review-s11-e/verify.py`.)

2. **Optional, scene 2 (Ella's $180 refund has no stated cause).** With no deductions, a $180 refund appears from nowhere. It is only the first comparison and the scene's job is the balance, so it can stay; if root wants every case to fit scene 5, say "Five thousand one hundred was withheld, a little more than needed" or use $4,800 withheld (a $120 debt), which also shows the balance tipping the other way early.

3. **Optional, scene 4 ("That's why you claim the threshold from one job only.").** A student may think one claim fixes the second job completely; with these incomes a smaller bill can remain. Add: "That's why you claim the threshold from one job only, and even then, a second job can leave a small bill." About 3 s.

## Joins

e10 to e11: scene 1 opens on e10's final frame (the return summary, two blank lines, a level balance, "refund or bill?"). e11 to e12: scene 11's frame (one grid row "80950 | 14805 | 1619 | 64526", an empty row 3, "what if I earn more?", "Next: tax in a spreadsheet") is e12's opening.

## Practice and feedback

Both cards keep the full question, the 2026-27 table and "Medicare levy: 2% of taxable income" on screen. Feedback about 30 s each, at the top of the 15 to 30 s range because the four-step chain is the answer; each has one crossed slip. No people drawn.

## Key notes and length

Five notes, all checkable. 0 em dashes. 4,887 characters, about 454 s, 116 s under 570 s. Scene 4 waits for the copied rows (ruling 94).

No speech, design edits, builds or commits were made.
