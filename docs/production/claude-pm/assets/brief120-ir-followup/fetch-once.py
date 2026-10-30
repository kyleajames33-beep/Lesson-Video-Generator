"""One fresh NIST pass. No SDBS, gas substitution or repeated HTTP attempts."""
from pathlib import Path
import urllib.request,urllib.error,re,html,json,hashlib,time,datetime
base=Path(__file__).resolve().parent;parent=base.parent
names={'ethanol':'64175','acetic-acid':'64197','acetone':'67641','propan-1-amine':'107108','propan-1-ol':'71238','propan-2-ol':'67630','ethyl-acetate':'141786'}
out={'date':'2026-10-30','policy':'One fresh catalog request per compound; stop on HTTP429. No SDBS requests. No gas, solution or dispersion-index substitution.','compounds':{},'additional_usable_neat_liquid_transmittance_datasets':0,'peak_extractions':[]}
start=time.monotonic();rate_limited=False
for name,cas in names.items():
 url=f'https://webbook.nist.gov/cgi/cbook.cgi?ID=C{cas}&Mask=80';r={'catalog_url':url}
 if rate_limited or time.monotonic()-start>90:r.update(status='not requested after stop condition');out['compounds'][name]=r;continue
 try:
  response=urllib.request.urlopen(url,timeout=8);b=response.read();text=b.decode('utf-8');path=base/f'{name}-fresh-catalog.html';path.write_bytes(b)
  rows=[]
  for li in re.findall(r'<li\b[^>]*>(.*?)</li>',text,re.S|re.I):
   if 'Type=IR-SPEC' not in li:continue
   context=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',li))).strip()
   for idx in re.findall(r'Index=(\d+)',li):rows.append({'index':int(idx),'full_list_item_context':context})
  neat=[x for x in rows if 'LIQUID (NEAT)' in x['full_list_item_context'].upper()]
  r.update(http_status=response.status,bytes=len(b),sha256=hashlib.sha256(b).hexdigest(),catalog_file=path.name,spectra=rows,explicit_neat_candidates=neat,status='No explicit neat-liquid transmission candidate in fresh catalog')
  if not rows and 'Gas Phase Spectrum' in text:r['phase_note']='The directly displayed IR record is explicitly gas phase.'
  if name in ['ethanol','propan-2-ol']:r['phase_note']='The catalog liquid record is Index29. Previously retained JCAMP explicitly says YUNITS=dispersion index; it is not certified transmission. No repeated download of that known wrong ordinate.'
  if neat:r['status']='Fresh neat candidate needs separate retrieval; not attempted beyond this bounded follow-up.'
 except urllib.error.HTTPError as e:
  r.update(status='HTTP access limit',http_status=e.code,error=str(e));rate_limited=e.code==429
 except Exception as e:r.update(status='Access failed; no retry',error=type(e).__name__+': '+str(e))
 out['compounds'][name]=r
out['elapsed_seconds']=round(time.monotonic()-start,2);out['stop_reason']='HTTP429: no retry or further request' if rate_limited else 'Single fresh request pass complete; see each HTTP status. Failed access does not establish absence of eligible records. No further requests or invented peaks.'
out['catalog_parser_correction']='Numeric link labels are resolution values. Their enclosing list item identifies gas phase, so the many optical-series indices are not unclassified liquid spectra. In particular propan-1-ol indices1and2 explicitly inherit GAS (SATURATED).'
(parent/'brief120-ir-followup.json').write_text(json.dumps(out,indent=2),encoding='utf-8');print(json.dumps({'compounds':{k:v['status'] for k,v in out['compounds'].items()},'additional_usable':0,'elapsed_seconds':out['elapsed_seconds'],'stop_reason':out['stop_reason']}))
