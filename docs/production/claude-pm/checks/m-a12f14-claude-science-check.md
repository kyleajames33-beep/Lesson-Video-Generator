# m-a12f14 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `21e2f4f51c4666bc74b05f00ad46361cfe0e73b4229e34b8d1e3a9cc696a960f`. Source-only check.

The 2024 action matches the fresh official [Financial mathematics page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4572a048) and programme codename crosswalk:

- `ci4720c3d8`: “Examine the effect of varying the amount initially invested, the value of the periodic payment, the interest rate and the duration of the annuity on the total value of the investment, using digital tools”.

Independent exact-rational SymPy calculations are in `work/brief161/f14.py` and `.json`. Base, doubled payment, initial balance, doubled rate, the four durations, both retirement timings and the two comparison plans agree to the stated cents. Doubling the unrounded base gives 40596.1078..., displayed as $40596.11, while twice the separately rounded base is $40596.10. The $9200 deposit is treated as given data rather than a current guarantee rate.

1. **Should fix:** Provide a learner-operated digital exploration, as in the learning review.
2. **Should fix:** Scope the claim that rate and time effects grow enormous to the positive-rate comparisons shown.
3. **Should fix:** Distinguish exact proportionality before rounding from separately rounded cent values.

These are the learning review findings. Confirmed lesson 18 numerical issues are recorded in the site log. Count: 0 blockers, 3 should fix, 0 optional.
