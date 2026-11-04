from collections import Counter
from sympy import Rational, simplify
import json

dice = Counter(a+b for a in range(1,7) for b in range(1,7))
letters = Counter('STATISTICS')
remainders = Counter(x%3 for x in range(1,9))
checks = {
    'two_dice_counts': [dice[k] for k in range(2,13)],
    'two_dice_total': sum(dice.values()),
    'letters': dict(sorted(letters.items())),
    'digits_at_least_7': str(Rational(len([x for x in range(10) if x>=7]),10)),
    'inclusive_count_5_to_20': len(range(5,21)),
    'integers_above_16': str(Rational(len([x for x in range(5,21) if x>16]),16)),
    'fifteen_over_75': str(Rational(15,75)),
    'twentyfive_over_75': str(Rational(25,75)),
    'n_from_004': str(1/Rational('0.04')),
    'n_from_03': str(1/Rational('0.3')),
    'attempt_1': str(Rational(len([x for x in range(2,21,2) if x>15]),len(range(2,21,2)))),
    'spinner_remainders': dict(sorted(remainders.items())),
    'spinner_probabilities': {str(k):str(Rational(v,8)) for k,v in sorted(remainders.items())},
    'equal_total_for_n': {str(n):str(simplify(n*Rational(1,n))) for n in (6,12,24,48)}
}
assert checks['two_dice_counts']==[1,2,3,4,5,6,5,4,3,2,1]
assert checks['two_dice_total']==36 and checks['letters']=={'A':1,'C':1,'I':2,'S':3,'T':3}
assert checks['digits_at_least_7']=='3/10' and checks['integers_above_16']=='1/4'
assert checks['fifteen_over_75']=='1/5' and checks['twentyfive_over_75']=='1/3'
assert checks['n_from_004']=='25' and checks['n_from_03']=='10/3'
assert checks['attempt_1']=='3/10' and checks['spinner_remainders']=={0:2,1:3,2:3}
with open('work/brief162/s02.json','w',encoding='utf-8') as f:json.dump(checks,f,indent=2)
print('s02 SymPy checks passed')
