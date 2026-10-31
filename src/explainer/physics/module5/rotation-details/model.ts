export const clamp = (p:number) => Math.max(0,Math.min(1,p));
export const momentArm = (degrees:number,r=.4,f=50) => {
 const a=degrees*Math.PI/180;
 return {a,d:r*Math.sin(a),torque:r*f*Math.sin(a),footX:r*Math.sin(a)**2,footY:r*Math.sin(a)*Math.cos(a)};
};
/** SVG uses downward-positive y. Keep the drawing projection testable. */
export const momentDrawing = (degrees:number) => {
 const s=momentArm(degrees),px=150,py=260,ex=550,scale=1000;
 const ux=Math.cos(s.a),uy=-Math.sin(s.a),back=400*Math.cos(s.a)+25;
 return {...s,px,py,ex,fx:px+s.footX*scale,fy:py+s.footY*scale,ux,uy,back,forward:175};
};
export const beam = {leftForce:30,leftArm:2,rightForce:20,rightArm:3,support:50};
export const pendulum = (phase:number) => {
 const theta=Math.PI/6,length=2,g=10,mass=1,r=length*Math.sin(theta),h=length*Math.cos(theta),tension=mass*g/Math.cos(theta),omega=Math.sqrt(g/h);
 return {theta,length,r,h,tension,omega,period:2*Math.PI/omega,x:r*Math.cos(phase),z:r*Math.sin(phase),radial:tension*Math.sin(theta),weight:mass*g};
};
/** f is signed positive up the bank (outward). Constant-speed circular states. */
export const bank = (speed:number) => {
 const theta=30*Math.PI/180,mass=1000,radius=50,g=10,q=mass*speed**2/radius;
 const normal=q*Math.sin(theta)+mass*g*Math.cos(theta),friction=mass*g*Math.sin(theta)-q*Math.cos(theta);
 return {theta,mass,radius,g,normal,friction,radial:q,design:Math.sqrt(radius*g*Math.tan(theta)),mu:.5,valid:Math.abs(friction)<=.5*normal};
};
