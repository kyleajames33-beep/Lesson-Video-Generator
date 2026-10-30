# Finish the three root-generated B02 plates for brief 111 using authorised alpha cleanup.
from pathlib import Path
from PIL import Image, ImageDraw
import numpy as np
import hashlib,json,shutil
R=Path(__file__).resolve().parents[1]
Q=R/'docs/production/claude-pm/assets/brief111-qa'
p=Q/'root-wildlife-generation.json'
records=json.loads(p.read_text(encoding='utf-8'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
for rec in records:
 src=Path(rec['sourcePath']);dest=R/rec['path'];raw=Q/'raw'/f"{rec['name']}-native.png"
 raw.parent.mkdir(exist_ok=True);shutil.copy2(src,raw)
 im=Image.open(src).convert('RGBA');pixels=np.array(im)
 a=pixels[:,:,3].astype(float)
 pixels[:,:,3]=np.clip((a-32)*255/223,0,255).astype('uint8')
 pixels[pixels[:,:,3]==0,:3]=0
 im=Image.fromarray(pixels);box=im.getchannel('A').getbbox();im=im.crop(box)
 scale=1560/max(im.size);im=im.resize(tuple(round(d*scale) for d in im.size),Image.Resampling.LANCZOS)
 canvas=Image.new('RGBA',(2000,2000));canvas.alpha_composite(im,((2000-im.width)//2,(2000-im.height)//2))
 pixels=np.array(canvas);pixels[pixels[:,:,3]<8]=0;canvas=Image.fromarray(pixels)
 assert not dest.exists(),dest
 canvas.save(dest,optimize=True)
 for background,color in [('cream','#f5f0e4'),('black','#000000'),('white','#ffffff')]:
  bg=Image.new('RGBA',canvas.size,color);bg.alpha_composite(canvas)
  bg.convert('RGB').resize((600,600)).save(Q/f"{rec['name']}-{background}.jpg",quality=94)
 rec.update({'rawPath':raw.relative_to(R).as_posix(),'sourceSha256':sha(src),'sha256':sha(dest),'nativeSize':Image.open(src).size,'size':canvas.size,'mode':'RGBA','alphaRange':canvas.getchannel('A').getextrema(),'alphaBbox':canvas.getchannel('A').getbbox(),'processing':'Alpha threshold ramp 32 to 255, zero faint speckles below alpha 8, proportional crop-fit to maximum 1560 px on 2000 square. No stretch. Native preserved.','processingAuthorisation':'Owner approved deterministic alpha cleanup, resizing and alignment on 27 October, recorded in brief108-provenance.json.','contentQA':'Root inspected native and light/dark QA views. Forearm retake removed unwanted steam via imagegen. Owner art acceptance remains pending.'})
p.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print([(x['name'],x['alphaBbox']) for x in records])
