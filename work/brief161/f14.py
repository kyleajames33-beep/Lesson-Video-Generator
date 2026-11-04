import sympy as s,json
R=s.Rational
def fv(m,r,n,p=0):return p*(1+r)**n+m*((1+r)**n-1)/r
pairs={'base':(300,R(4,1000),60,0),'double':(600,R(4,1000),60,0),'start':(300,R(4,1000),60,5000),'rate5':(300,R(8,1000),60,0),'years10':(300,R(4,1000),120,0),'years20':(300,R(4,1000),240,0),'years30':(300,R(4,1000),360,0),'high30':(300,R(8,1000),360,0),'retire40':(9200,R(7,100),40,0),'retire30':(9200,R(7,100),30,0),'a1':(200,R(5,1000),120,0),'planA':(400,R(5,1000),240,0),'planB':(800,R(5,1000),120,0)}
out={k:str(s.N(fv(*v),14)) for k,v in pairs.items()}
open('work/brief161/f14.json','w').write(json.dumps(out,indent=2))
