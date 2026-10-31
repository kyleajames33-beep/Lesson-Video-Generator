/** Pure science helpers. Frequencies and photon energies use SI unless named. */
export const LIGHT_SPEED = 299792458;
export const PLANCK = 6.62607015e-34;
export const ELECTRON_VOLT = 1.602176634e-19;
export const clamp = (p:number) => Math.max(0,Math.min(1,p));
export function gamma(beta:number) { if(Math.abs(beta)>=1) throw new RangeError('Massive inertial frame requires |v/c| < 1'); return 1/Math.sqrt(1-beta*beta); }
export const sinc = (x:number) => Math.abs(x)<1e-10 ? 1 : Math.sin(x)/x;
/** Fraunhofer angular pattern, equal coherent slit illumination; alpha=a sin(theta)/lambda. */
export const slitIntensity = (alpha:number) => sinc(Math.PI*alpha)**2;
export const doubleSlitIntensity = (alpha:number, separationRatio=4, coherent=true) => slitIntensity(alpha)*(coherent ? Math.cos(Math.PI*separationRatio*alpha)**2 : .5);
/** Normalised N-slit array factor, used with the finite slit envelope. */
export const gratingIntensity = (alpha:number,n=6,separationRatio=4) => {const b=Math.PI*separationRatio*alpha; const f=Math.abs(Math.sin(b))<1e-10 ? 1 : Math.sin(n*b)/(n*Math.sin(b)); return slitIntensity(alpha)*f*f;};
export const malus = (intensity:number,degrees:number) => intensity*Math.cos(degrees*Math.PI/180)**2;
export const photoelectronEV = (frequencyHz:number,workEV:number):number|null => {const energy=PLANCK*frequencyHz/ELECTRON_VOLT-workEV;return energy<0 ? null : energy;};
export const shiftedWavelength = (restNm:number,z:number) => restNm*(1+z);
/** Coordinates x and ct share length units. Frame S' moves right at beta*c. */
export const lorentz = (x:number,ct:number,beta:number) => ({x:gamma(beta)*(x-beta*ct),ct:gamma(beta)*(ct-beta*x)});
export const interval = (x:number,ct:number) => ct*ct-x*x;
export const energyRatio = (beta:number) => gamma(beta)-1;
export const momentumRatio = (beta:number) => gamma(beta)*beta;
export const samples = (from:number,to:number,n:number,f:(x:number)=>number):[number,number][] => Array.from({length:n},(_,i)=>{const x=from+(to-from)*i/(n-1);return [x,f(x)];});
