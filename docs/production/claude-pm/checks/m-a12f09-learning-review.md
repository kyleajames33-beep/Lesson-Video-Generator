# m-a12f09 learning review

Revision 1, checked 4 November 2026. Source SHA-256 `05e2381afe98a9750580b496950263cc4cfcce82e4907ddaa2d6a457b41ab324`. Source review only; no voiced preview or learner observation.

The learner asks how a reducing-balance loan evolves. The $30,000 strip adds interest before the end-of-month repayment, then the table transfers each closing balance into the next opening balance. Three rows show why a smaller interest charge leaves more of the fixed repayment to reduce the debt. Unfolding the recurrence exposes the geometric repayment factors, with 1 + r distinguished from r. The attempts keep the relevant givens and withhold the working.

1. **Should fix:** Scene 8 gives the general expression with division by r without restricting it to nonzero interest. At zero interest the recurrence is still meaningful, but the displayed fraction is undefined. Add “when r is not zero” beside the expression and show Aₙ = P − nM as a brief zero-rate note; replace the repeated compound-interest description if timing needs a cut.
2. **Should fix:** The closing line says a reducing-balance loan falls slowly, then faster, as an unrestricted statement. The property requires the positive-rate, fixed-repayment case where the repayment exceeds the interest on the starting balance, and applies up to payoff. Replace it with “in this loan, the balance falls slowly, then faster” so the conclusion stays on the demonstrated example.

The f08 interest-first loan strip matches the opening, and the home-loan curve and $2,500 ghost handoff agree with f10. No f09 pack or approved route entry was found; propose the design's draft to root with its action and stated limits. The outline agrees. Root decision 49 selects M for repayments and is applied. Count: 0 blockers, 2 should fix, 0 optional; 6,169 separate and 6,184 joined narration characters, about 565 s. The 570 s cap leaves little margin; use the named reserve cuts for any additional speech.
