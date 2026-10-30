# Record completed brief 111 and the combined root verification without changing frozen media.
from pathlib import Path
import json
R=Path(__file__).resolve().parents[1];P=R/'docs/production/claude-pm'
counts={'m8c01':{'learning':[0,2],'science':[0,0]},'m8c02':{'learning':[1,3],'science':[1,3]},'m8b01':{'learning':[0,2],'science':[0,2]},'m8b02':{'learning':[2,2],'science':[2,3]}}
p=P/'checks/brief109-111-final-validation.json';v=json.loads(p.read_text(encoding='utf-8'))
v['referenceFramingExceptions']=[{'path':x['path'],'minimumMarginFraction':x['minimumMarginFraction'],'decision':'Retained exact requested legacy outline, alpha and canvas for stationary cross-fade. Specific reference matching takes priority over the generic 10 percent margin.'} for x in v['media'] if x['minimumMarginFraction']<.1]
v['independentArtworkReview']={'reviewer':'/root/brief110','inspected':'All 18 Module 8 plates and nine overlays','firstPassFindings':3,'repairs':'Balance geometry retained; Mohr geometry retained and milky contents regenerated. Root reinspection passed candidate technical QA.','repairEvidence':'docs/production/claude-pm/assets/brief111-geometry-repair.json','ownerAcceptance':'pending'}
v['siteLogVerification']=['docs/production/claude-pm/checks/brief109-110-site-log-verification.json','docs/production/claude-pm/checks/brief111-site-log-verification.json']
v['ldpeCheck']={'sameCanvas':True,'alphaByteIdenticalToOriginal':True,'beforeAfterQA':'docs/production/claude-pm/assets/brief109-qa/ldpe-before-after-cream.jpg'}
p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=R/'docs/production/parallel-production-board-2026-10-10.json';b=json.loads(p.read_text(encoding='utf-8'))
b['brief111']={'status':'complete-review-findings-unresolved','owner':'/root/brief111 (reviews and 15 plates); /root (3 wildlife plates and integration)','date':'2026-10-28','summary':'Eight independent reviews, 18 plate candidates, 15 confirmed site corrections and verified local archive. Three independent artwork findings repaired and reinspected.','reviewCounts':counts,'countMeaning':'[blocker, should fix]; review types overlap','evidence':['docs/production/claude-pm/assets/brief111-provenance.json','docs/production/claude-pm/assets/brief111-media-checkpoint.json','docs/production/claude-pm/assets/brief111-geometry-repair.json','docs/production/claude-pm/site-corrections-m8.md','docs/production/claude-pm/checks/brief111-site-log-verification.json','docs/production/claude-pm/checks/brief109-111-final-validation.json'],'framingExceptions':v['referenceFramingExceptions'],'unresolvedGates':['Claude resolves review findings','Owner artwork acceptance','Exact voiced preview and human listening before rendering'],'mediaUploaded':False}
b['brief28z']['evidence'].append('docs/production/claude-pm/youtube/brief28z-input-check.json')
b['brief109to111Verification']={'date':'2026-10-28','status':'verified-local-handoff','reviews':26,'plateAssets':29,'archives':v['archives'],'newSiteCorrections':28,'evidence':'docs/production/claude-pm/checks/brief109-111-final-validation.json','sourceDesignsChanged':False,'narrationOrRenderingPerformed':False,'referenceFramingExceptions':4}
p.write_text(json.dumps(b,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
p=P/'status.md';s=p.read_text(encoding='utf-8');marker='### Brief 111: reviews, plates and site log complete'
assert marker not in s,'Hand-in already recorded'
s+='''
### Brief 111: reviews, plates and site log complete (28 October 2026)

Eight independent review files in `checks/`, with empty Resolution sections. Counts are separate by review type and overlap.

- C01: learning 0 blockers, 2 should fix; science 0 blockers, 0 should fix.
- C02: learning 1 blocker, 3 should fix; science 1 blocker, 3 should fix.
- B01: learning 0 blockers, 2 should fix; science 0 blockers, 2 should fix.
- B02: learning 2 blockers, 2 should fix; science 2 blockers, 3 should fix.

Delivered 18 transparent plate candidates. Independent artwork review inspected all 18 plates and nine overlays. Its three findings were repaired: stable balance geometry, stable Mohr flask geometry and visibly milky precipitate. Root reinspected the repairs. Prompts and provenance: `assets/brief111-provenance.json`; geometry proof: `assets/brief111-geometry-repair.json`; archive: `out/archives/brief111-plates-2026-10-28.zip`, with `assets/brief111-media-checkpoint.json`. The archive has 159 ZIP entries, including its manifest, and passes CRC, content hashes and manifest comparison.

The three Mohr flasks and settled-precipitate beaker retain the exact requested legacy framing, with about 8% minimum margin. This specific cross-fade requirement takes priority over the brief's generic 10% clear-margin rule. All other plates meet 10%. No stretching was used. Owner artwork acceptance remains pending.

Fifteen confirmed site rows are in `site-corrections-m8.md`. Root checked every old quotation against the read-only HTML, in `checks/brief111-site-log-verification.json`. Fresh official 2017 DOCX text from brief 110 confirmed all three syllabus groups and examples. B02 proposed repairs are shorter or name explicit cuts. No site, lesson source, narration or scene code was changed. No speech, renders, publication, commit or push for this review brief. Claude resolves the learning/science findings; exact voiced preview and human listening remain later gates.

Combined verification: `checks/brief109-111-final-validation.json` confirms all 26 reviews, 29 plate assets, three local archives, source hashes and the recorded framing exceptions. The logs add 28 confirmed site corrections (13 Module 7 and 15 Module 8). Brief 28z remains stopped at the existing C05 private draft after its browser timeout; all 15 local video/caption input checks passed in `youtube/brief28z-input-check.json`. Question for Claude: resolve the review findings before recording.
'''
assert '\u2014' not in s[s.index(marker):]
p.write_text(s,encoding='utf-8')
print('Brief 111 and combined final handoff recorded.')
