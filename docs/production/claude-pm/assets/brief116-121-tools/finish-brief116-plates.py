"""Prepare and check the three imagegen plates commissioned by Brief116."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageFilter
import hashlib,json,zipfile
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm';Q=P/'assets/brief116-qa'
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def clean(im):
    im=im.convert('RGBA');a=im.getchannel('A').point(lambda x:0 if x<24 else x)
    im.putalpha(a);return im
clear=clean(Image.open(Q/'native-clear.png'));settled=clean(Image.open(Q/'native-settled.png'))
assert clear.size==settled.size
# The generated edit is restricted to its intended bottom layer. This keeps
# every apparatus pixel outside that layer identical for the required fade.
mask=Image.new('L',clear.size);ImageDraw.Draw(mask).ellipse((401,750,859,878),fill=255)
settled=Image.composite(settled,clear,mask)
box=clear.getchannel('A').getbbox();factor=1600/max(box[2]-box[0],box[3]-box[1]);size=(round((box[2]-box[0])*factor),round((box[3]-box[1])*factor));pos=((2000-size[0])//2,(2000-size[1])//2)
outputs=[]
for key,im in [('m8-beaker-hotplate-clear-v1',clear),('m8-baso4-beaker-hotplate-v1',settled)]:
    out=Image.new('RGBA',(2000,2000));out.alpha_composite(im.crop(box).resize(size,Image.Resampling.LANCZOS),pos);outputs.append((key,out))
ref=Image.open(R/'public/assets/chemistry/m8-filter-funnel-white-ppt-v1.png').convert('RGBA');cloud=clean(Image.open(Q/'native-cloudy.png'))
rb=ref.getchannel('A').getbbox();cb=cloud.getchannel('A').getbbox();obj=cloud.crop(cb);f=(rb[3]-rb[1])/obj.height;scaled=obj.resize((round(obj.width*f),rb[3]-rb[1]),Image.Resampling.LANCZOS)
aligned=Image.new('RGBA',ref.size);aligned.alpha_composite(scaled,((rb[0]+rb[2]-scaled.width)//2,rb[1]))
# Keep the existing funnel, paper and flask unchanged. Only the liquid and
# stem drop come from the generated cloudy edit.
fluid=Image.new('L',ref.size);d=ImageDraw.Draw(fluid);d.polygon([(788,1430),(1215,1430),(1269,1605),(1248,1646),(762,1646),(733,1605)],fill=255);d.ellipse((979,1147,1019,1210),fill=255)
fluid=fluid.filter(ImageFilter.GaussianBlur(5))
cloud=Image.composite(aligned,ref,fluid);outputs.append(('m8-filter-funnel-cloudy-filtrate-v1',cloud))
records=[]
for name,im in outputs:
    path=R/'public/assets/chemistry'/(name+'.png')
    if path.exists():raise SystemExit('Refuse to overwrite commissioned plate: '+str(path))
    im.save(path,optimize=True)
    for bg,color in [('cream','#f5f0e4'),('dark-board','#182528'),('black','#000000'),('white','#ffffff')]:
        canvas=Image.new('RGBA',im.size,color);canvas.alpha_composite(im);canvas.convert('RGB').resize((600,600)).save(Q/(name+'-'+bg+'.png'))
    records.append(dict(path=path.relative_to(R).as_posix(),sha256=sha(path),size=im.size,alphaBbox=im.getchannel('A').getbbox(),alphaRange=im.getchannel('A').getextrema(),generator='OpenAI built-in imagegen',qa='600px cream/dark/black/white composites; exact common apparatus outside changed material region. Owner art acceptance pending.'))
for name,a,b in [('hotplate',outputs[0][1],outputs[1][1]),('filtrate',ref,cloud)]:
    overlay=Image.blend(a,b,.5);bg=Image.new('RGBA',overlay.size,'#f5f0e4');bg.alpha_composite(overlay);bg.convert('RGB').resize((700,700)).save(Q/(name+'-overlay50.png'))
data=dict(brief=116,date='2026-10-30',records=records,nativeSources=[dict(path=p.relative_to(R).as_posix(),sha256=sha(p)) for p in sorted(Q.glob('native-*.png'))],processingAuthorisation='Owner deterministic alpha cleanup, proportional resize and alignment recorded in brief108-provenance.json. Generated state edits composited into their requested material regions to preserve unchanged apparatus.',prompts=['Clear beaker on the reference grey hotplate, two-thirds clear liquid, watch glass, tiny bubbles, no steam, matching ink and watercolour; true alpha, no text or people.','Edit clear plate: only thin even settled white barium sulfate layer; all other apparatus and framing unchanged.','Edit reference funnel: only faintly milky filtrate and drop; preserve funnel, paper, flask, glass outlines, framing and true alpha.'],alignment=dict(hotplateSharedCrop=box,hotplateUniformScale=factor,hotplatePosition=pos,filtrateReferenceBox=rb,filtrateUniformScale=f,hotplateDifferenceRestrictedToBottomLayer=True,filtrateDifferenceRestrictedToLiquidAndDrop=True),ownerAcceptance='pending')
prov=P/'assets/brief116-provenance.json';prov.write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8')
archive=R/'out/archives/brief116-plates-2026-10-30.zip';archive.parent.mkdir(exist_ok=True)
members=[R/r['path'] for r in records]+list(Q.glob('*.png'))+[prov]
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED) as z:
    for p in members:z.write(p,p.relative_to(R).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for p in members:assert hashlib.sha256(z.read(p.relative_to(R).as_posix())).hexdigest()==sha(p)
checkpoint=dict(brief=116,path=archive.relative_to(R).as_posix(),sha256=sha(archive),bytes=archive.stat().st_size,members=len(members),crcPass=True,memberHashesVerified=True,remoteBackup='not uploaded')
(P/'assets/brief116-media-checkpoint.json').write_text(json.dumps(checkpoint,indent=2)+'\n',encoding='utf-8')
print(json.dumps(dict(records=records,archive=checkpoint)))
