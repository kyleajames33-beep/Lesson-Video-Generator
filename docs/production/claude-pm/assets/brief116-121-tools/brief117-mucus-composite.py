"""Root-authorised Brief 117 region confinement; existing generated pixels only."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageChops,ImageStat
import json,hashlib,shutil
root=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());a=root/'docs/production/claude-pm/assets';q=a/'brief117-qa'
source=root/'public/assets/biology/m7-airway-cilia-mucus-v1.png';target=root/'public/assets/biology/m8-airway-mucus-thick-v1.png'
before=a/'brief117-mucus-pre-composite.png'
if not before.exists():shutil.copy2(target,before)
src=Image.open(source).convert('RGBA');gen=Image.open(before).convert('RGBA')
# Translation of generated mucus/cilia pixels only. The baseline tissue is never transformed.
shifted=Image.new('RGBA',src.size);shifted.alpha_composite(gen,(0,-45))
# A source-coordinate mask follows the apical band, rising over the goblet-cell tops.
# Its 8 px blend is wholly above the protected contour, never below it.
points=[(0,840),(240,840),(320,845),(420,858),(520,874),(605,885),(650,842),(675,795),(705,775),(735,805),(770,868),(815,902),(950,912),(1090,918),(1185,915),(1230,870),(1260,810),(1290,780),(1320,810),(1350,872),(1390,918),(1510,920),(1630,913),(1775,914),(1999,914)]
mask=Image.new('L',src.size,0);px=mask.load();seg=0
for x in range(2000):
 while seg+1<len(points)-1 and x>points[seg+1][0]:seg+=1
 x0,y0=points[seg];x1,y1=points[seg+1];edge=round(y0+(y1-y0)*(x-x0)/(x1-x0))
 for y in range(edge):px[x,y]=255 if y<edge-8 else round(255*(edge-y)/8)
out=Image.composite(shifted,src,mask)
candidate=a/'brief117-mucus-confined-candidate.png';out.save(candidate)
# Exact RGBA equality wherever the mask is zero, including the entire lower field.
diff=ImageChops.difference(src,out);protected_diff=Image.new('RGBA',src.size);protected_diff.paste(diff,(0,0),ImageChops.invert(mask).point(lambda v:255 if v==255 else 0))
same=all(channel.getbbox() is None for channel in protected_diff.split())
lower_same=src.crop((0,920,2000,2000)).tobytes()==out.crop((0,920,2000,2000)).tobytes()
if not same or not lower_same:raise ValueError('Original lower-tissue invariant failed')
shutil.copy2(candidate,target)
record={'authorisation':'Root follow-up: confine existing imagegen mucus/cilia/bacteria pixels and retain original lower tissue exactly. No semantic drawing. Root inspected candidate and overlay before promotion.','reference_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'pre_composite':str(before.relative_to(root)),'candidate':str(candidate.relative_to(root)),'generated_region_translation':[0,-45],'mask_contour':points,'blend_pixels_above_contour':8,'all_mask_zero_pixels_exact_RGBA_equal':same,'all_pixels_y_920_and_below_exact_RGBA_equal':lower_same,'published_to_target':True,'target_sha256':hashlib.sha256(target.read_bytes()).hexdigest()}
(a/'brief117-mucus-composite-check.json').write_text(json.dumps(record,indent=2),encoding='utf-8')
provpath=a/'brief117-provenance.json';prov=json.loads(provpath.read_text())
for r in prov['plates']:
 if r['filename']==target.name:
  r.update({'sha256':record['target_sha256'],'operation':'Root-authorised deterministic region confinement using existing generated mucus/cilia pixels over unchanged original tissue; no semantic repainting','placement_mode':'region_composite','composite_check':'brief117-mucus-composite-check.json','alpha_bounds':out.getchannel('A').getbbox(),'solid_alpha_bounds':out.getchannel('A').point(lambda v:255 if v>=16 else 0).getbbox(),'visual_qa':'Clean seam inspected by root and agent; protected lower region exactly unchanged; owner art acceptance pending'})
provpath.write_text(json.dumps(prov,indent=2),encoding='utf-8')
for width in [220,600]:
 small=out.resize((width,width),Image.Resampling.LANCZOS);board=Image.new('RGB',(width*3,width+25),'white');d=ImageDraw.Draw(board)
 for i,(label,color) in enumerate([('white','#ffffff'),('cream','#f5f0e6'),('black','#121212')]):
  tile=Image.new('RGBA',(width,width),color);tile.alpha_composite(small);board.paste(tile.convert('RGB'),(i*width,25));d.text((i*width+6,5),label,fill='black')
 board.save(q/f'm8-airway-mucus-thick-v1-{width}.jpg',quality=90)
usual=Image.blend(src,out,.5);usual.thumbnail((700,700));bg=Image.new('RGBA',usual.size,'#f5f0e6');bg.alpha_composite(usual);bg.convert('RGB').save(q/'m8-airway-mucus-thick-v1-overlay50.jpg',quality=93)
for name,im in [('candidate',out),('overlay50',Image.blend(src,out,.5))]:
 im.thumbnail((900,900));bg=Image.new('RGBA',im.size,'#f5f0e6');bg.alpha_composite(im);bg.convert('RGB').save(q/f'mucus-confined-{name}.jpg',quality=95)
mask.thumbnail((700,700));mask.save(q/'mucus-confined-mask.png');print(json.dumps(record))
