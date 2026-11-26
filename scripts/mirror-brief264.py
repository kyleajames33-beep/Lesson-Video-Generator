"""Additive mounted-Drive delivery; refuse to replace a differing mirror file."""
import json,shutil,hashlib
from pathlib import Path
root=Path('G:/My Drive/HSCScience video masters/work/brief264/delivered')
assert Path('G:/My Drive/HSCScience video masters').is_dir()
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
m=json.loads(Path('docs/production/claude-pm/assets/brief264-manifest.json').read_text())
files=set(Path('work/brief264').rglob('*'));files={p for p in files if p.is_file() and p.name!='mirror-check.json'}
for r in m['assets']:
 files.add(Path(r['provenance']));files.add(Path(r['path']))
files.update(Path(p) for p in ['docs/production/claude-pm/assets/brief264-manifest.json',m['factChecks'],
 'public/assets/physics/phys-y11-large-stone-v1.json','public/assets/physics/y12p-circular-track-top-v1.json','public/assets/hms/hms-hamstrings-registration-v1.json',
 'docs/production/claude-pm/status.md','docs/production/parallel-production-board-2026-10-10.json',
 'work/brief263/hand-in.json','work/brief263/hand-in.before-final-timeout-hardening-2026-11-24.json','work/brief262/timeout-resume-2026-11-24.json','work/brief262/timeout-recovery-verification-2026-11-24.json',
 'scripts/lib/google-timeout-policy.mjs','scripts/google-timeout-policy.test.mjs','scripts/lib/google-batch-voice.mjs','scripts/voice-physics-recording-wave.mjs','scripts/nightly-voice-dispatch.mjs','work/brief240/daily-voice-continuation.mjs',
 'scripts/nightly-voice-plan.test.mjs','scripts/lib/nightly-voice-plan.mjs','scripts/brief263-preparation.test.mjs','scripts/brief260-wave7.test.mjs',
 'scripts/inventory-brief264.py','scripts/qa-brief264-plates.py','scripts/contact-brief264.py','scripts/accept-brief264.py','scripts/scales-brief264.py','scripts/finalize-brief264.py','scripts/handin-brief264.py','scripts/mirror-brief264.py','scripts/fetch-brief264-reference.py','scripts/inspect-brief264-pdfs.py'])
rows=[]
for p in sorted(files):
 assert p.is_file(),p
 target=root/p;target.parent.mkdir(parents=True,exist_ok=True)
 if target.exists():assert sha(target)==sha(p),f'Existing mirror differs: {target}'
 else:shutil.copy2(p,target)
 assert sha(target)==sha(p);rows.append({'path':p.as_posix(),'mirror':target.as_posix(),'sha256':sha(p)})
receipt={'files':len(rows),'allHashesMatch':True,'qualification':'Mounted Drive copies verified. Cloud sync not individually checked. Original brief263 delivery preserved; this folder includes the later timeout hardening and refreshed receipt.','rows':rows}
p=Path('work/brief264/mirror-check.json');p.write_text(json.dumps(receipt,indent=2)+'\n',encoding='utf-8');target=root/p;target.parent.mkdir(parents=True,exist_ok=True);assert not target.exists();shutil.copy2(p,target);assert sha(p)==sha(target)
print(json.dumps({'files':len(rows),'allHashesMatch':True,'mirror':root.as_posix()}))
