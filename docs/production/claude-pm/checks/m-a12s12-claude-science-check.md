# m-a12s12 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `76119a62a40e41d669d588308fea579d5531cac1119bcc76bd7de096fffceb47`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `cib1892b99`: "Solve problems involving finding the mean or standard deviation of a normal random variable given the probability of an event less or more extreme than a given outcome"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

Exact inverse-normal calculations and table-based approximations are saved separately. The cereal sigma limit is about 1.9411224; sigma=1.9 complies and 2.0 fails. The battery exact sigma is 3.9984325, so four hours is a table-based approximation. Keep the accepted short length and the existing right-tail case; no extra case is needed. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s12.json`.

1. **Blocker:** Scene 8 sets the mean to 380.15 g with sigma=2 for the fewer-than-0.5-percent underweight condition. The actual tail is 0.0050120043, which exceeds the limit. The exact threshold is 380.1516586; a mean restricted to cents must be at least 380.16. Replace the last rounded conclusion with a checked upward setting, funded by cutting the final cost sentence.

2. **Should fix:** Scene 5 says any mean below 508.64 lets more than 1% through. The exact boundary is 508.61078299; 508.62 is lower than 508.64 yet complies. Call 508.64 a conservative table-based setting and remove the false universal lower-bound sentence.

3. **Should fix:** Attempt 1 asks for mu correct to two decimal places but nearest table lookup gives 1006.15, whereas the inverse-normal value is 1006.1612467, rounding to 1006.16. Specify an approximate answer using the supplied table or require an application. Keep the distinction in its feedback, funded by shortening the repeated sign explanation.

4. **Should fix:** Decision 60 requires the named first-feedback trim at Revision 2. Preserve the sign reason and remove the listed repeated phrase; no length padding is needed.

Count: 1 blockers, 3 should fix, 0 optional; 5,366 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cib1892b99`: Solve problems involving finding the mean or standard deviation of a normal random variable given the probability of an event less or more extreme than a given outcome

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.


## Official table and reference sheet resolved

The [official sample examination](https://library.curriculum.nsw.edu.au/341419dc-8ec2-0289-7225-6db7f2d751ef/c3154390-3080-4f0d-987c-1019ef0bae93/D2024%20462014%20%20HSC%20Mathematics%20Advanced%20-%20annotated-sample-examination-materials.pdf) has the required cumulative normal table on printed page33: positive z, rows by0.1, columns by0.01, four decimals. All330 entries were checked. The current two-page2027 reference sheet has no normal CDF table and no annuity formula. `work/brief162/reference-table-verification.json` records hashes and results. Root decision61 is confirmed by the sample exam; the contrary-tail fallback is unnecessary.
