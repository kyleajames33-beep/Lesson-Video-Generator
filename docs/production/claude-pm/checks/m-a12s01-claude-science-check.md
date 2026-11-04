# m-a12s01 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `33e8d3751cbd5985941c2d12d845de6970295794c003fa06aa3a2f9df8ea52`. Source-only check.

The 2024 actions match the fresh official [Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54), with glossary placeholders resolved against the programme codename crosswalk:

- `ci33ef8834`: “Use the relative frequencies of discrete random variable datasets to estimate the probabilities that the random variable X takes each of its values, and explain why these estimated probabilities add to 1”.
- `ci49013884`: “Denote the probability that the discrete random variable X takes the value x by P(X=x), or by P(x) if the discrete random variable X is understood”.
- `cicc08703c`: “Define a discrete probability distribution to be the set of values x taken by a discrete random variable X, together with the probabilities P(x) that x is the outcome of the experiment”.
- `cif1d51f9d`: “Generate a probability distribution for a given discrete random variable and represent the probability distribution in graphical and tabular form”.

Independent exact SymPy evidence is `work/brief162/s01.py` and `.json`: the die counts total 200, the fair-coin probabilities are 1/8, 3/8, 3/8, 1/8, and the counter pairs give 1/6, 4/6, 1/6 under equally likely pairs. The exact fair-die tail is approximately 0.21226, but root decision 54 replaces that unexplained claim with the listed simulation sentence.

1. **Should fix:** Apply the decision 54 replacement and remove the tail readout.
2. **Should fix:** Scope the sum-to-one argument to exhaustive, nonoverlapping recorded outcomes with one value per trial.

These are the learning-review findings. The discrete-bar area label is logged separately. Count: 0 blockers, 2 should fix, 0 optional.
