import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
const file=process.argv[2]??'docs/production/course-content-checklist-2026-10-09.json';
const raw=readFileSync(file,'utf8'), data=JSON.parse(raw), blockers=[];
const digest=value=>createHash('sha256').update(value).digest('hex');
const hash=file=>digest(readFileSync(file));
const must=(condition,detail)=>{if(!condition)blockers.push(detail);};
must(data.schemaVersion===1&&!raw.includes('\u2014'),'Schema or punctuation invalid.');
const extraction=data.sources.extraction;
must(existsSync(extraction.path)&&hash(extraction.path)===extraction.sha256,'Official extraction missing/drifted.');
const official=JSON.parse(readFileSync(extraction.path,'utf8'));
const officialPages=official.sources.filter(page=>['faf0876f2f','fa0edb304c'].includes(page.area));
must(data.sources.pages.length===2&&officialPages.every(original=>data.sources.pages.some(page=>page.area===original.area&&page.file===original.file&&page.sha256===original.sha256&&page.url===original.url)),'Missing or mismatched official page provenance.');
const enzymeIds=['ci39fc23e2','ciaeeb3210','ci75e851a5','cia9a328b1'];
const expected=official.points.filter(point=>(point.subject==='chemistry'&&point.area==='faf0876f2f')||enzymeIds.includes(point.id));
must(expected.length===31&&data.points.length===31&&new Set(data.points.map(point=>point.id)).size===31,'Missing/extra mandatory points.');
const byId=new Map(expected.map(point=>[point.id,point]));
const videoIds=new Set(data.plannedVideos.map(video=>video.id));
for(const page of data.sources.pages)must(existsSync(page.file)&&hash(page.file)===page.sha256,'Official page drifted: '+page.file);
for(const video of data.plannedVideos){if(video.sourcePath)must(existsSync(video.sourcePath)&&hash(video.sourcePath)===video.sourceSha256,'Candidate source drifted: '+video.id);if(video.selectedRevision)must(existsSync(video.selectedRevision.path)&&hash(video.selectedRevision.path)===video.selectedRevision.sha256,'Selected revision drifted: '+video.id);}
for(const point of data.points){
 const original=byId.get(point.id);
 must(Boolean(original),'Invented or out-of-scope ID: '+point.id);
 if(original){must(point.group===original.group&&point.official.text===original.text&&point.official.including===original.including&&point.official.examples===original.examples&&point.official.url===original.url&&point.official.rawPage===officialPages.find(page=>page.area===original.area)?.file,'Official action/group changed: '+point.id);must(point.official.contentSha256===original.contentSha256&&digest(JSON.stringify({text:original.text,including:original.including,examples:original.examples}))===original.contentSha256,'Official action hash drifted: '+point.id);}
 must(point.claimedComplete===false&&point.coverageStatus==='provisional-not-approved','Unsupported point approval: '+point.id);
 must(Array.isArray(point.actions)&&point.actions.length>0,'Missing actions: '+point.id);
 for(const action of point.actions??[]){must(Boolean(action.requiredAction&&action.gap)&&action.plannedVideos.length>0&&action.plannedVideos.every(id=>videoIds.has(id)),'Action missing scope/gap/video: '+point.id+'/'+action.key);must(action.claimedComplete===false&&action.sceneEquivalence==='pending'&&action.reviewEvidence===null,'Unsupported action approval: '+point.id+'/'+action.key);if(action.kind==='practical-conduct')must(action.status==='conduct-not-evidenced','Practical conduct inferred from video: '+point.id);}
}
const point=id=>data.points.find(row=>row.id===id);
for(const id of ['cic640839c','cia8281b8c']){
 const facets=point(id)?.actions.map(row=>row.requiredFacet)??[];
 must(facets.length===8&&new Set(facets).size===8&&['mol L-1','g L-1','mg L-1','% (w/w)','% (w/v)','% (v/v)','ppm','ppb'].every(value=>facets.includes(value)),'All eight concentration measures need distinct actions: '+id);
}
must(point('ci18f59d1c')?.actions.length===3,'n, m and MM calculation cases must remain distinct.');
must(point('cidc3eeb7d')?.actions.length===3,'C, n and V cases must remain distinct.');
must(point('cibccbf29b')?.actions.length===2,'Percentage composition and empirical inference must remain distinct.');
must(point('ci75e851a5')?.actions.length===6&&point('ci75e851a5').actions.filter(row=>row.kind==='practical-conduct').length===3,'All three enzyme factors need separate planning/conduct actions.');
must(point('cia9a328b1')?.actions.length===3,'All three enzyme graph factors need analysis/explanation actions.');
must(point('ciaeeb3210')?.actions.length===2,'Both enzyme models need diagram/explanation actions.');
console.log(JSON.stringify({valid:!blockers.length,officialPoints:data.points.length,actions:data.points.reduce((sum,row)=>sum+(row.actions?.length??0),0),blockers,limitation:'Checks completeness against the cached selected points, dependencies and honest status. No semantic teaching or actual practical conduct approval.'},null,2));
if(blockers.length)process.exitCode=1;
