# m-a12s03 maths check

Revision 1 source check, 4 November 2026. Independent calculation source: `work/brief162/s03.py` and `s03.json` (SymPy). No screen or voice check has been made.

The die has `E(X)=7/2`, `E(X²)=91/6`, variance `35/12` and standard deviation about `1.7078`. The example distribution `(0,1,2,3)` with probabilities `(0.1,0.3,0.4,0.2)` gives `μ=1.7`, `E(X²)=3.7`, variance `0.81`, standard deviation `0.9`, and weighted signed deviation zero. The four squared-deviation contributions total `0.289+0.147+0.036+0.338=0.810`. The interval `[0.8,2.6]` includes values 1 and 2 with total probability 0.7. The insurance example gives expected payout $210, expected profit $90, second moment 1,330,000, variance 1,285,900 and standard deviation about $1,133.98. Attempt 1 gives `μ=1.6`, second moment 3.2 and variance 0.64. Attempt 2 gives `a=0.3`, `b=0.5`; the rejected `a=b=0.4` has expectation 2.2. All checked arithmetic agrees with the design.

The four quoted 2024 syllabus action codenames are `ci5e2af56f`, `cief06313d`, `cib50250f9` and `cia0e71266`. The quoted strings in the design need a fresh word-for-word official-page confirmation; they have not been independently verified in this review.

1. **Should fix:** The teaching-check note saying 1.7 is left of 1.5 is false; the actual learner-facing calculation is correct.
2. **Should fix:** The running-mean trace needs a reproducible data sequence to support the claimed checkpoint values. The given 10-, 1,000- and 2,000-trial sums are mutually possible, but that alone is not a check of any actual animation data.

Site source errors listed in the design's Decisions are separately logged for root. Count: 0 blockers, 2 should fix, 0 optional.
