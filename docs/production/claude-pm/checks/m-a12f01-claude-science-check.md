# m-a12f01 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `ac5086d7354d92393a4fed4b111078f8e9aa155e4436d649a81ffa48e31e12b4`. Source-only check; no design, audio, animation or playback was changed or tested.

The six 2024 points, with notation linearised, agree with the fresh official [Sequences and series page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa8db67617) and the local codename crosswalk. The official page renders its glossary term as “Loading”; the crosswalk identifies that term as sequence.

- `ci0835b75e`: “Define a sequence as an ordered list of objects”.
- `cie99a9951`: “Use the notation a_n, where n is a positive integer, to represent the nth term of a sequence”.
- `ci942a2e23`: “Distinguish between a finite sequence a_1, a_2, …, a_m that terminates at its mth term, for some whole number m ≥ 1, and an infinite sequence a_1, a_2, … that never terminates”.
- `ci6cbe66dc`: “Define the nth partial sum S_n of a sequence a_1, a_2, … to be the sum of the first n terms of the sequence: S_n = a_1 + a_2 + … + a_n, for all whole numbers n ≥ 1”.
- `ci042665ba`: “Define a series formally as the sum of the terms of an infinite sequence and use the notation a_1 + a_2 + a_3 + … for the series corresponding to the sequence a_1, a_2, a_3 …”.
- `ci291b45f0`: “Use summation notation to represent the sum of terms a_i to a_j of a sequence where j > i, ∑_{k=i}^{j} a_k = a_i + a_{i+1} + a_{i+2} + … + a_{j−1} + a_j”.

Independent SymPy work is in `work/brief161/f01.py` and `.json`. The particle positions, 2n terms and partial sums, 16 and 135 sigma examples, first-five-term total 45, first-ten-odd total 100, both attempts (44 and 20), crossed 28, and +4 handoff agree. The design's term counts and a_50 = 100 also agree. Positive integer position and the finite integer range are present in the examples. Site-derived numbers are retained.

1. **Should fix:** The example changes the summation index from k to j immediately after j is introduced as the fixed upper limit. Change the dummy index in the numerical builder to m and retain j as the upper limit; this is the same finding as the learning review.

Verified site findings are recorded in `site-corrections-maths-a12.md`. Count: 0 blockers, 1 should fix, 0 optional.
