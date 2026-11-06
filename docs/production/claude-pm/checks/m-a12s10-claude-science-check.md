# m-a12s10 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `e999d4d06bfe04cf003087c9963a961c5ad75c46c07dd0a4e5d4d057a1b6083a`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `cie0de74be`: "Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean"
- `ciaca4d996`: "Use graphing applications to explore the normal distribution, graph the probability density function f(x)=(1)/(σsqrt(2π))e^(-((x-μ)^(2))/(2σ^(2))) , verify the empirical rule and graph the cumulative distribution function"
- `cicc8fa862`: "Recognise features of the normal curve, and identify the global maximum and points of inflection"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

The PDF derivatives give maximum at mu and inflections mu±sigma. Numerical central probabilities are 0.682689,0.954500,0.997300. F(490) is about 0.10565; the exact tail above 196 cm is about 0.000577, below the three-sigma tail. The empirical rule remains explicitly approximate. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s10.json`.

1. **Should fix:** Scene 9 compares 196 cm with the three-sigma mark 194 cm, then says about 0.15% are taller. That percentage refers to 194, not 196. Say "fewer than about 0.15 percent exceed 196" or keep the threshold explicit. Replace the existing sentence, without another calculation.

2. **Should fix:** Apply decision 60: trim feedback 2 to 30 seconds. Remove its repeated check that two sigma squared is fifty while retaining sigma=5, the maximum, inflection values and the crossed square-root error.

Count: 0 blockers, 2 should fix, 0 optional; 6,048 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cie0de74be`: Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean

`ciaca4d996`: Use graphing applications to explore the normal distribution, graph the probability density function f(x)=(1)/(σsqrt(2π))e^(-((x-μ)^(2))/(2σ^(2))) , verify the empirical rule and graph the cumulative distribution function

`cicc8fa862`: Recognise features of the normal curve, and identify the global maximum and points of inflection

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.


## Official table and reference sheet resolved

The [official sample examination](https://library.curriculum.nsw.edu.au/341419dc-8ec2-0289-7225-6db7f2d751ef/c3154390-3080-4f0d-987c-1019ef0bae93/D2024%20462014%20%20HSC%20Mathematics%20Advanced%20-%20annotated-sample-examination-materials.pdf) has the required cumulative normal table on printed page33: positive z, rows by0.1, columns by0.01, four decimals. All330 entries were checked. The current two-page2027 reference sheet has no normal CDF table and no annuity formula. `work/brief162/reference-table-verification.json` records hashes and results. Root decision61 is confirmed by the sample exam; the contrary-tail fallback is unnecessary.
