# m-a12s08 maths check

Revision 1 source-only check, 4 November 2026. Exact integrations and midpoint sums were repeated with SymPy in `work/brief162/s07-s09.py`.

Uniform `[1,5]` has mean 3 and variance `4/3`. For `f(x)=x/8` on `[0,4]`, `E(X)=8/3`, `E(X²)=8`, variance `8/9` and standard deviation `2√2/3`. The midpoint estimates for 4, 8 and 16 strips are exactly `21/8`, `85/32` and `341/128`. For `f(x)=½sin(x)` on `[0,π]`, the total density area is 1, mean `π/2`, second moment `(π²-4)/2` and variance `π²/4-2`. Attempt 1's `2x` density on `[0,1]` gives mean `2/3`, second moment `1/2` and variance `1/18`. Attempt 2 with `cos(x)` on `[0,π/2]` gives mean `π/2-1` and variance `π-3`. The figures agree with the source.

The `½sin(x)` example's integrals involving `x` are explicitly outside the intended hand-calculation scope. The mathematical result is correct, but the presentation needs to preserve that course boundary. Official-live-syllabus quote matching remains open.

1. **Should fix:** Mark the displayed strip values approximate until the exact integral is evaluated.
2. **Should fix:** Verify that the app result is not taught as a required analytic integration technique.

Count: 0 blockers, 2 should fix, 0 optional.
