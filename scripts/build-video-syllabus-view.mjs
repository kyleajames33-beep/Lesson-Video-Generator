import fs from 'node:fs';
import {createHash} from 'node:crypto';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const clean=value=>String(value??'').replaceAll('\u2014',',');
const normal=value=>clean(value).toLowerCase().replace(/[^a-z0-9]/g,'');
const ledgerPath='docs/production/course-progression-ledger-2026-10-09.json';
const continuityPath='docs/production/curriculum-continuity-2026-10-08.json';
const officialPath='out/research/continuity-2026-10-08/official-content.json';
const checklistPath='docs/production/course-content-checklist-2026-10-09.json';
const ledger=read(ledgerPath),continuity=read(continuityPath),official=read(officialPath),checklist=read(checklistPath);
const points=new Map(official.points.map(point=>[point.id,point]));
const oldParagraphs=Object.fromEntries(['Biology','Chemistry'].map(subject=>[subject,read(`out/research/continuity-2026-10-08/${subject.toLowerCase()}-2017-paragraphs.json`).paragraphs]));
const outcomes={fa0edb304c:'BI-11-01',fa79a477bc:'BI-11-02',fad715a0de:'BI-11-03',fab2288036:'BI-12-01',facdcec83d:'BI-12-02',fa0a6a1d67:'BI-12-03',fa610240ba:'BI-12-04',fa3318146f:'CH-11-01',faf0876f2f:'CH-11-02',fa4c5f59fc:'CH-11-03',fad224f44b:'CH-12-01',fa5c257b16:'CH-12-02',fa9677511e:'CH-12-03',fac41998e6:'CH-12-04'};
const triage=new Map(continuity.lessons.map(row=>[row.file,row]));
const rows=ledger.inventory.map(row=>{
 if(hash(row.sourcePath)!==row.sourceSha256)throw Error('Source drift: '+row.sourcePath);
 const lesson=read(row.sourcePath), prior=triage.get(row.sourcePath), bio11=row.subject==='Biology'&&row.yearLevel==='Year 11';
 const declared=(lesson.syllabusDotPoints??[]).map(clean);
 const references=new Map();
 const add=(id,basis)=>{const point=points.get(id);if(!point)throw Error('Unknown official point: '+id);if(point.subject!==row.subject.toLowerCase())throw Error('Wrong subject point');const item=references.get(id)??{id,subject:row.subject,year:point.year,focusArea:clean(point.focusArea),group:clean(point.group),text:clean(point.text),including:clean(point.including),url:point.url,contentSha256:point.contentSha256,outcome:outcomes[point.area]??null,bases:[]};if(!item.bases.includes(basis))item.bases.push(basis);references.set(id,item);};
 for(const evidence of prior?.newEvidence??[])add(evidence.id,'Existing continuity point reference');
 const exact=[];
 for(const point of official.points.filter(point=>point.subject===row.subject.toLowerCase())){
  if(declared.some(text=>normal(text)===normal(point.text)||normal(text)===normal(point.text+' '+point.including))){add(point.id,'Exact normalised match to lesson-declared metadata');exact.push(normal(point.text),normal(point.text+' '+point.including));}
 }
 const plannedIds=checklist.plannedVideos.filter(video=>video.sourcePath===row.sourcePath).map(video=>video.id);
 for(const point of checklist.points)if(point.actions.some(action=>action.plannedVideos.some(id=>plannedIds.includes(id))))add(point.id,'Provisional required-action checklist candidate');
 const newPoints=[...references.values()];
 const candidateAreas=ledger.areas.filter(area=>area.version==='2025'&&area.subject===row.subject&&normal(row.curriculum.provisionalTarget).includes(normal(area.title))).map(area=>({year:area.year,title:area.title,url:area.officialUrl,outcome:outcomes[area.areaId],basis:'Explicit focus-area name in the provisional continuity crosswalk'}));
 const newAreas=new Map(candidateAreas.map(area=>[area.year+' '+area.title,area]));
 for(const point of newPoints)newAreas.set(point.year+' '+point.focusArea,{year:point.year,title:point.focusArea,url:point.url,outcome:point.outcome,basis:point.bases.join('; ')});
 if(bio11){for(const [key,area]of newAreas)if(area.year!==11)newAreas.delete(key);}
 const oldPoints=bio11?[]:declared.map(text=>({text,matches:oldParagraphs[row.subject].filter(p=>normal(p.text)===normal(text)).map(p=>p.id)})).filter(point=>point.matches.length);
 const matched=new Set([...exact,...oldPoints.map(point=>normal(point.text))]);
 const unclassified=bio11?[]:declared.filter(text=>!matched.has(normal(text)));
 const expected=new Set([...newAreas.values()].map(area=>area.outcome).filter(Boolean));
 const flags=[...(prior?.flags??[]).map(clean)];
 if(bio11&&(lesson.nesaOutcomes??[]).some(outcome=>/^BI-11-0[1-3]$/.test(outcome)&&!expected.has(outcome)))flags.push('Declared knowledge outcome conflicts with the 2025 focus-area mapping. Repair metadata before production.');
 if(bio11&&!(lesson.nesaOutcomes??[]).length)flags.push('Missing declared outcome metadata. The mapped focus-area outcome is shown separately.');
 if(!newPoints.length)flags.push('Specific 2025 content-point mapping remains pending.');
 if(!row.curriculum.triageSourceMatchesCurrent)flags.push('Continuity source changed since topic comparison. Reconcile before reusing.');
 const sourceModule=Number(row.id.match(/-M(\d+)/)[1]);
 const oldArea=bio11?null:ledger.areas.find(area=>area.version==='2017'&&area.subject===row.subject&&area.year===Number(row.yearLevel.match(/\d+/)[0])&&area.candidateRule.registryModule===sourceModule);
 return {id:row.id,subject:row.subject,sourceYear:Number(row.yearLevel.match(/\d+/)[0]),title:clean(row.title),lessonNumber:clean(lesson.lesson),sourcePath:row.sourcePath,sourceSha256:row.sourceSha256,declaredSyllabus:clean(row.declaredSyllabus),declaredOutcomes:bio11?(lesson.nesaOutcomes??[]).filter(outcome=>/^(BI-11|BI-11WS)/.test(outcome)):(lesson.nesaOutcomes??[]),oldSyllabus:oldArea?{edition:2017,year:oldArea.year,module:oldArea.candidateRule.registryModule,title:clean(oldArea.title),url:`https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/${row.subject.toLowerCase()}-stage-6-2017`,matchedPoints:oldPoints}:null,newAreas:[...newAreas.values()].sort((a,b)=>a.year-b.year||a.title.localeCompare(b.title)),newPoints:newPoints.sort((a,b)=>a.year-b.year||a.group.localeCompare(b.group)),unclassifiedDeclaredPoints:unclassified,category:bio11?'2025 Year 11 course':clean(row.curriculum.triageCategory),crosswalkTarget:clean(row.curriculum.provisionalTarget),mappingStatus:newPoints.length?'Point references available, coverage review pending':'Focus-area/topic candidate only',productionState:clean(row.productionState),publication:row.publication,selectedRevision:row.selectedRevision,boundaries:row.boundaries,prerequisites:row.prerequisites,flags:[...new Set(flags)],coverageApproved:false};
}).sort((a,b)=>a.subject.localeCompare(b.subject)||a.sourceYear-b.sourceYear||a.id.localeCompare(b.id,undefined,{numeric:true}));
if(rows.length!==308||new Set(rows.map(row=>row.id)).size!==308)throw Error('Incomplete catalogue');
if(rows.filter(row=>row.subject==='Biology'&&row.sourceYear===11).some(row=>row.oldSyllabus!==null||row.unclassifiedDeclaredPoints.length))throw Error('Year 11 Biology must show only the 2025 syllabus');
const counts=Object.fromEntries(['Chemistry','Biology'].flatMap(subject=>[11,12].map(year=>[subject+' Year '+year,rows.filter(row=>row.subject===subject&&row.sourceYear===year).length])));
const data={generatedAt:new Date().toISOString(),scope:'Complete registered video-source list and existing syllabus references. Not a publication or complete dotpoint-coverage certificate.',policy:'Year 11 Biology shows the 2025 syllabus only. Chemistry and Year 12 Biology show 2017 placement alongside proposed 2025 placement. Source year and destination syllabus year are separate.',evidenceBoundary:'Detailed 2025 points use official pages cached 8 October 2026. Course-overview implementation checked live 9 October. Direct point references, metadata text matches and planned action candidates are distinguished. Mathematical notation may be flattened in extracted source text.',counts,inputs:[ledgerPath,continuityPath,officialPath,checklistPath].map(path=>({path,sha256:hash(path)})),rows};
const target='docs/production/video-syllabus-map-2026-10-09.json';
fs.writeFileSync(target,JSON.stringify(data,null,2)+'\n');
const esc=value=>clean(value).replaceAll('|','\\|').replaceAll('\n',' ');
let md='# Video list and syllabus mapping\n\n'+data.policy+'\n\n'+data.evidenceBoundary+'\n\nCatalogue counts are source drafts, not finished or published videos. No complete course coverage is certified.\n\n';
for(const subject of ['Chemistry','Biology'])for(const year of [11,12]){
 md+=`## ${subject}: source Year ${year}\n\n`;
 if(subject==='Biology'&&year===11)md+='2025 syllabus only. The three numbered source groups are the three new focus areas, not legacy modules.\n\n';
 md+='| Video | 2017 syllabus | 2025 syllabus and point references | Production status |\n| --- | --- | --- | --- |\n';
 for(const row of rows.filter(row=>row.subject===subject&&row.sourceYear===year)){
  const old=row.oldSyllabus?`Module ${row.oldSyllabus.module}: ${row.oldSyllabus.title}`:'Not used for this course';
  const mapped=row.newAreas.map(area=>`[Y${area.year}: ${area.title}](${area.url})`).join('; ')||'Legacy-only or unassigned, see provisional crosswalk';
  md+=`| ${esc(row.id)}: ${esc(row.title)} | ${esc(old)} | ${mapped}. ${row.newPoints.map(point=>`[${point.id}](${point.url})`).join(', ')||'Point mapping pending'} | ${esc(row.productionState)} |\n`;
 }
 md+='\n';
}
md+='## Per-video dotpoint details\n\nReferences indicate relevance. They do not establish that every required action is taught or performed. Unmatched lesson metadata remains labelled as declared text rather than being assigned to a guessed edition.\n\n';
for(const row of rows){
 md+=`### ${row.id}: ${row.title}\n\nSource: [lesson](../../${row.sourcePath}). Status: ${row.productionState}.\n\n`;
 if(row.newPoints.length){md+='2025 content references:\n\n';for(const point of row.newPoints)md+=`- [${point.id}](${point.url}): Y${point.year}, ${point.focusArea}, ${point.group}. ${point.text}${point.including?' Including: '+point.including:''} Basis: ${point.bases.join('; ')}.\n`;md+='\n';}
 else md+='2025 specific dotpoint mapping pending. Provisional topic target: '+row.crosswalkTarget+'.\n\n';
 if(row.oldSyllabus?.matchedPoints.length){md+='2017 exact metadata text matches in the pinned official extraction:\n\n';for(const point of row.oldSyllabus.matchedPoints)md+=`- ${point.matches.join(', ')}: ${point.text}\n`;md+='\n';}
 if(row.unclassifiedDeclaredPoints.length){md+='Lesson-declared references without an exact edition match:\n\n'+row.unclassifiedDeclaredPoints.map(text=>'- '+text).join('\n')+'\n\n';}
 if(row.flags.length)md+='Mapping notes: '+row.flags.join(' ')+'\n\n';
}
fs.writeFileSync('docs/production/video-syllabus-map-2026-10-09.md',md.trimEnd()+'\n');
const output='out/prototypes/video-syllabus-map-2026-10-09';fs.mkdirSync(output,{recursive:true});
fs.copyFileSync(target,output+'/mapping.json');
fs.copyFileSync('docs/production/video-syllabus-map-2026-10-09.md',output+'/video-list.md');
fs.copyFileSync('scripts/templates/video-syllabus-map.html',output+'/index.html');
console.log(JSON.stringify({counts,rows:rows.length,with2025PointReferences:rows.filter(row=>row.newPoints.length).length,year11BiologyLegacyMappings:0,output},null,2));
