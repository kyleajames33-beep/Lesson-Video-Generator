# m-a12s09 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `71d771777e638dfe69673b3a312c05928081ab4320c75ecd60b4020838212807`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `ci2ef338c4`: "Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena"
- `cib8d213fb`: "Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean"
- `ci9431590e`: "Identify contexts that can be approximately modelled by a normal random variable"
- `ci9f30e6a8`: "Use the notation X∼N(μ,σ^(2)) to represent a normally distributed random variable that has mean μ and standard deviation σ"
- `ci477a9380`: "Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ±∞"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

The stored seed reproduces all 13 histogram classes and all 13 peg bins. The middle path count is 924 of 4096, as decision 58 requires. The given chocolate tail gives middle probability 0.8904. N(64,16) has standard deviation 4. The peg board illustrates a discrete approximation, not exact normal data. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s09.json`.

1. **Should fix:** The source uses simulated bottle fills to introduce "these thousand bottle fills" without identifying them as simulated in that frame. Label the histogram simulated and replace the opening description with "these thousand simulated fills"; shorten a repeated reference to the target to fund the added word.

2. **Should fix:** Scenes 3 and 6 call a continuous, symmetric, single-peak shape a good normal fit. Those are useful clues but are also shared by non-normal densities. Add a brief comparison of the observed tails with the proposed bell, funded by replacing the repeated list of the same shape clues in scene 6. Do not present the checklist as a sufficient test.

Count: 0 blockers, 2 should fix, 0 optional; 5,641 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`ci2ef338c4`: Identify the normal distribution as a continuous probability distribution that is used to model many naturally occurring phenomena

`cib8d213fb`: Identify the graph of the probability density function of a normal distribution, the normal curve, as an ‘ideal’ bell-shaped curve, symmetrical about its mean which is equal to its mode and median, and as having most values concentrated about the mean

`ci9431590e`: Identify contexts that can be approximately modelled by a normal random variable

`ci9f30e6a8`: Use the notation X∼N(μ,σ^(2)) to represent a normally distributed random variable that has mean μ and standard deviation σ

`ci477a9380`: Represent probabilities associated with the normal distribution by areas of shaded regions under the normal curve, which may extend to ± ∞

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
