# m-a12s02 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `7c8322b5a67c655423d4f77d0f3daa31cd2684a7f847b6be4d9fcd2b56b48be1`. Source-only review.

The official [2024 Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. Its public rendering leaves glossary placeholders in some sentences; the local codename crosswalk resolves these, so this is not claimed as an independent fresh verification of every glossary expansion.

- `ci6ab13b73`: "Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes"

Independent SymPy and enumeration evidence: `work/brief162/s02-s03.py` and `work/brief162/s02.json`. All 36 ordered outcomes, letter counts, inclusive ranges, inverse probabilities and spinner remainder groups agree. The ratio 15/75 equals 1/5, so that crossed method is wrong reasoning rather than a different numeric answer. The scene explains the failure on 25/75 correctly.

Should fix: Scene 2 ends with "chosen at random from a finite list: uniform model". Random selection alone does not assert equal selection probabilities. Replace with "chosen with equal chances from a finite list" in speech and the chip. This funds itself by replacing the existing sentence rather than adding a new explanation.

Should fix: Scene 3 attributes equal probabilities of the 36 ordered pairs to fair dice alone. State independent rolls in the task or joint-outcome sentence. Fair marginal distributions can be dependent. Replace "with fair dice" with "with independent fair dice"; fund the few extra characters by shortening "So the outcomes are uniform" to "The outcomes are uniform".

Should fix: Apply root decision 54 to feedback 2, estimated about 32 seconds. Cut the repeated listing of all sector numbers from speech after showing their three groups; retain the counts, probabilities and reason. The visible question and grouped sectors stay available.

Count: 0 blockers, 3 should fix, 0 optional.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`ci6ab13b73`: Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
