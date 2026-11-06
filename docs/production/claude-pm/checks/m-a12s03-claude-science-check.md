# m-a12s03 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `025f099c11c1907701c9f70b1491e959474fe0cfe797a0b269e5315ea1b1e3eb`. Source-only review.

The official [2024 Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. Its public rendering leaves glossary placeholders in some sentences; the local codename crosswalk resolves these, so this is not claimed as an independent fresh verification of every glossary expansion.

- `ci5e2af56f`: "Recognise the mean, or expected value, μ or E(X), of a discrete random variable X as a measure of centre for its distribution"
- `cief06313d`: "Generate and use the formulas E(X)=μ=ΣxP(x) and Var(X)=σ^(2)=Σ(x-μ)^(2)P(x)=Σx^(2)P(x)-μ^(2) for the random variable X, where Var(X) is the variance and σ is the standard deviation of the distribution"
- `cib50250f9`: "Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))"
- `cia0e71266`: "Solve problems involving probabilities, expectation and variance of discrete random variables"

Independent SymPy and enumeration evidence: `work/brief162/s02-s03.py` and `work/brief162/s03.json`. The mean 1.7, variance 0.81, weighted deviation sum 0, unweighted sum -0.8, insurance expectation 210 and variance 1,285,900 agree. The seeded 2,000-roll sequence reproduces sums 42, 332, 3,496 and 6,982 at the four checkpoints. A1 gives 1.6 and 0.64; A2 gives a=0.3 and b=0.5. The site ranking claim has a concrete counterexample: line A can have 85% at 50 with the rest at 50 plus or minus sqrt(4/15), while line B has 90% at 50 and the rest at 50 plus or minus sqrt(40). Their standard deviations are 0.2 and 2 respectively, but B has more components within 0.5.

Should fix: The Teaching checks say "Why 1.7 is left of 1.5". It is right of 1.5. Correct that author-only direction; scene 3 should place the fulcrum at the exact 1.7 rather than move it left of the midpoint. No narration addition is needed.

Should fix: Scene 7 says many policies make the long-run average take over, without addressing common claim risks. Replace the closing phrase with a same-length statement about many independent policies. This gives the averaging explanation its necessary modelling condition without introducing a separate insurance topic.

Count: 0 blockers, 2 should fix, 0 optional.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`ci5e2af56f`: Recognise the mean , or expected value , μ or E(X) , of a discrete random variable X as a measure of centre for its distribution

`cief06313d`: Generate and use the formulas E(X)=μ=ΣxP(x) and V a r ( X ) = ^( σ ) = Σ ^( ( x - μ ) ) P ( x ) = Σ ^( x ) P ( x ) - ^( μ ) for the random variable X , where Var(X) is the variance and σ is the standard deviation of the distribution

`cib50250f9`: Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))

`cia0e71266`: Solve problems involving probabilities, expectation and variance of discrete random variables

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
