import sympy as s,json
k,n=s.symbols('k n',integer=True,positive=True)
r={'savings12':int((30*n+20).subs(n,12)),'savingsTotal':int(s.summation(30*k+20,(k,1,12))),'salary10':int(s.summation(62000+3500*(k-1),(k,1,10))),'salary11':62000+10*3500,'salary12':62000+11*3500,'salary_root':str(s.Rational(41500,3500)),'machine60':900-59*15,'machine61':900-60*15,'machine_total':int(s.summation(900-15*(k-1),(k,1,60))),'car6':28000-6*2500,'cafe15':80+14*6,'cafe_total':int(s.summation(80+6*(k-1),(k,1,15))),'snow21':180-20*4,'snow22':180-21*4}
assert (r['savings12'],r['savingsTotal'],r['salary10'])==(380,2580,777500)
assert (r['salary11'],r['salary12'],r['salary_root'])==(97000,100500,'83/7')
assert (r['machine60'],r['machine61'],r['machine_total'],r['car6'])==(15,0,27450,13000)
assert (r['cafe15'],r['cafe_total'],r['snow21'],r['snow22'])==(164,1830,100,96)
open('work/brief161/f04.json','w').write(json.dumps(r,indent=2))
