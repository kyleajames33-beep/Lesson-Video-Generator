import sympy as s,json
n,a,d=s.symbols('n a d',real=True)
r={'hundred_guess':3+100*4,'hundred_term':3+99*4,'plot':[4*i-1 for i in range(1,7)],'brackets':[4*25-1,4*26-1],'nonterm_position':str(s.solve(4*n-1-100,n)[0]),'first_example_term':5+9*3,'first_example_position':str(s.solve(5+3*(n-1)-50,n)[0]),'two_terms':{str(k):str(v) for k,v in s.solve([a+3*d-13,a+8*d-33],(a,d)).items()},'negative_sequence':[7-4*(i-1) for i in range(1,6)],'negative_boundary':str(s.Rational(11,4)),'attempt1':12+19*(-5),'attempt1_cross':12+20*(-5),'attempt2':{str(k):str(v) for k,v in s.solve([a+2*d-10,a+6*d-26],(a,d)).items()},'attempt2_cross':str(s.Rational(16,5)),'site_root':str(s.N((-3+s.sqrt(40009))/10,8))}
assert r['hundred_term']==399 and r['plot']==[3,7,11,15,19,23] and r['brackets']==[99,103] and r['nonterm_position']=='101/4'
assert r['first_example_term']==32 and r['first_example_position']=='16' and r['two_terms']=={'a':'1','d':'4'} and r['negative_sequence']==[7,3,-1,-5,-9]
assert r['attempt1']==-83 and r['attempt1_cross']==-88 and r['attempt2']=={'a':'2','d':'4'}
open('work/brief161/f02.json','w').write(json.dumps(r,indent=2))
