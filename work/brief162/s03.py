from sympy import Rational, sqrt, simplify, solve, symbols
import json

def moments(values, weights):
    mu = sum(x*p for x,p in zip(values,weights))
    second = sum(x*x*p for x,p in zip(values,weights))
    var = simplify(second-mu*mu)
    return mu,second,var

die = moments(list(range(1,7)),[Rational(1,6)]*6)
site = moments(list(range(4)),list(map(Rational,['0.1','0.3','0.4','0.2'])))
attempt = moments(list(range(4)),list(map(Rational,['0.1','0.3','0.5','0.1'])))
insurance = moments([0,1000,8000],list(map(Rational,['0.93','0.05','0.02'])))
a,b=symbols('a b')
unknowns=solve((a+b-Rational('0.8'),2*a+3*b-Rational('2.1')),(a,b))
assert die==(Rational(7,2),Rational(91,6),Rational(35,12))
assert site==(Rational(17,10),Rational(37,10),Rational(81,100))
assert attempt==(Rational(8,5),Rational(16,5),Rational(16,25))
assert insurance==(210,1330000,1285900)
assert unknowns=={a:Rational(3,10),b:Rational(1,2)}
assert sum([Rational(-17,100),Rational(-21,100),Rational(12,100),Rational(26,100)])==0
results={'die':list(map(str,die)),'site':list(map(str,site)), 'attempt_1':list(map(str,attempt)),
         'insurance':list(map(str,insurance)), 'insurance_sigma':str(sqrt(insurance[2]).evalf(8)),
         'attempt_2':{str(k):str(v) for k,v in unknowns.items()},
         'running_mean_checkpoints':{'10':str(Rational(42,10)),'1000':str(Rational(3496,1000)),'2000':str(Rational(6982,2000))}}
with open('work/brief162/s03.json','w',encoding='utf-8') as f: json.dump(results,f,indent=2)
print('s03 SymPy checks passed')
