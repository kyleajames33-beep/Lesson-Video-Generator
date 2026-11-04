import sympy as s,json
x,t=s.symbols('x t',real=True);r=2*t*s.exp(t*t);v=t*t-2*t;f=2*x/(x*x+1)
out={'rate_primitive':str(s.integrate(r,t)),'rate_change':str(s.integrate(r,(t,0,1))),'volume':'exp(t**2)+4','displacement':str(s.integrate(v,(t,0,3))),'distance':str(-s.integrate(v,(t,0,2))+s.integrate(v,(t,2,3))),'trapezia':str(s.Rational(2,2)*(3+2*(5+6+4)+2)),'area':str(-s.integrate(f,(x,-1,0))+s.integrate(f,(x,0,2))),'tank5':str(20+6*5-5**2)}
assert out['displacement']=='0' and out['distance']=='8/3' and out['trapezia']=='35' and out['tank5']=='25' and s.simplify(s.sympify(out['area'])-s.log(10))==0
open('work/brief161/g02.json','w').write(json.dumps(out,indent=2))
