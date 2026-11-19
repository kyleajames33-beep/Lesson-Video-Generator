# Maths S11 e10 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-e10.md`, "How are the Medicare levy and net pay calculated?" Source SHA256 `9c7dfd76595a2e427b129ebeae0583d20f5982eda43cb453f607d310dc05ef36`.

Written design reviewed from its stated entry knowledge (e07 taxable income; e08 tax from the table; e09 tax withheld) as a Year 11 Standard student. The Medicare low-income threshold is a known placeholder waiting for Codex (ruling 94) and is not graded. No built preview, playback or human listening is claimed. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

"Two per cent of what?" is a good question to open on, and the olive slice lifting from the whole income bar, beside a crossed sliver lifting from the tax, answers it in a picture. Super is handled correctly (ruling 86): 12% of ordinary-time earnings from the employer, carried into the fund outside the slip while the net line stays still, and salary sacrifice named as the one super that does come out. "No second levy line, because the tax withheld already allows for it" links e09 cleanly. Recalculated with SymPy: levy 0.02 × 67 500 = 1350, ghost 215.40, net 55 380; Rhys 1197.00 + 236.25 = 1433.25, deductions 413.80, net 1019.45, super 0.12 × 1197 = 143.64, slip 875.81; A1 1250, 9270, 51 980, slip 185.40; A2 288.80, 995.70, super 154.14, slip 841.56. All correct.

## Findings

1. **Should fix, scene 3 and key note 2 ("any other deductions").** One video earlier, "deductions" meant allowable deductions that lower taxable income (e07). Here "net earnings are what's left of your income after tax, the Medicare levy and any other deductions", followed by "the chef has no other deductions, so her income and taxable income are the same", mixes the two meanings in one breath. A student may subtract the teacher's $1050 of allowable deductions again from her net. The memory card already says "Net earnings = income − tax − levy". Fix: scene 3, "Net earnings are what's left of your income after tax and the Medicare levy. The chef has no allowable deductions, so her income and taxable income are the same." Key note 2: "Net earnings (year) = income − tax − levy." Keep "deductions" for pay-slip lines in scene 4, where the slip names each one. Students should keep the two kinds of deduction apart.

2. **Optional, scene 4 (root open decision 3: how realistic is $276?).** Salary sacrifice is taken before tax, so the withholding on Rhys's slip would be worked on $1338.25 (1433.25 − 95), not $1433.25; by e09's method that is nearer $246 than $276. Students are not taught this and the stated amount is "as given", so nothing wrong is taught. If root wants the realism the design aims for, Codex reads NAT 1005 at $1338 instead of $1433 and the net follows.

## Joins

e09 to e10: scene 1 opens on e09's final frame exactly (slip, stethoscope, olive tag, chips) and answers "2% of what?" in scene 2. e10 to e11: scene 11's frame (the `ReturnSummary` "Tax return summary 2026-27", the two blank lines, a level balance, "refund or bill?") is e11's opening.

## Practice and feedback

Both cards keep the full question on screen (A1 with the 2026-27 table). A2 says "all for ordinary hours", so 12% of gross is the guarantee. Feedback about 29 s and 24 s, each with one crossed slip. A chef, a pay slip and health insurance are everyday anchors; no people drawn.

## Key notes and length

Five notes; the super note ("paid on top; only salary sacrifice comes out") is the strand's MS-71 and MS-72 correction. 0 em dashes. 4,892 characters, about 454 s, 116 s under 570 s.

No speech, design edits, builds or commits were made.
