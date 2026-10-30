"""Brief 118: read-only source, syllabus and site audit. Small memory footprint."""
import hashlib, html, json, pathlib, re

ROOT = next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())
PM = ROOT / 'docs/production/claude-pm'
OUT = PM / 'assets'
DESIGNS = {'m8c05':'chem-m8-c05','m8c06':'chem-m8-c06','m8c08':'chem-m8-c08','m8p05c':'chem-m8-p05','m8b09':'bio-m8-b09','m8b10':'bio-m8-b10','m8b11':'bio-m8-b11','m8g01b':'bio-m8-g01'}
audit = {'date':'2026-10-30','designs':{},'syllabus':{},'site':{}}
for key, stem in DESIGNS.items():
    p = PM/'lessons'/f'{stem}.md'
    b=p.read_bytes(); t=b.decode('utf-8-sig').replace('\r\n','\n')
    scenes=[]
    for section in re.split(r'(?m)^### ',t)[1:]:
        heading,_,body=section.partition('\n')
        speech=' '.join(re.findall(r'(?m)^> (.*)$',body)).replace('**','')
        if speech: scenes.append({'heading':heading,'characters':len(speech),'speech':speech})
    audit['designs'][key]={'path':str(p.relative_to(ROOT)),'sha256':hashlib.sha256(b).hexdigest(),'emDashCount':t.count(chr(0x2014)),'scenes':scenes,'narrationCharacters':sum(s['characters'] for s in scenes)}
for subject, longname in [('chem','chemistry'),('bio','biology')]:
    p=ROOT/f'out/research/continuity-2026-10-08/{longname}-2017-paragraphs.json'
    d=json.loads(p.read_text(encoding='utf8'))
    paras=d['paragraphs']
    matches=[]
    terms=['monitoring the environment','conduct qualitative investigations to test','incidence, prevalence','analyse patterns of non-infectious','evaluate the method used','benefits of engaging','causes and effects of non-infectious']
    for i,para in enumerate(paras):
        if any(term in para['text'] for term in terms): matches.append(paras[i:i+7])
    audit['syllabus'][subject]={'extractPath':str(p.relative_to(ROOT)),'sourceSha256':d['sourceSha256'],'matches':matches}
for subject,nums in [('chemistry',[6,7,9,11]),('biology',[10,12,13,15])]:
    for n in nums:
        p=pathlib.Path(f'C:/Users/kygs/hscscience/subjects/{subject}/year12/module8/lesson{n:02}.sa.html')
        if not p.exists():
            audit['site'][f'{subject}{n:02}']={'path':str(p),'missing':True}; continue
        b=p.read_bytes(); t=b.decode('utf-8-sig')
        t=re.sub(r'<(script|style)\b.*?</\1>',' ',t,flags=re.S|re.I)
        t=html.unescape(re.sub('<[^>]+>',' ',t)); t=re.sub(r'\s+',' ',t).strip()
        audit['site'][f'{subject}{n:02}']={'path':str(p),'sha256':hashlib.sha256(b).hexdigest(),'text':t}
OUT.mkdir(exist_ok=True)
(OUT/'brief118-source-audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf8')
for key,d in audit['designs'].items(): print(key,d['narrationCharacters'],len(d['scenes']),'em dash',d['emDashCount'])
for subject,d in audit['syllabus'].items():
    print(subject,d['sourceSha256'])
    for group in d['matches']: print([p['text'] for p in group])
