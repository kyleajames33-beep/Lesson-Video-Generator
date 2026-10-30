from pathlib import Path
import hashlib,json,zipfile
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm';A=P/'assets'
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
validation=json.loads((P/'checks/brief116-121-final-validation.json').read_text(encoding='utf-8'));assert not validation['findings']
members=[P/'status.md',P/'site-corrections-m8.md',R/'docs/production/parallel-production-board-2026-10-10.json',P/'checks/brief116-121-final-validation.json',P/'checks/codex-check-116.md',P/'checks/codex-check-119.md',P/'youtube/brief28ab-preflight.json',P/'youtube/wave5-metadata-draft.json']
members += [R/r['path'] for r in validation['reviews']]
for b in [116,117,118,119,120,121]:
    members += list(A.glob(f'brief{b}-*.md'))+[A/f'brief{b}-provenance.json',A/f'brief{b}-media-checkpoint.json']
members += list((A/'brief116-121-tools').glob('*'))+list(A.glob('brief116-121-*.py'))+[A/'brief116-121-imagegen-call-log.json']
members += list(A.glob('m8*-provenance.json'))
members += [A/f'brief120-{name}.py' for name in ['write-reviews','prepare-plates','extract-ir','finalize']]
members += list(A.glob('brief117-*.py'))+list(A.glob('brief118-*.py'))
members += [A/'brief117-mucus-root-check.json']
members += [P/'checks/brief117-118-repair-archive-check.json']
members += [P/'youtube/brief28ab-access-block.json']
members += [A/'brief120-ir-followup.json']+list((A/'brief120-ir-followup').glob('*'))
members=sorted(set(p for p in members if p.is_file()))
archive=R/'out/archives/brief116-121-review-handoff-2026-10-30.zip'
with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=3) as z:
    for p in members:z.write(p,p.relative_to(R).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
    for p in members:
        with z.open(p.relative_to(R).as_posix()) as f:assert hashlib.file_digest(f,'sha256').hexdigest()==sha(p)
checkpoint={'date':'2026-10-30','path':archive.relative_to(R).as_posix(),'sha256':sha(archive),'bytes':archive.stat().st_size,'members':len(members),'crcPass':True,'allMemberHashesVerified':True,'remoteBackup':'not uploaded','scope':'Review hand-in, status snapshot, source manifests and task utilities. Six separate media archives remain at their recorded paths.'}
(A/'brief116-121-hand-in-checkpoint.json').write_text(json.dumps(checkpoint,indent=2)+'\n',encoding='utf-8');print(json.dumps(checkpoint))
