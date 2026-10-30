"""Prepare imagegen Brief121 plates with small, sequential image operations."""
import hashlib,json,shutil,gc
from pathlib import Path
from PIL import Image,ImageFilter,ImageDraw
import numpy as np,cv2
cv2.setNumThreads(1)
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm';Q=P/'assets/brief121-qa';Q.mkdir(exist_ok=True)
rows=json.loads((P/'assets/brief121-generation-records.json').read_text())
names={'eye-long':'m8-eye-cutaway-long-v1','eye-short':'m8-eye-cutaway-short-v1','eye-cataract':'m8-eye-cutaway-cataract-v1','eye-iol':'m8-eye-cutaway-iol-v1','cornea':'m8-cornea-closeup-v1','cornea-flap':'m8-cornea-lasik-flap-v1','cornea-flat':'m8-cornea-flattened-v1','lens':'m8-intraocular-lens-v1','waterbath':'m8-aspirin-water-bath-v1','willow':'m8-willow-bark-v1','tube-violet':'m8-fecl3-violet-v1','tube-yellow':'m8-fecl3-pale-yellow-v1','machine':'m8-haemodialysis-machine-v1','dialyser':'m8-dialyser-cutaway-v1','peritoneal':'m8-peritoneal-dialysis-section-v1','bags':'m8-pd-fluid-bags-v1','transplant':'m8-kidney-transplant-placement-v1','bowel':'m8-bowel-screening-kit-v1'}
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def clean(im):
    a=np.array(im.convert('RGBA'));alpha=a[:,:,3];rgb=a[:,:,:3];r,g,b=[rgb[:,:,i] for i in range(3)]
    edge=np.array(Image.fromarray(alpha).filter(ImageFilter.MinFilter(9)))<12
    neon=((r>240)&(g<65)&(b<65))|((g>240)&(r<65)&(b<65))|((b>240)&(r<65)&(g<65))|((r>245)&(g>245)&(b<50))|((r>245)&(b>245)&(g<50))|((g>245)&(b>245)&(r<50))
    kill=(alpha<=5)|(edge&neon)
    alpha[kill]=0
    return Image.fromarray(a),int(np.count_nonzero(kill & (np.array(im.getchannel('A'))>0)))
def registration(im,ref,front=False):
    # Uniform scale/rotation/translation only. No nonuniform stretch.
    src=np.array(im.resize((1000,1000)).convert('RGB'));dst=np.array(ref.resize((1000,1000)).convert('RGB'))
    mask=np.zeros((1000,1000),np.uint8);mask[150:850,30:450 if front else 1000]=255
    orb=cv2.ORB_create(nfeatures=3000)
    ka,da=orb.detectAndCompute(cv2.cvtColor(src,cv2.COLOR_RGB2GRAY),mask);kb,db=orb.detectAndCompute(cv2.cvtColor(dst,cv2.COLOR_RGB2GRAY),mask)
    pairs=cv2.BFMatcher(cv2.NORM_HAMMING).knnMatch(da,db,k=2);good=[a for a,b in pairs if a.distance<.72*b.distance]
    assert len(good)>=12,('registration matches',len(good))
    xy=np.float32([ka[m.queryIdx].pt for m in good]);uv=np.float32([kb[m.trainIdx].pt for m in good]);matrix,inliers=cv2.estimateAffinePartial2D(xy,uv,method=cv2.RANSAC,ransacReprojThreshold=2,maxIters=5000)
    assert matrix is not None
    residual=np.linalg.norm(cv2.transform(xy[None,:,:],matrix)[0]-uv,axis=1);matrix[:,2]*=2
    out=cv2.warpAffine(np.array(im),matrix,(2000,2000),flags=cv2.INTER_LANCZOS4,borderMode=cv2.BORDER_CONSTANT,borderValue=(0,0,0,0))
    return Image.fromarray(out),dict(matrix=matrix.tolist(),matches=len(good),inliers=int(inliers.sum()),medianInlierResidualPx=float(np.median(residual[inliers[:,0]>0])*2))
eye=Image.open(R/'public/assets/biology/m8-eye-cutaway-v1.png').convert('RGBA')
tube,_=clean(Image.open(R/'public/assets/chemistry/m8-permanganate-purple-v1.png').convert('RGBA'))
records=[]
for row in rows:
    key=row['key'];src=Path(row['sourcePath']);native=Q/('native-'+key+'.png')
    if not native.exists():shutil.copy2(src,native)
    im=Image.open(native).convert('RGBA');nativeSize=im.size;im,removed=clean(im);meta={}
    if key.startswith('eye-'):
        assert im.width==im.height;im=im.resize((2000,2000),Image.Resampling.LANCZOS)
        im,meta=registration(im,eye,front=True)
        if key in ['eye-cataract','eye-iol']:
            # Confine the generated edit to the crystalline-lens area, leaving
            # the original organ exactly registered outside it.
            mask=Image.new('L',eye.size);ImageDraw.Draw(mask).ellipse((605,688,887,1418),fill=255);mask=mask.filter(ImageFilter.GaussianBlur(3))
            im=Image.composite(im,eye,mask);im,extra=clean(im);removed+=extra
            meta['generatedEditConfinedToLens']=True
        else:meta['frontRegistrationOnly']='Posterior anatomy is allowed to move. Inspect measured axial extent before acceptance.'
    elif key.startswith('tube-'):
        assert im.width==im.height;im=im.resize((2000,2000),Image.Resampling.LANCZOS);im,meta=registration(im,tube)
        mask=Image.new('L',tube.size);d=ImageDraw.Draw(mask);d.rounded_rectangle((889,1200,1110,1638),radius=80,fill=255);mask=mask.filter(ImageFilter.GaussianBlur(2))
        im=Image.composite(im,tube,mask);meta['generatedEditConfinedToLiquid']=True
    elif key.startswith('cornea'):
        assert im.width==im.height;im=im.resize((2000,2000),Image.Resampling.LANCZOS)
        meta['transform']='Same full square canvas proportionally mapped to2000; no independent crop or stretch between trio.'
    else:
        box=im.getchannel('A').getbbox();obj=im.crop(box);factor=1600/max(obj.size);obj=obj.resize((round(obj.width*factor),round(obj.height*factor)),Image.Resampling.LANCZOS);im=Image.new('RGBA',(2000,2000));im.alpha_composite(obj,((2000-obj.width)//2,(2000-obj.height)//2));meta=dict(nativeCrop=box,uniformScale=factor)
    subject='chemistry' if key in ['waterbath','willow','tube-violet','tube-yellow'] else 'biology'
    target=R/f'public/assets/{subject}/{names[key]}.png'
    if target.exists():raise SystemExit('Refuse overwrite: '+str(target))
    im.save(target,optimize=True)
    for label,color in [('cream','#f5f0e4'),('dark-board','#182528'),('black','#000000'),('white','#ffffff')]:
        view=Image.new('RGBA',im.size,color);view.alpha_composite(im);view.convert('RGB').resize((600,600)).save(Q/(key+'-'+label+'.jpg'),quality=94)
    records.append(dict(key=key,path=target.relative_to(R).as_posix(),sha256=sha(target),nativePath=native.relative_to(R).as_posix(),nativeSha256=sha(native),sourcePath=src.as_posix(),nativeSize=nativeSize,size=im.size,mode=im.mode,alphaBbox=im.getchannel('A').getbbox(),alphaRange=im.getchannel('A').getextrema(),removedFringePixels=removed,processing=meta,qaStatus='pending root final contact and alignment inspection; not owner approval'))
    print(key,records[-1]['alphaBbox'],meta.get('medianInlierResidualPx',''),flush=True)
    del im;gc.collect()
    (P/'assets/brief121-provenance.json').write_text(json.dumps(dict(brief=121,date='2026-10-30',generator='OpenAI built-in imagegen',processingAuthorisation='Deterministic alpha cleanup, proportional2000px resizing and alignment previously owner-authorised in brief108-provenance.json. Generated local-state edits confined to specified change regions to preserve shared apparatus/anatomy.',records=records),indent=2)+'\n',encoding='utf-8')
for name,refpath,variants in [('eye',R/'public/assets/biology/m8-eye-cutaway-v1.png',['eye-long','eye-short','eye-cataract','eye-iol']),('cornea',R/'public/assets/biology/m8-cornea-closeup-v1.png',['cornea-flap','cornea-flat']),('tube',R/'public/assets/chemistry/m8-fecl3-violet-v1.png',['tube-yellow'])]:
    base=Image.open(refpath).convert('RGBA')
    for key in variants:
        rec=next(r for r in records if r['key']==key);other=Image.open(R/rec['path']).convert('RGBA');overlay=Image.blend(base,other,.5);view=Image.new('RGBA',base.size,'#f5f0e4');view.alpha_composite(overlay);view.convert('RGB').resize((600,600)).save(Q/(key+'-overlay50.jpg'),quality=95)
sheet=Image.new('RGB',(1600,2000),'#f5f0e4');d=ImageDraw.Draw(sheet)
for i,r in enumerate(records):
    im=Image.open(R/r['path']);im.thumbnail((380,350));sheet.paste(im,((i%4)*400+10,(i//4)*400+35),im);d.text(((i%4)*400+12,(i//4)*400+12),r['key'],fill='black')
sheet.save(Q/'final-contact.jpg',quality=94)
