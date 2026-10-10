from pathlib import Path
import hashlib,json,html

root=Path(__file__).resolve().parents[1]
output=root/'out/prototypes/module5-c3-voiced-pilot-review-2026-10-10'
output.mkdir(exist_ok=True)
cards=[]; files=[]
for name,title in [('remove-pilot01','Remove B: the reaction afterwards'),('transfer-pilot02','Remove A: question, thinking time and explanation')]:
    directory=root/f'out/prototypes/module5-c3-voiced-2026-10-10/{name}'
    record=json.loads((directory/'render-record.json').read_bytes())
    for file in ['video.mp4','captions.vtt','render-record.json','release.snapshot.json']:
        p=directory/file
        files.append({'path':p.relative_to(root).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
    text=(directory/'captions.vtt').read_text(encoding='utf-8')
    # Review controls should not cover the captions. Original export stays frozen.
    review='\n'.join(line+' line:80%' if ' --> ' in line else line for line in text.splitlines())+'\n'
    caption=output/f'{name}.vtt';caption.write_text(review,encoding='utf-8')
    url=f'../module5-c3-voiced-2026-10-10/{name}/video.mp4'
    duration=(record['render']['frameRange'][1]-record['render']['frameRange'][0]+1)/record['render']['fps']
    cards.append(f'<section><h2>{html.escape(title)}</h2><p>{duration:.0f} seconds</p><video controls preload="metadata" src="{url}"><track kind="captions" src="{name}.vtt" srclang="en" label="English" default></video></section>')
page='''<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chemistry C3 voiced previews</title><style>body{margin:0;background:#f7f7f5;color:#17251f;font:18px/1.6 system-ui,sans-serif}main{max-width:1200px;margin:auto;padding:24px}section{background:white;padding:20px;margin:24px 0;border:1px solid #d5ded8;border-radius:12px}h1{font-size:30px}h2{font-size:23px}video{width:100%;display:block;background:#111;border-radius:8px}a{color:#006b59}</style><main><h1>Chemistry C3: voiced previews</h1><p>Two short clips with the new narration. Listen for clarity, natural delivery and science-term pronunciation.</p><p><a href="../module5-c3-voiced-review-2026-10-10/">Watch the full nine-minute Remotion preview</a></p>'''+''.join(cards)+'''<p>These are review clips. Listening and whole-lesson review are pending before the full export.</p></main></html>'''
assert '\u2014' not in page
(output/'index.html').write_text(page,encoding='utf-8')
(output/'page-inputs.json').write_text(json.dumps({'schemaVersion':1,'pageSha256':hashlib.sha256((output/'index.html').read_bytes()).hexdigest(),'builder':{'path':Path(__file__).relative_to(root).as_posix(),'sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest()},'referencedFiles':files,'scope':'Two selected voiced clips. Remove pilot preserves v1; its content is unchanged in v2. Transfer pilot uses v2 without duplicate pause labels. No full-package/listening/release approval.'},indent=2)+'\n',encoding='utf-8')
print('http://127.0.0.1:8778/module5-c3-voiced-pilot-review-2026-10-10/')
