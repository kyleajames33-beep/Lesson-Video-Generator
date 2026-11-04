# m-a12g03 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `4fe0dcb10e0ed0873cb5956924b8a1efa92518db2f0c084fa51600921e6e7f91`. Source-only check.

The practised 2024 actions are supported by the fresh official [Sequences and series](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617), [Financial mathematics](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048) and [Random variables](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) pages, with glossary placeholders resolved against the programme codename crosswalk:

- `ci01ed1e3f`: “Apply the formulas for arithmetic sequences and their partial sums to model and solve growth and decay problems involving a quantity that is a linear function of time”.
- `ci243a9af6`: “Apply the formulas for geometric sequences and series to model and solve growth and decay problems where a quantity is an exponential function of time”.
- `ci1c82cea2`: “Solve problems that involve reducing balance loans by calculating the total amount paid, equal periodic repayments, the amount still owing and the time taken to repay the loan”.
- `ci21651d90`: “Solve problems involving annuities in which payments are made at the end of each time period and the future value of an annuity is calculated at the end of one of these periods using the formula for the sum of the first n terms of a geometric sequence”.
- `cicfcb1105`: “Determine and use the probability density function f(x) = 1/(b − a) for a continuous uniform distribution for a random variable X taking values in the interval [a, b]”.
- `cie0de74be`: “Apply the empirical rule to make judgements and solve problems involving probabilities of normally distributed data: that for normal distributions, approximately 68% of data lie within one standard deviation of the mean, approximately 95% within two standard deviations of the mean and approximately 99.7% within three standard deviations of the mean”.
- `ci7d5b28b0`: “Apply the properties of a probability density function to solve problems and justify conclusions”.
- `cia0e71266`: “Solve problems involving probabilities, expectation and variance of discrete random variables”.

Independent exact-rational SymPy work is in `work/brief161/g03.py` and `.json`. The two interest models give $16000 and about $17908.48. The unrounded maximum loan is $488658.786235..., so $488658.78 is the greatest whole-cent principal within the stated repayment budget. The uniform tail is 1/10; the normal two-standard-deviation tail is about 2.5% by the empirical rule. The discrete and density normalisations give k = 1/10 and 1/8. The annuity attempt rounds to $25155.79 and the empirical-rule attempt to about 2.5%.

1. **Blocker:** Do not present a hard 40-to-60-minute bound as a given for an unbounded normal distribution. Use an interval of interest and separate alternative model givens, as in root decision 64.
2. **Should fix:** Explain the downward cent rounding from the unrounded loan result, not from the already rounded 79-cent display.
3. **Should fix:** Mark r ≠ 0 for the displayed finance quotients and give the zero-rate results separately.

These match the learning-review findings. The maximum-loan site's rounding issue is recorded separately. Count: 1 blocker, 2 should fix, 0 optional.
