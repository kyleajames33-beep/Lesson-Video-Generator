"""Write provenance and a reviewable delivery inventory. Never edit plate pixels."""
import json,re,hashlib
from collections import defaultdict
from pathlib import Path
from PIL import Image
W=Path('work/brief264');A=Path('docs/production/claude-pm/assets')
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def save(p,v):
 p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,indent=2,ensure_ascii=True)+'\n',encoding='utf-8')
inventory=json.loads((W/'plate-inventory.json').read_text(encoding='utf-8'))['rows']
records=[json.loads(x) for x in (W/'generation-records.jsonl').read_text(encoding='utf-8-sig').splitlines() if x.strip()]
rows=[];groups=defaultdict(list)
for i,r in enumerate(inventory):
 accepted=i!=27;p=Path(r['destination']) if accepted else W/'candidates'/r['name']
 assert p.is_file(),p
 im=Image.open(p);assert im.mode=='RGBA';alpha=im.getchannel('A');assert alpha.getextrema()[0]==0 and alpha.getextrema()[1]>=250
 info=json.loads((W/'qa'/(p.stem+'-alpha.json')).read_text());assert info['sha256']==sha(p)
 row={'name':r['name'],'path':p.as_posix(),'requestedDestination':r['destination'],'status':'accepted' if accepted else 'rejected',
  'sha256':sha(p),'size':list(im.size),'alphaExtrema':list(alpha.getextrema()),'opaqueBoundingBox':info['opaqueBoundingBox'],
  'sourceBrief':r['source'],'sourceBriefSha256':sha(r['source']),'tool':'byte-for-byte copy' if r['kind']=='copy' else 'image_gen.imagegen',
  'alphaCheck':f'work/brief264/qa/{p.stem}-alpha.json','visualReview':'Inspected individually on paper and black backgrounds; no people, human hands, human faces or branding',
  'pixelsModifiedAfterGeneration':False,'nativeAspectPreserved':True}
 if r['kind']=='copy':
  original=Path('public/assets/chemistry')/r['name'];assert original.read_bytes()==p.read_bytes();row['copiedFrom']=original.as_posix()
 else:
  candidates=[]
  for rec in records:
   if rec['name']!=r['name']:continue
   src=Path(rec.get('generatedSource',rec.get('source','')))
   if src.is_file() and src.suffix.lower()=='.png' and sha(src)==row['sha256']:candidates.append((rec,src))
  assert candidates,('No matching generator original',r['name'])
  rec,src=candidates[-1];row['generatorOriginal']=str(src);row['prompt']=rec['prompt'];row['generationRecords']='work/brief264/generation-records.jsonl'
 if not accepted:
  row['visualReview']='Rejected: overlay canvas 1001x1571 differs from bone canvas 1001x1572; exact attachment registration is not established. Do not stretch or integrate.'
  assert not Path(r['destination']).exists(),'Rejected overlay must not appear as delivered'
 if i==4:row['notes']='Original fridge accepted. Valid alpha maximum is 254. Earlier opaque diagnosis was incorrect; alternate cutout is unused.'
 if i==6:row['notes']='Bill corrected using the 2024 Genyornis skull reconstruction as described by its researchers. Reconstruction, not a life photograph.'
 if i==7:row['notes']='Closed mouth replaces inaccurate cat-like bared canines. Body, tail and enlarged thumb claw retained.'
 if i==8:row['notes']='Animal fossil forelimb, including digits; no human hand.'
 if i in [25,26,28,34,75,76,77,78,79,80,81]:row['anatomyUse']='Educational anatomical plate, not a person portrait. Final label placement and narrated animation still need lesson review.'
 if i==35:row['registration']='1024x1536, same as thigh base; no transform; combined image inspected, tear inside lateral biceps femoris belly.'
 if 25<=i<=91 and i!=27:row['scope']='HMS Module 1 or Module 2 v01-v08 only'
 if i in [2,3,4]:row['scaleReview']={'paper':'#f6f1e7','sizes':[800,600,300],'axis':'height' if i==4 else 'width','sheet':f'work/brief264/qa/{p.stem}-sizes.jpg','result':'Object and blank display/door features remain legible'}
 rows.append(row);groups[r['source']].append(row)
for source,assets in groups.items():
 text='\n'.join(r['brief'] for r in inventory if r['source']==source)
 filenames=re.findall(r'docs/production/claude-pm/assets/([a-zA-Z0-9_-]+provenance[.]json)',text)
 if filenames:name=filenames[-1]
 elif assets[0]['name']=='y12p-circular-track-top-v1.png':name='phys-y12-m5-v11-provenance-brief264.json'
 else:name=Path(source).stem+'-provenance.json'
 target=A/name;assert not target.exists(),f'Preserve existing provenance: {target}'
 save(target,{'brief':264,'date':'2026-11-24','sourceBrief':source,'assets':assets,'qualification':'Plate inspection only. No design edits, speech, renders or lesson approval.'})
 for row in assets:row['provenance']=target.as_posix()
rejected=[
 {'path':'work/brief264/candidates/track-first.png','reason':'Tight margins and exterior specks; replaced by edited track'},
 {'path':'work/brief264/candidates/y11-genyornis-first.png','reason':'Bill tip needed correction against 2024 reconstruction'},
 {'path':'work/brief264/candidates/y11-thylacoleo-first.png','reason':'Cat-like bared canines; replaced with closed mouth'},
 {'path':'work/brief264/candidates/hms-thigh-hamstrings-first.png','reason':'Included tear in healthy base and extended into hip; replaced'},
 {'path':'work/brief264/candidates/hms-rehab-band-sheet-first.png','reason':'People drawn on paper; replaced with blank cells'},
 {'path':'work/brief264/candidates/hms-phone-call-screen-first.png','reason':'Person-shaped avatar; replaced with blank circle'},
 {'path':'work/brief264/candidates/hms-group-chat-phone-first.png','reason':'Landscape in tile required to be blank; replaced'},
 {'path':'work/brief264/candidates/hms-running-shoe-calendar-first.png','reason':'Six day columns; corrected to seven'},
 {'path':'work/brief264/candidates/hms-arm-muscles-overlay-v1.png','reason':'Exact canvas and attachment registration failed; no accepted replacement'}
]
for r in rejected:assert Path(r['path']).is_file();r['sha256']=sha(r['path'])
manifest={'brief':264,'date':'2026-11-24','requested':93,'accepted':92,'generatedAccepted':90,'copiedUnchanged':2,'rejectedWithoutReplacement':1,
 'assets':rows,'supersededOrRejectedCandidates':rejected,'unusedVariantNote':'Fridge alternate is unused, not evidence that the accepted original was opaque.',
 'excludedLaterHmsPlates':['hms-beep-test-cones-v1.png','hms-pool-start-block-v1.png','hms-heart-rate-watch-v1.png','hms-shot-and-spikes-v1.png','hms-fuel-foods-v1.png','hms-400m-start-stagger-v1.png'],
 'factChecks':'docs/production/claude-pm/checks/brief264-fact-checks-2026-11-24.md','speechRequests':0,'renders':0,'designEdits':0,'commits':0}
save(A/'brief264-manifest.json',manifest)
save('public/assets/physics/phys-y11-large-stone-v1.json',{'image':'phys-y11-large-stone-v1.png','sha256':rows[1]['sha256'],'size':rows[1]['size'],'coordinateSystem':'native image pixels, x right, y down',
 'contactPoint':[755,820],'estimatedCentreOfMass':[755,600],'opaqueBoundingBox':rows[1]['opaqueBoundingBox'],'qualification':'Visual animation anchors estimated from the painted boulder. Centre of mass is not a measured physical property.'})
save('public/assets/physics/y12p-circular-track-top-v1.json',{'image':'y12p-circular-track-top-v1.png','sha256':rows[0]['sha256'],'size':rows[0]['size'],'coordinateSystem':'native image pixels, x right, y down',
 'centre':[622.5,627],'outerRadiusApprox':432,'innerRadiusApprox':255,'roadCentreRadiusApprox':343.5,'opaqueBoundingBox':rows[0]['opaqueBoundingBox'],
 'qualification':'Approximate anchors from painted curb at centre row. Keep native proportions; paint edge is not a perfect mathematical circle.'})
save('public/assets/hms/hms-hamstrings-registration-v1.json',{'base':rows[34]['requestedDestination'],'baseSha256':rows[34]['sha256'],'overlay':rows[35]['requestedDestination'],'overlaySha256':rows[35]['sha256'],
 'size':[1024,1536],'transform':{'scale':1,'translate':[0,0]},'tearCentreApprox':[646,784],'inspection':'work/brief264/qa/hamstring-registration.jpg','finding':'Tear lies in lateral biceps femoris belly. Base and overlay share native canvas.'})
save(W/'hand-in.json',{'brief':264,'status':'Complete with one rejected plate and reported fact findings','manifest':(A/'brief264-manifest.json').as_posix(),'manifestSha256':sha(A/'brief264-manifest.json'),
 'accepted':92,'rejected':1,'factChecks':manifest['factChecks'],'factChecksSha256':sha(manifest['factChecks']),'speechRequests':0,'designEdits':0,'renders':0,'commits':0})
print(json.dumps({'accepted':92,'rejected':1,'provenanceFiles':len(groups),'manifest':str(A/'brief264-manifest.json')}))
