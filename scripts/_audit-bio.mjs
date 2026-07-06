import {execSync} from 'node:child_process';
import {readFileSync, readdirSync} from 'node:fs';

// 1. validate audit (bio only)
let out = '';
try { out = execSync('node scripts/validate-lesson.mjs 2>&1', {encoding:'utf8', shell:true}); } catch(e){ out = e.stdout||''; }
const intentional = (e)=>/missing non-empty "body"/i.test(e)||/missing.*voiceover/i.test(e);
const blocks = out.split(/\n(?=\S)/);
let bio=0, clean=0; const cats={};
for (const b of blocks){
  const first=b.split('\n')[0].trim();
  if(!/biology-y12-.*\.json/.test(first)) continue;
  bio++;
  const errs=[...b.matchAll(/^\s*error:\s*(.+)$/gim)].map(m=>m[1].trim()).filter(e=>!intentional(e));
  if(errs.length===0) clean++;
  for(const e of errs){const c=e.replace(/scene\[\d+\]\s*\([^)]*\):\s*/i,'').trim(); cats[c]=(cats[c]||0)+1;}
}
console.log(`BIO validate: ${bio} files | clean (intentional only): ${clean}`);
console.log('Non-intentional error categories:'); 
const ce=Object.entries(cats); if(!ce.length) console.log('  (none) ✓'); else ce.forEach(([c,n])=>console.log(`  ${n}× ${c}`));

// 2. supported scene + diagram types
const SCN=new Set(['title','hook','concept','definition','formula','workedExample','misconception','quickCheck','summary','marginalia','labFootage','endCard','mnemonic']);
const drsrc=readFileSync('src/slides/diagrams/DiagramRenderer.tsx','utf8');
const DIA=new Set([...drsrc.matchAll(/case '([a-zA-Z]+)'/g)].map(m=>m[1]));
const badScn=[], badDia=[], diaUse={};
const bioFiles=readdirSync('src/data').filter(f=>/^biology-y12-/.test(f)&&f.endsWith('.json'));
let longL=[], shortL=[];
for(const f of bioFiles){
  const d=JSON.parse(readFileSync('src/data/'+f,'utf8'));
  let words=0;
  if(d.introVoiceover?.text) words+=d.introVoiceover.text.trim().split(/\s+/).length;
  for(const s of d.scenes||[]){
    if(!SCN.has(s.type)) badScn.push(`${f}: ${s.type}`);
    if(s.diagram){const t=s.diagram.type; diaUse[t]=(diaUse[t]||0)+1; if(!DIA.has(t)) badDia.push(`${f}: ${t}`);}
    if(s.voiceover?.text) words+=s.voiceover.text.trim().split(/\s+/).length;
  }
  const min=words/145;
  if(min>10.5) longL.push(`${f.replace('biology-y12-','').replace('.json','')}: ${min.toFixed(1)}m`);
  if(min<5) shortL.push(`${f.replace('biology-y12-','').replace('.json','')}: ${min.toFixed(1)}m`);
}
console.log(`\nUnsupported scene types: ${badScn.length}`); badScn.forEach(x=>console.log('  ✗ '+x));
console.log(`Unsupported diagram types: ${badDia.length}`); badDia.forEach(x=>console.log('  ✗ '+x));
console.log(`\nBio diagram usage:`); Object.entries(diaUse).sort((a,b)=>b[1]-a[1]).forEach(([t,n])=>console.log(`  ${n}× ${t}`));
console.log(`\nOver-length (>10.5 min spoken @145wpm): ${longL.length}`); longL.sort().forEach(x=>console.log('  ⚠ '+x));
console.log(`Under-length (<5 min): ${shortL.length}`); shortL.forEach(x=>console.log('  ⚠ '+x));
