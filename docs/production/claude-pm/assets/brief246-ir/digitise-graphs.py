"""Digitise a scanned IR transmittance trace: per pixel column, the dark run connected to the previous column's run.
Usage: functions only (imported). Writes wavenumber,%T CSV (min and max per column, ordered for continuity)."""
import numpy as np
from PIL import Image
from scipy.ndimage import label
def digitise(path, box, xcal, ycal, thr=140, minrun=1, skip_rows=(), skip_cols=()):
    g=np.array(Image.open(path).convert('L'))
    x0,y0,x1,y1=box
    m=g[y0:y1,x0:x1]<thr
    for r in skip_rows: m[max(0,r-y0-1):r-y0+2,:]=False
    for c in skip_cols: m[:,max(0,c-x0-1):c-x0+2]=False
    # keep the largest connected component(s): the trace
    lab,n=label(m,structure=np.ones((3,3)))
    sizes=np.bincount(lab.ravel()); sizes[0]=0
    keep=np.zeros_like(m)
    big=[i for i in range(1,n+1) if sizes[i]>=0.15*sizes.max()]
    for i in big: keep|=lab==i
    pts=[];prev=None
    for cx in range(keep.shape[1]):
        ys=np.where(keep[:,cx])[0]
        if not len(ys): continue
        lo,hi=ys.min()+y0,ys.max()+y0
        X=x0+cx
        wn=np.interp(X,[p[0] for p in xcal],[p[1] for p in xcal])
        T=lambda yy: float(np.interp(yy,[ycal[0][0],ycal[1][0]],[ycal[0][1],ycal[1][1]]))
        a,b=(lo,hi) if prev is None or abs(prev-lo)<=abs(prev-hi) else (hi,lo)
        pts.append((wn,T(a)));
        if hi!=lo: pts.append((wn,T(b)))
        prev=b
    return pts, len(big)
def minima(pts, windows):
    out={}
    for c,w in windows:
        sel=[p for p in pts if abs(p[0]-c)<=w]
        if sel:
            p=min(sel,key=lambda q:q[1]); out[c]=(round(p[0]),round(p[1],1))
    return out
def save(pts,path,source):
    with open(path,'w') as f:
        f.write('# '+source+'\nwavenumber_cm-1,transmittance_percent\n')
        for w,t in pts: f.write(f'{w:.1f},{t:.2f}\n')
def track(path, box, xcal, ycal, start_y, thr=140, blank=(), maxjump=40, hlines=(), minline=50):
    """Column tracking: in each column take the dark run nearest the previous run (start near start_y)."""
    g=np.array(Image.open(path).convert('L'))
    m=g<thr
    for (a,b,c,d) in blank: m[b:d,a:c]=False
    for (ra,rb) in hlines:
        for y in range(ra,rb):
            row=m[y]; x=0
            while x<len(row):
                if row[x]:
                    e=x
                    while e<len(row) and row[e]: e+=1
                    if e-x>=minline: row[x:e]=False
                    x=e
                else: x+=1
    x0,y0,x1,y1=box
    T=lambda yy: float(np.interp(yy,[ycal[0][0],ycal[1][0]],[ycal[0][1],ycal[1][1]]))
    W=lambda X: float(np.interp(X,[p[0] for p in xcal],[p[1] for p in xcal]))
    pts=[];plo,phi=start_y,start_y
    for X in range(x0,x1):
        col=np.where(m[y0:y1,X])[0]+y0
        if not len(col): continue
        runs=[];s=col[0];p=col[0]
        for y in col[1:]:
            if y!=p+1: runs.append((s,p)); s=y
            p=y
        runs.append((s,p))
        def dist(r): return 0 if r[1]>=plo-1 and r[0]<=phi+1 else min(abs(r[0]-phi),abs(r[1]-plo))
        r=min(runs,key=dist)
        if dist(r)>maxjump: continue
        lo,hi=r
        prev=(plo+phi)/2
        a,b=(lo,hi) if abs(prev-lo)<=abs(prev-hi) else (hi,lo)
        pts.append((W(X),T(a)))
        if hi!=lo: pts.append((W(X),T(b)))
        plo,phi=lo,hi
    return pts
