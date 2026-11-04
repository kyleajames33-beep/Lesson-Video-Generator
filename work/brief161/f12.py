import sympy as s,json
R=s.Rational
sav=[R(0)];fund=[R(100000)];test=[R(0)]
for i in range(120):
 if i<3:sav.append(sav[-1]*R(1005,1000)+200);test.append(test[-1]*R(1005,1000)+400)
 fund.append(fund[-1]*R(1004,1000)-R(105091,100))
last=(fund[119]*R(1004,1000));out={'savings':[str(v) for v in sav],'test':[str(v) for v in test],'fund1':str(fund[1]),'fund2':str(s.N(fund[2],12)),'fund120':str(s.N(fund[120],10)),'last':str(s.N(last,12))}
assert sav[-1]==R(120601,200) and test[-1]==R(120601,100) and fund[1]==R(9934909,100)
open('work/brief161/f12.json','w').write(json.dumps(out,indent=2))
