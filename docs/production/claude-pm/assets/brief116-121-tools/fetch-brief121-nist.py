"""Download small public NIST reference spectra for the Brief121 checks."""
import hashlib,json,time,urllib.request
from pathlib import Path
P=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm/assets/brief121-nist'
P.mkdir(exist_ok=True)
compounds={'butanone':'78933','butanal':'123728','2-chloropropane':'75296','ethyl-propanoate':'105373','pentan-3-ol':'584021','2-methylbutan-2-ol':'75585','2-2-dimethylpropanoic-acid':'75865','3-methylbutan-2-one':'563804'}
records=[]
for name,cas in compounds.items():
    for typ in ['IR','Mass']:
        path=P/(name+'-'+typ.lower()+'.jdx')
        url=f'https://webbook.nist.gov/cgi/cbook.cgi?JCAMP=C{cas}&Index=0&Type={typ}'
        try:
            raw=path.read_bytes() if path.exists() else urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=20).read()
            valid=raw.startswith(b'##TITLE=')
            if valid: path.write_bytes(raw)
            record=dict(compound=name,url=url,type=typ,available=valid,bytes=len(raw),path=path.as_posix() if valid else None,sha256=hashlib.sha256(raw).hexdigest() if valid else None,headers=[line for line in raw.decode('utf-8',errors='replace').splitlines() if line.startswith('##')][:30] if valid else [])
        except Exception as e:record=dict(compound=name,url=url,type=typ,available=False,error=str(e))
        records.append(record)
        print(name,typ,record['available'],flush=True)
(P.parent/'brief121-nist-records.json').write_text(json.dumps(dict(date='2026-10-30',records=records),indent=2)+'\n',encoding='utf-8')
