import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const js=ts.transpileModule(fs.readFileSync(new URL('./model.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const m=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
let checks=0;
const near=(a,b,tol=1e-10)=>{assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);checks++;};
near(m.gamma(.6),1.25);near(m.gamma(.8),5/3);assert.throws(()=>m.gamma(1),RangeError);checks++;
near(m.slitIntensity(0),1);near(m.slitIntensity(1),0);near(m.slitIntensity(-1),0);
near(m.doubleSlitIntensity(.125),0);near(m.doubleSlitIntensity(0),1);
near(m.doubleSlitIntensity(.125,4,false),.5*m.slitIntensity(.125));
near(m.gratingIntensity(0),1);near(m.gratingIntensity(1/24),0);
for(let x=-2;x<=2;x+=.013){for(const f of [m.slitIntensity,m.doubleSlitIntensity,m.gratingIntensity]){const v=f(x);assert.ok(v>=0&&v<=1+1e-10);near(v,f(-x));}}
near(m.malus(1,90),0);near(m.malus(m.malus(.5,45),45),.125);
assert.equal(m.photoelectronEV(4e14,2.2),null);checks++;
near(m.photoelectronEV(8e14,2.2),m.PLANCK*8e14/m.ELECTRON_VOLT-2.2);
const threshold=2.2*m.ELECTRON_VOLT/m.PLANCK/1e14;
for(const p of [.3,.5,1]){const f=4+6*p,q=m.clamp((f-threshold)/(10-threshold));near(threshold+(10-threshold)*q,f);}
near(m.shiftedWavelength(656.3,.08),708.804);
for(const beta of [-.8,0,.6]){const a=m.lorentz(2,3,beta);near(m.interval(a.x,a.ct),m.interval(2,3));const b=m.lorentz(a.x,a.ct,-beta);near(b.x,2);near(b.ct,3);}
assert.ok(m.lorentz(1,0,.6).ct<m.lorentz(-1,0,.6).ct);checks++;
for(const beta of [.01,.6,.95]){near((m.energyRatio(beta)+1)**2-m.momentumRatio(beta)**2,1);assert.ok(m.energyRatio(beta)>.5*beta*beta);checks++;}
near(2*Math.hypot(135,180),450);near(270/450,.6);near(450/360,m.gamma(.6));
assert.equal([...fs.readFileSync(new URL('./index.tsx',import.meta.url),'utf8').matchAll(/id:'m7-/g)].length,10);checks++;
for(const file of ['model.ts','index.tsx','README.md'])assert.ok(!fs.readFileSync(new URL(file,import.meta.url),'utf8').includes('\u2014'));
console.log(`Module 7 science checks passed: ${checks}. Playback and independent review pending.`);

