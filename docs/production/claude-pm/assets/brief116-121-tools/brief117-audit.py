"""Brief 117 read-only source audit. Writes only brief117 evidence under assets."""
from pathlib import Path
import re,json,hashlib,urllib.request,zipfile,io,xml.etree.ElementTree as ET
from html.parser import HTMLParser
BASE=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm'
OUT=BASE/'assets'; OUT.mkdir(exist_ok=True)
names=['chem-m8-p03','chem-m8-c04','chem-m8-p04','chem-m8-g02','bio-m8-p02','bio-m8-b06','bio-m8-b07','bio-m8-b08']
audit={}
for name in names:
 p=BASE/'lessons'/f'{name}.md'; t=p.read_text(encoding='utf-8'); scenes=[]
 for part in re.split(r'(?m)^### ',t)[1:]:
  title=part.splitlines()[0]; lines=[x[2:].replace('**','') for x in part.splitlines() if x.startswith('> ')]
  if lines: scenes.append({'title':title,'characters':len(' '.join(lines)),'narration':' '.join(lines)})
 audit[name]={'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'em_dashes':t.count(chr(8212)),'total_characters':sum(x['characters'] for x in scenes),'scenes':scenes}
(OUT/'brief117-source-audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2),encoding='utf-8')
class Text(HTMLParser):
 def __init__(self):super().__init__();self.parts=[];self.skip=0
 def handle_starttag(self,tag,attrs):
  if tag in ('script','style'): self.skip+=1
  if tag in ('p','li','h1','h2','h3','h4','tr','div','br'):self.parts.append('\n')
 def handle_endtag(self,tag):
  if tag in ('script','style'):self.skip-=1
 def handle_data(self,data):
  if not self.skip:self.parts.append(data)
sites={}
for subject,ids in [('chemistry',[3,4,7,8]),('biology',[5,6,7,8,9])]:
 for n in ids:
  p=Path('C:/Users/kygs/hscscience/subjects')/subject/'year12/module8'/f'lesson{n:02}.sa.html'
  if not p.exists():sites[str(p)]={'missing':True};continue
  h=Text();h.feed(p.read_text(encoding='utf-8')); txt='\n'.join(re.sub(r'\s+',' ',l).strip() for l in ''.join(h.parts).splitlines() if l.strip())
  sites[f'{subject}-L{n:02}']={'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'text':txt}
(OUT/'brief117-site-evidence.json').write_text(json.dumps(sites,ensure_ascii=False,indent=2),encoding='utf-8')
syll={}
for subject,url in [('chem','https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx'),('bio','https://www.nsw.gov.au/sites/default/files/noindex/2025-03/biology-stage-6-syllabus-2017.docx')]:
 try:
  b=urllib.request.urlopen(url,timeout=40).read(); root=ET.fromstring(zipfile.ZipFile(io.BytesIO(b)).read('word/document.xml')); ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
  def paragraph_text(p):
   parts=[]
   for n in p.iter():
    tag=n.tag.split('}')[-1]
    if tag=='t':parts.append(n.text or '')
    elif tag=='noBreakHyphen':parts.append('-')
    elif tag=='tab':parts.append(' ')
   return ''.join(parts)
  paragraphs=[paragraph_text(p) for p in root.findall('.//w:p',ns)]
  text=' '.join(paragraphs); syll[subject]={'url':url,'sha256':hashlib.sha256(b).hexdigest(),'text':text}
 except Exception as e:syll[subject]={'url':url,'error':str(e)}
(OUT/'brief117-official-syllabus.json').write_text(json.dumps(syll,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({k:{'chars':v['total_characters'],'counts':[s['characters'] for s in v['scenes']],'em_dashes':v['em_dashes']} for k,v in audit.items()},indent=2))
print('syllabus:',{k:len(v.get('text','')) or v.get('error') for k,v in syll.items()})
