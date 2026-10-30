"""Verify exact read-only site quotations and record Brief121 owner findings."""
import hashlib,json,re
from pathlib import Path
from bs4 import BeautifulSoup
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm'
def norm(s):return re.sub(r'\s+',' ',s).strip()
cache={}
def site(subject,lesson):
    key=(subject,lesson)
    if key not in cache:
        p=Path(f'C:/Users/kygs/hscscience/subjects/{subject}/year12/module8/lesson{lesson:02}.sa.html')
        soup=BeautifulSoup(p.read_text(encoding='utf-8'),'html.parser')
        for n in soup(['script','style']):n.decompose()
        cache[key]=(p,norm(soup.get_text(' ',strip=True)))
    return cache[key]
rows=[
('chemistry',16,'In 1993, Pfizer Inc. developed a green synthesis route for sertraline (Zoloft) that cut solvent use by 200 kg per kg of product, eliminated four hazardous reagent steps, and reduced process waste by 60%', 'The EPA award account does not support these dates, units and percentages. It describes a different set of process improvements.','In 2002 Pfizer won the EPA award for combining three steps, replacing four solvents with ethanol, improving yield and removing substantial titanium-related waste. Remove the unsupported 1993,200kg, four hazardous steps and60% figures.','EPA2002','https://www.epa.gov/greenchemistry/presidential-green-chemistry-challenge-2002-greener-synthetic-pathways-award'),
('chemistry',16,"replacing a stoichiometric titanium reagent with a catalytic palladium-based catalyst in one key step eliminated an entire waste stream and reduced metal waste by 85%",'This conflates separate imine-formation and reduction changes, and adds an unsupported85% figure.','Ethanol and product solubility drove imine formation without titanium tetrachloride. A more selective palladium catalyst improved the subsequent reduction.','EPA2002','https://www.epa.gov/greenchemistry/presidential-green-chemistry-challenge-2002-greener-synthetic-pathways-award'),
('biology',19,'bone-like tissue cannot shorten','The sclera is collagen-rich connective tissue, not bone.','Axial elongation involves remodelling of the collagen-rich sclera. Corrective optics do not simply shorten an elongated eyeball.','NEI refractive errors','https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors'),
('biology',19,'Teens and up; not for young children or frequent eye infections','A blanket exclusion of children is false.','Some children can use prescribed contact lenses with appropriate supervision and hygiene. Suitability is individual.','FDA contacts for children','https://www.fda.gov/consumers/consumer-updates/what-know-if-your-child-wants-contact-lenses'),
('biology',20,'Dialysis runs entirely on it.','The definition of diffusion is followed by a claim that excludes water removal through ultrafiltration or osmosis.','Small solutes diffuse. Haemodialysis removes extra water by pressure-driven ultrafiltration; glucose-based peritoneal dialysis uses osmotic water movement.','Kidney Health Australia','https://kidney.org.au/your-kidneys/treatment/dialysis-key-facts/'),
('biology',20,'it contains glucose at blood concentration, so glucose has no gradient to follow.','This unqualified vocabulary example is not true of glucose-containing peritoneal dialysate.','Scope this example to haemodialysis. Peritoneal fluid often has extra glucose to create an osmotic water gradient.','Kidney Health Australia','https://kidney.org.au/your-kidneys/treatment/dialysis-key-facts/'),
('biology',20,'Hypertension is second at about 25%','The requested ANZDATA2024 report, Table1.11, gives glomerular disease19% and hypertension/renal vascular disease12% among Australian newKRT patients in2023.','For2023 newKRT patients inAustralia, diabetic kidney disease was36%, glomerular disease19%, and hypertension/renal vascular disease12%. Keep cause-of-KRT separate from all diabetes co-morbidity.','ANZDATA2024 chapter1','https://assets.anzorrg.org.au/assets/common/01_incidence_2023_ar_2024_chapter_F4_20251125.pdf'),
('biology',20,'End-stage renal disease is reached when GFR falls below 15 mL/min','The staging threshold is indexed to1.73squaremetres of body surface area.','Kidney failure stageG5 uses eGFR below15mL/min/1.73m2. Keep the indexed unit and distinguish chronic staging from any single low measurement.','KDIGO2024','https://kdigo.org/guidelines/ckd-evaluation-and-management/'),
('biology',21,'health spending reached roughly $220 billion in 2021 to 2022','The year and figure disagree with the named national report.','Australian total health expenditure was$241.3billion in2021-22, according to AIHW2023.','AIHW health expenditure2021-22','https://www.aihw.gov.au/reports/health-welfare-expenditure/health-expenditure-australia-2021-22/contents/about'),
]
verified=[]
for subject,lesson,quote,problem,correct,title,url in rows:
    path,text=site(subject,lesson)
    assert norm(quote) in text,(subject,lesson,quote)
    verified.append(dict(subject=subject,lesson=lesson,path=path.as_posix(),siteSha256=hashlib.sha256(path.read_bytes()).hexdigest(),quote=quote,problem=problem,correct=correct,sourceTitle=title,sourceUrl=url))
path,text=site('biology',19)
assert 'cataract' not in text.lower()
verified.append(dict(subject='biology',lesson=19,path=path.as_posix(),siteSha256=hashlib.sha256(path.read_bytes()).hexdigest(),quote='[Site gap: no cataract or intraocular lens replacement coverage.]',problem='The page treats refractive corrections but omits this required owner-selected visual-disorder example.',correct='Add cataract as lens opacity and explain replacement with an artificial intraocular lens, its benefit and limits.',sourceTitle='NEI cataracts',sourceUrl='https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts'))
lines=['# Brief121 verified site findings','', 'Checked30October2026 against read-only local HTML. No site files changed.','', '| Lesson and page | Exact page text | Problem | Correct statement | Source |','| --- | --- | --- | --- | --- |']
def row(r):
    page=f"{r['subject'].title()} L{r['lesson']:02}, `{r['subject']}/year12/module8/lesson{r['lesson']:02}.sa.html`"
    return f"| {page} | {r['quote']} | {r['problem']} | {r['correct']} | [{r['sourceTitle']}]({r['sourceUrl']}) |"
lines.extend(row(r) for r in verified)
proposed=P/'assets/brief121-site-corrections-proposed.md';proposed.write_text('\n'.join(lines)+'\n',encoding='utf-8')
log=P/'site-corrections-m8.md';old=log.read_text(encoding='utf-8');add=[r for r in verified if norm(r['quote']) not in norm(old)]
if add:
    addition='\n\n## Brief121 confirmed additions (30 October2026)\n\n| Lesson and page | Exact page text | Problem | Correct statement | Source |\n| --- | --- | --- | --- | --- |\n'+'\n'.join(row(r) for r in add)+'\n'
    assert chr(8212) not in addition
    log.write_text(old+addition,encoding='utf-8')
culture=[]
for lesson,quote in [(20,'in remote areas patients may have to relocate to reach a centre'),(15,'Aboriginal and Torres Strait Islander Australians reach end-stage kidney disease at several times the rate of other Australians, and the gap is widest in remote communities where dialysis can mean relocating hundreds of kilometres away from family.')]:
    path,text=site('biology',lesson);assert quote in text
    culture.append(dict(path=path.as_posix(),siteSha256=hashlib.sha256(path.read_bytes()).hexdigest(),quote=quote,status='owner-cultural-review-pending; excluded from learner copy; not declared a science error'))
evidence=dict(brief=121,date='2026-10-30',verified=verified,addedRows=len(add),culturalReview=culture,heldAuthorFlags=['L19 myopia20%, visual-impairment survey/575000,95%LASIK and prices: exact source population/year not certified.','L20 full function, fatal within weeks, waiting-time and price claims: need separately sourced contextual correction, not a stronger replacement absolute.','L21 87%: the ABS49.9% is explicitly for ten selected conditions; do not replace an undefined broader measure without defining scope.'])
(P/'assets/brief121-site-evidence.json').write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(dict(verifiedRows=len(verified),addedRows=len(add),culturalFlags=len(culture))))
