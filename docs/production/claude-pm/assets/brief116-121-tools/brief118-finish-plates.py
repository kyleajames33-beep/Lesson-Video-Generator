"""Brief118: uniform sizing, transparent padding, measured overlays and small QA views.

No painting, recolouring or scientific-content edits occur here. Built-in imagegen
made every plate. Only uniform scaling, translation, and PNG saving are used.
"""
from PIL import Image,ImageChops,ImageDraw
import pathlib,json,hashlib,math
ROOT=next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists()); PM=ROOT/'docs/production/claude-pm'; AS=PM/'assets'; QA=AS/'brief118-qa'
QA.mkdir(exist_ok=True)
records=json.loads((AS/'brief118-generation-records.json').read_text(encoding='utf8'))['records']
bio={'m8-cell-apoptotic-v1.png','m8-skin-mole-v1.png','m8-melanoma-cells-vessel-v1.png','m8-lymph-node-melanoma-v1.png','m8-cigarette-pack-plain-v1.png','m8-hospital-case-files-v1.png','m8-questionnaire-envelope-v1.png','m8-record-ledger-v1.png','m8-energy-drink-can-plain-v1.png'}
def box(im,threshold=24):return im.getchannel('A').point(lambda v:255 if v>threshold else 0).getbbox()
def info(im):return {'size':list(im.size),'mode':im.mode,'alphaExtrema':list(im.getchannel('A').getextrema()),'alphaBounds0':list(box(im,0)),'alphaBounds24':list(box(im,24))}
def canvasfit(im,size,targetbox=None):
    b=box(im); x0,y0,x1,y1=b
    if targetbox:
        tx0,ty0,tx1,ty1=targetbox
        # Match height and centre, preserving aspect ratio. Width error is measured.
        scale=(ty1-ty0)/(y1-y0)
        left=round((tx0+tx1)/2-(x0+x1)/2*scale);top=round(ty0-y0*scale)
    else:
        scale=min(size[0]*.8/(x1-x0),size[1]*.8/(y1-y0))
        left=round(size[0]/2-(x0+x1)/2*scale);top=round(size[1]/2-(y0+y1)/2*scale)
    resized=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS)
    out=Image.new('RGBA',size);out.alpha_composite(resized,(left,top))
    return out,{'uniformScale':scale,'translation':[left,top],'targetBox':targetbox,'contentPainting':False}
referenceboxes={
 'm8-bromine-water':('chemistry/m8-dichromate-orange-v1.png',(2000,2000)),
 'm8-iodine-flask':('chemistry/m8-mohr-flask-yellow-v1.png',(2048,1700)),
 'm8-carbonate-tube':('chemistry/m8-dichromate-orange-v1.png',(2000,2000)),
 'm8-skin-mole':('biology/m8-skin-normal-v1.png',(2000,2000)),
 'm8-lymph-node-melanoma':('biology/m7-lymph-node-v1.png',(2000,2000))}
items=[]
for rec in records:
    name=rec['name'];dest=ROOT/'public/assets'/('biology' if name in bio else 'chemistry')/name
    size=(2400,1600) if name.startswith('m8-lake-') else (2000,2000)
    ref=None;tb=None
    for prefix,(rp,sz) in referenceboxes.items():
        if name.startswith(prefix):
            ref=ROOT/'public/assets'/rp;size=sz
            with Image.open(ref) as ri:tb=box(ri.convert('RGBA'))
            break
    with Image.open(rec['generatedPath']) as raw:
        raw=raw.convert('RGBA');rawinfo=info(raw);out,transform=canvasfit(raw,size,tb)
    # On a repeat invocation only this brief's already-recorded files may be replaced.
    if dest.exists() and not (AS/'brief118-provenance.json').exists():raise RuntimeError('Existing plate requires review: '+str(dest))
    out.save(dest)
    finalinfo=info(out)
    ent={'filename':name,'path':str(dest.relative_to(ROOT)),'generatedPath':rec['generatedPath'],'generatedSha256':hashlib.sha256(pathlib.Path(rec['generatedPath']).read_bytes()).hexdigest(),'generationTool':'built-in image_gen','prompt':rec['prompt'],'raw':rawinfo,'transform':transform,'final':finalinfo,'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'approval':'pending owner review'}
    if rec.get('earlierAttempt'):ent['earlierAttempt']=rec['earlierAttempt']
    if rec.get('initialPrompt'):ent['initialPrompt']=rec['initialPrompt']
    if name=='m8-cell-apoptotic-v1.png':
        ent['reference']='public/assets/biology/cd-interphase-v1.png'
        ent['referenceNote']='Centre/framing comparison only. Apoptosis intentionally shrinks and changes the outline.'
    if ref:ent['reference']=str(ref.relative_to(ROOT));ent['referenceBounds24']=list(tb);ent['boundsDeltaFromReference']=[a-b for a,b in zip(finalinfo['alphaBounds24'],tb)]
    # Full-size 600px and small220px on black, white and the lesson board.
    view=Image.new('RGB',(1800,900),'#f3f0e7');draw=ImageDraw.Draw(view)
    for k,(colour,label) in enumerate([('#000000','black'),('#ffffff','white'),('#10252a','dark board')]):
        bg=Image.new('RGBA',(600,760),colour)
        large=out.copy();large.thumbnail((600,600),Image.Resampling.LANCZOS);bg.alpha_composite(large,((600-large.width)//2,0))
        small=out.copy();small.thumbnail((220,220),Image.Resampling.LANCZOS);bg.alpha_composite(small,((600-small.width)//2,560))
        view.paste(bg.convert('RGB'),(k*600,30));draw.text((k*600+10,10),label,fill='black')
    draw.text((10,815),name+' | upper600px canvas width; lower220px | actual generated resolution is in provenance',fill='black')
    view.save(QA/(dest.stem+'-backgrounds.jpg'),quality=88)
    del out,view
    items.append(ent)
    print('saved',name,flush=True)
groups={
 'lake':['m8-lake-clear-v1.png','m8-lake-bloom-v1.png','m8-lake-crash-v1.png'],
 'winkler':['m8-winkler-bottle-clear-v1.png','m8-winkler-bottle-brown-v1.png','m8-winkler-bottle-iodine-v1.png'],
 'iodine-flask':['m8-iodine-flask-yellow-v1.png','m8-iodine-flask-blue-v1.png','m8-iodine-flask-clear-v1.png'],
 'carbonate':['m8-carbonate-tube-before-v1.png','m8-carbonate-tube-fizz-v1.png']}
groups['bromine-v2']=['m8-bromine-water-orange-v2.png','m8-bromine-water-clear-v2.png']
byname={i['filename']:i for i in items};overlays=[]
for group,names in groups.items():
    base=Image.open(ROOT/byname[names[0]]['path']).convert('RGBA');bb=box(base)
    for name in names[1:]:
        other=Image.open(ROOT/byname[name]['path']).convert('RGBA');ob=box(other)
        bg=Image.new('RGBA',base.size,'#f3f0e7');a=Image.alpha_composite(bg,base);b=Image.alpha_composite(bg,other);overlay=Image.blend(a,b,.5)
        path=QA/(group+'-'+pathlib.Path(name).stem+'-50pct.png');overlay.save(path)
        diff=ImageChops.difference(base,other);ext=diff.getextrema();delta=[x-y for x,y in zip(ob,bb)]
        overlays.append({'group':group,'base':names[0],'other':name,'overlay50pct':str(path.relative_to(ROOT)),'baseBounds24':list(bb),'otherBounds24':list(ob),'boundsDelta':delta,'maxBoundsDifferencePixels':max(abs(x) for x in delta),'pixelIdentical':all(b==0 for a,b in ext),'strictPixelIdentityPass':False,'note':'Contents intentionally differ. Outside-content identity has not been certified; inspect overlay at playback scale. Uniform registration preserves aspect ratio.'})
        other.close();del overlay,a,b,bg,diff
    base.close()
# Reference overlays for exactly matched apparatus and biology states.
for ent in items:
    if 'reference' not in ent:continue
    with Image.open(ROOT/ent['reference']) as ref,Image.open(ROOT/ent['path']) as made:
        if ref.size!=made.size:continue
        bg=Image.new('RGBA',ref.size,'#f3f0e7');overlay=Image.blend(Image.alpha_composite(bg,ref.convert('RGBA')),Image.alpha_composite(bg,made.convert('RGBA')),.5)
        fp=QA/(pathlib.Path(ent['filename']).stem+'-reference-50pct.png');overlay.save(fp);ent['referenceOverlay50pct']=str(fp.relative_to(ROOT))
        del overlay,bg
provenance={'brief':118,'date':'2026-10-30','tool':'built-in image_gen','fallbackCLIUsed':False,'plates':items,'alignedOverlays':overlays,'processing':'Uniform scaling and translation with transparent padding only. No recolouring, drawn replacements, scientific-content compositing or stretching. Generated sources retained.','qaStatus':'pending visual inspection; strict outside-content pixel identity not certified','requestedPlateCount':24,'conditionalPlateCount':2,'deliveredPlateCount':len(items)}
(AS/'brief118-provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2),encoding='utf8')
print('complete',len(items),'plates',len(overlays),'set overlays',flush=True)
