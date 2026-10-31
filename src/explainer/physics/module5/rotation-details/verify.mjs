import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const code=ts.transpile(fs.readFileSync(new URL('./model.ts',import.meta.url),'utf8'),{module:ts.ModuleKind.ESNext});
const {momentArm,momentDrawing,beam,pendulum,bank}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
for(let a=0;a<=90;a++) {const s=momentArm(a);near(s.d,Math.hypot(s.footX,s.footY));near((s.footX-.4)*s.footX+s.footY*s.footY,0);near(s.torque,50*s.d);}
for(let a=30;a<=75;a++) {
 const s=momentDrawing(a),dx=s.fx-s.ex,dy=s.fy-s.py;
 // The exact SVG foot lies on the drawn force line, perpendicular to pivot-to-foot.
 near(dx*s.uy-dy*s.ux,0);near((s.fx-s.px)*s.ux+(s.fy-s.py)*s.uy,0);
 near(Math.hypot(s.fx-s.px,s.fy-s.py),s.d*1000);
 for(const t of [-s.back,s.forward]) {const x=s.ex+t*s.ux,y=s.py+t*s.uy;assert.ok(x>=60&&x<=710);assert.ok(y>=80&&y<=490);}
 const markU=[s.ux*18,s.uy*18],markV=[s.uy*18,-s.ux*18];near(markU[0]*markV[0]+markU[1]*markV[1],0);
}
near(beam.leftForce*beam.leftArm-beam.rightForce*beam.rightArm,0);near(beam.support-beam.leftForce-beam.rightForce,0);
for(let i=0;i<=100;i++){const s=pendulum(i*.2);near(s.x*s.x+s.z*s.z,s.r*s.r);near(s.r*s.r+s.h*s.h,s.length*s.length);near(s.tension*Math.cos(s.theta),s.weight);near(s.radial,s.omega*s.omega*s.r);}
// Drawing bounds: top bob clears the radius label; side weight clears explanatory copy.
assert.ok(220+120+12<395-34);assert.ok(430+90<575-32);
for(const v of [12,bank(0).design,20]) {const s=bank(v);near(s.normal*Math.cos(s.theta)+s.friction*Math.sin(s.theta),s.mass*s.g);near(s.normal*Math.sin(s.theta)-s.friction*Math.cos(s.theta),s.radial);assert.ok(s.valid);}
assert.ok(bank(12).friction>0);near(bank(bank(0).design).friction,0);assert.ok(bank(20).friction<0);
console.log('PASS: moment geometry, signed beam balance, pendulum projection and dynamics, bank force balances and static-friction capacity.');
