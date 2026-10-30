"""Brief 120 delivery preparation: authorised canvas and alpha cleanup only."""
from pathlib import Path
import json,re,hashlib,shutil
from PIL import Image,ImageFilter,ImageDraw

base=Path(__file__).resolve().parents[1]
repo=base.parents[2]
assets=base/'assets'
records=json.loads((assets/'brief120-generation-records.json').read_text(encoding='utf-8-sig'))
rawdir=assets/'brief120-raw';rawdir.mkdir(exist_ok=True)
qa=assets/'brief120-qa';qa.mkdir(exist_ok=True)
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
latest={}
for i,r in enumerate(records):
 source=Path(re.search(r'as (C:\\[^\n]+\.png) by default',r['output_hint']).group(1))
 raw=rawdir/f'{i+1:02}-{r["key"]}.png'
 shutil.copy2(source,raw)
 r.update(rawPath=str(raw.relative_to(repo)).replace('\\','/'),rawSha256=sha(raw),rawSize=list(Image.open(raw).size))
 latest[r['key']]=r
paired={'m8-blastocyst-v1','m8-blastocyst-biopsy-v1','m8-hair-cells-healthy-v1','m8-hair-cells-damaged-v1'}
ear={'m8-ear-cutaway-implant-v1','m8-ear-cutaway-bone-conduction-v1'}
for key,r in latest.items():
 subject=r.get('subject','biology');raw=repo/r['rawPath'];im=Image.open(raw).convert('RGBA')
 alpha=im.getchannel('A').point(lambda x:0 if x<=8 else x).filter(ImageFilter.MinFilter(3))
 im.putalpha(alpha)
 size=(2000,1200) if key=='m8-ms-cutaway-v1' else (2000,2000)
 out=Image.new('RGBA',size)
 if key in ear:
  im=im.resize(size,Image.Resampling.LANCZOS);out.alpha_composite(im)
  transform={'method':'entire original canvas mapped to2000 to preserve existing-ear alignment','scale':2000/r['rawSize'][0],'offset':[0,0]}
 elif key in paired:
  im=im.resize((1600,1600),Image.Resampling.LANCZOS);out.alpha_composite(im,(200,200))
  transform={'method':'common full-canvas transform for aligned pair','scale':1600/r['rawSize'][0],'offset':[200,200]}
 else:
  box=im.getbbox();im=im.crop(box);scale=min(size[0]*.78/im.width,size[1]*.78/im.height)
  im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS)
  offset=((size[0]-im.width)//2,(size[1]-im.height)//2);out.alpha_composite(im,offset)
  transform={'method':'alpha-bounds proportional fit, no stretching','rawCrop':list(box),'scale':scale,'offset':list(offset)}
 dest=repo/'public/assets'/subject/f'{key}.png';out.save(dest)
 box=out.getbbox();margin=[box[0]/size[0],box[1]/size[1],(size[0]-box[2])/size[0],(size[1]-box[3])/size[1]]
 r.update(finalPath=str(dest.relative_to(repo)).replace('\\','/'),finalSha256=sha(dest),finalSize=list(size),alphaBounds=list(box),clearMarginFractions=margin,transform=transform,alphaCleanup='alpha<=8 removed; one raw pixel erosion; proportional Lanczos resampling',qaStatus='pending visual QA')
 sheet=Image.new('RGB',(1800,730),'white');draw=ImageDraw.Draw(sheet)
 for col,(label,colour) in enumerate([('white','#ffffff'),('black','#000000'),('cream','#f7f0e5')]):
  canvas=Image.new('RGBA',(600,650),colour);preview=out.copy();preview.thumbnail((600,600));canvas.alpha_composite(preview,((600-preview.width)//2,0));sheet.paste(canvas.convert('RGB'),(col*600,0));draw.text((col*600+8,660),f'{key}: {label},600px fit',fill='black')
  mini=out.copy();mini.thumbnail((220,220));tile=Image.new('RGBA',(220,220),colour);tile.alpha_composite(mini,((220-mini.width)//2,(220-mini.height)//2));sheet.paste(tile.convert('RGB'),(col*600+370,430))
 sheet.save(qa/f'{key}-backgrounds.jpg',quality=90)
for title,left,right in [('blastocyst','m8-blastocyst-v1','m8-blastocyst-biopsy-v1'),('hair-cells','m8-hair-cells-healthy-v1','m8-hair-cells-damaged-v1'),('ear-implant','m8-ear-cutaway-v1','m8-ear-cutaway-implant-v1'),('ear-bone','m8-ear-cutaway-v1','m8-ear-cutaway-bone-conduction-v1')]:
 a=Image.open(repo/'public/assets/biology'/f'{left}.png').convert('RGBA');b=Image.open(repo/'public/assets/biology'/f'{right}.png').convert('RGBA');b=b.resize(a.size,Image.Resampling.LANCZOS);blend=Image.blend(a,b,.5);back=Image.new('RGBA',a.size,'#f7f0e5');back.alpha_composite(blend);back.thumbnail((900,900));back.convert('RGB').save(qa/f'{title}-overlay50.jpg',quality=92)
provenance={'brief':120,'generator':'built-in image_gen only','date':'2026-10-30','count':len(latest),'generationRecords':records,'selectedPlates':list(latest.values()),'authorisation':'Root confirmed prior explicit user authorisation for deterministic alpha cleanup, proportional resizing, canvas padding and alignment; see brief108 provenance. Original art is retained unchanged in brief120-raw.','notes':['AAV packaged genome corrected from closed loop to open linear single strand before generation.','Mass spectrometer first S-bend generation rejected and retained as raw; selected retake has a quarter-circle magnetic sector.','NMR liquid-fill height retaken; hair-cell damage retaken to include actual cell-loss gaps.','Ear edits retain original full-canvas geometry. Existing ear margins are about8 percent, an explicit exception to10percent so the existing source is not changed.']}
(assets/'brief120-provenance.json').write_text(json.dumps(provenance,indent=2),encoding='utf8')
print('Prepared',len(latest),'plates; QA pending; originals retained.')
