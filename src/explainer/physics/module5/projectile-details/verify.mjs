import {build} from 'esbuild';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const {outputFiles}=await build({entryPoints:[path.join(dir,'model.ts')],bundle:true,write:false,format:'esm',platform:'node'});
const m=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
close(Math.hypot(m.resolution.vx,m.resolution.vy),20);
close(m.resolution.vy,10);
close(m.rangeCase.at(m.rangeCase.duration).y,0);
close(m.rangeCase.duration,2*m.rangeCase.vy/9.8);
close(m.rangeCase.range,400*Math.sin(70*Math.PI/180)/9.8);
close(m.obstacleFlight.at(m.wallTime).x,25);
close(m.wallHeight,15+m.obstacleFlight.vy*m.wallTime-4.9*m.wallTime**2);
assert.ok(m.wallHeight>18&&m.wallHeight<19);
assert.ok(m.wallHeight-m.obstacle.wall>10);
close(m.targetFlights[0].degrees+m.targetFlights[1].degrees,90);
for(const f of m.targetFlights){close(f.range,72);close(f.at(f.duration).y,0);}
assert.ok(m.targetFlights[1].duration>m.targetFlights[0].duration);
// Verify actual equal-scale drawing coordinates stay in their subject stage.
for(const [f,s,x,y] of [[m.rangeCase,20,90,405],...m.targetFlights.map(f=>[f,7,90,405])]){
 for(let i=0;i<=200;i++){const q=f.at(f.duration*i/200);assert.ok(x+q.x*s<=1030);assert.ok(y-q.y*s>=125);assert.ok(y-q.y*s<=406);}
}
for(let i=0;i<=200;i++){
 const q=m.obstacleFlight.at(m.wallTime*i/200);assert.ok(160+q.x*13<=650);assert.ok(405-q.y*13>=125);
}
assert.equal(m.beat(-1,0,1),0);assert.equal(m.beat(2,0,1),1);
console.log('Projectile details: component norm, range derivation, wall datum/clearance, both target roots and equal-scale drawing bounds passed.');
