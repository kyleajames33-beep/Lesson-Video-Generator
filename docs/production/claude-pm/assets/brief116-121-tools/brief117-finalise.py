"""Brief 117 final streaming image checks and local media checkpoint. No shared files."""
from pathlib import Path
import sys
if (next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm/assets/brief117-processing-paused.flag').exists():
 print('Brief117 final image processing remains paused by root.')
 sys.exit(0)
from PIL import Image,ImageDraw,ImageStat
import json,subprocess,sys,hashlib,zipfile
root=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());a=root/'docs/production/claude-pm/assets';q=a/'brief117-qa'
if '--archive-only' in sys.argv:
 # Refresh after a targeted retake without repeating 36 image-processing operations.
 provpath=a/'brief117-provenance.json';data=json.loads(provpath.read_text());byname={r['filename']:r for r in data['plates']}
 techpath=a/'brief117-final-technical-check.json';tech=json.loads(techpath.read_text());checks=tech['plates']
 for c in checks:
  r=byname[c['name']];p=root/r['output_path'];c.update({'size':r['size'],'alpha_bounds':r['alpha_bounds'],'solid_alpha_bounds':r.get('solid_alpha_bounds'),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size})
 data['built_in_generation_calls']=len(json.loads((a/'brief117-generation-jobs.json').read_text()));data['qa_observations']='brief117-qa-review.md';data['remaining_asset_gates']=['Owner art acceptance','Burner references already differ by more than 2 px; simultaneous 2 px matching is not possible without changing a reference']
 repairpath=a/'brief117-mucus-composite-check.json';repair=json.loads(repairpath.read_text()) if repairpath.exists() else {}
 repaired=repair.get('published_to_target') and repair.get('all_mask_zero_pixels_exact_RGBA_equal') and repair.get('all_pixels_y_920_and_below_exact_RGBA_equal')
 if not repaired:data['remaining_asset_gates'].append('Thick-mucus plate remains held for lower-tissue redraw/alignment')
 for r in data['plates']:
  if r['filename']=='m8-airway-mucus-thick-v1.png':r['visual_qa']='Root/agent inspected clean composited seam; protected original lower RGBA pixels exactly retained; owner art acceptance pending' if repaired else 'Held: lower-tissue redraw/alignment, see QA review'
  else:r['visual_qa']='Contact content inspected; owner acceptance pending, see QA review'
 geometry={};ys=[800,1000,1200,1400,1600,1750]
 for name in ['m8-flame-test-off-v2.png','m8-flame-ca-brick-red-v2.png','m8-flame-blue-v2.png']:
  with Image.open(root/'public/assets/chemistry'/name) as im:
   alpha=im.getchannel('A');geometry[name]={str(y):alpha.crop((0,y,2000,y+1)).point(lambda v:255 if v>=128 else 0).getbbox() for y in ys}
 (a/'brief117-burner-anchor-check.json').write_text(json.dumps(geometry,indent=2),encoding='utf-8')
 with Image.open(root/'public/assets/chemistry/m8-flame-test-off-v2.png') as off,Image.open(root/'public/assets/chemistry/m8-flame-blue-v2.png') as blue:
  blend=Image.blend(off.convert('RGBA'),blue.convert('RGBA'),.5);blend.thumbnail((700,700));bg=Image.new('RGBA',blend.size,'#f5f0e6');bg.alpha_composite(blend);bg.convert('RGB').save(q/'m8-flame-blue-v2--off-overlay50.jpg',quality=93)
 provpath.write_text(json.dumps(data,indent=2),encoding='utf-8');techpath.write_text(json.dumps(tech,indent=2),encoding='utf-8')
 archive=a/'brief117-media.zip'
 with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=3) as z:
  for r in checks:z.write(root/r['path'],r['path'].replace('\\','/'))
  for name in ['brief117-provenance.json','brief117-generation-jobs.json','brief117-final-technical-check.json','brief117-qa-review.md','brief117-burner-anchor-check.json','brief117-mucus-composite-check.json']:
   p=a/name
   if p.exists():z.write(p,name)
  for p in sorted(q.glob('*')):z.write(p,'qa/'+p.name)
 h=hashlib.sha256()
 with archive.open('rb') as f:
  for block in iter(lambda:f.read(1024*1024),b''):h.update(block)
 checkpoint={'brief':117,'date':'2026-10-30','archive':str(archive.relative_to(root)),'bytes':archive.stat().st_size,'sha256':h.hexdigest(),'unique_plate_files':len(checks),'png_RGBA_2000_square':all(x['mode']=='RGBA' and tuple(x['size'])==(2000,2000) for x in checks),'all_have_real_transparency':all(tuple(x['alpha_extrema'])==(0,255) for x in checks),'owner_acceptance':False,'upload_or_commit':False}
 with zipfile.ZipFile(archive) as z:checkpoint['archive_bad_member']=z.testzip();checkpoint['archive_members']=len(z.namelist())
 (a/'brief117-media-checkpoint.json').write_text(json.dumps(checkpoint,indent=2),encoding='utf-8');print(json.dumps(checkpoint));sys.exit(0)
provpath=a/'brief117-provenance.json';data=json.loads(provpath.read_text())
expected_chem=['m8-flame-blue-v2.png','m8-cuvette-cu-pale-v1.png','m8-cuvette-cu-deep-v1.png','m8-hollow-cathode-lamp-v1.png']+[f'm8-cuvette-cu-{i}-v1.png' for i in range(1,6)]+['m8-cuvette-cu-unknown-v1.png','m8-cuvette-cu-unknown-diluted-v1.png','m8-cu-standards-rack-v1.png','m8-school-bubbler-v1.png']
expected_bio=['m8-potometer-v1.png','m8-stomata-field-lower-v1.png','m8-stomata-field-upper-v1.png','m8-desk-fan-v1.png','m8-scalpel-v1.png','m8-clear-nail-varnish-v1.png','m8-airway-cell-cftr-v1.png','m8-airway-cell-cftr-missing-v1.png','m8-airway-mucus-thick-v1.png','m8-lungs-silicosis-v1.png','m8-red-cells-iron-deficient-v1.png','m8-fibro-sheet-asbestos-v1.png','m8-alveoli-healthy-v1.png','m8-alveoli-emphysema-v1.png','m8-artery-healthy-v1.png','m8-artery-plaque-v1.png','m8-asbestos-fibre-macrophage-v1.png','m8-collagen-strong-v1.png','m8-collagen-weak-v1.png','m8-leg-bones-normal-v1.png','m8-leg-bones-rickets-v1.png','m8-thyroid-normal-v1.png','m8-thyroid-goitre-v1.png']
expected=set(expected_chem+expected_bio)
records={x['filename']:x for x in data['plates']}
one=records['m8-cuvette-cu-1-v1.png']
if 'm8-cuvette-cu-pale-v1.png' not in records:
 subprocess.run([sys.executable,str(root/'docs/production/claude-pm/assets/brief116-121-tools/brief117-process-plate.py'),'--raw',one['raw_path'],'--name','m8-cuvette-cu-pale-v1.png','--subject','chemistry','--restore-canvas','--reference','public/assets/chemistry/m5x-cuvette-1-v1.png'],check=True,capture_output=True)
data=json.loads(provpath.read_text());records={x['filename']:x for x in data['plates']}
latest={x['name']:x for x in json.loads((a/'brief117-generation-jobs.json').read_text())}
for name,r in records.items():
 if latest.get(name,{}).get('retake') and latest[name].get('raw'):
  r['raw_path']=latest[name]['raw']
missing=expected-set(records)
if missing:raise ValueError('Missing plates: '+str(sorted(missing)))
# Reapply only the documented uniform placement and alpha-speck cleanup to older outputs.
for name in sorted(expected):
 r=records[name]
 mode=r.get('placement_mode')
 if mode=='region_composite':continue
 if not mode:
  mode='restore_canvas' if ('cuvette-cu-' in name or name=='m8-flame-blue-v2.png') else 'fit_object' if name=='m8-school-bubbler-v1.png' else 'matched_transform'
 args=[sys.executable,str(root/'docs/production/claude-pm/assets/brief116-121-tools/brief117-process-plate.py'),'--raw',r['raw_path'],'--name',name,'--subject',r['subject'],'--extent',str(r.get('extent',1400 if name=='m8-school-bubbler-v1.png' else 1600))]
 if mode=='restore_canvas':args+=['--restore-canvas']
 elif mode=='matched_transform':args+=['--matched-transform']
 if r.get('reference'):args+=['--reference',r['reference']]
 if r.get('translation'):args+=['--shift-x',str(r['translation'][0]),'--shift-y',str(r['translation'][1])]
 if r.get('canvas_scale'):args+=['--canvas-scale',str(r['canvas_scale'])]
 subprocess.run(args,check=True,capture_output=True)
data=json.loads(provpath.read_text());records={x['filename']:x for x in data['plates']}
pairs=[('m8-cuvette-cu-pale-v1.png','m8-cuvette-cu-deep-v1.png'),('m8-cuvette-cu-unknown-v1.png','m8-cuvette-cu-unknown-diluted-v1.png')]
for left,right in pairs:
 p1=root/records[left]['output_path'];p2=root/records[right]['output_path']
 with Image.open(p1) as im1,Image.open(p2) as im2:
  blend=Image.blend(im1.convert('RGBA'),im2.convert('RGBA'),.5);blend.thumbnail((700,700));bg=Image.new('RGBA',blend.size,'#f5f0e6');bg.alpha_composite(blend);bg.convert('RGB').save(q/f'{Path(left).stem}--{Path(right).stem}-overlay50.jpg',quality=93)
# Additional burner-off overlay.
with Image.open(root/'public/assets/chemistry/m8-flame-test-off-v2.png') as off,Image.open(root/'public/assets/chemistry/m8-flame-blue-v2.png') as blue:
 blend=Image.blend(off.convert('RGBA'),blue.convert('RGBA'),.5);blend.thumbnail((700,700));bg=Image.new('RGBA',blend.size,'#f5f0e6');bg.alpha_composite(blend);bg.convert('RGB').save(q/'m8-flame-blue-v2--off-overlay50.jpg',quality=93)
series=Image.new('RGB',(1500,335),'#f5f0e6');draw=ImageDraw.Draw(series);means=[]
for i in range(1,6):
 name=f'm8-cuvette-cu-{i}-v1.png'
 with Image.open(root/records[name]['output_path']) as im:
  tile=im.convert('RGBA');tile.thumbnail((300,300));series.paste(tile,((i-1)*300,35),tile);draw.text(((i-1)*300+10,8),f'Standard {i}',fill='black')
  means.append({'name':name,'central_RGB':ImageStat.Stat(im.convert('RGB').crop((930,1000,1080,1400))).mean})
series.save(q/'cu-standards-in-order-300.jpg',quality=94)
checks=[]
for name in sorted(expected):
 p=root/records[name]['output_path']
 with Image.open(p) as im:
  alpha=im.getchannel('A');bbox=alpha.getbbox();solid=alpha.point(lambda x:255 if x>=16 else 0).getbbox()
  checks.append({'name':name,'path':str(p.relative_to(root)),'size':im.size,'mode':im.mode,'alpha_extrema':alpha.getextrema(),'alpha_bounds':bbox,'solid_alpha_bounds':solid,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size})
data['plates']=[records[n] for n in sorted(expected)];data['plates'][[x['filename'] for x in data['plates']].index('m8-cuvette-cu-pale-v1.png')]['alias_of']='m8-cuvette-cu-1-v1.png'
data['expected_unique_files']=36;data['delivered_unique_files']=len(checks);data['status']='Technical artwork candidates. Agent inspection recorded separately; owner acceptance pending.'
data['generation_prompt_records']='brief117-generation-jobs.json';data['built_in_generation_calls']=len(json.loads((a/'brief117-generation-jobs.json').read_text()));data['unique_generated_names']=35;data['reused_alias_files']=1;data['qa_observations']='brief117-qa-review.md'
provpath.write_text(json.dumps(data,indent=2),encoding='utf-8')
(a/'brief117-final-technical-check.json').write_text(json.dumps({'plates':checks,'cuvette_colour_sample':means,'missing':sorted(missing),'notes':['No stretching or semantic Python repainting.','Only alpha values 1 to 3 cleared; generated alpha otherwise preserved.','Overlay images show redraw differences; exact pixel identity is not asserted.']},indent=2),encoding='utf-8')
archive=a/'brief117-media.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=3) as z:
 for r in checks:z.write(root/r['path'],r['path'].replace('\\','/'))
 z.write(provpath,'brief117-provenance.json')
 z.write(a/'brief117-generation-jobs.json','brief117-generation-jobs.json')
 z.write(a/'brief117-final-technical-check.json','brief117-final-technical-check.json')
 for p in sorted(q.glob('*')):z.write(p,'qa/'+p.name)
h=hashlib.sha256()
with archive.open('rb') as f:
 for block in iter(lambda:f.read(1024*1024),b''):h.update(block)
checkpoint={'brief':117,'date':'2026-10-30','archive':str(archive.relative_to(root)),'bytes':archive.stat().st_size,'sha256':h.hexdigest(),'unique_plate_files':len(checks),'png_RGBA_2000_square':all(x['mode']=='RGBA' and x['size']==(2000,2000) for x in checks),'all_have_real_transparency':all(x['alpha_extrema']==(0,255) for x in checks),'owner_acceptance':False,'upload_or_commit':False}
with zipfile.ZipFile(archive) as z:checkpoint['archive_bad_member']=z.testzip();checkpoint['archive_members']=len(z.namelist())
(a/'brief117-media-checkpoint.json').write_text(json.dumps(checkpoint,indent=2),encoding='utf-8');print(json.dumps(checkpoint))
