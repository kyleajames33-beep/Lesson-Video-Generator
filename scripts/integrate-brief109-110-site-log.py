# Verify proposed exact quotations and append confirmed new rows to the Module 7 log.
from pathlib import Path
from html import unescape
import re,json
R=Path(__file__).resolve().parents[1];P=R/'docs/production/claude-pm'
log=P/'site-corrections-m7.md';old=log.read_text(encoding='utf-8')
def norm(x):return ' '.join(unescape(re.sub('<[^>]+>',' ',x)).replace('\\|','|').split())
checks=[];new=[]
for brief in [109,110]:
 p=P/f'assets/brief{brief}-site-corrections-proposed.md'
 if not p.exists():continue
 for row in p.read_text(encoding='utf-8').splitlines():
  if not row.startswith(('| Chemistry','| Biology')):continue
  cells=row.split(' | ')
  paths=re.findall(r'`([^`]+\.html)`',cells[0])
  quotes=re.findall('\u201c(.*?)\u201d',cells[1])
  assert paths and quotes,row
  texts=[norm(Path('C:/Users/kygs/hscscience/subjects',rel).read_text(encoding='utf-8')) for rel in paths]
  exact=all(any(norm(q) in text for text in texts) for q in quotes)
  logged=all(norm(q) in norm(old) for q in quotes)
  checks.append({'brief':brief,'paths':paths,'quotes':quotes,'allExact':exact,'alreadyLogged':logged})
  assert exact,row
  if not logged:new.append(row);old+='\n'+row
if new:
 text=log.read_text(encoding='utf-8')
 text=text.replace('through brief 108,','through briefs 109 and 110,')
 heading='## Confirmed additions from briefs 109 and 110 (28 October 2026)'
 if heading not in text:
  text+='\n'+heading+'\n\n| Lesson and page | Exact page text | Problem | Correct statement | Source |\n| --- | --- | --- | --- | --- |\n'
 text+='\n'.join(new)+'\n'
 log.write_text(text,encoding='utf-8')
(P/'checks/brief109-110-site-log-verification.json').write_text(json.dumps({'date':'2026-10-28','rowsAdded':len(new),'checks':checks},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'{len(checks)} rows verified, {len(new)} added.')
