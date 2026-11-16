import sys; sys.path.insert(0,'.')
from dig import *
P='C:/lesson-video-generator/work/brief246/butanone-experimental-p2.png'
xcal=[(180,4000),(344,3000),(508,2000),(672,1500),(836,1000),(1000,500),(1032,402)]
pts=track(P,(182,174,1031,494),xcal,[(172,100),(495.5,0)],start_y=190,thr=150,blank=[(200,455,320,485)])
print(len(pts), round(min(p[0] for p in pts)))
tab=[(3511,84),(3416,79),(2981,26),(2964,44),(2940,37),(2909,50),(2883,62),(1718,4),(1461,34),(1454,36),(1417,27),(1366,13),(1257,74),(1206,69),(1173,14),(1087,84),(996,74),(946,49),(761,66),(590,57),(517,66)]
mm=minima(pts,[(c,6) for c,_ in tab])
for c,t in tab: print(c,t,mm.get(c))
save(pts,'butanone-mek-ir-points.csv','MEK-IR experimental liquid-film 2-butanone, Investigation 2 page 2 (no SDBS accession printed); raster from work/brief246/butanone-experimental-p2.png top plot; x calibrated to printed ticks (two scales), y frame 100/0; the "IR: Liquid film" label removed')
