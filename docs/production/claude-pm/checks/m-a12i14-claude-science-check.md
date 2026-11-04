# m-a12i14 maths check

Revision 1, checked 3 November 2026. Source SHA-256 `99138775798e09da3f737e306ec4d98ace7c4ce731c7d4c1d8b2d40f5e4a07be`. Written proposal only.

Fresh official [Applications of calculus page](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104); CMS identifiers checked in `work/brief151/math-official-validation.json`:

- `ci80c103cc`: “Use differentiation to find and interpret the first and second derivatives, dQ/dt and d²Q/dt², in practical problems where a quantity Q is a function of time t”.
- `ci33a217e6`: “Use integration to solve practical problems on the rate of change of a quantity Q, where dQ/dt or d²Q/dt² is given as a function of time t, together with sufficient initial conditions”.
- `ci63604628`: “Determine the velocity and acceleration of a particle moving in a straight line given its displacement from a point as a function of time, and use the notation d²x/dt² or ẍ to represent acceleration”.
- `ci0c66d890`: “Solve problems relating to the motion of a particle moving in a straight line, using both differentiation and integration to connect the concepts of displacement, velocity and acceleration”.

SymPy evidence `work/brief130-python/i14.py` and `.json` confirms the derivatives and positions, −9/4 and −3 at 2.5, displacement 36, turning position −32/27, attempts −6 and 5, and handoff −1, 0, 9, 32. Summing leg lengths gives 44 and 64/27. Tank V=100+20t−t² has maximum 200 at 10 and returns to 100 at 20. The cited site wording on non-negative distance and acceleration-error drift is logged under item 75, with unsupported company specifics identified for verification. Count: 0 blockers, 0 should fix, 0 optional; approximately 531 seconds.
