export const G = 6.67430e-11;
export const MU = 3.986004418e14;
export const EARTH_RADIUS = 6.371e6;
export const trajectory = (speed: number, degrees: number, height = 0, g = 10) => {
  const a = degrees * Math.PI / 180, vx = speed * Math.cos(a), vy = speed * Math.sin(a);
  const duration = (vy + Math.sqrt(vy * vy + 2 * g * height)) / g;
  return {vx, vy, duration, range: vx * duration, at: (t: number) => ({x: vx * t, y: height + vy * t - .5 * g * t * t})};
};
export const torque = (r: number, f: number, degrees: number) => r * f * Math.sin(degrees * Math.PI / 180);
export const circular = (theta: number, r: number, speed: number) => ({x:r*Math.cos(theta), y:-r*Math.sin(theta), vx:-speed*Math.sin(theta), vy:-speed*Math.cos(theta), ax:-speed*speed/r*Math.cos(theta), ay:speed*speed/r*Math.sin(theta)});
export const circularOrbit = (radius: number, mass = 1, mu = MU) => ({speed:Math.sqrt(mu/radius), period:2*Math.PI*Math.sqrt(radius**3/mu), kinetic:mu*mass/(2*radius), potential:-mu*mass/radius, total:-mu*mass/(2*radius)});
export const verticalLoopAt = (progress: number, radius = 2, g = 10) => {
  const bottomSpeedSquared=6*g*radius, steps=800, dTheta=2*Math.PI/steps;
  const speedAt=(theta:number)=>Math.sqrt(bottomSpeedSquared-2*g*radius*(1+Math.sin(theta)));
  const times=[0];
  for(let i=1;i<=steps;i++) times.push(times[i-1]+radius*dTheta/speedAt(-Math.PI/2+(i-.5)*dTheta));
  const time=Math.max(0,Math.min(1,progress))*times[steps];
  let i=1;while(i<steps&&times[i]<time)i++;
  const theta=-Math.PI/2+(i-1+(time-times[i-1])/(times[i]-times[i-1]))*dTheta;
  const height=radius*(1+Math.sin(theta)),speed=speedAt(theta);
  return {theta,height,speed,tensionPerMass:speed*speed/radius-g*Math.sin(theta),time,period:times[steps]};
};
/** Eccentric anomaly solved from mean anomaly gives equal swept area per equal time. */
export const keplerState = (meanAnomaly: number, a: number, eccentricity: number) => {
  let E=meanAnomaly;
  for(let i=0;i<20;i++) E -= (E-eccentricity*Math.sin(E)-meanAnomaly)/(1-eccentricity*Math.cos(E));
  return {x:a*(Math.cos(E)-eccentricity), y:-a*Math.sqrt(1-eccentricity**2)*Math.sin(E), E, sweptFraction:(E-eccentricity*Math.sin(E))/(2*Math.PI)};
};
