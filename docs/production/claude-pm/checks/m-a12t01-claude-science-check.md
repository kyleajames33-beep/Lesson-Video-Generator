# m-a12t01 maths check

Revision 1, 2 November 2026. Design SHA256 `d33b492dd25ebd8b93875d9ed038354edac1422e4227be853abeed3213e9cde5`. Independent SymPy and numeric evidence: `work/brief153/t01-calculations.py` and JSON. Design unchanged.

## Official syllabus and route

Fresh 2024 Year 12 source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67 . Content-system codenames, with MathML linearised:

- `ciaa74eede`: “Use graphing applications to explore reflections, translations and dilations of, and confirm that the principles of transformations hold for, the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x”.
- `cic7027e0d`: “Apply the principles of transformations to graph transformations of the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x, describe which transformations have been applied to y = f(x) and determine the domain, range, horizontal translation, vertical translation, dilation factor, period and amplitude when applicable”.

The proposed learner question and route address these points; actual learner graphing-app exploration still needs the invited activity. The scope b > 0 is deliberate; tangent has no amplitude and excludes its poles. i05's final chips and eight rectangles match the opening, and t02 receives the unsolved intersection question.

## Mathematical checks

The site hook gives 3, -1 and 2 at π/3, 4π/3 and 0. Factoring sin(2x + π) gives -sin 2x; shifting sin 2x left π returns sin 2x. The unchanged site Problem 1 gives values -1, -4, -1, 2, -1, -4 at 0, π/4, π/2, 3π/4, π, 5π/4, period π and range [-4,2]. Site SA1 gives 2, 2, 6 at π/6, 5π/6, π/2 and period 2π/3. tan 2x has poles π/4 + kπ/2 and tan(x/2)+1 has poles π+2kπ, period 2π and range all real. Site card values, shifts and listed multiple choice answers checked against the named site source and recalculated cases.

**Should fix:** Scene 5's general 2π/b rule must be explicitly scoped to sine/cosine and b > 0 in speech; replace its repetition as described in the learning review. The later tangent example correctly uses π/b. No blocker. Site corrections logged separately; coverage note about transformed tangent is not a factual error. Count: 0 blockers, 1 should fix, 0 optional.
