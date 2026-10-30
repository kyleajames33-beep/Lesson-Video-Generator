"""Brief 117 single-plate uniform placement and low-memory alpha/QA evidence."""
from pathlib import Path
import sys
if (next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm/assets/brief117-processing-paused.flag').exists():
 print('Brief117 local image processing paused. Raw generation retained for later processing.')
 sys.exit(0)
from PIL import Image,ImageDraw
import argparse,json,hashlib
p=argparse.ArgumentParser();p.add_argument('--raw',required=True);p.add_argument('--name',required=True);p.add_argument('--subject',required=True);p.add_argument('--extent',type=int,default=1600);p.add_argument('--reference');p.add_argument('--matched-transform',action='store_true');p.add_argument('--restore-canvas',action='store_true');p.add_argument('--shift-x',type=int,default=0);p.add_argument('--shift-y',type=int,default=0);p.add_argument('--canvas-scale',type=float,default=1.0);a=p.parse_args()
root=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists()); base=root/'docs/production/claude-pm/assets'; qa=base/'brief117-qa';qa.mkdir(exist_ok=True)
dest=root/'public/assets'/a.subject/a.name
im=Image.open(a.raw).convert('RGBA'); original_size=im.size;box=im.getchannel('A').getbbox()
if a.restore_canvas:
 if im.width!=im.height:raise ValueError('Cannot restore a nonsquare canvas without a specified uniform transform')
 fitted=im.resize((2000,2000),Image.Resampling.LANCZOS)
elif a.matched_transform:
 # A generated edit retains the reference's canvas; retain that coordinate system.
 fitted=im.copy();fitted.thumbnail((a.extent,a.extent),Image.Resampling.LANCZOS)
else:
 # Crop transparent padding only, then scale uniformly. Never warp to a rectangle.
 fitted=im.crop(box);scale=min(a.extent/fitted.width,a.extent/fitted.height)
 fitted=fitted.resize((round(fitted.width*scale),round(fitted.height*scale)),Image.Resampling.LANCZOS)
out=Image.new('RGBA',(2000,2000));position=((2000-fitted.width)//2+a.shift_x,(2000-fitted.height)//2+a.shift_y);out.alpha_composite(fitted,position)
if a.canvas_scale!=1.0:
 scaled=out.resize((round(2000*a.canvas_scale),round(2000*a.canvas_scale)),Image.Resampling.LANCZOS);out=Image.new('RGBA',(2000,2000));out.alpha_composite(scaled,((2000-scaled.width)//2,(2000-scaled.height)//2))
out.putalpha(out.getchannel('A').point(lambda x:x if x>3 else 0));out.save(dest)
entry={'filename':a.name,'subject':a.subject,'raw_path':a.raw,'raw_size':original_size,'raw_alpha_bounds':box,'output_path':str(dest.relative_to(root)),'size':out.size,'alpha_bounds':out.getchannel('A').getbbox(),'solid_alpha_bounds':out.getchannel('A').point(lambda x:255 if x>=16 else 0).getbbox(),'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'operation':'uniform resize and transparent padding; clear alpha values 1 to 3 only','placement_mode':'restore_canvas' if a.restore_canvas else 'matched_transform' if a.matched_transform else 'fit_object','extent':a.extent,'translation':[a.shift_x,a.shift_y],'canvas_scale':a.canvas_scale,'generated_with':'built-in image_gen','accepted_by_owner':False,'visual_qa':'pending human/agent inspection','reference':a.reference}
for width in [220,600]:
 small=out.resize((width,width),Image.Resampling.LANCZOS);board=Image.new('RGB',(width*3,width+25),'white');d=ImageDraw.Draw(board)
 for i,(label,color) in enumerate([('white','#ffffff'),('cream','#f5f0e6'),('black','#121212')]):
  tile=Image.new('RGBA',(width,width),color);tile.alpha_composite(small);board.paste(tile.convert('RGB'),(i*width,25));d.text((i*width+6,5),label,fill='black')
 board.save(qa/f'{dest.stem}-{width}.jpg',quality=90)
if a.reference:
 ref=Image.open(a.reference).convert('RGBA')
 if ref.size==out.size:
  # True 50 percent overlay, showing both sets of edges rather than a still of either.
  over=Image.blend(ref,out,0.5);over.thumbnail((700,700));bg=Image.new('RGBA',over.size,'#f5f0e6');bg.alpha_composite(over);bg.convert('RGB').save(qa/f'{dest.stem}-overlay50.jpg',quality=93);entry['overlay50']=str((qa/f'{dest.stem}-overlay50.jpg').relative_to(root))
prov=base/'brief117-provenance.json';data=json.loads(prov.read_text(encoding='utf-8')) if prov.exists() else {'brief':117,'date':'2026-10-30','mode':'built-in image_gen only','requested_unique_files':36,'plates':[]}
data['plates']=[x for x in data['plates'] if x['filename']!=a.name]+[entry];prov.write_text(json.dumps(data,indent=2),encoding='utf-8')
print(json.dumps(entry))
