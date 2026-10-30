"""Authorised alpha-only cleanup, retaining canvas and original alpha box."""
import hashlib,json,shutil
from pathlib import Path
import numpy as np
from PIL import Image,ImageFilter,ImageDraw
ROOT=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())
PM=ROOT/'docs/production/claude-pm'
QA=PM/'assets/brief119-qa';QA.mkdir(parents=True,exist_ok=True)
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
records=[]
for name in ['m6-golden-white-rice-v1','m6-bt-cotton-v1']:
    path=ROOT/'public/assets/biology'/(name+'.png')
    backup=QA/(name+'-before.png')
    if backup.exists(): raise SystemExit('Original already backed up. Inspect existing record before rerunning.')
    shutil.copy2(path,backup)
    before=Image.open(backup).convert('RGBA');pixels=np.array(before);a=pixels[:,:,3].copy()
    rgb=pixels[:,:,:3].astype(np.int16);r,g,b=rgb[:,:,0],rgb[:,:,1],rgb[:,:,2]
    edge=np.array(before.getchannel('A').filter(ImageFilter.MinFilter(9)))<24
    # Exact saturated segmentation colours are not the painted leaf/grain hues.
    neon=((r>205)&(g<75)&(b<75))|((g>205)&(r<80)&(b<100))|((b>205)&(r<90)&(g<100))|((r>215)&(g>195)&(b<65))|((r>210)&(b>200)&(g<80))|((g>210)&(b>200)&(r<80))
    fringe=edge&neon&(a>0)
    white=edge&(a<210)&(r>225)&(g>225)&(b>225)&(a>0)
    cleaned=a.copy();cleaned[fringe]=0
    cleaned[white]=(cleaned[white].astype(np.uint16)*cleaned[white].astype(np.uint16)//255).astype('uint8')
    cleaned[(a<5)&edge]=0
    # Retain the original outer support at alpha=1, visually transparent at
    # lesson size. No RGB, subject geometry, position or scale changes.
    box=before.getchannel('A').getbbox();x0,y0,x1,y1=box
    for yy,xx in [(y0,int(np.flatnonzero(a[y0,:])[0])),(y1-1,int(np.flatnonzero(a[y1-1,:])[0])),(int(np.flatnonzero(a[:,x0])[0]),x0),(int(np.flatnonzero(a[:,x1-1])[0]),x1-1)]:
        cleaned[yy,xx]=max(1,int(cleaned[yy,xx]))
    pixels[:,:,3]=cleaned;after=Image.fromarray(pixels)
    assert after.getchannel('A').getbbox()==box
    after.save(path,optimize=True)
    views=[]
    for label,color in [('cream','#f5f0e4'),('dark-board','#182528'),('black','#000000'),('white','#ffffff')]:
        sheet=Image.new('RGB',(900,490),color);draw=ImageDraw.Draw(sheet)
        for idx,im in enumerate([before,after]):
            # Actual painted subject height approximately250px.
            crop=im.crop(box);scale=250/crop.height
            crop=crop.resize((round(crop.width*scale),250),Image.Resampling.LANCZOS)
            sheet.paste(crop,(idx*450+(450-crop.width)//2,100),crop)
            draw.text((idx*450+20,20),['Before','After'][idx],fill='white' if label in ['black','dark-board'] else 'black')
        dest=QA/(name+'-'+label+'.png');sheet.save(dest);views.append(dest.relative_to(ROOT).as_posix())
    records.append(dict(path=path.relative_to(ROOT).as_posix(),backup=backup.relative_to(ROOT).as_posix(),beforeSha256=sha(backup),sha256=sha(path),size=before.size,alphaBboxBefore=box,alphaBboxAfter=after.getchannel('A').getbbox(),rgbUnchanged=bool(np.array_equal(np.array(before)[:,:,:3],pixels[:,:,:3])),changedAlphaPixels=int(np.count_nonzero(a!=cleaned)),method='Alpha-only masking of saturated segmentation colours within four pixels of transparency, reduced faint white fringe and removed near-transparent specks. Original outer support retained at alpha1 to preserve exact alpha box. No redraw, rescale or RGB changes.',qa=views))
(PM/'assets/brief119-provenance.json').write_text(json.dumps(dict(brief=119,date='2026-10-30',authorisation='Brief119 and design item4 explicitly request deterministic alpha-edge cleanup; prior owner processing authorisation in brief108-provenance.json.',records=records),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(records,ensure_ascii=True))
