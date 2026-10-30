"""Read-only input inventory for briefs 116 and 119."""
import hashlib, json, re
from pathlib import Path

ROOT = next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())
PM = ROOT / 'docs/production/claude-pm'
names = ['chem-m8-p02','chem-m8-g01','chem-m8-c03a','chem-m8-c03b','bio-m8-b03','bio-m8-b04','bio-m8-b05','bio-m8-g03','bio-m6-b20']
rows = []
for name in names:
    path = PM / 'lessons' / (name + '.md')
    text = path.read_text(encoding='utf-8')
    script = text.split('## Script and shots',1)[-1].split('\n## ',1)[0]
    speech = [re.sub(r'\*\*','',line[2:]).strip() for line in script.splitlines() if line.startswith('> ')]
    plates = sorted(set(re.findall(r'([\w-]+\.png)',text)))
    missing = [p for p in plates if not list((ROOT/'public/assets').glob('*/'+p))]
    links = sorted(set(re.findall(r'https://hscscience\.com\.au/[^\s)<>"`]+',text)))
    row = dict(design=name,path=path.relative_to(ROOT).as_posix(),sha256=hashlib.file_digest(path.open('rb'),'sha256').hexdigest(),status=next(l for l in text.splitlines() if l.startswith('Status:')),narrationCharacters=sum(map(len,speech)),sceneCharacters=list(map(len,speech)),sceneCount=len(speech),emDashCount=text.count(chr(0x2014)),plateNames=plates,missingPlates=missing,siteLinks=links)
    rows.append(row)
output=PM/'checks/brief116-119-input-audit.json'
output.write_text(json.dumps(dict(date='2026-10-30',rows=rows),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for r in rows:
    print(r['design'],r['narrationCharacters'],r['sceneCount'],'dashes',r['emDashCount'],'missing',','.join(r['missingPlates']))
