# Verify review files and local media checkpoints for briefs 109 to 111.
from pathlib import Path
from PIL import Image
import json,re,hashlib,zipfile
R=Path(__file__).resolve().parents[1];P=R/'docs/production/claude-pm'
groups={109:['m7c15','m7g04','m7p05b','skills06'],110:['m7g03','m7p04','m7p05c','m7p06c','skills08'],111:['m8c01','m8c02','m8b01','m8b02']}
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
report={'date':'2026-10-28','reviews':[],'media':[],'limitations':['Findings remain unresolved for Claude.','Technical artwork QA does not grant owner acceptance.','No narration or video render performed for review briefs.','Archives are local; remote transfer is not claimed.']}
sources=['chem-m7-c15','chem-m7-g04','bio-m7-p05','skills-s06','chem-m7-g03','chem-m7-p04','chem-m7-p05','chem-m7-p06','skills-s08','chem-m8-c01','chem-m8-c02','bio-m8-b01','bio-m8-b02']
report['designSources']=[{'path':f'docs/production/claude-pm/lessons/{key}.md','sha256':sha(P/f'lessons/{key}.md')} for key in sources]
for brief,ids in groups.items():
 for key in ids:
  for kind in ['learning-review','claude-science-check']:
   p=P/f'checks/{key}-{kind}.md';s=p.read_text(encoding='utf-8')
   assert '\u2014' not in s,p
   assert '## Resolution' in s and not s.split('## Resolution')[-1].strip(),p
   assert len(s)>1500,p
   assert re.search(r'\| 1 \||^1\. |No material factual or numerical error',s,re.M),p
   report['reviews'].append({'brief':brief,'path':p.relative_to(R).as_posix(),'sha256':sha(p),'emptyResolution':True,'noEmDash':True})
 c=json.loads((P/f'assets/brief{brief}-media-checkpoint.json').read_text(encoding='utf-8'));archive=R/c['archive']
 assert sha(archive)==c['archiveSha256'],archive
 members=[]
 with zipfile.ZipFile(archive) as z:
  assert z.testzip() is None,archive
  for m in c.get('members',c.get('files',[])):
   path=m['path'];actual=hashlib.sha256(z.read(path)).hexdigest()
   assert actual==m['sha256']==sha(R/path),path
   members.append(path)
   if path.startswith('public/assets/') and path.endswith('.png'):
    im=Image.open(R/path);assert im.mode=='RGBA',path
    a=im.getchannel('A');assert a.getextrema()==(0,255),path
    box=a.getbbox();w,h=im.size
    report['media'].append({'brief':brief,'path':path,'sha256':actual,'size':im.size,'alphaBbox':box,'minimumMarginFraction':round(min(box[0]/w,box[1]/h,(w-box[2])/w,(h-box[3])/h),4)})
  extra=set(z.namelist())-set(members)
  for name in extra:
   assert name==f'brief{brief}-archive-manifest.json',name
   inner=json.loads(z.read(name))
   assert inner['members']==c.get('members',c.get('files',[])),name
  entries=len(z.namelist())
 report.setdefault('archives',[]).append({'brief':brief,'path':c['archive'],'sha256':c['archiveSha256'],'contentMembersVerified':len(members),'zipEntries':entries,'internalManifestVerified':bool(extra),'crcPass':True})
report['status']='pass'
(P/'checks/brief109-111-final-validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f"{len(report['reviews'])} reviews, {len(report['media'])} plates and 3 archives verified.")
