# G03c science check: recomputes every number in chem-m5-g03c.md Revision 2 (run: python g03c-numbers.py). Standard data: NIST/CRC 298 K values.
import math
R=8.314; RL=0.08314  # L bar /(K mol)
def K_from(dH,dS,T): return math.exp(-(dH*1000-T*dS)/(R*T))
print("== Q methanol CO + 2H2 = CH3OH, 2.00 L")
V=2.00; I={'CO':0.200/V,'H2':0.400/V,'M':0.400/V}; Em=0.320/V
cM=Em-I['M']; cCO=-cM; cH2=-2*cM
E={'CO':I['CO']+cCO,'H2':I['H2']+cH2,'M':Em}
print(I,Em,cM,cCO,cH2,E)
bot=E['CO']*E['H2']**2; print('H2^2',E['H2']**2,'bot',bot,'K',E['M']/bot, '0.160/0.01098',0.160/0.01098,'0.160/0.0110',0.160/0.0110)
Q0=I['M']/(I['CO']*I['H2']**2); print('Q start',Q0)
print('slip coeff missed', 0.160/(0.140*0.240**2), 'slip moles', 0.320/(0.280*0.560**2))
print('atoms C',I['CO']+I['M'],E['CO']+E['M'],'H',2*I['H2']+4*I['M'],2*E['H2']+4*E['M'],'O',I['CO']+I['M'],E['CO']+E['M'])
for T in (480,490,500,503,510,520):
    Kp=K_from(-90.5,-219.2,T); print(T,'Kp',Kp,'Kc',Kp*(RL*T)**2)
print("== Q FeO(s)+CO = Fe(s)+CO2, K=0.50, 2.00 L, 0.600 mol CO")
c0=0.600/2.00; x=0.50*c0/1.50; print('c0',c0,'x',x,'check',x/(c0-x),'nFe',x*2.00,'mFe',x*2.00*55.85,'vol forgot',x*55.85,'drop x',0.50*c0, 0.50*c0/c0)
for T in (1073,1173,1273):
    print(T,'K std data',K_from(-11.0,-17.35,T),'Darken logK=688/T-0.90',10**(688/T-0.90))
print("== Q NOCl")
Kf=6.25e4; Kr=1/Kf; print('flipped',Kr); c0=2.00/4.00
x=((Kr*c0**2)/4)**(1/3); print('shortcut: 4x^3 =',Kr*0.250,'x^3',Kr*0.250/4,'x',x,'2x/start',2*x/c0,'n Cl2',x*4.00)
xe=0.01
for i in range(200): xe=(Kr*(c0-2*xe)**2/4)**(1/3)
print('exact x',xe,'nCl2',xe*4,'shortcut high by %',(0.0100/xe-1)*100,'check',(2*xe)**2*xe/(c0-2*xe)**2)
print('not flipped: x^3',Kf*0.250/4,'x',(Kf*0.250/4)**(1/3))
# temperature where Kc = 1.6e-5 (dn=+1, Kc = Kp/(RT))
for T in (298,308,400,410,420,423,430,440):
    Kp=K_from(77.1,(77.1-41.0)/298*1000,T); print(T,'Kp',Kp,'Kc',Kp/(RL*T))
print("== Q4 NO2+SO2=NO+SO3")
c=[0.100/5,0.200/5,0.900/5,1.80/5]; print(c,'top',c[2]*c[3],'bot',c[0]*c[1],'K',c[2]*c[3]/(c[0]*c[1]),'moles K',0.9*1.8/(0.1*0.2))
for T in (723,733,743):
    print(T,'K',K_from(-41.85,-20.7,T))
K=81.0; s=math.sqrt(K); c0=0.500/2.00; x=s*c0/(1+s); print('root',s,'x',x,'[NO2]',c0-x,'check',x**2/(c0-x)**2,'neg root x',-s*c0/(1-s))
a,b,cc=K-1,-2*K*c0,K*c0**2; print('quad',a,b,cc,[(-b+sg*math.sqrt(b*b-4*a*cc))/(2*a) for sg in (1,-1)],'drop x',math.sqrt(K*c0**2))
print('pressures atm: M',(0.160+0.140+0.280)*0.08206*503,'FeO',0.300*0.08206*1073,'NOCl',0.5*0.08206*423,'Q4a',(0.02+0.04+0.18+0.36)*0.08206*733,'Q4b',0.5*0.08206*733)
