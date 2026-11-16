import sys; sys.path.insert(0,'.')
from dig import *
P='C:/lesson-video-generator/work/brief246/muenster-p15.png'
xcal=[(416,4000),(581,3000),(746,2000),(909,1500),(1074,1000),(1238.5,500),(1271,400)]
blank=[(540,850,780,876),(1000,850,1180,876)]
pts=track(P,(418,857,1270,1254),xcal,[(855,100),(1255.5,0)],start_y=878,blank=blank,hlines=[(880,895)],minline=40)
print(len(pts))
tab=[(3414,79),(3005,66),(2966,74),(2925,77),(1749,52),(1715,4),(1434,49),(1421,47),(1363,13),(1223,12),(1093,68),(903,81),(531,36)]
mm=minima(pts,[(c,8) for c,_ in tab])
for c,t in tab: print(c,t,mm.get(c))
save(pts,'propanone-a319-ir-points.csv','A319-IR AIST SDBS 319 IR-NIDA-63533 liquid film; raster from work/brief246/muenster-p15.png left plot (slide 15); x calibrated to printed ticks (two scales), y frame 100/0; overlaid region arrows and labels removed')
