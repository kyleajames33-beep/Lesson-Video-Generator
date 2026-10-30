"""Verify proposed table rows against the read-only site before integration."""
from pathlib import Path
from bs4 import BeautifulSoup
import re,json,hashlib
R=Path(__file__).resolve().parents[4];P=R/'docs/production/claude-pm'
def norm(s):return re.sub(r'\s+',' ',s).strip()
log=P/'site-corrections-m8.md';old=log.read_text(encoding='utf-8');cache={};audit=[]
for brief in [117,118,120]:
    file=P/f'assets/brief{brief}-site-corrections-proposed.md'
    source=file.read_text(encoding='utf-8');added=[]
    for line in source.splitlines():
        if not line.startswith('|'):continue
        cells=[x.strip() for x in re.split(r'(?<!\\)\|',line)[1:-1]]
        if len(cells) not in [4,5] or cells[0].startswith(('---','Lesson')):continue
        match=re.search(r'`([^`]+\.sa\.html)`',cells[0])
        if not match:continue
        raw=match[1].replace('\\','/')
        path=Path(raw) if raw.startswith('C:') else Path('C:/Users/kygs/hscscience/subjects')/raw
        if path not in cache:
            soup=BeautifulSoup(path.read_text(encoding='utf-8'),'html.parser')
            for node in soup(['script','style']):node.decompose()
            cache[path]=norm(soup.get_text(' ',strip=True))
        quote=cells[1].strip('"')
        if quote.startswith('[Site gap'):
            valid='cataract' not in cache[path].lower()
        else:valid=norm(quote) in cache[path]
        record=dict(brief=brief,path=path.as_posix(),siteSha256=hashlib.sha256(path.read_bytes()).hexdigest(),quote=quote,exactQuoteFound=valid,alreadyLogged=norm(quote) in norm(old))
        audit.append(record)
        if not valid:continue
        if record['alreadyLogged']:continue
        if len(cells)==4:cells=[cells[0],cells[1],cells[2],'See correction in the preceding column.',cells[3]]
        new='| '+' | '.join(cells)+' |'
        if chr(8212) in new:
            record['held']='Literal em dash in quotation. Preserve source evidence; owner can resolve copy style before table integration.';continue
        added.append(new);old+='\n'+new
    if added:
        block=f'\n\n## Brief {brief} confirmed additions (30 October 2026)\n\n| Lesson and page | Exact page text | Problem | Correct statement | Source |\n| --- | --- | --- | --- | --- |\n'+'\n'.join(added)+'\n'
        # Re-read so earlier verified additions are preserved once, without
        # duplicating the temporary strings used for duplicate detection.
        current=log.read_text(encoding='utf-8');log.write_text(current+block,encoding='utf-8')
        old=log.read_text(encoding='utf-8')
(P/'checks/brief117-121-site-integration.json').write_text(json.dumps(dict(date='2026-10-30',records=audit),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(dict(rows=len(audit),exact=sum(r['exactQuoteFound'] for r in audit),alreadyLogged=sum(r['alreadyLogged'] for r in audit),held=[r for r in audit if not r['exactQuoteFound'] or r.get('held')]),ensure_ascii=True))
