# m-a12s02 maths check

Revision 1 source-only check, 4 November 2026. No animated output or audio was inspected.

The design quotes `ci6ab13b73` from the project's 2024 Mathematics Advanced Year 12 crosswalk: “Define a discrete random variable to be uniformly distributed if it has finitely many values, all with the same probability, and use it to model random phenomena with equally likely outcomes”. The codename and quoted wording agree with that crosswalk. Fresh verification against the NSW public source page remains pending and must not be recorded as completed.

Independent calculation script: `work/brief162/s02.py`, with machine-readable output `s02.json` once the SymPy runtime is available. Checked values are: two fair distinguishable dice have 36 ordered outcomes with sum counts `1,2,3,4,5,6,5,4,3,2,1`; STATISTICS has S=3, T=3, I=2, A=1, C=1; three of digits 0–9 are at least 7; the integers 5–20 inclusive number 16 and four exceed 16; `1/0.04 = 25` and `1/0.3 = 10/3`; the first attempt gives `3/10`; and the spinner remainder counts are `2,3,3`. The probability derivation `nc=1`, `c=1/n` requires finite positive n. The infinitely many equally weighted outcomes argument is valid for a countably infinite set. The main numerical trap is deliberate: `15/75=1/5` despite the false method, whereas `25/75=1/3`, not `1/5`.

1. **Should fix:** The scene 6 crossed method must visually show its counterexample, because the original numbers happen to agree.
2. **Should fix:** The scene 7 growing-total demonstration must remain matched to the spoken reasoning, or the finite-support condition risks sounding arbitrary.
3. **Should fix:** Trim feedback 2 in line with root decision 54 without losing its computed groups.

No conflicting arithmetic has been found in the source. The exact maths quote still needs an official-live-source confirmation. Count: 0 blockers, 3 should fix, 0 optional.
