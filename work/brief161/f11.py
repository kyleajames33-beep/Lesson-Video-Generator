import sympy as s,json
R=s.Rational
p=R(250000);r=R(1,200);N=240;g=(1+r)**N;exact=p*r*g/(g-1);M=R(179108,100)
def A(P,R,M,n):return P*(1+R)**n-M*((1+R)**n-1)/R
bal239=A(p,r,M,239);final=bal239*(1+r);total=239*M+final
p2=R(20000);r2=R(6,1000);m2=R(400);bal59=A(p2,r2,m2,59)
out={'repayment':str(s.N(exact,12)),'balance120':str(s.N(A(p,r,M,120),12)),'final240':str(s.N(final,12)),'paid_exact_final':str(s.N(total,12)),'interest_exact_final':str(s.N(total-p,12)),'paid_240_rounded':str(240*M),'balance240':str(s.N(A(p,r,M,240),12)),'balance59':str(s.N(bal59,12)),'final60':str(s.N(bal59*(1+r2),12)),'logterm':str(s.N(s.log(s.Rational(10,7))/s.log(1+r2),12)),'car_M':str(s.N(24000*r*(1+r)**60/((1+r)**60-1),12)),'other_term':str(s.N(s.log(s.Rational(50,41))/s.log(1+r),12)),'other_balance39':str(s.N(A(R(18000),r,R(500),39),12))}
open('work/brief161/f11.json','w').write(json.dumps(out,indent=2))
