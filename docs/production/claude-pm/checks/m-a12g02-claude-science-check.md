# m-a12g02 maths check

Revision 1, checked 4 November 2026. Source SHA-256 `db29a9225da489a50a7500de3e9dcac0384d1aed3c4f54f2e0d0bf2eec9d806c`. Source-only check.

The practised 2024 actions match the fresh official [Integral calculus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f) and [Applications of calculus](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104) pages, with notation linearised and IDs checked against the programme crosswalk:

- `ci6f5c83b7`: “Determine f(x), given f′(x) and an initial condition f(a) = b where a and b are constants”.
- `ci6dc07a10`: “Apply ∫_a^b f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course”.
- `ci22db0117`: “Establish and use ∫ e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫ f′(x) e^(f(x)) dx = e^(f(x)) + C”.
- `ci060b93b3`: “Establish and use ∫ (u′/u) dx = ln|u| + C, where u is a function of x, or ∫ (f′(x)/f(x)) dx = ln|f(x)| + C, on a domain where f(x) ≠ 0”.
- `cicfcd020a`: “Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided”.
- `cicd64da60`: “Use the Trapezoidal rule to approximate integrals”.
- `ci33a217e6`: “Use integration to solve practical problems on the rate of change of a quantity Q, where (dQ/dt) or (d²Q/dt²) is given as a function of time t, together with sufficient initial conditions”.
- `ci0c66d890`: “Solve problems relating to the motion of a particle moving in a straight line, using both differentiation and integration to connect the concepts of displacement, velocity and acceleration”.

Independent SymPy evidence is in `work/brief161/g02.py` and `.json`. The rate change e − 1, initial-condition volume, zero displacement and 8/3 distance, 35 L trapezium estimate, 25 L tank answer and ln 10 total area agree. Each worked model is justified by its givens; the four walkthroughs fall under the practice exception.

1. **Should fix:** Replace “nothing to integrate” for a data-only rate with the accurate claim that readings alone do not determine the exact integral between them. This matches the learning review.

The exact 2024 reference-sheet version remains unverified; the stated trapezium expressions are equivalent. Root decision 63's feedback trim remains required. Count: 0 blockers, 1 should fix, 0 optional.
