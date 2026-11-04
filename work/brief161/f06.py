import sympy as s,json
x,k=s.symbols('x k'); results={}
for n in range(1,7):assert s.expand((x-1)*sum(x**j for j in range(n))-(x**n-1))==0
results['double10']=sum(2**j for j in range(10));results['sigma']=sum(3*2**j for j in range(6));results['negative']=sum((-3)**j for j in range(6));results['half']=str(sum((s.Integer(64)*s.Rational(1,2)**j for j in range(8)),s.Integer(0)));results['attempt1']=sum(2*3**j for j in range(5));results['attempt2']=sum(3*2**j for j in range(8));results['counter_negative_a']=str(s.Rational(-3)*(2**6-1))
assert [results[x] for x in ['double10','sigma','negative','half','attempt1','attempt2']]==[1023,189,-182,'255/2',242,765]
open('work/brief161/f06.json','w').write(json.dumps(results,indent=2))
