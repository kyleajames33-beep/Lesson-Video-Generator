import sympy as s,json
k=s.symbols('k',integer=True,nonnegative=True);q=s.Rational(1,2)
r={'halve10':str(q**10),'half_partial':[str(sum((64*q**j for j in range(i)),s.Integer(0))) for i in range(1,9)],'third_sum':str(s.Rational(12)/(1-s.Rational(1,3))),'alternating_partial':[str(sum((8*(-q)**j for j in range(i)),s.Integer(0))) for i in range(1,8)],'alternating_sum':str(s.Rational(8)/(1+q)),'decimal':str(s.Rational(27,100)/(1-s.Rational(1,100))),'ratio':str(1-s.Rational(10,40)),'xzero_sum':'1','negative_first_sum':str(s.Rational(-8)/(1+q))}
assert r['halve10']=='1/1024' and r['third_sum']=='18' and r['alternating_sum']=='16/3' and r['decimal']=='3/11' and r['ratio']=='3/4'
open('work/brief161/f07.json','w').write(json.dumps(r,indent=2))
