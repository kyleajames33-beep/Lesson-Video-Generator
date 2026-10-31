export const clamp = (p:number) => Math.max(0,Math.min(1,p));
export const electric = (voltage:number,d:number,q:number,m:number) => {const E=voltage/d;return {E,F:q*E,a:q*E/m};};
export const orbitRadius = (m:number,v:number,q:number,B:number) => m*v/(Math.abs(q)*B);
export const selectorForce = (q:number,E:number,v:number,B:number) => q*(v*B-E);
export const wireForcePerLength = (i1:number,i2:number,d:number) => 2e-7*i1*i2/d;
// Plane-to-field angle, distinct from the normal-to-field flux angle.
export const coilTorque = (N:number,B:number,A:number,I:number,planeAngle:number) => N*B*A*I*Math.cos(planeAngle);
export const generator = (angle:number,N=1,B=1,A=1,omega=1) => ({linkage:N*B*A*Math.cos(angle),emf:N*B*A*omega*Math.sin(angle)});
export const slidingRod = (B:number,l:number,v:number,R:number) => {const emf=B*l*v,I=emf/R,F=B*I*l;return {emf,I,F,mechanicalPower:F*v,heatPower:I*I*R};};
export const transformer = (Vp:number,Ip:number,Np:number,Ns:number) => ({Vs:Vp*Ns/Np,Is:Ip*Np/Ns});
export const lineLoss = (power:number,voltage:number,R:number) => (power/voltage)**2*R;
export const motorCurrent = (V:number,R:number,k:number,omega:number) => (V-k*omega)/R;
export const slip = (fieldSpeed:number,rotorSpeed:number) => (fieldSpeed-rotorSpeed)/fieldSpeed;
