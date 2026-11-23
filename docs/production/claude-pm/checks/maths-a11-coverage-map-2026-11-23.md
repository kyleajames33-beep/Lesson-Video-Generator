# Year 11 Mathematics Advanced: coverage map (23 November 2026)

Independent audit companion to `maths-a11-coherence-audit-2026-11-23.md`. Read only: no design, outline, route or site file was changed.

**Sources.**
- Syllabus points: `docs/production/programme/syllabus/maths-advanced-2024-y11-crosswalk.json`, with 201 points from the NSW Curriculum 2024 pages, read by brief 243 on 16 Nov 2026. Site status there: 170 covered, 25 partial, 6 missing.
- Owners: `programme/maths-a11-course-outline.json` (`contentPointOwners`), with root's 17 Nov splits applied (t02 into t02a and t02b; t14 and t15 into a and b parts).
- Designs: the 93 live designs in `claude-pm/lessons/math-a11-*.md`. `math-a11-t02.md` is a split stub.
- Site: the read-only clone `C:/Users/kygs/teaching-app-fix`, branch main at `5d74a6272` (16 Nov 2026), folder `subjects/maths-advanced/year11/`.

**Method.**
- "Owner" is the outline owner.
- "Also quoted in" lists other designs whose text contains the point's codename. This is a mechanical grep, so it includes recalls and "not taught" notes.
- A point passes when every owner quotes it and the owner's boundary teaches it.
- For the six site-missing points, I read the owning design's boundary and scenes to confirm the teaching.
- Site status is taken from the crosswalk. The site-lesson tables use the outline's source column.

**Result.**
- All 201 points have an owning design.
- 200 of the 201 are quoted by every owner. The exception is `cif79ffa41`: t14a and t14b own it jointly, but only t14a quotes it (audit N-6).
- All six site-missing points get original teaching from their owners (w30, t11, t12, e02, g03 and s08).
- Every point taught by more than one design has a recorded reason (see the topic notes).
- The site has 103 Year 11 lesson files. 13 carry a retirement notice. Four more are unused by design: two Working with functions synthesis pages, the second-derivative page (Year 12 content) and the exponentials synthesis page. The other 86 are each a source for at least one design.

## 1. Working with functions

71 points (site: 61 covered, 9 partial, 1 missing). Owning designs: w01, w02, w03, w04, w05, w06, w07, w08, w09, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `cib0d54c54` | Use index laws to simplify expressions and solve problems involving positive, negative, zero or fractional indices | Algebraic techniques | covered | w01 | - |
| 2 | `ci3ccce138` | Expand, factorise and simplify algebraic expressions | Algebraic techniques | covered | w02 | - |
| 3 | `ci9c1a8604` | Simplify expressions involving algebraic fractions | Algebraic techniques | covered | w02 | - |
| 4 | `ci554a24b4` | Expand and simplify expressions involving surds | Algebraic techniques | covered | w03 | - |
| 5 | `ci1ca81758` | Identify a conjugate of √a ± √b, and rationalise the denominators of expressions of the form a/(√b ± √c) and (√a ± √d)/(√b ± √c), where a, b, c and... | Algebraic techniques | covered | w03 | - |
| 6 | `cia7d436df` | Solve quadratic equations ax^2 + bx + c = 0 by factorisation, completing the square and using the quadratic formula x = (-b ± √(b^2 - 4ac))/(2a) wh... | Algebraic techniques | covered | w04 | - |
| 7 | `ci887fe9c5` | Define the discriminant as Δ = b^2 - 4ac and use it to solve problems involving the number of real roots of a quadratic equation and determine the... | Algebraic techniques | covered | w05 | - |
| 8 | `ci32f9832a` | Describe a relation between two sets as an association between the elements of one set and the elements of the other set | Introduction to functions and relations | partial | w07 | - |
| 9 | `cic0b5416c` | Define a real function f of a real variable x as a relation where each element x of a given set is associated with exactly one element y of the sec... | Introduction to functions and relations | covered | w07 | - |
| 10 | `ci9288f9fe` | Recognise that a relation is a rule which can be represented by an algebraic formula, a table of values, a set of ordered pairs (x, y) or a graph | Introduction to functions and relations | covered | w07 | - |
| 11 | `ci5022c700` | Use the notation f(x) to identify the unique value of y associated with x when working with functions, and refer to it as the value of f at x | Introduction to functions and relations | covered | w08 | - |
| 12 | `ci5a13079c` | Refer to x in a function y = f(x) as the independent variable of the function, and refer to y as the dependent variable | Introduction to functions and relations | covered | w08 | - |
| 13 | `cifb29dab7` | Substitute numeric and algebraic expressions into the formulas of functions | Introduction to functions and relations | covered | w08 | - |
| 14 | `ci9bf331ec` | Apply the vertical line test on the graph of a relation to determine whether it represents a function | Introduction to functions and relations | covered | w07 | - |
| 15 | `ci7b72a364` | Define the domain of a function f as the set of real numbers on which f is defined | Introduction to functions and relations | covered | w09 | - |
| 16 | `ci0d9e1578` | Define the range of a function f as the set of values of f(x) obtained as x varies over the domain of f | Introduction to functions and relations | covered | w09 | - |
| 17 | `ci9169adaa` | Refer to a value in the domain of a function at which the function is 0 as a zero of the function | Introduction to functions and relations | covered | w14 | - |
| 18 | `ci40fe4286` | Recognise that the x-intercepts of the graph of y = f(x) are its zeroes, the solutions of f(x) = 0, and that the y-intercept is f(0) | Introduction to functions and relations | partial | w14 | - |
| 19 | `ci7f902bc1` | Determine the equations of straight lines in gradient–intercept form y = mx + c with gradient m and y-intercept c | Linear functions | covered | w10 | - |
| 20 | `ci2edbbb14` | Determine the equations of straight lines in general form ax + by + c = 0, where a, b and c are constants | Linear functions | covered | w10 | - |
| 21 | `cibddcc59d` | Determine the equation of a straight line passing through a point (x_1, y_1) with gradient m using the point–gradient formula y - y_1 = m(x - x_1) | Linear functions | covered | w10 | - |
| 22 | `ci3ed3083c` | Determine the equation of a straight line passing through two points (x_1, y_1) and (x_2, y_2) by calculating its gradient m using the formula m =... | Linear functions | covered | w10 | - |
| 23 | `cicbb8a9c7` | Determine the x-intercept and y-intercept of a straight line given its equation | Linear functions | covered | w11 | - |
| 24 | `ci13d47f71` | Choose and apply appropriate techniques to graph a straight line given its equation | Linear functions | covered | w11 | - |
| 25 | `cif0d11ebe` | Find the equation of a line that is parallel or perpendicular to a given line | Linear functions | covered | w11 | - |
| 26 | `ci6e28857f` | Solve linear inequalities and graph the solution on a number line | Linear functions | covered | w06 | - |
| 27 | `ci7b0b3647` | Identify the x-intercepts of a parabola whose quadratic function is expressed in factored form | Quadratic and cubic functions | covered | w14 | - |
| 28 | `cicd85f895` | Use the discriminant to determine the number of x-intercepts on a parabola and justify its position in relation to the x-axis | Quadratic and cubic functions | covered | w14 | - |
| 29 | `ci9c3bd164` | Show by completing the square on the general quadratic y = ax^2 + bx + c that the axis of symmetry is x = -b/(2a) where a, b and c are constants | Quadratic and cubic functions | covered | w15 | - |
| 30 | `ci9f2c04cb` | Identify the axis of symmetry and vertex of a parabola by completing the square on its quadratic function | Quadratic and cubic functions | covered | w15 | - |
| 31 | `cice1a96a6` | Choose and apply appropriate techniques to graph a parabola of the form y = ax^2 + bx + c by identifying its x-intercepts if they exist, its y-inte... | Quadratic and cubic functions | covered | w16 | - |
| 32 | `cif56630dd` | Find the equation of a parabola given sufficient graphical features | Quadratic and cubic functions | covered | w16 | - |
| 33 | `ci3086d97f` | Use the fact that two quadratic functions are equal for all values of x if and only if the corresponding coefficients are equal to solve related pr... | Quadratic and cubic functions | covered | w16 | - |
| 34 | `cie66d7ae0` | Recognise that solving f(x) = k for some constant k corresponds to finding the x-coordinate(s) of the intersection of the graphs y = f(x) and y = k | Quadratic and cubic functions | covered | w17 | - |
| 35 | `ci6d7b74df` | Solve problems by finding the solution to simultaneous equations involving a linear and a quadratic function, or two quadratic functions, both alge... | Quadratic and cubic functions | covered | w17 | - |
| 36 | `cie9a8bd69` | Solve quadratic inequalities | Quadratic and cubic functions | covered | w18 | - |
| 37 | `ci5c1f54ca` | Recognise and graph cubic functions of the form f(x) = kx^3 and f(x) = k(x - a)(x - b)(x - c), where a, b, c and k are constants and k ≠ 0 | Quadratic and cubic functions | covered | w20 | - |
| 38 | `cie579a8c2` | Graph functions of the form f(x) = k/x, where k is a constant and k ≠ 0, and identify their hyperbolic shape and their asymptotes | Reciprocal functions | covered | w21 | - |
| 39 | `cibf45b7e8` | Describe the behaviour of f(x) = k/x as x → ∞ and x → -∞ | Reciprocal functions | covered | w21 | - |
| 40 | `ci4cd0c8d9` | Construct and use linear functions to model and solve problems in real-world situations, identifying the independent and dependent variables and an... | Constructing and using functions | covered | w12 | - |
| 41 | `ci7fdca2b4` | Use linear inequalities to model and solve problems in real-world situations, and justify conclusions in the context of the problem | Constructing and using functions | covered | w12 | - |
| 42 | `ci83587815` | Solve practical problems involving a pair of simultaneous linear equations both algebraically and graphically, with and without graphing applicatio... | Constructing and using functions | partial | w13 | - |
| 43 | `cicb50e7a8` | Construct and use simultaneous equations to model and solve a problem where cost and revenue are represented by linear equations, identify and anal... | Constructing and using functions | covered | w13 | - |
| 44 | `ci6ee9e4ed` | Model and solve practical problems involving quadratic functions and justify conclusions in the context of the problem | Constructing and using functions | covered | w19 | - |
| 45 | `ci388144c4` | Develop models of the form y = kx^n, where k is a non-zero constant, from descriptions of situations in which one quantity varies directly with ano... | Direct and inverse variation | partial | w22 | - |
| 46 | `cie81af7cc` | Develop the model y = k/(x^n), where k is a non-zero constant, from descriptions of situations in which one quantity varies inversely with another | Direct and inverse variation | partial | w23 | - |
| 47 | `ci52779ff4` | Evaluate k in the equations y = kx^n and y = k/(x^n), given one pair of values for the variables, and use the resulting formula to find other value... | Direct and inverse variation | partial | w22, w23 | - |
| 48 | `ci70194fe3` | Analyse and solve problems involving direct and inverse variation | Direct and inverse variation | covered | w22, w23 | - |
| 49 | `ci6022d0ef` | Derive the equation of a circle of radius r with centre at the origin by considering Pythagoras’ theorem | Circles and semicircles | covered | w24 | - |
| 50 | `cib62f4915` | Graph circles of the form x^2 + y^2 = r^2 from their equations | Circles and semicircles | covered | w24 | - |
| 51 | `ci7cdb9b15` | Determine the equation of a circle of the form x^2 + y^2 = r^2 given its graph | Circles and semicircles | covered | w24 | - |
| 52 | `ci86be862c` | Identify and graph the semicircles y = √(r^2 - x^2), y = -√(r^2 - x^2), x = √(r^2 - y^2) and x = -√(r^2 - y^2) | Circles and semicircles | covered | w25 | - |
| 53 | `ci4d0e93cc` | Extend the definitions of domain and range to relations | Properties of functions, relations and graphs | covered | w24 | - |
| 54 | `ms_s6_y11_recognise_domains_and_ranges_of_function` | Recognise domains and ranges of functions and relations given in interval notation, as inequalities and as worded descriptions | Properties of functions, relations and graphs | covered | w09 | - |
| 55 | `ci0c0bc407` | Determine and describe the domain and range of functions and relations, using interval notation, inequalities or worded descriptions | Properties of functions, relations and graphs | covered | w09 | - |
| 56 | `cib9db148d` | Define a function to be even if its graph is unchanged under reflection in the y-axis, and odd if its graph is unchanged under rotation of 180° abo... | Properties of functions, relations and graphs | covered | w26 | - |
| 57 | `cif29d187f` | Develop and use the tests that a function f(x) is odd if f(-x) = -f(x) and a function f(x) is even if f(-x) = f(x) | Properties of functions, relations and graphs | covered | w26 | - |
| 58 | `ci05dfc018` | Solve problems involving even and odd functions | Properties of functions, relations and graphs | covered | w26 | - |
| 59 | `ci51d03f31` | Use the composite function f(g(x)), where the output of g(x) becomes the input of f(x) | Properties of functions, relations and graphs | covered | w27 | - |
| 60 | `ci82a0c261` | Determine the equations of composite functions | Properties of functions, relations and graphs | covered | w27 | - |
| 61 | `ci5b30234d` | Interpret piecewise-defined functions, where the function is defined differently in different parts of the domain | Piecewise-defined functions | covered | w28 | - |
| 62 | `ci088a8d02` | Graph piecewise-defined functions involving functions covered in the scope of the Mathematics Advanced course, test if they are even or odd, and de... | Piecewise-defined functions | partial | w28 | - |
| 63 | `ci903515d1` | Define informally that a function is continuous at a point if the curve can be drawn through the point without lifting the pen off the paper | Piecewise-defined functions | covered | w29 | - |
| 64 | `ci1486e4cc` | Identify points where piecewise-defined functions and other functions are not continuous | Piecewise-defined functions | covered | w29 | - |
| 65 | `ci91b5bbaa` | Define a discontinuity of a function informally as a point where the function is not continuous | Piecewise-defined functions | covered | w29 | - |
| 66 | `cib39edbb7` | Define the absolute value \|x\| of a number x, also known as the magnitude of x, to be the distance from the origin to x on the number line | Absolute value functions | covered | w30 | - |
| 67 | `ci25113162` | Establish and use the piecewise definition \|x\| = {x, for x ≥ 0; -x, for x < 0 | Absolute value functions | covered | w30 | - |
| 68 | `cidb25f0cc` | Show using numerical substitutions that √(x^2) = \|x\| and use the result | Absolute value functions | missing | w30 | - |
| 69 | `ci81e0ec50` | Graph the function y = \|x\|, describe its symmetry, and identify its domain and range | Absolute value functions | covered | w31 | w30 |
| 70 | `ci0614b169` | Graph y = \|ax + b\| with and without graphing applications, and identify its symmetry, domain and range | Absolute value functions | partial | w31 | - |
| 71 | `ci9fc969f0` | Solve absolute value equations of the form \|ax + b\| = k algebraically and graphically | Absolute value functions | partial | w31 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `algebraic-techniques-and-inequalities/lesson01` | Solving Linear Inequalities | w06 |  |
| `algebraic-techniques-and-inequalities/lesson02` | Inequalities on a Number Line and in Interval Notation | w06 |  |
| `algebraic-techniques-and-inequalities/lesson03` | Modelling with Linear Inequalities | w12 |  |
| `algebraic-techniques-and-inequalities/lesson04` | Index Laws | w01 |  |
| `algebraic-techniques-and-inequalities/lesson05` | Expanding, Factorising and Simplifying | w02 |  |
| `algebraic-techniques-and-inequalities/lesson06` | Algebraic Fractions | w02 |  |
| `algebraic-techniques-and-inequalities/lesson07` | Surds | w03 |  |
| `algebraic-techniques-and-inequalities/lesson08` | Conjugates and Rationalising Denominators | w03 |  |
| `algebraic-techniques-and-inequalities/lesson09` | Solving Quadratic Equations | w04 |  |
| `algebraic-techniques-and-inequalities/lesson10` | The Discriminant | w05 |  |
| `algebraic-techniques-and-inequalities/lesson11` | Quadratic Inequalities | w18 |  |
| `working-with-functions/lesson01` | Functions & Relations | w07, w08 |  |
| `working-with-functions/lesson02` | Function Notation & Evaluation | w08 |  |
| `working-with-functions/lesson03` | Domain & Range | w09 |  |
| `working-with-functions/lesson04` | Piecewise & Absolute Value Functions | w28, w30, w31 |  |
| `working-with-functions/lesson05` | Odd & Even Functions | w26 |  |
| `working-with-functions/lesson06` | Composite Functions | w27 |  |
| `working-with-functions/lesson07` | Working with Functions, Synthesis | - | Module synthesis. No core video; optional practice math-a11-p01 (not designed). |
| `working-with-functions/lesson08` | Module Synthesis & Exam Technique | - | Module synthesis and exam technique; its inverse-function practice is Extension 1. Optional p01 (not designed). |
| `working-with-functions/lesson09` | Gradient and the Equation of a Line | w10 |  |
| `working-with-functions/lesson10` | Finding the Equation of a Line | w10 |  |
| `working-with-functions/lesson11` | Graphing Lines, Parallel and Perpendicular | w11 |  |
| `working-with-functions/lesson12` | Continuity and Discontinuity | w29 |  |
| `working-with-functions/lesson13` | Parabolas: Intercepts and the Discriminant | w14 |  |
| `working-with-functions/lesson14` | Completing the Square, Axis and Vertex | w15 |  |
| `working-with-functions/lesson15` | Graphing Parabolas and Cubics | w16, w20 |  |
| `working-with-functions/lesson16` | Intersections and Simultaneous Equations | w13, w16, w17 |  |
| `working-with-functions/lesson17` | Reciprocal Functions | w21 |  |
| `working-with-functions/lesson18` | Modelling with Linear Functions | w12, w13 |  |
| `working-with-functions/lesson19` | Break-even and Quadratic Modelling | w13, w19 |  |
| `working-with-functions/lesson20` | Direct Variation | w22 |  |
| `working-with-functions/lesson21` | Inverse Variation | w23 |  |
| `working-with-functions/lesson22` | Circles Centred at the Origin | w24 |  |
| `working-with-functions/lesson23` | Semicircles and Circles from a Graph | w25 |  |

### Gaps, repeats and order

- **Gaps:** none. The site-missing point `cidb25f0cc` (√(x²) = |x| by substitution) is taught in w30 (substitutions 3, −3, 0 and −5). The nine site-partial points get original teaching: w07, w13, w14, w22 and w23 (kxⁿ and k/xⁿ, beyond the site's kx and k/x, including the shared point on finding k), w28, and w31 (two points on |ax + b|, beyond the site's |x|).
- **Shared points (intended):** `ci52779ff4` and `ci70194fe3` (finding k; using the model) are shared by w22 and w23, one per variation type. The discriminant appears in w05 (taught), then w14, w17 and w31 (applied as a recall chip, not re-taught).
- **Order against the syllabus listing:** linear inequalities (`ci6e28857f`, a Linear functions point) move to w06 in the algebra toolkit, because w09 (domain), w12 (models) and w18 (quadratic inequalities) need them. Constructing functions is split: w12 and w13 come before quadratics and w19 after them, because w19 needs the vertex (w15). Both moves are sound, and every entry-knowledge item points backwards.
- **Site order:** the site teaches circles (lessons 22 and 23) last and piecewise and absolute value early (lesson04). The designs take piecewise, continuity and absolute value last (w28 to w31), so that c01 and c04 can open on the absolute-value V and its corner. This is sound.
- **Site lessons not used:** lesson07 and lesson08 (synthesis) would feed the optional practice video p01, which is not designed (audit N-1).
- **Departures where the design is right:** y = mx + c, not the site's y = mx + b (syllabus `ci7f902bc1`); kxⁿ and k/xⁿ models; only the upper and lower semicircles are functions (S11-06); tiered pricing; 'order usually matters' (S11-07).

## 2. Trigonometry and measure of angles

20 points (site: 16 covered, 4 partial, 0 missing). Owning designs: t01, t02a, t02b, t03, t04, t05, t06, t07, t08, t09, t10.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `ci83df430f` | Use Pythagoras’ theorem to find the exact sine, cosine and tangent ratios for angles of 30°, 45° and 60° | Trigonometry with acute angles | covered | t01 | - |
| 2 | `ci61c6fa90` | Apply trigonometry to solve problems involving right-angled triangles in two dimensions, true and compass bearings, and angles of elevation and dep... | Trigonometry with acute angles | covered | t02a, t02b | - |
| 3 | `ci50c304a5` | Represent angles of any magnitude using rays from the origin in the Cartesian plane and describe how one ray represents infinitely many angles | Trigonometry with angles of any magnitude | partial | t03 | - |
| 4 | `ci95d785c0` | Develop the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x, where (x, y) is a point on the circle of radius r, centred at the origin, and θ i... | Trigonometry with angles of any magnitude | partial | t03 | - |
| 5 | `cif067a2a2` | Use the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x to evaluate sin θ, cos θ and tan θ where θ is a multiple of 90°, and identify the valu... | Trigonometry with angles of any magnitude | partial | t03 | - |
| 6 | `cieed954eb` | Extend and apply the definitions cos θ = x/r, sin θ = y/r and tan θ = y/x for angles of any magnitude | Trigonometry with angles of any magnitude | covered | t03 | - |
| 7 | `ci535e2340` | Identify the related angle of an angle of any magnitude, excluding multiples of 90°, as the acute angle between the ray and the x-axis and obtain t... | Trigonometry with angles of any magnitude | covered | t04 | - |
| 8 | `cid118da07` | Develop and use the trigonometric ratios for angles that can be written in the form θ = 180° ± A, and θ = 360° - A, where 0° < A < 90° | Trigonometry with angles of any magnitude | covered | t04 | - |
| 9 | `ci7bdc1767` | Establish and use the results cos (-θ) = cos θ, sin (-θ) = -sin θ and tan (-θ) = -tan θ | Trigonometry with angles of any magnitude | partial | t04 | - |
| 10 | `ci96840b09` | Examine the proof of the sine rule a/(sin A) = b/(sin B) = c/(sin C), cosine rule c^2 = a^2 + b^2 - 2ab cos C and the area of a triangle formula A... | Trigonometry with angles of any magnitude | covered | t05, t06 | - |
| 11 | `ci44ad375d` | Use graphing applications or geometric construction to examine the ambiguous case of the sine rule, in which there are two possible solutions for a... | Trigonometry with angles of any magnitude | covered | t07 | - |
| 12 | `ci5fb5a13c` | Apply the sine rule, cosine rule and formula for the area of a triangle to solve problems where angles are measured in degrees, or degrees and minutes | Trigonometry with angles of any magnitude | covered | t05, t06, t07 | - |
| 13 | `ci53fbdcff` | Recognise that both ratios (arc length)/(circumference) and (area of sector)/(area of circle) are equal to θ/(one revolution) where θ is the angle... | Radians | covered | t08 | - |
| 14 | `ci6db63911` | Define the angle size of θ in radian measure as the ratio (arc length)/(radius of a circle) | Radians | covered | t08 | - |
| 15 | `cied74df46` | Explain why 360° = 2π radians and 1 radian = 180/π degrees | Radians | covered | t08 | - |
| 16 | `ciccaa78be` | Convert between degrees and radians and find the exact sine, cosine and tangent ratios for integer multiples of π/6 and π/4 | Radians | covered | t08 | - |
| 17 | `cid79268a8` | Graph y = sin x, y = cos x and y = tan x over domains given in degrees or radians, showing intercepts with the x-axis and y-axis and any asymptotes... | Radians | covered | t10 | - |
| 18 | `cib55a24b7` | Establish and use the formula l = rθ for the length l of arc subtending an angle θ in radians at the centre of a circle of radius r | Radians | covered | t09 | - |
| 19 | `ci56cda609` | Prove and use the formula A = 1/2 r^2θ for the area of a sector with angle θ in radians at the centre of a circle of radius r | Radians | covered | t09 | - |
| 20 | `cibf527c60` | Solve problems involving arc lengths and areas of major and minor sectors and segments | Radians | covered | t09 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `trigonometry-and-measure-of-angles/lesson01` | Angles & Radian Measure | t08 |  |
| `trigonometry-and-measure-of-angles/lesson02` | Arc Length & Area of Sectors | t09 |  |
| `trigonometry-and-measure-of-angles/lesson03` | The Unit Circle | t03, t04 |  |
| `trigonometry-and-measure-of-angles/lesson04` | Trigonometric Ratios | t02a |  |
| `trigonometry-and-measure-of-angles/lesson05` | Exact Values and Special Triangles | t01, t04 |  |
| `trigonometry-and-measure-of-angles/lesson06` | The Sine Rule and the Area of a Triangle | t05 |  |
| `trigonometry-and-measure-of-angles/lesson07` | The Cosine Rule | t06 |  |
| `trigonometry-and-measure-of-angles/lesson08` | The Ambiguous Case, and Choosing a Rule | t07 |  |
| `trigonometry-and-measure-of-angles/lesson09` | Bearings, Elevation and Depression | t02a, t02b |  |

### Gaps, repeats and order

- **Gaps:** none. The site-partial points (`ci50c304a5`, `ci95d785c0`, `cif067a2a2`, `ci7bdc1767`) are taught on a circle of radius r (t03, t04), not the site's unit circle only.
- **Shared points (intended):** the sine rule, cosine rule and area proofs (`ci96840b09`, `ci5fb5a13c`) span t05 to t07. `ci61c6fa90` is split by root across t02a (elevation and depression) and t02b (bearings).
- **Order:** the site teaches radians first (lesson01) and exact values late (lesson05). The designs follow the syllabus: acute angles, any magnitude, the sine and cosine rules, then radians (t08, t09). They place the radian graphs (t10, `cid79268a8`) as the bridge into identities. This is sound, and Year 12 d05 and t01 rely on t08 and t10.
- **Departures where the design is right:** the radian definition (S11-11); cos⁻¹ needs no quadrant check in a triangle (S11-12); 'related angle', not 'reference angle'; rationalising is advice, not a marking rule (S11-14).
- **Metadata:** the outline JSON, the route inputs and `math-a11-t11.md` and `math-a11-t15a.md` still say 't02' (audit S-5, N-3).

## 3. Trigonometric identities and equations

13 points (site: 10 covered, 1 partial, 2 missing). Owning designs: t11, t12, t13, t14a, t14b, t15a, t15b, t16.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `ci47b993f2` | Define the trigonometric functions sec θ, cosec θ and cot θ for acute angles θ using ratios of sides in a right-angled triangle | - | partial | t11 | - |
| 2 | `ci0e59b7f1` | Find the exact secant, cosecant and cotangent ratios for angles of 30°, 45° and 60° | - | covered | t11 | - |
| 3 | `cid1300c17` | Justify the values of sec θ, cosec θ and cot θ at 0° and 90° by examining the ratios of sides in a right-angled triangle as θ tends to 0° and 90° | - | missing | t11 | - |
| 4 | `ci15aca25e` | Develop the definitions sec θ = r/x, cosec θ = r/y and cot θ = x/y using a circle of radius r centred at the origin | - | missing | t12 | - |
| 5 | `cicf5015c7` | Establish the reciprocal ratios sec A = 1/(cos A), cosec A = 1/(sin A), and cot A = 1/(tan A), identifying the angles to be excluded in each identity | - | covered | t12 | - |
| 6 | `ci6990d1da` | Determine the exact value of the secant, cosecant and cotangent ratios for angles that are integer multiples of π/6 and π/4, if they exist | - | covered | t12 | - |
| 7 | `ci3c95dfdc` | Establish the identities tan θ = (sin θ)/(cos θ) and cot θ = (cos θ)/(sin θ), identifying the angles to be excluded in each identity | - | covered | t12 | - |
| 8 | `cic43f35f1` | Prove the complementary angle identities sin (90° - θ) = cos θ, cos (90° - θ) = sin θ, tan (90° - θ) = cot θ, cot (90° - θ) = tan θ, sec (90° - θ)... | - | covered | t13 | - |
| 9 | `ci3f6f944a` | Evaluate trigonometric expressions using angles of any magnitude and complementary angle identities | - | covered | t13 | - |
| 10 | `ci84d04f4e` | Solve equations involving trigonometric ratios of angles, specified in degrees or radians, on a restricted domain | - | covered | t15a, t15b | - |
| 11 | `cif79ffa41` | Prove the Pythagorean identity cos^2 x + sin^2 x = 1, and the identities 1 + tan^2 x = sec^2 x and 1 + cot^2 x = cosec^2 x | - | covered | t14a, t14b (not quoted by t14b) | - |
| 12 | `ci1ff2042e` | Apply trigonometric identities to solve problems, simplify expressions and prove further trigonometric identities using substitution and/or reducti... | - | covered | t14a, t14b | - |
| 13 | `ci24474f01` | Solve problems involving trigonometric equations, including those that reduce to quadratic equations, on a restricted domain | - | covered | t16 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `trigonometric-identities-and-equations/lesson01` | Reciprocal Trigonometric Functions | t11, t12 |  |
| `trigonometric-identities-and-equations/lesson02` | Pythagorean Identities | t14a, t14b |  |
| `trigonometric-identities-and-equations/lesson03` | Complementary Angle Relationships | t13 |  |
| `trigonometric-identities-and-equations/lesson04` | Domains and Ranges of Trigonometric Functions | t10, t12 |  |
| `trigonometric-identities-and-equations/lesson05` | Graphs of Sine and Cosine | t10 |  |
| `trigonometric-identities-and-equations/lesson06` | Graphs of Tangent and Cotangent | t10 |  |
| `trigonometric-identities-and-equations/lesson07` | Phase Shifts and Horizontal Translations | - | Retired notice on the page; not a source (correct). |
| `trigonometric-identities-and-equations/lesson08` | Solving Trigonometric Equations Graphically | t15a, t15b |  |
| `trigonometric-identities-and-equations/lesson09` | Modelling with Trigonometric Functions | - | Retired notice on the page; not a source (correct). |
| `trigonometric-identities-and-equations/lesson10` | Review and Connections | t14a, t14b |  |
| `trigonometric-identities-and-equations/lesson11` | Solving Trigonometric Equations Algebraically | t15a, t15b |  |
| `trigonometric-identities-and-equations/lesson12` | Equations That Reduce to Quadratics | t16 |  |

### Gaps, repeats and order

- **Gaps:** none. The site-missing points `cid1300c17` (sec, cosec and cot at 0° and 90° by limiting triangles) and `ci15aca25e` (sec = r/x, cosec = r/y, cot = x/y) are taught in t11 and t12. The site-partial point `ci47b993f2` is completed in t11.
- **Shared points (intended):** `cif79ffa41` and `ci1ff2042e` are shared by t14a (derive the Pythagorean identities) and t14b (prove further identities). `ci84d04f4e` is shared by t15a (single angles) and t15b (multiple angles). Only t14b fails to quote `cif79ffa41` (audit N-6).
- **Order:** reciprocal ratios (t11, t12), then complementary angles (t13), then identities (t14a, t14b), then equations (t15a, t15b, t16). This matches the syllabus and the site's dependencies. t16 relies on t14a (sin² + cos² = 1) and w04 (quadratics), both earlier.
- **Hand-over:** t15b's aid 'Do to the domain what the equation does to the angle' matches the published Year 12 t02 aid ('Do to the domain what you do to x'), so Year 12 t02 plays as a recall plus the new shift case (audit N-9).
- **Departures where the design is right:** cosec, not csc (syllabus wording); parallax uses cot, not sec (S11-16); a pure tone, not a piano, is a sine wave (S11-17); inverse functions do not always return the acute angle (S11-18).

## 4. Introduction to differentiation

40 points (site: 36 covered, 4 partial, 0 missing). Owning designs: c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16, c17, c18.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `ci8019730a` | Define the average rate of change of y with respect to x for a function y = f(x) over the domain [a, b] as Δy/Δx = (change in y)/(change in x), tha... | Estimating change | covered | c01 | - |
| 2 | `ci7d6c383e` | Recognise speed as a rate of change of distance with respect to time | Estimating change | covered | c01 | - |
| 3 | `ci34973239` | Use the definition for average rate of change to determine the average speed of an object from a given distance–time graph | Estimating change | covered | c01 | - |
| 4 | `ci6a71a44d` | Describe the difference between the average speed of an object and its instantaneous speed | Estimating change | covered | c02 | - |
| 5 | `ci9f5aa4ac` | Determine that the instantaneous speed of an object at time t can be approximated by the average speed between its position at time t and its posit... | Estimating change | covered | c02 | - |
| 6 | `ci8c73fdcb` | Relate the instantaneous speed of an object to the gradient of the tangent at that point on its distance–time graph | Estimating change | covered | c02 | - |
| 7 | `ci0b795741` | Estimate the instantaneous speed of an object from its distance–time graph | Estimating change | covered | c02 | - |
| 8 | `ci41d3073a` | Recognise when modelling with a linear function that its gradient is the rate of change and determine the rate of change for linear functions in pr... | Estimating change | partial | c01 | - |
| 9 | `ci7e80ed31` | Recognise when modelling with a non-linear function that the rate of change is not constant and is represented by the gradient of the tangent to th... | Estimating change | covered | c03 | - |
| 10 | `ci1a06a2ed` | Estimate the instantaneous rate of change of a non-linear function at a given point from a given graph of a practical situation | Estimating change | covered | c03 | - |
| 11 | `ci447b12b9` | Examine the gradient of a curve at a point on the curve using graphing applications | The derivative | covered | c04 | - |
| 12 | `cif58445af` | Approximate the gradient of a curve f(x) = x^n at a point P(c, f(c)) by considering the gradient of the secant through P and Q(c + h, f(c + h)) as... | The derivative | covered | c04 | - |
| 13 | `cicccefba1` | Infer that nx^(n - 1) is the gradient of f(x) = x^n and verify the result using graphing applications | The derivative | partial | c07 | - |
| 14 | `cie4815a8e` | Define f'(x), for any function f(x) and any value x, to be the gradient of the tangent to the curve y = f(x) at the point P(x, f(x)) if the tangent... | The derivative | partial | c05 | - |
| 15 | `cicb34a73b` | Refer to f'(x) as the derivative of f(x) or the gradient, or derived, function of f(x) | The derivative | covered | c05 | - |
| 16 | `ci68ad7095` | Define differentiation as the process of finding the derivative of a function | The derivative | covered | c05 | - |
| 17 | `cie02570a8` | Find derivatives of constant and linear functions | The derivative | covered | c06 | - |
| 18 | `ci528c1909` | Define the derivative of the function f(x) from first principles, as the limiting value of the gradient of the secant (f(x + h) - f(x))/h as h appr... | The derivative | covered | c06 | - |
| 19 | `ci608a8811` | Use first principles to find the derivative of quadratic functions | The derivative | covered | c06 | - |
| 20 | `ci0ea72300` | Use the notation dy/dx and y' for the derivative of y when y is a function of x | Calculations with the derivative | covered | c05 | - |
| 21 | `ci2f16a100` | Use the notation d/dx (f(x)) and f'(x) for the derivative of a function f(x) | Calculations with the derivative | covered | c05 | - |
| 22 | `ci1d192d62` | Use the formula d/dx (x^n) = nx^(n - 1) for all real values of n | Calculations with the derivative | covered | c07 | - |
| 23 | `cif6a6cb7d` | Apply the fact that the derivative of a sum is the sum of the derivatives: d/dx (f(x) + g(x)) = f'(x) + g'(x), and the derivative of a multiple of... | Calculations with the derivative | covered | c07 | - |
| 24 | `ci3d1a69e4` | Use the rules for differentiation to find equations of tangents and normals to a curve at points on the curve | Calculations with the derivative | covered | c08 | - |
| 25 | `ci35f0bdbe` | Find points on a curve where the tangent or normal has a given gradient | Calculations with the derivative | covered | c09 | - |
| 26 | `ci70bdc1be` | Examine and use the relationship between the angle of inclination of a line or tangent to a curve, θ, with the positive x-axis, and the gradient, m... | Calculations with the derivative | covered | c09 | - |
| 27 | `ci72e90f3a` | Apply the product rule: if y = uv, where u and v are both differentiable functions of x, then dy/dx = u dv/dx + v du/dx or if h(x) = f(x)g(x) for d... | Calculations with the derivative | covered | c11 | - |
| 28 | `cifb023b4e` | Apply the quotient rule: if y = u/v, where u and v are both differentiable functions of x, then dy/dx = (v du/dx - u dv/dx)/(v^2) or if h(x) = (f(x... | Calculations with the derivative | covered | c12 | - |
| 29 | `ci00fa8fac` | Apply the chain rule: if y is a differentiable function of u, and u is a differentiable function of x, then dy/dx = dy/du × du/dx or if h(x) = f(g(... | Calculations with the derivative | covered | c10 | - |
| 30 | `cie3d91a6e` | Identify and apply the product, quotient or chain rule, or a combination of the rules, as appropriate to differentiate a given function | Calculations with the derivative | covered | c13 | c11, c12 |
| 31 | `cie435d18f` | Interpret f(x) as increasing at x = c when f'(c) > 0 and decreasing at x = c when f'(c) < 0 | Graphical applications of the derivative | covered | c14 | - |
| 32 | `cief55e727` | Describe the behaviour of a function at a point as stationary when the tangent at the point is parallel to the x-axis, and recognise that f(x) is s... | Graphical applications of the derivative | covered | c14 | - |
| 33 | `ci63650902` | Graph y = f'(x) for a given graph of a function y = f(x) | Graphical applications of the derivative | covered | c15 | - |
| 34 | `ci8fd626a1` | Numerically estimate the value of the derivative at a point on the graph of a power of x, with and without the use of digital tools | Graphical applications of the derivative | covered | c04 | - |
| 35 | `ci6341be75` | Identify stationary points on the graph of a cubic function, and the values of x for which the function is increasing and/or decreasing, by first c... | Graphical applications of the derivative | covered | c16 | - |
| 36 | `ci9d118719` | Interpret f'(c) as the instantaneous rate of change of the function f(x) at x = c | The derivative as a rate of change | covered | c17 | - |
| 37 | `ci05229304` | Define and distinguish between displacement and distance and between velocity and speed | The derivative as a rate of change | covered | c18 | - |
| 38 | `ci8a2722e2` | Use graphs of functions and their derivatives, without the use of algebraic techniques, to describe and interpret physical phenomena | The derivative as a rate of change | partial | c17 | - |
| 39 | `ci8a1ba332` | Use the notation dx/dt or ẋ to represent the velocity of a particle with displacement x from a point as a function of time t | The derivative as a rate of change | covered | c18 | - |
| 40 | `ci1be28612` | Solve problems by determining the velocity of a particle moving in a straight line, given its displacement from a point as a function of time | The derivative as a rate of change | covered | c18 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `introduction-to-differentiation/lesson01` | Average & Instantaneous Rates of Change | c01, c02 |  |
| `introduction-to-differentiation/lesson02` | Limits | - | Retired notice on the page; not a source (correct). |
| `introduction-to-differentiation/lesson03` | The Derivative as the Gradient of a Tangent | c05, c06 |  |
| `introduction-to-differentiation/lesson04` | Differentiation Rules | c07 |  |
| `introduction-to-differentiation/lesson05` | The Chain Rule | c10, c13 |  |
| `introduction-to-differentiation/lesson06` | Product & Quotient Rules | c11, c12, c13 |  |
| `introduction-to-differentiation/lesson07` | The Second Derivative | - | Second derivative and concavity: Year 12 (d16). Correctly excluded. |
| `introduction-to-differentiation/lesson08` | Stationary Points | c14, c16 |  |
| `introduction-to-differentiation/lesson09` | Optimisation | - | Retired notice on the page; not a source (correct). |
| `introduction-to-differentiation/lesson10` | Increasing and Decreasing Functions | c14, c16 |  |
| `introduction-to-differentiation/lesson11` | Module 3 Review | - | Retired notice on the page; not a source (correct). |
| `introduction-to-differentiation/lesson12` | Rates of Change from a Graph | c01, c02, c03, c17 |  |
| `introduction-to-differentiation/lesson13` | Exploring Gradients with Digital Tools | c04, c07 |  |
| `introduction-to-differentiation/lesson14` | Tangents, Normals and the Angle of Inclination | c08, c09 |  |
| `introduction-to-differentiation/lesson15` | Graphing the Derivative | c15, c17 |  |
| `introduction-to-differentiation/lesson16` | Motion in a Straight Line | c18 |  |

### Gaps, repeats and order

- **Gaps:** none. The site-partial points (`ci41d3073a`, `cicccefba1`, `cie4815a8e`, `ci8a2722e2`) are completed in c01, c07, c05 and c17. `ci7e417be9`, which the site lacks, belongs to e02 (exponentials).
- **Placement:** c04 owns `ci8fd626a1` (estimating a derivative numerically, with and without digital tools), which the syllabus lists under graphical applications. It sits with the secants, where it belongs. c14 and c16 split increasing and decreasing (c14) from stationary points of a cubic (c16). No point is shared.
- **Order:** rate (c01 to c03), limit (c04 to c06), rules (c07 to c13), graphs (c14 to c16), rates in context (c17, c18). This is sound. c10 (chain rule) relies on w27 (composites), which is earlier.
- **Year 12 overlap:** c16 classifies stationary points from the sign of f′, as Year 11 `ci6341be75` ('justify conclusions') requires. The published Year 12 d09 re-teaches that sign test as new and uses a different picture (arrows), so learners meet two aids for one test (audit S-2).
- **Site:** lessons 02, 09 and 11 are retired. Lesson07 (second derivative) is Year 12 and is correctly excluded. The designs depart from the site where it teaches the second-derivative test or binomial-theorem proofs (section 6 of the site corrections). The design is right in each case.

## 5. Exponential and logarithmic functions

17 points (site: 13 covered, 3 partial, 1 missing). Owning designs: e01, e02, e03, e04, e05, e06, e07, e08.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `ci98f43d14` | Graph the exponential functions y = k(a^x) and y = k(a^(-x)) for constants a and k where a > 0, a ≠ 1 and k ≠ 0, and identify its asymptote, y-inte... | Exponential functions | covered | e01 | - |
| 2 | `ci69738291` | Describe the behaviour of y = k(a^x) and y = k(a^(-x)) as x → ∞ and x → -∞ | Exponential functions | covered | e01 | - |
| 3 | `ci93d02049` | Examine the gradient of the tangent to the curve y = a^x at its y-intercept for varying values of a, and verify using graphing applications that th... | Exponential functions | covered | e02 | - |
| 4 | `ci7e417be9` | Examine the gradient function of y = a^x with graphing applications and identify that the gradient function is d/dx (a^x) = ka^x, for some constant... | Exponential functions | missing | e02 | - |
| 5 | `ciac4383bd` | Conclude that Euler’s number, e, is a unique number such that d/dx (e^x) = e^x, that is, e^x is its own derivative | Exponential functions | covered | e02 | - |
| 6 | `ci604946ac` | Define the logarithm of a number y, where y > 0, to any positive base a as the index to which a is raised to give y | Logarithmic functions | covered | e03 | - |
| 7 | `ci5994ec54` | Use the notation log_a y for the logarithm of y to the base a | Logarithmic functions | covered | e03 | - |
| 8 | `ci7cd97f8c` | Define the natural logarithm ln a = log_e a | Logarithmic functions | covered | e03 | - |
| 9 | `ci03c5d345` | Use digital tools to determine rational and irrational values of exponential and logarithmic expressions | Logarithmic functions | partial | e04 | - |
| 10 | `ci740d04cc` | Explain that y = a^x is equivalent to x = log_a y for a > 0 and a ≠ 1, and use the equivalence to solve equations of the form a^x = b, for a > 0 | Logarithmic functions | covered | e04 | - |
| 11 | `cic84a1659` | Recognise and use the logarithmic properties: log_a a^x = x for all real x, a^(log_a x) = x where x > 0 | Logarithmic functions | covered | e03 | - |
| 12 | `ci348896a1` | Derive the laws of logarithms from the laws of indices log_a m + log_a n = log_a (mn), log_a m - log_a n = log_a (m/n) and log_a (m^n) = nlog_a m | Logarithmic functions | covered | e05 | - |
| 13 | `ci55afa938` | Justify the logarithmic results log_a a = 1, log_a 1 = 0 and log_a (1/x) = -log_a x | Logarithmic functions | partial | e05 | - |
| 14 | `cia453eab7` | Apply the logarithmic laws and results to simplify expressions, solve equations and prove results, using digital tools where necessary | Logarithmic functions | covered | e06 | - |
| 15 | `ciae7673fb` | Prove the change of base rule log_a x = (log_b x)/(log_b a) and use it to solve problems | Logarithmic functions | covered | e07 | - |
| 16 | `ci5d370004` | Graph the logarithmic function y = log_a x for a > 0 and a ≠ 1 | Logarithmic functions | covered | e08 | - |
| 17 | `ci9eb0125c` | Use graphing applications to identify the graphs of y = a^x and y = log_a x as reflections of each other in the line y = x, in cases where a > 1 an... | Logarithmic functions | partial | e08 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `exponential-and-logarithmic-functions/lesson01` | Introduction to Exponential Functions | e01 |  |
| `exponential-and-logarithmic-functions/lesson02` | Graphs of Exponential Functions | e01 |  |
| `exponential-and-logarithmic-functions/lesson03` | The Number $e$ and Natural Exponentials | e02 | Continuous compounding (A = Pe^(rt)) is not Year 11; e02 uses the e parts only. |
| `exponential-and-logarithmic-functions/lesson04` | Exponential Modelling and Equations | - | Retired notice on the page; not a source (correct). |
| `exponential-and-logarithmic-functions/lesson05` | Introduction to Logarithmic Functions | e03, e04 |  |
| `exponential-and-logarithmic-functions/lesson06` | Graphs of Logarithmic Functions | e08 |  |
| `exponential-and-logarithmic-functions/lesson07` | Laws of Logarithms | e05, e06 |  |
| `exponential-and-logarithmic-functions/lesson08` | Change of Base & Logarithmic Equations | e04, e06, e07 |  |
| `exponential-and-logarithmic-functions/lesson09` | Exponential Growth & Decay | - | Retired notice on the page; not a source (correct). |
| `exponential-and-logarithmic-functions/lesson10` | Module Synthesis | - | Module synthesis. Optional practice math-a11-p03 (not designed). |

### Gaps, repeats and order

- **Gaps:** none. The site-missing point `ci7e417be9` (the gradient function of aˣ is k aˣ) is taught in e02. The site-partial points `ci03c5d345`, `ci55afa938` and `ci9eb0125c` are completed in e04, e05 and e08.
- **Order:** e01 (graphs), e02 (e), e03 (the log as an index), e04 (aˣ = b), e05 (laws), e06 (using the laws), e07 (change of base), e08 (the log graph). This is sound. e02 needs c04, c05 and c07, which is why the exponentials follow differentiation.
- **Year 12 hand-over:** d01, d02, d03, d04, d19 and t04 assume e01, e02, e03, e05, e07 and e08, and all are present. d01 draws y = eˣ, y = e⁻ˣ and 3eˣ as 'Year 11 curves'. e01 teaches k a^(−x) for a general base and e02 draws eˣ, but no Year 11 design shows e⁻ˣ or 3eˣ (audit S-6).
- **Site:** lessons 04 and 09 are retired. Lesson03's continuous compounding is not Year 11, so e02 uses lesson03 for e only. Lesson10 (synthesis) is unused, pending the optional p03. The site's lesson02 asymptote wording ('never crosses') and lesson06's ln(2x) error are already logged. The designs avoid both.

## 6. Graph transformations

10 points (site: 8 covered, 1 partial, 1 missing). Owning designs: g01, g02, g03, g04, g05, g06.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `cifbd84c1c` | Establish using graphing applications that replacing x by -x in the equation of a graph corresponds to the reflection of the graph in the y-axis, a... | - | covered | g02 | - |
| 2 | `cia7e452b4` | Establish using graphing applications that replacing x by x - a in the equation of a graph corresponds to a horizontal translation of a graph by a,... | - | covered | g01 | - |
| 3 | `cic990ec79` | Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the x-axis | - | covered | g03 | - |
| 4 | `cide27d1f1` | Establish using graphing applications that replacing x by x/k in the equation of a graph corresponds to a horizontal dilation of a graph by a facto... | - | partial | g03 | - |
| 5 | `ci950cc744` | Establish, using graphing applications, replacing x by x/k and replacing y by y/k in the equation of a graph corresponds to a dilation by a factor... | - | missing | g03 | - |
| 6 | `cid4fd3807` | Apply reflections, translations and dilations to functions within the scope of the Mathematics Advanced course, excluding trigonometric functions,... | - | covered | g04, g05 | - |
| 7 | `ci84f96bc4` | Use the principles of translations to identify the centre, radius, domain and range of graphs of circles in the form (x - a)^2 + (y - b)^2 = r^2, w... | - | covered | g06 | - |
| 8 | `cid118e6e7` | Find the centre and radius of circles of the form x^2 + y^2 + ax + by + c = 0, where a, b and c are constants, by completing the squares | - | covered | g06 | - |
| 9 | `ci95f9075b` | Graph circles given their equations and find the equation of a circle from its graph | - | covered | g06 | - |
| 10 | `ci063bd03f` | Recognise that the order in which individual transformations are applied to functions is important | - | covered | g04 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `graph-transformations/lesson01` | Translations of Functions | g01 |  |
| `graph-transformations/lesson02` | Reflections of Functions | g02 |  |
| `graph-transformations/lesson03` | Dilations of Functions | g03 |  |
| `graph-transformations/lesson04` | Combined Transformations | g04 |  |
| `graph-transformations/lesson05` | Sketching & Modelling Transformed Functions | g05 |  |
| `graph-transformations/lesson06` | Further Transformations & Synthesis | - | Retired notice on the page; not a source (correct). |
| `graph-transformations/lesson07` | Circles by Translation | g06 |  |

### Gaps, repeats and order

- **Gaps:** none. The site-missing point `ci950cc744` (enlargement by replacing x and y together) is taught in g03. The site-partial point `cide27d1f1` (x/k as a dilation by factor k) is taught in g03 with the reciprocal link that Year 12 t01 needs.
- **Shared point (intended):** `cid4fd3807` is split between g04 (order and the general form y = k f(a(x + b)) + c) and g05 (tracking features and discontinuities).
- **Order:** translations, reflections, dilations, combined moves, features, circles. This is sound. g06 needs w15 (completing the square) and g01, both earlier.
- **Cross-reference error:** g03 recalls 'w15: y = ax², a wider parabola' in its entry knowledge and in an on-screen grey chip. The narrower-and-wider sweep is in w16 (scene with a from 3 to −2), not w15 (audit S-4).
- **Site:** lesson06 is retired. The site's g01 and g05 intercept errors (S11-G01, S11-G05) and its g04 order error (S11-G03, S11-G04) are logged, and the designs avoid them. One more site error was found in this audit: lesson05's key-term definition of an asymptote (audit section 4, new item A11-N1).

## 7. Probability and data

30 points (site: 26 covered, 3 partial, 1 missing). Owning designs: s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11.

### Syllabus points

| # | Code | Content point (abridged) | Group | Site status | Owner design(s) | Also quoted in |
|---|---|---|---|---|---|---|
| 1 | `ci04bd3585` | Define a set as a collection of objects, called the elements of the set, and represent a set using notation such as {2,3,5,7} and {0,2,4,6, …} | Sets and set notation | covered | s01 | - |
| 2 | `ciea6f77dc` | Use the notation n(A) or \|A\| to represent the number of elements in a finite set A | Sets and set notation | covered | s01 | - |
| 3 | `ci2b2bf2be` | Define the empty set as the set with no elements, denoted in set notation as ∅ | Sets and set notation | covered | s01 | - |
| 4 | `ci2a98c57c` | Use the notation A̅, A' or A^c to represent the complement of a set A with respect to some universal set U | Sets and set notation | covered | s01 | - |
| 5 | `ci8e00ae50` | Define A to be a subset of B if all the elements of A are elements of B | Sets and set notation | covered | s01 | - |
| 6 | `cifa472d11` | Define the intersection A ∩ B of sets A and B to be the set of elements that are in A and in B | Sets and set notation | covered | s02 | - |
| 7 | `ci4459a28c` | Define the union A ∪ B of sets A and B to be the set of elements that are in A or in B | Sets and set notation | covered | s02 | - |
| 8 | `cie7ef57c5` | Define sets A and B to be disjoint if A ∩ B = ∅, that is, they have no elements in common | Sets and set notation | covered | s02 | - |
| 9 | `ci7c446d9f` | Use Venn diagrams in practical situations to represent and interpret sets that may intersect in various ways within a universal set | Sets and set notation | covered | s02 | - |
| 10 | `ci5cd67d77` | Establish and use the rule \|A ∪ B\| = \|A\| + \|B\| - \|A ∩ B\| | Sets and set notation | covered | s03 | - |
| 11 | `cib914fe5d` | Define an experiment or a trial to be any procedure that can be infinitely repeated and has a well-defined set of possible outcomes known as the sa... | Probability | covered | s04 | - |
| 12 | `ci6948e56d` | Identify an event A as a subset A of the sample space S | Probability | covered | s04 | - |
| 13 | `ci851335dd` | Define the probability of each outcome to be 1/(\|S\|) when all the outcomes are equally likely and the probability of the event A to be P(A) = (\|... | Probability | covered | s04 | - |
| 14 | `cid1a19692` | Interpret the notation A̅ to be the event ‘ A does not occur’, interpret A ∩ B to be the event ‘ A and B both occur’, and interpret A ∪ B to be the... | Probability | covered | s04 | - |
| 15 | `ci4917e349` | Use Venn diagrams to represent the relationship between events within the same sample space, including mutually exclusive events, that is, events t... | Probability | covered | s05 | - |
| 16 | `ci8c8dbc06` | Establish and use the rules P(A̅) = 1 - P(A) and P(A ∪ B) = P(A) + P(B) - P(A ∩ B) | Probability | covered | s05 | - |
| 17 | `ci1f69f91f` | Use arrays and tree diagrams to determine the outcomes and probabilities for multistage events | Probability | partial | s06 | - |
| 18 | `ci6b22bb73` | Define conditional probability as the probability that an event A occurs given that another event B has already occurred, and use the notation P(A\|B) | Conditional probability | covered | s07 | - |
| 19 | `ci720126e5` | Examine conditional probability by restricting the sample space and event spaces in a Venn diagram, using a two-way table, a tree diagram and other... | Conditional probability | covered | s07 | - |
| 20 | `cidbe2315d` | Establish that P(A\|B) = (\|A ∩ B\|)/(\|B\|) when all outcomes are equally likely by restricting the sample space and event space, and hence P(A\|B... | Conditional probability | covered | s07 | - |
| 21 | `cif285e1d9` | Use the formulas for P(A\|B) to solve practical problems involving conditional probability | Conditional probability | covered | s07 | - |
| 22 | `ci3b004211` | Define two events to be independent if the occurrence of one event does not affect the probability that the other event occurs | Conditional probability | covered | s08 | - |
| 23 | `cifa01f762` | Explain that two events A and B are independent means P(A\|B) = P(A) and P(B\|A) = P(B), and show algebraically that if one of these formulas is tr... | Conditional probability | missing | s08 | - |
| 24 | `ci3243e129` | Use the formula P(A\|B) = (P(A ∩ B))/(P(B)), and the test P(A\|B) = P(A) for independence to prove that if two events are independent, then P(A ∩ B... | Conditional probability | partial | s08 | - |
| 25 | `ci4e7d5072` | Solve practical problems involving independent events | Conditional probability | covered | s08 | - |
| 26 | `cic2a3e877` | Define a random variable as a variable whose value is the outcome of a random experiment | Data | covered | s09 | - |
| 27 | `ci21d3c041` | Compare discrete random variables with continuous random variables, describe their differences, and give practical examples of each | Data | covered | s09 | - |
| 28 | `ci1c297b6d` | Organise finite datasets using a table or a spreadsheet, listing the values, frequency, relative frequency, cumulative frequency, and cumulative re... | Data | covered | s10 | - |
| 29 | `ci10643b1a` | Graph the frequency, relative frequency, and cumulative frequency histograms and polygons of datasets, using spreadsheets or graphing applications,... | Data | partial | s11 | - |
| 30 | `cifa805794` | Use the relative frequency to estimate the probability of results in experiments | Data | covered | s10 | - |

### Site lessons

| Site lesson | Title (h1) | Design(s) citing it in the outline | Note |
|---|---|---|---|
| `probability-and-data/lesson01` | Introduction to Probability | s04 |  |
| `probability-and-data/lesson02` | Probability Rules | s05, s06 |  |
| `probability-and-data/lesson03` | Conditional Probability | s06, s07 |  |
| `probability-and-data/lesson04` | Independence & Mutual Exclusivity | s08 |  |
| `probability-and-data/lesson05` | Discrete Probability Distributions | - | Retired notice on the page; not a source (correct). |
| `probability-and-data/lesson06` | Measures of Centre and Spread | - | Retired notice on the page; not a source (correct). |
| `probability-and-data/lesson07` | Representing Data | s11 | Box plots and stem-and-leaf are not 2024 Year 11 Advanced; s11 uses its histogram parts only. |
| `probability-and-data/lesson08` | Comparing Data Sets | - | Retired notice on the page; not a source (correct). |
| `probability-and-data/lesson09` | Bivariate Data Analysis | - | Retired notice on the page; not a source (correct). |
| `probability-and-data/lesson10` | Regression Analysis | - | Retired notice on the page; not a source (correct). |
| `probability-and-data/lesson11` | Sets, Elements and Notation | s01 |  |
| `probability-and-data/lesson12` | Intersection, Union and Venn Diagrams | s02 |  |
| `probability-and-data/lesson13` | The Counting Rule | s03 |  |
| `probability-and-data/lesson14` | Random Variables, Discrete and Continuous | s09 |  |
| `probability-and-data/lesson15` | Frequency Tables and Relative Frequency | s10, s11 |  |

### Gaps, repeats and order

- **Gaps:** none. The site-missing point `cifa01f762` (the algebraic proof that P(A|B) = P(A) gives P(B|A) = P(B)) is taught in s08. The site-partial points `ci1f69f91f`, `ci3243e129` and `ci10643b1a` are completed in s06, s08 and s11.
- **Order:** sets (s01 to s03), probability (s04 to s06), conditional probability (s07, s08), data (s09 to s11). This follows the syllabus. The site puts its set lessons (11 to 13) after probability lessons 01 to 04. The design is right, because P(A) = |A|/|S| needs set language first.
- **Release independence:** the outline says probability can run in parallel at any time, but s01 opens on g06's final frame. If s01 is released before g06, its first seconds refer to an unseen video (audit N-8).
- **Year 12 hand-over:** Year 12 s01, s02 and s04 assume listing outcomes (s04, s06), the 6 × 6 dice array (s06), relative frequency as an estimate (s10) and the complement rule (s05). All are present, with matching wording ('one trial gives exactly one outcome').
- **Site:** lessons 05, 06 and 08 to 10 are retired, and lesson07's box plots are not Year 11. Notation departures where the design is right: U, |A| and the overline complement, not ξ and n(A) only. The site's lottery copy is avoided.
