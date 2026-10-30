"""Brief 117 small sequential source/final contact sheets, not video rendering."""
from pathlib import Path
from PIL import Image,ImageDraw
import json,sys,math
root=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());a=root/'docs/production/claude-pm/assets'
mode=sys.argv[1] if len(sys.argv)>1 else 'source'
if mode=='source':
 files=[root/'public/assets'/x for x in ['chemistry/m5x-cuvette-1-v1.png','chemistry/m8-flame-test-off-v2.png','chemistry/m8-flame-ca-brick-red-v2.png','biology/m7-airway-cell-v1.png','biology/m7-airway-cilia-mucus-v1.png','biology/m8-lungs-healthy-v1.png','biology/m5x-red-blood-cells-v1.png','biology/m8-pancreas-v1.png','biology/b2b-prop-new-plant-v1.png']]
elif mode=='overlay':
 files=sorted((a/'brief117-qa').glob('*overlay50*.jpg'))
else:
 files=[root/x['output_path'] for x in json.loads((a/'brief117-provenance.json').read_text())['plates']]
for start in range(0,len(files),9):
 group=files[start:start+9];out=Image.new('RGB',(1200,430*math.ceil(len(group)/3)),'#f5f0e6');d=ImageDraw.Draw(out)
 for i,f in enumerate(group):
  im=Image.open(f).convert('RGBA');im.thumbnail((380,380));x=i%3*400;y=i//3*430;out.paste(im,(x+(400-im.width)//2,y+35),im);d.text((x+5,y+5),f.name,fill='black');im.close()
 dest=a/f'brief117-{mode}-contact-{start//9+1}.jpg';out.save(dest,quality=90);print(dest)
