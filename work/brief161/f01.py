import sympy as s,json
n,k,t=s.symbols('n k t',integer=True)
res={
'hook':[int((t**3-2*t**2).subs(t,i)) for i in range(1,5)],
'even_terms':[2*i for i in range(1,8)],
'partial_sums':[int(s.summation(2*k,(k,1,i))) for i in range(1,9)],
'odd_sum_4':int(s.summation(2*k-1,(k,1,4))),
'squares_3_to_7':[i*i for i in range(3,8)],
'polynomial_terms':[int((n*n-n+1).subs(n,i)) for i in range(1,6)],
'odd_sum_10':int(s.summation(2*k-1,(k,1,10))),
'attempt1':[int((4*k-3).subs(k,i)) for i in range(2,6)],
'crossed_attempt1':int(s.summation(4*k-3,(k,1,4))),
'attempt2':[int((10-2*n).subs(n,i)) for i in range(1,5)],
'handoff':[3+4*i for i in range(5)]}
assert res['hook']==[-1,0,9,32] and res['partial_sums']==[2,6,12,20,30,42,56,72]
assert res['odd_sum_4']==16 and sum(res['squares_3_to_7'])==135 and sum(res['polynomial_terms'])==45 and res['odd_sum_10']==100
assert sum(res['attempt1'])==44 and res['crossed_attempt1']==28 and sum(res['attempt2'])==20 and res['handoff']==[3,7,11,15,19]
open('work/brief161/f01.json','w').write(json.dumps(res,indent=2))
