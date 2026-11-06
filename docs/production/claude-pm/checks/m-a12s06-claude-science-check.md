# m-a12s06 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `3556c9c438fd0248ed8f7542b6dc5d16659af1f9e1e33ba8811cb3aec943dbc4`. Source proposal only; no stills, voiced preview or learner evidence.

Syllabus actions quoted from the source design:

- `ci189487ff`: "Find the mode from a given probability density function"
- `ci9d3ce54c`: "Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November; its embedded official CMS text and MathML are now verified in the fresh-quote audit below.

The hump window integrals are 0.0535 and 0.1495. For x/8, quartiles are 2, 2√2 and 2√3; for 3x²/8, the median is ∛4 and lower quartile ∛2. The lifetime median is 4-∛32, about 49.5 minutes. The attempt density integrates to 1 and has its maximum 16/9 at 2/3. The CDF attempt gives √3-1 after rejecting the other root. These agree. Independent SymPy evidence: `work/brief162/s04-s06.py` and `work/brief162/s06.json`.

1. **Should Fix:** Scene 2 says F has its highest point at the right-hand end "whatever the density". A distribution can have unbounded support, and even bounded examples have a whole flat region with value 1. Replace with "F accumulates probability; maximising it does not locate the peak of f". The replacement is shorter.

2. **Should Fix:** The symmetric hump example justifies its centred fixed-width window, but "it catches the most area where the curve is highest" should stay tied to that hump. For an arbitrary asymmetric density, a finite-width maximum-probability window need not centre on a mode. Replace "where the curve is highest" with "near the top of this symmetric hump", funded by shortening the following numeric comparison.

Count: 0 blockers, 2 should fix, 0 optional; 5,599 joined narration characters. The estimate is from the design, not measured audio. No narration or visual design was edited.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`ci189487ff`: Find the mode from a given probability density function

`ci9d3ce54c`: Use a cumulative distribution function to calculate the median and quartiles for a continuous random variable

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
