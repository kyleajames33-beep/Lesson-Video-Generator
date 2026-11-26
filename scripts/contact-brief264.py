"""Disposable contact sheets for inspecting native plates without editing them."""
import sys,json
from pathlib import Path
from PIL import Image,ImageDraw
items=json.load(open('work/brief264/plate-inventory.json',encoding='utf-8'))['rows']
indices=[int(i) for i in sys.argv[1].split(',')]
bg=sys.argv[2] if len(sys.argv)>2 else '#f6f1e7'
suffix='-'+bg.replace('#','') if len(sys.argv)>2 else ''
out=Path('work/brief264/qa')/('contact-'+sys.argv[1]+suffix+'.jpg')
sheet=Image.new('RGB',(1200,450*((len(indices)+2)//3)),'#ddd');d=ImageDraw.Draw(sheet)
for n,i in enumerate(indices):
 p=Path('work/brief264/candidates')/items[i]['name']
 if not p.exists():p=Path(items[i]['destination'])
 im=Image.open(p).convert('RGBA');im.thumbnail((380,380))
 panel=Image.new('RGBA',(400,400),bg);panel.alpha_composite(im,((400-im.width)//2,(400-im.height)//2))
 x=(n%3)*400;y=(n//3)*450;sheet.paste(panel.convert('RGB'),(x,y+35));d.text((x+5,y+5),f'{i}: '+p.stem,fill='black')
sheet.save(out,quality=93)
print(out.as_posix())
