"""Brief 243 s01 to s11: recalculate site worked examples and pack practice answers (exact, SymPy).

Run: python -I work/brief243-gs/verify_s.py
Every check is an assert; the script prints one line per block and "ALL OK" at the end.
"""
from itertools import product
from sympy import Rational as R, binomial, nsimplify, Integer, symbols, solve, Eq

F = lambda a, b: R(a, b)

# ---------------- s01: lesson11 sets ----------------
U = set(range(1, 13)); A = {v for v in U if v % 3 == 0}
assert A == {3, 6, 9, 12} and len(A) == 4
U = set(range(1, 9)); B = {2, 4, 6, 8}; Bc = U - B
assert Bc == {1, 3, 5, 7} and len(B) + len(Bc) == len(U) == 8
assert {1, 3} <= {1, 2, 3, 4} and not ({1, 3, 5} <= {1, 2, 3, 4})
U = set(range(1, 11)); A = {v for v in U if v % 4 == 0}
assert A == {4, 8} and U - A == {1, 2, 3, 5, 6, 7, 9, 10}
P, Q = {2, 3, 5, 7}, {2, 3, 4, 5, 6, 7}
assert P <= Q and len(Q) - len(P) == 2
assert {1, 2, 3, 4, 5, 6} - {2, 4, 6} == {1, 3, 5}
assert set(range(1, 11)) - {2, 4, 6} == {1, 3, 5, 7, 8, 9, 10}
assert set(range(1, 7)) - {1, 2} == {3, 4, 5, 6}
assert set(range(1, 6)) - {1, 3, 5} == {2, 4}
# practice 1: U = 1..15, A = primes
U = set(range(1, 16)); A = {2, 3, 5, 7, 11, 13}
assert all(all(p % d for d in range(2, p)) for p in A) and len(A) == 6
assert sorted(U - A) == [1, 4, 6, 8, 9, 10, 12, 14, 15] and len(U - A) == 9
# practice 2: factors of 12
E = {d for d in range(1, 13) if 12 % d == 0}
assert E == {1, 2, 3, 4, 6, 12} and len(E) == 6 and not ({2, 4, 8} <= E) and set() <= E
print('s01 ok')

# ---------------- s02: lesson12 intersection, union, Venn ----------------
A, B = {1, 2, 3, 4}, {3, 4, 5}
assert A & B == {3, 4} and A | B == {1, 2, 3, 4, 5} and len(A | B) == 5
assert 50 - ((30 - 8) + 8 + (20 - 8)) == 8
assert {2, 3, 5, 7} & {4, 6, 8} == set()
assert 80 - ((45 - 15) + 15 + (32 - 15)) == 18
A, B = {2, 4, 6, 8}, {1, 2, 3, 4}
assert A & B == {2, 4} and A | B == {1, 2, 3, 4, 6, 8} and len(A | B) == 6
assert {1, 2, 5} & {2, 5, 9} == {2, 5} and {1, 2} | {2, 3} == {1, 2, 3}
assert 40 - (15 + 6 + 12) == 7
# hook: 10 students, 6 music, 5 art: overlap between 1 and 5
assert max(0, 6 + 5 - 10) == 1 and min(6, 5) == 5
# practice 1: 60 students, 35 sport, 22 instrument, 9 both
assert (35 - 9, 22 - 9, 9, 60 - (35 + 22 - 9)) == (26, 13, 9, 12) and 26 + 13 == 39
# practice 2: U = 1..12
U = set(range(1, 13)); A = {v for v in U if v % 2 == 0}; B = {v for v in U if v % 3 == 0}
assert A & B == {6, 12} and A | B == {2, 3, 4, 6, 8, 9, 10, 12} and A & {1, 5, 7, 11} == set()
print('s02 ok')

# ---------------- s03: lesson13 counting rule ----------------
assert 30 + 20 - 8 == 42 and 14 + 16 - 25 == 5 and 45 + 32 - 15 == 62 and 80 - 62 == 18
assert 30 + 15 + 17 + 18 == 80
assert 12 + 9 - 4 == 17
assert 10 + 7 - 3 == 14 and 20 + 15 - 30 == 5 and 9 + 6 == 15 and 50 - 38 == 12
assert 38 + 27 - 12 == 53 and 60 - 53 == 7 and 25 + 23 - 42 == 6
# practice 1: 120 guests, 70 tour, 45 bike, 30 neither
assert 70 + 45 - (120 - 30) == 25
# practice 2: |A| = 18, |A u B| = 30, |A n B| = 7
assert 30 - 18 + 7 == 19 and 30 - 7 == 23
print('s03 ok')

# ---------------- s04: lesson01 sample spaces ----------------
die = range(1, 7)
assert len([v for v in die if v < 4]) == 3
assert F(13, 52) == F(1, 4)
coins2 = list(product('HT', repeat=2))
assert F(sum('H' in c for c in coins2), len(coins2)) == F(3, 4)
dice2 = list(product(die, die))
assert len(dice2) == 36 and F(sum(a + b == 7 for a, b in dice2), 36) == F(1, 6)
# revisit: die and coin, 12 outcomes
dc = list(product(die, 'HT'))
assert F(sum(d == 6 and c == 'H' for d, c in dc), 12) == F(1, 12)
assert F(sum(d % 2 == 0 or c == 'H' for d, c in dc), 12) == F(3, 4)
# Oz Lotto
assert binomial(47, 7) == 62891499 and abs(1 / 62891499 - 1.59e-8) < 0.005e-8
# Q1 marbles
assert F(5, 10) == F(1, 2) and 1 - F(2, 10) == F(4, 5) and F(5 + 3, 10) == F(4, 5)
# Q3 four coin flips
assert 2**4 == 16 and 1 - F(1, 16) == F(15, 16)
# practice 1: tokens 1..20
S = set(range(1, 21)); A = {v for v in S if v % 4 == 0}; B = {v for v in S if v > 14}
assert A & B == {16, 20} and F(len(A & B), 20) == F(1, 10)
assert len(A | B) == 9 and F(len(A | B), 20) == F(9, 20)
# practice 2: three coins
c3 = list(product('HT', repeat=3))
assert len(c3) == 8 and F(sum(c.count('H') == 2 for c in c3), 8) == F(3, 8)
assert F(sum(len(set(c)) > 1 for c in c3), 8) == F(3, 4)
print('s04 ok')

# ---------------- s05: lesson02 / lesson01 rules ----------------
assert F(6, 10) + F(5, 10) - F(3, 10) == F(8, 10) and F(5, 10) - F(3, 10) == F(2, 10)
assert 1 - F(8, 10) == F(2, 10)
assert F(5, 10) + F(4, 10) - F(2, 10) == F(7, 10)
assert F(3, 10) + F(6, 10) == F(9, 10)
assert F(18, 30) == F(3, 5) and F(15, 30) == F(1, 2) and F(8, 30) == F(4, 15)
assert F(18 + 15 - 8, 30) == F(5, 6)
assert F(30 + 25 - 12, 50) == F(43, 50) == R(86, 100)
assert F(4, 10) + F(3, 10) - F(15, 100) == F(55, 100)
assert F(22 + 18 - 10, 40) == F(3, 4)
# Q2 smartphone/laptop: only 15, only 20, both 30, neither 15; P(exactly one) = 7/16
assert (45 - 30, 50 - 30, 80 - (45 + 50 - 30)) == (15, 20, 15) and F(35, 80) == F(7, 16)
# revisit lesson02: union at least max
# practice 1
pA, pB, pU = R(45, 100), R(35, 100), R(60, 100)
assert pA + pB - pU == R(20, 100) and 1 - pU == R(40, 100)
# practice 2: balls 1..30
S = range(1, 31)
m5 = [v for v in S if v % 5 == 0]; m6 = [v for v in S if v % 6 == 0]; both = [v for v in S if v % 30 == 0]
assert (len(m5), len(m6), len(both)) == (6, 5, 1)
assert F(len(m5) + len(m6) - len(both), 30) == F(1, 3) == F(len(set(m5) | set(m6)), 30)
assert 1 - F(6, 30) == F(4, 5)
print('s05 ok')

# ---------------- s06: arrays and trees ----------------
# lesson01 we-2: at least one 6 in two rolls, by the array
assert F(sum(a == 6 or b == 6 for a, b in dice2), 36) == F(11, 36) == 1 - F(5, 6)**2
# lesson02 we-3: three rolls
assert 1 - F(5, 6)**3 == F(91, 216) and abs(float(F(91, 216)) - 0.421) < 0.0005
# lesson02 card 06: 5 red 5 blue without replacement, red then blue; 10 x 9 ordered array
ordered = [(i, j) for i in range(10) for j in range(10) if i != j]
red = set(range(5))
assert len(ordered) == 90
assert F(sum(i in red and j not in red for i, j in ordered), 90) == F(5, 18) == F(1, 2) * F(5, 9)
# lesson02 fill: 6 red 4 green, red then green
assert F(6, 10) * F(4, 9) == F(4, 15)
# lesson02 Q1: 4 red, 5 blue, 6 green, two without replacement
assert F(4, 15) * F(3, 14) == F(2, 35) and F(4, 15) * F(5, 14) == F(2, 21)
assert 1 - F(11, 15) * F(10, 14) == F(10, 21)
# lesson02 Q3: until two heads or four flips: P(ends with two heads) = P(at least 2 heads in 4)
c4 = list(product('HT', repeat=4))
assert F(sum(c.count('H') >= 2 for c in c4), 16) == F(11, 16)
assert F(4 + 2 + 1 + 2 + 1 + 1, 16) == F(11, 16)
# lesson02 activity 4: with replacement 8 black 12 white
assert F(8, 20)**2 == F(4, 25)
# lesson02 4 guesses
assert 1 - R(9, 10)**4 == R(3439, 10000)
# lesson02 we-2 / lesson03 we-2 factory and supplier
assert R(6, 10) * R(2, 100) + R(4, 10) * R(5, 100) == R(32, 1000)
assert R(6, 10) * R(4, 100) + R(4, 10) * R(2, 100) == R(32, 1000)
# practice 1: larger of two dice is 4
assert F(sum(max(a, b) == 4 for a, b in dice2), 36) == F(7, 36)
# practice 2: 4 green 2 yellow, two without replacement, different colours
assert F(4, 6) * F(2, 5) + F(2, 6) * F(4, 5) == F(8, 15)
bag = ['g'] * 4 + ['y'] * 2
pairs = [(bag[i], bag[j]) for i in range(6) for j in range(6) if i != j]
assert F(sum(p != q for p, q in pairs), len(pairs)) == F(8, 15)
print('s06 ok')

# ---------------- s07: lesson03 conditional ----------------
assert R(2, 10) / R(5, 10) == R(4, 10)
assert R(20, 100) / R(30, 100) == F(2, 3)
assert R(24, 1000) / R(32, 1000) == F(3, 4)
assert F(45, 115) == F(9, 23) and F(45, 80) == F(9, 16)
assert R(4, 10) * R(25, 100) + R(6, 10) * R(10, 100) == R(16, 100)
assert R(10, 100) / R(16, 100) == F(5, 8)
# Q2 diet/exercise table
assert F(120, 210) == F(4, 7) and F(120, 200) == R(6, 10)
assert F(200, 500) * F(210, 500) == R(168, 1000) and F(120, 500) == R(24, 100)
# Q3 disease: 2% prevalence, 98% sensitivity, 3% false positive, 10 000 people
dz = 10000 * R(2, 100); tp = dz * R(98, 100); fp = (10000 - dz) * R(3, 100)
assert (dz, tp, dz - tp, fp, 10000 - dz - fp) == (200, 196, 4, 294, 9506)
assert tp / (tp + fp) == R(4, 10)
# drills
assert R(12, 100) / R(4, 10) == R(3, 10) and F(4, 9) == F(4, 9) and F(20, 60) == F(1, 3)
assert R(5, 10) * R(2, 100) + R(3, 10) * R(3, 100) + R(2, 10) * R(5, 100) == R(29, 1000)
pu = R(5, 100) * R(95, 100); pn = R(95, 100) * R(5, 100)
assert pu / (pu + pn) == R(1, 2)
# site error: "tennis (which would be lower)": P(T) is only bounded below by 0.2; P(T) = 0.8 is possible
assert R(8, 10) > F(2, 3) and R(8, 10) >= R(2, 10)
# establish by counting: two dice, B = sum is 8, A = a double
B = [(a, b) for a, b in dice2 if a + b == 8]; AB = [(a, b) for a, b in B if a == b]
assert len(B) == 5 and len(AB) == 1 and F(len(AB), len(B)) == F(1, 5) == F(1, 36) / F(5, 36)
# practice 1: delivery app
assert F(30, 120) == F(1, 4) and F(30, 38) == F(15, 19)
# practice 2
pA, pB, pU = R(1, 2), R(2, 5), R(65, 100)
pAB = pA + pB - pU
assert pAB == R(1, 4) and pAB / pB == R(5, 8) and pAB / pA == R(1, 2)
assert pA * pB != pAB
print('s07 ok')

# ---------------- s08: lesson04 independence ----------------
A = {2, 4, 6}; B = {5, 6}
assert F(len(A & B), 6) == F(1, 6) == F(3, 6) * F(2, 6)
assert R(4, 10) * R(3, 10) == R(12, 100) != R(1, 10)
assert R(1, 2) * R(1, 2) == R(1, 4) != 0
# drill 1: even and prime
A, B = {2, 4, 6}, {2, 3, 5}
assert F(len(A & B), 6) == F(1, 6) and F(3, 6) * F(3, 6) == F(1, 4)
# drill 2: face card and red
assert F(12, 52) * F(26, 52) == F(6, 52) == F(3, 26)
# drill 3
assert R(3, 10) * R(4, 10) == R(12, 100)
# Q1: multiples of 2 and of 3 on a die
A, B = {2, 4, 6}, {3, 6}
assert F(len(A & B), 6) == F(3, 6) * F(2, 6)
# drill 5: complements of independent events are independent (symbolic)
a, b = symbols('a b')
assert ((1 - (a + b - a*b)) - (1 - a)*(1 - b)).expand() == 0
# cifa01f762: P(A|B) = P(A) implies P(B|A) = P(B) when P(A), P(B) > 0
pa, pb, pab = symbols('pa pb pab', positive=True)
sol = solve(Eq(pab / pb, pa), pab)[0]
assert (sol / pa - pb).simplify() == 0
# king and heart (trap 3 mention)
assert F(4, 52) * F(13, 52) == F(1, 52)
# practice 1
pA, pB, pU = R(3, 10), R(6, 10), R(72, 100)
assert pA + pB - pU == R(18, 100) == pA * pB
# practice 2: two alarms fail with 0.05 and 0.1
assert 1 - R(5, 100) * R(1, 10) == R(995, 1000)
print('s08 ok')

# ---------------- s09: lesson14 random variables ----------------
totals = sorted({a + b for a, b in dice2})
assert totals == list(range(2, 13)) and len(totals) == 11
assert F(sum(a + b == 7 for a, b in dice2), 36) == F(6, 36)
# practice 2: absolute difference of two dice
diffs = sorted({abs(a - b) for a, b in dice2})
assert diffs == [0, 1, 2, 3, 4, 5]
assert F(sum(a == b for a, b in dice2), 36) == F(1, 6)
assert F(sum(abs(a - b) == 1 for a, b in dice2), 36) == F(10, 36) == F(5, 18)
print('s09 ok')

# ---------------- s10: lesson15 frequency tables ----------------
def table(freq):
    n = sum(freq); rel = [F(f, n) for f in freq]
    cum = [sum(freq[:i + 1]) for i in range(len(freq))]
    return n, rel, cum, [F(c, n) for c in cum]

n, rel, cum, crel = table([10, 18, 12])
assert n == 40 and rel == [R(25, 100), R(45, 100), R(30, 100)] and cum == [10, 28, 40]
assert crel == [R(25, 100), R(70, 100), 1]
assert abs(float(F(13, 60)) - 0.217) < 0.0005 and abs(float(F(1, 6)) - 0.167) < 0.0005
n, rel, cum, crel = table([12, 15, 8, 15])
assert rel == [R(24, 100), R(30, 100), R(16, 100), R(30, 100)] and cum == [12, 27, 35, 50] and crel[1] == R(54, 100)
assert F(46, 200) == R(23, 100) and abs(float(F(7, 30)) - 0.233) < 0.0005 and F(46, 80) == R(575, 1000)
assert F(10, 40) == R(1, 4) and F(50, 200) == R(1, 4) and F(20, 50) == R(2, 5)
assert [4, 4 + 9, 4 + 9 + 7] == [4, 13, 20]
# practice 1: cracked eggs 0..3 with frequencies 22, 11, 5, 2
n, rel, cum, crel = table([22, 11, 5, 2])
assert n == 40 and rel == [R(55, 100), R(275, 1000), R(125, 1000), R(5, 100)]
assert cum == [22, 33, 38, 40] and crel == [R(55, 100), R(825, 1000), R(95, 100), 1]
assert 1 - rel[0] == R(45, 100) == F(18, 40)
# practice 2: 52 serves in out of 80
assert F(52, 80) == R(65, 100) and R(65, 100) * 200 == 130
print('s10 ok')

# ---------------- s11: histograms, polygons, mode and median ----------------
def median_discrete(values, freq):
    data = [v for v, f in zip(values, freq) for _ in range(f)]
    n = len(data)
    return R(data[(n - 1) // 2] + data[n // 2], 2)

assert median_discrete([1, 2, 3], [10, 18, 12]) == 2           # lesson15 we-1 spinner, mode 2
assert median_discrete([1, 2, 3, 4], [12, 15, 8, 15]) == 2     # lesson15 Q1, modes 2 and 4 (15 each)
# lesson07 ogive table: 3, 8, 15, 18, 6 (n = 50), classes of width 20
assert [3, 11, 26, 44, 50] == [sum([3, 8, 15, 18, 6][:i + 1]) for i in range(5)]
med = 40 + R(25 - 11, 15) * 20
assert med == R(176, 3) and abs(float(med) - 58.7) < 0.05
# lesson07 Q2: median 25 + (40 - 36)/18 * 5
assert abs(float(25 + R(4, 18) * 5) - 26.1) < 0.05
assert [R(12, 5), R(24, 5), R(18, 5), R(16, 10), R(10, 20)] == [R(24, 10), R(48, 10), R(36, 10), R(16, 10), R(5, 10)]
# lesson07 drill 3: cum 4, 12, 24, 30; n/2 = 15 lies in 30-40
assert 12 < 15 <= 24
# lesson07 drill 5 (site error): Q1 = 20, IQR = 20 -> lower fence -10, so 5 is NOT an outlier
assert 20 - R(3, 2) * 20 == -10 and 5 > -10
# lesson07 we-1 (site error): 20 scores
sc = [42, 45, 48, 52, 55, 58, 62, 64, 65, 68, 70, 72, 75, 78, 82, 85, 88, 90, 95, 98]
lo, hi = sc[:10], sc[10:]
assert R(sc[9] + sc[10], 2) == 69
q1 = R(lo[4] + lo[5], 2); q3 = R(hi[4] + hi[5], 2)
assert q1 == R(113, 2) and q3 == R(167, 2)            # 56.5 (site right) and 83.5 (site says 80)
assert q3 - q1 == 27 and q1 - R(3, 2) * 27 == 16 and q3 + R(3, 2) * 27 == 124
# lesson07 we-2 stem-and-leaf (correct on the site)
st = [23, 25, 31, 32, 32, 38, 41, 45, 45, 45, 52, 58]
assert R(st[5] + st[6], 2) == R(79, 2) and R(st[2] + st[3], 2) == R(63, 2) and R(st[8] + st[9], 2) == 45
# lesson07 Q1 (site error): 16 heights
ht = [152, 155, 158, 160, 162, 163, 165, 165, 168, 170, 172, 175, 178, 180, 185, 190]
assert R(ht[7] + ht[8], 2) == R(333, 2)                # median 166.5 (site right)
assert R(ht[3] + ht[4], 2) == 161                      # Q1 161 (site says 162.5)
assert R(ht[11] + ht[12], 2) == R(353, 2)              # Q3 176.5 (site says 177.5)
assert R(353, 2) - 161 == R(31, 2) and 161 - R(3, 2) * R(31, 2) == R(551, 4) and R(353, 2) + R(3, 2) * R(31, 2) == R(799, 4)
# practice 1: basket items 1..6 with frequencies 3, 9, 5, 6, 4, 3 (n = 30)
fr = [3, 9, 5, 6, 4, 3]
assert sum(fr) == 30 and fr.index(max(fr)) + 1 == 2 and median_discrete(range(1, 7), fr) == 3
# practice 2: queue times, classes of width 10 from 0, frequencies 6, 14, 20, 7, 3
fq = [6, 14, 20, 7, 3]; cq = [sum(fq[:i + 1]) for i in range(5)]
assert sum(fq) == 50 and cq == [6, 20, 40, 47, 50]
assert 20 + R(25 - 20, 20) * 10 == R(45, 2)
print('s11 ok')

print('ALL OK')
