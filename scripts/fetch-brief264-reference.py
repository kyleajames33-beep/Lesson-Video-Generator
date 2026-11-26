import urllib.request,re,json
from pathlib import Path
url='https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/teaching-and-learning'
body=urllib.request.urlopen(url,timeout=30).read().decode('utf-8')
Path('work/brief264/sources').mkdir(exist_ok=True)
Path('work/brief264/sources/nesa-2024-support.html').write_text(body,encoding='utf-8')
for m in re.finditer('reference',body,re.I):
 s=body[max(0,m.start()-180):m.end()+220]
 if 'sheet' in s.lower():print(s)
