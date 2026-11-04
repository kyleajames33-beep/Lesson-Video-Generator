# m-a12i08 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `37faefea9a9d98d11a9294ddf75ed3713eeef420905dc9a38062f21f3bad93b1`. No design, audio or animation inspected.

The 2024 actions match the fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f); notation is linearised, and CMS identifiers are checked in `work/brief151/math-official-validation.json`.

- `ci9652c528`: “Consider the function defined by A(x) = ∫_{a}^{x} f(t) dt and use a graphing application to recognise that A(x) is a primitive of f(x)”.
- `cid76b6b1d`: “Recognise the Fundamental Theorem of Calculus as ∫_{a}^{b} f(x) dx = [F(x)]_{a}^{b} = F(b) − F(a) for a continuous function f on the interval a ≤ x ≤ b where F(x) is any primitive of f(x)”.

1. **Should fix:** Learner use of the graphing application is not requested; the visual merely shows an application producing a trace. Same finding and length-neutral repair as the learning review.
2. **Should fix:** Scene 6 describes the gradient of a finite numerical strip approximation as tracing x² exactly. The continuous limiting function has that exact derivative, but the numerical approximation need not. Label the application comparison approximate and keep the exact theorem for the limiting function.

SymPy evidence in `work/brief130-python/i08.py` and `.json` checks A = 3x − x²/2, values 5/2, 4, 9/2, 4, 0, chord slopes 1.75, 1.95 and 1.995, the −5/2 start shift, x³/3, and attempts 0 and 3, then 26. The i07 opening and i09 handoff match. The late pack's chain-rule upper-limit extension is deliberately omitted by root decision 30; the core actions remain covered. Site corrections are logged below. Count: 0 blockers, 2 should fix, 0 optional; 5,599 separate characters, about 525 seconds.
