# Brief 243, trigonometry packs t01 to t16: recalculation of every site number and every practice answer.
# Run: python -I work/brief243-t/recalc.py > work/brief243-t/recalc-output.txt
from sympy import *
import sympy
d = pi / 180
S = lambda deg: sin(deg * d)
C = lambda deg: cos(deg * d)
T = lambda deg: tan(deg * d)
n = lambda e, k=6: N(e, k)
P = print
def dms(x):
    x = float(x); D = int(x); M = (x - D) * 60
    return f"{D} deg {round(M)} min ({x:.4f})"
def bearing(e, nn):
    b = float(atan2(e, nn) * 180 / pi)
    return b % 360
P('sympy', sympy.__version__)

P('== t01 (TM05)')
for a in [30, 45, 60]:
    P(' ', a, nsimplify(S(a)), nsimplify(C(a)), radsimp(T(a)))
P(' diagonal side 2:', sqrt(2**2 + 2**2), n(sqrt(8), 4), ' sin45 decimal', N(sin(pi / 4), 12))
P(' 08 sin^2 30 + cos^2 30 + tan 45 =', simplify(S(30)**2 + C(30)**2 + T(45)))
P(' odd one out tan^2 30 + cos^2 60 =', simplify(T(30)**2 + C(60)**2))
P(' drill4', simplify(S(45)**2 + C(45)**2), ' SA2 2 sin60 cos60 =', simplify(2 * S(60) * C(60)), ' SA3 tan60 - tan30 =', radsimp(T(60) - T(30)))
P(' 1/sqrt3 =', radsimp(1 / sqrt(3)))
P(' PQ1 4 sin60 cos30 - tan^2 45 =', simplify(4 * S(60) * C(30) - T(45)**2))
P(' PQ2 square diagonal 8, side = 8 cos45 =', simplify(8 * C(45)), n(8 * C(45), 4))
P(' equilateral side 2 height', sqrt(2**2 - 1))

P('== t02 (TM04, TM09)')
h = 40 * T(52); P(' TM04 we-1 h =', n(h, 6)); th = atan(h / 65) * 180 / pi; P('   angle from B =', n(th, 5))
P(' ladder 4 sin60 =', simplify(4 * S(60)), n(4 * S(60), 4))
P(' drills 3/5*20 =', Rational(3, 5) * 20, ' tan=2 adj 3 ->', 2 * 3, ' ramp 10/cos15 =', n(10 / C(15), 5))
P(' SA2 atan(1/12) =', n(atan(Rational(1, 12)) * 180 / pi, 4), ' AS1428.1 1:14 ->', n(atan(Rational(1, 14)) * 180 / pi, 4))
P(' TM09 we-1 60 tan35 =', n(60 * T(35), 5))
P(' we-2 S32W =', 180 + 32, ' return', 212 - 180)
P(' we-3 d^2 =', 12**2 + 9**2 - 2 * 12 * 9 * C(90), ' d =', sqrt(225))
P(' quick N65W =', 360 - 65, ' 40/tan22 =', n(40 / T(22), 5), ' 118 return', 118 + 180)
P(' SA Q1 18/tan27 =', n(18 / T(27), 5))
# hiker Q2: 8 km at 055 then 6 km at 145
E1, N1 = 8 * S(55), 8 * C(55); E2, N2 = E1 + 6 * S(145), N1 + 6 * C(145)
P(' SA Q2 d =', n(sqrt(E2**2 + N2**2), 6), ' bearing start->end', round(bearing(n(E2, 15), n(N2, 15)), 3), ' return', round((bearing(n(E2, 15), n(N2, 15)) + 180) % 360, 3))
P('   site route: asin(0.6) =', n(asin(Rational(3, 5)) * 180 / pi, 5), ' 235 + 36.87 =', n(235 + asin(Rational(3, 5)) * 180 / pi, 5), ' angle at turning point side', n(asin(Rational(4, 5)) * 180 / pi, 5))
P(' S48E =', 180 - 48, ' south-west =', 225)
P(' PQ1 30/tan12 =', n(30 / T(12), 6))
E1, N1 = 5 * S(70), 5 * C(70); E2, N2 = E1 + 12 * S(160), N1 + 12 * C(160)
P(' PQ2 d =', n(sqrt(E2**2 + N2**2), 6), ' bearing =', round(bearing(n(E2, 15), n(N2, 15)), 3), ' 70 + atan(12/5) =', n(70 + atan(Rational(12, 5)) * 180 / pi, 5))

P('== t03 (TM03, TI04)')
P(' P(120) =', (nsimplify(C(120)), nsimplify(S(120))))
for a in [180, 225, -90, 150, 45]:
    P('  P(%d) =' % a, (radsimp(nsimplify(C(a))), radsimp(nsimplify(S(a)))))
for a in [0, 90, 180, 270, 360]:
    P('  angle', a, 'sin', S(a), 'cos', C(a), 'tan', T(a) if C(a) != 0 else 'undefined (x = 0)')
P(' (-3, 4): r =', sqrt(9 + 16), ' cos', Rational(-3, 5), ' sin', Rational(4, 5), ' tan', Rational(4, -3), ' angle', n(atan2(4, -3) * 180 / pi, 5))
P(' coterminal 315: ', 315 + 360, 315 - 360, ' 7pi/4 in degrees', 7 * 180 / 4)
P(' PQ1 (-5,-12): r =', sqrt(25 + 144), ' sin', Rational(-12, 13), ' cos', Rational(-5, 13), ' tan', Rational(-12, -5), ' angle', n(atan2(-12, -5) * 180 / pi % 360, 5))
P(' PQ2 sin270 + cos180 + tan360 =', S(270) + C(180) + T(360), ' 50 coterminal', 50 + 360, 50 - 360)
P(' skate tricks 540 lands as', 540 % 360, ' 720 as', 720 % 360)

P('== t04 (TM05, TM03, TM04, TI05, TI06)')
for a in [150, 120, 300, 330, 135, 210, 225, 240]:
    P('  ', a, 'sin', radsimp(nsimplify(S(a))), 'cos', radsimp(nsimplify(C(a))), 'tan', radsimp(nsimplify(T(a))))
P(' sin135 + cos135 =', simplify(S(135) + C(135)))
P(' TM03 we-2 sin=-3/5 QIV cos =', sqrt(1 - Rational(9, 25)), ' Q2 cos=-5/13 QII sin =', sqrt(1 - Rational(25, 169)))
P(' TM04 SA3 sin=-3/5 tan=3/4 -> cos =', Rational(-3, 5) / Rational(3, 4))
P(' negative angles cos(-45)', radsimp(C(-45)), ' sin(-30)', S(-30), ' cos(-60)', C(-60), ' tan(-60)', T(-60))
P(' PQ1 sin240 - cos300 + tan(-135) =', radsimp(S(240) - C(300) + T(-135)), n(S(240) - C(300) + T(-135), 5))
P(' PQ2 cos=-8/17 QIII: sin =', -sqrt(1 - Rational(64, 289)), ' tan =', (-sqrt(1 - Rational(64, 289))) / Rational(-8, 17))
P(' related angles of 30:', [180 - 30, 180 + 30, 360 - 30])

P('== t05 (TM06)')
P(' we-1 b =', n(12 * S(75) / S(40), 6))
sB = 7 * S(63) / 9; P(' we-2 sinB =', n(sB, 6), ' B =', dms(n(asin(sB) * 180 / pi, 10)), ' with 0.6929:', n(asin(0.6929) * 180 / pi, 6))
P(' we-3 area =', n(44 * S(52), 6))
P(' quick a =', n(15 * S(35) / S(80), 5), ' B =', n(asin(8 * S(50) / 10) * 180 / pi, 5), ' area =', n(27 * S(40), 5), " 28 45' =", Rational(2875, 100))
P(' SA Q1 q =', n(14 * S(67) / S(48), 6), ' Q2 area =', n(Rational(1, 2) * 23 * 31 * S(Rational(714, 10)), 6), ' 356.5 x sin71.4 =', n(S(Rational(714, 10)), 5))
P(' key term b =', n(8 * S(60) / S(40), 5), " 37 30' =", 37.5, " 45 30' =", 45.5)
P(' largest angle opposite longest side: sides 5,6,10 check sines ratio', n(5 / S(130.54 - 0) , 4))
Y = 180 - (38 + Rational(24, 60)) - 71
P(' PQ1 y = 9.6 sin71 / sin38.4 =', n(Rational(96, 10) * S(71) / S(38 + Rational(24, 60)), 6))
P(" PQ2 area 0.5*4.2*5.5*sin48 36' =", n(Rational(1, 2) * Rational(42, 10) * Rational(55, 10) * S(48 + Rational(36, 60)), 6))
P(' obtuse check: sin 120 =', S(120), ' sine rule triangle A=120 a=10 B=25: b =', n(10 * S(25) / S(120), 5))

P('== t06 (TM07, TM09)')
P(' 8,5,60: c^2 =', 64 + 25 - 2 * 8 * 5 * C(60), ' c =', sqrt(64 + 25 - 2 * 8 * 5 * C(60)))
c2 = 121 + 49 - 154 * C(62); P(' we-1 154cos62 =', n(154 * C(62), 5), ' c^2 =', n(c2, 6), ' c =', n(sqrt(c2), 5))
cc = Rational(25 + 36 - 100, 60); P(' we-2 cosC =', cc, ' C =', dms(n(acos(cc) * 180 / pi, 10)))
P(' quick c =', n(sqrt(100 - 96 * C(40)), 5), ' c^2', n(100 - 96 * C(40), 5), ' 7,9,12:', n(Rational(49 + 81 - 144, 126), 4), n(acos(Rational(49 + 81 - 144, 126)) * 180 / pi, 5))
P('   b^2 =', n(625 - 600 * C(110), 6), ' b =', n(sqrt(625 - 600 * C(110)), 5))
y2 = 250 - 234 * C(56); P(' SA Q1 234cos56 =', n(234 * C(56), 5), ' y^2 =', n(y2, 6), ' y =', n(sqrt(y2), 5))
cq = Rational(45**2 + 62**2 - 80**2, 2 * 45 * 62); P(' SA Q2 cos =', cq, n(cq, 4), ' angle', dms(n(acos(cq) * 180 / pi, 10)))
P(' 3,4,90 ->', sqrt(9 + 16 - 24 * C(90)))
P(' PQ1 paths 350, 420, 118:', n(sqrt(350**2 + 420**2 - 2 * 350 * 420 * C(118)), 7))
cp = Rational(49 + 64 - 169, 2 * 7 * 8); P(' PQ2 7,8,13 cos =', cp, ' angle =', acos(cp) * 180 / pi)
# original two-leg journey with a non-right turn: 12 km at 040 then 9 km at 100
E1, N1 = 12 * S(40), 12 * C(40); E2, N2 = E1 + 9 * S(100), N1 + 9 * C(100)
P(' orig journey 12 @040, 9 @100: interior angle', 180 - (100 - 40), ' d =', n(sqrt(144 + 81 - 216 * C(120)), 6), ' check coords', n(sqrt(E2**2 + N2**2), 6), ' bearing', round(bearing(n(E2, 15), n(N2, 15)), 3))
P(' golf dogleg 250, 150, 140 deg at the bend:', n(sqrt(250**2 + 150**2 - 2 * 250 * 150 * C(140)), 6))

P('== t07 (TM08, TM07 we-3, TI10)')
s1 = 9 * S(40) / 7; P(' we-1 sinB =', n(s1, 5), ' B =', n(asin(s1) * 180 / pi, 5), n(180 - asin(s1) * 180 / pi, 5), ' cond b sinA =', n(9 * S(40), 5))
s2 = 5 * S(70) / 12; P(' we-2 sinB =', n(s2, 5), ' B =', n(asin(s2) * 180 / pi, 5), n(180 - asin(s2) * 180 / pi, 5))
a2 = 277 - 252 * C(38); P(' we-3 252cos38 =', n(252 * C(38), 5), ' a^2 =', n(a2, 5), ' a =', n(sqrt(a2), 5))
P(' sin40 vs 0.643:', n(S(40), 5), ' 40 or 140')
P(' quick asin 0.766 =', n(asin(0.766) * 180 / pi, 5), ' 10 sin35/8 =', n(10 * S(35) / 8, 5), n(asin(10 * S(35) / 8) * 180 / pi, 5), ' 6 sin80/20 =', n(6 * S(80) / 20, 5), n(asin(6 * S(80) / 20) * 180 / pi, 5))
P(' SA Q1 8 sin42/6 =', n(8 * S(42) / 6, 5), n(asin(8 * S(42) / 6) * 180 / pi, 5), ' Q2 7 sin61/25 =', n(7 * S(61) / 25, 5), n(asin(7 * S(61) / 25) * 180 / pi, 5))
P(' TI10 08 11 sin35/8 =', n(11 * S(35) / 8, 5), n(asin(11 * S(35) / 8) * 180 / pi, 5))
aa2 = 81 + 144 - 216 * C(47); aa = sqrt(aa2)
P(' TM07 we-3 a^2 =', n(aa2, 6), ' a =', n(aa, 6), ' sinB with a = 8.8:', n(9 * S(47) / Rational(88, 10), 5), n(asin(9 * S(47) / Rational(88, 10)) * 180 / pi, 5), ' unrounded:', n(9 * S(47) / aa, 5), n(asin(9 * S(47) / aa) * 180 / pi, 5))
P('   cos rule check cosB =', n((aa2 + 144 - 81) / (2 * aa * 12), 5), n(acos((aa2 + 144 - 81) / (2 * aa * 12)) * 180 / pi, 5))
s3 = 10 * S(32) / 6; B1 = asin(s3) * 180 / pi
P(' PQ1 bsinA =', n(10 * S(32), 5), ' sinB =', n(s3, 5), ' B =', n(B1, 5), n(180 - B1, 5), ' C =', n(180 - 32 - B1, 5), n(180 - 32 - (180 - B1), 5))
P(' PQ2 12 sin50 =', n(12 * S(50), 6))

P('== t08 (TM01, TM05, TM02 hook)')
P(' 135 ->', 135 * pi / 180, ' 5pi/6 ->', Rational(5, 6) * 180, ' 7pi/4 +- 2pi', 7 * pi / 4 + 2 * pi, 7 * pi / 4 - 2 * pi)
P(' drills', 60 * pi / 180, Rational(3, 2) * 180, 225 * pi / 180, -Rational(1, 6) * 180, 540 * pi / 180)
P(' SA Q1', 240 * pi / 180, -135 * pi / 180, 720 * pi / 180, ' Q2', 1500 * pi / 180, 30 * 1500 * pi / 180, n(250 * pi, 5))
P(' 1 rad =', 180 / pi, n(180 / pi, 6), ' 2pi =', n(2 * pi, 5))
P(' we-1 2 sin(2pi/3) cos(7pi/6) + tan(3pi/4) =', simplify(2 * sin(2 * pi / 3) * cos(7 * pi / 6) + tan(3 * pi / 4)))
P(' tan(4pi/3) =', tan(4 * pi / 3), ' cos(5pi/4) =', cos(5 * pi / 4), ' drill TM03 5pi/6:', (cos(5 * pi / 6), sin(5 * pi / 6)))
P(' pizza 45/360 =', Rational(45, 360), ' arc 40pi/8 =', 40 * pi / 8, n(5 * pi, 4), ' circumference 40pi =', n(40 * pi, 5))
P(' PQ1 210 ->', 210 * pi / 180, ' 7pi/9 ->', Rational(7, 9) * 180)
P(' PQ2 cos(5pi/6) - sin(7pi/4) =', radsimp(cos(5 * pi / 6) - sin(7 * pi / 4)), n(cos(5 * pi / 6) - sin(7 * pi / 4), 4))
P(' multiples of pi/6, pi/4 table:')
for k in range(0, 13):
    a = k * pi / 6
    P('   ', a, (cos(a), sin(a), tan(a) if cos(a) != 0 else 'undef'))
for k in [1, 3, 5, 7]:
    a = k * pi / 4
    P('   ', a, (cos(a), sin(a), tan(a)))

P('== t09 (TM02, TI10)')
P(' we-1', 8 * pi / 4, ' we-2', Rational(1, 2) * 100 * pi / 3, n(Rational(1, 2) * 100 * pi / 3, 5), ' we-3 r^2 =', solve(Eq(27 * pi, Rational(1, 2) * symbols('r')**2 * pi / 2), symbols('r')))
P(' drills', 6 * pi / 3, Rational(1, 2) * 100 * 3 * pi / 4, 12 * pi / 4, Rational(1, 2) * 144 * pi / 4, 8 * pi / 4, solve(Eq(50 * pi, Rational(1, 2) * symbols('r')**2 * pi / 2), symbols('r')))
P(' SA Q1', 9 * 2 * pi / 3, Rational(1, 2) * 81 * 2 * pi / 3, ' Q2 theta =', Rational(40 - 24, 12), ' Q3 theta_B =', solve(Eq(Rational(1, 2) * 36 * pi / 2, Rational(1, 2) * 16 * symbols('t')), symbols('t')))
P(' TI10 SAQ1', 12 * pi / 3, Rational(1, 2) * 144 * pi / 3, Rational(1, 2) * 144 * sin(pi / 3), ' segment', Rational(1, 2) * 144 * (pi / 3 - sin(pi / 3)), n(24 * pi - 36 * sqrt(3), 5))
P(' TI10 think 9/6 =', Rational(9, 6), ' drill3 l =', 8 * Rational(3, 4), ' A =', Rational(1, 2) * 64 * Rational(3, 4))
th = 2 * pi / 3
P(' orig r=10, 2pi/3: minor seg =', expand(Rational(1, 2) * 100 * (th - sin(th))), n(Rational(1, 2) * 100 * (th - sin(th)), 5), ' major seg =', expand(100 * pi - Rational(1, 2) * 100 * (th - sin(th))), n(100 * pi - Rational(1, 2) * 100 * (th - sin(th)), 5), ' major arc =', 10 * (2 * pi - th), n(10 * (2 * pi - th), 4), ' major sector', Rational(1, 2) * 100 * (2 * pi - th))
P(' PQ1 perimeter 50, r 15: l =', 50 - 30, ' theta =', Rational(20, 15), ' A =', Rational(1, 2) * 225 * Rational(4, 3))
th = 2 * pi / 3
P(' PQ2 r=6: minor =', expand(Rational(1, 2) * 36 * (th - sin(th))), n(Rational(1, 2) * 36 * (th - sin(th)), 5), ' major =', expand(36 * pi - Rational(1, 2) * 36 * (th - sin(th))), n(36 * pi - Rational(1, 2) * 36 * (th - sin(th)), 5))
P(' degrees misuse r=10, 60 deg: l = 10*60 =', 600, ' correct', n(10 * pi / 3, 4), ' ratio', n(600 / (10 * pi / 3), 5))
P(' 400 m track: bend radius 36.5 m, half circle arc =', n(36.5 * pi, 5))

P('== t10 (TI05, TI06, TI04)')
x = symbols('x', real=True)
P(' cos x = 0 on [-2pi, 2pi]:', solveset(cos(x), x, Interval(-2 * pi, 2 * pi)))
P(' sin x = 0 on [-pi, pi]:', solveset(sin(x), x, Interval(-pi, pi)), ' tan asymptotes cos=0 on [-pi, pi]', solveset(cos(x), x, Interval(-pi, pi)))
P(' cos(-pi/3)', cos(-pi / 3), ' tan(-pi/3)', tan(-pi / 3), ' tan(x+pi) = tan x:', simplify(tan(x + pi) - tan(x)))
P(' sin degrees intercepts 0..360:', solveset(sin(x * d), x, Interval(0, 360)), ' cos -180..360:', solveset(cos(x * d), x, Interval(-180, 360)))
P(' tan on [-pi/2, 3pi/2] zeros', solveset(sin(x), x, Interval.open(-pi / 2, 3 * pi / 2)), ' cos zeros', solveset(cos(x), x, Interval(-pi / 2, 3 * pi / 2)))
P(' PQ2 tan on [-2pi, pi]: asymptotes', solveset(cos(x), x, Interval(-2 * pi, pi)), ' zeros', solveset(sin(x), x, Interval(-2 * pi, pi)))
P(' middle C (A4 = 440 Hz equal temperament):', n(440 * 2**Rational(-9, 12), 6))

P('== t11 (TI01, TI02 07)')
for a in [30, 45, 60]:
    P('  ', a, 'sec', radsimp(1 / C(a)), 'cosec', radsimp(1 / S(a)), 'cot', radsimp(1 / T(a)))
for a in [1, 0.1, 89, 89.9]:
    P('   theta', a, 'sec', n(1 / cos(a * pi / 180), 6), 'cosec', n(1 / sin(a * pi / 180), 6), 'cot', n(cos(a * pi / 180) / sin(a * pi / 180), 6))
P(' 3-4-5: sec', Rational(5, 4), 'cosec', Rational(5, 3), 'cot', Rational(4, 3), ' TI02 07 sec 5/4 -> tan', sqrt(Rational(25, 16) - 1))
P(' PQ1 7-24-25: opp =', sqrt(625 - 49), ' sec', Rational(25, 7), ' cosec', Rational(25, 24), ' cot', Rational(7, 24))
P(' PQ2 sec^2 45 + cot30 cosec60 =', simplify(1 / C(45)**2 + (1 / T(30)) * (1 / S(60))))
P(' rafter: half-span 4 m, pitch 25 deg, rafter = 4 sec25 =', n(4 / C(25), 5))

P('== t12 (TI01, TI04)')
P(' (-3,4) r=5: sec', Rational(5, -3), ' cosec', Rational(5, 4), ' cot', Rational(-3, 4))
P(' sec pi/3', 1 / cos(pi / 3), ' cot undefined [0,2pi]:', solveset(sin(x), x, Interval(0, 2 * pi)))
th = symbols('th')
P(' sin cosec + cos sec =', simplify(sin(th) / sin(th) + cos(th) / cos(th)))
c = Rational(-1, 3); s = -sqrt(1 - c**2)
P(' we-1 sec=-3 QIII: cos', c, 'sin', s, 'cosec', radsimp(1 / s), 'tan', simplify(s / c), 'cot', radsimp(c / s))
P(' drills sec(2pi/3)', 1 / cos(2 * pi / 3), ' cosec(3pi/4)', radsimp(1 / sin(3 * pi / 4)), ' cosec(5pi/6)', 1 / sin(5 * pi / 6), ' sec(7pi/4)', radsimp(1 / cos(7 * pi / 4)), ' csc pi/6', 1 / sin(pi / 6), ' sec pi/4', radsimp(1 / cos(pi / 4)), ' cot pi/3', radsimp(1 / tan(pi / 3)))
P(' SA2 sec/tan =', simplify((1 / cos(th)) / tan(th)))
P(' PQ1 cosec300 + cot225 =', radsimp(1 / S(300) + 1 / T(225)), n(1 / S(300) + 1 / T(225), 4))
P(' PQ2 sec135', radsimp(1 / C(135)), ' sec300', 1 / C(300), ' sec undefined at', solveset(cos(x * d), x, Interval(0, 360)))
P(' degrees: sec120', 1 / C(120), ' cosec 210', 1 / S(210), ' cot 330', radsimp(1 / T(330)))

P('== t13 (TI03)')
P(' sin37 - cos53 =', simplify(S(37) - C(53)), ' sin25/cos65 =', simplify(S(25) / C(65)), ' cos35/sin55 =', simplify(C(35) / S(55)))
P(' we-1 sin20 sec70 + tan35 tan55 =', simplify(S(20) / C(70) + T(35) * T(55)), n(S(20) / C(70) + T(35) * T(55), 8))
P(' drills cos(pi/5) = sin(3pi/10):', simplify(cos(pi / 5) - sin(3 * pi / 10)), ' sec(pi/8) = cosec(3pi/8):', simplify(1 / cos(pi / 8) - 1 / sin(3 * pi / 8)), ' tan15 = cot75:', simplify(T(15) - 1 / T(75)))
P(' SA1 sin^2 68 + sin^2 22 =', simplify(S(68)**2 + S(22)**2), n(S(68)**2 + S(22)**2, 8))
P(' 08 sin2t = cos t on [0,90]:', solveset(sin(2 * x * d) - cos(x * d), x, Interval(0, 90)))
P(' SA2 tan3t = cot t on [0,45]:', [v for v in range(0, 46) if False], ' numeric check 22.5:', n(T(Rational(135, 2)) - 1 / T(Rational(45, 2)), 5), ' 67.5 outside')
P(' any magnitude: cos(90-150) =', C(-60), ' sin150 =', S(150))
P(' PQ1 tan10 tan20 tan70 tan80 =', n(T(10) * T(20) * T(70) * T(80), 10))
P(' PQ2 sin65 vs cos25', n(S(65) - C(25), 5), ' sin115 vs cos25', n(S(115) - C(25), 5))

P('== t14 (TI02, TI10)')
P(' 07 sec 5/4 -> tan', sqrt(Rational(25, 16) - 1), ' 08', simplify((1 / cos(th)**2 - 1) / tan(th)))
P(' we-1 sin^4 - cos^4 - (2sin^2 - 1) =', simplify(sin(th)**4 - cos(th)**4 - (2 * sin(th)**2 - 1)))
P(' drills tan2 -> sec', sqrt(5), ' cosec3 QII cot', -sqrt(9 - 1), ' cos -2/3 QIII sin', -sqrt(1 - Rational(4, 9)), ' sec -5/3 QII tan', -sqrt(Rational(25, 9) - 1), ' sin^2(1+cot^2) =', simplify(sin(th)**2 * (1 + cot(th)**2)))
P(' SA2 tan -4/3 QIV: sec', sqrt(1 + Rational(16, 9)), ' cos', Rational(3, 5), ' sin', Rational(-4, 3) * Rational(3, 5))
P(' SA3', simplify(sin(th)**2 / (1 - cos(th)) - (1 + cos(th))))
P(' TI10 07 sin 1/3 QII tan =', radsimp(Rational(1, 3) / (-sqrt(1 - Rational(1, 9)))), ' we-1 tan+cot - sec cosec =', simplify(tan(th) + cot(th) - 1 / (cos(th) * sin(th))))
P(' drill1 cos -3/5 QIII sin', -sqrt(1 - Rational(9, 25)), ' tan', (-sqrt(1 - Rational(9, 25))) / Rational(-3, 5), ' drill2', simplify((1 - cos(th)**2) / (sin(th) * cos(th)) - tan(th)))
P(' PQ1 sec - cos - sin tan =', simplify(1 / cos(th) - cos(th) - sin(th) * tan(th)))
P(' PQ2 cosec -13/5 QIV: cot^2 =', Rational(169, 25) - 1, ' cot =', -sqrt(Rational(144, 25)), ' check sin', Rational(-5, 13), ' cos', sqrt(1 - Rational(25, 169)), ' cos/sin', sqrt(1 - Rational(25, 169)) / Rational(-5, 13))
P(' pan law cos^2 + sin^2 at 30 deg:', simplify(C(30)**2 + S(30)**2))

P('== t15 (TI11, TI08, TM03, TI03, TI10)')
def sol(expr, lo, hi, deg=True):
    return solveset(expr, x, Interval(lo, hi))
P(' we-1', sol(sin(x * d) - Rational(1, 2), 0, 360), ' we-2', sol(cos(x * d) + Rational(1, 2), 0, 360), ' we-3', sol(sin(2 * x * d) - Rational(1, 2), 0, 360))
P(' quick', sol(sin(x * d) - sqrt(3) / 2, 0, 360), sol(cos(x * d) + sqrt(2) / 2, 0, 360), sol(tan(x * d) - 1, 0, 360))
P(' cos3t = 0.4 count:', len([1 for k in range(0, 4) for v in [acos(0.4) * 180 / pi + 360 * k, 360 - acos(0.4) * 180 / pi + 360 * k] if 0 <= v <= 1080]))
P(' Q2', sol(sin(2 * x * d) + sqrt(3) / 2, 0, 360))
P(' TI08', sol(sin(x) - Rational(1, 2), 0, 2 * pi), sol(cos(x) + Rational(1, 2), 0, 2 * pi), sol(tan(x) - 1, 0, 2 * pi), sol(sin(x) - cos(x), 0, 2 * pi))
P('  drills', sol(cos(x) - Rational(1, 2), 0, 2 * pi), sol(sin(x) + Rational(1, 2), 0, 2 * pi), sol(tan(x) - sqrt(3), 0, 2 * pi))
for k_, hi in [(0.3, 4), (0.2, 4), (0.7, 6)]:
    a = asin(k_)
    cnt = len([v for m in range(0, 4) for v in [a + 2 * pi * m, pi - a + 2 * pi * m] if 0 <= v <= hi * pi])
    P('  sin x =', k_, 'on [0,', hi, 'pi]:', cnt)
a6 = asin(0.6); P(' TM03 sin=-0.6:', n(a6, 4), n(pi + a6, 4), n(2 * pi - a6, 4), ' cos there', n(cos(pi + a6), 3), n(cos(2 * pi - a6), 3))
P(' TI10 2 sin x = sqrt3', sol(2 * sin(x) - sqrt(3), 0, 2 * pi), ' 2cos x = 1 on [0,4pi]', sol(2 * cos(x) - 1, 0, 4 * pi))
P(' orig cos t = -0.4 degrees:', n(acos(0.4) * 180 / pi, 5), n(180 - acos(0.4) * 180 / pi, 5), n(180 + acos(0.4) * 180 / pi, 5))
P(' PQ1a', sol(2 * cos(x * d) + sqrt(3), 0, 360), ' PQ1b sin x = -0.4: alpha', n(asin(0.4), 5), n(pi + asin(0.4), 5), n(2 * pi - asin(0.4), 5))
P(' PQ2 tan2x = -1 on [0,2pi]:', sol(tan(2 * x) + 1, 0, 2 * pi))
P(' minute hand tip half radius above centre: angle from 12 o clock with cos = 1/2 -> minutes', [m for m in range(60) if abs(cos(m * 6 * pi / 180) - 0.5) < 1e-9])

P('== t16 (TI12, TI10)')
s = symbols('s')
P(' we-1', factor(2 * s**2 - s - 1), sol(2 * sin(x * d)**2 - sin(x * d) - 1, 0, 360))
P(' we-2', factor(s**2 - s - 2), sol(cos(x * d)**2 - cos(x * d) - 2, 0, 360))
P(' we-3', factor(2 * s**2 - 3 * s + 1), sol(2 * sin(x * d)**2 + 3 * cos(x * d) - 3, 0, 360))
P(' quick s^2 - s =', factor(s**2 - s), ' 2cos^2 - 1 on [0,180]', sol(2 * cos(x * d)**2 - 1, 0, 180))
P(' SA Q1', factor(2 * s**2 + s - 1), sol(2 * cos(x * d)**2 + cos(x * d) - 1, 0, 360))
P(' SA Q2', factor(2 * s**2 + 3 * s - 2), sol(2 * sin(x * d)**2 - 3 * cos(x * d), 0, 360))
P(' TI10 SAQ2', sol(2 * cos(x)**2 + sin(x) - 1, 0, 2 * pi))
P(' orig tan^2 = 3', sol(tan(x * d)**2 - 3, 0, 360))
P(' PQ1', factor(2 * s**2 + s - 1), sol(2 * cos(x * d)**2 - sin(x * d) - 1, 0, 360))
P(' PQ2', factor(s**2 - (1 + sqrt(3)) * s + sqrt(3)), sol(tan(x)**2 - (1 + sqrt(3)) * tan(x) + sqrt(3), 0, 2 * pi))

P('== numeric cross-check of equation solution sets (SymPy solveset misses some degree-scaled roots)')
import math
def roots(f, lo, hi, step=0.005):
    out = []; xs = [lo + i * step for i in range(int((hi - lo) / step) + 1)]
    prev = None
    for xv in xs:
        try:
            v = f(xv)
        except (ZeroDivisionError, ValueError):
            prev = None; continue
        if abs(v) < 1e-9:
            out.append(round(xv, 3))
        elif prev is not None and prev[1] * v < 0 and abs(prev[1]) < 5 and abs(v) < 5:
            a, b = prev[0], xv
            for _ in range(60):
                m = (a + b) / 2
                if f(a) * f(m) <= 0: b = m
                else: a = m
            out.append(round((a + b) / 2, 3))
        prev = (xv, v)
    res = []
    for r in out:
        if not res or abs(r - res[-1]) > 0.02: res.append(r)
    return res
sd = lambda t: math.sin(math.radians(t)); cd = lambda t: math.cos(math.radians(t)); td = lambda t: math.tan(math.radians(t))
checks = [
 ('t16 we-1 2s^2 - s - 1, deg', lambda t: 2*sd(t)**2 - sd(t) - 1, 0, 360),
 ('t16 we-2 c^2 - c - 2, deg', lambda t: cd(t)**2 - cd(t) - 2, 0, 360),
 ('t16 we-3 2 sin^2 + 3cos - 3, deg', lambda t: 2*sd(t)**2 + 3*cd(t) - 3, 0, 360),
 ('t16 SA Q1 2c^2 + c - 1, deg', lambda t: 2*cd(t)**2 + cd(t) - 1, 0, 360),
 ('t16 SA Q2 2 sin^2 - 3 cos, deg', lambda t: 2*sd(t)**2 - 3*cd(t), 0, 360),
 ('t16 PQ1 2cos^2 - sin - 1, deg', lambda t: 2*cd(t)**2 - sd(t) - 1, 0, 360),
 ('t16 quick 2cos^2 - 1 on [0,180]', lambda t: 2*cd(t)**2 - 1, 0, 180),
 ('t16 tan^2 = 3, deg', lambda t: td(t)**2 - 3 if abs(cd(t)) > 1e-6 else 1e9, 0, 360),
 ('t15 we-3 sin 2t = 0.5', lambda t: sd(2*t) - 0.5, 0, 360),
 ('t15 Q2 sin 2t = -sqrt3/2', lambda t: sd(2*t) + math.sqrt(3)/2, 0, 360),
 ('t13 sin 2t = cos t on [0,90]', lambda t: sd(2*t) - cd(t), 0, 90),
 ('t13 tan3t - cot t on [0,45] (sin form)', lambda t: sd(3*t)*sd(t) - cd(3*t)*cd(t), 0, 45),
 ('t15 PQ1a 2cos + sqrt3', lambda t: 2*cd(t) + math.sqrt(3), 0, 360),
]
for name, f, lo, hi in checks:
    P(' ', name, roots(f, lo, hi))
P('  t16 TI10 SAQ2 radians x/pi:', [round(r / 180, 4) for r in roots(lambda t: 2*cd(t)**2 + sd(t) - 1, 0, 360)])
P('  t16 PQ2 radians x/pi:', [round(r / 180, 4) for r in roots(lambda t: (td(t)-1)*(td(t)-math.sqrt(3)) if abs(cd(t)) > 1e-3 else 1e9, 0, 360)])
P('  t15 PQ2 tan 2x = -1 x/pi:', [round(r / 180, 4) for r in roots(lambda t: (sd(2*t) + cd(2*t)), 0, 360)])
