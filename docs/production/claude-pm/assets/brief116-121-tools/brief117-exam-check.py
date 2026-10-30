"""Brief 117 lightweight official-paper text inventory for near-match review."""
from pathlib import Path
from html.parser import HTMLParser
import urllib.request,urllib.parse,io,hashlib,json,re
import fitz
OUT=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm/assets/brief117-exams';OUT.mkdir(exist_ok=True)
class Links(HTMLParser):
 def __init__(self):super().__init__();self.items=[];self.current=None
 def handle_starttag(self,t,a):
  if t=='a':self.current=[dict(a).get('href',''),'']
 def handle_data(self,d):
  if self.current:self.current[1]+=d
 def handle_endtag(self,t):
  if t=='a' and self.current:self.items.append(self.current);self.current=None
record=[]
for subject in ['chemistry','biology']:
 for year in range(2019,2026):
  pack=f'https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-exam-papers/{subject}/{year}'
  try:
   page=urllib.request.urlopen(pack,timeout=30).read().decode();links=Links();links.feed(page)
   choices=[(u,t) for u,t in links.items if '.pdf' in u.lower() and ('exam' in t.lower() or f'{year}-hsc-{subject}' in u.lower()) and not any(x in (u+' '+t).lower() for x in ['marking','-mg.','-mg_','errata','guideline'])]
   if not choices:raise ValueError('No official exam-PDF link found')
   url=urllib.parse.urljoin(pack,choices[0][0]);b=urllib.request.urlopen(url,timeout=45).read();doc=fitz.open(stream=b,filetype='pdf');pages=[p.get_text() or '' for p in doc];doc.close()
   data={'subject':subject,'year':year,'pack_url':pack,'pdf_url':url,'sha256':hashlib.sha256(b).hexdigest(),'page_text':pages}
   (OUT/f'{subject}-{year}.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
   terms=['calibration','absorbance','atomic absorption','copper','lead','unknown','flame'] if subject=='chemistry' else ['potometer','transpiration','bubble','plastic bag','fan','goitre','Huntington','cervical','HPV','hypercholesterol','LDL','cystic','CFTR','insulin','diabetes','asbestos']
   hits={term:[i+1 for i,t in enumerate(pages) if term.lower() in t.lower()] for term in terms}
   record.append({**{k:v for k,v in data.items() if k!='page_text'},'pages':len(pages),'term_pages':{k:v for k,v in hits.items() if v}})
   print(subject,year,len(pages),flush=True)
  except Exception as e:record.append({'subject':subject,'year':year,'pack_url':pack,'error':str(e)});print(subject,year,type(e).__name__,flush=True)
(OUT.parent/'brief117-exam-inventory.json').write_text(json.dumps(record,indent=2),encoding='utf-8')
