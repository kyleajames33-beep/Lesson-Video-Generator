import sympy as s,json
from math import comb
R=s.Rational
counts=[28,35,31,38,34,34];tail=sum((R(comb(200,k))*R(1,6)**k*R(5,6)**(200-k) for k in range(38,201)),R(0)); out={'counts_sum':sum(counts),'frequencies':[str(R(v,200)) for v in counts],'tail':str(s.N(tail,10)),'coin':[str(R(comb(3,k),8)) for k in range(4)],'spinner':[str(R(n,250)) for n in [55,70,60,65]],'counter':['1/6','2/3','1/6']}
assert out['counts_sum']==200 and out['coin']==['1/8','3/8','3/8','1/8']
open('work/brief162/s01.json','w').write(json.dumps(out,indent=2))
