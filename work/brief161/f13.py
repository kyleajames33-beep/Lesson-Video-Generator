import sympy as s,json
R=s.Rational
def fv(m,r,n):return m*((1+r)**n-1)/r
out={'d01':str(s.N(fv(200,R(5,1000),60),14)),'first_deposit':str(s.N(200*(1+R(5,1000))**59,14)),'three':str(fv(200,R(5,1000),3)),'site5':str(s.N(fv(300,R(4,1000),60),14)),'site30':str(s.N(fv(300,R(4,1000),360),14)),'dep315':str(s.N(fv(300,R(4,1000),315),14)),'dep316':str(s.N(fv(300,R(4,1000),316),14)),'attempt1':str(s.N(fv(900,R(5,100),5),14)),'attempt2':str(s.N(fv(250,R(3,1000),24),14))}
open('work/brief161/f13.json','w').write(json.dumps(out,indent=2))
