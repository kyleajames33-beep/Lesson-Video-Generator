# m-a12i09 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `f56fee41b95775c41ec4e6e57ea44c8211b2a80ea91d4a54486531bf93ab8433`. No design, audio or animation inspected.

These 2024 actions match the fresh official [Integral calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f), with notation linearised; CMS identifiers were checked against `work/brief151/math-official-validation.json`.

- `ci6dc07a10`: “Apply ∫_{a}^{b} f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course”.
- `ci1bdb853f`: “Recognise and use the result, where f(x) is continuous on the interval a ≤ x ≤ c, ∫_{a}^{b} f(x) dx + ∫_{b}^{c} f(x) dx = ∫_{a}^{c} f(x) dx for all c such that a ≤ b ≤ c”.
- `ci585dfd5a`: “Define and use the result ∫_{a}^{b} f(x) dx = −∫_{b}^{a} f(x) dx, where f(x) is continuous on the interval a ≤ x ≤ b”.

SymPy evidence in `work/brief130-python/i09.py` and `.json` verifies 3, split 8/3 + 1/3, reversed −3, sine 2 and 1/2, e² + 1, log 1, both k = ±3 before the condition, attempt 3/2 and −4, and the zero sine handoff. The quoted source examples retain their numbers and the logarithm interval stays positive. The pack's core transfer is followed; root decision 33 reserves matched-inside examples for later practice. The site's trap title is potentially ambiguous but the underlying explanation is correct, so it is not logged as a factual error. Count: 0 blockers, 0 should fix, 0 optional; 5,683 separate characters, about 522 seconds.
