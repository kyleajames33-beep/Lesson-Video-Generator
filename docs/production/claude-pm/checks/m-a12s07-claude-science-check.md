# m-a12s07 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `3ebddcd752f1aac4a64d905278d092628e6d7a59bd8cd3d92018c8b277c2493a`. Source proposal only; no actual motion, voiced preview or student learning evidence inspected.

Source design syllabus quotations:

- `cicfcb1105`: "Determine and use the probability density function f(x)=(1)/(b-a) for a continuous uniform distribution for a random variable X taking values in the interval [a,b]"

The [official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54) was refreshed on 4 November. The embedded official CMS text and MathML have now been verified; see the fresh-quote audit below.

The uniform widths, train probabilities, translated CDF and both attempts agree. Keep the rounding-error example as a possible model, as decision 58 directs, rather than a claim that every rounded measurement has uniform error. Independent calculations: `work/brief162/s07-s12.py` and `work/brief162/s07.json`.

1. **Should fix:** Scenes 1 and 9 treat not checking the timetable as sufficient for uniform waits. State that arrival phase is uniform over the regular ten-minute cycle, independently of the service. Replace the existing unchecked-timetable phrase with that condition; do not add a separate discussion.

2. **Should fix:** Scene 2 says the window can slide anywhere along the axis without changing probability. Restrict the whole window to the supported interval. Replace "anywhere along the axis" with "within zero to ten".

Count: 0 blockers, 2 should fix, 0 optional; 5,604 joined narration characters. Design timing is not measured audio.

## Fresh official quote verification (4 November 2026)

The public page wording was recovered from its embedded official CMS components, including the visible glossary-link text and complete MathML. This resolves the earlier public-rendering placeholder limitation. Mathematical typography below is linear; the unchanged original MathML is preserved with each item.

`cicfcb1105`: Determine and use the probability density function f(x)=(1)/(b-a) for a continuous uniform distribution for a random variable X taking values in the interval [a,b]

[Official Random variables page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54). Source snapshot: `work/brief162/official-random-variables.json`; item hashes: `work/brief162/official-quote-audit.json`. The sample/reference-sheet table form remains a separate unresolved check.
