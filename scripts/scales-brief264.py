"""Disposable paper-background size checks, never a delivered asset edit."""
from pathlib import Path
from PIL import Image,ImageDraw
for name in ['ms11-electricity-meter-v1','ms11-water-meter-v1','ms11-fridge-v1']:
 im=Image.open('public/assets/maths/'+name+'.png').convert('RGBA')
 tall=name=='ms11-fridge-v1'
 dims=[(round(im.width*h/im.height),h) for h in [800,600,300]] if tall else [(w,round(im.height*w/im.width)) for w in [800,600,300]]
 sheet=Image.new('RGBA',(sum(w+30 for w,h in dims)+20,max(h for w,h in dims)+90),'#f6f1e7');d=ImageDraw.Draw(sheet);x=20
 for w,h in dims:
  preview=im.resize((w,h),Image.Resampling.LANCZOS)
  sheet.alpha_composite(preview,(x,55));d.text((x,20),str(h if tall else w)+(' px tall' if tall else ' px wide'),fill='#222');x+=w+30
 sheet.convert('RGB').save('work/brief264/qa/'+name+'-sizes.jpg',quality=94)
small=Image.new('RGBA',(700,340),'#f6f1e7');d=ImageDraw.Draw(small)
im=Image.open('public/assets/maths/ms11-electricity-meter-v1.png').convert('RGBA');im.thumbnail((600,260));small.alpha_composite(im,(35,55));d.text((20,20),'Electricity meter at 260 px tall',fill='#222')
im=Image.open('public/assets/maths/ms11-water-meter-v1.png').convert('RGBA');im.thumbnail((300,500));small.alpha_composite(im,(330,55));d.text((330,20),'Water meter at 300 px wide',fill='#222');small.convert('RGB').save('work/brief264/qa/meters-small.jpg',quality=95)
im=Image.open('public/assets/maths/ms11-fridge-v1.png').convert('RGBA');im.thumbnail((500,260));small=Image.new('RGBA',(230,320),'#f6f1e7');small.alpha_composite(im,(25,35));ImageDraw.Draw(small).text((15,10),'Fridge at 260 px tall',fill='#222');small.convert('RGB').save('work/brief264/qa/fridge-small.jpg',quality=95)
