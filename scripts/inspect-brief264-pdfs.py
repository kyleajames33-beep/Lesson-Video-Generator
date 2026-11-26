"""Read official source PDFs and render disposable evidence previews."""
import urllib.request,hashlib,json
from pathlib import Path
import pymupdf
folder=Path('work/brief264/sources');folder.mkdir(exist_ok=True)
sources={
 'nesa-standard-2024-syllabus-reference':'https://library.curriculum.nsw.edu.au/341419dc-8ec2-0289-7225-6db7f2d751ef/3d1cd40a-4bde-4320-a3a5-5cf9d6fa3d73/D2025%2029902%20%20HSC%20Mathematics%20Standard%201%20and%202%20reference%20sheet.pdf',
 'nesa-standard-2017-course-reference':'https://www.nsw.gov.au/sites/default/files/noindex/2025-04/mathematics-standard-1-and-2-reference-sheet-nov-2019.pdf',
 'monash-sdg-2020-summary':'https://www.monash.edu/__data/assets/pdf_file/0006/3705072/MSDI_TA2020_Summary.pdf'
}
rows=[]
for name,url in sources.items():
 try:
  p=folder/(name+'.pdf')
  if not p.exists():p.write_bytes(urllib.request.urlopen(url,timeout=40).read())
  doc=pymupdf.open(p);txt='\n'.join(page.get_text() for page in doc);p.with_suffix('.txt').write_text(txt,encoding='utf-8')
  if name.startswith('nesa'):
   for i,page in enumerate(doc):page.get_pixmap(matrix=pymupdf.Matrix(1.5,1.5)).save(folder/f'{name}-{i+1}.png')
  rows.append({'name':name,'url':url,'retrieved':'2026-11-24','sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'pages':len(doc),'trapezOccurrences':txt.lower().count('trapez')})
 except Exception as e:rows.append({'name':name,'error':str(e)})
(folder/'pdf-inspection.json').write_text(json.dumps(rows,indent=2)+'\n',encoding='utf-8')
print(json.dumps(rows))
