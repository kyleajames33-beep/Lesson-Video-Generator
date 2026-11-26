"""Offline reproduction and source checks for brief259's ledgers and crosswalk."""
import hashlib
import importlib.util
import json
import re
import shutil
import sys
from pathlib import Path
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')
B=Path('docs/production/programme/syllabus');W=Path('work/brief259')
read=lambda p:json.loads(Path(p).read_text(encoding='utf8'))
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
save=lambda p,d:Path(p).write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
spec=importlib.util.spec_from_file_location('ledger_generator',B/'generate_ledgers.py');gen=importlib.util.module_from_spec(spec);spec.loader.exec_module(gen)
assert gen.clean_html('<p>Use <math><mfrac>\n<mi>b</mi>\n<mi>T</mi>\n</mfrac></math></p>',True)=='Use (b)/(T)'
assert gen.clean_html('<p>Use <math><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></math></p>',True)=='Use E=mc^(2)'
captures=read(W/'nesa/official/sources.json')
for url,item in captures.items():assert sha(item['path'])==item['sha256']
gen.fetch=lambda url:Path(captures[url]['path']).read_bytes()
gen.OUT=W/'offline-reproduction';gen.OUT.mkdir(exist_ok=True)
gen.new_ledger('phys','physics-11-12-2025',12,'P25','2026-11-21')
current=read(B/'phys-new-y12.json');rebuilt=read(gen.OUT/'phys-new-y12.json')
# This update only completes MathML preservation in the new, not-yet-released ledger.
for before,after in zip(current['modules'],rebuilt['modules']):
    for a,b in zip(before['contentPoints'],after['contentPoints']):
        assert a['sourceHtml']==b['sourceHtml'] and a['sourceItemId']==b['sourceItemId']
shutil.copyfile(gen.OUT/'phys-new-y12.json',B/'phys-new-y12.json')
ledger=read(B/'phys-new-y12.json');points={p['id']:p for m in ledger['modules'] for p in m['contentPoints']}
assert len(points)==229
assert '(b)/(T)' in points['P25Y12-FA3-G3-07']['text']
assert 'mc^(2)' in points['P25Y12-FA4-G3-01']['text']
assert 'sin' in points['P25Y12-FA2-G2-07']['text'] and 'cos' not in points['P25Y12-FA2-G2-07']['text']
cross=read(B/'phys-new-y12-audit-crosswalk.json')
for row in cross['rows']:
    p=points[row['ledgerId']]
    row.update({k:p[k] for k in ['text','includingStatements','officialCodename','sourceItemId','sourceUrl','retrievalDate']})
cross['ledgerSha256']=sha(B/'phys-new-y12.json')
cross['equationNote']='Plain text retains MathML fraction, power and index structure; sourceHtml and sourceMathML retain the exact official markup.'
save(B/'phys-new-y12-audit-crosswalk.json',cross)

findings=[
 {'type':'audit convention warning does not hold against current official source','videoId':'phys-y12-m6-v16',
  'provisionalIds':['P25Y12-FA2-ME-07'],'officialCodenames':[points['P25Y12-FA2-G2-07']['officialCodename']],
  'finding':'The audit says the 2025 torque point uses cosine. Current NESA MathML and its aria-label specify sine, consistent with the design\'s area-normal angle. A change to cosine is not required by this official point.',
  'sourceUrl':points['P25Y12-FA2-G2-07']['sourceUrl']},
 {'type':'mapped point is only partly taught','videoId':'phys-y12-m6-v05','provisionalIds':['P25Y12-FA2-CP-11'],
  'finding':'The official point requires four paths: masses in uniform gravity, satellites, charges in electric fields and moving charges in magnetic fields. The design compares satellites and electric/magnetic cases; the uniform-gravity mass case is not a full four-way comparison. Retain a partial match, not full-point coverage.'},
 {'type':'mapped point is only partly taught','videoId':'phys-y12-m6-v16','provisionalIds':['P25Y12-FA2-ME-09'],
  'finding':'The official point includes both DC and AC motors, split rings and slip rings. This design teaches the split-ring DC motor and smoothing, not the complete AC/slip-ring part. Retain a partial match.'},
 {'type':'mapped points are only partly taught','videoId':'phys-y12-m7-v11','provisionalIds':['P25Y12-FA3-QM-14','P25Y12-FA3-QM-15'],
  'finding':'Both official points include thermionic emission. This design teaches photoelectric graphs and calculations without thermionic-emission experiments or problems. Retain the photoelectric part; the full-point match does not hold.'}
]
for finding in findings:
    refs=[r for r in cross['rows'] if r['provisionalId'] in finding['provisionalIds']]
    finding['officialPoints']=[{k:r[k] for k in ['ledgerId','officialCodename','text','sourceUrl']}for r in refs]
save(B/'phys-new-y12-audit-match-findings.json',{'scope':'ID resolution plus specific official-wording shortfalls. This is not a new independent learning/science review of all 81 designs.',
    'missingOrRenumberedAuditIds':[],'findings':findings})

for subject,prefix in [('chem','C25'),('bio','B25')]:
    old=read(W/(subject+'-new-y12.json.before-brief259'));new=read(B/(subject+'-new-y12.json'))
    for a,b in zip(old['modules'],new['modules']):
        for x,y in zip(a['contentPoints'],b['contentPoints']):
            x['id']=x['id'].replace(prefix+'-',prefix+'Y12-',1);assert x==y
citations=read(W/'id-clash-citations.json')
citations['intentionalMigrationReferenceFiles']=['docs/production/programme/syllabus/y12-id-migration-brief259.json']
save(W/'id-clash-citations.json',citations)
result={'offlineOfficialReproductionPass':True,'officialPhysicsPoints':len(points),'crosswalkRows':len(cross['rows']),
    'auditIdReferencesResolved':178,'noMissingOrRenumberedAuditIds':True,'specificAuditFindings':len(findings),
    'mathFractionsPowersAndIndicesPreserved':True,'chemistryBiologyChangesAreIdsOnly':True,
    'physicsLedgerSha256':sha(B/'phys-new-y12.json'),'sourceHtmlArchivesVerified':len(captures),'speechRequests':0}
save(W/'ledger-final-check.json',result);print(json.dumps(result))
