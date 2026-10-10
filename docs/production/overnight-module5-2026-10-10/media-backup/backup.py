"""Bounded overnight media archive and original-restorer evidence. Never replace an archive."""
import argparse, ast, hashlib, json, re, shutil, subprocess, zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[4]
BASE=Path(__file__).resolve().parent
ARCHIVE=ROOT/'out/archives/module5-overnight-review-media-2026-10-10.zip'
STATE=ROOT/'docs/production/handoff-state-2026-10-09.zip'
PAGE_ROOTS=[f'out/prototypes/{name}' for name in ['overnight-plants-voiced-2026-10-10','overnight-plants-voiced-2026-10-10-v2','overnight-chemistry-pressure-2026-10-10','overnight-chemistry-pressure-2026-10-10-v2','overnight-biology-fungi-2026-10-10','overnight-biology-fungi-2026-10-10-v2']]
def sha(p):
 h=hashlib.sha256()
 with Path(p).open('rb')as f:
  for b in iter(lambda:f.read(1024*1024),b''):h.update(b)
 return h.hexdigest()
def write(name,data):
 (BASE/name).write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8')
def selected():
 files=set()
 takes=ROOT/'public/audio/Biology-Y12-M5-plants-2026-10-10-take01'
 files.update(p for p in takes.rglob('*')if p.is_file())
 lesson=json.loads((ROOT/'docs/production/overnight-module5-2026-10-10/plants-voiced/measured-v2/lesson.json').read_text())
 assembly=[]
 for s in lesson['scenes']:
  rel=s.get('voiceover',{}).get('audioFile')
  if not rel:continue
  wav=ROOT/rel
  for p in [wav,wav.with_suffix('.alignment.json'),wav.with_suffix('.assembly.json')]:
   if not p.is_file():raise RuntimeError('Missing referenced assembly member: '+str(p.relative_to(ROOT)))
   files.add(p);assembly.append(p.relative_to(ROOT).as_posix())
 roots=PAGE_ROOTS+json.loads((BASE/'additional-roots.json').read_text())if(BASE/'additional-roots.json').exists()else PAGE_ROOTS
 for rel in roots:
  base=ROOT/rel
  if not base.is_dir():raise RuntimeError('Missing page/evidence root: '+rel)
  for p in base.rglob('*'):
   parts=p.relative_to(ROOT).parts
   if p.is_file()and not any(x in {'bundle','node_modules','.git'}or x.endswith('-bundle')for x in parts):files.add(p)
 for p in files:
  rel=p.relative_to(ROOT).as_posix()
  if not rel.startswith(('out/','public/audio/'))or p.name.startswith('.env')or re.search(r'credential|oauth|cookie|token-store',p.name,re.I):raise RuntimeError('Forbidden member: '+rel)
 return sorted(files,key=lambda p:p.relative_to(ROOT).as_posix()),roots,assembly
def inventory():
 files,roots,assembly=selected();report={'scope':'Overnight original/current plant, pressure, fungi pages and saved evidence plus exact plant take/assembly media. No release/listening approval.', 'roots':roots,'fileCount':len(files),'bytes':sum(p.stat().st_size for p in files),'assemblyFiles':assembly,'files':[{'path':p.relative_to(ROOT).as_posix(),'bytes':p.stat().st_size}for p in files]};write('selection.json',report);print(json.dumps({k:report[k]for k in ['fileCount','bytes','roots']}))
def freeze():
 if ARCHIVE.exists()or ARCHIVE.with_suffix('.zip.sha256').exists():raise RuntimeError('Exclusive archive/checksum already exists, preserved.')
 files,roots,assembly=selected()
 # Reuse the original credential helper privately without running its CLI.
 module=ast.parse((ROOT/'scripts/transfer-workspace.py').read_text())
 helper=next(n for n in module.body if isinstance(n,ast.FunctionDef)and n.name=='secret_values')
 namespace={'ROOT':ROOT,'re':re};exec(compile(ast.Module(body=[helper],type_ignores=[]),'existing-secret-helper','exec'),namespace);secrets=namespace['secret_values']()
 entries=[]
 for p in files:
  data=p.read_bytes()
  if any(secret in data for secret in secrets):raise RuntimeError('Secret bytes detected in selected member; no secret printed.')
  entries.append({'path':p.relative_to(ROOT).as_posix(),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
 statehash=sha(STATE)
 record=json.loads((ROOT/'docs/production/computer-transfer-2026-10-09.json').read_text())
 if statehash!=record['stateArchiveSha256']:raise RuntimeError('Handoff state identity drift')
 ARCHIVE.parent.mkdir(parents=True,exist_ok=True)
 with zipfile.ZipFile(ARCHIVE,'x',zipfile.ZIP_DEFLATED,compresslevel=1)as z:
  for p,item in zip(files,entries):
   z.write(p,item['path'])
   if sha(p)!=item['sha256']:raise RuntimeError('Input drift during freeze: '+item['path'])
  z.writestr('transfer-manifest.json',json.dumps({'schemaVersion':1,'stateArchiveSha256':statehash,'files':entries},indent=2))
 with zipfile.ZipFile(ARCHIVE)as z:
  if z.testzip()is not None:raise RuntimeError('CRC failure')
  for item in entries:
   if hashlib.sha256(z.read(item['path'])).hexdigest()!=item['sha256']:raise RuntimeError('ZIP member SHA mismatch')
 digest=sha(ARCHIVE);ARCHIVE.with_suffix('.zip.sha256').write_text(digest+'  '+ARCHIVE.name+'\n',encoding='utf-8')
 report={'schemaVersion':1,'archive':ARCHIVE.relative_to(ROOT).as_posix(),'bytes':ARCHIVE.stat().st_size,'sha256':digest,'files':len(entries),'stateArchiveSha256':statehash,'allMemberCRCsPass':True,'allMemberSHAsPass':True,'privateExistingSecretHelperPass':True,'selectionRoots':roots,'assemblyFiles':assembly,'members':entries,'scope':'Exact overnight review media only. Source/docs delivered by Git. Listening, continuous review and production/release gates remain pending.'};write('archive-record.json',report);print(json.dumps({k:report[k]for k in ['archive','bytes','sha256','files']}))
def restore_test():
 report=json.loads((BASE/'archive-record.json').read_text());test=BASE/'restore-tests'
 if test.exists():raise RuntimeError('Isolated restore directory already exists, preserved.')
 results=[]
 for name in ['normal','conflict']:
  root=test/name;(root/'scripts').mkdir(parents=True);(root/'docs/production').mkdir(parents=True)
  shutil.copy2(ROOT/'scripts/transfer-workspace.py',root/'scripts/transfer-workspace.py');shutil.copy2(STATE,root/'docs/production/handoff-state-2026-10-09.zip')
  if sha(root/'scripts/transfer-workspace.py')!=sha(ROOT/'scripts/transfer-workspace.py'):raise RuntimeError('Restorer identity drift')
  command=['python',str(root/'scripts/transfer-workspace.py'),'restore-media',str(ARCHIVE)]
  if name=='normal':
   for step in ['first','repeat']:
    result=subprocess.run(command,cwd=root,capture_output=True,text=True)
    if result.returncode:raise RuntimeError('Original isolated restore failed: '+result.stderr)
    for item in report['members']:
     if sha(root/item['path'])!=item['sha256']:raise RuntimeError('Isolated restored hash mismatch')
    results.append({'case':step,'exitCode':result.returncode,'output':result.stdout.strip(),'allRestoredMemberSHAsPass':True})
  else:
   member=report['members'][0]['path'];target=root/member;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(b'Intentional isolated conflicting file. Preserve this sentinel.');before=sha(target)
   result=subprocess.run(command,cwd=root,capture_output=True,text=True)
   if result.returncode==0 or sha(target)!=before:raise RuntimeError('Conflict preservation failed')
   other=[p for p in root.rglob('*')if p.is_file()and p not in [target,root/'scripts/transfer-workspace.py',root/'docs/production/handoff-state-2026-10-09.zip']]
   if other:raise RuntimeError('Conflict caused partial restoration')
   results.append({'case':'conflict','exitCode':result.returncode,'preservedConflict':True,'otherMembersWritten':0,'rejection':'Existing different file, preserved: '+member})
 write('restore-report.json',{'schemaVersion':1,'originalRestorerPath':'scripts/transfer-workspace.py','restorerSha256':sha(ROOT/'scripts/transfer-workspace.py'),'archiveSha256':report['sha256'],'stateArchiveSha256':report['stateArchiveSha256'],'isolatedRoots':test.relative_to(ROOT).as_posix(),'results':results});print(json.dumps({'restoreCases':len(results),'firstRepeatConflictPass':True}))
parser=argparse.ArgumentParser();parser.add_argument('command',choices=['inventory','freeze','restore-test']);args=parser.parse_args();{'inventory':inventory,'freeze':freeze,'restore-test':restore_test}[args.command]()
