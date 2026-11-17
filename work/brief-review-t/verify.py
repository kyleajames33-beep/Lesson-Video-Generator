from sympy import *
d=lambda x: x*pi/180
S=lambda x: sin(d(x)); C=lambda x: cos(d(x)); T=lambda x: tan(d(x))
def p(*a): print(*a)
p("t01")
p([nsimplify(f(a)) for a in (30,45,60) for f in (S,C,T)])
p(N(S(45),12), simplify(S(30)**2+C(30)**2+T(45)), N(2*sqrt(2),4), simplify(T(60)-T(30)), simplify(4*S(60)*C(30)-T(45)**2), N(8*C(45),4), N(8*sqrt(2),4))
p("t02")
h=40*T(52); p(N(h,8), N(h/65,6), N(deg(atan(h/65)),6), N(deg(atan(h/25)),5), N(18/T(27),6), N(18*T(27),4))
def walk(legs):
    x=y=0
    for L,b in legs: x+=L*sin(d(b)); y+=L*cos(d(b))
    return N(sqrt(x**2+y**2),6), N((deg(atan2(x,y))+360)%360,6), N(x,4),N(y,4)
p(walk([(12,40),(9,130)]), N(deg(atan(Rational(9,12))),6))
p(N(30/T(12),6), N(30*T(12),4), walk([(5,70),(12,160)]), N(deg(atan(Rational(12,5))),6))
p(N(S(120),6))
p("t03", sqrt(9+16), N(deg(atan2(4,-3)),6), sqrt(25+144), [S(a) for a in (0,90,180,270,360)],[C(a) for a in (0,90,180,270,360)], S(270)+C(180)+T(360), 2*C(120), 2*S(120))
p("t04", C(150), T(300), S(210), C(330), C(-45), T(-60), S(-30), simplify(S(240)-C(300)+T(-135)), N(S(240)-C(300)+T(-135),5), simplify(S(240)-C(300)-1), sqrt(17**2-8**2))
p("t05", N(8*S(65)/S(45),6), N(8*S(70)/S(45),6))
sb=7*S(63)/9; B=deg(asin(sb)); p(N(sb,8), N(B,6), N((B-43)*60,4), N(44*S(52),6))
p(N(9.6*S(71)/S(38.4),6), N(9.6*S(71)/S(38.24),6), N(Rational(1,2)*4.2*5.5*S(48.6),6), N(Rational(1,2)*4.2*5.5*S(48.36),6))
p("t06", [N(144+81-216*C(a),6) for a in (60,90,120)], N(sqrt(117),5), N(sqrt(333),6), N(154*C(62),6), N(sqrt(170-154*C(62)),5))
p(walk([(12,40),(9,100)]), N(deg(asin(9*S(120)/sqrt(333))),6))
cc=Rational(25+36-100,60); A=deg(acos(cc)); p(cc, N(A,7), N((A-130)*60,5))
dd=350**2+420**2-2*350*420*C(118); p(N(dd,9), N(sqrt(dd),6), N(sqrt(350**2+420**2-2*350*420*abs(C(118))),6), Rational(49+64-169,112))
p("t07", N(9*S(40)/7,6), N(deg(asin(9*S(40)/7)),6))
B1=deg(asin(9*S(40)/7)); 
for Bv in (B1,180-B1):
    Cv=180-40-Bv; p(N(Cv,6), N(7*S(Cv)/S(40),6))
p(N(9*S(40),6), N(5*S(70)/12,6), N(deg(asin(5*S(70)/12)),6))
a2=81+144-216*C(47); a=sqrt(a2); p(N(a2,6), N(a,6), N(deg(asin(9*S(47)/a)),5), N(deg(asin(9*S(47)/8.8)),5))
p(N(10*S(32),5), N(10*S(32)/6,5), N(deg(asin(10*S(32)/6)),5), N(180-32-deg(asin(10*S(32)/6)),5), N(32+deg(asin(10*S(32)/6))-180+180 ,5), N(12*S(50),5))
p("t08", N(180/pi,6), N(5*pi,4), N(50*pi,5), Rational(135,180), N(5*pi/6*pi/180,4), simplify(2*sin(2*pi/3)*cos(7*pi/6)+tan(3*pi/4)), N(210*180/pi,6), simplify(cos(5*pi/6)-sin(7*pi/4)), N(cos(5*pi/6)-sin(7*pi/4),5))
