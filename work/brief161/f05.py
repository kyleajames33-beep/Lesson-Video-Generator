import sympy as s,json
n=s.symbols('n');a,r=s.symbols('a r',real=True)
out={'paper_km':str(s.Rational(1,10)*2**42/s.Integer(1000000)),'terms':[3*2**i for i in range(6)],'term8':3*2**7,'threshold':str(s.N(s.log(s.Rational(1000,3))/s.log(2),8)),'term9':3*2**8,'term10':3*2**9,'a3_a6':[{str(k):str(v) for k,v in z.items()} for z in s.solve([a*r**2-12,a*r**5-96],[a,r],dict=True) if all(v.is_real for v in z.values())],'attempt1':4*(-3)**5,'crossed':4*(-3)**6,'attempt2':[{str(k):str(v) for k,v in z.items()} for z in s.solve([a*r-6,a*r**3-54],[a,r],dict=True)]}
assert out['term8']==384 and out['term9']==768 and out['term10']==1536 and out['attempt1']==-972 and out['crossed']==2916 and len(out['attempt2'])==2
open('work/brief161/f05.json','w').write(json.dumps(out,indent=2))
