import {build} from 'esbuild';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const {outputFiles}=await build({entryPoints:[fileURLToPath(new URL('./model.ts',import.meta.url))],bundle:true,write:false,format:'esm',platform:'node'});
const m=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const close=(a,b,tol=1e-10)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
close(m.mean(m.PRACTICAL.ranges),.808);close(m.halfRange(m.PRACTICAL.ranges),.01);
const truth=m.PRACTICAL.g/(2*m.PRACTICAL.launchSpeed**2),bounds=m.compatibleSlopes(),points=m.practicalPoints();
assert.ok(bounds.low<truth&&bounds.high>truth);
const compatible=s=>points.every(p=>s*p.x2hi>=p.hlo-1e-12&&s*p.x2lo<=p.hhi+1e-12);
for(const s of [bounds.low,truth,bounds.high])assert.ok(compatible(s));
assert.ok(!compatible(bounds.low-.001));assert.ok(!compatible(bounds.high+.001));
for(const p of points){assert.ok(p.x2lo<p.x2&&p.x2<p.x2hi);close(p.h,truth*p.x2);}
assert.ok(m.speedFromSlope(bounds.high)<2&&m.speedFromSlope(bounds.low)>2);
close(m.speedFromSlope(truth),2);
close(m.selectedSlopeAt(.4),bounds.low);close(m.selectedSlopeAt(.6),bounds.low);
close(m.selectedSlopeAt(.8),bounds.high);close(m.selectedSlopeAt(1),bounds.high);
assert.ok(m.selectedSlopeAt(.7)>bounds.low&&m.selectedSlopeAt(.7)<bounds.high);
console.log('Practical details: mean/half-range, squared intervals, feasible gradient bounds, inverse speed relation and endpoint holds pass.');
