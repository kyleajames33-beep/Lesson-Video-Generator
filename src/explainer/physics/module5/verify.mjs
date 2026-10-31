import {build} from 'esbuild';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const {outputFiles}=await build({entryPoints:[path.join(dir,'model.ts')],bundle:true,write:false,format:'esm',platform:'node'});
const m=await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);
const close=(a,b,tol=1e-7)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
close(m.trajectory(20,30).range,m.trajectory(20,60).range);
assert.ok(m.trajectory(20,45).range>m.trajectory(20,30).range);
close(m.trajectory(15,0,10).duration,Math.sqrt(2));
close(m.torque(.4,50,90),20);
for(let i=0;i<=200;i++){
  const p=i/200,c=m.circular(2*Math.PI*p,2,4),v=m.verticalLoopAt(p),o=m.circularOrbit(7e6*(1+p)),k=m.keplerState(p*2*Math.PI,1,.55);
  close(c.vx*c.ax+c.vy*c.ay,0);
  close(Math.hypot(c.ax,c.ay),8);
  close(.5*v.speed**2+10*v.height,60);
  assert.ok(v.tensionPerMass>=0);
  close(o.kinetic+o.potential,o.total,1e-6);
  close(o.period**2/(7e6*(1+p))**3,4*Math.PI**2/m.MU);
  close(k.sweptFraction,p);
  close((k.x+.55)**2+k.y*k.y/(1-.55**2),1);
}
console.log('Module 5: projectile symmetry, range, torque, circular orthogonality, loop energy, orbit energy, Kepler area/time and ellipse checks passed.');
