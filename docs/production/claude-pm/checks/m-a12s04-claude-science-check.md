# m-a12s04 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `113eb1d24a8aa1c18509ba0ecb1239a285b4dd85b2dd742655c0f5d008c92175`. Source proposal only; no stills, voiced preview or learner evidence.

Syllabus actions quoted from the source design:

- `cibf81b169`: "Estimate the probability that a continuous random variable falls in some interval using relative frequencies and histograms obtained from data"
- `ci04530a48`: "Recognise that the probability of a particular value for a continuous random variable is 0 and hence that P(a<X<b)=P(a≤X<b)=P(a<X≤b)=P(a≤X≤b) since P(X=a)=P(X=b)=0 when X is a continuous random variable"
- `ci9dad7e9e`: "Define the cumulative distribution function (CDF), F(x) , as the probability of a random variable, X , having values less than or equal to x , so F(x)=P(X≤x) and P(a≤x≤b)=F(b)-F(a)"
- `cicb65fc88`: "Recognise that the cumulative distribution function, F(x) , is non-decreasing for all x in its domain, and graph cumulative distribution functions, given a formula for F(x) , with and without graphing applications"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November; its embedded official CMS text and MathML are now verified in the fresh-quote audit below.

All class totals, relative frequencies, cut-class estimates, the x²/9 CDF differences and both attempt probabilities agree with the independent exact calculations. The first attempt is 0.3 and the second is 1/2. The one-value probability argument applies to the ideal continuous model, rather than rounded instrument readings. Independent SymPy evidence: `work/brief162/s04-s06.py` and `work/brief162/s04.json`.

1. **Should Fix:** Scene 2 guarantees that enough decimal places make every recorded time distinct. Finite-resolution measurements can repeat. Replace with "For an ideal continuous measurement, exact repeats have probability zero" and keep the display readings distinct from exact underlying times. Shorten "a count for each value is just a list of ones" to fund it.

2. **Should Fix:** Scene 9 says F reaches 1 once x is past every possible value. This describes bounded support, not every continuous variable, including the later normal model. Replace the general sentence with "For this bounded example, F reaches one beyond the range". No extra sentence is needed.

3. **Should Fix:** The reaction-time counts are presented as results from two hundred students, but no actual study or dataset is cited. Mark the table and dot plot illustrative and say "an example set of reaction times". Replace the existing introductory phrase, with no added scene.

Count: 0 blockers, 3 should fix, 0 optional; 6,430 joined narration characters. The estimate is from the design, not measured audio. No narration or visual design was edited.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cibf81b169`: Estimate the probability that a continuous random variable falls in some interval using relative frequencies and histograms obtained from data

`ci04530a48`: Recognise that the probability of a particular value for a continuous random variable is 0 and hence that P(a<X<b)=P(a≤X<b)=P(a<X≤b)=P(a≤X≤b) since P(X=a)=P(X=b)=0 when X is a continuous random variable

`ci9dad7e9e`: Define the cumulative distribution function (CDF) , F(x) , as the probability of a random variable, X , having values less than or equal to x , so F(x)=P(X≤x) and P(a≤x≤b)=F(b)-F(a)

`cicb65fc88`: Recognise that the cumulative distribution function, F(x) , is non-decreasing for all x in its domain , and graph cumulative distribution functions, given a formula for F(x) , with and without graphing applications

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
