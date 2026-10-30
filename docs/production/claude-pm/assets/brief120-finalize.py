from pathlib import Path
import hashlib, json, re, zipfile

root = Path(__file__).resolve().parents[4]
a = root / 'docs/production/claude-pm/assets'
p = a / 'brief120-site-evidence.json'
rows = json.loads(p.read_text(encoding='utf-8'))
site = Path('C:/Users/kygs/hscscience/subjects/biology/year12/module8/lesson18.sa.html')
quote = 'In 1978 Graeme Clark, at the University of Melbourne, switched on the first multi-channel cochlear implant in Rod Saunders.'
assert quote in re.sub(r'\s+', ' ', re.sub('<[^>]+>', ' ', site.read_text(encoding='utf-8')))
if not any(r['oldText'] == quote for r in rows):
    rows.append(dict(file=str(site), sha256=hashlib.sha256(site.read_bytes()).hexdigest(), oldText=quote, correctStatement='Clark implanted the Melbourne multichannel prototype in 1978. An earlier Vienna multichannel implantation occurred in December 1977. Remove the unqualified first claim.', source='https://www.meduniwien.ac.at/web/en/about-us/news/detailsite/meduni-vienna-innovations-in-treatment-with-hearing-implants/'))
p.write_text(json.dumps(rows, indent=2), encoding='utf-8')
p = a / 'brief120-site-corrections-proposed.md'
s = p.read_text(encoding='utf-8')
s = s[:s.index('## Still requiring confirmation')] + '''## Further confirmed history correction

Biology L18 says: "In 1978 Graeme Clark, at the University of Melbourne, switched on the first multi-channel cochlear implant in Rod Saunders." Keep Clark's 1978 Melbourne achievement but remove the unqualified first claim. [Medical University of Vienna](https://www.meduniwien.ac.at/web/en/about-us/news/detailsite/meduni-vienna-innovations-in-treatment-with-hearing-implants/) and [MED-EL's history](https://www.medel.com/en-au/about-medel/our-history) identify a December 1977 multichannel implantation in Vienna. Exact local HTML hash and quote are in the evidence JSON.

## Remaining site-check scope

IR site claims (L13), exact ethanol short-answer wording in L14 and several diabetes claims in Biology L14 are not all independently resolved. The full Mackenzie carrier-frequency attribution and Vienna comparison have now been checked: see `brief120-dated-biology-verification.md`. Originality comparison also found two close site adaptations, recorded in `brief120-overlap-originality-review.md`. Root owns site-log integration.
'''
p.write_text(s, encoding='utf-8')
p = a / 'brief120-hand-in.md'
s = p.read_text(encoding='utf-8').replace('| m8c09 | 1 / 1 |', '| m8c09 | 1 / 2 |').replace('| m8b13 | 0 / 2 |', '| m8b13 | 0 / 3 |').replace('seven proposed confirmed site corrections', 'eight proposed confirmed site corrections')
start = s.index('Not completed:')
end = s.index('\n\nA draft', start)
s = s[:start] + '''Further verification completed: full written sister-lesson overlap comparison; all 16 practice attempts compared against the fourteen official 2019 to 2025 Chemistry/Biology paper text extracts and the relevant site contexts; dated biology, gene-therapy, legal and hearing-history primary checks. Two attempts closely adapt site questions and now have concrete should-fix findings (C09 attempt 2 and B13 attempt 1). See `brief120-overlap-originality-review.md` and `brief120-dated-biology-verification.md`. Redacted diagrams limit any universal originality guarantee.

Measured IR delivery: `assets/m8c10-ir-bands.json` contains three verified neat-liquid transmission datasets with raw JCAMP files and extracted points. Seven compounds remain uncertified. The design lists ten compounds, despite repeatedly calling them eleven. Ethanol/isopropanol liquid Index 29 records are dispersion index, unsuitable for transmittance; later NIST downloads returned HTTP 429. Actual measured depths require several design replacements.

Not completed: the other seven measured liquid-phase IR datasets; individual SDBS carbon/proton solvent and peak-assignment checks (the provider prohibits robot collection and browser access was unavailable); every author-logged site claim. These exact-data gates remain open. No measured IR or NMR values were invented. Artwork still requires subject-teacher and owner approval.''' + s[end:]
p.write_text(s, encoding='utf-8')
checkpoint = a / 'brief120-media-checkpoint.json'
old = json.loads(checkpoint.read_text(encoding='utf-8'))
paths = {root / f['path'] for f in old['files']}
paths.update(p for p in a.glob('brief120-*') if p.is_file() and not p.name.startswith('brief120-media-checkpoint'))
for directory in ('brief120-raw','brief120-qa','brief120-nist'):
    paths.update(p for p in (a / directory).rglob('*') if p.is_file())
paths.add(a / 'm8c10-ir-bands.json')
archive = a / 'brief120-media-checkpoint.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=3) as z:
    for p in sorted(paths):
        z.write(p, p.relative_to(root).as_posix())
with zipfile.ZipFile(archive) as z:
    assert z.testzip() is None
records = [dict(path=p.relative_to(root).as_posix(),bytes=p.stat().st_size,sha256=hashlib.sha256(p.read_bytes()).hexdigest()) for p in sorted(paths)]
data = dict(brief=120,date='2026-10-30',archive=archive.relative_to(root).as_posix(),archiveBytes=archive.stat().st_size,archiveSha256=hashlib.sha256(archive.read_bytes()).hexdigest(),archiveVerified=True,files=records)
checkpoint.write_text(json.dumps(data, indent=2), encoding='utf-8')
print(json.dumps({k:v for k,v in data.items() if k!='files'}))
print('Files:',len(records))
