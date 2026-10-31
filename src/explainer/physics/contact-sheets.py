"""Build visual QA contact sheets from the actual Remotion stills."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math
import json

root=Path(__file__).parent/'artifacts'/'site'
out=root/'checks'
out.mkdir(exist_ok=True)
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',20)
for module in range(5,9):
    files=sorted((root/'stills').glob(f'm{module}-*-desktop.png'))
    sheet=Image.new('RGB',(1650,math.ceil(len(files)/3)*346),'#f7f7f5')
    draw=ImageDraw.Draw(sheet)
    for i,file in enumerate(files):
        im=Image.open(file).convert('RGB').crop((260,212,1660,1001)).resize((550,310))
        x=i%3*550;y=i//3*346
        sheet.paste(im,(x,y));draw.text((x+12,y+314),file.stem,fill='#252a2d',font=font)
    sheet.save(out/f'module{module}-contact.png')
    phone_files=sorted((root/'stills').glob(f'm{module}-*-phone.png'))
    phones=Image.new('RGB',(1170,math.ceil(len(phone_files)/3)*520),'#f7f7f5')
    phone_draw=ImageDraw.Draw(phones)
    for i,file in enumerate(phone_files):
        image=Image.open(file).convert('RGB')
        x=i%3*390;y=i//3*520
        phones.paste(image,(x,y));phone_draw.text((x+8,y+490),file.stem,fill='#252a2d',font=font)
    phones.save(out/f'module{module}-phone-contact.png')
mapping=json.loads((root/'course-map.json').read_text())
detail_ids=[v['id'] for m in mapping['modules'] if m['number']==5 for v in m['visuals'] if v.get('seconds')]
for kind in ['desktop','phone']:
    width,row_height=(550,346) if kind=='desktop' else (390,520)
    sheet=Image.new('RGB',(3*width,math.ceil(len(detail_ids)/3)*row_height),'#f7f7f5')
    draw=ImageDraw.Draw(sheet)
    for i,asset_id in enumerate(detail_ids):
        file=root/'stills'/f'{asset_id}-{kind}.png'
        image=Image.open(file).convert('RGB')
        if kind=='desktop': image=image.crop((260,212,1660,1001)).resize((550,310))
        x=i%3*width;y=i//3*row_height
        sheet.paste(image,(x,y));draw.text((x+8,y+(314 if kind=='desktop' else 490)),asset_id,fill='#252a2d',font=font)
    sheet.save(out/f'mechanics-details-{kind}-contact.png')
print('Module and mechanics-detail QA sheets written.')
