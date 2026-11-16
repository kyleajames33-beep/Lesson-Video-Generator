import sys; sys.path.insert(0,'.')
from dig import *
P='C:/lesson-video-generator/work/brief246/methyl-formate-sdbs-1208-p3.png'
xcal=[(470,4000),(656,3000),(846,2000),(1035,1500),(1225,1000),(1400,537)]
pts=track(P,(473,368,1388,828),xcal,[(365,100),(830,0)],start_y=430,thr=150)
print(len(pts), round(min(p[0] for p in pts)))
tab=[(3569,68),(3442,66),(3009,80),(2958,38),(2842,72),(1729,4),(1450,52),(1434,39),(1381,68),(1210,6),(1160,7),(1029,62),(911,30),(768,49),(570,84)]
mm=minima(pts,[(c,8) for c,_ in tab])
for c,t in tab: print(c,t,mm.get(c))
save(pts,'methyl-methanoate-a1208-ir-points.csv','A1208-IR AIST SDBS 1208 IR-NIDA-20626 liquid film; raster from work/brief246/methyl-formate-sdbs-1208-p3.png top plot (NCSU manual p3); x calibrated to printed ticks (two scales; the reproduction is cropped near 560 cm-1), y frame 100/0')
