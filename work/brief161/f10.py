import math,json
import sympy as s
from decimal import Decimal,getcontext
getcontext().prec=40
D=Decimal

def loan(P,rate,payment):
 r=D(str(rate))/12;M=D(str(payment));balance=D(str(P));n=0
 if M<=balance*r:return None
 while True:
  due=balance*(1+r);n+=1
  if due<=M:return {'payments':n,'last':float(due),'years_formula':math.log(float(M/(M-D(str(P))*r)))/math.log(float(1+r))/12}
  balance=due-M
out={'repayment_cases':{str(m):loan(400000,'0.05',m) for m in ['2147.29','2500','3000','3500','1700','1800','2000']},'rate_cases':{str(r):loan(400000,r,'2500') for r in ['0.04','0.05','0.06','0.07']},'six_percent_old':loan(400000,'0.06','2147.29'),'min_15y':float(D(400000)*(D('0.05')/12)/(1-(1+D('0.05')/12)**(-180))),'site_payment':float(D(300000)*(D('0.054')/12)/(1-(1+D('0.054')/12)**(-360))),'site_term_months':12*loan(500000,'0.052','3200')['years_formula']}
assert [out['repayment_cases'][m]['payments'] for m in ['2147.29','2500','3000','3500']]==[360,265,196,156]
assert abs(out['repayment_cases']['2500']['last']-540.57)<.01
P=s.Integer(400000); rate=s.Rational(1,240); M=s.Integer(2500)
exact_term=s.log(M/(M-P*rate))/s.log(1+rate)
assert abs(float(exact_term)/12-out['repayment_cases']['2500']['years_formula'])<1e-10
out['sympy_months_2500']=str(s.N(exact_term,12))
open('work/brief161/f10.json','w').write(json.dumps(out,indent=2))
