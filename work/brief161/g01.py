import sympy as s,json
x,a,b=s.symbols('x a b',real=True)
f=x*x-6*s.log(x);roots=s.solve(s.together(s.diff(f,x)-4),x)
cubic=x**3+a*x**2+b*x;sol=s.solve([cubic.subs(x,1)+2,s.diff(cubic,x).subs(x,1)],[a,b]);attempt1=s.solve(s.together(2*x/(x*x-4)-1),x);contact=s.solve(1-s.log(a)+1,a)
res={'derivative':str(s.diff(f,x)),'given_gradient_roots':list(map(str,roots)),'point_height':str(f.subs(x,3)),'tangent_intercept':str(s.simplify(f.subs(x,3)-12)),'cubic':{str(k):str(v) for k,v in sol.items()},'cubic_at_minus1':str((x**3-3*x).subs(x,-1)),'attempt1_roots':list(map(str,attempt1)),'contact2':list(map(str,contact))}
assert roots==[-1,3] and sol=={a:0,b:-3} and res['cubic_at_minus1']=='2'
open('work/brief161/g01.json','w').write(json.dumps(res,indent=2))
