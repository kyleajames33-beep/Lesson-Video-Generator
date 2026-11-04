import sympy as s,json
q=s.Rational
out={'bacteria6':500*3**6,'bacteria7':500*3**7,'crossing':str(s.N(s.log(2000)/s.log(3),8)),'car':[str(s.N(30000*q(85,100)**i,10)) for i in [5,6,7]],'car_threshold':str(s.N(s.log(q(1,3))/s.log(q(85,100)),8)),'oil10':str(s.N(50000*(1-q(9,10)**10)/(1-q(9,10)),10)),'oil_inf':500000,'town':str(s.N(12000*q(104,100)**5,10)),'bounce':str(2+2*q(12,10)/(1-q(6,10))),'loan':str(30000*q(1006,1000))}
assert (out['bacteria6'],out['bacteria7'],out['oil_inf'],out['bounce'],out['loan'])==(364500,1093500,500000,'8','30180')
open('work/brief161/f08.json','w').write(json.dumps(out,indent=2))
