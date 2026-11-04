# m-a12i06 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `8cb456d557c1e7b041c68e40e664fa0a7523147a6237783d80117c0d12d46c3e`. No design, audio or playback inspected.

The four quoted 2024 actions below match the fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f), with mathematical notation linearised as in the design. Codenames are the content-system identifiers checked against the official action evidence in `work/brief151/math-official-validation.json`.

- `ci7716ae08`: “Examine for a function f(x), which indicates the rate of change of a quantity, the meaning of ∑_{a,b} f(x)Δx, where the interval a ≤ x ≤ b is divided into subintervals of length Δx, and describe ∑_{a,b} f(x)Δx as an estimate of the total change in that quantity over the interval a ≤ x ≤ b”.
- `cid91e54c8`: “Define informally that a function is continuous on the interval a ≤ x ≤ b if it can be drawn between the two endpoints of the interval without taking the pen off the paper”.
- `cief49e59c`: “Graph the region between the continuous function y = f(x) and the x-axis, where f(x) ≥ 0 on the interval a ≤ x ≤ b”.
- `ci9a3ea6c6`: “Use a graphing application to compare different methods of approximating the area, A, of the region between the continuous function y = f(x) and the x-axis, where f(x) ≥ 0 on the interval a ≤ x ≤ b, by summing the areas of trapezia or rectangles each of width Δx = (b − a)/n and approximate height f(x) for any x lying in its base, and observe the effect on the precision of the approximation of A as the number n of subintervals of a ≤ x ≤ b increases, that is as Δx → 0”.

SymPy checks in `work/brief130-python/i06.py` and `.json` give left/right cosine sums 1.1835/0.7908 for n = 4; x² left/right/trapezium sums 7/4, 15/4, 11/4, with exact 8/3; the later n = 8 and 16 results agree. The left-sum tank answer is 57/4 = 14.25 L, and the cyclist estimate is 22 m. Concavity gives the stated directions for these curves, and the error-ratio claims are scoped to x². The interval and units agree. The site x² values are unchanged; the pack's two alternate practice questions are reasonably replaced by two fresh tasks covering the same skills.

1. **Should fix:** The graphing-application action requires learner use; the script currently shows a comparison rather than directing the learner to operate an application. Same finding as the learning review; use its named cut if required.

The site elevation-versus-distance hook has been logged separately. Count: 0 blockers, 1 should fix, 0 optional; 6,176 separate characters, about 561 seconds.
