"""Upload an exclusive verified archive, then append its exact continuation record."""
import hashlib,json,subprocess
from datetime import datetime,timezone
from pathlib import Path
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[3]
REPO='kyleajames33-beep/Lesson-Video-Generator';TAG='workspace-media-2026-10-09'
record=json.loads((BASE/'archive-record.json').read_text());restore=json.loads((BASE/'restore-report.json').read_text())
if restore['archiveSha256']!=record['sha256']or len(restore['results'])!=3:raise RuntimeError('Missing exact original-restorer evidence')
archive=ROOT/record['archive'];checksum=archive.with_suffix('.zip.sha256')
def sha(p):
 h=hashlib.sha256()
 with p.open('rb')as f:
  for b in iter(lambda:f.read(1024*1024),b''):h.update(b)
 return h.hexdigest()
if sha(archive)!=record['sha256']or checksum.read_text().strip()!=record['sha256']+'  '+archive.name:raise RuntimeError('Local archive/checksum drift')
api=['gh','api',f'repos/{REPO}/releases/tags/{TAG}']
before=json.loads(subprocess.check_output(api,text=True));names={archive.name,checksum.name}
if any(a['name']in names for a in before['assets']):raise RuntimeError('Existing release asset preserved. No upload attempted.')
subprocess.run(['gh','release','upload',TAG,str(archive),str(checksum),'--repo',REPO],check=True)
after=json.loads(subprocess.check_output(api,text=True));assets=[]
for p in [archive,checksum]:
 found=[a for a in after['assets']if a['name']==p.name]
 if len(found)!=1:raise RuntimeError('Missing or duplicate uploaded asset')
 a=found[0]
 if a['state']!='uploaded'or a['size']!=p.stat().st_size or a.get('digest')!='sha256:'+sha(p):raise RuntimeError('GitHub uploaded state/size/digest mismatch')
 assets.append({k:a.get(k)for k in ['id','name','size','state','digest','browser_download_url','created_at','updated_at']})
download=BASE/'github-checksum-verification';download.mkdir(exist_ok=False)
subprocess.run(['gh','release','download',TAG,'--repo',REPO,'--dir',str(download),'--pattern',checksum.name],check=True)
downloaded=download/checksum.name
if downloaded.read_bytes()!=checksum.read_bytes():raise RuntimeError('Downloaded GitHub checksum differs')
verified=datetime.now(timezone.utc).isoformat();report={'schemaVersion':1,'repository':REPO,'tag':TAG,'releaseId':after['id'],'url':after['html_url'],'archiveSha256':record['sha256'],'bytes':record['bytes'],'verifiedAt':verified,'assets':assets,'uploadedStateSizeAndDigestsMatch':True,'downloadedChecksumMatches':True,'uploadClobberUsed':False,'restoreEvidencePath':(BASE/'restore-report.json').relative_to(ROOT).as_posix(),'limitation':'Verified additive review-media backup only. No human listening, lesson export, release approval or video publication.'};(BASE/'github-verification.json').write_text(json.dumps(report,indent=2)+'\n')
transfer=ROOT/'docs/production/computer-transfer-2026-10-09.json';data=json.loads(transfer.read_text())
if any(c['name']==archive.name for c in data['continuations']):raise RuntimeError('Existing continuation entry preserved')
if data['stateArchiveSha256']!=record['stateArchiveSha256']:raise RuntimeError('Original state hash drift')
data['continuations'].append({'name':archive.name,'bytes':record['bytes'],'sha256':record['sha256'],'files':record['files'],'status':'published-verified','verifiedAt':verified,'verification':'Every ZIP member CRC and SHA256 pass; GitHub uploaded state/size/digests and downloaded checksum match. Original unmodified restorer passes isolated first, repeat and conflicting-file preservation.','scope':'Additive exact plant takes and assembled audio, original/current overnight plant, pressure and fungi review pages/assets, catalyst review page/assets, saved native/UI evidence and morning desk. No listening, full export or public lesson approval.','evidencePath':(BASE/'github-verification.json').relative_to(ROOT).as_posix(),'restoreReportPath':(BASE/'restore-report.json').relative_to(ROOT).as_posix()})
transfer.write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8');print(json.dumps({'status':'published-verified','archive':archive.name,'bytes':record['bytes'],'sha256':record['sha256'],'releaseId':after['id']}))
