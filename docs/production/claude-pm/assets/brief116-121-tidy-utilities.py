from pathlib import Path
import re,json,ast
R=next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists());A=R/'docs/production/claude-pm/assets';dest=A/'brief116-121-tools';dest.mkdir(exist_ok=True)
names=['prepare-brief28ab.py','audit-brief116-119.py','finish-brief116-plates.py','clean-brief119-edges.py','fetch-brief121-nist.py','prepare-brief121-plates.py','finalise-brief121-retake.py','finish-brief121-checkpoint.py','write-brief121-reviews.py','record-brief121-site-findings.py']
names += ['brief117-'+n+'.py' for n in ['audit','contact-sheet','exam-check','finalise','numbers','process-plate','site-log','write-reviews','mucus-composite']]
names += ['brief118-'+n+'.py' for n in ['audit','write-reviews','site-log','aihw-series','finish-plates','finalize','flask-confinement']]
manifest=[]
for name in names:
    src=R/'scripts'/name;target=dest/name
    if target.exists() and not src.exists():continue
    assert src.is_file() and not target.exists(),name
    code=src.read_text(encoding='utf-8-sig')
    code=code.replace('pathlib.Path(__file__).resolve().parents[1]',"next(p for p in pathlib.Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())")
    code=code.replace('Path(__file__).resolve().parents[1]',"next(p for p in Path(__file__).resolve().parents if (p/'REPO-GUIDE.md').exists())")
    for helper in names:code=code.replace('scripts/'+helper,'docs/production/claude-pm/assets/brief116-121-tools/'+helper)
    ast.parse(code,filename=name)
    src.write_text(code,encoding='utf-8');src.rename(target)
    manifest.append({'old':'scripts/'+name,'new':target.relative_to(R).as_posix()})
(dest/'relocation.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
(dest/'README.md').write_text('# Brief utilities\n\nThese 26 utilities were created for Briefs 28ab and 116 to 121 and moved here to keep outputs in the brief folder. Repository-root detection and helper references were adjusted, and every moved Python file was parsed successfully.\n\nThey are research and production records, not application code. Several are one-shot writers. Do not rerun review writers, plate preparation or finalisers against resolved reviews and finished assets. In particular, Brief 120 finalisation is not idempotent. Use the saved manifests and media checkpoints for restoration. The original scripts/ paths mentioned in earlier reports record where the utilities were first created.\n',encoding='utf-8')
groups={117:['bio-m8-p02','bio-m8-b06','bio-m8-b07','bio-m8-b08'],118:['bio-m8-b09','bio-m8-b11','bio-m8-g01'],120:['bio-m8-b12','bio-m8-b13','bio-m8-b14','bio-m8-b15']}
aliases=[]
for b,designs in groups.items():
    master=A/f'brief{b}-provenance.json';data=json.loads(master.read_text(encoding='utf-8'));entries=data.get('plates',data.get('selectedPlates',[]))
    for design in designs:
        text=(R/f'docs/production/claude-pm/lessons/{design}.md').read_text(encoding='utf-8');requested=set(re.findall(r'assets/([\w-]+-provenance\.json)',text));requested={s for s in requested if not s.startswith('brief')}
        for name in requested:
            path=A/name
            if path.exists():continue
            subset=[]
            for row in entries:
                raw=row.get('path') or row.get('output_path') or row.get('finalPath')
                if raw and Path(raw.replace('\\','/')).name in text:subset.append(row)
            out={'design':design,'brief':b,'mainProvenance':master.relative_to(R).as_posix(),'records':subset,'qa':'See the main provenance and per-brief QA. Candidate artwork; owner acceptance and playback are pending.','reuseNote':'Only newly commissioned files from this brief are repeated here. Earlier catalogue assets remain documented in their original provenance.'}
            path.write_text(json.dumps(out,indent=2)+'\n',encoding='utf-8');aliases.append(name)
print(json.dumps({'moved':len(manifest),'perDesignAliases':aliases}))
