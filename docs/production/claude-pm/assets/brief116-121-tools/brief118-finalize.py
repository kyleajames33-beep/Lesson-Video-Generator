"""Finalize brief118 QA, integrity and streaming archive without image arrays."""
import pathlib,json,hashlib,zipfile
from PIL import Image,ImageDraw
ROOT=next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists()); AS=ROOT/'docs/production/claude-pm/assets'; QA=AS/'brief118-qa'
def sha(p):
 h=hashlib.sha256()
 with open(p,'rb') as f:
  for b in iter(lambda:f.read(1024*1024),b''):h.update(b)
 return h.hexdigest()
p=json.loads((AS/'brief118-provenance.json').read_text())
for group in ['chemistry','biology']:
 items=[x for x in p['plates'] if '/'+group+'/' in x['path'].replace('\\','/')]
 sheet=Image.new('RGB',(1000,((len(items)+3)//4)*285),'#f3f0e7');d=ImageDraw.Draw(sheet)
 for n,x in enumerate(items):
  with Image.open(ROOT/x['path']) as im:
   im=im.convert('RGBA');im.thumbnail((240,245));bg=Image.new('RGBA',(250,250),'#10252a');bg.alpha_composite(im,((250-im.width)//2,(250-im.height)//2));sheet.paste(bg.convert('RGB'),((n%4)*250,(n//4)*285))
  d.text(((n%4)*250+3,(n//4)*285+252),x['filename'].replace('m8-',''),fill='black')
 sheet.save(QA/('final-'+group+'.jpg'),quality=90)
for x in p['plates']:
 assert sha(ROOT/x['path'])==x['sha256']
 with Image.open(ROOT/x['path']) as im:assert list(im.size)==x['final']['size'] and im.mode=='RGBA' and im.getchannel('A').getextrema()[0]==0
 x['visualInspection']='Reviewed contact, background and relevant set/reference overlay views. Subject and transparent silhouette usable as candidate; owner acceptance pending.'
p['qaStatus']='Visual inspection completed. All 26 actual RGBA dimensions and hashes verified. Strict outside-content pixel identity not certified.'
p['limitations']=['Native generated resolutions were uniformly enlarged and transparently padded to requested canvases; no extra scientific detail is implied.','Flask set uses a protected common clear-state glass with existing generated liquid pixels confined inside. All three outlines and all RGBA outside the recorded mask match exactly.','Other matched sets have alpha-bound differences of up to 2 pixels; this does not certify outside-content pixel identity.','Art QA is not exact voiced playback, learning approval or release approval.']
(AS/'brief118-provenance.json').write_text(json.dumps(p,indent=2),encoding='utf8')
measurement={'method':'Manual tube-outline estimates from original 2000 px rack reference grid. Mouth widths measured at outline top. Bottom estimates have about 10 px uncertainty. This is sufficient for the 3 percent decision, not metrology.','oldBromine':{'top':177,'bottomApprox':1690,'mouthWidth':291},'dichromate':{'top':220,'bottomApprox':1580,'mouthWidth':296},'equalHeightOldBromineWidthApprox':261.6,'widthDifferencePercentApprox':11.6,'decision':'Exceeds 3 percent even allowing stated uncertainty; two v2 replacements generated from dichromate geometry.','v2BoundsReferenceMaximumDifferencePixels':1}
(AS/'brief118-rack-measurements.json').write_text(json.dumps(measurement,indent=2))
# Archive immutable delivery and review/source evidence. Exclude hand-in/checkpoint to avoid self-referential hashes.
files={ROOT/x['path'] for x in p['plates']}
files.update(QA.rglob('*'))
files.update(q for q in AS.glob('brief118-*') if q.is_file() and q.name not in ['brief118-hand-in.md','brief118-media-checkpoint.json'])
keys=['m8c05','m8c06','m8c08','m8p05c','m8b09','m8b10','m8b11','m8g01b']
reviews=[ROOT/'docs/production/claude-pm/checks'/f'{k}-{s}.md' for k in keys for s in ['learning-review','claude-science-check']]
for q in reviews:
 t=q.read_text(encoding='utf8');assert t.rstrip().endswith('## Resolution') and chr(8212) not in t
files.update(reviews)
archive=ROOT/'out/archives/brief118-media-2026-10-30.zip';archive.parent.mkdir(exist_ok=True,parents=True)
members={str(q.relative_to(ROOT)).replace('\\','/'):sha(q) for q in sorted(files) if q.is_file()}
with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_STORED) as z:
 for n in members:z.write(ROOT/n,n)
with zipfile.ZipFile(archive) as z:
 for n,h in members.items():
  hh=hashlib.sha256()
  with z.open(n) as f:
   for b in iter(lambda:f.read(1024*1024),b''):hh.update(b)
  assert hh.hexdigest()==h
checkpoint={'archive':str(archive.relative_to(ROOT)).replace('\\','/'),'bytes':archive.stat().st_size,'sha256':sha(archive),'verifiedMemberCount':len(members),'allMemberHashesVerified':True,'plateCount':26,'reviewCount':16,'members':members}
(AS/'brief118-media-checkpoint.json').write_text(json.dumps(checkpoint,indent=2))
h=AS/'brief118-hand-in.md';t=h.read_text(encoding='utf8')
a=t.index('Final sequential PIL-only') if 'Final sequential PIL-only' in t else t.index('Initial plate preparation');b=t.index('## Remaining gates')
t=t[:a]+'''Final sequential PIL-only finishing and visual QA are complete. All 26 files have verified RGBA dimensions, actual transparency and manifest hashes. The flask alignment repair now has zero alpha-bound difference and exact RGBA identity outside its recorded liquid-interior mask. Existing generated contents were confined inside common clear-state glass, with clean seams on the inspected comparison. Originals are preserved in QA. Other matched sets differ by up to 2 output pixels; strict outside-content identity for those sets is not certified. Uniform enlargement from the tool's native resolution is recorded honestly in provenance. No scientific content was painted or recoloured. The authorized flask repair uses existing generated liquid pixels only.

The original rack comparison gives approximately 11.6% width mismatch at equal tube height, beyond the 3% threshold with measurement uncertainty. `brief118-rack-measurements.json` records the method and the resulting conditional v2 decision.

## Media checkpoint

'''+f"Archive: `{checkpoint['archive']}`. Size: {checkpoint['bytes']:,} bytes. SHA-256: `{checkpoint['sha256']}`. All {len(members)} member hashes were verified after writing. `brief118-media-checkpoint.json` records every member and hash. The archive contains 26 plates, QA, provenance, scientific source evidence and all 16 reviews.\n\n"+t[b:]
assert chr(8212) not in t;h.write_text(t,encoding='utf8')
print(json.dumps({k:v for k,v in checkpoint.items() if k!='members'}))
