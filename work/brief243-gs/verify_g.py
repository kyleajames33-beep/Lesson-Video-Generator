"""Brief 243 g01 to g06: recalculate site worked examples and pack practice answers (exact, SymPy).

Run: python -I work/brief243-gs/verify_g.py
Every check is an assert; the script prints one line per block and "ALL OK" at the end.
"""
from sympy import (symbols, Rational as R, sqrt, simplify, expand, solve, Eq, log, nsimplify,
                   Function, Poly, S, oo, Interval, solveset, Abs)

x, y, t, a = symbols('x y t a', real=True)


def img(pt, xs=1, xsh=0, ys=1, ysh=0):
    """Image of (X, Y) under X -> xs*X + xsh, Y -> ys*Y + ysh."""
    return (xs * pt[0] + xsh, ys * pt[1] + ysh)


# ---------------- g01: lesson01 translations ----------------
# we-trans-1: f(x + 4) - 1 is 4 left, 1 down: (X, Y) -> (X - 4, Y - 1)
assert img((0, 0), xsh=-4, ysh=-1) == (-4, -1)
# we-trans-2: vertex (2, -3) under f(x - 5) + 2
assert img((2, -3), xsh=5, ysh=2) == (7, -1)
# we-trans-3: x^2 right 2 down 4
g = (x - 2)**2 - 4
assert solve(g.diff(x), x) == [2] and g.subs(x, 2) == -4
# drill 3: vertex (1, 4) under f(x + 2) - 5
assert img((1, 4), xsh=-2, ysh=-5) == (-1, -1)
# drill 4: x^2 right 3 up 4
assert expand((x - 3)**2 + 4) == expand(x**2 - 6*x + 13)
# Q9: vertex (-1, 2)
assert img((-1, 2), ysh=4) == (-1, 6)
assert img((-1, 2), xsh=3) == (2, 2)
assert img((-1, 2), xsh=-2, ysh=-5) == (-3, -3)
# Q10: vertex (4, -2): y = (x - 4)^2 - 2, range y >= -2
q10 = (x - 4)**2 - 2
assert q10.subs(x, 4) == -2
# revisit: vertex (2, 3): y = (x - 2)^2 + 3
assert ((x - 2)**2 + 3).subs(x, 2) == 3
# syllabus framing: replacing y by y - b in y = f(x) gives y = f(x) + b
f = Function('f')
assert solve(Eq(y - 3, f(x)), y) == [f(x) + 3]
# card 06 intro (site error): a vertical translation changes x-intercepts
assert sorted(solve(x**2 - 4, x)) == [-2, 2]
assert solve(x**2 - 4 + 4, x) == [0]          # up 4: intercepts -2, 2 become the single intercept 0
assert solve(x**2 - 4 + 5, x) == []           # up 5: no x-intercepts at all
# practice 1: 1/x moved so asymptotes are x = 3, y = -2
p1 = 1/(x - 3) - 2
assert p1.subs(x, 0) == R(-7, 3)
assert solve(p1, x) == [R(7, 2)]
# practice 2: y = |x + 2| - 3: vertex (-2, -3); x-intercepts 1 and -5; y-intercept -1
p2 = Abs(x + 2) - 3
assert sorted(solve(Eq(Abs(x + 2), 3), x)) == [-5, 1]
assert p2.subs(x, 0) == -1
print('g01 ok')

# ---------------- g02: lesson02 reflections ----------------
# we-refl-2: f(-x) negates x
assert [img(p, xs=-1) for p in [(1, 3), (2, -1), (0, 4)]] == [(-1, 3), (-2, -1), (0, 4)]
# we-refl-3: f = x^3 - 2x, -f(x) = f(-x)
fx = x**3 - 2*x
assert expand(-fx) == expand(fx.subs(x, -x)) == -x**3 + 2*x
# drill 1, 2
assert img((3, -2), ys=-1) == (3, 2) and img((3, -2), xs=-1) == (-3, -2)
# drill 4: x^4 - 3x^2 even
assert expand((x**4 - 3*x**2).subs(x, -x)) == x**4 - 3*x**2
# Q8
pts = [(-2, 1), (0, 3), (4, -2)]
assert [img(p, ys=-1) for p in pts] == [(-2, -1), (0, -3), (4, 2)]
assert [img(p, xs=-1) for p in pts] == [(2, 1), (0, 3), (-4, -2)]
assert [img(p, xs=-1, ys=-1) for p in pts] == [(2, -1), (0, -3), (-4, 2)]
# Q9: f = x^2 - 4x + 3
q9 = x**2 - 4*x + 3
assert expand(q9.subs(x, -x)) == x**2 + 4*x + 3
assert solve(q9.diff(x), x) == [2] and q9.subs(x, 2) == -1
assert solve((x**2 + 4*x + 3).diff(x), x) == [-2]
# Q10 counterexample f = x + 1: -f(-x) = x - 1
assert expand(-((-x) + 1)) == x - 1
# syllabus framing: replacing y by -y in y = f(x) gives y = -f(x)
assert solve(Eq(-y, f(x)), y) == [-f(x)]
# practice 1
P = [(-3, 2), (0, -1), (4, 0)]
assert [img(p, ys=-1) for p in P] == [(-3, -2), (0, 1), (4, 0)]
assert [img(p, xs=-1) for p in P] == [(3, 2), (0, -1), (-4, 0)]
# practice 2: 2^x -> 2^(-x) and -2^x
assert (2**(-x)).subs(x, 0) == 1 and (-(2**x)).subs(x, 0) == -1
assert simplify(2**(-x) - R(1, 2)**x) == 0
print('g02 ok')

# ---------------- g03: lesson03 dilations ----------------
# we-dil-3: (2, 3), (6, -1) on y = 2 f(x/3): x times 3, y times 2
assert [img(p, xs=3, ys=2) for p in [(2, 3), (6, -1)]] == [(6, 6), (18, -2)]
# quick check: (4, 2) on 2f(x)
assert img((4, 2), ys=2) == (4, 4)
# drill 2, 3, 4
assert img((6, 4), xs=R(1, 3)) == (2, 4)
assert img((0, -2), ys=5) == (0, -10)
assert img((4, 0), xs=2) == (8, 0)
# Q9
pts = [(1, 2), (3, 5), (6, -1)]
assert [img(p, ys=2) for p in pts] == [(1, 4), (3, 10), (6, -2)]
assert [img(p, xs=R(1, 3)) for p in pts] == [(R(1, 3), 2), (1, 5), (2, -1)]
assert [img(p, xs=R(1, 3), ys=2) for p in pts] == [(R(1, 3), 4), (1, 10), (2, -2)]
# Q10: 2x^2 against (2x)^2 = 4x^2
assert expand((2*x)**2) == 4*x**2
# syllabus framing: replace x by x/k (k = 3) and y by y/l (l = 2) in y = sqrt(x)
k, l = 3, 2
yy = solve(Eq(y / l, sqrt(x / k)), y)[0]
assert simplify(yy - 2*sqrt(x/3)) == 0
# point (9, 3) on sqrt(x) goes to (27, 6) on the new graph
assert simplify(yy.subs(x, 27) - 6) == 0
# enlargement (ci950cc744): replace x by x/k and y by y/k in y = x^2 gives y = x^2/k
kk = symbols('k', positive=True)
assert solve(Eq(y / kk, (x / kk)**2), y) == [x**2 / kk]
# enlargement of the unit circle by 3 is x^2 + y^2 = 9
assert expand(((x/3)**2 + (y/3)**2 - 1) * 9) == x**2 + y**2 - 9
# site error check: a one-way dilation changes proportions. Unit square's diagonal slope 1 -> slope 2 under y-dilation 2
assert (2*1 - 0) / (1 - 0) == 2
# practice 1: P(4, -3), x by x/2 (factor 2), y by y/3 (factor 3)
assert img((4, -3), xs=2, ys=3) == (8, -9)
# practice 2: x^2 + y^2 = 16, x by 2x and y by 2y
c2 = expand((2*x)**2 + (2*y)**2 - 16)
assert expand(c2 / 4) == x**2 + y**2 - 4     # radius 2, reduction by factor 1/2
print('g03 ok')

# ---------------- g04: lesson04 combined, order matters ----------------
# we-ct-2: (2, 4) on y = 3 f(2x - 4) + 5 = 3 f(2(x - 2)) + 5: x/2 + 2, 3y + 5
assert expand(2*(x - 2)) == 2*x - 4
assert (R(2, 2) + 2, 3*4 + 5) == (3, 17)
# check by substitution: x_new = 3 gives inside 2*3 - 4 = 2 (the old x), so the output is 3 f(2) + 5 = 17
assert 2*3 - 4 == 2
# we-ct-3: reflect in y-axis, horizontal dilation factor 3, vertical factor 2, right 1, down 4
u = symbols('u')
inner = (-(x / 3)).subs(x, x - 1)          # f(-x) then x -> x/3 then x -> x - 1
assert simplify(inner - (-(x - 1) / 3)) == 0
# Q8: (1, 2) on -2 f(3x - 6) + 4
assert (R(1, 3) + 2, -2*2 + 4) == (R(7, 3), 0)
# Q9: -(2(x + 3))^2 + 2
assert expand(-(2*(x + 3))**2 + 2) == -4*x**2 - 24*x - 34
# drill 3: (4, 6) on 2 f(x) - 3
assert (4, 2*6 - 3) == (4, 9)
# drill 5: horizontal factor 1/2, vertical 3, right 2, down 5: 3 f(2(x - 2)) - 5
# revisit: -2(x - 3)^2 - 2 vertex (3, -2)
rv = -2*(x - 3)**2 - 2
assert solve(rv.diff(x), x) == [3] and rv.subs(x, 3) == -2
# MC bank: right 1 then x(-2) then up 3 from (2, 4): (3, 4) -> (3, -8) -> (3, -5)
assert (2 + 1, -2*4 + 3) == (3, -5)
# site establish task (site issue): translate right 1 and dilate vertically by 2 commute
assert expand(2*(x - 1)**2) == expand(2*(x - 1)**2)
A1 = 2*((x)**2).subs(x, x - 1)              # translate then dilate
A2 = (2*x**2).subs(x, x - 1)                # dilate then translate
assert expand(A1 - A2) == 0
# "inside out" card (site error): translate first then dilate horizontally gives x -> (x + h)/b, not x/b + h
# y = x^2: right 1 then horizontal factor 2 -> vertex 2; factor 2 then right 1 -> vertex 1
T_then_D = ((x - 1)**2).subs(x, x / 2)
D_then_T = ((x / 2)**2).subs(x, x - 1)
assert solve(T_then_D.diff(x), x) == [2] and solve(D_then_T.diff(x), x) == [1]
# vertical order: up 1 then x2: 2x^2 + 2; x2 then up 1: 2x^2 + 1
assert expand(2*(x**2 + 1)) == 2*x**2 + 2 and expand(2*x**2 + 1) == 2*x**2 + 1
# practice 1
assert expand(3*x**2 - 2) == 3*x**2 - 2 and expand(3*(x**2 - 2)) == 3*x**2 - 6
# practice 2: sqrt(x) reflect in y-axis then right 4: sqrt(-(x - 4)) = sqrt(4 - x), domain x <= 4
pr = sqrt(-x).subs(x, x - 4)
assert simplify(pr - sqrt(4 - x)) == 0
assert solveset(4 - x >= 0, x, S.Reals) == Interval(-oo, 4)
pr2 = sqrt(x - 4).subs(x, -x)                 # translate then reflect
assert simplify(pr2 - sqrt(-x - 4)) == 0
assert solveset(-x - 4 >= 0, x, S.Reals) == Interval(-oo, -4)
# anchor: oven, F = 1.8 C + 32 (180 C -> 356 F); adding first gives 1.8 (C + 32)
assert R(18, 10) * 180 + 32 == 356 and R(18, 10) * (180 + 32) == R(1908, 5)
print('g04 ok')

# ---------------- g05: lesson05 features ----------------
s1 = -2*(x - 3)**2 + 4
assert sorted(solve(s1, x)) == sorted([3 - sqrt(2), 3 + sqrt(2)])
assert s1.subs(x, 0) == -14
assert abs(float(3 - sqrt(2)) - 1.59) < 0.005 and abs(float(3 + sqrt(2)) - 4.41) < 0.005
# we-sk-2: 3/(x - 2) + 1: (1, 1) -> (3, 4), (-1, -1) -> (1, -2)
s2 = 3/(x - 2) + 1
assert s2.subs(x, 3) == 4 and s2.subs(x, 1) == -2
# we-sk-3: P = -12.5 (x - 3)^2 + 50, zeros at 1 and 5, expanded
P3 = -R(25, 2)*(x - 3)**2 + 50
assert sorted(solve(P3, x)) == [1, 5]
assert expand(P3) == -R(25, 2)*x**2 + 75*x - R(125, 2)
# activity 4: -2|x + 1| + 4 = 0 at x = 1, -3
assert sorted(solve(Eq(Abs(x + 1), 2), x)) == [-3, 1]
# drill 2: (1, 5) on 2 f(x - 3) + 1 -> (4, 11)
assert (1 + 3, 2*5 + 1) == (4, 11)
# drill 4: sqrt(x - 3) + 2: domain x >= 3, range y >= 2
# Q9: 2/(x + 1) - 3
q9 = 2/(x + 1) - 3
assert solve(q9, x) == [R(-1, 3)] and q9.subs(x, 0) == -1 and q9.subs(x, 1) == -2
# Q10: -5 (t - 2)^2 + 20
q10 = -5*(t - 2)**2 + 20
assert q10.subs(t, 0) == 0 and sorted(solve(q10, t)) == [0, 4]
# Q8 (site error): f with turning point (2, -3) and zeros -1, 5: f = (1/3)(x + 1)(x - 5)
fq = R(1, 3)*(x + 1)*(x - 5)
assert fq.subs(x, 2) == -3
gq = 2*fq.subs(x, x - 1) + 4
assert solve(gq.diff(x), x) == [3] and gq.subs(x, 3) == -2         # turning point (3, -2): site right
assert sorted(solve(gq, x)) == sorted([3 - sqrt(3), 3 + sqrt(3)])  # x-intercepts are NOT 0 and 6
assert (2*fq.subs(x, x - 1)).subs(x, 0) == 0 and (2*fq.subs(x, x - 1)).subs(x, 6) == 0  # 0 and 6 hold without the +4
# MC bank: trajectory -(4/9)(x - 3)^2 + 4 through (0, 0)
assert (-R(4, 9)*(x - 3)**2 + 4).subs(x, 0) == 0
# MC bank: (1, -2) under f(2(x + 2)): x/2 - 2
assert R(1, 2) - 2 == R(-3, 2)
# deferred from e08: exponentials lesson06 we-2 log2(x - 1) + 1: domain x > 1, (2, 1), x-intercept 3/2
l2 = log(x - 1, 2) + 1
assert simplify(l2.subs(x, 2)) == 1
assert solve(l2, x) == [R(3, 2)]
# we-3: log_3(x - 2) through (3, 0) and (5, 1)
l3 = log(x - 2, 3)
assert simplify(l3.subs(x, 3)) == 0 and simplify(l3.subs(x, 5)) == 1
# drill 3: log2(x - 3) + 2 = 0 -> x = 13/4
assert solve(log(x - 3, 2) + 2, x) == [R(13, 4)]
# practice 1: y = 2^(x + 1) - 4: x-int 1, y-int -2, asymptote y = -4
e1 = 2**(x + 1) - 4
assert solve(e1, x) == [1] and e1.subs(x, 0) == -2
# practice 2: y = 4/(x + 1) - 2: x-int 1, y-int 2
h2 = 4/(x + 1) - 2
assert solve(h2, x) == [1] and h2.subs(x, 0) == 2
# anchors: caps 90/n + 12 at n = 30 is 15; energy bar 100 - 100(0.9)^t at t = 0 is 0
n = symbols('n', positive=True)
assert (90/n + 12).subs(n, 30) == 15
assert (100 - 100*R(9, 10)**t).subs(t, 0) == 0
assert (4 + 20*R(4, 5)**t).subs(t, 0) == 24
print('g05 ok')

# ---------------- g06: lesson07 circles ----------------
def centre_radius(expr):
    """Centre and r^2 of x^2 + y^2 + D x + E y + F = 0."""
    p = Poly(expand(expr), x, y)
    D = p.coeff_monomial(x); E = p.coeff_monomial(y); F = p.coeff_monomial(1)
    return (-D / 2, -E / 2), (D / 2)**2 + (E / 2)**2 - F

assert centre_radius(x**2 + y**2 - 4*x + 2*y - 11) == ((2, -1), 16)
assert expand((x - 2)**2 + (y + 1)**2 - 16) == x**2 + y**2 - 4*x + 2*y - 11
assert centre_radius(x**2 + y**2 + 6*x - 8*y + 9) == ((-3, 4), 16)
assert centre_radius(x**2 + y**2 - 6*x) == ((3, 0), 9)
# we-1 domain and range
assert (2 - 4, 2 + 4, -1 - 4, -1 + 4) == (-2, 6, -5, 3)
# we-3 radius from (-1, 2) to (2, 2)
assert sqrt((2 - (-1))**2 + (2 - 2)**2) == 3
# Q1: (x + 4)^2 + (y - 1)^2 = 36: domain [-10, 2], range [-5, 7]
assert (-4 - 6, -4 + 6, 1 - 6, 1 + 6) == (-10, 2, -5, 7)
# practice 1: x^2 + y^2 - 10x + 4y + 20 = 0
assert centre_radius(x**2 + y**2 - 10*x + 4*y + 20) == ((5, -2), 9)
# practice 2: centre (3, -1) through (0, 0): r^2 = 10; x-axis crossings 0 and 6
c = (x - 3)**2 + (y + 1)**2 - 10
assert c.subs({x: 0, y: 0}) == 0
assert sorted(solve(c.subs(y, 0), x)) == [0, 6]
# author note: x^2 + y^2 + 2x + 5 = 0 has r^2 = -4 (no circle)
assert centre_radius(x**2 + y**2 + 2*x + 5)[1] == -4
print('g06 ok')

print('ALL OK')
