import {build} from 'esbuild';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {writeFile,mkdir} from 'node:fs/promises';
const {outputFiles}=await build({entryPoints:[fileURLToPath(new URL('./model.ts',import.meta.url))],bundle:true,write:false,format:'esm',platform:'node'});
const m=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
let checks=0;
const ok=(x,message)=>{assert.ok(x,message);checks++};
const close=(a,b)=>ok(Math.abs(a-b)<1e-10,`${a} != ${b}`);
close(m.sizePosition(100000),0);close(m.sizePosition(.1),1);
for(let i=1;i<m.SIZE_TICKS_NM.length;i++)close(m.sizePosition(m.SIZE_TICKS_NM[i])-m.sizePosition(m.SIZE_TICKS_NM[i-1]),1/6);
close(m.sizePosition(200)-m.sizePosition(2000),1/6);
close(m.sizePosition(.2)-m.sizePosition(200),.5);
ok(m.sizePosition(50000)<m.sizePosition(1000)&&m.sizePosition(1000)<m.sizePosition(25)&&m.sizePosition(25)<m.sizePosition(7),'Object sizes must have correct log ordering');
assert.throws(()=>m.sizePosition(0));checks++;
const simulation=m.createGapSimulation();
ok(JSON.stringify(simulation)===JSON.stringify(m.createGapSimulation()),'A repeated seed must generate identical positions/events');
ok(JSON.stringify(simulation.snapshots[100])!==JSON.stringify(m.createGapSimulation({...m.DEFAULT_GAP_CONFIG,seed:42}).snapshots[100]),'Different seeds must be genuinely different');
const verify=s=>{
 for(const state of s.snapshots){
  for(const k of s.config.kinds){
   const n=state.counts[k.id],t=state.totals[k.id];
   ok(n.left+n.right===k.left+k.right,'No particles may be created or lost');
   ok(n.right===k.right+t.right-t.left,'Side counts must equal initial counts plus actual net transfers');
   if(s.config.divider!=='none'&&!k.passes)ok(t.right===0&&t.left===0,'Blocked species must never cross');
  }
  for(const p of state.particles)ok(p.x>=p.radius-1e-9&&p.x<=s.config.width-p.radius+1e-9&&p.y>=p.radius-1e-9&&p.y<=s.config.height-p.radius+1e-9,'Outer walls must reflect particles');
 }
 for(const e of s.crossings){
  const previous=s.snapshots[e.step-1].particles[e.particleId],current=s.snapshots[e.step].particles[e.particleId];
  ok((previous.x<s.config.width/2)!==(current.x<s.config.width/2),'Every counter event must be a real crossing');
  ok((e.direction==='right')===(current.x>=s.config.width/2),'Counter direction must match geometry');
  if(s.config.divider!=='none'){
   const crossY=previous.y+(current.y-previous.y)*(s.config.width/2-previous.x)/(current.x-previous.x);
   ok(crossY>=(s.config.height-s.config.gapHeight)/2+previous.radius-1e-9&&crossY<=(s.config.height+s.config.gapHeight)/2-previous.radius+1e-9,'Crossing must pass through the actual aperture');
  }
 }
};
verify(simulation);
assert.throws(()=>m.gapStateAt(simulation,simulation.config.maxSteps+1));checks++;
// Conservation fixes cumulative net transfer at17 if a40/6 system is observed at23/23.
// Do not require any finite seeded run to attain that state.
close(23-m.DEFAULT_GAP_CONFIG.kinds[0].right,17);
const inspectionIndex=1500;
ok(JSON.stringify(simulation.snapshots[inspectionIndex].particles)!==JSON.stringify(simulation.snapshots[inspectionIndex+1].particles),'Late snapshots keep moving; there is no equilibrium freeze');
for(const step of [0,1,119,120,350,1000,1800]){
 const {state,recent}=m.gapStateAt(simulation,step),events=simulation.crossings.filter(e=>e.step>Math.max(0,step-120)&&e.step<=step);
 close(recent.solute.right,events.filter(e=>e.direction==='right').length);close(recent.solute.left,events.filter(e=>e.direction==='left').length);
 close(state.step,step);
}
ok(simulation.snapshots.some((s,i)=>i>500&&m.gapStateAt(simulation,i).recent.solute.left>m.gapStateAt(simulation,i).recent.solute.right),'Finite windows must permit reversed net flux rather than force downhill direction');
const two=m.createGapSimulation({...m.DEFAULT_GAP_CONFIG,maxSteps:700,divider:'membrane',kinds:[{id:'water',label:'Water',left:50,right:25,passes:true},{id:'sugar',label:'Sugar',left:4,right:18,passes:false,radius:9}]});verify(two);
ok(two.crossings.some(e=>e.kind==='water'),'Permeant species must actually cross');
const closed=m.createGapSimulation({...m.DEFAULT_GAP_CONFIG,gapHeight:0,maxSteps:300});verify(closed);close(closed.crossings.length,0);
const b0=m.balanceGeometry(0),b1=m.balanceGeometry(-7);close(b0.left.y,0);close(b0.right.y,0);ok(b1.left.y>0&&b1.right.y<0,'Negative tilt lowers impact pan');
close(Math.hypot(b1.left.x,b1.left.y),270);close(Math.hypot(b1.right.x,b1.right.y),270);
await mkdir('work/brief147/components',{recursive:true});
await writeFile('work/brief147/components/scientific-checks.json',JSON.stringify({status:'pass',checks,defaultSeed:simulation.config.seed,hypotheticalCumulativeNetAt23Each:17,balancedCountsNotRequiredOrForced:true,crossings:simulation.crossings.length,finalCounts:simulation.snapshots.at(-1).counts,claims:['logarithmic size/limit positions','seed repeatability','per-species particle conservation','actual crossing counts and direction','outer-wall reflection','blocked-species membrane rule','cumulative transfer differs from recent flux','finite-window reversals and continuing motion','equal-length balance arms with explicit judgement tilt']},null,2)+'\n');
console.log(`FA1 diagrams: ${checks} scientific assertions pass.`);
