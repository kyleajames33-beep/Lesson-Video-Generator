# m-a12s07 maths check

Revision 1 source-only check, 4 November 2026. Exact SymPy calculations and recorded arrival subtraction are in `work/brief162/s07-s09.py` and `.json`.

The five bus waits are 6.9, 1.4, 6.0, 8.3 and 3.6 minutes. A uniform model on `[0,10]` has density `1/10`, CDF `t/10` on that interval and probabilities `P(T<4)=0.4`, `P(3<T<7)=0.4`. On `[1,5]`, density is `1/4`, `F(3.5)=5/8`, upper probability `3/8` and `P(2≤T≤4)=1/2`. On `[2,10]`, `P(4<X<7)=3/8`. Attempt 1 has density `1/5` on `[3,8]` and target probability `1/2`. Attempt 2 gives `k=8` and `P(X<3)=3/8`. All displayed values check.

The 2024 syllabus quote and codename require a fresh official-page check. A uniform waiting time is a model, not a conclusion from the five example arrival times.

1. **Should fix:** Label the uniform assumption when switching from observed arrivals to the model.
2. **Should fix:** Preserve density units and the `0` branch outside each support in the eventual visuals.

Count: 0 blockers, 2 should fix, 0 optional.
