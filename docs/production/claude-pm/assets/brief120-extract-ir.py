"""Trace available NIST neat-liquid IR records. Never infer missing phases."""
from pathlib import Path
import re,json,csv
p=Path(__file__).resolve().parent;rawdir=p/'brief120-nist'
specs={'cyclohexane':[(2925,35),(2850,35),(1450,30),(1260,30),(1030,30),(905,25),(860,25)],'tert-butanol':[(3370,180),(2975,35),(1470,25),(1380,8),(1365,8),(1200,40),(915,30),(750,35)],'butan-1-ol':[(3330,180),(2960,12),(2935,12),(2875,25),(1465,25),(1380,25),(1070,20),(1030,20),(950,25)]}
download=json.loads((rawdir/'ir-download-records.json').read_text());out={'status':'PARTIAL:3 of10 requested compounds have usable neat-liquid transmission records','sourcePolicy':'Downloaded NIST reference data. SDBS automated collection not used. Optical dispersion index is not transmittance.','method':'Band centres are minima inside stated search windows. %T is the actual recorded transmission, not renormalised to95. Approximate half-depth widths use local shoulder maxima and linear interpolation between samples. Overlap can make width indeterminate.','compounds':{}}
for name,targets in specs.items():
 raw=(rawdir/f'{name}-ir.jdx').read_text();get=lambda key:re.search(r'^##'+re.escape(key)+r'=(.*)$',raw,re.M).group(1).strip()
 dx=abs(float(get('DELTAX')))*(1 if float(get('LASTX'))>float(get('FIRSTX')) else -1);yf=float(get('YFACTOR'));data=raw.split('##XYDATA=(X++(Y..Y))')[1].split('##END')[0];points=[]
 for line in data.splitlines():
  values=line.split()
  if not values:continue
  first=float(values[0]);points.extend((first+j*dx,float(v)*yf*100) for j,v in enumerate(values[1:]))
 points.sort();assert len(points)==int(get('NPOINTS')),(name,len(points),get('NPOINTS'))
 with (rawdir/f'{name}-ir-points.csv').open('w',newline='') as f:csv.writer(f).writerows([['wavenumber_cm-1','transmittance_percent']]+points)
 bands=[]
 for target,window in targets:
  ids=[i for i,(x,y) in enumerate(points) if abs(x-target)<=window];idx=min(ids,key=lambda i:points[i][1]);x,y=points[idx]
  extent=400 if target>3200 else 90
  left=[z for z in points if x-extent<=z[0]<x];right=[z for z in points if x<z[0]<=x+extent]
  shoulder=min(max(z[1] for z in left),max(z[1] for z in right));half=(shoulder+y)/2
  lo=next((points[j][0] for j in range(idx,-1,-1) if points[j][1]>=half),None);hi=next((points[j][0] for j in range(idx,len(points)) if points[j][1]>=half),None)
  bands.append({'draftCentre':target,'searchWindowPlusMinus':window,'centre_cm-1':round(x,1),'minimum_percentT':round(y,2),'approximateHalfDepthWidth_cm-1':round(hi-lo,1) if lo is not None and hi is not None else None,'draftCentreDifference':round(x-target,1),'widthMethod':'local shoulders; do not treat overlapping-group width as isolated normal-mode width'})
 # Other deep troughs, separated by20cm-1, help expose omitted strong features.
 cand=[i for i in range(1,len(points)-1) if points[i][1]<50 and points[i][1]<points[i-1][1] and points[i][1]<=points[i+1][1]];chosen=[]
 for i in sorted(cand,key=lambda i:points[i][1]):
  if all(abs(points[i][0]-points[j][0])>=20 for j in chosen):chosen.append(i)
 out['compounds'][name]={'status':'measured neat-liquid transmission','source':download[name],'pathLength':get('PATH LENGTH'),'bands':bands,'otherDeepTroughs':[{'centre_cm-1':round(points[i][0],1),'minimum_percentT':round(points[i][1],2)} for i in sorted(chosen,key=lambda i:points[i][0])],'rawPoints':f'brief120-nist/{name}-ir-points.csv'}
for name in ['ethanol','acetic-acid','acetone','propan-1-amine','propan-1-ol','propan-2-ol','ethyl-acetate']:
 out['compounds'][name]={'status':'not certified: usable neat-liquid transmission curve not obtained in this run','reason':'See phase catalog and download-record errors. Some liquid records use dispersion index; some attempted requests returned HTTP429.'}
(p/'m8c10-ir-bands.json').write_text(json.dumps(out,indent=2),encoding='utf8')
for name in specs:print(name,[(b['draftCentre'],b['centre_cm-1'],b['minimum_percentT'],b['approximateHalfDepthWidth_cm-1']) for b in out['compounds'][name]['bands']])
