from pathlib import Path
from PIL import Image
import re,json,hashlib,zipfile
from bs4 import BeautifulSoup
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm';A=P/'assets'
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
findings=[];designs=[];reviews=[];plates=[];archives=[]
site=[];cache={};site_text=(P/'site-corrections-m8.md').read_text(encoding='utf-8')
site_text=site_text[site_text.index('## Brief 121 confirmed additions'):];brief=None
norm=lambda s:re.sub(r'\s+',' ',s).strip()
for line in site_text.splitlines():
    match=re.match(r'## Brief (\d+) confirmed additions',line)
    if match:brief=int(match[1]);continue
    if not line.startswith('| ') or line.startswith(('| Lesson','| ---')):continue
    cols=[x.strip() for x in re.split(r'(?<!\\)\|',line)[1:-1]]
    m=re.search(r'`([^`]+\.sa\.html)`',cols[0]);assert m
    raw=m[1].replace('\\','/');path=Path(raw) if raw.startswith('C:') else Path('C:/Users/kygs/hscscience/subjects')/raw
    if path not in cache:
        soup=BeautifulSoup(path.read_text(encoding='utf-8'),'html.parser')
        for node in soup(['script','style']):node.decompose()
        cache[path]=norm(soup.get_text(' ',strip=True))
    quote=cols[1].strip('"');gap=quote.startswith('[Site gap:');ok=('cataract' not in cache[path].lower()) if gap else norm(quote) in cache[path]
    site.append({'brief':brief,'path':path.as_posix(),'siteSha256':sha(path),'quote':quote,'gap':gap,'verified':ok})
    if not ok:findings.append('Site quotation: '+quote)
def check_design(name,expected):
    p=P/f'lessons/{name}.md';actual=sha(p);ok=actual==expected
    designs.append({'design':name,'sha256':actual,'unchanged':ok})
    if not ok:findings.append('Design changed: '+name)
for b in [117,120]:
    data=json.loads((A/f'brief{b}-source-audit.json').read_text(encoding='utf-8-sig'))
    for name,row in data.items():
        if row.get('sha256'):check_design(name,row['sha256'])
        else:designs.append({'design':name,'sha256':sha(P/f'lessons/{name}.md'),'unchanged':None,'limit':'Reviewer did not save an initial hash. Current hash captured; reviewer reports no design edits.'})
data=json.loads((A/'brief118-source-audit.json').read_text(encoding='utf-8-sig'))
for row in data['designs'].values():check_design(Path(row['path'].replace('\\','/')).stem,row['sha256'])
for p in [P/'checks/brief116-119-input-audit.json',P/'checks/brief121-input-audit.json']:
    for row in json.loads(p.read_text(encoding='utf-8-sig'))['rows']:check_design(row['design'],row['sha256'])
keys={117:['m8p03','m8c04','m8p04','m8g02','m8p02b','m8b06','m8b07','m8b08'],118:['m8c05','m8c06','m8c08','m8p05c','m8b09','m8b10','m8b11','m8g01b'],120:['m8c09','m8c10','m8c11a','m8c11b','m8b12','m8b13','m8b14','m8b15'],121:['m8c12','m8g03c','m8c13','m8b16','m8b17','m8g02b']}
for b,group in keys.items():
    for key in group:
        for kind in ['learning-review','claude-science-check']:
            p=P/f'checks/{key}-{kind}.md'
            if not p.exists():findings.append('Missing review: '+str(p));continue
            text=p.read_text(encoding='utf-8-sig');empty=bool(re.search(r'## Resolution\s*\Z',text));dash=chr(8212) in text
            reviews.append({'brief':b,'key':key,'kind':kind,'path':p.relative_to(R).as_posix(),'sha256':sha(p),'emptyResolution':empty,'noEmDash':not dash})
            if not empty or dash:findings.append('Review format: '+str(p))
for b in [116,117,118,120,121]:
    d=json.loads((A/f'brief{b}-provenance.json').read_text(encoding='utf-8-sig'));rs=d.get('records',d.get('plates',d.get('selectedPlates',[])))
    for rec in rs:
        raw=rec.get('path') or rec.get('output_path') or rec.get('outputPath') or rec.get('finalPath')
        if not raw:findings.append('Unrecognised plate entry: '+str(b));continue
        p=R/Path(raw.replace('\\','/'));expected=rec.get('sha256') or rec.get('finalSha256');actual=sha(p)
        with Image.open(p) as im:
            ok=im.mode=='RGBA' and max(im.size)>=2000 and im.getchannel('A').getextrema()==(0,255)
            size=im.size
            bbox=im.getchannel('A').getbbox()
        plates.append({'brief':b,'path':p.relative_to(R).as_posix(),'sha256':actual,'matchesProvenance':not expected or actual==expected,'rgbaAtLeast2000LongEdgeTrueAlpha':ok,'size':size,'alphaBbox':bbox})
        if not ok or (expected and actual!=expected):findings.append('Plate check: '+str(p))
for b in [116,117,118,119,120,121]:
    c=json.loads((A/f'brief{b}-media-checkpoint.json').read_text(encoding='utf-8-sig'));raw=c.get('path') or c.get('archive');expected=c.get('sha256') or c.get('archiveSha256');p=R/raw;actual=sha(p)
    with zipfile.ZipFile(p) as z:crc=z.testzip() is None;count=len(z.infolist())
    archives.append({'brief':b,'path':raw,'sha256':actual,'matchesCheckpoint':actual==expected,'crcPass':crc,'members':count,'bytes':p.stat().st_size})
    if not crc or actual!=expected:findings.append('Archive check: '+str(p))
out={'date':'2026-10-30','designs':designs,'reviews':reviews,'plates':plates,'archives':archives,'site':site,'findings':findings,'scope':'File integrity, format and still-image technical checks. Does not certify all facts, human listening, motion, owner artwork acceptance or release.'}
(P/'checks/brief116-121-final-validation.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({'designs':len(designs),'reviews':len(reviews),'plates':len(plates),'archives':len(archives),'siteRows':len(site),'findings':findings}))
