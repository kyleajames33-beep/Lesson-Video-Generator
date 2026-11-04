import sympy as s,json
R=s.Rational
def factor(r,n):return ((1+r)**n-1)/r
p=R(5,1000);f=factor(p,360);fr=R(64,1000*26);a=R(11,1000); q=R(4,100)
out={'target_factor':str(s.N(f,14)),'deposit':str(s.N(600000/f,14)),'deposit_59730':str(s.N(R(59730,100)*f,14)),'deposit_59731':str(s.N(R(59731,100)*f,14)),'fortnight':str(s.N(450*factor(fr,650),14)),'rounded_rate':str(s.N(450*factor(R(2462,1000000),650),14)),'n':str(s.N(s.log(R(3,2))/s.log(1+p),14)),'m81':str(s.N(500*factor(p,81),14)),'m82':str(s.N(500*factor(p,82),14)),'stop':str(s.N(300*factor(R(4,1000),60)*(1+R(4,1000))**36,14)),'a1factor':str(s.N(factor(a,24),14)),'a1deposit':str(s.N(30000/factor(a,24),14)),'a2':str(s.N(2000*factor(q,10)*(1+q)**5,14))}
open('work/brief161/f15.json','w').write(json.dumps(out,indent=2))
