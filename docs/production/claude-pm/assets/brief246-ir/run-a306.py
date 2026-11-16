import sys; sys.path.insert(0,'.')
from dig import *
P='C:/lesson-video-generator/work/brief246/acetic-acid-sdbs-306-p3.png'
xcal=[(295,4000),(529,3000),(761,2000),(996,1500),(1233,1000),(1464,500),(1508,400)]
pts,n=digitise(P,(298,1462,1506,2029),xcal,[(1460,100),(2031,0)])
print('components',n,'points',len(pts))
tab=[(2937,25),(1758,19),(1714,4),(1414,20),(1360,29),(1294,12),(1018,41),(935,37),(892,41),(629,31),(607,49),(1063,67),(2684,41),(2631,39),(2659,49)]
mm=minima(pts,[(c,8) for c,_ in tab])
for c,t in tab: print(c,t,mm.get(c))
save(pts,'ethanoic-acid-a306-ir-points.csv','A306-IR AIST SDBS 306 IR-NIDA-60820 liquid film; raster from work/brief246/acetic-acid-sdbs-306-p3.png lower plot; x calibrated to printed ticks (4000..2000 and 2000..400 two scales); y frame 100/0')
