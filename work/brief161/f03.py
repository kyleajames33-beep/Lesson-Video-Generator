import sympy as s,json
n,k=s.symbols('n k',integer=True,positive=True)
r={'staircase':int(s.summation(k,(k,1,50))),'rectangle':50*51,'sum20':int(s.summation(3+4*(k-1),(k,1,20))),'term20':3+19*4,'range_count':200-50+1,'range_sum':int(s.summation(k,(k,50,200))),'threshold_root':str(s.N((-3+s.sqrt(20009))/10,8)),'threshold13':int(s.summation(4+5*(k-1),(k,1,13))),'threshold14':int(s.summation(4+5*(k-1),(k,1,14))),'two_roots':[str(x) for x in s.solve(n*(12-n)-32,n)],'partial_values':[int(s.summation(11-2*(k-1),(k,1,i))) for i in range(1,10)],'attempt1':int(s.summation(5+3*(k-1),(k,1,30))),'attempt2':[2*10**2,2*11**2], 'counterexample':[1,3,2,4]}
assert r['staircase']==1275 and r['sum20']==820 and r['term20']==79 and r['range_sum']==18875
assert r['threshold13']==442 and r['threshold14']==511 and r['two_roots']==['4','8'] and r['attempt1']==1455 and r['attempt2']==[200,242]
assert sum(r['counterexample'])==len(r['counterexample'])*(r['counterexample'][0]+r['counterexample'][-1])/2
open('work/brief161/f03.json','w').write(json.dumps(r,indent=2))
