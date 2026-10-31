import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';
const source=readFileSync(new URL('./model.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ES2022}}).outputText;
const m=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
near(m.electric(100,.02,-1.6e-19,9.11e-31).E,5000);
assert.ok(m.electric(100,.02,-1,1).F<0);
near(m.selectorForce(1,12,3,4),0);
near(m.selectorForce(-1,12,4,4),-4);
near(m.orbitRadius(2,3,1,4)/m.orbitRadius(1,3,1,4),2);
near(m.wireForcePerLength(2,3,.2)/m.wireForcePerLength(2,3,.4),2);
near(m.coilTorque(1,1,1,1,0),1);near(m.coilTorque(1,1,1,1,Math.PI/2),0);
for(let a=0;a<6.2;a+=.1){const h=1e-5;const derivative=(m.generator(a+h).linkage-m.generator(a-h).linkage)/(2*h);near(m.generator(a).emf,-derivative,1e-8);}
for(const v of [.1,1,4]){const r=m.slidingRod(.5,.4,v,2);near(r.mechanicalPower,r.heatPower);}
const tr=m.transformer(100,4,100,200);near(tr.Vs*tr.Is,400);near(tr.Is,2);
near(m.lineLoss(1000,200,2)/m.lineLoss(1000,100,2),.25);
assert.ok(m.motorCurrent(12,2,1,8)<m.motorCurrent(12,2,1,0));near(m.motorCurrent(12,2,1,0),6);
near(m.slip(50,40),.2);near(m.slip(50,50),0);
const index=readFileSync(new URL('./index.tsx',import.meta.url),'utf8');assert.ok(!index.includes('\u2014'));assert.equal((index.match(/make\('/g)||[]).length,12);
console.log('Module 6: 12 visual registrations; force signs, radius, inverse distance, torque angle, Faraday derivative, rod energy, transformer power, line-loss ratio and slip pass.');
