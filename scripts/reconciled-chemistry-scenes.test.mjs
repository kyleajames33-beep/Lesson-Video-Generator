import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {reconciledChemistrySources,reconciledChemistryScenes} from './lib/reconciled-chemistry-scenes.mjs';
import {getVoiceoverBudget} from './lesson-utils.mjs';
for(const name of Object.keys(reconciledChemistrySources))test(name+': isolated source guard, media invalidation and timing floors',async()=>{
 const bytes=await readFile('src/data/'+name+'.json'),original=JSON.parse(bytes),items=reconciledChemistryScenes(name,bytes);
 assert.throws(()=>reconciledChemistryScenes(name,Buffer.concat([bytes,Buffer.from(' ')])),/Source changed/u);
 for(const item of items){
  const s=item.scene,before=original.scenes.find(s=>s.id===item.scene.id);
  assert.equal(s.type,before.type);assert.equal(s.image,before.image);assert.equal(s.diagram?.type,before.diagram?.type);
  assert.ok(s.durationInFrames>=before.durationInFrames);
  assert.equal(getVoiceoverBudget({text:s.voiceover.text,durationInFrames:s.durationInFrames,fps:original.fps}).status,'ok');
  for(const key of ['audioFile','alignment','captions','revealDelays','startFrame','endFrame'])assert.ok(!JSON.stringify(s).includes('"'+key+'"'));
  assert.ok(!JSON.stringify(s).includes('\u2014'));
  if(item.response)assert.equal(s.voiceover.text,item.response.promptText+' '+item.response.answerText);
 }
});
test('rounding corrections retain supplied inputs and guard digits',()=>{
 assert.ok(Math.abs(79*.5069+81*.4931-79.9862)<1e-12);
 assert.equal((.1*((18.45+18.50+18.48)/3)/25).toPrecision(4),'0.07391');
 assert.equal((.1*((22.3+22.4+22.3)/3)/25).toPrecision(3),'0.0893');
 assert.notEqual((.00223/.025).toPrecision(3),'0.0893');
});
test('two supplied combustion vectors cannot contain H2; the added datum closes Hess balance',()=>{
 const ethyne={C2H2:-1,O2:-2.5,CO2:2,H2O:1},ethane={C2H6:-1,O2:-3.5,CO2:2,H2O:3},hydrogen={H2:-1,O2:-.5,H2O:1};
 assert.equal(ethyne.H2??0,0);assert.equal(ethane.H2??0,0);
 const combined=Object.fromEntries([...new Set([...Object.keys(ethyne),...Object.keys(ethane),...Object.keys(hydrogen)])].map(k=>[k,(ethyne[k]??0)+2*(hydrogen[k]??0)-(ethane[k]??0)]).filter(([,v])=>v!==0));
 assert.deepEqual(combined,{C2H2:-1,C2H6:1,H2:-2});
});
