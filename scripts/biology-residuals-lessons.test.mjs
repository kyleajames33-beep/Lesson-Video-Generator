import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {hash} from './lib/science-audit.mjs';
import {biologyResidualSources,biologyResidualEvidence,biologyResidualDraft,biologyResidualArtifacts,validateBiologyResidualArtifacts,pinnedBiologyFixture,soluteBalance,potometerRate,waterStorageChange,wholeChromosomeCombinations} from './lib/biology-residuals-lessons.mjs';
const names=Object.keys(biologyResidualSources);
const bytes=Object.fromEntries(await Promise.all(names.map(async name=>[name,await readFile(`src/data/${name}.json`)])));
const drafts=Object.fromEntries(names.map(name=>[name,biologyResidualDraft(name,bytes[name]).draft]));
const named=part=>drafts[names.find(n=>n.includes(part))];
const all=d=>JSON.stringify(d);

test('all 308 recorded catalogue files preserve their exact reviewed source bytes',async()=>{
 const fixture=pinnedBiologyFixture('catalogue');
 assert.equal(Object.keys(fixture.files).length,308);
 assert.deepEqual((await readdir('src/data')).filter(f=>f.endsWith('.json')).sort(),Object.keys(fixture.files).map(f=>f.split('/').at(-1)).sort());
 for(const [file,sha]of Object.entries(fixture.files))assert.equal(hash(await readFile(file)),sha,file);
});
test('five complete isolated proposals preserve scene order, types, metadata and artwork references',()=>{
 assert.equal(names.length,5);let scenes=0;
 for(const name of names){const old=JSON.parse(bytes[name]),draft=drafts[name];
  assert.deepEqual(draft.scenes.map(s=>[s.id,s.type]),old.scenes.map(s=>[s.id,s.type]));
  for(const key of ['subject','yearLevel','syllabusVersion','syllabusModule','syllabusDotPoints','nesaOutcomes','width','height','fps','module','lesson'])assert.deepEqual(draft[key],old[key],name+':'+key);
  for(const s of draft.scenes){assert.ok(s.voiceover?.text);assert.equal(s.image,old.scenes.find(x=>x.id===s.id).image);scenes++;}
 }assert.equal(scenes,50);
});
test('source guards reject modified bytes rather than silently refreshing recorded narration',()=>{
 for(const name of names){assert.throws(()=>biologyResidualDraft(name,Buffer.concat([bytes[name],Buffer.from(' ')])),/source changed/u);}
 assert.throws(()=>biologyResidualDraft('unknown',Buffer.from('{}')),/source changed/u);
});
test('old media and narration cue wiring are absent and response takes remain unauthorised planning',()=>{
 for(const name of names){const a=biologyResidualArtifacts(name,bytes[name]);
  const walk=(v,trail='')=>{if(!v||typeof v!=='object')return;for(const[k,x]of Object.entries(v)){assert.doesNotMatch(k,/audio|alignment|backgroundMusic/iu);assert.ok(!['captions','introVoiceover','responseHold','revealDelays','startFrame','endFrame'].includes(k),trail+k);walk(x,trail+'.'+k);}};walk(a.draft);
  assert.equal(a.takes.generationAuthorised,false);assert.equal(a.takes.audioGenerated,false);assert.equal(a.takes.takes.length,11);
  const q=a.takes.takes.filter(t=>t.scene==='quick-check');assert.deepEqual(q.map(t=>t.phase),['prompt','answer']);assert.ok(q.every(t=>t.audioFile===null&&t.textSha256===hash(t.text)));
  assert.equal(q.map(t=>t.text).join(' '),a.draft.scenes.find(s=>s.id==='quick-check').voiceover.text);
  assert.equal(a.pacing.scenes.find(s=>s.scene==='quick-check').response.minimumThinkingSeconds,60);
  assert.doesNotMatch(all(a.draft),/\u2014/u);
 }
});
test('canonical validation rejects changed answer, field, evidence, cue, review state and take order',()=>{
 const name=names[0];for(const mutate of [a=>a.draft.scenes.at(-1).points.push('false fact'),a=>a.takes.takes.reverse(),a=>a.review.scienceApproval=true,a=>a.review.sourceEvidence[0].url='https://example.com',a=>a.draft.scenes[1].voiceover.audio='old.mp3',a=>a.pacing.scenes.at(-2).response.minimumThinkingSeconds=0,a=>a.draft.scenes[1].diagram={type:'diorama',kind:'unknown',props:{}}]){
  const a=biologyResidualArtifacts(name,bytes[name]);mutate(a);assert.throws(()=>validateBiologyResidualArtifacts(name,bytes[name],a));
 }
});
test('future-cohort mapping is explicit and practical verbs are not claimed achieved by viewing',()=>{
 for(const name of names){const c=biologyResidualEvidence.lessons[name].curriculum,old=JSON.parse(bytes[name]);
  assert.equal(c.edition,'Biology 11–12 (2025)');assert.equal(c.yearLevel,'Year 11');assert.deepEqual(c.selectedOriginalWording,old.syllabusDotPoints);assert.deepEqual(c.originalOutcomeCodes,old.nesaOutcomes??[]);
  assert.match(c.implementation,/2027.*2027.*2028.*2026.*2017/u);assert.match(c.contentUrl,/curriculum\.nsw\.edu\.au/u);
  assert.equal(biologyResidualArtifacts(name,bytes[name]).review.curriculumDeliveryApproved,false);
 }
 for(const part of ['m2-l11','m1-l24'])assert.match(biologyResidualEvidence.lessons[names.find(n=>n.includes(part))].curriculum.evidenceBoundary,/Actual teacher-supervised.*records.*do not satisfy conduct/u);
});
test('every remedy has primary evidence, an inference limit and a distinct original ledger key',()=>{
 assert.deepEqual(new Set(Object.values(biologyResidualEvidence.lessons).map(e=>e.finding)),new Set(['original:A02','original:A03','original:A10','original:A13','original:A23']));
 for(const e of Object.values(biologyResidualEvidence.lessons)){assert.ok(e.sourceEvidence.some(s=>s.kind.startsWith('primary')));assert.ok(e.sourceEvidence.every(s=>s.limit&&s.reviewed&&s.supports&&s.url.startsWith('https://')));assert.match(e.remedyStatus,/preserved catalogue finding remains open/u);}
});
test('integral/transmembrane distinction survives definitions, summary, answer and diagram labels',()=>{
 const d=named('m1-l07'),by=id=>d.scenes.find(s=>s.id===id);
 assert.match(all(by('definition')),/Monotopic integral protein/u);assert.match(all(by('summary')),/Integral means embedded; transmembrane means spanning/u);
 assert.match(all(by('quick-check')),/not transmembrane/u);assert.match(all(by('concept-proteins').diagram),/transmembrane example/u);
 assert.doesNotMatch(all(d),/Integral proteins span the bilayer|embedded right through|No cholesterol when warm|gets too fluid and leaky/u);
});
test('nephron all-scene source retains recycling, physical selectivity and amount-balance scope',()=>{
 const d=named('m2-l19');assert.match(all(d),/some urea is reabsorbed/iu);assert.match(all(d),/physical selectivity/iu);
 assert.doesNotMatch(all(d),/leaves the urea behind|un-selective|isn't selective at all|every small molecule|classic sign|uncontrolled diabetes/u);
 const assumptions={unchangedTubularSoluteContent:true,noOtherSourcesOrSinks:true};
 assert.equal(soluteBalance(100,60,20,assumptions),60);assert.equal(soluteBalance(80,50,10,assumptions),40);
 assert.match(all(d.scenes.find(s=>s.id==='worked-example')),/100 − 60 \+ 20 = 60/u);
 assert.match(all(d.scenes.find(s=>s.id==='quick-check')),/80 − 50 \+ 10 = 40/u);
 for(const args of [[1,2,0],[-1,0,0],[NaN,0,0],[1,Infinity,0]])assert.throws(()=>soluteBalance(...args,assumptions));
});
test('dialysis distinguishes diffusion, pressure-driven ultrafiltration and convection throughout',()=>{
 const d=named('m2-l20');for(const id of ['hook','concept-dialysis','concept-compare','worked-example','quick-check','summary'])assert.match(all(d.scenes.find(s=>s.id===id)),/ultrafiltration/u);
 assert.doesNotMatch(all(d),/uses diffusion only|only uses diffusion|no net loss|matched to healthy blood|far better outcome|die within days|no commercial interest|most reliable|least reliable/u);
 assert.match(all(d),/peritoneal/u);assert.match(all(d),/regimens vary|regimen varies/u);
 assert.equal(d.scenes.find(s=>s.id==='concept-dialysis').diagram.props.species.some(s=>s.behaviour==='balanced'),false);
});
test('potometer arithmetic independently distinguishes linear, volumetric, ratio and repeat statistics',()=>{
 assert.deepEqual(potometerRate(18,6,.5),{linearMmPerMin:3,volumeMm3PerMin:1.5});assert.deepEqual(potometerRate(40,5,.5),{linearMmPerMin:8,volumeMm3PerMin:4});
 const rates=[40,38,42].map(mm=>mm/5);assert.equal(rates.reduce((x,y)=>x+y)/3,8);assert.ok(Math.abs(Math.max(...rates)-Math.min(...rates)-.8)<1e-12);
 assert.equal(8/3,4/1.5);assert.equal(waterStorageChange(20,26),-6);assert.equal(20/5,4);assert.equal(26/5,5.2);
 const d=named('m2-l11');assert.match(all(d),/1 mm³ = 1 μL/u);assert.match(all(d),/0\.50 × 3 = 1\.5/u);assert.match(all(d),/0\.50 × 8 = 4\.0/u);
 assert.doesNotMatch(all(d),/so uptake slightly overstates|limitation affects both readings equally|higher rate with the fan demonstrates|average of eight.*can be trusted/u);
 for(const args of [[1,0,1],[1,1,0],[NaN,1,1],[-1,1,1],[1,Infinity,1]])assert.throws(()=>potometerRate(...args));
 assert.throws(()=>waterStorageChange(NaN,2));
});
test('meiosis mathematical countermodel and potential-combination count do not imply unique products',()=>{
 assert.equal(wholeChromosomeCombinations(3),8);assert.equal(wholeChromosomeCombinations(23),8388608);
 const products=['A','A','a','a'];assert.equal(products.length,4);assert.equal(new Set(products).size,2);
 // Enumerate independent origin choices independently of the implementation.
 const allCombos=new Set();for(const a of ['M','P'])for(const b of ['M','P'])for(const c of ['M','P'])allCombos.add(a+b+c);assert.equal(allCombos.size,8);
 const d=named('m1-l24');assert.match(all(d),/across many meioses/u);assert.match(all(d),/not eight/u);assert.match(all(d),/non-sister/u);assert.match(all(d),/two distinguishable homologous pairs/u);assert.match(all(d),/spores/u);
 assert.doesNotMatch(all(d),/no two alike|every egg and every sperm genetically unique|makes four genetically different gametes|four different haploid cells/u);
 for(const n of [0,-1,1.5,NaN,Infinity,53])assert.throws(()=>wholeChromosomeCombinations(n));
});

test('composition-based preflight holds survive file renaming and apply to recorded and proposed copies',async()=>{
 const {mkdtemp,writeFile,rm}=await import('node:fs/promises'),{tmpdir}=await import('node:os'),path=await import('node:path'),{spawnSync}=await import('node:child_process');
 const temp=await mkdtemp(path.join(tmpdir(),'bio-residual-release-'));
 try{for(const name of names)for(const content of [bytes[name],JSON.stringify(drafts[name])]){
  const file=path.join(temp,'renamed.json');await writeFile(file,content);
  const run=spawnSync(process.execPath,['scripts/release-preflight.mjs',file,'--json'],{encoding:'utf8'});
  assert.notEqual(run.status,0);assert.match(run.stdout,/BIOLOGY_RESIDUAL_SOURCE_REVIEW_PENDING/u,name);
 }}finally{await rm(temp,{recursive:true,force:true});}
});

test('quick-check captions remain prompt-side and do not disclose the worked answer',()=>{
 const captions=Object.fromEntries(names.map(n=>[n,drafts[n].scenes.find(s=>s.id==='quick-check').caption]));
 assert.match(captions[names.find(n=>n.includes('m2-l20'))],/^Identify the driving force/u);
 assert.match(captions[names.find(n=>n.includes('m1-l24'))],/^Separate possible combinations/u);
 for(const c of Object.values(captions))assert.doesNotMatch(c,/40 units|5\.2|eight|2³|monotopic|concentration gradient and a pressure/i);
});

test('renal interval balance requires explicit zero-accumulation and no-other-source/sink assumptions everywhere',()=>{
 const name=names.find(n=>n.includes('m2-l19')),a=biologyResidualArtifacts(name,bytes[name]),by=id=>a.draft.scenes.find(s=>s.id===id);
 for(const id of ['concept-design','worked-example','quick-check','summary']){
  assert.match(all(by(id)),/unchanged tubular solute content/iu,id);
  assert.match(by(id).voiceover.text,/no other sources or sinks/iu,id);
 }
 for(const id of ['worked-example','quick-check']){
  assert.match(by(id).question,/unchanged tubular solute content/iu);
  assert.match(by(id).question,/no other sources or sinks, including production or consumption/iu);
  assert.match((by(id).steps??by(id).answerSteps)[0],/unchanged tubular solute content.*no other sources or sinks/iu);
 }
 const q=a.takes.takes.filter(t=>t.scene==='quick-check');assert.match(q[0].text,/unchanged tubular solute content and no other sources or sinks/iu);assert.match(q[1].text,/no-accumulation and no-other-source-or-sink/iu);
 assert.match(all(by('concept-design').diagram),/Unchanged tubular solute content; no other sources or sinks/u);
 assert.equal(a.review.calculationContract.unchangedTubularSoluteContent,true);assert.equal(a.review.calculationContract.noOtherSourcesOrSinks,true);
 assert.match(a.review.independentTask.prompt,/unchanged tubular solute content.*no other sources or sinks/iu);
 for(const assumptions of [undefined,null,{},true,{unchangedTubularSoluteContent:true},{noOtherSourcesOrSinks:true},{unchangedTubularSoluteContent:false,noOtherSourcesOrSinks:true},{unchangedTubularSoluteContent:true,noOtherSourcesOrSinks:false}])assert.throws(()=>soluteBalance(100,60,20,assumptions),/assumptions required/u);
 // Independent dynamic conservation counterexample: if 5 units accumulate,
 // the same listed transfers yield 55 excreted, not the restricted-model 60.
 assert.equal(100-60+20-5,55);
});
