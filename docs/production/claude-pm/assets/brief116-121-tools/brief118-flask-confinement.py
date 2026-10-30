"""Authorized flask alignment: confine existing generated liquid pixels inside common glass."""
from PIL import Image,ImageDraw,ImageFilter,ImageChops
import pathlib,json,hashlib,shutil
ROOT=next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());A=ROOT/'docs/production/claude-pm/assets';Q=A/'brief118-qa';P=ROOT/'public/assets/chemistry'
mask=Image.new('L',(2048,1700));d=ImageDraw.Draw(mask)
d.polygon([(756,831),(774,810),(837,793),(928,784),(1040,782),(1140,790),(1235,807),(1285,828),(1441,1334),(1432,1374),(1384,1407),(1280,1432),(1140,1448),(990,1450),(840,1439),(721,1415),(645,1378),(619,1335)],fill=255)
mask=mask.filter(ImageFilter.GaussianBlur(2));mask.save(Q/'flask-liquid-confinement-mask.png')
base=Image.open(P/'m8-iodine-flask-clear-v1.png').convert('RGBA')
for s in ['yellow','blue','clear']:
 path=P/f'm8-iodine-flask-{s}-v1.png';shutil.copy2(path,Q/(path.stem+'-pre-confinement.png'))
 src=Image.open(path).convert('RGBA');out=Image.composite(src,base,mask) if s!='clear' else base.copy();out.save(Q/(path.stem+'-confinement-candidate.png'))
view=Image.new('RGB',(1500,460),'#10252a');dd=ImageDraw.Draw(view)
for n,s in enumerate(['yellow','blue','clear']):
 im=Image.open(Q/f'm8-iodine-flask-{s}-v1-confinement-candidate.png').convert('RGBA');im.thumbnail((500,420));bg=Image.new('RGBA',(500,420),'#10252a');bg.alpha_composite(im,((500-im.width)//2,0));view.paste(bg.convert('RGB'),(n*500,0));dd.text((n*500+5,425),s,fill='white')
view.save(Q/'flask-confinement-candidates.jpg')
