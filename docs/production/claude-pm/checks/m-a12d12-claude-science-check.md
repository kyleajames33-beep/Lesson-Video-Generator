# m-a12d12 maths check: Revision 1

Written design reviewed 2 November 2026; SHA256 `65dcb105d3f3b1505dec366c4e833d5f8810b0fbfb2571554c68f143b3367b80`. Official 2024 Year 12 differential calculus content `cifea7f68d` is the action to find the derivatives of cosec x, sec x and cot x using differentiation rules: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480.

## Findings

1. **Should fix:** The statement that a reciprocal moves faster whenever its function is smaller ignores the factor g′ in |(1/g)′|=|g′|/g². Keep the observation tied to the cosine example, or state the rate factor. This is the same issue as the learning review.
2. **Should fix:** The six-decimal author-note value for sec′(1.2) is 7.098383; direct evaluation gives 7.098376. The displayed three-decimal 7.098 is correct. Correct the author table without added time.

## Recalculation

SymPy gives sec′ = sin/cos², cosec′ = −cos/sin² and cot′ = −1/sin². The zeros of sec′ in the stated open interval, with π/2 excluded, are 0 and π. A1 is −2√3 and the crossed reciprocal is 2/√3; A2 simplifies to −(1+cos x)/sin²x on its stated domain. The values at π/6, π/4, π/3, 0.3 and 1.3, the end values and the exponential-window clipping are consistent at shown precision. The definitions and complementary-angle identities are mathematically correct. The official glossary confirms the reciprocal and complementary definitions, but this check has not established a specific Year 11 content point requiring all extended-angle identities; the aid itself supplies its reason. See https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/glossary.

Count: 0 blockers, 2 should fix, 0 optional. 5,693 characters, about 516 s. The generalisation is shared with the learning review, not an additional issue.

## Year 11 placement confirmed

Fresh NSW Curriculum Year 11 source checked 2 November 2026: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/faa07be39c. `cicf5015c7` establishes the reciprocal ratios with exclusions; `cic43f35f1` proves all six complementary-angle identities with exclusions; `cif79ffa41` proves the Pythagorean identities. Root decision 7 is confirmed, replacing the earlier unresolved placement note. The identities carry across degree and radian descriptions of the same angles.
