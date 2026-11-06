# m-a12s11 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `d82381fa8e23c55a9f2c96aea3bc0ca33309b07c91a6a0c2a9755c23535b50d4`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `cid8ec3651`: "Distinguish between a standard normal distribution with mean 0 and standard deviation 1, and the non-standard normal distribution with mean μ and standard deviation σ"
- `ci81208003`: "Define the z -score, or standardised score, by the formula z=(x-μ)/(σ) , where μ is the mean and σ is the standard deviation, and x is an observed value of a random variable"
- `cie7b9fd82`: "Interpret the z -score as the number of standard deviations a score lies above or below the mean"
- `ci9f2473ff`: "Use z -scores to compare scores from different sets of data and justify conclusions"
- `ciaad9c7ab`: "Use z -scores to identify probabilities of events less or more extreme than a given outcome and solve problems using tables for the standard normal distribution"
- `cia23986f7`: "Use z -scores to make judgements related to probabilities of certain events or given sets of data assuming an underlying normal distribution"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

All listed normal CDF entries agree to four decimal places, the comparison z-scores are 1.5 and 1.1, and the puzzle tail is 0.0668 using the provided table. Rounding 5/3 to 1.67 gives the stated bolt middle 0.9050; the unrounded application value is 0.9044. Preserve that distinction. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s11.json`.

No unresolved table-form finding: the official 2024-syllabus sample examination, printed page33, supplies a positive-z cumulative table to four decimal places. Its heading uses P(Z ≤ z), equivalent to P(Z < z) for a continuous normal variable. All330 entries recalculate correctly. The separate two-page reference sheet has no CDF table. Cite the sample exam, not the reference sheet, and use its0.0to3.2rows if claiming matching layout.

Count: 0 blockers, 0 should fix, 0 optional; 5,568 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cid8ec3651`: Distinguish between a standard normal distribution with mean 0 and standard deviation 1, and the non-standard normal distribution with mean μ and standard deviation σ

`ci81208003`: Define the z - score , or standardised score, by the formula z=(x-μ)/(σ) , where μ is the mean and σ is the standard deviation, and x is an observed value of a random variable

`cie7b9fd82`: Interpret the z -score as the number of standard deviations a score lies above or below the mean

`ci9f2473ff`: Use z -scores to compare scores from different sets of data and justify conclusions

`ciaad9c7ab`: Use z -scores to identify probabilities of events less or more extreme than a given outcome and solve problems using tables for the standard normal distribution

`cia23986f7`: Use z -scores to make judgements related to probabilities of certain events or given sets of data assuming an underlying normal distribution

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.


## Official table and reference sheet resolved

The [official sample examination](https://library.curriculum.nsw.edu.au/341419dc-8ec2-0289-7225-6db7f2d751ef/c3154390-3080-4f0d-987c-1019ef0bae93/D2024%20462014%20%20HSC%20Mathematics%20Advanced%20-%20annotated-sample-examination-materials.pdf) has the required cumulative normal table on printed page33: positive z, rows by0.1, columns by0.01, four decimals. All330 entries were checked. The current two-page2027 reference sheet has no normal CDF table and no annuity formula. `work/brief162/reference-table-verification.json` records hashes and results. Root decision61 is confirmed by the sample exam; the contrary-tail fallback is unnecessary.
