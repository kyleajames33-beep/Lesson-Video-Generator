import os
os.environ['OPENBLAS_NUM_THREADS']='1'
os.environ['OMP_NUM_THREADS']='1'
from pathlib import Path
script=Path(__file__).with_name('prepare-brief121-plates.py')
scope={'__file__':str(script)}
exec(script.read_text().split('eye=Image.open',1)[0],scope)
globals().update(scope)
prov=P/'assets/brief121-provenance.json'
data=json.loads(prov.read_text())
src=Path('C:/Users/kygs/.codex/generated_images/01a18c5f-2ba8-7000-acdf-9939ac6ce15e/exec-288d4ed8-dfa0-435e-928d-9dfe821644d1.png')
native=Q/'native-eye-long-final.png';shutil.copy2(src,native)
im=Image.open(native).convert('RGBA');native_size=im.size
im,removed=clean(im);im=im.resize((2000,2000),Image.Resampling.LANCZOS)
ref=Image.open(R/'public/assets/biology/m8-eye-cutaway-v1.png').convert('RGBA')
im,meta=registration(im,ref,front=True)
target=R/'public/assets/biology/m8-eye-cutaway-long-v1.png'
shutil.copy2(target,Q/'eye-long-second-diagnostic.png');im.save(target,optimize=True)
rec=next(r for r in data['records'] if r['key']=='eye-long')
rec.update(sha256=sha(target),nativePath=native.relative_to(R).as_posix(),nativeSha256=sha(native),sourcePath=src.as_posix(),nativeSize=native_size,alphaBbox=im.getchannel('A').getbbox(),removedFringePixels=removed,processing=meta)
rec['processing']['retakeReason']='Extend posterior eye while preserving anterior registration; shorten external optic-nerve stub to improve right margin. Earlier attempts retained in QA.'
stats={}
for key,path in [('reference',R/'public/assets/biology/m8-eye-cutaway-v1.png'),('long',target),('short',R/'public/assets/biology/m8-eye-cutaway-short-v1.png')]:
    obj=Image.open(path).convert('RGBA');alpha=np.array(obj.getchannel('A'));measure={}
    for y in [900,1000,1100,1200]:
        xx=np.flatnonzero(alpha[y]>100);measure[str(y)]={'left':int(xx.min()),'right':int(xx.max()),'span':int(xx.max()-xx.min()+1)}
    stats[key]={'bbox':obj.getchannel('A').getbbox(),'horizontalAlphaSpans':measure}
stats['method']='Thresholded horizontal alpha span is a reproducible silhouette proxy, not a measurement of optical axial length. Anterior overlay is inspected separately. External nerve is below the y900 comparison line.'
(Q/'eye-row-measurements.json').write_text(json.dumps(stats,indent=2)+'\n')
rec['processing']['silhouetteProxyAtY900']=stats['long']['horizontalAlphaSpans']['900']['span']/stats['reference']['horizontalAlphaSpans']['900']['span']-1
for label,color in [('cream','#f5f0e4'),('dark-board','#182528'),('black','#000000'),('white','#ffffff')]:
    view=Image.new('RGBA',im.size,color);view.alpha_composite(im);view.convert('RGB').resize((600,600)).save(Q/('eye-long-'+label+'.jpg'),quality=94)
view=Image.new('RGBA',im.size,'#f5f0e4');view.alpha_composite(Image.blend(ref,im,.5));view.convert('RGB').resize((600,600)).save(Q/'eye-long-overlay50.jpg',quality=95)
prov.write_text(json.dumps(data,indent=2)+'\n')
print(json.dumps({'bbox':rec['alphaBbox'],'registration':meta,'measurements':stats}))
