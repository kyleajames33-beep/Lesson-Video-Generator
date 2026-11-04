import sympy as s,json
R=s.Rational
p=R(30000);r=R(6,1000);pay=R(600);bal=p;rows=[]
for i in range(3):
 interest=bal*r;bal=bal+interest-pay;rows.append({'interest':str(interest),'balance':str(bal)})
P=R(400000);R0=R(1,240);M=R(214729,100)
def loan(n):return P*(1+R0)**n-M*((1+R0)**n-1)/R0
first=next(i for i in range(1,361) if loan(i)<P/2)
out={'rows':rows,'closed3':str(p*(1+r)**3-pay*((1+r)**3-1)/r),'home180':str(s.N(loan(180),14)),'home240':str(s.N(loan(240),14)),'first_below_half':first,'home360':str(s.N(loan(360),12)),'attempt1':str(R(12000)*R(1005,1000)**2-250*(1+R(1005,1000))),'attempt2_factor':str(R(900)/R(4,1000))}
assert bal==R(2873242488,100000) and first==242 and out['attempt1']=='232381/20' and out['attempt2_factor']=='225000'
open('work/brief161/f09.json','w').write(json.dumps(out,indent=2))
