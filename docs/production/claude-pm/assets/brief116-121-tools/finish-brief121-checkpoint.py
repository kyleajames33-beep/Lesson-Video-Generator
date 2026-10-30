from pathlib import Path
from PIL import Image,ImageDraw
import json,hashlib,zipfile
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());P=R/'docs/production/claude-pm';Q=P/'assets/brief121-qa'
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
prov=P/'assets/brief121-provenance.json';data=json.loads(prov.read_text())
for rec in data['records']:
    path=R/rec['path'];im=Image.open(path).convert('RGBA');assert im.size==(2000,2000)
    rec['sha256']=sha(path);rec['alphaBbox']=im.getchannel('A').getbbox()
    rec['qaStatus']='Root inspected native contact, cream/dark-board QA and aligned overlays. Owner artwork acceptance and playback remain pending.'
    if rec['key'].startswith('eye-'):
        rec['framingException']='Shared reference framing retained for cross-fades. Long eye has 5.95% right margin; preserving anterior registration takes precedence over independently shrinking this variant. Not clipped.'
    if rec['key'].startswith('cornea'):
        rec['framingException']='Common union crop and common proportional transform preserve trio alignment with 8% top/bottom margins.'
    if rec['key'].startswith('tube-'):
        rec['framingException']='Shared rack reference retained for exact apparatus alignment. Top margin is 8.85%, rather than independently resizing this matched variant.'
aav=R/'public/assets/biology/m8-aav-vector-v1.png'
data['sharedReuse']=[{'path':aav.relative_to(R).as_posix(),'sha256':sha(aav),'originBrief':120,'use':'G02 AAV vector; same file reused, not generated twice.'}]
data['qaLimit']='Still inspection only. No cross-fade playback, owner approval or voiced preview pass.'
data['exactPrompts']='docs/production/claude-pm/assets/brief116-121-imagegen-call-log.json'
prov.write_text(json.dumps(data,indent=2)+'\n')
for key,keys in [('m8b16',['eye-long','eye-short','eye-cataract','eye-iol','cornea','cornea-flap','cornea-flat','lens']),('m8b17',['machine','dialyser','peritoneal','bags','transplant']),('m8g02b',['bowel'])]:
    subset={**data,'records':[r for r in data['records'] if r['key'] in keys]}
    if key!='m8g02b':subset.pop('sharedReuse',None)
    (P/f'assets/{key}-provenance.json').write_text(json.dumps(subset,indent=2)+'\n')
sheet=Image.new('RGB',(1600,2000),'#f5f0e4');draw=ImageDraw.Draw(sheet)
small=Image.new('RGB',(1200,1500),'#182528');sd=ImageDraw.Draw(small)
for i,rec in enumerate(data['records']):
    im=Image.open(R/rec['path']).convert('RGBA');im.thumbnail((380,350))
    sheet.paste(im,((i%4)*400+10,(i//4)*400+35),im);draw.text(((i%4)*400+12,(i//4)*400+12),rec['key'],fill='black')
    im=Image.open(R/rec['path']).convert('RGBA');box=im.getchannel('A').getbbox();obj=im.crop(box);h=220;obj=obj.resize((round(obj.width*h/obj.height),h),Image.Resampling.LANCZOS)
    if obj.width>280:
        obj.thumbnail((280,220))
    x=(i%4)*300+(300-obj.width)//2;y=(i//4)*300+50
    small.paste(obj,(x,y),obj);sd.text(((i%4)*300+8,(i//4)*300+12),rec['key'],fill='white')
sheet.save(Q/'final-contact.jpg',quality=94);small.save(Q/'small-dark-contact.jpg',quality=95)
# Verify the archives without a second extracted copy, to conserve disk.
for brief in [119,121]:
    asset=P/f'assets/brief{brief}-provenance.json';d=json.loads(asset.read_text())
    if brief==121:
        members=[R/r['path'] for r in d['records']]+[aav]+list(Q.glob('*'))+[asset]
        members += list((P/'checks').glob('m8c12-*.md'))+list((P/'checks').glob('m8g03c-*.md'))+list((P/'checks').glob('m8c13-*.md'))+list((P/'checks').glob('m8b16-*.md'))+list((P/'checks').glob('m8b17-*.md'))+list((P/'checks').glob('m8g02b-*.md'))
        members += list((P/'assets').glob('brief121-*.json'))+[P/'assets/m8b16-provenance.json',P/'assets/m8b17-provenance.json',P/'assets/m8g02b-provenance.json']
        members += list((P/'assets/brief121-nist').glob('*'))+[P/'assets/brief116-121-imagegen-call-log.json',P/'assets/brief120-nist/2-chloropropane-extra-for121.jdx']
        members += [p for p in (P/'assets').glob('brief121-*.md')]
    else:
        members=list((P/'assets/brief119-qa').glob('*'))+[asset,P/'checks/codex-check-119.md']
        members += [R/'public/assets/biology/m6-golden-white-rice-v1.png',R/'public/assets/biology/m6-bt-cotton-v1.png']
    members=sorted(set(p for p in members if p.is_file() and 'media-checkpoint' not in p.name))
    archive=R/f'out/archives/brief{brief}-plates-2026-10-30.zip'
    with zipfile.ZipFile(archive,'w',zipfile.ZIP_DEFLATED,compresslevel=3) as z:
        for p in members:z.write(p,p.relative_to(R).as_posix())
    with zipfile.ZipFile(archive) as z:
        assert z.testzip() is None
        for p in members:
            with z.open(p.relative_to(R).as_posix()) as f:assert hashlib.file_digest(f,'sha256').hexdigest()==sha(p)
    checkpoint=dict(brief=brief,path=archive.relative_to(R).as_posix(),sha256=sha(archive),bytes=archive.stat().st_size,members=len(members),crcPass=True,memberHashesVerified=True,verification='Streamed every archive member and compared SHA-256 with its source. No duplicate extraction.',remoteBackup='not uploaded')
    (P/f'assets/brief{brief}-media-checkpoint.json').write_text(json.dumps(checkpoint,indent=2)+'\n');print(json.dumps(checkpoint),flush=True)
