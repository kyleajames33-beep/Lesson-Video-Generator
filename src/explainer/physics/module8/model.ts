export const clamp = (p: number) => Math.max(0, Math.min(1, p));
export const phase = (p: number, start = 0, end = 1) => clamp((p - start) / (end - start));
export const scaleFactor = (p: number) => 1 + 1.5 * clamp(p);
export const hydrogenEnergy = (n: number) => -13.6 / (n * n);
export const remaining = (halfLives: number) => 2 ** -Math.max(0, halfLives);
export const hubbleVelocity = (distanceMpc: number, h0 = 70) => distanceMpc * h0;
export const bindingCurve: [number, number][] = [[1,0],[2,1.11],[4,7.07],[12,7.68],[16,7.98],[28,8.45],[40,8.55],[56,8.79],[62,8.795],[100,8.55],[150,8.25],[200,7.9],[238,7.57]];
// Stratified inverse-CDF sample: repeatable illustration, not a physical prediction.
export const decayTimes = Array.from({length: 80}, (_, i) => -Math.log2(1 - ((i * 37 % 80) + .5) / 80));
export const quarkCharge = (quarks: ('u'|'d')[]) => quarks.reduce((sum, q) => sum + (q === 'u' ? 2 / 3 : -1 / 3), 0);
export const siteLessonNumbers = [1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
