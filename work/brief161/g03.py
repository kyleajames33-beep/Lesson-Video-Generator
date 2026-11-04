import sympy as s,json
R=s.Rational
p=R(2800)*(1-(1+R(4,1000))**-300)/R(4,1000)
fv=R(2000)*((1+R(5,100))**10-1)/R(5,100)
out={'loan':str(s.N(p,16)),'fv':str(s.N(fv,14)),'due':str(s.N(fv*R(105,100),14)),'compound':str(s.N(10000*(1+R(6,100))**10,14)),'uniform_tail':str(R(2,20)),'disc_k':str(s.solve(10*s.Symbol('k')-1)[0]),'density_k':str(s.solve(8*s.Symbol('k')-1)[0]),'due_rounded':str(round(float(fv*R(105,100)),2))}
open('work/brief161/g03.json','w').write(json.dumps(out,indent=2))
