"""Brief118: stream official workbook rows for B10 without loading the workbook."""
import zipfile,xml.etree.ElementTree as E,json,pathlib,hashlib
PM=next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())/'docs/production/claude-pm'
p=PM/'assets';f=p/'brief118-aihw-book2a.xlsx';z=zipfile.ZipFile(f)
ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
ss=[''.join(t.itertext()) for t in E.fromstring(z.read('xl/sharedStrings.xml'))]
rows=[];notes=[];groups=set()
for _,row in E.iterparse(z.open('xl/worksheets/sheet2.xml'),events=['end']):
    if not row.tag.endswith('}row'):continue
    num=int(row.get('r','0'));values={}
    for c in row:
        v=c.find('s:v',ns);v=v.text if v is not None else ''
        if c.get('t')=='s' and v:v=ss[int(v)]
        values[''.join(ch for ch in c.get('r','') if ch.isalpha())]=v
    group=values.get('B',''); groups.add(group)
    if 'all cancers' in group.lower() and values.get('D')=='Persons' and values.get('E')=='All ages combined':
        if 1995<=int(float(values['C']))<=2025:
            rows.append({'sourceRow':num,'year':int(values['C']),'dataType':values['A'],'cancerGroup':group,'sex':values['D'],'ageGroup':values['E'],'deaths':int(float(values['F'])),'crudeMortalityPer100000':float(values['G']),'ageStandardisedMortalityPer100000_2001':float(values['H']),'ageStandardisedMortalityPer100000_2025':float(values['I']),'icd10':values['M']})
    if num>274000 and values.get('A'):notes.append({'row':num,'values':values})
    row.clear()
rows.sort(key=lambda r:r['year'])
assert len(rows)==31,(len(rows),[s for s in groups if 'cancer' in s.lower()][:20])
index=json.loads((p/'brief118-aihw-download-index.json').read_text(encoding='utf8'))
entry=next(x for x in index['results'] if 'Book 2a' in x['resultTitle'])
d={'status':'exact-annual-series-extracted','checked':'2026-10-30','releaseTitle':'Cancer Data in Australia 2025','workbookDate':'October 2025','reportPageLastUpdated':'14 July 2026','downloadIndexDate':entry['resultDateFormatted'],'table':'Table S2a.1','url':'https://www.aihw.gov.au'+entry['resultUrl'],'localWorkbook':str(f.relative_to(PM)),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'source':'AIHW National Mortality Database','population':'Persons, all ages combined, all cancers combined','standardPopulationSelected':'2001 Australian Standard Population','additionalStandardPopulation':'2025 Australian population','projectionYears':[2024,2025],'notes':'Both standard-population columns are provided in the same official workbook. The report overview uses the 2025 column; the design can use the requested2001 column if its axis and source label say so. Do not infer every age-specific trend from either aggregate. Annual counts need not increase monotonically.','annualRows':rows,'lastRowsNotes':notes}
(p/'brief118-aihw-cancer-mortality.json').write_text(json.dumps(d,indent=2),encoding='utf8')
(p/'brief118-aihw-data-status.json').write_text(json.dumps({'status':d['status'],'seriesPath':'brief118-aihw-cancer-mortality.json','rows':len(rows),'standardPopulationSelected':d['standardPopulationSelected'],'bothStandardsAvailable':True},indent=2),encoding='utf8')
print('rows',len(rows));print('first',rows[0]);print('last',rows[-1]);print('nonincreasingCountYears',[b['year'] for a,b in zip(rows,rows[1:]) if b['deaths']<=a['deaths']]);print('crudeEndpoints',rows[0]['crudeMortalityPer100000'],rows[-1]['crudeMortalityPer100000'])
