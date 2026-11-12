// Every cue phrase for math-a12-i07, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {bath: 'bath filling', graph: 'this graph', positive: 'Positive means', losing: 'losing water', tap: 'The tap is', wins: 'drain wins', negative: ['is negative', 1], think: 'Think for', mean: 'axis mean', look: 'Look at the last', height: 'Its height', width: 'its width', minus: 'Minus two litres', litres: ['two litres', 2], so: 'So the bath lost', strip: 'So a strip'});
export const K2 = C('scene-02', {subtract: 'subtract', signed: 'signed sum', refine: 'Now refine', s16: 'With sixteen', s64: 'With sixty-four', s256: 'two hundred and', right: 'right ends', r28: 'twenty-eight', r31: ['thirty-one', 1], r3175: 'seven five', both: 'Both sets', t32: ['thirty-two', 2], however: 'However'});
export const K3 = C('scene-03', {name: 'own name', sum: 'stands for sum', the: 'The integral from a', zero: 'goes to zero', limit: 'A limit is', dx: 'The d x reminds', ends: 'are the ends', units: 'The units', litres: 'gives litres', any: 'any rate', itself: 'change itself', storm: 'the storm', bath: 'For this bath', here: 'Here the integral', check: "Let's check"});
export const K4 = C('scene-04', {zero: 'From zero to six', twelve: 'height twelve', half: 'Half of six', so: 'So the integral', gains: 'bath gains'});
export const K5 = C('scene-05', {every: 'Every strip', no: 'no sum', region: 'This region', tri: 'This triangle', four: ['is four', 1], so: 'So the integral', loses: 'bath loses'});
export const K6 = C('scene-06', {adds: 'The integral adds', two: ['gives thirty-two', 1], matches: 'That matches', net: 'net change', if: 'If it had', neg1: ['be negative', 1], above: 'Area above', below: 'area below'});
export const K7 = C('scene-07', {find: 'Find the integral', at1: 'At x equals one', seven: 'height seven', region: 'The region between', trap: 'a trapezium', area: 'Its area', ten: ['which is ten', 1], stays: 'The graph stays'});
export const K8 = C('scene-08', {find: 'Find the integral', from: ['From minus three', 2], half1: ['a half', 1], from2: 'From zero to three', half2: ['a half', 2], so: 'So the integral', zero: ['is zero', 1], plenty: 'plenty of area', balance: 'below balance'});
export const K9 = C('scene-09', {find: 'Find the integral', top: 'top half', two: 'radius two', minus: 'The minus sign', axis: 'flips it below', half: "Half the circle's", pi: ['two pi', 1], every: 'Every strip', mpi: 'minus two pi'});
export const K10 = C('scene-10', {rule: 'rule to remember', above: 'Above adds', every: 'Every strip keeps', on: 'settle on', one: 'One condition', b: 'bigger one', later: 'A later video'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {at: 'At zero', way: 'whole way', shape: 'The shape is', area: 'Its area', two: ['over two', 1], below: ["It's below", 2], wrong: 'is wrong', sign: 'the sign'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {crosses: 'crosses the axis', from1: 'From zero to two', from2: 'From two to six', eight: ['is eight', 1], integral: 'The integral is', six: 'which is six', ten: 'Ten is wrong', subtracts: 'below subtracts'});
export const K15 = C('scene-15', {strips: 'Strips below', now: 'Now a new', graph: "Here's the graph", shaded: ['shaded from', 1], integral: 'The integral from zero', changes: 'changes as', grow: 'does it grow'});
export const K16 = C('scene-16', {pause: 'Pause the video'});
