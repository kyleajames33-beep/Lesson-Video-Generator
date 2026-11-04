"""Independent exact/seeded numerical checks of Maths A12 s07-s09."""
from sympy import symbols, integrate, Rational as R, pi, sqrt, sin, cos, simplify
from math import comb, erf, sqrt as msqrt
from collections import Counter
from random import Random
import json

x,a,b=symbols('x a b',real=True)
def eq(actual,expected,label):
    assert simplify(actual-expected)==0,(label,actual,expected)

# S07: two uniform waiting-time models.
eq(integrate(R(1,10),(x,0,10)),1,'bus total')
eq(integrate(R(1,10),(x,3,7)),R(2,5),'bus interval')
eq(integrate(R(1,4),(x,1,5)),1,'train total')
eq(integrate(R(1,4),(x,1,R(7,2))),R(5,8),'train CDF')
eq(integrate(R(1,8),(x,4,7)),R(3,8),'second interval')
eq(integrate(R(1,5),(x,R(11,2),8)),R(1,2),'attempt 1')
eq((8-6)/8,R(1,4),'attempt 2 k=8')
waits=[R(10)-R('3.1'),R(10)-R('8.6'),R(20)-R('14'),R(30)-R('21.7'),R(30)-R('26.4')]
assert waits==list(map(R,['6.9','1.4','6.0','8.3','3.6']))

# S08: moments and a deliberately labelled beyond-course trigonometric case.
eq(integrate(x/4,(x,1,5)),3,'uniform mean')
eq(integrate(x*x/4,(x,1,5)),R(31,3),'uniform second moment')
eq(integrate(x*x/8,(x,0,4)),R(8,3),'linear density mean')
eq(integrate(x*x*x/8,(x,0,4)),8,'linear density second moment')
eq(integrate(x*sin(x)/2,(x,0,pi)),pi/2,'sin mean')
eq(integrate(x*x*sin(x)/2,(x,0,pi)),(pi*pi-4)/2,'sin second moment')
eq(integrate(2*x*x,(x,0,1)),R(2,3),'attempt 1 mean')
eq(integrate(2*x*x*x,(x,0,1)),R(1,2),'attempt 1 second moment')
eq(integrate(x*cos(x),(x,0,pi/2)),pi/2-1,'attempt 2 mean')
eq(integrate(x*x*cos(x),(x,0,pi/2)),pi*pi/4-2,'attempt 2 second moment')
midpoints={}
for n in [4,8,16]:
    dx=R(4,n)
    midpoints[n]=simplify(sum((i+R(1,2))*dx*((i+R(1,2))*dx/8)*dx for i in range(n)))
assert midpoints=={4:R(21,8),8:R(85,32),16:R(341,128)}

# S09: deterministic random demonstrations and exact combinatorics.
fill_rng=Random(1636)
fills=[fill_rng.gauss(500,8) for _ in range(1000)]
fill_bins=Counter(int((v-476)//4) for v in fills if 476<=v<528)
expected_fills=[2,17,45,94,153,192,191,152,94,41,16,3,0]
assert [fill_bins[i] for i in range(13)]==expected_fills
peg_rng=Random(4505)
pegs=Counter(sum(peg_rng.randint(0,1) for _ in range(12)) for _ in range(400))
expected_pegs=[0,1,7,22,49,74,91,80,47,22,6,1,0]
assert [pegs[i] for i in range(13)]==expected_pegs
assert comb(12,6)==924 and 2**12==4096
assert abs((1-erf(1.6/msqrt(2)))/2-0.0548)<0.00001

out={'s07_waits':[str(v) for v in waits], 's08_midpoint_mean_estimates':{str(k):str(v) for k,v in midpoints.items()},
     's09_fill_bins':[fill_bins[i] for i in range(13)], 's09_peg_bins':[pegs[i] for i in range(13)],
     's09_normal_tail_z16':(1-erf(1.6/msqrt(2)))/2}
with open('work/brief162/s07-s09.json','w') as f:json.dump(out,f,indent=2)
print('s07-s09 exact and seeded checks passed')
