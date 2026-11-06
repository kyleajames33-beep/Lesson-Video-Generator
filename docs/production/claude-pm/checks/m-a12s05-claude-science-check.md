# m-a12s05 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `1621d0aa2d77bda48d559f417b75178cc25912898426e3ea071b5e6e13fc5644`. Source proposal only; no stills, voiced preview or learner evidence.

Syllabus actions quoted from the source design:

- `cicf91daa4`: "Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx"
- `ci660140f9`: "Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and ∫_{a}^(b)f⁡(x)dx=1 if the domain of f(x) is [a,b] , or ∫_{-∞}^(∞)f⁡(x)dx=1 if the domain of f(x) is all real x"
- `ci7d5b28b0`: "Apply the properties of a probability density function to solve problems and justify conclusions"
- `cic6439f2a`: "Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval [a,b]"
- `cibf3988c1`: "Find the probability density function from a given cumulative distribution function"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November; its embedded official CMS text and MathML are now verified in the fresh-quote audit below.

The two strip rises are 11/900 and 51/900. The density 2x/9 integrates to 1. The decreasing triangle gives k=1/8 and P(X<1)=7/16, with F=(8x-x²)/16. Differentiating x²(3-x)/4 gives 3x(2-x)/4. Attempt 1 gives k=1/4 and probability 5/8; attempt 2 gives (2-x)/2 inside and zero outside. These agree. Independent SymPy evidence: `work/brief162/s04-s06.py` and `work/brief162/s05.json`.

1. **Should Fix:** The quoted metadata contains the invisible function-application character in f⁡(x). Apply root decision 56 by stripping that character only, with no wording change.

2. **Should Fix:** The quoted ci c6439f2a action ends with [a,b], while the refreshed official page specifies (a,b]. Preserve the official interval form in the quotation and keep the lesson examples independently stated. This changes author metadata, not narration.

Count: 0 blockers, 2 should fix, 0 optional; 5,707 joined narration characters. The estimate is from the design, not measured audio. No narration or visual design was edited.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cicf91daa4`: Define a probability density function (PDF), f(x) , for a random variable X with cumulative distribution function F(x) as f(x)=F'(x) and recognise that P(a<X<b)=∫_{a}^(b)f(x)dx

`ci660140f9`: Recognise the properties of a probability density function: f(x)≥0 for all x in the domain of f(x), and _{∫}^( ) f ⁡ ( x ) dx = 1 if the domain of f(x) is [a,b] , or _{∫}^( ) f ⁡ ( x ) dx = 1 if the domain of f(x) is all real x

`ci7d5b28b0`: Apply the properties of a probability density function to solve problems and justify conclusions

`cic6439f2a`: Obtain the cumulative distribution function using the formula F(x)=∫_{a}^(x)f(t)dt where f(x) is a given probability density function defined on the interval [a,b]

`cibf3988c1`: Find the probability density function from a given cumulative distribution function

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
