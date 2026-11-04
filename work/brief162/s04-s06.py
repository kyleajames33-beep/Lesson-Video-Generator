"""Exact independent checks of Maths A12 S04-S06 Revision 1."""
from sympy import symbols, Rational as R, integrate, diff, sqrt, root, simplify
import json

x,t,k=symbols('x t k', real=True)
def eq(actual, expected, label):
    if simplify(actual-expected)!=0: raise AssertionError(f'{label}: {actual} != {expected}')

counts=[20,50,70,40,20]
assert sum(counts)==200
assert [R(c,200) for c in counts]==[R(1,10),R(1,4),R(7,20),R(1,5),R(1,10)]
eq(R(50+70,200),R(3,5),'s04 interval')
eq(R(20+25,200),R(9,40),'s04 cut class')
eq(R(35,100)*R(1,100),R(7,2000),'s04 shrink')
eq(R(7,2)*R(2,100),R(7,100),'s04 narrow interval')
F=x*x/9
eq(F.subs(x,2)-F.subs(x,1),R(1,3),'s04 CDF')
eq(1-F.subs(x,2),R(5,9),'s04 tail')
G=(x*x+2*x)/8
eq(G.subs(x,R(3,2))-G.subs(x,R(1,2)),R(1,2),'s04 attempt 2')
assert sum([60,140,160,40])==400
eq(R(160,2)/400+R(40,400),R(3,10),'s04 attempt 1')

eq((F.subs(x,R(3,5))-F.subs(x,R(1,2))),R(11,900),'s05 first strip')
eq(F.subs(x,R(13,5))-F.subs(x,R(5,2)),R(17,300),'s05 second strip')
eq((F.subs(x,R(8,5))-F.subs(x,R(3,2)))/R(1,10),R(31,90),'s05 average slope 0.1')
eq((F.subs(x,R(151,100))-F.subs(x,R(3,2)))/R(1,100),R(301,900),'s05 average slope 0.01')
eq(diff(F,x).subs(x,R(3,2)),R(1,3),'s05 tangent')
eq(integrate(2*x/9,(x,0,3)),1,'s05 density total')
eq(integrate((4-x)/8,(x,0,4)),1,'s05 triangular density total')
eq(integrate((4-x)/8,(x,0,1)),R(7,16),'s05 triangular CDF')
eq(integrate((x+1)/4,(x,1,2)),R(5,8),'s05 attempt 1')
eq(integrate((2-x)/2,(x,0,2)),1,'s05 attempt 2')

h=3*x*(2-x)/4
eq(h.subs(x,1),R(3,4),'s06 symmetric mode height')
eq(integrate(h,(x,R(1,10),R(3,10))),R(107,2000),'s06 left window')
eq(integrate(h,(x,R(9,10),R(11,10))),R(299,2000),'s06 mode window')
eq(integrate(x/8,(x,0,4)),1,'s06 x/8 total')
eq((2*sqrt(3)) - 2,2*(sqrt(3)-1),'s06 IQR')
eq(integrate(3*x*x/8,(x,0,2)),1,'s06 x² density total')
eq(integrate(3*(4-x)**2/64,(x,0,4)),1,'s06 lifetime total')
eq(integrate(12*x*x*(1-x),(x,0,1)),1,'s06 attempt 1 total')
eq((12*x*x*(1-x)).subs(x,R(2,3)),R(16,9),'s06 attempt 1 mode')
eq(G.subs(x,sqrt(3)-1),R(1,4),'s06 attempt 2 quartile')

results={'s04':'All stated counts, CDF differences and attempts pass exact arithmetic.',
         's05':'All stated integrals, strip slopes, density normalisations and attempts pass.',
         's06':'All stated density integrals, peaks, window areas and quartile equations pass.'}
with open('work/brief162/s04-s06.json','w') as out:json.dump(results,out,indent=2)
print('s04-s06 independent SymPy arithmetic passed')
