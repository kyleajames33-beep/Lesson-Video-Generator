"""Alpha/size inspection and disposable viewing sheets. Final plate pixels are untouched."""
import hashlib,json,sys
from pathlib import Path
from PIL import Image,ImageDraw
W=Path('work/brief264/qa');W.mkdir(parents=True,exist_ok=True)
rows=[]
for name in sys.argv[1:]:
 p=Path(name);im=Image.open(p).convert('RGBA');a=im.getchannel('A');bbox=a.point(lambda v:255 if v>=128 else 0).getbbox();assert bbox
 info={'path':p.as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'size':list(im.size),'originalMode':Image.open(p).mode,
  'alphaExtrema':list(a.getextrema()),'opaqueBoundingBox':list(bbox),'anyAlphaBoundingBox':list(a.getbbox()),
  'minimumOpaqueMarginFraction':min(bbox[0]/im.width,bbox[1]/im.height,(im.width-bbox[2])/im.width,(im.height-bbox[3])/im.height),
  'finalPixelsModified':False}
 assert Image.open(p).mode=='RGBA'and a.getextrema()[0]==0 and a.getextrema()[1]>=250
 sheet=Image.new('RGB',(1500,535),'#dddddd');d=ImageDraw.Draw(sheet)
 for n,bg in enumerate(['#000000','#ffffff','#f6f1e7']):
  panel=Image.new('RGBA',(500,500),bg);preview=im.copy();preview.thumbnail((470,470));panel.alpha_composite(preview,((500-preview.width)//2,(500-preview.height)//2));sheet.paste(panel.convert('RGB'),(n*500,25));d.text((n*500+10,8),bg,fill='#333333')
 q=W/(p.stem+'-backgrounds.jpg');sheet.save(q,quality=92);info['viewingSheet']=q.as_posix();rows.append(info)
 (W/(p.stem+'-alpha.json')).write_text(json.dumps(info,indent=2)+'\n',encoding='utf-8')
print(json.dumps(rows))
