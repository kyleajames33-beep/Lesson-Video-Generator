# Maths S12 i21 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i21.md`, "How much must we put in to reach a savings goal?" Source SHA256 `281db250e3c6a14abca72fcf67e96e43cb459ceeefaac9a9efad2290cbb5c244`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i20: reading FV and PV factors, payment × factor; i04: rate per period) as a Mathematics Standard 2 student starting Year 12 (Standard 2 only). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: blocker** (1 blocker, 1 should fix, 0 optional).

The teaching itself is good. Scene 2 turns i20's rule round in words ("we undo the times") and explains why "÷ 96" is wrong (it ignores the interest the deposits earn). The 15-cent magnifier makes "round up for a goal" a reason, not a rule. Scene 4 shows how much of the goal is interest and why the factor (about 120) is bigger than the 96 deposits. Scene 5's two timelines, one smaller teal block arriving at the same $50,000 as 96 deposits, carry the single sum, and "every dollar of the lump sum earns interest for all ninety-six months" gives the cause. The only problem is the rate, which root has already ruled on. Recalculated with SymPy 1.14 (`work/brief-review-standard-i2/verify.py`, `python -I`): every cell of both extracts (0.40%, 0.45%, 0.50% at 84, 96 and 120 periods); 417.5613 up to $417.57; $417.56 reaches $49,999.85; $417.57 reaches $50,001.04 by the table factor and $50,001.05 by the exact factor; $40,086.72 paid in; $9,914.33 interest; $520.83; single sum $32,492.62; the exact sum for $50,000, $32,491.94; A1 12.6825 and $946.19; A2 6.8019, 5.0757, $13,603.80, $10,151.40, check $13,603.85; the memory-aid case $222.45. All correct except one author note: $32,492.62 × 1.0045⁹⁶ = $50,001.04, not $50,001.05 (the screen shows "≈ $50,001", so nothing on screen changes).

## Findings

1. **Blocker, scenes 1, 3, 4 and 5 (ruling 40 is not yet applied).** Root ruling 40 says to change the worked goal so it uses a standard interest-factor table column. The design still uses 5.4% p.a. compounded monthly, the 0.45% column (scene 3 even says "Exam tables will give you the column you need", because a 0.45% column is unusual). Fix: keep the site's goal and method ($50,000 in 8 years, contributions at the end of each month) at 6% p.a. compounded monthly, the 0.5% column students used in i20 scenes 5 and 6. New values, checked in `work/brief-review-standard-i2/suggested.py`: FV factor (0.5%, 96) 122.8285; 50,000 ÷ 122.8285 = 407.0716, so $407.08 a month rounded up; $407.07 reaches only $49,999.80, 20 cents short; $407.08 reaches $50,001.03 (table factor; $50,001.04 exact); 96 × $407.08 = $39,079.68 paid in, so about $10,900 (exactly $10,921.35) is interest; PV factor (0.5%, 96) 76.0952; single sum 407.08 × 76.0952 = $30,976.83, which grows to $50,001.02; the exact sum for $50,000 is $30,976.20 (not shown). Extract columns 0.5% and 1% at 84, 96, 120: FV 104.0739, 130.6723; 122.8285, 159.9273; 163.8793, 230.0387; PV 68.4530, 56.6485; 76.0952, 61.5277; 90.0735, 69.7005. Wording: scene 1 keeps "That's a little above today's best savings rates, and rates change" (true of 6%, as i20 and i22 say); scene 3 drops "Exam tables will give you the column you need" and its grey chip; scene 3's slip and magnifier become "$407.07, 20 cents short"; scene 4 becomes "almost eleven thousand dollars" and "the factor, a hundred and twenty-two"; the rate source line moves to "RBA F4 (October 2026): bonus savers 5.05% p.a.; 6% is a teaching rate". i20 scene 13's card changes with it (i20 review, finding 3). The "÷ 96" idea ($520.83) is unchanged. Root may prefer another standard column; the method is unchanged either way.

2. **Should fix, feedback 2 (a factor is misspoken).** "The future value is two thousand times six point oh eight oh one nine" says 6.08019. Attempt 2 and the screen use 6.8019. Fix: "two thousand times six point eight oh one nine".

## Joins

i20 to i21: scene 1 opens on i20's final frame exactly, once both carry the same rate (finding 1; i20 finding 3). i21 to i22: the two timelines small, both reaching $50,000, and an empty four-input spreadsheet with a blank "future value" cell is i22's stated opening frame, with nothing filled.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, each giving the factor it needs; A1 says "so that she reaches her goal", which makes rounding up the asked behaviour. Each feedback gives the answer, the reason and one crossed slip ("12,000 × 12.6825"; "single sum = 6 × $2,000 = $12,000"), about 26 s and 29 s. A first-home deposit, an above-ground pool and deck and an employer bonus are real, fair anchors. No rearranged formula appears (ruling 33).

## Key notes and length

The five notes are the two rules, the round-up and a check. About 478 s with holds, 92 s under the 570 s cap; finding 1 makes the narration slightly shorter.

No speech, design edits, builds or commits were made.
